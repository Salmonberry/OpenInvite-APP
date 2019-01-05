// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 154);
/******/ })
/************************************************************************/
/******/ ({

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _LoginPage = __webpack_require__(41);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_LoginPage2.default.el = '#root';
new Vue(_LoginPage2.default);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(42)
)

/* script */
__vue_exports__ = __webpack_require__(43)

/* template */
var __vue_template__ = __webpack_require__(44)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/security/login/LoginPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-443e9edc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = {
  "test": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
  "logo-cell": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "marginTop": "144"
  },
  "logo": {
    "width": "572",
    "height": "144"
  },
  "input-area": {
    "display": "flex",
    "alignItems": "center",
    "marginTop": "104"
  },
  "input-cell": {
    "marginTop": "28"
  },
  "input-text": {
    "color": "#707070",
    "marginBottom": "12"
  },
  "forgot-password-cell": {
    "marginLeft": "440",
    "marginTop": "38"
  },
  "forgot-password-text": {
    "fontSize": "30",
    "color": "#707070"
  },
  "operation-area": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": "58",
    "height": "270",
    "fontSize": "42"
  },
  "operation-button": {
    "borderRadius": "44"
  },
  "operation-text": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "height": "86",
    "lineHeight": "86",
    "fontSize": "42",
    "color": "#ffffff"
  },
  "operation-login-text": {
    "marginLeft": "252"
  },
  "operation-register-text": {
    "marginLeft": "100"
  },
  "operation-login": {
    "width": "630",
    "backgroundColor": "#EC2079"
  },
  "operation-register": {
    "width": "402",
    "backgroundColor": "#57B1E3"
  },
  "or-text": {
    "color": "#707070",
    "fontSize": "30"
  },
  "input": {
    "width": "630",
    "height": "86",
    "backgroundColor": "#F2F2F2",
    "borderRadius": "44",
    "marginTop": "40"
  },
  "login-way-area": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-around",
    "marginTop": "150.4",
    "marginBottom": "134"
  },
  "login-way": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "google-login-icon": {
    "width": "112",
    "height": "112",
    "marginRight": "40"
  },
  "facebook-login-icon": {
    "width": "84",
    "height": "84",
    "marginRight": "40"
  },
  "login-way-text": {
    "color": "#707070",
    "fontSize": "30"
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var swifter = weex.requireModule('swifter');

exports.default = {
    name: "user-entry",
    methods: {
        login: function login() {
            swifter.openMainPage();
        },
        register: function register() {
            swifter.openBluePage('security/register/RegisterPage.js');
        }
    }
};

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _c('div', {
    staticClass: ["operation-area"]
  }, [_c('a', {
    staticClass: ["operation-button", "operation-login"],
    on: {
      "click": _vm.login
    }
  }, [_c('text', {
    staticClass: ["operation-text", "operation-login-text"]
  }, [_vm._v("LOGIN")])]), _c('text', {
    staticClass: ["or-text"]
  }, [_vm._v("Or")]), _c('a', {
    staticClass: ["operation-button", "operation-register"],
    on: {
      "click": _vm.register
    }
  }, [_c('text', {
    staticClass: ["operation-text", "operation-register-text"]
  }, [_vm._v("REGISTER")])])]), _vm._m(3)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["logo-cell"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": "local:///logo.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-area"]
  }, [_c('div', {
    staticClass: ["input-cell"]
  }, [_c('text', {
    staticClass: ["input-text"]
  }, [_vm._v("Email or Phone")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text"
    }
  })]), _c('div', {
    staticClass: ["input-cell"]
  }, [_c('text', {
    staticClass: ["input-text"]
  }, [_vm._v("Password")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["forgot-password-cell"]
  }, [_c('text', {
    staticClass: ["forgot-password-text"]
  }, [_vm._v("Forgot Password")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["login-way-area"]
  }, [_c('div', {
    staticClass: ["login-way"],
    staticStyle: {
      marginLeft: "172.38px"
    }
  }, [_c('image', {
    staticClass: ["google-login-icon"],
    attrs: {
      "src": "local:///icon_google.png"
    }
  }), _c('text', {
    staticClass: ["login-way-text"]
  }, [_vm._v("Login with Google")])]), _c('div', {
    staticClass: ["login-way"],
    staticStyle: {
      marginLeft: "188px",
      marginTop: "54.4px"
    }
  }, [_c('image', {
    staticClass: ["facebook-login-icon"],
    attrs: {
      "src": "local:///facebook.png"
    }
  }), _c('text', {
    staticClass: ["login-way-text"]
  }, [_vm._v("Login with Facebook")])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });