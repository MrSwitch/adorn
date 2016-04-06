import ready from '../utils/events/ready';
import create from '../utils/dom/create';

export default manifest => {
	// ///////////////////////////////////
	// FOOTER
	// ///////////////////////////////////

	if (manifest.author) {

		ready(() => {

			var author = manifest.author.split(/\s*, \s*/);

			if (author) {

				var children = ['Authored by '];

				if (author[1]) {
					children.push(
						create('a', {
							href: author[1],
							rel: 'author'
						}, [
							author[0]
						])
					);
				}
				else {
					children.push(author[0]);
				}

				// Add Footer link to the body
				create('footer', {}, children, document.body);
			}

		});
	}
}
