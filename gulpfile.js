/*eslint no-console:0*/
'use strict';

let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let util = require('gulp-util');
let buffer = require('vinyl-buffer');
let source = require('vinyl-source-stream');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let args = require('yargs').argv;
let gulpif = require('gulp-if');
let less = require('gulp-less');
let minifyCSS = require('gulp-minify-css');

gulp.task('build', () => {
	browserify('./src/adorn.js', {debug: true})
	.transform(babelify, {
		presets: ['es2015',
			['env', {
				include: ['es6.object.assign', 'es6.promise']
			}]
		],
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

gulp.task('less', () => {
  return gulp.src('./src/adorn.less')
    .pipe(less())
	.pipe(minifyCSS())
    .pipe(gulp.dest('./'));
});
