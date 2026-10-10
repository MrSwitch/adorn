// Ambient type declarations for the adorn project

// Web App Manifest (plus adorn-specific extensions)
interface FalloverRule {
	mode?: RequestMode;
	url?: string;
	fallover: string;
}

interface Manifest {
	name?: string;
	author?: string;
	lang?: string;
	root?: string;
	favicon?: string;
	theme_color?: string;
	github?: string;
	shoutout?: string;
	sw?: string;
	serviceworker?: string;
	fallover?: FalloverRule[];
	paths?: string[];
	'ga:tracking'?: string;
	[key: string]: any;
}

// Optional global hook used by helpers.ts for "tryit" buttons
declare var tryit: ((code: string) => unknown) | undefined;

// Style imports handled by esbuild-plugin-less
declare module '*.less';
