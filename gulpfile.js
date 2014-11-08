var gulp = require('gulp'),
    nodemon = require('nodemon'),
    jest = require('gulp-jest'),
    watch = require('gulp-watch'),
    taskListing = require('gulp-task-listing'),
    webpack = require('gulp-webpack'),
    _ = require('underscore'),
    open = require('gulp-open'),
    conf = require('./dev.config');

/**
 * Construct glob for all js/specs in the project so can run tests everytime this changes.
 */
function constructJSGlob() {
    var glob = _.map(conf.ext.js, function (x) { return './' + conf.scripts + '/**/*.' + x; });
    _.each(conf.ext.spec, function (x) { glob.push('./' + conf.tests + '/**/*.' + x) });
    glob = glob.concat('!' + './' + conf.tests + '/support/preprocessor.js');
    return glob;
}

var JS_FILES = constructJSGlob();

/**
 * Run Jest tests, ensuring that all jsx is transformed to js.
 */
function test() {
    return gulp.src(conf.tests).pipe(jest({
        scriptPreprocessor: "./support/preprocessor.js",
        unmockedModulePathPatterns: [
            "node_modules/react"
        ],
        testDirectoryName: conf.tests,
        testPathIgnorePatterns: [
            "node_modules",
            conf.tests + "/support"
        ],
        moduleFileExtensions: conf.ext.spec
    }));
}

(function configureHelp() {
    var HELP_EXCLUSIONS = ['default'];

    function excludeFilter(task) {
        return HELP_EXCLUSIONS.indexOf(task) > -1;
    }

    gulp.task('help', taskListing.withFilters(null, excludeFilter));
})();


gulp.task('test', function () {
    return test();
});

gulp.task('watch', ['watch-js', 'watch-server']);

gulp.task('watch-server', function () {
    var ignore = _.map(_.keys(conf.styles), function (x) {return conf.styles[x]}).concat('gulpfile.js', 'app.config.js', 'index.html');
    nodemon({
        script: 'server.js',
        ignore: ignore
    })
        .on('restart', function () {
            console.log('restarting node server');
        })
        .on('crash', function () {
            console.log('\nNode has crashed - will restart after next save.');
        });
});
gulp.task('watch-js', function () {
    gulp.src(JS_FILES).pipe(watch(JS_FILES, function () {
        return test();
    }));
});

function _build(uglify) {
    var webpackConf = require('./webpack.config.js');
    if (uglify) {
        var UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
        webpackConf.plugins.push(new UglifyJsPlugin());
    }
    webpackConf.output.filename = uglify ? conf.compiled : conf.built;
    return gulp.src(conf.scripts + '/app.jsx')
        .pipe(webpack(webpackConf))
        .pipe(gulp.dest(conf.bin));
}

gulp.task('build', function () {
    return _build(false);
});

gulp.task('compile', function () {
    return _build(true);
});

gulp.task('default', ['help']);