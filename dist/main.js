!function(n){var t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(i,r,function(t){return n[t]}.bind(null,r));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/dist",e(e.s=4)}([function(n,t,e){var i=e(1);"string"==typeof i&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};e(3)(i,r);i.locals&&(n.exports=i.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"html,\nbody {\n  height: 100%;\n}\n\n.header {\n  height: 80px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: blue;\n  display: flex;\n  padding: 0px 20px;\n  box-sizing: border-box;\n}\n\n.container {\n  max-width: 1440px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.container-header {\n  max-width: 1440px;\n  width: 100%;\n  height: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  position: relative;\n}\n\n.container-header > nav {\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 0%;\n}\n\n.container-header > nav > a {\n  color: white;\n  text-decoration-line: none;\n  margin: 10px;\n}\n\n.image-middle {\n  height: 64px;\n  width: 64px;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.header-image-small {\n  height: 32px;\n  width: 32px;\n}\n\n.image-left {\n  height: 32px;\n  width: 32px;\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  margin-left: -100%;\n  transform: translate(100%, -50%);\n}\n\n.header-busket {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 100%;\n  margin-right: -100%;\n  transform: translate(-100%, -50%);\n}\n\n.header-busket > span {\n  padding: 5px;\n}\n\n#tooltip {\n  visibility: hidden;\n  width: 180px;\n  background-color: white;\n  height: 150px;\n  box-shadow: 10px 10px 5px grey;\n  opacity: 0.8;\n  padding: 20px;\n\n  /* Position */\n  position: absolute;\n  z-index: 1;\n  top: 100%;\n  right: 50%;\n  margin-right: -50px;\n}\n\n.tooltiptext-col {\n  width: 50%;\n}\n\n@media screen and (min-width: 600px) {\n  .product-col {\n    width: 25%;\n    float: left;\n    box-sizing: border-box;\n    padding: 5px;\n    text-align: center;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .product-col {\n    width: 50%;\n    float: left;\n    box-sizing: border-box;\n    padding: 5px;\n    text-align: center;\n  }\n\n  .image-left {\n    visibility: visible;\n  }\n\n  .container-header > nav {\n    display: none;\n  }\n\n  .header-busket .busket-text {\n    display: none;\n  }\n}\n\n.original-price {\n  text-decoration-line: line-through;\n}\n\n.discount-price {\n  color: red;\n}\n\n.product-image {\n  width: 100%;\n}\n\nmain {\n  width: 100%;\n  max-width: 1440px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  min-height: 100%;\n}\n\n.product-title {\n  color: blue;\n  font-weight: bold;\n}\n\n.product-button {\n  background-color: green;\n  color: white;\n  width: 80px;\n}\n\n.product-container {\n  display: block;\n  width: 100%;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n\nfooter {\n  background-color: grey;\n  text-align: center;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 10px;\n}\n\n.tooltip-image {\n  width: 64px;\n  height: 64px;\n}\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=i.sources.map(function(n){return"/*# sourceURL=".concat(i.sourceRoot).concat(n," */")});return[e].concat(o).concat([r]).join("\n")}var a,s,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&i[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}();function s(n,t){for(var e=[],i={},r=0;r<n.length;r++){var o=n[r],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):e.push(i[a]={id:a,parts:[s]})}return e}function l(n,t){for(var e=0;e<n.length;e++){var i=n[e],o=r[i.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(g(i.parts[a],t))}else{for(var s=[];a<i.parts.length;a++)s.push(g(i.parts[a],t));r[i.id]={id:i.id,refs:1,parts:s}}}}function c(n){var t=document.createElement("style");if(void 0===n.attributes.nonce){var i=e.nc;i&&(n.attributes.nonce=i)}if(Object.keys(n.attributes).forEach(function(e){t.setAttribute(e,n.attributes[e])}),"function"==typeof n.insert)n.insert(t);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function p(n,t,e,i){var r=e?"":i.css;if(n.styleSheet)n.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}var f=null,h=0;function g(n,t){var e,i,r;if(t.singleton){var o=h++;e=f||(f=c(t)),i=p.bind(null,e,o,!1),r=p.bind(null,e,o,!0)}else e=c(t),i=function(n,t,e){var i=e.css,r=e.media,o=e.sourceMap;if(r&&n.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=s(n,t);return l(e,t),function(n){for(var i=[],o=0;o<e.length;o++){var a=e[o],c=r[a.id];c&&(c.refs--,i.push(c))}n&&l(s(n,t),t);for(var u=0;u<i.length;u++){var d=i[u];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete r[d.id]}}}}},function(n,t,e){"use strict";e.r(t);var i=document.querySelector("#header-busket"),r=document.querySelector("#tooltip");e(0);i.addEventListener("mouseover",function(){r.style.visibility="visible"}),i.addEventListener("mouseout",function(){r.style.visibility="hidden"})}]);