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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ({

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CreateEventLastPage = __webpack_require__(91);

var _CreateEventLastPage2 = _interopRequireDefault(_CreateEventLastPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CreateEventLastPage2.default.el = '#root';
new Vue(_CreateEventLastPage2.default);

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(92)
)

/* script */
__vue_exports__ = __webpack_require__(93)

/* template */
var __vue_template__ = __webpack_require__(94)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/createEvent/CreateEventLastPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42e634e9"
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

/***/ 92:
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "82",
    "height": "122"
  },
  "separate": {
    "width": "750",
    "height": "30",
    "backgroundColor": "#E2E2E2"
  },
  "icon-chart": {
    "width": "20",
    "height": "40",
    "marginLeft": "38"
  },
  "header-title": {
    "fontSize": "30",
    "color": "#242424",
    "marginLeft": "233.8"
  },
  "main": {
    "marginTop": "81.2",
    "paddingLeft": "38",
    "paddingRight": "40"
  },
  "CreateEventLastPage-title": {
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(112,112,112,0.48)",
    "borderBottomStyle": "solid"
  },
  "CreateEventLastPage-title-text": {
    "color": "#313131",
    "fontSize": "50",
    "paddingBottom": "16"
  },
  "CreateEventLastPage-label": {
    "marginTop": "20",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "alignItems": "center"
  },
  "CreateEventLastPage-label-list": {
    "backgroundColor": "#57B1E3",
    "paddingTop": "8",
    "paddingBottom": "8",
    "paddingLeft": "28",
    "paddingRight": "28",
    "borderRadius": "18",
    "marginRight": "10",
    "marginBottom": "10"
  },
  "CreateEventLastPage-label-list-text": {
    "color": "#ffffff"
  },
  "createEventLastPage-labeladd": {
    "width": "30",
    "height": "30"
  },
  "CreateEventLastPage-Invite": {
    "marginTop": "28"
  },
  "CreateEventLastPage-Invite-title": {
    "color": "#313131",
    "fontSize": "50"
  },
  "CreateEventLastPage-Invite-content": {
    "marginTop": "23"
  },
  "CreateEventLastPage-Invite-list": {
    "paddingTop": "12",
    "paddingBottom": "12",
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(112,112,112,0.24)",
    "borderBottomStyle": "solid",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "CreateEventLastPage-Invite-user": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "14"
  },
  "CreateEventLastPage-Invite-user-img": {
    "width": "52",
    "height": "52",
    "marginRight": "20"
  },
  "CreateEventLastPage-Invite-user-text": {
    "color": "#242424"
  },
  "CreateEventLastPage-Invite-list-close": {
    "width": "20",
    "height": "20"
  },
  "CreateEventLastPage-Invite-listadd": {
    "paddingTop": "27",
    "paddingBottom": "27",
    "paddingLeft": "24",
    "color": "#57B1E3",
    "fontSize": "32"
  },
  "CreateEventLastPage-Public": {
    "paddingTop": "35"
  },
  "CreateEventLastPage-Public-title": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingBottom": "18",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(112,112,112,0.34)"
  },
  "CreateEventLastPage-Public-title-text": {
    "color": "#313131",
    "fontSize": "50"
  },
  "CreateEventLastPage-Public-title-details": {
    "marginTop": "23",
    "flexDirection": "row",
    "alignContent": "center",
    "justifyContent": "space-between"
  },
  "CreateEventLastPage-Public-title-details-text": {
    "color": "#707070"
  },
  "CreateEventLastPage-Public-title-details-btn": {
    "width": "104",
    "height": "42",
    "backgroundColor": "#707070",
    "borderRadius": "18",
    "flexDirection": "row",
    "alignItems": "center",
    "position": "relative"
  },
  "CreateEventLastPage-Public-title-details-btn-text": {
    "color": "#ffffff",
    "marginLeft": "20",
    "fontSize": "18"
  },
  "CreateEventLastPage-Public-title-details-btn-img": {
    "position": "absolute",
    "right": "10",
    "top": "7",
    "width": "28",
    "height": "28",
    "backgroundColor": "#57B1E3",
    "borderRadius": 50
  },
  "CreateEventLastPage-Public-title-details-btn-text-yes": {
    "color": "#ffffff",
    "fontSize": "18",
    "marginLeft": "50"
  },
  "CreateEventLastPage-Public-Showbox": {
    "paddingBottom": "35"
  },
  "CreateEventLastPage-Public-Showbox-can": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "35",
    "paddingBottom": "35",
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(112,112,112,0.34)",
    "borderBottomStyle": "solid"
  },
  "CreateEventLastPage-Public-Showbox-can-text": {
    "width": "240",
    "color": "#707070"
  },
  "CreateEventLastPage-Public-Showbox-can-select": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "CreateEventLastPage-Public-Showbox-can-select-text": {
    "width": "180",
    "color": "#57B1E3"
  },
  "CreateEventLastPage-Public-Showbox-can-select-img": {
    "width": "12",
    "height": "10"
  },
  "CreateEventLastPage-Public-Showbox-Number": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "35"
  },
  "CreateEventLastPage-Public-Showbox-Number-text": {
    "color": "#707070"
  },
  "CreateEventLastPage-Public-Showbox-Number-number": {
    "color": "#57B1E3"
  },
  "CreateEventLastPage-Public-Time": {
    "paddingBottom": "35",
    "paddingTop": "35"
  },
  "CreateEventLastPage-Public-Time-title": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "CreateEventLastPage-Public-Time-title-text": {
    "fontSize": "50",
    "color": "#313131"
  },
  "CreateEventLastPage-Public-Time-title-text-img": {
    "width": "32",
    "height": "30"
  },
  "CreateEventLastPage-Public-Time-content": {
    "marginTop": "43"
  },
  "CreateEventLastPage-Public-Time-content-list": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": "35",
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingBottom": "35",
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(112,112,112,0.34)",
    "borderBottomStyle": "solid"
  },
  "CreateEventLastPage-Public-Time-content-list-hui": {
    "color": "#707070"
  },
  "CreateEventLastPage-Location": {
    "paddingBottom": "35",
    "paddingTop": "35",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "CreateEventLastPage-Location-title": {
    "color": "#313131",
    "fontSize": "50",
    "marginBottom": "20"
  },
  "CreateEventLastPage-Location-content": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingTop": "12",
    "backgroundColor": "#F4F4F4",
    "borderRadius": "18",
    "height": "62"
  },
  "CreateEventLastPage-Location-input": {
    "fontSize": "25",
    "width": "300",
    "height": "62",
    "color": "#242424",
    "flex": 1
  },
  "CreateEventLastPage-Location-img": {
    "width": "26",
    "height": "28"
  },
  "CreateEventLastPage-Location-CoverImage": {
    "paddingTop": "35",
    "paddingBottom": "35",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "CreateEventLastPage-Location-CoverImage-title": {
    "color": "#313131",
    "fontSize": "50"
  },
  "CreateEventLastPage-Location-CoverImage-img": {
    "marginTop": "18",
    "marginBottom": "18",
    "width": "700",
    "height": "750"
  },
  "CreateEventLastPage-Location-CoverImage-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#57B1E3",
    "height": "88",
    "marginBottom": "18"
  },
  "CreateEventLastPage-Location-CoverImage-btn-img": {
    "width": "24",
    "height": "26",
    "marginRight": "7"
  },
  "CreateEventLastPage-Location-CoverImage-btn-img-pic": {
    "width": "34",
    "height": "34",
    "marginRight": "7"
  },
  "CreateEventLastPage-Location-CoverImage-btn-imgphoto": {
    "width": "38",
    "height": "30",
    "marginRight": "7"
  },
  "CreateEventLastPage-Location-CoverImage-btn-text": {
    "color": "#ffffff",
    "fontSize": "30"
  },
  "CreateEventLastPage-Location-Other": {
    "paddingTop": "35",
    "paddingBottom": "35"
  },
  "CreateEventLastPage-Location-Other-title": {
    "paddingLeft": "30",
    "color": "#313131",
    "fontSize": "50"
  },
  "CreateEventLastPage-Location-Other-list": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "30",
    "paddingBottom": "30",
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(112,112,112,0.34)",
    "borderBottomStyle": "solid"
  },
  "CreateEventLastPage-Location-Other-list-text": {
    "color": "#707070",
    "fontSize": "32"
  },
  "CreateEventLastPage-Location-Other-list-select": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "CreateEventLastPage-Location-Other-list-select-text": {
    "color": "#707070",
    "fontSize": "32"
  },
  "CreateEventLastPage-Location-Other-list-select-img": {
    "width": "22",
    "height": "20",
    "marginLeft": "18"
  },
  "CreateEventLastPage-Location-Other-What": {
    "color": "#707070",
    "fontSize": "32",
    "paddingLeft": "30",
    "paddingTop": "30"
  },
  "CreateEventLastPage-Location-Check": {
    "paddingTop": "35",
    "paddingBottom": "201",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "CreateEventLastPage-Location-Check-title": {
    "color": "#313131",
    "fontSize": "50"
  },
  "CreateEventLastPage-Location-Check-titleIntroduction": {
    "color": "#707070",
    "fontSize": "32",
    "marginBottom": "66"
  },
  "CreateEventLastPage-Location-Check-selecttext": {
    "paddingBottom": "10",
    "color": "rgba(112,112,112,0.5)",
    "fontSize": "32",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "marginBottom": "16"
  },
  "CreateEventLastPage-Location-Check-label": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "CreateEventLastPage-Location-Check-label-img": {
    "width": "32",
    "height": "30"
  },
  "CreateEventLastPage-Location-Check-label-text": {
    "color": "#57B1E3",
    "fontSize": "32"
  },
  "CreateEventLastPage-Location-Submit": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "width": "750",
    "height": "166",
    "backgroundColor": "#57B1E3",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "CreateEventLastPage-Location-Submit-text": {
    "color": "#ffffff",
    "fontSize": "30"
  }
}

/***/ }),

/***/ 93:
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

var animation = weex.requireModule('animation');
exports.default = {
    data: function data() {
        return {
            statuss: true,
            pauss: false
        };
    },

    methods: {
        slide: function slide() {
            var testEl = this.$refs.test;
            var btn = this.$refs.btn;
            if (this.statuss) {

                animation.transition(testEl, {
                    styles: {
                        backgroundColor: '#EC2079'
                    }
                });

                animation.transition(btn, {
                    styles: {
                        transform: 'translateX(-55px)'
                    },
                    duration: 100, //ms
                    timingFunction: 'ease'
                });

                this.statuss = !this.statuss;
                this.pauss = !this.pauss;
            } else {
                animation.transition(testEl, {
                    styles: {
                        backgroundColor: '#707070'
                    }
                });

                animation.transition(btn, {
                    styles: {
                        transform: 'translateX(0px)'
                    },
                    duration: 100, //ms
                    timingFunction: 'ease'
                });

                this.statuss = !this.statuss;
                this.pauss = !this.pauss;
            }
        }
    }
};

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["CreateEventLastPage"]
  }, [_vm._m(0), _c('scroller', [_vm._m(1), _c('div', {
    staticClass: ["separate"]
  }), _c('div', {
    staticClass: ["CreateEventLastPage-Public"]
  }, [_c('div', {
    staticClass: ["CreateEventLastPage-Public-title"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Public-title-text"]
  }, [_vm._v("Public")]), _c('div', {
    staticClass: ["CreateEventLastPage-Public-title-details"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Public-title-details-text"]
  }, [_vm._v("Allow others join your event? ")]), _c('div', {
    ref: "test",
    staticClass: ["CreateEventLastPage-Public-title-details-btn"],
    on: {
      "click": _vm.slide
    }
  }, [(_vm.statuss) ? _c('text', {
    staticClass: ["CreateEventLastPage-Public-title-details-btn-text"]
  }, [_vm._v("NO")]) : _vm._e(), _c('div', {
    ref: "btn",
    staticClass: ["CreateEventLastPage-Public-title-details-btn-img"]
  }), (_vm.pauss) ? _c('text', {
    staticClass: ["CreateEventLastPage-Public-title-details-btn-text-yes"]
  }, [_vm._v("YES")]) : _vm._e()])])]), (_vm.pauss) ? _c('div', {
    staticClass: ["CreateEventLastPage-Public-Showbox"]
  }, [_vm._m(2), _vm._m(3)]) : _vm._e()]), _c('div', {
    staticClass: ["separate"]
  }), _vm._m(4), _c('div', {
    staticClass: ["separate"]
  }), _vm._m(5), _c('div', {
    staticClass: ["separate"]
  }), _vm._m(6), _c('div', {
    staticClass: ["separate"]
  }), _vm._m(7), _c('div', {
    staticClass: ["separate"]
  }), _vm._m(8), _vm._m(9)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('image', {
    staticClass: ["icon-chart"],
    attrs: {
      "src": "/src/images/arrow_back_gray.png"
    }
  }), _c('text', {
    staticClass: ["header-title"]
  }, [_vm._v("Create Event")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["main"]
  }, [_c('div', {
    staticClass: ["CreateEventLastPage-title"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-title-text"]
  }, [_vm._v("Happy Snooker Day")])]), _c('div', {
    staticClass: ["CreateEventLastPage-label"]
  }, [_c('div', {
    staticClass: ["CreateEventLastPage-label-list"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-label-list-text"]
  }, [_vm._v("#Snooker")])]), _c('div', {
    staticClass: ["CreateEventLastPage-label-list"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-label-list-text"]
  }, [_vm._v("#Snooker")])]), _c('div', {
    staticClass: ["CreateEventLastPage-label-list"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-label-list-text"]
  }, [_vm._v("#Snooker")])]), _c('div', {
    staticClass: ["CreateEventLastPage-label-list"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-label-list-text"]
  }, [_vm._v("#Snooker")])]), _c('image', {
    staticClass: ["createEventLastPage-labeladd"],
    attrs: {
      "src": "/src/images/createEventLastPage-labeladd.png"
    }
  })]), _c('div', {
    staticClass: ["CreateEventLastPage-Invite"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Invite-title"]
  }, [_vm._v("Invite")]), _c('div', {
    staticClass: ["CreateEventLastPage-Invite-content"]
  }, [_c('div', {
    staticClass: ["CreateEventLastPage-Invite-list"]
  }, [_c('div', {
    staticClass: ["CreateEventLastPage-Invite-user"]
  }, [_c('image', {
    staticClass: ["CreateEventLastPage-Invite-user-img"],
    attrs: {
      "src": "/src/images/createEventLastPage-Invite-user.png"
    }
  }), _c('text', {
    staticClass: ["CreateEventLastPage-Invite-user-text"]
  }, [_vm._v("Kelvin")])]), _c('image', {
    staticClass: ["CreateEventLastPage-Invite-list-close"],
    attrs: {
      "src": "/src/images/createEventLastPage-Invite-user-close.png"
    }
  })]), _c('div', {
    staticClass: ["CreateEventLastPage-Invite-list"]
  }, [_c('div', {
    staticClass: ["CreateEventLastPage-Invite-user"]
  }, [_c('image', {
    staticClass: ["CreateEventLastPage-Invite-user-img"],
    attrs: {
      "src": "/src/images/createEventLastPage-Invite-user.png"
    }
  }), _c('text', {
    staticClass: ["CreateEventLastPage-Invite-user-text"]
  }, [_vm._v("Kelvin")])]), _c('image', {
    staticClass: ["CreateEventLastPage-Invite-list-close"],
    attrs: {
      "src": "/src/images/createEventLastPage-Invite-user-close.png"
    }
  })]), _c('div', {
    staticClass: ["CreateEventLastPage-Invite-list"]
  }, [_c('div', {
    staticClass: ["CreateEventLastPage-Invite-user"]
  }, [_c('image', {
    staticClass: ["CreateEventLastPage-Invite-user-img"],
    attrs: {
      "src": "/src/images/createEventLastPage-Invite-user.png"
    }
  }), _c('text', {
    staticClass: ["CreateEventLastPage-Invite-user-text"]
  }, [_vm._v("Kelvin")])]), _c('image', {
    staticClass: ["CreateEventLastPage-Invite-list-close"],
    attrs: {
      "src": "/src/images/createEventLastPage-Invite-user-close.png"
    }
  })]), _c('text', {
    staticClass: ["CreateEventLastPage-Invite-listadd"]
  }, [_vm._v("+ Contact")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["CreateEventLastPage-Public-Showbox-can"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Public-Showbox-can-text"]
  }, [_vm._v("Which contacts can attend?")]), _c('div', {
    staticClass: ["CreateEventLastPage-Public-Showbox-can-select"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Public-Showbox-can-select-text"]
  }, [_vm._v("1st Degree Contact only ")]), _c('image', {
    staticClass: ["CreateEventLastPage-Public-Showbox-can-select-img"],
    attrs: {
      "src": "/src/images/createEventLastPage-Public-Showbox-can-select.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["CreateEventLastPage-Public-Showbox-Number"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Public-Showbox-Number-text"]
  }, [_vm._v("Max Number")]), _c('text', {
    staticClass: ["CreateEventLastPage-Public-Showbox-Number-number"]
  }, [_vm._v("10")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["CreateEventLastPage-Public-Time"]
  }, [_c('div', {
    staticClass: ["CreateEventLastPage-Public-Time-title"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Public-Time-title-text"]
  }, [_vm._v("Time Slot 1 ")]), _c('image', {
    staticClass: ["CreateEventLastPage-Public-Time-title-text-img"],
    attrs: {
      "src": "/src/images/createEventLastPage-labeladd.png"
    }
  })]), _c('div', {
    staticClass: ["CreateEventLastPage-Public-Time-content"]
  }, [_c('div', {
    staticClass: ["CreateEventLastPage-Public-Time-content-list"]
  }, [_c('text', [_vm._v("All Day Event")]), _c('div', {
    staticClass: ["CreateEventLastPage-Public-title-details-btn"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Public-title-details-btn-text"]
  }, [_vm._v("NO")]), _c('div', {
    staticClass: ["CreateEventLastPage-Public-title-details-btn-img"]
  })])]), _c('div', {
    staticClass: ["CreateEventLastPage-Public-Time-content-list"]
  }, [_c('text', [_vm._v("Start")]), _c('text', {
    staticClass: ["CreateEventLastPage-Public-Time-content-list-hui"]
  }, [_vm._v("Please select")])]), _c('div', {
    staticClass: ["CreateEventLastPage-Public-Time-content-list"]
  }, [_c('text', [_vm._v("Start")]), _c('text', {
    staticClass: ["CreateEventLastPage-Public-Time-content-list-hui"]
  }, [_vm._v("Please select")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["CreateEventLastPage-Location"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-title"]
  }, [_vm._v("Location")]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-content"]
  }, [_c('input', {
    staticClass: ["CreateEventLastPage-Location-input"],
    attrs: {
      "type": "text",
      "placeholder": "Search"
    }
  }), _c('image', {
    staticClass: ["CreateEventLastPage-Location-img"],
    attrs: {
      "src": "/src/images/maps-search.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["CreateEventLastPage-Location-CoverImage"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-title"]
  }, [_vm._v("Cover Image")]), _c('image', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-img"],
    attrs: {
      "src": "/src/images/createEventLastPage-Location-CoverImage-img.png"
    }
  }), _c('div', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-btn"]
  }, [_c('image', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-btn-img"],
    attrs: {
      "src": "/src/images/refresh-button.png"
    }
  }), _c('text', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-btn-text"]
  }, [_vm._v("New random photo")])]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-btn"]
  }, [_c('image', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-btn-img-pic"],
    attrs: {
      "src": "/src/images/gallery.png"
    }
  }), _c('text', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-btn-text"]
  }, [_vm._v("Choose From Your Gallery")])]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-btn"]
  }, [_c('image', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-btn-imgphoto"],
    attrs: {
      "src": "/src/images/photo-camera.png"
    }
  }), _c('text', {
    staticClass: ["CreateEventLastPage-Location-CoverImage-btn-text"]
  }, [_vm._v("Take A Photo")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["CreateEventLastPage-Location-Other"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-title"]
  }, [_vm._v("Other")]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-Other-list"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-list-text"]
  }, [_vm._v("Repeat :")]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-Other-list-select"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-list-select-text"]
  }, [_vm._v("No")]), _c('image', {
    staticClass: ["CreateEventLastPage-Location-Other-list-select-img"],
    attrs: {
      "src": "/src/images/select.png"
    }
  })])]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-Other-list"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-list-text"]
  }, [_vm._v("Show As :")]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-Other-list-select"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-list-select-text"]
  }, [_vm._v("Busy")]), _c('image', {
    staticClass: ["CreateEventLastPage-Location-Other-list-select-img"],
    attrs: {
      "src": "/src/images/select.png"
    }
  })])]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-Other-list"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-list-text"]
  }, [_vm._v("Alert:")]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-Other-list-select"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-list-select-text"]
  }, [_vm._v("No")]), _c('image', {
    staticClass: ["CreateEventLastPage-Location-Other-list-select-img"],
    attrs: {
      "src": "/src/images/select.png"
    }
  })])]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-Other-list"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-list-text"]
  }, [_vm._v("Event Fee ")]), _c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-list-text"]
  }, [_vm._v("$0 /person ")])]), _c('text', {
    staticClass: ["CreateEventLastPage-Location-Other-What"]
  }, [_vm._v("What will you be doing?")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["CreateEventLastPage-Location-Check"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Check-title"]
  }, [_vm._v("Item Check List")]), _c('text', {
    staticClass: ["CreateEventLastPage-Location-Check-titleIntroduction"]
  }, [_vm._v("What should people bring to your event? ")]), _c('text', {
    staticClass: ["CreateEventLastPage-Location-Check-selecttext"]
  }, [_vm._v("Item 1")]), _c('div', {
    staticClass: ["CreateEventLastPage-Location-Check-label"]
  }, [_c('image', {
    staticClass: ["CreateEventLastPage-Location-Check-label-img"],
    attrs: {
      "src": "/src/images/createEventLastPage-labeladd.png"
    }
  }), _c('text', {
    staticClass: ["CreateEventLastPage-Location-Check-label-text"]
  }, [_vm._v("Item ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["CreateEventLastPage-Location-Submit"]
  }, [_c('text', {
    staticClass: ["CreateEventLastPage-Location-Submit-text"]
  }, [_vm._v("Submit")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });