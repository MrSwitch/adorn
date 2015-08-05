	// Auto Set/Get the ID of a tag element based
export default function id(tag) {
	if (tag.id) {
		return tag.id;
	}
	var text = (tag.innerText||tag.textContent||tag.innerHTML),
		ref = text.toLowerCase().replace(/\s/g,'-').replace(/[^a-z0-9\_\-]/g, '');

	tag.id = ref;

	return ref;
};