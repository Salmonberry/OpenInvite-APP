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
/******/ 	return __webpack_require__(__webpack_require__.s = 174);
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

/***/ 10:
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

/***/ 11:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["liz"]
  }, [_c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    style: _vm.title
  }, [_vm._v(_vm._s(_vm.text))]), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": "local:///contactCreateGroupPage-searadd.png"
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 12:
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

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/contacts/components/createcontactingGroup.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7b8c29db"
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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(175);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(176)
)

/* script */
__vue_exports__ = __webpack_require__(177)

/* template */
var __vue_template__ = __webpack_require__(178)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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

/***/ 176:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41b883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  },
  "bar": {
    "position": "fixed",
    "width": 100,
    "bottom": "-250"
  }
}

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoginPage = __webpack_require__(41);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _ContactListPage = __webpack_require__(37);

var _ContactListPage2 = _interopRequireDefault(_ContactListPage);

var _barComponent = __webpack_require__(33);

var _barComponent2 = _interopRequireDefault(_barComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'App',
  components: {
    login: _LoginPage2.default, ContactListPage: _ContactListPage2.default, ContactlistpagebarComponent: _barComponent2.default
  },
  data: function data() {
    return {};
  }
}; //
//
//
//
//
//
//
//

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('login')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = {
  "liz": {
    "backgroundColor": "#ffffff"
  },
  "createGroud": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "title": {
    "color": "#45b5f0",
    "fontSize": "34",
    "lineHeight": "100"
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
  "group-icon": {
    "paddingLeft": "40",
    "marginRight": "24"
  },
  "group": {
    "borderBottomWidth": "2",
    "borderBottomColor": "#c0c0c0",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "row"
  },
  "text": {
    "paddingLeft": "50",
    "lineHeight": "120",
    "fontSize": "38",
    "color": "#707070"
  }
}

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _source = __webpack_require__(0);

var _source2 = _interopRequireDefault(_source);

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

module.exports = {
  name: 'ContactlistpageGroup',
  components: {
    ContactlistpageSource: _source2.default
  },
  data: function data() {
    return {
      imgurl: 'local:///createEventLastPage-labeladd.png',
      text: 'Create Group',
      rows: [{
        group: 'Happy Friday',
        imgurl: 'local:///user_picture22.png'
      }, {
        group: 'Music LOver',
        imgurl: 'local:///user_picture23.png'
      }]
    };
  },
  methods: {
    onCreateGroupClick: function onCreateGroupClick() {
      swifter.openBluePage('contacts/ContactAddFriendsPage.js');
    }
  }
};

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

exports.default = {
  name: 'ContactlistpageSource'
};

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["liz"]
  }, [_c('contactlistpage-source'), _c('div', {
    staticClass: ["createGroud"],
    on: {
      "click": _vm.onCreateGroupClick
    }
  }, [_c('div', {
    staticClass: ["group-icon"]
  }, [_c('image', {
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      "src": _vm.imgurl
    }
  })]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.text))])]), _c('div', {
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
    }, [_vm._v(_vm._s(item.group))])])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = {
  "display-title": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "40",
    "fontWeight": "800"
  },
  "list": {
    "marginTop": "50",
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
    "paddingLeft": "44"
  },
  "panel": {
    "width": "600",
    "paddingTop": "30",
    "backgroundColor": "#FFFFFF"
  },
  "text": {
    "color": "#707070"
  },
  "arrow": {
    "alignSelf": "center",
    "width": "16",
    "height": "14",
    "marginLeft": "30"
  },
  "star-icon": {
    "alignSelf": "center",
    "width": "26",
    "height": "24",
    "marginRight": "16"
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _display = __webpack_require__(8);

var _display2 = _interopRequireDefault(_display);

var _source = __webpack_require__(0);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
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
        list: [{ imgurl: 'local:///user_picture1.png',
          name: 'Alice Gill' }, { imgurl: 'local:///user_picture13.png',
          name: 'Adam Smith ' }, { imgurl: 'local:///user_picture14.png',
          name: 'Albert Gatewood' }]
      }, {
        id: 'B',
        list: [{
          imgurl: 'local:///user_picture15.png',
          name: 'Brian Costilla'
        }, {
          imgurl: 'local:///user_picture16.png',
          name: 'Billy Marrone'
        }, {
          imgurl: 'local:///user_picture17.png',
          name: 'Bruce Wayne'
        }]
      }, {
        id: 'C',
        list: [{
          imgurl: 'local:///user_picture18.png',
          name: 'Carolyn Zamora'
        }]
      }, {
        id: 'D',
        list: [{
          imgurl: 'local:///user_picture19.png',
          name: 'Daniel White'
        }]
      }],
      lists: [{ text: "2nd Degree Contact", isStar: false }, { text: "1st & 2nd Degree Contact", isStar: false }, { text: "Star Friends Only", isStar: true }],
      title: {
        color: '#57B1E3',
        fontSize: '40px',
        weight: 'bolder'
      },
      text: "Display:1st Degree Contact",
      imgurl: 'local:///select.png',
      isDisplay: false
    };
  },
  methods: {
    onappear: function onappear(index, e) {},
    ondisappear: function ondisappear(index, e) {},


    ondisplay: function ondisplay() {

      this.isDisplay = !this.isDisplay;

      // if(this.isDisplay){
      //   this.enabledisplay()
      // }
      // else{
      //   this.unenableDisplay();
      // }
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
    },
    onFriendClick: function onFriendClick() {
      swifter.openPinkPage('user/UserDetailsAbouttPage.js', 'Maggie');
    }
  }
};

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: ["liz"]
  }, [_c('contactlistpage-source'), _c('div', {
    staticClass: ["display-title"],
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
  })]), _c('div', {
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
  })), (_vm.isDisplay) ? _c('list', {
    ref: "panel",
    staticClass: ["panel"],
    staticStyle: {
      position: "absolute",
      top: "220px",
      left: "46px",
      paddingBottom: "30px",
      boxShadow: "0px 5px 5px 0px #ccc",
      height: "224px"
    }
  }, _vm._l((_vm.lists), function(num, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"],
      staticStyle: {
        flexDirection: "row",
        paddingLeft: "28px"
      }
    }, [(num.isStar) ? _c('image', {
      staticClass: ["star-icon"],
      attrs: {
        "src": "local:///star_icon.png"
      }
    }) : _vm._e(), _c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(num.text))])])])
  })) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

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
    "top": "40",
    "left": "6"
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
        width: "48px",
        height: "44px"
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

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(31)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/contacts/components/header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1aa9d683"
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

/***/ 29:
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "position": "relative",
    "paddingTop": "30",
    "backgroundColor": "#ec2079",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "height": "330"
  },
  "header_top": {
    "top": "24",
    "textAlign": "center",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "paddingTop": 0,
    "paddingRight": "60",
    "paddingBottom": 0,
    "paddingLeft": "60"
  },
  "text_contact": {
    "color": "#F0F8FF",
    "fontSize": "50"
  },
  "header_bottom": {
    "marginTop": "50",
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "whiteLine": {
    "borderBottom": "15px solid #fff"
  },
  "list": {
    "position": "absolute",
    "top": "500"
  }
}

/***/ }),

/***/ 3:
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _friendList = __webpack_require__(12);

var _friendList2 = _interopRequireDefault(_friendList);

var _pending = __webpack_require__(24);

var _pending2 = _interopRequireDefault(_pending);

var _createcontactingGroup = __webpack_require__(17);

var _createcontactingGroup2 = _interopRequireDefault(_createcontactingGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "ContactlistpageHeader",
  components: {
    ContactlistpageFriendlist: _friendList2.default,
    ContactlistpagePending: _pending2.default,
    ContactlistpageGroup: _createcontactingGroup2.default

  },
  methods: {
    change: function change(index) {
      this.changWhite = index;
      console.log(index);
      this.tabChange(tabItem);
    },
    tabChange: function tabChange(tabItem) {
      this.currentView = tabItem;
    }
  },
  data: function data() {
    return {
      child1: 'ContactlistpageFriendlist',
      child2: 'ContactlistpagecurrentViewGroup',
      child3: 'ContactlistpagePending',
      currentView: 'ContactlistpageFriendlist', //默認選中的第一項
      changWhite: 0,
      list: [{
        num: '54',
        title: 'Friends',
        child: this.Friends }, {
        num: '6',
        title: 'Group',
        child: this.Groups
      }, {
        num: '3',
        title: 'Pending',
        child: this.Pending
      }]
    };
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["header_bottom"]
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["outLine"],
      class: {
        whiteLine: _vm.changWhite == index
      },
      on: {
        "click": function($event) {
          _vm.change(index, item.child)
        }
      }
    }, [_c('div', {
      staticClass: ["options"]
    }, [_c('text', {
      directives: [{
        name: "text",
        rawName: "v-text",
        value: (item.num),
        expression: "item.num"
      }],
      staticClass: ["number"]
    }), _c('text', {
      directives: [{
        name: "text",
        rawName: "v-text",
        value: (item.title),
        expression: "item.title"
      }],
      staticClass: ["title"]
    })])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header_top"]
  }, [_c('div', {
    staticClass: ["icon_chart"]
  }, [_c('image', {
    staticStyle: {
      width: "60px",
      height: "60px"
    },
    attrs: {
      "src": "/src/images/icon_chart.png"
    }
  })]), _c('div', [_c('text', {
    staticClass: ["text_contact"]
  }, [_vm._v("contact")])]), _c('div', {
    staticClass: ["icon_plus"]
  }, [_c('image', {
    staticStyle: {
      width: "60px",
      height: "60px"
    },
    attrs: {
      "src": "/src/images/icon_bar_add.png"
    }
  })])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(34)
)

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(36)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/contacts/components/barComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0bcea520"
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

/***/ 34:
/***/ (function(module, exports) {

module.exports = {
  "main": {
    "width": 100,
    "height": "154",
    "backgroundColor": "#4d9cc7"
  },
  "list": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "transform": "translateY(-250px)"
  },
  "circle": {
    "width": "128",
    "height": "128",
    "marginLeft": 50,
    "transform": "translate(-64px, -200px)",
    "borderRadius": 50,
    "backgroundColor": "#ec2079"
  },
  "icon_add": {
    "marginLeft": 50,
    "transform": "translate(-25px,-330px)"
  }
}

/***/ }),

/***/ 35:
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
  name: "ContactlistpagebarComponent",
  data: function data() {
    return {
      imgList: [{ imgurl: '/src/images/icon_bar_home.png' }, { imgurl: '/src/images/icon_bar_friends.png' }, { imgurl: '' }, { imgurl: '/src/images/icon_bar_calendar.png' }, { imgurl: '/src/images/icon_bar_me.png' }]
    };
  }
};

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["root"]
  }, [_c('div', {
    staticClass: ["main"]
  }), _c('div', {
    staticClass: ["circle"]
  }), _c('div', {
    staticClass: ["list"]
  }, _vm._l((_vm.imgList), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('image', {
      staticStyle: {
        width: "40px",
        height: "40px"
      },
      attrs: {
        "src": item.imgurl
      }
    })])
  })), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["icon_add"]
  }, [_c('image', {
    staticStyle: {
      width: "50px",
      height: "50px"
    },
    attrs: {
      "src": "/src/images/icon_bar_add.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(38)
)

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(40)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/contacts/ContactListPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-28c0d5ec"
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

/***/ 38:
/***/ (function(module, exports) {

module.exports = {
  "lizApp": {
    "position": "relative"
  },
  "scroller": {
    "width": "700",
    "height": "1500"
  },
  "displayComponent": {
    "width": 100,
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "20",
    "paddingLeft": 0,
    "backgroundColor": "#ffffff",
    "position": "absolute",
    "top": "150",
    "left": 0
  },
  "displayComponents": {
    "paddingLeft": "20"
  }
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = __webpack_require__(28);

var _header2 = _interopRequireDefault(_header);

var _source = __webpack_require__(0);

var _source2 = _interopRequireDefault(_source);

var _friendList = __webpack_require__(12);

var _friendList2 = _interopRequireDefault(_friendList);

var _display = __webpack_require__(8);

var _display2 = _interopRequireDefault(_display);

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

exports.default = {
  name: 'ContactListPage',
  components: {
    ContactlistpageHeader: _header2.default,
    ContactlistpageSource: _source2.default,
    ContactlistpageFriendlist: _friendList2.default,
    // ContactlistpagebarComponent,
    DisplayComponent: _display2.default
  },
  data: function data() {
    return {
      isshow: false
    };
  }
};
// import ContactlistpagebarComponent from './components/barComponent'

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["lizApp"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "showScrollbar": _vm.isshow
    }
  }, [_c('contactlistpage-source'), _c('contactlistpage-friendlist', {
    staticClass: ["list"]
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(42)
)

/* script */
__vue_exports__ = __webpack_require__(43)

/* template */
var __vue_template__ = __webpack_require__(44)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/security/login/LoginPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-443e9edc"
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

/***/ 42:
/***/ (function(module, exports) {

module.exports = {
  "test": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
  "logo-cell": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "marginTop": "144"
  },
  "logo": {
    "width": "572",
    "height": "144"
  },
  "input-area": {
    "display": "flex",
    "alignItems": "center",
    "marginTop": "104"
  },
  "input-cell": {
    "marginTop": "28"
  },
  "input-text": {
    "color": "#707070",
    "marginBottom": "12"
  },
  "forgot-password-cell": {
    "marginLeft": "440",
    "marginTop": "38"
  },
  "forgot-password-text": {
    "fontSize": "30",
    "color": "#707070"
  },
  "operation-area": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": "58",
    "height": "270",
    "fontSize": "42"
  },
  "operation-button": {
    "borderRadius": "44"
  },
  "operation-text": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "height": "86",
    "lineHeight": "86",
    "fontSize": "42",
    "color": "#ffffff"
  },
  "operation-login-text": {
    "marginLeft": "252"
  },
  "operation-register-text": {
    "marginLeft": "100"
  },
  "operation-login": {
    "width": "630",
    "backgroundColor": "#EC2079"
  },
  "operation-register": {
    "width": "402",
    "backgroundColor": "#57B1E3"
  },
  "or-text": {
    "color": "#707070",
    "fontSize": "30"
  },
  "input": {
    "width": "630",
    "height": "86",
    "backgroundColor": "#F2F2F2",
    "borderRadius": "44",
    "marginTop": "40"
  },
  "login-way-area": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-around",
    "marginTop": "150.4",
    "marginBottom": "134"
  },
  "login-way": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "google-login-icon": {
    "width": "112",
    "height": "112",
    "marginRight": "40"
  },
  "facebook-login-icon": {
    "width": "84",
    "height": "84",
    "marginRight": "40"
  },
  "login-way-text": {
    "color": "#707070",
    "fontSize": "30"
  }
}

/***/ }),

/***/ 43:
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

var swifter = weex.requireModule('swifter');

exports.default = {
    name: "user-entry",
    methods: {
        login: function login() {
            swifter.openMainPage();
            // swifter.openPinkPage('user/UserStatsPage.js');
        },
        register: function register() {
            swifter.openBluePage('security/register/RegisterPage.js');
        }
    }
};

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _c('div', {
    staticClass: ["operation-area"]
  }, [_c('a', {
    staticClass: ["operation-button", "operation-login"],
    on: {
      "click": _vm.login
    }
  }, [_c('text', {
    staticClass: ["operation-text", "operation-login-text"]
  }, [_vm._v("LOGIN")])]), _c('text', {
    staticClass: ["or-text"]
  }, [_vm._v("Or")]), _c('a', {
    staticClass: ["operation-button", "operation-register"],
    on: {
      "click": _vm.register
    }
  }, [_c('text', {
    staticClass: ["operation-text", "operation-register-text"]
  }, [_vm._v("REGISTER")])])]), _vm._m(3)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["logo-cell"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": "local:///logo.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["input-area"]
  }, [_c('div', {
    staticClass: ["input-cell"]
  }, [_c('text', {
    staticClass: ["input-text"]
  }, [_vm._v("Email or Phone")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text"
    }
  })]), _c('div', {
    staticClass: ["input-cell"]
  }, [_c('text', {
    staticClass: ["input-text"]
  }, [_vm._v("Password")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["forgot-password-cell"]
  }, [_c('text', {
    staticClass: ["forgot-password-text"]
  }, [_vm._v("Forgot Password")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["login-way-area"]
  }, [_c('div', {
    staticClass: ["login-way"],
    staticStyle: {
      marginLeft: "172.38px"
    }
  }, [_c('image', {
    staticClass: ["google-login-icon"],
    attrs: {
      "src": "local:///icon_google.png"
    }
  }), _c('text', {
    staticClass: ["login-way-text"]
  }, [_vm._v("Login with Google")])]), _c('div', {
    staticClass: ["login-way"],
    staticStyle: {
      marginLeft: "188px",
      marginTop: "54.4px"
    }
  }, [_c('image', {
    staticClass: ["facebook-login-icon"],
    attrs: {
      "src": "local:///facebook.png"
    }
  }), _c('text', {
    staticClass: ["login-way-text"]
  }, [_vm._v("Login with Facebook")])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
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

/***/ 9:
/***/ (function(module, exports) {

module.exports = {
  "liz": {
    "position": "relative"
  },
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

/***/ })

/******/ });