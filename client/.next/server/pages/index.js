"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Home = ()=>{\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:5000\");\n    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const joinRoom = ()=>{\n        socket.emit(\"join-room\", {\n            roomId: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: value,\n                onChange: (e)=>setValue(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/vitor/Projects/coup/client/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>joinRoom()\n                ,\n                children: \"Entrar na sala\"\n            }, void 0, false, {\n                fileName: \"/home/vitor/Projects/coup/client/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vitor/Projects/coup/client/pages/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0M7QUFDSztBQUVyQyxNQUFNRSxJQUFJLEdBQWEsSUFBTTtJQUMzQixNQUFNQyxNQUFNLEdBQUdGLG9EQUFFLENBQUMsdUJBQXVCLENBQUM7SUFDMUMsTUFBTSxFQU5SLEdBTVNHLEtBQUssR0FOZCxHQU1nQkMsUUFBUSxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUV0QyxNQUFNTSxRQUFRLEdBQUcsSUFBTTtRQUNyQkgsTUFBTSxDQUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQUVDLE1BQU0sRUFBRUosS0FBSztTQUFFLENBQUM7S0FDNUM7SUFFRCxxQkFDRSw4REFBQ0ssSUFBRTs7MEJBQ0QsOERBQUNDLE9BQUs7Z0JBQUNOLEtBQUssRUFBRUEsS0FBSztnQkFBRU8sUUFBUSxFQUFFQyxDQUFBQSxDQUFDLEdBQUlQLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDQyxNQUFNLENBQUNULEtBQUssQ0FBQzs7Ozs7eUJBQUk7MEJBQ2hFLDhEQUFDVSxRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBTVQsUUFBUSxFQUFFO2dCQUFBOzBCQUFFLGdCQUFjOzs7Ozt5QkFBUzs7Ozs7O2lCQUN2RCxDQUNOO0NBQ0Y7QUFFRCxpRUFBZUosSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjUwMDAnKVxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGpvaW5Sb29tID0gKCkgPT4ge1xuICAgIHNvY2tldC5lbWl0KCdqb2luLXJvb20nLCB7IHJvb21JZDogdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGgxPlxuICAgICAgPGlucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBqb2luUm9vbSgpfT5FbnRyYXIgbmEgc2FsYTwvYnV0dG9uPlxuICAgIDwvaDE+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaW8iLCJIb21lIiwic29ja2V0IiwidmFsdWUiLCJzZXRWYWx1ZSIsImpvaW5Sb29tIiwiZW1pdCIsInJvb21JZCIsImgxIiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();