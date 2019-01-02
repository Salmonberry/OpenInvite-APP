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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/components/BarComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3079d54c"
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "icon-area": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "backgroundColor": "#4D9CC7",
    "paddingTop": "27.2",
    "height": "155.6"
  },
  "icon-home": {
    "width": "50",
    "height": "43.36"
  },
  "icon-friends": {
    "width": "50",
    "height": "41"
  },
  "icon-calendar": {
    "width": "44",
    "height": "45"
  },
  "icon-me": {
    "width": "31.46",
    "height": "43.42"
  },
  "create-event-operation": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "129.32",
    "height": "129.32",
    "backgroundColor": "#EC2079",
    "borderRadius": 50,
    "marginTop": "-80"
  },
  "operation-icon": {
    "width": "41",
    "height": "41"
  }
}

/***/ }),
/* 2 */
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

exports.default = {
    name: "BarComponent"
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["icon-area"]
  }, [_c('a', {
    attrs: {
      "href": "../Home/HomeExplorePage.js"
    }
  }, [_c('image', {
    staticClass: ["icon", "icon-home"],
    attrs: {
      "src": "local:///icon_bar_home.png"
    }
  })]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('image', {
    staticClass: ["icon", "icon-friends"],
    attrs: {
      "src": "local:///icon_bar_friends.png"
    }
  })]), _c('div', {
    staticClass: ["create-event-operation"]
  }, [_c('a', {
    attrs: {
      "href": "../createEvent/CreateEventHomePage.js"
    }
  }, [_c('image', {
    staticClass: ["operation-icon"],
    attrs: {
      "src": "local:///icon_bar_add.png"
    }
  })])]), _c('a', {
    attrs: {
      "href": "../calendar/CalendarPage.js"
    }
  }, [_c('image', {
    staticClass: ["icon", "icon-calendar"],
    attrs: {
      "src": "local:///icon_bar_calendar.png"
    }
  })]), _c('a', {
    attrs: {
      "href": "../user/UserAboutPage.js"
    }
  }, [_c('image', {
    staticClass: ["icon", "icon-me"],
    attrs: {
      "src": "local:///icon_bar_me.png"
    }
  })])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CalendarDetailsPage = __webpack_require__(14);

var _CalendarDetailsPage2 = _interopRequireDefault(_CalendarDetailsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CalendarDetailsPage2.default.el = '#root';
new Vue(_CalendarDetailsPage2.default);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/calendar/CalendarDetailsPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-32fa52bb"
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
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "750",
    "height": "166",
    "backgroundColor": "#EC2079",
    "alignItems": "flex-end",
    "paddingBottom": "36"
  },
  "header-title": {
    "marginLeft": "296",
    "fontSize": "30",
    "color": "#ffffff"
  },
  "main": {
    "paddingLeft": "43",
    "paddingRight": "40",
    "paddingBottom": "230",
    "marginTop": "60"
  },
  "main-header": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "10",
    "justifyContent": "space-between",
    "width": "348"
  },
  "back-icon": {
    "width": "12",
    "height": "24"
  },
  "day-text": {
    "fontSize": "30",
    "color": "#57B1E3"
  },
  "date-text": {
    "fontSize": "30",
    "color": "#EC2079"
  },
  "process-area": {
    "marginTop": "60"
  },
  "process": {
    "width": "680",
    "height": "92"
  },
  "event-area": {
    "marginTop": "56"
  },
  "while-text": {
    "color": "#ffffff"
  },
  "event-item": {
    "position": "relative",
    "marginButtom": "50"
  },
  "event-info": {
    "position": "absolute",
    "left": "36",
    "bottom": "48"
  },
  "event-hour": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "width": "166",
    "height": "60",
    "borderRadius": "16",
    "backgroundColor": "#FF5D5D"
  },
  "clock-icon": {
    "width": "30",
    "height": "30"
  },
  "hour-text": {
    "fontSize": "28"
  },
  "text-info": {
    "display": "flex",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "height": "200",
    "marginTop": "16"
  },
  "event-title": {
    "fontSize": "34"
  },
  "small-font-size": {
    "fontSize": "30"
  },
  "event-bg": {
    "width": "664",
    "height": "796"
  },
  "user-area": {
    "display": "flex",
    "flexDirection": "row",
    "marginTop": "34"
  },
  "user-picture": {
    "width": "64",
    "height": "64",
    "marginRight": "10"
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BarComponent = __webpack_require__(0);

var _BarComponent2 = _interopRequireDefault(_BarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "CalendarDetailsPage",
    components: { barComponent: _BarComponent2.default },
    methods: {
        onBack: function onBack() {
            navigator.pop({ animated: "true" });
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["main"]
  }, [_c('div', {
    staticClass: ["main-header"],
    on: {
      "click": _vm.onBack
    }
  }, [_c('image', {
    staticClass: ["back-icon"],
    attrs: {
      "src": "local:///arrow_back_pink.png"
    }
  }), _c('text', {
    staticClass: ["day-text"]
  }, [_vm._v("Today")]), _c('text', {
    staticClass: ["date-text"]
  }, [_vm._v("Wed, Dec 11")])]), _vm._m(1), _vm._m(2)])]), _c('bar-component')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["header-title"]
  }, [_vm._v("CALENDAR")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["process-area"]
  }, [_c('image', {
    staticClass: ["process"],
    attrs: {
      "src": "local:///process_and_icon.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["event-area"]
  }, [_c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-bg"],
    attrs: {
      "src": "local:///event_background1.png"
    }
  }), _c('div', {
    staticClass: ["event-info"]
  }, [_c('div', {
    staticClass: ["event-hour"]
  }, [_c('image', {
    staticClass: ["clock-icon"],
    attrs: {
      "src": "local:///clock-circular-outline.png"
    }
  }), _c('text', {
    staticClass: ["hour-text", "while-text"]
  }, [_vm._v("in 3hrs")])]), _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["event-title", "while-text"]
  }, [_vm._v("Latte Please")]), _c('text', {
    staticClass: ["event-description", "while-text", "small-font-size"]
  }, [_vm._v("ABC Cafe")]), _c('text', {
    staticClass: ["event-date", "while-text", "small-font-size"]
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["event-time", "while-text", "small-font-size"]
  }, [_vm._v("3:00pm - 5:00pm")])]), _c('div', {
    staticClass: ["user-area"]
  }, [_c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "local:///user_picture2.png"
    }
  }), _c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "local:///user_picture3.png"
    }
  }), _c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "local:///user_picture6.png"
    }
  })])])]), _c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-bg"],
    attrs: {
      "src": "local:///event_background2.png"
    }
  }), _c('div', {
    staticClass: ["event-info"]
  }, [_c('div', {
    staticClass: ["event-hour"]
  }, [_c('image', {
    staticClass: ["clock-icon"],
    attrs: {
      "src": "local:///clock-circular-outline.png"
    }
  }), _c('text', {
    staticClass: ["hour-text", "while-text"]
  }, [_vm._v("in 3hrs")])]), _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["event-title", "while-text"]
  }, [_vm._v("Guitar Sharing")]), _c('text', {
    staticClass: ["event-description", "while-text", "small-font-size"]
  }, [_vm._v("ABC Band Room")]), _c('text', {
    staticClass: ["event-date", "while-text", "small-font-size"]
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["event-time", "while-text", "small-font-size"]
  }, [_vm._v("3:00pm - 5:00pm")])]), _c('div', {
    staticClass: ["user-area"]
  }, [_c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "local:///user_picture2.png"
    }
  }), _c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "local:///user_picture3.png"
    }
  }), _c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "local:///user_picture6.png"
    }
  })])])])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);