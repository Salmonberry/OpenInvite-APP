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
/******/ 	return __webpack_require__(__webpack_require__.s = 205);
/******/ })
/************************************************************************/
/******/ ({

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BalanceChartComponent = __webpack_require__(45);

var _BalanceChartComponent2 = _interopRequireDefault(_BalanceChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BalanceChartComponent2.default.el = '#root';
new Vue(_BalanceChartComponent2.default);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(46)
)

/* script */
__vue_exports__ = __webpack_require__(47)

/* template */
var __vue_template__ = __webpack_require__(48)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/components/BalanceChartComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ee7b35c6"
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

/***/ 46:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#57B1E3"
  },
  "stats-details": {
    "paddingBottom": "300"
  },
  "font-while-color": {
    "color": "#ffffff"
  },
  "details-description": {
    "paddingRight": "64",
    "paddingLeft": "40",
    "fontSize": "34",
    "color": "#ffffff"
  },
  "times-statistics-area": {
    "paddingTop": "52",
    "paddingRight": "160",
    "paddingLeft": "40",
    "paddingBottom": "70",
    "marginTop": "50",
    "borderColor": "#ffffff",
    "borderTopWidth": "1",
    "borderBottomWidth": "1"
  },
  "times-area": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "time-count": {
    "fontSize": "94"
  },
  "advice-area": {
    "paddingLeft": "40",
    "marginTop": "52"
  },
  "advice-area-text": {
    "fontSize": "28"
  }
}

/***/ }),

/***/ 47:
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


exports.default = {};

/***/ }),

/***/ 48:
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
  }, [_vm._v("This month you spent 68% of your time attending social events. Next month you may want to set aside more personal time.")]), _c('div', {
    staticClass: ["times-statistics-area"]
  }, [_c('div', {
    staticClass: ["times-area"]
  }, [_c('text', {
    staticClass: ["title-text", "font-while-color"]
  }, [_vm._v("Social")]), _c('text', {
    staticClass: ["time-count", "font-while-color"]
  }, [_vm._v("15hrs")])]), _c('div', {
    staticClass: ["times-area"],
    staticStyle: {
      marginTop: "66px"
    }
  }, [_c('text', {
    staticClass: ["title-text", "font-while-color"]
  }, [_vm._v("Personal Time")]), _c('text', {
    staticClass: ["time-count", "font-while-color"]
  }, [_vm._v("8hrs")])])]), _c('div', {
    staticClass: ["advice-area"]
  }, [_c('text', {
    staticClass: ["advice-area-text", "font-while-color"]
  }, [_vm._v("Advice : ")]), _c('text', {
    staticClass: ["advice-area-text", "font-while-color"]
  }, [_vm._v("Make more time for yourself next month.")])])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });