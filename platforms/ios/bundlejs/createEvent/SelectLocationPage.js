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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ({

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SelectLocationPage = __webpack_require__(130);

var _SelectLocationPage2 = _interopRequireDefault(_SelectLocationPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_SelectLocationPage2.default.el = '#root';
new Vue(_SelectLocationPage2.default);

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(131)
)

/* script */
__vue_exports__ = __webpack_require__(132)

/* template */
var __vue_template__ = __webpack_require__(133)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/createEvent/SelectLocationPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-75c9d76a"
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

/***/ 131:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "paddingLeft": "48",
    "paddingRight": "48",
    "paddingTop": "34",
    "paddingBottom": "96"
  },
  "select-title": {
    "fontSize": "50",
    "color": "#313131"
  },
  "search-area": {
    "position": "relative",
    "marginTop": "36",
    "height": "62"
  },
  "search-input": {
    "paddingLeft": "22",
    "height": "62",
    "backgroundColor": "#F4F4F4",
    "borderRadius": "20"
  },
  "search-icon": {
    "position": "absolute",
    "top": "20",
    "right": "40",
    "width": "24",
    "height": "26"
  },
  "current-Location": {
    "display": "flex",
    "flexDirection": "row",
    "marginTop": "62"
  },
  "location-icon": {
    "width": "36",
    "height": "36",
    "marginRight": "26"
  },
  "current-location-text": {
    "fontSize": "32",
    "color": "#57B1E3"
  },
  "near-location-area": {
    "marginTop": "112"
  },
  "location-title": {
    "marginBottom": "44",
    "fontSize": "32",
    "color": "#707070"
  },
  "location-option": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "paddingRight": "68",
    "marginTop": "26",
    "backgroundColor": "#F8F8F8",
    "boxShadow": "0 3px 10px #707070",
    "borderRadius": "28",
    "height": "254"
  },
  "location-image": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "marginRight": "32"
  },
  "location-info-area": {
    "alignSelf": "center"
  },
  "location-name": {
    "fontSize": "32"
  },
  "location-description": {
    "width": "266",
    "fontSize": "28",
    "color": "#505050",
    "marginTop": "10"
  }
}

/***/ }),

/***/ 132:
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

var swifter = weex.requireModule('swifter');
exports.default = {
    name: "SelectLocationPage",
    methods: {
        onLocationSelected: function onLocationSelected() {
            swifter.openWhitePage('createEvent/CreateEventLastPage.js', 'Create Event');
        }
    }
};

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["select-title"]
  }, [_vm._v("Select Location")]), _vm._m(0), _vm._m(1), _c('div', {
    staticClass: ["near-location-area"]
  }, [_c('text', {
    staticClass: ["location-title"]
  }, [_vm._v("Suggested locations near you")]), _c('div', {
    staticClass: ["location-option"],
    on: {
      "click": _vm.onLocationSelected
    }
  }, [_c('image', {
    staticClass: ["location-image"],
    attrs: {
      "src": "local:///location-image.png"
    }
  }), _vm._m(2)]), _vm._m(3), _vm._m(4)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["search-area"]
  }, [_c('input', {
    staticClass: ["search-input"],
    attrs: {
      "type": "text",
      "placeholder": "Search"
    }
  }), _c('image', {
    staticClass: ["search-icon"],
    attrs: {
      "src": "local:///search_blue.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["current-Location"]
  }, [_c('image', {
    staticClass: ["location-icon"],
    attrs: {
      "src": "local:///location-icon.png"
    }
  }), _c('text', {
    staticClass: ["current-location-text"]
  }, [_vm._v("Current Location")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["location-info-area"]
  }, [_c('text', {
    staticClass: ["location-name"]
  }, [_vm._v("ABC Snooker Room")]), _c('text', {
    staticClass: ["location-description"]
  }, [_vm._v("AdressAdress Adress Adress Adress Adress Adress  ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["location-option"]
  }, [_c('image', {
    staticClass: ["location-image"],
    attrs: {
      "src": "local:///location-image2.png"
    }
  }), _c('div', {
    staticClass: ["location-info-area"]
  }, [_c('text', {
    staticClass: ["location-name"]
  }, [_vm._v("DEF Snooker Room")]), _c('text', {
    staticClass: ["location-description"]
  }, [_vm._v("AdressAdress Adress Adress Adress Adress Adress  ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["location-option"]
  }, [_c('image', {
    staticClass: ["location-image"],
    attrs: {
      "src": "local:///location-image3.png"
    }
  }), _c('div', {
    staticClass: ["location-info-area"]
  }, [_c('text', {
    staticClass: ["location-name"]
  }, [_vm._v("HIJ Snooker Room")]), _c('text', {
    staticClass: ["location-description"]
  }, [_vm._v("AdressAdress Adress Adress Adress Adress Adress  ")])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });