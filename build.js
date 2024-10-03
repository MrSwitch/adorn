import {build} from 'esbuild';
import less from 'less';
import {lessLoader} from 'esbuild-plugin-less';
import inlineImportPlugin from 'esbuild-plugin-inline-import';

build({
	entryPoints: ['./src/adorn.js', './src/adorn.less', './src/adorn_sw.js'],
	bundle: true,
	minify: true,
	target: 'es2020',
	sourcemap: true,
	outdir: './',
	plugins: [
        inlineImportPlugin({
            filter: /^less:/,
            transform: less.render.bind(less)
        }), 
        lessLoader()], // Just plug in
});
