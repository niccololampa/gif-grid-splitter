"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/RowColInput.tsx":
/*!********************************************!*\
  !*** ./src/app/components/RowColInput.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RowColInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction RowColInput(props) {\n    _s();\n    const { dimensions, handleSubmitDimensions } = props;\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dimensions);\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (!Number(formData.row) || !Number(formData.col)) {\n            handleSubmitDimensions({\n                rows: 1,\n                cols: 1\n            });\n        }\n        handleSubmitDimensions({\n            rows: formData.rows || 1,\n            cols: formData.cols || 1\n        });\n    };\n    const handleChange = (event)=>{\n        console.log(event.target.name);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"/Users/niccololampa/Documents/working-files/applications/somewhere/gif-grid-splitter/src/app/components/RowColInput.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: handleChange,\n                placeholder: formData.rows.toString(),\n                value: formData.rows,\n                id: \"rows\",\n                name: \"rows\"\n            }, void 0, false, {\n                fileName: \"/Users/niccololampa/Documents/working-files/applications/somewhere/gif-grid-splitter/src/app/components/RowColInput.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: handleChange,\n                placeholder: formData.cols.toString(),\n                value: formData.cols,\n                id: \"cols\",\n                name: \"cols\"\n            }, void 0, false, {\n                fileName: \"/Users/niccololampa/Documents/working-files/applications/somewhere/gif-grid-splitter/src/app/components/RowColInput.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/niccololampa/Documents/working-files/applications/somewhere/gif-grid-splitter/src/app/components/RowColInput.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(RowColInput, \"tMJk1LXLX5pP2wQ+FfKkaqjT5Mw=\");\n_c = RowColInput;\nvar _c;\n$RefreshReg$(_c, \"RowColInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Sb3dDb2xJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBWWxCLFNBQVNDLFlBQVlDLEtBQXVCOztJQUN6RCxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsc0JBQXNCLEVBQUUsR0FBR0Y7SUFFL0MsTUFBTSxDQUFDRyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDRztJQUV6QyxNQUFNSSxlQUFlLENBQUNDO1FBQ3BCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUksQ0FBQ0MsT0FBT0wsU0FBU00sR0FBRyxLQUFLLENBQUNELE9BQU9MLFNBQVNPLEdBQUcsR0FBRztZQUNsRFIsdUJBQXVCO2dCQUFFUyxNQUFNO2dCQUFHQyxNQUFNO1lBQUU7UUFDNUM7UUFFQVYsdUJBQXVCO1lBQ3JCUyxNQUFNUixTQUFTUSxJQUFJLElBQUk7WUFDdkJDLE1BQU1ULFNBQVNTLElBQUksSUFBSTtRQUN6QjtJQUNGO0lBRUEsTUFBTUMsZUFBZSxDQUFDUDtRQUNwQlEsUUFBUUMsR0FBRyxDQUFDVCxNQUFNVSxNQUFNLENBQUNDLElBQUk7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBS0MsVUFBVWY7Ozs7OzswQkFDaEIsOERBQUNnQjtnQkFDQ0MsTUFBSztnQkFDTEMsVUFBVVY7Z0JBQ1ZXLGFBQWFyQixTQUFTUSxJQUFJLENBQUNjLFFBQVE7Z0JBQ25DQyxPQUFPdkIsU0FBU1EsSUFBSTtnQkFDcEJnQixJQUFHO2dCQUNIVixNQUFLOzs7Ozs7MEJBRVAsOERBQUNJO2dCQUNDQyxNQUFLO2dCQUNMQyxVQUFVVjtnQkFDVlcsYUFBYXJCLFNBQVNTLElBQUksQ0FBQ2EsUUFBUTtnQkFDbkNDLE9BQU92QixTQUFTUyxJQUFJO2dCQUNwQmUsSUFBRztnQkFDSFYsTUFBSzs7Ozs7Ozs7Ozs7O0FBSWI7R0EzQ3dCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Jvd0NvbElucHV0LnRzeD81Zjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuXG50eXBlIFJvd0NvbElucHV0UHJvcHMgPSB7XG4gIGRpbWVuc2lvbnM6IHtcbiAgICBjb2w6IG51bWJlcjtcbiAgICByb3c6IG51bWJlcjtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXREaW1lbnNpb25zOiAoZGltZW5zaW9uczogRGltZW5zaW9ucykgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvd0NvbElucHV0KHByb3BzOiBSb3dDb2xJbnB1dFByb3BzKSB7XG4gIGNvbnN0IHsgZGltZW5zaW9ucywgaGFuZGxlU3VibWl0RGltZW5zaW9ucyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShkaW1lbnNpb25zKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghTnVtYmVyKGZvcm1EYXRhLnJvdykgfHwgIU51bWJlcihmb3JtRGF0YS5jb2wpKSB7XG4gICAgICBoYW5kbGVTdWJtaXREaW1lbnNpb25zKHsgcm93czogMSwgY29sczogMSB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXREaW1lbnNpb25zKHtcbiAgICAgIHJvd3M6IGZvcm1EYXRhLnJvd3MgfHwgMSxcbiAgICAgIGNvbHM6IGZvcm1EYXRhLmNvbHMgfHwgMSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PjwvZm9ybT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtmb3JtRGF0YS5yb3dzLnRvU3RyaW5nKCl9XG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YS5yb3dzfVxuICAgICAgICBpZD1cInJvd3NcIlxuICAgICAgICBuYW1lPVwicm93c1wiXG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e2Zvcm1EYXRhLmNvbHMudG9TdHJpbmcoKX1cbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbHN9XG4gICAgICAgIGlkPVwiY29sc1wiXG4gICAgICAgIG5hbWU9XCJjb2xzXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSb3dDb2xJbnB1dCIsInByb3BzIiwiZGltZW5zaW9ucyIsImhhbmRsZVN1Ym1pdERpbWVuc2lvbnMiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIk51bWJlciIsInJvdyIsImNvbCIsInJvd3MiLCJjb2xzIiwiaGFuZGxlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm5hbWUiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidG9TdHJpbmciLCJ2YWx1ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/RowColInput.tsx\n"));

/***/ })

});