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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

/***/ 11:
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

exports.default = {
  name: 'ContactlistpageSource'
};

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["source"]
  }, [_c('input', {
    staticClass: ["search-input"],
    attrs: {
      "type": "text",
      "placeholder": "Name/#"
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
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "marginTop": "84",
    "paddingBottom": "200"
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
  "title": {
    "backgroundColor": "#ebebeb",
    "height": "80"
  },
  "title_num": {
    "lineHeight": "80",
    "paddingLeft": "70",
    "color": "#454545"
  },
  "item": {
    "flexDirection": "row",
    "borderBottomWidth": "2",
    "borderBottomColor": "#c0c0c0",
    "paddingTop": "24",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor:active": "#00bdff"
  },
  "item-title": {
    "paddingLeft": "50",
    "lineHeight": "120",
    "fontSize": "38",
    "color": "#707070"
  },
  "displayComponents": {
    "position": "fixed",
    "top": "174",
    "paddingLeft": "44"
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _display = __webpack_require__(4);

var _display2 = _interopRequireDefault(_display);

var _source = __webpack_require__(5);

var _source2 = _interopRequireDefault(_source);

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

var swifter = weex.requireModule('swifter');
module.exports = {
  name: 'ContactlistpageFriendlist',
  components: {
    DisplayComponent: _display2.default, ContactlistpageSource: _source2.default
  },
  data: function data() {
    return {
      appearMin: 1,
      appearMax: 1,
      appearIds: [],
      rows: [{
        id: 'A',
        list: [{ imgurl: '/src/images/user_picture1.png',
          name: 'Alice Gill' }, { imgurl: '/src/images/user_picture13.png',
          name: 'Adam Smith ' }, { imgurl: '/src/images/user_picture14.png',
          name: 'Albert Gatewood' }]
      }, {
        id: 'B',
        list: [{
          imgurl: '/src/images/user_picture15.png',
          name: 'Brian Costilla'
        }, {
          imgurl: '/src/images/user_picture16.png',
          name: 'Billy Marrone'
        }, {
          imgurl: '/src/images/user_picture17.png',
          name: 'Bruce Wayne'
        }]
      }, {
        id: 'C',
        list: [{
          imgurl: '/src/images/user_picture18.png',
          name: 'Carolyn Zamora'
        }]
      }, {
        id: 'D',
        list: [{
          imgurl: '/src/images/user_picture19.png',
          name: 'Daniel White'
        }]
      }]
    };
  },
  methods: {
    onappear: function onappear(index, e) {},
    ondisappear: function ondisappear(index, e) {},
    onFriendClick: function onFriendClick() {
      swifter.openPinkPage('user/UserDetailsAbouttPage.js');
    }
  }
};

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: ["liz"]
  }, [_c('contactlistpage-source'), _c('display-component', {
    staticClass: ["displayComponents"]
  }), _c('div', {
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
        },
        "click": _vm.onFriendClick
      }
    }, [_c('div', {
      staticClass: ["title"]
    }, [_c('text', {
      staticClass: ["title_num"]
    }, [_vm._v(_vm._s(item.id))])]), _vm._l((item.list), function(item, index) {
      return _c('div', {
        key: index,
        staticClass: ["item"]
      }, [_c('image', {
        staticClass: ["item-image"],
        staticStyle: {
          width: "120px",
          height: "120px"
        },
        attrs: {
          "src": item.imgurl
        }
      }), _c('text', {
        staticClass: ["item-title"]
      }, [_vm._v(_vm._s(item.name))])])
    })], 2)
  }))], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/contacts/components/display.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5ccb463c"
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
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

/***/ 6:
/***/ (function(module, exports) {

module.exports = {
  "title": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "fontWeight": "800"
  },
  "icon": {
    "width": 0,
    "height": 0,
    "borderLeft": "20px solid transparent",
    "borderRight": "20px solid transparent",
    "borderTop": "30px solid #57B1E3",
    "marginLeft": "20",
    "marginTop": "10"
  },
  "panel": {
    "width": "600",
    "paddingTop": "30",
    "backgroundColor": "#FFFFFF",
    "boxShadow": "0px 5px 5px 0px #ccc"
  },
  "text": {
    "color": "#707070"
  },
  "arrow": {
    "width": "16",
    "height": "14",
    "marginLeft": "30"
  }
}

/***/ }),

/***/ 7:
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

var animation = weex.requireModule('animation');
exports.default = {
  name: "DisplayComponent",
  data: function data() {
    return {
      text: "Display:1st Degree Contact",
      isDisplay: false,
      title: {
        color: '#57B1E3',
        fontSize: '40px',
        weight: 'bolder'
      },
      lists: [{ text: "2nd Degree Contact" }, { text: "1st & 2nd Degree Contact" }, { text: "Star Friends Only" }],
      imgurl: 'local:///select.png'
    };
  },

  methods: {
    ondisplay: function ondisplay() {
      this.isDisplay = !this.isDisplay;

      if (this.isDisplay) {
        this.enabledisplay();
      } else {
        this.unenableDisplay();
      }
    },
    enabledisplay: function enabledisplay() {
      var display = this.$refs.panel; //綁定對象
      // 調用
      animation.transition(display, {
        styles: {
          display: 'block'
        },
        duration: 5000, //持續時間
        timingFunction: 'ease', //緩動模式
        delay: 0 //延遲屬性
      });
    },
    unenableDisplay: function unenableDisplay() {
      var display = this.$refs.panel; //綁定對象
      // 調用
      animation.transition(display, {
        styles: {
          // backgroundColor:'yellow'
          display: 'none'
        },
        duration: 10000, //持續時間
        timingFunction: 'ease', //緩動模式
        delay: 0 //延遲屬性
      });
    }
  }
};

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["liz"]
  }, [_c('div', {
    staticClass: ["title"],
    on: {
      "click": _vm.ondisplay
    }
  }, [_c('text', {
    style: _vm.title
  }, [_vm._v(_vm._s(_vm.text))]), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "local:///contactCreateGroupPage-searadd.png"
    }
  })]), (_vm.isDisplay) ? _c('list', {
    ref: "panel",
    staticClass: ["panel"]
  }, _vm._l((_vm.lists), function(num, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(num.text))])])])
  })) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/contacts/components/friendList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e527f45c"
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

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _friendList = __webpack_require__(9);

var _friendList2 = _interopRequireDefault(_friendList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_friendList2.default.el = '#root';
new Vue(_friendList2.default);

/***/ })

/******/ });