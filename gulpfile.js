var gulp = require('gulp'),
    nodemon = require('nodemon'),
    jest = require('gulp-jest'),
    watch = require('gulp-watch');


var JS_FILES = [
    './scripts/**/*.js',
    './scripts/**/*.jsx',
    './__tests__/**/*.js',
    './__tests__/**/*.jsx',
    '!./__tests__/support/preprocessor.js'
];

function test() {
    return gulp.src('__tests__').pipe(jest({
        scriptPreprocessor: "./support/preprocessor.js",
        unmockedModulePathPatterns: [
            "node_modules/react"
        ],
        testDirectoryName: "__tests__",
        testPathIgnorePatterns: [
            "node_modules",
            "__tests__/support"
        ],
        moduleFileExtensions: [
            "js",
            "json",
            "react"
        ]
    }));
}

gulp.task('test', function () {
    return test();
});

gulp.task('jsWatch', function () {
    gulp.src(JS_FILES).pipe(watch(JS_FILES, function () {
        console.log(1);
        return test();
    }));
});

gulp.task('nodeWatch', function () {
    nodemon({
        script: 'server.js',
        ignore: ['scripts/', 'styles/', 'gulpfile.js']
    })
        .on('restart', function () {
            console.log('restarting node server');
        })
        .on('crash', function () {
            console.log('\nNode has crashed - will restart after next save.');
        })
});

gulp.task('watch', ['nodeWatch', 'jsWatch']);
