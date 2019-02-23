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
/******/ 	return __webpack_require__(__webpack_require__.s = 227);
/******/ })
/************************************************************************/
/******/ ({

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserAddHobbiesPage = __webpack_require__(228);

var _UserAddHobbiesPage2 = _interopRequireDefault(_UserAddHobbiesPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UserAddHobbiesPage2.default.el = '#root';
new Vue(_UserAddHobbiesPage2.default);

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(229)
)

/* script */
__vue_exports__ = __webpack_require__(230)

/* template */
var __vue_template__ = __webpack_require__(231)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/UserAddHobbiesPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-549b42f8"
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

/***/ 229:
/***/ (function(module, exports) {

module.exports = {
  "UserAddHobbiesPage": {
    "height": "80",
    "marginTop": "32",
    "marginLeft": "20",
    "marginRight": "20",
    "borderRadius": "40",
    "backgroundColor": "#F5F5F5"
  },
  "UserAddHobbiesPage_input": {
    "height": "80",
    "paddingLeft": "30",
    "borderRadius": "40",
    "backgroundColor": "#F5F5F5",
    "fontSize": "30"
  },
  "UserAddHobbiesPage_text": {
    "marginTop": "48",
    "marginLeft": "20",
    "marginRight": "20"
  },
  "UserAddHobbiesPage_text_text": {
    "color": "#707070",
    "paddingLeft": "20",
    "paddingBottom": "15",
    "borderBottomWidth": "2",
    "borderBottomColor": "rgba(112,112,112,0.48)",
    "borderBottomStyle": "solid"
  }
}

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _url = __webpack_require__(73);

var _url2 = _interopRequireDefault(_url);

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

var storage = weex.requireModule('storage');
var navigator = weex.requireModule('navigator');
var swifter = weex.requireModule('swifter');
exports.default = {
    data: function data() {
        return {
            text: "",
            status: false
        };
    },

    methods: {
        onchange: function onchange(event) {
            this.text = event.value;
            console.log(event.value);
            if (event.value !== "") {
                this.status = true;
            } else if (event.value == "") {
                this.status = false;
            }
        },
        addHobbies: function addHobbies() {
            var _this = this;

            var list_text = void 0;
            storage.getItem('list_text', function (e) {
                if (e.result === 'success') {
                    list_text = JSON.parse(e.data);
                } else {
                    list_text = [];
                }
                list_text.push({
                    text: '#' + _this.text
                });

                storage.setItem('list_text', JSON.stringify(list_text), function (e) {
                    if (e.result === 'success') {
                        //    navigator.pop({

                        //    })
                        swifter.openPinkPage('user/UserEditProfilePage.js');
                    }
                });
            });
        }
    }
};

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["UserAddHobbiesPage"]
  }, [_c('input', {
    staticClass: ["UserAddHobbiesPage_input"],
    attrs: {
      "autofocus": true,
      "value": ""
    },
    on: {
      "change": _vm.onchange
    }
  })]), _c('div', {
    staticClass: ["UserAddHobbiesPage_text"]
  }, [(_vm.status) ? _c('text', {
    staticClass: ["UserAddHobbiesPage_text_text"],
    on: {
      "click": _vm.addHobbies
    }
  }, [_vm._v("#" + _vm._s(_vm.text))]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = getJumpBaseUrl;
function getJumpBaseUrl(toUrl) {

    var bundleUrl = weex.config.bundleUrl;

    var isnav = true;
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var native;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = "local://" + 'file://assets/dist/';
        native = nativeBase + toUrl + ".js";
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        native = nativeBase + toUrl + ".js";
    } else {
        var host = 'localhost:8081';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
            nativeBase = 'http://' + host + '/';
        } else {
            nativeBase = 'http://' + host + '/';
        }

        native = nativeBase + toUrl + ".html";
    }
    return native;
};

/***/ })

/******/ });