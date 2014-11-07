var gulp = require('gulp'),
    nodemon = require('nodemon'),
    jest = require('gulp-jest'),
    watch = require('gulp-watch'),
    taskListing = require('gulp-task-listing'),
    _ = require('underscore'),
    open = require('gulp-open'),
    conf = require('./dev.config'),
    dnode = require('dnode');

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

gulp.task('watch', ['watch-js', 'watch-server'], function () {
    //gulp.src('./index.html')
    //    .pipe(open('', {
    //        url: 'http://localhost:' + conf.port
    //    }));
});

gulp.task('watch-server', function () {
    var ignore = _.map(_.keys(conf.styles), function (x) {return conf.styles[x]}).concat('gulpfile.js');
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


gulp.task('default', ['help']);