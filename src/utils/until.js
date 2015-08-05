// Iterate on all items until a condition has been met

import each from './each';

export default function until(matches, callback) {
	var b = false;
	each(matches, (item) => {
		if( b )
			return;
		b = callback.call(item, item);
	});
};
