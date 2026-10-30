function SE(e, i) {
  for (var s = 0; s < i.length; s++) {
    const r = i[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const u = Object.getOwnPropertyDescriptor(r, l);
          u &&
            Object.defineProperty(
              e,
              l,
              u.get ? u : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const u of l)
      if (u.type === "childList")
        for (const f of u.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = s(l);
    fetch(l.href, u);
  }
})();
function K0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var mf = { exports: {} },
  ar = {};
var Ry;
function wE() {
  if (Ry) return ar;
  Ry = 1;
  var e = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function s(r, l, u) {
    var f = null;
    if (
      (u !== void 0 && (f = "" + u),
      l.key !== void 0 && (f = "" + l.key),
      "key" in l)
    ) {
      u = {};
      for (var h in l) h !== "key" && (u[h] = l[h]);
    } else u = l;
    return (
      (l = u.ref),
      { $$typeof: e, type: r, key: f, ref: l !== void 0 ? l : null, props: u }
    );
  }
  return ((ar.Fragment = i), (ar.jsx = s), (ar.jsxs = s), ar);
}
var My;
function TE() {
  return (My || ((My = 1), (mf.exports = wE())), mf.exports);
}
var b = TE(),
  pf = { exports: {} },
  sr = {},
  gf = { exports: {} },
  yf = {};
var Dy;
function EE() {
  return (
    Dy ||
      ((Dy = 1),
      (function (e) {
        function i(L, Q) {
          var X = L.length;
          L.push(Q);
          t: for (; 0 < X; ) {
            var tt = (X - 1) >>> 1,
              A = L[tt];
            if (0 < l(A, Q)) ((L[tt] = Q), (L[X] = A), (X = tt));
            else break t;
          }
        }
        function s(L) {
          return L.length === 0 ? null : L[0];
        }
        function r(L) {
          if (L.length === 0) return null;
          var Q = L[0],
            X = L.pop();
          if (X !== Q) {
            L[0] = X;
            t: for (var tt = 0, A = L.length, G = A >>> 1; tt < G; ) {
              var I = 2 * (tt + 1) - 1,
                W = L[I],
                rt = I + 1,
                dt = L[rt];
              if (0 > l(W, X))
                rt < A && 0 > l(dt, W)
                  ? ((L[tt] = dt), (L[rt] = X), (tt = rt))
                  : ((L[tt] = W), (L[I] = X), (tt = I));
              else if (rt < A && 0 > l(dt, X))
                ((L[tt] = dt), (L[rt] = X), (tt = rt));
              else break t;
            }
          }
          return Q;
        }
        function l(L, Q) {
          var X = L.sortIndex - Q.sortIndex;
          return X !== 0 ? X : L.id - Q.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            h = f.now();
          e.unstable_now = function () {
            return f.now() - h;
          };
        }
        var p = [],
          m = [],
          g = 1,
          v = null,
          x = 3,
          T = !1,
          C = !1,
          E = !1,
          R = !1,
          N = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          O = typeof setImmediate < "u" ? setImmediate : null;
        function P(L) {
          for (var Q = s(m); Q !== null; ) {
            if (Q.callback === null) r(m);
            else if (Q.startTime <= L)
              (r(m), (Q.sortIndex = Q.expirationTime), i(p, Q));
            else break;
            Q = s(m);
          }
        }
        function V(L) {
          if (((E = !1), P(L), !C))
            if (s(p) !== null) ((C = !0), F || ((F = !0), ct()));
            else {
              var Q = s(m);
              Q !== null && ft(V, Q.startTime - L);
            }
        }
        var F = !1,
          Z = -1,
          H = 5,
          J = -1;
        function lt() {
          return R ? !0 : !(e.unstable_now() - J < H);
        }
        function pt() {
          if (((R = !1), F)) {
            var L = e.unstable_now();
            J = L;
            var Q = !0;
            try {
              t: {
                ((C = !1), E && ((E = !1), j(Z), (Z = -1)), (T = !0));
                var X = x;
                try {
                  e: {
                    for (
                      P(L), v = s(p);
                      v !== null && !(v.expirationTime > L && lt());
                    ) {
                      var tt = v.callback;
                      if (typeof tt == "function") {
                        ((v.callback = null), (x = v.priorityLevel));
                        var A = tt(v.expirationTime <= L);
                        if (((L = e.unstable_now()), typeof A == "function")) {
                          ((v.callback = A), P(L), (Q = !0));
                          break e;
                        }
                        (v === s(p) && r(p), P(L));
                      } else r(p);
                      v = s(p);
                    }
                    if (v !== null) Q = !0;
                    else {
                      var G = s(m);
                      (G !== null && ft(V, G.startTime - L), (Q = !1));
                    }
                  }
                  break t;
                } finally {
                  ((v = null), (x = X), (T = !1));
                }
                Q = void 0;
              }
            } finally {
              Q ? ct() : (F = !1);
            }
          }
        }
        var ct;
        if (typeof O == "function")
          ct = function () {
            O(pt);
          };
        else if (typeof MessageChannel < "u") {
          var wt = new MessageChannel(),
            $ = wt.port2;
          ((wt.port1.onmessage = pt),
            (ct = function () {
              $.postMessage(null);
            }));
        } else
          ct = function () {
            N(pt, 0);
          };
        function ft(L, Q) {
          Z = N(function () {
            L(e.unstable_now());
          }, Q);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (e.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (H = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (e.unstable_next = function (L) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = x;
            }
            var X = x;
            x = Q;
            try {
              return L();
            } finally {
              x = X;
            }
          }),
          (e.unstable_requestPaint = function () {
            R = !0;
          }),
          (e.unstable_runWithPriority = function (L, Q) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var X = x;
            x = L;
            try {
              return Q();
            } finally {
              x = X;
            }
          }),
          (e.unstable_scheduleCallback = function (L, Q, X) {
            var tt = e.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? tt + X : tt))
                : (X = tt),
              L)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = X + A),
              (L = {
                id: g++,
                callback: Q,
                priorityLevel: L,
                startTime: X,
                expirationTime: A,
                sortIndex: -1,
              }),
              X > tt
                ? ((L.sortIndex = X),
                  i(m, L),
                  s(p) === null &&
                    L === s(m) &&
                    (E ? (j(Z), (Z = -1)) : (E = !0), ft(V, X - tt)))
                : ((L.sortIndex = A),
                  i(p, L),
                  C || T || ((C = !0), F || ((F = !0), ct()))),
              L
            );
          }),
          (e.unstable_shouldYield = lt),
          (e.unstable_wrapCallback = function (L) {
            var Q = x;
            return function () {
              var X = x;
              x = Q;
              try {
                return L.apply(this, arguments);
              } finally {
                x = X;
              }
            };
          }));
      })(yf)),
    yf
  );
}
var Oy;
function AE() {
  return (Oy || ((Oy = 1), (gf.exports = EE())), gf.exports);
}
var vf = { exports: {} },
  gt = {};
var Ny;
function CE() {
  if (Ny) return gt;
  Ny = 1;
  var e = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function x(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (v && A[v]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    E = {};
  function R(A, G, I) {
    ((this.props = A),
      (this.context = G),
      (this.refs = E),
      (this.updater = I || T));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (A, G) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, G, "setState");
    }),
    (R.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function N() {}
  N.prototype = R.prototype;
  function j(A, G, I) {
    ((this.props = A),
      (this.context = G),
      (this.refs = E),
      (this.updater = I || T));
  }
  var O = (j.prototype = new N());
  ((O.constructor = j), C(O, R.prototype), (O.isPureReactComponent = !0));
  var P = Array.isArray,
    V = { H: null, A: null, T: null, S: null, V: null },
    F = Object.prototype.hasOwnProperty;
  function Z(A, G, I, W, rt, dt) {
    return (
      (I = dt.ref),
      { $$typeof: e, type: A, key: G, ref: I !== void 0 ? I : null, props: dt }
    );
  }
  function H(A, G) {
    return Z(A.type, G, void 0, void 0, void 0, A.props);
  }
  function J(A) {
    return typeof A == "object" && A !== null && A.$$typeof === e;
  }
  function lt(A) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (I) {
        return G[I];
      })
    );
  }
  var pt = /\/+/g;
  function ct(A, G) {
    return typeof A == "object" && A !== null && A.key != null
      ? lt("" + A.key)
      : G.toString(36);
  }
  function wt() {}
  function $(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(wt, wt)
            : ((A.status = "pending"),
              A.then(
                function (G) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = G));
                },
                function (G) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = G));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function ft(A, G, I, W, rt) {
    var dt = typeof A;
    (dt === "undefined" || dt === "boolean") && (A = null);
    var st = !1;
    if (A === null) st = !0;
    else
      switch (dt) {
        case "bigint":
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case e:
            case i:
              st = !0;
              break;
            case g:
              return ((st = A._init), ft(st(A._payload), G, I, W, rt));
          }
      }
    if (st)
      return (
        (rt = rt(A)),
        (st = W === "" ? "." + ct(A, 0) : W),
        P(rt)
          ? ((I = ""),
            st != null && (I = st.replace(pt, "$&/") + "/"),
            ft(rt, G, I, "", function (Mt) {
              return Mt;
            }))
          : rt != null &&
            (J(rt) &&
              (rt = H(
                rt,
                I +
                  (rt.key == null || (A && A.key === rt.key)
                    ? ""
                    : ("" + rt.key).replace(pt, "$&/") + "/") +
                  st,
              )),
            G.push(rt)),
        1
      );
    st = 0;
    var Pt = W === "" ? "." : W + ":";
    if (P(A))
      for (var Rt = 0; Rt < A.length; Rt++)
        ((W = A[Rt]), (dt = Pt + ct(W, Rt)), (st += ft(W, G, I, dt, rt)));
    else if (((Rt = x(A)), typeof Rt == "function"))
      for (A = Rt.call(A), Rt = 0; !(W = A.next()).done; )
        ((W = W.value), (dt = Pt + ct(W, Rt++)), (st += ft(W, G, I, dt, rt)));
    else if (dt === "object") {
      if (typeof A.then == "function") return ft($(A), G, I, W, rt);
      throw (
        (G = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return st;
  }
  function L(A, G, I) {
    if (A == null) return A;
    var W = [],
      rt = 0;
    return (
      ft(A, W, "", "", function (dt) {
        return G.call(I, dt, rt++);
      }),
      W
    );
  }
  function Q(A) {
    if (A._status === -1) {
      var G = A._result;
      ((G = G()),
        G.then(
          function (I) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = I));
          },
          function (I) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = I));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = G)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var X =
    typeof reportError == "function"
      ? reportError
      : function (A) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var G = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof A == "object" &&
                A !== null &&
                typeof A.message == "string"
                  ? String(A.message)
                  : String(A),
              error: A,
            });
            if (!window.dispatchEvent(G)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", A);
            return;
          }
          console.error(A);
        };
  function tt() {}
  return (
    (gt.Children = {
      map: L,
      forEach: function (A, G, I) {
        L(
          A,
          function () {
            G.apply(this, arguments);
          },
          I,
        );
      },
      count: function (A) {
        var G = 0;
        return (
          L(A, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (A) {
        return (
          L(A, function (G) {
            return G;
          }) || []
        );
      },
      only: function (A) {
        if (!J(A))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return A;
      },
    }),
    (gt.Component = R),
    (gt.Fragment = s),
    (gt.Profiler = l),
    (gt.PureComponent = j),
    (gt.StrictMode = r),
    (gt.Suspense = p),
    (gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V),
    (gt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return V.H.useMemoCache(A);
      },
    }),
    (gt.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (gt.cloneElement = function (A, G, I) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + ".",
        );
      var W = C({}, A.props),
        rt = A.key,
        dt = void 0;
      if (G != null)
        for (st in (G.ref !== void 0 && (dt = void 0),
        G.key !== void 0 && (rt = "" + G.key),
        G))
          !F.call(G, st) ||
            st === "key" ||
            st === "__self" ||
            st === "__source" ||
            (st === "ref" && G.ref === void 0) ||
            (W[st] = G[st]);
      var st = arguments.length - 2;
      if (st === 1) W.children = I;
      else if (1 < st) {
        for (var Pt = Array(st), Rt = 0; Rt < st; Rt++)
          Pt[Rt] = arguments[Rt + 2];
        W.children = Pt;
      }
      return Z(A.type, rt, void 0, void 0, dt, W);
    }),
    (gt.createContext = function (A) {
      return (
        (A = {
          $$typeof: f,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: u, _context: A }),
        A
      );
    }),
    (gt.createElement = function (A, G, I) {
      var W,
        rt = {},
        dt = null;
      if (G != null)
        for (W in (G.key !== void 0 && (dt = "" + G.key), G))
          F.call(G, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (rt[W] = G[W]);
      var st = arguments.length - 2;
      if (st === 1) rt.children = I;
      else if (1 < st) {
        for (var Pt = Array(st), Rt = 0; Rt < st; Rt++)
          Pt[Rt] = arguments[Rt + 2];
        rt.children = Pt;
      }
      if (A && A.defaultProps)
        for (W in ((st = A.defaultProps), st))
          rt[W] === void 0 && (rt[W] = st[W]);
      return Z(A, dt, void 0, void 0, null, rt);
    }),
    (gt.createRef = function () {
      return { current: null };
    }),
    (gt.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (gt.isValidElement = J),
    (gt.lazy = function (A) {
      return { $$typeof: g, _payload: { _status: -1, _result: A }, _init: Q };
    }),
    (gt.memo = function (A, G) {
      return { $$typeof: m, type: A, compare: G === void 0 ? null : G };
    }),
    (gt.startTransition = function (A) {
      var G = V.T,
        I = {};
      V.T = I;
      try {
        var W = A(),
          rt = V.S;
        (rt !== null && rt(I, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(tt, X));
      } catch (dt) {
        X(dt);
      } finally {
        V.T = G;
      }
    }),
    (gt.unstable_useCacheRefresh = function () {
      return V.H.useCacheRefresh();
    }),
    (gt.use = function (A) {
      return V.H.use(A);
    }),
    (gt.useActionState = function (A, G, I) {
      return V.H.useActionState(A, G, I);
    }),
    (gt.useCallback = function (A, G) {
      return V.H.useCallback(A, G);
    }),
    (gt.useContext = function (A) {
      return V.H.useContext(A);
    }),
    (gt.useDebugValue = function () {}),
    (gt.useDeferredValue = function (A, G) {
      return V.H.useDeferredValue(A, G);
    }),
    (gt.useEffect = function (A, G, I) {
      var W = V.H;
      if (typeof I == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return W.useEffect(A, G);
    }),
    (gt.useId = function () {
      return V.H.useId();
    }),
    (gt.useImperativeHandle = function (A, G, I) {
      return V.H.useImperativeHandle(A, G, I);
    }),
    (gt.useInsertionEffect = function (A, G) {
      return V.H.useInsertionEffect(A, G);
    }),
    (gt.useLayoutEffect = function (A, G) {
      return V.H.useLayoutEffect(A, G);
    }),
    (gt.useMemo = function (A, G) {
      return V.H.useMemo(A, G);
    }),
    (gt.useOptimistic = function (A, G) {
      return V.H.useOptimistic(A, G);
    }),
    (gt.useReducer = function (A, G, I) {
      return V.H.useReducer(A, G, I);
    }),
    (gt.useRef = function (A) {
      return V.H.useRef(A);
    }),
    (gt.useState = function (A) {
      return V.H.useState(A);
    }),
    (gt.useSyncExternalStore = function (A, G, I) {
      return V.H.useSyncExternalStore(A, G, I);
    }),
    (gt.useTransition = function () {
      return V.H.useTransition();
    }),
    (gt.version = "19.1.0"),
    gt
  );
}
var jy;
function zd() {
  return (jy || ((jy = 1), (vf.exports = CE())), vf.exports);
}
var bf = { exports: {} },
  de = {};
var _y;
function RE() {
  if (_y) return de;
  _y = 1;
  var e = zd();
  function i(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(i(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function u(p, m, g) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: v == null ? null : "" + v,
      children: p,
      containerInfo: m,
      implementation: g,
    };
  }
  var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (de.createPortal = function (p, m) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(i(299));
      return u(p, m, null, g);
    }),
    (de.flushSync = function (p) {
      var m = f.T,
        g = r.p;
      try {
        if (((f.T = null), (r.p = 2), p)) return p();
      } finally {
        ((f.T = m), (r.p = g), r.d.f());
      }
    }),
    (de.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(p, m));
    }),
    (de.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (de.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var g = m.as,
          v = h(g, m.crossOrigin),
          x = typeof m.integrity == "string" ? m.integrity : void 0,
          T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style"
          ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: T,
            })
          : g === "script" &&
            r.d.X(p, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: T,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (de.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var g = h(m.as, m.crossOrigin);
            r.d.M(p, {
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(p);
    }),
    (de.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var g = m.as,
          v = h(g, m.crossOrigin);
        r.d.L(p, g, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (de.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var g = h(m.as, m.crossOrigin);
          r.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (de.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (de.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (de.useFormState = function (p, m, g) {
      return f.H.useFormState(p, m, g);
    }),
    (de.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (de.version = "19.1.0"),
    de
  );
}
var Vy;
function Q0() {
  if (Vy) return bf.exports;
  Vy = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (i) {
        console.error(i);
      }
  }
  return (e(), (bf.exports = RE()), bf.exports);
}
var Ly;
function ME() {
  if (Ly) return sr;
  Ly = 1;
  var e = AE(),
    i = zd(),
    s = Q0();
  function r(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function u(t) {
    var n = t,
      a = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do ((n = t), (n.flags & 4098) !== 0 && (a = n.return), (t = n.return));
      while (t);
    }
    return n.tag === 3 ? a : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (u(t) !== t) throw Error(r(188));
  }
  function p(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = u(t)), n === null)) throw Error(r(188));
      return n !== t ? null : t;
    }
    for (var a = t, o = n; ; ) {
      var c = a.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((o = c.return), o !== null)) {
          a = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === a) return (h(c), t);
          if (d === o) return (h(c), n);
          d = d.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== o.return) ((a = c), (o = d));
      else {
        for (var y = !1, S = c.child; S; ) {
          if (S === a) {
            ((y = !0), (a = c), (o = d));
            break;
          }
          if (S === o) {
            ((y = !0), (o = c), (a = d));
            break;
          }
          S = S.sibling;
        }
        if (!y) {
          for (S = d.child; S; ) {
            if (S === a) {
              ((y = !0), (a = d), (o = c));
              break;
            }
            if (S === o) {
              ((y = !0), (o = d), (a = c));
              break;
            }
            S = S.sibling;
          }
          if (!y) throw Error(r(189));
        }
      }
      if (a.alternate !== o) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : n;
  }
  function m(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = m(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    v = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    N = Symbol.for("react.provider"),
    j = Symbol.for("react.consumer"),
    O = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    V = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    Z = Symbol.for("react.memo"),
    H = Symbol.for("react.lazy"),
    J = Symbol.for("react.activity"),
    lt = Symbol.for("react.memo_cache_sentinel"),
    pt = Symbol.iterator;
  function ct(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (pt && t[pt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var wt = Symbol.for("react.client.reference");
  function $(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === wt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case R:
        return "Profiler";
      case E:
        return "StrictMode";
      case V:
        return "Suspense";
      case F:
        return "SuspenseList";
      case J:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case T:
          return "Portal";
        case O:
          return (t.displayName || "Context") + ".Provider";
        case j:
          return (t._context.displayName || "Context") + ".Consumer";
        case P:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Z:
          return (
            (n = t.displayName || null),
            n !== null ? n : $(t.type) || "Memo"
          );
        case H:
          ((n = t._payload), (t = t._init));
          try {
            return $(t(n));
          } catch {}
      }
    return null;
  }
  var ft = Array.isArray,
    L = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    tt = [],
    A = -1;
  function G(t) {
    return { current: t };
  }
  function I(t) {
    0 > A || ((t.current = tt[A]), (tt[A] = null), A--);
  }
  function W(t, n) {
    (A++, (tt[A] = t.current), (t.current = n));
  }
  var rt = G(null),
    dt = G(null),
    st = G(null),
    Pt = G(null);
  function Rt(t, n) {
    switch ((W(st, n), W(dt, t), W(rt, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? ey(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI)))
          ((n = ey(n)), (t = ny(n, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (I(rt), W(rt, t));
  }
  function Mt() {
    (I(rt), I(dt), I(st));
  }
  function Gn(t) {
    t.memoizedState !== null && W(Pt, t);
    var n = rt.current,
      a = ny(n, t.type);
    n !== a && (W(dt, t), W(rt, a));
  }
  function Ke(t) {
    (dt.current === t && (I(rt), I(dt)),
      Pt.current === t && (I(Pt), (Js._currentValue = X)));
  }
  var rn = Object.prototype.hasOwnProperty,
    Le = e.unstable_scheduleCallback,
    Yn = e.unstable_cancelCallback,
    JS = e.unstable_shouldYield,
    tw = e.unstable_requestPaint,
    on = e.unstable_now,
    ew = e.unstable_getCurrentPriorityLevel,
    Lh = e.unstable_ImmediatePriority,
    zh = e.unstable_UserBlockingPriority,
    jr = e.unstable_NormalPriority,
    nw = e.unstable_LowPriority,
    Ph = e.unstable_IdlePriority,
    iw = e.log,
    aw = e.unstable_setDisableYieldValue,
    os = null,
    Ee = null;
  function Fn(t) {
    if (
      (typeof iw == "function" && aw(t),
      Ee && typeof Ee.setStrictMode == "function")
    )
      try {
        Ee.setStrictMode(os, t);
      } catch {}
  }
  var Ae = Math.clz32 ? Math.clz32 : ow,
    sw = Math.log,
    rw = Math.LN2;
  function ow(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((sw(t) / rw) | 0)) | 0);
  }
  var _r = 256,
    Vr = 4194304;
  function Ci(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Lr(t, n, a) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var c = 0,
      d = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var S = o & 134217727;
    return (
      S !== 0
        ? ((o = S & ~d),
          o !== 0
            ? (c = Ci(o))
            : ((y &= S),
              y !== 0
                ? (c = Ci(y))
                : a || ((a = S & ~t), a !== 0 && (c = Ci(a)))))
        : ((S = o & ~d),
          S !== 0
            ? (c = Ci(S))
            : y !== 0
              ? (c = Ci(y))
              : a || ((a = o & ~t), a !== 0 && (c = Ci(a)))),
      c === 0
        ? 0
        : n !== 0 &&
            n !== c &&
            (n & d) === 0 &&
            ((d = c & -c),
            (a = n & -n),
            d >= a || (d === 32 && (a & 4194048) !== 0))
          ? n
          : c
    );
  }
  function ls(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function lw(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Bh() {
    var t = _r;
    return ((_r <<= 1), (_r & 4194048) === 0 && (_r = 256), t);
  }
  function kh() {
    var t = Vr;
    return ((Vr <<= 1), (Vr & 62914560) === 0 && (Vr = 4194304), t);
  }
  function nc(t) {
    for (var n = [], a = 0; 31 > a; a++) n.push(t);
    return n;
  }
  function cs(t, n) {
    ((t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function cw(t, n, a, o, c, d) {
    var y = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var S = t.entanglements,
      M = t.expirationTimes,
      B = t.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var q = 31 - Ae(a),
        K = 1 << q;
      ((S[q] = 0), (M[q] = -1));
      var k = B[q];
      if (k !== null)
        for (B[q] = null, q = 0; q < k.length; q++) {
          var U = k[q];
          U !== null && (U.lane &= -536870913);
        }
      a &= ~K;
    }
    (o !== 0 && Uh(t, o, 0),
      d !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(y & ~n)));
  }
  function Uh(t, n, a) {
    ((t.pendingLanes |= n), (t.suspendedLanes &= ~n));
    var o = 31 - Ae(n);
    ((t.entangledLanes |= n),
      (t.entanglements[o] = t.entanglements[o] | 1073741824 | (a & 4194090)));
  }
  function Hh(t, n) {
    var a = (t.entangledLanes |= n);
    for (t = t.entanglements; a; ) {
      var o = 31 - Ae(a),
        c = 1 << o;
      ((c & n) | (t[o] & n) && (t[o] |= n), (a &= ~c));
    }
  }
  function ic(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ac(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function qh() {
    var t = Q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Sy(t.type));
  }
  function uw(t, n) {
    var a = Q.p;
    try {
      return ((Q.p = t), n());
    } finally {
      Q.p = a;
    }
  }
  var Xn = Math.random().toString(36).slice(2),
    ue = "__reactFiber$" + Xn,
    be = "__reactProps$" + Xn,
    ea = "__reactContainer$" + Xn,
    sc = "__reactEvents$" + Xn,
    fw = "__reactListeners$" + Xn,
    dw = "__reactHandles$" + Xn,
    Gh = "__reactResources$" + Xn,
    us = "__reactMarker$" + Xn;
  function rc(t) {
    (delete t[ue], delete t[be], delete t[sc], delete t[fw], delete t[dw]);
  }
  function na(t) {
    var n = t[ue];
    if (n) return n;
    for (var a = t.parentNode; a; ) {
      if ((n = a[ea] || a[ue])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (t = ry(t); t !== null; ) {
            if ((a = t[ue])) return a;
            t = ry(t);
          }
        return n;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function ia(t) {
    if ((t = t[ue] || t[ea])) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return t;
    }
    return null;
  }
  function fs(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(r(33));
  }
  function aa(t) {
    var n = t[Gh];
    return (
      n ||
        (n = t[Gh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function ee(t) {
    t[us] = !0;
  }
  var Yh = new Set(),
    Fh = {};
  function Ri(t, n) {
    (sa(t, n), sa(t + "Capture", n));
  }
  function sa(t, n) {
    for (Fh[t] = n, t = 0; t < n.length; t++) Yh.add(n[t]);
  }
  var hw = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Xh = {},
    Kh = {};
  function mw(t) {
    return rn.call(Kh, t)
      ? !0
      : rn.call(Xh, t)
        ? !1
        : hw.test(t)
          ? (Kh[t] = !0)
          : ((Xh[t] = !0), !1);
  }
  function zr(t, n, a) {
    if (mw(n))
      if (a === null) t.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + a);
      }
  }
  function Pr(t, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + a);
    }
  }
  function wn(t, n, a, o) {
    if (o === null) t.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(n, a, "" + o);
    }
  }
  var oc, Qh;
  function ra(t) {
    if (oc === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        ((oc = (n && n[1]) || ""),
          (Qh =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      oc +
      t +
      Qh
    );
  }
  var lc = !1;
  function cc(t, n) {
    if (!t || lc) return "";
    lc = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (U) {
                  var k = U;
                }
                Reflect.construct(t, [], K);
              } else {
                try {
                  K.call();
                } catch (U) {
                  k = U;
                }
                t.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                k = U;
              }
              (K = t()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (U) {
            if (U && k && typeof U.stack == "string") return [U.stack, k.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name",
      );
      c &&
        c.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = o.DetermineComponentFrameRoot(),
        y = d[0],
        S = d[1];
      if (y && S) {
        var M = y.split(`
`),
          B = S.split(`
`);
        for (
          c = o = 0;
          o < M.length && !M[o].includes("DetermineComponentFrameRoot");
        )
          o++;
        for (; c < B.length && !B[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (o === M.length || c === B.length)
          for (
            o = M.length - 1, c = B.length - 1;
            1 <= o && 0 <= c && M[o] !== B[c];
          )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (M[o] !== B[c]) {
            if (o !== 1 || c !== 1)
              do
                if ((o--, c--, 0 > c || M[o] !== B[c])) {
                  var q =
                    `
` + M[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      q.includes("<anonymous>") &&
                      (q = q.replace("<anonymous>", t.displayName)),
                    q
                  );
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      ((lc = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : "") ? ra(a) : "";
  }
  function pw(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ra(t.type);
      case 16:
        return ra("Lazy");
      case 13:
        return ra("Suspense");
      case 19:
        return ra("SuspenseList");
      case 0:
      case 15:
        return cc(t.type, !1);
      case 11:
        return cc(t.type.render, !1);
      case 1:
        return cc(t.type, !0);
      case 31:
        return ra("Activity");
      default:
        return "";
    }
  }
  function Zh(t) {
    try {
      var n = "";
      do ((n += pw(t)), (t = t.return));
      while (t);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ze(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Wh(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function gw(t) {
    var n = Wh(t) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      o = "" + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var c = a.get,
        d = a.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            ((o = "" + y), d.call(this, y));
          },
        }),
        Object.defineProperty(t, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (y) {
            o = "" + y;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[n]);
          },
        }
      );
    }
  }
  function Br(t) {
    t._valueTracker || (t._valueTracker = gw(t));
  }
  function Ih(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      o = "";
    return (
      t && (o = Wh(t) ? (t.checked ? "true" : "false") : t.value),
      (t = o),
      t !== a ? (n.setValue(t), !0) : !1
    );
  }
  function kr(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var yw = /[\n"\\]/g;
  function Pe(t) {
    return t.replace(yw, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function uc(t, n, a, o, c, d, y, S) {
    ((t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      n != null
        ? y === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + ze(n))
          : t.value !== "" + ze(n) && (t.value = "" + ze(n))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      n != null
        ? fc(t, y, ze(n))
        : a != null
          ? fc(t, y, ze(a))
          : o != null && t.removeAttribute("value"),
      c == null && d != null && (t.defaultChecked = !!d),
      c != null &&
        (t.checked = c && typeof c != "function" && typeof c != "symbol"),
      S != null &&
      typeof S != "function" &&
      typeof S != "symbol" &&
      typeof S != "boolean"
        ? (t.name = "" + ze(S))
        : t.removeAttribute("name"));
  }
  function $h(t, n, a, o, c, d, y, S) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.type = d),
      n != null || a != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || n != null)) return;
      ((a = a != null ? "" + ze(a) : ""),
        (n = n != null ? "" + ze(n) : a),
        S || n === t.value || (t.value = n),
        (t.defaultValue = n));
    }
    ((o = o ?? c),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (t.checked = S ? t.checked : !!o),
      (t.defaultChecked = !!o),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y));
  }
  function fc(t, n, a) {
    (n === "number" && kr(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function oa(t, n, a, o) {
    if (((t = t.options), n)) {
      n = {};
      for (var c = 0; c < a.length; c++) n["$" + a[c]] = !0;
      for (a = 0; a < t.length; a++)
        ((c = n.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== c && (t[a].selected = c),
          c && o && (t[a].defaultSelected = !0));
    } else {
      for (a = "" + ze(a), n = null, c = 0; c < t.length; c++) {
        if (t[c].value === a) {
          ((t[c].selected = !0), o && (t[c].defaultSelected = !0));
          return;
        }
        n !== null || t[c].disabled || (n = t[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Jh(t, n, a) {
    if (
      n != null &&
      ((n = "" + ze(n)), n !== t.value && (t.value = n), a == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = a != null ? "" + ze(a) : "";
  }
  function tm(t, n, a, o) {
    if (n == null) {
      if (o != null) {
        if (a != null) throw Error(r(92));
        if (ft(o)) {
          if (1 < o.length) throw Error(r(93));
          o = o[0];
        }
        a = o;
      }
      (a == null && (a = ""), (n = a));
    }
    ((a = ze(n)),
      (t.defaultValue = a),
      (o = t.textContent),
      o === a && o !== "" && o !== null && (t.value = o));
  }
  function la(t, n) {
    if (n) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var vw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function em(t, n, a) {
    var o = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? o
        ? t.setProperty(n, "")
        : n === "float"
          ? (t.cssFloat = "")
          : (t[n] = "")
      : o
        ? t.setProperty(n, a)
        : typeof a != "number" || a === 0 || vw.has(n)
          ? n === "float"
            ? (t.cssFloat = a)
            : (t[n] = ("" + a).trim())
          : (t[n] = a + "px");
  }
  function nm(t, n, a) {
    if (n != null && typeof n != "object") throw Error(r(62));
    if (((t = t.style), a != null)) {
      for (var o in a)
        !a.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? t.setProperty(o, "")
            : o === "float"
              ? (t.cssFloat = "")
              : (t[o] = ""));
      for (var c in n)
        ((o = n[c]), n.hasOwnProperty(c) && a[c] !== o && em(t, c, o));
    } else for (var d in n) n.hasOwnProperty(d) && em(t, d, n[d]);
  }
  function dc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var bw = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    xw =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ur(t) {
    return xw.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var hc = null;
  function mc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ca = null,
    ua = null;
  function im(t) {
    var n = ia(t);
    if (n && (t = n.stateNode)) {
      var a = t[be] || null;
      t: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (uc(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Pe("" + n) + '"][type="radio"]',
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var o = a[n];
              if (o !== t && o.form === t.form) {
                var c = o[be] || null;
                if (!c) throw Error(r(90));
                uc(
                  o,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name,
                );
              }
            }
            for (n = 0; n < a.length; n++)
              ((o = a[n]), o.form === t.form && Ih(o));
          }
          break t;
        case "textarea":
          Jh(t, a.value, a.defaultValue);
          break t;
        case "select":
          ((n = a.value), n != null && oa(t, !!a.multiple, n, !1));
      }
    }
  }
  var pc = !1;
  function am(t, n, a) {
    if (pc) return t(n, a);
    pc = !0;
    try {
      var o = t(n);
      return o;
    } finally {
      if (
        ((pc = !1),
        (ca !== null || ua !== null) &&
          (Co(), ca && ((n = ca), (t = ua), (ua = ca = null), im(n), t)))
      )
        for (n = 0; n < t.length; n++) im(t[n]);
    }
  }
  function ds(t, n) {
    var a = t.stateNode;
    if (a === null) return null;
    var o = a[be] || null;
    if (o === null) return null;
    a = o[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((o = !o.disabled) ||
          ((t = t.type),
          (o = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !o));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(r(231, n, typeof a));
    return a;
  }
  var Tn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    gc = !1;
  if (Tn)
    try {
      var hs = {};
      (Object.defineProperty(hs, "passive", {
        get: function () {
          gc = !0;
        },
      }),
        window.addEventListener("test", hs, hs),
        window.removeEventListener("test", hs, hs));
    } catch {
      gc = !1;
    }
  var Kn = null,
    yc = null,
    Hr = null;
  function sm() {
    if (Hr) return Hr;
    var t,
      n = yc,
      a = n.length,
      o,
      c = "value" in Kn ? Kn.value : Kn.textContent,
      d = c.length;
    for (t = 0; t < a && n[t] === c[t]; t++);
    var y = a - t;
    for (o = 1; o <= y && n[a - o] === c[d - o]; o++);
    return (Hr = c.slice(t, 1 < o ? 1 - o : void 0));
  }
  function qr(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Gr() {
    return !0;
  }
  function rm() {
    return !1;
  }
  function xe(t) {
    function n(a, o, c, d, y) {
      ((this._reactName = a),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = y),
        (this.currentTarget = null));
      for (var S in t)
        t.hasOwnProperty(S) && ((a = t[S]), (this[S] = a ? a(d) : d[S]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Gr
          : rm),
        (this.isPropagationStopped = rm),
        this
      );
    }
    return (
      g(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Gr));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Gr));
        },
        persist: function () {},
        isPersistent: Gr,
      }),
      n
    );
  }
  var Mi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yr = xe(Mi),
    ms = g({}, Mi, { view: 0, detail: 0 }),
    Sw = xe(ms),
    vc,
    bc,
    ps,
    Fr = g({}, ms, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Sc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ps &&
              (ps && t.type === "mousemove"
                ? ((vc = t.screenX - ps.screenX), (bc = t.screenY - ps.screenY))
                : (bc = vc = 0),
              (ps = t)),
            vc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : bc;
      },
    }),
    om = xe(Fr),
    ww = g({}, Fr, { dataTransfer: 0 }),
    Tw = xe(ww),
    Ew = g({}, ms, { relatedTarget: 0 }),
    xc = xe(Ew),
    Aw = g({}, Mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cw = xe(Aw),
    Rw = g({}, Mi, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Mw = xe(Rw),
    Dw = g({}, Mi, { data: 0 }),
    lm = xe(Dw),
    Ow = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Nw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    jw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function _w(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = jw[t])
        ? !!n[t]
        : !1;
  }
  function Sc() {
    return _w;
  }
  var Vw = g({}, ms, {
      key: function (t) {
        if (t.key) {
          var n = Ow[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = qr(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Nw[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sc,
      charCode: function (t) {
        return t.type === "keypress" ? qr(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? qr(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Lw = xe(Vw),
    zw = g({}, Fr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    cm = xe(zw),
    Pw = g({}, ms, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sc,
    }),
    Bw = xe(Pw),
    kw = g({}, Mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uw = xe(kw),
    Hw = g({}, Fr, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    qw = xe(Hw),
    Gw = g({}, Mi, { newState: 0, oldState: 0 }),
    Yw = xe(Gw),
    Fw = [9, 13, 27, 32],
    wc = Tn && "CompositionEvent" in window,
    gs = null;
  Tn && "documentMode" in document && (gs = document.documentMode);
  var Xw = Tn && "TextEvent" in window && !gs,
    um = Tn && (!wc || (gs && 8 < gs && 11 >= gs)),
    fm = " ",
    dm = !1;
  function hm(t, n) {
    switch (t) {
      case "keyup":
        return Fw.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mm(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var fa = !1;
  function Kw(t, n) {
    switch (t) {
      case "compositionend":
        return mm(n);
      case "keypress":
        return n.which !== 32 ? null : ((dm = !0), fm);
      case "textInput":
        return ((t = n.data), t === fm && dm ? null : t);
      default:
        return null;
    }
  }
  function Qw(t, n) {
    if (fa)
      return t === "compositionend" || (!wc && hm(t, n))
        ? ((t = sm()), (Hr = yc = Kn = null), (fa = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return um && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Zw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function pm(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!Zw[t.type] : n === "textarea";
  }
  function gm(t, n, a, o) {
    (ca ? (ua ? ua.push(o) : (ua = [o])) : (ca = o),
      (n = jo(n, "onChange")),
      0 < n.length &&
        ((a = new Yr("onChange", "change", null, a, o)),
        t.push({ event: a, listeners: n })));
  }
  var ys = null,
    vs = null;
  function Ww(t) {
    Wg(t, 0);
  }
  function Xr(t) {
    var n = fs(t);
    if (Ih(n)) return t;
  }
  function ym(t, n) {
    if (t === "change") return n;
  }
  var vm = !1;
  if (Tn) {
    var Tc;
    if (Tn) {
      var Ec = "oninput" in document;
      if (!Ec) {
        var bm = document.createElement("div");
        (bm.setAttribute("oninput", "return;"),
          (Ec = typeof bm.oninput == "function"));
      }
      Tc = Ec;
    } else Tc = !1;
    vm = Tc && (!document.documentMode || 9 < document.documentMode);
  }
  function xm() {
    ys && (ys.detachEvent("onpropertychange", Sm), (vs = ys = null));
  }
  function Sm(t) {
    if (t.propertyName === "value" && Xr(vs)) {
      var n = [];
      (gm(n, vs, t, mc(t)), am(Ww, n));
    }
  }
  function Iw(t, n, a) {
    t === "focusin"
      ? (xm(), (ys = n), (vs = a), ys.attachEvent("onpropertychange", Sm))
      : t === "focusout" && xm();
  }
  function $w(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Xr(vs);
  }
  function Jw(t, n) {
    if (t === "click") return Xr(n);
  }
  function tT(t, n) {
    if (t === "input" || t === "change") return Xr(n);
  }
  function eT(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var Ce = typeof Object.is == "function" ? Object.is : eT;
  function bs(t, n) {
    if (Ce(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(t),
      o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var c = a[o];
      if (!rn.call(n, c) || !Ce(t[c], n[c])) return !1;
    }
    return !0;
  }
  function wm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Tm(t, n) {
    var a = wm(t);
    t = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (((o = t + a.textContent.length), t <= n && o >= n))
          return { node: a, offset: n - t };
        t = o;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = wm(a);
    }
  }
  function Em(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Em(t, n.parentNode)
            : "contains" in t
              ? t.contains(n)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Am(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = kr(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = n.contentWindow;
      else break;
      n = kr(t.document);
    }
    return n;
  }
  function Ac(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var nT = Tn && "documentMode" in document && 11 >= document.documentMode,
    da = null,
    Cc = null,
    xs = null,
    Rc = !1;
  function Cm(t, n, a) {
    var o =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Rc ||
      da == null ||
      da !== kr(o) ||
      ((o = da),
      "selectionStart" in o && Ac(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (xs && bs(xs, o)) ||
        ((xs = o),
        (o = jo(Cc, "onSelect")),
        0 < o.length &&
          ((n = new Yr("onSelect", "select", null, n, a)),
          t.push({ event: n, listeners: o }),
          (n.target = da))));
  }
  function Di(t, n) {
    var a = {};
    return (
      (a[t.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + t] = "webkit" + n),
      (a["Moz" + t] = "moz" + n),
      a
    );
  }
  var ha = {
      animationend: Di("Animation", "AnimationEnd"),
      animationiteration: Di("Animation", "AnimationIteration"),
      animationstart: Di("Animation", "AnimationStart"),
      transitionrun: Di("Transition", "TransitionRun"),
      transitionstart: Di("Transition", "TransitionStart"),
      transitioncancel: Di("Transition", "TransitionCancel"),
      transitionend: Di("Transition", "TransitionEnd"),
    },
    Mc = {},
    Rm = {};
  Tn &&
    ((Rm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ha.animationend.animation,
      delete ha.animationiteration.animation,
      delete ha.animationstart.animation),
    "TransitionEvent" in window || delete ha.transitionend.transition);
  function Oi(t) {
    if (Mc[t]) return Mc[t];
    if (!ha[t]) return t;
    var n = ha[t],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in Rm) return (Mc[t] = n[a]);
    return t;
  }
  var Mm = Oi("animationend"),
    Dm = Oi("animationiteration"),
    Om = Oi("animationstart"),
    iT = Oi("transitionrun"),
    aT = Oi("transitionstart"),
    sT = Oi("transitioncancel"),
    Nm = Oi("transitionend"),
    jm = new Map(),
    Dc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Dc.push("scrollEnd");
  function Qe(t, n) {
    (jm.set(t, n), Ri(n, [t]));
  }
  var _m = new WeakMap();
  function Be(t, n) {
    if (typeof t == "object" && t !== null) {
      var a = _m.get(t);
      return a !== void 0
        ? a
        : ((n = { value: t, source: n, stack: Zh(n) }), _m.set(t, n), n);
    }
    return { value: t, source: n, stack: Zh(n) };
  }
  var ke = [],
    ma = 0,
    Oc = 0;
  function Kr() {
    for (var t = ma, n = (Oc = ma = 0); n < t; ) {
      var a = ke[n];
      ke[n++] = null;
      var o = ke[n];
      ke[n++] = null;
      var c = ke[n];
      ke[n++] = null;
      var d = ke[n];
      if (((ke[n++] = null), o !== null && c !== null)) {
        var y = o.pending;
        (y === null ? (c.next = c) : ((c.next = y.next), (y.next = c)),
          (o.pending = c));
      }
      d !== 0 && Vm(a, c, d);
    }
  }
  function Qr(t, n, a, o) {
    ((ke[ma++] = t),
      (ke[ma++] = n),
      (ke[ma++] = a),
      (ke[ma++] = o),
      (Oc |= o),
      (t.lanes |= o),
      (t = t.alternate),
      t !== null && (t.lanes |= o));
  }
  function Nc(t, n, a, o) {
    return (Qr(t, n, a, o), Zr(t));
  }
  function pa(t, n) {
    return (Qr(t, null, null, n), Zr(t));
  }
  function Vm(t, n, a) {
    t.lanes |= a;
    var o = t.alternate;
    o !== null && (o.lanes |= a);
    for (var c = !1, d = t.return; d !== null; )
      ((d.childLanes |= a),
        (o = d.alternate),
        o !== null && (o.childLanes |= a),
        d.tag === 22 &&
          ((t = d.stateNode), t === null || t._visibility & 1 || (c = !0)),
        (t = d),
        (d = d.return));
    return t.tag === 3
      ? ((d = t.stateNode),
        c &&
          n !== null &&
          ((c = 31 - Ae(a)),
          (t = d.hiddenUpdates),
          (o = t[c]),
          o === null ? (t[c] = [n]) : o.push(n),
          (n.lane = a | 536870912)),
        d)
      : null;
  }
  function Zr(t) {
    if (50 < Fs) throw ((Fs = 0), (Pu = null), Error(r(185)));
    for (var n = t.return; n !== null; ) ((t = n), (n = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var ga = {};
  function rT(t, n, a, o) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Re(t, n, a, o) {
    return new rT(t, n, a, o);
  }
  function jc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function En(t, n) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = Re(t.tag, n, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = n),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function Lm(t, n) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (n = a.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function Wr(t, n, a, o, c, d) {
    var y = 0;
    if (((o = t), typeof t == "function")) jc(t) && (y = 1);
    else if (typeof t == "string")
      y = lE(t, a, rt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case J:
          return ((t = Re(31, a, n, c)), (t.elementType = J), (t.lanes = d), t);
        case C:
          return Ni(a.children, c, d, n);
        case E:
          ((y = 8), (c |= 24));
          break;
        case R:
          return (
            (t = Re(12, a, n, c | 2)),
            (t.elementType = R),
            (t.lanes = d),
            t
          );
        case V:
          return ((t = Re(13, a, n, c)), (t.elementType = V), (t.lanes = d), t);
        case F:
          return ((t = Re(19, a, n, c)), (t.elementType = F), (t.lanes = d), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case N:
              case O:
                y = 10;
                break t;
              case j:
                y = 9;
                break t;
              case P:
                y = 11;
                break t;
              case Z:
                y = 14;
                break t;
              case H:
                ((y = 16), (o = null));
                break t;
            }
          ((y = 29),
            (a = Error(r(130, t === null ? "null" : typeof t, ""))),
            (o = null));
      }
    return (
      (n = Re(y, a, n, c)),
      (n.elementType = t),
      (n.type = o),
      (n.lanes = d),
      n
    );
  }
  function Ni(t, n, a, o) {
    return ((t = Re(7, t, o, n)), (t.lanes = a), t);
  }
  function _c(t, n, a) {
    return ((t = Re(6, t, null, n)), (t.lanes = a), t);
  }
  function Vc(t, n, a) {
    return (
      (n = Re(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var ya = [],
    va = 0,
    Ir = null,
    $r = 0,
    Ue = [],
    He = 0,
    ji = null,
    An = 1,
    Cn = "";
  function _i(t, n) {
    ((ya[va++] = $r), (ya[va++] = Ir), (Ir = t), ($r = n));
  }
  function zm(t, n, a) {
    ((Ue[He++] = An), (Ue[He++] = Cn), (Ue[He++] = ji), (ji = t));
    var o = An;
    t = Cn;
    var c = 32 - Ae(o) - 1;
    ((o &= ~(1 << c)), (a += 1));
    var d = 32 - Ae(n) + c;
    if (30 < d) {
      var y = c - (c % 5);
      ((d = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (c -= y),
        (An = (1 << (32 - Ae(n) + c)) | (a << c) | o),
        (Cn = d + t));
    } else ((An = (1 << d) | (a << c) | o), (Cn = t));
  }
  function Lc(t) {
    t.return !== null && (_i(t, 1), zm(t, 1, 0));
  }
  function zc(t) {
    for (; t === Ir; )
      ((Ir = ya[--va]), (ya[va] = null), ($r = ya[--va]), (ya[va] = null));
    for (; t === ji; )
      ((ji = Ue[--He]),
        (Ue[He] = null),
        (Cn = Ue[--He]),
        (Ue[He] = null),
        (An = Ue[--He]),
        (Ue[He] = null));
  }
  var me = null,
    qt = null,
    At = !1,
    Vi = null,
    ln = !1,
    Pc = Error(r(519));
  function Li(t) {
    var n = Error(r(418, ""));
    throw (Ts(Be(n, t)), Pc);
  }
  function Pm(t) {
    var n = t.stateNode,
      a = t.type,
      o = t.memoizedProps;
    switch (((n[ue] = t), (n[be] = o), a)) {
      case "dialog":
        (St("cancel", n), St("close", n));
        break;
      case "iframe":
      case "object":
      case "embed":
        St("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ks.length; a++) St(Ks[a], n);
        break;
      case "source":
        St("error", n);
        break;
      case "img":
      case "image":
      case "link":
        (St("error", n), St("load", n));
        break;
      case "details":
        St("toggle", n);
        break;
      case "input":
        (St("invalid", n),
          $h(
            n,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0,
          ),
          Br(n));
        break;
      case "select":
        St("invalid", n);
        break;
      case "textarea":
        (St("invalid", n), tm(n, o.value, o.defaultValue, o.children), Br(n));
    }
    ((a = o.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      o.suppressHydrationWarning === !0 ||
      ty(n.textContent, a)
        ? (o.popover != null && (St("beforetoggle", n), St("toggle", n)),
          o.onScroll != null && St("scroll", n),
          o.onScrollEnd != null && St("scrollend", n),
          o.onClick != null && (n.onclick = _o),
          (n = !0))
        : (n = !1),
      n || Li(t));
  }
  function Bm(t) {
    for (me = t.return; me; )
      switch (me.tag) {
        case 5:
        case 13:
          ln = !1;
          return;
        case 27:
        case 3:
          ln = !0;
          return;
        default:
          me = me.return;
      }
  }
  function Ss(t) {
    if (t !== me) return !1;
    if (!At) return (Bm(t), (At = !0), !1);
    var n = t.tag,
      a;
    if (
      ((a = n !== 3 && n !== 27) &&
        ((a = n === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || Ju(t.type, t.memoizedProps))),
        (a = !a)),
      a && qt && Li(t),
      Bm(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === "/$")) {
              if (n === 0) {
                qt = We(t.nextSibling);
                break t;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          t = t.nextSibling;
        }
        qt = null;
      }
    } else
      n === 27
        ? ((n = qt), ci(t.type) ? ((t = af), (af = null), (qt = t)) : (qt = n))
        : (qt = me ? We(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ws() {
    ((qt = me = null), (At = !1));
  }
  function km() {
    var t = Vi;
    return (
      t !== null &&
        (Te === null ? (Te = t) : Te.push.apply(Te, t), (Vi = null)),
      t
    );
  }
  function Ts(t) {
    Vi === null ? (Vi = [t]) : Vi.push(t);
  }
  var Bc = G(null),
    zi = null,
    Rn = null;
  function Qn(t, n, a) {
    (W(Bc, n._currentValue), (n._currentValue = a));
  }
  function Mn(t) {
    ((t._currentValue = Bc.current), I(Bc));
  }
  function kc(t, n, a) {
    for (; t !== null; ) {
      var o = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function Uc(t, n, a, o) {
    var c = t.child;
    for (c !== null && (c.return = t); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var y = c.child;
        d = d.firstContext;
        t: for (; d !== null; ) {
          var S = d;
          d = c;
          for (var M = 0; M < n.length; M++)
            if (S.context === n[M]) {
              ((d.lanes |= a),
                (S = d.alternate),
                S !== null && (S.lanes |= a),
                kc(d.return, a, t),
                o || (y = null));
              break t;
            }
          d = S.next;
        }
      } else if (c.tag === 18) {
        if (((y = c.return), y === null)) throw Error(r(341));
        ((y.lanes |= a),
          (d = y.alternate),
          d !== null && (d.lanes |= a),
          kc(y, a, t),
          (y = null));
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((c = y.sibling), c !== null)) {
            ((c.return = y.return), (y = c));
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function Es(t, n, a, o) {
    t = null;
    for (var c = n, d = !1; c !== null; ) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(r(387));
        if (((y = y.memoizedProps), y !== null)) {
          var S = c.type;
          Ce(c.pendingProps.value, y.value) ||
            (t !== null ? t.push(S) : (t = [S]));
        }
      } else if (c === Pt.current) {
        if (((y = c.alternate), y === null)) throw Error(r(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (t !== null ? t.push(Js) : (t = [Js]));
      }
      c = c.return;
    }
    (t !== null && Uc(n, t, a, o), (n.flags |= 262144));
  }
  function Jr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ce(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Pi(t) {
    ((zi = t),
      (Rn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function fe(t) {
    return Um(zi, t);
  }
  function to(t, n) {
    return (zi === null && Pi(t), Um(t, n));
  }
  function Um(t, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), Rn === null)) {
      if (t === null) throw Error(r(308));
      ((Rn = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288));
    } else Rn = Rn.next = n;
    return a;
  }
  var oT =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, o) {
                  t.push(o);
                },
              });
            this.abort = function () {
              ((n.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    lT = e.unstable_scheduleCallback,
    cT = e.unstable_NormalPriority,
    It = {
      $$typeof: O,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hc() {
    return { controller: new oT(), data: new Map(), refCount: 0 };
  }
  function As(t) {
    (t.refCount--,
      t.refCount === 0 &&
        lT(cT, function () {
          t.controller.abort();
        }));
  }
  var Cs = null,
    qc = 0,
    ba = 0,
    xa = null;
  function uT(t, n) {
    if (Cs === null) {
      var a = (Cs = []);
      ((qc = 0),
        (ba = Yu()),
        (xa = {
          status: "pending",
          value: void 0,
          then: function (o) {
            a.push(o);
          },
        }));
    }
    return (qc++, n.then(Hm, Hm), n);
  }
  function Hm() {
    if (--qc === 0 && Cs !== null) {
      xa !== null && (xa.status = "fulfilled");
      var t = Cs;
      ((Cs = null), (ba = 0), (xa = null));
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function fT(t, n) {
    var a = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          a.push(c);
        },
      };
    return (
      t.then(
        function () {
          ((o.status = "fulfilled"), (o.value = n));
          for (var c = 0; c < a.length; c++) (0, a[c])(n);
        },
        function (c) {
          for (o.status = "rejected", o.reason = c, c = 0; c < a.length; c++)
            (0, a[c])(void 0);
        },
      ),
      o
    );
  }
  var qm = L.S;
  L.S = function (t, n) {
    (typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      uT(t, n),
      qm !== null && qm(t, n));
  };
  var Bi = G(null);
  function Gc() {
    var t = Bi.current;
    return t !== null ? t : Lt.pooledCache;
  }
  function eo(t, n) {
    n === null ? W(Bi, Bi.current) : W(Bi, n.pool);
  }
  function Gm() {
    var t = Gc();
    return t === null ? null : { parent: It._currentValue, pool: t };
  }
  var Rs = Error(r(460)),
    Ym = Error(r(474)),
    no = Error(r(542)),
    Yc = { then: function () {} };
  function Fm(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function io() {}
  function Xm(t, n, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(n) : a !== n && (n.then(io, io), (n = a)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), Qm(t), t);
      default:
        if (typeof n.status == "string") n.then(io, io);
        else {
          if (((t = Lt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          ((t = n),
            (t.status = "pending"),
            t.then(
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  ((c.status = "fulfilled"), (c.value = o));
                }
              },
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  ((c.status = "rejected"), (c.reason = o));
                }
              },
            ));
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), Qm(t), t);
        }
        throw ((Ms = n), Rs);
    }
  }
  var Ms = null;
  function Km() {
    if (Ms === null) throw Error(r(459));
    var t = Ms;
    return ((Ms = null), t);
  }
  function Qm(t) {
    if (t === Rs || t === no) throw Error(r(483));
  }
  var Zn = !1;
  function Fc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Xc(t, n) {
    ((t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Wn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function In(t, n, a) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Dt & 2) !== 0)) {
      var c = o.pending;
      return (
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
        (o.pending = n),
        (n = Zr(t)),
        Vm(t, null, a),
        n
      );
    }
    return (Qr(t, o, n, a), Zr(t));
  }
  function Ds(t, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194048) !== 0))
    ) {
      var o = n.lanes;
      ((o &= t.pendingLanes), (a |= o), (n.lanes = a), Hh(t, a));
    }
  }
  function Kc(t, n) {
    var a = t.updateQueue,
      o = t.alternate;
    if (o !== null && ((o = o.updateQueue), a === o)) {
      var c = null,
        d = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var y = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (d === null ? (c = d = y) : (d = d.next = y), (a = a.next));
        } while (a !== null);
        d === null ? (c = d = n) : (d = d.next = n);
      } else c = d = n;
      ((a = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = n) : (t.next = n),
      (a.lastBaseUpdate = n));
  }
  var Qc = !1;
  function Os() {
    if (Qc) {
      var t = xa;
      if (t !== null) throw t;
    }
  }
  function Ns(t, n, a, o) {
    Qc = !1;
    var c = t.updateQueue;
    Zn = !1;
    var d = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var M = S,
        B = M.next;
      ((M.next = null), y === null ? (d = B) : (y.next = B), (y = M));
      var q = t.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (S = q.lastBaseUpdate),
        S !== y &&
          (S === null ? (q.firstBaseUpdate = B) : (S.next = B),
          (q.lastBaseUpdate = M)));
    }
    if (d !== null) {
      var K = c.baseState;
      ((y = 0), (q = B = M = null), (S = d));
      do {
        var k = S.lane & -536870913,
          U = k !== S.lane;
        if (U ? (Tt & k) === k : (o & k) === k) {
          (k !== 0 && k === ba && (Qc = !0),
            q !== null &&
              (q = q.next =
                {
                  lane: 0,
                  tag: S.tag,
                  payload: S.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var mt = t,
              ut = S;
            k = n;
            var _t = a;
            switch (ut.tag) {
              case 1:
                if (((mt = ut.payload), typeof mt == "function")) {
                  K = mt.call(_t, K, k);
                  break t;
                }
                K = mt;
                break t;
              case 3:
                mt.flags = (mt.flags & -65537) | 128;
              case 0:
                if (
                  ((mt = ut.payload),
                  (k = typeof mt == "function" ? mt.call(_t, K, k) : mt),
                  k == null)
                )
                  break t;
                K = g({}, K, k);
                break t;
              case 2:
                Zn = !0;
            }
          }
          ((k = S.callback),
            k !== null &&
              ((t.flags |= 64),
              U && (t.flags |= 8192),
              (U = c.callbacks),
              U === null ? (c.callbacks = [k]) : U.push(k)));
        } else
          ((U = {
            lane: k,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            q === null ? ((B = q = U), (M = K)) : (q = q.next = U),
            (y |= k));
        if (((S = S.next), S === null)) {
          if (((S = c.shared.pending), S === null)) break;
          ((U = S),
            (S = U.next),
            (U.next = null),
            (c.lastBaseUpdate = U),
            (c.shared.pending = null));
        }
      } while (!0);
      (q === null && (M = K),
        (c.baseState = M),
        (c.firstBaseUpdate = B),
        (c.lastBaseUpdate = q),
        d === null && (c.shared.lanes = 0),
        (si |= y),
        (t.lanes = y),
        (t.memoizedState = K));
    }
  }
  function Zm(t, n) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(n);
  }
  function Wm(t, n) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) Zm(a[t], n);
  }
  var Sa = G(null),
    ao = G(0);
  function Im(t, n) {
    ((t = Ln), W(ao, t), W(Sa, n), (Ln = t | n.baseLanes));
  }
  function Zc() {
    (W(ao, Ln), W(Sa, Sa.current));
  }
  function Wc() {
    ((Ln = ao.current), I(Sa), I(ao));
  }
  var $n = 0,
    yt = null,
    Nt = null,
    Kt = null,
    so = !1,
    wa = !1,
    ki = !1,
    ro = 0,
    js = 0,
    Ta = null,
    dT = 0;
  function Ft() {
    throw Error(r(321));
  }
  function Ic(t, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < t.length; a++)
      if (!Ce(t[a], n[a])) return !1;
    return !0;
  }
  function $c(t, n, a, o, c, d) {
    return (
      ($n = d),
      (yt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (L.H = t === null || t.memoizedState === null ? Vp : Lp),
      (ki = !1),
      (d = a(o, c)),
      (ki = !1),
      wa && (d = Jm(n, a, o, c)),
      $m(t),
      d
    );
  }
  function $m(t) {
    L.H = ho;
    var n = Nt !== null && Nt.next !== null;
    if ((($n = 0), (Kt = Nt = yt = null), (so = !1), (js = 0), (Ta = null), n))
      throw Error(r(300));
    t === null ||
      ne ||
      ((t = t.dependencies), t !== null && Jr(t) && (ne = !0));
  }
  function Jm(t, n, a, o) {
    yt = t;
    var c = 0;
    do {
      if ((wa && (Ta = null), (js = 0), (wa = !1), 25 <= c))
        throw Error(r(301));
      if (((c += 1), (Kt = Nt = null), t.updateQueue != null)) {
        var d = t.updateQueue;
        ((d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0));
      }
      ((L.H = bT), (d = n(a, o)));
    } while (wa);
    return d;
  }
  function hT() {
    var t = L.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? _s(n) : n),
      (t = t.useState()[0]),
      (Nt !== null ? Nt.memoizedState : null) !== t && (yt.flags |= 1024),
      n
    );
  }
  function Jc() {
    var t = ro !== 0;
    return ((ro = 0), t);
  }
  function tu(t, n, a) {
    ((n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~a));
  }
  function eu(t) {
    if (so) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        (n !== null && (n.pending = null), (t = t.next));
      }
      so = !1;
    }
    (($n = 0), (Kt = Nt = yt = null), (wa = !1), (js = ro = 0), (Ta = null));
  }
  function Se() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Kt === null ? (yt.memoizedState = Kt = t) : (Kt = Kt.next = t), Kt);
  }
  function Qt() {
    if (Nt === null) {
      var t = yt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Nt.next;
    var n = Kt === null ? yt.memoizedState : Kt.next;
    if (n !== null) ((Kt = n), (Nt = t));
    else {
      if (t === null)
        throw yt.alternate === null ? Error(r(467)) : Error(r(310));
      ((Nt = t),
        (t = {
          memoizedState: Nt.memoizedState,
          baseState: Nt.baseState,
          baseQueue: Nt.baseQueue,
          queue: Nt.queue,
          next: null,
        }),
        Kt === null ? (yt.memoizedState = Kt = t) : (Kt = Kt.next = t));
    }
    return Kt;
  }
  function nu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function _s(t) {
    var n = js;
    return (
      (js += 1),
      Ta === null && (Ta = []),
      (t = Xm(Ta, t, n)),
      (n = yt),
      (Kt === null ? n.memoizedState : Kt.next) === null &&
        ((n = n.alternate),
        (L.H = n === null || n.memoizedState === null ? Vp : Lp)),
      t
    );
  }
  function oo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return _s(t);
      if (t.$$typeof === O) return fe(t);
    }
    throw Error(r(438, String(t)));
  }
  function iu(t) {
    var n = null,
      a = yt.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var o = yt.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = nu()), (yt.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(t), o = 0; o < t; o++) a[o] = lt;
    return (n.index++, a);
  }
  function Dn(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function lo(t) {
    var n = Qt();
    return au(n, Nt, t);
  }
  function au(t, n, a) {
    var o = t.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = a;
    var c = t.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var y = c.next;
        ((c.next = d.next), (d.next = y));
      }
      ((n.baseQueue = c = d), (o.pending = null));
    }
    if (((d = t.baseState), c === null)) t.memoizedState = d;
    else {
      n = c.next;
      var S = (y = null),
        M = null,
        B = n,
        q = !1;
      do {
        var K = B.lane & -536870913;
        if (K !== B.lane ? (Tt & K) === K : ($n & K) === K) {
          var k = B.revertLane;
          if (k === 0)
            (M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: B.action,
                  hasEagerState: B.hasEagerState,
                  eagerState: B.eagerState,
                  next: null,
                }),
              K === ba && (q = !0));
          else if (($n & k) === k) {
            ((B = B.next), k === ba && (q = !0));
            continue;
          } else
            ((K = {
              lane: 0,
              revertLane: B.revertLane,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              M === null ? ((S = M = K), (y = d)) : (M = M.next = K),
              (yt.lanes |= k),
              (si |= k));
          ((K = B.action),
            ki && a(d, K),
            (d = B.hasEagerState ? B.eagerState : a(d, K)));
        } else
          ((k = {
            lane: K,
            revertLane: B.revertLane,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            M === null ? ((S = M = k), (y = d)) : (M = M.next = k),
            (yt.lanes |= K),
            (si |= K));
        B = B.next;
      } while (B !== null && B !== n);
      if (
        (M === null ? (y = d) : (M.next = S),
        !Ce(d, t.memoizedState) && ((ne = !0), q && ((a = xa), a !== null)))
      )
        throw a;
      ((t.memoizedState = d),
        (t.baseState = y),
        (t.baseQueue = M),
        (o.lastRenderedState = d));
    }
    return (c === null && (o.lanes = 0), [t.memoizedState, o.dispatch]);
  }
  function su(t) {
    var n = Qt(),
      a = n.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var o = a.dispatch,
      c = a.pending,
      d = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var y = (c = c.next);
      do ((d = t(d, y.action)), (y = y.next));
      while (y !== c);
      (Ce(d, n.memoizedState) || (ne = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (a.lastRenderedState = d));
    }
    return [d, o];
  }
  function tp(t, n, a) {
    var o = yt,
      c = Qt(),
      d = At;
    if (d) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = n();
    var y = !Ce((Nt || c).memoizedState, a);
    (y && ((c.memoizedState = a), (ne = !0)), (c = c.queue));
    var S = ip.bind(null, o, c, t);
    if (
      (Vs(2048, 8, S, [t]),
      c.getSnapshot !== n || y || (Kt !== null && Kt.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Ea(9, co(), np.bind(null, o, c, a, n), null),
        Lt === null)
      )
        throw Error(r(349));
      d || ($n & 124) !== 0 || ep(o, n, a);
    }
    return a;
  }
  function ep(t, n, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: n, value: a }),
      (n = yt.updateQueue),
      n === null
        ? ((n = nu()), (yt.updateQueue = n), (n.stores = [t]))
        : ((a = n.stores), a === null ? (n.stores = [t]) : a.push(t)));
  }
  function np(t, n, a, o) {
    ((n.value = a), (n.getSnapshot = o), ap(n) && sp(t));
  }
  function ip(t, n, a) {
    return a(function () {
      ap(n) && sp(t);
    });
  }
  function ap(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var a = n();
      return !Ce(t, a);
    } catch {
      return !0;
    }
  }
  function sp(t) {
    var n = pa(t, 2);
    n !== null && je(n, t, 2);
  }
  function ru(t) {
    var n = Se();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), ki)) {
        Fn(!0);
        try {
          a();
        } finally {
          Fn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: t,
      }),
      n
    );
  }
  function rp(t, n, a, o) {
    return ((t.baseState = a), au(t, Nt, typeof o == "function" ? o : Dn));
  }
  function mT(t, n, a, o, c) {
    if (fo(t)) throw Error(r(485));
    if (((t = n.action), t !== null)) {
      var d = {
        payload: c,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          d.listeners.push(y);
        },
      };
      (L.T !== null ? a(!0) : (d.isTransition = !1),
        o(d),
        (a = n.pending),
        a === null
          ? ((d.next = n.pending = d), op(n, d))
          : ((d.next = a.next), (n.pending = a.next = d)));
    }
  }
  function op(t, n) {
    var a = n.action,
      o = n.payload,
      c = t.state;
    if (n.isTransition) {
      var d = L.T,
        y = {};
      L.T = y;
      try {
        var S = a(c, o),
          M = L.S;
        (M !== null && M(y, S), lp(t, n, S));
      } catch (B) {
        ou(t, n, B);
      } finally {
        L.T = d;
      }
    } else
      try {
        ((d = a(c, o)), lp(t, n, d));
      } catch (B) {
        ou(t, n, B);
      }
  }
  function lp(t, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (o) {
            cp(t, n, o);
          },
          function (o) {
            return ou(t, n, o);
          },
        )
      : cp(t, n, a);
  }
  function cp(t, n, a) {
    ((n.status = "fulfilled"),
      (n.value = a),
      up(n),
      (t.state = a),
      (n = t.pending),
      n !== null &&
        ((a = n.next),
        a === n ? (t.pending = null) : ((a = a.next), (n.next = a), op(t, a))));
  }
  function ou(t, n, a) {
    var o = t.pending;
    if (((t.pending = null), o !== null)) {
      o = o.next;
      do ((n.status = "rejected"), (n.reason = a), up(n), (n = n.next));
      while (n !== o);
    }
    t.action = null;
  }
  function up(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function fp(t, n) {
    return n;
  }
  function dp(t, n) {
    if (At) {
      var a = Lt.formState;
      if (a !== null) {
        t: {
          var o = yt;
          if (At) {
            if (qt) {
              e: {
                for (var c = qt, d = ln; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break e;
                  }
                  if (((c = We(c.nextSibling)), c === null)) {
                    c = null;
                    break e;
                  }
                }
                ((d = c.data), (c = d === "F!" || d === "F" ? c : null));
              }
              if (c) {
                ((qt = We(c.nextSibling)), (o = c.data === "F!"));
                break t;
              }
            }
            Li(o);
          }
          o = !1;
        }
        o && (n = a[0]);
      }
    }
    return (
      (a = Se()),
      (a.memoizedState = a.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fp,
        lastRenderedState: n,
      }),
      (a.queue = o),
      (a = Np.bind(null, yt, o)),
      (o.dispatch = a),
      (o = ru(!1)),
      (d = du.bind(null, yt, !1, o.queue)),
      (o = Se()),
      (c = { state: n, dispatch: null, action: t, pending: null }),
      (o.queue = c),
      (a = mT.bind(null, yt, c, d, a)),
      (c.dispatch = a),
      (o.memoizedState = t),
      [n, a, !1]
    );
  }
  function hp(t) {
    var n = Qt();
    return mp(n, Nt, t);
  }
  function mp(t, n, a) {
    if (
      ((n = au(t, n, fp)[0]),
      (t = lo(Dn)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var o = _s(n);
      } catch (y) {
        throw y === Rs ? no : y;
      }
    else o = n;
    n = Qt();
    var c = n.queue,
      d = c.dispatch;
    return (
      a !== n.memoizedState &&
        ((yt.flags |= 2048), Ea(9, co(), pT.bind(null, c, a), null)),
      [o, d, t]
    );
  }
  function pT(t, n) {
    t.action = n;
  }
  function pp(t) {
    var n = Qt(),
      a = Nt;
    if (a !== null) return mp(n, a, t);
    (Qt(), (n = n.memoizedState), (a = Qt()));
    var o = a.queue.dispatch;
    return ((a.memoizedState = t), [n, o, !1]);
  }
  function Ea(t, n, a, o) {
    return (
      (t = { tag: t, create: a, deps: o, inst: n, next: null }),
      (n = yt.updateQueue),
      n === null && ((n = nu()), (yt.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = t.next = t)
        : ((o = a.next), (a.next = t), (t.next = o), (n.lastEffect = t)),
      t
    );
  }
  function co() {
    return { destroy: void 0, resource: void 0 };
  }
  function gp() {
    return Qt().memoizedState;
  }
  function uo(t, n, a, o) {
    var c = Se();
    ((o = o === void 0 ? null : o),
      (yt.flags |= t),
      (c.memoizedState = Ea(1 | n, co(), a, o)));
  }
  function Vs(t, n, a, o) {
    var c = Qt();
    o = o === void 0 ? null : o;
    var d = c.memoizedState.inst;
    Nt !== null && o !== null && Ic(o, Nt.memoizedState.deps)
      ? (c.memoizedState = Ea(n, d, a, o))
      : ((yt.flags |= t), (c.memoizedState = Ea(1 | n, d, a, o)));
  }
  function yp(t, n) {
    uo(8390656, 8, t, n);
  }
  function vp(t, n) {
    Vs(2048, 8, t, n);
  }
  function bp(t, n) {
    return Vs(4, 2, t, n);
  }
  function xp(t, n) {
    return Vs(4, 4, t, n);
  }
  function Sp(t, n) {
    if (typeof n == "function") {
      t = t();
      var a = n(t);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function wp(t, n, a) {
    ((a = a != null ? a.concat([t]) : null), Vs(4, 4, Sp.bind(null, n, t), a));
  }
  function lu() {}
  function Tp(t, n) {
    var a = Qt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && Ic(n, o[1]) ? o[0] : ((a.memoizedState = [t, n]), t);
  }
  function Ep(t, n) {
    var a = Qt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && Ic(n, o[1])) return o[0];
    if (((o = t()), ki)) {
      Fn(!0);
      try {
        t();
      } finally {
        Fn(!1);
      }
    }
    return ((a.memoizedState = [o, n]), o);
  }
  function cu(t, n, a) {
    return a === void 0 || ($n & 1073741824) !== 0
      ? (t.memoizedState = n)
      : ((t.memoizedState = a), (t = Rg()), (yt.lanes |= t), (si |= t), a);
  }
  function Ap(t, n, a, o) {
    return Ce(a, n)
      ? a
      : Sa.current !== null
        ? ((t = cu(t, a, o)), Ce(t, n) || (ne = !0), t)
        : ($n & 42) === 0
          ? ((ne = !0), (t.memoizedState = a))
          : ((t = Rg()), (yt.lanes |= t), (si |= t), n);
  }
  function Cp(t, n, a, o, c) {
    var d = Q.p;
    Q.p = d !== 0 && 8 > d ? d : 8;
    var y = L.T,
      S = {};
    ((L.T = S), du(t, !1, n, a));
    try {
      var M = c(),
        B = L.S;
      if (
        (B !== null && B(S, M),
        M !== null && typeof M == "object" && typeof M.then == "function")
      ) {
        var q = fT(M, o);
        Ls(t, n, q, Ne(t));
      } else Ls(t, n, o, Ne(t));
    } catch (K) {
      Ls(t, n, { then: function () {}, status: "rejected", reason: K }, Ne());
    } finally {
      ((Q.p = d), (L.T = y));
    }
  }
  function gT() {}
  function uu(t, n, a, o) {
    if (t.tag !== 5) throw Error(r(476));
    var c = Rp(t).queue;
    Cp(
      t,
      c,
      n,
      X,
      a === null
        ? gT
        : function () {
            return (Mp(t), a(o));
          },
    );
  }
  function Rp(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: X,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Dn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function Mp(t) {
    var n = Rp(t).next.queue;
    Ls(t, n, {}, Ne());
  }
  function fu() {
    return fe(Js);
  }
  function Dp() {
    return Qt().memoizedState;
  }
  function Op() {
    return Qt().memoizedState;
  }
  function yT(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = Ne();
          t = Wn(a);
          var o = In(n, t, a);
          (o !== null && (je(o, n, a), Ds(o, n, a)),
            (n = { cache: Hc() }),
            (t.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function vT(t, n, a) {
    var o = Ne();
    ((a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      fo(t)
        ? jp(n, a)
        : ((a = Nc(t, n, a, o)), a !== null && (je(a, t, o), _p(a, n, o))));
  }
  function Np(t, n, a) {
    var o = Ne();
    Ls(t, n, a, o);
  }
  function Ls(t, n, a, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (fo(t)) jp(n, c);
    else {
      var d = t.alternate;
      if (
        t.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var y = n.lastRenderedState,
            S = d(y, a);
          if (((c.hasEagerState = !0), (c.eagerState = S), Ce(S, y)))
            return (Qr(t, n, c, 0), Lt === null && Kr(), !1);
        } catch {}
      if (((a = Nc(t, n, c, o)), a !== null))
        return (je(a, t, o), _p(a, n, o), !0);
    }
    return !1;
  }
  function du(t, n, a, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Yu(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fo(t))
    ) {
      if (n) throw Error(r(479));
    } else ((n = Nc(t, a, o, 2)), n !== null && je(n, t, 2));
  }
  function fo(t) {
    var n = t.alternate;
    return t === yt || (n !== null && n === yt);
  }
  function jp(t, n) {
    wa = so = !0;
    var a = t.pending;
    (a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (t.pending = n));
  }
  function _p(t, n, a) {
    if ((a & 4194048) !== 0) {
      var o = n.lanes;
      ((o &= t.pendingLanes), (a |= o), (n.lanes = a), Hh(t, a));
    }
  }
  var ho = {
      readContext: fe,
      use: oo,
      useCallback: Ft,
      useContext: Ft,
      useEffect: Ft,
      useImperativeHandle: Ft,
      useLayoutEffect: Ft,
      useInsertionEffect: Ft,
      useMemo: Ft,
      useReducer: Ft,
      useRef: Ft,
      useState: Ft,
      useDebugValue: Ft,
      useDeferredValue: Ft,
      useTransition: Ft,
      useSyncExternalStore: Ft,
      useId: Ft,
      useHostTransitionStatus: Ft,
      useFormState: Ft,
      useActionState: Ft,
      useOptimistic: Ft,
      useMemoCache: Ft,
      useCacheRefresh: Ft,
    },
    Vp = {
      readContext: fe,
      use: oo,
      useCallback: function (t, n) {
        return ((Se().memoizedState = [t, n === void 0 ? null : n]), t);
      },
      useContext: fe,
      useEffect: yp,
      useImperativeHandle: function (t, n, a) {
        ((a = a != null ? a.concat([t]) : null),
          uo(4194308, 4, Sp.bind(null, n, t), a));
      },
      useLayoutEffect: function (t, n) {
        return uo(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        uo(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var a = Se();
        n = n === void 0 ? null : n;
        var o = t();
        if (ki) {
          Fn(!0);
          try {
            t();
          } finally {
            Fn(!1);
          }
        }
        return ((a.memoizedState = [o, n]), o);
      },
      useReducer: function (t, n, a) {
        var o = Se();
        if (a !== void 0) {
          var c = a(n);
          if (ki) {
            Fn(!0);
            try {
              a(n);
            } finally {
              Fn(!1);
            }
          }
        } else c = n;
        return (
          (o.memoizedState = o.baseState = c),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: c,
          }),
          (o.queue = t),
          (t = t.dispatch = vT.bind(null, yt, t)),
          [o.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = Se();
        return ((t = { current: t }), (n.memoizedState = t));
      },
      useState: function (t) {
        t = ru(t);
        var n = t.queue,
          a = Np.bind(null, yt, n);
        return ((n.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: lu,
      useDeferredValue: function (t, n) {
        var a = Se();
        return cu(a, t, n);
      },
      useTransition: function () {
        var t = ru(!1);
        return (
          (t = Cp.bind(null, yt, t.queue, !0, !1)),
          (Se().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, n, a) {
        var o = yt,
          c = Se();
        if (At) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = n()), Lt === null)) throw Error(r(349));
          (Tt & 124) !== 0 || ep(o, n, a);
        }
        c.memoizedState = a;
        var d = { value: a, getSnapshot: n };
        return (
          (c.queue = d),
          yp(ip.bind(null, o, d, t), [t]),
          (o.flags |= 2048),
          Ea(9, co(), np.bind(null, o, d, a, n), null),
          a
        );
      },
      useId: function () {
        var t = Se(),
          n = Lt.identifierPrefix;
        if (At) {
          var a = Cn,
            o = An;
          ((a = (o & ~(1 << (32 - Ae(o) - 1))).toString(32) + a),
            (n = "«" + n + "R" + a),
            (a = ro++),
            0 < a && (n += "H" + a.toString(32)),
            (n += "»"));
        } else ((a = dT++), (n = "«" + n + "r" + a.toString(32) + "»"));
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: fu,
      useFormState: dp,
      useActionState: dp,
      useOptimistic: function (t) {
        var n = Se();
        n.memoizedState = n.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = a),
          (n = du.bind(null, yt, !0, a)),
          (a.dispatch = n),
          [t, n]
        );
      },
      useMemoCache: iu,
      useCacheRefresh: function () {
        return (Se().memoizedState = yT.bind(null, yt));
      },
    },
    Lp = {
      readContext: fe,
      use: oo,
      useCallback: Tp,
      useContext: fe,
      useEffect: vp,
      useImperativeHandle: wp,
      useInsertionEffect: bp,
      useLayoutEffect: xp,
      useMemo: Ep,
      useReducer: lo,
      useRef: gp,
      useState: function () {
        return lo(Dn);
      },
      useDebugValue: lu,
      useDeferredValue: function (t, n) {
        var a = Qt();
        return Ap(a, Nt.memoizedState, t, n);
      },
      useTransition: function () {
        var t = lo(Dn)[0],
          n = Qt().memoizedState;
        return [typeof t == "boolean" ? t : _s(t), n];
      },
      useSyncExternalStore: tp,
      useId: Dp,
      useHostTransitionStatus: fu,
      useFormState: hp,
      useActionState: hp,
      useOptimistic: function (t, n) {
        var a = Qt();
        return rp(a, Nt, t, n);
      },
      useMemoCache: iu,
      useCacheRefresh: Op,
    },
    bT = {
      readContext: fe,
      use: oo,
      useCallback: Tp,
      useContext: fe,
      useEffect: vp,
      useImperativeHandle: wp,
      useInsertionEffect: bp,
      useLayoutEffect: xp,
      useMemo: Ep,
      useReducer: su,
      useRef: gp,
      useState: function () {
        return su(Dn);
      },
      useDebugValue: lu,
      useDeferredValue: function (t, n) {
        var a = Qt();
        return Nt === null ? cu(a, t, n) : Ap(a, Nt.memoizedState, t, n);
      },
      useTransition: function () {
        var t = su(Dn)[0],
          n = Qt().memoizedState;
        return [typeof t == "boolean" ? t : _s(t), n];
      },
      useSyncExternalStore: tp,
      useId: Dp,
      useHostTransitionStatus: fu,
      useFormState: pp,
      useActionState: pp,
      useOptimistic: function (t, n) {
        var a = Qt();
        return Nt !== null
          ? rp(a, Nt, t, n)
          : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: iu,
      useCacheRefresh: Op,
    },
    Aa = null,
    zs = 0;
  function mo(t) {
    var n = zs;
    return ((zs += 1), Aa === null && (Aa = []), Xm(Aa, t, n));
  }
  function Ps(t, n) {
    ((n = n.props.ref), (t.ref = n !== void 0 ? n : null));
  }
  function po(t, n) {
    throw n.$$typeof === v
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t,
          ),
        ));
  }
  function zp(t) {
    var n = t._init;
    return n(t._payload);
  }
  function Pp(t) {
    function n(_, D) {
      if (t) {
        var z = _.deletions;
        z === null ? ((_.deletions = [D]), (_.flags |= 16)) : z.push(D);
      }
    }
    function a(_, D) {
      if (!t) return null;
      for (; D !== null; ) (n(_, D), (D = D.sibling));
      return null;
    }
    function o(_) {
      for (var D = new Map(); _ !== null; )
        (_.key !== null ? D.set(_.key, _) : D.set(_.index, _), (_ = _.sibling));
      return D;
    }
    function c(_, D) {
      return ((_ = En(_, D)), (_.index = 0), (_.sibling = null), _);
    }
    function d(_, D, z) {
      return (
        (_.index = z),
        t
          ? ((z = _.alternate),
            z !== null
              ? ((z = z.index), z < D ? ((_.flags |= 67108866), D) : z)
              : ((_.flags |= 67108866), D))
          : ((_.flags |= 1048576), D)
      );
    }
    function y(_) {
      return (t && _.alternate === null && (_.flags |= 67108866), _);
    }
    function S(_, D, z, Y) {
      return D === null || D.tag !== 6
        ? ((D = _c(z, _.mode, Y)), (D.return = _), D)
        : ((D = c(D, z)), (D.return = _), D);
    }
    function M(_, D, z, Y) {
      var et = z.type;
      return et === C
        ? q(_, D, z.props.children, Y, z.key)
        : D !== null &&
            (D.elementType === et ||
              (typeof et == "object" &&
                et !== null &&
                et.$$typeof === H &&
                zp(et) === D.type))
          ? ((D = c(D, z.props)), Ps(D, z), (D.return = _), D)
          : ((D = Wr(z.type, z.key, z.props, null, _.mode, Y)),
            Ps(D, z),
            (D.return = _),
            D);
    }
    function B(_, D, z, Y) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== z.containerInfo ||
        D.stateNode.implementation !== z.implementation
        ? ((D = Vc(z, _.mode, Y)), (D.return = _), D)
        : ((D = c(D, z.children || [])), (D.return = _), D);
    }
    function q(_, D, z, Y, et) {
      return D === null || D.tag !== 7
        ? ((D = Ni(z, _.mode, Y, et)), (D.return = _), D)
        : ((D = c(D, z)), (D.return = _), D);
    }
    function K(_, D, z) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ((D = _c("" + D, _.mode, z)), (D.return = _), D);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case x:
            return (
              (z = Wr(D.type, D.key, D.props, null, _.mode, z)),
              Ps(z, D),
              (z.return = _),
              z
            );
          case T:
            return ((D = Vc(D, _.mode, z)), (D.return = _), D);
          case H:
            var Y = D._init;
            return ((D = Y(D._payload)), K(_, D, z));
        }
        if (ft(D) || ct(D))
          return ((D = Ni(D, _.mode, z, null)), (D.return = _), D);
        if (typeof D.then == "function") return K(_, mo(D), z);
        if (D.$$typeof === O) return K(_, to(_, D), z);
        po(_, D);
      }
      return null;
    }
    function k(_, D, z, Y) {
      var et = D !== null ? D.key : null;
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return et !== null ? null : S(_, D, "" + z, Y);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case x:
            return z.key === et ? M(_, D, z, Y) : null;
          case T:
            return z.key === et ? B(_, D, z, Y) : null;
          case H:
            return ((et = z._init), (z = et(z._payload)), k(_, D, z, Y));
        }
        if (ft(z) || ct(z)) return et !== null ? null : q(_, D, z, Y, null);
        if (typeof z.then == "function") return k(_, D, mo(z), Y);
        if (z.$$typeof === O) return k(_, D, to(_, z), Y);
        po(_, z);
      }
      return null;
    }
    function U(_, D, z, Y, et) {
      if (
        (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
      )
        return ((_ = _.get(z) || null), S(D, _, "" + Y, et));
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case x:
            return (
              (_ = _.get(Y.key === null ? z : Y.key) || null),
              M(D, _, Y, et)
            );
          case T:
            return (
              (_ = _.get(Y.key === null ? z : Y.key) || null),
              B(D, _, Y, et)
            );
          case H:
            var bt = Y._init;
            return ((Y = bt(Y._payload)), U(_, D, z, Y, et));
        }
        if (ft(Y) || ct(Y))
          return ((_ = _.get(z) || null), q(D, _, Y, et, null));
        if (typeof Y.then == "function") return U(_, D, z, mo(Y), et);
        if (Y.$$typeof === O) return U(_, D, z, to(D, Y), et);
        po(D, Y);
      }
      return null;
    }
    function mt(_, D, z, Y) {
      for (
        var et = null, bt = null, ot = D, ht = (D = 0), ae = null;
        ot !== null && ht < z.length;
        ht++
      ) {
        ot.index > ht ? ((ae = ot), (ot = null)) : (ae = ot.sibling);
        var Et = k(_, ot, z[ht], Y);
        if (Et === null) {
          ot === null && (ot = ae);
          break;
        }
        (t && ot && Et.alternate === null && n(_, ot),
          (D = d(Et, D, ht)),
          bt === null ? (et = Et) : (bt.sibling = Et),
          (bt = Et),
          (ot = ae));
      }
      if (ht === z.length) return (a(_, ot), At && _i(_, ht), et);
      if (ot === null) {
        for (; ht < z.length; ht++)
          ((ot = K(_, z[ht], Y)),
            ot !== null &&
              ((D = d(ot, D, ht)),
              bt === null ? (et = ot) : (bt.sibling = ot),
              (bt = ot)));
        return (At && _i(_, ht), et);
      }
      for (ot = o(ot); ht < z.length; ht++)
        ((ae = U(ot, _, ht, z[ht], Y)),
          ae !== null &&
            (t &&
              ae.alternate !== null &&
              ot.delete(ae.key === null ? ht : ae.key),
            (D = d(ae, D, ht)),
            bt === null ? (et = ae) : (bt.sibling = ae),
            (bt = ae)));
      return (
        t &&
          ot.forEach(function (mi) {
            return n(_, mi);
          }),
        At && _i(_, ht),
        et
      );
    }
    function ut(_, D, z, Y) {
      if (z == null) throw Error(r(151));
      for (
        var et = null,
          bt = null,
          ot = D,
          ht = (D = 0),
          ae = null,
          Et = z.next();
        ot !== null && !Et.done;
        ht++, Et = z.next()
      ) {
        ot.index > ht ? ((ae = ot), (ot = null)) : (ae = ot.sibling);
        var mi = k(_, ot, Et.value, Y);
        if (mi === null) {
          ot === null && (ot = ae);
          break;
        }
        (t && ot && mi.alternate === null && n(_, ot),
          (D = d(mi, D, ht)),
          bt === null ? (et = mi) : (bt.sibling = mi),
          (bt = mi),
          (ot = ae));
      }
      if (Et.done) return (a(_, ot), At && _i(_, ht), et);
      if (ot === null) {
        for (; !Et.done; ht++, Et = z.next())
          ((Et = K(_, Et.value, Y)),
            Et !== null &&
              ((D = d(Et, D, ht)),
              bt === null ? (et = Et) : (bt.sibling = Et),
              (bt = Et)));
        return (At && _i(_, ht), et);
      }
      for (ot = o(ot); !Et.done; ht++, Et = z.next())
        ((Et = U(ot, _, ht, Et.value, Y)),
          Et !== null &&
            (t &&
              Et.alternate !== null &&
              ot.delete(Et.key === null ? ht : Et.key),
            (D = d(Et, D, ht)),
            bt === null ? (et = Et) : (bt.sibling = Et),
            (bt = Et)));
      return (
        t &&
          ot.forEach(function (xE) {
            return n(_, xE);
          }),
        At && _i(_, ht),
        et
      );
    }
    function _t(_, D, z, Y) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === C &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case x:
            t: {
              for (var et = z.key; D !== null; ) {
                if (D.key === et) {
                  if (((et = z.type), et === C)) {
                    if (D.tag === 7) {
                      (a(_, D.sibling),
                        (Y = c(D, z.props.children)),
                        (Y.return = _),
                        (_ = Y));
                      break t;
                    }
                  } else if (
                    D.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === H &&
                      zp(et) === D.type)
                  ) {
                    (a(_, D.sibling),
                      (Y = c(D, z.props)),
                      Ps(Y, z),
                      (Y.return = _),
                      (_ = Y));
                    break t;
                  }
                  a(_, D);
                  break;
                } else n(_, D);
                D = D.sibling;
              }
              z.type === C
                ? ((Y = Ni(z.props.children, _.mode, Y, z.key)),
                  (Y.return = _),
                  (_ = Y))
                : ((Y = Wr(z.type, z.key, z.props, null, _.mode, Y)),
                  Ps(Y, z),
                  (Y.return = _),
                  (_ = Y));
            }
            return y(_);
          case T:
            t: {
              for (et = z.key; D !== null; ) {
                if (D.key === et)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === z.containerInfo &&
                    D.stateNode.implementation === z.implementation
                  ) {
                    (a(_, D.sibling),
                      (Y = c(D, z.children || [])),
                      (Y.return = _),
                      (_ = Y));
                    break t;
                  } else {
                    a(_, D);
                    break;
                  }
                else n(_, D);
                D = D.sibling;
              }
              ((Y = Vc(z, _.mode, Y)), (Y.return = _), (_ = Y));
            }
            return y(_);
          case H:
            return ((et = z._init), (z = et(z._payload)), _t(_, D, z, Y));
        }
        if (ft(z)) return mt(_, D, z, Y);
        if (ct(z)) {
          if (((et = ct(z)), typeof et != "function")) throw Error(r(150));
          return ((z = et.call(z)), ut(_, D, z, Y));
        }
        if (typeof z.then == "function") return _t(_, D, mo(z), Y);
        if (z.$$typeof === O) return _t(_, D, to(_, z), Y);
        po(_, z);
      }
      return (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
        ? ((z = "" + z),
          D !== null && D.tag === 6
            ? (a(_, D.sibling), (Y = c(D, z)), (Y.return = _), (_ = Y))
            : (a(_, D), (Y = _c(z, _.mode, Y)), (Y.return = _), (_ = Y)),
          y(_))
        : a(_, D);
    }
    return function (_, D, z, Y) {
      try {
        zs = 0;
        var et = _t(_, D, z, Y);
        return ((Aa = null), et);
      } catch (ot) {
        if (ot === Rs || ot === no) throw ot;
        var bt = Re(29, ot, null, _.mode);
        return ((bt.lanes = Y), (bt.return = _), bt);
      }
    };
  }
  var Ca = Pp(!0),
    Bp = Pp(!1),
    qe = G(null),
    cn = null;
  function Jn(t) {
    var n = t.alternate;
    (W($t, $t.current & 1),
      W(qe, t),
      cn === null &&
        (n === null || Sa.current !== null || n.memoizedState !== null) &&
        (cn = t));
  }
  function kp(t) {
    if (t.tag === 22) {
      if ((W($t, $t.current), W(qe, t), cn === null)) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (cn = t);
      }
    } else ti();
  }
  function ti() {
    (W($t, $t.current), W(qe, qe.current));
  }
  function On(t) {
    (I(qe), cn === t && (cn = null), I($t));
  }
  var $t = G(0);
  function go(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || nf(a))
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  function hu(t, n, a, o) {
    ((n = t.memoizedState),
      (a = a(o, n)),
      (a = a == null ? n : g({}, n, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var mu = {
    enqueueSetState: function (t, n, a) {
      t = t._reactInternals;
      var o = Ne(),
        c = Wn(o);
      ((c.payload = n),
        a != null && (c.callback = a),
        (n = In(t, c, o)),
        n !== null && (je(n, t, o), Ds(n, t, o)));
    },
    enqueueReplaceState: function (t, n, a) {
      t = t._reactInternals;
      var o = Ne(),
        c = Wn(o);
      ((c.tag = 1),
        (c.payload = n),
        a != null && (c.callback = a),
        (n = In(t, c, o)),
        n !== null && (je(n, t, o), Ds(n, t, o)));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var a = Ne(),
        o = Wn(a);
      ((o.tag = 2),
        n != null && (o.callback = n),
        (n = In(t, o, a)),
        n !== null && (je(n, t, a), Ds(n, t, a)));
    },
  };
  function Up(t, n, a, o, c, d, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(o, d, y)
        : n.prototype && n.prototype.isPureReactComponent
          ? !bs(a, o) || !bs(c, d)
          : !0
    );
  }
  function Hp(t, n, a, o) {
    ((t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, o),
      n.state !== t && mu.enqueueReplaceState(n, n.state, null));
  }
  function Ui(t, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var o in n) o !== "ref" && (a[o] = n[o]);
    }
    if ((t = t.defaultProps)) {
      a === n && (a = g({}, a));
      for (var c in t) a[c] === void 0 && (a[c] = t[c]);
    }
    return a;
  }
  var yo =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function qp(t) {
    yo(t);
  }
  function Gp(t) {
    console.error(t);
  }
  function Yp(t) {
    yo(t);
  }
  function vo(t, n) {
    try {
      var a = t.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Fp(t, n, a) {
    try {
      var o = t.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function pu(t, n, a) {
    return (
      (a = Wn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        vo(t, n);
      }),
      a
    );
  }
  function Xp(t) {
    return ((t = Wn(t)), (t.tag = 3), t);
  }
  function Kp(t, n, a, o) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = o.value;
      ((t.payload = function () {
        return c(d);
      }),
        (t.callback = function () {
          Fp(n, a, o);
        }));
    }
    var y = a.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        (Fp(n, a, o),
          typeof c != "function" &&
            (ri === null ? (ri = new Set([this])) : ri.add(this)));
        var S = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: S !== null ? S : "",
        });
      });
  }
  function xT(t, n, a, o, c) {
    if (
      ((a.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((n = a.alternate),
        n !== null && Es(n, a, c, !0),
        (a = qe.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              cn === null ? ku() : a.alternate === null && Gt === 0 && (Gt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = c),
              o === Yc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([o])) : n.add(o),
                  Hu(t, o, c)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              o === Yc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue),
                      a === null ? (n.retryQueue = new Set([o])) : a.add(o)),
                  Hu(t, o, c)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return (Hu(t, o, c), ku(), !1);
    }
    if (At)
      return (
        (n = qe.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = c),
            o !== Pc && ((t = Error(r(422), { cause: o })), Ts(Be(t, a))))
          : (o !== Pc && ((n = Error(r(423), { cause: o })), Ts(Be(n, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (c &= -c),
            (t.lanes |= c),
            (o = Be(o, a)),
            (c = pu(t.stateNode, o, c)),
            Kc(t, c),
            Gt !== 4 && (Gt = 2)),
        !1
      );
    var d = Error(r(520), { cause: o });
    if (
      ((d = Be(d, a)),
      Ys === null ? (Ys = [d]) : Ys.push(d),
      Gt !== 4 && (Gt = 2),
      n === null)
    )
      return !0;
    ((o = Be(o, a)), (a = n));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = c & -c),
            (a.lanes |= t),
            (t = pu(a.stateNode, o, t)),
            Kc(a, t),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (d = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (ri === null || !ri.has(d)))))
          )
            return (
              (a.flags |= 65536),
              (c &= -c),
              (a.lanes |= c),
              (c = Xp(c)),
              Kp(c, t, a, o),
              Kc(a, c),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Qp = Error(r(461)),
    ne = !1;
  function se(t, n, a, o) {
    n.child = t === null ? Bp(n, null, a, o) : Ca(n, t.child, a, o);
  }
  function Zp(t, n, a, o, c) {
    a = a.render;
    var d = n.ref;
    if ("ref" in o) {
      var y = {};
      for (var S in o) S !== "ref" && (y[S] = o[S]);
    } else y = o;
    return (
      Pi(n),
      (o = $c(t, n, a, y, d, c)),
      (S = Jc()),
      t !== null && !ne
        ? (tu(t, n, c), Nn(t, n, c))
        : (At && S && Lc(n), (n.flags |= 1), se(t, n, o, c), n.child)
    );
  }
  function Wp(t, n, a, o, c) {
    if (t === null) {
      var d = a.type;
      return typeof d == "function" &&
        !jc(d) &&
        d.defaultProps === void 0 &&
        a.compare === null
        ? ((n.tag = 15), (n.type = d), Ip(t, n, d, o, c))
        : ((t = Wr(a.type, null, o, n, n.mode, c)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((d = t.child), !Tu(t, c))) {
      var y = d.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : bs), a(y, o) && t.ref === n.ref)
      )
        return Nn(t, n, c);
    }
    return (
      (n.flags |= 1),
      (t = En(d, o)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Ip(t, n, a, o, c) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (bs(d, o) && t.ref === n.ref)
        if (((ne = !1), (n.pendingProps = o = d), Tu(t, c)))
          (t.flags & 131072) !== 0 && (ne = !0);
        else return ((n.lanes = t.lanes), Nn(t, n, c));
    }
    return gu(t, n, a, o, c);
  }
  function $p(t, n, a) {
    var o = n.pendingProps,
      c = o.children,
      d = t !== null ? t.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (((o = d !== null ? d.baseLanes | a : a), t !== null)) {
          for (c = n.child = t.child, d = 0; c !== null; )
            ((d = d | c.lanes | c.childLanes), (c = c.sibling));
          n.childLanes = d & ~o;
        } else ((n.childLanes = 0), (n.child = null));
        return Jp(t, n, o, a);
      }
      if ((a & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && eo(n, d !== null ? d.cachePool : null),
          d !== null ? Im(n, d) : Zc(),
          kp(n));
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Jp(t, n, d !== null ? d.baseLanes | a : a, a)
        );
    } else
      d !== null
        ? (eo(n, d.cachePool), Im(n, d), ti(), (n.memoizedState = null))
        : (t !== null && eo(n, null), Zc(), ti());
    return (se(t, n, c, a), n.child);
  }
  function Jp(t, n, a, o) {
    var c = Gc();
    return (
      (c = c === null ? null : { parent: It._currentValue, pool: c }),
      (n.memoizedState = { baseLanes: a, cachePool: c }),
      t !== null && eo(n, null),
      Zc(),
      kp(n),
      t !== null && Es(t, n, o, !0),
      null
    );
  }
  function bo(t, n) {
    var a = n.ref;
    if (a === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (t === null || t.ref !== a) && (n.flags |= 4194816);
    }
  }
  function gu(t, n, a, o, c) {
    return (
      Pi(n),
      (a = $c(t, n, a, o, void 0, c)),
      (o = Jc()),
      t !== null && !ne
        ? (tu(t, n, c), Nn(t, n, c))
        : (At && o && Lc(n), (n.flags |= 1), se(t, n, a, c), n.child)
    );
  }
  function tg(t, n, a, o, c, d) {
    return (
      Pi(n),
      (n.updateQueue = null),
      (a = Jm(n, o, a, c)),
      $m(t),
      (o = Jc()),
      t !== null && !ne
        ? (tu(t, n, d), Nn(t, n, d))
        : (At && o && Lc(n), (n.flags |= 1), se(t, n, a, d), n.child)
    );
  }
  function eg(t, n, a, o, c) {
    if ((Pi(n), n.stateNode === null)) {
      var d = ga,
        y = a.contextType;
      (typeof y == "object" && y !== null && (d = fe(y)),
        (d = new a(o, d)),
        (n.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = mu),
        (n.stateNode = d),
        (d._reactInternals = n),
        (d = n.stateNode),
        (d.props = o),
        (d.state = n.memoizedState),
        (d.refs = {}),
        Fc(n),
        (y = a.contextType),
        (d.context = typeof y == "object" && y !== null ? fe(y) : ga),
        (d.state = n.memoizedState),
        (y = a.getDerivedStateFromProps),
        typeof y == "function" && (hu(n, a, y, o), (d.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((y = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          y !== d.state && mu.enqueueReplaceState(d, d.state, null),
          Ns(n, o, d, c),
          Os(),
          (d.state = n.memoizedState)),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308),
        (o = !0));
    } else if (t === null) {
      d = n.stateNode;
      var S = n.memoizedProps,
        M = Ui(a, S);
      d.props = M;
      var B = d.context,
        q = a.contextType;
      ((y = ga), typeof q == "object" && q !== null && (y = fe(q)));
      var K = a.getDerivedStateFromProps;
      ((q =
        typeof K == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (S = n.pendingProps !== S),
        q ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((S || B !== y) && Hp(n, d, o, y)),
        (Zn = !1));
      var k = n.memoizedState;
      ((d.state = k),
        Ns(n, o, d, c),
        Os(),
        (B = n.memoizedState),
        S || k !== B || Zn
          ? (typeof K == "function" && (hu(n, a, K, o), (B = n.memoizedState)),
            (M = Zn || Up(n, a, M, o, k, B, y))
              ? (q ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = B)),
            (d.props = o),
            (d.state = B),
            (d.context = y),
            (o = M))
          : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            (o = !1)));
    } else {
      ((d = n.stateNode),
        Xc(t, n),
        (y = n.memoizedProps),
        (q = Ui(a, y)),
        (d.props = q),
        (K = n.pendingProps),
        (k = d.context),
        (B = a.contextType),
        (M = ga),
        typeof B == "object" && B !== null && (M = fe(B)),
        (S = a.getDerivedStateFromProps),
        (B =
          typeof S == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((y !== K || k !== M) && Hp(n, d, o, M)),
        (Zn = !1),
        (k = n.memoizedState),
        (d.state = k),
        Ns(n, o, d, c),
        Os());
      var U = n.memoizedState;
      y !== K ||
      k !== U ||
      Zn ||
      (t !== null && t.dependencies !== null && Jr(t.dependencies))
        ? (typeof S == "function" && (hu(n, a, S, o), (U = n.memoizedState)),
          (q =
            Zn ||
            Up(n, a, q, o, k, U, M) ||
            (t !== null && t.dependencies !== null && Jr(t.dependencies)))
            ? (B ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, U, M),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, U, M)),
              typeof d.componentDidUpdate == "function" && (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (y === t.memoizedProps && k === t.memoizedState) ||
                (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && k === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = U)),
          (d.props = o),
          (d.state = U),
          (d.context = M),
          (o = q))
        : (typeof d.componentDidUpdate != "function" ||
            (y === t.memoizedProps && k === t.memoizedState) ||
            (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && k === t.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (d = o),
      bo(t, n),
      (o = (n.flags & 128) !== 0),
      d || o
        ? ((d = n.stateNode),
          (a =
            o && typeof a.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (n.flags |= 1),
          t !== null && o
            ? ((n.child = Ca(n, t.child, null, c)),
              (n.child = Ca(n, null, a, c)))
            : se(t, n, a, c),
          (n.memoizedState = d.state),
          (t = n.child))
        : (t = Nn(t, n, c)),
      t
    );
  }
  function ng(t, n, a, o) {
    return (ws(), (n.flags |= 256), se(t, n, a, o), n.child);
  }
  var yu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function vu(t) {
    return { baseLanes: t, cachePool: Gm() };
  }
  function bu(t, n, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), n && (t |= Ge), t);
  }
  function ig(t, n, a) {
    var o = n.pendingProps,
      c = !1,
      d = (n.flags & 128) !== 0,
      y;
    if (
      ((y = d) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : ($t.current & 2) !== 0),
      y && ((c = !0), (n.flags &= -129)),
      (y = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (At) {
        if ((c ? Jn(n) : ti(), At)) {
          var S = qt,
            M;
          if ((M = S)) {
            t: {
              for (M = S, S = ln; M.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break t;
                }
                if (((M = We(M.nextSibling)), M === null)) {
                  S = null;
                  break t;
                }
              }
              S = M;
            }
            S !== null
              ? ((n.memoizedState = {
                  dehydrated: S,
                  treeContext: ji !== null ? { id: An, overflow: Cn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (M = Re(18, null, null, 0)),
                (M.stateNode = S),
                (M.return = n),
                (n.child = M),
                (me = n),
                (qt = null),
                (M = !0))
              : (M = !1);
          }
          M || Li(n);
        }
        if (
          ((S = n.memoizedState),
          S !== null && ((S = S.dehydrated), S !== null))
        )
          return (nf(S) ? (n.lanes = 32) : (n.lanes = 536870912), null);
        On(n);
      }
      return (
        (S = o.children),
        (o = o.fallback),
        c
          ? (ti(),
            (c = n.mode),
            (S = xo({ mode: "hidden", children: S }, c)),
            (o = Ni(o, c, a, null)),
            (S.return = n),
            (o.return = n),
            (S.sibling = o),
            (n.child = S),
            (c = n.child),
            (c.memoizedState = vu(a)),
            (c.childLanes = bu(t, y, a)),
            (n.memoizedState = yu),
            o)
          : (Jn(n), xu(n, S))
      );
    }
    if (
      ((M = t.memoizedState), M !== null && ((S = M.dehydrated), S !== null))
    ) {
      if (d)
        n.flags & 256
          ? (Jn(n), (n.flags &= -257), (n = Su(t, n, a)))
          : n.memoizedState !== null
            ? (ti(), (n.child = t.child), (n.flags |= 128), (n = null))
            : (ti(),
              (c = o.fallback),
              (S = n.mode),
              (o = xo({ mode: "visible", children: o.children }, S)),
              (c = Ni(c, S, a, null)),
              (c.flags |= 2),
              (o.return = n),
              (c.return = n),
              (o.sibling = c),
              (n.child = o),
              Ca(n, t.child, null, a),
              (o = n.child),
              (o.memoizedState = vu(a)),
              (o.childLanes = bu(t, y, a)),
              (n.memoizedState = yu),
              (n = c));
      else if ((Jn(n), nf(S))) {
        if (((y = S.nextSibling && S.nextSibling.dataset), y)) var B = y.dgst;
        ((y = B),
          (o = Error(r(419))),
          (o.stack = ""),
          (o.digest = y),
          Ts({ value: o, source: null, stack: null }),
          (n = Su(t, n, a)));
      } else if (
        (ne || Es(t, n, a, !1), (y = (a & t.childLanes) !== 0), ne || y)
      ) {
        if (
          ((y = Lt),
          y !== null &&
            ((o = a & -a),
            (o = (o & 42) !== 0 ? 1 : ic(o)),
            (o = (o & (y.suspendedLanes | a)) !== 0 ? 0 : o),
            o !== 0 && o !== M.retryLane))
        )
          throw ((M.retryLane = o), pa(t, o), je(y, t, o), Qp);
        (S.data === "$?" || ku(), (n = Su(t, n, a)));
      } else
        S.data === "$?"
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = M.treeContext),
            (qt = We(S.nextSibling)),
            (me = n),
            (At = !0),
            (Vi = null),
            (ln = !1),
            t !== null &&
              ((Ue[He++] = An),
              (Ue[He++] = Cn),
              (Ue[He++] = ji),
              (An = t.id),
              (Cn = t.overflow),
              (ji = n)),
            (n = xu(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return c
      ? (ti(),
        (c = o.fallback),
        (S = n.mode),
        (M = t.child),
        (B = M.sibling),
        (o = En(M, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = M.subtreeFlags & 65011712),
        B !== null ? (c = En(B, c)) : ((c = Ni(c, S, a, null)), (c.flags |= 2)),
        (c.return = n),
        (o.return = n),
        (o.sibling = c),
        (n.child = o),
        (o = c),
        (c = n.child),
        (S = t.child.memoizedState),
        S === null
          ? (S = vu(a))
          : ((M = S.cachePool),
            M !== null
              ? ((B = It._currentValue),
                (M = M.parent !== B ? { parent: B, pool: B } : M))
              : (M = Gm()),
            (S = { baseLanes: S.baseLanes | a, cachePool: M })),
        (c.memoizedState = S),
        (c.childLanes = bu(t, y, a)),
        (n.memoizedState = yu),
        o)
      : (Jn(n),
        (a = t.child),
        (t = a.sibling),
        (a = En(a, { mode: "visible", children: o.children })),
        (a.return = n),
        (a.sibling = null),
        t !== null &&
          ((y = n.deletions),
          y === null ? ((n.deletions = [t]), (n.flags |= 16)) : y.push(t)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function xu(t, n) {
    return (
      (n = xo({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function xo(t, n) {
    return (
      (t = Re(22, t, null, n)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Su(t, n, a) {
    return (
      Ca(n, t.child, null, a),
      (t = xu(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function ag(t, n, a) {
    t.lanes |= n;
    var o = t.alternate;
    (o !== null && (o.lanes |= n), kc(t.return, n, a));
  }
  function wu(t, n, a, o, c) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: a,
          tailMode: c,
        })
      : ((d.isBackwards = n),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = a),
        (d.tailMode = c));
  }
  function sg(t, n, a) {
    var o = n.pendingProps,
      c = o.revealOrder,
      d = o.tail;
    if ((se(t, n, o.children, a), (o = $t.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (n.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && ag(t, a, n);
          else if (t.tag === 19) ag(t, a, n);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === n) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      o &= 1;
    }
    switch ((W($t, o), c)) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          ((t = a.alternate),
            t !== null && go(t) === null && (c = a),
            (a = a.sibling));
        ((a = c),
          a === null
            ? ((c = n.child), (n.child = null))
            : ((c = a.sibling), (a.sibling = null)),
          wu(n, !1, c, a, d));
        break;
      case "backwards":
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (((t = c.alternate), t !== null && go(t) === null)) {
            n.child = c;
            break;
          }
          ((t = c.sibling), (c.sibling = a), (a = c), (c = t));
        }
        wu(n, !0, a, null, d);
        break;
      case "together":
        wu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Nn(t, n, a) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (si |= n.lanes),
      (a & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((Es(t, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(r(153));
    if (n.child !== null) {
      for (
        t = n.child, a = En(t, t.pendingProps), n.child = a, a.return = n;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (a = a.sibling = En(t, t.pendingProps)),
          (a.return = n));
      a.sibling = null;
    }
    return n.child;
  }
  function Tu(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Jr(t)));
  }
  function ST(t, n, a) {
    switch (n.tag) {
      case 3:
        (Rt(n, n.stateNode.containerInfo),
          Qn(n, It, t.memoizedState.cache),
          ws());
        break;
      case 27:
      case 5:
        Gn(n);
        break;
      case 4:
        Rt(n, n.stateNode.containerInfo);
        break;
      case 10:
        Qn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Jn(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
              ? ig(t, n, a)
              : (Jn(n), (t = Nn(t, n, a)), t !== null ? t.sibling : null);
        Jn(n);
        break;
      case 19:
        var c = (t.flags & 128) !== 0;
        if (
          ((o = (a & n.childLanes) !== 0),
          o || (Es(t, n, a, !1), (o = (a & n.childLanes) !== 0)),
          c)
        ) {
          if (o) return sg(t, n, a);
          n.flags |= 128;
        }
        if (
          ((c = n.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          W($t, $t.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((n.lanes = 0), $p(t, n, a));
      case 24:
        Qn(n, It, t.memoizedState.cache);
    }
    return Nn(t, n, a);
  }
  function rg(t, n, a) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) ne = !0;
      else {
        if (!Tu(t, a) && (n.flags & 128) === 0) return ((ne = !1), ST(t, n, a));
        ne = (t.flags & 131072) !== 0;
      }
    else ((ne = !1), At && (n.flags & 1048576) !== 0 && zm(n, $r, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          t = n.pendingProps;
          var o = n.elementType,
            c = o._init;
          if (((o = c(o._payload)), (n.type = o), typeof o == "function"))
            jc(o)
              ? ((t = Ui(o, t)), (n.tag = 1), (n = eg(null, n, o, t, a)))
              : ((n.tag = 0), (n = gu(null, n, o, t, a)));
          else {
            if (o != null) {
              if (((c = o.$$typeof), c === P)) {
                ((n.tag = 11), (n = Zp(null, n, o, t, a)));
                break t;
              } else if (c === Z) {
                ((n.tag = 14), (n = Wp(null, n, o, t, a)));
                break t;
              }
            }
            throw ((n = $(o) || o), Error(r(306, n, "")));
          }
        }
        return n;
      case 0:
        return gu(t, n, n.type, n.pendingProps, a);
      case 1:
        return ((o = n.type), (c = Ui(o, n.pendingProps)), eg(t, n, o, c, a));
      case 3:
        t: {
          if ((Rt(n, n.stateNode.containerInfo), t === null))
            throw Error(r(387));
          o = n.pendingProps;
          var d = n.memoizedState;
          ((c = d.element), Xc(t, n), Ns(n, o, null, a));
          var y = n.memoizedState;
          if (
            ((o = y.cache),
            Qn(n, It, o),
            o !== d.cache && Uc(n, [It], a, !0),
            Os(),
            (o = y.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: o, isDehydrated: !1, cache: y.cache }),
              (n.updateQueue.baseState = d),
              (n.memoizedState = d),
              n.flags & 256)
            ) {
              n = ng(t, n, o, a);
              break t;
            } else if (o !== c) {
              ((c = Be(Error(r(424)), n)), Ts(c), (n = ng(t, n, o, a)));
              break t;
            } else
              for (
                t = n.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  qt = We(t.firstChild),
                  me = n,
                  At = !0,
                  Vi = null,
                  ln = !0,
                  a = Bp(n, null, o, a),
                  n.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((ws(), o === c)) {
              n = Nn(t, n, a);
              break t;
            }
            se(t, n, o, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          bo(t, n),
          t === null
            ? (a = uy(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : At ||
                ((a = n.type),
                (t = n.pendingProps),
                (o = Vo(st.current).createElement(a)),
                (o[ue] = n),
                (o[be] = t),
                oe(o, a, t),
                ee(o),
                (n.stateNode = o))
            : (n.memoizedState = uy(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Gn(n),
          t === null &&
            At &&
            ((o = n.stateNode = oy(n.type, n.pendingProps, st.current)),
            (me = n),
            (ln = !0),
            (c = qt),
            ci(n.type) ? ((af = c), (qt = We(o.firstChild))) : (qt = c)),
          se(t, n, n.pendingProps.children, a),
          bo(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            At &&
            ((c = o = qt) &&
              ((o = ZT(o, n.type, n.pendingProps, ln)),
              o !== null
                ? ((n.stateNode = o),
                  (me = n),
                  (qt = We(o.firstChild)),
                  (ln = !1),
                  (c = !0))
                : (c = !1)),
            c || Li(n)),
          Gn(n),
          (c = n.type),
          (d = n.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (o = d.children),
          Ju(c, d) ? (o = null) : y !== null && Ju(c, y) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((c = $c(t, n, hT, null, null, a)), (Js._currentValue = c)),
          bo(t, n),
          se(t, n, o, a),
          n.child
        );
      case 6:
        return (
          t === null &&
            At &&
            ((t = a = qt) &&
              ((a = WT(a, n.pendingProps, ln)),
              a !== null
                ? ((n.stateNode = a), (me = n), (qt = null), (t = !0))
                : (t = !1)),
            t || Li(n)),
          null
        );
      case 13:
        return ig(t, n, a);
      case 4:
        return (
          Rt(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          t === null ? (n.child = Ca(n, null, o, a)) : se(t, n, o, a),
          n.child
        );
      case 11:
        return Zp(t, n, n.type, n.pendingProps, a);
      case 7:
        return (se(t, n, n.pendingProps, a), n.child);
      case 8:
        return (se(t, n, n.pendingProps.children, a), n.child);
      case 12:
        return (se(t, n, n.pendingProps.children, a), n.child);
      case 10:
        return (
          (o = n.pendingProps),
          Qn(n, n.type, o.value),
          se(t, n, o.children, a),
          n.child
        );
      case 9:
        return (
          (c = n.type._context),
          (o = n.pendingProps.children),
          Pi(n),
          (c = fe(c)),
          (o = o(c)),
          (n.flags |= 1),
          se(t, n, o, a),
          n.child
        );
      case 14:
        return Wp(t, n, n.type, n.pendingProps, a);
      case 15:
        return Ip(t, n, n.type, n.pendingProps, a);
      case 19:
        return sg(t, n, a);
      case 31:
        return (
          (o = n.pendingProps),
          (a = n.mode),
          (o = { mode: o.mode, children: o.children }),
          t === null
            ? ((a = xo(o, a)),
              (a.ref = n.ref),
              (n.child = a),
              (a.return = n),
              (n = a))
            : ((a = En(t.child, o)),
              (a.ref = n.ref),
              (n.child = a),
              (a.return = n),
              (n = a)),
          n
        );
      case 22:
        return $p(t, n, a);
      case 24:
        return (
          Pi(n),
          (o = fe(It)),
          t === null
            ? ((c = Gc()),
              c === null &&
                ((c = Lt),
                (d = Hc()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= a),
                (c = d)),
              (n.memoizedState = { parent: o, cache: c }),
              Fc(n),
              Qn(n, It, c))
            : ((t.lanes & a) !== 0 && (Xc(t, n), Ns(n, null, null, a), Os()),
              (c = t.memoizedState),
              (d = n.memoizedState),
              c.parent !== o
                ? ((c = { parent: o, cache: o }),
                  (n.memoizedState = c),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = c),
                  Qn(n, It, o))
                : ((o = d.cache),
                  Qn(n, It, o),
                  o !== c.cache && Uc(n, [It], a, !0))),
          se(t, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(r(156, n.tag));
  }
  function jn(t) {
    t.flags |= 4;
  }
  function og(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !py(n))) {
      if (
        ((n = qe.current),
        n !== null &&
          ((Tt & 4194048) === Tt
            ? cn !== null
            : ((Tt & 62914560) !== Tt && (Tt & 536870912) === 0) || n !== cn))
      )
        throw ((Ms = Yc), Ym);
      t.flags |= 8192;
    }
  }
  function So(t, n) {
    (n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? kh() : 536870912), (t.lanes |= n), (Oa |= n)));
  }
  function Bs(t, n) {
    if (!At)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var o = null; a !== null; )
            (a.alternate !== null && (o = a), (a = a.sibling));
          o === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Ut(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      o = 0;
    if (n)
      for (var c = t.child; c !== null; )
        ((a |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 65011712),
          (o |= c.flags & 65011712),
          (c.return = t),
          (c = c.sibling));
    else
      for (c = t.child; c !== null; )
        ((a |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = t),
          (c = c.sibling));
    return ((t.subtreeFlags |= o), (t.childLanes = a), n);
  }
  function wT(t, n, a) {
    var o = n.pendingProps;
    switch ((zc(n), n.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ut(n), null);
      case 1:
        return (Ut(n), null);
      case 3:
        return (
          (a = n.stateNode),
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          Mn(It),
          Mt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ss(n)
              ? jn(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), km())),
          Ut(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          t === null
            ? (jn(n),
              a !== null ? (Ut(n), og(n, a)) : (Ut(n), (n.flags &= -16777217)))
            : a
              ? a !== t.memoizedState
                ? (jn(n), Ut(n), og(n, a))
                : (Ut(n), (n.flags &= -16777217))
              : (t.memoizedProps !== o && jn(n), Ut(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        (Ke(n), (a = st.current));
        var c = n.type;
        if (t !== null && n.stateNode != null) t.memoizedProps !== o && jn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(r(166));
            return (Ut(n), null);
          }
          ((t = rt.current),
            Ss(n) ? Pm(n) : ((t = oy(c, o, a)), (n.stateNode = t), jn(n)));
        }
        return (Ut(n), null);
      case 5:
        if ((Ke(n), (a = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== o && jn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(r(166));
            return (Ut(n), null);
          }
          if (((t = rt.current), Ss(n))) Pm(n);
          else {
            switch (((c = Vo(st.current)), t)) {
              case 1:
                t = c.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                t = c.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    t = c.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    t = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    ((t = c.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof o.is == "string"
                        ? c.createElement("select", { is: o.is })
                        : c.createElement("select")),
                      o.multiple
                        ? (t.multiple = !0)
                        : o.size && (t.size = o.size));
                    break;
                  default:
                    t =
                      typeof o.is == "string"
                        ? c.createElement(a, { is: o.is })
                        : c.createElement(a);
                }
            }
            ((t[ue] = n), (t[be] = o));
            t: for (c = n.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) t.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === n) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === n) break t;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            n.stateNode = t;
            t: switch ((oe(t, a, o), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!o.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && jn(n);
          }
        }
        return (Ut(n), (n.flags &= -16777217), null);
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== o && jn(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(r(166));
          if (((t = st.current), Ss(n))) {
            if (
              ((t = n.stateNode),
              (a = n.memoizedProps),
              (o = null),
              (c = me),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            ((t[ue] = n),
              (t = !!(
                t.nodeValue === a ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                ty(t.nodeValue, a)
              )),
              t || Li(n));
          } else
            ((t = Vo(t).createTextNode(o)), (t[ue] = n), (n.stateNode = t));
        }
        return (Ut(n), null);
      case 13:
        if (
          ((o = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((c = Ss(n)), o !== null && o.dehydrated !== null)) {
            if (t === null) {
              if (!c) throw Error(r(318));
              if (
                ((c = n.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(r(317));
              c[ue] = n;
            } else
              (ws(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (Ut(n), (c = !1));
          } else
            ((c = km()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = c),
              (c = !0));
          if (!c) return n.flags & 256 ? (On(n), n) : (On(n), null);
        }
        if ((On(n), (n.flags & 128) !== 0)) return ((n.lanes = a), n);
        if (
          ((a = o !== null), (t = t !== null && t.memoizedState !== null), a)
        ) {
          ((o = n.child),
            (c = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (c = o.alternate.memoizedState.cachePool.pool));
          var d = null;
          (o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (d = o.memoizedState.cachePool.pool),
            d !== c && (o.flags |= 2048));
        }
        return (
          a !== t && a && (n.child.flags |= 8192),
          So(n, n.updateQueue),
          Ut(n),
          null
        );
      case 4:
        return (Mt(), t === null && Qu(n.stateNode.containerInfo), Ut(n), null);
      case 10:
        return (Mn(n.type), Ut(n), null);
      case 19:
        if ((I($t), (c = n.memoizedState), c === null)) return (Ut(n), null);
        if (((o = (n.flags & 128) !== 0), (d = c.rendering), d === null))
          if (o) Bs(c, !1);
          else {
            if (Gt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((d = go(t)), d !== null)) {
                  for (
                    n.flags |= 128,
                      Bs(c, !1),
                      t = d.updateQueue,
                      n.updateQueue = t,
                      So(n, t),
                      n.subtreeFlags = 0,
                      t = a,
                      a = n.child;
                    a !== null;
                  )
                    (Lm(a, t), (a = a.sibling));
                  return (W($t, ($t.current & 1) | 2), n.child);
                }
                t = t.sibling;
              }
            c.tail !== null &&
              on() > Eo &&
              ((n.flags |= 128), (o = !0), Bs(c, !1), (n.lanes = 4194304));
          }
        else {
          if (!o)
            if (((t = go(d)), t !== null)) {
              if (
                ((n.flags |= 128),
                (o = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                So(n, t),
                Bs(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !d.alternate &&
                  !At)
              )
                return (Ut(n), null);
            } else
              2 * on() - c.renderingStartTime > Eo &&
                a !== 536870912 &&
                ((n.flags |= 128), (o = !0), Bs(c, !1), (n.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = n.child), (n.child = d))
            : ((t = c.last),
              t !== null ? (t.sibling = d) : (n.child = d),
              (c.last = d));
        }
        return c.tail !== null
          ? ((n = c.tail),
            (c.rendering = n),
            (c.tail = n.sibling),
            (c.renderingStartTime = on()),
            (n.sibling = null),
            (t = $t.current),
            W($t, o ? (t & 1) | 2 : t & 1),
            n)
          : (Ut(n), null);
      case 22:
      case 23:
        return (
          On(n),
          Wc(),
          (o = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (Ut(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Ut(n),
          (a = n.updateQueue),
          a !== null && So(n, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== a && (n.flags |= 2048),
          t !== null && I(Bi),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          Mn(It),
          Ut(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, n.tag));
  }
  function TT(t, n) {
    switch ((zc(n), n.tag)) {
      case 1:
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Mn(It),
          Mt(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ke(n), null);
      case 13:
        if (
          (On(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(r(340));
          ws();
        }
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return (I($t), null);
      case 4:
        return (Mt(), null);
      case 10:
        return (Mn(n.type), null);
      case 22:
      case 23:
        return (
          On(n),
          Wc(),
          t !== null && I(Bi),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return (Mn(It), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function lg(t, n) {
    switch ((zc(n), n.tag)) {
      case 3:
        (Mn(It), Mt());
        break;
      case 26:
      case 27:
      case 5:
        Ke(n);
        break;
      case 4:
        Mt();
        break;
      case 13:
        On(n);
        break;
      case 19:
        I($t);
        break;
      case 10:
        Mn(n.type);
        break;
      case 22:
      case 23:
        (On(n), Wc(), t !== null && I(Bi));
        break;
      case 24:
        Mn(It);
    }
  }
  function ks(t, n) {
    try {
      var a = n.updateQueue,
        o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        a = c;
        do {
          if ((a.tag & t) === t) {
            o = void 0;
            var d = a.create,
              y = a.inst;
            ((o = d()), (y.destroy = o));
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (S) {
      Vt(n, n.return, S);
    }
  }
  function ei(t, n, a) {
    try {
      var o = n.updateQueue,
        c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        o = d;
        do {
          if ((o.tag & t) === t) {
            var y = o.inst,
              S = y.destroy;
            if (S !== void 0) {
              ((y.destroy = void 0), (c = n));
              var M = a,
                B = S;
              try {
                B();
              } catch (q) {
                Vt(c, M, q);
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (q) {
      Vt(n, n.return, q);
    }
  }
  function cg(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var a = t.stateNode;
      try {
        Wm(n, a);
      } catch (o) {
        Vt(t, t.return, o);
      }
    }
  }
  function ug(t, n, a) {
    ((a.props = Ui(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (o) {
      Vt(t, n, o);
    }
  }
  function Us(t, n) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(o)) : (a.current = o);
      }
    } catch (c) {
      Vt(t, n, c);
    }
  }
  function un(t, n) {
    var a = t.ref,
      o = t.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          Vt(t, n, c);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          Vt(t, n, c);
        }
      else a.current = null;
  }
  function fg(t) {
    var n = t.type,
      a = t.memoizedProps,
      o = t.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break t;
        case "img":
          a.src ? (o.src = a.src) : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (c) {
      Vt(t, t.return, c);
    }
  }
  function Eu(t, n, a) {
    try {
      var o = t.stateNode;
      (YT(o, t.type, a, n), (o[be] = n));
    } catch (c) {
      Vt(t, t.return, c);
    }
  }
  function dg(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ci(t.type)) ||
      t.tag === 4
    );
  }
  function Au(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || dg(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && ci(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Cu(t, n, a) {
    var o = t.tag;
    if (o === 5 || o === 6)
      ((t = t.stateNode),
        n
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, n)
          : ((n =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            n.appendChild(t),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = _o)));
    else if (
      o !== 4 &&
      (o === 27 && ci(t.type) && ((a = t.stateNode), (n = null)),
      (t = t.child),
      t !== null)
    )
      for (Cu(t, n, a), t = t.sibling; t !== null; )
        (Cu(t, n, a), (t = t.sibling));
  }
  function wo(t, n, a) {
    var o = t.tag;
    if (o === 5 || o === 6)
      ((t = t.stateNode), n ? a.insertBefore(t, n) : a.appendChild(t));
    else if (
      o !== 4 &&
      (o === 27 && ci(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (wo(t, n, a), t = t.sibling; t !== null; )
        (wo(t, n, a), (t = t.sibling));
  }
  function hg(t) {
    var n = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var o = t.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      (oe(n, o, a), (n[ue] = t), (n[be] = a));
    } catch (d) {
      Vt(t, t.return, d);
    }
  }
  var _n = !1,
    Xt = !1,
    Ru = !1,
    mg = typeof WeakSet == "function" ? WeakSet : Set,
    ie = null;
  function ET(t, n) {
    if (((t = t.containerInfo), (Iu = Uo), (t = Am(t)), Ac(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var c = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              (a.nodeType, d.nodeType);
            } catch {
              a = null;
              break t;
            }
            var y = 0,
              S = -1,
              M = -1,
              B = 0,
              q = 0,
              K = t,
              k = null;
            e: for (;;) {
              for (
                var U;
                K !== a || (c !== 0 && K.nodeType !== 3) || (S = y + c),
                  K !== d || (o !== 0 && K.nodeType !== 3) || (M = y + o),
                  K.nodeType === 3 && (y += K.nodeValue.length),
                  (U = K.firstChild) !== null;
              )
                ((k = K), (K = U));
              for (;;) {
                if (K === t) break e;
                if (
                  (k === a && ++B === c && (S = y),
                  k === d && ++q === o && (M = y),
                  (U = K.nextSibling) !== null)
                )
                  break;
                ((K = k), (k = K.parentNode));
              }
              K = U;
            }
            a = S === -1 || M === -1 ? null : { start: S, end: M };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      $u = { focusedElem: t, selectionRange: a }, Uo = !1, ie = n;
      ie !== null;
    )
      if (
        ((n = ie), (t = n.child), (n.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = n), (ie = t));
      else
        for (; ie !== null; ) {
          switch (((n = ie), (d = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && d !== null) {
                ((t = void 0),
                  (a = n),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (o = a.stateNode));
                try {
                  var mt = Ui(a.type, c, a.elementType === a.type);
                  ((t = o.getSnapshotBeforeUpdate(mt, d)),
                    (o.__reactInternalSnapshotBeforeUpdate = t));
                } catch (ut) {
                  Vt(a, a.return, ut);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  ef(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ef(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = n.sibling), t !== null)) {
            ((t.return = n.return), (ie = t));
            break;
          }
          ie = n.return;
        }
  }
  function pg(t, n, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (ni(t, a), o & 4 && ks(5, a));
        break;
      case 1:
        if ((ni(t, a), o & 4))
          if (((t = a.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (y) {
              Vt(a, a.return, y);
            }
          else {
            var c = Ui(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(c, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Vt(a, a.return, y);
            }
          }
        (o & 64 && cg(a), o & 512 && Us(a, a.return));
        break;
      case 3:
        if ((ni(t, a), o & 64 && ((t = a.updateQueue), t !== null))) {
          if (((n = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
          try {
            Wm(t, n);
          } catch (y) {
            Vt(a, a.return, y);
          }
        }
        break;
      case 27:
        n === null && o & 4 && hg(a);
      case 26:
      case 5:
        (ni(t, a), n === null && o & 4 && fg(a), o & 512 && Us(a, a.return));
        break;
      case 12:
        ni(t, a);
        break;
      case 13:
        (ni(t, a),
          o & 4 && vg(t, a),
          o & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = _T.bind(null, a)), IT(t, a)))));
        break;
      case 22:
        if (((o = a.memoizedState !== null || _n), !o)) {
          ((n = (n !== null && n.memoizedState !== null) || Xt), (c = _n));
          var d = Xt;
          ((_n = o),
            (Xt = n) && !d ? ii(t, a, (a.subtreeFlags & 8772) !== 0) : ni(t, a),
            (_n = c),
            (Xt = d));
        }
        break;
      case 30:
        break;
      default:
        ni(t, a);
    }
  }
  function gg(t) {
    var n = t.alternate;
    (n !== null && ((t.alternate = null), gg(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && rc(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Bt = null,
    we = !1;
  function Vn(t, n, a) {
    for (a = a.child; a !== null; ) (yg(t, n, a), (a = a.sibling));
  }
  function yg(t, n, a) {
    if (Ee && typeof Ee.onCommitFiberUnmount == "function")
      try {
        Ee.onCommitFiberUnmount(os, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Xt || un(a, n),
          Vn(t, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Xt || un(a, n);
        var o = Bt,
          c = we;
        (ci(a.type) && ((Bt = a.stateNode), (we = !1)),
          Vn(t, n, a),
          Zs(a.stateNode),
          (Bt = o),
          (we = c));
        break;
      case 5:
        Xt || un(a, n);
      case 6:
        if (
          ((o = Bt),
          (c = we),
          (Bt = null),
          Vn(t, n, a),
          (Bt = o),
          (we = c),
          Bt !== null)
        )
          if (we)
            try {
              (Bt.nodeType === 9
                ? Bt.body
                : Bt.nodeName === "HTML"
                  ? Bt.ownerDocument.body
                  : Bt
              ).removeChild(a.stateNode);
            } catch (d) {
              Vt(a, n, d);
            }
          else
            try {
              Bt.removeChild(a.stateNode);
            } catch (d) {
              Vt(a, n, d);
            }
        break;
      case 18:
        Bt !== null &&
          (we
            ? ((t = Bt),
              sy(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                a.stateNode,
              ),
              ir(t))
            : sy(Bt, a.stateNode));
        break;
      case 4:
        ((o = Bt),
          (c = we),
          (Bt = a.stateNode.containerInfo),
          (we = !0),
          Vn(t, n, a),
          (Bt = o),
          (we = c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Xt || ei(2, a, n), Xt || ei(4, a, n), Vn(t, n, a));
        break;
      case 1:
        (Xt ||
          (un(a, n),
          (o = a.stateNode),
          typeof o.componentWillUnmount == "function" && ug(a, n, o)),
          Vn(t, n, a));
        break;
      case 21:
        Vn(t, n, a);
        break;
      case 22:
        ((Xt = (o = Xt) || a.memoizedState !== null), Vn(t, n, a), (Xt = o));
        break;
      default:
        Vn(t, n, a);
    }
  }
  function vg(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ir(t);
      } catch (a) {
        Vt(n, n.return, a);
      }
  }
  function AT(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var n = t.stateNode;
        return (n === null && (n = t.stateNode = new mg()), n);
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new mg()),
          n
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Mu(t, n) {
    var a = AT(t);
    n.forEach(function (o) {
      var c = VT.bind(null, t, o);
      a.has(o) || (a.add(o), o.then(c, c));
    });
  }
  function Me(t, n) {
    var a = n.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var c = a[o],
          d = t,
          y = n,
          S = y;
        t: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (ci(S.type)) {
                ((Bt = S.stateNode), (we = !1));
                break t;
              }
              break;
            case 5:
              ((Bt = S.stateNode), (we = !1));
              break t;
            case 3:
            case 4:
              ((Bt = S.stateNode.containerInfo), (we = !0));
              break t;
          }
          S = S.return;
        }
        if (Bt === null) throw Error(r(160));
        (yg(d, y, c),
          (Bt = null),
          (we = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null));
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) (bg(n, t), (n = n.sibling));
  }
  var Ze = null;
  function bg(t, n) {
    var a = t.alternate,
      o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Me(n, t),
          De(t),
          o & 4 && (ei(3, t, t.return), ks(3, t), ei(5, t, t.return)));
        break;
      case 1:
        (Me(n, t),
          De(t),
          o & 512 && (Xt || a === null || un(a, a.return)),
          o & 64 &&
            _n &&
            ((t = t.updateQueue),
            t !== null &&
              ((o = t.callbacks),
              o !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? o : a.concat(o))))));
        break;
      case 26:
        var c = Ze;
        if (
          (Me(n, t),
          De(t),
          o & 512 && (Xt || a === null || un(a, a.return)),
          o & 4)
        ) {
          var d = a !== null ? a.memoizedState : null;
          if (((o = t.memoizedState), a === null))
            if (o === null)
              if (t.stateNode === null) {
                t: {
                  ((o = t.type),
                    (a = t.memoizedProps),
                    (c = c.ownerDocument || c));
                  e: switch (o) {
                    case "title":
                      ((d = c.getElementsByTagName("title")[0]),
                        (!d ||
                          d[us] ||
                          d[ue] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = c.createElement(o)),
                          c.head.insertBefore(
                            d,
                            c.querySelector("head > title"),
                          )),
                        oe(d, o, a),
                        (d[ue] = t),
                        ee(d),
                        (o = d));
                      break t;
                    case "link":
                      var y = hy("link", "href", c).get(o + (a.href || ""));
                      if (y) {
                        for (var S = 0; S < y.length; S++)
                          if (
                            ((d = y[S]),
                            d.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              d.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              d.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              d.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            y.splice(S, 1);
                            break e;
                          }
                      }
                      ((d = c.createElement(o)),
                        oe(d, o, a),
                        c.head.appendChild(d));
                      break;
                    case "meta":
                      if (
                        (y = hy("meta", "content", c).get(
                          o + (a.content || ""),
                        ))
                      ) {
                        for (S = 0; S < y.length; S++)
                          if (
                            ((d = y[S]),
                            d.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              d.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              d.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              d.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            y.splice(S, 1);
                            break e;
                          }
                      }
                      ((d = c.createElement(o)),
                        oe(d, o, a),
                        c.head.appendChild(d));
                      break;
                    default:
                      throw Error(r(468, o));
                  }
                  ((d[ue] = t), ee(d), (o = d));
                }
                t.stateNode = o;
              } else my(c, t.type, t.stateNode);
            else t.stateNode = dy(c, o, t.memoizedProps);
          else
            d !== o
              ? (d === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : d.count--,
                o === null
                  ? my(c, t.type, t.stateNode)
                  : dy(c, o, t.memoizedProps))
              : o === null &&
                t.stateNode !== null &&
                Eu(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Me(n, t),
          De(t),
          o & 512 && (Xt || a === null || un(a, a.return)),
          a !== null && o & 4 && Eu(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Me(n, t),
          De(t),
          o & 512 && (Xt || a === null || un(a, a.return)),
          t.flags & 32)
        ) {
          c = t.stateNode;
          try {
            la(c, "");
          } catch (U) {
            Vt(t, t.return, U);
          }
        }
        (o & 4 &&
          t.stateNode != null &&
          ((c = t.memoizedProps), Eu(t, c, a !== null ? a.memoizedProps : c)),
          o & 1024 && (Ru = !0));
        break;
      case 6:
        if ((Me(n, t), De(t), o & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((o = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = o;
          } catch (U) {
            Vt(t, t.return, U);
          }
        }
        break;
      case 3:
        if (
          ((Po = null),
          (c = Ze),
          (Ze = Lo(n.containerInfo)),
          Me(n, t),
          (Ze = c),
          De(t),
          o & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ir(n.containerInfo);
          } catch (U) {
            Vt(t, t.return, U);
          }
        Ru && ((Ru = !1), xg(t));
        break;
      case 4:
        ((o = Ze),
          (Ze = Lo(t.stateNode.containerInfo)),
          Me(n, t),
          De(t),
          (Ze = o));
        break;
      case 12:
        (Me(n, t), De(t));
        break;
      case 13:
        (Me(n, t),
          De(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Vu = on()),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), Mu(t, o))));
        break;
      case 22:
        c = t.memoizedState !== null;
        var M = a !== null && a.memoizedState !== null,
          B = _n,
          q = Xt;
        if (
          ((_n = B || c),
          (Xt = q || M),
          Me(n, t),
          (Xt = q),
          (_n = B),
          De(t),
          o & 8192)
        )
          t: for (
            n = t.stateNode,
              n._visibility = c ? n._visibility & -2 : n._visibility | 1,
              c && (a === null || M || _n || Xt || Hi(t)),
              a = null,
              n = t;
            ;
          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                M = a = n;
                try {
                  if (((d = M.stateNode), c))
                    ((y = d.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none"));
                  else {
                    S = M.stateNode;
                    var K = M.memoizedProps.style,
                      k =
                        K != null && K.hasOwnProperty("display")
                          ? K.display
                          : null;
                    S.style.display =
                      k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (U) {
                  Vt(M, M.return, U);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                M = n;
                try {
                  M.stateNode.nodeValue = c ? "" : M.memoizedProps;
                } catch (U) {
                  Vt(M, M.return, U);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === t) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break t;
              (a === n && (a = null), (n = n.return));
            }
            (a === n && (a = null),
              (n.sibling.return = n.return),
              (n = n.sibling));
          }
        o & 4 &&
          ((o = t.updateQueue),
          o !== null &&
            ((a = o.retryQueue),
            a !== null && ((o.retryQueue = null), Mu(t, a))));
        break;
      case 19:
        (Me(n, t),
          De(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), Mu(t, o))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Me(n, t), De(t));
    }
  }
  function De(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var a, o = t.return; o !== null; ) {
          if (dg(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode,
              d = Au(t);
            wo(t, d, c);
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (la(y, ""), (a.flags &= -33));
            var S = Au(t);
            wo(t, S, y);
            break;
          case 3:
          case 4:
            var M = a.stateNode.containerInfo,
              B = Au(t);
            Cu(t, B, M);
            break;
          default:
            throw Error(r(161));
        }
      } catch (q) {
        Vt(t, t.return, q);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function xg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        (xg(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function ni(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) (pg(t, n.alternate, n), (n = n.sibling));
  }
  function Hi(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ei(4, n, n.return), Hi(n));
          break;
        case 1:
          un(n, n.return);
          var a = n.stateNode;
          (typeof a.componentWillUnmount == "function" && ug(n, n.return, a),
            Hi(n));
          break;
        case 27:
          Zs(n.stateNode);
        case 26:
        case 5:
          (un(n, n.return), Hi(n));
          break;
        case 22:
          n.memoizedState === null && Hi(n);
          break;
        case 30:
          Hi(n);
          break;
        default:
          Hi(n);
      }
      t = t.sibling;
    }
  }
  function ii(t, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        c = t,
        d = n,
        y = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (ii(c, d, a), ks(4, d));
          break;
        case 1:
          if (
            (ii(c, d, a),
            (o = d),
            (c = o.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (B) {
              Vt(o, o.return, B);
            }
          if (((o = d), (c = o.updateQueue), c !== null)) {
            var S = o.stateNode;
            try {
              var M = c.shared.hiddenCallbacks;
              if (M !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < M.length; c++)
                  Zm(M[c], S);
            } catch (B) {
              Vt(o, o.return, B);
            }
          }
          (a && y & 64 && cg(d), Us(d, d.return));
          break;
        case 27:
          hg(d);
        case 26:
        case 5:
          (ii(c, d, a), a && o === null && y & 4 && fg(d), Us(d, d.return));
          break;
        case 12:
          ii(c, d, a);
          break;
        case 13:
          (ii(c, d, a), a && y & 4 && vg(c, d));
          break;
        case 22:
          (d.memoizedState === null && ii(c, d, a), Us(d, d.return));
          break;
        case 30:
          break;
        default:
          ii(c, d, a);
      }
      n = n.sibling;
    }
  }
  function Du(t, n) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && As(a)));
  }
  function Ou(t, n) {
    ((t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && As(t)));
  }
  function fn(t, n, a, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (Sg(t, n, a, o), (n = n.sibling));
  }
  function Sg(t, n, a, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (fn(t, n, a, o), c & 2048 && ks(9, n));
        break;
      case 1:
        fn(t, n, a, o);
        break;
      case 3:
        (fn(t, n, a, o),
          c & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && As(t))));
        break;
      case 12:
        if (c & 2048) {
          (fn(t, n, a, o), (t = n.stateNode));
          try {
            var d = n.memoizedProps,
              y = d.id,
              S = d.onPostCommit;
            typeof S == "function" &&
              S(
                y,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (M) {
            Vt(n, n.return, M);
          }
        } else fn(t, n, a, o);
        break;
      case 13:
        fn(t, n, a, o);
        break;
      case 23:
        break;
      case 22:
        ((d = n.stateNode),
          (y = n.alternate),
          n.memoizedState !== null
            ? d._visibility & 2
              ? fn(t, n, a, o)
              : Hs(t, n)
            : d._visibility & 2
              ? fn(t, n, a, o)
              : ((d._visibility |= 2),
                Ra(t, n, a, o, (n.subtreeFlags & 10256) !== 0)),
          c & 2048 && Du(y, n));
        break;
      case 24:
        (fn(t, n, a, o), c & 2048 && Ou(n.alternate, n));
        break;
      default:
        fn(t, n, a, o);
    }
  }
  function Ra(t, n, a, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var d = t,
        y = n,
        S = a,
        M = o,
        B = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (Ra(d, y, S, M, c), ks(8, y));
          break;
        case 23:
          break;
        case 22:
          var q = y.stateNode;
          (y.memoizedState !== null
            ? q._visibility & 2
              ? Ra(d, y, S, M, c)
              : Hs(d, y)
            : ((q._visibility |= 2), Ra(d, y, S, M, c)),
            c && B & 2048 && Du(y.alternate, y));
          break;
        case 24:
          (Ra(d, y, S, M, c), c && B & 2048 && Ou(y.alternate, y));
          break;
        default:
          Ra(d, y, S, M, c);
      }
      n = n.sibling;
    }
  }
  function Hs(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = t,
          o = n,
          c = o.flags;
        switch (o.tag) {
          case 22:
            (Hs(a, o), c & 2048 && Du(o.alternate, o));
            break;
          case 24:
            (Hs(a, o), c & 2048 && Ou(o.alternate, o));
            break;
          default:
            Hs(a, o);
        }
        n = n.sibling;
      }
  }
  var qs = 8192;
  function Ma(t) {
    if (t.subtreeFlags & qs)
      for (t = t.child; t !== null; ) (wg(t), (t = t.sibling));
  }
  function wg(t) {
    switch (t.tag) {
      case 26:
        (Ma(t),
          t.flags & qs &&
            t.memoizedState !== null &&
            uE(Ze, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Ma(t);
        break;
      case 3:
      case 4:
        var n = Ze;
        ((Ze = Lo(t.stateNode.containerInfo)), Ma(t), (Ze = n));
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = qs), (qs = 16777216), Ma(t), (qs = n))
            : Ma(t));
        break;
      default:
        Ma(t);
    }
  }
  function Tg(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do ((n = t.sibling), (t.sibling = null), (t = n));
      while (t !== null);
    }
  }
  function Gs(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          ((ie = o), Ag(o, t));
        }
      Tg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Eg(t), (t = t.sibling));
  }
  function Eg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Gs(t), t.flags & 2048 && ei(9, t, t.return));
        break;
      case 3:
        Gs(t);
        break;
      case 12:
        Gs(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), To(t))
          : Gs(t);
        break;
      default:
        Gs(t);
    }
  }
  function To(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          ((ie = o), Ag(o, t));
        }
      Tg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          (ei(8, n, n.return), To(n));
          break;
        case 22:
          ((a = n.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), To(n)));
          break;
        default:
          To(n);
      }
      t = t.sibling;
    }
  }
  function Ag(t, n) {
    for (; ie !== null; ) {
      var a = ie;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ei(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          As(a.memoizedState.cache);
      }
      if (((o = a.child), o !== null)) ((o.return = a), (ie = o));
      else
        t: for (a = t; ie !== null; ) {
          o = ie;
          var c = o.sibling,
            d = o.return;
          if ((gg(o), o === a)) {
            ie = null;
            break t;
          }
          if (c !== null) {
            ((c.return = d), (ie = c));
            break t;
          }
          ie = d;
        }
    }
  }
  var CT = {
      getCacheForType: function (t) {
        var n = fe(It),
          a = n.data.get(t);
        return (a === void 0 && ((a = t()), n.data.set(t, a)), a);
      },
    },
    RT = typeof WeakMap == "function" ? WeakMap : Map,
    Dt = 0,
    Lt = null,
    xt = null,
    Tt = 0,
    Ot = 0,
    Oe = null,
    ai = !1,
    Da = !1,
    Nu = !1,
    Ln = 0,
    Gt = 0,
    si = 0,
    qi = 0,
    ju = 0,
    Ge = 0,
    Oa = 0,
    Ys = null,
    Te = null,
    _u = !1,
    Vu = 0,
    Eo = 1 / 0,
    Ao = null,
    ri = null,
    re = 0,
    oi = null,
    Na = null,
    ja = 0,
    Lu = 0,
    zu = null,
    Cg = null,
    Fs = 0,
    Pu = null;
  function Ne() {
    if ((Dt & 2) !== 0 && Tt !== 0) return Tt & -Tt;
    if (L.T !== null) {
      var t = ba;
      return t !== 0 ? t : Yu();
    }
    return qh();
  }
  function Rg() {
    Ge === 0 && (Ge = (Tt & 536870912) === 0 || At ? Bh() : 536870912);
    var t = qe.current;
    return (t !== null && (t.flags |= 32), Ge);
  }
  function je(t, n, a) {
    (((t === Lt && (Ot === 2 || Ot === 9)) || t.cancelPendingCommit !== null) &&
      (_a(t, 0), li(t, Tt, Ge, !1)),
      cs(t, a),
      ((Dt & 2) === 0 || t !== Lt) &&
        (t === Lt &&
          ((Dt & 2) === 0 && (qi |= a), Gt === 4 && li(t, Tt, Ge, !1)),
        dn(t)));
  }
  function Mg(t, n, a) {
    if ((Dt & 6) !== 0) throw Error(r(327));
    var o = (!a && (n & 124) === 0 && (n & t.expiredLanes) === 0) || ls(t, n),
      c = o ? OT(t, n) : Uu(t, n, !0),
      d = o;
    do {
      if (c === 0) {
        Da && !o && li(t, n, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), d && !MT(a))) {
          ((c = Uu(t, n, !1)), (d = !1));
          continue;
        }
        if (c === 2) {
          if (((d = n), t.errorRecoveryDisabledLanes & d)) var y = 0;
          else
            ((y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0));
          if (y !== 0) {
            n = y;
            t: {
              var S = t;
              c = Ys;
              var M = S.current.memoizedState.isDehydrated;
              if ((M && (_a(S, y).flags |= 256), (y = Uu(S, y, !1)), y !== 2)) {
                if (Nu && !M) {
                  ((S.errorRecoveryDisabledLanes |= d), (qi |= d), (c = 4));
                  break t;
                }
                ((d = Te),
                  (Te = c),
                  d !== null &&
                    (Te === null ? (Te = d) : Te.push.apply(Te, d)));
              }
              c = y;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          (_a(t, 0), li(t, n, 0, !0));
          break;
        }
        t: {
          switch (((o = t), (d = c), d)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              li(o, n, Ge, !ai);
              break t;
            case 2:
              Te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((n & 62914560) === n && ((c = Vu + 300 - on()), 10 < c)) {
            if ((li(o, n, Ge, !ai), Lr(o, 0, !0) !== 0)) break t;
            o.timeoutHandle = iy(
              Dg.bind(null, o, a, Te, Ao, _u, n, Ge, qi, Oa, ai, d, 2, -0, 0),
              c,
            );
            break t;
          }
          Dg(o, a, Te, Ao, _u, n, Ge, qi, Oa, ai, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    dn(t);
  }
  function Dg(t, n, a, o, c, d, y, S, M, B, q, K, k, U) {
    if (
      ((t.timeoutHandle = -1),
      (K = n.subtreeFlags),
      (K & 8192 || (K & 16785408) === 16785408) &&
        (($s = { stylesheets: null, count: 0, unsuspend: cE }),
        wg(n),
        (K = fE()),
        K !== null))
    ) {
      ((t.cancelPendingCommit = K(
        zg.bind(null, t, n, d, a, o, c, y, S, M, q, 1, k, U),
      )),
        li(t, d, y, !B));
      return;
    }
    zg(t, n, d, a, o, c, y, S, M);
  }
  function MT(t) {
    for (var n = t; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var o = 0; o < a.length; o++) {
          var c = a[o],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ce(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        ((a.return = n), (n = a));
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function li(t, n, a, o) {
    ((n &= ~ju),
      (n &= ~qi),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      o && (t.warmLanes |= n),
      (o = t.expirationTimes));
    for (var c = n; 0 < c; ) {
      var d = 31 - Ae(c),
        y = 1 << d;
      ((o[d] = -1), (c &= ~y));
    }
    a !== 0 && Uh(t, a, n);
  }
  function Co() {
    return (Dt & 6) === 0 ? (Xs(0), !1) : !0;
  }
  function Bu() {
    if (xt !== null) {
      if (Ot === 0) var t = xt.return;
      else ((t = xt), (Rn = zi = null), eu(t), (Aa = null), (zs = 0), (t = xt));
      for (; t !== null; ) (lg(t.alternate, t), (t = t.return));
      xt = null;
    }
  }
  function _a(t, n) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), XT(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      Bu(),
      (Lt = t),
      (xt = a = En(t.current, null)),
      (Tt = n),
      (Ot = 0),
      (Oe = null),
      (ai = !1),
      (Da = ls(t, n)),
      (Nu = !1),
      (Oa = Ge = ju = qi = si = Gt = 0),
      (Te = Ys = null),
      (_u = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Ae(o),
          d = 1 << c;
        ((n |= t[c]), (o &= ~d));
      }
    return ((Ln = n), Kr(), a);
  }
  function Og(t, n) {
    ((yt = null),
      (L.H = ho),
      n === Rs || n === no
        ? ((n = Km()), (Ot = 3))
        : n === Ym
          ? ((n = Km()), (Ot = 4))
          : (Ot =
              n === Qp
                ? 8
                : n !== null &&
                    typeof n == "object" &&
                    typeof n.then == "function"
                  ? 6
                  : 1),
      (Oe = n),
      xt === null && ((Gt = 1), vo(t, Be(n, t.current))));
  }
  function Ng() {
    var t = L.H;
    return ((L.H = ho), t === null ? ho : t);
  }
  function jg() {
    var t = L.A;
    return ((L.A = CT), t);
  }
  function ku() {
    ((Gt = 4),
      ai || ((Tt & 4194048) !== Tt && qe.current !== null) || (Da = !0),
      ((si & 134217727) === 0 && (qi & 134217727) === 0) ||
        Lt === null ||
        li(Lt, Tt, Ge, !1));
  }
  function Uu(t, n, a) {
    var o = Dt;
    Dt |= 2;
    var c = Ng(),
      d = jg();
    ((Lt !== t || Tt !== n) && ((Ao = null), _a(t, n)), (n = !1));
    var y = Gt;
    t: do
      try {
        if (Ot !== 0 && xt !== null) {
          var S = xt,
            M = Oe;
          switch (Ot) {
            case 8:
              (Bu(), (y = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              qe.current === null && (n = !0);
              var B = Ot;
              if (((Ot = 0), (Oe = null), Va(t, S, M, B), a && Da)) {
                y = 0;
                break t;
              }
              break;
            default:
              ((B = Ot), (Ot = 0), (Oe = null), Va(t, S, M, B));
          }
        }
        (DT(), (y = Gt));
        break;
      } catch (q) {
        Og(t, q);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (Rn = zi = null),
      (Dt = o),
      (L.H = c),
      (L.A = d),
      xt === null && ((Lt = null), (Tt = 0), Kr()),
      y
    );
  }
  function DT() {
    for (; xt !== null; ) _g(xt);
  }
  function OT(t, n) {
    var a = Dt;
    Dt |= 2;
    var o = Ng(),
      c = jg();
    Lt !== t || Tt !== n
      ? ((Ao = null), (Eo = on() + 500), _a(t, n))
      : (Da = ls(t, n));
    t: do
      try {
        if (Ot !== 0 && xt !== null) {
          n = xt;
          var d = Oe;
          e: switch (Ot) {
            case 1:
              ((Ot = 0), (Oe = null), Va(t, n, d, 1));
              break;
            case 2:
            case 9:
              if (Fm(d)) {
                ((Ot = 0), (Oe = null), Vg(n));
                break;
              }
              ((n = function () {
                ((Ot !== 2 && Ot !== 9) || Lt !== t || (Ot = 7), dn(t));
              }),
                d.then(n, n));
              break t;
            case 3:
              Ot = 7;
              break t;
            case 4:
              Ot = 5;
              break t;
            case 7:
              Fm(d)
                ? ((Ot = 0), (Oe = null), Vg(n))
                : ((Ot = 0), (Oe = null), Va(t, n, d, 7));
              break;
            case 5:
              var y = null;
              switch (xt.tag) {
                case 26:
                  y = xt.memoizedState;
                case 5:
                case 27:
                  var S = xt;
                  if (!y || py(y)) {
                    ((Ot = 0), (Oe = null));
                    var M = S.sibling;
                    if (M !== null) xt = M;
                    else {
                      var B = S.return;
                      B !== null ? ((xt = B), Ro(B)) : (xt = null);
                    }
                    break e;
                  }
              }
              ((Ot = 0), (Oe = null), Va(t, n, d, 5));
              break;
            case 6:
              ((Ot = 0), (Oe = null), Va(t, n, d, 6));
              break;
            case 8:
              (Bu(), (Gt = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        NT();
        break;
      } catch (q) {
        Og(t, q);
      }
    while (!0);
    return (
      (Rn = zi = null),
      (L.H = o),
      (L.A = c),
      (Dt = a),
      xt !== null ? 0 : ((Lt = null), (Tt = 0), Kr(), Gt)
    );
  }
  function NT() {
    for (; xt !== null && !JS(); ) _g(xt);
  }
  function _g(t) {
    var n = rg(t.alternate, t, Ln);
    ((t.memoizedProps = t.pendingProps), n === null ? Ro(t) : (xt = n));
  }
  function Vg(t) {
    var n = t,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = tg(a, n, n.pendingProps, n.type, void 0, Tt);
        break;
      case 11:
        n = tg(a, n, n.pendingProps, n.type.render, n.ref, Tt);
        break;
      case 5:
        eu(n);
      default:
        (lg(a, n), (n = xt = Lm(n, Ln)), (n = rg(a, n, Ln)));
    }
    ((t.memoizedProps = t.pendingProps), n === null ? Ro(t) : (xt = n));
  }
  function Va(t, n, a, o) {
    ((Rn = zi = null), eu(n), (Aa = null), (zs = 0));
    var c = n.return;
    try {
      if (xT(t, c, n, a, Tt)) {
        ((Gt = 1), vo(t, Be(a, t.current)), (xt = null));
        return;
      }
    } catch (d) {
      if (c !== null) throw ((xt = c), d);
      ((Gt = 1), vo(t, Be(a, t.current)), (xt = null));
      return;
    }
    n.flags & 32768
      ? (At || o === 1
          ? (t = !0)
          : Da || (Tt & 536870912) !== 0
            ? (t = !1)
            : ((ai = t = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = qe.current),
                o !== null && o.tag === 13 && (o.flags |= 16384))),
        Lg(n, t))
      : Ro(n);
  }
  function Ro(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Lg(n, ai);
        return;
      }
      t = n.return;
      var a = wT(n.alternate, n, Ln);
      if (a !== null) {
        xt = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        xt = n;
        return;
      }
      xt = n = t;
    } while (n !== null);
    Gt === 0 && (Gt = 5);
  }
  function Lg(t, n) {
    do {
      var a = TT(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (xt = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        xt = t;
        return;
      }
      xt = t = a;
    } while (t !== null);
    ((Gt = 6), (xt = null));
  }
  function zg(t, n, a, o, c, d, y, S, M) {
    t.cancelPendingCommit = null;
    do Mo();
    while (re !== 0);
    if ((Dt & 6) !== 0) throw Error(r(327));
    if (n !== null) {
      if (n === t.current) throw Error(r(177));
      if (
        ((d = n.lanes | n.childLanes),
        (d |= Oc),
        cw(t, a, d, y, S, M),
        t === Lt && ((xt = Lt = null), (Tt = 0)),
        (Na = n),
        (oi = t),
        (ja = a),
        (Lu = d),
        (zu = c),
        (Cg = o),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            LT(jr, function () {
              return (Hg(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (o = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || o)
      ) {
        ((o = L.T), (L.T = null), (c = Q.p), (Q.p = 2), (y = Dt), (Dt |= 4));
        try {
          ET(t, n, a);
        } finally {
          ((Dt = y), (Q.p = c), (L.T = o));
        }
      }
      ((re = 1), Pg(), Bg(), kg());
    }
  }
  function Pg() {
    if (re === 1) {
      re = 0;
      var t = oi,
        n = Na,
        a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        ((a = L.T), (L.T = null));
        var o = Q.p;
        Q.p = 2;
        var c = Dt;
        Dt |= 4;
        try {
          bg(n, t);
          var d = $u,
            y = Am(t.containerInfo),
            S = d.focusedElem,
            M = d.selectionRange;
          if (
            y !== S &&
            S &&
            S.ownerDocument &&
            Em(S.ownerDocument.documentElement, S)
          ) {
            if (M !== null && Ac(S)) {
              var B = M.start,
                q = M.end;
              if ((q === void 0 && (q = B), "selectionStart" in S))
                ((S.selectionStart = B),
                  (S.selectionEnd = Math.min(q, S.value.length)));
              else {
                var K = S.ownerDocument || document,
                  k = (K && K.defaultView) || window;
                if (k.getSelection) {
                  var U = k.getSelection(),
                    mt = S.textContent.length,
                    ut = Math.min(M.start, mt),
                    _t = M.end === void 0 ? ut : Math.min(M.end, mt);
                  !U.extend && ut > _t && ((y = _t), (_t = ut), (ut = y));
                  var _ = Tm(S, ut),
                    D = Tm(S, _t);
                  if (
                    _ &&
                    D &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== _.node ||
                      U.anchorOffset !== _.offset ||
                      U.focusNode !== D.node ||
                      U.focusOffset !== D.offset)
                  ) {
                    var z = K.createRange();
                    (z.setStart(_.node, _.offset),
                      U.removeAllRanges(),
                      ut > _t
                        ? (U.addRange(z), U.extend(D.node, D.offset))
                        : (z.setEnd(D.node, D.offset), U.addRange(z)));
                  }
                }
              }
            }
            for (K = [], U = S; (U = U.parentNode); )
              U.nodeType === 1 &&
                K.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (
              typeof S.focus == "function" && S.focus(), S = 0;
              S < K.length;
              S++
            ) {
              var Y = K[S];
              ((Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top));
            }
          }
          ((Uo = !!Iu), ($u = Iu = null));
        } finally {
          ((Dt = c), (Q.p = o), (L.T = a));
        }
      }
      ((t.current = n), (re = 2));
    }
  }
  function Bg() {
    if (re === 2) {
      re = 0;
      var t = oi,
        n = Na,
        a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        ((a = L.T), (L.T = null));
        var o = Q.p;
        Q.p = 2;
        var c = Dt;
        Dt |= 4;
        try {
          pg(t, n.alternate, n);
        } finally {
          ((Dt = c), (Q.p = o), (L.T = a));
        }
      }
      re = 3;
    }
  }
  function kg() {
    if (re === 4 || re === 3) {
      ((re = 0), tw());
      var t = oi,
        n = Na,
        a = ja,
        o = Cg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (re = 5)
        : ((re = 0), (Na = oi = null), Ug(t, t.pendingLanes));
      var c = t.pendingLanes;
      if (
        (c === 0 && (ri = null),
        ac(a),
        (n = n.stateNode),
        Ee && typeof Ee.onCommitFiberRoot == "function")
      )
        try {
          Ee.onCommitFiberRoot(os, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        ((n = L.T), (c = Q.p), (Q.p = 2), (L.T = null));
        try {
          for (var d = t.onRecoverableError, y = 0; y < o.length; y++) {
            var S = o[y];
            d(S.value, { componentStack: S.stack });
          }
        } finally {
          ((L.T = n), (Q.p = c));
        }
      }
      ((ja & 3) !== 0 && Mo(),
        dn(t),
        (c = t.pendingLanes),
        (a & 4194090) !== 0 && (c & 42) !== 0
          ? t === Pu
            ? Fs++
            : ((Fs = 0), (Pu = t))
          : (Fs = 0),
        Xs(0));
    }
  }
  function Ug(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), As(n)));
  }
  function Mo(t) {
    return (Pg(), Bg(), kg(), Hg());
  }
  function Hg() {
    if (re !== 5) return !1;
    var t = oi,
      n = Lu;
    Lu = 0;
    var a = ac(ja),
      o = L.T,
      c = Q.p;
    try {
      ((Q.p = 32 > a ? 32 : a), (L.T = null), (a = zu), (zu = null));
      var d = oi,
        y = ja;
      if (((re = 0), (Na = oi = null), (ja = 0), (Dt & 6) !== 0))
        throw Error(r(331));
      var S = Dt;
      if (
        ((Dt |= 4),
        Eg(d.current),
        Sg(d, d.current, y, a),
        (Dt = S),
        Xs(0, !1),
        Ee && typeof Ee.onPostCommitFiberRoot == "function")
      )
        try {
          Ee.onPostCommitFiberRoot(os, d);
        } catch {}
      return !0;
    } finally {
      ((Q.p = c), (L.T = o), Ug(t, n));
    }
  }
  function qg(t, n, a) {
    ((n = Be(a, n)),
      (n = pu(t.stateNode, n, 2)),
      (t = In(t, n, 2)),
      t !== null && (cs(t, 2), dn(t)));
  }
  function Vt(t, n, a) {
    if (t.tag === 3) qg(t, t, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          qg(n, t, a);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (ri === null || !ri.has(o)))
          ) {
            ((t = Be(a, t)),
              (a = Xp(2)),
              (o = In(n, a, 2)),
              o !== null && (Kp(a, o, n, t), cs(o, 2), dn(o)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Hu(t, n, a) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new RT();
      var c = new Set();
      o.set(n, c);
    } else ((c = o.get(n)), c === void 0 && ((c = new Set()), o.set(n, c)));
    c.has(a) ||
      ((Nu = !0), c.add(a), (t = jT.bind(null, t, n, a)), n.then(t, t));
  }
  function jT(t, n, a) {
    var o = t.pingCache;
    (o !== null && o.delete(n),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Lt === t &&
        (Tt & a) === a &&
        (Gt === 4 || (Gt === 3 && (Tt & 62914560) === Tt && 300 > on() - Vu)
          ? (Dt & 2) === 0 && _a(t, 0)
          : (ju |= a),
        Oa === Tt && (Oa = 0)),
      dn(t));
  }
  function Gg(t, n) {
    (n === 0 && (n = kh()), (t = pa(t, n)), t !== null && (cs(t, n), dn(t)));
  }
  function _T(t) {
    var n = t.memoizedState,
      a = 0;
    (n !== null && (a = n.retryLane), Gg(t, a));
  }
  function VT(t, n) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var o = t.stateNode,
          c = t.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (o !== null && o.delete(n), Gg(t, a));
  }
  function LT(t, n) {
    return Le(t, n);
  }
  var Do = null,
    La = null,
    qu = !1,
    Oo = !1,
    Gu = !1,
    Gi = 0;
  function dn(t) {
    (t !== La &&
      t.next === null &&
      (La === null ? (Do = La = t) : (La = La.next = t)),
      (Oo = !0),
      qu || ((qu = !0), PT()));
  }
  function Xs(t, n) {
    if (!Gu && Oo) {
      Gu = !0;
      do
        for (var a = !1, o = Do; o !== null; ) {
          if (t !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var y = o.suspendedLanes,
                S = o.pingedLanes;
              ((d = (1 << (31 - Ae(42 | t) + 1)) - 1),
                (d &= c & ~(y & ~S)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0));
            }
            d !== 0 && ((a = !0), Kg(o, d));
          } else
            ((d = Tt),
              (d = Lr(
                o,
                o === Lt ? d : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1,
              )),
              (d & 3) === 0 || ls(o, d) || ((a = !0), Kg(o, d)));
          o = o.next;
        }
      while (a);
      Gu = !1;
    }
  }
  function zT() {
    Yg();
  }
  function Yg() {
    Oo = qu = !1;
    var t = 0;
    Gi !== 0 && (FT() && (t = Gi), (Gi = 0));
    for (var n = on(), a = null, o = Do; o !== null; ) {
      var c = o.next,
        d = Fg(o, n);
      (d === 0
        ? ((o.next = null),
          a === null ? (Do = c) : (a.next = c),
          c === null && (La = a))
        : ((a = o), (t !== 0 || (d & 3) !== 0) && (Oo = !0)),
        (o = c));
    }
    Xs(t);
  }
  function Fg(t, n) {
    for (
      var a = t.suspendedLanes,
        o = t.pingedLanes,
        c = t.expirationTimes,
        d = t.pendingLanes & -62914561;
      0 < d;
    ) {
      var y = 31 - Ae(d),
        S = 1 << y,
        M = c[y];
      (M === -1
        ? ((S & a) === 0 || (S & o) !== 0) && (c[y] = lw(S, n))
        : M <= n && (t.expiredLanes |= S),
        (d &= ~S));
    }
    if (
      ((n = Lt),
      (a = Tt),
      (a = Lr(
        t,
        t === n ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (o = t.callbackNode),
      a === 0 ||
        (t === n && (Ot === 2 || Ot === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Yn(o),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || ls(t, a)) {
      if (((n = a & -a), n === t.callbackPriority)) return n;
      switch ((o !== null && Yn(o), ac(a))) {
        case 2:
        case 8:
          a = zh;
          break;
        case 32:
          a = jr;
          break;
        case 268435456:
          a = Ph;
          break;
        default:
          a = jr;
      }
      return (
        (o = Xg.bind(null, t)),
        (a = Le(a, o)),
        (t.callbackPriority = n),
        (t.callbackNode = a),
        n
      );
    }
    return (
      o !== null && o !== null && Yn(o),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Xg(t, n) {
    if (re !== 0 && re !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (Mo() && t.callbackNode !== a) return null;
    var o = Tt;
    return (
      (o = Lr(
        t,
        t === Lt ? o : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      o === 0
        ? null
        : (Mg(t, o, n),
          Fg(t, on()),
          t.callbackNode != null && t.callbackNode === a
            ? Xg.bind(null, t)
            : null)
    );
  }
  function Kg(t, n) {
    if (Mo()) return null;
    Mg(t, n, !0);
  }
  function PT() {
    KT(function () {
      (Dt & 6) !== 0 ? Le(Lh, zT) : Yg();
    });
  }
  function Yu() {
    return (Gi === 0 && (Gi = Bh()), Gi);
  }
  function Qg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ur("" + t);
  }
  function Zg(t, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      t.id && a.setAttribute("form", t.id),
      n.parentNode.insertBefore(a, n),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function BT(t, n, a, o, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var d = Qg((c[be] || null).action),
        y = o.submitter;
      y &&
        ((n = (n = y[be] || null)
          ? Qg(n.formAction)
          : y.getAttribute("formAction")),
        n !== null && ((d = n), (y = null)));
      var S = new Yr("action", "action", null, o, c);
      t.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Gi !== 0) {
                  var M = y ? Zg(c, y) : new FormData(c);
                  uu(
                    a,
                    { pending: !0, data: M, method: c.method, action: d },
                    null,
                    M,
                  );
                }
              } else
                typeof d == "function" &&
                  (S.preventDefault(),
                  (M = y ? Zg(c, y) : new FormData(c)),
                  uu(
                    a,
                    { pending: !0, data: M, method: c.method, action: d },
                    d,
                    M,
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Fu = 0; Fu < Dc.length; Fu++) {
    var Xu = Dc[Fu],
      kT = Xu.toLowerCase(),
      UT = Xu[0].toUpperCase() + Xu.slice(1);
    Qe(kT, "on" + UT);
  }
  (Qe(Mm, "onAnimationEnd"),
    Qe(Dm, "onAnimationIteration"),
    Qe(Om, "onAnimationStart"),
    Qe("dblclick", "onDoubleClick"),
    Qe("focusin", "onFocus"),
    Qe("focusout", "onBlur"),
    Qe(iT, "onTransitionRun"),
    Qe(aT, "onTransitionStart"),
    Qe(sT, "onTransitionCancel"),
    Qe(Nm, "onTransitionEnd"),
    sa("onMouseEnter", ["mouseout", "mouseover"]),
    sa("onMouseLeave", ["mouseout", "mouseover"]),
    sa("onPointerEnter", ["pointerout", "pointerover"]),
    sa("onPointerLeave", ["pointerout", "pointerover"]),
    Ri(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ri(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ri("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ri(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ri(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ri(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ks =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    HT = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ks),
    );
  function Wg(t, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var o = t[a],
        c = o.event;
      o = o.listeners;
      t: {
        var d = void 0;
        if (n)
          for (var y = o.length - 1; 0 <= y; y--) {
            var S = o[y],
              M = S.instance,
              B = S.currentTarget;
            if (((S = S.listener), M !== d && c.isPropagationStopped()))
              break t;
            ((d = S), (c.currentTarget = B));
            try {
              d(c);
            } catch (q) {
              yo(q);
            }
            ((c.currentTarget = null), (d = M));
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((S = o[y]),
              (M = S.instance),
              (B = S.currentTarget),
              (S = S.listener),
              M !== d && c.isPropagationStopped())
            )
              break t;
            ((d = S), (c.currentTarget = B));
            try {
              d(c);
            } catch (q) {
              yo(q);
            }
            ((c.currentTarget = null), (d = M));
          }
      }
    }
  }
  function St(t, n) {
    var a = n[sc];
    a === void 0 && (a = n[sc] = new Set());
    var o = t + "__bubble";
    a.has(o) || (Ig(n, t, 2, !1), a.add(o));
  }
  function Ku(t, n, a) {
    var o = 0;
    (n && (o |= 4), Ig(a, t, o, n));
  }
  var No = "_reactListening" + Math.random().toString(36).slice(2);
  function Qu(t) {
    if (!t[No]) {
      ((t[No] = !0),
        Yh.forEach(function (a) {
          a !== "selectionchange" && (HT.has(a) || Ku(a, !1, t), Ku(a, !0, t));
        }));
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[No] || ((n[No] = !0), Ku("selectionchange", !1, n));
    }
  }
  function Ig(t, n, a, o) {
    switch (Sy(n)) {
      case 2:
        var c = mE;
        break;
      case 8:
        c = pE;
        break;
      default:
        c = cf;
    }
    ((a = c.bind(null, n, a, t)),
      (c = void 0),
      !gc ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (c = !0),
      o
        ? c !== void 0
          ? t.addEventListener(n, a, { capture: !0, passive: c })
          : t.addEventListener(n, a, !0)
        : c !== void 0
          ? t.addEventListener(n, a, { passive: c })
          : t.addEventListener(n, a, !1));
  }
  function Zu(t, n, a, o, c) {
    var d = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      t: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var S = o.stateNode.containerInfo;
          if (S === c) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var M = y.tag;
              if ((M === 3 || M === 4) && y.stateNode.containerInfo === c)
                return;
              y = y.return;
            }
          for (; S !== null; ) {
            if (((y = na(S)), y === null)) return;
            if (((M = y.tag), M === 5 || M === 6 || M === 26 || M === 27)) {
              o = d = y;
              continue t;
            }
            S = S.parentNode;
          }
        }
        o = o.return;
      }
    am(function () {
      var B = d,
        q = mc(a),
        K = [];
      t: {
        var k = jm.get(t);
        if (k !== void 0) {
          var U = Yr,
            mt = t;
          switch (t) {
            case "keypress":
              if (qr(a) === 0) break t;
            case "keydown":
            case "keyup":
              U = Lw;
              break;
            case "focusin":
              ((mt = "focus"), (U = xc));
              break;
            case "focusout":
              ((mt = "blur"), (U = xc));
              break;
            case "beforeblur":
            case "afterblur":
              U = xc;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = om;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Tw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Bw;
              break;
            case Mm:
            case Dm:
            case Om:
              U = Cw;
              break;
            case Nm:
              U = Uw;
              break;
            case "scroll":
            case "scrollend":
              U = Sw;
              break;
            case "wheel":
              U = qw;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Mw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = cm;
              break;
            case "toggle":
            case "beforetoggle":
              U = Yw;
          }
          var ut = (n & 4) !== 0,
            _t = !ut && (t === "scroll" || t === "scrollend"),
            _ = ut ? (k !== null ? k + "Capture" : null) : k;
          ut = [];
          for (var D = B, z; D !== null; ) {
            var Y = D;
            if (
              ((z = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                z === null ||
                _ === null ||
                ((Y = ds(D, _)), Y != null && ut.push(Qs(D, Y, z))),
              _t)
            )
              break;
            D = D.return;
          }
          0 < ut.length &&
            ((k = new U(k, mt, null, a, q)),
            K.push({ event: k, listeners: ut }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((k = t === "mouseover" || t === "pointerover"),
            (U = t === "mouseout" || t === "pointerout"),
            k &&
              a !== hc &&
              (mt = a.relatedTarget || a.fromElement) &&
              (na(mt) || mt[ea]))
          )
            break t;
          if (
            (U || k) &&
            ((k =
              q.window === q
                ? q
                : (k = q.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
            U
              ? ((mt = a.relatedTarget || a.toElement),
                (U = B),
                (mt = mt ? na(mt) : null),
                mt !== null &&
                  ((_t = u(mt)),
                  (ut = mt.tag),
                  mt !== _t || (ut !== 5 && ut !== 27 && ut !== 6)) &&
                  (mt = null))
              : ((U = null), (mt = B)),
            U !== mt)
          ) {
            if (
              ((ut = om),
              (Y = "onMouseLeave"),
              (_ = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ut = cm),
                (Y = "onPointerLeave"),
                (_ = "onPointerEnter"),
                (D = "pointer")),
              (_t = U == null ? k : fs(U)),
              (z = mt == null ? k : fs(mt)),
              (k = new ut(Y, D + "leave", U, a, q)),
              (k.target = _t),
              (k.relatedTarget = z),
              (Y = null),
              na(q) === B &&
                ((ut = new ut(_, D + "enter", mt, a, q)),
                (ut.target = z),
                (ut.relatedTarget = _t),
                (Y = ut)),
              (_t = Y),
              U && mt)
            )
              e: {
                for (ut = U, _ = mt, D = 0, z = ut; z; z = za(z)) D++;
                for (z = 0, Y = _; Y; Y = za(Y)) z++;
                for (; 0 < D - z; ) ((ut = za(ut)), D--);
                for (; 0 < z - D; ) ((_ = za(_)), z--);
                for (; D--; ) {
                  if (ut === _ || (_ !== null && ut === _.alternate)) break e;
                  ((ut = za(ut)), (_ = za(_)));
                }
                ut = null;
              }
            else ut = null;
            (U !== null && $g(K, k, U, ut, !1),
              mt !== null && _t !== null && $g(K, _t, mt, ut, !0));
          }
        }
        t: {
          if (
            ((k = B ? fs(B) : window),
            (U = k.nodeName && k.nodeName.toLowerCase()),
            U === "select" || (U === "input" && k.type === "file"))
          )
            var et = ym;
          else if (pm(k))
            if (vm) et = tT;
            else {
              et = $w;
              var bt = Iw;
            }
          else
            ((U = k.nodeName),
              !U ||
              U.toLowerCase() !== "input" ||
              (k.type !== "checkbox" && k.type !== "radio")
                ? B && dc(B.elementType) && (et = ym)
                : (et = Jw));
          if (et && (et = et(t, B))) {
            gm(K, et, a, q);
            break t;
          }
          (bt && bt(t, k, B),
            t === "focusout" &&
              B &&
              k.type === "number" &&
              B.memoizedProps.value != null &&
              fc(k, "number", k.value));
        }
        switch (((bt = B ? fs(B) : window), t)) {
          case "focusin":
            (pm(bt) || bt.contentEditable === "true") &&
              ((da = bt), (Cc = B), (xs = null));
            break;
          case "focusout":
            xs = Cc = da = null;
            break;
          case "mousedown":
            Rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Rc = !1), Cm(K, a, q));
            break;
          case "selectionchange":
            if (nT) break;
          case "keydown":
          case "keyup":
            Cm(K, a, q);
        }
        var ot;
        if (wc)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          fa
            ? hm(t, a) && (ht = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (ht = "onCompositionStart");
        (ht &&
          (um &&
            a.locale !== "ko" &&
            (fa || ht !== "onCompositionStart"
              ? ht === "onCompositionEnd" && fa && (ot = sm())
              : ((Kn = q),
                (yc = "value" in Kn ? Kn.value : Kn.textContent),
                (fa = !0))),
          (bt = jo(B, ht)),
          0 < bt.length &&
            ((ht = new lm(ht, t, null, a, q)),
            K.push({ event: ht, listeners: bt }),
            ot
              ? (ht.data = ot)
              : ((ot = mm(a)), ot !== null && (ht.data = ot)))),
          (ot = Xw ? Kw(t, a) : Qw(t, a)) &&
            ((ht = jo(B, "onBeforeInput")),
            0 < ht.length &&
              ((bt = new lm("onBeforeInput", "beforeinput", null, a, q)),
              K.push({ event: bt, listeners: ht }),
              (bt.data = ot))),
          BT(K, t, B, a, q));
      }
      Wg(K, n);
    });
  }
  function Qs(t, n, a) {
    return { instance: t, listener: n, currentTarget: a };
  }
  function jo(t, n) {
    for (var a = n + "Capture", o = []; t !== null; ) {
      var c = t,
        d = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = ds(t, a)),
          c != null && o.unshift(Qs(t, c, d)),
          (c = ds(t, n)),
          c != null && o.push(Qs(t, c, d))),
        t.tag === 3)
      )
        return o;
      t = t.return;
    }
    return [];
  }
  function za(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function $g(t, n, a, o, c) {
    for (var d = n._reactName, y = []; a !== null && a !== o; ) {
      var S = a,
        M = S.alternate,
        B = S.stateNode;
      if (((S = S.tag), M !== null && M === o)) break;
      ((S !== 5 && S !== 26 && S !== 27) ||
        B === null ||
        ((M = B),
        c
          ? ((B = ds(a, d)), B != null && y.unshift(Qs(a, B, M)))
          : c || ((B = ds(a, d)), B != null && y.push(Qs(a, B, M)))),
        (a = a.return));
    }
    y.length !== 0 && t.push({ event: n, listeners: y });
  }
  var qT = /\r\n?/g,
    GT = /\u0000|\uFFFD/g;
  function Jg(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        qT,
        `
`,
      )
      .replace(GT, "");
  }
  function ty(t, n) {
    return ((n = Jg(n)), Jg(t) === n);
  }
  function _o() {}
  function jt(t, n, a, o, c, d) {
    switch (a) {
      case "children":
        typeof o == "string"
          ? n === "body" || (n === "textarea" && o === "") || la(t, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            n !== "body" &&
            la(t, "" + o);
        break;
      case "className":
        Pr(t, "class", o);
        break;
      case "tabIndex":
        Pr(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Pr(t, a, o);
        break;
      case "style":
        nm(t, o, d);
        break;
      case "data":
        if (n !== "object") {
          Pr(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        ((o = Ur("" + o)), t.setAttribute(a, o));
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof d == "function" &&
            (a === "formAction"
              ? (n !== "input" && jt(t, n, "name", c.name, c, null),
                jt(t, n, "formEncType", c.formEncType, c, null),
                jt(t, n, "formMethod", c.formMethod, c, null),
                jt(t, n, "formTarget", c.formTarget, c, null))
              : (jt(t, n, "encType", c.encType, c, null),
                jt(t, n, "method", c.method, c, null),
                jt(t, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(a);
          break;
        }
        ((o = Ur("" + o)), t.setAttribute(a, o));
        break;
      case "onClick":
        o != null && (t.onclick = _o);
        break;
      case "onScroll":
        o != null && St("scroll", t);
        break;
      case "onScrollEnd":
        o != null && St("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (((a = o.__html), a != null)) {
            if (c.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((a = Ur("" + o)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(a, "" + o)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0
          ? t.setAttribute(a, "")
          : o !== !1 &&
              o != null &&
              typeof o != "function" &&
              typeof o != "symbol"
            ? t.setAttribute(a, o)
            : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? t.setAttribute(a, o)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? t.removeAttribute(a)
          : t.setAttribute(a, o);
        break;
      case "popover":
        (St("beforetoggle", t), St("toggle", t), zr(t, "popover", o));
        break;
      case "xlinkActuate":
        wn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        wn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        wn(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        wn(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        wn(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        wn(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        wn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        wn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        wn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        zr(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = bw.get(a) || a), zr(t, a, o));
    }
  }
  function Wu(t, n, a, o, c, d) {
    switch (a) {
      case "style":
        nm(t, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (((a = o.__html), a != null)) {
            if (c.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? la(t, o)
          : (typeof o == "number" || typeof o == "bigint") && la(t, "" + o);
        break;
      case "onScroll":
        o != null && St("scroll", t);
        break;
      case "onScrollEnd":
        o != null && St("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = _o);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Fh.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((c = a.endsWith("Capture")),
              (n = a.slice(2, c ? a.length - 7 : void 0)),
              (d = t[be] || null),
              (d = d != null ? d[a] : null),
              typeof d == "function" && t.removeEventListener(n, d, c),
              typeof o == "function")
            ) {
              (typeof d != "function" &&
                d !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(n, o, c));
              break t;
            }
            a in t
              ? (t[a] = o)
              : o === !0
                ? t.setAttribute(a, "")
                : zr(t, a, o);
          }
    }
  }
  function oe(t, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (St("error", t), St("load", t));
        var o = !1,
          c = !1,
          d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var y = a[d];
            if (y != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, n));
                default:
                  jt(t, n, d, y, a, null);
              }
          }
        (c && jt(t, n, "srcSet", a.srcSet, a, null),
          o && jt(t, n, "src", a.src, a, null));
        return;
      case "input":
        St("invalid", t);
        var S = (d = y = c = null),
          M = null,
          B = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var q = a[o];
            if (q != null)
              switch (o) {
                case "name":
                  c = q;
                  break;
                case "type":
                  y = q;
                  break;
                case "checked":
                  M = q;
                  break;
                case "defaultChecked":
                  B = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  S = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null) throw Error(r(137, n));
                  break;
                default:
                  jt(t, n, o, q, a, null);
              }
          }
        ($h(t, d, S, M, B, y, c, !1), Br(t));
        return;
      case "select":
        (St("invalid", t), (o = y = d = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((S = a[c]), S != null))
            switch (c) {
              case "value":
                d = S;
                break;
              case "defaultValue":
                y = S;
                break;
              case "multiple":
                o = S;
              default:
                jt(t, n, c, S, a, null);
            }
        ((n = d),
          (a = y),
          (t.multiple = !!o),
          n != null ? oa(t, !!o, n, !1) : a != null && oa(t, !!o, a, !0));
        return;
      case "textarea":
        (St("invalid", t), (d = c = o = null));
        for (y in a)
          if (a.hasOwnProperty(y) && ((S = a[y]), S != null))
            switch (y) {
              case "value":
                o = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
                d = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(r(91));
                break;
              default:
                jt(t, n, y, S, a, null);
            }
        (tm(t, o, c, d), Br(t));
        return;
      case "option":
        for (M in a)
          a.hasOwnProperty(M) &&
            ((o = a[M]), o != null) &&
            (M === "selected"
              ? (t.selected =
                  o && typeof o != "function" && typeof o != "symbol")
              : jt(t, n, M, o, a, null));
        return;
      case "dialog":
        (St("beforetoggle", t),
          St("toggle", t),
          St("cancel", t),
          St("close", t));
        break;
      case "iframe":
      case "object":
        St("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ks.length; o++) St(Ks[o], t);
        break;
      case "image":
        (St("error", t), St("load", t));
        break;
      case "details":
        St("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (St("error", t), St("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in a)
          if (a.hasOwnProperty(B) && ((o = a[B]), o != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, n));
              default:
                jt(t, n, B, o, a, null);
            }
        return;
      default:
        if (dc(n)) {
          for (q in a)
            a.hasOwnProperty(q) &&
              ((o = a[q]), o !== void 0 && Wu(t, n, q, o, a, void 0));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && ((o = a[S]), o != null && jt(t, n, S, o, a, null));
  }
  function YT(t, n, a, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          d = null,
          y = null,
          S = null,
          M = null,
          B = null,
          q = null;
        for (U in a) {
          var K = a[U];
          if (a.hasOwnProperty(U) && K != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = K;
              default:
                o.hasOwnProperty(U) || jt(t, n, U, null, o, K);
            }
        }
        for (var k in o) {
          var U = o[k];
          if (((K = a[k]), o.hasOwnProperty(k) && (U != null || K != null)))
            switch (k) {
              case "type":
                d = U;
                break;
              case "name":
                c = U;
                break;
              case "checked":
                B = U;
                break;
              case "defaultChecked":
                q = U;
                break;
              case "value":
                y = U;
                break;
              case "defaultValue":
                S = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(r(137, n));
                break;
              default:
                U !== K && jt(t, n, k, U, o, K);
            }
        }
        uc(t, y, S, M, B, q, d, c);
        return;
      case "select":
        U = y = S = k = null;
        for (d in a)
          if (((M = a[d]), a.hasOwnProperty(d) && M != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                U = M;
              default:
                o.hasOwnProperty(d) || jt(t, n, d, null, o, M);
            }
        for (c in o)
          if (
            ((d = o[c]),
            (M = a[c]),
            o.hasOwnProperty(c) && (d != null || M != null))
          )
            switch (c) {
              case "value":
                k = d;
                break;
              case "defaultValue":
                S = d;
                break;
              case "multiple":
                y = d;
              default:
                d !== M && jt(t, n, c, d, o, M);
            }
        ((n = S),
          (a = y),
          (o = U),
          k != null
            ? oa(t, !!a, k, !1)
            : !!o != !!a &&
              (n != null ? oa(t, !!a, n, !0) : oa(t, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        U = k = null;
        for (S in a)
          if (
            ((c = a[S]),
            a.hasOwnProperty(S) && c != null && !o.hasOwnProperty(S))
          )
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                jt(t, n, S, null, o, c);
            }
        for (y in o)
          if (
            ((c = o[y]),
            (d = a[y]),
            o.hasOwnProperty(y) && (c != null || d != null))
          )
            switch (y) {
              case "value":
                k = c;
                break;
              case "defaultValue":
                U = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                c !== d && jt(t, n, y, c, o, d);
            }
        Jh(t, k, U);
        return;
      case "option":
        for (var mt in a)
          ((k = a[mt]),
            a.hasOwnProperty(mt) &&
              k != null &&
              !o.hasOwnProperty(mt) &&
              (mt === "selected"
                ? (t.selected = !1)
                : jt(t, n, mt, null, o, k)));
        for (M in o)
          ((k = o[M]),
            (U = a[M]),
            o.hasOwnProperty(M) &&
              k !== U &&
              (k != null || U != null) &&
              (M === "selected"
                ? (t.selected =
                    k && typeof k != "function" && typeof k != "symbol")
                : jt(t, n, M, k, o, U)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ut in a)
          ((k = a[ut]),
            a.hasOwnProperty(ut) &&
              k != null &&
              !o.hasOwnProperty(ut) &&
              jt(t, n, ut, null, o, k));
        for (B in o)
          if (
            ((k = o[B]),
            (U = a[B]),
            o.hasOwnProperty(B) && k !== U && (k != null || U != null))
          )
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(r(137, n));
                break;
              default:
                jt(t, n, B, k, o, U);
            }
        return;
      default:
        if (dc(n)) {
          for (var _t in a)
            ((k = a[_t]),
              a.hasOwnProperty(_t) &&
                k !== void 0 &&
                !o.hasOwnProperty(_t) &&
                Wu(t, n, _t, void 0, o, k));
          for (q in o)
            ((k = o[q]),
              (U = a[q]),
              !o.hasOwnProperty(q) ||
                k === U ||
                (k === void 0 && U === void 0) ||
                Wu(t, n, q, k, o, U));
          return;
        }
    }
    for (var _ in a)
      ((k = a[_]),
        a.hasOwnProperty(_) &&
          k != null &&
          !o.hasOwnProperty(_) &&
          jt(t, n, _, null, o, k));
    for (K in o)
      ((k = o[K]),
        (U = a[K]),
        !o.hasOwnProperty(K) ||
          k === U ||
          (k == null && U == null) ||
          jt(t, n, K, k, o, U));
  }
  var Iu = null,
    $u = null;
  function Vo(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ey(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ny(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function Ju(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var tf = null;
  function FT() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === tf
        ? !1
        : ((tf = t), !0)
      : ((tf = null), !1);
  }
  var iy = typeof setTimeout == "function" ? setTimeout : void 0,
    XT = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ay = typeof Promise == "function" ? Promise : void 0,
    KT =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ay < "u"
          ? function (t) {
              return ay.resolve(null).then(t).catch(QT);
            }
          : iy;
  function QT(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ci(t) {
    return t === "head";
  }
  function sy(t, n) {
    var a = n,
      o = 0,
      c = 0;
    do {
      var d = a.nextSibling;
      if ((t.removeChild(a), d && d.nodeType === 8))
        if (((a = d.data), a === "/$")) {
          if (0 < o && 8 > o) {
            a = o;
            var y = t.ownerDocument;
            if ((a & 1 && Zs(y.documentElement), a & 2 && Zs(y.body), a & 4))
              for (a = y.head, Zs(a), y = a.firstChild; y; ) {
                var S = y.nextSibling,
                  M = y.nodeName;
                (y[us] ||
                  M === "SCRIPT" ||
                  M === "STYLE" ||
                  (M === "LINK" && y.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(y),
                  (y = S));
              }
          }
          if (c === 0) {
            (t.removeChild(d), ir(n));
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? c++
            : (o = a.charCodeAt(0) - 48);
      else o = 0;
      a = d;
    } while (a);
    ir(n);
  }
  function ef(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ef(a), rc(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function ZT(t, n, a, o) {
    for (; t.nodeType === 1; ) {
      var c = a;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[us])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((d = t.getAttribute("rel")),
                d === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== c.rel ||
                t.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                t.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                t.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((d = t.getAttribute("src")),
                (d !== (c.src == null ? null : c.src) ||
                  t.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  t.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var d = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && t.getAttribute("name") === d) return t;
      } else return t;
      if (((t = We(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function WT(t, n, a) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = We(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function nf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function IT(t, n) {
    var a = t.ownerDocument;
    if (t.data !== "$?" || a.readyState === "complete") n();
    else {
      var o = function () {
        (n(), a.removeEventListener("DOMContentLoaded", o));
      };
      (a.addEventListener("DOMContentLoaded", o), (t._reactRetry = o));
    }
  }
  function We(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return t;
  }
  var af = null;
  function ry(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return t;
          n--;
        } else a === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function oy(t, n, a) {
    switch (((n = Vo(a)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Zs(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    rc(t);
  }
  var Ye = new Map(),
    ly = new Set();
  function Lo(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var zn = Q.d;
  Q.d = { f: $T, r: JT, D: tE, C: eE, L: nE, m: iE, X: sE, S: aE, M: rE };
  function $T() {
    var t = zn.f(),
      n = Co();
    return t || n;
  }
  function JT(t) {
    var n = ia(t);
    n !== null && n.tag === 5 && n.type === "form" ? Mp(n) : zn.r(t);
  }
  var Pa = typeof document > "u" ? null : document;
  function cy(t, n, a) {
    var o = Pa;
    if (o && typeof n == "string" && n) {
      var c = Pe(n);
      ((c = 'link[rel="' + t + '"][href="' + c + '"]'),
        typeof a == "string" && (c += '[crossorigin="' + a + '"]'),
        ly.has(c) ||
          (ly.add(c),
          (t = { rel: t, crossOrigin: a, href: n }),
          o.querySelector(c) === null &&
            ((n = o.createElement("link")),
            oe(n, "link", t),
            ee(n),
            o.head.appendChild(n))));
    }
  }
  function tE(t) {
    (zn.D(t), cy("dns-prefetch", t, null));
  }
  function eE(t, n) {
    (zn.C(t, n), cy("preconnect", t, n));
  }
  function nE(t, n, a) {
    zn.L(t, n, a);
    var o = Pa;
    if (o && t && n) {
      var c = 'link[rel="preload"][as="' + Pe(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((c += '[imagesrcset="' + Pe(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (c += '[imagesizes="' + Pe(a.imageSizes) + '"]'))
        : (c += '[href="' + Pe(t) + '"]');
      var d = c;
      switch (n) {
        case "style":
          d = Ba(t);
          break;
        case "script":
          d = ka(t);
      }
      Ye.has(d) ||
        ((t = g(
          {
            rel: "preload",
            href: n === "image" && a && a.imageSrcSet ? void 0 : t,
            as: n,
          },
          a,
        )),
        Ye.set(d, t),
        o.querySelector(c) !== null ||
          (n === "style" && o.querySelector(Ws(d))) ||
          (n === "script" && o.querySelector(Is(d))) ||
          ((n = o.createElement("link")),
          oe(n, "link", t),
          ee(n),
          o.head.appendChild(n)));
    }
  }
  function iE(t, n) {
    zn.m(t, n);
    var a = Pa;
    if (a && t) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        c =
          'link[rel="modulepreload"][as="' + Pe(o) + '"][href="' + Pe(t) + '"]',
        d = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = ka(t);
      }
      if (
        !Ye.has(d) &&
        ((t = g({ rel: "modulepreload", href: t }, n)),
        Ye.set(d, t),
        a.querySelector(c) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Is(d))) return;
        }
        ((o = a.createElement("link")),
          oe(o, "link", t),
          ee(o),
          a.head.appendChild(o));
      }
    }
  }
  function aE(t, n, a) {
    zn.S(t, n, a);
    var o = Pa;
    if (o && t) {
      var c = aa(o).hoistableStyles,
        d = Ba(t);
      n = n || "default";
      var y = c.get(d);
      if (!y) {
        var S = { loading: 0, preload: null };
        if ((y = o.querySelector(Ws(d)))) S.loading = 5;
        else {
          ((t = g({ rel: "stylesheet", href: t, "data-precedence": n }, a)),
            (a = Ye.get(d)) && sf(t, a));
          var M = (y = o.createElement("link"));
          (ee(M),
            oe(M, "link", t),
            (M._p = new Promise(function (B, q) {
              ((M.onload = B), (M.onerror = q));
            })),
            M.addEventListener("load", function () {
              S.loading |= 1;
            }),
            M.addEventListener("error", function () {
              S.loading |= 2;
            }),
            (S.loading |= 4),
            zo(y, n, o));
        }
        ((y = { type: "stylesheet", instance: y, count: 1, state: S }),
          c.set(d, y));
      }
    }
  }
  function sE(t, n) {
    zn.X(t, n);
    var a = Pa;
    if (a && t) {
      var o = aa(a).hoistableScripts,
        c = ka(t),
        d = o.get(c);
      d ||
        ((d = a.querySelector(Is(c))),
        d ||
          ((t = g({ src: t, async: !0 }, n)),
          (n = Ye.get(c)) && rf(t, n),
          (d = a.createElement("script")),
          ee(d),
          oe(d, "link", t),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function rE(t, n) {
    zn.M(t, n);
    var a = Pa;
    if (a && t) {
      var o = aa(a).hoistableScripts,
        c = ka(t),
        d = o.get(c);
      d ||
        ((d = a.querySelector(Is(c))),
        d ||
          ((t = g({ src: t, async: !0, type: "module" }, n)),
          (n = Ye.get(c)) && rf(t, n),
          (d = a.createElement("script")),
          ee(d),
          oe(d, "link", t),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function uy(t, n, a, o) {
    var c = (c = st.current) ? Lo(c) : null;
    if (!c) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = Ba(a.href)),
            (a = aa(c).hoistableStyles),
            (o = a.get(n)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              a.set(n, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = Ba(a.href);
          var d = aa(c).hoistableStyles,
            y = d.get(t);
          if (
            (y ||
              ((c = c.ownerDocument || c),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(t, y),
              (d = c.querySelector(Ws(t))) &&
                !d._p &&
                ((y.instance = d), (y.state.loading = 5)),
              Ye.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Ye.set(t, a),
                d || oE(c, t, a, y.state))),
            n && o === null)
          )
            throw Error(r(528, ""));
          return y;
        }
        if (n && o !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = ka(a)),
              (a = aa(c).hoistableScripts),
              (o = a.get(n)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(n, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ba(t) {
    return 'href="' + Pe(t) + '"';
  }
  function Ws(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function fy(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function oE(t, n, a, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (o.loading = 1)
      : ((n = t.createElement("link")),
        (o.preload = n),
        n.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        oe(n, "link", a),
        ee(n),
        t.head.appendChild(n));
  }
  function ka(t) {
    return '[src="' + Pe(t) + '"]';
  }
  function Is(t) {
    return "script[async]" + t;
  }
  function dy(t, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + Pe(a.href) + '"]');
          if (o) return ((n.instance = o), ee(o), o);
          var c = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (t.ownerDocument || t).createElement("style")),
            ee(o),
            oe(o, "style", c),
            zo(o, a.precedence, t),
            (n.instance = o)
          );
        case "stylesheet":
          c = Ba(a.href);
          var d = t.querySelector(Ws(c));
          if (d) return ((n.state.loading |= 4), (n.instance = d), ee(d), d);
          ((o = fy(a)),
            (c = Ye.get(c)) && sf(o, c),
            (d = (t.ownerDocument || t).createElement("link")),
            ee(d));
          var y = d;
          return (
            (y._p = new Promise(function (S, M) {
              ((y.onload = S), (y.onerror = M));
            })),
            oe(d, "link", o),
            (n.state.loading |= 4),
            zo(d, a.precedence, t),
            (n.instance = d)
          );
        case "script":
          return (
            (d = ka(a.src)),
            (c = t.querySelector(Is(d)))
              ? ((n.instance = c), ee(c), c)
              : ((o = a),
                (c = Ye.get(d)) && ((o = g({}, a)), rf(o, c)),
                (t = t.ownerDocument || t),
                (c = t.createElement("script")),
                ee(c),
                oe(c, "link", o),
                t.head.appendChild(c),
                (n.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((o = n.instance), (n.state.loading |= 4), zo(o, a.precedence, t));
    return n.instance;
  }
  function zo(t, n, a) {
    for (
      var o = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        c = o.length ? o[o.length - 1] : null,
        d = c,
        y = 0;
      y < o.length;
      y++
    ) {
      var S = o[y];
      if (S.dataset.precedence === n) d = S;
      else if (d !== c) break;
    }
    d
      ? d.parentNode.insertBefore(t, d.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(t, n.firstChild));
  }
  function sf(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title));
  }
  function rf(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity));
  }
  var Po = null;
  function hy(t, n, a) {
    if (Po === null) {
      var o = new Map(),
        c = (Po = new Map());
      c.set(a, o);
    } else ((c = Po), (o = c.get(a)), o || ((o = new Map()), c.set(a, o)));
    if (o.has(t)) return o;
    for (
      o.set(t, null), a = a.getElementsByTagName(t), c = 0;
      c < a.length;
      c++
    ) {
      var d = a[c];
      if (
        !(
          d[us] ||
          d[ue] ||
          (t === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = d.getAttribute(n) || "";
        y = t + y;
        var S = o.get(y);
        S ? S.push(d) : o.set(y, [d]);
      }
    }
    return o;
  }
  function my(t, n, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        n === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function lE(t, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        return n.rel === "stylesheet"
          ? ((t = n.disabled), typeof n.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function py(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var $s = null;
  function cE() {}
  function uE(t, n, a) {
    if ($s === null) throw Error(r(475));
    var o = $s;
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var c = Ba(a.href),
          d = t.querySelector(Ws(c));
        if (d) {
          ((t = d._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (o.count++, (o = Bo.bind(o)), t.then(o, o)),
            (n.state.loading |= 4),
            (n.instance = d),
            ee(d));
          return;
        }
        ((d = t.ownerDocument || t),
          (a = fy(a)),
          (c = Ye.get(c)) && sf(a, c),
          (d = d.createElement("link")),
          ee(d));
        var y = d;
        ((y._p = new Promise(function (S, M) {
          ((y.onload = S), (y.onerror = M));
        })),
          oe(d, "link", a),
          (n.instance = d));
      }
      (o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (o.count++,
          (n = Bo.bind(o)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  function fE() {
    if ($s === null) throw Error(r(475));
    var t = $s;
    return (
      t.stylesheets && t.count === 0 && of(t, t.stylesheets),
      0 < t.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && of(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                ((t.unsuspend = null), o());
              }
            }, 6e4);
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function Bo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) of(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var ko = null;
  function of(t, n) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ko = new Map()),
        n.forEach(dE, t),
        (ko = null),
        Bo.call(t)));
  }
  function dE(t, n) {
    if (!(n.state.loading & 4)) {
      var a = ko.get(t);
      if (a) var o = a.get(null);
      else {
        ((a = new Map()), ko.set(t, a));
        for (
          var c = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            d = 0;
          d < c.length;
          d++
        ) {
          var y = c[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (a.set(y.dataset.precedence, y), (o = y));
        }
        o && a.set(null, o);
      }
      ((c = n.instance),
        (y = c.getAttribute("data-precedence")),
        (d = a.get(y) || o),
        d === o && a.set(null, c),
        a.set(y, c),
        this.count++,
        (o = Bo.bind(this)),
        c.addEventListener("load", o),
        c.addEventListener("error", o),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(c, t.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var Js = {
    $$typeof: O,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function hE(t, n, a, o, c, d, y, S) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = nc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = nc(0)),
      (this.hiddenUpdates = nc(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }
  function gy(t, n, a, o, c, d, y, S, M, B, q, K) {
    return (
      (t = new hE(t, n, a, y, S, M, B, K)),
      (n = 1),
      d === !0 && (n |= 24),
      (d = Re(3, null, null, n)),
      (t.current = d),
      (d.stateNode = t),
      (n = Hc()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (d.memoizedState = { element: o, isDehydrated: a, cache: n }),
      Fc(d),
      t
    );
  }
  function yy(t) {
    return t ? ((t = ga), t) : ga;
  }
  function vy(t, n, a, o, c, d) {
    ((c = yy(c)),
      o.context === null ? (o.context = c) : (o.pendingContext = c),
      (o = Wn(n)),
      (o.payload = { element: a }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (a = In(t, o, n)),
      a !== null && (je(a, t, n), Ds(a, t, n)));
  }
  function by(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function lf(t, n) {
    (by(t, n), (t = t.alternate) && by(t, n));
  }
  function xy(t) {
    if (t.tag === 13) {
      var n = pa(t, 67108864);
      (n !== null && je(n, t, 67108864), lf(t, 67108864));
    }
  }
  var Uo = !0;
  function mE(t, n, a, o) {
    var c = L.T;
    L.T = null;
    var d = Q.p;
    try {
      ((Q.p = 2), cf(t, n, a, o));
    } finally {
      ((Q.p = d), (L.T = c));
    }
  }
  function pE(t, n, a, o) {
    var c = L.T;
    L.T = null;
    var d = Q.p;
    try {
      ((Q.p = 8), cf(t, n, a, o));
    } finally {
      ((Q.p = d), (L.T = c));
    }
  }
  function cf(t, n, a, o) {
    if (Uo) {
      var c = uf(o);
      if (c === null) (Zu(t, n, o, Ho, a), wy(t, o));
      else if (yE(c, t, n, a, o)) o.stopPropagation();
      else if ((wy(t, o), n & 4 && -1 < gE.indexOf(t))) {
        for (; c !== null; ) {
          var d = ia(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var y = Ci(d.pendingLanes);
                  if (y !== 0) {
                    var S = d;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; y; ) {
                      var M = 1 << (31 - Ae(y));
                      ((S.entanglements[1] |= M), (y &= ~M));
                    }
                    (dn(d), (Dt & 6) === 0 && ((Eo = on() + 500), Xs(0)));
                  }
                }
                break;
              case 13:
                ((S = pa(d, 2)), S !== null && je(S, d, 2), Co(), lf(d, 2));
            }
          if (((d = uf(o)), d === null && Zu(t, n, o, Ho, a), d === c)) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Zu(t, n, o, null, a);
    }
  }
  function uf(t) {
    return ((t = mc(t)), ff(t));
  }
  var Ho = null;
  function ff(t) {
    if (((Ho = null), (t = na(t)), t !== null)) {
      var n = u(t);
      if (n === null) t = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((t = f(n)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return ((Ho = t), null);
  }
  function Sy(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ew()) {
          case Lh:
            return 2;
          case zh:
            return 8;
          case jr:
          case nw:
            return 32;
          case Ph:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var df = !1,
    ui = null,
    fi = null,
    di = null,
    tr = new Map(),
    er = new Map(),
    hi = [],
    gE =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function wy(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        ui = null;
        break;
      case "dragenter":
      case "dragleave":
        fi = null;
        break;
      case "mouseover":
      case "mouseout":
        di = null;
        break;
      case "pointerover":
      case "pointerout":
        tr.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        er.delete(n.pointerId);
    }
  }
  function nr(t, n, a, o, c, d) {
    return t === null || t.nativeEvent !== d
      ? ((t = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [c],
        }),
        n !== null && ((n = ia(n)), n !== null && xy(n)),
        t)
      : ((t.eventSystemFlags |= o),
        (n = t.targetContainers),
        c !== null && n.indexOf(c) === -1 && n.push(c),
        t);
  }
  function yE(t, n, a, o, c) {
    switch (n) {
      case "focusin":
        return ((ui = nr(ui, t, n, a, o, c)), !0);
      case "dragenter":
        return ((fi = nr(fi, t, n, a, o, c)), !0);
      case "mouseover":
        return ((di = nr(di, t, n, a, o, c)), !0);
      case "pointerover":
        var d = c.pointerId;
        return (tr.set(d, nr(tr.get(d) || null, t, n, a, o, c)), !0);
      case "gotpointercapture":
        return (
          (d = c.pointerId),
          er.set(d, nr(er.get(d) || null, t, n, a, o, c)),
          !0
        );
    }
    return !1;
  }
  function Ty(t) {
    var n = na(t.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = f(a)), n !== null)) {
            ((t.blockedOn = n),
              uw(t.priority, function () {
                if (a.tag === 13) {
                  var o = Ne();
                  o = ic(o);
                  var c = pa(a, o);
                  (c !== null && je(c, a, o), lf(a, o));
                }
              }));
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qo(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var a = uf(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var o = new a.constructor(a.type, a);
        ((hc = o), a.target.dispatchEvent(o), (hc = null));
      } else return ((n = ia(a)), n !== null && xy(n), (t.blockedOn = a), !1);
      n.shift();
    }
    return !0;
  }
  function Ey(t, n, a) {
    qo(t) && a.delete(n);
  }
  function vE() {
    ((df = !1),
      ui !== null && qo(ui) && (ui = null),
      fi !== null && qo(fi) && (fi = null),
      di !== null && qo(di) && (di = null),
      tr.forEach(Ey),
      er.forEach(Ey));
  }
  function Go(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      df ||
        ((df = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, vE)));
  }
  var Yo = null;
  function Ay(t) {
    Yo !== t &&
      ((Yo = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Yo === t && (Yo = null);
        for (var n = 0; n < t.length; n += 3) {
          var a = t[n],
            o = t[n + 1],
            c = t[n + 2];
          if (typeof o != "function") {
            if (ff(o || a) === null) continue;
            break;
          }
          var d = ia(a);
          d !== null &&
            (t.splice(n, 3),
            (n -= 3),
            uu(d, { pending: !0, data: c, method: a.method, action: o }, o, c));
        }
      }));
  }
  function ir(t) {
    function n(M) {
      return Go(M, t);
    }
    (ui !== null && Go(ui, t),
      fi !== null && Go(fi, t),
      di !== null && Go(di, t),
      tr.forEach(n),
      er.forEach(n));
    for (var a = 0; a < hi.length; a++) {
      var o = hi[a];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < hi.length && ((a = hi[0]), a.blockedOn === null); )
      (Ty(a), a.blockedOn === null && hi.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (o = 0; o < a.length; o += 3) {
        var c = a[o],
          d = a[o + 1],
          y = c[be] || null;
        if (typeof d == "function") y || Ay(a);
        else if (y) {
          var S = null;
          if (d && d.hasAttribute("formAction")) {
            if (((c = d), (y = d[be] || null))) S = y.formAction;
            else if (ff(c) !== null) continue;
          } else S = y.action;
          (typeof S == "function" ? (a[o + 1] = S) : (a.splice(o, 3), (o -= 3)),
            Ay(a));
        }
      }
  }
  function hf(t) {
    this._internalRoot = t;
  }
  ((Fo.prototype.render = hf.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(r(409));
      var a = n.current,
        o = Ne();
      vy(a, o, t, n, null, null);
    }),
    (Fo.prototype.unmount = hf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          (vy(t.current, 2, null, t, null, null), Co(), (n[ea] = null));
        }
      }));
  function Fo(t) {
    this._internalRoot = t;
  }
  Fo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = qh();
      t = { blockedOn: null, target: t, priority: n };
      for (var a = 0; a < hi.length && n !== 0 && n < hi[a].priority; a++);
      (hi.splice(a, 0, t), a === 0 && Ty(t));
    }
  };
  var Cy = i.version;
  if (Cy !== "19.1.0") throw Error(r(527, Cy, "19.1.0"));
  Q.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = p(n)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var bE = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xo.isDisabled && Xo.supportsFiber)
      try {
        ((os = Xo.inject(bE)), (Ee = Xo));
      } catch {}
  }
  return (
    (sr.createRoot = function (t, n) {
      if (!l(t)) throw Error(r(299));
      var a = !1,
        o = "",
        c = qp,
        d = Gp,
        y = Yp,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks)),
        (n = gy(t, 1, !1, null, null, a, o, c, d, y, S, null)),
        (t[ea] = n.current),
        Qu(t),
        new hf(n)
      );
    }),
    (sr.hydrateRoot = function (t, n, a) {
      if (!l(t)) throw Error(r(299));
      var o = !1,
        c = "",
        d = qp,
        y = Gp,
        S = Yp,
        M = null,
        B = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (o = !0),
          a.identifierPrefix !== void 0 && (c = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (d = a.onUncaughtError),
          a.onCaughtError !== void 0 && (y = a.onCaughtError),
          a.onRecoverableError !== void 0 && (S = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (M = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (B = a.formState)),
        (n = gy(t, 1, !0, n, a ?? null, o, c, d, y, S, M, B)),
        (n.context = yy(null)),
        (a = n.current),
        (o = Ne()),
        (o = ic(o)),
        (c = Wn(o)),
        (c.callback = null),
        In(a, c, o),
        (a = o),
        (n.current.lanes = a),
        cs(n, a),
        dn(n),
        (t[ea] = n.current),
        Qu(t),
        new Fo(n)
      );
    }),
    (sr.version = "19.1.0"),
    sr
  );
}
var zy;
function DE() {
  if (zy) return pf.exports;
  zy = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (i) {
        console.error(i);
      }
  }
  return (e(), (pf.exports = ME()), pf.exports);
}
var OE = DE(),
  Ll = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  NE = {
    setTimeout: (e, i) => setTimeout(e, i),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, i) => setInterval(e, i),
    clearInterval: (e) => clearInterval(e),
  },
  jE = class {
    #t = NE;
    #n = !1;
    setTimeoutProvider(e) {
      this.#t = e;
    }
    setTimeout(e, i) {
      return this.#t.setTimeout(e, i);
    }
    clearTimeout(e) {
      this.#t.clearTimeout(e);
    }
    setInterval(e, i) {
      return this.#t.setInterval(e, i);
    }
    clearInterval(e) {
      this.#t.clearInterval(e);
    }
  },
  Jf = new jE();
function _E(e) {
  setTimeout(e, 0);
}
var zl = typeof window > "u" || "Deno" in globalThis;
function Je() {}
function VE(e, i) {
  return typeof e == "function" ? e(i) : e;
}
function LE(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function zE(e, i) {
  return Math.max(e + (i || 0) - Date.now(), 0);
}
function td(e, i) {
  return typeof e == "function" ? e(i) : e;
}
function PE(e, i) {
  return typeof e == "function" ? e(i) : e;
}
function Py(e, i) {
  const {
    type: s = "all",
    exact: r,
    fetchStatus: l,
    predicate: u,
    queryKey: f,
    stale: h,
  } = e;
  if (f) {
    if (r) {
      if (i.queryHash !== Pd(f, i.options)) return !1;
    } else if (!yr(i.queryKey, f)) return !1;
  }
  if (s !== "all") {
    const p = i.isActive();
    if ((s === "active" && !p) || (s === "inactive" && p)) return !1;
  }
  return !(
    (typeof h == "boolean" && i.isStale() !== h) ||
    (l && l !== i.state.fetchStatus) ||
    (u && !u(i))
  );
}
function By(e, i) {
  const { exact: s, status: r, predicate: l, mutationKey: u } = e;
  if (u) {
    if (!i.options.mutationKey) return !1;
    if (s) {
      if (gr(i.options.mutationKey) !== gr(u)) return !1;
    } else if (!yr(i.options.mutationKey, u)) return !1;
  }
  return !((r && i.state.status !== r) || (l && !l(i)));
}
function Pd(e, i) {
  return (i?.queryKeyHashFn || gr)(e);
}
function gr(e) {
  return JSON.stringify(e, (i, s) =>
    ed(s)
      ? Object.keys(s)
          .sort()
          .reduce((r, l) => ((r[l] = s[l]), r), {})
      : s,
  );
}
function yr(e, i) {
  return e === i
    ? !0
    : typeof e != typeof i
      ? !1
      : e && i && typeof e == "object" && typeof i == "object"
        ? Object.keys(i).every((s) => yr(e[s], i[s]))
        : !1;
}
var BE = Object.prototype.hasOwnProperty;
function Z0(e, i, s = 0) {
  if (e === i) return e;
  if (s > 500) return i;
  const r = ky(e) && ky(i);
  if (!r && !(ed(e) && ed(i))) return i;
  const u = (r ? e : Object.keys(e)).length,
    f = r ? i : Object.keys(i),
    h = f.length,
    p = r ? new Array(h) : {};
  let m = 0;
  for (let g = 0; g < h; g++) {
    const v = r ? g : f[g],
      x = e[v],
      T = i[v];
    if (x === T) {
      ((p[v] = x), (r ? g < u : BE.call(e, v)) && m++);
      continue;
    }
    if (
      x === null ||
      T === null ||
      typeof x != "object" ||
      typeof T != "object"
    ) {
      p[v] = T;
      continue;
    }
    const C = Z0(x, T, s + 1);
    ((p[v] = C), C === x && m++);
  }
  return u === h && m === u ? e : p;
}
function ky(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ed(e) {
  if (!Uy(e)) return !1;
  const i = e.constructor;
  if (i === void 0) return !0;
  const s = i.prototype;
  return !(
    !Uy(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Uy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function kE(e) {
  return new Promise((i) => {
    Jf.setTimeout(i, e);
  });
}
function UE(e, i, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(e, i)
    : s.structuralSharing !== !1
      ? Z0(e, i)
      : i;
}
function HE(e, i, s = 0) {
  const r = [...e, i];
  return s && r.length > s ? r.slice(1) : r;
}
function qE(e, i, s = 0) {
  const r = [i, ...e];
  return s && r.length > s ? r.slice(0, -1) : r;
}
var Bd = Symbol();
function W0(e, i) {
  return !e.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !e.queryFn || e.queryFn === Bd
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function GE(e, i, s) {
  let r = !1,
    l;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (l ??= i()),
        r ||
          ((r = !0),
          l.aborted ? s() : l.addEventListener("abort", s, { once: !0 })),
        l
      ),
    }),
    e
  );
}
var YE = class extends Ll {
    #t;
    #n;
    #e;
    constructor() {
      (super(),
        (this.#e = (e) => {
          if (!zl && window.addEventListener) {
            const i = () => e();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#e);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), (this.#n = void 0));
    }
    setEventListener(e) {
      ((this.#e = e),
        this.#n?.(),
        (this.#n = e((i) => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#t !== e && ((this.#t = e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((i) => {
        i(e);
      });
    }
    isFocused() {
      return typeof this.#t == "boolean"
        ? this.#t
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  I0 = new YE();
function FE() {
  let e, i;
  const s = new Promise((l, u) => {
    ((e = l), (i = u));
  });
  ((s.status = "pending"), s.catch(() => {}));
  function r(l) {
    (Object.assign(s, l), delete s.resolve, delete s.reject);
  }
  return (
    (s.resolve = (l) => {
      (r({ status: "fulfilled", value: l }), e(l));
    }),
    (s.reject = (l) => {
      (r({ status: "rejected", reason: l }), i(l));
    }),
    s
  );
}
var XE = _E;
function KE() {
  let e = [],
    i = 0,
    s = (h) => {
      h();
    },
    r = (h) => {
      h();
    },
    l = XE;
  const u = (h) => {
      i
        ? e.push(h)
        : l(() => {
            s(h);
          });
    },
    f = () => {
      const h = e;
      ((e = []),
        h.length &&
          l(() => {
            r(() => {
              h.forEach((p) => {
                s(p);
              });
            });
          }));
    };
  return {
    batch: (h) => {
      let p;
      i++;
      try {
        p = h();
      } finally {
        (i--, i || f());
      }
      return p;
    },
    batchCalls:
      (h) =>
      (...p) => {
        u(() => {
          h(...p);
        });
      },
    schedule: u,
    setNotifyFunction: (h) => {
      s = h;
    },
    setBatchNotifyFunction: (h) => {
      r = h;
    },
    setScheduler: (h) => {
      l = h;
    },
  };
}
var pe = KE(),
  QE = class extends Ll {
    #t = !0;
    #n;
    #e;
    constructor() {
      (super(),
        (this.#e = (e) => {
          if (!zl && window.addEventListener) {
            const i = () => e(!0),
              s = () => e(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", s, !1),
              () => {
                (window.removeEventListener("online", i),
                  window.removeEventListener("offline", s));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#e);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), (this.#n = void 0));
    }
    setEventListener(e) {
      ((this.#e = e), this.#n?.(), (this.#n = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#t !== e &&
        ((this.#t = e),
        this.listeners.forEach((s) => {
          s(e);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  vl = new QE();
function ZE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function $0(e) {
  return (e ?? "online") === "online" ? vl.isOnline() : !0;
}
var nd = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function J0(e) {
  let i = !1,
    s = 0,
    r;
  const l = FE(),
    u = () => l.status !== "pending",
    f = (E) => {
      if (!u()) {
        const R = new nd(E);
        (x(R), e.onCancel?.(R));
      }
    },
    h = () => {
      i = !0;
    },
    p = () => {
      i = !1;
    },
    m = () =>
      I0.isFocused() &&
      (e.networkMode === "always" || vl.isOnline()) &&
      e.canRun(),
    g = () => $0(e.networkMode) && e.canRun(),
    v = (E) => {
      u() || (r?.(), l.resolve(E));
    },
    x = (E) => {
      u() || (r?.(), l.reject(E));
    },
    T = () =>
      new Promise((E) => {
        ((r = (R) => {
          (u() || m()) && E(R);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), u() || e.onContinue?.());
      }),
    C = () => {
      if (u()) return;
      let E;
      const R = s === 0 ? e.initialPromise : void 0;
      try {
        E = R ?? e.fn();
      } catch (N) {
        E = Promise.reject(N);
      }
      Promise.resolve(E)
        .then(v)
        .catch((N) => {
          if (u()) return;
          const j = e.retry ?? (zl ? 0 : 3),
            O = e.retryDelay ?? ZE,
            P = typeof O == "function" ? O(s, N) : O,
            V =
              j === !0 ||
              (typeof j == "number" && s < j) ||
              (typeof j == "function" && j(s, N));
          if (i || !V) {
            x(N);
            return;
          }
          (s++,
            e.onFail?.(s, N),
            kE(P)
              .then(() => (m() ? void 0 : T()))
              .then(() => {
                i ? x(N) : C();
              }));
        });
    };
  return {
    promise: l,
    status: () => l.status,
    cancel: f,
    continue: () => (r?.(), l),
    cancelRetry: h,
    continueRetry: p,
    canStart: g,
    start: () => (g() ? C() : T().then(C), l),
  };
}
var tb = class {
    #t;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        LE(this.gcTime) &&
          (this.#t = Jf.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (zl ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#t && (Jf.clearTimeout(this.#t), (this.#t = void 0));
    }
  },
  WE = class extends tb {
    #t;
    #n;
    #e;
    #a;
    #i;
    #r;
    #o;
    constructor(e) {
      (super(),
        (this.#o = !1),
        (this.#r = e.defaultOptions),
        this.setOptions(e.options),
        (this.observers = []),
        (this.#a = e.client),
        (this.#e = this.#a.getQueryCache()),
        (this.queryKey = e.queryKey),
        (this.queryHash = e.queryHash),
        (this.#t = qy(this.options)),
        (this.state = e.state ?? this.#t),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#i?.promise;
    }
    setOptions(e) {
      if (
        ((this.options = { ...this.#r, ...e }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const i = qy(this.options);
        i.data !== void 0 &&
          (this.setState(Hy(i.data, i.dataUpdatedAt)), (this.#t = i));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#e.remove(this);
    }
    setData(e, i) {
      const s = UE(this.state.data, e, this.options);
      return (
        this.#s({
          data: s,
          type: "success",
          dataUpdatedAt: i?.updatedAt,
          manual: i?.manual,
        }),
        s
      );
    }
    setState(e, i) {
      this.#s({ type: "setState", state: e, setStateOptions: i });
    }
    cancel(e) {
      const i = this.#i?.promise;
      return (this.#i?.cancel(e), i ? i.then(Je).catch(Je) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#t));
    }
    isActive() {
      return this.observers.some((e) => PE(e.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Bd ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => td(e.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => e.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(e = 0) {
      return this.state.data === void 0
        ? !0
        : e === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !zE(this.state.dataUpdatedAt, e);
    }
    onFocus() {
      (this.observers
        .find((i) => i.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue());
    }
    onOnline() {
      (this.observers
        .find((i) => i.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue());
    }
    addObserver(e) {
      this.observers.includes(e) ||
        (this.observers.push(e),
        this.clearGcTimeout(),
        this.#e.notify({ type: "observerAdded", query: this, observer: e }));
    }
    removeObserver(e) {
      this.observers.includes(e) &&
        ((this.observers = this.observers.filter((i) => i !== e)),
        this.observers.length ||
          (this.#i &&
            (this.#o ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()),
          this.scheduleGc()),
        this.#e.notify({ type: "observerRemoved", query: this, observer: e }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: "invalidate" });
    }
    async fetch(e, i) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#i?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && i?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#i) return (this.#i.continueRetry(), this.#i.promise);
      }
      if ((e && this.setOptions(e), !this.options.queryFn)) {
        const h = this.observers.find((p) => p.options.queryFn);
        h && this.setOptions(h.options);
      }
      const s = new AbortController(),
        r = (h) => {
          Object.defineProperty(h, "signal", {
            enumerable: !0,
            get: () => ((this.#o = !0), s.signal),
          });
        },
        l = () => {
          const h = W0(this.options, i),
            m = (() => {
              const g = {
                client: this.#a,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (r(g), g);
            })();
          return (
            (this.#o = !1),
            this.options.persister ? this.options.persister(h, m, this) : h(m)
          );
        },
        f = (() => {
          const h = {
            fetchOptions: i,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#a,
            state: this.state,
            fetchFn: l,
          };
          return (r(h), h);
        })();
      (this.options.behavior?.onFetch(f, this),
        (this.#n = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== f.fetchOptions?.meta) &&
          this.#s({ type: "fetch", meta: f.fetchOptions?.meta }),
        (this.#i = J0({
          initialPromise: i?.initialPromise,
          fn: f.fetchFn,
          onCancel: (h) => {
            (h instanceof nd &&
              h.revert &&
              this.setState({ ...this.#n, fetchStatus: "idle" }),
              s.abort());
          },
          onFail: (h, p) => {
            this.#s({ type: "failed", failureCount: h, error: p });
          },
          onPause: () => {
            this.#s({ type: "pause" });
          },
          onContinue: () => {
            this.#s({ type: "continue" });
          },
          retry: f.options.retry,
          retryDelay: f.options.retryDelay,
          networkMode: f.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const h = await this.#i.start();
        if (h === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(h),
          this.#e.config.onSuccess?.(h, this),
          this.#e.config.onSettled?.(h, this.state.error, this),
          h
        );
      } catch (h) {
        if (h instanceof nd) {
          if (h.silent) return this.#i.promise;
          if (h.revert) {
            if (this.state.data === void 0) throw h;
            return this.state.data;
          }
        }
        throw (
          this.#s({ type: "error", error: h }),
          this.#e.config.onError?.(h, this),
          this.#e.config.onSettled?.(this.state.data, h, this),
          h
        );
      } finally {
        this.scheduleGc();
      }
    }
    #s(e) {
      const i = (s) => {
        switch (e.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...IE(s.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case "success":
            const r = {
              ...s,
              ...Hy(e.data, e.dataUpdatedAt),
              dataUpdateCount: s.dataUpdateCount + 1,
              ...(!e.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#n = e.manual ? r : void 0), r);
          case "error":
            const l = e.error;
            return {
              ...s,
              error: l,
              errorUpdateCount: s.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: s.fetchFailureCount + 1,
              fetchFailureReason: l,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...e.state };
        }
      };
      ((this.state = i(this.state)),
        pe.batch(() => {
          (this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#e.notify({ query: this, type: "updated", action: e }));
        }));
    }
  };
function IE(e, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: $0(i.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Hy(e, i) {
  return {
    data: e,
    dataUpdatedAt: i ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function qy(e) {
  const i =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    s = i !== void 0,
    r = s
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function Gy(e) {
  return {
    onFetch: (i, s) => {
      const r = i.options,
        l = i.fetchOptions?.meta?.fetchMore?.direction,
        u = i.state.data?.pages || [],
        f = i.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        p = 0;
      const m = async () => {
        let g = !1;
        const v = (C) => {
            GE(
              C,
              () => i.signal,
              () => (g = !0),
            );
          },
          x = W0(i.options, i.fetchOptions),
          T = async (C, E, R) => {
            if (g) return Promise.reject();
            if (E == null && C.pages.length) return Promise.resolve(C);
            const j = (() => {
                const F = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: E,
                  direction: R ? "backward" : "forward",
                  meta: i.options.meta,
                };
                return (v(F), F);
              })(),
              O = await x(j),
              { maxPages: P } = i.options,
              V = R ? qE : HE;
            return {
              pages: V(C.pages, O, P),
              pageParams: V(C.pageParams, E, P),
            };
          };
        if (l && u.length) {
          const C = l === "backward",
            E = C ? $E : Yy,
            R = { pages: u, pageParams: f },
            N = E(r, R);
          h = await T(R, N, C);
        } else {
          const C = e ?? u.length;
          do {
            const E = p === 0 ? (f[0] ?? r.initialPageParam) : Yy(r, h);
            if (p > 0 && E == null) break;
            ((h = await T(h, E)), p++);
          } while (p < C);
        }
        return h;
      };
      i.options.persister
        ? (i.fetchFn = () =>
            i.options.persister?.(
              m,
              {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal,
              },
              s,
            ))
        : (i.fetchFn = m);
    },
  };
}
function Yy(e, { pages: i, pageParams: s }) {
  const r = i.length - 1;
  return i.length > 0 ? e.getNextPageParam(i[r], i, s[r], s) : void 0;
}
function $E(e, { pages: i, pageParams: s }) {
  return i.length > 0 ? e.getPreviousPageParam?.(i[0], i, s[0], s) : void 0;
}
var JE = class extends tb {
  #t;
  #n;
  #e;
  #a;
  constructor(e) {
    (super(),
      (this.#t = e.client),
      (this.mutationId = e.mutationId),
      (this.#e = e.mutationCache),
      (this.#n = []),
      (this.state = e.state || tA()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#n.includes(e) ||
      (this.#n.push(e),
      this.clearGcTimeout(),
      this.#e.notify({ type: "observerAdded", mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#n = this.#n.filter((i) => i !== e)),
      this.scheduleGc(),
      this.#e.notify({ type: "observerRemoved", mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#n.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#e.remove(this));
  }
  continue() {
    return this.#a?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    const i = () => {
        this.#i({ type: "continue" });
      },
      s = {
        client: this.#t,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#a = J0({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, s)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (u, f) => {
        this.#i({ type: "failed", failureCount: u, error: f });
      },
      onPause: () => {
        this.#i({ type: "pause" });
      },
      onContinue: i,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#e.canRun(this),
    });
    const r = this.state.status === "pending",
      l = !this.#a.canStart();
    try {
      if (r) i();
      else {
        (this.#i({ type: "pending", variables: e, isPaused: l }),
          this.#e.config.onMutate &&
            (await this.#e.config.onMutate(e, this, s)));
        const f = await this.options.onMutate?.(e, s);
        f !== this.state.context &&
          this.#i({ type: "pending", context: f, variables: e, isPaused: l });
      }
      const u = await this.#a.start();
      return (
        await this.#e.config.onSuccess?.(u, e, this.state.context, this, s),
        await this.options.onSuccess?.(u, e, this.state.context, s),
        await this.#e.config.onSettled?.(
          u,
          null,
          this.state.variables,
          this.state.context,
          this,
          s,
        ),
        await this.options.onSettled?.(u, null, e, this.state.context, s),
        this.#i({ type: "success", data: u }),
        u
      );
    } catch (u) {
      try {
        await this.#e.config.onError?.(u, e, this.state.context, this, s);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onError?.(u, e, this.state.context, s);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.#e.config.onSettled?.(
          void 0,
          u,
          this.state.variables,
          this.state.context,
          this,
          s,
        );
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onSettled?.(void 0, u, e, this.state.context, s);
      } catch (f) {
        Promise.reject(f);
      }
      throw (this.#i({ type: "error", error: u }), u);
    } finally {
      this.#e.runNext(this);
    }
  }
  #i(e) {
    const i = (s) => {
      switch (e.type) {
        case "failed":
          return { ...s, failureCount: e.failureCount, failureReason: e.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: e.error,
            failureCount: s.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = i(this.state)),
      pe.batch(() => {
        (this.#n.forEach((s) => {
          s.onMutationUpdate(e);
        }),
          this.#e.notify({ mutation: this, type: "updated", action: e }));
      }));
  }
};
function tA() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var eA = class extends Ll {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#t = new Set()),
      (this.#n = new Map()),
      (this.#e = 0));
  }
  #t;
  #n;
  #e;
  build(e, i, s) {
    const r = new JE({
      client: e,
      mutationCache: this,
      mutationId: ++this.#e,
      options: e.defaultMutationOptions(i),
      state: s,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#t.add(e);
    const i = Ko(e);
    if (typeof i == "string") {
      const s = this.#n.get(i);
      s ? s.push(e) : this.#n.set(i, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#t.delete(e)) {
      const i = Ko(e);
      if (typeof i == "string") {
        const s = this.#n.get(i);
        if (s)
          if (s.length > 1) {
            const r = s.indexOf(e);
            r !== -1 && s.splice(r, 1);
          } else s[0] === e && this.#n.delete(i);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const i = Ko(e);
    if (typeof i == "string") {
      const r = this.#n.get(i)?.find((l) => l.state.status === "pending");
      return !r || r === e;
    } else return !0;
  }
  runNext(e) {
    const i = Ko(e);
    return typeof i == "string"
      ? (this.#n
          .get(i)
          ?.find((r) => r !== e && r.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    pe.batch(() => {
      (this.#t.forEach((e) => {
        this.notify({ type: "removed", mutation: e });
      }),
        this.#t.clear(),
        this.#n.clear());
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(e) {
    const i = { exact: !0, ...e };
    return this.getAll().find((s) => By(i, s));
  }
  findAll(e = {}) {
    return this.getAll().filter((i) => By(e, i));
  }
  notify(e) {
    pe.batch(() => {
      this.listeners.forEach((i) => {
        i(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((i) => i.state.isPaused);
    return pe.batch(() => Promise.all(e.map((i) => i.continue().catch(Je))));
  }
};
function Ko(e) {
  return e.options.scope?.id;
}
var nA = class extends Ll {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#t = new Map()));
    }
    #t;
    build(e, i, s) {
      const r = i.queryKey,
        l = i.queryHash ?? Pd(r, i);
      let u = this.get(l);
      return (
        u ||
          ((u = new WE({
            client: e,
            queryKey: r,
            queryHash: l,
            options: e.defaultQueryOptions(i),
            state: s,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(u)),
        u
      );
    }
    add(e) {
      this.#t.has(e.queryHash) ||
        (this.#t.set(e.queryHash, e), this.notify({ type: "added", query: e }));
    }
    remove(e) {
      const i = this.#t.get(e.queryHash);
      i &&
        (e.destroy(),
        i === e && this.#t.delete(e.queryHash),
        this.notify({ type: "removed", query: e }));
    }
    clear() {
      pe.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#t.get(e);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(e) {
      const i = { exact: !0, ...e };
      return this.getAll().find((s) => Py(i, s));
    }
    findAll(e = {}) {
      const i = this.getAll();
      return Object.keys(e).length > 0 ? i.filter((s) => Py(e, s)) : i;
    }
    notify(e) {
      pe.batch(() => {
        this.listeners.forEach((i) => {
          i(e);
        });
      });
    }
    onFocus() {
      pe.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      pe.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  iA = class {
    #t;
    #n;
    #e;
    #a;
    #i;
    #r;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#t = e.queryCache || new nA()),
        (this.#n = e.mutationCache || new eA()),
        (this.#e = e.defaultOptions || {}),
        (this.#a = new Map()),
        (this.#i = new Map()),
        (this.#r = 0));
    }
    mount() {
      (this.#r++,
        this.#r === 1 &&
          ((this.#o = I0.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#s = vl.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#t.onOnline());
          }))));
    }
    unmount() {
      (this.#r--,
        this.#r === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#t.findAll({ ...e, fetchStatus: "fetching" }).length;
    }
    isMutating(e) {
      return this.#n.findAll({ ...e, status: "pending" }).length;
    }
    getQueryData(e) {
      const i = this.defaultQueryOptions({ queryKey: e });
      return this.#t.get(i.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      const i = this.defaultQueryOptions(e),
        s = this.#t.build(this, i),
        r = s.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            s.isStaleByTime(td(i.staleTime, s)) &&
            this.prefetchQuery(i),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#t.findAll(e).map(({ queryKey: i, state: s }) => {
        const r = s.data;
        return [i, r];
      });
    }
    setQueryData(e, i, s) {
      const r = this.defaultQueryOptions({ queryKey: e }),
        u = this.#t.get(r.queryHash)?.state.data,
        f = VE(i, u);
      if (f !== void 0)
        return this.#t.build(this, r).setData(f, { ...s, manual: !0 });
    }
    setQueriesData(e, i, s) {
      return pe.batch(() =>
        this.#t
          .findAll(e)
          .map(({ queryKey: r }) => [r, this.setQueryData(r, i, s)]),
      );
    }
    getQueryState(e) {
      const i = this.defaultQueryOptions({ queryKey: e });
      return this.#t.get(i.queryHash)?.state;
    }
    removeQueries(e) {
      const i = this.#t;
      pe.batch(() => {
        i.findAll(e).forEach((s) => {
          i.remove(s);
        });
      });
    }
    resetQueries(e, i) {
      const s = this.#t;
      return pe.batch(
        () => (
          s.findAll(e).forEach((r) => {
            r.reset();
          }),
          this.refetchQueries({ type: "active", ...e }, i)
        ),
      );
    }
    cancelQueries(e, i = {}) {
      const s = { revert: !0, ...i },
        r = pe.batch(() => this.#t.findAll(e).map((l) => l.cancel(s)));
      return Promise.all(r).then(Je).catch(Je);
    }
    invalidateQueries(e, i = {}) {
      return pe.batch(
        () => (
          this.#t.findAll(e).forEach((s) => {
            s.invalidate();
          }),
          e?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                i,
              )
        ),
      );
    }
    refetchQueries(e, i = {}) {
      const s = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
        r = pe.batch(() =>
          this.#t
            .findAll(e)
            .filter((l) => !l.isDisabled() && !l.isStatic())
            .map((l) => {
              let u = l.fetch(void 0, s);
              return (
                s.throwOnError || (u = u.catch(Je)),
                l.state.fetchStatus === "paused" ? Promise.resolve() : u
              );
            }),
        );
      return Promise.all(r).then(Je);
    }
    fetchQuery(e) {
      const i = this.defaultQueryOptions(e);
      i.retry === void 0 && (i.retry = !1);
      const s = this.#t.build(this, i);
      return s.isStaleByTime(td(i.staleTime, s))
        ? s.fetch(i)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Je).catch(Je);
    }
    fetchInfiniteQuery(e) {
      return ((e.behavior = Gy(e.pages)), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Je).catch(Je);
    }
    ensureInfiniteQueryData(e) {
      return ((e.behavior = Gy(e.pages)), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return vl.isOnline()
        ? this.#n.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#n;
    }
    getDefaultOptions() {
      return this.#e;
    }
    setDefaultOptions(e) {
      this.#e = e;
    }
    setQueryDefaults(e, i) {
      this.#a.set(gr(e), { queryKey: e, defaultOptions: i });
    }
    getQueryDefaults(e) {
      const i = [...this.#a.values()],
        s = {};
      return (
        i.forEach((r) => {
          yr(e, r.queryKey) && Object.assign(s, r.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(e, i) {
      this.#i.set(gr(e), { mutationKey: e, defaultOptions: i });
    }
    getMutationDefaults(e) {
      const i = [...this.#i.values()],
        s = {};
      return (
        i.forEach((r) => {
          yr(e, r.mutationKey) && Object.assign(s, r.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const i = {
        ...this.#e.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        i.queryHash || (i.queryHash = Pd(i.queryKey, i)),
        i.refetchOnReconnect === void 0 &&
          (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === Bd && (i.enabled = !1),
        i
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#e.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#t.clear(), this.#n.clear());
    }
  },
  w = zd();
const yi = K0(w),
  kd = SE({ __proto__: null, default: yi }, [w]);
var aA = w.createContext(void 0),
  sA = ({ client: e, children: i }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    b.jsx(aA.Provider, { value: e, children: i })
  );
const rA = 1,
  oA = 1e6;
let xf = 0;
function lA() {
  return ((xf = (xf + 1) % Number.MAX_SAFE_INTEGER), xf.toString());
}
const Sf = new Map(),
  Fy = (e) => {
    if (Sf.has(e)) return;
    const i = setTimeout(() => {
      (Sf.delete(e), fr({ type: "REMOVE_TOAST", toastId: e }));
    }, oA);
    Sf.set(e, i);
  },
  cA = (e, i) => {
    switch (i.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [i.toast, ...e.toasts].slice(0, rA) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((s) =>
            s.id === i.toast.id ? { ...s, ...i.toast } : s,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: s } = i;
        return (
          s
            ? Fy(s)
            : e.toasts.forEach((r) => {
                Fy(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === s || s === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return i.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((s) => s.id !== i.toastId) };
    }
  },
  rl = [];
let ol = { toasts: [] };
function fr(e) {
  ((ol = cA(ol, e)),
    rl.forEach((i) => {
      i(ol);
    }));
}
function uA({ ...e }) {
  const i = lA(),
    s = (l) => fr({ type: "UPDATE_TOAST", toast: { ...l, id: i } }),
    r = () => fr({ type: "DISMISS_TOAST", toastId: i });
  return (
    fr({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: i,
        open: !0,
        onOpenChange: (l) => {
          l || r();
        },
      },
    }),
    { id: i, dismiss: r, update: s }
  );
}
function fA() {
  const [e, i] = w.useState(ol);
  return (
    w.useEffect(
      () => (
        rl.push(i),
        () => {
          const s = rl.indexOf(i);
          s > -1 && rl.splice(s, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: uA,
      dismiss: (s) => fr({ type: "DISMISS_TOAST", toastId: s }),
    }
  );
}
var Pl = Q0();
const dA = K0(Pl);
function kt(e, i, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (l) {
    if ((e?.(l), s === !1 || !l.defaultPrevented)) return i?.(l);
  };
}
function Xy(e, i) {
  if (typeof e == "function") return e(i);
  e != null && (e.current = i);
}
function Ud(...e) {
  return (i) => {
    let s = !1;
    const r = e.map((l) => {
      const u = Xy(l, i);
      return (!s && typeof u == "function" && (s = !0), u);
    });
    if (s)
      return () => {
        for (let l = 0; l < r.length; l++) {
          const u = r[l];
          typeof u == "function" ? u() : Xy(e[l], null);
        }
      };
  };
}
function ve(...e) {
  return w.useCallback(Ud(...e), e);
}
function hA(e, i) {
  const s = w.createContext(i),
    r = (u) => {
      const { children: f, ...h } = u,
        p = w.useMemo(() => h, Object.values(h));
      return b.jsx(s.Provider, { value: p, children: f });
    };
  r.displayName = e + "Provider";
  function l(u) {
    const f = w.useContext(s);
    if (f) return f;
    if (i !== void 0) return i;
    throw new Error(`\`${u}\` must be used within \`${e}\``);
  }
  return [r, l];
}
function Er(e, i = []) {
  let s = [];
  function r(u, f) {
    const h = w.createContext(f),
      p = s.length;
    s = [...s, f];
    const m = (v) => {
      const { scope: x, children: T, ...C } = v,
        E = x?.[e]?.[p] || h,
        R = w.useMemo(() => C, Object.values(C));
      return b.jsx(E.Provider, { value: R, children: T });
    };
    m.displayName = u + "Provider";
    function g(v, x) {
      const T = x?.[e]?.[p] || h,
        C = w.useContext(T);
      if (C) return C;
      if (f !== void 0) return f;
      throw new Error(`\`${v}\` must be used within \`${u}\``);
    }
    return [m, g];
  }
  const l = () => {
    const u = s.map((f) => w.createContext(f));
    return function (h) {
      const p = h?.[e] || u;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...h, [e]: p } }), [h, p]);
    };
  };
  return ((l.scopeName = e), [r, mA(l, ...i)]);
}
function mA(...e) {
  const i = e[0];
  if (e.length === 1) return i;
  const s = () => {
    const r = e.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (u) {
      const f = r.reduce((h, { useScope: p, scopeName: m }) => {
        const v = p(u)[`__scope${m}`];
        return { ...h, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return ((s.scopeName = i.scopeName), s);
}
function bl(e) {
  const i = pA(e),
    s = w.forwardRef((r, l) => {
      const { children: u, ...f } = r,
        h = w.Children.toArray(u),
        p = h.find(yA);
      if (p) {
        const m = p.props.children,
          g = h.map((v) =>
            v === p
              ? w.Children.count(m) > 1
                ? w.Children.only(null)
                : w.isValidElement(m)
                  ? m.props.children
                  : null
              : v,
          );
        return b.jsx(i, {
          ...f,
          ref: l,
          children: w.isValidElement(m) ? w.cloneElement(m, void 0, g) : null,
        });
      }
      return b.jsx(i, { ...f, ref: l, children: u });
    });
  return ((s.displayName = `${e}.Slot`), s);
}
function pA(e) {
  const i = w.forwardRef((s, r) => {
    const { children: l, ...u } = s;
    if (w.isValidElement(l)) {
      const f = bA(l),
        h = vA(u, l.props);
      return (
        l.type !== w.Fragment && (h.ref = r ? Ud(r, f) : f),
        w.cloneElement(l, h)
      );
    }
    return w.Children.count(l) > 1 ? w.Children.only(null) : null;
  });
  return ((i.displayName = `${e}.SlotClone`), i);
}
var eb = Symbol("radix.slottable");
function gA(e) {
  const i = ({ children: s }) => b.jsx(b.Fragment, { children: s });
  return ((i.displayName = `${e}.Slottable`), (i.__radixId = eb), i);
}
function yA(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === eb
  );
}
function vA(e, i) {
  const s = { ...i };
  for (const r in i) {
    const l = e[r],
      u = i[r];
    /^on[A-Z]/.test(r)
      ? l && u
        ? (s[r] = (...h) => {
            const p = u(...h);
            return (l(...h), p);
          })
        : l && (s[r] = l)
      : r === "style"
        ? (s[r] = { ...l, ...u })
        : r === "className" && (s[r] = [l, u].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function bA(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    s = i && "isReactWarning" in i && i.isReactWarning;
  return s
    ? e.ref
    : ((i = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (s = i && "isReactWarning" in i && i.isReactWarning),
      s ? e.props.ref : e.props.ref || e.ref);
}
function xA(e) {
  const i = e + "CollectionProvider",
    [s, r] = Er(i),
    [l, u] = s(i, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (E) => {
      const { scope: R, children: N } = E,
        j = yi.useRef(null),
        O = yi.useRef(new Map()).current;
      return b.jsx(l, { scope: R, itemMap: O, collectionRef: j, children: N });
    };
  f.displayName = i;
  const h = e + "CollectionSlot",
    p = bl(h),
    m = yi.forwardRef((E, R) => {
      const { scope: N, children: j } = E,
        O = u(h, N),
        P = ve(R, O.collectionRef);
      return b.jsx(p, { ref: P, children: j });
    });
  m.displayName = h;
  const g = e + "CollectionItemSlot",
    v = "data-radix-collection-item",
    x = bl(g),
    T = yi.forwardRef((E, R) => {
      const { scope: N, children: j, ...O } = E,
        P = yi.useRef(null),
        V = ve(R, P),
        F = u(g, N);
      return (
        yi.useEffect(
          () => (
            F.itemMap.set(P, { ref: P, ...O }),
            () => {
              F.itemMap.delete(P);
            }
          ),
        ),
        b.jsx(x, { [v]: "", ref: V, children: j })
      );
    });
  T.displayName = g;
  function C(E) {
    const R = u(e + "CollectionConsumer", E);
    return yi.useCallback(() => {
      const j = R.collectionRef.current;
      if (!j) return [];
      const O = Array.from(j.querySelectorAll(`[${v}]`));
      return Array.from(R.itemMap.values()).sort(
        (F, Z) => O.indexOf(F.ref.current) - O.indexOf(Z.ref.current),
      );
    }, [R.collectionRef, R.itemMap]);
  }
  return [{ Provider: f, Slot: m, ItemSlot: T }, C, r];
}
var SA = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Wt = SA.reduce((e, i) => {
    const s = bl(`Primitive.${i}`),
      r = w.forwardRef((l, u) => {
        const { asChild: f, ...h } = l,
          p = f ? s : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          b.jsx(p, { ...h, ref: u })
        );
      });
    return ((r.displayName = `Primitive.${i}`), { ...e, [i]: r });
  }, {});
function nb(e, i) {
  e && Pl.flushSync(() => e.dispatchEvent(i));
}
function vn(e) {
  const i = w.useRef(e);
  return (
    w.useEffect(() => {
      i.current = e;
    }),
    w.useMemo(
      () =>
        (...s) =>
          i.current?.(...s),
      [],
    )
  );
}
function wA(e, i = globalThis?.document) {
  const s = vn(e);
  w.useEffect(() => {
    const r = (l) => {
      l.key === "Escape" && s(l);
    };
    return (
      i.addEventListener("keydown", r, { capture: !0 }),
      () => i.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [s, i]);
}
var TA = "DismissableLayer",
  id = "dismissableLayer.update",
  EA = "dismissableLayer.pointerDownOutside",
  AA = "dismissableLayer.focusOutside",
  Ky,
  ib = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Bl = w.forwardRef((e, i) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: l,
        onFocusOutside: u,
        onInteractOutside: f,
        onDismiss: h,
        ...p
      } = e,
      m = w.useContext(ib),
      [g, v] = w.useState(null),
      x = g?.ownerDocument ?? globalThis?.document,
      [, T] = w.useState({}),
      C = ve(i, (Z) => v(Z)),
      E = Array.from(m.layers),
      [R] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      N = E.indexOf(R),
      j = g ? E.indexOf(g) : -1,
      O = m.layersWithOutsidePointerEventsDisabled.size > 0,
      P = j >= N,
      V = RA((Z) => {
        const H = Z.target,
          J = [...m.branches].some((lt) => lt.contains(H));
        !P || J || (l?.(Z), f?.(Z), Z.defaultPrevented || h?.());
      }, x),
      F = MA((Z) => {
        const H = Z.target;
        [...m.branches].some((lt) => lt.contains(H)) ||
          (u?.(Z), f?.(Z), Z.defaultPrevented || h?.());
      }, x);
    return (
      wA((Z) => {
        j === m.layers.size - 1 &&
          (r?.(Z), !Z.defaultPrevented && h && (Z.preventDefault(), h()));
      }, x),
      w.useEffect(() => {
        if (g)
          return (
            s &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ky = x.body.style.pointerEvents),
                (x.body.style.pointerEvents = "none")),
              m.layersWithOutsidePointerEventsDisabled.add(g)),
            m.layers.add(g),
            Qy(),
            () => {
              s &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (x.body.style.pointerEvents = Ky);
            }
          );
      }, [g, x, s, m]),
      w.useEffect(
        () => () => {
          g &&
            (m.layers.delete(g),
            m.layersWithOutsidePointerEventsDisabled.delete(g),
            Qy());
        },
        [g, m],
      ),
      w.useEffect(() => {
        const Z = () => T({});
        return (
          document.addEventListener(id, Z),
          () => document.removeEventListener(id, Z)
        );
      }, []),
      b.jsx(Wt.div, {
        ...p,
        ref: C,
        style: {
          pointerEvents: O ? (P ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: kt(e.onFocusCapture, F.onFocusCapture),
        onBlurCapture: kt(e.onBlurCapture, F.onBlurCapture),
        onPointerDownCapture: kt(
          e.onPointerDownCapture,
          V.onPointerDownCapture,
        ),
      })
    );
  });
Bl.displayName = TA;
var CA = "DismissableLayerBranch",
  ab = w.forwardRef((e, i) => {
    const s = w.useContext(ib),
      r = w.useRef(null),
      l = ve(i, r);
    return (
      w.useEffect(() => {
        const u = r.current;
        if (u)
          return (
            s.branches.add(u),
            () => {
              s.branches.delete(u);
            }
          );
      }, [s.branches]),
      b.jsx(Wt.div, { ...e, ref: l })
    );
  });
ab.displayName = CA;
function RA(e, i = globalThis?.document) {
  const s = vn(e),
    r = w.useRef(!1),
    l = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const u = (h) => {
          if (h.target && !r.current) {
            let p = function () {
              sb(EA, s, m, { discrete: !0 });
            };
            const m = { originalEvent: h };
            h.pointerType === "touch"
              ? (i.removeEventListener("click", l.current),
                (l.current = p),
                i.addEventListener("click", l.current, { once: !0 }))
              : p();
          } else i.removeEventListener("click", l.current);
          r.current = !1;
        },
        f = window.setTimeout(() => {
          i.addEventListener("pointerdown", u);
        }, 0);
      return () => {
        (window.clearTimeout(f),
          i.removeEventListener("pointerdown", u),
          i.removeEventListener("click", l.current));
      };
    }, [i, s]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function MA(e, i = globalThis?.document) {
  const s = vn(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const l = (u) => {
        u.target &&
          !r.current &&
          sb(AA, s, { originalEvent: u }, { discrete: !1 });
      };
      return (
        i.addEventListener("focusin", l),
        () => i.removeEventListener("focusin", l)
      );
    }, [i, s]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Qy() {
  const e = new CustomEvent(id);
  document.dispatchEvent(e);
}
function sb(e, i, s, { discrete: r }) {
  const l = s.originalEvent.target,
    u = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: s });
  (i && l.addEventListener(e, i, { once: !0 }),
    r ? nb(l, u) : l.dispatchEvent(u));
}
var DA = Bl,
  OA = ab,
  Bn = globalThis?.document ? w.useLayoutEffect : () => {},
  NA = "Portal",
  kl = w.forwardRef((e, i) => {
    const { container: s, ...r } = e,
      [l, u] = w.useState(!1);
    Bn(() => u(!0), []);
    const f = s || (l && globalThis?.document?.body);
    return f ? dA.createPortal(b.jsx(Wt.div, { ...r, ref: i }), f) : null;
  });
kl.displayName = NA;
function jA(e, i) {
  return w.useReducer((s, r) => i[s][r] ?? s, e);
}
var Ji = (e) => {
  const { present: i, children: s } = e,
    r = _A(i),
    l =
      typeof s == "function" ? s({ present: r.isPresent }) : w.Children.only(s),
    u = ve(r.ref, VA(l));
  return typeof s == "function" || r.isPresent
    ? w.cloneElement(l, { ref: u })
    : null;
};
Ji.displayName = "Presence";
function _A(e) {
  const [i, s] = w.useState(),
    r = w.useRef(null),
    l = w.useRef(e),
    u = w.useRef("none"),
    f = e ? "mounted" : "unmounted",
    [h, p] = jA(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const m = Qo(r.current);
      u.current = h === "mounted" ? m : "none";
    }, [h]),
    Bn(() => {
      const m = r.current,
        g = l.current;
      if (g !== e) {
        const x = u.current,
          T = Qo(m);
        (e
          ? p("MOUNT")
          : T === "none" || m?.display === "none"
            ? p("UNMOUNT")
            : p(g && x !== T ? "ANIMATION_OUT" : "UNMOUNT"),
          (l.current = e));
      }
    }, [e, p]),
    Bn(() => {
      if (i) {
        let m;
        const g = i.ownerDocument.defaultView ?? window,
          v = (T) => {
            const E = Qo(r.current).includes(CSS.escape(T.animationName));
            if (T.target === i && E && (p("ANIMATION_END"), !l.current)) {
              const R = i.style.animationFillMode;
              ((i.style.animationFillMode = "forwards"),
                (m = g.setTimeout(() => {
                  i.style.animationFillMode === "forwards" &&
                    (i.style.animationFillMode = R);
                })));
            }
          },
          x = (T) => {
            T.target === i && (u.current = Qo(r.current));
          };
        return (
          i.addEventListener("animationstart", x),
          i.addEventListener("animationcancel", v),
          i.addEventListener("animationend", v),
          () => {
            (g.clearTimeout(m),
              i.removeEventListener("animationstart", x),
              i.removeEventListener("animationcancel", v),
              i.removeEventListener("animationend", v));
          }
        );
      } else p("ANIMATION_END");
    }, [i, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: w.useCallback((m) => {
        ((r.current = m ? getComputedStyle(m) : null), s(m));
      }, []),
    }
  );
}
function Qo(e) {
  return e?.animationName || "none";
}
function VA(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    s = i && "isReactWarning" in i && i.isReactWarning;
  return s
    ? e.ref
    : ((i = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (s = i && "isReactWarning" in i && i.isReactWarning),
      s ? e.props.ref : e.props.ref || e.ref);
}
var LA = kd[" useInsertionEffect ".trim().toString()] || Bn;
function rb({ prop: e, defaultProp: i, onChange: s = () => {}, caller: r }) {
  const [l, u, f] = zA({ defaultProp: i, onChange: s }),
    h = e !== void 0,
    p = h ? e : l;
  {
    const g = w.useRef(e !== void 0);
    w.useEffect(() => {
      const v = g.current;
      (v !== h &&
        console.warn(
          `${r} is changing from ${v ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (g.current = h));
    }, [h, r]);
  }
  const m = w.useCallback(
    (g) => {
      if (h) {
        const v = PA(g) ? g(e) : g;
        v !== e && f.current?.(v);
      } else u(g);
    },
    [h, e, u, f],
  );
  return [p, m];
}
function zA({ defaultProp: e, onChange: i }) {
  const [s, r] = w.useState(e),
    l = w.useRef(s),
    u = w.useRef(i);
  return (
    LA(() => {
      u.current = i;
    }, [i]),
    w.useEffect(() => {
      l.current !== s && (u.current?.(s), (l.current = s));
    }, [s, l]),
    [s, r, u]
  );
}
function PA(e) {
  return typeof e == "function";
}
var BA = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  kA = "VisuallyHidden",
  Ul = w.forwardRef((e, i) =>
    b.jsx(Wt.span, { ...e, ref: i, style: { ...BA, ...e.style } }),
  );
Ul.displayName = kA;
var UA = Ul,
  Hd = "ToastProvider",
  [qd, HA, qA] = xA("Toast"),
  [ob] = Er("Toast", [qA]),
  [GA, Hl] = ob(Hd),
  lb = (e) => {
    const {
        __scopeToast: i,
        label: s = "Notification",
        duration: r = 5e3,
        swipeDirection: l = "right",
        swipeThreshold: u = 50,
        children: f,
      } = e,
      [h, p] = w.useState(null),
      [m, g] = w.useState(0),
      v = w.useRef(!1),
      x = w.useRef(!1);
    return (
      s.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Hd}\`. Expected non-empty \`string\`.`,
        ),
      b.jsx(qd.Provider, {
        scope: i,
        children: b.jsx(GA, {
          scope: i,
          label: s,
          duration: r,
          swipeDirection: l,
          swipeThreshold: u,
          toastCount: m,
          viewport: h,
          onViewportChange: p,
          onToastAdd: w.useCallback(() => g((T) => T + 1), []),
          onToastRemove: w.useCallback(() => g((T) => T - 1), []),
          isFocusedToastEscapeKeyDownRef: v,
          isClosePausedRef: x,
          children: f,
        }),
      })
    );
  };
lb.displayName = Hd;
var cb = "ToastViewport",
  YA = ["F8"],
  ad = "toast.viewportPause",
  sd = "toast.viewportResume",
  ub = w.forwardRef((e, i) => {
    const {
        __scopeToast: s,
        hotkey: r = YA,
        label: l = "Notifications ({hotkey})",
        ...u
      } = e,
      f = Hl(cb, s),
      h = HA(s),
      p = w.useRef(null),
      m = w.useRef(null),
      g = w.useRef(null),
      v = w.useRef(null),
      x = ve(i, v, f.onViewportChange),
      T = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      C = f.toastCount > 0;
    (w.useEffect(() => {
      const R = (N) => {
        r.length !== 0 &&
          r.every((O) => N[O] || N.code === O) &&
          v.current?.focus();
      };
      return (
        document.addEventListener("keydown", R),
        () => document.removeEventListener("keydown", R)
      );
    }, [r]),
      w.useEffect(() => {
        const R = p.current,
          N = v.current;
        if (C && R && N) {
          const j = () => {
              if (!f.isClosePausedRef.current) {
                const F = new CustomEvent(ad);
                (N.dispatchEvent(F), (f.isClosePausedRef.current = !0));
              }
            },
            O = () => {
              if (f.isClosePausedRef.current) {
                const F = new CustomEvent(sd);
                (N.dispatchEvent(F), (f.isClosePausedRef.current = !1));
              }
            },
            P = (F) => {
              !R.contains(F.relatedTarget) && O();
            },
            V = () => {
              R.contains(document.activeElement) || O();
            };
          return (
            R.addEventListener("focusin", j),
            R.addEventListener("focusout", P),
            R.addEventListener("pointermove", j),
            R.addEventListener("pointerleave", V),
            window.addEventListener("blur", j),
            window.addEventListener("focus", O),
            () => {
              (R.removeEventListener("focusin", j),
                R.removeEventListener("focusout", P),
                R.removeEventListener("pointermove", j),
                R.removeEventListener("pointerleave", V),
                window.removeEventListener("blur", j),
                window.removeEventListener("focus", O));
            }
          );
        }
      }, [C, f.isClosePausedRef]));
    const E = w.useCallback(
      ({ tabbingDirection: R }) => {
        const j = h().map((O) => {
          const P = O.ref.current,
            V = [P, ...i2(P)];
          return R === "forwards" ? V : V.reverse();
        });
        return (R === "forwards" ? j.reverse() : j).flat();
      },
      [h],
    );
    return (
      w.useEffect(() => {
        const R = v.current;
        if (R) {
          const N = (j) => {
            const O = j.altKey || j.ctrlKey || j.metaKey;
            if (j.key === "Tab" && !O) {
              const V = document.activeElement,
                F = j.shiftKey;
              if (j.target === R && F) {
                m.current?.focus();
                return;
              }
              const J = E({ tabbingDirection: F ? "backwards" : "forwards" }),
                lt = J.findIndex((pt) => pt === V);
              wf(J.slice(lt + 1))
                ? j.preventDefault()
                : F
                  ? m.current?.focus()
                  : g.current?.focus();
            }
          };
          return (
            R.addEventListener("keydown", N),
            () => R.removeEventListener("keydown", N)
          );
        }
      }, [h, E]),
      b.jsxs(OA, {
        ref: p,
        role: "region",
        "aria-label": l.replace("{hotkey}", T),
        tabIndex: -1,
        style: { pointerEvents: C ? void 0 : "none" },
        children: [
          C &&
            b.jsx(rd, {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const R = E({ tabbingDirection: "forwards" });
                wf(R);
              },
            }),
          b.jsx(qd.Slot, {
            scope: s,
            children: b.jsx(Wt.ol, { tabIndex: -1, ...u, ref: x }),
          }),
          C &&
            b.jsx(rd, {
              ref: g,
              onFocusFromOutsideViewport: () => {
                const R = E({ tabbingDirection: "backwards" });
                wf(R);
              },
            }),
        ],
      })
    );
  });
ub.displayName = cb;
var fb = "ToastFocusProxy",
  rd = w.forwardRef((e, i) => {
    const { __scopeToast: s, onFocusFromOutsideViewport: r, ...l } = e,
      u = Hl(fb, s);
    return b.jsx(Ul, {
      tabIndex: 0,
      ...l,
      ref: i,
      style: { position: "fixed" },
      onFocus: (f) => {
        const h = f.relatedTarget;
        !u.viewport?.contains(h) && r();
      },
    });
  });
rd.displayName = fb;
var Ar = "Toast",
  FA = "toast.swipeStart",
  XA = "toast.swipeMove",
  KA = "toast.swipeCancel",
  QA = "toast.swipeEnd",
  db = w.forwardRef((e, i) => {
    const { forceMount: s, open: r, defaultOpen: l, onOpenChange: u, ...f } = e,
      [h, p] = rb({ prop: r, defaultProp: l ?? !0, onChange: u, caller: Ar });
    return b.jsx(Ji, {
      present: s || h,
      children: b.jsx(IA, {
        open: h,
        ...f,
        ref: i,
        onClose: () => p(!1),
        onPause: vn(e.onPause),
        onResume: vn(e.onResume),
        onSwipeStart: kt(e.onSwipeStart, (m) => {
          m.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: kt(e.onSwipeMove, (m) => {
          const { x: g, y: v } = m.detail.delta;
          (m.currentTarget.setAttribute("data-swipe", "move"),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${g}px`,
            ),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${v}px`,
            ));
        }),
        onSwipeCancel: kt(e.onSwipeCancel, (m) => {
          (m.currentTarget.setAttribute("data-swipe", "cancel"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: kt(e.onSwipeEnd, (m) => {
          const { x: g, y: v } = m.detail.delta;
          (m.currentTarget.setAttribute("data-swipe", "end"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${g}px`,
            ),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${v}px`,
            ),
            p(!1));
        }),
      }),
    });
  });
db.displayName = Ar;
var [ZA, WA] = ob(Ar, { onClose() {} }),
  IA = w.forwardRef((e, i) => {
    const {
        __scopeToast: s,
        type: r = "foreground",
        duration: l,
        open: u,
        onClose: f,
        onEscapeKeyDown: h,
        onPause: p,
        onResume: m,
        onSwipeStart: g,
        onSwipeMove: v,
        onSwipeCancel: x,
        onSwipeEnd: T,
        ...C
      } = e,
      E = Hl(Ar, s),
      [R, N] = w.useState(null),
      j = ve(i, ($) => N($)),
      O = w.useRef(null),
      P = w.useRef(null),
      V = l || E.duration,
      F = w.useRef(0),
      Z = w.useRef(V),
      H = w.useRef(0),
      { onToastAdd: J, onToastRemove: lt } = E,
      pt = vn(() => {
        (R?.contains(document.activeElement) && E.viewport?.focus(), f());
      }),
      ct = w.useCallback(
        ($) => {
          !$ ||
            $ === 1 / 0 ||
            (window.clearTimeout(H.current),
            (F.current = new Date().getTime()),
            (H.current = window.setTimeout(pt, $)));
        },
        [pt],
      );
    (w.useEffect(() => {
      const $ = E.viewport;
      if ($) {
        const ft = () => {
            (ct(Z.current), m?.());
          },
          L = () => {
            const Q = new Date().getTime() - F.current;
            ((Z.current = Z.current - Q),
              window.clearTimeout(H.current),
              p?.());
          };
        return (
          $.addEventListener(ad, L),
          $.addEventListener(sd, ft),
          () => {
            ($.removeEventListener(ad, L), $.removeEventListener(sd, ft));
          }
        );
      }
    }, [E.viewport, V, p, m, ct]),
      w.useEffect(() => {
        u && !E.isClosePausedRef.current && ct(V);
      }, [u, V, E.isClosePausedRef, ct]),
      w.useEffect(() => (J(), () => lt()), [J, lt]));
    const wt = w.useMemo(() => (R ? bb(R) : null), [R]);
    return E.viewport
      ? b.jsxs(b.Fragment, {
          children: [
            wt &&
              b.jsx($A, {
                __scopeToast: s,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                children: wt,
              }),
            b.jsx(ZA, {
              scope: s,
              onClose: pt,
              children: Pl.createPortal(
                b.jsx(qd.ItemSlot, {
                  scope: s,
                  children: b.jsx(DA, {
                    asChild: !0,
                    onEscapeKeyDown: kt(h, () => {
                      (E.isFocusedToastEscapeKeyDownRef.current || pt(),
                        (E.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: b.jsx(Wt.li, {
                      tabIndex: 0,
                      "data-state": u ? "open" : "closed",
                      "data-swipe-direction": E.swipeDirection,
                      ...C,
                      ref: j,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: kt(e.onKeyDown, ($) => {
                        $.key === "Escape" &&
                          (h?.($.nativeEvent),
                          $.nativeEvent.defaultPrevented ||
                            ((E.isFocusedToastEscapeKeyDownRef.current = !0),
                            pt()));
                      }),
                      onPointerDown: kt(e.onPointerDown, ($) => {
                        $.button === 0 &&
                          (O.current = { x: $.clientX, y: $.clientY });
                      }),
                      onPointerMove: kt(e.onPointerMove, ($) => {
                        if (!O.current) return;
                        const ft = $.clientX - O.current.x,
                          L = $.clientY - O.current.y,
                          Q = !!P.current,
                          X = ["left", "right"].includes(E.swipeDirection),
                          tt = ["left", "up"].includes(E.swipeDirection)
                            ? Math.min
                            : Math.max,
                          A = X ? tt(0, ft) : 0,
                          G = X ? 0 : tt(0, L),
                          I = $.pointerType === "touch" ? 10 : 2,
                          W = { x: A, y: G },
                          rt = { originalEvent: $, delta: W };
                        Q
                          ? ((P.current = W), Zo(XA, v, rt, { discrete: !1 }))
                          : Zy(W, E.swipeDirection, I)
                            ? ((P.current = W),
                              Zo(FA, g, rt, { discrete: !1 }),
                              $.target.setPointerCapture($.pointerId))
                            : (Math.abs(ft) > I || Math.abs(L) > I) &&
                              (O.current = null);
                      }),
                      onPointerUp: kt(e.onPointerUp, ($) => {
                        const ft = P.current,
                          L = $.target;
                        if (
                          (L.hasPointerCapture($.pointerId) &&
                            L.releasePointerCapture($.pointerId),
                          (P.current = null),
                          (O.current = null),
                          ft)
                        ) {
                          const Q = $.currentTarget,
                            X = { originalEvent: $, delta: ft };
                          (Zy(ft, E.swipeDirection, E.swipeThreshold)
                            ? Zo(QA, T, X, { discrete: !0 })
                            : Zo(KA, x, X, { discrete: !0 }),
                            Q.addEventListener(
                              "click",
                              (tt) => tt.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                E.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  $A = (e) => {
    const { __scopeToast: i, children: s, ...r } = e,
      l = Hl(Ar, i),
      [u, f] = w.useState(!1),
      [h, p] = w.useState(!1);
    return (
      e2(() => f(!0)),
      w.useEffect(() => {
        const m = window.setTimeout(() => p(!0), 1e3);
        return () => window.clearTimeout(m);
      }, []),
      h
        ? null
        : b.jsx(kl, {
            asChild: !0,
            children: b.jsx(Ul, {
              ...r,
              children:
                u && b.jsxs(b.Fragment, { children: [l.label, " ", s] }),
            }),
          })
    );
  },
  JA = "ToastTitle",
  hb = w.forwardRef((e, i) => {
    const { __scopeToast: s, ...r } = e;
    return b.jsx(Wt.div, { ...r, ref: i });
  });
hb.displayName = JA;
var t2 = "ToastDescription",
  mb = w.forwardRef((e, i) => {
    const { __scopeToast: s, ...r } = e;
    return b.jsx(Wt.div, { ...r, ref: i });
  });
mb.displayName = t2;
var pb = "ToastAction",
  gb = w.forwardRef((e, i) => {
    const { altText: s, ...r } = e;
    return s.trim()
      ? b.jsx(vb, {
          altText: s,
          asChild: !0,
          children: b.jsx(Gd, { ...r, ref: i }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${pb}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
gb.displayName = pb;
var yb = "ToastClose",
  Gd = w.forwardRef((e, i) => {
    const { __scopeToast: s, ...r } = e,
      l = WA(yb, s);
    return b.jsx(vb, {
      asChild: !0,
      children: b.jsx(Wt.button, {
        type: "button",
        ...r,
        ref: i,
        onClick: kt(e.onClick, l.onClose),
      }),
    });
  });
Gd.displayName = yb;
var vb = w.forwardRef((e, i) => {
  const { __scopeToast: s, altText: r, ...l } = e;
  return b.jsx(Wt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...l,
    ref: i,
  });
});
function bb(e) {
  const i = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && i.push(r.textContent),
        n2(r))
      ) {
        const l = r.ariaHidden || r.hidden || r.style.display === "none",
          u = r.dataset.radixToastAnnounceExclude === "";
        if (!l)
          if (u) {
            const f = r.dataset.radixToastAnnounceAlt;
            f && i.push(f);
          } else i.push(...bb(r));
      }
    }),
    i
  );
}
function Zo(e, i, s, { discrete: r }) {
  const l = s.originalEvent.currentTarget,
    u = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: s });
  (i && l.addEventListener(e, i, { once: !0 }),
    r ? nb(l, u) : l.dispatchEvent(u));
}
var Zy = (e, i, s = 0) => {
  const r = Math.abs(e.x),
    l = Math.abs(e.y),
    u = r > l;
  return i === "left" || i === "right" ? u && r > s : !u && l > s;
};
function e2(e = () => {}) {
  const i = vn(e);
  Bn(() => {
    let s = 0,
      r = 0;
    return (
      (s = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(i)),
      )),
      () => {
        (window.cancelAnimationFrame(s), window.cancelAnimationFrame(r));
      }
    );
  }, [i]);
}
function n2(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function i2(e) {
  const i = [],
    s = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const l = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || l
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) i.push(s.currentNode);
  return i;
}
function wf(e) {
  const i = document.activeElement;
  return e.some((s) =>
    s === i ? !0 : (s.focus(), document.activeElement !== i),
  );
}
var a2 = lb,
  xb = ub,
  Sb = db,
  wb = hb,
  Tb = mb,
  Eb = gb,
  Ab = Gd;
function Cb(e) {
  var i,
    s,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (i = 0; i < l; i++)
        e[i] && (s = Cb(e[i])) && (r && (r += " "), (r += s));
    } else for (s in e) e[s] && (r && (r += " "), (r += s));
  return r;
}
function Rb() {
  for (var e, i, s = 0, r = "", l = arguments.length; s < l; s++)
    (e = arguments[s]) && (i = Cb(e)) && (r && (r += " "), (r += i));
  return r;
}
const Wy = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Iy = Rb,
  Yd = (e, i) => (s) => {
    var r;
    if (i?.variants == null) return Iy(e, s?.class, s?.className);
    const { variants: l, defaultVariants: u } = i,
      f = Object.keys(l).map((m) => {
        const g = s?.[m],
          v = u?.[m];
        if (g === null) return null;
        const x = Wy(g) || Wy(v);
        return l[m][x];
      }),
      h =
        s &&
        Object.entries(s).reduce((m, g) => {
          let [v, x] = g;
          return (x === void 0 || (m[v] = x), m);
        }, {}),
      p =
        i == null || (r = i.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((m, g) => {
              let { class: v, className: x, ...T } = g;
              return Object.entries(T).every((C) => {
                let [E, R] = C;
                return Array.isArray(R)
                  ? R.includes({ ...u, ...h }[E])
                  : { ...u, ...h }[E] === R;
              })
                ? [...m, v, x]
                : m;
            }, []);
    return Iy(e, f, p, s?.class, s?.className);
  };
const s2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  r2 = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, r) =>
      r ? r.toUpperCase() : s.toLowerCase(),
    ),
  $y = (e) => {
    const i = r2(e);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  Mb = (...e) =>
    e
      .filter((i, s, r) => !!i && i.trim() !== "" && r.indexOf(i) === s)
      .join(" ")
      .trim(),
  o2 = (e) => {
    for (const i in e)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
var l2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const c2 = w.forwardRef(
  (
    {
      color: e = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: u,
      iconNode: f,
      ...h
    },
    p,
  ) =>
    w.createElement(
      "svg",
      {
        ref: p,
        ...l2,
        width: i,
        height: i,
        stroke: e,
        strokeWidth: r ? (Number(s) * 24) / Number(i) : s,
        className: Mb("lucide", l),
        ...(!u && !o2(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...f.map(([m, g]) => w.createElement(m, g)),
        ...(Array.isArray(u) ? u : [u]),
      ],
    ),
);
const xn = (e, i) => {
  const s = w.forwardRef(({ className: r, ...l }, u) =>
    w.createElement(c2, {
      ref: u,
      iconNode: i,
      className: Mb(`lucide-${s2($y(e))}`, `lucide-${e}`, r),
      ...l,
    }),
  );
  return ((s.displayName = $y(e)), s);
};
const u2 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  Jy = xn("calendar", u2);
const f2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  tv = xn("chevron-right", f2);
const d2 = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  h2 = xn("clock", d2);
const m2 = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  Tf = xn("external-link", m2);
const p2 = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  g2 = xn("instagram", p2);
const y2 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  ev = xn("map-pin", y2);
const v2 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  b2 = xn("menu", v2);
const x2 = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  S2 = xn("phone", x2);
const w2 = [
    ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
    ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
    ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }],
  ],
  T2 = xn("scissors", w2);
const E2 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Fd = xn("x", E2),
  A2 = (e, i) => {
    const s = new Array(e.length + i.length);
    for (let r = 0; r < e.length; r++) s[r] = e[r];
    for (let r = 0; r < i.length; r++) s[e.length + r] = i[r];
    return s;
  },
  C2 = (e, i) => ({ classGroupId: e, validator: i }),
  Db = (e = new Map(), i = null, s) => ({
    nextPart: e,
    validators: i,
    classGroupId: s,
  }),
  xl = "-",
  nv = [],
  R2 = "arbitrary..",
  M2 = (e) => {
    const i = O2(e),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (f) => {
        if (f.startsWith("[") && f.endsWith("]")) return D2(f);
        const h = f.split(xl),
          p = h[0] === "" && h.length > 1 ? 1 : 0;
        return Ob(h, p, i);
      },
      getConflictingClassGroupIds: (f, h) => {
        if (h) {
          const p = r[f],
            m = s[f];
          return p ? (m ? A2(m, p) : p) : m || nv;
        }
        return s[f] || nv;
      },
    };
  },
  Ob = (e, i, s) => {
    if (e.length - i === 0) return s.classGroupId;
    const l = e[i],
      u = s.nextPart.get(l);
    if (u) {
      const m = Ob(e, i + 1, u);
      if (m) return m;
    }
    const f = s.validators;
    if (f === null) return;
    const h = i === 0 ? e.join(xl) : e.slice(i).join(xl),
      p = f.length;
    for (let m = 0; m < p; m++) {
      const g = f[m];
      if (g.validator(h)) return g.classGroupId;
    }
  },
  D2 = (e) =>
    e.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const i = e.slice(1, -1),
            s = i.indexOf(":"),
            r = i.slice(0, s);
          return r ? R2 + r : void 0;
        })(),
  O2 = (e) => {
    const { theme: i, classGroups: s } = e;
    return N2(s, i);
  },
  N2 = (e, i) => {
    const s = Db();
    for (const r in e) {
      const l = e[r];
      Xd(l, s, r, i);
    }
    return s;
  },
  Xd = (e, i, s, r) => {
    const l = e.length;
    for (let u = 0; u < l; u++) {
      const f = e[u];
      j2(f, i, s, r);
    }
  },
  j2 = (e, i, s, r) => {
    if (typeof e == "string") {
      _2(e, i, s);
      return;
    }
    if (typeof e == "function") {
      V2(e, i, s, r);
      return;
    }
    L2(e, i, s, r);
  },
  _2 = (e, i, s) => {
    const r = e === "" ? i : Nb(i, e);
    r.classGroupId = s;
  },
  V2 = (e, i, s, r) => {
    if (z2(e)) {
      Xd(e(r), i, s, r);
      return;
    }
    (i.validators === null && (i.validators = []), i.validators.push(C2(s, e)));
  },
  L2 = (e, i, s, r) => {
    const l = Object.entries(e),
      u = l.length;
    for (let f = 0; f < u; f++) {
      const [h, p] = l[f];
      Xd(p, Nb(i, h), s, r);
    }
  },
  Nb = (e, i) => {
    let s = e;
    const r = i.split(xl),
      l = r.length;
    for (let u = 0; u < l; u++) {
      const f = r[u];
      let h = s.nextPart.get(f);
      (h || ((h = Db()), s.nextPart.set(f, h)), (s = h));
    }
    return s;
  },
  z2 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0,
  P2 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      s = Object.create(null),
      r = Object.create(null);
    const l = (u, f) => {
      ((s[u] = f), i++, i > e && ((i = 0), (r = s), (s = Object.create(null))));
    };
    return {
      get(u) {
        let f = s[u];
        if (f !== void 0) return f;
        if ((f = r[u]) !== void 0) return (l(u, f), f);
      },
      set(u, f) {
        u in s ? (s[u] = f) : l(u, f);
      },
    };
  },
  od = "!",
  iv = ":",
  B2 = [],
  av = (e, i, s, r, l) => ({
    modifiers: e,
    hasImportantModifier: i,
    baseClassName: s,
    maybePostfixModifierPosition: r,
    isExternal: l,
  }),
  k2 = (e) => {
    const { prefix: i, experimentalParseClassName: s } = e;
    let r = (l) => {
      const u = [];
      let f = 0,
        h = 0,
        p = 0,
        m;
      const g = l.length;
      for (let E = 0; E < g; E++) {
        const R = l[E];
        if (f === 0 && h === 0) {
          if (R === iv) {
            (u.push(l.slice(p, E)), (p = E + 1));
            continue;
          }
          if (R === "/") {
            m = E;
            continue;
          }
        }
        R === "[" ? f++ : R === "]" ? f-- : R === "(" ? h++ : R === ")" && h--;
      }
      const v = u.length === 0 ? l : l.slice(p);
      let x = v,
        T = !1;
      v.endsWith(od)
        ? ((x = v.slice(0, -1)), (T = !0))
        : v.startsWith(od) && ((x = v.slice(1)), (T = !0));
      const C = m && m > p ? m - p : void 0;
      return av(u, T, x, C);
    };
    if (i) {
      const l = i + iv,
        u = r;
      r = (f) =>
        f.startsWith(l) ? u(f.slice(l.length)) : av(B2, !1, f, void 0, !0);
    }
    if (s) {
      const l = r;
      r = (u) => s({ className: u, parseClassName: l });
    }
    return r;
  },
  U2 = (e) => {
    const i = new Map();
    return (
      e.orderSensitiveModifiers.forEach((s, r) => {
        i.set(s, 1e6 + r);
      }),
      (s) => {
        const r = [];
        let l = [];
        for (let u = 0; u < s.length; u++) {
          const f = s[u],
            h = f[0] === "[",
            p = i.has(f);
          h || p
            ? (l.length > 0 && (l.sort(), r.push(...l), (l = [])), r.push(f))
            : l.push(f);
        }
        return (l.length > 0 && (l.sort(), r.push(...l)), r);
      }
    );
  },
  H2 = (e) => ({
    cache: P2(e.cacheSize),
    parseClassName: k2(e),
    sortModifiers: U2(e),
    ...M2(e),
  }),
  q2 = /\s+/,
  G2 = (e, i) => {
    const {
        parseClassName: s,
        getClassGroupId: r,
        getConflictingClassGroupIds: l,
        sortModifiers: u,
      } = i,
      f = [],
      h = e.trim().split(q2);
    let p = "";
    for (let m = h.length - 1; m >= 0; m -= 1) {
      const g = h[m],
        {
          isExternal: v,
          modifiers: x,
          hasImportantModifier: T,
          baseClassName: C,
          maybePostfixModifierPosition: E,
        } = s(g);
      if (v) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      let R = !!E,
        N = r(R ? C.substring(0, E) : C);
      if (!N) {
        if (!R) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((N = r(C)), !N)) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        R = !1;
      }
      const j = x.length === 0 ? "" : x.length === 1 ? x[0] : u(x).join(":"),
        O = T ? j + od : j,
        P = O + N;
      if (f.indexOf(P) > -1) continue;
      f.push(P);
      const V = l(N, R);
      for (let F = 0; F < V.length; ++F) {
        const Z = V[F];
        f.push(O + Z);
      }
      p = g + (p.length > 0 ? " " + p : p);
    }
    return p;
  },
  Y2 = (...e) => {
    let i = 0,
      s,
      r,
      l = "";
    for (; i < e.length; )
      (s = e[i++]) && (r = jb(s)) && (l && (l += " "), (l += r));
    return l;
  },
  jb = (e) => {
    if (typeof e == "string") return e;
    let i,
      s = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (i = jb(e[r])) && (s && (s += " "), (s += i));
    return s;
  },
  F2 = (e, ...i) => {
    let s, r, l, u;
    const f = (p) => {
        const m = i.reduce((g, v) => v(g), e());
        return (
          (s = H2(m)),
          (r = s.cache.get),
          (l = s.cache.set),
          (u = h),
          h(p)
        );
      },
      h = (p) => {
        const m = r(p);
        if (m) return m;
        const g = G2(p, s);
        return (l(p, g), g);
      };
    return ((u = f), (...p) => u(Y2(...p)));
  },
  X2 = [],
  Jt = (e) => {
    const i = (s) => s[e] || X2;
    return ((i.isThemeGetter = !0), i);
  },
  _b = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Vb = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  K2 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Q2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Z2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  W2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  I2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  $2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  pi = (e) => K2.test(e),
  vt = (e) => !!e && !Number.isNaN(Number(e)),
  gi = (e) => !!e && Number.isInteger(Number(e)),
  Ef = (e) => e.endsWith("%") && vt(e.slice(0, -1)),
  Pn = (e) => Q2.test(e),
  Lb = () => !0,
  J2 = (e) => Z2.test(e) && !W2.test(e),
  Kd = () => !1,
  tC = (e) => I2.test(e),
  eC = (e) => $2.test(e),
  nC = (e) => !nt(e) && !at(e),
  iC = (e) => Ei(e, Bb, Kd),
  nt = (e) => _b.test(e),
  Yi = (e) => Ei(e, kb, J2),
  sv = (e) => Ei(e, fC, vt),
  aC = (e) => Ei(e, Hb, Lb),
  sC = (e) => Ei(e, Ub, Kd),
  rv = (e) => Ei(e, zb, Kd),
  rC = (e) => Ei(e, Pb, eC),
  Wo = (e) => Ei(e, qb, tC),
  at = (e) => Vb.test(e),
  rr = (e) => ta(e, kb),
  oC = (e) => ta(e, Ub),
  ov = (e) => ta(e, zb),
  lC = (e) => ta(e, Bb),
  cC = (e) => ta(e, Pb),
  Io = (e) => ta(e, qb, !0),
  uC = (e) => ta(e, Hb, !0),
  Ei = (e, i, s) => {
    const r = _b.exec(e);
    return r ? (r[1] ? i(r[1]) : s(r[2])) : !1;
  },
  ta = (e, i, s = !1) => {
    const r = Vb.exec(e);
    return r ? (r[1] ? i(r[1]) : s) : !1;
  },
  zb = (e) => e === "position" || e === "percentage",
  Pb = (e) => e === "image" || e === "url",
  Bb = (e) => e === "length" || e === "size" || e === "bg-size",
  kb = (e) => e === "length",
  fC = (e) => e === "number",
  Ub = (e) => e === "family-name",
  Hb = (e) => e === "number" || e === "weight",
  qb = (e) => e === "shadow",
  dC = () => {
    const e = Jt("color"),
      i = Jt("font"),
      s = Jt("text"),
      r = Jt("font-weight"),
      l = Jt("tracking"),
      u = Jt("leading"),
      f = Jt("breakpoint"),
      h = Jt("container"),
      p = Jt("spacing"),
      m = Jt("radius"),
      g = Jt("shadow"),
      v = Jt("inset-shadow"),
      x = Jt("text-shadow"),
      T = Jt("drop-shadow"),
      C = Jt("blur"),
      E = Jt("perspective"),
      R = Jt("aspect"),
      N = Jt("ease"),
      j = Jt("animate"),
      O = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      P = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      V = () => [...P(), at, nt],
      F = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Z = () => ["auto", "contain", "none"],
      H = () => [at, nt, p],
      J = () => [pi, "full", "auto", ...H()],
      lt = () => [gi, "none", "subgrid", at, nt],
      pt = () => ["auto", { span: ["full", gi, at, nt] }, gi, at, nt],
      ct = () => [gi, "auto", at, nt],
      wt = () => ["auto", "min", "max", "fr", at, nt],
      $ = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ft = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      L = () => ["auto", ...H()],
      Q = () => [
        pi,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...H(),
      ],
      X = () => [
        pi,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...H(),
      ],
      tt = () => [
        pi,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...H(),
      ],
      A = () => [e, at, nt],
      G = () => [...P(), ov, rv, { position: [at, nt] }],
      I = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      W = () => ["auto", "cover", "contain", lC, iC, { size: [at, nt] }],
      rt = () => [Ef, rr, Yi],
      dt = () => ["", "none", "full", m, at, nt],
      st = () => ["", vt, rr, Yi],
      Pt = () => ["solid", "dashed", "dotted", "double"],
      Rt = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      Mt = () => [vt, Ef, ov, rv],
      Gn = () => ["", "none", C, at, nt],
      Ke = () => ["none", vt, at, nt],
      rn = () => ["none", vt, at, nt],
      Le = () => [vt, at, nt],
      Yn = () => [pi, "full", ...H()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Pn],
        breakpoint: [Pn],
        color: [Lb],
        container: [Pn],
        "drop-shadow": [Pn],
        ease: ["in", "out", "in-out"],
        font: [nC],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Pn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Pn],
        shadow: [Pn],
        spacing: ["px", vt],
        text: [Pn],
        "text-shadow": [Pn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", pi, nt, at, R] }],
        container: ["container"],
        columns: [{ columns: [vt, nt, at, h] }],
        "break-after": [{ "break-after": O() }],
        "break-before": [{ "break-before": O() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: V() }],
        overflow: [{ overflow: F() }],
        "overflow-x": [{ "overflow-x": F() }],
        "overflow-y": [{ "overflow-y": F() }],
        overscroll: [{ overscroll: Z() }],
        "overscroll-x": [{ "overscroll-x": Z() }],
        "overscroll-y": [{ "overscroll-y": Z() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: J() }],
        "inset-x": [{ "inset-x": J() }],
        "inset-y": [{ "inset-y": J() }],
        start: [{ "inset-s": J(), start: J() }],
        end: [{ "inset-e": J(), end: J() }],
        "inset-bs": [{ "inset-bs": J() }],
        "inset-be": [{ "inset-be": J() }],
        top: [{ top: J() }],
        right: [{ right: J() }],
        bottom: [{ bottom: J() }],
        left: [{ left: J() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [gi, "auto", at, nt] }],
        basis: [{ basis: [pi, "full", "auto", h, ...H()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [vt, pi, "auto", "initial", "none", nt] }],
        grow: [{ grow: ["", vt, at, nt] }],
        shrink: [{ shrink: ["", vt, at, nt] }],
        order: [{ order: [gi, "first", "last", "none", at, nt] }],
        "grid-cols": [{ "grid-cols": lt() }],
        "col-start-end": [{ col: pt() }],
        "col-start": [{ "col-start": ct() }],
        "col-end": [{ "col-end": ct() }],
        "grid-rows": [{ "grid-rows": lt() }],
        "row-start-end": [{ row: pt() }],
        "row-start": [{ "row-start": ct() }],
        "row-end": [{ "row-end": ct() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": wt() }],
        "auto-rows": [{ "auto-rows": wt() }],
        gap: [{ gap: H() }],
        "gap-x": [{ "gap-x": H() }],
        "gap-y": [{ "gap-y": H() }],
        "justify-content": [{ justify: [...$(), "normal"] }],
        "justify-items": [{ "justify-items": [...ft(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ft()] }],
        "align-content": [{ content: ["normal", ...$()] }],
        "align-items": [{ items: [...ft(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ft(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": $() }],
        "place-items": [{ "place-items": [...ft(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ft()] }],
        p: [{ p: H() }],
        px: [{ px: H() }],
        py: [{ py: H() }],
        ps: [{ ps: H() }],
        pe: [{ pe: H() }],
        pbs: [{ pbs: H() }],
        pbe: [{ pbe: H() }],
        pt: [{ pt: H() }],
        pr: [{ pr: H() }],
        pb: [{ pb: H() }],
        pl: [{ pl: H() }],
        m: [{ m: L() }],
        mx: [{ mx: L() }],
        my: [{ my: L() }],
        ms: [{ ms: L() }],
        me: [{ me: L() }],
        mbs: [{ mbs: L() }],
        mbe: [{ mbe: L() }],
        mt: [{ mt: L() }],
        mr: [{ mr: L() }],
        mb: [{ mb: L() }],
        ml: [{ ml: L() }],
        "space-x": [{ "space-x": H() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": H() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: Q() }],
        "inline-size": [{ inline: ["auto", ...X()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...X()] }],
        "max-inline-size": [{ "max-inline": ["none", ...X()] }],
        "block-size": [{ block: ["auto", ...tt()] }],
        "min-block-size": [{ "min-block": ["auto", ...tt()] }],
        "max-block-size": [{ "max-block": ["none", ...tt()] }],
        w: [{ w: [h, "screen", ...Q()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...Q()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [f] }, ...Q()] },
        ],
        h: [{ h: ["screen", "lh", ...Q()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...Q()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...Q()] }],
        "font-size": [{ text: ["base", s, rr, Yi] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, uC, aC] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Ef,
              nt,
            ],
          },
        ],
        "font-family": [{ font: [oC, sC, i] }],
        "font-features": [{ "font-features": [nt] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [l, at, nt] }],
        "line-clamp": [{ "line-clamp": [vt, "none", at, sv] }],
        leading: [{ leading: [u, ...H()] }],
        "list-image": [{ "list-image": ["none", at, nt] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", at, nt] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: A() }],
        "text-color": [{ text: A() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Pt(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [vt, "from-font", "auto", at, Yi] },
        ],
        "text-decoration-color": [{ decoration: A() }],
        "underline-offset": [{ "underline-offset": [vt, "auto", at, nt] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: H() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              at,
              nt,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", at, nt] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: G() }],
        "bg-repeat": [{ bg: I() }],
        "bg-size": [{ bg: W() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  gi,
                  at,
                  nt,
                ],
                radial: ["", at, nt],
                conic: [gi, at, nt],
              },
              cC,
              rC,
            ],
          },
        ],
        "bg-color": [{ bg: A() }],
        "gradient-from-pos": [{ from: rt() }],
        "gradient-via-pos": [{ via: rt() }],
        "gradient-to-pos": [{ to: rt() }],
        "gradient-from": [{ from: A() }],
        "gradient-via": [{ via: A() }],
        "gradient-to": [{ to: A() }],
        rounded: [{ rounded: dt() }],
        "rounded-s": [{ "rounded-s": dt() }],
        "rounded-e": [{ "rounded-e": dt() }],
        "rounded-t": [{ "rounded-t": dt() }],
        "rounded-r": [{ "rounded-r": dt() }],
        "rounded-b": [{ "rounded-b": dt() }],
        "rounded-l": [{ "rounded-l": dt() }],
        "rounded-ss": [{ "rounded-ss": dt() }],
        "rounded-se": [{ "rounded-se": dt() }],
        "rounded-ee": [{ "rounded-ee": dt() }],
        "rounded-es": [{ "rounded-es": dt() }],
        "rounded-tl": [{ "rounded-tl": dt() }],
        "rounded-tr": [{ "rounded-tr": dt() }],
        "rounded-br": [{ "rounded-br": dt() }],
        "rounded-bl": [{ "rounded-bl": dt() }],
        "border-w": [{ border: st() }],
        "border-w-x": [{ "border-x": st() }],
        "border-w-y": [{ "border-y": st() }],
        "border-w-s": [{ "border-s": st() }],
        "border-w-e": [{ "border-e": st() }],
        "border-w-bs": [{ "border-bs": st() }],
        "border-w-be": [{ "border-be": st() }],
        "border-w-t": [{ "border-t": st() }],
        "border-w-r": [{ "border-r": st() }],
        "border-w-b": [{ "border-b": st() }],
        "border-w-l": [{ "border-l": st() }],
        "divide-x": [{ "divide-x": st() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": st() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Pt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Pt(), "hidden", "none"] }],
        "border-color": [{ border: A() }],
        "border-color-x": [{ "border-x": A() }],
        "border-color-y": [{ "border-y": A() }],
        "border-color-s": [{ "border-s": A() }],
        "border-color-e": [{ "border-e": A() }],
        "border-color-bs": [{ "border-bs": A() }],
        "border-color-be": [{ "border-be": A() }],
        "border-color-t": [{ "border-t": A() }],
        "border-color-r": [{ "border-r": A() }],
        "border-color-b": [{ "border-b": A() }],
        "border-color-l": [{ "border-l": A() }],
        "divide-color": [{ divide: A() }],
        "outline-style": [{ outline: [...Pt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [vt, at, nt] }],
        "outline-w": [{ outline: ["", vt, rr, Yi] }],
        "outline-color": [{ outline: A() }],
        shadow: [{ shadow: ["", "none", g, Io, Wo] }],
        "shadow-color": [{ shadow: A() }],
        "inset-shadow": [{ "inset-shadow": ["none", v, Io, Wo] }],
        "inset-shadow-color": [{ "inset-shadow": A() }],
        "ring-w": [{ ring: st() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: A() }],
        "ring-offset-w": [{ "ring-offset": [vt, Yi] }],
        "ring-offset-color": [{ "ring-offset": A() }],
        "inset-ring-w": [{ "inset-ring": st() }],
        "inset-ring-color": [{ "inset-ring": A() }],
        "text-shadow": [{ "text-shadow": ["none", x, Io, Wo] }],
        "text-shadow-color": [{ "text-shadow": A() }],
        opacity: [{ opacity: [vt, at, nt] }],
        "mix-blend": [
          { "mix-blend": [...Rt(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Rt() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [vt] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Mt() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Mt() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": A() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": A() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Mt() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Mt() }],
        "mask-image-t-from-color": [{ "mask-t-from": A() }],
        "mask-image-t-to-color": [{ "mask-t-to": A() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Mt() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Mt() }],
        "mask-image-r-from-color": [{ "mask-r-from": A() }],
        "mask-image-r-to-color": [{ "mask-r-to": A() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Mt() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Mt() }],
        "mask-image-b-from-color": [{ "mask-b-from": A() }],
        "mask-image-b-to-color": [{ "mask-b-to": A() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Mt() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Mt() }],
        "mask-image-l-from-color": [{ "mask-l-from": A() }],
        "mask-image-l-to-color": [{ "mask-l-to": A() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Mt() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Mt() }],
        "mask-image-x-from-color": [{ "mask-x-from": A() }],
        "mask-image-x-to-color": [{ "mask-x-to": A() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Mt() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Mt() }],
        "mask-image-y-from-color": [{ "mask-y-from": A() }],
        "mask-image-y-to-color": [{ "mask-y-to": A() }],
        "mask-image-radial": [{ "mask-radial": [at, nt] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Mt() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Mt() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": A() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": A() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": P() }],
        "mask-image-conic-pos": [{ "mask-conic": [vt] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Mt() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Mt() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": A() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": A() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: G() }],
        "mask-repeat": [{ mask: I() }],
        "mask-size": [{ mask: W() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", at, nt] }],
        filter: [{ filter: ["", "none", at, nt] }],
        blur: [{ blur: Gn() }],
        brightness: [{ brightness: [vt, at, nt] }],
        contrast: [{ contrast: [vt, at, nt] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", T, Io, Wo] }],
        "drop-shadow-color": [{ "drop-shadow": A() }],
        grayscale: [{ grayscale: ["", vt, at, nt] }],
        "hue-rotate": [{ "hue-rotate": [vt, at, nt] }],
        invert: [{ invert: ["", vt, at, nt] }],
        saturate: [{ saturate: [vt, at, nt] }],
        sepia: [{ sepia: ["", vt, at, nt] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", at, nt] }],
        "backdrop-blur": [{ "backdrop-blur": Gn() }],
        "backdrop-brightness": [{ "backdrop-brightness": [vt, at, nt] }],
        "backdrop-contrast": [{ "backdrop-contrast": [vt, at, nt] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", vt, at, nt] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [vt, at, nt] }],
        "backdrop-invert": [{ "backdrop-invert": ["", vt, at, nt] }],
        "backdrop-opacity": [{ "backdrop-opacity": [vt, at, nt] }],
        "backdrop-saturate": [{ "backdrop-saturate": [vt, at, nt] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", vt, at, nt] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": H() }],
        "border-spacing-x": [{ "border-spacing-x": H() }],
        "border-spacing-y": [{ "border-spacing-y": H() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              at,
              nt,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [vt, "initial", at, nt] }],
        ease: [{ ease: ["linear", "initial", N, at, nt] }],
        delay: [{ delay: [vt, at, nt] }],
        animate: [{ animate: ["none", j, at, nt] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [E, at, nt] }],
        "perspective-origin": [{ "perspective-origin": V() }],
        rotate: [{ rotate: Ke() }],
        "rotate-x": [{ "rotate-x": Ke() }],
        "rotate-y": [{ "rotate-y": Ke() }],
        "rotate-z": [{ "rotate-z": Ke() }],
        scale: [{ scale: rn() }],
        "scale-x": [{ "scale-x": rn() }],
        "scale-y": [{ "scale-y": rn() }],
        "scale-z": [{ "scale-z": rn() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Le() }],
        "skew-x": [{ "skew-x": Le() }],
        "skew-y": [{ "skew-y": Le() }],
        transform: [{ transform: [at, nt, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: V() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Yn() }],
        "translate-x": [{ "translate-x": Yn() }],
        "translate-y": [{ "translate-y": Yn() }],
        "translate-z": [{ "translate-z": Yn() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: A() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: A() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              at,
              nt,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": H() }],
        "scroll-mx": [{ "scroll-mx": H() }],
        "scroll-my": [{ "scroll-my": H() }],
        "scroll-ms": [{ "scroll-ms": H() }],
        "scroll-me": [{ "scroll-me": H() }],
        "scroll-mbs": [{ "scroll-mbs": H() }],
        "scroll-mbe": [{ "scroll-mbe": H() }],
        "scroll-mt": [{ "scroll-mt": H() }],
        "scroll-mr": [{ "scroll-mr": H() }],
        "scroll-mb": [{ "scroll-mb": H() }],
        "scroll-ml": [{ "scroll-ml": H() }],
        "scroll-p": [{ "scroll-p": H() }],
        "scroll-px": [{ "scroll-px": H() }],
        "scroll-py": [{ "scroll-py": H() }],
        "scroll-ps": [{ "scroll-ps": H() }],
        "scroll-pe": [{ "scroll-pe": H() }],
        "scroll-pbs": [{ "scroll-pbs": H() }],
        "scroll-pbe": [{ "scroll-pbe": H() }],
        "scroll-pt": [{ "scroll-pt": H() }],
        "scroll-pr": [{ "scroll-pr": H() }],
        "scroll-pb": [{ "scroll-pb": H() }],
        "scroll-pl": [{ "scroll-pl": H() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", at, nt],
          },
        ],
        fill: [{ fill: ["none", ...A()] }],
        "stroke-w": [{ stroke: [vt, rr, Yi, sv] }],
        stroke: [{ stroke: ["none", ...A()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  hC = F2(dC);
function ce(...e) {
  return hC(Rb(e));
}
const mC = a2,
  Gb = w.forwardRef(({ className: e, ...i }, s) =>
    b.jsx(xb, {
      ref: s,
      className: ce(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...i,
    }),
  );
Gb.displayName = xb.displayName;
const pC = Yd(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Yb = w.forwardRef(({ className: e, variant: i, ...s }, r) =>
    b.jsx(Sb, { ref: r, className: ce(pC({ variant: i }), e), ...s }),
  );
Yb.displayName = Sb.displayName;
const gC = w.forwardRef(({ className: e, ...i }, s) =>
  b.jsx(Eb, {
    ref: s,
    className: ce(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...i,
  }),
);
gC.displayName = Eb.displayName;
const Fb = w.forwardRef(({ className: e, ...i }, s) =>
  b.jsx(Ab, {
    ref: s,
    className: ce(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...i,
    children: b.jsx(Fd, { className: "h-4 w-4" }),
  }),
);
Fb.displayName = Ab.displayName;
const Xb = w.forwardRef(({ className: e, ...i }, s) =>
  b.jsx(wb, { ref: s, className: ce("text-sm font-semibold", e), ...i }),
);
Xb.displayName = wb.displayName;
const Kb = w.forwardRef(({ className: e, ...i }, s) =>
  b.jsx(Tb, { ref: s, className: ce("text-sm opacity-90", e), ...i }),
);
Kb.displayName = Tb.displayName;
function yC() {
  const { toasts: e } = fA();
  return b.jsxs(mC, {
    children: [
      e.map(function ({ id: i, title: s, description: r, action: l, ...u }) {
        return b.jsxs(
          Yb,
          {
            ...u,
            children: [
              b.jsxs("div", {
                className: "grid gap-1",
                children: [
                  s && b.jsx(Xb, { children: s }),
                  r && b.jsx(Kb, { children: r }),
                ],
              }),
              l,
              b.jsx(Fb, {}),
            ],
          },
          i,
        );
      }),
      b.jsx(Gb, {}),
    ],
  });
}
var vC = kd[" useId ".trim().toString()] || (() => {}),
  bC = 0;
function Af(e) {
  const [i, s] = w.useState(vC());
  return (
    Bn(() => {
      s((r) => r ?? String(bC++));
    }, [e]),
    e || (i ? `radix-${i}` : "")
  );
}
const xC = ["top", "right", "bottom", "left"],
  Si = Math.min,
  _e = Math.max,
  Sl = Math.round,
  $o = Math.floor,
  gn = (e) => ({ x: e, y: e }),
  SC = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ld(e, i, s) {
  return _e(e, Si(i, s));
}
function kn(e, i) {
  return typeof e == "function" ? e(i) : e;
}
function Un(e) {
  return e.split("-")[0];
}
function ns(e) {
  return e.split("-")[1];
}
function Qd(e) {
  return e === "x" ? "y" : "x";
}
function Zd(e) {
  return e === "y" ? "height" : "width";
}
function pn(e) {
  const i = e[0];
  return i === "t" || i === "b" ? "y" : "x";
}
function Wd(e) {
  return Qd(pn(e));
}
function wC(e, i, s) {
  s === void 0 && (s = !1);
  const r = ns(e),
    l = Wd(e),
    u = Zd(l);
  let f =
    l === "x"
      ? r === (s ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (i.reference[u] > i.floating[u] && (f = wl(f)), [f, wl(f)]);
}
function TC(e) {
  const i = wl(e);
  return [cd(e), i, cd(i)];
}
function cd(e) {
  return e.includes("start")
    ? e.replace("start", "end")
    : e.replace("end", "start");
}
const lv = ["left", "right"],
  cv = ["right", "left"],
  EC = ["top", "bottom"],
  AC = ["bottom", "top"];
function CC(e, i, s) {
  switch (e) {
    case "top":
    case "bottom":
      return s ? (i ? cv : lv) : i ? lv : cv;
    case "left":
    case "right":
      return i ? EC : AC;
    default:
      return [];
  }
}
function RC(e, i, s, r) {
  const l = ns(e);
  let u = CC(Un(e), s === "start", r);
  return (
    l && ((u = u.map((f) => f + "-" + l)), i && (u = u.concat(u.map(cd)))),
    u
  );
}
function wl(e) {
  const i = Un(e);
  return SC[i] + e.slice(i.length);
}
function MC(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Qb(e) {
  return typeof e != "number"
    ? MC(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Tl(e) {
  const { x: i, y: s, width: r, height: l } = e;
  return {
    width: r,
    height: l,
    top: s,
    left: i,
    right: i + r,
    bottom: s + l,
    x: i,
    y: s,
  };
}
function uv(e, i, s) {
  let { reference: r, floating: l } = e;
  const u = pn(i),
    f = Wd(i),
    h = Zd(f),
    p = Un(i),
    m = u === "y",
    g = r.x + r.width / 2 - l.width / 2,
    v = r.y + r.height / 2 - l.height / 2,
    x = r[h] / 2 - l[h] / 2;
  let T;
  switch (p) {
    case "top":
      T = { x: g, y: r.y - l.height };
      break;
    case "bottom":
      T = { x: g, y: r.y + r.height };
      break;
    case "right":
      T = { x: r.x + r.width, y: v };
      break;
    case "left":
      T = { x: r.x - l.width, y: v };
      break;
    default:
      T = { x: r.x, y: r.y };
  }
  switch (ns(i)) {
    case "start":
      T[f] -= x * (s && m ? -1 : 1);
      break;
    case "end":
      T[f] += x * (s && m ? -1 : 1);
      break;
  }
  return T;
}
async function DC(e, i) {
  var s;
  i === void 0 && (i = {});
  const { x: r, y: l, platform: u, rects: f, elements: h, strategy: p } = e,
    {
      boundary: m = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: v = "floating",
      altBoundary: x = !1,
      padding: T = 0,
    } = kn(i, e),
    C = Qb(T),
    R = h[x ? (v === "floating" ? "reference" : "floating") : v],
    N = Tl(
      await u.getClippingRect({
        element:
          (s = await (u.isElement == null ? void 0 : u.isElement(R))) == null ||
          s
            ? R
            : R.contextElement ||
              (await (u.getDocumentElement == null
                ? void 0
                : u.getDocumentElement(h.floating))),
        boundary: m,
        rootBoundary: g,
        strategy: p,
      }),
    ),
    j =
      v === "floating"
        ? { x: r, y: l, width: f.floating.width, height: f.floating.height }
        : f.reference,
    O = await (u.getOffsetParent == null
      ? void 0
      : u.getOffsetParent(h.floating)),
    P = (await (u.isElement == null ? void 0 : u.isElement(O)))
      ? (await (u.getScale == null ? void 0 : u.getScale(O))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    V = Tl(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: j,
            offsetParent: O,
            strategy: p,
          })
        : j,
    );
  return {
    top: (N.top - V.top + C.top) / P.y,
    bottom: (V.bottom - N.bottom + C.bottom) / P.y,
    left: (N.left - V.left + C.left) / P.x,
    right: (V.right - N.right + C.right) / P.x,
  };
}
const OC = 50,
  NC = async (e, i, s) => {
    const {
        placement: r = "bottom",
        strategy: l = "absolute",
        middleware: u = [],
        platform: f,
      } = s,
      h = f.detectOverflow ? f : { ...f, detectOverflow: DC },
      p = await (f.isRTL == null ? void 0 : f.isRTL(i));
    let m = await f.getElementRects({ reference: e, floating: i, strategy: l }),
      { x: g, y: v } = uv(m, r, p),
      x = r,
      T = 0;
    const C = {};
    for (let E = 0; E < u.length; E++) {
      const R = u[E];
      if (!R) continue;
      const { name: N, fn: j } = R,
        {
          x: O,
          y: P,
          data: V,
          reset: F,
        } = await j({
          x: g,
          y: v,
          initialPlacement: r,
          placement: x,
          strategy: l,
          middlewareData: C,
          rects: m,
          platform: h,
          elements: { reference: e, floating: i },
        });
      ((g = O ?? g),
        (v = P ?? v),
        (C[N] = { ...C[N], ...V }),
        F &&
          T < OC &&
          (T++,
          typeof F == "object" &&
            (F.placement && (x = F.placement),
            F.rects &&
              (m =
                F.rects === !0
                  ? await f.getElementRects({
                      reference: e,
                      floating: i,
                      strategy: l,
                    })
                  : F.rects),
            ({ x: g, y: v } = uv(m, x, p))),
          (E = -1)));
    }
    return { x: g, y: v, placement: x, strategy: l, middlewareData: C };
  },
  jC = (e) => ({
    name: "arrow",
    options: e,
    async fn(i) {
      const {
          x: s,
          y: r,
          placement: l,
          rects: u,
          platform: f,
          elements: h,
          middlewareData: p,
        } = i,
        { element: m, padding: g = 0 } = kn(e, i) || {};
      if (m == null) return {};
      const v = Qb(g),
        x = { x: s, y: r },
        T = Wd(l),
        C = Zd(T),
        E = await f.getDimensions(m),
        R = T === "y",
        N = R ? "top" : "left",
        j = R ? "bottom" : "right",
        O = R ? "clientHeight" : "clientWidth",
        P = u.reference[C] + u.reference[T] - x[T] - u.floating[C],
        V = x[T] - u.reference[T],
        F = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m));
      let Z = F ? F[O] : 0;
      (!Z || !(await (f.isElement == null ? void 0 : f.isElement(F)))) &&
        (Z = h.floating[O] || u.floating[C]);
      const H = P / 2 - V / 2,
        J = Z / 2 - E[C] / 2 - 1,
        lt = Si(v[N], J),
        pt = Si(v[j], J),
        ct = lt,
        wt = Z - E[C] - pt,
        $ = Z / 2 - E[C] / 2 + H,
        ft = ld(ct, $, wt),
        L =
          !p.arrow &&
          ns(l) != null &&
          $ !== ft &&
          u.reference[C] / 2 - ($ < ct ? lt : pt) - E[C] / 2 < 0,
        Q = L ? ($ < ct ? $ - ct : $ - wt) : 0;
      return {
        [T]: x[T] + Q,
        data: {
          [T]: ft,
          centerOffset: $ - ft - Q,
          ...(L && { alignmentOffset: Q }),
        },
        reset: L,
      };
    },
  }),
  _C = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(i) {
          var s, r;
          const {
              placement: l,
              middlewareData: u,
              rects: f,
              initialPlacement: h,
              platform: p,
              elements: m,
            } = i,
            {
              mainAxis: g = !0,
              crossAxis: v = !0,
              fallbackPlacements: x,
              fallbackStrategy: T = "bestFit",
              fallbackAxisSideDirection: C = "none",
              flipAlignment: E = !0,
              ...R
            } = kn(e, i);
          if ((s = u.arrow) != null && s.alignmentOffset) return {};
          const N = Un(l),
            j = pn(h),
            O = Un(h) === h,
            P = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
            V = x || (O || !E ? [wl(h)] : TC(h)),
            F = C !== "none";
          !x && F && V.push(...RC(h, E, C, P));
          const Z = [h, ...V],
            H = await p.detectOverflow(i, R),
            J = [];
          let lt = ((r = u.flip) == null ? void 0 : r.overflows) || [];
          if ((g && J.push(H[N]), v)) {
            const $ = wC(l, f, P);
            J.push(H[$[0]], H[$[1]]);
          }
          if (
            ((lt = [...lt, { placement: l, overflows: J }]),
            !J.every(($) => $ <= 0))
          ) {
            var pt, ct;
            const $ = (((pt = u.flip) == null ? void 0 : pt.index) || 0) + 1,
              ft = Z[$];
            if (
              ft &&
              (!(v === "alignment" ? j !== pn(ft) : !1) ||
                lt.every((X) =>
                  pn(X.placement) === j ? X.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: $, overflows: lt },
                reset: { placement: ft },
              };
            let L =
              (ct = lt
                .filter((Q) => Q.overflows[0] <= 0)
                .sort((Q, X) => Q.overflows[1] - X.overflows[1])[0]) == null
                ? void 0
                : ct.placement;
            if (!L)
              switch (T) {
                case "bestFit": {
                  var wt;
                  const Q =
                    (wt = lt
                      .filter((X) => {
                        if (F) {
                          const tt = pn(X.placement);
                          return tt === j || tt === "y";
                        }
                        return !0;
                      })
                      .map((X) => [
                        X.placement,
                        X.overflows
                          .filter((tt) => tt > 0)
                          .reduce((tt, A) => tt + A, 0),
                      ])
                      .sort((X, tt) => X[1] - tt[1])[0]) == null
                      ? void 0
                      : wt[0];
                  Q && (L = Q);
                  break;
                }
                case "initialPlacement":
                  L = h;
                  break;
              }
            if (l !== L) return { reset: { placement: L } };
          }
          return {};
        },
      }
    );
  };
function fv(e, i) {
  return {
    top: e.top - i.height,
    right: e.right - i.width,
    bottom: e.bottom - i.height,
    left: e.left - i.width,
  };
}
function dv(e) {
  return xC.some((i) => e[i] >= 0);
}
const VC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(i) {
          const { rects: s, platform: r } = i,
            { strategy: l = "referenceHidden", ...u } = kn(e, i);
          switch (l) {
            case "referenceHidden": {
              const f = await r.detectOverflow(i, {
                  ...u,
                  elementContext: "reference",
                }),
                h = fv(f, s.reference);
              return {
                data: { referenceHiddenOffsets: h, referenceHidden: dv(h) },
              };
            }
            case "escaped": {
              const f = await r.detectOverflow(i, { ...u, altBoundary: !0 }),
                h = fv(f, s.floating);
              return { data: { escapedOffsets: h, escaped: dv(h) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Zb = new Set(["left", "top"]);
async function LC(e, i) {
  const { placement: s, platform: r, elements: l } = e,
    u = await (r.isRTL == null ? void 0 : r.isRTL(l.floating)),
    f = Un(s),
    h = ns(s),
    p = pn(s) === "y",
    m = Zb.has(f) ? -1 : 1,
    g = u && p ? -1 : 1,
    v = kn(i, e);
  let {
    mainAxis: x,
    crossAxis: T,
    alignmentAxis: C,
  } = typeof v == "number"
    ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis,
      };
  return (
    h && typeof C == "number" && (T = h === "end" ? C * -1 : C),
    p ? { x: T * g, y: x * m } : { x: x * m, y: T * g }
  );
}
const zC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(i) {
          var s, r;
          const { x: l, y: u, placement: f, middlewareData: h } = i,
            p = await LC(i, e);
          return f === ((s = h.offset) == null ? void 0 : s.placement) &&
            (r = h.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: l + p.x, y: u + p.y, data: { ...p, placement: f } };
        },
      }
    );
  },
  PC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(i) {
          const { x: s, y: r, placement: l, platform: u } = i,
            {
              mainAxis: f = !0,
              crossAxis: h = !1,
              limiter: p = {
                fn: (N) => {
                  let { x: j, y: O } = N;
                  return { x: j, y: O };
                },
              },
              ...m
            } = kn(e, i),
            g = { x: s, y: r },
            v = await u.detectOverflow(i, m),
            x = pn(Un(l)),
            T = Qd(x);
          let C = g[T],
            E = g[x];
          if (f) {
            const N = T === "y" ? "top" : "left",
              j = T === "y" ? "bottom" : "right",
              O = C + v[N],
              P = C - v[j];
            C = ld(O, C, P);
          }
          if (h) {
            const N = x === "y" ? "top" : "left",
              j = x === "y" ? "bottom" : "right",
              O = E + v[N],
              P = E - v[j];
            E = ld(O, E, P);
          }
          const R = p.fn({ ...i, [T]: C, [x]: E });
          return {
            ...R,
            data: { x: R.x - s, y: R.y - r, enabled: { [T]: f, [x]: h } },
          };
        },
      }
    );
  },
  BC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(i) {
          const { x: s, y: r, placement: l, rects: u, middlewareData: f } = i,
            { offset: h = 0, mainAxis: p = !0, crossAxis: m = !0 } = kn(e, i),
            g = { x: s, y: r },
            v = pn(l),
            x = Qd(v);
          let T = g[x],
            C = g[v];
          const E = kn(h, i),
            R =
              typeof E == "number"
                ? { mainAxis: E, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...E };
          if (p) {
            const O = x === "y" ? "height" : "width",
              P = u.reference[x] - u.floating[O] + R.mainAxis,
              V = u.reference[x] + u.reference[O] - R.mainAxis;
            T < P ? (T = P) : T > V && (T = V);
          }
          if (m) {
            var N, j;
            const O = x === "y" ? "width" : "height",
              P = Zb.has(Un(l)),
              V =
                u.reference[v] -
                u.floating[O] +
                ((P && ((N = f.offset) == null ? void 0 : N[v])) || 0) +
                (P ? 0 : R.crossAxis),
              F =
                u.reference[v] +
                u.reference[O] +
                (P ? 0 : ((j = f.offset) == null ? void 0 : j[v]) || 0) -
                (P ? R.crossAxis : 0);
            C < V ? (C = V) : C > F && (C = F);
          }
          return { [x]: T, [v]: C };
        },
      }
    );
  },
  kC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(i) {
          var s, r;
          const { placement: l, rects: u, platform: f, elements: h } = i,
            { apply: p = () => {}, ...m } = kn(e, i),
            g = await f.detectOverflow(i, m),
            v = Un(l),
            x = ns(l),
            T = pn(l) === "y",
            { width: C, height: E } = u.floating;
          let R, N;
          v === "top" || v === "bottom"
            ? ((R = v),
              (N =
                x ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((N = v), (R = x === "end" ? "top" : "bottom"));
          const j = E - g.top - g.bottom,
            O = C - g.left - g.right,
            P = Si(E - g[R], j),
            V = Si(C - g[N], O),
            F = !i.middlewareData.shift;
          let Z = P,
            H = V;
          if (
            ((s = i.middlewareData.shift) != null && s.enabled.x && (H = O),
            (r = i.middlewareData.shift) != null && r.enabled.y && (Z = j),
            F && !x)
          ) {
            const lt = _e(g.left, 0),
              pt = _e(g.right, 0),
              ct = _e(g.top, 0),
              wt = _e(g.bottom, 0);
            T
              ? (H =
                  C -
                  2 * (lt !== 0 || pt !== 0 ? lt + pt : _e(g.left, g.right)))
              : (Z =
                  E -
                  2 * (ct !== 0 || wt !== 0 ? ct + wt : _e(g.top, g.bottom)));
          }
          await p({ ...i, availableWidth: H, availableHeight: Z });
          const J = await f.getDimensions(h.floating);
          return C !== J.width || E !== J.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ql() {
  return typeof window < "u";
}
function is(e) {
  return Wb(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ve(e) {
  var i;
  return (
    (e == null || (i = e.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function Sn(e) {
  var i;
  return (i = (Wb(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function Wb(e) {
  return ql() ? e instanceof Node || e instanceof Ve(e).Node : !1;
}
function nn(e) {
  return ql() ? e instanceof Element || e instanceof Ve(e).Element : !1;
}
function qn(e) {
  return ql() ? e instanceof HTMLElement || e instanceof Ve(e).HTMLElement : !1;
}
function hv(e) {
  return !ql() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot;
}
function Cr(e) {
  const { overflow: i, overflowX: s, overflowY: r, display: l } = an(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(i + r + s) &&
    l !== "inline" &&
    l !== "contents"
  );
}
function UC(e) {
  return /^(table|td|th)$/.test(is(e));
}
function Gl(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch {}
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const HC = /transform|translate|scale|rotate|perspective|filter/,
  qC = /paint|layout|strict|content/,
  Fi = (e) => !!e && e !== "none";
let Cf;
function Id(e) {
  const i = nn(e) ? an(e) : e;
  return (
    Fi(i.transform) ||
    Fi(i.translate) ||
    Fi(i.scale) ||
    Fi(i.rotate) ||
    Fi(i.perspective) ||
    (!$d() && (Fi(i.backdropFilter) || Fi(i.filter))) ||
    HC.test(i.willChange || "") ||
    qC.test(i.contain || "")
  );
}
function GC(e) {
  let i = wi(e);
  for (; qn(i) && !Ja(i); ) {
    if (Id(i)) return i;
    if (Gl(i)) return null;
    i = wi(i);
  }
  return null;
}
function $d() {
  return (
    Cf == null &&
      (Cf =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    Cf
  );
}
function Ja(e) {
  return /^(html|body|#document)$/.test(is(e));
}
function an(e) {
  return Ve(e).getComputedStyle(e);
}
function Yl(e) {
  return nn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function wi(e) {
  if (is(e) === "html") return e;
  const i = e.assignedSlot || e.parentNode || (hv(e) && e.host) || Sn(e);
  return hv(i) ? i.host : i;
}
function Ib(e) {
  const i = wi(e);
  return Ja(i)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : qn(i) && Cr(i)
      ? i
      : Ib(i);
}
function vr(e, i, s) {
  var r;
  (i === void 0 && (i = []), s === void 0 && (s = !0));
  const l = Ib(e),
    u = l === ((r = e.ownerDocument) == null ? void 0 : r.body),
    f = Ve(l);
  if (u) {
    const h = ud(f);
    return i.concat(
      f,
      f.visualViewport || [],
      Cr(l) ? l : [],
      h && s ? vr(h) : [],
    );
  } else return i.concat(l, vr(l, [], s));
}
function ud(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function $b(e) {
  const i = an(e);
  let s = parseFloat(i.width) || 0,
    r = parseFloat(i.height) || 0;
  const l = qn(e),
    u = l ? e.offsetWidth : s,
    f = l ? e.offsetHeight : r,
    h = Sl(s) !== u || Sl(r) !== f;
  return (h && ((s = u), (r = f)), { width: s, height: r, $: h });
}
function Jd(e) {
  return nn(e) ? e : e.contextElement;
}
function Wa(e) {
  const i = Jd(e);
  if (!qn(i)) return gn(1);
  const s = i.getBoundingClientRect(),
    { width: r, height: l, $: u } = $b(i);
  let f = (u ? Sl(s.width) : s.width) / r,
    h = (u ? Sl(s.height) : s.height) / l;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: f, y: h }
  );
}
const YC = gn(0);
function Jb(e) {
  const i = Ve(e);
  return !$d() || !i.visualViewport
    ? YC
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function FC(e, i, s) {
  return (i === void 0 && (i = !1), !s || (i && s !== Ve(e)) ? !1 : i);
}
function Ii(e, i, s, r) {
  (i === void 0 && (i = !1), s === void 0 && (s = !1));
  const l = e.getBoundingClientRect(),
    u = Jd(e);
  let f = gn(1);
  i && (r ? nn(r) && (f = Wa(r)) : (f = Wa(e)));
  const h = FC(u, s, r) ? Jb(u) : gn(0);
  let p = (l.left + h.x) / f.x,
    m = (l.top + h.y) / f.y,
    g = l.width / f.x,
    v = l.height / f.y;
  if (u) {
    const x = Ve(u),
      T = r && nn(r) ? Ve(r) : r;
    let C = x,
      E = ud(C);
    for (; E && r && T !== C; ) {
      const R = Wa(E),
        N = E.getBoundingClientRect(),
        j = an(E),
        O = N.left + (E.clientLeft + parseFloat(j.paddingLeft)) * R.x,
        P = N.top + (E.clientTop + parseFloat(j.paddingTop)) * R.y;
      ((p *= R.x),
        (m *= R.y),
        (g *= R.x),
        (v *= R.y),
        (p += O),
        (m += P),
        (C = Ve(E)),
        (E = ud(C)));
    }
  }
  return Tl({ width: g, height: v, x: p, y: m });
}
function Fl(e, i) {
  const s = Yl(e).scrollLeft;
  return i ? i.left + s : Ii(Sn(e)).left + s;
}
function tx(e, i) {
  const s = e.getBoundingClientRect(),
    r = s.left + i.scrollLeft - Fl(e, s),
    l = s.top + i.scrollTop;
  return { x: r, y: l };
}
function XC(e) {
  let { elements: i, rect: s, offsetParent: r, strategy: l } = e;
  const u = l === "fixed",
    f = Sn(r),
    h = i ? Gl(i.floating) : !1;
  if (r === f || (h && u)) return s;
  let p = { scrollLeft: 0, scrollTop: 0 },
    m = gn(1);
  const g = gn(0),
    v = qn(r);
  if ((v || (!v && !u)) && ((is(r) !== "body" || Cr(f)) && (p = Yl(r)), v)) {
    const T = Ii(r);
    ((m = Wa(r)), (g.x = T.x + r.clientLeft), (g.y = T.y + r.clientTop));
  }
  const x = f && !v && !u ? tx(f, p) : gn(0);
  return {
    width: s.width * m.x,
    height: s.height * m.y,
    x: s.x * m.x - p.scrollLeft * m.x + g.x + x.x,
    y: s.y * m.y - p.scrollTop * m.y + g.y + x.y,
  };
}
function KC(e) {
  return Array.from(e.getClientRects());
}
function QC(e) {
  const i = Sn(e),
    s = Yl(e),
    r = e.ownerDocument.body,
    l = _e(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth),
    u = _e(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
  let f = -s.scrollLeft + Fl(e);
  const h = -s.scrollTop;
  return (
    an(r).direction === "rtl" && (f += _e(i.clientWidth, r.clientWidth) - l),
    { width: l, height: u, x: f, y: h }
  );
}
const mv = 25;
function ZC(e, i) {
  const s = Ve(e),
    r = Sn(e),
    l = s.visualViewport;
  let u = r.clientWidth,
    f = r.clientHeight,
    h = 0,
    p = 0;
  if (l) {
    ((u = l.width), (f = l.height));
    const g = $d();
    (!g || (g && i === "fixed")) && ((h = l.offsetLeft), (p = l.offsetTop));
  }
  const m = Fl(r);
  if (m <= 0) {
    const g = r.ownerDocument,
      v = g.body,
      x = getComputedStyle(v),
      T =
        (g.compatMode === "CSS1Compat" &&
          parseFloat(x.marginLeft) + parseFloat(x.marginRight)) ||
        0,
      C = Math.abs(r.clientWidth - v.clientWidth - T);
    C <= mv && (u -= C);
  } else m <= mv && (u += m);
  return { width: u, height: f, x: h, y: p };
}
function WC(e, i) {
  const s = Ii(e, !0, i === "fixed"),
    r = s.top + e.clientTop,
    l = s.left + e.clientLeft,
    u = qn(e) ? Wa(e) : gn(1),
    f = e.clientWidth * u.x,
    h = e.clientHeight * u.y,
    p = l * u.x,
    m = r * u.y;
  return { width: f, height: h, x: p, y: m };
}
function pv(e, i, s) {
  let r;
  if (i === "viewport") r = ZC(e, s);
  else if (i === "document") r = QC(Sn(e));
  else if (nn(i)) r = WC(i, s);
  else {
    const l = Jb(e);
    r = { x: i.x - l.x, y: i.y - l.y, width: i.width, height: i.height };
  }
  return Tl(r);
}
function ex(e, i) {
  const s = wi(e);
  return s === i || !nn(s) || Ja(s)
    ? !1
    : an(s).position === "fixed" || ex(s, i);
}
function IC(e, i) {
  const s = i.get(e);
  if (s) return s;
  let r = vr(e, [], !1).filter((h) => nn(h) && is(h) !== "body"),
    l = null;
  const u = an(e).position === "fixed";
  let f = u ? wi(e) : e;
  for (; nn(f) && !Ja(f); ) {
    const h = an(f),
      p = Id(f);
    (!p && h.position === "fixed" && (l = null),
      (
        u
          ? !p && !l
          : (!p &&
              h.position === "static" &&
              !!l &&
              (l.position === "absolute" || l.position === "fixed")) ||
            (Cr(f) && !p && ex(e, f))
      )
        ? (r = r.filter((g) => g !== f))
        : (l = h),
      (f = wi(f)));
  }
  return (i.set(e, r), r);
}
function $C(e) {
  let { element: i, boundary: s, rootBoundary: r, strategy: l } = e;
  const f = [
      ...(s === "clippingAncestors"
        ? Gl(i)
          ? []
          : IC(i, this._c)
        : [].concat(s)),
      r,
    ],
    h = pv(i, f[0], l);
  let p = h.top,
    m = h.right,
    g = h.bottom,
    v = h.left;
  for (let x = 1; x < f.length; x++) {
    const T = pv(i, f[x], l);
    ((p = _e(T.top, p)),
      (m = Si(T.right, m)),
      (g = Si(T.bottom, g)),
      (v = _e(T.left, v)));
  }
  return { width: m - v, height: g - p, x: v, y: p };
}
function JC(e) {
  const { width: i, height: s } = $b(e);
  return { width: i, height: s };
}
function tR(e, i, s) {
  const r = qn(i),
    l = Sn(i),
    u = s === "fixed",
    f = Ii(e, !0, u, i);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const p = gn(0);
  function m() {
    p.x = Fl(l);
  }
  if (r || (!r && !u))
    if (((is(i) !== "body" || Cr(l)) && (h = Yl(i)), r)) {
      const T = Ii(i, !0, u, i);
      ((p.x = T.x + i.clientLeft), (p.y = T.y + i.clientTop));
    } else l && m();
  u && !r && l && m();
  const g = l && !r && !u ? tx(l, h) : gn(0),
    v = f.left + h.scrollLeft - p.x - g.x,
    x = f.top + h.scrollTop - p.y - g.y;
  return { x: v, y: x, width: f.width, height: f.height };
}
function Rf(e) {
  return an(e).position === "static";
}
function gv(e, i) {
  if (!qn(e) || an(e).position === "fixed") return null;
  if (i) return i(e);
  let s = e.offsetParent;
  return (Sn(e) === s && (s = s.ownerDocument.body), s);
}
function nx(e, i) {
  const s = Ve(e);
  if (Gl(e)) return s;
  if (!qn(e)) {
    let l = wi(e);
    for (; l && !Ja(l); ) {
      if (nn(l) && !Rf(l)) return l;
      l = wi(l);
    }
    return s;
  }
  let r = gv(e, i);
  for (; r && UC(r) && Rf(r); ) r = gv(r, i);
  return r && Ja(r) && Rf(r) && !Id(r) ? s : r || GC(e) || s;
}
const eR = async function (e) {
  const i = this.getOffsetParent || nx,
    s = this.getDimensions,
    r = await s(e.floating);
  return {
    reference: tR(e.reference, await i(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function nR(e) {
  return an(e).direction === "rtl";
}
const iR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: XC,
  getDocumentElement: Sn,
  getClippingRect: $C,
  getOffsetParent: nx,
  getElementRects: eR,
  getClientRects: KC,
  getDimensions: JC,
  getScale: Wa,
  isElement: nn,
  isRTL: nR,
};
function ix(e, i) {
  return (
    e.x === i.x && e.y === i.y && e.width === i.width && e.height === i.height
  );
}
function aR(e, i) {
  let s = null,
    r;
  const l = Sn(e);
  function u() {
    var h;
    (clearTimeout(r), (h = s) == null || h.disconnect(), (s = null));
  }
  function f(h, p) {
    (h === void 0 && (h = !1), p === void 0 && (p = 1), u());
    const m = e.getBoundingClientRect(),
      { left: g, top: v, width: x, height: T } = m;
    if ((h || i(), !x || !T)) return;
    const C = $o(v),
      E = $o(l.clientWidth - (g + x)),
      R = $o(l.clientHeight - (v + T)),
      N = $o(g),
      O = {
        rootMargin: -C + "px " + -E + "px " + -R + "px " + -N + "px",
        threshold: _e(0, Si(1, p)) || 1,
      };
    let P = !0;
    function V(F) {
      const Z = F[0].intersectionRatio;
      if (Z !== p) {
        if (!P) return f();
        Z
          ? f(!1, Z)
          : (r = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      (Z === 1 && !ix(m, e.getBoundingClientRect()) && f(), (P = !1));
    }
    try {
      s = new IntersectionObserver(V, { ...O, root: l.ownerDocument });
    } catch {
      s = new IntersectionObserver(V, O);
    }
    s.observe(e);
  }
  return (f(!0), u);
}
function sR(e, i, s, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: l = !0,
      ancestorResize: u = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = r,
    m = Jd(e),
    g = l || u ? [...(m ? vr(m) : []), ...(i ? vr(i) : [])] : [];
  g.forEach((N) => {
    (l && N.addEventListener("scroll", s, { passive: !0 }),
      u && N.addEventListener("resize", s));
  });
  const v = m && h ? aR(m, s) : null;
  let x = -1,
    T = null;
  f &&
    ((T = new ResizeObserver((N) => {
      let [j] = N;
      (j &&
        j.target === m &&
        T &&
        i &&
        (T.unobserve(i),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var O;
          (O = T) == null || O.observe(i);
        }))),
        s());
    })),
    m && !p && T.observe(m),
    i && T.observe(i));
  let C,
    E = p ? Ii(e) : null;
  p && R();
  function R() {
    const N = Ii(e);
    (E && !ix(E, N) && s(), (E = N), (C = requestAnimationFrame(R)));
  }
  return (
    s(),
    () => {
      var N;
      (g.forEach((j) => {
        (l && j.removeEventListener("scroll", s),
          u && j.removeEventListener("resize", s));
      }),
        v?.(),
        (N = T) == null || N.disconnect(),
        (T = null),
        p && cancelAnimationFrame(C));
    }
  );
}
const rR = zC,
  oR = PC,
  lR = _C,
  cR = kC,
  uR = VC,
  yv = jC,
  fR = BC,
  dR = (e, i, s) => {
    const r = new Map(),
      l = { platform: iR, ...s },
      u = { ...l.platform, _c: r };
    return NC(e, i, { ...l, platform: u });
  };
var hR = typeof document < "u",
  mR = function () {},
  ll = hR ? w.useLayoutEffect : mR;
function El(e, i) {
  if (e === i) return !0;
  if (typeof e != typeof i) return !1;
  if (typeof e == "function" && e.toString() === i.toString()) return !0;
  let s, r, l;
  if (e && i && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((s = e.length), s !== i.length)) return !1;
      for (r = s; r-- !== 0; ) if (!El(e[r], i[r])) return !1;
      return !0;
    }
    if (((l = Object.keys(e)), (s = l.length), s !== Object.keys(i).length))
      return !1;
    for (r = s; r-- !== 0; ) if (!{}.hasOwnProperty.call(i, l[r])) return !1;
    for (r = s; r-- !== 0; ) {
      const u = l[r];
      if (!(u === "_owner" && e.$$typeof) && !El(e[u], i[u])) return !1;
    }
    return !0;
  }
  return e !== e && i !== i;
}
function ax(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vv(e, i) {
  const s = ax(e);
  return Math.round(i * s) / s;
}
function Mf(e) {
  const i = w.useRef(e);
  return (
    ll(() => {
      i.current = e;
    }),
    i
  );
}
function pR(e) {
  e === void 0 && (e = {});
  const {
      placement: i = "bottom",
      strategy: s = "absolute",
      middleware: r = [],
      platform: l,
      elements: { reference: u, floating: f } = {},
      transform: h = !0,
      whileElementsMounted: p,
      open: m,
    } = e,
    [g, v] = w.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [x, T] = w.useState(r);
  El(x, r) || T(r);
  const [C, E] = w.useState(null),
    [R, N] = w.useState(null),
    j = w.useCallback((X) => {
      X !== F.current && ((F.current = X), E(X));
    }, []),
    O = w.useCallback((X) => {
      X !== Z.current && ((Z.current = X), N(X));
    }, []),
    P = u || C,
    V = f || R,
    F = w.useRef(null),
    Z = w.useRef(null),
    H = w.useRef(g),
    J = p != null,
    lt = Mf(p),
    pt = Mf(l),
    ct = Mf(m),
    wt = w.useCallback(() => {
      if (!F.current || !Z.current) return;
      const X = { placement: i, strategy: s, middleware: x };
      (pt.current && (X.platform = pt.current),
        dR(F.current, Z.current, X).then((tt) => {
          const A = { ...tt, isPositioned: ct.current !== !1 };
          $.current &&
            !El(H.current, A) &&
            ((H.current = A),
            Pl.flushSync(() => {
              v(A);
            }));
        }));
    }, [x, i, s, pt, ct]);
  ll(() => {
    m === !1 &&
      H.current.isPositioned &&
      ((H.current.isPositioned = !1), v((X) => ({ ...X, isPositioned: !1 })));
  }, [m]);
  const $ = w.useRef(!1);
  (ll(
    () => (
      ($.current = !0),
      () => {
        $.current = !1;
      }
    ),
    [],
  ),
    ll(() => {
      if ((P && (F.current = P), V && (Z.current = V), P && V)) {
        if (lt.current) return lt.current(P, V, wt);
        wt();
      }
    }, [P, V, wt, lt, J]));
  const ft = w.useMemo(
      () => ({ reference: F, floating: Z, setReference: j, setFloating: O }),
      [j, O],
    ),
    L = w.useMemo(() => ({ reference: P, floating: V }), [P, V]),
    Q = w.useMemo(() => {
      const X = { position: s, left: 0, top: 0 };
      if (!L.floating) return X;
      const tt = vv(L.floating, g.x),
        A = vv(L.floating, g.y);
      return h
        ? {
            ...X,
            transform: "translate(" + tt + "px, " + A + "px)",
            ...(ax(L.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: s, left: tt, top: A };
    }, [s, h, L.floating, g.x, g.y]);
  return w.useMemo(
    () => ({ ...g, update: wt, refs: ft, elements: L, floatingStyles: Q }),
    [g, wt, ft, L, Q],
  );
}
const gR = (e) => {
    function i(s) {
      return {}.hasOwnProperty.call(s, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(s) {
        const { element: r, padding: l } = typeof e == "function" ? e(s) : e;
        return r && i(r)
          ? r.current != null
            ? yv({ element: r.current, padding: l }).fn(s)
            : {}
          : r
            ? yv({ element: r, padding: l }).fn(s)
            : {};
      },
    };
  },
  yR = (e, i) => {
    const s = rR(e);
    return { name: s.name, fn: s.fn, options: [e, i] };
  },
  vR = (e, i) => {
    const s = oR(e);
    return { name: s.name, fn: s.fn, options: [e, i] };
  },
  bR = (e, i) => ({ fn: fR(e).fn, options: [e, i] }),
  xR = (e, i) => {
    const s = lR(e);
    return { name: s.name, fn: s.fn, options: [e, i] };
  },
  SR = (e, i) => {
    const s = cR(e);
    return { name: s.name, fn: s.fn, options: [e, i] };
  },
  wR = (e, i) => {
    const s = uR(e);
    return { name: s.name, fn: s.fn, options: [e, i] };
  },
  TR = (e, i) => {
    const s = gR(e);
    return { name: s.name, fn: s.fn, options: [e, i] };
  };
var ER = "Arrow",
  sx = w.forwardRef((e, i) => {
    const { children: s, width: r = 10, height: l = 5, ...u } = e;
    return b.jsx(Wt.svg, {
      ...u,
      ref: i,
      width: r,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? s : b.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
sx.displayName = ER;
var AR = sx;
function CR(e) {
  const [i, s] = w.useState(void 0);
  return (
    Bn(() => {
      if (e) {
        s({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((l) => {
          if (!Array.isArray(l) || !l.length) return;
          const u = l[0];
          let f, h;
          if ("borderBoxSize" in u) {
            const p = u.borderBoxSize,
              m = Array.isArray(p) ? p[0] : p;
            ((f = m.inlineSize), (h = m.blockSize));
          } else ((f = e.offsetWidth), (h = e.offsetHeight));
          s({ width: f, height: h });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else s(void 0);
    }, [e]),
    i
  );
}
var rx = "Popper",
  [ox, lx] = Er(rx),
  [E4, cx] = ox(rx),
  ux = "PopperAnchor",
  fx = w.forwardRef((e, i) => {
    const { __scopePopper: s, virtualRef: r, ...l } = e,
      u = cx(ux, s),
      f = w.useRef(null),
      h = ve(i, f),
      p = w.useRef(null);
    return (
      w.useEffect(() => {
        const m = p.current;
        ((p.current = r?.current || f.current),
          m !== p.current && u.onAnchorChange(p.current));
      }),
      r ? null : b.jsx(Wt.div, { ...l, ref: h })
    );
  });
fx.displayName = ux;
var th = "PopperContent",
  [RR, MR] = ox(th),
  dx = w.forwardRef((e, i) => {
    const {
        __scopePopper: s,
        side: r = "bottom",
        sideOffset: l = 0,
        align: u = "center",
        alignOffset: f = 0,
        arrowPadding: h = 0,
        avoidCollisions: p = !0,
        collisionBoundary: m = [],
        collisionPadding: g = 0,
        sticky: v = "partial",
        hideWhenDetached: x = !1,
        updatePositionStrategy: T = "optimized",
        onPlaced: C,
        ...E
      } = e,
      R = cx(th, s),
      [N, j] = w.useState(null),
      O = ve(i, (Pt) => j(Pt)),
      [P, V] = w.useState(null),
      F = CR(P),
      Z = F?.width ?? 0,
      H = F?.height ?? 0,
      J = r + (u !== "center" ? "-" + u : ""),
      lt =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      pt = Array.isArray(m) ? m : [m],
      ct = pt.length > 0,
      wt = { padding: lt, boundary: pt.filter(OR), altBoundary: ct },
      {
        refs: $,
        floatingStyles: ft,
        placement: L,
        isPositioned: Q,
        middlewareData: X,
      } = pR({
        strategy: "fixed",
        placement: J,
        whileElementsMounted: (...Pt) =>
          sR(...Pt, { animationFrame: T === "always" }),
        elements: { reference: R.anchor },
        middleware: [
          yR({ mainAxis: l + H, alignmentAxis: f }),
          p &&
            vR({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === "partial" ? bR() : void 0,
              ...wt,
            }),
          p && xR({ ...wt }),
          SR({
            ...wt,
            apply: ({
              elements: Pt,
              rects: Rt,
              availableWidth: Mt,
              availableHeight: Gn,
            }) => {
              const { width: Ke, height: rn } = Rt.reference,
                Le = Pt.floating.style;
              (Le.setProperty("--radix-popper-available-width", `${Mt}px`),
                Le.setProperty("--radix-popper-available-height", `${Gn}px`),
                Le.setProperty("--radix-popper-anchor-width", `${Ke}px`),
                Le.setProperty("--radix-popper-anchor-height", `${rn}px`));
            },
          }),
          P && TR({ element: P, padding: h }),
          NR({ arrowWidth: Z, arrowHeight: H }),
          x && wR({ strategy: "referenceHidden", ...wt }),
        ],
      }),
      [tt, A] = px(L),
      G = vn(C);
    Bn(() => {
      Q && G?.();
    }, [Q, G]);
    const I = X.arrow?.x,
      W = X.arrow?.y,
      rt = X.arrow?.centerOffset !== 0,
      [dt, st] = w.useState();
    return (
      Bn(() => {
        N && st(window.getComputedStyle(N).zIndex);
      }, [N]),
      b.jsx("div", {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ft,
          transform: Q ? ft.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: dt,
          "--radix-popper-transform-origin": [
            X.transformOrigin?.x,
            X.transformOrigin?.y,
          ].join(" "),
          ...(X.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: b.jsx(RR, {
          scope: s,
          placedSide: tt,
          onArrowChange: V,
          arrowX: I,
          arrowY: W,
          shouldHideArrow: rt,
          children: b.jsx(Wt.div, {
            "data-side": tt,
            "data-align": A,
            ...E,
            ref: O,
            style: { ...E.style, animation: Q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
dx.displayName = th;
var hx = "PopperArrow",
  DR = { top: "bottom", right: "left", bottom: "top", left: "right" },
  mx = w.forwardRef(function (i, s) {
    const { __scopePopper: r, ...l } = i,
      u = MR(hx, r),
      f = DR[u.placedSide];
    return b.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0,
      },
      children: b.jsx(AR, {
        ...l,
        ref: s,
        style: { ...l.style, display: "block" },
      }),
    });
  });
mx.displayName = hx;
function OR(e) {
  return e !== null;
}
var NR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(i) {
    const { placement: s, rects: r, middlewareData: l } = i,
      f = l.arrow?.centerOffset !== 0,
      h = f ? 0 : e.arrowWidth,
      p = f ? 0 : e.arrowHeight,
      [m, g] = px(s),
      v = { start: "0%", center: "50%", end: "100%" }[g],
      x = (l.arrow?.x ?? 0) + h / 2,
      T = (l.arrow?.y ?? 0) + p / 2;
    let C = "",
      E = "";
    return (
      m === "bottom"
        ? ((C = f ? v : `${x}px`), (E = `${-p}px`))
        : m === "top"
          ? ((C = f ? v : `${x}px`), (E = `${r.floating.height + p}px`))
          : m === "right"
            ? ((C = `${-p}px`), (E = f ? v : `${T}px`))
            : m === "left" &&
              ((C = `${r.floating.width + p}px`), (E = f ? v : `${T}px`)),
      { data: { x: C, y: E } }
    );
  },
});
function px(e) {
  const [i, s = "center"] = e.split("-");
  return [i, s];
}
var jR = fx,
  _R = dx,
  VR = mx,
  [Xl] = Er("Tooltip", [lx]),
  eh = lx(),
  gx = "TooltipProvider",
  LR = 700,
  bv = "tooltip.open",
  [zR, yx] = Xl(gx),
  vx = (e) => {
    const {
        __scopeTooltip: i,
        delayDuration: s = LR,
        skipDelayDuration: r = 300,
        disableHoverableContent: l = !1,
        children: u,
      } = e,
      f = w.useRef(!0),
      h = w.useRef(!1),
      p = w.useRef(0);
    return (
      w.useEffect(() => {
        const m = p.current;
        return () => window.clearTimeout(m);
      }, []),
      b.jsx(zR, {
        scope: i,
        isOpenDelayedRef: f,
        delayDuration: s,
        onOpen: w.useCallback(() => {
          (window.clearTimeout(p.current), (f.current = !1));
        }, []),
        onClose: w.useCallback(() => {
          (window.clearTimeout(p.current),
            (p.current = window.setTimeout(() => (f.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: w.useCallback((m) => {
          h.current = m;
        }, []),
        disableHoverableContent: l,
        children: u,
      })
    );
  };
vx.displayName = gx;
var bx = "Tooltip",
  [A4, Rr] = Xl(bx),
  fd = "TooltipTrigger",
  PR = w.forwardRef((e, i) => {
    const { __scopeTooltip: s, ...r } = e,
      l = Rr(fd, s),
      u = yx(fd, s),
      f = eh(s),
      h = w.useRef(null),
      p = ve(i, h, l.onTriggerChange),
      m = w.useRef(!1),
      g = w.useRef(!1),
      v = w.useCallback(() => (m.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", v),
        [v],
      ),
      b.jsx(jR, {
        asChild: !0,
        ...f,
        children: b.jsx(Wt.button, {
          "aria-describedby": l.open ? l.contentId : void 0,
          "data-state": l.stateAttribute,
          ...r,
          ref: p,
          onPointerMove: kt(e.onPointerMove, (x) => {
            x.pointerType !== "touch" &&
              !g.current &&
              !u.isPointerInTransitRef.current &&
              (l.onTriggerEnter(), (g.current = !0));
          }),
          onPointerLeave: kt(e.onPointerLeave, () => {
            (l.onTriggerLeave(), (g.current = !1));
          }),
          onPointerDown: kt(e.onPointerDown, () => {
            (l.open && l.onClose(),
              (m.current = !0),
              document.addEventListener("pointerup", v, { once: !0 }));
          }),
          onFocus: kt(e.onFocus, () => {
            m.current || l.onOpen();
          }),
          onBlur: kt(e.onBlur, l.onClose),
          onClick: kt(e.onClick, l.onClose),
        }),
      })
    );
  });
PR.displayName = fd;
var nh = "TooltipPortal",
  [BR, kR] = Xl(nh, { forceMount: void 0 }),
  xx = (e) => {
    const { __scopeTooltip: i, forceMount: s, children: r, container: l } = e,
      u = Rr(nh, i);
    return b.jsx(BR, {
      scope: i,
      forceMount: s,
      children: b.jsx(Ji, {
        present: s || u.open,
        children: b.jsx(kl, { asChild: !0, container: l, children: r }),
      }),
    });
  };
xx.displayName = nh;
var ts = "TooltipContent",
  Sx = w.forwardRef((e, i) => {
    const s = kR(ts, e.__scopeTooltip),
      { forceMount: r = s.forceMount, side: l = "top", ...u } = e,
      f = Rr(ts, e.__scopeTooltip);
    return b.jsx(Ji, {
      present: r || f.open,
      children: f.disableHoverableContent
        ? b.jsx(wx, { side: l, ...u, ref: i })
        : b.jsx(UR, { side: l, ...u, ref: i }),
    });
  }),
  UR = w.forwardRef((e, i) => {
    const s = Rr(ts, e.__scopeTooltip),
      r = yx(ts, e.__scopeTooltip),
      l = w.useRef(null),
      u = ve(i, l),
      [f, h] = w.useState(null),
      { trigger: p, onClose: m } = s,
      g = l.current,
      { onPointerInTransitChange: v } = r,
      x = w.useCallback(() => {
        (h(null), v(!1));
      }, [v]),
      T = w.useCallback(
        (C, E) => {
          const R = C.currentTarget,
            N = { x: C.clientX, y: C.clientY },
            j = FR(N, R.getBoundingClientRect()),
            O = XR(N, j),
            P = KR(E.getBoundingClientRect()),
            V = ZR([...O, ...P]);
          (h(V), v(!0));
        },
        [v],
      );
    return (
      w.useEffect(() => () => x(), [x]),
      w.useEffect(() => {
        if (p && g) {
          const C = (R) => T(R, g),
            E = (R) => T(R, p);
          return (
            p.addEventListener("pointerleave", C),
            g.addEventListener("pointerleave", E),
            () => {
              (p.removeEventListener("pointerleave", C),
                g.removeEventListener("pointerleave", E));
            }
          );
        }
      }, [p, g, T, x]),
      w.useEffect(() => {
        if (f) {
          const C = (E) => {
            const R = E.target,
              N = { x: E.clientX, y: E.clientY },
              j = p?.contains(R) || g?.contains(R),
              O = !QR(N, f);
            j ? x() : O && (x(), m());
          };
          return (
            document.addEventListener("pointermove", C),
            () => document.removeEventListener("pointermove", C)
          );
        }
      }, [p, g, f, m, x]),
      b.jsx(wx, { ...e, ref: u })
    );
  }),
  [HR, qR] = Xl(bx, { isInside: !1 }),
  GR = gA("TooltipContent"),
  wx = w.forwardRef((e, i) => {
    const {
        __scopeTooltip: s,
        children: r,
        "aria-label": l,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        ...h
      } = e,
      p = Rr(ts, s),
      m = eh(s),
      { onClose: g } = p;
    return (
      w.useEffect(
        () => (
          document.addEventListener(bv, g),
          () => document.removeEventListener(bv, g)
        ),
        [g],
      ),
      w.useEffect(() => {
        if (p.trigger) {
          const v = (x) => {
            x.target?.contains(p.trigger) && g();
          };
          return (
            window.addEventListener("scroll", v, { capture: !0 }),
            () => window.removeEventListener("scroll", v, { capture: !0 })
          );
        }
      }, [p.trigger, g]),
      b.jsx(Bl, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: g,
        children: b.jsxs(_R, {
          "data-state": p.stateAttribute,
          ...m,
          ...h,
          ref: i,
          style: {
            ...h.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            b.jsx(GR, { children: r }),
            b.jsx(HR, {
              scope: s,
              isInside: !0,
              children: b.jsx(UA, {
                id: p.contentId,
                role: "tooltip",
                children: l || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Sx.displayName = ts;
var Tx = "TooltipArrow",
  YR = w.forwardRef((e, i) => {
    const { __scopeTooltip: s, ...r } = e,
      l = eh(s);
    return qR(Tx, s).isInside ? null : b.jsx(VR, { ...l, ...r, ref: i });
  });
YR.displayName = Tx;
function FR(e, i) {
  const s = Math.abs(i.top - e.y),
    r = Math.abs(i.bottom - e.y),
    l = Math.abs(i.right - e.x),
    u = Math.abs(i.left - e.x);
  switch (Math.min(s, r, l, u)) {
    case u:
      return "left";
    case l:
      return "right";
    case s:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function XR(e, i, s = 5) {
  const r = [];
  switch (i) {
    case "top":
      r.push({ x: e.x - s, y: e.y + s }, { x: e.x + s, y: e.y + s });
      break;
    case "bottom":
      r.push({ x: e.x - s, y: e.y - s }, { x: e.x + s, y: e.y - s });
      break;
    case "left":
      r.push({ x: e.x + s, y: e.y - s }, { x: e.x + s, y: e.y + s });
      break;
    case "right":
      r.push({ x: e.x - s, y: e.y - s }, { x: e.x - s, y: e.y + s });
      break;
  }
  return r;
}
function KR(e) {
  const { top: i, right: s, bottom: r, left: l } = e;
  return [
    { x: l, y: i },
    { x: s, y: i },
    { x: s, y: r },
    { x: l, y: r },
  ];
}
function QR(e, i) {
  const { x: s, y: r } = e;
  let l = !1;
  for (let u = 0, f = i.length - 1; u < i.length; f = u++) {
    const h = i[u],
      p = i[f],
      m = h.x,
      g = h.y,
      v = p.x,
      x = p.y;
    g > r != x > r && s < ((v - m) * (r - g)) / (x - g) + m && (l = !l);
  }
  return l;
}
function ZR(e) {
  const i = e.slice();
  return (
    i.sort((s, r) =>
      s.x < r.x ? -1 : s.x > r.x ? 1 : s.y < r.y ? -1 : s.y > r.y ? 1 : 0,
    ),
    WR(i)
  );
}
function WR(e) {
  if (e.length <= 1) return e.slice();
  const i = [];
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    for (; i.length >= 2; ) {
      const u = i[i.length - 1],
        f = i[i.length - 2];
      if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x)) i.pop();
      else break;
    }
    i.push(l);
  }
  i.pop();
  const s = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const l = e[r];
    for (; s.length >= 2; ) {
      const u = s[s.length - 1],
        f = s[s.length - 2];
      if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x)) s.pop();
      else break;
    }
    s.push(l);
  }
  return (
    s.pop(),
    i.length === 1 && s.length === 1 && i[0].x === s[0].x && i[0].y === s[0].y
      ? i
      : i.concat(s)
  );
}
var IR = vx,
  $R = xx,
  Ex = Sx;
const JR = IR,
  tM = w.forwardRef(({ className: e, sideOffset: i = 4, ...s }, r) =>
    b.jsx($R, {
      children: b.jsx(Ex, {
        ref: r,
        sideOffset: i,
        className: ce(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          e,
        ),
        ...s,
      }),
    }),
  );
tM.displayName = Ex.displayName;
const Ax = w.createContext({});
function eM(e) {
  const i = w.useRef(null);
  return (i.current === null && (i.current = e()), i.current);
}
const nM = typeof window < "u",
  iM = nM ? w.useLayoutEffect : w.useEffect,
  ih = w.createContext(null);
function ah(e, i) {
  e.indexOf(i) === -1 && e.push(i);
}
function Al(e, i) {
  const s = e.indexOf(i);
  s > -1 && e.splice(s, 1);
}
const bn = (e, i, s) => (s > i ? i : s < e ? e : s);
let sh = () => {};
const Hn = {},
  Cx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Rx(e) {
  return typeof e == "object" && e !== null;
}
const Mx = (e) => /^0[^.\s]+$/u.test(e);
function Dx(e) {
  let i;
  return () => (i === void 0 && (i = e()), i);
}
const Xe = (e) => e,
  aM = (e, i) => (s) => i(e(s)),
  Mr = (...e) => e.reduce(aM),
  br = (e, i, s) => {
    const r = i - e;
    return r === 0 ? 1 : (s - e) / r;
  };
class rh {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (ah(this.subscriptions, i), () => Al(this.subscriptions, i));
  }
  notify(i, s, r) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1) this.subscriptions[0](i, s, r);
      else
        for (let u = 0; u < l; u++) {
          const f = this.subscriptions[u];
          f && f(i, s, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const tn = (e) => e * 1e3,
  Fe = (e) => e / 1e3;
function Ox(e, i) {
  return i ? e * (1e3 / i) : 0;
}
const Nx = (e, i, s) =>
    (((1 - 3 * s + 3 * i) * e + (3 * s - 6 * i)) * e + 3 * i) * e,
  sM = 1e-7,
  rM = 12;
function oM(e, i, s, r, l) {
  let u,
    f,
    h = 0;
  do ((f = i + (s - i) / 2), (u = Nx(f, r, l) - e), u > 0 ? (s = f) : (i = f));
  while (Math.abs(u) > sM && ++h < rM);
  return f;
}
function Dr(e, i, s, r) {
  if (e === i && s === r) return Xe;
  const l = (u) => oM(u, 0, 1, e, s);
  return (u) => (u === 0 || u === 1 ? u : Nx(l(u), i, r));
}
const jx = (e) => (i) => (i <= 0.5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2),
  _x = (e) => (i) => 1 - e(1 - i),
  Vx = Dr(0.33, 1.53, 0.69, 0.99),
  oh = _x(Vx),
  Lx = jx(oh),
  zx = (e) =>
    (e *= 2) < 1 ? 0.5 * oh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  lh = (e) => 1 - Math.sin(Math.acos(e)),
  Px = _x(lh),
  Bx = jx(lh),
  lM = Dr(0.42, 0, 1, 1),
  cM = Dr(0, 0, 0.58, 1),
  kx = Dr(0.42, 0, 0.58, 1),
  uM = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ux = (e) => Array.isArray(e) && typeof e[0] == "number",
  fM = {
    linear: Xe,
    easeIn: lM,
    easeInOut: kx,
    easeOut: cM,
    circIn: lh,
    circInOut: Bx,
    circOut: Px,
    backIn: oh,
    backInOut: Lx,
    backOut: Vx,
    anticipate: zx,
  },
  dM = (e) => typeof e == "string",
  xv = (e) => {
    if (Ux(e)) {
      sh(e.length === 4);
      const [i, s, r, l] = e;
      return Dr(i, s, r, l);
    } else if (dM(e)) return fM[e];
    return e;
  },
  Jo = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function hM(e, i) {
  let s = new Set(),
    r = new Set(),
    l = !1,
    u = !1;
  const f = new WeakSet();
  let h = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(g) {
    (f.has(g) && (m.schedule(g), e()), g(h));
  }
  const m = {
    schedule: (g, v = !1, x = !1) => {
      const C = x && l ? s : r;
      return (v && f.add(g), C.has(g) || C.add(g), g);
    },
    cancel: (g) => {
      (r.delete(g), f.delete(g));
    },
    process: (g) => {
      if (((h = g), l)) {
        u = !0;
        return;
      }
      ((l = !0),
        ([s, r] = [r, s]),
        s.forEach(p),
        s.clear(),
        (l = !1),
        u && ((u = !1), m.process(g)));
    },
  };
  return m;
}
const mM = 40;
function Hx(e, i) {
  let s = !1,
    r = !0;
  const l = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (s = !0),
    f = Jo.reduce((O, P) => ((O[P] = hM(u)), O), {}),
    {
      setup: h,
      read: p,
      resolveKeyframes: m,
      preUpdate: g,
      update: v,
      preRender: x,
      render: T,
      postRender: C,
    } = f,
    E = () => {
      const O = Hn.useManualTiming ? l.timestamp : performance.now();
      ((s = !1),
        Hn.useManualTiming ||
          (l.delta = r ? 1e3 / 60 : Math.max(Math.min(O - l.timestamp, mM), 1)),
        (l.timestamp = O),
        (l.isProcessing = !0),
        h.process(l),
        p.process(l),
        m.process(l),
        g.process(l),
        v.process(l),
        x.process(l),
        T.process(l),
        C.process(l),
        (l.isProcessing = !1),
        s && i && ((r = !1), e(E)));
    },
    R = () => {
      ((s = !0), (r = !0), l.isProcessing || e(E));
    };
  return {
    schedule: Jo.reduce((O, P) => {
      const V = f[P];
      return (
        (O[P] = (F, Z = !1, H = !1) => (s || R(), V.schedule(F, Z, H))),
        O
      );
    }, {}),
    cancel: (O) => {
      for (let P = 0; P < Jo.length; P++) f[Jo[P]].cancel(O);
    },
    state: l,
    steps: f,
  };
}
const {
  schedule: zt,
  cancel: Ti,
  state: le,
  steps: Df,
} = Hx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Xe, !0);
let cl;
function pM() {
  cl = void 0;
}
const ge = {
    now: () => (
      cl === void 0 &&
        ge.set(
          le.isProcessing || Hn.useManualTiming
            ? le.timestamp
            : performance.now(),
        ),
      cl
    ),
    set: (e) => {
      ((cl = e), queueMicrotask(pM));
    },
  },
  qx = (e) => (i) => typeof i == "string" && i.startsWith(e),
  Gx = qx("--"),
  gM = qx("var(--"),
  ch = (e) => (gM(e) ? yM.test(e.split("/*")[0].trim()) : !1),
  yM =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Sv(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const as = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  xr = { ...as, transform: (e) => bn(0, 1, e) },
  tl = { ...as, default: 1 },
  dr = (e) => Math.round(e * 1e5) / 1e5,
  uh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function vM(e) {
  return e == null;
}
const bM =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  fh = (e, i) => (s) =>
    !!(
      (typeof s == "string" && bM.test(s) && s.startsWith(e)) ||
      (i && !vM(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  Yx = (e, i, s) => (r) => {
    if (typeof r != "string") return r;
    const [l, u, f, h] = r.match(uh);
    return {
      [e]: parseFloat(l),
      [i]: parseFloat(u),
      [s]: parseFloat(f),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  xM = (e) => bn(0, 255, e),
  Of = { ...as, transform: (e) => Math.round(xM(e)) },
  Qi = {
    test: fh("rgb", "red"),
    parse: Yx("red", "green", "blue"),
    transform: ({ red: e, green: i, blue: s, alpha: r = 1 }) =>
      "rgba(" +
      Of.transform(e) +
      ", " +
      Of.transform(i) +
      ", " +
      Of.transform(s) +
      ", " +
      dr(xr.transform(r)) +
      ")",
  };
function SM(e) {
  let i = "",
    s = "",
    r = "",
    l = "";
  return (
    e.length > 5
      ? ((i = e.substring(1, 3)),
        (s = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (l = e.substring(7, 9)))
      : ((i = e.substring(1, 2)),
        (s = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (l = e.substring(4, 5)),
        (i += i),
        (s += s),
        (r += r),
        (l += l)),
    {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(r, 16),
      alpha: l ? parseInt(l, 16) / 255 : 1,
    }
  );
}
const dd = { test: fh("#"), parse: SM, transform: Qi.transform },
  Or = (e) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${e}`,
  }),
  vi = Or("deg"),
  yn = Or("%"),
  it = Or("px"),
  wM = Or("vh"),
  TM = Or("vw"),
  wv = {
    ...yn,
    parse: (e) => yn.parse(e) / 100,
    transform: (e) => yn.transform(e * 100),
  },
  Fa = {
    test: fh("hsl", "hue"),
    parse: Yx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: i, lightness: s, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      yn.transform(dr(i)) +
      ", " +
      yn.transform(dr(s)) +
      ", " +
      dr(xr.transform(r)) +
      ")",
  },
  Zt = {
    test: (e) => Qi.test(e) || dd.test(e) || Fa.test(e),
    parse: (e) =>
      Qi.test(e) ? Qi.parse(e) : Fa.test(e) ? Fa.parse(e) : dd.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Qi.transform(e)
          : Fa.transform(e),
    getAnimatableNone: (e) => {
      const i = Zt.parse(e);
      return ((i.alpha = 0), Zt.transform(i));
    },
  },
  EM =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function AM(e) {
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (e.match(uh)?.length || 0) + (e.match(EM)?.length || 0) > 0
  );
}
const Fx = "number",
  Xx = "color",
  CM = "var",
  RM = "var(",
  Tv = "${}",
  MM =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Sr(e) {
  const i = e.toString(),
    s = [],
    r = { color: [], number: [], var: [] },
    l = [];
  let u = 0;
  const h = i
    .replace(
      MM,
      (p) => (
        Zt.test(p)
          ? (r.color.push(u), l.push(Xx), s.push(Zt.parse(p)))
          : p.startsWith(RM)
            ? (r.var.push(u), l.push(CM), s.push(p))
            : (r.number.push(u), l.push(Fx), s.push(parseFloat(p))),
        ++u,
        Tv
      ),
    )
    .split(Tv);
  return { values: s, split: h, indexes: r, types: l };
}
function Kx(e) {
  return Sr(e).values;
}
function Qx(e) {
  const { split: i, types: s } = Sr(e),
    r = i.length;
  return (l) => {
    let u = "";
    for (let f = 0; f < r; f++)
      if (((u += i[f]), l[f] !== void 0)) {
        const h = s[f];
        h === Fx
          ? (u += dr(l[f]))
          : h === Xx
            ? (u += Zt.transform(l[f]))
            : (u += l[f]);
      }
    return u;
  };
}
const DM = (e) =>
  typeof e == "number" ? 0 : Zt.test(e) ? Zt.getAnimatableNone(e) : e;
function OM(e) {
  const i = Kx(e);
  return Qx(e)(i.map(DM));
}
const en = {
  test: AM,
  parse: Kx,
  createTransformer: Qx,
  getAnimatableNone: OM,
};
function Nf(e, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? e + (i - e) * 6 * s
      : s < 1 / 2
        ? i
        : s < 2 / 3
          ? e + (i - e) * (2 / 3 - s) * 6
          : e
  );
}
function NM({ hue: e, saturation: i, lightness: s, alpha: r }) {
  ((e /= 360), (i /= 100), (s /= 100));
  let l = 0,
    u = 0,
    f = 0;
  if (!i) l = u = f = s;
  else {
    const h = s < 0.5 ? s * (1 + i) : s + i - s * i,
      p = 2 * s - h;
    ((l = Nf(p, h, e + 1 / 3)), (u = Nf(p, h, e)), (f = Nf(p, h, e - 1 / 3)));
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(u * 255),
    blue: Math.round(f * 255),
    alpha: r,
  };
}
function Cl(e, i) {
  return (s) => (s > 0 ? i : e);
}
const Ht = (e, i, s) => e + (i - e) * s,
  jf = (e, i, s) => {
    const r = e * e,
      l = s * (i * i - r) + r;
    return l < 0 ? 0 : Math.sqrt(l);
  },
  jM = [dd, Qi, Fa],
  _M = (e) => jM.find((i) => i.test(e));
function Ev(e) {
  const i = _M(e);
  if (!i) return !1;
  let s = i.parse(e);
  return (i === Fa && (s = NM(s)), s);
}
const Av = (e, i) => {
    const s = Ev(e),
      r = Ev(i);
    if (!s || !r) return Cl(e, i);
    const l = { ...s };
    return (u) => (
      (l.red = jf(s.red, r.red, u)),
      (l.green = jf(s.green, r.green, u)),
      (l.blue = jf(s.blue, r.blue, u)),
      (l.alpha = Ht(s.alpha, r.alpha, u)),
      Qi.transform(l)
    );
  },
  hd = new Set(["none", "hidden"]);
function VM(e, i) {
  return hd.has(e) ? (s) => (s <= 0 ? e : i) : (s) => (s >= 1 ? i : e);
}
function LM(e, i) {
  return (s) => Ht(e, i, s);
}
function dh(e) {
  return typeof e == "number"
    ? LM
    : typeof e == "string"
      ? ch(e)
        ? Cl
        : Zt.test(e)
          ? Av
          : BM
      : Array.isArray(e)
        ? Zx
        : typeof e == "object"
          ? Zt.test(e)
            ? Av
            : zM
          : Cl;
}
function Zx(e, i) {
  const s = [...e],
    r = s.length,
    l = e.map((u, f) => dh(u)(u, i[f]));
  return (u) => {
    for (let f = 0; f < r; f++) s[f] = l[f](u);
    return s;
  };
}
function zM(e, i) {
  const s = { ...e, ...i },
    r = {};
  for (const l in s)
    e[l] !== void 0 && i[l] !== void 0 && (r[l] = dh(e[l])(e[l], i[l]));
  return (l) => {
    for (const u in r) s[u] = r[u](l);
    return s;
  };
}
function PM(e, i) {
  const s = [],
    r = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < i.values.length; l++) {
    const u = i.types[l],
      f = e.indexes[u][r[u]],
      h = e.values[f] ?? 0;
    ((s[l] = h), r[u]++);
  }
  return s;
}
const BM = (e, i) => {
  const s = en.createTransformer(i),
    r = Sr(e),
    l = Sr(i);
  return r.indexes.var.length === l.indexes.var.length &&
    r.indexes.color.length === l.indexes.color.length &&
    r.indexes.number.length >= l.indexes.number.length
    ? (hd.has(e) && !l.values.length) || (hd.has(i) && !r.values.length)
      ? VM(e, i)
      : Mr(Zx(PM(r, l), l.values), s)
    : Cl(e, i);
};
function Wx(e, i, s) {
  return typeof e == "number" && typeof i == "number" && typeof s == "number"
    ? Ht(e, i, s)
    : dh(e)(e, i);
}
const kM = (e) => {
    const i = ({ timestamp: s }) => e(s);
    return {
      start: (s = !0) => zt.update(i, s),
      stop: () => Ti(i),
      now: () => (le.isProcessing ? le.timestamp : ge.now()),
    };
  },
  Ix = (e, i, s = 10) => {
    let r = "";
    const l = Math.max(Math.round(i / s), 2);
    for (let u = 0; u < l; u++)
      r += Math.round(e(u / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Rl = 2e4;
function hh(e) {
  let i = 0;
  const s = 50;
  let r = e.next(i);
  for (; !r.done && i < Rl; ) ((i += s), (r = e.next(i)));
  return i >= Rl ? 1 / 0 : i;
}
function UM(e, i = 100, s) {
  const r = s({ ...e, keyframes: [0, i] }),
    l = Math.min(hh(r), Rl);
  return {
    type: "keyframes",
    ease: (u) => r.next(l * u).value / i,
    duration: Fe(l),
  };
}
const HM = 5;
function $x(e, i, s) {
  const r = Math.max(i - HM, 0);
  return Ox(s - e(r), i - r);
}
const Yt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  _f = 0.001;
function qM({
  duration: e = Yt.duration,
  bounce: i = Yt.bounce,
  velocity: s = Yt.velocity,
  mass: r = Yt.mass,
}) {
  let l,
    u,
    f = 1 - i;
  ((f = bn(Yt.minDamping, Yt.maxDamping, f)),
    (e = bn(Yt.minDuration, Yt.maxDuration, Fe(e))),
    f < 1
      ? ((l = (m) => {
          const g = m * f,
            v = g * e,
            x = g - s,
            T = md(m, f),
            C = Math.exp(-v);
          return _f - (x / T) * C;
        }),
        (u = (m) => {
          const v = m * f * e,
            x = v * s + s,
            T = Math.pow(f, 2) * Math.pow(m, 2) * e,
            C = Math.exp(-v),
            E = md(Math.pow(m, 2), f);
          return ((-l(m) + _f > 0 ? -1 : 1) * ((x - T) * C)) / E;
        }))
      : ((l = (m) => {
          const g = Math.exp(-m * e),
            v = (m - s) * e + 1;
          return -_f + g * v;
        }),
        (u = (m) => {
          const g = Math.exp(-m * e),
            v = (s - m) * (e * e);
          return g * v;
        })));
  const h = 5 / e,
    p = YM(l, u, h);
  if (((e = tn(e)), isNaN(p)))
    return { stiffness: Yt.stiffness, damping: Yt.damping, duration: e };
  {
    const m = Math.pow(p, 2) * r;
    return { stiffness: m, damping: f * 2 * Math.sqrt(r * m), duration: e };
  }
}
const GM = 12;
function YM(e, i, s) {
  let r = s;
  for (let l = 1; l < GM; l++) r = r - e(r) / i(r);
  return r;
}
function md(e, i) {
  return e * Math.sqrt(1 - i * i);
}
const FM = ["duration", "bounce"],
  XM = ["stiffness", "damping", "mass"];
function Cv(e, i) {
  return i.some((s) => e[s] !== void 0);
}
function KM(e) {
  let i = {
    velocity: Yt.velocity,
    stiffness: Yt.stiffness,
    damping: Yt.damping,
    mass: Yt.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Cv(e, XM) && Cv(e, FM))
    if (((i.velocity = 0), e.visualDuration)) {
      const s = e.visualDuration,
        r = (2 * Math.PI) / (s * 1.2),
        l = r * r,
        u = 2 * bn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
      i = { ...i, mass: Yt.mass, stiffness: l, damping: u };
    } else {
      const s = qM({ ...e, velocity: 0 });
      ((i = { ...i, ...s, mass: Yt.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Ml(e = Yt.visualDuration, i = Yt.bounce) {
  const s =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: i }
      : e;
  let { restSpeed: r, restDelta: l } = s;
  const u = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    h = { done: !1, value: u },
    {
      stiffness: p,
      damping: m,
      mass: g,
      duration: v,
      velocity: x,
      isResolvedFromDuration: T,
    } = KM({ ...s, velocity: -Fe(s.velocity || 0) }),
    C = x || 0,
    E = m / (2 * Math.sqrt(p * g)),
    R = f - u,
    N = Fe(Math.sqrt(p / g)),
    j = Math.abs(R) < 5;
  (r || (r = j ? Yt.restSpeed.granular : Yt.restSpeed.default),
    l || (l = j ? Yt.restDelta.granular : Yt.restDelta.default));
  let O;
  if (E < 1) {
    const V = md(N, E);
    O = (F) => {
      const Z = Math.exp(-E * N * F);
      return (
        f - Z * (((C + E * N * R) / V) * Math.sin(V * F) + R * Math.cos(V * F))
      );
    };
  } else if (E === 1) O = (V) => f - Math.exp(-N * V) * (R + (C + N * R) * V);
  else {
    const V = N * Math.sqrt(E * E - 1);
    O = (F) => {
      const Z = Math.exp(-E * N * F),
        H = Math.min(V * F, 300);
      return (
        f - (Z * ((C + E * N * R) * Math.sinh(H) + V * R * Math.cosh(H))) / V
      );
    };
  }
  const P = {
    calculatedDuration: (T && v) || null,
    next: (V) => {
      const F = O(V);
      if (T) h.done = V >= v;
      else {
        let Z = V === 0 ? C : 0;
        E < 1 && (Z = V === 0 ? tn(C) : $x(O, V, F));
        const H = Math.abs(Z) <= r,
          J = Math.abs(f - F) <= l;
        h.done = H && J;
      }
      return ((h.value = h.done ? f : F), h);
    },
    toString: () => {
      const V = Math.min(hh(P), Rl),
        F = Ix((Z) => P.next(V * Z).value, V, 30);
      return V + "ms " + F;
    },
    toTransition: () => {},
  };
  return P;
}
Ml.applyToOptions = (e) => {
  const i = UM(e, 100, Ml);
  return (
    (e.ease = i.ease),
    (e.duration = tn(i.duration)),
    (e.type = "keyframes"),
    e
  );
};
function pd({
  keyframes: e,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: r = 325,
  bounceDamping: l = 10,
  bounceStiffness: u = 500,
  modifyTarget: f,
  min: h,
  max: p,
  restDelta: m = 0.5,
  restSpeed: g,
}) {
  const v = e[0],
    x = { done: !1, value: v },
    T = (H) => (h !== void 0 && H < h) || (p !== void 0 && H > p),
    C = (H) =>
      h === void 0
        ? p
        : p === void 0 || Math.abs(h - H) < Math.abs(p - H)
          ? h
          : p;
  let E = s * i;
  const R = v + E,
    N = f === void 0 ? R : f(R);
  N !== R && (E = N - v);
  const j = (H) => -E * Math.exp(-H / r),
    O = (H) => N + j(H),
    P = (H) => {
      const J = j(H),
        lt = O(H);
      ((x.done = Math.abs(J) <= m), (x.value = x.done ? N : lt));
    };
  let V, F;
  const Z = (H) => {
    T(x.value) &&
      ((V = H),
      (F = Ml({
        keyframes: [x.value, C(x.value)],
        velocity: $x(O, H, x.value),
        damping: l,
        stiffness: u,
        restDelta: m,
        restSpeed: g,
      })));
  };
  return (
    Z(0),
    {
      calculatedDuration: null,
      next: (H) => {
        let J = !1;
        return (
          !F && V === void 0 && ((J = !0), P(H), Z(H)),
          V !== void 0 && H >= V ? F.next(H - V) : (!J && P(H), x)
        );
      },
    }
  );
}
function QM(e, i, s) {
  const r = [],
    l = s || Hn.mix || Wx,
    u = e.length - 1;
  for (let f = 0; f < u; f++) {
    let h = l(e[f], e[f + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[f] || Xe : i;
      h = Mr(p, h);
    }
    r.push(h);
  }
  return r;
}
function ZM(e, i, { clamp: s = !0, ease: r, mixer: l } = {}) {
  const u = e.length;
  if ((sh(u === i.length), u === 1)) return () => i[0];
  if (u === 2 && i[0] === i[1]) return () => i[1];
  const f = e[0] === e[1];
  e[0] > e[u - 1] && ((e = [...e].reverse()), (i = [...i].reverse()));
  const h = QM(i, r, l),
    p = h.length,
    m = (g) => {
      if (f && g < e[0]) return i[0];
      let v = 0;
      if (p > 1) for (; v < e.length - 2 && !(g < e[v + 1]); v++);
      const x = br(e[v], e[v + 1], g);
      return h[v](x);
    };
  return s ? (g) => m(bn(e[0], e[u - 1], g)) : m;
}
function WM(e, i) {
  const s = e[e.length - 1];
  for (let r = 1; r <= i; r++) {
    const l = br(0, i, r);
    e.push(Ht(s, 1, l));
  }
}
function IM(e) {
  const i = [0];
  return (WM(i, e.length - 1), i);
}
function $M(e, i) {
  return e.map((s) => s * i);
}
function JM(e, i) {
  return e.map(() => i || kx).splice(0, e.length - 1);
}
function hr({
  duration: e = 300,
  keyframes: i,
  times: s,
  ease: r = "easeInOut",
}) {
  const l = uM(r) ? r.map(xv) : xv(r),
    u = { done: !1, value: i[0] },
    f = $M(s && s.length === i.length ? s : IM(i), e),
    h = ZM(f, i, { ease: Array.isArray(l) ? l : JM(i, l) });
  return {
    calculatedDuration: e,
    next: (p) => ((u.value = h(p)), (u.done = p >= e), u),
  };
}
const tD = (e) => e !== null;
function mh(e, { repeat: i, repeatType: s = "loop" }, r, l = 1) {
  const u = e.filter(tD),
    h = l < 0 || (i && s !== "loop" && i % 2 === 1) ? 0 : u.length - 1;
  return !h || r === void 0 ? u[h] : r;
}
const eD = { decay: pd, inertia: pd, tween: hr, keyframes: hr, spring: Ml };
function Jx(e) {
  typeof e.type == "string" && (e.type = eD[e.type]);
}
class ph {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
}
const nD = (e) => e / 100;
class gh extends ph {
  constructor(i) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: s } = this.options;
        (s && s.updatedAt !== ge.now() && this.tick(ge.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: i } = this;
    Jx(i);
    const {
      type: s = hr,
      repeat: r = 0,
      repeatDelay: l = 0,
      repeatType: u,
      velocity: f = 0,
    } = i;
    let { keyframes: h } = i;
    const p = s || hr;
    p !== hr &&
      typeof h[0] != "number" &&
      ((this.mixKeyframes = Mr(nD, Wx(h[0], h[1]))), (h = [0, 100]));
    const m = p({ ...i, keyframes: h });
    (u === "mirror" &&
      (this.mirroredGenerator = p({
        ...i,
        keyframes: [...h].reverse(),
        velocity: -f,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = hh(m)));
    const { calculatedDuration: g } = m;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + l),
      (this.totalDuration = this.resolvedDuration * (r + 1) - l),
      (this.generator = m));
  }
  updateTime(i) {
    const s = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = s);
  }
  tick(i, s = !1) {
    const {
      generator: r,
      totalDuration: l,
      mixKeyframes: u,
      mirroredGenerator: f,
      resolvedDuration: h,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: m = 0,
      keyframes: g,
      repeat: v,
      repeatType: x,
      repeatDelay: T,
      type: C,
      onUpdate: E,
      finalKeyframe: R,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - l / this.speed, this.startTime)),
      s ? (this.currentTime = i) : this.updateTime(i));
    const N = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      j = this.playbackSpeed >= 0 ? N < 0 : N > l;
    ((this.currentTime = Math.max(N, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = l));
    let O = this.currentTime,
      P = r;
    if (v) {
      const H = Math.min(this.currentTime, l) / h;
      let J = Math.floor(H),
        lt = H % 1;
      (!lt && H >= 1 && (lt = 1),
        lt === 1 && J--,
        (J = Math.min(J, v + 1)),
        J % 2 &&
          (x === "reverse"
            ? ((lt = 1 - lt), T && (lt -= T / h))
            : x === "mirror" && (P = f)),
        (O = bn(0, 1, lt) * h));
    }
    const V = j ? { done: !1, value: g[0] } : P.next(O);
    u && !j && (V.value = u(V.value));
    let { done: F } = V;
    !j &&
      p !== null &&
      (F =
        this.playbackSpeed >= 0
          ? this.currentTime >= l
          : this.currentTime <= 0);
    const Z =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && F));
    return (
      Z && C !== pd && (V.value = mh(g, this.options, R, this.speed)),
      E && E(V.value),
      Z && this.finish(),
      V
    );
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
  get duration() {
    return Fe(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + Fe(i);
  }
  get time() {
    return Fe(this.currentTime);
  }
  set time(i) {
    ((i = tn(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = i),
          this.tick(i)));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const s = this.playbackSpeed !== i;
    (s && this.driver && this.updateTime(ge.now()),
      (this.playbackSpeed = i),
      s && this.driver && (this.time = Fe(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = kM, startTime: s } = this.options;
    (this.driver || (this.driver = i((l) => this.tick(l))),
      this.options.onPlay?.());
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = s ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(ge.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function iD(e) {
  for (let i = 1; i < e.length; i++) e[i] ?? (e[i] = e[i - 1]);
}
const Zi = (e) => (e * 180) / Math.PI,
  gd = (e) => {
    const i = Zi(Math.atan2(e[1], e[0]));
    return yd(i);
  },
  aD = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: gd,
    rotateZ: gd,
    skewX: (e) => Zi(Math.atan(e[1])),
    skewY: (e) => Zi(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  yd = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Rv = gd,
  Mv = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Dv = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  sD = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Mv,
    scaleY: Dv,
    scale: (e) => (Mv(e) + Dv(e)) / 2,
    rotateX: (e) => yd(Zi(Math.atan2(e[6], e[5]))),
    rotateY: (e) => yd(Zi(Math.atan2(-e[2], e[0]))),
    rotateZ: Rv,
    rotate: Rv,
    skewX: (e) => Zi(Math.atan(e[4])),
    skewY: (e) => Zi(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function vd(e) {
  return e.includes("scale") ? 1 : 0;
}
function bd(e, i) {
  if (!e || e === "none") return vd(i);
  const s = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, l;
  if (s) ((r = sD), (l = s));
  else {
    const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = aD), (l = h));
  }
  if (!l) return vd(i);
  const u = r[i],
    f = l[1].split(",").map(oD);
  return typeof u == "function" ? u(f) : f[u];
}
const rD = (e, i) => {
  const { transform: s = "none" } = getComputedStyle(e);
  return bd(s, i);
};
function oD(e) {
  return parseFloat(e.trim());
}
const ss = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  rs = new Set(ss),
  Ov = (e) => e === as || e === it,
  lD = new Set(["x", "y", "z"]),
  cD = ss.filter((e) => !lD.has(e));
function uD(e) {
  const i = [];
  return (
    cD.forEach((s) => {
      const r = e.getValue(s);
      r !== void 0 &&
        (i.push([s, r.get()]), r.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const xi = {
  width: ({ x: e }, { paddingLeft: i = "0", paddingRight: s = "0" }) =>
    e.max - e.min - parseFloat(i) - parseFloat(s),
  height: ({ y: e }, { paddingTop: i = "0", paddingBottom: s = "0" }) =>
    e.max - e.min - parseFloat(i) - parseFloat(s),
  top: (e, { top: i }) => parseFloat(i),
  left: (e, { left: i }) => parseFloat(i),
  bottom: ({ y: e }, { top: i }) => parseFloat(i) + (e.max - e.min),
  right: ({ x: e }, { left: i }) => parseFloat(i) + (e.max - e.min),
  x: (e, { transform: i }) => bd(i, "x"),
  y: (e, { transform: i }) => bd(i, "y"),
};
xi.translateX = xi.x;
xi.translateY = xi.y;
const Wi = new Set();
let xd = !1,
  Sd = !1,
  wd = !1;
function t1() {
  if (Sd) {
    const e = Array.from(Wi).filter((r) => r.needsMeasurement),
      i = new Set(e.map((r) => r.element)),
      s = new Map();
    (i.forEach((r) => {
      const l = uD(r);
      l.length && (s.set(r, l), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      i.forEach((r) => {
        r.render();
        const l = s.get(r);
        l &&
          l.forEach(([u, f]) => {
            r.getValue(u)?.set(f);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Sd = !1), (xd = !1), Wi.forEach((e) => e.complete(wd)), Wi.clear());
}
function e1() {
  Wi.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Sd = !0));
  });
}
function fD() {
  ((wd = !0), e1(), t1(), (wd = !1));
}
class yh {
  constructor(i, s, r, l, u, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = r),
      (this.motionValue = l),
      (this.element = u),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Wi.add(this),
          xd || ((xd = !0), zt.read(e1), zt.resolveKeyframes(t1)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: s,
      element: r,
      motionValue: l,
    } = this;
    if (i[0] === null) {
      const u = l?.get(),
        f = i[i.length - 1];
      if (u !== void 0) i[0] = u;
      else if (r && s) {
        const h = r.readValue(s, f);
        h != null && (i[0] = h);
      }
      (i[0] === void 0 && (i[0] = f), l && u === void 0 && l.set(i[0]));
    }
    iD(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      Wi.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Wi.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const dD = (e) => e.startsWith("--");
function n1(e, i, s) {
  dD(i) ? e.style.setProperty(i, s) : (e.style[i] = s);
}
const hD = {};
function i1(e, i) {
  const s = Dx(e);
  return () => hD[i] ?? s();
}
const mD = i1(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  a1 = i1(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ur = ([e, i, s, r]) => `cubic-bezier(${e}, ${i}, ${s}, ${r})`,
  Nv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ur([0, 0.65, 0.55, 1]),
    circOut: ur([0.55, 0, 1, 0.45]),
    backIn: ur([0.31, 0.01, 0.66, -0.59]),
    backOut: ur([0.33, 1.53, 0.69, 0.99]),
  };
function s1(e, i) {
  if (e)
    return typeof e == "function"
      ? a1()
        ? Ix(e, i)
        : "ease-out"
      : Ux(e)
        ? ur(e)
        : Array.isArray(e)
          ? e.map((s) => s1(s, i) || Nv.easeOut)
          : Nv[e];
}
function pD(
  e,
  i,
  s,
  {
    delay: r = 0,
    duration: l = 300,
    repeat: u = 0,
    repeatType: f = "loop",
    ease: h = "easeOut",
    times: p,
  } = {},
  m = void 0,
) {
  const g = { [i]: s };
  p && (g.offset = p);
  const v = s1(h, l);
  Array.isArray(v) && (g.easing = v);
  const x = {
    delay: r,
    duration: l,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: u + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (m && (x.pseudoElement = m), e.animate(g, x));
}
function r1(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function gD({ type: e, ...i }) {
  return r1(e) && a1()
    ? e.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class o1 extends ph {
  constructor(i) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !i)
    )
      return;
    const {
      element: s,
      name: r,
      keyframes: l,
      pseudoElement: u,
      allowFlatten: f = !1,
      finalKeyframe: h,
      onComplete: p,
    } = i;
    ((this.isPseudoElement = !!u),
      (this.allowFlatten = f),
      (this.options = i),
      sh(typeof i.type != "string"));
    const m = gD(i);
    ((this.animation = pD(s, r, l, m, u)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !u)) {
          const g = mh(l, this.options, h, this.speed);
          (this.updateMotionValue && this.updateMotionValue(g),
            n1(s, r, g),
            this.animation.cancel());
        }
        (p?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const i = this.options?.element;
    !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Fe(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + Fe(i);
  }
  get time() {
    return Fe(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    const s = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = tn(i)),
      s && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    (i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(i) {
    this.manualStartTime = this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, rangeStart: s, rangeEnd: r, observe: l }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && mD()
        ? ((this.animation.timeline = i),
          s && (this.animation.rangeStart = s),
          r && (this.animation.rangeEnd = r),
          Xe)
        : l(this)
    );
  }
}
const l1 = { anticipate: zx, backInOut: Lx, circInOut: Bx };
function yD(e) {
  return e in l1;
}
function vD(e) {
  typeof e.ease == "string" && yD(e.ease) && (e.ease = l1[e.ease]);
}
const Vf = 10;
class bD extends o1 {
  constructor(i) {
    (vD(i),
      Jx(i),
      super(i),
      i.startTime !== void 0 && (this.startTime = i.startTime),
      (this.options = i));
  }
  updateMotionValue(i) {
    const {
      motionValue: s,
      onUpdate: r,
      onComplete: l,
      element: u,
      ...f
    } = this.options;
    if (!s) return;
    if (i !== void 0) {
      s.set(i);
      return;
    }
    const h = new gh({ ...f, autoplay: !1 }),
      p = Math.max(Vf, ge.now() - this.startTime),
      m = bn(0, Vf, p - Vf),
      g = h.sample(p).value,
      { name: v } = this.options;
    (u && v && n1(u, v, g),
      s.setWithVelocity(h.sample(Math.max(0, p - m)).value, g, m),
      h.stop());
  }
}
const jv = (e, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (en.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function xD(e) {
  const i = e[0];
  if (e.length === 1) return !0;
  for (let s = 0; s < e.length; s++) if (e[s] !== i) return !0;
}
function SD(e, i, s, r) {
  const l = e[0];
  if (l === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const u = e[e.length - 1],
    f = jv(l, i),
    h = jv(u, i);
  return !f || !h ? !1 : xD(e) || ((s === "spring" || r1(s)) && r);
}
function Td(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const wD = new Set(["opacity", "clipPath", "filter", "transform"]),
  TD = Dx(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ED(e) {
  const {
    motionValue: i,
    name: s,
    repeatDelay: r,
    repeatType: l,
    damping: u,
    type: f,
  } = e;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: p, transformTemplate: m } = i.owner.getProps();
  return (
    TD() &&
    s &&
    wD.has(s) &&
    (s !== "transform" || !m) &&
    !p &&
    !r &&
    l !== "mirror" &&
    u !== 0 &&
    f !== "inertia"
  );
}
const AD = 40;
class CD extends ph {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: r = "keyframes",
    repeat: l = 0,
    repeatDelay: u = 0,
    repeatType: f = "loop",
    keyframes: h,
    name: p,
    motionValue: m,
    element: g,
    ...v
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = ge.now()));
    const x = {
        autoplay: i,
        delay: s,
        type: r,
        repeat: l,
        repeatDelay: u,
        repeatType: f,
        name: p,
        motionValue: m,
        element: g,
        ...v,
      },
      T = g?.KeyframeResolver || yh;
    ((this.keyframeResolver = new T(
      h,
      (C, E, R) => this.onKeyframesResolved(C, E, x, !R),
      p,
      m,
      g,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(i, s, r, l) {
    this.keyframeResolver = void 0;
    const {
      name: u,
      type: f,
      velocity: h,
      delay: p,
      isHandoff: m,
      onUpdate: g,
    } = r;
    ((this.resolvedAt = ge.now()),
      SD(i, u, f, h) ||
        ((Hn.instantAnimations || !p) && g?.(mh(i, r, s)),
        (i[0] = i[i.length - 1]),
        Td(r),
        (r.repeat = 0)));
    const x = {
        startTime: l
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > AD
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...r,
        keyframes: i,
      },
      T = !m && ED(x),
      C = x.motionValue?.owner?.current,
      E = T ? new bD({ ...x, element: C }) : new gh(x);
    (E.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Xe),
      this.pendingTimeline &&
        ((this.stopTimeline = E.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = E));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, s) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), fD()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
function c1(e, i, s, r = 0, l = 1) {
  const u = Array.from(e)
      .sort((m, g) => m.sortNodePosition(g))
      .indexOf(i),
    f = e.size,
    h = (f - 1) * r;
  return typeof s == "function" ? s(u, f) : l === 1 ? u * r : h - u * r;
}
const RD = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function MD(e) {
  const i = RD.exec(e);
  if (!i) return [,];
  const [, s, r, l] = i;
  return [`--${s ?? r}`, l];
}
function u1(e, i, s = 1) {
  const [r, l] = MD(e);
  if (!r) return;
  const u = window.getComputedStyle(i).getPropertyValue(r);
  if (u) {
    const f = u.trim();
    return Cx(f) ? parseFloat(f) : f;
  }
  return ch(l) ? u1(l, i, s + 1) : l;
}
const DD = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  OD = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ND = { type: "keyframes", duration: 0.8 },
  jD = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  _D = (e, { keyframes: i }) =>
    i.length > 2
      ? ND
      : rs.has(e)
        ? e.startsWith("scale")
          ? OD(i[1])
          : DD
        : jD,
  VD = (e) => e !== null;
function LD(e, { repeat: i, repeatType: s = "loop" }, r) {
  const l = e.filter(VD),
    u = i && s !== "loop" && i % 2 === 1 ? 0 : l.length - 1;
  return l[u];
}
function f1(e, i) {
  if (e?.inherit && i) {
    const { inherit: s, ...r } = e;
    return { ...i, ...r };
  }
  return e;
}
function vh(e, i) {
  const s = e?.[i] ?? e?.default ?? e;
  return s !== e ? f1(s, e) : s;
}
function zD({
  when: e,
  delay: i,
  delayChildren: s,
  staggerChildren: r,
  staggerDirection: l,
  repeat: u,
  repeatType: f,
  repeatDelay: h,
  from: p,
  elapsed: m,
  ...g
}) {
  return !!Object.keys(g).length;
}
const bh =
  (e, i, s, r = {}, l, u) =>
  (f) => {
    const h = vh(r, e) || {},
      p = h.delay || r.delay || 0;
    let { elapsed: m = 0 } = r;
    m = m - tn(p);
    const g = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...h,
      delay: -m,
      onUpdate: (x) => {
        (i.set(x), h.onUpdate && h.onUpdate(x));
      },
      onComplete: () => {
        (f(), h.onComplete && h.onComplete());
      },
      name: e,
      motionValue: i,
      element: u ? void 0 : l,
    };
    (zD(h) || Object.assign(g, _D(e, g)),
      g.duration && (g.duration = tn(g.duration)),
      g.repeatDelay && (g.repeatDelay = tn(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from));
    let v = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        (Td(g), g.delay === 0 && (v = !0)),
      (Hn.instantAnimations || Hn.skipAnimations || l?.shouldSkipAnimations) &&
        ((v = !0), Td(g), (g.delay = 0)),
      (g.allowFlatten = !h.type && !h.ease),
      v && !u && i.get() !== void 0)
    ) {
      const x = LD(g.keyframes, h);
      if (x !== void 0) {
        zt.update(() => {
          (g.onUpdate(x), g.onComplete());
        });
        return;
      }
    }
    return h.isSync ? new gh(g) : new CD(g);
  };
function _v(e) {
  const i = [{}, {}];
  return (
    e?.values.forEach((s, r) => {
      ((i[0][r] = s.get()), (i[1][r] = s.getVelocity()));
    }),
    i
  );
}
function xh(e, i, s, r) {
  if (typeof i == "function") {
    const [l, u] = _v(r);
    i = i(s !== void 0 ? s : e.custom, l, u);
  }
  if (
    (typeof i == "string" && (i = e.variants && e.variants[i]),
    typeof i == "function")
  ) {
    const [l, u] = _v(r);
    i = i(s !== void 0 ? s : e.custom, l, u);
  }
  return i;
}
function Ia(e, i, s) {
  const r = e.getProps();
  return xh(r, i, s !== void 0 ? s : r.custom, e);
}
const d1 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ss,
  ]),
  Vv = 30,
  PD = (e) => !isNaN(parseFloat(e));
class BD {
  constructor(i, s = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        const l = ge.now();
        if (
          (this.updatedAt !== l && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const u of this.dependents) u.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = s.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = ge.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = PD(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new rh());
    const r = this.events[i].add(s);
    return i === "change"
      ? () => {
          (r(),
            zt.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, s) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = s));
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, s, r) {
    (this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(i, s = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(i));
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = ge.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Vv
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Vv);
    return Ox(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((s) => {
        ((this.hasAnimated = !0),
          (this.animation = i(s)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function es(e, i) {
  return new BD(e, i);
}
const Ed = (e) => Array.isArray(e);
function kD(e, i, s) {
  e.hasValue(i) ? e.getValue(i).set(s) : e.addValue(i, es(s));
}
function UD(e) {
  return Ed(e) ? e[e.length - 1] || 0 : e;
}
function HD(e, i) {
  const s = Ia(e, i);
  let { transitionEnd: r = {}, transition: l = {}, ...u } = s || {};
  u = { ...u, ...r };
  for (const f in u) {
    const h = UD(u[f]);
    kD(e, f, h);
  }
}
const he = (e) => !!(e && e.getVelocity);
function qD(e) {
  return !!(he(e) && e.add);
}
function Ad(e, i) {
  const s = e.getValue("willChange");
  if (qD(s)) return s.add(i);
  if (!s && Hn.WillChange) {
    const r = new Hn.WillChange("auto");
    (e.addValue("willChange", r), r.add(i));
  }
}
function Sh(e) {
  return e.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const GD = "framerAppearId",
  h1 = "data-" + Sh(GD);
function m1(e) {
  return e.props[h1];
}
function YD({ protectedKeys: e, needsAnimating: i }, s) {
  const r = e.hasOwnProperty(s) && i[s] !== !0;
  return ((i[s] = !1), r);
}
function p1(e, i, { delay: s = 0, transitionOverride: r, type: l } = {}) {
  let { transition: u, transitionEnd: f, ...h } = i;
  const p = e.getDefaultTransition();
  u = u ? f1(u, p) : p;
  const m = u?.reduceMotion;
  r && (u = r);
  const g = [],
    v = l && e.animationState && e.animationState.getState()[l];
  for (const x in h) {
    const T = e.getValue(x, e.latestValues[x] ?? null),
      C = h[x];
    if (C === void 0 || (v && YD(v, x))) continue;
    const E = { delay: s, ...vh(u || {}, x) },
      R = T.get();
    if (
      R !== void 0 &&
      !T.isAnimating &&
      !Array.isArray(C) &&
      C === R &&
      !E.velocity
    )
      continue;
    let N = !1;
    if (window.MotionHandoffAnimation) {
      const P = m1(e);
      if (P) {
        const V = window.MotionHandoffAnimation(P, x, zt);
        V !== null && ((E.startTime = V), (N = !0));
      }
    }
    Ad(e, x);
    const j = m ?? e.shouldReduceMotion;
    T.start(bh(x, T, C, j && d1.has(x) ? { type: !1 } : E, e, N));
    const O = T.animation;
    O && g.push(O);
  }
  if (f) {
    const x = () =>
      zt.update(() => {
        f && HD(e, f);
      });
    g.length ? Promise.all(g).then(x) : x();
  }
  return g;
}
function Cd(e, i, s = {}) {
  const r = Ia(e, i, s.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: l = e.getDefaultTransition() || {} } = r || {};
  s.transitionOverride && (l = s.transitionOverride);
  const u = r ? () => Promise.all(p1(e, r, s)) : () => Promise.resolve(),
    f =
      e.variantChildren && e.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: g,
              staggerDirection: v,
            } = l;
            return FD(e, i, p, m, g, v, s);
          }
        : () => Promise.resolve(),
    { when: h } = l;
  if (h) {
    const [p, m] = h === "beforeChildren" ? [u, f] : [f, u];
    return p().then(() => m());
  } else return Promise.all([u(), f(s.delay)]);
}
function FD(e, i, s = 0, r = 0, l = 0, u = 1, f) {
  const h = [];
  for (const p of e.variantChildren)
    (p.notify("AnimationStart", i),
      h.push(
        Cd(p, i, {
          ...f,
          delay:
            s +
            (typeof r == "function" ? 0 : r) +
            c1(e.variantChildren, p, r, l, u),
        }).then(() => p.notify("AnimationComplete", i)),
      ));
  return Promise.all(h);
}
function XD(e, i, s = {}) {
  e.notify("AnimationStart", i);
  let r;
  if (Array.isArray(i)) {
    const l = i.map((u) => Cd(e, u, s));
    r = Promise.all(l);
  } else if (typeof i == "string") r = Cd(e, i, s);
  else {
    const l = typeof i == "function" ? Ia(e, i, s.custom) : i;
    r = Promise.all(p1(e, l, s));
  }
  return r.then(() => {
    e.notify("AnimationComplete", i);
  });
}
const KD = { test: (e) => e === "auto", parse: (e) => e },
  g1 = (e) => (i) => i.test(e),
  y1 = [as, it, yn, vi, TM, wM, KD],
  Lv = (e) => y1.find(g1(e));
function QD(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Mx(e)
      : !0;
}
const ZD = new Set(["brightness", "contrast", "saturate", "opacity"]);
function WD(e) {
  const [i, s] = e.slice(0, -1).split("(");
  if (i === "drop-shadow") return e;
  const [r] = s.match(uh) || [];
  if (!r) return e;
  const l = s.replace(r, "");
  let u = ZD.has(i) ? 1 : 0;
  return (r !== s && (u *= 100), i + "(" + u + l + ")");
}
const ID = /\b([a-z-]*)\(.*?\)/gu,
  Rd = {
    ...en,
    getAnimatableNone: (e) => {
      const i = e.match(ID);
      return i ? i.map(WD).join(" ") : e;
    },
  },
  Md = {
    ...en,
    getAnimatableNone: (e) => {
      const i = en.parse(e);
      return en.createTransformer(e)(
        i.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  zv = { ...as, transform: Math.round },
  $D = {
    rotate: vi,
    rotateX: vi,
    rotateY: vi,
    rotateZ: vi,
    scale: tl,
    scaleX: tl,
    scaleY: tl,
    scaleZ: tl,
    skew: vi,
    skewX: vi,
    skewY: vi,
    distance: it,
    translateX: it,
    translateY: it,
    translateZ: it,
    x: it,
    y: it,
    z: it,
    perspective: it,
    transformPerspective: it,
    opacity: xr,
    originX: wv,
    originY: wv,
    originZ: it,
  },
  wh = {
    borderWidth: it,
    borderTopWidth: it,
    borderRightWidth: it,
    borderBottomWidth: it,
    borderLeftWidth: it,
    borderRadius: it,
    borderTopLeftRadius: it,
    borderTopRightRadius: it,
    borderBottomRightRadius: it,
    borderBottomLeftRadius: it,
    width: it,
    maxWidth: it,
    height: it,
    maxHeight: it,
    top: it,
    right: it,
    bottom: it,
    left: it,
    inset: it,
    insetBlock: it,
    insetBlockStart: it,
    insetBlockEnd: it,
    insetInline: it,
    insetInlineStart: it,
    insetInlineEnd: it,
    padding: it,
    paddingTop: it,
    paddingRight: it,
    paddingBottom: it,
    paddingLeft: it,
    paddingBlock: it,
    paddingBlockStart: it,
    paddingBlockEnd: it,
    paddingInline: it,
    paddingInlineStart: it,
    paddingInlineEnd: it,
    margin: it,
    marginTop: it,
    marginRight: it,
    marginBottom: it,
    marginLeft: it,
    marginBlock: it,
    marginBlockStart: it,
    marginBlockEnd: it,
    marginInline: it,
    marginInlineStart: it,
    marginInlineEnd: it,
    fontSize: it,
    backgroundPositionX: it,
    backgroundPositionY: it,
    ...$D,
    zIndex: zv,
    fillOpacity: xr,
    strokeOpacity: xr,
    numOctaves: zv,
  },
  JD = {
    ...wh,
    color: Zt,
    backgroundColor: Zt,
    outlineColor: Zt,
    fill: Zt,
    stroke: Zt,
    borderColor: Zt,
    borderTopColor: Zt,
    borderRightColor: Zt,
    borderBottomColor: Zt,
    borderLeftColor: Zt,
    filter: Rd,
    WebkitFilter: Rd,
    mask: Md,
    WebkitMask: Md,
  },
  v1 = (e) => JD[e],
  tO = new Set([Rd, Md]);
function b1(e, i) {
  let s = v1(e);
  return (
    tO.has(s) || (s = en),
    s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
  );
}
const eO = new Set(["auto", "none", "0"]);
function nO(e, i, s) {
  let r = 0,
    l;
  for (; r < e.length && !l; ) {
    const u = e[r];
    (typeof u == "string" && !eO.has(u) && Sr(u).values.length && (l = e[r]),
      r++);
  }
  if (l && s) for (const u of i) e[u] = b1(s, l);
}
class iO extends yh {
  constructor(i, s, r, l, u) {
    super(i, s, r, l, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: r } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let g = 0; g < i.length; g++) {
      let v = i[g];
      if (typeof v == "string" && ((v = v.trim()), ch(v))) {
        const x = u1(v, s.current);
        (x !== void 0 && (i[g] = x),
          g === i.length - 1 && (this.finalKeyframe = v));
      }
    }
    if ((this.resolveNoneKeyframes(), !d1.has(r) || i.length !== 2)) return;
    const [l, u] = i,
      f = Lv(l),
      h = Lv(u),
      p = Sv(l),
      m = Sv(u);
    if (p !== m && xi[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== h)
      if (Ov(f) && Ov(h))
        for (let g = 0; g < i.length; g++) {
          const v = i[g];
          typeof v == "string" && (i[g] = parseFloat(v));
        }
      else xi[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      r = [];
    for (let l = 0; l < i.length; l++) (i[l] === null || QD(i[l])) && r.push(l);
    r.length && nO(i, r, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: r } = this;
    if (!i || !i.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = xi[r](
        i.measureViewportBox(),
        window.getComputedStyle(i.current),
      )),
      (s[0] = this.measuredOrigin));
    const l = s[s.length - 1];
    l !== void 0 && i.getValue(r, l).jump(l, !1);
  }
  measureEndState() {
    const { element: i, name: s, unresolvedKeyframes: r } = this;
    if (!i || !i.current) return;
    const l = i.getValue(s);
    l && l.jump(this.measuredOrigin, !1);
    const u = r.length - 1,
      f = r[u];
    ((r[u] = xi[s](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([h, p]) => {
          i.getValue(h).set(p);
        }),
      this.resolveNoneKeyframes());
  }
}
const aO = new Set(["opacity", "clipPath", "filter", "transform"]);
function x1(e, i, s) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let r = document;
    const l = s?.[e] ?? r.querySelectorAll(e);
    return l ? Array.from(l) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const S1 = (e, i) => (i && typeof e == "number" ? i.transform(e) : e);
function sO(e) {
  return Rx(e) && "offsetHeight" in e;
}
const { schedule: Th } = Hx(queueMicrotask, !1),
  $e = { x: !1, y: !1 };
function w1() {
  return $e.x || $e.y;
}
function rO(e) {
  return e === "x" || e === "y"
    ? $e[e]
      ? null
      : (($e[e] = !0),
        () => {
          $e[e] = !1;
        })
    : $e.x || $e.y
      ? null
      : (($e.x = $e.y = !0),
        () => {
          $e.x = $e.y = !1;
        });
}
function T1(e, i) {
  const s = x1(e),
    r = new AbortController(),
    l = { passive: !0, ...i, signal: r.signal };
  return [s, l, () => r.abort()];
}
function oO(e) {
  return !(e.pointerType === "touch" || w1());
}
function lO(e, i, s = {}) {
  const [r, l, u] = T1(e, s);
  return (
    r.forEach((f) => {
      let h = !1,
        p = !1,
        m;
      const g = () => {
          f.removeEventListener("pointerleave", C);
        },
        v = (R) => {
          (m && (m(R), (m = void 0)), g());
        },
        x = (R) => {
          ((h = !1),
            window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", x),
            p && ((p = !1), v(R)));
        },
        T = () => {
          ((h = !0),
            window.addEventListener("pointerup", x, l),
            window.addEventListener("pointercancel", x, l));
        },
        C = (R) => {
          if (R.pointerType !== "touch") {
            if (h) {
              p = !0;
              return;
            }
            v(R);
          }
        },
        E = (R) => {
          if (!oO(R)) return;
          p = !1;
          const N = i(f, R);
          typeof N == "function" &&
            ((m = N), f.addEventListener("pointerleave", C, l));
        };
      (f.addEventListener("pointerenter", E, l),
        f.addEventListener("pointerdown", T, l));
    }),
    u
  );
}
const E1 = (e, i) => (i ? (e === i ? !0 : E1(e, i.parentElement)) : !1),
  Eh = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  cO = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function uO(e) {
  return cO.has(e.tagName) || e.isContentEditable === !0;
}
const fO = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function dO(e) {
  return fO.has(e.tagName) || e.isContentEditable === !0;
}
const ul = new WeakSet();
function Pv(e) {
  return (i) => {
    i.key === "Enter" && e(i);
  };
}
function Lf(e, i) {
  e.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }),
  );
}
const hO = (e, i) => {
  const s = e.currentTarget;
  if (!s) return;
  const r = Pv(() => {
    if (ul.has(s)) return;
    Lf(s, "down");
    const l = Pv(() => {
        Lf(s, "up");
      }),
      u = () => Lf(s, "cancel");
    (s.addEventListener("keyup", l, i), s.addEventListener("blur", u, i));
  });
  (s.addEventListener("keydown", r, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", r), i));
};
function Bv(e) {
  return Eh(e) && !w1();
}
const kv = new WeakSet();
function mO(e, i, s = {}) {
  const [r, l, u] = T1(e, s),
    f = (h) => {
      const p = h.currentTarget;
      if (!Bv(h) || kv.has(h)) return;
      (ul.add(p), s.stopPropagation && kv.add(h));
      const m = i(p, h),
        g = (T, C) => {
          (window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", x),
            ul.has(p) && ul.delete(p),
            Bv(T) && typeof m == "function" && m(T, { success: C }));
        },
        v = (T) => {
          g(
            T,
            p === window ||
              p === document ||
              s.useGlobalTarget ||
              E1(p, T.target),
          );
        },
        x = (T) => {
          g(T, !1);
        };
      (window.addEventListener("pointerup", v, l),
        window.addEventListener("pointercancel", x, l));
    };
  return (
    r.forEach((h) => {
      ((s.useGlobalTarget ? window : h).addEventListener("pointerdown", f, l),
        sO(h) &&
          (h.addEventListener("focus", (m) => hO(m, l)),
          !uO(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0)));
    }),
    u
  );
}
function Ah(e) {
  return Rx(e) && "ownerSVGElement" in e;
}
const fl = new WeakMap();
let dl;
const A1 = (e, i, s) => (r, l) =>
    l && l[0]
      ? l[0][e + "Size"]
      : Ah(r) && "getBBox" in r
        ? r.getBBox()[i]
        : r[s],
  pO = A1("inline", "width", "offsetWidth"),
  gO = A1("block", "height", "offsetHeight");
function yO({ target: e, borderBoxSize: i }) {
  fl.get(e)?.forEach((s) => {
    s(e, {
      get width() {
        return pO(e, i);
      },
      get height() {
        return gO(e, i);
      },
    });
  });
}
function vO(e) {
  e.forEach(yO);
}
function bO() {
  typeof ResizeObserver > "u" || (dl = new ResizeObserver(vO));
}
function xO(e, i) {
  dl || bO();
  const s = x1(e);
  return (
    s.forEach((r) => {
      let l = fl.get(r);
      (l || ((l = new Set()), fl.set(r, l)), l.add(i), dl?.observe(r));
    }),
    () => {
      s.forEach((r) => {
        const l = fl.get(r);
        (l?.delete(i), l?.size || dl?.unobserve(r));
      });
    }
  );
}
const hl = new Set();
let Xa;
function SO() {
  ((Xa = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    hl.forEach((i) => i(e));
  }),
    window.addEventListener("resize", Xa));
}
function wO(e) {
  return (
    hl.add(e),
    Xa || SO(),
    () => {
      (hl.delete(e),
        !hl.size &&
          typeof Xa == "function" &&
          (window.removeEventListener("resize", Xa), (Xa = void 0)));
    }
  );
}
function Uv(e, i) {
  return typeof e == "function" ? wO(e) : xO(e, i);
}
function TO(e) {
  return Ah(e) && e.tagName === "svg";
}
const EO = [...y1, Zt, en],
  AO = (e) => EO.find(g1(e)),
  Hv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ka = () => ({ x: Hv(), y: Hv() }),
  qv = () => ({ min: 0, max: 0 }),
  te = () => ({ x: qv(), y: qv() }),
  CO = new WeakMap();
function Kl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function wr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Ch = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Rh = ["initial", ...Ch];
function Ql(e) {
  return Kl(e.animate) || Rh.some((i) => wr(e[i]));
}
function C1(e) {
  return !!(Ql(e) || e.variants);
}
function RO(e, i, s) {
  for (const r in i) {
    const l = i[r],
      u = s[r];
    if (he(l)) e.addValue(r, l);
    else if (he(u)) e.addValue(r, es(l, { owner: e }));
    else if (u !== l)
      if (e.hasValue(r)) {
        const f = e.getValue(r);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l);
      } else {
        const f = e.getStaticValue(r);
        e.addValue(r, es(f !== void 0 ? f : l, { owner: e }));
      }
  }
  for (const r in s) i[r] === void 0 && e.removeValue(r);
  return i;
}
const Dd = { current: null },
  R1 = { current: !1 },
  MO = typeof window < "u";
function DO() {
  if (((R1.current = !0), !!MO))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Dd.current = e.matches);
      (e.addEventListener("change", i), i());
    } else Dd.current = !1;
}
const Gv = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Dl = {};
function M1(e) {
  Dl = e;
}
function OO() {
  return Dl;
}
class NO {
  scrapeMotionValuesFromProps(i, s, r) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: r,
      reducedMotionConfig: l,
      skipAnimations: u,
      blockInitialAnimation: f,
      visualState: h,
    },
    p = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = yh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const T = ge.now();
        this.renderScheduledAt < T &&
          ((this.renderScheduledAt = T), zt.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: g } = h;
    ((this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = s.initial ? { ...m } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = r),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = l),
      (this.skipAnimationsConfig = u),
      (this.options = p),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Ql(s)),
      (this.isVariantNode = C1(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: v, ...x } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this,
    );
    for (const T in x) {
      const C = x[T];
      m[T] !== void 0 && he(C) && C.set(m[T]);
    }
  }
  mount(i) {
    if (this.hasBeenMounted)
      for (const s in this.initialValues)
        (this.values.get(s)?.jump(this.initialValues[s]),
          (this.latestValues[s] = this.initialValues[s]));
    ((this.current = i),
      CO.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, r) => this.bindToMotionValue(r, s)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (R1.current || DO(), (this.shouldReduceMotion = Dd.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Ti(this.notifyUpdate),
      Ti(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    (this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i));
  }
  removeChild(i) {
    (this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i));
  }
  bindToMotionValue(i, s) {
    if (
      (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(),
      s.accelerate && aO.has(i) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: f,
          keyframes: h,
          times: p,
          ease: m,
          duration: g,
        } = s.accelerate,
        v = new o1({
          element: this.current,
          name: i,
          keyframes: h,
          times: p,
          ease: m,
          duration: tn(g),
        }),
        x = f(v);
      this.valueSubscriptions.set(i, () => {
        (x(), v.cancel());
      });
      return;
    }
    const r = rs.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const l = s.on("change", (f) => {
      ((this.latestValues[i] = f),
        this.props.onUpdate && zt.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let u;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (u = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
        (l(), u && u(), s.owner && s.stop());
      }));
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in Dl) {
      const s = Dl[i];
      if (!s) continue;
      const { isEnabled: r, Feature: l } = s;
      if (
        (!this.features[i] &&
          l &&
          r(this.props) &&
          (this.features[i] = new l(this)),
        this.features[i])
      ) {
        const u = this.features[i];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : te();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s;
  }
  update(i, s) {
    ((i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s));
    for (let r = 0; r < Gv.length; r++) {
      const l = Gv[r];
      this.propEventSubscriptions[l] &&
        (this.propEventSubscriptions[l](),
        delete this.propEventSubscriptions[l]);
      const u = "on" + l,
        f = i[u];
      f && (this.propEventSubscriptions[l] = this.on(l, f));
    }
    ((this.prevMotionValues = RO(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(i),
        () => s.variantChildren.delete(i)
      );
  }
  addValue(i, s) {
    const r = this.values.get(i);
    s !== r &&
      (r && this.removeValue(i),
      this.bindToMotionValue(i, s),
      this.values.set(i, s),
      (this.latestValues[i] = s.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const s = this.valueSubscriptions.get(i);
    (s && (s(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let r = this.values.get(i);
    return (
      r === void 0 &&
        s !== void 0 &&
        ((r = es(s === null ? void 0 : s, { owner: this })),
        this.addValue(i, r)),
      r
    );
  }
  readValue(i, s) {
    let r =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Cx(r) || Mx(r))
          ? (r = parseFloat(r))
          : !AO(r) && en.test(s) && (r = b1(i, s)),
        this.setBaseTarget(i, he(r) ? r.get() : r)),
      he(r) ? r.get() : r
    );
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  getBaseTarget(i) {
    const { initial: s } = this.props;
    let r;
    if (typeof s == "string" || typeof s == "object") {
      const u = xh(this.props, s, this.presenceContext?.custom);
      u && (r = u[i]);
    }
    if (s && r !== void 0) return r;
    const l = this.getBaseTargetFromProps(this.props, i);
    return l !== void 0 && !he(l)
      ? l
      : this.initialValues[i] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, s) {
    return (
      this.events[i] || (this.events[i] = new rh()),
      this.events[i].add(s)
    );
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
  scheduleRenderMicrotask() {
    Th.render(this.render);
  }
}
class D1 extends NO {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = iO));
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    const r = i.style;
    return r ? r[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: r }) {
    (delete s[i], delete r[i]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    he(i) &&
      (this.childSubscription = i.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
class Ai {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
function O1({ top: e, left: i, right: s, bottom: r }) {
  return { x: { min: i, max: s }, y: { min: e, max: r } };
}
function jO({ x: e, y: i }) {
  return { top: i.min, right: e.max, bottom: i.max, left: e.min };
}
function _O(e, i) {
  if (!i) return e;
  const s = i({ x: e.left, y: e.top }),
    r = i({ x: e.right, y: e.bottom });
  return { top: s.y, left: s.x, bottom: r.y, right: r.x };
}
function zf(e) {
  return e === void 0 || e === 1;
}
function Od({ scale: e, scaleX: i, scaleY: s }) {
  return !zf(e) || !zf(i) || !zf(s);
}
function Ki(e) {
  return (
    Od(e) ||
    N1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function N1(e) {
  return Yv(e.x) || Yv(e.y);
}
function Yv(e) {
  return e && e !== "0%";
}
function Ol(e, i, s) {
  const r = e - s,
    l = i * r;
  return s + l;
}
function Fv(e, i, s, r, l) {
  return (l !== void 0 && (e = Ol(e, l, r)), Ol(e, s, r) + i);
}
function Nd(e, i = 0, s = 1, r, l) {
  ((e.min = Fv(e.min, i, s, r, l)), (e.max = Fv(e.max, i, s, r, l)));
}
function j1(e, { x: i, y: s }) {
  (Nd(e.x, i.translate, i.scale, i.originPoint),
    Nd(e.y, s.translate, s.scale, s.originPoint));
}
const Xv = 0.999999999999,
  Kv = 1.0000000000001;
function VO(e, i, s, r = !1) {
  const l = s.length;
  if (!l) return;
  i.x = i.y = 1;
  let u, f;
  for (let h = 0; h < l; h++) {
    ((u = s[h]), (f = u.projectionDelta));
    const { visualElement: p } = u.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (r &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        Za(e, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), j1(e, f)),
      r && Ki(u.latestValues) && Za(e, u.latestValues));
  }
  (i.x < Kv && i.x > Xv && (i.x = 1), i.y < Kv && i.y > Xv && (i.y = 1));
}
function Qa(e, i) {
  ((e.min = e.min + i), (e.max = e.max + i));
}
function Qv(e, i, s, r, l = 0.5) {
  const u = Ht(e.min, e.max, l);
  Nd(e, i, s, u, r);
}
function Zv(e, i) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (i.max - i.min) : e;
}
function Za(e, i) {
  (Qv(e.x, Zv(i.x, e.x), i.scaleX, i.scale, i.originX),
    Qv(e.y, Zv(i.y, e.y), i.scaleY, i.scale, i.originY));
}
function _1(e, i) {
  return O1(_O(e.getBoundingClientRect(), i));
}
function LO(e, i, s) {
  const r = _1(e, s),
    { scroll: l } = i;
  return (l && (Qa(r.x, l.offset.x), Qa(r.y, l.offset.y)), r);
}
const zO = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  PO = ss.length;
function BO(e, i, s) {
  let r = "",
    l = !0;
  for (let u = 0; u < PO; u++) {
    const f = ss[u],
      h = e[f];
    if (h === void 0) continue;
    let p = !0;
    if (typeof h == "number") p = h === (f.startsWith("scale") ? 1 : 0);
    else {
      const m = parseFloat(h);
      p = f.startsWith("scale") ? m === 1 : m === 0;
    }
    if (!p || s) {
      const m = S1(h, wh[f]);
      if (!p) {
        l = !1;
        const g = zO[f] || f;
        r += `${g}(${m}) `;
      }
      s && (i[f] = m);
    }
  }
  return ((r = r.trim()), s ? (r = s(i, l ? "" : r)) : l && (r = "none"), r);
}
function Mh(e, i, s) {
  const { style: r, vars: l, transformOrigin: u } = e;
  let f = !1,
    h = !1;
  for (const p in i) {
    const m = i[p];
    if (rs.has(p)) {
      f = !0;
      continue;
    } else if (Gx(p)) {
      l[p] = m;
      continue;
    } else {
      const g = S1(m, wh[p]);
      p.startsWith("origin") ? ((h = !0), (u[p] = g)) : (r[p] = g);
    }
  }
  if (
    (i.transform ||
      (f || s
        ? (r.transform = BO(i, e.transform, s))
        : r.transform && (r.transform = "none")),
    h)
  ) {
    const { originX: p = "50%", originY: m = "50%", originZ: g = 0 } = u;
    r.transformOrigin = `${p} ${m} ${g}`;
  }
}
function V1(e, { style: i, vars: s }, r, l) {
  const u = e.style;
  let f;
  for (f in i) u[f] = i[f];
  l?.applyProjectionStyles(u, r);
  for (f in s) u.setProperty(f, s[f]);
}
function Wv(e, i) {
  return i.max === i.min ? 0 : (e / (i.max - i.min)) * 100;
}
const or = {
    correct: (e, i) => {
      if (!i.target) return e;
      if (typeof e == "string")
        if (it.test(e)) e = parseFloat(e);
        else return e;
      const s = Wv(e, i.target.x),
        r = Wv(e, i.target.y);
      return `${s}% ${r}%`;
    },
  },
  kO = {
    correct: (e, { treeScale: i, projectionDelta: s }) => {
      const r = e,
        l = en.parse(e);
      if (l.length > 5) return r;
      const u = en.createTransformer(e),
        f = typeof l[0] != "number" ? 1 : 0,
        h = s.x.scale * i.x,
        p = s.y.scale * i.y;
      ((l[0 + f] /= h), (l[1 + f] /= p));
      const m = Ht(h, p, 0.5);
      return (
        typeof l[2 + f] == "number" && (l[2 + f] /= m),
        typeof l[3 + f] == "number" && (l[3 + f] /= m),
        u(l)
      );
    },
  },
  jd = {
    borderRadius: {
      ...or,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: or,
    borderTopRightRadius: or,
    borderBottomLeftRadius: or,
    borderBottomRightRadius: or,
    boxShadow: kO,
  };
function L1(e, { layout: i, layoutId: s }) {
  return (
    rs.has(e) ||
    e.startsWith("origin") ||
    ((i || s !== void 0) && (!!jd[e] || e === "opacity"))
  );
}
function Dh(e, i, s) {
  const r = e.style,
    l = i?.style,
    u = {};
  if (!r) return u;
  for (const f in r)
    (he(r[f]) ||
      (l && he(l[f])) ||
      L1(f, e) ||
      s?.getValue(f)?.liveStyle !== void 0) &&
      (u[f] = r[f]);
  return u;
}
function UO(e) {
  return window.getComputedStyle(e);
}
class HO extends D1 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = V1));
  }
  readValueFromInstance(i, s) {
    if (rs.has(s)) return this.projection?.isProjecting ? vd(s) : rD(i, s);
    {
      const r = UO(i),
        l = (Gx(s) ? r.getPropertyValue(s) : r[s]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return _1(i, s);
  }
  build(i, s, r) {
    Mh(i, s, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return Dh(i, s, r);
  }
}
const qO = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  GO = { offset: "strokeDashoffset", array: "strokeDasharray" };
function YO(e, i, s = 1, r = 0, l = !0) {
  e.pathLength = 1;
  const u = l ? qO : GO;
  ((e[u.offset] = `${-r}`), (e[u.array] = `${i} ${s}`));
}
const FO = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function z1(
  e,
  {
    attrX: i,
    attrY: s,
    attrScale: r,
    pathLength: l,
    pathSpacing: u = 1,
    pathOffset: f = 0,
    ...h
  },
  p,
  m,
  g,
) {
  if ((Mh(e, h, m), p)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: v, style: x } = e;
  (v.transform && ((x.transform = v.transform), delete v.transform),
    (x.transform || v.transformOrigin) &&
      ((x.transformOrigin = v.transformOrigin ?? "50% 50%"),
      delete v.transformOrigin),
    x.transform &&
      ((x.transformBox = g?.transformBox ?? "fill-box"),
      delete v.transformBox));
  for (const T of FO) v[T] !== void 0 && ((x[T] = v[T]), delete v[T]);
  (i !== void 0 && (v.x = i),
    s !== void 0 && (v.y = s),
    r !== void 0 && (v.scale = r),
    l !== void 0 && YO(v, l, u, f, !1));
}
const P1 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  B1 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function XO(e, i, s, r) {
  V1(e, i, void 0, r);
  for (const l in i.attrs) e.setAttribute(P1.has(l) ? l : Sh(l), i.attrs[l]);
}
function k1(e, i, s) {
  const r = Dh(e, i, s);
  for (const l in e)
    if (he(e[l]) || he(i[l])) {
      const u =
        ss.indexOf(l) !== -1
          ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
          : l;
      r[u] = e[l];
    }
  return r;
}
class KO extends D1 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = te));
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (rs.has(s)) {
      const r = v1(s);
      return (r && r.default) || 0;
    }
    return ((s = P1.has(s) ? s : Sh(s)), i.getAttribute(s));
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return k1(i, s, r);
  }
  build(i, s, r) {
    z1(i, s, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(i, s, r, l) {
    XO(i, s, r, l);
  }
  mount(i) {
    ((this.isSVGTag = B1(i.tagName)), super.mount(i));
  }
}
const QO = Rh.length;
function U1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const s = e.parent ? U1(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (s.initial = e.props.initial), s);
  }
  const i = {};
  for (let s = 0; s < QO; s++) {
    const r = Rh[s],
      l = e.props[r];
    (wr(l) || l === !1) && (i[r] = l);
  }
  return i;
}
function H1(e, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== e.length) return !1;
  for (let r = 0; r < s; r++) if (i[r] !== e[r]) return !1;
  return !0;
}
const ZO = [...Ch].reverse(),
  WO = Ch.length;
function IO(e) {
  return (i) =>
    Promise.all(i.map(({ animation: s, options: r }) => XD(e, s, r)));
}
function $O(e) {
  let i = IO(e),
    s = Iv(),
    r = !0,
    l = !1;
  const u = (m) => (g, v) => {
    const x = Ia(e, v, m === "exit" ? e.presenceContext?.custom : void 0);
    if (x) {
      const { transition: T, transitionEnd: C, ...E } = x;
      g = { ...g, ...E, ...C };
    }
    return g;
  };
  function f(m) {
    i = m(e);
  }
  function h(m) {
    const { props: g } = e,
      v = U1(e.parent) || {},
      x = [],
      T = new Set();
    let C = {},
      E = 1 / 0;
    for (let N = 0; N < WO; N++) {
      const j = ZO[N],
        O = s[j],
        P = g[j] !== void 0 ? g[j] : v[j],
        V = wr(P),
        F = j === m ? O.isActive : null;
      F === !1 && (E = N);
      let Z = P === v[j] && P !== g[j] && V;
      if (
        (Z && (r || l) && e.manuallyAnimateOnMount && (Z = !1),
        (O.protectedKeys = { ...C }),
        (!O.isActive && F === null) ||
          (!P && !O.prevProp) ||
          Kl(P) ||
          typeof P == "boolean")
      )
        continue;
      if (j === "exit" && O.isActive && F !== !0) {
        O.prevResolvedValues && (C = { ...C, ...O.prevResolvedValues });
        continue;
      }
      const H = JO(O.prevProp, P);
      let J = H || (j === m && O.isActive && !Z && V) || (N > E && V),
        lt = !1;
      const pt = Array.isArray(P) ? P : [P];
      let ct = pt.reduce(u(j), {});
      F === !1 && (ct = {});
      const { prevResolvedValues: wt = {} } = O,
        $ = { ...wt, ...ct },
        ft = (X) => {
          ((J = !0),
            T.has(X) && ((lt = !0), T.delete(X)),
            (O.needsAnimating[X] = !0));
          const tt = e.getValue(X);
          tt && (tt.liveStyle = !1);
        };
      for (const X in $) {
        const tt = ct[X],
          A = wt[X];
        if (C.hasOwnProperty(X)) continue;
        let G = !1;
        (Ed(tt) && Ed(A) ? (G = !H1(tt, A)) : (G = tt !== A),
          G
            ? tt != null
              ? ft(X)
              : T.add(X)
            : tt !== void 0 && T.has(X)
              ? ft(X)
              : (O.protectedKeys[X] = !0));
      }
      ((O.prevProp = P),
        (O.prevResolvedValues = ct),
        O.isActive && (C = { ...C, ...ct }),
        (r || l) && e.blockInitialAnimation && (J = !1));
      const L = Z && H;
      J &&
        (!L || lt) &&
        x.push(
          ...pt.map((X) => {
            const tt = { type: j };
            if (
              typeof X == "string" &&
              (r || l) &&
              !L &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: A } = e,
                G = Ia(A, X);
              if (A.enteringChildren && G) {
                const { delayChildren: I } = G.transition || {};
                tt.delay = c1(A.enteringChildren, e, I);
              }
            }
            return { animation: X, options: tt };
          }),
        );
    }
    if (T.size) {
      const N = {};
      if (typeof g.initial != "boolean") {
        const j = Ia(e, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        j && j.transition && (N.transition = j.transition);
      }
      (T.forEach((j) => {
        const O = e.getBaseTarget(j),
          P = e.getValue(j);
        (P && (P.liveStyle = !0), (N[j] = O ?? null));
      }),
        x.push({ animation: N }));
    }
    let R = !!x.length;
    return (
      r &&
        (g.initial === !1 || g.initial === g.animate) &&
        !e.manuallyAnimateOnMount &&
        (R = !1),
      (r = !1),
      (l = !1),
      R ? i(x) : Promise.resolve()
    );
  }
  function p(m, g) {
    if (s[m].isActive === g) return Promise.resolve();
    (e.variantChildren?.forEach((x) => x.animationState?.setActive(m, g)),
      (s[m].isActive = g));
    const v = h(m);
    for (const x in s) s[x].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: p,
    setAnimateFunction: f,
    getState: () => s,
    reset: () => {
      ((s = Iv()), (l = !0));
    },
  };
}
function JO(e, i) {
  return typeof i == "string" ? i !== e : Array.isArray(i) ? !H1(i, e) : !1;
}
function Xi(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Iv() {
  return {
    animate: Xi(!0),
    whileInView: Xi(),
    whileHover: Xi(),
    whileTap: Xi(),
    whileDrag: Xi(),
    whileFocus: Xi(),
    exit: Xi(),
  };
}
function $v(e, i) {
  ((e.min = i.min), (e.max = i.max));
}
function Ie(e, i) {
  ($v(e.x, i.x), $v(e.y, i.y));
}
function Jv(e, i) {
  ((e.translate = i.translate),
    (e.scale = i.scale),
    (e.originPoint = i.originPoint),
    (e.origin = i.origin));
}
const q1 = 1e-4,
  tN = 1 - q1,
  eN = 1 + q1,
  G1 = 0.01,
  nN = 0 - G1,
  iN = 0 + G1;
function ye(e) {
  return e.max - e.min;
}
function aN(e, i, s) {
  return Math.abs(e - i) <= s;
}
function t0(e, i, s, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Ht(i.min, i.max, e.origin)),
    (e.scale = ye(s) / ye(i)),
    (e.translate = Ht(s.min, s.max, e.origin) - e.originPoint),
    ((e.scale >= tN && e.scale <= eN) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= nN && e.translate <= iN) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function mr(e, i, s, r) {
  (t0(e.x, i.x, s.x, r ? r.originX : void 0),
    t0(e.y, i.y, s.y, r ? r.originY : void 0));
}
function e0(e, i, s) {
  ((e.min = s.min + i.min), (e.max = e.min + ye(i)));
}
function sN(e, i, s) {
  (e0(e.x, i.x, s.x), e0(e.y, i.y, s.y));
}
function n0(e, i, s) {
  ((e.min = i.min - s.min), (e.max = e.min + ye(i)));
}
function Nl(e, i, s) {
  (n0(e.x, i.x, s.x), n0(e.y, i.y, s.y));
}
function i0(e, i, s, r, l) {
  return (
    (e -= i),
    (e = Ol(e, 1 / s, r)),
    l !== void 0 && (e = Ol(e, 1 / l, r)),
    e
  );
}
function rN(e, i = 0, s = 1, r = 0.5, l, u = e, f = e) {
  if (
    (yn.test(i) &&
      ((i = parseFloat(i)), (i = Ht(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let h = Ht(u.min, u.max, r);
  (e === u && (h -= i),
    (e.min = i0(e.min, i, s, h, l)),
    (e.max = i0(e.max, i, s, h, l)));
}
function a0(e, i, [s, r, l], u, f) {
  rN(e, i[s], i[r], i[l], i.scale, u, f);
}
const oN = ["x", "scaleX", "originX"],
  lN = ["y", "scaleY", "originY"];
function s0(e, i, s, r) {
  (a0(e.x, i, oN, s ? s.x : void 0, r ? r.x : void 0),
    a0(e.y, i, lN, s ? s.y : void 0, r ? r.y : void 0));
}
function r0(e) {
  return e.translate === 0 && e.scale === 1;
}
function Y1(e) {
  return r0(e.x) && r0(e.y);
}
function o0(e, i) {
  return e.min === i.min && e.max === i.max;
}
function cN(e, i) {
  return o0(e.x, i.x) && o0(e.y, i.y);
}
function l0(e, i) {
  return (
    Math.round(e.min) === Math.round(i.min) &&
    Math.round(e.max) === Math.round(i.max)
  );
}
function F1(e, i) {
  return l0(e.x, i.x) && l0(e.y, i.y);
}
function c0(e) {
  return ye(e.x) / ye(e.y);
}
function u0(e, i) {
  return (
    e.translate === i.translate &&
    e.scale === i.scale &&
    e.originPoint === i.originPoint
  );
}
function hn(e) {
  return [e("x"), e("y")];
}
function uN(e, i, s) {
  let r = "";
  const l = e.x.translate / i.x,
    u = e.y.translate / i.y,
    f = s?.z || 0;
  if (
    ((l || u || f) && (r = `translate3d(${l}px, ${u}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const {
      transformPerspective: m,
      rotate: g,
      rotateX: v,
      rotateY: x,
      skewX: T,
      skewY: C,
    } = s;
    (m && (r = `perspective(${m}px) ${r}`),
      g && (r += `rotate(${g}deg) `),
      v && (r += `rotateX(${v}deg) `),
      x && (r += `rotateY(${x}deg) `),
      T && (r += `skewX(${T}deg) `),
      C && (r += `skewY(${C}deg) `));
  }
  const h = e.x.scale * i.x,
    p = e.y.scale * i.y;
  return ((h !== 1 || p !== 1) && (r += `scale(${h}, ${p})`), r || "none");
}
const X1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  fN = X1.length,
  f0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  d0 = (e) => typeof e == "number" || it.test(e);
function dN(e, i, s, r, l, u) {
  l
    ? ((e.opacity = Ht(0, s.opacity ?? 1, hN(r))),
      (e.opacityExit = Ht(i.opacity ?? 1, 0, mN(r))))
    : u && (e.opacity = Ht(i.opacity ?? 1, s.opacity ?? 1, r));
  for (let f = 0; f < fN; f++) {
    const h = `border${X1[f]}Radius`;
    let p = h0(i, h),
      m = h0(s, h);
    if (p === void 0 && m === void 0) continue;
    (p || (p = 0),
      m || (m = 0),
      p === 0 || m === 0 || d0(p) === d0(m)
        ? ((e[h] = Math.max(Ht(f0(p), f0(m), r), 0)),
          (yn.test(m) || yn.test(p)) && (e[h] += "%"))
        : (e[h] = m));
  }
  (i.rotate || s.rotate) && (e.rotate = Ht(i.rotate || 0, s.rotate || 0, r));
}
function h0(e, i) {
  return e[i] !== void 0 ? e[i] : e.borderRadius;
}
const hN = K1(0, 0.5, Px),
  mN = K1(0.5, 0.95, Xe);
function K1(e, i, s) {
  return (r) => (r < e ? 0 : r > i ? 1 : s(br(e, i, r)));
}
function pN(e, i, s) {
  const r = he(e) ? e : es(e);
  return (r.start(bh("", r, i, s)), r.animation);
}
function Tr(e, i, s, r = { passive: !0 }) {
  return (e.addEventListener(i, s, r), () => e.removeEventListener(i, s));
}
const gN = (e, i) => e.depth - i.depth;
class yN {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (ah(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (Al(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(gN),
      (this.isDirty = !1),
      this.children.forEach(i));
  }
}
function vN(e, i) {
  const s = ge.now(),
    r = ({ timestamp: l }) => {
      const u = l - s;
      u >= i && (Ti(r), e(u - i));
    };
  return (zt.setup(r, !0), () => Ti(r));
}
function ml(e) {
  return he(e) ? e.get() : e;
}
class bN {
  constructor() {
    this.members = [];
  }
  add(i) {
    ah(this.members, i);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const r = this.members[s];
      if (r === i || r === this.lead || r === this.prevLead) continue;
      const l = r.instance;
      (!l || l.isConnected === !1) &&
        !r.snapshot &&
        (Al(this.members, r), r.unmount());
    }
    i.scheduleRender();
  }
  remove(i) {
    if (
      (Al(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    for (let s = this.members.indexOf(i) - 1; s >= 0; s--) {
      const r = this.members[s];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return (this.promote(r), !0);
    }
    return !1;
  }
  promote(i, s) {
    const r = this.lead;
    if (i !== r && ((this.prevLead = r), (this.lead = i), i.show(), r)) {
      (r.updateSnapshot(), i.scheduleRender());
      const { layoutDependency: l } = r.options,
        { layoutDependency: u } = i.options;
      ((l === void 0 || l !== u) &&
        ((i.resumeFrom = r),
        s && (r.preserveOpacity = !0),
        r.snapshot &&
          ((i.snapshot = r.snapshot),
          (i.snapshot.latestValues = r.animationValues || r.latestValues)),
        i.root?.isUpdating && (i.isLayoutDirty = !0)),
        i.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      (i.options.onExitComplete?.(),
        i.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((i) => i.instance && i.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const pl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Pf = ["", "X", "Y", "Z"],
  xN = 1e3;
let SN = 0;
function Bf(e, i, s, r) {
  const { latestValues: l } = i;
  l[e] && ((s[e] = l[e]), i.setStaticValue(e, 0), r && (r[e] = 0));
}
function Q1(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: i } = e.options;
  if (!i) return;
  const s = m1(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: l, layoutId: u } = e.options;
    window.MotionCancelOptimisedAnimation(s, "transform", zt, !(l || u));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Q1(r);
}
function Z1({
  attachResizeListener: e,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: r,
  resetTransform: l,
}) {
  return class {
    constructor(f = {}, h = i?.()) {
      ((this.id = SN++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(EN),
            this.nodes.forEach(MN),
            this.nodes.forEach(DN),
            this.nodes.forEach(AN));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0));
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new yN());
    }
    addEventListener(f, h) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new rh()),
        this.eventHandlers.get(f).add(h)
      );
    }
    notifyListeners(f, ...h) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...h);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = Ah(f) && !TO(f)), (this.instance = f));
      const { layoutId: h, layout: p, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0),
        e)
      ) {
        let g,
          v = 0;
        const x = () => (this.root.updateBlockedByResize = !1);
        (zt.read(() => {
          v = window.innerWidth;
        }),
          e(f, () => {
            const T = window.innerWidth;
            T !== v &&
              ((v = T),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = vN(x, 250)),
              pl.hasAnimatedSinceResize &&
                ((pl.hasAnimatedSinceResize = !1), this.nodes.forEach(g0)));
          }));
      }
      (h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          m &&
          (h || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: v,
              hasRelativeLayoutChanged: x,
              layout: T,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const C =
                  this.options.transition || m.getDefaultTransition() || VN,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: R } =
                  m.getProps(),
                N = !this.targetLayout || !F1(this.targetLayout, T),
                j = !v && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                j ||
                (v && (N || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const O = { ...vh(C, "layout"), onPlay: E, onComplete: R };
                ((m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((O.delay = 0), (O.type = !1)),
                  this.startAnimation(O),
                  this.setAnimationOrigin(g, j));
              } else
                (v || g0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = T;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Ti(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(ON),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Q1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        ((v.shouldResetTransform = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1));
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p) return;
      const m = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = m
        ? m(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(m0));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(p0);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(RN),
            this.nodes.forEach(wN),
            this.nodes.forEach(TN))
          : this.nodes.forEach(p0),
        this.clearAllSnapshots());
      const h = ge.now();
      ((le.delta = bn(0, 1e3 / 60, h - le.timestamp)),
        (le.timestamp = h),
        (le.isProcessing = !0),
        Df.update.process(le),
        Df.preRender.process(le),
        Df.render.process(le),
        (le.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Th.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(CN), this.sharedNodes.forEach(NN));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        zt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      zt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ye(this.snapshot.measuredBox.x) &&
          !ye(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: h } = this.options;
      h &&
        h.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (h = !1),
        h && this.instance)
      ) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!l) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !Y1(this.projectionDelta),
        p = this.getTransformTemplate(),
        m = p ? p(this.latestValues, "") : void 0,
        g = m !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (h || Ki(this.latestValues) || g) &&
        (l(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return (
        f && (p = this.removeTransform(p)),
        LN(p),
        {
          animationId: this.root.animationId,
          measuredBox: h,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return te();
      const h = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(zN))) {
        const { scroll: m } = this.root;
        m && (Qa(h.x, m.offset.x), Qa(h.y, m.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      const h = te();
      if ((Ie(h, f), this.scroll?.wasRoot)) return h;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p],
          { scroll: g, options: v } = m;
        m !== this.root &&
          g &&
          v.layoutScroll &&
          (g.wasRoot && Ie(h, f), Qa(h.x, g.offset.x), Qa(h.y, g.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1) {
      const p = te();
      Ie(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        (!h &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          Za(p, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          Ki(g.latestValues) && Za(p, g.latestValues));
      }
      return (Ki(this.latestValues) && Za(p, this.latestValues), p);
    }
    removeTransform(f) {
      const h = te();
      Ie(h, f);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!m.instance || !Ki(m.latestValues)) continue;
        Od(m.latestValues) && m.updateSnapshot();
        const g = te(),
          v = m.measurePageBox();
        (Ie(g, v),
          s0(h, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g));
      }
      return (Ki(this.latestValues) && s0(h, this.latestValues), h);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== le.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const h = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty));
      const p = !!this.resumingFrom || this !== h;
      if (
        !(
          f ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (!this.layout || !(g || v)) return;
      this.resolvedRelativeTargetAt = le.timestamp;
      const x = this.getClosestProjectingParent();
      (x &&
        this.linkedParentVersion !== x.layoutVersion &&
        !x.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (x && x.layout
            ? this.createRelativeTarget(
                x,
                this.layout.layoutBox,
                x.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = te()), (this.targetWithTransforms = te())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              sN(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ie(this.target, this.layout.layoutBox),
                j1(this.target, this.targetDelta))
              : Ie(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            x &&
            !!x.resumingFrom == !!this.resumingFrom &&
            !x.options.layoutScroll &&
            x.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(x, this.target, x.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Od(this.parent.latestValues) ||
          N1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, h, p) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = te()),
        (this.relativeTargetOrigin = te()),
        Nl(this.relativeTargetOrigin, h, p),
        Ie(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(),
        h = !!this.resumingFrom || this !== f;
      let p = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === le.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: m, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || g))
      )
        return;
      Ie(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x,
        x = this.treeScale.y;
      (VO(this.layoutCorrected, this.treeScale, this.path, h),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = te())));
      const { target: T } = f;
      if (!T) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Jv(this.prevProjectionDelta.x, this.projectionDelta.x),
          Jv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        mr(this.projectionDelta, this.layoutCorrected, T, this.latestValues),
        (this.treeScale.x !== v ||
          this.treeScale.y !== x ||
          !u0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !u0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", T)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Ka()),
        (this.projectionDelta = Ka()),
        (this.projectionDeltaWithTransform = Ka()));
    }
    setAnimationOrigin(f, h = !1) {
      const p = this.snapshot,
        m = p ? p.latestValues : {},
        g = { ...this.latestValues },
        v = Ka();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h));
      const x = te(),
        T = p ? p.source : void 0,
        C = this.layout ? this.layout.source : void 0,
        E = T !== C,
        R = this.getStack(),
        N = !R || R.members.length <= 1,
        j = !!(E && !N && this.options.crossfade === !0 && !this.path.some(_N));
      this.animationProgress = 0;
      let O;
      ((this.mixTargetDelta = (P) => {
        const V = P / 1e3;
        (y0(v.x, f.x, V),
          y0(v.y, f.y, V),
          this.setTargetDelta(v),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Nl(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            jN(this.relativeTarget, this.relativeTargetOrigin, x, V),
            O && cN(this.relativeTarget, O) && (this.isProjectionDirty = !1),
            O || (O = te()),
            Ie(O, this.relativeTarget)),
          E &&
            ((this.animationValues = g), dN(g, m, this.latestValues, V, j, N)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = V));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (Ti(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = zt.update(() => {
          ((pl.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = es(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = pN(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (h) => {
                (this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h));
              },
              onStop: () => {},
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(xN),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: h,
        target: p,
        layout: m,
        latestValues: g,
      } = f;
      if (!(!h || !p || !m)) {
        if (
          this !== f &&
          this.layout &&
          m &&
          W1(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          p = this.target || te();
          const v = ye(this.layout.layoutBox.x);
          ((p.x.min = f.target.x.min), (p.x.max = p.x.min + v));
          const x = ye(this.layout.layoutBox.y);
          ((p.y.min = f.target.y.min), (p.y.max = p.y.min + x));
        }
        (Ie(h, p),
          Za(h, g),
          mr(this.projectionDeltaWithTransform, this.layoutCorrected, h, g));
      }
    }
    registerSharedNode(f, h) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new bN()),
        this.sharedNodes.get(f).add(h));
      const m = h.options.initialPromotionConfig;
      h.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(h)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: h, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      (m && m.promote(this, p),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let h = !1;
      const { latestValues: p } = f;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (h = !0),
        !h)
      )
        return;
      const m = {};
      p.z && Bf("z", f, m, this.animationValues);
      for (let g = 0; g < Pf.length; g++)
        (Bf(`rotate${Pf[g]}`, f, m, this.animationValues),
          Bf(`skew${Pf[g]}`, f, m, this.animationValues));
      f.render();
      for (const g in m)
        (f.setStaticValue(g, m[g]),
          this.animationValues && (this.animationValues[g] = m[g]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = ml(h?.pointerEvents) || ""),
          (f.transform = p ? p(this.latestValues, "") : "none"));
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = ml(h?.pointerEvents) || "")),
          this.hasProjected &&
            !Ki(this.latestValues) &&
            ((f.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const g = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let v = uN(this.projectionDeltaWithTransform, this.treeScale, g);
      (p && (v = p(g, v)), (f.transform = v));
      const { x, y: T } = this.projectionDelta;
      ((f.transformOrigin = `${x.origin * 100}% ${T.origin * 100}% 0`),
        m.animationValues
          ? (f.opacity =
              m === this
                ? (g.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : g.opacityExit)
          : (f.opacity =
              m === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                  ? g.opacityExit
                  : 0));
      for (const C in jd) {
        if (g[C] === void 0) continue;
        const { correct: E, applyTo: R, isCSSVariable: N } = jd[C],
          j = v === "none" ? g[C] : E(g[C], m);
        if (R) {
          const O = R.length;
          for (let P = 0; P < O; P++) f[R[P]] = j;
        } else
          N ? (this.options.visualElement.renderState.vars[C] = j) : (f[C] = j);
      }
      this.options.layoutId &&
        (f.pointerEvents = m === this ? ml(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(m0),
        this.root.sharedNodes.clear());
    }
  };
}
function wN(e) {
  e.updateLayout();
}
function TN(e) {
  const i = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: r } = e.layout,
      { animationType: l } = e.options,
      u = i.source !== e.layout.source;
    l === "size"
      ? hn((g) => {
          const v = u ? i.measuredBox[g] : i.layoutBox[g],
            x = ye(v);
          ((v.min = s[g].min), (v.max = v.min + x));
        })
      : W1(l, i.layoutBox, s) &&
        hn((g) => {
          const v = u ? i.measuredBox[g] : i.layoutBox[g],
            x = ye(s[g]);
          ((v.max = v.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[g].max = e.relativeTarget[g].min + x)));
        });
    const f = Ka();
    mr(f, s, i.layoutBox);
    const h = Ka();
    u ? mr(h, e.applyTransform(r, !0), i.measuredBox) : mr(h, s, i.layoutBox);
    const p = !Y1(f);
    let m = !1;
    if (!e.resumeFrom) {
      const g = e.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: v, layout: x } = g;
        if (v && x) {
          const T = te();
          Nl(T, i.layoutBox, v.layoutBox);
          const C = te();
          (Nl(C, s, x.layoutBox),
            F1(T, C) || (m = !0),
            g.options.layoutRoot &&
              ((e.relativeTarget = C),
              (e.relativeTargetOrigin = T),
              (e.relativeParent = g)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: i,
      delta: h,
      layoutDelta: f,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: m,
    });
  } else if (e.isLead()) {
    const { onExitComplete: s } = e.options;
    s && s();
  }
  e.options.transition = void 0;
}
function EN(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function AN(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function CN(e) {
  e.clearSnapshot();
}
function m0(e) {
  e.clearMeasurements();
}
function p0(e) {
  e.isLayoutDirty = !1;
}
function RN(e) {
  const { visualElement: i } = e.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function g0(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function MN(e) {
  e.resolveTargetDelta();
}
function DN(e) {
  e.calcProjection();
}
function ON(e) {
  e.resetSkewAndRotation();
}
function NN(e) {
  e.removeLeadSnapshot();
}
function y0(e, i, s) {
  ((e.translate = Ht(i.translate, 0, s)),
    (e.scale = Ht(i.scale, 1, s)),
    (e.origin = i.origin),
    (e.originPoint = i.originPoint));
}
function v0(e, i, s, r) {
  ((e.min = Ht(i.min, s.min, r)), (e.max = Ht(i.max, s.max, r)));
}
function jN(e, i, s, r) {
  (v0(e.x, i.x, s.x, r), v0(e.y, i.y, s.y, r));
}
function _N(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const VN = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  b0 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  x0 = b0("applewebkit/") && !b0("chrome/") ? Math.round : Xe;
function S0(e) {
  ((e.min = x0(e.min)), (e.max = x0(e.max)));
}
function LN(e) {
  (S0(e.x), S0(e.y));
}
function W1(e, i, s) {
  return (
    e === "position" || (e === "preserve-aspect" && !aN(c0(i), c0(s), 0.2))
  );
}
function zN(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const PN = Z1({
    attachResizeListener: (e, i) => Tr(e, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  kf = { current: void 0 },
  I1 = Z1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!kf.current) {
        const e = new PN({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (kf.current = e));
      }
      return kf.current;
    },
    resetTransform: (e, i) => {
      e.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  $1 = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function BN(e = !0) {
  const i = w.useContext(ih);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: r, register: l } = i,
    u = w.useId();
  w.useEffect(() => {
    if (e) return l(u);
  }, [e]);
  const f = w.useCallback(() => e && r && r(u), [u, r, e]);
  return !s && r ? [!1, f] : [!0];
}
const J1 = w.createContext({ strict: !1 }),
  w0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let T0 = !1;
function kN() {
  if (T0) return;
  const e = {};
  for (const i in w0) e[i] = { isEnabled: (s) => w0[i].some((r) => !!s[r]) };
  (M1(e), (T0 = !0));
}
function tS() {
  return (kN(), OO());
}
function UN(e) {
  const i = tS();
  for (const s in e) i[s] = { ...i[s], ...e[s] };
  M1(i);
}
const HN = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function jl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    HN.has(e)
  );
}
let eS = (e) => !jl(e);
function qN(e) {
  typeof e == "function" && (eS = (i) => (i.startsWith("on") ? !jl(i) : e(i)));
}
try {
  qN(require("@emotion/is-prop-valid").default);
} catch {}
function GN(e, i, s) {
  const r = {};
  for (const l in e)
    (l === "values" && typeof e.values == "object") ||
      ((eS(l) ||
        (s === !0 && jl(l)) ||
        (!i && !jl(l)) ||
        (e.draggable && l.startsWith("onDrag"))) &&
        (r[l] = e[l]));
  return r;
}
const Zl = w.createContext({});
function YN(e, i) {
  if (Ql(e)) {
    const { initial: s, animate: r } = e;
    return {
      initial: s === !1 || wr(s) ? s : void 0,
      animate: wr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? i : {};
}
function FN(e) {
  const { initial: i, animate: s } = YN(e, w.useContext(Zl));
  return w.useMemo(() => ({ initial: i, animate: s }), [E0(i), E0(s)]);
}
function E0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Oh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function nS(e, i, s) {
  for (const r in i) !he(i[r]) && !L1(r, s) && (e[r] = i[r]);
}
function XN({ transformTemplate: e }, i) {
  return w.useMemo(() => {
    const s = Oh();
    return (Mh(s, i, e), Object.assign({}, s.vars, s.style));
  }, [i]);
}
function KN(e, i) {
  const s = e.style || {},
    r = {};
  return (nS(r, s, e), Object.assign(r, XN(e, i)), r);
}
function QN(e, i) {
  const s = {},
    r = KN(e, i);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((s.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (s.tabIndex = 0),
    (s.style = r),
    s
  );
}
const iS = () => ({ ...Oh(), attrs: {} });
function ZN(e, i, s, r) {
  const l = w.useMemo(() => {
    const u = iS();
    return (
      z1(u, i, B1(r), e.transformTemplate, e.style),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [i]);
  if (e.style) {
    const u = {};
    (nS(u, e.style, e), (l.style = { ...u, ...l.style }));
  }
  return l;
}
const WN = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Nh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(WN.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function IN(e, i, s, { latestValues: r }, l, u = !1, f) {
  const p = ((f ?? Nh(e)) ? ZN : QN)(i, r, l, e),
    m = GN(i, typeof e == "string", u),
    g = e !== w.Fragment ? { ...m, ...p, ref: s } : {},
    { children: v } = i,
    x = w.useMemo(() => (he(v) ? v.get() : v), [v]);
  return w.createElement(e, { ...g, children: x });
}
function $N({ scrapeMotionValuesFromProps: e, createRenderState: i }, s, r, l) {
  return { latestValues: JN(s, r, l, e), renderState: i() };
}
function JN(e, i, s, r) {
  const l = {},
    u = r(e, {});
  for (const x in u) l[x] = ml(u[x]);
  let { initial: f, animate: h } = e;
  const p = Ql(e),
    m = C1(e);
  i &&
    m &&
    !p &&
    e.inherit !== !1 &&
    (f === void 0 && (f = i.initial), h === void 0 && (h = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const v = g ? h : f;
  if (v && typeof v != "boolean" && !Kl(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let T = 0; T < x.length; T++) {
      const C = xh(e, x[T]);
      if (C) {
        const { transitionEnd: E, transition: R, ...N } = C;
        for (const j in N) {
          let O = N[j];
          if (Array.isArray(O)) {
            const P = g ? O.length - 1 : 0;
            O = O[P];
          }
          O !== null && (l[j] = O);
        }
        for (const j in E) l[j] = E[j];
      }
    }
  }
  return l;
}
const aS = (e) => (i, s) => {
    const r = w.useContext(Zl),
      l = w.useContext(ih),
      u = () => $N(e, i, r, l);
    return s ? u() : eM(u);
  },
  tj = aS({ scrapeMotionValuesFromProps: Dh, createRenderState: Oh }),
  ej = aS({ scrapeMotionValuesFromProps: k1, createRenderState: iS }),
  nj = Symbol.for("motionComponentSymbol");
function ij(e, i, s) {
  const r = w.useRef(s);
  w.useInsertionEffect(() => {
    r.current = s;
  });
  const l = w.useRef(null);
  return w.useCallback(
    (u) => {
      u && e.onMount?.(u);
      const f = r.current;
      if (typeof f == "function")
        if (u) {
          const h = f(u);
          typeof h == "function" && (l.current = h);
        } else l.current ? (l.current(), (l.current = null)) : f(u);
      else f && (f.current = u);
      i && (u ? i.mount(u) : i.unmount());
    },
    [i],
  );
}
const sS = w.createContext({});
function Ya(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function aj(e, i, s, r, l, u) {
  const { visualElement: f } = w.useContext(Zl),
    h = w.useContext(J1),
    p = w.useContext(ih),
    m = w.useContext($1),
    g = m.reducedMotion,
    v = m.skipAnimations,
    x = w.useRef(null),
    T = w.useRef(!1);
  ((r = r || h.renderer),
    !x.current &&
      r &&
      ((x.current = r(e, {
        visualState: i,
        parent: f,
        props: s,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: v,
        isSVG: u,
      })),
      T.current && x.current && (x.current.manuallyAnimateOnMount = !0)));
  const C = x.current,
    E = w.useContext(sS);
  C &&
    !C.projection &&
    l &&
    (C.type === "html" || C.type === "svg") &&
    sj(x.current, s, l, E);
  const R = w.useRef(!1);
  w.useInsertionEffect(() => {
    C && R.current && C.update(s, p);
  });
  const N = s[h1],
    j = w.useRef(
      !!N &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(N) &&
        window.MotionHasOptimisedAnimation?.(N),
    );
  return (
    iM(() => {
      ((T.current = !0),
        C &&
          ((R.current = !0),
          (window.MotionIsMounted = !0),
          C.updateFeatures(),
          C.scheduleRenderMicrotask(),
          j.current && C.animationState && C.animationState.animateChanges()));
    }),
    w.useEffect(() => {
      C &&
        (!j.current && C.animationState && C.animationState.animateChanges(),
        j.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(N);
          }),
          (j.current = !1)),
        (C.enteringChildren = void 0));
    }),
    C
  );
}
function sj(e, i, s, r) {
  const {
    layoutId: l,
    layout: u,
    drag: f,
    dragConstraints: h,
    layoutScroll: p,
    layoutRoot: m,
    layoutCrossfade: g,
  } = i;
  ((e.projection = new s(
    e.latestValues,
    i["data-framer-portal-id"] ? void 0 : rS(e.parent),
  )),
    e.projection.setOptions({
      layoutId: l,
      layout: u,
      alwaysMeasureLayout: !!f || (h && Ya(h)),
      visualElement: e,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: r,
      crossfade: g,
      layoutScroll: p,
      layoutRoot: m,
    }));
}
function rS(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : rS(e.parent);
}
function Uf(e, { forwardMotionProps: i = !1, type: s } = {}, r, l) {
  r && UN(r);
  const u = s ? s === "svg" : Nh(e),
    f = u ? ej : tj;
  function h(m, g) {
    let v;
    const x = { ...w.useContext($1), ...m, layoutId: rj(m) },
      { isStatic: T } = x,
      C = FN(m),
      E = f(m, T);
    if (!T && typeof window < "u") {
      oj();
      const R = lj(x);
      ((v = R.MeasureLayout),
        (C.visualElement = aj(e, E, x, l, R.ProjectionNode, u)));
    }
    return b.jsxs(Zl.Provider, {
      value: C,
      children: [
        v && C.visualElement
          ? b.jsx(v, { visualElement: C.visualElement, ...x })
          : null,
        IN(e, m, ij(E, C.visualElement, g), E, T, i, u),
      ],
    });
  }
  h.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const p = w.forwardRef(h);
  return ((p[nj] = e), p);
}
function rj({ layoutId: e }) {
  const i = w.useContext(Ax).id;
  return i && e !== void 0 ? i + "-" + e : e;
}
function oj(e, i) {
  w.useContext(J1).strict;
}
function lj(e) {
  const i = tS(),
    { drag: s, layout: r } = i;
  if (!s && !r) return {};
  const l = { ...s, ...r };
  return {
    MeasureLayout:
      s?.isEnabled(e) || r?.isEnabled(e) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
function cj(e, i) {
  if (typeof Proxy > "u") return Uf;
  const s = new Map(),
    r = (u, f) => Uf(u, f, e, i),
    l = (u, f) => r(u, f);
  return new Proxy(l, {
    get: (u, f) =>
      f === "create"
        ? r
        : (s.has(f) || s.set(f, Uf(f, void 0, e, i)), s.get(f)),
  });
}
const uj = (e, i) =>
  (i.isSVG ?? Nh(e))
    ? new KO(i)
    : new HO(i, { allowProjection: e !== w.Fragment });
class fj extends Ai {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = $O(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Kl(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    i !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let dj = 0;
class hj extends Ai {
  constructor() {
    (super(...arguments), (this.id = dj++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === r) return;
    const l = this.node.animationState.setActive("exit", !i);
    s &&
      !i &&
      l.then(() => {
        s(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: s } = this.node.presenceContext || {};
    (s && s(this.id), i && (this.unmount = i(this.id)));
  }
  unmount() {}
}
const mj = { animation: { Feature: fj }, exit: { Feature: hj } };
function Nr(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const pj = (e) => (i) => Eh(i) && e(i, Nr(i));
function pr(e, i, s, r) {
  return Tr(e, i, pj(s), r);
}
const oS = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  A0 = (e, i) => Math.abs(e - i);
function gj(e, i) {
  const s = A0(e.x, i.x),
    r = A0(e.y, i.y);
  return Math.sqrt(s ** 2 + r ** 2);
}
const C0 = new Set(["auto", "scroll"]);
class lS {
  constructor(
    i,
    s,
    {
      transformPagePoint: r,
      contextWindow: l = window,
      dragSnapToOrigin: u = !1,
      distanceThreshold: f = 3,
      element: h,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (T) => {
        this.handleScroll(T.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const T = qf(this.lastMoveEventInfo, this.history),
          C = this.startEvent !== null,
          E = gj(T.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!C && !E) return;
        const { point: R } = T,
          { timestamp: N } = le;
        this.history.push({ ...R, timestamp: N });
        const { onStart: j, onMove: O } = this.handlers;
        (C ||
          (j && j(this.lastMoveEvent, T),
          (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, T));
      }),
      (this.handlePointerMove = (T, C) => {
        ((this.lastMoveEvent = T),
          (this.lastMoveEventInfo = Hf(C, this.transformPagePoint)),
          zt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (T, C) => {
        this.end();
        const { onEnd: E, onSessionEnd: R, resumeAnimation: N } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && N && N(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const j = qf(
          T.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Hf(C, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && E && E(T, j), R && R(T, j));
      }),
      !Eh(i))
    )
      return;
    ((this.dragSnapToOrigin = u),
      (this.handlers = s),
      (this.transformPagePoint = r),
      (this.distanceThreshold = f),
      (this.contextWindow = l || window));
    const p = Nr(i),
      m = Hf(p, this.transformPagePoint),
      { point: g } = m,
      { timestamp: v } = le;
    this.history = [{ ...g, timestamp: v }];
    const { onSessionStart: x } = s;
    (x && x(i, qf(m, this.history)),
      (this.removeListeners = Mr(
        pr(this.contextWindow, "pointermove", this.handlePointerMove),
        pr(this.contextWindow, "pointerup", this.handlePointerUp),
        pr(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      h && this.startScrollTracking(h));
  }
  startScrollTracking(i) {
    let s = i.parentElement;
    for (; s; ) {
      const r = getComputedStyle(s);
      ((C0.has(r.overflowX) || C0.has(r.overflowY)) &&
        this.scrollPositions.set(s, { x: s.scrollLeft, y: s.scrollTop }),
        (s = s.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(i) {
    const s = this.scrollPositions.get(i);
    if (!s) return;
    const r = i === window,
      l = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: i.scrollLeft, y: i.scrollTop },
      u = { x: l.x - s.x, y: l.y - s.y };
    (u.x === 0 && u.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += u.x),
          (this.lastMoveEventInfo.point.y += u.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= u.x), (this.history[0].y -= u.y)),
      this.scrollPositions.set(i, l),
      zt.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Ti(this.updatePoint));
  }
}
function Hf(e, i) {
  return i ? { point: i(e.point) } : e;
}
function R0(e, i) {
  return { x: e.x - i.x, y: e.y - i.y };
}
function qf({ point: e }, i) {
  return {
    point: e,
    delta: R0(e, cS(i)),
    offset: R0(e, yj(i)),
    velocity: vj(i, 0.1),
  };
}
function yj(e) {
  return e[0];
}
function cS(e) {
  return e[e.length - 1];
}
function vj(e, i) {
  if (e.length < 2) return { x: 0, y: 0 };
  let s = e.length - 1,
    r = null;
  const l = cS(e);
  for (; s >= 0 && ((r = e[s]), !(l.timestamp - r.timestamp > tn(i))); ) s--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    l.timestamp - r.timestamp > tn(i) * 2 &&
    (r = e[1]);
  const u = Fe(l.timestamp - r.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const f = { x: (l.x - r.x) / u, y: (l.y - r.y) / u };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function bj(e, { min: i, max: s }, r) {
  return (
    i !== void 0 && e < i
      ? (e = r ? Ht(i, e, r.min) : Math.max(e, i))
      : s !== void 0 && e > s && (e = r ? Ht(s, e, r.max) : Math.min(e, s)),
    e
  );
}
function M0(e, i, s) {
  return {
    min: i !== void 0 ? e.min + i : void 0,
    max: s !== void 0 ? e.max + s - (e.max - e.min) : void 0,
  };
}
function xj(e, { top: i, left: s, bottom: r, right: l }) {
  return { x: M0(e.x, s, l), y: M0(e.y, i, r) };
}
function D0(e, i) {
  let s = i.min - e.min,
    r = i.max - e.max;
  return (
    i.max - i.min < e.max - e.min && ([s, r] = [r, s]),
    { min: s, max: r }
  );
}
function Sj(e, i) {
  return { x: D0(e.x, i.x), y: D0(e.y, i.y) };
}
function wj(e, i) {
  let s = 0.5;
  const r = ye(e),
    l = ye(i);
  return (
    l > r
      ? (s = br(i.min, i.max - r, e.min))
      : r > l && (s = br(e.min, e.max - l, i.min)),
    bn(0, 1, s)
  );
}
function Tj(e, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - e.min),
    i.max !== void 0 && (s.max = i.max - e.min),
    s
  );
}
const _d = 0.35;
function Ej(e = _d) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = _d),
    { x: O0(e, "left", "right"), y: O0(e, "top", "bottom") }
  );
}
function O0(e, i, s) {
  return { min: N0(e, i), max: N0(e, s) };
}
function N0(e, i) {
  return typeof e == "number" ? e : e[i] || 0;
}
const Aj = new WeakMap();
class Cj {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = te()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: s = !1, distanceThreshold: r } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const u = (v) => {
        (s && this.snapToCursor(Nr(v).point), this.stopAnimation());
      },
      f = (v, x) => {
        const { drag: T, dragPropagation: C, onDragStart: E } = this.getProps();
        if (
          T &&
          !C &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = rO(T)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = x),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          hn((N) => {
            let j = this.getAxisMotionValue(N).get() || 0;
            if (yn.test(j)) {
              const { projection: O } = this.visualElement;
              if (O && O.layout) {
                const P = O.layout.layoutBox[N];
                P && (j = ye(P) * (parseFloat(j) / 100));
              }
            }
            this.originPoint[N] = j;
          }),
          E && zt.update(() => E(v, x), !1, !0),
          Ad(this.visualElement, "transform"));
        const { animationState: R } = this.visualElement;
        R && R.setActive("whileDrag", !0);
      },
      h = (v, x) => {
        ((this.latestPointerEvent = v), (this.latestPanInfo = x));
        const {
          dragPropagation: T,
          dragDirectionLock: C,
          onDirectionLock: E,
          onDrag: R,
        } = this.getProps();
        if (!T && !this.openDragLock) return;
        const { offset: N } = x;
        if (C && this.currentDirection === null) {
          ((this.currentDirection = Mj(N)),
            this.currentDirection !== null && E && E(this.currentDirection));
          return;
        }
        (this.updateAxis("x", x.point, N),
          this.updateAxis("y", x.point, N),
          this.visualElement.render(),
          R && zt.update(() => R(v, x), !1, !0));
      },
      p = (v, x) => {
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = x),
          this.stop(v, x),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      m = () => {
        const { dragSnapToOrigin: v } = this.getProps();
        (v || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new lS(
      i,
      {
        onSessionStart: u,
        onStart: f,
        onMove: h,
        onSessionEnd: p,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: r,
        contextWindow: oS(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(i, s) {
    const r = i || this.latestPointerEvent,
      l = s || this.latestPanInfo,
      u = this.isDragging;
    if ((this.cancel(), !u || !l || !r)) return;
    const { velocity: f } = l;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && zt.postRender(() => h(r, l));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    (i && (i.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(i, s, r) {
    const { drag: l } = this.getProps();
    if (!r || !el(i, l, this.currentDirection)) return;
    const u = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + r[i];
    (this.constraints &&
      this.constraints[i] &&
      (f = bj(f, this.constraints[i], this.elastic[i])),
      u.set(f));
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: s } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      l = this.constraints;
    (i && Ya(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && r
        ? (this.constraints = xj(r.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = Ej(s)),
      l !== this.constraints &&
        !Ya(i) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        hn((u) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(u) &&
            (this.constraints[u] = Tj(r.layoutBox[u], this.constraints[u]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !Ya(i)) return !1;
    const r = i.current,
      { projection: l } = this.visualElement;
    if (!l || !l.layout) return !1;
    const u = LO(r, l.root, this.visualElement.getTransformPagePoint());
    let f = Sj(l.layout.layoutBox, u);
    if (s) {
      const h = s(jO(f));
      ((this.hasMutatedConstraints = !!h), h && (f = O1(h)));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: s,
        dragMomentum: r,
        dragElastic: l,
        dragTransition: u,
        dragSnapToOrigin: f,
        onDragTransitionEnd: h,
      } = this.getProps(),
      p = this.constraints || {},
      m = hn((g) => {
        if (!el(g, s, this.currentDirection)) return;
        let v = (p && p[g]) || {};
        f && (v = { min: 0, max: 0 });
        const x = l ? 200 : 1e6,
          T = l ? 40 : 1e7,
          C = {
            type: "inertia",
            velocity: r ? i[g] : 0,
            bounceStiffness: x,
            bounceDamping: T,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...v,
          };
        return this.startAxisValueAnimation(g, C);
      });
    return Promise.all(m).then(h);
  }
  startAxisValueAnimation(i, s) {
    const r = this.getAxisMotionValue(i);
    return (
      Ad(this.visualElement, i),
      r.start(bh(i, r, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    hn((i) => this.getAxisMotionValue(i).stop());
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      r = this.visualElement.getProps(),
      l = r[s];
    return (
      l ||
      this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    hn((s) => {
      const { drag: r } = this.getProps();
      if (!el(s, r, this.currentDirection)) return;
      const { projection: l } = this.visualElement,
        u = this.getAxisMotionValue(s);
      if (l && l.layout) {
        const { min: f, max: h } = l.layout.layoutBox[s],
          p = u.get() || 0;
        u.set(i[s] - Ht(f, h, 0.5) + p);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: s } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Ya(s) || !r || !this.constraints) return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    hn((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const p = h.get();
        l[f] = wj({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      hn((f) => {
        if (!el(f, i, null)) return;
        const h = this.getAxisMotionValue(f),
          { min: p, max: m } = this.constraints[f];
        h.set(Ht(p, m, l[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Aj.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = pr(i, "pointerdown", (m) => {
        const { drag: g, dragListener: v = !0 } = this.getProps(),
          x = m.target,
          T = x !== i && dO(x);
        g && v && !T && this.start(m);
      });
    let r;
    const l = () => {
        const { dragConstraints: m } = this.getProps();
        Ya(m) &&
          m.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = Rj(i, m.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: u } = this.visualElement,
      f = u.addEventListener("measure", l);
    (u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
      zt.read(l));
    const h = Tr(window, "resize", () => this.scalePositionWithinConstraints()),
      p = u.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (hn((v) => {
              const x = this.getAxisMotionValue(v);
              x &&
                ((this.originPoint[v] += m[v].translate),
                x.set(x.get() + m[v].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (h(), s(), f(), p && p(), r && r());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: r = !1,
        dragPropagation: l = !1,
        dragConstraints: u = !1,
        dragElastic: f = _d,
        dragMomentum: h = !0,
      } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: r,
      dragPropagation: l,
      dragConstraints: u,
      dragElastic: f,
      dragMomentum: h,
    };
  }
}
function j0(e) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    e();
  };
}
function Rj(e, i, s) {
  const r = Uv(e, j0(s)),
    l = Uv(i, j0(s));
  return () => {
    (r(), l());
  };
}
function el(e, i, s) {
  return (i === !0 || i === e) && (s === null || s === e);
}
function Mj(e, i = 10) {
  let s = null;
  return (Math.abs(e.y) > i ? (s = "y") : Math.abs(e.x) > i && (s = "x"), s);
}
class Dj extends Ai {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = Xe),
      (this.removeListeners = Xe),
      (this.controls = new Cj(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Xe));
  }
  update() {
    const { dragControls: i } = this.node.getProps(),
      { dragControls: s } = this.node.prevProps || {};
    i !== s &&
      (this.removeGroupControls(),
      i && (this.removeGroupControls = i.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Gf = (e) => (i, s) => {
  e && zt.update(() => e(i, s), !1, !0);
};
class Oj extends Ai {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Xe));
  }
  onPointerDown(i) {
    this.session = new lS(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: oS(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: s,
      onPan: r,
      onPanEnd: l,
    } = this.node.getProps();
    return {
      onSessionStart: Gf(i),
      onStart: Gf(s),
      onMove: Gf(r),
      onEnd: (u, f) => {
        (delete this.session, l && zt.postRender(() => l(u, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = pr(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Yf = !1;
class Nj extends w.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
        layoutId: l,
      } = this.props,
      { projection: u } = i;
    (u &&
      (s.group && s.group.add(u),
      r && r.register && l && r.register(u),
      Yf && u.root.didUpdate(),
      u.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      u.setOptions({
        ...u.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (pl.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: s,
        visualElement: r,
        drag: l,
        isPresent: u,
      } = this.props,
      { projection: f } = r;
    return (
      f &&
        ((f.isPresent = u),
        i.layoutDependency !== s &&
          f.setOptions({ ...f.options, layoutDependency: s }),
        (Yf = !0),
        l || i.layoutDependency !== s || s === void 0 || i.isPresent !== u
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== u &&
          (u
            ? f.promote()
            : f.relegate() ||
              zt.postRender(() => {
                const h = f.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      Th.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
      } = this.props,
      { projection: l } = i;
    ((Yf = !0),
      l &&
        (l.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(l),
        r && r.deregister && r.deregister(l)));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function uS(e) {
  const [i, s] = BN(),
    r = w.useContext(Ax);
  return b.jsx(Nj, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(sS),
    isPresent: i,
    safeToRemove: s,
  });
}
const jj = {
  pan: { Feature: Oj },
  drag: { Feature: Dj, ProjectionNode: I1, MeasureLayout: uS },
};
function _0(e, i, s) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", s === "Start");
  const l = "onHover" + s,
    u = r[l];
  u && zt.postRender(() => u(i, Nr(i)));
}
class _j extends Ai {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = lO(
        i,
        (s, r) => (_0(this.node, r, "Start"), (l) => _0(this.node, l, "End")),
      ));
  }
  unmount() {}
}
class Vj extends Ai {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Mr(
      Tr(this.node.current, "focus", () => this.onFocus()),
      Tr(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function V0(e, i, s) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", s === "Start");
  const l = "onTap" + (s === "End" ? "" : s),
    u = r[l];
  u && zt.postRender(() => u(i, Nr(i)));
}
class Lj extends Ai {
  mount() {
    const { current: i } = this.node;
    if (!i) return;
    const { globalTapTarget: s, propagate: r } = this.node.props;
    this.unmount = mO(
      i,
      (l, u) => (
        V0(this.node, u, "Start"),
        (f, { success: h }) => V0(this.node, f, h ? "End" : "Cancel")
      ),
      { useGlobalTarget: s, stopPropagation: r?.tap === !1 },
    );
  }
  unmount() {}
}
const Vd = new WeakMap(),
  Ff = new WeakMap(),
  zj = (e) => {
    const i = Vd.get(e.target);
    i && i(e);
  },
  Pj = (e) => {
    e.forEach(zj);
  };
function Bj({ root: e, ...i }) {
  const s = e || document;
  Ff.has(s) || Ff.set(s, {});
  const r = Ff.get(s),
    l = JSON.stringify(i);
  return (
    r[l] || (r[l] = new IntersectionObserver(Pj, { root: e, ...i })),
    r[l]
  );
}
function kj(e, i, s) {
  const r = Bj(i);
  return (
    Vd.set(e, s),
    r.observe(e),
    () => {
      (Vd.delete(e), r.unobserve(e));
    }
  );
}
const Uj = { some: 0, all: 1 };
class Hj extends Ai {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: r, amount: l = "some", once: u } = i,
      f = {
        root: s ? s.current : void 0,
        rootMargin: r,
        threshold: typeof l == "number" ? l : Uj[l],
      },
      h = (p) => {
        const { isIntersecting: m } = p;
        if (
          this.isInView === m ||
          ((this.isInView = m), u && !m && this.hasEnteredView)
        )
          return;
        (m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m));
        const { onViewportEnter: g, onViewportLeave: v } = this.node.getProps(),
          x = m ? g : v;
        x && x(p);
      };
    return kj(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(qj(i, s)) && this.startObserver();
  }
  unmount() {}
}
function qj({ viewport: e = {} }, { viewport: i = {} } = {}) {
  return (s) => e[s] !== i[s];
}
const Gj = {
    inView: { Feature: Hj },
    tap: { Feature: Lj },
    focus: { Feature: Vj },
    hover: { Feature: _j },
  },
  Yj = { layout: { ProjectionNode: I1, MeasureLayout: uS } },
  Fj = { ...mj, ...Gj, ...jj, ...Yj },
  Ct = cj(Fj, uj);
var Xj = Symbol.for("react.lazy"),
  _l = kd[" use ".trim().toString()];
function Kj(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function fS(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === Xj &&
    "_payload" in e &&
    Kj(e._payload)
  );
}
function Qj(e) {
  const i = Wj(e),
    s = w.forwardRef((r, l) => {
      let { children: u, ...f } = r;
      fS(u) && typeof _l == "function" && (u = _l(u._payload));
      const h = w.Children.toArray(u),
        p = h.find($j);
      if (p) {
        const m = p.props.children,
          g = h.map((v) =>
            v === p
              ? w.Children.count(m) > 1
                ? w.Children.only(null)
                : w.isValidElement(m)
                  ? m.props.children
                  : null
              : v,
          );
        return b.jsx(i, {
          ...f,
          ref: l,
          children: w.isValidElement(m) ? w.cloneElement(m, void 0, g) : null,
        });
      }
      return b.jsx(i, { ...f, ref: l, children: u });
    });
  return ((s.displayName = `${e}.Slot`), s);
}
var Zj = Qj("Slot");
function Wj(e) {
  const i = w.forwardRef((s, r) => {
    let { children: l, ...u } = s;
    if (
      (fS(l) && typeof _l == "function" && (l = _l(l._payload)),
      w.isValidElement(l))
    ) {
      const f = t3(l),
        h = Jj(u, l.props);
      return (
        l.type !== w.Fragment && (h.ref = r ? Ud(r, f) : f),
        w.cloneElement(l, h)
      );
    }
    return w.Children.count(l) > 1 ? w.Children.only(null) : null;
  });
  return ((i.displayName = `${e}.SlotClone`), i);
}
var Ij = Symbol("radix.slottable");
function $j(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Ij
  );
}
function Jj(e, i) {
  const s = { ...i };
  for (const r in i) {
    const l = e[r],
      u = i[r];
    /^on[A-Z]/.test(r)
      ? l && u
        ? (s[r] = (...h) => {
            const p = u(...h);
            return (l(...h), p);
          })
        : l && (s[r] = l)
      : r === "style"
        ? (s[r] = { ...l, ...u })
        : r === "className" && (s[r] = [l, u].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function t3(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    s = i && "isReactWarning" in i && i.isReactWarning;
  return s
    ? e.ref
    : ((i = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (s = i && "isReactWarning" in i && i.isReactWarning),
      s ? e.props.ref : e.props.ref || e.ref);
}
const e3 = Yd(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground border border-primary-border",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
          outline:
            " border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",
          secondary:
            "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  dS = w.forwardRef(
    ({ className: e, variant: i, size: s, asChild: r = !1, ...l }, u) => {
      const f = r ? Zj : "button";
      return b.jsx(f, {
        className: ce(e3({ variant: i, size: s, className: e })),
        ref: u,
        ...l,
      });
    },
  );
dS.displayName = "Button";
var Xf = "focusScope.autoFocusOnMount",
  Kf = "focusScope.autoFocusOnUnmount",
  L0 = { bubbles: !1, cancelable: !0 },
  n3 = "FocusScope",
  hS = w.forwardRef((e, i) => {
    const {
        loop: s = !1,
        trapped: r = !1,
        onMountAutoFocus: l,
        onUnmountAutoFocus: u,
        ...f
      } = e,
      [h, p] = w.useState(null),
      m = vn(l),
      g = vn(u),
      v = w.useRef(null),
      x = ve(i, (E) => p(E)),
      T = w.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (w.useEffect(() => {
      if (r) {
        let E = function (O) {
            if (T.paused || !h) return;
            const P = O.target;
            h.contains(P) ? (v.current = P) : bi(v.current, { select: !0 });
          },
          R = function (O) {
            if (T.paused || !h) return;
            const P = O.relatedTarget;
            P !== null && (h.contains(P) || bi(v.current, { select: !0 }));
          },
          N = function (O) {
            if (document.activeElement === document.body)
              for (const V of O) V.removedNodes.length > 0 && bi(h);
          };
        (document.addEventListener("focusin", E),
          document.addEventListener("focusout", R));
        const j = new MutationObserver(N);
        return (
          h && j.observe(h, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", E),
              document.removeEventListener("focusout", R),
              j.disconnect());
          }
        );
      }
    }, [r, h, T.paused]),
      w.useEffect(() => {
        if (h) {
          P0.add(T);
          const E = document.activeElement;
          if (!h.contains(E)) {
            const N = new CustomEvent(Xf, L0);
            (h.addEventListener(Xf, m),
              h.dispatchEvent(N),
              N.defaultPrevented ||
                (i3(l3(mS(h)), { select: !0 }),
                document.activeElement === E && bi(h)));
          }
          return () => {
            (h.removeEventListener(Xf, m),
              setTimeout(() => {
                const N = new CustomEvent(Kf, L0);
                (h.addEventListener(Kf, g),
                  h.dispatchEvent(N),
                  N.defaultPrevented || bi(E ?? document.body, { select: !0 }),
                  h.removeEventListener(Kf, g),
                  P0.remove(T));
              }, 0));
          };
        }
      }, [h, m, g, T]));
    const C = w.useCallback(
      (E) => {
        if ((!s && !r) || T.paused) return;
        const R = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey,
          N = document.activeElement;
        if (R && N) {
          const j = E.currentTarget,
            [O, P] = a3(j);
          O && P
            ? !E.shiftKey && N === P
              ? (E.preventDefault(), s && bi(O, { select: !0 }))
              : E.shiftKey &&
                N === O &&
                (E.preventDefault(), s && bi(P, { select: !0 }))
            : N === j && E.preventDefault();
        }
      },
      [s, r, T.paused],
    );
    return b.jsx(Wt.div, { tabIndex: -1, ...f, ref: x, onKeyDown: C });
  });
hS.displayName = n3;
function i3(e, { select: i = !1 } = {}) {
  const s = document.activeElement;
  for (const r of e)
    if ((bi(r, { select: i }), document.activeElement !== s)) return;
}
function a3(e) {
  const i = mS(e),
    s = z0(i, e),
    r = z0(i.reverse(), e);
  return [s, r];
}
function mS(e) {
  const i = [],
    s = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const l = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || l
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) i.push(s.currentNode);
  return i;
}
function z0(e, i) {
  for (const s of e) if (!s3(s, { upTo: i })) return s;
}
function s3(e, { upTo: i }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (i !== void 0 && e === i) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function r3(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function bi(e, { select: i = !1 } = {}) {
  if (e && e.focus) {
    const s = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== s && r3(e) && i && e.select());
  }
}
var P0 = o3();
function o3() {
  let e = [];
  return {
    add(i) {
      const s = e[0];
      (i !== s && s?.pause(), (e = B0(e, i)), e.unshift(i));
    },
    remove(i) {
      ((e = B0(e, i)), e[0]?.resume());
    },
  };
}
function B0(e, i) {
  const s = [...e],
    r = s.indexOf(i);
  return (r !== -1 && s.splice(r, 1), s);
}
function l3(e) {
  return e.filter((i) => i.tagName !== "A");
}
var Qf = 0;
function c3() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? k0()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? k0()),
      Qf++,
      () => {
        (Qf === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((i) => i.remove()),
          Qf--);
      }
    );
  }, []);
}
function k0() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var mn = function () {
  return (
    (mn =
      Object.assign ||
      function (i) {
        for (var s, r = 1, l = arguments.length; r < l; r++) {
          s = arguments[r];
          for (var u in s)
            Object.prototype.hasOwnProperty.call(s, u) && (i[u] = s[u]);
        }
        return i;
      }),
    mn.apply(this, arguments)
  );
};
function pS(e, i) {
  var s = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      i.indexOf(r) < 0 &&
      (s[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
      i.indexOf(r[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
        (s[r[l]] = e[r[l]]);
  return s;
}
function u3(e, i, s) {
  if (s || arguments.length === 2)
    for (var r = 0, l = i.length, u; r < l; r++)
      (u || !(r in i)) &&
        (u || (u = Array.prototype.slice.call(i, 0, r)), (u[r] = i[r]));
  return e.concat(u || Array.prototype.slice.call(i));
}
var gl = "right-scroll-bar-position",
  yl = "width-before-scroll-bar",
  f3 = "with-scroll-bars-hidden",
  d3 = "--removed-body-scroll-bar-size";
function Zf(e, i) {
  return (typeof e == "function" ? e(i) : e && (e.current = i), e);
}
function h3(e, i) {
  var s = w.useState(function () {
    return {
      value: e,
      callback: i,
      facade: {
        get current() {
          return s.value;
        },
        set current(r) {
          var l = s.value;
          l !== r && ((s.value = r), s.callback(r, l));
        },
      },
    };
  })[0];
  return ((s.callback = i), s.facade);
}
var m3 = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  U0 = new WeakMap();
function p3(e, i) {
  var s = h3(null, function (r) {
    return e.forEach(function (l) {
      return Zf(l, r);
    });
  });
  return (
    m3(
      function () {
        var r = U0.get(s);
        if (r) {
          var l = new Set(r),
            u = new Set(e),
            f = s.current;
          (l.forEach(function (h) {
            u.has(h) || Zf(h, null);
          }),
            u.forEach(function (h) {
              l.has(h) || Zf(h, f);
            }));
        }
        U0.set(s, e);
      },
      [e],
    ),
    s
  );
}
function g3(e) {
  return e;
}
function y3(e, i) {
  i === void 0 && (i = g3);
  var s = [],
    r = !1,
    l = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return s.length ? s[s.length - 1] : e;
      },
      useMedium: function (u) {
        var f = i(u, r);
        return (
          s.push(f),
          function () {
            s = s.filter(function (h) {
              return h !== f;
            });
          }
        );
      },
      assignSyncMedium: function (u) {
        for (r = !0; s.length; ) {
          var f = s;
          ((s = []), f.forEach(u));
        }
        s = {
          push: function (h) {
            return u(h);
          },
          filter: function () {
            return s;
          },
        };
      },
      assignMedium: function (u) {
        r = !0;
        var f = [];
        if (s.length) {
          var h = s;
          ((s = []), h.forEach(u), (f = s));
        }
        var p = function () {
            var g = f;
            ((f = []), g.forEach(u));
          },
          m = function () {
            return Promise.resolve().then(p);
          };
        (m(),
          (s = {
            push: function (g) {
              (f.push(g), m());
            },
            filter: function (g) {
              return ((f = f.filter(g)), s);
            },
          }));
      },
    };
  return l;
}
function v3(e) {
  e === void 0 && (e = {});
  var i = y3(null);
  return ((i.options = mn({ async: !0, ssr: !1 }, e)), i);
}
var gS = function (e) {
  var i = e.sideCar,
    s = pS(e, ["sideCar"]);
  if (!i)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = i.read();
  if (!r) throw new Error("Sidecar medium not found");
  return w.createElement(r, mn({}, s));
};
gS.isSideCarExport = !0;
function b3(e, i) {
  return (e.useMedium(i), gS);
}
var yS = v3(),
  Wf = function () {},
  Wl = w.forwardRef(function (e, i) {
    var s = w.useRef(null),
      r = w.useState({
        onScrollCapture: Wf,
        onWheelCapture: Wf,
        onTouchMoveCapture: Wf,
      }),
      l = r[0],
      u = r[1],
      f = e.forwardProps,
      h = e.children,
      p = e.className,
      m = e.removeScrollBar,
      g = e.enabled,
      v = e.shards,
      x = e.sideCar,
      T = e.noRelative,
      C = e.noIsolation,
      E = e.inert,
      R = e.allowPinchZoom,
      N = e.as,
      j = N === void 0 ? "div" : N,
      O = e.gapMode,
      P = pS(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      V = x,
      F = p3([s, i]),
      Z = mn(mn({}, P), l);
    return w.createElement(
      w.Fragment,
      null,
      g &&
        w.createElement(V, {
          sideCar: yS,
          removeScrollBar: m,
          shards: v,
          noRelative: T,
          noIsolation: C,
          inert: E,
          setCallbacks: u,
          allowPinchZoom: !!R,
          lockRef: s,
          gapMode: O,
        }),
      f
        ? w.cloneElement(w.Children.only(h), mn(mn({}, Z), { ref: F }))
        : w.createElement(j, mn({}, Z, { className: p, ref: F }), h),
    );
  });
Wl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Wl.classNames = { fullWidth: yl, zeroRight: gl };
var x3 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function S3() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var i = x3();
  return (i && e.setAttribute("nonce", i), e);
}
function w3(e, i) {
  e.styleSheet
    ? (e.styleSheet.cssText = i)
    : e.appendChild(document.createTextNode(i));
}
function T3(e) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(e);
}
var E3 = function () {
    var e = 0,
      i = null;
    return {
      add: function (s) {
        (e == 0 && (i = S3()) && (w3(i, s), T3(i)), e++);
      },
      remove: function () {
        (e--,
          !e && i && (i.parentNode && i.parentNode.removeChild(i), (i = null)));
      },
    };
  },
  A3 = function () {
    var e = E3();
    return function (i, s) {
      w.useEffect(
        function () {
          return (
            e.add(i),
            function () {
              e.remove();
            }
          );
        },
        [i && s],
      );
    };
  },
  vS = function () {
    var e = A3(),
      i = function (s) {
        var r = s.styles,
          l = s.dynamic;
        return (e(r, l), null);
      };
    return i;
  },
  C3 = { left: 0, top: 0, right: 0, gap: 0 },
  If = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  R3 = function (e) {
    var i = window.getComputedStyle(document.body),
      s = i[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = i[e === "padding" ? "paddingTop" : "marginTop"],
      l = i[e === "padding" ? "paddingRight" : "marginRight"];
    return [If(s), If(r), If(l)];
  },
  M3 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return C3;
    var i = R3(e),
      s = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: i[0],
      top: i[1],
      right: i[2],
      gap: Math.max(0, r - s + i[2] - i[0]),
    };
  },
  D3 = vS(),
  $a = "data-scroll-locked",
  O3 = function (e, i, s, r) {
    var l = e.left,
      u = e.top,
      f = e.right,
      h = e.gap;
    return (
      s === void 0 && (s = "margin"),
      `
  .`
        .concat(
          f3,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(h, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          $a,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            i && "position: relative ".concat(r, ";"),
            s === "margin" &&
              `
    padding-left: `
                .concat(
                  l,
                  `px;
    padding-top: `,
                )
                .concat(
                  u,
                  `px;
    padding-right: `,
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(h, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            s === "padding" &&
              "padding-right: ".concat(h, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          gl,
          ` {
    right: `,
        )
        .concat(h, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          yl,
          ` {
    margin-right: `,
        )
        .concat(h, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(gl, " .")
        .concat(
          gl,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(yl, " .")
        .concat(
          yl,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          $a,
          `] {
    `,
        )
        .concat(d3, ": ")
        .concat(
          h,
          `px;
  }
`,
        )
    );
  },
  H0 = function () {
    var e = parseInt(document.body.getAttribute($a) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  N3 = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute($a, (H0() + 1).toString()),
        function () {
          var e = H0() - 1;
          e <= 0
            ? document.body.removeAttribute($a)
            : document.body.setAttribute($a, e.toString());
        }
      );
    }, []);
  },
  j3 = function (e) {
    var i = e.noRelative,
      s = e.noImportant,
      r = e.gapMode,
      l = r === void 0 ? "margin" : r;
    N3();
    var u = w.useMemo(
      function () {
        return M3(l);
      },
      [l],
    );
    return w.createElement(D3, { styles: O3(u, !i, l, s ? "" : "!important") });
  },
  Ld = !1;
if (typeof window < "u")
  try {
    var nl = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Ld = !0), !0);
      },
    });
    (window.addEventListener("test", nl, nl),
      window.removeEventListener("test", nl, nl));
  } catch {
    Ld = !1;
  }
var Ua = Ld ? { passive: !1 } : !1,
  _3 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  bS = function (e, i) {
    if (!(e instanceof Element)) return !1;
    var s = window.getComputedStyle(e);
    return (
      s[i] !== "hidden" &&
      !(s.overflowY === s.overflowX && !_3(e) && s[i] === "visible")
    );
  },
  V3 = function (e) {
    return bS(e, "overflowY");
  },
  L3 = function (e) {
    return bS(e, "overflowX");
  },
  q0 = function (e, i) {
    var s = i.ownerDocument,
      r = i;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var l = xS(e, r);
      if (l) {
        var u = SS(e, r),
          f = u[1],
          h = u[2];
        if (f > h) return !0;
      }
      r = r.parentNode;
    } while (r && r !== s.body);
    return !1;
  },
  z3 = function (e) {
    var i = e.scrollTop,
      s = e.scrollHeight,
      r = e.clientHeight;
    return [i, s, r];
  },
  P3 = function (e) {
    var i = e.scrollLeft,
      s = e.scrollWidth,
      r = e.clientWidth;
    return [i, s, r];
  },
  xS = function (e, i) {
    return e === "v" ? V3(i) : L3(i);
  },
  SS = function (e, i) {
    return e === "v" ? z3(i) : P3(i);
  },
  B3 = function (e, i) {
    return e === "h" && i === "rtl" ? -1 : 1;
  },
  k3 = function (e, i, s, r, l) {
    var u = B3(e, window.getComputedStyle(i).direction),
      f = u * r,
      h = s.target,
      p = i.contains(h),
      m = !1,
      g = f > 0,
      v = 0,
      x = 0;
    do {
      if (!h) break;
      var T = SS(e, h),
        C = T[0],
        E = T[1],
        R = T[2],
        N = E - R - u * C;
      (C || N) && xS(e, h) && ((v += N), (x += C));
      var j = h.parentNode;
      h = j && j.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? j.host : j;
    } while ((!p && h !== document.body) || (p && (i.contains(h) || i === h)));
    return (((g && Math.abs(v) < 1) || (!g && Math.abs(x) < 1)) && (m = !0), m);
  },
  il = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  G0 = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Y0 = function (e) {
    return e && "current" in e ? e.current : e;
  },
  U3 = function (e, i) {
    return e[0] === i[0] && e[1] === i[1];
  },
  H3 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  q3 = 0,
  Ha = [];
function G3(e) {
  var i = w.useRef([]),
    s = w.useRef([0, 0]),
    r = w.useRef(),
    l = w.useState(q3++)[0],
    u = w.useState(vS)[0],
    f = w.useRef(e);
  (w.useEffect(
    function () {
      f.current = e;
    },
    [e],
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(l));
          var E = u3([e.lockRef.current], (e.shards || []).map(Y0), !0).filter(
            Boolean,
          );
          return (
            E.forEach(function (R) {
              return R.classList.add("allow-interactivity-".concat(l));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(l)),
                E.forEach(function (R) {
                  return R.classList.remove("allow-interactivity-".concat(l));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var h = w.useCallback(function (E, R) {
      if (
        ("touches" in E && E.touches.length === 2) ||
        (E.type === "wheel" && E.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var N = il(E),
        j = s.current,
        O = "deltaX" in E ? E.deltaX : j[0] - N[0],
        P = "deltaY" in E ? E.deltaY : j[1] - N[1],
        V,
        F = E.target,
        Z = Math.abs(O) > Math.abs(P) ? "h" : "v";
      if ("touches" in E && Z === "h" && F.type === "range") return !1;
      var H = window.getSelection(),
        J = H && H.anchorNode,
        lt = J ? J === F || J.contains(F) : !1;
      if (lt) return !1;
      var pt = q0(Z, F);
      if (!pt) return !0;
      if ((pt ? (V = Z) : ((V = Z === "v" ? "h" : "v"), (pt = q0(Z, F))), !pt))
        return !1;
      if (
        (!r.current && "changedTouches" in E && (O || P) && (r.current = V), !V)
      )
        return !0;
      var ct = r.current || V;
      return k3(ct, R, E, ct === "h" ? O : P);
    }, []),
    p = w.useCallback(function (E) {
      var R = E;
      if (!(!Ha.length || Ha[Ha.length - 1] !== u)) {
        var N = "deltaY" in R ? G0(R) : il(R),
          j = i.current.filter(function (V) {
            return (
              V.name === R.type &&
              (V.target === R.target || R.target === V.shadowParent) &&
              U3(V.delta, N)
            );
          })[0];
        if (j && j.should) {
          R.cancelable && R.preventDefault();
          return;
        }
        if (!j) {
          var O = (f.current.shards || [])
              .map(Y0)
              .filter(Boolean)
              .filter(function (V) {
                return V.contains(R.target);
              }),
            P = O.length > 0 ? h(R, O[0]) : !f.current.noIsolation;
          P && R.cancelable && R.preventDefault();
        }
      }
    }, []),
    m = w.useCallback(function (E, R, N, j) {
      var O = { name: E, delta: R, target: N, should: j, shadowParent: Y3(N) };
      (i.current.push(O),
        setTimeout(function () {
          i.current = i.current.filter(function (P) {
            return P !== O;
          });
        }, 1));
    }, []),
    g = w.useCallback(function (E) {
      ((s.current = il(E)), (r.current = void 0));
    }, []),
    v = w.useCallback(function (E) {
      m(E.type, G0(E), E.target, h(E, e.lockRef.current));
    }, []),
    x = w.useCallback(function (E) {
      m(E.type, il(E), E.target, h(E, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      Ha.push(u),
      e.setCallbacks({
        onScrollCapture: v,
        onWheelCapture: v,
        onTouchMoveCapture: x,
      }),
      document.addEventListener("wheel", p, Ua),
      document.addEventListener("touchmove", p, Ua),
      document.addEventListener("touchstart", g, Ua),
      function () {
        ((Ha = Ha.filter(function (E) {
          return E !== u;
        })),
          document.removeEventListener("wheel", p, Ua),
          document.removeEventListener("touchmove", p, Ua),
          document.removeEventListener("touchstart", g, Ua));
      }
    );
  }, []);
  var T = e.removeScrollBar,
    C = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    C ? w.createElement(u, { styles: H3(l) }) : null,
    T
      ? w.createElement(j3, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function Y3(e) {
  for (var i = null; e !== null; )
    (e instanceof ShadowRoot && ((i = e.host), (e = e.host)),
      (e = e.parentNode));
  return i;
}
const F3 = b3(yS, G3);
var wS = w.forwardRef(function (e, i) {
  return w.createElement(Wl, mn({}, e, { ref: i, sideCar: F3 }));
});
wS.classNames = Wl.classNames;
var X3 = function (e) {
    if (typeof document > "u") return null;
    var i = Array.isArray(e) ? e[0] : e;
    return i.ownerDocument.body;
  },
  qa = new WeakMap(),
  al = new WeakMap(),
  sl = {},
  $f = 0,
  TS = function (e) {
    return e && (e.host || TS(e.parentNode));
  },
  K3 = function (e, i) {
    return i
      .map(function (s) {
        if (e.contains(s)) return s;
        var r = TS(s);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              s,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (s) {
        return !!s;
      });
  },
  Q3 = function (e, i, s, r) {
    var l = K3(i, Array.isArray(e) ? e : [e]);
    sl[s] || (sl[s] = new WeakMap());
    var u = sl[s],
      f = [],
      h = new Set(),
      p = new Set(l),
      m = function (v) {
        !v || h.has(v) || (h.add(v), m(v.parentNode));
      };
    l.forEach(m);
    var g = function (v) {
      !v ||
        p.has(v) ||
        Array.prototype.forEach.call(v.children, function (x) {
          if (h.has(x)) g(x);
          else
            try {
              var T = x.getAttribute(r),
                C = T !== null && T !== "false",
                E = (qa.get(x) || 0) + 1,
                R = (u.get(x) || 0) + 1;
              (qa.set(x, E),
                u.set(x, R),
                f.push(x),
                E === 1 && C && al.set(x, !0),
                R === 1 && x.setAttribute(s, "true"),
                C || x.setAttribute(r, "true"));
            } catch (N) {
              console.error("aria-hidden: cannot operate on ", x, N);
            }
        });
    };
    return (
      g(i),
      h.clear(),
      $f++,
      function () {
        (f.forEach(function (v) {
          var x = qa.get(v) - 1,
            T = u.get(v) - 1;
          (qa.set(v, x),
            u.set(v, T),
            x || (al.has(v) || v.removeAttribute(r), al.delete(v)),
            T || v.removeAttribute(s));
        }),
          $f--,
          $f ||
            ((qa = new WeakMap()),
            (qa = new WeakMap()),
            (al = new WeakMap()),
            (sl = {})));
      }
    );
  },
  Z3 = function (e, i, s) {
    s === void 0 && (s = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      l = X3(e);
    return l
      ? (r.push.apply(r, Array.from(l.querySelectorAll("[aria-live], script"))),
        Q3(r, l, s, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Il = "Dialog",
  [ES] = Er(Il),
  [W3, sn] = ES(Il),
  AS = (e) => {
    const {
        __scopeDialog: i,
        children: s,
        open: r,
        defaultOpen: l,
        onOpenChange: u,
        modal: f = !0,
      } = e,
      h = w.useRef(null),
      p = w.useRef(null),
      [m, g] = rb({ prop: r, defaultProp: l ?? !1, onChange: u, caller: Il });
    return b.jsx(W3, {
      scope: i,
      triggerRef: h,
      contentRef: p,
      contentId: Af(),
      titleId: Af(),
      descriptionId: Af(),
      open: m,
      onOpenChange: g,
      onOpenToggle: w.useCallback(() => g((v) => !v), [g]),
      modal: f,
      children: s,
    });
  };
AS.displayName = Il;
var CS = "DialogTrigger",
  RS = w.forwardRef((e, i) => {
    const { __scopeDialog: s, ...r } = e,
      l = sn(CS, s),
      u = ve(i, l.triggerRef);
    return b.jsx(Wt.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": l.open,
      "aria-controls": l.contentId,
      "data-state": Vh(l.open),
      ...r,
      ref: u,
      onClick: kt(e.onClick, l.onOpenToggle),
    });
  });
RS.displayName = CS;
var jh = "DialogPortal",
  [I3, MS] = ES(jh, { forceMount: void 0 }),
  DS = (e) => {
    const { __scopeDialog: i, forceMount: s, children: r, container: l } = e,
      u = sn(jh, i);
    return b.jsx(I3, {
      scope: i,
      forceMount: s,
      children: w.Children.map(r, (f) =>
        b.jsx(Ji, {
          present: s || u.open,
          children: b.jsx(kl, { asChild: !0, container: l, children: f }),
        }),
      ),
    });
  };
DS.displayName = jh;
var Vl = "DialogOverlay",
  OS = w.forwardRef((e, i) => {
    const s = MS(Vl, e.__scopeDialog),
      { forceMount: r = s.forceMount, ...l } = e,
      u = sn(Vl, e.__scopeDialog);
    return u.modal
      ? b.jsx(Ji, {
          present: r || u.open,
          children: b.jsx(J3, { ...l, ref: i }),
        })
      : null;
  });
OS.displayName = Vl;
var $3 = bl("DialogOverlay.RemoveScroll"),
  J3 = w.forwardRef((e, i) => {
    const { __scopeDialog: s, ...r } = e,
      l = sn(Vl, s);
    return b.jsx(wS, {
      as: $3,
      allowPinchZoom: !0,
      shards: [l.contentRef],
      children: b.jsx(Wt.div, {
        "data-state": Vh(l.open),
        ...r,
        ref: i,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  $i = "DialogContent",
  NS = w.forwardRef((e, i) => {
    const s = MS($i, e.__scopeDialog),
      { forceMount: r = s.forceMount, ...l } = e,
      u = sn($i, e.__scopeDialog);
    return b.jsx(Ji, {
      present: r || u.open,
      children: u.modal
        ? b.jsx(t4, { ...l, ref: i })
        : b.jsx(e4, { ...l, ref: i }),
    });
  });
NS.displayName = $i;
var t4 = w.forwardRef((e, i) => {
    const s = sn($i, e.__scopeDialog),
      r = w.useRef(null),
      l = ve(i, s.contentRef, r);
    return (
      w.useEffect(() => {
        const u = r.current;
        if (u) return Z3(u);
      }, []),
      b.jsx(jS, {
        ...e,
        ref: l,
        trapFocus: s.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: kt(e.onCloseAutoFocus, (u) => {
          (u.preventDefault(), s.triggerRef.current?.focus());
        }),
        onPointerDownOutside: kt(e.onPointerDownOutside, (u) => {
          const f = u.detail.originalEvent,
            h = f.button === 0 && f.ctrlKey === !0;
          (f.button === 2 || h) && u.preventDefault();
        }),
        onFocusOutside: kt(e.onFocusOutside, (u) => u.preventDefault()),
      })
    );
  }),
  e4 = w.forwardRef((e, i) => {
    const s = sn($i, e.__scopeDialog),
      r = w.useRef(!1),
      l = w.useRef(!1);
    return b.jsx(jS, {
      ...e,
      ref: i,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (u) => {
        (e.onCloseAutoFocus?.(u),
          u.defaultPrevented ||
            (r.current || s.triggerRef.current?.focus(), u.preventDefault()),
          (r.current = !1),
          (l.current = !1));
      },
      onInteractOutside: (u) => {
        (e.onInteractOutside?.(u),
          u.defaultPrevented ||
            ((r.current = !0),
            u.detail.originalEvent.type === "pointerdown" && (l.current = !0)));
        const f = u.target;
        (s.triggerRef.current?.contains(f) && u.preventDefault(),
          u.detail.originalEvent.type === "focusin" &&
            l.current &&
            u.preventDefault());
      },
    });
  }),
  jS = w.forwardRef((e, i) => {
    const {
        __scopeDialog: s,
        trapFocus: r,
        onOpenAutoFocus: l,
        onCloseAutoFocus: u,
        ...f
      } = e,
      h = sn($i, s),
      p = w.useRef(null),
      m = ve(i, p);
    return (
      c3(),
      b.jsxs(b.Fragment, {
        children: [
          b.jsx(hS, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: l,
            onUnmountAutoFocus: u,
            children: b.jsx(Bl, {
              role: "dialog",
              id: h.contentId,
              "aria-describedby": h.descriptionId,
              "aria-labelledby": h.titleId,
              "data-state": Vh(h.open),
              ...f,
              ref: m,
              onDismiss: () => h.onOpenChange(!1),
            }),
          }),
          b.jsxs(b.Fragment, {
            children: [
              b.jsx(n4, { titleId: h.titleId }),
              b.jsx(a4, { contentRef: p, descriptionId: h.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  _h = "DialogTitle",
  _S = w.forwardRef((e, i) => {
    const { __scopeDialog: s, ...r } = e,
      l = sn(_h, s);
    return b.jsx(Wt.h2, { id: l.titleId, ...r, ref: i });
  });
_S.displayName = _h;
var VS = "DialogDescription",
  LS = w.forwardRef((e, i) => {
    const { __scopeDialog: s, ...r } = e,
      l = sn(VS, s);
    return b.jsx(Wt.p, { id: l.descriptionId, ...r, ref: i });
  });
LS.displayName = VS;
var zS = "DialogClose",
  PS = w.forwardRef((e, i) => {
    const { __scopeDialog: s, ...r } = e,
      l = sn(zS, s);
    return b.jsx(Wt.button, {
      type: "button",
      ...r,
      ref: i,
      onClick: kt(e.onClick, () => l.onOpenChange(!1)),
    });
  });
PS.displayName = zS;
function Vh(e) {
  return e ? "open" : "closed";
}
var BS = "DialogTitleWarning",
  [R4, kS] = hA(BS, { contentName: $i, titleName: _h, docsSlug: "dialog" }),
  n4 = ({ titleId: e }) => {
    const i = kS(BS),
      s = `\`${i.contentName}\` requires a \`${i.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${i.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${i.docsSlug}`;
    return (
      w.useEffect(() => {
        e && (document.getElementById(e) || console.error(s));
      }, [s, e]),
      null
    );
  },
  i4 = "DialogDescriptionWarning",
  a4 = ({ contentRef: e, descriptionId: i }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${kS(i4).contentName}}.`;
    return (
      w.useEffect(() => {
        const l = e.current?.getAttribute("aria-describedby");
        i && l && (document.getElementById(i) || console.warn(r));
      }, [r, e, i]),
      null
    );
  },
  US = AS,
  s4 = RS,
  HS = DS,
  $l = OS,
  Jl = NS,
  tc = _S,
  ec = LS,
  qS = PS;
const r4 = US,
  o4 = s4,
  l4 = HS,
  GS = w.forwardRef(({ className: e, ...i }, s) =>
    b.jsx($l, {
      className: ce(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...i,
      ref: s,
    }),
  );
GS.displayName = $l.displayName;
const c4 = Yd(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    },
  ),
  YS = w.forwardRef(
    ({ side: e = "right", className: i, children: s, ...r }, l) =>
      b.jsxs(l4, {
        children: [
          b.jsx(GS, {}),
          b.jsxs(Jl, {
            ref: l,
            className: ce(c4({ side: e }), i),
            ...r,
            children: [
              b.jsxs(qS, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  b.jsx(Fd, { className: "h-4 w-4" }),
                  b.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              s,
            ],
          }),
        ],
      }),
  );
YS.displayName = Jl.displayName;
const u4 = w.forwardRef(({ className: e, ...i }, s) =>
  b.jsx(tc, {
    ref: s,
    className: ce("text-lg font-semibold text-foreground", e),
    ...i,
  }),
);
u4.displayName = tc.displayName;
const f4 = w.forwardRef(({ className: e, ...i }, s) =>
  b.jsx(ec, {
    ref: s,
    className: ce("text-sm text-muted-foreground", e),
    ...i,
  }),
);
f4.displayName = ec.displayName;
const d4 = US,
  h4 = HS,
  FS = w.forwardRef(({ className: e, ...i }, s) =>
    b.jsx($l, {
      ref: s,
      className: ce(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...i,
    }),
  );
FS.displayName = $l.displayName;
const XS = w.forwardRef(({ className: e, children: i, ...s }, r) =>
  b.jsxs(h4, {
    children: [
      b.jsx(FS, {}),
      b.jsxs(Jl, {
        ref: r,
        className: ce(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e,
        ),
        ...s,
        children: [
          i,
          b.jsxs(qS, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              b.jsx(Fd, { className: "h-4 w-4" }),
              b.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
XS.displayName = Jl.displayName;
const KS = ({ className: e, ...i }) =>
  b.jsx("div", {
    className: ce("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...i,
  });
KS.displayName = "DialogHeader";
const QS = w.forwardRef(({ className: e, ...i }, s) =>
  b.jsx(tc, {
    ref: s,
    className: ce("text-lg font-semibold leading-none tracking-tight", e),
    ...i,
  }),
);
QS.displayName = tc.displayName;
const ZS = w.forwardRef(({ className: e, ...i }, s) =>
  b.jsx(ec, {
    ref: s,
    className: ce("text-sm text-muted-foreground", e),
    ...i,
  }),
);
ZS.displayName = ec.displayName;
const lr = "https://blessedbarberpalma.setmore.com",
  m4 = "34631935439",
  F0 = "+34 631 935 439",
  WS = (e) => `https://wa.me/${m4}?text=${encodeURIComponent(e)}`,
  p4 = WS("Hola, me gustaría reservar una cita en Blessed Barber Studio."),
  Ga = ({ href: e }) =>
    b.jsx(Ct.a, {
      href: e,
      "aria-label": "Siguiente sección",
      className:
        "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer",
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: !0 },
      transition: { duration: 0.6 },
      children: b.jsx(Ct.div, {
        animate: { y: [0, 10, 0] },
        transition: { duration: 1.6, repeat: 1 / 0, ease: "easeInOut" },
        children: b.jsxs("svg", {
          width: "36",
          height: "36",
          viewBox: "0 0 36 36",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]",
          children: [
            b.jsx("path", {
              d: "M8 13L18 23L28 13",
              stroke: "#D4AF37",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            b.jsx("path", {
              d: "M8 20L18 30L28 20",
              stroke: "#D4AF37",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: "0.4",
            }),
          ],
        }),
      }),
    }),
  cr = ({ className: e = "w-5 h-5" }) =>
    b.jsx("svg", {
      viewBox: "0 0 24 24",
      className: e,
      fill: "currentColor",
      "aria-hidden": "true",
      children: b.jsx("path", {
        d: "M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.953-1 3.648 3.379-.96zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
      }),
    }),
  g4 = [
    { href: "#filosofia", label: "Sobre nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#resenas", label: "Reseñas" },
    { href: "#reserva", label: "Reservar" },
    { href: "#mapa", label: "Cómo llegar" },
  ],
  IS = [
    {
      name: "Corte de pelo (fade al 0 moderno)",
      emoji: "⚡",
      price: "14€",
      duration: "35 min",
      desc: "Degradado super candela + corte a tijera.",
    },
    {
      name: "Corte + cejas",
      emoji: "✨",
      price: "15€",
      duration: "40 min",
      desc: "Degradado bien afeitado + perfilado de cejas.",
    },
    {
      name: "Corte + barba",
      emoji: "🧔",
      price: "18€",
      duration: "50 min",
      desc: "El combo de siempre. Corte completo + arreglo de barba.",
    },
  ],
  $S = [
    {
      name: "Corte + barba + cejas",
      emoji: "💎",
      price: "20€",
      duration: "50 min",
      desc: "El pack completo.",
    },
    {
      name: "Corte niño",
      emoji: "👶",
      price: "desde 12€",
      duration: "30 min",
      desc: "Para los pequeños. Hasta los 10 años.",
    },
    {
      name: "Barba moderna",
      emoji: "🔥",
      price: "8€",
      duration: "20 min",
      desc: "Degradado de barba con perfilado.",
    },
    {
      name: "Cejas",
      emoji: "✨",
      price: "3€",
      duration: "5 min",
      desc: "Perfilado con cuchilla o portanavajas.",
    },
    {
      name: "Mechas rubias",
      emoji: "🌟",
      price: "30€",
      duration: "50 min",
      desc: "Mechas con acabado natural.",
    },
    {
      name: "Mechas + tinte",
      emoji: "🌟",
      price: "35€",
      duration: "1 h",
      desc: "Mechas estructuradas tirando al blanco.",
    },
    {
      name: "Decoloración + corte",
      emoji: "💫",
      price: "50€",
      duration: "1 h",
      desc: "Decoloración completa + corte.",
    },
  ],
  y4 = [...IS, ...$S],
  v4 = [
    { dia: "Lunes", horas: "10:00 - 20:00" },
    { dia: "Martes", horas: "10:00 - 20:00" },
    { dia: "Miércoles", horas: "10:00 - 20:00" },
    { dia: "Jueves", horas: "10:00 - 20:00" },
    { dia: "Viernes", horas: "10:00 - 20:00" },
    { dia: "Sábado", horas: "10:00 - 20:00" },
    { dia: "Domingo", horas: "Cerrado", closed: !0 },
  ],
  b4 = [
    {
      name: "Agustin G.",
      text: "Fui por primera vez a cortarme el pelo y Gus me hizo sentir muy cómodo desde el primer momento. Le mostré el corte que quería y me lo hizo tal cual. 100% recomendable.",
      service: "Corte de pelo · fade al 0",
      date: "Marzo 2026",
    },
    {
      name: "Pillito C.",
      text: "Elegir a David es saber que vas a salir 100% bonito. Trato perfecto y buen corte 🫡🔝",
      service: "Corte de pelo · fade al 0",
      date: "Marzo 2026",
    },
    {
      name: "Miguel B.",
      text: "Buen servicio tanto el trato como el corte de pelo.",
      service: "Corte + barba + cejas",
      date: "Abril 2026",
    },
    {
      name: "Yago M.",
      text: "Corte de 10.",
      service: "Corte + cejas con Gus",
      date: "Abril 2026",
    },
    {
      name: "Jhonatan V.",
      text: "Los mejores.",
      service: "Corte de pelo con Gus",
      date: "Abril 2026",
    },
    {
      name: "Javier P.",
      text: "Excelente la verdad, lo recomiendo.",
      service: "Corte + cejas",
      date: "Febrero 2026",
    },
  ],
  x4 = 4.85,
  X0 = 359;
function S4() {
  const [e, i] = w.useState(!1),
    [s, r] = w.useState(!1),
    [selSvc, setSelSvc] = w.useState(null),
    [step, setStep] = w.useState(1),
    l = {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      },
    },
    u = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    },
    f = (h) => {
      setSelSvc(h);
      setStep(2);
    },
    handleBarberSelect = (barberName) => {
      const p = `Hola Blessed Studio, me gustaría hacer un ${
        selSvc ? selSvc.name : ""
      } con el peluquero ${barberName}.. muchas gracias.`;
      r(!1);
      setSelSvc(null);
      setStep(1);
      window.open(WS(p), "_blank", "noopener,noreferrer");
    };
  return b.jsxs("div", {
    className: "min-h-[100dvh] flex flex-col noise-bg",
    children: [
      b.jsxs("nav", {
        className:
          "fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 flex items-center justify-between bg-[#111111] border-b border-white/8",
        children: [
          b.jsxs("a", {
            href: "#",
            className: "flex items-center gap-3",
            children: [
              b.jsx("img", {
                src: "./images/logo.png",
                alt: "Blessed Barber Studio",
                className:
                  "h-14 w-14 md:h-[64px] md:w-[64px] object-contain rounded-full bg-[#f4ece0] p-1.5 ring-2 ring-primary/40 shadow-lg shadow-black/40",
              }),
              b.jsxs("span", {
                className: "brand-name hidden sm:inline",
                style: { fontSize: "1.6rem" },
                children: [
                  "Blessed Barber Studio",
                  b.jsx("span", {
                    style: { color: "#B71C1C", marginLeft: "2px" },
                    children: ".",
                  }),
                ],
              }),
            ],
          }),
          b.jsxs("div", {
            className: "flex items-center gap-2 md:gap-3",
            children: [
              b.jsx(dS, {
                asChild: !0,
                variant: "outline",
                className:
                  "hidden sm:inline-flex border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none uppercase tracking-widest text-xs font-bold shadow-[0_0_12px_0_rgba(184,134,64,0.25)] hover:shadow-[0_0_20px_0_rgba(184,134,64,0.5)] transition-all duration-300",
                children: b.jsx("a", {
                  href: lr,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Reservar Online",
                }),
              }),
              b.jsxs(r4, {
                open: e,
                onOpenChange: i,
                children: [
                  b.jsx(o4, {
                    asChild: !0,
                    children: b.jsxs("button", {
                      "aria-label": "Abrir menú",
                      className:
                        "inline-flex items-center gap-2 px-3 py-2 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest text-xs",
                      children: [
                        b.jsx(b2, { className: "w-4 h-4" }),
                        b.jsx("span", {
                          className: "hidden sm:inline",
                          children: "Menú",
                        }),
                      ],
                    }),
                  }),
                  b.jsx(YS, {
                    side: "right",
                    className:
                      "bg-background border-l border-primary/20 w-[300px] sm:w-[360px] p-0",
                    children: b.jsxs("div", {
                      className: "flex flex-col h-full",
                      children: [
                        b.jsxs("div", {
                          className:
                            "flex items-center gap-3 px-6 pt-6 pb-6 border-b border-white/10",
                          children: [
                            b.jsx("img", {
                              src: "./images/logo.png",
                              alt: "Blessed Barber Studio",
                              className:
                                "h-14 w-14 object-contain rounded-full bg-[#f4ece0] p-1.5 ring-2 ring-primary/40",
                            }),
                            b.jsxs("div", {
                              children: [
                                b.jsx("div", {
                                  className:
                                    "text-primary font-serif text-lg leading-tight",
                                  children: "Blessed Barber Studio",
                                }),
                                b.jsx("div", {
                                  className:
                                    "text-xs text-muted-foreground tracking-widest uppercase",
                                  children: "Est. 2024 · Palma",
                                }),
                              ],
                            }),
                          ],
                        }),
                        b.jsx("nav", {
                          className: "flex-1 overflow-y-auto py-4",
                          children: g4.map((h) =>
                            b.jsxs(
                              "a",
                              {
                                href: h.href,
                                onClick: () => i(!1),
                                className:
                                  "flex items-center justify-between px-6 py-4 text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-b border-white/5 group",
                                children: [
                                  b.jsx("span", {
                                    className: "font-serif text-xl",
                                    children: h.label,
                                  }),
                                  b.jsx(tv, {
                                    className:
                                      "w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all",
                                  }),
                                ],
                              },
                              h.href,
                            ),
                          ),
                        }),
                        b.jsxs("div", {
                          className: "p-6 border-t border-white/10 space-y-3",
                          children: [
                            b.jsxs("a", {
                              href: lr,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-xs font-bold",
                              children: [
                                b.jsx(Jy, { className: "w-4 h-4" }),
                                " Reservar Online",
                              ],
                            }),
                            null,
                            b.jsx("p", {
                              className:
                                "text-center text-xs text-muted-foreground pt-2",
                              children: F0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      b.jsxs("section", {
        className:
          "relative min-h-[110vh] md:min-h-[105vh] flex items-end pt-24 overflow-hidden",
        children: [
          b.jsxs("div", {
            className: "absolute inset-0 z-0",
            children: [
              b.jsx("img", {
                src: "./images/hero-new.jpg",
                alt: "Barbero en Blessed Barber Studio con gorra rosa y graffiti de Bugs Bunny",
                className:
                  "w-full h-full object-cover [object-position:50%_68%] md:[object-position:50%_62%]",
              }),
              b.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent",
              }),
              b.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-background/50 via-background/10 to-transparent",
              }),
            ],
          }),
          b.jsx("div", {
            className: "container mx-auto px-6 relative z-10 pb-20 md:pb-28",
            children: b.jsxs(Ct.div, {
              initial: "hidden",
              animate: "visible",
              variants: u,
              className: "max-w-sm md:max-w-md",
              children: [
                b.jsxs(Ct.h1, {
                  variants: l,
                  className:
                    "text-4xl md:text-5xl lg:text-6xl leading-[0.92] mb-5 text-balance",
                  children: [
                    "El Arte del ",
                    b.jsx("br", {}),
                    b.jsx("span", {
                      className: "text-primary italic",
                      children: "Corte Perfecto.",
                    }),
                  ],
                }),
                b.jsxs(Ct.p, {
                  variants: l,
                  className:
                    "text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-5 flex items-center gap-4",
                  children: [
                    b.jsx("span", { className: "w-8 h-[1px] bg-primary" }),
                    "Precisión, estilo y atención al detalle en cada servicio.",
                  ],
                }),
                b.jsx(Ct.p, {
                  variants: l,
                  className:
                    "text-base md:text-lg text-muted-foreground max-w-xs md:max-w-sm leading-relaxed",
                  children:
                    "No somos una cadena. Somos un estudio donde cada corte se diseña para ti. Aquí no vienes solo a cortarte el pelo, vienes a salir en tu mejor versión.",
                }),
              ],
            }),
          }),
          b.jsx(Ga, { href: "#filosofia" }),
        ],
      }),
      b.jsxs("section", {
        id: "filosofia",
        className: "py-32 md:py-44 relative bg-card",
        children: [
          b.jsx("div", {
            className: "container mx-auto px-6",
            children: b.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-center",
              children: [
                b.jsx(Ct.div, {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0, margin: "-100px" },
                  variants: u,
                  className: "order-2 md:order-1",
                  children: b.jsxs(Ct.div, {
                    variants: l,
                    className: "relative max-w-md mx-auto",
                    children: [
                      b.jsxs("div", {
                        className:
                          "relative p-3 md:p-4 bg-gradient-to-br from-primary/30 via-primary/10 to-primary/30 shadow-2xl shadow-black/60",
                        children: [
                          b.jsx("div", {
                            className: "relative p-2 bg-background",
                            children: b.jsxs("div", {
                              className:
                                "relative aspect-[3/4] overflow-hidden",
                              children: [
                                b.jsx("img", {
                                  src: "./images/origenes.png",
                                  alt: "Interior de Blessed Barber Studio",
                                  className:
                                    "w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000",
                                }),
                                b.jsx("div", {
                                  className:
                                    "absolute inset-0 ring-1 ring-primary/30 ring-inset pointer-events-none",
                                }),
                              ],
                            }),
                          }),
                          b.jsx("div", {
                            className:
                              "absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary",
                          }),
                          b.jsx("div", {
                            className:
                              "absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary",
                          }),
                          b.jsx("div", {
                            className:
                              "absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary",
                          }),
                          b.jsx("div", {
                            className:
                              "absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary",
                          }),
                        ],
                      }),
                      b.jsxs("div", {
                        className:
                          "absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 shadow-xl shadow-black/40 flex items-center gap-2",
                        children: [
                          b.jsx(T2, { className: "w-4 h-4" }),
                          b.jsx("span", {
                            className:
                              "text-xs tracking-widest uppercase font-bold",
                            children: "By Gustavo",
                          }),
                        ],
                      }),
                      b.jsx("div", {
                        className:
                          "absolute -inset-8 bg-primary/5 blur-3xl -z-10 rounded-full",
                      }),
                    ],
                  }),
                }),
                b.jsxs(Ct.div, {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0, margin: "-100px" },
                  variants: u,
                  className: "order-1 md:order-2",
                  children: [
                    b.jsxs(Ct.h2, {
                      variants: l,
                      className: "text-3xl md:text-5xl mb-8",
                      children: [
                        "Volver a los ",
                        b.jsx("span", {
                          className: "text-primary italic",
                          children: "orígenes",
                        }),
                        ".",
                      ],
                    }),
                    b.jsxs(Ct.div, {
                      variants: l,
                      className: "space-y-6 text-muted-foreground text-lg",
                      children: [
                        b.jsx("p", {
                          children:
                            "Abrimos nuestras puertas en 2020 con una idea muy simple: recuperar la barbería clásica de barrio. Esa donde el barbero conoce tu nombre, tu corte y cómo te tomas el café.",
                        }),
                        b.jsx("p", {
                          children:
                            "Aquí no hay prisas. Un buen degradado o un afeitado a toalla caliente requiere tiempo, pulso firme y las herramientas adecuadas. Entras, dejas el móvil, escuchas lo último del género urbano que está rompiendo de fondo, y desconectas.",
                        }),
                        b.jsx("p", {
                          className:
                            "text-foreground font-medium border-l-2 border-primary pl-6 py-2 italic mt-8",
                          children:
                            '"No vendemos cortes de pelo en 15 minutos. Vendemos la experiencia completa de ser cuidado como te mereces."',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          b.jsx(Ga, { href: "#servicios" }),
        ],
      }),
      b.jsxs("section", {
        id: "servicios",
        className: "py-32 md:py-44 relative border-t border-white/5",
        children: [
          b.jsxs("div", {
            className: "container mx-auto px-6 max-w-4xl",
            children: [
              b.jsxs(Ct.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-100px" },
                variants: u,
                className: "text-center mb-16",
                children: [
                  b.jsxs(Ct.h2, {
                    variants: l,
                    className: "text-3xl md:text-5xl mb-4",
                    children: [
                      "Carta de ",
                      b.jsx("span", {
                        className: "text-primary italic",
                        children: "Servicios",
                      }),
                    ],
                  }),
                  b.jsx(Ct.p, {
                    variants: l,
                    className: "text-muted-foreground max-w-xl mx-auto text-sm",
                    children:
                      "Fades, diseños, barbas y color. Reserva tu cita online.",
                  }),
                ],
              }),
              [
                { title: "Servicios más populares", items: IS },
                { title: "Otros servicios", items: $S },
              ].map((h, p) =>
                b.jsxs(
                  Ct.div,
                  {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0, margin: "-100px" },
                    variants: u,
                    className: "mb-12 last:mb-0",
                    children: [
                      b.jsx(Ct.h3, {
                        variants: l,
                        className:
                          "text-xs tracking-[0.25em] uppercase text-primary font-bold mb-6 pb-2 border-b border-primary/30",
                        children: h.title,
                      }),
                      b.jsx("div", {
                        className: "space-y-3",
                        children: h.items.map((m, g) =>
                          b.jsxs(
                            Ct.div,
                            {
                              variants: l,
                              className:
                                "flex justify-between items-center gap-4 group py-3 px-3 -mx-3 border-b border-white/5 rounded-md hover:border-primary/20 hover:bg-[#D4AF37]/[0.06] hover:shadow-[0_0_14px_0px_rgba(212,175,55,0.12)] transition-all duration-300 cursor-pointer",
                              onClick: () => {
                                setSelSvc(m);
                                setStep(2);
                                r(!0);
                              },
                              children: [
                                b.jsxs("div", {
                                  className:
                                    "flex items-center gap-3 flex-1 min-w-0",
                                  children: [
                                    b.jsx("span", {
                                      className:
                                        "text-xl shrink-0 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(212,175,55,0.9)] group-hover:scale-110",
                                      "aria-hidden": "true",
                                      children: m.emoji,
                                    }),
                                    b.jsxs("div", {
                                      className: "min-w-0",
                                      children: [
                                        b.jsx("h4", {
                                          className:
                                            "text-base font-serif group-hover:text-primary transition-colors duration-300 truncate",
                                          children: m.name,
                                        }),
                                        b.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground truncate",
                                          children: m.desc,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                b.jsxs("div", {
                                  className: "text-right shrink-0",
                                  children: [
                                    b.jsx("div", {
                                      className:
                                        "text-base font-medium font-serif text-primary whitespace-nowrap transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] group-hover:scale-105",
                                      children: m.price,
                                    }),
                                    b.jsx("div", {
                                      className:
                                        "text-[10px] uppercase tracking-wider text-muted-foreground",
                                      children: m.duration,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            g,
                          ),
                        ),
                      }),
                    ],
                  },
                  p,
                ),
              ),
            ],
          }),
          b.jsx(Ga, { href: "#galeria" }),
        ],
      }),
      b.jsxs("section", {
        id: "galeria",
        className: "py-32 md:py-44 bg-background relative overflow-hidden",
        children: [
          b.jsxs("div", {
            className: "container mx-auto px-6 mb-16 text-center",
            children: [
              b.jsx("p", {
                className:
                  "text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4",
                children: "Nuestro Trabajo",
              }),
              b.jsxs("h2", {
                className: "text-3xl md:text-5xl font-serif",
                children: [
                  "Cortes recientes en ",
                  b.jsx("span", {
                    className: "text-primary italic",
                    children: "la casa",
                  }),
                ],
              }),
              b.jsx("p", {
                className: "text-muted-foreground max-w-xl mx-auto mt-4",
                children:
                  "Fades, diseños, mullets y más. Cada cabeza es un lienzo.",
              }),
            ],
          }),
          b.jsx(Ct.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "-50px" },
            variants: u,
            className: "container mx-auto px-6",
            children: b.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: [
                {
                  src: "./images/corte-01.jpg?v=2",
                  name: "Golden Fade",
                  desc: "Degradado perfecto, 0 a medio",
                },
                {
                  src: "./images/corte-02.jpg?v=2",
                  name: "Textured Crop",
                  desc: "Estilo moderno y fresco",
                },
                {
                  src: "./images/corte-03.jpg?v=2",
                  name: "Classic Pompadour",
                  desc: "Elegancia atemporal",
                },
                {
                  src: "./images/corte-04.jpg",
                  name: "Sharp Mullet",
                  desc: "Actitud y rebeldía",
                },
                {
                  src: "./images/corte-05.jpg",
                  name: "Buzz Cut",
                  desc: "Limpio y minimalista",
                },
                {
                  src: "./images/corte-06.jpg",
                  name: "Slick Back",
                  desc: "Clásico con volumen",
                },
                {
                  src: "./images/corte-07.jpg",
                  name: "High Fade",
                  desc: "Contraste extremo",
                },
                {
                  src: "./images/corte-08.jpg?v=2",
                  name: "Beard & Hair",
                  desc: "El combo completo",
                },
                {
                  src: "./images/corte-09.jpg",
                  name: "Kids Special",
                  desc: "Estilo para los peques",
                },
              ].map((h, p) =>
                b.jsx(
                  Ct.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { delay: p * 0.1 },
                    className: "group",
                    children: b.jsxs("div", {
                      className:
                        "gallery-card relative w-full h-full flex flex-col",
                      children: [
                        b.jsx("div", {
                          className: "img-container",
                          children: b.jsx("img", {
                            src: h.src,
                            alt: h.name,
                            className: "",
                            loading: "lazy",
                          }),
                        }),
                        b.jsxs("div", {
                          className: "info",
                          children: [
                            b.jsx("h4", {
                              className: "industrial-font",
                              children: h.name,
                            }),
                            b.jsx("p", { children: h.desc }),
                          ],
                        }),
                      ],
                    }),
                  },
                  p,
                ),
              ),
            }),
          }),
          b.jsx(Ga, { href: "#resenas" }),
        ],
      }),
      b.jsxs("section", {
        id: "resenas",
        className: "py-32 md:py-44 bg-card border-t border-white/5 relative",
        children: [
          b.jsxs("div", {
            className: "container mx-auto px-6 relative z-10",
            children: [
              b.jsxs(Ct.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-100px" },
                variants: u,
                className: "max-w-3xl mx-auto text-center mb-16",
                children: [
                  b.jsx(Ct.p, {
                    variants: l,
                    className:
                      "text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6",
                    children: "Lo que dicen los clientes",
                  }),
                  b.jsxs(Ct.div, {
                    variants: l,
                    className:
                      "inline-flex flex-col items-center gap-4 mb-6 px-10 py-6 rounded-2xl border border-[#D4AF37]/30",
                    style: { background: "#111111" },
                    children: [
                      b.jsxs("div", {
                        className: "flex items-baseline gap-2",
                        children: [
                          b.jsx("span", {
                            className:
                              "text-7xl md:text-8xl font-serif font-bold",
                            style: { color: "#D4AF37" },
                            children: x4.toFixed(2),
                          }),
                          b.jsx("span", {
                            className: "text-2xl text-white/40 font-light",
                            children: "/ 5",
                          }),
                        ],
                      }),
                      b.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                          [1, 2, 3, 4].map((h) =>
                            b.jsx(
                              "svg",
                              {
                                width: "22",
                                height: "22",
                                viewBox: "0 0 24 24",
                                fill: "#D4AF37",
                                xmlns: "http://www.w3.org/2000/svg",
                                className:
                                  "drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]",
                                children: b.jsx("path", {
                                  d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                                }),
                              },
                              h,
                            ),
                          ),
                          b.jsxs("svg", {
                            width: "22",
                            height: "22",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            className:
                              "drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]",
                            children: [
                              b.jsx("defs", {
                                children: b.jsxs("linearGradient", {
                                  id: "partial85",
                                  x1: "0",
                                  x2: "1",
                                  y1: "0",
                                  y2: "0",
                                  children: [
                                    b.jsx("stop", {
                                      offset: "85%",
                                      stopColor: "#D4AF37",
                                    }),
                                    b.jsx("stop", {
                                      offset: "85%",
                                      stopColor: "#ffffff",
                                      stopOpacity: "0.15",
                                    }),
                                  ],
                                }),
                              }),
                              b.jsx("path", {
                                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                                fill: "url(#partial85)",
                              }),
                            ],
                          }),
                        ],
                      }),
                      b.jsxs("p", {
                        className: "text-sm text-white/50 tracking-wide",
                        children: [
                          "Basado en ",
                          b.jsxs("span", {
                            className: "text-white font-semibold",
                            children: [X0, " reseñas verificadas"],
                          }),
                          " en Booksy",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              b.jsx(Ct.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0, margin: "-50px" },
                variants: u,
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto",
                children: b4.map((h, p) =>
                  b.jsxs(
                    Ct.div,
                    {
                      variants: l,
                      className:
                        "flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-[0_0_20px_0px_rgba(212,175,55,0.12)]",
                      style: {
                        background: "#111111",
                        borderColor: "rgba(212,175,55,0.2)",
                      },
                      children: [
                        b.jsx("div", {
                          className: "flex items-center gap-1",
                          children: [1, 2, 3, 4, 5].map((m) =>
                            b.jsx(
                              "svg",
                              {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "#D4AF37",
                                xmlns: "http://www.w3.org/2000/svg",
                                className:
                                  "drop-shadow-[0_0_3px_rgba(212,175,55,0.5)]",
                                children: b.jsx("path", {
                                  d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                                }),
                              },
                              m,
                            ),
                          ),
                        }),
                        b.jsxs("p", {
                          className: "text-sm leading-relaxed flex-1",
                          style: { color: "#d1d5db" },
                          children: ['"', h.text, '"'],
                        }),
                        b.jsxs("div", {
                          className: "border-t pt-4",
                          style: { borderColor: "rgba(255,255,255,0.08)" },
                          children: [
                            b.jsx("p", {
                              className:
                                "font-bold text-white text-base leading-tight",
                              children: h.name,
                            }),
                            b.jsxs("div", {
                              className:
                                "flex items-center justify-between mt-1",
                              children: [
                                b.jsx("p", {
                                  className: "text-xs tracking-wide",
                                  style: { color: "#D4AF37", opacity: 0.8 },
                                  children: h.service,
                                }),
                                b.jsx("p", {
                                  className: "text-[11px]",
                                  style: { color: "rgba(255,255,255,0.35)" },
                                  children: h.date,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    p,
                  ),
                ),
              }),
              b.jsx("div", {
                className: "text-center mt-14",
                children: b.jsxs("a", {
                  href: lr,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:underline",
                  children: [
                    "Ver las ",
                    X0,
                    " reseñas en Booksy ",
                    b.jsx(Tf, { className: "w-4 h-4" }),
                  ],
                }),
              }),
            ],
          }),
          b.jsx(Ga, { href: "#reserva" }),
        ],
      }),
      b.jsxs("section", {
        id: "reserva",
        className:
          "py-24 md:py-32 relative bg-background border-t border-white/5",
        children: [
          b.jsx("div", {
            className: "container mx-auto px-6",
            children: b.jsxs("div", {
              className:
                "grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start",
              children: [
                b.jsxs(Ct.div, {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0 },
                  variants: u,
                  className:
                    "bg-card p-8 md:p-12 border border-white/10 relative",
                  children: [
                    b.jsx("div", {
                      className: "absolute top-0 left-0 w-2 h-full bg-primary",
                    }),
                    b.jsx(Ct.p, {
                      variants: l,
                      className:
                        "text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4",
                      children: "Reserva tu cita",
                    }),
                    b.jsxs(Ct.h2, {
                      variants: l,
                      className: "text-3xl md:text-4xl mb-3 font-serif",
                      children: [
                        "Elige cómo ",
                        b.jsx("span", {
                          className: "text-primary italic",
                          children: "reservar",
                        }),
                        ".",
                      ],
                    }),
                    b.jsx(Ct.p, {
                      variants: l,
                      className: "text-muted-foreground mb-10",
                      children:
                        "Reserva tu cita online en segundos en Setmore con calendario en tiempo real y confirmación inmediata.",
                    }),
                    b.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        b.jsxs(Ct.a, {
                          variants: l,
                          href: lr,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "group flex items-center justify-between gap-4 p-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                          children: [
                            b.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                b.jsx(Jy, { className: "w-7 h-7 shrink-0" }),
                                b.jsxs("div", {
                                  children: [
                                    b.jsx("div", {
                                      className:
                                        "text-xs tracking-widest uppercase opacity-80",
                                      children: "Reserva online",
                                    }),
                                    b.jsx("div", {
                                      className:
                                        "text-lg md:text-xl font-serif",
                                      children: "Reservar Cita Online",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            b.jsx(Tf, {
                              className:
                                "w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform",
                            }),
                          ],
                        }),
                        null,
                      ],
                    }),
                  ],
                }),
                b.jsxs(Ct.div, {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0 },
                  variants: u,
                  className: "flex flex-col justify-center space-y-10",
                  children: [
                    b.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        b.jsxs("h3", {
                          className:
                            "text-sm tracking-widest uppercase text-primary flex items-center gap-2",
                          children: [
                            b.jsx(h2, { className: "w-4 h-4" }),
                            " Horario",
                          ],
                        }),
                        b.jsx("ul", {
                          className:
                            "grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm",
                          children: v4.map((h, p) =>
                            b.jsxs(
                              "li",
                              {
                                className:
                                  "flex justify-between border-b border-white/5 py-1",
                                children: [
                                  b.jsx("span", {
                                    className: h.closed
                                      ? "text-muted-foreground/70"
                                      : "text-muted-foreground",
                                    children: h.dia.slice(0, 3),
                                  }),
                                  b.jsx("span", {
                                    className: h.closed
                                      ? "text-muted-foreground/70 italic"
                                      : "text-foreground font-medium",
                                    children: h.horas,
                                  }),
                                ],
                              },
                              p,
                            ),
                          ),
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        b.jsxs("h3", {
                          className:
                            "text-sm tracking-widest uppercase text-primary flex items-center gap-2",
                          children: [
                            b.jsx(S2, { className: "w-4 h-4" }),
                            " Contacto",
                          ],
                        }),
                        b.jsxs("a", {
                          href: p4,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-xl font-serif hover:text-primary transition-colors flex items-center gap-2",
                          children: [
                            b.jsx(cr, { className: "w-5 h-5 text-[#25D366]" }),
                            " ",
                            F0,
                          ],
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        b.jsxs("h3", {
                          className:
                            "text-sm tracking-widest uppercase text-primary flex items-center gap-2",
                          children: [
                            b.jsx(ev, { className: "w-4 h-4" }),
                            " Ubicación",
                          ],
                        }),
                        b.jsxs("p", {
                          className: "text-xl font-serif",
                          children: [
                            "Carrer Miquel Marquès, 12",
                            b.jsx("br", {}),
                            "07005 Palma de Mallorca",
                          ],
                        }),
                        b.jsxs("a", {
                          href: "https://maps.app.goo.gl/ZGCh5R4dLhkEUYnw9",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex items-center gap-2 text-sm text-primary hover:underline",
                          children: [
                            "Cómo llegar ",
                            b.jsx(Tf, { className: "w-4 h-4" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          b.jsx(Ga, { href: "#mapa" }),
        ],
      }),
      b.jsxs("section", {
        id: "mapa",
        className: "relative border-t border-white/5 bg-background",
        children: [
          b.jsxs("div", {
            className: "container mx-auto px-6 pt-20 pb-12 text-center",
            children: [
              b.jsx("p", {
                className:
                  "text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4",
                children: "Encuéntranos",
              }),
              b.jsxs("h2", {
                className: "text-3xl md:text-5xl font-serif mb-3",
                children: [
                  "Aquí está ",
                  b.jsx("span", {
                    className: "text-primary italic",
                    children: "la casa",
                  }),
                  ".",
                ],
              }),
              b.jsx("p", {
                className: "text-muted-foreground max-w-xl mx-auto",
                children: "Carrer Miquel Marquès, 12 · 07005 Palma de Mallorca",
              }),
            ],
          }),
          b.jsxs("div", {
            className:
              "relative h-[420px] md:h-[520px] w-full overflow-hidden border-y border-white/10",
            children: [
              b.jsx("iframe", {
                title: "Ubicación de Blessed Barber Studio en Google Maps",
                src: "https://maps.google.com/maps?q=39.5761625,2.657933&hl=es&z=17&output=embed",
                width: "100%",
                height: "100%",
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                className: "w-full h-full grayscale-[40%] contrast-110",
                style: {
                  border: 0,
                  filter:
                    "invert(0.92) hue-rotate(180deg) saturate(0.7) brightness(0.95)",
                },
              }),
              b.jsxs("a", {
                href: "https://maps.app.goo.gl/ZGCh5R4dLhkEUYnw9",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors shadow-xl shadow-black/50",
                children: [
                  b.jsx(ev, { className: "w-4 h-4" }),
                  " Abrir en Google Maps",
                ],
              }),
            ],
          }),
        ],
      }),
      null,
      b.jsx(d4, {
        open: s,
        onOpenChange: (val) => {
          r(val);
          if (!val) {
            setSelSvc(null);
            setStep(1);
          }
        },
        children: b.jsxs(XS, {
          className: "bg-card border-primary/20 max-w-lg p-0 overflow-hidden modal-booking-container",
          children: [
            b.jsx("div", {
              className: "bg-[#25D366]/10 px-6 py-5 border-b border-primary/10",
              children: b.jsx(KS, {
                children: b.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    b.jsx("div", {
                      className:
                        "w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0",
                      children: b.jsx(cr, { className: "w-5 h-5 text-white" }),
                    }),
                    b.jsxs("div", {
                      className: "min-w-0 flex-1 pr-12",
                      children: [
                        step === 2 &&
                          b.jsxs("button", {
                            onClick: () => setStep(1),
                            className:
                              "text-xs text-primary hover:underline flex items-center gap-1 mb-1 uppercase tracking-widest font-bold",
                            children: ["← Volver a servicios"],
                          }),
                        b.jsx(QS, {
                          className: "font-serif text-xl text-foreground truncate",
                          children:
                            step === 1
                              ? "Selecciona un servicio"
                              : "Elige tu barbero",
                        }),
                        b.jsx(ZS, {
                          className: "text-xs text-muted-foreground mt-0.5 truncate",
                          children:
                            step === 1
                              ? "Elige el servicio para tu reserva por WhatsApp."
                              : `Servicio: ${selSvc ? selSvc.name : ""} (${
                                  selSvc ? selSvc.price : ""
                                })`,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            b.jsx("div", {
              className: "max-h-[60vh] overflow-y-auto",
              children:
                step === 1
                  ? b.jsx("div", {
                      className: "px-2 py-2",
                      children: y4.map((h, p) =>
                        b.jsxs(
                          "button",
                          {
                            onClick: () => f(h),
                            className: "modal-booking-btn group",
                            children: [
                              b.jsxs("div", {
                                className:
                                  "flex items-center gap-3 min-w-0 flex-1",
                                children: [
                                  b.jsx("span", {
                                    className: "text-xl shrink-0",
                                    "aria-hidden": "true",
                                    children: h.emoji,
                                  }),
                                  b.jsxs("div", {
                                    className: "min-w-0",
                                    children: [
                                      b.jsx("div", {
                                        className:
                                          "font-serif text-base text-foreground group-hover:text-primary transition-colors truncate",
                                        children: h.name,
                                      }),
                                      b.jsx("div", {
                                        className:
                                          "text-[11px] uppercase tracking-wider text-muted-foreground",
                                        children: h.duration,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              b.jsx("div", {
                                className:
                                  "text-primary font-serif text-base shrink-0",
                                children: h.price,
                              }),
                            ],
                          },
                          p,
                        ),
                      ),
                    })
                  : b.jsx("div", {
                      className: "px-2 py-2",
                      children: ["Gus", "Deiby", "David"].map((barber, p) =>
                        b.jsxs(
                          "button",
                          {
                            onClick: () => handleBarberSelect(barber),
                            className: "modal-booking-btn group",
                            children: [
                              b.jsxs("div", {
                                className:
                                  "flex items-center gap-3 min-w-0 flex-1",
                                children: [
                                  b.jsx("span", {
                                    className:
                                      "text-xl shrink-0 transition-transform duration-300 group-hover:scale-110",
                                    "aria-hidden": "true",
                                    children: "💈",
                                  }),
                                  b.jsxs("div", {
                                    className: "min-w-0",
                                    children: [
                                      b.jsx("div", {
                                        className:
                                          "font-serif text-lg text-foreground group-hover:text-primary transition-colors truncate",
                                        children: barber,
                                      }),
                                      b.jsx("div", {
                                        className:
                                          "text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5",
                                        children:
                                          barber === "Gus"
                                            ? "Maestro Barbero"
                                            : "Barbero Especialista",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              b.jsx(tv, {
                                className:
                                  "w-4 h-4 text-primary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all",
                              }),
                            ],
                          },
                          p,
                        ),
                      ),
                    }),
            }),
            b.jsx("div", {
              className: "px-6 py-4 border-t border-white/10 text-center",
              children: b.jsxs("p", {
                className: "text-[11px] text-muted-foreground",
                children: [
                  "También puedes ",
                  b.jsx("a", {
                    href: lr,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-primary hover:underline",
                    children: "reservar cita online",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      b.jsx("footer", {
        className: "bg-background border-t border-white/10 py-16 pb-32 md:pb-16",
        children: b.jsxs("div", {
          className: "container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start",
          children: [
            b.jsxs("div", {
              className: "flex flex-col gap-4 text-center md:text-left",
              children: [
                b.jsx("h4", {
                  className: "text-white text-xs uppercase tracking-widest font-bold border-b border-white/10 pb-2 max-w-[150px] mx-auto md:mx-0",
                  children: "Secciones"
                }),
                b.jsxs("div", {
                  className: "flex flex-col gap-2.5 text-xs text-muted-foreground",
                  children: [
                    b.jsx("a", { href: "#filosofia", className: "hover:text-primary transition-colors", children: "Sobre nosotros" }),
                    b.jsx("a", { href: "#servicios", className: "hover:text-primary transition-colors", children: "Servicios" }),
                    b.jsx("a", { href: "#galeria", className: "hover:text-primary transition-colors", children: "Galería" }),
                    b.jsxs("a", {
                      href: lr,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-primary transition-colors",
                      children: "Reservar Online"
                    })
                  ]
                })
              ]
            }),
            b.jsxs("div", {
              className: "flex flex-col items-center text-center gap-4",
              children: [
                b.jsx("img", {
                  src: "./images/logo.png",
                  alt: "Blessed Barber Studio",
                  className: "h-20 w-20 object-contain rounded-full bg-[#f4ece0] p-2 mb-1",
                }),
                b.jsx("div", {
                  className: "text-primary font-serif text-2xl font-semibold",
                  children: "Blessed Barber Studio",
                }),
                b.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    b.jsx("a", {
                      href: "https://www.instagram.com/blessed.barberstudiooo?igsh=MXh2dTNvNDdhYWltNw==",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-muted-foreground hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10",
                      children: b.jsx(g2, { className: "w-4 h-4" }),
                    }),
                  ]
                }),
                b.jsxs("p", {
                  className: "text-[11px] text-muted-foreground/50 mt-2",
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " Blessed Barber Studio. Todos los derechos reservados.",
                  ]
                })
              ]
            }),
            b.jsxs("div", {
              className: "flex flex-col gap-4 text-center md:text-right md:items-end",
              children: [
                b.jsx("h4", {
                  className: "text-white text-xs uppercase tracking-widest font-bold border-b border-white/10 pb-2 max-w-[150px] mx-auto md:mr-0 md:ml-auto w-full",
                  children: "Soporte y Legal"
                }),
                b.jsxs("div", {
                  className: "flex flex-col gap-2.5 text-xs text-muted-foreground items-center md:items-end",
                  children: [
                    b.jsx("button", {
                      className: "hover:text-primary transition-colors cursor-pointer text-center md:text-right",
                      onClick: () => window.openLegalModal && window.openLegalModal("quienes-somos"),
                      children: "¿Quiénes somos?"
                    }),
                    b.jsx("button", {
                      className: "hover:text-primary transition-colors cursor-pointer text-center md:text-right",
                      onClick: () => window.openLegalModal && window.openLegalModal("faq"),
                      children: "Preguntas Frecuentes"
                    }),
                    b.jsx("button", {
                      className: "hover:text-primary transition-colors cursor-pointer text-center md:text-right",
                      onClick: () => window.openLegalModal && window.openLegalModal("aviso-legal"),
                      children: "Aviso Legal & Propiedad"
                    })
                  ]
                })
              ]
            })
          ],
        }),
      }),
    ],
  });
}
const w4 = new iA();
function T4() {
  return b.jsx(sA, {
    client: w4,
    children: b.jsxs(JR, { children: [b.jsx(S4, {}), b.jsx(yC, {})] }),
  });
}
OE.createRoot(document.getElementById("root")).render(b.jsx(T4, {}));
