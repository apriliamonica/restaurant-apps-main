if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const d=e=>a(e,r),o={module:{uri:r},exports:s,require:d};i[r]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(c(...e),s)))}}define(["./workbox-3bd9af45"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"6c208210c9a5f068215a0cf92a779cab"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"f97dd9dc83018a797b75c1ca06559246"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"data/favorite-resto-idb.js",revision:"969c9af570e70ac69a5038ea88696c76"},{url:"favicon.png",revision:"48bdf429d06b144f8b69966f2f5e86a8"},{url:"icons/icon-128x128.png",revision:"2e4e5dd60dfc0fff5bca64d79f60aa14"},{url:"icons/icon-144x144.png",revision:"c47ea94e2011e13c8f30685be5fe3f8d"},{url:"icons/icon-152x152.png",revision:"7fd6555371f95d6882b49d210ea1d3a9"},{url:"icons/icon-192x192.png",revision:"3ad96f6470cd273f115eb3d017008dbe"},{url:"icons/icon-384x384.png",revision:"c2ce45ca73731952cbd7bad3f11edd95"},{url:"icons/icon-512x512.png",revision:"3e6a6f6b3a3c436037d8ca8482a90b1c"},{url:"icons/icon-72x72.png",revision:"42c94657b0ed0153ac95bde5b1acbd78"},{url:"icons/icon-96x96.png",revision:"d5c36688927083a00f459068818dd3c9"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/makanan/nasi-image_1.jpg",revision:"02f3c3db19cb27e965e3aaaab254caea"},{url:"index.html",revision:"8653baf3331982516fb81295d2d81791"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"mukbangdb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/small/<pictureId>")),new e.StaleWhileRevalidate({cacheName:"small-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/<pictureId>")),new e.StaleWhileRevalidate({cacheName:"medium-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large/<pictureId>")),new e.StaleWhileRevalidate({cacheName:"large-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
