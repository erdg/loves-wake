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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "CNFk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "FmYJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HW6M":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ./node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["h"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["h"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// EXTERNAL MODULE: ./css/spectre.min.css
var spectre_min = __webpack_require__("v67u");
var spectre_min_default = /*#__PURE__*/__webpack_require__.n(spectre_min);

// EXTERNAL MODULE: ./css/spectre-icons.min.css
var spectre_icons_min = __webpack_require__("f5Gx");
var spectre_icons_min_default = /*#__PURE__*/__webpack_require__.n(spectre_icons_min);

// EXTERNAL MODULE: ./css/flex-container.css
var flex_container = __webpack_require__("FmYJ");
var flex_container_default = /*#__PURE__*/__webpack_require__.n(flex_container);

// EXTERNAL MODULE: ./css/dialog.css
var dialog = __webpack_require__("CNFk");
var dialog_default = /*#__PURE__*/__webpack_require__.n(dialog);

// CONCATENATED MODULE: ./components/flex-container/index.js


var _ref = Object(preact_min["h"])("div", { "class": "left-rail hide-xs" });

var flex_container__ref2 = Object(preact_min["h"])("div", { "class": "left-gutter" });

var _ref3 = Object(preact_min["h"])("div", { "class": "right-gutter" });

var flex_container_FlexContainer = function FlexContainer(props) {
   return Object(preact_min["h"])(
      "div",
      { "class": "flex-container" },
      _ref,
      flex_container__ref2,
      Object(preact_min["h"])(
         "div",
         { "class": "avatar-rail hide-lg" },
         props.avatarRail
      ),
      Object(preact_min["h"])(
         "div",
         { "class": "form-rail" },
         props.formRail
      ),
      Object(preact_min["h"])(
         "div",
         { "class": "dialog-rail hide-sm" },
         props.dialogRail
      ),
      _ref3
   );
};


// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("HW6M");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./components/dialog.js



var dialog_Dialog = function Dialog(props) {
   var btnClasses = classnames_default()('btn', 'btn-action', 'btn-sm', 'btn-primary', 'circle', 'text-bold', 'float-right', 'm-1');
   var diaClasses = classnames_default()('dialog', {
      'd-none': !props.active
   });
   return Object(preact_min["h"])(
      'div',
      { 'class': 'relative mt-1' },
      Object(preact_min["h"])(
         'div',
         { 'class': diaClasses },
         props.children
      ),
      Object(preact_min["h"])(
         'button',
         {
            'class': btnClasses
         },
         'i'
      )
   );
};


// CONCATENATED MODULE: ./routes/login/components/login-form-inputs.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var login_form_inputs__ref = Object(preact_min["h"])(
   'label',
   { 'class': 'form-label' },
   'Email'
);

var login_form_inputs_EmailInput = function EmailInput(props) {
   return Object(preact_min["h"])(
      'div',
      null,
      login_form_inputs__ref,
      Object(preact_min["h"])('input', {
         value: props.email,
         onChange: props.handleEmailChange,
         type: 'email',
         'class': 'form-input',
         placeholder: 'Your email'
      })
   );
};

var login_form_inputs__ref2 = Object(preact_min["h"])(
   'label',
   { 'class': 'form-label' },
   'Password'
);

var login_form_inputs__ref3 = Object(preact_min["h"])('i', { 'class': 'form-icon' });

var login_form_inputs_PasswordInput = function (_Component) {
   _inherits(PasswordInput, _Component);

   function PasswordInput() {
      _classCallCheck(this, PasswordInput);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
   }

   PasswordInput.prototype.render = function render(props) {
      return Object(preact_min["h"])(
         'div',
         null,
         login_form_inputs__ref2,
         Object(preact_min["h"])('input', {
            value: props.password,
            onChange: props.handlePasswordChange,
            'class': 'form-input',
            type: props.showPassword ? "text" : "password",
            placeholder: 'Your password'
         }),
         Object(preact_min["h"])(
            'label',
            { 'class': 'form-switch' },
            Object(preact_min["h"])('input', { type: 'checkbox',
               onClick: props.toggleShowPassword
            }),
            login_form_inputs__ref3,
            'Show password'
         )
      );
   };

   return PasswordInput;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/toast.js




var toast_Toast = function Toast(props) {
   var classes = classnames_default()('toast', {
      'toast-primary': props.primary,
      'toast-success': props.success,
      'toast-warning': props.warning,
      'toast-error': props.error,
      'd-none': !props.active
   });
   return Object(preact_min["h"])(
      'div',
      { 'class': classes },
      props.children
   );
};


// CONCATENATED MODULE: ./routes/login/components/login-form.js


function login_form__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function login_form__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function login_form__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var login_form__ref = Object(preact_min["h"])(
   'h1',
   null,
   'Login'
);

var login_form__ref2 = Object(preact_min["h"])(
   'button',
   { 'class': 'btn btn-link float-right' },
   'Recover account'
);

var login_form_LoginForm = function (_Component) {
   login_form__inherits(LoginForm, _Component);

   function LoginForm() {
      login_form__classCallCheck(this, LoginForm);

      return login_form__possibleConstructorReturn(this, _Component.apply(this, arguments));
   }

   LoginForm.prototype.render = function render(props) {
      var btnClasses = classnames_default()('btn', 'btn-primary', {
         'loading': props.loading
      });
      return Object(preact_min["h"])(
         'div',
         { 'class': 'form-group m-2' },
         login_form__ref,
         Object(preact_min["h"])(
            toast_Toast,
            { error: true, active: props.showServerError },
            props.serverError
         ),
         Object(preact_min["h"])(login_form_inputs_EmailInput, {
            email: props.email,
            handleEmailChange: props.handleEmailChange
         }),
         Object(preact_min["h"])(login_form_inputs_PasswordInput, {
            password: props.password,
            handlePasswordChange: props.handlePasswordChange,
            toggleShowPassword: props.toggleShowPassword,
            showPassword: props.showPassword
         }),
         Object(preact_min["h"])(
            'div',
            { 'class': 'row' },
            Object(preact_min["h"])(
               'button',
               {
                  'class': btnClasses,
                  onClick: props.handleLogin
               },
               'Login'
            ),
            login_form__ref2
         )
      );
   };

   return LoginForm;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/login/components/login-form-container.js


function login_form_container__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function login_form_container__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function login_form_container__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var login_form_container_LoginFormContainer = function (_Component) {
   login_form_container__inherits(LoginFormContainer, _Component);

   function LoginFormContainer(props) {
      login_form_container__classCallCheck(this, LoginFormContainer);

      // this._handleLogin = this._handleLogin.bind(this);
      var _this = login_form_container__possibleConstructorReturn(this, _Component.call(this, props));

      _this._handleLogin = function () {
         // loading spinner on button
         _this.setState({ loading: true });

         fetch("https://erikdgustafson.com/api/!loginUser?" + _this.state.email + "&" + _this.state.password).then(function (resp) {
            return resp.json();
         }).then(function (json) {
            if (json.error) {
               _this.setState({
                  // display errors and remove loading spinner
                  serverError: json.error,
                  showServerError: true,
                  loading: false
               });
            } else if (json.token) {
               // remove loading spinner
               // set loginSuccess flag to true to trigger route change to 'Profile'
               // FIXME - the above feels like a hack. 
               // might be time to add a redux-style store?
               _this.setState({ loading: false, loginSuccess: true });
               // send event up to set global app state with logged in user
               _this.props.handleLoginSuccess(json.user, json.token);
            }
         }).then(function () {
            if (_this.state.loginSuccess) {
               route('/profile', true);
            }
         });

         // clear password
         _this.setState({ password: '' });
      };

      _this._handleEmailChange = _this._handleEmailChange.bind(_this);
      _this._handlePasswordChange = _this._handlePasswordChange.bind(_this);
      _this._toggleShowPassword = _this._toggleShowPassword.bind(_this);
      _this.state = {
         email: '',
         password: '',
         showPassword: false,
         serverError: '',
         showServerError: false,
         loading: false,
         loginSuccess: false
      };
      return _this;
   }

   LoginFormContainer.prototype._toggleShowPassword = function _toggleShowPassword() {
      var showPassword = !this.state.showPassword;
      this.setState({ showPassword: showPassword });
   };

   LoginFormContainer.prototype._handleEmailChange = function _handleEmailChange(e) {
      this.setState({ email: e.target.value });
   };

   LoginFormContainer.prototype._handlePasswordChange = function _handlePasswordChange(e) {
      this.setState({ password: e.target.value });
   };

   LoginFormContainer.prototype.render = function render() {
      return Object(preact_min["h"])(login_form_LoginForm, {

         serverError: this.state.serverError,
         showServerError: this.state.showServerError,

         email: this.state.email,
         handleEmailChange: this._handleEmailChange,

         password: this.state.password,
         handlePasswordChange: this._handlePasswordChange,

         toggleShowPassword: this._toggleShowPassword,
         showPassword: this.state.showPassword,

         handleLogin: this._handleLogin,

         loading: this.state.loading

      });
   };

   return LoginFormContainer;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/login/index.js


function login__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function login__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function login__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var login_Login = function (_Component) {
   login__inherits(Login, _Component);

   function Login() {
      login__classCallCheck(this, Login);

      return login__possibleConstructorReturn(this, _Component.apply(this, arguments));
   }

   Login.prototype.render = function render(props) {
      return Object(preact_min["h"])(flex_container_FlexContainer, {
         formRail: Object(preact_min["h"])(login_form_container_LoginFormContainer, {
            handleLoginSuccess: function handleLoginSuccess(user, token) {
               return props.handleLoginSuccess(user, token);
            }
         })
      });
   };

   return Login;
}(preact_min["Component"]);

/* harmony default export */ var login = (login_Login);
// CONCATENATED MODULE: ./routes/home/index.js



var home__ref = Object(preact_min["h"])(
   'h1',
   null,
   'Home Page'
);

var Home = function Home() {
   return home__ref;
};

/* harmony default export */ var home = (Home);
// CONCATENATED MODULE: ./routes/signup/components/signup-form-inputs.js


function signup_form_inputs__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function signup_form_inputs__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function signup_form_inputs__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var signup_form_inputs__ref = Object(preact_min["h"])(
   'label',
   { 'class': 'form-label' },
   'Email'
);

var signup_form_inputs_EmailInput = function EmailInput(props) {
   return Object(preact_min["h"])(
      'div',
      null,
      signup_form_inputs__ref,
      Object(preact_min["h"])('input', {
         value: props.email,
         onChange: props.handleEmailChange,
         type: 'email',
         'class': 'form-input',
         placeholder: 'Your email'
      })
   );
};

var signup_form_inputs__ref2 = Object(preact_min["h"])(
   'div',
   { 'class': 'card' },
   Object(preact_min["h"])(
      'div',
      { 'class': 'card-body' },
      'Make sure you have a really secure password or else your account could get all fucked up by hackers.'
   )
);

var signup_form_inputs__ref3 = Object(preact_min["h"])(
   'label',
   { 'class': 'form-label' },
   'Password'
);

var _ref4 = Object(preact_min["h"])('i', { 'class': 'form-icon' });

var signup_form_inputs_PasswordInput = function (_Component) {
   signup_form_inputs__inherits(PasswordInput, _Component);

   function PasswordInput(props) {
      signup_form_inputs__classCallCheck(this, PasswordInput);

      var _this = signup_form_inputs__possibleConstructorReturn(this, _Component.call(this, props));

      _this._toggleDialog = _this._toggleDialog.bind(_this);
      _this.state = {
         showDialog: false
      };
      return _this;
   }

   PasswordInput.prototype._toggleDialog = function _toggleDialog() {
      var showDialog = !this.state.showDialog;
      this.setState({ showDialog: showDialog });
   };

   PasswordInput.prototype.render = function render(props) {
      return Object(preact_min["h"])(
         'div',
         null,
         Object(preact_min["h"])(
            dialog_Dialog,
            { active: this.state.showDialog },
            signup_form_inputs__ref2
         ),
         signup_form_inputs__ref3,
         Object(preact_min["h"])('input', {
            value: props.password,
            onChange: props.handlePasswordChange,
            onFocusIn: this._toggleDialog,
            onFocusOut: this._toggleDialog,
            'class': 'form-input',
            type: props.showPassword ? "text" : "password",
            placeholder: 'Your password'
         }),
         Object(preact_min["h"])(
            'label',
            { 'class': 'form-switch' },
            Object(preact_min["h"])('input', { type: 'checkbox',
               onClick: props.toggleShowPassword
            }),
            _ref4,
            'Show password'
         )
      );
   };

   return PasswordInput;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/signup/components/signup-form.js


function signup_form__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function signup_form__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function signup_form__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var signup_form__ref = Object(preact_min["h"])(
   'h1',
   null,
   'Signup'
);

var signup_form_SignupForm = function (_Component) {
   signup_form__inherits(SignupForm, _Component);

   function SignupForm() {
      signup_form__classCallCheck(this, SignupForm);

      return signup_form__possibleConstructorReturn(this, _Component.apply(this, arguments));
   }

   SignupForm.prototype.render = function render(props) {
      var btnClasses = classnames_default()('btn', 'btn-primary', {
         'loading': props.loading
      });
      return Object(preact_min["h"])(
         'div',
         { 'class': 'form-group m-2' },
         signup_form__ref,
         Object(preact_min["h"])(signup_form_inputs_EmailInput, {
            email: props.email,
            handleEmailChange: props.handleEmailChange
         }),
         Object(preact_min["h"])(signup_form_inputs_PasswordInput, {
            password: props.password,
            handlePasswordChange: props.handlePasswordChange,
            toggleShowPassword: props.toggleShowPassword,
            showPassword: props.showPassword
         }),
         Object(preact_min["h"])(
            'button',
            {
               'class': btnClasses,
               onClick: props.handleSignup
            },
            'Create account'
         )
      );
   };

   return SignupForm;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/signup/components/signup-form-container.js


function signup_form_container__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function signup_form_container__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function signup_form_container__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var signup_form_container_SignupFormContainer = function (_Component) {
   signup_form_container__inherits(SignupFormContainer, _Component);

   function SignupFormContainer(props) {
      signup_form_container__classCallCheck(this, SignupFormContainer);

      var _this = signup_form_container__possibleConstructorReturn(this, _Component.call(this, props));

      _this._handleSignup = _this._handleSignup.bind(_this);
      _this._handleEmailChange = _this._handleEmailChange.bind(_this);
      _this._handlePasswordChange = _this._handlePasswordChange.bind(_this);
      _this._toggleShowPassword = _this._toggleShowPassword.bind(_this);
      _this.state = {
         email: '',
         password: '',
         showPassword: false,
         serverError: '',
         showServerError: false,
         loading: false,
         signupSuccess: false
      };
      return _this;
   }

   SignupFormContainer.prototype._toggleShowPassword = function _toggleShowPassword() {
      var showPassword = !this.state.showPassword;
      this.setState({ showPassword: showPassword });
   };

   SignupFormContainer.prototype._handleSignup = function _handleSignup() {
      var _this2 = this;

      this.setState({ loading: true });

      fetch("https://erikdgustafson.com/api/!newUser?" + this.state.email + "&" + this.state.password, { method: "POST" }).then(function (resp) {
         return resp.json();
      }).then(function (json) {
         if (json.error) {
            _this2.setState({
               // display errors and remove loading spinner
               serverError: json.error,
               showServerError: true,
               loading: false
            });
         } else if (json.email) {
            _this2.setState({ loading: false, signupSuccess: true });
            _this2.props.handleSignupSuccess(json.email);
         }
      }).then(function () {
         if (_this2.state.signupSuccess) {
            route('/confirm-account', true);
         }
      });

      this.setState({ email: '', password: '' });
   };

   SignupFormContainer.prototype._handleEmailChange = function _handleEmailChange(e) {
      this.setState({ email: e.target.value });
   };

   SignupFormContainer.prototype._handlePasswordChange = function _handlePasswordChange(e) {
      this.setState({ password: e.target.value });
   };

   SignupFormContainer.prototype.render = function render() {
      return Object(preact_min["h"])(signup_form_SignupForm, {

         serverError: this.state.serverError,
         showServerError: this.state.showServerError,

         email: this.state.email,
         handleEmailChange: this._handleEmailChange,

         password: this.state.password,
         handlePasswordChange: this._handlePasswordChange,

         toggleShowPassword: this._toggleShowPassword,
         showPassword: this.state.showPassword,

         handleSignup: this._handleSignup,

         loading: this.state.loading

      });
   };

   return SignupFormContainer;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/signup/index.js


function signup__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function signup__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function signup__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var signup_Signup = function (_Component) {
   signup__inherits(Signup, _Component);

   function Signup() {
      signup__classCallCheck(this, Signup);

      return signup__possibleConstructorReturn(this, _Component.apply(this, arguments));
   }

   Signup.prototype.render = function render(props) {
      return Object(preact_min["h"])(flex_container_FlexContainer, {
         formRail: Object(preact_min["h"])(signup_form_container_SignupFormContainer, {
            handleSignupSuccess: function handleSignupSuccess(email) {
               return props.handleSignupSuccess(email);
            }
         })
      });
   };

   return Signup;
}(preact_min["Component"]);

/* harmony default export */ var signup = (signup_Signup);
// CONCATENATED MODULE: ./components/form-inputs/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function form_inputs__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_inputs__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function form_inputs__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



var form_inputs__ref = Object(preact_min["h"])(
   "label",
   { "class": "form-label" },
   "Email"
);

var form_inputs_EmailInput = function EmailInput(props) {
   return Object(preact_min["h"])(
      "div",
      null,
      form_inputs__ref,
      Object(preact_min["h"])("input", _extends({}, props, {
         type: "email",
         "class": "form-input",
         placeholder: "Your email"
      }))
   );
};

var form_inputs_TextInput = function TextInput(_ref2) {
   var label = _ref2.label,
       props = _objectWithoutProperties(_ref2, ["label"]);

   return Object(preact_min["h"])(
      "div",
      null,
      Object(preact_min["h"])(
         "label",
         { "class": "form-label" },
         props.label
      ),
      Object(preact_min["h"])("input", _extends({}, props, {
         type: "text",
         "class": "form-input"
      }))
   );
};

var form_inputs_NumberInput = function NumberInput(props) {
   return Object(preact_min["h"])("input", _extends({}, props, {
      type: "number",
      "class": "form-input"
   }));
};

var form_inputs__ref3 = Object(preact_min["h"])(
   "label",
   { "class": "form-label" },
   "Password"
);

var form_inputs_PasswordInput = function (_Component) {
   form_inputs__inherits(PasswordInput, _Component);

   function PasswordInput(props) {
      form_inputs__classCallCheck(this, PasswordInput);

      var _this = form_inputs__possibleConstructorReturn(this, _Component.call(this, props));

      _this._toggleShowPassword = _this._toggleShowPassword.bind(_this);
      _this.state = {
         showPassword: false
      };
      return _this;
   }

   PasswordInput.prototype._toggleShowPassword = function _toggleShowPassword() {
      var showPassword = !this.state.showPassword;
      this.setState({ showPassword: showPassword });
   };

   PasswordInput.prototype.render = function render(props) {
      return Object(preact_min["h"])(
         "div",
         null,
         form_inputs__ref3,
         Object(preact_min["h"])("input", _extends({}, props, {
            "class": "form-input",
            type: this.state.showPassword ? "text" : "password",
            placeholder: "Your password"
         })),
         Object(preact_min["h"])(form_inputs_ShowPasswordSwitch, { onClick: this._toggleShowPassword })
      );
   };

   return PasswordInput;
}(preact_min["Component"]);

var form_inputs__ref4 = Object(preact_min["h"])("i", { "class": "form-icon" });

var form_inputs_ShowPasswordSwitch = function ShowPasswordSwitch(props) {
   return Object(preact_min["h"])(
      "div",
      null,
      Object(preact_min["h"])(
         "label",
         { "class": "form-switch" },
         Object(preact_min["h"])("input", _extends({ type: "checkbox"
         }, props)),
         form_inputs__ref4,
         "Show password"
      )
   );
};


// CONCATENATED MODULE: ./routes/confirm-account/components/confirm-account-form.js


function confirm_account_form__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function confirm_account_form__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function confirm_account_form__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var confirm_account_form__ref = Object(preact_min["h"])(
   'h1',
   { 'class': 'text-center' },
   'Confirm Account'
);

var confirm_account_form__ref2 = Object(preact_min["h"])('i', { 'class': 'icon icon-3x icon-mail', style: 'width: 100%;margin: 0 auto;' });

var confirm_account_form__ref3 = Object(preact_min["h"])(
   'p',
   { 'class': 'text-center' },
   'We sent you an email. Please enter the six-digit number below to confirm your account.'
);

var confirm_account_form__ref4 = Object(preact_min["h"])(
   'p',
   { 'class': 'form-input-hint' },
   'Please enter a six-digit number'
);

var confirm_account_form_ConfirmAccountForm = function (_Component) {
   confirm_account_form__inherits(ConfirmAccountForm, _Component);

   function ConfirmAccountForm() {
      confirm_account_form__classCallCheck(this, ConfirmAccountForm);

      return confirm_account_form__possibleConstructorReturn(this, _Component.apply(this, arguments));
   }

   ConfirmAccountForm.prototype.render = function render(props) {
      var formClasses = classnames_default()('form-group', {
         'has-error': props.hasError
      });
      var btnClasses = classnames_default()('btn', 'btn-primary', 'centered', 'mt-2', {
         'loading': props.loading
      });
      return Object(preact_min["h"])(
         'div',
         { 'class': formClasses },
         confirm_account_form__ref,
         confirm_account_form__ref2,
         confirm_account_form__ref3,
         Object(preact_min["h"])(
            toast_Toast,
            { error: true, active: props.showServerError },
            props.serverError
         ),
         Object(preact_min["h"])(form_inputs_TextInput, {
            value: props.confirmationNumber,
            onChange: props.handleConfirmationNumberChange
         }),
         confirm_account_form__ref4,
         Object(preact_min["h"])(
            'button',
            {
               'class': btnClasses,
               onClick: props.handleConfirmAccount
            },
            'Confirm Account'
         )
      );
   };

   return ConfirmAccountForm;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/confirm-account/components/confirm-account-form-container.js


function confirm_account_form_container__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function confirm_account_form_container__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function confirm_account_form_container__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var confirm_account_form_container_ConfirmAccountFormContainer = function (_Component) {
   confirm_account_form_container__inherits(ConfirmAccountFormContainer, _Component);

   function ConfirmAccountFormContainer(props) {
      confirm_account_form_container__classCallCheck(this, ConfirmAccountFormContainer);

      var _this = confirm_account_form_container__possibleConstructorReturn(this, _Component.call(this, props));

      _this._handleConfirmationNumberChange = _this._handleConfirmationNumberChange.bind(_this);
      _this._handleConfirmAccount = _this._handleConfirmAccount.bind(_this);

      _this.state = {
         confirmationNumber: '',
         serverError: '',
         showServerError: false,
         confirmAccountSuccess: false,
         loading: false
      };
      return _this;
   }

   ConfirmAccountFormContainer.prototype._handleConfirmationNumberChange = function _handleConfirmationNumberChange(e) {
      this.setState({ confirmationNumber: e.target.value });
   };

   ConfirmAccountFormContainer.prototype._handleConfirmAccount = function _handleConfirmAccount() {
      var _this2 = this;

      this.setState({ loading: true });

      fetch("https://erikdgustafson.com/api/!confirmUser?" + this.props.email + "&+" + this.state.confirmationNumber, { method: "POST" }).then(function (resp) {
         return resp.json();
      }).then(function (json) {
         if (json.error) {
            _this2.setState({
               // display errors and remove loading spinner
               serverError: json.error,
               showServerError: true,
               loading: false
            });
         } else if (json.token) {
            // remove loading spinner
            // set loginSuccess flag to true to trigger route change to 'Profile'
            // FIXME - the above feels like a hack. 
            // might be time to add a redux-style store?
            _this2.setState({ loading: false, confirmAccountSuccess: true });
            // send event up to set global app state with logged in user
            _this2.props.handleLoginSuccess(json.user, json.token);
         }
      }).then(function () {
         if (_this2.state.confirmAccountSuccess) {
            route('/profile', true);
         }
      });
   };

   // TODO - hasError below should be a method called as...
   //
   // hasError={ this._hasError(this.state.confirmationNumber) }
   // 
   // ...or something like that.

   ConfirmAccountFormContainer.prototype.render = function render(props) {
      return Object(preact_min["h"])(confirm_account_form_ConfirmAccountForm, {

         confirmationNumber: this.state.confirmationNumber,
         handleConfirmationNumberChange: this._handleConfirmationNumberChange,

         hasError: this.state.confirmationNumber && (isNaN(this.state.confirmationNumber) || !(this.state.confirmationNumber.length === 6)) ? true : false,

         serverError: this.state.serverError,
         showServerError: this.state.showServerError,

         loading: this.state.loading,
         handleConfirmAccount: this._handleConfirmAccount

      });
   };

   return ConfirmAccountFormContainer;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/confirm-account/index.js


function confirm_account__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function confirm_account__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function confirm_account__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var confirm_account_ConfirmAccount = function (_Component) {
   confirm_account__inherits(ConfirmAccount, _Component);

   function ConfirmAccount() {
      confirm_account__classCallCheck(this, ConfirmAccount);

      return confirm_account__possibleConstructorReturn(this, _Component.apply(this, arguments));
   }

   ConfirmAccount.prototype.render = function render(props) {
      return Object(preact_min["h"])(flex_container_FlexContainer, {
         formRail: Object(preact_min["h"])(confirm_account_form_container_ConfirmAccountFormContainer, {
            email: props.email,
            handleLoginSuccess: function handleLoginSuccess(user, token) {
               return props.handleLoginSuccess(user, token);
            }
         })
      });
   };

   return ConfirmAccount;
}(preact_min["Component"]);

/* harmony default export */ var confirm_account = (confirm_account_ConfirmAccount);
// CONCATENATED MODULE: ./routes/profile/index.js



var profile__ref = Object(preact_min["h"])(
   "h1",
   null,
   "Profile Page"
);

var profile_Profile = function Profile(props) {
   return Object(preact_min["h"])(
      "div",
      null,
      profile__ref,
      Object(preact_min["h"])(
         "p",
         null,
         "User '",
         props.user,
         "' logged in with login token: '",
         props.loginToken,
         "'"
      ),
      Object(preact_min["h"])(
         "button",
         {
            "class": "btn btn-primary",
            onClick: props.handleLogout
         },
         "Logout"
      )
   );
};

/* harmony default export */ var profile = (profile_Profile);
// CONCATENATED MODULE: ./components/navbar.js




var navbar__ref = Object(preact_min["h"])(
   'header',
   { 'class': 'navbar m-2' },
   Object(preact_min["h"])(
      'section',
      { 'class': 'navbar-section' },
      Object(preact_min["h"])(
         preact_router_es_Link,
         { 'class': 'navbar-brand', activeClassName: 'active', href: '/' },
         'Love\'s Wake'
      )
   ),
   Object(preact_min["h"])(
      'section',
      { 'class': 'navbar-section' },
      Object(preact_min["h"])(
         preact_router_es_Link,
         { 'class': 'btn btn-primary', activeClassName: 'active', href: '#' },
         'Start a Shrine'
      ),
      Object(preact_min["h"])(
         preact_router_es_Link,
         { 'class': 'btn btn-link', activeClassName: 'active', href: '/login' },
         'Login'
      ),
      Object(preact_min["h"])(
         preact_router_es_Link,
         { 'class': 'btn btn-link', activeClassName: 'active', href: '/signup' },
         'Signup'
      )
   )
);

var NavBar = function NavBar() {
   return navbar__ref;
};

/* harmony default export */ var navbar = (NavBar);
// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_App; });


function index__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// preact


// preact-router



// css





// routes






// get that navbar


var index__ref = Object(preact_min["h"])(navbar, null);

var index__ref2 = Object(preact_min["h"])(home, { path: '/' });

var index_App = function (_Component) {
   index__inherits(App, _Component);

   function App() {
      var _temp, _this, _ret;

      index__classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = index__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
         user: '',
         loginToken: '',
         email: ''
      }, _this.handleLoginSuccess = function (user, token) {
         _this.setState({
            user: user,
            loginToken: token
         });
      }, _this.handleSignupSuccess = function (email) {
         _this.setState({
            email: email
         });
      }, _this.handleLogout = function () {
         _this.setState({
            user: '',
            loginToken: ''
         });
         route("/login", true);
      }, _temp), index__possibleConstructorReturn(_this, _ret);
   }

   App.prototype.render = function render() {
      return Object(preact_min["h"])(
         'div',
         null,
         index__ref,
         Object(preact_min["h"])(
            preact_router_es,
            null,
            index__ref2,
            Object(preact_min["h"])(login, {
               path: '/login',
               handleLoginSuccess: this.handleLoginSuccess
            }),
            Object(preact_min["h"])(signup, {
               path: '/signup',
               handleSignupSuccess: this.handleSignupSuccess
            }),
            Object(preact_min["h"])(confirm_account, {
               path: '/confirm-account',
               email: this.state.email,
               handleLoginSuccess: this.handleLoginSuccess
            }),
            Object(preact_min["h"])(profile, {
               path: '/profile',
               user: this.state.user,
               loginToken: this.state.loginToken,
               handleLogout: this.handleLogout
            })
         )
      );
   };

   return App;
}(preact_min["Component"]);



/***/ }),

/***/ "f5Gx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "v67u":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map