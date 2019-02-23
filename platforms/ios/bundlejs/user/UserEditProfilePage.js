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
/******/ 	return __webpack_require__(__webpack_require__.s = 237);
/******/ })
/************************************************************************/
/******/ ({

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UserEditProfilePage = __webpack_require__(238);

var _UserEditProfilePage2 = _interopRequireDefault(_UserEditProfilePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UserEditProfilePage2.default.el = '#root';
new Vue(_UserEditProfilePage2.default);

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(239)
)

/* script */
__vue_exports__ = __webpack_require__(240)

/* template */
var __vue_template__ = __webpack_require__(241)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/user/UserEditProfilePage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-63a80b18"
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

/***/ 239:
/***/ (function(module, exports) {

module.exports = {
  "UserEditProfilePage": {
    "backgroundColor": "#F0F0F0"
  },
  "EditProfile_information": {
    "marginTop": "30",
    "backgroundColor": "#ffffff"
  },
  "EditProfile_information_list": {
    "paddingBottom": "20",
    "paddingTop": "20",
    "paddingLeft": "34",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(112,112,112,0.41)"
  },
  "information_list_title": {
    "marginBottom": "16",
    "fontSize": "32",
    "color": "#57B1E3"
  },
  "information_list_con": {
    "fontSize": "32",
    "color": "#696969"
  },
  "EditProfile_about": {
    "marginTop": "30",
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "25",
    "paddingBottom": "25",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(112,112,112,0.41)"
  },
  "EditProfile_about_title": {
    "marginBottom": "15",
    "color": "#57B1E3"
  },
  "EditProfile_about_con": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "EditProfile_about_con_text": {
    "width": "522",
    "color": "#696969"
  },
  "EditProfile_about_con_img": {
    "width": "27",
    "height": "45"
  },
  "EditProfile_hobbies": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "20",
    "paddingBottom": "35",
    "backgroundColor": "#ffffff"
  },
  "EditProfile_hobbies_title": {
    "color": "#57B1E3"
  },
  "EditProfile_hobbies_content": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "alignItems": "center",
    "marginTop": "15"
  },
  "EditProfile_hobbies_content_list": {
    "paddingLeft": "46",
    "paddingRight": "46",
    "paddingBottom": "16",
    "paddingTop": "16",
    "marginRight": "16",
    "marginBottom": "20",
    "borderRadius": "36",
    "backgroundColor": "#57B1E3"
  },
  "EditProfile_hobbies_content_list_text": {
    "color": "#ffffff"
  },
  "EditProfile_hobbies_content_list_ion": {
    "position": "absolute",
    "top": "-6",
    "right": "-6",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "40",
    "height": "40",
    "borderRadius": "20",
    "backgroundColor": "#EC2079"
  },
  "EditProfile_hobbies_content_list_ion_text": {
    "color": "#ffffff"
  },
  "EditProfile_hobbies_content_list_jia": {
    "paddingLeft": "60",
    "paddingRight": "60",
    "paddingBottom": "16",
    "paddingTop": "16",
    "marginRight": "16",
    "marginBottom": "20",
    "borderRadius": "36",
    "backgroundColor": "#30E3AC"
  },
  "EditProfile_hobbies_content_list_jiatext": {
    "color": "#ffffff"
  },
  "EditProfile_connection": {
    "marginTop": "30",
    "marginBottom": "75",
    "backgroundColor": "#ffffff"
  },
  "EditProfile_connection_list": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-end",
    "paddingLeft": "33",
    "paddingRight": "33",
    "paddingBottom": "20",
    "paddingTop": "20",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(112,112,112,0.41)"
  },
  "EditProfile_connection_list_title": {
    "flexDirection": "row",
    "alignItems": "flex-end",
    "marginBottom": "18"
  },
  "EditProfile_connection_list_title_img": {
    "width": "50",
    "height": "50",
    "marginRight": "20"
  },
  "EditProfile_connection_list_title_text": {
    "color": "#57B1E3"
  },
  "EditProfile_connection_list_text": {
    "color": "#696969",
    "fontSize": "34"
  }
}

/***/ }),

/***/ 240:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            list_text: [{ text: '#Snooker' }, { text: '#Coffee' }, { text: '#Movie' }, { text: '#Netflix' }]
        };
    },
    created: function created() {
        this.onshow();
    },

    methods: {
        jump: function jump() {
            console.log(weex.config.env.platform);

            this.onhide();

            swifter.openPinkPage('user/UserAddHobbiesPage.js');
        },
        onhide: function onhide() {
            storage.setItem('list_text', JSON.stringify(this.list_text));
        },
        onshow: function onshow() {
            var _this = this;

            storage.getItem('list_text', function (e) {
                if (e.result === 'success') {
                    _this.list_text = JSON.parse(e.data);
                } else {
                    _this.list_text = [];
                }
            });
        }
    }

};

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["UserEditProfilePage"],
    on: {
      "viewappear": _vm.onshow,
      "viewdisappear": _vm.onhide
    }
  }, [_c('scroller', [_vm._m(0), _vm._m(1), _c('div', {
    staticClass: ["EditProfile_hobbies"]
  }, [_c('text', {
    staticClass: ["EditProfile_hobbies_title"]
  }, [_vm._v("Hobbies :")]), _c('div', {
    staticClass: ["EditProfile_hobbies_content"]
  }, [_vm._l((_vm.list_text), function(ltem, index) {
    return _c('div', {
      key: index,
      staticClass: ["EditProfile_hobbies_content_list"]
    }, [_c('text', {
      staticClass: ["EditProfile_hobbies_content_list_text"]
    }, [_vm._v(_vm._s(ltem.text))]), _vm._m(2, true)])
  }), _c('div', {
    staticClass: ["EditProfile_hobbies_content_list_jia"],
    on: {
      "click": _vm.jump
    }
  }, [_c('text', {
    staticClass: ["EditProfile_hobbies_content_list_jiatext"]
  }, [_vm._v("+")])])], 2)]), _vm._m(3)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EditProfile_information"]
  }, [_c('div', {
    staticClass: ["EditProfile_information_list"]
  }, [_c('text', {
    staticClass: ["information_list_title"]
  }, [_vm._v("Name :")]), _c('text', {
    staticClass: ["information_list_con"]
  }, [_vm._v("Stephanie Mak")])]), _c('div', {
    staticClass: ["EditProfile_information_list"]
  }, [_c('text', {
    staticClass: ["information_list_title"]
  }, [_vm._v("Company :")]), _c('text', {
    staticClass: ["information_list_con"]
  }, [_vm._v("Morgan Stanley")])]), _c('div', {
    staticClass: ["EditProfile_information_list"]
  }, [_c('text', {
    staticClass: ["information_list_title"]
  }, [_vm._v("Position :")]), _c('text', {
    staticClass: ["information_list_con"]
  }, [_vm._v("AVP")])]), _c('div', {
    staticClass: ["EditProfile_information_list"]
  }, [_c('text', {
    staticClass: ["information_list_title"]
  }, [_vm._v("Gender :")]), _c('text', {
    staticClass: ["information_list_con"]
  }, [_vm._v("Female")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EditProfile_about"]
  }, [_c('text', {
    staticClass: ["EditProfile_about_title"]
  }, [_vm._v("About Myself :")]), _c('div', {
    staticClass: ["EditProfile_about_con"]
  }, [_c('text', {
    staticClass: ["EditProfile_about_con_text"]
  }, [_vm._v("Stephanie Mak is an Assistant Vice President within the Digital Platforms Team (Online & Mobile). Stephanie is working cross-functionally to develop Morgan Stanley’s Self-Directed Brokerage Digital Product which will be available on Mobile & the Web")]), _c('image', {
    staticClass: ["EditProfile_about_con_img"],
    attrs: {
      "src": "local:///ahead-gray.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EditProfile_hobbies_content_list_ion"]
  }, [_c('text', {
    staticClass: ["EditProfile_hobbies_content_list_ion_text"]
  }, [_vm._v("-")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["EditProfile_connection"]
  }, [_c('div', {
    staticClass: ["EditProfile_connection_list"]
  }, [_c('div', {
    staticClass: ["start"]
  }, [_c('div', {
    staticClass: ["EditProfile_connection_list_title"]
  }, [_c('image', {
    staticClass: ["EditProfile_connection_list_title_img"],
    attrs: {
      "src": "local:///icon_social1.png"
    }
  }), _c('text', {
    staticClass: ["EditProfile_connection_list_title_text"]
  }, [_vm._v("Instagram :")])]), _c('text', {
    staticClass: ["EditProfile_connection_list_text"]
  }, [_vm._v("StephanieMak123")])]), _c('div', {
    staticClass: ["end"]
  }, [_c('image', {
    staticClass: ["EditProfile_about_con_img"],
    attrs: {
      "src": "local:///ahead-gray.png"
    }
  })])]), _c('div', {
    staticClass: ["EditProfile_connection_list"]
  }, [_c('div', {
    staticClass: ["start"]
  }, [_c('div', {
    staticClass: ["EditProfile_connection_list_title"]
  }, [_c('image', {
    staticClass: ["EditProfile_connection_list_title_img"],
    attrs: {
      "src": "local:///icon_social2.png"
    }
  }), _c('text', {
    staticClass: ["EditProfile_connection_list_title_text"]
  }, [_vm._v("Facebook :")])]), _c('text', {
    staticClass: ["EditProfile_connection_list_text"]
  }, [_vm._v("StephanieMak123")])]), _c('div', {
    staticClass: ["end"]
  }, [_c('image', {
    staticClass: ["EditProfile_about_con_img"],
    attrs: {
      "src": "local:///ahead-gray.png"
    }
  })])]), _c('div', {
    staticClass: ["EditProfile_connection_list"]
  }, [_c('div', {
    staticClass: ["start"]
  }, [_c('div', {
    staticClass: ["EditProfile_connection_list_title"]
  }, [_c('image', {
    staticClass: ["EditProfile_connection_list_title_img"],
    attrs: {
      "src": "local:///icon_social3.png"
    }
  }), _c('text', {
    staticClass: ["EditProfile_connection_list_title_text"]
  }, [_vm._v("SnapChat :")])]), _c('text', {
    staticClass: ["EditProfile_connection_list_text"]
  }, [_vm._v("StephanieMak123")])]), _c('div', {
    staticClass: ["end"]
  }, [_c('image', {
    staticClass: ["EditProfile_about_con_img"],
    attrs: {
      "src": "local:///ahead-gray.png"
    }
  })])]), _c('div', {
    staticClass: ["EditProfile_connection_list"]
  }, [_c('div', {
    staticClass: ["start"]
  }, [_c('div', {
    staticClass: ["EditProfile_connection_list_title"]
  }, [_c('image', {
    staticClass: ["EditProfile_connection_list_title_img"],
    attrs: {
      "src": "local:///icon_social4.png"
    }
  }), _c('text', {
    staticClass: ["EditProfile_connection_list_title_text"]
  }, [_vm._v("LinkIn :")])]), _c('text', {
    staticClass: ["EditProfile_connection_list_text"]
  }, [_vm._v("StephanieMak123")])]), _c('div', {
    staticClass: ["end"]
  }, [_c('image', {
    staticClass: ["EditProfile_about_con_img"],
    attrs: {
      "src": "local:///ahead-gray.png"
    }
  })])])])
}]}
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