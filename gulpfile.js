var gulp = require('gulp'),
    nodemon = require('nodemon'),
    open = require('gulp-open');


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
        });
});

gulp.task('watch', ['nodeWatch'], function () {
    gulp.src('./index.html')
        .pipe(open('', {
            url: 'http://localhost:3000'
        }));
});
