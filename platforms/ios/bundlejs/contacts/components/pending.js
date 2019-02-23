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
/******/ 	return __webpack_require__(__webpack_require__.s = 101);
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/contacts/components/source.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-628be511"
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
  "source": {
    "marginTop": "50",
    "marginBottom": "50",
    "marginLeft": "20",
    "marginRight": "20",
    "position": "relative"
  },
  "search-input": {
    "marginLeft": "10",
    "paddingLeft": "150",
    "height": "80",
    "borderRadius": "50",
    "backgroundColor": "#EDEDED",
    "fontSize": "40"
  },
  "icon_search": {
    "position": "absolute",
    "left": "55",
    "marginTop": "-20",
    "top": "36"
  }
}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pending = __webpack_require__(24);

var _pending2 = _interopRequireDefault(_pending);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pending2.default.el = '#root';
new Vue(_pending2.default);

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


var swifter = weex.requireModule('swifter');

exports.default = {
  name: 'ContactlistpageSource',
  methods: {
    onSearchInputClick: function onSearchInputClick() {
      swifter.openWhitePage('contacts/ContactsSearchPage.js');
    }
  }
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/contacts/components/pending.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-38f84491"
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

/***/ 25:
/***/ (function(module, exports) {

module.exports = {
  "createGroud": {
    "flexDirection": "row"
  },
  "list": {
    "height": "850"
  },
  "count": {
    "fontSize": "48",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "indicator": {
    "height": "40",
    "width": "40",
    "color": "#45b5f0"
  },
  "row": {
    "backgroundColor": "#ffffff",
    "width": "750"
  },
  "group": {
    "borderBottomWidth": "2",
    "borderBottomColor": "#c0c0c0",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "group_left": {
    "flexDirection": "row"
  },
  "group_right": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "width": "230"
  },
  "text": {
    "paddingLeft": "50",
    "lineHeight": "120",
    "fontSize": "38",
    "color": "#707070"
  },
  "button": {
    "paddingTop": "32",
    "position": "relative"
  },
  "green": {
    "lineHeight": "120",
    "width": "58",
    "height": "56",
    "backgroundColor": "#00CB8C",
    "borderRadius": 50
  },
  "red": {
    "backgroundColor": "#DD4040"
  },
  "icon": {
    "position": "absolute",
    "top": "47",
    "left": "8"
  },
  "amend": {
    "top": "47",
    "left": "17"
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _source = __webpack_require__(0);

var _source2 = _interopRequireDefault(_source);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

module.exports = {
  name: 'ContactlistpagePending',
  components: {
    ContactlistpageSource: _source2.default
  },
  data: function data() {
    return {
      trueimge: 'local:///right.png',
      falseimge: 'local:///close.png',
      rows: [{
        group: 'Vivian Adams',
        imgurl: 'local:///user_picture24.png'
      }, {
        group: 'Ben Burke',
        imgurl: 'local:///user_picture7.png'
      }],
      userInfo: {
        userName: 'Vivian Adams',
        userSurname: 'Maggie',
        userPicture: 'local:///user_picture24.png',
        userRelative: '2nd Degree Contact ',
        userContacts: ['local:///user_picture2.png'],
        userAbout: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        isFollow: false
      }
    };
  },

  methods: {
    onContactClick: function onContactClick(contactName) {

      if (contactName != this.userInfo.userName) return;

      //保存用户信息后跳转页面
      storage.setItem('originPage', 'pendingPage');

      storage.setItem('userInfo', JSON.stringify(this.userInfo), function () {

        swifter.openPinkPage('user/UserDetailsAbouttPage.js', 'Vivian');
      });
    }
  }
};

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["liz"]
  }, [_c('contactlistpage-source'), _c('div', {
    staticClass: ["list"]
  }, _vm._l((_vm.rows), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: ["row"],
      appendAsTree: true,
      attrs: {
        "append": "tree",
        "index": i
      },
      on: {
        "appear": function($event) {
          _vm.onappear(i, $event)
        },
        "disappear": function($event) {
          _vm.ondisappear(i, $event)
        }
      }
    }, [_c('div', {
      staticClass: ["group"]
    }, [_c('div', {
      staticClass: ["group_left"],
      on: {
        "click": function($event) {
          _vm.onContactClick(item.group)
        }
      }
    }, [_c('image', {
      staticStyle: {
        width: "120px",
        height: "120px"
      },
      attrs: {
        "src": item.imgurl
      }
    }), _c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(item.group))])]), _c('div', {
      staticClass: ["group_right"]
    }, [_c('div', {
      staticClass: ["button"]
    }, [_c('div', {
      staticClass: ["green"]
    }), _c('image', {
      staticClass: ["icon"],
      staticStyle: {
        width: "37px",
        height: "27px"
      },
      attrs: {
        "src": _vm.trueimge
      }
    })]), _c('div', {
      staticClass: ["button"]
    }, [_c('div', {
      staticClass: ["green", "red"]
    }), _c('image', {
      staticClass: ["icon", "amend"],
      staticStyle: {
        width: "26px",
        height: "26px"
      },
      attrs: {
        "src": _vm.falseimge
      }
    })])])])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["source"]
  }, [_c('input', {
    staticClass: ["search-input"],
    attrs: {
      "type": "text",
      "placeholder": "Name/#"
    },
    on: {
      "click": _vm.onSearchInputClick
    }
  }), _c('image', {
    staticClass: ["icon_search"],
    staticStyle: {
      width: "50px",
      height: "50px"
    },
    attrs: {
      "src": "local:///search.png"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });