/*!*/
/*! Adorn by Andrew Dodson, https://adodson.com/adorn/LICENSE (MIT) */

import './components.less';

import json from 'tricks/http/json';
import fullpath from 'tricks/string/fullpath';
import meta from 'tricks/dom/meta';
import link from 'tricks/dom/link';
import query from 'tricks/dom/query';
import create from 'tricks/dom/create';
import hasClass from 'tricks/dom/hasClass';
import documentElement from 'tricks/dom/documentElement';
import ready from 'tricks/events/ready';

// Touch exists?
import 'tricks/support/touch';

// fix HTML5 in IE8
import 'tricks/support/html5';

// fix viewport in mobile
import './components/viewport';

// Phonegap Shim
import cordovaLinks from 'tricks/helper/cordovaExternalLinks';

// Analytics
import ga from 'tricks/services/googleanalytics';

// Components
import './components/security';

// Components
import helpers from './components/helpers';

// Inject controls into the page markup once the DOM has completely loaded.
ready(helpers);

// Widget components
import footer from './components/footer';
import sidebar from './components/sidebar';
import toolbar from './components/toolbar';


// Get the manifest
{
	// Manifest
	const manifest_path = meta('manifest') || link('manifest') || '/manifest.json';

	// Set the toolbar, doesn't work if document body is undefined
	json(manifest_path, setup.bind(null, manifest_path));
}

// Is this a phonegap application?
// Shim up the external Links issue
cordovaLinks();


// Setup function to be called when the body and the manifest exist.
function setup(base, manifest) {

	// Is the manifest link missing?
	if (manifest && !(meta('manifest') || link('manifest'))) {
		create('link', {rel: 'manifest', href: base}, [], document.head);
	}
	// Is the theme_color missing
	if (manifest && manifest.theme_color && !meta('theme-color')) {
		create('meta', {name: 'theme-color', content: manifest.theme_color}, [], document.head);
	}

	if (!document.body) {
		// Just in case...
		ready(setup.bind(null, base, manifest));
		return;
	}

	manifest = manifest || {};

	// Favicon
	manifest.favicon = meta('favicon') || fullpath(manifest.favicon, base) || '/favicon.ico';

	// Author
	manifest.author = meta('author') || manifest.author;

	// Root domain
	manifest.root = meta('root') || fullpath(manifest.root || '/', base);

	// Markup
	if (!hasClass(documentElement, 'no-adorn')) {
		// Toolbar
		toolbar(manifest);

		// Toolbar
		sidebar(manifest);

		// Footer
		footer(manifest);
	}

	// Set Lang
	if (!documentElement.getAttribute('lang')) {

		// Choose the manifest data or english
		documentElement.setAttribute('lang', manifest.lang || 'en');
	}

	// Fill missing <Title>
	if (!document.title) {
		// Get it from the first H1 Element
		document.title = query('h1,h2').textContent || '';
	}

	// Analytics
	{

		const tracking = meta('ga:tracking') || manifest['ga:tracking'];

		if (tracking) {
			ga(tracking);
		}

	}

	// Service Workers
	{

		let sw = meta('sw') || meta('serviceworker');

		if (sw) {
			sw = fullpath(sw);
		}
		else {
			sw = manifest.sw || manifest.serviceworker;

			if (sw) {
				sw = fullpath(sw, base);
			}
		}

		const serviceWorker = navigator.serviceWorker;

		if (sw && serviceWorker) {

			// Await for ready...
			serviceWorker.ready
				.then(() => {
				// From https://github.com/w3c/ServiceWorker/issues/799#issuecomment-165499718
					return new Promise(r => {
						if (serviceWorker.controller) return r();
						serviceWorker.addEventListener('controllerchange', () => r());
					});
				})
				.then(() => {

					// Pass any offline fetch handling too
					const fallover = manifest.fallover;
					if (fallover) {
					// Loop through the fallover list...
						fallover.forEach(item => {
							const type = 'fallover';
							const {mode} = item;
							let {fallover} = item;
							fallover = fullpath(fallover, base);

							// Post to the service workers
							serviceWorker.controller.postMessage({type, fallover, mode});
						});
					}
				});

			serviceWorker.register(sw).catch(err => {
				// registration failed :(
				console.error('Adorn: SW registration failed: ', err); // eslint-disable-line
			});

		}
	}
}
