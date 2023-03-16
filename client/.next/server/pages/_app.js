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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./redux/reducers/moviesSilice.tsx":
/*!*****************************************!*\
  !*** ./redux/reducers/moviesSilice.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getAllPopulars\": () => (/* binding */ getAllPopulars),\n/* harmony export */   \"moviesSlice\": () => (/* binding */ moviesSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst moviesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"movies\",\n    initialState: {\n        moviesList: []\n    },\n    reducers: {\n        getAllPopulars: (state, action)=>{\n            state.moviesList = action.payload;\n        }\n    }\n});\nconst { getAllPopulars  } = moviesSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9tb3ZpZXNTaWxpY2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBRXhDLE1BQU1DLGNBQWNELDZEQUFXQSxDQUFDO0lBQ3JDRSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsWUFBWSxFQUFFO0lBQ2hCO0lBQ0FDLFVBQVU7UUFDUkMsZ0JBQWdCLENBQUNDLE9BQU9DLFNBQVc7WUFDakNELE1BQU1ILFVBQVUsR0FBR0ksT0FBT0MsT0FBTztRQUNuQztJQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRUgsZUFBYyxFQUFFLEdBQUdMLFlBQVlTLE9BQU8sQ0FBQztBQUV0RCxpRUFBZVQsWUFBWVUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcmVkdXgvcmVkdWNlcnMvbW92aWVzU2lsaWNlLnRzeD8xYzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtb3ZpZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIm1vdmllc1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgbW92aWVzTGlzdDogW10sXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgZ2V0QWxsUG9wdWxhcnM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLm1vdmllc0xpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBnZXRBbGxQb3B1bGFycyB9ID0gbW92aWVzU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vdmllc1NsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIm1vdmllc1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsIm1vdmllc0xpc3QiLCJyZWR1Y2VycyIsImdldEFsbFBvcHVsYXJzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/moviesSilice.tsx\n");

/***/ }),

/***/ "./redux/store/store.tsx":
/*!*******************************!*\
  !*** ./redux/store/store.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reducers_moviesSilice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/moviesSilice */ \"./redux/reducers/moviesSilice.tsx\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nconst persistConfig = {\n    key: \"root\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default()),\n    blacklist: []\n};\nconst reducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n    movies: _reducers_moviesSilice__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(persistConfig, reducer);\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n    reducer: persistedReducer,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: {\n                ignoredActions: [\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.REHYDRATE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.PERSIST,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.REGISTER\n                ]\n            }\n        }),\n    devTools: \"development\" !== \"production\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS9zdG9yZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0k7QUFDSDtBQUNBO0FBQ0k7QUFLN0I7QUFDdEIsTUFBTVEsZ0JBQWdCO0lBQ2xCQyxLQUFLO0lBQ0xQLE9BQU9BLG9FQUFBQTtJQUNQUSxXQUFXLEVBQUU7QUFDakI7QUFFQSxNQUFNQyxVQUFVUCxpRUFBZUEsQ0FBQztJQUNoQ0osTUFBTUEsZ0VBQUFBO0FBQ047QUFFQSxNQUFNWSxtQkFBbUJULDZEQUFjQSxDQUFDSyxlQUFlRztBQUVoRCxNQUFNRSxRQUFRWixnRUFBY0EsQ0FBQztJQUNoQ1UsU0FBU0M7SUFDVEUsWUFBWSxDQUFDQyx1QkFDVEEscUJBQXFCO1lBQ2pCQyxtQkFBbUI7Z0JBQ2ZDLGdCQUFnQjtvQkFBQ1gsb0RBQVNBO29CQUFFRCxrREFBT0E7b0JBQUVFLG1EQUFRQTtpQkFBQztZQUNsRDtRQUNKO0lBQ0pXLFVBQVVDLGtCQUF5QjtBQUN2QyxHQUFHO0FBRUgsaUVBQWVOLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9yZWR1eC9zdG9yZS9zdG9yZS50c3g/OTY3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW92aWVzIGZyb20gJy4uL3JlZHVjZXJzL21vdmllc1NpbGljZSc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIlxyXG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBQRVJTSVNULFxyXG4gICAgUkVIWURSQVRFLFxyXG4gICAgUkVHSVNURVIsXHJcbn0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleTogXCJyb290XCIsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgYmxhY2tsaXN0OiBbXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxubW92aWVzXHJcbn0pXHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcilcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICAgICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xyXG4gICAgICAgICAgICBzZXJpYWxpemFibGVDaGVjazoge1xyXG4gICAgICAgICAgICAgICAgaWdub3JlZEFjdGlvbnM6IFtSRUhZRFJBVEUsIFBFUlNJU1QsIFJFR0lTVEVSXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIGRldlRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXSwibmFtZXMiOlsibW92aWVzIiwiY29uZmlndXJlU3RvcmUiLCJzdG9yYWdlIiwicGVyc2lzdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJQRVJTSVNUIiwiUkVIWURSQVRFIiwiUkVHSVNURVIiLCJwZXJzaXN0Q29uZmlnIiwia2V5IiwiYmxhY2tsaXN0IiwicmVkdWNlciIsInBlcnNpc3RlZFJlZHVjZXIiLCJzdG9yZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwiaWdub3JlZEFjdGlvbnMiLCJkZXZUb29scyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store/store.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store/store */ \"./redux/store/store.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PC\\\\OneDrive\\\\Escritorio\\\\coders-project\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\OneDrive\\\\Escritorio\\\\coders-project\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDUztBQU1oRCxTQUFTRyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFjLEVBQWU7SUFDaEUscUJBQ0UsOERBQUNKLGlEQUFRQTtRQUFDQyxPQUFPQSxxREFBS0E7a0JBQ3BCLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZS9zdG9yZSc7XHJcbnR5cGUgTXlBcHBQcm9wcyA9IHtcclxuICBDb21wb25lbnQ6IFJlYWN0LkVsZW1lbnRUeXBlO1xyXG4gIHBhZ2VQcm9wczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbn07XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IE15QXBwUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();