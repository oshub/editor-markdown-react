var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('style', function(){
	gulp.src('src/style/**/*.scss')
	.pipe($.plumber())
	.pipe($.rubySass())
	.pipe(gulp.dest('build/style'));
});

gulp.task('react', function() {
	browserify(['./src/view/app.jsx'])
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    // .pipe(buffer())
    // .pipe($.uglify())
    .pipe(gulp.dest('build/jsx'));
});

gulp.task('watch', function(){
	gulp.watch('src/style/**/*.scss', ['style']);
	gulp.watch('src/view/**/*.jsx', ['react']);
});

gulp.task('default', ['style', 'react', 'watch']);