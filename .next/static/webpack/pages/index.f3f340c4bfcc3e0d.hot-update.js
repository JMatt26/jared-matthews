"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Journey.js":
/*!***********************************!*\
  !*** ./src/components/Journey.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Journey; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_Journey_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Journey.module.css */ \"./src/styles/components/Journey.module.css\");\n/* harmony import */ var _styles_components_Journey_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Journey_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _InfoCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoCircle */ \"./src/components/InfoCircle.js\");\n\n\n\n\nfunction Journey() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_Journey_module_css__WEBPACK_IMPORTED_MODULE_2___default().headerText),\n                children: \"My Journey\"\n            }, void 0, false, {\n                fileName: \"/Users/jaredmatthews/Projects/Personal Website/jared-matthews/src/components/Journey.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_Journey_module_css__WEBPACK_IMPORTED_MODULE_2___default().centennial),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InfoCircle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    CircleTitle: \"McGill University\"\n                }, void 0, false, {\n                    fileName: \"/Users/jaredmatthews/Projects/Personal Website/jared-matthews/src/components/Journey.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jaredmatthews/Projects/Personal Website/jared-matthews/src/components/Journey.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jaredmatthews/Projects/Personal Website/jared-matthews/src/components/Journey.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Journey;\nvar _c;\n$RefreshReg$(_c, \"Journey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Kb3VybmV5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkQ7QUFDdkI7QUFDWTtBQUVuQyxTQUFTRyxVQUFVO0lBQ2hDLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPO1lBQUVDLFlBQVk7UUFBUTs7MEJBQ2hDLDhEQUFDRjtnQkFBSUcsV0FBV1AseUZBQWlCOzBCQUFFOzs7Ozs7MEJBQ25DLDhEQUFDSTtnQkFBSUcsV0FBV1AseUZBQWlCOzBCQUMvQiw0RUFBQ0MsbURBQVVBO29CQUFDUyxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0tBVHVCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Kb3VybmV5LmpzPzA0NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvSm91cm5leS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW5mb0NpcmNsZSBmcm9tIFwiLi9JbmZvQ2lyY2xlXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvdXJuZXkoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRleHR9Pk15IEpvdXJuZXk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVubmlhbH0+XG4gICAgICAgIDxJbmZvQ2lyY2xlIENpcmNsZVRpdGxlPVwiTWNHaWxsIFVuaXZlcnNpdHlcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW5mb0NpcmNsZSIsIkNvbnRhaW5lciIsIkpvdXJuZXkiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjbGFzc05hbWUiLCJoZWFkZXJUZXh0IiwiY2VudGVubmlhbCIsIkNpcmNsZVRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Journey.js\n"));

/***/ })

});