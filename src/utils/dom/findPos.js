
// Find position of an element
export var findPos = function (obj) {
	var curleft = 0,
		curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while ((obj = obj.offsetParent));
	}
	return [curleft,curtop];
};