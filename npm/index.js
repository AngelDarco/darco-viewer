var fr = Object.defineProperty;
var dr = (m, n, s) => n in m ? fr(m, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : m[n] = s;
var J = (m, n, s) => (dr(m, typeof n != "symbol" ? n + "" : n, s), s);
import $, { useState as L, useEffect as Se } from "react";
var ne = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  if (Oe)
    return W;
  Oe = 1;
  var m = $, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, E = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(i, p, R) {
    var w, h = {}, C = null, P = null;
    R !== void 0 && (C = "" + R), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (P = p.ref);
    for (w in p)
      y.call(p, w) && !g.hasOwnProperty(w) && (h[w] = p[w]);
    if (i && i.defaultProps)
      for (w in p = i.defaultProps, p)
        h[w] === void 0 && (h[w] = p[w]);
    return { $$typeof: n, type: i, key: C, ref: P, props: h, _owner: E.current };
  }
  return W.Fragment = s, W.jsx = j, W.jsxs = j, W;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function hr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var m = $, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), i = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), M = Symbol.iterator, z = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[z];
      return typeof r == "function" ? r : null;
    }
    var O = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var o = O.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Fe = !1, Ie = !1, De = !1, Le = !1, We = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === g || We || e === E || e === R || e === w || Le || e === P || Fe || Ie || De || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === h || e.$$typeof === j || e.$$typeof === i || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case s:
          return "Portal";
        case g:
          return "Profiler";
        case E:
          return "StrictMode";
        case R:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return oe(r) + ".Consumer";
          case j:
            var t = e;
            return oe(t._context) + ".Provider";
          case p:
            return $e(e, e.render, "ForwardRef");
          case h:
            var o = e.displayName || null;
            return o !== null ? o : T(e.type) || "Memo";
          case C: {
            var c = e, f = c._payload, u = c._init;
            try {
              return T(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, ae, se, le, ue, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Me() {
      {
        if (I === 0) {
          ae = console.log, se = console.info, le = console.warn, ue = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        I++;
      }
    }
    function ze() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ae
            }),
            info: k({}, e, {
              value: se
            }),
            warn: k({}, e, {
              value: le
            }),
            error: k({}, e, {
              value: ue
            }),
            group: k({}, e, {
              value: ce
            }),
            groupCollapsed: k({}, e, {
              value: fe
            }),
            groupEnd: k({}, e, {
              value: de
            })
          });
        }
        I < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = O.ReactCurrentDispatcher, G;
    function Y(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            G = o && o[1] || "";
          }
        return `
` + G + e;
      }
    }
    var K = !1, U;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ne();
    }
    function he(e, r) {
      if (!e || K)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      K = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = Z.current, Z.current = null, Me();
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
            } catch (S) {
              o = S;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (S) {
              o = S;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            o = S;
          }
          e();
        }
      } catch (S) {
        if (S && o && typeof S.stack == "string") {
          for (var l = S.stack.split(`
`), b = o.stack.split(`
`), d = l.length - 1, v = b.length - 1; d >= 1 && v >= 0 && l[d] !== b[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (l[d] !== b[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || l[d] !== b[v]) {
                    var _ = `
` + l[d].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, _), _;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        K = !1, Z.current = f, ze(), Error.prepareStackTrace = c;
      }
      var F = e ? e.displayName || e.name : "", Te = F ? Y(F) : "";
      return typeof e == "function" && U.set(e, Te), Te;
    }
    function Ye(e, r, t) {
      return he(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ue(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case R:
          return Y("Suspense");
        case w:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ye(e.render);
          case h:
            return B(e.type, r, t);
          case C: {
            var o = e, c = o._payload, f = o._init;
            try {
              return B(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, pe = {}, me = O.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Be(e, r, t, o, c) {
      {
        var f = Function.call.bind(H);
        for (var u in e)
          if (f(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var b = Error((o || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              l = e[u](r, u, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              l = d;
            }
            l && !(l instanceof Error) && (q(c), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, u, typeof l), q(null)), l instanceof Error && !(l.message in pe) && (pe[l.message] = !0, q(c), x("Failed %s type: %s", t, l.message), q(null));
          }
      }
    }
    var He = Array.isArray;
    function X(e) {
      return He(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
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
      if (Je(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ye(e);
    }
    var D = O.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, xe, Q;
    Q = {};
    function Ge(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = T(D.current.type);
        Q[t] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(D.current.type), e.ref), Q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          we || (we = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          xe || (xe = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, o, c, f, u) {
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
        value: o
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function tr(e, r, t, o, c) {
      {
        var f, u = {}, l = null, b = null;
        t !== void 0 && (ge(t), l = "" + t), Ke(r) && (ge(r.key), l = "" + r.key), Ge(r) && (b = r.ref, Xe(r, c));
        for (f in r)
          H.call(r, f) && !Ze.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (f in d)
            u[f] === void 0 && (u[f] = d[f]);
        }
        if (l || b) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && Qe(u, v), b && er(u, v);
        }
        return rr(e, l, b, c, o, D.current, u);
      }
    }
    var ee = O.ReactCurrentOwner, be = O.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ee() {
      {
        if (ee.current) {
          var e = T(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
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
    function ir(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ee.current && (o = " It was passed a child from " + T(e._owner.type) + "."), A(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), A(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            te(o) && _e(o, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = N(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), u; !(u = f.next()).done; )
              te(u.value) && _e(u.value, r);
        }
      }
    }
    function or(e) {
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
          var o = T(r);
          Be(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var c = T(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            A(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Ce(e, r, t, o, c, f) {
      {
        var u = Ve(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = nr(c);
          b ? l += b : l += Ee();
          var d;
          e === null ? d = "null" : X(e) ? d = "array" : e !== void 0 && e.$$typeof === n ? (d = "<" + (T(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, l);
        }
        var v = tr(e, r, t, c, f);
        if (v == null)
          return v;
        if (u) {
          var _ = r.children;
          if (_ !== void 0)
            if (o)
              if (X(_)) {
                for (var F = 0; F < _.length; F++)
                  je(_[F], e);
                Object.freeze && Object.freeze(_);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(_, e);
        }
        return e === y ? ar(v) : or(v), v;
      }
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = lr, cr = sr;
    V.Fragment = y, V.jsx = ur, V.jsxs = cr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ne.exports = vr() : ne.exports = hr();
var a = ne.exports;
class pr {
  constructor(n) {
    J(this, "setShowViewer");
    J(this, "setImage");
    J(this, "setZoom");
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
    const y = n.find(({ props: E }) => {
      const { viewerid: g } = E;
      return +s >= n.length ? +g == 1 : +g == +s + 1;
    });
    if (y) {
      const { src: E, alt: g, viewerid: j } = y.props;
      this.setImage({
        src: E,
        alt: g,
        viewerid: j
      }), this.zoomOut(y);
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
    const y = n.find(({ props: E }) => {
      const { viewerid: g } = E;
      return +s <= 1 ? +g == n.length : +g === +s - 1;
    });
    if (y) {
      const { src: E, alt: g, viewerid: j } = y.props;
      this.setImage({
        src: E,
        alt: g,
        viewerid: j
      }), this.zoomOut(y);
    }
  }
}
const mr = (m) => /* @__PURE__ */ a.jsx("img", { ...m }), Pe = ({
  controls: m,
  close: n
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    className: `
    ${m ? "backdrop-opacity-100" : "opacity-40"}
    `,
    onClick: () => n(),
    children: /* @__PURE__ */ a.jsx(
      "svg",
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "100%",
        width: "100%",
        children: /* @__PURE__ */ a.jsx("path", { d: "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" })
      }
    )
  }
), wr = (m) => {
  const { controls: n, children: s } = m, [y, E] = L(!0), [g, j] = L(!0), [i, p] = L(), [R, w] = L(!0), h = new pr({ setShowViewer: E, setImage: p, setZoom: j });
  Se(() => {
    w(!!(n === void 0 || n));
  }, [n, i, s]);
  const [C, P] = L();
  return Se(() => {
    const M = $.Children.map(s, (z, N) => {
      if ($.isValidElement(z))
        return $.cloneElement(z, {
          onClick: (O) => h.show(O),
          viewerid: (N + 1).toString(),
          key: N
        });
    });
    P(M);
  }, [s]), /* @__PURE__ */ a.jsx(a.Fragment, { children: y ? C : /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `
          absolute 
          top-0
          left-0
          w-full
          h-full
          bg-black/70
    `,
      children: [
        /* @__PURE__ */ a.jsx(
          "header",
          {
            className: `
            w-full
                h-[var(--header-height)]
                flex
                items-center
                justify-between
                px-9
                ${!R && "absolute z-10 [&>div]:w-10 !justify-end"}
            `,
            children: R ? (
              /* Gallery current image index and lenght */
              /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsxs("p", { children: [
                  " ",
                  i && (i == null ? void 0 : i.viewerid),
                  " /",
                  " ",
                  Array.isArray(s) && s.length
                ] }) }),
                /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: `
          flex
          gap-4
          [&>div]:w-6
          [&>div]:h-6
          [&>div]:cursor-pointer
        `,
                    children: [
                      /* @__PURE__ */ a.jsx("div", { onClick: () => h.extend(i && (i == null ? void 0 : i.viewerid)), children: /* @__PURE__ */ a.jsxs(
                        "svg",
                        {
                          stroke: "currentColor",
                          fill: "currentColor",
                          strokeWidth: "0",
                          viewBox: "0 0 24 24",
                          height: "100%",
                          width: "100%",
                          children: [
                            /* @__PURE__ */ a.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z" })
                          ]
                        }
                      ) }),
                      g ? /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          onClick: () => h.zoomIn(i ? i == null ? void 0 : i.viewerid : ""),
                          children: /* @__PURE__ */ a.jsxs(
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
                                /* @__PURE__ */ a.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                                /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                                /* @__PURE__ */ a.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
                                /* @__PURE__ */ a.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                              ]
                            }
                          )
                        }
                      ) : (
                        /* zoom less */
                        /* @__PURE__ */ a.jsx(
                          "div",
                          {
                            onClick: () => h.zoomOut(i ? i == null ? void 0 : i.viewerid : ""),
                            children: /* @__PURE__ */ a.jsxs(
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
                                  /* @__PURE__ */ a.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                                  /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                                  /* @__PURE__ */ a.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                                ]
                              }
                            )
                          }
                        )
                      ),
                      /* @__PURE__ */ a.jsx(Pe, { controls: !0, close: () => h.close("") })
                    ]
                  }
                )
              ] })
            ) : /* @__PURE__ */ a.jsx(Pe, { controls: !1, close: () => h.close("") })
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "main",
          {
            className: `
            w-full
      ${R ? "h-[calc(100%-var(--header-height)-var(--footer-height))]" : "h-full"}
        flex
        items-center
        justify-center
       [&>img]:max-w-full
       [&>img]:max-h-full
       [&>img]:object-cover
       relative
            `,
            children: [
              /* @__PURE__ */ a.jsx(
                mr,
                {
                  src: i && (i == null ? void 0 : i.src),
                  viewerid: i ? i == null ? void 0 : i.viewerid : "",
                  alt: i && (i == null ? void 0 : i.alt)
                }
              ),
              R && /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: `
        absolute
        top-2/4
        left-0
        w-full
        px-9
        flex
        justify-between
        items-center
        z-50

        [&>div]:w-9
        [&>div]:h-9
        [&>div]:cursor-pointer
        [&>div]:text-white/50
        `,
                  children: [
                    /* @__PURE__ */ a.jsx(
                      "div",
                      {
                        id: "prev-left",
                        onClick: () => h.prevLeft(
                          C,
                          // eslint-disable-next-line prettier/prettier
                          i ? i.viewerid : void 0
                        ),
                        children: /* @__PURE__ */ a.jsx(
                          "svg",
                          {
                            stroke: "currentColor",
                            fill: "currentColor",
                            strokeWidth: "0",
                            viewBox: "0 0 16 16",
                            height: "100%",
                            width: "100%",
                            children: /* @__PURE__ */ a.jsx("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" })
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ a.jsx(
                      "div",
                      {
                        id: "prev-rigth",
                        onClick: () => h.prevRigth(C, i == null ? void 0 : i.viewerid),
                        children: /* @__PURE__ */ a.jsx(
                          "svg",
                          {
                            stroke: "currentColor",
                            fill: "currentColor",
                            strokeWidth: "0",
                            viewBox: "0 0 16 16",
                            height: "100%",
                            width: "100%",
                            children: /* @__PURE__ */ a.jsx("path", { d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" })
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        R && /* @__PURE__ */ a.jsx(
          "footer",
          {
            className: `
              w-full
              h-[var(--footer-height)]
              flex
              justify-center
              items-center
                `,
            children: /* @__PURE__ */ a.jsx("p", { children: i && (i == null ? void 0 : i.alt) })
          }
        )
      ]
    }
  ) });
};
export {
  wr as default
};
