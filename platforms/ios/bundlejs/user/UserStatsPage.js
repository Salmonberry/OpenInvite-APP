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
/******/ 	return __webpack_require__(__webpack_require__.s = 231);
/******/ })
/************************************************************************/
/******/ ({

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserStatsPage = __webpack_require__(232);

var _UserStatsPage2 = _interopRequireDefault(_UserStatsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UserStatsPage2.default.el = '#root';
new Vue(_UserStatsPage2.default);

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(233)
)

/* script */
__vue_exports__ = __webpack_require__(234)

/* template */
var __vue_template__ = __webpack_require__(235)
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

/***/ 233:
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "flex": 2
  },
  "event-main-scroller": {
    "height": "800"
  },
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
  "stats-title": {
    "marginTop": "90",
    "width": "700",
    "fontSize": "32",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "show-balance-chart-area": {
    "marginTop": "220"
  },
  "show-line-chart": {
    "width": "738",
    "height": "576",
    "marginLeft": "-20"
  },
  "show-word-chart": {
    "marginLeft": "28"
  },
  "show-balance-chart": {
    "width": "750",
    "height": "388"
  },
  "show-mark-chart": {
    "width": "600",
    "height": "560",
    "marginLeft": "34"
  },
  "show-circle-chart": {
    "width": "658",
    "height": "590",
    "marginLeft": "22"
  },
  "show-bar-chart": {
    "width": "670",
    "height": "576",
    "marginLeft": "40"
  },
  "indicator": {
    "position": "absolute",
    "top": "620",
    "left": 0,
    "itemColor": "#cccccc",
    "itemSelectedColor": "#ffffff",
    "itemSize": "20",
    "width": "750",
    "height": "75"
  },
  "details-description": {
    "paddingRight": "64",
    "fontSize": "34",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CurveChartComponent = __webpack_require__(61);

var _CurveChartComponent2 = _interopRequireDefault(_CurveChartComponent);

var _WordChartComponent = __webpack_require__(69);

var _WordChartComponent2 = _interopRequireDefault(_WordChartComponent);

var _BalanceChartComponent = __webpack_require__(49);

var _BalanceChartComponent2 = _interopRequireDefault(_BalanceChartComponent);

var _MarkChartComponent = __webpack_require__(65);

var _MarkChartComponent2 = _interopRequireDefault(_MarkChartComponent);

var _CircleChartComponent = __webpack_require__(57);

var _CircleChartComponent2 = _interopRequireDefault(_CircleChartComponent);

var _BarChartComponent = __webpack_require__(53);

var _BarChartComponent2 = _interopRequireDefault(_BarChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');

exports.default = {
    data: function data() {
        return {
            title: ['Number of events you attended', 'Your favorite hashtags', 'Balancing Social VS Personal Time', 'Explore Events In New Neighborhoods', 'Meet people in other industries', 'Top contacts you met with this year'],
            currentChartDetails: 0
        };
    },


    components: {
        CurveChartComponent: _CurveChartComponent2.default,
        WordChartComponent: _WordChartComponent2.default,
        BalanceChartComponent: _BalanceChartComponent2.default,
        MarkChartComponent: _MarkChartComponent2.default,
        CircleChartComponent: _CircleChartComponent2.default,
        BarChartComponent: _BarChartComponent2.default
    },

    methods: {
        onSliderChange: function onSliderChange(event) {
            // modal.toast({message:event.index,duration:1})
            this.currentChartDetails = event.index;
        }
    }
};

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('lottie-animation', {
    staticStyle: {
      width: "500px",
      height: "500px"
    },
    attrs: {
      "animationName": "alwaysmeet"
    }
  }), _c('lottieAnimation', {
    staticStyle: {
      width: "500px",
      height: "500px"
    },
    attrs: {
      "animationName": "alwaysmeet"
    }
  }), _vm._m(0), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {}, [_c('text', {
    staticClass: ["stats-title"]
  }, [_vm._v(_vm._s(_vm.title[_vm.currentChartDetails]))]), _c('slider', {
    staticClass: ["slider"],
    staticStyle: {
      height: "780px",
      marginTop: "40px"
    },
    on: {
      "change": _vm.onSliderChange
    }
  }, [_c('indicator', {
    staticClass: ["indicator"]
  }), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6)]), (_vm.currentChartDetails == 0) ? _c('curve-chart-component') : _vm._e(), (_vm.currentChartDetails == 1) ? _c('word-chart-component') : _vm._e(), (_vm.currentChartDetails == 2) ? _c('balance-chart-component') : _vm._e(), (_vm.currentChartDetails == 3) ? _c('mark-chart-component') : _vm._e(), (_vm.currentChartDetails == 4) ? _c('circle-chart-component') : _vm._e(), (_vm.currentChartDetails == 5) ? _c('bar-chart-component') : _vm._e()], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper-bg"]
  }, [_c('div', {
    staticClass: ["wrapper-bg-top"]
  }), _c('div', {
    staticClass: ["wrapper-bg-bottom"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line-chart"]
  }, [_c('image', {
    staticClass: ["show-line-chart"],
    attrs: {
      "src": "local:///line_chart.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["show-balance-chart-area"]
  }, [_c('image', {
    staticClass: ["show-balance-chart"],
    attrs: {
      "src": "local:///word_image.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line-chart"]
  }, [_c('image', {
    staticClass: ["show-word-chart"],
    staticStyle: {
      width: "660px",
      height: "548px"
    },
    attrs: {
      "src": "local:///balance_image.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line-chart"]
  }, [_c('image', {
    staticClass: ["show-mark-chart"],
    attrs: {
      "src": "local:///mark_image.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line-chart"]
  }, [_c('image', {
    staticClass: ["show-circle-chart"],
    attrs: {
      "src": "local:///circle_chart.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line-chart"]
  }, [_c('image', {
    staticClass: ["show-bar-chart"],
    attrs: {
      "src": "local:///bar_chart.png"
    }
  })])
}]}
module.exports.render._withStripped = true

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

/***/ 50:
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

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(54)
)

/* script */
__vue_exports__ = __webpack_require__(55)

/* template */
var __vue_template__ = __webpack_require__(56)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/components/BarChartComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-22f730d8"
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

/***/ 54:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#57B1E3"
  },
  "stats-details": {
    "paddingLeft": "38",
    "paddingBottom": "272"
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
    "height": "300"
  },
  "event-item": {
    "display": "flex",
    "flexDirection": "row",
    "width": "554",
    "paddingTop": "48",
    "paddingLeft": "50",
    "paddingRight": "44",
    "paddingBottom": "50",
    "borderRadius": "36",
    "backgroundColor": "#ffffff",
    "marginRight": "26"
  },
  "event-item-user-picture": {
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
  "count-number-area": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "flex-end",
    "marginTop": "3"
  },
  "count-number": {
    "fontSize": "52",
    "color": "#EC2079"
  },
  "time-text": {
    "fontSize": "28",
    "color": "#EC2079",
    "marginBottom": "5"
  }
}

/***/ }),

/***/ 55:
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


exports.default = {};

/***/ }),

/***/ 56:
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
  }, [_vm._v("Time to date your friends who lost track for a while.")]), _c('scroller', {
    staticClass: ["event-main-scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-item-user-picture"],
    attrs: {
      "src": "local:///user_picture10.png"
    }
  }), _c('div', {
    staticClass: ["event-item-user-info"]
  }, [_c('text', {
    staticClass: ["user-name"]
  }, [_vm._v("Zoe Miah")]), _c('text', {
    staticClass: ["user-details"]
  }, [_vm._v("Number of meets")]), _c('div', {
    staticClass: ["count-number-area"]
  }, [_c('text', {
    staticClass: ["count-number"]
  }, [_vm._v("1")]), _c('text', {
    staticClass: ["time-text"]
  }, [_vm._v("Time")])])])]), _c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-item-user-picture"],
    attrs: {
      "src": "local:///user_picture28.png"
    }
  }), _c('div', {
    staticClass: ["event-item-user-info"]
  }, [_c('text', {
    staticClass: ["user-name"]
  }, [_vm._v("Zoe Miah")]), _c('text', {
    staticClass: ["user-details"]
  }, [_vm._v("Number of meets")]), _c('div', {
    staticClass: ["count-number-area"]
  }, [_c('text', {
    staticClass: ["count-number"]
  }, [_vm._v("1")]), _c('text', {
    staticClass: ["time-text"]
  }, [_vm._v("Time")])])])])])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(58)
)

/* script */
__vue_exports__ = __webpack_require__(59)

/* template */
var __vue_template__ = __webpack_require__(60)
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

/***/ 58:
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

/***/ 59:
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

/***/ 60:
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
  }, [_vm._v("Meeting people in different industries below can help expose you to an array of new experiences and get you outside your comfort zone.")]), _c('scroller', {
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
      "src": "local:///user_picture6.png"
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
      "src": "local:///user_picture1.png"
    }
  }), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "local:///arrow_blue.png"
    }
  }), _c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "local:///user_picture5.png"
    }
  }), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "local:///arrow_blue.png"
    }
  }), _c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "local:///user_picture2.png"
    }
  })])]), _c('div', {
    staticClass: ["event-item"]
  }, [_c('div', {
    staticClass: ["event-item-top"]
  }, [_c('image', {
    staticClass: ["event-item-top-user-picture"],
    attrs: {
      "src": "local:///user_picture6.png"
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
      "src": "local:///user_picture1.png"
    }
  }), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "local:///arrow_blue.png"
    }
  }), _c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "local:///user_picture5.png"
    }
  }), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "local:///arrow_blue.png"
    }
  }), _c('image', {
    staticClass: ["attender"],
    attrs: {
      "src": "local:///user_picture2.png"
    }
  })])])])])])
}]}
module.exports.render._withStripped = true

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

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(66)
)

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(68)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/components/MarkChartComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77df4f0c"
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

/***/ 66:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#57B1E3"
  },
  "stats-details": {
    "paddingBottom": "272"
  },
  "details-description": {
    "paddingRight": "64",
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
  },
  "event-user-name": {
    "marginTop": "8",
    "fontSize": "22",
    "color": "#EC2079"
  }
}

/***/ }),

/***/ 67:
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


exports.default = {};

/***/ }),

/***/ 68:
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
  }, [_vm._v("You spend 54% of your time in Manhattan. Check out cool events in other neighborhoods below.")]), _c('div', {
    staticClass: ["event-list"]
  }, [_c('div', {
    staticClass: ["event-header"]
  }, [_c('text', {
    staticClass: ["event-header-title"]
  }, [_vm._v("Explore new neighborhoods")]), _c('text', {
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
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["event-user-name"]
  }, [_vm._v("The Bronx")])]), _c('div', {
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
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["event-user-name"]
  }, [_vm._v("Brooklyn")])])])])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(70)
)

/* script */
__vue_exports__ = __webpack_require__(71)

/* template */
var __vue_template__ = __webpack_require__(72)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/components/WordChartComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-15fe6377"
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

/***/ 70:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#57B1E3"
  },
  "stats-details": {
    "paddingBottom": "90"
  },
  "details-description": {
    "paddingRight": "64",
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

/***/ 71:
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


exports.default = {};

/***/ }),

/***/ 72:
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
  }, [_vm._v("Check out fun events below with your favorite hashtags.")]), _c('div', {
    staticClass: ["event-list"],
    staticStyle: {
      marginTop: "104px",
      marginBottom: "44px"
    }
  }, [_c('div', {
    staticClass: ["event-header"]
  }, [_c('text', {
    staticClass: ["event-header-title"]
  }, [_vm._v("#Music")]), _c('text', {
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
      "src": "local:///event-image3.png"
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
      "src": "local:///event-image4.png"
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
  }, [_vm._v("Wed, Dec 11, 2018")])])])]), _c('div', {
    staticClass: ["event-list"]
  }, [_c('div', {
    staticClass: ["event-header"]
  }, [_c('text', {
    staticClass: ["event-header-title"]
  }, [_vm._v("#Party")]), _c('text', {
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
      "src": "local:///event-image5.png"
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
      "src": "local:///event-image6.png"
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