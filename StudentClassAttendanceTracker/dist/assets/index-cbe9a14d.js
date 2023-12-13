function za(g, I) {
  for (var C = 0; C < I.length; C++) {
    const A = I[C];
    if (typeof A != "string" && !Array.isArray(A)) {
      for (const l in A)
        if (l !== "default" && !(l in g)) {
          const e = Object.getOwnPropertyDescriptor(A, l);
          e &&
            Object.defineProperty(
              g,
              l,
              e.get ? e : { enumerable: !0, get: () => A[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(g, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const I = document.createElement("link").relList;
  if (I && I.supports && I.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) A(l);
  new MutationObserver((l) => {
    for (const e of l)
      if (e.type === "childList")
        for (const n of e.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && A(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function C(l) {
    const e = {};
    return (
      l.integrity && (e.integrity = l.integrity),
      l.referrerPolicy && (e.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (e.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (e.credentials = "omit")
        : (e.credentials = "same-origin"),
      e
    );
  }
  function A(l) {
    if (l.ep) return;
    l.ep = !0;
    const e = C(l);
    fetch(l.href, e);
  }
})();
function Qa(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default")
    ? g.default
    : g;
}
var SZ = { exports: {} },
  Ke = {},
  hZ = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cl = Symbol.for("react.element"),
  Ua = Symbol.for("react.portal"),
  xa = Symbol.for("react.fragment"),
  Ea = Symbol.for("react.strict_mode"),
  Ma = Symbol.for("react.profiler"),
  La = Symbol.for("react.provider"),
  Da = Symbol.for("react.context"),
  Ta = Symbol.for("react.forward_ref"),
  ja = Symbol.for("react.suspense"),
  Pa = Symbol.for("react.memo"),
  Oa = Symbol.for("react.lazy"),
  Ro = Symbol.iterator;
function qa(g) {
  return g === null || typeof g != "object"
    ? null
    : ((g = (Ro && g[Ro]) || g["@@iterator"]),
      typeof g == "function" ? g : null);
}
var XZ = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pZ = Object.assign,
  RZ = {};
function AA(g, I, C) {
  (this.props = g),
    (this.context = I),
    (this.refs = RZ),
    (this.updater = C || XZ);
}
AA.prototype.isReactComponent = {};
AA.prototype.setState = function (g, I) {
  if (typeof g != "object" && typeof g != "function" && g != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, g, I, "setState");
};
AA.prototype.forceUpdate = function (g) {
  this.updater.enqueueForceUpdate(this, g, "forceUpdate");
};
function JZ() {}
JZ.prototype = AA.prototype;
function oc(g, I, C) {
  (this.props = g),
    (this.context = I),
    (this.refs = RZ),
    (this.updater = C || XZ);
}
var tc = (oc.prototype = new JZ());
tc.constructor = oc;
pZ(tc, AA.prototype);
tc.isPureReactComponent = !0;
var Jo = Array.isArray,
  YZ = Object.prototype.hasOwnProperty,
  Zc = { current: null },
  kZ = { key: !0, ref: !0, __self: !0, __source: !0 };
function HZ(g, I, C) {
  var A,
    l = {},
    e = null,
    n = null;
  if (I != null)
    for (A in (I.ref !== void 0 && (n = I.ref),
    I.key !== void 0 && (e = "" + I.key),
    I))
      YZ.call(I, A) && !kZ.hasOwnProperty(A) && (l[A] = I[A]);
  var d = arguments.length - 2;
  if (d === 1) l.children = C;
  else if (1 < d) {
    for (var c = Array(d), o = 0; o < d; o++) c[o] = arguments[o + 2];
    l.children = c;
  }
  if (g && g.defaultProps)
    for (A in ((d = g.defaultProps), d)) l[A] === void 0 && (l[A] = d[A]);
  return {
    $$typeof: cl,
    type: g,
    key: e,
    ref: n,
    props: l,
    _owner: Zc.current,
  };
}
function _a(g, I) {
  return {
    $$typeof: cl,
    type: g.type,
    key: I,
    ref: g.ref,
    props: g.props,
    _owner: g._owner,
  };
}
function mc(g) {
  return typeof g == "object" && g !== null && g.$$typeof === cl;
}
function $a(g) {
  var I = { "=": "=0", ":": "=2" };
  return (
    "$" +
    g.replace(/[=:]/g, function (C) {
      return I[C];
    })
  );
}
var Yo = /\/+/g;
function hn(g, I) {
  return typeof g == "object" && g !== null && g.key != null
    ? $a("" + g.key)
    : I.toString(36);
}
function zl(g, I, C, A, l) {
  var e = typeof g;
  (e === "undefined" || e === "boolean") && (g = null);
  var n = !1;
  if (g === null) n = !0;
  else
    switch (e) {
      case "string":
      case "number":
        n = !0;
        break;
      case "object":
        switch (g.$$typeof) {
          case cl:
          case Ua:
            n = !0;
        }
    }
  if (n)
    return (
      (n = g),
      (l = l(n)),
      (g = A === "" ? "." + hn(n, 0) : A),
      Jo(l)
        ? ((C = ""),
          g != null && (C = g.replace(Yo, "$&/") + "/"),
          zl(l, I, C, "", function (o) {
            return o;
          }))
        : l != null &&
          (mc(l) &&
            (l = _a(
              l,
              C +
                (!l.key || (n && n.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Yo, "$&/") + "/") +
                g
            )),
          I.push(l)),
      1
    );
  if (((n = 0), (A = A === "" ? "." : A + ":"), Jo(g)))
    for (var d = 0; d < g.length; d++) {
      e = g[d];
      var c = A + hn(e, d);
      n += zl(e, I, C, c, l);
    }
  else if (((c = qa(g)), typeof c == "function"))
    for (g = c.call(g), d = 0; !(e = g.next()).done; )
      (e = e.value), (c = A + hn(e, d++)), (n += zl(e, I, C, c, l));
  else if (e === "object")
    throw (
      ((I = String(g)),
      Error(
        "Objects are not valid as a React child (found: " +
          (I === "[object Object]"
            ? "object with keys {" + Object.keys(g).join(", ") + "}"
            : I) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return n;
}
function yl(g, I, C) {
  if (g == null) return g;
  var A = [],
    l = 0;
  return (
    zl(g, A, "", "", function (e) {
      return I.call(C, e, l++);
    }),
    A
  );
}
function gi(g) {
  if (g._status === -1) {
    var I = g._result;
    (I = I()),
      I.then(
        function (C) {
          (g._status === 0 || g._status === -1) &&
            ((g._status = 1), (g._result = C));
        },
        function (C) {
          (g._status === 0 || g._status === -1) &&
            ((g._status = 2), (g._result = C));
        }
      ),
      g._status === -1 && ((g._status = 0), (g._result = I));
  }
  if (g._status === 1) return g._result.default;
  throw g._result;
}
var hg = { current: null },
  Ql = { transition: null },
  Ii = {
    ReactCurrentDispatcher: hg,
    ReactCurrentBatchConfig: Ql,
    ReactCurrentOwner: Zc,
  };
N.Children = {
  map: yl,
  forEach: function (g, I, C) {
    yl(
      g,
      function () {
        I.apply(this, arguments);
      },
      C
    );
  },
  count: function (g) {
    var I = 0;
    return (
      yl(g, function () {
        I++;
      }),
      I
    );
  },
  toArray: function (g) {
    return (
      yl(g, function (I) {
        return I;
      }) || []
    );
  },
  only: function (g) {
    if (!mc(g))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return g;
  },
};
N.Component = AA;
N.Fragment = xa;
N.Profiler = Ma;
N.PureComponent = oc;
N.StrictMode = Ea;
N.Suspense = ja;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ii;
N.cloneElement = function (g, I, C) {
  if (g == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        g +
        "."
    );
  var A = pZ({}, g.props),
    l = g.key,
    e = g.ref,
    n = g._owner;
  if (I != null) {
    if (
      (I.ref !== void 0 && ((e = I.ref), (n = Zc.current)),
      I.key !== void 0 && (l = "" + I.key),
      g.type && g.type.defaultProps)
    )
      var d = g.type.defaultProps;
    for (c in I)
      YZ.call(I, c) &&
        !kZ.hasOwnProperty(c) &&
        (A[c] = I[c] === void 0 && d !== void 0 ? d[c] : I[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) A.children = C;
  else if (1 < c) {
    d = Array(c);
    for (var o = 0; o < c; o++) d[o] = arguments[o + 2];
    A.children = d;
  }
  return { $$typeof: cl, type: g.type, key: l, ref: e, props: A, _owner: n };
};
N.createContext = function (g) {
  return (
    (g = {
      $$typeof: Da,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (g.Provider = { $$typeof: La, _context: g }),
    (g.Consumer = g)
  );
};
N.createElement = HZ;
N.createFactory = function (g) {
  var I = HZ.bind(null, g);
  return (I.type = g), I;
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (g) {
  return { $$typeof: Ta, render: g };
};
N.isValidElement = mc;
N.lazy = function (g) {
  return { $$typeof: Oa, _payload: { _status: -1, _result: g }, _init: gi };
};
N.memo = function (g, I) {
  return { $$typeof: Pa, type: g, compare: I === void 0 ? null : I };
};
N.startTransition = function (g) {
  var I = Ql.transition;
  Ql.transition = {};
  try {
    g();
  } finally {
    Ql.transition = I;
  }
};
N.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
N.useCallback = function (g, I) {
  return hg.current.useCallback(g, I);
};
N.useContext = function (g) {
  return hg.current.useContext(g);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (g) {
  return hg.current.useDeferredValue(g);
};
N.useEffect = function (g, I) {
  return hg.current.useEffect(g, I);
};
N.useId = function () {
  return hg.current.useId();
};
N.useImperativeHandle = function (g, I, C) {
  return hg.current.useImperativeHandle(g, I, C);
};
N.useInsertionEffect = function (g, I) {
  return hg.current.useInsertionEffect(g, I);
};
N.useLayoutEffect = function (g, I) {
  return hg.current.useLayoutEffect(g, I);
};
N.useMemo = function (g, I) {
  return hg.current.useMemo(g, I);
};
N.useReducer = function (g, I, C) {
  return hg.current.useReducer(g, I, C);
};
N.useRef = function (g) {
  return hg.current.useRef(g);
};
N.useState = function (g) {
  return hg.current.useState(g);
};
N.useSyncExternalStore = function (g, I, C) {
  return hg.current.useSyncExternalStore(g, I, C);
};
N.useTransition = function () {
  return hg.current.useTransition();
};
N.version = "18.2.0";
hZ.exports = N;
var y = hZ.exports;
const KZ = Qa(y),
  ld = za({ __proto__: null, default: KZ }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ci = y,
  Ai = Symbol.for("react.element"),
  li = Symbol.for("react.fragment"),
  ei = Object.prototype.hasOwnProperty,
  ni = Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  di = { key: !0, ref: !0, __self: !0, __source: !0 };
function vZ(g, I, C) {
  var A,
    l = {},
    e = null,
    n = null;
  C !== void 0 && (e = "" + C),
    I.key !== void 0 && (e = "" + I.key),
    I.ref !== void 0 && (n = I.ref);
  for (A in I) ei.call(I, A) && !di.hasOwnProperty(A) && (l[A] = I[A]);
  if (g && g.defaultProps)
    for (A in ((I = g.defaultProps), I)) l[A] === void 0 && (l[A] = I[A]);
  return {
    $$typeof: Ai,
    type: g,
    key: e,
    ref: n,
    props: l,
    _owner: ni.current,
  };
}
Ke.Fragment = li;
Ke.jsx = vZ;
Ke.jsxs = vZ;
SZ.exports = Ke;
var S = SZ.exports,
  ed = {},
  NZ = { exports: {} },
  zg = {},
  FZ = { exports: {} },
  wZ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (g) {
  function I(Y, K) {
    var v = Y.length;
    Y.push(K);
    g: for (; 0 < v; ) {
      var Cg = (v - 1) >>> 1,
        tg = Y[Cg];
      if (0 < l(tg, K)) (Y[Cg] = K), (Y[v] = tg), (v = Cg);
      else break g;
    }
  }
  function C(Y) {
    return Y.length === 0 ? null : Y[0];
  }
  function A(Y) {
    if (Y.length === 0) return null;
    var K = Y[0],
      v = Y.pop();
    if (v !== K) {
      Y[0] = v;
      g: for (var Cg = 0, tg = Y.length, Bl = tg >>> 1; Cg < Bl; ) {
        var gC = 2 * (Cg + 1) - 1,
          Sn = Y[gC],
          IC = gC + 1,
          rl = Y[IC];
        if (0 > l(Sn, v))
          IC < tg && 0 > l(rl, Sn)
            ? ((Y[Cg] = rl), (Y[IC] = v), (Cg = IC))
            : ((Y[Cg] = Sn), (Y[gC] = v), (Cg = gC));
        else if (IC < tg && 0 > l(rl, v)) (Y[Cg] = rl), (Y[IC] = v), (Cg = IC);
        else break g;
      }
    }
    return K;
  }
  function l(Y, K) {
    var v = Y.sortIndex - K.sortIndex;
    return v !== 0 ? v : Y.id - K.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var e = performance;
    g.unstable_now = function () {
      return e.now();
    };
  } else {
    var n = Date,
      d = n.now();
    g.unstable_now = function () {
      return n.now() - d;
    };
  }
  var c = [],
    o = [],
    t = 1,
    m = null,
    G = 3,
    s = !1,
    i = !1,
    b = !1,
    V = typeof setTimeout == "function" ? setTimeout : null,
    a = typeof clearTimeout == "function" ? clearTimeout : null,
    Z = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function u(Y) {
    for (var K = C(o); K !== null; ) {
      if (K.callback === null) A(o);
      else if (K.startTime <= Y)
        A(o), (K.sortIndex = K.expirationTime), I(c, K);
      else break;
      K = C(o);
    }
  }
  function r(Y) {
    if (((b = !1), u(Y), !i))
      if (C(c) !== null) (i = !0), Wn(X);
      else {
        var K = C(o);
        K !== null && Vn(r, K.startTime - Y);
      }
  }
  function X(Y, K) {
    (i = !1), b && ((b = !1), a(p), (p = -1)), (s = !0);
    var v = G;
    try {
      for (
        u(K), m = C(c);
        m !== null && (!(m.expirationTime > K) || (Y && !T()));

      ) {
        var Cg = m.callback;
        if (typeof Cg == "function") {
          (m.callback = null), (G = m.priorityLevel);
          var tg = Cg(m.expirationTime <= K);
          (K = g.unstable_now()),
            typeof tg == "function" ? (m.callback = tg) : m === C(c) && A(c),
            u(K);
        } else A(c);
        m = C(c);
      }
      if (m !== null) var Bl = !0;
      else {
        var gC = C(o);
        gC !== null && Vn(r, gC.startTime - K), (Bl = !1);
      }
      return Bl;
    } finally {
      (m = null), (G = v), (s = !1);
    }
  }
  var R = !1,
    B = null,
    p = -1,
    H = 5,
    k = -1;
  function T() {
    return !(g.unstable_now() - k < H);
  }
  function CI() {
    if (B !== null) {
      var Y = g.unstable_now();
      k = Y;
      var K = !0;
      try {
        K = B(!0, Y);
      } finally {
        K ? JI() : ((R = !1), (B = null));
      }
    } else R = !1;
  }
  var JI;
  if (typeof Z == "function")
    JI = function () {
      Z(CI);
    };
  else if (typeof MessageChannel < "u") {
    var uC = new MessageChannel(),
      fa = uC.port2;
    (uC.port1.onmessage = CI),
      (JI = function () {
        fa.postMessage(null);
      });
  } else
    JI = function () {
      V(CI, 0);
    };
  function Wn(Y) {
    (B = Y), R || ((R = !0), JI());
  }
  function Vn(Y, K) {
    p = V(function () {
      Y(g.unstable_now());
    }, K);
  }
  (g.unstable_IdlePriority = 5),
    (g.unstable_ImmediatePriority = 1),
    (g.unstable_LowPriority = 4),
    (g.unstable_NormalPriority = 3),
    (g.unstable_Profiling = null),
    (g.unstable_UserBlockingPriority = 2),
    (g.unstable_cancelCallback = function (Y) {
      Y.callback = null;
    }),
    (g.unstable_continueExecution = function () {
      i || s || ((i = !0), Wn(X));
    }),
    (g.unstable_forceFrameRate = function (Y) {
      0 > Y || 125 < Y
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < Y ? Math.floor(1e3 / Y) : 5);
    }),
    (g.unstable_getCurrentPriorityLevel = function () {
      return G;
    }),
    (g.unstable_getFirstCallbackNode = function () {
      return C(c);
    }),
    (g.unstable_next = function (Y) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = G;
      }
      var v = G;
      G = K;
      try {
        return Y();
      } finally {
        G = v;
      }
    }),
    (g.unstable_pauseExecution = function () {}),
    (g.unstable_requestPaint = function () {}),
    (g.unstable_runWithPriority = function (Y, K) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var v = G;
      G = Y;
      try {
        return K();
      } finally {
        G = v;
      }
    }),
    (g.unstable_scheduleCallback = function (Y, K, v) {
      var Cg = g.unstable_now();
      switch (
        (typeof v == "object" && v !== null
          ? ((v = v.delay), (v = typeof v == "number" && 0 < v ? Cg + v : Cg))
          : (v = Cg),
        Y)
      ) {
        case 1:
          var tg = -1;
          break;
        case 2:
          tg = 250;
          break;
        case 5:
          tg = 1073741823;
          break;
        case 4:
          tg = 1e4;
          break;
        default:
          tg = 5e3;
      }
      return (
        (tg = v + tg),
        (Y = {
          id: t++,
          callback: K,
          priorityLevel: Y,
          startTime: v,
          expirationTime: tg,
          sortIndex: -1,
        }),
        v > Cg
          ? ((Y.sortIndex = v),
            I(o, Y),
            C(c) === null &&
              Y === C(o) &&
              (b ? (a(p), (p = -1)) : (b = !0), Vn(r, v - Cg)))
          : ((Y.sortIndex = tg), I(c, Y), i || s || ((i = !0), Wn(X))),
        Y
      );
    }),
    (g.unstable_shouldYield = T),
    (g.unstable_wrapCallback = function (Y) {
      var K = G;
      return function () {
        var v = G;
        G = K;
        try {
          return Y.apply(this, arguments);
        } finally {
          G = v;
        }
      };
    });
})(wZ);
FZ.exports = wZ;
var ci = FZ.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fZ = y,
  fg = ci;
function h(g) {
  for (
    var I = "https://reactjs.org/docs/error-decoder.html?invariant=" + g, C = 1;
    C < arguments.length;
    C++
  )
    I += "&args[]=" + encodeURIComponent(arguments[C]);
  return (
    "Minified React error #" +
    g +
    "; visit " +
    I +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var zZ = new Set(),
  fA = {};
function iC(g, I) {
  DC(g, I), DC(g + "Capture", I);
}
function DC(g, I) {
  for (fA[g] = I, g = 0; g < I.length; g++) zZ.add(I[g]);
}
var yI = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  nd = Object.prototype.hasOwnProperty,
  oi =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ko = {},
  Ho = {};
function ti(g) {
  return nd.call(Ho, g)
    ? !0
    : nd.call(ko, g)
    ? !1
    : oi.test(g)
    ? (Ho[g] = !0)
    : ((ko[g] = !0), !1);
}
function Zi(g, I, C, A) {
  if (C !== null && C.type === 0) return !1;
  switch (typeof I) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return A
        ? !1
        : C !== null
        ? !C.acceptsBooleans
        : ((g = g.toLowerCase().slice(0, 5)), g !== "data-" && g !== "aria-");
    default:
      return !1;
  }
}
function mi(g, I, C, A) {
  if (I === null || typeof I > "u" || Zi(g, I, C, A)) return !0;
  if (A) return !1;
  if (C !== null)
    switch (C.type) {
      case 3:
        return !I;
      case 4:
        return I === !1;
      case 5:
        return isNaN(I);
      case 6:
        return isNaN(I) || 1 > I;
    }
  return !1;
}
function Xg(g, I, C, A, l, e, n) {
  (this.acceptsBooleans = I === 2 || I === 3 || I === 4),
    (this.attributeName = A),
    (this.attributeNamespace = l),
    (this.mustUseProperty = C),
    (this.propertyName = g),
    (this.type = I),
    (this.sanitizeURL = e),
    (this.removeEmptyString = n);
}
var ug = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (g) {
    ug[g] = new Xg(g, 0, !1, g, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (g) {
  var I = g[0];
  ug[I] = new Xg(I, 1, !1, g[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (g) {
  ug[g] = new Xg(g, 2, !1, g.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (g) {
  ug[g] = new Xg(g, 2, !1, g, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (g) {
    ug[g] = new Xg(g, 3, !1, g.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (g) {
  ug[g] = new Xg(g, 3, !0, g, null, !1, !1);
});
["capture", "download"].forEach(function (g) {
  ug[g] = new Xg(g, 4, !1, g, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (g) {
  ug[g] = new Xg(g, 6, !1, g, null, !1, !1);
});
["rowSpan", "start"].forEach(function (g) {
  ug[g] = new Xg(g, 5, !1, g.toLowerCase(), null, !1, !1);
});
var Gc = /[\-:]([a-z])/g;
function ac(g) {
  return g[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (g) {
    var I = g.replace(Gc, ac);
    ug[I] = new Xg(I, 1, !1, g, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (g) {
    var I = g.replace(Gc, ac);
    ug[I] = new Xg(I, 1, !1, g, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (g) {
  var I = g.replace(Gc, ac);
  ug[I] = new Xg(I, 1, !1, g, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (g) {
  ug[g] = new Xg(g, 1, !1, g.toLowerCase(), null, !1, !1);
});
ug.xlinkHref = new Xg(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (g) {
  ug[g] = new Xg(g, 1, !1, g.toLowerCase(), null, !0, !0);
});
function ic(g, I, C, A) {
  var l = ug.hasOwnProperty(I) ? ug[I] : null;
  (l !== null
    ? l.type !== 0
    : A ||
      !(2 < I.length) ||
      (I[0] !== "o" && I[0] !== "O") ||
      (I[1] !== "n" && I[1] !== "N")) &&
    (mi(I, C, l, A) && (C = null),
    A || l === null
      ? ti(I) && (C === null ? g.removeAttribute(I) : g.setAttribute(I, "" + C))
      : l.mustUseProperty
      ? (g[l.propertyName] = C === null ? (l.type === 3 ? !1 : "") : C)
      : ((I = l.attributeName),
        (A = l.attributeNamespace),
        C === null
          ? g.removeAttribute(I)
          : ((l = l.type),
            (C = l === 3 || (l === 4 && C === !0) ? "" : "" + C),
            A ? g.setAttributeNS(A, I, C) : g.setAttribute(I, C))));
}
var XI = fZ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wl = Symbol.for("react.element"),
  XC = Symbol.for("react.portal"),
  pC = Symbol.for("react.fragment"),
  bc = Symbol.for("react.strict_mode"),
  dd = Symbol.for("react.profiler"),
  QZ = Symbol.for("react.provider"),
  UZ = Symbol.for("react.context"),
  uc = Symbol.for("react.forward_ref"),
  cd = Symbol.for("react.suspense"),
  od = Symbol.for("react.suspense_list"),
  sc = Symbol.for("react.memo"),
  HI = Symbol.for("react.lazy"),
  xZ = Symbol.for("react.offscreen"),
  Ko = Symbol.iterator;
function GA(g) {
  return g === null || typeof g != "object"
    ? null
    : ((g = (Ko && g[Ko]) || g["@@iterator"]),
      typeof g == "function" ? g : null);
}
var _ = Object.assign,
  Xn;
function SA(g) {
  if (Xn === void 0)
    try {
      throw Error();
    } catch (C) {
      var I = C.stack.trim().match(/\n( *(at )?)/);
      Xn = (I && I[1]) || "";
    }
  return (
    `
` +
    Xn +
    g
  );
}
var pn = !1;
function Rn(g, I) {
  if (!g || pn) return "";
  pn = !0;
  var C = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (I)
      if (
        ((I = function () {
          throw Error();
        }),
        Object.defineProperty(I.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(I, []);
        } catch (o) {
          var A = o;
        }
        Reflect.construct(g, [], I);
      } else {
        try {
          I.call();
        } catch (o) {
          A = o;
        }
        g.call(I.prototype);
      }
    else {
      try {
        throw Error();
      } catch (o) {
        A = o;
      }
      g();
    }
  } catch (o) {
    if (o && A && typeof o.stack == "string") {
      for (
        var l = o.stack.split(`
`),
          e = A.stack.split(`
`),
          n = l.length - 1,
          d = e.length - 1;
        1 <= n && 0 <= d && l[n] !== e[d];

      )
        d--;
      for (; 1 <= n && 0 <= d; n--, d--)
        if (l[n] !== e[d]) {
          if (n !== 1 || d !== 1)
            do
              if ((n--, d--, 0 > d || l[n] !== e[d])) {
                var c =
                  `
` + l[n].replace(" at new ", " at ");
                return (
                  g.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", g.displayName)),
                  c
                );
              }
            while (1 <= n && 0 <= d);
          break;
        }
    }
  } finally {
    (pn = !1), (Error.prepareStackTrace = C);
  }
  return (g = g ? g.displayName || g.name : "") ? SA(g) : "";
}
function Gi(g) {
  switch (g.tag) {
    case 5:
      return SA(g.type);
    case 16:
      return SA("Lazy");
    case 13:
      return SA("Suspense");
    case 19:
      return SA("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (g = Rn(g.type, !1)), g;
    case 11:
      return (g = Rn(g.type.render, !1)), g;
    case 1:
      return (g = Rn(g.type, !0)), g;
    default:
      return "";
  }
}
function td(g) {
  if (g == null) return null;
  if (typeof g == "function") return g.displayName || g.name || null;
  if (typeof g == "string") return g;
  switch (g) {
    case pC:
      return "Fragment";
    case XC:
      return "Portal";
    case dd:
      return "Profiler";
    case bc:
      return "StrictMode";
    case cd:
      return "Suspense";
    case od:
      return "SuspenseList";
  }
  if (typeof g == "object")
    switch (g.$$typeof) {
      case UZ:
        return (g.displayName || "Context") + ".Consumer";
      case QZ:
        return (g._context.displayName || "Context") + ".Provider";
      case uc:
        var I = g.render;
        return (
          (g = g.displayName),
          g ||
            ((g = I.displayName || I.name || ""),
            (g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef")),
          g
        );
      case sc:
        return (
          (I = g.displayName || null), I !== null ? I : td(g.type) || "Memo"
        );
      case HI:
        (I = g._payload), (g = g._init);
        try {
          return td(g(I));
        } catch {}
    }
  return null;
}
function ai(g) {
  var I = g.type;
  switch (g.tag) {
    case 24:
      return "Cache";
    case 9:
      return (I.displayName || "Context") + ".Consumer";
    case 10:
      return (I._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (g = I.render),
        (g = g.displayName || g.name || ""),
        I.displayName || (g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return I;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return td(I);
    case 8:
      return I === bc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof I == "function") return I.displayName || I.name || null;
      if (typeof I == "string") return I;
  }
  return null;
}
function PI(g) {
  switch (typeof g) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return g;
    case "object":
      return g;
    default:
      return "";
  }
}
function EZ(g) {
  var I = g.type;
  return (
    (g = g.nodeName) &&
    g.toLowerCase() === "input" &&
    (I === "checkbox" || I === "radio")
  );
}
function ii(g) {
  var I = EZ(g) ? "checked" : "value",
    C = Object.getOwnPropertyDescriptor(g.constructor.prototype, I),
    A = "" + g[I];
  if (
    !g.hasOwnProperty(I) &&
    typeof C < "u" &&
    typeof C.get == "function" &&
    typeof C.set == "function"
  ) {
    var l = C.get,
      e = C.set;
    return (
      Object.defineProperty(g, I, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (n) {
          (A = "" + n), e.call(this, n);
        },
      }),
      Object.defineProperty(g, I, { enumerable: C.enumerable }),
      {
        getValue: function () {
          return A;
        },
        setValue: function (n) {
          A = "" + n;
        },
        stopTracking: function () {
          (g._valueTracker = null), delete g[I];
        },
      }
    );
  }
}
function Vl(g) {
  g._valueTracker || (g._valueTracker = ii(g));
}
function MZ(g) {
  if (!g) return !1;
  var I = g._valueTracker;
  if (!I) return !0;
  var C = I.getValue(),
    A = "";
  return (
    g && (A = EZ(g) ? (g.checked ? "true" : "false") : g.value),
    (g = A),
    g !== C ? (I.setValue(g), !0) : !1
  );
}
function Ae(g) {
  if (((g = g || (typeof document < "u" ? document : void 0)), typeof g > "u"))
    return null;
  try {
    return g.activeElement || g.body;
  } catch {
    return g.body;
  }
}
function Zd(g, I) {
  var C = I.checked;
  return _({}, I, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: C ?? g._wrapperState.initialChecked,
  });
}
function vo(g, I) {
  var C = I.defaultValue == null ? "" : I.defaultValue,
    A = I.checked != null ? I.checked : I.defaultChecked;
  (C = PI(I.value != null ? I.value : C)),
    (g._wrapperState = {
      initialChecked: A,
      initialValue: C,
      controlled:
        I.type === "checkbox" || I.type === "radio"
          ? I.checked != null
          : I.value != null,
    });
}
function LZ(g, I) {
  (I = I.checked), I != null && ic(g, "checked", I, !1);
}
function md(g, I) {
  LZ(g, I);
  var C = PI(I.value),
    A = I.type;
  if (C != null)
    A === "number"
      ? ((C === 0 && g.value === "") || g.value != C) && (g.value = "" + C)
      : g.value !== "" + C && (g.value = "" + C);
  else if (A === "submit" || A === "reset") {
    g.removeAttribute("value");
    return;
  }
  I.hasOwnProperty("value")
    ? Gd(g, I.type, C)
    : I.hasOwnProperty("defaultValue") && Gd(g, I.type, PI(I.defaultValue)),
    I.checked == null &&
      I.defaultChecked != null &&
      (g.defaultChecked = !!I.defaultChecked);
}
function No(g, I, C) {
  if (I.hasOwnProperty("value") || I.hasOwnProperty("defaultValue")) {
    var A = I.type;
    if (
      !(
        (A !== "submit" && A !== "reset") ||
        (I.value !== void 0 && I.value !== null)
      )
    )
      return;
    (I = "" + g._wrapperState.initialValue),
      C || I === g.value || (g.value = I),
      (g.defaultValue = I);
  }
  (C = g.name),
    C !== "" && (g.name = ""),
    (g.defaultChecked = !!g._wrapperState.initialChecked),
    C !== "" && (g.name = C);
}
function Gd(g, I, C) {
  (I !== "number" || Ae(g.ownerDocument) !== g) &&
    (C == null
      ? (g.defaultValue = "" + g._wrapperState.initialValue)
      : g.defaultValue !== "" + C && (g.defaultValue = "" + C));
}
var hA = Array.isArray;
function fC(g, I, C, A) {
  if (((g = g.options), I)) {
    I = {};
    for (var l = 0; l < C.length; l++) I["$" + C[l]] = !0;
    for (C = 0; C < g.length; C++)
      (l = I.hasOwnProperty("$" + g[C].value)),
        g[C].selected !== l && (g[C].selected = l),
        l && A && (g[C].defaultSelected = !0);
  } else {
    for (C = "" + PI(C), I = null, l = 0; l < g.length; l++) {
      if (g[l].value === C) {
        (g[l].selected = !0), A && (g[l].defaultSelected = !0);
        return;
      }
      I !== null || g[l].disabled || (I = g[l]);
    }
    I !== null && (I.selected = !0);
  }
}
function ad(g, I) {
  if (I.dangerouslySetInnerHTML != null) throw Error(h(91));
  return _({}, I, {
    value: void 0,
    defaultValue: void 0,
    children: "" + g._wrapperState.initialValue,
  });
}
function Fo(g, I) {
  var C = I.value;
  if (C == null) {
    if (((C = I.children), (I = I.defaultValue), C != null)) {
      if (I != null) throw Error(h(92));
      if (hA(C)) {
        if (1 < C.length) throw Error(h(93));
        C = C[0];
      }
      I = C;
    }
    I == null && (I = ""), (C = I);
  }
  g._wrapperState = { initialValue: PI(C) };
}
function DZ(g, I) {
  var C = PI(I.value),
    A = PI(I.defaultValue);
  C != null &&
    ((C = "" + C),
    C !== g.value && (g.value = C),
    I.defaultValue == null && g.defaultValue !== C && (g.defaultValue = C)),
    A != null && (g.defaultValue = "" + A);
}
function wo(g) {
  var I = g.textContent;
  I === g._wrapperState.initialValue && I !== "" && I !== null && (g.value = I);
}
function TZ(g) {
  switch (g) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function id(g, I) {
  return g == null || g === "http://www.w3.org/1999/xhtml"
    ? TZ(I)
    : g === "http://www.w3.org/2000/svg" && I === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : g;
}
var Sl,
  jZ = (function (g) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (I, C, A, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return g(I, C, A, l);
          });
        }
      : g;
  })(function (g, I) {
    if (g.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in g)
      g.innerHTML = I;
    else {
      for (
        Sl = Sl || document.createElement("div"),
          Sl.innerHTML = "<svg>" + I.valueOf().toString() + "</svg>",
          I = Sl.firstChild;
        g.firstChild;

      )
        g.removeChild(g.firstChild);
      for (; I.firstChild; ) g.appendChild(I.firstChild);
    }
  });
function zA(g, I) {
  if (I) {
    var C = g.firstChild;
    if (C && C === g.lastChild && C.nodeType === 3) {
      C.nodeValue = I;
      return;
    }
  }
  g.textContent = I;
}
var RA = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  bi = ["Webkit", "ms", "Moz", "O"];
Object.keys(RA).forEach(function (g) {
  bi.forEach(function (I) {
    (I = I + g.charAt(0).toUpperCase() + g.substring(1)), (RA[I] = RA[g]);
  });
});
function PZ(g, I, C) {
  return I == null || typeof I == "boolean" || I === ""
    ? ""
    : C || typeof I != "number" || I === 0 || (RA.hasOwnProperty(g) && RA[g])
    ? ("" + I).trim()
    : I + "px";
}
function OZ(g, I) {
  g = g.style;
  for (var C in I)
    if (I.hasOwnProperty(C)) {
      var A = C.indexOf("--") === 0,
        l = PZ(C, I[C], A);
      C === "float" && (C = "cssFloat"), A ? g.setProperty(C, l) : (g[C] = l);
    }
}
var ui = _(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function bd(g, I) {
  if (I) {
    if (ui[g] && (I.children != null || I.dangerouslySetInnerHTML != null))
      throw Error(h(137, g));
    if (I.dangerouslySetInnerHTML != null) {
      if (I.children != null) throw Error(h(60));
      if (
        typeof I.dangerouslySetInnerHTML != "object" ||
        !("__html" in I.dangerouslySetInnerHTML)
      )
        throw Error(h(61));
    }
    if (I.style != null && typeof I.style != "object") throw Error(h(62));
  }
}
function ud(g, I) {
  if (g.indexOf("-") === -1) return typeof I.is == "string";
  switch (g) {
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
var sd = null;
function Bc(g) {
  return (
    (g = g.target || g.srcElement || window),
    g.correspondingUseElement && (g = g.correspondingUseElement),
    g.nodeType === 3 ? g.parentNode : g
  );
}
var Bd = null,
  zC = null,
  QC = null;
function fo(g) {
  if ((g = Zl(g))) {
    if (typeof Bd != "function") throw Error(h(280));
    var I = g.stateNode;
    I && ((I = fe(I)), Bd(g.stateNode, g.type, I));
  }
}
function qZ(g) {
  zC ? (QC ? QC.push(g) : (QC = [g])) : (zC = g);
}
function _Z() {
  if (zC) {
    var g = zC,
      I = QC;
    if (((QC = zC = null), fo(g), I)) for (g = 0; g < I.length; g++) fo(I[g]);
  }
}
function $Z(g, I) {
  return g(I);
}
function gm() {}
var Jn = !1;
function Im(g, I, C) {
  if (Jn) return g(I, C);
  Jn = !0;
  try {
    return $Z(g, I, C);
  } finally {
    (Jn = !1), (zC !== null || QC !== null) && (gm(), _Z());
  }
}
function QA(g, I) {
  var C = g.stateNode;
  if (C === null) return null;
  var A = fe(C);
  if (A === null) return null;
  C = A[I];
  g: switch (I) {
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
      (A = !A.disabled) ||
        ((g = g.type),
        (A = !(
          g === "button" ||
          g === "input" ||
          g === "select" ||
          g === "textarea"
        ))),
        (g = !A);
      break g;
    default:
      g = !1;
  }
  if (g) return null;
  if (C && typeof C != "function") throw Error(h(231, I, typeof C));
  return C;
}
var rd = !1;
if (yI)
  try {
    var aA = {};
    Object.defineProperty(aA, "passive", {
      get: function () {
        rd = !0;
      },
    }),
      window.addEventListener("test", aA, aA),
      window.removeEventListener("test", aA, aA);
  } catch {
    rd = !1;
  }
function si(g, I, C, A, l, e, n, d, c) {
  var o = Array.prototype.slice.call(arguments, 3);
  try {
    I.apply(C, o);
  } catch (t) {
    this.onError(t);
  }
}
var JA = !1,
  le = null,
  ee = !1,
  yd = null,
  Bi = {
    onError: function (g) {
      (JA = !0), (le = g);
    },
  };
function ri(g, I, C, A, l, e, n, d, c) {
  (JA = !1), (le = null), si.apply(Bi, arguments);
}
function yi(g, I, C, A, l, e, n, d, c) {
  if ((ri.apply(this, arguments), JA)) {
    if (JA) {
      var o = le;
      (JA = !1), (le = null);
    } else throw Error(h(198));
    ee || ((ee = !0), (yd = o));
  }
}
function bC(g) {
  var I = g,
    C = g;
  if (g.alternate) for (; I.return; ) I = I.return;
  else {
    g = I;
    do (I = g), I.flags & 4098 && (C = I.return), (g = I.return);
    while (g);
  }
  return I.tag === 3 ? C : null;
}
function Cm(g) {
  if (g.tag === 13) {
    var I = g.memoizedState;
    if (
      (I === null && ((g = g.alternate), g !== null && (I = g.memoizedState)),
      I !== null)
    )
      return I.dehydrated;
  }
  return null;
}
function zo(g) {
  if (bC(g) !== g) throw Error(h(188));
}
function Wi(g) {
  var I = g.alternate;
  if (!I) {
    if (((I = bC(g)), I === null)) throw Error(h(188));
    return I !== g ? null : g;
  }
  for (var C = g, A = I; ; ) {
    var l = C.return;
    if (l === null) break;
    var e = l.alternate;
    if (e === null) {
      if (((A = l.return), A !== null)) {
        C = A;
        continue;
      }
      break;
    }
    if (l.child === e.child) {
      for (e = l.child; e; ) {
        if (e === C) return zo(l), g;
        if (e === A) return zo(l), I;
        e = e.sibling;
      }
      throw Error(h(188));
    }
    if (C.return !== A.return) (C = l), (A = e);
    else {
      for (var n = !1, d = l.child; d; ) {
        if (d === C) {
          (n = !0), (C = l), (A = e);
          break;
        }
        if (d === A) {
          (n = !0), (A = l), (C = e);
          break;
        }
        d = d.sibling;
      }
      if (!n) {
        for (d = e.child; d; ) {
          if (d === C) {
            (n = !0), (C = e), (A = l);
            break;
          }
          if (d === A) {
            (n = !0), (A = e), (C = l);
            break;
          }
          d = d.sibling;
        }
        if (!n) throw Error(h(189));
      }
    }
    if (C.alternate !== A) throw Error(h(190));
  }
  if (C.tag !== 3) throw Error(h(188));
  return C.stateNode.current === C ? g : I;
}
function Am(g) {
  return (g = Wi(g)), g !== null ? lm(g) : null;
}
function lm(g) {
  if (g.tag === 5 || g.tag === 6) return g;
  for (g = g.child; g !== null; ) {
    var I = lm(g);
    if (I !== null) return I;
    g = g.sibling;
  }
  return null;
}
var em = fg.unstable_scheduleCallback,
  Qo = fg.unstable_cancelCallback,
  Vi = fg.unstable_shouldYield,
  Si = fg.unstable_requestPaint,
  Ag = fg.unstable_now,
  hi = fg.unstable_getCurrentPriorityLevel,
  rc = fg.unstable_ImmediatePriority,
  nm = fg.unstable_UserBlockingPriority,
  ne = fg.unstable_NormalPriority,
  Xi = fg.unstable_LowPriority,
  dm = fg.unstable_IdlePriority,
  ve = null,
  tI = null;
function pi(g) {
  if (tI && typeof tI.onCommitFiberRoot == "function")
    try {
      tI.onCommitFiberRoot(ve, g, void 0, (g.current.flags & 128) === 128);
    } catch {}
}
var $g = Math.clz32 ? Math.clz32 : Yi,
  Ri = Math.log,
  Ji = Math.LN2;
function Yi(g) {
  return (g >>>= 0), g === 0 ? 32 : (31 - ((Ri(g) / Ji) | 0)) | 0;
}
var hl = 64,
  Xl = 4194304;
function XA(g) {
  switch (g & -g) {
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
      return g & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return g & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return g;
  }
}
function de(g, I) {
  var C = g.pendingLanes;
  if (C === 0) return 0;
  var A = 0,
    l = g.suspendedLanes,
    e = g.pingedLanes,
    n = C & 268435455;
  if (n !== 0) {
    var d = n & ~l;
    d !== 0 ? (A = XA(d)) : ((e &= n), e !== 0 && (A = XA(e)));
  } else (n = C & ~l), n !== 0 ? (A = XA(n)) : e !== 0 && (A = XA(e));
  if (A === 0) return 0;
  if (
    I !== 0 &&
    I !== A &&
    !(I & l) &&
    ((l = A & -A), (e = I & -I), l >= e || (l === 16 && (e & 4194240) !== 0))
  )
    return I;
  if ((A & 4 && (A |= C & 16), (I = g.entangledLanes), I !== 0))
    for (g = g.entanglements, I &= A; 0 < I; )
      (C = 31 - $g(I)), (l = 1 << C), (A |= g[C]), (I &= ~l);
  return A;
}
function ki(g, I) {
  switch (g) {
    case 1:
    case 2:
    case 4:
      return I + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return I + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hi(g, I) {
  for (
    var C = g.suspendedLanes,
      A = g.pingedLanes,
      l = g.expirationTimes,
      e = g.pendingLanes;
    0 < e;

  ) {
    var n = 31 - $g(e),
      d = 1 << n,
      c = l[n];
    c === -1
      ? (!(d & C) || d & A) && (l[n] = ki(d, I))
      : c <= I && (g.expiredLanes |= d),
      (e &= ~d);
  }
}
function Wd(g) {
  return (
    (g = g.pendingLanes & -1073741825),
    g !== 0 ? g : g & 1073741824 ? 1073741824 : 0
  );
}
function cm() {
  var g = hl;
  return (hl <<= 1), !(hl & 4194240) && (hl = 64), g;
}
function Yn(g) {
  for (var I = [], C = 0; 31 > C; C++) I.push(g);
  return I;
}
function ol(g, I, C) {
  (g.pendingLanes |= I),
    I !== 536870912 && ((g.suspendedLanes = 0), (g.pingedLanes = 0)),
    (g = g.eventTimes),
    (I = 31 - $g(I)),
    (g[I] = C);
}
function Ki(g, I) {
  var C = g.pendingLanes & ~I;
  (g.pendingLanes = I),
    (g.suspendedLanes = 0),
    (g.pingedLanes = 0),
    (g.expiredLanes &= I),
    (g.mutableReadLanes &= I),
    (g.entangledLanes &= I),
    (I = g.entanglements);
  var A = g.eventTimes;
  for (g = g.expirationTimes; 0 < C; ) {
    var l = 31 - $g(C),
      e = 1 << l;
    (I[l] = 0), (A[l] = -1), (g[l] = -1), (C &= ~e);
  }
}
function yc(g, I) {
  var C = (g.entangledLanes |= I);
  for (g = g.entanglements; C; ) {
    var A = 31 - $g(C),
      l = 1 << A;
    (l & I) | (g[A] & I) && (g[A] |= I), (C &= ~l);
  }
}
var U = 0;
function om(g) {
  return (g &= -g), 1 < g ? (4 < g ? (g & 268435455 ? 16 : 536870912) : 4) : 1;
}
var tm,
  Wc,
  Zm,
  mm,
  Gm,
  Vd = !1,
  pl = [],
  zI = null,
  QI = null,
  UI = null,
  UA = new Map(),
  xA = new Map(),
  vI = [],
  vi =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Uo(g, I) {
  switch (g) {
    case "focusin":
    case "focusout":
      zI = null;
      break;
    case "dragenter":
    case "dragleave":
      QI = null;
      break;
    case "mouseover":
    case "mouseout":
      UI = null;
      break;
    case "pointerover":
    case "pointerout":
      UA.delete(I.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xA.delete(I.pointerId);
  }
}
function iA(g, I, C, A, l, e) {
  return g === null || g.nativeEvent !== e
    ? ((g = {
        blockedOn: I,
        domEventName: C,
        eventSystemFlags: A,
        nativeEvent: e,
        targetContainers: [l],
      }),
      I !== null && ((I = Zl(I)), I !== null && Wc(I)),
      g)
    : ((g.eventSystemFlags |= A),
      (I = g.targetContainers),
      l !== null && I.indexOf(l) === -1 && I.push(l),
      g);
}
function Ni(g, I, C, A, l) {
  switch (I) {
    case "focusin":
      return (zI = iA(zI, g, I, C, A, l)), !0;
    case "dragenter":
      return (QI = iA(QI, g, I, C, A, l)), !0;
    case "mouseover":
      return (UI = iA(UI, g, I, C, A, l)), !0;
    case "pointerover":
      var e = l.pointerId;
      return UA.set(e, iA(UA.get(e) || null, g, I, C, A, l)), !0;
    case "gotpointercapture":
      return (
        (e = l.pointerId), xA.set(e, iA(xA.get(e) || null, g, I, C, A, l)), !0
      );
  }
  return !1;
}
function am(g) {
  var I = eC(g.target);
  if (I !== null) {
    var C = bC(I);
    if (C !== null) {
      if (((I = C.tag), I === 13)) {
        if (((I = Cm(C)), I !== null)) {
          (g.blockedOn = I),
            Gm(g.priority, function () {
              Zm(C);
            });
          return;
        }
      } else if (I === 3 && C.stateNode.current.memoizedState.isDehydrated) {
        g.blockedOn = C.tag === 3 ? C.stateNode.containerInfo : null;
        return;
      }
    }
  }
  g.blockedOn = null;
}
function Ul(g) {
  if (g.blockedOn !== null) return !1;
  for (var I = g.targetContainers; 0 < I.length; ) {
    var C = Sd(g.domEventName, g.eventSystemFlags, I[0], g.nativeEvent);
    if (C === null) {
      C = g.nativeEvent;
      var A = new C.constructor(C.type, C);
      (sd = A), C.target.dispatchEvent(A), (sd = null);
    } else return (I = Zl(C)), I !== null && Wc(I), (g.blockedOn = C), !1;
    I.shift();
  }
  return !0;
}
function xo(g, I, C) {
  Ul(g) && C.delete(I);
}
function Fi() {
  (Vd = !1),
    zI !== null && Ul(zI) && (zI = null),
    QI !== null && Ul(QI) && (QI = null),
    UI !== null && Ul(UI) && (UI = null),
    UA.forEach(xo),
    xA.forEach(xo);
}
function bA(g, I) {
  g.blockedOn === I &&
    ((g.blockedOn = null),
    Vd ||
      ((Vd = !0),
      fg.unstable_scheduleCallback(fg.unstable_NormalPriority, Fi)));
}
function EA(g) {
  function I(l) {
    return bA(l, g);
  }
  if (0 < pl.length) {
    bA(pl[0], g);
    for (var C = 1; C < pl.length; C++) {
      var A = pl[C];
      A.blockedOn === g && (A.blockedOn = null);
    }
  }
  for (
    zI !== null && bA(zI, g),
      QI !== null && bA(QI, g),
      UI !== null && bA(UI, g),
      UA.forEach(I),
      xA.forEach(I),
      C = 0;
    C < vI.length;
    C++
  )
    (A = vI[C]), A.blockedOn === g && (A.blockedOn = null);
  for (; 0 < vI.length && ((C = vI[0]), C.blockedOn === null); )
    am(C), C.blockedOn === null && vI.shift();
}
var UC = XI.ReactCurrentBatchConfig,
  ce = !0;
function wi(g, I, C, A) {
  var l = U,
    e = UC.transition;
  UC.transition = null;
  try {
    (U = 1), Vc(g, I, C, A);
  } finally {
    (U = l), (UC.transition = e);
  }
}
function fi(g, I, C, A) {
  var l = U,
    e = UC.transition;
  UC.transition = null;
  try {
    (U = 4), Vc(g, I, C, A);
  } finally {
    (U = l), (UC.transition = e);
  }
}
function Vc(g, I, C, A) {
  if (ce) {
    var l = Sd(g, I, C, A);
    if (l === null) Qn(g, I, A, oe, C), Uo(g, A);
    else if (Ni(l, g, I, C, A)) A.stopPropagation();
    else if ((Uo(g, A), I & 4 && -1 < vi.indexOf(g))) {
      for (; l !== null; ) {
        var e = Zl(l);
        if (
          (e !== null && tm(e),
          (e = Sd(g, I, C, A)),
          e === null && Qn(g, I, A, oe, C),
          e === l)
        )
          break;
        l = e;
      }
      l !== null && A.stopPropagation();
    } else Qn(g, I, A, null, C);
  }
}
var oe = null;
function Sd(g, I, C, A) {
  if (((oe = null), (g = Bc(A)), (g = eC(g)), g !== null))
    if (((I = bC(g)), I === null)) g = null;
    else if (((C = I.tag), C === 13)) {
      if (((g = Cm(I)), g !== null)) return g;
      g = null;
    } else if (C === 3) {
      if (I.stateNode.current.memoizedState.isDehydrated)
        return I.tag === 3 ? I.stateNode.containerInfo : null;
      g = null;
    } else I !== g && (g = null);
  return (oe = g), null;
}
function im(g) {
  switch (g) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hi()) {
        case rc:
          return 1;
        case nm:
          return 4;
        case ne:
        case Xi:
          return 16;
        case dm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var FI = null,
  Sc = null,
  xl = null;
function bm() {
  if (xl) return xl;
  var g,
    I = Sc,
    C = I.length,
    A,
    l = "value" in FI ? FI.value : FI.textContent,
    e = l.length;
  for (g = 0; g < C && I[g] === l[g]; g++);
  var n = C - g;
  for (A = 1; A <= n && I[C - A] === l[e - A]; A++);
  return (xl = l.slice(g, 1 < A ? 1 - A : void 0));
}
function El(g) {
  var I = g.keyCode;
  return (
    "charCode" in g
      ? ((g = g.charCode), g === 0 && I === 13 && (g = 13))
      : (g = I),
    g === 10 && (g = 13),
    32 <= g || g === 13 ? g : 0
  );
}
function Rl() {
  return !0;
}
function Eo() {
  return !1;
}
function Qg(g) {
  function I(C, A, l, e, n) {
    (this._reactName = C),
      (this._targetInst = l),
      (this.type = A),
      (this.nativeEvent = e),
      (this.target = n),
      (this.currentTarget = null);
    for (var d in g)
      g.hasOwnProperty(d) && ((C = g[d]), (this[d] = C ? C(e) : e[d]));
    return (
      (this.isDefaultPrevented = (
        e.defaultPrevented != null ? e.defaultPrevented : e.returnValue === !1
      )
        ? Rl
        : Eo),
      (this.isPropagationStopped = Eo),
      this
    );
  }
  return (
    _(I.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var C = this.nativeEvent;
        C &&
          (C.preventDefault
            ? C.preventDefault()
            : typeof C.returnValue != "unknown" && (C.returnValue = !1),
          (this.isDefaultPrevented = Rl));
      },
      stopPropagation: function () {
        var C = this.nativeEvent;
        C &&
          (C.stopPropagation
            ? C.stopPropagation()
            : typeof C.cancelBubble != "unknown" && (C.cancelBubble = !0),
          (this.isPropagationStopped = Rl));
      },
      persist: function () {},
      isPersistent: Rl,
    }),
    I
  );
}
var lA = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (g) {
      return g.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hc = Qg(lA),
  tl = _({}, lA, { view: 0, detail: 0 }),
  zi = Qg(tl),
  kn,
  Hn,
  uA,
  Ne = _({}, tl, {
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
    getModifierState: Xc,
    button: 0,
    buttons: 0,
    relatedTarget: function (g) {
      return g.relatedTarget === void 0
        ? g.fromElement === g.srcElement
          ? g.toElement
          : g.fromElement
        : g.relatedTarget;
    },
    movementX: function (g) {
      return "movementX" in g
        ? g.movementX
        : (g !== uA &&
            (uA && g.type === "mousemove"
              ? ((kn = g.screenX - uA.screenX), (Hn = g.screenY - uA.screenY))
              : (Hn = kn = 0),
            (uA = g)),
          kn);
    },
    movementY: function (g) {
      return "movementY" in g ? g.movementY : Hn;
    },
  }),
  Mo = Qg(Ne),
  Qi = _({}, Ne, { dataTransfer: 0 }),
  Ui = Qg(Qi),
  xi = _({}, tl, { relatedTarget: 0 }),
  Kn = Qg(xi),
  Ei = _({}, lA, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mi = Qg(Ei),
  Li = _({}, lA, {
    clipboardData: function (g) {
      return "clipboardData" in g ? g.clipboardData : window.clipboardData;
    },
  }),
  Di = Qg(Li),
  Ti = _({}, lA, { data: 0 }),
  Lo = Qg(Ti),
  ji = {
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
  Pi = {
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
  Oi = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function qi(g) {
  var I = this.nativeEvent;
  return I.getModifierState ? I.getModifierState(g) : (g = Oi[g]) ? !!I[g] : !1;
}
function Xc() {
  return qi;
}
var _i = _({}, tl, {
    key: function (g) {
      if (g.key) {
        var I = ji[g.key] || g.key;
        if (I !== "Unidentified") return I;
      }
      return g.type === "keypress"
        ? ((g = El(g)), g === 13 ? "Enter" : String.fromCharCode(g))
        : g.type === "keydown" || g.type === "keyup"
        ? Pi[g.keyCode] || "Unidentified"
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
    getModifierState: Xc,
    charCode: function (g) {
      return g.type === "keypress" ? El(g) : 0;
    },
    keyCode: function (g) {
      return g.type === "keydown" || g.type === "keyup" ? g.keyCode : 0;
    },
    which: function (g) {
      return g.type === "keypress"
        ? El(g)
        : g.type === "keydown" || g.type === "keyup"
        ? g.keyCode
        : 0;
    },
  }),
  $i = Qg(_i),
  gb = _({}, Ne, {
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
  Do = Qg(gb),
  Ib = _({}, tl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xc,
  }),
  Cb = Qg(Ib),
  Ab = _({}, lA, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lb = Qg(Ab),
  eb = _({}, Ne, {
    deltaX: function (g) {
      return "deltaX" in g ? g.deltaX : "wheelDeltaX" in g ? -g.wheelDeltaX : 0;
    },
    deltaY: function (g) {
      return "deltaY" in g
        ? g.deltaY
        : "wheelDeltaY" in g
        ? -g.wheelDeltaY
        : "wheelDelta" in g
        ? -g.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  nb = Qg(eb),
  db = [9, 13, 27, 32],
  pc = yI && "CompositionEvent" in window,
  YA = null;
yI && "documentMode" in document && (YA = document.documentMode);
var cb = yI && "TextEvent" in window && !YA,
  um = yI && (!pc || (YA && 8 < YA && 11 >= YA)),
  To = String.fromCharCode(32),
  jo = !1;
function sm(g, I) {
  switch (g) {
    case "keyup":
      return db.indexOf(I.keyCode) !== -1;
    case "keydown":
      return I.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Bm(g) {
  return (g = g.detail), typeof g == "object" && "data" in g ? g.data : null;
}
var RC = !1;
function ob(g, I) {
  switch (g) {
    case "compositionend":
      return Bm(I);
    case "keypress":
      return I.which !== 32 ? null : ((jo = !0), To);
    case "textInput":
      return (g = I.data), g === To && jo ? null : g;
    default:
      return null;
  }
}
function tb(g, I) {
  if (RC)
    return g === "compositionend" || (!pc && sm(g, I))
      ? ((g = bm()), (xl = Sc = FI = null), (RC = !1), g)
      : null;
  switch (g) {
    case "paste":
      return null;
    case "keypress":
      if (!(I.ctrlKey || I.altKey || I.metaKey) || (I.ctrlKey && I.altKey)) {
        if (I.char && 1 < I.char.length) return I.char;
        if (I.which) return String.fromCharCode(I.which);
      }
      return null;
    case "compositionend":
      return um && I.locale !== "ko" ? null : I.data;
    default:
      return null;
  }
}
var Zb = {
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
function Po(g) {
  var I = g && g.nodeName && g.nodeName.toLowerCase();
  return I === "input" ? !!Zb[g.type] : I === "textarea";
}
function rm(g, I, C, A) {
  qZ(A),
    (I = te(I, "onChange")),
    0 < I.length &&
      ((C = new hc("onChange", "change", null, C, A)),
      g.push({ event: C, listeners: I }));
}
var kA = null,
  MA = null;
function mb(g) {
  km(g, 0);
}
function Fe(g) {
  var I = kC(g);
  if (MZ(I)) return g;
}
function Gb(g, I) {
  if (g === "change") return I;
}
var ym = !1;
if (yI) {
  var vn;
  if (yI) {
    var Nn = "oninput" in document;
    if (!Nn) {
      var Oo = document.createElement("div");
      Oo.setAttribute("oninput", "return;"),
        (Nn = typeof Oo.oninput == "function");
    }
    vn = Nn;
  } else vn = !1;
  ym = vn && (!document.documentMode || 9 < document.documentMode);
}
function qo() {
  kA && (kA.detachEvent("onpropertychange", Wm), (MA = kA = null));
}
function Wm(g) {
  if (g.propertyName === "value" && Fe(MA)) {
    var I = [];
    rm(I, MA, g, Bc(g)), Im(mb, I);
  }
}
function ab(g, I, C) {
  g === "focusin"
    ? (qo(), (kA = I), (MA = C), kA.attachEvent("onpropertychange", Wm))
    : g === "focusout" && qo();
}
function ib(g) {
  if (g === "selectionchange" || g === "keyup" || g === "keydown")
    return Fe(MA);
}
function bb(g, I) {
  if (g === "click") return Fe(I);
}
function ub(g, I) {
  if (g === "input" || g === "change") return Fe(I);
}
function sb(g, I) {
  return (g === I && (g !== 0 || 1 / g === 1 / I)) || (g !== g && I !== I);
}
var II = typeof Object.is == "function" ? Object.is : sb;
function LA(g, I) {
  if (II(g, I)) return !0;
  if (typeof g != "object" || g === null || typeof I != "object" || I === null)
    return !1;
  var C = Object.keys(g),
    A = Object.keys(I);
  if (C.length !== A.length) return !1;
  for (A = 0; A < C.length; A++) {
    var l = C[A];
    if (!nd.call(I, l) || !II(g[l], I[l])) return !1;
  }
  return !0;
}
function _o(g) {
  for (; g && g.firstChild; ) g = g.firstChild;
  return g;
}
function $o(g, I) {
  var C = _o(g);
  g = 0;
  for (var A; C; ) {
    if (C.nodeType === 3) {
      if (((A = g + C.textContent.length), g <= I && A >= I))
        return { node: C, offset: I - g };
      g = A;
    }
    g: {
      for (; C; ) {
        if (C.nextSibling) {
          C = C.nextSibling;
          break g;
        }
        C = C.parentNode;
      }
      C = void 0;
    }
    C = _o(C);
  }
}
function Vm(g, I) {
  return g && I
    ? g === I
      ? !0
      : g && g.nodeType === 3
      ? !1
      : I && I.nodeType === 3
      ? Vm(g, I.parentNode)
      : "contains" in g
      ? g.contains(I)
      : g.compareDocumentPosition
      ? !!(g.compareDocumentPosition(I) & 16)
      : !1
    : !1;
}
function Sm() {
  for (var g = window, I = Ae(); I instanceof g.HTMLIFrameElement; ) {
    try {
      var C = typeof I.contentWindow.location.href == "string";
    } catch {
      C = !1;
    }
    if (C) g = I.contentWindow;
    else break;
    I = Ae(g.document);
  }
  return I;
}
function Rc(g) {
  var I = g && g.nodeName && g.nodeName.toLowerCase();
  return (
    I &&
    ((I === "input" &&
      (g.type === "text" ||
        g.type === "search" ||
        g.type === "tel" ||
        g.type === "url" ||
        g.type === "password")) ||
      I === "textarea" ||
      g.contentEditable === "true")
  );
}
function Bb(g) {
  var I = Sm(),
    C = g.focusedElem,
    A = g.selectionRange;
  if (
    I !== C &&
    C &&
    C.ownerDocument &&
    Vm(C.ownerDocument.documentElement, C)
  ) {
    if (A !== null && Rc(C)) {
      if (
        ((I = A.start),
        (g = A.end),
        g === void 0 && (g = I),
        "selectionStart" in C)
      )
        (C.selectionStart = I), (C.selectionEnd = Math.min(g, C.value.length));
      else if (
        ((g = ((I = C.ownerDocument || document) && I.defaultView) || window),
        g.getSelection)
      ) {
        g = g.getSelection();
        var l = C.textContent.length,
          e = Math.min(A.start, l);
        (A = A.end === void 0 ? e : Math.min(A.end, l)),
          !g.extend && e > A && ((l = A), (A = e), (e = l)),
          (l = $o(C, e));
        var n = $o(C, A);
        l &&
          n &&
          (g.rangeCount !== 1 ||
            g.anchorNode !== l.node ||
            g.anchorOffset !== l.offset ||
            g.focusNode !== n.node ||
            g.focusOffset !== n.offset) &&
          ((I = I.createRange()),
          I.setStart(l.node, l.offset),
          g.removeAllRanges(),
          e > A
            ? (g.addRange(I), g.extend(n.node, n.offset))
            : (I.setEnd(n.node, n.offset), g.addRange(I)));
      }
    }
    for (I = [], g = C; (g = g.parentNode); )
      g.nodeType === 1 &&
        I.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
    for (typeof C.focus == "function" && C.focus(), C = 0; C < I.length; C++)
      (g = I[C]),
        (g.element.scrollLeft = g.left),
        (g.element.scrollTop = g.top);
  }
}
var rb = yI && "documentMode" in document && 11 >= document.documentMode,
  JC = null,
  hd = null,
  HA = null,
  Xd = !1;
function gt(g, I, C) {
  var A = C.window === C ? C.document : C.nodeType === 9 ? C : C.ownerDocument;
  Xd ||
    JC == null ||
    JC !== Ae(A) ||
    ((A = JC),
    "selectionStart" in A && Rc(A)
      ? (A = { start: A.selectionStart, end: A.selectionEnd })
      : ((A = (
          (A.ownerDocument && A.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (A = {
          anchorNode: A.anchorNode,
          anchorOffset: A.anchorOffset,
          focusNode: A.focusNode,
          focusOffset: A.focusOffset,
        })),
    (HA && LA(HA, A)) ||
      ((HA = A),
      (A = te(hd, "onSelect")),
      0 < A.length &&
        ((I = new hc("onSelect", "select", null, I, C)),
        g.push({ event: I, listeners: A }),
        (I.target = JC))));
}
function Jl(g, I) {
  var C = {};
  return (
    (C[g.toLowerCase()] = I.toLowerCase()),
    (C["Webkit" + g] = "webkit" + I),
    (C["Moz" + g] = "moz" + I),
    C
  );
}
var YC = {
    animationend: Jl("Animation", "AnimationEnd"),
    animationiteration: Jl("Animation", "AnimationIteration"),
    animationstart: Jl("Animation", "AnimationStart"),
    transitionend: Jl("Transition", "TransitionEnd"),
  },
  Fn = {},
  hm = {};
yI &&
  ((hm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete YC.animationend.animation,
    delete YC.animationiteration.animation,
    delete YC.animationstart.animation),
  "TransitionEvent" in window || delete YC.transitionend.transition);
function we(g) {
  if (Fn[g]) return Fn[g];
  if (!YC[g]) return g;
  var I = YC[g],
    C;
  for (C in I) if (I.hasOwnProperty(C) && C in hm) return (Fn[g] = I[C]);
  return g;
}
var Xm = we("animationend"),
  pm = we("animationiteration"),
  Rm = we("animationstart"),
  Jm = we("transitionend"),
  Ym = new Map(),
  It =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qI(g, I) {
  Ym.set(g, I), iC(I, [g]);
}
for (var wn = 0; wn < It.length; wn++) {
  var fn = It[wn],
    yb = fn.toLowerCase(),
    Wb = fn[0].toUpperCase() + fn.slice(1);
  qI(yb, "on" + Wb);
}
qI(Xm, "onAnimationEnd");
qI(pm, "onAnimationIteration");
qI(Rm, "onAnimationStart");
qI("dblclick", "onDoubleClick");
qI("focusin", "onFocus");
qI("focusout", "onBlur");
qI(Jm, "onTransitionEnd");
DC("onMouseEnter", ["mouseout", "mouseover"]);
DC("onMouseLeave", ["mouseout", "mouseover"]);
DC("onPointerEnter", ["pointerout", "pointerover"]);
DC("onPointerLeave", ["pointerout", "pointerover"]);
iC(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
iC(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
iC("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
iC(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
iC(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
iC(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var pA =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Vb = new Set("cancel close invalid load scroll toggle".split(" ").concat(pA));
function Ct(g, I, C) {
  var A = g.type || "unknown-event";
  (g.currentTarget = C), yi(A, I, void 0, g), (g.currentTarget = null);
}
function km(g, I) {
  I = (I & 4) !== 0;
  for (var C = 0; C < g.length; C++) {
    var A = g[C],
      l = A.event;
    A = A.listeners;
    g: {
      var e = void 0;
      if (I)
        for (var n = A.length - 1; 0 <= n; n--) {
          var d = A[n],
            c = d.instance,
            o = d.currentTarget;
          if (((d = d.listener), c !== e && l.isPropagationStopped())) break g;
          Ct(l, d, o), (e = c);
        }
      else
        for (n = 0; n < A.length; n++) {
          if (
            ((d = A[n]),
            (c = d.instance),
            (o = d.currentTarget),
            (d = d.listener),
            c !== e && l.isPropagationStopped())
          )
            break g;
          Ct(l, d, o), (e = c);
        }
    }
  }
  if (ee) throw ((g = yd), (ee = !1), (yd = null), g);
}
function M(g, I) {
  var C = I[kd];
  C === void 0 && (C = I[kd] = new Set());
  var A = g + "__bubble";
  C.has(A) || (Hm(I, g, 2, !1), C.add(A));
}
function zn(g, I, C) {
  var A = 0;
  I && (A |= 4), Hm(C, g, A, I);
}
var Yl = "_reactListening" + Math.random().toString(36).slice(2);
function DA(g) {
  if (!g[Yl]) {
    (g[Yl] = !0),
      zZ.forEach(function (C) {
        C !== "selectionchange" && (Vb.has(C) || zn(C, !1, g), zn(C, !0, g));
      });
    var I = g.nodeType === 9 ? g : g.ownerDocument;
    I === null || I[Yl] || ((I[Yl] = !0), zn("selectionchange", !1, I));
  }
}
function Hm(g, I, C, A) {
  switch (im(I)) {
    case 1:
      var l = wi;
      break;
    case 4:
      l = fi;
      break;
    default:
      l = Vc;
  }
  (C = l.bind(null, I, C, g)),
    (l = void 0),
    !rd ||
      (I !== "touchstart" && I !== "touchmove" && I !== "wheel") ||
      (l = !0),
    A
      ? l !== void 0
        ? g.addEventListener(I, C, { capture: !0, passive: l })
        : g.addEventListener(I, C, !0)
      : l !== void 0
      ? g.addEventListener(I, C, { passive: l })
      : g.addEventListener(I, C, !1);
}
function Qn(g, I, C, A, l) {
  var e = A;
  if (!(I & 1) && !(I & 2) && A !== null)
    g: for (;;) {
      if (A === null) return;
      var n = A.tag;
      if (n === 3 || n === 4) {
        var d = A.stateNode.containerInfo;
        if (d === l || (d.nodeType === 8 && d.parentNode === l)) break;
        if (n === 4)
          for (n = A.return; n !== null; ) {
            var c = n.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = n.stateNode.containerInfo),
              c === l || (c.nodeType === 8 && c.parentNode === l))
            )
              return;
            n = n.return;
          }
        for (; d !== null; ) {
          if (((n = eC(d)), n === null)) return;
          if (((c = n.tag), c === 5 || c === 6)) {
            A = e = n;
            continue g;
          }
          d = d.parentNode;
        }
      }
      A = A.return;
    }
  Im(function () {
    var o = e,
      t = Bc(C),
      m = [];
    g: {
      var G = Ym.get(g);
      if (G !== void 0) {
        var s = hc,
          i = g;
        switch (g) {
          case "keypress":
            if (El(C) === 0) break g;
          case "keydown":
          case "keyup":
            s = $i;
            break;
          case "focusin":
            (i = "focus"), (s = Kn);
            break;
          case "focusout":
            (i = "blur"), (s = Kn);
            break;
          case "beforeblur":
          case "afterblur":
            s = Kn;
            break;
          case "click":
            if (C.button === 2) break g;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            s = Mo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            s = Ui;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            s = Cb;
            break;
          case Xm:
          case pm:
          case Rm:
            s = Mi;
            break;
          case Jm:
            s = lb;
            break;
          case "scroll":
            s = zi;
            break;
          case "wheel":
            s = nb;
            break;
          case "copy":
          case "cut":
          case "paste":
            s = Di;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            s = Do;
        }
        var b = (I & 4) !== 0,
          V = !b && g === "scroll",
          a = b ? (G !== null ? G + "Capture" : null) : G;
        b = [];
        for (var Z = o, u; Z !== null; ) {
          u = Z;
          var r = u.stateNode;
          if (
            (u.tag === 5 &&
              r !== null &&
              ((u = r),
              a !== null && ((r = QA(Z, a)), r != null && b.push(TA(Z, r, u)))),
            V)
          )
            break;
          Z = Z.return;
        }
        0 < b.length &&
          ((G = new s(G, i, null, C, t)), m.push({ event: G, listeners: b }));
      }
    }
    if (!(I & 7)) {
      g: {
        if (
          ((G = g === "mouseover" || g === "pointerover"),
          (s = g === "mouseout" || g === "pointerout"),
          G &&
            C !== sd &&
            (i = C.relatedTarget || C.fromElement) &&
            (eC(i) || i[WI]))
        )
          break g;
        if (
          (s || G) &&
          ((G =
            t.window === t
              ? t
              : (G = t.ownerDocument)
              ? G.defaultView || G.parentWindow
              : window),
          s
            ? ((i = C.relatedTarget || C.toElement),
              (s = o),
              (i = i ? eC(i) : null),
              i !== null &&
                ((V = bC(i)), i !== V || (i.tag !== 5 && i.tag !== 6)) &&
                (i = null))
            : ((s = null), (i = o)),
          s !== i)
        ) {
          if (
            ((b = Mo),
            (r = "onMouseLeave"),
            (a = "onMouseEnter"),
            (Z = "mouse"),
            (g === "pointerout" || g === "pointerover") &&
              ((b = Do),
              (r = "onPointerLeave"),
              (a = "onPointerEnter"),
              (Z = "pointer")),
            (V = s == null ? G : kC(s)),
            (u = i == null ? G : kC(i)),
            (G = new b(r, Z + "leave", s, C, t)),
            (G.target = V),
            (G.relatedTarget = u),
            (r = null),
            eC(t) === o &&
              ((b = new b(a, Z + "enter", i, C, t)),
              (b.target = u),
              (b.relatedTarget = V),
              (r = b)),
            (V = r),
            s && i)
          )
            I: {
              for (b = s, a = i, Z = 0, u = b; u; u = sC(u)) Z++;
              for (u = 0, r = a; r; r = sC(r)) u++;
              for (; 0 < Z - u; ) (b = sC(b)), Z--;
              for (; 0 < u - Z; ) (a = sC(a)), u--;
              for (; Z--; ) {
                if (b === a || (a !== null && b === a.alternate)) break I;
                (b = sC(b)), (a = sC(a));
              }
              b = null;
            }
          else b = null;
          s !== null && At(m, G, s, b, !1),
            i !== null && V !== null && At(m, V, i, b, !0);
        }
      }
      g: {
        if (
          ((G = o ? kC(o) : window),
          (s = G.nodeName && G.nodeName.toLowerCase()),
          s === "select" || (s === "input" && G.type === "file"))
        )
          var X = Gb;
        else if (Po(G))
          if (ym) X = ub;
          else {
            X = ib;
            var R = ab;
          }
        else
          (s = G.nodeName) &&
            s.toLowerCase() === "input" &&
            (G.type === "checkbox" || G.type === "radio") &&
            (X = bb);
        if (X && (X = X(g, o))) {
          rm(m, X, C, t);
          break g;
        }
        R && R(g, G, o),
          g === "focusout" &&
            (R = G._wrapperState) &&
            R.controlled &&
            G.type === "number" &&
            Gd(G, "number", G.value);
      }
      switch (((R = o ? kC(o) : window), g)) {
        case "focusin":
          (Po(R) || R.contentEditable === "true") &&
            ((JC = R), (hd = o), (HA = null));
          break;
        case "focusout":
          HA = hd = JC = null;
          break;
        case "mousedown":
          Xd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Xd = !1), gt(m, C, t);
          break;
        case "selectionchange":
          if (rb) break;
        case "keydown":
        case "keyup":
          gt(m, C, t);
      }
      var B;
      if (pc)
        g: {
          switch (g) {
            case "compositionstart":
              var p = "onCompositionStart";
              break g;
            case "compositionend":
              p = "onCompositionEnd";
              break g;
            case "compositionupdate":
              p = "onCompositionUpdate";
              break g;
          }
          p = void 0;
        }
      else
        RC
          ? sm(g, C) && (p = "onCompositionEnd")
          : g === "keydown" && C.keyCode === 229 && (p = "onCompositionStart");
      p &&
        (um &&
          C.locale !== "ko" &&
          (RC || p !== "onCompositionStart"
            ? p === "onCompositionEnd" && RC && (B = bm())
            : ((FI = t),
              (Sc = "value" in FI ? FI.value : FI.textContent),
              (RC = !0))),
        (R = te(o, p)),
        0 < R.length &&
          ((p = new Lo(p, g, null, C, t)),
          m.push({ event: p, listeners: R }),
          B ? (p.data = B) : ((B = Bm(C)), B !== null && (p.data = B)))),
        (B = cb ? ob(g, C) : tb(g, C)) &&
          ((o = te(o, "onBeforeInput")),
          0 < o.length &&
            ((t = new Lo("onBeforeInput", "beforeinput", null, C, t)),
            m.push({ event: t, listeners: o }),
            (t.data = B)));
    }
    km(m, I);
  });
}
function TA(g, I, C) {
  return { instance: g, listener: I, currentTarget: C };
}
function te(g, I) {
  for (var C = I + "Capture", A = []; g !== null; ) {
    var l = g,
      e = l.stateNode;
    l.tag === 5 &&
      e !== null &&
      ((l = e),
      (e = QA(g, C)),
      e != null && A.unshift(TA(g, e, l)),
      (e = QA(g, I)),
      e != null && A.push(TA(g, e, l))),
      (g = g.return);
  }
  return A;
}
function sC(g) {
  if (g === null) return null;
  do g = g.return;
  while (g && g.tag !== 5);
  return g || null;
}
function At(g, I, C, A, l) {
  for (var e = I._reactName, n = []; C !== null && C !== A; ) {
    var d = C,
      c = d.alternate,
      o = d.stateNode;
    if (c !== null && c === A) break;
    d.tag === 5 &&
      o !== null &&
      ((d = o),
      l
        ? ((c = QA(C, e)), c != null && n.unshift(TA(C, c, d)))
        : l || ((c = QA(C, e)), c != null && n.push(TA(C, c, d)))),
      (C = C.return);
  }
  n.length !== 0 && g.push({ event: I, listeners: n });
}
var Sb = /\r\n?/g,
  hb = /\u0000|\uFFFD/g;
function lt(g) {
  return (typeof g == "string" ? g : "" + g)
    .replace(
      Sb,
      `
`
    )
    .replace(hb, "");
}
function kl(g, I, C) {
  if (((I = lt(I)), lt(g) !== I && C)) throw Error(h(425));
}
function Ze() {}
var pd = null,
  Rd = null;
function Jd(g, I) {
  return (
    g === "textarea" ||
    g === "noscript" ||
    typeof I.children == "string" ||
    typeof I.children == "number" ||
    (typeof I.dangerouslySetInnerHTML == "object" &&
      I.dangerouslySetInnerHTML !== null &&
      I.dangerouslySetInnerHTML.__html != null)
  );
}
var Yd = typeof setTimeout == "function" ? setTimeout : void 0,
  Xb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  et = typeof Promise == "function" ? Promise : void 0,
  pb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof et < "u"
      ? function (g) {
          return et.resolve(null).then(g).catch(Rb);
        }
      : Yd;
function Rb(g) {
  setTimeout(function () {
    throw g;
  });
}
function Un(g, I) {
  var C = I,
    A = 0;
  do {
    var l = C.nextSibling;
    if ((g.removeChild(C), l && l.nodeType === 8))
      if (((C = l.data), C === "/$")) {
        if (A === 0) {
          g.removeChild(l), EA(I);
          return;
        }
        A--;
      } else (C !== "$" && C !== "$?" && C !== "$!") || A++;
    C = l;
  } while (C);
  EA(I);
}
function xI(g) {
  for (; g != null; g = g.nextSibling) {
    var I = g.nodeType;
    if (I === 1 || I === 3) break;
    if (I === 8) {
      if (((I = g.data), I === "$" || I === "$!" || I === "$?")) break;
      if (I === "/$") return null;
    }
  }
  return g;
}
function nt(g) {
  g = g.previousSibling;
  for (var I = 0; g; ) {
    if (g.nodeType === 8) {
      var C = g.data;
      if (C === "$" || C === "$!" || C === "$?") {
        if (I === 0) return g;
        I--;
      } else C === "/$" && I++;
    }
    g = g.previousSibling;
  }
  return null;
}
var eA = Math.random().toString(36).slice(2),
  dI = "__reactFiber$" + eA,
  jA = "__reactProps$" + eA,
  WI = "__reactContainer$" + eA,
  kd = "__reactEvents$" + eA,
  Jb = "__reactListeners$" + eA,
  Yb = "__reactHandles$" + eA;
function eC(g) {
  var I = g[dI];
  if (I) return I;
  for (var C = g.parentNode; C; ) {
    if ((I = C[WI] || C[dI])) {
      if (
        ((C = I.alternate),
        I.child !== null || (C !== null && C.child !== null))
      )
        for (g = nt(g); g !== null; ) {
          if ((C = g[dI])) return C;
          g = nt(g);
        }
      return I;
    }
    (g = C), (C = g.parentNode);
  }
  return null;
}
function Zl(g) {
  return (
    (g = g[dI] || g[WI]),
    !g || (g.tag !== 5 && g.tag !== 6 && g.tag !== 13 && g.tag !== 3) ? null : g
  );
}
function kC(g) {
  if (g.tag === 5 || g.tag === 6) return g.stateNode;
  throw Error(h(33));
}
function fe(g) {
  return g[jA] || null;
}
var Hd = [],
  HC = -1;
function _I(g) {
  return { current: g };
}
function L(g) {
  0 > HC || ((g.current = Hd[HC]), (Hd[HC] = null), HC--);
}
function E(g, I) {
  HC++, (Hd[HC] = g.current), (g.current = I);
}
var OI = {},
  Wg = _I(OI),
  Jg = _I(!1),
  tC = OI;
function TC(g, I) {
  var C = g.type.contextTypes;
  if (!C) return OI;
  var A = g.stateNode;
  if (A && A.__reactInternalMemoizedUnmaskedChildContext === I)
    return A.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    e;
  for (e in C) l[e] = I[e];
  return (
    A &&
      ((g = g.stateNode),
      (g.__reactInternalMemoizedUnmaskedChildContext = I),
      (g.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Yg(g) {
  return (g = g.childContextTypes), g != null;
}
function me() {
  L(Jg), L(Wg);
}
function dt(g, I, C) {
  if (Wg.current !== OI) throw Error(h(168));
  E(Wg, I), E(Jg, C);
}
function Km(g, I, C) {
  var A = g.stateNode;
  if (((I = I.childContextTypes), typeof A.getChildContext != "function"))
    return C;
  A = A.getChildContext();
  for (var l in A) if (!(l in I)) throw Error(h(108, ai(g) || "Unknown", l));
  return _({}, C, A);
}
function Ge(g) {
  return (
    (g =
      ((g = g.stateNode) && g.__reactInternalMemoizedMergedChildContext) || OI),
    (tC = Wg.current),
    E(Wg, g),
    E(Jg, Jg.current),
    !0
  );
}
function ct(g, I, C) {
  var A = g.stateNode;
  if (!A) throw Error(h(169));
  C
    ? ((g = Km(g, I, tC)),
      (A.__reactInternalMemoizedMergedChildContext = g),
      L(Jg),
      L(Wg),
      E(Wg, g))
    : L(Jg),
    E(Jg, C);
}
var iI = null,
  ze = !1,
  xn = !1;
function vm(g) {
  iI === null ? (iI = [g]) : iI.push(g);
}
function kb(g) {
  (ze = !0), vm(g);
}
function $I() {
  if (!xn && iI !== null) {
    xn = !0;
    var g = 0,
      I = U;
    try {
      var C = iI;
      for (U = 1; g < C.length; g++) {
        var A = C[g];
        do A = A(!0);
        while (A !== null);
      }
      (iI = null), (ze = !1);
    } catch (l) {
      throw (iI !== null && (iI = iI.slice(g + 1)), em(rc, $I), l);
    } finally {
      (U = I), (xn = !1);
    }
  }
  return null;
}
var KC = [],
  vC = 0,
  ae = null,
  ie = 0,
  xg = [],
  Eg = 0,
  ZC = null,
  bI = 1,
  uI = "";
function CC(g, I) {
  (KC[vC++] = ie), (KC[vC++] = ae), (ae = g), (ie = I);
}
function Nm(g, I, C) {
  (xg[Eg++] = bI), (xg[Eg++] = uI), (xg[Eg++] = ZC), (ZC = g);
  var A = bI;
  g = uI;
  var l = 32 - $g(A) - 1;
  (A &= ~(1 << l)), (C += 1);
  var e = 32 - $g(I) + l;
  if (30 < e) {
    var n = l - (l % 5);
    (e = (A & ((1 << n) - 1)).toString(32)),
      (A >>= n),
      (l -= n),
      (bI = (1 << (32 - $g(I) + l)) | (C << l) | A),
      (uI = e + g);
  } else (bI = (1 << e) | (C << l) | A), (uI = g);
}
function Jc(g) {
  g.return !== null && (CC(g, 1), Nm(g, 1, 0));
}
function Yc(g) {
  for (; g === ae; )
    (ae = KC[--vC]), (KC[vC] = null), (ie = KC[--vC]), (KC[vC] = null);
  for (; g === ZC; )
    (ZC = xg[--Eg]),
      (xg[Eg] = null),
      (uI = xg[--Eg]),
      (xg[Eg] = null),
      (bI = xg[--Eg]),
      (xg[Eg] = null);
}
var Fg = null,
  Ng = null,
  P = !1,
  _g = null;
function Fm(g, I) {
  var C = Mg(5, null, null, 0);
  (C.elementType = "DELETED"),
    (C.stateNode = I),
    (C.return = g),
    (I = g.deletions),
    I === null ? ((g.deletions = [C]), (g.flags |= 16)) : I.push(C);
}
function ot(g, I) {
  switch (g.tag) {
    case 5:
      var C = g.type;
      return (
        (I =
          I.nodeType !== 1 || C.toLowerCase() !== I.nodeName.toLowerCase()
            ? null
            : I),
        I !== null
          ? ((g.stateNode = I), (Fg = g), (Ng = xI(I.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (I = g.pendingProps === "" || I.nodeType !== 3 ? null : I),
        I !== null ? ((g.stateNode = I), (Fg = g), (Ng = null), !0) : !1
      );
    case 13:
      return (
        (I = I.nodeType !== 8 ? null : I),
        I !== null
          ? ((C = ZC !== null ? { id: bI, overflow: uI } : null),
            (g.memoizedState = {
              dehydrated: I,
              treeContext: C,
              retryLane: 1073741824,
            }),
            (C = Mg(18, null, null, 0)),
            (C.stateNode = I),
            (C.return = g),
            (g.child = C),
            (Fg = g),
            (Ng = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Kd(g) {
  return (g.mode & 1) !== 0 && (g.flags & 128) === 0;
}
function vd(g) {
  if (P) {
    var I = Ng;
    if (I) {
      var C = I;
      if (!ot(g, I)) {
        if (Kd(g)) throw Error(h(418));
        I = xI(C.nextSibling);
        var A = Fg;
        I && ot(g, I)
          ? Fm(A, C)
          : ((g.flags = (g.flags & -4097) | 2), (P = !1), (Fg = g));
      }
    } else {
      if (Kd(g)) throw Error(h(418));
      (g.flags = (g.flags & -4097) | 2), (P = !1), (Fg = g);
    }
  }
}
function tt(g) {
  for (g = g.return; g !== null && g.tag !== 5 && g.tag !== 3 && g.tag !== 13; )
    g = g.return;
  Fg = g;
}
function Hl(g) {
  if (g !== Fg) return !1;
  if (!P) return tt(g), (P = !0), !1;
  var I;
  if (
    ((I = g.tag !== 3) &&
      !(I = g.tag !== 5) &&
      ((I = g.type),
      (I = I !== "head" && I !== "body" && !Jd(g.type, g.memoizedProps))),
    I && (I = Ng))
  ) {
    if (Kd(g)) throw (wm(), Error(h(418)));
    for (; I; ) Fm(g, I), (I = xI(I.nextSibling));
  }
  if ((tt(g), g.tag === 13)) {
    if (((g = g.memoizedState), (g = g !== null ? g.dehydrated : null), !g))
      throw Error(h(317));
    g: {
      for (g = g.nextSibling, I = 0; g; ) {
        if (g.nodeType === 8) {
          var C = g.data;
          if (C === "/$") {
            if (I === 0) {
              Ng = xI(g.nextSibling);
              break g;
            }
            I--;
          } else (C !== "$" && C !== "$!" && C !== "$?") || I++;
        }
        g = g.nextSibling;
      }
      Ng = null;
    }
  } else Ng = Fg ? xI(g.stateNode.nextSibling) : null;
  return !0;
}
function wm() {
  for (var g = Ng; g; ) g = xI(g.nextSibling);
}
function jC() {
  (Ng = Fg = null), (P = !1);
}
function kc(g) {
  _g === null ? (_g = [g]) : _g.push(g);
}
var Hb = XI.ReactCurrentBatchConfig;
function Og(g, I) {
  if (g && g.defaultProps) {
    (I = _({}, I)), (g = g.defaultProps);
    for (var C in g) I[C] === void 0 && (I[C] = g[C]);
    return I;
  }
  return I;
}
var be = _I(null),
  ue = null,
  NC = null,
  Hc = null;
function Kc() {
  Hc = NC = ue = null;
}
function vc(g) {
  var I = be.current;
  L(be), (g._currentValue = I);
}
function Nd(g, I, C) {
  for (; g !== null; ) {
    var A = g.alternate;
    if (
      ((g.childLanes & I) !== I
        ? ((g.childLanes |= I), A !== null && (A.childLanes |= I))
        : A !== null && (A.childLanes & I) !== I && (A.childLanes |= I),
      g === C)
    )
      break;
    g = g.return;
  }
}
function xC(g, I) {
  (ue = g),
    (Hc = NC = null),
    (g = g.dependencies),
    g !== null &&
      g.firstContext !== null &&
      (g.lanes & I && (Rg = !0), (g.firstContext = null));
}
function Tg(g) {
  var I = g._currentValue;
  if (Hc !== g)
    if (((g = { context: g, memoizedValue: I, next: null }), NC === null)) {
      if (ue === null) throw Error(h(308));
      (NC = g), (ue.dependencies = { lanes: 0, firstContext: g });
    } else NC = NC.next = g;
  return I;
}
var nC = null;
function Nc(g) {
  nC === null ? (nC = [g]) : nC.push(g);
}
function fm(g, I, C, A) {
  var l = I.interleaved;
  return (
    l === null ? ((C.next = C), Nc(I)) : ((C.next = l.next), (l.next = C)),
    (I.interleaved = C),
    VI(g, A)
  );
}
function VI(g, I) {
  g.lanes |= I;
  var C = g.alternate;
  for (C !== null && (C.lanes |= I), C = g, g = g.return; g !== null; )
    (g.childLanes |= I),
      (C = g.alternate),
      C !== null && (C.childLanes |= I),
      (C = g),
      (g = g.return);
  return C.tag === 3 ? C.stateNode : null;
}
var KI = !1;
function Fc(g) {
  g.updateQueue = {
    baseState: g.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zm(g, I) {
  (g = g.updateQueue),
    I.updateQueue === g &&
      (I.updateQueue = {
        baseState: g.baseState,
        firstBaseUpdate: g.firstBaseUpdate,
        lastBaseUpdate: g.lastBaseUpdate,
        shared: g.shared,
        effects: g.effects,
      });
}
function sI(g, I) {
  return {
    eventTime: g,
    lane: I,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function EI(g, I, C) {
  var A = g.updateQueue;
  if (A === null) return null;
  if (((A = A.shared), w & 2)) {
    var l = A.pending;
    return (
      l === null ? (I.next = I) : ((I.next = l.next), (l.next = I)),
      (A.pending = I),
      VI(g, C)
    );
  }
  return (
    (l = A.interleaved),
    l === null ? ((I.next = I), Nc(A)) : ((I.next = l.next), (l.next = I)),
    (A.interleaved = I),
    VI(g, C)
  );
}
function Ml(g, I, C) {
  if (
    ((I = I.updateQueue), I !== null && ((I = I.shared), (C & 4194240) !== 0))
  ) {
    var A = I.lanes;
    (A &= g.pendingLanes), (C |= A), (I.lanes = C), yc(g, C);
  }
}
function Zt(g, I) {
  var C = g.updateQueue,
    A = g.alternate;
  if (A !== null && ((A = A.updateQueue), C === A)) {
    var l = null,
      e = null;
    if (((C = C.firstBaseUpdate), C !== null)) {
      do {
        var n = {
          eventTime: C.eventTime,
          lane: C.lane,
          tag: C.tag,
          payload: C.payload,
          callback: C.callback,
          next: null,
        };
        e === null ? (l = e = n) : (e = e.next = n), (C = C.next);
      } while (C !== null);
      e === null ? (l = e = I) : (e = e.next = I);
    } else l = e = I;
    (C = {
      baseState: A.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: e,
      shared: A.shared,
      effects: A.effects,
    }),
      (g.updateQueue = C);
    return;
  }
  (g = C.lastBaseUpdate),
    g === null ? (C.firstBaseUpdate = I) : (g.next = I),
    (C.lastBaseUpdate = I);
}
function se(g, I, C, A) {
  var l = g.updateQueue;
  KI = !1;
  var e = l.firstBaseUpdate,
    n = l.lastBaseUpdate,
    d = l.shared.pending;
  if (d !== null) {
    l.shared.pending = null;
    var c = d,
      o = c.next;
    (c.next = null), n === null ? (e = o) : (n.next = o), (n = c);
    var t = g.alternate;
    t !== null &&
      ((t = t.updateQueue),
      (d = t.lastBaseUpdate),
      d !== n &&
        (d === null ? (t.firstBaseUpdate = o) : (d.next = o),
        (t.lastBaseUpdate = c)));
  }
  if (e !== null) {
    var m = l.baseState;
    (n = 0), (t = o = c = null), (d = e);
    do {
      var G = d.lane,
        s = d.eventTime;
      if ((A & G) === G) {
        t !== null &&
          (t = t.next =
            {
              eventTime: s,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            });
        g: {
          var i = g,
            b = d;
          switch (((G = I), (s = C), b.tag)) {
            case 1:
              if (((i = b.payload), typeof i == "function")) {
                m = i.call(s, m, G);
                break g;
              }
              m = i;
              break g;
            case 3:
              i.flags = (i.flags & -65537) | 128;
            case 0:
              if (
                ((i = b.payload),
                (G = typeof i == "function" ? i.call(s, m, G) : i),
                G == null)
              )
                break g;
              m = _({}, m, G);
              break g;
            case 2:
              KI = !0;
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((g.flags |= 64),
          (G = l.effects),
          G === null ? (l.effects = [d]) : G.push(d));
      } else
        (s = {
          eventTime: s,
          lane: G,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null,
        }),
          t === null ? ((o = t = s), (c = m)) : (t = t.next = s),
          (n |= G);
      if (((d = d.next), d === null)) {
        if (((d = l.shared.pending), d === null)) break;
        (G = d),
          (d = G.next),
          (G.next = null),
          (l.lastBaseUpdate = G),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (t === null && (c = m),
      (l.baseState = c),
      (l.firstBaseUpdate = o),
      (l.lastBaseUpdate = t),
      (I = l.shared.interleaved),
      I !== null)
    ) {
      l = I;
      do (n |= l.lane), (l = l.next);
      while (l !== I);
    } else e === null && (l.shared.lanes = 0);
    (GC |= n), (g.lanes = n), (g.memoizedState = m);
  }
}
function mt(g, I, C) {
  if (((g = I.effects), (I.effects = null), g !== null))
    for (I = 0; I < g.length; I++) {
      var A = g[I],
        l = A.callback;
      if (l !== null) {
        if (((A.callback = null), (A = C), typeof l != "function"))
          throw Error(h(191, l));
        l.call(A);
      }
    }
}
var Qm = new fZ.Component().refs;
function Fd(g, I, C, A) {
  (I = g.memoizedState),
    (C = C(A, I)),
    (C = C == null ? I : _({}, I, C)),
    (g.memoizedState = C),
    g.lanes === 0 && (g.updateQueue.baseState = C);
}
var Qe = {
  isMounted: function (g) {
    return (g = g._reactInternals) ? bC(g) === g : !1;
  },
  enqueueSetState: function (g, I, C) {
    g = g._reactInternals;
    var A = Sg(),
      l = LI(g),
      e = sI(A, l);
    (e.payload = I),
      C != null && (e.callback = C),
      (I = EI(g, e, l)),
      I !== null && (gI(I, g, l, A), Ml(I, g, l));
  },
  enqueueReplaceState: function (g, I, C) {
    g = g._reactInternals;
    var A = Sg(),
      l = LI(g),
      e = sI(A, l);
    (e.tag = 1),
      (e.payload = I),
      C != null && (e.callback = C),
      (I = EI(g, e, l)),
      I !== null && (gI(I, g, l, A), Ml(I, g, l));
  },
  enqueueForceUpdate: function (g, I) {
    g = g._reactInternals;
    var C = Sg(),
      A = LI(g),
      l = sI(C, A);
    (l.tag = 2),
      I != null && (l.callback = I),
      (I = EI(g, l, A)),
      I !== null && (gI(I, g, A, C), Ml(I, g, A));
  },
};
function Gt(g, I, C, A, l, e, n) {
  return (
    (g = g.stateNode),
    typeof g.shouldComponentUpdate == "function"
      ? g.shouldComponentUpdate(A, e, n)
      : I.prototype && I.prototype.isPureReactComponent
      ? !LA(C, A) || !LA(l, e)
      : !0
  );
}
function Um(g, I, C) {
  var A = !1,
    l = OI,
    e = I.contextType;
  return (
    typeof e == "object" && e !== null
      ? (e = Tg(e))
      : ((l = Yg(I) ? tC : Wg.current),
        (A = I.contextTypes),
        (e = (A = A != null) ? TC(g, l) : OI)),
    (I = new I(C, e)),
    (g.memoizedState = I.state !== null && I.state !== void 0 ? I.state : null),
    (I.updater = Qe),
    (g.stateNode = I),
    (I._reactInternals = g),
    A &&
      ((g = g.stateNode),
      (g.__reactInternalMemoizedUnmaskedChildContext = l),
      (g.__reactInternalMemoizedMaskedChildContext = e)),
    I
  );
}
function at(g, I, C, A) {
  (g = I.state),
    typeof I.componentWillReceiveProps == "function" &&
      I.componentWillReceiveProps(C, A),
    typeof I.UNSAFE_componentWillReceiveProps == "function" &&
      I.UNSAFE_componentWillReceiveProps(C, A),
    I.state !== g && Qe.enqueueReplaceState(I, I.state, null);
}
function wd(g, I, C, A) {
  var l = g.stateNode;
  (l.props = C), (l.state = g.memoizedState), (l.refs = Qm), Fc(g);
  var e = I.contextType;
  typeof e == "object" && e !== null
    ? (l.context = Tg(e))
    : ((e = Yg(I) ? tC : Wg.current), (l.context = TC(g, e))),
    (l.state = g.memoizedState),
    (e = I.getDerivedStateFromProps),
    typeof e == "function" && (Fd(g, I, e, C), (l.state = g.memoizedState)),
    typeof I.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((I = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      I !== l.state && Qe.enqueueReplaceState(l, l.state, null),
      se(g, C, l, A),
      (l.state = g.memoizedState)),
    typeof l.componentDidMount == "function" && (g.flags |= 4194308);
}
function sA(g, I, C) {
  if (
    ((g = C.ref), g !== null && typeof g != "function" && typeof g != "object")
  ) {
    if (C._owner) {
      if (((C = C._owner), C)) {
        if (C.tag !== 1) throw Error(h(309));
        var A = C.stateNode;
      }
      if (!A) throw Error(h(147, g));
      var l = A,
        e = "" + g;
      return I !== null &&
        I.ref !== null &&
        typeof I.ref == "function" &&
        I.ref._stringRef === e
        ? I.ref
        : ((I = function (n) {
            var d = l.refs;
            d === Qm && (d = l.refs = {}),
              n === null ? delete d[e] : (d[e] = n);
          }),
          (I._stringRef = e),
          I);
    }
    if (typeof g != "string") throw Error(h(284));
    if (!C._owner) throw Error(h(290, g));
  }
  return g;
}
function Kl(g, I) {
  throw (
    ((g = Object.prototype.toString.call(I)),
    Error(
      h(
        31,
        g === "[object Object]"
          ? "object with keys {" + Object.keys(I).join(", ") + "}"
          : g
      )
    ))
  );
}
function it(g) {
  var I = g._init;
  return I(g._payload);
}
function xm(g) {
  function I(a, Z) {
    if (g) {
      var u = a.deletions;
      u === null ? ((a.deletions = [Z]), (a.flags |= 16)) : u.push(Z);
    }
  }
  function C(a, Z) {
    if (!g) return null;
    for (; Z !== null; ) I(a, Z), (Z = Z.sibling);
    return null;
  }
  function A(a, Z) {
    for (a = new Map(); Z !== null; )
      Z.key !== null ? a.set(Z.key, Z) : a.set(Z.index, Z), (Z = Z.sibling);
    return a;
  }
  function l(a, Z) {
    return (a = DI(a, Z)), (a.index = 0), (a.sibling = null), a;
  }
  function e(a, Z, u) {
    return (
      (a.index = u),
      g
        ? ((u = a.alternate),
          u !== null
            ? ((u = u.index), u < Z ? ((a.flags |= 2), Z) : u)
            : ((a.flags |= 2), Z))
        : ((a.flags |= 1048576), Z)
    );
  }
  function n(a) {
    return g && a.alternate === null && (a.flags |= 2), a;
  }
  function d(a, Z, u, r) {
    return Z === null || Z.tag !== 6
      ? ((Z = Pn(u, a.mode, r)), (Z.return = a), Z)
      : ((Z = l(Z, u)), (Z.return = a), Z);
  }
  function c(a, Z, u, r) {
    var X = u.type;
    return X === pC
      ? t(a, Z, u.props.children, r, u.key)
      : Z !== null &&
        (Z.elementType === X ||
          (typeof X == "object" &&
            X !== null &&
            X.$$typeof === HI &&
            it(X) === Z.type))
      ? ((r = l(Z, u.props)), (r.ref = sA(a, Z, u)), (r.return = a), r)
      : ((r = Ol(u.type, u.key, u.props, null, a.mode, r)),
        (r.ref = sA(a, Z, u)),
        (r.return = a),
        r);
  }
  function o(a, Z, u, r) {
    return Z === null ||
      Z.tag !== 4 ||
      Z.stateNode.containerInfo !== u.containerInfo ||
      Z.stateNode.implementation !== u.implementation
      ? ((Z = On(u, a.mode, r)), (Z.return = a), Z)
      : ((Z = l(Z, u.children || [])), (Z.return = a), Z);
  }
  function t(a, Z, u, r, X) {
    return Z === null || Z.tag !== 7
      ? ((Z = oC(u, a.mode, r, X)), (Z.return = a), Z)
      : ((Z = l(Z, u)), (Z.return = a), Z);
  }
  function m(a, Z, u) {
    if ((typeof Z == "string" && Z !== "") || typeof Z == "number")
      return (Z = Pn("" + Z, a.mode, u)), (Z.return = a), Z;
    if (typeof Z == "object" && Z !== null) {
      switch (Z.$$typeof) {
        case Wl:
          return (
            (u = Ol(Z.type, Z.key, Z.props, null, a.mode, u)),
            (u.ref = sA(a, null, Z)),
            (u.return = a),
            u
          );
        case XC:
          return (Z = On(Z, a.mode, u)), (Z.return = a), Z;
        case HI:
          var r = Z._init;
          return m(a, r(Z._payload), u);
      }
      if (hA(Z) || GA(Z))
        return (Z = oC(Z, a.mode, u, null)), (Z.return = a), Z;
      Kl(a, Z);
    }
    return null;
  }
  function G(a, Z, u, r) {
    var X = Z !== null ? Z.key : null;
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return X !== null ? null : d(a, Z, "" + u, r);
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Wl:
          return u.key === X ? c(a, Z, u, r) : null;
        case XC:
          return u.key === X ? o(a, Z, u, r) : null;
        case HI:
          return (X = u._init), G(a, Z, X(u._payload), r);
      }
      if (hA(u) || GA(u)) return X !== null ? null : t(a, Z, u, r, null);
      Kl(a, u);
    }
    return null;
  }
  function s(a, Z, u, r, X) {
    if ((typeof r == "string" && r !== "") || typeof r == "number")
      return (a = a.get(u) || null), d(Z, a, "" + r, X);
    if (typeof r == "object" && r !== null) {
      switch (r.$$typeof) {
        case Wl:
          return (a = a.get(r.key === null ? u : r.key) || null), c(Z, a, r, X);
        case XC:
          return (a = a.get(r.key === null ? u : r.key) || null), o(Z, a, r, X);
        case HI:
          var R = r._init;
          return s(a, Z, u, R(r._payload), X);
      }
      if (hA(r) || GA(r)) return (a = a.get(u) || null), t(Z, a, r, X, null);
      Kl(Z, r);
    }
    return null;
  }
  function i(a, Z, u, r) {
    for (
      var X = null, R = null, B = Z, p = (Z = 0), H = null;
      B !== null && p < u.length;
      p++
    ) {
      B.index > p ? ((H = B), (B = null)) : (H = B.sibling);
      var k = G(a, B, u[p], r);
      if (k === null) {
        B === null && (B = H);
        break;
      }
      g && B && k.alternate === null && I(a, B),
        (Z = e(k, Z, p)),
        R === null ? (X = k) : (R.sibling = k),
        (R = k),
        (B = H);
    }
    if (p === u.length) return C(a, B), P && CC(a, p), X;
    if (B === null) {
      for (; p < u.length; p++)
        (B = m(a, u[p], r)),
          B !== null &&
            ((Z = e(B, Z, p)), R === null ? (X = B) : (R.sibling = B), (R = B));
      return P && CC(a, p), X;
    }
    for (B = A(a, B); p < u.length; p++)
      (H = s(B, a, p, u[p], r)),
        H !== null &&
          (g && H.alternate !== null && B.delete(H.key === null ? p : H.key),
          (Z = e(H, Z, p)),
          R === null ? (X = H) : (R.sibling = H),
          (R = H));
    return (
      g &&
        B.forEach(function (T) {
          return I(a, T);
        }),
      P && CC(a, p),
      X
    );
  }
  function b(a, Z, u, r) {
    var X = GA(u);
    if (typeof X != "function") throw Error(h(150));
    if (((u = X.call(u)), u == null)) throw Error(h(151));
    for (
      var R = (X = null), B = Z, p = (Z = 0), H = null, k = u.next();
      B !== null && !k.done;
      p++, k = u.next()
    ) {
      B.index > p ? ((H = B), (B = null)) : (H = B.sibling);
      var T = G(a, B, k.value, r);
      if (T === null) {
        B === null && (B = H);
        break;
      }
      g && B && T.alternate === null && I(a, B),
        (Z = e(T, Z, p)),
        R === null ? (X = T) : (R.sibling = T),
        (R = T),
        (B = H);
    }
    if (k.done) return C(a, B), P && CC(a, p), X;
    if (B === null) {
      for (; !k.done; p++, k = u.next())
        (k = m(a, k.value, r)),
          k !== null &&
            ((Z = e(k, Z, p)), R === null ? (X = k) : (R.sibling = k), (R = k));
      return P && CC(a, p), X;
    }
    for (B = A(a, B); !k.done; p++, k = u.next())
      (k = s(B, a, p, k.value, r)),
        k !== null &&
          (g && k.alternate !== null && B.delete(k.key === null ? p : k.key),
          (Z = e(k, Z, p)),
          R === null ? (X = k) : (R.sibling = k),
          (R = k));
    return (
      g &&
        B.forEach(function (CI) {
          return I(a, CI);
        }),
      P && CC(a, p),
      X
    );
  }
  function V(a, Z, u, r) {
    if (
      (typeof u == "object" &&
        u !== null &&
        u.type === pC &&
        u.key === null &&
        (u = u.props.children),
      typeof u == "object" && u !== null)
    ) {
      switch (u.$$typeof) {
        case Wl:
          g: {
            for (var X = u.key, R = Z; R !== null; ) {
              if (R.key === X) {
                if (((X = u.type), X === pC)) {
                  if (R.tag === 7) {
                    C(a, R.sibling),
                      (Z = l(R, u.props.children)),
                      (Z.return = a),
                      (a = Z);
                    break g;
                  }
                } else if (
                  R.elementType === X ||
                  (typeof X == "object" &&
                    X !== null &&
                    X.$$typeof === HI &&
                    it(X) === R.type)
                ) {
                  C(a, R.sibling),
                    (Z = l(R, u.props)),
                    (Z.ref = sA(a, R, u)),
                    (Z.return = a),
                    (a = Z);
                  break g;
                }
                C(a, R);
                break;
              } else I(a, R);
              R = R.sibling;
            }
            u.type === pC
              ? ((Z = oC(u.props.children, a.mode, r, u.key)),
                (Z.return = a),
                (a = Z))
              : ((r = Ol(u.type, u.key, u.props, null, a.mode, r)),
                (r.ref = sA(a, Z, u)),
                (r.return = a),
                (a = r));
          }
          return n(a);
        case XC:
          g: {
            for (R = u.key; Z !== null; ) {
              if (Z.key === R)
                if (
                  Z.tag === 4 &&
                  Z.stateNode.containerInfo === u.containerInfo &&
                  Z.stateNode.implementation === u.implementation
                ) {
                  C(a, Z.sibling),
                    (Z = l(Z, u.children || [])),
                    (Z.return = a),
                    (a = Z);
                  break g;
                } else {
                  C(a, Z);
                  break;
                }
              else I(a, Z);
              Z = Z.sibling;
            }
            (Z = On(u, a.mode, r)), (Z.return = a), (a = Z);
          }
          return n(a);
        case HI:
          return (R = u._init), V(a, Z, R(u._payload), r);
      }
      if (hA(u)) return i(a, Z, u, r);
      if (GA(u)) return b(a, Z, u, r);
      Kl(a, u);
    }
    return (typeof u == "string" && u !== "") || typeof u == "number"
      ? ((u = "" + u),
        Z !== null && Z.tag === 6
          ? (C(a, Z.sibling), (Z = l(Z, u)), (Z.return = a), (a = Z))
          : (C(a, Z), (Z = Pn(u, a.mode, r)), (Z.return = a), (a = Z)),
        n(a))
      : C(a, Z);
  }
  return V;
}
var PC = xm(!0),
  Em = xm(!1),
  ml = {},
  ZI = _I(ml),
  PA = _I(ml),
  OA = _I(ml);
function dC(g) {
  if (g === ml) throw Error(h(174));
  return g;
}
function wc(g, I) {
  switch ((E(OA, I), E(PA, g), E(ZI, ml), (g = I.nodeType), g)) {
    case 9:
    case 11:
      I = (I = I.documentElement) ? I.namespaceURI : id(null, "");
      break;
    default:
      (g = g === 8 ? I.parentNode : I),
        (I = g.namespaceURI || null),
        (g = g.tagName),
        (I = id(I, g));
  }
  L(ZI), E(ZI, I);
}
function OC() {
  L(ZI), L(PA), L(OA);
}
function Mm(g) {
  dC(OA.current);
  var I = dC(ZI.current),
    C = id(I, g.type);
  I !== C && (E(PA, g), E(ZI, C));
}
function fc(g) {
  PA.current === g && (L(ZI), L(PA));
}
var O = _I(0);
function Be(g) {
  for (var I = g; I !== null; ) {
    if (I.tag === 13) {
      var C = I.memoizedState;
      if (
        C !== null &&
        ((C = C.dehydrated), C === null || C.data === "$?" || C.data === "$!")
      )
        return I;
    } else if (I.tag === 19 && I.memoizedProps.revealOrder !== void 0) {
      if (I.flags & 128) return I;
    } else if (I.child !== null) {
      (I.child.return = I), (I = I.child);
      continue;
    }
    if (I === g) break;
    for (; I.sibling === null; ) {
      if (I.return === null || I.return === g) return null;
      I = I.return;
    }
    (I.sibling.return = I.return), (I = I.sibling);
  }
  return null;
}
var En = [];
function zc() {
  for (var g = 0; g < En.length; g++)
    En[g]._workInProgressVersionPrimary = null;
  En.length = 0;
}
var Ll = XI.ReactCurrentDispatcher,
  Mn = XI.ReactCurrentBatchConfig,
  mC = 0,
  q = null,
  cg = null,
  Zg = null,
  re = !1,
  KA = !1,
  qA = 0,
  Kb = 0;
function sg() {
  throw Error(h(321));
}
function Qc(g, I) {
  if (I === null) return !1;
  for (var C = 0; C < I.length && C < g.length; C++)
    if (!II(g[C], I[C])) return !1;
  return !0;
}
function Uc(g, I, C, A, l, e) {
  if (
    ((mC = e),
    (q = I),
    (I.memoizedState = null),
    (I.updateQueue = null),
    (I.lanes = 0),
    (Ll.current = g === null || g.memoizedState === null ? wb : fb),
    (g = C(A, l)),
    KA)
  ) {
    e = 0;
    do {
      if (((KA = !1), (qA = 0), 25 <= e)) throw Error(h(301));
      (e += 1),
        (Zg = cg = null),
        (I.updateQueue = null),
        (Ll.current = zb),
        (g = C(A, l));
    } while (KA);
  }
  if (
    ((Ll.current = ye),
    (I = cg !== null && cg.next !== null),
    (mC = 0),
    (Zg = cg = q = null),
    (re = !1),
    I)
  )
    throw Error(h(300));
  return g;
}
function xc() {
  var g = qA !== 0;
  return (qA = 0), g;
}
function lI() {
  var g = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Zg === null ? (q.memoizedState = Zg = g) : (Zg = Zg.next = g), Zg;
}
function jg() {
  if (cg === null) {
    var g = q.alternate;
    g = g !== null ? g.memoizedState : null;
  } else g = cg.next;
  var I = Zg === null ? q.memoizedState : Zg.next;
  if (I !== null) (Zg = I), (cg = g);
  else {
    if (g === null) throw Error(h(310));
    (cg = g),
      (g = {
        memoizedState: cg.memoizedState,
        baseState: cg.baseState,
        baseQueue: cg.baseQueue,
        queue: cg.queue,
        next: null,
      }),
      Zg === null ? (q.memoizedState = Zg = g) : (Zg = Zg.next = g);
  }
  return Zg;
}
function _A(g, I) {
  return typeof I == "function" ? I(g) : I;
}
function Ln(g) {
  var I = jg(),
    C = I.queue;
  if (C === null) throw Error(h(311));
  C.lastRenderedReducer = g;
  var A = cg,
    l = A.baseQueue,
    e = C.pending;
  if (e !== null) {
    if (l !== null) {
      var n = l.next;
      (l.next = e.next), (e.next = n);
    }
    (A.baseQueue = l = e), (C.pending = null);
  }
  if (l !== null) {
    (e = l.next), (A = A.baseState);
    var d = (n = null),
      c = null,
      o = e;
    do {
      var t = o.lane;
      if ((mC & t) === t)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: o.action,
              hasEagerState: o.hasEagerState,
              eagerState: o.eagerState,
              next: null,
            }),
          (A = o.hasEagerState ? o.eagerState : g(A, o.action));
      else {
        var m = {
          lane: t,
          action: o.action,
          hasEagerState: o.hasEagerState,
          eagerState: o.eagerState,
          next: null,
        };
        c === null ? ((d = c = m), (n = A)) : (c = c.next = m),
          (q.lanes |= t),
          (GC |= t);
      }
      o = o.next;
    } while (o !== null && o !== e);
    c === null ? (n = A) : (c.next = d),
      II(A, I.memoizedState) || (Rg = !0),
      (I.memoizedState = A),
      (I.baseState = n),
      (I.baseQueue = c),
      (C.lastRenderedState = A);
  }
  if (((g = C.interleaved), g !== null)) {
    l = g;
    do (e = l.lane), (q.lanes |= e), (GC |= e), (l = l.next);
    while (l !== g);
  } else l === null && (C.lanes = 0);
  return [I.memoizedState, C.dispatch];
}
function Dn(g) {
  var I = jg(),
    C = I.queue;
  if (C === null) throw Error(h(311));
  C.lastRenderedReducer = g;
  var A = C.dispatch,
    l = C.pending,
    e = I.memoizedState;
  if (l !== null) {
    C.pending = null;
    var n = (l = l.next);
    do (e = g(e, n.action)), (n = n.next);
    while (n !== l);
    II(e, I.memoizedState) || (Rg = !0),
      (I.memoizedState = e),
      I.baseQueue === null && (I.baseState = e),
      (C.lastRenderedState = e);
  }
  return [e, A];
}
function Lm() {}
function Dm(g, I) {
  var C = q,
    A = jg(),
    l = I(),
    e = !II(A.memoizedState, l);
  if (
    (e && ((A.memoizedState = l), (Rg = !0)),
    (A = A.queue),
    Ec(Pm.bind(null, C, A, g), [g]),
    A.getSnapshot !== I || e || (Zg !== null && Zg.memoizedState.tag & 1))
  ) {
    if (
      ((C.flags |= 2048),
      $A(9, jm.bind(null, C, A, l, I), void 0, null),
      mg === null)
    )
      throw Error(h(349));
    mC & 30 || Tm(C, I, l);
  }
  return l;
}
function Tm(g, I, C) {
  (g.flags |= 16384),
    (g = { getSnapshot: I, value: C }),
    (I = q.updateQueue),
    I === null
      ? ((I = { lastEffect: null, stores: null }),
        (q.updateQueue = I),
        (I.stores = [g]))
      : ((C = I.stores), C === null ? (I.stores = [g]) : C.push(g));
}
function jm(g, I, C, A) {
  (I.value = C), (I.getSnapshot = A), Om(I) && qm(g);
}
function Pm(g, I, C) {
  return C(function () {
    Om(I) && qm(g);
  });
}
function Om(g) {
  var I = g.getSnapshot;
  g = g.value;
  try {
    var C = I();
    return !II(g, C);
  } catch {
    return !0;
  }
}
function qm(g) {
  var I = VI(g, 1);
  I !== null && gI(I, g, 1, -1);
}
function bt(g) {
  var I = lI();
  return (
    typeof g == "function" && (g = g()),
    (I.memoizedState = I.baseState = g),
    (g = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _A,
      lastRenderedState: g,
    }),
    (I.queue = g),
    (g = g.dispatch = Fb.bind(null, q, g)),
    [I.memoizedState, g]
  );
}
function $A(g, I, C, A) {
  return (
    (g = { tag: g, create: I, destroy: C, deps: A, next: null }),
    (I = q.updateQueue),
    I === null
      ? ((I = { lastEffect: null, stores: null }),
        (q.updateQueue = I),
        (I.lastEffect = g.next = g))
      : ((C = I.lastEffect),
        C === null
          ? (I.lastEffect = g.next = g)
          : ((A = C.next), (C.next = g), (g.next = A), (I.lastEffect = g))),
    g
  );
}
function _m() {
  return jg().memoizedState;
}
function Dl(g, I, C, A) {
  var l = lI();
  (q.flags |= g),
    (l.memoizedState = $A(1 | I, C, void 0, A === void 0 ? null : A));
}
function Ue(g, I, C, A) {
  var l = jg();
  A = A === void 0 ? null : A;
  var e = void 0;
  if (cg !== null) {
    var n = cg.memoizedState;
    if (((e = n.destroy), A !== null && Qc(A, n.deps))) {
      l.memoizedState = $A(I, C, e, A);
      return;
    }
  }
  (q.flags |= g), (l.memoizedState = $A(1 | I, C, e, A));
}
function ut(g, I) {
  return Dl(8390656, 8, g, I);
}
function Ec(g, I) {
  return Ue(2048, 8, g, I);
}
function $m(g, I) {
  return Ue(4, 2, g, I);
}
function gG(g, I) {
  return Ue(4, 4, g, I);
}
function IG(g, I) {
  if (typeof I == "function")
    return (
      (g = g()),
      I(g),
      function () {
        I(null);
      }
    );
  if (I != null)
    return (
      (g = g()),
      (I.current = g),
      function () {
        I.current = null;
      }
    );
}
function CG(g, I, C) {
  return (
    (C = C != null ? C.concat([g]) : null), Ue(4, 4, IG.bind(null, I, g), C)
  );
}
function Mc() {}
function AG(g, I) {
  var C = jg();
  I = I === void 0 ? null : I;
  var A = C.memoizedState;
  return A !== null && I !== null && Qc(I, A[1])
    ? A[0]
    : ((C.memoizedState = [g, I]), g);
}
function lG(g, I) {
  var C = jg();
  I = I === void 0 ? null : I;
  var A = C.memoizedState;
  return A !== null && I !== null && Qc(I, A[1])
    ? A[0]
    : ((g = g()), (C.memoizedState = [g, I]), g);
}
function eG(g, I, C) {
  return mC & 21
    ? (II(C, I) || ((C = cm()), (q.lanes |= C), (GC |= C), (g.baseState = !0)),
      I)
    : (g.baseState && ((g.baseState = !1), (Rg = !0)), (g.memoizedState = C));
}
function vb(g, I) {
  var C = U;
  (U = C !== 0 && 4 > C ? C : 4), g(!0);
  var A = Mn.transition;
  Mn.transition = {};
  try {
    g(!1), I();
  } finally {
    (U = C), (Mn.transition = A);
  }
}
function nG() {
  return jg().memoizedState;
}
function Nb(g, I, C) {
  var A = LI(g);
  if (
    ((C = {
      lane: A,
      action: C,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dG(g))
  )
    cG(I, C);
  else if (((C = fm(g, I, C, A)), C !== null)) {
    var l = Sg();
    gI(C, g, A, l), oG(C, I, A);
  }
}
function Fb(g, I, C) {
  var A = LI(g),
    l = { lane: A, action: C, hasEagerState: !1, eagerState: null, next: null };
  if (dG(g)) cG(I, l);
  else {
    var e = g.alternate;
    if (
      g.lanes === 0 &&
      (e === null || e.lanes === 0) &&
      ((e = I.lastRenderedReducer), e !== null)
    )
      try {
        var n = I.lastRenderedState,
          d = e(n, C);
        if (((l.hasEagerState = !0), (l.eagerState = d), II(d, n))) {
          var c = I.interleaved;
          c === null
            ? ((l.next = l), Nc(I))
            : ((l.next = c.next), (c.next = l)),
            (I.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (C = fm(g, I, l, A)),
      C !== null && ((l = Sg()), gI(C, g, A, l), oG(C, I, A));
  }
}
function dG(g) {
  var I = g.alternate;
  return g === q || (I !== null && I === q);
}
function cG(g, I) {
  KA = re = !0;
  var C = g.pending;
  C === null ? (I.next = I) : ((I.next = C.next), (C.next = I)),
    (g.pending = I);
}
function oG(g, I, C) {
  if (C & 4194240) {
    var A = I.lanes;
    (A &= g.pendingLanes), (C |= A), (I.lanes = C), yc(g, C);
  }
}
var ye = {
    readContext: Tg,
    useCallback: sg,
    useContext: sg,
    useEffect: sg,
    useImperativeHandle: sg,
    useInsertionEffect: sg,
    useLayoutEffect: sg,
    useMemo: sg,
    useReducer: sg,
    useRef: sg,
    useState: sg,
    useDebugValue: sg,
    useDeferredValue: sg,
    useTransition: sg,
    useMutableSource: sg,
    useSyncExternalStore: sg,
    useId: sg,
    unstable_isNewReconciler: !1,
  },
  wb = {
    readContext: Tg,
    useCallback: function (g, I) {
      return (lI().memoizedState = [g, I === void 0 ? null : I]), g;
    },
    useContext: Tg,
    useEffect: ut,
    useImperativeHandle: function (g, I, C) {
      return (
        (C = C != null ? C.concat([g]) : null),
        Dl(4194308, 4, IG.bind(null, I, g), C)
      );
    },
    useLayoutEffect: function (g, I) {
      return Dl(4194308, 4, g, I);
    },
    useInsertionEffect: function (g, I) {
      return Dl(4, 2, g, I);
    },
    useMemo: function (g, I) {
      var C = lI();
      return (
        (I = I === void 0 ? null : I), (g = g()), (C.memoizedState = [g, I]), g
      );
    },
    useReducer: function (g, I, C) {
      var A = lI();
      return (
        (I = C !== void 0 ? C(I) : I),
        (A.memoizedState = A.baseState = I),
        (g = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: g,
          lastRenderedState: I,
        }),
        (A.queue = g),
        (g = g.dispatch = Nb.bind(null, q, g)),
        [A.memoizedState, g]
      );
    },
    useRef: function (g) {
      var I = lI();
      return (g = { current: g }), (I.memoizedState = g);
    },
    useState: bt,
    useDebugValue: Mc,
    useDeferredValue: function (g) {
      return (lI().memoizedState = g);
    },
    useTransition: function () {
      var g = bt(!1),
        I = g[0];
      return (g = vb.bind(null, g[1])), (lI().memoizedState = g), [I, g];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (g, I, C) {
      var A = q,
        l = lI();
      if (P) {
        if (C === void 0) throw Error(h(407));
        C = C();
      } else {
        if (((C = I()), mg === null)) throw Error(h(349));
        mC & 30 || Tm(A, I, C);
      }
      l.memoizedState = C;
      var e = { value: C, getSnapshot: I };
      return (
        (l.queue = e),
        ut(Pm.bind(null, A, e, g), [g]),
        (A.flags |= 2048),
        $A(9, jm.bind(null, A, e, C, I), void 0, null),
        C
      );
    },
    useId: function () {
      var g = lI(),
        I = mg.identifierPrefix;
      if (P) {
        var C = uI,
          A = bI;
        (C = (A & ~(1 << (32 - $g(A) - 1))).toString(32) + C),
          (I = ":" + I + "R" + C),
          (C = qA++),
          0 < C && (I += "H" + C.toString(32)),
          (I += ":");
      } else (C = Kb++), (I = ":" + I + "r" + C.toString(32) + ":");
      return (g.memoizedState = I);
    },
    unstable_isNewReconciler: !1,
  },
  fb = {
    readContext: Tg,
    useCallback: AG,
    useContext: Tg,
    useEffect: Ec,
    useImperativeHandle: CG,
    useInsertionEffect: $m,
    useLayoutEffect: gG,
    useMemo: lG,
    useReducer: Ln,
    useRef: _m,
    useState: function () {
      return Ln(_A);
    },
    useDebugValue: Mc,
    useDeferredValue: function (g) {
      var I = jg();
      return eG(I, cg.memoizedState, g);
    },
    useTransition: function () {
      var g = Ln(_A)[0],
        I = jg().memoizedState;
      return [g, I];
    },
    useMutableSource: Lm,
    useSyncExternalStore: Dm,
    useId: nG,
    unstable_isNewReconciler: !1,
  },
  zb = {
    readContext: Tg,
    useCallback: AG,
    useContext: Tg,
    useEffect: Ec,
    useImperativeHandle: CG,
    useInsertionEffect: $m,
    useLayoutEffect: gG,
    useMemo: lG,
    useReducer: Dn,
    useRef: _m,
    useState: function () {
      return Dn(_A);
    },
    useDebugValue: Mc,
    useDeferredValue: function (g) {
      var I = jg();
      return cg === null ? (I.memoizedState = g) : eG(I, cg.memoizedState, g);
    },
    useTransition: function () {
      var g = Dn(_A)[0],
        I = jg().memoizedState;
      return [g, I];
    },
    useMutableSource: Lm,
    useSyncExternalStore: Dm,
    useId: nG,
    unstable_isNewReconciler: !1,
  };
function qC(g, I) {
  try {
    var C = "",
      A = I;
    do (C += Gi(A)), (A = A.return);
    while (A);
    var l = C;
  } catch (e) {
    l =
      `
Error generating stack: ` +
      e.message +
      `
` +
      e.stack;
  }
  return { value: g, source: I, stack: l, digest: null };
}
function Tn(g, I, C) {
  return { value: g, source: null, stack: C ?? null, digest: I ?? null };
}
function fd(g, I) {
  try {
    console.error(I.value);
  } catch (C) {
    setTimeout(function () {
      throw C;
    });
  }
}
var Qb = typeof WeakMap == "function" ? WeakMap : Map;
function tG(g, I, C) {
  (C = sI(-1, C)), (C.tag = 3), (C.payload = { element: null });
  var A = I.value;
  return (
    (C.callback = function () {
      Ve || ((Ve = !0), (jd = A)), fd(g, I);
    }),
    C
  );
}
function ZG(g, I, C) {
  (C = sI(-1, C)), (C.tag = 3);
  var A = g.type.getDerivedStateFromError;
  if (typeof A == "function") {
    var l = I.value;
    (C.payload = function () {
      return A(l);
    }),
      (C.callback = function () {
        fd(g, I);
      });
  }
  var e = g.stateNode;
  return (
    e !== null &&
      typeof e.componentDidCatch == "function" &&
      (C.callback = function () {
        fd(g, I),
          typeof A != "function" &&
            (MI === null ? (MI = new Set([this])) : MI.add(this));
        var n = I.stack;
        this.componentDidCatch(I.value, {
          componentStack: n !== null ? n : "",
        });
      }),
    C
  );
}
function st(g, I, C) {
  var A = g.pingCache;
  if (A === null) {
    A = g.pingCache = new Qb();
    var l = new Set();
    A.set(I, l);
  } else (l = A.get(I)), l === void 0 && ((l = new Set()), A.set(I, l));
  l.has(C) || (l.add(C), (g = gu.bind(null, g, I, C)), I.then(g, g));
}
function Bt(g) {
  do {
    var I;
    if (
      ((I = g.tag === 13) &&
        ((I = g.memoizedState), (I = I !== null ? I.dehydrated !== null : !0)),
      I)
    )
      return g;
    g = g.return;
  } while (g !== null);
  return null;
}
function rt(g, I, C, A, l) {
  return g.mode & 1
    ? ((g.flags |= 65536), (g.lanes = l), g)
    : (g === I
        ? (g.flags |= 65536)
        : ((g.flags |= 128),
          (C.flags |= 131072),
          (C.flags &= -52805),
          C.tag === 1 &&
            (C.alternate === null
              ? (C.tag = 17)
              : ((I = sI(-1, 1)), (I.tag = 2), EI(C, I, 1))),
          (C.lanes |= 1)),
      g);
}
var Ub = XI.ReactCurrentOwner,
  Rg = !1;
function Vg(g, I, C, A) {
  I.child = g === null ? Em(I, null, C, A) : PC(I, g.child, C, A);
}
function yt(g, I, C, A, l) {
  C = C.render;
  var e = I.ref;
  return (
    xC(I, l),
    (A = Uc(g, I, C, A, e, l)),
    (C = xc()),
    g !== null && !Rg
      ? ((I.updateQueue = g.updateQueue),
        (I.flags &= -2053),
        (g.lanes &= ~l),
        SI(g, I, l))
      : (P && C && Jc(I), (I.flags |= 1), Vg(g, I, A, l), I.child)
  );
}
function Wt(g, I, C, A, l) {
  if (g === null) {
    var e = C.type;
    return typeof e == "function" &&
      !_c(e) &&
      e.defaultProps === void 0 &&
      C.compare === null &&
      C.defaultProps === void 0
      ? ((I.tag = 15), (I.type = e), mG(g, I, e, A, l))
      : ((g = Ol(C.type, null, A, I, I.mode, l)),
        (g.ref = I.ref),
        (g.return = I),
        (I.child = g));
  }
  if (((e = g.child), !(g.lanes & l))) {
    var n = e.memoizedProps;
    if (
      ((C = C.compare), (C = C !== null ? C : LA), C(n, A) && g.ref === I.ref)
    )
      return SI(g, I, l);
  }
  return (
    (I.flags |= 1),
    (g = DI(e, A)),
    (g.ref = I.ref),
    (g.return = I),
    (I.child = g)
  );
}
function mG(g, I, C, A, l) {
  if (g !== null) {
    var e = g.memoizedProps;
    if (LA(e, A) && g.ref === I.ref)
      if (((Rg = !1), (I.pendingProps = A = e), (g.lanes & l) !== 0))
        g.flags & 131072 && (Rg = !0);
      else return (I.lanes = g.lanes), SI(g, I, l);
  }
  return zd(g, I, C, A, l);
}
function GG(g, I, C) {
  var A = I.pendingProps,
    l = A.children,
    e = g !== null ? g.memoizedState : null;
  if (A.mode === "hidden")
    if (!(I.mode & 1))
      (I.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        E(wC, Kg),
        (Kg |= C);
    else {
      if (!(C & 1073741824))
        return (
          (g = e !== null ? e.baseLanes | C : C),
          (I.lanes = I.childLanes = 1073741824),
          (I.memoizedState = {
            baseLanes: g,
            cachePool: null,
            transitions: null,
          }),
          (I.updateQueue = null),
          E(wC, Kg),
          (Kg |= g),
          null
        );
      (I.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (A = e !== null ? e.baseLanes : C),
        E(wC, Kg),
        (Kg |= A);
    }
  else
    e !== null ? ((A = e.baseLanes | C), (I.memoizedState = null)) : (A = C),
      E(wC, Kg),
      (Kg |= A);
  return Vg(g, I, l, C), I.child;
}
function aG(g, I) {
  var C = I.ref;
  ((g === null && C !== null) || (g !== null && g.ref !== C)) &&
    ((I.flags |= 512), (I.flags |= 2097152));
}
function zd(g, I, C, A, l) {
  var e = Yg(C) ? tC : Wg.current;
  return (
    (e = TC(I, e)),
    xC(I, l),
    (C = Uc(g, I, C, A, e, l)),
    (A = xc()),
    g !== null && !Rg
      ? ((I.updateQueue = g.updateQueue),
        (I.flags &= -2053),
        (g.lanes &= ~l),
        SI(g, I, l))
      : (P && A && Jc(I), (I.flags |= 1), Vg(g, I, C, l), I.child)
  );
}
function Vt(g, I, C, A, l) {
  if (Yg(C)) {
    var e = !0;
    Ge(I);
  } else e = !1;
  if ((xC(I, l), I.stateNode === null))
    Tl(g, I), Um(I, C, A), wd(I, C, A, l), (A = !0);
  else if (g === null) {
    var n = I.stateNode,
      d = I.memoizedProps;
    n.props = d;
    var c = n.context,
      o = C.contextType;
    typeof o == "object" && o !== null
      ? (o = Tg(o))
      : ((o = Yg(C) ? tC : Wg.current), (o = TC(I, o)));
    var t = C.getDerivedStateFromProps,
      m =
        typeof t == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
        typeof n.componentWillReceiveProps != "function") ||
      ((d !== A || c !== o) && at(I, n, A, o)),
      (KI = !1);
    var G = I.memoizedState;
    (n.state = G),
      se(I, A, n, l),
      (c = I.memoizedState),
      d !== A || G !== c || Jg.current || KI
        ? (typeof t == "function" && (Fd(I, C, t, A), (c = I.memoizedState)),
          (d = KI || Gt(I, C, d, A, G, c, o))
            ? (m ||
                (typeof n.UNSAFE_componentWillMount != "function" &&
                  typeof n.componentWillMount != "function") ||
                (typeof n.componentWillMount == "function" &&
                  n.componentWillMount(),
                typeof n.UNSAFE_componentWillMount == "function" &&
                  n.UNSAFE_componentWillMount()),
              typeof n.componentDidMount == "function" && (I.flags |= 4194308))
            : (typeof n.componentDidMount == "function" && (I.flags |= 4194308),
              (I.memoizedProps = A),
              (I.memoizedState = c)),
          (n.props = A),
          (n.state = c),
          (n.context = o),
          (A = d))
        : (typeof n.componentDidMount == "function" && (I.flags |= 4194308),
          (A = !1));
  } else {
    (n = I.stateNode),
      zm(g, I),
      (d = I.memoizedProps),
      (o = I.type === I.elementType ? d : Og(I.type, d)),
      (n.props = o),
      (m = I.pendingProps),
      (G = n.context),
      (c = C.contextType),
      typeof c == "object" && c !== null
        ? (c = Tg(c))
        : ((c = Yg(C) ? tC : Wg.current), (c = TC(I, c)));
    var s = C.getDerivedStateFromProps;
    (t =
      typeof s == "function" ||
      typeof n.getSnapshotBeforeUpdate == "function") ||
      (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
        typeof n.componentWillReceiveProps != "function") ||
      ((d !== m || G !== c) && at(I, n, A, c)),
      (KI = !1),
      (G = I.memoizedState),
      (n.state = G),
      se(I, A, n, l);
    var i = I.memoizedState;
    d !== m || G !== i || Jg.current || KI
      ? (typeof s == "function" && (Fd(I, C, s, A), (i = I.memoizedState)),
        (o = KI || Gt(I, C, o, A, G, i, c) || !1)
          ? (t ||
              (typeof n.UNSAFE_componentWillUpdate != "function" &&
                typeof n.componentWillUpdate != "function") ||
              (typeof n.componentWillUpdate == "function" &&
                n.componentWillUpdate(A, i, c),
              typeof n.UNSAFE_componentWillUpdate == "function" &&
                n.UNSAFE_componentWillUpdate(A, i, c)),
            typeof n.componentDidUpdate == "function" && (I.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (I.flags |= 1024))
          : (typeof n.componentDidUpdate != "function" ||
              (d === g.memoizedProps && G === g.memoizedState) ||
              (I.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" ||
              (d === g.memoizedProps && G === g.memoizedState) ||
              (I.flags |= 1024),
            (I.memoizedProps = A),
            (I.memoizedState = i)),
        (n.props = A),
        (n.state = i),
        (n.context = c),
        (A = o))
      : (typeof n.componentDidUpdate != "function" ||
          (d === g.memoizedProps && G === g.memoizedState) ||
          (I.flags |= 4),
        typeof n.getSnapshotBeforeUpdate != "function" ||
          (d === g.memoizedProps && G === g.memoizedState) ||
          (I.flags |= 1024),
        (A = !1));
  }
  return Qd(g, I, C, A, e, l);
}
function Qd(g, I, C, A, l, e) {
  aG(g, I);
  var n = (I.flags & 128) !== 0;
  if (!A && !n) return l && ct(I, C, !1), SI(g, I, e);
  (A = I.stateNode), (Ub.current = I);
  var d =
    n && typeof C.getDerivedStateFromError != "function" ? null : A.render();
  return (
    (I.flags |= 1),
    g !== null && n
      ? ((I.child = PC(I, g.child, null, e)), (I.child = PC(I, null, d, e)))
      : Vg(g, I, d, e),
    (I.memoizedState = A.state),
    l && ct(I, C, !0),
    I.child
  );
}
function iG(g) {
  var I = g.stateNode;
  I.pendingContext
    ? dt(g, I.pendingContext, I.pendingContext !== I.context)
    : I.context && dt(g, I.context, !1),
    wc(g, I.containerInfo);
}
function St(g, I, C, A, l) {
  return jC(), kc(l), (I.flags |= 256), Vg(g, I, C, A), I.child;
}
var Ud = { dehydrated: null, treeContext: null, retryLane: 0 };
function xd(g) {
  return { baseLanes: g, cachePool: null, transitions: null };
}
function bG(g, I, C) {
  var A = I.pendingProps,
    l = O.current,
    e = !1,
    n = (I.flags & 128) !== 0,
    d;
  if (
    ((d = n) ||
      (d = g !== null && g.memoizedState === null ? !1 : (l & 2) !== 0),
    d
      ? ((e = !0), (I.flags &= -129))
      : (g === null || g.memoizedState !== null) && (l |= 1),
    E(O, l & 1),
    g === null)
  )
    return (
      vd(I),
      (g = I.memoizedState),
      g !== null && ((g = g.dehydrated), g !== null)
        ? (I.mode & 1
            ? g.data === "$!"
              ? (I.lanes = 8)
              : (I.lanes = 1073741824)
            : (I.lanes = 1),
          null)
        : ((n = A.children),
          (g = A.fallback),
          e
            ? ((A = I.mode),
              (e = I.child),
              (n = { mode: "hidden", children: n }),
              !(A & 1) && e !== null
                ? ((e.childLanes = 0), (e.pendingProps = n))
                : (e = Me(n, A, 0, null)),
              (g = oC(g, A, C, null)),
              (e.return = I),
              (g.return = I),
              (e.sibling = g),
              (I.child = e),
              (I.child.memoizedState = xd(C)),
              (I.memoizedState = Ud),
              g)
            : Lc(I, n))
    );
  if (((l = g.memoizedState), l !== null && ((d = l.dehydrated), d !== null)))
    return xb(g, I, n, A, d, l, C);
  if (e) {
    (e = A.fallback), (n = I.mode), (l = g.child), (d = l.sibling);
    var c = { mode: "hidden", children: A.children };
    return (
      !(n & 1) && I.child !== l
        ? ((A = I.child),
          (A.childLanes = 0),
          (A.pendingProps = c),
          (I.deletions = null))
        : ((A = DI(l, c)), (A.subtreeFlags = l.subtreeFlags & 14680064)),
      d !== null ? (e = DI(d, e)) : ((e = oC(e, n, C, null)), (e.flags |= 2)),
      (e.return = I),
      (A.return = I),
      (A.sibling = e),
      (I.child = A),
      (A = e),
      (e = I.child),
      (n = g.child.memoizedState),
      (n =
        n === null
          ? xd(C)
          : {
              baseLanes: n.baseLanes | C,
              cachePool: null,
              transitions: n.transitions,
            }),
      (e.memoizedState = n),
      (e.childLanes = g.childLanes & ~C),
      (I.memoizedState = Ud),
      A
    );
  }
  return (
    (e = g.child),
    (g = e.sibling),
    (A = DI(e, { mode: "visible", children: A.children })),
    !(I.mode & 1) && (A.lanes = C),
    (A.return = I),
    (A.sibling = null),
    g !== null &&
      ((C = I.deletions),
      C === null ? ((I.deletions = [g]), (I.flags |= 16)) : C.push(g)),
    (I.child = A),
    (I.memoizedState = null),
    A
  );
}
function Lc(g, I) {
  return (
    (I = Me({ mode: "visible", children: I }, g.mode, 0, null)),
    (I.return = g),
    (g.child = I)
  );
}
function vl(g, I, C, A) {
  return (
    A !== null && kc(A),
    PC(I, g.child, null, C),
    (g = Lc(I, I.pendingProps.children)),
    (g.flags |= 2),
    (I.memoizedState = null),
    g
  );
}
function xb(g, I, C, A, l, e, n) {
  if (C)
    return I.flags & 256
      ? ((I.flags &= -257), (A = Tn(Error(h(422)))), vl(g, I, n, A))
      : I.memoizedState !== null
      ? ((I.child = g.child), (I.flags |= 128), null)
      : ((e = A.fallback),
        (l = I.mode),
        (A = Me({ mode: "visible", children: A.children }, l, 0, null)),
        (e = oC(e, l, n, null)),
        (e.flags |= 2),
        (A.return = I),
        (e.return = I),
        (A.sibling = e),
        (I.child = A),
        I.mode & 1 && PC(I, g.child, null, n),
        (I.child.memoizedState = xd(n)),
        (I.memoizedState = Ud),
        e);
  if (!(I.mode & 1)) return vl(g, I, n, null);
  if (l.data === "$!") {
    if (((A = l.nextSibling && l.nextSibling.dataset), A)) var d = A.dgst;
    return (A = d), (e = Error(h(419))), (A = Tn(e, A, void 0)), vl(g, I, n, A);
  }
  if (((d = (n & g.childLanes) !== 0), Rg || d)) {
    if (((A = mg), A !== null)) {
      switch (n & -n) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (A.suspendedLanes | n) ? 0 : l),
        l !== 0 &&
          l !== e.retryLane &&
          ((e.retryLane = l), VI(g, l), gI(A, g, l, -1));
    }
    return qc(), (A = Tn(Error(h(421)))), vl(g, I, n, A);
  }
  return l.data === "$?"
    ? ((I.flags |= 128),
      (I.child = g.child),
      (I = Iu.bind(null, g)),
      (l._reactRetry = I),
      null)
    : ((g = e.treeContext),
      (Ng = xI(l.nextSibling)),
      (Fg = I),
      (P = !0),
      (_g = null),
      g !== null &&
        ((xg[Eg++] = bI),
        (xg[Eg++] = uI),
        (xg[Eg++] = ZC),
        (bI = g.id),
        (uI = g.overflow),
        (ZC = I)),
      (I = Lc(I, A.children)),
      (I.flags |= 4096),
      I);
}
function ht(g, I, C) {
  g.lanes |= I;
  var A = g.alternate;
  A !== null && (A.lanes |= I), Nd(g.return, I, C);
}
function jn(g, I, C, A, l) {
  var e = g.memoizedState;
  e === null
    ? (g.memoizedState = {
        isBackwards: I,
        rendering: null,
        renderingStartTime: 0,
        last: A,
        tail: C,
        tailMode: l,
      })
    : ((e.isBackwards = I),
      (e.rendering = null),
      (e.renderingStartTime = 0),
      (e.last = A),
      (e.tail = C),
      (e.tailMode = l));
}
function uG(g, I, C) {
  var A = I.pendingProps,
    l = A.revealOrder,
    e = A.tail;
  if ((Vg(g, I, A.children, C), (A = O.current), A & 2))
    (A = (A & 1) | 2), (I.flags |= 128);
  else {
    if (g !== null && g.flags & 128)
      g: for (g = I.child; g !== null; ) {
        if (g.tag === 13) g.memoizedState !== null && ht(g, C, I);
        else if (g.tag === 19) ht(g, C, I);
        else if (g.child !== null) {
          (g.child.return = g), (g = g.child);
          continue;
        }
        if (g === I) break g;
        for (; g.sibling === null; ) {
          if (g.return === null || g.return === I) break g;
          g = g.return;
        }
        (g.sibling.return = g.return), (g = g.sibling);
      }
    A &= 1;
  }
  if ((E(O, A), !(I.mode & 1))) I.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (C = I.child, l = null; C !== null; )
          (g = C.alternate),
            g !== null && Be(g) === null && (l = C),
            (C = C.sibling);
        (C = l),
          C === null
            ? ((l = I.child), (I.child = null))
            : ((l = C.sibling), (C.sibling = null)),
          jn(I, !1, l, C, e);
        break;
      case "backwards":
        for (C = null, l = I.child, I.child = null; l !== null; ) {
          if (((g = l.alternate), g !== null && Be(g) === null)) {
            I.child = l;
            break;
          }
          (g = l.sibling), (l.sibling = C), (C = l), (l = g);
        }
        jn(I, !0, C, null, e);
        break;
      case "together":
        jn(I, !1, null, null, void 0);
        break;
      default:
        I.memoizedState = null;
    }
  return I.child;
}
function Tl(g, I) {
  !(I.mode & 1) &&
    g !== null &&
    ((g.alternate = null), (I.alternate = null), (I.flags |= 2));
}
function SI(g, I, C) {
  if (
    (g !== null && (I.dependencies = g.dependencies),
    (GC |= I.lanes),
    !(C & I.childLanes))
  )
    return null;
  if (g !== null && I.child !== g.child) throw Error(h(153));
  if (I.child !== null) {
    for (
      g = I.child, C = DI(g, g.pendingProps), I.child = C, C.return = I;
      g.sibling !== null;

    )
      (g = g.sibling), (C = C.sibling = DI(g, g.pendingProps)), (C.return = I);
    C.sibling = null;
  }
  return I.child;
}
function Eb(g, I, C) {
  switch (I.tag) {
    case 3:
      iG(I), jC();
      break;
    case 5:
      Mm(I);
      break;
    case 1:
      Yg(I.type) && Ge(I);
      break;
    case 4:
      wc(I, I.stateNode.containerInfo);
      break;
    case 10:
      var A = I.type._context,
        l = I.memoizedProps.value;
      E(be, A._currentValue), (A._currentValue = l);
      break;
    case 13:
      if (((A = I.memoizedState), A !== null))
        return A.dehydrated !== null
          ? (E(O, O.current & 1), (I.flags |= 128), null)
          : C & I.child.childLanes
          ? bG(g, I, C)
          : (E(O, O.current & 1),
            (g = SI(g, I, C)),
            g !== null ? g.sibling : null);
      E(O, O.current & 1);
      break;
    case 19:
      if (((A = (C & I.childLanes) !== 0), g.flags & 128)) {
        if (A) return uG(g, I, C);
        I.flags |= 128;
      }
      if (
        ((l = I.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        E(O, O.current),
        A)
      )
        break;
      return null;
    case 22:
    case 23:
      return (I.lanes = 0), GG(g, I, C);
  }
  return SI(g, I, C);
}
var sG, Ed, BG, rG;
sG = function (g, I) {
  for (var C = I.child; C !== null; ) {
    if (C.tag === 5 || C.tag === 6) g.appendChild(C.stateNode);
    else if (C.tag !== 4 && C.child !== null) {
      (C.child.return = C), (C = C.child);
      continue;
    }
    if (C === I) break;
    for (; C.sibling === null; ) {
      if (C.return === null || C.return === I) return;
      C = C.return;
    }
    (C.sibling.return = C.return), (C = C.sibling);
  }
};
Ed = function () {};
BG = function (g, I, C, A) {
  var l = g.memoizedProps;
  if (l !== A) {
    (g = I.stateNode), dC(ZI.current);
    var e = null;
    switch (C) {
      case "input":
        (l = Zd(g, l)), (A = Zd(g, A)), (e = []);
        break;
      case "select":
        (l = _({}, l, { value: void 0 })),
          (A = _({}, A, { value: void 0 })),
          (e = []);
        break;
      case "textarea":
        (l = ad(g, l)), (A = ad(g, A)), (e = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof A.onClick == "function" &&
          (g.onclick = Ze);
    }
    bd(C, A);
    var n;
    C = null;
    for (o in l)
      if (!A.hasOwnProperty(o) && l.hasOwnProperty(o) && l[o] != null)
        if (o === "style") {
          var d = l[o];
          for (n in d) d.hasOwnProperty(n) && (C || (C = {}), (C[n] = ""));
        } else
          o !== "dangerouslySetInnerHTML" &&
            o !== "children" &&
            o !== "suppressContentEditableWarning" &&
            o !== "suppressHydrationWarning" &&
            o !== "autoFocus" &&
            (fA.hasOwnProperty(o)
              ? e || (e = [])
              : (e = e || []).push(o, null));
    for (o in A) {
      var c = A[o];
      if (
        ((d = l != null ? l[o] : void 0),
        A.hasOwnProperty(o) && c !== d && (c != null || d != null))
      )
        if (o === "style")
          if (d) {
            for (n in d)
              !d.hasOwnProperty(n) ||
                (c && c.hasOwnProperty(n)) ||
                (C || (C = {}), (C[n] = ""));
            for (n in c)
              c.hasOwnProperty(n) &&
                d[n] !== c[n] &&
                (C || (C = {}), (C[n] = c[n]));
          } else C || (e || (e = []), e.push(o, C)), (C = c);
        else
          o === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (d = d ? d.__html : void 0),
              c != null && d !== c && (e = e || []).push(o, c))
            : o === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (e = e || []).push(o, "" + c)
            : o !== "suppressContentEditableWarning" &&
              o !== "suppressHydrationWarning" &&
              (fA.hasOwnProperty(o)
                ? (c != null && o === "onScroll" && M("scroll", g),
                  e || d === c || (e = []))
                : (e = e || []).push(o, c));
    }
    C && (e = e || []).push("style", C);
    var o = e;
    (I.updateQueue = o) && (I.flags |= 4);
  }
};
rG = function (g, I, C, A) {
  C !== A && (I.flags |= 4);
};
function BA(g, I) {
  if (!P)
    switch (g.tailMode) {
      case "hidden":
        I = g.tail;
        for (var C = null; I !== null; )
          I.alternate !== null && (C = I), (I = I.sibling);
        C === null ? (g.tail = null) : (C.sibling = null);
        break;
      case "collapsed":
        C = g.tail;
        for (var A = null; C !== null; )
          C.alternate !== null && (A = C), (C = C.sibling);
        A === null
          ? I || g.tail === null
            ? (g.tail = null)
            : (g.tail.sibling = null)
          : (A.sibling = null);
    }
}
function Bg(g) {
  var I = g.alternate !== null && g.alternate.child === g.child,
    C = 0,
    A = 0;
  if (I)
    for (var l = g.child; l !== null; )
      (C |= l.lanes | l.childLanes),
        (A |= l.subtreeFlags & 14680064),
        (A |= l.flags & 14680064),
        (l.return = g),
        (l = l.sibling);
  else
    for (l = g.child; l !== null; )
      (C |= l.lanes | l.childLanes),
        (A |= l.subtreeFlags),
        (A |= l.flags),
        (l.return = g),
        (l = l.sibling);
  return (g.subtreeFlags |= A), (g.childLanes = C), I;
}
function Mb(g, I, C) {
  var A = I.pendingProps;
  switch ((Yc(I), I.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Bg(I), null;
    case 1:
      return Yg(I.type) && me(), Bg(I), null;
    case 3:
      return (
        (A = I.stateNode),
        OC(),
        L(Jg),
        L(Wg),
        zc(),
        A.pendingContext &&
          ((A.context = A.pendingContext), (A.pendingContext = null)),
        (g === null || g.child === null) &&
          (Hl(I)
            ? (I.flags |= 4)
            : g === null ||
              (g.memoizedState.isDehydrated && !(I.flags & 256)) ||
              ((I.flags |= 1024), _g !== null && (qd(_g), (_g = null)))),
        Ed(g, I),
        Bg(I),
        null
      );
    case 5:
      fc(I);
      var l = dC(OA.current);
      if (((C = I.type), g !== null && I.stateNode != null))
        BG(g, I, C, A, l),
          g.ref !== I.ref && ((I.flags |= 512), (I.flags |= 2097152));
      else {
        if (!A) {
          if (I.stateNode === null) throw Error(h(166));
          return Bg(I), null;
        }
        if (((g = dC(ZI.current)), Hl(I))) {
          (A = I.stateNode), (C = I.type);
          var e = I.memoizedProps;
          switch (((A[dI] = I), (A[jA] = e), (g = (I.mode & 1) !== 0), C)) {
            case "dialog":
              M("cancel", A), M("close", A);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", A);
              break;
            case "video":
            case "audio":
              for (l = 0; l < pA.length; l++) M(pA[l], A);
              break;
            case "source":
              M("error", A);
              break;
            case "img":
            case "image":
            case "link":
              M("error", A), M("load", A);
              break;
            case "details":
              M("toggle", A);
              break;
            case "input":
              vo(A, e), M("invalid", A);
              break;
            case "select":
              (A._wrapperState = { wasMultiple: !!e.multiple }),
                M("invalid", A);
              break;
            case "textarea":
              Fo(A, e), M("invalid", A);
          }
          bd(C, e), (l = null);
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              var d = e[n];
              n === "children"
                ? typeof d == "string"
                  ? A.textContent !== d &&
                    (e.suppressHydrationWarning !== !0 &&
                      kl(A.textContent, d, g),
                    (l = ["children", d]))
                  : typeof d == "number" &&
                    A.textContent !== "" + d &&
                    (e.suppressHydrationWarning !== !0 &&
                      kl(A.textContent, d, g),
                    (l = ["children", "" + d]))
                : fA.hasOwnProperty(n) &&
                  d != null &&
                  n === "onScroll" &&
                  M("scroll", A);
            }
          switch (C) {
            case "input":
              Vl(A), No(A, e, !0);
              break;
            case "textarea":
              Vl(A), wo(A);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof e.onClick == "function" && (A.onclick = Ze);
          }
          (A = l), (I.updateQueue = A), A !== null && (I.flags |= 4);
        } else {
          (n = l.nodeType === 9 ? l : l.ownerDocument),
            g === "http://www.w3.org/1999/xhtml" && (g = TZ(C)),
            g === "http://www.w3.org/1999/xhtml"
              ? C === "script"
                ? ((g = n.createElement("div")),
                  (g.innerHTML = "<script></script>"),
                  (g = g.removeChild(g.firstChild)))
                : typeof A.is == "string"
                ? (g = n.createElement(C, { is: A.is }))
                : ((g = n.createElement(C)),
                  C === "select" &&
                    ((n = g),
                    A.multiple
                      ? (n.multiple = !0)
                      : A.size && (n.size = A.size)))
              : (g = n.createElementNS(g, C)),
            (g[dI] = I),
            (g[jA] = A),
            sG(g, I, !1, !1),
            (I.stateNode = g);
          g: {
            switch (((n = ud(C, A)), C)) {
              case "dialog":
                M("cancel", g), M("close", g), (l = A);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", g), (l = A);
                break;
              case "video":
              case "audio":
                for (l = 0; l < pA.length; l++) M(pA[l], g);
                l = A;
                break;
              case "source":
                M("error", g), (l = A);
                break;
              case "img":
              case "image":
              case "link":
                M("error", g), M("load", g), (l = A);
                break;
              case "details":
                M("toggle", g), (l = A);
                break;
              case "input":
                vo(g, A), (l = Zd(g, A)), M("invalid", g);
                break;
              case "option":
                l = A;
                break;
              case "select":
                (g._wrapperState = { wasMultiple: !!A.multiple }),
                  (l = _({}, A, { value: void 0 })),
                  M("invalid", g);
                break;
              case "textarea":
                Fo(g, A), (l = ad(g, A)), M("invalid", g);
                break;
              default:
                l = A;
            }
            bd(C, l), (d = l);
            for (e in d)
              if (d.hasOwnProperty(e)) {
                var c = d[e];
                e === "style"
                  ? OZ(g, c)
                  : e === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && jZ(g, c))
                  : e === "children"
                  ? typeof c == "string"
                    ? (C !== "textarea" || c !== "") && zA(g, c)
                    : typeof c == "number" && zA(g, "" + c)
                  : e !== "suppressContentEditableWarning" &&
                    e !== "suppressHydrationWarning" &&
                    e !== "autoFocus" &&
                    (fA.hasOwnProperty(e)
                      ? c != null && e === "onScroll" && M("scroll", g)
                      : c != null && ic(g, e, c, n));
              }
            switch (C) {
              case "input":
                Vl(g), No(g, A, !1);
                break;
              case "textarea":
                Vl(g), wo(g);
                break;
              case "option":
                A.value != null && g.setAttribute("value", "" + PI(A.value));
                break;
              case "select":
                (g.multiple = !!A.multiple),
                  (e = A.value),
                  e != null
                    ? fC(g, !!A.multiple, e, !1)
                    : A.defaultValue != null &&
                      fC(g, !!A.multiple, A.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (g.onclick = Ze);
            }
            switch (C) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                A = !!A.autoFocus;
                break g;
              case "img":
                A = !0;
                break g;
              default:
                A = !1;
            }
          }
          A && (I.flags |= 4);
        }
        I.ref !== null && ((I.flags |= 512), (I.flags |= 2097152));
      }
      return Bg(I), null;
    case 6:
      if (g && I.stateNode != null) rG(g, I, g.memoizedProps, A);
      else {
        if (typeof A != "string" && I.stateNode === null) throw Error(h(166));
        if (((C = dC(OA.current)), dC(ZI.current), Hl(I))) {
          if (
            ((A = I.stateNode),
            (C = I.memoizedProps),
            (A[dI] = I),
            (e = A.nodeValue !== C) && ((g = Fg), g !== null))
          )
            switch (g.tag) {
              case 3:
                kl(A.nodeValue, C, (g.mode & 1) !== 0);
                break;
              case 5:
                g.memoizedProps.suppressHydrationWarning !== !0 &&
                  kl(A.nodeValue, C, (g.mode & 1) !== 0);
            }
          e && (I.flags |= 4);
        } else
          (A = (C.nodeType === 9 ? C : C.ownerDocument).createTextNode(A)),
            (A[dI] = I),
            (I.stateNode = A);
      }
      return Bg(I), null;
    case 13:
      if (
        (L(O),
        (A = I.memoizedState),
        g === null ||
          (g.memoizedState !== null && g.memoizedState.dehydrated !== null))
      ) {
        if (P && Ng !== null && I.mode & 1 && !(I.flags & 128))
          wm(), jC(), (I.flags |= 98560), (e = !1);
        else if (((e = Hl(I)), A !== null && A.dehydrated !== null)) {
          if (g === null) {
            if (!e) throw Error(h(318));
            if (
              ((e = I.memoizedState),
              (e = e !== null ? e.dehydrated : null),
              !e)
            )
              throw Error(h(317));
            e[dI] = I;
          } else
            jC(), !(I.flags & 128) && (I.memoizedState = null), (I.flags |= 4);
          Bg(I), (e = !1);
        } else _g !== null && (qd(_g), (_g = null)), (e = !0);
        if (!e) return I.flags & 65536 ? I : null;
      }
      return I.flags & 128
        ? ((I.lanes = C), I)
        : ((A = A !== null),
          A !== (g !== null && g.memoizedState !== null) &&
            A &&
            ((I.child.flags |= 8192),
            I.mode & 1 &&
              (g === null || O.current & 1 ? og === 0 && (og = 3) : qc())),
          I.updateQueue !== null && (I.flags |= 4),
          Bg(I),
          null);
    case 4:
      return (
        OC(), Ed(g, I), g === null && DA(I.stateNode.containerInfo), Bg(I), null
      );
    case 10:
      return vc(I.type._context), Bg(I), null;
    case 17:
      return Yg(I.type) && me(), Bg(I), null;
    case 19:
      if ((L(O), (e = I.memoizedState), e === null)) return Bg(I), null;
      if (((A = (I.flags & 128) !== 0), (n = e.rendering), n === null))
        if (A) BA(e, !1);
        else {
          if (og !== 0 || (g !== null && g.flags & 128))
            for (g = I.child; g !== null; ) {
              if (((n = Be(g)), n !== null)) {
                for (
                  I.flags |= 128,
                    BA(e, !1),
                    A = n.updateQueue,
                    A !== null && ((I.updateQueue = A), (I.flags |= 4)),
                    I.subtreeFlags = 0,
                    A = C,
                    C = I.child;
                  C !== null;

                )
                  (e = C),
                    (g = A),
                    (e.flags &= 14680066),
                    (n = e.alternate),
                    n === null
                      ? ((e.childLanes = 0),
                        (e.lanes = g),
                        (e.child = null),
                        (e.subtreeFlags = 0),
                        (e.memoizedProps = null),
                        (e.memoizedState = null),
                        (e.updateQueue = null),
                        (e.dependencies = null),
                        (e.stateNode = null))
                      : ((e.childLanes = n.childLanes),
                        (e.lanes = n.lanes),
                        (e.child = n.child),
                        (e.subtreeFlags = 0),
                        (e.deletions = null),
                        (e.memoizedProps = n.memoizedProps),
                        (e.memoizedState = n.memoizedState),
                        (e.updateQueue = n.updateQueue),
                        (e.type = n.type),
                        (g = n.dependencies),
                        (e.dependencies =
                          g === null
                            ? null
                            : {
                                lanes: g.lanes,
                                firstContext: g.firstContext,
                              })),
                    (C = C.sibling);
                return E(O, (O.current & 1) | 2), I.child;
              }
              g = g.sibling;
            }
          e.tail !== null &&
            Ag() > _C &&
            ((I.flags |= 128), (A = !0), BA(e, !1), (I.lanes = 4194304));
        }
      else {
        if (!A)
          if (((g = Be(n)), g !== null)) {
            if (
              ((I.flags |= 128),
              (A = !0),
              (C = g.updateQueue),
              C !== null && ((I.updateQueue = C), (I.flags |= 4)),
              BA(e, !0),
              e.tail === null && e.tailMode === "hidden" && !n.alternate && !P)
            )
              return Bg(I), null;
          } else
            2 * Ag() - e.renderingStartTime > _C &&
              C !== 1073741824 &&
              ((I.flags |= 128), (A = !0), BA(e, !1), (I.lanes = 4194304));
        e.isBackwards
          ? ((n.sibling = I.child), (I.child = n))
          : ((C = e.last),
            C !== null ? (C.sibling = n) : (I.child = n),
            (e.last = n));
      }
      return e.tail !== null
        ? ((I = e.tail),
          (e.rendering = I),
          (e.tail = I.sibling),
          (e.renderingStartTime = Ag()),
          (I.sibling = null),
          (C = O.current),
          E(O, A ? (C & 1) | 2 : C & 1),
          I)
        : (Bg(I), null);
    case 22:
    case 23:
      return (
        Oc(),
        (A = I.memoizedState !== null),
        g !== null && (g.memoizedState !== null) !== A && (I.flags |= 8192),
        A && I.mode & 1
          ? Kg & 1073741824 && (Bg(I), I.subtreeFlags & 6 && (I.flags |= 8192))
          : Bg(I),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(h(156, I.tag));
}
function Lb(g, I) {
  switch ((Yc(I), I.tag)) {
    case 1:
      return (
        Yg(I.type) && me(),
        (g = I.flags),
        g & 65536 ? ((I.flags = (g & -65537) | 128), I) : null
      );
    case 3:
      return (
        OC(),
        L(Jg),
        L(Wg),
        zc(),
        (g = I.flags),
        g & 65536 && !(g & 128) ? ((I.flags = (g & -65537) | 128), I) : null
      );
    case 5:
      return fc(I), null;
    case 13:
      if ((L(O), (g = I.memoizedState), g !== null && g.dehydrated !== null)) {
        if (I.alternate === null) throw Error(h(340));
        jC();
      }
      return (
        (g = I.flags), g & 65536 ? ((I.flags = (g & -65537) | 128), I) : null
      );
    case 19:
      return L(O), null;
    case 4:
      return OC(), null;
    case 10:
      return vc(I.type._context), null;
    case 22:
    case 23:
      return Oc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nl = !1,
  yg = !1,
  Db = typeof WeakSet == "function" ? WeakSet : Set,
  J = null;
function FC(g, I) {
  var C = g.ref;
  if (C !== null)
    if (typeof C == "function")
      try {
        C(null);
      } catch (A) {
        Ig(g, I, A);
      }
    else C.current = null;
}
function Md(g, I, C) {
  try {
    C();
  } catch (A) {
    Ig(g, I, A);
  }
}
var Xt = !1;
function Tb(g, I) {
  if (((pd = ce), (g = Sm()), Rc(g))) {
    if ("selectionStart" in g)
      var C = { start: g.selectionStart, end: g.selectionEnd };
    else
      g: {
        C = ((C = g.ownerDocument) && C.defaultView) || window;
        var A = C.getSelection && C.getSelection();
        if (A && A.rangeCount !== 0) {
          C = A.anchorNode;
          var l = A.anchorOffset,
            e = A.focusNode;
          A = A.focusOffset;
          try {
            C.nodeType, e.nodeType;
          } catch {
            C = null;
            break g;
          }
          var n = 0,
            d = -1,
            c = -1,
            o = 0,
            t = 0,
            m = g,
            G = null;
          I: for (;;) {
            for (
              var s;
              m !== C || (l !== 0 && m.nodeType !== 3) || (d = n + l),
                m !== e || (A !== 0 && m.nodeType !== 3) || (c = n + A),
                m.nodeType === 3 && (n += m.nodeValue.length),
                (s = m.firstChild) !== null;

            )
              (G = m), (m = s);
            for (;;) {
              if (m === g) break I;
              if (
                (G === C && ++o === l && (d = n),
                G === e && ++t === A && (c = n),
                (s = m.nextSibling) !== null)
              )
                break;
              (m = G), (G = m.parentNode);
            }
            m = s;
          }
          C = d === -1 || c === -1 ? null : { start: d, end: c };
        } else C = null;
      }
    C = C || { start: 0, end: 0 };
  } else C = null;
  for (Rd = { focusedElem: g, selectionRange: C }, ce = !1, J = I; J !== null; )
    if (((I = J), (g = I.child), (I.subtreeFlags & 1028) !== 0 && g !== null))
      (g.return = I), (J = g);
    else
      for (; J !== null; ) {
        I = J;
        try {
          var i = I.alternate;
          if (I.flags & 1024)
            switch (I.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (i !== null) {
                  var b = i.memoizedProps,
                    V = i.memoizedState,
                    a = I.stateNode,
                    Z = a.getSnapshotBeforeUpdate(
                      I.elementType === I.type ? b : Og(I.type, b),
                      V
                    );
                  a.__reactInternalSnapshotBeforeUpdate = Z;
                }
                break;
              case 3:
                var u = I.stateNode.containerInfo;
                u.nodeType === 1
                  ? (u.textContent = "")
                  : u.nodeType === 9 &&
                    u.documentElement &&
                    u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(h(163));
            }
        } catch (r) {
          Ig(I, I.return, r);
        }
        if (((g = I.sibling), g !== null)) {
          (g.return = I.return), (J = g);
          break;
        }
        J = I.return;
      }
  return (i = Xt), (Xt = !1), i;
}
function vA(g, I, C) {
  var A = I.updateQueue;
  if (((A = A !== null ? A.lastEffect : null), A !== null)) {
    var l = (A = A.next);
    do {
      if ((l.tag & g) === g) {
        var e = l.destroy;
        (l.destroy = void 0), e !== void 0 && Md(I, C, e);
      }
      l = l.next;
    } while (l !== A);
  }
}
function xe(g, I) {
  if (
    ((I = I.updateQueue), (I = I !== null ? I.lastEffect : null), I !== null)
  ) {
    var C = (I = I.next);
    do {
      if ((C.tag & g) === g) {
        var A = C.create;
        C.destroy = A();
      }
      C = C.next;
    } while (C !== I);
  }
}
function Ld(g) {
  var I = g.ref;
  if (I !== null) {
    var C = g.stateNode;
    switch (g.tag) {
      case 5:
        g = C;
        break;
      default:
        g = C;
    }
    typeof I == "function" ? I(g) : (I.current = g);
  }
}
function yG(g) {
  var I = g.alternate;
  I !== null && ((g.alternate = null), yG(I)),
    (g.child = null),
    (g.deletions = null),
    (g.sibling = null),
    g.tag === 5 &&
      ((I = g.stateNode),
      I !== null &&
        (delete I[dI], delete I[jA], delete I[kd], delete I[Jb], delete I[Yb])),
    (g.stateNode = null),
    (g.return = null),
    (g.dependencies = null),
    (g.memoizedProps = null),
    (g.memoizedState = null),
    (g.pendingProps = null),
    (g.stateNode = null),
    (g.updateQueue = null);
}
function WG(g) {
  return g.tag === 5 || g.tag === 3 || g.tag === 4;
}
function pt(g) {
  g: for (;;) {
    for (; g.sibling === null; ) {
      if (g.return === null || WG(g.return)) return null;
      g = g.return;
    }
    for (
      g.sibling.return = g.return, g = g.sibling;
      g.tag !== 5 && g.tag !== 6 && g.tag !== 18;

    ) {
      if (g.flags & 2 || g.child === null || g.tag === 4) continue g;
      (g.child.return = g), (g = g.child);
    }
    if (!(g.flags & 2)) return g.stateNode;
  }
}
function Dd(g, I, C) {
  var A = g.tag;
  if (A === 5 || A === 6)
    (g = g.stateNode),
      I
        ? C.nodeType === 8
          ? C.parentNode.insertBefore(g, I)
          : C.insertBefore(g, I)
        : (C.nodeType === 8
            ? ((I = C.parentNode), I.insertBefore(g, C))
            : ((I = C), I.appendChild(g)),
          (C = C._reactRootContainer),
          C != null || I.onclick !== null || (I.onclick = Ze));
  else if (A !== 4 && ((g = g.child), g !== null))
    for (Dd(g, I, C), g = g.sibling; g !== null; ) Dd(g, I, C), (g = g.sibling);
}
function Td(g, I, C) {
  var A = g.tag;
  if (A === 5 || A === 6)
    (g = g.stateNode), I ? C.insertBefore(g, I) : C.appendChild(g);
  else if (A !== 4 && ((g = g.child), g !== null))
    for (Td(g, I, C), g = g.sibling; g !== null; ) Td(g, I, C), (g = g.sibling);
}
var ag = null,
  qg = !1;
function YI(g, I, C) {
  for (C = C.child; C !== null; ) VG(g, I, C), (C = C.sibling);
}
function VG(g, I, C) {
  if (tI && typeof tI.onCommitFiberUnmount == "function")
    try {
      tI.onCommitFiberUnmount(ve, C);
    } catch {}
  switch (C.tag) {
    case 5:
      yg || FC(C, I);
    case 6:
      var A = ag,
        l = qg;
      (ag = null),
        YI(g, I, C),
        (ag = A),
        (qg = l),
        ag !== null &&
          (qg
            ? ((g = ag),
              (C = C.stateNode),
              g.nodeType === 8 ? g.parentNode.removeChild(C) : g.removeChild(C))
            : ag.removeChild(C.stateNode));
      break;
    case 18:
      ag !== null &&
        (qg
          ? ((g = ag),
            (C = C.stateNode),
            g.nodeType === 8
              ? Un(g.parentNode, C)
              : g.nodeType === 1 && Un(g, C),
            EA(g))
          : Un(ag, C.stateNode));
      break;
    case 4:
      (A = ag),
        (l = qg),
        (ag = C.stateNode.containerInfo),
        (qg = !0),
        YI(g, I, C),
        (ag = A),
        (qg = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !yg &&
        ((A = C.updateQueue), A !== null && ((A = A.lastEffect), A !== null))
      ) {
        l = A = A.next;
        do {
          var e = l,
            n = e.destroy;
          (e = e.tag),
            n !== void 0 && (e & 2 || e & 4) && Md(C, I, n),
            (l = l.next);
        } while (l !== A);
      }
      YI(g, I, C);
      break;
    case 1:
      if (
        !yg &&
        (FC(C, I),
        (A = C.stateNode),
        typeof A.componentWillUnmount == "function")
      )
        try {
          (A.props = C.memoizedProps),
            (A.state = C.memoizedState),
            A.componentWillUnmount();
        } catch (d) {
          Ig(C, I, d);
        }
      YI(g, I, C);
      break;
    case 21:
      YI(g, I, C);
      break;
    case 22:
      C.mode & 1
        ? ((yg = (A = yg) || C.memoizedState !== null), YI(g, I, C), (yg = A))
        : YI(g, I, C);
      break;
    default:
      YI(g, I, C);
  }
}
function Rt(g) {
  var I = g.updateQueue;
  if (I !== null) {
    g.updateQueue = null;
    var C = g.stateNode;
    C === null && (C = g.stateNode = new Db()),
      I.forEach(function (A) {
        var l = Cu.bind(null, g, A);
        C.has(A) || (C.add(A), A.then(l, l));
      });
  }
}
function Pg(g, I) {
  var C = I.deletions;
  if (C !== null)
    for (var A = 0; A < C.length; A++) {
      var l = C[A];
      try {
        var e = g,
          n = I,
          d = n;
        g: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              (ag = d.stateNode), (qg = !1);
              break g;
            case 3:
              (ag = d.stateNode.containerInfo), (qg = !0);
              break g;
            case 4:
              (ag = d.stateNode.containerInfo), (qg = !0);
              break g;
          }
          d = d.return;
        }
        if (ag === null) throw Error(h(160));
        VG(e, n, l), (ag = null), (qg = !1);
        var c = l.alternate;
        c !== null && (c.return = null), (l.return = null);
      } catch (o) {
        Ig(l, I, o);
      }
    }
  if (I.subtreeFlags & 12854)
    for (I = I.child; I !== null; ) SG(I, g), (I = I.sibling);
}
function SG(g, I) {
  var C = g.alternate,
    A = g.flags;
  switch (g.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pg(I, g), AI(g), A & 4)) {
        try {
          vA(3, g, g.return), xe(3, g);
        } catch (b) {
          Ig(g, g.return, b);
        }
        try {
          vA(5, g, g.return);
        } catch (b) {
          Ig(g, g.return, b);
        }
      }
      break;
    case 1:
      Pg(I, g), AI(g), A & 512 && C !== null && FC(C, C.return);
      break;
    case 5:
      if (
        (Pg(I, g),
        AI(g),
        A & 512 && C !== null && FC(C, C.return),
        g.flags & 32)
      ) {
        var l = g.stateNode;
        try {
          zA(l, "");
        } catch (b) {
          Ig(g, g.return, b);
        }
      }
      if (A & 4 && ((l = g.stateNode), l != null)) {
        var e = g.memoizedProps,
          n = C !== null ? C.memoizedProps : e,
          d = g.type,
          c = g.updateQueue;
        if (((g.updateQueue = null), c !== null))
          try {
            d === "input" && e.type === "radio" && e.name != null && LZ(l, e),
              ud(d, n);
            var o = ud(d, e);
            for (n = 0; n < c.length; n += 2) {
              var t = c[n],
                m = c[n + 1];
              t === "style"
                ? OZ(l, m)
                : t === "dangerouslySetInnerHTML"
                ? jZ(l, m)
                : t === "children"
                ? zA(l, m)
                : ic(l, t, m, o);
            }
            switch (d) {
              case "input":
                md(l, e);
                break;
              case "textarea":
                DZ(l, e);
                break;
              case "select":
                var G = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!e.multiple;
                var s = e.value;
                s != null
                  ? fC(l, !!e.multiple, s, !1)
                  : G !== !!e.multiple &&
                    (e.defaultValue != null
                      ? fC(l, !!e.multiple, e.defaultValue, !0)
                      : fC(l, !!e.multiple, e.multiple ? [] : "", !1));
            }
            l[jA] = e;
          } catch (b) {
            Ig(g, g.return, b);
          }
      }
      break;
    case 6:
      if ((Pg(I, g), AI(g), A & 4)) {
        if (g.stateNode === null) throw Error(h(162));
        (l = g.stateNode), (e = g.memoizedProps);
        try {
          l.nodeValue = e;
        } catch (b) {
          Ig(g, g.return, b);
        }
      }
      break;
    case 3:
      if (
        (Pg(I, g), AI(g), A & 4 && C !== null && C.memoizedState.isDehydrated)
      )
        try {
          EA(I.containerInfo);
        } catch (b) {
          Ig(g, g.return, b);
        }
      break;
    case 4:
      Pg(I, g), AI(g);
      break;
    case 13:
      Pg(I, g),
        AI(g),
        (l = g.child),
        l.flags & 8192 &&
          ((e = l.memoizedState !== null),
          (l.stateNode.isHidden = e),
          !e ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (jc = Ag())),
        A & 4 && Rt(g);
      break;
    case 22:
      if (
        ((t = C !== null && C.memoizedState !== null),
        g.mode & 1 ? ((yg = (o = yg) || t), Pg(I, g), (yg = o)) : Pg(I, g),
        AI(g),
        A & 8192)
      ) {
        if (
          ((o = g.memoizedState !== null),
          (g.stateNode.isHidden = o) && !t && g.mode & 1)
        )
          for (J = g, t = g.child; t !== null; ) {
            for (m = J = t; J !== null; ) {
              switch (((G = J), (s = G.child), G.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vA(4, G, G.return);
                  break;
                case 1:
                  FC(G, G.return);
                  var i = G.stateNode;
                  if (typeof i.componentWillUnmount == "function") {
                    (A = G), (C = G.return);
                    try {
                      (I = A),
                        (i.props = I.memoizedProps),
                        (i.state = I.memoizedState),
                        i.componentWillUnmount();
                    } catch (b) {
                      Ig(A, C, b);
                    }
                  }
                  break;
                case 5:
                  FC(G, G.return);
                  break;
                case 22:
                  if (G.memoizedState !== null) {
                    Yt(m);
                    continue;
                  }
              }
              s !== null ? ((s.return = G), (J = s)) : Yt(m);
            }
            t = t.sibling;
          }
        g: for (t = null, m = g; ; ) {
          if (m.tag === 5) {
            if (t === null) {
              t = m;
              try {
                (l = m.stateNode),
                  o
                    ? ((e = l.style),
                      typeof e.setProperty == "function"
                        ? e.setProperty("display", "none", "important")
                        : (e.display = "none"))
                    : ((d = m.stateNode),
                      (c = m.memoizedProps.style),
                      (n =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (d.style.display = PZ("display", n)));
              } catch (b) {
                Ig(g, g.return, b);
              }
            }
          } else if (m.tag === 6) {
            if (t === null)
              try {
                m.stateNode.nodeValue = o ? "" : m.memoizedProps;
              } catch (b) {
                Ig(g, g.return, b);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === g) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === g) break g;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === g) break g;
            t === m && (t = null), (m = m.return);
          }
          t === m && (t = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Pg(I, g), AI(g), A & 4 && Rt(g);
      break;
    case 21:
      break;
    default:
      Pg(I, g), AI(g);
  }
}
function AI(g) {
  var I = g.flags;
  if (I & 2) {
    try {
      g: {
        for (var C = g.return; C !== null; ) {
          if (WG(C)) {
            var A = C;
            break g;
          }
          C = C.return;
        }
        throw Error(h(160));
      }
      switch (A.tag) {
        case 5:
          var l = A.stateNode;
          A.flags & 32 && (zA(l, ""), (A.flags &= -33));
          var e = pt(g);
          Td(g, e, l);
          break;
        case 3:
        case 4:
          var n = A.stateNode.containerInfo,
            d = pt(g);
          Dd(g, d, n);
          break;
        default:
          throw Error(h(161));
      }
    } catch (c) {
      Ig(g, g.return, c);
    }
    g.flags &= -3;
  }
  I & 4096 && (g.flags &= -4097);
}
function jb(g, I, C) {
  (J = g), hG(g);
}
function hG(g, I, C) {
  for (var A = (g.mode & 1) !== 0; J !== null; ) {
    var l = J,
      e = l.child;
    if (l.tag === 22 && A) {
      var n = l.memoizedState !== null || Nl;
      if (!n) {
        var d = l.alternate,
          c = (d !== null && d.memoizedState !== null) || yg;
        d = Nl;
        var o = yg;
        if (((Nl = n), (yg = c) && !o))
          for (J = l; J !== null; )
            (n = J),
              (c = n.child),
              n.tag === 22 && n.memoizedState !== null
                ? kt(l)
                : c !== null
                ? ((c.return = n), (J = c))
                : kt(l);
        for (; e !== null; ) (J = e), hG(e), (e = e.sibling);
        (J = l), (Nl = d), (yg = o);
      }
      Jt(g);
    } else
      l.subtreeFlags & 8772 && e !== null ? ((e.return = l), (J = e)) : Jt(g);
  }
}
function Jt(g) {
  for (; J !== null; ) {
    var I = J;
    if (I.flags & 8772) {
      var C = I.alternate;
      try {
        if (I.flags & 8772)
          switch (I.tag) {
            case 0:
            case 11:
            case 15:
              yg || xe(5, I);
              break;
            case 1:
              var A = I.stateNode;
              if (I.flags & 4 && !yg)
                if (C === null) A.componentDidMount();
                else {
                  var l =
                    I.elementType === I.type
                      ? C.memoizedProps
                      : Og(I.type, C.memoizedProps);
                  A.componentDidUpdate(
                    l,
                    C.memoizedState,
                    A.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var e = I.updateQueue;
              e !== null && mt(I, e, A);
              break;
            case 3:
              var n = I.updateQueue;
              if (n !== null) {
                if (((C = null), I.child !== null))
                  switch (I.child.tag) {
                    case 5:
                      C = I.child.stateNode;
                      break;
                    case 1:
                      C = I.child.stateNode;
                  }
                mt(I, n, C);
              }
              break;
            case 5:
              var d = I.stateNode;
              if (C === null && I.flags & 4) {
                C = d;
                var c = I.memoizedProps;
                switch (I.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && C.focus();
                    break;
                  case "img":
                    c.src && (C.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (I.memoizedState === null) {
                var o = I.alternate;
                if (o !== null) {
                  var t = o.memoizedState;
                  if (t !== null) {
                    var m = t.dehydrated;
                    m !== null && EA(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(h(163));
          }
        yg || (I.flags & 512 && Ld(I));
      } catch (G) {
        Ig(I, I.return, G);
      }
    }
    if (I === g) {
      J = null;
      break;
    }
    if (((C = I.sibling), C !== null)) {
      (C.return = I.return), (J = C);
      break;
    }
    J = I.return;
  }
}
function Yt(g) {
  for (; J !== null; ) {
    var I = J;
    if (I === g) {
      J = null;
      break;
    }
    var C = I.sibling;
    if (C !== null) {
      (C.return = I.return), (J = C);
      break;
    }
    J = I.return;
  }
}
function kt(g) {
  for (; J !== null; ) {
    var I = J;
    try {
      switch (I.tag) {
        case 0:
        case 11:
        case 15:
          var C = I.return;
          try {
            xe(4, I);
          } catch (c) {
            Ig(I, C, c);
          }
          break;
        case 1:
          var A = I.stateNode;
          if (typeof A.componentDidMount == "function") {
            var l = I.return;
            try {
              A.componentDidMount();
            } catch (c) {
              Ig(I, l, c);
            }
          }
          var e = I.return;
          try {
            Ld(I);
          } catch (c) {
            Ig(I, e, c);
          }
          break;
        case 5:
          var n = I.return;
          try {
            Ld(I);
          } catch (c) {
            Ig(I, n, c);
          }
      }
    } catch (c) {
      Ig(I, I.return, c);
    }
    if (I === g) {
      J = null;
      break;
    }
    var d = I.sibling;
    if (d !== null) {
      (d.return = I.return), (J = d);
      break;
    }
    J = I.return;
  }
}
var Pb = Math.ceil,
  We = XI.ReactCurrentDispatcher,
  Dc = XI.ReactCurrentOwner,
  Lg = XI.ReactCurrentBatchConfig,
  w = 0,
  mg = null,
  ng = null,
  bg = 0,
  Kg = 0,
  wC = _I(0),
  og = 0,
  gl = null,
  GC = 0,
  Ee = 0,
  Tc = 0,
  NA = null,
  pg = null,
  jc = 0,
  _C = 1 / 0,
  aI = null,
  Ve = !1,
  jd = null,
  MI = null,
  Fl = !1,
  wI = null,
  Se = 0,
  FA = 0,
  Pd = null,
  jl = -1,
  Pl = 0;
function Sg() {
  return w & 6 ? Ag() : jl !== -1 ? jl : (jl = Ag());
}
function LI(g) {
  return g.mode & 1
    ? w & 2 && bg !== 0
      ? bg & -bg
      : Hb.transition !== null
      ? (Pl === 0 && (Pl = cm()), Pl)
      : ((g = U),
        g !== 0 || ((g = window.event), (g = g === void 0 ? 16 : im(g.type))),
        g)
    : 1;
}
function gI(g, I, C, A) {
  if (50 < FA) throw ((FA = 0), (Pd = null), Error(h(185)));
  ol(g, C, A),
    (!(w & 2) || g !== mg) &&
      (g === mg && (!(w & 2) && (Ee |= C), og === 4 && NI(g, bg)),
      kg(g, A),
      C === 1 && w === 0 && !(I.mode & 1) && ((_C = Ag() + 500), ze && $I()));
}
function kg(g, I) {
  var C = g.callbackNode;
  Hi(g, I);
  var A = de(g, g === mg ? bg : 0);
  if (A === 0)
    C !== null && Qo(C), (g.callbackNode = null), (g.callbackPriority = 0);
  else if (((I = A & -A), g.callbackPriority !== I)) {
    if ((C != null && Qo(C), I === 1))
      g.tag === 0 ? kb(Ht.bind(null, g)) : vm(Ht.bind(null, g)),
        pb(function () {
          !(w & 6) && $I();
        }),
        (C = null);
    else {
      switch (om(A)) {
        case 1:
          C = rc;
          break;
        case 4:
          C = nm;
          break;
        case 16:
          C = ne;
          break;
        case 536870912:
          C = dm;
          break;
        default:
          C = ne;
      }
      C = KG(C, XG.bind(null, g));
    }
    (g.callbackPriority = I), (g.callbackNode = C);
  }
}
function XG(g, I) {
  if (((jl = -1), (Pl = 0), w & 6)) throw Error(h(327));
  var C = g.callbackNode;
  if (EC() && g.callbackNode !== C) return null;
  var A = de(g, g === mg ? bg : 0);
  if (A === 0) return null;
  if (A & 30 || A & g.expiredLanes || I) I = he(g, A);
  else {
    I = A;
    var l = w;
    w |= 2;
    var e = RG();
    (mg !== g || bg !== I) && ((aI = null), (_C = Ag() + 500), cC(g, I));
    do
      try {
        _b();
        break;
      } catch (d) {
        pG(g, d);
      }
    while (1);
    Kc(),
      (We.current = e),
      (w = l),
      ng !== null ? (I = 0) : ((mg = null), (bg = 0), (I = og));
  }
  if (I !== 0) {
    if (
      (I === 2 && ((l = Wd(g)), l !== 0 && ((A = l), (I = Od(g, l)))), I === 1)
    )
      throw ((C = gl), cC(g, 0), NI(g, A), kg(g, Ag()), C);
    if (I === 6) NI(g, A);
    else {
      if (
        ((l = g.current.alternate),
        !(A & 30) &&
          !Ob(l) &&
          ((I = he(g, A)),
          I === 2 && ((e = Wd(g)), e !== 0 && ((A = e), (I = Od(g, e)))),
          I === 1))
      )
        throw ((C = gl), cC(g, 0), NI(g, A), kg(g, Ag()), C);
      switch (((g.finishedWork = l), (g.finishedLanes = A), I)) {
        case 0:
        case 1:
          throw Error(h(345));
        case 2:
          AC(g, pg, aI);
          break;
        case 3:
          if (
            (NI(g, A), (A & 130023424) === A && ((I = jc + 500 - Ag()), 10 < I))
          ) {
            if (de(g, 0) !== 0) break;
            if (((l = g.suspendedLanes), (l & A) !== A)) {
              Sg(), (g.pingedLanes |= g.suspendedLanes & l);
              break;
            }
            g.timeoutHandle = Yd(AC.bind(null, g, pg, aI), I);
            break;
          }
          AC(g, pg, aI);
          break;
        case 4:
          if ((NI(g, A), (A & 4194240) === A)) break;
          for (I = g.eventTimes, l = -1; 0 < A; ) {
            var n = 31 - $g(A);
            (e = 1 << n), (n = I[n]), n > l && (l = n), (A &= ~e);
          }
          if (
            ((A = l),
            (A = Ag() - A),
            (A =
              (120 > A
                ? 120
                : 480 > A
                ? 480
                : 1080 > A
                ? 1080
                : 1920 > A
                ? 1920
                : 3e3 > A
                ? 3e3
                : 4320 > A
                ? 4320
                : 1960 * Pb(A / 1960)) - A),
            10 < A)
          ) {
            g.timeoutHandle = Yd(AC.bind(null, g, pg, aI), A);
            break;
          }
          AC(g, pg, aI);
          break;
        case 5:
          AC(g, pg, aI);
          break;
        default:
          throw Error(h(329));
      }
    }
  }
  return kg(g, Ag()), g.callbackNode === C ? XG.bind(null, g) : null;
}
function Od(g, I) {
  var C = NA;
  return (
    g.current.memoizedState.isDehydrated && (cC(g, I).flags |= 256),
    (g = he(g, I)),
    g !== 2 && ((I = pg), (pg = C), I !== null && qd(I)),
    g
  );
}
function qd(g) {
  pg === null ? (pg = g) : pg.push.apply(pg, g);
}
function Ob(g) {
  for (var I = g; ; ) {
    if (I.flags & 16384) {
      var C = I.updateQueue;
      if (C !== null && ((C = C.stores), C !== null))
        for (var A = 0; A < C.length; A++) {
          var l = C[A],
            e = l.getSnapshot;
          l = l.value;
          try {
            if (!II(e(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((C = I.child), I.subtreeFlags & 16384 && C !== null))
      (C.return = I), (I = C);
    else {
      if (I === g) break;
      for (; I.sibling === null; ) {
        if (I.return === null || I.return === g) return !0;
        I = I.return;
      }
      (I.sibling.return = I.return), (I = I.sibling);
    }
  }
  return !0;
}
function NI(g, I) {
  for (
    I &= ~Tc,
      I &= ~Ee,
      g.suspendedLanes |= I,
      g.pingedLanes &= ~I,
      g = g.expirationTimes;
    0 < I;

  ) {
    var C = 31 - $g(I),
      A = 1 << C;
    (g[C] = -1), (I &= ~A);
  }
}
function Ht(g) {
  if (w & 6) throw Error(h(327));
  EC();
  var I = de(g, 0);
  if (!(I & 1)) return kg(g, Ag()), null;
  var C = he(g, I);
  if (g.tag !== 0 && C === 2) {
    var A = Wd(g);
    A !== 0 && ((I = A), (C = Od(g, A)));
  }
  if (C === 1) throw ((C = gl), cC(g, 0), NI(g, I), kg(g, Ag()), C);
  if (C === 6) throw Error(h(345));
  return (
    (g.finishedWork = g.current.alternate),
    (g.finishedLanes = I),
    AC(g, pg, aI),
    kg(g, Ag()),
    null
  );
}
function Pc(g, I) {
  var C = w;
  w |= 1;
  try {
    return g(I);
  } finally {
    (w = C), w === 0 && ((_C = Ag() + 500), ze && $I());
  }
}
function aC(g) {
  wI !== null && wI.tag === 0 && !(w & 6) && EC();
  var I = w;
  w |= 1;
  var C = Lg.transition,
    A = U;
  try {
    if (((Lg.transition = null), (U = 1), g)) return g();
  } finally {
    (U = A), (Lg.transition = C), (w = I), !(w & 6) && $I();
  }
}
function Oc() {
  (Kg = wC.current), L(wC);
}
function cC(g, I) {
  (g.finishedWork = null), (g.finishedLanes = 0);
  var C = g.timeoutHandle;
  if ((C !== -1 && ((g.timeoutHandle = -1), Xb(C)), ng !== null))
    for (C = ng.return; C !== null; ) {
      var A = C;
      switch ((Yc(A), A.tag)) {
        case 1:
          (A = A.type.childContextTypes), A != null && me();
          break;
        case 3:
          OC(), L(Jg), L(Wg), zc();
          break;
        case 5:
          fc(A);
          break;
        case 4:
          OC();
          break;
        case 13:
          L(O);
          break;
        case 19:
          L(O);
          break;
        case 10:
          vc(A.type._context);
          break;
        case 22:
        case 23:
          Oc();
      }
      C = C.return;
    }
  if (
    ((mg = g),
    (ng = g = DI(g.current, null)),
    (bg = Kg = I),
    (og = 0),
    (gl = null),
    (Tc = Ee = GC = 0),
    (pg = NA = null),
    nC !== null)
  ) {
    for (I = 0; I < nC.length; I++)
      if (((C = nC[I]), (A = C.interleaved), A !== null)) {
        C.interleaved = null;
        var l = A.next,
          e = C.pending;
        if (e !== null) {
          var n = e.next;
          (e.next = l), (A.next = n);
        }
        C.pending = A;
      }
    nC = null;
  }
  return g;
}
function pG(g, I) {
  do {
    var C = ng;
    try {
      if ((Kc(), (Ll.current = ye), re)) {
        for (var A = q.memoizedState; A !== null; ) {
          var l = A.queue;
          l !== null && (l.pending = null), (A = A.next);
        }
        re = !1;
      }
      if (
        ((mC = 0),
        (Zg = cg = q = null),
        (KA = !1),
        (qA = 0),
        (Dc.current = null),
        C === null || C.return === null)
      ) {
        (og = 1), (gl = I), (ng = null);
        break;
      }
      g: {
        var e = g,
          n = C.return,
          d = C,
          c = I;
        if (
          ((I = bg),
          (d.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var o = c,
            t = d,
            m = t.tag;
          if (!(t.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var G = t.alternate;
            G
              ? ((t.updateQueue = G.updateQueue),
                (t.memoizedState = G.memoizedState),
                (t.lanes = G.lanes))
              : ((t.updateQueue = null), (t.memoizedState = null));
          }
          var s = Bt(n);
          if (s !== null) {
            (s.flags &= -257),
              rt(s, n, d, e, I),
              s.mode & 1 && st(e, o, I),
              (I = s),
              (c = o);
            var i = I.updateQueue;
            if (i === null) {
              var b = new Set();
              b.add(c), (I.updateQueue = b);
            } else i.add(c);
            break g;
          } else {
            if (!(I & 1)) {
              st(e, o, I), qc();
              break g;
            }
            c = Error(h(426));
          }
        } else if (P && d.mode & 1) {
          var V = Bt(n);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256),
              rt(V, n, d, e, I),
              kc(qC(c, d));
            break g;
          }
        }
        (e = c = qC(c, d)),
          og !== 4 && (og = 2),
          NA === null ? (NA = [e]) : NA.push(e),
          (e = n);
        do {
          switch (e.tag) {
            case 3:
              (e.flags |= 65536), (I &= -I), (e.lanes |= I);
              var a = tG(e, c, I);
              Zt(e, a);
              break g;
            case 1:
              d = c;
              var Z = e.type,
                u = e.stateNode;
              if (
                !(e.flags & 128) &&
                (typeof Z.getDerivedStateFromError == "function" ||
                  (u !== null &&
                    typeof u.componentDidCatch == "function" &&
                    (MI === null || !MI.has(u))))
              ) {
                (e.flags |= 65536), (I &= -I), (e.lanes |= I);
                var r = ZG(e, d, I);
                Zt(e, r);
                break g;
              }
          }
          e = e.return;
        } while (e !== null);
      }
      YG(C);
    } catch (X) {
      (I = X), ng === C && C !== null && (ng = C = C.return);
      continue;
    }
    break;
  } while (1);
}
function RG() {
  var g = We.current;
  return (We.current = ye), g === null ? ye : g;
}
function qc() {
  (og === 0 || og === 3 || og === 2) && (og = 4),
    mg === null || (!(GC & 268435455) && !(Ee & 268435455)) || NI(mg, bg);
}
function he(g, I) {
  var C = w;
  w |= 2;
  var A = RG();
  (mg !== g || bg !== I) && ((aI = null), cC(g, I));
  do
    try {
      qb();
      break;
    } catch (l) {
      pG(g, l);
    }
  while (1);
  if ((Kc(), (w = C), (We.current = A), ng !== null)) throw Error(h(261));
  return (mg = null), (bg = 0), og;
}
function qb() {
  for (; ng !== null; ) JG(ng);
}
function _b() {
  for (; ng !== null && !Vi(); ) JG(ng);
}
function JG(g) {
  var I = HG(g.alternate, g, Kg);
  (g.memoizedProps = g.pendingProps),
    I === null ? YG(g) : (ng = I),
    (Dc.current = null);
}
function YG(g) {
  var I = g;
  do {
    var C = I.alternate;
    if (((g = I.return), I.flags & 32768)) {
      if (((C = Lb(C, I)), C !== null)) {
        (C.flags &= 32767), (ng = C);
        return;
      }
      if (g !== null)
        (g.flags |= 32768), (g.subtreeFlags = 0), (g.deletions = null);
      else {
        (og = 6), (ng = null);
        return;
      }
    } else if (((C = Mb(C, I, Kg)), C !== null)) {
      ng = C;
      return;
    }
    if (((I = I.sibling), I !== null)) {
      ng = I;
      return;
    }
    ng = I = g;
  } while (I !== null);
  og === 0 && (og = 5);
}
function AC(g, I, C) {
  var A = U,
    l = Lg.transition;
  try {
    (Lg.transition = null), (U = 1), $b(g, I, C, A);
  } finally {
    (Lg.transition = l), (U = A);
  }
  return null;
}
function $b(g, I, C, A) {
  do EC();
  while (wI !== null);
  if (w & 6) throw Error(h(327));
  C = g.finishedWork;
  var l = g.finishedLanes;
  if (C === null) return null;
  if (((g.finishedWork = null), (g.finishedLanes = 0), C === g.current))
    throw Error(h(177));
  (g.callbackNode = null), (g.callbackPriority = 0);
  var e = C.lanes | C.childLanes;
  if (
    (Ki(g, e),
    g === mg && ((ng = mg = null), (bg = 0)),
    (!(C.subtreeFlags & 2064) && !(C.flags & 2064)) ||
      Fl ||
      ((Fl = !0),
      KG(ne, function () {
        return EC(), null;
      })),
    (e = (C.flags & 15990) !== 0),
    C.subtreeFlags & 15990 || e)
  ) {
    (e = Lg.transition), (Lg.transition = null);
    var n = U;
    U = 1;
    var d = w;
    (w |= 4),
      (Dc.current = null),
      Tb(g, C),
      SG(C, g),
      Bb(Rd),
      (ce = !!pd),
      (Rd = pd = null),
      (g.current = C),
      jb(C),
      Si(),
      (w = d),
      (U = n),
      (Lg.transition = e);
  } else g.current = C;
  if (
    (Fl && ((Fl = !1), (wI = g), (Se = l)),
    (e = g.pendingLanes),
    e === 0 && (MI = null),
    pi(C.stateNode),
    kg(g, Ag()),
    I !== null)
  )
    for (A = g.onRecoverableError, C = 0; C < I.length; C++)
      (l = I[C]), A(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ve) throw ((Ve = !1), (g = jd), (jd = null), g);
  return (
    Se & 1 && g.tag !== 0 && EC(),
    (e = g.pendingLanes),
    e & 1 ? (g === Pd ? FA++ : ((FA = 0), (Pd = g))) : (FA = 0),
    $I(),
    null
  );
}
function EC() {
  if (wI !== null) {
    var g = om(Se),
      I = Lg.transition,
      C = U;
    try {
      if (((Lg.transition = null), (U = 16 > g ? 16 : g), wI === null))
        var A = !1;
      else {
        if (((g = wI), (wI = null), (Se = 0), w & 6)) throw Error(h(331));
        var l = w;
        for (w |= 4, J = g.current; J !== null; ) {
          var e = J,
            n = e.child;
          if (J.flags & 16) {
            var d = e.deletions;
            if (d !== null) {
              for (var c = 0; c < d.length; c++) {
                var o = d[c];
                for (J = o; J !== null; ) {
                  var t = J;
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vA(8, t, e);
                  }
                  var m = t.child;
                  if (m !== null) (m.return = t), (J = m);
                  else
                    for (; J !== null; ) {
                      t = J;
                      var G = t.sibling,
                        s = t.return;
                      if ((yG(t), t === o)) {
                        J = null;
                        break;
                      }
                      if (G !== null) {
                        (G.return = s), (J = G);
                        break;
                      }
                      J = s;
                    }
                }
              }
              var i = e.alternate;
              if (i !== null) {
                var b = i.child;
                if (b !== null) {
                  i.child = null;
                  do {
                    var V = b.sibling;
                    (b.sibling = null), (b = V);
                  } while (b !== null);
                }
              }
              J = e;
            }
          }
          if (e.subtreeFlags & 2064 && n !== null) (n.return = e), (J = n);
          else
            g: for (; J !== null; ) {
              if (((e = J), e.flags & 2048))
                switch (e.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vA(9, e, e.return);
                }
              var a = e.sibling;
              if (a !== null) {
                (a.return = e.return), (J = a);
                break g;
              }
              J = e.return;
            }
        }
        var Z = g.current;
        for (J = Z; J !== null; ) {
          n = J;
          var u = n.child;
          if (n.subtreeFlags & 2064 && u !== null) (u.return = n), (J = u);
          else
            g: for (n = Z; J !== null; ) {
              if (((d = J), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xe(9, d);
                  }
                } catch (X) {
                  Ig(d, d.return, X);
                }
              if (d === n) {
                J = null;
                break g;
              }
              var r = d.sibling;
              if (r !== null) {
                (r.return = d.return), (J = r);
                break g;
              }
              J = d.return;
            }
        }
        if (
          ((w = l), $I(), tI && typeof tI.onPostCommitFiberRoot == "function")
        )
          try {
            tI.onPostCommitFiberRoot(ve, g);
          } catch {}
        A = !0;
      }
      return A;
    } finally {
      (U = C), (Lg.transition = I);
    }
  }
  return !1;
}
function Kt(g, I, C) {
  (I = qC(C, I)),
    (I = tG(g, I, 1)),
    (g = EI(g, I, 1)),
    (I = Sg()),
    g !== null && (ol(g, 1, I), kg(g, I));
}
function Ig(g, I, C) {
  if (g.tag === 3) Kt(g, g, C);
  else
    for (; I !== null; ) {
      if (I.tag === 3) {
        Kt(I, g, C);
        break;
      } else if (I.tag === 1) {
        var A = I.stateNode;
        if (
          typeof I.type.getDerivedStateFromError == "function" ||
          (typeof A.componentDidCatch == "function" &&
            (MI === null || !MI.has(A)))
        ) {
          (g = qC(C, g)),
            (g = ZG(I, g, 1)),
            (I = EI(I, g, 1)),
            (g = Sg()),
            I !== null && (ol(I, 1, g), kg(I, g));
          break;
        }
      }
      I = I.return;
    }
}
function gu(g, I, C) {
  var A = g.pingCache;
  A !== null && A.delete(I),
    (I = Sg()),
    (g.pingedLanes |= g.suspendedLanes & C),
    mg === g &&
      (bg & C) === C &&
      (og === 4 || (og === 3 && (bg & 130023424) === bg && 500 > Ag() - jc)
        ? cC(g, 0)
        : (Tc |= C)),
    kg(g, I);
}
function kG(g, I) {
  I === 0 &&
    (g.mode & 1
      ? ((I = Xl), (Xl <<= 1), !(Xl & 130023424) && (Xl = 4194304))
      : (I = 1));
  var C = Sg();
  (g = VI(g, I)), g !== null && (ol(g, I, C), kg(g, C));
}
function Iu(g) {
  var I = g.memoizedState,
    C = 0;
  I !== null && (C = I.retryLane), kG(g, C);
}
function Cu(g, I) {
  var C = 0;
  switch (g.tag) {
    case 13:
      var A = g.stateNode,
        l = g.memoizedState;
      l !== null && (C = l.retryLane);
      break;
    case 19:
      A = g.stateNode;
      break;
    default:
      throw Error(h(314));
  }
  A !== null && A.delete(I), kG(g, C);
}
var HG;
HG = function (g, I, C) {
  if (g !== null)
    if (g.memoizedProps !== I.pendingProps || Jg.current) Rg = !0;
    else {
      if (!(g.lanes & C) && !(I.flags & 128)) return (Rg = !1), Eb(g, I, C);
      Rg = !!(g.flags & 131072);
    }
  else (Rg = !1), P && I.flags & 1048576 && Nm(I, ie, I.index);
  switch (((I.lanes = 0), I.tag)) {
    case 2:
      var A = I.type;
      Tl(g, I), (g = I.pendingProps);
      var l = TC(I, Wg.current);
      xC(I, C), (l = Uc(null, I, A, g, l, C));
      var e = xc();
      return (
        (I.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((I.tag = 1),
            (I.memoizedState = null),
            (I.updateQueue = null),
            Yg(A) ? ((e = !0), Ge(I)) : (e = !1),
            (I.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Fc(I),
            (l.updater = Qe),
            (I.stateNode = l),
            (l._reactInternals = I),
            wd(I, A, g, C),
            (I = Qd(null, I, A, !0, e, C)))
          : ((I.tag = 0), P && e && Jc(I), Vg(null, I, l, C), (I = I.child)),
        I
      );
    case 16:
      A = I.elementType;
      g: {
        switch (
          (Tl(g, I),
          (g = I.pendingProps),
          (l = A._init),
          (A = l(A._payload)),
          (I.type = A),
          (l = I.tag = lu(A)),
          (g = Og(A, g)),
          l)
        ) {
          case 0:
            I = zd(null, I, A, g, C);
            break g;
          case 1:
            I = Vt(null, I, A, g, C);
            break g;
          case 11:
            I = yt(null, I, A, g, C);
            break g;
          case 14:
            I = Wt(null, I, A, Og(A.type, g), C);
            break g;
        }
        throw Error(h(306, A, ""));
      }
      return I;
    case 0:
      return (
        (A = I.type),
        (l = I.pendingProps),
        (l = I.elementType === A ? l : Og(A, l)),
        zd(g, I, A, l, C)
      );
    case 1:
      return (
        (A = I.type),
        (l = I.pendingProps),
        (l = I.elementType === A ? l : Og(A, l)),
        Vt(g, I, A, l, C)
      );
    case 3:
      g: {
        if ((iG(I), g === null)) throw Error(h(387));
        (A = I.pendingProps),
          (e = I.memoizedState),
          (l = e.element),
          zm(g, I),
          se(I, A, null, C);
        var n = I.memoizedState;
        if (((A = n.element), e.isDehydrated))
          if (
            ((e = {
              element: A,
              isDehydrated: !1,
              cache: n.cache,
              pendingSuspenseBoundaries: n.pendingSuspenseBoundaries,
              transitions: n.transitions,
            }),
            (I.updateQueue.baseState = e),
            (I.memoizedState = e),
            I.flags & 256)
          ) {
            (l = qC(Error(h(423)), I)), (I = St(g, I, A, C, l));
            break g;
          } else if (A !== l) {
            (l = qC(Error(h(424)), I)), (I = St(g, I, A, C, l));
            break g;
          } else
            for (
              Ng = xI(I.stateNode.containerInfo.firstChild),
                Fg = I,
                P = !0,
                _g = null,
                C = Em(I, null, A, C),
                I.child = C;
              C;

            )
              (C.flags = (C.flags & -3) | 4096), (C = C.sibling);
        else {
          if ((jC(), A === l)) {
            I = SI(g, I, C);
            break g;
          }
          Vg(g, I, A, C);
        }
        I = I.child;
      }
      return I;
    case 5:
      return (
        Mm(I),
        g === null && vd(I),
        (A = I.type),
        (l = I.pendingProps),
        (e = g !== null ? g.memoizedProps : null),
        (n = l.children),
        Jd(A, l) ? (n = null) : e !== null && Jd(A, e) && (I.flags |= 32),
        aG(g, I),
        Vg(g, I, n, C),
        I.child
      );
    case 6:
      return g === null && vd(I), null;
    case 13:
      return bG(g, I, C);
    case 4:
      return (
        wc(I, I.stateNode.containerInfo),
        (A = I.pendingProps),
        g === null ? (I.child = PC(I, null, A, C)) : Vg(g, I, A, C),
        I.child
      );
    case 11:
      return (
        (A = I.type),
        (l = I.pendingProps),
        (l = I.elementType === A ? l : Og(A, l)),
        yt(g, I, A, l, C)
      );
    case 7:
      return Vg(g, I, I.pendingProps, C), I.child;
    case 8:
      return Vg(g, I, I.pendingProps.children, C), I.child;
    case 12:
      return Vg(g, I, I.pendingProps.children, C), I.child;
    case 10:
      g: {
        if (
          ((A = I.type._context),
          (l = I.pendingProps),
          (e = I.memoizedProps),
          (n = l.value),
          E(be, A._currentValue),
          (A._currentValue = n),
          e !== null)
        )
          if (II(e.value, n)) {
            if (e.children === l.children && !Jg.current) {
              I = SI(g, I, C);
              break g;
            }
          } else
            for (e = I.child, e !== null && (e.return = I); e !== null; ) {
              var d = e.dependencies;
              if (d !== null) {
                n = e.child;
                for (var c = d.firstContext; c !== null; ) {
                  if (c.context === A) {
                    if (e.tag === 1) {
                      (c = sI(-1, C & -C)), (c.tag = 2);
                      var o = e.updateQueue;
                      if (o !== null) {
                        o = o.shared;
                        var t = o.pending;
                        t === null
                          ? (c.next = c)
                          : ((c.next = t.next), (t.next = c)),
                          (o.pending = c);
                      }
                    }
                    (e.lanes |= C),
                      (c = e.alternate),
                      c !== null && (c.lanes |= C),
                      Nd(e.return, C, I),
                      (d.lanes |= C);
                    break;
                  }
                  c = c.next;
                }
              } else if (e.tag === 10) n = e.type === I.type ? null : e.child;
              else if (e.tag === 18) {
                if (((n = e.return), n === null)) throw Error(h(341));
                (n.lanes |= C),
                  (d = n.alternate),
                  d !== null && (d.lanes |= C),
                  Nd(n, C, I),
                  (n = e.sibling);
              } else n = e.child;
              if (n !== null) n.return = e;
              else
                for (n = e; n !== null; ) {
                  if (n === I) {
                    n = null;
                    break;
                  }
                  if (((e = n.sibling), e !== null)) {
                    (e.return = n.return), (n = e);
                    break;
                  }
                  n = n.return;
                }
              e = n;
            }
        Vg(g, I, l.children, C), (I = I.child);
      }
      return I;
    case 9:
      return (
        (l = I.type),
        (A = I.pendingProps.children),
        xC(I, C),
        (l = Tg(l)),
        (A = A(l)),
        (I.flags |= 1),
        Vg(g, I, A, C),
        I.child
      );
    case 14:
      return (
        (A = I.type),
        (l = Og(A, I.pendingProps)),
        (l = Og(A.type, l)),
        Wt(g, I, A, l, C)
      );
    case 15:
      return mG(g, I, I.type, I.pendingProps, C);
    case 17:
      return (
        (A = I.type),
        (l = I.pendingProps),
        (l = I.elementType === A ? l : Og(A, l)),
        Tl(g, I),
        (I.tag = 1),
        Yg(A) ? ((g = !0), Ge(I)) : (g = !1),
        xC(I, C),
        Um(I, A, l),
        wd(I, A, l, C),
        Qd(null, I, A, !0, g, C)
      );
    case 19:
      return uG(g, I, C);
    case 22:
      return GG(g, I, C);
  }
  throw Error(h(156, I.tag));
};
function KG(g, I) {
  return em(g, I);
}
function Au(g, I, C, A) {
  (this.tag = g),
    (this.key = C),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = I),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = A),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Mg(g, I, C, A) {
  return new Au(g, I, C, A);
}
function _c(g) {
  return (g = g.prototype), !(!g || !g.isReactComponent);
}
function lu(g) {
  if (typeof g == "function") return _c(g) ? 1 : 0;
  if (g != null) {
    if (((g = g.$$typeof), g === uc)) return 11;
    if (g === sc) return 14;
  }
  return 2;
}
function DI(g, I) {
  var C = g.alternate;
  return (
    C === null
      ? ((C = Mg(g.tag, I, g.key, g.mode)),
        (C.elementType = g.elementType),
        (C.type = g.type),
        (C.stateNode = g.stateNode),
        (C.alternate = g),
        (g.alternate = C))
      : ((C.pendingProps = I),
        (C.type = g.type),
        (C.flags = 0),
        (C.subtreeFlags = 0),
        (C.deletions = null)),
    (C.flags = g.flags & 14680064),
    (C.childLanes = g.childLanes),
    (C.lanes = g.lanes),
    (C.child = g.child),
    (C.memoizedProps = g.memoizedProps),
    (C.memoizedState = g.memoizedState),
    (C.updateQueue = g.updateQueue),
    (I = g.dependencies),
    (C.dependencies =
      I === null ? null : { lanes: I.lanes, firstContext: I.firstContext }),
    (C.sibling = g.sibling),
    (C.index = g.index),
    (C.ref = g.ref),
    C
  );
}
function Ol(g, I, C, A, l, e) {
  var n = 2;
  if (((A = g), typeof g == "function")) _c(g) && (n = 1);
  else if (typeof g == "string") n = 5;
  else
    g: switch (g) {
      case pC:
        return oC(C.children, l, e, I);
      case bc:
        (n = 8), (l |= 8);
        break;
      case dd:
        return (
          (g = Mg(12, C, I, l | 2)), (g.elementType = dd), (g.lanes = e), g
        );
      case cd:
        return (g = Mg(13, C, I, l)), (g.elementType = cd), (g.lanes = e), g;
      case od:
        return (g = Mg(19, C, I, l)), (g.elementType = od), (g.lanes = e), g;
      case xZ:
        return Me(C, l, e, I);
      default:
        if (typeof g == "object" && g !== null)
          switch (g.$$typeof) {
            case QZ:
              n = 10;
              break g;
            case UZ:
              n = 9;
              break g;
            case uc:
              n = 11;
              break g;
            case sc:
              n = 14;
              break g;
            case HI:
              (n = 16), (A = null);
              break g;
          }
        throw Error(h(130, g == null ? g : typeof g, ""));
    }
  return (
    (I = Mg(n, C, I, l)), (I.elementType = g), (I.type = A), (I.lanes = e), I
  );
}
function oC(g, I, C, A) {
  return (g = Mg(7, g, A, I)), (g.lanes = C), g;
}
function Me(g, I, C, A) {
  return (
    (g = Mg(22, g, A, I)),
    (g.elementType = xZ),
    (g.lanes = C),
    (g.stateNode = { isHidden: !1 }),
    g
  );
}
function Pn(g, I, C) {
  return (g = Mg(6, g, null, I)), (g.lanes = C), g;
}
function On(g, I, C) {
  return (
    (I = Mg(4, g.children !== null ? g.children : [], g.key, I)),
    (I.lanes = C),
    (I.stateNode = {
      containerInfo: g.containerInfo,
      pendingChildren: null,
      implementation: g.implementation,
    }),
    I
  );
}
function eu(g, I, C, A, l) {
  (this.tag = I),
    (this.containerInfo = g),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yn(0)),
    (this.expirationTimes = Yn(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yn(0)),
    (this.identifierPrefix = A),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function $c(g, I, C, A, l, e, n, d, c) {
  return (
    (g = new eu(g, I, C, d, c)),
    I === 1 ? ((I = 1), e === !0 && (I |= 8)) : (I = 0),
    (e = Mg(3, null, null, I)),
    (g.current = e),
    (e.stateNode = g),
    (e.memoizedState = {
      element: A,
      isDehydrated: C,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fc(e),
    g
  );
}
function nu(g, I, C) {
  var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: XC,
    key: A == null ? null : "" + A,
    children: g,
    containerInfo: I,
    implementation: C,
  };
}
function vG(g) {
  if (!g) return OI;
  g = g._reactInternals;
  g: {
    if (bC(g) !== g || g.tag !== 1) throw Error(h(170));
    var I = g;
    do {
      switch (I.tag) {
        case 3:
          I = I.stateNode.context;
          break g;
        case 1:
          if (Yg(I.type)) {
            I = I.stateNode.__reactInternalMemoizedMergedChildContext;
            break g;
          }
      }
      I = I.return;
    } while (I !== null);
    throw Error(h(171));
  }
  if (g.tag === 1) {
    var C = g.type;
    if (Yg(C)) return Km(g, C, I);
  }
  return I;
}
function NG(g, I, C, A, l, e, n, d, c) {
  return (
    (g = $c(C, A, !0, g, l, e, n, d, c)),
    (g.context = vG(null)),
    (C = g.current),
    (A = Sg()),
    (l = LI(C)),
    (e = sI(A, l)),
    (e.callback = I ?? null),
    EI(C, e, l),
    (g.current.lanes = l),
    ol(g, l, A),
    kg(g, A),
    g
  );
}
function Le(g, I, C, A) {
  var l = I.current,
    e = Sg(),
    n = LI(l);
  return (
    (C = vG(C)),
    I.context === null ? (I.context = C) : (I.pendingContext = C),
    (I = sI(e, n)),
    (I.payload = { element: g }),
    (A = A === void 0 ? null : A),
    A !== null && (I.callback = A),
    (g = EI(l, I, n)),
    g !== null && (gI(g, l, n, e), Ml(g, l, n)),
    n
  );
}
function Xe(g) {
  if (((g = g.current), !g.child)) return null;
  switch (g.child.tag) {
    case 5:
      return g.child.stateNode;
    default:
      return g.child.stateNode;
  }
}
function vt(g, I) {
  if (((g = g.memoizedState), g !== null && g.dehydrated !== null)) {
    var C = g.retryLane;
    g.retryLane = C !== 0 && C < I ? C : I;
  }
}
function go(g, I) {
  vt(g, I), (g = g.alternate) && vt(g, I);
}
function du() {
  return null;
}
var FG =
  typeof reportError == "function"
    ? reportError
    : function (g) {
        console.error(g);
      };
function Io(g) {
  this._internalRoot = g;
}
De.prototype.render = Io.prototype.render = function (g) {
  var I = this._internalRoot;
  if (I === null) throw Error(h(409));
  Le(g, I, null, null);
};
De.prototype.unmount = Io.prototype.unmount = function () {
  var g = this._internalRoot;
  if (g !== null) {
    this._internalRoot = null;
    var I = g.containerInfo;
    aC(function () {
      Le(null, g, null, null);
    }),
      (I[WI] = null);
  }
};
function De(g) {
  this._internalRoot = g;
}
De.prototype.unstable_scheduleHydration = function (g) {
  if (g) {
    var I = mm();
    g = { blockedOn: null, target: g, priority: I };
    for (var C = 0; C < vI.length && I !== 0 && I < vI[C].priority; C++);
    vI.splice(C, 0, g), C === 0 && am(g);
  }
};
function Co(g) {
  return !(!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11));
}
function Te(g) {
  return !(
    !g ||
    (g.nodeType !== 1 &&
      g.nodeType !== 9 &&
      g.nodeType !== 11 &&
      (g.nodeType !== 8 || g.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nt() {}
function cu(g, I, C, A, l) {
  if (l) {
    if (typeof A == "function") {
      var e = A;
      A = function () {
        var o = Xe(n);
        e.call(o);
      };
    }
    var n = NG(I, A, g, 0, null, !1, !1, "", Nt);
    return (
      (g._reactRootContainer = n),
      (g[WI] = n.current),
      DA(g.nodeType === 8 ? g.parentNode : g),
      aC(),
      n
    );
  }
  for (; (l = g.lastChild); ) g.removeChild(l);
  if (typeof A == "function") {
    var d = A;
    A = function () {
      var o = Xe(c);
      d.call(o);
    };
  }
  var c = $c(g, 0, !1, null, null, !1, !1, "", Nt);
  return (
    (g._reactRootContainer = c),
    (g[WI] = c.current),
    DA(g.nodeType === 8 ? g.parentNode : g),
    aC(function () {
      Le(I, c, C, A);
    }),
    c
  );
}
function je(g, I, C, A, l) {
  var e = C._reactRootContainer;
  if (e) {
    var n = e;
    if (typeof l == "function") {
      var d = l;
      l = function () {
        var c = Xe(n);
        d.call(c);
      };
    }
    Le(I, n, g, l);
  } else n = cu(C, I, g, l, A);
  return Xe(n);
}
tm = function (g) {
  switch (g.tag) {
    case 3:
      var I = g.stateNode;
      if (I.current.memoizedState.isDehydrated) {
        var C = XA(I.pendingLanes);
        C !== 0 &&
          (yc(I, C | 1), kg(I, Ag()), !(w & 6) && ((_C = Ag() + 500), $I()));
      }
      break;
    case 13:
      aC(function () {
        var A = VI(g, 1);
        if (A !== null) {
          var l = Sg();
          gI(A, g, 1, l);
        }
      }),
        go(g, 1);
  }
};
Wc = function (g) {
  if (g.tag === 13) {
    var I = VI(g, 134217728);
    if (I !== null) {
      var C = Sg();
      gI(I, g, 134217728, C);
    }
    go(g, 134217728);
  }
};
Zm = function (g) {
  if (g.tag === 13) {
    var I = LI(g),
      C = VI(g, I);
    if (C !== null) {
      var A = Sg();
      gI(C, g, I, A);
    }
    go(g, I);
  }
};
mm = function () {
  return U;
};
Gm = function (g, I) {
  var C = U;
  try {
    return (U = g), I();
  } finally {
    U = C;
  }
};
Bd = function (g, I, C) {
  switch (I) {
    case "input":
      if ((md(g, C), (I = C.name), C.type === "radio" && I != null)) {
        for (C = g; C.parentNode; ) C = C.parentNode;
        for (
          C = C.querySelectorAll(
            "input[name=" + JSON.stringify("" + I) + '][type="radio"]'
          ),
            I = 0;
          I < C.length;
          I++
        ) {
          var A = C[I];
          if (A !== g && A.form === g.form) {
            var l = fe(A);
            if (!l) throw Error(h(90));
            MZ(A), md(A, l);
          }
        }
      }
      break;
    case "textarea":
      DZ(g, C);
      break;
    case "select":
      (I = C.value), I != null && fC(g, !!C.multiple, I, !1);
  }
};
$Z = Pc;
gm = aC;
var ou = { usingClientEntryPoint: !1, Events: [Zl, kC, fe, qZ, _Z, Pc] },
  rA = {
    findFiberByHostInstance: eC,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  tu = {
    bundleType: rA.bundleType,
    version: rA.version,
    rendererPackageName: rA.rendererPackageName,
    rendererConfig: rA.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: XI.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (g) {
      return (g = Am(g)), g === null ? null : g.stateNode;
    },
    findFiberByHostInstance: rA.findFiberByHostInstance || du,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      (ve = wl.inject(tu)), (tI = wl);
    } catch {}
}
zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ou;
zg.createPortal = function (g, I) {
  var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Co(I)) throw Error(h(200));
  return nu(g, I, null, C);
};
zg.createRoot = function (g, I) {
  if (!Co(g)) throw Error(h(299));
  var C = !1,
    A = "",
    l = FG;
  return (
    I != null &&
      (I.unstable_strictMode === !0 && (C = !0),
      I.identifierPrefix !== void 0 && (A = I.identifierPrefix),
      I.onRecoverableError !== void 0 && (l = I.onRecoverableError)),
    (I = $c(g, 1, !1, null, null, C, !1, A, l)),
    (g[WI] = I.current),
    DA(g.nodeType === 8 ? g.parentNode : g),
    new Io(I)
  );
};
zg.findDOMNode = function (g) {
  if (g == null) return null;
  if (g.nodeType === 1) return g;
  var I = g._reactInternals;
  if (I === void 0)
    throw typeof g.render == "function"
      ? Error(h(188))
      : ((g = Object.keys(g).join(",")), Error(h(268, g)));
  return (g = Am(I)), (g = g === null ? null : g.stateNode), g;
};
zg.flushSync = function (g) {
  return aC(g);
};
zg.hydrate = function (g, I, C) {
  if (!Te(I)) throw Error(h(200));
  return je(null, g, I, !0, C);
};
zg.hydrateRoot = function (g, I, C) {
  if (!Co(g)) throw Error(h(405));
  var A = (C != null && C.hydratedSources) || null,
    l = !1,
    e = "",
    n = FG;
  if (
    (C != null &&
      (C.unstable_strictMode === !0 && (l = !0),
      C.identifierPrefix !== void 0 && (e = C.identifierPrefix),
      C.onRecoverableError !== void 0 && (n = C.onRecoverableError)),
    (I = NG(I, null, g, 1, C ?? null, l, !1, e, n)),
    (g[WI] = I.current),
    DA(g),
    A)
  )
    for (g = 0; g < A.length; g++)
      (C = A[g]),
        (l = C._getVersion),
        (l = l(C._source)),
        I.mutableSourceEagerHydrationData == null
          ? (I.mutableSourceEagerHydrationData = [C, l])
          : I.mutableSourceEagerHydrationData.push(C, l);
  return new De(I);
};
zg.render = function (g, I, C) {
  if (!Te(I)) throw Error(h(200));
  return je(null, g, I, !1, C);
};
zg.unmountComponentAtNode = function (g) {
  if (!Te(g)) throw Error(h(40));
  return g._reactRootContainer
    ? (aC(function () {
        je(null, null, g, !1, function () {
          (g._reactRootContainer = null), (g[WI] = null);
        });
      }),
      !0)
    : !1;
};
zg.unstable_batchedUpdates = Pc;
zg.unstable_renderSubtreeIntoContainer = function (g, I, C, A) {
  if (!Te(C)) throw Error(h(200));
  if (g == null || g._reactInternals === void 0) throw Error(h(38));
  return je(g, I, C, !1, A);
};
zg.version = "18.2.0-next-9e3b772b8-20220608";
function wG() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wG);
    } catch (g) {
      console.error(g);
    }
}
wG(), (NZ.exports = zg);
var Zu = NZ.exports,
  Ft = Zu;
(ed.createRoot = Ft.createRoot), (ed.hydrateRoot = Ft.hydrateRoot);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Il() {
  return (
    (Il = Object.assign
      ? Object.assign.bind()
      : function (g) {
          for (var I = 1; I < arguments.length; I++) {
            var C = arguments[I];
            for (var A in C)
              Object.prototype.hasOwnProperty.call(C, A) && (g[A] = C[A]);
          }
          return g;
        }),
    Il.apply(this, arguments)
  );
}
var fI;
(function (g) {
  (g.Pop = "POP"), (g.Push = "PUSH"), (g.Replace = "REPLACE");
})(fI || (fI = {}));
const wt = "popstate";
function mu(g) {
  g === void 0 && (g = {});
  function I(A, l) {
    let { pathname: e, search: n, hash: d } = A.location;
    return _d(
      "",
      { pathname: e, search: n, hash: d },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function C(A, l) {
    return typeof l == "string" ? l : pe(l);
  }
  return au(I, C, null, g);
}
function lg(g, I) {
  if (g === !1 || g === null || typeof g > "u") throw new Error(I);
}
function Ao(g, I) {
  if (!g) {
    typeof console < "u" && console.warn(I);
    try {
      throw new Error(I);
    } catch {}
  }
}
function Gu() {
  return Math.random().toString(36).substr(2, 8);
}
function ft(g, I) {
  return { usr: g.state, key: g.key, idx: I };
}
function _d(g, I, C, A) {
  return (
    C === void 0 && (C = null),
    Il(
      { pathname: typeof g == "string" ? g : g.pathname, search: "", hash: "" },
      typeof I == "string" ? nA(I) : I,
      { state: C, key: (I && I.key) || A || Gu() }
    )
  );
}
function pe(g) {
  let { pathname: I = "/", search: C = "", hash: A = "" } = g;
  return (
    C && C !== "?" && (I += C.charAt(0) === "?" ? C : "?" + C),
    A && A !== "#" && (I += A.charAt(0) === "#" ? A : "#" + A),
    I
  );
}
function nA(g) {
  let I = {};
  if (g) {
    let C = g.indexOf("#");
    C >= 0 && ((I.hash = g.substr(C)), (g = g.substr(0, C)));
    let A = g.indexOf("?");
    A >= 0 && ((I.search = g.substr(A)), (g = g.substr(0, A))),
      g && (I.pathname = g);
  }
  return I;
}
function au(g, I, C, A) {
  A === void 0 && (A = {});
  let { window: l = document.defaultView, v5Compat: e = !1 } = A,
    n = l.history,
    d = fI.Pop,
    c = null,
    o = t();
  o == null && ((o = 0), n.replaceState(Il({}, n.state, { idx: o }), ""));
  function t() {
    return (n.state || { idx: null }).idx;
  }
  function m() {
    d = fI.Pop;
    let V = t(),
      a = V == null ? null : V - o;
    (o = V), c && c({ action: d, location: b.location, delta: a });
  }
  function G(V, a) {
    d = fI.Push;
    let Z = _d(b.location, V, a);
    C && C(Z, V), (o = t() + 1);
    let u = ft(Z, o),
      r = b.createHref(Z);
    try {
      n.pushState(u, "", r);
    } catch (X) {
      if (X instanceof DOMException && X.name === "DataCloneError") throw X;
      l.location.assign(r);
    }
    e && c && c({ action: d, location: b.location, delta: 1 });
  }
  function s(V, a) {
    d = fI.Replace;
    let Z = _d(b.location, V, a);
    C && C(Z, V), (o = t());
    let u = ft(Z, o),
      r = b.createHref(Z);
    n.replaceState(u, "", r),
      e && c && c({ action: d, location: b.location, delta: 0 });
  }
  function i(V) {
    let a = l.location.origin !== "null" ? l.location.origin : l.location.href,
      Z = typeof V == "string" ? V : pe(V);
    return (
      lg(
        a,
        "No window.location.(origin|href) available to create URL for href: " +
          Z
      ),
      new URL(Z, a)
    );
  }
  let b = {
    get action() {
      return d;
    },
    get location() {
      return g(l, n);
    },
    listen(V) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(wt, m),
        (c = V),
        () => {
          l.removeEventListener(wt, m), (c = null);
        }
      );
    },
    createHref(V) {
      return I(l, V);
    },
    createURL: i,
    encodeLocation(V) {
      let a = i(V);
      return { pathname: a.pathname, search: a.search, hash: a.hash };
    },
    push: G,
    replace: s,
    go(V) {
      return n.go(V);
    },
  };
  return b;
}
var zt;
(function (g) {
  (g.data = "data"),
    (g.deferred = "deferred"),
    (g.redirect = "redirect"),
    (g.error = "error");
})(zt || (zt = {}));
function iu(g, I, C) {
  C === void 0 && (C = "/");
  let A = typeof I == "string" ? nA(I) : I,
    l = lo(A.pathname || "/", C);
  if (l == null) return null;
  let e = fG(g);
  bu(e);
  let n = null;
  for (let d = 0; n == null && d < e.length; ++d) n = hu(e[d], Ru(l));
  return n;
}
function fG(g, I, C, A) {
  I === void 0 && (I = []), C === void 0 && (C = []), A === void 0 && (A = "");
  let l = (e, n, d) => {
    let c = {
      relativePath: d === void 0 ? e.path || "" : d,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: n,
      route: e,
    };
    c.relativePath.startsWith("/") &&
      (lg(
        c.relativePath.startsWith(A),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + A + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(A.length)));
    let o = TI([A, c.relativePath]),
      t = C.concat(c);
    e.children &&
      e.children.length > 0 &&
      (lg(
        e.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + o + '".')
      ),
      fG(e.children, I, t, o)),
      !(e.path == null && !e.index) &&
        I.push({ path: o, score: Vu(o, e.index), routesMeta: t });
  };
  return (
    g.forEach((e, n) => {
      var d;
      if (e.path === "" || !((d = e.path) != null && d.includes("?"))) l(e, n);
      else for (let c of zG(e.path)) l(e, n, c);
    }),
    I
  );
}
function zG(g) {
  let I = g.split("/");
  if (I.length === 0) return [];
  let [C, ...A] = I,
    l = C.endsWith("?"),
    e = C.replace(/\?$/, "");
  if (A.length === 0) return l ? [e, ""] : [e];
  let n = zG(A.join("/")),
    d = [];
  return (
    d.push(...n.map((c) => (c === "" ? e : [e, c].join("/")))),
    l && d.push(...n),
    d.map((c) => (g.startsWith("/") && c === "" ? "/" : c))
  );
}
function bu(g) {
  g.sort((I, C) =>
    I.score !== C.score
      ? C.score - I.score
      : Su(
          I.routesMeta.map((A) => A.childrenIndex),
          C.routesMeta.map((A) => A.childrenIndex)
        )
  );
}
const uu = /^:\w+$/,
  su = 3,
  Bu = 2,
  ru = 1,
  yu = 10,
  Wu = -2,
  Qt = (g) => g === "*";
function Vu(g, I) {
  let C = g.split("/"),
    A = C.length;
  return (
    C.some(Qt) && (A += Wu),
    I && (A += Bu),
    C.filter((l) => !Qt(l)).reduce(
      (l, e) => l + (uu.test(e) ? su : e === "" ? ru : yu),
      A
    )
  );
}
function Su(g, I) {
  return g.length === I.length && g.slice(0, -1).every((A, l) => A === I[l])
    ? g[g.length - 1] - I[I.length - 1]
    : 0;
}
function hu(g, I) {
  let { routesMeta: C } = g,
    A = {},
    l = "/",
    e = [];
  for (let n = 0; n < C.length; ++n) {
    let d = C[n],
      c = n === C.length - 1,
      o = l === "/" ? I : I.slice(l.length) || "/",
      t = Xu(
        { path: d.relativePath, caseSensitive: d.caseSensitive, end: c },
        o
      );
    if (!t) return null;
    Object.assign(A, t.params);
    let m = d.route;
    e.push({
      params: A,
      pathname: TI([l, t.pathname]),
      pathnameBase: Hu(TI([l, t.pathnameBase])),
      route: m,
    }),
      t.pathnameBase !== "/" && (l = TI([l, t.pathnameBase]));
  }
  return e;
}
function Xu(g, I) {
  typeof g == "string" && (g = { path: g, caseSensitive: !1, end: !0 });
  let [C, A] = pu(g.path, g.caseSensitive, g.end),
    l = I.match(C);
  if (!l) return null;
  let e = l[0],
    n = e.replace(/(.)\/+$/, "$1"),
    d = l.slice(1);
  return {
    params: A.reduce((o, t, m) => {
      let { paramName: G, isOptional: s } = t;
      if (G === "*") {
        let b = d[m] || "";
        n = e.slice(0, e.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const i = d[m];
      return s && !i ? (o[G] = void 0) : (o[G] = Ju(i || "", G)), o;
    }, {}),
    pathname: e,
    pathnameBase: n,
    pattern: g,
  };
}
function pu(g, I, C) {
  I === void 0 && (I = !1),
    C === void 0 && (C = !0),
    Ao(
      g === "*" || !g.endsWith("*") || g.endsWith("/*"),
      'Route path "' +
        g +
        '" will be treated as if it were ' +
        ('"' + g.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + g.replace(/\*$/, "/*") + '".')
    );
  let A = [],
    l =
      "^" +
      g
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (n, d, c) => (
            A.push({ paramName: d, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    g.endsWith("*")
      ? (A.push({ paramName: "*" }),
        (l += g === "*" || g === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : C
      ? (l += "\\/*$")
      : g !== "" && g !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, I ? void 0 : "i"), A]
  );
}
function Ru(g) {
  try {
    return decodeURI(g);
  } catch (I) {
    return (
      Ao(
        !1,
        'The URL path "' +
          g +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + I + ").")
      ),
      g
    );
  }
}
function Ju(g, I) {
  try {
    return decodeURIComponent(g);
  } catch (C) {
    return (
      Ao(
        !1,
        'The value for the URL param "' +
          I +
          '" will not be decoded because' +
          (' the string "' +
            g +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + C + ").")
      ),
      g
    );
  }
}
function lo(g, I) {
  if (I === "/") return g;
  if (!g.toLowerCase().startsWith(I.toLowerCase())) return null;
  let C = I.endsWith("/") ? I.length - 1 : I.length,
    A = g.charAt(C);
  return A && A !== "/" ? null : g.slice(C) || "/";
}
function Yu(g, I) {
  I === void 0 && (I = "/");
  let {
    pathname: C,
    search: A = "",
    hash: l = "",
  } = typeof g == "string" ? nA(g) : g;
  return {
    pathname: C ? (C.startsWith("/") ? C : ku(C, I)) : I,
    search: Ku(A),
    hash: vu(l),
  };
}
function ku(g, I) {
  let C = I.replace(/\/+$/, "").split("/");
  return (
    g.split("/").forEach((l) => {
      l === ".." ? C.length > 1 && C.pop() : l !== "." && C.push(l);
    }),
    C.length > 1 ? C.join("/") : "/"
  );
}
function qn(g, I, C, A) {
  return (
    "Cannot include a '" +
    g +
    "' character in a manually specified " +
    ("`to." +
      I +
      "` field [" +
      JSON.stringify(A) +
      "].  Please separate it out to the ") +
    ("`to." + C + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function eo(g) {
  return g.filter(
    (I, C) => C === 0 || (I.route.path && I.route.path.length > 0)
  );
}
function no(g, I, C, A) {
  A === void 0 && (A = !1);
  let l;
  typeof g == "string"
    ? (l = nA(g))
    : ((l = Il({}, g)),
      lg(
        !l.pathname || !l.pathname.includes("?"),
        qn("?", "pathname", "search", l)
      ),
      lg(
        !l.pathname || !l.pathname.includes("#"),
        qn("#", "pathname", "hash", l)
      ),
      lg(!l.search || !l.search.includes("#"), qn("#", "search", "hash", l)));
  let e = g === "" || l.pathname === "",
    n = e ? "/" : l.pathname,
    d;
  if (A || n == null) d = C;
  else {
    let m = I.length - 1;
    if (n.startsWith("..")) {
      let G = n.split("/");
      for (; G[0] === ".."; ) G.shift(), (m -= 1);
      l.pathname = G.join("/");
    }
    d = m >= 0 ? I[m] : "/";
  }
  let c = Yu(l, d),
    o = n && n !== "/" && n.endsWith("/"),
    t = (e || n === ".") && C.endsWith("/");
  return !c.pathname.endsWith("/") && (o || t) && (c.pathname += "/"), c;
}
const TI = (g) => g.join("/").replace(/\/\/+/g, "/"),
  Hu = (g) => g.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ku = (g) => (!g || g === "?" ? "" : g.startsWith("?") ? g : "?" + g),
  vu = (g) => (!g || g === "#" ? "" : g.startsWith("#") ? g : "#" + g);
function Nu(g) {
  return (
    g != null &&
    typeof g.status == "number" &&
    typeof g.statusText == "string" &&
    typeof g.internal == "boolean" &&
    "data" in g
  );
}
const QG = ["post", "put", "patch", "delete"];
new Set(QG);
const Fu = ["get", ...QG];
new Set(Fu);
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Re() {
  return (
    (Re = Object.assign
      ? Object.assign.bind()
      : function (g) {
          for (var I = 1; I < arguments.length; I++) {
            var C = arguments[I];
            for (var A in C)
              Object.prototype.hasOwnProperty.call(C, A) && (g[A] = C[A]);
          }
          return g;
        }),
    Re.apply(this, arguments)
  );
}
const co = y.createContext(null),
  wu = y.createContext(null),
  dA = y.createContext(null),
  Pe = y.createContext(null),
  pI = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  UG = y.createContext(null);
function fu(g, I) {
  let { relative: C } = I === void 0 ? {} : I;
  cA() || lg(!1);
  let { basename: A, navigator: l } = y.useContext(dA),
    { hash: e, pathname: n, search: d } = EG(g, { relative: C }),
    c = n;
  return (
    A !== "/" && (c = n === "/" ? A : TI([A, n])),
    l.createHref({ pathname: c, search: d, hash: e })
  );
}
function cA() {
  return y.useContext(Pe) != null;
}
function Gl() {
  return cA() || lg(!1), y.useContext(Pe).location;
}
function xG(g) {
  y.useContext(dA).static || y.useLayoutEffect(g);
}
function oA() {
  let { isDataRoute: g } = y.useContext(pI);
  return g ? $u() : zu();
}
function zu() {
  cA() || lg(!1);
  let g = y.useContext(co),
    { basename: I, navigator: C } = y.useContext(dA),
    { matches: A } = y.useContext(pI),
    { pathname: l } = Gl(),
    e = JSON.stringify(eo(A).map((c) => c.pathnameBase)),
    n = y.useRef(!1);
  return (
    xG(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (c, o) {
        if ((o === void 0 && (o = {}), !n.current)) return;
        if (typeof c == "number") {
          C.go(c);
          return;
        }
        let t = no(c, JSON.parse(e), l, o.relative === "path");
        g == null &&
          I !== "/" &&
          (t.pathname = t.pathname === "/" ? I : TI([I, t.pathname])),
          (o.replace ? C.replace : C.push)(t, o.state, o);
      },
      [I, C, e, l, g]
    )
  );
}
const Qu = y.createContext(null);
function Uu(g) {
  let I = y.useContext(pI).outlet;
  return I && y.createElement(Qu.Provider, { value: g }, I);
}
function EG(g, I) {
  let { relative: C } = I === void 0 ? {} : I,
    { matches: A } = y.useContext(pI),
    { pathname: l } = Gl(),
    e = JSON.stringify(eo(A).map((n) => n.pathnameBase));
  return y.useMemo(() => no(g, JSON.parse(e), l, C === "path"), [g, e, l, C]);
}
function xu(g, I) {
  return Eu(g, I);
}
function Eu(g, I, C) {
  cA() || lg(!1);
  let { navigator: A } = y.useContext(dA),
    { matches: l } = y.useContext(pI),
    e = l[l.length - 1],
    n = e ? e.params : {};
  e && e.pathname;
  let d = e ? e.pathnameBase : "/";
  e && e.route;
  let c = Gl(),
    o;
  if (I) {
    var t;
    let b = typeof I == "string" ? nA(I) : I;
    d === "/" || ((t = b.pathname) != null && t.startsWith(d)) || lg(!1),
      (o = b);
  } else o = c;
  let m = o.pathname || "/",
    G = d === "/" ? m : m.slice(d.length) || "/",
    s = iu(g, { pathname: G }),
    i = ju(
      s &&
        s.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, n, b.params),
            pathname: TI([
              d,
              A.encodeLocation
                ? A.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? d
                : TI([
                    d,
                    A.encodeLocation
                      ? A.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      l,
      C
    );
  return I && i
    ? y.createElement(
        Pe.Provider,
        {
          value: {
            location: Re(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              o
            ),
            navigationType: fI.Pop,
          },
        },
        i
      )
    : i;
}
function Mu() {
  let g = _u(),
    I = Nu(g)
      ? g.status + " " + g.statusText
      : g instanceof Error
      ? g.message
      : JSON.stringify(g),
    C = g instanceof Error ? g.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    e = null;
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, I),
    C ? y.createElement("pre", { style: l }, C) : null,
    e
  );
}
const Lu = y.createElement(Mu, null);
class Du extends y.Component {
  constructor(I) {
    super(I),
      (this.state = {
        location: I.location,
        revalidation: I.revalidation,
        error: I.error,
      });
  }
  static getDerivedStateFromError(I) {
    return { error: I };
  }
  static getDerivedStateFromProps(I, C) {
    return C.location !== I.location ||
      (C.revalidation !== "idle" && I.revalidation === "idle")
      ? { error: I.error, location: I.location, revalidation: I.revalidation }
      : {
          error: I.error || C.error,
          location: C.location,
          revalidation: I.revalidation || C.revalidation,
        };
  }
  componentDidCatch(I, C) {
    console.error(
      "React Router caught the following error during render",
      I,
      C
    );
  }
  render() {
    return this.state.error
      ? y.createElement(
          pI.Provider,
          { value: this.props.routeContext },
          y.createElement(UG.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Tu(g) {
  let { routeContext: I, match: C, children: A } = g,
    l = y.useContext(co);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (C.route.errorElement || C.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = C.route.id),
    y.createElement(pI.Provider, { value: I }, A)
  );
}
function ju(g, I, C) {
  var A;
  if ((I === void 0 && (I = []), C === void 0 && (C = null), g == null)) {
    var l;
    if ((l = C) != null && l.errors) g = C.matches;
    else return null;
  }
  let e = g,
    n = (A = C) == null ? void 0 : A.errors;
  if (n != null) {
    let d = e.findIndex(
      (c) => c.route.id && (n == null ? void 0 : n[c.route.id])
    );
    d >= 0 || lg(!1), (e = e.slice(0, Math.min(e.length, d + 1)));
  }
  return e.reduceRight((d, c, o) => {
    let t = c.route.id ? (n == null ? void 0 : n[c.route.id]) : null,
      m = null;
    C && (m = c.route.errorElement || Lu);
    let G = I.concat(e.slice(0, o + 1)),
      s = () => {
        let i;
        return (
          t
            ? (i = m)
            : c.route.Component
            ? (i = y.createElement(c.route.Component, null))
            : c.route.element
            ? (i = c.route.element)
            : (i = d),
          y.createElement(Tu, {
            match: c,
            routeContext: { outlet: d, matches: G, isDataRoute: C != null },
            children: i,
          })
        );
      };
    return C && (c.route.ErrorBoundary || c.route.errorElement || o === 0)
      ? y.createElement(Du, {
          location: C.location,
          revalidation: C.revalidation,
          component: m,
          error: t,
          children: s(),
          routeContext: { outlet: null, matches: G, isDataRoute: !0 },
        })
      : s();
  }, null);
}
var MG = (function (g) {
    return (
      (g.UseBlocker = "useBlocker"),
      (g.UseRevalidator = "useRevalidator"),
      (g.UseNavigateStable = "useNavigate"),
      g
    );
  })(MG || {}),
  Je = (function (g) {
    return (
      (g.UseBlocker = "useBlocker"),
      (g.UseLoaderData = "useLoaderData"),
      (g.UseActionData = "useActionData"),
      (g.UseRouteError = "useRouteError"),
      (g.UseNavigation = "useNavigation"),
      (g.UseRouteLoaderData = "useRouteLoaderData"),
      (g.UseMatches = "useMatches"),
      (g.UseRevalidator = "useRevalidator"),
      (g.UseNavigateStable = "useNavigate"),
      (g.UseRouteId = "useRouteId"),
      g
    );
  })(Je || {});
function Pu(g) {
  let I = y.useContext(co);
  return I || lg(!1), I;
}
function Ou(g) {
  let I = y.useContext(wu);
  return I || lg(!1), I;
}
function qu(g) {
  let I = y.useContext(pI);
  return I || lg(!1), I;
}
function LG(g) {
  let I = qu(),
    C = I.matches[I.matches.length - 1];
  return C.route.id || lg(!1), C.route.id;
}
function _u() {
  var g;
  let I = y.useContext(UG),
    C = Ou(Je.UseRouteError),
    A = LG(Je.UseRouteError);
  return I || ((g = C.errors) == null ? void 0 : g[A]);
}
function $u() {
  let { router: g } = Pu(MG.UseNavigateStable),
    I = LG(Je.UseNavigateStable),
    C = y.useRef(!1);
  return (
    xG(() => {
      C.current = !0;
    }),
    y.useCallback(
      function (l, e) {
        e === void 0 && (e = {}),
          C.current &&
            (typeof l == "number"
              ? g.navigate(l)
              : g.navigate(l, Re({ fromRouteId: I }, e)));
      },
      [g, I]
    )
  );
}
function gs(g) {
  let { to: I, replace: C, state: A, relative: l } = g;
  cA() || lg(!1);
  let { matches: e } = y.useContext(pI),
    { pathname: n } = Gl(),
    d = oA(),
    c = no(
      I,
      eo(e).map((t) => t.pathnameBase),
      n,
      l === "path"
    ),
    o = JSON.stringify(c);
  return (
    y.useEffect(
      () => d(JSON.parse(o), { replace: C, state: A, relative: l }),
      [d, o, l, C, A]
    ),
    null
  );
}
function Is(g) {
  return Uu(g.context);
}
function hC(g) {
  lg(!1);
}
function Cs(g) {
  let {
    basename: I = "/",
    children: C = null,
    location: A,
    navigationType: l = fI.Pop,
    navigator: e,
    static: n = !1,
  } = g;
  cA() && lg(!1);
  let d = I.replace(/^\/*/, "/"),
    c = y.useMemo(() => ({ basename: d, navigator: e, static: n }), [d, e, n]);
  typeof A == "string" && (A = nA(A));
  let {
      pathname: o = "/",
      search: t = "",
      hash: m = "",
      state: G = null,
      key: s = "default",
    } = A,
    i = y.useMemo(() => {
      let b = lo(o, d);
      return b == null
        ? null
        : {
            location: { pathname: b, search: t, hash: m, state: G, key: s },
            navigationType: l,
          };
    }, [d, o, t, m, G, s, l]);
  return i == null
    ? null
    : y.createElement(
        dA.Provider,
        { value: c },
        y.createElement(Pe.Provider, { children: C, value: i })
      );
}
function As(g) {
  let { children: I, location: C } = g;
  return xu($d(I), C);
}
new Promise(() => {});
function $d(g, I) {
  I === void 0 && (I = []);
  let C = [];
  return (
    y.Children.forEach(g, (A, l) => {
      if (!y.isValidElement(A)) return;
      let e = [...I, l];
      if (A.type === y.Fragment) {
        C.push.apply(C, $d(A.props.children, e));
        return;
      }
      A.type !== hC && lg(!1), !A.props.index || !A.props.children || lg(!1);
      let n = {
        id: A.props.id || e.join("-"),
        caseSensitive: A.props.caseSensitive,
        element: A.props.element,
        Component: A.props.Component,
        index: A.props.index,
        path: A.props.path,
        loader: A.props.loader,
        action: A.props.action,
        errorElement: A.props.errorElement,
        ErrorBoundary: A.props.ErrorBoundary,
        hasErrorBoundary:
          A.props.ErrorBoundary != null || A.props.errorElement != null,
        shouldRevalidate: A.props.shouldRevalidate,
        handle: A.props.handle,
        lazy: A.props.lazy,
      };
      A.props.children && (n.children = $d(A.props.children, e)), C.push(n);
    }),
    C
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gc() {
  return (
    (gc = Object.assign
      ? Object.assign.bind()
      : function (g) {
          for (var I = 1; I < arguments.length; I++) {
            var C = arguments[I];
            for (var A in C)
              Object.prototype.hasOwnProperty.call(C, A) && (g[A] = C[A]);
          }
          return g;
        }),
    gc.apply(this, arguments)
  );
}
function ls(g, I) {
  if (g == null) return {};
  var C = {},
    A = Object.keys(g),
    l,
    e;
  for (e = 0; e < A.length; e++)
    (l = A[e]), !(I.indexOf(l) >= 0) && (C[l] = g[l]);
  return C;
}
function es(g) {
  return !!(g.metaKey || g.altKey || g.ctrlKey || g.shiftKey);
}
function ns(g, I) {
  return g.button === 0 && (!I || I === "_self") && !es(g);
}
const ds = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  cs = "startTransition",
  Ut = ld[cs];
function os(g) {
  let { basename: I, children: C, future: A, window: l } = g,
    e = y.useRef();
  e.current == null && (e.current = mu({ window: l, v5Compat: !0 }));
  let n = e.current,
    [d, c] = y.useState({ action: n.action, location: n.location }),
    { v7_startTransition: o } = A || {},
    t = y.useCallback(
      (m) => {
        o && Ut ? Ut(() => c(m)) : c(m);
      },
      [c, o]
    );
  return (
    y.useLayoutEffect(() => n.listen(t), [n, t]),
    y.createElement(Cs, {
      basename: I,
      children: C,
      location: d.location,
      navigationType: d.action,
      navigator: n,
    })
  );
}
const ts =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Zs = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ms = y.forwardRef(function (I, C) {
    let {
        onClick: A,
        relative: l,
        reloadDocument: e,
        replace: n,
        state: d,
        target: c,
        to: o,
        preventScrollReset: t,
        unstable_viewTransition: m,
      } = I,
      G = ls(I, ds),
      { basename: s } = y.useContext(dA),
      i,
      b = !1;
    if (typeof o == "string" && Zs.test(o) && ((i = o), ts))
      try {
        let u = new URL(window.location.href),
          r = o.startsWith("//") ? new URL(u.protocol + o) : new URL(o),
          X = lo(r.pathname, s);
        r.origin === u.origin && X != null
          ? (o = X + r.search + r.hash)
          : (b = !0);
      } catch {}
    let V = fu(o, { relative: l }),
      a = Gs(o, {
        replace: n,
        state: d,
        target: c,
        preventScrollReset: t,
        relative: l,
        unstable_viewTransition: m,
      });
    function Z(u) {
      A && A(u), u.defaultPrevented || a(u);
    }
    return y.createElement(
      "a",
      gc({}, G, { href: i || V, onClick: b || e ? A : Z, ref: C, target: c })
    );
  });
var xt;
(function (g) {
  (g.UseScrollRestoration = "useScrollRestoration"),
    (g.UseSubmit = "useSubmit"),
    (g.UseSubmitFetcher = "useSubmitFetcher"),
    (g.UseFetcher = "useFetcher"),
    (g.useViewTransitionState = "useViewTransitionState");
})(xt || (xt = {}));
var Et;
(function (g) {
  (g.UseFetcher = "useFetcher"),
    (g.UseFetchers = "useFetchers"),
    (g.UseScrollRestoration = "useScrollRestoration");
})(Et || (Et = {}));
function Gs(g, I) {
  let {
      target: C,
      replace: A,
      state: l,
      preventScrollReset: e,
      relative: n,
      unstable_viewTransition: d,
    } = I === void 0 ? {} : I,
    c = oA(),
    o = Gl(),
    t = EG(g, { relative: n });
  return y.useCallback(
    (m) => {
      if (ns(m, C)) {
        m.preventDefault();
        let G = A !== void 0 ? A : pe(o) === pe(t);
        c(g, {
          replace: G,
          state: l,
          preventScrollReset: e,
          relative: n,
          unstable_viewTransition: d,
        });
      }
    },
    [o, c, t, A, l, C, g, e, n, d]
  );
}
function DG(g, I) {
  return function () {
    return g.apply(I, arguments);
  };
}
const { toString: as } = Object.prototype,
  { getPrototypeOf: oo } = Object,
  Oe = ((g) => (I) => {
    const C = as.call(I);
    return g[C] || (g[C] = C.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  GI = (g) => ((g = g.toLowerCase()), (I) => Oe(I) === g),
  qe = (g) => (I) => typeof I === g,
  { isArray: tA } = Array,
  Cl = qe("undefined");
function is(g) {
  return (
    g !== null &&
    !Cl(g) &&
    g.constructor !== null &&
    !Cl(g.constructor) &&
    Dg(g.constructor.isBuffer) &&
    g.constructor.isBuffer(g)
  );
}
const TG = GI("ArrayBuffer");
function bs(g) {
  let I;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (I = ArrayBuffer.isView(g))
      : (I = g && g.buffer && TG(g.buffer)),
    I
  );
}
const us = qe("string"),
  Dg = qe("function"),
  jG = qe("number"),
  _e = (g) => g !== null && typeof g == "object",
  ss = (g) => g === !0 || g === !1,
  ql = (g) => {
    if (Oe(g) !== "object") return !1;
    const I = oo(g);
    return (
      (I === null ||
        I === Object.prototype ||
        Object.getPrototypeOf(I) === null) &&
      !(Symbol.toStringTag in g) &&
      !(Symbol.iterator in g)
    );
  },
  Bs = GI("Date"),
  rs = GI("File"),
  ys = GI("Blob"),
  Ws = GI("FileList"),
  Vs = (g) => _e(g) && Dg(g.pipe),
  Ss = (g) => {
    let I;
    return (
      g &&
      ((typeof FormData == "function" && g instanceof FormData) ||
        (Dg(g.append) &&
          ((I = Oe(g)) === "formdata" ||
            (I === "object" &&
              Dg(g.toString) &&
              g.toString() === "[object FormData]"))))
    );
  },
  hs = GI("URLSearchParams"),
  Xs = (g) =>
    g.trim ? g.trim() : g.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function al(g, I, { allOwnKeys: C = !1 } = {}) {
  if (g === null || typeof g > "u") return;
  let A, l;
  if ((typeof g != "object" && (g = [g]), tA(g)))
    for (A = 0, l = g.length; A < l; A++) I.call(null, g[A], A, g);
  else {
    const e = C ? Object.getOwnPropertyNames(g) : Object.keys(g),
      n = e.length;
    let d;
    for (A = 0; A < n; A++) (d = e[A]), I.call(null, g[d], d, g);
  }
}
function PG(g, I) {
  I = I.toLowerCase();
  const C = Object.keys(g);
  let A = C.length,
    l;
  for (; A-- > 0; ) if (((l = C[A]), I === l.toLowerCase())) return l;
  return null;
}
const OG = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  qG = (g) => !Cl(g) && g !== OG;
function Ic() {
  const { caseless: g } = (qG(this) && this) || {},
    I = {},
    C = (A, l) => {
      const e = (g && PG(I, l)) || l;
      ql(I[e]) && ql(A)
        ? (I[e] = Ic(I[e], A))
        : ql(A)
        ? (I[e] = Ic({}, A))
        : tA(A)
        ? (I[e] = A.slice())
        : (I[e] = A);
    };
  for (let A = 0, l = arguments.length; A < l; A++)
    arguments[A] && al(arguments[A], C);
  return I;
}
const ps = (g, I, C, { allOwnKeys: A } = {}) => (
    al(
      I,
      (l, e) => {
        C && Dg(l) ? (g[e] = DG(l, C)) : (g[e] = l);
      },
      { allOwnKeys: A }
    ),
    g
  ),
  Rs = (g) => (g.charCodeAt(0) === 65279 && (g = g.slice(1)), g),
  Js = (g, I, C, A) => {
    (g.prototype = Object.create(I.prototype, A)),
      (g.prototype.constructor = g),
      Object.defineProperty(g, "super", { value: I.prototype }),
      C && Object.assign(g.prototype, C);
  },
  Ys = (g, I, C, A) => {
    let l, e, n;
    const d = {};
    if (((I = I || {}), g == null)) return I;
    do {
      for (l = Object.getOwnPropertyNames(g), e = l.length; e-- > 0; )
        (n = l[e]), (!A || A(n, g, I)) && !d[n] && ((I[n] = g[n]), (d[n] = !0));
      g = C !== !1 && oo(g);
    } while (g && (!C || C(g, I)) && g !== Object.prototype);
    return I;
  },
  ks = (g, I, C) => {
    (g = String(g)),
      (C === void 0 || C > g.length) && (C = g.length),
      (C -= I.length);
    const A = g.indexOf(I, C);
    return A !== -1 && A === C;
  },
  Hs = (g) => {
    if (!g) return null;
    if (tA(g)) return g;
    let I = g.length;
    if (!jG(I)) return null;
    const C = new Array(I);
    for (; I-- > 0; ) C[I] = g[I];
    return C;
  },
  Ks = (
    (g) => (I) =>
      g && I instanceof g
  )(typeof Uint8Array < "u" && oo(Uint8Array)),
  vs = (g, I) => {
    const A = (g && g[Symbol.iterator]).call(g);
    let l;
    for (; (l = A.next()) && !l.done; ) {
      const e = l.value;
      I.call(g, e[0], e[1]);
    }
  },
  Ns = (g, I) => {
    let C;
    const A = [];
    for (; (C = g.exec(I)) !== null; ) A.push(C);
    return A;
  },
  Fs = GI("HTMLFormElement"),
  ws = (g) =>
    g.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (C, A, l) {
      return A.toUpperCase() + l;
    }),
  Mt = (
    ({ hasOwnProperty: g }) =>
    (I, C) =>
      g.call(I, C)
  )(Object.prototype),
  fs = GI("RegExp"),
  _G = (g, I) => {
    const C = Object.getOwnPropertyDescriptors(g),
      A = {};
    al(C, (l, e) => {
      let n;
      (n = I(l, e, g)) !== !1 && (A[e] = n || l);
    }),
      Object.defineProperties(g, A);
  },
  zs = (g) => {
    _G(g, (I, C) => {
      if (Dg(g) && ["arguments", "caller", "callee"].indexOf(C) !== -1)
        return !1;
      const A = g[C];
      if (Dg(A)) {
        if (((I.enumerable = !1), "writable" in I)) {
          I.writable = !1;
          return;
        }
        I.set ||
          (I.set = () => {
            throw Error("Can not rewrite read-only method '" + C + "'");
          });
      }
    });
  },
  Qs = (g, I) => {
    const C = {},
      A = (l) => {
        l.forEach((e) => {
          C[e] = !0;
        });
      };
    return tA(g) ? A(g) : A(String(g).split(I)), C;
  },
  Us = () => {},
  xs = (g, I) => ((g = +g), Number.isFinite(g) ? g : I),
  _n = "abcdefghijklmnopqrstuvwxyz",
  Lt = "0123456789",
  $G = { DIGIT: Lt, ALPHA: _n, ALPHA_DIGIT: _n + _n.toUpperCase() + Lt },
  Es = (g = 16, I = $G.ALPHA_DIGIT) => {
    let C = "";
    const { length: A } = I;
    for (; g--; ) C += I[(Math.random() * A) | 0];
    return C;
  };
function Ms(g) {
  return !!(
    g &&
    Dg(g.append) &&
    g[Symbol.toStringTag] === "FormData" &&
    g[Symbol.iterator]
  );
}
const Ls = (g) => {
    const I = new Array(10),
      C = (A, l) => {
        if (_e(A)) {
          if (I.indexOf(A) >= 0) return;
          if (!("toJSON" in A)) {
            I[l] = A;
            const e = tA(A) ? [] : {};
            return (
              al(A, (n, d) => {
                const c = C(n, l + 1);
                !Cl(c) && (e[d] = c);
              }),
              (I[l] = void 0),
              e
            );
          }
        }
        return A;
      };
    return C(g, 0);
  },
  Ds = GI("AsyncFunction"),
  Ts = (g) => g && (_e(g) || Dg(g)) && Dg(g.then) && Dg(g.catch),
  W = {
    isArray: tA,
    isArrayBuffer: TG,
    isBuffer: is,
    isFormData: Ss,
    isArrayBufferView: bs,
    isString: us,
    isNumber: jG,
    isBoolean: ss,
    isObject: _e,
    isPlainObject: ql,
    isUndefined: Cl,
    isDate: Bs,
    isFile: rs,
    isBlob: ys,
    isRegExp: fs,
    isFunction: Dg,
    isStream: Vs,
    isURLSearchParams: hs,
    isTypedArray: Ks,
    isFileList: Ws,
    forEach: al,
    merge: Ic,
    extend: ps,
    trim: Xs,
    stripBOM: Rs,
    inherits: Js,
    toFlatObject: Ys,
    kindOf: Oe,
    kindOfTest: GI,
    endsWith: ks,
    toArray: Hs,
    forEachEntry: vs,
    matchAll: Ns,
    isHTMLForm: Fs,
    hasOwnProperty: Mt,
    hasOwnProp: Mt,
    reduceDescriptors: _G,
    freezeMethods: zs,
    toObjectSet: Qs,
    toCamelCase: ws,
    noop: Us,
    toFiniteNumber: xs,
    findKey: PG,
    global: OG,
    isContextDefined: qG,
    ALPHABET: $G,
    generateString: Es,
    isSpecCompliantForm: Ms,
    toJSONObject: Ls,
    isAsyncFn: Ds,
    isThenable: Ts,
  };
function F(g, I, C, A, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = g),
    (this.name = "AxiosError"),
    I && (this.code = I),
    C && (this.config = C),
    A && (this.request = A),
    l && (this.response = l);
}
W.inherits(F, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: W.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const ga = F.prototype,
  Ia = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((g) => {
  Ia[g] = { value: g };
});
Object.defineProperties(F, Ia);
Object.defineProperty(ga, "isAxiosError", { value: !0 });
F.from = (g, I, C, A, l, e) => {
  const n = Object.create(ga);
  return (
    W.toFlatObject(
      g,
      n,
      function (c) {
        return c !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    F.call(n, g.message, I, C, A, l),
    (n.cause = g),
    (n.name = g.name),
    e && Object.assign(n, e),
    n
  );
};
const js = null;
function Cc(g) {
  return W.isPlainObject(g) || W.isArray(g);
}
function Ca(g) {
  return W.endsWith(g, "[]") ? g.slice(0, -2) : g;
}
function Dt(g, I, C) {
  return g
    ? g
        .concat(I)
        .map(function (l, e) {
          return (l = Ca(l)), !C && e ? "[" + l + "]" : l;
        })
        .join(C ? "." : "")
    : I;
}
function Ps(g) {
  return W.isArray(g) && !g.some(Cc);
}
const Os = W.toFlatObject(W, {}, null, function (I) {
  return /^is[A-Z]/.test(I);
});
function $e(g, I, C) {
  if (!W.isObject(g)) throw new TypeError("target must be an object");
  (I = I || new FormData()),
    (C = W.toFlatObject(
      C,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (b, V) {
        return !W.isUndefined(V[b]);
      }
    ));
  const A = C.metaTokens,
    l = C.visitor || t,
    e = C.dots,
    n = C.indexes,
    c = (C.Blob || (typeof Blob < "u" && Blob)) && W.isSpecCompliantForm(I);
  if (!W.isFunction(l)) throw new TypeError("visitor must be a function");
  function o(i) {
    if (i === null) return "";
    if (W.isDate(i)) return i.toISOString();
    if (!c && W.isBlob(i))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(i) || W.isTypedArray(i)
      ? c && typeof Blob == "function"
        ? new Blob([i])
        : Buffer.from(i)
      : i;
  }
  function t(i, b, V) {
    let a = i;
    if (i && !V && typeof i == "object") {
      if (W.endsWith(b, "{}"))
        (b = A ? b : b.slice(0, -2)), (i = JSON.stringify(i));
      else if (
        (W.isArray(i) && Ps(i)) ||
        ((W.isFileList(i) || W.endsWith(b, "[]")) && (a = W.toArray(i)))
      )
        return (
          (b = Ca(b)),
          a.forEach(function (u, r) {
            !(W.isUndefined(u) || u === null) &&
              I.append(
                n === !0 ? Dt([b], r, e) : n === null ? b : b + "[]",
                o(u)
              );
          }),
          !1
        );
    }
    return Cc(i) ? !0 : (I.append(Dt(V, b, e), o(i)), !1);
  }
  const m = [],
    G = Object.assign(Os, {
      defaultVisitor: t,
      convertValue: o,
      isVisitable: Cc,
    });
  function s(i, b) {
    if (!W.isUndefined(i)) {
      if (m.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      m.push(i),
        W.forEach(i, function (a, Z) {
          (!(W.isUndefined(a) || a === null) &&
            l.call(I, a, W.isString(Z) ? Z.trim() : Z, b, G)) === !0 &&
            s(a, b ? b.concat(Z) : [Z]);
        }),
        m.pop();
    }
  }
  if (!W.isObject(g)) throw new TypeError("data must be an object");
  return s(g), I;
}
function Tt(g) {
  const I = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(g).replace(/[!'()~]|%20|%00/g, function (A) {
    return I[A];
  });
}
function to(g, I) {
  (this._pairs = []), g && $e(g, this, I);
}
const Aa = to.prototype;
Aa.append = function (I, C) {
  this._pairs.push([I, C]);
};
Aa.toString = function (I) {
  const C = I
    ? function (A) {
        return I.call(this, A, Tt);
      }
    : Tt;
  return this._pairs
    .map(function (l) {
      return C(l[0]) + "=" + C(l[1]);
    }, "")
    .join("&");
};
function qs(g) {
  return encodeURIComponent(g)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function la(g, I, C) {
  if (!I) return g;
  const A = (C && C.encode) || qs,
    l = C && C.serialize;
  let e;
  if (
    (l
      ? (e = l(I, C))
      : (e = W.isURLSearchParams(I) ? I.toString() : new to(I, C).toString(A)),
    e)
  ) {
    const n = g.indexOf("#");
    n !== -1 && (g = g.slice(0, n)),
      (g += (g.indexOf("?") === -1 ? "?" : "&") + e);
  }
  return g;
}
class _s {
  constructor() {
    this.handlers = [];
  }
  use(I, C, A) {
    return (
      this.handlers.push({
        fulfilled: I,
        rejected: C,
        synchronous: A ? A.synchronous : !1,
        runWhen: A ? A.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(I) {
    this.handlers[I] && (this.handlers[I] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(I) {
    W.forEach(this.handlers, function (A) {
      A !== null && I(A);
    });
  }
}
const jt = _s,
  ea = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  $s = typeof URLSearchParams < "u" ? URLSearchParams : to,
  gB = typeof FormData < "u" ? FormData : null,
  IB = typeof Blob < "u" ? Blob : null,
  CB = {
    isBrowser: !0,
    classes: { URLSearchParams: $s, FormData: gB, Blob: IB },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  na = typeof window < "u" && typeof document < "u",
  AB = ((g) => na && ["ReactNative", "NativeScript", "NS"].indexOf(g) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  lB = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  eB = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: na,
        hasStandardBrowserEnv: AB,
        hasStandardBrowserWebWorkerEnv: lB,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  oI = { ...eB, ...CB };
function nB(g, I) {
  return $e(
    g,
    new oI.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (C, A, l, e) {
          return oI.isNode && W.isBuffer(C)
            ? (this.append(A, C.toString("base64")), !1)
            : e.defaultVisitor.apply(this, arguments);
        },
      },
      I
    )
  );
}
function dB(g) {
  return W.matchAll(/\w+|\[(\w*)]/g, g).map((I) =>
    I[0] === "[]" ? "" : I[1] || I[0]
  );
}
function cB(g) {
  const I = {},
    C = Object.keys(g);
  let A;
  const l = C.length;
  let e;
  for (A = 0; A < l; A++) (e = C[A]), (I[e] = g[e]);
  return I;
}
function da(g) {
  function I(C, A, l, e) {
    let n = C[e++];
    const d = Number.isFinite(+n),
      c = e >= C.length;
    return (
      (n = !n && W.isArray(l) ? l.length : n),
      c
        ? (W.hasOwnProp(l, n) ? (l[n] = [l[n], A]) : (l[n] = A), !d)
        : ((!l[n] || !W.isObject(l[n])) && (l[n] = []),
          I(C, A, l[n], e) && W.isArray(l[n]) && (l[n] = cB(l[n])),
          !d)
    );
  }
  if (W.isFormData(g) && W.isFunction(g.entries)) {
    const C = {};
    return (
      W.forEachEntry(g, (A, l) => {
        I(dB(A), l, C, 0);
      }),
      C
    );
  }
  return null;
}
function oB(g, I, C) {
  if (W.isString(g))
    try {
      return (I || JSON.parse)(g), W.trim(g);
    } catch (A) {
      if (A.name !== "SyntaxError") throw A;
    }
  return (C || JSON.stringify)(g);
}
const Zo = {
  transitional: ea,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (I, C) {
      const A = C.getContentType() || "",
        l = A.indexOf("application/json") > -1,
        e = W.isObject(I);
      if ((e && W.isHTMLForm(I) && (I = new FormData(I)), W.isFormData(I)))
        return l && l ? JSON.stringify(da(I)) : I;
      if (
        W.isArrayBuffer(I) ||
        W.isBuffer(I) ||
        W.isStream(I) ||
        W.isFile(I) ||
        W.isBlob(I)
      )
        return I;
      if (W.isArrayBufferView(I)) return I.buffer;
      if (W.isURLSearchParams(I))
        return (
          C.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          I.toString()
        );
      let d;
      if (e) {
        if (A.indexOf("application/x-www-form-urlencoded") > -1)
          return nB(I, this.formSerializer).toString();
        if ((d = W.isFileList(I)) || A.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return $e(
            d ? { "files[]": I } : I,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return e || l ? (C.setContentType("application/json", !1), oB(I)) : I;
    },
  ],
  transformResponse: [
    function (I) {
      const C = this.transitional || Zo.transitional,
        A = C && C.forcedJSONParsing,
        l = this.responseType === "json";
      if (I && W.isString(I) && ((A && !this.responseType) || l)) {
        const n = !(C && C.silentJSONParsing) && l;
        try {
          return JSON.parse(I);
        } catch (d) {
          if (n)
            throw d.name === "SyntaxError"
              ? F.from(d, F.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return I;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: oI.classes.FormData, Blob: oI.classes.Blob },
  validateStatus: function (I) {
    return I >= 200 && I < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
W.forEach(["delete", "get", "head", "post", "put", "patch"], (g) => {
  Zo.headers[g] = {};
});
const mo = Zo,
  tB = W.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  ZB = (g) => {
    const I = {};
    let C, A, l;
    return (
      g &&
        g
          .split(
            `
`
          )
          .forEach(function (n) {
            (l = n.indexOf(":")),
              (C = n.substring(0, l).trim().toLowerCase()),
              (A = n.substring(l + 1).trim()),
              !(!C || (I[C] && tB[C])) &&
                (C === "set-cookie"
                  ? I[C]
                    ? I[C].push(A)
                    : (I[C] = [A])
                  : (I[C] = I[C] ? I[C] + ", " + A : A));
          }),
      I
    );
  },
  Pt = Symbol("internals");
function yA(g) {
  return g && String(g).trim().toLowerCase();
}
function _l(g) {
  return g === !1 || g == null ? g : W.isArray(g) ? g.map(_l) : String(g);
}
function mB(g) {
  const I = Object.create(null),
    C = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let A;
  for (; (A = C.exec(g)); ) I[A[1]] = A[2];
  return I;
}
const GB = (g) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(g.trim());
function $n(g, I, C, A, l) {
  if (W.isFunction(A)) return A.call(this, I, C);
  if ((l && (I = C), !!W.isString(I))) {
    if (W.isString(A)) return I.indexOf(A) !== -1;
    if (W.isRegExp(A)) return A.test(I);
  }
}
function aB(g) {
  return g
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (I, C, A) => C.toUpperCase() + A);
}
function iB(g, I) {
  const C = W.toCamelCase(" " + I);
  ["get", "set", "has"].forEach((A) => {
    Object.defineProperty(g, A + C, {
      value: function (l, e, n) {
        return this[A].call(this, I, l, e, n);
      },
      configurable: !0,
    });
  });
}
class gn {
  constructor(I) {
    I && this.set(I);
  }
  set(I, C, A) {
    const l = this;
    function e(d, c, o) {
      const t = yA(c);
      if (!t) throw new Error("header name must be a non-empty string");
      const m = W.findKey(l, t);
      (!m || l[m] === void 0 || o === !0 || (o === void 0 && l[m] !== !1)) &&
        (l[m || c] = _l(d));
    }
    const n = (d, c) => W.forEach(d, (o, t) => e(o, t, c));
    return (
      W.isPlainObject(I) || I instanceof this.constructor
        ? n(I, C)
        : W.isString(I) && (I = I.trim()) && !GB(I)
        ? n(ZB(I), C)
        : I != null && e(C, I, A),
      this
    );
  }
  get(I, C) {
    if (((I = yA(I)), I)) {
      const A = W.findKey(this, I);
      if (A) {
        const l = this[A];
        if (!C) return l;
        if (C === !0) return mB(l);
        if (W.isFunction(C)) return C.call(this, l, A);
        if (W.isRegExp(C)) return C.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(I, C) {
    if (((I = yA(I)), I)) {
      const A = W.findKey(this, I);
      return !!(A && this[A] !== void 0 && (!C || $n(this, this[A], A, C)));
    }
    return !1;
  }
  delete(I, C) {
    const A = this;
    let l = !1;
    function e(n) {
      if (((n = yA(n)), n)) {
        const d = W.findKey(A, n);
        d && (!C || $n(A, A[d], d, C)) && (delete A[d], (l = !0));
      }
    }
    return W.isArray(I) ? I.forEach(e) : e(I), l;
  }
  clear(I) {
    const C = Object.keys(this);
    let A = C.length,
      l = !1;
    for (; A--; ) {
      const e = C[A];
      (!I || $n(this, this[e], e, I, !0)) && (delete this[e], (l = !0));
    }
    return l;
  }
  normalize(I) {
    const C = this,
      A = {};
    return (
      W.forEach(this, (l, e) => {
        const n = W.findKey(A, e);
        if (n) {
          (C[n] = _l(l)), delete C[e];
          return;
        }
        const d = I ? aB(e) : String(e).trim();
        d !== e && delete C[e], (C[d] = _l(l)), (A[d] = !0);
      }),
      this
    );
  }
  concat(...I) {
    return this.constructor.concat(this, ...I);
  }
  toJSON(I) {
    const C = Object.create(null);
    return (
      W.forEach(this, (A, l) => {
        A != null && A !== !1 && (C[l] = I && W.isArray(A) ? A.join(", ") : A);
      }),
      C
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([I, C]) => I + ": " + C).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(I) {
    return I instanceof this ? I : new this(I);
  }
  static concat(I, ...C) {
    const A = new this(I);
    return C.forEach((l) => A.set(l)), A;
  }
  static accessor(I) {
    const A = (this[Pt] = this[Pt] = { accessors: {} }).accessors,
      l = this.prototype;
    function e(n) {
      const d = yA(n);
      A[d] || (iB(l, n), (A[d] = !0));
    }
    return W.isArray(I) ? I.forEach(e) : e(I), this;
  }
}
gn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
W.reduceDescriptors(gn.prototype, ({ value: g }, I) => {
  let C = I[0].toUpperCase() + I.slice(1);
  return {
    get: () => g,
    set(A) {
      this[C] = A;
    },
  };
});
W.freezeMethods(gn);
const BI = gn;
function gd(g, I) {
  const C = this || mo,
    A = I || C,
    l = BI.from(A.headers);
  let e = A.data;
  return (
    W.forEach(g, function (d) {
      e = d.call(C, e, l.normalize(), I ? I.status : void 0);
    }),
    l.normalize(),
    e
  );
}
function ca(g) {
  return !!(g && g.__CANCEL__);
}
function il(g, I, C) {
  F.call(this, g ?? "canceled", F.ERR_CANCELED, I, C),
    (this.name = "CanceledError");
}
W.inherits(il, F, { __CANCEL__: !0 });
function bB(g, I, C) {
  const A = C.config.validateStatus;
  !C.status || !A || A(C.status)
    ? g(C)
    : I(
        new F(
          "Request failed with status code " + C.status,
          [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][
            Math.floor(C.status / 100) - 4
          ],
          C.config,
          C.request,
          C
        )
      );
}
const uB = oI.hasStandardBrowserEnv
  ? (function () {
      return {
        write: function (C, A, l, e, n, d) {
          const c = [];
          c.push(C + "=" + encodeURIComponent(A)),
            W.isNumber(l) && c.push("expires=" + new Date(l).toGMTString()),
            W.isString(e) && c.push("path=" + e),
            W.isString(n) && c.push("domain=" + n),
            d === !0 && c.push("secure"),
            (document.cookie = c.join("; "));
        },
        read: function (C) {
          const A = document.cookie.match(
            new RegExp("(^|;\\s*)(" + C + ")=([^;]*)")
          );
          return A ? decodeURIComponent(A[3]) : null;
        },
        remove: function (C) {
          this.write(C, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function sB(g) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(g);
}
function BB(g, I) {
  return I ? g.replace(/\/+$/, "") + "/" + I.replace(/^\/+/, "") : g;
}
function oa(g, I) {
  return g && !sB(I) ? BB(g, I) : I;
}
const rB = oI.hasStandardBrowserEnv
  ? (function () {
      const I = /(msie|trident)/i.test(navigator.userAgent),
        C = document.createElement("a");
      let A;
      function l(e) {
        let n = e;
        return (
          I && (C.setAttribute("href", n), (n = C.href)),
          C.setAttribute("href", n),
          {
            href: C.href,
            protocol: C.protocol ? C.protocol.replace(/:$/, "") : "",
            host: C.host,
            search: C.search ? C.search.replace(/^\?/, "") : "",
            hash: C.hash ? C.hash.replace(/^#/, "") : "",
            hostname: C.hostname,
            port: C.port,
            pathname:
              C.pathname.charAt(0) === "/" ? C.pathname : "/" + C.pathname,
          }
        );
      }
      return (
        (A = l(window.location.href)),
        function (n) {
          const d = W.isString(n) ? l(n) : n;
          return d.protocol === A.protocol && d.host === A.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function yB(g) {
  const I = /^([-+\w]{1,25})(:?\/\/|:)/.exec(g);
  return (I && I[1]) || "";
}
function WB(g, I) {
  g = g || 10;
  const C = new Array(g),
    A = new Array(g);
  let l = 0,
    e = 0,
    n;
  return (
    (I = I !== void 0 ? I : 1e3),
    function (c) {
      const o = Date.now(),
        t = A[e];
      n || (n = o), (C[l] = c), (A[l] = o);
      let m = e,
        G = 0;
      for (; m !== l; ) (G += C[m++]), (m = m % g);
      if (((l = (l + 1) % g), l === e && (e = (e + 1) % g), o - n < I)) return;
      const s = t && o - t;
      return s ? Math.round((G * 1e3) / s) : void 0;
    }
  );
}
function Ot(g, I) {
  let C = 0;
  const A = WB(50, 250);
  return (l) => {
    const e = l.loaded,
      n = l.lengthComputable ? l.total : void 0,
      d = e - C,
      c = A(d),
      o = e <= n;
    C = e;
    const t = {
      loaded: e,
      total: n,
      progress: n ? e / n : void 0,
      bytes: d,
      rate: c || void 0,
      estimated: c && n && o ? (n - e) / c : void 0,
      event: l,
    };
    (t[I ? "download" : "upload"] = !0), g(t);
  };
}
const VB = typeof XMLHttpRequest < "u",
  SB =
    VB &&
    function (g) {
      return new Promise(function (C, A) {
        let l = g.data;
        const e = BI.from(g.headers).normalize(),
          n = g.responseType;
        let d;
        function c() {
          g.cancelToken && g.cancelToken.unsubscribe(d),
            g.signal && g.signal.removeEventListener("abort", d);
        }
        let o;
        if (W.isFormData(l)) {
          if (oI.hasStandardBrowserEnv || oI.hasStandardBrowserWebWorkerEnv)
            e.setContentType(!1);
          else if ((o = e.getContentType()) !== !1) {
            const [i, ...b] = o
              ? o
                  .split(";")
                  .map((V) => V.trim())
                  .filter(Boolean)
              : [];
            e.setContentType([i || "multipart/form-data", ...b].join("; "));
          }
        }
        let t = new XMLHttpRequest();
        if (g.auth) {
          const i = g.auth.username || "",
            b = g.auth.password
              ? unescape(encodeURIComponent(g.auth.password))
              : "";
          e.set("Authorization", "Basic " + btoa(i + ":" + b));
        }
        const m = oa(g.baseURL, g.url);
        t.open(g.method.toUpperCase(), la(m, g.params, g.paramsSerializer), !0),
          (t.timeout = g.timeout);
        function G() {
          if (!t) return;
          const i = BI.from(
              "getAllResponseHeaders" in t && t.getAllResponseHeaders()
            ),
            V = {
              data:
                !n || n === "text" || n === "json"
                  ? t.responseText
                  : t.response,
              status: t.status,
              statusText: t.statusText,
              headers: i,
              config: g,
              request: t,
            };
          bB(
            function (Z) {
              C(Z), c();
            },
            function (Z) {
              A(Z), c();
            },
            V
          ),
            (t = null);
        }
        if (
          ("onloadend" in t
            ? (t.onloadend = G)
            : (t.onreadystatechange = function () {
                !t ||
                  t.readyState !== 4 ||
                  (t.status === 0 &&
                    !(t.responseURL && t.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(G);
              }),
          (t.onabort = function () {
            t &&
              (A(new F("Request aborted", F.ECONNABORTED, g, t)), (t = null));
          }),
          (t.onerror = function () {
            A(new F("Network Error", F.ERR_NETWORK, g, t)), (t = null);
          }),
          (t.ontimeout = function () {
            let b = g.timeout
              ? "timeout of " + g.timeout + "ms exceeded"
              : "timeout exceeded";
            const V = g.transitional || ea;
            g.timeoutErrorMessage && (b = g.timeoutErrorMessage),
              A(
                new F(
                  b,
                  V.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
                  g,
                  t
                )
              ),
              (t = null);
          }),
          oI.hasStandardBrowserEnv)
        ) {
          const i = rB(m) && g.xsrfCookieName && uB.read(g.xsrfCookieName);
          i && e.set(g.xsrfHeaderName, i);
        }
        l === void 0 && e.setContentType(null),
          "setRequestHeader" in t &&
            W.forEach(e.toJSON(), function (b, V) {
              t.setRequestHeader(V, b);
            }),
          W.isUndefined(g.withCredentials) ||
            (t.withCredentials = !!g.withCredentials),
          n && n !== "json" && (t.responseType = g.responseType),
          typeof g.onDownloadProgress == "function" &&
            t.addEventListener("progress", Ot(g.onDownloadProgress, !0)),
          typeof g.onUploadProgress == "function" &&
            t.upload &&
            t.upload.addEventListener("progress", Ot(g.onUploadProgress)),
          (g.cancelToken || g.signal) &&
            ((d = (i) => {
              t &&
                (A(!i || i.type ? new il(null, g, t) : i),
                t.abort(),
                (t = null));
            }),
            g.cancelToken && g.cancelToken.subscribe(d),
            g.signal &&
              (g.signal.aborted ? d() : g.signal.addEventListener("abort", d)));
        const s = yB(m);
        if (s && oI.protocols.indexOf(s) === -1) {
          A(new F("Unsupported protocol " + s + ":", F.ERR_BAD_REQUEST, g));
          return;
        }
        t.send(l || null);
      });
    },
  Ac = { http: js, xhr: SB };
W.forEach(Ac, (g, I) => {
  if (g) {
    try {
      Object.defineProperty(g, "name", { value: I });
    } catch {}
    Object.defineProperty(g, "adapterName", { value: I });
  }
});
const qt = (g) => `- ${g}`,
  hB = (g) => W.isFunction(g) || g === null || g === !1,
  ta = {
    getAdapter: (g) => {
      g = W.isArray(g) ? g : [g];
      const { length: I } = g;
      let C, A;
      const l = {};
      for (let e = 0; e < I; e++) {
        C = g[e];
        let n;
        if (
          ((A = C),
          !hB(C) && ((A = Ac[(n = String(C)).toLowerCase()]), A === void 0))
        )
          throw new F(`Unknown adapter '${n}'`);
        if (A) break;
        l[n || "#" + e] = A;
      }
      if (!A) {
        const e = Object.entries(l).map(
          ([d, c]) =>
            `adapter ${d} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let n = I
          ? e.length > 1
            ? `since :
` +
              e.map(qt).join(`
`)
            : " " + qt(e[0])
          : "as no adapter specified";
        throw new F(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT"
        );
      }
      return A;
    },
    adapters: Ac,
  };
function Id(g) {
  if (
    (g.cancelToken && g.cancelToken.throwIfRequested(),
    g.signal && g.signal.aborted)
  )
    throw new il(null, g);
}
function _t(g) {
  return (
    Id(g),
    (g.headers = BI.from(g.headers)),
    (g.data = gd.call(g, g.transformRequest)),
    ["post", "put", "patch"].indexOf(g.method) !== -1 &&
      g.headers.setContentType("application/x-www-form-urlencoded", !1),
    ta
      .getAdapter(g.adapter || mo.adapter)(g)
      .then(
        function (A) {
          return (
            Id(g),
            (A.data = gd.call(g, g.transformResponse, A)),
            (A.headers = BI.from(A.headers)),
            A
          );
        },
        function (A) {
          return (
            ca(A) ||
              (Id(g),
              A &&
                A.response &&
                ((A.response.data = gd.call(
                  g,
                  g.transformResponse,
                  A.response
                )),
                (A.response.headers = BI.from(A.response.headers)))),
            Promise.reject(A)
          );
        }
      )
  );
}
const $t = (g) => (g instanceof BI ? g.toJSON() : g);
function $C(g, I) {
  I = I || {};
  const C = {};
  function A(o, t, m) {
    return W.isPlainObject(o) && W.isPlainObject(t)
      ? W.merge.call({ caseless: m }, o, t)
      : W.isPlainObject(t)
      ? W.merge({}, t)
      : W.isArray(t)
      ? t.slice()
      : t;
  }
  function l(o, t, m) {
    if (W.isUndefined(t)) {
      if (!W.isUndefined(o)) return A(void 0, o, m);
    } else return A(o, t, m);
  }
  function e(o, t) {
    if (!W.isUndefined(t)) return A(void 0, t);
  }
  function n(o, t) {
    if (W.isUndefined(t)) {
      if (!W.isUndefined(o)) return A(void 0, o);
    } else return A(void 0, t);
  }
  function d(o, t, m) {
    if (m in I) return A(o, t);
    if (m in g) return A(void 0, o);
  }
  const c = {
    url: e,
    method: e,
    data: e,
    baseURL: n,
    transformRequest: n,
    transformResponse: n,
    paramsSerializer: n,
    timeout: n,
    timeoutMessage: n,
    withCredentials: n,
    adapter: n,
    responseType: n,
    xsrfCookieName: n,
    xsrfHeaderName: n,
    onUploadProgress: n,
    onDownloadProgress: n,
    decompress: n,
    maxContentLength: n,
    maxBodyLength: n,
    beforeRedirect: n,
    transport: n,
    httpAgent: n,
    httpsAgent: n,
    cancelToken: n,
    socketPath: n,
    responseEncoding: n,
    validateStatus: d,
    headers: (o, t) => l($t(o), $t(t), !0),
  };
  return (
    W.forEach(Object.keys(Object.assign({}, g, I)), function (t) {
      const m = c[t] || l,
        G = m(g[t], I[t], t);
      (W.isUndefined(G) && m !== d) || (C[t] = G);
    }),
    C
  );
}
const Za = "1.6.1",
  Go = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (g, I) => {
    Go[g] = function (A) {
      return typeof A === g || "a" + (I < 1 ? "n " : " ") + g;
    };
  }
);
const gZ = {};
Go.transitional = function (I, C, A) {
  function l(e, n) {
    return (
      "[Axios v" +
      Za +
      "] Transitional option '" +
      e +
      "'" +
      n +
      (A ? ". " + A : "")
    );
  }
  return (e, n, d) => {
    if (I === !1)
      throw new F(
        l(n, " has been removed" + (C ? " in " + C : "")),
        F.ERR_DEPRECATED
      );
    return (
      C &&
        !gZ[n] &&
        ((gZ[n] = !0),
        console.warn(
          l(
            n,
            " has been deprecated since v" +
              C +
              " and will be removed in the near future"
          )
        )),
      I ? I(e, n, d) : !0
    );
  };
};
function XB(g, I, C) {
  if (typeof g != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const A = Object.keys(g);
  let l = A.length;
  for (; l-- > 0; ) {
    const e = A[l],
      n = I[e];
    if (n) {
      const d = g[e],
        c = d === void 0 || n(d, e, g);
      if (c !== !0)
        throw new F("option " + e + " must be " + c, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (C !== !0) throw new F("Unknown option " + e, F.ERR_BAD_OPTION);
  }
}
const lc = { assertOptions: XB, validators: Go },
  kI = lc.validators;
class Ye {
  constructor(I) {
    (this.defaults = I),
      (this.interceptors = { request: new jt(), response: new jt() });
  }
  request(I, C) {
    typeof I == "string" ? ((C = C || {}), (C.url = I)) : (C = I || {}),
      (C = $C(this.defaults, C));
    const { transitional: A, paramsSerializer: l, headers: e } = C;
    A !== void 0 &&
      lc.assertOptions(
        A,
        {
          silentJSONParsing: kI.transitional(kI.boolean),
          forcedJSONParsing: kI.transitional(kI.boolean),
          clarifyTimeoutError: kI.transitional(kI.boolean),
        },
        !1
      ),
      l != null &&
        (W.isFunction(l)
          ? (C.paramsSerializer = { serialize: l })
          : lc.assertOptions(
              l,
              { encode: kI.function, serialize: kI.function },
              !0
            )),
      (C.method = (C.method || this.defaults.method || "get").toLowerCase());
    let n = e && W.merge(e.common, e[C.method]);
    e &&
      W.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (i) => {
          delete e[i];
        }
      ),
      (C.headers = BI.concat(n, e));
    const d = [];
    let c = !0;
    this.interceptors.request.forEach(function (b) {
      (typeof b.runWhen == "function" && b.runWhen(C) === !1) ||
        ((c = c && b.synchronous), d.unshift(b.fulfilled, b.rejected));
    });
    const o = [];
    this.interceptors.response.forEach(function (b) {
      o.push(b.fulfilled, b.rejected);
    });
    let t,
      m = 0,
      G;
    if (!c) {
      const i = [_t.bind(this), void 0];
      for (
        i.unshift.apply(i, d),
          i.push.apply(i, o),
          G = i.length,
          t = Promise.resolve(C);
        m < G;

      )
        t = t.then(i[m++], i[m++]);
      return t;
    }
    G = d.length;
    let s = C;
    for (m = 0; m < G; ) {
      const i = d[m++],
        b = d[m++];
      try {
        s = i(s);
      } catch (V) {
        b.call(this, V);
        break;
      }
    }
    try {
      t = _t.call(this, s);
    } catch (i) {
      return Promise.reject(i);
    }
    for (m = 0, G = o.length; m < G; ) t = t.then(o[m++], o[m++]);
    return t;
  }
  getUri(I) {
    I = $C(this.defaults, I);
    const C = oa(I.baseURL, I.url);
    return la(C, I.params, I.paramsSerializer);
  }
}
W.forEach(["delete", "get", "head", "options"], function (I) {
  Ye.prototype[I] = function (C, A) {
    return this.request(
      $C(A || {}, { method: I, url: C, data: (A || {}).data })
    );
  };
});
W.forEach(["post", "put", "patch"], function (I) {
  function C(A) {
    return function (e, n, d) {
      return this.request(
        $C(d || {}, {
          method: I,
          headers: A ? { "Content-Type": "multipart/form-data" } : {},
          url: e,
          data: n,
        })
      );
    };
  }
  (Ye.prototype[I] = C()), (Ye.prototype[I + "Form"] = C(!0));
});
const $l = Ye;
class ao {
  constructor(I) {
    if (typeof I != "function")
      throw new TypeError("executor must be a function.");
    let C;
    this.promise = new Promise(function (e) {
      C = e;
    });
    const A = this;
    this.promise.then((l) => {
      if (!A._listeners) return;
      let e = A._listeners.length;
      for (; e-- > 0; ) A._listeners[e](l);
      A._listeners = null;
    }),
      (this.promise.then = (l) => {
        let e;
        const n = new Promise((d) => {
          A.subscribe(d), (e = d);
        }).then(l);
        return (
          (n.cancel = function () {
            A.unsubscribe(e);
          }),
          n
        );
      }),
      I(function (e, n, d) {
        A.reason || ((A.reason = new il(e, n, d)), C(A.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(I) {
    if (this.reason) {
      I(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(I) : (this._listeners = [I]);
  }
  unsubscribe(I) {
    if (!this._listeners) return;
    const C = this._listeners.indexOf(I);
    C !== -1 && this._listeners.splice(C, 1);
  }
  static source() {
    let I;
    return {
      token: new ao(function (l) {
        I = l;
      }),
      cancel: I,
    };
  }
}
const pB = ao;
function RB(g) {
  return function (C) {
    return g.apply(null, C);
  };
}
function JB(g) {
  return W.isObject(g) && g.isAxiosError === !0;
}
const ec = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ec).forEach(([g, I]) => {
  ec[I] = g;
});
const YB = ec;
function ma(g) {
  const I = new $l(g),
    C = DG($l.prototype.request, I);
  return (
    W.extend(C, $l.prototype, I, { allOwnKeys: !0 }),
    W.extend(C, I, null, { allOwnKeys: !0 }),
    (C.create = function (l) {
      return ma($C(g, l));
    }),
    C
  );
}
const dg = ma(mo);
dg.Axios = $l;
dg.CanceledError = il;
dg.CancelToken = pB;
dg.isCancel = ca;
dg.VERSION = Za;
dg.toFormData = $e;
dg.AxiosError = F;
dg.Cancel = dg.CanceledError;
dg.all = function (I) {
  return Promise.all(I);
};
dg.spread = RB;
dg.isAxiosError = JB;
dg.mergeConfig = $C;
dg.AxiosHeaders = BI;
dg.formToJSON = (g) => da(W.isHTMLForm(g) ? new FormData(g) : g);
dg.getAdapter = ta.getAdapter;
dg.HttpStatusCode = YB;
dg.default = dg;
const jI = dg,
  ZA = y.createContext(),
  kB = ({ children: g }) => {
    const [I, C] = y.useState({
        firstname: "",
        lastname: "",
        userId: "",
        studentNumber: "",
      }),
      A = localStorage.getItem("token"),
      l = async () => {
        if (A) {
          jI.defaults.headers.common.Authorization = `Bearer ${A}`;
          try {
            const d = (
              await jI.get(
                "https://student.northeurope.cloudapp.azure.com/api/studentverify"
              )
            ).data.student;
            console.log("API response data: ", d),
              d &&
                C({
                  staff: d.staff,
                  firstname: d.firstName,
                  lastname: d.lastName,
                  studentNumber: d.studentNumber,
                });
          } catch (e) {
            console.error("Verification failed:", e);
          }
        }
      };
    return (
      y.useEffect(() => {
        l();
      }, [A]),
      console.log(I.firstname !== "" && I.lastname !== ""),
      console.log(I, "student info"),
      S.jsx(ZA.Provider, {
        value: { studentInfo: I, setStudentInfo: C },
        children: g,
      })
    );
  };
const Ga = "/assets/metropolia_s_orange-16a497fc.png",
  HB = { black: "#000", white: "#fff" },
  Al = HB,
  KB = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  BC = KB,
  vB = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  rC = vB,
  NB = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  yC = NB,
  FB = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  WC = FB,
  wB = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  VC = wB,
  fB = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  WA = fB,
  zB = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  QB = zB;
function D() {
  return (
    (D = Object.assign
      ? Object.assign.bind()
      : function (g) {
          for (var I = 1; I < arguments.length; I++) {
            var C = arguments[I];
            for (var A in C)
              Object.prototype.hasOwnProperty.call(C, A) && (g[A] = C[A]);
          }
          return g;
        }),
    D.apply(this, arguments)
  );
}
function lC(g) {
  return g !== null && typeof g == "object" && g.constructor === Object;
}
function aa(g) {
  if (!lC(g)) return g;
  const I = {};
  return (
    Object.keys(g).forEach((C) => {
      I[C] = aa(g[C]);
    }),
    I
  );
}
function rI(g, I, C = { clone: !0 }) {
  const A = C.clone ? D({}, g) : g;
  return (
    lC(g) &&
      lC(I) &&
      Object.keys(I).forEach((l) => {
        l !== "__proto__" &&
          (lC(I[l]) && l in g && lC(g[l])
            ? (A[l] = rI(g[l], I[l], C))
            : C.clone
            ? (A[l] = lC(I[l]) ? aa(I[l]) : I[l])
            : (A[l] = I[l]));
      }),
    A
  );
}
function gA(g) {
  let I = "https://mui.com/production-error/?code=" + g;
  for (let C = 1; C < arguments.length; C += 1)
    I += "&args[]=" + encodeURIComponent(arguments[C]);
  return "Minified MUI error #" + g + "; visit " + I + " for the full message.";
}
function ia(g) {
  if (typeof g != "string") throw new Error(gA(7));
  return g.charAt(0).toUpperCase() + g.slice(1);
}
const IZ = (g) => g,
  UB = () => {
    let g = IZ;
    return {
      configure(I) {
        g = I;
      },
      generate(I) {
        return g(I);
      },
      reset() {
        g = IZ;
      },
    };
  },
  xB = UB(),
  EB = xB,
  MB = "$$material";
function RI(g, I) {
  if (g == null) return {};
  var C = {},
    A = Object.keys(g),
    l,
    e;
  for (e = 0; e < A.length; e++)
    (l = A[e]), !(I.indexOf(l) >= 0) && (C[l] = g[l]);
  return C;
}
function ba(g) {
  var I = Object.create(null);
  return function (C) {
    return I[C] === void 0 && (I[C] = g(C)), I[C];
  };
}
var LB =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  DB = ba(function (g) {
    return (
      LB.test(g) ||
      (g.charCodeAt(0) === 111 &&
        g.charCodeAt(1) === 110 &&
        g.charCodeAt(2) < 91)
    );
  });
function TB(g) {
  if (g.sheet) return g.sheet;
  for (var I = 0; I < document.styleSheets.length; I++)
    if (document.styleSheets[I].ownerNode === g) return document.styleSheets[I];
}
function jB(g) {
  var I = document.createElement("style");
  return (
    I.setAttribute("data-emotion", g.key),
    g.nonce !== void 0 && I.setAttribute("nonce", g.nonce),
    I.appendChild(document.createTextNode("")),
    I.setAttribute("data-s", ""),
    I
  );
}
var PB = (function () {
    function g(C) {
      var A = this;
      (this._insertTag = function (l) {
        var e;
        A.tags.length === 0
          ? A.insertionPoint
            ? (e = A.insertionPoint.nextSibling)
            : A.prepend
            ? (e = A.container.firstChild)
            : (e = A.before)
          : (e = A.tags[A.tags.length - 1].nextSibling),
          A.container.insertBefore(l, e),
          A.tags.push(l);
      }),
        (this.isSpeedy = C.speedy === void 0 ? !0 : C.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = C.nonce),
        (this.key = C.key),
        (this.container = C.container),
        (this.prepend = C.prepend),
        (this.insertionPoint = C.insertionPoint),
        (this.before = null);
    }
    var I = g.prototype;
    return (
      (I.hydrate = function (A) {
        A.forEach(this._insertTag);
      }),
      (I.insert = function (A) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(jB(this));
        var l = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var e = TB(l);
          try {
            e.insertRule(A, e.cssRules.length);
          } catch {}
        } else l.appendChild(document.createTextNode(A));
        this.ctr++;
      }),
      (I.flush = function () {
        this.tags.forEach(function (A) {
          return A.parentNode && A.parentNode.removeChild(A);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      g
    );
  })(),
  rg = "-ms-",
  ke = "-moz-",
  f = "-webkit-",
  ua = "comm",
  io = "rule",
  bo = "decl",
  OB = "@import",
  sa = "@keyframes",
  qB = "@layer",
  _B = Math.abs,
  In = String.fromCharCode,
  $B = Object.assign;
function g0(g, I) {
  return ig(g, 0) ^ 45
    ? (((((((I << 2) ^ ig(g, 0)) << 2) ^ ig(g, 1)) << 2) ^ ig(g, 2)) << 2) ^
        ig(g, 3)
    : 0;
}
function Ba(g) {
  return g.trim();
}
function I0(g, I) {
  return (g = I.exec(g)) ? g[0] : g;
}
function z(g, I, C) {
  return g.replace(I, C);
}
function nc(g, I) {
  return g.indexOf(I);
}
function ig(g, I) {
  return g.charCodeAt(I) | 0;
}
function ll(g, I, C) {
  return g.slice(I, C);
}
function eI(g) {
  return g.length;
}
function uo(g) {
  return g.length;
}
function fl(g, I) {
  return I.push(g), g;
}
function C0(g, I) {
  return g.map(I).join("");
}
var Cn = 1,
  IA = 1,
  ra = 0,
  Hg = 0,
  eg = 0,
  mA = "";
function An(g, I, C, A, l, e, n) {
  return {
    value: g,
    root: I,
    parent: C,
    type: A,
    props: l,
    children: e,
    line: Cn,
    column: IA,
    length: n,
    return: "",
  };
}
function VA(g, I) {
  return $B(An("", null, null, "", null, null, 0), g, { length: -g.length }, I);
}
function A0() {
  return eg;
}
function l0() {
  return (
    (eg = Hg > 0 ? ig(mA, --Hg) : 0), IA--, eg === 10 && ((IA = 1), Cn--), eg
  );
}
function wg() {
  return (
    (eg = Hg < ra ? ig(mA, Hg++) : 0), IA++, eg === 10 && ((IA = 1), Cn++), eg
  );
}
function mI() {
  return ig(mA, Hg);
}
function ge() {
  return Hg;
}
function bl(g, I) {
  return ll(mA, g, I);
}
function el(g) {
  switch (g) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ya(g) {
  return (Cn = IA = 1), (ra = eI((mA = g))), (Hg = 0), [];
}
function Wa(g) {
  return (mA = ""), g;
}
function Ie(g) {
  return Ba(bl(Hg - 1, dc(g === 91 ? g + 2 : g === 40 ? g + 1 : g)));
}
function e0(g) {
  for (; (eg = mI()) && eg < 33; ) wg();
  return el(g) > 2 || el(eg) > 3 ? "" : " ";
}
function n0(g, I) {
  for (
    ;
    --I &&
    wg() &&
    !(eg < 48 || eg > 102 || (eg > 57 && eg < 65) || (eg > 70 && eg < 97));

  );
  return bl(g, ge() + (I < 6 && mI() == 32 && wg() == 32));
}
function dc(g) {
  for (; wg(); )
    switch (eg) {
      case g:
        return Hg;
      case 34:
      case 39:
        g !== 34 && g !== 39 && dc(eg);
        break;
      case 40:
        g === 41 && dc(g);
        break;
      case 92:
        wg();
        break;
    }
  return Hg;
}
function d0(g, I) {
  for (; wg() && g + eg !== 47 + 10; )
    if (g + eg === 42 + 42 && mI() === 47) break;
  return "/*" + bl(I, Hg - 1) + "*" + In(g === 47 ? g : wg());
}
function c0(g) {
  for (; !el(mI()); ) wg();
  return bl(g, Hg);
}
function o0(g) {
  return Wa(Ce("", null, null, null, [""], (g = ya(g)), 0, [0], g));
}
function Ce(g, I, C, A, l, e, n, d, c) {
  for (
    var o = 0,
      t = 0,
      m = n,
      G = 0,
      s = 0,
      i = 0,
      b = 1,
      V = 1,
      a = 1,
      Z = 0,
      u = "",
      r = l,
      X = e,
      R = A,
      B = u;
    V;

  )
    switch (((i = Z), (Z = wg()))) {
      case 40:
        if (i != 108 && ig(B, m - 1) == 58) {
          nc((B += z(Ie(Z), "&", "&\f")), "&\f") != -1 && (a = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        B += Ie(Z);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        B += e0(i);
        break;
      case 92:
        B += n0(ge() - 1, 7);
        continue;
      case 47:
        switch (mI()) {
          case 42:
          case 47:
            fl(t0(d0(wg(), ge()), I, C), c);
            break;
          default:
            B += "/";
        }
        break;
      case 123 * b:
        d[o++] = eI(B) * a;
      case 125 * b:
      case 59:
      case 0:
        switch (Z) {
          case 0:
          case 125:
            V = 0;
          case 59 + t:
            a == -1 && (B = z(B, /\f/g, "")),
              s > 0 &&
                eI(B) - m &&
                fl(
                  s > 32
                    ? AZ(B + ";", A, C, m - 1)
                    : AZ(z(B, " ", "") + ";", A, C, m - 2),
                  c
                );
            break;
          case 59:
            B += ";";
          default:
            if (
              (fl((R = CZ(B, I, C, o, t, l, d, u, (r = []), (X = []), m)), e),
              Z === 123)
            )
              if (t === 0) Ce(B, I, R, R, r, e, m, d, X);
              else
                switch (G === 99 && ig(B, 3) === 110 ? 100 : G) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ce(
                      g,
                      R,
                      R,
                      A && fl(CZ(g, R, R, 0, 0, l, d, u, l, (r = []), m), X),
                      l,
                      X,
                      m,
                      d,
                      A ? r : X
                    );
                    break;
                  default:
                    Ce(B, R, R, R, [""], X, 0, d, X);
                }
        }
        (o = t = s = 0), (b = a = 1), (u = B = ""), (m = n);
        break;
      case 58:
        (m = 1 + eI(B)), (s = i);
      default:
        if (b < 1) {
          if (Z == 123) --b;
          else if (Z == 125 && b++ == 0 && l0() == 125) continue;
        }
        switch (((B += In(Z)), Z * b)) {
          case 38:
            a = t > 0 ? 1 : ((B += "\f"), -1);
            break;
          case 44:
            (d[o++] = (eI(B) - 1) * a), (a = 1);
            break;
          case 64:
            mI() === 45 && (B += Ie(wg())),
              (G = mI()),
              (t = m = eI((u = B += c0(ge())))),
              Z++;
            break;
          case 45:
            i === 45 && eI(B) == 2 && (b = 0);
        }
    }
  return e;
}
function CZ(g, I, C, A, l, e, n, d, c, o, t) {
  for (
    var m = l - 1, G = l === 0 ? e : [""], s = uo(G), i = 0, b = 0, V = 0;
    i < A;
    ++i
  )
    for (var a = 0, Z = ll(g, m + 1, (m = _B((b = n[i])))), u = g; a < s; ++a)
      (u = Ba(b > 0 ? G[a] + " " + Z : z(Z, /&\f/g, G[a]))) && (c[V++] = u);
  return An(g, I, C, l === 0 ? io : d, c, o, t);
}
function t0(g, I, C) {
  return An(g, I, C, ua, In(A0()), ll(g, 2, -2), 0);
}
function AZ(g, I, C, A) {
  return An(g, I, C, bo, ll(g, 0, A), ll(g, A + 1, -1), A);
}
function MC(g, I) {
  for (var C = "", A = uo(g), l = 0; l < A; l++) C += I(g[l], l, g, I) || "";
  return C;
}
function Z0(g, I, C, A) {
  switch (g.type) {
    case qB:
      if (g.children.length) break;
    case OB:
    case bo:
      return (g.return = g.return || g.value);
    case ua:
      return "";
    case sa:
      return (g.return = g.value + "{" + MC(g.children, A) + "}");
    case io:
      g.value = g.props.join(",");
  }
  return eI((C = MC(g.children, A)))
    ? (g.return = g.value + "{" + C + "}")
    : "";
}
function m0(g) {
  var I = uo(g);
  return function (C, A, l, e) {
    for (var n = "", d = 0; d < I; d++) n += g[d](C, A, l, e) || "";
    return n;
  };
}
function G0(g) {
  return function (I) {
    I.root || ((I = I.return) && g(I));
  };
}
var a0 = function (I, C, A) {
    for (
      var l = 0, e = 0;
      (l = e), (e = mI()), l === 38 && e === 12 && (C[A] = 1), !el(e);

    )
      wg();
    return bl(I, Hg);
  },
  i0 = function (I, C) {
    var A = -1,
      l = 44;
    do
      switch (el(l)) {
        case 0:
          l === 38 && mI() === 12 && (C[A] = 1), (I[A] += a0(Hg - 1, C, A));
          break;
        case 2:
          I[A] += Ie(l);
          break;
        case 4:
          if (l === 44) {
            (I[++A] = mI() === 58 ? "&\f" : ""), (C[A] = I[A].length);
            break;
          }
        default:
          I[A] += In(l);
      }
    while ((l = wg()));
    return I;
  },
  b0 = function (I, C) {
    return Wa(i0(ya(I), C));
  },
  lZ = new WeakMap(),
  u0 = function (I) {
    if (!(I.type !== "rule" || !I.parent || I.length < 1)) {
      for (
        var C = I.value,
          A = I.parent,
          l = I.column === A.column && I.line === A.line;
        A.type !== "rule";

      )
        if (((A = A.parent), !A)) return;
      if (
        !(I.props.length === 1 && C.charCodeAt(0) !== 58 && !lZ.get(A)) &&
        !l
      ) {
        lZ.set(I, !0);
        for (
          var e = [], n = b0(C, e), d = A.props, c = 0, o = 0;
          c < n.length;
          c++
        )
          for (var t = 0; t < d.length; t++, o++)
            I.props[o] = e[c] ? n[c].replace(/&\f/g, d[t]) : d[t] + " " + n[c];
      }
    }
  },
  s0 = function (I) {
    if (I.type === "decl") {
      var C = I.value;
      C.charCodeAt(0) === 108 &&
        C.charCodeAt(2) === 98 &&
        ((I.return = ""), (I.value = ""));
    }
  };
function Va(g, I) {
  switch (g0(g, I)) {
    case 5103:
      return f + "print-" + g + g;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return f + g + g;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return f + g + ke + g + rg + g + g;
    case 6828:
    case 4268:
      return f + g + rg + g + g;
    case 6165:
      return f + g + rg + "flex-" + g + g;
    case 5187:
      return (
        f + g + z(g, /(\w+).+(:[^]+)/, f + "box-$1$2" + rg + "flex-$1$2") + g
      );
    case 5443:
      return f + g + rg + "flex-item-" + z(g, /flex-|-self/, "") + g;
    case 4675:
      return (
        f +
        g +
        rg +
        "flex-line-pack" +
        z(g, /align-content|flex-|-self/, "") +
        g
      );
    case 5548:
      return f + g + rg + z(g, "shrink", "negative") + g;
    case 5292:
      return f + g + rg + z(g, "basis", "preferred-size") + g;
    case 6060:
      return (
        f +
        "box-" +
        z(g, "-grow", "") +
        f +
        g +
        rg +
        z(g, "grow", "positive") +
        g
      );
    case 4554:
      return f + z(g, /([^-])(transform)/g, "$1" + f + "$2") + g;
    case 6187:
      return (
        z(z(z(g, /(zoom-|grab)/, f + "$1"), /(image-set)/, f + "$1"), g, "") + g
      );
    case 5495:
    case 3959:
      return z(g, /(image-set\([^]*)/, f + "$1$`$1");
    case 4968:
      return (
        z(
          z(g, /(.+:)(flex-)?(.*)/, f + "box-pack:$3" + rg + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        f +
        g +
        g
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return z(g, /(.+)-inline(.+)/, f + "$1$2") + g;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (eI(g) - 1 - I > 6)
        switch (ig(g, I + 1)) {
          case 109:
            if (ig(g, I + 4) !== 45) break;
          case 102:
            return (
              z(
                g,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  f +
                  "$2-$3$1" +
                  ke +
                  (ig(g, I + 3) == 108 ? "$3" : "$2-$3")
              ) + g
            );
          case 115:
            return ~nc(g, "stretch")
              ? Va(z(g, "stretch", "fill-available"), I) + g
              : g;
        }
      break;
    case 4949:
      if (ig(g, I + 1) !== 115) break;
    case 6444:
      switch (ig(g, eI(g) - 3 - (~nc(g, "!important") && 10))) {
        case 107:
          return z(g, ":", ":" + f) + g;
        case 101:
          return (
            z(
              g,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                f +
                (ig(g, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                f +
                "$2$3$1" +
                rg +
                "$2box$3"
            ) + g
          );
      }
      break;
    case 5936:
      switch (ig(g, I + 11)) {
        case 114:
          return f + g + rg + z(g, /[svh]\w+-[tblr]{2}/, "tb") + g;
        case 108:
          return f + g + rg + z(g, /[svh]\w+-[tblr]{2}/, "tb-rl") + g;
        case 45:
          return f + g + rg + z(g, /[svh]\w+-[tblr]{2}/, "lr") + g;
      }
      return f + g + rg + g + g;
  }
  return g;
}
var B0 = function (I, C, A, l) {
    if (I.length > -1 && !I.return)
      switch (I.type) {
        case bo:
          I.return = Va(I.value, I.length);
          break;
        case sa:
          return MC([VA(I, { value: z(I.value, "@", "@" + f) })], l);
        case io:
          if (I.length)
            return C0(I.props, function (e) {
              switch (I0(e, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return MC(
                    [VA(I, { props: [z(e, /:(read-\w+)/, ":" + ke + "$1")] })],
                    l
                  );
                case "::placeholder":
                  return MC(
                    [
                      VA(I, {
                        props: [z(e, /:(plac\w+)/, ":" + f + "input-$1")],
                      }),
                      VA(I, { props: [z(e, /:(plac\w+)/, ":" + ke + "$1")] }),
                      VA(I, { props: [z(e, /:(plac\w+)/, rg + "input-$1")] }),
                    ],
                    l
                  );
              }
              return "";
            });
      }
  },
  r0 = [B0],
  y0 = function (I) {
    var C = I.key;
    if (C === "css") {
      var A = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(A, function (b) {
        var V = b.getAttribute("data-emotion");
        V.indexOf(" ") !== -1 &&
          (document.head.appendChild(b), b.setAttribute("data-s", ""));
      });
    }
    var l = I.stylisPlugins || r0,
      e = {},
      n,
      d = [];
    (n = I.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + C + ' "]'),
        function (b) {
          for (
            var V = b.getAttribute("data-emotion").split(" "), a = 1;
            a < V.length;
            a++
          )
            e[V[a]] = !0;
          d.push(b);
        }
      );
    var c,
      o = [u0, s0];
    {
      var t,
        m = [
          Z0,
          G0(function (b) {
            t.insert(b);
          }),
        ],
        G = m0(o.concat(l, m)),
        s = function (V) {
          return MC(o0(V), G);
        };
      c = function (V, a, Z, u) {
        (t = Z),
          s(V ? V + "{" + a.styles + "}" : a.styles),
          u && (i.inserted[a.name] = !0);
      };
    }
    var i = {
      key: C,
      sheet: new PB({
        key: C,
        container: n,
        nonce: I.nonce,
        speedy: I.speedy,
        prepend: I.prepend,
        insertionPoint: I.insertionPoint,
      }),
      nonce: I.nonce,
      inserted: e,
      registered: {},
      insert: c,
    };
    return i.sheet.hydrate(d), i;
  },
  W0 = !0;
function V0(g, I, C) {
  var A = "";
  return (
    C.split(" ").forEach(function (l) {
      g[l] !== void 0 ? I.push(g[l] + ";") : (A += l + " ");
    }),
    A
  );
}
var Sa = function (I, C, A) {
    var l = I.key + "-" + C.name;
    (A === !1 || W0 === !1) &&
      I.registered[l] === void 0 &&
      (I.registered[l] = C.styles);
  },
  S0 = function (I, C, A) {
    Sa(I, C, A);
    var l = I.key + "-" + C.name;
    if (I.inserted[C.name] === void 0) {
      var e = C;
      do I.insert(C === e ? "." + l : "", e, I.sheet, !0), (e = e.next);
      while (e !== void 0);
    }
  };
function h0(g) {
  for (var I = 0, C, A = 0, l = g.length; l >= 4; ++A, l -= 4)
    (C =
      (g.charCodeAt(A) & 255) |
      ((g.charCodeAt(++A) & 255) << 8) |
      ((g.charCodeAt(++A) & 255) << 16) |
      ((g.charCodeAt(++A) & 255) << 24)),
      (C = (C & 65535) * 1540483477 + (((C >>> 16) * 59797) << 16)),
      (C ^= C >>> 24),
      (I =
        ((C & 65535) * 1540483477 + (((C >>> 16) * 59797) << 16)) ^
        ((I & 65535) * 1540483477 + (((I >>> 16) * 59797) << 16)));
  switch (l) {
    case 3:
      I ^= (g.charCodeAt(A + 2) & 255) << 16;
    case 2:
      I ^= (g.charCodeAt(A + 1) & 255) << 8;
    case 1:
      (I ^= g.charCodeAt(A) & 255),
        (I = (I & 65535) * 1540483477 + (((I >>> 16) * 59797) << 16));
  }
  return (
    (I ^= I >>> 13),
    (I = (I & 65535) * 1540483477 + (((I >>> 16) * 59797) << 16)),
    ((I ^ (I >>> 15)) >>> 0).toString(36)
  );
}
var X0 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  p0 = /[A-Z]|^ms/g,
  R0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ha = function (I) {
    return I.charCodeAt(1) === 45;
  },
  eZ = function (I) {
    return I != null && typeof I != "boolean";
  },
  Cd = ba(function (g) {
    return ha(g) ? g : g.replace(p0, "-$&").toLowerCase();
  }),
  nZ = function (I, C) {
    switch (I) {
      case "animation":
      case "animationName":
        if (typeof C == "string")
          return C.replace(R0, function (A, l, e) {
            return (nI = { name: l, styles: e, next: nI }), l;
          });
    }
    return X0[I] !== 1 && !ha(I) && typeof C == "number" && C !== 0
      ? C + "px"
      : C;
  };
function nl(g, I, C) {
  if (C == null) return "";
  if (C.__emotion_styles !== void 0) return C;
  switch (typeof C) {
    case "boolean":
      return "";
    case "object": {
      if (C.anim === 1)
        return (nI = { name: C.name, styles: C.styles, next: nI }), C.name;
      if (C.styles !== void 0) {
        var A = C.next;
        if (A !== void 0)
          for (; A !== void 0; )
            (nI = { name: A.name, styles: A.styles, next: nI }), (A = A.next);
        var l = C.styles + ";";
        return l;
      }
      return J0(g, I, C);
    }
    case "function": {
      if (g !== void 0) {
        var e = nI,
          n = C(g);
        return (nI = e), nl(g, I, n);
      }
      break;
    }
  }
  if (I == null) return C;
  var d = I[C];
  return d !== void 0 ? d : C;
}
function J0(g, I, C) {
  var A = "";
  if (Array.isArray(C))
    for (var l = 0; l < C.length; l++) A += nl(g, I, C[l]) + ";";
  else
    for (var e in C) {
      var n = C[e];
      if (typeof n != "object")
        I != null && I[n] !== void 0
          ? (A += e + "{" + I[n] + "}")
          : eZ(n) && (A += Cd(e) + ":" + nZ(e, n) + ";");
      else if (
        Array.isArray(n) &&
        typeof n[0] == "string" &&
        (I == null || I[n[0]] === void 0)
      )
        for (var d = 0; d < n.length; d++)
          eZ(n[d]) && (A += Cd(e) + ":" + nZ(e, n[d]) + ";");
      else {
        var c = nl(g, I, n);
        switch (e) {
          case "animation":
          case "animationName": {
            A += Cd(e) + ":" + c + ";";
            break;
          }
          default:
            A += e + "{" + c + "}";
        }
      }
    }
  return A;
}
var dZ = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  nI,
  Y0 = function (I, C, A) {
    if (
      I.length === 1 &&
      typeof I[0] == "object" &&
      I[0] !== null &&
      I[0].styles !== void 0
    )
      return I[0];
    var l = !0,
      e = "";
    nI = void 0;
    var n = I[0];
    n == null || n.raw === void 0
      ? ((l = !1), (e += nl(A, C, n)))
      : (e += n[0]);
    for (var d = 1; d < I.length; d++) (e += nl(A, C, I[d])), l && (e += n[d]);
    dZ.lastIndex = 0;
    for (var c = "", o; (o = dZ.exec(e)) !== null; ) c += "-" + o[1];
    var t = h0(e) + c;
    return { name: t, styles: e, next: nI };
  },
  k0 = function (I) {
    return I();
  },
  H0 = ld["useInsertionEffect"] ? ld["useInsertionEffect"] : !1,
  K0 = H0 || k0,
  Xa = y.createContext(typeof HTMLElement < "u" ? y0({ key: "css" }) : null);
Xa.Provider;
var v0 = function (I) {
    return y.forwardRef(function (C, A) {
      var l = y.useContext(Xa);
      return I(C, l, A);
    });
  },
  pa = y.createContext({}),
  N0 = DB,
  F0 = function (I) {
    return I !== "theme";
  },
  cZ = function (I) {
    return typeof I == "string" && I.charCodeAt(0) > 96 ? N0 : F0;
  },
  oZ = function (I, C, A) {
    var l;
    if (C) {
      var e = C.shouldForwardProp;
      l =
        I.__emotion_forwardProp && e
          ? function (n) {
              return I.__emotion_forwardProp(n) && e(n);
            }
          : e;
    }
    return typeof l != "function" && A && (l = I.__emotion_forwardProp), l;
  },
  w0 = function (I) {
    var C = I.cache,
      A = I.serialized,
      l = I.isStringTag;
    return (
      Sa(C, A, l),
      K0(function () {
        return S0(C, A, l);
      }),
      null
    );
  },
  f0 = function g(I, C) {
    var A = I.__emotion_real === I,
      l = (A && I.__emotion_base) || I,
      e,
      n;
    C !== void 0 && ((e = C.label), (n = C.target));
    var d = oZ(I, C, A),
      c = d || cZ(l),
      o = !c("as");
    return function () {
      var t = arguments,
        m =
          A && I.__emotion_styles !== void 0 ? I.__emotion_styles.slice(0) : [];
      if (
        (e !== void 0 && m.push("label:" + e + ";"),
        t[0] == null || t[0].raw === void 0)
      )
        m.push.apply(m, t);
      else {
        m.push(t[0][0]);
        for (var G = t.length, s = 1; s < G; s++) m.push(t[s], t[0][s]);
      }
      var i = v0(function (b, V, a) {
        var Z = (o && b.as) || l,
          u = "",
          r = [],
          X = b;
        if (b.theme == null) {
          X = {};
          for (var R in b) X[R] = b[R];
          X.theme = y.useContext(pa);
        }
        typeof b.className == "string"
          ? (u = V0(V.registered, r, b.className))
          : b.className != null && (u = b.className + " ");
        var B = Y0(m.concat(r), V.registered, X);
        (u += V.key + "-" + B.name), n !== void 0 && (u += " " + n);
        var p = o && d === void 0 ? cZ(Z) : c,
          H = {};
        for (var k in b) (o && k === "as") || (p(k) && (H[k] = b[k]));
        return (
          (H.className = u),
          (H.ref = a),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(w0, {
              cache: V,
              serialized: B,
              isStringTag: typeof Z == "string",
            }),
            y.createElement(Z, H)
          )
        );
      });
      return (
        (i.displayName =
          e !== void 0
            ? e
            : "Styled(" +
              (typeof l == "string"
                ? l
                : l.displayName || l.name || "Component") +
              ")"),
        (i.defaultProps = I.defaultProps),
        (i.__emotion_real = i),
        (i.__emotion_base = l),
        (i.__emotion_styles = m),
        (i.__emotion_forwardProp = d),
        Object.defineProperty(i, "toString", {
          value: function () {
            return "." + n;
          },
        }),
        (i.withComponent = function (b, V) {
          return g(b, D({}, C, V, { shouldForwardProp: oZ(i, V, !0) })).apply(
            void 0,
            m
          );
        }),
        i
      );
    };
  },
  z0 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  cc = f0.bind();
z0.forEach(function (g) {
  cc[g] = cc(g);
});
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Q0(g, I) {
  return cc(g, I);
}
const U0 = ["values", "unit", "step"],
  x0 = (g) => {
    const I = Object.keys(g).map((C) => ({ key: C, val: g[C] })) || [];
    return (
      I.sort((C, A) => C.val - A.val),
      I.reduce((C, A) => D({}, C, { [A.key]: A.val }), {})
    );
  };
function E0(g) {
  const {
      values: I = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: C = "px",
      step: A = 5,
    } = g,
    l = RI(g, U0),
    e = x0(I),
    n = Object.keys(e);
  function d(G) {
    return `@media (min-width:${typeof I[G] == "number" ? I[G] : G}${C})`;
  }
  function c(G) {
    return `@media (max-width:${
      (typeof I[G] == "number" ? I[G] : G) - A / 100
    }${C})`;
  }
  function o(G, s) {
    const i = n.indexOf(s);
    return `@media (min-width:${
      typeof I[G] == "number" ? I[G] : G
    }${C}) and (max-width:${
      (i !== -1 && typeof I[n[i]] == "number" ? I[n[i]] : s) - A / 100
    }${C})`;
  }
  function t(G) {
    return n.indexOf(G) + 1 < n.length ? o(G, n[n.indexOf(G) + 1]) : d(G);
  }
  function m(G) {
    const s = n.indexOf(G);
    return s === 0
      ? d(n[1])
      : s === n.length - 1
      ? c(n[s])
      : o(G, n[n.indexOf(G) + 1]).replace("@media", "@media not all and");
  }
  return D(
    {
      keys: n,
      values: e,
      up: d,
      down: c,
      between: o,
      only: t,
      not: m,
      unit: C,
    },
    l
  );
}
const M0 = { borderRadius: 4 },
  L0 = M0;
function wA(g, I) {
  return I ? rI(g, I, { clone: !1 }) : g;
}
const so = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  tZ = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (g) => `@media (min-width:${so[g]}px)`,
  };
function hI(g, I, C) {
  const A = g.theme || {};
  if (Array.isArray(I)) {
    const e = A.breakpoints || tZ;
    return I.reduce((n, d, c) => ((n[e.up(e.keys[c])] = C(I[c])), n), {});
  }
  if (typeof I == "object") {
    const e = A.breakpoints || tZ;
    return Object.keys(I).reduce((n, d) => {
      if (Object.keys(e.values || so).indexOf(d) !== -1) {
        const c = e.up(d);
        n[c] = C(I[d], d);
      } else {
        const c = d;
        n[c] = I[c];
      }
      return n;
    }, {});
  }
  return C(I);
}
function D0(g = {}) {
  var I;
  return (
    ((I = g.keys) == null
      ? void 0
      : I.reduce((A, l) => {
          const e = g.up(l);
          return (A[e] = {}), A;
        }, {})) || {}
  );
}
function T0(g, I) {
  return g.reduce((C, A) => {
    const l = C[A];
    return (!l || Object.keys(l).length === 0) && delete C[A], C;
  }, I);
}
function ln(g, I, C = !0) {
  if (!I || typeof I != "string") return null;
  if (g && g.vars && C) {
    const A = `vars.${I}`
      .split(".")
      .reduce((l, e) => (l && l[e] ? l[e] : null), g);
    if (A != null) return A;
  }
  return I.split(".").reduce((A, l) => (A && A[l] != null ? A[l] : null), g);
}
function He(g, I, C, A = C) {
  let l;
  return (
    typeof g == "function"
      ? (l = g(C))
      : Array.isArray(g)
      ? (l = g[C] || A)
      : (l = ln(g, C) || A),
    I && (l = I(l, A, g)),
    l
  );
}
function Q(g) {
  const { prop: I, cssProperty: C = g.prop, themeKey: A, transform: l } = g,
    e = (n) => {
      if (n[I] == null) return null;
      const d = n[I],
        c = n.theme,
        o = ln(c, A) || {};
      return hI(n, d, (m) => {
        let G = He(o, l, m);
        return (
          m === G &&
            typeof m == "string" &&
            (G = He(o, l, `${I}${m === "default" ? "" : ia(m)}`, m)),
          C === !1 ? G : { [C]: G }
        );
      });
    };
  return (e.propTypes = {}), (e.filterProps = [I]), e;
}
function j0(g) {
  const I = {};
  return (C) => (I[C] === void 0 && (I[C] = g(C)), I[C]);
}
const P0 = { m: "margin", p: "padding" },
  O0 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  ZZ = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  q0 = j0((g) => {
    if (g.length > 2)
      if (ZZ[g]) g = ZZ[g];
      else return [g];
    const [I, C] = g.split(""),
      A = P0[I],
      l = O0[C] || "";
    return Array.isArray(l) ? l.map((e) => A + e) : [A + l];
  }),
  Bo = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  ro = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Bo, ...ro];
function ul(g, I, C, A) {
  var l;
  const e = (l = ln(g, I, !1)) != null ? l : C;
  return typeof e == "number"
    ? (n) => (typeof n == "string" ? n : e * n)
    : Array.isArray(e)
    ? (n) => (typeof n == "string" ? n : e[n])
    : typeof e == "function"
    ? e
    : () => {};
}
function Ra(g) {
  return ul(g, "spacing", 8);
}
function sl(g, I) {
  if (typeof I == "string" || I == null) return I;
  const C = Math.abs(I),
    A = g(C);
  return I >= 0 ? A : typeof A == "number" ? -A : `-${A}`;
}
function _0(g, I) {
  return (C) => g.reduce((A, l) => ((A[l] = sl(I, C)), A), {});
}
function $0(g, I, C, A) {
  if (I.indexOf(C) === -1) return null;
  const l = q0(C),
    e = _0(l, A),
    n = g[C];
  return hI(g, n, e);
}
function Ja(g, I) {
  const C = Ra(g.theme);
  return Object.keys(g)
    .map((A) => $0(g, I, A, C))
    .reduce(wA, {});
}
function $(g) {
  return Ja(g, Bo);
}
$.propTypes = {};
$.filterProps = Bo;
function gg(g) {
  return Ja(g, ro);
}
gg.propTypes = {};
gg.filterProps = ro;
function gr(g = 8) {
  if (g.mui) return g;
  const I = Ra({ spacing: g }),
    C = (...A) =>
      (A.length === 0 ? [1] : A)
        .map((e) => {
          const n = I(e);
          return typeof n == "number" ? `${n}px` : n;
        })
        .join(" ");
  return (C.mui = !0), C;
}
function en(...g) {
  const I = g.reduce(
      (A, l) => (
        l.filterProps.forEach((e) => {
          A[e] = l;
        }),
        A
      ),
      {}
    ),
    C = (A) => Object.keys(A).reduce((l, e) => (I[e] ? wA(l, I[e](A)) : l), {});
  return (
    (C.propTypes = {}),
    (C.filterProps = g.reduce((A, l) => A.concat(l.filterProps), [])),
    C
  );
}
function cI(g) {
  return typeof g != "number" ? g : `${g}px solid`;
}
const Ir = Q({ prop: "border", themeKey: "borders", transform: cI }),
  Cr = Q({ prop: "borderTop", themeKey: "borders", transform: cI }),
  Ar = Q({ prop: "borderRight", themeKey: "borders", transform: cI }),
  lr = Q({ prop: "borderBottom", themeKey: "borders", transform: cI }),
  er = Q({ prop: "borderLeft", themeKey: "borders", transform: cI }),
  nr = Q({ prop: "borderColor", themeKey: "palette" }),
  dr = Q({ prop: "borderTopColor", themeKey: "palette" }),
  cr = Q({ prop: "borderRightColor", themeKey: "palette" }),
  or = Q({ prop: "borderBottomColor", themeKey: "palette" }),
  tr = Q({ prop: "borderLeftColor", themeKey: "palette" }),
  nn = (g) => {
    if (g.borderRadius !== void 0 && g.borderRadius !== null) {
      const I = ul(g.theme, "shape.borderRadius", 4),
        C = (A) => ({ borderRadius: sl(I, A) });
      return hI(g, g.borderRadius, C);
    }
    return null;
  };
nn.propTypes = {};
nn.filterProps = ["borderRadius"];
en(Ir, Cr, Ar, lr, er, nr, dr, cr, or, tr, nn);
const dn = (g) => {
  if (g.gap !== void 0 && g.gap !== null) {
    const I = ul(g.theme, "spacing", 8),
      C = (A) => ({ gap: sl(I, A) });
    return hI(g, g.gap, C);
  }
  return null;
};
dn.propTypes = {};
dn.filterProps = ["gap"];
const cn = (g) => {
  if (g.columnGap !== void 0 && g.columnGap !== null) {
    const I = ul(g.theme, "spacing", 8),
      C = (A) => ({ columnGap: sl(I, A) });
    return hI(g, g.columnGap, C);
  }
  return null;
};
cn.propTypes = {};
cn.filterProps = ["columnGap"];
const on = (g) => {
  if (g.rowGap !== void 0 && g.rowGap !== null) {
    const I = ul(g.theme, "spacing", 8),
      C = (A) => ({ rowGap: sl(I, A) });
    return hI(g, g.rowGap, C);
  }
  return null;
};
on.propTypes = {};
on.filterProps = ["rowGap"];
const Zr = Q({ prop: "gridColumn" }),
  mr = Q({ prop: "gridRow" }),
  Gr = Q({ prop: "gridAutoFlow" }),
  ar = Q({ prop: "gridAutoColumns" }),
  ir = Q({ prop: "gridAutoRows" }),
  br = Q({ prop: "gridTemplateColumns" }),
  ur = Q({ prop: "gridTemplateRows" }),
  sr = Q({ prop: "gridTemplateAreas" }),
  Br = Q({ prop: "gridArea" });
en(dn, cn, on, Zr, mr, Gr, ar, ir, br, ur, sr, Br);
function LC(g, I) {
  return I === "grey" ? I : g;
}
const rr = Q({ prop: "color", themeKey: "palette", transform: LC }),
  yr = Q({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: LC,
  }),
  Wr = Q({ prop: "backgroundColor", themeKey: "palette", transform: LC });
en(rr, yr, Wr);
function vg(g) {
  return g <= 1 && g !== 0 ? `${g * 100}%` : g;
}
const Vr = Q({ prop: "width", transform: vg }),
  yo = (g) => {
    if (g.maxWidth !== void 0 && g.maxWidth !== null) {
      const I = (C) => {
        var A, l;
        const e =
          ((A = g.theme) == null ||
          (A = A.breakpoints) == null ||
          (A = A.values) == null
            ? void 0
            : A[C]) || so[C];
        return e
          ? ((l = g.theme) == null || (l = l.breakpoints) == null
              ? void 0
              : l.unit) !== "px"
            ? { maxWidth: `${e}${g.theme.breakpoints.unit}` }
            : { maxWidth: e }
          : { maxWidth: vg(C) };
      };
      return hI(g, g.maxWidth, I);
    }
    return null;
  };
yo.filterProps = ["maxWidth"];
const Sr = Q({ prop: "minWidth", transform: vg }),
  hr = Q({ prop: "height", transform: vg }),
  Xr = Q({ prop: "maxHeight", transform: vg }),
  pr = Q({ prop: "minHeight", transform: vg });
Q({ prop: "size", cssProperty: "width", transform: vg });
Q({ prop: "size", cssProperty: "height", transform: vg });
const Rr = Q({ prop: "boxSizing" });
en(Vr, yo, Sr, hr, Xr, pr, Rr);
const Jr = {
    border: { themeKey: "borders", transform: cI },
    borderTop: { themeKey: "borders", transform: cI },
    borderRight: { themeKey: "borders", transform: cI },
    borderBottom: { themeKey: "borders", transform: cI },
    borderLeft: { themeKey: "borders", transform: cI },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: nn },
    color: { themeKey: "palette", transform: LC },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: LC,
    },
    backgroundColor: { themeKey: "palette", transform: LC },
    p: { style: gg },
    pt: { style: gg },
    pr: { style: gg },
    pb: { style: gg },
    pl: { style: gg },
    px: { style: gg },
    py: { style: gg },
    padding: { style: gg },
    paddingTop: { style: gg },
    paddingRight: { style: gg },
    paddingBottom: { style: gg },
    paddingLeft: { style: gg },
    paddingX: { style: gg },
    paddingY: { style: gg },
    paddingInline: { style: gg },
    paddingInlineStart: { style: gg },
    paddingInlineEnd: { style: gg },
    paddingBlock: { style: gg },
    paddingBlockStart: { style: gg },
    paddingBlockEnd: { style: gg },
    m: { style: $ },
    mt: { style: $ },
    mr: { style: $ },
    mb: { style: $ },
    ml: { style: $ },
    mx: { style: $ },
    my: { style: $ },
    margin: { style: $ },
    marginTop: { style: $ },
    marginRight: { style: $ },
    marginBottom: { style: $ },
    marginLeft: { style: $ },
    marginX: { style: $ },
    marginY: { style: $ },
    marginInline: { style: $ },
    marginInlineStart: { style: $ },
    marginInlineEnd: { style: $ },
    marginBlock: { style: $ },
    marginBlockStart: { style: $ },
    marginBlockEnd: { style: $ },
    displayPrint: {
      cssProperty: !1,
      transform: (g) => ({ "@media print": { display: g } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: dn },
    rowGap: { style: on },
    columnGap: { style: cn },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: vg },
    maxWidth: { style: yo },
    minWidth: { transform: vg },
    height: { transform: vg },
    maxHeight: { transform: vg },
    minHeight: { transform: vg },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  tn = Jr;
function Yr(...g) {
  const I = g.reduce((A, l) => A.concat(Object.keys(l)), []),
    C = new Set(I);
  return g.every((A) => C.size === Object.keys(A).length);
}
function kr(g, I) {
  return typeof g == "function" ? g(I) : g;
}
function Hr() {
  function g(C, A, l, e) {
    const n = { [C]: A, theme: l },
      d = e[C];
    if (!d) return { [C]: A };
    const { cssProperty: c = C, themeKey: o, transform: t, style: m } = d;
    if (A == null) return null;
    if (o === "typography" && A === "inherit") return { [C]: A };
    const G = ln(l, o) || {};
    return m
      ? m(n)
      : hI(n, A, (i) => {
          let b = He(G, t, i);
          return (
            i === b &&
              typeof i == "string" &&
              (b = He(G, t, `${C}${i === "default" ? "" : ia(i)}`, i)),
            c === !1 ? b : { [c]: b }
          );
        });
  }
  function I(C) {
    var A;
    const { sx: l, theme: e = {} } = C || {};
    if (!l) return null;
    const n = (A = e.unstable_sxConfig) != null ? A : tn;
    function d(c) {
      let o = c;
      if (typeof c == "function") o = c(e);
      else if (typeof c != "object") return c;
      if (!o) return null;
      const t = D0(e.breakpoints),
        m = Object.keys(t);
      let G = t;
      return (
        Object.keys(o).forEach((s) => {
          const i = kr(o[s], e);
          if (i != null)
            if (typeof i == "object")
              if (n[s]) G = wA(G, g(s, i, e, n));
              else {
                const b = hI({ theme: e }, i, (V) => ({ [s]: V }));
                Yr(b, i) ? (G[s] = I({ sx: i, theme: e })) : (G = wA(G, b));
              }
            else G = wA(G, g(s, i, e, n));
        }),
        T0(m, G)
      );
    }
    return Array.isArray(l) ? l.map(d) : d(l);
  }
  return I;
}
const Ya = Hr();
Ya.filterProps = ["sx"];
const Wo = Ya,
  Kr = ["breakpoints", "palette", "spacing", "shape"];
function ka(g = {}, ...I) {
  const { breakpoints: C = {}, palette: A = {}, spacing: l, shape: e = {} } = g,
    n = RI(g, Kr),
    d = E0(C),
    c = gr(l);
  let o = rI(
    {
      breakpoints: d,
      direction: "ltr",
      components: {},
      palette: D({ mode: "light" }, A),
      spacing: c,
      shape: D({}, L0, e),
    },
    n
  );
  return (
    (o = I.reduce((t, m) => rI(t, m), o)),
    (o.unstable_sxConfig = D({}, tn, n == null ? void 0 : n.unstable_sxConfig)),
    (o.unstable_sx = function (m) {
      return Wo({ sx: m, theme: this });
    }),
    o
  );
}
function vr(g) {
  return Object.keys(g).length === 0;
}
function Nr(g = null) {
  const I = y.useContext(pa);
  return !I || vr(I) ? g : I;
}
const Fr = ka();
function wr(g = Fr) {
  return Nr(g);
}
const fr = ["sx"],
  zr = (g) => {
    var I, C;
    const A = { systemProps: {}, otherProps: {} },
      l =
        (I =
          g == null || (C = g.theme) == null ? void 0 : C.unstable_sxConfig) !=
        null
          ? I
          : tn;
    return (
      Object.keys(g).forEach((e) => {
        l[e] ? (A.systemProps[e] = g[e]) : (A.otherProps[e] = g[e]);
      }),
      A
    );
  };
function Qr(g) {
  const { sx: I } = g,
    C = RI(g, fr),
    { systemProps: A, otherProps: l } = zr(C);
  let e;
  return (
    Array.isArray(I)
      ? (e = [A, ...I])
      : typeof I == "function"
      ? (e = (...n) => {
          const d = I(...n);
          return lC(d) ? D({}, A, d) : A;
        })
      : (e = D({}, A, I)),
    D({}, l, { sx: e })
  );
}
function Ha(g) {
  var I,
    C,
    A = "";
  if (typeof g == "string" || typeof g == "number") A += g;
  else if (typeof g == "object")
    if (Array.isArray(g))
      for (I = 0; I < g.length; I++)
        g[I] && (C = Ha(g[I])) && (A && (A += " "), (A += C));
    else for (I in g) g[I] && (A && (A += " "), (A += I));
  return A;
}
function Ur() {
  for (var g, I, C = 0, A = ""; C < arguments.length; )
    (g = arguments[C++]) && (I = Ha(g)) && (A && (A += " "), (A += I));
  return A;
}
const xr = ["className", "component"];
function Er(g = {}) {
  const {
      themeId: I,
      defaultTheme: C,
      defaultClassName: A = "MuiBox-root",
      generateClassName: l,
    } = g,
    e = Q0("div", {
      shouldForwardProp: (d) => d !== "theme" && d !== "sx" && d !== "as",
    })(Wo);
  return y.forwardRef(function (c, o) {
    const t = wr(C),
      m = Qr(c),
      { className: G, component: s = "div" } = m,
      i = RI(m, xr);
    return S.jsx(
      e,
      D(
        {
          as: s,
          ref: o,
          className: Ur(G, l ? l(A) : A),
          theme: (I && t[I]) || t,
        },
        i
      )
    );
  });
}
function Ka(g, I = 0, C = 1) {
  return Math.min(Math.max(I, g), C);
}
function Mr(g) {
  g = g.slice(1);
  const I = new RegExp(`.{1,${g.length >= 6 ? 2 : 1}}`, "g");
  let C = g.match(I);
  return (
    C && C[0].length === 1 && (C = C.map((A) => A + A)),
    C
      ? `rgb${C.length === 4 ? "a" : ""}(${C.map((A, l) =>
          l < 3
            ? parseInt(A, 16)
            : Math.round((parseInt(A, 16) / 255) * 1e3) / 1e3
        ).join(", ")})`
      : ""
  );
}
function CA(g) {
  if (g.type) return g;
  if (g.charAt(0) === "#") return CA(Mr(g));
  const I = g.indexOf("("),
    C = g.substring(0, I);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(C) === -1)
    throw new Error(gA(9, g));
  let A = g.substring(I + 1, g.length - 1),
    l;
  if (C === "color") {
    if (
      ((A = A.split(" ")),
      (l = A.shift()),
      A.length === 4 && A[3].charAt(0) === "/" && (A[3] = A[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        l
      ) === -1)
    )
      throw new Error(gA(10, l));
  } else A = A.split(",");
  return (
    (A = A.map((e) => parseFloat(e))), { type: C, values: A, colorSpace: l }
  );
}
function Vo(g) {
  const { type: I, colorSpace: C } = g;
  let { values: A } = g;
  return (
    I.indexOf("rgb") !== -1
      ? (A = A.map((l, e) => (e < 3 ? parseInt(l, 10) : l)))
      : I.indexOf("hsl") !== -1 && ((A[1] = `${A[1]}%`), (A[2] = `${A[2]}%`)),
    I.indexOf("color") !== -1
      ? (A = `${C} ${A.join(" ")}`)
      : (A = `${A.join(", ")}`),
    `${I}(${A})`
  );
}
function Lr(g) {
  g = CA(g);
  const { values: I } = g,
    C = I[0],
    A = I[1] / 100,
    l = I[2] / 100,
    e = A * Math.min(l, 1 - l),
    n = (o, t = (o + C / 30) % 12) =>
      l - e * Math.max(Math.min(t - 3, 9 - t, 1), -1);
  let d = "rgb";
  const c = [
    Math.round(n(0) * 255),
    Math.round(n(8) * 255),
    Math.round(n(4) * 255),
  ];
  return (
    g.type === "hsla" && ((d += "a"), c.push(I[3])), Vo({ type: d, values: c })
  );
}
function mZ(g) {
  g = CA(g);
  let I = g.type === "hsl" || g.type === "hsla" ? CA(Lr(g)).values : g.values;
  return (
    (I = I.map(
      (C) => (
        g.type !== "color" && (C /= 255),
        C <= 0.03928 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * I[0] + 0.7152 * I[1] + 0.0722 * I[2]).toFixed(3))
  );
}
function Dr(g, I) {
  const C = mZ(g),
    A = mZ(I);
  return (Math.max(C, A) + 0.05) / (Math.min(C, A) + 0.05);
}
function Tr(g, I) {
  if (((g = CA(g)), (I = Ka(I)), g.type.indexOf("hsl") !== -1))
    g.values[2] *= 1 - I;
  else if (g.type.indexOf("rgb") !== -1 || g.type.indexOf("color") !== -1)
    for (let C = 0; C < 3; C += 1) g.values[C] *= 1 - I;
  return Vo(g);
}
function jr(g, I) {
  if (((g = CA(g)), (I = Ka(I)), g.type.indexOf("hsl") !== -1))
    g.values[2] += (100 - g.values[2]) * I;
  else if (g.type.indexOf("rgb") !== -1)
    for (let C = 0; C < 3; C += 1) g.values[C] += (255 - g.values[C]) * I;
  else if (g.type.indexOf("color") !== -1)
    for (let C = 0; C < 3; C += 1) g.values[C] += (1 - g.values[C]) * I;
  return Vo(g);
}
function Pr(g, I) {
  return D(
    {
      toolbar: {
        minHeight: 56,
        [g.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [g.up("sm")]: { minHeight: 64 },
      },
    },
    I
  );
}
const Or = ["mode", "contrastThreshold", "tonalOffset"],
  GZ = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Al.white, default: Al.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Ad = {
    text: {
      primary: Al.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Al.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function aZ(g, I, C, A) {
  const l = A.light || A,
    e = A.dark || A * 1.5;
  g[I] ||
    (g.hasOwnProperty(C)
      ? (g[I] = g[C])
      : I === "light"
      ? (g.light = jr(g.main, l))
      : I === "dark" && (g.dark = Tr(g.main, e)));
}
function qr(g = "light") {
  return g === "dark"
    ? { main: yC[200], light: yC[50], dark: yC[400] }
    : { main: yC[700], light: yC[400], dark: yC[800] };
}
function _r(g = "light") {
  return g === "dark"
    ? { main: rC[200], light: rC[50], dark: rC[400] }
    : { main: rC[500], light: rC[300], dark: rC[700] };
}
function $r(g = "light") {
  return g === "dark"
    ? { main: BC[500], light: BC[300], dark: BC[700] }
    : { main: BC[700], light: BC[400], dark: BC[800] };
}
function gy(g = "light") {
  return g === "dark"
    ? { main: WC[400], light: WC[300], dark: WC[700] }
    : { main: WC[700], light: WC[500], dark: WC[900] };
}
function Iy(g = "light") {
  return g === "dark"
    ? { main: VC[400], light: VC[300], dark: VC[700] }
    : { main: VC[800], light: VC[500], dark: VC[900] };
}
function Cy(g = "light") {
  return g === "dark"
    ? { main: WA[400], light: WA[300], dark: WA[700] }
    : { main: "#ed6c02", light: WA[500], dark: WA[900] };
}
function Ay(g) {
  const {
      mode: I = "light",
      contrastThreshold: C = 3,
      tonalOffset: A = 0.2,
    } = g,
    l = RI(g, Or),
    e = g.primary || qr(I),
    n = g.secondary || _r(I),
    d = g.error || $r(I),
    c = g.info || gy(I),
    o = g.success || Iy(I),
    t = g.warning || Cy(I);
  function m(b) {
    return Dr(b, Ad.text.primary) >= C ? Ad.text.primary : GZ.text.primary;
  }
  const G = ({
      color: b,
      name: V,
      mainShade: a = 500,
      lightShade: Z = 300,
      darkShade: u = 700,
    }) => {
      if (
        ((b = D({}, b)),
        !b.main && b[a] && (b.main = b[a]),
        !b.hasOwnProperty("main"))
      )
        throw new Error(gA(11, V ? ` (${V})` : "", a));
      if (typeof b.main != "string")
        throw new Error(gA(12, V ? ` (${V})` : "", JSON.stringify(b.main)));
      return (
        aZ(b, "light", Z, A),
        aZ(b, "dark", u, A),
        b.contrastText || (b.contrastText = m(b.main)),
        b
      );
    },
    s = { dark: Ad, light: GZ };
  return rI(
    D(
      {
        common: D({}, Al),
        mode: I,
        primary: G({ color: e, name: "primary" }),
        secondary: G({
          color: n,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: G({ color: d, name: "error" }),
        warning: G({ color: t, name: "warning" }),
        info: G({ color: c, name: "info" }),
        success: G({ color: o, name: "success" }),
        grey: QB,
        contrastThreshold: C,
        getContrastText: m,
        augmentColor: G,
        tonalOffset: A,
      },
      s[I]
    ),
    l
  );
}
const ly = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function ey(g) {
  return Math.round(g * 1e5) / 1e5;
}
const iZ = { textTransform: "uppercase" },
  bZ = '"Roboto", "Helvetica", "Arial", sans-serif';
function ny(g, I) {
  const C = typeof I == "function" ? I(g) : I,
    {
      fontFamily: A = bZ,
      fontSize: l = 14,
      fontWeightLight: e = 300,
      fontWeightRegular: n = 400,
      fontWeightMedium: d = 500,
      fontWeightBold: c = 700,
      htmlFontSize: o = 16,
      allVariants: t,
      pxToRem: m,
    } = C,
    G = RI(C, ly),
    s = l / 14,
    i = m || ((a) => `${(a / o) * s}rem`),
    b = (a, Z, u, r, X) =>
      D(
        { fontFamily: A, fontWeight: a, fontSize: i(Z), lineHeight: u },
        A === bZ ? { letterSpacing: `${ey(r / Z)}em` } : {},
        X,
        t
      ),
    V = {
      h1: b(e, 96, 1.167, -1.5),
      h2: b(e, 60, 1.2, -0.5),
      h3: b(n, 48, 1.167, 0),
      h4: b(n, 34, 1.235, 0.25),
      h5: b(n, 24, 1.334, 0),
      h6: b(d, 20, 1.6, 0.15),
      subtitle1: b(n, 16, 1.75, 0.15),
      subtitle2: b(d, 14, 1.57, 0.1),
      body1: b(n, 16, 1.5, 0.15),
      body2: b(n, 14, 1.43, 0.15),
      button: b(d, 14, 1.75, 0.4, iZ),
      caption: b(n, 12, 1.66, 0.4),
      overline: b(n, 12, 2.66, 1, iZ),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return rI(
    D(
      {
        htmlFontSize: o,
        pxToRem: i,
        fontFamily: A,
        fontSize: l,
        fontWeightLight: e,
        fontWeightRegular: n,
        fontWeightMedium: d,
        fontWeightBold: c,
      },
      V
    ),
    G,
    { clone: !1 }
  );
}
const dy = 0.2,
  cy = 0.14,
  oy = 0.12;
function j(...g) {
  return [
    `${g[0]}px ${g[1]}px ${g[2]}px ${g[3]}px rgba(0,0,0,${dy})`,
    `${g[4]}px ${g[5]}px ${g[6]}px ${g[7]}px rgba(0,0,0,${cy})`,
    `${g[8]}px ${g[9]}px ${g[10]}px ${g[11]}px rgba(0,0,0,${oy})`,
  ].join(",");
}
const ty = [
    "none",
    j(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    j(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    j(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    j(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    j(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    j(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    j(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    j(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    j(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    j(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    j(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    j(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    j(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    j(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    j(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    j(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    j(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    j(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    j(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    j(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    j(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    j(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    j(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    j(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Zy = ty,
  my = ["duration", "easing", "delay"],
  Gy = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  ay = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function uZ(g) {
  return `${Math.round(g)}ms`;
}
function iy(g) {
  if (!g) return 0;
  const I = g / 36;
  return Math.round((4 + 15 * I ** 0.25 + I / 5) * 10);
}
function by(g) {
  const I = D({}, Gy, g.easing),
    C = D({}, ay, g.duration);
  return D(
    {
      getAutoHeightDuration: iy,
      create: (l = ["all"], e = {}) => {
        const {
          duration: n = C.standard,
          easing: d = I.easeInOut,
          delay: c = 0,
        } = e;
        return (
          RI(e, my),
          (Array.isArray(l) ? l : [l])
            .map(
              (o) =>
                `${o} ${typeof n == "string" ? n : uZ(n)} ${d} ${
                  typeof c == "string" ? c : uZ(c)
                }`
            )
            .join(",")
        );
      },
    },
    g,
    { easing: I, duration: C }
  );
}
const uy = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  sy = uy,
  By = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function ry(g = {}, ...I) {
  const {
      mixins: C = {},
      palette: A = {},
      transitions: l = {},
      typography: e = {},
    } = g,
    n = RI(g, By);
  if (g.vars) throw new Error(gA(18));
  const d = Ay(A),
    c = ka(g);
  let o = rI(c, {
    mixins: Pr(c.breakpoints, C),
    palette: d,
    shadows: Zy.slice(),
    typography: ny(d, e),
    transitions: by(l),
    zIndex: D({}, sy),
  });
  return (
    (o = rI(o, n)),
    (o = I.reduce((t, m) => rI(t, m), o)),
    (o.unstable_sxConfig = D({}, tn, n == null ? void 0 : n.unstable_sxConfig)),
    (o.unstable_sx = function (m) {
      return Wo({ sx: m, theme: this });
    }),
    o
  );
}
const yy = ry(),
  Wy = Er({
    themeId: MB,
    defaultTheme: yy,
    defaultClassName: "MuiBox-root",
    generateClassName: EB.generate,
  }),
  Vy = Wy,
  Sy = () => {
    const { setStudentInfo: g } = y.useContext(ZA),
      [I, C] = y.useState(""),
      [A, l] = y.useState(""),
      [e, n] = y.useState(""),
      [d, c] = y.useState(""),
      o = oA();
    jI.defaults.withCredentials = !0;
    const t = (G) => G.length === 7 && /^\d+$/.test(G),
      m = async (G) => {
        if ((G.preventDefault(), !I || !A || !e)) {
          c("All fields are required.");
          return;
        }
        if (!t(e)) {
          c("Invalid student number");
          return;
        }
        try {
          const i = (
            await jI.post(
              "https://student.northeurope.cloudapp.azure.com/api/studentlogin",
              { username: I, password: A, studentNumber: e }
            )
          ).data.apiData;
          !i.message || i.message !== "invalid username or password"
            ? (g({
                staff: i.staff,
                firstname: i.firstname,
                lastname: i.lastname,
                userId: i.userId,
                studentNumber: e,
              }),
              localStorage.setItem("userid", i.userId),
              localStorage.setItem("token", i.accessToken),
              localStorage.setItem("studentnumber", e),
              o(i.redirectUrl))
            : c("Invalid username or password");
        } catch {
          c("Error logging in. Check your credentials and connection.");
        }
      };
    return S.jsx(Vy, {
      className: "min-h-screen flex flex-col items-center justify-center",
      children: S.jsxs("div", {
        className: "bg-white p-8 rounded shadow-lg text-center",
        children: [
          S.jsx("img", {
            className: "mx-auto h-[18mm] mb-6",
            src: Ga,
            alt: "Logo",
          }),
          S.jsxs("form", {
            onSubmit: m,
            children: [
              S.jsxs("div", {
                className: "mb-4",
                children: [
                  S.jsx("label", {
                    className:
                      "block text-black text-sm font-semibold mb-2 font-roboto-slab",
                    children: "Username",
                  }),
                  S.jsx("input", {
                    className:
                      "w-full text-black p-2 border rounded font-open-sans",
                    type: "text",
                    placeholder: "Enter your username",
                    onChange: (G) => C(G.target.value),
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "mb-4",
                children: [
                  S.jsx("label", {
                    className:
                      "block text-black text-sm font-semibold mb-2 font-roboto-slab",
                    children: "Password",
                  }),
                  S.jsx("input", {
                    className:
                      "w-full p-2 text-black border rounded font-open-sans",
                    type: "password",
                    placeholder: "Enter your password",
                    onChange: (G) => l(G.target.value),
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "mb-4",
                children: [
                  S.jsx("label", {
                    className:
                      "block text-black text-sm font-semibold mb-2 font-roboto-slab",
                    children: "Student Number",
                  }),
                  S.jsx("input", {
                    className:
                      "w-full p-2 text-black border rounded font-open-sans",
                    type: "text",
                    value: e,
                    onChange: (G) => n(G.target.value),
                    placeholder: "Enter your student number",
                  }),
                ],
              }),
              S.jsx("h3", { className: "text-red-600", children: d }),
              S.jsx("button", {
                className:
                  "w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700 font-roboto-slab",
                type: "submit",
                children: "Login",
              }),
            ],
          }),
        ],
      }),
    });
  },
  sZ = () => {
    const { studentInfo: g } = y.useContext(ZA),
      I = oA();
    return (
      y.useEffect(() => {
        g &&
          g.firstname !== "" &&
          g.lastname !== "" &&
          I(g.staff ? "/teacherhome" : "/studenthome");
      }, [g, I]),
      S.jsxs(S.Fragment, {
        children: [S.jsx("div", { className: "fullscreen-bg" }), S.jsx(Sy, {})],
      })
    );
  };
function dl(g) {
  "@babel/helpers - typeof";
  return (
    (dl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (I) {
            return typeof I;
          }
        : function (I) {
            return I &&
              typeof Symbol == "function" &&
              I.constructor === Symbol &&
              I !== Symbol.prototype
              ? "symbol"
              : typeof I;
          }),
    dl(g)
  );
}
function hy(g, I) {
  if (dl(g) !== "object" || g === null) return g;
  var C = g[Symbol.toPrimitive];
  if (C !== void 0) {
    var A = C.call(g, I || "default");
    if (dl(A) !== "object") return A;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (I === "string" ? String : Number)(g);
}
function Xy(g) {
  var I = hy(g, "string");
  return dl(I) === "symbol" ? I : String(I);
}
function py(g, I, C) {
  return (
    (I = Xy(I)),
    I in g
      ? Object.defineProperty(g, I, {
          value: C,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (g[I] = C),
    g
  );
}
function Ry(g) {
  if (Array.isArray(g)) return g;
}
function Jy(g, I) {
  var C =
    g == null
      ? null
      : (typeof Symbol < "u" && g[Symbol.iterator]) || g["@@iterator"];
  if (C != null) {
    var A,
      l,
      e,
      n,
      d = [],
      c = !0,
      o = !1;
    try {
      if (((e = (C = C.call(g)).next), I === 0)) {
        if (Object(C) !== C) return;
        c = !1;
      } else
        for (
          ;
          !(c = (A = e.call(C)).done) && (d.push(A.value), d.length !== I);
          c = !0
        );
    } catch (t) {
      (o = !0), (l = t);
    } finally {
      try {
        if (!c && C.return != null && ((n = C.return()), Object(n) !== n))
          return;
      } finally {
        if (o) throw l;
      }
    }
    return d;
  }
}
function BZ(g, I) {
  (I == null || I > g.length) && (I = g.length);
  for (var C = 0, A = new Array(I); C < I; C++) A[C] = g[C];
  return A;
}
function Yy(g, I) {
  if (g) {
    if (typeof g == "string") return BZ(g, I);
    var C = Object.prototype.toString.call(g).slice(8, -1);
    if (
      (C === "Object" && g.constructor && (C = g.constructor.name),
      C === "Map" || C === "Set")
    )
      return Array.from(g);
    if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))
      return BZ(g, I);
  }
}
function ky() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hy(g, I) {
  return Ry(g) || Jy(g, I) || Yy(g, I) || ky();
}
function Ky(g, I) {
  if (g == null) return {};
  var C = RI(g, I),
    A,
    l;
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(g);
    for (l = 0; l < e.length; l++)
      (A = e[l]),
        !(I.indexOf(A) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(g, A) &&
          (C[A] = g[A]);
  }
  return C;
}
var va = { exports: {} },
  x = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gg = typeof Symbol == "function" && Symbol.for,
  So = Gg ? Symbol.for("react.element") : 60103,
  ho = Gg ? Symbol.for("react.portal") : 60106,
  Zn = Gg ? Symbol.for("react.fragment") : 60107,
  mn = Gg ? Symbol.for("react.strict_mode") : 60108,
  Gn = Gg ? Symbol.for("react.profiler") : 60114,
  an = Gg ? Symbol.for("react.provider") : 60109,
  bn = Gg ? Symbol.for("react.context") : 60110,
  Xo = Gg ? Symbol.for("react.async_mode") : 60111,
  un = Gg ? Symbol.for("react.concurrent_mode") : 60111,
  sn = Gg ? Symbol.for("react.forward_ref") : 60112,
  Bn = Gg ? Symbol.for("react.suspense") : 60113,
  vy = Gg ? Symbol.for("react.suspense_list") : 60120,
  rn = Gg ? Symbol.for("react.memo") : 60115,
  yn = Gg ? Symbol.for("react.lazy") : 60116,
  Ny = Gg ? Symbol.for("react.block") : 60121,
  Fy = Gg ? Symbol.for("react.fundamental") : 60117,
  wy = Gg ? Symbol.for("react.responder") : 60118,
  fy = Gg ? Symbol.for("react.scope") : 60119;
function Ug(g) {
  if (typeof g == "object" && g !== null) {
    var I = g.$$typeof;
    switch (I) {
      case So:
        switch (((g = g.type), g)) {
          case Xo:
          case un:
          case Zn:
          case Gn:
          case mn:
          case Bn:
            return g;
          default:
            switch (((g = g && g.$$typeof), g)) {
              case bn:
              case sn:
              case yn:
              case rn:
              case an:
                return g;
              default:
                return I;
            }
        }
      case ho:
        return I;
    }
  }
}
function Na(g) {
  return Ug(g) === un;
}
x.AsyncMode = Xo;
x.ConcurrentMode = un;
x.ContextConsumer = bn;
x.ContextProvider = an;
x.Element = So;
x.ForwardRef = sn;
x.Fragment = Zn;
x.Lazy = yn;
x.Memo = rn;
x.Portal = ho;
x.Profiler = Gn;
x.StrictMode = mn;
x.Suspense = Bn;
x.isAsyncMode = function (g) {
  return Na(g) || Ug(g) === Xo;
};
x.isConcurrentMode = Na;
x.isContextConsumer = function (g) {
  return Ug(g) === bn;
};
x.isContextProvider = function (g) {
  return Ug(g) === an;
};
x.isElement = function (g) {
  return typeof g == "object" && g !== null && g.$$typeof === So;
};
x.isForwardRef = function (g) {
  return Ug(g) === sn;
};
x.isFragment = function (g) {
  return Ug(g) === Zn;
};
x.isLazy = function (g) {
  return Ug(g) === yn;
};
x.isMemo = function (g) {
  return Ug(g) === rn;
};
x.isPortal = function (g) {
  return Ug(g) === ho;
};
x.isProfiler = function (g) {
  return Ug(g) === Gn;
};
x.isStrictMode = function (g) {
  return Ug(g) === mn;
};
x.isSuspense = function (g) {
  return Ug(g) === Bn;
};
x.isValidElementType = function (g) {
  return (
    typeof g == "string" ||
    typeof g == "function" ||
    g === Zn ||
    g === un ||
    g === Gn ||
    g === mn ||
    g === Bn ||
    g === vy ||
    (typeof g == "object" &&
      g !== null &&
      (g.$$typeof === yn ||
        g.$$typeof === rn ||
        g.$$typeof === an ||
        g.$$typeof === bn ||
        g.$$typeof === sn ||
        g.$$typeof === Fy ||
        g.$$typeof === wy ||
        g.$$typeof === fy ||
        g.$$typeof === Ny))
  );
};
x.typeOf = Ug;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var rZ = Object.getOwnPropertySymbols,
  zy = Object.prototype.hasOwnProperty,
  Qy = Object.prototype.propertyIsEnumerable;
function Uy(g) {
  if (g == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(g);
}
function xy() {
  try {
    if (!Object.assign) return !1;
    var g = new String("abc");
    if (((g[5] = "de"), Object.getOwnPropertyNames(g)[0] === "5")) return !1;
    for (var I = {}, C = 0; C < 10; C++) I["_" + String.fromCharCode(C)] = C;
    var A = Object.getOwnPropertyNames(I).map(function (e) {
      return I[e];
    });
    if (A.join("") !== "0123456789") return !1;
    var l = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (e) {
        l[e] = e;
      }),
      Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
xy();
var Ey = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  My = Ey;
Function.call.bind(Object.prototype.hasOwnProperty);
var Ly = My;
function Fa() {}
function wa() {}
wa.resetWarningCache = Fa;
var Dy = function () {
  function g(A, l, e, n, d, c) {
    if (c !== Ly) {
      var o = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((o.name = "Invariant Violation"), o);
    }
  }
  g.isRequired = g;
  function I() {
    return g;
  }
  var C = {
    array: g,
    bigint: g,
    bool: g,
    func: g,
    number: g,
    object: g,
    string: g,
    symbol: g,
    any: g,
    arrayOf: I,
    element: g,
    elementType: g,
    instanceOf: I,
    node: g,
    objectOf: I,
    oneOf: I,
    oneOfType: I,
    shape: I,
    exact: I,
    checkPropTypes: wa,
    resetWarningCache: Fa,
  };
  return (C.PropTypes = C), C;
};
va.exports = Dy();
var SC = va.exports;
function Ty(g, I) {
  var C = atob(g);
  if (I) {
    for (var A = new Uint8Array(C.length), l = 0, e = C.length; l < e; ++l)
      A[l] = C.charCodeAt(l);
    return String.fromCharCode.apply(null, new Uint16Array(A.buffer));
  }
  return C;
}
function jy(g, I, C) {
  var A = I === void 0 ? null : I,
    l = C === void 0 ? !1 : C,
    e = Ty(g, l),
    n =
      e.indexOf(
        `
`,
        10
      ) + 1,
    d = e.substring(n) + (A ? "//# sourceMappingURL=" + A : ""),
    c = new Blob([d], { type: "application/javascript" });
  return URL.createObjectURL(c);
}
function Py(g, I, C) {
  var A;
  return function (e) {
    return (A = A || jy(g, I, C)), new Worker(A, e);
  };
}
var Oy = Py(
    "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewoJJ3VzZSBzdHJpY3QnOwoKCXZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9OwoKCWZ1bmN0aW9uIGdldEF1Z21lbnRlZE5hbWVzcGFjZShuKSB7CgkJaWYgKG4uX19lc01vZHVsZSkgcmV0dXJuIG47CgkJdmFyIGEgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7CgkJT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbiAoaykgewoJCQl2YXIgZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobiwgayk7CgkJCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBrLCBkLmdldCA/IGQgOiB7CgkJCQllbnVtZXJhYmxlOiB0cnVlLAoJCQkJZ2V0OiBmdW5jdGlvbiAoKSB7CgkJCQkJcmV0dXJuIG5ba107CgkJCQl9CgkJCX0pOwoJCX0pOwoJCXJldHVybiBhOwoJfQoKCXZhciBCaW5hcnlCaXRtYXAkMSA9IHt9OwoKCXZhciBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24kMSA9IHt9OwoKCXZhciBFeGNlcHRpb24kMSA9IHt9OwoKCWZ1bmN0aW9uIGZpeFByb3RvKHRhcmdldCwgcHJvdG90eXBlKSB7CgkgIHZhciBzZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZjsKCSAgc2V0UHJvdG90eXBlT2YgPyBzZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvdHlwZSkgOiB0YXJnZXQuX19wcm90b19fID0gcHJvdG90eXBlOwoJfQoJZnVuY3Rpb24gZml4U3RhY2sodGFyZ2V0LCBmbikgewoJICBpZiAoZm4gPT09IHZvaWQgMCkgewoJICAgIGZuID0gdGFyZ2V0LmNvbnN0cnVjdG9yOwoJICB9CgoJICB2YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZTsKCSAgY2FwdHVyZVN0YWNrVHJhY2UgJiYgY2FwdHVyZVN0YWNrVHJhY2UodGFyZ2V0LCBmbik7Cgl9CgoJdmFyIF9fZXh0ZW5kcyRrID0gZnVuY3Rpb24gKCkgewoJICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCB7CgkgICAgICBfX3Byb3RvX186IFtdCgkgICAgfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICBkLl9fcHJvdG9fXyA9IGI7CgkgICAgfSB8fCBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgZm9yICh2YXIgcCBpbiBiKSB7IGlmIChiLmhhc093blByb3BlcnR5KHApKSB7IGRbcF0gPSBiW3BdOyB9IH0KCSAgICB9OwoKCSAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgfTsKCgkgIHJldHVybiBmdW5jdGlvbiAoZCwgYikgewoJICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CgoJICAgIGZ1bmN0aW9uIF9fKCkgewoJICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7CgkgICAgfQoKCSAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7CgkgIH07Cgl9KCk7CgoJdmFyIEN1c3RvbUVycm9yID0gZnVuY3Rpb24gKF9zdXBlcikgewoJICBfX2V4dGVuZHMkayhDdXN0b21FcnJvciwgX3N1cGVyKTsKCgkgIGZ1bmN0aW9uIEN1c3RvbUVycm9yKG1lc3NhZ2UpIHsKCSAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7CgoJICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1lc3NhZ2UpIHx8IHRoaXM7CgoJICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfdGhpcywgJ25hbWUnLCB7CgkgICAgICB2YWx1ZTogX25ld1RhcmdldC5uYW1lLAoJICAgICAgZW51bWVyYWJsZTogZmFsc2UsCgkgICAgICBjb25maWd1cmFibGU6IHRydWUKCSAgICB9KTsKCSAgICBmaXhQcm90byhfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpOwoJICAgIGZpeFN0YWNrKF90aGlzKTsKCSAgICByZXR1cm4gX3RoaXM7CgkgIH0KCgkgIHJldHVybiBDdXN0b21FcnJvcjsKCX0oRXJyb3IpOwoKCXZhciBfX3NwcmVhZEFycmF5cyA9IGZ1bmN0aW9uICgpIHsKCSAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzOwoKCSAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7IHMgKz0gYXJndW1lbnRzJDFbaV0ubGVuZ3RoOyB9CgoJICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspIHsgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspIHsgcltrXSA9IGFbal07IH0gfQoKCSAgcmV0dXJuIHI7Cgl9OwoJZnVuY3Rpb24gY3VzdG9tRXJyb3JGYWN0b3J5KGZuLCBwYXJlbnQpIHsKCSAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7CgkgICAgcGFyZW50ID0gRXJyb3I7CgkgIH0KCgkgIGZ1bmN0aW9uIEN1c3RvbUVycm9yKCkgewoJICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50czsKCgkgICAgdmFyIGFyZ3MgPSBbXTsKCgkgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHsKCSAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzJDFbX2ldOwoJICAgIH0KCgkgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEN1c3RvbUVycm9yKSkgeyByZXR1cm4gbmV3IChDdXN0b21FcnJvci5iaW5kLmFwcGx5KEN1c3RvbUVycm9yLCBfX3NwcmVhZEFycmF5cyhbdm9pZCAwXSwgYXJncykpKSgpOyB9CgkgICAgcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3MpOwoJICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbmFtZScsIHsKCSAgICAgIHZhbHVlOiBmbi5uYW1lIHx8IHBhcmVudC5uYW1lLAoJICAgICAgZW51bWVyYWJsZTogZmFsc2UsCgkgICAgICBjb25maWd1cmFibGU6IHRydWUKCSAgICB9KTsKCSAgICBmbi5hcHBseSh0aGlzLCBhcmdzKTsKCSAgICBmaXhTdGFjayh0aGlzLCBDdXN0b21FcnJvcik7CgkgIH0KCgkgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDdXN0b21FcnJvciwgewoJICAgIHByb3RvdHlwZTogewoJICAgICAgdmFsdWU6IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSwgewoJICAgICAgICBjb25zdHJ1Y3RvcjogewoJICAgICAgICAgIHZhbHVlOiBDdXN0b21FcnJvciwKCSAgICAgICAgICB3cml0YWJsZTogdHJ1ZSwKCSAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUKCSAgICAgICAgfQoJICAgICAgfSkKCSAgICB9CgkgIH0pOwoJfQoKCXZhciBjdXN0b21FcnJvciA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHsKCQlfX3Byb3RvX186IG51bGwsCgkJQ3VzdG9tRXJyb3I6IEN1c3RvbUVycm9yLAoJCWN1c3RvbUVycm9yRmFjdG9yeTogY3VzdG9tRXJyb3JGYWN0b3J5Cgl9KTsKCgl2YXIgcmVxdWlyZSQkMCA9IC8qQF9fUFVSRV9fKi9nZXRBdWdtZW50ZWROYW1lc3BhY2UoY3VzdG9tRXJyb3IpOwoKCXZhciBfX2V4dGVuZHMkaiA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7CgkgICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CgkgICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8CgkgICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTsKCSAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgfTsKCSAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9CgkgICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTsKCSAgICB9OwoJfSkoKTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGNlcHRpb24kMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJdmFyIHRzX2N1c3RvbV9lcnJvcl8xID0gcmVxdWlyZSQkMDsKCS8qKgoJICogQ3VzdG9tIEVycm9yIGNsYXNzIG9mIHR5cGUgRXhjZXB0aW9uLgoJICovCgl2YXIgRXhjZXB0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikgewoJICAgIF9fZXh0ZW5kcyRqKEV4Y2VwdGlvbiwgX3N1cGVyKTsKCSAgICAvKioKCSAgICAgKiBBbGxvd3MgRXhjZXB0aW9uIHRvIGJlIGNvbnN0cnVjdGVkIGRpcmVjdGx5CgkgICAgICogd2l0aCBzb21lIG1lc3NhZ2UgYW5kIHByb3RvdHlwZSBkZWZpbml0aW9uLgoJICAgICAqLwoJICAgIGZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlKSB7CgkgICAgICAgIGlmIChtZXNzYWdlID09PSB2b2lkIDApIHsgbWVzc2FnZSA9IHVuZGVmaW5lZDsgfQoJICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzOwoJICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTsKCSAgICAgICAgcmV0dXJuIF90aGlzOwoJICAgIH0KCSAgICBFeGNlcHRpb24ucHJvdG90eXBlLmdldEtpbmQgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHZhciBleCA9IHRoaXMuY29uc3RydWN0b3I7CgkgICAgICAgIHJldHVybiBleC5raW5kOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogSXQncyB0eXBlZCBhcyBzdHJpbmcgc28gaXQgY2FuIGJlIGV4dGVuZGVkIGFuZCBvdmVycmlkZW4uCgkgICAgICovCgkgICAgRXhjZXB0aW9uLmtpbmQgPSAnRXhjZXB0aW9uJzsKCSAgICByZXR1cm4gRXhjZXB0aW9uOwoJfSh0c19jdXN0b21fZXJyb3JfMS5DdXN0b21FcnJvcikpOwoJRXhjZXB0aW9uJDEuZGVmYXVsdCA9IEV4Y2VwdGlvbjsKCgl2YXIgX19leHRlbmRzJGkgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkgewoJICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAoJICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fAoJICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07CgkgICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgIH07CgkgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfQoJICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7CgkgICAgfTsKCX0pKCk7CglPYmplY3QuZGVmaW5lUHJvcGVydHkoSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCXZhciBFeGNlcHRpb25fMSQ5ID0gRXhjZXB0aW9uJDE7CgkvKioKCSAqIEN1c3RvbSBFcnJvciBjbGFzcyBvZiB0eXBlIEV4Y2VwdGlvbi4KCSAqLwoJdmFyIElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHsKCSAgICBfX2V4dGVuZHMkaShJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24sIF9zdXBlcik7CgkgICAgZnVuY3Rpb24gSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uKCkgewoJICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7CgkgICAgfQoJICAgIElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbi5raW5kID0gJ0lsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbic7CgkgICAgcmV0dXJuIElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbjsKCX0oRXhjZXB0aW9uXzEkOS5kZWZhdWx0KSk7CglJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24kMS5kZWZhdWx0ID0gSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uOwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwOSBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluYXJ5Qml0bWFwJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCXZhciBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSRhID0gSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uJDE7Cgl2YXIgQmluYXJ5Qml0bWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIGZ1bmN0aW9uIEJpbmFyeUJpdG1hcChiaW5hcml6ZXIpIHsKCSAgICAgICAgdGhpcy5iaW5hcml6ZXIgPSBiaW5hcml6ZXI7CgkgICAgICAgIGlmIChiaW5hcml6ZXIgPT09IG51bGwpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSRhLmRlZmF1bHQoJ0JpbmFyaXplciBtdXN0IGJlIG5vbi1udWxsLicpOwoJICAgICAgICB9CgkgICAgfQoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gVGhlIHdpZHRoIG9mIHRoZSBiaXRtYXAuCgkgICAgICovCgkgICAgQmluYXJ5Qml0bWFwLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuYmluYXJpemVyLmdldFdpZHRoKCk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIFRoZSBoZWlnaHQgb2YgdGhlIGJpdG1hcC4KCSAgICAgKi8KCSAgICBCaW5hcnlCaXRtYXAucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuYmluYXJpemVyLmdldEhlaWdodCgpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQ29udmVydHMgb25lIHJvdyBvZiBsdW1pbmFuY2UgZGF0YSB0byAxIGJpdCBkYXRhLiBNYXkgYWN0dWFsbHkgZG8gdGhlIGNvbnZlcnNpb24sIG9yIHJldHVybgoJICAgICAqIGNhY2hlZCBkYXRhLiBDYWxsZXJzIHNob3VsZCBhc3N1bWUgdGhpcyBtZXRob2QgaXMgZXhwZW5zaXZlIGFuZCBjYWxsIGl0IGFzIHNlbGRvbSBhcyBwb3NzaWJsZS4KCSAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnRlbmRlZCBmb3IgZGVjb2RpbmcgMUQgYmFyY29kZXMgYW5kIG1heSBjaG9vc2UgdG8gYXBwbHkgc2hhcnBlbmluZy4KCSAgICAgKgoJICAgICAqIEBwYXJhbSB5IFRoZSByb3cgdG8gZmV0Y2gsIHdoaWNoIG11c3QgYmUgaW4gWzAsIGJpdG1hcCBoZWlnaHQpCgkgICAgICogQHBhcmFtIHJvdyBBbiBvcHRpb25hbCBwcmVhbGxvY2F0ZWQgYXJyYXkuIElmIG51bGwgb3IgdG9vIHNtYWxsLCBpdCB3aWxsIGJlIGlnbm9yZWQuCgkgICAgICogICAgICAgICAgICBJZiB1c2VkLCB0aGUgQmluYXJpemVyIHdpbGwgY2FsbCBCaXRBcnJheS5jbGVhcigpLiBBbHdheXMgdXNlIHRoZSByZXR1cm5lZCBvYmplY3QuCgkgICAgICogQHJldHVybiBUaGUgYXJyYXkgb2YgYml0cyBmb3IgdGhpcyByb3cgKHRydWUgbWVhbnMgYmxhY2spLgoJICAgICAqIEB0aHJvd3MgTm90Rm91bmRFeGNlcHRpb24gaWYgcm93IGNhbid0IGJlIGJpbmFyaXplZAoJICAgICAqLwoJICAgIEJpbmFyeUJpdG1hcC5wcm90b3R5cGUuZ2V0QmxhY2tSb3cgPSBmdW5jdGlvbiAoeSAvKmludCovLCByb3cpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuYmluYXJpemVyLmdldEJsYWNrUm93KHksIHJvdyk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBDb252ZXJ0cyBhIDJEIGFycmF5IG9mIGx1bWluYW5jZSBkYXRhIHRvIDEgYml0LiBBcyBhYm92ZSwgYXNzdW1lIHRoaXMgbWV0aG9kIGlzIGV4cGVuc2l2ZQoJICAgICAqIGFuZCBkbyBub3QgY2FsbCBpdCByZXBlYXRlZGx5LiBUaGlzIG1ldGhvZCBpcyBpbnRlbmRlZCBmb3IgZGVjb2RpbmcgMkQgYmFyY29kZXMgYW5kIG1heSBvcgoJICAgICAqIG1heSBub3QgYXBwbHkgc2hhcnBlbmluZy4gVGhlcmVmb3JlLCBhIHJvdyBmcm9tIHRoaXMgbWF0cml4IG1heSBub3QgYmUgaWRlbnRpY2FsIHRvIG9uZQoJICAgICAqIGZldGNoZWQgdXNpbmcgZ2V0QmxhY2tSb3coKSwgc28gZG9uJ3QgbWl4IGFuZCBtYXRjaCBiZXR3ZWVuIHRoZW0uCgkgICAgICoKCSAgICAgKiBAcmV0dXJuIFRoZSAyRCBhcnJheSBvZiBiaXRzIGZvciB0aGUgaW1hZ2UgKHRydWUgbWVhbnMgYmxhY2spLgoJICAgICAqIEB0aHJvd3MgTm90Rm91bmRFeGNlcHRpb24gaWYgaW1hZ2UgY2FuJ3QgYmUgYmluYXJpemVkIHRvIG1ha2UgYSBtYXRyaXgKCSAgICAgKi8KCSAgICBCaW5hcnlCaXRtYXAucHJvdG90eXBlLmdldEJsYWNrTWF0cml4ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICAvLyBUaGUgbWF0cml4IGlzIGNyZWF0ZWQgb24gZGVtYW5kIHRoZSBmaXJzdCB0aW1lIGl0IGlzIHJlcXVlc3RlZCwgdGhlbiBjYWNoZWQuIFRoZXJlIGFyZSB0d28KCSAgICAgICAgLy8gcmVhc29ucyBmb3IgdGhpczoKCSAgICAgICAgLy8gMS4gVGhpcyB3b3JrIHdpbGwgbmV2ZXIgYmUgZG9uZSBpZiB0aGUgY2FsbGVyIG9ubHkgaW5zdGFsbHMgMUQgUmVhZGVyIG9iamVjdHMsIG9yIGlmIGEKCSAgICAgICAgLy8gICAgMUQgUmVhZGVyIGZpbmRzIGEgYmFyY29kZSBiZWZvcmUgdGhlIDJEIFJlYWRlcnMgcnVuLgoJICAgICAgICAvLyAyLiBUaGlzIHdvcmsgd2lsbCBvbmx5IGJlIGRvbmUgb25jZSBldmVuIGlmIHRoZSBjYWxsZXIgaW5zdGFsbHMgbXVsdGlwbGUgMkQgUmVhZGVycy4KCSAgICAgICAgaWYgKHRoaXMubWF0cml4ID09PSBudWxsIHx8IHRoaXMubWF0cml4ID09PSB1bmRlZmluZWQpIHsKCSAgICAgICAgICAgIHRoaXMubWF0cml4ID0gdGhpcy5iaW5hcml6ZXIuZ2V0QmxhY2tNYXRyaXgoKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXg7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIFdoZXRoZXIgdGhpcyBiaXRtYXAgY2FuIGJlIGNyb3BwZWQuCgkgICAgICovCgkgICAgQmluYXJ5Qml0bWFwLnByb3RvdHlwZS5pc0Nyb3BTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmJpbmFyaXplci5nZXRMdW1pbmFuY2VTb3VyY2UoKS5pc0Nyb3BTdXBwb3J0ZWQoKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGggY3JvcHBlZCBpbWFnZSBkYXRhLiBJbXBsZW1lbnRhdGlvbnMgbWF5IGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlCgkgICAgICogb3JpZ2luYWwgZGF0YSByYXRoZXIgdGhhbiBhIGNvcHkuIE9ubHkgY2FsbGFibGUgaWYgaXNDcm9wU3VwcG9ydGVkKCkgaXMgdHJ1ZS4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBsZWZ0IFRoZSBsZWZ0IGNvb3JkaW5hdGUsIHdoaWNoIG11c3QgYmUgaW4gWzAsZ2V0V2lkdGgoKSkKCSAgICAgKiBAcGFyYW0gdG9wIFRoZSB0b3AgY29vcmRpbmF0ZSwgd2hpY2ggbXVzdCBiZSBpbiBbMCxnZXRIZWlnaHQoKSkKCSAgICAgKiBAcGFyYW0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSByZWN0YW5nbGUgdG8gY3JvcC4KCSAgICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHJlY3RhbmdsZSB0byBjcm9wLgoJICAgICAqIEByZXR1cm4gQSBjcm9wcGVkIHZlcnNpb24gb2YgdGhpcyBvYmplY3QuCgkgICAgICovCgkgICAgQmluYXJ5Qml0bWFwLnByb3RvdHlwZS5jcm9wID0gZnVuY3Rpb24gKGxlZnQgLyppbnQqLywgdG9wIC8qaW50Ki8sIHdpZHRoIC8qaW50Ki8sIGhlaWdodCAvKmludCovKSB7CgkgICAgICAgIHZhciBuZXdTb3VyY2UgPSB0aGlzLmJpbmFyaXplci5nZXRMdW1pbmFuY2VTb3VyY2UoKS5jcm9wKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCk7CgkgICAgICAgIHJldHVybiBuZXcgQmluYXJ5Qml0bWFwKHRoaXMuYmluYXJpemVyLmNyZWF0ZUJpbmFyaXplcihuZXdTb3VyY2UpKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gV2hldGhlciB0aGlzIGJpdG1hcCBzdXBwb3J0cyBjb3VudGVyLWNsb2Nrd2lzZSByb3RhdGlvbi4KCSAgICAgKi8KCSAgICBCaW5hcnlCaXRtYXAucHJvdG90eXBlLmlzUm90YXRlU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5iaW5hcml6ZXIuZ2V0THVtaW5hbmNlU291cmNlKCkuaXNSb3RhdGVTdXBwb3J0ZWQoKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGggcm90YXRlZCBpbWFnZSBkYXRhIGJ5IDkwIGRlZ3JlZXMgY291bnRlcmNsb2Nrd2lzZS4KCSAgICAgKiBPbmx5IGNhbGxhYmxlIGlmIHtAbGluayAjaXNSb3RhdGVTdXBwb3J0ZWQoKX0gaXMgdHJ1ZS4KCSAgICAgKgoJICAgICAqIEByZXR1cm4gQSByb3RhdGVkIHZlcnNpb24gb2YgdGhpcyBvYmplY3QuCgkgICAgICovCgkgICAgQmluYXJ5Qml0bWFwLnByb3RvdHlwZS5yb3RhdGVDb3VudGVyQ2xvY2t3aXNlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgbmV3U291cmNlID0gdGhpcy5iaW5hcml6ZXIuZ2V0THVtaW5hbmNlU291cmNlKCkucm90YXRlQ291bnRlckNsb2Nrd2lzZSgpOwoJICAgICAgICByZXR1cm4gbmV3IEJpbmFyeUJpdG1hcCh0aGlzLmJpbmFyaXplci5jcmVhdGVCaW5hcml6ZXIobmV3U291cmNlKSk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBSZXR1cm5zIGEgbmV3IG9iamVjdCB3aXRoIHJvdGF0ZWQgaW1hZ2UgZGF0YSBieSA0NSBkZWdyZWVzIGNvdW50ZXJjbG9ja3dpc2UuCgkgICAgICogT25seSBjYWxsYWJsZSBpZiB7QGxpbmsgI2lzUm90YXRlU3VwcG9ydGVkKCl9IGlzIHRydWUuCgkgICAgICoKCSAgICAgKiBAcmV0dXJuIEEgcm90YXRlZCB2ZXJzaW9uIG9mIHRoaXMgb2JqZWN0LgoJICAgICAqLwoJICAgIEJpbmFyeUJpdG1hcC5wcm90b3R5cGUucm90YXRlQ291bnRlckNsb2Nrd2lzZTQ1ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgbmV3U291cmNlID0gdGhpcy5iaW5hcml6ZXIuZ2V0THVtaW5hbmNlU291cmNlKCkucm90YXRlQ291bnRlckNsb2Nrd2lzZTQ1KCk7CgkgICAgICAgIHJldHVybiBuZXcgQmluYXJ5Qml0bWFwKHRoaXMuYmluYXJpemVyLmNyZWF0ZUJpbmFyaXplcihuZXdTb3VyY2UpKTsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBCaW5hcnlCaXRtYXAucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmxhY2tNYXRyaXgoKS50b1N0cmluZygpOwoJICAgICAgICB9CgkgICAgICAgIGNhdGNoIChlIC8qOiBOb3RGb3VuZEV4Y2VwdGlvbiovKSB7CgkgICAgICAgICAgICByZXR1cm4gJyc7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIHJldHVybiBCaW5hcnlCaXRtYXA7Cgl9KCkpOwoJdmFyIF9kZWZhdWx0JDMgPSBCaW5hcnlCaXRtYXAkMS5kZWZhdWx0ID0gQmluYXJ5Qml0bWFwOwoKCXZhciBIeWJyaWRCaW5hcml6ZXIkMSA9IHt9OwoKCXZhciBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIkMSA9IHt9OwoKCXZhciBCaW5hcml6ZXIkMSA9IHt9OwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwOSBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluYXJpemVyJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qKgoJICogVGhpcyBjbGFzcyBoaWVyYXJjaHkgcHJvdmlkZXMgYSBzZXQgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGx1bWluYW5jZSBkYXRhIHRvIDEgYml0IGRhdGEuCgkgKiBJdCBhbGxvd3MgdGhlIGFsZ29yaXRobSB0byB2YXJ5IHBvbHltb3JwaGljYWxseSwgZm9yIGV4YW1wbGUgYWxsb3dpbmcgYSB2ZXJ5IGV4cGVuc2l2ZQoJICogdGhyZXNob2xkaW5nIHRlY2huaXF1ZSBmb3Igc2VydmVycyBhbmQgYSBmYXN0IG9uZSBmb3IgbW9iaWxlLiBJdCBhbHNvIHBlcm1pdHMgdGhlIGltcGxlbWVudGF0aW9uCgkgKiB0byB2YXJ5LCBlLmcuIGEgSk5JIHZlcnNpb24gZm9yIEFuZHJvaWQgYW5kIGEgSmF2YSBmYWxsYmFjayB2ZXJzaW9uIGZvciBvdGhlciBwbGF0Zm9ybXMuCgkgKgoJICogQGF1dGhvciBkc3dpdGtpbkBnb29nbGUuY29tIChEYW5pZWwgU3dpdGtpbikKCSAqLwoJdmFyIEJpbmFyaXplciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBCaW5hcml6ZXIoc291cmNlKSB7CgkgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlOwoJICAgIH0KCSAgICBCaW5hcml6ZXIucHJvdG90eXBlLmdldEx1bWluYW5jZVNvdXJjZSA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlOwoJICAgIH07CgkgICAgQmluYXJpemVyLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmdldFdpZHRoKCk7CgkgICAgfTsKCSAgICBCaW5hcml6ZXIucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmdldEhlaWdodCgpOwoJICAgIH07CgkgICAgcmV0dXJuIEJpbmFyaXplcjsKCX0oKSk7CglCaW5hcml6ZXIkMS5kZWZhdWx0ID0gQmluYXJpemVyOwoKCXZhciBCaXRBcnJheSQxID0ge307CgoJdmFyIEFycmF5cyQxID0ge307CgoJdmFyIFN5c3RlbSQxID0ge307CgoJT2JqZWN0LmRlZmluZVByb3BlcnR5KFN5c3RlbSQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgU3lzdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIGZ1bmN0aW9uIFN5c3RlbSgpIHsKCSAgICB9CgkgICAgLy8gcHVibGljIHN0YXRpYyB2b2lkIGFycmF5Y29weShPYmplY3Qgc3JjLCBpbnQgc3JjUG9zLCBPYmplY3QgZGVzdCwgaW50IGRlc3RQb3MsIGludCBsZW5ndGgpCgkgICAgLyoqCgkgICAgICogTWFrZXMgYSBjb3B5IG9mIGEgYXJyYXkuCgkgICAgICovCgkgICAgU3lzdGVtLmFycmF5Y29weSA9IGZ1bmN0aW9uIChzcmMsIHNyY1BvcywgZGVzdCwgZGVzdFBvcywgbGVuZ3RoKSB7CgkgICAgICAgIC8vIFRPRE86IGJldHRlciB1c2Ugc3BsaXQgb3Igc2V0PwoJICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHsKCSAgICAgICAgICAgIGRlc3RbZGVzdFBvcysrXSA9IHNyY1tzcmNQb3MrK107CgkgICAgICAgIH0KCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdGltZSBpbiBtaWxsaXNlY29uZHMuCgkgICAgICovCgkgICAgU3lzdGVtLmN1cnJlbnRUaW1lTWlsbGlzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTsKCSAgICB9OwoJICAgIHJldHVybiBTeXN0ZW07Cgl9KCkpOwoJU3lzdGVtJDEuZGVmYXVsdCA9IFN5c3RlbTsKCgl2YXIgQXJyYXlJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uJDEgPSB7fTsKCgl2YXIgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiQxID0ge307CgoJdmFyIF9fZXh0ZW5kcyRoID0gKGNvbW1vbmpzR2xvYmFsICYmIGNvbW1vbmpzR2xvYmFsLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHsKCSAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwKCSAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHwKCSAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9OwoJICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICB9OwoJICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH0KCSAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpOwoJICAgIH07Cgl9KSgpOwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24kMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJdmFyIEV4Y2VwdGlvbl8xJDggPSBFeGNlcHRpb24kMTsKCS8qKgoJICogQ3VzdG9tIEVycm9yIGNsYXNzIG9mIHR5cGUgRXhjZXB0aW9uLgoJICovCgl2YXIgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHsKCSAgICBfX2V4dGVuZHMkaChJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uLCBfc3VwZXIpOwoJICAgIGZ1bmN0aW9uIEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24oKSB7CgkgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpczsKCSAgICB9CgkgICAgSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbi5raW5kID0gJ0luZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24nOwoJICAgIHJldHVybiBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uOwoJfShFeGNlcHRpb25fMSQ4LmRlZmF1bHQpKTsKCUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24kMS5kZWZhdWx0ID0gSW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbjsKCgl2YXIgX19leHRlbmRzJGcgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkgewoJICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAoJICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fAoJICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07CgkgICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgIH07CgkgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfQoJICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7CgkgICAgfTsKCX0pKCk7CglPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXlJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCXZhciBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uXzEgPSBJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uJDE7CgkvKioKCSAqIEN1c3RvbSBFcnJvciBjbGFzcyBvZiB0eXBlIEV4Y2VwdGlvbi4KCSAqLwoJdmFyIEFycmF5SW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHsKCSAgICBfX2V4dGVuZHMkZyhBcnJheUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24sIF9zdXBlcik7CgkgICAgZnVuY3Rpb24gQXJyYXlJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uKGluZGV4LCBtZXNzYWdlKSB7CgkgICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gdW5kZWZpbmVkOyB9CgkgICAgICAgIGlmIChtZXNzYWdlID09PSB2b2lkIDApIHsgbWVzc2FnZSA9IHVuZGVmaW5lZDsgfQoJICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzOwoJICAgICAgICBfdGhpcy5pbmRleCA9IGluZGV4OwoJICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTsKCSAgICAgICAgcmV0dXJuIF90aGlzOwoJICAgIH0KCSAgICBBcnJheUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24ua2luZCA9ICdBcnJheUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24nOwoJICAgIHJldHVybiBBcnJheUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb247Cgl9KEluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb25fMS5kZWZhdWx0KSk7CglBcnJheUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24kMS5kZWZhdWx0ID0gQXJyYXlJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uOwoKCXZhciBfX3ZhbHVlcyQ3ID0gKGNvbW1vbmpzR2xvYmFsICYmIGNvbW1vbmpzR2xvYmFsLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7CgkgICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSAiZnVuY3Rpb24iICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7CgkgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7CgkgICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSAibnVtYmVyIikgcmV0dXJuIHsKCSAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkgewoJICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDsKCSAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gIk9iamVjdCBpcyBub3QgaXRlcmFibGUuIiA6ICJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuIik7Cgl9OwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5cyQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgU3lzdGVtXzEkNSA9IFN5c3RlbSQxOwoJdmFyIElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDkgPSBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24kMTsKCXZhciBBcnJheUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb25fMSA9IEFycmF5SW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbiQxOwoJdmFyIEFycmF5cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBBcnJheXMoKSB7CgkgICAgfQoJICAgIC8qKgoJICAgICAqIEFzc2lnbnMgdGhlIHNwZWNpZmllZCBpbnQgdmFsdWUgdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBzcGVjaWZpZWQgYXJyYXkKCSAgICAgKiBvZiBpbnRzLgoJICAgICAqCgkgICAgICogQHBhcmFtIGEgdGhlIGFycmF5IHRvIGJlIGZpbGxlZAoJICAgICAqIEBwYXJhbSB2YWwgdGhlIHZhbHVlIHRvIGJlIHN0b3JlZCBpbiBhbGwgZWxlbWVudHMgb2YgdGhlIGFycmF5CgkgICAgICovCgkgICAgQXJyYXlzLmZpbGwgPSBmdW5jdGlvbiAoYSwgdmFsKSB7CgkgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKQoJICAgICAgICAgICAgYVtpXSA9IHZhbDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEFzc2lnbnMgdGhlIHNwZWNpZmllZCBpbnQgdmFsdWUgdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBzcGVjaWZpZWQKCSAgICAgKiByYW5nZSBvZiB0aGUgc3BlY2lmaWVkIGFycmF5IG9mIGludHMuICBUaGUgcmFuZ2UgdG8gYmUgZmlsbGVkCgkgICAgICogZXh0ZW5kcyBmcm9tIGluZGV4IHtAY29kZSBmcm9tSW5kZXh9LCBpbmNsdXNpdmUsIHRvIGluZGV4CgkgICAgICoge0Bjb2RlIHRvSW5kZXh9LCBleGNsdXNpdmUuICAoSWYge0Bjb2RlIGZyb21JbmRleD09dG9JbmRleH0sIHRoZQoJICAgICAqIHJhbmdlIHRvIGJlIGZpbGxlZCBpcyBlbXB0eS4pCgkgICAgICoKCSAgICAgKiBAcGFyYW0gYSB0aGUgYXJyYXkgdG8gYmUgZmlsbGVkCgkgICAgICogQHBhcmFtIGZyb21JbmRleCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGVsZW1lbnQgKGluY2x1c2l2ZSkgdG8gYmUKCSAgICAgKiAgICAgICAgZmlsbGVkIHdpdGggdGhlIHNwZWNpZmllZCB2YWx1ZQoJICAgICAqIEBwYXJhbSB0b0luZGV4IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBlbGVtZW50IChleGNsdXNpdmUpIHRvIGJlCgkgICAgICogICAgICAgIGZpbGxlZCB3aXRoIHRoZSBzcGVjaWZpZWQgdmFsdWUKCSAgICAgKiBAcGFyYW0gdmFsIHRoZSB2YWx1ZSB0byBiZSBzdG9yZWQgaW4gYWxsIGVsZW1lbnRzIG9mIHRoZSBhcnJheQoJICAgICAqIEB0aHJvd3MgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uIGlmIHtAY29kZSBmcm9tSW5kZXggPiB0b0luZGV4fQoJICAgICAqIEB0aHJvd3MgQXJyYXlJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uIGlmIHtAY29kZSBmcm9tSW5kZXggPCAwfSBvcgoJICAgICAqICAgICAgICAge0Bjb2RlIHRvSW5kZXggPiBhLmxlbmd0aH0KCSAgICAgKi8KCSAgICBBcnJheXMuZmlsbFdpdGhpbiA9IGZ1bmN0aW9uIChhLCBmcm9tSW5kZXgsIHRvSW5kZXgsIHZhbCkgewoJICAgICAgICBBcnJheXMucmFuZ2VDaGVjayhhLmxlbmd0aCwgZnJvbUluZGV4LCB0b0luZGV4KTsKCSAgICAgICAgZm9yICh2YXIgaSA9IGZyb21JbmRleDsgaSA8IHRvSW5kZXg7IGkrKykKCSAgICAgICAgICAgIGFbaV0gPSB2YWw7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBDaGVja3MgdGhhdCB7QGNvZGUgZnJvbUluZGV4fSBhbmQge0Bjb2RlIHRvSW5kZXh9IGFyZSBpbgoJICAgICAqIHRoZSByYW5nZSBhbmQgdGhyb3dzIGFuIGV4Y2VwdGlvbiBpZiB0aGV5IGFyZW4ndC4KCSAgICAgKi8KCSAgICBBcnJheXMucmFuZ2VDaGVjayA9IGZ1bmN0aW9uIChhcnJheUxlbmd0aCwgZnJvbUluZGV4LCB0b0luZGV4KSB7CgkgICAgICAgIGlmIChmcm9tSW5kZXggPiB0b0luZGV4KSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkOS5kZWZhdWx0KCdmcm9tSW5kZXgoJyArIGZyb21JbmRleCArICcpID4gdG9JbmRleCgnICsgdG9JbmRleCArICcpJyk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGZyb21JbmRleCA8IDApIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBBcnJheUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb25fMS5kZWZhdWx0KGZyb21JbmRleCk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHRvSW5kZXggPiBhcnJheUxlbmd0aCkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IEFycmF5SW5kZXhPdXRPZkJvdW5kc0V4Y2VwdGlvbl8xLmRlZmF1bHQodG9JbmRleCk7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIEFycmF5cy5hc0xpc3QgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHZhciBhcmdzID0gW107CgkgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7CgkgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGFyZ3M7CgkgICAgfTsKCSAgICBBcnJheXMuY3JlYXRlID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMsIHZhbHVlKSB7CgkgICAgICAgIHZhciBhcnIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzIH0pOwoJICAgICAgICByZXR1cm4gYXJyLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogY29scyB9KS5maWxsKHZhbHVlKTsgfSk7CgkgICAgfTsKCSAgICBBcnJheXMuY3JlYXRlSW50MzJBcnJheSA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzLCB2YWx1ZSkgewoJICAgICAgICB2YXIgYXJyID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93cyB9KTsKCSAgICAgICAgcmV0dXJuIGFyci5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIEludDMyQXJyYXkuZnJvbSh7IGxlbmd0aDogY29scyB9KS5maWxsKHZhbHVlKTsgfSk7CgkgICAgfTsKCSAgICBBcnJheXMuZXF1YWxzID0gZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHsKCSAgICAgICAgaWYgKCFmaXJzdCkgewoJICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9CgkgICAgICAgIGlmICghc2Vjb25kKSB7CgkgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKCFmaXJzdC5sZW5ndGgpIHsKCSAgICAgICAgICAgIHJldHVybiBmYWxzZTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoIXNlY29uZC5sZW5ndGgpIHsKCSAgICAgICAgICAgIHJldHVybiBmYWxzZTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoZmlyc3QubGVuZ3RoICE9PSBzZWNvbmQubGVuZ3RoKSB7CgkgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgIH0KCSAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aF8xID0gZmlyc3QubGVuZ3RoOyBpIDwgbGVuZ3RoXzE7IGkrKykgewoJICAgICAgICAgICAgaWYgKGZpcnN0W2ldICE9PSBzZWNvbmRbaV0pIHsKCSAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHRydWU7CgkgICAgfTsKCSAgICBBcnJheXMuaGFzaENvZGUgPSBmdW5jdGlvbiAoYSkgewoJICAgICAgICB2YXIgZV8xLCBfYTsKCSAgICAgICAgaWYgKGEgPT09IG51bGwpIHsKCSAgICAgICAgICAgIHJldHVybiAwOwoJICAgICAgICB9CgkgICAgICAgIHZhciByZXN1bHQgPSAxOwoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgZm9yICh2YXIgYV8xID0gX192YWx1ZXMkNyhhKSwgYV8xXzEgPSBhXzEubmV4dCgpOyAhYV8xXzEuZG9uZTsgYV8xXzEgPSBhXzEubmV4dCgpKSB7CgkgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBhXzFfMS52YWx1ZTsKCSAgICAgICAgICAgICAgICByZXN1bHQgPSAzMSAqIHJlc3VsdCArIGVsZW1lbnQ7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH0KCSAgICAgICAgZmluYWxseSB7CgkgICAgICAgICAgICB0cnkgewoJICAgICAgICAgICAgICAgIGlmIChhXzFfMSAmJiAhYV8xXzEuZG9uZSAmJiAoX2EgPSBhXzEucmV0dXJuKSkgX2EuY2FsbChhXzEpOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfQoJICAgICAgICB9CgkgICAgICAgIHJldHVybiByZXN1bHQ7CgkgICAgfTsKCSAgICBBcnJheXMuZmlsbFVpbnQ4QXJyYXkgPSBmdW5jdGlvbiAoYSwgdmFsdWUpIHsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IGEubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgICAgIGFbaV0gPSB2YWx1ZTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgQXJyYXlzLmNvcHlPZiA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbmV3TGVuZ3RoKSB7CgkgICAgICAgIHJldHVybiBvcmlnaW5hbC5zbGljZSgwLCBuZXdMZW5ndGgpOwoJICAgIH07CgkgICAgQXJyYXlzLmNvcHlPZlVpbnQ4QXJyYXkgPSBmdW5jdGlvbiAob3JpZ2luYWwsIG5ld0xlbmd0aCkgewoJICAgICAgICBpZiAob3JpZ2luYWwubGVuZ3RoIDw9IG5ld0xlbmd0aCkgewoJICAgICAgICAgICAgdmFyIG5ld0FycmF5ID0gbmV3IFVpbnQ4QXJyYXkobmV3TGVuZ3RoKTsKCSAgICAgICAgICAgIG5ld0FycmF5LnNldChvcmlnaW5hbCk7CgkgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIG9yaWdpbmFsLnNsaWNlKDAsIG5ld0xlbmd0aCk7CgkgICAgfTsKCSAgICBBcnJheXMuY29weU9mUmFuZ2UgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGZyb20sIHRvKSB7CgkgICAgICAgIHZhciBuZXdMZW5ndGggPSB0byAtIGZyb207CgkgICAgICAgIHZhciBjb3B5ID0gbmV3IEludDMyQXJyYXkobmV3TGVuZ3RoKTsKCSAgICAgICAgU3lzdGVtXzEkNS5kZWZhdWx0LmFycmF5Y29weShvcmlnaW5hbCwgZnJvbSwgY29weSwgMCwgbmV3TGVuZ3RoKTsKCSAgICAgICAgcmV0dXJuIGNvcHk7CgkgICAgfTsKCSAgICAvKgoJICAgICogUmV0dXJucyB0aGUgaW5kZXggb2Ygb2YgdGhlIGVsZW1lbnQgaW4gYSBzb3J0ZWQgYXJyYXkgb3IgKC1uLTEpIHdoZXJlIG4gaXMgdGhlIGluc2VydGlvbiBwb2ludAoJICAgICogZm9yIHRoZSBuZXcgZWxlbWVudC4KCSAgICAqIFBhcmFtZXRlcnM6CgkgICAgKiAgICAgYXIgLSBBIHNvcnRlZCBhcnJheQoJICAgICogICAgIGVsIC0gQW4gZWxlbWVudCB0byBzZWFyY2ggZm9yCgkgICAgKiAgICAgY29tcGFyYXRvciAtIEEgY29tcGFyYXRvciBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIHRha2VzIHR3byBhcmd1bWVudHM6IChhLCBiKSBhbmQgcmV0dXJuczoKCSAgICAqICAgICAgICBhIG5lZ2F0aXZlIG51bWJlciAgaWYgYSBpcyBsZXNzIHRoYW4gYjsKCSAgICAqICAgICAgICAwIGlmIGEgaXMgZXF1YWwgdG8gYjsKCSAgICAqICAgICAgICBhIHBvc2l0aXZlIG51bWJlciBvZiBhIGlzIGdyZWF0ZXIgdGhhbiBiLgoJICAgICogVGhlIGFycmF5IG1heSBjb250YWluIGR1cGxpY2F0ZSBlbGVtZW50cy4gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgZXF1YWwgZWxlbWVudHMgaW4gdGhlIGFycmF5LAoJICAgICogdGhlIHJldHVybmVkIHZhbHVlIGNhbiBiZSB0aGUgaW5kZXggb2YgYW55IG9uZSBvZiB0aGUgZXF1YWwgZWxlbWVudHMuCgkgICAgKgoJICAgICogaHR0cDovL2pzZmlkZGxlLm5ldC9hcnl6aG92L3BrZnN0NTUwLwoJICAgICovCgkgICAgQXJyYXlzLmJpbmFyeVNlYXJjaCA9IGZ1bmN0aW9uIChhciwgZWwsIGNvbXBhcmF0b3IpIHsKCSAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY29tcGFyYXRvcikgewoJICAgICAgICAgICAgY29tcGFyYXRvciA9IEFycmF5cy5udW1iZXJDb21wYXJhdG9yOwoJICAgICAgICB9CgkgICAgICAgIHZhciBtID0gMDsKCSAgICAgICAgdmFyIG4gPSBhci5sZW5ndGggLSAxOwoJICAgICAgICB3aGlsZSAobSA8PSBuKSB7CgkgICAgICAgICAgICB2YXIgayA9IChuICsgbSkgPj4gMTsKCSAgICAgICAgICAgIHZhciBjbXAgPSBjb21wYXJhdG9yKGVsLCBhcltrXSk7CgkgICAgICAgICAgICBpZiAoY21wID4gMCkgewoJICAgICAgICAgICAgICAgIG0gPSBrICsgMTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGVsc2UgaWYgKGNtcCA8IDApIHsKCSAgICAgICAgICAgICAgICBuID0gayAtIDE7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICByZXR1cm4gazsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gLW0gLSAxOwoJICAgIH07CgkgICAgQXJyYXlzLm51bWJlckNvbXBhcmF0b3IgPSBmdW5jdGlvbiAoYSwgYikgewoJICAgICAgICByZXR1cm4gYSAtIGI7CgkgICAgfTsKCSAgICByZXR1cm4gQXJyYXlzOwoJfSgpKTsKCUFycmF5cyQxLmRlZmF1bHQgPSBBcnJheXM7CgoJdmFyIEludGVnZXIkMSA9IHt9OwoKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRlZ2VyJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qKgoJICogUG9ueWZpbGwgZm9yIEphdmEncyBJbnRlZ2VyIGNsYXNzLgoJICovCgl2YXIgSW50ZWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBJbnRlZ2VyKCkgewoJICAgIH0KCSAgICBJbnRlZ2VyLm51bWJlck9mVHJhaWxpbmdaZXJvcyA9IGZ1bmN0aW9uIChpKSB7CgkgICAgICAgIHZhciB5OwoJICAgICAgICBpZiAoaSA9PT0gMCkKCSAgICAgICAgICAgIHJldHVybiAzMjsKCSAgICAgICAgdmFyIG4gPSAzMTsKCSAgICAgICAgeSA9IGkgPDwgMTY7CgkgICAgICAgIGlmICh5ICE9PSAwKSB7CgkgICAgICAgICAgICBuIC09IDE2OwoJICAgICAgICAgICAgaSA9IHk7CgkgICAgICAgIH0KCSAgICAgICAgeSA9IGkgPDwgODsKCSAgICAgICAgaWYgKHkgIT09IDApIHsKCSAgICAgICAgICAgIG4gLT0gODsKCSAgICAgICAgICAgIGkgPSB5OwoJICAgICAgICB9CgkgICAgICAgIHkgPSBpIDw8IDQ7CgkgICAgICAgIGlmICh5ICE9PSAwKSB7CgkgICAgICAgICAgICBuIC09IDQ7CgkgICAgICAgICAgICBpID0geTsKCSAgICAgICAgfQoJICAgICAgICB5ID0gaSA8PCAyOwoJICAgICAgICBpZiAoeSAhPT0gMCkgewoJICAgICAgICAgICAgbiAtPSAyOwoJICAgICAgICAgICAgaSA9IHk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIG4gLSAoKGkgPDwgMSkgPj4+IDMxKTsKCSAgICB9OwoJICAgIEludGVnZXIubnVtYmVyT2ZMZWFkaW5nWmVyb3MgPSBmdW5jdGlvbiAoaSkgewoJICAgICAgICAvLyBIRCwgRmlndXJlIDUtNgoJICAgICAgICBpZiAoaSA9PT0gMCkgewoJICAgICAgICAgICAgcmV0dXJuIDMyOwoJICAgICAgICB9CgkgICAgICAgIHZhciBuID0gMTsKCSAgICAgICAgaWYgKGkgPj4+IDE2ID09PSAwKSB7CgkgICAgICAgICAgICBuICs9IDE2OwoJICAgICAgICAgICAgaSA8PD0gMTY7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGkgPj4+IDI0ID09PSAwKSB7CgkgICAgICAgICAgICBuICs9IDg7CgkgICAgICAgICAgICBpIDw8PSA4OwoJICAgICAgICB9CgkgICAgICAgIGlmIChpID4+PiAyOCA9PT0gMCkgewoJICAgICAgICAgICAgbiArPSA0OwoJICAgICAgICAgICAgaSA8PD0gNDsKCSAgICAgICAgfQoJICAgICAgICBpZiAoaSA+Pj4gMzAgPT09IDApIHsKCSAgICAgICAgICAgIG4gKz0gMjsKCSAgICAgICAgICAgIGkgPDw9IDI7CgkgICAgICAgIH0KCSAgICAgICAgbiAtPSBpID4+PiAzMTsKCSAgICAgICAgcmV0dXJuIG47CgkgICAgfTsKCSAgICBJbnRlZ2VyLnRvSGV4U3RyaW5nID0gZnVuY3Rpb24gKGkpIHsKCSAgICAgICAgcmV0dXJuIGkudG9TdHJpbmcoMTYpOwoJICAgIH07CgkgICAgSW50ZWdlci50b0JpbmFyeVN0cmluZyA9IGZ1bmN0aW9uIChpbnROdW1iZXIpIHsKCSAgICAgICAgcmV0dXJuIFN0cmluZyhwYXJzZUludChTdHJpbmcoaW50TnVtYmVyKSwgMikpOwoJICAgIH07CgkgICAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIG9uZS1iaXRzIGluIHRoZSB0d28ncyBjb21wbGVtZW50IGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3BlY2lmaWVkIGludCB2YWx1ZS4gVGhpcyBmdW5jdGlvbiBpcyBzb21ldGltZXMgcmVmZXJyZWQgdG8gYXMgdGhlIHBvcHVsYXRpb24gY291bnQuCgkgICAgLy8gUmV0dXJuczoKCSAgICAvLyB0aGUgbnVtYmVyIG9mIG9uZS1iaXRzIGluIHRoZSB0d28ncyBjb21wbGVtZW50IGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3BlY2lmaWVkIGludCB2YWx1ZS4KCSAgICBJbnRlZ2VyLmJpdENvdW50ID0gZnVuY3Rpb24gKGkpIHsKCSAgICAgICAgLy8gSEQsIEZpZ3VyZSA1LTIKCSAgICAgICAgaSA9IGkgLSAoKGkgPj4+IDEpICYgMHg1NTU1NTU1NSk7CgkgICAgICAgIGkgPSAoaSAmIDB4MzMzMzMzMzMpICsgKChpID4+PiAyKSAmIDB4MzMzMzMzMzMpOwoJICAgICAgICBpID0gKGkgKyAoaSA+Pj4gNCkpICYgMHgwZjBmMGYwZjsKCSAgICAgICAgaSA9IGkgKyAoaSA+Pj4gOCk7CgkgICAgICAgIGkgPSBpICsgKGkgPj4+IDE2KTsKCSAgICAgICAgcmV0dXJuIGkgJiAweDNmOwoJICAgIH07CgkgICAgSW50ZWdlci50cnVuY0RpdmlzaW9uID0gZnVuY3Rpb24gKGRpdmlkZW5kLCBkaXZpc29yKSB7CgkgICAgICAgIHJldHVybiBNYXRoLnRydW5jKGRpdmlkZW5kIC8gZGl2aXNvcik7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBDb252ZXJ0cyBBIHN0cmluZyB0byBhbiBpbnRlZ2VyLgoJICAgICAqIEBwYXJhbSBzIEEgc3RyaW5nIHRvIGNvbnZlcnQgaW50byBhIG51bWJlci4KCSAgICAgKiBAcGFyYW0gcmFkaXggQSB2YWx1ZSBiZXR3ZWVuIDIgYW5kIDM2IHRoYXQgc3BlY2lmaWVzIHRoZSBiYXNlIG9mIHRoZSBudW1iZXIgaW4gbnVtU3RyaW5nLiBJZiB0aGlzIGFyZ3VtZW50IGlzIG5vdCBzdXBwbGllZCwgc3RyaW5ncyB3aXRoIGEgcHJlZml4IG9mICcweCcgYXJlIGNvbnNpZGVyZWQgaGV4YWRlY2ltYWwuIEFsbCBvdGhlciBzdHJpbmdzIGFyZSBjb25zaWRlcmVkIGRlY2ltYWwuCgkgICAgICovCgkgICAgSW50ZWdlci5wYXJzZUludCA9IGZ1bmN0aW9uIChudW0sIHJhZGl4KSB7CgkgICAgICAgIGlmIChyYWRpeCA9PT0gdm9pZCAwKSB7IHJhZGl4ID0gdW5kZWZpbmVkOyB9CgkgICAgICAgIHJldHVybiBwYXJzZUludChudW0sIHJhZGl4KTsKCSAgICB9OwoJICAgIEludGVnZXIuTUlOX1ZBTFVFXzMyX0JJVFMgPSAtMjE0NzQ4MzY0ODsKCSAgICBJbnRlZ2VyLk1BWF9WQUxVRSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSOwoJICAgIHJldHVybiBJbnRlZ2VyOwoJfSgpKTsKCUludGVnZXIkMS5kZWZhdWx0ID0gSW50ZWdlcjsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpdEFycmF5JDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcuY29tbW9uIHsqLwoJLyppbXBvcnQgamF2YS51dGlsLkFycmF5czsqLwoJdmFyIElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDggPSBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24kMTsKCXZhciBBcnJheXNfMSQxID0gQXJyYXlzJDE7Cgl2YXIgSW50ZWdlcl8xJDIgPSBJbnRlZ2VyJDE7Cgl2YXIgU3lzdGVtXzEkNCA9IFN5c3RlbSQxOwoJLyoqCgkgKiA8cD5BIHNpbXBsZSwgZmFzdCBhcnJheSBvZiBiaXRzLCByZXByZXNlbnRlZCBjb21wYWN0bHkgYnkgYW4gYXJyYXkgb2YgaW50cyBpbnRlcm5hbGx5LjwvcD4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICovCgl2YXIgQml0QXJyYXkgLyppbXBsZW1lbnRzIENsb25lYWJsZSovID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIC8vIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHsKCSAgICAvLyAgIHRoaXMuc2l6ZSA9IDAKCSAgICAvLyAgIHRoaXMuYml0cyA9IG5ldyBJbnQzMkFycmF5KDEpCgkgICAgLy8gfQoJICAgIC8vIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplPzogbnVtYmVyIC8qaW50Ki8pIHsKCSAgICAvLyAgIGlmICh1bmRlZmluZWQgPT09IHNpemUpIHsKCSAgICAvLyAgICAgdGhpcy5zaXplID0gMAoJICAgIC8vICAgfSBlbHNlIHsKCSAgICAvLyAgICAgdGhpcy5zaXplID0gc2l6ZQoJICAgIC8vICAgfQoJICAgIC8vICAgdGhpcy5iaXRzID0gdGhpcy5tYWtlQXJyYXkoc2l6ZSkKCSAgICAvLyB9CgkgICAgLy8gRm9yIHRlc3Rpbmcgb25seQoJICAgIGZ1bmN0aW9uIEJpdEFycmF5KHNpemUgLyppbnQqLywgYml0cykgewoJICAgICAgICBpZiAodW5kZWZpbmVkID09PSBzaXplKSB7CgkgICAgICAgICAgICB0aGlzLnNpemUgPSAwOwoJICAgICAgICAgICAgdGhpcy5iaXRzID0gbmV3IEludDMyQXJyYXkoMSk7CgkgICAgICAgIH0KCSAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplOwoJICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gYml0cyB8fCBudWxsID09PSBiaXRzKSB7CgkgICAgICAgICAgICAgICAgdGhpcy5iaXRzID0gQml0QXJyYXkubWFrZUFycmF5KHNpemUpOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgdGhpcy5iaXRzID0gYml0czsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgIH0KCSAgICBCaXRBcnJheS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTsKCSAgICB9OwoJICAgIEJpdEFycmF5LnByb3RvdHlwZS5nZXRTaXplSW5CeXRlcyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHRoaXMuc2l6ZSArIDcpIC8gOCk7CgkgICAgfTsKCSAgICBCaXRBcnJheS5wcm90b3R5cGUuZW5zdXJlQ2FwYWNpdHkgPSBmdW5jdGlvbiAoc2l6ZSAvKmludCovKSB7CgkgICAgICAgIGlmIChzaXplID4gdGhpcy5iaXRzLmxlbmd0aCAqIDMyKSB7CgkgICAgICAgICAgICB2YXIgbmV3Qml0cyA9IEJpdEFycmF5Lm1ha2VBcnJheShzaXplKTsKCSAgICAgICAgICAgIFN5c3RlbV8xJDQuZGVmYXVsdC5hcnJheWNvcHkodGhpcy5iaXRzLCAwLCBuZXdCaXRzLCAwLCB0aGlzLmJpdHMubGVuZ3RoKTsKCSAgICAgICAgICAgIHRoaXMuYml0cyA9IG5ld0JpdHM7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEBwYXJhbSBpIGJpdCB0byBnZXQKCSAgICAgKiBAcmV0dXJuIHRydWUgaWZmIGJpdCBpIGlzIHNldAoJICAgICAqLwoJICAgIEJpdEFycmF5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaSAvKmludCovKSB7CgkgICAgICAgIHJldHVybiAodGhpcy5iaXRzW01hdGguZmxvb3IoaSAvIDMyKV0gJiAoMSA8PCAoaSAmIDB4MUYpKSkgIT09IDA7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBTZXRzIGJpdCBpLgoJICAgICAqCgkgICAgICogQHBhcmFtIGkgYml0IHRvIHNldAoJICAgICAqLwoJICAgIEJpdEFycmF5LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoaSAvKmludCovKSB7CgkgICAgICAgIHRoaXMuYml0c1tNYXRoLmZsb29yKGkgLyAzMildIHw9IDEgPDwgKGkgJiAweDFGKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEZsaXBzIGJpdCBpLgoJICAgICAqCgkgICAgICogQHBhcmFtIGkgYml0IHRvIHNldAoJICAgICAqLwoJICAgIEJpdEFycmF5LnByb3RvdHlwZS5mbGlwID0gZnVuY3Rpb24gKGkgLyppbnQqLykgewoJICAgICAgICB0aGlzLmJpdHNbTWF0aC5mbG9vcihpIC8gMzIpXSBePSAxIDw8IChpICYgMHgxRik7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcGFyYW0gZnJvbSBmaXJzdCBiaXQgdG8gY2hlY2sKCSAgICAgKiBAcmV0dXJuIGluZGV4IG9mIGZpcnN0IGJpdCB0aGF0IGlzIHNldCwgc3RhcnRpbmcgZnJvbSB0aGUgZ2l2ZW4gaW5kZXgsIG9yIHNpemUgaWYgbm9uZSBhcmUgc2V0CgkgICAgICogIGF0IG9yIGJleW9uZCB0aGlzIGdpdmVuIGluZGV4CgkgICAgICogQHNlZSAjZ2V0TmV4dFVuc2V0KGludCkKCSAgICAgKi8KCSAgICBCaXRBcnJheS5wcm90b3R5cGUuZ2V0TmV4dFNldCA9IGZ1bmN0aW9uIChmcm9tIC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIHNpemUgPSB0aGlzLnNpemU7CgkgICAgICAgIGlmIChmcm9tID49IHNpemUpIHsKCSAgICAgICAgICAgIHJldHVybiBzaXplOwoJICAgICAgICB9CgkgICAgICAgIHZhciBiaXRzID0gdGhpcy5iaXRzOwoJICAgICAgICB2YXIgYml0c09mZnNldCA9IE1hdGguZmxvb3IoZnJvbSAvIDMyKTsKCSAgICAgICAgdmFyIGN1cnJlbnRCaXRzID0gYml0c1tiaXRzT2Zmc2V0XTsKCSAgICAgICAgLy8gbWFzayBvZmYgbGVzc2VyIGJpdHMgZmlyc3QKCSAgICAgICAgY3VycmVudEJpdHMgJj0gfigoMSA8PCAoZnJvbSAmIDB4MUYpKSAtIDEpOwoJICAgICAgICB2YXIgbGVuZ3RoID0gYml0cy5sZW5ndGg7CgkgICAgICAgIHdoaWxlIChjdXJyZW50Qml0cyA9PT0gMCkgewoJICAgICAgICAgICAgaWYgKCsrYml0c09mZnNldCA9PT0gbGVuZ3RoKSB7CgkgICAgICAgICAgICAgICAgcmV0dXJuIHNpemU7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBjdXJyZW50Qml0cyA9IGJpdHNbYml0c09mZnNldF07CgkgICAgICAgIH0KCSAgICAgICAgdmFyIHJlc3VsdCA9IChiaXRzT2Zmc2V0ICogMzIpICsgSW50ZWdlcl8xJDIuZGVmYXVsdC5udW1iZXJPZlRyYWlsaW5nWmVyb3MoY3VycmVudEJpdHMpOwoJICAgICAgICByZXR1cm4gcmVzdWx0ID4gc2l6ZSA/IHNpemUgOiByZXN1bHQ7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcGFyYW0gZnJvbSBpbmRleCB0byBzdGFydCBsb29raW5nIGZvciB1bnNldCBiaXQKCSAgICAgKiBAcmV0dXJuIGluZGV4IG9mIG5leHQgdW5zZXQgYml0LCBvciB7QGNvZGUgc2l6ZX0gaWYgbm9uZSBhcmUgdW5zZXQgdW50aWwgdGhlIGVuZAoJICAgICAqIEBzZWUgI2dldE5leHRTZXQoaW50KQoJICAgICAqLwoJICAgIEJpdEFycmF5LnByb3RvdHlwZS5nZXROZXh0VW5zZXQgPSBmdW5jdGlvbiAoZnJvbSAvKmludCovKSB7CgkgICAgICAgIHZhciBzaXplID0gdGhpcy5zaXplOwoJICAgICAgICBpZiAoZnJvbSA+PSBzaXplKSB7CgkgICAgICAgICAgICByZXR1cm4gc2l6ZTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgYml0cyA9IHRoaXMuYml0czsKCSAgICAgICAgdmFyIGJpdHNPZmZzZXQgPSBNYXRoLmZsb29yKGZyb20gLyAzMik7CgkgICAgICAgIHZhciBjdXJyZW50Qml0cyA9IH5iaXRzW2JpdHNPZmZzZXRdOwoJICAgICAgICAvLyBtYXNrIG9mZiBsZXNzZXIgYml0cyBmaXJzdAoJICAgICAgICBjdXJyZW50Qml0cyAmPSB+KCgxIDw8IChmcm9tICYgMHgxRikpIC0gMSk7CgkgICAgICAgIHZhciBsZW5ndGggPSBiaXRzLmxlbmd0aDsKCSAgICAgICAgd2hpbGUgKGN1cnJlbnRCaXRzID09PSAwKSB7CgkgICAgICAgICAgICBpZiAoKytiaXRzT2Zmc2V0ID09PSBsZW5ndGgpIHsKCSAgICAgICAgICAgICAgICByZXR1cm4gc2l6ZTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGN1cnJlbnRCaXRzID0gfmJpdHNbYml0c09mZnNldF07CgkgICAgICAgIH0KCSAgICAgICAgdmFyIHJlc3VsdCA9IChiaXRzT2Zmc2V0ICogMzIpICsgSW50ZWdlcl8xJDIuZGVmYXVsdC5udW1iZXJPZlRyYWlsaW5nWmVyb3MoY3VycmVudEJpdHMpOwoJICAgICAgICByZXR1cm4gcmVzdWx0ID4gc2l6ZSA/IHNpemUgOiByZXN1bHQ7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBTZXRzIGEgYmxvY2sgb2YgMzIgYml0cywgc3RhcnRpbmcgYXQgYml0IGkuCgkgICAgICoKCSAgICAgKiBAcGFyYW0gaSBmaXJzdCBiaXQgdG8gc2V0CgkgICAgICogQHBhcmFtIG5ld0JpdHMgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgbmV4dCAzMiBiaXRzLiBOb3RlIGFnYWluIHRoYXQgdGhlIGxlYXN0LXNpZ25pZmljYW50IGJpdAoJICAgICAqIGNvcnJlc3BvbmRzIHRvIGJpdCBpLCB0aGUgbmV4dC1sZWFzdC1zaWduaWZpY2FudCB0byBpKzEsIGFuZCBzbyBvbi4KCSAgICAgKi8KCSAgICBCaXRBcnJheS5wcm90b3R5cGUuc2V0QnVsayA9IGZ1bmN0aW9uIChpIC8qaW50Ki8sIG5ld0JpdHMgLyppbnQqLykgewoJICAgICAgICB0aGlzLmJpdHNbTWF0aC5mbG9vcihpIC8gMzIpXSA9IG5ld0JpdHM7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBTZXRzIGEgcmFuZ2Ugb2YgYml0cy4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBzdGFydCBzdGFydCBvZiByYW5nZSwgaW5jbHVzaXZlLgoJICAgICAqIEBwYXJhbSBlbmQgZW5kIG9mIHJhbmdlLCBleGNsdXNpdmUKCSAgICAgKi8KCSAgICBCaXRBcnJheS5wcm90b3R5cGUuc2V0UmFuZ2UgPSBmdW5jdGlvbiAoc3RhcnQgLyppbnQqLywgZW5kIC8qaW50Ki8pIHsKCSAgICAgICAgaWYgKGVuZCA8IHN0YXJ0IHx8IHN0YXJ0IDwgMCB8fCBlbmQgPiB0aGlzLnNpemUpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQ4LmRlZmF1bHQoKTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoZW5kID09PSBzdGFydCkgewoJICAgICAgICAgICAgcmV0dXJuOwoJICAgICAgICB9CgkgICAgICAgIGVuZC0tOyAvLyB3aWxsIGJlIGVhc2llciB0byB0cmVhdCB0aGlzIGFzIHRoZSBsYXN0IGFjdHVhbGx5IHNldCBiaXQgLS0gaW5jbHVzaXZlCgkgICAgICAgIHZhciBmaXJzdEludCA9IE1hdGguZmxvb3Ioc3RhcnQgLyAzMik7CgkgICAgICAgIHZhciBsYXN0SW50ID0gTWF0aC5mbG9vcihlbmQgLyAzMik7CgkgICAgICAgIHZhciBiaXRzID0gdGhpcy5iaXRzOwoJICAgICAgICBmb3IgKHZhciBpID0gZmlyc3RJbnQ7IGkgPD0gbGFzdEludDsgaSsrKSB7CgkgICAgICAgICAgICB2YXIgZmlyc3RCaXQgPSBpID4gZmlyc3RJbnQgPyAwIDogc3RhcnQgJiAweDFGOwoJICAgICAgICAgICAgdmFyIGxhc3RCaXQgPSBpIDwgbGFzdEludCA/IDMxIDogZW5kICYgMHgxRjsKCSAgICAgICAgICAgIC8vIE9uZXMgZnJvbSBmaXJzdEJpdCB0byBsYXN0Qml0LCBpbmNsdXNpdmUKCSAgICAgICAgICAgIHZhciBtYXNrID0gKDIgPDwgbGFzdEJpdCkgLSAoMSA8PCBmaXJzdEJpdCk7CgkgICAgICAgICAgICBiaXRzW2ldIHw9IG1hc2s7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIC8qKgoJICAgICAqIENsZWFycyBhbGwgYml0cyAoc2V0cyB0byBmYWxzZSkuCgkgICAgICovCgkgICAgQml0QXJyYXkucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgbWF4ID0gdGhpcy5iaXRzLmxlbmd0aDsKCSAgICAgICAgdmFyIGJpdHMgPSB0aGlzLmJpdHM7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4OyBpKyspIHsKCSAgICAgICAgICAgIGJpdHNbaV0gPSAwOwoJICAgICAgICB9CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBFZmZpY2llbnQgbWV0aG9kIHRvIGNoZWNrIGlmIGEgcmFuZ2Ugb2YgYml0cyBpcyBzZXQsIG9yIG5vdCBzZXQuCgkgICAgICoKCSAgICAgKiBAcGFyYW0gc3RhcnQgc3RhcnQgb2YgcmFuZ2UsIGluY2x1c2l2ZS4KCSAgICAgKiBAcGFyYW0gZW5kIGVuZCBvZiByYW5nZSwgZXhjbHVzaXZlCgkgICAgICogQHBhcmFtIHZhbHVlIGlmIHRydWUsIGNoZWNrcyB0aGF0IGJpdHMgaW4gcmFuZ2UgYXJlIHNldCwgb3RoZXJ3aXNlIGNoZWNrcyB0aGF0IHRoZXkgYXJlIG5vdCBzZXQKCSAgICAgKiBAcmV0dXJuIHRydWUgaWZmIGFsbCBiaXRzIGFyZSBzZXQgb3Igbm90IHNldCBpbiByYW5nZSwgYWNjb3JkaW5nIHRvIHZhbHVlIGFyZ3VtZW50CgkgICAgICogQHRocm93cyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24gaWYgZW5kIGlzIGxlc3MgdGhhbiBzdGFydCBvciB0aGUgcmFuZ2UgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgYXJyYXkKCSAgICAgKi8KCSAgICBCaXRBcnJheS5wcm90b3R5cGUuaXNSYW5nZSA9IGZ1bmN0aW9uIChzdGFydCAvKmludCovLCBlbmQgLyppbnQqLywgdmFsdWUpIHsKCSAgICAgICAgaWYgKGVuZCA8IHN0YXJ0IHx8IHN0YXJ0IDwgMCB8fCBlbmQgPiB0aGlzLnNpemUpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQ4LmRlZmF1bHQoKTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoZW5kID09PSBzdGFydCkgewoJICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIGVtcHR5IHJhbmdlIG1hdGNoZXMKCSAgICAgICAgfQoJICAgICAgICBlbmQtLTsgLy8gd2lsbCBiZSBlYXNpZXIgdG8gdHJlYXQgdGhpcyBhcyB0aGUgbGFzdCBhY3R1YWxseSBzZXQgYml0IC0tIGluY2x1c2l2ZQoJICAgICAgICB2YXIgZmlyc3RJbnQgPSBNYXRoLmZsb29yKHN0YXJ0IC8gMzIpOwoJICAgICAgICB2YXIgbGFzdEludCA9IE1hdGguZmxvb3IoZW5kIC8gMzIpOwoJICAgICAgICB2YXIgYml0cyA9IHRoaXMuYml0czsKCSAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0SW50OyBpIDw9IGxhc3RJbnQ7IGkrKykgewoJICAgICAgICAgICAgdmFyIGZpcnN0Qml0ID0gaSA+IGZpcnN0SW50ID8gMCA6IHN0YXJ0ICYgMHgxRjsKCSAgICAgICAgICAgIHZhciBsYXN0Qml0ID0gaSA8IGxhc3RJbnQgPyAzMSA6IGVuZCAmIDB4MUY7CgkgICAgICAgICAgICAvLyBPbmVzIGZyb20gZmlyc3RCaXQgdG8gbGFzdEJpdCwgaW5jbHVzaXZlCgkgICAgICAgICAgICB2YXIgbWFzayA9ICgyIDw8IGxhc3RCaXQpIC0gKDEgPDwgZmlyc3RCaXQpICYgMHhGRkZGRkZGRjsKCSAgICAgICAgICAgIC8vIFRZUEVTQ1JJUFRQT1JUOiAmIDB4RkZGRkZGRkYgYWRkZWQgdG8gZGlzY2FyZCBhbnl0aGluZyBhZnRlciAzMiBiaXRzLCBhcyBFUyBoYXMgNTMgYml0cwoJICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIHdlJ3JlIGxvb2tpbmcgZm9yIDFzIGFuZCB0aGUgbWFza2VkIGJpdHNbaV0gaXNuJ3QgYWxsIDFzIChpczogdGhhdCwKCSAgICAgICAgICAgIC8vIGVxdWFscyB0aGUgbWFzaywgb3Igd2UncmUgbG9va2luZyBmb3IgMHMgYW5kIHRoZSBtYXNrZWQgcG9ydGlvbiBpcyBub3QgYWxsIDBzCgkgICAgICAgICAgICBpZiAoKGJpdHNbaV0gJiBtYXNrKSAhPT0gKHZhbHVlID8gbWFzayA6IDApKSB7CgkgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHJldHVybiB0cnVlOwoJICAgIH07CgkgICAgQml0QXJyYXkucHJvdG90eXBlLmFwcGVuZEJpdCA9IGZ1bmN0aW9uIChiaXQpIHsKCSAgICAgICAgdGhpcy5lbnN1cmVDYXBhY2l0eSh0aGlzLnNpemUgKyAxKTsKCSAgICAgICAgaWYgKGJpdCkgewoJICAgICAgICAgICAgdGhpcy5iaXRzW01hdGguZmxvb3IodGhpcy5zaXplIC8gMzIpXSB8PSAxIDw8ICh0aGlzLnNpemUgJiAweDFGKTsKCSAgICAgICAgfQoJICAgICAgICB0aGlzLnNpemUrKzsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEFwcGVuZHMgdGhlIGxlYXN0LXNpZ25pZmljYW50IGJpdHMsIGZyb20gdmFsdWUsIGluIG9yZGVyIGZyb20gbW9zdC1zaWduaWZpY2FudCB0bwoJICAgICAqIGxlYXN0LXNpZ25pZmljYW50LiBGb3IgZXhhbXBsZSwgYXBwZW5kaW5nIDYgYml0cyBmcm9tIDB4MDAwMDAxRSB3aWxsIGFwcGVuZCB0aGUgYml0cwoJICAgICAqIDAsIDEsIDEsIDEsIDEsIDAgaW4gdGhhdCBvcmRlci4KCSAgICAgKgoJICAgICAqIEBwYXJhbSB2YWx1ZSB7QGNvZGUgaW50fSBjb250YWluaW5nIGJpdHMgdG8gYXBwZW5kCgkgICAgICogQHBhcmFtIG51bUJpdHMgYml0cyBmcm9tIHZhbHVlIHRvIGFwcGVuZAoJICAgICAqLwoJICAgIEJpdEFycmF5LnByb3RvdHlwZS5hcHBlbmRCaXRzID0gZnVuY3Rpb24gKHZhbHVlIC8qaW50Ki8sIG51bUJpdHMgLyppbnQqLykgewoJICAgICAgICBpZiAobnVtQml0cyA8IDAgfHwgbnVtQml0cyA+IDMyKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkOC5kZWZhdWx0KCdOdW0gYml0cyBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMzInKTsKCSAgICAgICAgfQoJICAgICAgICB0aGlzLmVuc3VyZUNhcGFjaXR5KHRoaXMuc2l6ZSArIG51bUJpdHMpOwoJICAgICAgICAvLyBjb25zdCBhcHBlbmRCaXQgPSB0aGlzLmFwcGVuZEJpdDsKCSAgICAgICAgZm9yICh2YXIgbnVtQml0c0xlZnQgPSBudW1CaXRzOyBudW1CaXRzTGVmdCA+IDA7IG51bUJpdHNMZWZ0LS0pIHsKCSAgICAgICAgICAgIHRoaXMuYXBwZW5kQml0KCgodmFsdWUgPj4gKG51bUJpdHNMZWZ0IC0gMSkpICYgMHgwMSkgPT09IDEpOwoJICAgICAgICB9CgkgICAgfTsKCSAgICBCaXRBcnJheS5wcm90b3R5cGUuYXBwZW5kQml0QXJyYXkgPSBmdW5jdGlvbiAob3RoZXIpIHsKCSAgICAgICAgdmFyIG90aGVyU2l6ZSA9IG90aGVyLnNpemU7CgkgICAgICAgIHRoaXMuZW5zdXJlQ2FwYWNpdHkodGhpcy5zaXplICsgb3RoZXJTaXplKTsKCSAgICAgICAgLy8gY29uc3QgYXBwZW5kQml0ID0gdGhpcy5hcHBlbmRCaXQ7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3RoZXJTaXplOyBpKyspIHsKCSAgICAgICAgICAgIHRoaXMuYXBwZW5kQml0KG90aGVyLmdldChpKSk7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIEJpdEFycmF5LnByb3RvdHlwZS54b3IgPSBmdW5jdGlvbiAob3RoZXIpIHsKCSAgICAgICAgaWYgKHRoaXMuc2l6ZSAhPT0gb3RoZXIuc2l6ZSkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDguZGVmYXVsdCgnU2l6ZXMgZG9uXCd0IG1hdGNoJyk7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIGJpdHMgPSB0aGlzLmJpdHM7CgkgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGhfMSA9IGJpdHMubGVuZ3RoOyBpIDwgbGVuZ3RoXzE7IGkrKykgewoJICAgICAgICAgICAgLy8gVGhlIGxhc3QgaW50IGNvdWxkIGJlIGluY29tcGxldGUgKGkuZS4gbm90IGhhdmUgMzIgYml0cyBpbgoJICAgICAgICAgICAgLy8gaXQpIGJ1dCB0aGVyZSBpcyBubyBwcm9ibGVtIHNpbmNlIDAgWE9SIDAgPT0gMC4KCSAgICAgICAgICAgIGJpdHNbaV0gXj0gb3RoZXIuYml0c1tpXTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgLyoqCgkgICAgICoKCSAgICAgKiBAcGFyYW0gYml0T2Zmc2V0IGZpcnN0IGJpdCB0byBzdGFydCB3cml0aW5nCgkgICAgICogQHBhcmFtIGFycmF5IGFycmF5IHRvIHdyaXRlIGludG8uIEJ5dGVzIGFyZSB3cml0dGVuIG1vc3Qtc2lnbmlmaWNhbnQgYnl0ZSBmaXJzdC4gVGhpcyBpcyB0aGUgb3Bwb3NpdGUKCSAgICAgKiAgb2YgdGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uLCB3aGljaCBpcyBleHBvc2VkIGJ5IHtAbGluayAjZ2V0Qml0QXJyYXkoKX0KCSAgICAgKiBAcGFyYW0gb2Zmc2V0IHBvc2l0aW9uIGluIGFycmF5IHRvIHN0YXJ0IHdyaXRpbmcKCSAgICAgKiBAcGFyYW0gbnVtQnl0ZXMgaG93IG1hbnkgYnl0ZXMgdG8gd3JpdGUKCSAgICAgKi8KCSAgICBCaXRBcnJheS5wcm90b3R5cGUudG9CeXRlcyA9IGZ1bmN0aW9uIChiaXRPZmZzZXQgLyppbnQqLywgYXJyYXksIG9mZnNldCAvKmludCovLCBudW1CeXRlcyAvKmludCovKSB7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQnl0ZXM7IGkrKykgewoJICAgICAgICAgICAgdmFyIHRoZUJ5dGUgPSAwOwoJICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA4OyBqKyspIHsKCSAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXQoYml0T2Zmc2V0KSkgewoJICAgICAgICAgICAgICAgICAgICB0aGVCeXRlIHw9IDEgPDwgKDcgLSBqKTsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgYml0T2Zmc2V0Kys7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBhcnJheVtvZmZzZXQgKyBpXSA9IC8qKGJ5dGUpKi8gdGhlQnl0ZTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiB1bmRlcmx5aW5nIGFycmF5IG9mIGludHMuIFRoZSBmaXJzdCBlbGVtZW50IGhvbGRzIHRoZSBmaXJzdCAzMiBiaXRzLCBhbmQgdGhlIGxlYXN0CgkgICAgICogICAgICAgICBzaWduaWZpY2FudCBiaXQgaXMgYml0IDAuCgkgICAgICovCgkgICAgQml0QXJyYXkucHJvdG90eXBlLmdldEJpdEFycmF5ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5iaXRzOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogUmV2ZXJzZXMgYWxsIGJpdHMgaW4gdGhlIGFycmF5LgoJICAgICAqLwoJICAgIEJpdEFycmF5LnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgbmV3Qml0cyA9IG5ldyBJbnQzMkFycmF5KHRoaXMuYml0cy5sZW5ndGgpOwoJICAgICAgICAvLyByZXZlcnNlIGFsbCBpbnQncyBmaXJzdAoJICAgICAgICB2YXIgbGVuID0gTWF0aC5mbG9vcigodGhpcy5zaXplIC0gMSkgLyAzMik7CgkgICAgICAgIHZhciBvbGRCaXRzTGVuID0gbGVuICsgMTsKCSAgICAgICAgdmFyIGJpdHMgPSB0aGlzLmJpdHM7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkQml0c0xlbjsgaSsrKSB7CgkgICAgICAgICAgICB2YXIgeCA9IGJpdHNbaV07CgkgICAgICAgICAgICB4ID0gKCh4ID4+IDEpICYgMHg1NTU1NTU1NSkgfCAoKHggJiAweDU1NTU1NTU1KSA8PCAxKTsKCSAgICAgICAgICAgIHggPSAoKHggPj4gMikgJiAweDMzMzMzMzMzKSB8ICgoeCAmIDB4MzMzMzMzMzMpIDw8IDIpOwoJICAgICAgICAgICAgeCA9ICgoeCA+PiA0KSAmIDB4MGYwZjBmMGYpIHwgKCh4ICYgMHgwZjBmMGYwZikgPDwgNCk7CgkgICAgICAgICAgICB4ID0gKCh4ID4+IDgpICYgMHgwMGZmMDBmZikgfCAoKHggJiAweDAwZmYwMGZmKSA8PCA4KTsKCSAgICAgICAgICAgIHggPSAoKHggPj4gMTYpICYgMHgwMDAwZmZmZikgfCAoKHggJiAweDAwMDBmZmZmKSA8PCAxNik7CgkgICAgICAgICAgICBuZXdCaXRzW2xlbiAtIGldID0gLyooaW50KSovIHg7CgkgICAgICAgIH0KCSAgICAgICAgLy8gbm93IGNvcnJlY3QgdGhlIGludCdzIGlmIHRoZSBiaXQgc2l6ZSBpc24ndCBhIG11bHRpcGxlIG9mIDMyCgkgICAgICAgIGlmICh0aGlzLnNpemUgIT09IG9sZEJpdHNMZW4gKiAzMikgewoJICAgICAgICAgICAgdmFyIGxlZnRPZmZzZXQgPSBvbGRCaXRzTGVuICogMzIgLSB0aGlzLnNpemU7CgkgICAgICAgICAgICB2YXIgY3VycmVudEludCA9IG5ld0JpdHNbMF0gPj4+IGxlZnRPZmZzZXQ7CgkgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG9sZEJpdHNMZW47IGkrKykgewoJICAgICAgICAgICAgICAgIHZhciBuZXh0SW50ID0gbmV3Qml0c1tpXTsKCSAgICAgICAgICAgICAgICBjdXJyZW50SW50IHw9IG5leHRJbnQgPDwgKDMyIC0gbGVmdE9mZnNldCk7CgkgICAgICAgICAgICAgICAgbmV3Qml0c1tpIC0gMV0gPSBjdXJyZW50SW50OwoJICAgICAgICAgICAgICAgIGN1cnJlbnRJbnQgPSBuZXh0SW50ID4+PiBsZWZ0T2Zmc2V0OwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgbmV3Qml0c1tvbGRCaXRzTGVuIC0gMV0gPSBjdXJyZW50SW50OwoJICAgICAgICB9CgkgICAgICAgIHRoaXMuYml0cyA9IG5ld0JpdHM7CgkgICAgfTsKCSAgICBCaXRBcnJheS5tYWtlQXJyYXkgPSBmdW5jdGlvbiAoc2l6ZSAvKmludCovKSB7CgkgICAgICAgIHJldHVybiBuZXcgSW50MzJBcnJheShNYXRoLmZsb29yKChzaXplICsgMzEpIC8gMzIpKTsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBCaXRBcnJheS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG8pIHsKCSAgICAgICAgaWYgKCEobyBpbnN0YW5jZW9mIEJpdEFycmF5KSkgewoJICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9CgkgICAgICAgIHZhciBvdGhlciA9IG87CgkgICAgICAgIHJldHVybiB0aGlzLnNpemUgPT09IG90aGVyLnNpemUgJiYgQXJyYXlzXzEkMS5kZWZhdWx0LmVxdWFscyh0aGlzLmJpdHMsIG90aGVyLmJpdHMpOwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEJpdEFycmF5LnByb3RvdHlwZS5oYXNoQ29kZSA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIDMxICogdGhpcy5zaXplICsgQXJyYXlzXzEkMS5kZWZhdWx0Lmhhc2hDb2RlKHRoaXMuYml0cyk7CgkgICAgfTsKCSAgICAvKkBPdmVycmlkZSovCgkgICAgQml0QXJyYXkucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgcmVzdWx0ID0gJyc7CgkgICAgICAgIGZvciAodmFyIGkgPSAwLCBzaXplID0gdGhpcy5zaXplOyBpIDwgc2l6ZTsgaSsrKSB7CgkgICAgICAgICAgICBpZiAoKGkgJiAweDA3KSA9PT0gMCkgewoJICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnICc7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5nZXQoaSkgPyAnWCcgOiAnLic7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHJlc3VsdDsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBCaXRBcnJheS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiBuZXcgQml0QXJyYXkodGhpcy5zaXplLCB0aGlzLmJpdHMuc2xpY2UoKSk7CgkgICAgfTsKCSAgICByZXR1cm4gQml0QXJyYXk7Cgl9KCkpOwoJQml0QXJyYXkkMS5kZWZhdWx0ID0gQml0QXJyYXk7CgoJdmFyIEJpdE1hdHJpeCQxID0ge307CgoJdmFyIFN0cmluZ0J1aWxkZXIkMSA9IHt9OwoKCXZhciBTdHJpbmdVdGlscyQxID0ge307CgoJdmFyIERlY29kZUhpbnRUeXBlJDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDkgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KERlY29kZUhpbnRUeXBlJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcgeyovCgkvKioKCSAqIEVuY2Fwc3VsYXRlcyBhIHR5cGUgb2YgaGludCB0aGF0IGEgY2FsbGVyIG1heSBwYXNzIHRvIGEgYmFyY29kZSByZWFkZXIgdG8gaGVscCBpdAoJICogbW9yZSBxdWlja2x5IG9yIGFjY3VyYXRlbHkgZGVjb2RlIGl0LiBJdCBpcyB1cCB0byBpbXBsZW1lbnRhdGlvbnMgdG8gZGVjaWRlIHdoYXQsCgkgKiBpZiBhbnl0aGluZywgdG8gZG8gd2l0aCB0aGUgaW5mb3JtYXRpb24gdGhhdCBpcyBzdXBwbGllZC4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICogQGF1dGhvciBkc3dpdGtpbkBnb29nbGUuY29tIChEYW5pZWwgU3dpdGtpbikKCSAqIEBzZWUgUmVhZGVyI2RlY29kZShCaW5hcnlCaXRtYXAsamF2YS51dGlsLk1hcCkKCSAqLwoJdmFyIERlY29kZUhpbnRUeXBlOwoJKGZ1bmN0aW9uIChEZWNvZGVIaW50VHlwZSkgewoJICAgIC8qKgoJICAgICAqIFVuc3BlY2lmaWVkLCBhcHBsaWNhdGlvbi1zcGVjaWZpYyBoaW50LiBNYXBzIHRvIGFuIHVuc3BlY2lmaWVkIHtAbGluayBPYmplY3R9LgoJICAgICAqLwoJICAgIERlY29kZUhpbnRUeXBlW0RlY29kZUhpbnRUeXBlWyJPVEhFUiJdID0gMF0gPSAiT1RIRVIiOyAvKihPYmplY3QuY2xhc3MpKi8KCSAgICAvKioKCSAgICAgKiBJbWFnZSBpcyBhIHB1cmUgbW9ub2Nocm9tZSBpbWFnZSBvZiBhIGJhcmNvZGUuIERvZXNuJ3QgbWF0dGVyIHdoYXQgaXQgbWFwcyB0bzsKCSAgICAgKiB1c2Uge0BsaW5rIEJvb2xlYW4jVFJVRX0uCgkgICAgICovCgkgICAgRGVjb2RlSGludFR5cGVbRGVjb2RlSGludFR5cGVbIlBVUkVfQkFSQ09ERSJdID0gMV0gPSAiUFVSRV9CQVJDT0RFIjsgLyooVm9pZC5jbGFzcykqLwoJICAgIC8qKgoJICAgICAqIEltYWdlIGlzIGtub3duIHRvIGJlIG9mIG9uZSBvZiBhIGZldyBwb3NzaWJsZSBmb3JtYXRzLgoJICAgICAqIE1hcHMgdG8gYSB7QGxpbmsgTGlzdH0gb2Yge0BsaW5rIEJhcmNvZGVGb3JtYXR9cy4KCSAgICAgKi8KCSAgICBEZWNvZGVIaW50VHlwZVtEZWNvZGVIaW50VHlwZVsiUE9TU0lCTEVfRk9STUFUUyJdID0gMl0gPSAiUE9TU0lCTEVfRk9STUFUUyI7IC8qKExpc3QuY2xhc3MpKi8KCSAgICAvKioKCSAgICAgKiBTcGVuZCBtb3JlIHRpbWUgdG8gdHJ5IHRvIGZpbmQgYSBiYXJjb2RlOyBvcHRpbWl6ZSBmb3IgYWNjdXJhY3ksIG5vdCBzcGVlZC4KCSAgICAgKiBEb2Vzbid0IG1hdHRlciB3aGF0IGl0IG1hcHMgdG87IHVzZSB7QGxpbmsgQm9vbGVhbiNUUlVFfS4KCSAgICAgKi8KCSAgICBEZWNvZGVIaW50VHlwZVtEZWNvZGVIaW50VHlwZVsiVFJZX0hBUkRFUiJdID0gM10gPSAiVFJZX0hBUkRFUiI7IC8qKFZvaWQuY2xhc3MpKi8KCSAgICAvKioKCSAgICAgKiBTcGVjaWZpZXMgd2hhdCBjaGFyYWN0ZXIgZW5jb2RpbmcgdG8gdXNlIHdoZW4gZGVjb2RpbmcsIHdoZXJlIGFwcGxpY2FibGUgKHR5cGUgU3RyaW5nKQoJICAgICAqLwoJICAgIERlY29kZUhpbnRUeXBlW0RlY29kZUhpbnRUeXBlWyJDSEFSQUNURVJfU0VUIl0gPSA0XSA9ICJDSEFSQUNURVJfU0VUIjsgLyooU3RyaW5nLmNsYXNzKSovCgkgICAgLyoqCgkgICAgICogQWxsb3dlZCBsZW5ndGhzIG9mIGVuY29kZWQgZGF0YSAtLSByZWplY3QgYW55dGhpbmcgZWxzZS4gTWFwcyB0byBhbiB7QGNvZGUgSW50MzJBcnJheX0uCgkgICAgICovCgkgICAgRGVjb2RlSGludFR5cGVbRGVjb2RlSGludFR5cGVbIkFMTE9XRURfTEVOR1RIUyJdID0gNV0gPSAiQUxMT1dFRF9MRU5HVEhTIjsgLyooSW50MzJBcnJheS5jbGFzcykqLwoJICAgIC8qKgoJICAgICAqIEFzc3VtZSBDb2RlIDM5IGNvZGVzIGVtcGxveSBhIGNoZWNrIGRpZ2l0LiBEb2Vzbid0IG1hdHRlciB3aGF0IGl0IG1hcHMgdG87CgkgICAgICogdXNlIHtAbGluayBCb29sZWFuI1RSVUV9LgoJICAgICAqLwoJICAgIERlY29kZUhpbnRUeXBlW0RlY29kZUhpbnRUeXBlWyJBU1NVTUVfQ09ERV8zOV9DSEVDS19ESUdJVCJdID0gNl0gPSAiQVNTVU1FX0NPREVfMzlfQ0hFQ0tfRElHSVQiOyAvKihWb2lkLmNsYXNzKSovCgkgICAgLyoqCgkgICAgICogQXNzdW1lIHRoZSBiYXJjb2RlIGlzIGJlaW5nIHByb2Nlc3NlZCBhcyBhIEdTMSBiYXJjb2RlLCBhbmQgbW9kaWZ5IGJlaGF2aW9yIGFzIG5lZWRlZC4KCSAgICAgKiBGb3IgZXhhbXBsZSB0aGlzIGFmZmVjdHMgRk5DMSBoYW5kbGluZyBmb3IgQ29kZSAxMjggKGFrYSBHUzEtMTI4KS4gRG9lc24ndCBtYXR0ZXIgd2hhdCBpdCBtYXBzIHRvOwoJICAgICAqIHVzZSB7QGxpbmsgQm9vbGVhbiNUUlVFfS4KCSAgICAgKi8KCSAgICBEZWNvZGVIaW50VHlwZVtEZWNvZGVIaW50VHlwZVsiQVNTVU1FX0dTMSJdID0gN10gPSAiQVNTVU1FX0dTMSI7IC8qKFZvaWQuY2xhc3MpKi8KCSAgICAvKioKCSAgICAgKiBJZiB0cnVlLCByZXR1cm4gdGhlIHN0YXJ0IGFuZCBlbmQgZGlnaXRzIGluIGEgQ29kYWJhciBiYXJjb2RlIGluc3RlYWQgb2Ygc3RyaXBwaW5nIHRoZW0uIFRoZXkKCSAgICAgKiBhcmUgYWxwaGEsIHdoZXJlYXMgdGhlIHJlc3QgYXJlIG51bWVyaWMuIEJ5IGRlZmF1bHQsIHRoZXkgYXJlIHN0cmlwcGVkLCBidXQgdGhpcyBjYXVzZXMgdGhlbQoJICAgICAqIHRvIG5vdCBiZS4gRG9lc24ndCBtYXR0ZXIgd2hhdCBpdCBtYXBzIHRvOyB1c2Uge0BsaW5rIEJvb2xlYW4jVFJVRX0uCgkgICAgICovCgkgICAgRGVjb2RlSGludFR5cGVbRGVjb2RlSGludFR5cGVbIlJFVFVSTl9DT0RBQkFSX1NUQVJUX0VORCJdID0gOF0gPSAiUkVUVVJOX0NPREFCQVJfU1RBUlRfRU5EIjsgLyooVm9pZC5jbGFzcykqLwoJICAgIC8qKgoJICAgICAqIFRoZSBjYWxsZXIgbmVlZHMgdG8gYmUgbm90aWZpZWQgdmlhIGNhbGxiYWNrIHdoZW4gYSBwb3NzaWJsZSB7QGxpbmsgUmVzdWx0UG9pbnR9CgkgICAgICogaXMgZm91bmQuIE1hcHMgdG8gYSB7QGxpbmsgUmVzdWx0UG9pbnRDYWxsYmFja30uCgkgICAgICovCgkgICAgRGVjb2RlSGludFR5cGVbRGVjb2RlSGludFR5cGVbIk5FRURfUkVTVUxUX1BPSU5UX0NBTExCQUNLIl0gPSA5XSA9ICJORUVEX1JFU1VMVF9QT0lOVF9DQUxMQkFDSyI7IC8qKFJlc3VsdFBvaW50Q2FsbGJhY2suY2xhc3MpKi8KCSAgICAvKioKCSAgICAgKiBBbGxvd2VkIGV4dGVuc2lvbiBsZW5ndGhzIGZvciBFQU4gb3IgVVBDIGJhcmNvZGVzLiBPdGhlciBmb3JtYXRzIHdpbGwgaWdub3JlIHRoaXMuCgkgICAgICogTWFwcyB0byBhbiB7QGNvZGUgSW50MzJBcnJheX0gb2YgdGhlIGFsbG93ZWQgZXh0ZW5zaW9uIGxlbmd0aHMsIGZvciBleGFtcGxlIFsyXSwgWzVdLCBvciBbMiwgNV0uCgkgICAgICogSWYgaXQgaXMgb3B0aW9uYWwgdG8gaGF2ZSBhbiBleHRlbnNpb24sIGRvIG5vdCBzZXQgdGhpcyBoaW50LiBJZiB0aGlzIGlzIHNldCwKCSAgICAgKiBhbmQgYSBVUEMgb3IgRUFOIGJhcmNvZGUgaXMgZm91bmQgYnV0IGFuIGV4dGVuc2lvbiBpcyBub3QsIHRoZW4gbm8gcmVzdWx0IHdpbGwgYmUgcmV0dXJuZWQKCSAgICAgKiBhdCBhbGwuCgkgICAgICovCgkgICAgRGVjb2RlSGludFR5cGVbRGVjb2RlSGludFR5cGVbIkFMTE9XRURfRUFOX0VYVEVOU0lPTlMiXSA9IDEwXSA9ICJBTExPV0VEX0VBTl9FWFRFTlNJT05TIjsgLyooSW50MzJBcnJheS5jbGFzcykqLwoJICAgIC8vIEVuZCBvZiBlbnVtZXJhdGlvbiB2YWx1ZXMuCgkgICAgLyoqCgkgICAgICogRGF0YSB0eXBlIHRoZSBoaW50IGlzIGV4cGVjdGluZy4KCSAgICAgKiBBbW9uZyB0aGUgcG9zc2libGUgdmFsdWVzIHRoZSB7QGxpbmsgVm9pZH0gc3RhbmRzIG91dCBhcyBiZWluZyB1c2VkIGZvcgoJICAgICAqIGhpbnRzIHRoYXQgZG8gbm90IGV4cGVjdCBhIHZhbHVlIHRvIGJlIHN1cHBsaWVkIChmbGFnIGhpbnRzKS4gU3VjaCBoaW50cwoJICAgICAqIHdpbGwgcG9zc2libHkgaGF2ZSB0aGVpciB2YWx1ZSBpZ25vcmVkLCBvciByZXBsYWNlZCBieSBhCgkgICAgICoge0BsaW5rIEJvb2xlYW4jVFJVRX0uIEhpbnQgc3VwcGxpZXJzIHNob3VsZCBwcm9iYWJseSB1c2UKCSAgICAgKiB7QGxpbmsgQm9vbGVhbiNUUlVFfSBhcyBkaXJlY3RlZCBieSB0aGUgYWN0dWFsIGhpbnQgZG9jdW1lbnRhdGlvbi4KCSAgICAgKi8KCSAgICAvLyBwcml2YXRlIHZhbHVlVHlwZTogQ2xhc3M8Pz4KCSAgICAvLyBEZWNvZGVIaW50VHlwZSh2YWx1ZVR5cGU6IENsYXNzPD8+KSB7CgkgICAgLy8gICB0aGlzLnZhbHVlVHlwZSA9IHZhbHVlVHlwZQoJICAgIC8vIH0KCSAgICAvLyBwdWJsaWMgZ2V0VmFsdWVUeXBlKCk6IENsYXNzPD8+IHsKCSAgICAvLyAgIHJldHVybiB2YWx1ZVR5cGUKCSAgICAvLyB9Cgl9KShEZWNvZGVIaW50VHlwZSB8fCAoRGVjb2RlSGludFR5cGUgPSB7fSkpOwoJRGVjb2RlSGludFR5cGUkMS5kZWZhdWx0ID0gRGVjb2RlSGludFR5cGU7CgoJdmFyIENoYXJhY3RlclNldEVDSSA9IHt9OwoKCXZhciBGb3JtYXRFeGNlcHRpb24kMSA9IHt9OwoKCXZhciBfX2V4dGVuZHMkZiA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7CgkgICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CgkgICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8CgkgICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTsKCSAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgfTsKCSAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9CgkgICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTsKCSAgICB9OwoJfSkoKTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtYXRFeGNlcHRpb24kMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJdmFyIEV4Y2VwdGlvbl8xJDcgPSBFeGNlcHRpb24kMTsKCS8qKgoJICogQ3VzdG9tIEVycm9yIGNsYXNzIG9mIHR5cGUgRXhjZXB0aW9uLgoJICovCgl2YXIgRm9ybWF0RXhjZXB0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikgewoJICAgIF9fZXh0ZW5kcyRmKEZvcm1hdEV4Y2VwdGlvbiwgX3N1cGVyKTsKCSAgICBmdW5jdGlvbiBGb3JtYXRFeGNlcHRpb24oKSB7CgkgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpczsKCSAgICB9CgkgICAgRm9ybWF0RXhjZXB0aW9uLmdldEZvcm1hdEluc3RhbmNlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gbmV3IEZvcm1hdEV4Y2VwdGlvbigpOwoJICAgIH07CgkgICAgRm9ybWF0RXhjZXB0aW9uLmtpbmQgPSAnRm9ybWF0RXhjZXB0aW9uJzsKCSAgICByZXR1cm4gRm9ybWF0RXhjZXB0aW9uOwoJfShFeGNlcHRpb25fMSQ3LmRlZmF1bHQpKTsKCUZvcm1hdEV4Y2VwdGlvbiQxLmRlZmF1bHQgPSBGb3JtYXRFeGNlcHRpb247CgoJKGZ1bmN0aW9uIChleHBvcnRzKSB7CgkvKgoJICogQ29weXJpZ2h0IDIwMDggWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJdmFyIF9fdmFsdWVzID0gKGNvbW1vbmpzR2xvYmFsICYmIGNvbW1vbmpzR2xvYmFsLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7CgkgICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSAiZnVuY3Rpb24iICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7CgkgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7CgkgICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSAibnVtYmVyIikgcmV0dXJuIHsKCSAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkgewoJICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDsKCSAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gIk9iamVjdCBpcyBub3QgaXRlcmFibGUuIiA6ICJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuIik7Cgl9OwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCWV4cG9ydHMuQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycyA9IHZvaWQgMDsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcuY29tbW9uIHsqLwoJdmFyIEZvcm1hdEV4Y2VwdGlvbl8xID0gRm9ybWF0RXhjZXB0aW9uJDE7CgkvKmltcG9ydCBqYXZhLnV0aWwuSGFzaE1hcDsqLwoJLyppbXBvcnQgamF2YS51dGlsLk1hcDsqLwoJdmFyIENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnM7CgkoZnVuY3Rpb24gKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMpIHsKCSAgICBDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzW0NoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnNbIkNwNDM3Il0gPSAwXSA9ICJDcDQzNyI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzEiXSA9IDFdID0gIklTTzg4NTlfMSI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzIiXSA9IDJdID0gIklTTzg4NTlfMiI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzMiXSA9IDNdID0gIklTTzg4NTlfMyI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzQiXSA9IDRdID0gIklTTzg4NTlfNCI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzUiXSA9IDVdID0gIklTTzg4NTlfNSI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzYiXSA9IDZdID0gIklTTzg4NTlfNiI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzciXSA9IDddID0gIklTTzg4NTlfNyI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzgiXSA9IDhdID0gIklTTzg4NTlfOCI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzkiXSA9IDldID0gIklTTzg4NTlfOSI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzEwIl0gPSAxMF0gPSAiSVNPODg1OV8xMCI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzExIl0gPSAxMV0gPSAiSVNPODg1OV8xMSI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzEzIl0gPSAxMl0gPSAiSVNPODg1OV8xMyI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzE0Il0gPSAxM10gPSAiSVNPODg1OV8xNCI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzE1Il0gPSAxNF0gPSAiSVNPODg1OV8xNSI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJJU084ODU5XzE2Il0gPSAxNV0gPSAiSVNPODg1OV8xNiI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJTSklTIl0gPSAxNl0gPSAiU0pJUyI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJDcDEyNTAiXSA9IDE3XSA9ICJDcDEyNTAiOwoJICAgIENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnNbQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1siQ3AxMjUxIl0gPSAxOF0gPSAiQ3AxMjUxIjsKCSAgICBDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzW0NoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnNbIkNwMTI1MiJdID0gMTldID0gIkNwMTI1MiI7CgkgICAgQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1tDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzWyJDcDEyNTYiXSA9IDIwXSA9ICJDcDEyNTYiOwoJICAgIENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnNbQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1siVW5pY29kZUJpZ1VubWFya2VkIl0gPSAyMV0gPSAiVW5pY29kZUJpZ1VubWFya2VkIjsKCSAgICBDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzW0NoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnNbIlVURjgiXSA9IDIyXSA9ICJVVEY4IjsKCSAgICBDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzW0NoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnNbIkFTQ0lJIl0gPSAyM10gPSAiQVNDSUkiOwoJICAgIENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnNbQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1siQmlnNSJdID0gMjRdID0gIkJpZzUiOwoJICAgIENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnNbQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1siR0IxODAzMCJdID0gMjVdID0gIkdCMTgwMzAiOwoJICAgIENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnNbQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVyc1siRVVDX0tSIl0gPSAyNl0gPSAiRVVDX0tSIjsKCX0pKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMgPSBleHBvcnRzLkNoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMgfHwgKGV4cG9ydHMuQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycyA9IHt9KSk7CgkvKioKCSAqIEVuY2Fwc3VsYXRlcyBhIENoYXJhY3RlciBTZXQgRUNJLCBhY2NvcmRpbmcgdG8gIkV4dGVuZGVkIENoYW5uZWwgSW50ZXJwcmV0YXRpb25zIiA1LjMuMS4xCgkgKiBvZiBJU08gMTgwMDQuCgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIENoYXJhY3RlclNldEVDSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBDaGFyYWN0ZXJTZXRFQ0kodmFsdWVJZGVudGlmaWVyLCB2YWx1ZXNQYXJhbSwgbmFtZSkgewoJICAgICAgICB2YXIgZV8xLCBfYTsKCSAgICAgICAgdmFyIG90aGVyRW5jb2RpbmdOYW1lcyA9IFtdOwoJICAgICAgICBmb3IgKHZhciBfaSA9IDM7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykgewoJICAgICAgICAgICAgb3RoZXJFbmNvZGluZ05hbWVzW19pIC0gM10gPSBhcmd1bWVudHNbX2ldOwoJICAgICAgICB9CgkgICAgICAgIHRoaXMudmFsdWVJZGVudGlmaWVyID0gdmFsdWVJZGVudGlmaWVyOwoJICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOwoJICAgICAgICBpZiAodHlwZW9mIHZhbHVlc1BhcmFtID09PSAnbnVtYmVyJykgewoJICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBJbnQzMkFycmF5LmZyb20oW3ZhbHVlc1BhcmFtXSk7CgkgICAgICAgIH0KCSAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlc1BhcmFtOwoJICAgICAgICB9CgkgICAgICAgIHRoaXMub3RoZXJFbmNvZGluZ05hbWVzID0gb3RoZXJFbmNvZGluZ05hbWVzOwoJICAgICAgICBDaGFyYWN0ZXJTZXRFQ0kuVkFMVUVfSURFTlRJRklFUl9UT19FQ0kuc2V0KHZhbHVlSWRlbnRpZmllciwgdGhpcyk7CgkgICAgICAgIENoYXJhY3RlclNldEVDSS5OQU1FX1RPX0VDSS5zZXQobmFtZSwgdGhpcyk7CgkgICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlczsKCSAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aF8xID0gdmFsdWVzLmxlbmd0aDsgaSAhPT0gbGVuZ3RoXzE7IGkrKykgewoJICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZXNbaV07CgkgICAgICAgICAgICBDaGFyYWN0ZXJTZXRFQ0kuVkFMVUVTX1RPX0VDSS5zZXQodiwgdGhpcyk7CgkgICAgICAgIH0KCSAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgIGZvciAodmFyIG90aGVyRW5jb2RpbmdOYW1lc18xID0gX192YWx1ZXMob3RoZXJFbmNvZGluZ05hbWVzKSwgb3RoZXJFbmNvZGluZ05hbWVzXzFfMSA9IG90aGVyRW5jb2RpbmdOYW1lc18xLm5leHQoKTsgIW90aGVyRW5jb2RpbmdOYW1lc18xXzEuZG9uZTsgb3RoZXJFbmNvZGluZ05hbWVzXzFfMSA9IG90aGVyRW5jb2RpbmdOYW1lc18xLm5leHQoKSkgewoJICAgICAgICAgICAgICAgIHZhciBvdGhlck5hbWUgPSBvdGhlckVuY29kaW5nTmFtZXNfMV8xLnZhbHVlOwoJICAgICAgICAgICAgICAgIENoYXJhY3RlclNldEVDSS5OQU1FX1RPX0VDSS5zZXQob3RoZXJOYW1lLCB0aGlzKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfQoJICAgICAgICBmaW5hbGx5IHsKCSAgICAgICAgICAgIHRyeSB7CgkgICAgICAgICAgICAgICAgaWYgKG90aGVyRW5jb2RpbmdOYW1lc18xXzEgJiYgIW90aGVyRW5jb2RpbmdOYW1lc18xXzEuZG9uZSAmJiAoX2EgPSBvdGhlckVuY29kaW5nTmFtZXNfMS5yZXR1cm4pKSBfYS5jYWxsKG90aGVyRW5jb2RpbmdOYW1lc18xKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH0KCSAgICAgICAgfQoJICAgIH0KCSAgICAvLyBDaGFyYWN0ZXJTZXRFQ0kodmFsdWU6IG51bWJlciAvKmludCovKSB7CgkgICAgLy8gICB0aGlzKG5ldyBJbnQzMkFycmF5IHt2YWx1ZX0pCgkgICAgLy8gfQoJICAgIC8vIENoYXJhY3RlclNldEVDSSh2YWx1ZTogbnVtYmVyIC8qaW50Ki8sIFN0cmluZy4uLiBvdGhlckVuY29kaW5nTmFtZXMpIHsKCSAgICAvLyAgIHRoaXMudmFsdWVzID0gbmV3IEludDMyQXJyYXkge3ZhbHVlfQoJICAgIC8vICAgdGhpcy5vdGhlckVuY29kaW5nTmFtZXMgPSBvdGhlckVuY29kaW5nTmFtZXMKCSAgICAvLyB9CgkgICAgLy8gQ2hhcmFjdGVyU2V0RUNJKHZhbHVlczogSW50MzJBcnJheSwgU3RyaW5nLi4uIG90aGVyRW5jb2RpbmdOYW1lcykgewoJICAgIC8vICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXMKCSAgICAvLyAgIHRoaXMub3RoZXJFbmNvZGluZ05hbWVzID0gb3RoZXJFbmNvZGluZ05hbWVzCgkgICAgLy8gfQoJICAgIENoYXJhY3RlclNldEVDSS5wcm90b3R5cGUuZ2V0VmFsdWVJZGVudGlmaWVyID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUlkZW50aWZpZXI7CgkgICAgfTsKCSAgICBDaGFyYWN0ZXJTZXRFQ0kucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLm5hbWU7CgkgICAgfTsKCSAgICBDaGFyYWN0ZXJTZXRFQ0kucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcGFyYW0gdmFsdWUgY2hhcmFjdGVyIHNldCBFQ0kgdmFsdWUKCSAgICAgKiBAcmV0dXJuIHtAY29kZSBDaGFyYWN0ZXJTZXRFQ0l9IHJlcHJlc2VudGluZyBFQ0kgb2YgZ2l2ZW4gdmFsdWUsIG9yIG51bGwgaWYgaXQgaXMgbGVnYWwgYnV0CgkgICAgICogICB1bnN1cHBvcnRlZAoJICAgICAqIEB0aHJvd3MgRm9ybWF0RXhjZXB0aW9uIGlmIEVDSSB2YWx1ZSBpcyBpbnZhbGlkCgkgICAgICovCgkgICAgQ2hhcmFjdGVyU2V0RUNJLmdldENoYXJhY3RlclNldEVDSUJ5VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUgLyppbnQqLykgewoJICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID49IDkwMCkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xLmRlZmF1bHQoJ2luY29yZWN0IHZhbHVlJyk7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIGNoYXJhY3RlclNldCA9IENoYXJhY3RlclNldEVDSS5WQUxVRVNfVE9fRUNJLmdldCh2YWx1ZSk7CgkgICAgICAgIGlmICh1bmRlZmluZWQgPT09IGNoYXJhY3RlclNldCkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xLmRlZmF1bHQoJ2luY29yZWN0IHZhbHVlJyk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGNoYXJhY3RlclNldDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEBwYXJhbSBuYW1lIGNoYXJhY3RlciBzZXQgRUNJIGVuY29kaW5nIG5hbWUKCSAgICAgKiBAcmV0dXJuIENoYXJhY3RlclNldEVDSSByZXByZXNlbnRpbmcgRUNJIGZvciBjaGFyYWN0ZXIgZW5jb2RpbmcsIG9yIG51bGwgaWYgaXQgaXMgbGVnYWwKCSAgICAgKiAgIGJ1dCB1bnN1cHBvcnRlZAoJICAgICAqLwoJICAgIENoYXJhY3RlclNldEVDSS5nZXRDaGFyYWN0ZXJTZXRFQ0lCeU5hbWUgPSBmdW5jdGlvbiAobmFtZSkgewoJICAgICAgICB2YXIgY2hhcmFjdGVyU2V0ID0gQ2hhcmFjdGVyU2V0RUNJLk5BTUVfVE9fRUNJLmdldChuYW1lKTsKCSAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY2hhcmFjdGVyU2V0KSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdCgnaW5jb3JlY3QgdmFsdWUnKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gY2hhcmFjdGVyU2V0OwoJICAgIH07CgkgICAgQ2hhcmFjdGVyU2V0RUNJLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAobykgewoJICAgICAgICBpZiAoIShvIGluc3RhbmNlb2YgQ2hhcmFjdGVyU2V0RUNJKSkgewoJICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9CgkgICAgICAgIHZhciBvdGhlciA9IG87CgkgICAgICAgIHJldHVybiB0aGlzLmdldE5hbWUoKSA9PT0gb3RoZXIuZ2V0TmFtZSgpOwoJICAgIH07CgkgICAgQ2hhcmFjdGVyU2V0RUNJLlZBTFVFX0lERU5USUZJRVJfVE9fRUNJID0gbmV3IE1hcCgpOwoJICAgIENoYXJhY3RlclNldEVDSS5WQUxVRVNfVE9fRUNJID0gbmV3IE1hcCgpOwoJICAgIENoYXJhY3RlclNldEVDSS5OQU1FX1RPX0VDSSA9IG5ldyBNYXAoKTsKCSAgICAvLyBFbnVtIG5hbWUgaXMgYSBKYXZhIGVuY29kaW5nIHZhbGlkIGZvciBqYXZhLmxhbmcgYW5kIGphdmEuaW8KCSAgICAvLyBUWVBFU0NSSVBUUE9SVDogY2hhbmdlZCB0aGUgbWFpbiBsYWJlbCBmb3IgSVNPIGFzIHRoZSBUZXh0RW5jb2RlciBkaWQgbm90IHJlY29nbml6ZWQgdGhlbSBpbiB0aGUgZm9ybSBmcm9tIGphdmEKCSAgICAvLyAoZWcgSVNPODg1OV8xIG11c3QgYmUgSVNPODg1OTEgb3IgSVNPODg1OS0xIG9yIElTTy04ODU5LTEpCgkgICAgLy8gbGF0ZXIgb246IHdlbGwsIGV4Y2VwdCAxNiB3aWNoIGRvZXMgbm90IHdvcmsgd2l0aCBJU084ODU5MTYgc28gdXNlZCBJU08tODg1OS0xIGZvcm0gZm9yIGRlZmF1bHQKCSAgICBDaGFyYWN0ZXJTZXRFQ0kuQ3A0MzcgPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuQ3A0MzcsIEludDMyQXJyYXkuZnJvbShbMCwgMl0pLCAnQ3A0MzcnKTsKCSAgICBDaGFyYWN0ZXJTZXRFQ0kuSVNPODg1OV8xID0gbmV3IENoYXJhY3RlclNldEVDSShDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzLklTTzg4NTlfMSwgSW50MzJBcnJheS5mcm9tKFsxLCAzXSksICdJU08tODg1OS0xJywgJ0lTTzg4NTkxJywgJ0lTTzg4NTlfMScpOwoJICAgIENoYXJhY3RlclNldEVDSS5JU084ODU5XzIgPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuSVNPODg1OV8yLCA0LCAnSVNPLTg4NTktMicsICdJU084ODU5MicsICdJU084ODU5XzInKTsKCSAgICBDaGFyYWN0ZXJTZXRFQ0kuSVNPODg1OV8zID0gbmV3IENoYXJhY3RlclNldEVDSShDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzLklTTzg4NTlfMywgNSwgJ0lTTy04ODU5LTMnLCAnSVNPODg1OTMnLCAnSVNPODg1OV8zJyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLklTTzg4NTlfNCA9IG5ldyBDaGFyYWN0ZXJTZXRFQ0koQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycy5JU084ODU5XzQsIDYsICdJU08tODg1OS00JywgJ0lTTzg4NTk0JywgJ0lTTzg4NTlfNCcpOwoJICAgIENoYXJhY3RlclNldEVDSS5JU084ODU5XzUgPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuSVNPODg1OV81LCA3LCAnSVNPLTg4NTktNScsICdJU084ODU5NScsICdJU084ODU5XzUnKTsKCSAgICBDaGFyYWN0ZXJTZXRFQ0kuSVNPODg1OV82ID0gbmV3IENoYXJhY3RlclNldEVDSShDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzLklTTzg4NTlfNiwgOCwgJ0lTTy04ODU5LTYnLCAnSVNPODg1OTYnLCAnSVNPODg1OV82Jyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLklTTzg4NTlfNyA9IG5ldyBDaGFyYWN0ZXJTZXRFQ0koQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycy5JU084ODU5XzcsIDksICdJU08tODg1OS03JywgJ0lTTzg4NTk3JywgJ0lTTzg4NTlfNycpOwoJICAgIENoYXJhY3RlclNldEVDSS5JU084ODU5XzggPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuSVNPODg1OV84LCAxMCwgJ0lTTy04ODU5LTgnLCAnSVNPODg1OTgnLCAnSVNPODg1OV84Jyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLklTTzg4NTlfOSA9IG5ldyBDaGFyYWN0ZXJTZXRFQ0koQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycy5JU084ODU5XzksIDExLCAnSVNPLTg4NTktOScsICdJU084ODU5OScsICdJU084ODU5XzknKTsKCSAgICBDaGFyYWN0ZXJTZXRFQ0kuSVNPODg1OV8xMCA9IG5ldyBDaGFyYWN0ZXJTZXRFQ0koQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycy5JU084ODU5XzEwLCAxMiwgJ0lTTy04ODU5LTEwJywgJ0lTTzg4NTkxMCcsICdJU084ODU5XzEwJyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLklTTzg4NTlfMTEgPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuSVNPODg1OV8xMSwgMTMsICdJU08tODg1OS0xMScsICdJU084ODU5MTEnLCAnSVNPODg1OV8xMScpOwoJICAgIENoYXJhY3RlclNldEVDSS5JU084ODU5XzEzID0gbmV3IENoYXJhY3RlclNldEVDSShDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzLklTTzg4NTlfMTMsIDE1LCAnSVNPLTg4NTktMTMnLCAnSVNPODg1OTEzJywgJ0lTTzg4NTlfMTMnKTsKCSAgICBDaGFyYWN0ZXJTZXRFQ0kuSVNPODg1OV8xNCA9IG5ldyBDaGFyYWN0ZXJTZXRFQ0koQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycy5JU084ODU5XzE0LCAxNiwgJ0lTTy04ODU5LTE0JywgJ0lTTzg4NTkxNCcsICdJU084ODU5XzE0Jyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLklTTzg4NTlfMTUgPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuSVNPODg1OV8xNSwgMTcsICdJU08tODg1OS0xNScsICdJU084ODU5MTUnLCAnSVNPODg1OV8xNScpOwoJICAgIENoYXJhY3RlclNldEVDSS5JU084ODU5XzE2ID0gbmV3IENoYXJhY3RlclNldEVDSShDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzLklTTzg4NTlfMTYsIDE4LCAnSVNPLTg4NTktMTYnLCAnSVNPODg1OTE2JywgJ0lTTzg4NTlfMTYnKTsKCSAgICBDaGFyYWN0ZXJTZXRFQ0kuU0pJUyA9IG5ldyBDaGFyYWN0ZXJTZXRFQ0koQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycy5TSklTLCAyMCwgJ1NKSVMnLCAnU2hpZnRfSklTJyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLkNwMTI1MCA9IG5ldyBDaGFyYWN0ZXJTZXRFQ0koQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycy5DcDEyNTAsIDIxLCAnQ3AxMjUwJywgJ3dpbmRvd3MtMTI1MCcpOwoJICAgIENoYXJhY3RlclNldEVDSS5DcDEyNTEgPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuQ3AxMjUxLCAyMiwgJ0NwMTI1MScsICd3aW5kb3dzLTEyNTEnKTsKCSAgICBDaGFyYWN0ZXJTZXRFQ0kuQ3AxMjUyID0gbmV3IENoYXJhY3RlclNldEVDSShDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzLkNwMTI1MiwgMjMsICdDcDEyNTInLCAnd2luZG93cy0xMjUyJyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLkNwMTI1NiA9IG5ldyBDaGFyYWN0ZXJTZXRFQ0koQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycy5DcDEyNTYsIDI0LCAnQ3AxMjU2JywgJ3dpbmRvd3MtMTI1NicpOwoJICAgIENoYXJhY3RlclNldEVDSS5Vbmljb2RlQmlnVW5tYXJrZWQgPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuVW5pY29kZUJpZ1VubWFya2VkLCAyNSwgJ1VuaWNvZGVCaWdVbm1hcmtlZCcsICdVVEYtMTZCRScsICdVbmljb2RlQmlnJyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLlVURjggPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuVVRGOCwgMjYsICdVVEY4JywgJ1VURi04Jyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLkFTQ0lJID0gbmV3IENoYXJhY3RlclNldEVDSShDaGFyYWN0ZXJTZXRWYWx1ZUlkZW50aWZpZXJzLkFTQ0lJLCBJbnQzMkFycmF5LmZyb20oWzI3LCAxNzBdKSwgJ0FTQ0lJJywgJ1VTLUFTQ0lJJyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLkJpZzUgPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuQmlnNSwgMjgsICdCaWc1Jyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLkdCMTgwMzAgPSBuZXcgQ2hhcmFjdGVyU2V0RUNJKENoYXJhY3RlclNldFZhbHVlSWRlbnRpZmllcnMuR0IxODAzMCwgMjksICdHQjE4MDMwJywgJ0dCMjMxMicsICdFVUNfQ04nLCAnR0JLJyk7CgkgICAgQ2hhcmFjdGVyU2V0RUNJLkVVQ19LUiA9IG5ldyBDaGFyYWN0ZXJTZXRFQ0koQ2hhcmFjdGVyU2V0VmFsdWVJZGVudGlmaWVycy5FVUNfS1IsIDMwLCAnRVVDX0tSJywgJ0VVQy1LUicpOwoJICAgIHJldHVybiBDaGFyYWN0ZXJTZXRFQ0k7Cgl9KCkpOwoJZXhwb3J0cy5kZWZhdWx0ID0gQ2hhcmFjdGVyU2V0RUNJOwoKCX0oQ2hhcmFjdGVyU2V0RUNJKSk7CgoJdmFyIFN0cmluZ0VuY29kaW5nJDEgPSB7fTsKCgl2YXIgVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb24kMSA9IHt9OwoKCXZhciBfX2V4dGVuZHMkZSA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7CgkgICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CgkgICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8CgkgICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTsKCSAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgfTsKCSAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9CgkgICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTsKCSAgICB9OwoJfSkoKTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbiQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgRXhjZXB0aW9uXzEkNiA9IEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiBDdXN0b20gRXJyb3IgY2xhc3Mgb2YgdHlwZSBFeGNlcHRpb24uCgkgKi8KCXZhciBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHsKCSAgICBfX2V4dGVuZHMkZShVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbiwgX3N1cGVyKTsKCSAgICBmdW5jdGlvbiBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbigpIHsKCSAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzOwoJICAgIH0KCSAgICBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbi5raW5kID0gJ1Vuc3VwcG9ydGVkT3BlcmF0aW9uRXhjZXB0aW9uJzsKCSAgICByZXR1cm4gVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb247Cgl9KEV4Y2VwdGlvbl8xJDYuZGVmYXVsdCkpOwoJVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb24kMS5kZWZhdWx0ID0gVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb247CgoJT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZ0VuY29kaW5nJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCXZhciBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbl8xJDEgPSBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbiQxOwoJdmFyIENoYXJhY3RlclNldEVDSV8xJDIgPSBDaGFyYWN0ZXJTZXRFQ0k7CgkvKioKCSAqIFJlc3BvbnNpYmxlIGZvciBlbi9kZWNvZGluZyBzdHJpbmdzLgoJICovCgl2YXIgU3RyaW5nRW5jb2RpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgZnVuY3Rpb24gU3RyaW5nRW5jb2RpbmcoKSB7CgkgICAgfQoJICAgIC8qKgoJICAgICAqIERlY29kZXMgc29tZSBVaW50OEFycmF5IHRvIGEgc3RyaW5nIGZvcm1hdC4KCSAgICAgKi8KCSAgICBTdHJpbmdFbmNvZGluZy5kZWNvZGUgPSBmdW5jdGlvbiAoYnl0ZXMsIGVuY29kaW5nKSB7CgkgICAgICAgIHZhciBlbmNvZGluZ05hbWUgPSB0aGlzLmVuY29kaW5nTmFtZShlbmNvZGluZyk7CgkgICAgICAgIGlmICh0aGlzLmN1c3RvbURlY29kZXIpIHsKCSAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbURlY29kZXIoYnl0ZXMsIGVuY29kaW5nTmFtZSk7CgkgICAgICAgIH0KCSAgICAgICAgLy8gSW5jcmVhc2VzIGJyb3dzZXIgc3VwcG9ydC4KCSAgICAgICAgaWYgKHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5zaG91bGREZWNvZGVPbkZhbGxiYWNrKGVuY29kaW5nTmFtZSkpIHsKCSAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZUZhbGxiYWNrKGJ5dGVzLCBlbmNvZGluZ05hbWUpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoZW5jb2RpbmdOYW1lKS5kZWNvZGUoYnl0ZXMpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQ2hlY2tzIGlmIHRoZSBkZWNvZGluZyBtZXRob2Qgc2hvdWxkIHVzZSB0aGUgZmFsbGJhY2sgZm9yIGRlY29kaW5nCgkgICAgICogb25jZSBOb2RlIFRleHREZWNvZGVyIGRvZXNuJ3Qgc3VwcG9ydCBhbGwgZW5jb2RpbmcgZm9ybWF0cy4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBlbmNvZGluZ05hbWUKCSAgICAgKi8KCSAgICBTdHJpbmdFbmNvZGluZy5zaG91bGREZWNvZGVPbkZhbGxiYWNrID0gZnVuY3Rpb24gKGVuY29kaW5nTmFtZSkgewoJICAgICAgICByZXR1cm4gIVN0cmluZ0VuY29kaW5nLmlzQnJvd3NlcigpICYmIGVuY29kaW5nTmFtZSA9PT0gJ0lTTy04ODU5LTEnOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogRW5jb2RlcyBzb21lIHN0cmluZyBpbnRvIGEgVWludDhBcnJheS4KCSAgICAgKi8KCSAgICBTdHJpbmdFbmNvZGluZy5lbmNvZGUgPSBmdW5jdGlvbiAocywgZW5jb2RpbmcpIHsKCSAgICAgICAgdmFyIGVuY29kaW5nTmFtZSA9IHRoaXMuZW5jb2RpbmdOYW1lKGVuY29kaW5nKTsKCSAgICAgICAgaWYgKHRoaXMuY3VzdG9tRW5jb2RlcikgewoJICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tRW5jb2RlcihzLCBlbmNvZGluZ05hbWUpOwoJICAgICAgICB9CgkgICAgICAgIC8vIEluY3JlYXNlcyBicm93c2VyIHN1cHBvcnQuCgkgICAgICAgIGlmICh0eXBlb2YgVGV4dEVuY29kZXIgPT09ICd1bmRlZmluZWQnKSB7CgkgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmNvZGVGYWxsYmFjayhzKTsKCSAgICAgICAgfQoJICAgICAgICAvLyBUZXh0RW5jb2RlciBvbmx5IGVuY29kZXMgdG8gVVRGOCBieSBkZWZhdWx0IGFzIHNwZWNpZmllZCBieSBlbmNvZGluZy5zcGVjLndoYXR3Zy5vcmcKCSAgICAgICAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzKTsKCSAgICB9OwoJICAgIFN0cmluZ0VuY29kaW5nLmlzQnJvd3NlciA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHdpbmRvdykgPT09ICdbb2JqZWN0IFdpbmRvd10nKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFJldHVybnMgdGhlIHN0cmluZyB2YWx1ZSBmcm9tIHNvbWUgZW5jb2RpbmcgY2hhcmFjdGVyIHNldC4KCSAgICAgKi8KCSAgICBTdHJpbmdFbmNvZGluZy5lbmNvZGluZ05hbWUgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHsKCSAgICAgICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycKCSAgICAgICAgICAgID8gZW5jb2RpbmcKCSAgICAgICAgICAgIDogZW5jb2RpbmcuZ2V0TmFtZSgpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogUmV0dXJucyBjaGFyYWN0ZXIgc2V0IGZyb20gc29tZSBlbmNvZGluZyBjaGFyYWN0ZXIgc2V0LgoJICAgICAqLwoJICAgIFN0cmluZ0VuY29kaW5nLmVuY29kaW5nQ2hhcmFjdGVyU2V0ID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7CgkgICAgICAgIGlmIChlbmNvZGluZyBpbnN0YW5jZW9mIENoYXJhY3RlclNldEVDSV8xJDIuZGVmYXVsdCkgewoJICAgICAgICAgICAgcmV0dXJuIGVuY29kaW5nOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBDaGFyYWN0ZXJTZXRFQ0lfMSQyLmRlZmF1bHQuZ2V0Q2hhcmFjdGVyU2V0RUNJQnlOYW1lKGVuY29kaW5nKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFJ1bnMgYSBmYWxsYmFjayBmb3IgdGhlIG5hdGl2ZSBkZWNvZGluZyBmdW5jaW9uLgoJICAgICAqLwoJICAgIFN0cmluZ0VuY29kaW5nLmRlY29kZUZhbGxiYWNrID0gZnVuY3Rpb24gKGJ5dGVzLCBlbmNvZGluZykgewoJICAgICAgICB2YXIgY2hhcmFjdGVyU2V0ID0gdGhpcy5lbmNvZGluZ0NoYXJhY3RlclNldChlbmNvZGluZyk7CgkgICAgICAgIGlmIChTdHJpbmdFbmNvZGluZy5pc0RlY29kZUZhbGxiYWNrU3VwcG9ydGVkKGNoYXJhY3RlclNldCkpIHsKCSAgICAgICAgICAgIHZhciBzID0gJyc7CgkgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoXzEgPSBieXRlcy5sZW5ndGg7IGkgPCBsZW5ndGhfMTsgaSsrKSB7CgkgICAgICAgICAgICAgICAgdmFyIGggPSBieXRlc1tpXS50b1N0cmluZygxNik7CgkgICAgICAgICAgICAgICAgaWYgKGgubGVuZ3RoIDwgMikgewoJICAgICAgICAgICAgICAgICAgICBoID0gJzAnICsgaDsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgcyArPSAnJScgKyBoOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzKTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoY2hhcmFjdGVyU2V0LmVxdWFscyhDaGFyYWN0ZXJTZXRFQ0lfMSQyLmRlZmF1bHQuVW5pY29kZUJpZ1VubWFya2VkKSkgewoJICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQxNkFycmF5KGJ5dGVzLmJ1ZmZlcikpOwoJICAgICAgICB9CgkgICAgICAgIHRocm93IG5ldyBVbnN1cHBvcnRlZE9wZXJhdGlvbkV4Y2VwdGlvbl8xJDEuZGVmYXVsdCgiRW5jb2RpbmcgIiArIHRoaXMuZW5jb2RpbmdOYW1lKGVuY29kaW5nKSArICIgbm90IHN1cHBvcnRlZCBieSBmYWxsYmFjay4iKTsKCSAgICB9OwoJICAgIFN0cmluZ0VuY29kaW5nLmlzRGVjb2RlRmFsbGJhY2tTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoY2hhcmFjdGVyU2V0KSB7CgkgICAgICAgIHJldHVybiBjaGFyYWN0ZXJTZXQuZXF1YWxzKENoYXJhY3RlclNldEVDSV8xJDIuZGVmYXVsdC5VVEY4KSB8fAoJICAgICAgICAgICAgY2hhcmFjdGVyU2V0LmVxdWFscyhDaGFyYWN0ZXJTZXRFQ0lfMSQyLmRlZmF1bHQuSVNPODg1OV8xKSB8fAoJICAgICAgICAgICAgY2hhcmFjdGVyU2V0LmVxdWFscyhDaGFyYWN0ZXJTZXRFQ0lfMSQyLmRlZmF1bHQuQVNDSUkpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogUnVucyBhIGZhbGxiYWNrIGZvciB0aGUgbmF0aXZlIGVuY29kaW5nIGZ1bmNpb24uCgkgICAgICoKCSAgICAgKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNzE5Mjg0NS80MzY3NjgzCgkgICAgICovCgkgICAgU3RyaW5nRW5jb2RpbmcuZW5jb2RlRmFsbGJhY2sgPSBmdW5jdGlvbiAocykgewoJICAgICAgICB2YXIgZW5jb2RlZFVSSXN0cmluZyA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHMpKSk7CgkgICAgICAgIHZhciBjaGFyTGlzdCA9IGVuY29kZWRVUklzdHJpbmcuc3BsaXQoJycpOwoJICAgICAgICB2YXIgdWludEFycmF5ID0gW107CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhckxpc3QubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgICAgIHVpbnRBcnJheS5wdXNoKGNoYXJMaXN0W2ldLmNoYXJDb2RlQXQoMCkpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh1aW50QXJyYXkpOwoJICAgIH07CgkgICAgcmV0dXJuIFN0cmluZ0VuY29kaW5nOwoJfSgpKTsKCVN0cmluZ0VuY29kaW5nJDEuZGVmYXVsdCA9IFN0cmluZ0VuY29kaW5nOwoKCS8qCgkgKiBDb3B5cmlnaHQgKEMpIDIwMTAgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZ1V0aWxzJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcuY29tbW9uIHsqLwoJLyppbXBvcnQgamF2YS5uaW8uY2hhcnNldC5DaGFyc2V0OyovCgkvKmltcG9ydCBqYXZhLnV0aWwuTWFwOyovCgl2YXIgRGVjb2RlSGludFR5cGVfMSQzID0gRGVjb2RlSGludFR5cGUkMTsKCXZhciBDaGFyYWN0ZXJTZXRFQ0lfMSQxID0gQ2hhcmFjdGVyU2V0RUNJOwoJdmFyIFN0cmluZ0VuY29kaW5nXzEkMSA9IFN0cmluZ0VuY29kaW5nJDE7CgkvKioKCSAqIENvbW1vbiBzdHJpbmctcmVsYXRlZCBmdW5jdGlvbnMuCgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqIEBhdXRob3IgQWxleCBEdXByZQoJICovCgl2YXIgU3RyaW5nVXRpbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgZnVuY3Rpb24gU3RyaW5nVXRpbHMoKSB7CgkgICAgfQoJICAgIC8vIFNISUZUX0pJUy5lcXVhbHNJZ25vcmVDYXNlKFBMQVRGT1JNX0RFRkFVTFRfRU5DT0RJTkcpIHx8CgkgICAgLy8gRVVDX0pQLmVxdWFsc0lnbm9yZUNhc2UoUExBVEZPUk1fREVGQVVMVF9FTkNPRElORyk7CgkgICAgU3RyaW5nVXRpbHMuY2FzdEFzTm9uVXRmOENoYXIgPSBmdW5jdGlvbiAoY29kZSwgZW5jb2RpbmcpIHsKCSAgICAgICAgaWYgKGVuY29kaW5nID09PSB2b2lkIDApIHsgZW5jb2RpbmcgPSBudWxsOyB9CgkgICAgICAgIC8vIElTTyA4ODU5LTEgaXMgdGhlIEphdmEgZGVmYXVsdCBhcyBVVEYtOCBpcyBKYXZhU2NyaXB0cwoJICAgICAgICAvLyB5b3UgY2FuIHNlZSB0aGlzIG1ldGhvZCBhcyBhIEphdmEgdmVyc2lvbiBvZiBTdHJpbmcuZnJvbUNoYXJDb2RlCgkgICAgICAgIHZhciBlID0gZW5jb2RpbmcgPyBlbmNvZGluZy5nZXROYW1lKCkgOiB0aGlzLklTTzg4NTkxOwoJICAgICAgICAvLyB1c2UgcGFzc2VkIGZvcm1hdCAoZnJvbUNoYXJDb2RlIHdpbGwgcmV0dXJuIFVURjggZW5jb2RpbmcpCgkgICAgICAgIHJldHVybiBTdHJpbmdFbmNvZGluZ18xJDEuZGVmYXVsdC5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoW2NvZGVdKSwgZSk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcGFyYW0gYnl0ZXMgYnl0ZXMgZW5jb2RpbmcgYSBzdHJpbmcsIHdob3NlIGVuY29kaW5nIHNob3VsZCBiZSBndWVzc2VkCgkgICAgICogQHBhcmFtIGhpbnRzIGRlY29kZSBoaW50cyBpZiBhcHBsaWNhYmxlCgkgICAgICogQHJldHVybiBuYW1lIG9mIGd1ZXNzZWQgZW5jb2Rpbmc7IGF0IHRoZSBtb21lbnQgd2lsbCBvbmx5IGd1ZXNzIG9uZSBvZjoKCSAgICAgKiAge0BsaW5rICNTSElGVF9KSVN9LCB7QGxpbmsgI1VURjh9LCB7QGxpbmsgI0lTTzg4NTkxfSwgb3IgdGhlIHBsYXRmb3JtCgkgICAgICogIGRlZmF1bHQgZW5jb2RpbmcgaWYgbm9uZSBvZiB0aGVzZSBjYW4gcG9zc2libHkgYmUgY29ycmVjdAoJICAgICAqLwoJICAgIFN0cmluZ1V0aWxzLmd1ZXNzRW5jb2RpbmcgPSBmdW5jdGlvbiAoYnl0ZXMsIGhpbnRzKSB7CgkgICAgICAgIGlmIChoaW50cyAhPT0gbnVsbCAmJiBoaW50cyAhPT0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZCAhPT0gaGludHMuZ2V0KERlY29kZUhpbnRUeXBlXzEkMy5kZWZhdWx0LkNIQVJBQ1RFUl9TRVQpKSB7CgkgICAgICAgICAgICByZXR1cm4gaGludHMuZ2V0KERlY29kZUhpbnRUeXBlXzEkMy5kZWZhdWx0LkNIQVJBQ1RFUl9TRVQpLnRvU3RyaW5nKCk7CgkgICAgICAgIH0KCSAgICAgICAgLy8gRm9yIG5vdywgbWVyZWx5IHRyaWVzIHRvIGRpc3Rpbmd1aXNoIElTTy04ODU5LTEsIFVURi04IGFuZCBTaGlmdF9KSVMsCgkgICAgICAgIC8vIHdoaWNoIHNob3VsZCBiZSBieSBmYXIgdGhlIG1vc3QgY29tbW9uIGVuY29kaW5ncy4KCSAgICAgICAgdmFyIGxlbmd0aCA9IGJ5dGVzLmxlbmd0aDsKCSAgICAgICAgdmFyIGNhbkJlSVNPODg1OTEgPSB0cnVlOwoJICAgICAgICB2YXIgY2FuQmVTaGlmdEpJUyA9IHRydWU7CgkgICAgICAgIHZhciBjYW5CZVVURjggPSB0cnVlOwoJICAgICAgICB2YXIgdXRmOEJ5dGVzTGVmdCA9IDA7CgkgICAgICAgIC8vIGludCB1dGY4TG93Q2hhcnMgPSAwCgkgICAgICAgIHZhciB1dGYyQnl0ZXNDaGFycyA9IDA7CgkgICAgICAgIHZhciB1dGYzQnl0ZXNDaGFycyA9IDA7CgkgICAgICAgIHZhciB1dGY0Qnl0ZXNDaGFycyA9IDA7CgkgICAgICAgIHZhciBzamlzQnl0ZXNMZWZ0ID0gMDsKCSAgICAgICAgLy8gaW50IHNqaXNMb3dDaGFycyA9IDAKCSAgICAgICAgdmFyIHNqaXNLYXRha2FuYUNoYXJzID0gMDsKCSAgICAgICAgLy8gaW50IHNqaXNEb3VibGVCeXRlc0NoYXJzID0gMAoJICAgICAgICB2YXIgc2ppc0N1ckthdGFrYW5hV29yZExlbmd0aCA9IDA7CgkgICAgICAgIHZhciBzamlzQ3VyRG91YmxlQnl0ZXNXb3JkTGVuZ3RoID0gMDsKCSAgICAgICAgdmFyIHNqaXNNYXhLYXRha2FuYVdvcmRMZW5ndGggPSAwOwoJICAgICAgICB2YXIgc2ppc01heERvdWJsZUJ5dGVzV29yZExlbmd0aCA9IDA7CgkgICAgICAgIC8vIGludCBpc29Mb3dDaGFycyA9IDAKCSAgICAgICAgLy8gaW50IGlzb0hpZ2hDaGFycyA9IDAKCSAgICAgICAgdmFyIGlzb0hpZ2hPdGhlciA9IDA7CgkgICAgICAgIHZhciB1dGY4Ym9tID0gYnl0ZXMubGVuZ3RoID4gMyAmJgoJICAgICAgICAgICAgYnl0ZXNbMF0gPT09IC8qKGJ5dGUpICovIDB4RUYgJiYKCSAgICAgICAgICAgIGJ5dGVzWzFdID09PSAvKihieXRlKSAqLyAweEJCICYmCgkgICAgICAgICAgICBieXRlc1syXSA9PT0gLyooYnl0ZSkgKi8gMHhCRjsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGggJiYgKGNhbkJlSVNPODg1OTEgfHwgY2FuQmVTaGlmdEpJUyB8fCBjYW5CZVVURjgpOyBpKyspIHsKCSAgICAgICAgICAgIHZhciB2YWx1ZSA9IGJ5dGVzW2ldICYgMHhGRjsKCSAgICAgICAgICAgIC8vIFVURi04IHN0dWZmCgkgICAgICAgICAgICBpZiAoY2FuQmVVVEY4KSB7CgkgICAgICAgICAgICAgICAgaWYgKHV0ZjhCeXRlc0xlZnQgPiAwKSB7CgkgICAgICAgICAgICAgICAgICAgIGlmICgodmFsdWUgJiAweDgwKSA9PT0gMCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgY2FuQmVVVEY4ID0gZmFsc2U7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgICAgICAgICB1dGY4Qnl0ZXNMZWZ0LS07CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgZWxzZSBpZiAoKHZhbHVlICYgMHg4MCkgIT09IDApIHsKCSAgICAgICAgICAgICAgICAgICAgaWYgKCh2YWx1ZSAmIDB4NDApID09PSAwKSB7CgkgICAgICAgICAgICAgICAgICAgICAgICBjYW5CZVVURjggPSBmYWxzZTsKCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIHV0ZjhCeXRlc0xlZnQrKzsKCSAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodmFsdWUgJiAweDIwKSA9PT0gMCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0ZjJCeXRlc0NoYXJzKys7CgkgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGY4Qnl0ZXNMZWZ0Kys7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh2YWx1ZSAmIDB4MTApID09PSAwKSB7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0ZjNCeXRlc0NoYXJzKys7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGY4Qnl0ZXNMZWZ0Kys7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodmFsdWUgJiAweDA4KSA9PT0gMCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRmNEJ5dGVzQ2hhcnMrKzsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkJlVVRGOCA9IGZhbHNlOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgfSAvLyBlbHNlIHsKCSAgICAgICAgICAgICAgICAvLyB1dGY4TG93Q2hhcnMrKwoJICAgICAgICAgICAgICAgIC8vIH0KCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIC8vIElTTy04ODU5LTEgc3R1ZmYKCSAgICAgICAgICAgIGlmIChjYW5CZUlTTzg4NTkxKSB7CgkgICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gMHg3RiAmJiB2YWx1ZSA8IDB4QTApIHsKCSAgICAgICAgICAgICAgICAgICAgY2FuQmVJU084ODU5MSA9IGZhbHNlOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IDB4OUYpIHsKCSAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgMHhDMCB8fCB2YWx1ZSA9PT0gMHhENyB8fCB2YWx1ZSA9PT0gMHhGNykgewoJICAgICAgICAgICAgICAgICAgICAgICAgaXNvSGlnaE90aGVyKys7CgkgICAgICAgICAgICAgICAgICAgIH0gLy8gZWxzZSB7CgkgICAgICAgICAgICAgICAgICAgIC8vIGlzb0hpZ2hDaGFycysrCgkgICAgICAgICAgICAgICAgICAgIC8vIH0KCSAgICAgICAgICAgICAgICB9IC8vIGVsc2UgewoJICAgICAgICAgICAgICAgIC8vIGlzb0xvd0NoYXJzKysKCSAgICAgICAgICAgICAgICAvLyB9CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICAvLyBTaGlmdF9KSVMgc3R1ZmYKCSAgICAgICAgICAgIGlmIChjYW5CZVNoaWZ0SklTKSB7CgkgICAgICAgICAgICAgICAgaWYgKHNqaXNCeXRlc0xlZnQgPiAwKSB7CgkgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IDB4NDAgfHwgdmFsdWUgPT09IDB4N0YgfHwgdmFsdWUgPiAweEZDKSB7CgkgICAgICAgICAgICAgICAgICAgICAgICBjYW5CZVNoaWZ0SklTID0gZmFsc2U7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgICAgICAgICBzamlzQnl0ZXNMZWZ0LS07CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IDB4ODAgfHwgdmFsdWUgPT09IDB4QTAgfHwgdmFsdWUgPiAweEVGKSB7CgkgICAgICAgICAgICAgICAgICAgIGNhbkJlU2hpZnRKSVMgPSBmYWxzZTsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiAweEEwICYmIHZhbHVlIDwgMHhFMCkgewoJICAgICAgICAgICAgICAgICAgICBzamlzS2F0YWthbmFDaGFycysrOwoJICAgICAgICAgICAgICAgICAgICBzamlzQ3VyRG91YmxlQnl0ZXNXb3JkTGVuZ3RoID0gMDsKCSAgICAgICAgICAgICAgICAgICAgc2ppc0N1ckthdGFrYW5hV29yZExlbmd0aCsrOwoJICAgICAgICAgICAgICAgICAgICBpZiAoc2ppc0N1ckthdGFrYW5hV29yZExlbmd0aCA+IHNqaXNNYXhLYXRha2FuYVdvcmRMZW5ndGgpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIHNqaXNNYXhLYXRha2FuYVdvcmRMZW5ndGggPSBzamlzQ3VyS2F0YWthbmFXb3JkTGVuZ3RoOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gMHg3RikgewoJICAgICAgICAgICAgICAgICAgICBzamlzQnl0ZXNMZWZ0Kys7CgkgICAgICAgICAgICAgICAgICAgIC8vIHNqaXNEb3VibGVCeXRlc0NoYXJzKysKCSAgICAgICAgICAgICAgICAgICAgc2ppc0N1ckthdGFrYW5hV29yZExlbmd0aCA9IDA7CgkgICAgICAgICAgICAgICAgICAgIHNqaXNDdXJEb3VibGVCeXRlc1dvcmRMZW5ndGgrKzsKCSAgICAgICAgICAgICAgICAgICAgaWYgKHNqaXNDdXJEb3VibGVCeXRlc1dvcmRMZW5ndGggPiBzamlzTWF4RG91YmxlQnl0ZXNXb3JkTGVuZ3RoKSB7CgkgICAgICAgICAgICAgICAgICAgICAgICBzamlzTWF4RG91YmxlQnl0ZXNXb3JkTGVuZ3RoID0gc2ppc0N1ckRvdWJsZUJ5dGVzV29yZExlbmd0aDsKCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICAgICAgLy8gc2ppc0xvd0NoYXJzKysKCSAgICAgICAgICAgICAgICAgICAgc2ppc0N1ckthdGFrYW5hV29yZExlbmd0aCA9IDA7CgkgICAgICAgICAgICAgICAgICAgIHNqaXNDdXJEb3VibGVCeXRlc1dvcmRMZW5ndGggPSAwOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICBpZiAoY2FuQmVVVEY4ICYmIHV0ZjhCeXRlc0xlZnQgPiAwKSB7CgkgICAgICAgICAgICBjYW5CZVVURjggPSBmYWxzZTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoY2FuQmVTaGlmdEpJUyAmJiBzamlzQnl0ZXNMZWZ0ID4gMCkgewoJICAgICAgICAgICAgY2FuQmVTaGlmdEpJUyA9IGZhbHNlOwoJICAgICAgICB9CgkgICAgICAgIC8vIEVhc3kgLS0gaWYgdGhlcmUgaXMgQk9NIG9yIGF0IGxlYXN0IDEgdmFsaWQgbm90LXNpbmdsZSBieXRlIGNoYXJhY3RlciAoYW5kIG5vIGV2aWRlbmNlIGl0IGNhbid0IGJlIFVURi04KSwgZG9uZQoJICAgICAgICBpZiAoY2FuQmVVVEY4ICYmICh1dGY4Ym9tIHx8IHV0ZjJCeXRlc0NoYXJzICsgdXRmM0J5dGVzQ2hhcnMgKyB1dGY0Qnl0ZXNDaGFycyA+IDApKSB7CgkgICAgICAgICAgICByZXR1cm4gU3RyaW5nVXRpbHMuVVRGODsKCSAgICAgICAgfQoJICAgICAgICAvLyBFYXN5IC0tIGlmIGFzc3VtaW5nIFNoaWZ0X0pJUyBvciBhdCBsZWFzdCAzIHZhbGlkIGNvbnNlY3V0aXZlIG5vdC1hc2NpaSBjaGFyYWN0ZXJzIChhbmQgbm8gZXZpZGVuY2UgaXQgY2FuJ3QgYmUpLCBkb25lCgkgICAgICAgIGlmIChjYW5CZVNoaWZ0SklTICYmIChTdHJpbmdVdGlscy5BU1NVTUVfU0hJRlRfSklTIHx8IHNqaXNNYXhLYXRha2FuYVdvcmRMZW5ndGggPj0gMyB8fCBzamlzTWF4RG91YmxlQnl0ZXNXb3JkTGVuZ3RoID49IDMpKSB7CgkgICAgICAgICAgICByZXR1cm4gU3RyaW5nVXRpbHMuU0hJRlRfSklTOwoJICAgICAgICB9CgkgICAgICAgIC8vIERpc3Rpbmd1aXNoaW5nIFNoaWZ0X0pJUyBhbmQgSVNPLTg4NTktMSBjYW4gYmUgYSBsaXR0bGUgdG91Z2ggZm9yIHNob3J0IHdvcmRzLiBUaGUgY3J1ZGUgaGV1cmlzdGljIGlzOgoJICAgICAgICAvLyAtIElmIHdlIHNhdwoJICAgICAgICAvLyAgIC0gb25seSB0d28gY29uc2VjdXRpdmUga2F0YWthbmEgY2hhcnMgaW4gdGhlIHdob2xlIHRleHQsIG9yCgkgICAgICAgIC8vICAgLSBhdCBsZWFzdCAxMCUgb2YgYnl0ZXMgdGhhdCBjb3VsZCBiZSAidXBwZXIiIG5vdC1hbHBoYW51bWVyaWMgTGF0aW4xLAoJICAgICAgICAvLyAtIHRoZW4gd2UgY29uY2x1ZGUgU2hpZnRfSklTLCBlbHNlIElTTy04ODU5LTEKCSAgICAgICAgaWYgKGNhbkJlSVNPODg1OTEgJiYgY2FuQmVTaGlmdEpJUykgewoJICAgICAgICAgICAgcmV0dXJuIChzamlzTWF4S2F0YWthbmFXb3JkTGVuZ3RoID09PSAyICYmIHNqaXNLYXRha2FuYUNoYXJzID09PSAyKSB8fCBpc29IaWdoT3RoZXIgKiAxMCA+PSBsZW5ndGgKCSAgICAgICAgICAgICAgICA/IFN0cmluZ1V0aWxzLlNISUZUX0pJUyA6IFN0cmluZ1V0aWxzLklTTzg4NTkxOwoJICAgICAgICB9CgkgICAgICAgIC8vIE90aGVyd2lzZSwgdHJ5IGluIG9yZGVyIElTTy04ODU5LTEsIFNoaWZ0IEpJUywgVVRGLTggYW5kIGZhbGwgYmFjayB0byBkZWZhdWx0IHBsYXRmb3JtIGVuY29kaW5nCgkgICAgICAgIGlmIChjYW5CZUlTTzg4NTkxKSB7CgkgICAgICAgICAgICByZXR1cm4gU3RyaW5nVXRpbHMuSVNPODg1OTE7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGNhbkJlU2hpZnRKSVMpIHsKCSAgICAgICAgICAgIHJldHVybiBTdHJpbmdVdGlscy5TSElGVF9KSVM7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGNhbkJlVVRGOCkgewoJICAgICAgICAgICAgcmV0dXJuIFN0cmluZ1V0aWxzLlVURjg7CgkgICAgICAgIH0KCSAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0YWtlIGEgd2lsZCBndWVzcyB3aXRoIHBsYXRmb3JtIGVuY29kaW5nCgkgICAgICAgIHJldHVybiBTdHJpbmdVdGlscy5QTEFURk9STV9ERUZBVUxUX0VOQ09ESU5HOwoJICAgIH07CgkgICAgLyoqCgkgICAgICoKCSAgICAgKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMzQzOTcxMS80MzY3NjgzCgkgICAgICoKCSAgICAgKiBAcGFyYW0gYXBwZW5kIFRoZSBuZXcgc3RyaW5nIHRvIGFwcGVuZC4KCSAgICAgKiBAcGFyYW0gYXJncyBBcmd1bWV0cyB2YWx1ZXMgdG8gYmUgZm9ybWF0ZWQuCgkgICAgICovCgkgICAgU3RyaW5nVXRpbHMuZm9ybWF0ID0gZnVuY3Rpb24gKGFwcGVuZCkgewoJICAgICAgICB2YXIgYXJncyA9IFtdOwoJICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykgewoJICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgaSA9IC0xOwoJICAgICAgICBmdW5jdGlvbiBjYWxsYmFjayhleHAsIHAwLCBwMSwgcDIsIHAzLCBwNCkgewoJICAgICAgICAgICAgaWYgKGV4cCA9PT0gJyUlJykKCSAgICAgICAgICAgICAgICByZXR1cm4gJyUnOwoJICAgICAgICAgICAgaWYgKGFyZ3NbKytpXSA9PT0gdW5kZWZpbmVkKQoJICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7CgkgICAgICAgICAgICBleHAgPSBwMiA/IHBhcnNlSW50KHAyLnN1YnN0cigxKSkgOiB1bmRlZmluZWQ7CgkgICAgICAgICAgICB2YXIgYmFzZSA9IHAzID8gcGFyc2VJbnQocDMuc3Vic3RyKDEpKSA6IHVuZGVmaW5lZDsKCSAgICAgICAgICAgIHZhciB2YWw7CgkgICAgICAgICAgICBzd2l0Y2ggKHA0KSB7CgkgICAgICAgICAgICAgICAgY2FzZSAncyc6CgkgICAgICAgICAgICAgICAgICAgIHZhbCA9IGFyZ3NbaV07CgkgICAgICAgICAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgICAgICAgIGNhc2UgJ2MnOgoJICAgICAgICAgICAgICAgICAgICB2YWwgPSBhcmdzW2ldWzBdOwoJICAgICAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgICAgICBjYXNlICdmJzoKCSAgICAgICAgICAgICAgICAgICAgdmFsID0gcGFyc2VGbG9hdChhcmdzW2ldKS50b0ZpeGVkKGV4cCk7CgkgICAgICAgICAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgICAgICAgIGNhc2UgJ3AnOgoJICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUZsb2F0KGFyZ3NbaV0pLnRvUHJlY2lzaW9uKGV4cCk7CgkgICAgICAgICAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgICAgICAgIGNhc2UgJ2UnOgoJICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUZsb2F0KGFyZ3NbaV0pLnRvRXhwb25lbnRpYWwoZXhwKTsKCSAgICAgICAgICAgICAgICAgICAgYnJlYWs7CgkgICAgICAgICAgICAgICAgY2FzZSAneCc6CgkgICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KGFyZ3NbaV0pLnRvU3RyaW5nKGJhc2UgPyBiYXNlIDogMTYpOwoJICAgICAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgICAgICBjYXNlICdkJzoKCSAgICAgICAgICAgICAgICAgICAgdmFsID0gcGFyc2VGbG9hdChwYXJzZUludChhcmdzW2ldLCBiYXNlID8gYmFzZSA6IDEwKS50b1ByZWNpc2lvbihleHApKS50b0ZpeGVkKDApOwoJICAgICAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHZhbCA9IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsKSA6ICgrdmFsKS50b1N0cmluZyhiYXNlKTsKCSAgICAgICAgICAgIHZhciBzaXplID0gcGFyc2VJbnQocDEpOyAvKiBwYWRkaW5nIHNpemUgKi8KCSAgICAgICAgICAgIHZhciBjaCA9IHAxICYmIChwMVswXSArICcnKSA9PT0gJzAnID8gJzAnIDogJyAnOyAvKiBpc251bGw/ICovCgkgICAgICAgICAgICB3aGlsZSAodmFsLmxlbmd0aCA8IHNpemUpCgkgICAgICAgICAgICAgICAgdmFsID0gcDAgIT09IHVuZGVmaW5lZCA/IHZhbCArIGNoIDogY2ggKyB2YWw7IC8qIGlzbWludXM/ICovCgkgICAgICAgICAgICByZXR1cm4gdmFsOwoJICAgICAgICB9CgkgICAgICAgIHZhciByZWdleCA9IC8lKC0pPygwP1swLTldKyk/KFsuXVswLTldKyk/KFsjXVswLTldKyk/KFtzY2ZwZXhkJV0pL2c7CgkgICAgICAgIHJldHVybiBhcHBlbmQucmVwbGFjZShyZWdleCwgY2FsbGJhY2spOwoJICAgIH07CgkgICAgLyoqCgkgICAgICoKCSAgICAgKi8KCSAgICBTdHJpbmdVdGlscy5nZXRCeXRlcyA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7CgkgICAgICAgIHJldHVybiBTdHJpbmdFbmNvZGluZ18xJDEuZGVmYXVsdC5lbmNvZGUoc3RyLCBlbmNvZGluZyk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBSZXR1cm5zIHRoZSBjaGFyY29kZSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IG9yIGF0IGluZGV4IHplcm8uCgkgICAgICovCgkgICAgU3RyaW5nVXRpbHMuZ2V0Q2hhckNvZGUgPSBmdW5jdGlvbiAoc3RyLCBpbmRleCkgewoJICAgICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkgeyBpbmRleCA9IDA7IH0KCSAgICAgICAgcmV0dXJuIHN0ci5jaGFyQ29kZUF0KGluZGV4KTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFJldHVybnMgY2hhciBmb3IgZ2l2ZW4gY2hhcmNvZGUKCSAgICAgKi8KCSAgICBTdHJpbmdVdGlscy5nZXRDaGFyQXQgPSBmdW5jdGlvbiAoY2hhckNvZGUpIHsKCSAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpOwoJICAgIH07CgkgICAgU3RyaW5nVXRpbHMuU0hJRlRfSklTID0gQ2hhcmFjdGVyU2V0RUNJXzEkMS5kZWZhdWx0LlNKSVMuZ2V0TmFtZSgpOyAvLyAiU0pJUyIKCSAgICBTdHJpbmdVdGlscy5HQjIzMTIgPSAnR0IyMzEyJzsKCSAgICBTdHJpbmdVdGlscy5JU084ODU5MSA9IENoYXJhY3RlclNldEVDSV8xJDEuZGVmYXVsdC5JU084ODU5XzEuZ2V0TmFtZSgpOyAvLyAiSVNPODg1OV8xIgoJICAgIFN0cmluZ1V0aWxzLkVVQ19KUCA9ICdFVUNfSlAnOwoJICAgIFN0cmluZ1V0aWxzLlVURjggPSBDaGFyYWN0ZXJTZXRFQ0lfMSQxLmRlZmF1bHQuVVRGOC5nZXROYW1lKCk7IC8vICJVVEY4IgoJICAgIFN0cmluZ1V0aWxzLlBMQVRGT1JNX0RFRkFVTFRfRU5DT0RJTkcgPSBTdHJpbmdVdGlscy5VVEY4OyAvLyAiVVRGOCIvL0NoYXJzZXQuZGVmYXVsdENoYXJzZXQoKS5uYW1lKCkKCSAgICBTdHJpbmdVdGlscy5BU1NVTUVfU0hJRlRfSklTID0gZmFsc2U7CgkgICAgcmV0dXJuIFN0cmluZ1V0aWxzOwoJfSgpKTsKCVN0cmluZ1V0aWxzJDEuZGVmYXVsdCA9IFN0cmluZ1V0aWxzOwoKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmdCdWlsZGVyJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCXZhciBTdHJpbmdVdGlsc18xJDEgPSBTdHJpbmdVdGlscyQxOwoJdmFyIFN0cmluZ0J1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgZnVuY3Rpb24gU3RyaW5nQnVpbGRlcih2YWx1ZSkgewoJICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9ICcnOyB9CgkgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTsKCSAgICB9CgkgICAgU3RyaW5nQnVpbGRlci5wcm90b3R5cGUuZW5hYmxlRGVjb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHsKCSAgICAgICAgdGhpcy5lbmNvZGluZyA9IGVuY29kaW5nOwoJICAgICAgICByZXR1cm4gdGhpczsKCSAgICB9OwoJICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChzKSB7CgkgICAgICAgIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHsKCSAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gcy50b1N0cmluZygpOwoJICAgICAgICB9CgkgICAgICAgIGVsc2UgaWYgKHRoaXMuZW5jb2RpbmcpIHsKCSAgICAgICAgICAgIC8vIHVzZSBwYXNzZWQgZm9ybWF0IChmcm9tQ2hhckNvZGUgd2lsbCByZXR1cm4gVVRGOCBlbmNvZGluZykKCSAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nVXRpbHNfMSQxLmRlZmF1bHQuY2FzdEFzTm9uVXRmOENoYXIocywgdGhpcy5lbmNvZGluZyk7CgkgICAgICAgIH0KCSAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAvLyBjb3JyZWN0bHkgY29udmVydHMgZnJvbSBVVEYtOCwgYnV0IG5vdCBvdGhlciBlbmNvZGluZ3MKCSAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShzKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gdGhpczsKCSAgICB9OwoJICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLmFwcGVuZENoYXJzID0gZnVuY3Rpb24gKHN0ciwgb2Zmc2V0LCBsZW4pIHsKCSAgICAgICAgZm9yICh2YXIgaSA9IG9mZnNldDsgb2Zmc2V0IDwgb2Zmc2V0ICsgbGVuOyBpKyspIHsKCSAgICAgICAgICAgIHRoaXMuYXBwZW5kKHN0cltpXSk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHRoaXM7CgkgICAgfTsKCSAgICBTdHJpbmdCdWlsZGVyLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aDsKCSAgICB9OwoJICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLmNoYXJBdCA9IGZ1bmN0aW9uIChuKSB7CgkgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmNoYXJBdChuKTsKCSAgICB9OwoJICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLmRlbGV0ZUNoYXJBdCA9IGZ1bmN0aW9uIChuKSB7CgkgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnN1YnN0cigwLCBuKSArIHRoaXMudmFsdWUuc3Vic3RyaW5nKG4gKyAxKTsKCSAgICB9OwoJICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLnNldENoYXJBdCA9IGZ1bmN0aW9uIChuLCBjKSB7CgkgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnN1YnN0cigwLCBuKSArIGMgKyB0aGlzLnZhbHVlLnN1YnN0cihuICsgMSk7CgkgICAgfTsKCSAgICBTdHJpbmdCdWlsZGVyLnByb3RvdHlwZS5zdWJzdHJpbmcgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkgewoJICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAbm90ZSBoZWxwZXIgbWV0aG9kIGZvciBSU1MgRXhwYW5kZWQKCSAgICAgKi8KCSAgICBTdHJpbmdCdWlsZGVyLnByb3RvdHlwZS5zZXRMZW5ndGhUb1plcm8gPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHRoaXMudmFsdWUgPSAnJzsKCSAgICB9OwoJICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTsKCSAgICB9OwoJICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChuLCBjKSB7CgkgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnN1YnN0cigwLCBuKSArIGMgKyB0aGlzLnZhbHVlLnN1YnN0cihuICsgYy5sZW5ndGgpOwoJICAgIH07CgkgICAgcmV0dXJuIFN0cmluZ0J1aWxkZXI7Cgl9KCkpOwoJU3RyaW5nQnVpbGRlciQxLmRlZmF1bHQgPSBTdHJpbmdCdWlsZGVyOwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoQml0TWF0cml4JDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcuY29tbW9uIHsqLwoJLyppbXBvcnQgamF2YS51dGlsLkFycmF5czsqLwoJdmFyIEJpdEFycmF5XzEkMSA9IEJpdEFycmF5JDE7Cgl2YXIgU3lzdGVtXzEkMyA9IFN5c3RlbSQxOwoJdmFyIEFycmF5c18xID0gQXJyYXlzJDE7Cgl2YXIgU3RyaW5nQnVpbGRlcl8xJDIgPSBTdHJpbmdCdWlsZGVyJDE7Cgl2YXIgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNyA9IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiA8cD5SZXByZXNlbnRzIGEgMkQgbWF0cml4IG9mIGJpdHMuIEluIGZ1bmN0aW9uIGFyZ3VtZW50cyBiZWxvdywgYW5kIHRocm91Z2hvdXQgdGhlIGNvbW1vbgoJICogbW9kdWxlLCB4IGlzIHRoZSBjb2x1bW4gcG9zaXRpb24sIGFuZCB5IGlzIHRoZSByb3cgcG9zaXRpb24uIFRoZSBvcmRlcmluZyBpcyBhbHdheXMgeCwgeS4KCSAqIFRoZSBvcmlnaW4gaXMgYXQgdGhlIHRvcC1sZWZ0LjwvcD4KCSAqCgkgKiA8cD5JbnRlcm5hbGx5IHRoZSBiaXRzIGFyZSByZXByZXNlbnRlZCBpbiBhIDEtRCBhcnJheSBvZiAzMi1iaXQgaW50cy4gSG93ZXZlciwgZWFjaCByb3cgYmVnaW5zCgkgKiB3aXRoIGEgbmV3IGludC4gVGhpcyBpcyBkb25lIGludGVudGlvbmFsbHkgc28gdGhhdCB3ZSBjYW4gY29weSBvdXQgYSByb3cgaW50byBhIEJpdEFycmF5IHZlcnkKCSAqIGVmZmljaWVudGx5LjwvcD4KCSAqCgkgKiA8cD5UaGUgb3JkZXJpbmcgb2YgYml0cyBpcyByb3ctbWFqb3IuIFdpdGhpbiBlYWNoIGludCwgdGhlIGxlYXN0IHNpZ25pZmljYW50IGJpdHMgYXJlIHVzZWQgZmlyc3QsCgkgKiBtZWFuaW5nIHRoZXkgcmVwcmVzZW50IGxvd2VyIHggdmFsdWVzLiBUaGlzIGlzIGNvbXBhdGlibGUgd2l0aCBCaXRBcnJheSdzIGltcGxlbWVudGF0aW9uLjwvcD4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICogQGF1dGhvciBkc3dpdGtpbkBnb29nbGUuY29tIChEYW5pZWwgU3dpdGtpbikKCSAqLwoJdmFyIEJpdE1hdHJpeCAvKmltcGxlbWVudHMgQ2xvbmVhYmxlKi8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgLyoqCgkgICAgICogQ3JlYXRlcyBhbiBlbXB0eSBzcXVhcmUge0BsaW5rIEJpdE1hdHJpeH0uCgkgICAgICoKCSAgICAgKiBAcGFyYW0gZGltZW5zaW9uIGhlaWdodCBhbmQgd2lkdGgKCSAgICAgKi8KCSAgICAvLyBwdWJsaWMgY29uc3RydWN0b3IoZGltZW5zaW9uOiBudW1iZXIgLyppbnQqLykgewoJICAgIC8vICAgdGhpcyhkaW1lbnNpb24sIGRpbWVuc2lvbikKCSAgICAvLyB9CgkgICAgLyoqCgkgICAgICogQ3JlYXRlcyBhbiBlbXB0eSB7QGxpbmsgQml0TWF0cml4fS4KCSAgICAgKgoJICAgICAqIEBwYXJhbSB3aWR0aCBiaXQgbWF0cml4IHdpZHRoCgkgICAgICogQHBhcmFtIGhlaWdodCBiaXQgbWF0cml4IGhlaWdodAoJICAgICAqLwoJICAgIC8vIHB1YmxpYyBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyIC8qaW50Ki8sIGhlaWdodDogbnVtYmVyIC8qaW50Ki8pIHsKCSAgICAvLyAgIGlmICh3aWR0aCA8IDEgfHwgaGVpZ2h0IDwgMSkgewoJICAgIC8vICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uKCJCb3RoIGRpbWVuc2lvbnMgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCIpCgkgICAgLy8gICB9CgkgICAgLy8gICB0aGlzLndpZHRoID0gd2lkdGgKCSAgICAvLyAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0CgkgICAgLy8gICB0aGlzLnJvd1NpemUgPSAod2lkdGggKyAzMSkgLyAzMgoJICAgIC8vICAgYml0cyA9IG5ldyBpbnRbcm93U2l6ZSAqIGhlaWdodF07CgkgICAgLy8gfQoJICAgIGZ1bmN0aW9uIEJpdE1hdHJpeCh3aWR0aCAvKmludCovLCBoZWlnaHQgLyppbnQqLywgcm93U2l6ZSAvKmludCovLCBiaXRzKSB7CgkgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDsKCSAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7CgkgICAgICAgIHRoaXMucm93U2l6ZSA9IHJvd1NpemU7CgkgICAgICAgIHRoaXMuYml0cyA9IGJpdHM7CgkgICAgICAgIGlmICh1bmRlZmluZWQgPT09IGhlaWdodCB8fCBudWxsID09PSBoZWlnaHQpIHsKCSAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoOwoJICAgICAgICB9CgkgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OwoJICAgICAgICBpZiAod2lkdGggPCAxIHx8IGhlaWdodCA8IDEpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQ3LmRlZmF1bHQoJ0JvdGggZGltZW5zaW9ucyBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gcm93U2l6ZSB8fCBudWxsID09PSByb3dTaXplKSB7CgkgICAgICAgICAgICByb3dTaXplID0gTWF0aC5mbG9vcigod2lkdGggKyAzMSkgLyAzMik7CgkgICAgICAgIH0KCSAgICAgICAgdGhpcy5yb3dTaXplID0gcm93U2l6ZTsKCSAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gYml0cyB8fCBudWxsID09PSBiaXRzKSB7CgkgICAgICAgICAgICB0aGlzLmJpdHMgPSBuZXcgSW50MzJBcnJheSh0aGlzLnJvd1NpemUgKiB0aGlzLmhlaWdodCk7CgkgICAgICAgIH0KCSAgICB9CgkgICAgLyoqCgkgICAgICogSW50ZXJwcmV0cyBhIDJEIGFycmF5IG9mIGJvb2xlYW5zIGFzIGEge0BsaW5rIEJpdE1hdHJpeH0sIHdoZXJlICJ0cnVlIiBtZWFucyBhbiAib24iIGJpdC4KCSAgICAgKgoJICAgICAqIEBmdW5jdGlvbiBwYXJzZQoJICAgICAqIEBwYXJhbSBpbWFnZSBiaXRzIG9mIHRoZSBpbWFnZSwgYXMgYSByb3ctbWFqb3IgMkQgYXJyYXkuIEVsZW1lbnRzIGFyZSBhcnJheXMgcmVwcmVzZW50aW5nIHJvd3MKCSAgICAgKiBAcmV0dXJuIHtAbGluayBCaXRNYXRyaXh9IHJlcHJlc2VudGF0aW9uIG9mIGltYWdlCgkgICAgICovCgkgICAgQml0TWF0cml4LnBhcnNlRnJvbUJvb2xlYW5BcnJheSA9IGZ1bmN0aW9uIChpbWFnZSkgewoJICAgICAgICB2YXIgaGVpZ2h0ID0gaW1hZ2UubGVuZ3RoOwoJICAgICAgICB2YXIgd2lkdGggPSBpbWFnZVswXS5sZW5ndGg7CgkgICAgICAgIHZhciBiaXRzID0gbmV3IEJpdE1hdHJpeCh3aWR0aCwgaGVpZ2h0KTsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykgewoJICAgICAgICAgICAgdmFyIGltYWdlSSA9IGltYWdlW2ldOwoJICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7CgkgICAgICAgICAgICAgICAgaWYgKGltYWdlSVtqXSkgewoJICAgICAgICAgICAgICAgICAgICBiaXRzLnNldChqLCBpKTsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGJpdHM7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKgoJICAgICAqIEBmdW5jdGlvbiBwYXJzZQoJICAgICAqIEBwYXJhbSBzdHJpbmdSZXByZXNlbnRhdGlvbgoJICAgICAqIEBwYXJhbSBzZXRTdHJpbmcKCSAgICAgKiBAcGFyYW0gdW5zZXRTdHJpbmcKCSAgICAgKi8KCSAgICBCaXRNYXRyaXgucGFyc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24gKHN0cmluZ1JlcHJlc2VudGF0aW9uLCBzZXRTdHJpbmcsIHVuc2V0U3RyaW5nKSB7CgkgICAgICAgIGlmIChzdHJpbmdSZXByZXNlbnRhdGlvbiA9PT0gbnVsbCkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDcuZGVmYXVsdCgnc3RyaW5nUmVwcmVzZW50YXRpb24gY2Fubm90IGJlIG51bGwnKTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgYml0cyA9IG5ldyBBcnJheShzdHJpbmdSZXByZXNlbnRhdGlvbi5sZW5ndGgpOwoJICAgICAgICB2YXIgYml0c1BvcyA9IDA7CgkgICAgICAgIHZhciByb3dTdGFydFBvcyA9IDA7CgkgICAgICAgIHZhciByb3dMZW5ndGggPSAtMTsKCSAgICAgICAgdmFyIG5Sb3dzID0gMDsKCSAgICAgICAgdmFyIHBvcyA9IDA7CgkgICAgICAgIHdoaWxlIChwb3MgPCBzdHJpbmdSZXByZXNlbnRhdGlvbi5sZW5ndGgpIHsKCSAgICAgICAgICAgIGlmIChzdHJpbmdSZXByZXNlbnRhdGlvbi5jaGFyQXQocG9zKSA9PT0gJ1xuJyB8fAoJICAgICAgICAgICAgICAgIHN0cmluZ1JlcHJlc2VudGF0aW9uLmNoYXJBdChwb3MpID09PSAnXHInKSB7CgkgICAgICAgICAgICAgICAgaWYgKGJpdHNQb3MgPiByb3dTdGFydFBvcykgewoJICAgICAgICAgICAgICAgICAgICBpZiAocm93TGVuZ3RoID09PSAtMSkgewoJICAgICAgICAgICAgICAgICAgICAgICAgcm93TGVuZ3RoID0gYml0c1BvcyAtIHJvd1N0YXJ0UG9zOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJpdHNQb3MgLSByb3dTdGFydFBvcyAhPT0gcm93TGVuZ3RoKSB7CgkgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNy5kZWZhdWx0KCdyb3cgbGVuZ3RocyBkbyBub3QgbWF0Y2gnKTsKCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICByb3dTdGFydFBvcyA9IGJpdHNQb3M7CgkgICAgICAgICAgICAgICAgICAgIG5Sb3dzKys7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIHBvcysrOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgZWxzZSBpZiAoc3RyaW5nUmVwcmVzZW50YXRpb24uc3Vic3RyaW5nKHBvcywgcG9zICsgc2V0U3RyaW5nLmxlbmd0aCkgPT09IHNldFN0cmluZykgewoJICAgICAgICAgICAgICAgIHBvcyArPSBzZXRTdHJpbmcubGVuZ3RoOwoJICAgICAgICAgICAgICAgIGJpdHNbYml0c1Bvc10gPSB0cnVlOwoJICAgICAgICAgICAgICAgIGJpdHNQb3MrKzsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGVsc2UgaWYgKHN0cmluZ1JlcHJlc2VudGF0aW9uLnN1YnN0cmluZyhwb3MsIHBvcyArIHVuc2V0U3RyaW5nLmxlbmd0aCkgPT09IHVuc2V0U3RyaW5nKSB7CgkgICAgICAgICAgICAgICAgcG9zICs9IHVuc2V0U3RyaW5nLmxlbmd0aDsKCSAgICAgICAgICAgICAgICBiaXRzW2JpdHNQb3NdID0gZmFsc2U7CgkgICAgICAgICAgICAgICAgYml0c1BvcysrOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDcuZGVmYXVsdCgnaWxsZWdhbCBjaGFyYWN0ZXIgZW5jb3VudGVyZWQ6ICcgKyBzdHJpbmdSZXByZXNlbnRhdGlvbi5zdWJzdHJpbmcocG9zKSk7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgLy8gbm8gRU9MIGF0IGVuZD8KCSAgICAgICAgaWYgKGJpdHNQb3MgPiByb3dTdGFydFBvcykgewoJICAgICAgICAgICAgaWYgKHJvd0xlbmd0aCA9PT0gLTEpIHsKCSAgICAgICAgICAgICAgICByb3dMZW5ndGggPSBiaXRzUG9zIC0gcm93U3RhcnRQb3M7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBlbHNlIGlmIChiaXRzUG9zIC0gcm93U3RhcnRQb3MgIT09IHJvd0xlbmd0aCkgewoJICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQ3LmRlZmF1bHQoJ3JvdyBsZW5ndGhzIGRvIG5vdCBtYXRjaCcpOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgblJvd3MrKzsKCSAgICAgICAgfQoJICAgICAgICB2YXIgbWF0cml4ID0gbmV3IEJpdE1hdHJpeChyb3dMZW5ndGgsIG5Sb3dzKTsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzUG9zOyBpKyspIHsKCSAgICAgICAgICAgIGlmIChiaXRzW2ldKSB7CgkgICAgICAgICAgICAgICAgbWF0cml4LnNldChNYXRoLmZsb29yKGkgJSByb3dMZW5ndGgpLCBNYXRoLmZsb29yKGkgLyByb3dMZW5ndGgpKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gbWF0cml4OwoJICAgIH07CgkgICAgLyoqCgkgICAgICogPHA+R2V0cyB0aGUgcmVxdWVzdGVkIGJpdCwgd2hlcmUgdHJ1ZSBtZWFucyBibGFjay48L3A+CgkgICAgICoKCSAgICAgKiBAcGFyYW0geCBUaGUgaG9yaXpvbnRhbCBjb21wb25lbnQgKGkuZS4gd2hpY2ggY29sdW1uKQoJICAgICAqIEBwYXJhbSB5IFRoZSB2ZXJ0aWNhbCBjb21wb25lbnQgKGkuZS4gd2hpY2ggcm93KQoJICAgICAqIEByZXR1cm4gdmFsdWUgb2YgZ2l2ZW4gYml0IGluIG1hdHJpeAoJICAgICAqLwoJICAgIEJpdE1hdHJpeC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHggLyppbnQqLywgeSAvKmludCovKSB7CgkgICAgICAgIHZhciBvZmZzZXQgPSB5ICogdGhpcy5yb3dTaXplICsgTWF0aC5mbG9vcih4IC8gMzIpOwoJICAgICAgICByZXR1cm4gKCh0aGlzLmJpdHNbb2Zmc2V0XSA+Pj4gKHggJiAweDFmKSkgJiAxKSAhPT0gMDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPlNldHMgdGhlIGdpdmVuIGJpdCB0byB0cnVlLjwvcD4KCSAgICAgKgoJICAgICAqIEBwYXJhbSB4IFRoZSBob3Jpem9udGFsIGNvbXBvbmVudCAoaS5lLiB3aGljaCBjb2x1bW4pCgkgICAgICogQHBhcmFtIHkgVGhlIHZlcnRpY2FsIGNvbXBvbmVudCAoaS5lLiB3aGljaCByb3cpCgkgICAgICovCgkgICAgQml0TWF0cml4LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoeCAvKmludCovLCB5IC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIG9mZnNldCA9IHkgKiB0aGlzLnJvd1NpemUgKyBNYXRoLmZsb29yKHggLyAzMik7CgkgICAgICAgIHRoaXMuYml0c1tvZmZzZXRdIHw9ICgxIDw8ICh4ICYgMHgxZikpICYgMHhGRkZGRkZGRjsKCSAgICB9OwoJICAgIEJpdE1hdHJpeC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAoeCAvKmludCovLCB5IC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIG9mZnNldCA9IHkgKiB0aGlzLnJvd1NpemUgKyBNYXRoLmZsb29yKHggLyAzMik7CgkgICAgICAgIHRoaXMuYml0c1tvZmZzZXRdICY9IH4oKDEgPDwgKHggJiAweDFmKSkgJiAweEZGRkZGRkZGKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPkZsaXBzIHRoZSBnaXZlbiBiaXQuPC9wPgoJICAgICAqCgkgICAgICogQHBhcmFtIHggVGhlIGhvcml6b250YWwgY29tcG9uZW50IChpLmUuIHdoaWNoIGNvbHVtbikKCSAgICAgKiBAcGFyYW0geSBUaGUgdmVydGljYWwgY29tcG9uZW50IChpLmUuIHdoaWNoIHJvdykKCSAgICAgKi8KCSAgICBCaXRNYXRyaXgucHJvdG90eXBlLmZsaXAgPSBmdW5jdGlvbiAoeCAvKmludCovLCB5IC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIG9mZnNldCA9IHkgKiB0aGlzLnJvd1NpemUgKyBNYXRoLmZsb29yKHggLyAzMik7CgkgICAgICAgIHRoaXMuYml0c1tvZmZzZXRdIF49ICgoMSA8PCAoeCAmIDB4MWYpKSAmIDB4RkZGRkZGRkYpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogRXhjbHVzaXZlLW9yIChYT1IpOiBGbGlwIHRoZSBiaXQgaW4gdGhpcyB7QGNvZGUgQml0TWF0cml4fSBpZiB0aGUgY29ycmVzcG9uZGluZwoJICAgICAqIG1hc2sgYml0IGlzIHNldC4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBtYXNrIFhPUiBtYXNrCgkgICAgICovCgkgICAgQml0TWF0cml4LnByb3RvdHlwZS54b3IgPSBmdW5jdGlvbiAobWFzaykgewoJICAgICAgICBpZiAodGhpcy53aWR0aCAhPT0gbWFzay5nZXRXaWR0aCgpIHx8IHRoaXMuaGVpZ2h0ICE9PSBtYXNrLmdldEhlaWdodCgpCgkgICAgICAgICAgICB8fCB0aGlzLnJvd1NpemUgIT09IG1hc2suZ2V0Um93U2l6ZSgpKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNy5kZWZhdWx0KCdpbnB1dCBtYXRyaXggZGltZW5zaW9ucyBkbyBub3QgbWF0Y2gnKTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgcm93QXJyYXkgPSBuZXcgQml0QXJyYXlfMSQxLmRlZmF1bHQoTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gMzIpICsgMSk7CgkgICAgICAgIHZhciByb3dTaXplID0gdGhpcy5yb3dTaXplOwoJICAgICAgICB2YXIgYml0cyA9IHRoaXMuYml0czsKCSAgICAgICAgZm9yICh2YXIgeSA9IDAsIGhlaWdodCA9IHRoaXMuaGVpZ2h0OyB5IDwgaGVpZ2h0OyB5KyspIHsKCSAgICAgICAgICAgIHZhciBvZmZzZXQgPSB5ICogcm93U2l6ZTsKCSAgICAgICAgICAgIHZhciByb3cgPSBtYXNrLmdldFJvdyh5LCByb3dBcnJheSkuZ2V0Qml0QXJyYXkoKTsKCSAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgcm93U2l6ZTsgeCsrKSB7CgkgICAgICAgICAgICAgICAgYml0c1tvZmZzZXQgKyB4XSBePSByb3dbeF07CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICB9OwoJICAgIC8qKgoJICAgICAqIENsZWFycyBhbGwgYml0cyAoc2V0cyB0byBmYWxzZSkuCgkgICAgICovCgkgICAgQml0TWF0cml4LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgdmFyIGJpdHMgPSB0aGlzLmJpdHM7CgkgICAgICAgIHZhciBtYXggPSBiaXRzLmxlbmd0aDsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXg7IGkrKykgewoJICAgICAgICAgICAgYml0c1tpXSA9IDA7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPlNldHMgYSBzcXVhcmUgcmVnaW9uIG9mIHRoZSBiaXQgbWF0cml4IHRvIHRydWUuPC9wPgoJICAgICAqCgkgICAgICogQHBhcmFtIGxlZnQgVGhlIGhvcml6b250YWwgcG9zaXRpb24gdG8gYmVnaW4gYXQgKGluY2x1c2l2ZSkKCSAgICAgKiBAcGFyYW0gdG9wIFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB0byBiZWdpbiBhdCAoaW5jbHVzaXZlKQoJICAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJlZ2lvbgoJICAgICAqIEBwYXJhbSBoZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgcmVnaW9uCgkgICAgICovCgkgICAgQml0TWF0cml4LnByb3RvdHlwZS5zZXRSZWdpb24gPSBmdW5jdGlvbiAobGVmdCAvKmludCovLCB0b3AgLyppbnQqLywgd2lkdGggLyppbnQqLywgaGVpZ2h0IC8qaW50Ki8pIHsKCSAgICAgICAgaWYgKHRvcCA8IDAgfHwgbGVmdCA8IDApIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQ3LmRlZmF1bHQoJ0xlZnQgYW5kIHRvcCBtdXN0IGJlIG5vbm5lZ2F0aXZlJyk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNy5kZWZhdWx0KCdIZWlnaHQgYW5kIHdpZHRoIG11c3QgYmUgYXQgbGVhc3QgMScpOwoJICAgICAgICB9CgkgICAgICAgIHZhciByaWdodCA9IGxlZnQgKyB3aWR0aDsKCSAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIGhlaWdodDsKCSAgICAgICAgaWYgKGJvdHRvbSA+IHRoaXMuaGVpZ2h0IHx8IHJpZ2h0ID4gdGhpcy53aWR0aCkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDcuZGVmYXVsdCgnVGhlIHJlZ2lvbiBtdXN0IGZpdCBpbnNpZGUgdGhlIG1hdHJpeCcpOwoJICAgICAgICB9CgkgICAgICAgIHZhciByb3dTaXplID0gdGhpcy5yb3dTaXplOwoJICAgICAgICB2YXIgYml0cyA9IHRoaXMuYml0czsKCSAgICAgICAgZm9yICh2YXIgeSA9IHRvcDsgeSA8IGJvdHRvbTsgeSsrKSB7CgkgICAgICAgICAgICB2YXIgb2Zmc2V0ID0geSAqIHJvd1NpemU7CgkgICAgICAgICAgICBmb3IgKHZhciB4ID0gbGVmdDsgeCA8IHJpZ2h0OyB4KyspIHsKCSAgICAgICAgICAgICAgICBiaXRzW29mZnNldCArIE1hdGguZmxvb3IoeCAvIDMyKV0gfD0gKCgxIDw8ICh4ICYgMHgxZikpICYgMHhGRkZGRkZGRik7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEEgZmFzdCBtZXRob2QgdG8gcmV0cmlldmUgb25lIHJvdyBvZiBkYXRhIGZyb20gdGhlIG1hdHJpeCBhcyBhIEJpdEFycmF5LgoJICAgICAqCgkgICAgICogQHBhcmFtIHkgVGhlIHJvdyB0byByZXRyaWV2ZQoJICAgICAqIEBwYXJhbSByb3cgQW4gb3B0aW9uYWwgY2FsbGVyLWFsbG9jYXRlZCBCaXRBcnJheSwgd2lsbCBiZSBhbGxvY2F0ZWQgaWYgbnVsbCBvciB0b28gc21hbGwKCSAgICAgKiBAcmV0dXJuIFRoZSByZXN1bHRpbmcgQml0QXJyYXkgLSB0aGlzIHJlZmVyZW5jZSBzaG91bGQgYWx3YXlzIGJlIHVzZWQgZXZlbiB3aGVuIHBhc3NpbmcKCSAgICAgKiAgICAgICAgIHlvdXIgb3duIHJvdwoJICAgICAqLwoJICAgIEJpdE1hdHJpeC5wcm90b3R5cGUuZ2V0Um93ID0gZnVuY3Rpb24gKHkgLyppbnQqLywgcm93KSB7CgkgICAgICAgIGlmIChyb3cgPT09IG51bGwgfHwgcm93ID09PSB1bmRlZmluZWQgfHwgcm93LmdldFNpemUoKSA8IHRoaXMud2lkdGgpIHsKCSAgICAgICAgICAgIHJvdyA9IG5ldyBCaXRBcnJheV8xJDEuZGVmYXVsdCh0aGlzLndpZHRoKTsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgIHJvdy5jbGVhcigpOwoJICAgICAgICB9CgkgICAgICAgIHZhciByb3dTaXplID0gdGhpcy5yb3dTaXplOwoJICAgICAgICB2YXIgYml0cyA9IHRoaXMuYml0czsKCSAgICAgICAgdmFyIG9mZnNldCA9IHkgKiByb3dTaXplOwoJICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHJvd1NpemU7IHgrKykgewoJICAgICAgICAgICAgcm93LnNldEJ1bGsoeCAqIDMyLCBiaXRzW29mZnNldCArIHhdKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gcm93OwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHBhcmFtIHkgcm93IHRvIHNldAoJICAgICAqIEBwYXJhbSByb3cge0BsaW5rIEJpdEFycmF5fSB0byBjb3B5IGZyb20KCSAgICAgKi8KCSAgICBCaXRNYXRyaXgucHJvdG90eXBlLnNldFJvdyA9IGZ1bmN0aW9uICh5IC8qaW50Ki8sIHJvdykgewoJICAgICAgICBTeXN0ZW1fMSQzLmRlZmF1bHQuYXJyYXljb3B5KHJvdy5nZXRCaXRBcnJheSgpLCAwLCB0aGlzLmJpdHMsIHkgKiB0aGlzLnJvd1NpemUsIHRoaXMucm93U2l6ZSk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBNb2RpZmllcyB0aGlzIHtAY29kZSBCaXRNYXRyaXh9IHRvIHJlcHJlc2VudCB0aGUgc2FtZSBidXQgcm90YXRlZCAxODAgZGVncmVlcwoJICAgICAqLwoJICAgIEJpdE1hdHJpeC5wcm90b3R5cGUucm90YXRlMTgwID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmdldFdpZHRoKCk7CgkgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpOwoJICAgICAgICB2YXIgdG9wUm93ID0gbmV3IEJpdEFycmF5XzEkMS5kZWZhdWx0KHdpZHRoKTsKCSAgICAgICAgdmFyIGJvdHRvbVJvdyA9IG5ldyBCaXRBcnJheV8xJDEuZGVmYXVsdCh3aWR0aCk7CgkgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGhfMSA9IE1hdGguZmxvb3IoKGhlaWdodCArIDEpIC8gMik7IGkgPCBsZW5ndGhfMTsgaSsrKSB7CgkgICAgICAgICAgICB0b3BSb3cgPSB0aGlzLmdldFJvdyhpLCB0b3BSb3cpOwoJICAgICAgICAgICAgYm90dG9tUm93ID0gdGhpcy5nZXRSb3coaGVpZ2h0IC0gMSAtIGksIGJvdHRvbVJvdyk7CgkgICAgICAgICAgICB0b3BSb3cucmV2ZXJzZSgpOwoJICAgICAgICAgICAgYm90dG9tUm93LnJldmVyc2UoKTsKCSAgICAgICAgICAgIHRoaXMuc2V0Um93KGksIGJvdHRvbVJvdyk7CgkgICAgICAgICAgICB0aGlzLnNldFJvdyhoZWlnaHQgLSAxIC0gaSwgdG9wUm93KTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgLyoqCgkgICAgICogVGhpcyBpcyB1c2VmdWwgaW4gZGV0ZWN0aW5nIHRoZSBlbmNsb3NpbmcgcmVjdGFuZ2xlIG9mIGEgJ3B1cmUnIGJhcmNvZGUuCgkgICAgICoKCSAgICAgKiBAcmV0dXJuIHtAY29kZSBsZWZ0LHRvcCx3aWR0aCxoZWlnaHR9IGVuY2xvc2luZyByZWN0YW5nbGUgb2YgYWxsIDEgYml0cywgb3IgbnVsbCBpZiBpdCBpcyBhbGwgd2hpdGUKCSAgICAgKi8KCSAgICBCaXRNYXRyaXgucHJvdG90eXBlLmdldEVuY2xvc2luZ1JlY3RhbmdsZSA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDsKCSAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0OwoJICAgICAgICB2YXIgcm93U2l6ZSA9IHRoaXMucm93U2l6ZTsKCSAgICAgICAgdmFyIGJpdHMgPSB0aGlzLmJpdHM7CgkgICAgICAgIHZhciBsZWZ0ID0gd2lkdGg7CgkgICAgICAgIHZhciB0b3AgPSBoZWlnaHQ7CgkgICAgICAgIHZhciByaWdodCA9IC0xOwoJICAgICAgICB2YXIgYm90dG9tID0gLTE7CgkgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHsKCSAgICAgICAgICAgIGZvciAodmFyIHgzMiA9IDA7IHgzMiA8IHJvd1NpemU7IHgzMisrKSB7CgkgICAgICAgICAgICAgICAgdmFyIHRoZUJpdHMgPSBiaXRzW3kgKiByb3dTaXplICsgeDMyXTsKCSAgICAgICAgICAgICAgICBpZiAodGhlQml0cyAhPT0gMCkgewoJICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRvcCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0geTsKCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICBpZiAoeSA+IGJvdHRvbSkgewoJICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0geTsKCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICBpZiAoeDMyICogMzIgPCBsZWZ0KSB7CgkgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYml0ID0gMDsKCSAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgoKHRoZUJpdHMgPDwgKDMxIC0gYml0KSkgJiAweEZGRkZGRkZGKSA9PT0gMCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdCsrOwoJICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh4MzIgKiAzMiArIGJpdCkgPCBsZWZ0KSB7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHgzMiAqIDMyICsgYml0OwoJICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIGlmICh4MzIgKiAzMiArIDMxID4gcmlnaHQpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiaXQgPSAzMTsKCSAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgodGhlQml0cyA+Pj4gYml0KSA9PT0gMCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdC0tOwoJICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh4MzIgKiAzMiArIGJpdCkgPiByaWdodCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0geDMyICogMzIgKyBiaXQ7CgkgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHJpZ2h0IDwgbGVmdCB8fCBib3R0b20gPCB0b3ApIHsKCSAgICAgICAgICAgIHJldHVybiBudWxsOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBJbnQzMkFycmF5LmZyb20oW2xlZnQsIHRvcCwgcmlnaHQgLSBsZWZ0ICsgMSwgYm90dG9tIC0gdG9wICsgMV0pOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogVGhpcyBpcyB1c2VmdWwgaW4gZGV0ZWN0aW5nIGEgY29ybmVyIG9mIGEgJ3B1cmUnIGJhcmNvZGUuCgkgICAgICoKCSAgICAgKiBAcmV0dXJuIHtAY29kZSB4LHl9IGNvb3JkaW5hdGUgb2YgdG9wLWxlZnQtbW9zdCAxIGJpdCwgb3IgbnVsbCBpZiBpdCBpcyBhbGwgd2hpdGUKCSAgICAgKi8KCSAgICBCaXRNYXRyaXgucHJvdG90eXBlLmdldFRvcExlZnRPbkJpdCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgdmFyIHJvd1NpemUgPSB0aGlzLnJvd1NpemU7CgkgICAgICAgIHZhciBiaXRzID0gdGhpcy5iaXRzOwoJICAgICAgICB2YXIgYml0c09mZnNldCA9IDA7CgkgICAgICAgIHdoaWxlIChiaXRzT2Zmc2V0IDwgYml0cy5sZW5ndGggJiYgYml0c1tiaXRzT2Zmc2V0XSA9PT0gMCkgewoJICAgICAgICAgICAgYml0c09mZnNldCsrOwoJICAgICAgICB9CgkgICAgICAgIGlmIChiaXRzT2Zmc2V0ID09PSBiaXRzLmxlbmd0aCkgewoJICAgICAgICAgICAgcmV0dXJuIG51bGw7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIHkgPSBiaXRzT2Zmc2V0IC8gcm93U2l6ZTsKCSAgICAgICAgdmFyIHggPSAoYml0c09mZnNldCAlIHJvd1NpemUpICogMzI7CgkgICAgICAgIHZhciB0aGVCaXRzID0gYml0c1tiaXRzT2Zmc2V0XTsKCSAgICAgICAgdmFyIGJpdCA9IDA7CgkgICAgICAgIHdoaWxlICgoKHRoZUJpdHMgPDwgKDMxIC0gYml0KSkgJiAweEZGRkZGRkZGKSA9PT0gMCkgewoJICAgICAgICAgICAgYml0Kys7CgkgICAgICAgIH0KCSAgICAgICAgeCArPSBiaXQ7CgkgICAgICAgIHJldHVybiBJbnQzMkFycmF5LmZyb20oW3gsIHldKTsKCSAgICB9OwoJICAgIEJpdE1hdHJpeC5wcm90b3R5cGUuZ2V0Qm90dG9tUmlnaHRPbkJpdCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgdmFyIHJvd1NpemUgPSB0aGlzLnJvd1NpemU7CgkgICAgICAgIHZhciBiaXRzID0gdGhpcy5iaXRzOwoJICAgICAgICB2YXIgYml0c09mZnNldCA9IGJpdHMubGVuZ3RoIC0gMTsKCSAgICAgICAgd2hpbGUgKGJpdHNPZmZzZXQgPj0gMCAmJiBiaXRzW2JpdHNPZmZzZXRdID09PSAwKSB7CgkgICAgICAgICAgICBiaXRzT2Zmc2V0LS07CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGJpdHNPZmZzZXQgPCAwKSB7CgkgICAgICAgICAgICByZXR1cm4gbnVsbDsKCSAgICAgICAgfQoJICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoYml0c09mZnNldCAvIHJvd1NpemUpOwoJICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IoYml0c09mZnNldCAlIHJvd1NpemUpICogMzI7CgkgICAgICAgIHZhciB0aGVCaXRzID0gYml0c1tiaXRzT2Zmc2V0XTsKCSAgICAgICAgdmFyIGJpdCA9IDMxOwoJICAgICAgICB3aGlsZSAoKHRoZUJpdHMgPj4+IGJpdCkgPT09IDApIHsKCSAgICAgICAgICAgIGJpdC0tOwoJICAgICAgICB9CgkgICAgICAgIHggKz0gYml0OwoJICAgICAgICByZXR1cm4gSW50MzJBcnJheS5mcm9tKFt4LCB5XSk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIFRoZSB3aWR0aCBvZiB0aGUgbWF0cml4CgkgICAgICovCgkgICAgQml0TWF0cml4LnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIFRoZSBoZWlnaHQgb2YgdGhlIG1hdHJpeAoJICAgICAqLwoJICAgIEJpdE1hdHJpeC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIFRoZSByb3cgc2l6ZSBvZiB0aGUgbWF0cml4CgkgICAgICovCgkgICAgQml0TWF0cml4LnByb3RvdHlwZS5nZXRSb3dTaXplID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5yb3dTaXplOwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEJpdE1hdHJpeC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG8pIHsKCSAgICAgICAgaWYgKCEobyBpbnN0YW5jZW9mIEJpdE1hdHJpeCkpIHsKCSAgICAgICAgICAgIHJldHVybiBmYWxzZTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgb3RoZXIgPSBvOwoJICAgICAgICByZXR1cm4gdGhpcy53aWR0aCA9PT0gb3RoZXIud2lkdGggJiYgdGhpcy5oZWlnaHQgPT09IG90aGVyLmhlaWdodCAmJiB0aGlzLnJvd1NpemUgPT09IG90aGVyLnJvd1NpemUgJiYKCSAgICAgICAgICAgIEFycmF5c18xLmRlZmF1bHQuZXF1YWxzKHRoaXMuYml0cywgb3RoZXIuYml0cyk7CgkgICAgfTsKCSAgICAvKkBPdmVycmlkZSovCgkgICAgQml0TWF0cml4LnByb3RvdHlwZS5oYXNoQ29kZSA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgdmFyIGhhc2ggPSB0aGlzLndpZHRoOwoJICAgICAgICBoYXNoID0gMzEgKiBoYXNoICsgdGhpcy53aWR0aDsKCSAgICAgICAgaGFzaCA9IDMxICogaGFzaCArIHRoaXMuaGVpZ2h0OwoJICAgICAgICBoYXNoID0gMzEgKiBoYXNoICsgdGhpcy5yb3dTaXplOwoJICAgICAgICBoYXNoID0gMzEgKiBoYXNoICsgQXJyYXlzXzEuZGVmYXVsdC5oYXNoQ29kZSh0aGlzLmJpdHMpOwoJICAgICAgICByZXR1cm4gaGFzaDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIHVzaW5nICJYIiBmb3Igc2V0IGFuZCAiICIgZm9yIHVuc2V0IGJpdHMKCSAgICAgKi8KCSAgICAvKkBPdmVycmlkZSovCgkgICAgLy8gcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7CgkgICAgLy8gICByZXR1cm4gdG9TdHJpbmcoIjogIlgsICIgICIpCgkgICAgLy8gfQoJICAgIC8qKgoJICAgICAqIEBwYXJhbSBzZXRTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZXQgYml0CgkgICAgICogQHBhcmFtIHVuc2V0U3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGFuIHVuc2V0IGJpdAoJICAgICAqIEByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGVudGlyZSBtYXRyaXggdXRpbGl6aW5nIGdpdmVuIHN0cmluZ3MKCSAgICAgKi8KCSAgICAvLyBwdWJsaWMgdG9TdHJpbmcoc2V0U3RyaW5nOiBzdHJpbmcgPSAiWCAiLCB1bnNldFN0cmluZzogc3RyaW5nID0gIiAgIik6IHN0cmluZyB7CgkgICAgLy8gICByZXR1cm4gdGhpcy5idWlsZFRvU3RyaW5nKHNldFN0cmluZywgdW5zZXRTdHJpbmcsICJcbiIpCgkgICAgLy8gfQoJICAgIC8qKgoJICAgICAqIEBwYXJhbSBzZXRTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZXQgYml0CgkgICAgICogQHBhcmFtIHVuc2V0U3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGFuIHVuc2V0IGJpdAoJICAgICAqIEBwYXJhbSBsaW5lU2VwYXJhdG9yIG5ld2xpbmUgY2hhcmFjdGVyIGluIHN0cmluZyByZXByZXNlbnRhdGlvbgoJICAgICAqIEByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGVudGlyZSBtYXRyaXggdXRpbGl6aW5nIGdpdmVuIHN0cmluZ3MgYW5kIGxpbmUgc2VwYXJhdG9yCgkgICAgICogQGRlcHJlY2F0ZWQgY2FsbCB7QGxpbmsgI3RvU3RyaW5nKFN0cmluZyxTdHJpbmcpfSBvbmx5LCB3aGljaCB1c2VzIFxuIGxpbmUgc2VwYXJhdG9yIGFsd2F5cwoJICAgICAqLwoJICAgIC8vIEBEZXByZWNhdGVkCgkgICAgQml0TWF0cml4LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChzZXRTdHJpbmcsIHVuc2V0U3RyaW5nLCBsaW5lU2VwYXJhdG9yKSB7CgkgICAgICAgIGlmIChzZXRTdHJpbmcgPT09IHZvaWQgMCkgeyBzZXRTdHJpbmcgPSAnWCAnOyB9CgkgICAgICAgIGlmICh1bnNldFN0cmluZyA9PT0gdm9pZCAwKSB7IHVuc2V0U3RyaW5nID0gJyAgJzsgfQoJICAgICAgICBpZiAobGluZVNlcGFyYXRvciA9PT0gdm9pZCAwKSB7IGxpbmVTZXBhcmF0b3IgPSAnXG4nOyB9CgkgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkVG9TdHJpbmcoc2V0U3RyaW5nLCB1bnNldFN0cmluZywgbGluZVNlcGFyYXRvcik7CgkgICAgfTsKCSAgICBCaXRNYXRyaXgucHJvdG90eXBlLmJ1aWxkVG9TdHJpbmcgPSBmdW5jdGlvbiAoc2V0U3RyaW5nLCB1bnNldFN0cmluZywgbGluZVNlcGFyYXRvcikgewoJICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IFN0cmluZ0J1aWxkZXJfMSQyLmRlZmF1bHQoKTsKCSAgICAgICAgLy8gcmVzdWx0LmFwcGVuZChsaW5lU2VwYXJhdG9yKTsKCSAgICAgICAgZm9yICh2YXIgeSA9IDAsIGhlaWdodCA9IHRoaXMuaGVpZ2h0OyB5IDwgaGVpZ2h0OyB5KyspIHsKCSAgICAgICAgICAgIGZvciAodmFyIHggPSAwLCB3aWR0aCA9IHRoaXMud2lkdGg7IHggPCB3aWR0aDsgeCsrKSB7CgkgICAgICAgICAgICAgICAgcmVzdWx0LmFwcGVuZCh0aGlzLmdldCh4LCB5KSA/IHNldFN0cmluZyA6IHVuc2V0U3RyaW5nKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQobGluZVNlcGFyYXRvcik7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHJlc3VsdC50b1N0cmluZygpOwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEJpdE1hdHJpeC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiBuZXcgQml0TWF0cml4KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnJvd1NpemUsIHRoaXMuYml0cy5zbGljZSgpKTsKCSAgICB9OwoJICAgIHJldHVybiBCaXRNYXRyaXg7Cgl9KCkpOwoJQml0TWF0cml4JDEuZGVmYXVsdCA9IEJpdE1hdHJpeDsKCgl2YXIgTm90Rm91bmRFeGNlcHRpb24kMSA9IHt9OwoKCXZhciBfX2V4dGVuZHMkZCA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7CgkgICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CgkgICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8CgkgICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTsKCSAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgfTsKCSAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9CgkgICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTsKCSAgICB9OwoJfSkoKTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RGb3VuZEV4Y2VwdGlvbiQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgRXhjZXB0aW9uXzEkNSA9IEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiBDdXN0b20gRXJyb3IgY2xhc3Mgb2YgdHlwZSBFeGNlcHRpb24uCgkgKi8KCXZhciBOb3RGb3VuZEV4Y2VwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHsKCSAgICBfX2V4dGVuZHMkZChOb3RGb3VuZEV4Y2VwdGlvbiwgX3N1cGVyKTsKCSAgICBmdW5jdGlvbiBOb3RGb3VuZEV4Y2VwdGlvbigpIHsKCSAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzOwoJICAgIH0KCSAgICBOb3RGb3VuZEV4Y2VwdGlvbi5nZXROb3RGb3VuZEluc3RhbmNlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gbmV3IE5vdEZvdW5kRXhjZXB0aW9uKCk7CgkgICAgfTsKCSAgICBOb3RGb3VuZEV4Y2VwdGlvbi5raW5kID0gJ05vdEZvdW5kRXhjZXB0aW9uJzsKCSAgICByZXR1cm4gTm90Rm91bmRFeGNlcHRpb247Cgl9KEV4Y2VwdGlvbl8xJDUuZGVmYXVsdCkpOwoJTm90Rm91bmRFeGNlcHRpb24kMS5kZWZhdWx0ID0gTm90Rm91bmRFeGNlcHRpb247CgoJLyoKCSAqIENvcHlyaWdodCAyMDA5IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCXZhciBfX2V4dGVuZHMkYyA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7CgkgICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CgkgICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8CgkgICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTsKCSAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgfTsKCSAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9CgkgICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTsKCSAgICB9OwoJfSkoKTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZy5jb21tb24geyovCgl2YXIgQmluYXJpemVyXzEgPSBCaW5hcml6ZXIkMTsKCXZhciBCaXRBcnJheV8xID0gQml0QXJyYXkkMTsKCXZhciBCaXRNYXRyaXhfMSQ1ID0gQml0TWF0cml4JDE7Cgl2YXIgTm90Rm91bmRFeGNlcHRpb25fMSQ2ID0gTm90Rm91bmRFeGNlcHRpb24kMTsKCS8qKgoJICogVGhpcyBCaW5hcml6ZXIgaW1wbGVtZW50YXRpb24gdXNlcyB0aGUgb2xkIFpYaW5nIGdsb2JhbCBoaXN0b2dyYW0gYXBwcm9hY2guIEl0IGlzIHN1aXRhYmxlCgkgKiBmb3IgbG93LWVuZCBtb2JpbGUgZGV2aWNlcyB3aGljaCBkb24ndCBoYXZlIGVub3VnaCBDUFUgb3IgbWVtb3J5IHRvIHVzZSBhIGxvY2FsIHRocmVzaG9sZGluZwoJICogYWxnb3JpdGhtLiBIb3dldmVyLCBiZWNhdXNlIGl0IHBpY2tzIGEgZ2xvYmFsIGJsYWNrIHBvaW50LCBpdCBjYW5ub3QgaGFuZGxlIGRpZmZpY3VsdCBzaGFkb3dzCgkgKiBhbmQgZ3JhZGllbnRzLgoJICoKCSAqIEZhc3RlciBtb2JpbGUgZGV2aWNlcyBhbmQgYWxsIGRlc2t0b3AgYXBwbGljYXRpb25zIHNob3VsZCBwcm9iYWJseSB1c2UgSHlicmlkQmluYXJpemVyIGluc3RlYWQuCgkgKgoJICogQGF1dGhvciBkc3dpdGtpbkBnb29nbGUuY29tIChEYW5pZWwgU3dpdGtpbikKCSAqIEBhdXRob3IgU2VhbiBPd2VuCgkgKi8KCXZhciBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7CgkgICAgX19leHRlbmRzJGMoR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyLCBfc3VwZXIpOwoJICAgIGZ1bmN0aW9uIEdsb2JhbEhpc3RvZ3JhbUJpbmFyaXplcihzb3VyY2UpIHsKCSAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc291cmNlKSB8fCB0aGlzOwoJICAgICAgICBfdGhpcy5sdW1pbmFuY2VzID0gR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyLkVNUFRZOwoJICAgICAgICBfdGhpcy5idWNrZXRzID0gbmV3IEludDMyQXJyYXkoR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyLkxVTUlOQU5DRV9CVUNLRVRTKTsKCSAgICAgICAgcmV0dXJuIF90aGlzOwoJICAgIH0KCSAgICAvLyBBcHBsaWVzIHNpbXBsZSBzaGFycGVuaW5nIHRvIHRoZSByb3cgZGF0YSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlIG9mIHRoZSAxRCBSZWFkZXJzLgoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIucHJvdG90eXBlLmdldEJsYWNrUm93ID0gZnVuY3Rpb24gKHkgLyppbnQqLywgcm93KSB7CgkgICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLmdldEx1bWluYW5jZVNvdXJjZSgpOwoJICAgICAgICB2YXIgd2lkdGggPSBzb3VyY2UuZ2V0V2lkdGgoKTsKCSAgICAgICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkIHx8IHJvdyA9PT0gbnVsbCB8fCByb3cuZ2V0U2l6ZSgpIDwgd2lkdGgpIHsKCSAgICAgICAgICAgIHJvdyA9IG5ldyBCaXRBcnJheV8xLmRlZmF1bHQod2lkdGgpOwoJICAgICAgICB9CgkgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgcm93LmNsZWFyKCk7CgkgICAgICAgIH0KCSAgICAgICAgdGhpcy5pbml0QXJyYXlzKHdpZHRoKTsKCSAgICAgICAgdmFyIGxvY2FsTHVtaW5hbmNlcyA9IHNvdXJjZS5nZXRSb3coeSwgdGhpcy5sdW1pbmFuY2VzKTsKCSAgICAgICAgdmFyIGxvY2FsQnVja2V0cyA9IHRoaXMuYnVja2V0czsKCSAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7CgkgICAgICAgICAgICBsb2NhbEJ1Y2tldHNbKGxvY2FsTHVtaW5hbmNlc1t4XSAmIDB4ZmYpID4+IEdsb2JhbEhpc3RvZ3JhbUJpbmFyaXplci5MVU1JTkFOQ0VfU0hJRlRdKys7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIGJsYWNrUG9pbnQgPSBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIuZXN0aW1hdGVCbGFja1BvaW50KGxvY2FsQnVja2V0cyk7CgkgICAgICAgIGlmICh3aWR0aCA8IDMpIHsKCSAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgdmVyeSBzbWFsbCBpbWFnZXMKCSAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgd2lkdGg7IHgrKykgewoJICAgICAgICAgICAgICAgIGlmICgobG9jYWxMdW1pbmFuY2VzW3hdICYgMHhmZikgPCBibGFja1BvaW50KSB7CgkgICAgICAgICAgICAgICAgICAgIHJvdy5zZXQoeCk7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgdmFyIGxlZnQgPSBsb2NhbEx1bWluYW5jZXNbMF0gJiAweGZmOwoJICAgICAgICAgICAgdmFyIGNlbnRlciA9IGxvY2FsTHVtaW5hbmNlc1sxXSAmIDB4ZmY7CgkgICAgICAgICAgICBmb3IgKHZhciB4ID0gMTsgeCA8IHdpZHRoIC0gMTsgeCsrKSB7CgkgICAgICAgICAgICAgICAgdmFyIHJpZ2h0ID0gbG9jYWxMdW1pbmFuY2VzW3ggKyAxXSAmIDB4ZmY7CgkgICAgICAgICAgICAgICAgLy8gQSBzaW1wbGUgLTEgNCAtMSBib3ggZmlsdGVyIHdpdGggYSB3ZWlnaHQgb2YgMi4KCSAgICAgICAgICAgICAgICBpZiAoKChjZW50ZXIgKiA0KSAtIGxlZnQgLSByaWdodCkgLyAyIDwgYmxhY2tQb2ludCkgewoJICAgICAgICAgICAgICAgICAgICByb3cuc2V0KHgpOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBsZWZ0ID0gY2VudGVyOwoJICAgICAgICAgICAgICAgIGNlbnRlciA9IHJpZ2h0OwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHJldHVybiByb3c7CgkgICAgfTsKCSAgICAvLyBEb2VzIG5vdCBzaGFycGVuIHRoZSBkYXRhLCBhcyB0aGlzIGNhbGwgaXMgaW50ZW5kZWQgdG8gb25seSBiZSB1c2VkIGJ5IDJEIFJlYWRlcnMuCgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEdsb2JhbEhpc3RvZ3JhbUJpbmFyaXplci5wcm90b3R5cGUuZ2V0QmxhY2tNYXRyaXggPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLmdldEx1bWluYW5jZVNvdXJjZSgpOwoJICAgICAgICB2YXIgd2lkdGggPSBzb3VyY2UuZ2V0V2lkdGgoKTsKCSAgICAgICAgdmFyIGhlaWdodCA9IHNvdXJjZS5nZXRIZWlnaHQoKTsKCSAgICAgICAgdmFyIG1hdHJpeCA9IG5ldyBCaXRNYXRyaXhfMSQ1LmRlZmF1bHQod2lkdGgsIGhlaWdodCk7CgkgICAgICAgIC8vIFF1aWNrbHkgY2FsY3VsYXRlcyB0aGUgaGlzdG9ncmFtIGJ5IHNhbXBsaW5nIGZvdXIgcm93cyBmcm9tIHRoZSBpbWFnZS4gVGhpcyBwcm92ZWQgdG8gYmUKCSAgICAgICAgLy8gbW9yZSByb2J1c3Qgb24gdGhlIGJsYWNrYm94IHRlc3RzIHRoYW4gc2FtcGxpbmcgYSBkaWFnb25hbCBhcyB3ZSB1c2VkIHRvIGRvLgoJICAgICAgICB0aGlzLmluaXRBcnJheXMod2lkdGgpOwoJICAgICAgICB2YXIgbG9jYWxCdWNrZXRzID0gdGhpcy5idWNrZXRzOwoJICAgICAgICBmb3IgKHZhciB5ID0gMTsgeSA8IDU7IHkrKykgewoJICAgICAgICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IoKGhlaWdodCAqIHkpIC8gNSk7CgkgICAgICAgICAgICB2YXIgbG9jYWxMdW1pbmFuY2VzXzEgPSBzb3VyY2UuZ2V0Um93KHJvdywgdGhpcy5sdW1pbmFuY2VzKTsKCSAgICAgICAgICAgIHZhciByaWdodCA9IE1hdGguZmxvb3IoKHdpZHRoICogNCkgLyA1KTsKCSAgICAgICAgICAgIGZvciAodmFyIHggPSBNYXRoLmZsb29yKHdpZHRoIC8gNSk7IHggPCByaWdodDsgeCsrKSB7CgkgICAgICAgICAgICAgICAgdmFyIHBpeGVsID0gbG9jYWxMdW1pbmFuY2VzXzFbeF0gJiAweGZmOwoJICAgICAgICAgICAgICAgIGxvY2FsQnVja2V0c1twaXhlbCA+PiBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIuTFVNSU5BTkNFX1NISUZUXSsrOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHZhciBibGFja1BvaW50ID0gR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyLmVzdGltYXRlQmxhY2tQb2ludChsb2NhbEJ1Y2tldHMpOwoJICAgICAgICAvLyBXZSBkZWxheSByZWFkaW5nIHRoZSBlbnRpcmUgaW1hZ2UgbHVtaW5hbmNlIHVudGlsIHRoZSBibGFjayBwb2ludCBlc3RpbWF0aW9uIHN1Y2NlZWRzLgoJICAgICAgICAvLyBBbHRob3VnaCB3ZSBlbmQgdXAgcmVhZGluZyBmb3VyIHJvd3MgdHdpY2UsIGl0IGlzIGNvbnNpc3RlbnQgd2l0aCBvdXIgbW90dG8gb2YKCSAgICAgICAgLy8gImZhaWwgcXVpY2tseSIgd2hpY2ggaXMgbmVjZXNzYXJ5IGZvciBjb250aW51b3VzIHNjYW5uaW5nLgoJICAgICAgICB2YXIgbG9jYWxMdW1pbmFuY2VzID0gc291cmNlLmdldE1hdHJpeCgpOwoJICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7CgkgICAgICAgICAgICB2YXIgb2Zmc2V0ID0geSAqIHdpZHRoOwoJICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7CgkgICAgICAgICAgICAgICAgdmFyIHBpeGVsID0gbG9jYWxMdW1pbmFuY2VzW29mZnNldCArIHhdICYgMHhmZjsKCSAgICAgICAgICAgICAgICBpZiAocGl4ZWwgPCBibGFja1BvaW50KSB7CgkgICAgICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoeCwgeSk7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBtYXRyaXg7CgkgICAgfTsKCSAgICAvKkBPdmVycmlkZSovCgkgICAgR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyLnByb3RvdHlwZS5jcmVhdGVCaW5hcml6ZXIgPSBmdW5jdGlvbiAoc291cmNlKSB7CgkgICAgICAgIHJldHVybiBuZXcgR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyKHNvdXJjZSk7CgkgICAgfTsKCSAgICBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIucHJvdG90eXBlLmluaXRBcnJheXMgPSBmdW5jdGlvbiAobHVtaW5hbmNlU2l6ZSAvKmludCovKSB7CgkgICAgICAgIGlmICh0aGlzLmx1bWluYW5jZXMubGVuZ3RoIDwgbHVtaW5hbmNlU2l6ZSkgewoJICAgICAgICAgICAgdGhpcy5sdW1pbmFuY2VzID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGx1bWluYW5jZVNpemUpOwoJICAgICAgICB9CgkgICAgICAgIHZhciBidWNrZXRzID0gdGhpcy5idWNrZXRzOwoJICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IEdsb2JhbEhpc3RvZ3JhbUJpbmFyaXplci5MVU1JTkFOQ0VfQlVDS0VUUzsgeCsrKSB7CgkgICAgICAgICAgICBidWNrZXRzW3hdID0gMDsKCSAgICAgICAgfQoJICAgIH07CgkgICAgR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyLmVzdGltYXRlQmxhY2tQb2ludCA9IGZ1bmN0aW9uIChidWNrZXRzKSB7CgkgICAgICAgIC8vIEZpbmQgdGhlIHRhbGxlc3QgcGVhayBpbiB0aGUgaGlzdG9ncmFtLgoJICAgICAgICB2YXIgbnVtQnVja2V0cyA9IGJ1Y2tldHMubGVuZ3RoOwoJICAgICAgICB2YXIgbWF4QnVja2V0Q291bnQgPSAwOwoJICAgICAgICB2YXIgZmlyc3RQZWFrID0gMDsKCSAgICAgICAgdmFyIGZpcnN0UGVha1NpemUgPSAwOwoJICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IG51bUJ1Y2tldHM7IHgrKykgewoJICAgICAgICAgICAgaWYgKGJ1Y2tldHNbeF0gPiBmaXJzdFBlYWtTaXplKSB7CgkgICAgICAgICAgICAgICAgZmlyc3RQZWFrID0geDsKCSAgICAgICAgICAgICAgICBmaXJzdFBlYWtTaXplID0gYnVja2V0c1t4XTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGlmIChidWNrZXRzW3hdID4gbWF4QnVja2V0Q291bnQpIHsKCSAgICAgICAgICAgICAgICBtYXhCdWNrZXRDb3VudCA9IGJ1Y2tldHNbeF07CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgLy8gRmluZCB0aGUgc2Vjb25kLXRhbGxlc3QgcGVhayB3aGljaCBpcyBzb21ld2hhdCBmYXIgZnJvbSB0aGUgdGFsbGVzdCBwZWFrLgoJICAgICAgICB2YXIgc2Vjb25kUGVhayA9IDA7CgkgICAgICAgIHZhciBzZWNvbmRQZWFrU2NvcmUgPSAwOwoJICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IG51bUJ1Y2tldHM7IHgrKykgewoJICAgICAgICAgICAgdmFyIGRpc3RhbmNlVG9CaWdnZXN0ID0geCAtIGZpcnN0UGVhazsKCSAgICAgICAgICAgIC8vIEVuY291cmFnZSBtb3JlIGRpc3RhbnQgc2Vjb25kIHBlYWtzIGJ5IG11bHRpcGx5aW5nIGJ5IHNxdWFyZSBvZiBkaXN0YW5jZS4KCSAgICAgICAgICAgIHZhciBzY29yZSA9IGJ1Y2tldHNbeF0gKiBkaXN0YW5jZVRvQmlnZ2VzdCAqIGRpc3RhbmNlVG9CaWdnZXN0OwoJICAgICAgICAgICAgaWYgKHNjb3JlID4gc2Vjb25kUGVha1Njb3JlKSB7CgkgICAgICAgICAgICAgICAgc2Vjb25kUGVhayA9IHg7CgkgICAgICAgICAgICAgICAgc2Vjb25kUGVha1Njb3JlID0gc2NvcmU7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgLy8gTWFrZSBzdXJlIGZpcnN0UGVhayBjb3JyZXNwb25kcyB0byB0aGUgYmxhY2sgcGVhay4KCSAgICAgICAgaWYgKGZpcnN0UGVhayA+IHNlY29uZFBlYWspIHsKCSAgICAgICAgICAgIHZhciB0ZW1wID0gZmlyc3RQZWFrOwoJICAgICAgICAgICAgZmlyc3RQZWFrID0gc2Vjb25kUGVhazsKCSAgICAgICAgICAgIHNlY29uZFBlYWsgPSB0ZW1wOwoJICAgICAgICB9CgkgICAgICAgIC8vIElmIHRoZXJlIGlzIHRvbyBsaXR0bGUgY29udHJhc3QgaW4gdGhlIGltYWdlIHRvIHBpY2sgYSBtZWFuaW5nZnVsIGJsYWNrIHBvaW50LCB0aHJvdyByYXRoZXIKCSAgICAgICAgLy8gdGhhbiB3YXN0ZSB0aW1lIHRyeWluZyB0byBkZWNvZGUgdGhlIGltYWdlLCBhbmQgcmlzayBmYWxzZSBwb3NpdGl2ZXMuCgkgICAgICAgIGlmIChzZWNvbmRQZWFrIC0gZmlyc3RQZWFrIDw9IG51bUJ1Y2tldHMgLyAxNikgewoJICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uXzEkNi5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgLy8gRmluZCBhIHZhbGxleSBiZXR3ZWVuIHRoZW0gdGhhdCBpcyBsb3cgYW5kIGNsb3NlciB0byB0aGUgd2hpdGUgcGVhay4KCSAgICAgICAgdmFyIGJlc3RWYWxsZXkgPSBzZWNvbmRQZWFrIC0gMTsKCSAgICAgICAgdmFyIGJlc3RWYWxsZXlTY29yZSA9IC0xOwoJICAgICAgICBmb3IgKHZhciB4ID0gc2Vjb25kUGVhayAtIDE7IHggPiBmaXJzdFBlYWs7IHgtLSkgewoJICAgICAgICAgICAgdmFyIGZyb21GaXJzdCA9IHggLSBmaXJzdFBlYWs7CgkgICAgICAgICAgICB2YXIgc2NvcmUgPSBmcm9tRmlyc3QgKiBmcm9tRmlyc3QgKiAoc2Vjb25kUGVhayAtIHgpICogKG1heEJ1Y2tldENvdW50IC0gYnVja2V0c1t4XSk7CgkgICAgICAgICAgICBpZiAoc2NvcmUgPiBiZXN0VmFsbGV5U2NvcmUpIHsKCSAgICAgICAgICAgICAgICBiZXN0VmFsbGV5ID0geDsKCSAgICAgICAgICAgICAgICBiZXN0VmFsbGV5U2NvcmUgPSBzY29yZTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gYmVzdFZhbGxleSA8PCBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIuTFVNSU5BTkNFX1NISUZUOwoJICAgIH07CgkgICAgR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyLkxVTUlOQU5DRV9CSVRTID0gNTsKCSAgICBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIuTFVNSU5BTkNFX1NISUZUID0gOCAtIEdsb2JhbEhpc3RvZ3JhbUJpbmFyaXplci5MVU1JTkFOQ0VfQklUUzsKCSAgICBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIuTFVNSU5BTkNFX0JVQ0tFVFMgPSAxIDw8IEdsb2JhbEhpc3RvZ3JhbUJpbmFyaXplci5MVU1JTkFOQ0VfQklUUzsKCSAgICBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIuRU1QVFkgPSBVaW50OENsYW1wZWRBcnJheS5mcm9tKFswXSk7CgkgICAgcmV0dXJuIEdsb2JhbEhpc3RvZ3JhbUJpbmFyaXplcjsKCX0oQmluYXJpemVyXzEuZGVmYXVsdCkpOwoJR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyJDEuZGVmYXVsdCA9IEdsb2JhbEhpc3RvZ3JhbUJpbmFyaXplcjsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDkgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJdmFyIF9fZXh0ZW5kcyRiID0gKGNvbW1vbmpzR2xvYmFsICYmIGNvbW1vbmpzR2xvYmFsLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHsKCSAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwKCSAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHwKCSAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9OwoJICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICB9OwoJICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH0KCSAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpOwoJICAgIH07Cgl9KSgpOwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEh5YnJpZEJpbmFyaXplciQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyXzEgPSBHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXIkMTsKCXZhciBCaXRNYXRyaXhfMSQ0ID0gQml0TWF0cml4JDE7CgkvKioKCSAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBhIGxvY2FsIHRocmVzaG9sZGluZyBhbGdvcml0aG0sIHdoaWNoIHdoaWxlIHNsb3dlciB0aGFuIHRoZQoJICogR2xvYmFsSGlzdG9ncmFtQmluYXJpemVyLCBpcyBmYWlybHkgZWZmaWNpZW50IGZvciB3aGF0IGl0IGRvZXMuIEl0IGlzIGRlc2lnbmVkIGZvcgoJICogaGlnaCBmcmVxdWVuY3kgaW1hZ2VzIG9mIGJhcmNvZGVzIHdpdGggYmxhY2sgZGF0YSBvbiB3aGl0ZSBiYWNrZ3JvdW5kcy4gRm9yIHRoaXMgYXBwbGljYXRpb24sCgkgKiBpdCBkb2VzIGEgbXVjaCBiZXR0ZXIgam9iIHRoYW4gYSBnbG9iYWwgYmxhY2twb2ludCB3aXRoIHNldmVyZSBzaGFkb3dzIGFuZCBncmFkaWVudHMuCgkgKiBIb3dldmVyIGl0IHRlbmRzIHRvIHByb2R1Y2UgYXJ0aWZhY3RzIG9uIGxvd2VyIGZyZXF1ZW5jeSBpbWFnZXMgYW5kIGlzIHRoZXJlZm9yZSBub3QKCSAqIGEgZ29vZCBnZW5lcmFsIHB1cnBvc2UgYmluYXJpemVyIGZvciB1c2VzIG91dHNpZGUgWlhpbmcuCgkgKgoJICogVGhpcyBjbGFzcyBleHRlbmRzIEdsb2JhbEhpc3RvZ3JhbUJpbmFyaXplciwgdXNpbmcgdGhlIG9sZGVyIGhpc3RvZ3JhbSBhcHByb2FjaCBmb3IgMUQgcmVhZGVycywKCSAqIGFuZCB0aGUgbmV3ZXIgbG9jYWwgYXBwcm9hY2ggZm9yIDJEIHJlYWRlcnMuIDFEIGRlY29kaW5nIHVzaW5nIGEgcGVyLXJvdyBoaXN0b2dyYW0gaXMgYWxyZWFkeQoJICogaW5oZXJlbnRseSBsb2NhbCwgYW5kIG9ubHkgZmFpbHMgZm9yIGhvcml6b250YWwgZ3JhZGllbnRzLiBXZSBjYW4gcmV2aXNpdCB0aGF0IHByb2JsZW0gbGF0ZXIsCgkgKiBidXQgZm9yIG5vdyBpdCB3YXMgbm90IGEgd2luIHRvIHVzZSBsb2NhbCBibG9ja3MgZm9yIDFELgoJICoKCSAqIFRoaXMgQmluYXJpemVyIGlzIHRoZSBkZWZhdWx0IGZvciB0aGUgdW5pdCB0ZXN0cyBhbmQgdGhlIHJlY29tbWVuZGVkIGNsYXNzIGZvciBsaWJyYXJ5IHVzZXJzLgoJICoKCSAqIEBhdXRob3IgZHN3aXRraW5AZ29vZ2xlLmNvbSAoRGFuaWVsIFN3aXRraW4pCgkgKi8KCXZhciBIeWJyaWRCaW5hcml6ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7CgkgICAgX19leHRlbmRzJGIoSHlicmlkQmluYXJpemVyLCBfc3VwZXIpOwoJICAgIGZ1bmN0aW9uIEh5YnJpZEJpbmFyaXplcihzb3VyY2UpIHsKCSAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc291cmNlKSB8fCB0aGlzOwoJICAgICAgICBfdGhpcy5tYXRyaXggPSBudWxsOwoJICAgICAgICByZXR1cm4gX3RoaXM7CgkgICAgfQoJICAgIC8qKgoJICAgICAqIENhbGN1bGF0ZXMgdGhlIGZpbmFsIEJpdE1hdHJpeCBvbmNlIGZvciBhbGwgcmVxdWVzdHMuIFRoaXMgY291bGQgYmUgY2FsbGVkIG9uY2UgZnJvbSB0aGUKCSAgICAgKiBjb25zdHJ1Y3RvciBpbnN0ZWFkLCBidXQgdGhlcmUgYXJlIHNvbWUgYWR2YW50YWdlcyB0byBkb2luZyBpdCBsYXppbHksIHN1Y2ggYXMgbWFraW5nCgkgICAgICogcHJvZmlsaW5nIGVhc2llciwgYW5kIG5vdCBkb2luZyBoZWF2eSBsaWZ0aW5nIHdoZW4gY2FsbGVycyBkb24ndCBleHBlY3QgaXQuCgkgICAgICovCgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEh5YnJpZEJpbmFyaXplci5wcm90b3R5cGUuZ2V0QmxhY2tNYXRyaXggPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIGlmICh0aGlzLm1hdHJpeCAhPT0gbnVsbCkgewoJICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4OwoJICAgICAgICB9CgkgICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLmdldEx1bWluYW5jZVNvdXJjZSgpOwoJICAgICAgICB2YXIgd2lkdGggPSBzb3VyY2UuZ2V0V2lkdGgoKTsKCSAgICAgICAgdmFyIGhlaWdodCA9IHNvdXJjZS5nZXRIZWlnaHQoKTsKCSAgICAgICAgaWYgKHdpZHRoID49IEh5YnJpZEJpbmFyaXplci5NSU5JTVVNX0RJTUVOU0lPTiAmJiBoZWlnaHQgPj0gSHlicmlkQmluYXJpemVyLk1JTklNVU1fRElNRU5TSU9OKSB7CgkgICAgICAgICAgICB2YXIgbHVtaW5hbmNlcyA9IHNvdXJjZS5nZXRNYXRyaXgoKTsKCSAgICAgICAgICAgIHZhciBzdWJXaWR0aCA9IHdpZHRoID4+IEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFX1BPV0VSOwoJICAgICAgICAgICAgaWYgKCh3aWR0aCAmIEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFX01BU0spICE9PSAwKSB7CgkgICAgICAgICAgICAgICAgc3ViV2lkdGgrKzsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHZhciBzdWJIZWlnaHQgPSBoZWlnaHQgPj4gSHlicmlkQmluYXJpemVyLkJMT0NLX1NJWkVfUE9XRVI7CgkgICAgICAgICAgICBpZiAoKGhlaWdodCAmIEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFX01BU0spICE9PSAwKSB7CgkgICAgICAgICAgICAgICAgc3ViSGVpZ2h0Kys7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICB2YXIgYmxhY2tQb2ludHMgPSBIeWJyaWRCaW5hcml6ZXIuY2FsY3VsYXRlQmxhY2tQb2ludHMobHVtaW5hbmNlcywgc3ViV2lkdGgsIHN1YkhlaWdodCwgd2lkdGgsIGhlaWdodCk7CgkgICAgICAgICAgICB2YXIgbmV3TWF0cml4ID0gbmV3IEJpdE1hdHJpeF8xJDQuZGVmYXVsdCh3aWR0aCwgaGVpZ2h0KTsKCSAgICAgICAgICAgIEh5YnJpZEJpbmFyaXplci5jYWxjdWxhdGVUaHJlc2hvbGRGb3JCbG9jayhsdW1pbmFuY2VzLCBzdWJXaWR0aCwgc3ViSGVpZ2h0LCB3aWR0aCwgaGVpZ2h0LCBibGFja1BvaW50cywgbmV3TWF0cml4KTsKCSAgICAgICAgICAgIHRoaXMubWF0cml4ID0gbmV3TWF0cml4OwoJICAgICAgICB9CgkgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgLy8gSWYgdGhlIGltYWdlIGlzIHRvbyBzbWFsbCwgZmFsbCBiYWNrIHRvIHRoZSBnbG9iYWwgaGlzdG9ncmFtIGFwcHJvYWNoLgoJICAgICAgICAgICAgdGhpcy5tYXRyaXggPSBfc3VwZXIucHJvdG90eXBlLmdldEJsYWNrTWF0cml4LmNhbGwodGhpcyk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4OwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEh5YnJpZEJpbmFyaXplci5wcm90b3R5cGUuY3JlYXRlQmluYXJpemVyID0gZnVuY3Rpb24gKHNvdXJjZSkgewoJICAgICAgICByZXR1cm4gbmV3IEh5YnJpZEJpbmFyaXplcihzb3VyY2UpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogRm9yIGVhY2ggYmxvY2sgaW4gdGhlIGltYWdlLCBjYWxjdWxhdGUgdGhlIGF2ZXJhZ2UgYmxhY2sgcG9pbnQgdXNpbmcgYSA1eDUgZ3JpZAoJICAgICAqIG9mIHRoZSBibG9ja3MgYXJvdW5kIGl0LiBBbHNvIGhhbmRsZXMgdGhlIGNvcm5lciBjYXNlcyAoZnJhY3Rpb25hbCBibG9ja3MgYXJlIGNvbXB1dGVkIGJhc2VkCgkgICAgICogb24gdGhlIGxhc3QgcGl4ZWxzIGluIHRoZSByb3cvY29sdW1uIHdoaWNoIGFyZSBhbHNvIHVzZWQgaW4gdGhlIHByZXZpb3VzIGJsb2NrKS4KCSAgICAgKi8KCSAgICBIeWJyaWRCaW5hcml6ZXIuY2FsY3VsYXRlVGhyZXNob2xkRm9yQmxvY2sgPSBmdW5jdGlvbiAobHVtaW5hbmNlcywgc3ViV2lkdGggLyppbnQqLywgc3ViSGVpZ2h0IC8qaW50Ki8sIHdpZHRoIC8qaW50Ki8sIGhlaWdodCAvKmludCovLCBibGFja1BvaW50cywgbWF0cml4KSB7CgkgICAgICAgIHZhciBtYXhZT2Zmc2V0ID0gaGVpZ2h0IC0gSHlicmlkQmluYXJpemVyLkJMT0NLX1NJWkU7CgkgICAgICAgIHZhciBtYXhYT2Zmc2V0ID0gd2lkdGggLSBIeWJyaWRCaW5hcml6ZXIuQkxPQ0tfU0laRTsKCSAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBzdWJIZWlnaHQ7IHkrKykgewoJICAgICAgICAgICAgdmFyIHlvZmZzZXQgPSB5IDw8IEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFX1BPV0VSOwoJICAgICAgICAgICAgaWYgKHlvZmZzZXQgPiBtYXhZT2Zmc2V0KSB7CgkgICAgICAgICAgICAgICAgeW9mZnNldCA9IG1heFlPZmZzZXQ7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICB2YXIgdG9wXzEgPSBIeWJyaWRCaW5hcml6ZXIuY2FwKHksIDIsIHN1YkhlaWdodCAtIDMpOwoJICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBzdWJXaWR0aDsgeCsrKSB7CgkgICAgICAgICAgICAgICAgdmFyIHhvZmZzZXQgPSB4IDw8IEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFX1BPV0VSOwoJICAgICAgICAgICAgICAgIGlmICh4b2Zmc2V0ID4gbWF4WE9mZnNldCkgewoJICAgICAgICAgICAgICAgICAgICB4b2Zmc2V0ID0gbWF4WE9mZnNldDsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBIeWJyaWRCaW5hcml6ZXIuY2FwKHgsIDIsIHN1YldpZHRoIC0gMyk7CgkgICAgICAgICAgICAgICAgdmFyIHN1bSA9IDA7CgkgICAgICAgICAgICAgICAgZm9yICh2YXIgeiA9IC0yOyB6IDw9IDI7IHorKykgewoJICAgICAgICAgICAgICAgICAgICB2YXIgYmxhY2tSb3cgPSBibGFja1BvaW50c1t0b3BfMSArIHpdOwoJICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYmxhY2tSb3dbbGVmdCAtIDJdICsgYmxhY2tSb3dbbGVmdCAtIDFdICsgYmxhY2tSb3dbbGVmdF0gKyBibGFja1Jvd1tsZWZ0ICsgMV0gKyBibGFja1Jvd1tsZWZ0ICsgMl07CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIHZhciBhdmVyYWdlID0gc3VtIC8gMjU7CgkgICAgICAgICAgICAgICAgSHlicmlkQmluYXJpemVyLnRocmVzaG9sZEJsb2NrKGx1bWluYW5jZXMsIHhvZmZzZXQsIHlvZmZzZXQsIGF2ZXJhZ2UsIHdpZHRoLCBtYXRyaXgpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgfTsKCSAgICBIeWJyaWRCaW5hcml6ZXIuY2FwID0gZnVuY3Rpb24gKHZhbHVlIC8qaW50Ki8sIG1pbiAvKmludCovLCBtYXggLyppbnQqLykgewoJICAgICAgICByZXR1cm4gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQXBwbGllcyBhIHNpbmdsZSB0aHJlc2hvbGQgdG8gYSBibG9jayBvZiBwaXhlbHMuCgkgICAgICovCgkgICAgSHlicmlkQmluYXJpemVyLnRocmVzaG9sZEJsb2NrID0gZnVuY3Rpb24gKGx1bWluYW5jZXMsIHhvZmZzZXQgLyppbnQqLywgeW9mZnNldCAvKmludCovLCB0aHJlc2hvbGQgLyppbnQqLywgc3RyaWRlIC8qaW50Ki8sIG1hdHJpeCkgewoJICAgICAgICBmb3IgKHZhciB5ID0gMCwgb2Zmc2V0ID0geW9mZnNldCAqIHN0cmlkZSArIHhvZmZzZXQ7IHkgPCBIeWJyaWRCaW5hcml6ZXIuQkxPQ0tfU0laRTsgeSsrLCBvZmZzZXQgKz0gc3RyaWRlKSB7CgkgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFOyB4KyspIHsKCSAgICAgICAgICAgICAgICAvLyBDb21wYXJpc29uIG5lZWRzIHRvIGJlIDw9IHNvIHRoYXQgYmxhY2sgPT0gMCBwaXhlbHMgYXJlIGJsYWNrIGV2ZW4gaWYgdGhlIHRocmVzaG9sZCBpcyAwLgoJICAgICAgICAgICAgICAgIGlmICgobHVtaW5hbmNlc1tvZmZzZXQgKyB4XSAmIDB4RkYpIDw9IHRocmVzaG9sZCkgewoJICAgICAgICAgICAgICAgICAgICBtYXRyaXguc2V0KHhvZmZzZXQgKyB4LCB5b2Zmc2V0ICsgeSk7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBDYWxjdWxhdGVzIGEgc2luZ2xlIGJsYWNrIHBvaW50IGZvciBlYWNoIGJsb2NrIG9mIHBpeGVscyBhbmQgc2F2ZXMgaXQgYXdheS4KCSAgICAgKiBTZWUgdGhlIGZvbGxvd2luZyB0aHJlYWQgZm9yIGEgZGlzY3Vzc2lvbiBvZiB0aGlzIGFsZ29yaXRobToKCSAgICAgKiAgaHR0cDovL2dyb3Vwcy5nb29nbGUuY29tL2dyb3VwL3p4aW5nL2Jyb3dzZV90aHJlYWQvdGhyZWFkL2QwNmVmYTJjMzVhN2RkYzAKCSAgICAgKi8KCSAgICBIeWJyaWRCaW5hcml6ZXIuY2FsY3VsYXRlQmxhY2tQb2ludHMgPSBmdW5jdGlvbiAobHVtaW5hbmNlcywgc3ViV2lkdGggLyppbnQqLywgc3ViSGVpZ2h0IC8qaW50Ki8sIHdpZHRoIC8qaW50Ki8sIGhlaWdodCAvKmludCovKSB7CgkgICAgICAgIHZhciBtYXhZT2Zmc2V0ID0gaGVpZ2h0IC0gSHlicmlkQmluYXJpemVyLkJMT0NLX1NJWkU7CgkgICAgICAgIHZhciBtYXhYT2Zmc2V0ID0gd2lkdGggLSBIeWJyaWRCaW5hcml6ZXIuQkxPQ0tfU0laRTsKCSAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOndoaXRlc3BhY2UKCSAgICAgICAgdmFyIGJsYWNrUG9pbnRzID0gbmV3IEFycmF5KHN1YkhlaWdodCk7IC8vIHN1YldpZHRoCgkgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgc3ViSGVpZ2h0OyB5KyspIHsKCSAgICAgICAgICAgIGJsYWNrUG9pbnRzW3ldID0gbmV3IEludDMyQXJyYXkoc3ViV2lkdGgpOwoJICAgICAgICAgICAgdmFyIHlvZmZzZXQgPSB5IDw8IEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFX1BPV0VSOwoJICAgICAgICAgICAgaWYgKHlvZmZzZXQgPiBtYXhZT2Zmc2V0KSB7CgkgICAgICAgICAgICAgICAgeW9mZnNldCA9IG1heFlPZmZzZXQ7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHN1YldpZHRoOyB4KyspIHsKCSAgICAgICAgICAgICAgICB2YXIgeG9mZnNldCA9IHggPDwgSHlicmlkQmluYXJpemVyLkJMT0NLX1NJWkVfUE9XRVI7CgkgICAgICAgICAgICAgICAgaWYgKHhvZmZzZXQgPiBtYXhYT2Zmc2V0KSB7CgkgICAgICAgICAgICAgICAgICAgIHhvZmZzZXQgPSBtYXhYT2Zmc2V0OwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB2YXIgc3VtID0gMDsKCSAgICAgICAgICAgICAgICB2YXIgbWluID0gMHhGRjsKCSAgICAgICAgICAgICAgICB2YXIgbWF4ID0gMDsKCSAgICAgICAgICAgICAgICBmb3IgKHZhciB5eSA9IDAsIG9mZnNldCA9IHlvZmZzZXQgKiB3aWR0aCArIHhvZmZzZXQ7IHl5IDwgSHlicmlkQmluYXJpemVyLkJMT0NLX1NJWkU7IHl5KyssIG9mZnNldCArPSB3aWR0aCkgewoJICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4eCA9IDA7IHh4IDwgSHlicmlkQmluYXJpemVyLkJMT0NLX1NJWkU7IHh4KyspIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaXhlbCA9IGx1bWluYW5jZXNbb2Zmc2V0ICsgeHhdICYgMHhGRjsKCSAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSBwaXhlbDsKCSAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0aWxsIGxvb2tpbmcgZm9yIGdvb2QgY29udHJhc3QKCSAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaXhlbCA8IG1pbikgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiA9IHBpeGVsOwoJICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBpeGVsID4gbWF4KSB7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4ID0gcGl4ZWw7CgkgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgLy8gc2hvcnQtY2lyY3VpdCBtaW4vbWF4IHRlc3RzIG9uY2UgZHluYW1pYyByYW5nZSBpcyBtZXQKCSAgICAgICAgICAgICAgICAgICAgaWYgKG1heCAtIG1pbiA+IEh5YnJpZEJpbmFyaXplci5NSU5fRFlOQU1JQ19SQU5HRSkgewoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmluaXNoIHRoZSByZXN0IG9mIHRoZSByb3dzIHF1aWNrbHkKCSAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoeXkrKywgb2Zmc2V0ICs9IHdpZHRoOyB5eSA8IEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFOyB5eSsrLCBvZmZzZXQgKz0gd2lkdGgpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4eCA9IDA7IHh4IDwgSHlicmlkQmluYXJpemVyLkJMT0NLX1NJWkU7IHh4KyspIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IGx1bWluYW5jZXNbb2Zmc2V0ICsgeHhdICYgMHhGRjsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgLy8gVGhlIGRlZmF1bHQgZXN0aW1hdGUgaXMgdGhlIGF2ZXJhZ2Ugb2YgdGhlIHZhbHVlcyBpbiB0aGUgYmxvY2suCgkgICAgICAgICAgICAgICAgdmFyIGF2ZXJhZ2UgPSBzdW0gPj4gKEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFX1BPV0VSICogMik7CgkgICAgICAgICAgICAgICAgaWYgKG1heCAtIG1pbiA8PSBIeWJyaWRCaW5hcml6ZXIuTUlOX0RZTkFNSUNfUkFOR0UpIHsKCSAgICAgICAgICAgICAgICAgICAgLy8gSWYgdmFyaWF0aW9uIHdpdGhpbiB0aGUgYmxvY2sgaXMgbG93LCBhc3N1bWUgdGhpcyBpcyBhIGJsb2NrIHdpdGggb25seSBsaWdodCBvciBvbmx5CgkgICAgICAgICAgICAgICAgICAgIC8vIGRhcmsgcGl4ZWxzLiBJbiB0aGF0IGNhc2Ugd2UgZG8gbm90IHdhbnQgdG8gdXNlIHRoZSBhdmVyYWdlLCBhcyBpdCB3b3VsZCBkaXZpZGUgdGhpcwoJICAgICAgICAgICAgICAgICAgICAvLyBsb3cgY29udHJhc3QgYXJlYSBpbnRvIGJsYWNrIGFuZCB3aGl0ZSBwaXhlbHMsIGVzc2VudGlhbGx5IGNyZWF0aW5nIGRhdGEgb3V0IG9mIG5vaXNlLgoJICAgICAgICAgICAgICAgICAgICAvLwoJICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZGVmYXVsdCBhc3N1bXB0aW9uIGlzIHRoYXQgdGhlIGJsb2NrIGlzIGxpZ2h0L2JhY2tncm91bmQuIFNpbmNlIG5vIGVzdGltYXRlIGZvcgoJICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbGV2ZWwgb2YgZGFyayBwaXhlbHMgZXhpc3RzIGxvY2FsbHksIHVzZSBoYWxmIHRoZSBtaW4gZm9yIHRoZSBibG9jay4KCSAgICAgICAgICAgICAgICAgICAgYXZlcmFnZSA9IG1pbiAvIDI7CgkgICAgICAgICAgICAgICAgICAgIGlmICh5ID4gMCAmJiB4ID4gMCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCB0aGUgIndoaXRlIGJhY2tncm91bmQiIGFzc3VtcHRpb24gZm9yIGJsb2NrcyB0aGF0IGhhdmUgbmVpZ2hib3JzIGJ5IGNvbXBhcmluZwoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHBpeGVscyBpbiB0aGlzIGJsb2NrIHRvIHRoZSBwcmV2aW91c2x5IGNhbGN1bGF0ZWQgYmxhY2sgcG9pbnRzLiBUaGlzIGlzIGJhc2VkIG9uCgkgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZmFjdCB0aGF0IGRhcmsgYmFyY29kZSBzeW1ib2xvZ3kgaXMgYWx3YXlzIHN1cnJvdW5kZWQgYnkgc29tZSBhbW91bnQgb2YgbGlnaHQKCSAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQgZm9yIHdoaWNoIHJlYXNvbmFibGUgYmxhY2sgcG9pbnQgZXN0aW1hdGVzIHdlcmUgbWFkZS4gVGhlIGJwIGVzdGltYXRlZCBhdAoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGJvdW5kYXJpZXMgaXMgdXNlZCBmb3IgdGhlIGludGVyaW9yLgoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIChtaW4gPCBicCkgaXMgYXJiaXRyYXJ5IGJ1dCB3b3JrcyBiZXR0ZXIgdGhhbiBvdGhlciBoZXVyaXN0aWNzIHRoYXQgd2VyZSB0cmllZC4KCSAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdmVyYWdlTmVpZ2hib3JCbGFja1BvaW50ID0gKGJsYWNrUG9pbnRzW3kgLSAxXVt4XSArICgyICogYmxhY2tQb2ludHNbeV1beCAtIDFdKSArIGJsYWNrUG9pbnRzW3kgLSAxXVt4IC0gMV0pIC8gNDsKCSAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaW4gPCBhdmVyYWdlTmVpZ2hib3JCbGFja1BvaW50KSB7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZlcmFnZSA9IGF2ZXJhZ2VOZWlnaGJvckJsYWNrUG9pbnQ7CgkgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgYmxhY2tQb2ludHNbeV1beF0gPSBhdmVyYWdlOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBibGFja1BvaW50czsKCSAgICB9OwoJICAgIC8vIFRoaXMgY2xhc3MgdXNlcyA1eDUgYmxvY2tzIHRvIGNvbXB1dGUgbG9jYWwgbHVtaW5hbmNlLCB3aGVyZSBlYWNoIGJsb2NrIGlzIDh4OCBwaXhlbHMuCgkgICAgLy8gU28gdGhpcyBpcyB0aGUgc21hbGxlc3QgZGltZW5zaW9uIGluIGVhY2ggYXhpcyB3ZSBjYW4gYWNjZXB0LgoJICAgIEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFX1BPV0VSID0gMzsKCSAgICBIeWJyaWRCaW5hcml6ZXIuQkxPQ0tfU0laRSA9IDEgPDwgSHlicmlkQmluYXJpemVyLkJMT0NLX1NJWkVfUE9XRVI7IC8vIC4uLjAxMDAuLi4wMAoJICAgIEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFX01BU0sgPSBIeWJyaWRCaW5hcml6ZXIuQkxPQ0tfU0laRSAtIDE7IC8vIC4uLjAwMTEuLi4xMQoJICAgIEh5YnJpZEJpbmFyaXplci5NSU5JTVVNX0RJTUVOU0lPTiA9IEh5YnJpZEJpbmFyaXplci5CTE9DS19TSVpFICogNTsKCSAgICBIeWJyaWRCaW5hcml6ZXIuTUlOX0RZTkFNSUNfUkFOR0UgPSAyNDsKCSAgICByZXR1cm4gSHlicmlkQmluYXJpemVyOwoJfShHbG9iYWxIaXN0b2dyYW1CaW5hcml6ZXJfMS5kZWZhdWx0KSk7Cgl2YXIgX2RlZmF1bHQkMiA9IEh5YnJpZEJpbmFyaXplciQxLmRlZmF1bHQgPSBIeWJyaWRCaW5hcml6ZXI7CgoJdmFyIFJHQkx1bWluYW5jZVNvdXJjZSQxID0ge307CgoJdmFyIEludmVydGVkTHVtaW5hbmNlU291cmNlJDEgPSB7fTsKCgl2YXIgTHVtaW5hbmNlU291cmNlJDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDkgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEx1bWluYW5jZVNvdXJjZSQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgU3RyaW5nQnVpbGRlcl8xJDEgPSBTdHJpbmdCdWlsZGVyJDE7Cgl2YXIgVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb25fMSA9IFVuc3VwcG9ydGVkT3BlcmF0aW9uRXhjZXB0aW9uJDE7CgkvKm5hbWVzcGFjZSBjb20uZ29vZ2xlLnp4aW5nIHsqLwoJLyoqCgkgKiBUaGUgcHVycG9zZSBvZiB0aGlzIGNsYXNzIGhpZXJhcmNoeSBpcyB0byBhYnN0cmFjdCBkaWZmZXJlbnQgYml0bWFwIGltcGxlbWVudGF0aW9ucyBhY3Jvc3MKCSAqIHBsYXRmb3JtcyBpbnRvIGEgc3RhbmRhcmQgaW50ZXJmYWNlIGZvciByZXF1ZXN0aW5nIGdyZXlzY2FsZSBsdW1pbmFuY2UgdmFsdWVzLiBUaGUgaW50ZXJmYWNlCgkgKiBvbmx5IHByb3ZpZGVzIGltbXV0YWJsZSBtZXRob2RzOyB0aGVyZWZvcmUgY3JvcCBhbmQgcm90YXRpb24gY3JlYXRlIGNvcGllcy4gVGhpcyBpcyB0byBlbnN1cmUKCSAqIHRoYXQgb25lIFJlYWRlciBkb2VzIG5vdCBtb2RpZnkgdGhlIG9yaWdpbmFsIGx1bWluYW5jZSBzb3VyY2UgYW5kIGxlYXZlIGl0IGluIGFuIHVua25vd24gc3RhdGUKCSAqIGZvciBvdGhlciBSZWFkZXJzIGluIHRoZSBjaGFpbi4KCSAqCgkgKiBAYXV0aG9yIGRzd2l0a2luQGdvb2dsZS5jb20gKERhbmllbCBTd2l0a2luKQoJICovCgl2YXIgTHVtaW5hbmNlU291cmNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIGZ1bmN0aW9uIEx1bWluYW5jZVNvdXJjZSh3aWR0aCAvKmludCovLCBoZWlnaHQgLyppbnQqLykgewoJICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7CgkgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OwoJICAgIH0KCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIFRoZSB3aWR0aCBvZiB0aGUgYml0bWFwLgoJICAgICAqLwoJICAgIEx1bWluYW5jZVNvdXJjZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLndpZHRoOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiBUaGUgaGVpZ2h0IG9mIHRoZSBiaXRtYXAuCgkgICAgICovCgkgICAgTHVtaW5hbmNlU291cmNlLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmhlaWdodDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gV2hldGhlciB0aGlzIHN1YmNsYXNzIHN1cHBvcnRzIGNyb3BwaW5nLgoJICAgICAqLwoJICAgIEx1bWluYW5jZVNvdXJjZS5wcm90b3R5cGUuaXNDcm9wU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBSZXR1cm5zIGEgbmV3IG9iamVjdCB3aXRoIGNyb3BwZWQgaW1hZ2UgZGF0YS4gSW1wbGVtZW50YXRpb25zIG1heSBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZQoJICAgICAqIG9yaWdpbmFsIGRhdGEgcmF0aGVyIHRoYW4gYSBjb3B5LiBPbmx5IGNhbGxhYmxlIGlmIGlzQ3JvcFN1cHBvcnRlZCgpIGlzIHRydWUuCgkgICAgICoKCSAgICAgKiBAcGFyYW0gbGVmdCBUaGUgbGVmdCBjb29yZGluYXRlLCB3aGljaCBtdXN0IGJlIGluIFswLGdldFdpZHRoKCkpCgkgICAgICogQHBhcmFtIHRvcCBUaGUgdG9wIGNvb3JkaW5hdGUsIHdoaWNoIG11c3QgYmUgaW4gWzAsZ2V0SGVpZ2h0KCkpCgkgICAgICogQHBhcmFtIHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcmVjdGFuZ2xlIHRvIGNyb3AuCgkgICAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSByZWN0YW5nbGUgdG8gY3JvcC4KCSAgICAgKiBAcmV0dXJuIEEgY3JvcHBlZCB2ZXJzaW9uIG9mIHRoaXMgb2JqZWN0LgoJICAgICAqLwoJICAgIEx1bWluYW5jZVNvdXJjZS5wcm90b3R5cGUuY3JvcCA9IGZ1bmN0aW9uIChsZWZ0IC8qaW50Ki8sIHRvcCAvKmludCovLCB3aWR0aCAvKmludCovLCBoZWlnaHQgLyppbnQqLykgewoJICAgICAgICB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb25fMS5kZWZhdWx0KCdUaGlzIGx1bWluYW5jZSBzb3VyY2UgZG9lcyBub3Qgc3VwcG9ydCBjcm9wcGluZy4nKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gV2hldGhlciB0aGlzIHN1YmNsYXNzIHN1cHBvcnRzIGNvdW50ZXItY2xvY2t3aXNlIHJvdGF0aW9uLgoJICAgICAqLwoJICAgIEx1bWluYW5jZVNvdXJjZS5wcm90b3R5cGUuaXNSb3RhdGVTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiBmYWxzZTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGggcm90YXRlZCBpbWFnZSBkYXRhIGJ5IDkwIGRlZ3JlZXMgY291bnRlcmNsb2Nrd2lzZS4KCSAgICAgKiBPbmx5IGNhbGxhYmxlIGlmIHtAbGluayAjaXNSb3RhdGVTdXBwb3J0ZWQoKX0gaXMgdHJ1ZS4KCSAgICAgKgoJICAgICAqIEByZXR1cm4gQSByb3RhdGVkIHZlcnNpb24gb2YgdGhpcyBvYmplY3QuCgkgICAgICovCgkgICAgTHVtaW5hbmNlU291cmNlLnByb3RvdHlwZS5yb3RhdGVDb3VudGVyQ2xvY2t3aXNlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRPcGVyYXRpb25FeGNlcHRpb25fMS5kZWZhdWx0KCdUaGlzIGx1bWluYW5jZSBzb3VyY2UgZG9lcyBub3Qgc3VwcG9ydCByb3RhdGlvbiBieSA5MCBkZWdyZWVzLicpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogUmV0dXJucyBhIG5ldyBvYmplY3Qgd2l0aCByb3RhdGVkIGltYWdlIGRhdGEgYnkgNDUgZGVncmVlcyBjb3VudGVyY2xvY2t3aXNlLgoJICAgICAqIE9ubHkgY2FsbGFibGUgaWYge0BsaW5rICNpc1JvdGF0ZVN1cHBvcnRlZCgpfSBpcyB0cnVlLgoJICAgICAqCgkgICAgICogQHJldHVybiBBIHJvdGF0ZWQgdmVyc2lvbiBvZiB0aGlzIG9iamVjdC4KCSAgICAgKi8KCSAgICBMdW1pbmFuY2VTb3VyY2UucHJvdG90eXBlLnJvdGF0ZUNvdW50ZXJDbG9ja3dpc2U0NSA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgdGhyb3cgbmV3IFVuc3VwcG9ydGVkT3BlcmF0aW9uRXhjZXB0aW9uXzEuZGVmYXVsdCgnVGhpcyBsdW1pbmFuY2Ugc291cmNlIGRvZXMgbm90IHN1cHBvcnQgcm90YXRpb24gYnkgNDUgZGVncmVlcy4nKTsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBMdW1pbmFuY2VTb3VyY2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgcm93ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHRoaXMud2lkdGgpOwoJICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IFN0cmluZ0J1aWxkZXJfMSQxLmRlZmF1bHQoKTsKCSAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7CgkgICAgICAgICAgICB2YXIgc291cmNlUm93ID0gdGhpcy5nZXRSb3coeSwgcm93KTsKCSAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7CgkgICAgICAgICAgICAgICAgdmFyIGx1bWluYW5jZSA9IHNvdXJjZVJvd1t4XSAmIDB4RkY7CgkgICAgICAgICAgICAgICAgdmFyIGMgPSB2b2lkIDA7CgkgICAgICAgICAgICAgICAgaWYgKGx1bWluYW5jZSA8IDB4NDApIHsKCSAgICAgICAgICAgICAgICAgICAgYyA9ICcjJzsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgZWxzZSBpZiAobHVtaW5hbmNlIDwgMHg4MCkgewoJICAgICAgICAgICAgICAgICAgICBjID0gJysnOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBlbHNlIGlmIChsdW1pbmFuY2UgPCAweEMwKSB7CgkgICAgICAgICAgICAgICAgICAgIGMgPSAnLic7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgICAgICAgICBjID0gJyAnOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICByZXN1bHQuYXBwZW5kKGMpOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgcmVzdWx0LmFwcGVuZCgnXG4nKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7CgkgICAgfTsKCSAgICByZXR1cm4gTHVtaW5hbmNlU291cmNlOwoJfSgpKTsKCUx1bWluYW5jZVNvdXJjZSQxLmRlZmF1bHQgPSBMdW1pbmFuY2VTb3VyY2U7CgoJLyoKCSAqIENvcHlyaWdodCAyMDA5IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCXZhciBfX2V4dGVuZHMkYSA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7CgkgICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CgkgICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8CgkgICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTsKCSAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgfTsKCSAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9CgkgICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTsKCSAgICB9OwoJfSkoKTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnZlcnRlZEx1bWluYW5jZVNvdXJjZSQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgTHVtaW5hbmNlU291cmNlXzEkMSA9IEx1bWluYW5jZVNvdXJjZSQxOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZyB7Ki8KCS8qKgoJICogQSB3cmFwcGVyIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBMdW1pbmFuY2VTb3VyY2V9IHdoaWNoIGludmVydHMgdGhlIGx1bWluYW5jZXMgaXQgcmV0dXJucyAtLSBibGFjayBiZWNvbWVzCgkgKiB3aGl0ZSBhbmQgdmljZSB2ZXJzYSwgYW5kIGVhY2ggdmFsdWUgYmVjb21lcyAoMjU1LXZhbHVlKS4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICovCgl2YXIgSW52ZXJ0ZWRMdW1pbmFuY2VTb3VyY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7CgkgICAgX19leHRlbmRzJGEoSW52ZXJ0ZWRMdW1pbmFuY2VTb3VyY2UsIF9zdXBlcik7CgkgICAgZnVuY3Rpb24gSW52ZXJ0ZWRMdW1pbmFuY2VTb3VyY2UoZGVsZWdhdGUpIHsKCSAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVsZWdhdGUuZ2V0V2lkdGgoKSwgZGVsZWdhdGUuZ2V0SGVpZ2h0KCkpIHx8IHRoaXM7CgkgICAgICAgIF90aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7CgkgICAgICAgIHJldHVybiBfdGhpczsKCSAgICB9CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEludmVydGVkTHVtaW5hbmNlU291cmNlLnByb3RvdHlwZS5nZXRSb3cgPSBmdW5jdGlvbiAoeSAvKmludCovLCByb3cpIHsKCSAgICAgICAgdmFyIHNvdXJjZVJvdyA9IHRoaXMuZGVsZWdhdGUuZ2V0Um93KHksIHJvdyk7CgkgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7CgkgICAgICAgICAgICBzb3VyY2VSb3dbaV0gPSAvKihieXRlKSovICgyNTUgLSAoc291cmNlUm93W2ldICYgMHhGRikpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBzb3VyY2VSb3c7CgkgICAgfTsKCSAgICAvKkBPdmVycmlkZSovCgkgICAgSW52ZXJ0ZWRMdW1pbmFuY2VTb3VyY2UucHJvdG90eXBlLmdldE1hdHJpeCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgdmFyIG1hdHJpeCA9IHRoaXMuZGVsZWdhdGUuZ2V0TWF0cml4KCk7CgkgICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmdldFdpZHRoKCkgKiB0aGlzLmdldEhlaWdodCgpOwoJICAgICAgICB2YXIgaW52ZXJ0ZWRNYXRyaXggPSBuZXcgVWludDhDbGFtcGVkQXJyYXkobGVuZ3RoKTsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgewoJICAgICAgICAgICAgaW52ZXJ0ZWRNYXRyaXhbaV0gPSAvKihieXRlKSovICgyNTUgLSAobWF0cml4W2ldICYgMHhGRikpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBpbnZlcnRlZE1hdHJpeDsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBJbnZlcnRlZEx1bWluYW5jZVNvdXJjZS5wcm90b3R5cGUuaXNDcm9wU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5pc0Nyb3BTdXBwb3J0ZWQoKTsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBJbnZlcnRlZEx1bWluYW5jZVNvdXJjZS5wcm90b3R5cGUuY3JvcCA9IGZ1bmN0aW9uIChsZWZ0IC8qaW50Ki8sIHRvcCAvKmludCovLCB3aWR0aCAvKmludCovLCBoZWlnaHQgLyppbnQqLykgewoJICAgICAgICByZXR1cm4gbmV3IEludmVydGVkTHVtaW5hbmNlU291cmNlKHRoaXMuZGVsZWdhdGUuY3JvcChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpKTsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBJbnZlcnRlZEx1bWluYW5jZVNvdXJjZS5wcm90b3R5cGUuaXNSb3RhdGVTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmlzUm90YXRlU3VwcG9ydGVkKCk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIG9yaWdpbmFsIGRlbGVnYXRlIHtAbGluayBMdW1pbmFuY2VTb3VyY2V9IHNpbmNlIGludmVydCB1bmRvZXMgaXRzZWxmCgkgICAgICovCgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEludmVydGVkTHVtaW5hbmNlU291cmNlLnByb3RvdHlwZS5pbnZlcnQgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlOwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEludmVydGVkTHVtaW5hbmNlU291cmNlLnByb3RvdHlwZS5yb3RhdGVDb3VudGVyQ2xvY2t3aXNlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gbmV3IEludmVydGVkTHVtaW5hbmNlU291cmNlKHRoaXMuZGVsZWdhdGUucm90YXRlQ291bnRlckNsb2Nrd2lzZSgpKTsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBJbnZlcnRlZEx1bWluYW5jZVNvdXJjZS5wcm90b3R5cGUucm90YXRlQ291bnRlckNsb2Nrd2lzZTQ1ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gbmV3IEludmVydGVkTHVtaW5hbmNlU291cmNlKHRoaXMuZGVsZWdhdGUucm90YXRlQ291bnRlckNsb2Nrd2lzZTQ1KCkpOwoJICAgIH07CgkgICAgcmV0dXJuIEludmVydGVkTHVtaW5hbmNlU291cmNlOwoJfShMdW1pbmFuY2VTb3VyY2VfMSQxLmRlZmF1bHQpKTsKCUludmVydGVkTHVtaW5hbmNlU291cmNlJDEuZGVmYXVsdCA9IEludmVydGVkTHVtaW5hbmNlU291cmNlOwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwOSBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCgl2YXIgX19leHRlbmRzJDkgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkgewoJICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAoJICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fAoJICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07CgkgICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgIH07CgkgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfQoJICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7CgkgICAgfTsKCX0pKCk7CglPYmplY3QuZGVmaW5lUHJvcGVydHkoUkdCTHVtaW5hbmNlU291cmNlJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcgeyovCgkgLy8gcmVxdWlyZWQgYmVjYXVzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYmV0d2VlbiBMdW1pbmFuY2VTb3VyY2UgYW5kIEludmVydGVkTHVtaW5hbmNlU291cmNlCgl2YXIgSW52ZXJ0ZWRMdW1pbmFuY2VTb3VyY2VfMSA9IEludmVydGVkTHVtaW5hbmNlU291cmNlJDE7Cgl2YXIgTHVtaW5hbmNlU291cmNlXzEgPSBMdW1pbmFuY2VTb3VyY2UkMTsKCXZhciBTeXN0ZW1fMSQyID0gU3lzdGVtJDE7Cgl2YXIgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNiA9IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gaGVscCBkZWNvZGUgaW1hZ2VzIGZyb20gZmlsZXMgd2hpY2ggYXJyaXZlIGFzIFJHQiBkYXRhIGZyb20KCSAqIGFuIEFSR0IgcGl4ZWwgYXJyYXkuIEl0IGRvZXMgbm90IHN1cHBvcnQgcm90YXRpb24uCgkgKgoJICogQGF1dGhvciBkc3dpdGtpbkBnb29nbGUuY29tIChEYW5pZWwgU3dpdGtpbikKCSAqIEBhdXRob3IgQmV0YW1pbm9zCgkgKi8KCXZhciBSR0JMdW1pbmFuY2VTb3VyY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7CgkgICAgX19leHRlbmRzJDkoUkdCTHVtaW5hbmNlU291cmNlLCBfc3VwZXIpOwoJICAgIGZ1bmN0aW9uIFJHQkx1bWluYW5jZVNvdXJjZShsdW1pbmFuY2VzLCB3aWR0aCAvKmludCovLCBoZWlnaHQgLyppbnQqLywgZGF0YVdpZHRoIC8qaW50Ki8sIGRhdGFIZWlnaHQgLyppbnQqLywgbGVmdCAvKmludCovLCB0b3AgLyppbnQqLykgewoJICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB3aWR0aCwgaGVpZ2h0KSB8fCB0aGlzOwoJICAgICAgICBfdGhpcy5kYXRhV2lkdGggPSBkYXRhV2lkdGg7CgkgICAgICAgIF90aGlzLmRhdGFIZWlnaHQgPSBkYXRhSGVpZ2h0OwoJICAgICAgICBfdGhpcy5sZWZ0ID0gbGVmdDsKCSAgICAgICAgX3RoaXMudG9wID0gdG9wOwoJICAgICAgICBpZiAobHVtaW5hbmNlcy5CWVRFU19QRVJfRUxFTUVOVCA9PT0gNCkgeyAvLyBJbnQzMkFycmF5CgkgICAgICAgICAgICB2YXIgc2l6ZSA9IHdpZHRoICogaGVpZ2h0OwoJICAgICAgICAgICAgdmFyIGx1bWluYW5jZXNVaW50OEFycmF5ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHNpemUpOwoJICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgc2l6ZTsgb2Zmc2V0KyspIHsKCSAgICAgICAgICAgICAgICB2YXIgcGl4ZWwgPSBsdW1pbmFuY2VzW29mZnNldF07CgkgICAgICAgICAgICAgICAgdmFyIHIgPSAocGl4ZWwgPj4gMTYpICYgMHhmZjsgLy8gcmVkCgkgICAgICAgICAgICAgICAgdmFyIGcyID0gKHBpeGVsID4+IDcpICYgMHgxZmU7IC8vIDIgKiBncmVlbgoJICAgICAgICAgICAgICAgIHZhciBiID0gcGl4ZWwgJiAweGZmOyAvLyBibHVlCgkgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGdyZWVuLWZhdm91cmluZyBhdmVyYWdlIGNoZWFwbHkKCSAgICAgICAgICAgICAgICBsdW1pbmFuY2VzVWludDhBcnJheVtvZmZzZXRdID0gLyooYnl0ZSkgKi8gKChyICsgZzIgKyBiKSAvIDQpICYgMHhGRjsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIF90aGlzLmx1bWluYW5jZXMgPSBsdW1pbmFuY2VzVWludDhBcnJheTsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgIF90aGlzLmx1bWluYW5jZXMgPSBsdW1pbmFuY2VzOwoJICAgICAgICB9CgkgICAgICAgIGlmICh1bmRlZmluZWQgPT09IGRhdGFXaWR0aCkgewoJICAgICAgICAgICAgX3RoaXMuZGF0YVdpZHRoID0gd2lkdGg7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gZGF0YUhlaWdodCkgewoJICAgICAgICAgICAgX3RoaXMuZGF0YUhlaWdodCA9IGhlaWdodDsKCSAgICAgICAgfQoJICAgICAgICBpZiAodW5kZWZpbmVkID09PSBsZWZ0KSB7CgkgICAgICAgICAgICBfdGhpcy5sZWZ0ID0gMDsKCSAgICAgICAgfQoJICAgICAgICBpZiAodW5kZWZpbmVkID09PSB0b3ApIHsKCSAgICAgICAgICAgIF90aGlzLnRvcCA9IDA7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKF90aGlzLmxlZnQgKyB3aWR0aCA+IF90aGlzLmRhdGFXaWR0aCB8fCBfdGhpcy50b3AgKyBoZWlnaHQgPiBfdGhpcy5kYXRhSGVpZ2h0KSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNi5kZWZhdWx0KCdDcm9wIHJlY3RhbmdsZSBkb2VzIG5vdCBmaXQgd2l0aGluIGltYWdlIGRhdGEuJyk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIF90aGlzOwoJICAgIH0KCSAgICAvKkBPdmVycmlkZSovCgkgICAgUkdCTHVtaW5hbmNlU291cmNlLnByb3RvdHlwZS5nZXRSb3cgPSBmdW5jdGlvbiAoeSAvKmludCovLCByb3cpIHsKCSAgICAgICAgaWYgKHkgPCAwIHx8IHkgPj0gdGhpcy5nZXRIZWlnaHQoKSkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDYuZGVmYXVsdCgnUmVxdWVzdGVkIHJvdyBpcyBvdXRzaWRlIHRoZSBpbWFnZTogJyArIHkpOwoJICAgICAgICB9CgkgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTsKCSAgICAgICAgaWYgKHJvdyA9PT0gbnVsbCB8fCByb3cgPT09IHVuZGVmaW5lZCB8fCByb3cubGVuZ3RoIDwgd2lkdGgpIHsKCSAgICAgICAgICAgIHJvdyA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh3aWR0aCk7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIG9mZnNldCA9ICh5ICsgdGhpcy50b3ApICogdGhpcy5kYXRhV2lkdGggKyB0aGlzLmxlZnQ7CgkgICAgICAgIFN5c3RlbV8xJDIuZGVmYXVsdC5hcnJheWNvcHkodGhpcy5sdW1pbmFuY2VzLCBvZmZzZXQsIHJvdywgMCwgd2lkdGgpOwoJICAgICAgICByZXR1cm4gcm93OwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIFJHQkx1bWluYW5jZVNvdXJjZS5wcm90b3R5cGUuZ2V0TWF0cml4ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmdldFdpZHRoKCk7CgkgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpOwoJICAgICAgICAvLyBJZiB0aGUgY2FsbGVyIGFza3MgZm9yIHRoZSBlbnRpcmUgdW5kZXJseWluZyBpbWFnZSwgc2F2ZSB0aGUgY29weSBhbmQgZ2l2ZSB0aGVtIHRoZQoJICAgICAgICAvLyBvcmlnaW5hbCBkYXRhLiBUaGUgZG9jcyBzcGVjaWZpY2FsbHkgd2FybiB0aGF0IHJlc3VsdC5sZW5ndGggbXVzdCBiZSBpZ25vcmVkLgoJICAgICAgICBpZiAod2lkdGggPT09IHRoaXMuZGF0YVdpZHRoICYmIGhlaWdodCA9PT0gdGhpcy5kYXRhSGVpZ2h0KSB7CgkgICAgICAgICAgICByZXR1cm4gdGhpcy5sdW1pbmFuY2VzOwoJICAgICAgICB9CgkgICAgICAgIHZhciBhcmVhID0gd2lkdGggKiBoZWlnaHQ7CgkgICAgICAgIHZhciBtYXRyaXggPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoYXJlYSk7CgkgICAgICAgIHZhciBpbnB1dE9mZnNldCA9IHRoaXMudG9wICogdGhpcy5kYXRhV2lkdGggKyB0aGlzLmxlZnQ7CgkgICAgICAgIC8vIElmIHRoZSB3aWR0aCBtYXRjaGVzIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSB1bmRlcmx5aW5nIGRhdGEsIHBlcmZvcm0gYSBzaW5nbGUgY29weS4KCSAgICAgICAgaWYgKHdpZHRoID09PSB0aGlzLmRhdGFXaWR0aCkgewoJICAgICAgICAgICAgU3lzdGVtXzEkMi5kZWZhdWx0LmFycmF5Y29weSh0aGlzLmx1bWluYW5jZXMsIGlucHV0T2Zmc2V0LCBtYXRyaXgsIDAsIGFyZWEpOwoJICAgICAgICAgICAgcmV0dXJuIG1hdHJpeDsKCSAgICAgICAgfQoJICAgICAgICAvLyBPdGhlcndpc2UgY29weSBvbmUgY3JvcHBlZCByb3cgYXQgYSB0aW1lLgoJICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7CgkgICAgICAgICAgICB2YXIgb3V0cHV0T2Zmc2V0ID0geSAqIHdpZHRoOwoJICAgICAgICAgICAgU3lzdGVtXzEkMi5kZWZhdWx0LmFycmF5Y29weSh0aGlzLmx1bWluYW5jZXMsIGlucHV0T2Zmc2V0LCBtYXRyaXgsIG91dHB1dE9mZnNldCwgd2lkdGgpOwoJICAgICAgICAgICAgaW5wdXRPZmZzZXQgKz0gdGhpcy5kYXRhV2lkdGg7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIG1hdHJpeDsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBSR0JMdW1pbmFuY2VTb3VyY2UucHJvdG90eXBlLmlzQ3JvcFN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRydWU7CgkgICAgfTsKCSAgICAvKkBPdmVycmlkZSovCgkgICAgUkdCTHVtaW5hbmNlU291cmNlLnByb3RvdHlwZS5jcm9wID0gZnVuY3Rpb24gKGxlZnQgLyppbnQqLywgdG9wIC8qaW50Ki8sIHdpZHRoIC8qaW50Ki8sIGhlaWdodCAvKmludCovKSB7CgkgICAgICAgIHJldHVybiBuZXcgUkdCTHVtaW5hbmNlU291cmNlKHRoaXMubHVtaW5hbmNlcywgd2lkdGgsIGhlaWdodCwgdGhpcy5kYXRhV2lkdGgsIHRoaXMuZGF0YUhlaWdodCwgdGhpcy5sZWZ0ICsgbGVmdCwgdGhpcy50b3AgKyB0b3ApOwoJICAgIH07CgkgICAgUkdCTHVtaW5hbmNlU291cmNlLnByb3RvdHlwZS5pbnZlcnQgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiBuZXcgSW52ZXJ0ZWRMdW1pbmFuY2VTb3VyY2VfMS5kZWZhdWx0KHRoaXMpOwoJICAgIH07CgkgICAgcmV0dXJuIFJHQkx1bWluYW5jZVNvdXJjZTsKCX0oTHVtaW5hbmNlU291cmNlXzEuZGVmYXVsdCkpOwoJdmFyIF9kZWZhdWx0JDEgPSBSR0JMdW1pbmFuY2VTb3VyY2UkMS5kZWZhdWx0ID0gUkdCTHVtaW5hbmNlU291cmNlOwoKCXZhciBRUkNvZGVSZWFkZXIkMSA9IHt9OwoKCXZhciBCYXJjb2RlRm9ybWF0JDEgPSB7fTsKCgkvKgoJICogRGlyZWN0IHBvcnQgdG8gVHlwZVNjcmlwdCBvZiBaWGluZyBieSBBZHJpYW4gVG/ImWPEgwoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoQmFyY29kZUZvcm1hdCQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7CgkvKgoJICogQ29weXJpZ2h0IDIwMDkgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZyB7Ki8KCS8qKgoJICogRW51bWVyYXRlcyBiYXJjb2RlIGZvcm1hdHMga25vd24gdG8gdGhpcyBwYWNrYWdlLiBQbGVhc2Uga2VlcCBhbHBoYWJldGl6ZWQuCgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIEJhcmNvZGVGb3JtYXQ7CgkoZnVuY3Rpb24gKEJhcmNvZGVGb3JtYXQpIHsKCSAgICAvKiogQXp0ZWMgMkQgYmFyY29kZSBmb3JtYXQuICovCgkgICAgQmFyY29kZUZvcm1hdFtCYXJjb2RlRm9ybWF0WyJBWlRFQyJdID0gMF0gPSAiQVpURUMiOwoJICAgIC8qKiBDT0RBQkFSIDFEIGZvcm1hdC4gKi8KCSAgICBCYXJjb2RlRm9ybWF0W0JhcmNvZGVGb3JtYXRbIkNPREFCQVIiXSA9IDFdID0gIkNPREFCQVIiOwoJICAgIC8qKiBDb2RlIDM5IDFEIGZvcm1hdC4gKi8KCSAgICBCYXJjb2RlRm9ybWF0W0JhcmNvZGVGb3JtYXRbIkNPREVfMzkiXSA9IDJdID0gIkNPREVfMzkiOwoJICAgIC8qKiBDb2RlIDkzIDFEIGZvcm1hdC4gKi8KCSAgICBCYXJjb2RlRm9ybWF0W0JhcmNvZGVGb3JtYXRbIkNPREVfOTMiXSA9IDNdID0gIkNPREVfOTMiOwoJICAgIC8qKiBDb2RlIDEyOCAxRCBmb3JtYXQuICovCgkgICAgQmFyY29kZUZvcm1hdFtCYXJjb2RlRm9ybWF0WyJDT0RFXzEyOCJdID0gNF0gPSAiQ09ERV8xMjgiOwoJICAgIC8qKiBEYXRhIE1hdHJpeCAyRCBiYXJjb2RlIGZvcm1hdC4gKi8KCSAgICBCYXJjb2RlRm9ybWF0W0JhcmNvZGVGb3JtYXRbIkRBVEFfTUFUUklYIl0gPSA1XSA9ICJEQVRBX01BVFJJWCI7CgkgICAgLyoqIEVBTi04IDFEIGZvcm1hdC4gKi8KCSAgICBCYXJjb2RlRm9ybWF0W0JhcmNvZGVGb3JtYXRbIkVBTl84Il0gPSA2XSA9ICJFQU5fOCI7CgkgICAgLyoqIEVBTi0xMyAxRCBmb3JtYXQuICovCgkgICAgQmFyY29kZUZvcm1hdFtCYXJjb2RlRm9ybWF0WyJFQU5fMTMiXSA9IDddID0gIkVBTl8xMyI7CgkgICAgLyoqIElURiAoSW50ZXJsZWF2ZWQgVHdvIG9mIEZpdmUpIDFEIGZvcm1hdC4gKi8KCSAgICBCYXJjb2RlRm9ybWF0W0JhcmNvZGVGb3JtYXRbIklURiJdID0gOF0gPSAiSVRGIjsKCSAgICAvKiogTWF4aUNvZGUgMkQgYmFyY29kZSBmb3JtYXQuICovCgkgICAgQmFyY29kZUZvcm1hdFtCYXJjb2RlRm9ybWF0WyJNQVhJQ09ERSJdID0gOV0gPSAiTUFYSUNPREUiOwoJICAgIC8qKiBQREY0MTcgZm9ybWF0LiAqLwoJICAgIEJhcmNvZGVGb3JtYXRbQmFyY29kZUZvcm1hdFsiUERGXzQxNyJdID0gMTBdID0gIlBERl80MTciOwoJICAgIC8qKiBRUiBDb2RlIDJEIGJhcmNvZGUgZm9ybWF0LiAqLwoJICAgIEJhcmNvZGVGb3JtYXRbQmFyY29kZUZvcm1hdFsiUVJfQ09ERSJdID0gMTFdID0gIlFSX0NPREUiOwoJICAgIC8qKiBSU1MgMTQgKi8KCSAgICBCYXJjb2RlRm9ybWF0W0JhcmNvZGVGb3JtYXRbIlJTU18xNCJdID0gMTJdID0gIlJTU18xNCI7CgkgICAgLyoqIFJTUyBFWFBBTkRFRCAqLwoJICAgIEJhcmNvZGVGb3JtYXRbQmFyY29kZUZvcm1hdFsiUlNTX0VYUEFOREVEIl0gPSAxM10gPSAiUlNTX0VYUEFOREVEIjsKCSAgICAvKiogVVBDLUEgMUQgZm9ybWF0LiAqLwoJICAgIEJhcmNvZGVGb3JtYXRbQmFyY29kZUZvcm1hdFsiVVBDX0EiXSA9IDE0XSA9ICJVUENfQSI7CgkgICAgLyoqIFVQQy1FIDFEIGZvcm1hdC4gKi8KCSAgICBCYXJjb2RlRm9ybWF0W0JhcmNvZGVGb3JtYXRbIlVQQ19FIl0gPSAxNV0gPSAiVVBDX0UiOwoJICAgIC8qKiBVUEMvRUFOIGV4dGVuc2lvbiBmb3JtYXQuIE5vdCBhIHN0YW5kLWFsb25lIGZvcm1hdC4gKi8KCSAgICBCYXJjb2RlRm9ybWF0W0JhcmNvZGVGb3JtYXRbIlVQQ19FQU5fRVhURU5TSU9OIl0gPSAxNl0gPSAiVVBDX0VBTl9FWFRFTlNJT04iOwoJfSkoQmFyY29kZUZvcm1hdCB8fCAoQmFyY29kZUZvcm1hdCA9IHt9KSk7CglCYXJjb2RlRm9ybWF0JDEuZGVmYXVsdCA9IEJhcmNvZGVGb3JtYXQ7CgoJdmFyIFJlc3VsdCQxID0ge307CgoJLyoKCSAqIENvcHlyaWdodCAyMDA3IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXN1bHQkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJdmFyIFN5c3RlbV8xJDEgPSBTeXN0ZW0kMTsKCS8qKgoJICogPHA+RW5jYXBzdWxhdGVzIHRoZSByZXN1bHQgb2YgZGVjb2RpbmcgYSBiYXJjb2RlIHdpdGhpbiBhbiBpbWFnZS48L3A+CgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIFJlc3VsdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICAvLyBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSB0ZXh0OiBzdHJpbmcsCgkgICAgLy8gICAgICAgICAgICAgICBVaW50OEFycmF5IHJhd0J5dGVzLAoJICAgIC8vICAgICAgICAgICAgICAgUmVzdWx0UG9jb25zdCByZXN1bHRQb2ludHM6IEludDMyQXJyYXksCgkgICAgLy8gICAgICAgICAgICAgICBCYXJjb2RlRm9ybWF0IGZvcm1hdCkgewoJICAgIC8vICAgdGhpcyh0ZXh0LCByYXdCeXRlcywgcmVzdWx0UG9pbnRzLCBmb3JtYXQsIFN5c3RlbS5jdXJyZW50VGltZU1pbGxpcygpKQoJICAgIC8vIH0KCSAgICAvLyBwdWJsaWMgY29uc3RydWN0b3IodGV4dDogc3RyaW5nLAoJICAgIC8vICAgICAgICAgICAgICAgVWludDhBcnJheSByYXdCeXRlcywKCSAgICAvLyAgICAgICAgICAgICAgIFJlc3VsdFBvY29uc3QgcmVzdWx0UG9pbnRzOiBJbnQzMkFycmF5LAoJICAgIC8vICAgICAgICAgICAgICAgQmFyY29kZUZvcm1hdCBmb3JtYXQsCgkgICAgLy8gICAgICAgICAgICAgICBsb25nIHRpbWVzdGFtcCkgewoJICAgIC8vICAgdGhpcyh0ZXh0LCByYXdCeXRlcywgcmF3Qnl0ZXMgPT0gbnVsbCA/IDAgOiA4ICogcmF3Qnl0ZXMubGVuZ3RoLAoJICAgIC8vICAgICAgICByZXN1bHRQb2ludHMsIGZvcm1hdCwgdGltZXN0YW1wKQoJICAgIC8vIH0KCSAgICBmdW5jdGlvbiBSZXN1bHQodGV4dCwgcmF3Qnl0ZXMsIG51bUJpdHMsIHJlc3VsdFBvaW50cywgZm9ybWF0LCB0aW1lc3RhbXApIHsKCSAgICAgICAgaWYgKG51bUJpdHMgPT09IHZvaWQgMCkgeyBudW1CaXRzID0gcmF3Qnl0ZXMgPT0gbnVsbCA/IDAgOiA4ICogcmF3Qnl0ZXMubGVuZ3RoOyB9CgkgICAgICAgIGlmICh0aW1lc3RhbXAgPT09IHZvaWQgMCkgeyB0aW1lc3RhbXAgPSBTeXN0ZW1fMSQxLmRlZmF1bHQuY3VycmVudFRpbWVNaWxsaXMoKTsgfQoJICAgICAgICB0aGlzLnRleHQgPSB0ZXh0OwoJICAgICAgICB0aGlzLnJhd0J5dGVzID0gcmF3Qnl0ZXM7CgkgICAgICAgIHRoaXMubnVtQml0cyA9IG51bUJpdHM7CgkgICAgICAgIHRoaXMucmVzdWx0UG9pbnRzID0gcmVzdWx0UG9pbnRzOwoJICAgICAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDsKCSAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7CgkgICAgICAgIHRoaXMudGV4dCA9IHRleHQ7CgkgICAgICAgIHRoaXMucmF3Qnl0ZXMgPSByYXdCeXRlczsKCSAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gbnVtQml0cyB8fCBudWxsID09PSBudW1CaXRzKSB7CgkgICAgICAgICAgICB0aGlzLm51bUJpdHMgPSAocmF3Qnl0ZXMgPT09IG51bGwgfHwgcmF3Qnl0ZXMgPT09IHVuZGVmaW5lZCkgPyAwIDogOCAqIHJhd0J5dGVzLmxlbmd0aDsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgIHRoaXMubnVtQml0cyA9IG51bUJpdHM7CgkgICAgICAgIH0KCSAgICAgICAgdGhpcy5yZXN1bHRQb2ludHMgPSByZXN1bHRQb2ludHM7CgkgICAgICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0OwoJICAgICAgICB0aGlzLnJlc3VsdE1ldGFkYXRhID0gbnVsbDsKCSAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGltZXN0YW1wIHx8IG51bGwgPT09IHRpbWVzdGFtcCkgewoJICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBTeXN0ZW1fMSQxLmRlZmF1bHQuY3VycmVudFRpbWVNaWxsaXMoKTsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgIHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wOwoJICAgICAgICB9CgkgICAgfQoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gcmF3IHRleHQgZW5jb2RlZCBieSB0aGUgYmFyY29kZQoJICAgICAqLwoJICAgIFJlc3VsdC5wcm90b3R5cGUuZ2V0VGV4dCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMudGV4dDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gcmF3IGJ5dGVzIGVuY29kZWQgYnkgdGhlIGJhcmNvZGUsIGlmIGFwcGxpY2FibGUsIG90aGVyd2lzZSB7QGNvZGUgbnVsbH0KCSAgICAgKi8KCSAgICBSZXN1bHQucHJvdG90eXBlLmdldFJhd0J5dGVzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5yYXdCeXRlczsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gaG93IG1hbnkgYml0cyBvZiB7QGxpbmsgI2dldFJhd0J5dGVzKCl9IGFyZSB2YWxpZDsgdHlwaWNhbGx5IDggdGltZXMgaXRzIGxlbmd0aAoJICAgICAqIEBzaW5jZSAzLjMuMAoJICAgICAqLwoJICAgIFJlc3VsdC5wcm90b3R5cGUuZ2V0TnVtQml0cyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMubnVtQml0czsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gcG9pbnRzIHJlbGF0ZWQgdG8gdGhlIGJhcmNvZGUgaW4gdGhlIGltYWdlLiBUaGVzZSBhcmUgdHlwaWNhbGx5IHBvaW50cwoJICAgICAqICAgICAgICAgaWRlbnRpZnlpbmcgZmluZGVyIHBhdHRlcm5zIG9yIHRoZSBjb3JuZXJzIG9mIHRoZSBiYXJjb2RlLiBUaGUgZXhhY3QgbWVhbmluZyBpcwoJICAgICAqICAgICAgICAgc3BlY2lmaWMgdG8gdGhlIHR5cGUgb2YgYmFyY29kZSB0aGF0IHdhcyBkZWNvZGVkLgoJICAgICAqLwoJICAgIFJlc3VsdC5wcm90b3R5cGUuZ2V0UmVzdWx0UG9pbnRzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRQb2ludHM7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIHtAbGluayBCYXJjb2RlRm9ybWF0fSByZXByZXNlbnRpbmcgdGhlIGZvcm1hdCBvZiB0aGUgYmFyY29kZSB0aGF0IHdhcyBkZWNvZGVkCgkgICAgICovCgkgICAgUmVzdWx0LnByb3RvdHlwZS5nZXRCYXJjb2RlRm9ybWF0ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQ7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIHtAbGluayBNYXB9IG1hcHBpbmcge0BsaW5rIFJlc3VsdE1ldGFkYXRhVHlwZX0ga2V5cyB0byB2YWx1ZXMuIE1heSBiZQoJICAgICAqICAge0Bjb2RlIG51bGx9LiBUaGlzIGNvbnRhaW5zIG9wdGlvbmFsIG1ldGFkYXRhIGFib3V0IHdoYXQgd2FzIGRldGVjdGVkIGFib3V0IHRoZSBiYXJjb2RlLAoJICAgICAqICAgbGlrZSBvcmllbnRhdGlvbi4KCSAgICAgKi8KCSAgICBSZXN1bHQucHJvdG90eXBlLmdldFJlc3VsdE1ldGFkYXRhID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRNZXRhZGF0YTsKCSAgICB9OwoJICAgIFJlc3VsdC5wcm90b3R5cGUucHV0TWV0YWRhdGEgPSBmdW5jdGlvbiAodHlwZSwgdmFsdWUpIHsKCSAgICAgICAgaWYgKHRoaXMucmVzdWx0TWV0YWRhdGEgPT09IG51bGwpIHsKCSAgICAgICAgICAgIHRoaXMucmVzdWx0TWV0YWRhdGEgPSBuZXcgTWFwKCk7CgkgICAgICAgIH0KCSAgICAgICAgdGhpcy5yZXN1bHRNZXRhZGF0YS5zZXQodHlwZSwgdmFsdWUpOwoJICAgIH07CgkgICAgUmVzdWx0LnByb3RvdHlwZS5wdXRBbGxNZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YSkgewoJICAgICAgICBpZiAobWV0YWRhdGEgIT09IG51bGwpIHsKCSAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdE1ldGFkYXRhID09PSBudWxsKSB7CgkgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRNZXRhZGF0YSA9IG1ldGFkYXRhOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRNZXRhZGF0YSA9IG5ldyBNYXAobWV0YWRhdGEpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgfTsKCSAgICBSZXN1bHQucHJvdG90eXBlLmFkZFJlc3VsdFBvaW50cyA9IGZ1bmN0aW9uIChuZXdQb2ludHMpIHsKCSAgICAgICAgdmFyIG9sZFBvaW50cyA9IHRoaXMucmVzdWx0UG9pbnRzOwoJICAgICAgICBpZiAob2xkUG9pbnRzID09PSBudWxsKSB7CgkgICAgICAgICAgICB0aGlzLnJlc3VsdFBvaW50cyA9IG5ld1BvaW50czsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIGlmIChuZXdQb2ludHMgIT09IG51bGwgJiYgbmV3UG9pbnRzLmxlbmd0aCA+IDApIHsKCSAgICAgICAgICAgIHZhciBhbGxQb2ludHMgPSBuZXcgQXJyYXkob2xkUG9pbnRzLmxlbmd0aCArIG5ld1BvaW50cy5sZW5ndGgpOwoJICAgICAgICAgICAgU3lzdGVtXzEkMS5kZWZhdWx0LmFycmF5Y29weShvbGRQb2ludHMsIDAsIGFsbFBvaW50cywgMCwgb2xkUG9pbnRzLmxlbmd0aCk7CgkgICAgICAgICAgICBTeXN0ZW1fMSQxLmRlZmF1bHQuYXJyYXljb3B5KG5ld1BvaW50cywgMCwgYWxsUG9pbnRzLCBvbGRQb2ludHMubGVuZ3RoLCBuZXdQb2ludHMubGVuZ3RoKTsKCSAgICAgICAgICAgIHRoaXMucmVzdWx0UG9pbnRzID0gYWxsUG9pbnRzOwoJICAgICAgICB9CgkgICAgfTsKCSAgICBSZXN1bHQucHJvdG90eXBlLmdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMudGltZXN0YW1wOwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIFJlc3VsdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLnRleHQ7CgkgICAgfTsKCSAgICByZXR1cm4gUmVzdWx0OwoJfSgpKTsKCVJlc3VsdCQxLmRlZmF1bHQgPSBSZXN1bHQ7CgoJdmFyIFJlc3VsdE1ldGFkYXRhVHlwZSQxID0ge307CgoJLyoKCSAqIENvcHlyaWdodCAyMDA4IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXN1bHRNZXRhZGF0YVR5cGUkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZyB7Ki8KCS8qKgoJICogUmVwcmVzZW50cyBzb21lIHR5cGUgb2YgbWV0YWRhdGEgYWJvdXQgdGhlIHJlc3VsdCBvZiB0aGUgZGVjb2RpbmcgdGhhdCB0aGUgZGVjb2RlcgoJICogd2lzaGVzIHRvIGNvbW11bmljYXRlIGJhY2sgdG8gdGhlIGNhbGxlci4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICovCgl2YXIgUmVzdWx0TWV0YWRhdGFUeXBlOwoJKGZ1bmN0aW9uIChSZXN1bHRNZXRhZGF0YVR5cGUpIHsKCSAgICAvKioKCSAgICAgKiBVbnNwZWNpZmllZCwgYXBwbGljYXRpb24tc3BlY2lmaWMgbWV0YWRhdGEuIE1hcHMgdG8gYW4gdW5zcGVjaWZpZWQge0BsaW5rIE9iamVjdH0uCgkgICAgICovCgkgICAgUmVzdWx0TWV0YWRhdGFUeXBlW1Jlc3VsdE1ldGFkYXRhVHlwZVsiT1RIRVIiXSA9IDBdID0gIk9USEVSIjsKCSAgICAvKioKCSAgICAgKiBEZW5vdGVzIHRoZSBsaWtlbHkgYXBwcm94aW1hdGUgb3JpZW50YXRpb24gb2YgdGhlIGJhcmNvZGUgaW4gdGhlIGltYWdlLiBUaGlzIHZhbHVlCgkgICAgICogaXMgZ2l2ZW4gYXMgZGVncmVlcyByb3RhdGVkIGNsb2Nrd2lzZSBmcm9tIHRoZSBub3JtYWwsIHVwcmlnaHQgb3JpZW50YXRpb24uCgkgICAgICogRm9yIGV4YW1wbGUgYSAxRCBiYXJjb2RlIHdoaWNoIHdhcyBmb3VuZCBieSByZWFkaW5nIHRvcC10by1ib3R0b20gd291bGQgYmUKCSAgICAgKiBzYWlkIHRvIGhhdmUgb3JpZW50YXRpb24gIjkwIi4gVGhpcyBrZXkgbWFwcyB0byBhbiB7QGxpbmsgSW50ZWdlcn0gd2hvc2UKCSAgICAgKiB2YWx1ZSBpcyBpbiB0aGUgcmFuZ2UgWzAsMzYwKS4KCSAgICAgKi8KCSAgICBSZXN1bHRNZXRhZGF0YVR5cGVbUmVzdWx0TWV0YWRhdGFUeXBlWyJPUklFTlRBVElPTiJdID0gMV0gPSAiT1JJRU5UQVRJT04iOwoJICAgIC8qKgoJICAgICAqIDxwPjJEIGJhcmNvZGUgZm9ybWF0cyB0eXBpY2FsbHkgZW5jb2RlIHRleHQsIGJ1dCBhbGxvdyBmb3IgYSBzb3J0IG9mICdieXRlIG1vZGUnCgkgICAgICogd2hpY2ggaXMgc29tZXRpbWVzIHVzZWQgdG8gZW5jb2RlIGJpbmFyeSBkYXRhLiBXaGlsZSB7QGxpbmsgUmVzdWx0fSBtYWtlcyBhdmFpbGFibGUKCSAgICAgKiB0aGUgY29tcGxldGUgcmF3IGJ5dGVzIGluIHRoZSBiYXJjb2RlIGZvciB0aGVzZSBmb3JtYXRzLCBpdCBkb2VzIG5vdCBvZmZlciB0aGUgYnl0ZXMKCSAgICAgKiBmcm9tIHRoZSBieXRlIHNlZ21lbnRzIGFsb25lLjwvcD4KCSAgICAgKgoJICAgICAqIDxwPlRoaXMgbWFwcyB0byBhIHtAbGluayBqYXZhLnV0aWwuTGlzdH0gb2YgYnl0ZSBhcnJheXMgY29ycmVzcG9uZGluZyB0byB0aGUKCSAgICAgKiByYXcgYnl0ZXMgaW4gdGhlIGJ5dGUgc2VnbWVudHMgaW4gdGhlIGJhcmNvZGUsIGluIG9yZGVyLjwvcD4KCSAgICAgKi8KCSAgICBSZXN1bHRNZXRhZGF0YVR5cGVbUmVzdWx0TWV0YWRhdGFUeXBlWyJCWVRFX1NFR01FTlRTIl0gPSAyXSA9ICJCWVRFX1NFR01FTlRTIjsKCSAgICAvKioKCSAgICAgKiBFcnJvciBjb3JyZWN0aW9uIGxldmVsIHVzZWQsIGlmIGFwcGxpY2FibGUuIFRoZSB2YWx1ZSB0eXBlIGRlcGVuZHMgb24gdGhlCgkgICAgICogZm9ybWF0LCBidXQgaXMgdHlwaWNhbGx5IGEgU3RyaW5nLgoJICAgICAqLwoJICAgIFJlc3VsdE1ldGFkYXRhVHlwZVtSZXN1bHRNZXRhZGF0YVR5cGVbIkVSUk9SX0NPUlJFQ1RJT05fTEVWRUwiXSA9IDNdID0gIkVSUk9SX0NPUlJFQ1RJT05fTEVWRUwiOwoJICAgIC8qKgoJICAgICAqIEZvciBzb21lIHBlcmlvZGljYWxzLCBpbmRpY2F0ZXMgdGhlIGlzc3VlIG51bWJlciBhcyBhbiB7QGxpbmsgSW50ZWdlcn0uCgkgICAgICovCgkgICAgUmVzdWx0TWV0YWRhdGFUeXBlW1Jlc3VsdE1ldGFkYXRhVHlwZVsiSVNTVUVfTlVNQkVSIl0gPSA0XSA9ICJJU1NVRV9OVU1CRVIiOwoJICAgIC8qKgoJICAgICAqIEZvciBzb21lIHByb2R1Y3RzLCBpbmRpY2F0ZXMgdGhlIHN1Z2dlc3RlZCByZXRhaWwgcHJpY2UgaW4gdGhlIGJhcmNvZGUgYXMgYQoJICAgICAqIGZvcm1hdHRlZCB7QGxpbmsgU3RyaW5nfS4KCSAgICAgKi8KCSAgICBSZXN1bHRNZXRhZGF0YVR5cGVbUmVzdWx0TWV0YWRhdGFUeXBlWyJTVUdHRVNURURfUFJJQ0UiXSA9IDVdID0gIlNVR0dFU1RFRF9QUklDRSI7CgkgICAgLyoqCgkgICAgICogRm9yIHNvbWUgcHJvZHVjdHMsIHRoZSBwb3NzaWJsZSBjb3VudHJ5IG9mIG1hbnVmYWN0dXJlIGFzIGEge0BsaW5rIFN0cmluZ30gZGVub3RpbmcgdGhlCgkgICAgICogSVNPIGNvdW50cnkgY29kZS4gU29tZSBtYXAgdG8gbXVsdGlwbGUgcG9zc2libGUgY291bnRyaWVzLCBsaWtlICJVUy9DQSIuCgkgICAgICovCgkgICAgUmVzdWx0TWV0YWRhdGFUeXBlW1Jlc3VsdE1ldGFkYXRhVHlwZVsiUE9TU0lCTEVfQ09VTlRSWSJdID0gNl0gPSAiUE9TU0lCTEVfQ09VTlRSWSI7CgkgICAgLyoqCgkgICAgICogRm9yIHNvbWUgcHJvZHVjdHMsIHRoZSBleHRlbnNpb24gdGV4dAoJICAgICAqLwoJICAgIFJlc3VsdE1ldGFkYXRhVHlwZVtSZXN1bHRNZXRhZGF0YVR5cGVbIlVQQ19FQU5fRVhURU5TSU9OIl0gPSA3XSA9ICJVUENfRUFOX0VYVEVOU0lPTiI7CgkgICAgLyoqCgkgICAgICogUERGNDE3LXNwZWNpZmljIG1ldGFkYXRhCgkgICAgICovCgkgICAgUmVzdWx0TWV0YWRhdGFUeXBlW1Jlc3VsdE1ldGFkYXRhVHlwZVsiUERGNDE3X0VYVFJBX01FVEFEQVRBIl0gPSA4XSA9ICJQREY0MTdfRVhUUkFfTUVUQURBVEEiOwoJICAgIC8qKgoJICAgICAqIElmIHRoZSBjb2RlIGZvcm1hdCBzdXBwb3J0cyBzdHJ1Y3R1cmVkIGFwcGVuZCBhbmQgdGhlIGN1cnJlbnQgc2Nhbm5lZCBjb2RlIGlzIHBhcnQgb2Ygb25lIHRoZW4gdGhlCgkgICAgICogc2VxdWVuY2UgbnVtYmVyIGlzIGdpdmVuIHdpdGggaXQuCgkgICAgICovCgkgICAgUmVzdWx0TWV0YWRhdGFUeXBlW1Jlc3VsdE1ldGFkYXRhVHlwZVsiU1RSVUNUVVJFRF9BUFBFTkRfU0VRVUVOQ0UiXSA9IDldID0gIlNUUlVDVFVSRURfQVBQRU5EX1NFUVVFTkNFIjsKCSAgICAvKioKCSAgICAgKiBJZiB0aGUgY29kZSBmb3JtYXQgc3VwcG9ydHMgc3RydWN0dXJlZCBhcHBlbmQgYW5kIHRoZSBjdXJyZW50IHNjYW5uZWQgY29kZSBpcyBwYXJ0IG9mIG9uZSB0aGVuIHRoZQoJICAgICAqIHBhcml0eSBpcyBnaXZlbiB3aXRoIGl0LgoJICAgICAqLwoJICAgIFJlc3VsdE1ldGFkYXRhVHlwZVtSZXN1bHRNZXRhZGF0YVR5cGVbIlNUUlVDVFVSRURfQVBQRU5EX1BBUklUWSJdID0gMTBdID0gIlNUUlVDVFVSRURfQVBQRU5EX1BBUklUWSI7Cgl9KShSZXN1bHRNZXRhZGF0YVR5cGUgfHwgKFJlc3VsdE1ldGFkYXRhVHlwZSA9IHt9KSk7CglSZXN1bHRNZXRhZGF0YVR5cGUkMS5kZWZhdWx0ID0gUmVzdWx0TWV0YWRhdGFUeXBlOwoKCXZhciBEZWNvZGVyJDEgPSB7fTsKCgl2YXIgQ2hlY2tzdW1FeGNlcHRpb24kMSA9IHt9OwoKCXZhciBfX2V4dGVuZHMkOCA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7CgkgICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CgkgICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8CgkgICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTsKCSAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgfTsKCSAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9CgkgICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTsKCSAgICB9OwoJfSkoKTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGVja3N1bUV4Y2VwdGlvbiQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgRXhjZXB0aW9uXzEkNCA9IEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiBDdXN0b20gRXJyb3IgY2xhc3Mgb2YgdHlwZSBFeGNlcHRpb24uCgkgKi8KCXZhciBDaGVja3N1bUV4Y2VwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHsKCSAgICBfX2V4dGVuZHMkOChDaGVja3N1bUV4Y2VwdGlvbiwgX3N1cGVyKTsKCSAgICBmdW5jdGlvbiBDaGVja3N1bUV4Y2VwdGlvbigpIHsKCSAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzOwoJICAgIH0KCSAgICBDaGVja3N1bUV4Y2VwdGlvbi5nZXRDaGVja3N1bUluc3RhbmNlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gbmV3IENoZWNrc3VtRXhjZXB0aW9uKCk7CgkgICAgfTsKCSAgICBDaGVja3N1bUV4Y2VwdGlvbi5raW5kID0gJ0NoZWNrc3VtRXhjZXB0aW9uJzsKCSAgICByZXR1cm4gQ2hlY2tzdW1FeGNlcHRpb247Cgl9KEV4Y2VwdGlvbl8xJDQuZGVmYXVsdCkpOwoJQ2hlY2tzdW1FeGNlcHRpb24kMS5kZWZhdWx0ID0gQ2hlY2tzdW1FeGNlcHRpb247CgoJdmFyIEdlbmVyaWNHRiQxID0ge307CgoJdmFyIEdlbmVyaWNHRlBvbHkkMSA9IHt9OwoKCXZhciBBYnN0cmFjdEdlbmVyaWNHRiQxID0ge307CgoJLyoKCSAqIENvcHlyaWdodCAyMDA3IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdEdlbmVyaWNHRiQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNSA9IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiA8cD5UaGlzIGNsYXNzIGNvbnRhaW5zIHV0aWxpdHkgbWV0aG9kcyBmb3IgcGVyZm9ybWluZyBtYXRoZW1hdGljYWwgb3BlcmF0aW9ucyBvdmVyCgkgKiB0aGUgR2Fsb2lzIEZpZWxkcy4gT3BlcmF0aW9ucyB1c2UgYSBnaXZlbiBwcmltaXRpdmUgcG9seW5vbWlhbCBpbiBjYWxjdWxhdGlvbnMuPC9wPgoJICoKCSAqIDxwPlRocm91Z2hvdXQgdGhpcyBwYWNrYWdlLCBlbGVtZW50cyBvZiB0aGUgR0YgYXJlIHJlcHJlc2VudGVkIGFzIGFuIHtAY29kZSBpbnR9CgkgKiBmb3IgY29udmVuaWVuY2UgYW5kIHNwZWVkIChidXQgYXQgdGhlIGNvc3Qgb2YgbWVtb3J5KS4KCSAqIDwvcD4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICogQGF1dGhvciBEYXZpZCBPbGl2aWVyCgkgKi8KCXZhciBBYnN0cmFjdEdlbmVyaWNHRiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBBYnN0cmFjdEdlbmVyaWNHRigpIHsKCSAgICB9CgkgICAgLyoqCgkgICAgICogQHJldHVybiAyIHRvIHRoZSBwb3dlciBvZiBhIGluIEdGKHNpemUpCgkgICAgICovCgkgICAgQWJzdHJhY3RHZW5lcmljR0YucHJvdG90eXBlLmV4cCA9IGZ1bmN0aW9uIChhKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmV4cFRhYmxlW2FdOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiBiYXNlIDIgbG9nIG9mIGEgaW4gR0Yoc2l6ZSkKCSAgICAgKi8KCSAgICBBYnN0cmFjdEdlbmVyaWNHRi5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKGEgLyppbnQqLykgewoJICAgICAgICBpZiAoYSA9PT0gMCkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDUuZGVmYXVsdCgpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiB0aGlzLmxvZ1RhYmxlW2FdOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogSW1wbGVtZW50cyBib3RoIGFkZGl0aW9uIGFuZCBzdWJ0cmFjdGlvbiAtLSB0aGV5IGFyZSB0aGUgc2FtZSBpbiBHRihzaXplKS4KCSAgICAgKgoJICAgICAqIEByZXR1cm4gc3VtL2RpZmZlcmVuY2Ugb2YgYSBhbmQgYgoJICAgICAqLwoJICAgIEFic3RyYWN0R2VuZXJpY0dGLmFkZE9yU3VidHJhY3QgPSBmdW5jdGlvbiAoYSAvKmludCovLCBiIC8qaW50Ki8pIHsKCSAgICAgICAgcmV0dXJuIGEgXiBiOwoJICAgIH07CgkgICAgcmV0dXJuIEFic3RyYWN0R2VuZXJpY0dGOwoJfSgpKTsKCUFic3RyYWN0R2VuZXJpY0dGJDEuZGVmYXVsdCA9IEFic3RyYWN0R2VuZXJpY0dGOwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoR2VuZXJpY0dGUG9seSQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7CgkvKm5hbWVzcGFjZSBjb20uZ29vZ2xlLnp4aW5nLmNvbW1vbi5yZWVkc29sb21vbiB7Ki8KCXZhciBBYnN0cmFjdEdlbmVyaWNHRl8xJDEgPSBBYnN0cmFjdEdlbmVyaWNHRiQxOwoJdmFyIFN5c3RlbV8xID0gU3lzdGVtJDE7Cgl2YXIgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNCA9IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiA8cD5SZXByZXNlbnRzIGEgcG9seW5vbWlhbCB3aG9zZSBjb2VmZmljaWVudHMgYXJlIGVsZW1lbnRzIG9mIGEgR0YuCgkgKiBJbnN0YW5jZXMgb2YgdGhpcyBjbGFzcyBhcmUgaW1tdXRhYmxlLjwvcD4KCSAqCgkgKiA8cD5NdWNoIGNyZWRpdCBpcyBkdWUgdG8gV2lsbGlhbSBSdWNrbGlkZ2Ugc2luY2UgcG9ydGlvbnMgb2YgdGhpcyBjb2RlIGFyZSBhbiBpbmRpcmVjdAoJICogcG9ydCBvZiBoaXMgQysrIFJlZWQtU29sb21vbiBpbXBsZW1lbnRhdGlvbi48L3A+CgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIEdlbmVyaWNHRlBvbHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgLyoqCgkgICAgICogQHBhcmFtIGZpZWxkIHRoZSB7QGxpbmsgR2VuZXJpY0dGfSBpbnN0YW5jZSByZXByZXNlbnRpbmcgdGhlIGZpZWxkIHRvIHVzZQoJICAgICAqIHRvIHBlcmZvcm0gY29tcHV0YXRpb25zCgkgICAgICogQHBhcmFtIGNvZWZmaWNpZW50cyBjb2VmZmljaWVudHMgYXMgaW50cyByZXByZXNlbnRpbmcgZWxlbWVudHMgb2YgR0Yoc2l6ZSksIGFycmFuZ2VkCgkgICAgICogZnJvbSBtb3N0IHNpZ25pZmljYW50IChoaWdoZXN0LXBvd2VyIHRlcm0pIGNvZWZmaWNpZW50IHRvIGxlYXN0IHNpZ25pZmljYW50CgkgICAgICogQHRocm93cyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24gaWYgYXJndW1lbnQgaXMgbnVsbCBvciBlbXB0eSwKCSAgICAgKiBvciBpZiBsZWFkaW5nIGNvZWZmaWNpZW50IGlzIDAgYW5kIHRoaXMgaXMgbm90IGEKCSAgICAgKiBjb25zdGFudCBwb2x5bm9taWFsICh0aGF0IGlzLCBpdCBpcyBub3QgdGhlIG1vbm9taWFsICIwIikKCSAgICAgKi8KCSAgICBmdW5jdGlvbiBHZW5lcmljR0ZQb2x5KGZpZWxkLCBjb2VmZmljaWVudHMpIHsKCSAgICAgICAgaWYgKGNvZWZmaWNpZW50cy5sZW5ndGggPT09IDApIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQ0LmRlZmF1bHQoKTsKCSAgICAgICAgfQoJICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7CgkgICAgICAgIHZhciBjb2VmZmljaWVudHNMZW5ndGggPSBjb2VmZmljaWVudHMubGVuZ3RoOwoJICAgICAgICBpZiAoY29lZmZpY2llbnRzTGVuZ3RoID4gMSAmJiBjb2VmZmljaWVudHNbMF0gPT09IDApIHsKCSAgICAgICAgICAgIC8vIExlYWRpbmcgdGVybSBtdXN0IGJlIG5vbi16ZXJvIGZvciBhbnl0aGluZyBleGNlcHQgdGhlIGNvbnN0YW50IHBvbHlub21pYWwgIjAiCgkgICAgICAgICAgICB2YXIgZmlyc3ROb25aZXJvID0gMTsKCSAgICAgICAgICAgIHdoaWxlIChmaXJzdE5vblplcm8gPCBjb2VmZmljaWVudHNMZW5ndGggJiYgY29lZmZpY2llbnRzW2ZpcnN0Tm9uWmVyb10gPT09IDApIHsKCSAgICAgICAgICAgICAgICBmaXJzdE5vblplcm8rKzsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGlmIChmaXJzdE5vblplcm8gPT09IGNvZWZmaWNpZW50c0xlbmd0aCkgewoJICAgICAgICAgICAgICAgIHRoaXMuY29lZmZpY2llbnRzID0gSW50MzJBcnJheS5mcm9tKFswXSk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICB0aGlzLmNvZWZmaWNpZW50cyA9IG5ldyBJbnQzMkFycmF5KGNvZWZmaWNpZW50c0xlbmd0aCAtIGZpcnN0Tm9uWmVybyk7CgkgICAgICAgICAgICAgICAgU3lzdGVtXzEuZGVmYXVsdC5hcnJheWNvcHkoY29lZmZpY2llbnRzLCBmaXJzdE5vblplcm8sIHRoaXMuY29lZmZpY2llbnRzLCAwLCB0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGgpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgdGhpcy5jb2VmZmljaWVudHMgPSBjb2VmZmljaWVudHM7CgkgICAgICAgIH0KCSAgICB9CgkgICAgR2VuZXJpY0dGUG9seS5wcm90b3R5cGUuZ2V0Q29lZmZpY2llbnRzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5jb2VmZmljaWVudHM7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIGRlZ3JlZSBvZiB0aGlzIHBvbHlub21pYWwKCSAgICAgKi8KCSAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5nZXREZWdyZWUgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGggLSAxOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiB0cnVlIGlmZiB0aGlzIHBvbHlub21pYWwgaXMgdGhlIG1vbm9taWFsICIwIgoJICAgICAqLwoJICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuY29lZmZpY2llbnRzWzBdID09PSAwOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiBjb2VmZmljaWVudCBvZiB4XmRlZ3JlZSB0ZXJtIGluIHRoaXMgcG9seW5vbWlhbAoJICAgICAqLwoJICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLmdldENvZWZmaWNpZW50ID0gZnVuY3Rpb24gKGRlZ3JlZSAvKmludCovKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmNvZWZmaWNpZW50c1t0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGggLSAxIC0gZGVncmVlXTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gZXZhbHVhdGlvbiBvZiB0aGlzIHBvbHlub21pYWwgYXQgYSBnaXZlbiBwb2ludAoJICAgICAqLwoJICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLmV2YWx1YXRlQXQgPSBmdW5jdGlvbiAoYSAvKmludCovKSB7CgkgICAgICAgIGlmIChhID09PSAwKSB7CgkgICAgICAgICAgICAvLyBKdXN0IHJldHVybiB0aGUgeF4wIGNvZWZmaWNpZW50CgkgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb2VmZmljaWVudCgwKTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgY29lZmZpY2llbnRzID0gdGhpcy5jb2VmZmljaWVudHM7CgkgICAgICAgIHZhciByZXN1bHQ7CgkgICAgICAgIGlmIChhID09PSAxKSB7CgkgICAgICAgICAgICAvLyBKdXN0IHRoZSBzdW0gb2YgdGhlIGNvZWZmaWNpZW50cwoJICAgICAgICAgICAgcmVzdWx0ID0gMDsKCSAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGhfMSA9IGNvZWZmaWNpZW50cy5sZW5ndGg7IGkgIT09IGxlbmd0aF8xOyBpKyspIHsKCSAgICAgICAgICAgICAgICB2YXIgY29lZmZpY2llbnQgPSBjb2VmZmljaWVudHNbaV07CgkgICAgICAgICAgICAgICAgcmVzdWx0ID0gQWJzdHJhY3RHZW5lcmljR0ZfMSQxLmRlZmF1bHQuYWRkT3JTdWJ0cmFjdChyZXN1bHQsIGNvZWZmaWNpZW50KTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHJldHVybiByZXN1bHQ7CgkgICAgICAgIH0KCSAgICAgICAgcmVzdWx0ID0gY29lZmZpY2llbnRzWzBdOwoJICAgICAgICB2YXIgc2l6ZSA9IGNvZWZmaWNpZW50cy5sZW5ndGg7CgkgICAgICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGQ7CgkgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgc2l6ZTsgaSsrKSB7CgkgICAgICAgICAgICByZXN1bHQgPSBBYnN0cmFjdEdlbmVyaWNHRl8xJDEuZGVmYXVsdC5hZGRPclN1YnRyYWN0KGZpZWxkLm11bHRpcGx5KGEsIHJlc3VsdCksIGNvZWZmaWNpZW50c1tpXSk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHJlc3VsdDsKCSAgICB9OwoJICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLmFkZE9yU3VidHJhY3QgPSBmdW5jdGlvbiAob3RoZXIpIHsKCSAgICAgICAgaWYgKCF0aGlzLmZpZWxkLmVxdWFscyhvdGhlci5maWVsZCkpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQ0LmRlZmF1bHQoJ0dlbmVyaWNHRlBvbHlzIGRvIG5vdCBoYXZlIHNhbWUgR2VuZXJpY0dGIGZpZWxkJyk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHRoaXMuaXNaZXJvKCkpIHsKCSAgICAgICAgICAgIHJldHVybiBvdGhlcjsKCSAgICAgICAgfQoJICAgICAgICBpZiAob3RoZXIuaXNaZXJvKCkpIHsKCSAgICAgICAgICAgIHJldHVybiB0aGlzOwoJICAgICAgICB9CgkgICAgICAgIHZhciBzbWFsbGVyQ29lZmZpY2llbnRzID0gdGhpcy5jb2VmZmljaWVudHM7CgkgICAgICAgIHZhciBsYXJnZXJDb2VmZmljaWVudHMgPSBvdGhlci5jb2VmZmljaWVudHM7CgkgICAgICAgIGlmIChzbWFsbGVyQ29lZmZpY2llbnRzLmxlbmd0aCA+IGxhcmdlckNvZWZmaWNpZW50cy5sZW5ndGgpIHsKCSAgICAgICAgICAgIHZhciB0ZW1wID0gc21hbGxlckNvZWZmaWNpZW50czsKCSAgICAgICAgICAgIHNtYWxsZXJDb2VmZmljaWVudHMgPSBsYXJnZXJDb2VmZmljaWVudHM7CgkgICAgICAgICAgICBsYXJnZXJDb2VmZmljaWVudHMgPSB0ZW1wOwoJICAgICAgICB9CgkgICAgICAgIHZhciBzdW1EaWZmID0gbmV3IEludDMyQXJyYXkobGFyZ2VyQ29lZmZpY2llbnRzLmxlbmd0aCk7CgkgICAgICAgIHZhciBsZW5ndGhEaWZmID0gbGFyZ2VyQ29lZmZpY2llbnRzLmxlbmd0aCAtIHNtYWxsZXJDb2VmZmljaWVudHMubGVuZ3RoOwoJICAgICAgICAvLyBDb3B5IGhpZ2gtb3JkZXIgdGVybXMgb25seSBmb3VuZCBpbiBoaWdoZXItZGVncmVlIHBvbHlub21pYWwncyBjb2VmZmljaWVudHMKCSAgICAgICAgU3lzdGVtXzEuZGVmYXVsdC5hcnJheWNvcHkobGFyZ2VyQ29lZmZpY2llbnRzLCAwLCBzdW1EaWZmLCAwLCBsZW5ndGhEaWZmKTsKCSAgICAgICAgZm9yICh2YXIgaSA9IGxlbmd0aERpZmY7IGkgPCBsYXJnZXJDb2VmZmljaWVudHMubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgICAgIHN1bURpZmZbaV0gPSBBYnN0cmFjdEdlbmVyaWNHRl8xJDEuZGVmYXVsdC5hZGRPclN1YnRyYWN0KHNtYWxsZXJDb2VmZmljaWVudHNbaSAtIGxlbmd0aERpZmZdLCBsYXJnZXJDb2VmZmljaWVudHNbaV0pOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBuZXcgR2VuZXJpY0dGUG9seSh0aGlzLmZpZWxkLCBzdW1EaWZmKTsKCSAgICB9OwoJICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKG90aGVyKSB7CgkgICAgICAgIGlmICghdGhpcy5maWVsZC5lcXVhbHMob3RoZXIuZmllbGQpKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNC5kZWZhdWx0KCdHZW5lcmljR0ZQb2x5cyBkbyBub3QgaGF2ZSBzYW1lIEdlbmVyaWNHRiBmaWVsZCcpOwoJICAgICAgICB9CgkgICAgICAgIGlmICh0aGlzLmlzWmVybygpIHx8IG90aGVyLmlzWmVybygpKSB7CgkgICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZC5nZXRaZXJvKCk7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIGFDb2VmZmljaWVudHMgPSB0aGlzLmNvZWZmaWNpZW50czsKCSAgICAgICAgdmFyIGFMZW5ndGggPSBhQ29lZmZpY2llbnRzLmxlbmd0aDsKCSAgICAgICAgdmFyIGJDb2VmZmljaWVudHMgPSBvdGhlci5jb2VmZmljaWVudHM7CgkgICAgICAgIHZhciBiTGVuZ3RoID0gYkNvZWZmaWNpZW50cy5sZW5ndGg7CgkgICAgICAgIHZhciBwcm9kdWN0ID0gbmV3IEludDMyQXJyYXkoYUxlbmd0aCArIGJMZW5ndGggLSAxKTsKCSAgICAgICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZDsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhTGVuZ3RoOyBpKyspIHsKCSAgICAgICAgICAgIHZhciBhQ29lZmYgPSBhQ29lZmZpY2llbnRzW2ldOwoJICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBiTGVuZ3RoOyBqKyspIHsKCSAgICAgICAgICAgICAgICBwcm9kdWN0W2kgKyBqXSA9IEFic3RyYWN0R2VuZXJpY0dGXzEkMS5kZWZhdWx0LmFkZE9yU3VidHJhY3QocHJvZHVjdFtpICsgal0sIGZpZWxkLm11bHRpcGx5KGFDb2VmZiwgYkNvZWZmaWNpZW50c1tqXSkpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBuZXcgR2VuZXJpY0dGUG9seShmaWVsZCwgcHJvZHVjdCk7CgkgICAgfTsKCSAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5tdWx0aXBseVNjYWxhciA9IGZ1bmN0aW9uIChzY2FsYXIgLyppbnQqLykgewoJICAgICAgICBpZiAoc2NhbGFyID09PSAwKSB7CgkgICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZC5nZXRaZXJvKCk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHNjYWxhciA9PT0gMSkgewoJICAgICAgICAgICAgcmV0dXJuIHRoaXM7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIHNpemUgPSB0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGg7CgkgICAgICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGQ7CgkgICAgICAgIHZhciBwcm9kdWN0ID0gbmV3IEludDMyQXJyYXkoc2l6ZSk7CgkgICAgICAgIHZhciBjb2VmZmljaWVudHMgPSB0aGlzLmNvZWZmaWNpZW50czsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHsKCSAgICAgICAgICAgIHByb2R1Y3RbaV0gPSBmaWVsZC5tdWx0aXBseShjb2VmZmljaWVudHNbaV0sIHNjYWxhcik7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmljR0ZQb2x5KGZpZWxkLCBwcm9kdWN0KTsKCSAgICB9OwoJICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLm11bHRpcGx5QnlNb25vbWlhbCA9IGZ1bmN0aW9uIChkZWdyZWUgLyppbnQqLywgY29lZmZpY2llbnQgLyppbnQqLykgewoJICAgICAgICBpZiAoZGVncmVlIDwgMCkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDQuZGVmYXVsdCgpOwoJICAgICAgICB9CgkgICAgICAgIGlmIChjb2VmZmljaWVudCA9PT0gMCkgewoJICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQuZ2V0WmVybygpOwoJICAgICAgICB9CgkgICAgICAgIHZhciBjb2VmZmljaWVudHMgPSB0aGlzLmNvZWZmaWNpZW50czsKCSAgICAgICAgdmFyIHNpemUgPSBjb2VmZmljaWVudHMubGVuZ3RoOwoJICAgICAgICB2YXIgcHJvZHVjdCA9IG5ldyBJbnQzMkFycmF5KHNpemUgKyBkZWdyZWUpOwoJICAgICAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkOwoJICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykgewoJICAgICAgICAgICAgcHJvZHVjdFtpXSA9IGZpZWxkLm11bHRpcGx5KGNvZWZmaWNpZW50c1tpXSwgY29lZmZpY2llbnQpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBuZXcgR2VuZXJpY0dGUG9seShmaWVsZCwgcHJvZHVjdCk7CgkgICAgfTsKCSAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbiAob3RoZXIpIHsKCSAgICAgICAgaWYgKCF0aGlzLmZpZWxkLmVxdWFscyhvdGhlci5maWVsZCkpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQ0LmRlZmF1bHQoJ0dlbmVyaWNHRlBvbHlzIGRvIG5vdCBoYXZlIHNhbWUgR2VuZXJpY0dGIGZpZWxkJyk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKG90aGVyLmlzWmVybygpKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkNC5kZWZhdWx0KCdEaXZpZGUgYnkgMCcpOwoJICAgICAgICB9CgkgICAgICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGQ7CgkgICAgICAgIHZhciBxdW90aWVudCA9IGZpZWxkLmdldFplcm8oKTsKCSAgICAgICAgdmFyIHJlbWFpbmRlciA9IHRoaXM7CgkgICAgICAgIHZhciBkZW5vbWluYXRvckxlYWRpbmdUZXJtID0gb3RoZXIuZ2V0Q29lZmZpY2llbnQob3RoZXIuZ2V0RGVncmVlKCkpOwoJICAgICAgICB2YXIgaW52ZXJzZURlbm9taW5hdG9yTGVhZGluZ1Rlcm0gPSBmaWVsZC5pbnZlcnNlKGRlbm9taW5hdG9yTGVhZGluZ1Rlcm0pOwoJICAgICAgICB3aGlsZSAocmVtYWluZGVyLmdldERlZ3JlZSgpID49IG90aGVyLmdldERlZ3JlZSgpICYmICFyZW1haW5kZXIuaXNaZXJvKCkpIHsKCSAgICAgICAgICAgIHZhciBkZWdyZWVEaWZmZXJlbmNlID0gcmVtYWluZGVyLmdldERlZ3JlZSgpIC0gb3RoZXIuZ2V0RGVncmVlKCk7CgkgICAgICAgICAgICB2YXIgc2NhbGUgPSBmaWVsZC5tdWx0aXBseShyZW1haW5kZXIuZ2V0Q29lZmZpY2llbnQocmVtYWluZGVyLmdldERlZ3JlZSgpKSwgaW52ZXJzZURlbm9taW5hdG9yTGVhZGluZ1Rlcm0pOwoJICAgICAgICAgICAgdmFyIHRlcm0gPSBvdGhlci5tdWx0aXBseUJ5TW9ub21pYWwoZGVncmVlRGlmZmVyZW5jZSwgc2NhbGUpOwoJICAgICAgICAgICAgdmFyIGl0ZXJhdGlvblF1b3RpZW50ID0gZmllbGQuYnVpbGRNb25vbWlhbChkZWdyZWVEaWZmZXJlbmNlLCBzY2FsZSk7CgkgICAgICAgICAgICBxdW90aWVudCA9IHF1b3RpZW50LmFkZE9yU3VidHJhY3QoaXRlcmF0aW9uUXVvdGllbnQpOwoJICAgICAgICAgICAgcmVtYWluZGVyID0gcmVtYWluZGVyLmFkZE9yU3VidHJhY3QodGVybSk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIFtxdW90aWVudCwgcmVtYWluZGVyXTsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgdmFyIHJlc3VsdCA9ICcnOwoJICAgICAgICBmb3IgKHZhciBkZWdyZWUgPSB0aGlzLmdldERlZ3JlZSgpOyBkZWdyZWUgPj0gMDsgZGVncmVlLS0pIHsKCSAgICAgICAgICAgIHZhciBjb2VmZmljaWVudCA9IHRoaXMuZ2V0Q29lZmZpY2llbnQoZGVncmVlKTsKCSAgICAgICAgICAgIGlmIChjb2VmZmljaWVudCAhPT0gMCkgewoJICAgICAgICAgICAgICAgIGlmIChjb2VmZmljaWVudCA8IDApIHsKCSAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcgLSAnOwoJICAgICAgICAgICAgICAgICAgICBjb2VmZmljaWVudCA9IC1jb2VmZmljaWVudDsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcgKyAnOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIGlmIChkZWdyZWUgPT09IDAgfHwgY29lZmZpY2llbnQgIT09IDEpIHsKCSAgICAgICAgICAgICAgICAgICAgdmFyIGFscGhhUG93ZXIgPSB0aGlzLmZpZWxkLmxvZyhjb2VmZmljaWVudCk7CgkgICAgICAgICAgICAgICAgICAgIGlmIChhbHBoYVBvd2VyID09PSAwKSB7CgkgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJzEnOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFscGhhUG93ZXIgPT09IDEpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnYSc7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ2FeJzsKCSAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBhbHBoYVBvd2VyOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIGlmIChkZWdyZWUgIT09IDApIHsKCSAgICAgICAgICAgICAgICAgICAgaWYgKGRlZ3JlZSA9PT0gMSkgewoJICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICd4JzsKCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAneF4nOwoJICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGRlZ3JlZTsKCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gcmVzdWx0OwoJICAgIH07CgkgICAgcmV0dXJuIEdlbmVyaWNHRlBvbHk7Cgl9KCkpOwoJR2VuZXJpY0dGUG9seSQxLmRlZmF1bHQgPSBHZW5lcmljR0ZQb2x5OwoKCXZhciBBcml0aG1ldGljRXhjZXB0aW9uJDEgPSB7fTsKCgl2YXIgX19leHRlbmRzJDcgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkgewoJICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAoJICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fAoJICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07CgkgICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgIH07CgkgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfQoJICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7CgkgICAgfTsKCX0pKCk7CglPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJpdGhtZXRpY0V4Y2VwdGlvbiQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgRXhjZXB0aW9uXzEkMyA9IEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiBDdXN0b20gRXJyb3IgY2xhc3Mgb2YgdHlwZSBFeGNlcHRpb24uCgkgKi8KCXZhciBBcml0aG1ldGljRXhjZXB0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikgewoJICAgIF9fZXh0ZW5kcyQ3KEFyaXRobWV0aWNFeGNlcHRpb24sIF9zdXBlcik7CgkgICAgZnVuY3Rpb24gQXJpdGhtZXRpY0V4Y2VwdGlvbigpIHsKCSAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzOwoJICAgIH0KCSAgICBBcml0aG1ldGljRXhjZXB0aW9uLmtpbmQgPSAnQXJpdGhtZXRpY0V4Y2VwdGlvbic7CgkgICAgcmV0dXJuIEFyaXRobWV0aWNFeGNlcHRpb247Cgl9KEV4Y2VwdGlvbl8xJDMuZGVmYXVsdCkpOwoJQXJpdGhtZXRpY0V4Y2VwdGlvbiQxLmRlZmF1bHQgPSBBcml0aG1ldGljRXhjZXB0aW9uOwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCgl2YXIgX19leHRlbmRzJDYgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkgewoJICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAoJICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fAoJICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07CgkgICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgIH07CgkgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfQoJICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7CgkgICAgfTsKCX0pKCk7CglPYmplY3QuZGVmaW5lUHJvcGVydHkoR2VuZXJpY0dGJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcuY29tbW9uLnJlZWRzb2xvbW9uIHsqLwoJdmFyIEdlbmVyaWNHRlBvbHlfMSQxID0gR2VuZXJpY0dGUG9seSQxOwoJdmFyIEFic3RyYWN0R2VuZXJpY0dGXzEgPSBBYnN0cmFjdEdlbmVyaWNHRiQxOwoJdmFyIEludGVnZXJfMSQxID0gSW50ZWdlciQxOwoJdmFyIElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDMgPSBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24kMTsKCXZhciBBcml0aG1ldGljRXhjZXB0aW9uXzEgPSBBcml0aG1ldGljRXhjZXB0aW9uJDE7CgkvKioKCSAqIDxwPlRoaXMgY2xhc3MgY29udGFpbnMgdXRpbGl0eSBtZXRob2RzIGZvciBwZXJmb3JtaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRpb25zIG92ZXIKCSAqIHRoZSBHYWxvaXMgRmllbGRzLiBPcGVyYXRpb25zIHVzZSBhIGdpdmVuIHByaW1pdGl2ZSBwb2x5bm9taWFsIGluIGNhbGN1bGF0aW9ucy48L3A+CgkgKgoJICogPHA+VGhyb3VnaG91dCB0aGlzIHBhY2thZ2UsIGVsZW1lbnRzIG9mIHRoZSBHRiBhcmUgcmVwcmVzZW50ZWQgYXMgYW4ge0Bjb2RlIGludH0KCSAqIGZvciBjb252ZW5pZW5jZSBhbmQgc3BlZWQgKGJ1dCBhdCB0aGUgY29zdCBvZiBtZW1vcnkpLgoJICogPC9wPgoJICoKCSAqIEBhdXRob3IgU2VhbiBPd2VuCgkgKiBAYXV0aG9yIERhdmlkIE9saXZpZXIKCSAqLwoJdmFyIEdlbmVyaWNHRiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHsKCSAgICBfX2V4dGVuZHMkNihHZW5lcmljR0YsIF9zdXBlcik7CgkgICAgLyoqCgkgICAgICogQ3JlYXRlIGEgcmVwcmVzZW50YXRpb24gb2YgR0Yoc2l6ZSkgdXNpbmcgdGhlIGdpdmVuIHByaW1pdGl2ZSBwb2x5bm9taWFsLgoJICAgICAqCgkgICAgICogQHBhcmFtIHByaW1pdGl2ZSBpcnJlZHVjaWJsZSBwb2x5bm9taWFsIHdob3NlIGNvZWZmaWNpZW50cyBhcmUgcmVwcmVzZW50ZWQgYnkKCSAgICAgKiAgdGhlIGJpdHMgb2YgYW4gaW50LCB3aGVyZSB0aGUgbGVhc3Qtc2lnbmlmaWNhbnQgYml0IHJlcHJlc2VudHMgdGhlIGNvbnN0YW50CgkgICAgICogIGNvZWZmaWNpZW50CgkgICAgICogQHBhcmFtIHNpemUgdGhlIHNpemUgb2YgdGhlIGZpZWxkCgkgICAgICogQHBhcmFtIGIgdGhlIGZhY3RvciBiIGluIHRoZSBnZW5lcmF0b3IgcG9seW5vbWlhbCBjYW4gYmUgMC0gb3IgMS1iYXNlZAoJICAgICAqICAoZyh4KSA9ICh4K2FeYikoeCthXihiKzEpKS4uLih4K2FeKGIrMnQtMSkpKS4KCSAgICAgKiAgSW4gbW9zdCBjYXNlcyBpdCBzaG91bGQgYmUgMSwgYnV0IGZvciBRUiBjb2RlIGl0IGlzIDAuCgkgICAgICovCgkgICAgZnVuY3Rpb24gR2VuZXJpY0dGKHByaW1pdGl2ZSAvKmludCovLCBzaXplIC8qaW50Ki8sIGdlbmVyYXRvckJhc2UgLyppbnQqLykgewoJICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzOwoJICAgICAgICBfdGhpcy5wcmltaXRpdmUgPSBwcmltaXRpdmU7CgkgICAgICAgIF90aGlzLnNpemUgPSBzaXplOwoJICAgICAgICBfdGhpcy5nZW5lcmF0b3JCYXNlID0gZ2VuZXJhdG9yQmFzZTsKCSAgICAgICAgdmFyIGV4cFRhYmxlID0gbmV3IEludDMyQXJyYXkoc2l6ZSk7CgkgICAgICAgIHZhciB4ID0gMTsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHsKCSAgICAgICAgICAgIGV4cFRhYmxlW2ldID0geDsKCSAgICAgICAgICAgIHggKj0gMjsgLy8gd2UncmUgYXNzdW1pbmcgdGhlIGdlbmVyYXRvciBhbHBoYSBpcyAyCgkgICAgICAgICAgICBpZiAoeCA+PSBzaXplKSB7CgkgICAgICAgICAgICAgICAgeCBePSBwcmltaXRpdmU7CgkgICAgICAgICAgICAgICAgeCAmPSBzaXplIC0gMTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICBfdGhpcy5leHBUYWJsZSA9IGV4cFRhYmxlOwoJICAgICAgICB2YXIgbG9nVGFibGUgPSBuZXcgSW50MzJBcnJheShzaXplKTsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplIC0gMTsgaSsrKSB7CgkgICAgICAgICAgICBsb2dUYWJsZVtleHBUYWJsZVtpXV0gPSBpOwoJICAgICAgICB9CgkgICAgICAgIF90aGlzLmxvZ1RhYmxlID0gbG9nVGFibGU7CgkgICAgICAgIC8vIGxvZ1RhYmxlWzBdID09IDAgYnV0IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHVzZWQKCSAgICAgICAgX3RoaXMuemVybyA9IG5ldyBHZW5lcmljR0ZQb2x5XzEkMS5kZWZhdWx0KF90aGlzLCBJbnQzMkFycmF5LmZyb20oWzBdKSk7CgkgICAgICAgIF90aGlzLm9uZSA9IG5ldyBHZW5lcmljR0ZQb2x5XzEkMS5kZWZhdWx0KF90aGlzLCBJbnQzMkFycmF5LmZyb20oWzFdKSk7CgkgICAgICAgIHJldHVybiBfdGhpczsKCSAgICB9CgkgICAgR2VuZXJpY0dGLnByb3RvdHlwZS5nZXRaZXJvID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy56ZXJvOwoJICAgIH07CgkgICAgR2VuZXJpY0dGLnByb3RvdHlwZS5nZXRPbmUgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLm9uZTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gdGhlIG1vbm9taWFsIHJlcHJlc2VudGluZyBjb2VmZmljaWVudCAqIHheZGVncmVlCgkgICAgICovCgkgICAgR2VuZXJpY0dGLnByb3RvdHlwZS5idWlsZE1vbm9taWFsID0gZnVuY3Rpb24gKGRlZ3JlZSAvKmludCovLCBjb2VmZmljaWVudCAvKmludCovKSB7CgkgICAgICAgIGlmIChkZWdyZWUgPCAwKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXzEkMy5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGNvZWZmaWNpZW50ID09PSAwKSB7CgkgICAgICAgICAgICByZXR1cm4gdGhpcy56ZXJvOwoJICAgICAgICB9CgkgICAgICAgIHZhciBjb2VmZmljaWVudHMgPSBuZXcgSW50MzJBcnJheShkZWdyZWUgKyAxKTsKCSAgICAgICAgY29lZmZpY2llbnRzWzBdID0gY29lZmZpY2llbnQ7CgkgICAgICAgIHJldHVybiBuZXcgR2VuZXJpY0dGUG9seV8xJDEuZGVmYXVsdCh0aGlzLCBjb2VmZmljaWVudHMpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiBtdWx0aXBsaWNhdGl2ZSBpbnZlcnNlIG9mIGEKCSAgICAgKi8KCSAgICBHZW5lcmljR0YucHJvdG90eXBlLmludmVyc2UgPSBmdW5jdGlvbiAoYSAvKmludCovKSB7CgkgICAgICAgIGlmIChhID09PSAwKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgQXJpdGhtZXRpY0V4Y2VwdGlvbl8xLmRlZmF1bHQoKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gdGhpcy5leHBUYWJsZVt0aGlzLnNpemUgLSB0aGlzLmxvZ1RhYmxlW2FdIC0gMV07CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIHByb2R1Y3Qgb2YgYSBhbmQgYiBpbiBHRihzaXplKQoJICAgICAqLwoJICAgIEdlbmVyaWNHRi5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAoYSAvKmludCovLCBiIC8qaW50Ki8pIHsKCSAgICAgICAgaWYgKGEgPT09IDAgfHwgYiA9PT0gMCkgewoJICAgICAgICAgICAgcmV0dXJuIDA7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHRoaXMuZXhwVGFibGVbKHRoaXMubG9nVGFibGVbYV0gKyB0aGlzLmxvZ1RhYmxlW2JdKSAlICh0aGlzLnNpemUgLSAxKV07CgkgICAgfTsKCSAgICBHZW5lcmljR0YucHJvdG90eXBlLmdldFNpemUgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLnNpemU7CgkgICAgfTsKCSAgICBHZW5lcmljR0YucHJvdG90eXBlLmdldEdlbmVyYXRvckJhc2UgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRvckJhc2U7CgkgICAgfTsKCSAgICAvKkBPdmVycmlkZSovCgkgICAgR2VuZXJpY0dGLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuICgnR0YoMHgnICsgSW50ZWdlcl8xJDEuZGVmYXVsdC50b0hleFN0cmluZyh0aGlzLnByaW1pdGl2ZSkgKyAnLCcgKyB0aGlzLnNpemUgKyAnKScpOwoJICAgIH07CgkgICAgR2VuZXJpY0dGLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAobykgewoJICAgICAgICByZXR1cm4gbyA9PT0gdGhpczsKCSAgICB9OwoJICAgIEdlbmVyaWNHRi5BWlRFQ19EQVRBXzEyID0gbmV3IEdlbmVyaWNHRigweDEwNjksIDQwOTYsIDEpOyAvLyB4XjEyICsgeF42ICsgeF41ICsgeF4zICsgMQoJICAgIEdlbmVyaWNHRi5BWlRFQ19EQVRBXzEwID0gbmV3IEdlbmVyaWNHRigweDQwOSwgMTAyNCwgMSk7IC8vIHheMTAgKyB4XjMgKyAxCgkgICAgR2VuZXJpY0dGLkFaVEVDX0RBVEFfNiA9IG5ldyBHZW5lcmljR0YoMHg0MywgNjQsIDEpOyAvLyB4XjYgKyB4ICsgMQoJICAgIEdlbmVyaWNHRi5BWlRFQ19QQVJBTSA9IG5ldyBHZW5lcmljR0YoMHgxMywgMTYsIDEpOyAvLyB4XjQgKyB4ICsgMQoJICAgIEdlbmVyaWNHRi5RUl9DT0RFX0ZJRUxEXzI1NiA9IG5ldyBHZW5lcmljR0YoMHgwMTFkLCAyNTYsIDApOyAvLyB4XjggKyB4XjQgKyB4XjMgKyB4XjIgKyAxCgkgICAgR2VuZXJpY0dGLkRBVEFfTUFUUklYX0ZJRUxEXzI1NiA9IG5ldyBHZW5lcmljR0YoMHgwMTJkLCAyNTYsIDEpOyAvLyB4XjggKyB4XjUgKyB4XjMgKyB4XjIgKyAxCgkgICAgR2VuZXJpY0dGLkFaVEVDX0RBVEFfOCA9IEdlbmVyaWNHRi5EQVRBX01BVFJJWF9GSUVMRF8yNTY7CgkgICAgR2VuZXJpY0dGLk1BWElDT0RFX0ZJRUxEXzY0ID0gR2VuZXJpY0dGLkFaVEVDX0RBVEFfNjsKCSAgICByZXR1cm4gR2VuZXJpY0dGOwoJfShBYnN0cmFjdEdlbmVyaWNHRl8xLmRlZmF1bHQpKTsKCUdlbmVyaWNHRiQxLmRlZmF1bHQgPSBHZW5lcmljR0Y7CgoJdmFyIFJlZWRTb2xvbW9uRGVjb2RlciQxID0ge307CgoJdmFyIFJlZWRTb2xvbW9uRXhjZXB0aW9uJDEgPSB7fTsKCgl2YXIgX19leHRlbmRzJDUgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkgewoJICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAoJICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fAoJICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07CgkgICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgIH07CgkgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfQoJICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7CgkgICAgfTsKCX0pKCk7CglPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVlZFNvbG9tb25FeGNlcHRpb24kMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJdmFyIEV4Y2VwdGlvbl8xJDIgPSBFeGNlcHRpb24kMTsKCS8qKgoJICogQ3VzdG9tIEVycm9yIGNsYXNzIG9mIHR5cGUgRXhjZXB0aW9uLgoJICovCgl2YXIgUmVlZFNvbG9tb25FeGNlcHRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7CgkgICAgX19leHRlbmRzJDUoUmVlZFNvbG9tb25FeGNlcHRpb24sIF9zdXBlcik7CgkgICAgZnVuY3Rpb24gUmVlZFNvbG9tb25FeGNlcHRpb24oKSB7CgkgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpczsKCSAgICB9CgkgICAgUmVlZFNvbG9tb25FeGNlcHRpb24ua2luZCA9ICdSZWVkU29sb21vbkV4Y2VwdGlvbic7CgkgICAgcmV0dXJuIFJlZWRTb2xvbW9uRXhjZXB0aW9uOwoJfShFeGNlcHRpb25fMSQyLmRlZmF1bHQpKTsKCVJlZWRTb2xvbW9uRXhjZXB0aW9uJDEuZGVmYXVsdCA9IFJlZWRTb2xvbW9uRXhjZXB0aW9uOwoKCXZhciBJbGxlZ2FsU3RhdGVFeGNlcHRpb24kMSA9IHt9OwoKCXZhciBfX2V4dGVuZHMkNCA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7CgkgICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CgkgICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8CgkgICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTsKCSAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgfTsKCSAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9CgkgICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTsKCSAgICB9OwoJfSkoKTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbGxlZ2FsU3RhdGVFeGNlcHRpb24kMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJdmFyIEV4Y2VwdGlvbl8xJDEgPSBFeGNlcHRpb24kMTsKCS8qKgoJICogQ3VzdG9tIEVycm9yIGNsYXNzIG9mIHR5cGUgRXhjZXB0aW9uLgoJICovCgl2YXIgSWxsZWdhbFN0YXRlRXhjZXB0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikgewoJICAgIF9fZXh0ZW5kcyQ0KElsbGVnYWxTdGF0ZUV4Y2VwdGlvbiwgX3N1cGVyKTsKCSAgICBmdW5jdGlvbiBJbGxlZ2FsU3RhdGVFeGNlcHRpb24oKSB7CgkgICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpczsKCSAgICB9CgkgICAgSWxsZWdhbFN0YXRlRXhjZXB0aW9uLmtpbmQgPSAnSWxsZWdhbFN0YXRlRXhjZXB0aW9uJzsKCSAgICByZXR1cm4gSWxsZWdhbFN0YXRlRXhjZXB0aW9uOwoJfShFeGNlcHRpb25fMSQxLmRlZmF1bHQpKTsKCUlsbGVnYWxTdGF0ZUV4Y2VwdGlvbiQxLmRlZmF1bHQgPSBJbGxlZ2FsU3RhdGVFeGNlcHRpb247CgoJLyoKCSAqIENvcHlyaWdodCAyMDA3IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWVkU29sb21vbkRlY29kZXIkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZy5jb21tb24ucmVlZHNvbG9tb24geyovCgl2YXIgR2VuZXJpY0dGXzEkMSA9IEdlbmVyaWNHRiQxOwoJdmFyIEdlbmVyaWNHRlBvbHlfMSA9IEdlbmVyaWNHRlBvbHkkMTsKCXZhciBSZWVkU29sb21vbkV4Y2VwdGlvbl8xID0gUmVlZFNvbG9tb25FeGNlcHRpb24kMTsKCXZhciBJbGxlZ2FsU3RhdGVFeGNlcHRpb25fMSA9IElsbGVnYWxTdGF0ZUV4Y2VwdGlvbiQxOwoJLyoqCgkgKiA8cD5JbXBsZW1lbnRzIFJlZWQtU29sb21vbiBkZWNvZGluZywgYXMgdGhlIG5hbWUgaW1wbGllcy48L3A+CgkgKgoJICogPHA+VGhlIGFsZ29yaXRobSB3aWxsIG5vdCBiZSBleHBsYWluZWQgaGVyZSwgYnV0IHRoZSBmb2xsb3dpbmcgcmVmZXJlbmNlcyB3ZXJlIGhlbHBmdWwKCSAqIGluIGNyZWF0aW5nIHRoaXMgaW1wbGVtZW50YXRpb246PC9wPgoJICoKCSAqIDx1bD4KCSAqIDxsaT5CcnVjZSBNYWdncy4KCSAqIDxhIGhyZWY9Imh0dHA6Ly93d3cuY3MuY211LmVkdS9hZnMvY3MuY211LmVkdS9wcm9qZWN0L3BzY2ljby1ndXliL3JlYWx3b3JsZC93d3cvcnNfZGVjb2RlLnBzIj4KCSAqICJEZWNvZGluZyBSZWVkLVNvbG9tb24gQ29kZXMiPC9hPiAoc2VlIGRpc2N1c3Npb24gb2YgRm9ybmV5J3MgRm9ybXVsYSk8L2xpPgoJICogPGxpPkouSS4gSGFsbC4gPGEgaHJlZj0id3d3Lm10aC5tc3UuZWR1L35qaGFsbC9jbGFzc2VzL2NvZGVub3Rlcy9HUlMucGRmIj4KCSAqICJDaGFwdGVyIDUuIEdlbmVyYWxpemVkIFJlZWQtU29sb21vbiBDb2RlcyI8L2E+CgkgKiAoc2VlIGRpc2N1c3Npb24gb2YgRXVjbGlkZWFuIGFsZ29yaXRobSk8L2xpPgoJICogPC91bD4KCSAqCgkgKiA8cD5NdWNoIGNyZWRpdCBpcyBkdWUgdG8gV2lsbGlhbSBSdWNrbGlkZ2Ugc2luY2UgcG9ydGlvbnMgb2YgdGhpcyBjb2RlIGFyZSBhbiBpbmRpcmVjdAoJICogcG9ydCBvZiBoaXMgQysrIFJlZWQtU29sb21vbiBpbXBsZW1lbnRhdGlvbi48L3A+CgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqIEBhdXRob3IgV2lsbGlhbSBSdWNrbGlkZ2UKCSAqIEBhdXRob3Igc2FuZm9yZHNxdWlyZXMKCSAqLwoJdmFyIFJlZWRTb2xvbW9uRGVjb2RlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBSZWVkU29sb21vbkRlY29kZXIoZmllbGQpIHsKCSAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkOwoJICAgIH0KCSAgICAvKioKCSAgICAgKiA8cD5EZWNvZGVzIGdpdmVuIHNldCBvZiByZWNlaXZlZCBjb2Rld29yZHMsIHdoaWNoIGluY2x1ZGUgYm90aCBkYXRhIGFuZCBlcnJvci1jb3JyZWN0aW9uCgkgICAgICogY29kZXdvcmRzLiBSZWFsbHksIHRoaXMgbWVhbnMgaXQgdXNlcyBSZWVkLVNvbG9tb24gdG8gZGV0ZWN0IGFuZCBjb3JyZWN0IGVycm9ycywgaW4tcGxhY2UsCgkgICAgICogaW4gdGhlIGlucHV0LjwvcD4KCSAgICAgKgoJICAgICAqIEBwYXJhbSByZWNlaXZlZCBkYXRhIGFuZCBlcnJvci1jb3JyZWN0aW9uIGNvZGV3b3JkcwoJICAgICAqIEBwYXJhbSB0d29TIG51bWJlciBvZiBlcnJvci1jb3JyZWN0aW9uIGNvZGV3b3JkcyBhdmFpbGFibGUKCSAgICAgKiBAdGhyb3dzIFJlZWRTb2xvbW9uRXhjZXB0aW9uIGlmIGRlY29kaW5nIGZhaWxzIGZvciBhbnkgcmVhc29uCgkgICAgICovCgkgICAgUmVlZFNvbG9tb25EZWNvZGVyLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAocmVjZWl2ZWQsIHR3b1MgLyppbnQqLykgewoJICAgICAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkOwoJICAgICAgICB2YXIgcG9seSA9IG5ldyBHZW5lcmljR0ZQb2x5XzEuZGVmYXVsdChmaWVsZCwgcmVjZWl2ZWQpOwoJICAgICAgICB2YXIgc3luZHJvbWVDb2VmZmljaWVudHMgPSBuZXcgSW50MzJBcnJheSh0d29TKTsKCSAgICAgICAgdmFyIG5vRXJyb3IgPSB0cnVlOwoJICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR3b1M7IGkrKykgewoJICAgICAgICAgICAgdmFyIGV2YWxSZXN1bHQgPSBwb2x5LmV2YWx1YXRlQXQoZmllbGQuZXhwKGkgKyBmaWVsZC5nZXRHZW5lcmF0b3JCYXNlKCkpKTsKCSAgICAgICAgICAgIHN5bmRyb21lQ29lZmZpY2llbnRzW3N5bmRyb21lQ29lZmZpY2llbnRzLmxlbmd0aCAtIDEgLSBpXSA9IGV2YWxSZXN1bHQ7CgkgICAgICAgICAgICBpZiAoZXZhbFJlc3VsdCAhPT0gMCkgewoJICAgICAgICAgICAgICAgIG5vRXJyb3IgPSBmYWxzZTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICBpZiAobm9FcnJvcikgewoJICAgICAgICAgICAgcmV0dXJuOwoJICAgICAgICB9CgkgICAgICAgIHZhciBzeW5kcm9tZSA9IG5ldyBHZW5lcmljR0ZQb2x5XzEuZGVmYXVsdChmaWVsZCwgc3luZHJvbWVDb2VmZmljaWVudHMpOwoJICAgICAgICB2YXIgc2lnbWFPbWVnYSA9IHRoaXMucnVuRXVjbGlkZWFuQWxnb3JpdGhtKGZpZWxkLmJ1aWxkTW9ub21pYWwodHdvUywgMSksIHN5bmRyb21lLCB0d29TKTsKCSAgICAgICAgdmFyIHNpZ21hID0gc2lnbWFPbWVnYVswXTsKCSAgICAgICAgdmFyIG9tZWdhID0gc2lnbWFPbWVnYVsxXTsKCSAgICAgICAgdmFyIGVycm9yTG9jYXRpb25zID0gdGhpcy5maW5kRXJyb3JMb2NhdGlvbnMoc2lnbWEpOwoJICAgICAgICB2YXIgZXJyb3JNYWduaXR1ZGVzID0gdGhpcy5maW5kRXJyb3JNYWduaXR1ZGVzKG9tZWdhLCBlcnJvckxvY2F0aW9ucyk7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JMb2NhdGlvbnMubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHJlY2VpdmVkLmxlbmd0aCAtIDEgLSBmaWVsZC5sb2coZXJyb3JMb2NhdGlvbnNbaV0pOwoJICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDwgMCkgewoJICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZWVkU29sb21vbkV4Y2VwdGlvbl8xLmRlZmF1bHQoJ0JhZCBlcnJvciBsb2NhdGlvbicpOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgcmVjZWl2ZWRbcG9zaXRpb25dID0gR2VuZXJpY0dGXzEkMS5kZWZhdWx0LmFkZE9yU3VidHJhY3QocmVjZWl2ZWRbcG9zaXRpb25dLCBlcnJvck1hZ25pdHVkZXNbaV0pOwoJICAgICAgICB9CgkgICAgfTsKCSAgICBSZWVkU29sb21vbkRlY29kZXIucHJvdG90eXBlLnJ1bkV1Y2xpZGVhbkFsZ29yaXRobSA9IGZ1bmN0aW9uIChhLCBiLCBSIC8qaW50Ki8pIHsKCSAgICAgICAgLy8gQXNzdW1lIGEncyBkZWdyZWUgaXMgPj0gYidzCgkgICAgICAgIGlmIChhLmdldERlZ3JlZSgpIDwgYi5nZXREZWdyZWUoKSkgewoJICAgICAgICAgICAgdmFyIHRlbXAgPSBhOwoJICAgICAgICAgICAgYSA9IGI7CgkgICAgICAgICAgICBiID0gdGVtcDsKCSAgICAgICAgfQoJICAgICAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkOwoJICAgICAgICB2YXIgckxhc3QgPSBhOwoJICAgICAgICB2YXIgciA9IGI7CgkgICAgICAgIHZhciB0TGFzdCA9IGZpZWxkLmdldFplcm8oKTsKCSAgICAgICAgdmFyIHQgPSBmaWVsZC5nZXRPbmUoKTsKCSAgICAgICAgLy8gUnVuIEV1Y2xpZGVhbiBhbGdvcml0aG0gdW50aWwgcidzIGRlZ3JlZSBpcyBsZXNzIHRoYW4gUi8yCgkgICAgICAgIHdoaWxlIChyLmdldERlZ3JlZSgpID49IChSIC8gMiB8IDApKSB7CgkgICAgICAgICAgICB2YXIgckxhc3RMYXN0ID0gckxhc3Q7CgkgICAgICAgICAgICB2YXIgdExhc3RMYXN0ID0gdExhc3Q7CgkgICAgICAgICAgICByTGFzdCA9IHI7CgkgICAgICAgICAgICB0TGFzdCA9IHQ7CgkgICAgICAgICAgICAvLyBEaXZpZGUgckxhc3RMYXN0IGJ5IHJMYXN0LCB3aXRoIHF1b3RpZW50IGluIHEgYW5kIHJlbWFpbmRlciBpbiByCgkgICAgICAgICAgICBpZiAockxhc3QuaXNaZXJvKCkpIHsKCSAgICAgICAgICAgICAgICAvLyBPb3BzLCBFdWNsaWRlYW4gYWxnb3JpdGhtIGFscmVhZHkgdGVybWluYXRlZD8KCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVlZFNvbG9tb25FeGNlcHRpb25fMS5kZWZhdWx0KCdyX3tpLTF9IHdhcyB6ZXJvJyk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICByID0gckxhc3RMYXN0OwoJICAgICAgICAgICAgdmFyIHEgPSBmaWVsZC5nZXRaZXJvKCk7CgkgICAgICAgICAgICB2YXIgZGVub21pbmF0b3JMZWFkaW5nVGVybSA9IHJMYXN0LmdldENvZWZmaWNpZW50KHJMYXN0LmdldERlZ3JlZSgpKTsKCSAgICAgICAgICAgIHZhciBkbHRJbnZlcnNlID0gZmllbGQuaW52ZXJzZShkZW5vbWluYXRvckxlYWRpbmdUZXJtKTsKCSAgICAgICAgICAgIHdoaWxlIChyLmdldERlZ3JlZSgpID49IHJMYXN0LmdldERlZ3JlZSgpICYmICFyLmlzWmVybygpKSB7CgkgICAgICAgICAgICAgICAgdmFyIGRlZ3JlZURpZmYgPSByLmdldERlZ3JlZSgpIC0gckxhc3QuZ2V0RGVncmVlKCk7CgkgICAgICAgICAgICAgICAgdmFyIHNjYWxlID0gZmllbGQubXVsdGlwbHkoci5nZXRDb2VmZmljaWVudChyLmdldERlZ3JlZSgpKSwgZGx0SW52ZXJzZSk7CgkgICAgICAgICAgICAgICAgcSA9IHEuYWRkT3JTdWJ0cmFjdChmaWVsZC5idWlsZE1vbm9taWFsKGRlZ3JlZURpZmYsIHNjYWxlKSk7CgkgICAgICAgICAgICAgICAgciA9IHIuYWRkT3JTdWJ0cmFjdChyTGFzdC5tdWx0aXBseUJ5TW9ub21pYWwoZGVncmVlRGlmZiwgc2NhbGUpKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHQgPSBxLm11bHRpcGx5KHRMYXN0KS5hZGRPclN1YnRyYWN0KHRMYXN0TGFzdCk7CgkgICAgICAgICAgICBpZiAoci5nZXREZWdyZWUoKSA+PSByTGFzdC5nZXREZWdyZWUoKSkgewoJICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsU3RhdGVFeGNlcHRpb25fMS5kZWZhdWx0KCdEaXZpc2lvbiBhbGdvcml0aG0gZmFpbGVkIHRvIHJlZHVjZSBwb2x5bm9taWFsPycpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHZhciBzaWdtYVRpbGRlQXRaZXJvID0gdC5nZXRDb2VmZmljaWVudCgwKTsKCSAgICAgICAgaWYgKHNpZ21hVGlsZGVBdFplcm8gPT09IDApIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBSZWVkU29sb21vbkV4Y2VwdGlvbl8xLmRlZmF1bHQoJ3NpZ21hVGlsZGUoMCkgd2FzIHplcm8nKTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgaW52ZXJzZSA9IGZpZWxkLmludmVyc2Uoc2lnbWFUaWxkZUF0WmVybyk7CgkgICAgICAgIHZhciBzaWdtYSA9IHQubXVsdGlwbHlTY2FsYXIoaW52ZXJzZSk7CgkgICAgICAgIHZhciBvbWVnYSA9IHIubXVsdGlwbHlTY2FsYXIoaW52ZXJzZSk7CgkgICAgICAgIHJldHVybiBbc2lnbWEsIG9tZWdhXTsKCSAgICB9OwoJICAgIFJlZWRTb2xvbW9uRGVjb2Rlci5wcm90b3R5cGUuZmluZEVycm9yTG9jYXRpb25zID0gZnVuY3Rpb24gKGVycm9yTG9jYXRvcikgewoJICAgICAgICAvLyBUaGlzIGlzIGEgZGlyZWN0IGFwcGxpY2F0aW9uIG9mIENoaWVuJ3Mgc2VhcmNoCgkgICAgICAgIHZhciBudW1FcnJvcnMgPSBlcnJvckxvY2F0b3IuZ2V0RGVncmVlKCk7CgkgICAgICAgIGlmIChudW1FcnJvcnMgPT09IDEpIHsgLy8gc2hvcnRjdXQKCSAgICAgICAgICAgIHJldHVybiBJbnQzMkFycmF5LmZyb20oW2Vycm9yTG9jYXRvci5nZXRDb2VmZmljaWVudCgxKV0pOwoJICAgICAgICB9CgkgICAgICAgIHZhciByZXN1bHQgPSBuZXcgSW50MzJBcnJheShudW1FcnJvcnMpOwoJICAgICAgICB2YXIgZSA9IDA7CgkgICAgICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGQ7CgkgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZmllbGQuZ2V0U2l6ZSgpICYmIGUgPCBudW1FcnJvcnM7IGkrKykgewoJICAgICAgICAgICAgaWYgKGVycm9yTG9jYXRvci5ldmFsdWF0ZUF0KGkpID09PSAwKSB7CgkgICAgICAgICAgICAgICAgcmVzdWx0W2VdID0gZmllbGQuaW52ZXJzZShpKTsKCSAgICAgICAgICAgICAgICBlKys7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGUgIT09IG51bUVycm9ycykgewoJICAgICAgICAgICAgdGhyb3cgbmV3IFJlZWRTb2xvbW9uRXhjZXB0aW9uXzEuZGVmYXVsdCgnRXJyb3IgbG9jYXRvciBkZWdyZWUgZG9lcyBub3QgbWF0Y2ggbnVtYmVyIG9mIHJvb3RzJyk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHJlc3VsdDsKCSAgICB9OwoJICAgIFJlZWRTb2xvbW9uRGVjb2Rlci5wcm90b3R5cGUuZmluZEVycm9yTWFnbml0dWRlcyA9IGZ1bmN0aW9uIChlcnJvckV2YWx1YXRvciwgZXJyb3JMb2NhdGlvbnMpIHsKCSAgICAgICAgLy8gVGhpcyBpcyBkaXJlY3RseSBhcHBseWluZyBGb3JuZXkncyBGb3JtdWxhCgkgICAgICAgIHZhciBzID0gZXJyb3JMb2NhdGlvbnMubGVuZ3RoOwoJICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEludDMyQXJyYXkocyk7CgkgICAgICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGQ7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7CgkgICAgICAgICAgICB2YXIgeGlJbnZlcnNlID0gZmllbGQuaW52ZXJzZShlcnJvckxvY2F0aW9uc1tpXSk7CgkgICAgICAgICAgICB2YXIgZGVub21pbmF0b3IgPSAxOwoJICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzOyBqKyspIHsKCSAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaikgewoJICAgICAgICAgICAgICAgICAgICAvLyBkZW5vbWluYXRvciA9IGZpZWxkLm11bHRpcGx5KGRlbm9taW5hdG9yLAoJICAgICAgICAgICAgICAgICAgICAvLyAgICBHZW5lcmljR0YuYWRkT3JTdWJ0cmFjdCgxLCBmaWVsZC5tdWx0aXBseShlcnJvckxvY2F0aW9uc1tqXSwgeGlJbnZlcnNlKSkpCgkgICAgICAgICAgICAgICAgICAgIC8vIEFib3ZlIHNob3VsZCB3b3JrIGJ1dCBmYWlscyBvbiBzb21lIEFwcGxlIGFuZCBMaW51eCBKREtzIGR1ZSB0byBhIEhvdHNwb3QgYnVnLgoJICAgICAgICAgICAgICAgICAgICAvLyBCZWxvdyBpcyBhIGZ1bm55LWxvb2tpbmcgd29ya2Fyb3VuZCBmcm9tIFN0ZXZlbiBQYXJrZXMKCSAgICAgICAgICAgICAgICAgICAgdmFyIHRlcm0gPSBmaWVsZC5tdWx0aXBseShlcnJvckxvY2F0aW9uc1tqXSwgeGlJbnZlcnNlKTsKCSAgICAgICAgICAgICAgICAgICAgdmFyIHRlcm1QbHVzMSA9ICh0ZXJtICYgMHgxKSA9PT0gMCA/IHRlcm0gfCAxIDogdGVybSAmIH4xOwoJICAgICAgICAgICAgICAgICAgICBkZW5vbWluYXRvciA9IGZpZWxkLm11bHRpcGx5KGRlbm9taW5hdG9yLCB0ZXJtUGx1czEpOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHJlc3VsdFtpXSA9IGZpZWxkLm11bHRpcGx5KGVycm9yRXZhbHVhdG9yLmV2YWx1YXRlQXQoeGlJbnZlcnNlKSwgZmllbGQuaW52ZXJzZShkZW5vbWluYXRvcikpOwoJICAgICAgICAgICAgaWYgKGZpZWxkLmdldEdlbmVyYXRvckJhc2UoKSAhPT0gMCkgewoJICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IGZpZWxkLm11bHRpcGx5KHJlc3VsdFtpXSwgeGlJbnZlcnNlKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gcmVzdWx0OwoJICAgIH07CgkgICAgcmV0dXJuIFJlZWRTb2xvbW9uRGVjb2RlcjsKCX0oKSk7CglSZWVkU29sb21vbkRlY29kZXIkMS5kZWZhdWx0ID0gUmVlZFNvbG9tb25EZWNvZGVyOwoKCXZhciBCaXRNYXRyaXhQYXJzZXIkMSA9IHt9OwoKCXZhciBWZXJzaW9uJDEgPSB7fTsKCgl2YXIgRm9ybWF0SW5mb3JtYXRpb24kMSA9IHt9OwoKCXZhciBFcnJvckNvcnJlY3Rpb25MZXZlbCA9IHt9OwoKCXZhciBBcmd1bWVudEV4Y2VwdGlvbiQxID0ge307CgoJdmFyIF9fZXh0ZW5kcyQzID0gKGNvbW1vbmpzR2xvYmFsICYmIGNvbW1vbmpzR2xvYmFsLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHsKCSAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwKCSAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHwKCSAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9OwoJICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICB9OwoJICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH0KCSAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpOwoJICAgIH07Cgl9KSgpOwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEFyZ3VtZW50RXhjZXB0aW9uJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCXZhciBFeGNlcHRpb25fMSA9IEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiBDdXN0b20gRXJyb3IgY2xhc3Mgb2YgdHlwZSBFeGNlcHRpb24uCgkgKi8KCXZhciBBcmd1bWVudEV4Y2VwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHsKCSAgICBfX2V4dGVuZHMkMyhBcmd1bWVudEV4Y2VwdGlvbiwgX3N1cGVyKTsKCSAgICBmdW5jdGlvbiBBcmd1bWVudEV4Y2VwdGlvbigpIHsKCSAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzOwoJICAgIH0KCSAgICBBcmd1bWVudEV4Y2VwdGlvbi5raW5kID0gJ0FyZ3VtZW50RXhjZXB0aW9uJzsKCSAgICByZXR1cm4gQXJndW1lbnRFeGNlcHRpb247Cgl9KEV4Y2VwdGlvbl8xLmRlZmF1bHQpKTsKCUFyZ3VtZW50RXhjZXB0aW9uJDEuZGVmYXVsdCA9IEFyZ3VtZW50RXhjZXB0aW9uOwoKCShmdW5jdGlvbiAoZXhwb3J0cykgewoJLyoKCSAqIENvcHlyaWdodCAyMDA3IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7CglleHBvcnRzLkVycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzID0gdm9pZCAwOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZy5xcmNvZGUuZGVjb2RlciB7Ki8KCXZhciBBcmd1bWVudEV4Y2VwdGlvbl8xID0gQXJndW1lbnRFeGNlcHRpb24kMTsKCXZhciBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSA9IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiQxOwoJdmFyIEVycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzOwoJKGZ1bmN0aW9uIChFcnJvckNvcnJlY3Rpb25MZXZlbFZhbHVlcykgewoJICAgIEVycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzW0Vycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzWyJMIl0gPSAwXSA9ICJMIjsKCSAgICBFcnJvckNvcnJlY3Rpb25MZXZlbFZhbHVlc1tFcnJvckNvcnJlY3Rpb25MZXZlbFZhbHVlc1siTSJdID0gMV0gPSAiTSI7CgkgICAgRXJyb3JDb3JyZWN0aW9uTGV2ZWxWYWx1ZXNbRXJyb3JDb3JyZWN0aW9uTGV2ZWxWYWx1ZXNbIlEiXSA9IDJdID0gIlEiOwoJICAgIEVycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzW0Vycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzWyJIIl0gPSAzXSA9ICJIIjsKCX0pKEVycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzID0gZXhwb3J0cy5FcnJvckNvcnJlY3Rpb25MZXZlbFZhbHVlcyB8fCAoZXhwb3J0cy5FcnJvckNvcnJlY3Rpb25MZXZlbFZhbHVlcyA9IHt9KSk7CgkvKioKCSAqIDxwPlNlZSBJU08gMTgwMDQ6MjAwNiwgNi41LjEuIFRoaXMgZW51bSBlbmNhcHN1bGF0ZXMgdGhlIGZvdXIgZXJyb3IgY29ycmVjdGlvbiBsZXZlbHMKCSAqIGRlZmluZWQgYnkgdGhlIFFSIGNvZGUgc3RhbmRhcmQuPC9wPgoJICoKCSAqIEBhdXRob3IgU2VhbiBPd2VuCgkgKi8KCXZhciBFcnJvckNvcnJlY3Rpb25MZXZlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBFcnJvckNvcnJlY3Rpb25MZXZlbCh2YWx1ZSwgc3RyaW5nVmFsdWUsIGJpdHMgLyppbnQqLykgewoJICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7CgkgICAgICAgIHRoaXMuc3RyaW5nVmFsdWUgPSBzdHJpbmdWYWx1ZTsKCSAgICAgICAgdGhpcy5iaXRzID0gYml0czsKCSAgICAgICAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwuRk9SX0JJVFMuc2V0KGJpdHMsIHRoaXMpOwoJICAgICAgICBFcnJvckNvcnJlY3Rpb25MZXZlbC5GT1JfVkFMVUUuc2V0KHZhbHVlLCB0aGlzKTsKCSAgICB9CgkgICAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTsKCSAgICB9OwoJICAgIEVycm9yQ29ycmVjdGlvbkxldmVsLnByb3RvdHlwZS5nZXRCaXRzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5iaXRzOwoJICAgIH07CgkgICAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzKSB7CgkgICAgICAgIHN3aXRjaCAocykgewoJICAgICAgICAgICAgY2FzZSAnTCc6IHJldHVybiBFcnJvckNvcnJlY3Rpb25MZXZlbC5MOwoJICAgICAgICAgICAgY2FzZSAnTSc6IHJldHVybiBFcnJvckNvcnJlY3Rpb25MZXZlbC5NOwoJICAgICAgICAgICAgY2FzZSAnUSc6IHJldHVybiBFcnJvckNvcnJlY3Rpb25MZXZlbC5ROwoJICAgICAgICAgICAgY2FzZSAnSCc6IHJldHVybiBFcnJvckNvcnJlY3Rpb25MZXZlbC5IOwoJICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEFyZ3VtZW50RXhjZXB0aW9uXzEuZGVmYXVsdChzICsgJ25vdCBhdmFpbGFibGUnKTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdWYWx1ZTsKCSAgICB9OwoJICAgIEVycm9yQ29ycmVjdGlvbkxldmVsLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAobykgewoJICAgICAgICBpZiAoIShvIGluc3RhbmNlb2YgRXJyb3JDb3JyZWN0aW9uTGV2ZWwpKSB7CgkgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIG90aGVyID0gbzsKCSAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IG90aGVyLnZhbHVlOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHBhcmFtIGJpdHMgaW50IGNvbnRhaW5pbmcgdGhlIHR3byBiaXRzIGVuY29kaW5nIGEgUVIgQ29kZSdzIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwKCSAgICAgKiBAcmV0dXJuIEVycm9yQ29ycmVjdGlvbkxldmVsIHJlcHJlc2VudGluZyB0aGUgZW5jb2RlZCBlcnJvciBjb3JyZWN0aW9uIGxldmVsCgkgICAgICovCgkgICAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwuZm9yQml0cyA9IGZ1bmN0aW9uIChiaXRzIC8qaW50Ki8pIHsKCSAgICAgICAgaWYgKGJpdHMgPCAwIHx8IGJpdHMgPj0gRXJyb3JDb3JyZWN0aW9uTGV2ZWwuRk9SX0JJVFMuc2l6ZSkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xLmRlZmF1bHQoKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gRXJyb3JDb3JyZWN0aW9uTGV2ZWwuRk9SX0JJVFMuZ2V0KGJpdHMpOwoJICAgIH07CgkgICAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwuRk9SX0JJVFMgPSBuZXcgTWFwKCk7CgkgICAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwuRk9SX1ZBTFVFID0gbmV3IE1hcCgpOwoJICAgIC8qKiBMID0gfjclIGNvcnJlY3Rpb24gKi8KCSAgICBFcnJvckNvcnJlY3Rpb25MZXZlbC5MID0gbmV3IEVycm9yQ29ycmVjdGlvbkxldmVsKEVycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzLkwsICdMJywgMHgwMSk7CgkgICAgLyoqIE0gPSB+MTUlIGNvcnJlY3Rpb24gKi8KCSAgICBFcnJvckNvcnJlY3Rpb25MZXZlbC5NID0gbmV3IEVycm9yQ29ycmVjdGlvbkxldmVsKEVycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzLk0sICdNJywgMHgwMCk7CgkgICAgLyoqIFEgPSB+MjUlIGNvcnJlY3Rpb24gKi8KCSAgICBFcnJvckNvcnJlY3Rpb25MZXZlbC5RID0gbmV3IEVycm9yQ29ycmVjdGlvbkxldmVsKEVycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzLlEsICdRJywgMHgwMyk7CgkgICAgLyoqIEggPSB+MzAlIGNvcnJlY3Rpb24gKi8KCSAgICBFcnJvckNvcnJlY3Rpb25MZXZlbC5IID0gbmV3IEVycm9yQ29ycmVjdGlvbkxldmVsKEVycm9yQ29ycmVjdGlvbkxldmVsVmFsdWVzLkgsICdIJywgMHgwMik7CgkgICAgcmV0dXJuIEVycm9yQ29ycmVjdGlvbkxldmVsOwoJfSgpKTsKCWV4cG9ydHMuZGVmYXVsdCA9IEVycm9yQ29ycmVjdGlvbkxldmVsOwoKCX0oRXJyb3JDb3JyZWN0aW9uTGV2ZWwpKTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJdmFyIF9fdmFsdWVzJDYgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHsKCSAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDsKCSAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTsKCSAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09ICJudW1iZXIiKSByZXR1cm4gewoJICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7CgkgICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwOwoJICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9OwoJICAgICAgICB9CgkgICAgfTsKCSAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyAiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS4iIDogIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC4iKTsKCX07CglPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybWF0SW5mb3JtYXRpb24kMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZy5xcmNvZGUuZGVjb2RlciB7Ki8KCXZhciBFcnJvckNvcnJlY3Rpb25MZXZlbF8xID0gRXJyb3JDb3JyZWN0aW9uTGV2ZWw7Cgl2YXIgSW50ZWdlcl8xID0gSW50ZWdlciQxOwoJLyoqCgkgKiA8cD5FbmNhcHN1bGF0ZXMgYSBRUiBDb2RlJ3MgZm9ybWF0IGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgdGhlIGRhdGEgbWFzayB1c2VkIGFuZAoJICogZXJyb3IgY29ycmVjdGlvbiBsZXZlbC48L3A+CgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqIEBzZWUgRGF0YU1hc2sKCSAqIEBzZWUgRXJyb3JDb3JyZWN0aW9uTGV2ZWwKCSAqLwoJdmFyIEZvcm1hdEluZm9ybWF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIGZ1bmN0aW9uIEZvcm1hdEluZm9ybWF0aW9uKGZvcm1hdEluZm8gLyppbnQqLykgewoJICAgICAgICAvLyBCaXRzIDMsNAoJICAgICAgICB0aGlzLmVycm9yQ29ycmVjdGlvbkxldmVsID0gRXJyb3JDb3JyZWN0aW9uTGV2ZWxfMS5kZWZhdWx0LmZvckJpdHMoKGZvcm1hdEluZm8gPj4gMykgJiAweDAzKTsKCSAgICAgICAgLy8gQm90dG9tIDMgYml0cwoJICAgICAgICB0aGlzLmRhdGFNYXNrID0gLyooYnl0ZSkgKi8gKGZvcm1hdEluZm8gJiAweDA3KTsKCSAgICB9CgkgICAgRm9ybWF0SW5mb3JtYXRpb24ubnVtQml0c0RpZmZlcmluZyA9IGZ1bmN0aW9uIChhIC8qaW50Ki8sIGIgLyppbnQqLykgewoJICAgICAgICByZXR1cm4gSW50ZWdlcl8xLmRlZmF1bHQuYml0Q291bnQoYSBeIGIpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHBhcmFtIG1hc2tlZEZvcm1hdEluZm8xIGZvcm1hdCBpbmZvIGluZGljYXRvciwgd2l0aCBtYXNrIHN0aWxsIGFwcGxpZWQKCSAgICAgKiBAcGFyYW0gbWFza2VkRm9ybWF0SW5mbzIgc2Vjb25kIGNvcHkgb2Ygc2FtZSBpbmZvOyBib3RoIGFyZSBjaGVja2VkIGF0IHRoZSBzYW1lIHRpbWUKCSAgICAgKiAgdG8gZXN0YWJsaXNoIGJlc3QgbWF0Y2gKCSAgICAgKiBAcmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IHRoZSBmb3JtYXQgaXQgc3BlY2lmaWVzLCBvciB7QGNvZGUgbnVsbH0KCSAgICAgKiAgaWYgZG9lc24ndCBzZWVtIHRvIG1hdGNoIGFueSBrbm93biBwYXR0ZXJuCgkgICAgICovCgkgICAgRm9ybWF0SW5mb3JtYXRpb24uZGVjb2RlRm9ybWF0SW5mb3JtYXRpb24gPSBmdW5jdGlvbiAobWFza2VkRm9ybWF0SW5mbzEgLyppbnQqLywgbWFza2VkRm9ybWF0SW5mbzIgLyppbnQqLykgewoJICAgICAgICB2YXIgZm9ybWF0SW5mbyA9IEZvcm1hdEluZm9ybWF0aW9uLmRvRGVjb2RlRm9ybWF0SW5mb3JtYXRpb24obWFza2VkRm9ybWF0SW5mbzEsIG1hc2tlZEZvcm1hdEluZm8yKTsKCSAgICAgICAgaWYgKGZvcm1hdEluZm8gIT09IG51bGwpIHsKCSAgICAgICAgICAgIHJldHVybiBmb3JtYXRJbmZvOwoJICAgICAgICB9CgkgICAgICAgIC8vIFNob3VsZCByZXR1cm4gbnVsbCwgYnV0LCBzb21lIFFSIGNvZGVzIGFwcGFyZW50bHkKCSAgICAgICAgLy8gZG8gbm90IG1hc2sgdGhpcyBpbmZvLiBUcnkgYWdhaW4gYnkgYWN0dWFsbHkgbWFza2luZyB0aGUgcGF0dGVybgoJICAgICAgICAvLyBmaXJzdAoJICAgICAgICByZXR1cm4gRm9ybWF0SW5mb3JtYXRpb24uZG9EZWNvZGVGb3JtYXRJbmZvcm1hdGlvbihtYXNrZWRGb3JtYXRJbmZvMSBeIEZvcm1hdEluZm9ybWF0aW9uLkZPUk1BVF9JTkZPX01BU0tfUVIsIG1hc2tlZEZvcm1hdEluZm8yIF4gRm9ybWF0SW5mb3JtYXRpb24uRk9STUFUX0lORk9fTUFTS19RUik7CgkgICAgfTsKCSAgICBGb3JtYXRJbmZvcm1hdGlvbi5kb0RlY29kZUZvcm1hdEluZm9ybWF0aW9uID0gZnVuY3Rpb24gKG1hc2tlZEZvcm1hdEluZm8xIC8qaW50Ki8sIG1hc2tlZEZvcm1hdEluZm8yIC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIGVfMSwgX2E7CgkgICAgICAgIC8vIEZpbmQgdGhlIGludCBpbiBGT1JNQVRfSU5GT19ERUNPREVfTE9PS1VQIHdpdGggZmV3ZXN0IGJpdHMgZGlmZmVyaW5nCgkgICAgICAgIHZhciBiZXN0RGlmZmVyZW5jZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSOwoJICAgICAgICB2YXIgYmVzdEZvcm1hdEluZm8gPSAwOwoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyQ2KEZvcm1hdEluZm9ybWF0aW9uLkZPUk1BVF9JTkZPX0RFQ09ERV9MT09LVVApLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7CgkgICAgICAgICAgICAgICAgdmFyIGRlY29kZUluZm8gPSBfYy52YWx1ZTsKCSAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SW5mbyA9IGRlY29kZUluZm9bMF07CgkgICAgICAgICAgICAgICAgaWYgKHRhcmdldEluZm8gPT09IG1hc2tlZEZvcm1hdEluZm8xIHx8IHRhcmdldEluZm8gPT09IG1hc2tlZEZvcm1hdEluZm8yKSB7CgkgICAgICAgICAgICAgICAgICAgIC8vIEZvdW5kIGFuIGV4YWN0IG1hdGNoCgkgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybWF0SW5mb3JtYXRpb24oZGVjb2RlSW5mb1sxXSk7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIHZhciBiaXRzRGlmZmVyZW5jZSA9IEZvcm1hdEluZm9ybWF0aW9uLm51bUJpdHNEaWZmZXJpbmcobWFza2VkRm9ybWF0SW5mbzEsIHRhcmdldEluZm8pOwoJICAgICAgICAgICAgICAgIGlmIChiaXRzRGlmZmVyZW5jZSA8IGJlc3REaWZmZXJlbmNlKSB7CgkgICAgICAgICAgICAgICAgICAgIGJlc3RGb3JtYXRJbmZvID0gZGVjb2RlSW5mb1sxXTsKCSAgICAgICAgICAgICAgICAgICAgYmVzdERpZmZlcmVuY2UgPSBiaXRzRGlmZmVyZW5jZTsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgaWYgKG1hc2tlZEZvcm1hdEluZm8xICE9PSBtYXNrZWRGb3JtYXRJbmZvMikgewoJICAgICAgICAgICAgICAgICAgICAvLyBhbHNvIHRyeSB0aGUgb3RoZXIgb3B0aW9uCgkgICAgICAgICAgICAgICAgICAgIGJpdHNEaWZmZXJlbmNlID0gRm9ybWF0SW5mb3JtYXRpb24ubnVtQml0c0RpZmZlcmluZyhtYXNrZWRGb3JtYXRJbmZvMiwgdGFyZ2V0SW5mbyk7CgkgICAgICAgICAgICAgICAgICAgIGlmIChiaXRzRGlmZmVyZW5jZSA8IGJlc3REaWZmZXJlbmNlKSB7CgkgICAgICAgICAgICAgICAgICAgICAgICBiZXN0Rm9ybWF0SW5mbyA9IGRlY29kZUluZm9bMV07CgkgICAgICAgICAgICAgICAgICAgICAgICBiZXN0RGlmZmVyZW5jZSA9IGJpdHNEaWZmZXJlbmNlOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9CgkgICAgICAgIGZpbmFsbHkgewoJICAgICAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9CgkgICAgICAgIH0KCSAgICAgICAgLy8gSGFtbWluZyBkaXN0YW5jZSBvZiB0aGUgMzIgbWFza2VkIGNvZGVzIGlzIDcsIGJ5IGNvbnN0cnVjdGlvbiwgc28gPD0gMyBiaXRzCgkgICAgICAgIC8vIGRpZmZlcmluZyBtZWFucyB3ZSBmb3VuZCBhIG1hdGNoCgkgICAgICAgIGlmIChiZXN0RGlmZmVyZW5jZSA8PSAzKSB7CgkgICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1hdEluZm9ybWF0aW9uKGJlc3RGb3JtYXRJbmZvKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gbnVsbDsKCSAgICB9OwoJICAgIEZvcm1hdEluZm9ybWF0aW9uLnByb3RvdHlwZS5nZXRFcnJvckNvcnJlY3Rpb25MZXZlbCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JDb3JyZWN0aW9uTGV2ZWw7CgkgICAgfTsKCSAgICBGb3JtYXRJbmZvcm1hdGlvbi5wcm90b3R5cGUuZ2V0RGF0YU1hc2sgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmRhdGFNYXNrOwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIEZvcm1hdEluZm9ybWF0aW9uLnByb3RvdHlwZS5oYXNoQ29kZSA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuICh0aGlzLmVycm9yQ29ycmVjdGlvbkxldmVsLmdldEJpdHMoKSA8PCAzKSB8IHRoaXMuZGF0YU1hc2s7CgkgICAgfTsKCSAgICAvKkBPdmVycmlkZSovCgkgICAgRm9ybWF0SW5mb3JtYXRpb24ucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChvKSB7CgkgICAgICAgIGlmICghKG8gaW5zdGFuY2VvZiBGb3JtYXRJbmZvcm1hdGlvbikpIHsKCSAgICAgICAgICAgIHJldHVybiBmYWxzZTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgb3RoZXIgPSBvOwoJICAgICAgICByZXR1cm4gdGhpcy5lcnJvckNvcnJlY3Rpb25MZXZlbCA9PT0gb3RoZXIuZXJyb3JDb3JyZWN0aW9uTGV2ZWwgJiYKCSAgICAgICAgICAgIHRoaXMuZGF0YU1hc2sgPT09IG90aGVyLmRhdGFNYXNrOwoJICAgIH07CgkgICAgRm9ybWF0SW5mb3JtYXRpb24uRk9STUFUX0lORk9fTUFTS19RUiA9IDB4NTQxMjsKCSAgICAvKioKCSAgICAgKiBTZWUgSVNPIDE4MDA0OjIwMDYsIEFubmV4IEMsIFRhYmxlIEMuMQoJICAgICAqLwoJICAgIEZvcm1hdEluZm9ybWF0aW9uLkZPUk1BVF9JTkZPX0RFQ09ERV9MT09LVVAgPSBbCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg1NDEyLCAweDAwXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg1MTI1LCAweDAxXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg1RTdDLCAweDAyXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg1QjRCLCAweDAzXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg0NUY5LCAweDA0XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg0MENFLCAweDA1XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg0Rjk3LCAweDA2XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg0QUEwLCAweDA3XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg3N0M0LCAweDA4XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg3MkYzLCAweDA5XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg3REFBLCAweDBBXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg3ODlELCAweDBCXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg2NjJGLCAweDBDXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg2MzE4LCAweDBEXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg2QzQxLCAweDBFXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHg2OTc2LCAweDBGXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgxNjg5LCAweDEwXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgxM0JFLCAweDExXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgxQ0U3LCAweDEyXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgxOUQwLCAweDEzXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgwNzYyLCAweDE0XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgwMjU1LCAweDE1XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgwRDBDLCAweDE2XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgwODNCLCAweDE3XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgzNTVGLCAweDE4XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgzMDY4LCAweDE5XSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgzRjMxLCAweDFBXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgzQTA2LCAweDFCXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgyNEI0LCAweDFDXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgyMTgzLCAweDFEXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgyRURBLCAweDFFXSksCgkgICAgICAgIEludDMyQXJyYXkuZnJvbShbMHgyQkVELCAweDFGXSksCgkgICAgXTsKCSAgICByZXR1cm4gRm9ybWF0SW5mb3JtYXRpb247Cgl9KCkpOwoJRm9ybWF0SW5mb3JtYXRpb24kMS5kZWZhdWx0ID0gRm9ybWF0SW5mb3JtYXRpb247CgoJdmFyIEVDQmxvY2tzJDEgPSB7fTsKCgl2YXIgX192YWx1ZXMkNSA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykgewoJICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwOwoJICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pOwoJICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gIm51bWJlciIpIHJldHVybiB7CgkgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7CgkgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07CgkgICAgICAgIH0KCSAgICB9OwoJICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/ICJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLiIgOiAiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLiIpOwoJfTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShFQ0Jsb2NrcyQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7CgkvKioKCSAqIDxwPkVuY2Fwc3VsYXRlcyBhIHNldCBvZiBlcnJvci1jb3JyZWN0aW9uIGJsb2NrcyBpbiBvbmUgc3ltYm9sIHZlcnNpb24uIE1vc3QgdmVyc2lvbnMgd2lsbAoJICogdXNlIGJsb2NrcyBvZiBkaWZmZXJpbmcgc2l6ZXMgd2l0aGluIG9uZSB2ZXJzaW9uLCBzbywgdGhpcyBlbmNhcHN1bGF0ZXMgdGhlIHBhcmFtZXRlcnMgZm9yCgkgKiBlYWNoIHNldCBvZiBibG9ja3MuIEl0IGFsc28gaG9sZHMgdGhlIG51bWJlciBvZiBlcnJvci1jb3JyZWN0aW9uIGNvZGV3b3JkcyBwZXIgYmxvY2sgc2luY2UgaXQKCSAqIHdpbGwgYmUgdGhlIHNhbWUgYWNyb3NzIGFsbCBibG9ja3Mgd2l0aGluIG9uZSB2ZXJzaW9uLjwvcD4KCSAqLwoJdmFyIEVDQmxvY2tzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIGZ1bmN0aW9uIEVDQmxvY2tzKGVjQ29kZXdvcmRzUGVyQmxvY2sgLyppbnQqLykgewoJICAgICAgICB2YXIgZWNCbG9ja3MgPSBbXTsKCSAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHsKCSAgICAgICAgICAgIGVjQmxvY2tzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldOwoJICAgICAgICB9CgkgICAgICAgIHRoaXMuZWNDb2Rld29yZHNQZXJCbG9jayA9IGVjQ29kZXdvcmRzUGVyQmxvY2s7CgkgICAgICAgIHRoaXMuZWNCbG9ja3MgPSBlY0Jsb2NrczsKCSAgICB9CgkgICAgRUNCbG9ja3MucHJvdG90eXBlLmdldEVDQ29kZXdvcmRzUGVyQmxvY2sgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmVjQ29kZXdvcmRzUGVyQmxvY2s7CgkgICAgfTsKCSAgICBFQ0Jsb2Nrcy5wcm90b3R5cGUuZ2V0TnVtQmxvY2tzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgZV8xLCBfYTsKCSAgICAgICAgdmFyIHRvdGFsID0gMDsKCSAgICAgICAgdmFyIGVjQmxvY2tzID0gdGhpcy5lY0Jsb2NrczsKCSAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgIGZvciAodmFyIGVjQmxvY2tzXzEgPSBfX3ZhbHVlcyQ1KGVjQmxvY2tzKSwgZWNCbG9ja3NfMV8xID0gZWNCbG9ja3NfMS5uZXh0KCk7ICFlY0Jsb2Nrc18xXzEuZG9uZTsgZWNCbG9ja3NfMV8xID0gZWNCbG9ja3NfMS5uZXh0KCkpIHsKCSAgICAgICAgICAgICAgICB2YXIgZWNCbG9jayA9IGVjQmxvY2tzXzFfMS52YWx1ZTsKCSAgICAgICAgICAgICAgICB0b3RhbCArPSBlY0Jsb2NrLmdldENvdW50KCk7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH0KCSAgICAgICAgZmluYWxseSB7CgkgICAgICAgICAgICB0cnkgewoJICAgICAgICAgICAgICAgIGlmIChlY0Jsb2Nrc18xXzEgJiYgIWVjQmxvY2tzXzFfMS5kb25lICYmIChfYSA9IGVjQmxvY2tzXzEucmV0dXJuKSkgX2EuY2FsbChlY0Jsb2Nrc18xKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH0KCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gdG90YWw7CgkgICAgfTsKCSAgICBFQ0Jsb2Nrcy5wcm90b3R5cGUuZ2V0VG90YWxFQ0NvZGV3b3JkcyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuZWNDb2Rld29yZHNQZXJCbG9jayAqIHRoaXMuZ2V0TnVtQmxvY2tzKCk7CgkgICAgfTsKCSAgICBFQ0Jsb2Nrcy5wcm90b3R5cGUuZ2V0RUNCbG9ja3MgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmVjQmxvY2tzOwoJICAgIH07CgkgICAgcmV0dXJuIEVDQmxvY2tzOwoJfSgpKTsKCUVDQmxvY2tzJDEuZGVmYXVsdCA9IEVDQmxvY2tzOwoKCXZhciBFQ0IkMSA9IHt9OwoKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShFQ0IkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLyoqCgkgKiA8cD5FbmNhcHN1bGF0ZXMgdGhlIHBhcmFtZXRlcnMgZm9yIG9uZSBlcnJvci1jb3JyZWN0aW9uIGJsb2NrIGluIG9uZSBzeW1ib2wgdmVyc2lvbi4KCSAqIFRoaXMgaW5jbHVkZXMgdGhlIG51bWJlciBvZiBkYXRhIGNvZGV3b3JkcywgYW5kIHRoZSBudW1iZXIgb2YgdGltZXMgYSBibG9jayB3aXRoIHRoZXNlCgkgKiBwYXJhbWV0ZXJzIGlzIHVzZWQgY29uc2VjdXRpdmVseSBpbiB0aGUgUVIgY29kZSB2ZXJzaW9uJ3MgZm9ybWF0LjwvcD4KCSAqLwoJdmFyIEVDQiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBFQ0IoY291bnQgLyppbnQqLywgZGF0YUNvZGV3b3JkcyAvKmludCovKSB7CgkgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDsKCSAgICAgICAgdGhpcy5kYXRhQ29kZXdvcmRzID0gZGF0YUNvZGV3b3JkczsKCSAgICB9CgkgICAgRUNCLnByb3RvdHlwZS5nZXRDb3VudCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuY291bnQ7CgkgICAgfTsKCSAgICBFQ0IucHJvdG90eXBlLmdldERhdGFDb2Rld29yZHMgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmRhdGFDb2Rld29yZHM7CgkgICAgfTsKCSAgICByZXR1cm4gRUNCOwoJfSgpKTsKCUVDQiQxLmRlZmF1bHQgPSBFQ0I7CgoJLyoKCSAqIENvcHlyaWdodCAyMDA3IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCXZhciBfX3ZhbHVlcyQ0ID0gKGNvbW1vbmpzR2xvYmFsICYmIGNvbW1vbmpzR2xvYmFsLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7CgkgICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSAiZnVuY3Rpb24iICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7CgkgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7CgkgICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSAibnVtYmVyIikgcmV0dXJuIHsKCSAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkgewoJICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDsKCSAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gIk9iamVjdCBpcyBub3QgaXRlcmFibGUuIiA6ICJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuIik7Cgl9OwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlcnNpb24kMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZy5xcmNvZGUuZGVjb2RlciB7Ki8KCXZhciBCaXRNYXRyaXhfMSQzID0gQml0TWF0cml4JDE7Cgl2YXIgRm9ybWF0SW5mb3JtYXRpb25fMSQxID0gRm9ybWF0SW5mb3JtYXRpb24kMTsKCXZhciBFQ0Jsb2Nrc18xID0gRUNCbG9ja3MkMTsKCXZhciBFQ0JfMSA9IEVDQiQxOwoJdmFyIEZvcm1hdEV4Y2VwdGlvbl8xJDIgPSBGb3JtYXRFeGNlcHRpb24kMTsKCXZhciBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQyID0gSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uJDE7CgkvKioKCSAqIFNlZSBJU08gMTgwMDQ6MjAwNiBBbm5leCBECgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIFZlcnNpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgZnVuY3Rpb24gVmVyc2lvbih2ZXJzaW9uTnVtYmVyIC8qaW50Ki8sIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzKSB7CgkgICAgICAgIHZhciBlXzEsIF9hOwoJICAgICAgICB2YXIgZWNCbG9ja3MgPSBbXTsKCSAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHsKCSAgICAgICAgICAgIGVjQmxvY2tzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldOwoJICAgICAgICB9CgkgICAgICAgIHRoaXMudmVyc2lvbk51bWJlciA9IHZlcnNpb25OdW1iZXI7CgkgICAgICAgIHRoaXMuYWxpZ25tZW50UGF0dGVybkNlbnRlcnMgPSBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczsKCSAgICAgICAgdGhpcy5lY0Jsb2NrcyA9IGVjQmxvY2tzOwoJICAgICAgICB2YXIgdG90YWwgPSAwOwoJICAgICAgICB2YXIgZWNDb2Rld29yZHMgPSBlY0Jsb2Nrc1swXS5nZXRFQ0NvZGV3b3Jkc1BlckJsb2NrKCk7CgkgICAgICAgIHZhciBlY2JBcnJheSA9IGVjQmxvY2tzWzBdLmdldEVDQmxvY2tzKCk7CgkgICAgICAgIHRyeSB7CgkgICAgICAgICAgICBmb3IgKHZhciBlY2JBcnJheV8xID0gX192YWx1ZXMkNChlY2JBcnJheSksIGVjYkFycmF5XzFfMSA9IGVjYkFycmF5XzEubmV4dCgpOyAhZWNiQXJyYXlfMV8xLmRvbmU7IGVjYkFycmF5XzFfMSA9IGVjYkFycmF5XzEubmV4dCgpKSB7CgkgICAgICAgICAgICAgICAgdmFyIGVjQmxvY2sgPSBlY2JBcnJheV8xXzEudmFsdWU7CgkgICAgICAgICAgICAgICAgdG90YWwgKz0gZWNCbG9jay5nZXRDb3VudCgpICogKGVjQmxvY2suZ2V0RGF0YUNvZGV3b3JkcygpICsgZWNDb2Rld29yZHMpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9CgkgICAgICAgIGZpbmFsbHkgewoJICAgICAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgICAgICBpZiAoZWNiQXJyYXlfMV8xICYmICFlY2JBcnJheV8xXzEuZG9uZSAmJiAoX2EgPSBlY2JBcnJheV8xLnJldHVybikpIF9hLmNhbGwoZWNiQXJyYXlfMSk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9CgkgICAgICAgIH0KCSAgICAgICAgdGhpcy50b3RhbENvZGV3b3JkcyA9IHRvdGFsOwoJICAgIH0KCSAgICBWZXJzaW9uLnByb3RvdHlwZS5nZXRWZXJzaW9uTnVtYmVyID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy52ZXJzaW9uTnVtYmVyOwoJICAgIH07CgkgICAgVmVyc2lvbi5wcm90b3R5cGUuZ2V0QWxpZ25tZW50UGF0dGVybkNlbnRlcnMgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmFsaWdubWVudFBhdHRlcm5DZW50ZXJzOwoJICAgIH07CgkgICAgVmVyc2lvbi5wcm90b3R5cGUuZ2V0VG90YWxDb2Rld29yZHMgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLnRvdGFsQ29kZXdvcmRzOwoJICAgIH07CgkgICAgVmVyc2lvbi5wcm90b3R5cGUuZ2V0RGltZW5zaW9uRm9yVmVyc2lvbiA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIDE3ICsgNCAqIHRoaXMudmVyc2lvbk51bWJlcjsKCSAgICB9OwoJICAgIFZlcnNpb24ucHJvdG90eXBlLmdldEVDQmxvY2tzRm9yTGV2ZWwgPSBmdW5jdGlvbiAoZWNMZXZlbCkgewoJICAgICAgICByZXR1cm4gdGhpcy5lY0Jsb2Nrc1tlY0xldmVsLmdldFZhbHVlKCldOwoJICAgICAgICAvLyBUWVBFU0NSSVBUUE9SVDogb3JpZ2luYWwgd2FzIHVzaW5nIG9yZGluYWwsIGFuZCB1c2luZyB0aGUgb3JkZXIgb2YgbGV2ZWxzIGFzIGRlZmluZWQgaW4gRXJyb3JDb3JyZWN0aW9uTGV2ZWwgZW51bSAoTE1RSCkKCSAgICAgICAgLy8gSSB3aWxsIHVzZSB0aGUgZGlyZWN0IHZhbHVlIGZyb20gRXJyb3JDb3JyZWN0aW9uTGV2ZWxWYWx1ZXMgZW51bSB3aGljaCBpbiB0eXBlc2NyaXB0IGdvZXMgdG8gYSBudW1iZXIKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPkRlZHVjZXMgdmVyc2lvbiBpbmZvcm1hdGlvbiBwdXJlbHkgZnJvbSBRUiBDb2RlIGRpbWVuc2lvbnMuPC9wPgoJICAgICAqCgkgICAgICogQHBhcmFtIGRpbWVuc2lvbiBkaW1lbnNpb24gaW4gbW9kdWxlcwoJICAgICAqIEByZXR1cm4gVmVyc2lvbiBmb3IgYSBRUiBDb2RlIG9mIHRoYXQgZGltZW5zaW9uCgkgICAgICogQHRocm93cyBGb3JtYXRFeGNlcHRpb24gaWYgZGltZW5zaW9uIGlzIG5vdCAxIG1vZCA0CgkgICAgICovCgkgICAgVmVyc2lvbi5nZXRQcm92aXNpb25hbFZlcnNpb25Gb3JEaW1lbnNpb24gPSBmdW5jdGlvbiAoZGltZW5zaW9uIC8qaW50Ki8pIHsKCSAgICAgICAgaWYgKGRpbWVuc2lvbiAlIDQgIT09IDEpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBGb3JtYXRFeGNlcHRpb25fMSQyLmRlZmF1bHQoKTsKCSAgICAgICAgfQoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmVyc2lvbkZvck51bWJlcigoZGltZW5zaW9uIC0gMTcpIC8gNCk7CgkgICAgICAgIH0KCSAgICAgICAgY2F0Y2ggKGlnbm9yZWQgLyo6IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiovKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEkMi5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIFZlcnNpb24uZ2V0VmVyc2lvbkZvck51bWJlciA9IGZ1bmN0aW9uICh2ZXJzaW9uTnVtYmVyIC8qaW50Ki8pIHsKCSAgICAgICAgaWYgKHZlcnNpb25OdW1iZXIgPCAxIHx8IHZlcnNpb25OdW1iZXIgPiA0MCkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDIuZGVmYXVsdCgpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBWZXJzaW9uLlZFUlNJT05TW3ZlcnNpb25OdW1iZXIgLSAxXTsKCSAgICB9OwoJICAgIFZlcnNpb24uZGVjb2RlVmVyc2lvbkluZm9ybWF0aW9uID0gZnVuY3Rpb24gKHZlcnNpb25CaXRzIC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIGJlc3REaWZmZXJlbmNlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7CgkgICAgICAgIHZhciBiZXN0VmVyc2lvbiA9IDA7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVmVyc2lvbi5WRVJTSU9OX0RFQ09ERV9JTkZPLmxlbmd0aDsgaSsrKSB7CgkgICAgICAgICAgICB2YXIgdGFyZ2V0VmVyc2lvbiA9IFZlcnNpb24uVkVSU0lPTl9ERUNPREVfSU5GT1tpXTsKCSAgICAgICAgICAgIC8vIERvIHRoZSB2ZXJzaW9uIGluZm8gYml0cyBtYXRjaCBleGFjdGx5PyBkb25lLgoJICAgICAgICAgICAgaWYgKHRhcmdldFZlcnNpb24gPT09IHZlcnNpb25CaXRzKSB7CgkgICAgICAgICAgICAgICAgcmV0dXJuIFZlcnNpb24uZ2V0VmVyc2lvbkZvck51bWJlcihpICsgNyk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICAvLyBPdGhlcndpc2Ugc2VlIGlmIHRoaXMgaXMgdGhlIGNsb3Nlc3QgdG8gYSByZWFsIHZlcnNpb24gaW5mbyBiaXQgc3RyaW5nCgkgICAgICAgICAgICAvLyB3ZSBoYXZlIHNlZW4gc28gZmFyCgkgICAgICAgICAgICB2YXIgYml0c0RpZmZlcmVuY2UgPSBGb3JtYXRJbmZvcm1hdGlvbl8xJDEuZGVmYXVsdC5udW1CaXRzRGlmZmVyaW5nKHZlcnNpb25CaXRzLCB0YXJnZXRWZXJzaW9uKTsKCSAgICAgICAgICAgIGlmIChiaXRzRGlmZmVyZW5jZSA8IGJlc3REaWZmZXJlbmNlKSB7CgkgICAgICAgICAgICAgICAgYmVzdFZlcnNpb24gPSBpICsgNzsKCSAgICAgICAgICAgICAgICBiZXN0RGlmZmVyZW5jZSA9IGJpdHNEaWZmZXJlbmNlOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIC8vIFdlIGNhbiB0b2xlcmF0ZSB1cCB0byAzIGJpdHMgb2YgZXJyb3Igc2luY2Ugbm8gdHdvIHZlcnNpb24gaW5mbyBjb2Rld29yZHMgd2lsbAoJICAgICAgICAvLyBkaWZmZXIgaW4gbGVzcyB0aGFuIDggYml0cy4KCSAgICAgICAgaWYgKGJlc3REaWZmZXJlbmNlIDw9IDMpIHsKCSAgICAgICAgICAgIHJldHVybiBWZXJzaW9uLmdldFZlcnNpb25Gb3JOdW1iZXIoYmVzdFZlcnNpb24pOwoJICAgICAgICB9CgkgICAgICAgIC8vIElmIHdlIGRpZG4ndCBmaW5kIGEgY2xvc2UgZW5vdWdoIG1hdGNoLCBmYWlsCgkgICAgICAgIHJldHVybiBudWxsOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogU2VlIElTTyAxODAwNDoyMDA2IEFubmV4IEUKCSAgICAgKi8KCSAgICBWZXJzaW9uLnByb3RvdHlwZS5idWlsZEZ1bmN0aW9uUGF0dGVybiA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZ2V0RGltZW5zaW9uRm9yVmVyc2lvbigpOwoJICAgICAgICB2YXIgYml0TWF0cml4ID0gbmV3IEJpdE1hdHJpeF8xJDMuZGVmYXVsdChkaW1lbnNpb24pOwoJICAgICAgICAvLyBUb3AgbGVmdCBmaW5kZXIgcGF0dGVybiArIHNlcGFyYXRvciArIGZvcm1hdAoJICAgICAgICBiaXRNYXRyaXguc2V0UmVnaW9uKDAsIDAsIDksIDkpOwoJICAgICAgICAvLyBUb3AgcmlnaHQgZmluZGVyIHBhdHRlcm4gKyBzZXBhcmF0b3IgKyBmb3JtYXQKCSAgICAgICAgYml0TWF0cml4LnNldFJlZ2lvbihkaW1lbnNpb24gLSA4LCAwLCA4LCA5KTsKCSAgICAgICAgLy8gQm90dG9tIGxlZnQgZmluZGVyIHBhdHRlcm4gKyBzZXBhcmF0b3IgKyBmb3JtYXQKCSAgICAgICAgYml0TWF0cml4LnNldFJlZ2lvbigwLCBkaW1lbnNpb24gLSA4LCA5LCA4KTsKCSAgICAgICAgLy8gQWxpZ25tZW50IHBhdHRlcm5zCgkgICAgICAgIHZhciBtYXggPSB0aGlzLmFsaWdubWVudFBhdHRlcm5DZW50ZXJzLmxlbmd0aDsKCSAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBtYXg7IHgrKykgewoJICAgICAgICAgICAgdmFyIGkgPSB0aGlzLmFsaWdubWVudFBhdHRlcm5DZW50ZXJzW3hdIC0gMjsKCSAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgbWF4OyB5KyspIHsKCSAgICAgICAgICAgICAgICBpZiAoKHggPT09IDAgJiYgKHkgPT09IDAgfHwgeSA9PT0gbWF4IC0gMSkpIHx8ICh4ID09PSBtYXggLSAxICYmIHkgPT09IDApKSB7CgkgICAgICAgICAgICAgICAgICAgIC8vIE5vIGFsaWdubWVudCBwYXR0ZXJucyBuZWFyIHRoZSB0aHJlZSBmaW5kZXIgcGF0dGVybnMKCSAgICAgICAgICAgICAgICAgICAgY29udGludWU7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIGJpdE1hdHJpeC5zZXRSZWdpb24odGhpcy5hbGlnbm1lbnRQYXR0ZXJuQ2VudGVyc1t5XSAtIDIsIGksIDUsIDUpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIC8vIFZlcnRpY2FsIHRpbWluZyBwYXR0ZXJuCgkgICAgICAgIGJpdE1hdHJpeC5zZXRSZWdpb24oNiwgOSwgMSwgZGltZW5zaW9uIC0gMTcpOwoJICAgICAgICAvLyBIb3Jpem9udGFsIHRpbWluZyBwYXR0ZXJuCgkgICAgICAgIGJpdE1hdHJpeC5zZXRSZWdpb24oOSwgNiwgZGltZW5zaW9uIC0gMTcsIDEpOwoJICAgICAgICBpZiAodGhpcy52ZXJzaW9uTnVtYmVyID4gNikgewoJICAgICAgICAgICAgLy8gVmVyc2lvbiBpbmZvLCB0b3AgcmlnaHQKCSAgICAgICAgICAgIGJpdE1hdHJpeC5zZXRSZWdpb24oZGltZW5zaW9uIC0gMTEsIDAsIDMsIDYpOwoJICAgICAgICAgICAgLy8gVmVyc2lvbiBpbmZvLCBib3R0b20gbGVmdAoJICAgICAgICAgICAgYml0TWF0cml4LnNldFJlZ2lvbigwLCBkaW1lbnNpb24gLSAxMSwgNiwgMyk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGJpdE1hdHJpeDsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBWZXJzaW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuICcnICsgdGhpcy52ZXJzaW9uTnVtYmVyOwoJICAgIH07CgkgICAgLyoqCgkgICAgICAgKiBTZWUgSVNPIDE4MDA0OjIwMDYgQW5uZXggRC4KCSAgICAgICAqIEVsZW1lbnQgaSByZXByZXNlbnRzIHRoZSByYXcgdmVyc2lvbiBiaXRzIHRoYXQgc3BlY2lmeSB2ZXJzaW9uIGkgKyA3CgkgICAgICAgKi8KCSAgICBWZXJzaW9uLlZFUlNJT05fREVDT0RFX0lORk8gPSBJbnQzMkFycmF5LmZyb20oWwoJICAgICAgICAweDA3Qzk0LCAweDA4NUJDLCAweDA5QTk5LCAweDBBNEQzLCAweDBCQkY2LAoJICAgICAgICAweDBDNzYyLCAweDBEODQ3LCAweDBFNjBELCAweDBGOTI4LCAweDEwQjc4LAoJICAgICAgICAweDExNDVELCAweDEyQTE3LCAweDEzNTMyLCAweDE0OUE2LCAweDE1NjgzLAoJICAgICAgICAweDE2OEM5LCAweDE3N0VDLCAweDE4RUM0LCAweDE5MUUxLCAweDFBRkFCLAoJICAgICAgICAweDFCMDhFLCAweDFDQzFBLCAweDFEMzNGLCAweDFFRDc1LCAweDFGMjUwLAoJICAgICAgICAweDIwOUQ1LCAweDIxNkYwLCAweDIyOEJBLCAweDIzNzlGLCAweDI0QjBCLAoJICAgICAgICAweDI1NDJFLCAweDI2QTY0LCAweDI3NTQxLCAweDI4QzY5CgkgICAgXSk7CgkgICAgLyoqCgkgICAgICAgKiBTZWUgSVNPIDE4MDA0OjIwMDYgNi41LjEgVGFibGUgOQoJICAgICAgICovCgkgICAgVmVyc2lvbi5WRVJTSU9OUyA9IFsKCSAgICAgICAgbmV3IFZlcnNpb24oMSwgbmV3IEludDMyQXJyYXkoMCksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoNywgbmV3IEVDQl8xLmRlZmF1bHQoMSwgMTkpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgxMCwgbmV3IEVDQl8xLmRlZmF1bHQoMSwgMTYpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgxMywgbmV3IEVDQl8xLmRlZmF1bHQoMSwgMTMpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgxNywgbmV3IEVDQl8xLmRlZmF1bHQoMSwgOSkpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMiwgSW50MzJBcnJheS5mcm9tKFs2LCAxOF0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDEwLCBuZXcgRUNCXzEuZGVmYXVsdCgxLCAzNCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDE2LCBuZXcgRUNCXzEuZGVmYXVsdCgxLCAyOCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDIyLCBuZXcgRUNCXzEuZGVmYXVsdCgxLCAyMikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI4LCBuZXcgRUNCXzEuZGVmYXVsdCgxLCAxNikpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMywgSW50MzJBcnJheS5mcm9tKFs2LCAyMl0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDE1LCBuZXcgRUNCXzEuZGVmYXVsdCgxLCA1NSkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI2LCBuZXcgRUNCXzEuZGVmYXVsdCgxLCA0NCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDE4LCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAxNykpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDIyLCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAxMykpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oNCwgSW50MzJBcnJheS5mcm9tKFs2LCAyNl0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDIwLCBuZXcgRUNCXzEuZGVmYXVsdCgxLCA4MCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDE4LCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAzMikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI2LCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAyNCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDE2LCBuZXcgRUNCXzEuZGVmYXVsdCg0LCA5KSkpLAoJICAgICAgICBuZXcgVmVyc2lvbig1LCBJbnQzMkFycmF5LmZyb20oWzYsIDMwXSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjYsIG5ldyBFQ0JfMS5kZWZhdWx0KDEsIDEwOCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI0LCBuZXcgRUNCXzEuZGVmYXVsdCgyLCA0MykpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDE4LCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAxNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDE2KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjIsIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDExKSwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgMTIpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDYsIEludDMyQXJyYXkuZnJvbShbNiwgMzRdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgxOCwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgNjgpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgxNiwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMjcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyNCwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTkpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTUpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDcsIEludDMyQXJyYXkuZnJvbShbNiwgMjIsIDM4XSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjAsIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDc4KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMTgsIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDMxKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMTgsIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDE0KSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTUpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyNiwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTMpLCBuZXcgRUNCXzEuZGVmYXVsdCgxLCAxNCkpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oOCwgSW50MzJBcnJheS5mcm9tKFs2LCAyNCwgNDJdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyNCwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgOTcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyMiwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgMzgpLCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAzOSkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDIyLCBuZXcgRUNCXzEuZGVmYXVsdCg0LCAxOCksIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDE5KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjYsIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDE0KSwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgMTUpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDksIEludDMyQXJyYXkuZnJvbShbNiwgMjYsIDQ2XSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDExNikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDIyLCBuZXcgRUNCXzEuZGVmYXVsdCgzLCAzNiksIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDM3KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjAsIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDE2KSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyNCwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTIpLCBuZXcgRUNCXzEuZGVmYXVsdCg0LCAxMykpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMTAsIEludDMyQXJyYXkuZnJvbShbNiwgMjgsIDUwXSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMTgsIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDY4KSwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgNjkpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyNiwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgNDMpLCBuZXcgRUNCXzEuZGVmYXVsdCgxLCA0NCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI0LCBuZXcgRUNCXzEuZGVmYXVsdCg2LCAxOSksIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDIwKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDYsIDE1KSwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgMTYpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDExLCBJbnQzMkFycmF5LmZyb20oWzYsIDMwLCA1NF0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDIwLCBuZXcgRUNCXzEuZGVmYXVsdCg0LCA4MSkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCgxLCA1MCksIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDUxKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDIyKSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMjMpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyNCwgbmV3IEVDQl8xLmRlZmF1bHQoMywgMTIpLCBuZXcgRUNCXzEuZGVmYXVsdCg4LCAxMykpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMTIsIEludDMyQXJyYXkuZnJvbShbNiwgMzIsIDU4XSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjQsIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDkyKSwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgOTMpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyMiwgbmV3IEVDQl8xLmRlZmF1bHQoNiwgMzYpLCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAzNykpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI2LCBuZXcgRUNCXzEuZGVmYXVsdCg0LCAyMCksIG5ldyBFQ0JfMS5kZWZhdWx0KDYsIDIxKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDcsIDE0KSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTUpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDEzLCBJbnQzMkFycmF5LmZyb20oWzYsIDM0LCA2Ml0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI2LCBuZXcgRUNCXzEuZGVmYXVsdCg0LCAxMDcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyMiwgbmV3IEVDQl8xLmRlZmF1bHQoOCwgMzcpLCBuZXcgRUNCXzEuZGVmYXVsdCgxLCAzOCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI0LCBuZXcgRUNCXzEuZGVmYXVsdCg4LCAyMCksIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDIxKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjIsIG5ldyBFQ0JfMS5kZWZhdWx0KDEyLCAxMSksIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDEyKSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigxNCwgSW50MzJBcnJheS5mcm9tKFs2LCAyNiwgNDYsIDY2XSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDMsIDExNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDEsIDExNikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI0LCBuZXcgRUNCXzEuZGVmYXVsdCg0LCA0MCksIG5ldyBFQ0JfMS5kZWZhdWx0KDUsIDQxKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjAsIG5ldyBFQ0JfMS5kZWZhdWx0KDExLCAxNiksIG5ldyBFQ0JfMS5kZWZhdWx0KDUsIDE3KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjQsIG5ldyBFQ0JfMS5kZWZhdWx0KDExLCAxMiksIG5ldyBFQ0JfMS5kZWZhdWx0KDUsIDEzKSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigxNSwgSW50MzJBcnJheS5mcm9tKFs2LCAyNiwgNDgsIDcwXSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjIsIG5ldyBFQ0JfMS5kZWZhdWx0KDUsIDg3KSwgbmV3IEVDQl8xLmRlZmF1bHQoMSwgODgpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyNCwgbmV3IEVDQl8xLmRlZmF1bHQoNSwgNDEpLCBuZXcgRUNCXzEuZGVmYXVsdCg1LCA0MikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCg1LCAyNCksIG5ldyBFQ0JfMS5kZWZhdWx0KDcsIDI1KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjQsIG5ldyBFQ0JfMS5kZWZhdWx0KDExLCAxMiksIG5ldyBFQ0JfMS5kZWZhdWx0KDcsIDEzKSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigxNiwgSW50MzJBcnJheS5mcm9tKFs2LCAyNiwgNTAsIDc0XSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjQsIG5ldyBFQ0JfMS5kZWZhdWx0KDUsIDk4KSwgbmV3IEVDQl8xLmRlZmF1bHQoMSwgOTkpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoNywgNDUpLCBuZXcgRUNCXzEuZGVmYXVsdCgzLCA0NikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI0LCBuZXcgRUNCXzEuZGVmYXVsdCgxNSwgMTkpLCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAyMCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCgzLCAxNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDEzLCAxNikpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMTcsIEludDMyQXJyYXkuZnJvbShbNiwgMzAsIDU0LCA3OF0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI4LCBuZXcgRUNCXzEuZGVmYXVsdCgxLCAxMDcpLCBuZXcgRUNCXzEuZGVmYXVsdCg1LCAxMDgpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMTAsIDQ2KSwgbmV3IEVDQl8xLmRlZmF1bHQoMSwgNDcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMSwgMjIpLCBuZXcgRUNCXzEuZGVmYXVsdCgxNSwgMjMpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgMTQpLCBuZXcgRUNCXzEuZGVmYXVsdCgxNywgMTUpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDE4LCBJbnQzMkFycmF5LmZyb20oWzYsIDMwLCA1NiwgODJdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoNSwgMTIwKSwgbmV3IEVDQl8xLmRlZmF1bHQoMSwgMTIxKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjYsIG5ldyBFQ0JfMS5kZWZhdWx0KDksIDQzKSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgNDQpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMTcsIDIyKSwgbmV3IEVDQl8xLmRlZmF1bHQoMSwgMjMpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMiwgMTQpLCBuZXcgRUNCXzEuZGVmYXVsdCgxOSwgMTUpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDE5LCBJbnQzMkFycmF5LmZyb20oWzYsIDMwLCA1OCwgODZdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMywgMTEzKSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTE0KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjYsIG5ldyBFQ0JfMS5kZWZhdWx0KDMsIDQ0KSwgbmV3IEVDQl8xLmRlZmF1bHQoMTEsIDQ1KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjYsIG5ldyBFQ0JfMS5kZWZhdWx0KDE3LCAyMSksIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDIyKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjYsIG5ldyBFQ0JfMS5kZWZhdWx0KDksIDEzKSwgbmV3IEVDQl8xLmRlZmF1bHQoMTYsIDE0KSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigyMCwgSW50MzJBcnJheS5mcm9tKFs2LCAzNCwgNjIsIDkwXSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDMsIDEwNyksIG5ldyBFQ0JfMS5kZWZhdWx0KDUsIDEwOCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI2LCBuZXcgRUNCXzEuZGVmYXVsdCgzLCA0MSksIG5ldyBFQ0JfMS5kZWZhdWx0KDEzLCA0MikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCgxNSwgMjQpLCBuZXcgRUNCXzEuZGVmYXVsdCg1LCAyNSkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI4LCBuZXcgRUNCXzEuZGVmYXVsdCgxNSwgMTUpLCBuZXcgRUNCXzEuZGVmYXVsdCgxMCwgMTYpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDIxLCBJbnQzMkFycmF5LmZyb20oWzYsIDI4LCA1MCwgNzIsIDk0XSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDExNiksIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDExNykpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI2LCBuZXcgRUNCXzEuZGVmYXVsdCgxNywgNDIpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMTcsIDIyKSwgbmV3IEVDQl8xLmRlZmF1bHQoNiwgMjMpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTksIDE2KSwgbmV3IEVDQl8xLmRlZmF1bHQoNiwgMTcpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDIyLCBJbnQzMkFycmF5LmZyb20oWzYsIDI2LCA1MCwgNzQsIDk4XSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDExMSksIG5ldyBFQ0JfMS5kZWZhdWx0KDcsIDExMikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI4LCBuZXcgRUNCXzEuZGVmYXVsdCgxNywgNDYpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoNywgMjQpLCBuZXcgRUNCXzEuZGVmYXVsdCgxNiwgMjUpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyNCwgbmV3IEVDQl8xLmRlZmF1bHQoMzQsIDEzKSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigyMywgSW50MzJBcnJheS5mcm9tKFs2LCAzMCwgNTQsIDc4LCAxMDJdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTIxKSwgbmV3IEVDQl8xLmRlZmF1bHQoNSwgMTIyKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDQ3KSwgbmV3IEVDQl8xLmRlZmF1bHQoMTQsIDQ4KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDExLCAyNCksIG5ldyBFQ0JfMS5kZWZhdWx0KDE0LCAyNSkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCgxNiwgMTUpLCBuZXcgRUNCXzEuZGVmYXVsdCgxNCwgMTYpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDI0LCBJbnQzMkFycmF5LmZyb20oWzYsIDI4LCA1NCwgODAsIDEwNl0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCg2LCAxMTcpLCBuZXcgRUNCXzEuZGVmYXVsdCg0LCAxMTgpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoNiwgNDUpLCBuZXcgRUNCXzEuZGVmYXVsdCgxNCwgNDYpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTEsIDI0KSwgbmV3IEVDQl8xLmRlZmF1bHQoMTYsIDI1KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDMwLCAxNiksIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDE3KSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigyNSwgSW50MzJBcnJheS5mcm9tKFs2LCAzMiwgNTgsIDg0LCAxMTBdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyNiwgbmV3IEVDQl8xLmRlZmF1bHQoOCwgMTA2KSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTA3KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDgsIDQ3KSwgbmV3IEVDQl8xLmRlZmF1bHQoMTMsIDQ4KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDcsIDI0KSwgbmV3IEVDQl8xLmRlZmF1bHQoMjIsIDI1KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDIyLCAxNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDEzLCAxNikpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMjYsIEludDMyQXJyYXkuZnJvbShbNiwgMzAsIDU4LCA4NiwgMTE0XSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDEwLCAxMTQpLCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAxMTUpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMTksIDQ2KSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgNDcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMjgsIDIyKSwgbmV3IEVDQl8xLmRlZmF1bHQoNiwgMjMpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMzMsIDE2KSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTcpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDI3LCBJbnQzMkFycmF5LmZyb20oWzYsIDM0LCA2MiwgOTAsIDExOF0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCg4LCAxMjIpLCBuZXcgRUNCXzEuZGVmYXVsdCg0LCAxMjMpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMjIsIDQ1KSwgbmV3IEVDQl8xLmRlZmF1bHQoMywgNDYpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoOCwgMjMpLCBuZXcgRUNCXzEuZGVmYXVsdCgyNiwgMjQpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTIsIDE1KSwgbmV3IEVDQl8xLmRlZmF1bHQoMjgsIDE2KSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigyOCwgSW50MzJBcnJheS5mcm9tKFs2LCAyNiwgNTAsIDc0LCA5OCwgMTIyXSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDMsIDExNyksIG5ldyBFQ0JfMS5kZWZhdWx0KDEwLCAxMTgpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMywgNDUpLCBuZXcgRUNCXzEuZGVmYXVsdCgyMywgNDYpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMjQpLCBuZXcgRUNCXzEuZGVmYXVsdCgzMSwgMjUpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTEsIDE1KSwgbmV3IEVDQl8xLmRlZmF1bHQoMzEsIDE2KSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigyOSwgSW50MzJBcnJheS5mcm9tKFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNl0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCg3LCAxMTYpLCBuZXcgRUNCXzEuZGVmYXVsdCg3LCAxMTcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMjEsIDQ1KSwgbmV3IEVDQl8xLmRlZmF1bHQoNywgNDYpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMSwgMjMpLCBuZXcgRUNCXzEuZGVmYXVsdCgzNywgMjQpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTksIDE1KSwgbmV3IEVDQl8xLmRlZmF1bHQoMjYsIDE2KSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigzMCwgSW50MzJBcnJheS5mcm9tKFs2LCAyNiwgNTIsIDc4LCAxMDQsIDEzMF0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCg1LCAxMTUpLCBuZXcgRUNCXzEuZGVmYXVsdCgxMCwgMTE2KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDE5LCA0NyksIG5ldyBFQ0JfMS5kZWZhdWx0KDEwLCA0OCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCgxNSwgMjQpLCBuZXcgRUNCXzEuZGVmYXVsdCgyNSwgMjUpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMjMsIDE1KSwgbmV3IEVDQl8xLmRlZmF1bHQoMjUsIDE2KSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigzMSwgSW50MzJBcnJheS5mcm9tKFs2LCAzMCwgNTYsIDgyLCAxMDgsIDEzNF0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCgxMywgMTE1KSwgbmV3IEVDQl8xLmRlZmF1bHQoMywgMTE2KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDIsIDQ2KSwgbmV3IEVDQl8xLmRlZmF1bHQoMjksIDQ3KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDQyLCAyNCksIG5ldyBFQ0JfMS5kZWZhdWx0KDEsIDI1KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDIzLCAxNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDI4LCAxNikpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMzIsIEludDMyQXJyYXkuZnJvbShbNiwgMzQsIDYwLCA4NiwgMTEyLCAxMzhdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTcsIDExNSkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI4LCBuZXcgRUNCXzEuZGVmYXVsdCgxMCwgNDYpLCBuZXcgRUNCXzEuZGVmYXVsdCgyMywgNDcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTAsIDI0KSwgbmV3IEVDQl8xLmRlZmF1bHQoMzUsIDI1KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDE5LCAxNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDM1LCAxNikpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMzMsIEludDMyQXJyYXkuZnJvbShbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDJdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTcsIDExNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDEsIDExNikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI4LCBuZXcgRUNCXzEuZGVmYXVsdCgxNCwgNDYpLCBuZXcgRUNCXzEuZGVmYXVsdCgyMSwgNDcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMjksIDI0KSwgbmV3IEVDQl8xLmRlZmF1bHQoMTksIDI1KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDExLCAxNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDQ2LCAxNikpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMzQsIEludDMyQXJyYXkuZnJvbShbNiwgMzQsIDYyLCA5MCwgMTE4LCAxNDZdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTMsIDExNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDYsIDExNikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI4LCBuZXcgRUNCXzEuZGVmYXVsdCgxNCwgNDYpLCBuZXcgRUNCXzEuZGVmYXVsdCgyMywgNDcpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoNDQsIDI0KSwgbmV3IEVDQl8xLmRlZmF1bHQoNywgMjUpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoNTksIDE2KSwgbmV3IEVDQl8xLmRlZmF1bHQoMSwgMTcpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDM1LCBJbnQzMkFycmF5LmZyb20oWzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2LCAxNTBdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTIsIDEyMSksIG5ldyBFQ0JfMS5kZWZhdWx0KDcsIDEyMikpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI4LCBuZXcgRUNCXzEuZGVmYXVsdCgxMiwgNDcpLCBuZXcgRUNCXzEuZGVmYXVsdCgyNiwgNDgpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMzksIDI0KSwgbmV3IEVDQl8xLmRlZmF1bHQoMTQsIDI1KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDIyLCAxNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDQxLCAxNikpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMzYsIEludDMyQXJyYXkuZnJvbShbNiwgMjQsIDUwLCA3NiwgMTAyLCAxMjgsIDE1NF0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCg2LCAxMjEpLCBuZXcgRUNCXzEuZGVmYXVsdCgxNCwgMTIyKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDYsIDQ3KSwgbmV3IEVDQl8xLmRlZmF1bHQoMzQsIDQ4KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDQ2LCAyNCksIG5ldyBFQ0JfMS5kZWZhdWx0KDEwLCAyNSkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCgyLCAxNSksIG5ldyBFQ0JfMS5kZWZhdWx0KDY0LCAxNikpKSwKCSAgICAgICAgbmV3IFZlcnNpb24oMzcsIEludDMyQXJyYXkuZnJvbShbNiwgMjgsIDU0LCA4MCwgMTA2LCAxMzIsIDE1OF0pLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCgxNywgMTIyKSwgbmV3IEVDQl8xLmRlZmF1bHQoNCwgMTIzKSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMjgsIG5ldyBFQ0JfMS5kZWZhdWx0KDI5LCA0NiksIG5ldyBFQ0JfMS5kZWZhdWx0KDE0LCA0NykpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCg0OSwgMjQpLCBuZXcgRUNCXzEuZGVmYXVsdCgxMCwgMjUpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMjQsIDE1KSwgbmV3IEVDQl8xLmRlZmF1bHQoNDYsIDE2KSkpLAoJICAgICAgICBuZXcgVmVyc2lvbigzOCwgSW50MzJBcnJheS5mcm9tKFs2LCAzMiwgNTgsIDg0LCAxMTAsIDEzNiwgMTYyXSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDEyMiksIG5ldyBFQ0JfMS5kZWZhdWx0KDE4LCAxMjMpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMTMsIDQ2KSwgbmV3IEVDQl8xLmRlZmF1bHQoMzIsIDQ3KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDQ4LCAyNCksIG5ldyBFQ0JfMS5kZWZhdWx0KDE0LCAyNSkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCg0MiwgMTUpLCBuZXcgRUNCXzEuZGVmYXVsdCgzMiwgMTYpKSksCgkgICAgICAgIG5ldyBWZXJzaW9uKDM5LCBJbnQzMkFycmF5LmZyb20oWzYsIDI2LCA1NCwgODIsIDExMCwgMTM4LCAxNjZdKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMjAsIDExNyksIG5ldyBFQ0JfMS5kZWZhdWx0KDQsIDExOCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDI4LCBuZXcgRUNCXzEuZGVmYXVsdCg0MCwgNDcpLCBuZXcgRUNCXzEuZGVmYXVsdCg3LCA0OCkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCg0MywgMjQpLCBuZXcgRUNCXzEuZGVmYXVsdCgyMiwgMjUpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgzMCwgbmV3IEVDQl8xLmRlZmF1bHQoMTAsIDE1KSwgbmV3IEVDQl8xLmRlZmF1bHQoNjcsIDE2KSkpLAoJICAgICAgICBuZXcgVmVyc2lvbig0MCwgSW50MzJBcnJheS5mcm9tKFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0MiwgMTcwXSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDE5LCAxMTgpLCBuZXcgRUNCXzEuZGVmYXVsdCg2LCAxMTkpKSwgbmV3IEVDQmxvY2tzXzEuZGVmYXVsdCgyOCwgbmV3IEVDQl8xLmRlZmF1bHQoMTgsIDQ3KSwgbmV3IEVDQl8xLmRlZmF1bHQoMzEsIDQ4KSksIG5ldyBFQ0Jsb2Nrc18xLmRlZmF1bHQoMzAsIG5ldyBFQ0JfMS5kZWZhdWx0KDM0LCAyNCksIG5ldyBFQ0JfMS5kZWZhdWx0KDM0LCAyNSkpLCBuZXcgRUNCbG9ja3NfMS5kZWZhdWx0KDMwLCBuZXcgRUNCXzEuZGVmYXVsdCgyMCwgMTUpLCBuZXcgRUNCXzEuZGVmYXVsdCg2MSwgMTYpKSkKCSAgICBdOwoJICAgIHJldHVybiBWZXJzaW9uOwoJfSgpKTsKCVZlcnNpb24kMS5kZWZhdWx0ID0gVmVyc2lvbjsKCgl2YXIgRGF0YU1hc2sgPSB7fTsKCgkoZnVuY3Rpb24gKGV4cG9ydHMpIHsKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJZXhwb3J0cy5EYXRhTWFza1ZhbHVlcyA9IHZvaWQgMDsKCXZhciBEYXRhTWFza1ZhbHVlczsKCShmdW5jdGlvbiAoRGF0YU1hc2tWYWx1ZXMpIHsKCSAgICBEYXRhTWFza1ZhbHVlc1tEYXRhTWFza1ZhbHVlc1siREFUQV9NQVNLXzAwMCJdID0gMF0gPSAiREFUQV9NQVNLXzAwMCI7CgkgICAgRGF0YU1hc2tWYWx1ZXNbRGF0YU1hc2tWYWx1ZXNbIkRBVEFfTUFTS18wMDEiXSA9IDFdID0gIkRBVEFfTUFTS18wMDEiOwoJICAgIERhdGFNYXNrVmFsdWVzW0RhdGFNYXNrVmFsdWVzWyJEQVRBX01BU0tfMDEwIl0gPSAyXSA9ICJEQVRBX01BU0tfMDEwIjsKCSAgICBEYXRhTWFza1ZhbHVlc1tEYXRhTWFza1ZhbHVlc1siREFUQV9NQVNLXzAxMSJdID0gM10gPSAiREFUQV9NQVNLXzAxMSI7CgkgICAgRGF0YU1hc2tWYWx1ZXNbRGF0YU1hc2tWYWx1ZXNbIkRBVEFfTUFTS18xMDAiXSA9IDRdID0gIkRBVEFfTUFTS18xMDAiOwoJICAgIERhdGFNYXNrVmFsdWVzW0RhdGFNYXNrVmFsdWVzWyJEQVRBX01BU0tfMTAxIl0gPSA1XSA9ICJEQVRBX01BU0tfMTAxIjsKCSAgICBEYXRhTWFza1ZhbHVlc1tEYXRhTWFza1ZhbHVlc1siREFUQV9NQVNLXzExMCJdID0gNl0gPSAiREFUQV9NQVNLXzExMCI7CgkgICAgRGF0YU1hc2tWYWx1ZXNbRGF0YU1hc2tWYWx1ZXNbIkRBVEFfTUFTS18xMTEiXSA9IDddID0gIkRBVEFfTUFTS18xMTEiOwoJfSkoRGF0YU1hc2tWYWx1ZXMgPSBleHBvcnRzLkRhdGFNYXNrVmFsdWVzIHx8IChleHBvcnRzLkRhdGFNYXNrVmFsdWVzID0ge30pKTsKCS8qKgoJICogPHA+RW5jYXBzdWxhdGVzIGRhdGEgbWFza3MgZm9yIHRoZSBkYXRhIGJpdHMgaW4gYSBRUiBjb2RlLCBwZXIgSVNPIDE4MDA0OjIwMDYgNi44LiBJbXBsZW1lbnRhdGlvbnMKCSAqIG9mIHRoaXMgY2xhc3MgY2FuIHVuLW1hc2sgYSByYXcgQml0TWF0cml4LiBGb3Igc2ltcGxpY2l0eSwgdGhleSB3aWxsIHVubWFzayB0aGUgZW50aXJlIEJpdE1hdHJpeCwKCSAqIGluY2x1ZGluZyBhcmVhcyB1c2VkIGZvciBmaW5kZXIgcGF0dGVybnMsIHRpbWluZyBwYXR0ZXJucywgZXRjLiBUaGVzZSBhcmVhcyBzaG91bGQgYmUgdW51c2VkCgkgKiBhZnRlciB0aGUgcG9pbnQgdGhleSBhcmUgdW5tYXNrZWQgYW55d2F5LjwvcD4KCSAqCgkgKiA8cD5Ob3RlIHRoYXQgdGhlIGRpYWdyYW0gaW4gc2VjdGlvbiA2LjguMSBpcyBtaXNsZWFkaW5nIHNpbmNlIGl0IGluZGljYXRlcyB0aGF0IGkgaXMgY29sdW1uIHBvc2l0aW9uCgkgKiBhbmQgaiBpcyByb3cgcG9zaXRpb24uIEluIGZhY3QsIGFzIHRoZSB0ZXh0IHNheXMsIGkgaXMgcm93IHBvc2l0aW9uIGFuZCBqIGlzIGNvbHVtbiBwb3NpdGlvbi48L3A+CgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIERhdGFNYXNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIC8vIFNlZSBJU08gMTgwMDQ6MjAwNiA2LjguMQoJICAgIGZ1bmN0aW9uIERhdGFNYXNrKHZhbHVlLCBpc01hc2tlZCkgewoJICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7CgkgICAgICAgIHRoaXMuaXNNYXNrZWQgPSBpc01hc2tlZDsKCSAgICB9CgkgICAgLy8gRW5kIG9mIGVudW0gY29uc3RhbnRzLgoJICAgIC8qKgoJICAgICAqIDxwPkltcGxlbWVudGF0aW9ucyBvZiB0aGlzIG1ldGhvZCByZXZlcnNlIHRoZSBkYXRhIG1hc2tpbmcgcHJvY2VzcyBhcHBsaWVkIHRvIGEgUVIgQ29kZSBhbmQKCSAgICAgKiBtYWtlIGl0cyBiaXRzIHJlYWR5IHRvIHJlYWQuPC9wPgoJICAgICAqCgkgICAgICogQHBhcmFtIGJpdHMgcmVwcmVzZW50YXRpb24gb2YgUVIgQ29kZSBiaXRzCgkgICAgICogQHBhcmFtIGRpbWVuc2lvbiBkaW1lbnNpb24gb2YgUVIgQ29kZSwgcmVwcmVzZW50ZWQgYnkgYml0cywgYmVpbmcgdW5tYXNrZWQKCSAgICAgKi8KCSAgICBEYXRhTWFzay5wcm90b3R5cGUudW5tYXNrQml0TWF0cml4ID0gZnVuY3Rpb24gKGJpdHMsIGRpbWVuc2lvbiAvKmludCovKSB7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGltZW5zaW9uOyBpKyspIHsKCSAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGltZW5zaW9uOyBqKyspIHsKCSAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01hc2tlZChpLCBqKSkgewoJICAgICAgICAgICAgICAgICAgICBiaXRzLmZsaXAoaiwgaSk7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgfTsKCSAgICBEYXRhTWFzay52YWx1ZXMgPSBuZXcgTWFwKFsKCSAgICAgICAgLyoqCgkgICAgICAgICAqIDAwMDogbWFzayBiaXRzIGZvciB3aGljaCAoeCArIHkpIG1vZCAyID09IDAKCSAgICAgICAgICovCgkgICAgICAgIFtEYXRhTWFza1ZhbHVlcy5EQVRBX01BU0tfMDAwLCBuZXcgRGF0YU1hc2soRGF0YU1hc2tWYWx1ZXMuREFUQV9NQVNLXzAwMCwgZnVuY3Rpb24gKGkgLyppbnQqLywgaiAvKmludCovKSB7IHJldHVybiAoKGkgKyBqKSAmIDB4MDEpID09PSAwOyB9KV0sCgkgICAgICAgIC8qKgoJICAgICAgICAgKiAwMDE6IG1hc2sgYml0cyBmb3Igd2hpY2ggeCBtb2QgMiA9PSAwCgkgICAgICAgICAqLwoJICAgICAgICBbRGF0YU1hc2tWYWx1ZXMuREFUQV9NQVNLXzAwMSwgbmV3IERhdGFNYXNrKERhdGFNYXNrVmFsdWVzLkRBVEFfTUFTS18wMDEsIGZ1bmN0aW9uIChpIC8qaW50Ki8sIGogLyppbnQqLykgeyByZXR1cm4gKGkgJiAweDAxKSA9PT0gMDsgfSldLAoJICAgICAgICAvKioKCSAgICAgICAgICogMDEwOiBtYXNrIGJpdHMgZm9yIHdoaWNoIHkgbW9kIDMgPT0gMAoJICAgICAgICAgKi8KCSAgICAgICAgW0RhdGFNYXNrVmFsdWVzLkRBVEFfTUFTS18wMTAsIG5ldyBEYXRhTWFzayhEYXRhTWFza1ZhbHVlcy5EQVRBX01BU0tfMDEwLCBmdW5jdGlvbiAoaSAvKmludCovLCBqIC8qaW50Ki8pIHsgcmV0dXJuIGogJSAzID09PSAwOyB9KV0sCgkgICAgICAgIC8qKgoJICAgICAgICAgKiAwMTE6IG1hc2sgYml0cyBmb3Igd2hpY2ggKHggKyB5KSBtb2QgMyA9PSAwCgkgICAgICAgICAqLwoJICAgICAgICBbRGF0YU1hc2tWYWx1ZXMuREFUQV9NQVNLXzAxMSwgbmV3IERhdGFNYXNrKERhdGFNYXNrVmFsdWVzLkRBVEFfTUFTS18wMTEsIGZ1bmN0aW9uIChpIC8qaW50Ki8sIGogLyppbnQqLykgeyByZXR1cm4gKGkgKyBqKSAlIDMgPT09IDA7IH0pXSwKCSAgICAgICAgLyoqCgkgICAgICAgICAqIDEwMDogbWFzayBiaXRzIGZvciB3aGljaCAoeC8yICsgeS8zKSBtb2QgMiA9PSAwCgkgICAgICAgICAqLwoJICAgICAgICBbRGF0YU1hc2tWYWx1ZXMuREFUQV9NQVNLXzEwMCwgbmV3IERhdGFNYXNrKERhdGFNYXNrVmFsdWVzLkRBVEFfTUFTS18xMDAsIGZ1bmN0aW9uIChpIC8qaW50Ki8sIGogLyppbnQqLykgeyByZXR1cm4gKChNYXRoLmZsb29yKGkgLyAyKSArIE1hdGguZmxvb3IoaiAvIDMpKSAmIDB4MDEpID09PSAwOyB9KV0sCgkgICAgICAgIC8qKgoJICAgICAgICAgKiAxMDE6IG1hc2sgYml0cyBmb3Igd2hpY2ggeHkgbW9kIDIgKyB4eSBtb2QgMyA9PSAwCgkgICAgICAgICAqIGVxdWl2YWxlbnRseSwgc3VjaCB0aGF0IHh5IG1vZCA2ID09IDAKCSAgICAgICAgICovCgkgICAgICAgIFtEYXRhTWFza1ZhbHVlcy5EQVRBX01BU0tfMTAxLCBuZXcgRGF0YU1hc2soRGF0YU1hc2tWYWx1ZXMuREFUQV9NQVNLXzEwMSwgZnVuY3Rpb24gKGkgLyppbnQqLywgaiAvKmludCovKSB7IHJldHVybiAoaSAqIGopICUgNiA9PT0gMDsgfSldLAoJICAgICAgICAvKioKCSAgICAgICAgICogMTEwOiBtYXNrIGJpdHMgZm9yIHdoaWNoICh4eSBtb2QgMiArIHh5IG1vZCAzKSBtb2QgMiA9PSAwCgkgICAgICAgICAqIGVxdWl2YWxlbnRseSwgc3VjaCB0aGF0IHh5IG1vZCA2IDwgMwoJICAgICAgICAgKi8KCSAgICAgICAgW0RhdGFNYXNrVmFsdWVzLkRBVEFfTUFTS18xMTAsIG5ldyBEYXRhTWFzayhEYXRhTWFza1ZhbHVlcy5EQVRBX01BU0tfMTEwLCBmdW5jdGlvbiAoaSAvKmludCovLCBqIC8qaW50Ki8pIHsgcmV0dXJuICgoaSAqIGopICUgNikgPCAzOyB9KV0sCgkgICAgICAgIC8qKgoJICAgICAgICAgKiAxMTE6IG1hc2sgYml0cyBmb3Igd2hpY2ggKCh4K3kpbW9kIDIgKyB4eSBtb2QgMykgbW9kIDIgPT0gMAoJICAgICAgICAgKiBlcXVpdmFsZW50bHksIHN1Y2ggdGhhdCAoeCArIHkgKyB4eSBtb2QgMykgbW9kIDIgPT0gMAoJICAgICAgICAgKi8KCSAgICAgICAgW0RhdGFNYXNrVmFsdWVzLkRBVEFfTUFTS18xMTEsIG5ldyBEYXRhTWFzayhEYXRhTWFza1ZhbHVlcy5EQVRBX01BU0tfMTExLCBmdW5jdGlvbiAoaSAvKmludCovLCBqIC8qaW50Ki8pIHsgcmV0dXJuICgoaSArIGogKyAoKGkgKiBqKSAlIDMpKSAmIDB4MDEpID09PSAwOyB9KV0sCgkgICAgXSk7CgkgICAgcmV0dXJuIERhdGFNYXNrOwoJfSgpKTsKCWV4cG9ydHMuZGVmYXVsdCA9IERhdGFNYXNrOwoKCX0oRGF0YU1hc2spKTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpdE1hdHJpeFBhcnNlciQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7Cgl2YXIgVmVyc2lvbl8xJDEgPSBWZXJzaW9uJDE7Cgl2YXIgRm9ybWF0SW5mb3JtYXRpb25fMSA9IEZvcm1hdEluZm9ybWF0aW9uJDE7Cgl2YXIgRGF0YU1hc2tfMSA9IERhdGFNYXNrOwoJdmFyIEZvcm1hdEV4Y2VwdGlvbl8xJDEgPSBGb3JtYXRFeGNlcHRpb24kMTsKCS8qKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIEJpdE1hdHJpeFBhcnNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICAvKioKCSAgICAgKiBAcGFyYW0gYml0TWF0cml4IHtAbGluayBCaXRNYXRyaXh9IHRvIHBhcnNlCgkgICAgICogQHRocm93cyBGb3JtYXRFeGNlcHRpb24gaWYgZGltZW5zaW9uIGlzIG5vdCA+PSAyMSBhbmQgMSBtb2QgNAoJICAgICAqLwoJICAgIGZ1bmN0aW9uIEJpdE1hdHJpeFBhcnNlcihiaXRNYXRyaXgpIHsKCSAgICAgICAgdmFyIGRpbWVuc2lvbiA9IGJpdE1hdHJpeC5nZXRIZWlnaHQoKTsKCSAgICAgICAgaWYgKGRpbWVuc2lvbiA8IDIxIHx8IChkaW1lbnNpb24gJiAweDAzKSAhPT0gMSkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xJDEuZGVmYXVsdCgpOwoJICAgICAgICB9CgkgICAgICAgIHRoaXMuYml0TWF0cml4ID0gYml0TWF0cml4OwoJICAgIH0KCSAgICAvKioKCSAgICAgKiA8cD5SZWFkcyBmb3JtYXQgaW5mb3JtYXRpb24gZnJvbSBvbmUgb2YgaXRzIHR3byBsb2NhdGlvbnMgd2l0aGluIHRoZSBRUiBDb2RlLjwvcD4KCSAgICAgKgoJICAgICAqIEByZXR1cm4ge0BsaW5rIEZvcm1hdEluZm9ybWF0aW9ufSBlbmNhcHN1bGF0aW5nIHRoZSBRUiBDb2RlJ3MgZm9ybWF0IGluZm8KCSAgICAgKiBAdGhyb3dzIEZvcm1hdEV4Y2VwdGlvbiBpZiBib3RoIGZvcm1hdCBpbmZvcm1hdGlvbiBsb2NhdGlvbnMgY2Fubm90IGJlIHBhcnNlZCBhcwoJICAgICAqIHRoZSB2YWxpZCBlbmNvZGluZyBvZiBmb3JtYXQgaW5mb3JtYXRpb24KCSAgICAgKi8KCSAgICBCaXRNYXRyaXhQYXJzZXIucHJvdG90eXBlLnJlYWRGb3JtYXRJbmZvcm1hdGlvbiA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgaWYgKHRoaXMucGFyc2VkRm9ybWF0SW5mbyAhPT0gbnVsbCAmJiB0aGlzLnBhcnNlZEZvcm1hdEluZm8gIT09IHVuZGVmaW5lZCkgewoJICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VkRm9ybWF0SW5mbzsKCSAgICAgICAgfQoJICAgICAgICAvLyBSZWFkIHRvcC1sZWZ0IGZvcm1hdCBpbmZvIGJpdHMKCSAgICAgICAgdmFyIGZvcm1hdEluZm9CaXRzMSA9IDA7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7CgkgICAgICAgICAgICBmb3JtYXRJbmZvQml0czEgPSB0aGlzLmNvcHlCaXQoaSwgOCwgZm9ybWF0SW5mb0JpdHMxKTsKCSAgICAgICAgfQoJICAgICAgICAvLyAuLiBhbmQgc2tpcCBhIGJpdCBpbiB0aGUgdGltaW5nIHBhdHRlcm4gLi4uCgkgICAgICAgIGZvcm1hdEluZm9CaXRzMSA9IHRoaXMuY29weUJpdCg3LCA4LCBmb3JtYXRJbmZvQml0czEpOwoJICAgICAgICBmb3JtYXRJbmZvQml0czEgPSB0aGlzLmNvcHlCaXQoOCwgOCwgZm9ybWF0SW5mb0JpdHMxKTsKCSAgICAgICAgZm9ybWF0SW5mb0JpdHMxID0gdGhpcy5jb3B5Qml0KDgsIDcsIGZvcm1hdEluZm9CaXRzMSk7CgkgICAgICAgIC8vIC4uIGFuZCBza2lwIGEgYml0IGluIHRoZSB0aW1pbmcgcGF0dGVybiAuLi4KCSAgICAgICAgZm9yICh2YXIgaiA9IDU7IGogPj0gMDsgai0tKSB7CgkgICAgICAgICAgICBmb3JtYXRJbmZvQml0czEgPSB0aGlzLmNvcHlCaXQoOCwgaiwgZm9ybWF0SW5mb0JpdHMxKTsKCSAgICAgICAgfQoJICAgICAgICAvLyBSZWFkIHRoZSB0b3AtcmlnaHQvYm90dG9tLWxlZnQgcGF0dGVybiB0b28KCSAgICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuYml0TWF0cml4LmdldEhlaWdodCgpOwoJICAgICAgICB2YXIgZm9ybWF0SW5mb0JpdHMyID0gMDsKCSAgICAgICAgdmFyIGpNaW4gPSBkaW1lbnNpb24gLSA3OwoJICAgICAgICBmb3IgKHZhciBqID0gZGltZW5zaW9uIC0gMTsgaiA+PSBqTWluOyBqLS0pIHsKCSAgICAgICAgICAgIGZvcm1hdEluZm9CaXRzMiA9IHRoaXMuY29weUJpdCg4LCBqLCBmb3JtYXRJbmZvQml0czIpOwoJICAgICAgICB9CgkgICAgICAgIGZvciAodmFyIGkgPSBkaW1lbnNpb24gLSA4OyBpIDwgZGltZW5zaW9uOyBpKyspIHsKCSAgICAgICAgICAgIGZvcm1hdEluZm9CaXRzMiA9IHRoaXMuY29weUJpdChpLCA4LCBmb3JtYXRJbmZvQml0czIpOwoJICAgICAgICB9CgkgICAgICAgIHRoaXMucGFyc2VkRm9ybWF0SW5mbyA9IEZvcm1hdEluZm9ybWF0aW9uXzEuZGVmYXVsdC5kZWNvZGVGb3JtYXRJbmZvcm1hdGlvbihmb3JtYXRJbmZvQml0czEsIGZvcm1hdEluZm9CaXRzMik7CgkgICAgICAgIGlmICh0aGlzLnBhcnNlZEZvcm1hdEluZm8gIT09IG51bGwpIHsKCSAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlZEZvcm1hdEluZm87CgkgICAgICAgIH0KCSAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xJDEuZGVmYXVsdCgpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogPHA+UmVhZHMgdmVyc2lvbiBpbmZvcm1hdGlvbiBmcm9tIG9uZSBvZiBpdHMgdHdvIGxvY2F0aW9ucyB3aXRoaW4gdGhlIFFSIENvZGUuPC9wPgoJICAgICAqCgkgICAgICogQHJldHVybiB7QGxpbmsgVmVyc2lvbn0gZW5jYXBzdWxhdGluZyB0aGUgUVIgQ29kZSdzIHZlcnNpb24KCSAgICAgKiBAdGhyb3dzIEZvcm1hdEV4Y2VwdGlvbiBpZiBib3RoIHZlcnNpb24gaW5mb3JtYXRpb24gbG9jYXRpb25zIGNhbm5vdCBiZSBwYXJzZWQgYXMKCSAgICAgKiB0aGUgdmFsaWQgZW5jb2Rpbmcgb2YgdmVyc2lvbiBpbmZvcm1hdGlvbgoJICAgICAqLwoJICAgIEJpdE1hdHJpeFBhcnNlci5wcm90b3R5cGUucmVhZFZlcnNpb24gPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIGlmICh0aGlzLnBhcnNlZFZlcnNpb24gIT09IG51bGwgJiYgdGhpcy5wYXJzZWRWZXJzaW9uICE9PSB1bmRlZmluZWQpIHsKCSAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlZFZlcnNpb247CgkgICAgICAgIH0KCSAgICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuYml0TWF0cml4LmdldEhlaWdodCgpOwoJICAgICAgICB2YXIgcHJvdmlzaW9uYWxWZXJzaW9uID0gTWF0aC5mbG9vcigoZGltZW5zaW9uIC0gMTcpIC8gNCk7CgkgICAgICAgIGlmIChwcm92aXNpb25hbFZlcnNpb24gPD0gNikgewoJICAgICAgICAgICAgcmV0dXJuIFZlcnNpb25fMSQxLmRlZmF1bHQuZ2V0VmVyc2lvbkZvck51bWJlcihwcm92aXNpb25hbFZlcnNpb24pOwoJICAgICAgICB9CgkgICAgICAgIC8vIFJlYWQgdG9wLXJpZ2h0IHZlcnNpb24gaW5mbzogMyB3aWRlIGJ5IDYgdGFsbAoJICAgICAgICB2YXIgdmVyc2lvbkJpdHMgPSAwOwoJICAgICAgICB2YXIgaWpNaW4gPSBkaW1lbnNpb24gLSAxMTsKCSAgICAgICAgZm9yICh2YXIgaiA9IDU7IGogPj0gMDsgai0tKSB7CgkgICAgICAgICAgICBmb3IgKHZhciBpID0gZGltZW5zaW9uIC0gOTsgaSA+PSBpak1pbjsgaS0tKSB7CgkgICAgICAgICAgICAgICAgdmVyc2lvbkJpdHMgPSB0aGlzLmNvcHlCaXQoaSwgaiwgdmVyc2lvbkJpdHMpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHZhciB0aGVQYXJzZWRWZXJzaW9uID0gVmVyc2lvbl8xJDEuZGVmYXVsdC5kZWNvZGVWZXJzaW9uSW5mb3JtYXRpb24odmVyc2lvbkJpdHMpOwoJICAgICAgICBpZiAodGhlUGFyc2VkVmVyc2lvbiAhPT0gbnVsbCAmJiB0aGVQYXJzZWRWZXJzaW9uLmdldERpbWVuc2lvbkZvclZlcnNpb24oKSA9PT0gZGltZW5zaW9uKSB7CgkgICAgICAgICAgICB0aGlzLnBhcnNlZFZlcnNpb24gPSB0aGVQYXJzZWRWZXJzaW9uOwoJICAgICAgICAgICAgcmV0dXJuIHRoZVBhcnNlZFZlcnNpb247CgkgICAgICAgIH0KCSAgICAgICAgLy8gSG1tLCBmYWlsZWQuIFRyeSBib3R0b20gbGVmdDogNiB3aWRlIGJ5IDMgdGFsbAoJICAgICAgICB2ZXJzaW9uQml0cyA9IDA7CgkgICAgICAgIGZvciAodmFyIGkgPSA1OyBpID49IDA7IGktLSkgewoJICAgICAgICAgICAgZm9yICh2YXIgaiA9IGRpbWVuc2lvbiAtIDk7IGogPj0gaWpNaW47IGotLSkgewoJICAgICAgICAgICAgICAgIHZlcnNpb25CaXRzID0gdGhpcy5jb3B5Qml0KGksIGosIHZlcnNpb25CaXRzKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICB0aGVQYXJzZWRWZXJzaW9uID0gVmVyc2lvbl8xJDEuZGVmYXVsdC5kZWNvZGVWZXJzaW9uSW5mb3JtYXRpb24odmVyc2lvbkJpdHMpOwoJICAgICAgICBpZiAodGhlUGFyc2VkVmVyc2lvbiAhPT0gbnVsbCAmJiB0aGVQYXJzZWRWZXJzaW9uLmdldERpbWVuc2lvbkZvclZlcnNpb24oKSA9PT0gZGltZW5zaW9uKSB7CgkgICAgICAgICAgICB0aGlzLnBhcnNlZFZlcnNpb24gPSB0aGVQYXJzZWRWZXJzaW9uOwoJICAgICAgICAgICAgcmV0dXJuIHRoZVBhcnNlZFZlcnNpb247CgkgICAgICAgIH0KCSAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xJDEuZGVmYXVsdCgpOwoJICAgIH07CgkgICAgQml0TWF0cml4UGFyc2VyLnByb3RvdHlwZS5jb3B5Qml0ID0gZnVuY3Rpb24gKGkgLyppbnQqLywgaiAvKmludCovLCB2ZXJzaW9uQml0cyAvKmludCovKSB7CgkgICAgICAgIHZhciBiaXQgPSB0aGlzLmlzTWlycm9yID8gdGhpcy5iaXRNYXRyaXguZ2V0KGosIGkpIDogdGhpcy5iaXRNYXRyaXguZ2V0KGksIGopOwoJICAgICAgICByZXR1cm4gYml0ID8gKHZlcnNpb25CaXRzIDw8IDEpIHwgMHgxIDogdmVyc2lvbkJpdHMgPDwgMTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPlJlYWRzIHRoZSBiaXRzIGluIHRoZSB7QGxpbmsgQml0TWF0cml4fSByZXByZXNlbnRpbmcgdGhlIGZpbmRlciBwYXR0ZXJuIGluIHRoZQoJICAgICAqIGNvcnJlY3Qgb3JkZXIgaW4gb3JkZXIgdG8gcmVjb25zdHJ1Y3QgdGhlIGNvZGV3b3JkcyBieXRlcyBjb250YWluZWQgd2l0aGluIHRoZQoJICAgICAqIFFSIENvZGUuPC9wPgoJICAgICAqCgkgICAgICogQHJldHVybiBieXRlcyBlbmNvZGVkIHdpdGhpbiB0aGUgUVIgQ29kZQoJICAgICAqIEB0aHJvd3MgRm9ybWF0RXhjZXB0aW9uIGlmIHRoZSBleGFjdCBudW1iZXIgb2YgYnl0ZXMgZXhwZWN0ZWQgaXMgbm90IHJlYWQKCSAgICAgKi8KCSAgICBCaXRNYXRyaXhQYXJzZXIucHJvdG90eXBlLnJlYWRDb2Rld29yZHMgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHZhciBmb3JtYXRJbmZvID0gdGhpcy5yZWFkRm9ybWF0SW5mb3JtYXRpb24oKTsKCSAgICAgICAgdmFyIHZlcnNpb24gPSB0aGlzLnJlYWRWZXJzaW9uKCk7CgkgICAgICAgIC8vIEdldCB0aGUgZGF0YSBtYXNrIGZvciB0aGUgZm9ybWF0IHVzZWQgaW4gdGhpcyBRUiBDb2RlLiBUaGlzIHdpbGwgZXhjbHVkZQoJICAgICAgICAvLyBzb21lIGJpdHMgZnJvbSByZWFkaW5nIGFzIHdlIHdpbmQgdGhyb3VnaCB0aGUgYml0IG1hdHJpeC4KCSAgICAgICAgdmFyIGRhdGFNYXNrID0gRGF0YU1hc2tfMS5kZWZhdWx0LnZhbHVlcy5nZXQoZm9ybWF0SW5mby5nZXREYXRhTWFzaygpKTsKCSAgICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuYml0TWF0cml4LmdldEhlaWdodCgpOwoJICAgICAgICBkYXRhTWFzay51bm1hc2tCaXRNYXRyaXgodGhpcy5iaXRNYXRyaXgsIGRpbWVuc2lvbik7CgkgICAgICAgIHZhciBmdW5jdGlvblBhdHRlcm4gPSB2ZXJzaW9uLmJ1aWxkRnVuY3Rpb25QYXR0ZXJuKCk7CgkgICAgICAgIHZhciByZWFkaW5nVXAgPSB0cnVlOwoJICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkodmVyc2lvbi5nZXRUb3RhbENvZGV3b3JkcygpKTsKCSAgICAgICAgdmFyIHJlc3VsdE9mZnNldCA9IDA7CgkgICAgICAgIHZhciBjdXJyZW50Qnl0ZSA9IDA7CgkgICAgICAgIHZhciBiaXRzUmVhZCA9IDA7CgkgICAgICAgIC8vIFJlYWQgY29sdW1ucyBpbiBwYWlycywgZnJvbSByaWdodCB0byBsZWZ0CgkgICAgICAgIGZvciAodmFyIGogPSBkaW1lbnNpb24gLSAxOyBqID4gMDsgaiAtPSAyKSB7CgkgICAgICAgICAgICBpZiAoaiA9PT0gNikgewoJICAgICAgICAgICAgICAgIC8vIFNraXAgd2hvbGUgY29sdW1uIHdpdGggdmVydGljYWwgYWxpZ25tZW50IHBhdHRlcm4KCSAgICAgICAgICAgICAgICAvLyBzYXZlcyB0aW1lIGFuZCBtYWtlcyB0aGUgb3RoZXIgY29kZSBwcm9jZWVkIG1vcmUgY2xlYW5seQoJICAgICAgICAgICAgICAgIGotLTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIC8vIFJlYWQgYWx0ZXJuYXRpbmdseSBmcm9tIGJvdHRvbSB0byB0b3AgdGhlbiB0b3AgdG8gYm90dG9tCgkgICAgICAgICAgICBmb3IgKHZhciBjb3VudCA9IDA7IGNvdW50IDwgZGltZW5zaW9uOyBjb3VudCsrKSB7CgkgICAgICAgICAgICAgICAgdmFyIGkgPSByZWFkaW5nVXAgPyBkaW1lbnNpb24gLSAxIC0gY291bnQgOiBjb3VudDsKCSAgICAgICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCAyOyBjb2wrKykgewoJICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgYml0cyBjb3ZlcmVkIGJ5IHRoZSBmdW5jdGlvbiBwYXR0ZXJuCgkgICAgICAgICAgICAgICAgICAgIGlmICghZnVuY3Rpb25QYXR0ZXJuLmdldChqIC0gY29sLCBpKSkgewoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVhZCBhIGJpdAoJICAgICAgICAgICAgICAgICAgICAgICAgYml0c1JlYWQrKzsKCSAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCeXRlIDw8PSAxOwoJICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYml0TWF0cml4LmdldChqIC0gY29sLCBpKSkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCeXRlIHw9IDE7CgkgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSd2ZSBtYWRlIGEgd2hvbGUgYnl0ZSwgc2F2ZSBpdCBvZmYKCSAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaXRzUmVhZCA9PT0gOCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtyZXN1bHRPZmZzZXQrK10gPSAvKihieXRlKSAqLyBjdXJyZW50Qnl0ZTsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXRzUmVhZCA9IDA7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ5dGUgPSAwOwoJICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgcmVhZGluZ1VwID0gIXJlYWRpbmdVcDsgLy8gcmVhZGluZ1VwIF49IHRydWU7IC8vIHJlYWRpbmdVcCA9ICFyZWFkaW5nVXA7IC8vIHN3aXRjaCBkaXJlY3Rpb25zCgkgICAgICAgIH0KCSAgICAgICAgaWYgKHJlc3VsdE9mZnNldCAhPT0gdmVyc2lvbi5nZXRUb3RhbENvZGV3b3JkcygpKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEkMS5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHJlc3VsdDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFJldmVydCB0aGUgbWFzayByZW1vdmFsIGRvbmUgd2hpbGUgcmVhZGluZyB0aGUgY29kZSB3b3Jkcy4gVGhlIGJpdCBtYXRyaXggc2hvdWxkIHJldmVydCB0byBpdHMgb3JpZ2luYWwgc3RhdGUuCgkgICAgICovCgkgICAgQml0TWF0cml4UGFyc2VyLnByb3RvdHlwZS5yZW1hc2sgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIGlmICh0aGlzLnBhcnNlZEZvcm1hdEluZm8gPT09IG51bGwpIHsKCSAgICAgICAgICAgIHJldHVybjsgLy8gV2UgaGF2ZSBubyBmb3JtYXQgaW5mb3JtYXRpb24sIGFuZCBoYXZlIG5vIGRhdGEgbWFzawoJICAgICAgICB9CgkgICAgICAgIHZhciBkYXRhTWFzayA9IERhdGFNYXNrXzEuZGVmYXVsdC52YWx1ZXNbdGhpcy5wYXJzZWRGb3JtYXRJbmZvLmdldERhdGFNYXNrKCldOwoJICAgICAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5iaXRNYXRyaXguZ2V0SGVpZ2h0KCk7CgkgICAgICAgIGRhdGFNYXNrLnVubWFza0JpdE1hdHJpeCh0aGlzLmJpdE1hdHJpeCwgZGltZW5zaW9uKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFByZXBhcmUgdGhlIHBhcnNlciBmb3IgYSBtaXJyb3JlZCBvcGVyYXRpb24uCgkgICAgICogVGhpcyBmbGFnIGhhcyBlZmZlY3Qgb25seSBvbiB0aGUge0BsaW5rICNyZWFkRm9ybWF0SW5mb3JtYXRpb24oKX0gYW5kIHRoZQoJICAgICAqIHtAbGluayAjcmVhZFZlcnNpb24oKX0uIEJlZm9yZSBwcm9jZWVkaW5nIHdpdGgge0BsaW5rICNyZWFkQ29kZXdvcmRzKCl9IHRoZQoJICAgICAqIHtAbGluayAjbWlycm9yKCl9IG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLgoJICAgICAqCgkgICAgICogQHBhcmFtIG1pcnJvciBXaGV0aGVyIHRvIHJlYWQgdmVyc2lvbiBhbmQgZm9ybWF0IGluZm9ybWF0aW9uIG1pcnJvcmVkLgoJICAgICAqLwoJICAgIEJpdE1hdHJpeFBhcnNlci5wcm90b3R5cGUuc2V0TWlycm9yID0gZnVuY3Rpb24gKGlzTWlycm9yKSB7CgkgICAgICAgIHRoaXMucGFyc2VkVmVyc2lvbiA9IG51bGw7CgkgICAgICAgIHRoaXMucGFyc2VkRm9ybWF0SW5mbyA9IG51bGw7CgkgICAgICAgIHRoaXMuaXNNaXJyb3IgPSBpc01pcnJvcjsKCSAgICB9OwoJICAgIC8qKiBNaXJyb3IgdGhlIGJpdCBtYXRyaXggaW4gb3JkZXIgdG8gYXR0ZW1wdCBhIHNlY29uZCByZWFkaW5nLiAqLwoJICAgIEJpdE1hdHJpeFBhcnNlci5wcm90b3R5cGUubWlycm9yID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgYml0TWF0cml4ID0gdGhpcy5iaXRNYXRyaXg7CgkgICAgICAgIGZvciAodmFyIHggPSAwLCB3aWR0aCA9IGJpdE1hdHJpeC5nZXRXaWR0aCgpOyB4IDwgd2lkdGg7IHgrKykgewoJICAgICAgICAgICAgZm9yICh2YXIgeSA9IHggKyAxLCBoZWlnaHQgPSBiaXRNYXRyaXguZ2V0SGVpZ2h0KCk7IHkgPCBoZWlnaHQ7IHkrKykgewoJICAgICAgICAgICAgICAgIGlmIChiaXRNYXRyaXguZ2V0KHgsIHkpICE9PSBiaXRNYXRyaXguZ2V0KHksIHgpKSB7CgkgICAgICAgICAgICAgICAgICAgIGJpdE1hdHJpeC5mbGlwKHksIHgpOwoJICAgICAgICAgICAgICAgICAgICBiaXRNYXRyaXguZmxpcCh4LCB5KTsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICB9OwoJICAgIHJldHVybiBCaXRNYXRyaXhQYXJzZXI7Cgl9KCkpOwoJQml0TWF0cml4UGFyc2VyJDEuZGVmYXVsdCA9IEJpdE1hdHJpeFBhcnNlcjsKCgl2YXIgRGF0YUJsb2NrJDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJdmFyIF9fdmFsdWVzJDMgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHsKCSAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDsKCSAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTsKCSAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09ICJudW1iZXIiKSByZXR1cm4gewoJICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7CgkgICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwOwoJICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9OwoJICAgICAgICB9CgkgICAgfTsKCSAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyAiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS4iIDogIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC4iKTsKCX07CglPYmplY3QuZGVmaW5lUHJvcGVydHkoRGF0YUJsb2NrJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCXZhciBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSQxID0gSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uJDE7CgkvKioKCSAqIDxwPkVuY2Fwc3VsYXRlcyBhIGJsb2NrIG9mIGRhdGEgd2l0aGluIGEgUVIgQ29kZS4gUVIgQ29kZXMgbWF5IHNwbGl0IHRoZWlyIGRhdGEgaW50bwoJICogbXVsdGlwbGUgYmxvY2tzLCBlYWNoIG9mIHdoaWNoIGlzIGEgdW5pdCBvZiBkYXRhIGFuZCBlcnJvci1jb3JyZWN0aW9uIGNvZGV3b3Jkcy4gRWFjaAoJICogaXMgcmVwcmVzZW50ZWQgYnkgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcy48L3A+CgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIERhdGFCbG9jayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBEYXRhQmxvY2sobnVtRGF0YUNvZGV3b3JkcyAvKmludCovLCBjb2Rld29yZHMpIHsKCSAgICAgICAgdGhpcy5udW1EYXRhQ29kZXdvcmRzID0gbnVtRGF0YUNvZGV3b3JkczsKCSAgICAgICAgdGhpcy5jb2Rld29yZHMgPSBjb2Rld29yZHM7CgkgICAgfQoJICAgIC8qKgoJICAgICAqIDxwPldoZW4gUVIgQ29kZXMgdXNlIG11bHRpcGxlIGRhdGEgYmxvY2tzLCB0aGV5IGFyZSBhY3R1YWxseSBpbnRlcmxlYXZlZC4KCSAgICAgKiBUaGF0IGlzLCB0aGUgZmlyc3QgYnl0ZSBvZiBkYXRhIGJsb2NrIDEgdG8gbiBpcyB3cml0dGVuLCB0aGVuIHRoZSBzZWNvbmQgYnl0ZXMsIGFuZCBzbyBvbi4gVGhpcwoJICAgICAqIG1ldGhvZCB3aWxsIHNlcGFyYXRlIHRoZSBkYXRhIGludG8gb3JpZ2luYWwgYmxvY2tzLjwvcD4KCSAgICAgKgoJICAgICAqIEBwYXJhbSByYXdDb2Rld29yZHMgYnl0ZXMgYXMgcmVhZCBkaXJlY3RseSBmcm9tIHRoZSBRUiBDb2RlCgkgICAgICogQHBhcmFtIHZlcnNpb24gdmVyc2lvbiBvZiB0aGUgUVIgQ29kZQoJICAgICAqIEBwYXJhbSBlY0xldmVsIGVycm9yLWNvcnJlY3Rpb24gbGV2ZWwgb2YgdGhlIFFSIENvZGUKCSAgICAgKiBAcmV0dXJuIERhdGFCbG9ja3MgY29udGFpbmluZyBvcmlnaW5hbCBieXRlcywgImRlLWludGVybGVhdmVkIiBmcm9tIHJlcHJlc2VudGF0aW9uIGluIHRoZQoJICAgICAqICAgICAgICAgUVIgQ29kZQoJICAgICAqLwoJICAgIERhdGFCbG9jay5nZXREYXRhQmxvY2tzID0gZnVuY3Rpb24gKHJhd0NvZGV3b3JkcywgdmVyc2lvbiwgZWNMZXZlbCkgewoJICAgICAgICB2YXIgZV8xLCBfYSwgZV8yLCBfYjsKCSAgICAgICAgaWYgKHJhd0NvZGV3b3Jkcy5sZW5ndGggIT09IHZlcnNpb24uZ2V0VG90YWxDb2Rld29yZHMoKSkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xJDEuZGVmYXVsdCgpOwoJICAgICAgICB9CgkgICAgICAgIC8vIEZpZ3VyZSBvdXQgdGhlIG51bWJlciBhbmQgc2l6ZSBvZiBkYXRhIGJsb2NrcyB1c2VkIGJ5IHRoaXMgdmVyc2lvbiBhbmQKCSAgICAgICAgLy8gZXJyb3IgY29ycmVjdGlvbiBsZXZlbAoJICAgICAgICB2YXIgZWNCbG9ja3MgPSB2ZXJzaW9uLmdldEVDQmxvY2tzRm9yTGV2ZWwoZWNMZXZlbCk7CgkgICAgICAgIC8vIEZpcnN0IGNvdW50IHRoZSB0b3RhbCBudW1iZXIgb2YgZGF0YSBibG9ja3MKCSAgICAgICAgdmFyIHRvdGFsQmxvY2tzID0gMDsKCSAgICAgICAgdmFyIGVjQmxvY2tBcnJheSA9IGVjQmxvY2tzLmdldEVDQmxvY2tzKCk7CgkgICAgICAgIHRyeSB7CgkgICAgICAgICAgICBmb3IgKHZhciBlY0Jsb2NrQXJyYXlfMSA9IF9fdmFsdWVzJDMoZWNCbG9ja0FycmF5KSwgZWNCbG9ja0FycmF5XzFfMSA9IGVjQmxvY2tBcnJheV8xLm5leHQoKTsgIWVjQmxvY2tBcnJheV8xXzEuZG9uZTsgZWNCbG9ja0FycmF5XzFfMSA9IGVjQmxvY2tBcnJheV8xLm5leHQoKSkgewoJICAgICAgICAgICAgICAgIHZhciBlY0Jsb2NrID0gZWNCbG9ja0FycmF5XzFfMS52YWx1ZTsKCSAgICAgICAgICAgICAgICB0b3RhbEJsb2NrcyArPSBlY0Jsb2NrLmdldENvdW50KCk7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH0KCSAgICAgICAgZmluYWxseSB7CgkgICAgICAgICAgICB0cnkgewoJICAgICAgICAgICAgICAgIGlmIChlY0Jsb2NrQXJyYXlfMV8xICYmICFlY0Jsb2NrQXJyYXlfMV8xLmRvbmUgJiYgKF9hID0gZWNCbG9ja0FycmF5XzEucmV0dXJuKSkgX2EuY2FsbChlY0Jsb2NrQXJyYXlfMSk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9CgkgICAgICAgIH0KCSAgICAgICAgLy8gTm93IGVzdGFibGlzaCBEYXRhQmxvY2tzIG9mIHRoZSBhcHByb3ByaWF0ZSBzaXplIGFuZCBudW1iZXIgb2YgZGF0YSBjb2Rld29yZHMKCSAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh0b3RhbEJsb2Nrcyk7CgkgICAgICAgIHZhciBudW1SZXN1bHRCbG9ja3MgPSAwOwoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgZm9yICh2YXIgZWNCbG9ja0FycmF5XzIgPSBfX3ZhbHVlcyQzKGVjQmxvY2tBcnJheSksIGVjQmxvY2tBcnJheV8yXzEgPSBlY0Jsb2NrQXJyYXlfMi5uZXh0KCk7ICFlY0Jsb2NrQXJyYXlfMl8xLmRvbmU7IGVjQmxvY2tBcnJheV8yXzEgPSBlY0Jsb2NrQXJyYXlfMi5uZXh0KCkpIHsKCSAgICAgICAgICAgICAgICB2YXIgZWNCbG9jayA9IGVjQmxvY2tBcnJheV8yXzEudmFsdWU7CgkgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlY0Jsb2NrLmdldENvdW50KCk7IGkrKykgewoJICAgICAgICAgICAgICAgICAgICB2YXIgbnVtRGF0YUNvZGV3b3JkcyA9IGVjQmxvY2suZ2V0RGF0YUNvZGV3b3JkcygpOwoJICAgICAgICAgICAgICAgICAgICB2YXIgbnVtQmxvY2tDb2Rld29yZHMgPSBlY0Jsb2Nrcy5nZXRFQ0NvZGV3b3Jkc1BlckJsb2NrKCkgKyBudW1EYXRhQ29kZXdvcmRzOwoJICAgICAgICAgICAgICAgICAgICByZXN1bHRbbnVtUmVzdWx0QmxvY2tzKytdID0gbmV3IERhdGFCbG9jayhudW1EYXRhQ29kZXdvcmRzLCBuZXcgVWludDhBcnJheShudW1CbG9ja0NvZGV3b3JkcykpOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfQoJICAgICAgICBmaW5hbGx5IHsKCSAgICAgICAgICAgIHRyeSB7CgkgICAgICAgICAgICAgICAgaWYgKGVjQmxvY2tBcnJheV8yXzEgJiYgIWVjQmxvY2tBcnJheV8yXzEuZG9uZSAmJiAoX2IgPSBlY0Jsb2NrQXJyYXlfMi5yZXR1cm4pKSBfYi5jYWxsKGVjQmxvY2tBcnJheV8yKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH0KCSAgICAgICAgfQoJICAgICAgICAvLyBBbGwgYmxvY2tzIGhhdmUgdGhlIHNhbWUgYW1vdW50IG9mIGRhdGEsIGV4Y2VwdCB0aGF0IHRoZSBsYXN0IG4KCSAgICAgICAgLy8gKHdoZXJlIG4gbWF5IGJlIDApIGhhdmUgMSBtb3JlIGJ5dGUuIEZpZ3VyZSBvdXQgd2hlcmUgdGhlc2Ugc3RhcnQuCgkgICAgICAgIHZhciBzaG9ydGVyQmxvY2tzVG90YWxDb2Rld29yZHMgPSByZXN1bHRbMF0uY29kZXdvcmRzLmxlbmd0aDsKCSAgICAgICAgdmFyIGxvbmdlckJsb2Nrc1N0YXJ0QXQgPSByZXN1bHQubGVuZ3RoIC0gMTsKCSAgICAgICAgLy8gVFlQRVNDUklQVFBPUlQ6IGNoZWNrIGxlbmd0aCBpcyBjb3JyZWN0IGhlcmUKCSAgICAgICAgd2hpbGUgKGxvbmdlckJsb2Nrc1N0YXJ0QXQgPj0gMCkgewoJICAgICAgICAgICAgdmFyIG51bUNvZGV3b3JkcyA9IHJlc3VsdFtsb25nZXJCbG9ja3NTdGFydEF0XS5jb2Rld29yZHMubGVuZ3RoOwoJICAgICAgICAgICAgaWYgKG51bUNvZGV3b3JkcyA9PT0gc2hvcnRlckJsb2Nrc1RvdGFsQ29kZXdvcmRzKSB7CgkgICAgICAgICAgICAgICAgYnJlYWs7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBsb25nZXJCbG9ja3NTdGFydEF0LS07CgkgICAgICAgIH0KCSAgICAgICAgbG9uZ2VyQmxvY2tzU3RhcnRBdCsrOwoJICAgICAgICB2YXIgc2hvcnRlckJsb2Nrc051bURhdGFDb2Rld29yZHMgPSBzaG9ydGVyQmxvY2tzVG90YWxDb2Rld29yZHMgLSBlY0Jsb2Nrcy5nZXRFQ0NvZGV3b3Jkc1BlckJsb2NrKCk7CgkgICAgICAgIC8vIFRoZSBsYXN0IGVsZW1lbnRzIG9mIHJlc3VsdCBtYXkgYmUgMSBlbGVtZW50IGxvbmdlcgoJICAgICAgICAvLyBmaXJzdCBmaWxsIG91dCBhcyBtYW55IGVsZW1lbnRzIGFzIGFsbCBvZiB0aGVtIGhhdmUKCSAgICAgICAgdmFyIHJhd0NvZGV3b3Jkc09mZnNldCA9IDA7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hvcnRlckJsb2Nrc051bURhdGFDb2Rld29yZHM7IGkrKykgewoJICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBudW1SZXN1bHRCbG9ja3M7IGorKykgewoJICAgICAgICAgICAgICAgIHJlc3VsdFtqXS5jb2Rld29yZHNbaV0gPSByYXdDb2Rld29yZHNbcmF3Q29kZXdvcmRzT2Zmc2V0KytdOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIC8vIEZpbGwgb3V0IHRoZSBsYXN0IGRhdGEgYmxvY2sgaW4gdGhlIGxvbmdlciBvbmVzCgkgICAgICAgIGZvciAodmFyIGogPSBsb25nZXJCbG9ja3NTdGFydEF0OyBqIDwgbnVtUmVzdWx0QmxvY2tzOyBqKyspIHsKCSAgICAgICAgICAgIHJlc3VsdFtqXS5jb2Rld29yZHNbc2hvcnRlckJsb2Nrc051bURhdGFDb2Rld29yZHNdID0gcmF3Q29kZXdvcmRzW3Jhd0NvZGV3b3Jkc09mZnNldCsrXTsKCSAgICAgICAgfQoJICAgICAgICAvLyBOb3cgYWRkIGluIGVycm9yIGNvcnJlY3Rpb24gYmxvY2tzCgkgICAgICAgIHZhciBtYXggPSByZXN1bHRbMF0uY29kZXdvcmRzLmxlbmd0aDsKCSAgICAgICAgZm9yICh2YXIgaSA9IHNob3J0ZXJCbG9ja3NOdW1EYXRhQ29kZXdvcmRzOyBpIDwgbWF4OyBpKyspIHsKCSAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbnVtUmVzdWx0QmxvY2tzOyBqKyspIHsKCSAgICAgICAgICAgICAgICB2YXIgaU9mZnNldCA9IGogPCBsb25nZXJCbG9ja3NTdGFydEF0ID8gaSA6IGkgKyAxOwoJICAgICAgICAgICAgICAgIHJlc3VsdFtqXS5jb2Rld29yZHNbaU9mZnNldF0gPSByYXdDb2Rld29yZHNbcmF3Q29kZXdvcmRzT2Zmc2V0KytdOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHJldHVybiByZXN1bHQ7CgkgICAgfTsKCSAgICBEYXRhQmxvY2sucHJvdG90eXBlLmdldE51bURhdGFDb2Rld29yZHMgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLm51bURhdGFDb2Rld29yZHM7CgkgICAgfTsKCSAgICBEYXRhQmxvY2sucHJvdG90eXBlLmdldENvZGV3b3JkcyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuY29kZXdvcmRzOwoJICAgIH07CgkgICAgcmV0dXJuIERhdGFCbG9jazsKCX0oKSk7CglEYXRhQmxvY2skMS5kZWZhdWx0ID0gRGF0YUJsb2NrOwoKCXZhciBEZWNvZGVkQml0U3RyZWFtUGFyc2VyJDEgPSB7fTsKCgl2YXIgQml0U291cmNlJDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpdFNvdXJjZSQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7CgkvKm5hbWVzcGFjZSBjb20uZ29vZ2xlLnp4aW5nLmNvbW1vbiB7Ki8KCXZhciBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMSA9IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiA8cD5UaGlzIHByb3ZpZGVzIGFuIGVhc3kgYWJzdHJhY3Rpb24gdG8gcmVhZCBiaXRzIGF0IGEgdGltZSBmcm9tIGEgc2VxdWVuY2Ugb2YgYnl0ZXMsIHdoZXJlIHRoZQoJICogbnVtYmVyIG9mIGJpdHMgcmVhZCBpcyBub3Qgb2Z0ZW4gYSBtdWx0aXBsZSBvZiA4LjwvcD4KCSAqCgkgKiA8cD5UaGlzIGNsYXNzIGlzIHRocmVhZC1zYWZlIGJ1dCBub3QgcmVlbnRyYW50IC0tIHVubGVzcyB0aGUgY2FsbGVyIG1vZGlmaWVzIHRoZSBieXRlcyBhcnJheQoJICogaXQgcGFzc2VkIGluLCBpbiB3aGljaCBjYXNlIGFsbCBiZXRzIGFyZSBvZmYuPC9wPgoJICoKCSAqIEBhdXRob3IgU2VhbiBPd2VuCgkgKi8KCXZhciBCaXRTb3VyY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgLyoqCgkgICAgICogQHBhcmFtIGJ5dGVzIGJ5dGVzIGZyb20gd2hpY2ggdGhpcyB3aWxsIHJlYWQgYml0cy4gQml0cyB3aWxsIGJlIHJlYWQgZnJvbSB0aGUgZmlyc3QgYnl0ZSBmaXJzdC4KCSAgICAgKiBCaXRzIGFyZSByZWFkIHdpdGhpbiBhIGJ5dGUgZnJvbSBtb3N0LXNpZ25pZmljYW50IHRvIGxlYXN0LXNpZ25pZmljYW50IGJpdC4KCSAgICAgKi8KCSAgICBmdW5jdGlvbiBCaXRTb3VyY2UoYnl0ZXMpIHsKCSAgICAgICAgdGhpcy5ieXRlcyA9IGJ5dGVzOwoJICAgICAgICB0aGlzLmJ5dGVPZmZzZXQgPSAwOwoJICAgICAgICB0aGlzLmJpdE9mZnNldCA9IDA7CgkgICAgfQoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gaW5kZXggb2YgbmV4dCBiaXQgaW4gY3VycmVudCBieXRlIHdoaWNoIHdvdWxkIGJlIHJlYWQgYnkgdGhlIG5leHQgY2FsbCB0byB7QGxpbmsgI3JlYWRCaXRzKGludCl9LgoJICAgICAqLwoJICAgIEJpdFNvdXJjZS5wcm90b3R5cGUuZ2V0Qml0T2Zmc2V0ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5iaXRPZmZzZXQ7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIGluZGV4IG9mIG5leHQgYnl0ZSBpbiBpbnB1dCBieXRlIGFycmF5IHdoaWNoIHdvdWxkIGJlIHJlYWQgYnkgdGhlIG5leHQgY2FsbCB0byB7QGxpbmsgI3JlYWRCaXRzKGludCl9LgoJICAgICAqLwoJICAgIEJpdFNvdXJjZS5wcm90b3R5cGUuZ2V0Qnl0ZU9mZnNldCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuYnl0ZU9mZnNldDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEBwYXJhbSBudW1CaXRzIG51bWJlciBvZiBiaXRzIHRvIHJlYWQKCSAgICAgKiBAcmV0dXJuIGludCByZXByZXNlbnRpbmcgdGhlIGJpdHMgcmVhZC4gVGhlIGJpdHMgd2lsbCBhcHBlYXIgYXMgdGhlIGxlYXN0LXNpZ25pZmljYW50CgkgICAgICogICAgICAgICBiaXRzIG9mIHRoZSBpbnQKCSAgICAgKiBAdGhyb3dzIElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiBpZiBudW1CaXRzIGlzbid0IGluIFsxLDMyXSBvciBtb3JlIHRoYW4gaXMgYXZhaWxhYmxlCgkgICAgICovCgkgICAgQml0U291cmNlLnByb3RvdHlwZS5yZWFkQml0cyA9IGZ1bmN0aW9uIChudW1CaXRzIC8qaW50Ki8pIHsKCSAgICAgICAgaWYgKG51bUJpdHMgPCAxIHx8IG51bUJpdHMgPiAzMiB8fCBudW1CaXRzID4gdGhpcy5hdmFpbGFibGUoKSkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xLmRlZmF1bHQoJycgKyBudW1CaXRzKTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgcmVzdWx0ID0gMDsKCSAgICAgICAgdmFyIGJpdE9mZnNldCA9IHRoaXMuYml0T2Zmc2V0OwoJICAgICAgICB2YXIgYnl0ZU9mZnNldCA9IHRoaXMuYnl0ZU9mZnNldDsKCSAgICAgICAgdmFyIGJ5dGVzID0gdGhpcy5ieXRlczsKCSAgICAgICAgLy8gRmlyc3QsIHJlYWQgcmVtYWluZGVyIGZyb20gY3VycmVudCBieXRlCgkgICAgICAgIGlmIChiaXRPZmZzZXQgPiAwKSB7CgkgICAgICAgICAgICB2YXIgYml0c0xlZnQgPSA4IC0gYml0T2Zmc2V0OwoJICAgICAgICAgICAgdmFyIHRvUmVhZCA9IG51bUJpdHMgPCBiaXRzTGVmdCA/IG51bUJpdHMgOiBiaXRzTGVmdDsKCSAgICAgICAgICAgIHZhciBiaXRzVG9Ob3RSZWFkID0gYml0c0xlZnQgLSB0b1JlYWQ7CgkgICAgICAgICAgICB2YXIgbWFzayA9ICgweEZGID4+ICg4IC0gdG9SZWFkKSkgPDwgYml0c1RvTm90UmVhZDsKCSAgICAgICAgICAgIHJlc3VsdCA9IChieXRlc1tieXRlT2Zmc2V0XSAmIG1hc2spID4+IGJpdHNUb05vdFJlYWQ7CgkgICAgICAgICAgICBudW1CaXRzIC09IHRvUmVhZDsKCSAgICAgICAgICAgIGJpdE9mZnNldCArPSB0b1JlYWQ7CgkgICAgICAgICAgICBpZiAoYml0T2Zmc2V0ID09PSA4KSB7CgkgICAgICAgICAgICAgICAgYml0T2Zmc2V0ID0gMDsKCSAgICAgICAgICAgICAgICBieXRlT2Zmc2V0Kys7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgLy8gTmV4dCByZWFkIHdob2xlIGJ5dGVzCgkgICAgICAgIGlmIChudW1CaXRzID4gMCkgewoJICAgICAgICAgICAgd2hpbGUgKG51bUJpdHMgPj0gOCkgewoJICAgICAgICAgICAgICAgIHJlc3VsdCA9IChyZXN1bHQgPDwgOCkgfCAoYnl0ZXNbYnl0ZU9mZnNldF0gJiAweEZGKTsKCSAgICAgICAgICAgICAgICBieXRlT2Zmc2V0Kys7CgkgICAgICAgICAgICAgICAgbnVtQml0cyAtPSA4OwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgLy8gRmluYWxseSByZWFkIGEgcGFydGlhbCBieXRlCgkgICAgICAgICAgICBpZiAobnVtQml0cyA+IDApIHsKCSAgICAgICAgICAgICAgICB2YXIgYml0c1RvTm90UmVhZCA9IDggLSBudW1CaXRzOwoJICAgICAgICAgICAgICAgIHZhciBtYXNrID0gKDB4RkYgPj4gYml0c1RvTm90UmVhZCkgPDwgYml0c1RvTm90UmVhZDsKCSAgICAgICAgICAgICAgICByZXN1bHQgPSAocmVzdWx0IDw8IG51bUJpdHMpIHwgKChieXRlc1tieXRlT2Zmc2V0XSAmIG1hc2spID4+IGJpdHNUb05vdFJlYWQpOwoJICAgICAgICAgICAgICAgIGJpdE9mZnNldCArPSBudW1CaXRzOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHRoaXMuYml0T2Zmc2V0ID0gYml0T2Zmc2V0OwoJICAgICAgICB0aGlzLmJ5dGVPZmZzZXQgPSBieXRlT2Zmc2V0OwoJICAgICAgICByZXR1cm4gcmVzdWx0OwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiBudW1iZXIgb2YgYml0cyB0aGF0IGNhbiBiZSByZWFkIHN1Y2Nlc3NmdWxseQoJICAgICAqLwoJICAgIEJpdFNvdXJjZS5wcm90b3R5cGUuYXZhaWxhYmxlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gOCAqICh0aGlzLmJ5dGVzLmxlbmd0aCAtIHRoaXMuYnl0ZU9mZnNldCkgLSB0aGlzLmJpdE9mZnNldDsKCSAgICB9OwoJICAgIHJldHVybiBCaXRTb3VyY2U7Cgl9KCkpOwoJQml0U291cmNlJDEuZGVmYXVsdCA9IEJpdFNvdXJjZTsKCgl2YXIgRGVjb2RlclJlc3VsdCQxID0ge307CgoJLyoKCSAqIENvcHlyaWdodCAyMDA3IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShEZWNvZGVyUmVzdWx0JDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcuY29tbW9uIHsqLwoJLyppbXBvcnQgamF2YS51dGlsLkxpc3Q7Ki8KCS8qKgoJICogPHA+RW5jYXBzdWxhdGVzIHRoZSByZXN1bHQgb2YgZGVjb2RpbmcgYSBtYXRyaXggb2YgYml0cy4gVGhpcyB0eXBpY2FsbHkKCSAqIGFwcGxpZXMgdG8gMkQgYmFyY29kZSBmb3JtYXRzLiBGb3Igbm93IGl0IGNvbnRhaW5zIHRoZSByYXcgYnl0ZXMgb2J0YWluZWQsCgkgKiBhcyB3ZWxsIGFzIGEgU3RyaW5nIGludGVycHJldGF0aW9uIG9mIHRob3NlIGJ5dGVzLCBpZiBhcHBsaWNhYmxlLjwvcD4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICovCgl2YXIgRGVjb2RlclJlc3VsdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICAvLyBwdWJsaWMgY29uc3RydWN0b3IocmF3Qnl0ZXM6IFVpbnQ4QXJyYXksCgkgICAgLy8gICAgICAgICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLAoJICAgIC8vICAgICAgICAgICAgICAgICAgICAgIExpc3Q8VWludDhBcnJheT4gYnl0ZVNlZ21lbnRzLAoJICAgIC8vICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyBlY0xldmVsKSB7CgkgICAgLy8gICB0aGlzKHJhd0J5dGVzLCB0ZXh0LCBieXRlU2VnbWVudHMsIGVjTGV2ZWwsIC0xLCAtMSkKCSAgICAvLyB9CgkgICAgZnVuY3Rpb24gRGVjb2RlclJlc3VsdChyYXdCeXRlcywgdGV4dCwgYnl0ZVNlZ21lbnRzLCBlY0xldmVsLCBzdHJ1Y3R1cmVkQXBwZW5kU2VxdWVuY2VOdW1iZXIsIHN0cnVjdHVyZWRBcHBlbmRQYXJpdHkpIHsKCSAgICAgICAgaWYgKHN0cnVjdHVyZWRBcHBlbmRTZXF1ZW5jZU51bWJlciA9PT0gdm9pZCAwKSB7IHN0cnVjdHVyZWRBcHBlbmRTZXF1ZW5jZU51bWJlciA9IC0xOyB9CgkgICAgICAgIGlmIChzdHJ1Y3R1cmVkQXBwZW5kUGFyaXR5ID09PSB2b2lkIDApIHsgc3RydWN0dXJlZEFwcGVuZFBhcml0eSA9IC0xOyB9CgkgICAgICAgIHRoaXMucmF3Qnl0ZXMgPSByYXdCeXRlczsKCSAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDsKCSAgICAgICAgdGhpcy5ieXRlU2VnbWVudHMgPSBieXRlU2VnbWVudHM7CgkgICAgICAgIHRoaXMuZWNMZXZlbCA9IGVjTGV2ZWw7CgkgICAgICAgIHRoaXMuc3RydWN0dXJlZEFwcGVuZFNlcXVlbmNlTnVtYmVyID0gc3RydWN0dXJlZEFwcGVuZFNlcXVlbmNlTnVtYmVyOwoJICAgICAgICB0aGlzLnN0cnVjdHVyZWRBcHBlbmRQYXJpdHkgPSBzdHJ1Y3R1cmVkQXBwZW5kUGFyaXR5OwoJICAgICAgICB0aGlzLm51bUJpdHMgPSAocmF3Qnl0ZXMgPT09IHVuZGVmaW5lZCB8fCByYXdCeXRlcyA9PT0gbnVsbCkgPyAwIDogOCAqIHJhd0J5dGVzLmxlbmd0aDsKCSAgICB9CgkgICAgLyoqCgkgICAgICogQHJldHVybiByYXcgYnl0ZXMgcmVwcmVzZW50aW5nIHRoZSByZXN1bHQsIG9yIHtAY29kZSBudWxsfSBpZiBub3QgYXBwbGljYWJsZQoJICAgICAqLwoJICAgIERlY29kZXJSZXN1bHQucHJvdG90eXBlLmdldFJhd0J5dGVzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5yYXdCeXRlczsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gaG93IG1hbnkgYml0cyBvZiB7QGxpbmsgI2dldFJhd0J5dGVzKCl9IGFyZSB2YWxpZDsgdHlwaWNhbGx5IDggdGltZXMgaXRzIGxlbmd0aAoJICAgICAqIEBzaW5jZSAzLjMuMAoJICAgICAqLwoJICAgIERlY29kZXJSZXN1bHQucHJvdG90eXBlLmdldE51bUJpdHMgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLm51bUJpdHM7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcGFyYW0gbnVtQml0cyBvdmVycmlkZXMgdGhlIG51bWJlciBvZiBiaXRzIHRoYXQgYXJlIHZhbGlkIGluIHtAbGluayAjZ2V0UmF3Qnl0ZXMoKX0KCSAgICAgKiBAc2luY2UgMy4zLjAKCSAgICAgKi8KCSAgICBEZWNvZGVyUmVzdWx0LnByb3RvdHlwZS5zZXROdW1CaXRzID0gZnVuY3Rpb24gKG51bUJpdHMgLyppbnQqLykgewoJICAgICAgICB0aGlzLm51bUJpdHMgPSBudW1CaXRzOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiB0ZXh0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSByZXN1bHQKCSAgICAgKi8KCSAgICBEZWNvZGVyUmVzdWx0LnByb3RvdHlwZS5nZXRUZXh0ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy50ZXh0OwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiBsaXN0IG9mIGJ5dGUgc2VnbWVudHMgaW4gdGhlIHJlc3VsdCwgb3Ige0Bjb2RlIG51bGx9IGlmIG5vdCBhcHBsaWNhYmxlCgkgICAgICovCgkgICAgRGVjb2RlclJlc3VsdC5wcm90b3R5cGUuZ2V0Qnl0ZVNlZ21lbnRzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5ieXRlU2VnbWVudHM7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIG5hbWUgb2YgZXJyb3IgY29ycmVjdGlvbiBsZXZlbCB1c2VkLCBvciB7QGNvZGUgbnVsbH0gaWYgbm90IGFwcGxpY2FibGUKCSAgICAgKi8KCSAgICBEZWNvZGVyUmVzdWx0LnByb3RvdHlwZS5nZXRFQ0xldmVsID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5lY0xldmVsOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiBudW1iZXIgb2YgZXJyb3JzIGNvcnJlY3RlZCwgb3Ige0Bjb2RlIG51bGx9IGlmIG5vdCBhcHBsaWNhYmxlCgkgICAgICovCgkgICAgRGVjb2RlclJlc3VsdC5wcm90b3R5cGUuZ2V0RXJyb3JzQ29ycmVjdGVkID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNDb3JyZWN0ZWQ7CgkgICAgfTsKCSAgICBEZWNvZGVyUmVzdWx0LnByb3RvdHlwZS5zZXRFcnJvcnNDb3JyZWN0ZWQgPSBmdW5jdGlvbiAoZXJyb3JzQ29ycmVjdGVkIC8qSW50ZWdlciovKSB7CgkgICAgICAgIHRoaXMuZXJyb3JzQ29ycmVjdGVkID0gZXJyb3JzQ29ycmVjdGVkOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiBudW1iZXIgb2YgZXJhc3VyZXMgY29ycmVjdGVkLCBvciB7QGNvZGUgbnVsbH0gaWYgbm90IGFwcGxpY2FibGUKCSAgICAgKi8KCSAgICBEZWNvZGVyUmVzdWx0LnByb3RvdHlwZS5nZXRFcmFzdXJlcyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuZXJhc3VyZXM7CgkgICAgfTsKCSAgICBEZWNvZGVyUmVzdWx0LnByb3RvdHlwZS5zZXRFcmFzdXJlcyA9IGZ1bmN0aW9uIChlcmFzdXJlcyAvKkludGVnZXIqLykgewoJICAgICAgICB0aGlzLmVyYXN1cmVzID0gZXJhc3VyZXM7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIGFyYml0cmFyeSBhZGRpdGlvbmFsIG1ldGFkYXRhCgkgICAgICovCgkgICAgRGVjb2RlclJlc3VsdC5wcm90b3R5cGUuZ2V0T3RoZXIgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLm90aGVyOwoJICAgIH07CgkgICAgRGVjb2RlclJlc3VsdC5wcm90b3R5cGUuc2V0T3RoZXIgPSBmdW5jdGlvbiAob3RoZXIpIHsKCSAgICAgICAgdGhpcy5vdGhlciA9IG90aGVyOwoJICAgIH07CgkgICAgRGVjb2RlclJlc3VsdC5wcm90b3R5cGUuaGFzU3RydWN0dXJlZEFwcGVuZCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlZEFwcGVuZFBhcml0eSA+PSAwICYmIHRoaXMuc3RydWN0dXJlZEFwcGVuZFNlcXVlbmNlTnVtYmVyID49IDA7CgkgICAgfTsKCSAgICBEZWNvZGVyUmVzdWx0LnByb3RvdHlwZS5nZXRTdHJ1Y3R1cmVkQXBwZW5kUGFyaXR5ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5zdHJ1Y3R1cmVkQXBwZW5kUGFyaXR5OwoJICAgIH07CgkgICAgRGVjb2RlclJlc3VsdC5wcm90b3R5cGUuZ2V0U3RydWN0dXJlZEFwcGVuZFNlcXVlbmNlTnVtYmVyID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5zdHJ1Y3R1cmVkQXBwZW5kU2VxdWVuY2VOdW1iZXI7CgkgICAgfTsKCSAgICByZXR1cm4gRGVjb2RlclJlc3VsdDsKCX0oKSk7CglEZWNvZGVyUmVzdWx0JDEuZGVmYXVsdCA9IERlY29kZXJSZXN1bHQ7CgoJdmFyIE1vZGUgPSB7fTsKCgkoZnVuY3Rpb24gKGV4cG9ydHMpIHsKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJZXhwb3J0cy5Nb2RlVmFsdWVzID0gdm9pZCAwOwoJdmFyIElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbl8xID0gSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uJDE7Cgl2YXIgTW9kZVZhbHVlczsKCShmdW5jdGlvbiAoTW9kZVZhbHVlcykgewoJICAgIE1vZGVWYWx1ZXNbTW9kZVZhbHVlc1siVEVSTUlOQVRPUiJdID0gMF0gPSAiVEVSTUlOQVRPUiI7CgkgICAgTW9kZVZhbHVlc1tNb2RlVmFsdWVzWyJOVU1FUklDIl0gPSAxXSA9ICJOVU1FUklDIjsKCSAgICBNb2RlVmFsdWVzW01vZGVWYWx1ZXNbIkFMUEhBTlVNRVJJQyJdID0gMl0gPSAiQUxQSEFOVU1FUklDIjsKCSAgICBNb2RlVmFsdWVzW01vZGVWYWx1ZXNbIlNUUlVDVFVSRURfQVBQRU5EIl0gPSAzXSA9ICJTVFJVQ1RVUkVEX0FQUEVORCI7CgkgICAgTW9kZVZhbHVlc1tNb2RlVmFsdWVzWyJCWVRFIl0gPSA0XSA9ICJCWVRFIjsKCSAgICBNb2RlVmFsdWVzW01vZGVWYWx1ZXNbIkVDSSJdID0gNV0gPSAiRUNJIjsKCSAgICBNb2RlVmFsdWVzW01vZGVWYWx1ZXNbIktBTkpJIl0gPSA2XSA9ICJLQU5KSSI7CgkgICAgTW9kZVZhbHVlc1tNb2RlVmFsdWVzWyJGTkMxX0ZJUlNUX1BPU0lUSU9OIl0gPSA3XSA9ICJGTkMxX0ZJUlNUX1BPU0lUSU9OIjsKCSAgICBNb2RlVmFsdWVzW01vZGVWYWx1ZXNbIkZOQzFfU0VDT05EX1BPU0lUSU9OIl0gPSA4XSA9ICJGTkMxX1NFQ09ORF9QT1NJVElPTiI7CgkgICAgLyoqIFNlZSBHQlQgMTgyODQtMjAwMDsgIkhhbnppIiBpcyBhIHRyYW5zbGl0ZXJhdGlvbiBvZiB0aGlzIG1vZGUgbmFtZS4gKi8KCSAgICBNb2RlVmFsdWVzW01vZGVWYWx1ZXNbIkhBTlpJIl0gPSA5XSA9ICJIQU5aSSI7Cgl9KShNb2RlVmFsdWVzID0gZXhwb3J0cy5Nb2RlVmFsdWVzIHx8IChleHBvcnRzLk1vZGVWYWx1ZXMgPSB7fSkpOwoJLyoqCgkgKiA8cD5TZWUgSVNPIDE4MDA0OjIwMDYsIDYuNC4xLCBUYWJsZXMgMiBhbmQgMy4gVGhpcyBlbnVtIGVuY2Fwc3VsYXRlcyB0aGUgdmFyaW91cyBtb2RlcyBpbiB3aGljaAoJICogZGF0YSBjYW4gYmUgZW5jb2RlZCB0byBiaXRzIGluIHRoZSBRUiBjb2RlIHN0YW5kYXJkLjwvcD4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICovCgl2YXIgTW9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBNb2RlKHZhbHVlLCBzdHJpbmdWYWx1ZSwgY2hhcmFjdGVyQ291bnRCaXRzRm9yVmVyc2lvbnMsIGJpdHMgLyppbnQqLykgewoJICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7CgkgICAgICAgIHRoaXMuc3RyaW5nVmFsdWUgPSBzdHJpbmdWYWx1ZTsKCSAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudEJpdHNGb3JWZXJzaW9ucyA9IGNoYXJhY3RlckNvdW50Qml0c0ZvclZlcnNpb25zOwoJICAgICAgICB0aGlzLmJpdHMgPSBiaXRzOwoJICAgICAgICBNb2RlLkZPUl9CSVRTLnNldChiaXRzLCB0aGlzKTsKCSAgICAgICAgTW9kZS5GT1JfVkFMVUUuc2V0KHZhbHVlLCB0aGlzKTsKCSAgICB9CgkgICAgLyoqCgkgICAgICogQHBhcmFtIGJpdHMgZm91ciBiaXRzIGVuY29kaW5nIGEgUVIgQ29kZSBkYXRhIG1vZGUKCSAgICAgKiBAcmV0dXJuIE1vZGUgZW5jb2RlZCBieSB0aGVzZSBiaXRzCgkgICAgICogQHRocm93cyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24gaWYgYml0cyBkbyBub3QgY29ycmVzcG9uZCB0byBhIGtub3duIG1vZGUKCSAgICAgKi8KCSAgICBNb2RlLmZvckJpdHMgPSBmdW5jdGlvbiAoYml0cyAvKmludCovKSB7CgkgICAgICAgIHZhciBtb2RlID0gTW9kZS5GT1JfQklUUy5nZXQoYml0cyk7CgkgICAgICAgIGlmICh1bmRlZmluZWQgPT09IG1vZGUpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIG1vZGU7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcGFyYW0gdmVyc2lvbiB2ZXJzaW9uIGluIHF1ZXN0aW9uCgkgICAgICogQHJldHVybiBudW1iZXIgb2YgYml0cyB1c2VkLCBpbiB0aGlzIFFSIENvZGUgc3ltYm9sIHtAbGluayBWZXJzaW9ufSwgdG8gZW5jb2RlIHRoZQoJICAgICAqICAgICAgICAgY291bnQgb2YgY2hhcmFjdGVycyB0aGF0IHdpbGwgZm9sbG93IGVuY29kZWQgaW4gdGhpcyBNb2RlCgkgICAgICovCgkgICAgTW9kZS5wcm90b3R5cGUuZ2V0Q2hhcmFjdGVyQ291bnRCaXRzID0gZnVuY3Rpb24gKHZlcnNpb24pIHsKCSAgICAgICAgdmFyIHZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uLmdldFZlcnNpb25OdW1iZXIoKTsKCSAgICAgICAgdmFyIG9mZnNldDsKCSAgICAgICAgaWYgKHZlcnNpb25OdW1iZXIgPD0gOSkgewoJICAgICAgICAgICAgb2Zmc2V0ID0gMDsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIGlmICh2ZXJzaW9uTnVtYmVyIDw9IDI2KSB7CgkgICAgICAgICAgICBvZmZzZXQgPSAxOwoJICAgICAgICB9CgkgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgb2Zmc2V0ID0gMjsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJDb3VudEJpdHNGb3JWZXJzaW9uc1tvZmZzZXRdOwoJICAgIH07CgkgICAgTW9kZS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLnZhbHVlOwoJICAgIH07CgkgICAgTW9kZS5wcm90b3R5cGUuZ2V0Qml0cyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuYml0czsKCSAgICB9OwoJICAgIE1vZGUucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChvKSB7CgkgICAgICAgIGlmICghKG8gaW5zdGFuY2VvZiBNb2RlKSkgewoJICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9CgkgICAgICAgIHZhciBvdGhlciA9IG87CgkgICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZTsKCSAgICB9OwoJICAgIE1vZGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdWYWx1ZTsKCSAgICB9OwoJICAgIE1vZGUuRk9SX0JJVFMgPSBuZXcgTWFwKCk7CgkgICAgTW9kZS5GT1JfVkFMVUUgPSBuZXcgTWFwKCk7CgkgICAgTW9kZS5URVJNSU5BVE9SID0gbmV3IE1vZGUoTW9kZVZhbHVlcy5URVJNSU5BVE9SLCAnVEVSTUlOQVRPUicsIEludDMyQXJyYXkuZnJvbShbMCwgMCwgMF0pLCAweDAwKTsgLy8gTm90IHJlYWxseSBhIG1vZGUuLi4KCSAgICBNb2RlLk5VTUVSSUMgPSBuZXcgTW9kZShNb2RlVmFsdWVzLk5VTUVSSUMsICdOVU1FUklDJywgSW50MzJBcnJheS5mcm9tKFsxMCwgMTIsIDE0XSksIDB4MDEpOwoJICAgIE1vZGUuQUxQSEFOVU1FUklDID0gbmV3IE1vZGUoTW9kZVZhbHVlcy5BTFBIQU5VTUVSSUMsICdBTFBIQU5VTUVSSUMnLCBJbnQzMkFycmF5LmZyb20oWzksIDExLCAxM10pLCAweDAyKTsKCSAgICBNb2RlLlNUUlVDVFVSRURfQVBQRU5EID0gbmV3IE1vZGUoTW9kZVZhbHVlcy5TVFJVQ1RVUkVEX0FQUEVORCwgJ1NUUlVDVFVSRURfQVBQRU5EJywgSW50MzJBcnJheS5mcm9tKFswLCAwLCAwXSksIDB4MDMpOyAvLyBOb3Qgc3VwcG9ydGVkCgkgICAgTW9kZS5CWVRFID0gbmV3IE1vZGUoTW9kZVZhbHVlcy5CWVRFLCAnQllURScsIEludDMyQXJyYXkuZnJvbShbOCwgMTYsIDE2XSksIDB4MDQpOwoJICAgIE1vZGUuRUNJID0gbmV3IE1vZGUoTW9kZVZhbHVlcy5FQ0ksICdFQ0knLCBJbnQzMkFycmF5LmZyb20oWzAsIDAsIDBdKSwgMHgwNyk7IC8vIGNoYXJhY3RlciBjb3VudHMgZG9uJ3QgYXBwbHkKCSAgICBNb2RlLktBTkpJID0gbmV3IE1vZGUoTW9kZVZhbHVlcy5LQU5KSSwgJ0tBTkpJJywgSW50MzJBcnJheS5mcm9tKFs4LCAxMCwgMTJdKSwgMHgwOCk7CgkgICAgTW9kZS5GTkMxX0ZJUlNUX1BPU0lUSU9OID0gbmV3IE1vZGUoTW9kZVZhbHVlcy5GTkMxX0ZJUlNUX1BPU0lUSU9OLCAnRk5DMV9GSVJTVF9QT1NJVElPTicsIEludDMyQXJyYXkuZnJvbShbMCwgMCwgMF0pLCAweDA1KTsKCSAgICBNb2RlLkZOQzFfU0VDT05EX1BPU0lUSU9OID0gbmV3IE1vZGUoTW9kZVZhbHVlcy5GTkMxX1NFQ09ORF9QT1NJVElPTiwgJ0ZOQzFfU0VDT05EX1BPU0lUSU9OJywgSW50MzJBcnJheS5mcm9tKFswLCAwLCAwXSksIDB4MDkpOwoJICAgIC8qKiBTZWUgR0JUIDE4Mjg0LTIwMDA7ICJIYW56aSIgaXMgYSB0cmFuc2xpdGVyYXRpb24gb2YgdGhpcyBtb2RlIG5hbWUuICovCgkgICAgTW9kZS5IQU5aSSA9IG5ldyBNb2RlKE1vZGVWYWx1ZXMuSEFOWkksICdIQU5aSScsIEludDMyQXJyYXkuZnJvbShbOCwgMTAsIDEyXSksIDB4MEQpOwoJICAgIHJldHVybiBNb2RlOwoJfSgpKTsKCWV4cG9ydHMuZGVmYXVsdCA9IE1vZGU7CgoJfShNb2RlKSk7CgoJLyoKCSAqIENvcHlyaWdodCAyMDA3IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShEZWNvZGVkQml0U3RyZWFtUGFyc2VyJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcucXJjb2RlLmRlY29kZXIgeyovCgl2YXIgQml0U291cmNlXzEgPSBCaXRTb3VyY2UkMTsKCXZhciBDaGFyYWN0ZXJTZXRFQ0lfMSA9IENoYXJhY3RlclNldEVDSTsKCXZhciBEZWNvZGVyUmVzdWx0XzEgPSBEZWNvZGVyUmVzdWx0JDE7Cgl2YXIgU3RyaW5nVXRpbHNfMSA9IFN0cmluZ1V0aWxzJDE7Cgl2YXIgRm9ybWF0RXhjZXB0aW9uXzEgPSBGb3JtYXRFeGNlcHRpb24kMTsKCXZhciBTdHJpbmdCdWlsZGVyXzEgPSBTdHJpbmdCdWlsZGVyJDE7Cgl2YXIgU3RyaW5nRW5jb2RpbmdfMSA9IFN0cmluZ0VuY29kaW5nJDE7Cgl2YXIgTW9kZV8xID0gTW9kZTsKCS8qaW1wb3J0IGphdmEuaW8uVW5zdXBwb3J0ZWRFbmNvZGluZ0V4Y2VwdGlvbjsqLwoJLyppbXBvcnQgamF2YS51dGlsLkFycmF5TGlzdDsqLwoJLyppbXBvcnQgamF2YS51dGlsLkNvbGxlY3Rpb247Ki8KCS8qaW1wb3J0IGphdmEudXRpbC5MaXN0OyovCgkvKmltcG9ydCBqYXZhLnV0aWwuTWFwOyovCgkvKioKCSAqIDxwPlFSIENvZGVzIGNhbiBlbmNvZGUgdGV4dCBhcyBiaXRzIGluIG9uZSBvZiBzZXZlcmFsIG1vZGVzLCBhbmQgY2FuIHVzZSBtdWx0aXBsZSBtb2RlcwoJICogaW4gb25lIFFSIENvZGUuIFRoaXMgY2xhc3MgZGVjb2RlcyB0aGUgYml0cyBiYWNrIGludG8gdGV4dC48L3A+CgkgKgoJICogPHA+U2VlIElTTyAxODAwNDoyMDA2LCA2LjQuMyAtIDYuNC43PC9wPgoJICoKCSAqIEBhdXRob3IgU2VhbiBPd2VuCgkgKi8KCXZhciBEZWNvZGVkQml0U3RyZWFtUGFyc2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIGZ1bmN0aW9uIERlY29kZWRCaXRTdHJlYW1QYXJzZXIoKSB7CgkgICAgfQoJICAgIERlY29kZWRCaXRTdHJlYW1QYXJzZXIuZGVjb2RlID0gZnVuY3Rpb24gKGJ5dGVzLCB2ZXJzaW9uLCBlY0xldmVsLCBoaW50cykgewoJICAgICAgICB2YXIgYml0cyA9IG5ldyBCaXRTb3VyY2VfMS5kZWZhdWx0KGJ5dGVzKTsKCSAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBTdHJpbmdCdWlsZGVyXzEuZGVmYXVsdCgpOwoJICAgICAgICB2YXIgYnl0ZVNlZ21lbnRzID0gbmV3IEFycmF5KCk7IC8vIDEKCSAgICAgICAgLy8gVFlQRVNDUklQVFBPUlQ6IEkgZG8gbm90IHVzZSBjb25zdHJ1Y3RvciB3aXRoIHNpemUgMSBhcyBpbiBvcmlnaW5hbCBKYXZhIG1lYW5zIGNhcGFjaXR5IGFuZCB0aGUgYXJyYXkgbGVuZ3RoIGlzIGNoZWNrZWQgYmVsb3cKCSAgICAgICAgdmFyIHN5bWJvbFNlcXVlbmNlID0gLTE7CgkgICAgICAgIHZhciBwYXJpdHlEYXRhID0gLTE7CgkgICAgICAgIHRyeSB7CgkgICAgICAgICAgICB2YXIgY3VycmVudENoYXJhY3RlclNldEVDSSA9IG51bGw7CgkgICAgICAgICAgICB2YXIgZmMxSW5FZmZlY3QgPSBmYWxzZTsKCSAgICAgICAgICAgIHZhciBtb2RlID0gdm9pZCAwOwoJICAgICAgICAgICAgZG8gewoJICAgICAgICAgICAgICAgIC8vIFdoaWxlIHN0aWxsIGFub3RoZXIgc2VnbWVudCB0byByZWFkLi4uCgkgICAgICAgICAgICAgICAgaWYgKGJpdHMuYXZhaWxhYmxlKCkgPCA0KSB7CgkgICAgICAgICAgICAgICAgICAgIC8vIE9LLCBhc3N1bWUgd2UncmUgZG9uZS4gUmVhbGx5LCBhIFRFUk1JTkFUT1IgbW9kZSBzaG91bGQgaGF2ZSBiZWVuIHJlY29yZGVkIGhlcmUKCSAgICAgICAgICAgICAgICAgICAgbW9kZSA9IE1vZGVfMS5kZWZhdWx0LlRFUk1JTkFUT1I7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgICAgICAgICB2YXIgbW9kZUJpdHMgPSBiaXRzLnJlYWRCaXRzKDQpOwoJICAgICAgICAgICAgICAgICAgICBtb2RlID0gTW9kZV8xLmRlZmF1bHQuZm9yQml0cyhtb2RlQml0cyk7IC8vIG1vZGUgaXMgZW5jb2RlZCBieSA0IGJpdHMKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7CgkgICAgICAgICAgICAgICAgICAgIGNhc2UgTW9kZV8xLmRlZmF1bHQuVEVSTUlOQVRPUjoKCSAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgICAgICAgICAgICBjYXNlIE1vZGVfMS5kZWZhdWx0LkZOQzFfRklSU1RfUE9TSVRJT046CgkgICAgICAgICAgICAgICAgICAgIGNhc2UgTW9kZV8xLmRlZmF1bHQuRk5DMV9TRUNPTkRfUE9TSVRJT046CgkgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBkbyBsaXR0bGUgd2l0aCBGTkMxIGV4Y2VwdCBhbHRlciB0aGUgcGFyc2VkIHJlc3VsdCBhIGJpdCBhY2NvcmRpbmcgdG8gdGhlIHNwZWMKCSAgICAgICAgICAgICAgICAgICAgICAgIGZjMUluRWZmZWN0ID0gdHJ1ZTsKCSAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgICAgICAgICAgICBjYXNlIE1vZGVfMS5kZWZhdWx0LlNUUlVDVFVSRURfQVBQRU5EOgoJICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpdHMuYXZhaWxhYmxlKCkgPCAxNikgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBGb3JtYXRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXF1ZW5jZSBudW1iZXIgYW5kIHBhcml0eSBpcyBhZGRlZCBsYXRlciB0byB0aGUgcmVzdWx0IG1ldGFkYXRhCgkgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWFkIG5leHQgOCBiaXRzIChzeW1ib2wgc2VxdWVuY2UgIykgYW5kIDggYml0cyAoZGF0YTogcGFyaXR5KSwgdGhlbiBjb250aW51ZQoJICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sU2VxdWVuY2UgPSBiaXRzLnJlYWRCaXRzKDgpOwoJICAgICAgICAgICAgICAgICAgICAgICAgcGFyaXR5RGF0YSA9IGJpdHMucmVhZEJpdHMoOCk7CgkgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgICAgICAgICAgY2FzZSBNb2RlXzEuZGVmYXVsdC5FQ0k6CgkgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3VudCBkb2Vzbid0IGFwcGx5IHRvIEVDSQoJICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gRGVjb2RlZEJpdFN0cmVhbVBhcnNlci5wYXJzZUVDSVZhbHVlKGJpdHMpOwoJICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENoYXJhY3RlclNldEVDSSA9IENoYXJhY3RlclNldEVDSV8xLmRlZmF1bHQuZ2V0Q2hhcmFjdGVyU2V0RUNJQnlWYWx1ZSh2YWx1ZSk7CgkgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENoYXJhY3RlclNldEVDSSA9PT0gbnVsbCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBGb3JtYXRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgICAgICAgICAgY2FzZSBNb2RlXzEuZGVmYXVsdC5IQU5aSToKCSAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0IGhhbmRsZSBIYW56aSBtb2RlIHdoaWNoIGRvZXMgbm90IHN0YXJ0IHdpdGggY2hhcmFjdGVyIGNvdW50CgkgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGluZXNlIG1vZGUgY29udGFpbnMgYSBzdWIgc2V0IGluZGljYXRvciByaWdodCBhZnRlciBtb2RlIGluZGljYXRvcgoJICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YnNldCA9IGJpdHMucmVhZEJpdHMoNCk7CgkgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRIYW56aSA9IGJpdHMucmVhZEJpdHMobW9kZS5nZXRDaGFyYWN0ZXJDb3VudEJpdHModmVyc2lvbikpOwoJICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnNldCA9PT0gRGVjb2RlZEJpdFN0cmVhbVBhcnNlci5HQjIzMTJfU1VCU0VUKSB7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVjb2RlZEJpdFN0cmVhbVBhcnNlci5kZWNvZGVIYW56aVNlZ21lbnQoYml0cywgcmVzdWx0LCBjb3VudEhhbnppKTsKCSAgICAgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OgoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gIk5vcm1hbCIgUVIgY29kZSBtb2RlczoKCSAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhvdyBtYW55IGNoYXJhY3RlcnMgd2lsbCBmb2xsb3csIGVuY29kZWQgaW4gdGhpcyBtb2RlPwoJICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gYml0cy5yZWFkQml0cyhtb2RlLmdldENoYXJhY3RlckNvdW50Qml0cyh2ZXJzaW9uKSk7CgkgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1vZGVfMS5kZWZhdWx0Lk5VTUVSSUM6CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlY29kZWRCaXRTdHJlYW1QYXJzZXIuZGVjb2RlTnVtZXJpY1NlZ21lbnQoYml0cywgcmVzdWx0LCBjb3VudCk7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTW9kZV8xLmRlZmF1bHQuQUxQSEFOVU1FUklDOgoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWNvZGVkQml0U3RyZWFtUGFyc2VyLmRlY29kZUFscGhhbnVtZXJpY1NlZ21lbnQoYml0cywgcmVzdWx0LCBjb3VudCwgZmMxSW5FZmZlY3QpOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1vZGVfMS5kZWZhdWx0LkJZVEU6CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlY29kZWRCaXRTdHJlYW1QYXJzZXIuZGVjb2RlQnl0ZVNlZ21lbnQoYml0cywgcmVzdWx0LCBjb3VudCwgY3VycmVudENoYXJhY3RlclNldEVDSSwgYnl0ZVNlZ21lbnRzLCBoaW50cyk7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTW9kZV8xLmRlZmF1bHQuS0FOSkk6CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlY29kZWRCaXRTdHJlYW1QYXJzZXIuZGVjb2RlS2FuamlTZWdtZW50KGJpdHMsIHJlc3VsdCwgY291bnQpOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OgoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdCgpOwoJICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfSB3aGlsZSAobW9kZSAhPT0gTW9kZV8xLmRlZmF1bHQuVEVSTUlOQVRPUik7CgkgICAgICAgIH0KCSAgICAgICAgY2F0Y2ggKGlhZSAvKjogSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uKi8pIHsKCSAgICAgICAgICAgIC8vIGZyb20gcmVhZEJpdHMoKSBjYWxscwoJICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xLmRlZmF1bHQoKTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gbmV3IERlY29kZXJSZXN1bHRfMS5kZWZhdWx0KGJ5dGVzLCByZXN1bHQudG9TdHJpbmcoKSwgYnl0ZVNlZ21lbnRzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBieXRlU2VnbWVudHMsIGVjTGV2ZWwgPT09IG51bGwgPyBudWxsIDogZWNMZXZlbC50b1N0cmluZygpLCBzeW1ib2xTZXF1ZW5jZSwgcGFyaXR5RGF0YSk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBTZWUgc3BlY2lmaWNhdGlvbiBHQlQgMTgyODQtMjAwMAoJICAgICAqLwoJICAgIERlY29kZWRCaXRTdHJlYW1QYXJzZXIuZGVjb2RlSGFuemlTZWdtZW50ID0gZnVuY3Rpb24gKGJpdHMsIHJlc3VsdCwgY291bnQgLyppbnQqLykgewoJICAgICAgICAvLyBEb24ndCBjcmFzaCB0cnlpbmcgdG8gcmVhZCBtb3JlIGJpdHMgdGhhbiB3ZSBoYXZlIGF2YWlsYWJsZS4KCSAgICAgICAgaWYgKGNvdW50ICogMTMgPiBiaXRzLmF2YWlsYWJsZSgpKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdCgpOwoJICAgICAgICB9CgkgICAgICAgIC8vIEVhY2ggY2hhcmFjdGVyIHdpbGwgcmVxdWlyZSAyIGJ5dGVzLiBSZWFkIHRoZSBjaGFyYWN0ZXJzIGFzIDItYnl0ZSBwYWlycwoJICAgICAgICAvLyBhbmQgZGVjb2RlIGFzIEdCMjMxMiBhZnRlcndhcmRzCgkgICAgICAgIHZhciBidWZmZXIgPSBuZXcgVWludDhBcnJheSgyICogY291bnQpOwoJICAgICAgICB2YXIgb2Zmc2V0ID0gMDsKCSAgICAgICAgd2hpbGUgKGNvdW50ID4gMCkgewoJICAgICAgICAgICAgLy8gRWFjaCAxMyBiaXRzIGVuY29kZXMgYSAyLWJ5dGUgY2hhcmFjdGVyCgkgICAgICAgICAgICB2YXIgdHdvQnl0ZXMgPSBiaXRzLnJlYWRCaXRzKDEzKTsKCSAgICAgICAgICAgIHZhciBhc3NlbWJsZWRUd29CeXRlcyA9ICgoKHR3b0J5dGVzIC8gMHgwNjApIDw8IDgpICYgMHhGRkZGRkZGRikgfCAodHdvQnl0ZXMgJSAweDA2MCk7CgkgICAgICAgICAgICBpZiAoYXNzZW1ibGVkVHdvQnl0ZXMgPCAweDAwM0JGKSB7CgkgICAgICAgICAgICAgICAgLy8gSW4gdGhlIDB4QTFBMSB0byAweEFBRkUgcmFuZ2UKCSAgICAgICAgICAgICAgICBhc3NlbWJsZWRUd29CeXRlcyArPSAweDBBMUExOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgLy8gSW4gdGhlIDB4QjBBMSB0byAweEZBRkUgcmFuZ2UKCSAgICAgICAgICAgICAgICBhc3NlbWJsZWRUd29CeXRlcyArPSAweDBBNkExOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgYnVmZmVyW29mZnNldF0gPSAvKihieXRlKSAqLyAoKGFzc2VtYmxlZFR3b0J5dGVzID4+IDgpICYgMHhGRik7CgkgICAgICAgICAgICBidWZmZXJbb2Zmc2V0ICsgMV0gPSAvKihieXRlKSAqLyAoYXNzZW1ibGVkVHdvQnl0ZXMgJiAweEZGKTsKCSAgICAgICAgICAgIG9mZnNldCArPSAyOwoJICAgICAgICAgICAgY291bnQtLTsKCSAgICAgICAgfQoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgcmVzdWx0LmFwcGVuZChTdHJpbmdFbmNvZGluZ18xLmRlZmF1bHQuZGVjb2RlKGJ1ZmZlciwgU3RyaW5nVXRpbHNfMS5kZWZhdWx0LkdCMjMxMikpOwoJICAgICAgICAgICAgLy8gVFlQRVNDUklQVFBPUlQ6IFRPRE86IGltcGxlbWVudCBHQjIzMTIgZGVjb2RlLiBTdHJpbmdWaWV3IGZyb20gTUROIGNvdWxkIGJlIGEgc3RhcnRpbmcgcG9pbnQKCSAgICAgICAgfQoJICAgICAgICBjYXRjaCAoaWdub3JlZCAvKjogVW5zdXBwb3J0ZWRFbmNvZGluZ0V4Y2VwdGlvbiovKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdChpZ25vcmVkKTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgRGVjb2RlZEJpdFN0cmVhbVBhcnNlci5kZWNvZGVLYW5qaVNlZ21lbnQgPSBmdW5jdGlvbiAoYml0cywgcmVzdWx0LCBjb3VudCAvKmludCovKSB7CgkgICAgICAgIC8vIERvbid0IGNyYXNoIHRyeWluZyB0byByZWFkIG1vcmUgYml0cyB0aGFuIHdlIGhhdmUgYXZhaWxhYmxlLgoJICAgICAgICBpZiAoY291bnQgKiAxMyA+IGJpdHMuYXZhaWxhYmxlKCkpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBGb3JtYXRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgLy8gRWFjaCBjaGFyYWN0ZXIgd2lsbCByZXF1aXJlIDIgYnl0ZXMuIFJlYWQgdGhlIGNoYXJhY3RlcnMgYXMgMi1ieXRlIHBhaXJzCgkgICAgICAgIC8vIGFuZCBkZWNvZGUgYXMgU2hpZnRfSklTIGFmdGVyd2FyZHMKCSAgICAgICAgdmFyIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDIgKiBjb3VudCk7CgkgICAgICAgIHZhciBvZmZzZXQgPSAwOwoJICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7CgkgICAgICAgICAgICAvLyBFYWNoIDEzIGJpdHMgZW5jb2RlcyBhIDItYnl0ZSBjaGFyYWN0ZXIKCSAgICAgICAgICAgIHZhciB0d29CeXRlcyA9IGJpdHMucmVhZEJpdHMoMTMpOwoJICAgICAgICAgICAgdmFyIGFzc2VtYmxlZFR3b0J5dGVzID0gKCgodHdvQnl0ZXMgLyAweDBDMCkgPDwgOCkgJiAweEZGRkZGRkZGKSB8ICh0d29CeXRlcyAlIDB4MEMwKTsKCSAgICAgICAgICAgIGlmIChhc3NlbWJsZWRUd29CeXRlcyA8IDB4MDFGMDApIHsKCSAgICAgICAgICAgICAgICAvLyBJbiB0aGUgMHg4MTQwIHRvIDB4OUZGQyByYW5nZQoJICAgICAgICAgICAgICAgIGFzc2VtYmxlZFR3b0J5dGVzICs9IDB4MDgxNDA7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICAvLyBJbiB0aGUgMHhFMDQwIHRvIDB4RUJCRiByYW5nZQoJICAgICAgICAgICAgICAgIGFzc2VtYmxlZFR3b0J5dGVzICs9IDB4MEMxNDA7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBidWZmZXJbb2Zmc2V0XSA9IC8qKGJ5dGUpICovIChhc3NlbWJsZWRUd29CeXRlcyA+PiA4KTsKCSAgICAgICAgICAgIGJ1ZmZlcltvZmZzZXQgKyAxXSA9IC8qKGJ5dGUpICovIGFzc2VtYmxlZFR3b0J5dGVzOwoJICAgICAgICAgICAgb2Zmc2V0ICs9IDI7CgkgICAgICAgICAgICBjb3VudC0tOwoJICAgICAgICB9CgkgICAgICAgIC8vIFNoaWZ0X0pJUyBtYXkgbm90IGJlIHN1cHBvcnRlZCBpbiBzb21lIGVudmlyb25tZW50czoKCSAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoU3RyaW5nRW5jb2RpbmdfMS5kZWZhdWx0LmRlY29kZShidWZmZXIsIFN0cmluZ1V0aWxzXzEuZGVmYXVsdC5TSElGVF9KSVMpKTsKCSAgICAgICAgICAgIC8vIFRZUEVTQ1JJUFRQT1JUOiBUT0RPOiBpbXBsZW1lbnQgU0hJRlRfSklTIGRlY29kZS4gU3RyaW5nVmlldyBmcm9tIE1ETiBjb3VsZCBiZSBhIHN0YXJ0aW5nIHBvaW50CgkgICAgICAgIH0KCSAgICAgICAgY2F0Y2ggKGlnbm9yZWQgLyo6IFVuc3VwcG9ydGVkRW5jb2RpbmdFeGNlcHRpb24qLykgewoJICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xLmRlZmF1bHQoaWdub3JlZCk7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIERlY29kZWRCaXRTdHJlYW1QYXJzZXIuZGVjb2RlQnl0ZVNlZ21lbnQgPSBmdW5jdGlvbiAoYml0cywgcmVzdWx0LCBjb3VudCAvKmludCovLCBjdXJyZW50Q2hhcmFjdGVyU2V0RUNJLCBieXRlU2VnbWVudHMsIGhpbnRzKSB7CgkgICAgICAgIC8vIERvbid0IGNyYXNoIHRyeWluZyB0byByZWFkIG1vcmUgYml0cyB0aGFuIHdlIGhhdmUgYXZhaWxhYmxlLgoJICAgICAgICBpZiAoOCAqIGNvdW50ID4gYml0cy5hdmFpbGFibGUoKSkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xLmRlZmF1bHQoKTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgcmVhZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoY291bnQpOwoJICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHsKCSAgICAgICAgICAgIHJlYWRCeXRlc1tpXSA9IC8qKGJ5dGUpICovIGJpdHMucmVhZEJpdHMoOCk7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIGVuY29kaW5nOwoJICAgICAgICBpZiAoY3VycmVudENoYXJhY3RlclNldEVDSSA9PT0gbnVsbCkgewoJICAgICAgICAgICAgLy8gVGhlIHNwZWMgaXNuJ3QgY2xlYXIgb24gdGhpcyBtb2RlOyBzZWUKCSAgICAgICAgICAgIC8vIHNlY3Rpb24gNi40LjU6IHQgZG9lcyBub3Qgc2F5IHdoaWNoIGVuY29kaW5nIHRvIGFzc3VtaW5nCgkgICAgICAgICAgICAvLyB1cG9uIGRlY29kaW5nLiBJIGhhdmUgc2VlbiBJU08tODg1OS0xIHVzZWQgYXMgd2VsbCBhcwoJICAgICAgICAgICAgLy8gU2hpZnRfSklTIC0tIHdpdGhvdXQgYW55dGhpbmcgbGlrZSBhbiBFQ0kgZGVzaWduYXRvciB0bwoJICAgICAgICAgICAgLy8gZ2l2ZSBhIGhpbnQuCgkgICAgICAgICAgICBlbmNvZGluZyA9IFN0cmluZ1V0aWxzXzEuZGVmYXVsdC5ndWVzc0VuY29kaW5nKHJlYWRCeXRlcywgaGludHMpOwoJICAgICAgICB9CgkgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgZW5jb2RpbmcgPSBjdXJyZW50Q2hhcmFjdGVyU2V0RUNJLmdldE5hbWUoKTsKCSAgICAgICAgfQoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgcmVzdWx0LmFwcGVuZChTdHJpbmdFbmNvZGluZ18xLmRlZmF1bHQuZGVjb2RlKHJlYWRCeXRlcywgZW5jb2RpbmcpKTsKCSAgICAgICAgfQoJICAgICAgICBjYXRjaCAoaWdub3JlZCAvKjogVW5zdXBwb3J0ZWRFbmNvZGluZ0V4Y2VwdGlvbiovKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdChpZ25vcmVkKTsKCSAgICAgICAgfQoJICAgICAgICBieXRlU2VnbWVudHMucHVzaChyZWFkQnl0ZXMpOwoJICAgIH07CgkgICAgRGVjb2RlZEJpdFN0cmVhbVBhcnNlci50b0FscGhhTnVtZXJpY0NoYXIgPSBmdW5jdGlvbiAodmFsdWUgLyppbnQqLykgewoJICAgICAgICBpZiAodmFsdWUgPj0gRGVjb2RlZEJpdFN0cmVhbVBhcnNlci5BTFBIQU5VTUVSSUNfQ0hBUlMubGVuZ3RoKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdCgpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBEZWNvZGVkQml0U3RyZWFtUGFyc2VyLkFMUEhBTlVNRVJJQ19DSEFSU1t2YWx1ZV07CgkgICAgfTsKCSAgICBEZWNvZGVkQml0U3RyZWFtUGFyc2VyLmRlY29kZUFscGhhbnVtZXJpY1NlZ21lbnQgPSBmdW5jdGlvbiAoYml0cywgcmVzdWx0LCBjb3VudCAvKmludCovLCBmYzFJbkVmZmVjdCkgewoJICAgICAgICAvLyBSZWFkIHR3byBjaGFyYWN0ZXJzIGF0IGEgdGltZQoJICAgICAgICB2YXIgc3RhcnQgPSByZXN1bHQubGVuZ3RoKCk7CgkgICAgICAgIHdoaWxlIChjb3VudCA+IDEpIHsKCSAgICAgICAgICAgIGlmIChiaXRzLmF2YWlsYWJsZSgpIDwgMTEpIHsKCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdCgpOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgdmFyIG5leHRUd29DaGFyc0JpdHMgPSBiaXRzLnJlYWRCaXRzKDExKTsKCSAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoRGVjb2RlZEJpdFN0cmVhbVBhcnNlci50b0FscGhhTnVtZXJpY0NoYXIoTWF0aC5mbG9vcihuZXh0VHdvQ2hhcnNCaXRzIC8gNDUpKSk7CgkgICAgICAgICAgICByZXN1bHQuYXBwZW5kKERlY29kZWRCaXRTdHJlYW1QYXJzZXIudG9BbHBoYU51bWVyaWNDaGFyKG5leHRUd29DaGFyc0JpdHMgJSA0NSkpOwoJICAgICAgICAgICAgY291bnQgLT0gMjsKCSAgICAgICAgfQoJICAgICAgICBpZiAoY291bnQgPT09IDEpIHsKCSAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb25lIGNoYXJhY3RlciBsZWZ0CgkgICAgICAgICAgICBpZiAoYml0cy5hdmFpbGFibGUoKSA8IDYpIHsKCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdCgpOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgcmVzdWx0LmFwcGVuZChEZWNvZGVkQml0U3RyZWFtUGFyc2VyLnRvQWxwaGFOdW1lcmljQ2hhcihiaXRzLnJlYWRCaXRzKDYpKSk7CgkgICAgICAgIH0KCSAgICAgICAgLy8gU2VlIHNlY3Rpb24gNi40LjguMSwgNi40LjguMgoJICAgICAgICBpZiAoZmMxSW5FZmZlY3QpIHsKCSAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gbWFzc2FnZSB0aGUgcmVzdWx0IGEgYml0IGlmIGluIGFuIEZOQzEgbW9kZToKCSAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IHJlc3VsdC5sZW5ndGgoKTsgaSsrKSB7CgkgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jaGFyQXQoaSkgPT09ICclJykgewoJICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IHJlc3VsdC5sZW5ndGgoKSAtIDEgJiYgcmVzdWx0LmNoYXJBdChpICsgMSkgPT09ICclJykgewoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gJSUgaXMgcmVuZGVyZWQgYXMgJQoJICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRlbGV0ZUNoYXJBdChpICsgMSk7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiBhbHBoYSBtb2RlLCAlIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gRk5DMSBzZXBhcmF0b3IgMHgxRAoJICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNldENoYXJBdChpLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MUQpKTsKCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgIH07CgkgICAgRGVjb2RlZEJpdFN0cmVhbVBhcnNlci5kZWNvZGVOdW1lcmljU2VnbWVudCA9IGZ1bmN0aW9uIChiaXRzLCByZXN1bHQsIGNvdW50IC8qaW50Ki8pIHsKCSAgICAgICAgLy8gUmVhZCB0aHJlZSBkaWdpdHMgYXQgYSB0aW1lCgkgICAgICAgIHdoaWxlIChjb3VudCA+PSAzKSB7CgkgICAgICAgICAgICAvLyBFYWNoIDEwIGJpdHMgZW5jb2RlcyB0aHJlZSBkaWdpdHMKCSAgICAgICAgICAgIGlmIChiaXRzLmF2YWlsYWJsZSgpIDwgMTApIHsKCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdCgpOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgdmFyIHRocmVlRGlnaXRzQml0cyA9IGJpdHMucmVhZEJpdHMoMTApOwoJICAgICAgICAgICAgaWYgKHRocmVlRGlnaXRzQml0cyA+PSAxMDAwKSB7CgkgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xLmRlZmF1bHQoKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoRGVjb2RlZEJpdFN0cmVhbVBhcnNlci50b0FscGhhTnVtZXJpY0NoYXIoTWF0aC5mbG9vcih0aHJlZURpZ2l0c0JpdHMgLyAxMDApKSk7CgkgICAgICAgICAgICByZXN1bHQuYXBwZW5kKERlY29kZWRCaXRTdHJlYW1QYXJzZXIudG9BbHBoYU51bWVyaWNDaGFyKE1hdGguZmxvb3IodGhyZWVEaWdpdHNCaXRzIC8gMTApICUgMTApKTsKCSAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoRGVjb2RlZEJpdFN0cmVhbVBhcnNlci50b0FscGhhTnVtZXJpY0NoYXIodGhyZWVEaWdpdHNCaXRzICUgMTApKTsKCSAgICAgICAgICAgIGNvdW50IC09IDM7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGNvdW50ID09PSAyKSB7CgkgICAgICAgICAgICAvLyBUd28gZGlnaXRzIGxlZnQgb3ZlciB0byByZWFkLCBlbmNvZGVkIGluIDcgYml0cwoJICAgICAgICAgICAgaWYgKGJpdHMuYXZhaWxhYmxlKCkgPCA3KSB7CgkgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xLmRlZmF1bHQoKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHZhciB0d29EaWdpdHNCaXRzID0gYml0cy5yZWFkQml0cyg3KTsKCSAgICAgICAgICAgIGlmICh0d29EaWdpdHNCaXRzID49IDEwMCkgewoJICAgICAgICAgICAgICAgIHRocm93IG5ldyBGb3JtYXRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICByZXN1bHQuYXBwZW5kKERlY29kZWRCaXRTdHJlYW1QYXJzZXIudG9BbHBoYU51bWVyaWNDaGFyKE1hdGguZmxvb3IodHdvRGlnaXRzQml0cyAvIDEwKSkpOwoJICAgICAgICAgICAgcmVzdWx0LmFwcGVuZChEZWNvZGVkQml0U3RyZWFtUGFyc2VyLnRvQWxwaGFOdW1lcmljQ2hhcih0d29EaWdpdHNCaXRzICUgMTApKTsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIGlmIChjb3VudCA9PT0gMSkgewoJICAgICAgICAgICAgLy8gT25lIGRpZ2l0IGxlZnQgb3ZlciB0byByZWFkCgkgICAgICAgICAgICBpZiAoYml0cy5hdmFpbGFibGUoKSA8IDQpIHsKCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRm9ybWF0RXhjZXB0aW9uXzEuZGVmYXVsdCgpOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgdmFyIGRpZ2l0Qml0cyA9IGJpdHMucmVhZEJpdHMoNCk7CgkgICAgICAgICAgICBpZiAoZGlnaXRCaXRzID49IDEwKSB7CgkgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xLmRlZmF1bHQoKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHJlc3VsdC5hcHBlbmQoRGVjb2RlZEJpdFN0cmVhbVBhcnNlci50b0FscGhhTnVtZXJpY0NoYXIoZGlnaXRCaXRzKSk7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIERlY29kZWRCaXRTdHJlYW1QYXJzZXIucGFyc2VFQ0lWYWx1ZSA9IGZ1bmN0aW9uIChiaXRzKSB7CgkgICAgICAgIHZhciBmaXJzdEJ5dGUgPSBiaXRzLnJlYWRCaXRzKDgpOwoJICAgICAgICBpZiAoKGZpcnN0Qnl0ZSAmIDB4ODApID09PSAwKSB7CgkgICAgICAgICAgICAvLyBqdXN0IG9uZSBieXRlCgkgICAgICAgICAgICByZXR1cm4gZmlyc3RCeXRlICYgMHg3RjsKCSAgICAgICAgfQoJICAgICAgICBpZiAoKGZpcnN0Qnl0ZSAmIDB4QzApID09PSAweDgwKSB7CgkgICAgICAgICAgICAvLyB0d28gYnl0ZXMKCSAgICAgICAgICAgIHZhciBzZWNvbmRCeXRlID0gYml0cy5yZWFkQml0cyg4KTsKCSAgICAgICAgICAgIHJldHVybiAoKChmaXJzdEJ5dGUgJiAweDNGKSA8PCA4KSAmIDB4RkZGRkZGRkYpIHwgc2Vjb25kQnl0ZTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoKGZpcnN0Qnl0ZSAmIDB4RTApID09PSAweEMwKSB7CgkgICAgICAgICAgICAvLyB0aHJlZSBieXRlcwoJICAgICAgICAgICAgdmFyIHNlY29uZFRoaXJkQnl0ZXMgPSBiaXRzLnJlYWRCaXRzKDE2KTsKCSAgICAgICAgICAgIHJldHVybiAoKChmaXJzdEJ5dGUgJiAweDFGKSA8PCAxNikgJiAweEZGRkZGRkZGKSB8IHNlY29uZFRoaXJkQnl0ZXM7CgkgICAgICAgIH0KCSAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEV4Y2VwdGlvbl8xLmRlZmF1bHQoKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFNlZSBJU08gMTgwMDQ6MjAwNiwgNi40LjQgVGFibGUgNQoJICAgICAqLwoJICAgIERlY29kZWRCaXRTdHJlYW1QYXJzZXIuQUxQSEFOVU1FUklDX0NIQVJTID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiAkJSorLS4vOic7CgkgICAgRGVjb2RlZEJpdFN0cmVhbVBhcnNlci5HQjIzMTJfU1VCU0VUID0gMTsKCSAgICByZXR1cm4gRGVjb2RlZEJpdFN0cmVhbVBhcnNlcjsKCX0oKSk7CglEZWNvZGVkQml0U3RyZWFtUGFyc2VyJDEuZGVmYXVsdCA9IERlY29kZWRCaXRTdHJlYW1QYXJzZXI7CgoJdmFyIFFSQ29kZURlY29kZXJNZXRhRGF0YSQxID0ge307CgoJLyoKCSAqIENvcHlyaWdodCAyMDEzIFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShRUkNvZGVEZWNvZGVyTWV0YURhdGEkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLyoqCgkgKiBNZXRhLWRhdGEgY29udGFpbmVyIGZvciBRUiBDb2RlIGRlY29kaW5nLiBJbnN0YW5jZXMgb2YgdGhpcyBjbGFzcyBtYXkgYmUgdXNlZCB0byBjb252ZXkgaW5mb3JtYXRpb24gYmFjayB0byB0aGUKCSAqIGRlY29kaW5nIGNhbGxlci4gQ2FsbGVycyBhcmUgZXhwZWN0ZWQgdG8gcHJvY2VzcyB0aGlzLgoJICoKCSAqIEBzZWUgY29tLmdvb2dsZS56eGluZy5jb21tb24uRGVjb2RlclJlc3VsdCNnZXRPdGhlcigpCgkgKi8KCXZhciBRUkNvZGVEZWNvZGVyTWV0YURhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgZnVuY3Rpb24gUVJDb2RlRGVjb2Rlck1ldGFEYXRhKG1pcnJvcmVkKSB7CgkgICAgICAgIHRoaXMubWlycm9yZWQgPSBtaXJyb3JlZDsKCSAgICB9CgkgICAgLyoqCgkgICAgICogQHJldHVybiB0cnVlIGlmIHRoZSBRUiBDb2RlIHdhcyBtaXJyb3JlZC4KCSAgICAgKi8KCSAgICBRUkNvZGVEZWNvZGVyTWV0YURhdGEucHJvdG90eXBlLmlzTWlycm9yZWQgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLm1pcnJvcmVkOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQXBwbHkgdGhlIHJlc3VsdCBwb2ludHMnIG9yZGVyIGNvcnJlY3Rpb24gZHVlIHRvIG1pcnJvcmluZy4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBwb2ludHMgQXJyYXkgb2YgcG9pbnRzIHRvIGFwcGx5IG1pcnJvciBjb3JyZWN0aW9uIHRvLgoJICAgICAqLwoJICAgIFFSQ29kZURlY29kZXJNZXRhRGF0YS5wcm90b3R5cGUuYXBwbHlNaXJyb3JlZENvcnJlY3Rpb24gPSBmdW5jdGlvbiAocG9pbnRzKSB7CgkgICAgICAgIGlmICghdGhpcy5taXJyb3JlZCB8fCBwb2ludHMgPT09IG51bGwgfHwgcG9pbnRzLmxlbmd0aCA8IDMpIHsKCSAgICAgICAgICAgIHJldHVybjsKCSAgICAgICAgfQoJICAgICAgICB2YXIgYm90dG9tTGVmdCA9IHBvaW50c1swXTsKCSAgICAgICAgcG9pbnRzWzBdID0gcG9pbnRzWzJdOwoJICAgICAgICBwb2ludHNbMl0gPSBib3R0b21MZWZ0OwoJICAgICAgICAvLyBObyBuZWVkIHRvICdmaXgnIHRvcC1sZWZ0IGFuZCBhbGlnbm1lbnQgcGF0dGVybi4KCSAgICB9OwoJICAgIHJldHVybiBRUkNvZGVEZWNvZGVyTWV0YURhdGE7Cgl9KCkpOwoJUVJDb2RlRGVjb2Rlck1ldGFEYXRhJDEuZGVmYXVsdCA9IFFSQ29kZURlY29kZXJNZXRhRGF0YTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJdmFyIF9fdmFsdWVzJDIgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHsKCSAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDsKCSAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTsKCSAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09ICJudW1iZXIiKSByZXR1cm4gewoJICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7CgkgICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwOwoJICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9OwoJICAgICAgICB9CgkgICAgfTsKCSAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyAiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS4iIDogIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC4iKTsKCX07CglPYmplY3QuZGVmaW5lUHJvcGVydHkoRGVjb2RlciQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7CgkvKm5hbWVzcGFjZSBjb20uZ29vZ2xlLnp4aW5nLnFyY29kZS5kZWNvZGVyIHsqLwoJdmFyIENoZWNrc3VtRXhjZXB0aW9uXzEgPSBDaGVja3N1bUV4Y2VwdGlvbiQxOwoJdmFyIEJpdE1hdHJpeF8xJDIgPSBCaXRNYXRyaXgkMTsKCXZhciBHZW5lcmljR0ZfMSA9IEdlbmVyaWNHRiQxOwoJdmFyIFJlZWRTb2xvbW9uRGVjb2Rlcl8xID0gUmVlZFNvbG9tb25EZWNvZGVyJDE7Cgl2YXIgQml0TWF0cml4UGFyc2VyXzEgPSBCaXRNYXRyaXhQYXJzZXIkMTsKCXZhciBEYXRhQmxvY2tfMSA9IERhdGFCbG9jayQxOwoJdmFyIERlY29kZWRCaXRTdHJlYW1QYXJzZXJfMSA9IERlY29kZWRCaXRTdHJlYW1QYXJzZXIkMTsKCXZhciBRUkNvZGVEZWNvZGVyTWV0YURhdGFfMSQxID0gUVJDb2RlRGVjb2Rlck1ldGFEYXRhJDE7CgkvKmltcG9ydCBqYXZhLnV0aWwuTWFwOyovCgkvKioKCSAqIDxwPlRoZSBtYWluIGNsYXNzIHdoaWNoIGltcGxlbWVudHMgUVIgQ29kZSBkZWNvZGluZyAtLSBhcyBvcHBvc2VkIHRvIGxvY2F0aW5nIGFuZCBleHRyYWN0aW5nCgkgKiB0aGUgUVIgQ29kZSBmcm9tIGFuIGltYWdlLjwvcD4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICovCgl2YXIgRGVjb2RlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBEZWNvZGVyKCkgewoJICAgICAgICB0aGlzLnJzRGVjb2RlciA9IG5ldyBSZWVkU29sb21vbkRlY29kZXJfMS5kZWZhdWx0KEdlbmVyaWNHRl8xLmRlZmF1bHQuUVJfQ09ERV9GSUVMRF8yNTYpOwoJICAgIH0KCSAgICAvLyBwdWJsaWMgZGVjb2RlKGltYWdlOiBib29sZWFuW11bXSk6IERlY29kZXJSZXN1bHQgLyp0aHJvd3MgQ2hlY2tzdW1FeGNlcHRpb24sIEZvcm1hdEV4Y2VwdGlvbiovIHsKCSAgICAvLyAgIHJldHVybiBkZWNvZGUoaW1hZ2UsIG51bGwpCgkgICAgLy8gfQoJICAgIC8qKgoJICAgICAqIDxwPkNvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGNhbiBkZWNvZGUgYSBRUiBDb2RlIHJlcHJlc2VudGVkIGFzIGEgMkQgYXJyYXkgb2YgYm9vbGVhbnMuCgkgICAgICogInRydWUiIGlzIHRha2VuIHRvIG1lYW4gYSBibGFjayBtb2R1bGUuPC9wPgoJICAgICAqCgkgICAgICogQHBhcmFtIGltYWdlIGJvb2xlYW5zIHJlcHJlc2VudGluZyB3aGl0ZS9ibGFjayBRUiBDb2RlIG1vZHVsZXMKCSAgICAgKiBAcGFyYW0gaGludHMgZGVjb2RpbmcgaGludHMgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBpbmZsdWVuY2UgZGVjb2RpbmcKCSAgICAgKiBAcmV0dXJuIHRleHQgYW5kIGJ5dGVzIGVuY29kZWQgd2l0aGluIHRoZSBRUiBDb2RlCgkgICAgICogQHRocm93cyBGb3JtYXRFeGNlcHRpb24gaWYgdGhlIFFSIENvZGUgY2Fubm90IGJlIGRlY29kZWQKCSAgICAgKiBAdGhyb3dzIENoZWNrc3VtRXhjZXB0aW9uIGlmIGVycm9yIGNvcnJlY3Rpb24gZmFpbHMKCSAgICAgKi8KCSAgICBEZWNvZGVyLnByb3RvdHlwZS5kZWNvZGVCb29sZWFuQXJyYXkgPSBmdW5jdGlvbiAoaW1hZ2UsIGhpbnRzKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmRlY29kZUJpdE1hdHJpeChCaXRNYXRyaXhfMSQyLmRlZmF1bHQucGFyc2VGcm9tQm9vbGVhbkFycmF5KGltYWdlKSwgaGludHMpOwoJICAgIH07CgkgICAgLy8gcHVibGljIGRlY29kZUJpdE1hdHJpeChiaXRzOiBCaXRNYXRyaXgpOiBEZWNvZGVyUmVzdWx0IC8qdGhyb3dzIENoZWNrc3VtRXhjZXB0aW9uLCBGb3JtYXRFeGNlcHRpb24qLyB7CgkgICAgLy8gICByZXR1cm4gZGVjb2RlKGJpdHMsIG51bGwpCgkgICAgLy8gfQoJICAgIC8qKgoJICAgICAqIDxwPkRlY29kZXMgYSBRUiBDb2RlIHJlcHJlc2VudGVkIGFzIGEge0BsaW5rIEJpdE1hdHJpeH0uIEEgMSBvciAidHJ1ZSIgaXMgdGFrZW4gdG8gbWVhbiBhIGJsYWNrIG1vZHVsZS48L3A+CgkgICAgICoKCSAgICAgKiBAcGFyYW0gYml0cyBib29sZWFucyByZXByZXNlbnRpbmcgd2hpdGUvYmxhY2sgUVIgQ29kZSBtb2R1bGVzCgkgICAgICogQHBhcmFtIGhpbnRzIGRlY29kaW5nIGhpbnRzIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gaW5mbHVlbmNlIGRlY29kaW5nCgkgICAgICogQHJldHVybiB0ZXh0IGFuZCBieXRlcyBlbmNvZGVkIHdpdGhpbiB0aGUgUVIgQ29kZQoJICAgICAqIEB0aHJvd3MgRm9ybWF0RXhjZXB0aW9uIGlmIHRoZSBRUiBDb2RlIGNhbm5vdCBiZSBkZWNvZGVkCgkgICAgICogQHRocm93cyBDaGVja3N1bUV4Y2VwdGlvbiBpZiBlcnJvciBjb3JyZWN0aW9uIGZhaWxzCgkgICAgICovCgkgICAgRGVjb2Rlci5wcm90b3R5cGUuZGVjb2RlQml0TWF0cml4ID0gZnVuY3Rpb24gKGJpdHMsIGhpbnRzKSB7CgkgICAgICAgIC8vIENvbnN0cnVjdCBhIHBhcnNlciBhbmQgcmVhZCB2ZXJzaW9uLCBlcnJvci1jb3JyZWN0aW9uIGxldmVsCgkgICAgICAgIHZhciBwYXJzZXIgPSBuZXcgQml0TWF0cml4UGFyc2VyXzEuZGVmYXVsdChiaXRzKTsKCSAgICAgICAgdmFyIGV4ID0gbnVsbDsKCSAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZUJpdE1hdHJpeFBhcnNlcihwYXJzZXIsIGhpbnRzKTsKCSAgICAgICAgfQoJICAgICAgICBjYXRjaCAoZSAvKjogRm9ybWF0RXhjZXB0aW9uLCBDaGVja3N1bUV4Y2VwdGlvbiovKSB7CgkgICAgICAgICAgICBleCA9IGU7CgkgICAgICAgIH0KCSAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgIC8vIFJldmVydCB0aGUgYml0IG1hdHJpeAoJICAgICAgICAgICAgcGFyc2VyLnJlbWFzaygpOwoJICAgICAgICAgICAgLy8gV2lsbCBiZSBhdHRlbXB0aW5nIGEgbWlycm9yZWQgcmVhZGluZyBvZiB0aGUgdmVyc2lvbiBhbmQgZm9ybWF0IGluZm8uCgkgICAgICAgICAgICBwYXJzZXIuc2V0TWlycm9yKHRydWUpOwoJICAgICAgICAgICAgLy8gUHJlZW1wdGl2ZWx5IHJlYWQgdGhlIHZlcnNpb24uCgkgICAgICAgICAgICBwYXJzZXIucmVhZFZlcnNpb24oKTsKCSAgICAgICAgICAgIC8vIFByZWVtcHRpdmVseSByZWFkIHRoZSBmb3JtYXQgaW5mb3JtYXRpb24uCgkgICAgICAgICAgICBwYXJzZXIucmVhZEZvcm1hdEluZm9ybWF0aW9uKCk7CgkgICAgICAgICAgICAvKgoJICAgICAgICAgICAgICogU2luY2Ugd2UncmUgaGVyZSwgdGhpcyBtZWFucyB3ZSBoYXZlIHN1Y2Nlc3NmdWxseSBkZXRlY3RlZCBzb21lIGtpbmQKCSAgICAgICAgICAgICAqIG9mIHZlcnNpb24gYW5kIGZvcm1hdCBpbmZvcm1hdGlvbiB3aGVuIG1pcnJvcmVkLiBUaGlzIGlzIGEgZ29vZCBzaWduLAoJICAgICAgICAgICAgICogdGhhdCB0aGUgUVIgY29kZSBtYXkgYmUgbWlycm9yZWQsIGFuZCB3ZSBzaG91bGQgdHJ5IG9uY2UgbW9yZSB3aXRoIGEKCSAgICAgICAgICAgICAqIG1pcnJvcmVkIGNvbnRlbnQuCgkgICAgICAgICAgICAgKi8KCSAgICAgICAgICAgIC8vIFByZXBhcmUgZm9yIGEgbWlycm9yZWQgcmVhZGluZy4KCSAgICAgICAgICAgIHBhcnNlci5taXJyb3IoKTsKCSAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmRlY29kZUJpdE1hdHJpeFBhcnNlcihwYXJzZXIsIGhpbnRzKTsKCSAgICAgICAgICAgIC8vIFN1Y2Nlc3MhIE5vdGlmeSB0aGUgY2FsbGVyIHRoYXQgdGhlIGNvZGUgd2FzIG1pcnJvcmVkLgoJICAgICAgICAgICAgcmVzdWx0LnNldE90aGVyKG5ldyBRUkNvZGVEZWNvZGVyTWV0YURhdGFfMSQxLmRlZmF1bHQodHJ1ZSkpOwoJICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsKCSAgICAgICAgfQoJICAgICAgICBjYXRjaCAoZSAvKkZvcm1hdEV4Y2VwdGlvbiB8IENoZWNrc3VtRXhjZXB0aW9uKi8pIHsKCSAgICAgICAgICAgIC8vIFRocm93IHRoZSBleGNlcHRpb24gZnJvbSB0aGUgb3JpZ2luYWwgcmVhZGluZwoJICAgICAgICAgICAgaWYgKGV4ICE9PSBudWxsKSB7CgkgICAgICAgICAgICAgICAgdGhyb3cgZXg7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICB0aHJvdyBlOwoJICAgICAgICB9CgkgICAgfTsKCSAgICBEZWNvZGVyLnByb3RvdHlwZS5kZWNvZGVCaXRNYXRyaXhQYXJzZXIgPSBmdW5jdGlvbiAocGFyc2VyLCBoaW50cykgewoJICAgICAgICB2YXIgZV8xLCBfYSwgZV8yLCBfYjsKCSAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZXIucmVhZFZlcnNpb24oKTsKCSAgICAgICAgdmFyIGVjTGV2ZWwgPSBwYXJzZXIucmVhZEZvcm1hdEluZm9ybWF0aW9uKCkuZ2V0RXJyb3JDb3JyZWN0aW9uTGV2ZWwoKTsKCSAgICAgICAgLy8gUmVhZCBjb2Rld29yZHMKCSAgICAgICAgdmFyIGNvZGV3b3JkcyA9IHBhcnNlci5yZWFkQ29kZXdvcmRzKCk7CgkgICAgICAgIC8vIFNlcGFyYXRlIGludG8gZGF0YSBibG9ja3MKCSAgICAgICAgdmFyIGRhdGFCbG9ja3MgPSBEYXRhQmxvY2tfMS5kZWZhdWx0LmdldERhdGFCbG9ja3MoY29kZXdvcmRzLCB2ZXJzaW9uLCBlY0xldmVsKTsKCSAgICAgICAgLy8gQ291bnQgdG90YWwgbnVtYmVyIG9mIGRhdGEgYnl0ZXMKCSAgICAgICAgdmFyIHRvdGFsQnl0ZXMgPSAwOwoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgZm9yICh2YXIgZGF0YUJsb2Nrc18xID0gX192YWx1ZXMkMihkYXRhQmxvY2tzKSwgZGF0YUJsb2Nrc18xXzEgPSBkYXRhQmxvY2tzXzEubmV4dCgpOyAhZGF0YUJsb2Nrc18xXzEuZG9uZTsgZGF0YUJsb2Nrc18xXzEgPSBkYXRhQmxvY2tzXzEubmV4dCgpKSB7CgkgICAgICAgICAgICAgICAgdmFyIGRhdGFCbG9jayA9IGRhdGFCbG9ja3NfMV8xLnZhbHVlOwoJICAgICAgICAgICAgICAgIHRvdGFsQnl0ZXMgKz0gZGF0YUJsb2NrLmdldE51bURhdGFDb2Rld29yZHMoKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfQoJICAgICAgICBmaW5hbGx5IHsKCSAgICAgICAgICAgIHRyeSB7CgkgICAgICAgICAgICAgICAgaWYgKGRhdGFCbG9ja3NfMV8xICYmICFkYXRhQmxvY2tzXzFfMS5kb25lICYmIChfYSA9IGRhdGFCbG9ja3NfMS5yZXR1cm4pKSBfYS5jYWxsKGRhdGFCbG9ja3NfMSk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9CgkgICAgICAgIH0KCSAgICAgICAgdmFyIHJlc3VsdEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkodG90YWxCeXRlcyk7CgkgICAgICAgIHZhciByZXN1bHRPZmZzZXQgPSAwOwoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgLy8gRXJyb3ItY29ycmVjdCBhbmQgY29weSBkYXRhIGJsb2NrcyB0b2dldGhlciBpbnRvIGEgc3RyZWFtIG9mIGJ5dGVzCgkgICAgICAgICAgICBmb3IgKHZhciBkYXRhQmxvY2tzXzIgPSBfX3ZhbHVlcyQyKGRhdGFCbG9ja3MpLCBkYXRhQmxvY2tzXzJfMSA9IGRhdGFCbG9ja3NfMi5uZXh0KCk7ICFkYXRhQmxvY2tzXzJfMS5kb25lOyBkYXRhQmxvY2tzXzJfMSA9IGRhdGFCbG9ja3NfMi5uZXh0KCkpIHsKCSAgICAgICAgICAgICAgICB2YXIgZGF0YUJsb2NrID0gZGF0YUJsb2Nrc18yXzEudmFsdWU7CgkgICAgICAgICAgICAgICAgdmFyIGNvZGV3b3JkQnl0ZXMgPSBkYXRhQmxvY2suZ2V0Q29kZXdvcmRzKCk7CgkgICAgICAgICAgICAgICAgdmFyIG51bURhdGFDb2Rld29yZHMgPSBkYXRhQmxvY2suZ2V0TnVtRGF0YUNvZGV3b3JkcygpOwoJICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEVycm9ycyhjb2Rld29yZEJ5dGVzLCBudW1EYXRhQ29kZXdvcmRzKTsKCSAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bURhdGFDb2Rld29yZHM7IGkrKykgewoJICAgICAgICAgICAgICAgICAgICByZXN1bHRCeXRlc1tyZXN1bHRPZmZzZXQrK10gPSBjb2Rld29yZEJ5dGVzW2ldOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfQoJICAgICAgICBmaW5hbGx5IHsKCSAgICAgICAgICAgIHRyeSB7CgkgICAgICAgICAgICAgICAgaWYgKGRhdGFCbG9ja3NfMl8xICYmICFkYXRhQmxvY2tzXzJfMS5kb25lICYmIChfYiA9IGRhdGFCbG9ja3NfMi5yZXR1cm4pKSBfYi5jYWxsKGRhdGFCbG9ja3NfMik7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9CgkgICAgICAgIH0KCSAgICAgICAgLy8gRGVjb2RlIHRoZSBjb250ZW50cyBvZiB0aGF0IHN0cmVhbSBvZiBieXRlcwoJICAgICAgICByZXR1cm4gRGVjb2RlZEJpdFN0cmVhbVBhcnNlcl8xLmRlZmF1bHQuZGVjb2RlKHJlc3VsdEJ5dGVzLCB2ZXJzaW9uLCBlY0xldmVsLCBoaW50cyk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiA8cD5HaXZlbiBkYXRhIGFuZCBlcnJvci1jb3JyZWN0aW9uIGNvZGV3b3JkcyByZWNlaXZlZCwgcG9zc2libHkgY29ycnVwdGVkIGJ5IGVycm9ycywgYXR0ZW1wdHMgdG8KCSAgICAgKiBjb3JyZWN0IHRoZSBlcnJvcnMgaW4tcGxhY2UgdXNpbmcgUmVlZC1Tb2xvbW9uIGVycm9yIGNvcnJlY3Rpb24uPC9wPgoJICAgICAqCgkgICAgICogQHBhcmFtIGNvZGV3b3JkQnl0ZXMgZGF0YSBhbmQgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMKCSAgICAgKiBAcGFyYW0gbnVtRGF0YUNvZGV3b3JkcyBudW1iZXIgb2YgY29kZXdvcmRzIHRoYXQgYXJlIGRhdGEgYnl0ZXMKCSAgICAgKiBAdGhyb3dzIENoZWNrc3VtRXhjZXB0aW9uIGlmIGVycm9yIGNvcnJlY3Rpb24gZmFpbHMKCSAgICAgKi8KCSAgICBEZWNvZGVyLnByb3RvdHlwZS5jb3JyZWN0RXJyb3JzID0gZnVuY3Rpb24gKGNvZGV3b3JkQnl0ZXMsIG51bURhdGFDb2Rld29yZHMgLyppbnQqLykgewoJICAgICAgICAvLyBjb25zdCBudW1Db2Rld29yZHMgPSBjb2Rld29yZEJ5dGVzLmxlbmd0aDsKCSAgICAgICAgLy8gRmlyc3QgcmVhZCBpbnRvIGFuIGFycmF5IG9mIGludHMKCSAgICAgICAgdmFyIGNvZGV3b3Jkc0ludHMgPSBuZXcgSW50MzJBcnJheShjb2Rld29yZEJ5dGVzKTsKCSAgICAgICAgLy8gVFlQRVNDUklQVFBPUlQ6IG5vdCByZWFseSBuZWNlc3NhcnkgdG8gdHJhbnNmb3JtIHRvIGludHM/IGNvdWxkIHJlZGVzaWduIGV2ZXJ5dGhpbmcgdG8gd29yayB3aXRoIHVuc2lnbmVkIGJ5dGVzPwoJICAgICAgICAvLyBjb25zdCBjb2Rld29yZHNJbnRzID0gbmV3IEludDMyQXJyYXkobnVtQ29kZXdvcmRzKQoJICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvZGV3b3JkczsgaSsrKSB7CgkgICAgICAgIC8vICAgY29kZXdvcmRzSW50c1tpXSA9IGNvZGV3b3JkQnl0ZXNbaV0gJiAweEZGCgkgICAgICAgIC8vIH0KCSAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgIHRoaXMucnNEZWNvZGVyLmRlY29kZShjb2Rld29yZHNJbnRzLCBjb2Rld29yZEJ5dGVzLmxlbmd0aCAtIG51bURhdGFDb2Rld29yZHMpOwoJICAgICAgICB9CgkgICAgICAgIGNhdGNoIChpZ25vcmVkIC8qOiBSZWVkU29sb21vbkV4Y2VwdGlvbiovKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgQ2hlY2tzdW1FeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgLy8gQ29weSBiYWNrIGludG8gYXJyYXkgb2YgYnl0ZXMgLS0gb25seSBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoZSBieXRlcyB0aGF0IHdlcmUgZGF0YQoJICAgICAgICAvLyBXZSBkb24ndCBjYXJlIGFib3V0IGVycm9ycyBpbiB0aGUgZXJyb3ItY29ycmVjdGlvbiBjb2Rld29yZHMKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1EYXRhQ29kZXdvcmRzOyBpKyspIHsKCSAgICAgICAgICAgIGNvZGV3b3JkQnl0ZXNbaV0gPSAvKihieXRlKSAqLyBjb2Rld29yZHNJbnRzW2ldOwoJICAgICAgICB9CgkgICAgfTsKCSAgICByZXR1cm4gRGVjb2RlcjsKCX0oKSk7CglEZWNvZGVyJDEuZGVmYXVsdCA9IERlY29kZXI7CgoJdmFyIERldGVjdG9yJDEgPSB7fTsKCgl2YXIgTWF0aFV0aWxzJDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMTIgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdGhVdGlscyQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7CgkvKm5hbWVzcGFjZSBjb20uZ29vZ2xlLnp4aW5nLmNvbW1vbi5kZXRlY3RvciB7Ki8KCS8qKgoJICogR2VuZXJhbCBtYXRoLXJlbGF0ZWQgYW5kIG51bWVyaWMgdXRpbGl0eSBmdW5jdGlvbnMuCgkgKi8KCXZhciBNYXRoVXRpbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgZnVuY3Rpb24gTWF0aFV0aWxzKCkgewoJICAgIH0KCSAgICAvKioKCSAgICAgKiBFbmRzIHVwIGJlaW5nIGEgYml0IGZhc3RlciB0aGFuIHtAbGluayBNYXRoI3JvdW5kKGZsb2F0KX0uIFRoaXMgbWVyZWx5IHJvdW5kcyBpdHMKCSAgICAgKiBhcmd1bWVudCB0byB0aGUgbmVhcmVzdCBpbnQsIHdoZXJlIHguNSByb3VuZHMgdXAgdG8geCsxLiBTZW1hbnRpY3Mgb2YgdGhpcyBzaG9ydGN1dAoJICAgICAqIGRpZmZlciBzbGlnaHRseSBmcm9tIHtAbGluayBNYXRoI3JvdW5kKGZsb2F0KX0gaW4gdGhhdCBoYWxmIHJvdW5kcyBkb3duIGZvciBuZWdhdGl2ZQoJICAgICAqIHZhbHVlcy4gLTIuNSByb3VuZHMgdG8gLTMsIG5vdCAtMi4gRm9yIHB1cnBvc2VzIGhlcmUgaXQgbWFrZXMgbm8gZGlmZmVyZW5jZS4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBkIHJlYWwgdmFsdWUgdG8gcm91bmQKCSAgICAgKiBAcmV0dXJuIG5lYXJlc3Qge0Bjb2RlIGludH0KCSAgICAgKi8KCSAgICBNYXRoVXRpbHMucm91bmQgPSBmdW5jdGlvbiAoZCAvKmZsb2F0Ki8pIHsKCSAgICAgICAgaWYgKE5hTiA9PT0gZCkKCSAgICAgICAgICAgIHJldHVybiAwOwoJICAgICAgICBpZiAoZCA8PSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUikKCSAgICAgICAgICAgIHJldHVybiBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUjsKCSAgICAgICAgaWYgKGQgPj0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpCgkgICAgICAgICAgICByZXR1cm4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7CgkgICAgICAgIHJldHVybiAvKihpbnQpICovIChkICsgKGQgPCAwLjAgPyAtMC41IDogMC41KSkgfCAwOwoJICAgIH07CgkgICAgLy8gVFlQRVNDUklQVFBPUlQ6IG1heWJlIHJlbW92ZSByb3VuZCBtZXRob2QgYW5kIGNhbGwgZGlyZWN0bHkgTWF0aC5yb3VuZCwgaXQgbG9va3MgbGlrZSBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgZm9yIGpzCgkgICAgLyoqCgkgICAgICogQHBhcmFtIGFYIHBvaW50IEEgeCBjb29yZGluYXRlCgkgICAgICogQHBhcmFtIGFZIHBvaW50IEEgeSBjb29yZGluYXRlCgkgICAgICogQHBhcmFtIGJYIHBvaW50IEIgeCBjb29yZGluYXRlCgkgICAgICogQHBhcmFtIGJZIHBvaW50IEIgeSBjb29yZGluYXRlCgkgICAgICogQHJldHVybiBFdWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiBwb2ludHMgQSBhbmQgQgoJICAgICAqLwoJICAgIE1hdGhVdGlscy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhWCAvKmZsb2F0fGludCovLCBhWSAvKmZsb2F0fGludCovLCBiWCAvKmZsb2F0fGludCovLCBiWSAvKmZsb2F0fGludCovKSB7CgkgICAgICAgIHZhciB4RGlmZiA9IGFYIC0gYlg7CgkgICAgICAgIHZhciB5RGlmZiA9IGFZIC0gYlk7CgkgICAgICAgIHJldHVybiAvKihmbG9hdCkgKi8gTWF0aC5zcXJ0KHhEaWZmICogeERpZmYgKyB5RGlmZiAqIHlEaWZmKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEBwYXJhbSBhWCBwb2ludCBBIHggY29vcmRpbmF0ZQoJICAgICAqIEBwYXJhbSBhWSBwb2ludCBBIHkgY29vcmRpbmF0ZQoJICAgICAqIEBwYXJhbSBiWCBwb2ludCBCIHggY29vcmRpbmF0ZQoJICAgICAqIEBwYXJhbSBiWSBwb2ludCBCIHkgY29vcmRpbmF0ZQoJICAgICAqIEByZXR1cm4gRXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gcG9pbnRzIEEgYW5kIEIKCSAgICAgKi8KCSAgICAvLyBwdWJsaWMgc3RhdGljIGRpc3RhbmNlKGFYOiBudW1iZXIgLyppbnQqLywgYVk6IG51bWJlciAvKmludCovLCBiWDogbnVtYmVyIC8qaW50Ki8sIGJZOiBudW1iZXIgLyppbnQqLyk6IGZsb2F0IHsKCSAgICAvLyAgIGNvbnN0IHhEaWZmID0gYVggLSBiWAoJICAgIC8vICAgY29uc3QgeURpZmYgPSBhWSAtIGJZCgkgICAgLy8gICByZXR1cm4gKGZsb2F0KSBNYXRoLnNxcnQoeERpZmYgKiB4RGlmZiArIHlEaWZmICogeURpZmYpOwoJICAgIC8vIH0KCSAgICAvKioKCSAgICAgKiBAcGFyYW0gYXJyYXkgdmFsdWVzIHRvIHN1bQoJICAgICAqIEByZXR1cm4gc3VtIG9mIHZhbHVlcyBpbiBhcnJheQoJICAgICAqLwoJICAgIE1hdGhVdGlscy5zdW0gPSBmdW5jdGlvbiAoYXJyYXkpIHsKCSAgICAgICAgdmFyIGNvdW50ID0gMDsKCSAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aF8xID0gYXJyYXkubGVuZ3RoOyBpICE9PSBsZW5ndGhfMTsgaSsrKSB7CgkgICAgICAgICAgICB2YXIgYSA9IGFycmF5W2ldOwoJICAgICAgICAgICAgY291bnQgKz0gYTsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gY291bnQ7CgkgICAgfTsKCSAgICByZXR1cm4gTWF0aFV0aWxzOwoJfSgpKTsKCU1hdGhVdGlscyQxLmRlZmF1bHQgPSBNYXRoVXRpbHM7CgoJdmFyIERldGVjdG9yUmVzdWx0JDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KERldGVjdG9yUmVzdWx0JDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qKgoJICogPHA+RW5jYXBzdWxhdGVzIHRoZSByZXN1bHQgb2YgZGV0ZWN0aW5nIGEgYmFyY29kZSBpbiBhbiBpbWFnZS4gVGhpcyBpbmNsdWRlcyB0aGUgcmF3CgkgKiBtYXRyaXggb2YgYmxhY2svd2hpdGUgcGl4ZWxzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGJhcmNvZGUsIGFuZCBwb3NzaWJseSBwb2ludHMgb2YgaW50ZXJlc3QKCSAqIGluIHRoZSBpbWFnZSwgbGlrZSB0aGUgbG9jYXRpb24gb2YgZmluZGVyIHBhdHRlcm5zIG9yIGNvcm5lcnMgb2YgdGhlIGJhcmNvZGUgaW4gdGhlIGltYWdlLjwvcD4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICovCgl2YXIgRGV0ZWN0b3JSZXN1bHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgZnVuY3Rpb24gRGV0ZWN0b3JSZXN1bHQoYml0cywgcG9pbnRzKSB7CgkgICAgICAgIHRoaXMuYml0cyA9IGJpdHM7CgkgICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzOwoJICAgIH0KCSAgICBEZXRlY3RvclJlc3VsdC5wcm90b3R5cGUuZ2V0Qml0cyA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuYml0czsKCSAgICB9OwoJICAgIERldGVjdG9yUmVzdWx0LnByb3RvdHlwZS5nZXRQb2ludHMgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLnBvaW50czsKCSAgICB9OwoJICAgIHJldHVybiBEZXRlY3RvclJlc3VsdDsKCX0oKSk7CglEZXRlY3RvclJlc3VsdCQxLmRlZmF1bHQgPSBEZXRlY3RvclJlc3VsdDsKCgl2YXIgR3JpZFNhbXBsZXJJbnN0YW5jZSQxID0ge307CgoJdmFyIERlZmF1bHRHcmlkU2FtcGxlciQxID0ge307CgoJdmFyIEdyaWRTYW1wbGVyJDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEdyaWRTYW1wbGVyJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCXZhciBOb3RGb3VuZEV4Y2VwdGlvbl8xJDUgPSBOb3RGb3VuZEV4Y2VwdGlvbiQxOwoJLyoqCgkgKiBJbXBsZW1lbnRhdGlvbnMgb2YgdGhpcyBjbGFzcyBjYW4sIGdpdmVuIGxvY2F0aW9ucyBvZiBmaW5kZXIgcGF0dGVybnMgZm9yIGEgUVIgY29kZSBpbiBhbgoJICogaW1hZ2UsIHNhbXBsZSB0aGUgcmlnaHQgcG9pbnRzIGluIHRoZSBpbWFnZSB0byByZWNvbnN0cnVjdCB0aGUgUVIgY29kZSwgYWNjb3VudGluZyBmb3IKCSAqIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24uIEl0IGlzIGFic3RyYWN0ZWQgc2luY2UgaXQgaXMgcmVsYXRpdmVseSBleHBlbnNpdmUgYW5kIHNob3VsZCBiZSBhbGxvd2VkCgkgKiB0byB0YWtlIGFkdmFudGFnZSBvZiBwbGF0Zm9ybS1zcGVjaWZpYyBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb25zLCBsaWtlIFN1bidzIEphdmEgQWR2YW5jZWQKCSAqIEltYWdpbmcgbGlicmFyeSwgYnV0IHdoaWNoIG1heSBub3QgYmUgYXZhaWxhYmxlIGluIG90aGVyIGVudmlyb25tZW50cyBzdWNoIGFzIEoyTUUsIGFuZCB2aWNlCgkgKiB2ZXJzYS4KCSAqCgkgKiBUaGUgaW1wbGVtZW50YXRpb24gdXNlZCBjYW4gYmUgY29udHJvbGxlZCBieSBjYWxsaW5nIHtAbGluayAjc2V0R3JpZFNhbXBsZXIoR3JpZFNhbXBsZXIpfQoJICogd2l0aCBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzIHdoaWNoIGltcGxlbWVudHMgdGhpcyBpbnRlcmZhY2UuCgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIEdyaWRTYW1wbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIGZ1bmN0aW9uIEdyaWRTYW1wbGVyKCkgewoJICAgIH0KCSAgICAvKioKCSAgICAgKiA8cD5DaGVja3MgYSBzZXQgb2YgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIHRyYW5zZm9ybWVkIHRvIHNhbXBsZSBwb2ludHMgb24gYW4gaW1hZ2UgYWdhaW5zdAoJICAgICAqIHRoZSBpbWFnZSdzIGRpbWVuc2lvbnMgdG8gc2VlIGlmIHRoZSBwb2ludCBhcmUgZXZlbiB3aXRoaW4gdGhlIGltYWdlLjwvcD4KCSAgICAgKgoJICAgICAqIDxwPlRoaXMgbWV0aG9kIHdpbGwgYWN0dWFsbHkgIm51ZGdlIiB0aGUgZW5kcG9pbnRzIGJhY2sgb250byB0aGUgaW1hZ2UgaWYgdGhleSBhcmUgZm91bmQgdG8gYmUKCSAgICAgKiBiYXJlbHkgKGxlc3MgdGhhbiAxIHBpeGVsKSBvZmYgdGhlIGltYWdlLiBUaGlzIGFjY291bnRzIGZvciBpbXBlcmZlY3QgZGV0ZWN0aW9uIG9mIGZpbmRlcgoJICAgICAqIHBhdHRlcm5zIGluIGFuIGltYWdlIHdoZXJlIHRoZSBRUiBDb2RlIHJ1bnMgYWxsIHRoZSB3YXkgdG8gdGhlIGltYWdlIGJvcmRlci48L3A+CgkgICAgICoKCSAgICAgKiA8cD5Gb3IgZWZmaWNpZW5jeSwgdGhlIG1ldGhvZCB3aWxsIGNoZWNrIHBvaW50cyBmcm9tIGVpdGhlciBlbmQgb2YgdGhlIGxpbmUgdW50aWwgb25lIGlzIGZvdW5kCgkgICAgICogdG8gYmUgd2l0aGluIHRoZSBpbWFnZS4gQmVjYXVzZSB0aGUgc2V0IG9mIHBvaW50cyBhcmUgYXNzdW1lZCB0byBiZSBsaW5lYXIsIHRoaXMgaXMgdmFsaWQuPC9wPgoJICAgICAqCgkgICAgICogQHBhcmFtIGltYWdlIGltYWdlIGludG8gd2hpY2ggdGhlIHBvaW50cyBzaG91bGQgbWFwCgkgICAgICogQHBhcmFtIHBvaW50cyBhY3R1YWwgcG9pbnRzIGluIHgxLHkxLC4uLix4bix5biBmb3JtCgkgICAgICogQHRocm93cyBOb3RGb3VuZEV4Y2VwdGlvbiBpZiBhbiBlbmRwb2ludCBpcyBsaWVzIG91dHNpZGUgdGhlIGltYWdlIGJvdW5kYXJpZXMKCSAgICAgKi8KCSAgICBHcmlkU2FtcGxlci5jaGVja0FuZE51ZGdlUG9pbnRzID0gZnVuY3Rpb24gKGltYWdlLCBwb2ludHMpIHsKCSAgICAgICAgdmFyIHdpZHRoID0gaW1hZ2UuZ2V0V2lkdGgoKTsKCSAgICAgICAgdmFyIGhlaWdodCA9IGltYWdlLmdldEhlaWdodCgpOwoJICAgICAgICAvLyBDaGVjayBhbmQgbnVkZ2UgcG9pbnRzIGZyb20gc3RhcnQgdW50aWwgd2Ugc2VlIHNvbWUgdGhhdCBhcmUgT0s6CgkgICAgICAgIHZhciBudWRnZWQgPSB0cnVlOwoJICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBwb2ludHMubGVuZ3RoICYmIG51ZGdlZDsgb2Zmc2V0ICs9IDIpIHsKCSAgICAgICAgICAgIHZhciB4ID0gTWF0aC5mbG9vcihwb2ludHNbb2Zmc2V0XSk7CgkgICAgICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IocG9pbnRzW29mZnNldCArIDFdKTsKCSAgICAgICAgICAgIGlmICh4IDwgLTEgfHwgeCA+IHdpZHRoIHx8IHkgPCAtMSB8fCB5ID4gaGVpZ2h0KSB7CgkgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uXzEkNS5kZWZhdWx0KCk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBudWRnZWQgPSBmYWxzZTsKCSAgICAgICAgICAgIGlmICh4ID09PSAtMSkgewoJICAgICAgICAgICAgICAgIHBvaW50c1tvZmZzZXRdID0gMC4wOwoJICAgICAgICAgICAgICAgIG51ZGdlZCA9IHRydWU7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBlbHNlIGlmICh4ID09PSB3aWR0aCkgewoJICAgICAgICAgICAgICAgIHBvaW50c1tvZmZzZXRdID0gd2lkdGggLSAxOwoJICAgICAgICAgICAgICAgIG51ZGdlZCA9IHRydWU7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBpZiAoeSA9PT0gLTEpIHsKCSAgICAgICAgICAgICAgICBwb2ludHNbb2Zmc2V0ICsgMV0gPSAwLjA7CgkgICAgICAgICAgICAgICAgbnVkZ2VkID0gdHJ1ZTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGVsc2UgaWYgKHkgPT09IGhlaWdodCkgewoJICAgICAgICAgICAgICAgIHBvaW50c1tvZmZzZXQgKyAxXSA9IGhlaWdodCAtIDE7CgkgICAgICAgICAgICAgICAgbnVkZ2VkID0gdHJ1ZTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICAvLyBDaGVjayBhbmQgbnVkZ2UgcG9pbnRzIGZyb20gZW5kOgoJICAgICAgICBudWRnZWQgPSB0cnVlOwoJICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSBwb2ludHMubGVuZ3RoIC0gMjsgb2Zmc2V0ID49IDAgJiYgbnVkZ2VkOyBvZmZzZXQgLT0gMikgewoJICAgICAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKHBvaW50c1tvZmZzZXRdKTsKCSAgICAgICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihwb2ludHNbb2Zmc2V0ICsgMV0pOwoJICAgICAgICAgICAgaWYgKHggPCAtMSB8fCB4ID4gd2lkdGggfHwgeSA8IC0xIHx8IHkgPiBoZWlnaHQpIHsKCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMSQ1LmRlZmF1bHQoKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIG51ZGdlZCA9IGZhbHNlOwoJICAgICAgICAgICAgaWYgKHggPT09IC0xKSB7CgkgICAgICAgICAgICAgICAgcG9pbnRzW29mZnNldF0gPSAwLjA7CgkgICAgICAgICAgICAgICAgbnVkZ2VkID0gdHJ1ZTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGVsc2UgaWYgKHggPT09IHdpZHRoKSB7CgkgICAgICAgICAgICAgICAgcG9pbnRzW29mZnNldF0gPSB3aWR0aCAtIDE7CgkgICAgICAgICAgICAgICAgbnVkZ2VkID0gdHJ1ZTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGlmICh5ID09PSAtMSkgewoJICAgICAgICAgICAgICAgIHBvaW50c1tvZmZzZXQgKyAxXSA9IDAuMDsKCSAgICAgICAgICAgICAgICBudWRnZWQgPSB0cnVlOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgZWxzZSBpZiAoeSA9PT0gaGVpZ2h0KSB7CgkgICAgICAgICAgICAgICAgcG9pbnRzW29mZnNldCArIDFdID0gaGVpZ2h0IC0gMTsKCSAgICAgICAgICAgICAgICBudWRnZWQgPSB0cnVlOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgfTsKCSAgICByZXR1cm4gR3JpZFNhbXBsZXI7Cgl9KCkpOwoJR3JpZFNhbXBsZXIkMS5kZWZhdWx0ID0gR3JpZFNhbXBsZXI7CgoJdmFyIFBlcnNwZWN0aXZlVHJhbnNmb3JtJDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KFBlcnNwZWN0aXZlVHJhbnNmb3JtJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcuY29tbW9uIHsqLwoJLyoqCgkgKiA8cD5UaGlzIGNsYXNzIGltcGxlbWVudHMgYSBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm0gaW4gdHdvIGRpbWVuc2lvbnMuIEdpdmVuIGZvdXIgc291cmNlIGFuZCBmb3VyCgkgKiBkZXN0aW5hdGlvbiBwb2ludHMsIGl0IHdpbGwgY29tcHV0ZSB0aGUgdHJhbnNmb3JtYXRpb24gaW1wbGllZCBiZXR3ZWVuIHRoZW0uIFRoZSBjb2RlIGlzIGJhc2VkCgkgKiBkaXJlY3RseSB1cG9uIHNlY3Rpb24gMy40LjIgb2YgR2VvcmdlIFdvbGJlcmcncyAiRGlnaXRhbCBJbWFnZSBXYXJwaW5nIjsgc2VlIHBhZ2VzIDU0LTU2LjwvcD4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICovCgl2YXIgUGVyc3BlY3RpdmVUcmFuc2Zvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgZnVuY3Rpb24gUGVyc3BlY3RpdmVUcmFuc2Zvcm0oYTExIC8qZmxvYXQqLywgYTIxIC8qZmxvYXQqLywgYTMxIC8qZmxvYXQqLywgYTEyIC8qZmxvYXQqLywgYTIyIC8qZmxvYXQqLywgYTMyIC8qZmxvYXQqLywgYTEzIC8qZmxvYXQqLywgYTIzIC8qZmxvYXQqLywgYTMzIC8qZmxvYXQqLykgewoJICAgICAgICB0aGlzLmExMSA9IGExMTsKCSAgICAgICAgdGhpcy5hMjEgPSBhMjE7CgkgICAgICAgIHRoaXMuYTMxID0gYTMxOwoJICAgICAgICB0aGlzLmExMiA9IGExMjsKCSAgICAgICAgdGhpcy5hMjIgPSBhMjI7CgkgICAgICAgIHRoaXMuYTMyID0gYTMyOwoJICAgICAgICB0aGlzLmExMyA9IGExMzsKCSAgICAgICAgdGhpcy5hMjMgPSBhMjM7CgkgICAgICAgIHRoaXMuYTMzID0gYTMzOwoJICAgIH0KCSAgICBQZXJzcGVjdGl2ZVRyYW5zZm9ybS5xdWFkcmlsYXRlcmFsVG9RdWFkcmlsYXRlcmFsID0gZnVuY3Rpb24gKHgwIC8qZmxvYXQqLywgeTAgLypmbG9hdCovLCB4MSAvKmZsb2F0Ki8sIHkxIC8qZmxvYXQqLywgeDIgLypmbG9hdCovLCB5MiAvKmZsb2F0Ki8sIHgzIC8qZmxvYXQqLywgeTMgLypmbG9hdCovLCB4MHAgLypmbG9hdCovLCB5MHAgLypmbG9hdCovLCB4MXAgLypmbG9hdCovLCB5MXAgLypmbG9hdCovLCB4MnAgLypmbG9hdCovLCB5MnAgLypmbG9hdCovLCB4M3AgLypmbG9hdCovLCB5M3AgLypmbG9hdCovKSB7CgkgICAgICAgIHZhciBxVG9TID0gUGVyc3BlY3RpdmVUcmFuc2Zvcm0ucXVhZHJpbGF0ZXJhbFRvU3F1YXJlKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7CgkgICAgICAgIHZhciBzVG9RID0gUGVyc3BlY3RpdmVUcmFuc2Zvcm0uc3F1YXJlVG9RdWFkcmlsYXRlcmFsKHgwcCwgeTBwLCB4MXAsIHkxcCwgeDJwLCB5MnAsIHgzcCwgeTNwKTsKCSAgICAgICAgcmV0dXJuIHNUb1EudGltZXMocVRvUyk7CgkgICAgfTsKCSAgICBQZXJzcGVjdGl2ZVRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtUG9pbnRzID0gZnVuY3Rpb24gKHBvaW50cykgewoJICAgICAgICB2YXIgbWF4ID0gcG9pbnRzLmxlbmd0aDsKCSAgICAgICAgdmFyIGExMSA9IHRoaXMuYTExOwoJICAgICAgICB2YXIgYTEyID0gdGhpcy5hMTI7CgkgICAgICAgIHZhciBhMTMgPSB0aGlzLmExMzsKCSAgICAgICAgdmFyIGEyMSA9IHRoaXMuYTIxOwoJICAgICAgICB2YXIgYTIyID0gdGhpcy5hMjI7CgkgICAgICAgIHZhciBhMjMgPSB0aGlzLmEyMzsKCSAgICAgICAgdmFyIGEzMSA9IHRoaXMuYTMxOwoJICAgICAgICB2YXIgYTMyID0gdGhpcy5hMzI7CgkgICAgICAgIHZhciBhMzMgPSB0aGlzLmEzMzsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXg7IGkgKz0gMikgewoJICAgICAgICAgICAgdmFyIHggPSBwb2ludHNbaV07CgkgICAgICAgICAgICB2YXIgeSA9IHBvaW50c1tpICsgMV07CgkgICAgICAgICAgICB2YXIgZGVub21pbmF0b3IgPSBhMTMgKiB4ICsgYTIzICogeSArIGEzMzsKCSAgICAgICAgICAgIHBvaW50c1tpXSA9IChhMTEgKiB4ICsgYTIxICogeSArIGEzMSkgLyBkZW5vbWluYXRvcjsKCSAgICAgICAgICAgIHBvaW50c1tpICsgMV0gPSAoYTEyICogeCArIGEyMiAqIHkgKyBhMzIpIC8gZGVub21pbmF0b3I7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIFBlcnNwZWN0aXZlVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1Qb2ludHNXaXRoVmFsdWVzID0gZnVuY3Rpb24gKHhWYWx1ZXMsIHlWYWx1ZXMpIHsKCSAgICAgICAgdmFyIGExMSA9IHRoaXMuYTExOwoJICAgICAgICB2YXIgYTEyID0gdGhpcy5hMTI7CgkgICAgICAgIHZhciBhMTMgPSB0aGlzLmExMzsKCSAgICAgICAgdmFyIGEyMSA9IHRoaXMuYTIxOwoJICAgICAgICB2YXIgYTIyID0gdGhpcy5hMjI7CgkgICAgICAgIHZhciBhMjMgPSB0aGlzLmEyMzsKCSAgICAgICAgdmFyIGEzMSA9IHRoaXMuYTMxOwoJICAgICAgICB2YXIgYTMyID0gdGhpcy5hMzI7CgkgICAgICAgIHZhciBhMzMgPSB0aGlzLmEzMzsKCSAgICAgICAgdmFyIG4gPSB4VmFsdWVzLmxlbmd0aDsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHsKCSAgICAgICAgICAgIHZhciB4ID0geFZhbHVlc1tpXTsKCSAgICAgICAgICAgIHZhciB5ID0geVZhbHVlc1tpXTsKCSAgICAgICAgICAgIHZhciBkZW5vbWluYXRvciA9IGExMyAqIHggKyBhMjMgKiB5ICsgYTMzOwoJICAgICAgICAgICAgeFZhbHVlc1tpXSA9IChhMTEgKiB4ICsgYTIxICogeSArIGEzMSkgLyBkZW5vbWluYXRvcjsKCSAgICAgICAgICAgIHlWYWx1ZXNbaV0gPSAoYTEyICogeCArIGEyMiAqIHkgKyBhMzIpIC8gZGVub21pbmF0b3I7CgkgICAgICAgIH0KCSAgICB9OwoJICAgIFBlcnNwZWN0aXZlVHJhbnNmb3JtLnNxdWFyZVRvUXVhZHJpbGF0ZXJhbCA9IGZ1bmN0aW9uICh4MCAvKmZsb2F0Ki8sIHkwIC8qZmxvYXQqLywgeDEgLypmbG9hdCovLCB5MSAvKmZsb2F0Ki8sIHgyIC8qZmxvYXQqLywgeTIgLypmbG9hdCovLCB4MyAvKmZsb2F0Ki8sIHkzIC8qZmxvYXQqLykgewoJICAgICAgICB2YXIgZHgzID0geDAgLSB4MSArIHgyIC0geDM7CgkgICAgICAgIHZhciBkeTMgPSB5MCAtIHkxICsgeTIgLSB5MzsKCSAgICAgICAgaWYgKGR4MyA9PT0gMC4wICYmIGR5MyA9PT0gMC4wKSB7CgkgICAgICAgICAgICAvLyBBZmZpbmUKCSAgICAgICAgICAgIHJldHVybiBuZXcgUGVyc3BlY3RpdmVUcmFuc2Zvcm0oeDEgLSB4MCwgeDIgLSB4MSwgeDAsIHkxIC0geTAsIHkyIC0geTEsIHkwLCAwLjAsIDAuMCwgMS4wKTsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgIHZhciBkeDEgPSB4MSAtIHgyOwoJICAgICAgICAgICAgdmFyIGR4MiA9IHgzIC0geDI7CgkgICAgICAgICAgICB2YXIgZHkxID0geTEgLSB5MjsKCSAgICAgICAgICAgIHZhciBkeTIgPSB5MyAtIHkyOwoJICAgICAgICAgICAgdmFyIGRlbm9taW5hdG9yID0gZHgxICogZHkyIC0gZHgyICogZHkxOwoJICAgICAgICAgICAgdmFyIGExMyA9IChkeDMgKiBkeTIgLSBkeDIgKiBkeTMpIC8gZGVub21pbmF0b3I7CgkgICAgICAgICAgICB2YXIgYTIzID0gKGR4MSAqIGR5MyAtIGR4MyAqIGR5MSkgLyBkZW5vbWluYXRvcjsKCSAgICAgICAgICAgIHJldHVybiBuZXcgUGVyc3BlY3RpdmVUcmFuc2Zvcm0oeDEgLSB4MCArIGExMyAqIHgxLCB4MyAtIHgwICsgYTIzICogeDMsIHgwLCB5MSAtIHkwICsgYTEzICogeTEsIHkzIC0geTAgKyBhMjMgKiB5MywgeTAsIGExMywgYTIzLCAxLjApOwoJICAgICAgICB9CgkgICAgfTsKCSAgICBQZXJzcGVjdGl2ZVRyYW5zZm9ybS5xdWFkcmlsYXRlcmFsVG9TcXVhcmUgPSBmdW5jdGlvbiAoeDAgLypmbG9hdCovLCB5MCAvKmZsb2F0Ki8sIHgxIC8qZmxvYXQqLywgeTEgLypmbG9hdCovLCB4MiAvKmZsb2F0Ki8sIHkyIC8qZmxvYXQqLywgeDMgLypmbG9hdCovLCB5MyAvKmZsb2F0Ki8pIHsKCSAgICAgICAgLy8gSGVyZSwgdGhlIGFkam9pbnQgc2VydmVzIGFzIHRoZSBpbnZlcnNlOgoJICAgICAgICByZXR1cm4gUGVyc3BlY3RpdmVUcmFuc2Zvcm0uc3F1YXJlVG9RdWFkcmlsYXRlcmFsKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5MykuYnVpbGRBZGpvaW50KCk7CgkgICAgfTsKCSAgICBQZXJzcGVjdGl2ZVRyYW5zZm9ybS5wcm90b3R5cGUuYnVpbGRBZGpvaW50ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICAvLyBBZGpvaW50IGlzIHRoZSB0cmFuc3Bvc2Ugb2YgdGhlIGNvZmFjdG9yIG1hdHJpeDoKCSAgICAgICAgcmV0dXJuIG5ldyBQZXJzcGVjdGl2ZVRyYW5zZm9ybSh0aGlzLmEyMiAqIHRoaXMuYTMzIC0gdGhpcy5hMjMgKiB0aGlzLmEzMiwgdGhpcy5hMjMgKiB0aGlzLmEzMSAtIHRoaXMuYTIxICogdGhpcy5hMzMsIHRoaXMuYTIxICogdGhpcy5hMzIgLSB0aGlzLmEyMiAqIHRoaXMuYTMxLCB0aGlzLmExMyAqIHRoaXMuYTMyIC0gdGhpcy5hMTIgKiB0aGlzLmEzMywgdGhpcy5hMTEgKiB0aGlzLmEzMyAtIHRoaXMuYTEzICogdGhpcy5hMzEsIHRoaXMuYTEyICogdGhpcy5hMzEgLSB0aGlzLmExMSAqIHRoaXMuYTMyLCB0aGlzLmExMiAqIHRoaXMuYTIzIC0gdGhpcy5hMTMgKiB0aGlzLmEyMiwgdGhpcy5hMTMgKiB0aGlzLmEyMSAtIHRoaXMuYTExICogdGhpcy5hMjMsIHRoaXMuYTExICogdGhpcy5hMjIgLSB0aGlzLmExMiAqIHRoaXMuYTIxKTsKCSAgICB9OwoJICAgIFBlcnNwZWN0aXZlVHJhbnNmb3JtLnByb3RvdHlwZS50aW1lcyA9IGZ1bmN0aW9uIChvdGhlcikgewoJICAgICAgICByZXR1cm4gbmV3IFBlcnNwZWN0aXZlVHJhbnNmb3JtKHRoaXMuYTExICogb3RoZXIuYTExICsgdGhpcy5hMjEgKiBvdGhlci5hMTIgKyB0aGlzLmEzMSAqIG90aGVyLmExMywgdGhpcy5hMTEgKiBvdGhlci5hMjEgKyB0aGlzLmEyMSAqIG90aGVyLmEyMiArIHRoaXMuYTMxICogb3RoZXIuYTIzLCB0aGlzLmExMSAqIG90aGVyLmEzMSArIHRoaXMuYTIxICogb3RoZXIuYTMyICsgdGhpcy5hMzEgKiBvdGhlci5hMzMsIHRoaXMuYTEyICogb3RoZXIuYTExICsgdGhpcy5hMjIgKiBvdGhlci5hMTIgKyB0aGlzLmEzMiAqIG90aGVyLmExMywgdGhpcy5hMTIgKiBvdGhlci5hMjEgKyB0aGlzLmEyMiAqIG90aGVyLmEyMiArIHRoaXMuYTMyICogb3RoZXIuYTIzLCB0aGlzLmExMiAqIG90aGVyLmEzMSArIHRoaXMuYTIyICogb3RoZXIuYTMyICsgdGhpcy5hMzIgKiBvdGhlci5hMzMsIHRoaXMuYTEzICogb3RoZXIuYTExICsgdGhpcy5hMjMgKiBvdGhlci5hMTIgKyB0aGlzLmEzMyAqIG90aGVyLmExMywgdGhpcy5hMTMgKiBvdGhlci5hMjEgKyB0aGlzLmEyMyAqIG90aGVyLmEyMiArIHRoaXMuYTMzICogb3RoZXIuYTIzLCB0aGlzLmExMyAqIG90aGVyLmEzMSArIHRoaXMuYTIzICogb3RoZXIuYTMyICsgdGhpcy5hMzMgKiBvdGhlci5hMzMpOwoJICAgIH07CgkgICAgcmV0dXJuIFBlcnNwZWN0aXZlVHJhbnNmb3JtOwoJfSgpKTsKCVBlcnNwZWN0aXZlVHJhbnNmb3JtJDEuZGVmYXVsdCA9IFBlcnNwZWN0aXZlVHJhbnNmb3JtOwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCgl2YXIgX19leHRlbmRzJDIgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkgewoJICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAoJICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fAoJICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07CgkgICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgIH07CgkgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfQoJICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7CgkgICAgfTsKCX0pKCk7CglPYmplY3QuZGVmaW5lUHJvcGVydHkoRGVmYXVsdEdyaWRTYW1wbGVyJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcuY29tbW9uIHsqLwoJdmFyIEdyaWRTYW1wbGVyXzEgPSBHcmlkU2FtcGxlciQxOwoJdmFyIEJpdE1hdHJpeF8xJDEgPSBCaXRNYXRyaXgkMTsKCXZhciBQZXJzcGVjdGl2ZVRyYW5zZm9ybV8xJDEgPSBQZXJzcGVjdGl2ZVRyYW5zZm9ybSQxOwoJdmFyIE5vdEZvdW5kRXhjZXB0aW9uXzEkNCA9IE5vdEZvdW5kRXhjZXB0aW9uJDE7CgkvKioKCSAqIEBhdXRob3IgU2VhbiBPd2VuCgkgKi8KCXZhciBEZWZhdWx0R3JpZFNhbXBsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7CgkgICAgX19leHRlbmRzJDIoRGVmYXVsdEdyaWRTYW1wbGVyLCBfc3VwZXIpOwoJICAgIGZ1bmN0aW9uIERlZmF1bHRHcmlkU2FtcGxlcigpIHsKCSAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzOwoJICAgIH0KCSAgICAvKkBPdmVycmlkZSovCgkgICAgRGVmYXVsdEdyaWRTYW1wbGVyLnByb3RvdHlwZS5zYW1wbGVHcmlkID0gZnVuY3Rpb24gKGltYWdlLCBkaW1lbnNpb25YIC8qaW50Ki8sIGRpbWVuc2lvblkgLyppbnQqLywgcDFUb1ggLypmbG9hdCovLCBwMVRvWSAvKmZsb2F0Ki8sIHAyVG9YIC8qZmxvYXQqLywgcDJUb1kgLypmbG9hdCovLCBwM1RvWCAvKmZsb2F0Ki8sIHAzVG9ZIC8qZmxvYXQqLywgcDRUb1ggLypmbG9hdCovLCBwNFRvWSAvKmZsb2F0Ki8sIHAxRnJvbVggLypmbG9hdCovLCBwMUZyb21ZIC8qZmxvYXQqLywgcDJGcm9tWCAvKmZsb2F0Ki8sIHAyRnJvbVkgLypmbG9hdCovLCBwM0Zyb21YIC8qZmxvYXQqLywgcDNGcm9tWSAvKmZsb2F0Ki8sIHA0RnJvbVggLypmbG9hdCovLCBwNEZyb21ZIC8qZmxvYXQqLykgewoJICAgICAgICB2YXIgdHJhbnNmb3JtID0gUGVyc3BlY3RpdmVUcmFuc2Zvcm1fMSQxLmRlZmF1bHQucXVhZHJpbGF0ZXJhbFRvUXVhZHJpbGF0ZXJhbChwMVRvWCwgcDFUb1ksIHAyVG9YLCBwMlRvWSwgcDNUb1gsIHAzVG9ZLCBwNFRvWCwgcDRUb1ksIHAxRnJvbVgsIHAxRnJvbVksIHAyRnJvbVgsIHAyRnJvbVksIHAzRnJvbVgsIHAzRnJvbVksIHA0RnJvbVgsIHA0RnJvbVkpOwoJICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGVHcmlkV2l0aFRyYW5zZm9ybShpbWFnZSwgZGltZW5zaW9uWCwgZGltZW5zaW9uWSwgdHJhbnNmb3JtKTsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBEZWZhdWx0R3JpZFNhbXBsZXIucHJvdG90eXBlLnNhbXBsZUdyaWRXaXRoVHJhbnNmb3JtID0gZnVuY3Rpb24gKGltYWdlLCBkaW1lbnNpb25YIC8qaW50Ki8sIGRpbWVuc2lvblkgLyppbnQqLywgdHJhbnNmb3JtKSB7CgkgICAgICAgIGlmIChkaW1lbnNpb25YIDw9IDAgfHwgZGltZW5zaW9uWSA8PSAwKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMSQ0LmRlZmF1bHQoKTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgYml0cyA9IG5ldyBCaXRNYXRyaXhfMSQxLmRlZmF1bHQoZGltZW5zaW9uWCwgZGltZW5zaW9uWSk7CgkgICAgICAgIHZhciBwb2ludHMgPSBuZXcgRmxvYXQzMkFycmF5KDIgKiBkaW1lbnNpb25YKTsKCSAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBkaW1lbnNpb25ZOyB5KyspIHsKCSAgICAgICAgICAgIHZhciBtYXggPSBwb2ludHMubGVuZ3RoOwoJICAgICAgICAgICAgdmFyIGlWYWx1ZSA9IHkgKyAwLjU7CgkgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IG1heDsgeCArPSAyKSB7CgkgICAgICAgICAgICAgICAgcG9pbnRzW3hdID0gKHggLyAyKSArIDAuNTsKCSAgICAgICAgICAgICAgICBwb2ludHNbeCArIDFdID0gaVZhbHVlOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgdHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50cyhwb2ludHMpOwoJICAgICAgICAgICAgLy8gUXVpY2sgY2hlY2sgdG8gc2VlIGlmIHBvaW50cyB0cmFuc2Zvcm1lZCB0byBzb21ldGhpbmcgaW5zaWRlIHRoZSBpbWFnZQoJICAgICAgICAgICAgLy8gc3VmZmljaWVudCB0byBjaGVjayB0aGUgZW5kcG9pbnRzCgkgICAgICAgICAgICBHcmlkU2FtcGxlcl8xLmRlZmF1bHQuY2hlY2tBbmROdWRnZVBvaW50cyhpbWFnZSwgcG9pbnRzKTsKCSAgICAgICAgICAgIHRyeSB7CgkgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBtYXg7IHggKz0gMikgewoJICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2UuZ2V0KE1hdGguZmxvb3IocG9pbnRzW3hdKSwgTWF0aC5mbG9vcihwb2ludHNbeCArIDFdKSkpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJsYWNrKC1pc2gpIHBpeGVsCgkgICAgICAgICAgICAgICAgICAgICAgICBiaXRzLnNldCh4IC8gMiwgeSk7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBjYXRjaCAoYWlvb2JlIC8qOiBBcnJheUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24qLykgewoJICAgICAgICAgICAgICAgIC8vIFRoaXMgZmVlbHMgd3JvbmcsIGJ1dCwgc29tZXRpbWVzIGlmIHRoZSBmaW5kZXIgcGF0dGVybnMgYXJlIG1pc2lkZW50aWZpZWQsIHRoZSByZXN1bHRpbmcKCSAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm0gZ2V0cyAidHdpc3RlZCIgc3VjaCB0aGF0IGl0IG1hcHMgYSBzdHJhaWdodCBsaW5lIG9mIHBvaW50cyB0byBhIHNldCBvZiBwb2ludHMKCSAgICAgICAgICAgICAgICAvLyB3aG9zZSBlbmRwb2ludHMgYXJlIGluIGJvdW5kcywgYnV0IG90aGVycyBhcmUgbm90LiBUaGVyZSBpcyBwcm9iYWJseSBzb21lIG1hdGhlbWF0aWNhbAoJICAgICAgICAgICAgICAgIC8vIHdheSB0byBkZXRlY3QgdGhpcyBhYm91dCB0aGUgdHJhbnNmb3JtYXRpb24gdGhhdCBJIGRvbid0IGtub3cgeWV0LgoJICAgICAgICAgICAgICAgIC8vIFRoaXMgcmVzdWx0cyBpbiBhbiB1Z2x5IHJ1bnRpbWUgZXhjZXB0aW9uIGRlc3BpdGUgb3VyIGNsZXZlciBjaGVja3MgYWJvdmUgLS0gY2FuJ3QgaGF2ZQoJICAgICAgICAgICAgICAgIC8vIHRoYXQuIFdlIGNvdWxkIGNoZWNrIGVhY2ggcG9pbnQncyBjb29yZGluYXRlcyBidXQgdGhhdCBmZWVscyBkdXBsaWNhdGl2ZS4gV2Ugc2V0dGxlIGZvcgoJICAgICAgICAgICAgICAgIC8vIGNhdGNoaW5nIGFuZCB3cmFwcGluZyBBcnJheUluZGV4T3V0T2ZCb3VuZHNFeGNlcHRpb24uCgkgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uXzEkNC5kZWZhdWx0KCk7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGJpdHM7CgkgICAgfTsKCSAgICByZXR1cm4gRGVmYXVsdEdyaWRTYW1wbGVyOwoJfShHcmlkU2FtcGxlcl8xLmRlZmF1bHQpKTsKCURlZmF1bHRHcmlkU2FtcGxlciQxLmRlZmF1bHQgPSBEZWZhdWx0R3JpZFNhbXBsZXI7CgoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEdyaWRTYW1wbGVySW5zdGFuY2UkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJdmFyIERlZmF1bHRHcmlkU2FtcGxlcl8xID0gRGVmYXVsdEdyaWRTYW1wbGVyJDE7Cgl2YXIgR3JpZFNhbXBsZXJJbnN0YW5jZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBHcmlkU2FtcGxlckluc3RhbmNlKCkgewoJICAgIH0KCSAgICAvKioKCSAgICAgKiBTZXRzIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiBHcmlkU2FtcGxlciB1c2VkIGJ5IHRoZSBsaWJyYXJ5LiBPbmUgZ2xvYmFsCgkgICAgICogaW5zdGFuY2UgaXMgc3RvcmVkLCB3aGljaCBtYXkgc291bmQgcHJvYmxlbWF0aWMuIEJ1dCwgdGhlIGltcGxlbWVudGF0aW9uIHByb3ZpZGVkCgkgICAgICogb3VnaHQgdG8gYmUgYXBwcm9wcmlhdGUgZm9yIHRoZSBlbnRpcmUgcGxhdGZvcm0sIGFuZCBhbGwgdXNlcyBvZiB0aGlzIGxpYnJhcnkKCSAgICAgKiBpbiB0aGUgd2hvbGUgbGlmZXRpbWUgb2YgdGhlIEpWTS4gRm9yIGluc3RhbmNlLCBhbiBBbmRyb2lkIGFjdGl2aXR5IGNhbiBzd2FwIGluCgkgICAgICogYW4gaW1wbGVtZW50YXRpb24gdGhhdCB0YWtlcyBhZHZhbnRhZ2Ugb2YgbmF0aXZlIHBsYXRmb3JtIGxpYnJhcmllcy4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBuZXdHcmlkU2FtcGxlciBUaGUgcGxhdGZvcm0tc3BlY2lmaWMgb2JqZWN0IHRvIGluc3RhbGwuCgkgICAgICovCgkgICAgR3JpZFNhbXBsZXJJbnN0YW5jZS5zZXRHcmlkU2FtcGxlciA9IGZ1bmN0aW9uIChuZXdHcmlkU2FtcGxlcikgewoJICAgICAgICBHcmlkU2FtcGxlckluc3RhbmNlLmdyaWRTYW1wbGVyID0gbmV3R3JpZFNhbXBsZXI7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIHRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIEdyaWRTYW1wbGVyCgkgICAgICovCgkgICAgR3JpZFNhbXBsZXJJbnN0YW5jZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIEdyaWRTYW1wbGVySW5zdGFuY2UuZ3JpZFNhbXBsZXI7CgkgICAgfTsKCSAgICBHcmlkU2FtcGxlckluc3RhbmNlLmdyaWRTYW1wbGVyID0gbmV3IERlZmF1bHRHcmlkU2FtcGxlcl8xLmRlZmF1bHQoKTsKCSAgICByZXR1cm4gR3JpZFNhbXBsZXJJbnN0YW5jZTsKCX0oKSk7CglHcmlkU2FtcGxlckluc3RhbmNlJDEuZGVmYXVsdCA9IEdyaWRTYW1wbGVySW5zdGFuY2U7CgoJdmFyIFJlc3VsdFBvaW50JDEgPSB7fTsKCgl2YXIgRmxvYXQkMSA9IHt9OwoKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdCQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7CgkvKioKCSAqIFBvbnlmaWxsIGZvciBKYXZhJ3MgRmxvYXQgY2xhc3MuCgkgKi8KCXZhciBGbG9hdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBGbG9hdCgpIHsKCSAgICB9CgkgICAgLyoqCgkgICAgICogU2luY1RTIGhhcyBubyBkaWZmZXJlbmNlIGJldHdlZW4gaW50IGFuZCBmbG9hdCwgdGhlcmUncyBhbGwgbnVtYmVycywKCSAgICAgKiB0aGlzIGlzIHVzZWQgb25seSB0byBwb2x5ZmlsbCBKYXZhIGNvZGUuCgkgICAgICovCgkgICAgRmxvYXQuZmxvYXRUb0ludEJpdHMgPSBmdW5jdGlvbiAoZikgewoJICAgICAgICByZXR1cm4gZjsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFRoZSBmbG9hdCBtYXggdmFsdWUgaW4gSlMgaXMgdGhlIG51bWJlciBtYXggdmFsdWUuCgkgICAgICovCgkgICAgRmxvYXQuTUFYX1ZBTFVFID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7CgkgICAgcmV0dXJuIEZsb2F0OwoJfSgpKTsKCUZsb2F0JDEuZGVmYXVsdCA9IEZsb2F0OwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzdWx0UG9pbnQkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZyB7Ki8KCXZhciBNYXRoVXRpbHNfMSQxID0gTWF0aFV0aWxzJDE7Cgl2YXIgRmxvYXRfMSA9IEZsb2F0JDE7CgkvKioKCSAqIDxwPkVuY2Fwc3VsYXRlcyBhIHBvaW50IG9mIGludGVyZXN0IGluIGFuIGltYWdlIGNvbnRhaW5pbmcgYSBiYXJjb2RlLiBUeXBpY2FsbHksIHRoaXMKCSAqIHdvdWxkIGJlIHRoZSBsb2NhdGlvbiBvZiBhIGZpbmRlciBwYXR0ZXJuIG9yIHRoZSBjb3JuZXIgb2YgdGhlIGJhcmNvZGUsIGZvciBleGFtcGxlLjwvcD4KCSAqCgkgKiBAYXV0aG9yIFNlYW4gT3dlbgoJICovCgl2YXIgUmVzdWx0UG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgZnVuY3Rpb24gUmVzdWx0UG9pbnQoeCwgeSkgewoJICAgICAgICB0aGlzLnggPSB4OwoJICAgICAgICB0aGlzLnkgPSB5OwoJICAgIH0KCSAgICBSZXN1bHRQb2ludC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMueDsKCSAgICB9OwoJICAgIFJlc3VsdFBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy55OwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIFJlc3VsdFBvaW50LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob3RoZXIpIHsKCSAgICAgICAgaWYgKG90aGVyIGluc3RhbmNlb2YgUmVzdWx0UG9pbnQpIHsKCSAgICAgICAgICAgIHZhciBvdGhlclBvaW50ID0gb3RoZXI7CgkgICAgICAgICAgICByZXR1cm4gdGhpcy54ID09PSBvdGhlclBvaW50LnggJiYgdGhpcy55ID09PSBvdGhlclBvaW50Lnk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgIH07CgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIFJlc3VsdFBvaW50LnByb3RvdHlwZS5oYXNoQ29kZSA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIDMxICogRmxvYXRfMS5kZWZhdWx0LmZsb2F0VG9JbnRCaXRzKHRoaXMueCkgKyBGbG9hdF8xLmRlZmF1bHQuZmxvYXRUb0ludEJpdHModGhpcy55KTsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBSZXN1bHRQb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiAnKCcgKyB0aGlzLnggKyAnLCcgKyB0aGlzLnkgKyAnKSc7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBPcmRlcnMgYW4gYXJyYXkgb2YgdGhyZWUgUmVzdWx0UG9pbnRzIGluIGFuIG9yZGVyIFtBLEIsQ10gc3VjaCB0aGF0IEFCIGlzIGxlc3MgdGhhbiBBQwoJICAgICAqIGFuZCBCQyBpcyBsZXNzIHRoYW4gQUMsIGFuZCB0aGUgYW5nbGUgYmV0d2VlbiBCQyBhbmQgQkEgaXMgbGVzcyB0aGFuIDE4MCBkZWdyZWVzLgoJICAgICAqCgkgICAgICogQHBhcmFtIHBhdHRlcm5zIGFycmF5IG9mIHRocmVlIHtAY29kZSBSZXN1bHRQb2ludH0gdG8gb3JkZXIKCSAgICAgKi8KCSAgICBSZXN1bHRQb2ludC5vcmRlckJlc3RQYXR0ZXJucyA9IGZ1bmN0aW9uIChwYXR0ZXJucykgewoJICAgICAgICAvLyBGaW5kIGRpc3RhbmNlcyBiZXR3ZWVuIHBhdHRlcm4gY2VudGVycwoJICAgICAgICB2YXIgemVyb09uZURpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShwYXR0ZXJuc1swXSwgcGF0dGVybnNbMV0pOwoJICAgICAgICB2YXIgb25lVHdvRGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKHBhdHRlcm5zWzFdLCBwYXR0ZXJuc1syXSk7CgkgICAgICAgIHZhciB6ZXJvVHdvRGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKHBhdHRlcm5zWzBdLCBwYXR0ZXJuc1syXSk7CgkgICAgICAgIHZhciBwb2ludEE7CgkgICAgICAgIHZhciBwb2ludEI7CgkgICAgICAgIHZhciBwb2ludEM7CgkgICAgICAgIC8vIEFzc3VtZSBvbmUgY2xvc2VzdCB0byBvdGhlciB0d28gaXMgQjsgQSBhbmQgQyB3aWxsIGp1c3QgYmUgZ3Vlc3NlcyBhdCBmaXJzdAoJICAgICAgICBpZiAob25lVHdvRGlzdGFuY2UgPj0gemVyb09uZURpc3RhbmNlICYmIG9uZVR3b0Rpc3RhbmNlID49IHplcm9Ud29EaXN0YW5jZSkgewoJICAgICAgICAgICAgcG9pbnRCID0gcGF0dGVybnNbMF07CgkgICAgICAgICAgICBwb2ludEEgPSBwYXR0ZXJuc1sxXTsKCSAgICAgICAgICAgIHBvaW50QyA9IHBhdHRlcm5zWzJdOwoJICAgICAgICB9CgkgICAgICAgIGVsc2UgaWYgKHplcm9Ud29EaXN0YW5jZSA+PSBvbmVUd29EaXN0YW5jZSAmJiB6ZXJvVHdvRGlzdGFuY2UgPj0gemVyb09uZURpc3RhbmNlKSB7CgkgICAgICAgICAgICBwb2ludEIgPSBwYXR0ZXJuc1sxXTsKCSAgICAgICAgICAgIHBvaW50QSA9IHBhdHRlcm5zWzBdOwoJICAgICAgICAgICAgcG9pbnRDID0gcGF0dGVybnNbMl07CgkgICAgICAgIH0KCSAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICBwb2ludEIgPSBwYXR0ZXJuc1syXTsKCSAgICAgICAgICAgIHBvaW50QSA9IHBhdHRlcm5zWzBdOwoJICAgICAgICAgICAgcG9pbnRDID0gcGF0dGVybnNbMV07CgkgICAgICAgIH0KCSAgICAgICAgLy8gVXNlIGNyb3NzIHByb2R1Y3QgdG8gZmlndXJlIG91dCB3aGV0aGVyIEEgYW5kIEMgYXJlIGNvcnJlY3Qgb3IgZmxpcHBlZC4KCSAgICAgICAgLy8gVGhpcyBhc2tzIHdoZXRoZXIgQkMgeCBCQSBoYXMgYSBwb3NpdGl2ZSB6IGNvbXBvbmVudCwgd2hpY2ggaXMgdGhlIGFycmFuZ2VtZW50CgkgICAgICAgIC8vIHdlIHdhbnQgZm9yIEEsIEIsIEMuIElmIGl0J3MgbmVnYXRpdmUsIHRoZW4gd2UndmUgZ290IGl0IGZsaXBwZWQgYXJvdW5kIGFuZAoJICAgICAgICAvLyBzaG91bGQgc3dhcCBBIGFuZCBDLgoJICAgICAgICBpZiAodGhpcy5jcm9zc1Byb2R1Y3RaKHBvaW50QSwgcG9pbnRCLCBwb2ludEMpIDwgMC4wKSB7CgkgICAgICAgICAgICB2YXIgdGVtcCA9IHBvaW50QTsKCSAgICAgICAgICAgIHBvaW50QSA9IHBvaW50QzsKCSAgICAgICAgICAgIHBvaW50QyA9IHRlbXA7CgkgICAgICAgIH0KCSAgICAgICAgcGF0dGVybnNbMF0gPSBwb2ludEE7CgkgICAgICAgIHBhdHRlcm5zWzFdID0gcG9pbnRCOwoJICAgICAgICBwYXR0ZXJuc1syXSA9IHBvaW50QzsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEBwYXJhbSBwYXR0ZXJuMSBmaXJzdCBwYXR0ZXJuCgkgICAgICogQHBhcmFtIHBhdHRlcm4yIHNlY29uZCBwYXR0ZXJuCgkgICAgICogQHJldHVybiBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHMKCSAgICAgKi8KCSAgICBSZXN1bHRQb2ludC5kaXN0YW5jZSA9IGZ1bmN0aW9uIChwYXR0ZXJuMSwgcGF0dGVybjIpIHsKCSAgICAgICAgcmV0dXJuIE1hdGhVdGlsc18xJDEuZGVmYXVsdC5kaXN0YW5jZShwYXR0ZXJuMS54LCBwYXR0ZXJuMS55LCBwYXR0ZXJuMi54LCBwYXR0ZXJuMi55KTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIFJldHVybnMgdGhlIHogY29tcG9uZW50IG9mIHRoZSBjcm9zcyBwcm9kdWN0IGJldHdlZW4gdmVjdG9ycyBCQyBhbmQgQkEuCgkgICAgICovCgkgICAgUmVzdWx0UG9pbnQuY3Jvc3NQcm9kdWN0WiA9IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50QiwgcG9pbnRDKSB7CgkgICAgICAgIHZhciBiWCA9IHBvaW50Qi54OwoJICAgICAgICB2YXIgYlkgPSBwb2ludEIueTsKCSAgICAgICAgcmV0dXJuICgocG9pbnRDLnggLSBiWCkgKiAocG9pbnRBLnkgLSBiWSkpIC0gKChwb2ludEMueSAtIGJZKSAqIChwb2ludEEueCAtIGJYKSk7CgkgICAgfTsKCSAgICByZXR1cm4gUmVzdWx0UG9pbnQ7Cgl9KCkpOwoJUmVzdWx0UG9pbnQkMS5kZWZhdWx0ID0gUmVzdWx0UG9pbnQ7CgoJdmFyIEFsaWdubWVudFBhdHRlcm5GaW5kZXIkMSA9IHt9OwoKCXZhciBBbGlnbm1lbnRQYXR0ZXJuJDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJdmFyIF9fZXh0ZW5kcyQxID0gKGNvbW1vbmpzR2xvYmFsICYmIGNvbW1vbmpzR2xvYmFsLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHsKCSAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwKCSAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHwKCSAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9OwoJICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTsKCSAgICB9OwoJICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikgewoJICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH0KCSAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpOwoJICAgIH07Cgl9KSgpOwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEFsaWdubWVudFBhdHRlcm4kMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZy5xcmNvZGUuZGV0ZWN0b3IgeyovCgl2YXIgUmVzdWx0UG9pbnRfMSQzID0gUmVzdWx0UG9pbnQkMTsKCS8qKgoJICogPHA+RW5jYXBzdWxhdGVzIGFuIGFsaWdubWVudCBwYXR0ZXJuLCB3aGljaCBhcmUgdGhlIHNtYWxsZXIgc3F1YXJlIHBhdHRlcm5zIGZvdW5kIGluCgkgKiBhbGwgYnV0IHRoZSBzaW1wbGVzdCBRUiBDb2Rlcy48L3A+CgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIEFsaWdubWVudFBhdHRlcm4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7CgkgICAgX19leHRlbmRzJDEoQWxpZ25tZW50UGF0dGVybiwgX3N1cGVyKTsKCSAgICBmdW5jdGlvbiBBbGlnbm1lbnRQYXR0ZXJuKHBvc1ggLypmbG9hdCovLCBwb3NZIC8qZmxvYXQqLywgZXN0aW1hdGVkTW9kdWxlU2l6ZSAvKmZsb2F0Ki8pIHsKCSAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcG9zWCwgcG9zWSkgfHwgdGhpczsKCSAgICAgICAgX3RoaXMuZXN0aW1hdGVkTW9kdWxlU2l6ZSA9IGVzdGltYXRlZE1vZHVsZVNpemU7CgkgICAgICAgIHJldHVybiBfdGhpczsKCSAgICB9CgkgICAgLyoqCgkgICAgICogPHA+RGV0ZXJtaW5lcyBpZiB0aGlzIGFsaWdubWVudCBwYXR0ZXJuICJhYm91dCBlcXVhbHMiIGFuIGFsaWdubWVudCBwYXR0ZXJuIGF0IHRoZSBzdGF0ZWQKCSAgICAgKiBwb3NpdGlvbiBhbmQgc2l6ZSAtLSBtZWFuaW5nLCBpdCBpcyBhdCBuZWFybHkgdGhlIHNhbWUgY2VudGVyIHdpdGggbmVhcmx5IHRoZSBzYW1lIHNpemUuPC9wPgoJICAgICAqLwoJICAgIEFsaWdubWVudFBhdHRlcm4ucHJvdG90eXBlLmFib3V0RXF1YWxzID0gZnVuY3Rpb24gKG1vZHVsZVNpemUgLypmbG9hdCovLCBpIC8qZmxvYXQqLywgaiAvKmZsb2F0Ki8pIHsKCSAgICAgICAgaWYgKE1hdGguYWJzKGkgLSB0aGlzLmdldFkoKSkgPD0gbW9kdWxlU2l6ZSAmJiBNYXRoLmFicyhqIC0gdGhpcy5nZXRYKCkpIDw9IG1vZHVsZVNpemUpIHsKCSAgICAgICAgICAgIHZhciBtb2R1bGVTaXplRGlmZiA9IE1hdGguYWJzKG1vZHVsZVNpemUgLSB0aGlzLmVzdGltYXRlZE1vZHVsZVNpemUpOwoJICAgICAgICAgICAgcmV0dXJuIG1vZHVsZVNpemVEaWZmIDw9IDEuMCB8fCBtb2R1bGVTaXplRGlmZiA8PSB0aGlzLmVzdGltYXRlZE1vZHVsZVNpemU7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQ29tYmluZXMgdGhpcyBvYmplY3QncyBjdXJyZW50IGVzdGltYXRlIG9mIGEgZmluZGVyIHBhdHRlcm4gcG9zaXRpb24gYW5kIG1vZHVsZSBzaXplCgkgICAgICogd2l0aCBhIG5ldyBlc3RpbWF0ZS4gSXQgcmV0dXJucyBhIG5ldyB7QGNvZGUgRmluZGVyUGF0dGVybn0gY29udGFpbmluZyBhbiBhdmVyYWdlIG9mIHRoZSB0d28uCgkgICAgICovCgkgICAgQWxpZ25tZW50UGF0dGVybi5wcm90b3R5cGUuY29tYmluZUVzdGltYXRlID0gZnVuY3Rpb24gKGkgLypmbG9hdCovLCBqIC8qZmxvYXQqLywgbmV3TW9kdWxlU2l6ZSAvKmZsb2F0Ki8pIHsKCSAgICAgICAgdmFyIGNvbWJpbmVkWCA9ICh0aGlzLmdldFgoKSArIGopIC8gMi4wOwoJICAgICAgICB2YXIgY29tYmluZWRZID0gKHRoaXMuZ2V0WSgpICsgaSkgLyAyLjA7CgkgICAgICAgIHZhciBjb21iaW5lZE1vZHVsZVNpemUgPSAodGhpcy5lc3RpbWF0ZWRNb2R1bGVTaXplICsgbmV3TW9kdWxlU2l6ZSkgLyAyLjA7CgkgICAgICAgIHJldHVybiBuZXcgQWxpZ25tZW50UGF0dGVybihjb21iaW5lZFgsIGNvbWJpbmVkWSwgY29tYmluZWRNb2R1bGVTaXplKTsKCSAgICB9OwoJICAgIHJldHVybiBBbGlnbm1lbnRQYXR0ZXJuOwoJfShSZXN1bHRQb2ludF8xJDMuZGVmYXVsdCkpOwoJQWxpZ25tZW50UGF0dGVybiQxLmRlZmF1bHQgPSBBbGlnbm1lbnRQYXR0ZXJuOwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCgl2YXIgX192YWx1ZXMkMSA9IChjb21tb25qc0dsb2JhbCAmJiBjb21tb25qc0dsb2JhbC5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykgewoJICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwOwoJICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pOwoJICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gIm51bWJlciIpIHJldHVybiB7CgkgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7CgkgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07CgkgICAgICAgIH0KCSAgICB9OwoJICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/ICJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLiIgOiAiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLiIpOwoJfTsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbGlnbm1lbnRQYXR0ZXJuRmluZGVyJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCXZhciBBbGlnbm1lbnRQYXR0ZXJuXzEgPSBBbGlnbm1lbnRQYXR0ZXJuJDE7Cgl2YXIgTm90Rm91bmRFeGNlcHRpb25fMSQzID0gTm90Rm91bmRFeGNlcHRpb24kMTsKCS8qaW1wb3J0IGphdmEudXRpbC5BcnJheUxpc3Q7Ki8KCS8qaW1wb3J0IGphdmEudXRpbC5MaXN0OyovCgkvKioKCSAqIDxwPlRoaXMgY2xhc3MgYXR0ZW1wdHMgdG8gZmluZCBhbGlnbm1lbnQgcGF0dGVybnMgaW4gYSBRUiBDb2RlLiBBbGlnbm1lbnQgcGF0dGVybnMgbG9vayBsaWtlIGZpbmRlcgoJICogcGF0dGVybnMgYnV0IGFyZSBzbWFsbGVyIGFuZCBhcHBlYXIgYXQgcmVndWxhciBpbnRlcnZhbHMgdGhyb3VnaG91dCB0aGUgaW1hZ2UuPC9wPgoJICoKCSAqIDxwPkF0IHRoZSBtb21lbnQgdGhpcyBvbmx5IGxvb2tzIGZvciB0aGUgYm90dG9tLXJpZ2h0IGFsaWdubWVudCBwYXR0ZXJuLjwvcD4KCSAqCgkgKiA8cD5UaGlzIGlzIG1vc3RseSBhIHNpbXBsaWZpZWQgY29weSBvZiB7QGxpbmsgRmluZGVyUGF0dGVybkZpbmRlcn0uIEl0IGlzIGNvcGllZCwKCSAqIHBhc3RlZCBhbmQgc3RyaXBwZWQgZG93biBoZXJlIGZvciBtYXhpbXVtIHBlcmZvcm1hbmNlIGJ1dCBkb2VzIHVuZm9ydHVuYXRlbHkgZHVwbGljYXRlCgkgKiBzb21lIGNvZGUuPC9wPgoJICoKCSAqIDxwPlRoaXMgY2xhc3MgaXMgdGhyZWFkLXNhZmUgYnV0IG5vdCByZWVudHJhbnQuIEVhY2ggdGhyZWFkIG11c3QgYWxsb2NhdGUgaXRzIG93biBvYmplY3QuPC9wPgoJICoKCSAqIEBhdXRob3IgU2VhbiBPd2VuCgkgKi8KCXZhciBBbGlnbm1lbnRQYXR0ZXJuRmluZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIC8qKgoJICAgICAqIDxwPkNyZWF0ZXMgYSBmaW5kZXIgdGhhdCB3aWxsIGxvb2sgaW4gYSBwb3J0aW9uIG9mIHRoZSB3aG9sZSBpbWFnZS48L3A+CgkgICAgICoKCSAgICAgKiBAcGFyYW0gaW1hZ2UgaW1hZ2UgdG8gc2VhcmNoCgkgICAgICogQHBhcmFtIHN0YXJ0WCBsZWZ0IGNvbHVtbiBmcm9tIHdoaWNoIHRvIHN0YXJ0IHNlYXJjaGluZwoJICAgICAqIEBwYXJhbSBzdGFydFkgdG9wIHJvdyBmcm9tIHdoaWNoIHRvIHN0YXJ0IHNlYXJjaGluZwoJICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiByZWdpb24gdG8gc2VhcmNoCgkgICAgICogQHBhcmFtIGhlaWdodCBoZWlnaHQgb2YgcmVnaW9uIHRvIHNlYXJjaAoJICAgICAqIEBwYXJhbSBtb2R1bGVTaXplIGVzdGltYXRlZCBtb2R1bGUgc2l6ZSBzbyBmYXIKCSAgICAgKi8KCSAgICBmdW5jdGlvbiBBbGlnbm1lbnRQYXR0ZXJuRmluZGVyKGltYWdlLCBzdGFydFggLyppbnQqLywgc3RhcnRZIC8qaW50Ki8sIHdpZHRoIC8qaW50Ki8sIGhlaWdodCAvKmludCovLCBtb2R1bGVTaXplIC8qZmxvYXQqLywgcmVzdWx0UG9pbnRDYWxsYmFjaykgewoJICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7CgkgICAgICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYOwoJICAgICAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WTsKCSAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoOwoJICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDsKCSAgICAgICAgdGhpcy5tb2R1bGVTaXplID0gbW9kdWxlU2l6ZTsKCSAgICAgICAgdGhpcy5yZXN1bHRQb2ludENhbGxiYWNrID0gcmVzdWx0UG9pbnRDYWxsYmFjazsKCSAgICAgICAgdGhpcy5wb3NzaWJsZUNlbnRlcnMgPSBbXTsgLy8gbmV3IEFycmF5PGFueT4oNSkpCgkgICAgICAgIC8vIFRZUEVTQ1JJUFRQT1JUOiBhcnJheSBpbml0aWFsaXphdGlvbiB3aXRob3V0IHNpemUgYXMgdGhlIGxlbmd0aCBpcyBjaGVja2VkIGJlbG93CgkgICAgICAgIHRoaXMuY3Jvc3NDaGVja1N0YXRlQ291bnQgPSBuZXcgSW50MzJBcnJheSgzKTsKCSAgICB9CgkgICAgLyoqCgkgICAgICogPHA+VGhpcyBtZXRob2QgYXR0ZW1wdHMgdG8gZmluZCB0aGUgYm90dG9tLXJpZ2h0IGFsaWdubWVudCBwYXR0ZXJuIGluIHRoZSBpbWFnZS4gSXQgaXMgYSBiaXQgbWVzc3kgc2luY2UKCSAgICAgKiBpdCdzIHByZXR0eSBwZXJmb3JtYW5jZS1jcml0aWNhbCBhbmQgc28gaXMgd3JpdHRlbiB0byBiZSBmYXN0IGZvcmVtb3N0LjwvcD4KCSAgICAgKgoJICAgICAqIEByZXR1cm4ge0BsaW5rIEFsaWdubWVudFBhdHRlcm59IGlmIGZvdW5kCgkgICAgICogQHRocm93cyBOb3RGb3VuZEV4Y2VwdGlvbiBpZiBub3QgZm91bmQKCSAgICAgKi8KCSAgICBBbGlnbm1lbnRQYXR0ZXJuRmluZGVyLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgc3RhcnRYID0gdGhpcy5zdGFydFg7CgkgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDsKCSAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDsKCSAgICAgICAgdmFyIG1heEogPSBzdGFydFggKyB3aWR0aDsKCSAgICAgICAgdmFyIG1pZGRsZUkgPSB0aGlzLnN0YXJ0WSArIChoZWlnaHQgLyAyKTsKCSAgICAgICAgLy8gV2UgYXJlIGxvb2tpbmcgZm9yIGJsYWNrL3doaXRlL2JsYWNrIG1vZHVsZXMgaW4gMToxOjEgcmF0aW8KCSAgICAgICAgLy8gdGhpcyB0cmFja3MgdGhlIG51bWJlciBvZiBibGFjay93aGl0ZS9ibGFjayBtb2R1bGVzIHNlZW4gc28gZmFyCgkgICAgICAgIHZhciBzdGF0ZUNvdW50ID0gbmV3IEludDMyQXJyYXkoMyk7CgkgICAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2U7CgkgICAgICAgIGZvciAodmFyIGlHZW4gPSAwOyBpR2VuIDwgaGVpZ2h0OyBpR2VuKyspIHsKCSAgICAgICAgICAgIC8vIFNlYXJjaCBmcm9tIG1pZGRsZSBvdXR3YXJkcwoJICAgICAgICAgICAgdmFyIGkgPSBtaWRkbGVJICsgKChpR2VuICYgMHgwMSkgPT09IDAgPyBNYXRoLmZsb29yKChpR2VuICsgMSkgLyAyKSA6IC1NYXRoLmZsb29yKChpR2VuICsgMSkgLyAyKSk7CgkgICAgICAgICAgICBzdGF0ZUNvdW50WzBdID0gMDsKCSAgICAgICAgICAgIHN0YXRlQ291bnRbMV0gPSAwOwoJICAgICAgICAgICAgc3RhdGVDb3VudFsyXSA9IDA7CgkgICAgICAgICAgICB2YXIgaiA9IHN0YXJ0WDsKCSAgICAgICAgICAgIC8vIEJ1cm4gb2ZmIGxlYWRpbmcgd2hpdGUgcGl4ZWxzIGJlZm9yZSBhbnl0aGluZyBlbHNlOyBpZiB3ZSBzdGFydCBpbiB0aGUgbWlkZGxlIG9mCgkgICAgICAgICAgICAvLyBhIHdoaXRlIHJ1biwgaXQgZG9lc24ndCBtYWtlIHNlbnNlIHRvIGNvdW50IGl0cyBsZW5ndGgsIHNpbmNlIHdlIGRvbid0IGtub3cgaWYgdGhlCgkgICAgICAgICAgICAvLyB3aGl0ZSBydW4gY29udGludWVkIHRvIHRoZSBsZWZ0IG9mIHRoZSBzdGFydCBwb2ludAoJICAgICAgICAgICAgd2hpbGUgKGogPCBtYXhKICYmICFpbWFnZS5nZXQoaiwgaSkpIHsKCSAgICAgICAgICAgICAgICBqKys7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gMDsKCSAgICAgICAgICAgIHdoaWxlIChqIDwgbWF4SikgewoJICAgICAgICAgICAgICAgIGlmIChpbWFnZS5nZXQoaiwgaSkpIHsKCSAgICAgICAgICAgICAgICAgICAgLy8gQmxhY2sgcGl4ZWwKCSAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gMSkgeyAvLyBDb3VudGluZyBibGFjayBwaXhlbHMKCSAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ291bnRbMV0rKzsKCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICBlbHNlIHsgLy8gQ291bnRpbmcgd2hpdGUgcGl4ZWxzCgkgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSAyKSB7IC8vIEEgd2lubmVyPwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvdW5kUGF0dGVybkNyb3NzKHN0YXRlQ291bnQpKSB7IC8vIFllcwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWVkID0gdGhpcy5oYW5kbGVQb3NzaWJsZUNlbnRlcihzdGF0ZUNvdW50LCBpLCBqKTsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCAhPT0gbnVsbCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm1lZDsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50WzBdID0gc3RhdGVDb3VudFsyXTsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50WzFdID0gMTsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50WzJdID0gMDsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAxOwoJICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDb3VudFsrK2N1cnJlbnRTdGF0ZV0rKzsKCSAgICAgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBlbHNlIHsgLy8gV2hpdGUgcGl4ZWwKCSAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gMSkgeyAvLyBDb3VudGluZyBibGFjayBwaXhlbHMKCSAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSsrOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIHN0YXRlQ291bnRbY3VycmVudFN0YXRlXSsrOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBqKys7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBpZiAodGhpcy5mb3VuZFBhdHRlcm5Dcm9zcyhzdGF0ZUNvdW50KSkgewoJICAgICAgICAgICAgICAgIHZhciBjb25maXJtZWQgPSB0aGlzLmhhbmRsZVBvc3NpYmxlQ2VudGVyKHN0YXRlQ291bnQsIGksIG1heEopOwoJICAgICAgICAgICAgICAgIGlmIChjb25maXJtZWQgIT09IG51bGwpIHsKCSAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm1lZDsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgLy8gSG1tLCBub3RoaW5nIHdlIHNhdyB3YXMgb2JzZXJ2ZWQgYW5kIGNvbmZpcm1lZCB0d2ljZS4gSWYgd2UgaGFkCgkgICAgICAgIC8vIGFueSBndWVzcyBhdCBhbGwsIHJldHVybiBpdC4KCSAgICAgICAgaWYgKHRoaXMucG9zc2libGVDZW50ZXJzLmxlbmd0aCAhPT0gMCkgewoJICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zc2libGVDZW50ZXJzWzBdOwoJICAgICAgICB9CgkgICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEV4Y2VwdGlvbl8xJDMuZGVmYXVsdCgpOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogR2l2ZW4gYSBjb3VudCBvZiBibGFjay93aGl0ZS9ibGFjayBwaXhlbHMganVzdCBzZWVuIGFuZCBhbiBlbmQgcG9zaXRpb24sCgkgICAgICogZmlndXJlcyB0aGUgbG9jYXRpb24gb2YgdGhlIGNlbnRlciBvZiB0aGlzIGJsYWNrL3doaXRlL2JsYWNrIHJ1bi4KCSAgICAgKi8KCSAgICBBbGlnbm1lbnRQYXR0ZXJuRmluZGVyLmNlbnRlckZyb21FbmQgPSBmdW5jdGlvbiAoc3RhdGVDb3VudCwgZW5kIC8qaW50Ki8pIHsKCSAgICAgICAgcmV0dXJuIChlbmQgLSBzdGF0ZUNvdW50WzJdKSAtIHN0YXRlQ291bnRbMV0gLyAyLjA7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcGFyYW0gc3RhdGVDb3VudCBjb3VudCBvZiBibGFjay93aGl0ZS9ibGFjayBwaXhlbHMganVzdCByZWFkCgkgICAgICogQHJldHVybiB0cnVlIGlmZiB0aGUgcHJvcG9ydGlvbnMgb2YgdGhlIGNvdW50cyBpcyBjbG9zZSBlbm91Z2ggdG8gdGhlIDEvMS8xIHJhdGlvcwoJICAgICAqICAgICAgICAgdXNlZCBieSBhbGlnbm1lbnQgcGF0dGVybnMgdG8gYmUgY29uc2lkZXJlZCBhIG1hdGNoCgkgICAgICovCgkgICAgQWxpZ25tZW50UGF0dGVybkZpbmRlci5wcm90b3R5cGUuZm91bmRQYXR0ZXJuQ3Jvc3MgPSBmdW5jdGlvbiAoc3RhdGVDb3VudCkgewoJICAgICAgICB2YXIgbW9kdWxlU2l6ZSA9IHRoaXMubW9kdWxlU2l6ZTsKCSAgICAgICAgdmFyIG1heFZhcmlhbmNlID0gbW9kdWxlU2l6ZSAvIDIuMDsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHsKCSAgICAgICAgICAgIGlmIChNYXRoLmFicyhtb2R1bGVTaXplIC0gc3RhdGVDb3VudFtpXSkgPj0gbWF4VmFyaWFuY2UpIHsKCSAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHRydWU7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiA8cD5BZnRlciBhIGhvcml6b250YWwgc2NhbiBmaW5kcyBhIHBvdGVudGlhbCBhbGlnbm1lbnQgcGF0dGVybiwgdGhpcyBtZXRob2QKCSAgICAgKiAiY3Jvc3MtY2hlY2tzIiBieSBzY2FubmluZyBkb3duIHZlcnRpY2FsbHkgdGhyb3VnaCB0aGUgY2VudGVyIG9mIHRoZSBwb3NzaWJsZQoJICAgICAqIGFsaWdubWVudCBwYXR0ZXJuIHRvIHNlZSBpZiB0aGUgc2FtZSBwcm9wb3J0aW9uIGlzIGRldGVjdGVkLjwvcD4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBzdGFydEkgcm93IHdoZXJlIGFuIGFsaWdubWVudCBwYXR0ZXJuIHdhcyBkZXRlY3RlZAoJICAgICAqIEBwYXJhbSBjZW50ZXJKIGNlbnRlciBvZiB0aGUgc2VjdGlvbiB0aGF0IGFwcGVhcnMgdG8gY3Jvc3MgYW4gYWxpZ25tZW50IHBhdHRlcm4KCSAgICAgKiBAcGFyYW0gbWF4Q291bnQgbWF4aW11bSByZWFzb25hYmxlIG51bWJlciBvZiBtb2R1bGVzIHRoYXQgc2hvdWxkIGJlCgkgICAgICogb2JzZXJ2ZWQgaW4gYW55IHJlYWRpbmcgc3RhdGUsIGJhc2VkIG9uIHRoZSByZXN1bHRzIG9mIHRoZSBob3Jpem9udGFsIHNjYW4KCSAgICAgKiBAcmV0dXJuIHZlcnRpY2FsIGNlbnRlciBvZiBhbGlnbm1lbnQgcGF0dGVybiwgb3Ige0BsaW5rIEZsb2F0I05hTn0gaWYgbm90IGZvdW5kCgkgICAgICovCgkgICAgQWxpZ25tZW50UGF0dGVybkZpbmRlci5wcm90b3R5cGUuY3Jvc3NDaGVja1ZlcnRpY2FsID0gZnVuY3Rpb24gKHN0YXJ0SSAvKmludCovLCBjZW50ZXJKIC8qaW50Ki8sIG1heENvdW50IC8qaW50Ki8sIG9yaWdpbmFsU3RhdGVDb3VudFRvdGFsIC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIGltYWdlID0gdGhpcy5pbWFnZTsKCSAgICAgICAgdmFyIG1heEkgPSBpbWFnZS5nZXRIZWlnaHQoKTsKCSAgICAgICAgdmFyIHN0YXRlQ291bnQgPSB0aGlzLmNyb3NzQ2hlY2tTdGF0ZUNvdW50OwoJICAgICAgICBzdGF0ZUNvdW50WzBdID0gMDsKCSAgICAgICAgc3RhdGVDb3VudFsxXSA9IDA7CgkgICAgICAgIHN0YXRlQ291bnRbMl0gPSAwOwoJICAgICAgICAvLyBTdGFydCBjb3VudGluZyB1cCBmcm9tIGNlbnRlcgoJICAgICAgICB2YXIgaSA9IHN0YXJ0STsKCSAgICAgICAgd2hpbGUgKGkgPj0gMCAmJiBpbWFnZS5nZXQoY2VudGVySiwgaSkgJiYgc3RhdGVDb3VudFsxXSA8PSBtYXhDb3VudCkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFsxXSsrOwoJICAgICAgICAgICAgaS0tOwoJICAgICAgICB9CgkgICAgICAgIC8vIElmIGFscmVhZHkgdG9vIG1hbnkgbW9kdWxlcyBpbiB0aGlzIHN0YXRlIG9yIHJhbiBvZmYgdGhlIGVkZ2U6CgkgICAgICAgIGlmIChpIDwgMCB8fCBzdGF0ZUNvdW50WzFdID4gbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHJldHVybiBOYU47CgkgICAgICAgIH0KCSAgICAgICAgd2hpbGUgKGkgPj0gMCAmJiAhaW1hZ2UuZ2V0KGNlbnRlckosIGkpICYmIHN0YXRlQ291bnRbMF0gPD0gbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHN0YXRlQ291bnRbMF0rKzsKCSAgICAgICAgICAgIGktLTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoc3RhdGVDb3VudFswXSA+IG1heENvdW50KSB7CgkgICAgICAgICAgICByZXR1cm4gTmFOOwoJICAgICAgICB9CgkgICAgICAgIC8vIE5vdyBhbHNvIGNvdW50IGRvd24gZnJvbSBjZW50ZXIKCSAgICAgICAgaSA9IHN0YXJ0SSArIDE7CgkgICAgICAgIHdoaWxlIChpIDwgbWF4SSAmJiBpbWFnZS5nZXQoY2VudGVySiwgaSkgJiYgc3RhdGVDb3VudFsxXSA8PSBtYXhDb3VudCkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFsxXSsrOwoJICAgICAgICAgICAgaSsrOwoJICAgICAgICB9CgkgICAgICAgIGlmIChpID09PSBtYXhJIHx8IHN0YXRlQ291bnRbMV0gPiBtYXhDb3VudCkgewoJICAgICAgICAgICAgcmV0dXJuIE5hTjsKCSAgICAgICAgfQoJICAgICAgICB3aGlsZSAoaSA8IG1heEkgJiYgIWltYWdlLmdldChjZW50ZXJKLCBpKSAmJiBzdGF0ZUNvdW50WzJdIDw9IG1heENvdW50KSB7CgkgICAgICAgICAgICBzdGF0ZUNvdW50WzJdKys7CgkgICAgICAgICAgICBpKys7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHN0YXRlQ291bnRbMl0gPiBtYXhDb3VudCkgewoJICAgICAgICAgICAgcmV0dXJuIE5hTjsKCSAgICAgICAgfQoJICAgICAgICB2YXIgc3RhdGVDb3VudFRvdGFsID0gc3RhdGVDb3VudFswXSArIHN0YXRlQ291bnRbMV0gKyBzdGF0ZUNvdW50WzJdOwoJICAgICAgICBpZiAoNSAqIE1hdGguYWJzKHN0YXRlQ291bnRUb3RhbCAtIG9yaWdpbmFsU3RhdGVDb3VudFRvdGFsKSA+PSAyICogb3JpZ2luYWxTdGF0ZUNvdW50VG90YWwpIHsKCSAgICAgICAgICAgIHJldHVybiBOYU47CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRQYXR0ZXJuQ3Jvc3Moc3RhdGVDb3VudCkgPyBBbGlnbm1lbnRQYXR0ZXJuRmluZGVyLmNlbnRlckZyb21FbmQoc3RhdGVDb3VudCwgaSkgOiBOYU47CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiA8cD5UaGlzIGlzIGNhbGxlZCB3aGVuIGEgaG9yaXpvbnRhbCBzY2FuIGZpbmRzIGEgcG9zc2libGUgYWxpZ25tZW50IHBhdHRlcm4uIEl0IHdpbGwKCSAgICAgKiBjcm9zcyBjaGVjayB3aXRoIGEgdmVydGljYWwgc2NhbiwgYW5kIGlmIHN1Y2Nlc3NmdWwsIHdpbGwgc2VlIGlmIHRoaXMgcGF0dGVybiBoYWQgYmVlbgoJICAgICAqIGZvdW5kIG9uIGEgcHJldmlvdXMgaG9yaXpvbnRhbCBzY2FuLiBJZiBzbywgd2UgY29uc2lkZXIgaXQgY29uZmlybWVkIGFuZCBjb25jbHVkZSB3ZSBoYXZlCgkgICAgICogZm91bmQgdGhlIGFsaWdubWVudCBwYXR0ZXJuLjwvcD4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBzdGF0ZUNvdW50IHJlYWRpbmcgc3RhdGUgbW9kdWxlIGNvdW50cyBmcm9tIGhvcml6b250YWwgc2NhbgoJICAgICAqIEBwYXJhbSBpIHJvdyB3aGVyZSBhbGlnbm1lbnQgcGF0dGVybiBtYXkgYmUgZm91bmQKCSAgICAgKiBAcGFyYW0gaiBlbmQgb2YgcG9zc2libGUgYWxpZ25tZW50IHBhdHRlcm4gaW4gcm93CgkgICAgICogQHJldHVybiB7QGxpbmsgQWxpZ25tZW50UGF0dGVybn0gaWYgd2UgaGF2ZSBmb3VuZCB0aGUgc2FtZSBwYXR0ZXJuIHR3aWNlLCBvciBudWxsIGlmIG5vdAoJICAgICAqLwoJICAgIEFsaWdubWVudFBhdHRlcm5GaW5kZXIucHJvdG90eXBlLmhhbmRsZVBvc3NpYmxlQ2VudGVyID0gZnVuY3Rpb24gKHN0YXRlQ291bnQsIGkgLyppbnQqLywgaiAvKmludCovKSB7CgkgICAgICAgIHZhciBlXzEsIF9hOwoJICAgICAgICB2YXIgc3RhdGVDb3VudFRvdGFsID0gc3RhdGVDb3VudFswXSArIHN0YXRlQ291bnRbMV0gKyBzdGF0ZUNvdW50WzJdOwoJICAgICAgICB2YXIgY2VudGVySiA9IEFsaWdubWVudFBhdHRlcm5GaW5kZXIuY2VudGVyRnJvbUVuZChzdGF0ZUNvdW50LCBqKTsKCSAgICAgICAgdmFyIGNlbnRlckkgPSB0aGlzLmNyb3NzQ2hlY2tWZXJ0aWNhbChpLCAvKihpbnQpICovIGNlbnRlckosIDIgKiBzdGF0ZUNvdW50WzFdLCBzdGF0ZUNvdW50VG90YWwpOwoJICAgICAgICBpZiAoIWlzTmFOKGNlbnRlckkpKSB7CgkgICAgICAgICAgICB2YXIgZXN0aW1hdGVkTW9kdWxlU2l6ZSA9IChzdGF0ZUNvdW50WzBdICsgc3RhdGVDb3VudFsxXSArIHN0YXRlQ291bnRbMl0pIC8gMy4wOwoJICAgICAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzJDEodGhpcy5wb3NzaWJsZUNlbnRlcnMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7CgkgICAgICAgICAgICAgICAgICAgIHZhciBjZW50ZXIgPSBfYy52YWx1ZTsKCSAgICAgICAgICAgICAgICAgICAgLy8gTG9vayBmb3IgYWJvdXQgdGhlIHNhbWUgY2VudGVyIGFuZCBtb2R1bGUgc2l6ZToKCSAgICAgICAgICAgICAgICAgICAgaWYgKGNlbnRlci5hYm91dEVxdWFscyhlc3RpbWF0ZWRNb2R1bGVTaXplLCBjZW50ZXJJLCBjZW50ZXJKKSkgewoJICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNlbnRlci5jb21iaW5lRXN0aW1hdGUoY2VudGVySSwgY2VudGVySiwgZXN0aW1hdGVkTW9kdWxlU2l6ZSk7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfQoJICAgICAgICAgICAgZmluYWxseSB7CgkgICAgICAgICAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICAvLyBIYWRuJ3QgZm91bmQgdGhpcyBiZWZvcmU7IHNhdmUgaXQKCSAgICAgICAgICAgIHZhciBwb2ludCA9IG5ldyBBbGlnbm1lbnRQYXR0ZXJuXzEuZGVmYXVsdChjZW50ZXJKLCBjZW50ZXJJLCBlc3RpbWF0ZWRNb2R1bGVTaXplKTsKCSAgICAgICAgICAgIHRoaXMucG9zc2libGVDZW50ZXJzLnB1c2gocG9pbnQpOwoJICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0UG9pbnRDYWxsYmFjayAhPT0gbnVsbCAmJiB0aGlzLnJlc3VsdFBvaW50Q2FsbGJhY2sgIT09IHVuZGVmaW5lZCkgewoJICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0UG9pbnRDYWxsYmFjay5mb3VuZFBvc3NpYmxlUmVzdWx0UG9pbnQocG9pbnQpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBudWxsOwoJICAgIH07CgkgICAgcmV0dXJuIEFsaWdubWVudFBhdHRlcm5GaW5kZXI7Cgl9KCkpOwoJQWxpZ25tZW50UGF0dGVybkZpbmRlciQxLmRlZmF1bHQgPSBBbGlnbm1lbnRQYXR0ZXJuRmluZGVyOwoKCXZhciBGaW5kZXJQYXR0ZXJuRmluZGVyJDEgPSB7fTsKCgl2YXIgRmluZGVyUGF0dGVybiQxID0ge307CgoJLyoKCSAqIENvcHlyaWdodCAyMDA3IFpYaW5nIGF1dGhvcnMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCgkgKgoJICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQoJICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKCSAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLgoJICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAoJICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCgkgKi8KCXZhciBfX2V4dGVuZHMgPSAoY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkgewoJICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHsKCSAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAoJICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fAoJICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07CgkgICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpOwoJICAgIH07CgkgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7CgkgICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7CgkgICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfQoJICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7CgkgICAgfTsKCX0pKCk7CglPYmplY3QuZGVmaW5lUHJvcGVydHkoRmluZGVyUGF0dGVybiQxLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6IHRydWUgfSk7CgkvKm5hbWVzcGFjZSBjb20uZ29vZ2xlLnp4aW5nLnFyY29kZS5kZXRlY3RvciB7Ki8KCXZhciBSZXN1bHRQb2ludF8xJDIgPSBSZXN1bHRQb2ludCQxOwoJLyoqCgkgKiA8cD5FbmNhcHN1bGF0ZXMgYSBmaW5kZXIgcGF0dGVybiwgd2hpY2ggYXJlIHRoZSB0aHJlZSBzcXVhcmUgcGF0dGVybnMgZm91bmQgaW4KCSAqIHRoZSBjb3JuZXJzIG9mIFFSIENvZGVzLiBJdCBhbHNvIGVuY2Fwc3VsYXRlcyBhIGNvdW50IG9mIHNpbWlsYXIgZmluZGVyIHBhdHRlcm5zLAoJICogYXMgYSBjb252ZW5pZW5jZSB0byB0aGUgZmluZGVyJ3MgYm9va2tlZXBpbmcuPC9wPgoJICoKCSAqIEBhdXRob3IgU2VhbiBPd2VuCgkgKi8KCXZhciBGaW5kZXJQYXR0ZXJuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikgewoJICAgIF9fZXh0ZW5kcyhGaW5kZXJQYXR0ZXJuLCBfc3VwZXIpOwoJICAgIC8vIEZpbmRlclBhdHRlcm4ocG9zWDogbnVtYmVyLypmbG9hdCovLCBwb3NZOiBudW1iZXIvKmZsb2F0Ki8sIGVzdGltYXRlZE1vZHVsZVNpemU6IG51bWJlci8qZmxvYXQqLykgewoJICAgIC8vICAgdGhpcyhwb3NYLCBwb3NZLCBlc3RpbWF0ZWRNb2R1bGVTaXplLCAxKQoJICAgIC8vIH0KCSAgICBmdW5jdGlvbiBGaW5kZXJQYXR0ZXJuKHBvc1ggLypmbG9hdCovLCBwb3NZIC8qZmxvYXQqLywgZXN0aW1hdGVkTW9kdWxlU2l6ZSAvKmZsb2F0Ki8sIGNvdW50IC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcG9zWCwgcG9zWSkgfHwgdGhpczsKCSAgICAgICAgX3RoaXMuZXN0aW1hdGVkTW9kdWxlU2l6ZSA9IGVzdGltYXRlZE1vZHVsZVNpemU7CgkgICAgICAgIF90aGlzLmNvdW50ID0gY291bnQ7CgkgICAgICAgIGlmICh1bmRlZmluZWQgPT09IGNvdW50KSB7CgkgICAgICAgICAgICBfdGhpcy5jb3VudCA9IDE7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIF90aGlzOwoJICAgIH0KCSAgICBGaW5kZXJQYXR0ZXJuLnByb3RvdHlwZS5nZXRFc3RpbWF0ZWRNb2R1bGVTaXplID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRNb2R1bGVTaXplOwoJICAgIH07CgkgICAgRmluZGVyUGF0dGVybi5wcm90b3R5cGUuZ2V0Q291bnQgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmNvdW50OwoJICAgIH07CgkgICAgLyoKCSAgICB2b2lkIGluY3JlbWVudENvdW50KCkgewoJICAgICAgdGhpcy5jb3VudCsrCgkgICAgfQoJICAgICAqLwoJICAgIC8qKgoJICAgICAqIDxwPkRldGVybWluZXMgaWYgdGhpcyBmaW5kZXIgcGF0dGVybiAiYWJvdXQgZXF1YWxzIiBhIGZpbmRlciBwYXR0ZXJuIGF0IHRoZSBzdGF0ZWQKCSAgICAgKiBwb3NpdGlvbiBhbmQgc2l6ZSAtLSBtZWFuaW5nLCBpdCBpcyBhdCBuZWFybHkgdGhlIHNhbWUgY2VudGVyIHdpdGggbmVhcmx5IHRoZSBzYW1lIHNpemUuPC9wPgoJICAgICAqLwoJICAgIEZpbmRlclBhdHRlcm4ucHJvdG90eXBlLmFib3V0RXF1YWxzID0gZnVuY3Rpb24gKG1vZHVsZVNpemUgLypmbG9hdCovLCBpIC8qZmxvYXQqLywgaiAvKmZsb2F0Ki8pIHsKCSAgICAgICAgaWYgKE1hdGguYWJzKGkgLSB0aGlzLmdldFkoKSkgPD0gbW9kdWxlU2l6ZSAmJiBNYXRoLmFicyhqIC0gdGhpcy5nZXRYKCkpIDw9IG1vZHVsZVNpemUpIHsKCSAgICAgICAgICAgIHZhciBtb2R1bGVTaXplRGlmZiA9IE1hdGguYWJzKG1vZHVsZVNpemUgLSB0aGlzLmVzdGltYXRlZE1vZHVsZVNpemUpOwoJICAgICAgICAgICAgcmV0dXJuIG1vZHVsZVNpemVEaWZmIDw9IDEuMCB8fCBtb2R1bGVTaXplRGlmZiA8PSB0aGlzLmVzdGltYXRlZE1vZHVsZVNpemU7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQ29tYmluZXMgdGhpcyBvYmplY3QncyBjdXJyZW50IGVzdGltYXRlIG9mIGEgZmluZGVyIHBhdHRlcm4gcG9zaXRpb24gYW5kIG1vZHVsZSBzaXplCgkgICAgICogd2l0aCBhIG5ldyBlc3RpbWF0ZS4gSXQgcmV0dXJucyBhIG5ldyB7QGNvZGUgRmluZGVyUGF0dGVybn0gY29udGFpbmluZyBhIHdlaWdodGVkIGF2ZXJhZ2UKCSAgICAgKiBiYXNlZCBvbiBjb3VudC4KCSAgICAgKi8KCSAgICBGaW5kZXJQYXR0ZXJuLnByb3RvdHlwZS5jb21iaW5lRXN0aW1hdGUgPSBmdW5jdGlvbiAoaSAvKmZsb2F0Ki8sIGogLypmbG9hdCovLCBuZXdNb2R1bGVTaXplIC8qZmxvYXQqLykgewoJICAgICAgICB2YXIgY29tYmluZWRDb3VudCA9IHRoaXMuY291bnQgKyAxOwoJICAgICAgICB2YXIgY29tYmluZWRYID0gKHRoaXMuY291bnQgKiB0aGlzLmdldFgoKSArIGopIC8gY29tYmluZWRDb3VudDsKCSAgICAgICAgdmFyIGNvbWJpbmVkWSA9ICh0aGlzLmNvdW50ICogdGhpcy5nZXRZKCkgKyBpKSAvIGNvbWJpbmVkQ291bnQ7CgkgICAgICAgIHZhciBjb21iaW5lZE1vZHVsZVNpemUgPSAodGhpcy5jb3VudCAqIHRoaXMuZXN0aW1hdGVkTW9kdWxlU2l6ZSArIG5ld01vZHVsZVNpemUpIC8gY29tYmluZWRDb3VudDsKCSAgICAgICAgcmV0dXJuIG5ldyBGaW5kZXJQYXR0ZXJuKGNvbWJpbmVkWCwgY29tYmluZWRZLCBjb21iaW5lZE1vZHVsZVNpemUsIGNvbWJpbmVkQ291bnQpOwoJICAgIH07CgkgICAgcmV0dXJuIEZpbmRlclBhdHRlcm47Cgl9KFJlc3VsdFBvaW50XzEkMi5kZWZhdWx0KSk7CglGaW5kZXJQYXR0ZXJuJDEuZGVmYXVsdCA9IEZpbmRlclBhdHRlcm47CgoJdmFyIEZpbmRlclBhdHRlcm5JbmZvJDEgPSB7fTsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpbmRlclBhdHRlcm5JbmZvJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qKgoJICogPHA+RW5jYXBzdWxhdGVzIGluZm9ybWF0aW9uIGFib3V0IGZpbmRlciBwYXR0ZXJucyBpbiBhbiBpbWFnZSwgaW5jbHVkaW5nIHRoZSBsb2NhdGlvbiBvZgoJICogdGhlIHRocmVlIGZpbmRlciBwYXR0ZXJucywgYW5kIHRoZWlyIGVzdGltYXRlZCBtb2R1bGUgc2l6ZS48L3A+CgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIEZpbmRlclBhdHRlcm5JbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIGZ1bmN0aW9uIEZpbmRlclBhdHRlcm5JbmZvKHBhdHRlcm5DZW50ZXJzKSB7CgkgICAgICAgIHRoaXMuYm90dG9tTGVmdCA9IHBhdHRlcm5DZW50ZXJzWzBdOwoJICAgICAgICB0aGlzLnRvcExlZnQgPSBwYXR0ZXJuQ2VudGVyc1sxXTsKCSAgICAgICAgdGhpcy50b3BSaWdodCA9IHBhdHRlcm5DZW50ZXJzWzJdOwoJICAgIH0KCSAgICBGaW5kZXJQYXR0ZXJuSW5mby5wcm90b3R5cGUuZ2V0Qm90dG9tTGVmdCA9IGZ1bmN0aW9uICgpIHsKCSAgICAgICAgcmV0dXJuIHRoaXMuYm90dG9tTGVmdDsKCSAgICB9OwoJICAgIEZpbmRlclBhdHRlcm5JbmZvLnByb3RvdHlwZS5nZXRUb3BMZWZ0ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy50b3BMZWZ0OwoJICAgIH07CgkgICAgRmluZGVyUGF0dGVybkluZm8ucHJvdG90eXBlLmdldFRvcFJpZ2h0ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy50b3BSaWdodDsKCSAgICB9OwoJICAgIHJldHVybiBGaW5kZXJQYXR0ZXJuSW5mbzsKCX0oKSk7CglGaW5kZXJQYXR0ZXJuSW5mbyQxLmRlZmF1bHQgPSBGaW5kZXJQYXR0ZXJuSW5mbzsKCgkvKgoJICogQ29weXJpZ2h0IDIwMDcgWlhpbmcgYXV0aG9ycwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoJdmFyIF9fdmFsdWVzID0gKGNvbW1vbmpzR2xvYmFsICYmIGNvbW1vbmpzR2xvYmFsLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7CgkgICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSAiZnVuY3Rpb24iICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7CgkgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7CgkgICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSAibnVtYmVyIikgcmV0dXJuIHsKCSAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkgewoJICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDsKCSAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTsKCSAgICAgICAgfQoJICAgIH07CgkgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gIk9iamVjdCBpcyBub3QgaXRlcmFibGUuIiA6ICJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuIik7Cgl9OwoJT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpbmRlclBhdHRlcm5GaW5kZXIkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJLypuYW1lc3BhY2UgY29tLmdvb2dsZS56eGluZy5xcmNvZGUuZGV0ZWN0b3IgeyovCgl2YXIgRGVjb2RlSGludFR5cGVfMSQyID0gRGVjb2RlSGludFR5cGUkMTsKCXZhciBSZXN1bHRQb2ludF8xJDEgPSBSZXN1bHRQb2ludCQxOwoJdmFyIEZpbmRlclBhdHRlcm5fMSA9IEZpbmRlclBhdHRlcm4kMTsKCXZhciBGaW5kZXJQYXR0ZXJuSW5mb18xID0gRmluZGVyUGF0dGVybkluZm8kMTsKCXZhciBOb3RGb3VuZEV4Y2VwdGlvbl8xJDIgPSBOb3RGb3VuZEV4Y2VwdGlvbiQxOwoJLyppbXBvcnQgamF2YS5pby5TZXJpYWxpemFibGU7Ki8KCS8qaW1wb3J0IGphdmEudXRpbC5BcnJheUxpc3Q7Ki8KCS8qaW1wb3J0IGphdmEudXRpbC5Db2xsZWN0aW9uczsqLwoJLyppbXBvcnQgamF2YS51dGlsLkNvbXBhcmF0b3I7Ki8KCS8qaW1wb3J0IGphdmEudXRpbC5MaXN0OyovCgkvKmltcG9ydCBqYXZhLnV0aWwuTWFwOyovCgkvKioKCSAqIDxwPlRoaXMgY2xhc3MgYXR0ZW1wdHMgdG8gZmluZCBmaW5kZXIgcGF0dGVybnMgaW4gYSBRUiBDb2RlLiBGaW5kZXIgcGF0dGVybnMgYXJlIHRoZSBzcXVhcmUKCSAqIG1hcmtlcnMgYXQgdGhyZWUgY29ybmVycyBvZiBhIFFSIENvZGUuPC9wPgoJICoKCSAqIDxwPlRoaXMgY2xhc3MgaXMgdGhyZWFkLXNhZmUgYnV0IG5vdCByZWVudHJhbnQuIEVhY2ggdGhyZWFkIG11c3QgYWxsb2NhdGUgaXRzIG93biBvYmplY3QuCgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIEZpbmRlclBhdHRlcm5GaW5kZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7CgkgICAgLyoqCgkgICAgICogPHA+Q3JlYXRlcyBhIGZpbmRlciB0aGF0IHdpbGwgc2VhcmNoIHRoZSBpbWFnZSBmb3IgdGhyZWUgZmluZGVyIHBhdHRlcm5zLjwvcD4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBpbWFnZSBpbWFnZSB0byBzZWFyY2gKCSAgICAgKi8KCSAgICAvLyBwdWJsaWMgY29uc3RydWN0b3IoaW1hZ2U6IEJpdE1hdHJpeCkgewoJICAgIC8vICAgdGhpcyhpbWFnZSwgbnVsbCkKCSAgICAvLyB9CgkgICAgZnVuY3Rpb24gRmluZGVyUGF0dGVybkZpbmRlcihpbWFnZSwgcmVzdWx0UG9pbnRDYWxsYmFjaykgewoJICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7CgkgICAgICAgIHRoaXMucmVzdWx0UG9pbnRDYWxsYmFjayA9IHJlc3VsdFBvaW50Q2FsbGJhY2s7CgkgICAgICAgIHRoaXMucG9zc2libGVDZW50ZXJzID0gW107CgkgICAgICAgIHRoaXMuY3Jvc3NDaGVja1N0YXRlQ291bnQgPSBuZXcgSW50MzJBcnJheSg1KTsKCSAgICAgICAgdGhpcy5yZXN1bHRQb2ludENhbGxiYWNrID0gcmVzdWx0UG9pbnRDYWxsYmFjazsKCSAgICB9CgkgICAgRmluZGVyUGF0dGVybkZpbmRlci5wcm90b3R5cGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmltYWdlOwoJICAgIH07CgkgICAgRmluZGVyUGF0dGVybkZpbmRlci5wcm90b3R5cGUuZ2V0UG9zc2libGVDZW50ZXJzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5wb3NzaWJsZUNlbnRlcnM7CgkgICAgfTsKCSAgICBGaW5kZXJQYXR0ZXJuRmluZGVyLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKGhpbnRzKSB7CgkgICAgICAgIHZhciB0cnlIYXJkZXIgPSAoaGludHMgIT09IG51bGwgJiYgaGludHMgIT09IHVuZGVmaW5lZCkgJiYgdW5kZWZpbmVkICE9PSBoaW50cy5nZXQoRGVjb2RlSGludFR5cGVfMSQyLmRlZmF1bHQuVFJZX0hBUkRFUik7CgkgICAgICAgIHZhciBwdXJlQmFyY29kZSA9IChoaW50cyAhPT0gbnVsbCAmJiBoaW50cyAhPT0gdW5kZWZpbmVkKSAmJiB1bmRlZmluZWQgIT09IGhpbnRzLmdldChEZWNvZGVIaW50VHlwZV8xJDIuZGVmYXVsdC5QVVJFX0JBUkNPREUpOwoJICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlOwoJICAgICAgICB2YXIgbWF4SSA9IGltYWdlLmdldEhlaWdodCgpOwoJICAgICAgICB2YXIgbWF4SiA9IGltYWdlLmdldFdpZHRoKCk7CgkgICAgICAgIC8vIFdlIGFyZSBsb29raW5nIGZvciBibGFjay93aGl0ZS9ibGFjay93aGl0ZS9ibGFjayBtb2R1bGVzIGluCgkgICAgICAgIC8vIDE6MTozOjE6MSByYXRpbzsgdGhpcyB0cmFja3MgdGhlIG51bWJlciBvZiBzdWNoIG1vZHVsZXMgc2VlbiBzbyBmYXIKCSAgICAgICAgLy8gTGV0J3MgYXNzdW1lIHRoYXQgdGhlIG1heGltdW0gdmVyc2lvbiBRUiBDb2RlIHdlIHN1cHBvcnQgdGFrZXMgdXAgMS80IHRoZSBoZWlnaHQgb2YgdGhlCgkgICAgICAgIC8vIGltYWdlLCBhbmQgdGhlbiBhY2NvdW50IGZvciB0aGUgY2VudGVyIGJlaW5nIDMgbW9kdWxlcyBpbiBzaXplLiBUaGlzIGdpdmVzIHRoZSBzbWFsbGVzdAoJICAgICAgICAvLyBudW1iZXIgb2YgcGl4ZWxzIHRoZSBjZW50ZXIgY291bGQgYmUsIHNvIHNraXAgdGhpcyBvZnRlbi4gV2hlbiB0cnlpbmcgaGFyZGVyLCBsb29rIGZvciBhbGwKCSAgICAgICAgLy8gUVIgdmVyc2lvbnMgcmVnYXJkbGVzcyBvZiBob3cgZGVuc2UgdGhleSBhcmUuCgkgICAgICAgIHZhciBpU2tpcCA9IE1hdGguZmxvb3IoKDMgKiBtYXhJKSAvICg0ICogRmluZGVyUGF0dGVybkZpbmRlci5NQVhfTU9EVUxFUykpOwoJICAgICAgICBpZiAoaVNraXAgPCBGaW5kZXJQYXR0ZXJuRmluZGVyLk1JTl9TS0lQIHx8IHRyeUhhcmRlcikgewoJICAgICAgICAgICAgaVNraXAgPSBGaW5kZXJQYXR0ZXJuRmluZGVyLk1JTl9TS0lQOwoJICAgICAgICB9CgkgICAgICAgIHZhciBkb25lID0gZmFsc2U7CgkgICAgICAgIHZhciBzdGF0ZUNvdW50ID0gbmV3IEludDMyQXJyYXkoNSk7CgkgICAgICAgIGZvciAodmFyIGkgPSBpU2tpcCAtIDE7IGkgPCBtYXhJICYmICFkb25lOyBpICs9IGlTa2lwKSB7CgkgICAgICAgICAgICAvLyBHZXQgYSByb3cgb2YgYmxhY2svd2hpdGUgdmFsdWVzCgkgICAgICAgICAgICBzdGF0ZUNvdW50WzBdID0gMDsKCSAgICAgICAgICAgIHN0YXRlQ291bnRbMV0gPSAwOwoJICAgICAgICAgICAgc3RhdGVDb3VudFsyXSA9IDA7CgkgICAgICAgICAgICBzdGF0ZUNvdW50WzNdID0gMDsKCSAgICAgICAgICAgIHN0YXRlQ291bnRbNF0gPSAwOwoJICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IDA7CgkgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1heEo7IGorKykgewoJICAgICAgICAgICAgICAgIGlmIChpbWFnZS5nZXQoaiwgaSkpIHsKCSAgICAgICAgICAgICAgICAgICAgLy8gQmxhY2sgcGl4ZWwKCSAgICAgICAgICAgICAgICAgICAgaWYgKChjdXJyZW50U3RhdGUgJiAxKSA9PT0gMSkgeyAvLyBDb3VudGluZyB3aGl0ZSBwaXhlbHMKCSAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSsrOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIHN0YXRlQ291bnRbY3VycmVudFN0YXRlXSsrOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBlbHNlIHsgLy8gV2hpdGUgcGl4ZWwKCSAgICAgICAgICAgICAgICAgICAgaWYgKChjdXJyZW50U3RhdGUgJiAxKSA9PT0gMCkgeyAvLyBDb3VudGluZyBibGFjayBwaXhlbHMKCSAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IDQpIHsgLy8gQSB3aW5uZXI/CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZpbmRlclBhdHRlcm5GaW5kZXIuZm91bmRQYXR0ZXJuQ3Jvc3Moc3RhdGVDb3VudCkpIHsgLy8gWWVzCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtZWQgPSB0aGlzLmhhbmRsZVBvc3NpYmxlQ2VudGVyKHN0YXRlQ291bnQsIGksIGosIHB1cmVCYXJjb2RlKTsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCA9PT0gdHJ1ZSkgewoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgZXhhbWluaW5nIGV2ZXJ5IG90aGVyIGxpbmUuIENoZWNraW5nIGVhY2ggbGluZSB0dXJuZWQgb3V0IHRvIGJlIHRvbwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwZW5zaXZlIGFuZCBkaWRuJ3QgaW1wcm92ZSBwZXJmb3JtYW5jZS4KCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlTa2lwID0gMjsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc1NraXBwZWQgPT09IHRydWUpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdGhpcy5oYXZlTXVsdGlwbHlDb25maXJtZWRDZW50ZXJzKCk7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm93U2tpcCA9IHRoaXMuZmluZFJvd1NraXAoKTsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93U2tpcCA+IHN0YXRlQ291bnRbMl0pIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCByb3dzIGJldHdlZW4gcm93IG9mIGxvd2VyIGNvbmZpcm1lZCBjZW50ZXIKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRvcCBvZiBwcmVzdW1lZCB0aGlyZCBjb25maXJtZWQgY2VudGVyCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBiYWNrIHVwIGEgYml0IHRvIGdldCBhIGZ1bGwgY2hhbmNlIG9mIGRldGVjdGluZwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCwgZW50aXJlIHdpZHRoIG9mIGNlbnRlciBvZiBmaW5kZXIgcGF0dGVybgoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIGJ5IHJvd1NraXAsIGJ1dCBiYWNrIG9mZiBieSBzdGF0ZUNvdW50WzJdIChzaXplIG9mIGxhc3QgY2VudGVyCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIHBhdHRlcm4gd2Ugc2F3KSB0byBiZSBjb25zZXJ2YXRpdmUsIGFuZCBhbHNvIGJhY2sgb2ZmIGJ5IGlTa2lwIHdoaWNoCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzIGFib3V0IHRvIGJlIHJlLWFkZGVkCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gcm93U2tpcCAtIHN0YXRlQ291bnRbMl0gLSBpU2tpcDsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IG1heEogLSAxOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ291bnRbMF0gPSBzdGF0ZUNvdW50WzJdOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDb3VudFsxXSA9IHN0YXRlQ291bnRbM107CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50WzJdID0gc3RhdGVDb3VudFs0XTsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ291bnRbM10gPSAxOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDb3VudFs0XSA9IDA7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAzOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgc3RhdGUgdG8gc3RhcnQgbG9va2luZyBhZ2FpbgoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAwOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50WzBdID0gMDsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDb3VudFsxXSA9IDA7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ291bnRbMl0gPSAwOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50WzNdID0gMDsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDb3VudFs0XSA9IDA7CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBObywgc2hpZnQgY291bnRzIGJhY2sgYnkgdHdvCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ291bnRbMF0gPSBzdGF0ZUNvdW50WzJdOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50WzFdID0gc3RhdGVDb3VudFszXTsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVDb3VudFsyXSA9IHN0YXRlQ291bnRbNF07CgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ291bnRbM10gPSAxOwoJICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50WzRdID0gMDsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YXRlID0gMzsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvdW50WysrY3VycmVudFN0YXRlXSsrOwoJICAgICAgICAgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBDb3VudGluZyB3aGl0ZSBwaXhlbHMKCSAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQ291bnRbY3VycmVudFN0YXRlXSsrOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgaWYgKEZpbmRlclBhdHRlcm5GaW5kZXIuZm91bmRQYXR0ZXJuQ3Jvc3Moc3RhdGVDb3VudCkpIHsKCSAgICAgICAgICAgICAgICB2YXIgY29uZmlybWVkID0gdGhpcy5oYW5kbGVQb3NzaWJsZUNlbnRlcihzdGF0ZUNvdW50LCBpLCBtYXhKLCBwdXJlQmFyY29kZSk7CgkgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCA9PT0gdHJ1ZSkgewoJICAgICAgICAgICAgICAgICAgICBpU2tpcCA9IHN0YXRlQ291bnRbMF07CgkgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc1NraXBwZWQpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvdW5kIGEgdGhpcmQgb25lCgkgICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gdGhpcy5oYXZlTXVsdGlwbHlDb25maXJtZWRDZW50ZXJzKCk7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgdmFyIHBhdHRlcm5JbmZvID0gdGhpcy5zZWxlY3RCZXN0UGF0dGVybnMoKTsKCSAgICAgICAgUmVzdWx0UG9pbnRfMSQxLmRlZmF1bHQub3JkZXJCZXN0UGF0dGVybnMocGF0dGVybkluZm8pOwoJICAgICAgICByZXR1cm4gbmV3IEZpbmRlclBhdHRlcm5JbmZvXzEuZGVmYXVsdChwYXR0ZXJuSW5mbyk7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBHaXZlbiBhIGNvdW50IG9mIGJsYWNrL3doaXRlL2JsYWNrL3doaXRlL2JsYWNrIHBpeGVscyBqdXN0IHNlZW4gYW5kIGFuIGVuZCBwb3NpdGlvbiwKCSAgICAgKiBmaWd1cmVzIHRoZSBsb2NhdGlvbiBvZiB0aGUgY2VudGVyIG9mIHRoaXMgcnVuLgoJICAgICAqLwoJICAgIEZpbmRlclBhdHRlcm5GaW5kZXIuY2VudGVyRnJvbUVuZCA9IGZ1bmN0aW9uIChzdGF0ZUNvdW50LCBlbmQgLyppbnQqLykgewoJICAgICAgICByZXR1cm4gKGVuZCAtIHN0YXRlQ291bnRbNF0gLSBzdGF0ZUNvdW50WzNdKSAtIHN0YXRlQ291bnRbMl0gLyAyLjA7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcGFyYW0gc3RhdGVDb3VudCBjb3VudCBvZiBibGFjay93aGl0ZS9ibGFjay93aGl0ZS9ibGFjayBwaXhlbHMganVzdCByZWFkCgkgICAgICogQHJldHVybiB0cnVlIGlmZiB0aGUgcHJvcG9ydGlvbnMgb2YgdGhlIGNvdW50cyBpcyBjbG9zZSBlbm91Z2ggdG8gdGhlIDEvMS8zLzEvMSByYXRpb3MKCSAgICAgKiAgICAgICAgIHVzZWQgYnkgZmluZGVyIHBhdHRlcm5zIHRvIGJlIGNvbnNpZGVyZWQgYSBtYXRjaAoJICAgICAqLwoJICAgIEZpbmRlclBhdHRlcm5GaW5kZXIuZm91bmRQYXR0ZXJuQ3Jvc3MgPSBmdW5jdGlvbiAoc3RhdGVDb3VudCkgewoJICAgICAgICB2YXIgdG90YWxNb2R1bGVTaXplID0gMDsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHsKCSAgICAgICAgICAgIHZhciBjb3VudCA9IHN0YXRlQ291bnRbaV07CgkgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHsKCSAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICB0b3RhbE1vZHVsZVNpemUgKz0gY291bnQ7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHRvdGFsTW9kdWxlU2l6ZSA8IDcpIHsKCSAgICAgICAgICAgIHJldHVybiBmYWxzZTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgbW9kdWxlU2l6ZSA9IHRvdGFsTW9kdWxlU2l6ZSAvIDcuMDsKCSAgICAgICAgdmFyIG1heFZhcmlhbmNlID0gbW9kdWxlU2l6ZSAvIDIuMDsKCSAgICAgICAgLy8gQWxsb3cgbGVzcyB0aGFuIDUwJSB2YXJpYW5jZSBmcm9tIDEtMS0zLTEtMSBwcm9wb3J0aW9ucwoJICAgICAgICByZXR1cm4gTWF0aC5hYnMobW9kdWxlU2l6ZSAtIHN0YXRlQ291bnRbMF0pIDwgbWF4VmFyaWFuY2UgJiYKCSAgICAgICAgICAgIE1hdGguYWJzKG1vZHVsZVNpemUgLSBzdGF0ZUNvdW50WzFdKSA8IG1heFZhcmlhbmNlICYmCgkgICAgICAgICAgICBNYXRoLmFicygzLjAgKiBtb2R1bGVTaXplIC0gc3RhdGVDb3VudFsyXSkgPCAzICogbWF4VmFyaWFuY2UgJiYKCSAgICAgICAgICAgIE1hdGguYWJzKG1vZHVsZVNpemUgLSBzdGF0ZUNvdW50WzNdKSA8IG1heFZhcmlhbmNlICYmCgkgICAgICAgICAgICBNYXRoLmFicyhtb2R1bGVTaXplIC0gc3RhdGVDb3VudFs0XSkgPCBtYXhWYXJpYW5jZTsKCSAgICB9OwoJICAgIEZpbmRlclBhdHRlcm5GaW5kZXIucHJvdG90eXBlLmdldENyb3NzQ2hlY2tTdGF0ZUNvdW50ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgY3Jvc3NDaGVja1N0YXRlQ291bnQgPSB0aGlzLmNyb3NzQ2hlY2tTdGF0ZUNvdW50OwoJICAgICAgICBjcm9zc0NoZWNrU3RhdGVDb3VudFswXSA9IDA7CgkgICAgICAgIGNyb3NzQ2hlY2tTdGF0ZUNvdW50WzFdID0gMDsKCSAgICAgICAgY3Jvc3NDaGVja1N0YXRlQ291bnRbMl0gPSAwOwoJICAgICAgICBjcm9zc0NoZWNrU3RhdGVDb3VudFszXSA9IDA7CgkgICAgICAgIGNyb3NzQ2hlY2tTdGF0ZUNvdW50WzRdID0gMDsKCSAgICAgICAgcmV0dXJuIGNyb3NzQ2hlY2tTdGF0ZUNvdW50OwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQWZ0ZXIgYSB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBzY2FuIGZpbmRzIGEgcG90ZW50aWFsIGZpbmRlciBwYXR0ZXJuLCB0aGlzIG1ldGhvZAoJICAgICAqICJjcm9zcy1jcm9zcy1jcm9zcy1jaGVja3MiIGJ5IHNjYW5uaW5nIGRvd24gZGlhZ29uYWxseSB0aHJvdWdoIHRoZSBjZW50ZXIgb2YgdGhlIHBvc3NpYmxlCgkgICAgICogZmluZGVyIHBhdHRlcm4gdG8gc2VlIGlmIHRoZSBzYW1lIHByb3BvcnRpb24gaXMgZGV0ZWN0ZWQuCgkgICAgICoKCSAgICAgKiBAcGFyYW0gc3RhcnRJIHJvdyB3aGVyZSBhIGZpbmRlciBwYXR0ZXJuIHdhcyBkZXRlY3RlZAoJICAgICAqIEBwYXJhbSBjZW50ZXJKIGNlbnRlciBvZiB0aGUgc2VjdGlvbiB0aGF0IGFwcGVhcnMgdG8gY3Jvc3MgYSBmaW5kZXIgcGF0dGVybgoJICAgICAqIEBwYXJhbSBtYXhDb3VudCBtYXhpbXVtIHJlYXNvbmFibGUgbnVtYmVyIG9mIG1vZHVsZXMgdGhhdCBzaG91bGQgYmUKCSAgICAgKiAgb2JzZXJ2ZWQgaW4gYW55IHJlYWRpbmcgc3RhdGUsIGJhc2VkIG9uIHRoZSByZXN1bHRzIG9mIHRoZSBob3Jpem9udGFsIHNjYW4KCSAgICAgKiBAcGFyYW0gb3JpZ2luYWxTdGF0ZUNvdW50VG90YWwgVGhlIG9yaWdpbmFsIHN0YXRlIGNvdW50IHRvdGFsLgoJICAgICAqIEByZXR1cm4gdHJ1ZSBpZiBwcm9wb3J0aW9ucyBhcmUgd2l0aGluZyBleHBlY3RlZCBsaW1pdHMKCSAgICAgKi8KCSAgICBGaW5kZXJQYXR0ZXJuRmluZGVyLnByb3RvdHlwZS5jcm9zc0NoZWNrRGlhZ29uYWwgPSBmdW5jdGlvbiAoc3RhcnRJIC8qaW50Ki8sIGNlbnRlckogLyppbnQqLywgbWF4Q291bnQgLyppbnQqLywgb3JpZ2luYWxTdGF0ZUNvdW50VG90YWwgLyppbnQqLykgewoJICAgICAgICB2YXIgc3RhdGVDb3VudCA9IHRoaXMuZ2V0Q3Jvc3NDaGVja1N0YXRlQ291bnQoKTsKCSAgICAgICAgLy8gU3RhcnQgY291bnRpbmcgdXAsIGxlZnQgZnJvbSBjZW50ZXIgZmluZGluZyBibGFjayBjZW50ZXIgbWFzcwoJICAgICAgICB2YXIgaSA9IDA7CgkgICAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2U7CgkgICAgICAgIHdoaWxlIChzdGFydEkgPj0gaSAmJiBjZW50ZXJKID49IGkgJiYgaW1hZ2UuZ2V0KGNlbnRlckogLSBpLCBzdGFydEkgLSBpKSkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFsyXSsrOwoJICAgICAgICAgICAgaSsrOwoJICAgICAgICB9CgkgICAgICAgIGlmIChzdGFydEkgPCBpIHx8IGNlbnRlckogPCBpKSB7CgkgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgIH0KCSAgICAgICAgLy8gQ29udGludWUgdXAsIGxlZnQgZmluZGluZyB3aGl0ZSBzcGFjZQoJICAgICAgICB3aGlsZSAoc3RhcnRJID49IGkgJiYgY2VudGVySiA+PSBpICYmICFpbWFnZS5nZXQoY2VudGVySiAtIGksIHN0YXJ0SSAtIGkpICYmCgkgICAgICAgICAgICBzdGF0ZUNvdW50WzFdIDw9IG1heENvdW50KSB7CgkgICAgICAgICAgICBzdGF0ZUNvdW50WzFdKys7CgkgICAgICAgICAgICBpKys7CgkgICAgICAgIH0KCSAgICAgICAgLy8gSWYgYWxyZWFkeSB0b28gbWFueSBtb2R1bGVzIGluIHRoaXMgc3RhdGUgb3IgcmFuIG9mZiB0aGUgZWRnZToKCSAgICAgICAgaWYgKHN0YXJ0SSA8IGkgfHwgY2VudGVySiA8IGkgfHwgc3RhdGVDb3VudFsxXSA+IG1heENvdW50KSB7CgkgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgIH0KCSAgICAgICAgLy8gQ29udGludWUgdXAsIGxlZnQgZmluZGluZyBibGFjayBib3JkZXIKCSAgICAgICAgd2hpbGUgKHN0YXJ0SSA+PSBpICYmIGNlbnRlckogPj0gaSAmJiBpbWFnZS5nZXQoY2VudGVySiAtIGksIHN0YXJ0SSAtIGkpICYmCgkgICAgICAgICAgICBzdGF0ZUNvdW50WzBdIDw9IG1heENvdW50KSB7CgkgICAgICAgICAgICBzdGF0ZUNvdW50WzBdKys7CgkgICAgICAgICAgICBpKys7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHN0YXRlQ291bnRbMF0gPiBtYXhDb3VudCkgewoJICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9CgkgICAgICAgIHZhciBtYXhJID0gaW1hZ2UuZ2V0SGVpZ2h0KCk7CgkgICAgICAgIHZhciBtYXhKID0gaW1hZ2UuZ2V0V2lkdGgoKTsKCSAgICAgICAgLy8gTm93IGFsc28gY291bnQgZG93biwgcmlnaHQgZnJvbSBjZW50ZXIKCSAgICAgICAgaSA9IDE7CgkgICAgICAgIHdoaWxlIChzdGFydEkgKyBpIDwgbWF4SSAmJiBjZW50ZXJKICsgaSA8IG1heEogJiYgaW1hZ2UuZ2V0KGNlbnRlckogKyBpLCBzdGFydEkgKyBpKSkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFsyXSsrOwoJICAgICAgICAgICAgaSsrOwoJICAgICAgICB9CgkgICAgICAgIC8vIFJhbiBvZmYgdGhlIGVkZ2U/CgkgICAgICAgIGlmIChzdGFydEkgKyBpID49IG1heEkgfHwgY2VudGVySiArIGkgPj0gbWF4SikgewoJICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9CgkgICAgICAgIHdoaWxlIChzdGFydEkgKyBpIDwgbWF4SSAmJiBjZW50ZXJKICsgaSA8IG1heEogJiYgIWltYWdlLmdldChjZW50ZXJKICsgaSwgc3RhcnRJICsgaSkgJiYKCSAgICAgICAgICAgIHN0YXRlQ291bnRbM10gPCBtYXhDb3VudCkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFszXSsrOwoJICAgICAgICAgICAgaSsrOwoJICAgICAgICB9CgkgICAgICAgIGlmIChzdGFydEkgKyBpID49IG1heEkgfHwgY2VudGVySiArIGkgPj0gbWF4SiB8fCBzdGF0ZUNvdW50WzNdID49IG1heENvdW50KSB7CgkgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgIH0KCSAgICAgICAgd2hpbGUgKHN0YXJ0SSArIGkgPCBtYXhJICYmIGNlbnRlckogKyBpIDwgbWF4SiAmJiBpbWFnZS5nZXQoY2VudGVySiArIGksIHN0YXJ0SSArIGkpICYmCgkgICAgICAgICAgICBzdGF0ZUNvdW50WzRdIDwgbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHN0YXRlQ291bnRbNF0rKzsKCSAgICAgICAgICAgIGkrKzsKCSAgICAgICAgfQoJICAgICAgICBpZiAoc3RhdGVDb3VudFs0XSA+PSBtYXhDb3VudCkgewoJICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9CgkgICAgICAgIC8vIElmIHdlIGZvdW5kIGEgZmluZGVyLXBhdHRlcm4tbGlrZSBzZWN0aW9uLCBidXQgaXRzIHNpemUgaXMgbW9yZSB0aGFuIDEwMCUgZGlmZmVyZW50IHRoYW4KCSAgICAgICAgLy8gdGhlIG9yaWdpbmFsLCBhc3N1bWUgaXQncyBhIGZhbHNlIHBvc2l0aXZlCgkgICAgICAgIHZhciBzdGF0ZUNvdW50VG90YWwgPSBzdGF0ZUNvdW50WzBdICsgc3RhdGVDb3VudFsxXSArIHN0YXRlQ291bnRbMl0gKyBzdGF0ZUNvdW50WzNdICsgc3RhdGVDb3VudFs0XTsKCSAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN0YXRlQ291bnRUb3RhbCAtIG9yaWdpbmFsU3RhdGVDb3VudFRvdGFsKSA8IDIgKiBvcmlnaW5hbFN0YXRlQ291bnRUb3RhbCAmJgoJICAgICAgICAgICAgRmluZGVyUGF0dGVybkZpbmRlci5mb3VuZFBhdHRlcm5Dcm9zcyhzdGF0ZUNvdW50KTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPkFmdGVyIGEgaG9yaXpvbnRhbCBzY2FuIGZpbmRzIGEgcG90ZW50aWFsIGZpbmRlciBwYXR0ZXJuLCB0aGlzIG1ldGhvZAoJICAgICAqICJjcm9zcy1jaGVja3MiIGJ5IHNjYW5uaW5nIGRvd24gdmVydGljYWxseSB0aHJvdWdoIHRoZSBjZW50ZXIgb2YgdGhlIHBvc3NpYmxlCgkgICAgICogZmluZGVyIHBhdHRlcm4gdG8gc2VlIGlmIHRoZSBzYW1lIHByb3BvcnRpb24gaXMgZGV0ZWN0ZWQuPC9wPgoJICAgICAqCgkgICAgICogQHBhcmFtIHN0YXJ0SSByb3cgd2hlcmUgYSBmaW5kZXIgcGF0dGVybiB3YXMgZGV0ZWN0ZWQKCSAgICAgKiBAcGFyYW0gY2VudGVySiBjZW50ZXIgb2YgdGhlIHNlY3Rpb24gdGhhdCBhcHBlYXJzIHRvIGNyb3NzIGEgZmluZGVyIHBhdHRlcm4KCSAgICAgKiBAcGFyYW0gbWF4Q291bnQgbWF4aW11bSByZWFzb25hYmxlIG51bWJlciBvZiBtb2R1bGVzIHRoYXQgc2hvdWxkIGJlCgkgICAgICogb2JzZXJ2ZWQgaW4gYW55IHJlYWRpbmcgc3RhdGUsIGJhc2VkIG9uIHRoZSByZXN1bHRzIG9mIHRoZSBob3Jpem9udGFsIHNjYW4KCSAgICAgKiBAcmV0dXJuIHZlcnRpY2FsIGNlbnRlciBvZiBmaW5kZXIgcGF0dGVybiwgb3Ige0BsaW5rIEZsb2F0I05hTn0gaWYgbm90IGZvdW5kCgkgICAgICovCgkgICAgRmluZGVyUGF0dGVybkZpbmRlci5wcm90b3R5cGUuY3Jvc3NDaGVja1ZlcnRpY2FsID0gZnVuY3Rpb24gKHN0YXJ0SSAvKmludCovLCBjZW50ZXJKIC8qaW50Ki8sIG1heENvdW50IC8qaW50Ki8sIG9yaWdpbmFsU3RhdGVDb3VudFRvdGFsIC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIGltYWdlID0gdGhpcy5pbWFnZTsKCSAgICAgICAgdmFyIG1heEkgPSBpbWFnZS5nZXRIZWlnaHQoKTsKCSAgICAgICAgdmFyIHN0YXRlQ291bnQgPSB0aGlzLmdldENyb3NzQ2hlY2tTdGF0ZUNvdW50KCk7CgkgICAgICAgIC8vIFN0YXJ0IGNvdW50aW5nIHVwIGZyb20gY2VudGVyCgkgICAgICAgIHZhciBpID0gc3RhcnRJOwoJICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGltYWdlLmdldChjZW50ZXJKLCBpKSkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFsyXSsrOwoJICAgICAgICAgICAgaS0tOwoJICAgICAgICB9CgkgICAgICAgIGlmIChpIDwgMCkgewoJICAgICAgICAgICAgcmV0dXJuIE5hTjsKCSAgICAgICAgfQoJICAgICAgICB3aGlsZSAoaSA+PSAwICYmICFpbWFnZS5nZXQoY2VudGVySiwgaSkgJiYgc3RhdGVDb3VudFsxXSA8PSBtYXhDb3VudCkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFsxXSsrOwoJICAgICAgICAgICAgaS0tOwoJICAgICAgICB9CgkgICAgICAgIC8vIElmIGFscmVhZHkgdG9vIG1hbnkgbW9kdWxlcyBpbiB0aGlzIHN0YXRlIG9yIHJhbiBvZmYgdGhlIGVkZ2U6CgkgICAgICAgIGlmIChpIDwgMCB8fCBzdGF0ZUNvdW50WzFdID4gbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHJldHVybiBOYU47CgkgICAgICAgIH0KCSAgICAgICAgd2hpbGUgKGkgPj0gMCAmJiBpbWFnZS5nZXQoY2VudGVySiwgaSkgJiYgc3RhdGVDb3VudFswXSA8PSBtYXhDb3VudCkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFswXSsrOwoJICAgICAgICAgICAgaS0tOwoJICAgICAgICB9CgkgICAgICAgIGlmIChzdGF0ZUNvdW50WzBdID4gbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHJldHVybiBOYU47CgkgICAgICAgIH0KCSAgICAgICAgLy8gTm93IGFsc28gY291bnQgZG93biBmcm9tIGNlbnRlcgoJICAgICAgICBpID0gc3RhcnRJICsgMTsKCSAgICAgICAgd2hpbGUgKGkgPCBtYXhJICYmIGltYWdlLmdldChjZW50ZXJKLCBpKSkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFsyXSsrOwoJICAgICAgICAgICAgaSsrOwoJICAgICAgICB9CgkgICAgICAgIGlmIChpID09PSBtYXhJKSB7CgkgICAgICAgICAgICByZXR1cm4gTmFOOwoJICAgICAgICB9CgkgICAgICAgIHdoaWxlIChpIDwgbWF4SSAmJiAhaW1hZ2UuZ2V0KGNlbnRlckosIGkpICYmIHN0YXRlQ291bnRbM10gPCBtYXhDb3VudCkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFszXSsrOwoJICAgICAgICAgICAgaSsrOwoJICAgICAgICB9CgkgICAgICAgIGlmIChpID09PSBtYXhJIHx8IHN0YXRlQ291bnRbM10gPj0gbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHJldHVybiBOYU47CgkgICAgICAgIH0KCSAgICAgICAgd2hpbGUgKGkgPCBtYXhJICYmIGltYWdlLmdldChjZW50ZXJKLCBpKSAmJiBzdGF0ZUNvdW50WzRdIDwgbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHN0YXRlQ291bnRbNF0rKzsKCSAgICAgICAgICAgIGkrKzsKCSAgICAgICAgfQoJICAgICAgICBpZiAoc3RhdGVDb3VudFs0XSA+PSBtYXhDb3VudCkgewoJICAgICAgICAgICAgcmV0dXJuIE5hTjsKCSAgICAgICAgfQoJICAgICAgICAvLyBJZiB3ZSBmb3VuZCBhIGZpbmRlci1wYXR0ZXJuLWxpa2Ugc2VjdGlvbiwgYnV0IGl0cyBzaXplIGlzIG1vcmUgdGhhbiA0MCUgZGlmZmVyZW50IHRoYW4KCSAgICAgICAgLy8gdGhlIG9yaWdpbmFsLCBhc3N1bWUgaXQncyBhIGZhbHNlIHBvc2l0aXZlCgkgICAgICAgIHZhciBzdGF0ZUNvdW50VG90YWwgPSBzdGF0ZUNvdW50WzBdICsgc3RhdGVDb3VudFsxXSArIHN0YXRlQ291bnRbMl0gKyBzdGF0ZUNvdW50WzNdICsKCSAgICAgICAgICAgIHN0YXRlQ291bnRbNF07CgkgICAgICAgIGlmICg1ICogTWF0aC5hYnMoc3RhdGVDb3VudFRvdGFsIC0gb3JpZ2luYWxTdGF0ZUNvdW50VG90YWwpID49IDIgKiBvcmlnaW5hbFN0YXRlQ291bnRUb3RhbCkgewoJICAgICAgICAgICAgcmV0dXJuIE5hTjsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gRmluZGVyUGF0dGVybkZpbmRlci5mb3VuZFBhdHRlcm5Dcm9zcyhzdGF0ZUNvdW50KSA/IEZpbmRlclBhdHRlcm5GaW5kZXIuY2VudGVyRnJvbUVuZChzdGF0ZUNvdW50LCBpKSA6IE5hTjsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPkxpa2Uge0BsaW5rICNjcm9zc0NoZWNrVmVydGljYWwoaW50LCBpbnQsIGludCwgaW50KX0sIGFuZCBpbiBmYWN0IGlzIGJhc2ljYWxseSBpZGVudGljYWwsCgkgICAgICogZXhjZXB0IGl0IHJlYWRzIGhvcml6b250YWxseSBpbnN0ZWFkIG9mIHZlcnRpY2FsbHkuIFRoaXMgaXMgdXNlZCB0byBjcm9zcy1jcm9zcwoJICAgICAqIGNoZWNrIGEgdmVydGljYWwgY3Jvc3MgY2hlY2sgYW5kIGxvY2F0ZSB0aGUgcmVhbCBjZW50ZXIgb2YgdGhlIGFsaWdubWVudCBwYXR0ZXJuLjwvcD4KCSAgICAgKi8KCSAgICBGaW5kZXJQYXR0ZXJuRmluZGVyLnByb3RvdHlwZS5jcm9zc0NoZWNrSG9yaXpvbnRhbCA9IGZ1bmN0aW9uIChzdGFydEogLyppbnQqLywgY2VudGVySSAvKmludCovLCBtYXhDb3VudCAvKmludCovLCBvcmlnaW5hbFN0YXRlQ291bnRUb3RhbCAvKmludCovKSB7CgkgICAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2U7CgkgICAgICAgIHZhciBtYXhKID0gaW1hZ2UuZ2V0V2lkdGgoKTsKCSAgICAgICAgdmFyIHN0YXRlQ291bnQgPSB0aGlzLmdldENyb3NzQ2hlY2tTdGF0ZUNvdW50KCk7CgkgICAgICAgIHZhciBqID0gc3RhcnRKOwoJICAgICAgICB3aGlsZSAoaiA+PSAwICYmIGltYWdlLmdldChqLCBjZW50ZXJJKSkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFsyXSsrOwoJICAgICAgICAgICAgai0tOwoJICAgICAgICB9CgkgICAgICAgIGlmIChqIDwgMCkgewoJICAgICAgICAgICAgcmV0dXJuIE5hTjsKCSAgICAgICAgfQoJICAgICAgICB3aGlsZSAoaiA+PSAwICYmICFpbWFnZS5nZXQoaiwgY2VudGVySSkgJiYgc3RhdGVDb3VudFsxXSA8PSBtYXhDb3VudCkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFsxXSsrOwoJICAgICAgICAgICAgai0tOwoJICAgICAgICB9CgkgICAgICAgIGlmIChqIDwgMCB8fCBzdGF0ZUNvdW50WzFdID4gbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHJldHVybiBOYU47CgkgICAgICAgIH0KCSAgICAgICAgd2hpbGUgKGogPj0gMCAmJiBpbWFnZS5nZXQoaiwgY2VudGVySSkgJiYgc3RhdGVDb3VudFswXSA8PSBtYXhDb3VudCkgewoJICAgICAgICAgICAgc3RhdGVDb3VudFswXSsrOwoJICAgICAgICAgICAgai0tOwoJICAgICAgICB9CgkgICAgICAgIGlmIChzdGF0ZUNvdW50WzBdID4gbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHJldHVybiBOYU47CgkgICAgICAgIH0KCSAgICAgICAgaiA9IHN0YXJ0SiArIDE7CgkgICAgICAgIHdoaWxlIChqIDwgbWF4SiAmJiBpbWFnZS5nZXQoaiwgY2VudGVySSkpIHsKCSAgICAgICAgICAgIHN0YXRlQ291bnRbMl0rKzsKCSAgICAgICAgICAgIGorKzsKCSAgICAgICAgfQoJICAgICAgICBpZiAoaiA9PT0gbWF4SikgewoJICAgICAgICAgICAgcmV0dXJuIE5hTjsKCSAgICAgICAgfQoJICAgICAgICB3aGlsZSAoaiA8IG1heEogJiYgIWltYWdlLmdldChqLCBjZW50ZXJJKSAmJiBzdGF0ZUNvdW50WzNdIDwgbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHN0YXRlQ291bnRbM10rKzsKCSAgICAgICAgICAgIGorKzsKCSAgICAgICAgfQoJICAgICAgICBpZiAoaiA9PT0gbWF4SiB8fCBzdGF0ZUNvdW50WzNdID49IG1heENvdW50KSB7CgkgICAgICAgICAgICByZXR1cm4gTmFOOwoJICAgICAgICB9CgkgICAgICAgIHdoaWxlIChqIDwgbWF4SiAmJiBpbWFnZS5nZXQoaiwgY2VudGVySSkgJiYgc3RhdGVDb3VudFs0XSA8IG1heENvdW50KSB7CgkgICAgICAgICAgICBzdGF0ZUNvdW50WzRdKys7CgkgICAgICAgICAgICBqKys7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHN0YXRlQ291bnRbNF0gPj0gbWF4Q291bnQpIHsKCSAgICAgICAgICAgIHJldHVybiBOYU47CgkgICAgICAgIH0KCSAgICAgICAgLy8gSWYgd2UgZm91bmQgYSBmaW5kZXItcGF0dGVybi1saWtlIHNlY3Rpb24sIGJ1dCBpdHMgc2l6ZSBpcyBzaWduaWZpY2FudGx5IGRpZmZlcmVudCB0aGFuCgkgICAgICAgIC8vIHRoZSBvcmlnaW5hbCwgYXNzdW1lIGl0J3MgYSBmYWxzZSBwb3NpdGl2ZQoJICAgICAgICB2YXIgc3RhdGVDb3VudFRvdGFsID0gc3RhdGVDb3VudFswXSArIHN0YXRlQ291bnRbMV0gKyBzdGF0ZUNvdW50WzJdICsgc3RhdGVDb3VudFszXSArCgkgICAgICAgICAgICBzdGF0ZUNvdW50WzRdOwoJICAgICAgICBpZiAoNSAqIE1hdGguYWJzKHN0YXRlQ291bnRUb3RhbCAtIG9yaWdpbmFsU3RhdGVDb3VudFRvdGFsKSA+PSBvcmlnaW5hbFN0YXRlQ291bnRUb3RhbCkgewoJICAgICAgICAgICAgcmV0dXJuIE5hTjsKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gRmluZGVyUGF0dGVybkZpbmRlci5mb3VuZFBhdHRlcm5Dcm9zcyhzdGF0ZUNvdW50KSA/IEZpbmRlclBhdHRlcm5GaW5kZXIuY2VudGVyRnJvbUVuZChzdGF0ZUNvdW50LCBqKSA6IE5hTjsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPlRoaXMgaXMgY2FsbGVkIHdoZW4gYSBob3Jpem9udGFsIHNjYW4gZmluZHMgYSBwb3NzaWJsZSBhbGlnbm1lbnQgcGF0dGVybi4gSXQgd2lsbAoJICAgICAqIGNyb3NzIGNoZWNrIHdpdGggYSB2ZXJ0aWNhbCBzY2FuLCBhbmQgaWYgc3VjY2Vzc2Z1bCwgd2lsbCwgYWgsIGNyb3NzLWNyb3NzLWNoZWNrCgkgICAgICogd2l0aCBhbm90aGVyIGhvcml6b250YWwgc2Nhbi4gVGhpcyBpcyBuZWVkZWQgcHJpbWFyaWx5IHRvIGxvY2F0ZSB0aGUgcmVhbCBob3Jpem9udGFsCgkgICAgICogY2VudGVyIG9mIHRoZSBwYXR0ZXJuIGluIGNhc2VzIG9mIGV4dHJlbWUgc2tldy4KCSAgICAgKiBBbmQgdGhlbiB3ZSBjcm9zcy1jcm9zcy1jcm9zcyBjaGVjayB3aXRoIGFub3RoZXIgZGlhZ29uYWwgc2Nhbi48L3A+CgkgICAgICoKCSAgICAgKiA8cD5JZiB0aGF0IHN1Y2NlZWRzIHRoZSBmaW5kZXIgcGF0dGVybiBsb2NhdGlvbiBpcyBhZGRlZCB0byBhIGxpc3QgdGhhdCB0cmFja3MKCSAgICAgKiB0aGUgbnVtYmVyIG9mIHRpbWVzIGVhY2ggbG9jYXRpb24gaGFzIGJlZW4gbmVhcmx5LW1hdGNoZWQgYXMgYSBmaW5kZXIgcGF0dGVybi4KCSAgICAgKiBFYWNoIGFkZGl0aW9uYWwgZmluZCBpcyBtb3JlIGV2aWRlbmNlIHRoYXQgdGhlIGxvY2F0aW9uIGlzIGluIGZhY3QgYSBmaW5kZXIKCSAgICAgKiBwYXR0ZXJuIGNlbnRlcgoJICAgICAqCgkgICAgICogQHBhcmFtIHN0YXRlQ291bnQgcmVhZGluZyBzdGF0ZSBtb2R1bGUgY291bnRzIGZyb20gaG9yaXpvbnRhbCBzY2FuCgkgICAgICogQHBhcmFtIGkgcm93IHdoZXJlIGZpbmRlciBwYXR0ZXJuIG1heSBiZSBmb3VuZAoJICAgICAqIEBwYXJhbSBqIGVuZCBvZiBwb3NzaWJsZSBmaW5kZXIgcGF0dGVybiBpbiByb3cKCSAgICAgKiBAcGFyYW0gcHVyZUJhcmNvZGUgdHJ1ZSBpZiBpbiAicHVyZSBiYXJjb2RlIiBtb2RlCgkgICAgICogQHJldHVybiB0cnVlIGlmIGEgZmluZGVyIHBhdHRlcm4gY2FuZGlkYXRlIHdhcyBmb3VuZCB0aGlzIHRpbWUKCSAgICAgKi8KCSAgICBGaW5kZXJQYXR0ZXJuRmluZGVyLnByb3RvdHlwZS5oYW5kbGVQb3NzaWJsZUNlbnRlciA9IGZ1bmN0aW9uIChzdGF0ZUNvdW50LCBpIC8qaW50Ki8sIGogLyppbnQqLywgcHVyZUJhcmNvZGUpIHsKCSAgICAgICAgdmFyIHN0YXRlQ291bnRUb3RhbCA9IHN0YXRlQ291bnRbMF0gKyBzdGF0ZUNvdW50WzFdICsgc3RhdGVDb3VudFsyXSArIHN0YXRlQ291bnRbM10gKwoJICAgICAgICAgICAgc3RhdGVDb3VudFs0XTsKCSAgICAgICAgdmFyIGNlbnRlckogPSBGaW5kZXJQYXR0ZXJuRmluZGVyLmNlbnRlckZyb21FbmQoc3RhdGVDb3VudCwgaik7CgkgICAgICAgIHZhciBjZW50ZXJJID0gdGhpcy5jcm9zc0NoZWNrVmVydGljYWwoaSwgLyooaW50KSAqLyBNYXRoLmZsb29yKGNlbnRlckopLCBzdGF0ZUNvdW50WzJdLCBzdGF0ZUNvdW50VG90YWwpOwoJICAgICAgICBpZiAoIWlzTmFOKGNlbnRlckkpKSB7CgkgICAgICAgICAgICAvLyBSZS1jcm9zcyBjaGVjawoJICAgICAgICAgICAgY2VudGVySiA9IHRoaXMuY3Jvc3NDaGVja0hvcml6b250YWwoLyooaW50KSAqLyBNYXRoLmZsb29yKGNlbnRlckopLCAvKihpbnQpICovIE1hdGguZmxvb3IoY2VudGVySSksIHN0YXRlQ291bnRbMl0sIHN0YXRlQ291bnRUb3RhbCk7CgkgICAgICAgICAgICBpZiAoIWlzTmFOKGNlbnRlckopICYmCgkgICAgICAgICAgICAgICAgKCFwdXJlQmFyY29kZSB8fCB0aGlzLmNyb3NzQ2hlY2tEaWFnb25hbCgvKihpbnQpICovIE1hdGguZmxvb3IoY2VudGVySSksIC8qKGludCkgKi8gTWF0aC5mbG9vcihjZW50ZXJKKSwgc3RhdGVDb3VudFsyXSwgc3RhdGVDb3VudFRvdGFsKSkpIHsKCSAgICAgICAgICAgICAgICB2YXIgZXN0aW1hdGVkTW9kdWxlU2l6ZSA9IHN0YXRlQ291bnRUb3RhbCAvIDcuMDsKCSAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTsKCSAgICAgICAgICAgICAgICB2YXIgcG9zc2libGVDZW50ZXJzID0gdGhpcy5wb3NzaWJsZUNlbnRlcnM7CgkgICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGhfMSA9IHBvc3NpYmxlQ2VudGVycy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoXzE7IGluZGV4KyspIHsKCSAgICAgICAgICAgICAgICAgICAgdmFyIGNlbnRlciA9IHBvc3NpYmxlQ2VudGVyc1tpbmRleF07CgkgICAgICAgICAgICAgICAgICAgIC8vIExvb2sgZm9yIGFib3V0IHRoZSBzYW1lIGNlbnRlciBhbmQgbW9kdWxlIHNpemU6CgkgICAgICAgICAgICAgICAgICAgIGlmIChjZW50ZXIuYWJvdXRFcXVhbHMoZXN0aW1hdGVkTW9kdWxlU2l6ZSwgY2VudGVySSwgY2VudGVySikpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2VudGVyc1tpbmRleF0gPSBjZW50ZXIuY29tYmluZUVzdGltYXRlKGNlbnRlckksIGNlbnRlckosIGVzdGltYXRlZE1vZHVsZVNpemUpOwoJICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlOwoJICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkgewoJICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBuZXcgRmluZGVyUGF0dGVybl8xLmRlZmF1bHQoY2VudGVySiwgY2VudGVySSwgZXN0aW1hdGVkTW9kdWxlU2l6ZSk7CgkgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2VudGVycy5wdXNoKHBvaW50KTsKCSAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0UG9pbnRDYWxsYmFjayAhPT0gbnVsbCAmJiB0aGlzLnJlc3VsdFBvaW50Q2FsbGJhY2sgIT09IHVuZGVmaW5lZCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRQb2ludENhbGxiYWNrLmZvdW5kUG9zc2libGVSZXN1bHRQb2ludChwb2ludCk7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogQHJldHVybiBudW1iZXIgb2Ygcm93cyB3ZSBjb3VsZCBzYWZlbHkgc2tpcCBkdXJpbmcgc2Nhbm5pbmcsIGJhc2VkIG9uIHRoZSBmaXJzdAoJICAgICAqICAgICAgICAgdHdvIGZpbmRlciBwYXR0ZXJucyB0aGF0IGhhdmUgYmVlbiBsb2NhdGVkLiBJbiBzb21lIGNhc2VzIHRoZWlyIHBvc2l0aW9uIHdpbGwKCSAgICAgKiAgICAgICAgIGFsbG93IHVzIHRvIGluZmVyIHRoYXQgdGhlIHRoaXJkIHBhdHRlcm4gbXVzdCBsaWUgYmVsb3cgYSBjZXJ0YWluIHBvaW50IGZhcnRoZXIKCSAgICAgKiAgICAgICAgIGRvd24gaW4gdGhlIGltYWdlLgoJICAgICAqLwoJICAgIEZpbmRlclBhdHRlcm5GaW5kZXIucHJvdG90eXBlLmZpbmRSb3dTa2lwID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgZV8xLCBfYTsKCSAgICAgICAgdmFyIG1heCA9IHRoaXMucG9zc2libGVDZW50ZXJzLmxlbmd0aDsKCSAgICAgICAgaWYgKG1heCA8PSAxKSB7CgkgICAgICAgICAgICByZXR1cm4gMDsKCSAgICAgICAgfQoJICAgICAgICB2YXIgZmlyc3RDb25maXJtZWRDZW50ZXIgPSBudWxsOwoJICAgICAgICB0cnkgewoJICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLnBvc3NpYmxlQ2VudGVycyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHsKCSAgICAgICAgICAgICAgICB2YXIgY2VudGVyID0gX2MudmFsdWU7CgkgICAgICAgICAgICAgICAgaWYgKGNlbnRlci5nZXRDb3VudCgpID49IEZpbmRlclBhdHRlcm5GaW5kZXIuQ0VOVEVSX1FVT1JVTSkgewoJICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RDb25maXJtZWRDZW50ZXIgPT0gbnVsbCkgewoJICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RDb25maXJtZWRDZW50ZXIgPSBjZW50ZXI7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHR3byBjb25maXJtZWQgY2VudGVycwoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gSG93IGZhciBkb3duIGNhbiB3ZSBza2lwIGJlZm9yZSByZXN1bWluZyBsb29raW5nIGZvciB0aGUgbmV4dAoJICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGF0dGVybj8gSW4gdGhlIHdvcnN0IGNhc2UsIG9ubHkgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUKCSAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpZmZlcmVuY2UgaW4gdGhlIHggLyB5IGNvb3JkaW5hdGVzIG9mIHRoZSB0d28gY2VudGVycy4KCSAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGNhc2Ugd2hlcmUgeW91IGZpbmQgdG9wIGxlZnQgbGFzdC4KCSAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU2tpcHBlZCA9IHRydWU7CgkgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyooaW50KSAqLyBNYXRoLmZsb29yKChNYXRoLmFicyhmaXJzdENvbmZpcm1lZENlbnRlci5nZXRYKCkgLSBjZW50ZXIuZ2V0WCgpKSAtCgkgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmlyc3RDb25maXJtZWRDZW50ZXIuZ2V0WSgpIC0gY2VudGVyLmdldFkoKSkpIC8gMik7CgkgICAgICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH0KCSAgICAgICAgZmluYWxseSB7CgkgICAgICAgICAgICB0cnkgewoJICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH0KCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gMDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIEByZXR1cm4gdHJ1ZSBpZmYgd2UgaGF2ZSBmb3VuZCBhdCBsZWFzdCAzIGZpbmRlciBwYXR0ZXJucyB0aGF0IGhhdmUgYmVlbiBkZXRlY3RlZAoJICAgICAqICAgICAgICAgYXQgbGVhc3Qge0BsaW5rICNDRU5URVJfUVVPUlVNfSB0aW1lcyBlYWNoLCBhbmQsIHRoZSBlc3RpbWF0ZWQgbW9kdWxlIHNpemUgb2YgdGhlCgkgICAgICogICAgICAgICBjYW5kaWRhdGVzIGlzICJwcmV0dHkgc2ltaWxhciIKCSAgICAgKi8KCSAgICBGaW5kZXJQYXR0ZXJuRmluZGVyLnByb3RvdHlwZS5oYXZlTXVsdGlwbHlDb25maXJtZWRDZW50ZXJzID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgZV8yLCBfYSwgZV8zLCBfYjsKCSAgICAgICAgdmFyIGNvbmZpcm1lZENvdW50ID0gMDsKCSAgICAgICAgdmFyIHRvdGFsTW9kdWxlU2l6ZSA9IDAuMDsKCSAgICAgICAgdmFyIG1heCA9IHRoaXMucG9zc2libGVDZW50ZXJzLmxlbmd0aDsKCSAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcy5wb3NzaWJsZUNlbnRlcnMpLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7CgkgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBfZC52YWx1ZTsKCSAgICAgICAgICAgICAgICBpZiAocGF0dGVybi5nZXRDb3VudCgpID49IEZpbmRlclBhdHRlcm5GaW5kZXIuQ0VOVEVSX1FVT1JVTSkgewoJICAgICAgICAgICAgICAgICAgICBjb25maXJtZWRDb3VudCsrOwoJICAgICAgICAgICAgICAgICAgICB0b3RhbE1vZHVsZVNpemUgKz0gcGF0dGVybi5nZXRFc3RpbWF0ZWRNb2R1bGVTaXplKCk7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9CgkgICAgICAgIGZpbmFsbHkgewoJICAgICAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9hID0gX2MucmV0dXJuKSkgX2EuY2FsbChfYyk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGNvbmZpcm1lZENvdW50IDwgMykgewoJICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICB9CgkgICAgICAgIC8vIE9LLCB3ZSBoYXZlIGF0IGxlYXN0IDMgY29uZmlybWVkIGNlbnRlcnMsIGJ1dCwgaXQncyBwb3NzaWJsZSB0aGF0IG9uZSBpcyBhICJmYWxzZSBwb3NpdGl2ZSIKCSAgICAgICAgLy8gYW5kIHRoYXQgd2UgbmVlZCB0byBrZWVwIGxvb2tpbmcuIFdlIGRldGVjdCB0aGlzIGJ5IGFza2luZyBpZiB0aGUgZXN0aW1hdGVkIG1vZHVsZSBzaXplcwoJICAgICAgICAvLyB2YXJ5IHRvbyBtdWNoLiBXZSBhcmJpdHJhcmlseSBzYXkgdGhhdCB3aGVuIHRoZSB0b3RhbCBkZXZpYXRpb24gZnJvbSBhdmVyYWdlIGV4Y2VlZHMKCSAgICAgICAgLy8gNSUgb2YgdGhlIHRvdGFsIG1vZHVsZSBzaXplIGVzdGltYXRlcywgaXQncyB0b28gbXVjaC4KCSAgICAgICAgdmFyIGF2ZXJhZ2UgPSB0b3RhbE1vZHVsZVNpemUgLyBtYXg7CgkgICAgICAgIHZhciB0b3RhbERldmlhdGlvbiA9IDAuMDsKCSAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgIGZvciAodmFyIF9lID0gX192YWx1ZXModGhpcy5wb3NzaWJsZUNlbnRlcnMpLCBfZiA9IF9lLm5leHQoKTsgIV9mLmRvbmU7IF9mID0gX2UubmV4dCgpKSB7CgkgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBfZi52YWx1ZTsKCSAgICAgICAgICAgICAgICB0b3RhbERldmlhdGlvbiArPSBNYXRoLmFicyhwYXR0ZXJuLmdldEVzdGltYXRlZE1vZHVsZVNpemUoKSAtIGF2ZXJhZ2UpOwoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIGNhdGNoIChlXzNfMSkgeyBlXzMgPSB7IGVycm9yOiBlXzNfMSB9OyB9CgkgICAgICAgIGZpbmFsbHkgewoJICAgICAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgICAgICBpZiAoX2YgJiYgIV9mLmRvbmUgJiYgKF9iID0gX2UucmV0dXJuKSkgX2IuY2FsbChfZSk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHRvdGFsRGV2aWF0aW9uIDw9IDAuMDUgKiB0b3RhbE1vZHVsZVNpemU7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBAcmV0dXJuIHRoZSAzIGJlc3Qge0BsaW5rIEZpbmRlclBhdHRlcm59cyBmcm9tIG91ciBsaXN0IG9mIGNhbmRpZGF0ZXMuIFRoZSAiYmVzdCIgYXJlCgkgICAgICogICAgICAgICB0aG9zZSB0aGF0IGhhdmUgYmVlbiBkZXRlY3RlZCBhdCBsZWFzdCB7QGxpbmsgI0NFTlRFUl9RVU9SVU19IHRpbWVzLCBhbmQgd2hvc2UgbW9kdWxlCgkgICAgICogICAgICAgICBzaXplIGRpZmZlcnMgZnJvbSB0aGUgYXZlcmFnZSBhbW9uZyB0aG9zZSBwYXR0ZXJucyB0aGUgbGVhc3QKCSAgICAgKiBAdGhyb3dzIE5vdEZvdW5kRXhjZXB0aW9uIGlmIDMgc3VjaCBmaW5kZXIgcGF0dGVybnMgZG8gbm90IGV4aXN0CgkgICAgICovCgkgICAgRmluZGVyUGF0dGVybkZpbmRlci5wcm90b3R5cGUuc2VsZWN0QmVzdFBhdHRlcm5zID0gZnVuY3Rpb24gKCkgewoJICAgICAgICB2YXIgZV80LCBfYSwgZV81LCBfYjsKCSAgICAgICAgdmFyIHN0YXJ0U2l6ZSA9IHRoaXMucG9zc2libGVDZW50ZXJzLmxlbmd0aDsKCSAgICAgICAgaWYgKHN0YXJ0U2l6ZSA8IDMpIHsKCSAgICAgICAgICAgIC8vIENvdWxkbid0IGZpbmQgZW5vdWdoIGZpbmRlciBwYXR0ZXJucwoJICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uXzEkMi5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIHBvc3NpYmxlQ2VudGVycyA9IHRoaXMucG9zc2libGVDZW50ZXJzOwoJICAgICAgICB2YXIgYXZlcmFnZTsKCSAgICAgICAgLy8gRmlsdGVyIG91dGxpZXIgcG9zc2liaWxpdGllcyB3aG9zZSBtb2R1bGUgc2l6ZSBpcyB0b28gZGlmZmVyZW50CgkgICAgICAgIGlmIChzdGFydFNpemUgPiAzKSB7CgkgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIG9ubHkgYWZmb3JkIHRvIGRvIHNvIGlmIHdlIGhhdmUgYXQgbGVhc3QgNCBwb3NzaWJpbGl0aWVzIHRvIGNob29zZSBmcm9tCgkgICAgICAgICAgICB2YXIgdG90YWxNb2R1bGVTaXplID0gMC4wOwoJICAgICAgICAgICAgdmFyIHNxdWFyZSA9IDAuMDsKCSAgICAgICAgICAgIHRyeSB7CgkgICAgICAgICAgICAgICAgZm9yICh2YXIgX2MgPSBfX3ZhbHVlcyh0aGlzLnBvc3NpYmxlQ2VudGVycyksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHsKCSAgICAgICAgICAgICAgICAgICAgdmFyIGNlbnRlciA9IF9kLnZhbHVlOwoJICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IGNlbnRlci5nZXRFc3RpbWF0ZWRNb2R1bGVTaXplKCk7CgkgICAgICAgICAgICAgICAgICAgIHRvdGFsTW9kdWxlU2l6ZSArPSBzaXplOwoJICAgICAgICAgICAgICAgICAgICBzcXVhcmUgKz0gc2l6ZSAqIHNpemU7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgY2F0Y2ggKGVfNF8xKSB7IGVfNCA9IHsgZXJyb3I6IGVfNF8xIH07IH0KCSAgICAgICAgICAgIGZpbmFsbHkgewoJICAgICAgICAgICAgICAgIHRyeSB7CgkgICAgICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2EgPSBfYy5yZXR1cm4pKSBfYS5jYWxsKF9jKTsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzQpIHRocm93IGVfNC5lcnJvcjsgfQoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgYXZlcmFnZSA9IHRvdGFsTW9kdWxlU2l6ZSAvIHN0YXJ0U2l6ZTsKCSAgICAgICAgICAgIHZhciBzdGREZXYgPSBNYXRoLnNxcnQoc3F1YXJlIC8gc3RhcnRTaXplIC0gYXZlcmFnZSAqIGF2ZXJhZ2UpOwoJICAgICAgICAgICAgcG9zc2libGVDZW50ZXJzLnNvcnQoCgkgICAgICAgICAgICAvKioKCSAgICAgICAgICAgICAqIDxwPk9yZGVycyBieSBmdXJ0aGVzdCBmcm9tIGF2ZXJhZ2U8L3A+CgkgICAgICAgICAgICAgKi8KCSAgICAgICAgICAgIC8vIEZ1cnRoZXN0RnJvbUF2ZXJhZ2VDb21wYXJhdG9yIGltcGxlbWVudHMgQ29tcGFyYXRvcjxGaW5kZXJQYXR0ZXJuPgoJICAgICAgICAgICAgZnVuY3Rpb24gKGNlbnRlcjEsIGNlbnRlcjIpIHsKCSAgICAgICAgICAgICAgICB2YXIgZEEgPSBNYXRoLmFicyhjZW50ZXIyLmdldEVzdGltYXRlZE1vZHVsZVNpemUoKSAtIGF2ZXJhZ2UpOwoJICAgICAgICAgICAgICAgIHZhciBkQiA9IE1hdGguYWJzKGNlbnRlcjEuZ2V0RXN0aW1hdGVkTW9kdWxlU2l6ZSgpIC0gYXZlcmFnZSk7CgkgICAgICAgICAgICAgICAgcmV0dXJuIGRBIDwgZEIgPyAtMSA6IGRBID4gZEIgPyAxIDogMDsKCSAgICAgICAgICAgIH0pOwoJICAgICAgICAgICAgdmFyIGxpbWl0ID0gTWF0aC5tYXgoMC4yICogYXZlcmFnZSwgc3RkRGV2KTsKCSAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zc2libGVDZW50ZXJzLmxlbmd0aCAmJiBwb3NzaWJsZUNlbnRlcnMubGVuZ3RoID4gMzsgaSsrKSB7CgkgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBwb3NzaWJsZUNlbnRlcnNbaV07CgkgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHBhdHRlcm4uZ2V0RXN0aW1hdGVkTW9kdWxlU2l6ZSgpIC0gYXZlcmFnZSkgPiBsaW1pdCkgewoJICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNlbnRlcnMuc3BsaWNlKGksIDEpOwoJICAgICAgICAgICAgICAgICAgICBpLS07CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICAgIGlmIChwb3NzaWJsZUNlbnRlcnMubGVuZ3RoID4gMykgewoJICAgICAgICAgICAgLy8gVGhyb3cgYXdheSBhbGwgYnV0IHRob3NlIGZpcnN0IHNpemUgY2FuZGlkYXRlIHBvaW50cyB3ZSBmb3VuZC4KCSAgICAgICAgICAgIHZhciB0b3RhbE1vZHVsZVNpemUgPSAwLjA7CgkgICAgICAgICAgICB0cnkgewoJICAgICAgICAgICAgICAgIGZvciAodmFyIHBvc3NpYmxlQ2VudGVyc18xID0gX192YWx1ZXMocG9zc2libGVDZW50ZXJzKSwgcG9zc2libGVDZW50ZXJzXzFfMSA9IHBvc3NpYmxlQ2VudGVyc18xLm5leHQoKTsgIXBvc3NpYmxlQ2VudGVyc18xXzEuZG9uZTsgcG9zc2libGVDZW50ZXJzXzFfMSA9IHBvc3NpYmxlQ2VudGVyc18xLm5leHQoKSkgewoJICAgICAgICAgICAgICAgICAgICB2YXIgcG9zc2libGVDZW50ZXIgPSBwb3NzaWJsZUNlbnRlcnNfMV8xLnZhbHVlOwoJICAgICAgICAgICAgICAgICAgICB0b3RhbE1vZHVsZVNpemUgKz0gcG9zc2libGVDZW50ZXIuZ2V0RXN0aW1hdGVkTW9kdWxlU2l6ZSgpOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGNhdGNoIChlXzVfMSkgeyBlXzUgPSB7IGVycm9yOiBlXzVfMSB9OyB9CgkgICAgICAgICAgICBmaW5hbGx5IHsKCSAgICAgICAgICAgICAgICB0cnkgewoJICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVDZW50ZXJzXzFfMSAmJiAhcG9zc2libGVDZW50ZXJzXzFfMS5kb25lICYmIChfYiA9IHBvc3NpYmxlQ2VudGVyc18xLnJldHVybikpIF9iLmNhbGwocG9zc2libGVDZW50ZXJzXzEpOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNSkgdGhyb3cgZV81LmVycm9yOyB9CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBhdmVyYWdlID0gdG90YWxNb2R1bGVTaXplIC8gcG9zc2libGVDZW50ZXJzLmxlbmd0aDsKCSAgICAgICAgICAgIHBvc3NpYmxlQ2VudGVycy5zb3J0KAoJICAgICAgICAgICAgLyoqCgkgICAgICAgICAgICAgKiA8cD5PcmRlcnMgYnkge0BsaW5rIEZpbmRlclBhdHRlcm4jZ2V0Q291bnQoKX0sIGRlc2NlbmRpbmcuPC9wPgoJICAgICAgICAgICAgICovCgkgICAgICAgICAgICAvLyBDZW50ZXJDb21wYXJhdG9yIGltcGxlbWVudHMgQ29tcGFyYXRvcjxGaW5kZXJQYXR0ZXJuPgoJICAgICAgICAgICAgZnVuY3Rpb24gKGNlbnRlcjEsIGNlbnRlcjIpIHsKCSAgICAgICAgICAgICAgICBpZiAoY2VudGVyMi5nZXRDb3VudCgpID09PSBjZW50ZXIxLmdldENvdW50KCkpIHsKCSAgICAgICAgICAgICAgICAgICAgdmFyIGRBID0gTWF0aC5hYnMoY2VudGVyMi5nZXRFc3RpbWF0ZWRNb2R1bGVTaXplKCkgLSBhdmVyYWdlKTsKCSAgICAgICAgICAgICAgICAgICAgdmFyIGRCID0gTWF0aC5hYnMoY2VudGVyMS5nZXRFc3RpbWF0ZWRNb2R1bGVTaXplKCkgLSBhdmVyYWdlKTsKCSAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRBIDwgZEIgPyAxIDogZEEgPiBkQiA/IC0xIDogMDsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAgICAgICAgIHJldHVybiBjZW50ZXIyLmdldENvdW50KCkgLSBjZW50ZXIxLmdldENvdW50KCk7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfSk7CgkgICAgICAgICAgICBwb3NzaWJsZUNlbnRlcnMuc3BsaWNlKDMpOyAvLyB0aGlzIGlzIG5vdCByZWFseSBuZWNlc3NhcnkgYXMgd2Ugb25seSByZXR1cm4gZmlyc3QgMyBhbnl3YXkKCSAgICAgICAgfQoJICAgICAgICByZXR1cm4gWwoJICAgICAgICAgICAgcG9zc2libGVDZW50ZXJzWzBdLAoJICAgICAgICAgICAgcG9zc2libGVDZW50ZXJzWzFdLAoJICAgICAgICAgICAgcG9zc2libGVDZW50ZXJzWzJdCgkgICAgICAgIF07CgkgICAgfTsKCSAgICBGaW5kZXJQYXR0ZXJuRmluZGVyLkNFTlRFUl9RVU9SVU0gPSAyOwoJICAgIEZpbmRlclBhdHRlcm5GaW5kZXIuTUlOX1NLSVAgPSAzOyAvLyAxIHBpeGVsL21vZHVsZSB0aW1lcyAzIG1vZHVsZXMvY2VudGVyCgkgICAgRmluZGVyUGF0dGVybkZpbmRlci5NQVhfTU9EVUxFUyA9IDU3OyAvLyBzdXBwb3J0IHVwIHRvIHZlcnNpb24gMTAgZm9yIG1vYmlsZSBjbGllbnRzCgkgICAgcmV0dXJuIEZpbmRlclBhdHRlcm5GaW5kZXI7Cgl9KCkpOwoJRmluZGVyUGF0dGVybkZpbmRlciQxLmRlZmF1bHQgPSBGaW5kZXJQYXR0ZXJuRmluZGVyOwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoRGV0ZWN0b3IkMSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiB0cnVlIH0pOwoJdmFyIE1hdGhVdGlsc18xID0gTWF0aFV0aWxzJDE7Cgl2YXIgRGV0ZWN0b3JSZXN1bHRfMSA9IERldGVjdG9yUmVzdWx0JDE7CgkvLyBpbXBvcnQgR3JpZFNhbXBsZXIgZnJvbSAnLi4vLi4vY29tbW9uL0dyaWRTYW1wbGVyJzsKCXZhciBHcmlkU2FtcGxlckluc3RhbmNlXzEgPSBHcmlkU2FtcGxlckluc3RhbmNlJDE7Cgl2YXIgUGVyc3BlY3RpdmVUcmFuc2Zvcm1fMSA9IFBlcnNwZWN0aXZlVHJhbnNmb3JtJDE7Cgl2YXIgRGVjb2RlSGludFR5cGVfMSQxID0gRGVjb2RlSGludFR5cGUkMTsKCXZhciBOb3RGb3VuZEV4Y2VwdGlvbl8xJDEgPSBOb3RGb3VuZEV4Y2VwdGlvbiQxOwoJdmFyIFJlc3VsdFBvaW50XzEgPSBSZXN1bHRQb2ludCQxOwoJdmFyIFZlcnNpb25fMSA9IFZlcnNpb24kMTsKCXZhciBBbGlnbm1lbnRQYXR0ZXJuRmluZGVyXzEgPSBBbGlnbm1lbnRQYXR0ZXJuRmluZGVyJDE7Cgl2YXIgRmluZGVyUGF0dGVybkZpbmRlcl8xID0gRmluZGVyUGF0dGVybkZpbmRlciQxOwoJLyppbXBvcnQgamF2YS51dGlsLk1hcDsqLwoJLyoqCgkgKiA8cD5FbmNhcHN1bGF0ZXMgbG9naWMgdGhhdCBjYW4gZGV0ZWN0IGEgUVIgQ29kZSBpbiBhbiBpbWFnZSwgZXZlbiBpZiB0aGUgUVIgQ29kZQoJICogaXMgcm90YXRlZCBvciBza2V3ZWQsIG9yIHBhcnRpYWxseSBvYnNjdXJlZC48L3A+CgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIERldGVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewoJICAgIGZ1bmN0aW9uIERldGVjdG9yKGltYWdlKSB7CgkgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTsKCSAgICB9CgkgICAgRGV0ZWN0b3IucHJvdG90eXBlLmdldEltYWdlID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTsKCSAgICB9OwoJICAgIERldGVjdG9yLnByb3RvdHlwZS5nZXRSZXN1bHRQb2ludENhbGxiYWNrID0gZnVuY3Rpb24gKCkgewoJICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRQb2ludENhbGxiYWNrOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogPHA+RGV0ZWN0cyBhIFFSIENvZGUgaW4gYW4gaW1hZ2UuPC9wPgoJICAgICAqCgkgICAgICogQHJldHVybiB7QGxpbmsgRGV0ZWN0b3JSZXN1bHR9IGVuY2Fwc3VsYXRpbmcgcmVzdWx0cyBvZiBkZXRlY3RpbmcgYSBRUiBDb2RlCgkgICAgICogQHRocm93cyBOb3RGb3VuZEV4Y2VwdGlvbiBpZiBRUiBDb2RlIGNhbm5vdCBiZSBmb3VuZAoJICAgICAqIEB0aHJvd3MgRm9ybWF0RXhjZXB0aW9uIGlmIGEgUVIgQ29kZSBjYW5ub3QgYmUgZGVjb2RlZAoJICAgICAqLwoJICAgIC8vIHB1YmxpYyBkZXRlY3QoKTogRGV0ZWN0b3JSZXN1bHQgLyp0aHJvd3MgTm90Rm91bmRFeGNlcHRpb24sIEZvcm1hdEV4Y2VwdGlvbiovIHsKCSAgICAvLyAgIHJldHVybiBkZXRlY3QobnVsbCkKCSAgICAvLyB9CgkgICAgLyoqCgkgICAgICogPHA+RGV0ZWN0cyBhIFFSIENvZGUgaW4gYW4gaW1hZ2UuPC9wPgoJICAgICAqCgkgICAgICogQHBhcmFtIGhpbnRzIG9wdGlvbmFsIGhpbnRzIHRvIGRldGVjdG9yCgkgICAgICogQHJldHVybiB7QGxpbmsgRGV0ZWN0b3JSZXN1bHR9IGVuY2Fwc3VsYXRpbmcgcmVzdWx0cyBvZiBkZXRlY3RpbmcgYSBRUiBDb2RlCgkgICAgICogQHRocm93cyBOb3RGb3VuZEV4Y2VwdGlvbiBpZiBRUiBDb2RlIGNhbm5vdCBiZSBmb3VuZAoJICAgICAqIEB0aHJvd3MgRm9ybWF0RXhjZXB0aW9uIGlmIGEgUVIgQ29kZSBjYW5ub3QgYmUgZGVjb2RlZAoJICAgICAqLwoJICAgIERldGVjdG9yLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoaGludHMpIHsKCSAgICAgICAgdGhpcy5yZXN1bHRQb2ludENhbGxiYWNrID0gKGhpbnRzID09PSBudWxsIHx8IGhpbnRzID09PSB1bmRlZmluZWQpID8gbnVsbCA6CgkgICAgICAgICAgICAvKihSZXN1bHRQb2ludENhbGxiYWNrKSAqLyBoaW50cy5nZXQoRGVjb2RlSGludFR5cGVfMSQxLmRlZmF1bHQuTkVFRF9SRVNVTFRfUE9JTlRfQ0FMTEJBQ0spOwoJICAgICAgICB2YXIgZmluZGVyID0gbmV3IEZpbmRlclBhdHRlcm5GaW5kZXJfMS5kZWZhdWx0KHRoaXMuaW1hZ2UsIHRoaXMucmVzdWx0UG9pbnRDYWxsYmFjayk7CgkgICAgICAgIHZhciBpbmZvID0gZmluZGVyLmZpbmQoaGludHMpOwoJICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRmluZGVyUGF0dGVybkluZm8oaW5mbyk7CgkgICAgfTsKCSAgICBEZXRlY3Rvci5wcm90b3R5cGUucHJvY2Vzc0ZpbmRlclBhdHRlcm5JbmZvID0gZnVuY3Rpb24gKGluZm8pIHsKCSAgICAgICAgdmFyIHRvcExlZnQgPSBpbmZvLmdldFRvcExlZnQoKTsKCSAgICAgICAgdmFyIHRvcFJpZ2h0ID0gaW5mby5nZXRUb3BSaWdodCgpOwoJICAgICAgICB2YXIgYm90dG9tTGVmdCA9IGluZm8uZ2V0Qm90dG9tTGVmdCgpOwoJICAgICAgICB2YXIgbW9kdWxlU2l6ZSA9IHRoaXMuY2FsY3VsYXRlTW9kdWxlU2l6ZSh0b3BMZWZ0LCB0b3BSaWdodCwgYm90dG9tTGVmdCk7CgkgICAgICAgIGlmIChtb2R1bGVTaXplIDwgMS4wKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMSQxLmRlZmF1bHQoJ05vIHBhdHRlcm4gZm91bmQgaW4gcHJvY2Nlc3MgZmluZGVyLicpOwoJICAgICAgICB9CgkgICAgICAgIHZhciBkaW1lbnNpb24gPSBEZXRlY3Rvci5jb21wdXRlRGltZW5zaW9uKHRvcExlZnQsIHRvcFJpZ2h0LCBib3R0b21MZWZ0LCBtb2R1bGVTaXplKTsKCSAgICAgICAgdmFyIHByb3Zpc2lvbmFsVmVyc2lvbiA9IFZlcnNpb25fMS5kZWZhdWx0LmdldFByb3Zpc2lvbmFsVmVyc2lvbkZvckRpbWVuc2lvbihkaW1lbnNpb24pOwoJICAgICAgICB2YXIgbW9kdWxlc0JldHdlZW5GUENlbnRlcnMgPSBwcm92aXNpb25hbFZlcnNpb24uZ2V0RGltZW5zaW9uRm9yVmVyc2lvbigpIC0gNzsKCSAgICAgICAgdmFyIGFsaWdubWVudFBhdHRlcm4gPSBudWxsOwoJICAgICAgICAvLyBBbnl0aGluZyBhYm92ZSB2ZXJzaW9uIDEgaGFzIGFuIGFsaWdubWVudCBwYXR0ZXJuCgkgICAgICAgIGlmIChwcm92aXNpb25hbFZlcnNpb24uZ2V0QWxpZ25tZW50UGF0dGVybkNlbnRlcnMoKS5sZW5ndGggPiAwKSB7CgkgICAgICAgICAgICAvLyBHdWVzcyB3aGVyZSBhICJib3R0b20gcmlnaHQiIGZpbmRlciBwYXR0ZXJuIHdvdWxkIGhhdmUgYmVlbgoJICAgICAgICAgICAgdmFyIGJvdHRvbVJpZ2h0WCA9IHRvcFJpZ2h0LmdldFgoKSAtIHRvcExlZnQuZ2V0WCgpICsgYm90dG9tTGVmdC5nZXRYKCk7CgkgICAgICAgICAgICB2YXIgYm90dG9tUmlnaHRZID0gdG9wUmlnaHQuZ2V0WSgpIC0gdG9wTGVmdC5nZXRZKCkgKyBib3R0b21MZWZ0LmdldFkoKTsKCSAgICAgICAgICAgIC8vIEVzdGltYXRlIHRoYXQgYWxpZ25tZW50IHBhdHRlcm4gaXMgY2xvc2VyIGJ5IDMgbW9kdWxlcwoJICAgICAgICAgICAgLy8gZnJvbSAiYm90dG9tIHJpZ2h0IiB0byBrbm93biB0b3AgbGVmdCBsb2NhdGlvbgoJICAgICAgICAgICAgdmFyIGNvcnJlY3Rpb25Ub1RvcExlZnQgPSAxLjAgLSAzLjAgLyBtb2R1bGVzQmV0d2VlbkZQQ2VudGVyczsKCSAgICAgICAgICAgIHZhciBlc3RBbGlnbm1lbnRYID0gLyooaW50KSAqLyBNYXRoLmZsb29yKHRvcExlZnQuZ2V0WCgpICsgY29ycmVjdGlvblRvVG9wTGVmdCAqIChib3R0b21SaWdodFggLSB0b3BMZWZ0LmdldFgoKSkpOwoJICAgICAgICAgICAgdmFyIGVzdEFsaWdubWVudFkgPSAvKihpbnQpICovIE1hdGguZmxvb3IodG9wTGVmdC5nZXRZKCkgKyBjb3JyZWN0aW9uVG9Ub3BMZWZ0ICogKGJvdHRvbVJpZ2h0WSAtIHRvcExlZnQuZ2V0WSgpKSk7CgkgICAgICAgICAgICAvLyBLaW5kIG9mIGFyYml0cmFyeSAtLSBleHBhbmQgc2VhcmNoIHJhZGl1cyBiZWZvcmUgZ2l2aW5nIHVwCgkgICAgICAgICAgICBmb3IgKHZhciBpID0gNDsgaSA8PSAxNjsgaSA8PD0gMSkgewoJICAgICAgICAgICAgICAgIHRyeSB7CgkgICAgICAgICAgICAgICAgICAgIGFsaWdubWVudFBhdHRlcm4gPSB0aGlzLmZpbmRBbGlnbm1lbnRJblJlZ2lvbihtb2R1bGVTaXplLCBlc3RBbGlnbm1lbnRYLCBlc3RBbGlnbm1lbnRZLCBpKTsKCSAgICAgICAgICAgICAgICAgICAgYnJlYWs7CgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgICAgIGNhdGNoIChyZSAvKk5vdEZvdW5kRXhjZXB0aW9uKi8pIHsKCSAgICAgICAgICAgICAgICAgICAgaWYgKCEocmUgaW5zdGFuY2VvZiBOb3RGb3VuZEV4Y2VwdGlvbl8xJDEuZGVmYXVsdCkpIHsKCSAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlOwoJICAgICAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgICAgIC8vIHRyeSBuZXh0IHJvdW5kCgkgICAgICAgICAgICAgICAgfQoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgLy8gSWYgd2UgZGlkbid0IGZpbmQgYWxpZ25tZW50IHBhdHRlcm4uLi4gd2VsbCB0cnkgYW55d2F5IHdpdGhvdXQgaXQKCSAgICAgICAgfQoJICAgICAgICB2YXIgdHJhbnNmb3JtID0gRGV0ZWN0b3IuY3JlYXRlVHJhbnNmb3JtKHRvcExlZnQsIHRvcFJpZ2h0LCBib3R0b21MZWZ0LCBhbGlnbm1lbnRQYXR0ZXJuLCBkaW1lbnNpb24pOwoJICAgICAgICB2YXIgYml0cyA9IERldGVjdG9yLnNhbXBsZUdyaWQodGhpcy5pbWFnZSwgdHJhbnNmb3JtLCBkaW1lbnNpb24pOwoJICAgICAgICB2YXIgcG9pbnRzOwoJICAgICAgICBpZiAoYWxpZ25tZW50UGF0dGVybiA9PT0gbnVsbCkgewoJICAgICAgICAgICAgcG9pbnRzID0gW2JvdHRvbUxlZnQsIHRvcExlZnQsIHRvcFJpZ2h0XTsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIHsKCSAgICAgICAgICAgIHBvaW50cyA9IFtib3R0b21MZWZ0LCB0b3BMZWZ0LCB0b3BSaWdodCwgYWxpZ25tZW50UGF0dGVybl07CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIG5ldyBEZXRlY3RvclJlc3VsdF8xLmRlZmF1bHQoYml0cywgcG9pbnRzKTsKCSAgICB9OwoJICAgIERldGVjdG9yLmNyZWF0ZVRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0b3BMZWZ0LCB0b3BSaWdodCwgYm90dG9tTGVmdCwgYWxpZ25tZW50UGF0dGVybiwgZGltZW5zaW9uIC8qaW50Ki8pIHsKCSAgICAgICAgdmFyIGRpbU1pbnVzVGhyZWUgPSBkaW1lbnNpb24gLSAzLjU7CgkgICAgICAgIHZhciBib3R0b21SaWdodFg7IC8qZmxvYXQqLwoJICAgICAgICB2YXIgYm90dG9tUmlnaHRZOyAvKmZsb2F0Ki8KCSAgICAgICAgdmFyIHNvdXJjZUJvdHRvbVJpZ2h0WDsgLypmbG9hdCovCgkgICAgICAgIHZhciBzb3VyY2VCb3R0b21SaWdodFk7IC8qZmxvYXQqLwoJICAgICAgICBpZiAoYWxpZ25tZW50UGF0dGVybiAhPT0gbnVsbCkgewoJICAgICAgICAgICAgYm90dG9tUmlnaHRYID0gYWxpZ25tZW50UGF0dGVybi5nZXRYKCk7CgkgICAgICAgICAgICBib3R0b21SaWdodFkgPSBhbGlnbm1lbnRQYXR0ZXJuLmdldFkoKTsKCSAgICAgICAgICAgIHNvdXJjZUJvdHRvbVJpZ2h0WCA9IGRpbU1pbnVzVGhyZWUgLSAzLjA7CgkgICAgICAgICAgICBzb3VyY2VCb3R0b21SaWdodFkgPSBzb3VyY2VCb3R0b21SaWdodFg7CgkgICAgICAgIH0KCSAgICAgICAgZWxzZSB7CgkgICAgICAgICAgICAvLyBEb24ndCBoYXZlIGFuIGFsaWdubWVudCBwYXR0ZXJuLCBqdXN0IG1ha2UgdXAgdGhlIGJvdHRvbS1yaWdodCBwb2ludAoJICAgICAgICAgICAgYm90dG9tUmlnaHRYID0gKHRvcFJpZ2h0LmdldFgoKSAtIHRvcExlZnQuZ2V0WCgpKSArIGJvdHRvbUxlZnQuZ2V0WCgpOwoJICAgICAgICAgICAgYm90dG9tUmlnaHRZID0gKHRvcFJpZ2h0LmdldFkoKSAtIHRvcExlZnQuZ2V0WSgpKSArIGJvdHRvbUxlZnQuZ2V0WSgpOwoJICAgICAgICAgICAgc291cmNlQm90dG9tUmlnaHRYID0gZGltTWludXNUaHJlZTsKCSAgICAgICAgICAgIHNvdXJjZUJvdHRvbVJpZ2h0WSA9IGRpbU1pbnVzVGhyZWU7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIFBlcnNwZWN0aXZlVHJhbnNmb3JtXzEuZGVmYXVsdC5xdWFkcmlsYXRlcmFsVG9RdWFkcmlsYXRlcmFsKDMuNSwgMy41LCBkaW1NaW51c1RocmVlLCAzLjUsIHNvdXJjZUJvdHRvbVJpZ2h0WCwgc291cmNlQm90dG9tUmlnaHRZLCAzLjUsIGRpbU1pbnVzVGhyZWUsIHRvcExlZnQuZ2V0WCgpLCB0b3BMZWZ0LmdldFkoKSwgdG9wUmlnaHQuZ2V0WCgpLCB0b3BSaWdodC5nZXRZKCksIGJvdHRvbVJpZ2h0WCwgYm90dG9tUmlnaHRZLCBib3R0b21MZWZ0LmdldFgoKSwgYm90dG9tTGVmdC5nZXRZKCkpOwoJICAgIH07CgkgICAgRGV0ZWN0b3Iuc2FtcGxlR3JpZCA9IGZ1bmN0aW9uIChpbWFnZSwgdHJhbnNmb3JtLCBkaW1lbnNpb24gLyppbnQqLykgewoJICAgICAgICB2YXIgc2FtcGxlciA9IEdyaWRTYW1wbGVySW5zdGFuY2VfMS5kZWZhdWx0LmdldEluc3RhbmNlKCk7CgkgICAgICAgIHJldHVybiBzYW1wbGVyLnNhbXBsZUdyaWRXaXRoVHJhbnNmb3JtKGltYWdlLCBkaW1lbnNpb24sIGRpbWVuc2lvbiwgdHJhbnNmb3JtKTsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPkNvbXB1dGVzIHRoZSBkaW1lbnNpb24gKG51bWJlciBvZiBtb2R1bGVzIG9uIGEgc2l6ZSkgb2YgdGhlIFFSIENvZGUgYmFzZWQgb24gdGhlIHBvc2l0aW9uCgkgICAgICogb2YgdGhlIGZpbmRlciBwYXR0ZXJucyBhbmQgZXN0aW1hdGVkIG1vZHVsZSBzaXplLjwvcD4KCSAgICAgKi8KCSAgICBEZXRlY3Rvci5jb21wdXRlRGltZW5zaW9uID0gZnVuY3Rpb24gKHRvcExlZnQsIHRvcFJpZ2h0LCBib3R0b21MZWZ0LCBtb2R1bGVTaXplIC8qZmxvYXQqLykgewoJICAgICAgICB2YXIgdGx0ckNlbnRlcnNEaW1lbnNpb24gPSBNYXRoVXRpbHNfMS5kZWZhdWx0LnJvdW5kKFJlc3VsdFBvaW50XzEuZGVmYXVsdC5kaXN0YW5jZSh0b3BMZWZ0LCB0b3BSaWdodCkgLyBtb2R1bGVTaXplKTsKCSAgICAgICAgdmFyIHRsYmxDZW50ZXJzRGltZW5zaW9uID0gTWF0aFV0aWxzXzEuZGVmYXVsdC5yb3VuZChSZXN1bHRQb2ludF8xLmRlZmF1bHQuZGlzdGFuY2UodG9wTGVmdCwgYm90dG9tTGVmdCkgLyBtb2R1bGVTaXplKTsKCSAgICAgICAgdmFyIGRpbWVuc2lvbiA9IE1hdGguZmxvb3IoKHRsdHJDZW50ZXJzRGltZW5zaW9uICsgdGxibENlbnRlcnNEaW1lbnNpb24pIC8gMikgKyA3OwoJICAgICAgICBzd2l0Y2ggKGRpbWVuc2lvbiAmIDB4MDMpIHsgLy8gbW9kIDQKCSAgICAgICAgICAgIGNhc2UgMDoKCSAgICAgICAgICAgICAgICBkaW1lbnNpb24rKzsKCSAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgIC8vIDE/IGRvIG5vdGhpbmcKCSAgICAgICAgICAgIGNhc2UgMjoKCSAgICAgICAgICAgICAgICBkaW1lbnNpb24tLTsKCSAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgIGNhc2UgMzoKCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMSQxLmRlZmF1bHQoJ0RpbWVuc2lvbnMgY291bGQgYmUgbm90IGZvdW5kLicpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiBkaW1lbnNpb247CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiA8cD5Db21wdXRlcyBhbiBhdmVyYWdlIGVzdGltYXRlZCBtb2R1bGUgc2l6ZSBiYXNlZCBvbiBlc3RpbWF0ZWQgZGVyaXZlZCBmcm9tIHRoZSBwb3NpdGlvbnMKCSAgICAgKiBvZiB0aGUgdGhyZWUgZmluZGVyIHBhdHRlcm5zLjwvcD4KCSAgICAgKgoJICAgICAqIEBwYXJhbSB0b3BMZWZ0IGRldGVjdGVkIHRvcC1sZWZ0IGZpbmRlciBwYXR0ZXJuIGNlbnRlcgoJICAgICAqIEBwYXJhbSB0b3BSaWdodCBkZXRlY3RlZCB0b3AtcmlnaHQgZmluZGVyIHBhdHRlcm4gY2VudGVyCgkgICAgICogQHBhcmFtIGJvdHRvbUxlZnQgZGV0ZWN0ZWQgYm90dG9tLWxlZnQgZmluZGVyIHBhdHRlcm4gY2VudGVyCgkgICAgICogQHJldHVybiBlc3RpbWF0ZWQgbW9kdWxlIHNpemUKCSAgICAgKi8KCSAgICBEZXRlY3Rvci5wcm90b3R5cGUuY2FsY3VsYXRlTW9kdWxlU2l6ZSA9IGZ1bmN0aW9uICh0b3BMZWZ0LCB0b3BSaWdodCwgYm90dG9tTGVmdCkgewoJICAgICAgICAvLyBUYWtlIHRoZSBhdmVyYWdlCgkgICAgICAgIHJldHVybiAodGhpcy5jYWxjdWxhdGVNb2R1bGVTaXplT25lV2F5KHRvcExlZnQsIHRvcFJpZ2h0KSArCgkgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZU1vZHVsZVNpemVPbmVXYXkodG9wTGVmdCwgYm90dG9tTGVmdCkpIC8gMi4wOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogPHA+RXN0aW1hdGVzIG1vZHVsZSBzaXplIGJhc2VkIG9uIHR3byBmaW5kZXIgcGF0dGVybnMgLS0gaXQgdXNlcwoJICAgICAqIHtAbGluayAjc2l6ZU9mQmxhY2tXaGl0ZUJsYWNrUnVuQm90aFdheXMoaW50LCBpbnQsIGludCwgaW50KX0gdG8gZmlndXJlIHRoZQoJICAgICAqIHdpZHRoIG9mIGVhY2gsIG1lYXN1cmluZyBhbG9uZyB0aGUgYXhpcyBiZXR3ZWVuIHRoZWlyIGNlbnRlcnMuPC9wPgoJICAgICAqLwoJICAgIERldGVjdG9yLnByb3RvdHlwZS5jYWxjdWxhdGVNb2R1bGVTaXplT25lV2F5ID0gZnVuY3Rpb24gKHBhdHRlcm4sIG90aGVyUGF0dGVybikgewoJICAgICAgICB2YXIgbW9kdWxlU2l6ZUVzdDEgPSB0aGlzLnNpemVPZkJsYWNrV2hpdGVCbGFja1J1bkJvdGhXYXlzKC8qKGludCkgKi8gTWF0aC5mbG9vcihwYXR0ZXJuLmdldFgoKSksIAoJICAgICAgICAvKihpbnQpICovIE1hdGguZmxvb3IocGF0dGVybi5nZXRZKCkpLCAKCSAgICAgICAgLyooaW50KSAqLyBNYXRoLmZsb29yKG90aGVyUGF0dGVybi5nZXRYKCkpLCAKCSAgICAgICAgLyooaW50KSAqLyBNYXRoLmZsb29yKG90aGVyUGF0dGVybi5nZXRZKCkpKTsKCSAgICAgICAgdmFyIG1vZHVsZVNpemVFc3QyID0gdGhpcy5zaXplT2ZCbGFja1doaXRlQmxhY2tSdW5Cb3RoV2F5cygvKihpbnQpICovIE1hdGguZmxvb3Iob3RoZXJQYXR0ZXJuLmdldFgoKSksIAoJICAgICAgICAvKihpbnQpICovIE1hdGguZmxvb3Iob3RoZXJQYXR0ZXJuLmdldFkoKSksIAoJICAgICAgICAvKihpbnQpICovIE1hdGguZmxvb3IocGF0dGVybi5nZXRYKCkpLCAKCSAgICAgICAgLyooaW50KSAqLyBNYXRoLmZsb29yKHBhdHRlcm4uZ2V0WSgpKSk7CgkgICAgICAgIGlmIChpc05hTihtb2R1bGVTaXplRXN0MSkpIHsKCSAgICAgICAgICAgIHJldHVybiBtb2R1bGVTaXplRXN0MiAvIDcuMDsKCSAgICAgICAgfQoJICAgICAgICBpZiAoaXNOYU4obW9kdWxlU2l6ZUVzdDIpKSB7CgkgICAgICAgICAgICByZXR1cm4gbW9kdWxlU2l6ZUVzdDEgLyA3LjA7CgkgICAgICAgIH0KCSAgICAgICAgLy8gQXZlcmFnZSB0aGVtLCBhbmQgZGl2aWRlIGJ5IDcgc2luY2Ugd2UndmUgY291bnRlZCB0aGUgd2lkdGggb2YgMyBibGFjayBtb2R1bGVzLAoJICAgICAgICAvLyBhbmQgMSB3aGl0ZSBhbmQgMSBibGFjayBtb2R1bGUgb24gZWl0aGVyIHNpZGUuIEVyZ28sIGRpdmlkZSBzdW0gYnkgMTQuCgkgICAgICAgIHJldHVybiAobW9kdWxlU2l6ZUVzdDEgKyBtb2R1bGVTaXplRXN0MikgLyAxNC4wOwoJICAgIH07CgkgICAgLyoqCgkgICAgICogU2VlIHtAbGluayAjc2l6ZU9mQmxhY2tXaGl0ZUJsYWNrUnVuKGludCwgaW50LCBpbnQsIGludCl9OyBjb21wdXRlcyB0aGUgdG90YWwgd2lkdGggb2YKCSAgICAgKiBhIGZpbmRlciBwYXR0ZXJuIGJ5IGxvb2tpbmcgZm9yIGEgYmxhY2std2hpdGUtYmxhY2sgcnVuIGZyb20gdGhlIGNlbnRlciBpbiB0aGUgZGlyZWN0aW9uCgkgICAgICogb2YgYW5vdGhlciBwb2ludCAoYW5vdGhlciBmaW5kZXIgcGF0dGVybiBjZW50ZXIpLCBhbmQgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbiB0b28uCgkgICAgICovCgkgICAgRGV0ZWN0b3IucHJvdG90eXBlLnNpemVPZkJsYWNrV2hpdGVCbGFja1J1bkJvdGhXYXlzID0gZnVuY3Rpb24gKGZyb21YIC8qaW50Ki8sIGZyb21ZIC8qaW50Ki8sIHRvWCAvKmludCovLCB0b1kgLyppbnQqLykgewoJICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5zaXplT2ZCbGFja1doaXRlQmxhY2tSdW4oZnJvbVgsIGZyb21ZLCB0b1gsIHRvWSk7CgkgICAgICAgIC8vIE5vdyBjb3VudCBvdGhlciB3YXkgLS0gZG9uJ3QgcnVuIG9mZiBpbWFnZSB0aG91Z2ggb2YgY291cnNlCgkgICAgICAgIHZhciBzY2FsZSA9IDEuMDsKCSAgICAgICAgdmFyIG90aGVyVG9YID0gZnJvbVggLSAodG9YIC0gZnJvbVgpOwoJICAgICAgICBpZiAob3RoZXJUb1ggPCAwKSB7CgkgICAgICAgICAgICBzY2FsZSA9IGZyb21YIC8gLyooZmxvYXQpICovIChmcm9tWCAtIG90aGVyVG9YKTsKCSAgICAgICAgICAgIG90aGVyVG9YID0gMDsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIGlmIChvdGhlclRvWCA+PSB0aGlzLmltYWdlLmdldFdpZHRoKCkpIHsKCSAgICAgICAgICAgIHNjYWxlID0gKHRoaXMuaW1hZ2UuZ2V0V2lkdGgoKSAtIDEgLSBmcm9tWCkgLyAvKihmbG9hdCkgKi8gKG90aGVyVG9YIC0gZnJvbVgpOwoJICAgICAgICAgICAgb3RoZXJUb1ggPSB0aGlzLmltYWdlLmdldFdpZHRoKCkgLSAxOwoJICAgICAgICB9CgkgICAgICAgIHZhciBvdGhlclRvWSA9IC8qKGludCkgKi8gTWF0aC5mbG9vcihmcm9tWSAtICh0b1kgLSBmcm9tWSkgKiBzY2FsZSk7CgkgICAgICAgIHNjYWxlID0gMS4wOwoJICAgICAgICBpZiAob3RoZXJUb1kgPCAwKSB7CgkgICAgICAgICAgICBzY2FsZSA9IGZyb21ZIC8gLyooZmxvYXQpICovIChmcm9tWSAtIG90aGVyVG9ZKTsKCSAgICAgICAgICAgIG90aGVyVG9ZID0gMDsKCSAgICAgICAgfQoJICAgICAgICBlbHNlIGlmIChvdGhlclRvWSA+PSB0aGlzLmltYWdlLmdldEhlaWdodCgpKSB7CgkgICAgICAgICAgICBzY2FsZSA9ICh0aGlzLmltYWdlLmdldEhlaWdodCgpIC0gMSAtIGZyb21ZKSAvIC8qKGZsb2F0KSAqLyAob3RoZXJUb1kgLSBmcm9tWSk7CgkgICAgICAgICAgICBvdGhlclRvWSA9IHRoaXMuaW1hZ2UuZ2V0SGVpZ2h0KCkgLSAxOwoJICAgICAgICB9CgkgICAgICAgIG90aGVyVG9YID0gLyooaW50KSAqLyBNYXRoLmZsb29yKGZyb21YICsgKG90aGVyVG9YIC0gZnJvbVgpICogc2NhbGUpOwoJICAgICAgICByZXN1bHQgKz0gdGhpcy5zaXplT2ZCbGFja1doaXRlQmxhY2tSdW4oZnJvbVgsIGZyb21ZLCBvdGhlclRvWCwgb3RoZXJUb1kpOwoJICAgICAgICAvLyBNaWRkbGUgcGl4ZWwgaXMgZG91YmxlLWNvdW50ZWQgdGhpcyB3YXk7IHN1YnRyYWN0IDEKCSAgICAgICAgcmV0dXJuIHJlc3VsdCAtIDEuMDsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPlRoaXMgbWV0aG9kIHRyYWNlcyBhIGxpbmUgZnJvbSBhIHBvaW50IGluIHRoZSBpbWFnZSwgaW4gdGhlIGRpcmVjdGlvbiB0b3dhcmRzIGFub3RoZXIgcG9pbnQuCgkgICAgICogSXQgYmVnaW5zIGluIGEgYmxhY2sgcmVnaW9uLCBhbmQga2VlcHMgZ29pbmcgdW50aWwgaXQgZmluZHMgd2hpdGUsIHRoZW4gYmxhY2ssIHRoZW4gd2hpdGUgYWdhaW4uCgkgICAgICogSXQgcmVwb3J0cyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgc3RhcnQgdG8gdGhpcyBwb2ludC48L3A+CgkgICAgICoKCSAgICAgKiA8cD5UaGlzIGlzIHVzZWQgd2hlbiBmaWd1cmluZyBvdXQgaG93IHdpZGUgYSBmaW5kZXIgcGF0dGVybiBpcywgd2hlbiB0aGUgZmluZGVyIHBhdHRlcm4KCSAgICAgKiBtYXkgYmUgc2tld2VkIG9yIHJvdGF0ZWQuPC9wPgoJICAgICAqLwoJICAgIERldGVjdG9yLnByb3RvdHlwZS5zaXplT2ZCbGFja1doaXRlQmxhY2tSdW4gPSBmdW5jdGlvbiAoZnJvbVggLyppbnQqLywgZnJvbVkgLyppbnQqLywgdG9YIC8qaW50Ki8sIHRvWSAvKmludCovKSB7CgkgICAgICAgIC8vIE1pbGQgdmFyaWFudCBvZiBCcmVzZW5oYW0ncyBhbGdvcml0aG0KCSAgICAgICAgLy8gc2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlc2VuaGFtJ3NfbGluZV9hbGdvcml0aG0KCSAgICAgICAgdmFyIHN0ZWVwID0gTWF0aC5hYnModG9ZIC0gZnJvbVkpID4gTWF0aC5hYnModG9YIC0gZnJvbVgpOwoJICAgICAgICBpZiAoc3RlZXApIHsKCSAgICAgICAgICAgIHZhciB0ZW1wID0gZnJvbVg7CgkgICAgICAgICAgICBmcm9tWCA9IGZyb21ZOwoJICAgICAgICAgICAgZnJvbVkgPSB0ZW1wOwoJICAgICAgICAgICAgdGVtcCA9IHRvWDsKCSAgICAgICAgICAgIHRvWCA9IHRvWTsKCSAgICAgICAgICAgIHRvWSA9IHRlbXA7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIGR4ID0gTWF0aC5hYnModG9YIC0gZnJvbVgpOwoJICAgICAgICB2YXIgZHkgPSBNYXRoLmFicyh0b1kgLSBmcm9tWSk7CgkgICAgICAgIHZhciBlcnJvciA9IC1keCAvIDI7CgkgICAgICAgIHZhciB4c3RlcCA9IGZyb21YIDwgdG9YID8gMSA6IC0xOwoJICAgICAgICB2YXIgeXN0ZXAgPSBmcm9tWSA8IHRvWSA/IDEgOiAtMTsKCSAgICAgICAgLy8gSW4gYmxhY2sgcGl4ZWxzLCBsb29raW5nIGZvciB3aGl0ZSwgZmlyc3Qgb3Igc2Vjb25kIHRpbWUuCgkgICAgICAgIHZhciBzdGF0ZSA9IDA7CgkgICAgICAgIC8vIExvb3AgdXAgdW50aWwgeCA9PSB0b1gsIGJ1dCBub3QgYmV5b25kCgkgICAgICAgIHZhciB4TGltaXQgPSB0b1ggKyB4c3RlcDsKCSAgICAgICAgZm9yICh2YXIgeCA9IGZyb21YLCB5ID0gZnJvbVk7IHggIT09IHhMaW1pdDsgeCArPSB4c3RlcCkgewoJICAgICAgICAgICAgdmFyIHJlYWxYID0gc3RlZXAgPyB5IDogeDsKCSAgICAgICAgICAgIHZhciByZWFsWSA9IHN0ZWVwID8geCA6IHk7CgkgICAgICAgICAgICAvLyBEb2VzIGN1cnJlbnQgcGl4ZWwgbWVhbiB3ZSBoYXZlIG1vdmVkIHdoaXRlIHRvIGJsYWNrIG9yIHZpY2UgdmVyc2E/CgkgICAgICAgICAgICAvLyBTY2FubmluZyBibGFjayBpbiBzdGF0ZSAwLDIgYW5kIHdoaXRlIGluIHN0YXRlIDEsIHNvIGlmIHdlIGZpbmQgdGhlIHdyb25nCgkgICAgICAgICAgICAvLyBjb2xvciwgYWR2YW5jZSB0byBuZXh0IHN0YXRlIG9yIGVuZCBpZiB3ZSBhcmUgaW4gc3RhdGUgMiBhbHJlYWR5CgkgICAgICAgICAgICBpZiAoKHN0YXRlID09PSAxKSA9PT0gdGhpcy5pbWFnZS5nZXQocmVhbFgsIHJlYWxZKSkgewoJICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMikgewoJICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aFV0aWxzXzEuZGVmYXVsdC5kaXN0YW5jZSh4LCB5LCBmcm9tWCwgZnJvbVkpOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBzdGF0ZSsrOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgZXJyb3IgKz0gZHk7CgkgICAgICAgICAgICBpZiAoZXJyb3IgPiAwKSB7CgkgICAgICAgICAgICAgICAgaWYgKHkgPT09IHRvWSkgewoJICAgICAgICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgeSArPSB5c3RlcDsKCSAgICAgICAgICAgICAgICBlcnJvciAtPSBkeDsKCSAgICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgICAvLyBGb3VuZCBibGFjay13aGl0ZS1ibGFjazsgZ2l2ZSB0aGUgYmVuZWZpdCBvZiB0aGUgZG91YnQgdGhhdCB0aGUgbmV4dCBwaXhlbCBvdXRzaWRlIHRoZSBpbWFnZQoJICAgICAgICAvLyBpcyAid2hpdGUiIHNvIHRoaXMgbGFzdCBwb2ludCBhdCAodG9YK3hTdGVwLHRvWSkgaXMgdGhlIHJpZ2h0IGVuZGluZy4gVGhpcyBpcyByZWFsbHkgYQoJICAgICAgICAvLyBzbWFsbCBhcHByb3hpbWF0aW9uOyAodG9YK3hTdGVwLHRvWSt5U3RlcCkgbWlnaHQgYmUgcmVhbGx5IGNvcnJlY3QuIElnbm9yZSB0aGlzLgoJICAgICAgICBpZiAoc3RhdGUgPT09IDIpIHsKCSAgICAgICAgICAgIHJldHVybiBNYXRoVXRpbHNfMS5kZWZhdWx0LmRpc3RhbmNlKHRvWCArIHhzdGVwLCB0b1ksIGZyb21YLCBmcm9tWSk7CgkgICAgICAgIH0KCSAgICAgICAgLy8gZWxzZSB3ZSBkaWRuJ3QgZmluZCBldmVuIGJsYWNrLXdoaXRlLWJsYWNrOyBubyBlc3RpbWF0ZSBpcyByZWFsbHkgcG9zc2libGUKCSAgICAgICAgcmV0dXJuIE5hTjsKCSAgICB9OwoJICAgIC8qKgoJICAgICAqIDxwPkF0dGVtcHRzIHRvIGxvY2F0ZSBhbiBhbGlnbm1lbnQgcGF0dGVybiBpbiBhIGxpbWl0ZWQgcmVnaW9uIG9mIHRoZSBpbWFnZSwgd2hpY2ggaXMKCSAgICAgKiBndWVzc2VkIHRvIGNvbnRhaW4gaXQuIFRoaXMgbWV0aG9kIHVzZXMge0BsaW5rIEFsaWdubWVudFBhdHRlcm59LjwvcD4KCSAgICAgKgoJICAgICAqIEBwYXJhbSBvdmVyYWxsRXN0TW9kdWxlU2l6ZSBlc3RpbWF0ZWQgbW9kdWxlIHNpemUgc28gZmFyCgkgICAgICogQHBhcmFtIGVzdEFsaWdubWVudFggeCBjb29yZGluYXRlIG9mIGNlbnRlciBvZiBhcmVhIHByb2JhYmx5IGNvbnRhaW5pbmcgYWxpZ25tZW50IHBhdHRlcm4KCSAgICAgKiBAcGFyYW0gZXN0QWxpZ25tZW50WSB5IGNvb3JkaW5hdGUgb2YgYWJvdmUKCSAgICAgKiBAcGFyYW0gYWxsb3dhbmNlRmFjdG9yIG51bWJlciBvZiBwaXhlbHMgaW4gYWxsIGRpcmVjdGlvbnMgdG8gc2VhcmNoIGZyb20gdGhlIGNlbnRlcgoJICAgICAqIEByZXR1cm4ge0BsaW5rIEFsaWdubWVudFBhdHRlcm59IGlmIGZvdW5kLCBvciBudWxsIG90aGVyd2lzZQoJICAgICAqIEB0aHJvd3MgTm90Rm91bmRFeGNlcHRpb24gaWYgYW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnMgZHVyaW5nIGRldGVjdGlvbgoJICAgICAqLwoJICAgIERldGVjdG9yLnByb3RvdHlwZS5maW5kQWxpZ25tZW50SW5SZWdpb24gPSBmdW5jdGlvbiAob3ZlcmFsbEVzdE1vZHVsZVNpemUgLypmbG9hdCovLCBlc3RBbGlnbm1lbnRYIC8qaW50Ki8sIGVzdEFsaWdubWVudFkgLyppbnQqLywgYWxsb3dhbmNlRmFjdG9yIC8qZmxvYXQqLykgewoJICAgICAgICAvLyBMb29rIGZvciBhbiBhbGlnbm1lbnQgcGF0dGVybiAoMyBtb2R1bGVzIGluIHNpemUpIGFyb3VuZCB3aGVyZSBpdAoJICAgICAgICAvLyBzaG91bGQgYmUKCSAgICAgICAgdmFyIGFsbG93YW5jZSA9IC8qKGludCkgKi8gTWF0aC5mbG9vcihhbGxvd2FuY2VGYWN0b3IgKiBvdmVyYWxsRXN0TW9kdWxlU2l6ZSk7CgkgICAgICAgIHZhciBhbGlnbm1lbnRBcmVhTGVmdFggPSBNYXRoLm1heCgwLCBlc3RBbGlnbm1lbnRYIC0gYWxsb3dhbmNlKTsKCSAgICAgICAgdmFyIGFsaWdubWVudEFyZWFSaWdodFggPSBNYXRoLm1pbih0aGlzLmltYWdlLmdldFdpZHRoKCkgLSAxLCBlc3RBbGlnbm1lbnRYICsgYWxsb3dhbmNlKTsKCSAgICAgICAgaWYgKGFsaWdubWVudEFyZWFSaWdodFggLSBhbGlnbm1lbnRBcmVhTGVmdFggPCBvdmVyYWxsRXN0TW9kdWxlU2l6ZSAqIDMpIHsKCSAgICAgICAgICAgIHRocm93IG5ldyBOb3RGb3VuZEV4Y2VwdGlvbl8xJDEuZGVmYXVsdCgnQWxpZ25tZW50IHRvcCBleGNlZWRzIGVzdGltYXRlZCBtb2R1bGUgc2l6ZS4nKTsKCSAgICAgICAgfQoJICAgICAgICB2YXIgYWxpZ25tZW50QXJlYVRvcFkgPSBNYXRoLm1heCgwLCBlc3RBbGlnbm1lbnRZIC0gYWxsb3dhbmNlKTsKCSAgICAgICAgdmFyIGFsaWdubWVudEFyZWFCb3R0b21ZID0gTWF0aC5taW4odGhpcy5pbWFnZS5nZXRIZWlnaHQoKSAtIDEsIGVzdEFsaWdubWVudFkgKyBhbGxvd2FuY2UpOwoJICAgICAgICBpZiAoYWxpZ25tZW50QXJlYUJvdHRvbVkgLSBhbGlnbm1lbnRBcmVhVG9wWSA8IG92ZXJhbGxFc3RNb2R1bGVTaXplICogMykgewoJICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uXzEkMS5kZWZhdWx0KCdBbGlnbm1lbnQgYm90dG9tIGV4Y2VlZHMgZXN0aW1hdGVkIG1vZHVsZSBzaXplLicpOwoJICAgICAgICB9CgkgICAgICAgIHZhciBhbGlnbm1lbnRGaW5kZXIgPSBuZXcgQWxpZ25tZW50UGF0dGVybkZpbmRlcl8xLmRlZmF1bHQodGhpcy5pbWFnZSwgYWxpZ25tZW50QXJlYUxlZnRYLCBhbGlnbm1lbnRBcmVhVG9wWSwgYWxpZ25tZW50QXJlYVJpZ2h0WCAtIGFsaWdubWVudEFyZWFMZWZ0WCwgYWxpZ25tZW50QXJlYUJvdHRvbVkgLSBhbGlnbm1lbnRBcmVhVG9wWSwgb3ZlcmFsbEVzdE1vZHVsZVNpemUsIHRoaXMucmVzdWx0UG9pbnRDYWxsYmFjayk7CgkgICAgICAgIHJldHVybiBhbGlnbm1lbnRGaW5kZXIuZmluZCgpOwoJICAgIH07CgkgICAgcmV0dXJuIERldGVjdG9yOwoJfSgpKTsKCURldGVjdG9yJDEuZGVmYXVsdCA9IERldGVjdG9yOwoKCS8qCgkgKiBDb3B5cmlnaHQgMjAwNyBaWGluZyBhdXRob3JzCgkgKgoJICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CgkgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCgkgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKCSAqCgkgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCglPYmplY3QuZGVmaW5lUHJvcGVydHkoUVJDb2RlUmVhZGVyJDEsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogdHJ1ZSB9KTsKCS8qbmFtZXNwYWNlIGNvbS5nb29nbGUuenhpbmcucXJjb2RlIHsqLwoJdmFyIEJhcmNvZGVGb3JtYXRfMSA9IEJhcmNvZGVGb3JtYXQkMTsKCXZhciBCaXRNYXRyaXhfMSA9IEJpdE1hdHJpeCQxOwoJdmFyIERlY29kZUhpbnRUeXBlXzEgPSBEZWNvZGVIaW50VHlwZSQxOwoJdmFyIE5vdEZvdW5kRXhjZXB0aW9uXzEgPSBOb3RGb3VuZEV4Y2VwdGlvbiQxOwoJdmFyIFJlc3VsdF8xID0gUmVzdWx0JDE7Cgl2YXIgUmVzdWx0TWV0YWRhdGFUeXBlXzEgPSBSZXN1bHRNZXRhZGF0YVR5cGUkMTsKCS8vIGltcG9ydCBEZXRlY3RvclJlc3VsdCBmcm9tICcuLi9jb21tb24vRGV0ZWN0b3JSZXN1bHQnOwoJdmFyIERlY29kZXJfMSA9IERlY29kZXIkMTsKCXZhciBRUkNvZGVEZWNvZGVyTWV0YURhdGFfMSA9IFFSQ29kZURlY29kZXJNZXRhRGF0YSQxOwoJdmFyIERldGVjdG9yXzEgPSBEZXRlY3RvciQxOwoJLyppbXBvcnQgamF2YS51dGlsLkxpc3Q7Ki8KCS8qaW1wb3J0IGphdmEudXRpbC5NYXA7Ki8KCS8qKgoJICogVGhpcyBpbXBsZW1lbnRhdGlvbiBjYW4gZGV0ZWN0IGFuZCBkZWNvZGUgUVIgQ29kZXMgaW4gYW4gaW1hZ2UuCgkgKgoJICogQGF1dGhvciBTZWFuIE93ZW4KCSAqLwoJdmFyIFFSQ29kZVJlYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKCSAgICBmdW5jdGlvbiBRUkNvZGVSZWFkZXIoKSB7CgkgICAgICAgIHRoaXMuZGVjb2RlciA9IG5ldyBEZWNvZGVyXzEuZGVmYXVsdCgpOwoJICAgIH0KCSAgICBRUkNvZGVSZWFkZXIucHJvdG90eXBlLmdldERlY29kZXIgPSBmdW5jdGlvbiAoKSB7CgkgICAgICAgIHJldHVybiB0aGlzLmRlY29kZXI7CgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBMb2NhdGVzIGFuZCBkZWNvZGVzIGEgUVIgY29kZSBpbiBhbiBpbWFnZS4KCSAgICAgKgoJICAgICAqIEByZXR1cm4gYSByZXByZXNlbnRpbmc6IHN0cmluZyB0aGUgY29udGVudCBlbmNvZGVkIGJ5IHRoZSBRUiBjb2RlCgkgICAgICogQHRocm93cyBOb3RGb3VuZEV4Y2VwdGlvbiBpZiBhIFFSIGNvZGUgY2Fubm90IGJlIGZvdW5kCgkgICAgICogQHRocm93cyBGb3JtYXRFeGNlcHRpb24gaWYgYSBRUiBjb2RlIGNhbm5vdCBiZSBkZWNvZGVkCgkgICAgICogQHRocm93cyBDaGVja3N1bUV4Y2VwdGlvbiBpZiBlcnJvciBjb3JyZWN0aW9uIGZhaWxzCgkgICAgICovCgkgICAgLypAT3ZlcnJpZGUqLwoJICAgIC8vIHB1YmxpYyBkZWNvZGUoaW1hZ2U6IEJpbmFyeUJpdG1hcCk6IFJlc3VsdCAvKnRocm93cyBOb3RGb3VuZEV4Y2VwdGlvbiwgQ2hlY2tzdW1FeGNlcHRpb24sIEZvcm1hdEV4Y2VwdGlvbiAqLyB7CgkgICAgLy8gICByZXR1cm4gdGhpcy5kZWNvZGUoaW1hZ2UsIG51bGwpCgkgICAgLy8gfQoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBRUkNvZGVSZWFkZXIucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChpbWFnZSwgaGludHMpIHsKCSAgICAgICAgdmFyIGRlY29kZXJSZXN1bHQ7CgkgICAgICAgIHZhciBwb2ludHM7CgkgICAgICAgIGlmIChoaW50cyAhPT0gdW5kZWZpbmVkICYmIGhpbnRzICE9PSBudWxsICYmIHVuZGVmaW5lZCAhPT0gaGludHMuZ2V0KERlY29kZUhpbnRUeXBlXzEuZGVmYXVsdC5QVVJFX0JBUkNPREUpKSB7CgkgICAgICAgICAgICB2YXIgYml0cyA9IFFSQ29kZVJlYWRlci5leHRyYWN0UHVyZUJpdHMoaW1hZ2UuZ2V0QmxhY2tNYXRyaXgoKSk7CgkgICAgICAgICAgICBkZWNvZGVyUmVzdWx0ID0gdGhpcy5kZWNvZGVyLmRlY29kZUJpdE1hdHJpeChiaXRzLCBoaW50cyk7CgkgICAgICAgICAgICBwb2ludHMgPSBRUkNvZGVSZWFkZXIuTk9fUE9JTlRTOwoJICAgICAgICB9CgkgICAgICAgIGVsc2UgewoJICAgICAgICAgICAgdmFyIGRldGVjdG9yUmVzdWx0ID0gbmV3IERldGVjdG9yXzEuZGVmYXVsdChpbWFnZS5nZXRCbGFja01hdHJpeCgpKS5kZXRlY3QoaGludHMpOwoJICAgICAgICAgICAgZGVjb2RlclJlc3VsdCA9IHRoaXMuZGVjb2Rlci5kZWNvZGVCaXRNYXRyaXgoZGV0ZWN0b3JSZXN1bHQuZ2V0Qml0cygpLCBoaW50cyk7CgkgICAgICAgICAgICBwb2ludHMgPSBkZXRlY3RvclJlc3VsdC5nZXRQb2ludHMoKTsKCSAgICAgICAgfQoJICAgICAgICAvLyBJZiB0aGUgY29kZSB3YXMgbWlycm9yZWQ6IHN3YXAgdGhlIGJvdHRvbS1sZWZ0IGFuZCB0aGUgdG9wLXJpZ2h0IHBvaW50cy4KCSAgICAgICAgaWYgKGRlY29kZXJSZXN1bHQuZ2V0T3RoZXIoKSBpbnN0YW5jZW9mIFFSQ29kZURlY29kZXJNZXRhRGF0YV8xLmRlZmF1bHQpIHsKCSAgICAgICAgICAgIGRlY29kZXJSZXN1bHQuZ2V0T3RoZXIoKS5hcHBseU1pcnJvcmVkQ29ycmVjdGlvbihwb2ludHMpOwoJICAgICAgICB9CgkgICAgICAgIHZhciByZXN1bHQgPSBuZXcgUmVzdWx0XzEuZGVmYXVsdChkZWNvZGVyUmVzdWx0LmdldFRleHQoKSwgZGVjb2RlclJlc3VsdC5nZXRSYXdCeXRlcygpLCB1bmRlZmluZWQsIHBvaW50cywgQmFyY29kZUZvcm1hdF8xLmRlZmF1bHQuUVJfQ09ERSwgdW5kZWZpbmVkKTsKCSAgICAgICAgdmFyIGJ5dGVTZWdtZW50cyA9IGRlY29kZXJSZXN1bHQuZ2V0Qnl0ZVNlZ21lbnRzKCk7CgkgICAgICAgIGlmIChieXRlU2VnbWVudHMgIT09IG51bGwpIHsKCSAgICAgICAgICAgIHJlc3VsdC5wdXRNZXRhZGF0YShSZXN1bHRNZXRhZGF0YVR5cGVfMS5kZWZhdWx0LkJZVEVfU0VHTUVOVFMsIGJ5dGVTZWdtZW50cyk7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIGVjTGV2ZWwgPSBkZWNvZGVyUmVzdWx0LmdldEVDTGV2ZWwoKTsKCSAgICAgICAgaWYgKGVjTGV2ZWwgIT09IG51bGwpIHsKCSAgICAgICAgICAgIHJlc3VsdC5wdXRNZXRhZGF0YShSZXN1bHRNZXRhZGF0YVR5cGVfMS5kZWZhdWx0LkVSUk9SX0NPUlJFQ1RJT05fTEVWRUwsIGVjTGV2ZWwpOwoJICAgICAgICB9CgkgICAgICAgIGlmIChkZWNvZGVyUmVzdWx0Lmhhc1N0cnVjdHVyZWRBcHBlbmQoKSkgewoJICAgICAgICAgICAgcmVzdWx0LnB1dE1ldGFkYXRhKFJlc3VsdE1ldGFkYXRhVHlwZV8xLmRlZmF1bHQuU1RSVUNUVVJFRF9BUFBFTkRfU0VRVUVOQ0UsIGRlY29kZXJSZXN1bHQuZ2V0U3RydWN0dXJlZEFwcGVuZFNlcXVlbmNlTnVtYmVyKCkpOwoJICAgICAgICAgICAgcmVzdWx0LnB1dE1ldGFkYXRhKFJlc3VsdE1ldGFkYXRhVHlwZV8xLmRlZmF1bHQuU1RSVUNUVVJFRF9BUFBFTkRfUEFSSVRZLCBkZWNvZGVyUmVzdWx0LmdldFN0cnVjdHVyZWRBcHBlbmRQYXJpdHkoKSk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIHJlc3VsdDsKCSAgICB9OwoJICAgIC8qQE92ZXJyaWRlKi8KCSAgICBRUkNvZGVSZWFkZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkgewoJICAgICAgICAvLyBkbyBub3RoaW5nCgkgICAgfTsKCSAgICAvKioKCSAgICAgKiBUaGlzIG1ldGhvZCBkZXRlY3RzIGEgY29kZSBpbiBhICJwdXJlIiBpbWFnZSAtLSB0aGF0IGlzLCBwdXJlIG1vbm9jaHJvbWUgaW1hZ2UKCSAgICAgKiB3aGljaCBjb250YWlucyBvbmx5IGFuIHVucm90YXRlZCwgdW5za2V3ZWQsIGltYWdlIG9mIGEgY29kZSwgd2l0aCBzb21lIHdoaXRlIGJvcmRlcgoJICAgICAqIGFyb3VuZCBpdC4gVGhpcyBpcyBhIHNwZWNpYWxpemVkIG1ldGhvZCB0aGF0IHdvcmtzIGV4Y2VwdGlvbmFsbHkgZmFzdCBpbiB0aGlzIHNwZWNpYWwKCSAgICAgKiBjYXNlLgoJICAgICAqCgkgICAgICogQHNlZSBjb20uZ29vZ2xlLnp4aW5nLmRhdGFtYXRyaXguRGF0YU1hdHJpeFJlYWRlciNleHRyYWN0UHVyZUJpdHMoQml0TWF0cml4KQoJICAgICAqLwoJICAgIFFSQ29kZVJlYWRlci5leHRyYWN0UHVyZUJpdHMgPSBmdW5jdGlvbiAoaW1hZ2UpIHsKCSAgICAgICAgdmFyIGxlZnRUb3BCbGFjayA9IGltYWdlLmdldFRvcExlZnRPbkJpdCgpOwoJICAgICAgICB2YXIgcmlnaHRCb3R0b21CbGFjayA9IGltYWdlLmdldEJvdHRvbVJpZ2h0T25CaXQoKTsKCSAgICAgICAgaWYgKGxlZnRUb3BCbGFjayA9PT0gbnVsbCB8fCByaWdodEJvdHRvbUJsYWNrID09PSBudWxsKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIG1vZHVsZVNpemUgPSB0aGlzLm1vZHVsZVNpemUobGVmdFRvcEJsYWNrLCBpbWFnZSk7CgkgICAgICAgIHZhciB0b3AgPSBsZWZ0VG9wQmxhY2tbMV07CgkgICAgICAgIHZhciBib3R0b20gPSByaWdodEJvdHRvbUJsYWNrWzFdOwoJICAgICAgICB2YXIgbGVmdCA9IGxlZnRUb3BCbGFja1swXTsKCSAgICAgICAgdmFyIHJpZ2h0ID0gcmlnaHRCb3R0b21CbGFja1swXTsKCSAgICAgICAgLy8gU2FuaXR5IGNoZWNrIQoJICAgICAgICBpZiAobGVmdCA+PSByaWdodCB8fCB0b3AgPj0gYm90dG9tKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKGJvdHRvbSAtIHRvcCAhPT0gcmlnaHQgLSBsZWZ0KSB7CgkgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UsIHdoZXJlIGJvdHRvbS1yaWdodCBtb2R1bGUgd2Fzbid0IGJsYWNrIHNvIHdlIGZvdW5kIHNvbWV0aGluZyBlbHNlIGluIHRoZSBsYXN0IHJvdwoJICAgICAgICAgICAgLy8gQXNzdW1lIGl0J3MgYSBzcXVhcmUsIHNvIHVzZSBoZWlnaHQgYXMgdGhlIHdpZHRoCgkgICAgICAgICAgICByaWdodCA9IGxlZnQgKyAoYm90dG9tIC0gdG9wKTsKCSAgICAgICAgICAgIGlmIChyaWdodCA+PSBpbWFnZS5nZXRXaWR0aCgpKSB7CgkgICAgICAgICAgICAgICAgLy8gQWJvcnQgaWYgdGhhdCB3b3VsZCBub3QgbWFrZSBzZW5zZSAtLSBvZmYgaW1hZ2UKCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgdmFyIG1hdHJpeFdpZHRoID0gTWF0aC5yb3VuZCgocmlnaHQgLSBsZWZ0ICsgMSkgLyBtb2R1bGVTaXplKTsKCSAgICAgICAgdmFyIG1hdHJpeEhlaWdodCA9IE1hdGgucm91bmQoKGJvdHRvbSAtIHRvcCArIDEpIC8gbW9kdWxlU2l6ZSk7CgkgICAgICAgIGlmIChtYXRyaXhXaWR0aCA8PSAwIHx8IG1hdHJpeEhlaWdodCA8PSAwKSB7CgkgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKG1hdHJpeEhlaWdodCAhPT0gbWF0cml4V2lkdGgpIHsKCSAgICAgICAgICAgIC8vIE9ubHkgcG9zc2libHkgZGVjb2RlIHNxdWFyZSByZWdpb25zCgkgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgIH0KCSAgICAgICAgLy8gUHVzaCBpbiB0aGUgImJvcmRlciIgYnkgaGFsZiB0aGUgbW9kdWxlIHdpZHRoIHNvIHRoYXQgd2Ugc3RhcnQKCSAgICAgICAgLy8gc2FtcGxpbmcgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbW9kdWxlLiBKdXN0IGluIGNhc2UgdGhlIGltYWdlIGlzIGEKCSAgICAgICAgLy8gbGl0dGxlIG9mZiwgdGhpcyB3aWxsIGhlbHAgcmVjb3Zlci4KCSAgICAgICAgdmFyIG51ZGdlID0gLyooaW50KSAqLyBNYXRoLmZsb29yKG1vZHVsZVNpemUgLyAyLjApOwoJICAgICAgICB0b3AgKz0gbnVkZ2U7CgkgICAgICAgIGxlZnQgKz0gbnVkZ2U7CgkgICAgICAgIC8vIEJ1dCBjYXJlZnVsIHRoYXQgdGhpcyBkb2VzIG5vdCBzYW1wbGUgb2ZmIHRoZSBlZGdlCgkgICAgICAgIC8vICJyaWdodCIgaXMgdGhlIGZhcnRoZXN0LXJpZ2h0IHZhbGlkIHBpeGVsIGxvY2F0aW9uIC0tIHJpZ2h0KzEgaXMgbm90IG5lY2Vzc2FyaWx5CgkgICAgICAgIC8vIFRoaXMgaXMgcG9zaXRpdmUgYnkgaG93IG11Y2ggdGhlIGlubmVyIHggbG9vcCBiZWxvdyB3b3VsZCBiZSB0b28gbGFyZ2UKCSAgICAgICAgdmFyIG51ZGdlZFRvb0ZhclJpZ2h0ID0gbGVmdCArIC8qKGludCkgKi8gTWF0aC5mbG9vcigobWF0cml4V2lkdGggLSAxKSAqIG1vZHVsZVNpemUpIC0gcmlnaHQ7CgkgICAgICAgIGlmIChudWRnZWRUb29GYXJSaWdodCA+IDApIHsKCSAgICAgICAgICAgIGlmIChudWRnZWRUb29GYXJSaWdodCA+IG51ZGdlKSB7CgkgICAgICAgICAgICAgICAgLy8gTmVpdGhlciB3YXkgZml0czsgYWJvcnQKCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBsZWZ0IC09IG51ZGdlZFRvb0ZhclJpZ2h0OwoJICAgICAgICB9CgkgICAgICAgIC8vIFNlZSBsb2dpYyBhYm92ZQoJICAgICAgICB2YXIgbnVkZ2VkVG9vRmFyRG93biA9IHRvcCArIC8qKGludCkgKi8gTWF0aC5mbG9vcigobWF0cml4SGVpZ2h0IC0gMSkgKiBtb2R1bGVTaXplKSAtIGJvdHRvbTsKCSAgICAgICAgaWYgKG51ZGdlZFRvb0ZhckRvd24gPiAwKSB7CgkgICAgICAgICAgICBpZiAobnVkZ2VkVG9vRmFyRG93biA+IG51ZGdlKSB7CgkgICAgICAgICAgICAgICAgLy8gTmVpdGhlciB3YXkgZml0czsgYWJvcnQKCSAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb25fMS5kZWZhdWx0KCk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICB0b3AgLT0gbnVkZ2VkVG9vRmFyRG93bjsKCSAgICAgICAgfQoJICAgICAgICAvLyBOb3cganVzdCByZWFkIG9mZiB0aGUgYml0cwoJICAgICAgICB2YXIgYml0cyA9IG5ldyBCaXRNYXRyaXhfMS5kZWZhdWx0KG1hdHJpeFdpZHRoLCBtYXRyaXhIZWlnaHQpOwoJICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IG1hdHJpeEhlaWdodDsgeSsrKSB7CgkgICAgICAgICAgICB2YXIgaU9mZnNldCA9IHRvcCArIC8qKGludCkgKi8gTWF0aC5mbG9vcih5ICogbW9kdWxlU2l6ZSk7CgkgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IG1hdHJpeFdpZHRoOyB4KyspIHsKCSAgICAgICAgICAgICAgICBpZiAoaW1hZ2UuZ2V0KGxlZnQgKyAvKihpbnQpICovIE1hdGguZmxvb3IoeCAqIG1vZHVsZVNpemUpLCBpT2Zmc2V0KSkgewoJICAgICAgICAgICAgICAgICAgICBiaXRzLnNldCh4LCB5KTsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIGJpdHM7CgkgICAgfTsKCSAgICBRUkNvZGVSZWFkZXIubW9kdWxlU2l6ZSA9IGZ1bmN0aW9uIChsZWZ0VG9wQmxhY2ssIGltYWdlKSB7CgkgICAgICAgIHZhciBoZWlnaHQgPSBpbWFnZS5nZXRIZWlnaHQoKTsKCSAgICAgICAgdmFyIHdpZHRoID0gaW1hZ2UuZ2V0V2lkdGgoKTsKCSAgICAgICAgdmFyIHggPSBsZWZ0VG9wQmxhY2tbMF07CgkgICAgICAgIHZhciB5ID0gbGVmdFRvcEJsYWNrWzFdOwoJICAgICAgICB2YXIgaW5CbGFjayA9IHRydWU7CgkgICAgICAgIHZhciB0cmFuc2l0aW9ucyA9IDA7CgkgICAgICAgIHdoaWxlICh4IDwgd2lkdGggJiYgeSA8IGhlaWdodCkgewoJICAgICAgICAgICAgaWYgKGluQmxhY2sgIT09IGltYWdlLmdldCh4LCB5KSkgewoJICAgICAgICAgICAgICAgIGlmICgrK3RyYW5zaXRpb25zID09PSA1KSB7CgkgICAgICAgICAgICAgICAgICAgIGJyZWFrOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgICAgICBpbkJsYWNrID0gIWluQmxhY2s7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICB4Kys7CgkgICAgICAgICAgICB5Kys7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHggPT09IHdpZHRoIHx8IHkgPT09IGhlaWdodCkgewoJICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uXzEuZGVmYXVsdCgpOwoJICAgICAgICB9CgkgICAgICAgIHJldHVybiAoeCAtIGxlZnRUb3BCbGFja1swXSkgLyA3LjA7CgkgICAgfTsKCSAgICBRUkNvZGVSZWFkZXIuTk9fUE9JTlRTID0gbmV3IEFycmF5KCk7CgkgICAgcmV0dXJuIFFSQ29kZVJlYWRlcjsKCX0oKSk7Cgl2YXIgX2RlZmF1bHQgPSBRUkNvZGVSZWFkZXIkMS5kZWZhdWx0ID0gUVJDb2RlUmVhZGVyOwoKCXZhciB0b0dyYXlzY2FsZUJ1ZmZlciA9IGZ1bmN0aW9uIHRvR3JheXNjYWxlQnVmZmVyKGltYWdlQnVmZmVyLCB3aWR0aCwgaGVpZ2h0KSB7CgkgIHZhciBncmF5c2NhbGVCdWZmZXIgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkod2lkdGggKiBoZWlnaHQpOwoKCSAgZm9yICh2YXIgaSA9IDAsIGogPSAwLCBsZW5ndGhfMSA9IGltYWdlQnVmZmVyLmxlbmd0aDsgaSA8IGxlbmd0aF8xOyBpICs9IDQsIGorKykgewoJICAgIHZhciBncmF5ID0gdm9pZCAwOwoJICAgIHZhciBhbHBoYSA9IGltYWdlQnVmZmVyW2kgKyAzXTsgLy8gVGhlIGNvbG9yIG9mIGZ1bGx5LXRyYW5zcGFyZW50IHBpeGVscyBpcyBpcnJlbGV2YW50LiBUaGV5IGFyZSBvZnRlbiwgdGVjaG5pY2FsbHksIGZ1bGx5LXRyYW5zcGFyZW50CgkgICAgLy8gYmxhY2sgKDAgYWxwaGEsIGFuZCB0aGVuIDAgUkdCKS4gVGhleSBhcmUgb2Z0ZW4gdXNlZCwgb2YgY291cnNlIGFzIHRoZSAid2hpdGUiIGFyZWEgaW4gYQoJICAgIC8vIGJhcmNvZGUgaW1hZ2UuIEZvcmNlIGFueSBzdWNoIHBpeGVsIHRvIGJlIHdoaXRlOgoKCSAgICBpZiAoYWxwaGEgPT09IDApIHsKCSAgICAgIGdyYXkgPSAweEZGOwoJICAgIH0gZWxzZSB7CgkgICAgICB2YXIgcGl4ZWxSID0gaW1hZ2VCdWZmZXJbaV07CgkgICAgICB2YXIgcGl4ZWxHID0gaW1hZ2VCdWZmZXJbaSArIDFdOwoJICAgICAgdmFyIHBpeGVsQiA9IGltYWdlQnVmZmVyW2kgKyAyXTsgLy8gLjI5OVIgKyAwLjU4N0cgKyAwLjExNEIgKFlVVi9ZSVEgZm9yIFBBTCBhbmQgTlRTQyksCgkgICAgICAvLyAoMzA2KlIpID4+IDEwIGlzIGFwcHJveGltYXRlbHkgZXF1YWwgdG8gUiowLjI5OSwgYW5kIHNvIG9uLgoJICAgICAgLy8gMHgyMDAgPj4gMTAgaXMgMC41LCBpdCBpbXBsZW1lbnRzIHJvdW5kaW5nLgoKCSAgICAgIGdyYXkgPSAzMDYgKiBwaXhlbFIgKyA2MDEgKiBwaXhlbEcgKyAxMTcgKiBwaXhlbEIgKyAweDIwMCA+PiAxMDsKCSAgICB9CgoJICAgIGdyYXlzY2FsZUJ1ZmZlcltqXSA9IGdyYXk7CgkgIH0KCgkgIHJldHVybiBncmF5c2NhbGVCdWZmZXI7Cgl9OwoKCXZhciByZWFkZXIgPSBuZXcgX2RlZmF1bHQoKTsKCXNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7CgkgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzCgkgIHRyeSB7CgkgICAgdmFyIGx1bWluYW5jZXMgPSB0b0dyYXlzY2FsZUJ1ZmZlcihlLmRhdGEuZGF0YSwgZS5kYXRhLndpZHRoLCBlLmRhdGEuaGVpZ2h0KTsKCSAgICB2YXIgbHVtaW5hbmNlU291cmNlID0gbmV3IF9kZWZhdWx0JDEobHVtaW5hbmNlcywgZS5kYXRhLndpZHRoLCBlLmRhdGEuaGVpZ2h0KTsKCSAgICB2YXIgaHlicmlkQmluYXJpemVyID0gbmV3IF9kZWZhdWx0JDIobHVtaW5hbmNlU291cmNlKTsKCSAgICB2YXIgYmluYXJ5Qml0bWFwID0gbmV3IF9kZWZhdWx0JDMoaHlicmlkQmluYXJpemVyKTsKCSAgICB2YXIgZGVjb2RlZCA9IHJlYWRlci5kZWNvZGUoYmluYXJ5Qml0bWFwKTsKCSAgICBwb3N0TWVzc2FnZShkZWNvZGVkKTsKCSAgfSBjYXRjaCAoZXJyKSB7CgkgICAgcG9zdE1lc3NhZ2UobnVsbCk7CgkgIH0KCX0pOwoKfSkoKTsKCg==",
    null,
    !1
  ),
  qy = ["constraints", "onError", "onLoad", "onScan", "resolution", "qrArea"];
function yZ(g, I) {
  var C = Object.keys(g);
  if (Object.getOwnPropertySymbols) {
    var A = Object.getOwnPropertySymbols(g);
    I &&
      (A = A.filter(function (l) {
        return Object.getOwnPropertyDescriptor(g, l).enumerable;
      })),
      C.push.apply(C, A);
  }
  return C;
}
function WZ(g) {
  for (var I = 1; I < arguments.length; I++) {
    var C = arguments[I] != null ? arguments[I] : {};
    I % 2
      ? yZ(Object(C), !0).forEach(function (A) {
          py(g, A, C[A]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(C))
      : yZ(Object(C)).forEach(function (A) {
          Object.defineProperty(g, A, Object.getOwnPropertyDescriptor(C, A));
        });
  }
  return g;
}
var _y = function () {
    return new Oy();
  },
  VZ = function (I) {
    I &&
      (I.getVideoTracks && I.getAudioTracks
        ? (I.getVideoTracks().forEach(function (C) {
            I.removeTrack(C), C.stop();
          }),
          I.getAudioTracks().forEach(function (C) {
            I.removeTrack(C), C.stop();
          }))
        : I.stop());
  },
  po = function (I) {
    var C = I.constraints,
      A = I.onError,
      l = I.onLoad,
      e = I.onScan,
      n = I.resolution,
      d = I.qrArea,
      c = Ky(I, qy),
      o = y.useRef(null),
      t = y.useRef(null),
      m = y.useRef(document.createElement("canvas")),
      G = y.useRef(null),
      s = y.useRef(),
      i = y.useState(null),
      b = Hy(i, 2),
      V = b[0],
      a = b[1],
      Z = y.useRef(!1),
      u = y.useRef();
    y.useEffect(
      function () {
        u.current = _y();
        var B = u.current;
        return (
          (B.onmessage = function (p) {
            e &&
              e(p.data ? WZ(WZ({}, p.data), {}, { canvas: m.current }) : null),
              (Z.current = !1);
          }),
          function () {
            B.terminate();
          }
        );
      },
      [e]
    );
    var r = JSON.stringify(d),
      X = y.useCallback(
        function () {
          var B = JSON.parse(r),
            p = u.current,
            H =
              t.current && t.current.readyState === t.current.HAVE_ENOUGH_DATA;
          if (!Z.current && H) {
            Z.current = !0;
            var k = t.current.videoWidth,
              T = t.current.videoHeight,
              CI = k > T ? k : T,
              JI = Math.floor((n / CI) * 100) / 100;
            (T = Math.floor(JI * T)),
              (k = Math.floor(JI * k)),
              (m.current.width = k),
              (m.current.height = T),
              (G.current = m.current.getContext("2d")),
              G.current.drawImage(t.current, 0, 0, k, T);
            var uC;
            B && B.length === 2 && B[0] > 0 && B[1] > 0
              ? (uC = G.current.getImageData(
                  Math.floor((k - B[0]) / 2),
                  Math.floor((T - B[1]) / 2),
                  B[0],
                  B[1]
                ))
              : (uC = G.current.getImageData(0, 0, k, T)),
              p.postMessage(uC);
          }
          s.current = requestAnimationFrame(X);
        },
        [n, r]
      ),
      R = JSON.stringify(C);
    return (
      y.useEffect(
        function () {
          var B = JSON.parse(R),
            p = !0;
          return (
            navigator.mediaDevices
              .getUserMedia(B)
              .then(function (H) {
                if (!p) VZ(H);
                else {
                  o.current = H;
                  try {
                    t.current &&
                      ((t.current.srcObject = H),
                      t.current.setAttribute("playsinline", !0));
                  } catch {
                    a(window.URL.createObjectURL(H));
                  }
                  l && l(), (s.current = requestAnimationFrame(X));
                }
              })
              .catch(function (H) {
                return p ? A(H) : null;
              }),
            function () {
              cancelAnimationFrame(s.current),
                (p = !1),
                VZ(o.current),
                V && window.URL.revokeObjectURL(V);
            }
          );
        },
        [X, R, A, l, V]
      ),
      y.createElement(
        "video",
        D({ autoPlay: !0, playsInline: !0, src: V, ref: t }, c)
      )
    );
  };
po.propTypes = {
  constraints: SC.object,
  onError: SC.func.isRequired,
  onLoad: SC.func,
  onScan: SC.func.isRequired,
  resolution: SC.number,
  qrArea: SC.array,
};
po.defaultProps = {
  constraints: { audio: !1, video: !0 },
  resolution: 640,
  qrArea: [],
};
const $y = "/assets/registering-b78e09c6.gif",
  gW = () => {
    const [g, I] = y.useState(localStorage.getItem("studentnumber")),
      [C, A] = y.useState(""),
      [l, e] = y.useState(null),
      [n, d] = y.useState(!1),
      [c, o] = y.useState(!1),
      [t, m] = y.useState(!1),
      [G, s] = y.useState(!1),
      [i, b] = y.useState("");
    y.useEffect(() => {
      (async () => {
        try {
          const p = await jI.get(
            `https://student.northeurope.cloudapp.azure.com/api/student/gdprConsent/${g}`
          );
          (!p.data.exists || !p.data.gdprConsent) && s(!0);
        } catch (p) {
          console.error(
            "Error checking student existence and GDPR consent:",
            p
          );
        }
      })();
    }, [g]);
    const V = async () => {
        const B = await jI.put(
          `https://student.northeurope.cloudapp.azure.com/api/student/updateConsent/${g}`
        );
        console.log("Student consent updated", B.data), s(!1);
      },
      a = async () => {
        try {
          const B = await jI.delete(
            `https://student.northeurope.cloudapp.azure.com/api/student/delete/${g}`
          );
          b(
            "Your data has now been deleted from our database and courses, you are now redirected back to the login page."
          ),
            setTimeout(() => {
              localStorage.removeItem("token"),
                localStorage.removeItem("UserId"),
                localStorage.removeItem("studentnumber"),
                window.location.reload();
            }, 4e3);
        } catch (B) {
          console.error("Error in deleting student data:", B);
        }
      },
      Z = ({ onAgree: B, onDecline: p }) => {
        const [H, k] = y.useState(!1);
        return S.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center",
          children: S.jsxs("div", {
            className: "bg-white max-w-[40%] p-2 rounded-lg shadow-xl",
            children: [
              S.jsx("h2", {
                className: "text-xl font-bold mb-4 font-roboto-slab",
                children: "We value your privacy",
              }),
              S.jsxs("p", {
                className: " font-open-sans",
                children: [
                  'By clicking "I Agree", you allow us to use your data for collecting participation rates on courses. By clicking "I Decline" your data is immediately deleted from our database',
                  " ",
                ],
              }),
              S.jsx("div", {
                className: "mt-2 text-blue-600 cursor-pointer",
                onClick: () => k(!H),
                children: "See what information we are saving",
              }),
              H &&
                S.jsx("div", {
                  className: "p-3 bg-gray-100 rounded mt-2",
                  children: S.jsxs("ul", {
                    children: [
                      S.jsx("li", { children: "Username" }),
                      S.jsx("li", { children: "Lastname" }),
                      S.jsx("li", { children: "Firstname" }),
                      S.jsx("li", { children: "StudentNumber" }),
                    ],
                  }),
                }),
              S.jsxs("div", {
                className: "flex justify-end mt-4",
                children: [
                  S.jsx("button", {
                    onClick: p,
                    className:
                      "bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 font-open-sans",
                    children: "I Decline",
                  }),
                  S.jsx("button", {
                    onClick: B,
                    className:
                      "bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded font-open-sans",
                    children: "I Agree",
                  }),
                ],
              }),
              S.jsx("p", { className: " text-red-600 mt-4", children: i }),
            ],
          }),
        });
      },
      u = async (B) => {
        if (B && !c) {
          o(!0);
          try {
            const p = B.text;
            console.log("teksti qr koodista ", p);
            const H = await fetch(
              "https://student.northeurope.cloudapp.azure.com/api/qrcoderegistration",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ studentNumber: g, qrCodeIdentifier: p }),
              }
            );
            if (!H.ok) {
              const T = await H.json();
              throw new Error(T.message || H.statusText);
            }
            const k = await H.json();
            A(k.message), m(!0), d(!1);
          } catch (p) {
            console.error(p), A(p.message || "Error during registration");
          } finally {
            o(!1);
          }
        }
      },
      r = (B) => {
        console.error(B);
      },
      X = async () => {
        try {
          const p = await (
            await fetch(
              `https://student.northeurope.cloudapp.azure.com/api/participations/${g}`
            )
          ).json();
          console.log("participation data fetched", p), e(p);
        } catch (B) {
          console.error("Error fetching participation data:", B);
        }
      },
      R = ({ data: B }) =>
        B.length === 0
          ? S.jsx("p", {
              className: "text-center text-lg text-gray-700 mt-4",
              children: "No participation data available currently!",
            })
          : S.jsxs("table", {
              className: "max-w-4xl w-full table-auto mt-7 place-self-center",
              children: [
                S.jsx("thead", {
                  className: "bg-blue-900",
                  children: S.jsxs("tr", {
                    children: [
                      S.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider font-open-sans",
                        children: "Course",
                      }),
                      S.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider font-open-sans",
                        children: "Topic",
                      }),
                      S.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider font-open-sans",
                        children: "Your Participation Rate",
                      }),
                    ],
                  }),
                }),
                S.jsx("tbody", {
                  className: "bg-white divide-y divide-gray-700",
                  children: B.map((p, H) =>
                    Object.entries(p.participation).map(([k, T], CI) =>
                      S.jsxs(
                        "tr",
                        {
                          children: [
                            CI === 0 &&
                              S.jsx("td", {
                                className:
                                  "px-6 py-4 whitespace-nowrap font-roboto-slab",
                                rowSpan: Object.keys(p.participation).length,
                                children: p.courseName,
                              }),
                            S.jsx("td", {
                              className:
                                "px-6 py-4 whitespace-nowrap font-roboto-slab",
                              children: k,
                            }),
                            S.jsx("td", {
                              className: "px-6 py-4 whitespace-nowrap",
                              children: T,
                            }),
                          ],
                        },
                        H + "-" + CI
                      )
                    )
                  ),
                }),
              ],
            });
    return S.jsxs("div", {
      className: "flex flex-col justify-center mt-8",
      children: [
        G && S.jsx(Z, { onAgree: V, onDecline: a }),
        S.jsxs("div", {
          className:
            "max-w-4xl w-full place-self-center bg-white p-8 border border-gray-300 rounded-lg shadow-lg",
          children: [
            S.jsxs("div", {
              className: "mb-5",
              children: [
                S.jsx("label", {
                  className: "block mb-2 text-sm font-medium text-gray-600",
                  children: "Enter your student number:",
                }),
                S.jsx("input", {
                  type: "text",
                  value: g,
                  onChange: (B) => I(B.target.value),
                  placeholder: "Enter Student Number",
                  className:
                    "border border-gray-300 p-3 rounded-lg block w-full mb-4",
                }),
              ],
            }),
            S.jsxs("div", {
              className: "flex flex-col justify-between items-center",
              children: [
                S.jsx("button", {
                  onClick: X,
                  className:
                    "px-4 mb-4 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-lg transition-colors",
                  children: "Show Participation Rates",
                }),
                S.jsx("button", {
                  className:
                    "px-4 mb-4 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-lg transition-colors",
                  onClick: () => d(!n),
                  children: n ? "Hide Scanner" : "Scan QR Code",
                }),
              ],
            }),
            n &&
              S.jsx(po, {
                delay: 300,
                style: { width: "100%" },
                onError: r,
                onScan: u,
              }),
            S.jsx("p", {
              className: `mt-6 text-center text-xl ${
                C.includes("registered") ? "text-green-600" : "text-red-600"
              }`,
              children: C,
            }),
            t &&
              C.includes("registered") &&
              S.jsx("div", {
                className: "text-center mt-4 flex justify-center",
                children: S.jsx("img", {
                  className: "justify-center h-[8rem] rounded-lg",
                  src: $y,
                  alt: "Registration Successful",
                }),
              }),
          ],
        }),
        l && S.jsx(R, { data: l }),
      ],
    });
  },
  IW = () => {
    const { studentInfo: g, setStudentInfo: I } = y.useContext(ZA),
      C = oA(),
      A = () => {
        localStorage.removeItem("token"),
          localStorage.removeItem("userid"),
          I({ staff: !1, firstname: "", lastname: "" }),
          C("/");
      };
    return S.jsxs(S.Fragment, {
      children: [
        S.jsxs("nav", {
          className: "flex justify-between items-center",
          children: [
            S.jsx(ms, {
              to: "/studenthome",
              children: S.jsx("img", {
                className: "h-10 m-4",
                src: Ga,
                alt: "Logo",
              }),
            }),
            S.jsxs("ul", {
              className: "flex items-center",
              children: [
                S.jsxs("li", {
                  className: "text-md ml-2 font-roboto-slab",
                  children: ["Welcome! ", g.lastname, " ", g.firstname],
                }),
                S.jsx("button", {
                  onClick: A,
                  className:
                    "text-white bg-orange-600 rounded-lg p-4 mx-8 font-roboto-slab",
                  children: "Logout",
                }),
              ],
            }),
          ],
        }),
        S.jsx(gW, {}),
      ],
    });
  },
  CW = () => {
    console.log("private routes");
    const { studentInfo: g } = y.useContext(ZA),
      I = g.firstname !== "" && g.lastname !== "";
    return (
      console.log("isAuthenticated", I),
      I ? S.jsx(Is, {}) : S.jsx(gs, { to: "/studentlogin" })
    );
  },
  AW = async (g, I, C) => {
    try {
      return (
        await jI.post(
          "https://student.northeurope.cloudapp.azure.com/api/students/updategdpr",
          { studentNumber: g, gdprConsent: I, userId: C },
          { withCredentials: !0 }
        )
      ).data;
    } catch (A) {
      throw A;
    }
  },
  lW = () => {
    const [g, I] = y.useState(!1),
      C = oA(),
      { studentInfo: A } = y.useContext(ZA),
      l = localStorage.getItem("userid");
    y.useEffect(() => {
      A.gdprConsent === !0 && C("/studenthome");
    }, [A.gdprConsent, C]);
    const e = async (n) => {
      if ((n.preventDefault(), !g)) {
        alert("You must consent to the data policy to continue.");
        return;
      }
      try {
        await AW(A.studentNumber, g, l), C("/studenthome");
      } catch (d) {
        console.error("Failed to save GDPR consent:", d);
      }
    };
    return S.jsxs("div", {
      className: "container mx-auto p-4",
      children: [
        S.jsx("h1", {
          className: "text-xl text-center mb-4",
          children: "GDPR Consent Form",
        }),
        S.jsxs("form", {
          onSubmit: e,
          className: "max-w-md mx-auto",
          children: [
            S.jsxs("div", {
              className: "mb-6",
              children: [
                S.jsx("label", {
                  htmlFor: "gdprConsent",
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  children:
                    "I consent to Metropolia collecting and storing my personal data:",
                }),
                S.jsx("input", {
                  id: "gdprConsent",
                  type: "checkbox",
                  className: "mr-2 leading-tight",
                  checked: g,
                  onChange: (n) => I(n.target.checked),
                }),
              ],
            }),
            S.jsx("div", {
              className: "flex items-center justify-between",
              children: S.jsx("button", {
                className:
                  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                type: "submit",
                children: "Submit",
              }),
            }),
          ],
        }),
      ],
    });
  },
  eW = () =>
    S.jsx(kB, {
      children: S.jsx(os, {
        children: S.jsxs(As, {
          children: [
            S.jsxs(hC, {
              element: S.jsx(CW, {}),
              children: [
                S.jsx(hC, { path: "/studenthome", element: S.jsx(IW, {}) }),
                S.jsx(hC, { path: "/gdprconsentform", element: S.jsx(lW, {}) }),
              ],
            }),
            S.jsx(hC, { path: "/studentlogin", element: S.jsx(sZ, {}) }),
            S.jsx(hC, { path: "*", element: S.jsx(sZ, {}) }),
          ],
        }),
      }),
    });
ed.createRoot(document.getElementById("root")).render(
  S.jsx(KZ.StrictMode, { children: S.jsx(eW, {}) })
);
