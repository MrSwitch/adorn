// Insert After
export default function insertAfter(el,ref){
	ref.nextSibling?ref.parentNode.insertBefore(el,ref.nextSibling):ref.parentNode.appendChild(el);
}