import ready from '../utils/events/ready';
import create from '../utils/dom/create';

export default function (manifest) {
	// ///////////////////////////////////
	// FOOTER
	// ///////////////////////////////////

	if (manifest.author) {

		ready(function() {

			var author = manifest.author.split(/\s*, \s*/);

			if (author) {
				// Add Footer link to repo
				document.body.appendChild(create('footer', {
						html: 'Authored by ' + (author[1] ? '<a href="' + author[1] + '" rel="author">' + author[0] + '</a>' : author[0])
					}
				));
			}

		});
	}
}
