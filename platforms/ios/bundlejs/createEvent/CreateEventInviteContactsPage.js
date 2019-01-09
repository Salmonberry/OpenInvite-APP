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
/******/ 	return __webpack_require__(__webpack_require__.s = 114);
/******/ })
/************************************************************************/
/******/ ({

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CreateEventInviteContactsPage = __webpack_require__(115);

var _CreateEventInviteContactsPage2 = _interopRequireDefault(_CreateEventInviteContactsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CreateEventInviteContactsPage2.default.el = '#root';
new Vue(_CreateEventInviteContactsPage2.default);

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(116)
)

/* script */
__vue_exports__ = __webpack_require__(117)

/* template */
var __vue_template__ = __webpack_require__(118)
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

/***/ 116:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
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
    "marginLeft": "233.8",
    "fontSize": "30",
    "color": "#242424"
  },
  "main": {
    "marginTop": "81.2"
  },
  "main-header": {
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
    "marginRight": "38",
    "fontSize": "30",
    "color": "#242424"
  },
  "contact-operation-active": {
    "color": "#EC2079",
    "borderColor": "#EC2079",
    "borderBottomWidth": "12"
  },
  "suggest-area": {
    "marginTop": "56",
    "paddingLeft": "38",
    "paddingRight": "40"
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
    "marginRight": "22.2",
    "marginBottom": "24.8",
    "backgroundColor": "#57B1E3",
    "borderRadius": "13",
    "fontSize": "28",
    "color": "#ffffff"
  },
  "suggest-contact-list": {
    "position": "relative",
    "marginTop": "44.8"
  },
  "some-contact": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "16",
    "paddingBottom": "16",
    "paddingLeft": "35.4"
  },
  "suggest-contact": {
    "marginBottom": "22",
    "borderRadius": "30",
    "boxShadow": "0 0 5px rgba(211, 210, 210, 0.50)",
    "backgroundColor": "#ffffff"
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
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "height": "132",
    "paddingLeft": "40",
    "paddingRight": "48",
    "backgroundColor": "#57B1E3"
  },
  "arrow-forward": {
    "width": "40",
    "height": "26"
  },
  "invited-text": {
    "fontSize": "28",
    "color": "#ffffff"
  },
  "contact-scroller": {
    "height": "600"
  },
  "all-contact-scroller": {
    "marginTop": "72",
    "height": "550"
  },
  "all-contact-header": {
    "paddingLeft": "38",
    "paddingRight": "40"
  },
  "search-area": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "position": "relative",
    "marginTop": "82"
  },
  "search-input": {
    "width": "652",
    "height": "68",
    "paddingTop": "16",
    "paddingBottom": "16",
    "paddingLeft": "22",
    "backgroundColor": "#F4F4F4",
    "borderRadius": "20"
  },
  "search-icon": {
    "position": "absolute",
    "top": "20",
    "right": "40",
    "width": "26",
    "height": "26"
  },
  "filter-area": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "display": "flex",
    "width": "264",
    "height": "56",
    "marginTop": "56",
    "backgroundColor": "#57B1E3",
    "borderRadius": "28"
  },
  "filter-text": {
    "fontSize": "26",
    "color": "#ffffff"
  },
  "triangle-icon": {
    "width": "16",
    "height": "14"
  },
  "star-header-area": {
    "flexDirection": "row",
    "alignItems": "center",
    "display": "flex",
    "paddingTop": "12",
    "paddingBottom": "12",
    "paddingLeft": "38",
    "backgroundColor": "#EBEBEB"
  },
  "star-icon": {
    "width": "32",
    "height": "30",
    "marginRight": "18"
  },
  "contact-item-wrapper": {
    "paddingTop": "24",
    "paddingBottom": "24",
    "borderColor": "#707070",
    "borderBottomWidth": "1"
  }
}

/***/ }),

/***/ 117:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var swifter = weex.requireModule('swifter');

exports.default = {
    name: "CreateEventInviteContactsPage",
    data: function data() {
        return {
            currentSelectContact: [],
            isSuggestActive: true,
            titles: {
                invite: 'Invite Your Contact',
                share: 'Share Event With…'
            },
            title: 'Invite Your Contact'
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
        },


        // switch of suggest and all contacts
        onSuggest: function onSuggest(index) {
            index == 1 ? this.isSuggestActive = true : this.isSuggestActive = false;
        },


        //页面后退
        onBackClick: function onBackClick() {
            navigator.pop({ animated: 'true' });
        },
        onForwardClick: function onForwardClick() {
            // navigator.push({
            //     url: utils.getEntryUrl('CreateEventLastPage'),
            //     animated: "true"
            // })
            swifter.openWhitePage('createEvent/CreateEventLastPage.js', 'Create Event');
        },
        isActive: function isActive(index) {
            if (this.currentSelectContact.indexOf(index) != -1) return 'status-active';
        }
    },

    created: function created() {
        var _this = this;

        storage.getItem('page', function (event) {
            event.data == 'sharePage' && (_this.title = _this.titles.share);
            storage.removeItem('currentPage');
        });
    }
};

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["main"]
  }, [_c('div', {
    staticClass: ["main-header"]
  }, [_c('div', {
    staticClass: ["create-event"]
  }, [_c('text', {
    staticClass: ["create-title"]
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["contact-operation-area"]
  }, [_c('text', {
    staticClass: ["contact-operation"],
    class: [_vm.isSuggestActive ? 'contact-operation-active' : ''],
    on: {
      "click": function($event) {
        _vm.onSuggest(1)
      }
    }
  }, [_vm._v("Suggest Contacts")]), _c('text', {
    staticClass: ["contact-operation"],
    class: [!_vm.isSuggestActive ? 'contact-operation-active' : ''],
    on: {
      "click": function($event) {
        _vm.onSuggest(2)
      }
    }
  }, [_vm._v("All Contacts")])])]), (_vm.isSuggestActive) ? _c('div', {
    staticClass: ["suggest-area"]
  }, [_c('text', {
    staticClass: ["some-interest-text"]
  }, [_vm._v("They also have interest in")]), _vm._m(0), _c('scroller', {
    staticClass: ["contact-scroller"]
  }, [_c('div', {
    staticClass: ["suggest-contact-list"]
  }, [_c('div', {
    staticClass: ["suggest-contact", "some-contact"],
    on: {
      "click": function($event) {
        _vm.onContactClick(1)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "local:///user_picture6.png"
    }
  }), _vm._m(1), _c('div', {
    staticClass: ["status"],
    class: [_vm.isActive(1) ? 'status-active' : '']
  })]), _c('div', {
    staticClass: ["suggest-contact", "some-contact"],
    on: {
      "click": function($event) {
        _vm.onContactClick(2)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "local:///user_picture7.png"
    }
  }), _vm._m(2), _c('div', {
    staticClass: ["status"],
    class: [_vm.isActive(2) ? 'status-active' : '']
  })]), _c('div', {
    staticClass: ["suggest-contact", "some-contact"],
    on: {
      "click": function($event) {
        _vm.onContactClick(3)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "local:///user_picture8.png"
    }
  }), _vm._m(3), _c('div', {
    staticClass: ["status"],
    class: [_vm.isActive(3) ? 'status-active' : '']
  })])])])]) : _vm._e(), (!_vm.isSuggestActive) ? _c('div', {
    staticClass: ["all-contact-area"]
  }, [_vm._m(4), _c('scroller', {
    staticClass: ["all-contact-scroller"]
  }, [_c('div', {
    staticClass: ["all-contact-wrapper"]
  }, [_c('div', {
    staticClass: ["star-contact-area", "contact-area"]
  }, [_vm._m(5), _c('div', {
    staticClass: ["some-contact", "contact-item-wrapper"],
    on: {
      "click": function($event) {
        _vm.onContactClick(4)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "local:///user_picture1.png"
    }
  }), _vm._m(6), _c('div', {
    staticClass: ["status"],
    class: [_vm.isActive(4) ? 'status-active' : '']
  })]), _c('div', {
    staticClass: ["some-contact", "contact-item-wrapper"],
    on: {
      "click": function($event) {
        _vm.onContactClick(5)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "local:///user_picture9.png"
    }
  }), _vm._m(7), _c('div', {
    staticClass: ["status"],
    class: [_vm.isActive(5) ? 'status-active' : '']
  })])]), _c('div', {
    staticClass: ["frequene-contact-area", "contact-area"]
  }, [_vm._m(8), _vm._m(9), _c('div', {
    staticClass: ["some-contact", "contact-item-wrapper"],
    on: {
      "click": function($event) {
        _vm.onContactClick(6)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "local:///user_picture1.png"
    }
  }), _vm._m(10), _c('div', {
    staticClass: ["status"],
    class: [_vm.isActive(6) ? 'status-active' : '']
  })]), _c('div', {
    staticClass: ["some-contact", "contact-item-wrapper"],
    on: {
      "click": function($event) {
        _vm.onContactClick(7)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "local:///user_picture12.png"
    }
  }), _vm._m(11), _c('div', {
    staticClass: ["status"],
    class: [_vm.isActive(7) ? 'status-active' : '']
  })]), _c('div', {
    staticClass: ["some-contact", "contact-item-wrapper"],
    on: {
      "click": function($event) {
        _vm.onContactClick(8)
      }
    }
  }, [_c('image', {
    staticClass: ["contact-picture"],
    attrs: {
      "src": "local:///user_picture14.png"
    }
  }), _vm._m(12), _c('div', {
    staticClass: ["status"],
    class: [_vm.isActive(8) ? 'status-active' : '']
  })])])])])]) : _vm._e(), _c('div', {
    staticClass: ["buttom-operation-area"]
  }, [_c('text', {
    staticClass: ["invited-text"]
  }, [_vm._v(_vm._s(_vm.currentSelectContact.length) + " person invited")]), _c('image', {
    staticClass: ["arrow-forward"],
    attrs: {
      "src": "local:///arrow_forward_while.png"
    },
    on: {
      "click": _vm.onForwardClick
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["all-contact-header"]
  }, [_c('div', {
    staticClass: ["search-area"]
  }, [_c('input', {
    staticClass: ["search-input"],
    attrs: {
      "type": "text",
      "placeholder": "search"
    }
  }), _c('image', {
    staticClass: ["search-icon"],
    attrs: {
      "src": "local:///search_blue.png"
    }
  })]), _c('div', {
    staticClass: ["filter-area"]
  }, [_c('text', {
    staticClass: ["filter-text"]
  }, [_vm._v("Filter: None")]), _c('image', {
    staticClass: ["triangle-icon"],
    attrs: {
      "src": "local:///triangle_while.png"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["star-header-area"]
  }, [_c('image', {
    staticClass: ["star-icon"],
    attrs: {
      "src": "local:///star_icon.png"
    }
  }), _c('text', {
    staticClass: ["star-title"]
  }, [_vm._v("Star Friends")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("Alice Gill")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("Patrick Chan")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["star-header-area"]
  }, [_c('text', {
    staticClass: ["star-title"]
  }, [_vm._v("All Contacts")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["star-header-area"]
  }, [_c('text', {
    staticClass: ["star-title"]
  }, [_vm._v("A")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("Alice Gill")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("Adam Smith ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text-info"]
  }, [_c('text', {
    staticClass: ["contact-name"]
  }, [_vm._v("Albert Gatewood")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });