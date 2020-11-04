(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/CSS/MessageScroll.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/CSS/MessageScroll.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n #boxed-in {\n    display: inline-block;\n    width: 750px;\n    height: auto;\n    margin-top: 1%;\n    border: 2px black solid;\n    overflow: hidden;\n}\n#chat-box {\n    height: 600px;\n    max-height: 800px;\n    overflow-y: scroll;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/CSS/MessageScroll.css":
/*!***********************************!*\
  !*** ./src/CSS/MessageScroll.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MessageScroll.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/CSS/MessageScroll.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MessageScroll.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/CSS/MessageScroll.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MessageScroll.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/CSS/MessageScroll.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: SET_CURRENT_USER, LOGOUT_USER, FETCH_CHANNELS, FETCH_CHANNEL_MESSAGES, CHANGE_CHANNEL, CREATE_DIRECT_CHAT, UPDATE_ONLINE_USERS_STATUS, FETCH_USERS, SEND_A_MESSAGE, SET_CHANNEL_ID, setCurrentUser, logoutUser, sendMessage, fetchChannels, fetchUsers, fetchChannelMessages, setChannelId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNELS", function() { return FETCH_CHANNELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_MESSAGES", function() { return FETCH_CHANNEL_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CHANNEL", function() { return CHANGE_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_DIRECT_CHAT", function() { return CREATE_DIRECT_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ONLINE_USERS_STATUS", function() { return UPDATE_ONLINE_USERS_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_A_MESSAGE", function() { return SEND_A_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHANNEL_ID", function() { return SET_CHANNEL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchChannels", function() { return fetchChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchChannelMessages", function() { return fetchChannelMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChannelId", function() { return setChannelId; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const SET_CURRENT_USER = "set_current_user";
const LOGOUT_USER = "logout_user";
const FETCH_CHANNELS = "fetch_channels";
const FETCH_CHANNEL_MESSAGES = "fetch_channel_messages";
const CHANGE_CHANNEL = "change_channel";
const CREATE_DIRECT_CHAT = "create_direct_chat";
const UPDATE_ONLINE_USERS_STATUS = "update_online_users_status";
const FETCH_USERS = "fetch_users";
const SEND_A_MESSAGE = "send_a_message";
const SET_CHANNEL_ID = "set_channel_id";
const ROOT_URL = 'http://localhost:5000/api'; // log in a user. get back an id and active status

function setCurrentUser(user) {
  const res = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${ROOT_URL}/login`, {
    username: user
  });
  console.log("received from server-login: ", res);
  return {
    type: SET_CURRENT_USER,
    payload: res
  };
} //

function logoutUser(theId) {
  console.log("about to logout user", theId);
  theId = theId.toString();
  const res = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${ROOT_URL}/logout`, {
    user_Id: theId
  });
  console.log("received from server-logout: ", res);
  return {
    type: LOGOUT_USER,
    payload: res
  };
} // post a new message

function sendMessage(user_Id, channel, message) {
  user_Id = user_Id.toString();
  channel = channel.toString();
  const res = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${ROOT_URL}/channels/${channel}/messages`, {
    user_Id: user_Id,
    content: message
  });
  console.log("received from server-send-message ", res);
  return {
    type: SEND_A_MESSAGE,
    payload: res
  };
} // fetch current channels

function fetchChannels() {
  const res = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ROOT_URL}/channels`);
  console.log("received from server-channels: ", res.data);
  return {
    type: FETCH_CHANNELS,
    payload: res
  };
}
function fetchUsers() {
  const res = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ROOT_URL}/users`);
  console.log("received from server-users: ", res.data);
  return {
    type: FETCH_USERS,
    payload: res
  };
}
function fetchChannelMessages(channel_Id) {
  console.log(`channel messages with: ${ROOT_URL}/channels/${channel_Id}/messages`);
  const res = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ROOT_URL}/channels/${channel_Id}/messages`);
  console.log("received from channel messages: ", res.data);
  return {
    type: FETCH_CHANNEL_MESSAGES,
    payload: res
  };
}
function setChannelId(channel_Id) {
  return {
    type: SET_CHANNEL_ID,
    payload: channel_Id
  };
} // junk drawer
// axios({
//   method: 'post',
//   url: `http://localhost:5000/api/login`,
//   data: {username: user}
// }).then(function (response) {
//   console.log('received from server-login: ', response.data)
//   return {
//     type: SET_CURRENT_USER,
//     payload: response.data
//   }
//   })
// .catch(function (error) {console.log(error);})
// }
// alternate request format
//for testing only. not for normal use.
// export function setCurrentUser(user) {
// return {
// type: SET_CURRENT_USER,
// payload: user
// }
// }

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideBar */ "./src/components/SideBar.js");
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MessageBox */ "./src/components/MessageBox.js");
/* harmony import */ var _ChannelTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChannelTitle */ "./src/components/ChannelTitle.js");
/* harmony import */ var _CSS_MessageScroll_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CSS/MessageScroll.css */ "./src/CSS/MessageScroll.css");
/* harmony import */ var _CSS_MessageScroll_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CSS_MessageScroll_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/aissafeldmann/code/PS_GroupProject/slack-project/server/client/src/components/App.js";
 // import { setState, useState, useRef, useEffect } from "react";
// import socketio from 'socket.io-client';















const server = "http://localhost:5000/";

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.logoutClicked = () => {
      console.log("logout button clicked for ", this.props.loggedInUser.user_Id);
      this.props.logoutUser(this.props.loggedInUser.user_Id);
      this.props.setCurrentUser(0);
      console.log("logout response is: ", this.props.logoutUserStatus);
      this.props.history.push("/login");
    };

    this.messageText = event => {
      // setState({...this.state, message: event.target.value});  // for to make button work// make regular var?
      if (event.key === "Enter") {
        // setState({...this.state, message: event.target.value});  // for to make button work // make regular var?
        this.props.sendMessage(this.props.loggedInUser.user_Id, this.props.currentChannelId, event.target.value);
        console.log("the send message return", this.props.sentMessage);
        this.props.fetchChannelMessages(this.props.currentChannelId); //TODO - add to chat
        // let name = {name : props.loggedInUser.name};
        // let message = {message : event.target.value };
        // setChat([...chat, {name, message}])

        event.target.value = "";
      }
    };

    this.refreshMessages = () => {
      this.props.fetchChannelMessages(this.props.currentChannelId);
    };
  }

  componentDidMount() {
    // const [state, setState] = useState({name: this.props.loggedInUser.name, message: ''})
    // const [chat, setChat] = useState([])
    if (this.props.loggedInUser.user_Id === 0) {
      console.log("yup, I actually went here");
      this.props.history.push("/login");
    } //fill the store //


    this.props.fetchChannels();
    this.props.fetchChannelMessages(this.props.currentChannelId);
    this.props.fetchUsers(); // console.log('after fetch avail channels: ', this.props.availableChannels);
    // console.log('after fetch online users: ', this.props.onlineUsers);
    // console.log('after fetch channel messages: ', this.props.channelMessages);

    console.log("App.js props are ", this.props);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      fluid: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      sm: 9,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "outline-dark",
      size: "sm",
      className: "float-right",
      onClick: this.logoutClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }, "Logout"), " ", this.props.loggedInUser.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "boxed-in",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChannelTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "chat-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message-composer",
      style: {
        background: "silver",
        height: "auto"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
      onKeyUp: this.messageText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
      name: "message",
      id: "messageId",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Append, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.refreshMessages,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, "Submit"))))))));
  }

}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    availableChannels: state.availableChannels,
    onlineUsers: state.onlineUsers,
    logoutUserStatus: state.logoutUserStatus,
    sentMessage: state.sentMessage,
    channelMessages: state.channelMessages,
    currentChannelId: state.currentChannelId
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    fetchChannels: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchChannels"],
    fetchUsers: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchUsers"],
    logoutUser: _actions__WEBPACK_IMPORTED_MODULE_2__["logoutUser"],
    sendMessage: _actions__WEBPACK_IMPORTED_MODULE_2__["sendMessage"],
    fetchChannelMessages: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchChannelMessages"],
    setChannelId: _actions__WEBPACK_IMPORTED_MODULE_2__["setChannelId"],
    setCurrentUser: _actions__WEBPACK_IMPORTED_MODULE_2__["setCurrentUser"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/components/ChannelTitle.js":
/*!****************************************!*\
  !*** ./src/components/ChannelTitle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var _jsxFileName = "/Users/aissafeldmann/code/PS_GroupProject/slack-project/server/client/src/components/ChannelTitle.js";




class ChannelTitle extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  // componentDidMount() {
  //     console.log('component should mount')
  //     this.props.fetchChannelMessages(this.props.currentChannelId);
  // }
  // renders all messages for a channel
  renderChannelTitle() {
    let aChnl = this.props.availableChannels.map(chnl => {
      if (chnl.channel_Id === this.props.currentChannelId) {
        console.log(`looking at ${chnl.channelName} with ${chnl.channel_Id}`);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 23
          }
        }, chnl.channelName);
      }
    });
    return aChnl;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "channel-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }));
  }

}

function mapStateToProps(state) {
  return {
    availableChannels: state.availableChannels,
    currentChannelId: state.currentChannelId
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ChannelTitle));

/***/ }),

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

/***/ }),

/***/ "./src/components/MessageBox.js":
/*!**************************************!*\
  !*** ./src/components/MessageBox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/aissafeldmann/code/PS_GroupProject/slack-project/server/client/src/components/MessageBox.js";






class MessageBox extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    console.log('component should mount');
    this.props.fetchChannelMessages(this.props.currentChannelId);
  } // renders all messages for a channel


  renderChannelMessages() {
    console.log('props are', this.props);
    let messages = this.props.channelMessages.map(message => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"].Item, {
        className: "color",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      }, message.username, ": ", message.content);
    });
    return messages;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chat-window",
      style: {
        background: 'snow',
        height: '90%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
      variant: "flush",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, this.renderChannelMessages()));
  }

}

function mapStateToProps(state) {
  return {
    channelMessages: state.channelMessages,
    currentChannelId: state.currentChannelId
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    fetchChannelMessages: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchChannelMessages"],
    setChannelId: _actions__WEBPACK_IMPORTED_MODULE_2__["setChannelId"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MessageBox));

/***/ }),

/***/ "./src/components/SideBar.js":
/*!***********************************!*\
  !*** ./src/components/SideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/aissafeldmann/code/PS_GroupProject/slack-project/server/client/src/components/SideBar.js";









class SideBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.changeChannel = event => {
      // console.log('changeChannel event:', event.target.getAttribute("data-channel_Id"))
      this.props.setChannelId(event.target.getAttribute("data-channel_Id"));
      this.props.fetchChannelMessages(this.props.currentChannelId);
    };
  }

  componentDidMount() {
    console.log('something should log');
    this.props.fetchChannels();
    this.props.fetchUsers();
  }

  //renders all channels
  renderChannelGroup() {
    let channels = this.props.availableChannels.map(channel => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"].Item, {
        action: true,
        key: channel.channel_Id,
        "data-channel_Id": channel.channel_Id,
        onClick: this.changeChannel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }, channel.channelName);
    });
    return channels;
  } // render all users 


  renderUserGroup() {
    let users = this.props.onlineUsers.map(user => {
      let theValue = 'connected';
      user.active ? theValue = 'logged-in' : theValue = 'logged-out';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"].Item, {
        value: theValue,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }, user.username);
    });
    return users;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "channels-list",
      style: {
        background: 'azure',
        height: 'auto'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
      variant: "flush",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"].Item, {
      variant: "success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 51
      }
    }, "Channels")), this.renderChannelGroup(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, "\xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "users-list",
      style: {
        height: 'auto'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
      variant: "flush",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"].Item, {
      variant: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 48
      }
    }, "Users")), this.renderUserGroup()))));
  }

}

function mapStateToProps(state) {
  return {
    availableChannels: state.availableChannels,
    onlineUsers: state.onlineUsers,
    currentChannelId: state.currentChannelId
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    fetchChannels: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchChannels"],
    fetchUsers: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchUsers"],
    setChannelId: _actions__WEBPACK_IMPORTED_MODULE_2__["setChannelId"],
    fetchChannelMessages: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchChannelMessages"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SideBar));

/***/ }),

/***/ "./src/components/assets/c-customer-510.jpg":
/*!**************************************************!*\
  !*** ./src/components/assets/c-customer-510.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/c-customer-510.df451139.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-promise */ "./node_modules/redux-promise/lib/index.js");
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Login */ "./src/components/Login.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/aissafeldmann/code/PS_GroupProject/slack-project/server/client/src/index.js";










const store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(redux_promise__WEBPACK_IMPORTED_MODULE_5___default.a)(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 1
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 1
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/",
  component: _components_App__WEBPACK_IMPORTED_MODULE_7__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/login",
  component: _components_Login__WEBPACK_IMPORTED_MODULE_8__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}))))), document.getElementById("root"));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer-user */ "./src/reducers/reducer-user.js");
/* harmony import */ var _reducer_fetch_channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer-fetch-channels */ "./src/reducers/reducer-fetch-channels.js");
/* harmony import */ var _reducer_fetch_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer-fetch-users */ "./src/reducers/reducer-fetch-users.js");
/* harmony import */ var _reducer_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer-logout */ "./src/reducers/reducer-logout.js");
/* harmony import */ var _reducer_send_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer-send-message */ "./src/reducers/reducer-send-message.js");
/* harmony import */ var _reducer_fetch_channel_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer-fetch-channel-messages */ "./src/reducers/reducer-fetch-channel-messages.js");
/* harmony import */ var _reducer_set_channel_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducer-set-channel-id */ "./src/reducers/reducer-set-channel-id.js");








const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  loggedInUser: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["default"],
  availableChannels: _reducer_fetch_channels__WEBPACK_IMPORTED_MODULE_2__["default"],
  onlineUsers: _reducer_fetch_users__WEBPACK_IMPORTED_MODULE_3__["default"],
  logoutUserStatus: _reducer_logout__WEBPACK_IMPORTED_MODULE_4__["default"],
  sentMessage: _reducer_send_message__WEBPACK_IMPORTED_MODULE_5__["default"],
  channelMessages: _reducer_fetch_channel_messages__WEBPACK_IMPORTED_MODULE_6__["default"],
  currentChannelId: _reducer_set_channel_id__WEBPACK_IMPORTED_MODULE_7__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/reducer-fetch-channel-messages.js":
/*!********************************************************!*\
  !*** ./src/reducers/reducer-fetch-channel-messages.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

const initialState = [];
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  console.log('in reducer-fetch-channel-messages');
  console.log('channel message action packet', action);

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CHANNEL_MESSAGES"]:
      console.log("fetch Channel Messages reducer has ", action.payload.data);
      return action.payload.data;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/reducer-fetch-channels.js":
/*!************************************************!*\
  !*** ./src/reducers/reducer-fetch-channels.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

const initialState = [];
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  console.log('in reducer-fetch-channels');

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_CHANNELS"]:
      console.log("fetchChannels reducer has ", action.payload.data); // return {channel_Id: action.payload.data.channel_Id,
      //   channelName: action.payload.data.channelName,
      //   firstUser_Id: action.payload.data.firstUser_Id,
      //   secondUser_Id: action.payload.data.secondUser_Id};

      return action.payload.data;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/reducer-fetch-users.js":
/*!*********************************************!*\
  !*** ./src/reducers/reducer-fetch-users.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

const initialState = [];
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  console.log('in reducer-fetch-users');

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS"]:
      console.log("fetchUsers reducer has ", action.payload.data); // TODO filter out un-active users

      return action.payload.data;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/reducer-logout.js":
/*!****************************************!*\
  !*** ./src/reducers/reducer-logout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

const initialState = {
  user_Id: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  console.log('in reducer-user');

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]:
      console.log("logoutUser reducer has ", action.payload.data);
      return action.payload.data;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/reducer-send-message.js":
/*!**********************************************!*\
  !*** ./src/reducers/reducer-send-message.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

const initialState = {
  message_Id: 0,
  channel_Id: 0,
  user_Id: 0,
  content: ''
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  // console.log('message reducer', action);
  // console.log('in reducer-send-message');
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SEND_A_MESSAGE"]:
      console.log("---> send message reducer has ", action.payload.data); // return {
      //   message_Id: action.payload.data.message_Id, 
      //   channel_Id: action.payload.data.channel_Id,
      //   user_Id: action.payload.data.user_Id, 
      //   content: action.payload.data.content}

      return action.payload.data;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/reducer-set-channel-id.js":
/*!************************************************!*\
  !*** ./src/reducers/reducer-set-channel-id.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

const initialState = 101;
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_CHANNEL_ID"]:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/reducer-user.js":
/*!**************************************!*\
  !*** ./src/reducers/reducer-user.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
 // const initialState = {name : 'Please Log In', user_Id: 0, active: 0};

/* harmony default export */ __webpack_exports__["default"] = (function (state = {}, action) {
  console.log('in reducer-user');

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"]:
      console.log("setCurrentUser reducer has ", action.payload.data);
      return {
        name: action.payload.data.username,
        user_Id: action.payload.data.user_Id,
        active: action.payload.data.active
      };

    default:
      return state;
  }
});

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/aissafeldmann/code/PS_GroupProject/slack-project/server/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/aissafeldmann/code/PS_GroupProject/slack-project/server/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/aissafeldmann/code/PS_GroupProject/slack-project/server/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map