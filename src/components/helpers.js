

import each from '../utils/each';
import addEvent  from '../utils/dom/addEvent';
import create from '../utils/dom/create';
import insertAfter from '../utils/dom/insertAfter';


export default function () {

	// TryIt
	each('pre', function(pre){
		if(pre.className === 'tryit'||pre.className === 'tryitoffline'){
			// Create a button and insert it after the pre tag
			tryitButton(pre);
		}
	});

	// TryIt, View
	each('script', function(script){
		var func = script.getAttribute('data-tryit');
		if(func){
			// Create a button and insert it after the pre tag
			tryitButton(script,window[func]);
		}

		if(script.getAttribute('src')){

			// Add click event to open in new window
			addEvent(script, 'click', function(){
				window.open(script.getAttribute('src'), '_blank');
			});
		}
	});

	each('link', function(script){
		if(script.getAttribute('href')){

			// Add click event to open in new window
			addEvent(script, 'click', function(){
				window.open(script.getAttribute('href'), '_blank');
			});
		}
	});
}



//
function tryitButton(pre,func){
	var btn = create('button',{html:'tryit','class':'tryit'});
	insertAfter(btn, pre);

	addEvent(btn, 'click', function(){
		if(func){
			func();
		}
		else if(typeof(tryit)==='function'&&!tryit(pre.innerText)){
			return;
		}else{
			setTimeout( function(){ eval(pre.innerText); }, 100);
		}
	});

	if(!func){
		pre.setAttribute('contenteditable', true);
	}
}

