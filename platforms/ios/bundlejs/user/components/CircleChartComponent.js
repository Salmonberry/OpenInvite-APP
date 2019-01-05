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
/******/ 	return __webpack_require__(__webpack_require__.s = 172);
/******/ })
/************************************************************************/
/******/ ({

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CircleChartComponent = __webpack_require__(49);

var _CircleChartComponent2 = _interopRequireDefault(_CircleChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CircleChartComponent2.default.el = '#root';
new Vue(_CircleChartComponent2.default);

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(50)
)

/* script */
__vue_exports__ = __webpack_require__(51)

/* template */
var __vue_template__ = __webpack_require__(52)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/components/CircleChartComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-74ce4e3d"
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

/***/ 50:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#57B1E3"
  },
  "stats-details": {
    "paddingBottom": "272",
    "paddingLeft": "38"
  },
  "details-description": {
    "paddingRight": "64",
    "fontSize": "34",
    "color": "#ffffff"
  },
  "event-list": {
    "paddingTop": "42",
    "paddingBottom": "42",
    "paddingLeft": "40",
    "marginTop": "104",
    "backgroundColor": "#ffffff",
    "height": "580"
  },
  "event-header": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "668"
  },
  "event-header-title": {
    "fontSize": "30",
    "color": "#EC2079"
  },
  "header-operation": {
    "fontSize": "24"
  },
  "event-main-scroller": {
    "display": "flex",
    "flexDirection": "row",
    "flex": 2,
    "marginTop": "32",
    "height": "450"
  },
  "event-item": {
    "width": "554",
    "paddingTop": "48",
    "paddingLeft": "50",
    "paddingRight": "44",
    "paddingBottom": "50",
    "borderRadius": "36",
    "backgroundColor": "#ffffff",
    "marginRight": "26"
  },
  "event-item-top": {
    "display": "flex",
    "flexDirection": "row"
  },
  "event-item-top-user-picture": {
    "width": "120",
    "height": "120",
    "marginRight": "50"
  },
  "user-name": {
    "fontSize": "46",
    "color": "#696969"
  },
  "user-details": {
    "fontSize": "28",
    "color": "#EC2079"
  },
  "event-item-bottom": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "38",
    "borderColor": "#707070",
    "borderTopWidth": "1",
    "marginTop": "30"
  },
  "attender": {
    "width": "86",
    "height": "86"
  },
  "arrow": {
    "width": "50",
    "height": "26"
  }
}

/***/ }),

/***/ 51:
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


exports.default = {};

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["stats-details"]
  }, [_c('text', {
    staticClass: ["details-description"]
  }, [_vm._v("Knowing more different people who work in different industry can help you walk out from the comfort zone.")]), _c('scroller', {
    staticClass: ["event-main-scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["event-item"]
  }, [_c('div', {
    staticClass: ["event-item-top"]
  }, [_c('image', {
    staticClass: ["event-item-top-user-picture"],
    attrs: {
      "src": "/src/images/user_picture6.png"
    }
  }), _c('div', {
    staticClass: ["event-item-top-user-info"]
  }, [_c('text', {
    staticClass: ["user-name"]
  }, [_vm._v("Jason")]), _c('text', {
    staticClass: ["user-details"]
  }, [_vm._v("Education Industry")])])]), _c('div', {
    staticClass: ["event-item-bottom"]
  }, [_c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "/src/images/user_picture1.png"
    }
  }), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "/src/images/arrow_blue.png"
    }
  }), _c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "/src/images/user_picture5.png"
    }
  }), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "/src/images/arrow_blue.png"
    }
  }), _c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "/src/images/user_picture2.png"
    }
  })])]), _c('div', {
    staticClass: ["event-item"]
  }, [_c('div', {
    staticClass: ["event-item-top"]
  }, [_c('image', {
    staticClass: ["event-item-top-user-picture"],
    attrs: {
      "src": "/src/images/user_picture6.png"
    }
  }), _c('div', {
    staticClass: ["event-item-top-user-info"]
  }, [_c('text', {
    staticClass: ["user-name"]
  }, [_vm._v("Jason")]), _c('text', {
    staticClass: ["user-details"]
  }, [_vm._v("Education Industry")])])]), _c('div', {
    staticClass: ["event-item-bottom"]
  }, [_c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "/src/images/user_picture1.png"
    }
  }), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "/src/images/arrow_blue.png"
    }
  }), _c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "/src/images/user_picture5.png"
    }
  }), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "/src/images/arrow_blue.png"
    }
  }), _c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "/src/images/user_picture2.png"
    }
  })])])])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });