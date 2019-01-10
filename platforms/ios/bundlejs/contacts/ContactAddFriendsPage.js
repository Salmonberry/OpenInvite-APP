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
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ({

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ContactAddFriendsPage = __webpack_require__(103);

var _ContactAddFriendsPage2 = _interopRequireDefault(_ContactAddFriendsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ContactAddFriendsPage2.default.el = '#root';
new Vue(_ContactAddFriendsPage2.default);

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(104)
)

/* script */
__vue_exports__ = __webpack_require__(105)

/* template */
var __vue_template__ = __webpack_require__(106)
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
__vue_options__.__file = "/Users/lz/Desktop/Openinvite/OpenInvite-APP/src/contacts/ContactAddFriendsPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-70744060"
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

/***/ 104:
/***/ (function(module, exports) {

module.exports = {
  "ContactAddFriendsPage": {
    "backgroundColor": "#57B1E3"
  },
  "ContactAddFriendsPage-retreatx": {
    "width": "26",
    "height": "44",
    "marginTop": "88",
    "marginLeft": "20"
  },
  "ContactAddFriendsPage-title": {
    "marginTop": "20",
    "marginLeft": "20",
    "fontSize": "70",
    "color": "#ffffff"
  },
  "ContactAddFriendsPage-searchbox": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginTop": "23",
    "marginLeft": "21",
    "marginRight": "37"
  },
  "ContactAddFriendsPage-searchinput": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "width": "552",
    "height": "64",
    "paddingLeft": "17",
    "paddingRight": "17",
    "backgroundColor": "#ffffff",
    "borderRadius": "50"
  },
  "ContactAddFriendsPage-searchboximg": {
    "width": "56",
    "height": "56"
  },
  "ContactAddFriendsPage-searchinputimg": {
    "width": "42",
    "height": "42",
    "marginRight": "10"
  },
  "ContactAddFriendsPage-searchinputbox": {
    "flex": 1,
    "height": "64",
    "backgroundColor": "#ffffff",
    "borderRadius": "50",
    "fontSize": "28",
    "color": "#707070"
  },
  "ContactAddFriendsPage-match": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "30",
    "paddingBottom": "30",
    "paddingLeft": "60",
    "paddingRight": "60",
    "marginTop": "36",
    "borderTopWidth": "2",
    "borderTopColor": "#ffffff",
    "borderTopStyle": "solid",
    "borderBottomWidth": "2",
    "borderBottomColor": "#ffffff",
    "borderBottomStyle": "solid"
  },
  "ContactAddFriendsPage-matchimg": {
    "width": "118",
    "height": "118",
    "marginRight": "18"
  },
  "ContactAddFriendsPage-matchtextbox": {
    "flex": 1
  },
  "ContactAddFriendsPage-matchtextboxtext": {
    "fontSize": "68",
    "color": "#ffffff"
  },
  "ContactAddFriendsPage-matchtextboxtextdist": {
    "fontSize": "28",
    "color": "#ffffff"
  },
  "ContactAddFriendsPage-Invite": {
    "marginTop": "59"
  },
  "ContactAddFriendsPage-Invitetitle": {
    "paddingLeft": "38",
    "color": "#ffffff",
    "fontSize": "28"
  },
  "ContactAddFriendsPage-Invitebox": {
    "marginTop": "24"
  },
  "ContactAddFriendsPage-Inviteboxlist": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "104",
    "paddingLeft": "30",
    "marginBottom": "16",
    "backgroundColor": "#ffffff"
  },
  "ContactAddFriendsPage-Inviteboxlistwhatsapp": {
    "width": "60",
    "height": "60",
    "marginRight": "22"
  },
  "ContactAddFriendsPage-Inviteboxlisttext": {
    "color": "#707070",
    "fontSize": "28"
  },
  "ContactAddFriendsPage-Inviteboxlistchat": {
    "width": "62",
    "height": "50",
    "marginRight": "22"
  },
  "ContactAddFriendsPage-Inviteboxlistclose": {
    "width": "56",
    "height": "40",
    "marginRight": "22"
  }
}

/***/ }),

/***/ 105:
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

var swifter = weex.requireModule('swifter');

exports.default = {
    name: "ContactAddFriendsPage",
    data: function data() {
        return {};
    },

    methods: {
        onMatchClick: function onMatchClick() {
            swifter.openMeetNewFriendsPage();
        }
    }
};

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ContactAddFriendsPage"]
  }, [_c('scroller', [_c('text', {
    staticClass: ["ContactAddFriendsPage-title"]
  }, [_vm._v("Add Friends")]), _vm._m(0), _c('div', {
    staticClass: ["ContactAddFriendsPage-match"],
    on: {
      "click": _vm.onMatchClick
    }
  }, [_c('image', {
    staticClass: ["ContactAddFriendsPage-matchimg"],
    attrs: {
      "src": "local:///contactAddFriendsPage-matchimg.png"
    }
  }), _vm._m(1)]), _vm._m(2)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ContactAddFriendsPage-searchbox"]
  }, [_c('div', {
    staticClass: ["ContactAddFriendsPage-searchinput"]
  }, [_c('image', {
    staticClass: ["ContactAddFriendsPage-searchinputimg"],
    attrs: {
      "src": "local:///search.png"
    }
  }), _c('input', {
    staticClass: ["ContactAddFriendsPage-searchinputbox"],
    attrs: {
      "type": "text",
      "placeholder": "Mobile / Email"
    }
  })]), _c('image', {
    staticClass: ["ContactAddFriendsPage-searchboximg"],
    attrs: {
      "src": "local:///qr-code.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ContactAddFriendsPage-matchtextbox"]
  }, [_c('text', {
    staticClass: ["ContactAddFriendsPage-matchtextboxtext"]
  }, [_vm._v("MATCH")]), _c('text', {
    staticClass: ["ContactAddFriendsPage-matchtextboxtextdist"]
  }, [_vm._v("Click here to meet new people with similar hobbies")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ContactAddFriendsPage-Invite"]
  }, [_c('text', {
    staticClass: ["ContactAddFriendsPage-Invitetitle"]
  }, [_vm._v("Invite Friends To Use OpenInvite")]), _c('div', {
    staticClass: ["ContactAddFriendsPage-Invitebox"]
  }, [_c('div', {
    staticClass: ["ContactAddFriendsPage-Inviteboxlist"]
  }, [_c('image', {
    staticClass: ["ContactAddFriendsPage-Inviteboxlistwhatsapp"],
    attrs: {
      "src": "local:///whatsapp.png"
    }
  }), _c('text', {
    staticClass: ["ContactAddFriendsPage-Inviteboxlisttext"]
  }, [_vm._v("Through WhatsApp")])]), _c('div', {
    staticClass: ["ContactAddFriendsPage-Inviteboxlist"]
  }, [_c('image', {
    staticClass: ["ContactAddFriendsPage-Inviteboxlistchat"],
    attrs: {
      "src": "local:///chat-bubbles-with-ellipsis.png"
    }
  }), _c('text', {
    staticClass: ["ContactAddFriendsPage-Inviteboxlisttext"]
  }, [_vm._v("Through SMS")])]), _c('div', {
    staticClass: ["ContactAddFriendsPage-Inviteboxlist"]
  }, [_c('image', {
    staticClass: ["ContactAddFriendsPage-Inviteboxlistclose"],
    attrs: {
      "src": "local:///close-envelope.png"
    }
  }), _c('text', {
    staticClass: ["ContactAddFriendsPage-Inviteboxlisttext"]
  }, [_vm._v("Through Email")])])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });