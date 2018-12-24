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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserAboutPage = __webpack_require__(29);

var _UserAboutPage2 = _interopRequireDefault(_UserAboutPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UserAboutPage2.default.el = '#root';
new Vue(_UserAboutPage2.default);

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(30)
)

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(32)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/OpenInvite-APP/src/user/UserAboutPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2a9b41e6"
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

/***/ 30:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 31:
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


exports.default = {
    name: "UserAboutPage"
};

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('image', {
    staticClass: ["icon-chart"],
    attrs: {
      "src": ""
    }
  }), _c('text', {
    staticClass: ["header-title"]
  }, [_vm._v("Stephanie Mak")])]), _c('div', {
    staticClass: ["basic-info"]
  }, [_c('div', {
    staticClass: ["picture-left"]
  }, [_c('image', {
    staticClass: ["picture"]
  })]), _c('div', {
    staticClass: ["basic-info-right"]
  }, [_c('text', {
    staticClass: ["name-info"]
  }, [_vm._v("Stephanie Mak")]), _c('text', {
    staticClass: ["company-info"]
  }, [_vm._v("Sss Company")]), _c('text', {
    staticClass: ["company-role-info"]
  }, [_vm._v("Manage")]), _c('text', {
    staticClass: ["edit-button"]
  }, [_vm._v("Edit Profile")])])]), _c('div', {
    staticClass: ["details-area"]
  }, [_c('div', {
    staticClass: ["details-operation-area"]
  }, [_c('text', [_vm._v("About")]), _c('text', [_vm._v("Your Events")])]), _c('div', {
    staticClass: ["about-details-introduction"]
  }, [_c('div', {
    staticClass: ["about-area"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("About Myself:")]), _c('text', {
    staticClass: ["introduction"]
  }, [_vm._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.")])]), _c('div', {
    staticClass: ["hobbies-area"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Hobbies:")]), _c('div', {
    staticClass: ["hobbies"]
  }, [_c('text', [_vm._v("#Snooker")]), _c('text', [_vm._v("#Coffee")]), _c('text', [_vm._v("#Movie")]), _c('text', [_vm._v("#Netflix")])])]), _c('div', {
    staticClass: ["social-area"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Social Media:")]), _c('div', {
    staticClass: ["socials"]
  }, [_c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": ""
    }
  }), _c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": ""
    }
  }), _c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": ""
    }
  }), _c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": ""
    }
  })])])]), _c('div', {
    staticClass: ["event-details-introduction"]
  }, [_c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-image"],
    attrs: {
      "src": ""
    }
  }), _c('div', {
    staticClass: ["event-hobbies"]
  }, [_c('text', [_vm._v("#Snooker")]), _c('text', [_vm._v("#Sport")])]), _c('text', {
    staticClass: ["event-title"]
  }, [_vm._v("Happy Snooker Day")]), _c('text', {
    staticClass: ["event-date"]
  }, [_vm._v("Wed,Dec 11, 2018")]), _c('text', {
    staticClass: ["event-time"]
  }, [_vm._v("3:00pm - 5:00pm")]), _c('text', {
    staticClass: ["event-status"]
  }, [_vm._v("Status : Waiting For Participants To Join ")])]), _c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-image"],
    attrs: {
      "src": ""
    }
  }), _c('div', {
    staticClass: ["event-hobbies"]
  }, [_c('text', [_vm._v("#Cooking")])]), _c('text', {
    staticClass: ["event-title"]
  }, [_vm._v("Make a cake")]), _c('text', {
    staticClass: ["event-status"]
  }, [_vm._v("Status : Provide your availability  ")])]), _c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-image"],
    attrs: {
      "src": ""
    }
  }), _c('div', {
    staticClass: ["event-hobbies"]
  }, [_c('text', [_vm._v("#Wine")]), _c('text', [_vm._v("#Beverage")])]), _c('text', {
    staticClass: ["event-title"]
  }, [_vm._v("Wine Tasting")]), _c('text', {
    staticClass: ["event-date"]
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["event-time"]
  }, [_vm._v("3:00pm - 5:00pm")]), _c('text', {
    staticClass: ["event-status"]
  }, [_vm._v("Status : Confirmed ")])])])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });