// Iterate on all items until a condition has been met

import {each} from './each';

export var until = function (matches, callback) {
	var b = false;
	each(matches, function(item){
		if( b )
			return;
		b = callback.apply(item, arguments);
	});
};
