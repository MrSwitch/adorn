import create from 'tricks/dom/create';
import URL from 'tricks/window/url';
import ltrim from 'tricks/string/ltrim';
import insertBefore from 'tricks/dom/insertBefore';
import contentSelect from './contentSelect';
import {twitter_btn, github_btn, share_btn} from './social';

// ///////////////////////////////////
// TOOLBAR
// ///////////////////////////////////

export default manifest => {

	//
	// Build toolbar
	//

	// Tidy the path
	let path = (window.location.pathname || '');
	const root_path = URL(manifest.root).pathname;

	// Remove the root path from the path
	path = ltrim(path, root_path);

	// Trim the path
	path = path.replace(/^\//g, '');

	const paths = path.split(/([^/]+\/?)/).filter(s => !!s);
	manifest.paths = paths;

	const crumbs = [
		create('a', {href: manifest.root},
			[
				create('img', {src: manifest.favicon, alt: window.location.hostname, title: manifest.name})
			])
	];

	paths.forEach((val, index) => {

		const href = manifest.root + paths.slice(0, index + 1).join('');
		const text = val.replace(/\.(html?)$/, '');

		crumbs.push(
			' ',
			create('a', {href}, [text])
		);
	});

	// Create Breadcrumbs
	const breadcrumbs = create('div', {class: 'adorn-breadcrumbs'}, crumbs);

	// Get Social Buttons
	const social_btns = create('div', {class: 'adorn-links'},
		[
			github_btn(manifest),
			create('span'),
			twitter_btn(manifest),
			create('span'),
			share_btn(manifest)
		]);

	// If Navbar Shoutout
	if (manifest.shoutout) {
		social_btns.appendChild(create('span'));
		social_btns.insertAdjacentHTML('beforeend', manifest.shoutout);
	}

	// Append
	const aside = create('aside', {class: 'adorn-toolbar'},
		[
			breadcrumbs,
			social_btns
		]);

	insertBefore(aside, document.body.firstElementChild || document.body.firstChild);

	// ///////////////////////////////////
	// TOC
	// ///////////////////////////////////

	contentSelect(breadcrumbs);
};
