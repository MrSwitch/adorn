/*eslint no-console:0*/
'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const util = require('gulp-util');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const args = require('yargs').argv;
const gulpif = require('gulp-if');
const less = require('gulp-less');
const minifyCSS = require('gulp-minify-css');

gulp.task('build', () => {
	browserify('./src/adorn.js', {debug: true})
	.transform(babelify, {
		presets: ['es2015'],
		plugins: ['transform-object-assign'] //add-module-exports allows mixing of commonJs and ES6 exports
	})
	.bundle()
	.on('error', util.log.bind(util, 'Browserify Error'))
	.pipe(source('./adorn.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(gulpif(!args.debug, uglify({mangle: false, preserveComments: 'license'})))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./'))
	.on('end', console.log.bind(console, 'BUILT'));
});

gulp.task('default', ['build']);

gulp.task('watch', ['build', 'less'], () => {
	gulp.watch('src/**/*.js', ['build']);
	gulp.watch('src/**/*.less', ['less']);
});

gulp.task('less', () => gulp.src('./src/adorn.less')
    .pipe(less())
	.pipe(minifyCSS())
    .pipe(gulp.dest('./')));
