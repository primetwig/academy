var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var concatCss = require('gulp-concat-css');
var babel = require('gulp-babel');

//gulp.task('default', function() {
//    // place code for your default task here
//});


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
    gulp.src('css/*.css')
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('web/'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ["es2015"],
            plugins: ["transform-object-rest-spread"]
        }))
        .pipe(gulp.dest('web/js/'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['js']);
});

gulp.task('default', ['connect', 'html', 'css', 'js', 'watch']);

