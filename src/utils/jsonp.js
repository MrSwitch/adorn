//
// JSONP
//

// JSONP COUNTER
let counter = 0;

export default function jsonp(url, callback){
	// JSONP
	// Make the anonymous function. not anonymous
	let callback_name = `jsonp_document_${counter++}`;

	window[callback_name] = callback;
	// find a place to insert the script tag
	let sibling = document.getElementsByTagName('script')[0];
	// Create the script tag
	let script = document.createElement('script');
	// Update the path with the callback name
	script.src = `${url}&callback=${callback_name}`;
	script.async = true;
	// Append
	sibling.parentNode.insertBefore(script,sibling);
};