/**
 * adorn.js
 * Adds document navigation to a page.
 */

import json from './utils/http/json';
import rURL from './utils/string/rURL';
import meta from './utils/dom/meta';
import ready from './utils/events/ready';

// Touch exists?
import './utils/support/touch';

// fix HTML5 in IE8
import './utils/support/html5';

// fix viewport in mobile
import './utils/support/viewport';

// Analytics
import ga from './utils/services/googleanalytics';

// Components
import helpers from './components/helpers';

// Inject controls into the page markup once the DOM has completely loaded.
ready(helpers);

// Widget components
import toolbar from './components/toolbar';
import footer from './components/footer';


// Get the manifest
{
	// Manifest
	let manifest_json = meta('manifest') || '/manifest.json';

	// Set the toolbar, doesn't work if document body is undefined
	json(manifest_json, setup.bind(null, manifest_json));
}

// Setup function to be called when the body and the manifest exist.
function setup(base, manifest = {}) {

	if (!document.body) {
		// Just in case...
		ready(setup.bind(null, base, manifest));
		return;
	}

	// Favicon
	manifest.favicon = meta('favicon') || rURL(manifest.favicon, base) || '/favicon.ico';

	// Author
	manifest.author = meta('author') || manifest.author;

	// Root domain
	manifest.root = rURL(manifest.root || '/', base);

	// Markup
	{
		// Toolbar
		toolbar(manifest);

		// Footer
		footer(manifest);
	}

	// Analytics
	{

		let tracking = meta('ga:tracking') || manifest['ga:tracking'];

		if (tracking) {
			ga(tracking);
		}

	}
}
