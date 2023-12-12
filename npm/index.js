(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{--header-height: 50px;--footer-height: 50px}._svg_rsp9u_6{width:1.5rem;height:1.5rem;cursor:pointer}._close_rsp9u_11{opacity:.4}._close_rsp9u_11 ._backdrop-opacity-100_rsp9u_13{--tw-backdrop-opacity: opacity(1);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}._ViewerContainer_rsp9u_18{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000000e9;color:#fff;z-index:1000}._ViewerContainer_rsp9u_18 ._header_rsp9u_29{width:100%;height:var(--header-height);display:flex;align-items:center;justify-content:space-between;padding:0 9px;position:relative}._ViewerContainer_rsp9u_18 ._header_rsp9u_29 ._headerContent_rsp9u_38{width:100%;height:100%;display:flex;align-items:center;justify-content:space-between;padding:0 2rem}._ViewerContainer_rsp9u_18 ._header_rsp9u_29 ._headerContent_rsp9u_38 ._icons_rsp9u_46{display:flex;gap:1rem}._ViewerContainer_rsp9u_18 ._showHeaderControls_rsp9u_54{position:absolute;z-index:1100;justify-content:flex-end;padding-right:2rem}._ViewerContainer_rsp9u_18 ._showHeaderControls_rsp9u_54 ._svg_rsp9u_6{width:2.5rem;height:2.5rem}._ViewerContainer_rsp9u_18 ._main_rsp9u_66{display:flex;align-items:center;justify-content:center;position:relative;width:100%;height:100%}._ViewerContainer_rsp9u_18 ._main_rsp9u_66 img{max-width:100%;max-height:100%;-o-object-fit:cover;object-fit:cover}._ViewerContainer_rsp9u_18 ._main_rsp9u_66 ._controls_rsp9u_80{width:100%;height:var(--header-height);position:absolute;top:50%;left:0;padding:0 2.25rem;display:flex;justify-content:space-between;align-items:center;z-index:1100}._ViewerContainer_rsp9u_18 ._main_rsp9u_66 ._controls_rsp9u_80 div{color:#ffffff80}._ViewerContainer_rsp9u_18 ._showMainControls_rsp9u_98{height:calc(100% - var(--header-height) - var(--footer-height))}._ViewerContainer_rsp9u_18 ._footer_rsp9u_104{width:100%;height:var(--footer-height);display:flex;align-items:center;justify-content:center}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var dr = Object.defineProperty;
var vr = (_, n, s) => n in _ ? dr(_, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : _[n] = s;
var Z = (_, n, s) => (vr(_, typeof n != "symbol" ? n + "" : n, s), s);
import N, { useState as V, useEffect as Oe } from "react";
var oe = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function hr() {
  if (ke)
    return $;
  ke = 1;
  var _ = N, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, b = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(o, p, R) {
    var g, h = {}, T = null, A = null;
    R !== void 0 && (T = "" + R), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (A = p.ref);
    for (g in p)
      m.call(p, g) && !y.hasOwnProperty(g) && (h[g] = p[g]);
    if (o && o.defaultProps)
      for (g in p = o.defaultProps, p)
        h[g] === void 0 && (h[g] = p[g]);
    return { $$typeof: n, type: o, key: T, ref: A, props: h, _owner: b.current };
  }
  return $.Fragment = s, $.jsx = j, $.jsxs = j, $;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function pr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = N, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), o = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), W = Symbol.iterator, z = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[z];
      return typeof r == "function" ? r : null;
    }
    var k = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var a = k.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ie = !1, De = !1, Le = !1, Ve = !1, $e = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === y || $e || e === b || e === R || e === g || Ve || e === A || Ie || De || Le || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === h || e.$$typeof === j || e.$$typeof === o || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case s:
          return "Portal";
        case y:
          return "Profiler";
        case b:
          return "StrictMode";
        case R:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return ie(r) + ".Consumer";
          case j:
            var t = e;
            return ie(t._context) + ".Provider";
          case p:
            return Ne(e, e.render, "ForwardRef");
          case h:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case T: {
            var c = e, f = c._payload, u = c._init;
            try {
              return S(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, D = 0, se, le, ue, ce, fe, de, ve;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function We() {
      {
        if (D === 0) {
          se = console.log, le = console.info, ue = console.warn, ce = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function ze() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: se
            }),
            info: P({}, e, {
              value: le
            }),
            warn: P({}, e, {
              value: ue
            }),
            error: P({}, e, {
              value: ce
            }),
            group: P({}, e, {
              value: fe
            }),
            groupCollapsed: P({}, e, {
              value: de
            }),
            groupEnd: P({}, e, {
              value: ve
            })
          });
        }
        D < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = k.ReactCurrentDispatcher, K;
    function H(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            K = a && a[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, U;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ye();
    }
    function pe(e, r) {
      if (!e || X)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      X = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = G.current, G.current = null, We();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (O) {
              a = O;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (O) {
              a = O;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            a = O;
          }
          e();
        }
      } catch (O) {
        if (O && a && typeof O.stack == "string") {
          for (var l = O.stack.split(`
`), x = a.stack.split(`
`), d = l.length - 1, v = x.length - 1; d >= 1 && v >= 0 && l[d] !== x[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (l[d] !== x[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || l[d] !== x[v]) {
                    var C = `
` + l[d].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, C), C;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = f, ze(), Error.prepareStackTrace = c;
      }
      var I = e ? e.displayName || e.name : "", Se = I ? H(I) : "";
      return typeof e == "function" && U.set(e, Se), Se;
    }
    function He(e, r, t) {
      return pe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ue(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case R:
          return H("Suspense");
        case g:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return He(e.render);
          case h:
            return B(e.type, r, t);
          case T: {
            var a = e, c = a._payload, f = a._init;
            try {
              return B(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, _e = {}, me = k.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Be(e, r, t, a, c) {
      {
        var f = Function.call.bind(q);
        for (var u in e)
          if (f(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var x = Error((a || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              l = e[u](r, u, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              l = d;
            }
            l && !(l instanceof Error) && (J(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, u, typeof l), J(null)), l instanceof Error && !(l.message in _e) && (_e[l.message] = !0, J(c), E("Failed %s type: %s", t, l.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function Q(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ze(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ye(e);
    }
    var L = k.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Ee, ee;
    ee = {};
    function Ke(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = S(L.current.type);
        ee[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(L.current.type), e.ref), ee[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          we || (we = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, a, c, f, u) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function nr(e, r, t, a, c) {
      {
        var f, u = {}, l = null, x = null;
        t !== void 0 && (ge(t), l = "" + t), Xe(r) && (ge(r.key), l = "" + r.key), Ke(r) && (x = r.ref, Qe(r, c));
        for (f in r)
          q.call(r, f) && !Ge.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (f in d)
            u[f] === void 0 && (u[f] = d[f]);
        }
        if (l || x) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && er(u, v), x && rr(u, v);
        }
        return tr(e, l, x, c, a, L.current, u);
      }
    }
    var re = k.ReactCurrentOwner, xe = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function be() {
      {
        if (re.current) {
          var e = S(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function ar(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var a = "";
        e && e._owner && e._owner !== re.current && (a = " It was passed a child from " + S(e._owner.type) + "."), F(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), F(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ne(a) && Ce(a, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Y(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), u; !(u = f.next()).done; )
              ne(u.value) && Ce(u.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = S(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var c = S(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            F(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Te(e, r, t, a, c, f) {
      {
        var u = Me(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = or(c);
          x ? l += x : l += be();
          var d;
          e === null ? d = "null" : Q(e) ? d = "array" : e !== void 0 && e.$$typeof === n ? (d = "<" + (S(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, l);
        }
        var v = nr(e, r, t, c, f);
        if (v == null)
          return v;
        if (u) {
          var C = r.children;
          if (C !== void 0)
            if (a)
              if (Q(C)) {
                for (var I = 0; I < C.length; I++)
                  je(C[I], e);
                Object.freeze && Object.freeze(C);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(C, e);
        }
        return e === m ? sr(v) : ir(v), v;
      }
    }
    function lr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Te(e, r, t, !1);
    }
    var cr = ur, fr = lr;
    M.Fragment = m, M.jsx = cr, M.jsxs = fr;
  }()), M;
}
process.env.NODE_ENV === "production" ? oe.exports = hr() : oe.exports = pr();
var i = oe.exports;
class _r {
  constructor(n) {
    Z(this, "setShowViewer");
    Z(this, "setImage");
    Z(this, "setZoom");
    this.setShowViewer = n.setShowViewer, this.setImage = n.setImage, this.setZoom = n.setZoom;
  }
  /**
   * Zooms in on the image.
   *
   * @param {Element | string} img - The image element or image selector.
   * @return {void} This function does not return anything.
   */
  zoomIn(n) {
    if (n instanceof HTMLElement)
      n.style.width = "100%";
    else {
      const s = document.querySelector("[viewerid]");
      s instanceof HTMLElement && (s.style.width = "100%");
    }
    this.setZoom(!1);
  }
  /**
   * Zooms out the image.
   *
   * @param {Element | string} img - The image element or the viewer id.
   * @return {void} This function does not return anything.
   */
  zoomOut(n) {
    if (n instanceof HTMLElement)
      n.style.width = "auto";
    else {
      const s = document.querySelector("[viewerid]");
      s instanceof HTMLElement && (s.style.width = "auto");
    }
    this.setZoom(!0);
  }
  /**
   * Extends the element to fullscreen if it exists.
   *
   * @param {string | undefined} e - The image ID, to be extended.
   */
  extend(n) {
    if (!n)
      return;
    const s = document.querySelector(`[viewerid="${n}"]`);
    s && (s == null || s.requestFullscreen(), s && document.fullscreenEnabled && s.addEventListener("fullscreenchange", () => {
      document.fullscreenElement || this.zoomOut(s);
    }));
  }
  /**
   * Show the image in the viewer.
   *
   * @param {React.MouseEvent<HTMLImageElement>} e - the mouse event, with the image triggering the function
   */
  show(n) {
    this.setShowViewer(!1), this.setImage({
      src: n.currentTarget.src,
      alt: n.currentTarget.alt,
      viewerid: n.currentTarget.getAttribute("viewerid") || ""
    });
  }
  /**
   * Closes the image viewer.
   *
   * @param {Element | string} img - The image element ID, to remove from the viewer.
   */
  close(n) {
    this.setShowViewer(!0), this.zoomOut(n);
  }
  /**
   * Filters and selects the previous right image from the given array.
   *
   * @param {ReactNode | null} arr - The array of ReactNodes to filter.
   * @param {string | undefined} img - The image to compare against the viewer IDs.
   */
  prevRigth(n, s) {
    if (!Array.isArray(n) || n.length < 1 || !s)
      return;
    const m = n.find(({ props: b }) => {
      const { viewerid: y } = b;
      return +s >= n.length ? +y == 1 : +y == +s + 1;
    });
    if (m) {
      const { src: b, alt: y, viewerid: j } = m.props;
      this.setImage({
        src: b,
        alt: y,
        viewerid: j
      }), this.zoomOut(m);
    }
  }
  /**
   * Filters the given array of ReactNode objects and returns the previous element based on the `props.viewerid` value.
   *
   * @param {ReactNode | null} arr - The array to filter.
   * @param {string | undefined} img - The image value to compare against `props.viewerid`.
   */
  prevLeft(n, s) {
    if (!Array.isArray(n) || n.length < 1 || !s)
      return;
    const m = n.find(({ props: b }) => {
      const { viewerid: y } = b;
      return +s <= 1 ? +y == n.length : +y === +s - 1;
    });
    if (m) {
      const { src: b, alt: y, viewerid: j } = m.props;
      this.setImage({
        src: b,
        alt: y,
        viewerid: j
      }), this.zoomOut(m);
    }
  }
}
const mr = (_) => /* @__PURE__ */ i.jsx("img", { ..._ }), yr = "_svg_rsp9u_6", gr = "_close_rsp9u_11", wr = "_ViewerContainer_rsp9u_18", Er = "_header_rsp9u_29", xr = "_headerContent_rsp9u_38", br = "_icons_rsp9u_46", Rr = "_showHeaderControls_rsp9u_54", Cr = "_main_rsp9u_66", jr = "_controls_rsp9u_80", Tr = "_showMainControls_rsp9u_98", Sr = "_footer_rsp9u_104", w = {
  svg: yr,
  close: gr,
  "backdrop-opacity-100": "_backdrop-opacity-100_rsp9u_13",
  ViewerContainer: wr,
  header: Er,
  headerContent: xr,
  icons: br,
  showHeaderControls: Rr,
  main: Cr,
  controls: jr,
  showMainControls: Tr,
  footer: Sr
}, Ae = ({
  style: _,
  controls: n,
  close: s
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: ` ${w.svg}
    ${!n && _}
    `,
    onClick: () => s(),
    children: /* @__PURE__ */ i.jsx(
      "svg",
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "100%",
        width: "100%",
        children: /* @__PURE__ */ i.jsx("path", { d: "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" })
      }
    )
  }
), Pr = (_) => {
  const { controls: n, children: s } = _, [m, b] = V(!0), [y, j] = V(!0), [o, p] = V(), [R, g] = V(!0), h = new _r({ setShowViewer: b, setImage: p, setZoom: j });
  Oe(() => {
    g(!!(n === void 0 || n));
  }, [n, o, s]);
  const [T, A] = V();
  return Oe(() => {
    const W = N.Children.map(s, (z, Y) => {
      if (N.isValidElement(z))
        return N.cloneElement(z, {
          onClick: (k) => h.show(k),
          viewerid: (Y + 1).toString(),
          key: Y
        });
    });
    A(W);
  }, [s]), /* @__PURE__ */ i.jsx(i.Fragment, { children: m ? T : /* @__PURE__ */ i.jsxs("div", { className: w.ViewerContainer, children: [
    /* @__PURE__ */ i.jsx(
      "header",
      {
        className: `${w.header}  ${!R && w.showHeaderControls}`,
        children: R ? (
          /* Gallery current image index and lenght */
          /* @__PURE__ */ i.jsxs("div", { className: w.headerContent, children: [
            /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsxs("p", { children: [
              " ",
              o && (o == null ? void 0 : o.viewerid),
              " /",
              " ",
              Array.isArray(s) && s.length
            ] }) }),
            /* @__PURE__ */ i.jsxs("div", { className: w.icons, children: [
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: w.svg,
                  onClick: () => h.extend(o && (o == null ? void 0 : o.viewerid)),
                  children: /* @__PURE__ */ i.jsxs(
                    "svg",
                    {
                      stroke: "currentColor",
                      fill: "currentColor",
                      strokeWidth: "0",
                      viewBox: "0 0 24 24",
                      height: "100%",
                      width: "100%",
                      children: [
                        /* @__PURE__ */ i.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
                        /* @__PURE__ */ i.jsx("path", { d: "M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z" })
                      ]
                    }
                  )
                }
              ),
              y ? /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: w.svg,
                  onClick: () => h.zoomIn(o ? o == null ? void 0 : o.viewerid : ""),
                  children: /* @__PURE__ */ i.jsxs(
                    "svg",
                    {
                      stroke: "currentColor",
                      fill: "none",
                      strokeWidth: "2",
                      viewBox: "0 0 24 24",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      height: "100%",
                      width: "100%",
                      children: [
                        /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                        /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                        /* @__PURE__ */ i.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
                        /* @__PURE__ */ i.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                      ]
                    }
                  )
                }
              ) : (
                /* zoom less */
                /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: w.svg,
                    onClick: () => h.zoomOut(o ? o == null ? void 0 : o.viewerid : ""),
                    children: /* @__PURE__ */ i.jsxs(
                      "svg",
                      {
                        stroke: "currentColor",
                        fill: "none",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        height: "100%",
                        width: "100%",
                        children: [
                          /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                          /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                          /* @__PURE__ */ i.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                        ]
                      }
                    )
                  }
                )
              ),
              /* @__PURE__ */ i.jsx(Ae, { controls: !0, close: () => h.close("") })
            ] })
          ] })
        ) : /* @__PURE__ */ i.jsx(
          Ae,
          {
            style: ` ${w.close}`,
            controls: !1,
            close: () => h.close("")
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "main",
      {
        className: `
      ${w.main} 
       ${R && w.showMainControls}
      
`,
        children: [
          /* @__PURE__ */ i.jsx(
            mr,
            {
              src: o && (o == null ? void 0 : o.src),
              viewerid: o ? o == null ? void 0 : o.viewerid : "",
              alt: o && (o == null ? void 0 : o.alt)
            }
          ),
          R && /* @__PURE__ */ i.jsxs("div", { className: w.controls, children: [
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: w.svg,
                id: "prev-left",
                onClick: () => h.prevLeft(
                  T,
                  // eslint-disable-next-line prettier/prettier
                  o ? o.viewerid : void 0
                ),
                children: /* @__PURE__ */ i.jsx(
                  "svg",
                  {
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0",
                    viewBox: "0 0 16 16",
                    height: "100%",
                    width: "100%",
                    children: /* @__PURE__ */ i.jsx("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" })
                  }
                )
              }
            ),
            /* @__PURE__ */ i.jsx(
              "div",
              {
                id: "prev-rigth",
                className: w.svg,
                onClick: () => h.prevRigth(T, o == null ? void 0 : o.viewerid),
                children: /* @__PURE__ */ i.jsx(
                  "svg",
                  {
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0",
                    viewBox: "0 0 16 16",
                    height: "100%",
                    width: "100%",
                    children: /* @__PURE__ */ i.jsx("path", { d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" })
                  }
                )
              }
            )
          ] })
        ]
      }
    ),
    R && /* @__PURE__ */ i.jsx("footer", { className: w.footer, children: /* @__PURE__ */ i.jsx("p", { children: o && (o == null ? void 0 : o.alt) }) })
  ] }) });
};
export {
  Pr as default
};
