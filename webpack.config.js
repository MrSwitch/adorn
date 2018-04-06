'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
	WATCH
} = process.env;

const config = {
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
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						},
						'less-loader'
					]
				})
			}
		]
	},
	resolve: {
		// directories where to look for modules
		modules: [
			'node_modules',
		],

		// extensions that are used
		extensions: ['.js'],
	},

	// Plugins
	plugins: [
		new ExtractTextPlugin({
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
				drop_console: true,
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

	config.plugins.push(uglifyPlugin, prodModePlugin);
}

module.exports = config;
