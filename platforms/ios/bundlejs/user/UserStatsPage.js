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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserStatsPage = __webpack_require__(82);

var _UserStatsPage2 = _interopRequireDefault(_UserStatsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UserStatsPage2.default.el = '#root';
new Vue(_UserStatsPage2.default);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(83)
)

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(85)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/UserStatsPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-65809e10"
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

/***/ 83:
/***/ (function(module, exports) {

module.exports = {
  "wrapper-bg": {
    "position": "absolute",
    "display": "flex",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
  "wrapper-bg-top": {
    "flex": 3,
    "backgroundColor": "#EC2079"
  },
  "wrapper-bg-bottom": {
    "flex": 1,
    "backgroundColor": "#57B1E3"
  },
  "header": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "82",
    "height": "120"
  },
  "icon-chart": {
    "width": "20",
    "height": "40",
    "marginLeft": "38"
  },
  "header-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "marginLeft": "233.8"
  },
  "slider": {
    "position": "relative",
    "display": "flex",
    "height": "700",
    "flex": 2,
    "alignItems": "stretch",
    "alignContent": "stretch",
    "marginTop": "89"
  },
  "slider-frame": {
    "flex": 2
  },
  "stats-title": {
    "width": "700",
    "fontSize": "32",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "show-line-chart": {
    "width": "738",
    "height": "576",
    "marginLeft": "-20"
  },
  "indicator": {
    "position": "absolute",
    "top": "620",
    "left": 0,
    "itemColor": "#cccccc",
    "itemSelectedColor": "#ffffff",
    "itemSize": "50",
    "width": "750",
    "height": "75"
  },
  "stats-details": {
    "paddingLeft": "38",
    "marginTop": "140"
  },
  "details-description": {
    "paddingRight": "64",
    "fontSize": "34",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 84:
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

exports.default = {
    name: "UserStatsPage"
};

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["header"]
  }, [_c('image', {
    staticClass: ["icon-chart"],
    attrs: {
      "src": "/src/images/arrow_back_while.png"
    },
    on: {
      "click": _vm.onBackClick
    }
  }), _c('text', {
    staticClass: ["header-title"]
  }, [_vm._v("STATS")])]), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper-bg"]
  }, [_c('div', {
    staticClass: ["wrapper-bg-top"]
  }), _c('div', {
    staticClass: ["wrapper-bg-bottom"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('slider', {
    staticClass: ["slider"]
  }, [_c('indicator', {
    staticClass: ["indicator"]
  }), _c('div', {
    staticClass: ["slider-frame"]
  }, [_c('text', {
    staticClass: ["stats-title"]
  }, [_vm._v("Number of events you attended")]), _c('div', {
    staticClass: ["line-chart"]
  }, [_c('image', {
    staticClass: ["show-line-chart"],
    attrs: {
      "src": "/src/images/line-chart.png"
    }
  })]), _c('div', {
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
    staticClass: ["header-operation"]
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
      "src": ""
    }
  }), _c('div', {
    staticClass: ["event-item-label-area"]
  }, [_c('text', {
    staticClass: ["event-item-label"]
  }, [_vm._v("#Drawing")]), _c('text', {
    staticClass: ["event-item-label"]
  }, [_vm._v("#Painting")]), _c('text', {
    staticClass: ["event-item-label"]
  }, [_vm._v("#Relax")])]), _c('text', {
    staticClass: ["event-item-title"]
  }, [_vm._v("Draw Something")]), _c('text', {
    staticClass: ["event-item-date"]
  }, [_vm._v("Wed, Dec 11, 2018")])]), _c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-item-image"],
    attrs: {
      "src": ""
    }
  }), _c('div', {
    staticClass: ["event-item-label-area"]
  }, [_c('text', {
    staticClass: ["event-item-label"]
  }, [_vm._v("#Running")]), _c('text', {
    staticClass: ["event-item-label"]
  }, [_vm._v("#Sport")])]), _c('text', {
    staticClass: ["event-item-title"]
  }, [_vm._v("RUN!!!!")]), _c('text', {
    staticClass: ["event-item-date"]
  }, [_vm._v("Wed, Dec 11, 2018")])])])])])])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });