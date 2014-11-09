var gulp = require('gulp'),
    nodemon = require('nodemon'),
    jest = require('gulp-jest'),
    watch = require('gulp-watch'),
    taskListing = require('gulp-task-listing'),
    gulpWebpack = require('gulp-webpack'),
    _ = require('underscore'),
    replace = require('gulp-replace'),
    open = require('gulp-open'),
    webpack = require('webpack'),
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
var HTML_FILES = ['./index.html'];

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
// If any dev server related configuration changes, we need to relaunch as opposed to hot reloading.
gulp.task('watch-server', function () {
    var ignore = _.map(_.keys(conf.styles), function (x) {return conf.styles[x]}).concat('gulpfile.js', 'app.config.js', 'index.html');
    nodemon({
        script: 'devServer.js',
        ignore: ignore
    })
        .on('restart', function () {
            console.log('restarting node server');
        })
        .on('crash', function () {
            console.log('\nNode has crashed - will restart after next save.');
        });
});
// When JSX/JS files change, we want to run the Jest tests.
gulp.task('watch-js', function () {
    gulp.src(JS_FILES).pipe(watch(JS_FILES, function () {
        return test();
    }));
});

gulp.task('compile', function () {
    var webpackConf = require('./webpack.config.js');
    // The webpack uglify plugin will uglify both the JS and the embedded styles.
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    webpackConf.plugins.push(new UglifyJsPlugin());
    // Ensure that dev-only styles are not applied in the compiled application
    // (e.g. css transitions applied to all elements)
    webpackConf.plugins.push(new webpack.DefinePlugin({
        dev: 'false'
    }));
    webpackConf.output.filename = conf.compilation.name;
    var dest = conf.compilation.dir;
    var publicDest = dest + '/public/';
    // Pack the JSX & transform into JS.
    gulp.src(conf.scripts + '/app.jsx')
        .pipe(gulpWebpack(webpackConf))
        .pipe(gulp.dest(publicDest));
    // Rename bundle.js to configured name.
    gulp.src(HTML_FILES)
        .pipe(replace('scripts/bundle.js', conf.compilation.name))
        .pipe(gulp.dest(publicDest));
});

gulp.task('default', ['help']);

module.exports = gulp;