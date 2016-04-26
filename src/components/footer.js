import ready from 'tricks/events/ready';
import create from 'tricks/dom/create';

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
