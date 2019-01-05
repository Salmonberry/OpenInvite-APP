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
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
/******/ })
/************************************************************************/
/******/ ({

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _EventDetailsPage = __webpack_require__(96);

var _EventDetailsPage2 = _interopRequireDefault(_EventDetailsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_EventDetailsPage2.default.el = '#root';
new Vue(_EventDetailsPage2.default);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(97)
)

/* script */
__vue_exports__ = __webpack_require__(98)

/* template */
var __vue_template__ = __webpack_require__(99)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/Home/EventDetailsPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2175569e"
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

/***/ 97:
/***/ (function(module, exports) {

module.exports = {
  "EventDetailsPage-banner": {
    "position": "relative"
  },
  "EventDetailsPage-banner-img": {
    "width": "750",
    "height": "750"
  },
  "EventDetailsPage-banner-retreatx": {
    "position": "absolute",
    "left": "26",
    "top": "44",
    "width": "26",
    "height": "44"
  },
  "EventDetailsPage-content": {
    "marginTop": "35"
  },
  "EventDetailsPage-content-box": {
    "position": "relative",
    "paddingTop": "23",
    "paddingLeft": "26",
    "paddingRight": "26",
    "paddingBottom": "23",
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(112,112,112,0.22)",
    "borderBottomStyle": "solid"
  },
  "EventDetailsPage-content-user-labeltext": {
    "color": "#57B1E3"
  },
  "EventDetailsPage-content-user-nametext": {
    "fontSize": "42",
    "marginTop": "20",
    "marginBottom": "20"
  },
  "EventDetailsPage-content-user-statustext-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "EventDetailsPage-content-user-statustext": {
    "color": "#30E3AC"
  },
  "EventDetailsPage-content-user-statusimg": {
    "width": "34",
    "height": "34",
    "marginLeft": "10"
  },
  "EventDetailsPage-content-userbtn": {
    "position": "absolute",
    "top": "26",
    "right": "26",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "66",
    "height": "66",
    "borderRadius": 50,
    "backgroundColor": "#EC2079",
    "boxShadow": "4px 4px 6px rgba(0, 0, 0, .16)"
  },
  "EventDetailsPage-content-userbtn-img": {
    "width": "30",
    "height": "30"
  },
  "EventDetailsPage-content-user-namepoint": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "EventDetailsPage-content-user-namepointimg": {
    "width": "28",
    "height": "38",
    "marginLeft": "10"
  },
  "EventDetailsPage-content-point-statustext-box": {
    "marginTop": "9"
  },
  "data-text": {
    "marginBottom": "9"
  },
  "EventDetailsPage-content-box-data-btn": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "300",
    "height": "65",
    "backgroundColor": "#30E3AC"
  },
  "EventDetailsPage-content-box-data-btntext": {
    "color": "#ffffff"
  },
  "EventDetailsPage-content-itembox": {
    "position": "relative",
    "paddingTop": "23",
    "paddingRight": "26",
    "paddingBottom": "23",
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(112,112,112,0.22)",
    "borderBottomStyle": "solid"
  },
  "itemtext": {
    "paddingLeft": "26"
  },
  "EventDetailsPage-content-itemlistbox": {
    "marginTop": "14"
  },
  "EventDetailsPage-content-itembox-list": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "26",
    "paddingRight": "26",
    "paddingTop": "18",
    "paddingBottom": "18",
    "backgroundColor": "#F2F2F2"
  },
  "EventDetailsPage-content-itembox-listimg": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "EventDetailsPage-content-itembox-listimg-img": {
    "width": "64",
    "height": "64",
    "marginRight": "12"
  },
  "EventDetailsPage-content-itembox-list-with": {
    "backgroundColor": "#ffffff"
  },
  "EventDetailsPage-content-part-list": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": "18",
    "paddingBottom": "18",
    "borderBottomWidth": "2",
    "borderBottomColor": "#707070",
    "borderBottomStyle": "solid"
  },
  "EventDetailsPage-content-part-user": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "EventDetailsPage-content-part-user-img": {
    "width": "70",
    "height": "70",
    "marginRight": "16"
  },
  "EventDetailsPage-content-part-comment": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingTop": "10",
    "borderRadius": "26",
    "backgroundColor": "#57B1E3"
  },
  "EventDetailsPage-content-part-comment-text": {
    "color": "#ffffff"
  },
  "EventDetailsPage-suspension-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "fixed",
    "bottom": "20",
    "right": "20",
    "width": "156",
    "height": "156",
    "borderRadius": "78",
    "boxShadow": "2px 4px 20px #333333",
    "backgroundColor": "#30E3AC"
  },
  "EventDetailsPage-suspension-btn-text": {
    "color": "#ffffff"
  },
  "EventDetailsPage-suspension-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-around",
    "position": "fixed",
    "transform": "translateY(1850px)",
    "right": 0,
    "width": "750",
    "height": "204",
    "backgroundColor": "#30E3AC",
    "boxShadow": "2px -2px 20px #333333"
  },
  "EventDetailsPage-suspension-box-text": {
    "width": "476",
    "color": "#ffffff",
    "fontSize": "30"
  },
  "EventDetailsPage-suspension-box-img": {
    "width": "66",
    "height": "50"
  },
  "EventDetailsPage-ups": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "width": "750",
    "height": "1500",
    "backgroundColor": "rgba(0,0,0,0.37)"
  },
  "EventDetailsPage-ups-content": {
    "width": "614",
    "height": "462",
    "borderRadius": "18",
    "backgroundColor": "#ffffff",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "EventDetailsPage-ups-content-Closed": {
    "position": "absolute",
    "top": "20",
    "right": "20",
    "width": "42",
    "height": "42"
  },
  "EventDetailsPage-ups-content-text": {
    "width": "376",
    "color": "#696969",
    "fontSize": "34",
    "textAlign": "center"
  },
  "EventDetailsPage-ups-content-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "522",
    "height": "68",
    "marginTop": "47",
    "backgroundColor": "#EC2079",
    "borderRadius": "18"
  },
  "EventDetailsPage-ups-content-btn-text": {
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 98:
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

var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
var swifter = weex.requireModule('swifter');
exports.default = {
    name: 'EventDetailsPage',
    data: function data() {
        return {
            condition: false,
            ups: false
        };
    },

    methods: {
        move: function move() {
            var testEl = this.$refs.test;
            animation.transition(testEl, {
                styles: {
                    opacity: "0"
                },
                duration: 800, //ms
                timingFunction: 'ease',
                needLayout: false,
                delay: 0 //ms
            });

            this.condition = !this.condition;
            this.movetwo();
        },
        movetwo: function movetwo() {
            var that = this;
            var boxs = this.$refs.boxss;
            animation.transition(boxs, {
                styles: {
                    transform: 'translateY(1050px)'
                },
                duration: 800, //ms
                timingFunction: 'ease',
                needLayout: false,
                delay: 0 //ms
            }, function () {
                setTimeout(function () {
                    that.movethree();
                }, 1000);
            });
        },
        movethree: function movethree() {
            var boxs = this.$refs.boxss;
            animation.transition(boxs, {
                styles: {
                    transform: 'translateY(1850px)'
                },
                duration: 800, //ms
                timingFunction: 'ease',
                needLayout: false,
                delay: 0 //ms
            });
        },
        close: function close() {
            this.ups = !this.ups;
        },
        btnclose: function btnclose() {
            this.condition = false;
            this.ups = !this.ups;
        },
        onShareClick: function onShareClick() {
            swifter.openWhitePage('createEvent/CreateEventInviteContactsPage.js');
        },
        onScroll: function onScroll(event) {
            swifter.notifyContentScroll(event.contentOffset.y);
        }
    }
};

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    on: {
      "scroll": _vm.onScroll
    }
  }, [_vm._m(0), _c('div', {
    staticClass: ["EventDetailsPage-content"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage-content-box"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-user-labeltext"]
  }, [_vm._v("#Coffee #Beverage")]), _c('text', {
    staticClass: ["EventDetailsPage-content-user-nametext"]
  }, [_vm._v("Latte Please !")]), (_vm.condition) ? _c('div', {
    staticClass: ["EventDetailsPage-content-user-statustext-box"],
    on: {
      "click": _vm.close
    }
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-user-statustext"]
  }, [_vm._v("I’m going")]), _c('image', {
    staticClass: ["EventDetailsPage-content-user-statusimg"],
    attrs: {
      "src": "local:///statusCorrect.png"
    }
  })]) : _vm._e(), _c('div', {
    staticClass: ["EventDetailsPage-content-userbtn"],
    on: {
      "click": _vm.onShareClick
    }
  }, [_c('image', {
    staticClass: ["EventDetailsPage-content-userbtn-img"],
    attrs: {
      "src": "local:///sharing-interface.png"
    }
  })])]), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5)])]), _c('div', {
    ref: "test",
    staticClass: ["EventDetailsPage-suspension-btn"],
    on: {
      "click": _vm.move
    }
  }, [_c('text', {
    staticClass: ["EventDetailsPage-suspension-btn-text"]
  }, [_vm._v("JOIN")])]), _c('div', {
    ref: "boxss",
    staticClass: ["EventDetailsPage-suspension-box"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-suspension-box-text"]
  }, [_vm._v("The event was successfully add to your upcoming event !")]), _c('image', {
    staticClass: ["EventDetailsPage-suspension-box-img"],
    attrs: {
      "src": "local:///checked.png"
    }
  })]), (_vm.ups) ? _c('div', {
    staticClass: ["EventDetailsPage-ups"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage-ups-content"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage-ups-content-Closed"],
    attrs: {
      "src": "local:///eventDetailsPage-ups-content-Closed.png"
    },
    on: {
      "click": _vm.close
    }
  }), _c('text', {
    staticClass: ["EventDetailsPage-ups-content-text"]
  }, [_vm._v("Are you sure you cannot attend this event?")]), _c('div', {
    staticClass: ["EventDetailsPage-ups-content-btn"],
    on: {
      "click": _vm.btnclose
    }
  }, [_c('text', {
    staticClass: ["EventDetailsPage-ups-content-btn-text"]
  }, [_vm._v("I can’t attend this event")])])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage-banner"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage-banner-img"],
    attrs: {
      "src": "local:///b7176d9c4af27430c302b792cbd2315c.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage-content-box"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-user-labeltext"]
  }, [_vm._v("Location : ")]), _c('div', {
    staticClass: ["EventDetailsPage-content-user-namepoint"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-user-nametext"]
  }, [_vm._v("ABC Cafe")]), _c('image', {
    staticClass: ["EventDetailsPage-content-user-namepointimg"],
    attrs: {
      "src": "local:///maps-and-flags.png"
    }
  })]), _c('text', {
    staticClass: ["EventDetailsPage-content-point-statustext"]
  }, [_vm._v("C,12/F, ABCD street , Hong Kong")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage-content-box"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-user-labeltext"]
  }, [_vm._v("Date :")]), _c('div', {
    staticClass: ["EventDetailsPage-content-point-statustext-box"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-point-statustext", "data-text"]
  }, [_vm._v("I’m going")]), _c('text', {
    staticClass: ["EventDetailsPage-content-point-statustext", "data-text"]
  }, [_vm._v("I’m going")])]), _c('div', {
    staticClass: ["EventDetailsPage-content-box-data-btn"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-box-data-btntext"]
  }, [_vm._v("You Are Available")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage-content-box"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-user-labeltext"]
  }, [_vm._v("About :")]), _c('text', {
    staticClass: ["EventDetailsPage-content-about-content"]
  }, [_vm._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage-content-itembox"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-user-labeltext", "itemtext"]
  }, [_vm._v("Item Check List :")]), _c('div', {
    staticClass: ["EventDetailsPage-content-itemlistbox"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage-content-itembox-list"]
  }, [_c('text', [_vm._v("Switch")]), _c('div', {
    staticClass: ["EventDetailsPage-content-itembox-listimg"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage-content-itembox-listimg-img"],
    attrs: {
      "src": "local:///addimg.png"
    }
  }), _c('image', {
    staticClass: ["EventDetailsPage-content-itembox-listimg-img"],
    attrs: {
      "src": "local:///add.png"
    }
  })])]), _c('div', {
    staticClass: ["EventDetailsPage-content-itembox-list", "EventDetailsPage-content-itembox-list-with"]
  }, [_c('text', [_vm._v("Switch")]), _c('div', {
    staticClass: ["EventDetailsPage-content-itembox-listimg"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage-content-itembox-listimg-img"],
    attrs: {
      "src": "local:///addimg.png"
    }
  }), _c('image', {
    staticClass: ["EventDetailsPage-content-itembox-listimg-img"],
    attrs: {
      "src": "local:///add.png"
    }
  })])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EventDetailsPage-content-box"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-user-labeltext"]
  }, [_vm._v("Participant (12) :")]), _c('div', {
    staticClass: ["EventDetailsPage-content-part-list"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage-content-part-user"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage-content-part-user-img"],
    attrs: {
      "src": "local:///da6aa70caa008d400b6ad82803372adb.png"
    }
  }), _c('text', {
    staticClass: ["EventDetailsPage-content-part-user-text"]
  }, [_vm._v("John Nixon")])]), _c('div', {
    staticClass: ["EventDetailsPage-content-part-comment"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-part-comment-text"]
  }, [_vm._v("1st Degree Contact")])])]), _c('div', {
    staticClass: ["EventDetailsPage-content-part-list"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage-content-part-user"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage-content-part-user-img"],
    attrs: {
      "src": "local:///da6aa70caa008d400b6ad82803372adb.png"
    }
  }), _c('text', {
    staticClass: ["EventDetailsPage-content-part-user-text"]
  }, [_vm._v("John Nixon")])]), _c('div', {
    staticClass: ["EventDetailsPage-content-part-comment"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-part-comment-text"]
  }, [_vm._v("1st Degree Contact")])])]), _c('div', {
    staticClass: ["EventDetailsPage-content-part-list"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage-content-part-user"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage-content-part-user-img"],
    attrs: {
      "src": "local:///da6aa70caa008d400b6ad82803372adb.png"
    }
  }), _c('text', {
    staticClass: ["EventDetailsPage-content-part-user-text"]
  }, [_vm._v("John Nixon")])]), _c('div', {
    staticClass: ["EventDetailsPage-content-part-comment"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-part-comment-text"]
  }, [_vm._v("1st Degree Contact")])])]), _c('div', {
    staticClass: ["EventDetailsPage-content-part-list"]
  }, [_c('div', {
    staticClass: ["EventDetailsPage-content-part-user"]
  }, [_c('image', {
    staticClass: ["EventDetailsPage-content-part-user-img"],
    attrs: {
      "src": "local:///da6aa70caa008d400b6ad82803372adb.png"
    }
  }), _c('text', {
    staticClass: ["EventDetailsPage-content-part-user-text"]
  }, [_vm._v("John Nixon")])]), _c('div', {
    staticClass: ["EventDetailsPage-content-part-comment"]
  }, [_c('text', {
    staticClass: ["EventDetailsPage-content-part-comment-text"]
  }, [_vm._v("1st Degree Contact")])])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });