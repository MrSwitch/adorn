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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/adorn_sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/adorn_sw.js":
/*!*************************!*\
  !*** ./src/adorn_sw.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Service Worker
// Caches pages visited by agent for viewing offline

const CACHE_NAME = 'adorn_sw';
const VERSION = 1;

const DB = __webpack_require__(/*! ./lib/indexdb */ "./src/lib/indexdb.js");
const db = new DB('adorn_sw', VERSION, {
	falloverStore: {
		autoIncrement: true
	}
});

const falloverStore = db('falloverStore');

self.addEventListener('install', event => {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(() => {
			// Opened cache
		})
	);
});

self.addEventListener('fetch', event => {
	const request = event.request;
	let status;
	event.respondWith((async () => {
		const fromCache = caches.match(request)
			.then(b => {
				if (b) {
					status = status || 'cache wins';
				}
				return b;
			});

		const fromFetch = fetch(request)
			.then(b => {
				if (b) {
					status = status || 'network wins';
				}
				return b;
			});

		const promise = promiseAny([fromCache, fromFetch]);

		promise.then(() => {
			// Report the success
			console.log(status, request.url); // eslint-disable-line no-console
		});

		// Save
		fromFetch.then(cacheUpdate.bind(null, request));

		return promise.catch(offlineFallback.bind(null, request));

	})());

});


// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/

function promiseAny(promises) {
	return new Promise((resolve, reject) => {
		// make sure promises are all promises
		promises = promises.map(p => Promise.resolve(p).then(emptyHandler));
		// resolve this promise as soon as one resolves
		promises.forEach(p => p.then(resolve));
		// reject if all promises reject
		promises
			.reduce((a, b) => a.catch(() => b))
			.catch(() => reject(Error('All failed')));
	});
}


function emptyHandler(r) {
	if (!r) {
		throw 'not found';
	}
	return r;
}

function cacheUpdate(request, response) {

	// Check if we received a valid response
	if (!response || response.status !== 200 || response.type !== 'basic') {
		return response;
	}

	const responseToCache = response.clone();

	caches.open(CACHE_NAME).then(cache => {

		// Replace Cache file
		cache.put(request, responseToCache);
	});

	return response;
}

async function offlineFallback(request) {

	const fallover = await falloverStore.all();

	const match = fallover.filter(item => (
		(!item.mode || item.mode === request.mode)
		&& (!item.url || request.url.match(item.url))
	))[0];

	if (match) {
		return caches.match(new Request(match.fallover));
	}

	return;
}


self.addEventListener('message', event => {

	const data = event.data;

	// Open cache for actions
	caches.open(CACHE_NAME).then(cache => {
		switch (data.type) {

			case 'fallover': {
				// Has this already been added?
				falloverStore.all().then(fallover => {
					const match = fallover.filter(item => item.mode === data.mode && item.url === data.url)[0];
					if (match) {
						// does this need
						if (match.fallover === data.fallover) {
							// nothing to do
							return;
						}
					}
					const frequest = new Request(data.fallover, {mode: 'no-cors'});

					fetch(frequest).then(response => {
						// Just update the existing record
						if (match) {
							match.fallover = data.fallover;
						}
						else {
							falloverStore.put(data);
						}
						return cache.put(data.fallover, response);
					});
				});
				break;
			}
			case 'add': {
				const request = new Request(data.url, {mode: 'no-cors'});
				return fetch(request).then(response => cache.put(data.url, response));
			}
		}
	});
});

/***/ }),

/***/ "./src/lib/indexdb.js":
/*!****************************!*\
  !*** ./src/lib/indexdb.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// indexStorage
// This wraps an interface around IndexDB to create an object store

// Create an instance of the db
// The Cache name is optional, it will allow us to group various datasets (the default is __tricks__)

class DB {
	constructor (name, version, schema) {

		// Define the schema to use in the connection
		this.db_name = name || '__adorn__';
		if (typeof version === 'object') {
			this.version = 1;
			this.schema = version;
		}
		else {
			this.version = version || 1;
			this.schema = schema;
		}
		this.table_name = '__adorn__';

		// Return a function
		return Object.assign(this.scope.bind(this), this);
	}

	scope (name) {
		// Create a new store instance
		const inst = Object.create(this);
		inst.table_name = name;
		return inst;
	}

	open(mode) {
		return new Promise((accept, reject) => {
			const db = self.indexedDB.open(this.db_name, this.version);
			db.onsuccess = event => {
				accept(event.target.result);
			};
			db.onerror = reject;
			db.onupgradeneeded = event => {
				const db = event.target.result;

				// this should probably do something;
				for (const x in this.schema) {
					if (!db.objectStoreNames.contains(x)) {
						db.createObjectStore(x, this.schema[x]);
					}
				}
			};
		})
			.then(db => {
			// The DB connection has been established
			// Lets create a connection to it
				const transaction = db.transaction([this.table_name], mode);

				// Return the API for the Object Store
				return transaction.objectStore(this.table_name);
			});
	}

	get (key) {

		// We've got all the information to make a request to IndexDB
		return new Promise((accept, reject) => {
			this.open().then(objectStore => {
				// Find items in this table by Key
				const request = objectStore.get(key);
				request.onsuccess = event => {
					accept(event.target.result);
				};
				request.onerror = event => {
					reject(event.target.result);
				};
			});
		});
	}

	all () {

		// We've got all the information to make a request to IndexDB
		return new Promise((accept, reject) => {
			this.open().then(objectStore => {
				// Find items in this table by Key
				const request = objectStore.openCursor();
				request.onerror = event => {
					reject(event.target.result);
				};

				const a = [];
				request.onsuccess = event => {
					const cursor = event.target.result;
					if (cursor) {
						a.push(cursor.value);
						cursor.continue();
					}
					else {
						accept(a);
					}
				};
			});
		});
	}

	put (key, data) {

		return new Promise((accept, reject) => {

			// Allow data as a thing on its own.
			if (typeof key === 'object') {
				data = key;
			}
			else {
				data.key = key;
			}

			// Open up a connection to indexdb
			this.open('readwrite').then(objectStore => {
				const request = objectStore.put(data);
				request.onsuccess = event => {
					accept(event.target.result);
				};
				request.onerror = event => {
					reject(event.target.result);
				};
			})
				.catch(reject);

		});
	}
}

module.exports = DB;


/***/ })

/******/ });
//# sourceMappingURL=adorn_sw.js.map