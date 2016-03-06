import create from '../utils/dom/create';
import URL from '../utils/window/url';
import ltrim from '../utils/string/ltrim';
import insertBefore from '../utils/dom/insertBefore';
import ready from '../utils/events/ready';
import sidebar from './sidebar';
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

	let breadcrumbs = create('div', {
		class: 'adorn-breadcrumbs'
	});
	breadcrumbs.appendChild(create('a', {
		href: manifest.root,
		html: `<img src="${manifest.favicon}" alt="${window.location.hostname}" title="${manifest.name}"/>`
	}));

	paths.forEach((val, index) => {
		breadcrumbs.appendChild(document.createTextNode(' '));
		breadcrumbs.appendChild(create('a', {
			href: manifest.root + paths.slice(0, index + 1).join(''),
			html: val.replace(/\.(html?)$/, '')
		}));
	});


	// Get Social Buttons
	let social_btns = create('div', {class: 'adorn-links'});
	social_btns.appendChild(github_btn(manifest));
	social_btns.appendChild(create('span'));
	social_btns.appendChild(twitter_btn(manifest));

	// Create Breadcrumbs

	// Append
	let aside = create('aside', {'class': 'adorn-toolbar'});
	aside.appendChild(breadcrumbs);
	aside.appendChild(social_btns);

	insertBefore(aside, document.body.firstElementChild || document.body.firstChild);

	// ///////////////////////////////////
	// TOC
	// ///////////////////////////////////

	ready(sidebar);
}
