parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eHzx":[function(require,module,exports) {

},{}],"ioaO":[function(require,module,exports) {
module.exports="/my-photo.51bbaf5b.png";
},{}],"JkLK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=e(require("./my-photo.png"));function e(n){return n&&n.__esModule?n:{default:n}}var t='\n    <div id="home-page">\n        <div class="home-name animate__animated animate__fadeIn">\n            <div>\n                Hi,\n            </div>\n            <div class="bold">\n                I’m <span class="text-primary">Deep Patel</span>,\n            </div>\n            <div>\n                Front End Engineer.\n            </div>\n            <div class="sub-footer">\n                ReactJS Developer | NodeJS Developer\n            </div>\n            <a\n                class="contect-me-footer"\n                href="mailto:deeppatel234@gmail.com"\n                target="_blank"\n            >\n                Contact Me\n            </a>\n        </div>\n        <div class="animate__animated animate__fadeIn">\n            <img class="my-photo" src="'.concat(n.default,'" />\n        </div>\n        <div class="social-icons home">\n            <a href="https://github.com/deeppatel234/" target="_blank">\n                <svg\n                    aria-hidden="true"\n                    role="img"\n                    height="1em"\n                    width="1em"\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 496 512"\n                    class="github"\n                >\n                    <path\n                        fill="currentColor"\n                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"\n                    ></path>\n                </svg>\n            </a>\n            <a\n                href="https://www.linkedin.com/in/deeppatel234/"\n                target="_blank"\n            >\n                <svg\n                    aria-hidden="true"\n                    role="img"\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 448 512"\n                    height="1em"\n                    width="1em"\n                    class="linkedin"\n                >\n                    <path\n                        fill="currentColor"\n                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"\n                    ></path>\n                </svg>\n            </a>\n            <a href="https://twitter.com/deepp234" target="_blank">\n                <svg\n                    aria-hidden="true"\n                    role="img"\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 512 512"\n                    height="1em"\n                    width="1em"\n                    class="twitter"\n                >\n                    <path\n                        fill="currentColor"\n                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"\n                        class=""\n                    ></path>\n                </svg>\n            </a>\n            <a\n                href="https://www.facebook.com/deeppatel234"\n                target="_blank"\n            >\n                <svg\n                    aria-hidden="true"\n                    role="img"\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 320 512"\n                    height="1em"\n                    width="1em"\n                    class="facebook"\n                >\n                    <path\n                        fill="currentColor"\n                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"\n                        class=""\n                    ></path>\n                </svg>\n            </a>\n            <a\n                href="https://www.instagram.com/__deeppatel/"\n                target="_blank"\n            >\n                <svg\n                    aria-hidden="true"\n                    focusable="false"\n                    role="img"\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 448 512"\n                    height="1em"\n                    width="1em"\n                    class="instagram"\n                >\n                    <path\n                        fill="currentColor"\n                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"\n                        class=""\n                    ></path>\n                </svg>\n            </a>\n        </div>\n    </div>\n'),a=t;exports.default=a;
},{"./my-photo.png":"ioaO"}],"tLuV":[function(require,module,exports) {
"use strict";var e,t;function s(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={GITHUB:"GITHUB",CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",NPM:"NPM",WEBSITE:"WEBSITE",PLAY_STORE:"PLAY_STORE"},o=(s(e={},n.GITHUB,"Github"),s(e,n.CHROME,"Chrome"),s(e,n.FIREFOX,"Firefox"),s(e,n.EDGE,"Edge"),s(e,n.NPM,"NPM"),s(e,n.WEBSITE,"Website"),s(e,n.PLAY_STORE,"Play Store"),e),a=(s(t={},n.GITHUB,'\n      <svg\n        aria-hidden="true"\n        role="img"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 496 512"\n        class="github"\n        width="1em"\n        height="1em"\n      >\n        <path\n          fill="currentColor"\n          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"\n        />\n    </svg>\n  '),s(t,n.CHROME,'\n      <svg\n        class="chrome"\n        role="img"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 496 512"\n        width="1em"\n        height="1em"\n      >\n          <path\n            fill="currentColor"\n            d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"\n            class=""\n          />\n      </svg>\n    '),s(t,n.FIREFOX,'\n      <svg\n        class="firefox-browser"\n        role="img"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 512 512"\n        width="1em"\n        height="1em"\n      >\n        <path\n          fill="currentColor"\n          d="M189.37,152.86Zm-58.74-29.37C130.79,123.5,130.71,123.5,130.63,123.49Zm351.42,45.35c-10.61-25.5-32.08-53-48.94-61.73,13.72,26.89,21.67,53.88,24.7,74,0,0,0,.14.05.41-27.58-68.75-74.35-96.47-112.55-156.83-1.93-3.05-3.86-6.11-5.74-9.33-1-1.65-1.86-3.34-2.69-5.05A44.88,44.88,0,0,1,333.24.69a.63.63,0,0,0-.55-.66.9.9,0,0,0-.46,0l-.12.07-.18.1.1-.14c-54.23,31.77-76.72,87.38-82.5,122.78a130,130,0,0,0-48.33,12.33,6.25,6.25,0,0,0-3.09,7.75,6.13,6.13,0,0,0,7.79,3.79l.52-.21a117.84,117.84,0,0,1,42.11-11l1.42-.1c2-.12,4-.2,6-.22A122.61,122.61,0,0,1,291,140c.67.2,1.32.42,2,.63,1.89.57,3.76,1.2,5.62,1.87,1.36.5,2.71,1,4.05,1.58,1.09.44,2.18.88,3.25,1.35q2.52,1.13,5,2.35c.75.37,1.5.74,2.25,1.13q2.4,1.26,4.74,2.63,1.51.87,3,1.8a124.89,124.89,0,0,1,42.66,44.13c-13-9.15-36.35-18.19-58.82-14.28,87.74,43.86,64.18,194.9-57.39,189.2a108.43,108.43,0,0,1-31.74-6.12c-2.42-.91-4.8-1.89-7.16-2.93-1.38-.63-2.76-1.27-4.12-2C174.5,346,149.9,316.92,146.83,281.59c0,0,11.25-41.95,80.62-41.95,7.5,0,28.93-20.92,29.33-27-.09-2-42.54-18.87-59.09-35.18-8.85-8.71-13.05-12.91-16.77-16.06a69.58,69.58,0,0,0-6.31-4.77A113.05,113.05,0,0,1,173.92,97c-25.06,11.41-44.55,29.45-58.71,45.37h-.12c-9.67-12.25-9-52.65-8.43-61.08-.12-.53-7.22,3.68-8.15,4.31a178.54,178.54,0,0,0-23.84,20.43A214,214,0,0,0,51.9,133.36l0,0a.08.08,0,0,1,0,0,205.84,205.84,0,0,0-32.73,73.9c-.06.27-2.33,10.21-4,22.48q-.42,2.87-.78,5.74c-.57,3.69-1,7.71-1.44,14,0,.24,0,.48-.05.72-.18,2.71-.34,5.41-.49,8.12,0,.41,0,.82,0,1.24,0,134.7,109.21,243.89,243.92,243.89,120.64,0,220.82-87.58,240.43-202.62.41-3.12.74-6.26,1.11-9.41,4.85-41.83-.54-85.79-15.82-122.55Z"\n          class=""\n        />\n      </svg>\n    '),s(t,n.EDGE,'\n      <svg\n        class="edge"\n        role="img"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 512 512"\n        width="1em"\n        height="1em"\n      >\n        <path\n          fill="currentColor"\n          d="M481.92,134.48C440.87,54.18,352.26,8,255.91,8,137.05,8,37.51,91.68,13.47,203.66c26-46.49,86.22-79.14,149.46-79.14,79.27,0,121.09,48.93,122.25,50.18,22,23.8,33,50.39,33,83.1,0,10.4-5.31,25.82-15.11,38.57-1.57,2-6.39,4.84-6.39,11,0,5.06,3.29,9.92,9.14,14,27.86,19.37,80.37,16.81,80.51,16.81A115.39,115.39,0,0,0,444.94,322a118.92,118.92,0,0,0,58.95-102.44C504.39,176.13,488.39,147.26,481.92,134.48ZM212.77,475.67a154.88,154.88,0,0,1-46.64-45c-32.94-47.42-34.24-95.6-20.1-136A155.5,155.5,0,0,1,203,215.75c59-45.2,94.84-5.65,99.06-1a80,80,0,0,0-4.89-10.14c-9.24-15.93-24-36.41-56.56-53.51-33.72-17.69-70.59-18.59-77.64-18.59-38.71,0-77.9,13-107.53,35.69C35.68,183.3,12.77,208.72,8.6,243c-1.08,12.31-2.75,62.8,23,118.27a248,248,0,0,0,248.3,141.61C241.78,496.26,214.05,476.24,212.77,475.67Zm250.72-98.33a7.76,7.76,0,0,0-7.92-.23,181.66,181.66,0,0,1-20.41,9.12,197.54,197.54,0,0,1-69.55,12.52c-91.67,0-171.52-63.06-171.52-144A61.12,61.12,0,0,1,200.61,228,168.72,168.72,0,0,0,161.85,278c-14.92,29.37-33,88.13,13.33,151.66,6.51,8.91,23,30,56,47.67,23.57,12.65,49,19.61,71.7,19.61,35.14,0,115.43-33.44,163-108.87A7.75,7.75,0,0,0,463.49,377.34Z"\n        />\n      </svg>\n    '),s(t,n.NPM,'\n      <svg\n        class="npm"\n        role="img"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="0 0 576 512"\n        width="1em"\n        height="1em"\n      >\n        <path\n          fill="currentColor"\n          d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"\n        />\n      </svg>\n    '),s(t,n.WEBSITE,'\n        <svg\n            focusable="false"\n            role="img"\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 512 512"\n            height="1em"\n            width="1em"\n        >\n            <path\n                fill="currentColor"\n                d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM32 80c0-8.8 7.2-16 16-16h48v64H32V80zm448 352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160h448v272zm0-304H128V64h336c8.8 0 16 7.2 16 16v48z"\n            />\n        </svg>\n    '),s(t,n.PLAY_STORE,'\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">\n      <path fill="none" d="M0 0h24v24H0z"/>\n      <path fill="currentColor" d="M4 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.501 22.131A1 1 0 0 1 3 21.266V2.734a1 1 0 0 1 1-1zm8.292 11.68l-4.498 4.498 5.699-3.299-1.2-1.2zM5 6.118v11.76l5.88-5.88-5.88-5.88zm10.284 4.302L13.706 12l1.578 1.577L18.008 12l-2.725-1.579zm-7.49-4.336l4.5 4.5 1.199-1.2-5.699-3.3z"/>\n    </svg>\n  '),t),r=[{name:"Fire Dashboard",description:"\n      New Tab Dashboard and Bookmark Manager. Fire dashboard is your all-in-one productivity tool with multiple workspace support.\n    ",badges:[{link:"https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"},{link:"https://img.shields.io/chrome-web-store/users/ljpgbnpckoolgelpcbpfcafklbpkodeg?label=chrome%20downloads&style=flat-square"}],screenshots:[{link:"https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/bookmark-raw.jpeg?raw=true"},{link:"https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/new-tab-bh-raw.jpeg?raw=true"},{link:"https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/workspace-raw.jpeg?raw=true"},{link:"https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/search-raw.jpeg?raw=true"},{link:"https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/theme-support-raw.jpeg?raw=true"},{link:"https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/unsplash-raw.jpeg?raw=true"},{link:"https://github.com/deeppatel234/fire-dashboard/blob/main/store-assets/screenshots/firebase-raw.jpeg?raw=true"}],links:[{type:n.GITHUB,url:"https://github.com/deeppatel234/fire-dashboard"},{type:n.CHROME,url:"https://chrome.google.com/webstore/detail/fire-dashboard/ljpgbnpckoolgelpcbpfcafklbpkodeg"}]},{name:"React Context Devtool",description:"\n            Devtool for debug ReactJS Context and useReducer API. Devtool have raw, tree and diff views of your JSON data.\n            It allow you can dispatch actions from devtool in useReducer hook.\n        ",badges:[{link:"https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"},{link:"https://img.shields.io/npm/dt/react-context-devtool.svg?style=flat-square"},{link:"https://img.shields.io/npm/v/react-context-devtool.svg?style=flat-square"},{link:"https://img.shields.io/chrome-web-store/users/oddhnidmicpefilikhgeagedibnefkcf?label=chrome%20downloads&style=flat-square"}],screenshots:[{link:"https://raw.githubusercontent.com/deeppatel234/react-context-devtool/master/store-assets/screenshots/context-tree-view.png"},{link:"https://raw.githubusercontent.com/deeppatel234/react-context-devtool/master/store-assets/screenshots/context-raw-view.png"},{link:"https://raw.githubusercontent.com/deeppatel234/react-context-devtool/master/store-assets/screenshots/reducer-action-view.png"},{link:"https://raw.githubusercontent.com/deeppatel234/react-context-devtool/master/store-assets/screenshots/reducer-diff-view.png"}],links:[{type:n.GITHUB,url:"https://github.com/deeppatel234/react-context-devtool"},{type:n.CHROME,url:"https://chrome.google.com/webstore/detail/react-context-devtool/oddhnidmicpefilikhgeagedibnefkcf"},{type:n.FIREFOX,url:"https://addons.mozilla.org/en-US/firefox/addon/react-context-devtool/"},{type:n.EDGE,url:"https://microsoftedge.microsoft.com/addons/detail/react-context-devtool/bnclaomncapgohhafjepfklgbjdjlfcd"},{type:n.NPM,url:"https://www.npmjs.com/package/react-context-devtool"}]},{name:"Webpack Report",description:"\n            Webpack build analysis tool. it gives a detailed report for assets, modules and chunks so you can easily optimize your webpack build.\n        ",badges:[{link:"https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"},{link:"https://img.shields.io/npm/dt/webpack-report.svg?style=flat-square"},{link:"https://img.shields.io/npm/v/react-context-devtool.svg?style=flat-square"}],screenshots:[{link:"https://github.com/deeppatel234/webpack-report/blob/master/assets/screenshots/dashboard.png?raw=true"},{link:"https://github.com/deeppatel234/webpack-report/blob/master/assets/screenshots/assets.png?raw=true"},{link:"https://github.com/deeppatel234/webpack-report/blob/master/assets/screenshots/modules.png?raw=true"},{link:"https://github.com/deeppatel234/webpack-report/blob/master/assets/screenshots/chunks.png?raw=true"}],links:[{type:n.GITHUB,url:"https://github.com/deeppatel234/webpack-report"},{type:n.NPM,url:"https://www.npmjs.com/package/webpack-report"}]},{name:"EditMyMd",description:"\n          Easily manage your GitHub and GitLab project documentation. With EditMyMD you can manage your all markdown files.\n      ",screenshots:[{link:"https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-1.png?raw=true"},{link:"https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-2.png?raw=true"},{link:"https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-3.png?raw=true"},{link:"https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-4.png?raw=true"},{link:"https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-5.png?raw=true"},{link:"https://github.com/deeppatel234/editmymd/blob/master/assets/screenshots/EditMyMd-6.png?raw=true"}],links:[{type:n.GITHUB,url:"https://github.com/deeppatel234/editmymd"},{type:n.WEBSITE,url:"https://editmymd.herokuapp.com/"}]},{name:"Tools",description:"\n        Devtools collections for developers to do their daily tasks.\n      ",screenshots:[{link:"https://raw.githubusercontent.com/deeppatel234/tools/master/assests/screenshots/Tools-1.jpeg"},{link:"https://raw.githubusercontent.com/deeppatel234/tools/master/assests/screenshots/Tools-2.jpeg"},{link:"https://raw.githubusercontent.com/deeppatel234/tools/master/assests/screenshots/Tools-3.jpeg"}],links:[{type:n.GITHUB,url:"https://github.com/deeppatel234/tools"},{type:n.WEBSITE,url:"https://deeppatel234.github.io/tools"}]},{name:"MD Editor React",description:"\n            Markdown Editor for ReactJS. create a markdown with live preview and customized menu bar.\n        ",badges:[{link:"https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"},{link:"https://img.shields.io/npm/dt/md-editor-react.svg?style=flat-square"},{link:"https://img.shields.io/npm/v/md-editor-react.svg?style=flat-square"},{link:"https://img.shields.io/bundlephobia/min/md-editor-react?style=flat-square"},{link:"https://img.shields.io/bundlephobia/minzip/md-editor-react?style=flat-square"}],screenshots:[{link:"https://raw.githubusercontent.com/deeppatel234/md-editor-react/master/assets/screenshots/MD-Editor-1.png"},{link:"https://raw.githubusercontent.com/deeppatel234/md-editor-react/master/assets/screenshots/MD-Editor-2.png"},{link:"https://raw.githubusercontent.com/deeppatel234/md-editor-react/master/assets/screenshots/MD-Editor-3.png"}],links:[{type:n.GITHUB,url:"https://github.com/deeppatel234/md-editor-react"},{type:n.NPM,url:"https://www.npmjs.com/package/md-editor-react"}]},{name:"Expensy",description:"\n      Personal Expense Tracking app made with react native.\n    ",screenshots:[{link:"https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-1.webp"},{link:"https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-2.webp"},{link:"https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-3.webp"},{link:"https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-4.webp"},{link:"https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-5.webp"},{link:"https://raw.githubusercontent.com/deeppatel234/expensy-app/master/assets/screenshots/Expensy-6.webp"}],links:[{type:n.GITHUB,url:"https://github.com/deeppatel234/expensy-app"},{type:n.PLAY_STORE,url:"https://play.google.com/store/apps/details?id=com.devivetech.expensy&hl=en_IN&gl=US"}]}],i='\n    <div id="work-page">\n        '.concat(r.map(function(e){var t=e.name,s=e.description,n=e.screenshots,r=e.links,i=e.badges,l=void 0===i?[]:i;return'\n                    <div class="project-card">\n                        <div class="first-col">\n                            <h1 class="title">\n                                '.concat(t,'\n                            </h1>\n                            <p class="badges">\n                              ').concat(l.map(function(e){var t=e.link;return'\n                                    <img src="'.concat(t,'" />\n                                ')}).join(""),'\n                            </p>\n                            <p class="sub-text discription">\n                                ').concat(s,'\n                            </p>\n                            <div class="image-slide">\n                                ').concat(n.map(function(e){var t=e.link;return'\n                                        <img class="screenshot img-shadow" src="'.concat(t,'" />\n                                    ')}).join(""),'\n                            </div>\n                        </div>\n                        <div class="secound-col">\n                          ').concat(r.map(function(e){var t=e.url,s=e.type;return'\n                                <a target="_blank" href="'.concat(t,'">\n                                  <div>\n                                    ').concat(a[s],"\n                                  </div>\n                                  <div>\n                                    ").concat(o[s],"\n                                  </div>\n                                </a>\n                              ")}).join(""),"\n                        </div>\n                    </div>\n                ")}).join(""),"\n    </div>\n"),l=i;exports.default=l;
},{}],"unXQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={name:"Deep Patel",designation:"Frontend Engineer",contactDetails:[{title:"Mobile",value:"+91 9624184236"},{title:"Email",value:"deeppatel234@gmail.com"},{title:"Address",value:"Pune, Maharashtra, India"}],socialDetails:[{icon:"ri-github-fill",link:"https://github.com/deeppatel234",title:"deeppatel234"},{icon:"ri-linkedin-box-fill",link:"https://www.linkedin.com/in/deeppatel234/",title:"/in/deeppatel234"},{icon:"ri-earth-line",link:"https://deeppatel234.github.io",title:"deeppatel234.github.io"}],profileBlock:{title:"Profile",description:"\n      Being front-end developer and open source enthusiast, I'm seeking full time\n      opportunity in the organization. I'm confident enough to prove\n      myself worth to the company by applying my knowledge and skills\n      for continues improvement. I can also work in agile environment\n      and be a team player.\n    "},educationBlock:{blockTitle:"Education",title:"BE in Computer Engineering",subTitle:"2013-2017 (8.68 CGPA)",description:"Gujarat power engineering and research institute"},experienceBlock:{blockTitle:"Experience",list:[{title:"Software Design Engineer, Onlinesales.ai",titleRight:"2/2020 - Present",tags:["React JS","Redux","Lerna.js"],description:["Lead Hyperlocal product. manage the sprint task and the team.","Develop a design system from scratch for all the onlinesales products.","Architect and refactor all the products from scratch in React JS."]},{title:"Software Design Engineer, Agrostar",titleRight:"2/2019 - 2/2020",tags:["React JS","Redux","Lerna.js"],description:["Develop a design system from scratch for all the agrostar products.","Own AgroEx product and manage the sprint task.","Refactor 2 product AgroEx and Credit viswas from scratch in React JS."]},{title:"Jr. Application Engineer, Odoo",titleRight:"7/2017 - 2/2019",tags:["Javascript","Python"],description:["Develop ERP System based on ODOO's open source python and javascript based framework.","Worked on enterprise product for new features and bug fixes. One of my work was also showcased on ODOO 11 launch video."]},{title:"Intern, Odoo",titleRight:"1/2017 - 6/2017",tags:["Javascript","Python"],description:["Develop ERP Feedback System on cloud based ODOO's open source python and javascript based framework."]}]},projectBlock:{blockTitle:"Projects",list:[{title:"React Context Devtool",titleRight:"Chrome Extension",tags:["React JS","Chrome API"],description:["Devtool for debug ReactJS Context and useReducer API. Devtool have raw, tree and diff views of your JSON data. It allow you can dispatch actions from devtool in useReducer hook.","20,000+ downloads in chrome web store"]},{title:"Fire Dashboard",titleRight:"Chrome Extension",tags:["React JS","Chrome API"],description:["New Tab Dashboard and Bookmark Manager. Fire dashboard is your all-in-one productivity tool with multiple workspace support.","Bookmark management app that is better than bookmarks. Organize your browser tabs and access them quickly anywhere."]},{title:"Webpack Report",titleRight:"Node Module",tags:["React JS","Emotion JS"],description:["Webpack build analysis tool. it gives a detailed report for assets, modules and chunks so you can easily optimize your webpack build."]}]},skillBlock:{blockTitle:"Technical Skills",tags:["Javascript","ES6","React JS","Styled Component","Redux","Chrome Extension","CSS","SCSS","Webpack"]}},e='\n  <div class="resume-page-main-wrapper">\n    <div class="resume-page-header">\n\n    </div>\n    <div class="resume-wrapper">\n      <div class="header">\n        <div class="left-header">\n          <div class="name">'.concat(t.name,'</div>\n          <div class="designation">').concat(t.designation,'</div>\n        </div>\n        <div class="right-header">\n          <table>\n            ').concat(t.contactDetails.map(function(t){return'\n                <tr>\n                  <td class="title">'.concat(t.title,'</td>\n                  <td class="value">').concat(t.value,"</td>\n                </tr>\n              ")}).join(""),'\n          </table>\n        </div>\n      </div>\n      <div class="link-nav">\n        ').concat(t.socialDetails.map(function(t){return'\n              <div class="link-block">\n                <i class="'.concat(t.icon,'"></i>\n                <a\n                  href="').concat(t.link,'"\n                  target="_blank"\n                  class="value"\n                >\n                  ').concat(t.title,"\n                </a>\n              </div>\n            ")}).join(""),'\n      </div>\n      <div class="main-section">\n        <div class="left">\n          <div class="block">\n            <div class="block-title">Experience</div>\n            ').concat(t.experienceBlock.list.map(function(t){return'\n                <div class="block-content">\n                  <div class="content-title">\n                    <div>'.concat(t.title,'</div>\n                    <div class="right-title">\n                      ').concat(t.titleRight,'\n                    </div>\n                  </div>\n                  <ul class="description-list">\n                    ').concat(t.description.map(function(t){return"<li>".concat(t,"</li>")}).join(""),"\n                  </ul>\n                </div>\n              ")}).join(""),'\n          </div>\n        </div>\n        <div class="right">\n          <div class="block">\n            <div class="block-title">').concat(t.profileBlock.title,'</div>\n            <div class="block-content">\n              <div class="description-text">').concat(t.profileBlock.description,'</div>\n            </div>\n          </div>\n          <div class="block">\n            <div class="block-title">').concat(t.educationBlock.blockTitle,'</div>\n            <div class="block-content">\n              <div class="content-title">').concat(t.educationBlock.title,'</div>\n              <div class="content-subtitle">').concat(t.educationBlock.subTitle,'</div>\n              <div class="description-text">').concat(t.educationBlock.description,'</div>\n            </div>\n          </div>\n          <div class="block">\n            <div class="block-title">').concat(t.skillBlock.blockTitle,'</div>\n            <div class="block-content wrap">\n              ').concat(t.skillBlock.tags.map(function(t){return'<span class="tag">'.concat(t,"</span>")}).join(""),'\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="project-section">\n        <div class="block">\n          <div class="block-title border">').concat(t.projectBlock.blockTitle,"</div>\n          ").concat(t.projectBlock.list.map(function(t){return'\n              <div class="block-content">\n                <div class="content-title">\n                  <div>'.concat(t.title,'</div>\n                  <div class="right-title">\n                    <div class="right-tag">\n                      ').concat(t.tags.join(", "),"\n                    </div>\n                    ").concat(t.titleRight,'\n                  </div>\n                </div>\n                <ul class="description-list">\n                  ').concat(t.description.map(function(t){return"<li>".concat(t,"</li>")}).join(""),"\n                </ul>\n              </div>\n            ")}).join(""),'\n        </div>\n        <div class="many-more">\n          ...and many more. you can check all of my project in <a href="https://github.com/deeppatel234" target="_blank">https://github.com/deeppatel234</a>\n        </div>\n      </div>\n    </div>\n  </div>\n'),n=e;exports.default=n;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./index.scss");var e=a(require("./home")),t=a(require("./work")),n=a(require("./resume"));function a(e){return e&&e.__esModule?e:{default:e}}var c=document.getElementById("root-content"),o=document.getElementById("menubar"),r=document.getElementById("nav-bar"),d=document.getElementById("overlay"),s=["home","work","resume"],i=function(e){var t=e.replace("#",""),n=document.getElementById("nav-".concat(t));n||(n=document.getElementById("nav-home")),s.forEach(function(e){return document.getElementById("nav-".concat(e)).classList.remove("active")}),n&&n.classList.add("active")},u=function(){r.classList.remove("show"),d.classList.add("hide")},l=function(a){var o="";o="#work"===a?t.default:"#resume"===a?n.default:e.default,c.innerHTML=o,i(a),u()};window.addEventListener("hashchange",function(){l(location.hash)},!1),o.addEventListener("click",function(){r.classList.add("show"),d.classList.remove("hide")}),d.addEventListener("click",function(){u()}),l(location.hash);
},{"./index.scss":"eHzx","./home":"JkLK","./work":"tLuV","./resume":"unXQ"}]},{},["Focm"], null)
//# sourceMappingURL=/src.231973cb.js.map