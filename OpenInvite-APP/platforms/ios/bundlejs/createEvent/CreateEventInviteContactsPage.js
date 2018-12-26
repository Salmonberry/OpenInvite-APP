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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CreateEventInviteContactsPage = __webpack_require__(28);

var _CreateEventInviteContactsPage2 = _interopRequireDefault(_CreateEventInviteContactsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CreateEventInviteContactsPage2.default.el = '#root';
new Vue(_CreateEventInviteContactsPage2.default);

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(31)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/OpenInvite-APP/src/createEvent/CreateEventInviteContactsPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4fa777cf"
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

/***/ 29:
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "82",
    "height": "122"
  },
  "icon-chart": {
    "width": "20",
    "height": "40",
    "marginLeft": "38"
  },
  "header-title": {
    "fontSize": "30",
    "color": "#242424",
    "marginLeft": "233.8"
  },
  "main": {
    "marginTop": "81.2",
    "paddingLeft": "38",
    "paddingRight": "40"
  },
  "create-event": {
    "paddingBottom": "17"
  },
  "create-title": {
    "fontSize": "50",
    "color": "#EC2079"
  },
  "suggest-area": {
    "marginTop": "56"
  },
  "event-item": {
    "paddingTop": "10.8",
    "paddingRight": "40",
    "paddingBottom": "10.8",
    "paddingLeft": "40",
    "backgroundColor": "#57B1E3",
    "borderRadius": "13",
    "marginRight": "22.2",
    "marginBottom": "24.8",
    "fontSize": "28",
    "color": "#ffffff"
  },
  "interest-area": {
    "display": "flex",
    "flexDirection": "row"
  }
}

/***/ }),

/***/ 30:
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

exports.default = {
    name: "CreateEventInviteContactsPage"
};

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('image', {
    staticClass: ["icon-chart"],
    attrs: {
      "src": "/src/images/arrow_back_gray.png"
    },
    on: {
      "click": _vm.onBackClick
    }
  }), _c('text', {
    staticClass: ["header-title"]
  }, [_vm._v("Create Event")])]), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["main"]
  }, [_c('div', {
    staticClass: ["create-event"]
  }, [_c('text', {
    staticClass: ["create-title"]
  }, [_vm._v("Name Of The Event")])]), _c('div', {
    staticClass: ["contact-operation-area"]
  }, [_c('text', {
    staticClass: ["suggest-operation"]
  }, [_vm._v("Suggest Contacts")]), _c('text', {
    staticClass: ["suggest-operation"]
  }, [_vm._v("All Contacts")])]), _c('div', {
    staticClass: ["suggest-area"]
  }, [_c('text', {
    staticClass: ["some-interest-text"]
  }, [_vm._v("They also have interest in")]), _c('div', {
    staticClass: ["interest-area"]
  }, [_c('text', {
    staticClass: ["event-item"]
  }, [_vm._v("#Snooker")])]), _c('div', {
    staticClass: ["suggest-contact-list"]
  }, [_c('div', {
    staticClass: ["suggest-contact"]
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": ""
    }
  }), _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("Kelvin")]), _c('text', {
    staticClass: ["called-number"]
  }, [_vm._v("1st contact")])]), _c('image', {
    staticClass: ["status"],
    attrs: {
      "src": ""
    }
  })]), _c('div', {
    staticClass: ["suggest-contact"]
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": ""
    }
  }), _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("John")]), _c('text', {
    staticClass: ["called-number"]
  }, [_vm._v("1st contact")])]), _c('image', {
    staticClass: ["status"],
    attrs: {
      "src": ""
    }
  })]), _c('div', {
    staticClass: ["suggest-contact"]
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": ""
    }
  }), _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("Kelvin")]), _c('text', {
    staticClass: ["called-number"]
  }, [_vm._v("2nd contact")])]), _c('image', {
    staticClass: ["status"],
    attrs: {
      "src": ""
    }
  })])])]), _c('div', {
    staticClass: ["buttom-operation-area"]
  }, [_c('text', {
    staticClass: ["invited-text"]
  }, [_vm._v("0 person invited")]), _c('image', {
    staticClass: ["arrow-forward"],
    attrs: {
      "src": ""
    }
  })])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });