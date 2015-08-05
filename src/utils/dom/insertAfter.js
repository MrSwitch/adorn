// Insert After
export var insertAfter = function (el,ref){
	ref.nextSibling?ref.parentNode.insertBefore(el,ref.nextSibling):ref.parentNode.appendChild(el);
}