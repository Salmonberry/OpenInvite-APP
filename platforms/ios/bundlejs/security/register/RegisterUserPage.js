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


var _RegisterUserPage = __webpack_require__(206);

var _RegisterUserPage2 = _interopRequireDefault(_RegisterUserPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_RegisterUserPage2.default.el = '#root';
new Vue(_RegisterUserPage2.default);

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(207)
)

/* script */
__vue_exports__ = __webpack_require__(208)

/* template */
var __vue_template__ = __webpack_require__(209)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/security/register/RegisterUserPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5f926d53"
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

/***/ 207:
/***/ (function(module, exports) {

module.exports = {
  "RegisterUserPage-Userimgbox": {
    "flexDirection": "row",
    "justifyContent": "center",
    "position": "relative",
    "marginTop": "72"
  },
  "RegisterUserPage-Userimg": {
    "width": "248",
    "height": "258"
  },
  "RegisterUserPage-Userimgadd": {
    "width": "44",
    "height": "44"
  },
  "RegisterUserPage-content": {
    "paddingBottom": "149"
  },
  "RegisterUserPage-content-title": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "72",
    "marginTop": "22",
    "paddingLeft": "70",
    "backgroundColor": "#57B1E3"
  },
  "RegisterUserPage-content-titletex": {
    "fontSize": "30",
    "color": "#ffffff"
  },
  "RegisterUserPage-content-list": {
    "marginTop": "60"
  },
  "RegisterUserPage-content-listtext": {
    "paddingLeft": "70",
    "marginBottom": "6",
    "fontSize": "30",
    "color": "#707070"
  },
  "RegisterUserPage-content-listinput-box": {
    "height": "60",
    "marginLeft": "30",
    "marginRight": "30",
    "marginTop": "6",
    "backgroundColor": "#F7F7F7",
    "borderRadius": "44"
  },
  "RegisterUserPage-content-listinput": {
    "height": "60",
    "borderRadius": "44",
    "backgroundColor": "#F7F7F7"
  },
  "RegisterUserPage-content-newadd": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "390",
    "height": "60",
    "marginLeft": "30",
    "marginTop": "30",
    "backgroundColor": "#EC2079",
    "borderRadius": "44"
  },
  "RegisterUserPage-content-newaddtext": {
    "color": "#ffffff",
    "fontSize": "30"
  },
  "RegisterUserPage-content-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative",
    "top": "35",
    "left": "600",
    "width": "114",
    "height": "114",
    "backgroundColor": "#EC2079",
    "borderRadius": "57"
  },
  "RegisterUserPage-content-btnimg": {
    "width": "46",
    "height": "30"
  },
  "RegisterUserPage-mask": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "width": "750",
    "height": "1500",
    "backgroundColor": "rgba(0,0,0,0.47)"
  },
  "RegisterUserPage-mask-btnbox": {
    "position": "absolute",
    "bottom": "250",
    "left": 0,
    "width": "734",
    "marginLeft": "8",
    "marginRight": "8"
  },
  "RegisterUserPage-mask-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "120",
    "borderRadius": "18",
    "backgroundColor": "rgba(248,248,248,0.82)"
  },
  "RegisterUserPage-mask-btncancel": {
    "marginTop": "12",
    "marginBottom": "12"
  },
  "RegisterUserPage-mask-btn-text": {
    "fontSize": "40"
  },
  "RegisterUserPage-mask-btn-text-cancel": {
    "fontSize": "40",
    "color": "#EC2079"
  }
}

/***/ }),

/***/ 208:
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

var swifter = weex.requireModule('swifter');
exports.default = {
    name: "RegisterUserPage",
    data: function data() {
        return {
            dd: false,
            srcurl: "local:///registerUserPage-Userimg.png",
            Userimgadd: 'local:///registerUserPage-Userimgadd.png'
        };
    },

    methods: {
        show: function show() {
            this.dd = !this.dd;
        },
        imgadd: function imgadd() {
            this.srcurl = "local:///registerUserPage-Userimgimg.png", this.Userimgadd = "local:///refreshbutton.png", this.dd = !this.dd;
        },
        onAheadClick: function onAheadClick() {
            swifter.openTransparentPage('register/RegisterStartPage.js');
        }
    }

};

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage"]
  }, [_c('scroller', [_c('div', {
    staticClass: ["RegisterUserPage-Userimgbox"]
  }, [_c('image', {
    staticClass: ["RegisterUserPage-Userimg"],
    attrs: {
      "src": _vm.srcurl
    },
    on: {
      "click": _vm.show
    }
  }), _c('image', {
    staticClass: ["RegisterUserPage-Userimgadd"],
    attrs: {
      "src": _vm.Userimgadd
    }
  })]), _c('div', {
    staticClass: ["RegisterUserPage-content"]
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6), _c('div', {
    staticClass: ["RegisterUserPage-content-btn"],
    on: {
      "click": _vm.onAheadClick
    }
  }, [_c('image', {
    staticClass: ["RegisterUserPage-content-btnimg"],
    attrs: {
      "src": "local:///ahead.png"
    }
  })])])]), (_vm.dd) ? _c('div', {
    staticClass: ["RegisterUserPage-mask"]
  }, [_c('div', {
    staticClass: ["RegisterUserPage-mask-btnbox"]
  }, [_c('div', {
    staticClass: ["RegisterUserPage-mask-btn", "RegisterUserPage-mask-btngallery"],
    on: {
      "click": _vm.imgadd
    }
  }, [_c('text', {
    staticClass: ["RegisterUserPage-mask-btn-text"]
  }, [_vm._v("From gallery")])]), _vm._m(7), _vm._m(8)])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage-content-title"]
  }, [_c('text', {
    staticClass: ["RegisterUserPage-content-titletex"]
  }, [_vm._v("Work")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage-content-list"]
  }, [_c('text', {
    staticClass: ["RegisterUserPage-content-listtext"]
  }, [_vm._v("Industry ")]), _c('div', {
    staticClass: ["RegisterUserPage-content-listinput-box"]
  }, [_c('input', {
    staticClass: ["RegisterUserPage-content-listinput"]
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage-content-list"]
  }, [_c('text', {
    staticClass: ["RegisterUserPage-content-listtext"]
  }, [_vm._v("Company ")]), _c('div', {
    staticClass: ["RegisterUserPage-content-listinput-box"]
  }, [_c('input', {
    staticClass: ["RegisterUserPage-content-listinput"]
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage-content-list"]
  }, [_c('text', {
    staticClass: ["RegisterUserPage-content-listtext"]
  }, [_vm._v("Title ")]), _c('div', {
    staticClass: ["RegisterUserPage-content-listinput-box"]
  }, [_c('input', {
    staticClass: ["RegisterUserPage-content-listinput"]
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage-content-title"]
  }, [_c('text', {
    staticClass: ["RegisterUserPage-content-titletex"]
  }, [_vm._v("Education")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage-content-list"]
  }, [_c('text', {
    staticClass: ["RegisterUserPage-content-listtext"]
  }, [_vm._v("Education ")]), _c('div', {
    staticClass: ["RegisterUserPage-content-listinput-box"]
  }, [_c('input', {
    staticClass: ["RegisterUserPage-content-listinput"]
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage-content-newadd"]
  }, [_c('text', {
    staticClass: ["RegisterUserPage-content-newaddtext"]
  }, [_vm._v("+ add new education")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage-mask-btn", "RegisterUserPage-mask-btncamera"]
  }, [_c('text', {
    staticClass: ["RegisterUserPage-mask-btn-text"]
  }, [_vm._v("Camera")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterUserPage-mask-btn", "RegisterUserPage-mask-btncancel"]
  }, [_c('text', {
    staticClass: ["RegisterUserPage-mask-btn-text-cancel"]
  }, [_vm._v("Cancel")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });