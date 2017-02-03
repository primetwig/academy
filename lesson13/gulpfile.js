var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var stylus = require('gulp-stylus');
var nib = require('nib');


gulp.task('connect', function() {
    connect.server({
        root: 'web',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('web/'))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src('src/*.styl')
        .pipe(stylus({
            use: nib()
        }))
        .pipe(gulp.dest('web/'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/*.styl', ['css']);
});

gulp.task('default', ['connect', 'html', 'css', 'watch']);

