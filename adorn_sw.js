!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=new(n(1))("adorn_sw",1,{falloverStore:{autoIncrement:!0}})("falloverStore");var o;function s(e){if(!e)throw"not found";return e}self.addEventListener("install",e=>{e.waitUntil(caches.open("adorn_sw").then(()=>{}))}),self.addEventListener("fetch",e=>{{const t=new URL(e.request.url);if(self.location.host!==t.host)return!1}const t=e.request;let n;e.respondWith((async()=>{const e=caches.match(t).then(e=>(e&&(n=n||"cache wins"),e)),c=fetch(t).then(e=>(e&&(n=n||"network wins"),e)),a=(o=[e,c],new Promise((e,t)=>{(o=o.map(e=>Promise.resolve(e).then(s))).forEach(t=>t.then(e)),o.reduce((e,t)=>e.catch(()=>t)).catch(()=>t(Error("All failed")))}));return a.then(()=>{console.log(n,t.url)}),c.then(function(e,t){if(!t||200!==t.status||"basic"!==t.type)return t;const n=t.clone();return caches.open("adorn_sw").then(t=>{t.put(e,n)}),t}.bind(null,t)),a.catch(async function(e){const t=(await r.all()).filter(t=>(!t.mode||t.mode===e.mode)&&(!t.url||e.url.match(t.url)))[0];if(t)return caches.match(new Request(t.fallover))}.bind(null,t))})())}),self.addEventListener("message",e=>{const t=e.data;caches.open("adorn_sw").then(e=>{switch(t.type){case"fallover":r.all().then(n=>{const o=n.filter(e=>e.mode===t.mode&&e.url===t.url)[0];if(o&&o.fallover===t.fallover)return;const s=new Request(t.fallover,{mode:"no-cors"});fetch(s).then(n=>(o?o.fallover=t.fallover:r.put(t),e.put(t.fallover,n)))});break;case"add":{const n=new Request(t.url,{mode:"no-cors"});return fetch(n).then(n=>e.put(t.url,n))}}})})},function(e,t){e.exports=class{constructor(e,t,n){return this.db_name=e||"__adorn__","object"==typeof t?(this.version=1,this.schema=t):(this.version=t||1,this.schema=n),this.table_name="__adorn__",Object.assign(this.scope.bind(this),this)}scope(e){const t=Object.create(this);return t.table_name=e,t}open(e){return new Promise((e,t)=>{const n=self.indexedDB.open(this.db_name,this.version);n.onsuccess=(t=>{e(t.target.result)}),n.onerror=t,n.onupgradeneeded=(e=>{const t=e.target.result;for(const e in this.schema)t.objectStoreNames.contains(e)||t.createObjectStore(e,this.schema[e])})}).then(t=>t.transaction([this.table_name],e).objectStore(this.table_name))}get(e){return new Promise((t,n)=>{this.open().then(r=>{const o=r.get(e);o.onsuccess=(e=>{t(e.target.result)}),o.onerror=(e=>{n(e.target.result)})})})}all(){return new Promise((e,t)=>{this.open().then(n=>{const r=n.openCursor();r.onerror=(e=>{t(e.target.result)});const o=[];r.onsuccess=(t=>{const n=t.target.result;n?(o.push(n.value),n.continue()):e(o)})})})}put(e,t){return new Promise((n,r)=>{"object"==typeof e?t=e:t.key=e,this.open("readwrite").then(e=>{const o=e.put(t);o.onsuccess=(e=>{n(e.target.result)}),o.onerror=(e=>{r(e.target.result)})}).catch(r)})}}}]);
//# sourceMappingURL=adorn_sw.js.map