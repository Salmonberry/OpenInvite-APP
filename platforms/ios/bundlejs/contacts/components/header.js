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

/***/ 10:
/***/ (function(module, exports) {

module.exports = {
  "liz": {
    "backgroundColor": "#cccccc"
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      imgurl: 'local:///icon_bar_add.png',
      text: 'Create Group',
      rows: [{
        group: 'Happy Friday',
        imgurl: 'local:///user_picture1.png'
      }, {
        group: 'Music LOver',
        imgurl: 'local:///user_picture1.png'
      }]
    };
  }
};

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["liz"]
  }, [_c('div', {
    staticClass: ["createGroud"]
  }, [_c('div', {
    staticClass: ["group"]
  }, [_c('image', {
    staticStyle: {
      width: "60px",
      height: "60px"
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
  })), _c('text', {
    staticClass: ["count"],
    attrs: {
      "value": 'Appear items: ' + _vm.appearMin + ' ~ ' + _vm.appearMax
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = {
  "list": {
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
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 15:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["liz"]
  }, [_c('div', {
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
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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

/***/ 17:
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ContactlistpagePending',
  data: function data() {
    return {
      trueimge: 'local:///right.png',
      falseimge: 'local:///close.png',
      rows: [{
        group: 'Happy Friday',
        imgurl: 'local:///user_picture1.png'
      }, {
        group: 'Music LOver',
        imgurl: 'local:///user_picture1.png'
      }]
    };
  }
};

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["liz"]
  }, [_c('div', {
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
      staticClass: ["group_left"]
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
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(28)
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

/***/ 26:
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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _friendList = __webpack_require__(4);

var _friendList2 = _interopRequireDefault(_friendList);

var _pending = __webpack_require__(16);

var _pending2 = _interopRequireDefault(_pending);

var _createcontactingGroup = __webpack_require__(9);

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

/***/ 28:
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
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

/***/ 9:
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

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _header = __webpack_require__(25);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_header2.default.el = '#root';
new Vue(_header2.default);

/***/ })

/******/ });