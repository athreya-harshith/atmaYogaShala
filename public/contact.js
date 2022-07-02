(()=>{"use strict";var n,i,t,e,a,o,r,d,l,c,s,p,v,f,u={446:(n,i,t)=>{t.d(i,{Z:()=>d});var e=t(81),a=t.n(e),o=t(645),r=t.n(o)()(a());r.push([n.id,'div.contact_back {\n    width: 100vw;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -2;\n    height: fill-available;\n    height: -moz-fill-available;\n    height: -webkit-fill-available;\n}\n\nimg.backart {\n    width: 100%;\n}\n\ndiv.greet div.title {\n    color: var(--white);\n    font-weight: bolder;\n    font-size: 2.5em;\n}\n\ndiv.greet div.more {\n    color: var(--ac2);\n    padding: 3px;\n    font-size: large;\n    margin-top: 10px;\n    text-shadow: 0 3px 6px var(--ptc);\n}\n\nsection {\n    display: flex;\n    margin: 0 auto;\n    height: auto;\n    background-color: var(--white);\n    justify-content: center;\n    margin-bottom: 50px;\n    box-shadow: var(--shadow-close);\n    min-width: min-content;\n}\n\nsection div.form div.title {\n    line-height: 36px;\n    vertical-align: middle;\n    font-size: 1.5em;\n}\n\nsection div.form div.title > span {\n    color: var(--ptc);\n    float: right;\n}\n\nsection div.form div.inputs div.input-box {\n    width: auto;\n    display: inline-block;\n    margin-bottom: 20px;\n}\nsection div.form div.inputs div.message {\n    width: 100%;\n    display: block;\n}\nsection div.form div.inputs div.message div.outline-wrapper {\n    height: 100px !important;\n}\nsection div.form div.inputs div.input-box div.outline-wrapper span.material-icons {\n    position: absolute;\n    margin-left: 10px;\n    font-size: 24px;\n    padding: 5px 0;\n}\nsection div.form div.inputs div.input-box span.label {\n    background-color: var(--white);\n    color: var(--ap);\n    font-family: "Roboto-Slab-bold";\n    padding: 0 10px;\n    transform: translate(20px, -8px);\n    position: absolute;\n}\nsection div.form div.inputs div.input-box div.outline-wrapper {\n    height: 60px;\n    padding: 10px;\n    border: 2px solid var(--stc);\n    border-radius: inherit;\n}\nsection div.form div.inputs div.input-box input {\n    height: 100%;\n    background-color: var(--apl);\n    border: none;\n    border-radius: 8px 0 0 8px;\n    padding-left: 46px;\n}\nsection div.form div.inputs div.input-box textarea {\n    height: 100%;\n    width: 100%;\n    background-color: var(--apl);\n    border: none;\n    border-radius: 8px 0 0 8px;\n    padding-left: 46px;\n    padding-top: 8px;\n}\nsection div.form div.inputs {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    justify-content: space-between;\n}\n\nsection div.addr > div {\n    display: flex;\n    margin-top: 40px;\n}\n\nsection div.addr div.social a {\n    margin: auto auto;\n}\nsection div.addr span.material-icons {\n    color: var(--stc);\n}\n\ndiv.addr > div span.material-icons {\n    font-size: 2.5em;\n    margin-right: 10px;\n}\n\nsection div.addr > span {\n    font-size: 1.5em;\n    font-weight: bold;\n}\n\nsection div.addr {\n    color: var(--bg);\n    min-width: min-content;\n    background-color: var(--ptc);\n    padding: 55px;\n    max-width: fill-available;\n    max-width: -moz-fill-available;\n    max-width: -webkit-fill-available;\n}\n\nbutton {\n    height: 36px;\n    padding: 6px 12px;\n    background-color: var(--ap);\n    border: none;\n    border-radius: 8px;\n    box-shadow: var(--shadow-close);\n    color: var(--white);\n    font-family: "Roboto-Slab-bold";\n    position: relative;\n}\n\ndiv.accwrap {\n    height: auto;\n}\n\nsection.dev {\n    height: 0;\n    overflow: hidden;\n    max-height: 0;\n    transition: max-height 0.5s ease-in-out;\n}\n\ndiv.accwrap:hover section.dev {\n    height: fit-content;\n    max-height: 2000px;\n}\n\nsection.dev div.form {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-content: space-between;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    max-height: 490px;\n    overflow-y: scroll;\n    padding-top: 40px;\n}\n\nsection.dev div.form div.card {\n    display: flex;\n    flex-direction: column;\n    width: 160px;\n    height: fit-content;\n    align-items: center;\n    padding: 12px;\n    background: var(--apl);\n    overflow: hidden;\n    border-radius: 10px;\n    margin: 5px;\n}\n\nsection.dev div.form div.card span.quote {\n    font-style: italic;\n    font-size: small;\n    text-align: center;\n}\nsection.dev div.form div.card span.name {\n    font-family: "Roboto-Slab-bold";\n    color: var(--ptc);\n}\nsection.dev div.form div.card button {\n    width: 100%;\n    box-shadow: none;\n}\nsection.dev div.form div.card button span {\n    font-size: 24px;\n    margin-left: -10px;\n    vertical-align: middle;\n}\nsection.dev div.form div.card img {\n    height: 70px;\n    width: 70px;\n    border-radius: 50%;\n    border: 2px solid var(--ap);\n    padding: 5px;\n}\n\nsection.accordian span:first-of-type {\n    font-size: 1.2em;\n}\nsection.accordian {\n    margin-bottom: 0;\n    z-index: 10;\n    position: relative;\n    box-shadow: none;\n    display: flex;\n    flex-wrap: nowrap;\n    flex-direction: row;\n    justify-content: space-between;\n    align-content: center;\n    align-items: center;\n    padding: 7px 15px 7px 15px;\n}\n/* Desktop Start */\n@media only screen and (min-width: 756px) {\n    div.greet {\n        padding: 100px;\n    }\n    section {\n        width: calc(100% - 200px);\n        flex-direction: row;\n        flex-wrap: nowrap;\n    }\n    section div.form {\n        width: 65%;\n        color: var(--ptc);\n        padding: 55px;\n        max-width: fill-available;\n        max-width: -moz-fill-available;\n        max-width: -webkit-fill-available;\n    }\n\n    section div.addr {\n        width: 35%;\n        color: var(--bg);\n        background-color: var(--ptc);\n        padding: 55px;\n        max-width: fill-available;\n        max-width: -moz-fill-available;\n        max-width: -webkit-fill-available;\n    }\n}\n\n/* Mobile Start */\n@media only screen and (max-width: 755px) {\n    img.backart {\n        transform: scale(1.4);\n    }\n    div.greet {\n        padding: 30px;\n    }\n    section {\n        width: 100%;\n        flex-direction: column;\n        flex-wrap: wrap;\n    }\n    section div.form {\n        width: 100%;\n        color: var(--ptc);\n        padding: 55px;\n        max-width: fill-available;\n        max-width: -moz-fill-available;\n        max-width: -webkit-fill-available;\n        margin: 0 auto;\n    }\n\n    section.dev div.form {\n        padding: 0;\n    }\n\n    section div.addr {\n        width: 100%;\n        color: var(--bg);\n        background-color: var(--ptc);\n        padding: 55px;\n        max-width: fill-available;\n        max-width: -moz-fill-available;\n        max-width: -webkit-fill-available;\n    }\n}\n',""]);const d=r},645:n=>{n.exports=function(n){var i=[];return i.toString=function(){return this.map((function(i){var t="",e=void 0!==i[5];return i[4]&&(t+="@supports (".concat(i[4],") {")),i[2]&&(t+="@media ".concat(i[2]," {")),e&&(t+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),t+=n(i),e&&(t+="}"),i[2]&&(t+="}"),i[4]&&(t+="}"),t})).join("")},i.i=function(n,t,e,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(e)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(r[l]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&r[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),i.push(s))}},i}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var i=[];function t(n){for(var t=-1,e=0;e<i.length;e++)if(i[e].identifier===n){t=e;break}return t}function e(n,e){for(var o={},r=[],d=0;d<n.length;d++){var l=n[d],c=e.base?l[0]+e.base:l[0],s=o[c]||0,p="".concat(c," ").concat(s);o[c]=s+1;var v=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==v)i[v].references++,i[v].updater(f);else{var u=a(f,e);e.byIndex=d,i.splice(d,0,{identifier:p,updater:u,references:1})}r.push(p)}return r}function a(n,i){var t=i.domAPI(i);return t.update(n),function(i){if(i){if(i.css===n.css&&i.media===n.media&&i.sourceMap===n.sourceMap&&i.supports===n.supports&&i.layer===n.layer)return;t.update(n=i)}else t.remove()}}n.exports=function(n,a){var o=e(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var d=t(o[r]);i[d].references--}for(var l=e(n,a),c=0;c<o.length;c++){var s=t(o[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}o=l}}},569:n=>{var i={};n.exports=function(n,t){var e=function(n){if(void 0===i[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}i[n]=t}return i[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var i=document.createElement("style");return n.setAttributes(i,n.attributes),n.insert(i,n.options),i}},565:(n,i,t)=>{n.exports=function(n){var i=t.nc;i&&n.setAttribute("nonce",i)}},795:n=>{n.exports=function(n){var i=n.insertStyleElement(n);return{update:function(t){!function(n,i,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,a&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),i.styleTagTransform(e,n,i.options)}(i,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(i)}}}},589:n=>{n.exports=function(n,i){if(i.styleSheet)i.styleSheet.cssText=n;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(n))}}}},m={};function x(n){var i=m[n];if(void 0!==i)return i.exports;var t=m[n]={id:n,exports:{}};return u[n](t,t.exports,x),t.exports}x.n=n=>{var i=n&&n.__esModule?()=>n.default:()=>n;return x.d(i,{a:i}),i},x.d=(n,i)=>{for(var t in i)x.o(i,t)&&!x.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:i[t]})},x.o=(n,i)=>Object.prototype.hasOwnProperty.call(n,i),x.nc=void 0,n=x(379),i=x.n(n),t=x(795),e=x.n(t),a=x(569),o=x.n(a),r=x(565),d=x.n(r),l=x(216),c=x.n(l),s=x(589),p=x.n(s),v=x(446),(f={}).styleTagTransform=p(),f.setAttributes=d(),f.insert=o().bind(null,"head"),f.domAPI=e(),f.insertStyleElement=c(),i()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals,console.log("contact")})();