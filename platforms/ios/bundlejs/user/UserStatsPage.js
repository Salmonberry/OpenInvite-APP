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
/******/ 	return __webpack_require__(__webpack_require__.s = 156);
/******/ })
/************************************************************************/
/******/ ({

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserStatsPage = __webpack_require__(157);

var _UserStatsPage2 = _interopRequireDefault(_UserStatsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UserStatsPage2.default.el = '#root';
new Vue(_UserStatsPage2.default);

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(158)
)

/* script */
__vue_exports__ = __webpack_require__(159)

/* template */
var __vue_template__ = __webpack_require__(160)
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

/***/ 158:
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
  "show-line-chart": {
    "width": "738",
    "height": "576",
    "marginLeft": "-20"
  },
  "show-word-chart": {
    "width": "600",
    "height": "560",
    "marginLeft": "28"
  },
  "indicator": {
    "position": "absolute",
    "top": "580",
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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CurveChartComponent = __webpack_require__(161);

var _CurveChartComponent2 = _interopRequireDefault(_CurveChartComponent);

var _WordChartComponent = __webpack_require__(165);

var _WordChartComponent2 = _interopRequireDefault(_WordChartComponent);

var _MarkChartComponent = __webpack_require__(169);

var _MarkChartComponent2 = _interopRequireDefault(_MarkChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            title: ['Number of events you attended', 'Your favorite hashtags', 'Explore Events In New Neighborhoods'],
            currentChartDetails: 0
        };
    },


    components: {
        CurveChartComponent: _CurveChartComponent2.default,
        WordChartComponent: _WordChartComponent2.default,
        MarkChartComponent: _MarkChartComponent2.default
    },

    methods: {
        onSliderChange: function onSliderChange(event) {
            // modal.toast({message:event.index,duration:1})
            this.currentChartDetails = event.index;
        }
    }
};

/***/ }),

/***/ 160:
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
  }, [_vm._v("STATS")])]), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {}, [_c('text', {
    staticClass: ["stats-title"]
  }, [_vm._v(_vm._s(_vm.title[_vm.currentChartDetails]))]), _c('slider', {
    staticClass: ["slider"],
    staticStyle: {
      height: "694px"
    },
    on: {
      "change": _vm.onSliderChange
    }
  }, [_c('indicator', {
    staticClass: ["indicator"]
  }), _vm._m(1), _vm._m(2), _vm._m(3)]), (_vm.currentChartDetails == 0) ? _c('curve-chart-component') : _vm._e(), (_vm.currentChartDetails == 1) ? _c('word-chart-component') : _vm._e(), (_vm.currentChartDetails == 2) ? _c('mark-chart-component') : _vm._e()], 1)])])
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
      "src": "/src/images/line_chart.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line-chart"]
  }, [_c('image', {
    staticClass: ["show-word-chart"],
    attrs: {
      "src": "/src/images/word_image.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["line-chart"]
  }, [_c('image', {
    staticClass: ["show-word-chart"],
    attrs: {
      "src": "/src/images/mark_image.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(162)
)

/* script */
__vue_exports__ = __webpack_require__(163)

/* template */
var __vue_template__ = __webpack_require__(164)
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

/***/ 162:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#57B1E3"
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

/***/ 163:
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

/***/ 164:
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
      "src": "/src/images/event_picture5.png"
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
      "src": "/src/images/event_picture6.png"
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

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(166)
)

/* script */
__vue_exports__ = __webpack_require__(167)

/* template */
var __vue_template__ = __webpack_require__(168)
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

/***/ 166:
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

/***/ 167:
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

/***/ 168:
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
      "src": "/src/images/event_picture5.png"
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
      "src": "/src/images/event_picture6.png"
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
      "src": "/src/images/event_picture5.png"
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
      "src": "/src/images/event_picture6.png"
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(170)
)

/* script */
__vue_exports__ = __webpack_require__(171)

/* template */
var __vue_template__ = __webpack_require__(172)
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

/***/ 170:
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

/***/ 171:
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

/***/ 172:
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
      "src": "/src/images/event_picture5.png"
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
      "src": "/src/images/event_picture6.png"
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

/***/ })

/******/ });