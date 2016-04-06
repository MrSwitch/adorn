import create from '../utils/dom/create';
import URL from '../utils/window/url';
import ltrim from '../utils/string/ltrim';
import insertBefore from '../utils/dom/insertBefore';
import ready from '../utils/events/ready';
import contentSelect from './contentSelect';
import {twitter_btn, github_btn} from './social';

// ///////////////////////////////////
// TOOLBAR
// ///////////////////////////////////

export default manifest => {

	//
	// Build toolbar
	//

	// Tidy the path
	let path = (window.location.pathname || '');
	let root_path = URL(manifest.root).pathname;

	// Remove the root path from the path
	path = ltrim(path, root_path);

	// Trim the path
	path = path.replace(/^\//g, '')

	var paths = path.split(/([^\/]+\/?)/).filter((s) => !!s);
	manifest.paths = paths;

	let crumbs = [
		create('a', {href: manifest.root},
			[
				create('img', {src: manifest.favicon, alt: window.location.hostname, title: manifest.name})
			])
	];

	paths.forEach((val, index) => {

		let href = manifest.root + paths.slice(0, index + 1).join('');
		let text = val.replace(/\.(html?)$/, '');

		crumbs.push(
			' ',
			create('a', {href}, [text])
		);
	});

	// Create Breadcrumbs
	let breadcrumbs = create('div', {'class': 'adorn-breadcrumbs'}, crumbs);

	// Get Social Buttons
	let social_btns = create('div', {class: 'adorn-links'},
		[
			github_btn(manifest),
			create('span'),
			twitter_btn(manifest)
		]);

	// Append
	let aside = create('aside', {'class': 'adorn-toolbar'},
		[
			breadcrumbs,
			social_btns
		]);

	insertBefore(aside, document.body.firstElementChild || document.body.firstChild);

	// ///////////////////////////////////
	// TOC
	// ///////////////////////////////////

	contentSelect(breadcrumbs);
}
