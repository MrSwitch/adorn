// indexStorage
// This wraps an interface around IndexDB to create an object store

// Create an instance of the db
// The Cache name is optional, it will allow us to group various datasets (the default is __tricks__)

export class DB {
	constructor(name, version, schema) {

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

	scope(name) {
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

	get(key) {

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

	all() {

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

	put(key, data) {

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
