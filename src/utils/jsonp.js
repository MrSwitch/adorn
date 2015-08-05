//
// JSONP
//

// JSONP COUNTER
var jsonp_counter = 0;

export var jsonp = function (url, callback){
	// JSONP
	// Make the anonymous function. not anonymous
	var callback_name = 'jsonp_document_' + jsonp_counter++;

	window[callback_name] = callback;
	// find a place to insert the script tag
	var sibling = document.getElementsByTagName('script')[0];
	// Create the script tag
	var script = document.createElement('script');
	// Update the path with the callback name
	script.src = (url+"&callback="+callback_name);
	script.async = true;
	// Append
	sibling.parentNode.insertBefore(script,sibling);
}