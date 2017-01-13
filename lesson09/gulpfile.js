var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

gulp.task('default', function() {
    // place code for your default task here
});


//gulp.task('css', function() {
//    gulp.src('css/*.css')
//        .pipe(concatCss('bundle.css'))
//        .pipe(gulp.dest('web/'))
//        .pipe(livereload({ start: true }));
//});
//
//gulp.task('watch', function() {
//    gulp.watch('css/*.css', ['css']);
//});
//
//gulp.task('default', ['css', 'watch']);






//gulp.task('connect', function() {
//    connect.server({
//        root: 'web',
//        livereload: true
//    });
//});
//
//gulp.task('css', function() {
//    gulp.src('css/*.css')
//        .pipe(concatCss('bundle.css'))
//        .pipe(gulp.dest('web/'))
//        .pipe(connect.reload());
//});
//
//gulp.task('watch', function() {
//    gulp.watch('css/*.css', ['css']);
//});
//
//gulp.task('default', ['connect', 'css', 'watch']);

