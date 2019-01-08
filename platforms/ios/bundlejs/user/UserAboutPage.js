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
/******/ 	return __webpack_require__(__webpack_require__.s = 186);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserAboutPage = __webpack_require__(187);

var _UserAboutPage2 = _interopRequireDefault(_UserAboutPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UserAboutPage2.default.el = '#root';
new Vue(_UserAboutPage2.default);

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(188)
)

/* script */
__vue_exports__ = __webpack_require__(189)

/* template */
var __vue_template__ = __webpack_require__(190)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/UserAboutPage.vue"
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

/***/ 188:
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "position": "fixed",
    "height": "163.34",
    "backgroundColor": "#EC2079",
    "top": 0,
    "left": 0,
    "right": 0
  },
  "icon-chart": {
    "position": "absolute",
    "width": "45.54",
    "height": "44.08",
    "left": "53.6",
    "top": "85.8"
  },
  "header-title": {
    "position": "absolute",
    "fontSize": "30",
    "color": "#ffffff",
    "top": "96.8",
    "left": "277.6"
  },
  "main": {
    "position": "relative",
    "top": "63.34",
    "paddingBottom": "153"
  },
  "basic-info": {
    "display": "flex",
    "flexDirection": "row",
    "marginLeft": "65.8",
    "paddingBottom": "56.6"
  },
  "picture": {
    "width": "173.06",
    "height": "173.06"
  },
  "basic-info-right": {
    "marginLeft": "31.2"
  },
  "name-info": {
    "fontSize": "46",
    "color": "#000000"
  },
  "company-info": {
    "fontSize": "30",
    "color": "#383838",
    "marginTop": "8"
  },
  "company-role-info": {
    "fontSize": "30",
    "color": "#383838",
    "marginTop": "16"
  },
  "edit-button": {
    "fontSize": "26",
    "color": "#383838",
    "width": "402",
    "height": "48.4",
    "lineHeight": "48.4",
    "borderColor": "#707070",
    "borderWidth": "1",
    "borderRadius": "16",
    "textAlign": "center",
    "marginTop": "17.8"
  },
  "details-operation-area": {
    "display": "flex",
    "flexDirection": "row",
    "paddingLeft": "51.6",
    "paddingTop": "38.6",
    "paddingBottom": "38.6",
    "marginBottom": "67",
    "borderColor": "#707070",
    "borderTopWidth": "1",
    "borderBottomWidth": "1"
  },
  "operation-item": {
    "fontSize": "26",
    "color": "#696969"
  },
  "event-operation": {
    "marginLeft": "152"
  },
  "active-operation": {
    "color": "#EC2079"
  },
  "about-details-introduction": {
    "paddingLeft": "52.4"
  },
  "title": {
    "fontSize": "26",
    "color": "#707070"
  },
  "introduction": {
    "fontSize": "26",
    "color": "#707070",
    "marginTop": "20",
    "paddingRight": "56.8"
  },
  "hobbies-area": {
    "marginTop": "64"
  },
  "hobbies": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "hobby": {
    "color": "#ffffff",
    "paddingLeft": "40",
    "paddingRight": "40",
    "paddingTop": "10",
    "paddingBottom": "10",
    "backgroundColor": "#57B1E3",
    "borderRadius": "23",
    "marginRight": "12",
    "marginTop": "20"
  },
  "social-area": {
    "marginTop": "46"
  },
  "socials": {
    "display": "flex",
    "flexDirection": "row",
    "marginTop": "28"
  },
  "social-way": {
    "width": "96",
    "height": "96",
    "marginRight": "52"
  },
  "event-image": {
    "width": "663.48",
    "height": "394.6",
    "marginLeft": "43"
  },
  "event-hobbies": {
    "display": "flex",
    "flexDirection": "row",
    "marginTop": "42.2"
  },
  "event-item": {
    "paddingBottom": "43.2",
    "marginBottom": "76.8",
    "borderColor": "#707070",
    "borderBottomWidth": "1"
  },
  "event-info-area": {
    "paddingLeft": "63"
  },
  "event-detail": {
    "fontSize": "32",
    "color": "#57B1E3",
    "marginRight": "54"
  },
  "event-title": {
    "fontSize": "44",
    "color": "#000000",
    "marginTop": "14"
  },
  "event-date": {
    "fontSize": "32",
    "color": "#696969",
    "marginTop": "22"
  },
  "event-time": {
    "fontSize": "30",
    "color": "#696969",
    "marginTop": "21.2"
  },
  "event-status-area": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "20"
  },
  "event-status": {
    "fontSize": "30",
    "color": "#EC2079"
  },
  "font-color-blue": {
    "color": "#57B1E3"
  }
}

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BarComponent = __webpack_require__(0);

var _BarComponent2 = _interopRequireDefault(_BarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swifter = weex.requireModule('swifter'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "UserAboutPage",
    data: function data() {
        return {
            isAbout: true
        };
    },

    components: { barComponent: _BarComponent2.default },
    methods: {
        onAboutClick: function onAboutClick() {
            this.isAbout = true;
        },
        onEventClick: function onEventClick() {
            this.isAbout = false;
        },
        onEventItemClick: function onEventItemClick() {
            swifter.openTransparentPage('Home/EventDetailsPage.js');
        }
    }
};

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["main"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["details-area"]
  }, [_c('div', {
    staticClass: ["details-operation-area"]
  }, [_c('text', {
    staticClass: ["about-operation", "operation-item"],
    class: [_vm.isAbout ? 'active-operation' : ''],
    on: {
      "click": _vm.onAboutClick
    }
  }, [_vm._v("About")]), _c('text', {
    staticClass: ["event-operation", "operation-item"],
    class: [!_vm.isAbout ? 'active-operation' : ''],
    on: {
      "click": _vm.onEventClick
    }
  }, [_vm._v("Your Events")])]), (_vm.isAbout) ? _c('div', {
    staticClass: ["about-details-introduction"]
  }, [_vm._m(1), _vm._m(2), _vm._m(3)]) : _vm._e(), (!_vm.isAbout) ? _c('div', {
    staticClass: ["event-details-introduction"]
  }, [_vm._m(4), _c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-image"],
    attrs: {
      "src": "local:///event_picture1.png"
    },
    on: {
      "click": _vm.onEventItemClick
    }
  }), _vm._m(5)]), _vm._m(6)]) : _vm._e()])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["basic-info"]
  }, [_c('div', {
    staticClass: ["picture-left"]
  }, [_c('image', {
    staticClass: ["picture"],
    attrs: {
      "src": "local:///user_picture.png"
    }
  })]), _c('div', {
    staticClass: ["basic-info-right"]
  }, [_c('text', {
    staticClass: ["name-info"]
  }, [_vm._v("Stephanie Mak")]), _c('text', {
    staticClass: ["company-info"]
  }, [_vm._v("Morgan Stanley")]), _c('text', {
    staticClass: ["company-role-info"]
  }, [_vm._v("AVP")]), _c('text', {
    staticClass: ["edit-button"]
  }, [_vm._v("Edit Profile")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["about-area"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("About Myself:")]), _c('text', {
    staticClass: ["introduction"]
  }, [_vm._v("Stephanie Mak is an Assistant Vice President within the Digital Platforms Team (Online & Mobile). Stephanie is working cross-functionally to develop Morgan Stanley’s Self-Directed Brokerage Digital Product which will be available on Mobile & the Web")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["hobbies-area"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Hobbies:")]), _c('div', {
    staticClass: ["hobbies"]
  }, [_c('text', {
    staticClass: ["hobby"]
  }, [_vm._v("#Snooker")]), _c('text', {
    staticClass: ["hobby"]
  }, [_vm._v("#Coffee")]), _c('text', {
    staticClass: ["hobby"]
  }, [_vm._v("#Movie")]), _c('text', {
    staticClass: ["hobby"]
  }, [_vm._v("#Netflix")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["social-area"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Social Media:")]), _c('div', {
    staticClass: ["socials"]
  }, [_c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": "local:///icon_social1.png"
    }
  }), _c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": "local:///icon_social2.png"
    }
  }), _c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": "local:///icon_social3.png"
    }
  }), _c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": "local:///icon_social4.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-image"],
    attrs: {
      "src": "local:///event_picture3.png"
    }
  }), _c('div', {
    staticClass: ["event-info-area"]
  }, [_c('div', {
    staticClass: ["event-hobbies"]
  }, [_c('text', {
    staticClass: ["event-detail"]
  }, [_vm._v("#Snooker")]), _c('text', {
    staticClass: ["event-detail"]
  }, [_vm._v("#Sport")])]), _c('text', {
    staticClass: ["event-title"]
  }, [_vm._v("Happy Snooker Day")]), _c('text', {
    staticClass: ["event-date"]
  }, [_vm._v("Wed,Dec 11, 2018")]), _c('text', {
    staticClass: ["event-time"]
  }, [_vm._v("3:00pm - 5:00pm")]), _c('div', {
    staticClass: ["event-status-area"]
  }, [_c('text', [_vm._v("Status :")]), _c('text', {
    staticClass: ["event-status"]
  }, [_vm._v(" Waiting For Participants To Join ")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["event-info-area"]
  }, [_c('div', {
    staticClass: ["event-hobbies"]
  }, [_c('text', {
    staticClass: ["event-detail"]
  }, [_vm._v("#Cooking")])]), _c('text', {
    staticClass: ["event-title"]
  }, [_vm._v("Make a cake")]), _c('text', {
    staticClass: ["event-date"]
  }, [_vm._v("Wed,Dec 11, 2018")]), _c('text', {
    staticClass: ["event-time"]
  }, [_vm._v("3:00pm - 5:00pm")]), _c('div', {
    staticClass: ["event-status-area"]
  }, [_c('text', {
    staticClass: ["status"]
  }, [_vm._v("Status : ")]), _c('text', {
    staticClass: ["event-status"]
  }, [_vm._v(" Provide your availability  ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["event-item"]
  }, [_c('image', {
    staticClass: ["event-image"],
    attrs: {
      "src": "local:///event_picture2.png"
    }
  }), _c('div', {
    staticClass: ["event-info-area"]
  }, [_c('div', {
    staticClass: ["event-hobbies"]
  }, [_c('text', {
    staticClass: ["event-detail"]
  }, [_vm._v("#Wine")]), _c('text', {
    staticClass: ["event-detail"]
  }, [_vm._v("#Beverage")])]), _c('text', {
    staticClass: ["event-title"]
  }, [_vm._v("Wine Tasting")]), _c('text', {
    staticClass: ["event-date"]
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["event-time"]
  }, [_vm._v("3:00pm - 5:00pm")]), _c('div', {
    staticClass: ["event-status-area"]
  }, [_c('text', {
    staticClass: ["status"]
  }, [_vm._v("Status : ")]), _c('text', {
    staticClass: ["event-status", "font-color-blue"]
  }, [_vm._v(" Confirmed ")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 2:
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

/***/ 3:
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
      "href": "../contacts/ContactListPage.js"
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

/***/ })

/******/ });