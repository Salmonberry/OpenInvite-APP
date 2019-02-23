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
/******/ 	return __webpack_require__(__webpack_require__.s = 242);
/******/ })
/************************************************************************/
/******/ ({

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserMembershipPage = __webpack_require__(243);

var _UserMembershipPage2 = _interopRequireDefault(_UserMembershipPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UserMembershipPage2.default.el = '#root';
new Vue(_UserMembershipPage2.default);

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(244)
)

/* script */
__vue_exports__ = __webpack_require__(245)

/* template */
var __vue_template__ = __webpack_require__(246)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/UserMembershipPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f93a956a"
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

/***/ 244:
/***/ (function(module, exports) {

module.exports = {
  "UserMembershipPage": {
    "backgroundColor": "#EC2079"
  },
  "UserMembershipPage_content": {
    "marginTop": "25",
    "marginLeft": "20",
    "marginRight": "20"
  },
  "UserMembershipPage_content_box": {
    "height": "562",
    "marginBottom": "16",
    "borderRadius": "20",
    "backgroundColor": "#ffffff"
  },
  "UserMembershipPage_content_box_img": {
    "width": "710",
    "height": "460"
  },
  "UserMembershipPage_content_box_text": {
    "position": "absolute",
    "top": "90",
    "left": "30"
  },
  "UserMembershipPage_content_box_text_text": {
    "fontSize": "110",
    "color": "#B9B9B9"
  },
  "UserMembershipPage_content_box_text_text_title": {
    "marginBottom": "15",
    "color": "#575757",
    "fontSize": "65"
  },
  "UserMembershipPage_content_box_text_text_text": {
    "marginBottom": "15",
    "color": "#696969"
  },
  "gold": {
    "color": "#B8A653"
  }
}

/***/ }),

/***/ 245:
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

var swifter = weex.requireModule('swifter');
exports.default = {
    methods: {
        jpm: function jpm() {
            swifter.openTransparentPage('user/UserMembershipPricePage.js');
        }
    }
};

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["UserMembershipPage"]
  }, [_c('scroller', [_c('div', {
    staticClass: ["UserMembershipPage_content"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["UserMembershipPage_content_box"],
    on: {
      "click": _vm.jpm
    }
  }, [_c('image', {
    staticClass: ["UserMembershipPage_content_box_img"],
    attrs: {
      "src": "local:///gold_img.png"
    }
  }), _vm._m(1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["UserMembershipPage_content_box"]
  }, [_c('image', {
    staticClass: ["UserMembershipPage_content_box_img"],
    attrs: {
      "src": "local:///silver_img.png"
    }
  }), _c('div', {
    staticClass: ["UserMembershipPage_content_box_text"]
  }, [_c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text"]
  }, [_vm._v("Silver")]), _c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text_title"]
  }, [_vm._v("Membership ")]), _c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text_text"]
  }, [_vm._v("Silver Membership ")]), _c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text_text"]
  }, [_vm._v("Silver Membership ")]), _c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text_text"]
  }, [_vm._v("Silver Membership ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["UserMembershipPage_content_box_text"]
  }, [_c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text", "gold"]
  }, [_vm._v("Gold")]), _c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text_title"]
  }, [_vm._v("Membership ")]), _c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text_text"]
  }, [_vm._v("Silver Membership ")]), _c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text_text"]
  }, [_vm._v("Silver Membership ")]), _c('text', {
    staticClass: ["UserMembershipPage_content_box_text_text_text"]
  }, [_vm._v("Silver Membership ")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });