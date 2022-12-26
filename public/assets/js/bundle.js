(()=>{"use strict";var r,n,e,t,o,a,c,i,s,u,A,d,l,p,m,f,h,g,v,C,b,y,x,I={770:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(537),o=e.n(t),a=e(645),c=e.n(a)()(o());c.push([r.id,':root{\r\n    --primary-color: #151515;\r\n    --segund-color: #121212;\r\n}\r\n*{\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--primary-color);\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n\r\n}\r\n.container{\r\n    max-width: 700px;\r\n    margin: 10px auto;\r\n    background-color: var(--segund-color);\r\n    padding: 20px;\r\n    color: white;\r\n} \r\n\r\n.container h1 {\r\n    text-align: center;\r\n    font-size: 2em;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.senha-gerada{\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    margin-bottom: 30px;\r\n    color: green;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n    width: 25px;\r\n    height: 20px;\r\n}\r\n\r\nbutton{\r\n    display: block;\r\n    margin: 20px 0;\r\n    font-size: 1em;\r\n}\r\n\r\n',"",{version:3,sources:["webpack://./src/assets/css/index.css"],names:[],mappings:"AAAA;IACI,wBAAwB;IACxB,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,SAAS;IACT,UAAU;IACV,sCAAsC;IACtC,gBAAgB;IAChB,kBAAkB;;AAEtB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,qCAAqC;IACrC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;AAClB",sourcesContent:[':root{\r\n    --primary-color: #151515;\r\n    --segund-color: #121212;\r\n}\r\n*{\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--primary-color);\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n\r\n}\r\n.container{\r\n    max-width: 700px;\r\n    margin: 10px auto;\r\n    background-color: var(--segund-color);\r\n    padding: 20px;\r\n    color: white;\r\n} \r\n\r\n.container h1 {\r\n    text-align: center;\r\n    font-size: 2em;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.senha-gerada{\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    margin-bottom: 30px;\r\n    color: green;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n    width: 25px;\r\n    height: 20px;\r\n}\r\n\r\nbutton{\r\n    display: block;\r\n    margin: 20px 0;\r\n    font-size: 1em;\r\n}\r\n\r\n'],sourceRoot:""}]);const i=c},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<r.length;u++){var A=[].concat(r[u]);t&&c[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),e&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=e):A[2]=e),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),n.push(A))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},c=[],i=0;i<r.length;i++){var s=r[i],u=t.base?s[0]+t.base:s[0],A=a[u]||0,d="".concat(u," ").concat(A);a[u]=A+1;var l=e(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(p);else{var m=o(p,t);t.byIndex=i,n.splice(i,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var c=0;c<a.length;c++){var i=e(a[c]);n[i].references--}for(var s=t(r,o),u=0;u<a.length;u++){var A=e(a[u]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},B={};function k(r){var n=B[r];if(void 0!==n)return n.exports;var e=B[r]={id:r,exports:{}};return I[r](e,e.exports,k),e.exports}k.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return k.d(n,{a:n}),n},k.d=(r,n)=>{for(var e in n)k.o(n,e)&&!k.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},k.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),k.nc=void 0,r=function(r,n){return Math.floor(Math.random()*(n-r)+r)},n=",.;~^[]{}!@#$%*()_+=-",e=document.querySelector(".senha-gerada"),t=document.querySelector(".qtd-caracteres"),o=document.querySelector(".chk-maiuscula"),a=document.querySelector(".chk-minuscula"),c=document.querySelector(".chk-numeros"),i=document.querySelector(".chk-simbolos"),s=document.querySelector(".gera-senha"),u=k(379),A=k.n(u),d=k(795),l=k.n(d),p=k(569),m=k.n(p),f=k(565),h=k.n(f),g=k(216),v=k.n(g),C=k(589),b=k.n(C),y=k(770),(x={}).styleTagTransform=b(),x.setAttributes=h(),x.insert=m().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),A()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,s.addEventListener("click",(function(){e.innerHTML=function(e,t,o,a,c){var i=[];e=Number(e);for(var s=0;s<e;s++)t&&i.push(String.fromCharCode(r(65,91))),o&&i.push(String.fromCharCode(r(97,123))),a&&i.push(String.fromCharCode(r(48,58))),c&&i.push(n[r(0,n.length)]);return i.join("").slice(0,e)}(t.value,o.checked,a.checked,c.checked,i.checked)||"Nada selecionado."}))})();
//# sourceMappingURL=bundle.js.map