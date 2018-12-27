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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CreateEventInviteContactsPage = __webpack_require__(28);

var _CreateEventInviteContactsPage2 = _interopRequireDefault(_CreateEventInviteContactsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CreateEventInviteContactsPage2.default.el = '#root';
new Vue(_CreateEventInviteContactsPage2.default);

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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/createEvent/CreateEventInviteContactsPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4fa777cf"
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
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "82",
    "height": "122"
  },
  "icon-chart": {
    "width": "20",
    "height": "40",
    "marginLeft": "38"
  },
  "header-title": {
    "fontSize": "30",
    "color": "#242424",
    "marginLeft": "233.8"
  },
  "main": {
    "marginTop": "81.2",
    "paddingLeft": "38",
    "paddingRight": "40"
  },
  "create-event": {
    "paddingBottom": "17"
  },
  "create-title": {
    "fontSize": "50",
    "color": "#EC2079"
  },
  "contact-operation-area": {
    "display": "flex",
    "flexDirection": "row"
  },
  "contact-operation": {
    "paddingBottom": "16",
    "fontSize": "30",
    "color": "#242424",
    "marginRight": "38"
  },
  "contact-operation-active": {
    "color": "#EC2079",
    "borderColor": "#EC2079",
    "borderBottomWidth": "12"
  },
  "suggest-area": {
    "marginTop": "56"
  },
  "some-interest-text": {
    "fontSize": "40",
    "color": "#707070"
  },
  "interest-area": {
    "display": "flex",
    "flexDirection": "row"
  },
  "event-item": {
    "paddingTop": "10.8",
    "paddingRight": "40",
    "paddingBottom": "10.8",
    "paddingLeft": "40",
    "marginTop": "16.4",
    "backgroundColor": "#57B1E3",
    "borderRadius": "13",
    "marginRight": "22.2",
    "marginBottom": "24.8",
    "fontSize": "28",
    "color": "#ffffff"
  },
  "suggest-contact-list": {
    "position": "relative",
    "marginTop": "44.8"
  },
  "suggest-contact": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "16",
    "paddingBottom": "16",
    "paddingLeft": "35.4",
    "borderRaduis": "30",
    "boxShadow": "0 0 5px rgba(211, 210, 210, 0.50)",
    "marginBottom": "22"
  },
  "text-info": {
    "marginLeft": "75"
  },
  "contact-picture": {
    "width": "87",
    "height": "87"
  },
  "contact-name": {
    "fontSize": "50",
    "color": "#707070"
  },
  "called-number": {
    "fontSize": "30",
    "color": "#EC2079"
  },
  "status": {
    "position": "absolute",
    "top": "50",
    "right": "56",
    "width": "20",
    "height": "20",
    "backgroundColor": "#D3D3D3",
    "borderRadius": 50
  },
  "status-active": {
    "backgroundColor": "#57B1E3"
  },
  "buttom-operation-area": {
    "position": "fixed",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "40",
    "paddingRight": "48",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "height": "132",
    "backgroundColor": "#57B1E3"
  },
  "arrow-forward": {
    "width": "40",
    "height": "26"
  },
  "invited-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 30:
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
//
//
//
//
//
//
//
//
//
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
    name: "CreateEventInviteContactsPage",
    data: function data() {
        return {
            currentSelectContact: []
        };
    },

    methods: {
        onContactClick: function onContactClick(e) {
            var index = this.currentSelectContact.indexOf(e);
            if (index == -1) {
                this.currentSelectContact.push(e);
                return;
            }
            this.currentSelectContact.splice(index, 1);
        }
    },
    computed: {
        isActive: function isActive() {
            return function (index) {
                if (this.currentSelectContact.indexOf(index) != -1) return 'status-active';
            };
        }
    }
};

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('image', {
    staticClass: ["icon-chart"],
    attrs: {
      "src": "/src/images/arrow_back_gray.png"
    },
    on: {
      "click": _vm.onBackClick
    }
  }), _c('text', {
    staticClass: ["header-title"]
  }, [_vm._v("Create Event")])]), _c('div', {
    staticClass: ["main"]
  }, [_vm._m(0), _vm._m(1), _c('div', {
    staticClass: ["suggest-area"]
  }, [_c('text', {
    staticClass: ["some-interest-text"]
  }, [_vm._v("They also have interest in")]), _vm._m(2), _c('scroller', {
    staticClass: ["contact-scroller"]
  }, [_c('div', {
    staticClass: ["suggest-contact-list"]
  }, [_c('div', {
    staticClass: ["suggest-contact"],
    on: {
      "click": function($event) {
        _vm.onContactClick(1)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "/src/images/user_picture6.png"
    }
  }), _vm._m(3), _c('div', {
    staticClass: ["status"],
    class: _vm.isActive(1)
  })]), _c('div', {
    staticClass: ["suggest-contact"],
    on: {
      "click": function($event) {
        _vm.onContactClick(2)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "/src/images/user_picture7.png"
    }
  }), _vm._m(4), _c('div', {
    staticClass: ["status"],
    class: _vm.isActive(2)
  })]), _c('div', {
    staticClass: ["suggest-contact"],
    on: {
      "click": function($event) {
        _vm.onContactClick(3)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "/src/images/user_picture8.png"
    }
  }), _vm._m(5), _c('div', {
    staticClass: ["status"],
    class: _vm.isActive(3)
  })])])])]), _c('div', {
    staticClass: ["add-contact-area"]
  }), _c('div', {
    staticClass: ["buttom-operation-area"]
  }, [_c('text', {
    staticClass: ["invited-text"]
  }, [_vm._v(_vm._s(_vm.currentSelectContact.length) + " person invited")]), _c('image', {
    staticClass: ["arrow-forward"],
    attrs: {
      "src": "/src/images/arrow_forward_while.png"
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["create-event"]
  }, [_c('text', {
    staticClass: ["create-title"]
  }, [_vm._v("Name Of The Event")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["contact-operation-area"]
  }, [_c('text', {
    staticClass: ["contact-operation", "contact-operation-active"]
  }, [_vm._v("Suggest Contacts")]), _c('text', {
    staticClass: ["contact-operation"]
  }, [_vm._v("All Contacts")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["interest-area"]
  }, [_c('text', {
    staticClass: ["event-item"]
  }, [_vm._v("#Snooker")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("Kelvin")]), _c('text', {
    staticClass: ["called-number"]
  }, [_vm._v("1st contact")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("John")]), _c('text', {
    staticClass: ["called-number"]
  }, [_vm._v("1st contact")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("Kelvin")]), _c('text', {
    staticClass: ["called-number"]
  }, [_vm._v("2nd contact")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });