
export default function removeClass(elm, className){
	var reg = new RegExp("(^|\\s)+"+className+"($|\\s)+", 'i');
	elm.className = elm.className.replace(reg, ' ');
};