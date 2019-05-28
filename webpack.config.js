'use strict';

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
	WATCH
} = process.env;

const resolve = {
	// directories where to look for modules
	modules: [
		'node_modules',
	],

	// extensions that are used
	extensions: ['.js'],
};

const configJS = {
	watch: !!WATCH, //eslint-disable-line
	mode: !WATCH ? 'production' : 'development',
	entry: {
		adorn: './src/adorn.js'
	},
	output: {
		path: __dirname,
		filename: '[name].js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /.js?$/i,
				exclude: /node_modules\/(?!tricks)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.less$/i,
				use: [
					{
						loader: 'style-loader' // creates style nodes from JS strings
					},
					{
						loader: 'css-loader',
					},
					'less-loader'
				]
			}
		]
	},
	resolve,
	plugins: []
};


const SWJS = {
	watch: !!WATCH, //eslint-disable-line
	mode: !WATCH ? 'production' : 'development',
	entry: {
		adorn_sw: './src/adorn_sw.js'
	},
	output: {
		path: __dirname,
		filename: '[name].js',
	},
	devtool: 'source-map',
	resolve,
	plugins: []
};


const configCSS = {
	watch: !!WATCH, //eslint-disable-line
	mode: !WATCH ? 'production' : 'development',
	entry: {
		adorn: './src/adorn.less'
	},
	output: {
		path: __dirname,
		filename: '[name].css',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.less$/i,
				use: [
					{
						loader: 'css-loader',
					},
					'less-loader'
				]
			}
		]
	},

	// Plugins
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'adorn.css'
		})
	]
};


if (!WATCH) {
	// config.module.loaders[0].query.presets.push('minify');
	// config.module.loaders[0].query.presets.push({mangle: false});

	const UglifyPlugin = require('uglifyjs-webpack-plugin');

	const uglifyPlugin = new UglifyPlugin({
		parallel: true,
		sourceMap: true,
		uglifyOptions: {
			mangle: true,
			compress: {
				passes: 2,
				drop_console: false,
				drop_debugger: true,
				ecma: 5,
			},
			keep_fnames: false,
			output: {
				beautify: false,
				preamble: '/* Adorn */',
			}
		}
	});

	const prodModePlugin = new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	});

	configJS.plugins.push(uglifyPlugin, prodModePlugin);
	SWJS.plugins.push(uglifyPlugin, prodModePlugin);
}

module.exports = [configJS, SWJS, configCSS];