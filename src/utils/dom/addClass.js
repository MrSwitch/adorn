
export var addClass = function (elm, className) {
	var reg = new RegExp("(^|\\s)"+className+"($|\\s)", 'i');
	if( !elm.className.match( reg ) ){
		elm.className += ' '+className;
	}
}
