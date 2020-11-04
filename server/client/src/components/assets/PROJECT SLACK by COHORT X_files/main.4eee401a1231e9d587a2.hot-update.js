webpackHotUpdate("main",{

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_assets_c_customer_510_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/assets/c-customer-510.jpg */ "./src/components/assets/c-customer-510.jpg");
/* harmony import */ var _components_assets_c_customer_510_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_assets_c_customer_510_jpg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/aissafeldmann/code/PS_GroupProject/slack-project/server/client/src/components/Login.js";







class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.submitLoginButton = event => {
      console.log(document.getElementById("name-entry").value);
      console.log("props", this.props);
      setTimeout(() => {
        this.props.setCurrentUser(document.getElementById("name-entry").value);
      }, 500);
      setTimeout(() => {
        //insert delay or promise here?
        this.props.history.push("/");
      }, 1000);
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      fluid: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      md: "auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, "PROJECT SLACK by COHORT X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, "Enter your name to join:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
      className: "login-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
      id: "name-entry",
      placeholder: "Your name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "outline-dark",
      onClick: this.submitLoginButton,
      className: "float-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      src: _components_assets_c_customer_510_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
      className: "d-block mx-auto img-fluid w-90",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }))));
  }

} // onKeyUp={this.submitLogin}
// function mapStateToProps(state) {
//   return { loggedInUser: state.loggedinUser };
// }


function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    setCurrentUser: _actions_index__WEBPACK_IMPORTED_MODULE_3__["setCurrentUser"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Login));

/***/ })

})
//# sourceMappingURL=main.4eee401a1231e9d587a2.hot-update.js.map