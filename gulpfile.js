var gulp = require('gulp'),
    sass = require('gulp-sass'),
    open = require('gulp-open'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');

var SCSS_FILES = './app/styles/scss/**/*.scss';
var CSS_FOLDER = './app/styles/css';
var HTML_FILES = './app/**/*.html';
var JS_FILES = './app/js/**/*.js';

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('watch', ['connect', 'scssWatch', 'htmlJsWatch'], function() {
    gulp.src('./app/index.html')
        .pipe(open('', {
            url: 'localhost:8080'
        }));
});

gulp.task('scssWatch', function() {
    watch(SCSS_FILES)
        .pipe(sass({
            onError: function(err) {
                console.log('you call that scss? check out this error: \n', err);
            }
        }))
        .pipe(gulp.dest(CSS_FOLDER))
        .pipe(connect.reload());
});

gulp.task('htmlJsWatch', function() {
    watch( [HTML_FILES, JS_FILES] );

    watch(HTML_FILES)
        .pipe(connect.reload());

    watch(JS_FILES)
        .pipe(connect.reload());
});


gulp.task('compile', ['']);