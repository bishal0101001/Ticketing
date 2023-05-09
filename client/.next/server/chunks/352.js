"use strict";
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 5352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ url , method , body , onSuccess  })=>{
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const doRequest = async ()=>{
        try {
            setErrors(null);
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"][method](url, body);
            if (onSuccess) {
                onSuccess(response.data);
            }
            return response.data;
        } catch (err) {
            setErrors(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "alert alert-danger",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: err?.response?.data?.errors?.map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: e.message
                        }, e.message))
                })
            }));
        }
    };
    return {
        doRequest,
        errors
    };
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;