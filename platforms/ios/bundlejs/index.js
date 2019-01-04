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
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
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
/* 9 */,
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
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
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "title": {
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
    "width": 70,
    "paddingTop": "30",
    "backgroundColor": "#FFFFFF",
    "boxShadow": "0px 5px 5px 0px #ccc"
  },
  "text": {
    "paddingTop": "10",
    "paddingRight": 0,
    "paddingBottom": "10",
    "paddingLeft": "50",
    "color": "#707070"
  }
}

/***/ }),
/* 15 */
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
      imgurl: '/src/images/select.png'
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
/* 16 */
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
    directives: [{
      name: "text",
      rawName: "v-text",
      value: (_vm.text),
      expression: "text"
    }],
    style: _vm.title
  }), _c('div', {
    staticClass: ["icon"]
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isDisplay),
      expression: "isDisplay"
    }],
    ref: "panel",
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("2nd Degree Contact")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("1st & 2nd Degree Contact")]), _c('text', {
    staticClass: ["text"]
  }, [_vm._v("Star Friends Only")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

module.exports = {
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
  "title": {
    "backgroundColor": "#ebebeb",
    "height": "80"
  },
  "title_num": {
    "lineHeight": "80",
    "paddingLeft": "70"
  },
  "item": {
    "flexDirection": "row",
    "borderBottomWidth": "2",
    "borderBottomColor": "#c0c0c0",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor:active": "#00bdff"
  },
  "item-title": {
    "paddingLeft": "50",
    "lineHeight": "120",
    "fontSize": "60",
    "color": "#707070"
  }
}

/***/ }),
/* 19 */
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

// import DisplayComponent from './display'
module.exports = {
  name: 'ContactlistpageFriendlist',
  // components:{
  //   DisplayComponent
  // },
  data: function data() {
    return {
      appearMin: 1,
      appearMax: 1,
      appearIds: [],
      rows: [{
        id: 'A',
        list: [{ imgurl: '/src/images/user_picture1.png',
          name: 'Alice Gill' }, { imgurl: '/src/images/user_picture4.png',
          name: 'Adam Smith' }]
      }, {
        id: 'B',
        list: [{
          imgurl: '/src/images/user_picture2.png',
          name: 'Brian Costilla'
        }, {
          imgurl: '/src/images/user_picture5.png',
          name: 'Billy Marrone'
        }, {
          imgurl: '/src/images/user_picture2.png',
          name: 'Bruce Wayne'
        }]
      }, {
        id: 'C',
        list: [{
          imgurl: '/src/images/user_picture3.png',
          name: 'Carolyn Zamora'
        }]
      }, {
        id: 'D',
        list: [{
          imgurl: '/src/images/user_picture5.png',
          name: 'Daniel White'
        }, {
          imgurl: '',
          name: ''
        }]
      }]
    };
  }
};

/***/ }),
/* 20 */
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
      staticClass: ["title"]
    }, [_c('text', {
      directives: [{
        name: "text",
        rawName: "v-text",
        value: (item.id),
        expression: "item.id"
      }],
      staticClass: ["title_num"]
    })]), _vm._l((item.list), function(item, index) {
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(24)
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
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
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
  "outLine": {
    "borderBottom:first-child": "15px solid #fff",
    "border": "#ec2079"
  }
}

/***/ }),
/* 23 */
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

exports.default = {
  name: "ContactlistpageHeader",
  methods: {
    enableClick: function enableClick() {}
  },
  data: function data() {
    return {
      borderBottom: {
        color: 'red',
        border: '0 0 15px 0 solid #fff'
      },
      list: [{
        num: '54',
        title: 'Friends' }, {
        num: '6',
        title: 'Group'
      }, {
        num: '3',
        title: 'Pending'
      }]
    };
  }
};

/***/ }),
/* 24 */
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
      style: _vm.borderBottom
    }, [_c('a', {
      attrs: {
        "href": ""
      }
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  "source": {
    "paddingTop": "50",
    "paddingRight": "20",
    "paddingBottom": "50",
    "paddingLeft": "20",
    "position": "relative"
  },
  "icon_search": {
    "position": "absolute",
    "left": "55",
    "marginTop": "13",
    "top": 50
  }
}

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["source"]
  }, [_c('input', {
    attrs: {
      "type": "text",
      "name": "",
      "id": "",
      "placeholder": "searching"
    }
  }), _c('image', {
    staticClass: ["icon_search"],
    staticStyle: {
      width: "50px",
      height: "50px"
    },
    attrs: {
      "src": "/src/images/search.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(30)
)

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(32)
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
/* 30 */
/***/ (function(module, exports) {

module.exports = {
  "lizApp": {
    "position": "relative"
  },
  "scroller": {
    "height": "1500"
  },
  "list": {
    "height": "50",
    "position": "absolute",
    "top": "300"
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = __webpack_require__(21);

var _header2 = _interopRequireDefault(_header);

var _source = __webpack_require__(25);

var _source2 = _interopRequireDefault(_source);

var _friendList = __webpack_require__(17);

var _friendList2 = _interopRequireDefault(_friendList);

var _barComponent = __webpack_require__(8);

var _barComponent2 = _interopRequireDefault(_barComponent);

var _display = __webpack_require__(13);

var _display2 = _interopRequireDefault(_display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ContactListPage',
  components: {
    ContactlistpageHeader: _header2.default,
    ContactlistpageSource: _source2.default,
    ContactlistpageFriendlist: _friendList2.default,
    ContactlistpagebarComponent: _barComponent2.default,
    DisplayComponent: _display2.default
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

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["lizApp"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('contactlistpage-source'), _c('contactlistpage-friendlist', {
    staticClass: ["list"]
  }), _c('div', {
    staticClass: ["displayComponent"]
  }, [_c('display-component', {
    staticClass: ["displayComponents"]
  })], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 33 */
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
/* 34 */
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
/* 35 */
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

exports.default = {
    name: "user-entry"
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["logo-cell"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": "local:///logo.png"
    }
  })]), _c('div', {
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
  })])]), _c('div', {
    staticClass: ["forgot-password-cell"]
  }, [_c('text', {
    staticClass: ["forgot-password-text"]
  }, [_vm._v("Forgot Password")])]), _c('div', {
    staticClass: ["operation-area"]
  }, [_c('a', {
    staticClass: ["operation-button", "operation-login"],
    attrs: {
      "href": "./Home/HomeExplorePage.js"
    }
  }, [_c('text', {
    staticClass: ["operation-text", "operation-login-text"]
  }, [_vm._v("LOGIN")])]), _c('text', {
    staticClass: ["or-text"]
  }, [_vm._v("Or")]), _c('a', {
    staticClass: ["operation-button", "operation-register"],
    attrs: {
      "href": "./security/register/RegisterPage.js"
    }
  }, [_c('text', {
    staticClass: ["operation-text", "operation-register-text"]
  }, [_vm._v("REGISTER")])])]), _c('div', {
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
  }, [_vm._v("Login with Facebook")])])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(116);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(117)
)

/* script */
__vue_exports__ = __webpack_require__(118)

/* template */
var __vue_template__ = __webpack_require__(119)
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
/* 117 */
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoginPage = __webpack_require__(33);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _ContactListPage = __webpack_require__(29);

var _ContactListPage2 = _interopRequireDefault(_ContactListPage);

var _barComponent = __webpack_require__(8);

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
/* 119 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('login')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);