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
/******/ 	return __webpack_require__(__webpack_require__.s = 149);
/******/ })
/************************************************************************/
/******/ ({

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _EventDetailsPage = __webpack_require__(150);

var _EventDetailsPage2 = _interopRequireDefault(_EventDetailsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EventDetailsPage2.default.el = '#root';
new Vue(_EventDetailsPage2.default);

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(151)
)

/* script */
__vue_exports__ = __webpack_require__(152)

/* template */
var __vue_template__ = __webpack_require__(153)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/Home/EventDetailsPage1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0d3f0f03"
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

/***/ 151:
/***/ (function(module, exports) {

module.exports = {
  "EventDetailsPage1-retreatxbox": {
    "position": "absolute",
    "top": "44",
    "left": "26",
    "width": "26",
    "height": "44",
    "zIndex": 11111
  },
  "EventDetailsPage1-retreatx": {
    "width": "26",
    "height": "44"
  },
  "EventDetailsPage1-banner": {
    "width": "750",
    "height": "680"
  },
  "EventDetailsPage1-content": {
    "marginTop": "35",
    "marginLeft": "22",
    "marginRight": "22"
  },
  "EventDetailsPage1-content-titlebox": {
    "position": "relative"
  },
  "EventDetailsPage1-content-titlelabel": {
    "flexDirection": "row"
  },
  "EventDetailsPage1-content-titlelabel-text": {
    "marginRight": "18",
    "fontSize": "28",
    "color": "#57B1E3"
  },
  "EventDetailsPage1-content-titletext": {
    "marginTop": "21",
    "fontSize": "42"
  },
  "EventDetailsPage1-content-btnbox": {
    "position": "absolute",
    "top": 0,
    "right": 0
  },
  "EventDetailsPage1-content-btnbox-img": {
    "width": "66",
    "height": "68",
    "marginBottom": "30"
  },
  "EventDetailsPage1-content-Locationbox": {
    "marginTop": "33"
  },
  "EventDetailsPage1-content-Location-title": {
    "fontSize": "28",
    "color": "#57B1E3"
  },
  "EventDetailsPage1-content-Location-content": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "10"
  },
  "EventDetailsPage1-content-Location-content-text": {
    "marginRight": "6",
    "fontSize": "50"
  },
  "EventDetailsPage1-content-Location-content-img": {
    "width": "28",
    "height": "36"
  },
  "EventDetailsPage1-content-Location-details": {
    "fontSize": "26"
  },
  "EventDetailsPage1-content-datebox": {
    "marginTop": "36"
  },
  "EventDetailsPage1-content-datebox-content-textbox": {
    "marginTop": "23"
  },
  "EventDetailsPage1-content-datebox-content-textbox-text": {
    "color": "#696969",
    "fontSize": "30"
  },
  "EventDetailsPage1-content-datebox-title-text": {
    "color": "#57B1E3",
    "fontSize": "28"
  },
  "EventDetailsPage1-content-datebox-title-content": {
    "marginTop": "13",
    "marginBottom": "19",
    "fontSize": "26"
  },
  "EventDetailsPage1-content-datebox-title-contentlist-boxlist": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "height": "140",
    "paddingLeft": "18",
    "paddingRight": "18",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#707070",
    "borderRadius": "18",
    "marginBottom": "36"
  },
  "EventDetailsPage1-content-datebox-title-contentlist-boxusertext": {
    "color": "#696969"
  },
  "boxusertextdate": {
    "marginBottom": "18"
  },
  "EventDetailsPage1-content-datebox-title-contentlist-boxuservotes": {
    "color": "#57B1E3"
  },
  "EventDetailsPage1-content-aboutbox": {
    "marginTop": "41"
  },
  "EventDetailsPage1-content-aboutbox-title": {
    "color": "#57B1E3",
    "fontSize": "28"
  },
  "EventDetailsPage1-content-aboutbox-content": {
    "marginTop": "16",
    "fontSize": "32",
    "color": "#000000"
  },
  "EventDetailsPage1-content-Invited": {
    "marginTop": "56",
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(112,112,112,0.31)",
    "borderBottomStyle": "solid"
  },
  "EventDetailsPage1-content-Invitedtitle": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginLeft": "22",
    "marginRight": "22"
  },
  "EventDetailsPage1-content-Invitedtitletext": {
    "fontSize": "28",
    "color": "#57B1E3"
  },
  "EventDetailsPage1-content-Invitedtitle-btn": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#EC2079",
    "width": "276",
    "height": "42",
    "borderRadius": "50"
  },
  "EventDetailsPage1-content-Invitedtitle-btntext": {
    "color": "#ffffff"
  },
  "EventDetailsPage1-content-Invitedbox": {
    "marginTop": "29"
  },
  "EventDetailsPage1-content-Invitedboxtitle": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginLeft": "22",
    "marginRight": "22",
    "marginBottom": "18"
  },
  "EventDetailsPage1-content-Invitedboxtitle-text": {
    "fontSize": "26",
    "color": "#696969",
    "marginRight": "10"
  },
  "EventDetailsPage1-content-Invitedboxtitle-img": {
    "width": "18",
    "height": "16"
  },
  "EventDetailsPage1-content-Invitedbox-list": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingRight": "48",
    "paddingLeft": "48",
    "paddingTop": "20",
    "paddingBottom": "20",
    "borderTopWidth": "2",
    "borderTopStyle": "solid",
    "borderTopColor": "rgba(112,112,112,0.31)"
  },
  "EventDetailsPage1-content-Invitedbox-listuser-img": {
    "marginRight": "44"
  },
  "EventDetailsPage1-content-Invitedbox-listuser-imgimg": {
    "width": "86",
    "height": "86"
  },
  "EventDetailsPage1-content-Invitedbox-listuser-imgimgx": {
    "position": "absolute",
    "bottom": 0,
    "right": "-31",
    "width": "62",
    "height": "62"
  },
  "EventDetailsPage1-content-Invitedbox-listuser-text": {
    "color": "#707070",
    "fontSize": "30"
  },
  "EventDetailsPage1-upsbox": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "width": "750",
    "height": "1500",
    "backgroundColor": "rgba(0,0,0,0.48)"
  },
  "EventDetailsPage1-ups-content": {
    "width": "614",
    "paddingBottom": "30",
    "borderRadius": "18",
    "backgroundColor": "#ffffff"
  },
  "EventDetailsPage1-ups-contentClosed-box": {
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "marginTop": "25",
    "marginRight": "24",
    "marginBottom": "30"
  },
  "EventDetailsPage1-ups-contentClosed": {
    "width": "42",
    "height": "42"
  },
  "EventDetailsPage1-ups-content-box": {
    "paddingBottom": "64",
    "borderTopColor": "rgba(112,112,112,0.33)",
    "borderTopWidth": "2",
    "borderTopStyle": "solid"
  },
  "EventDetailsPage1-ups-content-boxlist": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "50",
    "paddingTop": "18",
    "paddingBottom": "18",
    "borderBottomColor": "rgba(112,112,112,0.33)",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid"
  },
  "EventDetailsPage1-ups-content-boxlistimg": {
    "width": "68",
    "height": "68",
    "marginRight": "22"
  },
  "EventDetailsPage1-ups-content-boxlisttext": {
    "fontSize": "28",
    "color": "#696969"
  },
  "EventDetailsPage1-ups-content-datebox": {
    "paddingTop": "32",
    "paddingBottom": "30",
    "paddingLeft": "50",
    "paddingRight": "50",
    "borderTopColor": "#707070",
    "borderTopWidth": "2",
    "borderTopStyle": "solid"
  },
  "EventDetailsPage1-ups-content-datelist": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "18",
    "paddingRight": "18",
    "paddingTop": "18",
    "paddingBottom": "18",
    "borderColor": "#707070",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderRadius": "18"
  },
  "EventDetailsPage1-ups-content-datelist-textboxtimer": {
    "fontSize": "30",
    "color": "#696969"
  },
  "EventDetailsPage1-ups-content-datelist-textboxnumber": {
    "fontSize": "32",
    "color": "#57B1E3"
  },
  "EventDetailsPage1-ups-content-datebtn": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "530",
    "height": "66",
    "marginTop": "23",
    "backgroundColor": "#57B1E3",
    "borderRadius": "50"
  },
  "EventDetailsPage1-ups-content-datebtntext": {
    "color": "#ffffff",
    "fontSize": "30"
  }
}

/***/ }),

/***/ 152:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var swifter = weex.requireModule('swifter');
exports.default = {
    name: 'EventDetailsPage1',
    data: function data() {
        return {
            ups: false,
            content: true,
            textbox: false,
            boxshow: false
        };
    },

    methods: {
        closed: function closed() {
            this.ups = false;
        },
        show: function show() {
            this.ups = true;
        },
        datebtn: function datebtn() {
            this.ups = false;
            this.content = false;
            this.textbox = true;
            this.boxshow = true;
        },
        onScroll: function onScroll(event) {
            swifter.notifyContentScroll(event.contentOffset.y);
        }
    }

};

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    on: {
      "scroll": _vm.onScroll
    }
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-banner"],
    attrs: {
      "src": "local:///eventDetailsPage1-banner-img.png"
    }
  }), _c('div', {
    staticClass: ["EventDetailsPage1-content"]
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _c('div', {
    staticClass: ["EventDetailsPage1-content-datebox"]
  }, [_vm._m(3), (_vm.content) ? _c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-content"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-content"]
  }, [_vm._v("Please Confirm The Time Slot")]), _c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-box"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxlist"],
    on: {
      "click": _vm.show
    }
  }, [_vm._m(4), _c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxuservotes"]
  }, [_vm._v("3 votes")])]), _vm._m(5), _vm._m(6)])]) : _vm._e(), (_vm.textbox) ? _c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-content-textbox"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-content-textbox-text"]
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-content-textbox-text"]
  }, [_vm._v("3:00pm - 5:00pm")])]) : _vm._e()]), _vm._m(7)]), (_vm.boxshow) ? _c('div', {
    staticClass: ["EventDetailsPage1-content-Invited"]
  }, [_vm._m(8), _vm._m(9), _vm._m(10), _vm._m(11)]) : _vm._e()]), (_vm.ups) ? _c('div', {
    staticClass: ["EventDetailsPage1-upsbox"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-ups-content"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-ups-contentClosed-box"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-ups-contentClosed"],
    attrs: {
      "src": "local:///eventDetailsPage-ups-content-Closed.png"
    },
    on: {
      "click": _vm.closed
    }
  })]), _vm._m(12), _c('div', {
    staticClass: ["EventDetailsPage1-ups-content-datebox"]
  }, [_vm._m(13), _c('div', {
    staticClass: ["EventDetailsPage1-ups-content-datebtn"],
    on: {
      "click": _vm.datebtn
    }
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-ups-content-datebtntext"]
  }, [_vm._v("Confirm Time Slot")])])])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-titlebox"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-titlelabel"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-titlelabel-text"]
  }, [_vm._v("#Snooker")]), _c('text', {
    staticClass: ["EventDetailsPage1-content-titlelabel-text"]
  }, [_vm._v(" #Sport ")])]), _c('text', {
    staticClass: ["EventDetailsPage1-content-titletext"]
  }, [_vm._v("Make a cake")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-btnbox"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-content-btnbox-img"],
    attrs: {
      "src": "local:///eventDetailsPage1-content-btnfenxun.png"
    }
  }), _c('image', {
    staticClass: ["EventDetailsPage1-content-btnbox-img"],
    attrs: {
      "src": "local:///eventDetailsPage1-content-btnxue.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-Locationbox"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-Location-title"]
  }, [_vm._v("Location : ")]), _c('div', {
    staticClass: ["EventDetailsPage1-content-Location-content"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-Location-content-text"]
  }, [_vm._v("ABC Snooker Room")]), _c('image', {
    staticClass: ["EventDetailsPage1-content-Location-content-img"],
    attrs: {
      "src": "local:///maps-and-flags.png"
    }
  })]), _c('text', {
    staticClass: ["EventDetailsPage1-content-Location-details"]
  }, [_vm._v("C,12/F, ABCD street , Hong Kong")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-title"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-text"]
  }, [_vm._v("Date :")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxuser"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxusertext", "boxusertextdate"]
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxusertext"]
  }, [_vm._v("3:00pm - 5:00pm")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxlist"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxuser"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxusertext", "boxusertextdate"]
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxusertext"]
  }, [_vm._v("3:00pm - 5:00pm")])]), _c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxuservotes"]
  }, [_vm._v("2 votes")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxlist"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxuser"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxusertext", "boxusertextdate"]
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxusertext"]
  }, [_vm._v("3:00pm - 5:00pm")])]), _c('text', {
    staticClass: ["EventDetailsPage1-content-datebox-title-contentlist-boxuservotes"]
  }, [_vm._v("0 votes")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-aboutbox"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-aboutbox-title"]
  }, [_vm._v("About : ")]), _c('text', {
    staticClass: ["EventDetailsPage1-content-aboutbox-content"]
  }, [_vm._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedtitle"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedtitletext"]
  }, [_vm._v("Invited Contacts :")]), _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedtitle-btn"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedtitle-btntext"]
  }, [_vm._v("+ Invite Contact")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedboxtitle"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedboxtitle-text"]
  }, [_vm._v("Attending (0) ")]), _c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedboxtitle-img"],
    attrs: {
      "src": "local:///select.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedboxtitle"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedboxtitle-text"]
  }, [_vm._v("Can’t Go (0)  ")]), _c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedboxtitle-img"],
    attrs: {
      "src": "local:///select.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedboxtitle"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedboxtitle-text"]
  }, [_vm._v("Haven’t Declared (5) ")]), _c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedboxtitle-img"],
    attrs: {
      "src": "local:///selectup.png"
    }
  })]), _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-list"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-img"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-imgimg"],
    attrs: {
      "src": "local:///user_picture1.png"
    }
  })]), _c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-text"]
  }, [_vm._v("Maggie Gill")])]), _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-list"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-img"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-imgimg"],
    attrs: {
      "src": "local:///contactsSearchPage2.png"
    }
  })]), _c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-text"]
  }, [_vm._v("Maggie Gill")])]), _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-list"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-img"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-imgimg"],
    attrs: {
      "src": "local:///contactsSearchPage3.png"
    }
  })]), _c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-text"]
  }, [_vm._v("Maggie Gill")])]), _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-list"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-img"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-imgimg"],
    attrs: {
      "src": "local:///user_picture33.png"
    }
  }), _c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-imgimgx"],
    attrs: {
      "src": "local:///user_picture1.png"
    }
  })]), _c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-text"]
  }, [_vm._v("Maggie Gill")])]), _c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-list"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-img"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-imgimg"],
    attrs: {
      "src": "local:///user_picture7.png"
    }
  }), _c('image', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-imgimgx"],
    attrs: {
      "src": "local:///user_picture1.png"
    }
  })]), _c('text', {
    staticClass: ["EventDetailsPage1-content-Invitedbox-listuser-text"]
  }, [_vm._v("Maggie Gill")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-ups-content-box"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-ups-content-boxlist"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-ups-content-boxlistimg"],
    attrs: {
      "src": "local:///user_picture27.png"
    }
  }), _c('text', {
    staticClass: ["EventDetailsPage1-ups-content-boxlisttext"]
  }, [_vm._v("Carolyn Mazzariello")])]), _c('div', {
    staticClass: ["EventDetailsPage1-ups-content-boxlist"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-ups-content-boxlistimg"],
    attrs: {
      "src": "local:///user_picture24.png"
    }
  }), _c('text', {
    staticClass: ["EventDetailsPage1-ups-content-boxlisttext"]
  }, [_vm._v("Alice Holland")])]), _c('div', {
    staticClass: ["EventDetailsPage1-ups-content-boxlist"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage1-ups-content-boxlistimg"],
    attrs: {
      "src": "local:///user_picture31.png"
    }
  }), _c('text', {
    staticClass: ["EventDetailsPage1-ups-content-boxlisttext"]
  }, [_vm._v("Keith Foster")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage1-ups-content-datelist"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage1-ups-content-datelist-textbox"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage1-ups-content-datelist-textboxtimer"]
  }, [_vm._v("Wed, Dec 11, 2018")]), _c('text', {
    staticClass: ["EventDetailsPage1-ups-content-datelist-textboxtimer"]
  }, [_vm._v("3:00pm - 5:00pm")])]), _c('text', {
    staticClass: ["EventDetailsPage1-ups-content-datelist-textboxnumber"]
  }, [_vm._v("3 votes")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });