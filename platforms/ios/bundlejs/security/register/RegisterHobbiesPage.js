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
/******/ 	return __webpack_require__(__webpack_require__.s = 185);
/******/ })
/************************************************************************/
/******/ ({

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RegisterHobbiesPage = __webpack_require__(186);

var _RegisterHobbiesPage2 = _interopRequireDefault(_RegisterHobbiesPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_RegisterHobbiesPage2.default.el = '#root';
new Vue(_RegisterHobbiesPage2.default);

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(187)
)

/* script */
__vue_exports__ = __webpack_require__(188)

/* template */
var __vue_template__ = __webpack_require__(189)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/security/register/RegisterHobbiesPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a9b53554"
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

/***/ 187:
/***/ (function(module, exports) {

module.exports = {
  "RegisterHobbiesPage": {
    "marginTop": "56",
    "paddingLeft": "42",
    "paddingRight": "20"
  },
  "RegisterHobbiesPage-title": {
    "color": "#57B1E3",
    "fontSize": "82"
  },
  "RegisterHobbiesPage-search-box": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "80",
    "paddingLeft": "32",
    "paddingRight": "32",
    "marginTop": "24",
    "borderRadius": "50",
    "backgroundColor": "#F5F5F5"
  },
  "RegisterHobbiesPage-search-img": {
    "width": "42",
    "height": "42"
  },
  "RegisterHobbiesPage-search-input": {
    "height": "80",
    "flex": 1,
    "backgroundColor": "#F5F5F5"
  },
  "RegisterHobbiesPage-label-box": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "marginTop": "37"
  },
  "RegisterHobbiesPage-label-text": {
    "paddingLeft": "34",
    "paddingRight": "34",
    "paddingBottom": "18",
    "paddingTop": "18",
    "marginRight": "16",
    "marginBottom": "16",
    "borderRadius": "25",
    "backgroundColor": "#57B1E3",
    "color": "#ffffff"
  },
  "RegisterHobbiesPage-label-text-selected": {
    "backgroundColor": "#EC2079"
  },
  "RegisterHobbiesPage-ahead": {
    "justifyContent": "center",
    "alignItems": "center",
    "position": "fixed",
    "transform": "translateY(1884px)",
    "right": "30",
    "width": "114",
    "height": "114",
    "backgroundColor": "#EC2079",
    "borderRadius": "57"
  },
  "RegisterHobbiesPage-ahead-img": {
    "width": "46",
    "height": "30"
  }
}

/***/ }),

/***/ 188:
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

var swifter = weex.requireModule('swifter');
var animation = weex.requireModule('animation');
var storage = weex.requireModule('storage');

exports.default = {
    name: "RegisterHobbiesPage",
    data: function data() {
        return {
            hobbies: [{ hobbyName: '#Coffee', isSelected: false }, { hobbyName: '#Movie', isSelected: false }, { hobbyName: '#Netflix', isSelected: false }, { hobbyName: '#BoardGame', isSelected: false }, { hobbyName: '#Outdoor', isSelected: false }, { hobbyName: '#Photography ', isSelected: false }, { hobbyName: '#Food&Drink', isSelected: false }, { hobbyName: '#Relax', isSelected: false }, { hobbyName: '#Gym', isSelected: false }, { hobbyName: '#Indoor', isSelected: false }, { hobbyName: '#Drawing', isSelected: false }]
        };
    },

    methods: {
        shows: function shows() {
            var testEl = this.$refs.test;
            animation.transition(testEl, {
                styles: {
                    transform: 'translateY(888px)'
                },
                duration: 800, //ms
                timingFunction: 'ease',
                needLayout: false,
                delay: 0 //ms
            });

            this.mationss();
        },
        mationss: function mationss() {

            var texts = this.$refs.text;
            animation.transition(texts, {
                styles: {

                    backgroundColor: '#EC2079'
                },
                duration: 800, //ms
                timingFunction: 'ease',
                needLayout: false,
                delay: 0 //ms
            });
        },
        onAheadClick: function onAheadClick() {
            swifter.openTransparentPage('security/register/RegisterUserPage.js');
        },
        onSearchInputClick: function onSearchInputClick() {
            swifter.openWhitePage('security/register/RegistersearchPage.js');
        }
    },

    created: function created() {
        var _this = this;

        storage.getItem('SelectedHobby', function (event) {
            var hobby = JSON.parse(event.data);
            if (hobby) {
                _this.hobbies.push(hobby);
                _this.shows();
            }
        });
        storage.removeItem('SelectedHobby');
    }
};

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["RegisterHobbiesPage"]
  }, [_c('text', {
    staticClass: ["RegisterHobbiesPage-title"]
  }, [_vm._v("What are ")]), _c('text', {
    staticClass: ["RegisterHobbiesPage-title"]
  }, [_vm._v("your hobbies?")]), _c('div', {
    staticClass: ["RegisterHobbiesPage-search-box"]
  }, [_c('image', {
    staticClass: ["RegisterHobbiesPage-search-img"],
    attrs: {
      "src": "local:///search.png"
    }
  }), _c('input', {
    staticClass: ["RegisterHobbiesPage-search-input"],
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.onSearchInputClick
    }
  })]), _c('div', {
    staticClass: ["RegisterHobbiesPage-label-box"]
  }, [_c('text', {
    ref: "text",
    staticClass: ["RegisterHobbiesPage-label-text"],
    on: {
      "click": _vm.shows
    }
  }, [_vm._v("#Snooker")]), _vm._l((_vm.hobbies), function(hobbyOption, index) {
    return _c('text', {
      key: index,
      staticClass: ["RegisterHobbiesPage-label-text"],
      class: [hobbyOption.isSelected ? _vm.RegisterHobbiesPage - _vm.label - _vm.text - _vm.selected : '']
    }, [_vm._v(_vm._s(hobbyOption.hobbyName))])
  })], 2), _c('div', {
    ref: "test",
    staticClass: ["RegisterHobbiesPage-ahead"]
  }, [_c('a', {
    on: {
      "click": _vm.onAheadClick
    }
  }, [_c('image', {
    staticClass: ["RegisterHobbiesPage-ahead-img"],
    attrs: {
      "src": "local:///ahead.png"
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });