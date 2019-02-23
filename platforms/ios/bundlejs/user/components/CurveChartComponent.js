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
/******/ 	return __webpack_require__(__webpack_require__.s = 219);
/******/ })
/************************************************************************/
/******/ ({

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CurveChartComponent = __webpack_require__(61);

var _CurveChartComponent2 = _interopRequireDefault(_CurveChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CurveChartComponent2.default.el = '#root';
new Vue(_CurveChartComponent2.default);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(62)
)

/* script */
__vue_exports__ = __webpack_require__(63)

/* template */
var __vue_template__ = __webpack_require__(64)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/components/CurveChartComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d287fa20"
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

/***/ 62:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#57B1E3"
  },
  "details-description": {
    "paddingRight": "48",
    "paddingLeft": "40",
    "fontSize": "34",
    "color": "#ffffff"
  },
  "font-color-blue": {
    "color": "#57B1E3"
  },
  "event-list": {
    "paddingTop": "42",
    "paddingBottom": "42",
    "paddingLeft": "40",
    "marginTop": "104",
    "backgroundColor": "#ffffff",
    "height": "554"
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
    "marginTop": "32"
  },
  "event-item": {
    "marginRight": "38"
  },
  "event-item-image": {
    "width": "416",
    "height": "254"
  },
  "event-item-label-area": {
    "display": "flex",
    "flexDirection": "row",
    "marginRight": "14",
    "marginTop": "14"
  },
  "event-item-title": {
    "marginTop": "10",
    "fontSize": "28"
  },
  "event-item-date": {
    "marginTop": "10",
    "fontSize": "22",
    "color": "#707070"
  }
}

/***/ }),

/***/ 63:
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


exports.default = {};

/***/ }),

/***/ 64:
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
  }, [_vm._v("This month you attended less events. If you’re looking for fun new events, check out what’s trending below.")]), _c('div', {
    staticClass: ["event-list"]
  }, [_c('div', {
    staticClass: ["event-header"]
  }, [_c('text', {
    staticClass: ["event-header-title"]
  }, [_vm._v("What's Hot")]), _c('text', {
    staticClass: ["header-operation", "font-color-blue"]
  }, [_vm._v("See more")])]), _c('scroller', {
    staticClass: ["event-main-scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-item-image"],
    attrs: {
      "src": "local:///event_picture5.png"
    }
  }), _c('div', {
    staticClass: ["event-item-label-area"]
  }, [_c('text', {
    staticClass: ["event-item-label", "font-color-blue"]
  }, [_vm._v("#Drawing")]), _c('text', {
    staticClass: ["event-item-label", "font-color-blue"]
  }, [_vm._v("#Painting")]), _c('text', {
    staticClass: ["event-item-label", "font-color-blue"]
  }, [_vm._v("#Relax")])]), _c('text', {
    staticClass: ["event-item-title"]
  }, [_vm._v("Draw Something")]), _c('text', {
    staticClass: ["event-item-date"]
  }, [_vm._v("Wed, Dec 11, 2018")])]), _c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-item-image"],
    attrs: {
      "src": "local:///event_picture6.png"
    }
  }), _c('div', {
    staticClass: ["event-item-label-area"]
  }, [_c('text', {
    staticClass: ["event-item-label", "font-color-blue"]
  }, [_vm._v("#Running")]), _c('text', {
    staticClass: ["event-item-label", "font-color-blue"]
  }, [_vm._v("#Sport")])]), _c('text', {
    staticClass: ["event-item-title"]
  }, [_vm._v("RUN!!!!")]), _c('text', {
    staticClass: ["event-item-date"]
  }, [_vm._v("Wed, Dec 11, 2018")])])])])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });