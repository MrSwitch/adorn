/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/adorn.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/components.less":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/components.less ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1:target,h2:target,h3:target,h4:target{-webkit-animation:slideInDown .3s cubic-bezier(.68,-.55,.265,1.55) alternate,fadeIn .3s cubic-bezier(.68,-.55,.265,1.55);animation:slideInDown .3s cubic-bezier(.68,-.55,.265,1.55) alternate,fadeIn .3s cubic-bezier(.68,-.55,.265,1.55)}a.adorn-anchor{position:relative;text-indent:0;text-decoration:none;outline:none;opacity:0;transition:opacity .3s}:hover>a.adorn-anchor{opacity:.5}a.adorn-anchor:hover{opacity:1}a.adorn-anchor:before{content:\"#\";position:absolute;left:-1em;color:inherit;vertical-align:middle}a.adorn-anchor:hover:before{-webkit-transform:scale(1.1);-webkit-transform-origin:50% 50%;transform:scale(1.1);transform-origin:50% 50%}.adorn-toolbar{-webkit-transform:translateZ(0);-webkit-transform-origin:0 0;transform:translateZ(0);transform-origin:0 0;-webkit-animation:fadeIn .3s ease;animation:fadeIn .3s ease;background-color:#fff;height:50px;color:#000;display:-webkit-flex;display:flex;-webkit-flex-flow:row;flex-flow:row;-webkit-justify-content:space-between;justify-content:space-between;left:0;right:0;margin:0;padding:5px 10px;position:fixed;top:0;z-index:1;white-space:nowrap}.adorn-toolbar>:last-child{text-align:right;margin-left:20px}.adorn-toolbar>:first-child{text-align:left}.adorn-toolbar>*{flex:1 0 auto;-webkit-flex:1 0 auto;white-space:normal;display:inline-block}.adorn-toolbar:after{content:\"\";border-bottom:1px solid #c7c7c7;position:absolute;bottom:0;width:100%;left:0;z-index:-1;-webkit-animation:fillWidth 1s linear forwards;animation:fillWidth 1s linear forwards}@media (max-width:650px),screen and (max-device-width:480px){.adorn-toolbar{transition:-webkit-transform 1s;transition:transform 1s}.adorn-toolbar #adorn-edit,.adorn-toolbar #adorn-edit+*{display:none}}.adorn-breadcrumbs{white-space:nowrap}.adorn-breadcrumbs>*{display:inline-block;transition:all .3s ease-in}.adorn-breadcrumbs>*>img{margin:-5px 10px -5px 0;background:hsla(0,0%,100%,.2);border-radius:50%;height:36px;vertical-align:middle;width:36px;transition:all .3s}.adorn-breadcrumbs>*>img:hover{-webkit-transform:scale(2.5);-webkit-transform-origin:50% 50%;transform:scale(2.5);transform-origin:50% 50%;filter:none}.adorn-breadcrumbs>:hover~*{transition:all 1s ease-in;-webkit-transform:translateX(50px);-webkit-transform-origin:0 0;transform:translateX(50px);transform-origin:0 0;opacity:0;filter:alpha(opacity=0)}.adorn-breadcrumbs>:last-child{text-decoration:none;color:#444}.adorn-links{white-space:nowrap}.adorn-links>span{margin:0 20px}.adorn-links>span:after{content:\"\\22C5\"}@media (max-width:650px),screen and (max-device-width:480px){.adorn-links>span{margin:0 2px}}@-webkit-keyframes slideInDown{0%{transform:translateY(-100px);-webkit-transform:translateY(-100px)}}@keyframes slideInDown{0%{transform:translateY(-100px);-webkit-transform:translateY(-100px)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.webkit{content:\"\"}@-webkit-keyframes fillWidth{0%{width:0;left:50%}to{width:100%;left:0}}.key{content:\"\"}@keyframes fillWidth{0%{width:0;left:50%}to{width:100%;left:0}}.adorn-toc{display:inline-block;margin-left:5px}.adorn-toc:before{content:\"#\"}.adorn-sidebar{background:#eee;border-right:1px solid #c7c7c7;height:calc(100% - 50px);left:0;overflow:auto;padding:10px;position:fixed;top:50px;width:200px;-webkit-animation:fadeIn 1s ease;animation:fadeIn 1s ease}@media (max-width:1048px){.adorn-sidebar{display:none}}.adorn-sidebar a{text-decoration:none;color:inherit}.adorn-sidebar a:hover{color:#0c50c7}.adorn-sidebar li,.adorn-sidebar ul{margin:0;padding:0}.adorn-sidebar>ul{margin:0 -10px}.adorn-sidebar>ul>li>a{font-weight:700}.adorn-sidebar li{list-style:none;padding:0 10px}.adorn-sidebar li.selected>a{color:#0c50c7}.adorn-sidebar li li{font-size:.9em}@supports (appearance:none) or (-webkit-appearance:none) or (-moz-appearance:none){.adorn-toc select{font:inherit;appearance:none;-webkit-appearance:none;-moz-appearance:none;text-decoration:underline;height:2em}.adorn-toc select:not(:focus){border-color:transparent;color:inherit;background-color:inherit}.adorn-toc select::-ms-expand{display:none}}.clearfix{display:inline-block}.clearfix:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}* html .clearfix{height:1%}.clearfix{display:block}.adorn-icon-github{color:inherit;display:inline-block;font-style:normal;text-decoration:inherit}.adorn-icon-github:after{content:\"GitHub\"}.adorn-icon-twitter{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M27.49 10.126c.011.254.017.507.017.766 0 7.808-5.942 16.809-16.813 16.809a16.72 16.72 0 0 1-9.056-2.653c.463.058.932.083 1.408.083 2.769 0 5.317-.944 7.341-2.534a5.9 5.9 0 0 1-5.52-4.097c.36.067.729.104 1.111.104.54 0 1.185-.071 1.68-.208-2.704-.541-4.616-2.929-4.616-5.795v-.075c0 .441 1.584.711 2.552.74-1.584-1.06-2.69-2.87-2.69-4.917 0-1.085.261-2.101.768-2.974 2.916 3.578 7.255 5.928 12.167 6.173a5.702 5.702 0 0 1-.16-1.343 5.9 5.9 0 0 1 5.901-5.907 5.89 5.89 0 0 1 4.312 1.863 11.91 11.91 0 0 0 3.754-1.431 5.909 5.909 0 0 1-2.598 3.266 12.019 12.019 0 0 0 3.392-.928 11.983 11.983 0 0 1-2.948 3.057z' fill='%23black'/%3E%3C/svg%3E\") no-repeat 50%;background-size:1em}.adorn-icon-share,.adorn-icon-twitter{width:1em;height:1em;font-size:1.5em;vertical-align:middle;display:inline-block}.adorn-icon-share{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath stroke='null' d='M26.293 20.872a5.39 5.39 0 0 0-3.933 1.705l-11.563-5.7c.04-.266.067-.538.067-.818 0-.271-.026-.536-.064-.797l11.546-5.637a5.395 5.395 0 0 0 3.947 1.72c3 0 5.433-2.45 5.433-5.47 0-3.02-2.432-5.468-5.433-5.468s-5.432 2.448-5.432 5.469c0 .271.026.536.064.797L9.38 12.31a5.395 5.395 0 0 0-3.947-1.72C2.432 10.59 0 13.04 0 16.06c0 3.02 2.432 5.468 5.432 5.468 1.55 0 2.944-.656 3.933-1.704l11.563 5.7a5.43 5.43 0 0 0-.068.817c0 3.021 2.432 5.469 5.432 5.469s5.433-2.448 5.433-5.469c0-3.02-2.431-5.469-5.432-5.469z'/%3E%3C/svg%3E\") no-repeat 50%;background-size:1em}.adorn-speeach-bubble{color:#444;margin-left:5px;position:relative;line-height:1;text-align:center;display:inline-block;background-color:#fff;border:1px solid #444;color:#000;border-radius:15%;padding:5px;transition:all .3s cubic-bezier(.68,-.55,.265,1.55)}.adorn-speeach-bubble:after,.adorn-speeach-bubble:before{position:absolute;left:-6px;bottom:5px;content:\" \";width:0;height:0;padding:0;border:5px solid transparent;border-width:3.5px 5px;border-right-color:inherit;border-left-width:0}.adorn-speeach-bubble:after{border-right-color:#fff;left:-4px;border-width:2.975px 4.25px;border-left-width:0;bottom:5.5px}.adorn-speeach-bubble:empty{-webkit-transform:scale(.01);-webkit-transform-origin:50% 50%;transform:scale(.01);transform-origin:50% 50%;opacity:0}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/tricks/array/toArray.js":
/*!**********************************************!*\
  !*** ./node_modules/tricks/array/toArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return Array.prototype.slice.call(obj);
};

/***/ }),

/***/ "./node_modules/tricks/browser/http/getScript.js":
/*!*******************************************************!*\
  !*** ./node_modules/tricks/browser/http/getScript.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! ../../dom/createElement.js */ "./node_modules/tricks/dom/createElement.js");
var createEvent = __webpack_require__(/*! ../../events/createEvent.js */ "./node_modules/tricks/events/createEvent.js");

module.exports = function (url, callback) {
	var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


	// Inject a script tag
	var bool = 0;
	var timer = void 0;
	var head = document.getElementsByTagName('script')[0].parentNode;
	var cb = function cb(e) {
		if (!bool++ && callback) {
			callback(e);
		}
		if (timer) {
			clearTimeout(timer);
		}
	};

	// Add timeout
	if (timeout) {
		timer = window.setTimeout(function () {
			cb(createEvent('timeout'));
		}, timeout);
	}

	// Build script tag
	var script = createElement('script', {
		src: url,
		onerror: cb,
		onload: cb,
		onreadystatechange: function onreadystatechange() {
			if (/loaded|complete/i.test(script.readyState)) {
				cb(createEvent('load'));
			}
		}
	});

	// Set Async
	script.async = true;

	// Inject script tag into the head element
	head.insertBefore(script, head.firstChild);

	return script;
};

/***/ }),

/***/ "./node_modules/tricks/browser/http/json.js":
/*!**************************************************!*\
  !*** ./node_modules/tricks/browser/http/json.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// JSON
var jsonParse = __webpack_require__(/*! ../../string/jsonParse.js */ "./node_modules/tricks/string/jsonParse.js");
var tryCatch = __webpack_require__(/*! ../../object/tryCatch.js */ "./node_modules/tricks/object/tryCatch.js");

module.exports = function (url, callback) {

	var x = new XMLHttpRequest();
	x.onload = function () {
		// Get the JSON response
		var v = _typeof(x.response) === 'object' ? x.response : jsonParse(x.response);

		// Callback
		callback(v);
	};
	x.onerror = callback;
	x.open('GET', url);

	// Set responseType if supported
	if ('responseType' in x) {
		// Setting this to an unsupported value can result in a "SYNTAX_ERR: DOM Exception 12"
		tryCatch(function () {
			return x.responseType = 'json';
		});
	}

	x.send();
};

/***/ }),

/***/ "./node_modules/tricks/browser/http/jsonp.js":
/*!***************************************************!*\
  !*** ./node_modules/tricks/browser/http/jsonp.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// JSONP
var globalCallback = __webpack_require__(/*! ../../events/globalCallback.js */ "./node_modules/tricks/events/globalCallback.js");
var getScript = __webpack_require__(/*! ./getScript.js */ "./node_modules/tricks/browser/http/getScript.js");

var MATCH_CALLBACK_PLACEHOLDER = /=\?(&|$)/;

module.exports = function (url, callback, callback_name) {
	var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 60000;


	// Change the name of the callback
	var result = void 0;

	// Add callback to the window object
	callback_name = globalCallback(function (json) {
		result = json;
		return true; // this ensure the window reference is removed
	}, callback_name);

	// The URL is a function for some cases and as such
	// Determine its value with a callback containing the new parameters of this function.
	url = url.replace(MATCH_CALLBACK_PLACEHOLDER, '=' + callback_name + '$1');

	var script = getScript(url, function () {
		callback(result);
		script.parentNode.removeChild(script);
	}, timeout);

	return script;
};

/***/ }),

/***/ "./node_modules/tricks/dom/addClass.js":
/*!*********************************************!*\
  !*** ./node_modules/tricks/dom/addClass.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// addClass
var each = __webpack_require__(/*! ./each.js */ "./node_modules/tricks/dom/each.js");
var hasClass = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tricks/dom/hasClass.js");

module.exports = function (elements, className) {
	return each(elements, function (el) {
		if (!hasClass(el, className)) {
			el.className += ' ' + className;
		}
	});
};

/***/ }),

/***/ "./node_modules/tricks/dom/attr.js":
/*!*****************************************!*\
  !*** ./node_modules/tricks/dom/attr.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var each = __webpack_require__(/*! ./each.js */ "./node_modules/tricks/dom/each.js");

module.exports = function (elements, props) {
	return each(elements, function (element) {
		for (var x in props) {
			var prop = props[x];
			if (typeof prop === 'function') {
				element[x] = prop;
			} else {
				element.setAttribute(x, prop);
			}
		}
	});
};

/***/ }),

/***/ "./node_modules/tricks/dom/create.js":
/*!*******************************************!*\
  !*** ./node_modules/tricks/dom/create.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Create and Append new Dom elements
// @param node string
// @param attr object literal
module.exports = function (node) {
	var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	var append = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;


	var n = typeof node === 'string' ? document.createElement(node) : node;

	// Attributes
	for (var x in attr) {

		if (attr.hasOwnProperty(x)) {

			if (x === 'text') {
				n.appendChild(document.createTextNode(attr[x]));
			} else if (x === 'html') {
				if (typeof attr[x] === 'string') {
					n.innerHTML = attr[x];
				} else {
					n.appendChild(attr[x]);
				}
			} else if (_typeof(attr[x]) === 'object') {
				for (var y in attr[x]) {
					if (attr[x].hasOwnProperty(y)) {
						n[x][y] = attr[x][y];
					}
				}
			} else {
				n.setAttribute(x, attr[x]);
			}
		}
	}

	// Children
	children.forEach(function (child) {
		if (typeof child === 'string') {
			child = document.createTextNode(child);
		}

		if (child) {
			n.appendChild(child);
		}
	});

	// Append
	if (append) {
		append.appendChild(n);
	}

	return n;
};

/***/ }),

/***/ "./node_modules/tricks/dom/createElement.js":
/*!**************************************************!*\
  !*** ./node_modules/tricks/dom/createElement.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attr = __webpack_require__(/*! ./attr.js */ "./node_modules/tricks/dom/attr.js");

module.exports = function (tagName, attrs) {
	var elm = document.createElement(tagName);
	attr(elm, attrs);
	return elm;
};

/***/ }),

/***/ "./node_modules/tricks/dom/documentElement.js":
/*!****************************************************!*\
  !*** ./node_modules/tricks/dom/documentElement.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = document.documentElement || document.body.parentNode;

/***/ }),

/***/ "./node_modules/tricks/dom/each.js":
/*!*****************************************!*\
  !*** ./node_modules/tricks/dom/each.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isDom = __webpack_require__(/*! ./isDom.js */ "./node_modules/tricks/dom/isDom.js");
var instanceOf = __webpack_require__(/*! ../object/instanceOf.js */ "./node_modules/tricks/object/instanceOf.js");
var toArray = __webpack_require__(/*! ../array/toArray.js */ "./node_modules/tricks/array/toArray.js");

module.exports = function (matches) {
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};


	if (isDom(matches)) {
		matches = [matches];
	} else if (typeof matches === 'string') {
		matches = document.querySelectorAll(matches);
	}

	if (!instanceOf(matches, Array)) {
		matches = toArray(matches);
	}

	if (callback) {
		matches.forEach(callback);
	}

	return matches;
};

/***/ }),

/***/ "./node_modules/tricks/dom/findPos.js":
/*!********************************************!*\
  !*** ./node_modules/tricks/dom/findPos.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Find position of an element
module.exports = function (obj) {

	var curleft = 0;
	var curtop = 0;

	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}

	return [curleft, curtop];
};

/***/ }),

/***/ "./node_modules/tricks/dom/fragment.js":
/*!*********************************************!*\
  !*** ./node_modules/tricks/dom/fragment.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var frag = document.createDocumentFragment();
	args.forEach(function (el) {
		return frag.appendChild(el);
	});
	return frag;
};

/***/ }),

/***/ "./node_modules/tricks/dom/hasClass.js":
/*!*********************************************!*\
  !*** ./node_modules/tricks/dom/hasClass.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var until = __webpack_require__(/*! ./until.js */ "./node_modules/tricks/dom/until.js");

module.exports = function (elements, className) {
	var reg = new RegExp('(^|\\s)' + className + '($|\\s)', 'i');
	return until(elements, function (el) {
		return (el.className || '').match(reg);
	});
};

/***/ }),

/***/ "./node_modules/tricks/dom/id.js":
/*!***************************************!*\
  !*** ./node_modules/tricks/dom/id.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Auto Set/Get the ID of a tag element based
module.exports = function (tag) {

	if (tag.id) {
		return tag.id;
	}

	var text = tag.innerText || tag.textContent || tag.innerHTML;
	var ref = text.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9_-]/g, '');

	tag.id = ref;

	return ref;
};

/***/ }),

/***/ "./node_modules/tricks/dom/insertAfter.js":
/*!************************************************!*\
  !*** ./node_modules/tricks/dom/insertAfter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Insert After
module.exports = function (el, ref) {
	if (ref.nextSibling) {
		ref.parentNode.insertBefore(el, ref.nextSibling);
	} else {
		ref.parentNode.appendChild(el);
	}
};

/***/ }),

/***/ "./node_modules/tricks/dom/insertBefore.js":
/*!*************************************************!*\
  !*** ./node_modules/tricks/dom/insertBefore.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (el, ref) {
  return ref.parentNode.insertBefore(el, ref);
};

/***/ }),

/***/ "./node_modules/tricks/dom/isDom.js":
/*!******************************************!*\
  !*** ./node_modules/tricks/dom/isDom.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var instanceOf = __webpack_require__(/*! ../object/instanceOf.js */ "./node_modules/tricks/object/instanceOf.js");

var _HTMLElement = typeof HTMLElement !== 'undefined' && HTMLElement || typeof Element !== 'undefined' && Element;
var _HTMLDocument = typeof HTMLDocument !== 'undefined' && HTMLDocument || typeof Document !== 'undefined' && Document;
var _Window = window.constructor;

module.exports = function (test) {
	return instanceOf(test, _HTMLElement) || instanceOf(test, _HTMLDocument) || instanceOf(test, _Window);
};

/***/ }),

/***/ "./node_modules/tricks/dom/link.js":
/*!*****************************************!*\
  !*** ./node_modules/tricks/dom/link.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tryCatch = __webpack_require__(/*! ../object/tryCatch.js */ "./node_modules/tricks/object/tryCatch.js");
var query = __webpack_require__(/*! ./query.js */ "./node_modules/tricks/dom/query.js");

module.exports = function (name) {
  return tryCatch(function () {
    return query('link[rel="' + name + '"]').href;
  });
};

/***/ }),

/***/ "./node_modules/tricks/dom/matches.js":
/*!********************************************!*\
  !*** ./node_modules/tricks/dom/matches.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var until = __webpack_require__(/*! ./until.js */ "./node_modules/tricks/dom/until.js");

var el = document.createElement('div');
var matches = el.matches || el.mozMatchesSelector || el.webkitMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;

module.exports = function (elements, query) {

	var handler = query;

	if (typeof query === 'string') {
		handler = function handler(el) {
			return matches.call(el, query);
		};
	}

	return until(elements, handler);
};

/***/ }),

/***/ "./node_modules/tricks/dom/meta.js":
/*!*****************************************!*\
  !*** ./node_modules/tricks/dom/meta.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tryCatch = __webpack_require__(/*! ../object/tryCatch.js */ "./node_modules/tricks/object/tryCatch.js");
var query = __webpack_require__(/*! ./query.js */ "./node_modules/tricks/dom/query.js");

module.exports = function (name) {
  return tryCatch(function () {
    return query('meta[name="' + name + '"]').content;
  });
};

/***/ }),

/***/ "./node_modules/tricks/dom/parent.js":
/*!*******************************************!*\
  !*** ./node_modules/tricks/dom/parent.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Find first parent of an element which matches a pattern

var parents = __webpack_require__(/*! ./parents.js */ "./node_modules/tricks/dom/parents.js");

module.exports = function (elements, match) {
	var ul = parents(elements, match);
	return ul.length ? ul[0] : null;
};

/***/ }),

/***/ "./node_modules/tricks/dom/parents.js":
/*!********************************************!*\
  !*** ./node_modules/tricks/dom/parents.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Find parents of an element which match a pattern

var each = __webpack_require__(/*! ./each.js */ "./node_modules/tricks/dom/each.js");
var matches = __webpack_require__(/*! ./matches.js */ "./node_modules/tricks/dom/matches.js");
var documentElement = __webpack_require__(/*! ./documentElement.js */ "./node_modules/tricks/dom/documentElement.js");

module.exports = function (elements, match) {
	var m = [];
	each(elements, function (el) {
		while (el && el.parentNode) {
			el = el.parentNode;

			if (el === document) {
				el = documentElement;
			}

			if (matches(el, match)) {
				m.push(el);
			}

			if (el === documentElement) {
				break;
			}
		}
	});
	return m;
};

/***/ }),

/***/ "./node_modules/tricks/dom/prepend.js":
/*!********************************************!*\
  !*** ./node_modules/tricks/dom/prepend.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! ./createElement.js */ "./node_modules/tricks/dom/createElement.js");

module.exports = function (tagName, prop) {
	var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;

	var elm = createElement(tagName, prop);
	parent.insertBefore(elm, parent.firstChild);
	return elm;
};

/***/ }),

/***/ "./node_modules/tricks/dom/query.js":
/*!******************************************!*\
  !*** ./node_modules/tricks/dom/query.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Select a single element
module.exports = function (query) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return parent.querySelector(query);
};

/***/ }),

/***/ "./node_modules/tricks/dom/removeClass.js":
/*!************************************************!*\
  !*** ./node_modules/tricks/dom/removeClass.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// removeClass
var each = __webpack_require__(/*! ./each.js */ "./node_modules/tricks/dom/each.js");

module.exports = function (elements, className) {
	var reg = new RegExp('(^|\\s)' + className + '($|\\s)', 'ig');
	return each(elements, function (el) {
		el.className = el.className.replace(reg, ' ');
	});
};

/***/ }),

/***/ "./node_modules/tricks/dom/until.js":
/*!******************************************!*\
  !*** ./node_modules/tricks/dom/until.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var each = __webpack_require__(/*! ./each.js */ "./node_modules/tricks/dom/each.js");

module.exports = function (elements, callback) {
	var bool = void 0;

	each(elements, function (el) {
		if (!bool) {
			bool = callback(el);
		}
	});

	return bool;
};

/***/ }),

/***/ "./node_modules/tricks/events/createEvent.js":
/*!***************************************************!*\
  !*** ./node_modules/tricks/events/createEvent.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE does not support `new Event()`
// See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events for details
var dict = { bubbles: true, cancelable: true };

var createEvent = function createEvent(eventname) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dict;
	return new Event(eventname, options);
};

try {
	createEvent('test');
} catch (e) {
	createEvent = function createEvent(eventname) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dict;

		var e = document.createEvent('Event');
		e.initEvent(eventname, !!options.bubbles, !!options.cancelable);
		return e;
	};
}

module.exports = createEvent;

/***/ }),

/***/ "./node_modules/tricks/events/delegate.js":
/*!************************************************!*\
  !*** ./node_modules/tricks/events/delegate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var on = __webpack_require__(/*! ./on.js */ "./node_modules/tricks/events/on.js");
var off = __webpack_require__(/*! ./off.js */ "./node_modules/tricks/events/off.js");
var matches = __webpack_require__(/*! ../dom/matches.js */ "./node_modules/tricks/dom/matches.js");

module.exports = function (match, eventName, handler) {
	var root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;


	var eventHandler = function eventHandler(e) {
		var target = e.target;
		while (target) {
			if (matches(target, match)) {
				e.delegateTarget = target;
				handler(e);
				break;
			} else {
				// Next: match parentNode?
				target = target.parentNode;
			}
		}
	};

	on(root, eventName, eventHandler);

	return {
		remove: function remove() {
			return off(root, eventName, eventHandler);
		}
	};
};

/***/ }),

/***/ "./node_modules/tricks/events/globalCallback.js":
/*!******************************************************!*\
  !*** ./node_modules/tricks/events/globalCallback.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Global Events
// Attach the callback to the window object
// Return its unique reference
var random = __webpack_require__(/*! ../string/random.js */ "./node_modules/tricks/string/random.js");

module.exports = function (callback, guid) {
	var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_tricks_';


	// If the guid has not been supplied then create a new one.
	guid = guid || prefix + random();

	// Define the callback function
	window[guid] = handle.bind(null, guid, callback);

	return guid;
};

function handle(guid, callback) {
	for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		args[_key - 2] = arguments[_key];
	}

	callback.apply(undefined, args) && delete window[guid];
}

/***/ }),

/***/ "./node_modules/tricks/events/off.js":
/*!*******************************************!*\
  !*** ./node_modules/tricks/events/off.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// on.js
// Listen to events, this is a wrapper for addEventListener

var each = __webpack_require__(/*! ../dom/each.js */ "./node_modules/tricks/dom/each.js");
var SEPERATOR = /[\s,]+/;

module.exports = function (elements, eventnames, callback) {
	eventnames = eventnames.split(SEPERATOR);
	return each(elements, function (el) {
		return eventnames.forEach(function (eventname) {
			return el.removeEventListener(eventname, callback);
		});
	});
};

/***/ }),

/***/ "./node_modules/tricks/events/on.js":
/*!******************************************!*\
  !*** ./node_modules/tricks/events/on.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// on.js
// Listen to events, this is a wrapper for addEventListener

var each = __webpack_require__(/*! ../dom/each.js */ "./node_modules/tricks/dom/each.js");
var SEPERATOR = /[\s,]+/;

// See https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
var supportsPassive = false;
try {
	var opts = Object.defineProperty({}, 'passive', {
		get: function get() {
			supportsPassive = true;
		}
	});
	window.addEventListener('test', null, opts);
} catch (e) {
	// Continue
}

module.exports = function (elements, eventnames, callback) {
	var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


	if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options.passive && !supportsPassive) {
		// Override the passive mark
		options = false;
	}

	eventnames = eventnames.split(SEPERATOR);
	return each(elements, function (el) {
		return eventnames.forEach(function (eventname) {
			return el.addEventListener(eventname, callback, options);
		});
	});
};

/***/ }),

/***/ "./node_modules/tricks/events/ready.js":
/*!*********************************************!*\
  !*** ./node_modules/tricks/events/ready.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var on = __webpack_require__(/*! ./on.js */ "./node_modules/tricks/events/on.js");

module.exports = function (callback) {
	if (document.readyState !== 'loading' && document.body) {
		callback();
	} else {
		on(document, 'DOMContentLoaded', callback);
	}
};

/***/ }),

/***/ "./node_modules/tricks/helper/cordovaExternalLinks.js":
/*!************************************************************!*\
  !*** ./node_modules/tricks/helper/cordovaExternalLinks.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var delegate = __webpack_require__(/*! ../events/delegate */ "./node_modules/tricks/events/delegate.js");
var cordova = __webpack_require__(/*! ../support/cordova */ "./node_modules/tricks/support/cordova.js");

module.exports = function () {
	var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

	if (!cordova) {
		return false;
	} else {
		// Enable event delegation to fix anchor elements
		delegate('a', 'click', function (e) {

			var target = e.delegateTarget;

			// Check this is a valid external URL...
			if (target.href && target.href.match(/^https?:\/\//)) {
				e.preventDefault();
				window.open(target.href, '_system');
			}
		}, root);
	}
};

/***/ }),

/***/ "./node_modules/tricks/object/Defer.js":
/*!*********************************************!*\
  !*** ./node_modules/tricks/object/Defer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Defer
// Creates a new Iterative object

module.exports = function () {
	function Defer() {
		_classCallCheck(this, Defer);

		this.items = [];
		this.state = 'pending';
		this.response = null;
		this.push.apply(this, arguments);
	}

	// Mimic the Array.push function


	_createClass(Defer, [{
		key: 'push',
		value: function push() {
			var _items,
			    _this = this;

			// Append items to the internal array.
			(_items = this.items).push.apply(_items, arguments);

			// Trigger the custom handler
			if (this.state !== 'pending') {
				// Trigger the callbacks
				this.items.forEach(function (item) {
					return item(_this.response);
				});

				// Remove all the defered items
				this.length = 0;
			}
		}

		// Mimic the length

	}, {
		key: 'resolve',
		value: function resolve(response) {

			// Change the instances state
			this.state = 'resolved';
			this.response = response;

			// Trigger the callbacks
			this.push();
		}
	}, {
		key: 'length',
		get: function get() {
			return this.items.length;
		},
		set: function set(value) {
			return this.items.length = value;
		}
	}]);

	return Defer;
}();

/***/ }),

/***/ "./node_modules/tricks/object/instanceOf.js":
/*!**************************************************!*\
  !*** ./node_modules/tricks/object/instanceOf.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (test, root) {
  return root && test instanceof root;
};

/***/ }),

/***/ "./node_modules/tricks/object/tryCatch.js":
/*!************************************************!*\
  !*** ./node_modules/tricks/object/tryCatch.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	try {
		return fn.call(null);
	} catch (e) {
		// Continue
	}
};

/***/ }),

/***/ "./node_modules/tricks/services/googleanalytics.js":
/*!*********************************************************!*\
  !*** ./node_modules/tricks/services/googleanalytics.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global _gaq */
var getScript = __webpack_require__(/*! ../http/getScript.js */ "./node_modules/tricks/browser/http/getScript.js");

module.exports = function (tracking) {
	window._gaq = window._gaq || [];
	_gaq.push(['_setAccount', tracking]);
	_gaq.push(['_trackPageview']);

	getScript(('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');
};

/***/ }),

/***/ "./node_modules/tricks/string/fullpath.js":
/*!************************************************!*\
  !*** ./node_modules/tricks/string/fullpath.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Return the relative url for a path
module.exports = function (path) {
	var relative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './';

	if (!path) {
		return '';
	}

	try {
		// This only works in a few browsers, but what the heck. i'll fix it later
		return new URL(path, new URL(relative, window.location)).href || path;
	} catch (e) {
		return path;
	}
};

/***/ }),

/***/ "./node_modules/tricks/string/jsonParse.js":
/*!*************************************************!*\
  !*** ./node_modules/tricks/string/jsonParse.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tryCatch = __webpack_require__(/*! ../object/tryCatch.js */ "./node_modules/tricks/object/tryCatch.js");
module.exports = function (str) {
  return tryCatch(function () {
    return JSON.parse(str);
  });
};

/***/ }),

/***/ "./node_modules/tricks/string/ltrim.js":
/*!*********************************************!*\
  !*** ./node_modules/tricks/string/ltrim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Return trimmed string
module.exports = function (str, trim) {
	if (!trim) {
		return str;
	}
	if (str.indexOf(trim) === 0) {
		return str.slice(trim.length);
	}
	return str;
};

/***/ }),

/***/ "./node_modules/tricks/string/param.js":
/*!*********************************************!*\
  !*** ./node_modules/tricks/string/param.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Param
// Explode/encode the parameters of an URL string/object
// @param string s, string to decode
module.exports = function (hash) {
	var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
	var seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '=';
	var formatFunction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (o) {
		return o;
	};
	return Object.keys(hash).map(function (name) {
		var value = formatFunction(hash[name]);
		return name + (value !== null ? seperator + value : '');
	}).join(delimiter);
};

/***/ }),

/***/ "./node_modules/tricks/string/querystringify.js":
/*!******************************************************!*\
  !*** ./node_modules/tricks/string/querystringify.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Create a Query string
var param = __webpack_require__(/*! ./param.js */ "./node_modules/tricks/string/param.js");
var fn = function fn(value) {
  return value === '?' ? '?' : encodeURIComponent(value);
};

module.exports = function (o) {
  var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn;
  return param(o, '&', '=', formatter);
};

/***/ }),

/***/ "./node_modules/tricks/string/random.js":
/*!**********************************************!*\
  !*** ./node_modules/tricks/string/random.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return parseInt(Math.random() * 1e12, 10).toString(36);
};

/***/ }),

/***/ "./node_modules/tricks/support/CSSsupports.js":
/*!****************************************************!*\
  !*** ./node_modules/tricks/support/CSSsupports.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Add browser ability to the window HTML.classList
module.exports = function (property, enabled) {
	document.documentElement.className = document.documentElement.className + ' ' + (enabled ? '' : 'no-') + property;
};

/***/ }),

/***/ "./node_modules/tricks/support/cordova.js":
/*!************************************************!*\
  !*** ./node_modules/tricks/support/cordova.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Phonegap/Cordova Device
var mobile = __webpack_require__(/*! ./mobile.js */ "./node_modules/tricks/support/mobile.js");

var filesystem = /^file:\/{3}[^/]/i.test(window.location.href);

module.exports = mobile && filesystem;

/***/ }),

/***/ "./node_modules/tricks/support/html5.js":
/*!**********************************************!*\
  !*** ./node_modules/tricks/support/html5.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


'header,section,datalist,option,footer,nav,menu,aside,article,style,script'.split(',').forEach(function (tag) {
  return document.createElement(tag);
});

/***/ }),

/***/ "./node_modules/tricks/support/mobile.js":
/*!***********************************************!*\
  !*** ./node_modules/tricks/support/mobile.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// device mobile
var bool = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
module.exports = bool;

/***/ }),

/***/ "./node_modules/tricks/support/touch.js":
/*!**********************************************!*\
  !*** ./node_modules/tricks/support/touch.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CSSsupports = __webpack_require__(/*! ./CSSsupports.js */ "./node_modules/tricks/support/CSSsupports.js");

var result = 'ontouchstart' in window;

CSSsupports('touch', result);

module.exports = result;

/***/ }),

/***/ "./node_modules/tricks/time/sleep.js":
/*!*******************************************!*\
  !*** ./node_modules/tricks/time/sleep.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Sleep
// Creates an instance of a function which
var i = 1;
var hash = {};

module.exports = function (callback) {
	var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var guid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : i++;


	if (guid && hash[guid]) {
		clearTimeout(hash[guid]);
		delete hash[guid];
	}

	if (callback) {
		// Set the period to change the state.
		hash[guid] = setTimeout(function () {
			callback();
		}, period);
	}

	return guid;
};

/***/ }),

/***/ "./node_modules/tricks/window/onhashchange.js":
/*!****************************************************!*\
  !*** ./node_modules/tricks/window/onhashchange.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// onhashchange
var on = __webpack_require__(/*! ../events/on */ "./node_modules/tricks/events/on.js");

var a = [];

on(window, 'hashchange', handler);

function handler() {

	// Get the hash value
	var hash = window.location.hash.substr(1);

	// Loop through all the handlers
	a.forEach(function (callback) {
		callback.call(null, hash);
	});
}

module.exports = function (callback) {

	if (callback) {
		a.push(callback);
	} else {
		handler();
	}
};

/***/ }),

/***/ "./node_modules/tricks/window/popup.js":
/*!*********************************************!*\
  !*** ./node_modules/tricks/window/popup.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// popup
// Easy options as a hash
var param = __webpack_require__(/*! ../string/param.js */ "./node_modules/tricks/string/param.js");

var documentElement = document.documentElement;
var dimensions = [['Top', 'Height'], ['Left', 'Width']];

module.exports = function (url, target) {
	var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


	// centers the popup correctly to the current display of a multi-screen display.
	dimensions.forEach(generatePosition.bind(options));

	// Open
	return window.open(url, target, param(options, ','));
};

function generatePosition(_ref) {
	var _ref2 = _slicedToArray(_ref, 2),
	    Position = _ref2[0],
	    Dimension = _ref2[1];

	var position = Position.toLowerCase();
	var dimension = Dimension.toLowerCase();
	if (this[dimension] && !(position in this)) {
		var dualScreenPos = window['screen' + Position] !== undefined ? window['screen' + Position] : screen[position];
		var d = screen[dimension] || window['inner' + Dimension] || documentElement['client' + Dimension];
		this[position] = parseInt((d - this[dimension]) / 2, 10) + dualScreenPos;
	}
}

/***/ }),

/***/ "./node_modules/tricks/window/url.js":
/*!*******************************************!*\
  !*** ./node_modules/tricks/window/url.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (path) {

	// If the path is empty
	if (!path) {
		return window.location;
	}

	// Chrome and FireFox support new URL() to extract URL objects
	else if (window.URL && URL instanceof Function && URL.length !== 0) {
			return new URL(path, window.location);
		}

		// Ugly shim, it works!
		else {
				var a = document.createElement('a');
				a.href = path;
				// Return clone for IE compatibility view.
				return a.cloneNode(false);
			}
};

/***/ }),

/***/ "./src/adorn.js":
/*!**********************!*\
  !*** ./src/adorn.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./components.less */ "./src/components.less");

var _json = __webpack_require__(/*! tricks/http/json */ "./node_modules/tricks/browser/http/json.js");

var _json2 = _interopRequireDefault(_json);

var _fullpath = __webpack_require__(/*! tricks/string/fullpath */ "./node_modules/tricks/string/fullpath.js");

var _fullpath2 = _interopRequireDefault(_fullpath);

var _meta = __webpack_require__(/*! tricks/dom/meta */ "./node_modules/tricks/dom/meta.js");

var _meta2 = _interopRequireDefault(_meta);

var _link = __webpack_require__(/*! tricks/dom/link */ "./node_modules/tricks/dom/link.js");

var _link2 = _interopRequireDefault(_link);

var _query = __webpack_require__(/*! tricks/dom/query */ "./node_modules/tricks/dom/query.js");

var _query2 = _interopRequireDefault(_query);

var _create = __webpack_require__(/*! tricks/dom/create */ "./node_modules/tricks/dom/create.js");

var _create2 = _interopRequireDefault(_create);

var _hasClass = __webpack_require__(/*! tricks/dom/hasClass */ "./node_modules/tricks/dom/hasClass.js");

var _hasClass2 = _interopRequireDefault(_hasClass);

var _documentElement = __webpack_require__(/*! tricks/dom/documentElement */ "./node_modules/tricks/dom/documentElement.js");

var _documentElement2 = _interopRequireDefault(_documentElement);

var _ready = __webpack_require__(/*! tricks/events/ready */ "./node_modules/tricks/events/ready.js");

var _ready2 = _interopRequireDefault(_ready);

__webpack_require__(/*! tricks/support/touch */ "./node_modules/tricks/support/touch.js");

__webpack_require__(/*! tricks/support/html5 */ "./node_modules/tricks/support/html5.js");

__webpack_require__(/*! ./components/viewport */ "./src/components/viewport.js");

var _cordovaExternalLinks = __webpack_require__(/*! tricks/helper/cordovaExternalLinks */ "./node_modules/tricks/helper/cordovaExternalLinks.js");

var _cordovaExternalLinks2 = _interopRequireDefault(_cordovaExternalLinks);

var _googleanalytics = __webpack_require__(/*! tricks/services/googleanalytics */ "./node_modules/tricks/services/googleanalytics.js");

var _googleanalytics2 = _interopRequireDefault(_googleanalytics);

__webpack_require__(/*! ./components/security */ "./src/components/security.js");

var _helpers = __webpack_require__(/*! ./components/helpers */ "./src/components/helpers.js");

var _helpers2 = _interopRequireDefault(_helpers);

var _footer = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _sidebar = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _toolbar = __webpack_require__(/*! ./components/toolbar */ "./src/components/toolbar.js");

var _toolbar2 = _interopRequireDefault(_toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inject controls into the page markup once the DOM has completely loaded.


// Components


// Phonegap Shim


// fix HTML5 in IE8
(0, _ready2.default)(_helpers2.default);

// Widget components


// Components


// Analytics


// fix viewport in mobile


// Touch exists?
/*!*/
/*! Adorn by Andrew Dodson, https://adodson.com/adorn/LICENSE (MIT) */

// Get the manifest
{
	// Manifest
	var manifest_path = (0, _meta2.default)('manifest') || (0, _link2.default)('manifest') || '/manifest.json';

	// Set the toolbar, doesn't work if document body is undefined
	(0, _json2.default)(manifest_path, setup.bind(null, manifest_path));
}

// Is this a phonegap application?
// Shim up the external Links issue
(0, _cordovaExternalLinks2.default)();

// Setup function to be called when the body and the manifest exist.
function setup(base, manifest) {

	// Is the manifest link missing?
	if (manifest && !((0, _meta2.default)('manifest') || (0, _link2.default)('manifest'))) {
		(0, _create2.default)('link', { rel: 'manifest', href: base }, [], document.head);
	}
	// Is the theme_color missing
	if (manifest && manifest.theme_color && !(0, _meta2.default)('theme-color')) {
		(0, _create2.default)('meta', { name: 'theme-color', content: manifest.theme_color }, [], document.head);
	}

	if (!document.body) {
		// Just in case...
		(0, _ready2.default)(setup.bind(null, base, manifest));
		return;
	}

	manifest = manifest || {};

	// Favicon
	manifest.favicon = (0, _meta2.default)('favicon') || (0, _fullpath2.default)(manifest.favicon, base) || '/favicon.ico';

	// Author
	manifest.author = (0, _meta2.default)('author') || manifest.author;

	// Root domain
	manifest.root = (0, _meta2.default)('root') || (0, _fullpath2.default)(manifest.root || '/', base);

	// Markup
	if (!(0, _hasClass2.default)(_documentElement2.default, 'no-adorn')) {
		// Toolbar
		(0, _toolbar2.default)(manifest);

		// Toolbar
		(0, _sidebar2.default)(manifest);

		// Footer
		(0, _footer2.default)(manifest);
	}

	// Set Lang
	if (!_documentElement2.default.getAttribute('lang')) {

		// Choose the manifest data or english
		_documentElement2.default.setAttribute('lang', manifest.lang || 'en');
	}

	// Fill missing <Title>
	if (!document.title) {
		// Get it from the first H1 Element
		document.title = (0, _query2.default)('h1,h2').textContent || '';
	}

	// Analytics
	{

		var tracking = (0, _meta2.default)('ga:tracking') || manifest['ga:tracking'];

		if (tracking) {
			(0, _googleanalytics2.default)(tracking);
		}
	}

	// Service Workers
	{

		var sw = (0, _meta2.default)('sw') || (0, _meta2.default)('serviceworker');

		if (sw) {
			sw = (0, _fullpath2.default)(sw);
		} else {
			sw = manifest.sw || manifest.serviceworker;

			if (sw) {
				sw = (0, _fullpath2.default)(sw, base);
			}
		}

		var serviceWorker = navigator.serviceWorker;

		if (sw && serviceWorker) {

			// Await for ready...
			serviceWorker.ready.then(function () {

				// Pass any offline fetch handling too
				var fallover = manifest.fallover;
				if (fallover) {
					// Loop through the fallover list...
					fallover.forEach(function (item) {
						var type = 'fallover';
						var mode = item.mode;
						var fallover = item.fallover;

						fallover = (0, _fullpath2.default)(fallover, base);

						// Post to the service workers
						serviceWorker.controller.postMessage({ type: type, fallover: fallover, mode: mode });
					});
				}
			});

			serviceWorker.register(sw).catch(function (err) {
				// registration failed :(
				console.error('Adorn: SW registration failed: ', err); // eslint-disable-line
			});
		}
	}
}

/***/ }),

/***/ "./src/components.less":
/*!*****************************!*\
  !*** ./src/components.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/less-loader/dist/cjs.js!./components.less */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/components.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/content.js":
/*!***********************************!*\
  !*** ./src/components/content.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _each = __webpack_require__(/*! tricks/dom/each */ "./node_modules/tricks/dom/each.js");

var _each2 = _interopRequireDefault(_each);

var _until = __webpack_require__(/*! tricks/dom/until */ "./node_modules/tricks/dom/until.js");

var _until2 = _interopRequireDefault(_until);

var _addClass = __webpack_require__(/*! tricks/dom/addClass */ "./node_modules/tricks/dom/addClass.js");

var _addClass2 = _interopRequireDefault(_addClass);

var _on = __webpack_require__(/*! tricks/events/on */ "./node_modules/tricks/events/on.js");

var _on2 = _interopRequireDefault(_on);

var _create = __webpack_require__(/*! tricks/dom/create */ "./node_modules/tricks/dom/create.js");

var _create2 = _interopRequireDefault(_create);

var _findPos = __webpack_require__(/*! tricks/dom/findPos */ "./node_modules/tricks/dom/findPos.js");

var _findPos2 = _interopRequireDefault(_findPos);

var _id = __webpack_require__(/*! tricks/dom/id */ "./node_modules/tricks/dom/id.js");

var _id2 = _interopRequireDefault(_id);

var _ready = __webpack_require__(/*! tricks/events/ready */ "./node_modules/tricks/events/ready.js");

var _ready2 = _interopRequireDefault(_ready);

var _onhashchange = __webpack_require__(/*! tricks/window/onhashchange */ "./node_modules/tricks/window/onhashchange.js");

var _onhashchange2 = _interopRequireDefault(_onhashchange);

var _Defer = __webpack_require__(/*! tricks/object/Defer */ "./node_modules/tricks/object/Defer.js");

var _Defer2 = _interopRequireDefault(_Defer);

var _sleep = __webpack_require__(/*! tricks/time/sleep */ "./node_modules/tricks/time/sleep.js");

var _sleep2 = _interopRequireDefault(_sleep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pending
var defer = new _Defer2.default();

// Once the DOM has loaded we can get all the h1,h2 elements in the page
(0, _ready2.default)(function () {

	// TOC
	var headings = (0, _each2.default)('h1,h2');

	if (!document.querySelector || !!(document.documentElement.className || '').match(/adorn-(nav|toc)-off/)) {
		// This feature is disabled
		return;
	}

	(0, _each2.default)(headings, function (tag) {

		// Get the ID of the tag
		var ref = (0, _id2.default)(tag);

		// Create an anchor for this tag
		tag.insertBefore((0, _create2.default)('a', { name: ref, href: '#' + ref, 'aria-label': 'Jump to ' + tag.innerText, class: 'adorn-anchor' }), tag.firstChild);
	});

	{
		var hash = window.location.hash;

		if (hash && hash.length > 2) {

			// If the location.hash is defined, lets navigate to the item
			var selected = document.querySelector(window.location.hash);
			if (selected) {
				selected.scrollIntoView();
			}
		}
	}

	// Is there a TOC
	if (headings.length) {
		setTimeout(function () {
			// Lets add a class to the body
			(0, _addClass2.default)(document.documentElement, 'adorn-toc-on');
		});
	}

	// Resolve all the callbacks
	defer.resolve(headings);

	// Get a sleepid
	var sleepId = (0, _sleep2.default)();

	// Listen to scroll navigation position
	(0, _on2.default)(window, 'scroll', function () {

		// When this has been idle for the period defined
		(0, _sleep2.default)(updateHashLocation.bind(null, headings), 100, sleepId);
	});
});

// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

exports.default = function (callback) {

	defer.push(callback);
};

function updateHashLocation(headings) {

	// Are properties which affect the position of elements on the page are still loading...
	if (document.readyState !== 'complete') {
		// Ok, then we shouldn't try to determine if the user has changed position in the document.
		return;
	}

	// from the list of items
	// find the one which is in view on the page
	var T = window.scrollY || window.pageYOffset;
	var H = window.innerHeight;

	var toolbar = document.querySelector('.adorn-toolbar');

	var tag = void 0;

	var toolbar_height = toolbar && toolbar.offsetHeight || 50;

	// Is the current hash in the viewport
	var hash = window.location.hash;

	if (hash) {
		var anchor = document.querySelector(hash);

		if (anchor) {
			var t = (0, _findPos2.default)(anchor)[1];
			if (t > T && t < T + H) {
				// This is fine
				return;
			}
		}
	}

	// Find the current selection
	(0, _until2.default)(headings, function (anchor) {

		var t = (0, _findPos2.default)(anchor)[1] + toolbar_height;

		if (T < t) {

			// Stop looping
			return true;
		}

		// set the last active tag
		tag = anchor;
	});

	// Has a tag been set?
	if (tag) {
		// Set as the current selected one
		var ref = tag.getElementsByTagName('a')[0];

		if (ref) {
			ref = ref.getAttribute('href').replace(/^#/, '');
		}

		// Change the current window hash
		if ('history' in window && 'replaceState' in window.history && window.location.hash !== '#' + ref) {
			history.replaceState({}, document.title, '#' + ref);
		}

		// Trigger onhashchange
		(0, _onhashchange2.default)();
	}
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/contentSelect.js":
/*!*****************************************!*\
  !*** ./src/components/contentSelect.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _each = __webpack_require__(/*! tricks/dom/each */ "./node_modules/tricks/dom/each.js");

var _each2 = _interopRequireDefault(_each);

var _on = __webpack_require__(/*! tricks/events/on */ "./node_modules/tricks/events/on.js");

var _on2 = _interopRequireDefault(_on);

var _create = __webpack_require__(/*! tricks/dom/create */ "./node_modules/tricks/dom/create.js");

var _create2 = _interopRequireDefault(_create);

var _id = __webpack_require__(/*! tricks/dom/id */ "./node_modules/tricks/dom/id.js");

var _id2 = _interopRequireDefault(_id);

var _onhashchange = __webpack_require__(/*! tricks/window/onhashchange */ "./node_modules/tricks/window/onhashchange.js");

var _onhashchange2 = _interopRequireDefault(_onhashchange);

var _content = __webpack_require__(/*! ./content */ "./src/components/content.js");

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

exports.default = function (parent) {

	(0, _content2.default)(function (content) {

		if (content.lenth < 2) {
			return;
		}

		// Create a drop down SELECT box and add it too the breadcrumbs
		var toc = createContentSelect(content, parent);
		parent.appendChild(toc);
	});
};

function createContentSelect(headings) {
	var toc = (0, _create2.default)('div', { class: 'adorn-toc' });

	var select = (0, _create2.default)('select', { 'aria-label': 'menu' }, [], toc);
	var options = [];
	(0, _on2.default)(select, 'change', function () {
		window.location.hash = select.options[select.selectedIndex].value;
	});

	var _group = select;
	(0, _each2.default)(headings, function (tag) {

		// Get ID
		var depth = +tag.tagName.match(/[0-9]/)[0];
		var text = tag.innerText || tag.textContent || tag.innerHTML;
		var ref = (0, _id2.default)(tag);

		if (depth === 1) {
			_group = (0, _create2.default)('optgroup', { label: text }, [], select);
		}

		(0, _create2.default)('option', { value: ref }, [text], _group);

		options.push(ref);
	});

	(0, _onhashchange2.default)(function (hash) {
		// Update the SELECT
		select.selectedIndex = options.indexOf(hash);
	});

	return toc;
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ready = __webpack_require__(/*! tricks/events/ready */ "./node_modules/tricks/events/ready.js");

var _ready2 = _interopRequireDefault(_ready);

var _create = __webpack_require__(/*! tricks/dom/create */ "./node_modules/tricks/dom/create.js");

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (manifest) {
	// ///////////////////////////////////
	// FOOTER
	// ///////////////////////////////////

	if (manifest.author) {

		(0, _ready2.default)(function () {

			var author = manifest.author.split(/\s*, \s*/);

			if (author) {

				var children = ['Authored by '];

				if (author[1]) {
					children.push((0, _create2.default)('a', {
						href: author[1],
						rel: 'author'
					}, [author[0]]));
				} else {
					children.push(author[0]);
				}

				// Add Footer link to the body
				(0, _create2.default)('footer', {}, children, document.body);
			}
		});
	}
};

module.exports = exports['default'];

/***/ }),

/***/ "./src/components/helpers.js":
/*!***********************************!*\
  !*** ./src/components/helpers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _each = __webpack_require__(/*! tricks/dom/each */ "./node_modules/tricks/dom/each.js");

var _each2 = _interopRequireDefault(_each);

var _on = __webpack_require__(/*! tricks/events/on */ "./node_modules/tricks/events/on.js");

var _on2 = _interopRequireDefault(_on);

var _create = __webpack_require__(/*! tricks/dom/create */ "./node_modules/tricks/dom/create.js");

var _create2 = _interopRequireDefault(_create);

var _insertAfter = __webpack_require__(/*! tricks/dom/insertAfter */ "./node_modules/tricks/dom/insertAfter.js");

var _insertAfter2 = _interopRequireDefault(_insertAfter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global tryit*/
exports.default = function () {

	// TryIt
	(0, _each2.default)('pre', function (pre) {
		if (pre.className === 'tryit' || pre.className === 'tryitoffline') {
			// Create a button and insert it after the pre tag
			tryitButton(pre);
		}
	});

	// TryIt, View
	(0, _each2.default)('script', function (script) {
		var func = script.getAttribute('data-tryit');
		if (func) {
			// Create a button and insert it after the pre tag
			tryitButton(script, window[func]);
		}

		if (script.getAttribute('src')) {

			// Add click event to open in new window
			(0, _on2.default)(script, 'click', function () {
				window.open(script.getAttribute('src'), '_blank');
			});
		}
	});

	(0, _each2.default)('link', function (script) {
		if (script.getAttribute('href')) {

			// Add click event to open in new window
			(0, _on2.default)(script, 'click', function () {
				window.open(script.getAttribute('href'), '_blank');
			});
		}
	});
};

function tryitButton(pre, func) {

	var btn = (0, _create2.default)('button', { class: 'tryit' }, ['tryit']);

	(0, _insertAfter2.default)(btn, pre);

	(0, _on2.default)(btn, 'click', function () {
		if (func) {
			func();
		} else if (typeof tryit === 'function' && !tryit(pre.innerText)) {
			return;
		} else {
			setTimeout(function () {
				return eval(pre.innerText);
			}, 100);
		}
	});

	if (!func) {
		pre.setAttribute('contenteditable', true);
	}
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/security.js":
/*!************************************!*\
  !*** ./src/components/security.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ready = __webpack_require__(/*! tricks/events/ready */ "./node_modules/tricks/events/ready.js");

var _ready2 = _interopRequireDefault(_ready);

var _attr = __webpack_require__(/*! tricks/dom/attr */ "./node_modules/tricks/dom/attr.js");

var _attr2 = _interopRequireDefault(_attr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Wait for the DOM to load
(0, _ready2.default)(function () {

	// Find all external links which dont have noopener and ensure they do
	// https://developers.google.com/web/tools/lighthouse/audits/noopener
	(0, _attr2.default)('a[target=_blank]:not([rel=noopener])', { rel: 'noopener' });
});

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _each = __webpack_require__(/*! tricks/dom/each */ "./node_modules/tricks/dom/each.js");

var _each2 = _interopRequireDefault(_each);

var _addClass = __webpack_require__(/*! tricks/dom/addClass */ "./node_modules/tricks/dom/addClass.js");

var _addClass2 = _interopRequireDefault(_addClass);

var _create = __webpack_require__(/*! tricks/dom/create */ "./node_modules/tricks/dom/create.js");

var _create2 = _interopRequireDefault(_create);

var _prepend = __webpack_require__(/*! tricks/dom/prepend */ "./node_modules/tricks/dom/prepend.js");

var _prepend2 = _interopRequireDefault(_prepend);

var _parent = __webpack_require__(/*! tricks/dom/parent */ "./node_modules/tricks/dom/parent.js");

var _parent2 = _interopRequireDefault(_parent);

var _removeClass = __webpack_require__(/*! tricks/dom/removeClass */ "./node_modules/tricks/dom/removeClass.js");

var _removeClass2 = _interopRequireDefault(_removeClass);

var _onhashchange = __webpack_require__(/*! tricks/window/onhashchange */ "./node_modules/tricks/window/onhashchange.js");

var _onhashchange2 = _interopRequireDefault(_onhashchange);

var _content = __webpack_require__(/*! ./content */ "./src/components/content.js");

var _content2 = _interopRequireDefault(_content);

var _id = __webpack_require__(/*! tricks/dom/id */ "./node_modules/tricks/dom/id.js");

var _id2 = _interopRequireDefault(_id);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ///////////////////////////////////
// Navigation
// ///////////////////////////////////

exports.default = function () {

	(0, _content2.default)(function (content) {

		if (content.length < 2) {
			(0, _addClass2.default)(document.documentElement, 'adorn-sidebar-off');
			return;
		}

		// Create a sidebar navigation on the body
		var aside = (0, _prepend2.default)('aside', { class: 'adorn-sidebar' });

		// Create elements
		var i = 0;
		var prev = aside;
		var items = {};

		(0, _each2.default)(content, function (item) {

			// New depth
			var j = +item.tagName.match(/[0-9]/)[0];

			// Get parent UL
			var ul = getParentUL(prev, i, j);

			// Update depth
			i = j;

			// Build list item
			var text = item.innerText || item.textContent || item.innerHTML;
			var ref = (0, _id2.default)(item);

			items[ref] = prev = (0, _create2.default)('li', {}, [(0, _create2.default)('a', { href: '#' + ref }, [text])], ul);
		});

		// Show current selection
		(0, _onhashchange2.default)(function (hash) {

			// Add Class
			var item = items[hash];
			if (item) {

				// Remove class
				(0, _removeClass2.default)('.adorn-sidebar .selected', 'selected');

				// Add class
				(0, _addClass2.default)(item, 'selected');
			}
		});
	});
};

function getParentUL(ul, i, j) {
	if (i < j) {
		return (0, _create2.default)('ul', {}, [], ul);
	} else {
		do {
			ul = (0, _parent2.default)(ul, 'ul') || ul;
		} while (ul && i-- > j);
		return ul;
	}
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/components/social.js":
/*!**********************************!*\
  !*** ./src/components/social.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.github_btn = github_btn;
exports.twitter_btn = twitter_btn;
exports.share_btn = share_btn;

var _each = __webpack_require__(/*! tricks/dom/each */ "./node_modules/tricks/dom/each.js");

var _each2 = _interopRequireDefault(_each);

var _jsonp = __webpack_require__(/*! tricks/http/jsonp */ "./node_modules/tricks/browser/http/jsonp.js");

var _jsonp2 = _interopRequireDefault(_jsonp);

var _on = __webpack_require__(/*! tricks/events/on */ "./node_modules/tricks/events/on.js");

var _on2 = _interopRequireDefault(_on);

var _create = __webpack_require__(/*! tricks/dom/create */ "./node_modules/tricks/dom/create.js");

var _create2 = _interopRequireDefault(_create);

var _fragment = __webpack_require__(/*! tricks/dom/fragment */ "./node_modules/tricks/dom/fragment.js");

var _fragment2 = _interopRequireDefault(_fragment);

var _querystringify = __webpack_require__(/*! tricks/string/querystringify */ "./node_modules/tricks/string/querystringify.js");

var _querystringify2 = _interopRequireDefault(_querystringify);

var _meta = __webpack_require__(/*! tricks/dom/meta */ "./node_modules/tricks/dom/meta.js");

var _meta2 = _interopRequireDefault(_meta);

var _query = __webpack_require__(/*! tricks/dom/query */ "./node_modules/tricks/dom/query.js");

var _query2 = _interopRequireDefault(_query);

var _popup = __webpack_require__(/*! tricks/window/popup */ "./node_modules/tricks/window/popup.js");

var _popup2 = _interopRequireDefault(_popup);

var _fullpath = __webpack_require__(/*! tricks/string/fullpath */ "./node_modules/tricks/string/fullpath.js");

var _fullpath2 = _interopRequireDefault(_fullpath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Social controls
var link = function link() {
	var a = (0, _query2.default)('link[rel=source]');
	if (a) {
		return a.getAttribute('href');
	}
};

var url = window.location.href;

function github_btn(manifest) {

	var content = [];
	var paths = manifest.paths;

	// GITHUB
	if (!manifest.github) {
		return;
	}

	// Repo
	var repo = manifest.github;
	if (!repo.match('/') && paths.length) {
		repo += '/' + paths[0].replace(/\/$/, '');
	}

	if (!repo.match('/')) {
		return;
	}

	var repo_path = 'https://github.com/' + repo;

	// Get the location of this file in the repo
	var repo_file = link('source') || (window.location.pathname || '').replace(/^\/?([^/]+)/g, '').replace(/\/$/, 'index.html').replace(/^\//, '');

	content.push((0, _create2.default)('a', {
		href: (0, _fullpath2.default)(repo_file, repo_path + '/blob/master/'),
		target: '_blank',
		rel: 'noopener',
		id: 'adorn-edit'
	}, ['Edit this page']), (0, _create2.default)('span'), (0, _create2.default)('a', {
		href: '' + repo_path,
		target: '_blank',
		rel: 'noopener',
		title: 'Stars',
		id: 'adorn-github-button'
	}, [(0, _create2.default)('i', { class: 'adorn-icon-github' }), (0, _create2.default)('span', { class: 'adorn-speeach-bubble' })]));

	// Install the GitHub widget
	// Probably could make this a little more ajaxy

	(0, _jsonp2.default)('https://api.github.com/repos/' + repo + '?callback=?', function (r) {

		if (r && r.data && r.data.watchers) {

			// Add value to twitter icon
			(0, _each2.default)('.adorn-github-button span.adorn-speeach-bubble', function (item) {
				item.innerHTML = r.data.watchers || '';
			});
		}
	});

	return _fragment2.default.apply(undefined, content);
}

function twitter_btn(manifest) {

	// Content
	var content = [];

	// TWITTER
	var twitter_creator = manifest['twitter:creator'] || (0, _meta2.default)('twitter:creator');

	// If we dont have a creator, do nothing
	if (!twitter_creator) {
		return;
	}

	// Create components
	var btn = (0, _create2.default)('a', {
		href: 'https://twitter.com/share',
		class: 'adorn-twitter-button',
		target: '_blank',
		rel: 'noopener',
		'data-via': twitter_creator.replace('@', ''),
		title: 'Tweet'
	}, [(0, _create2.default)('i', { class: 'adorn-icon-twitter' })]);

	content.push(btn, (0, _create2.default)('a', {
		href: 'https://twitter.com/search?ref_src=twsrc%5Etfw&q=' + encodeURIComponent(url),
		class: 'adorn-twitter-count',
		rel: 'noopener',
		'aria-label': 'Twitter comments',
		target: '_blank'
	}, [(0, _create2.default)('i', { class: 'adorn-speeach-bubble' })]));

	// Probably could make this a little more ajaxy
	(0, _jsonp2.default)('https://cdn.syndication.twitter.com/widgets/tweetbutton/count.json?url=' + encodeURIComponent(url), function (r) {
		// Add value to twitter icon
		if (!r) {
			return;
		}
		(0, _each2.default)('.adorn-twitter-count span.adorn-speeach-bubble', function (item) {
			item.innerHTML = r.count || '';
			item.title = 'This page has been shared ' + r.count + ' times, view these tweets';
		});
	});

	// Add event to twitter button
	(0, _on2.default)(btn, 'click', function (e) {

		e.preventDefault();

		var options = {
			width: 550,
			height: 250
		};

		var params = {
			text: document.title,
			via: twitter_creator.replace('@', ''),
			url: window.location.href.replace(/#.*/, '')
		};

		var hashtag = (0, _meta2.default)('twitter:hashtag') || manifest['twitter:hashtag'];
		if (hashtag) {
			params.hashtag = hashtag;
		}

		(0, _popup2.default)('https://twitter.com/intent/tweet?' + (0, _querystringify2.default)(params), 'twitter', options);
	});

	return _fragment2.default.apply(undefined, content);
}

function share_btn() {

	// Does this browser support the native Share API
	if (!('share' in navigator)) {
		return;
	}

	// Content
	var content = [];

	// Create components
	var btn = (0, _create2.default)('button', {
		class: 'adorn-icon-share',
		target: '_blank',
		rel: 'noopener',
		title: 'Share'
	});

	content.push(btn);

	(0, _on2.default)(btn, 'click', function () {
		try {
			navigator.share({
				title: document.title,
				text: document.title,
				url: location.href
			}).then(function () {
				btn.style.color = 'green';
			});
		} catch (e) {
			btn.style.color = 'red';
		}
	});

	return _fragment2.default.apply(undefined, content);
}

/***/ }),

/***/ "./src/components/toolbar.js":
/*!***********************************!*\
  !*** ./src/components/toolbar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _create = __webpack_require__(/*! tricks/dom/create */ "./node_modules/tricks/dom/create.js");

var _create2 = _interopRequireDefault(_create);

var _url = __webpack_require__(/*! tricks/window/url */ "./node_modules/tricks/window/url.js");

var _url2 = _interopRequireDefault(_url);

var _ltrim = __webpack_require__(/*! tricks/string/ltrim */ "./node_modules/tricks/string/ltrim.js");

var _ltrim2 = _interopRequireDefault(_ltrim);

var _insertBefore = __webpack_require__(/*! tricks/dom/insertBefore */ "./node_modules/tricks/dom/insertBefore.js");

var _insertBefore2 = _interopRequireDefault(_insertBefore);

var _contentSelect = __webpack_require__(/*! ./contentSelect */ "./src/components/contentSelect.js");

var _contentSelect2 = _interopRequireDefault(_contentSelect);

var _social = __webpack_require__(/*! ./social */ "./src/components/social.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ///////////////////////////////////
// TOOLBAR
// ///////////////////////////////////

exports.default = function (manifest) {

	//
	// Build toolbar
	//

	// Tidy the path
	var path = window.location.pathname || '';
	var root_path = (0, _url2.default)(manifest.root).pathname;

	// Remove the root path from the path
	path = (0, _ltrim2.default)(path, root_path);

	// Trim the path
	path = path.replace(/^\//g, '');

	var paths = path.split(/([^/]+\/?)/).filter(function (s) {
		return !!s;
	});
	manifest.paths = paths;

	var crumbs = [(0, _create2.default)('a', { href: manifest.root }, [(0, _create2.default)('img', { src: manifest.favicon, alt: window.location.hostname, title: manifest.name })])];

	paths.forEach(function (val, index) {

		var href = manifest.root + paths.slice(0, index + 1).join('');
		var text = val.replace(/\.(html?)$/, '');

		crumbs.push(' ', (0, _create2.default)('a', { href: href }, [text]));
	});

	// Create Breadcrumbs
	var breadcrumbs = (0, _create2.default)('div', { class: 'adorn-breadcrumbs' }, crumbs);

	var links = [(0, _social.github_btn)(manifest), (0, _social.twitter_btn)(manifest), (0, _social.share_btn)(manifest)].reduce(function (a, btn) {
		// Intersperse span elements
		if (!btn) {
			return a;
		}
		if (a.length) {
			a.push((0, _create2.default)('span'));
		}
		a.push(btn);
		return a;
	}, []);

	// Get Social Buttons
	var social_btns = (0, _create2.default)('div', { class: 'adorn-links' }, links);

	// If Navbar Shoutout
	if (manifest.shoutout) {
		social_btns.appendChild((0, _create2.default)('span'));
		social_btns.insertAdjacentHTML('beforeend', manifest.shoutout);
	}

	// Append
	var aside = (0, _create2.default)('aside', { class: 'adorn-toolbar' }, [breadcrumbs, social_btns]);

	(0, _insertBefore2.default)(aside, document.body.firstElementChild || document.body.firstChild);

	// ///////////////////////////////////
	// TOC
	// ///////////////////////////////////

	(0, _contentSelect2.default)(breadcrumbs);
};

module.exports = exports['default'];

/***/ }),

/***/ "./src/components/viewport.js":
/*!************************************!*\
  !*** ./src/components/viewport.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _insertBefore = __webpack_require__(/*! tricks/dom/insertBefore */ "./node_modules/tricks/dom/insertBefore.js");

var _insertBefore2 = _interopRequireDefault(_insertBefore);

var _create = __webpack_require__(/*! tricks/dom/create */ "./node_modules/tricks/dom/create.js");

var _create2 = _interopRequireDefault(_create);

var _query = __webpack_require__(/*! tricks/dom/query */ "./node_modules/tricks/dom/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!(0, _query2.default)('meta[name=viewport]')) {

	// Insert Meta Tag
	(0, _insertBefore2.default)((0, _create2.default)('meta', {
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0'
	}), document.getElementsByTagName('script')[0]);
}

/***/ })

/******/ });
//# sourceMappingURL=adorn.js.map