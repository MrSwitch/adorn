export default function rURL(path, relative) {
	if (!path) {
		return '';
	}

	try {
		// This only works in a few browsers, but what the heck. i'll fix it later
		return (new URL(path, new URL(relative, window.location))).href
	}
	catch (e) {
		return path;
	}
};