
export default function addClass(elm, className) {
	let reg = new RegExp("(^|\\s)"+className+"($|\\s)", 'i');
	if( !elm.className.match( reg ) ){
		elm.className += ' '+className;
	}
}
