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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 26:
/***/ (function(module, exports) {

module.exports = {
  "liz": {
    "backgroundColor": "#cccccc"
  },
  "createGroud": {
    "flexDirection": "row"
  },
  "title": {
    "color": "#45b5f0",
    "fontSize": "45",
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
    "fontSize": "45",
    "color": "#707070"
  }
}

/***/ }),

/***/ 27:
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

/***/ 28:
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

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createcontactingGroup = __webpack_require__(25);

var _createcontactingGroup2 = _interopRequireDefault(_createcontactingGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_createcontactingGroup2.default.el = '#root';
new Vue(_createcontactingGroup2.default);

/***/ })

/******/ });