import {build} from 'esbuild';
import {lessLoader} from 'esbuild-plugin-less';

build({
	entryPoints: ['./src/adorn.js', './src/adorn_sw.js'],
	bundle: true,
	minify: true,
	target: 'es2020',
	sourcemap: true,
	outdir: './',
	plugins: [
		lessLoader()
	],
});
