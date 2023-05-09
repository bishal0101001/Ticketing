"use strict";
(() => {
var exports = {};
exports.id = 42;
exports.ids = [42];
exports.modules = {

/***/ 3211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5352);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useRequest__WEBPACK_IMPORTED_MODULE_1__]);
_hooks_useRequest__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TicketShow = ({ ticket  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { doRequest , errors  } = (0,_hooks_useRequest__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        url: "/api/orders",
        method: "post",
        body: {
            ticketId: ticket.id
        },
        onSuccess: (order)=>router.push("/orders/[orderId]", `/orders/${order.id}`)
    });
    return ticket && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: ticket.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                children: [
                    "Price: ",
                    ticket.title
                ]
            }),
            errors,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn btn-primary",
                onClick: doRequest,
                children: "Purchase"
            })
        ]
    });
};
TicketShow.getInitialProps = async (context, client)=>{
    const { ticketId  } = context.query;
    const { data  } = await client.get(`/api/tickets/${ticketId}`);
    return {
        ticket: data
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketShow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [352], () => (__webpack_exec__(3211)));
module.exports = __webpack_exports__;

})();