"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateatmayogashala"]("common",{

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/common.css */ \"./src/css/common.css\");\n/* harmony import */ var _assets_material_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/material-icons.css */ \"./src/assets/material-icons.css\");\n/* harmony import */ var _html_header_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html/header.html */ \"./src/html/header.html\");\n/* harmony import */ var _html_footer_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html/footer.html */ \"./src/html/footer.html\");\n/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/loader */ \"./src/modules/loader.js\");\n/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_loader__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n// Dynamically load scripts\nconst loadScript = (FILE_URL, async = true, type = \"text/javascript\") => {\n    return new Promise((resolve, reject) => {\n        if (typeof loadScript.loadedScripts == \"undefined\") loadScript.loadedScripts = []\n        if (loadScript.loadedScripts.includes(FILE_URL)) {\n            console.error(\"Already Loading script !\")\n            reject({\n                status: false,\n                message: `Already loading/loaded the script ${FILE_URL}`,\n            })\n        } else {\n            try {\n                const scriptEle = document.createElement(\"script\")\n                scriptEle.type = type\n                scriptEle.async = async\n                scriptEle.src = FILE_URL\n                loadedScripts.push(FILE_URL)\n                scriptEle.addEventListener(\"load\", ev => {\n                    console.log(\"loaded\")\n                    resolve({ status: true })\n                })\n\n                scriptEle.addEventListener(\"error\", ev => {\n                    console.error(ev)\n                    loadScript.loadedScripts.splice(loadScript.loadedScripts.indexOf(FILE_URL), 1)\n                    reject({\n                        status: false,\n                        message: `Failed to load the script ${FILE_URL}`,\n                    })\n                })\n\n                document.body.appendChild(scriptEle)\n            } catch (error) {\n                reject(error)\n            }\n        }\n    })\n}\n\ndocument.querySelector(\"body\").insertAdjacentHTML(\"afterbegin\", _html_header_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\ndocument.querySelector(\"body\").insertAdjacentHTML(\"beforeend\", _html_footer_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n\nlet sign_ui = document.querySelector(\"div.sign\")\ndocument.querySelector(\"#sitemap\").onclick = e => {\n    e.preventDefault()\n    changeHash(\"sitemap\")\n}\n\nif (window.location.pathname.includes(\"index.html\")) document.querySelector(\"#home\").classList.add(\"nav-active\")\nelse if (window.location.pathname.includes(\"contact.html\")) document.querySelector(\"#contact\").classList.add(\"nav-active\")\nelse if (window.location.pathname.includes(\"products.html\")) document.querySelector(\"#products\").classList.add(\"nav-active\")\nelse if (window.location.pathname.includes(\"about.html\")) document.querySelector(\"#about\").classList.add(\"nav-active\")\nelse document.querySelector(\"#home\").classList.add(\"nav-active\")\n\nlet dealWithHash = () => {\n    let hash = window.location.hash.substring(1)\n    console.log(hash)\n    switch (hash) {\n        case \"sitemap\":\n            document.querySelector(\"footer\").scrollIntoView({ behavior: \"smooth\", block: \"start\" })\n            break\n        case \"login\":\n            sign_ui.style[\"opacity\"] = \"1\"\n            sign_ui.style[\"visibility\"] = \"visible\"\n            break\n        default: // Hide active popups\n            sign_ui.style[\"opacity\"] = \"0\"\n            sign_ui.style[\"visibility\"] = \"hidden\"\n            break\n    }\n}\nlet changeHash = hash => {\n    if (window.location.hash.substring(1) === hash) window.dispatchEvent(new HashChangeEvent(\"hashchange\"))\n    else window.location.hash = hash\n}\ndealWithHash()\naddEventListener(\"hashchange\", dealWithHash)\n\n// Animations...\ndocument.querySelector(\"div.sign div.wrapper\").onscroll = e => {\n    e.target.style[\"background-position-x\"] = (e.target.scrollTop / e.target.children[0].clientHeight) * 30 + \"%\"\n}\ndocument.querySelector(\"div.sign div.wrapper div.abstraction button\").onclick = e => {\n    document.querySelector(\"div.sign div.wrapper div.logup\").scrollIntoView({ behavior: \"smooth\", block: \"start\" })\n}\nsign_ui.onclick = e => {\n    if (e.target.id === \"sign\") {\n        window.location.hash = \"\"\n        sign_ui.style[\"opacity\"] = \"0\"\n        sign_ui.style[\"visibility\"] = \"hidden\"\n    }\n}\ndocument.querySelector(\"nav div.login\").onclick = e => {\n    window.location.hash = \"login\"\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDVztBQUNHO0FBQ0E7QUFDRjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxTQUFTO0FBQ3ZFLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxTQUFTO0FBQ3ZFLHFCQUFxQjtBQUNyQixpQkFBaUI7O0FBRWpCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxnRUFBZ0UseURBQU07QUFDdEUsK0RBQStELHlEQUFNOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxvQ0FBb0M7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLG9DQUFvQztBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXRtYXlvZ2FzaGFsYS8uL3NyYy9jb21tb24uanM/NjlkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2Nzcy9jb21tb24uY3NzXCJcbmltcG9ydCBcIi4vYXNzZXRzL21hdGVyaWFsLWljb25zLmNzc1wiXG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL2h0bWwvaGVhZGVyLmh0bWxcIlxuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9odG1sL2Zvb3Rlci5odG1sXCJcbmltcG9ydCBsb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9sb2FkZXJcIlxuXG4vLyBEeW5hbWljYWxseSBsb2FkIHNjcmlwdHNcbmNvbnN0IGxvYWRTY3JpcHQgPSAoRklMRV9VUkwsIGFzeW5jID0gdHJ1ZSwgdHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCIpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxvYWRTY3JpcHQubG9hZGVkU2NyaXB0cyA9PSBcInVuZGVmaW5lZFwiKSBsb2FkU2NyaXB0LmxvYWRlZFNjcmlwdHMgPSBbXVxuICAgICAgICBpZiAobG9hZFNjcmlwdC5sb2FkZWRTY3JpcHRzLmluY2x1ZGVzKEZJTEVfVVJMKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFscmVhZHkgTG9hZGluZyBzY3JpcHQgIVwiKVxuICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBBbHJlYWR5IGxvYWRpbmcvbG9hZGVkIHRoZSBzY3JpcHQgJHtGSUxFX1VSTH1gLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxuICAgICAgICAgICAgICAgIHNjcmlwdEVsZS50eXBlID0gdHlwZVxuICAgICAgICAgICAgICAgIHNjcmlwdEVsZS5hc3luYyA9IGFzeW5jXG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlLnNyYyA9IEZJTEVfVVJMXG4gICAgICAgICAgICAgICAgbG9hZGVkU2NyaXB0cy5wdXNoKEZJTEVfVVJMKVxuICAgICAgICAgICAgICAgIHNjcmlwdEVsZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBldiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzdGF0dXM6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBldiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXYpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRTY3JpcHQubG9hZGVkU2NyaXB0cy5zcGxpY2UobG9hZFNjcmlwdC5sb2FkZWRTY3JpcHRzLmluZGV4T2YoRklMRV9VUkwpLCAxKVxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gbG9hZCB0aGUgc2NyaXB0ICR7RklMRV9VUkx9YCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRFbGUpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaGVhZGVyKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGZvb3RlcilcblxubGV0IHNpZ25fdWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNpZ25cIilcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZW1hcFwiKS5vbmNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY2hhbmdlSGFzaChcInNpdGVtYXBcIilcbn1cblxuaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImluZGV4Lmh0bWxcIikpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKS5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKVxuZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiY29udGFjdC5odG1sXCIpKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIikuY2xhc3NMaXN0LmFkZChcIm5hdi1hY3RpdmVcIilcbmVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcInByb2R1Y3RzLmh0bWxcIikpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdHNcIikuY2xhc3NMaXN0LmFkZChcIm5hdi1hY3RpdmVcIilcbmVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImFib3V0Lmh0bWxcIikpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIikuY2xhc3NMaXN0LmFkZChcIm5hdi1hY3RpdmVcIilcbmVsc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpLmNsYXNzTGlzdC5hZGQoXCJuYXYtYWN0aXZlXCIpXG5cbmxldCBkZWFsV2l0aEhhc2ggPSAoKSA9PiB7XG4gICAgbGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSlcbiAgICBjb25zb2xlLmxvZyhoYXNoKVxuICAgIHN3aXRjaCAoaGFzaCkge1xuICAgICAgICBjYXNlIFwic2l0ZW1hcFwiOlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFwibG9naW5cIjpcbiAgICAgICAgICAgIHNpZ25fdWkuc3R5bGVbXCJvcGFjaXR5XCJdID0gXCIxXCJcbiAgICAgICAgICAgIHNpZ25fdWkuc3R5bGVbXCJ2aXNpYmlsaXR5XCJdID0gXCJ2aXNpYmxlXCJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6IC8vIEhpZGUgYWN0aXZlIHBvcHVwc1xuICAgICAgICAgICAgc2lnbl91aS5zdHlsZVtcIm9wYWNpdHlcIl0gPSBcIjBcIlxuICAgICAgICAgICAgc2lnbl91aS5zdHlsZVtcInZpc2liaWxpdHlcIl0gPSBcImhpZGRlblwiXG4gICAgICAgICAgICBicmVha1xuICAgIH1cbn1cbmxldCBjaGFuZ2VIYXNoID0gaGFzaCA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSA9PT0gaGFzaCkgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEhhc2hDaGFuZ2VFdmVudChcImhhc2hjaGFuZ2VcIikpXG4gICAgZWxzZSB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hcbn1cbmRlYWxXaXRoSGFzaCgpXG5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBkZWFsV2l0aEhhc2gpXG5cbi8vIEFuaW1hdGlvbnMuLi5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2lnbiBkaXYud3JhcHBlclwiKS5vbnNjcm9sbCA9IGUgPT4ge1xuICAgIGUudGFyZ2V0LnN0eWxlW1wiYmFja2dyb3VuZC1wb3NpdGlvbi14XCJdID0gKGUudGFyZ2V0LnNjcm9sbFRvcCAvIGUudGFyZ2V0LmNoaWxkcmVuWzBdLmNsaWVudEhlaWdodCkgKiAzMCArIFwiJVwiXG59XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNpZ24gZGl2LndyYXBwZXIgZGl2LmFic3RyYWN0aW9uIGJ1dHRvblwiKS5vbmNsaWNrID0gZSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5zaWduIGRpdi53cmFwcGVyIGRpdi5sb2d1cFwiKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pXG59XG5zaWduX3VpLm9uY2xpY2sgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwic2lnblwiKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIlxuICAgICAgICBzaWduX3VpLnN0eWxlW1wib3BhY2l0eVwiXSA9IFwiMFwiXG4gICAgICAgIHNpZ25fdWkuc3R5bGVbXCJ2aXNpYmlsaXR5XCJdID0gXCJoaWRkZW5cIlxuICAgIH1cbn1cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgZGl2LmxvZ2luXCIpLm9uY2xpY2sgPSBlID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwibG9naW5cIlxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common.js\n");

/***/ })

});