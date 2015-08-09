var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
    scripts: ['src/**/*']
};

gulp.task('clean', function(cb) {
    del(['build'], cb);
});

gulp.task('scripts', ['clean'], function() {
    return gulp.src(paths.scripts)
        //.pipe(sourcemaps.init())
        //.pipe(uglify())
        //.pipe(concat('all.min.js'))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
});

gulp.task('default', ['scripts']);
