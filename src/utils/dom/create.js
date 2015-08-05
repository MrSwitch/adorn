//
// Create and Append new Dom elements
// @param node string
// @param attr object literal
// @param dom/stringx
//
export default function create(node,attr) {

	var n = typeof(node)==='string' ? document.createElement(node) : node;

	if(typeof(attr)==='object' ){
		if( "tagName" in attr ){
			target = attr;
		}
		else{
			for(var x in attr){if(attr.hasOwnProperty(x)){

				if(x === 'text'){
					n.appendChild(document.createTextNode(attr[x]));
				}
				else if(x === 'html'){
					if(typeof(attr[x])==='string'){
						n.innerHTML = attr[x];
					}
					else{
						n.appendChild(attr[x]);
					}
				}
				else if(typeof(attr[x])==='object'){
					for(var y in attr[x]){if(attr[x].hasOwnProperty(y)){
						n[x][y] = attr[x][y];
					}}
				}
				else {
					n.setAttribute(x, attr[x]);
				}
			}}
		}
	}
	return n;
};