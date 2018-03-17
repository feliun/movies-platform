module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AddCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("./store.js");
var _jsxFileName = '/Users/gibbonsoftltd/Documents/development/myhacks/movies-platform/movies-app/components/AddCount.js';






var AddCount = function AddCount(_ref) {
  var count = _ref.count,
      addCount = _ref.addCount;
  return (// eslint-disable-line no-shadow
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-2895368816',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '2895368816',
        css: 'div.jsx-2895368816{padding:0 0 20px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQ291bnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLEFBRzRCLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0FkZENvdW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9naWJib25zb2Z0bHRkL0RvY3VtZW50cy9kZXZlbG9wbWVudC9teWhhY2tzL21vdmllcy1wbGF0Zm9ybS9tb3ZpZXMtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBhZGRDb3VudCB9IGZyb20gJy4uL3N0b3JlJztcblxuY29uc3QgQWRkQ291bnQgPSAoeyBjb3VudCwgYWRkQ291bnQgfSkgPT4gKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuICA8ZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGRpdiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG4gICAgICB9XG4gIGB9PC9zdHlsZT5cbiAgICA8aDE+QWRkQ291bnQ6IDxzcGFuPntjb3VudH08L3NwYW4+PC9oMT5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZENvdW50fT5BZGQgVG8gQ291bnQ8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBjb3VudCB9KSA9PiAoeyBjb3VudCB9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoeyBhZGRDb3VudDogYmluZEFjdGlvbkNyZWF0b3JzKGFkZENvdW50LCBkaXNwYXRjaCkgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZENvdW50KTtcbiJdfQ== */\n/*@ sourceURL=components/AddCount.js */'
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'h1',
        {
          className: 'jsx-2895368816',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'AddCount: ',
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          {
            className: 'jsx-2895368816',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          count
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'button',
        { onClick: addCount, className: 'jsx-2895368816',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        'Add To Count'
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var count = _ref2.count;
  return { count: count };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { addCount: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__store__["a" /* addCount */], dispatch) };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(AddCount));

/***/ }),

/***/ "./components/Clock.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/gibbonsoftltd/Documents/development/myhacks/movies-platform/movies-app/components/Clock.js';



var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};
var format = function format(t) {
  return pad(t.getUTCHours()) + ':' + pad(t.getUTCMinutes()) + ':' + pad(t.getUTCSeconds());
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-2115298601' + ' ' + ((light ? 'light' : '') || ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    format(new Date(lastUpdate)),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2115298601',
      css: 'div.jsx-2115298601{padding:15px;display:inline-block;color:#82FA58;font:50px menlo,monaco,monospace;background-color:#000;}.light.jsx-2115298601{background-color:#999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWdCLEFBR3NCLEFBUVMsYUFQRCxTQVF2QixZQVBnQixjQUNxQixpQ0FDYixzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9DbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ2liYm9uc29mdGx0ZC9Eb2N1bWVudHMvZGV2ZWxvcG1lbnQvbXloYWNrcy9tb3ZpZXMtcGxhdGZvcm0vbW92aWVzLWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHBhZCA9IG4gPT4gKG4gPCAxMCA/IGAwJHtufWAgOiBuKTtcbmNvbnN0IGZvcm1hdCA9IHQgPT4gYCR7cGFkKHQuZ2V0VVRDSG91cnMoKSl9OiR7cGFkKHQuZ2V0VVRDTWludXRlcygpKX06JHtwYWQodC5nZXRVVENTZWNvbmRzKCkpfWA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGxhc3RVcGRhdGUsIGxpZ2h0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2xpZ2h0ID8gJ2xpZ2h0JyA6ICcnfT5cbiAgICB7Zm9ybWF0KG5ldyBEYXRlKGxhc3RVcGRhdGUpKX1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjODJGQTU4O1xuICAgICAgICBmb250OiA1MHB4IG1lbmxvLCBtb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIH1cblxuICAgICAgLmxpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=components/Clock.js */'
    })
  );
});

/***/ }),

/***/ "./components/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Clock__ = __webpack_require__("./components/Clock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AddCount__ = __webpack_require__("./components/AddCount.js");
var _jsxFileName = '/Users/gibbonsoftltd/Documents/development/myhacks/movies-platform/movies-app/components/Page.js';






/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return state;
})(function (_ref) {
  var title = _ref.title,
      linkTo = _ref.linkTo,
      lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      title
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Clock__["a" /* default */], { lastUpdate: lastUpdate, light: light, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AddCount__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'nav',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: linkTo, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          'Navigate'
        )
      )
    )
  );
}));

/***/ }),

/***/ "./pages/other.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Page__ = __webpack_require__("./components/Page.js");
var _jsxFileName = '/Users/gibbonsoftltd/Documents/development/myhacks/movies-platform/movies-app/pages/other.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = this.props.startClock();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Page__["a" /* default */], { title: 'Other Page', linkTo: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__store__["c" /* serverRenderClock */])(isServer));
      store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* addCount */])());
      return { isServer: isServer };
    }
  }]);

  return Counter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* addCount */], dispatch),
    startClock: Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_3__store__["d" /* startClock */], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_3__store__["b" /* initStore */], null, mapDispatchToProps)(Counter));

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actionTypes */
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);




var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

var actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'
};

// REDUCERS
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light });
    case actionTypes.ADD:
      return Object.assign({}, state, { count: state.count + 1 });
    default:
      return state;
  }
};

// ACTIONS
var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
  };
};

var startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
    }, 1000);
  };
};

var addCount = function addCount() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.ADD });
  };
};

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/other.js");


/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=other.js.map