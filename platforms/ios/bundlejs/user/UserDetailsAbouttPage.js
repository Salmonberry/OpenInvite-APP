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
/******/ 	return __webpack_require__(__webpack_require__.s = 136);
/******/ })
/************************************************************************/
/******/ ({

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserDetailsAbouttPage = __webpack_require__(137);

var _UserDetailsAbouttPage2 = _interopRequireDefault(_UserDetailsAbouttPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UserDetailsAbouttPage2.default.el = '#root';
new Vue(_UserDetailsAbouttPage2.default);

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(138)
)

/* script */
__vue_exports__ = __webpack_require__(139)

/* template */
var __vue_template__ = __webpack_require__(140)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/UserDetailsAbouttPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0077c3c2"
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

/***/ 138:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
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
    "top": "163.34",
    "paddingBottom": "253"
  },
  "basic-info": {
    "display": "flex",
    "flexDirection": "row",
    "marginLeft": "65.8",
    "paddingTop": "92.8",
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
    "fontSize": "28",
    "color": "#57B1E3",
    "width": "402",
    "height": "48.4",
    "lineHeight": "48.4",
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
  "contact-image": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "33"
  },
  "user-picture": {
    "width": "96.6",
    "height": "96.6",
    "marginRight": "33.4"
  },
  "contact-number": {
    "width": "96.6",
    "height": "96.6",
    "lineHeight": "96.6",
    "textAlign": "center",
    "backgroundColor": "#EC2079",
    "borderRadius": 50
  },
  "about-details-introduction": {
    "paddingLeft": "52.4"
  },
  "about-area": {
    "marginTop": "76.4"
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
  "met-number-area": {
    "paddingLeft": "46",
    "paddingRight": "52",
    "marginBottom": "64"
  },
  "met-title": {
    "fontSize": "36",
    "color": "#696969"
  },
  "met-number-and-operation-area": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "6"
  },
  "met-number": {
    "fontSize": "88",
    "color": "#57B1E3"
  },
  "met-chart-operation-area": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "94",
    "height": "94",
    "backgroundColor": "#EC2079",
    "borderRadius": 50
  },
  "met-chart-operation": {
    "width": "40",
    "height": "40"
  },
  "event-image": {
    "width": "716",
    "height": "236",
    "marginLeft": "18",
    "opacity": 0.8
  },
  "event-item-mask": {
    "position": "absolute",
    "width": "716",
    "height": "236"
  },
  "history-event-item": {
    "position": "relative",
    "marginBottom": "22"
  },
  "event-info-area": {
    "position": "absolute",
    "top": "73.2",
    "left": "42.4",
    "paddingLeft": "63"
  },
  "event-title": {
    "fontSize": "44",
    "color": "#ffffff",
    "marginTop": "14"
  },
  "event-date": {
    "fontSize": "32",
    "color": "#ffffff",
    "marginTop": "18"
  }
}

/***/ }),

/***/ 139:
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
//
//
//
//
//
//
//
//
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

    methods: {
        onAboutClick: function onAboutClick() {
            this.isAbout = true;
        },
        onEventClick: function onEventClick() {
            this.isAbout = false;
        }
    }
};

/***/ }),

/***/ 140:
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
  }, [_vm._v("Our History")])]), (_vm.isAbout) ? _c('div', {
    staticClass: ["about-details-introduction"]
  }, [_vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4)]) : _vm._e(), (!_vm.isAbout) ? _c('div', {
    staticClass: ["event-details-introduction"]
  }, [_vm._m(5), _vm._m(6), _vm._m(7), _vm._m(8)]) : _vm._e()])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["basic-info"]
  }, [_c('div', {
    staticClass: ["picture-left"]
  }, [_c('image', {
    staticClass: ["picture"],
    attrs: {
      "src": "/src/images/user_picture1.png"
    }
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
  }, [_vm._v("1st Degree Contact")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["contact-area"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Mutual Contact:")]), _c('div', {
    staticClass: ["contact-image"]
  }, [_c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "/src/images/user_picture2.png"
    }
  }), _c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "/src/images/user_picture3.png"
    }
  }), _c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "/src/images/user_picture4.png"
    }
  }), _c('image', {
    staticClass: ["user-picture"],
    attrs: {
      "src": "/src/images/user_picture5.png"
    }
  }), _c('text', {
    staticClass: ["contact-number"]
  }, [_vm._v("4")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["about-area"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("About Myself:")]), _c('text', {
    staticClass: ["introduction"]
  }, [_vm._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.")])])
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
      "src": "/src/images/icon_social1.png"
    }
  }), _c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": "/src/images/icon_social2.png"
    }
  }), _c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": "/src/images/icon_social3.png"
    }
  }), _c('image', {
    staticClass: ["social-way"],
    attrs: {
      "src": "/src/images/icon_social4.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["met-number-area"]
  }, [_c('text', {
    staticClass: ["met-title"]
  }, [_vm._v("We met")]), _c('div', {
    staticClass: ["met-number-and-operation-area"]
  }, [_c('text', {
    staticClass: ["met-number"]
  }, [_vm._v("12 Times")]), _c('div', {
    staticClass: ["met-chart-operation-area"]
  }, [_c('image', {
    staticClass: ["met-chart-operation"],
    attrs: {
      "src": "/src/images/icon_chart.png"
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["history-event-item"]
  }, [_c('image', {
    staticClass: ["event-image"],
    attrs: {
      "src": "/src/images/history_event1.png"
    }
  }), _c('div', {
    staticClass: ["event-item-mask"]
  }), _c('div', {
    staticClass: ["event-info-area"]
  }, [_c('text', {
    staticClass: ["event-title"]
  }, [_vm._v("BBQ!!")]), _c('text', {
    staticClass: ["event-date"]
  }, [_vm._v("Wed,Dec 11, 2018")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["history-event-item"]
  }, [_c('image', {
    staticClass: ["event-image"],
    attrs: {
      "src": "/src/images/history_event2.png"
    }
  }), _c('div', {
    staticClass: ["event-item-mask"]
  }), _c('div', {
    staticClass: ["event-info-area"]
  }, [_c('text', {
    staticClass: ["event-title"]
  }, [_vm._v("Photo Day")]), _c('text', {
    staticClass: ["event-date"]
  }, [_vm._v("Wed,Dec 11, 2018")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["history-event-item"]
  }, [_c('image', {
    staticClass: ["event-image"],
    attrs: {
      "src": "/src/images/history_event3.png"
    }
  }), _c('div', {
    staticClass: ["event-item-mask"]
  }), _c('div', {
    staticClass: ["event-info-area"]
  }, [_c('text', {
    staticClass: ["event-title"]
  }, [_vm._v("Girls Talk")]), _c('text', {
    staticClass: ["event-date"]
  }, [_vm._v("Wed,Dec 11, 2018")])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });