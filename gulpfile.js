var gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCss = require('gulp-minify-css');

gulp.task('less', function() {
	gulp.src('less/*.less')
		.pipe(less())
		.pipe(minifyCss())
		.pipe(gulp.dest('css'));
});

gulp.task('default', ['less']);