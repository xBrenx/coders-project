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
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./redux/actions/populars.tsx":
/*!************************************!*\
  !*** ./redux/actions/populars.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPopularMovies\": () => (/* binding */ getPopularMovies)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _reducers_moviesSilice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/moviesSilice */ \"./redux/reducers/moviesSilice.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getPopularMovies = ()=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:3001/list/populars\").then((res)=>res.data);\n            console.log(\"holi\");\n            dispatch((0,_reducers_moviesSilice__WEBPACK_IMPORTED_MODULE_1__.getAllPopulars)(response));\n        } catch (error) {\n            console.log(error);\n        }\n    };\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL3BvcHVsYXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFFZ0M7QUFFbkQsTUFBTUUsbUJBQW1CLElBQU0sT0FBT0MsV0FBMEI7UUFDckUsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUosaURBQVMsQ0FBQyx1Q0FDaENNLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtZQUNyQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1pQLFNBQVNGLHNFQUFjQSxDQUFDRztRQUMxQixFQUFFLE9BQU9PLE9BQU87WUFDZEYsUUFBUUMsR0FBRyxDQUFDQztRQUNkO0lBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3JlZHV4L2FjdGlvbnMvcG9wdWxhcnMudHN4PzA2MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHR5cGUgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRBbGxQb3B1bGFycyB9IGZyb20gJy4uL3JlZHVjZXJzL21vdmllc1NpbGljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9wdWxhck1vdmllcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbGlzdC9wb3B1bGFyc1wiKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgY29uc29sZS5sb2coXCJob2xpXCIpXHJcbiAgICBkaXNwYXRjaChnZXRBbGxQb3B1bGFycyhyZXNwb25zZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59OyJdLCJuYW1lcyI6WyJheGlvcyIsImdldEFsbFBvcHVsYXJzIiwiZ2V0UG9wdWxhck1vdmllcyIsImRpc3BhdGNoIiwicmVzcG9uc2UiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/populars.tsx\n");

/***/ }),

/***/ "./redux/reducers/moviesSilice.tsx":
/*!*****************************************!*\
  !*** ./redux/reducers/moviesSilice.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getAllPopulars\": () => (/* binding */ getAllPopulars),\n/* harmony export */   \"moviesSlice\": () => (/* binding */ moviesSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst moviesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"movies\",\n    initialState: {\n        moviesList: []\n    },\n    reducers: {\n        getAllPopulars: (state, action)=>{\n            state.moviesList = action.payload;\n        }\n    }\n});\nconst { getAllPopulars  } = moviesSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9tb3ZpZXNTaWxpY2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBRXhDLE1BQU1DLGNBQWNELDZEQUFXQSxDQUFDO0lBQ3JDRSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsWUFBWSxFQUFFO0lBQ2hCO0lBQ0FDLFVBQVU7UUFDUkMsZ0JBQWdCLENBQUNDLE9BQU9DLFNBQVc7WUFDakNELE1BQU1ILFVBQVUsR0FBR0ksT0FBT0MsT0FBTztRQUNuQztJQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRUgsZUFBYyxFQUFFLEdBQUdMLFlBQVlTLE9BQU8sQ0FBQztBQUV0RCxpRUFBZVQsWUFBWVUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcmVkdXgvcmVkdWNlcnMvbW92aWVzU2lsaWNlLnRzeD8xYzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtb3ZpZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIm1vdmllc1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgbW92aWVzTGlzdDogW10sXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgZ2V0QWxsUG9wdWxhcnM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLm1vdmllc0xpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBnZXRBbGxQb3B1bGFycyB9ID0gbW92aWVzU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vdmllc1NsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIm1vdmllc1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsIm1vdmllc0xpc3QiLCJyZWR1Y2VycyIsImdldEFsbFBvcHVsYXJzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/moviesSilice.tsx\n");

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_actions_populars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/actions/populars */ \"./redux/actions/populars.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_actions_populars__WEBPACK_IMPORTED_MODULE_2__]);\n_redux_actions_populars__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Home() {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"soy useEffect\");\n        dispatch((0,_redux_actions_populars__WEBPACK_IMPORTED_MODULE_2__.getPopularMovies)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"home\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Proyecto-coders\\\\client\\\\src\\\\pages\\\\home\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQzBCO0FBRXpCO0FBRTNCLFNBQVNJLE9BQU87SUFDN0IsTUFBTUMsV0FBWUYsd0RBQVdBO0lBRTdCRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RLLFFBQVFDLEdBQUcsQ0FBQztRQUNaRixTQUFTSCx5RUFBZ0JBO0lBQzNCLEdBQUc7UUFBQ0c7S0FBUztJQUViLHFCQUNFLDhEQUFDRztrQkFBSTs7Ozs7O0FBRVQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9ob21lL2luZGV4LnRzeD83NTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFBvcHVsYXJNb3ZpZXMgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3BvcHVsYXJzJztcclxuaW1wb3J0IHR5cGUgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSAgdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNveSB1c2VFZmZlY3RcIilcclxuICAgIGRpc3BhdGNoKGdldFBvcHVsYXJNb3ZpZXMoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PmhvbWU8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImdldFBvcHVsYXJNb3ZpZXMiLCJ1c2VEaXNwYXRjaCIsIkhvbWUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/index.tsx\n");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/home/index.tsx"));
module.exports = __webpack_exports__;

})();