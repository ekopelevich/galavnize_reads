var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['styles'], function() {
    gulp.watch('./stylesheets/*.scss',['styles']);
});

gulp.task('styles', function() {
    gulp.src('./public/stylesheets/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/build/stylesheets/'));
});
