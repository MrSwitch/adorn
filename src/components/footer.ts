import ready from 'tricks/events/ready';
import create from 'tricks/dom/create';

export default function footer(manifest: Manifest) {
	// ///////////////////////////////////
	// FOOTER
	// ///////////////////////////////////

	if (manifest.author) {

		const authorField = manifest.author;

		ready(() => {

			const author = authorField.split(/\s*, \s*/);

			if (author) {

				const children: Array<Node | string> = ['Authored by '];

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
