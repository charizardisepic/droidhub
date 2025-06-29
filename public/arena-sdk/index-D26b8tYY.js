var Vp = Object.defineProperty;
var Kp = (t, e, r) => e in t ? Vp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Si = (t, e, r) => Kp(t, typeof e != "symbol" ? e + "" : e, r);
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Aa(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function El(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(t, i);
    Object.defineProperty(r, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[i];
      }
    });
  }), r;
}
var Oa = { exports: {} }, pi = typeof Reflect == "object" ? Reflect : null, vc = pi && typeof pi.apply == "function" ? pi.apply : function(e, r, i) {
  return Function.prototype.apply.call(e, r, i);
}, Ys;
pi && typeof pi.ownKeys == "function" ? Ys = pi.ownKeys : Object.getOwnPropertySymbols ? Ys = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Ys = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Wp(t) {
  console && console.warn && console.warn(t);
}
var _l = Number.isNaN || function(e) {
  return e !== e;
};
function ne() {
  ne.init.call(this);
}
Oa.exports = ne;
Oa.exports.once = Zp;
ne.EventEmitter = ne;
ne.prototype._events = void 0;
ne.prototype._eventsCount = 0;
ne.prototype._maxListeners = void 0;
var Ec = 10;
function En(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(ne, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ec;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || _l(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Ec = t;
  }
});
ne.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
ne.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || _l(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Il(t) {
  return t._maxListeners === void 0 ? ne.defaultMaxListeners : t._maxListeners;
}
ne.prototype.getMaxListeners = function() {
  return Il(this);
};
ne.prototype.emit = function(e) {
  for (var r = [], i = 1; i < arguments.length; i++) r.push(arguments[i]);
  var s = e === "error", n = this._events;
  if (n !== void 0)
    s = s && n.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var o;
    if (r.length > 0 && (o = r[0]), o instanceof Error)
      throw o;
    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw a.context = o, a;
  }
  var c = n[e];
  if (c === void 0)
    return !1;
  if (typeof c == "function")
    vc(c, this, r);
  else
    for (var h = c.length, u = Al(c, h), i = 0; i < h; ++i)
      vc(u[i], this, r);
  return !0;
};
function xl(t, e, r, i) {
  var s, n, o;
  if (En(r), n = t._events, n === void 0 ? (n = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (n.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), n = t._events), o = n[e]), o === void 0)
    o = n[e] = r, ++t._eventsCount;
  else if (typeof o == "function" ? o = n[e] = i ? [r, o] : [o, r] : i ? o.unshift(r) : o.push(r), s = Il(t), s > 0 && o.length > s && !o.warned) {
    o.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = o.length, Wp(a);
  }
  return t;
}
ne.prototype.addListener = function(e, r) {
  return xl(this, e, r, !1);
};
ne.prototype.on = ne.prototype.addListener;
ne.prototype.prependListener = function(e, r) {
  return xl(this, e, r, !0);
};
function Gp() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function $l(t, e, r) {
  var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = Gp.bind(i);
  return s.listener = r, i.wrapFn = s, s;
}
ne.prototype.once = function(e, r) {
  return En(r), this.on(e, $l(this, e, r)), this;
};
ne.prototype.prependOnceListener = function(e, r) {
  return En(r), this.prependListener(e, $l(this, e, r)), this;
};
ne.prototype.removeListener = function(e, r) {
  var i, s, n, o, a;
  if (En(r), s = this._events, s === void 0)
    return this;
  if (i = s[e], i === void 0)
    return this;
  if (i === r || i.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, i.listener || r));
  else if (typeof i != "function") {
    for (n = -1, o = i.length - 1; o >= 0; o--)
      if (i[o] === r || i[o].listener === r) {
        a = i[o].listener, n = o;
        break;
      }
    if (n < 0)
      return this;
    n === 0 ? i.shift() : Yp(i, n), i.length === 1 && (s[e] = i[0]), s.removeListener !== void 0 && this.emit("removeListener", e, a || r);
  }
  return this;
};
ne.prototype.off = ne.prototype.removeListener;
ne.prototype.removeAllListeners = function(e) {
  var r, i, s;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[e]), this;
  if (arguments.length === 0) {
    var n = Object.keys(i), o;
    for (s = 0; s < n.length; ++s)
      o = n[s], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = i[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--)
      this.removeListener(e, r[s]);
  return this;
};
function Sl(t, e, r) {
  var i = t._events;
  if (i === void 0)
    return [];
  var s = i[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? Jp(s) : Al(s, s.length);
}
ne.prototype.listeners = function(e) {
  return Sl(this, e, !0);
};
ne.prototype.rawListeners = function(e) {
  return Sl(this, e, !1);
};
ne.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Dl.call(t, e);
};
ne.prototype.listenerCount = Dl;
function Dl(t) {
  var e = this._events;
  if (e !== void 0) {
    var r = e[t];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
ne.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Ys(this._events) : [];
};
function Al(t, e) {
  for (var r = new Array(e), i = 0; i < e; ++i)
    r[i] = t[i];
  return r;
}
function Yp(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Jp(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Zp(t, e) {
  return new Promise(function(r, i) {
    function s(o) {
      t.removeListener(e, n), i(o);
    }
    function n() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    Ol(t, e, n, { once: !0 }), e !== "error" && Qp(t, s, { once: !0 });
  });
}
function Qp(t, e, r) {
  typeof t.on == "function" && Ol(t, "error", e, r);
}
function Ol(t, e, r, i) {
  if (typeof t.on == "function")
    i.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(n) {
      i.once && t.removeEventListener(e, s), r(n);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var st = Oa.exports;
const Pa = /* @__PURE__ */ Aa(st);
var _c = function(t, e, r) {
  if (r || arguments.length === 2) for (var i = 0, s = e.length, n; i < s; i++)
    (n || !(i in e)) && (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
  return t.concat(n || Array.prototype.slice.call(e));
}, Xp = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, i) {
      this.name = e, this.version = r, this.os = i, this.type = "browser";
    }
    return t;
  }()
), eg = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), tg = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, i, s) {
      this.name = e, this.version = r, this.os = i, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), rg = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), ig = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), sg = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, ng = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Ic = 3, og = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", sg]
], xc = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function ag(t) {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new ig() : typeof navigator < "u" ? hg(navigator.userAgent) : lg();
}
function cg(t) {
  return t !== "" && og.reduce(function(e, r) {
    var i = r[0], s = r[1];
    if (e)
      return e;
    var n = s.exec(t);
    return !!n && [i, n];
  }, !1);
}
function hg(t) {
  var e = cg(t);
  if (!e)
    return null;
  var r = e[0], i = e[1];
  if (r === "searchbot")
    return new rg();
  var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < Ic && (s = _c(_c([], s, !0), fg(Ic - s.length), !0)) : s = [];
  var n = s.join("."), o = ug(t), a = ng.exec(t);
  return a && a[1] ? new tg(r, n, o, a[1]) : new Xp(r, n, o);
}
function ug(t) {
  for (var e = 0, r = xc.length; e < r; e++) {
    var i = xc[e], s = i[0], n = i[1], o = n.exec(t);
    if (o)
      return s;
  }
  return null;
}
function lg() {
  var t = typeof process < "u" && process.version;
  return t ? new eg(process.version.slice(1)) : null;
}
function fg(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var L = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Po = function(t, e) {
  return Po = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var s in i) i.hasOwnProperty(s) && (r[s] = i[s]);
  }, Po(t, e);
};
function dg(t, e) {
  Po(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Co = function() {
  return Co = Object.assign || function(e) {
    for (var r, i = 1, s = arguments.length; i < s; i++) {
      r = arguments[i];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Co.apply(this, arguments);
};
function pg(t, e) {
  var r = {};
  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(t); s < i.length; s++)
      e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (r[i[s]] = t[i[s]]);
  return r;
}
function gg(t, e, r, i) {
  var s = arguments.length, n = s < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, r) : i, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(t, e, r, i);
  else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (n = (s < 3 ? o(n) : s > 3 ? o(e, r, n) : o(e, r)) || n);
  return s > 3 && n && Object.defineProperty(e, r, n), n;
}
function yg(t, e) {
  return function(r, i) {
    e(r, i, t);
  };
}
function wg(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(t, e);
}
function mg(t, e, r, i) {
  function s(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function a(u) {
      try {
        h(i.next(u));
      } catch (l) {
        o(l);
      }
    }
    function c(u) {
      try {
        h(i.throw(u));
      } catch (l) {
        o(l);
      }
    }
    function h(u) {
      u.done ? n(u.value) : s(u.value).then(a, c);
    }
    h((i = i.apply(t, e || [])).next());
  });
}
function bg(t, e) {
  var r = { label: 0, sent: function() {
    if (n[0] & 1) throw n[1];
    return n[1];
  }, trys: [], ops: [] }, i, s, n, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(h) {
    return function(u) {
      return c([h, u]);
    };
  }
  function c(h) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (i = 1, s && (n = h[0] & 2 ? s.return : h[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, h[1])).done) return n;
      switch (s = 0, n && (h = [h[0] & 2, n.value]), h[0]) {
        case 0:
        case 1:
          n = h;
          break;
        case 4:
          return r.label++, { value: h[1], done: !1 };
        case 5:
          r.label++, s = h[1], h = [0];
          continue;
        case 7:
          h = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (n = r.trys, !(n = n.length > 0 && n[n.length - 1]) && (h[0] === 6 || h[0] === 2)) {
            r = 0;
            continue;
          }
          if (h[0] === 3 && (!n || h[1] > n[0] && h[1] < n[3])) {
            r.label = h[1];
            break;
          }
          if (h[0] === 6 && r.label < n[1]) {
            r.label = n[1], n = h;
            break;
          }
          if (n && r.label < n[2]) {
            r.label = n[2], r.ops.push(h);
            break;
          }
          n[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      h = e.call(t, r);
    } catch (u) {
      h = [6, u], s = 0;
    } finally {
      i = n = 0;
    }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function vg(t, e, r, i) {
  i === void 0 && (i = r), t[i] = e[r];
}
function Eg(t, e) {
  for (var r in t) r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function To(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], i = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Pl(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var i = r.call(t), s, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; ) n.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = i.return) && r.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return n;
}
function _g() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Pl(arguments[e]));
  return t;
}
function Ig() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var i = Array(t), s = 0, e = 0; e < r; e++)
    for (var n = arguments[e], o = 0, a = n.length; o < a; o++, s++)
      i[s] = n[o];
  return i;
}
function ss(t) {
  return this instanceof ss ? (this.v = t, this) : new ss(t);
}
function xg(t, e, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(t, e || []), s, n = [];
  return s = {}, o("next"), o("throw"), o("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(f) {
    i[f] && (s[f] = function(p) {
      return new Promise(function(d, g) {
        n.push([f, p, d, g]) > 1 || a(f, p);
      });
    });
  }
  function a(f, p) {
    try {
      c(i[f](p));
    } catch (d) {
      l(n[0][3], d);
    }
  }
  function c(f) {
    f.value instanceof ss ? Promise.resolve(f.value.v).then(h, u) : l(n[0][2], f);
  }
  function h(f) {
    a("next", f);
  }
  function u(f) {
    a("throw", f);
  }
  function l(f, p) {
    f(p), n.shift(), n.length && a(n[0][0], n[0][1]);
  }
}
function $g(t) {
  var e, r;
  return e = {}, i("next"), i("throw", function(s) {
    throw s;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(s, n) {
    e[s] = t[s] ? function(o) {
      return (r = !r) ? { value: ss(t[s](o)), done: s === "return" } : n ? n(o) : o;
    } : n;
  }
}
function Sg(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof To == "function" ? To(t) : t[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function i(n) {
    r[n] = t[n] && function(o) {
      return new Promise(function(a, c) {
        o = t[n](o), s(a, c, o.done, o.value);
      });
    };
  }
  function s(n, o, a, c) {
    Promise.resolve(c).then(function(h) {
      n({ value: h, done: a });
    }, o);
  }
}
function Dg(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Ag(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Og(t) {
  return t && t.__esModule ? t : { default: t };
}
function Pg(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function Cg(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const Tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Co;
  },
  __asyncDelegator: $g,
  __asyncGenerator: xg,
  __asyncValues: Sg,
  __await: ss,
  __awaiter: mg,
  __classPrivateFieldGet: Pg,
  __classPrivateFieldSet: Cg,
  __createBinding: vg,
  __decorate: gg,
  __exportStar: Eg,
  __extends: dg,
  __generator: bg,
  __importDefault: Og,
  __importStar: Ag,
  __makeTemplateObject: Dg,
  __metadata: wg,
  __param: yg,
  __read: Pl,
  __rest: pg,
  __spread: _g,
  __spreadArrays: Ig,
  __values: To
}, Symbol.toStringTag, { value: "Module" })), _n = /* @__PURE__ */ El(Tg);
var Hn = {}, Di = {}, $c;
function Rg() {
  if ($c) return Di;
  $c = 1, Object.defineProperty(Di, "__esModule", { value: !0 }), Di.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Di.delay = t, Di;
}
var mr = {}, Vn = {}, br = {}, Sc;
function Bg() {
  return Sc || (Sc = 1, Object.defineProperty(br, "__esModule", { value: !0 }), br.ONE_THOUSAND = br.ONE_HUNDRED = void 0, br.ONE_HUNDRED = 100, br.ONE_THOUSAND = 1e3), br;
}
var Kn = {}, Dc;
function Fg() {
  return Dc || (Dc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(Kn)), Kn;
}
var Ac;
function Cl() {
  return Ac || (Ac = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = _n;
    e.__exportStar(Bg(), t), e.__exportStar(Fg(), t);
  }(Vn)), Vn;
}
var Oc;
function Ng() {
  if (Oc) return mr;
  Oc = 1, Object.defineProperty(mr, "__esModule", { value: !0 }), mr.fromMiliseconds = mr.toMiliseconds = void 0;
  const t = Cl();
  function e(i) {
    return i * t.ONE_THOUSAND;
  }
  mr.toMiliseconds = e;
  function r(i) {
    return Math.floor(i / t.ONE_THOUSAND);
  }
  return mr.fromMiliseconds = r, mr;
}
var Pc;
function Ug() {
  return Pc || (Pc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = _n;
    e.__exportStar(Rg(), t), e.__exportStar(Ng(), t);
  }(Hn)), Hn;
}
var Hr = {}, Cc;
function kg() {
  if (Cc) return Hr;
  Cc = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.Watch = void 0;
  class t {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(r) {
      if (this.timestamps.has(r))
        throw new Error(`Watch already started for label: ${r}`);
      this.timestamps.set(r, { started: Date.now() });
    }
    stop(r) {
      const i = this.get(r);
      if (typeof i.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const s = Date.now() - i.started;
      this.timestamps.set(r, { started: i.started, elapsed: s });
    }
    get(r) {
      const i = this.timestamps.get(r);
      if (typeof i > "u")
        throw new Error(`No timestamp found for label: ${r}`);
      return i;
    }
    elapsed(r) {
      const i = this.get(r);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return Hr.Watch = t, Hr.default = t, Hr;
}
var Wn = {}, Ai = {}, Tc;
function Lg() {
  if (Tc) return Ai;
  Tc = 1, Object.defineProperty(Ai, "__esModule", { value: !0 }), Ai.IWatch = void 0;
  class t {
  }
  return Ai.IWatch = t, Ai;
}
var Rc;
function jg() {
  return Rc || (Rc = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), _n.__exportStar(Lg(), t);
  }(Wn)), Wn;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = _n;
  e.__exportStar(Ug(), t), e.__exportStar(kg(), t), e.__exportStar(jg(), t), e.__exportStar(Cl(), t);
})(L);
var ce = {};
Object.defineProperty(ce, "__esModule", { value: !0 });
ce.getLocalStorage = ce.getLocalStorageOrThrow = ce.getCrypto = ce.getCryptoOrThrow = Tl = ce.getLocation = ce.getLocationOrThrow = Ca = ce.getNavigator = ce.getNavigatorOrThrow = Tr = ce.getDocument = ce.getDocumentOrThrow = ce.getFromWindowOrThrow = ce.getFromWindow = void 0;
function Ur(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
ce.getFromWindow = Ur;
function mi(t) {
  const e = Ur(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
ce.getFromWindowOrThrow = mi;
function Mg() {
  return mi("document");
}
ce.getDocumentOrThrow = Mg;
function qg() {
  return Ur("document");
}
var Tr = ce.getDocument = qg;
function zg() {
  return mi("navigator");
}
ce.getNavigatorOrThrow = zg;
function Hg() {
  return Ur("navigator");
}
var Ca = ce.getNavigator = Hg;
function Vg() {
  return mi("location");
}
ce.getLocationOrThrow = Vg;
function Kg() {
  return Ur("location");
}
var Tl = ce.getLocation = Kg;
function Wg() {
  return mi("crypto");
}
ce.getCryptoOrThrow = Wg;
function Gg() {
  return Ur("crypto");
}
ce.getCrypto = Gg;
function Yg() {
  return mi("localStorage");
}
ce.getLocalStorageOrThrow = Yg;
function Jg() {
  return Ur("localStorage");
}
ce.getLocalStorage = Jg;
var Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
var Rl = Ta.getWindowMetadata = void 0;
const Bc = ce;
function Zg() {
  let t, e;
  try {
    t = Bc.getDocumentOrThrow(), e = Bc.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const l = t.getElementsByTagName("link"), f = [];
    for (let p = 0; p < l.length; p++) {
      const d = l[p], g = d.getAttribute("rel");
      if (g && g.toLowerCase().indexOf("icon") > -1) {
        const m = d.getAttribute("href");
        if (m)
          if (m.toLowerCase().indexOf("https:") === -1 && m.toLowerCase().indexOf("http:") === -1 && m.indexOf("//") !== 0) {
            let _ = e.protocol + "//" + e.host;
            if (m.indexOf("/") === 0)
              _ += m;
            else {
              const I = e.pathname.split("/");
              I.pop();
              const E = I.join("/");
              _ += E + "/" + m;
            }
            f.push(_);
          } else if (m.indexOf("//") === 0) {
            const _ = e.protocol + m;
            f.push(_);
          } else
            f.push(m);
      }
    }
    return f;
  }
  function i(...l) {
    const f = t.getElementsByTagName("meta");
    for (let p = 0; p < f.length; p++) {
      const d = f[p], g = ["itemprop", "property", "name"].map((m) => d.getAttribute(m)).filter((m) => m ? l.includes(m) : !1);
      if (g.length && g) {
        const m = d.getAttribute("content");
        if (m)
          return m;
      }
    }
    return "";
  }
  function s() {
    let l = i("name", "og:site_name", "og:title", "twitter:title");
    return l || (l = t.title), l;
  }
  function n() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const o = s(), a = n(), c = e.origin, h = r();
  return {
    description: a,
    url: c,
    icons: h,
    name: o
  };
}
Rl = Ta.getWindowMetadata = Zg;
function ns(t, { strict: e = !0 } = {}) {
  return !t || typeof t != "string" ? !1 : e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
}
function Ro(t) {
  return ns(t, { strict: !1 }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
const Bl = "2.31.0";
let Oi = {
  getDocsUrl: ({ docsBaseUrl: t, docsPath: e = "", docsSlug: r }) => e ? `${t ?? "https://viem.sh"}${e}${r ? `#${r}` : ""}` : void 0,
  version: `viem@${Bl}`
};
class Rr extends Error {
  constructor(e, r = {}) {
    var a;
    const i = (() => {
      var c;
      return r.cause instanceof Rr ? r.cause.details : (c = r.cause) != null && c.message ? r.cause.message : r.details;
    })(), s = r.cause instanceof Rr && r.cause.docsPath || r.docsPath, n = (a = Oi.getDocsUrl) == null ? void 0 : a.call(Oi, { ...r, docsPath: s }), o = [
      e || "An error occurred.",
      "",
      ...r.metaMessages ? [...r.metaMessages, ""] : [],
      ...n ? [`Docs: ${n}`] : [],
      ...i ? [`Details: ${i}`] : [],
      ...Oi.version ? [`Version: ${Oi.version}`] : []
    ].join(`
`);
    super(o, r.cause ? { cause: r.cause } : void 0), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseError"
    }), this.details = i, this.docsPath = s, this.metaMessages = r.metaMessages, this.name = r.name ?? this.name, this.shortMessage = e, this.version = Bl;
  }
  walk(e) {
    return Fl(this, e);
  }
}
function Fl(t, e) {
  return e != null && e(t) ? t : t && typeof t == "object" && "cause" in t && t.cause !== void 0 ? Fl(t.cause, e) : e ? null : t;
}
class Nl extends Rr {
  constructor({ size: e, targetSize: r, type: i }) {
    super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`, { name: "SizeExceedsPaddingSizeError" });
  }
}
function bi(t, { dir: e, size: r = 32 } = {}) {
  return typeof t == "string" ? Qg(t, { dir: e, size: r }) : Xg(t, { dir: e, size: r });
}
function Qg(t, { dir: e, size: r = 32 } = {}) {
  if (r === null)
    return t;
  const i = t.replace("0x", "");
  if (i.length > r * 2)
    throw new Nl({
      size: Math.ceil(i.length / 2),
      targetSize: r,
      type: "hex"
    });
  return `0x${i[e === "right" ? "padEnd" : "padStart"](r * 2, "0")}`;
}
function Xg(t, { dir: e, size: r = 32 } = {}) {
  if (r === null)
    return t;
  if (t.length > r)
    throw new Nl({
      size: t.length,
      targetSize: r,
      type: "bytes"
    });
  const i = new Uint8Array(r);
  for (let s = 0; s < r; s++) {
    const n = e === "right";
    i[n ? s : r - s - 1] = t[n ? s : t.length - s - 1];
  }
  return i;
}
class ey extends Rr {
  constructor({ max: e, min: r, signed: i, size: s, value: n }) {
    super(`Number "${n}" is not in safe ${s ? `${s * 8}-bit ${i ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${r} to ${e})` : `(above ${r})`}`, { name: "IntegerOutOfRangeError" });
  }
}
class ty extends Rr {
  constructor({ givenSize: e, maxSize: r }) {
    super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`, { name: "SizeOverflowError" });
  }
}
function vi(t, { size: e }) {
  if (Ro(t) > e)
    throw new ty({
      givenSize: Ro(t),
      maxSize: e
    });
}
function Bo(t, e = {}) {
  const { signed: r } = e;
  e.size && vi(t, { size: e.size });
  const i = BigInt(t);
  if (!r)
    return i;
  const s = (t.length - 2) / 2, n = (1n << BigInt(s) * 8n - 1n) - 1n;
  return i <= n ? i : i - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function ry(t, e = {}) {
  return Number(Bo(t, e));
}
const iy = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Fo(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? kl(t, e) : typeof t == "string" ? oy(t, e) : typeof t == "boolean" ? sy(t, e) : Ul(t, e);
}
function sy(t, e = {}) {
  const r = `0x${Number(t)}`;
  return typeof e.size == "number" ? (vi(r, { size: e.size }), bi(r, { size: e.size })) : r;
}
function Ul(t, e = {}) {
  let r = "";
  for (let s = 0; s < t.length; s++)
    r += iy[t[s]];
  const i = `0x${r}`;
  return typeof e.size == "number" ? (vi(i, { size: e.size }), bi(i, { dir: "right", size: e.size })) : i;
}
function kl(t, e = {}) {
  const { signed: r, size: i } = e, s = BigInt(t);
  let n;
  i ? r ? n = (1n << BigInt(i) * 8n - 1n) - 1n : n = 2n ** (BigInt(i) * 8n) - 1n : typeof t == "number" && (n = BigInt(Number.MAX_SAFE_INTEGER));
  const o = typeof n == "bigint" && r ? -n - 1n : 0;
  if (n && s > n || s < o) {
    const c = typeof t == "bigint" ? "n" : "";
    throw new ey({
      max: n ? `${n}${c}` : void 0,
      min: `${o}${c}`,
      signed: r,
      size: i,
      value: `${t}${c}`
    });
  }
  const a = `0x${(r && s < 0 ? (1n << BigInt(i * 8)) + BigInt(s) : s).toString(16)}`;
  return i ? bi(a, { size: i }) : a;
}
const ny = /* @__PURE__ */ new TextEncoder();
function oy(t, e = {}) {
  const r = ny.encode(t);
  return Ul(r, e);
}
const ay = /* @__PURE__ */ new TextEncoder();
function cy(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? uy(t, e) : typeof t == "boolean" ? hy(t, e) : ns(t) ? Ll(t, e) : jl(t, e);
}
function hy(t, e = {}) {
  const r = new Uint8Array(1);
  return r[0] = Number(t), typeof e.size == "number" ? (vi(r, { size: e.size }), bi(r, { size: e.size })) : r;
}
const Ut = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function Fc(t) {
  if (t >= Ut.zero && t <= Ut.nine)
    return t - Ut.zero;
  if (t >= Ut.A && t <= Ut.F)
    return t - (Ut.A - 10);
  if (t >= Ut.a && t <= Ut.f)
    return t - (Ut.a - 10);
}
function Ll(t, e = {}) {
  let r = t;
  e.size && (vi(r, { size: e.size }), r = bi(r, { dir: "right", size: e.size }));
  let i = r.slice(2);
  i.length % 2 && (i = `0${i}`);
  const s = i.length / 2, n = new Uint8Array(s);
  for (let o = 0, a = 0; o < s; o++) {
    const c = Fc(i.charCodeAt(a++)), h = Fc(i.charCodeAt(a++));
    if (c === void 0 || h === void 0)
      throw new Rr(`Invalid byte sequence ("${i[a - 2]}${i[a - 1]}" in "${i}").`);
    n[o] = c * 16 + h;
  }
  return n;
}
function uy(t, e) {
  const r = kl(t, e);
  return Ll(r);
}
function jl(t, e = {}) {
  const r = ay.encode(t);
  return typeof e.size == "number" ? (vi(r, { size: e.size }), bi(r, { dir: "right", size: e.size })) : r;
}
const Ss = /* @__PURE__ */ BigInt(2 ** 32 - 1), Nc = /* @__PURE__ */ BigInt(32);
function ly(t, e = !1) {
  return e ? { h: Number(t & Ss), l: Number(t >> Nc & Ss) } : { h: Number(t >> Nc & Ss) | 0, l: Number(t & Ss) | 0 };
}
function fy(t, e = !1) {
  const r = t.length;
  let i = new Uint32Array(r), s = new Uint32Array(r);
  for (let n = 0; n < r; n++) {
    const { h: o, l: a } = ly(t[n], e);
    [i[n], s[n]] = [o, a];
  }
  return [i, s];
}
const dy = (t, e, r) => t << r | e >>> 32 - r, py = (t, e, r) => e << r | t >>> 32 - r, gy = (t, e, r) => e << r - 32 | t >>> 64 - r, yy = (t, e, r) => t << r - 32 | e >>> 64 - r, Vr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function wy(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function nn(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error("positive integer expected, got " + t);
}
function os(t, ...e) {
  if (!wy(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function OO(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  nn(t.outputLen), nn(t.blockLen);
}
function Uc(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function my(t, e) {
  os(t);
  const r = e.outputLen;
  if (t.length < r)
    throw new Error("digestInto() expects output buffer of length at least " + r);
}
function by(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Ml(...t) {
  for (let e = 0; e < t.length; e++)
    t[e].fill(0);
}
function PO(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function CO(t, e) {
  return t << 32 - e | t >>> e;
}
const vy = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Ey(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
function _y(t) {
  for (let e = 0; e < t.length; e++)
    t[e] = Ey(t[e]);
  return t;
}
const kc = vy ? (t) => t : _y;
function Iy(t) {
  if (typeof t != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function ql(t) {
  return typeof t == "string" && (t = Iy(t)), os(t), t;
}
function TO(...t) {
  let e = 0;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    os(s), e += s.length;
  }
  const r = new Uint8Array(e);
  for (let i = 0, s = 0; i < t.length; i++) {
    const n = t[i];
    r.set(n, s), s += n.length;
  }
  return r;
}
class xy {
}
function $y(t) {
  const e = (i) => t().update(ql(i)).digest(), r = t();
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e;
}
function RO(t = 32) {
  if (Vr && typeof Vr.getRandomValues == "function")
    return Vr.getRandomValues(new Uint8Array(t));
  if (Vr && typeof Vr.randomBytes == "function")
    return Uint8Array.from(Vr.randomBytes(t));
  throw new Error("crypto.getRandomValues must be defined");
}
const Sy = BigInt(0), Pi = BigInt(1), Dy = BigInt(2), Ay = BigInt(7), Oy = BigInt(256), Py = BigInt(113), zl = [], Hl = [], Vl = [];
for (let t = 0, e = Pi, r = 1, i = 0; t < 24; t++) {
  [r, i] = [i, (2 * r + 3 * i) % 5], zl.push(2 * (5 * i + r)), Hl.push((t + 1) * (t + 2) / 2 % 64);
  let s = Sy;
  for (let n = 0; n < 7; n++)
    e = (e << Pi ^ (e >> Ay) * Py) % Oy, e & Dy && (s ^= Pi << (Pi << /* @__PURE__ */ BigInt(n)) - Pi);
  Vl.push(s);
}
const Kl = fy(Vl, !0), Cy = Kl[0], Ty = Kl[1], Lc = (t, e, r) => r > 32 ? gy(t, e, r) : dy(t, e, r), jc = (t, e, r) => r > 32 ? yy(t, e, r) : py(t, e, r);
function Ry(t, e = 24) {
  const r = new Uint32Array(10);
  for (let i = 24 - e; i < 24; i++) {
    for (let o = 0; o < 10; o++)
      r[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, h = r[c], u = r[c + 1], l = Lc(h, u, 1) ^ r[a], f = jc(h, u, 1) ^ r[a + 1];
      for (let p = 0; p < 50; p += 10)
        t[o + p] ^= l, t[o + p + 1] ^= f;
    }
    let s = t[2], n = t[3];
    for (let o = 0; o < 24; o++) {
      const a = Hl[o], c = Lc(s, n, a), h = jc(s, n, a), u = zl[o];
      s = t[u], n = t[u + 1], t[u] = c, t[u + 1] = h;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        r[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
    }
    t[0] ^= Cy[i], t[1] ^= Ty[i];
  }
  Ml(r);
}
class Ra extends xy {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, r, i, s = !1, n = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = e, this.suffix = r, this.outputLen = i, this.enableXOF = s, this.rounds = n, nn(i), !(0 < e && e < 200))
      throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = by(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    kc(this.state32), Ry(this.state32, this.rounds), kc(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Uc(this), e = ql(e), os(e);
    const { blockLen: r, state: i } = this, s = e.length;
    for (let n = 0; n < s; ) {
      const o = Math.min(r - this.pos, s - n);
      for (let a = 0; a < o; a++)
        i[this.pos++] ^= e[n++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: r, pos: i, blockLen: s } = this;
    e[i] ^= r, r & 128 && i === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Uc(this, !1), os(e), this.finish();
    const r = this.state, { blockLen: i } = this;
    for (let s = 0, n = e.length; s < n; ) {
      this.posOut >= i && this.keccak();
      const o = Math.min(i - this.posOut, n - s);
      e.set(r.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return nn(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (my(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, Ml(this.state);
  }
  _cloneInto(e) {
    const { blockLen: r, suffix: i, outputLen: s, rounds: n, enableXOF: o } = this;
    return e || (e = new Ra(r, i, s, o, n)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = n, e.suffix = i, e.outputLen = s, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
const By = (t, e, r) => $y(() => new Ra(e, t, r)), Fy = By(1, 136, 256 / 8);
function Wl(t, e) {
  const r = e || "hex", i = Fy(ns(t, { strict: !1 }) ? cy(t) : t);
  return r === "bytes" ? i : Fo(i);
}
class Ny extends Map {
  constructor(e) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = e;
  }
  get(e) {
    const r = super.get(e);
    return super.has(e) && r !== void 0 && (this.delete(e), super.set(e, r)), r;
  }
  set(e, r) {
    if (super.set(e, r), this.maxSize && this.size > this.maxSize) {
      const i = this.keys().next().value;
      i && this.delete(i);
    }
    return this;
  }
}
const Gn = /* @__PURE__ */ new Ny(8192);
function Uy(t, e) {
  if (Gn.has(`${t}.${e}`))
    return Gn.get(`${t}.${e}`);
  const r = t.substring(2).toLowerCase(), i = Wl(jl(r), "bytes"), s = r.split("");
  for (let o = 0; o < 40; o += 2)
    i[o >> 1] >> 4 >= 8 && s[o] && (s[o] = s[o].toUpperCase()), (i[o >> 1] & 15) >= 8 && s[o + 1] && (s[o + 1] = s[o + 1].toUpperCase());
  const n = `0x${s.join("")}`;
  return Gn.set(`${t}.${e}`, n), n;
}
function ky(t) {
  const e = Wl(`0x${t.substring(4)}`).substring(26);
  return Uy(`0x${e}`);
}
async function Ly({ hash: t, signature: e }) {
  const r = ns(t) ? t : Fo(t), { secp256k1: i } = await import("./secp256k1-DA3kncZk.js");
  return `0x${(() => {
    if (typeof e == "object" && "r" in e && "s" in e) {
      const { r: h, s: u, v: l, yParity: f } = e, p = Number(f ?? l), d = Mc(p);
      return new i.Signature(Bo(h), Bo(u)).addRecoveryBit(d);
    }
    const o = ns(e) ? e : Fo(e);
    if (Ro(o) !== 65)
      throw new Error("invalid signature length");
    const a = ry(`0x${o.slice(130)}`), c = Mc(a);
    return i.Signature.fromCompact(o.substring(2, 130)).addRecoveryBit(c);
  })().recoverPublicKey(r.substring(2)).toHex(!1)}`;
}
function Mc(t) {
  if (t === 0 || t === 1)
    return t;
  if (t === 27)
    return 0;
  if (t === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function jy({ hash: t, signature: e }) {
  return ky(await Ly({ hash: t, signature: e }));
}
function My(t) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  const e = new Uint8Array(256);
  for (let h = 0; h < e.length; h++)
    e[h] = 255;
  for (let h = 0; h < t.length; h++) {
    const u = t.charAt(h), l = u.charCodeAt(0);
    if (e[l] !== 255)
      throw new TypeError(u + " is ambiguous");
    e[l] = h;
  }
  const r = t.length, i = t.charAt(0), s = Math.log(r) / Math.log(256), n = Math.log(256) / Math.log(r);
  function o(h) {
    if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (h.length === 0)
      return "";
    let u = 0, l = 0, f = 0;
    const p = h.length;
    for (; f !== p && h[f] === 0; )
      f++, u++;
    const d = (p - f) * n + 1 >>> 0, g = new Uint8Array(d);
    for (; f !== p; ) {
      let I = h[f], E = 0;
      for (let P = d - 1; (I !== 0 || E < l) && P !== -1; P--, E++)
        I += 256 * g[P] >>> 0, g[P] = I % r >>> 0, I = I / r >>> 0;
      if (I !== 0)
        throw new Error("Non-zero carry");
      l = E, f++;
    }
    let m = d - l;
    for (; m !== d && g[m] === 0; )
      m++;
    let _ = i.repeat(u);
    for (; m < d; ++m)
      _ += t.charAt(g[m]);
    return _;
  }
  function a(h) {
    if (typeof h != "string")
      throw new TypeError("Expected String");
    if (h.length === 0)
      return new Uint8Array();
    let u = 0, l = 0, f = 0;
    for (; h[u] === i; )
      l++, u++;
    const p = (h.length - u) * s + 1 >>> 0, d = new Uint8Array(p);
    for (; u < h.length; ) {
      const I = h.charCodeAt(u);
      if (I > 255)
        return;
      let E = e[I];
      if (E === 255)
        return;
      let P = 0;
      for (let A = p - 1; (E !== 0 || P < f) && A !== -1; A--, P++)
        E += r * d[A] >>> 0, d[A] = E % 256 >>> 0, E = E / 256 >>> 0;
      if (E !== 0)
        throw new Error("Non-zero carry");
      f = P, u++;
    }
    let g = p - f;
    for (; g !== p && d[g] === 0; )
      g++;
    const m = new Uint8Array(l + (p - g));
    let _ = l;
    for (; g !== p; )
      m[_++] = d[g++];
    return m;
  }
  function c(h) {
    const u = a(h);
    if (u)
      return u;
    throw new Error("Non-base" + r + " character");
  }
  return {
    encode: o,
    decodeUnsafe: a,
    decode: c
  };
}
var qy = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const ps = My(qy);
function zy(t) {
  const e = t.length;
  let r = 0, i = 0;
  for (; i < e; ) {
    let s = t.charCodeAt(i++);
    if (s & 4294967168)
      if (!(s & 4294965248))
        r += 2;
      else {
        if (s >= 55296 && s <= 56319 && i < e) {
          const n = t.charCodeAt(i);
          (n & 64512) === 56320 && (++i, s = ((s & 1023) << 10) + (n & 1023) + 65536);
        }
        s & 4294901760 ? r += 4 : r += 3;
      }
    else {
      r++;
      continue;
    }
  }
  return r;
}
function Hy(t, e, r) {
  const i = t.length;
  let s = r, n = 0;
  for (; n < i; ) {
    let o = t.charCodeAt(n++);
    if (o & 4294967168)
      if (!(o & 4294965248))
        e[s++] = o >> 6 & 31 | 192;
      else {
        if (o >= 55296 && o <= 56319 && n < i) {
          const a = t.charCodeAt(n);
          (a & 64512) === 56320 && (++n, o = ((o & 1023) << 10) + (a & 1023) + 65536);
        }
        o & 4294901760 ? (e[s++] = o >> 18 & 7 | 240, e[s++] = o >> 12 & 63 | 128, e[s++] = o >> 6 & 63 | 128) : (e[s++] = o >> 12 & 15 | 224, e[s++] = o >> 6 & 63 | 128);
      }
    else {
      e[s++] = o;
      continue;
    }
    e[s++] = o & 63 | 128;
  }
}
const Vy = new TextEncoder(), Ky = 50;
function Wy(t, e, r) {
  Vy.encodeInto(t, e.subarray(r));
}
function Gy(t, e, r) {
  t.length > Ky ? Wy(t, e, r) : Hy(t, e, r);
}
const Yy = 4096;
function Gl(t, e, r) {
  let i = e;
  const s = i + r, n = [];
  let o = "";
  for (; i < s; ) {
    const a = t[i++];
    if (!(a & 128))
      n.push(a);
    else if ((a & 224) === 192) {
      const c = t[i++] & 63;
      n.push((a & 31) << 6 | c);
    } else if ((a & 240) === 224) {
      const c = t[i++] & 63, h = t[i++] & 63;
      n.push((a & 31) << 12 | c << 6 | h);
    } else if ((a & 248) === 240) {
      const c = t[i++] & 63, h = t[i++] & 63, u = t[i++] & 63;
      let l = (a & 7) << 18 | c << 12 | h << 6 | u;
      l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | l & 1023), n.push(l);
    } else
      n.push(a);
    n.length >= Yy && (o += String.fromCharCode(...n), n.length = 0);
  }
  return n.length > 0 && (o += String.fromCharCode(...n)), o;
}
const Jy = new TextDecoder(), Zy = 200;
function Qy(t, e, r) {
  const i = t.subarray(e, e + r);
  return Jy.decode(i);
}
function Xy(t, e, r) {
  return r > Zy ? Qy(t, e, r) : Gl(t, e, r);
}
class Ds {
  constructor(e, r) {
    this.type = e, this.data = r;
  }
}
class tt extends Error {
  constructor(e) {
    super(e);
    const r = Object.create(tt.prototype);
    Object.setPrototypeOf(this, r), Object.defineProperty(this, "name", {
      configurable: !0,
      enumerable: !1,
      value: tt.name
    });
  }
}
const Ci = 4294967295;
function ew(t, e, r) {
  const i = r / 4294967296, s = r;
  t.setUint32(e, i), t.setUint32(e + 4, s);
}
function Yl(t, e, r) {
  const i = Math.floor(r / 4294967296), s = r;
  t.setUint32(e, i), t.setUint32(e + 4, s);
}
function Jl(t, e) {
  const r = t.getInt32(e), i = t.getUint32(e + 4);
  return r * 4294967296 + i;
}
function tw(t, e) {
  const r = t.getUint32(e), i = t.getUint32(e + 4);
  return r * 4294967296 + i;
}
const rw = -1, iw = 4294967296 - 1, sw = 17179869184 - 1;
function nw({ sec: t, nsec: e }) {
  if (t >= 0 && e >= 0 && t <= sw)
    if (e === 0 && t <= iw) {
      const r = new Uint8Array(4);
      return new DataView(r.buffer).setUint32(0, t), r;
    } else {
      const r = t / 4294967296, i = t & 4294967295, s = new Uint8Array(8), n = new DataView(s.buffer);
      return n.setUint32(0, e << 2 | r & 3), n.setUint32(4, i), s;
    }
  else {
    const r = new Uint8Array(12), i = new DataView(r.buffer);
    return i.setUint32(0, e), Yl(i, 4, t), r;
  }
}
function ow(t) {
  const e = t.getTime(), r = Math.floor(e / 1e3), i = (e - r * 1e3) * 1e6, s = Math.floor(i / 1e9);
  return {
    sec: r + s,
    nsec: i - s * 1e9
  };
}
function aw(t) {
  if (t instanceof Date) {
    const e = ow(t);
    return nw(e);
  } else
    return null;
}
function cw(t) {
  const e = new DataView(t.buffer, t.byteOffset, t.byteLength);
  switch (t.byteLength) {
    case 4:
      return { sec: e.getUint32(0), nsec: 0 };
    case 8: {
      const r = e.getUint32(0), i = e.getUint32(4), s = (r & 3) * 4294967296 + i, n = r >>> 2;
      return { sec: s, nsec: n };
    }
    case 12: {
      const r = Jl(e, 4), i = e.getUint32(0);
      return { sec: r, nsec: i };
    }
    default:
      throw new tt(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${t.length}`);
  }
}
function hw(t) {
  const e = cw(t);
  return new Date(e.sec * 1e3 + e.nsec / 1e6);
}
const uw = {
  type: rw,
  encode: aw,
  decode: hw
};
class on {
  constructor() {
    this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(uw);
  }
  register({ type: e, encode: r, decode: i }) {
    if (e >= 0)
      this.encoders[e] = r, this.decoders[e] = i;
    else {
      const s = -1 - e;
      this.builtInEncoders[s] = r, this.builtInDecoders[s] = i;
    }
  }
  tryToEncode(e, r) {
    for (let i = 0; i < this.builtInEncoders.length; i++) {
      const s = this.builtInEncoders[i];
      if (s != null) {
        const n = s(e, r);
        if (n != null) {
          const o = -1 - i;
          return new Ds(o, n);
        }
      }
    }
    for (let i = 0; i < this.encoders.length; i++) {
      const s = this.encoders[i];
      if (s != null) {
        const n = s(e, r);
        if (n != null) {
          const o = i;
          return new Ds(o, n);
        }
      }
    }
    return e instanceof Ds ? e : null;
  }
  decode(e, r, i) {
    const s = r < 0 ? this.builtInDecoders[-1 - r] : this.decoders[r];
    return s ? s(e, r, i) : new Ds(r, e);
  }
}
on.defaultCodec = new on();
function lw(t) {
  return t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer;
}
function No(t) {
  return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : lw(t) ? new Uint8Array(t) : Uint8Array.from(t);
}
const fw = 100, dw = 2048;
let pw = class Zl {
  constructor(e) {
    this.entered = !1, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? on.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? !1, this.maxDepth = (e == null ? void 0 : e.maxDepth) ?? fw, this.initialBufferSize = (e == null ? void 0 : e.initialBufferSize) ?? dw, this.sortKeys = (e == null ? void 0 : e.sortKeys) ?? !1, this.forceFloat32 = (e == null ? void 0 : e.forceFloat32) ?? !1, this.ignoreUndefined = (e == null ? void 0 : e.ignoreUndefined) ?? !1, this.forceIntegerToFloat = (e == null ? void 0 : e.forceIntegerToFloat) ?? !1, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
  }
  clone() {
    return new Zl({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      maxDepth: this.maxDepth,
      initialBufferSize: this.initialBufferSize,
      sortKeys: this.sortKeys,
      forceFloat32: this.forceFloat32,
      ignoreUndefined: this.ignoreUndefined,
      forceIntegerToFloat: this.forceIntegerToFloat
    });
  }
  reinitializeState() {
    this.pos = 0;
  }
  /**
   * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
   *
   * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
   */
  encodeSharedRef(e) {
    if (this.entered)
      return this.clone().encodeSharedRef(e);
    try {
      return this.entered = !0, this.reinitializeState(), this.doEncode(e, 1), this.bytes.subarray(0, this.pos);
    } finally {
      this.entered = !1;
    }
  }
  /**
   * @returns Encodes the object and returns a copy of the encoder's internal buffer.
   */
  encode(e) {
    if (this.entered)
      return this.clone().encode(e);
    try {
      return this.entered = !0, this.reinitializeState(), this.doEncode(e, 1), this.bytes.slice(0, this.pos);
    } finally {
      this.entered = !1;
    }
  }
  doEncode(e, r) {
    if (r > this.maxDepth)
      throw new Error(`Too deep objects in depth ${r}`);
    e == null ? this.encodeNil() : typeof e == "boolean" ? this.encodeBoolean(e) : typeof e == "number" ? this.forceIntegerToFloat ? this.encodeNumberAsFloat(e) : this.encodeNumber(e) : typeof e == "string" ? this.encodeString(e) : this.useBigInt64 && typeof e == "bigint" ? this.encodeBigInt64(e) : this.encodeObject(e, r);
  }
  ensureBufferSizeToWrite(e) {
    const r = this.pos + e;
    this.view.byteLength < r && this.resizeBuffer(r * 2);
  }
  resizeBuffer(e) {
    const r = new ArrayBuffer(e), i = new Uint8Array(r), s = new DataView(r);
    i.set(this.bytes), this.view = s, this.bytes = i;
  }
  encodeNil() {
    this.writeU8(192);
  }
  encodeBoolean(e) {
    e === !1 ? this.writeU8(194) : this.writeU8(195);
  }
  encodeNumber(e) {
    !this.forceIntegerToFloat && Number.isSafeInteger(e) ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204), this.writeU8(e)) : e < 65536 ? (this.writeU8(205), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206), this.writeU32(e)) : this.useBigInt64 ? this.encodeNumberAsFloat(e) : (this.writeU8(207), this.writeU64(e)) : e >= -32 ? this.writeU8(224 | e + 32) : e >= -128 ? (this.writeU8(208), this.writeI8(e)) : e >= -32768 ? (this.writeU8(209), this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(210), this.writeI32(e)) : this.useBigInt64 ? this.encodeNumberAsFloat(e) : (this.writeU8(211), this.writeI64(e)) : this.encodeNumberAsFloat(e);
  }
  encodeNumberAsFloat(e) {
    this.forceFloat32 ? (this.writeU8(202), this.writeF32(e)) : (this.writeU8(203), this.writeF64(e));
  }
  encodeBigInt64(e) {
    e >= BigInt(0) ? (this.writeU8(207), this.writeBigUint64(e)) : (this.writeU8(211), this.writeBigInt64(e));
  }
  writeStringHeader(e) {
    if (e < 32)
      this.writeU8(160 + e);
    else if (e < 256)
      this.writeU8(217), this.writeU8(e);
    else if (e < 65536)
      this.writeU8(218), this.writeU16(e);
    else if (e < 4294967296)
      this.writeU8(219), this.writeU32(e);
    else
      throw new Error(`Too long string: ${e} bytes in UTF-8`);
  }
  encodeString(e) {
    const i = zy(e);
    this.ensureBufferSizeToWrite(5 + i), this.writeStringHeader(i), Gy(e, this.bytes, this.pos), this.pos += i;
  }
  encodeObject(e, r) {
    const i = this.extensionCodec.tryToEncode(e, this.context);
    if (i != null)
      this.encodeExtension(i);
    else if (Array.isArray(e))
      this.encodeArray(e, r);
    else if (ArrayBuffer.isView(e))
      this.encodeBinary(e);
    else if (typeof e == "object")
      this.encodeMap(e, r);
    else
      throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
  }
  encodeBinary(e) {
    const r = e.byteLength;
    if (r < 256)
      this.writeU8(196), this.writeU8(r);
    else if (r < 65536)
      this.writeU8(197), this.writeU16(r);
    else if (r < 4294967296)
      this.writeU8(198), this.writeU32(r);
    else
      throw new Error(`Too large binary: ${r}`);
    const i = No(e);
    this.writeU8a(i);
  }
  encodeArray(e, r) {
    const i = e.length;
    if (i < 16)
      this.writeU8(144 + i);
    else if (i < 65536)
      this.writeU8(220), this.writeU16(i);
    else if (i < 4294967296)
      this.writeU8(221), this.writeU32(i);
    else
      throw new Error(`Too large array: ${i}`);
    for (const s of e)
      this.doEncode(s, r + 1);
  }
  countWithoutUndefined(e, r) {
    let i = 0;
    for (const s of r)
      e[s] !== void 0 && i++;
    return i;
  }
  encodeMap(e, r) {
    const i = Object.keys(e);
    this.sortKeys && i.sort();
    const s = this.ignoreUndefined ? this.countWithoutUndefined(e, i) : i.length;
    if (s < 16)
      this.writeU8(128 + s);
    else if (s < 65536)
      this.writeU8(222), this.writeU16(s);
    else if (s < 4294967296)
      this.writeU8(223), this.writeU32(s);
    else
      throw new Error(`Too large map object: ${s}`);
    for (const n of i) {
      const o = e[n];
      this.ignoreUndefined && o === void 0 || (this.encodeString(n), this.doEncode(o, r + 1));
    }
  }
  encodeExtension(e) {
    if (typeof e.data == "function") {
      const i = e.data(this.pos + 6), s = i.length;
      if (s >= 4294967296)
        throw new Error(`Too large extension object: ${s}`);
      this.writeU8(201), this.writeU32(s), this.writeI8(e.type), this.writeU8a(i);
      return;
    }
    const r = e.data.length;
    if (r === 1)
      this.writeU8(212);
    else if (r === 2)
      this.writeU8(213);
    else if (r === 4)
      this.writeU8(214);
    else if (r === 8)
      this.writeU8(215);
    else if (r === 16)
      this.writeU8(216);
    else if (r < 256)
      this.writeU8(199), this.writeU8(r);
    else if (r < 65536)
      this.writeU8(200), this.writeU16(r);
    else if (r < 4294967296)
      this.writeU8(201), this.writeU32(r);
    else
      throw new Error(`Too large extension object: ${r}`);
    this.writeI8(e.type), this.writeU8a(e.data);
  }
  writeU8(e) {
    this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e), this.pos++;
  }
  writeU8a(e) {
    const r = e.length;
    this.ensureBufferSizeToWrite(r), this.bytes.set(e, this.pos), this.pos += r;
  }
  writeI8(e) {
    this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
  }
  writeU16(e) {
    this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e), this.pos += 2;
  }
  writeI16(e) {
    this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e), this.pos += 2;
  }
  writeU32(e) {
    this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e), this.pos += 4;
  }
  writeI32(e) {
    this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e), this.pos += 4;
  }
  writeF32(e) {
    this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e), this.pos += 4;
  }
  writeF64(e) {
    this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e), this.pos += 8;
  }
  writeU64(e) {
    this.ensureBufferSizeToWrite(8), ew(this.view, this.pos, e), this.pos += 8;
  }
  writeI64(e) {
    this.ensureBufferSizeToWrite(8), Yl(this.view, this.pos, e), this.pos += 8;
  }
  writeBigUint64(e) {
    this.ensureBufferSizeToWrite(8), this.view.setBigUint64(this.pos, e), this.pos += 8;
  }
  writeBigInt64(e) {
    this.ensureBufferSizeToWrite(8), this.view.setBigInt64(this.pos, e), this.pos += 8;
  }
};
function gw(t, e) {
  return new pw(e).encodeSharedRef(t);
}
function Yn(t) {
  return `${t < 0 ? "-" : ""}0x${Math.abs(t).toString(16).padStart(2, "0")}`;
}
const yw = 16, ww = 16;
class mw {
  constructor(e = yw, r = ww) {
    this.hit = 0, this.miss = 0, this.maxKeyLength = e, this.maxLengthPerKey = r, this.caches = [];
    for (let i = 0; i < this.maxKeyLength; i++)
      this.caches.push([]);
  }
  canBeCached(e) {
    return e > 0 && e <= this.maxKeyLength;
  }
  find(e, r, i) {
    const s = this.caches[i - 1];
    e: for (const n of s) {
      const o = n.bytes;
      for (let a = 0; a < i; a++)
        if (o[a] !== e[r + a])
          continue e;
      return n.str;
    }
    return null;
  }
  store(e, r) {
    const i = this.caches[e.length - 1], s = { bytes: e, str: r };
    i.length >= this.maxLengthPerKey ? i[Math.random() * i.length | 0] = s : i.push(s);
  }
  decode(e, r, i) {
    const s = this.find(e, r, i);
    if (s != null)
      return this.hit++, s;
    this.miss++;
    const n = Gl(e, r, i), o = Uint8Array.prototype.slice.call(e, r, r + i);
    return this.store(o, n), n;
  }
}
const Uo = "array", Yi = "map_key", Ql = "map_value", bw = (t) => {
  if (typeof t == "string" || typeof t == "number")
    return t;
  throw new tt("The type of key must be string or number but " + typeof t);
};
class vw {
  constructor() {
    this.stack = [], this.stackHeadPosition = -1;
  }
  get length() {
    return this.stackHeadPosition + 1;
  }
  top() {
    return this.stack[this.stackHeadPosition];
  }
  pushArrayState(e) {
    const r = this.getUninitializedStateFromPool();
    r.type = Uo, r.position = 0, r.size = e, r.array = new Array(e);
  }
  pushMapState(e) {
    const r = this.getUninitializedStateFromPool();
    r.type = Yi, r.readCount = 0, r.size = e, r.map = {};
  }
  getUninitializedStateFromPool() {
    if (this.stackHeadPosition++, this.stackHeadPosition === this.stack.length) {
      const e = {
        type: void 0,
        size: 0,
        array: void 0,
        position: 0,
        readCount: 0,
        map: void 0,
        key: null
      };
      this.stack.push(e);
    }
    return this.stack[this.stackHeadPosition];
  }
  release(e) {
    if (this.stack[this.stackHeadPosition] !== e)
      throw new Error("Invalid stack state. Released state is not on top of the stack.");
    if (e.type === Uo) {
      const i = e;
      i.size = 0, i.array = void 0, i.position = 0, i.type = void 0;
    }
    if (e.type === Yi || e.type === Ql) {
      const i = e;
      i.size = 0, i.map = void 0, i.readCount = 0, i.type = void 0;
    }
    this.stackHeadPosition--;
  }
  reset() {
    this.stack.length = 0, this.stackHeadPosition = -1;
  }
}
const Ti = -1, Ba = new DataView(new ArrayBuffer(0)), Ew = new Uint8Array(Ba.buffer);
try {
  Ba.getInt8(0);
} catch (t) {
  if (!(t instanceof RangeError))
    throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
}
const qc = new RangeError("Insufficient data"), _w = new mw();
let Iw = class Xl {
  constructor(e) {
    this.totalPos = 0, this.pos = 0, this.view = Ba, this.bytes = Ew, this.headByte = Ti, this.stack = new vw(), this.entered = !1, this.extensionCodec = (e == null ? void 0 : e.extensionCodec) ?? on.defaultCodec, this.context = e == null ? void 0 : e.context, this.useBigInt64 = (e == null ? void 0 : e.useBigInt64) ?? !1, this.rawStrings = (e == null ? void 0 : e.rawStrings) ?? !1, this.maxStrLength = (e == null ? void 0 : e.maxStrLength) ?? Ci, this.maxBinLength = (e == null ? void 0 : e.maxBinLength) ?? Ci, this.maxArrayLength = (e == null ? void 0 : e.maxArrayLength) ?? Ci, this.maxMapLength = (e == null ? void 0 : e.maxMapLength) ?? Ci, this.maxExtLength = (e == null ? void 0 : e.maxExtLength) ?? Ci, this.keyDecoder = (e == null ? void 0 : e.keyDecoder) !== void 0 ? e.keyDecoder : _w, this.mapKeyConverter = (e == null ? void 0 : e.mapKeyConverter) ?? bw;
  }
  clone() {
    return new Xl({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      rawStrings: this.rawStrings,
      maxStrLength: this.maxStrLength,
      maxBinLength: this.maxBinLength,
      maxArrayLength: this.maxArrayLength,
      maxMapLength: this.maxMapLength,
      maxExtLength: this.maxExtLength,
      keyDecoder: this.keyDecoder
    });
  }
  reinitializeState() {
    this.totalPos = 0, this.headByte = Ti, this.stack.reset();
  }
  setBuffer(e) {
    const r = No(e);
    this.bytes = r, this.view = new DataView(r.buffer, r.byteOffset, r.byteLength), this.pos = 0;
  }
  appendBuffer(e) {
    if (this.headByte === Ti && !this.hasRemaining(1))
      this.setBuffer(e);
    else {
      const r = this.bytes.subarray(this.pos), i = No(e), s = new Uint8Array(r.length + i.length);
      s.set(r), s.set(i, r.length), this.setBuffer(s);
    }
  }
  hasRemaining(e) {
    return this.view.byteLength - this.pos >= e;
  }
  createExtraByteError(e) {
    const { view: r, pos: i } = this;
    return new RangeError(`Extra ${r.byteLength - i} of ${r.byteLength} byte(s) found at buffer[${e}]`);
  }
  /**
   * @throws {@link DecodeError}
   * @throws {@link RangeError}
   */
  decode(e) {
    if (this.entered)
      return this.clone().decode(e);
    try {
      this.entered = !0, this.reinitializeState(), this.setBuffer(e);
      const r = this.doDecodeSync();
      if (this.hasRemaining(1))
        throw this.createExtraByteError(this.pos);
      return r;
    } finally {
      this.entered = !1;
    }
  }
  *decodeMulti(e) {
    if (this.entered) {
      yield* this.clone().decodeMulti(e);
      return;
    }
    try {
      for (this.entered = !0, this.reinitializeState(), this.setBuffer(e); this.hasRemaining(1); )
        yield this.doDecodeSync();
    } finally {
      this.entered = !1;
    }
  }
  async decodeAsync(e) {
    if (this.entered)
      return this.clone().decodeAsync(e);
    try {
      this.entered = !0;
      let r = !1, i;
      for await (const a of e) {
        if (r)
          throw this.entered = !1, this.createExtraByteError(this.totalPos);
        this.appendBuffer(a);
        try {
          i = this.doDecodeSync(), r = !0;
        } catch (c) {
          if (!(c instanceof RangeError))
            throw c;
        }
        this.totalPos += this.pos;
      }
      if (r) {
        if (this.hasRemaining(1))
          throw this.createExtraByteError(this.totalPos);
        return i;
      }
      const { headByte: s, pos: n, totalPos: o } = this;
      throw new RangeError(`Insufficient data in parsing ${Yn(s)} at ${o} (${n} in the current buffer)`);
    } finally {
      this.entered = !1;
    }
  }
  decodeArrayStream(e) {
    return this.decodeMultiAsync(e, !0);
  }
  decodeStream(e) {
    return this.decodeMultiAsync(e, !1);
  }
  async *decodeMultiAsync(e, r) {
    if (this.entered) {
      yield* this.clone().decodeMultiAsync(e, r);
      return;
    }
    try {
      this.entered = !0;
      let i = r, s = -1;
      for await (const n of e) {
        if (r && s === 0)
          throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(n), i && (s = this.readArraySize(), i = !1, this.complete());
        try {
          for (; yield this.doDecodeSync(), --s !== 0; )
            ;
        } catch (o) {
          if (!(o instanceof RangeError))
            throw o;
        }
        this.totalPos += this.pos;
      }
    } finally {
      this.entered = !1;
    }
  }
  doDecodeSync() {
    e: for (; ; ) {
      const e = this.readHeadByte();
      let r;
      if (e >= 224)
        r = e - 256;
      else if (e < 192)
        if (e < 128)
          r = e;
        else if (e < 144) {
          const s = e - 128;
          if (s !== 0) {
            this.pushMapState(s), this.complete();
            continue e;
          } else
            r = {};
        } else if (e < 160) {
          const s = e - 144;
          if (s !== 0) {
            this.pushArrayState(s), this.complete();
            continue e;
          } else
            r = [];
        } else {
          const s = e - 160;
          r = this.decodeString(s, 0);
        }
      else if (e === 192)
        r = null;
      else if (e === 194)
        r = !1;
      else if (e === 195)
        r = !0;
      else if (e === 202)
        r = this.readF32();
      else if (e === 203)
        r = this.readF64();
      else if (e === 204)
        r = this.readU8();
      else if (e === 205)
        r = this.readU16();
      else if (e === 206)
        r = this.readU32();
      else if (e === 207)
        this.useBigInt64 ? r = this.readU64AsBigInt() : r = this.readU64();
      else if (e === 208)
        r = this.readI8();
      else if (e === 209)
        r = this.readI16();
      else if (e === 210)
        r = this.readI32();
      else if (e === 211)
        this.useBigInt64 ? r = this.readI64AsBigInt() : r = this.readI64();
      else if (e === 217) {
        const s = this.lookU8();
        r = this.decodeString(s, 1);
      } else if (e === 218) {
        const s = this.lookU16();
        r = this.decodeString(s, 2);
      } else if (e === 219) {
        const s = this.lookU32();
        r = this.decodeString(s, 4);
      } else if (e === 220) {
        const s = this.readU16();
        if (s !== 0) {
          this.pushArrayState(s), this.complete();
          continue e;
        } else
          r = [];
      } else if (e === 221) {
        const s = this.readU32();
        if (s !== 0) {
          this.pushArrayState(s), this.complete();
          continue e;
        } else
          r = [];
      } else if (e === 222) {
        const s = this.readU16();
        if (s !== 0) {
          this.pushMapState(s), this.complete();
          continue e;
        } else
          r = {};
      } else if (e === 223) {
        const s = this.readU32();
        if (s !== 0) {
          this.pushMapState(s), this.complete();
          continue e;
        } else
          r = {};
      } else if (e === 196) {
        const s = this.lookU8();
        r = this.decodeBinary(s, 1);
      } else if (e === 197) {
        const s = this.lookU16();
        r = this.decodeBinary(s, 2);
      } else if (e === 198) {
        const s = this.lookU32();
        r = this.decodeBinary(s, 4);
      } else if (e === 212)
        r = this.decodeExtension(1, 0);
      else if (e === 213)
        r = this.decodeExtension(2, 0);
      else if (e === 214)
        r = this.decodeExtension(4, 0);
      else if (e === 215)
        r = this.decodeExtension(8, 0);
      else if (e === 216)
        r = this.decodeExtension(16, 0);
      else if (e === 199) {
        const s = this.lookU8();
        r = this.decodeExtension(s, 1);
      } else if (e === 200) {
        const s = this.lookU16();
        r = this.decodeExtension(s, 2);
      } else if (e === 201) {
        const s = this.lookU32();
        r = this.decodeExtension(s, 4);
      } else
        throw new tt(`Unrecognized type byte: ${Yn(e)}`);
      this.complete();
      const i = this.stack;
      for (; i.length > 0; ) {
        const s = i.top();
        if (s.type === Uo)
          if (s.array[s.position] = r, s.position++, s.position === s.size)
            r = s.array, i.release(s);
          else
            continue e;
        else if (s.type === Yi) {
          if (r === "__proto__")
            throw new tt("The key __proto__ is not allowed");
          s.key = this.mapKeyConverter(r), s.type = Ql;
          continue e;
        } else if (s.map[s.key] = r, s.readCount++, s.readCount === s.size)
          r = s.map, i.release(s);
        else {
          s.key = null, s.type = Yi;
          continue e;
        }
      }
      return r;
    }
  }
  readHeadByte() {
    return this.headByte === Ti && (this.headByte = this.readU8()), this.headByte;
  }
  complete() {
    this.headByte = Ti;
  }
  readArraySize() {
    const e = this.readHeadByte();
    switch (e) {
      case 220:
        return this.readU16();
      case 221:
        return this.readU32();
      default: {
        if (e < 160)
          return e - 144;
        throw new tt(`Unrecognized array type byte: ${Yn(e)}`);
      }
    }
  }
  pushMapState(e) {
    if (e > this.maxMapLength)
      throw new tt(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
    this.stack.pushMapState(e);
  }
  pushArrayState(e) {
    if (e > this.maxArrayLength)
      throw new tt(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
    this.stack.pushArrayState(e);
  }
  decodeString(e, r) {
    return !this.rawStrings || this.stateIsMapKey() ? this.decodeUtf8String(e, r) : this.decodeBinary(e, r);
  }
  /**
   * @throws {@link RangeError}
   */
  decodeUtf8String(e, r) {
    var n;
    if (e > this.maxStrLength)
      throw new tt(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
    if (this.bytes.byteLength < this.pos + r + e)
      throw qc;
    const i = this.pos + r;
    let s;
    return this.stateIsMapKey() && ((n = this.keyDecoder) != null && n.canBeCached(e)) ? s = this.keyDecoder.decode(this.bytes, i, e) : s = Xy(this.bytes, i, e), this.pos += r + e, s;
  }
  stateIsMapKey() {
    return this.stack.length > 0 ? this.stack.top().type === Yi : !1;
  }
  /**
   * @throws {@link RangeError}
   */
  decodeBinary(e, r) {
    if (e > this.maxBinLength)
      throw new tt(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
    if (!this.hasRemaining(e + r))
      throw qc;
    const i = this.pos + r, s = this.bytes.subarray(i, i + e);
    return this.pos += r + e, s;
  }
  decodeExtension(e, r) {
    if (e > this.maxExtLength)
      throw new tt(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
    const i = this.view.getInt8(this.pos + r), s = this.decodeBinary(
      e,
      r + 1
      /* extType */
    );
    return this.extensionCodec.decode(s, i, this.context);
  }
  lookU8() {
    return this.view.getUint8(this.pos);
  }
  lookU16() {
    return this.view.getUint16(this.pos);
  }
  lookU32() {
    return this.view.getUint32(this.pos);
  }
  readU8() {
    const e = this.view.getUint8(this.pos);
    return this.pos++, e;
  }
  readI8() {
    const e = this.view.getInt8(this.pos);
    return this.pos++, e;
  }
  readU16() {
    const e = this.view.getUint16(this.pos);
    return this.pos += 2, e;
  }
  readI16() {
    const e = this.view.getInt16(this.pos);
    return this.pos += 2, e;
  }
  readU32() {
    const e = this.view.getUint32(this.pos);
    return this.pos += 4, e;
  }
  readI32() {
    const e = this.view.getInt32(this.pos);
    return this.pos += 4, e;
  }
  readU64() {
    const e = tw(this.view, this.pos);
    return this.pos += 8, e;
  }
  readI64() {
    const e = Jl(this.view, this.pos);
    return this.pos += 8, e;
  }
  readU64AsBigInt() {
    const e = this.view.getBigUint64(this.pos);
    return this.pos += 8, e;
  }
  readI64AsBigInt() {
    const e = this.view.getBigInt64(this.pos);
    return this.pos += 8, e;
  }
  readF32() {
    const e = this.view.getFloat32(this.pos);
    return this.pos += 4, e;
  }
  readF64() {
    const e = this.view.getFloat64(this.pos);
    return this.pos += 8, e;
  }
};
function xw(t, e) {
  return new Iw(e).decode(t);
}
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function $w(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function ef(t, e) {
  return Array.isArray(e) ? e.length === 0 ? !0 : t ? e.every((r) => typeof r == "string") : e.every((r) => Number.isSafeInteger(r)) : !1;
}
function an(t, e) {
  if (typeof e != "string")
    throw new Error(`${t}: string expected`);
  return !0;
}
function Fa(t) {
  if (!Number.isSafeInteger(t))
    throw new Error(`invalid integer: ${t}`);
}
function ko(t) {
  if (!Array.isArray(t))
    throw new Error("array expected");
}
function cn(t, e) {
  if (!ef(!0, e))
    throw new Error(`${t}: array of strings expected`);
}
function Sw(t, e) {
  if (!ef(!1, e))
    throw new Error(`${t}: array of numbers expected`);
}
// @__NO_SIDE_EFFECTS__
function Dw(...t) {
  const e = (n) => n, r = (n, o) => (a) => n(o(a)), i = t.map((n) => n.encode).reduceRight(r, e), s = t.map((n) => n.decode).reduce(r, e);
  return { encode: i, decode: s };
}
// @__NO_SIDE_EFFECTS__
function Aw(t) {
  const e = typeof t == "string" ? t.split("") : t, r = e.length;
  cn("alphabet", e);
  const i = new Map(e.map((s, n) => [s, n]));
  return {
    encode: (s) => (ko(s), s.map((n) => {
      if (!Number.isSafeInteger(n) || n < 0 || n >= r)
        throw new Error(`alphabet.encode: digit index outside alphabet "${n}". Allowed: ${t}`);
      return e[n];
    })),
    decode: (s) => (ko(s), s.map((n) => {
      an("alphabet.decode", n);
      const o = i.get(n);
      if (o === void 0)
        throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);
      return o;
    }))
  };
}
// @__NO_SIDE_EFFECTS__
function Ow(t = "") {
  return an("join", t), {
    encode: (e) => (cn("join.decode", e), e.join(t)),
    decode: (e) => (an("join.decode", e), e.split(t))
  };
}
// @__NO_SIDE_EFFECTS__
function Pw(t, e = "=") {
  return Fa(t), an("padding", e), {
    encode(r) {
      for (cn("padding.encode", r); r.length * t % 8; )
        r.push(e);
      return r;
    },
    decode(r) {
      cn("padding.decode", r);
      let i = r.length;
      if (i * t % 8)
        throw new Error("padding: invalid, string should have whole number of bytes");
      for (; i > 0 && r[i - 1] === e; i--)
        if ((i - 1) * t % 8 === 0)
          throw new Error("padding: invalid, string has too much padding");
      return r.slice(0, i);
    }
  };
}
const tf = (t, e) => e === 0 ? t : tf(e, t % e), hn = /* @__NO_SIDE_EFFECTS__ */ (t, e) => t + (e - tf(t, e)), Jn = /* @__PURE__ */ (() => {
  let t = [];
  for (let e = 0; e < 40; e++)
    t.push(2 ** e);
  return t;
})();
function zc(t, e, r, i) {
  if (ko(t), e <= 0 || e > 32)
    throw new Error(`convertRadix2: wrong from=${e}`);
  if (r <= 0 || r > 32)
    throw new Error(`convertRadix2: wrong to=${r}`);
  if (/* @__PURE__ */ hn(e, r) > 32)
    throw new Error(`convertRadix2: carry overflow from=${e} to=${r} carryBits=${/* @__PURE__ */ hn(e, r)}`);
  let s = 0, n = 0;
  const o = Jn[e], a = Jn[r] - 1, c = [];
  for (const h of t) {
    if (Fa(h), h >= o)
      throw new Error(`convertRadix2: invalid data word=${h} from=${e}`);
    if (s = s << e | h, n + e > 32)
      throw new Error(`convertRadix2: carry overflow pos=${n} from=${e}`);
    for (n += e; n >= r; n -= r)
      c.push((s >> n - r & a) >>> 0);
    const u = Jn[n];
    if (u === void 0)
      throw new Error("invalid carry");
    s &= u - 1;
  }
  if (s = s << r - n & a, !i && n >= e)
    throw new Error("Excess padding");
  if (!i && s > 0)
    throw new Error(`Non-zero padding: ${s}`);
  return i && n > 0 && c.push(s >>> 0), c;
}
// @__NO_SIDE_EFFECTS__
function Cw(t, e = !1) {
  if (Fa(t), t <= 0 || t > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (/* @__PURE__ */ hn(8, t) > 32 || /* @__PURE__ */ hn(t, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (r) => {
      if (!$w(r))
        throw new Error("radix2.encode input should be Uint8Array");
      return zc(Array.from(r), 8, t, !e);
    },
    decode: (r) => (Sw("radix2.decode", r), Uint8Array.from(zc(r, t, 8, e)))
  };
}
const Tw = /* @__PURE__ */ Dw(/* @__PURE__ */ Cw(5), /* @__PURE__ */ Aw("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), /* @__PURE__ */ Pw(5), /* @__PURE__ */ Ow("")), Rw = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Bw = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (i, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function Br(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Bw(t);
  } catch {
    return t;
  }
}
function Wt(t) {
  return typeof t == "string" ? t : Rw(t) || "";
}
function Fw(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function rf(t, ...e) {
  if (!Fw(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function Hc(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Nw(t, e) {
  rf(t);
  const r = e.outputLen;
  if (t.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
}
const Kr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Zn = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function Uw(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function sf(t) {
  return typeof t == "string" && (t = Uw(t)), rf(t), t;
}
let kw = class {
  clone() {
    return this._cloneInto();
  }
};
function Lw(t) {
  const e = (i) => t().update(sf(i)).digest(), r = t();
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e;
}
function nf(t = 32) {
  if (Kr && typeof Kr.getRandomValues == "function") return Kr.getRandomValues(new Uint8Array(t));
  if (Kr && typeof Kr.randomBytes == "function") return Kr.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function jw(t, e, r, i) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, r, i);
  const s = BigInt(32), n = BigInt(4294967295), o = Number(r >> s & n), a = Number(r & n), c = i ? 4 : 0, h = i ? 0 : 4;
  t.setUint32(e + c, o, i), t.setUint32(e + h, a, i);
}
let Mw = class extends kw {
  constructor(e, r, i, s) {
    super(), this.blockLen = e, this.outputLen = r, this.padOffset = i, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Zn(this.buffer);
  }
  update(e) {
    Hc(this);
    const { view: r, buffer: i, blockLen: s } = this;
    e = sf(e);
    const n = e.length;
    for (let o = 0; o < n; ) {
      const a = Math.min(s - this.pos, n - o);
      if (a === s) {
        const c = Zn(e);
        for (; s <= n - o; o += s) this.process(c, o);
        continue;
      }
      i.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(r, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Hc(this), Nw(e, this), this.finished = !0;
    const { buffer: r, view: i, blockLen: s, isLE: n } = this;
    let { pos: o } = this;
    r[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > s - o && (this.process(i, 0), o = 0);
    for (let l = o; l < s; l++) r[l] = 0;
    jw(i, s - 8, BigInt(this.length * 8), n), this.process(i, 0);
    const a = Zn(e), c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = c / 4, u = this.get();
    if (h > u.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l = 0; l < h; l++) a.setUint32(4 * l, u[l], n);
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const i = e.slice(0, r);
    return this.destroy(), i;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: r, buffer: i, length: s, finished: n, destroyed: o, pos: a } = this;
    return e.length = s, e.pos = a, e.finished = n, e.destroyed = o, s % r && e.buffer.set(i), e;
  }
};
const As = BigInt(2 ** 32 - 1), Lo = BigInt(32);
function of(t, e = !1) {
  return e ? { h: Number(t & As), l: Number(t >> Lo & As) } : { h: Number(t >> Lo & As) | 0, l: Number(t & As) | 0 };
}
function qw(t, e = !1) {
  let r = new Uint32Array(t.length), i = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: n, l: o } = of(t[s], e);
    [r[s], i[s]] = [n, o];
  }
  return [r, i];
}
const zw = (t, e) => BigInt(t >>> 0) << Lo | BigInt(e >>> 0), Hw = (t, e, r) => t >>> r, Vw = (t, e, r) => t << 32 - r | e >>> r, Kw = (t, e, r) => t >>> r | e << 32 - r, Ww = (t, e, r) => t << 32 - r | e >>> r, Gw = (t, e, r) => t << 64 - r | e >>> r - 32, Yw = (t, e, r) => t >>> r - 32 | e << 64 - r, Jw = (t, e) => e, Zw = (t, e) => t, Qw = (t, e, r) => t << r | e >>> 32 - r, Xw = (t, e, r) => e << r | t >>> 32 - r, e0 = (t, e, r) => e << r - 32 | t >>> 64 - r, t0 = (t, e, r) => t << r - 32 | e >>> 64 - r;
function r0(t, e, r, i) {
  const s = (e >>> 0) + (i >>> 0);
  return { h: t + r + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const i0 = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0), s0 = (t, e, r, i) => e + r + i + (t / 2 ** 32 | 0) | 0, n0 = (t, e, r, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0), o0 = (t, e, r, i, s) => e + r + i + s + (t / 2 ** 32 | 0) | 0, a0 = (t, e, r, i, s) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0) + (s >>> 0), c0 = (t, e, r, i, s, n) => e + r + i + s + n + (t / 2 ** 32 | 0) | 0, G = { fromBig: of, split: qw, toBig: zw, shrSH: Hw, shrSL: Vw, rotrSH: Kw, rotrSL: Ww, rotrBH: Gw, rotrBL: Yw, rotr32H: Jw, rotr32L: Zw, rotlSH: Qw, rotlSL: Xw, rotlBH: e0, rotlBL: t0, add: r0, add3L: i0, add3H: s0, add4L: n0, add4H: o0, add5H: c0, add5L: a0 }, [h0, u0] = G.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))), Yt = new Uint32Array(80), Jt = new Uint32Array(80);
let l0 = class extends Mw {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e, Al: r, Bh: i, Bl: s, Ch: n, Cl: o, Dh: a, Dl: c, Eh: h, El: u, Fh: l, Fl: f, Gh: p, Gl: d, Hh: g, Hl: m } = this;
    return [e, r, i, s, n, o, a, c, h, u, l, f, p, d, g, m];
  }
  set(e, r, i, s, n, o, a, c, h, u, l, f, p, d, g, m) {
    this.Ah = e | 0, this.Al = r | 0, this.Bh = i | 0, this.Bl = s | 0, this.Ch = n | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = h | 0, this.El = u | 0, this.Fh = l | 0, this.Fl = f | 0, this.Gh = p | 0, this.Gl = d | 0, this.Hh = g | 0, this.Hl = m | 0;
  }
  process(e, r) {
    for (let E = 0; E < 16; E++, r += 4) Yt[E] = e.getUint32(r), Jt[E] = e.getUint32(r += 4);
    for (let E = 16; E < 80; E++) {
      const P = Yt[E - 15] | 0, A = Jt[E - 15] | 0, k = G.rotrSH(P, A, 1) ^ G.rotrSH(P, A, 8) ^ G.shrSH(P, A, 7), U = G.rotrSL(P, A, 1) ^ G.rotrSL(P, A, 8) ^ G.shrSL(P, A, 7), R = Yt[E - 2] | 0, b = Jt[E - 2] | 0, C = G.rotrSH(R, b, 19) ^ G.rotrBH(R, b, 61) ^ G.shrSH(R, b, 6), S = G.rotrSL(R, b, 19) ^ G.rotrBL(R, b, 61) ^ G.shrSL(R, b, 6), D = G.add4L(U, S, Jt[E - 7], Jt[E - 16]), T = G.add4H(D, k, C, Yt[E - 7], Yt[E - 16]);
      Yt[E] = T | 0, Jt[E] = D | 0;
    }
    let { Ah: i, Al: s, Bh: n, Bl: o, Ch: a, Cl: c, Dh: h, Dl: u, Eh: l, El: f, Fh: p, Fl: d, Gh: g, Gl: m, Hh: _, Hl: I } = this;
    for (let E = 0; E < 80; E++) {
      const P = G.rotrSH(l, f, 14) ^ G.rotrSH(l, f, 18) ^ G.rotrBH(l, f, 41), A = G.rotrSL(l, f, 14) ^ G.rotrSL(l, f, 18) ^ G.rotrBL(l, f, 41), k = l & p ^ ~l & g, U = f & d ^ ~f & m, R = G.add5L(I, A, U, u0[E], Jt[E]), b = G.add5H(R, _, P, k, h0[E], Yt[E]), C = R | 0, S = G.rotrSH(i, s, 28) ^ G.rotrBH(i, s, 34) ^ G.rotrBH(i, s, 39), D = G.rotrSL(i, s, 28) ^ G.rotrBL(i, s, 34) ^ G.rotrBL(i, s, 39), T = i & n ^ i & a ^ n & a, N = s & o ^ s & c ^ o & c;
      _ = g | 0, I = m | 0, g = p | 0, m = d | 0, p = l | 0, d = f | 0, { h: l, l: f } = G.add(h | 0, u | 0, b | 0, C | 0), h = a | 0, u = c | 0, a = n | 0, c = o | 0, n = i | 0, o = s | 0;
      const y = G.add3L(C, D, N);
      i = G.add3H(y, b, S, T), s = y | 0;
    }
    ({ h: i, l: s } = G.add(this.Ah | 0, this.Al | 0, i | 0, s | 0)), { h: n, l: o } = G.add(this.Bh | 0, this.Bl | 0, n | 0, o | 0), { h: a, l: c } = G.add(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h, l: u } = G.add(this.Dh | 0, this.Dl | 0, h | 0, u | 0), { h: l, l: f } = G.add(this.Eh | 0, this.El | 0, l | 0, f | 0), { h: p, l: d } = G.add(this.Fh | 0, this.Fl | 0, p | 0, d | 0), { h: g, l: m } = G.add(this.Gh | 0, this.Gl | 0, g | 0, m | 0), { h: _, l: I } = G.add(this.Hh | 0, this.Hl | 0, _ | 0, I | 0), this.set(i, s, n, o, a, c, h, u, l, f, p, d, g, m, _, I);
  }
  roundClean() {
    Yt.fill(0), Jt.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
const f0 = Lw(() => new l0());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Na = BigInt(0), af = BigInt(1), d0 = BigInt(2);
function Ua(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function ka(t) {
  if (!Ua(t)) throw new Error("Uint8Array expected");
}
function Qn(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
const p0 = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function La(t) {
  ka(t);
  let e = "";
  for (let r = 0; r < t.length; r++) e += p0[t[r]];
  return e;
}
function cf(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? Na : BigInt("0x" + t);
}
const kt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Vc(t) {
  if (t >= kt._0 && t <= kt._9) return t - kt._0;
  if (t >= kt.A && t <= kt.F) return t - (kt.A - 10);
  if (t >= kt.a && t <= kt.f) return t - (kt.a - 10);
}
function hf(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e = t.length, r = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const i = new Uint8Array(r);
  for (let s = 0, n = 0; s < r; s++, n += 2) {
    const o = Vc(t.charCodeAt(n)), a = Vc(t.charCodeAt(n + 1));
    if (o === void 0 || a === void 0) {
      const c = t[n] + t[n + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n);
    }
    i[s] = o * 16 + a;
  }
  return i;
}
function g0(t) {
  return cf(La(t));
}
function Js(t) {
  return ka(t), cf(La(Uint8Array.from(t).reverse()));
}
function uf(t, e) {
  return hf(t.toString(16).padStart(e * 2, "0"));
}
function jo(t, e) {
  return uf(t, e).reverse();
}
function Lt(t, e, r) {
  let i;
  if (typeof e == "string") try {
    i = hf(e);
  } catch (n) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + n);
  }
  else if (Ua(e)) i = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const s = i.length;
  if (typeof r == "number" && s !== r) throw new Error(t + " of length " + r + " expected, got " + s);
  return i;
}
function Kc(...t) {
  let e = 0;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    ka(s), e += s.length;
  }
  const r = new Uint8Array(e);
  for (let i = 0, s = 0; i < t.length; i++) {
    const n = t[i];
    r.set(n, s), s += n.length;
  }
  return r;
}
const Xn = (t) => typeof t == "bigint" && Na <= t;
function y0(t, e, r) {
  return Xn(t) && Xn(e) && Xn(r) && e <= t && t < r;
}
function Ri(t, e, r, i) {
  if (!y0(e, r, i)) throw new Error("expected valid " + t + ": " + r + " <= n < " + i + ", got " + e);
}
function w0(t) {
  let e;
  for (e = 0; t > Na; t >>= af, e += 1) ;
  return e;
}
const m0 = (t) => (d0 << BigInt(t - 1)) - af, b0 = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || Ua(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e) => e.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function ja(t, e, r = {}) {
  const i = (s, n, o) => {
    const a = b0[n];
    if (typeof a != "function") throw new Error("invalid validator function");
    const c = t[s];
    if (!(o && c === void 0) && !a(c, t)) throw new Error("param " + String(s) + " is invalid. Expected " + n + ", got " + c);
  };
  for (const [s, n] of Object.entries(e)) i(s, n, !1);
  for (const [s, n] of Object.entries(r)) i(s, n, !0);
  return t;
}
function Wc(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (r, ...i) => {
    const s = e.get(r);
    if (s !== void 0) return s;
    const n = t(r, ...i);
    return e.set(r, n), n;
  };
}
const Ie = BigInt(0), de = BigInt(1), xr = BigInt(2), v0 = BigInt(3), Mo = BigInt(4), Gc = BigInt(5), Yc = BigInt(8);
function me(t, e) {
  const r = t % e;
  return r >= Ie ? r : e + r;
}
function E0(t, e, r) {
  if (e < Ie) throw new Error("invalid exponent, negatives unsupported");
  if (r <= Ie) throw new Error("invalid modulus");
  if (r === de) return Ie;
  let i = de;
  for (; e > Ie; ) e & de && (i = i * t % r), t = t * t % r, e >>= de;
  return i;
}
function $t(t, e, r) {
  let i = t;
  for (; e-- > Ie; ) i *= i, i %= r;
  return i;
}
function Jc(t, e) {
  if (t === Ie) throw new Error("invert: expected non-zero number");
  if (e <= Ie) throw new Error("invert: expected positive modulus, got " + e);
  let r = me(t, e), i = e, s = Ie, n = de;
  for (; r !== Ie; ) {
    const o = i / r, a = i % r, c = s - n * o;
    i = r, r = a, s = n, n = c;
  }
  if (i !== de) throw new Error("invert: does not exist");
  return me(s, e);
}
function _0(t) {
  const e = (t - de) / xr;
  let r, i, s;
  for (r = t - de, i = 0; r % xr === Ie; r /= xr, i++) ;
  for (s = xr; s < t && E0(s, e, t) !== t - de; s++) if (s > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (i === 1) {
    const o = (t + de) / Mo;
    return function(a, c) {
      const h = a.pow(c, o);
      if (!a.eql(a.sqr(h), c)) throw new Error("Cannot find square root");
      return h;
    };
  }
  const n = (r + de) / xr;
  return function(o, a) {
    if (o.pow(a, e) === o.neg(o.ONE)) throw new Error("Cannot find square root");
    let c = i, h = o.pow(o.mul(o.ONE, s), r), u = o.pow(a, n), l = o.pow(a, r);
    for (; !o.eql(l, o.ONE); ) {
      if (o.eql(l, o.ZERO)) return o.ZERO;
      let f = 1;
      for (let d = o.sqr(l); f < c && !o.eql(d, o.ONE); f++) d = o.sqr(d);
      const p = o.pow(h, de << BigInt(c - f - 1));
      h = o.sqr(p), u = o.mul(u, p), l = o.mul(l, h), c = f;
    }
    return u;
  };
}
function I0(t) {
  if (t % Mo === v0) {
    const e = (t + de) / Mo;
    return function(r, i) {
      const s = r.pow(i, e);
      if (!r.eql(r.sqr(s), i)) throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % Yc === Gc) {
    const e = (t - Gc) / Yc;
    return function(r, i) {
      const s = r.mul(i, xr), n = r.pow(s, e), o = r.mul(i, n), a = r.mul(r.mul(o, xr), n), c = r.mul(o, r.sub(a, r.ONE));
      if (!r.eql(r.sqr(c), i)) throw new Error("Cannot find square root");
      return c;
    };
  }
  return _0(t);
}
const x0 = (t, e) => (me(t, e) & de) === de, $0 = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function S0(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, r = $0.reduce((i, s) => (i[s] = "function", i), e);
  return ja(t, r);
}
function D0(t, e, r) {
  if (r < Ie) throw new Error("invalid exponent, negatives unsupported");
  if (r === Ie) return t.ONE;
  if (r === de) return e;
  let i = t.ONE, s = e;
  for (; r > Ie; ) r & de && (i = t.mul(i, s)), s = t.sqr(s), r >>= de;
  return i;
}
function A0(t, e) {
  const r = new Array(e.length), i = e.reduce((n, o, a) => t.is0(o) ? n : (r[a] = n, t.mul(n, o)), t.ONE), s = t.inv(i);
  return e.reduceRight((n, o, a) => t.is0(o) ? n : (r[a] = t.mul(n, r[a]), t.mul(n, o)), s), r;
}
function lf(t, e) {
  const r = e !== void 0 ? e : t.toString(2).length, i = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: i };
}
function ff(t, e, r = !1, i = {}) {
  if (t <= Ie) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: s, nByteLength: n } = lf(t, e);
  if (n > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let o;
  const a = Object.freeze({ ORDER: t, isLE: r, BITS: s, BYTES: n, MASK: m0(s), ZERO: Ie, ONE: de, create: (c) => me(c, t), isValid: (c) => {
    if (typeof c != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c);
    return Ie <= c && c < t;
  }, is0: (c) => c === Ie, isOdd: (c) => (c & de) === de, neg: (c) => me(-c, t), eql: (c, h) => c === h, sqr: (c) => me(c * c, t), add: (c, h) => me(c + h, t), sub: (c, h) => me(c - h, t), mul: (c, h) => me(c * h, t), pow: (c, h) => D0(a, c, h), div: (c, h) => me(c * Jc(h, t), t), sqrN: (c) => c * c, addN: (c, h) => c + h, subN: (c, h) => c - h, mulN: (c, h) => c * h, inv: (c) => Jc(c, t), sqrt: i.sqrt || ((c) => (o || (o = I0(t)), o(a, c))), invertBatch: (c) => A0(a, c), cmov: (c, h, u) => u ? h : c, toBytes: (c) => r ? jo(c, n) : uf(c, n), fromBytes: (c) => {
    if (c.length !== n) throw new Error("Field.fromBytes: expected " + n + " bytes, got " + c.length);
    return r ? Js(c) : g0(c);
  } });
  return Object.freeze(a);
}
const Zc = BigInt(0), Os = BigInt(1);
function eo(t, e) {
  const r = e.negate();
  return t ? r : e;
}
function df(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function to(t, e) {
  df(t, e);
  const r = Math.ceil(e / t) + 1, i = 2 ** (t - 1);
  return { windows: r, windowSize: i };
}
function O0(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((r, i) => {
    if (!(r instanceof e)) throw new Error("invalid point at index " + i);
  });
}
function P0(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((r, i) => {
    if (!e.isValid(r)) throw new Error("invalid scalar at index " + i);
  });
}
const ro = /* @__PURE__ */ new WeakMap(), pf = /* @__PURE__ */ new WeakMap();
function io(t) {
  return pf.get(t) || 1;
}
function C0(t, e) {
  return { constTimeNegate: eo, hasPrecomputes(r) {
    return io(r) !== 1;
  }, unsafeLadder(r, i, s = t.ZERO) {
    let n = r;
    for (; i > Zc; ) i & Os && (s = s.add(n)), n = n.double(), i >>= Os;
    return s;
  }, precomputeWindow(r, i) {
    const { windows: s, windowSize: n } = to(i, e), o = [];
    let a = r, c = a;
    for (let h = 0; h < s; h++) {
      c = a, o.push(c);
      for (let u = 1; u < n; u++) c = c.add(a), o.push(c);
      a = c.double();
    }
    return o;
  }, wNAF(r, i, s) {
    const { windows: n, windowSize: o } = to(r, e);
    let a = t.ZERO, c = t.BASE;
    const h = BigInt(2 ** r - 1), u = 2 ** r, l = BigInt(r);
    for (let f = 0; f < n; f++) {
      const p = f * o;
      let d = Number(s & h);
      s >>= l, d > o && (d -= u, s += Os);
      const g = p, m = p + Math.abs(d) - 1, _ = f % 2 !== 0, I = d < 0;
      d === 0 ? c = c.add(eo(_, i[g])) : a = a.add(eo(I, i[m]));
    }
    return { p: a, f: c };
  }, wNAFUnsafe(r, i, s, n = t.ZERO) {
    const { windows: o, windowSize: a } = to(r, e), c = BigInt(2 ** r - 1), h = 2 ** r, u = BigInt(r);
    for (let l = 0; l < o; l++) {
      const f = l * a;
      if (s === Zc) break;
      let p = Number(s & c);
      if (s >>= u, p > a && (p -= h, s += Os), p === 0) continue;
      let d = i[f + Math.abs(p) - 1];
      p < 0 && (d = d.negate()), n = n.add(d);
    }
    return n;
  }, getPrecomputes(r, i, s) {
    let n = ro.get(i);
    return n || (n = this.precomputeWindow(i, r), r !== 1 && ro.set(i, s(n))), n;
  }, wNAFCached(r, i, s) {
    const n = io(r);
    return this.wNAF(n, this.getPrecomputes(n, r, s), i);
  }, wNAFCachedUnsafe(r, i, s, n) {
    const o = io(r);
    return o === 1 ? this.unsafeLadder(r, i, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, r, s), i, n);
  }, setWindowSize(r, i) {
    df(i, e), pf.set(r, i), ro.delete(r);
  } };
}
function T0(t, e, r, i) {
  if (O0(r, t), P0(i, e), r.length !== i.length) throw new Error("arrays of points and scalars must have equal length");
  const s = t.ZERO, n = w0(BigInt(r.length)), o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1, a = (1 << o) - 1, c = new Array(a + 1).fill(s), h = Math.floor((e.BITS - 1) / o) * o;
  let u = s;
  for (let l = h; l >= 0; l -= o) {
    c.fill(s);
    for (let p = 0; p < i.length; p++) {
      const d = i[p], g = Number(d >> BigInt(l) & BigInt(a));
      c[g] = c[g].add(r[p]);
    }
    let f = s;
    for (let p = c.length - 1, d = s; p > 0; p--) d = d.add(c[p]), f = f.add(d);
    if (u = u.add(f), l !== 0) for (let p = 0; p < o; p++) u = u.double();
  }
  return u;
}
function R0(t) {
  return S0(t.Fp), ja(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...lf(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
const yt = BigInt(0), qe = BigInt(1), Ps = BigInt(2), B0 = BigInt(8), F0 = { zip215: !0 };
function N0(t) {
  const e = R0(t);
  return ja(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e });
}
function U0(t) {
  const e = N0(t), { Fp: r, n: i, prehash: s, hash: n, randomBytes: o, nByteLength: a, h: c } = e, h = Ps << BigInt(a * 8) - qe, u = r.create, l = ff(e.n, e.nBitLength), f = e.uvRatio || ((y, w) => {
    try {
      return { isValid: !0, value: r.sqrt(y * r.inv(w)) };
    } catch {
      return { isValid: !1, value: yt };
    }
  }), p = e.adjustScalarBytes || ((y) => y), d = e.domain || ((y, w, v) => {
    if (Qn("phflag", v), w.length || v) throw new Error("Contexts/pre-hash are not supported");
    return y;
  });
  function g(y, w) {
    Ri("coordinate " + y, w, yt, h);
  }
  function m(y) {
    if (!(y instanceof E)) throw new Error("ExtendedPoint expected");
  }
  const _ = Wc((y, w) => {
    const { ex: v, ey: $, ez: x } = y, O = y.is0();
    w == null && (w = O ? B0 : r.inv(x));
    const B = u(v * w), q = u($ * w), H = u(x * w);
    if (O) return { x: yt, y: qe };
    if (H !== qe) throw new Error("invZ was invalid");
    return { x: B, y: q };
  }), I = Wc((y) => {
    const { a: w, d: v } = e;
    if (y.is0()) throw new Error("bad point: ZERO");
    const { ex: $, ey: x, ez: O, et: B } = y, q = u($ * $), H = u(x * x), M = u(O * O), V = u(M * M), K = u(q * w), ie = u(M * u(K + H)), re = u(V + u(v * u(q * H)));
    if (ie !== re) throw new Error("bad point: equation left != right (1)");
    const Y = u($ * x), fe = u(O * B);
    if (Y !== fe) throw new Error("bad point: equation left != right (2)");
    return !0;
  });
  class E {
    constructor(w, v, $, x) {
      this.ex = w, this.ey = v, this.ez = $, this.et = x, g("x", w), g("y", v), g("z", $), g("t", x), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(w) {
      if (w instanceof E) throw new Error("extended point not allowed");
      const { x: v, y: $ } = w || {};
      return g("x", v), g("y", $), new E(v, $, qe, u(v * $));
    }
    static normalizeZ(w) {
      const v = r.invertBatch(w.map(($) => $.ez));
      return w.map(($, x) => $.toAffine(v[x])).map(E.fromAffine);
    }
    static msm(w, v) {
      return T0(E, l, w, v);
    }
    _setWindowSize(w) {
      k.setWindowSize(this, w);
    }
    assertValidity() {
      I(this);
    }
    equals(w) {
      m(w);
      const { ex: v, ey: $, ez: x } = this, { ex: O, ey: B, ez: q } = w, H = u(v * q), M = u(O * x), V = u($ * q), K = u(B * x);
      return H === M && V === K;
    }
    is0() {
      return this.equals(E.ZERO);
    }
    negate() {
      return new E(u(-this.ex), this.ey, this.ez, u(-this.et));
    }
    double() {
      const { a: w } = e, { ex: v, ey: $, ez: x } = this, O = u(v * v), B = u($ * $), q = u(Ps * u(x * x)), H = u(w * O), M = v + $, V = u(u(M * M) - O - B), K = H + B, ie = K - q, re = H - B, Y = u(V * ie), fe = u(K * re), xe = u(V * re), wr = u(ie * K);
      return new E(Y, fe, wr, xe);
    }
    add(w) {
      m(w);
      const { a: v, d: $ } = e, { ex: x, ey: O, ez: B, et: q } = this, { ex: H, ey: M, ez: V, et: K } = w;
      if (v === BigInt(-1)) {
        const dc = u((O - x) * (M + H)), pc = u((O + x) * (M - H)), zn = u(pc - dc);
        if (zn === yt) return this.double();
        const gc = u(B * Ps * K), yc = u(q * Ps * V), wc = yc + gc, mc = pc + dc, bc = yc - gc, Mp = u(wc * zn), qp = u(mc * bc), zp = u(wc * bc), Hp = u(zn * mc);
        return new E(Mp, qp, Hp, zp);
      }
      const ie = u(x * H), re = u(O * M), Y = u(q * $ * K), fe = u(B * V), xe = u((x + O) * (H + M) - ie - re), wr = fe - Y, $s = fe + Y, zr = u(re - v * ie), qn = u(xe * wr), kp = u($s * zr), Lp = u(xe * zr), jp = u(wr * $s);
      return new E(qn, kp, jp, Lp);
    }
    subtract(w) {
      return this.add(w.negate());
    }
    wNAF(w) {
      return k.wNAFCached(this, w, E.normalizeZ);
    }
    multiply(w) {
      const v = w;
      Ri("scalar", v, qe, i);
      const { p: $, f: x } = this.wNAF(v);
      return E.normalizeZ([$, x])[0];
    }
    multiplyUnsafe(w, v = E.ZERO) {
      const $ = w;
      return Ri("scalar", $, yt, i), $ === yt ? A : this.is0() || $ === qe ? this : k.wNAFCachedUnsafe(this, $, E.normalizeZ, v);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(c).is0();
    }
    isTorsionFree() {
      return k.unsafeLadder(this, i).is0();
    }
    toAffine(w) {
      return _(this, w);
    }
    clearCofactor() {
      const { h: w } = e;
      return w === qe ? this : this.multiplyUnsafe(w);
    }
    static fromHex(w, v = !1) {
      const { d: $, a: x } = e, O = r.BYTES;
      w = Lt("pointHex", w, O), Qn("zip215", v);
      const B = w.slice(), q = w[O - 1];
      B[O - 1] = q & -129;
      const H = Js(B), M = v ? h : r.ORDER;
      Ri("pointHex.y", H, yt, M);
      const V = u(H * H), K = u(V - qe), ie = u($ * V - x);
      let { isValid: re, value: Y } = f(K, ie);
      if (!re) throw new Error("Point.fromHex: invalid y coordinate");
      const fe = (Y & qe) === qe, xe = (q & 128) !== 0;
      if (!v && Y === yt && xe) throw new Error("Point.fromHex: x=0 and x_0=1");
      return xe !== fe && (Y = u(-Y)), E.fromAffine({ x: Y, y: H });
    }
    static fromPrivateKey(w) {
      return b(w).point;
    }
    toRawBytes() {
      const { x: w, y: v } = this.toAffine(), $ = jo(v, r.BYTES);
      return $[$.length - 1] |= w & qe ? 128 : 0, $;
    }
    toHex() {
      return La(this.toRawBytes());
    }
  }
  E.BASE = new E(e.Gx, e.Gy, qe, u(e.Gx * e.Gy)), E.ZERO = new E(yt, qe, qe, yt);
  const { BASE: P, ZERO: A } = E, k = C0(E, a * 8);
  function U(y) {
    return me(y, i);
  }
  function R(y) {
    return U(Js(y));
  }
  function b(y) {
    const w = r.BYTES;
    y = Lt("private key", y, w);
    const v = Lt("hashed private key", n(y), 2 * w), $ = p(v.slice(0, w)), x = v.slice(w, 2 * w), O = R($), B = P.multiply(O), q = B.toRawBytes();
    return { head: $, prefix: x, scalar: O, point: B, pointBytes: q };
  }
  function C(y) {
    return b(y).pointBytes;
  }
  function S(y = new Uint8Array(), ...w) {
    const v = Kc(...w);
    return R(n(d(v, Lt("context", y), !!s)));
  }
  function D(y, w, v = {}) {
    y = Lt("message", y), s && (y = s(y));
    const { prefix: $, scalar: x, pointBytes: O } = b(w), B = S(v.context, $, y), q = P.multiply(B).toRawBytes(), H = S(v.context, q, O, y), M = U(B + H * x);
    Ri("signature.s", M, yt, i);
    const V = Kc(q, jo(M, r.BYTES));
    return Lt("result", V, r.BYTES * 2);
  }
  const T = F0;
  function N(y, w, v, $ = T) {
    const { context: x, zip215: O } = $, B = r.BYTES;
    y = Lt("signature", y, 2 * B), w = Lt("message", w), v = Lt("publicKey", v, B), O !== void 0 && Qn("zip215", O), s && (w = s(w));
    const q = Js(y.slice(B, 2 * B));
    let H, M, V;
    try {
      H = E.fromHex(v, O), M = E.fromHex(y.slice(0, B), O), V = P.multiplyUnsafe(q);
    } catch {
      return !1;
    }
    if (!O && H.isSmallOrder()) return !1;
    const K = S(x, M.toRawBytes(), H.toRawBytes(), w);
    return M.add(H.multiplyUnsafe(K)).subtract(V).clearCofactor().equals(E.ZERO);
  }
  return P._setWindowSize(8), { CURVE: e, getPublicKey: C, sign: D, verify: N, ExtendedPoint: E, utils: { getExtendedPublicKey: b, randomPrivateKey: () => o(r.BYTES), precompute(y = 8, w = E.BASE) {
    return w._setWindowSize(y), w.multiply(BigInt(3)), w;
  } } };
}
BigInt(0), BigInt(1);
const Ma = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Qc = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const k0 = BigInt(1), Xc = BigInt(2);
BigInt(3);
const L0 = BigInt(5), j0 = BigInt(8);
function M0(t) {
  const e = BigInt(10), r = BigInt(20), i = BigInt(40), s = BigInt(80), n = Ma, o = t * t % n * t % n, a = $t(o, Xc, n) * o % n, c = $t(a, k0, n) * t % n, h = $t(c, L0, n) * c % n, u = $t(h, e, n) * h % n, l = $t(u, r, n) * u % n, f = $t(l, i, n) * l % n, p = $t(f, s, n) * f % n, d = $t(p, s, n) * f % n, g = $t(d, e, n) * h % n;
  return { pow_p_5_8: $t(g, Xc, n) * t % n, b2: o };
}
function q0(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function z0(t, e) {
  const r = Ma, i = me(e * e * e, r), s = me(i * i * e, r), n = M0(t * s).pow_p_5_8;
  let o = me(t * i * n, r);
  const a = me(e * o * o, r), c = o, h = me(o * Qc, r), u = a === t, l = a === me(-t, r), f = a === me(-t * Qc, r);
  return u && (o = c), (l || f) && (o = h), x0(o, r) && (o = me(-o, r)), { isValid: u || l, value: o };
}
const H0 = ff(Ma, void 0, !0), V0 = { a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: H0, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: j0, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: f0, randomBytes: nf, adjustScalarBytes: q0, uvRatio: z0 }, gf = U0(V0), K0 = "EdDSA", W0 = "JWT", un = ".", In = "base64url", yf = "utf8", wf = "utf8", G0 = ":", Y0 = "did", J0 = "key", eh = "base58btc", Z0 = "z", Q0 = "K36", X0 = 32;
function qa(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function mf(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? qa(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function bf(t, e) {
  e || (e = t.reduce((s, n) => s + n.length, 0));
  const r = mf(e);
  let i = 0;
  for (const s of t) r.set(s, i), i += s.length;
  return qa(r);
}
function em(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), o = n.charCodeAt(0);
    if (r[o] !== 255) throw new TypeError(n + " is ambiguous");
    r[o] = s;
  }
  var a = t.length, c = t.charAt(0), h = Math.log(a) / Math.log(256), u = Math.log(256) / Math.log(a);
  function l(d) {
    if (d instanceof Uint8Array || (ArrayBuffer.isView(d) ? d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength) : Array.isArray(d) && (d = Uint8Array.from(d))), !(d instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (d.length === 0) return "";
    for (var g = 0, m = 0, _ = 0, I = d.length; _ !== I && d[_] === 0; ) _++, g++;
    for (var E = (I - _) * u + 1 >>> 0, P = new Uint8Array(E); _ !== I; ) {
      for (var A = d[_], k = 0, U = E - 1; (A !== 0 || k < m) && U !== -1; U--, k++) A += 256 * P[U] >>> 0, P[U] = A % a >>> 0, A = A / a >>> 0;
      if (A !== 0) throw new Error("Non-zero carry");
      m = k, _++;
    }
    for (var R = E - m; R !== E && P[R] === 0; ) R++;
    for (var b = c.repeat(g); R < E; ++R) b += t.charAt(P[R]);
    return b;
  }
  function f(d) {
    if (typeof d != "string") throw new TypeError("Expected String");
    if (d.length === 0) return new Uint8Array();
    var g = 0;
    if (d[g] !== " ") {
      for (var m = 0, _ = 0; d[g] === c; ) m++, g++;
      for (var I = (d.length - g) * h + 1 >>> 0, E = new Uint8Array(I); d[g]; ) {
        var P = r[d.charCodeAt(g)];
        if (P === 255) return;
        for (var A = 0, k = I - 1; (P !== 0 || A < _) && k !== -1; k--, A++) P += a * E[k] >>> 0, E[k] = P % 256 >>> 0, P = P / 256 >>> 0;
        if (P !== 0) throw new Error("Non-zero carry");
        _ = A, g++;
      }
      if (d[g] !== " ") {
        for (var U = I - _; U !== I && E[U] === 0; ) U++;
        for (var R = new Uint8Array(m + (I - U)), b = m; U !== I; ) R[b++] = E[U++];
        return R;
      }
    }
  }
  function p(d) {
    var g = f(d);
    if (g) return g;
    throw new Error(`Non-${e} character`);
  }
  return { encode: l, decodeUnsafe: f, decode: p };
}
var tm = em, rm = tm;
const vf = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, im = (t) => new TextEncoder().encode(t), sm = (t) => new TextDecoder().decode(t);
let nm = class {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}, om = class {
  constructor(e, r, i) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Ef(this, e);
  }
}, am = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ef(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i) return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const Ef = (t, e) => new am({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
let cm = class {
  constructor(e, r, i, s) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = s, this.encoder = new nm(e, r, i), this.decoder = new om(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
const xn = ({ name: t, prefix: e, encode: r, decode: i }) => new cm(t, e, r, i), gs = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: s } = rm(r, e);
  return xn({ prefix: t, name: e, encode: i, decode: (n) => vf(s(n)) });
}, hm = (t, e, r, i) => {
  const s = {};
  for (let u = 0; u < e.length; ++u) s[e[u]] = u;
  let n = t.length;
  for (; t[n - 1] === "="; ) --n;
  const o = new Uint8Array(n * r / 8 | 0);
  let a = 0, c = 0, h = 0;
  for (let u = 0; u < n; ++u) {
    const l = s[t[u]];
    if (l === void 0) throw new SyntaxError(`Non-${i} character`);
    c = c << r | l, a += r, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
  }
  if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
  return o;
}, um = (t, e, r) => {
  const i = e[e.length - 1] === "=", s = (1 << r) - 1;
  let n = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > r; ) o -= r, n += e[s & a >> o];
  if (o && (n += e[s & a << r - o]), i) for (; n.length * r & 7; ) n += "=";
  return n;
}, Pe = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => xn({ prefix: e, name: t, encode(s) {
  return um(s, i, r);
}, decode(s) {
  return hm(s, i, r, t);
} }), lm = xn({ prefix: "\0", name: "identity", encode: (t) => sm(t), decode: (t) => im(t) });
var fm = Object.freeze({ __proto__: null, identity: lm });
const dm = Pe({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var pm = Object.freeze({ __proto__: null, base2: dm });
const gm = Pe({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var ym = Object.freeze({ __proto__: null, base8: gm });
const wm = gs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var mm = Object.freeze({ __proto__: null, base10: wm });
const bm = Pe({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), vm = Pe({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Em = Object.freeze({ __proto__: null, base16: bm, base16upper: vm });
const _m = Pe({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Im = Pe({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), xm = Pe({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), $m = Pe({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Sm = Pe({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Dm = Pe({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Am = Pe({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Om = Pe({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Pm = Pe({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Cm = Object.freeze({ __proto__: null, base32: _m, base32upper: Im, base32pad: xm, base32padupper: $m, base32hex: Sm, base32hexupper: Dm, base32hexpad: Am, base32hexpadupper: Om, base32z: Pm });
const Tm = gs({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Rm = gs({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Bm = Object.freeze({ __proto__: null, base36: Tm, base36upper: Rm });
const Fm = gs({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Nm = gs({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Um = Object.freeze({ __proto__: null, base58btc: Fm, base58flickr: Nm });
const km = Pe({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Lm = Pe({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), jm = Pe({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Mm = Pe({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var qm = Object.freeze({ __proto__: null, base64: km, base64pad: Lm, base64url: jm, base64urlpad: Mm });
const _f = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), zm = _f.reduce((t, e, r) => (t[r] = e, t), []), Hm = _f.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Vm(t) {
  return t.reduce((e, r) => (e += zm[r], e), "");
}
function Km(t) {
  const e = [];
  for (const r of t) {
    const i = Hm[r.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Wm = xn({ prefix: "🚀", name: "base256emoji", encode: Vm, decode: Km });
var Gm = Object.freeze({ __proto__: null, base256emoji: Wm }), Ym = If, th = 128, Jm = -128, Zm = Math.pow(2, 31);
function If(t, e, r) {
  e = e || [], r = r || 0;
  for (var i = r; t >= Zm; ) e[r++] = t & 255 | th, t /= 128;
  for (; t & Jm; ) e[r++] = t & 255 | th, t >>>= 7;
  return e[r] = t | 0, If.bytes = r - i + 1, e;
}
var Qm = qo, Xm = 128, rh = 127;
function qo(t, i) {
  var r = 0, i = i || 0, s = 0, n = i, o, a = t.length;
  do {
    if (n >= a) throw qo.bytes = 0, new RangeError("Could not decode varint");
    o = t[n++], r += s < 28 ? (o & rh) << s : (o & rh) * Math.pow(2, s), s += 7;
  } while (o >= Xm);
  return qo.bytes = n - i, r;
}
var eb = Math.pow(2, 7), tb = Math.pow(2, 14), rb = Math.pow(2, 21), ib = Math.pow(2, 28), sb = Math.pow(2, 35), nb = Math.pow(2, 42), ob = Math.pow(2, 49), ab = Math.pow(2, 56), cb = Math.pow(2, 63), hb = function(t) {
  return t < eb ? 1 : t < tb ? 2 : t < rb ? 3 : t < ib ? 4 : t < sb ? 5 : t < nb ? 6 : t < ob ? 7 : t < ab ? 8 : t < cb ? 9 : 10;
}, ub = { encode: Ym, decode: Qm, encodingLength: hb }, xf = ub;
const ih = (t, e, r = 0) => (xf.encode(t, e, r), e), sh = (t) => xf.encodingLength(t), zo = (t, e) => {
  const r = e.byteLength, i = sh(t), s = i + sh(r), n = new Uint8Array(s + r);
  return ih(t, n, 0), ih(r, n, i), n.set(e, s), new lb(t, r, e, n);
};
let lb = class {
  constructor(e, r, i, s) {
    this.code = e, this.size = r, this.digest = i, this.bytes = s;
  }
};
const $f = ({ name: t, code: e, encode: r }) => new fb(t, e, r);
let fb = class {
  constructor(e, r, i) {
    this.name = e, this.code = r, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? zo(this.code, r) : r.then((i) => zo(this.code, i));
    } else throw Error("Unknown type, must be binary type");
  }
};
const Sf = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), db = $f({ name: "sha2-256", code: 18, encode: Sf("SHA-256") }), pb = $f({ name: "sha2-512", code: 19, encode: Sf("SHA-512") });
var gb = Object.freeze({ __proto__: null, sha256: db, sha512: pb });
const Df = 0, yb = "identity", Af = vf, wb = (t) => zo(Df, Af(t)), mb = { code: Df, name: yb, encode: Af, digest: wb };
var bb = Object.freeze({ __proto__: null, identity: mb });
new TextEncoder(), new TextDecoder();
const nh = { ...fm, ...pm, ...ym, ...mm, ...Em, ...Cm, ...Bm, ...Um, ...qm, ...Gm };
({ ...gb, ...bb });
function Of(t, e, r, i) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: i } };
}
const oh = Of("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), so = Of("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = mf(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e;
}), Pf = { utf8: oh, "utf-8": oh, hex: nh.base16, latin1: so, ascii: so, binary: so, ...nh };
function $n(t, e = "utf8") {
  const r = Pf[e];
  if (!r) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function Ei(t, e = "utf8") {
  const r = Pf[e];
  if (!r) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? qa(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function ah(t) {
  return Br($n(Ei(t, In), yf));
}
function ln(t) {
  return $n(Ei(Wt(t), yf), In);
}
function Cf(t) {
  const e = Ei(Q0, eh), r = Z0 + $n(bf([e, t]), eh);
  return [Y0, J0, r].join(G0);
}
function vb(t) {
  return $n(t, In);
}
function Eb(t) {
  return Ei(t, In);
}
function _b(t) {
  return Ei([ln(t.header), ln(t.payload)].join(un), wf);
}
function Ib(t) {
  return [ln(t.header), ln(t.payload), vb(t.signature)].join(un);
}
function Ho(t) {
  const e = t.split(un), r = ah(e[0]), i = ah(e[1]), s = Eb(e[2]), n = Ei(e.slice(0, 2).join(un), wf);
  return { header: r, payload: i, signature: s, data: n };
}
function ch(t = nf(X0)) {
  const e = gf.getPublicKey(t);
  return { secretKey: bf([t, e]), publicKey: e };
}
async function xb(t, e, r, i, s = L.fromMiliseconds(Date.now())) {
  const n = { alg: K0, typ: W0 }, o = Cf(i.publicKey), a = s + r, c = { iss: o, sub: t, aud: e, iat: s, exp: a }, h = _b({ header: n, payload: c }), u = gf.sign(h, i.secretKey.slice(0, 32));
  return Ib({ header: n, payload: c, signature: u });
}
function za(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Tf(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? za(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Ji(t, e) {
  e || (e = t.reduce((s, n) => s + n.length, 0));
  const r = Tf(e);
  let i = 0;
  for (const s of t)
    r.set(s, i), i += s.length;
  return za(r);
}
function $b(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), o = n.charCodeAt(0);
    if (r[o] !== 255)
      throw new TypeError(n + " is ambiguous");
    r[o] = s;
  }
  var a = t.length, c = t.charAt(0), h = Math.log(a) / Math.log(256), u = Math.log(256) / Math.log(a);
  function l(d) {
    if (d instanceof Uint8Array || (ArrayBuffer.isView(d) ? d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength) : Array.isArray(d) && (d = Uint8Array.from(d))), !(d instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (d.length === 0)
      return "";
    for (var g = 0, m = 0, _ = 0, I = d.length; _ !== I && d[_] === 0; )
      _++, g++;
    for (var E = (I - _) * u + 1 >>> 0, P = new Uint8Array(E); _ !== I; ) {
      for (var A = d[_], k = 0, U = E - 1; (A !== 0 || k < m) && U !== -1; U--, k++)
        A += 256 * P[U] >>> 0, P[U] = A % a >>> 0, A = A / a >>> 0;
      if (A !== 0)
        throw new Error("Non-zero carry");
      m = k, _++;
    }
    for (var R = E - m; R !== E && P[R] === 0; )
      R++;
    for (var b = c.repeat(g); R < E; ++R)
      b += t.charAt(P[R]);
    return b;
  }
  function f(d) {
    if (typeof d != "string")
      throw new TypeError("Expected String");
    if (d.length === 0)
      return new Uint8Array();
    var g = 0;
    if (d[g] !== " ") {
      for (var m = 0, _ = 0; d[g] === c; )
        m++, g++;
      for (var I = (d.length - g) * h + 1 >>> 0, E = new Uint8Array(I); d[g]; ) {
        var P = r[d.charCodeAt(g)];
        if (P === 255)
          return;
        for (var A = 0, k = I - 1; (P !== 0 || A < _) && k !== -1; k--, A++)
          P += a * E[k] >>> 0, E[k] = P % 256 >>> 0, P = P / 256 >>> 0;
        if (P !== 0)
          throw new Error("Non-zero carry");
        _ = A, g++;
      }
      if (d[g] !== " ") {
        for (var U = I - _; U !== I && E[U] === 0; )
          U++;
        for (var R = new Uint8Array(m + (I - U)), b = m; U !== I; )
          R[b++] = E[U++];
        return R;
      }
    }
  }
  function p(d) {
    var g = f(d);
    if (g)
      return g;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: l,
    decodeUnsafe: f,
    decode: p
  };
}
var Sb = $b, Db = Sb;
const Ab = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Ob = (t) => new TextEncoder().encode(t), Pb = (t) => new TextDecoder().decode(t);
class Cb {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Tb {
  constructor(e, r, i) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Rf(this, e);
  }
}
class Rb {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Rf(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Rf = (t, e) => new Rb({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Bb {
  constructor(e, r, i, s) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = s, this.encoder = new Cb(e, r, i), this.decoder = new Tb(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Sn = ({ name: t, prefix: e, encode: r, decode: i }) => new Bb(t, e, r, i), ys = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: s } = Db(r, e);
  return Sn({
    prefix: t,
    name: e,
    encode: i,
    decode: (n) => Ab(s(n))
  });
}, Fb = (t, e, r, i) => {
  const s = {};
  for (let u = 0; u < e.length; ++u)
    s[e[u]] = u;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const o = new Uint8Array(n * r / 8 | 0);
  let a = 0, c = 0, h = 0;
  for (let u = 0; u < n; ++u) {
    const l = s[t[u]];
    if (l === void 0)
      throw new SyntaxError(`Non-${i} character`);
    c = c << r | l, a += r, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
  }
  if (a >= r || 255 & c << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, Nb = (t, e, r) => {
  const i = e[e.length - 1] === "=", s = (1 << r) - 1;
  let n = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c)
    for (a = a << 8 | t[c], o += 8; o > r; )
      o -= r, n += e[s & a >> o];
  if (o && (n += e[s & a << r - o]), i)
    for (; n.length * r & 7; )
      n += "=";
  return n;
}, Ce = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => Sn({
  prefix: e,
  name: t,
  encode(s) {
    return Nb(s, i, r);
  },
  decode(s) {
    return Fb(s, i, r, t);
  }
}), Ub = Sn({
  prefix: "\0",
  name: "identity",
  encode: (t) => Pb(t),
  decode: (t) => Ob(t)
}), kb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Ub
}, Symbol.toStringTag, { value: "Module" })), Lb = Ce({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), jb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Lb
}, Symbol.toStringTag, { value: "Module" })), Mb = Ce({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), qb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Mb
}, Symbol.toStringTag, { value: "Module" })), zb = ys({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Hb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: zb
}, Symbol.toStringTag, { value: "Module" })), Vb = Ce({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Kb = Ce({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Wb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Vb,
  base16upper: Kb
}, Symbol.toStringTag, { value: "Module" })), Gb = Ce({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Yb = Ce({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Jb = Ce({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Zb = Ce({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Qb = Ce({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Xb = Ce({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), e1 = Ce({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), t1 = Ce({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), r1 = Ce({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), i1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Gb,
  base32hex: Qb,
  base32hexpad: e1,
  base32hexpadupper: t1,
  base32hexupper: Xb,
  base32pad: Jb,
  base32padupper: Zb,
  base32upper: Yb,
  base32z: r1
}, Symbol.toStringTag, { value: "Module" })), s1 = ys({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), n1 = ys({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), o1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: s1,
  base36upper: n1
}, Symbol.toStringTag, { value: "Module" })), a1 = ys({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), c1 = ys({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), h1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: a1,
  base58flickr: c1
}, Symbol.toStringTag, { value: "Module" })), u1 = Ce({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), l1 = Ce({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), f1 = Ce({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), d1 = Ce({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), p1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: u1,
  base64pad: l1,
  base64url: f1,
  base64urlpad: d1
}, Symbol.toStringTag, { value: "Module" })), Bf = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), g1 = Bf.reduce((t, e, r) => (t[r] = e, t), []), y1 = Bf.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function w1(t) {
  return t.reduce((e, r) => (e += g1[r], e), "");
}
function m1(t) {
  const e = [];
  for (const r of t) {
    const i = y1[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const b1 = Sn({
  prefix: "🚀",
  name: "base256emoji",
  encode: w1,
  decode: m1
}), v1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: b1
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const hh = {
  ...kb,
  ...jb,
  ...qb,
  ...Hb,
  ...Wb,
  ...i1,
  ...o1,
  ...h1,
  ...p1,
  ...v1
};
function Ff(t, e, r, i) {
  return {
    name: t,
    prefix: e,
    encoder: {
      name: t,
      prefix: e,
      encode: r
    },
    decoder: { decode: i }
  };
}
const uh = Ff("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), no = Ff("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Tf(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Nf = {
  utf8: uh,
  "utf-8": uh,
  hex: hh.base16,
  latin1: no,
  ascii: no,
  binary: no,
  ...hh
};
function ut(t, e = "utf8") {
  const r = Nf[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? za(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Je(t, e = "utf8") {
  const r = Nf[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
const E1 = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } }, _1 = "Input must be an string, Buffer or Uint8Array";
function I1(t) {
  let e;
  if (t instanceof Uint8Array)
    e = t;
  else if (typeof t == "string")
    e = new TextEncoder().encode(t);
  else
    throw new Error(_1);
  return e;
}
function x1(t) {
  return Array.prototype.map.call(t, function(e) {
    return (e < 16 ? "0" : "") + e.toString(16);
  }).join("");
}
function Cs(t) {
  return (4294967296 + t).toString(16).substring(1);
}
function $1(t, e, r) {
  let i = `
` + t + " = ";
  for (let s = 0; s < e.length; s += 2) {
    if (r === 32)
      i += Cs(e[s]).toUpperCase(), i += " ", i += Cs(e[s + 1]).toUpperCase();
    else if (r === 64)
      i += Cs(e[s + 1]).toUpperCase(), i += Cs(e[s]).toUpperCase();
    else throw new Error("Invalid size " + r);
    s % 6 === 4 ? i += `
` + new Array(t.length + 4).join(" ") : s < e.length - 2 && (i += " ");
  }
  console.log(i);
}
function S1(t, e, r) {
  let i = (/* @__PURE__ */ new Date()).getTime();
  const s = new Uint8Array(e);
  for (let o = 0; o < e; o++)
    s[o] = o % 256;
  const n = (/* @__PURE__ */ new Date()).getTime();
  console.log("Generated random input in " + (n - i) + "ms"), i = n;
  for (let o = 0; o < r; o++) {
    const a = t(s), c = (/* @__PURE__ */ new Date()).getTime(), h = c - i;
    i = c, console.log("Hashed in " + h + "ms: " + a.substring(0, 20) + "..."), console.log(
      Math.round(e / (1 << 20) / (h / 1e3) * 100) / 100 + " MB PER SECOND"
    );
  }
}
var Uf = {
  normalizeInput: I1,
  toHex: x1,
  debugPrint: $1,
  testSpeed: S1
};
const Zs = Uf;
function Ts(t, e, r) {
  const i = t[e] + t[r];
  let s = t[e + 1] + t[r + 1];
  i >= 4294967296 && s++, t[e] = i, t[e + 1] = s;
}
function lh(t, e, r, i) {
  let s = t[e] + r;
  r < 0 && (s += 4294967296);
  let n = t[e + 1] + i;
  s >= 4294967296 && n++, t[e] = s, t[e + 1] = n;
}
function kf(t, e) {
  return t[e] ^ t[e + 1] << 8 ^ t[e + 2] << 16 ^ t[e + 3] << 24;
}
function Zt(t, e, r, i, s, n) {
  const o = Hi[s], a = Hi[s + 1], c = Hi[n], h = Hi[n + 1];
  Ts(W, t, e), lh(W, t, o, a);
  let u = W[i] ^ W[t], l = W[i + 1] ^ W[t + 1];
  W[i] = l, W[i + 1] = u, Ts(W, r, i), u = W[e] ^ W[r], l = W[e + 1] ^ W[r + 1], W[e] = u >>> 24 ^ l << 8, W[e + 1] = l >>> 24 ^ u << 8, Ts(W, t, e), lh(W, t, c, h), u = W[i] ^ W[t], l = W[i + 1] ^ W[t + 1], W[i] = u >>> 16 ^ l << 16, W[i + 1] = l >>> 16 ^ u << 16, Ts(W, r, i), u = W[e] ^ W[r], l = W[e + 1] ^ W[r + 1], W[e] = l >>> 31 ^ u << 1, W[e + 1] = u >>> 31 ^ l << 1;
}
const Lf = new Uint32Array([
  4089235720,
  1779033703,
  2227873595,
  3144134277,
  4271175723,
  1013904242,
  1595750129,
  2773480762,
  2917565137,
  1359893119,
  725511199,
  2600822924,
  4215389547,
  528734635,
  327033209,
  1541459225
]), D1 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3
], Re = new Uint8Array(
  D1.map(function(t) {
    return t * 2;
  })
), W = new Uint32Array(32), Hi = new Uint32Array(32);
function jf(t, e) {
  let r = 0;
  for (r = 0; r < 16; r++)
    W[r] = t.h[r], W[r + 16] = Lf[r];
  for (W[24] = W[24] ^ t.t, W[25] = W[25] ^ t.t / 4294967296, e && (W[28] = ~W[28], W[29] = ~W[29]), r = 0; r < 32; r++)
    Hi[r] = kf(t.b, 4 * r);
  for (r = 0; r < 12; r++)
    Zt(0, 8, 16, 24, Re[r * 16 + 0], Re[r * 16 + 1]), Zt(2, 10, 18, 26, Re[r * 16 + 2], Re[r * 16 + 3]), Zt(4, 12, 20, 28, Re[r * 16 + 4], Re[r * 16 + 5]), Zt(6, 14, 22, 30, Re[r * 16 + 6], Re[r * 16 + 7]), Zt(0, 10, 20, 30, Re[r * 16 + 8], Re[r * 16 + 9]), Zt(2, 12, 22, 24, Re[r * 16 + 10], Re[r * 16 + 11]), Zt(4, 14, 16, 26, Re[r * 16 + 12], Re[r * 16 + 13]), Zt(6, 8, 18, 28, Re[r * 16 + 14], Re[r * 16 + 15]);
  for (r = 0; r < 16; r++)
    t.h[r] = t.h[r] ^ W[r] ^ W[r + 16];
}
const Qt = new Uint8Array([
  0,
  0,
  0,
  0,
  //  0: outlen, keylen, fanout, depth
  0,
  0,
  0,
  0,
  //  4: leaf length, sequential mode
  0,
  0,
  0,
  0,
  //  8: node offset
  0,
  0,
  0,
  0,
  // 12: node offset
  0,
  0,
  0,
  0,
  // 16: node depth, inner length, rfu
  0,
  0,
  0,
  0,
  // 20: rfu
  0,
  0,
  0,
  0,
  // 24: rfu
  0,
  0,
  0,
  0,
  // 28: rfu
  0,
  0,
  0,
  0,
  // 32: salt
  0,
  0,
  0,
  0,
  // 36: salt
  0,
  0,
  0,
  0,
  // 40: salt
  0,
  0,
  0,
  0,
  // 44: salt
  0,
  0,
  0,
  0,
  // 48: personal
  0,
  0,
  0,
  0,
  // 52: personal
  0,
  0,
  0,
  0,
  // 56: personal
  0,
  0,
  0,
  0
  // 60: personal
]);
function Mf(t, e, r, i) {
  if (t === 0 || t > 64)
    throw new Error("Illegal output length, expected 0 < length <= 64");
  if (e && e.length > 64)
    throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
  if (r && r.length !== 16)
    throw new Error("Illegal salt, expected Uint8Array with length is 16");
  if (i && i.length !== 16)
    throw new Error("Illegal personal, expected Uint8Array with length is 16");
  const s = {
    b: new Uint8Array(128),
    h: new Uint32Array(16),
    t: 0,
    // input count
    c: 0,
    // pointer within buffer
    outlen: t
    // output length in bytes
  };
  Qt.fill(0), Qt[0] = t, e && (Qt[1] = e.length), Qt[2] = 1, Qt[3] = 1, r && Qt.set(r, 32), i && Qt.set(i, 48);
  for (let n = 0; n < 16; n++)
    s.h[n] = Lf[n] ^ kf(Qt, n * 4);
  return e && (Ha(s, e), s.c = 128), s;
}
function Ha(t, e) {
  for (let r = 0; r < e.length; r++)
    t.c === 128 && (t.t += t.c, jf(t, !1), t.c = 0), t.b[t.c++] = e[r];
}
function qf(t) {
  for (t.t += t.c; t.c < 128; )
    t.b[t.c++] = 0;
  jf(t, !0);
  const e = new Uint8Array(t.outlen);
  for (let r = 0; r < t.outlen; r++)
    e[r] = t.h[r >> 2] >> 8 * (r & 3);
  return e;
}
function zf(t, e, r, i, s) {
  r = r || 64, t = Zs.normalizeInput(t), i && (i = Zs.normalizeInput(i)), s && (s = Zs.normalizeInput(s));
  const n = Mf(r, e, i, s);
  return Ha(n, t), qf(n);
}
function A1(t, e, r, i, s) {
  const n = zf(t, e, r, i, s);
  return Zs.toHex(n);
}
var O1 = {
  blake2b: zf,
  blake2bHex: A1,
  blake2bInit: Mf,
  blake2bUpdate: Ha,
  blake2bFinal: qf
};
const Hf = Uf;
function P1(t, e) {
  return t[e] ^ t[e + 1] << 8 ^ t[e + 2] << 16 ^ t[e + 3] << 24;
}
function Xt(t, e, r, i, s, n) {
  ee[t] = ee[t] + ee[e] + s, ee[i] = Rs(ee[i] ^ ee[t], 16), ee[r] = ee[r] + ee[i], ee[e] = Rs(ee[e] ^ ee[r], 12), ee[t] = ee[t] + ee[e] + n, ee[i] = Rs(ee[i] ^ ee[t], 8), ee[r] = ee[r] + ee[i], ee[e] = Rs(ee[e] ^ ee[r], 7);
}
function Rs(t, e) {
  return t >>> e ^ t << 32 - e;
}
const Vf = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Be = new Uint8Array([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0
]), ee = new Uint32Array(16), $e = new Uint32Array(16);
function Kf(t, e) {
  let r = 0;
  for (r = 0; r < 8; r++)
    ee[r] = t.h[r], ee[r + 8] = Vf[r];
  for (ee[12] ^= t.t, ee[13] ^= t.t / 4294967296, e && (ee[14] = ~ee[14]), r = 0; r < 16; r++)
    $e[r] = P1(t.b, 4 * r);
  for (r = 0; r < 10; r++)
    Xt(0, 4, 8, 12, $e[Be[r * 16 + 0]], $e[Be[r * 16 + 1]]), Xt(1, 5, 9, 13, $e[Be[r * 16 + 2]], $e[Be[r * 16 + 3]]), Xt(2, 6, 10, 14, $e[Be[r * 16 + 4]], $e[Be[r * 16 + 5]]), Xt(3, 7, 11, 15, $e[Be[r * 16 + 6]], $e[Be[r * 16 + 7]]), Xt(0, 5, 10, 15, $e[Be[r * 16 + 8]], $e[Be[r * 16 + 9]]), Xt(1, 6, 11, 12, $e[Be[r * 16 + 10]], $e[Be[r * 16 + 11]]), Xt(2, 7, 8, 13, $e[Be[r * 16 + 12]], $e[Be[r * 16 + 13]]), Xt(3, 4, 9, 14, $e[Be[r * 16 + 14]], $e[Be[r * 16 + 15]]);
  for (r = 0; r < 8; r++)
    t.h[r] ^= ee[r] ^ ee[r + 8];
}
function Wf(t, e) {
  if (!(t > 0 && t <= 32))
    throw new Error("Incorrect output length, should be in [1, 32]");
  const r = e ? e.length : 0;
  if (e && !(r > 0 && r <= 32))
    throw new Error("Incorrect key length, should be in [1, 32]");
  const i = {
    h: new Uint32Array(Vf),
    // hash state
    b: new Uint8Array(64),
    // input block
    c: 0,
    // pointer within block
    t: 0,
    // input count
    outlen: t
    // output length in bytes
  };
  return i.h[0] ^= 16842752 ^ r << 8 ^ t, r > 0 && (Va(i, e), i.c = 64), i;
}
function Va(t, e) {
  for (let r = 0; r < e.length; r++)
    t.c === 64 && (t.t += t.c, Kf(t, !1), t.c = 0), t.b[t.c++] = e[r];
}
function Gf(t) {
  for (t.t += t.c; t.c < 64; )
    t.b[t.c++] = 0;
  Kf(t, !0);
  const e = new Uint8Array(t.outlen);
  for (let r = 0; r < t.outlen; r++)
    e[r] = t.h[r >> 2] >> 8 * (r & 3) & 255;
  return e;
}
function Yf(t, e, r) {
  r = r || 32, t = Hf.normalizeInput(t);
  const i = Wf(r, e);
  return Va(i, t), Gf(i);
}
function C1(t, e, r) {
  const i = Yf(t, e, r);
  return Hf.toHex(i);
}
var T1 = {
  blake2s: Yf,
  blake2sHex: C1,
  blake2sInit: Wf,
  blake2sUpdate: Va,
  blake2sFinal: Gf
};
const Bi = O1, Fi = T1;
var R1 = {
  blake2b: Bi.blake2b,
  blake2bHex: Bi.blake2bHex,
  blake2bInit: Bi.blake2bInit,
  blake2bUpdate: Bi.blake2bUpdate,
  blake2bFinal: Bi.blake2bFinal,
  blake2s: Fi.blake2s,
  blake2sHex: Fi.blake2sHex,
  blake2sInit: Fi.blake2sInit,
  blake2sUpdate: Fi.blake2sUpdate,
  blake2sFinal: Fi.blake2sFinal
};
const B1 = ":";
function gi(t) {
  const [e, r] = t.split(B1);
  return { namespace: e, reference: r };
}
function fh(t, e = []) {
  const r = [];
  return Object.keys(t).forEach((i) => {
    if (e.length && !e.includes(i)) return;
    const s = t[i];
    r.push(...s.accounts);
  }), r;
}
function Jf(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
var F1 = Object.defineProperty, N1 = Object.defineProperties, U1 = Object.getOwnPropertyDescriptors, dh = Object.getOwnPropertySymbols, k1 = Object.prototype.hasOwnProperty, L1 = Object.prototype.propertyIsEnumerable, ph = (t, e, r) => e in t ? F1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, gh = (t, e) => {
  for (var r in e || (e = {})) k1.call(e, r) && ph(t, r, e[r]);
  if (dh) for (var r of dh(e)) L1.call(e, r) && ph(t, r, e[r]);
  return t;
}, j1 = (t, e) => N1(t, U1(e));
const M1 = "ReactNative", rt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, q1 = "js";
function fn() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function yr() {
  return !Tr() && !!Ca() && navigator.product === M1;
}
function z1() {
  return yr() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function H1() {
  return yr() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function _i() {
  return !fn() && !!Ca() && !!Tr();
}
function ws() {
  return yr() ? rt.reactNative : fn() ? rt.node : _i() ? rt.browser : rt.unknown;
}
function yh() {
  var t;
  try {
    return yr() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function V1(t, e) {
  const r = new URLSearchParams(t);
  for (const i of Object.keys(e).sort()) if (e.hasOwnProperty(i)) {
    const s = e[i];
    s !== void 0 && r.set(i, s);
  }
  return r.toString();
}
function K1(t) {
  var e, r;
  const i = Zf();
  try {
    return t != null && t.url && i.url && new URL(t.url).host !== new URL(i.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${i.url}. This is probably unintended and can lead to issues.`), t.url = i.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((s) => s !== "")), j1(gh(gh({}, i), t), { url: (t == null ? void 0 : t.url) || i.url, name: (t == null ? void 0 : t.name) || i.name, description: (t == null ? void 0 : t.description) || i.description, icons: (r = t == null ? void 0 : t.icons) != null && r.length && t.icons.length > 0 ? t.icons : i.icons });
  } catch (s) {
    return console.warn("Error populating app metadata", s), t || i;
  }
}
function Zf() {
  return Rl() || { name: "", description: "", url: "", icons: [""] };
}
function W1() {
  if (ws() === rt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const t = ag();
  if (t === null) return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function G1() {
  var t;
  const e = ws();
  return e === rt.browser ? [e, ((t = Tl()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Qf(t, e, r) {
  const i = W1(), s = G1();
  return [[t, e].join("-"), [q1, r].join("-"), i, s].join("/");
}
function Y1({ protocol: t, version: e, relayUrl: r, sdkVersion: i, auth: s, projectId: n, useOnCloseEvent: o, bundleId: a, packageName: c }) {
  const h = r.split("?"), u = Qf(t, e, i), l = { auth: s, ua: u, projectId: n, useOnCloseEvent: o, packageName: c || void 0, bundleId: a || void 0 }, f = V1(h[1] || "", l);
  return h[0] + "?" + f;
}
function Dr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Vo(t) {
  return Object.fromEntries(t.entries());
}
function Ko(t) {
  return new Map(Object.entries(t));
}
function _r(t = L.FIVE_MINUTES, e) {
  const r = L.toMiliseconds(t || L.FIVE_MINUTES);
  let i, s, n, o;
  return { resolve: (a) => {
    n && i && (clearTimeout(n), i(a), o = Promise.resolve(a));
  }, reject: (a) => {
    n && s && (clearTimeout(n), s(a));
  }, done: () => new Promise((a, c) => {
    if (o) return a(o);
    n = setTimeout(() => {
      const h = new Error(e);
      o = Promise.reject(h), c(h);
    }, r), i = a, s = c;
  }) };
}
function lr(t, e, r) {
  return new Promise(async (i, s) => {
    const n = setTimeout(() => s(new Error(r)), e);
    try {
      const o = await t;
      i(o);
    } catch (o) {
      s(o);
    }
    clearTimeout(n);
  });
}
function Xf(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function J1(t) {
  return Xf("topic", t);
}
function Z1(t) {
  return Xf("id", t);
}
function ed(t) {
  const [e, r] = t.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string") i.topic = r;
  else if (e === "id" && Number.isInteger(Number(r))) i.id = Number(r);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return i;
}
function we(t, e) {
  return L.fromMiliseconds(Date.now() + L.toMiliseconds(t));
}
function or(t) {
  return Date.now() >= L.toMiliseconds(t);
}
function se(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
function Bt(t = [], e = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e])];
}
async function Q1({ id: t, topic: e, wcDeepLink: r }) {
  var i;
  try {
    if (!r) return;
    const s = typeof r == "string" ? JSON.parse(r) : r, n = s == null ? void 0 : s.href;
    if (typeof n != "string") return;
    const o = X1(n, t, e), a = ws();
    if (a === rt.browser) {
      if (!((i = Tr()) != null && i.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      ev(o);
    } else a === rt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(o);
  } catch (s) {
    console.error(s);
  }
}
function X1(t, e, r) {
  const i = `requestId=${e}&sessionTopic=${r}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let s = `${t}`;
  if (t.startsWith("https://t.me")) {
    const n = t.includes("?") ? "&startapp=" : "?startapp=";
    s = `${s}${n}${sv(i, !0)}`;
  } else s = `${s}/wc?${i}`;
  return s;
}
function ev(t) {
  let e = "_self";
  iv() ? e = "_top" : (rv() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
}
async function tv(t, e) {
  let r = "";
  try {
    if (_i() && (r = localStorage.getItem(e), r)) return r;
    r = await t.getItem(e);
  } catch (i) {
    console.error(i);
  }
  return r;
}
function wh(t, e) {
  if (!t.includes(e)) return null;
  const r = t.split(/([&,?,=])/), i = r.indexOf(e);
  return r[i + 2];
}
function mh() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Ka() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function rv() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function iv() {
  try {
    return window.self !== window.top;
  } catch {
    return !1;
  }
}
function sv(t, e = !1) {
  const r = Buffer.from(t).toString("base64");
  return e ? r.replace(/[=]/g, "") : r;
}
function td(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function nv(t) {
  return new Promise((e) => setTimeout(e, t));
}
const Bs = BigInt(2 ** 32 - 1), bh = BigInt(32);
function rd(t, e = !1) {
  return e ? { h: Number(t & Bs), l: Number(t >> bh & Bs) } : { h: Number(t >> bh & Bs) | 0, l: Number(t & Bs) | 0 };
}
function id(t, e = !1) {
  const r = t.length;
  let i = new Uint32Array(r), s = new Uint32Array(r);
  for (let n = 0; n < r; n++) {
    const { h: o, l: a } = rd(t[n], e);
    [i[n], s[n]] = [o, a];
  }
  return [i, s];
}
const vh = (t, e, r) => t >>> r, Eh = (t, e, r) => t << 32 - r | e >>> r, ar = (t, e, r) => t >>> r | e << 32 - r, cr = (t, e, r) => t << 32 - r | e >>> r, Vi = (t, e, r) => t << 64 - r | e >>> r - 32, Ki = (t, e, r) => t >>> r - 32 | e << 64 - r, ov = (t, e) => e, av = (t, e) => t, cv = (t, e, r) => t << r | e >>> 32 - r, hv = (t, e, r) => e << r | t >>> 32 - r, uv = (t, e, r) => e << r - 32 | t >>> 64 - r, lv = (t, e, r) => t << r - 32 | e >>> 64 - r;
function Et(t, e, r, i) {
  const s = (e >>> 0) + (i >>> 0);
  return { h: t + r + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const Wa = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0), Ga = (t, e, r, i) => e + r + i + (t / 2 ** 32 | 0) | 0, fv = (t, e, r, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0), dv = (t, e, r, i, s) => e + r + i + s + (t / 2 ** 32 | 0) | 0, pv = (t, e, r, i, s) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0) + (s >>> 0), gv = (t, e, r, i, s, n) => e + r + i + s + n + (t / 2 ** 32 | 0) | 0, Wr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function Ya(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Gt(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function ft(t, ...e) {
  if (!Ya(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function Ja(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
  Gt(t.outputLen), Gt(t.blockLen);
}
function gr(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Za(t, e) {
  ft(t);
  const r = e.outputLen;
  if (t.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
}
function as(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function dt(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function oo(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function St(t, e) {
  return t << 32 - e | t >>> e;
}
const sd = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function nd(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
const zt = sd ? (t) => t : (t) => nd(t);
function yv(t) {
  for (let e = 0; e < t.length; e++) t[e] = nd(t[e]);
  return t;
}
const hr = sd ? (t) => t : yv, od = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", wv = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function cs(t) {
  if (ft(t), od) return t.toHex();
  let e = "";
  for (let r = 0; r < t.length; r++) e += wv[t[r]];
  return e;
}
const jt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function _h(t) {
  if (t >= jt._0 && t <= jt._9) return t - jt._0;
  if (t >= jt.A && t <= jt.F) return t - (jt.A - 10);
  if (t >= jt.a && t <= jt.f) return t - (jt.a - 10);
}
function Qa(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  if (od) return Uint8Array.fromHex(t);
  const e = t.length, r = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const i = new Uint8Array(r);
  for (let s = 0, n = 0; s < r; s++, n += 2) {
    const o = _h(t.charCodeAt(n)), a = _h(t.charCodeAt(n + 1));
    if (o === void 0 || a === void 0) {
      const c = t[n] + t[n + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n);
    }
    i[s] = o * 16 + a;
  }
  return i;
}
function mv(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function It(t) {
  return typeof t == "string" && (t = mv(t)), ft(t), t;
}
function Ar(...t) {
  let e = 0;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    ft(s), e += s.length;
  }
  const r = new Uint8Array(e);
  for (let i = 0, s = 0; i < t.length; i++) {
    const n = t[i];
    r.set(n, s), s += n.length;
  }
  return r;
}
let Dn = class {
};
function ms(t) {
  const e = (i) => t().update(It(i)).digest(), r = t();
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = () => t(), e;
}
function bv(t) {
  const e = (i, s) => t(s).update(It(i)).digest(), r = t({});
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = (i) => t(i), e;
}
function Ii(t = 32) {
  if (Wr && typeof Wr.getRandomValues == "function") return Wr.getRandomValues(new Uint8Array(t));
  if (Wr && typeof Wr.randomBytes == "function") return Uint8Array.from(Wr.randomBytes(t));
  throw new Error("crypto.getRandomValues must be defined");
}
const vv = BigInt(0), Ni = BigInt(1), Ev = BigInt(2), _v = BigInt(7), Iv = BigInt(256), xv = BigInt(113), ad = [], cd = [], hd = [];
for (let t = 0, e = Ni, r = 1, i = 0; t < 24; t++) {
  [r, i] = [i, (2 * r + 3 * i) % 5], ad.push(2 * (5 * i + r)), cd.push((t + 1) * (t + 2) / 2 % 64);
  let s = vv;
  for (let n = 0; n < 7; n++) e = (e << Ni ^ (e >> _v) * xv) % Iv, e & Ev && (s ^= Ni << (Ni << BigInt(n)) - Ni);
  hd.push(s);
}
const ud = id(hd, !0), $v = ud[0], Sv = ud[1], Ih = (t, e, r) => r > 32 ? uv(t, e, r) : cv(t, e, r), xh = (t, e, r) => r > 32 ? lv(t, e, r) : hv(t, e, r);
function Dv(t, e = 24) {
  const r = new Uint32Array(10);
  for (let i = 24 - e; i < 24; i++) {
    for (let o = 0; o < 10; o++) r[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, h = r[c], u = r[c + 1], l = Ih(h, u, 1) ^ r[a], f = xh(h, u, 1) ^ r[a + 1];
      for (let p = 0; p < 50; p += 10) t[o + p] ^= l, t[o + p + 1] ^= f;
    }
    let s = t[2], n = t[3];
    for (let o = 0; o < 24; o++) {
      const a = cd[o], c = Ih(s, n, a), h = xh(s, n, a), u = ad[o];
      s = t[u], n = t[u + 1], t[u] = c, t[u + 1] = h;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) r[a] = t[o + a];
      for (let a = 0; a < 10; a++) t[o + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
    }
    t[0] ^= $v[i], t[1] ^= Sv[i];
  }
  dt(r);
}
let Av = class ld extends Dn {
  constructor(e, r, i, s = !1, n = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = e, this.suffix = r, this.outputLen = i, this.enableXOF = s, this.rounds = n, Gt(i), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = as(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    hr(this.state32), Dv(this.state32, this.rounds), hr(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    gr(this), e = It(e), ft(e);
    const { blockLen: r, state: i } = this, s = e.length;
    for (let n = 0; n < s; ) {
      const o = Math.min(r - this.pos, s - n);
      for (let a = 0; a < o; a++) i[this.pos++] ^= e[n++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: e, suffix: r, pos: i, blockLen: s } = this;
    e[i] ^= r, r & 128 && i === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    gr(this, !1), ft(e), this.finish();
    const r = this.state, { blockLen: i } = this;
    for (let s = 0, n = e.length; s < n; ) {
      this.posOut >= i && this.keccak();
      const o = Math.min(i - this.posOut, n - s);
      e.set(r.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return Gt(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (Za(e, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, dt(this.state);
  }
  _cloneInto(e) {
    const { blockLen: r, suffix: i, outputLen: s, rounds: n, enableXOF: o } = this;
    return e || (e = new ld(r, i, s, o, n)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = n, e.suffix = i, e.outputLen = s, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
};
const Ov = (t, e, r) => ms(() => new Av(e, t, r)), Pv = Ov(1, 136, 256 / 8);
function Cv(t, e, r, i) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, r, i);
  const s = BigInt(32), n = BigInt(4294967295), o = Number(r >> s & n), a = Number(r & n), c = i ? 4 : 0, h = i ? 0 : 4;
  t.setUint32(e + c, o, i), t.setUint32(e + h, a, i);
}
function Tv(t, e, r) {
  return t & e ^ ~t & r;
}
function Rv(t, e, r) {
  return t & e ^ t & r ^ e & r;
}
let fd = class extends Dn {
  constructor(e, r, i, s) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = r, this.padOffset = i, this.isLE = s, this.buffer = new Uint8Array(e), this.view = oo(this.buffer);
  }
  update(e) {
    gr(this), e = It(e), ft(e);
    const { view: r, buffer: i, blockLen: s } = this, n = e.length;
    for (let o = 0; o < n; ) {
      const a = Math.min(s - this.pos, n - o);
      if (a === s) {
        const c = oo(e);
        for (; s <= n - o; o += s) this.process(c, o);
        continue;
      }
      i.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(r, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    gr(this), Za(e, this), this.finished = !0;
    const { buffer: r, view: i, blockLen: s, isLE: n } = this;
    let { pos: o } = this;
    r[o++] = 128, dt(this.buffer.subarray(o)), this.padOffset > s - o && (this.process(i, 0), o = 0);
    for (let l = o; l < s; l++) r[l] = 0;
    Cv(i, s - 8, BigInt(this.length * 8), n), this.process(i, 0);
    const a = oo(e), c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = c / 4, u = this.get();
    if (h > u.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l = 0; l < h; l++) a.setUint32(4 * l, u[l], n);
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const i = e.slice(0, r);
    return this.destroy(), i;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: r, buffer: i, length: s, finished: n, destroyed: o, pos: a } = this;
    return e.destroyed = o, e.finished = n, e.length = s, e.pos = a, s % r && e.buffer.set(i), e;
  }
  clone() {
    return this._cloneInto();
  }
};
const er = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), Fe = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]), Ne = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]), Bv = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), tr = new Uint32Array(64);
let Fv = class extends fd {
  constructor(e = 32) {
    super(64, e, 8, !1), this.A = er[0] | 0, this.B = er[1] | 0, this.C = er[2] | 0, this.D = er[3] | 0, this.E = er[4] | 0, this.F = er[5] | 0, this.G = er[6] | 0, this.H = er[7] | 0;
  }
  get() {
    const { A: e, B: r, C: i, D: s, E: n, F: o, G: a, H: c } = this;
    return [e, r, i, s, n, o, a, c];
  }
  set(e, r, i, s, n, o, a, c) {
    this.A = e | 0, this.B = r | 0, this.C = i | 0, this.D = s | 0, this.E = n | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, r) {
    for (let l = 0; l < 16; l++, r += 4) tr[l] = e.getUint32(r, !1);
    for (let l = 16; l < 64; l++) {
      const f = tr[l - 15], p = tr[l - 2], d = St(f, 7) ^ St(f, 18) ^ f >>> 3, g = St(p, 17) ^ St(p, 19) ^ p >>> 10;
      tr[l] = g + tr[l - 7] + d + tr[l - 16] | 0;
    }
    let { A: i, B: s, C: n, D: o, E: a, F: c, G: h, H: u } = this;
    for (let l = 0; l < 64; l++) {
      const f = St(a, 6) ^ St(a, 11) ^ St(a, 25), p = u + f + Tv(a, c, h) + Bv[l] + tr[l] | 0, d = (St(i, 2) ^ St(i, 13) ^ St(i, 22)) + Rv(i, s, n) | 0;
      u = h, h = c, c = a, a = o + p | 0, o = n, n = s, s = i, i = p + d | 0;
    }
    i = i + this.A | 0, s = s + this.B | 0, n = n + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, h = h + this.G | 0, u = u + this.H | 0, this.set(i, s, n, o, a, c, h, u);
  }
  roundClean() {
    dt(tr);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), dt(this.buffer);
  }
};
const dd = id(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))), Nv = dd[0], Uv = dd[1], rr = new Uint32Array(80), ir = new Uint32Array(80);
let Xa = class extends fd {
  constructor(e = 64) {
    super(128, e, 16, !1), this.Ah = Ne[0] | 0, this.Al = Ne[1] | 0, this.Bh = Ne[2] | 0, this.Bl = Ne[3] | 0, this.Ch = Ne[4] | 0, this.Cl = Ne[5] | 0, this.Dh = Ne[6] | 0, this.Dl = Ne[7] | 0, this.Eh = Ne[8] | 0, this.El = Ne[9] | 0, this.Fh = Ne[10] | 0, this.Fl = Ne[11] | 0, this.Gh = Ne[12] | 0, this.Gl = Ne[13] | 0, this.Hh = Ne[14] | 0, this.Hl = Ne[15] | 0;
  }
  get() {
    const { Ah: e, Al: r, Bh: i, Bl: s, Ch: n, Cl: o, Dh: a, Dl: c, Eh: h, El: u, Fh: l, Fl: f, Gh: p, Gl: d, Hh: g, Hl: m } = this;
    return [e, r, i, s, n, o, a, c, h, u, l, f, p, d, g, m];
  }
  set(e, r, i, s, n, o, a, c, h, u, l, f, p, d, g, m) {
    this.Ah = e | 0, this.Al = r | 0, this.Bh = i | 0, this.Bl = s | 0, this.Ch = n | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = h | 0, this.El = u | 0, this.Fh = l | 0, this.Fl = f | 0, this.Gh = p | 0, this.Gl = d | 0, this.Hh = g | 0, this.Hl = m | 0;
  }
  process(e, r) {
    for (let E = 0; E < 16; E++, r += 4) rr[E] = e.getUint32(r), ir[E] = e.getUint32(r += 4);
    for (let E = 16; E < 80; E++) {
      const P = rr[E - 15] | 0, A = ir[E - 15] | 0, k = ar(P, A, 1) ^ ar(P, A, 8) ^ vh(P, A, 7), U = cr(P, A, 1) ^ cr(P, A, 8) ^ Eh(P, A, 7), R = rr[E - 2] | 0, b = ir[E - 2] | 0, C = ar(R, b, 19) ^ Vi(R, b, 61) ^ vh(R, b, 6), S = cr(R, b, 19) ^ Ki(R, b, 61) ^ Eh(R, b, 6), D = fv(U, S, ir[E - 7], ir[E - 16]), T = dv(D, k, C, rr[E - 7], rr[E - 16]);
      rr[E] = T | 0, ir[E] = D | 0;
    }
    let { Ah: i, Al: s, Bh: n, Bl: o, Ch: a, Cl: c, Dh: h, Dl: u, Eh: l, El: f, Fh: p, Fl: d, Gh: g, Gl: m, Hh: _, Hl: I } = this;
    for (let E = 0; E < 80; E++) {
      const P = ar(l, f, 14) ^ ar(l, f, 18) ^ Vi(l, f, 41), A = cr(l, f, 14) ^ cr(l, f, 18) ^ Ki(l, f, 41), k = l & p ^ ~l & g, U = f & d ^ ~f & m, R = pv(I, A, U, Uv[E], ir[E]), b = gv(R, _, P, k, Nv[E], rr[E]), C = R | 0, S = ar(i, s, 28) ^ Vi(i, s, 34) ^ Vi(i, s, 39), D = cr(i, s, 28) ^ Ki(i, s, 34) ^ Ki(i, s, 39), T = i & n ^ i & a ^ n & a, N = s & o ^ s & c ^ o & c;
      _ = g | 0, I = m | 0, g = p | 0, m = d | 0, p = l | 0, d = f | 0, { h: l, l: f } = Et(h | 0, u | 0, b | 0, C | 0), h = a | 0, u = c | 0, a = n | 0, c = o | 0, n = i | 0, o = s | 0;
      const y = Wa(C, D, N);
      i = Ga(y, b, S, T), s = y | 0;
    }
    ({ h: i, l: s } = Et(this.Ah | 0, this.Al | 0, i | 0, s | 0)), { h: n, l: o } = Et(this.Bh | 0, this.Bl | 0, n | 0, o | 0), { h: a, l: c } = Et(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h, l: u } = Et(this.Dh | 0, this.Dl | 0, h | 0, u | 0), { h: l, l: f } = Et(this.Eh | 0, this.El | 0, l | 0, f | 0), { h: p, l: d } = Et(this.Fh | 0, this.Fl | 0, p | 0, d | 0), { h: g, l: m } = Et(this.Gh | 0, this.Gl | 0, g | 0, m | 0), { h: _, l: I } = Et(this.Hh | 0, this.Hl | 0, _ | 0, I | 0), this.set(i, s, n, o, a, c, h, u, l, f, p, d, g, m, _, I);
  }
  roundClean() {
    dt(rr, ir);
  }
  destroy() {
    dt(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}, kv = class extends Xa {
  constructor() {
    super(48), this.Ah = Fe[0] | 0, this.Al = Fe[1] | 0, this.Bh = Fe[2] | 0, this.Bl = Fe[3] | 0, this.Ch = Fe[4] | 0, this.Cl = Fe[5] | 0, this.Dh = Fe[6] | 0, this.Dl = Fe[7] | 0, this.Eh = Fe[8] | 0, this.El = Fe[9] | 0, this.Fh = Fe[10] | 0, this.Fl = Fe[11] | 0, this.Gh = Fe[12] | 0, this.Gl = Fe[13] | 0, this.Hh = Fe[14] | 0, this.Hl = Fe[15] | 0;
  }
};
const Ue = Uint32Array.from([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882]);
let Lv = class extends Xa {
  constructor() {
    super(32), this.Ah = Ue[0] | 0, this.Al = Ue[1] | 0, this.Bh = Ue[2] | 0, this.Bl = Ue[3] | 0, this.Ch = Ue[4] | 0, this.Cl = Ue[5] | 0, this.Dh = Ue[6] | 0, this.Dl = Ue[7] | 0, this.Eh = Ue[8] | 0, this.El = Ue[9] | 0, this.Fh = Ue[10] | 0, this.Fl = Ue[11] | 0, this.Gh = Ue[12] | 0, this.Gl = Ue[13] | 0, this.Hh = Ue[14] | 0, this.Hl = Ue[15] | 0;
  }
};
const An = ms(() => new Fv()), jv = ms(() => new Xa()), Mv = ms(() => new kv()), qv = ms(() => new Lv()), zv = Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]), ye = Uint32Array.from([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]), z = new Uint32Array(32);
function sr(t, e, r, i, s, n) {
  const o = s[n], a = s[n + 1];
  let c = z[2 * t], h = z[2 * t + 1], u = z[2 * e], l = z[2 * e + 1], f = z[2 * r], p = z[2 * r + 1], d = z[2 * i], g = z[2 * i + 1], m = Wa(c, u, o);
  h = Ga(m, h, l, a), c = m | 0, { Dh: g, Dl: d } = { Dh: g ^ h, Dl: d ^ c }, { Dh: g, Dl: d } = { Dh: ov(g, d), Dl: av(g) }, { h: p, l: f } = Et(p, f, g, d), { Bh: l, Bl: u } = { Bh: l ^ p, Bl: u ^ f }, { Bh: l, Bl: u } = { Bh: ar(l, u, 24), Bl: cr(l, u, 24) }, z[2 * t] = c, z[2 * t + 1] = h, z[2 * e] = u, z[2 * e + 1] = l, z[2 * r] = f, z[2 * r + 1] = p, z[2 * i] = d, z[2 * i + 1] = g;
}
function nr(t, e, r, i, s, n) {
  const o = s[n], a = s[n + 1];
  let c = z[2 * t], h = z[2 * t + 1], u = z[2 * e], l = z[2 * e + 1], f = z[2 * r], p = z[2 * r + 1], d = z[2 * i], g = z[2 * i + 1], m = Wa(c, u, o);
  h = Ga(m, h, l, a), c = m | 0, { Dh: g, Dl: d } = { Dh: g ^ h, Dl: d ^ c }, { Dh: g, Dl: d } = { Dh: ar(g, d, 16), Dl: cr(g, d, 16) }, { h: p, l: f } = Et(p, f, g, d), { Bh: l, Bl: u } = { Bh: l ^ p, Bl: u ^ f }, { Bh: l, Bl: u } = { Bh: Vi(l, u, 63), Bl: Ki(l, u, 63) }, z[2 * t] = c, z[2 * t + 1] = h, z[2 * e] = u, z[2 * e + 1] = l, z[2 * r] = f, z[2 * r + 1] = p, z[2 * i] = d, z[2 * i + 1] = g;
}
function Hv(t, e = {}, r, i, s) {
  if (Gt(r), t < 0 || t > r) throw new Error("outputLen bigger than keyLen");
  const { key: n, salt: o, personalization: a } = e;
  if (n !== void 0 && (n.length < 1 || n.length > r)) throw new Error("key length must be undefined or 1.." + r);
  if (o !== void 0 && o.length !== i) throw new Error("salt must be undefined or " + i);
  if (a !== void 0 && a.length !== s) throw new Error("personalization must be undefined or " + s);
}
class Vv extends Dn {
  constructor(e, r) {
    super(), this.finished = !1, this.destroyed = !1, this.length = 0, this.pos = 0, Gt(e), Gt(r), this.blockLen = e, this.outputLen = r, this.buffer = new Uint8Array(e), this.buffer32 = as(this.buffer);
  }
  update(e) {
    gr(this), e = It(e), ft(e);
    const { blockLen: r, buffer: i, buffer32: s } = this, n = e.length, o = e.byteOffset, a = e.buffer;
    for (let c = 0; c < n; ) {
      this.pos === r && (hr(s), this.compress(s, 0, !1), hr(s), this.pos = 0);
      const h = Math.min(r - this.pos, n - c), u = o + c;
      if (h === r && !(u % 4) && c + h < n) {
        const l = new Uint32Array(a, u, Math.floor((n - c) / 4));
        hr(l);
        for (let f = 0; c + r < n; f += s.length, c += r) this.length += r, this.compress(l, f, !1);
        hr(l);
        continue;
      }
      i.set(e.subarray(c, c + h), this.pos), this.pos += h, this.length += h, c += h;
    }
    return this;
  }
  digestInto(e) {
    gr(this), Za(e, this);
    const { pos: r, buffer32: i } = this;
    this.finished = !0, dt(this.buffer.subarray(r)), hr(i), this.compress(i, 0, !0), hr(i);
    const s = as(e);
    this.get().forEach((n, o) => s[o] = zt(n));
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const i = e.slice(0, r);
    return this.destroy(), i;
  }
  _cloneInto(e) {
    const { buffer: r, length: i, finished: s, destroyed: n, outputLen: o, pos: a } = this;
    return e || (e = new this.constructor({ dkLen: o })), e.set(...this.get()), e.buffer.set(r), e.destroyed = n, e.finished = s, e.length = i, e.pos = a, e.outputLen = o, e;
  }
  clone() {
    return this._cloneInto();
  }
}
class Kv extends Vv {
  constructor(e = {}) {
    const r = e.dkLen === void 0 ? 64 : e.dkLen;
    super(128, r), this.v0l = ye[0] | 0, this.v0h = ye[1] | 0, this.v1l = ye[2] | 0, this.v1h = ye[3] | 0, this.v2l = ye[4] | 0, this.v2h = ye[5] | 0, this.v3l = ye[6] | 0, this.v3h = ye[7] | 0, this.v4l = ye[8] | 0, this.v4h = ye[9] | 0, this.v5l = ye[10] | 0, this.v5h = ye[11] | 0, this.v6l = ye[12] | 0, this.v6h = ye[13] | 0, this.v7l = ye[14] | 0, this.v7h = ye[15] | 0, Hv(r, e, 64, 16, 16);
    let { key: i, personalization: s, salt: n } = e, o = 0;
    if (i !== void 0 && (i = It(i), o = i.length), this.v0l ^= this.outputLen | o << 8 | 65536 | 1 << 24, n !== void 0) {
      n = It(n);
      const a = as(n);
      this.v4l ^= zt(a[0]), this.v4h ^= zt(a[1]), this.v5l ^= zt(a[2]), this.v5h ^= zt(a[3]);
    }
    if (s !== void 0) {
      s = It(s);
      const a = as(s);
      this.v6l ^= zt(a[0]), this.v6h ^= zt(a[1]), this.v7l ^= zt(a[2]), this.v7h ^= zt(a[3]);
    }
    if (i !== void 0) {
      const a = new Uint8Array(this.blockLen);
      a.set(i), this.update(a);
    }
  }
  get() {
    let { v0l: e, v0h: r, v1l: i, v1h: s, v2l: n, v2h: o, v3l: a, v3h: c, v4l: h, v4h: u, v5l: l, v5h: f, v6l: p, v6h: d, v7l: g, v7h: m } = this;
    return [e, r, i, s, n, o, a, c, h, u, l, f, p, d, g, m];
  }
  set(e, r, i, s, n, o, a, c, h, u, l, f, p, d, g, m) {
    this.v0l = e | 0, this.v0h = r | 0, this.v1l = i | 0, this.v1h = s | 0, this.v2l = n | 0, this.v2h = o | 0, this.v3l = a | 0, this.v3h = c | 0, this.v4l = h | 0, this.v4h = u | 0, this.v5l = l | 0, this.v5h = f | 0, this.v6l = p | 0, this.v6h = d | 0, this.v7l = g | 0, this.v7h = m | 0;
  }
  compress(e, r, i) {
    this.get().forEach((c, h) => z[h] = c), z.set(ye, 16);
    let { h: s, l: n } = rd(BigInt(this.length));
    z[24] = ye[8] ^ n, z[25] = ye[9] ^ s, i && (z[28] = ~z[28], z[29] = ~z[29]);
    let o = 0;
    const a = zv;
    for (let c = 0; c < 12; c++) sr(0, 4, 8, 12, e, r + 2 * a[o++]), nr(0, 4, 8, 12, e, r + 2 * a[o++]), sr(1, 5, 9, 13, e, r + 2 * a[o++]), nr(1, 5, 9, 13, e, r + 2 * a[o++]), sr(2, 6, 10, 14, e, r + 2 * a[o++]), nr(2, 6, 10, 14, e, r + 2 * a[o++]), sr(3, 7, 11, 15, e, r + 2 * a[o++]), nr(3, 7, 11, 15, e, r + 2 * a[o++]), sr(0, 5, 10, 15, e, r + 2 * a[o++]), nr(0, 5, 10, 15, e, r + 2 * a[o++]), sr(1, 6, 11, 12, e, r + 2 * a[o++]), nr(1, 6, 11, 12, e, r + 2 * a[o++]), sr(2, 7, 8, 13, e, r + 2 * a[o++]), nr(2, 7, 8, 13, e, r + 2 * a[o++]), sr(3, 4, 9, 14, e, r + 2 * a[o++]), nr(3, 4, 9, 14, e, r + 2 * a[o++]);
    this.v0l ^= z[0] ^ z[16], this.v0h ^= z[1] ^ z[17], this.v1l ^= z[2] ^ z[18], this.v1h ^= z[3] ^ z[19], this.v2l ^= z[4] ^ z[20], this.v2h ^= z[5] ^ z[21], this.v3l ^= z[6] ^ z[22], this.v3h ^= z[7] ^ z[23], this.v4l ^= z[8] ^ z[24], this.v4h ^= z[9] ^ z[25], this.v5l ^= z[10] ^ z[26], this.v5h ^= z[11] ^ z[27], this.v6l ^= z[12] ^ z[28], this.v6h ^= z[13] ^ z[29], this.v7l ^= z[14] ^ z[30], this.v7h ^= z[15] ^ z[31], dt(z);
  }
  destroy() {
    this.destroyed = !0, dt(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const Wv = bv((t) => new Kv(t)), Gv = "https://rpc.walletconnect.org/v1";
function pd(t) {
  const e = `Ethereum Signed Message:
${t.length}`, r = new TextEncoder().encode(e + t);
  return "0x" + Buffer.from(Pv(r)).toString("hex");
}
async function Yv(t, e, r, i, s, n) {
  switch (r.t) {
    case "eip191":
      return await Jv(t, e, r.s);
    case "eip1271":
      return await Zv(t, e, r.s, i, s, n);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`);
  }
}
async function Jv(t, e, r) {
  return (await jy({ hash: pd(e), signature: r })).toLowerCase() === t.toLowerCase();
}
async function Zv(t, e, r, i, s, n) {
  const o = gi(i);
  if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`);
  try {
    const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", h = r.substring(2), u = (h.length / 2).toString(16).padStart(64, "0"), l = (e.startsWith("0x") ? e : pd(e)).substring(2), f = a + l + c + u + h, p = await fetch(`${n || Gv}/?chainId=${i}&projectId=${s}`, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ id: Qv(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: f }, "latest"] }) }), { result: d } = await p.json();
    return d ? d.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1;
  } catch (a) {
    return console.error("isValidEip1271Signature: ", a), !1;
  }
}
function Qv() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function Xv(t) {
  const e = atob(t), r = new Uint8Array(e.length);
  for (let o = 0; o < e.length; o++) r[o] = e.charCodeAt(o);
  const i = r[0];
  if (i === 0) throw new Error("No signatures found");
  const s = 1 + i * 64;
  if (r.length < s) throw new Error("Transaction data too short for claimed signature count");
  if (r.length < 100) throw new Error("Transaction too short");
  const n = Buffer.from(t, "base64").slice(1, 65);
  return ps.encode(n);
}
function e2(t) {
  const e = new Uint8Array(Buffer.from(t, "base64")), r = Array.from("TransactionData::").map((n) => n.charCodeAt(0)), i = new Uint8Array(r.length + e.length);
  i.set(r), i.set(e, r.length);
  const s = Wv(i, { dkLen: 32 });
  return ps.encode(s);
}
function $h(t) {
  const e = new Uint8Array(An(t2(t)));
  return ps.encode(e);
}
function t2(t) {
  if (t instanceof Uint8Array) return t;
  if (Array.isArray(t)) return new Uint8Array(t);
  if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
  if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
  throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
}
function Sh(t) {
  const e = Buffer.from(t, "base64"), r = xw(e).txn;
  if (!r) throw new Error("Invalid signed transaction: missing 'txn' field");
  const i = gw(r), s = Buffer.from("TX"), n = Buffer.concat([s, Buffer.from(i)]), o = qv(n);
  return Tw.encode(o).replace(/=+$/, "");
}
function ao(t) {
  const e = [];
  let r = BigInt(t);
  for (; r >= BigInt(128); ) e.push(Number(r & BigInt(127) | BigInt(128))), r >>= BigInt(7);
  return e.push(Number(r)), Buffer.from(e);
}
function r2(t) {
  const e = Buffer.from(t.signed.bodyBytes, "base64"), r = Buffer.from(t.signed.authInfoBytes, "base64"), i = Buffer.from(t.signature.signature, "base64"), s = [];
  s.push(Buffer.from([10])), s.push(ao(e.length)), s.push(e), s.push(Buffer.from([18])), s.push(ao(r.length)), s.push(r), s.push(Buffer.from([26])), s.push(ao(i.length)), s.push(i);
  const n = Buffer.concat(s), o = An(n);
  return Buffer.from(o).toString("hex").toUpperCase();
}
var i2 = Object.defineProperty, s2 = Object.defineProperties, n2 = Object.getOwnPropertyDescriptors, Dh = Object.getOwnPropertySymbols, o2 = Object.prototype.hasOwnProperty, a2 = Object.prototype.propertyIsEnumerable, Ah = (t, e, r) => e in t ? i2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, c2 = (t, e) => {
  for (var r in e || (e = {})) o2.call(e, r) && Ah(t, r, e[r]);
  if (Dh) for (var r of Dh(e)) a2.call(e, r) && Ah(t, r, e[r]);
  return t;
}, h2 = (t, e) => s2(t, n2(e));
const u2 = "did:pkh:", ec = (t) => t == null ? void 0 : t.split(":"), l2 = (t) => {
  const e = t && ec(t);
  if (e) return t.includes(u2) ? e[3] : e[1];
}, Wo = (t) => {
  const e = t && ec(t);
  if (e) return e[2] + ":" + e[3];
}, dn = (t) => {
  const e = t && ec(t);
  if (e) return e.pop();
};
async function Oh(t) {
  const { cacao: e, projectId: r } = t, { s: i, p: s } = e, n = gd(s, s.iss), o = dn(s.iss);
  return await Yv(o, n, i, Wo(s.iss), r);
}
const gd = (t, e) => {
  const r = `${t.domain} wants you to sign in with your Ethereum account:`, i = dn(e);
  if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let s = t.statement || void 0;
  const n = `URI: ${t.aud || t.uri}`, o = `Version: ${t.version}`, a = `Chain ID: ${l2(e)}`, c = `Nonce: ${t.nonce}`, h = `Issued At: ${t.iat}`, u = t.exp ? `Expiration Time: ${t.exp}` : void 0, l = t.nbf ? `Not Before: ${t.nbf}` : void 0, f = t.requestId ? `Request ID: ${t.requestId}` : void 0, p = t.resources ? `Resources:${t.resources.map((g) => `
- ${g}`).join("")}` : void 0, d = Qs(t.resources);
  if (d) {
    const g = hs(d);
    s = v2(s, g);
  }
  return [r, i, "", s, "", n, o, a, c, h, u, l, f, p].filter((g) => g != null).join(`
`);
};
function f2(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function d2(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function Fr(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  const e = Object.keys(t.att);
  if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
  e.forEach((r) => {
    const i = t.att[r];
    if (Array.isArray(i)) throw new Error(`Resource must be an object: ${r}`);
    if (typeof i != "object") throw new Error(`Resource must be an object: ${r}`);
    if (!Object.keys(i).length) throw new Error(`Resource object is empty: ${r}`);
    Object.keys(i).forEach((s) => {
      const n = i[s];
      if (!Array.isArray(n)) throw new Error(`Ability limits ${s} must be an array of objects, found: ${n}`);
      if (!n.length) throw new Error(`Value of ${s} is empty array, must be an array with objects`);
      n.forEach((o) => {
        if (typeof o != "object") throw new Error(`Ability limits (${s}) must be an array of objects, found: ${o}`);
      });
    });
  });
}
function p2(t, e, r, i = {}) {
  return r == null || r.sort((s, n) => s.localeCompare(n)), { att: { [t]: g2(e, r, i) } };
}
function g2(t, e, r = {}) {
  e = e == null ? void 0 : e.sort((s, n) => s.localeCompare(n));
  const i = e.map((s) => ({ [`${t}/${s}`]: [r] }));
  return Object.assign({}, ...i);
}
function yd(t) {
  return Fr(t), `urn:recap:${f2(t).replace(/=/g, "")}`;
}
function hs(t) {
  const e = d2(t.replace("urn:recap:", ""));
  return Fr(e), e;
}
function y2(t, e, r) {
  const i = p2(t, e, r);
  return yd(i);
}
function w2(t) {
  return t && t.includes("urn:recap:");
}
function m2(t, e) {
  const r = hs(t), i = hs(e), s = b2(r, i);
  return yd(s);
}
function b2(t, e) {
  Fr(t), Fr(e);
  const r = Object.keys(t.att).concat(Object.keys(e.att)).sort((s, n) => s.localeCompare(n)), i = { att: {} };
  return r.forEach((s) => {
    var n, o;
    Object.keys(((n = t.att) == null ? void 0 : n[s]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[s]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
      var c, h;
      i.att[s] = h2(c2({}, i.att[s]), { [a]: ((c = t.att[s]) == null ? void 0 : c[a]) || ((h = e.att[s]) == null ? void 0 : h[a]) });
    });
  }), i;
}
function v2(t = "", e) {
  Fr(e);
  const r = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(r)) return t;
  const i = [];
  let s = 0;
  Object.keys(e.att).forEach((a) => {
    const c = Object.keys(e.att[a]).map((l) => ({ ability: l.split("/")[0], action: l.split("/")[1] }));
    c.sort((l, f) => l.action.localeCompare(f.action));
    const h = {};
    c.forEach((l) => {
      h[l.ability] || (h[l.ability] = []), h[l.ability].push(l.action);
    });
    const u = Object.keys(h).map((l) => (s++, `(${s}) '${l}': '${h[l].join("', '")}' for '${a}'.`));
    i.push(u.join(", ").replace(".,", "."));
  });
  const n = i.join(" "), o = `${r}${n}`;
  return `${t ? t + " " : ""}${o}`;
}
function Ph(t) {
  var e;
  const r = hs(t);
  Fr(r);
  const i = (e = r.att) == null ? void 0 : e.eip155;
  return i ? Object.keys(i).map((s) => s.split("/")[1]) : [];
}
function Ch(t) {
  const e = hs(t);
  Fr(e);
  const r = [];
  return Object.values(e.att).forEach((i) => {
    Object.values(i).forEach((s) => {
      var n;
      (n = s == null ? void 0 : s[0]) != null && n.chains && r.push(s[0].chains);
    });
  }), [...new Set(r.flat())];
}
function Qs(t) {
  if (!t) return;
  const e = t == null ? void 0 : t[t.length - 1];
  return w2(e) ? e : void 0;
}
/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */
function wd(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Go(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
function co(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Ge(t, ...e) {
  if (!wd(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function Th(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function E2(t, e) {
  Ge(t);
  const r = e.outputLen;
  if (t.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
}
function dr(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function yi(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function _2(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
const I2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function x2(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function Yo(t) {
  if (typeof t == "string") t = x2(t);
  else if (wd(t)) t = Jo(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function $2(t, e) {
  if (e == null || typeof e != "object") throw new Error("options must be defined");
  return Object.assign(t, e);
}
function S2(t, e) {
  if (t.length !== e.length) return !1;
  let r = 0;
  for (let i = 0; i < t.length; i++) r |= t[i] ^ e[i];
  return r === 0;
}
const D2 = (t, e) => {
  function r(i, ...s) {
    if (Ge(i), !I2) throw new Error("Non little-endian hardware is not yet supported");
    if (t.nonceLength !== void 0) {
      const h = s[0];
      if (!h) throw new Error("nonce / iv required");
      t.varSizeNonce ? Ge(h) : Ge(h, t.nonceLength);
    }
    const n = t.tagLength;
    n && s[1] !== void 0 && Ge(s[1]);
    const o = e(i, ...s), a = (h, u) => {
      if (u !== void 0) {
        if (h !== 2) throw new Error("cipher output not supported");
        Ge(u);
      }
    };
    let c = !1;
    return { encrypt(h, u) {
      if (c) throw new Error("cannot encrypt() twice with same key + nonce");
      return c = !0, Ge(h), a(o.encrypt.length, u), o.encrypt(h, u);
    }, decrypt(h, u) {
      if (Ge(h), n && h.length < n) throw new Error("invalid ciphertext length: smaller than tagLength=" + n);
      return a(o.decrypt.length, u), o.decrypt(h, u);
    } };
  }
  return Object.assign(r, t), r;
};
function Rh(t, e, r = !0) {
  if (e === void 0) return new Uint8Array(t);
  if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
  if (r && !O2(e)) throw new Error("invalid output, must be aligned");
  return e;
}
function Bh(t, e, r, i) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, r, i);
  const s = BigInt(32), n = BigInt(4294967295), o = Number(r >> s & n), a = Number(r & n);
  t.setUint32(e + 4, o, i), t.setUint32(e + 0, a, i);
}
function A2(t, e, r) {
  Go(r);
  const i = new Uint8Array(16), s = _2(i);
  return Bh(s, 0, BigInt(e), r), Bh(s, 8, BigInt(t), r), i;
}
function O2(t) {
  return t.byteOffset % 4 === 0;
}
function Jo(t) {
  return Uint8Array.from(t);
}
const md = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), P2 = md("expand 16-byte k"), C2 = md("expand 32-byte k"), T2 = dr(P2), R2 = dr(C2);
function Q(t, e) {
  return t << e | t >>> 32 - e;
}
function Zo(t) {
  return t.byteOffset % 4 === 0;
}
const Fs = 64, B2 = 16, bd = 2 ** 32 - 1, Fh = new Uint32Array();
function F2(t, e, r, i, s, n, o, a) {
  const c = s.length, h = new Uint8Array(Fs), u = dr(h), l = Zo(s) && Zo(n), f = l ? dr(s) : Fh, p = l ? dr(n) : Fh;
  for (let d = 0; d < c; o++) {
    if (t(e, r, i, u, o, a), o >= bd) throw new Error("arx: counter overflow");
    const g = Math.min(Fs, c - d);
    if (l && g === Fs) {
      const m = d / 4;
      if (d % 4 !== 0) throw new Error("arx: invalid block position");
      for (let _ = 0, I; _ < B2; _++) I = m + _, p[I] = f[I] ^ u[_];
      d += Fs;
      continue;
    }
    for (let m = 0, _; m < g; m++) _ = d + m, n[_] = s[_] ^ h[m];
    d += g;
  }
}
function N2(t, e) {
  const { allowShortKeys: r, extendNonceFn: i, counterLength: s, counterRight: n, rounds: o } = $2({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, e);
  if (typeof t != "function") throw new Error("core must be a function");
  return co(s), co(o), Go(n), Go(r), (a, c, h, u, l = 0) => {
    Ge(a), Ge(c), Ge(h);
    const f = h.length;
    if (u === void 0 && (u = new Uint8Array(f)), Ge(u), co(l), l < 0 || l >= bd) throw new Error("arx: counter overflow");
    if (u.length < f) throw new Error(`arx: output (${u.length}) is shorter than data (${f})`);
    const p = [];
    let d = a.length, g, m;
    if (d === 32) p.push(g = Jo(a)), m = R2;
    else if (d === 16 && r) g = new Uint8Array(32), g.set(a), g.set(a, 16), m = T2, p.push(g);
    else throw new Error(`arx: invalid 32-byte key, got length=${d}`);
    Zo(c) || p.push(c = Jo(c));
    const _ = dr(g);
    if (i) {
      if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      i(m, _, dr(c.subarray(0, 16)), _), c = c.subarray(16);
    }
    const I = 16 - s;
    if (I !== c.length) throw new Error(`arx: nonce must be ${I} or 16 bytes`);
    if (I !== 12) {
      const P = new Uint8Array(12);
      P.set(c, n ? 0 : 12 - c.length), c = P, p.push(c);
    }
    const E = dr(c);
    return F2(t, m, _, E, h, u, l, o), yi(...p), u;
  };
}
const Se = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
class U2 {
  constructor(e) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, e = Yo(e), Ge(e, 32);
    const r = Se(e, 0), i = Se(e, 2), s = Se(e, 4), n = Se(e, 6), o = Se(e, 8), a = Se(e, 10), c = Se(e, 12), h = Se(e, 14);
    this.r[0] = r & 8191, this.r[1] = (r >>> 13 | i << 3) & 8191, this.r[2] = (i >>> 10 | s << 6) & 7939, this.r[3] = (s >>> 7 | n << 9) & 8191, this.r[4] = (n >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | h << 8) & 8191, this.r[9] = h >>> 5 & 127;
    for (let u = 0; u < 8; u++) this.pad[u] = Se(e, 16 + 2 * u);
  }
  process(e, r, i = !1) {
    const s = i ? 0 : 2048, { h: n, r: o } = this, a = o[0], c = o[1], h = o[2], u = o[3], l = o[4], f = o[5], p = o[6], d = o[7], g = o[8], m = o[9], _ = Se(e, r + 0), I = Se(e, r + 2), E = Se(e, r + 4), P = Se(e, r + 6), A = Se(e, r + 8), k = Se(e, r + 10), U = Se(e, r + 12), R = Se(e, r + 14);
    let b = n[0] + (_ & 8191), C = n[1] + ((_ >>> 13 | I << 3) & 8191), S = n[2] + ((I >>> 10 | E << 6) & 8191), D = n[3] + ((E >>> 7 | P << 9) & 8191), T = n[4] + ((P >>> 4 | A << 12) & 8191), N = n[5] + (A >>> 1 & 8191), y = n[6] + ((A >>> 14 | k << 2) & 8191), w = n[7] + ((k >>> 11 | U << 5) & 8191), v = n[8] + ((U >>> 8 | R << 8) & 8191), $ = n[9] + (R >>> 5 | s), x = 0, O = x + b * a + C * (5 * m) + S * (5 * g) + D * (5 * d) + T * (5 * p);
    x = O >>> 13, O &= 8191, O += N * (5 * f) + y * (5 * l) + w * (5 * u) + v * (5 * h) + $ * (5 * c), x += O >>> 13, O &= 8191;
    let B = x + b * c + C * a + S * (5 * m) + D * (5 * g) + T * (5 * d);
    x = B >>> 13, B &= 8191, B += N * (5 * p) + y * (5 * f) + w * (5 * l) + v * (5 * u) + $ * (5 * h), x += B >>> 13, B &= 8191;
    let q = x + b * h + C * c + S * a + D * (5 * m) + T * (5 * g);
    x = q >>> 13, q &= 8191, q += N * (5 * d) + y * (5 * p) + w * (5 * f) + v * (5 * l) + $ * (5 * u), x += q >>> 13, q &= 8191;
    let H = x + b * u + C * h + S * c + D * a + T * (5 * m);
    x = H >>> 13, H &= 8191, H += N * (5 * g) + y * (5 * d) + w * (5 * p) + v * (5 * f) + $ * (5 * l), x += H >>> 13, H &= 8191;
    let M = x + b * l + C * u + S * h + D * c + T * a;
    x = M >>> 13, M &= 8191, M += N * (5 * m) + y * (5 * g) + w * (5 * d) + v * (5 * p) + $ * (5 * f), x += M >>> 13, M &= 8191;
    let V = x + b * f + C * l + S * u + D * h + T * c;
    x = V >>> 13, V &= 8191, V += N * a + y * (5 * m) + w * (5 * g) + v * (5 * d) + $ * (5 * p), x += V >>> 13, V &= 8191;
    let K = x + b * p + C * f + S * l + D * u + T * h;
    x = K >>> 13, K &= 8191, K += N * c + y * a + w * (5 * m) + v * (5 * g) + $ * (5 * d), x += K >>> 13, K &= 8191;
    let ie = x + b * d + C * p + S * f + D * l + T * u;
    x = ie >>> 13, ie &= 8191, ie += N * h + y * c + w * a + v * (5 * m) + $ * (5 * g), x += ie >>> 13, ie &= 8191;
    let re = x + b * g + C * d + S * p + D * f + T * l;
    x = re >>> 13, re &= 8191, re += N * u + y * h + w * c + v * a + $ * (5 * m), x += re >>> 13, re &= 8191;
    let Y = x + b * m + C * g + S * d + D * p + T * f;
    x = Y >>> 13, Y &= 8191, Y += N * l + y * u + w * h + v * c + $ * a, x += Y >>> 13, Y &= 8191, x = (x << 2) + x | 0, x = x + O | 0, O = x & 8191, x = x >>> 13, B += x, n[0] = O, n[1] = B, n[2] = q, n[3] = H, n[4] = M, n[5] = V, n[6] = K, n[7] = ie, n[8] = re, n[9] = Y;
  }
  finalize() {
    const { h: e, pad: r } = this, i = new Uint16Array(10);
    let s = e[1] >>> 13;
    e[1] &= 8191;
    for (let a = 2; a < 10; a++) e[a] += s, s = e[a] >>> 13, e[a] &= 8191;
    e[0] += s * 5, s = e[0] >>> 13, e[0] &= 8191, e[1] += s, s = e[1] >>> 13, e[1] &= 8191, e[2] += s, i[0] = e[0] + 5, s = i[0] >>> 13, i[0] &= 8191;
    for (let a = 1; a < 10; a++) i[a] = e[a] + s, s = i[a] >>> 13, i[a] &= 8191;
    i[9] -= 8192;
    let n = (s ^ 1) - 1;
    for (let a = 0; a < 10; a++) i[a] &= n;
    n = ~n;
    for (let a = 0; a < 10; a++) e[a] = e[a] & n | i[a];
    e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
    let o = e[0] + r[0];
    e[0] = o & 65535;
    for (let a = 1; a < 8; a++) o = (e[a] + r[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
    yi(i);
  }
  update(e) {
    Th(this), e = Yo(e), Ge(e);
    const { buffer: r, blockLen: i } = this, s = e.length;
    for (let n = 0; n < s; ) {
      const o = Math.min(i - this.pos, s - n);
      if (o === i) {
        for (; i <= s - n; n += i) this.process(e, n);
        continue;
      }
      r.set(e.subarray(n, n + o), this.pos), this.pos += o, n += o, this.pos === i && (this.process(r, 0, !1), this.pos = 0);
    }
    return this;
  }
  destroy() {
    yi(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e) {
    Th(this), E2(e, this), this.finished = !0;
    const { buffer: r, h: i } = this;
    let { pos: s } = this;
    if (s) {
      for (r[s++] = 1; s < 16; s++) r[s] = 0;
      this.process(r, 0, !0);
    }
    this.finalize();
    let n = 0;
    for (let o = 0; o < 8; o++) e[n++] = i[o] >>> 0, e[n++] = i[o] >>> 8;
    return e;
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const i = e.slice(0, r);
    return this.destroy(), i;
  }
}
function k2(t) {
  const e = (i, s) => t(s).update(Yo(i)).digest(), r = t(new Uint8Array(32));
  return e.outputLen = r.outputLen, e.blockLen = r.blockLen, e.create = (i) => t(i), e;
}
const L2 = k2((t) => new U2(t));
function j2(t, e, r, i, s, n = 20) {
  let o = t[0], a = t[1], c = t[2], h = t[3], u = e[0], l = e[1], f = e[2], p = e[3], d = e[4], g = e[5], m = e[6], _ = e[7], I = s, E = r[0], P = r[1], A = r[2], k = o, U = a, R = c, b = h, C = u, S = l, D = f, T = p, N = d, y = g, w = m, v = _, $ = I, x = E, O = P, B = A;
  for (let H = 0; H < n; H += 2) k = k + C | 0, $ = Q($ ^ k, 16), N = N + $ | 0, C = Q(C ^ N, 12), k = k + C | 0, $ = Q($ ^ k, 8), N = N + $ | 0, C = Q(C ^ N, 7), U = U + S | 0, x = Q(x ^ U, 16), y = y + x | 0, S = Q(S ^ y, 12), U = U + S | 0, x = Q(x ^ U, 8), y = y + x | 0, S = Q(S ^ y, 7), R = R + D | 0, O = Q(O ^ R, 16), w = w + O | 0, D = Q(D ^ w, 12), R = R + D | 0, O = Q(O ^ R, 8), w = w + O | 0, D = Q(D ^ w, 7), b = b + T | 0, B = Q(B ^ b, 16), v = v + B | 0, T = Q(T ^ v, 12), b = b + T | 0, B = Q(B ^ b, 8), v = v + B | 0, T = Q(T ^ v, 7), k = k + S | 0, B = Q(B ^ k, 16), w = w + B | 0, S = Q(S ^ w, 12), k = k + S | 0, B = Q(B ^ k, 8), w = w + B | 0, S = Q(S ^ w, 7), U = U + D | 0, $ = Q($ ^ U, 16), v = v + $ | 0, D = Q(D ^ v, 12), U = U + D | 0, $ = Q($ ^ U, 8), v = v + $ | 0, D = Q(D ^ v, 7), R = R + T | 0, x = Q(x ^ R, 16), N = N + x | 0, T = Q(T ^ N, 12), R = R + T | 0, x = Q(x ^ R, 8), N = N + x | 0, T = Q(T ^ N, 7), b = b + C | 0, O = Q(O ^ b, 16), y = y + O | 0, C = Q(C ^ y, 12), b = b + C | 0, O = Q(O ^ b, 8), y = y + O | 0, C = Q(C ^ y, 7);
  let q = 0;
  i[q++] = o + k | 0, i[q++] = a + U | 0, i[q++] = c + R | 0, i[q++] = h + b | 0, i[q++] = u + C | 0, i[q++] = l + S | 0, i[q++] = f + D | 0, i[q++] = p + T | 0, i[q++] = d + N | 0, i[q++] = g + y | 0, i[q++] = m + w | 0, i[q++] = _ + v | 0, i[q++] = I + $ | 0, i[q++] = E + x | 0, i[q++] = P + O | 0, i[q++] = A + B | 0;
}
const M2 = N2(j2, { counterRight: !1, counterLength: 4, allowShortKeys: !1 }), q2 = new Uint8Array(16), Nh = (t, e) => {
  t.update(e);
  const r = e.length % 16;
  r && t.update(q2.subarray(r));
}, z2 = new Uint8Array(32);
function Uh(t, e, r, i, s) {
  const n = t(e, r, z2), o = L2.create(n);
  s && Nh(o, s), Nh(o, i);
  const a = A2(i.length, s ? s.length : 0, !0);
  o.update(a);
  const c = o.digest();
  return yi(n, a), c;
}
const H2 = (t) => (e, r, i) => ({ encrypt(s, n) {
  const o = s.length;
  n = Rh(o + 16, n, !1), n.set(s);
  const a = n.subarray(0, -16);
  t(e, r, a, a, 1);
  const c = Uh(t, e, r, a, i);
  return n.set(c, o), yi(c), n;
}, decrypt(s, n) {
  n = Rh(s.length - 16, n, !1);
  const o = s.subarray(0, -16), a = s.subarray(-16), c = Uh(t, e, r, o, i);
  if (!S2(a, c)) throw new Error("invalid tag");
  return n.set(s.subarray(0, -16)), t(e, r, n, n, 1), yi(c), n;
} }), vd = D2({ blockSize: 64, nonceLength: 12, tagLength: 16 }, H2(M2));
let Ed = class extends Dn {
  constructor(e, r) {
    super(), this.finished = !1, this.destroyed = !1, Ja(e);
    const i = It(r);
    if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, n = new Uint8Array(s);
    n.set(i.length > s ? e.create().update(i).digest() : i);
    for (let o = 0; o < n.length; o++) n[o] ^= 54;
    this.iHash.update(n), this.oHash = e.create();
    for (let o = 0; o < n.length; o++) n[o] ^= 106;
    this.oHash.update(n), dt(n);
  }
  update(e) {
    return gr(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    gr(this), ft(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: r, iHash: i, finished: s, destroyed: n, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = s, e.destroyed = n, e.blockLen = o, e.outputLen = a, e.oHash = r._cloneInto(e.oHash), e.iHash = i._cloneInto(e.iHash), e;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
};
const On = (t, e, r) => new Ed(t, e).update(r).digest();
On.create = (t, e) => new Ed(t, e);
function V2(t, e, r) {
  return Ja(t), r === void 0 && (r = new Uint8Array(t.outputLen)), On(t, It(r), It(e));
}
const ho = Uint8Array.from([0]), kh = Uint8Array.of();
function K2(t, e, r, i = 32) {
  Ja(t), Gt(i);
  const s = t.outputLen;
  if (i > 255 * s) throw new Error("Length should be <= 255*HashLen");
  const n = Math.ceil(i / s);
  r === void 0 && (r = kh);
  const o = new Uint8Array(n * s), a = On.create(t, e), c = a._cloneInto(), h = new Uint8Array(a.outputLen);
  for (let u = 0; u < n; u++) ho[0] = u + 1, c.update(u === 0 ? kh : h).update(r).update(ho).digestInto(h), o.set(h, s * u), a._cloneInto(c);
  return a.destroy(), c.destroy(), dt(h, ho), o.slice(0, i);
}
const W2 = (t, e, r, i, s) => K2(t, V2(t, e, r), i, s), Pn = An, tc = BigInt(0), Qo = BigInt(1);
function pn(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
function Ns(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function _d(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? tc : BigInt("0x" + t);
}
function Cn(t) {
  return _d(cs(t));
}
function gn(t) {
  return ft(t), _d(cs(Uint8Array.from(t).reverse()));
}
function rc(t, e) {
  return Qa(t.toString(16).padStart(e * 2, "0"));
}
function ic(t, e) {
  return rc(t, e).reverse();
}
function We(t, e, r) {
  let i;
  if (typeof e == "string") try {
    i = Qa(e);
  } catch (n) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + n);
  }
  else if (Ya(e)) i = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const s = i.length;
  if (typeof r == "number" && s !== r) throw new Error(t + " of length " + r + " expected, got " + s);
  return i;
}
const uo = (t) => typeof t == "bigint" && tc <= t;
function G2(t, e, r) {
  return uo(t) && uo(e) && uo(r) && e <= t && t < r;
}
function Xo(t, e, r, i) {
  if (!G2(e, r, i)) throw new Error("expected valid " + t + ": " + r + " <= n < " + i + ", got " + e);
}
function Y2(t) {
  let e;
  for (e = 0; t > tc; t >>= Qo, e += 1) ;
  return e;
}
const Tn = (t) => (Qo << BigInt(t)) - Qo;
function J2(t, e, r) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
  if (typeof r != "function") throw new Error("hmacFn must be a function");
  const i = (f) => new Uint8Array(f), s = (f) => Uint8Array.of(f);
  let n = i(t), o = i(t), a = 0;
  const c = () => {
    n.fill(1), o.fill(0), a = 0;
  }, h = (...f) => r(o, n, ...f), u = (f = i(0)) => {
    o = h(s(0), f), n = h(), f.length !== 0 && (o = h(s(1), f), n = h());
  }, l = () => {
    if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let f = 0;
    const p = [];
    for (; f < e; ) {
      n = h();
      const d = n.slice();
      p.push(d), f += n.length;
    }
    return Ar(...p);
  };
  return (f, p) => {
    c(), u(f);
    let d;
    for (; !(d = p(l())); ) u();
    return c(), d;
  };
}
function Rn(t, e, r = {}) {
  if (!t || typeof t != "object") throw new Error("expected valid options object");
  function i(s, n, o) {
    const a = t[s];
    if (o && a === void 0) return;
    const c = typeof a;
    if (c !== n || a === null) throw new Error(`param "${s}" is invalid: expected ${n}, got ${c}`);
  }
  Object.entries(e).forEach(([s, n]) => i(s, n, !1)), Object.entries(r).forEach(([s, n]) => i(s, n, !0));
}
function Lh(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (r, ...i) => {
    const s = e.get(r);
    if (s !== void 0) return s;
    const n = t(r, ...i);
    return e.set(r, n), n;
  };
}
const Ye = BigInt(0), Le = BigInt(1), Or = BigInt(2), Z2 = BigInt(3), Id = BigInt(4), xd = BigInt(5), $d = BigInt(8);
function ht(t, e) {
  const r = t % e;
  return r >= Ye ? r : e + r;
}
function vt(t, e, r) {
  let i = t;
  for (; e-- > Ye; ) i *= i, i %= r;
  return i;
}
function jh(t, e) {
  if (t === Ye) throw new Error("invert: expected non-zero number");
  if (e <= Ye) throw new Error("invert: expected positive modulus, got " + e);
  let r = ht(t, e), i = e, s = Ye, n = Le;
  for (; r !== Ye; ) {
    const o = i / r, a = i % r, c = s - n * o;
    i = r, r = a, s = n, n = c;
  }
  if (i !== Le) throw new Error("invert: does not exist");
  return ht(s, e);
}
function Sd(t, e) {
  const r = (t.ORDER + Le) / Id, i = t.pow(e, r);
  if (!t.eql(t.sqr(i), e)) throw new Error("Cannot find square root");
  return i;
}
function Q2(t, e) {
  const r = (t.ORDER - xd) / $d, i = t.mul(e, Or), s = t.pow(i, r), n = t.mul(e, s), o = t.mul(t.mul(n, Or), s), a = t.mul(n, t.sub(o, t.ONE));
  if (!t.eql(t.sqr(a), e)) throw new Error("Cannot find square root");
  return a;
}
function X2(t) {
  if (t < BigInt(3)) throw new Error("sqrt is not defined for small field");
  let e = t - Le, r = 0;
  for (; e % Or === Ye; ) e /= Or, r++;
  let i = Or;
  const s = xi(t);
  for (; Mh(s, i) === 1; ) if (i++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
  if (r === 1) return Sd;
  let n = s.pow(i, e);
  const o = (e + Le) / Or;
  return function(a, c) {
    if (a.is0(c)) return c;
    if (Mh(a, c) !== 1) throw new Error("Cannot find square root");
    let h = r, u = a.mul(a.ONE, n), l = a.pow(c, e), f = a.pow(c, o);
    for (; !a.eql(l, a.ONE); ) {
      if (a.is0(l)) return a.ZERO;
      let p = 1, d = a.sqr(l);
      for (; !a.eql(d, a.ONE); ) if (p++, d = a.sqr(d), p === h) throw new Error("Cannot find square root");
      const g = Le << BigInt(h - p - 1), m = a.pow(u, g);
      h = p, u = a.sqr(m), l = a.mul(l, u), f = a.mul(f, m);
    }
    return f;
  };
}
function eE(t) {
  return t % Id === Z2 ? Sd : t % $d === xd ? Q2 : X2(t);
}
const tE = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function rE(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" }, r = tE.reduce((i, s) => (i[s] = "function", i), e);
  return Rn(t, r), t;
}
function iE(t, e, r) {
  if (r < Ye) throw new Error("invalid exponent, negatives unsupported");
  if (r === Ye) return t.ONE;
  if (r === Le) return e;
  let i = t.ONE, s = e;
  for (; r > Ye; ) r & Le && (i = t.mul(i, s)), s = t.sqr(s), r >>= Le;
  return i;
}
function Dd(t, e, r = !1) {
  const i = new Array(e.length).fill(r ? t.ZERO : void 0), s = e.reduce((o, a, c) => t.is0(a) ? o : (i[c] = o, t.mul(o, a)), t.ONE), n = t.inv(s);
  return e.reduceRight((o, a, c) => t.is0(a) ? o : (i[c] = t.mul(o, i[c]), t.mul(o, a)), n), i;
}
function Mh(t, e) {
  const r = (t.ORDER - Le) / Or, i = t.pow(e, r), s = t.eql(i, t.ONE), n = t.eql(i, t.ZERO), o = t.eql(i, t.neg(t.ONE));
  if (!s && !n && !o) throw new Error("invalid Legendre symbol result");
  return s ? 1 : n ? 0 : -1;
}
function sE(t, e) {
  e !== void 0 && Gt(e);
  const r = e !== void 0 ? e : t.toString(2).length, i = Math.ceil(r / 8);
  return { nBitLength: r, nByteLength: i };
}
function xi(t, e, r = !1, i = {}) {
  if (t <= Ye) throw new Error("invalid field: expected ORDER > 0, got " + t);
  let s, n;
  if (typeof e == "object" && e != null) {
    if (i.sqrt || r) throw new Error("cannot specify opts in two arguments");
    const u = e;
    u.BITS && (s = u.BITS), u.sqrt && (n = u.sqrt), typeof u.isLE == "boolean" && (r = u.isLE);
  } else typeof e == "number" && (s = e), i.sqrt && (n = i.sqrt);
  const { nBitLength: o, nByteLength: a } = sE(t, s);
  if (a > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let c;
  const h = Object.freeze({ ORDER: t, isLE: r, BITS: o, BYTES: a, MASK: Tn(o), ZERO: Ye, ONE: Le, create: (u) => ht(u, t), isValid: (u) => {
    if (typeof u != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof u);
    return Ye <= u && u < t;
  }, is0: (u) => u === Ye, isValidNot0: (u) => !h.is0(u) && h.isValid(u), isOdd: (u) => (u & Le) === Le, neg: (u) => ht(-u, t), eql: (u, l) => u === l, sqr: (u) => ht(u * u, t), add: (u, l) => ht(u + l, t), sub: (u, l) => ht(u - l, t), mul: (u, l) => ht(u * l, t), pow: (u, l) => iE(h, u, l), div: (u, l) => ht(u * jh(l, t), t), sqrN: (u) => u * u, addN: (u, l) => u + l, subN: (u, l) => u - l, mulN: (u, l) => u * l, inv: (u) => jh(u, t), sqrt: n || ((u) => (c || (c = eE(t)), c(h, u))), toBytes: (u) => r ? ic(u, a) : rc(u, a), fromBytes: (u) => {
    if (u.length !== a) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + u.length);
    return r ? gn(u) : Cn(u);
  }, invertBatch: (u) => Dd(h, u), cmov: (u, l, f) => f ? l : u });
  return Object.freeze(h);
}
function Ad(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Od(t) {
  const e = Ad(t);
  return e + Math.ceil(e / 2);
}
function nE(t, e, r = !1) {
  const i = t.length, s = Ad(e), n = Od(e);
  if (i < 16 || i < n || i > 1024) throw new Error("expected " + n + "-1024 bytes of input, got " + i);
  const o = r ? gn(t) : Cn(t), a = ht(o, e - Le) + Le;
  return r ? ic(a, s) : rc(a, s);
}
const wi = BigInt(0), Pr = BigInt(1);
function Zi(t, e) {
  const r = e.negate();
  return t ? r : e;
}
function oE(t, e, r) {
  const i = (n) => n.pz, s = Dd(t.Fp, r.map(i));
  return r.map((n, o) => n.toAffine(s[o])).map(t.fromAffine);
}
function Pd(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function lo(t, e) {
  Pd(t, e);
  const r = Math.ceil(e / t) + 1, i = 2 ** (t - 1), s = 2 ** t, n = Tn(t), o = BigInt(t);
  return { windows: r, windowSize: i, mask: n, maxNumber: s, shiftBy: o };
}
function qh(t, e, r) {
  const { windowSize: i, mask: s, maxNumber: n, shiftBy: o } = r;
  let a = Number(t & s), c = t >> o;
  a > i && (a -= n, c += Pr);
  const h = e * i, u = h + Math.abs(a) - 1, l = a === 0, f = a < 0, p = e % 2 !== 0;
  return { nextN: c, offset: u, isZero: l, isNeg: f, isNegF: p, offsetF: h };
}
function aE(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((r, i) => {
    if (!(r instanceof e)) throw new Error("invalid point at index " + i);
  });
}
function cE(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((r, i) => {
    if (!e.isValid(r)) throw new Error("invalid scalar at index " + i);
  });
}
const fo = /* @__PURE__ */ new WeakMap(), Cd = /* @__PURE__ */ new WeakMap();
function po(t) {
  return Cd.get(t) || 1;
}
function zh(t) {
  if (t !== wi) throw new Error("invalid wNAF");
}
function hE(t, e) {
  return { constTimeNegate: Zi, hasPrecomputes(r) {
    return po(r) !== 1;
  }, unsafeLadder(r, i, s = t.ZERO) {
    let n = r;
    for (; i > wi; ) i & Pr && (s = s.add(n)), n = n.double(), i >>= Pr;
    return s;
  }, precomputeWindow(r, i) {
    const { windows: s, windowSize: n } = lo(i, e), o = [];
    let a = r, c = a;
    for (let h = 0; h < s; h++) {
      c = a, o.push(c);
      for (let u = 1; u < n; u++) c = c.add(a), o.push(c);
      a = c.double();
    }
    return o;
  }, wNAF(r, i, s) {
    let n = t.ZERO, o = t.BASE;
    const a = lo(r, e);
    for (let c = 0; c < a.windows; c++) {
      const { nextN: h, offset: u, isZero: l, isNeg: f, isNegF: p, offsetF: d } = qh(s, c, a);
      s = h, l ? o = o.add(Zi(p, i[d])) : n = n.add(Zi(f, i[u]));
    }
    return zh(s), { p: n, f: o };
  }, wNAFUnsafe(r, i, s, n = t.ZERO) {
    const o = lo(r, e);
    for (let a = 0; a < o.windows && s !== wi; a++) {
      const { nextN: c, offset: h, isZero: u, isNeg: l } = qh(s, a, o);
      if (s = c, !u) {
        const f = i[h];
        n = n.add(l ? f.negate() : f);
      }
    }
    return zh(s), n;
  }, getPrecomputes(r, i, s) {
    let n = fo.get(i);
    return n || (n = this.precomputeWindow(i, r), r !== 1 && (typeof s == "function" && (n = s(n)), fo.set(i, n))), n;
  }, wNAFCached(r, i, s) {
    const n = po(r);
    return this.wNAF(n, this.getPrecomputes(n, r, s), i);
  }, wNAFCachedUnsafe(r, i, s, n) {
    const o = po(r);
    return o === 1 ? this.unsafeLadder(r, i, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, r, s), i, n);
  }, setWindowSize(r, i) {
    Pd(i, e), Cd.set(r, i), fo.delete(r);
  } };
}
function uE(t, e, r, i) {
  let s = e, n = t.ZERO, o = t.ZERO;
  for (; r > wi || i > wi; ) r & Pr && (n = n.add(s)), i & Pr && (o = o.add(s)), s = s.double(), r >>= Pr, i >>= Pr;
  return { p1: n, p2: o };
}
function lE(t, e, r, i) {
  aE(r, t), cE(i, e);
  const s = r.length, n = i.length;
  if (s !== n) throw new Error("arrays of points and scalars must have equal length");
  const o = t.ZERO, a = Y2(BigInt(s));
  let c = 1;
  a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
  const h = Tn(c), u = new Array(Number(h) + 1).fill(o), l = Math.floor((e.BITS - 1) / c) * c;
  let f = o;
  for (let p = l; p >= 0; p -= c) {
    u.fill(o);
    for (let g = 0; g < n; g++) {
      const m = i[g], _ = Number(m >> BigInt(p) & h);
      u[_] = u[_].add(r[g]);
    }
    let d = o;
    for (let g = u.length - 1, m = o; g > 0; g--) m = m.add(u[g]), d = d.add(m);
    if (f = f.add(d), p !== 0) for (let g = 0; g < c; g++) f = f.double();
  }
  return f;
}
function Hh(t, e) {
  if (e) {
    if (e.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return rE(e), e;
  } else return xi(t);
}
function fE(t, e, r = {}) {
  if (!e || typeof e != "object") throw new Error(`expected valid ${t} CURVE object`);
  for (const o of ["p", "n", "h"]) {
    const a = e[o];
    if (!(typeof a == "bigint" && a > wi)) throw new Error(`CURVE.${o} must be positive bigint`);
  }
  const i = Hh(e.p, r.Fp), s = Hh(e.n, r.Fn), n = ["Gx", "Gy", "a", "b"];
  for (const o of n) if (!i.isValid(e[o])) throw new Error(`CURVE.${o} must be valid field element of CURVE.Fp`);
  return { Fp: i, Fn: s };
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8);
const Ui = BigInt(0), Gr = BigInt(1), Us = BigInt(2);
function dE(t) {
  return Rn(t, { adjustScalarBytes: "function", powPminus2: "function" }), Object.freeze({ ...t });
}
function pE(t) {
  const e = dE(t), { P: r, type: i, adjustScalarBytes: s, powPminus2: n, randomBytes: o } = e, a = i === "x25519";
  if (!a && i !== "x448") throw new Error("invalid type");
  const c = o || Ii, h = a ? 255 : 448, u = a ? 32 : 56, l = BigInt(a ? 9 : 5), f = BigInt(a ? 121665 : 39081), p = a ? Us ** BigInt(254) : Us ** BigInt(447), d = a ? BigInt(8) * Us ** BigInt(251) - Gr : BigInt(4) * Us ** BigInt(445) - Gr, g = p + d + Gr, m = (b) => ht(b, r), _ = I(l);
  function I(b) {
    return ic(m(b), u);
  }
  function E(b) {
    const C = We("u coordinate", b, u);
    return a && (C[31] &= 127), m(gn(C));
  }
  function P(b) {
    return gn(s(We("scalar", b, u)));
  }
  function A(b, C) {
    const S = R(E(C), P(b));
    if (S === Ui) throw new Error("invalid private or public key received");
    return I(S);
  }
  function k(b) {
    return A(b, _);
  }
  function U(b, C, S) {
    const D = m(b * (C - S));
    return C = m(C - D), S = m(S + D), { x_2: C, x_3: S };
  }
  function R(b, C) {
    Xo("u", b, Ui, r), Xo("scalar", C, p, g);
    const S = C, D = b;
    let T = Gr, N = Ui, y = b, w = Gr, v = Ui;
    for (let x = BigInt(h - 1); x >= Ui; x--) {
      const O = S >> x & Gr;
      v ^= O, { x_2: T, x_3: y } = U(v, T, y), { x_2: N, x_3: w } = U(v, N, w), v = O;
      const B = T + N, q = m(B * B), H = T - N, M = m(H * H), V = q - M, K = y + w, ie = y - w, re = m(ie * B), Y = m(K * H), fe = re + Y, xe = re - Y;
      y = m(fe * fe), w = m(D * m(xe * xe)), T = m(q * M), N = m(V * (q + m(f * V)));
    }
    ({ x_2: T, x_3: y } = U(v, T, y)), { x_2: N, x_3: w } = U(v, N, w);
    const $ = n(N);
    return m(T * $);
  }
  return { scalarMult: A, scalarMultBase: k, getSharedSecret: (b, C) => A(b, C), getPublicKey: (b) => k(b), utils: { randomPrivateKey: () => c(u) }, GuBytes: _.slice() };
}
BigInt(0);
const gE = BigInt(1), Vh = BigInt(2), yE = BigInt(3), wE = BigInt(5);
BigInt(8);
const Td = { p: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"), a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"), d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"), Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"), Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658") };
function mE(t) {
  const e = BigInt(10), r = BigInt(20), i = BigInt(40), s = BigInt(80), n = Td.p, o = t * t % n * t % n, a = vt(o, Vh, n) * o % n, c = vt(a, gE, n) * t % n, h = vt(c, wE, n) * c % n, u = vt(h, e, n) * h % n, l = vt(u, r, n) * u % n, f = vt(l, i, n) * l % n, p = vt(f, s, n) * f % n, d = vt(p, s, n) * f % n, g = vt(d, e, n) * h % n;
  return { pow_p_5_8: vt(g, Vh, n) * t % n, b2: o };
}
function bE(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
const ea = (() => {
  const t = Td.p;
  return pE({ P: t, type: "x25519", powPminus2: (e) => {
    const { pow_p_5_8: r, b2: i } = mE(e);
    return ht(vt(r, yE, t) * i, t);
  }, adjustScalarBytes: bE });
})();
function Kh(t) {
  t.lowS !== void 0 && pn("lowS", t.lowS), t.prehash !== void 0 && pn("prehash", t.prehash);
}
class vE extends Error {
  constructor(e = "") {
    super(e);
  }
}
const Vt = { Err: vE, _tlv: { encode: (t, e) => {
  const { Err: r } = Vt;
  if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
  if (e.length & 1) throw new r("tlv.encode: unpadded data");
  const i = e.length / 2, s = Ns(i);
  if (s.length / 2 & 128) throw new r("tlv.encode: long form length too big");
  const n = i > 127 ? Ns(s.length / 2 | 128) : "";
  return Ns(t) + n + s + e;
}, decode(t, e) {
  const { Err: r } = Vt;
  let i = 0;
  if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
  if (e.length < 2 || e[i++] !== t) throw new r("tlv.decode: wrong tlv");
  const s = e[i++], n = !!(s & 128);
  let o = 0;
  if (!n) o = s;
  else {
    const c = s & 127;
    if (!c) throw new r("tlv.decode(long): indefinite length not supported");
    if (c > 4) throw new r("tlv.decode(long): byte length is too big");
    const h = e.subarray(i, i + c);
    if (h.length !== c) throw new r("tlv.decode: length bytes not complete");
    if (h[0] === 0) throw new r("tlv.decode(long): zero leftmost byte");
    for (const u of h) o = o << 8 | u;
    if (i += c, o < 128) throw new r("tlv.decode(long): not minimal encoding");
  }
  const a = e.subarray(i, i + o);
  if (a.length !== o) throw new r("tlv.decode: wrong value length");
  return { v: a, l: e.subarray(i + o) };
} }, _int: { encode(t) {
  const { Err: e } = Vt;
  if (t < Qi) throw new e("integer: negative integers are not allowed");
  let r = Ns(t);
  if (Number.parseInt(r[0], 16) & 8 && (r = "00" + r), r.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
  return r;
}, decode(t) {
  const { Err: e } = Vt;
  if (t[0] & 128) throw new e("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
  return Cn(t);
} }, toSig(t) {
  const { Err: e, _int: r, _tlv: i } = Vt, s = We("signature", t), { v: n, l: o } = i.decode(48, s);
  if (o.length) throw new e("invalid signature: left bytes after parsing");
  const { v: a, l: c } = i.decode(2, n), { v: h, l: u } = i.decode(2, c);
  if (u.length) throw new e("invalid signature: left bytes after parsing");
  return { r: r.decode(a), s: r.decode(h) };
}, hexFromSig(t) {
  const { _tlv: e, _int: r } = Vt, i = e.encode(2, r.encode(t.r)), s = e.encode(2, r.encode(t.s)), n = i + s;
  return e.encode(48, n);
} }, Qi = BigInt(0), Xi = BigInt(1), EE = BigInt(2), ks = BigInt(3), _E = BigInt(4);
function IE(t, e, r) {
  function i(s) {
    const n = t.sqr(s), o = t.mul(n, s);
    return t.add(t.add(o, t.mul(s, e)), r);
  }
  return i;
}
function Rd(t, e, r) {
  const { BYTES: i } = t;
  function s(n) {
    let o;
    if (typeof n == "bigint") o = n;
    else {
      let a = We("private key", n);
      if (e) {
        if (!e.includes(a.length * 2)) throw new Error("invalid private key");
        const c = new Uint8Array(i);
        c.set(a, c.length - a.length), a = c;
      }
      try {
        o = t.fromBytes(a);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${i}, got ${typeof n}`);
      }
    }
    if (r && (o = t.create(o)), !t.isValidNot0(o)) throw new Error("invalid private key: out of range [1..N-1]");
    return o;
  }
  return s;
}
function xE(t, e = {}) {
  const { Fp: r, Fn: i } = fE("weierstrass", t, e), { h: s, n } = t;
  Rn(e, {}, { allowInfinityPoint: "boolean", clearCofactor: "function", isTorsionFree: "function", fromBytes: "function", toBytes: "function", endo: "object", wrapPrivateKey: "boolean" });
  const { endo: o } = e;
  if (o && (!r.is0(t.a) || typeof o.beta != "bigint" || typeof o.splitScalar != "function")) throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
  function a() {
    if (!r.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function c(R, b, C) {
    const { x: S, y: D } = b.toAffine(), T = r.toBytes(S);
    if (pn("isCompressed", C), C) {
      a();
      const N = !r.isOdd(D);
      return Ar(Bd(N), T);
    } else return Ar(Uint8Array.of(4), T, r.toBytes(D));
  }
  function h(R) {
    ft(R);
    const b = r.BYTES, C = b + 1, S = 2 * b + 1, D = R.length, T = R[0], N = R.subarray(1);
    if (D === C && (T === 2 || T === 3)) {
      const y = r.fromBytes(N);
      if (!r.isValid(y)) throw new Error("bad point: is not on curve, wrong x");
      const w = f(y);
      let v;
      try {
        v = r.sqrt(w);
      } catch (x) {
        const O = x instanceof Error ? ": " + x.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + O);
      }
      a();
      const $ = r.isOdd(v);
      return (T & 1) === 1 !== $ && (v = r.neg(v)), { x: y, y: v };
    } else if (D === S && T === 4) {
      const y = r.fromBytes(N.subarray(b * 0, b * 1)), w = r.fromBytes(N.subarray(b * 1, b * 2));
      if (!p(y, w)) throw new Error("bad point: is not on curve");
      return { x: y, y: w };
    } else throw new Error(`bad point: got length ${D}, expected compressed=${C} or uncompressed=${S}`);
  }
  const u = e.toBytes || c, l = e.fromBytes || h, f = IE(r, t.a, t.b);
  function p(R, b) {
    const C = r.sqr(b), S = f(R);
    return r.eql(C, S);
  }
  if (!p(t.Gx, t.Gy)) throw new Error("bad curve params: generator point");
  const d = r.mul(r.pow(t.a, ks), _E), g = r.mul(r.sqr(t.b), BigInt(27));
  if (r.is0(r.add(d, g))) throw new Error("bad curve params: a or b");
  function m(R, b, C = !1) {
    if (!r.isValid(b) || C && r.is0(b)) throw new Error(`bad point coordinate ${R}`);
    return b;
  }
  function _(R) {
    if (!(R instanceof A)) throw new Error("ProjectivePoint expected");
  }
  const I = Lh((R, b) => {
    const { px: C, py: S, pz: D } = R;
    if (r.eql(D, r.ONE)) return { x: C, y: S };
    const T = R.is0();
    b == null && (b = T ? r.ONE : r.inv(D));
    const N = r.mul(C, b), y = r.mul(S, b), w = r.mul(D, b);
    if (T) return { x: r.ZERO, y: r.ZERO };
    if (!r.eql(w, r.ONE)) throw new Error("invZ was invalid");
    return { x: N, y };
  }), E = Lh((R) => {
    if (R.is0()) {
      if (e.allowInfinityPoint && !r.is0(R.py)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: b, y: C } = R.toAffine();
    if (!r.isValid(b) || !r.isValid(C)) throw new Error("bad point: x or y not field elements");
    if (!p(b, C)) throw new Error("bad point: equation left != right");
    if (!R.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  function P(R, b, C, S, D) {
    return C = new A(r.mul(C.px, R), C.py, C.pz), b = Zi(S, b), C = Zi(D, C), b.add(C);
  }
  class A {
    constructor(b, C, S) {
      this.px = m("x", b), this.py = m("y", C, !0), this.pz = m("z", S), Object.freeze(this);
    }
    static fromAffine(b) {
      const { x: C, y: S } = b || {};
      if (!b || !r.isValid(C) || !r.isValid(S)) throw new Error("invalid affine point");
      if (b instanceof A) throw new Error("projective point not allowed");
      return r.is0(C) && r.is0(S) ? A.ZERO : new A(C, S, r.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(b) {
      return oE(A, "pz", b);
    }
    static fromBytes(b) {
      return ft(b), A.fromHex(b);
    }
    static fromHex(b) {
      const C = A.fromAffine(l(We("pointHex", b)));
      return C.assertValidity(), C;
    }
    static fromPrivateKey(b) {
      const C = Rd(i, e.allowedPrivateKeyLengths, e.wrapPrivateKey);
      return A.BASE.multiply(C(b));
    }
    static msm(b, C) {
      return lE(A, i, b, C);
    }
    precompute(b = 8, C = !0) {
      return U.setWindowSize(this, b), C || this.multiply(ks), this;
    }
    _setWindowSize(b) {
      this.precompute(b);
    }
    assertValidity() {
      E(this);
    }
    hasEvenY() {
      const { y: b } = this.toAffine();
      if (!r.isOdd) throw new Error("Field doesn't support isOdd");
      return !r.isOdd(b);
    }
    equals(b) {
      _(b);
      const { px: C, py: S, pz: D } = this, { px: T, py: N, pz: y } = b, w = r.eql(r.mul(C, y), r.mul(T, D)), v = r.eql(r.mul(S, y), r.mul(N, D));
      return w && v;
    }
    negate() {
      return new A(this.px, r.neg(this.py), this.pz);
    }
    double() {
      const { a: b, b: C } = t, S = r.mul(C, ks), { px: D, py: T, pz: N } = this;
      let y = r.ZERO, w = r.ZERO, v = r.ZERO, $ = r.mul(D, D), x = r.mul(T, T), O = r.mul(N, N), B = r.mul(D, T);
      return B = r.add(B, B), v = r.mul(D, N), v = r.add(v, v), y = r.mul(b, v), w = r.mul(S, O), w = r.add(y, w), y = r.sub(x, w), w = r.add(x, w), w = r.mul(y, w), y = r.mul(B, y), v = r.mul(S, v), O = r.mul(b, O), B = r.sub($, O), B = r.mul(b, B), B = r.add(B, v), v = r.add($, $), $ = r.add(v, $), $ = r.add($, O), $ = r.mul($, B), w = r.add(w, $), O = r.mul(T, N), O = r.add(O, O), $ = r.mul(O, B), y = r.sub(y, $), v = r.mul(O, x), v = r.add(v, v), v = r.add(v, v), new A(y, w, v);
    }
    add(b) {
      _(b);
      const { px: C, py: S, pz: D } = this, { px: T, py: N, pz: y } = b;
      let w = r.ZERO, v = r.ZERO, $ = r.ZERO;
      const x = t.a, O = r.mul(t.b, ks);
      let B = r.mul(C, T), q = r.mul(S, N), H = r.mul(D, y), M = r.add(C, S), V = r.add(T, N);
      M = r.mul(M, V), V = r.add(B, q), M = r.sub(M, V), V = r.add(C, D);
      let K = r.add(T, y);
      return V = r.mul(V, K), K = r.add(B, H), V = r.sub(V, K), K = r.add(S, D), w = r.add(N, y), K = r.mul(K, w), w = r.add(q, H), K = r.sub(K, w), $ = r.mul(x, V), w = r.mul(O, H), $ = r.add(w, $), w = r.sub(q, $), $ = r.add(q, $), v = r.mul(w, $), q = r.add(B, B), q = r.add(q, B), H = r.mul(x, H), V = r.mul(O, V), q = r.add(q, H), H = r.sub(B, H), H = r.mul(x, H), V = r.add(V, H), B = r.mul(q, V), v = r.add(v, B), B = r.mul(K, V), w = r.mul(M, w), w = r.sub(w, B), B = r.mul(M, q), $ = r.mul(K, $), $ = r.add($, B), new A(w, v, $);
    }
    subtract(b) {
      return this.add(b.negate());
    }
    is0() {
      return this.equals(A.ZERO);
    }
    multiply(b) {
      const { endo: C } = e;
      if (!i.isValidNot0(b)) throw new Error("invalid scalar: out of range");
      let S, D;
      const T = (N) => U.wNAFCached(this, N, A.normalizeZ);
      if (C) {
        const { k1neg: N, k1: y, k2neg: w, k2: v } = C.splitScalar(b), { p: $, f: x } = T(y), { p: O, f: B } = T(v);
        D = x.add(B), S = P(C.beta, $, O, N, w);
      } else {
        const { p: N, f: y } = T(b);
        S = N, D = y;
      }
      return A.normalizeZ([S, D])[0];
    }
    multiplyUnsafe(b) {
      const { endo: C } = e, S = this;
      if (!i.isValid(b)) throw new Error("invalid scalar: out of range");
      if (b === Qi || S.is0()) return A.ZERO;
      if (b === Xi) return S;
      if (U.hasPrecomputes(this)) return this.multiply(b);
      if (C) {
        const { k1neg: D, k1: T, k2neg: N, k2: y } = C.splitScalar(b), { p1: w, p2: v } = uE(A, S, T, y);
        return P(C.beta, w, v, D, N);
      } else return U.wNAFCachedUnsafe(S, b);
    }
    multiplyAndAddUnsafe(b, C, S) {
      const D = this.multiplyUnsafe(C).add(b.multiplyUnsafe(S));
      return D.is0() ? void 0 : D;
    }
    toAffine(b) {
      return I(this, b);
    }
    isTorsionFree() {
      const { isTorsionFree: b } = e;
      return s === Xi ? !0 : b ? b(A, this) : U.wNAFCachedUnsafe(this, n).is0();
    }
    clearCofactor() {
      const { clearCofactor: b } = e;
      return s === Xi ? this : b ? b(A, this) : this.multiplyUnsafe(s);
    }
    toBytes(b = !0) {
      return pn("isCompressed", b), this.assertValidity(), u(A, this, b);
    }
    toRawBytes(b = !0) {
      return this.toBytes(b);
    }
    toHex(b = !0) {
      return cs(this.toBytes(b));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
  }
  A.BASE = new A(t.Gx, t.Gy, r.ONE), A.ZERO = new A(r.ZERO, r.ONE, r.ZERO), A.Fp = r, A.Fn = i;
  const k = i.BITS, U = hE(A, e.endo ? Math.ceil(k / 2) : k);
  return A;
}
function Bd(t) {
  return Uint8Array.of(t ? 2 : 3);
}
function $E(t, e, r = {}) {
  Rn(e, { hash: "function" }, { hmac: "function", lowS: "boolean", randomBytes: "function", bits2int: "function", bits2int_modN: "function" });
  const i = e.randomBytes || Ii, s = e.hmac || ((S, ...D) => On(e.hash, S, Ar(...D))), { Fp: n, Fn: o } = t, { ORDER: a, BITS: c } = o;
  function h(S) {
    const D = a >> Xi;
    return S > D;
  }
  function u(S) {
    return h(S) ? o.neg(S) : S;
  }
  function l(S, D) {
    if (!o.isValidNot0(D)) throw new Error(`invalid signature ${S}: out of range 1..CURVE.n`);
  }
  class f {
    constructor(D, T, N) {
      l("r", D), l("s", T), this.r = D, this.s = T, N != null && (this.recovery = N), Object.freeze(this);
    }
    static fromCompact(D) {
      const T = o.BYTES, N = We("compactSignature", D, T * 2);
      return new f(o.fromBytes(N.subarray(0, T)), o.fromBytes(N.subarray(T, T * 2)));
    }
    static fromDER(D) {
      const { r: T, s: N } = Vt.toSig(We("DER", D));
      return new f(T, N);
    }
    assertValidity() {
    }
    addRecoveryBit(D) {
      return new f(this.r, this.s, D);
    }
    recoverPublicKey(D) {
      const T = n.ORDER, { r: N, s: y, recovery: w } = this;
      if (w == null || ![0, 1, 2, 3].includes(w)) throw new Error("recovery id invalid");
      if (a * EE < T && w > 1) throw new Error("recovery id is ambiguous for h>1 curve");
      const v = w === 2 || w === 3 ? N + a : N;
      if (!n.isValid(v)) throw new Error("recovery id 2 or 3 invalid");
      const $ = n.toBytes(v), x = t.fromHex(Ar(Bd((w & 1) === 0), $)), O = o.inv(v), B = E(We("msgHash", D)), q = o.create(-B * O), H = o.create(y * O), M = t.BASE.multiplyUnsafe(q).add(x.multiplyUnsafe(H));
      if (M.is0()) throw new Error("point at infinify");
      return M.assertValidity(), M;
    }
    hasHighS() {
      return h(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new f(this.r, o.neg(this.s), this.recovery) : this;
    }
    toBytes(D) {
      if (D === "compact") return Ar(o.toBytes(this.r), o.toBytes(this.s));
      if (D === "der") return Qa(Vt.hexFromSig(this));
      throw new Error("invalid format");
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return cs(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return cs(this.toBytes("compact"));
    }
  }
  const p = Rd(o, r.allowedPrivateKeyLengths, r.wrapPrivateKey), d = { isValidPrivateKey(S) {
    try {
      return p(S), !0;
    } catch {
      return !1;
    }
  }, normPrivateKeyToScalar: p, randomPrivateKey: () => {
    const S = a;
    return nE(i(Od(S)), S);
  }, precompute(S = 8, D = t.BASE) {
    return D.precompute(S, !1);
  } };
  function g(S, D = !0) {
    return t.fromPrivateKey(S).toBytes(D);
  }
  function m(S) {
    if (typeof S == "bigint") return !1;
    if (S instanceof t) return !0;
    const D = We("key", S).length, T = n.BYTES, N = T + 1, y = 2 * T + 1;
    if (!(r.allowedPrivateKeyLengths || o.BYTES === N)) return D === N || D === y;
  }
  function _(S, D, T = !0) {
    if (m(S) === !0) throw new Error("first arg must be private key");
    if (m(D) === !1) throw new Error("second arg must be public key");
    return t.fromHex(D).multiply(p(S)).toBytes(T);
  }
  const I = e.bits2int || function(S) {
    if (S.length > 8192) throw new Error("input is too large");
    const D = Cn(S), T = S.length * 8 - c;
    return T > 0 ? D >> BigInt(T) : D;
  }, E = e.bits2int_modN || function(S) {
    return o.create(I(S));
  }, P = Tn(c);
  function A(S) {
    return Xo("num < 2^" + c, S, Qi, P), o.toBytes(S);
  }
  function k(S, D, T = U) {
    if (["recovered", "canonical"].some((M) => M in T)) throw new Error("sign() legacy options not supported");
    const { hash: N } = e;
    let { lowS: y, prehash: w, extraEntropy: v } = T;
    y == null && (y = !0), S = We("msgHash", S), Kh(T), w && (S = We("prehashed msgHash", N(S)));
    const $ = E(S), x = p(D), O = [A(x), A($)];
    if (v != null && v !== !1) {
      const M = v === !0 ? i(n.BYTES) : v;
      O.push(We("extraEntropy", M));
    }
    const B = Ar(...O), q = $;
    function H(M) {
      const V = I(M);
      if (!o.isValidNot0(V)) return;
      const K = o.inv(V), ie = t.BASE.multiply(V).toAffine(), re = o.create(ie.x);
      if (re === Qi) return;
      const Y = o.create(K * o.create(q + re * x));
      if (Y === Qi) return;
      let fe = (ie.x === re ? 0 : 2) | Number(ie.y & Xi), xe = Y;
      return y && h(Y) && (xe = u(Y), fe ^= 1), new f(re, xe, fe);
    }
    return { seed: B, k2sig: H };
  }
  const U = { lowS: e.lowS, prehash: !1 }, R = { lowS: e.lowS, prehash: !1 };
  function b(S, D, T = U) {
    const { seed: N, k2sig: y } = k(S, D, T);
    return J2(e.hash.outputLen, o.BYTES, s)(N, y);
  }
  t.BASE.precompute(8);
  function C(S, D, T, N = R) {
    const y = S;
    D = We("msgHash", D), T = We("publicKey", T), Kh(N);
    const { lowS: w, prehash: v, format: $ } = N;
    if ("strict" in N) throw new Error("options.strict was renamed to lowS");
    if ($ !== void 0 && !["compact", "der", "js"].includes($)) throw new Error('format must be "compact", "der" or "js"');
    const x = typeof y == "string" || Ya(y), O = !x && !$ && typeof y == "object" && y !== null && typeof y.r == "bigint" && typeof y.s == "bigint";
    if (!x && !O) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let B, q;
    try {
      if (O) if ($ === void 0 || $ === "js") B = new f(y.r, y.s);
      else throw new Error("invalid format");
      if (x) {
        try {
          $ !== "compact" && (B = f.fromDER(y));
        } catch (fe) {
          if (!(fe instanceof Vt.Err)) throw fe;
        }
        !B && $ !== "der" && (B = f.fromCompact(y));
      }
      q = t.fromHex(T);
    } catch {
      return !1;
    }
    if (!B || w && B.hasHighS()) return !1;
    v && (D = e.hash(D));
    const { r: H, s: M } = B, V = E(D), K = o.inv(M), ie = o.create(V * K), re = o.create(H * K), Y = t.BASE.multiplyUnsafe(ie).add(q.multiplyUnsafe(re));
    return Y.is0() ? !1 : o.create(Y.x) === H;
  }
  return Object.freeze({ getPublicKey: g, getSharedSecret: _, sign: b, verify: C, utils: d, Point: t, Signature: f });
}
function SE(t) {
  const e = { a: t.a, b: t.b, p: t.Fp.ORDER, n: t.n, h: t.h, Gx: t.Gx, Gy: t.Gy }, r = t.Fp, i = xi(e.n, t.nBitLength), s = { Fp: r, Fn: i, allowedPrivateKeyLengths: t.allowedPrivateKeyLengths, allowInfinityPoint: t.allowInfinityPoint, endo: t.endo, wrapPrivateKey: t.wrapPrivateKey, isTorsionFree: t.isTorsionFree, clearCofactor: t.clearCofactor, fromBytes: t.fromBytes, toBytes: t.toBytes };
  return { CURVE: e, curveOpts: s };
}
function DE(t) {
  const { CURVE: e, curveOpts: r } = SE(t), i = { hash: t.hash, hmac: t.hmac, randomBytes: t.randomBytes, lowS: t.lowS, bits2int: t.bits2int, bits2int_modN: t.bits2int_modN };
  return { CURVE: e, curveOpts: r, ecdsaOpts: i };
}
function AE(t, e) {
  return Object.assign({}, e, { ProjectivePoint: e.Point, CURVE: t });
}
function OE(t) {
  const { CURVE: e, curveOpts: r, ecdsaOpts: i } = DE(t), s = xE(e, r), n = $E(s, i, r);
  return AE(t, n);
}
function ta(t, e) {
  const r = (i) => OE({ ...t, hash: i });
  return { ...r(e), create: r };
}
const Fd = { p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"), n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), h: BigInt(1), a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"), b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5") }, Nd = { p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"), n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"), h: BigInt(1), a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"), b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"), Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"), Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f") }, Ud = { p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"), h: BigInt(1), a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"), b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"), Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"), Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650") }, PE = xi(Fd.p), CE = xi(Nd.p), TE = xi(Ud.p), RE = ta({ ...Fd, Fp: PE, lowS: !1 }, An);
ta({ ...Nd, Fp: CE, lowS: !1 }, Mv), ta({ ...Ud, Fp: TE, lowS: !1, allowedPrivateKeyLengths: [130, 131, 132] }, jv);
const BE = RE, kd = "base10", je = "base16", _t = "base64pad", ur = "base64url", bs = "utf8", Ld = 0, Kt = 1, vs = 2, FE = 0, Wh = 1, es = 12, sc = 32;
function NE() {
  const t = ea.utils.randomPrivateKey(), e = ea.getPublicKey(t);
  return { privateKey: Je(t, je), publicKey: Je(e, je) };
}
function ra() {
  const t = Ii(sc);
  return Je(t, je);
}
function UE(t, e) {
  const r = ea.getSharedSecret(ut(t, je), ut(e, je)), i = W2(Pn, r, void 0, void 0, sc);
  return Je(i, je);
}
function Xs(t) {
  const e = Pn(ut(t, je));
  return Je(e, je);
}
function Rt(t) {
  const e = Pn(ut(t, bs));
  return Je(e, je);
}
function jd(t) {
  return ut(`${t}`, kd);
}
function Nr(t) {
  return Number(Je(t, kd));
}
function Md(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function qd(t) {
  const e = t.replace(/-/g, "+").replace(/_/g, "/"), r = (4 - e.length % 4) % 4;
  return e + "=".repeat(r);
}
function kE(t) {
  const e = jd(typeof t.type < "u" ? t.type : Ld);
  if (Nr(e) === Kt && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? ut(t.senderPublicKey, je) : void 0, i = typeof t.iv < "u" ? ut(t.iv, je) : Ii(es), s = ut(t.symKey, je), n = vd(s, i).encrypt(ut(t.message, bs)), o = zd({ type: e, sealed: n, iv: i, senderPublicKey: r });
  return t.encoding === ur ? Md(o) : o;
}
function LE(t) {
  const e = ut(t.symKey, je), { sealed: r, iv: i } = us({ encoded: t.encoded, encoding: t.encoding }), s = vd(e, i).decrypt(r);
  if (s === null) throw new Error("Failed to decrypt");
  return Je(s, bs);
}
function jE(t, e) {
  const r = jd(vs), i = Ii(es), s = ut(t, bs), n = zd({ type: r, sealed: s, iv: i });
  return e === ur ? Md(n) : n;
}
function ME(t, e) {
  const { sealed: r } = us({ encoded: t, encoding: e });
  return Je(r, bs);
}
function zd(t) {
  if (Nr(t.type) === vs) return Je(Ji([t.type, t.sealed]), _t);
  if (Nr(t.type) === Kt) {
    if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return Je(Ji([t.type, t.senderPublicKey, t.iv, t.sealed]), _t);
  }
  return Je(Ji([t.type, t.iv, t.sealed]), _t);
}
function us(t) {
  const e = (t.encoding || _t) === ur ? qd(t.encoded) : t.encoded, r = ut(e, _t), i = r.slice(FE, Wh), s = Wh;
  if (Nr(i) === Kt) {
    const c = s + sc, h = c + es, u = r.slice(s, c), l = r.slice(c, h), f = r.slice(h);
    return { type: i, sealed: f, iv: l, senderPublicKey: u };
  }
  if (Nr(i) === vs) {
    const c = r.slice(s), h = Ii(es);
    return { type: i, sealed: c, iv: h };
  }
  const n = s + es, o = r.slice(s, n), a = r.slice(n);
  return { type: i, sealed: a, iv: o };
}
function qE(t, e) {
  const r = us({ encoded: t, encoding: e == null ? void 0 : e.encoding });
  return Hd({ type: Nr(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Je(r.senderPublicKey, je) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Hd(t) {
  const e = (t == null ? void 0 : t.type) || Ld;
  if (e === Kt) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Gh(t) {
  return t.type === Kt && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function Yh(t) {
  return t.type === vs;
}
function zE(t) {
  const e = Buffer.from(t.x, "base64"), r = Buffer.from(t.y, "base64");
  return Ji([new Uint8Array([4]), e, r]);
}
function HE(t, e) {
  const [r, i, s] = t.split("."), n = Buffer.from(qd(s), "base64");
  if (n.length !== 64) throw new Error("Invalid signature length");
  const o = n.slice(0, 32), a = n.slice(32, 64), c = `${r}.${i}`, h = Pn(c), u = zE(e);
  if (!BE.verify(Ji([o, a]), h, u)) throw new Error("Invalid signature");
  return Ho(t).payload;
}
const VE = "irn";
function yn(t) {
  return (t == null ? void 0 : t.relay) || { protocol: VE };
}
function Wi(t) {
  const e = E1[t];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
function KE(t, e = "-") {
  const r = {}, i = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(i)) {
      const n = s.replace(i, ""), o = t[s];
      r[n] = o;
    }
  }), r;
}
function Jh(t) {
  if (!t.includes("wc:")) {
    const h = td(t);
    h != null && h.includes("wc:") && (t = h);
  }
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, i = t.substring(0, e), s = t.substring(e + 1, r).split("@"), n = typeof r < "u" ? t.substring(r) : "", o = new URLSearchParams(n), a = {};
  o.forEach((h, u) => {
    a[u] = h;
  });
  const c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
  return { protocol: i, topic: WE(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: KE(a), methods: c, expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function WE(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function GE(t, e = "-") {
  const r = "relay", i = {};
  return Object.keys(t).forEach((s) => {
    const n = s, o = r + e + n;
    t[n] && (i[o] = t[n]);
  }), i;
}
function Zh(t) {
  const e = new URLSearchParams(), r = GE(t.relay);
  Object.keys(r).sort().forEach((s) => {
    e.set(s, r[s]);
  }), e.set("symKey", t.symKey), t.expiryTimestamp && e.set("expiryTimestamp", t.expiryTimestamp.toString()), t.methods && e.set("methods", t.methods.join(","));
  const i = e.toString();
  return `${t.protocol}:${t.topic}@${t.version}?${i}`;
}
function Ls(t, e, r) {
  return `${t}?wc_ev=${r}&topic=${e}`;
}
var YE = Object.defineProperty, JE = Object.defineProperties, ZE = Object.getOwnPropertyDescriptors, Qh = Object.getOwnPropertySymbols, QE = Object.prototype.hasOwnProperty, XE = Object.prototype.propertyIsEnumerable, Xh = (t, e, r) => e in t ? YE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, e3 = (t, e) => {
  for (var r in e || (e = {})) QE.call(e, r) && Xh(t, r, e[r]);
  if (Qh) for (var r of Qh(e)) XE.call(e, r) && Xh(t, r, e[r]);
  return t;
}, t3 = (t, e) => JE(t, ZE(e));
function $i(t) {
  const e = [];
  return t.forEach((r) => {
    const [i, s] = r.split(":");
    e.push(`${i}:${s}`);
  }), e;
}
function r3(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...$i(r.accounts));
  }), e;
}
function i3(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    $i(i.accounts).includes(e) && r.push(...i.methods);
  }), r;
}
function s3(t, e) {
  const r = [];
  return Object.values(t).forEach((i) => {
    $i(i.accounts).includes(e) && r.push(...i.events);
  }), r;
}
function Bn(t) {
  return t.includes(":");
}
function fi(t) {
  return Bn(t) ? t.split(":")[0] : t;
}
function eu(t) {
  var e, r, i;
  const s = {};
  if (!pr(t)) return s;
  for (const [n, o] of Object.entries(t)) {
    const a = Bn(n) ? [n] : o.chains, c = o.methods || [], h = o.events || [], u = fi(n);
    s[u] = t3(e3({}, s[u]), { chains: Bt(a, (e = s[u]) == null ? void 0 : e.chains), methods: Bt(c, (r = s[u]) == null ? void 0 : r.methods), events: Bt(h, (i = s[u]) == null ? void 0 : i.events) });
  }
  return s;
}
function n3(t) {
  const e = {};
  return t == null || t.forEach((r) => {
    var i;
    const [s, n] = r.split(":");
    e[s] || (e[s] = { accounts: [], chains: [], events: [], methods: [] }), e[s].accounts.push(r), (i = e[s].chains) == null || i.push(`${s}:${n}`);
  }), e;
}
function tu(t, e) {
  e = e.map((i) => i.replace("did:pkh:", ""));
  const r = n3(e);
  for (const [i, s] of Object.entries(r)) s.methods ? s.methods = Bt(s.methods, t) : s.methods = t, s.events = ["chainChanged", "accountsChanged"];
  return r;
}
function o3(t, e) {
  var r, i, s, n, o, a;
  const c = eu(t), h = eu(e), u = {}, l = Object.keys(c).concat(Object.keys(h));
  for (const f of l) u[f] = { chains: Bt((r = c[f]) == null ? void 0 : r.chains, (i = h[f]) == null ? void 0 : i.chains), methods: Bt((s = c[f]) == null ? void 0 : s.methods, (n = h[f]) == null ? void 0 : n.methods), events: Bt((o = c[f]) == null ? void 0 : o.events, (a = h[f]) == null ? void 0 : a.events) };
  return u;
}
const a3 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, c3 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function j(t, e) {
  const { message: r, code: i } = c3[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function le(t, e) {
  const { message: r, code: i } = a3[t];
  return { message: e ? `${r} ${e}` : r, code: i };
}
function lt(t, e) {
  return !!Array.isArray(t);
}
function pr(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Oe(t) {
  return typeof t > "u";
}
function ge(t, e) {
  return e && Oe(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function nc(t, e) {
  return e && Oe(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function h3(t, e) {
  const { requiredNamespaces: r } = e, i = Object.keys(t.namespaces), s = Object.keys(r);
  let n = !0;
  return Dr(s, i) ? (i.forEach((o) => {
    const { accounts: a, methods: c, events: h } = t.namespaces[o], u = $i(a), l = r[o];
    (!Dr(Jf(o, l), u) || !Dr(l.methods, c) || !Dr(l.events, h)) && (n = !1);
  }), n) : !1;
}
function wn(t) {
  return ge(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function u3(t) {
  if (ge(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && wn(r);
    }
  }
  return !1;
}
function l3(t) {
  function e(r) {
    try {
      return typeof new URL(r) < "u";
    } catch {
      return !1;
    }
  }
  try {
    if (ge(t, !1)) {
      if (e(t)) return !0;
      const r = td(t);
      return e(r);
    }
  } catch {
  }
  return !1;
}
function f3(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function d3(t) {
  return t == null ? void 0 : t.topic;
}
function p3(t, e) {
  let r = null;
  return ge(t == null ? void 0 : t.publicKey, !1) || (r = j("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function ru(t) {
  let e = !0;
  return lt(t) ? t.length && (e = t.every((r) => ge(r, !1))) : e = !1, e;
}
function g3(t, e, r) {
  let i = null;
  return lt(e) && e.length ? e.forEach((s) => {
    i || wn(s) || (i = le("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : wn(t) || (i = le("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function y3(t, e, r) {
  let i = null;
  return Object.entries(t).forEach(([s, n]) => {
    if (i) return;
    const o = g3(s, Jf(s, n), `${e} ${r}`);
    o && (i = o);
  }), i;
}
function w3(t, e) {
  let r = null;
  return lt(t) ? t.forEach((i) => {
    r || u3(i) || (r = le("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = le("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function m3(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r) return;
    const s = w3(i == null ? void 0 : i.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function b3(t, e) {
  let r = null;
  return ru(t == null ? void 0 : t.methods) ? ru(t == null ? void 0 : t.events) || (r = le("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = le("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Vd(t, e) {
  let r = null;
  return Object.values(t).forEach((i) => {
    if (r) return;
    const s = b3(i, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function v3(t, e, r) {
  let i = null;
  if (t && pr(t)) {
    const s = Vd(t, e);
    s && (i = s);
    const n = y3(t, e, r);
    n && (i = n);
  } else i = j("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return i;
}
function go(t, e) {
  let r = null;
  if (t && pr(t)) {
    const i = Vd(t, e);
    i && (r = i);
    const s = m3(t, e);
    s && (r = s);
  } else r = j("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Kd(t) {
  return ge(t.protocol, !0);
}
function E3(t, e) {
  let r = !1;
  return t ? t && lt(t) && t.length && t.forEach((i) => {
    r = Kd(i);
  }) : r = !0, r;
}
function _3(t) {
  return typeof t == "number";
}
function Ke(t) {
  return typeof t < "u" && typeof t !== null;
}
function I3(t) {
  return !(!t || typeof t != "object" || !t.code || !nc(t.code, !1) || !t.message || !ge(t.message, !1));
}
function x3(t) {
  return !(Oe(t) || !ge(t.method, !1));
}
function $3(t) {
  return !(Oe(t) || Oe(t.result) && Oe(t.error) || !nc(t.id, !1) || !ge(t.jsonrpc, !1));
}
function S3(t) {
  return !(Oe(t) || !ge(t.name, !1));
}
function iu(t, e) {
  return !(!wn(e) || !r3(t).includes(e));
}
function D3(t, e, r) {
  return ge(r, !1) ? i3(t, e).includes(r) : !1;
}
function A3(t, e, r) {
  return ge(r, !1) ? s3(t, e).includes(r) : !1;
}
function su(t, e, r) {
  let i = null;
  const s = O3(t), n = P3(e), o = Object.keys(s), a = Object.keys(n), c = nu(Object.keys(t)), h = nu(Object.keys(e)), u = c.filter((l) => !h.includes(l));
  return u.length && (i = j("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`)), Dr(o, a) || (i = j("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((l) => {
    if (!l.includes(":") || i) return;
    const f = $i(e[l].accounts);
    f.includes(l) || (i = j("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${l}
        Required: ${l}
        Approved: ${f.toString()}`));
  }), o.forEach((l) => {
    i || (Dr(s[l].methods, n[l].methods) ? Dr(s[l].events, n[l].events) || (i = j("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${l}`)) : i = j("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${l}`));
  }), i;
}
function O3(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var i;
    r.includes(":") ? e[r] = t[r] : (i = t[r].chains) == null || i.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function nu(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function P3(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":")) e[r] = t[r];
    else {
      const i = $i(t[r].accounts);
      i == null || i.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((n) => n.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function C3(t, e) {
  return nc(t, !1) && t <= e.max && t >= e.min;
}
function ou() {
  const t = ws();
  return new Promise((e) => {
    switch (t) {
      case rt.browser:
        e(T3());
        break;
      case rt.reactNative:
        e(R3());
        break;
      case rt.node:
        e(B3());
        break;
      default:
        e(!0);
    }
  });
}
function T3() {
  return _i() && (navigator == null ? void 0 : navigator.onLine);
}
async function R3() {
  if (yr() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function B3() {
  return !0;
}
function F3(t) {
  switch (ws()) {
    case rt.browser:
      N3(t);
      break;
    case rt.reactNative:
      U3(t);
      break;
  }
}
function N3(t) {
  !yr() && _i() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function U3(t) {
  yr() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
function k3() {
  var t;
  return _i() && Tr() ? ((t = Tr()) == null ? void 0 : t.visibilityState) === "visible" : !0;
}
const yo = {};
class ki {
  static get(e) {
    return yo[e];
  }
  static set(e, r) {
    yo[e] = r;
  }
  static delete(e) {
    delete yo[e];
  }
}
function L3(t) {
  const e = ps.decode(t);
  if (e.length < 33) throw new Error("Too short to contain a public key");
  return e.slice(1, 33);
}
function j3({ publicKey: t, signature: e, payload: r }) {
  var i;
  const s = ia(r.method), n = 128 | parseInt(((i = r.version) == null ? void 0 : i.toString()) || "4"), o = z3(r.address), a = r.era === "00" ? new Uint8Array([0]) : ia(r.era);
  if (a.length !== 1 && a.length !== 2) throw new Error("Invalid era length");
  const c = parseInt(r.nonce, 16), h = new Uint8Array([c & 255, c >> 8 & 255]), u = BigInt(`0x${q3(r.tip)}`), l = V3(u), f = new Uint8Array([0, ...t, o, ...e, ...a, ...h, ...l, ...s]), p = H3(f.length + 1);
  return new Uint8Array([...p, n, ...f]);
}
function M3(t) {
  const e = ia(t), r = R1.blake2b(e, void 0, 32);
  return "0x" + Buffer.from(r).toString("hex");
}
function ia(t) {
  return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
function q3(t) {
  return t.startsWith("0x") ? t.slice(2) : t;
}
function z3(t) {
  const e = ps.decode(t)[0];
  return e === 42 ? 0 : e === 60 ? 2 : 1;
}
function H3(t) {
  if (t < 64) return new Uint8Array([t << 2]);
  if (t < 16384) {
    const e = t << 2 | 1;
    return new Uint8Array([e & 255, e >> 8 & 255]);
  } else if (t < 1 << 30) {
    const e = t << 2 | 2;
    return new Uint8Array([e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]);
  } else throw new Error("Compact encoding > 2^30 not supported");
}
function V3(t) {
  if (t < BigInt(1) << BigInt(6)) return new Uint8Array([Number(t << BigInt(2))]);
  if (t < BigInt(1) << BigInt(14)) {
    const e = t << BigInt(2) | BigInt(1);
    return new Uint8Array([Number(e & BigInt(255)), Number(e >> BigInt(8) & BigInt(255))]);
  } else if (t < BigInt(1) << BigInt(30)) {
    const e = t << BigInt(2) | BigInt(2);
    return new Uint8Array([Number(e & BigInt(255)), Number(e >> BigInt(8) & BigInt(255)), Number(e >> BigInt(16) & BigInt(255)), Number(e >> BigInt(24) & BigInt(255))]);
  } else throw new Error("BigInt compact encoding not supported > 2^30");
}
function K3(t) {
  const e = Uint8Array.from(Buffer.from(t.signature, "hex")), r = L3(t.transaction.address), i = j3({ publicKey: r, signature: e, payload: t.transaction }), s = Buffer.from(i).toString("hex");
  return M3(s);
}
class kr {
}
let W3 = class extends kr {
  constructor(e) {
    super();
  }
};
const au = L.FIVE_SECONDS, Lr = { pulse: "heartbeat_pulse" };
let G3 = class Wd extends W3 {
  constructor(e) {
    super(e), this.events = new st.EventEmitter(), this.interval = au, this.interval = (e == null ? void 0 : e.interval) || au;
  }
  static async init(e) {
    const r = new Wd(e);
    return await r.init(), r;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), L.toMiliseconds(this.interval));
  }
  pulse() {
    this.events.emit(Lr.pulse);
  }
};
const Y3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, J3 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Z3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Q3(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    X3(t);
    return;
  }
  return e;
}
function X3(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function js(t, e = {}) {
  if (typeof t != "string")
    return t;
  if (t[0] === '"' && t[t.length - 1] === '"' && t.indexOf("\\") === -1)
    return t.slice(1, -1);
  const r = t.trim();
  if (r.length <= 9)
    switch (r.toLowerCase()) {
      case "true":
        return !0;
      case "false":
        return !1;
      case "undefined":
        return;
      case "null":
        return null;
      case "nan":
        return Number.NaN;
      case "infinity":
        return Number.POSITIVE_INFINITY;
      case "-infinity":
        return Number.NEGATIVE_INFINITY;
    }
  if (!Z3.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (Y3.test(t) || J3.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, Q3);
    }
    return JSON.parse(t);
  } catch (i) {
    if (e.strict)
      throw i;
    return t;
  }
}
function e_(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function Ee(t, ...e) {
  try {
    return e_(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function t_(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function r_(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function en(t) {
  if (t_(t))
    return String(t);
  if (r_(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return en(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
const sa = "base64:";
function i_(t) {
  return typeof t == "string" ? t : sa + o_(t);
}
function s_(t) {
  return typeof t != "string" || !t.startsWith(sa) ? t : n_(t.slice(sa.length));
}
function n_(t) {
  return globalThis.Buffer ? Buffer.from(t, "base64") : Uint8Array.from(
    globalThis.atob(t),
    (e) => e.codePointAt(0)
  );
}
function o_(t) {
  return globalThis.Buffer ? Buffer.from(t).toString("base64") : globalThis.btoa(String.fromCodePoint(...t));
}
function Ve(t) {
  var e;
  return t && ((e = t.split("?")[0]) == null ? void 0 : e.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
}
function a_(...t) {
  return Ve(t.join(":"));
}
function Ms(t) {
  return t = Ve(t), t ? t + ":" : "";
}
function c_(t, e) {
  if (e === void 0)
    return !0;
  let r = 0, i = t.indexOf(":");
  for (; i > -1; )
    r++, i = t.indexOf(":", i + 1);
  return r <= e;
}
function h_(t, e) {
  return e ? t.startsWith(e) && t[t.length - 1] !== "$" : t[t.length - 1] !== "$";
}
const u_ = "memory", l_ = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: u_,
    getInstance: () => t,
    hasItem(e) {
      return t.has(e);
    },
    getItem(e) {
      return t.get(e) ?? null;
    },
    getItemRaw(e) {
      return t.get(e) ?? null;
    },
    setItem(e, r) {
      t.set(e, r);
    },
    setItemRaw(e, r) {
      t.set(e, r);
    },
    removeItem(e) {
      t.delete(e);
    },
    getKeys() {
      return [...t.keys()];
    },
    clear() {
      t.clear();
    },
    dispose() {
      t.clear();
    }
  };
};
function f_(t = {}) {
  const e = {
    mounts: { "": t.driver || l_() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (h) => {
    for (const u of e.mountpoints)
      if (h.startsWith(u))
        return {
          base: u,
          relativeKey: h.slice(u.length),
          driver: e.mounts[u]
        };
    return {
      base: "",
      relativeKey: h,
      driver: e.mounts[""]
    };
  }, i = (h, u) => e.mountpoints.filter(
    (l) => l.startsWith(h) || u && h.startsWith(l)
  ).map((l) => ({
    relativeBase: h.length > l.length ? h.slice(l.length) : void 0,
    mountpoint: l,
    driver: e.mounts[l]
  })), s = (h, u) => {
    if (e.watching) {
      u = Ve(u);
      for (const l of e.watchListeners)
        l(h, u);
    }
  }, n = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const h in e.mounts)
        e.unwatch[h] = await cu(
          e.mounts[h],
          s,
          h
        );
    }
  }, o = async () => {
    if (e.watching) {
      for (const h in e.unwatch)
        await e.unwatch[h]();
      e.unwatch = {}, e.watching = !1;
    }
  }, a = (h, u, l) => {
    const f = /* @__PURE__ */ new Map(), p = (d) => {
      let g = f.get(d.base);
      return g || (g = {
        driver: d.driver,
        base: d.base,
        items: []
      }, f.set(d.base, g)), g;
    };
    for (const d of h) {
      const g = typeof d == "string", m = Ve(g ? d : d.key), _ = g ? void 0 : d.value, I = g || !d.options ? u : { ...u, ...d.options }, E = r(m);
      p(E).items.push({
        key: m,
        value: _,
        relativeKey: E.relativeKey,
        options: I
      });
    }
    return Promise.all([...f.values()].map((d) => l(d))).then(
      (d) => d.flat()
    );
  }, c = {
    // Item
    hasItem(h, u = {}) {
      h = Ve(h);
      const { relativeKey: l, driver: f } = r(h);
      return Ee(f.hasItem, l, u);
    },
    getItem(h, u = {}) {
      h = Ve(h);
      const { relativeKey: l, driver: f } = r(h);
      return Ee(f.getItem, l, u).then(
        (p) => js(p)
      );
    },
    getItems(h, u = {}) {
      return a(h, u, (l) => l.driver.getItems ? Ee(
        l.driver.getItems,
        l.items.map((f) => ({
          key: f.relativeKey,
          options: f.options
        })),
        u
      ).then(
        (f) => f.map((p) => ({
          key: a_(l.base, p.key),
          value: js(p.value)
        }))
      ) : Promise.all(
        l.items.map((f) => Ee(
          l.driver.getItem,
          f.relativeKey,
          f.options
        ).then((p) => ({
          key: f.key,
          value: js(p)
        })))
      ));
    },
    getItemRaw(h, u = {}) {
      h = Ve(h);
      const { relativeKey: l, driver: f } = r(h);
      return f.getItemRaw ? Ee(f.getItemRaw, l, u) : Ee(f.getItem, l, u).then(
        (p) => s_(p)
      );
    },
    async setItem(h, u, l = {}) {
      if (u === void 0)
        return c.removeItem(h);
      h = Ve(h);
      const { relativeKey: f, driver: p } = r(h);
      p.setItem && (await Ee(p.setItem, f, en(u), l), p.watch || s("update", h));
    },
    async setItems(h, u) {
      await a(h, u, async (l) => {
        if (l.driver.setItems)
          return Ee(
            l.driver.setItems,
            l.items.map((f) => ({
              key: f.relativeKey,
              value: en(f.value),
              options: f.options
            })),
            u
          );
        l.driver.setItem && await Promise.all(
          l.items.map((f) => Ee(
            l.driver.setItem,
            f.relativeKey,
            en(f.value),
            f.options
          ))
        );
      });
    },
    async setItemRaw(h, u, l = {}) {
      if (u === void 0)
        return c.removeItem(h, l);
      h = Ve(h);
      const { relativeKey: f, driver: p } = r(h);
      if (p.setItemRaw)
        await Ee(p.setItemRaw, f, u, l);
      else if (p.setItem)
        await Ee(p.setItem, f, i_(u), l);
      else
        return;
      p.watch || s("update", h);
    },
    async removeItem(h, u = {}) {
      typeof u == "boolean" && (u = { removeMeta: u }), h = Ve(h);
      const { relativeKey: l, driver: f } = r(h);
      f.removeItem && (await Ee(f.removeItem, l, u), (u.removeMeta || u.removeMata) && await Ee(f.removeItem, l + "$", u), f.watch || s("remove", h));
    },
    // Meta
    async getMeta(h, u = {}) {
      typeof u == "boolean" && (u = { nativeOnly: u }), h = Ve(h);
      const { relativeKey: l, driver: f } = r(h), p = /* @__PURE__ */ Object.create(null);
      if (f.getMeta && Object.assign(p, await Ee(f.getMeta, l, u)), !u.nativeOnly) {
        const d = await Ee(
          f.getItem,
          l + "$",
          u
        ).then((g) => js(g));
        d && typeof d == "object" && (typeof d.atime == "string" && (d.atime = new Date(d.atime)), typeof d.mtime == "string" && (d.mtime = new Date(d.mtime)), Object.assign(p, d));
      }
      return p;
    },
    setMeta(h, u, l = {}) {
      return this.setItem(h + "$", u, l);
    },
    removeMeta(h, u = {}) {
      return this.removeItem(h + "$", u);
    },
    // Keys
    async getKeys(h, u = {}) {
      var m;
      h = Ms(h);
      const l = i(h, !0);
      let f = [];
      const p = [];
      let d = !0;
      for (const _ of l) {
        (m = _.driver.flags) != null && m.maxDepth || (d = !1);
        const I = await Ee(
          _.driver.getKeys,
          _.relativeBase,
          u
        );
        for (const E of I) {
          const P = _.mountpoint + Ve(E);
          f.some((A) => P.startsWith(A)) || p.push(P);
        }
        f = [
          _.mountpoint,
          ...f.filter((E) => !E.startsWith(_.mountpoint))
        ];
      }
      const g = u.maxDepth !== void 0 && !d;
      return p.filter(
        (_) => (!g || c_(_, u.maxDepth)) && h_(_, h)
      );
    },
    // Utils
    async clear(h, u = {}) {
      h = Ms(h), await Promise.all(
        i(h, !1).map(async (l) => {
          if (l.driver.clear)
            return Ee(l.driver.clear, l.relativeBase, u);
          if (l.driver.removeItem) {
            const f = await l.driver.getKeys(l.relativeBase || "", u);
            return Promise.all(
              f.map((p) => l.driver.removeItem(p, u))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((h) => hu(h))
      );
    },
    async watch(h) {
      return await n(), e.watchListeners.push(h), async () => {
        e.watchListeners = e.watchListeners.filter(
          (u) => u !== h
        ), e.watchListeners.length === 0 && await o();
      };
    },
    async unwatch() {
      e.watchListeners = [], await o();
    },
    // Mount
    mount(h, u) {
      if (h = Ms(h), h && e.mounts[h])
        throw new Error(`already mounted at ${h}`);
      return h && (e.mountpoints.push(h), e.mountpoints.sort((l, f) => f.length - l.length)), e.mounts[h] = u, e.watching && Promise.resolve(cu(u, s, h)).then((l) => {
        e.unwatch[h] = l;
      }).catch(console.error), c;
    },
    async unmount(h, u = !0) {
      var l, f;
      h = Ms(h), !(!h || !e.mounts[h]) && (e.watching && h in e.unwatch && ((f = (l = e.unwatch)[h]) == null || f.call(l), delete e.unwatch[h]), u && await hu(e.mounts[h]), e.mountpoints = e.mountpoints.filter((p) => p !== h), delete e.mounts[h]);
    },
    getMount(h = "") {
      h = Ve(h) + ":";
      const u = r(h);
      return {
        driver: u.driver,
        base: u.base
      };
    },
    getMounts(h = "", u = {}) {
      return h = Ve(h), i(h, u.parents).map((f) => ({
        driver: f.driver,
        base: f.mountpoint
      }));
    },
    // Aliases
    keys: (h, u = {}) => c.getKeys(h, u),
    get: (h, u = {}) => c.getItem(h, u),
    set: (h, u, l = {}) => c.setItem(h, u, l),
    has: (h, u = {}) => c.hasItem(h, u),
    del: (h, u = {}) => c.removeItem(h, u),
    remove: (h, u = {}) => c.removeItem(h, u)
  };
  return c;
}
function cu(t, e, r) {
  return t.watch ? t.watch((i, s) => e(i, r + s)) : () => {
  };
}
async function hu(t) {
  typeof t.dispose == "function" && await Ee(t.dispose);
}
function jr(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Gd(t, e) {
  let r;
  const i = () => {
    if (r)
      return r;
    const s = indexedDB.open(t);
    return s.onupgradeneeded = () => s.result.createObjectStore(e), r = jr(s), r.then((n) => {
      n.onclose = () => r = void 0;
    }, () => {
    }), r;
  };
  return (s, n) => i().then((o) => n(o.transaction(e, s).objectStore(e)));
}
let wo;
function Es() {
  return wo || (wo = Gd("keyval-store", "keyval")), wo;
}
function uu(t, e = Es()) {
  return e("readonly", (r) => jr(r.get(t)));
}
function d_(t, e, r = Es()) {
  return r("readwrite", (i) => (i.put(e, t), jr(i.transaction)));
}
function p_(t, e = Es()) {
  return e("readwrite", (r) => (r.delete(t), jr(r.transaction)));
}
function g_(t = Es()) {
  return t("readwrite", (e) => (e.clear(), jr(e.transaction)));
}
function y_(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, jr(t.transaction);
}
function w_(t = Es()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return jr(e.getAllKeys());
    const r = [];
    return y_(e, (i) => r.push(i.key)).then(() => r);
  });
}
const m_ = "idb-keyval";
var b_ = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let i;
  return t.dbName && t.storeName && (i = Gd(t.dbName, t.storeName)), { name: m_, options: t, async hasItem(s) {
    return !(typeof await uu(r(s), i) > "u");
  }, async getItem(s) {
    return await uu(r(s), i) ?? null;
  }, setItem(s, n) {
    return d_(r(s), n, i);
  }, removeItem(s) {
    return p_(r(s), i);
  }, getKeys() {
    return w_(i);
  }, clear() {
    return g_(i);
  } };
};
const v_ = "WALLET_CONNECT_V2_INDEXED_DB", E_ = "keyvaluestorage";
let __ = class {
  constructor() {
    this.indexedDb = f_({ driver: b_({ dbName: v_, storeName: E_ }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const r = await this.indexedDb.getItem(e);
    if (r !== null) return r;
  }
  async setItem(e, r) {
    await this.indexedDb.setItem(e, Wt(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var mo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tn = { exports: {} };
(function() {
  let t;
  function e() {
  }
  t = e, t.prototype.getItem = function(r) {
    return this.hasOwnProperty(r) ? String(this[r]) : null;
  }, t.prototype.setItem = function(r, i) {
    this[r] = String(i);
  }, t.prototype.removeItem = function(r) {
    delete this[r];
  }, t.prototype.clear = function() {
    const r = this;
    Object.keys(r).forEach(function(i) {
      r[i] = void 0, delete r[i];
    });
  }, t.prototype.key = function(r) {
    return r = r || 0, Object.keys(this)[r];
  }, t.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof mo < "u" && mo.localStorage ? tn.exports = mo.localStorage : typeof window < "u" && window.localStorage ? tn.exports = window.localStorage : tn.exports = new e();
})();
function I_(t) {
  var e;
  return [t[0], Br((e = t[1]) != null ? e : "")];
}
let x_ = class {
  constructor() {
    this.localStorage = tn.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(I_);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null) return Br(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Wt(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
};
const $_ = "wc_storage_version", lu = 1, S_ = async (t, e, r) => {
  const i = $_, s = await e.getItem(i);
  if (s && s >= lu) {
    r(e);
    return;
  }
  const n = await t.getKeys();
  if (!n.length) {
    r(e);
    return;
  }
  const o = [];
  for (; n.length; ) {
    const a = n.shift();
    if (!a) continue;
    const c = a.toLowerCase();
    if (c.includes("wc@") || c.includes("walletconnect") || c.includes("wc_") || c.includes("wallet_connect")) {
      const h = await t.getItem(a);
      await e.setItem(a, h), o.push(a);
    }
  }
  await e.setItem(i, lu), r(e), D_(t, o);
}, D_ = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let A_ = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new x_();
    this.storage = e;
    try {
      const r = new __();
      S_(e, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, r) {
    return await this.initialize(), this.storage.setItem(e, r);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const r = setInterval(() => {
        this.initialized && (clearInterval(r), e());
      }, 20);
    });
  }
};
function O_(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return '"[Circular]"';
  }
}
var P_ = C_;
function C_(t, e, r) {
  var i = r && r.stringify || O_, s = 1;
  if (typeof t == "object" && t !== null) {
    var n = e.length + s;
    if (n === 1) return t;
    var o = new Array(n);
    o[0] = i(t);
    for (var a = 1; a < n; a++)
      o[a] = i(e[a]);
    return o.join(" ");
  }
  if (typeof t != "string")
    return t;
  var c = e.length;
  if (c === 0) return t;
  for (var h = "", u = 1 - s, l = -1, f = t && t.length || 0, p = 0; p < f; ) {
    if (t.charCodeAt(p) === 37 && p + 1 < f) {
      switch (l = l > -1 ? l : 0, t.charCodeAt(p + 1)) {
        case 100:
        case 102:
          if (u >= c || e[u] == null) break;
          l < p && (h += t.slice(l, p)), h += Number(e[u]), l = p + 2, p++;
          break;
        case 105:
          if (u >= c || e[u] == null) break;
          l < p && (h += t.slice(l, p)), h += Math.floor(Number(e[u])), l = p + 2, p++;
          break;
        case 79:
        case 111:
        case 106:
          if (u >= c || e[u] === void 0) break;
          l < p && (h += t.slice(l, p));
          var d = typeof e[u];
          if (d === "string") {
            h += "'" + e[u] + "'", l = p + 2, p++;
            break;
          }
          if (d === "function") {
            h += e[u].name || "<anonymous>", l = p + 2, p++;
            break;
          }
          h += i(e[u]), l = p + 2, p++;
          break;
        case 115:
          if (u >= c)
            break;
          l < p && (h += t.slice(l, p)), h += String(e[u]), l = p + 2, p++;
          break;
        case 37:
          l < p && (h += t.slice(l, p)), h += "%", l = p + 2, p++, u--;
          break;
      }
      ++u;
    }
    ++p;
  }
  return l === -1 ? t : (l < f && (h += t.slice(l)), h);
}
const fu = P_;
var ui = Ft;
const ls = M_().console || {}, T_ = {
  mapHttpRequest: qs,
  mapHttpResponse: qs,
  wrapRequestSerializer: bo,
  wrapResponseSerializer: bo,
  wrapErrorSerializer: bo,
  req: qs,
  res: qs,
  err: U_
};
function R_(t, e) {
  return Array.isArray(t) ? t.filter(function(i) {
    return i !== "!stdSerializers.err";
  }) : t === !0 ? Object.keys(e) : !1;
}
function Ft(t) {
  t = t || {}, t.browser = t.browser || {};
  const e = t.browser.transmit;
  if (e && typeof e.send != "function")
    throw Error("pino: transmit option must have a send function");
  const r = t.browser.write || ls;
  t.browser.write && (t.browser.asObject = !0);
  const i = t.serializers || {}, s = R_(t.browser.serialize, i);
  let n = t.browser.serialize;
  Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (n = !1);
  const o = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof r == "function" && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), t.enabled === !1 && (t.level = "silent");
  const a = t.level || "info", c = Object.create(r);
  c.log || (c.log = fs), Object.defineProperty(c, "levelVal", {
    get: u
  }), Object.defineProperty(c, "level", {
    get: l,
    set: f
  });
  const h = {
    transmit: e,
    serialize: s,
    asObject: t.browser.asObject,
    levels: o,
    timestamp: k_(t)
  };
  c.levels = Ft.levels, c.level = a, c.setMaxListeners = c.getMaxListeners = c.emit = c.addListener = c.on = c.prependListener = c.once = c.prependOnceListener = c.removeListener = c.removeAllListeners = c.listeners = c.listenerCount = c.eventNames = c.write = c.flush = fs, c.serializers = i, c._serialize = s, c._stdErrSerialize = n, c.child = p, e && (c._logEvent = na());
  function u() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function l() {
    return this._level;
  }
  function f(d) {
    if (d !== "silent" && !this.levels.values[d])
      throw Error("unknown level " + d);
    this._level = d, Yr(h, c, "error", "log"), Yr(h, c, "fatal", "error"), Yr(h, c, "warn", "error"), Yr(h, c, "info", "log"), Yr(h, c, "debug", "log"), Yr(h, c, "trace", "log");
  }
  function p(d, g) {
    if (!d)
      throw new Error("missing bindings for child Pino");
    g = g || {}, s && d.serializers && (g.serializers = d.serializers);
    const m = g.serializers;
    if (s && m) {
      var _ = Object.assign({}, i, m), I = t.browser.serialize === !0 ? Object.keys(_) : s;
      delete d.serializers, Fn([d], I, _, this._stdErrSerialize);
    }
    function E(P) {
      this._childLevel = (P._childLevel | 0) + 1, this.error = Jr(P, d, "error"), this.fatal = Jr(P, d, "fatal"), this.warn = Jr(P, d, "warn"), this.info = Jr(P, d, "info"), this.debug = Jr(P, d, "debug"), this.trace = Jr(P, d, "trace"), _ && (this.serializers = _, this._serialize = I), e && (this._logEvent = na(
        [].concat(P._logEvent.bindings, d)
      ));
    }
    return E.prototype = this, new E(this);
  }
  return c;
}
Ft.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal"
  }
};
Ft.stdSerializers = T_;
Ft.stdTimeFunctions = Object.assign({}, { nullTime: Yd, epochTime: Jd, unixTime: L_, isoTime: j_ });
function Yr(t, e, r, i) {
  const s = Object.getPrototypeOf(e);
  e[r] = e.levelVal > e.levels.values[r] ? fs : s[r] ? s[r] : ls[r] || ls[i] || fs, B_(t, e, r);
}
function B_(t, e, r) {
  !t.transmit && e[r] === fs || (e[r] = /* @__PURE__ */ function(i) {
    return function() {
      const n = t.timestamp(), o = new Array(arguments.length), a = Object.getPrototypeOf && Object.getPrototypeOf(this) === ls ? ls : this;
      for (var c = 0; c < o.length; c++) o[c] = arguments[c];
      if (t.serialize && !t.asObject && Fn(o, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? i.call(a, F_(this, r, o, n)) : i.apply(a, o), t.transmit) {
        const h = t.transmit.level || e.level, u = Ft.levels.values[h], l = Ft.levels.values[r];
        if (l < u) return;
        N_(this, {
          ts: n,
          methodLevel: r,
          methodValue: l,
          transmitValue: Ft.levels.values[t.transmit.level || e.level],
          send: t.transmit.send,
          val: e.levelVal
        }, o);
      }
    };
  }(e[r]));
}
function F_(t, e, r, i) {
  t._serialize && Fn(r, t._serialize, t.serializers, t._stdErrSerialize);
  const s = r.slice();
  let n = s[0];
  const o = {};
  i && (o.time = i), o.level = Ft.levels.values[e];
  let a = (t._childLevel | 0) + 1;
  if (a < 1 && (a = 1), n !== null && typeof n == "object") {
    for (; a-- && typeof s[0] == "object"; )
      Object.assign(o, s.shift());
    n = s.length ? fu(s.shift(), s) : void 0;
  } else typeof n == "string" && (n = fu(s.shift(), s));
  return n !== void 0 && (o.msg = n), o;
}
function Fn(t, e, r, i) {
  for (const s in t)
    if (i && t[s] instanceof Error)
      t[s] = Ft.stdSerializers.err(t[s]);
    else if (typeof t[s] == "object" && !Array.isArray(t[s]))
      for (const n in t[s])
        e && e.indexOf(n) > -1 && n in r && (t[s][n] = r[n](t[s][n]));
}
function Jr(t, e, r) {
  return function() {
    const i = new Array(1 + arguments.length);
    i[0] = e;
    for (var s = 1; s < i.length; s++)
      i[s] = arguments[s - 1];
    return t[r].apply(this, i);
  };
}
function N_(t, e, r) {
  const i = e.send, s = e.ts, n = e.methodLevel, o = e.methodValue, a = e.val, c = t._logEvent.bindings;
  Fn(
    r,
    t._serialize || Object.keys(t.serializers),
    t.serializers,
    t._stdErrSerialize === void 0 ? !0 : t._stdErrSerialize
  ), t._logEvent.ts = s, t._logEvent.messages = r.filter(function(h) {
    return c.indexOf(h) === -1;
  }), t._logEvent.level.label = n, t._logEvent.level.value = o, i(n, t._logEvent, a), t._logEvent = na(c);
}
function na(t) {
  return {
    ts: 0,
    messages: [],
    bindings: t || [],
    level: { label: "", value: 0 }
  };
}
function U_(t) {
  const e = {
    type: t.constructor.name,
    msg: t.message,
    stack: t.stack
  };
  for (const r in t)
    e[r] === void 0 && (e[r] = t[r]);
  return e;
}
function k_(t) {
  return typeof t.timestamp == "function" ? t.timestamp : t.timestamp === !1 ? Yd : Jd;
}
function qs() {
  return {};
}
function bo(t) {
  return t;
}
function fs() {
}
function Yd() {
  return !1;
}
function Jd() {
  return Date.now();
}
function L_() {
  return Math.round(Date.now() / 1e3);
}
function j_() {
  return new Date(Date.now()).toISOString();
}
function M_() {
  function t(e) {
    return typeof e < "u" && e;
  }
  try {
    return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
      get: function() {
        return delete Object.prototype.globalThis, this.globalThis = this;
      },
      configurable: !0
    }), globalThis;
  } catch {
    return t(self) || t(window) || t(this) || {};
  }
}
const _s = /* @__PURE__ */ Aa(ui), q_ = { level: "info" }, Is = "custom_context", oc = 1e3 * 1024;
let z_ = class {
  constructor(e) {
    this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
}, du = class {
  constructor(e) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
  }
  append(e) {
    const r = new z_(e);
    if (r.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${r.size}`);
    for (; this.size + r.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = r), this.tail = r) : (this.head = r, this.tail = r), this.lengthInNodes++, this.sizeInBytes += r.size;
  }
  shift() {
    if (!this.head) return;
    const e = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
  }
  toArray() {
    const e = [];
    let r = this.head;
    for (; r !== null; ) e.push(r.value), r = r.next;
    return e;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e = this.head;
    return { next: () => {
      if (!e) return { done: !0, value: null };
      const r = e.value;
      return e = e.next, { done: !1, value: r };
    } };
  }
}, Zd = class {
  constructor(e, r = oc) {
    this.level = e ?? "error", this.levelValue = ui.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = r, this.logs = new du(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e, r) {
    r === ui.levels.values.error ? console.error(e) : r === ui.levels.values.warn ? console.warn(e) : r === ui.levels.values.debug ? console.debug(e) : r === ui.levels.values.trace ? console.trace(e) : console.log(e);
  }
  appendToLogs(e) {
    this.logs.append(Wt({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e }));
    const r = typeof e == "string" ? JSON.parse(e).level : e.level;
    r >= this.levelValue && this.forwardToConsole(e, r);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new du(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e) {
    const r = this.getLogArray();
    return r.push(Wt({ extraMetadata: e })), new Blob(r, { type: "application/json" });
  }
}, H_ = class {
  constructor(e, r = oc) {
    this.baseChunkLogger = new Zd(e, r);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
  downloadLogsBlobInBrowser(e) {
    const r = URL.createObjectURL(this.logsToBlob(e)), i = document.createElement("a");
    i.href = r, i.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(r);
  }
}, V_ = class {
  constructor(e, r = oc) {
    this.baseChunkLogger = new Zd(e, r);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
};
var K_ = Object.defineProperty, W_ = Object.defineProperties, G_ = Object.getOwnPropertyDescriptors, pu = Object.getOwnPropertySymbols, Y_ = Object.prototype.hasOwnProperty, J_ = Object.prototype.propertyIsEnumerable, gu = (t, e, r) => e in t ? K_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, mn = (t, e) => {
  for (var r in e || (e = {})) Y_.call(e, r) && gu(t, r, e[r]);
  if (pu) for (var r of pu(e)) J_.call(e, r) && gu(t, r, e[r]);
  return t;
}, bn = (t, e) => W_(t, G_(e));
function Nn(t) {
  return bn(mn({}, t), { level: (t == null ? void 0 : t.level) || q_.level });
}
function Z_(t, e = Is) {
  return t[e] || "";
}
function Q_(t, e, r = Is) {
  return t[r] = e, t;
}
function Ze(t, e = Is) {
  let r = "";
  return typeof t.bindings > "u" ? r = Z_(t, e) : r = t.bindings().context || "", r;
}
function X_(t, e, r = Is) {
  const i = Ze(t, r);
  return i.trim() ? `${i}/${e}` : e;
}
function Me(t, e, r = Is) {
  const i = X_(t, e, r), s = t.child({ context: i });
  return Q_(s, i, r);
}
function eI(t) {
  var e, r;
  const i = new H_((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return { logger: _s(bn(mn({}, t.opts), { level: "trace", browser: bn(mn({}, (r = t.opts) == null ? void 0 : r.browser), { write: (s) => i.write(s) }) })), chunkLoggerController: i };
}
function tI(t) {
  var e;
  const r = new V_((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return { logger: _s(bn(mn({}, t.opts), { level: "trace" }), r), chunkLoggerController: r };
}
function rI(t) {
  return typeof t.loggerOverride < "u" && typeof t.loggerOverride != "string" ? { logger: t.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? eI(t) : tI(t);
}
var iI = Object.defineProperty, sI = (t, e, r) => e in t ? iI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, yu = (t, e, r) => sI(t, typeof e != "symbol" ? e + "" : e, r);
let nI = class extends kr {
  constructor(e) {
    super(), this.opts = e, yu(this, "protocol", "wc"), yu(this, "version", 2);
  }
};
var oI = Object.defineProperty, aI = (t, e, r) => e in t ? oI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, cI = (t, e, r) => aI(t, e + "", r);
let hI = class extends kr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, cI(this, "records", /* @__PURE__ */ new Map());
  }
}, uI = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
};
class lI extends kr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let fI = class extends kr {
  constructor(e) {
    super();
  }
}, dI = class {
  constructor(e, r, i, s) {
    this.core = e, this.logger = r, this.name = i;
  }
}, pI = class extends kr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, gI = class extends kr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, yI = class {
  constructor(e, r, i) {
    this.core = e, this.logger = r, this.store = i;
  }
}, wI = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, mI = class {
  constructor(e, r, i) {
    this.core = e, this.logger = r, this.telemetryEnabled = i;
  }
};
var bI = Object.defineProperty, vI = (t, e, r) => e in t ? bI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, wu = (t, e, r) => vI(t, typeof e != "symbol" ? e + "" : e, r);
let EI = class {
  constructor(e) {
    this.opts = e, wu(this, "protocol", "wc"), wu(this, "version", 2);
  }
}, _I = class {
  constructor(e) {
    this.client = e;
  }
};
const II = "PARSE_ERROR", xI = "INVALID_REQUEST", $I = "METHOD_NOT_FOUND", SI = "INVALID_PARAMS", Qd = "INTERNAL_ERROR", ac = "SERVER_ERROR", DI = [-32700, -32600, -32601, -32602, -32603], ts = {
  [II]: { code: -32700, message: "Parse error" },
  [xI]: { code: -32600, message: "Invalid Request" },
  [$I]: { code: -32601, message: "Method not found" },
  [SI]: { code: -32602, message: "Invalid params" },
  [Qd]: { code: -32603, message: "Internal error" },
  [ac]: { code: -32e3, message: "Server error" }
}, Xd = ac;
function AI(t) {
  return DI.includes(t);
}
function mu(t) {
  return Object.keys(ts).includes(t) ? ts[t] : ts[Xd];
}
function OI(t) {
  const e = Object.values(ts).find((r) => r.code === t);
  return e || ts[Xd];
}
function ep(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var tp = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var oa = function(t, e) {
  return oa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var s in i) i.hasOwnProperty(s) && (r[s] = i[s]);
  }, oa(t, e);
};
function PI(t, e) {
  oa(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var aa = function() {
  return aa = Object.assign || function(e) {
    for (var r, i = 1, s = arguments.length; i < s; i++) {
      r = arguments[i];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, aa.apply(this, arguments);
};
function CI(t, e) {
  var r = {};
  for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(t); s < i.length; s++)
      e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (r[i[s]] = t[i[s]]);
  return r;
}
function TI(t, e, r, i) {
  var s = arguments.length, n = s < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, r) : i, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(t, e, r, i);
  else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (n = (s < 3 ? o(n) : s > 3 ? o(e, r, n) : o(e, r)) || n);
  return s > 3 && n && Object.defineProperty(e, r, n), n;
}
function RI(t, e) {
  return function(r, i) {
    e(r, i, t);
  };
}
function BI(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(t, e);
}
function FI(t, e, r, i) {
  function s(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function a(u) {
      try {
        h(i.next(u));
      } catch (l) {
        o(l);
      }
    }
    function c(u) {
      try {
        h(i.throw(u));
      } catch (l) {
        o(l);
      }
    }
    function h(u) {
      u.done ? n(u.value) : s(u.value).then(a, c);
    }
    h((i = i.apply(t, e || [])).next());
  });
}
function NI(t, e) {
  var r = { label: 0, sent: function() {
    if (n[0] & 1) throw n[1];
    return n[1];
  }, trys: [], ops: [] }, i, s, n, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(h) {
    return function(u) {
      return c([h, u]);
    };
  }
  function c(h) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (i = 1, s && (n = h[0] & 2 ? s.return : h[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, h[1])).done) return n;
      switch (s = 0, n && (h = [h[0] & 2, n.value]), h[0]) {
        case 0:
        case 1:
          n = h;
          break;
        case 4:
          return r.label++, { value: h[1], done: !1 };
        case 5:
          r.label++, s = h[1], h = [0];
          continue;
        case 7:
          h = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (n = r.trys, !(n = n.length > 0 && n[n.length - 1]) && (h[0] === 6 || h[0] === 2)) {
            r = 0;
            continue;
          }
          if (h[0] === 3 && (!n || h[1] > n[0] && h[1] < n[3])) {
            r.label = h[1];
            break;
          }
          if (h[0] === 6 && r.label < n[1]) {
            r.label = n[1], n = h;
            break;
          }
          if (n && r.label < n[2]) {
            r.label = n[2], r.ops.push(h);
            break;
          }
          n[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      h = e.call(t, r);
    } catch (u) {
      h = [6, u], s = 0;
    } finally {
      i = n = 0;
    }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function UI(t, e, r, i) {
  i === void 0 && (i = r), t[i] = e[r];
}
function kI(t, e) {
  for (var r in t) r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function ca(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], i = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function rp(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var i = r.call(t), s, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; ) n.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = i.return) && r.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return n;
}
function LI() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(rp(arguments[e]));
  return t;
}
function jI() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var i = Array(t), s = 0, e = 0; e < r; e++)
    for (var n = arguments[e], o = 0, a = n.length; o < a; o++, s++)
      i[s] = n[o];
  return i;
}
function ds(t) {
  return this instanceof ds ? (this.v = t, this) : new ds(t);
}
function MI(t, e, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(t, e || []), s, n = [];
  return s = {}, o("next"), o("throw"), o("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(f) {
    i[f] && (s[f] = function(p) {
      return new Promise(function(d, g) {
        n.push([f, p, d, g]) > 1 || a(f, p);
      });
    });
  }
  function a(f, p) {
    try {
      c(i[f](p));
    } catch (d) {
      l(n[0][3], d);
    }
  }
  function c(f) {
    f.value instanceof ds ? Promise.resolve(f.value.v).then(h, u) : l(n[0][2], f);
  }
  function h(f) {
    a("next", f);
  }
  function u(f) {
    a("throw", f);
  }
  function l(f, p) {
    f(p), n.shift(), n.length && a(n[0][0], n[0][1]);
  }
}
function qI(t) {
  var e, r;
  return e = {}, i("next"), i("throw", function(s) {
    throw s;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(s, n) {
    e[s] = t[s] ? function(o) {
      return (r = !r) ? { value: ds(t[s](o)), done: s === "return" } : n ? n(o) : o;
    } : n;
  }
}
function zI(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof ca == "function" ? ca(t) : t[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function i(n) {
    r[n] = t[n] && function(o) {
      return new Promise(function(a, c) {
        o = t[n](o), s(a, c, o.done, o.value);
      });
    };
  }
  function s(n, o, a, c) {
    Promise.resolve(c).then(function(h) {
      n({ value: h, done: a });
    }, o);
  }
}
function HI(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function VI(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function KI(t) {
  return t && t.__esModule ? t : { default: t };
}
function WI(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function GI(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const YI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return aa;
  },
  __asyncDelegator: qI,
  __asyncGenerator: MI,
  __asyncValues: zI,
  __await: ds,
  __awaiter: FI,
  __classPrivateFieldGet: WI,
  __classPrivateFieldSet: GI,
  __createBinding: UI,
  __decorate: TI,
  __exportStar: kI,
  __extends: PI,
  __generator: NI,
  __importDefault: KI,
  __importStar: VI,
  __makeTemplateObject: HI,
  __metadata: BI,
  __param: RI,
  __read: rp,
  __rest: CI,
  __spread: LI,
  __spreadArrays: jI,
  __values: ca
}, Symbol.toStringTag, { value: "Module" })), JI = /* @__PURE__ */ El(YI);
var Mt = {}, bu;
function ZI() {
  if (bu) return Mt;
  bu = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.isBrowserCryptoAvailable = Mt.getSubtleCrypto = Mt.getBrowerCrypto = void 0;
  function t() {
    return (Tt == null ? void 0 : Tt.crypto) || (Tt == null ? void 0 : Tt.msCrypto) || {};
  }
  Mt.getBrowerCrypto = t;
  function e() {
    const i = t();
    return i.subtle || i.webkitSubtle;
  }
  Mt.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return Mt.isBrowserCryptoAvailable = r, Mt;
}
var qt = {}, vu;
function QI() {
  if (vu) return qt;
  vu = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.isBrowser = qt.isNode = qt.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  qt.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  qt.isNode = e;
  function r() {
    return !t() && !e();
  }
  return qt.isBrowser = r, qt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = JI;
  e.__exportStar(ZI(), t), e.__exportStar(QI(), t);
})(tp);
function Pt(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Cr(t = 6) {
  return BigInt(Pt(t));
}
function fr(t, e, r) {
  return {
    id: r || Pt(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Un(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function kn(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: XI(e)
  };
}
function XI(t, e) {
  return typeof t > "u" ? mu(Qd) : (typeof t == "string" && (t = Object.assign(Object.assign({}, mu(ac)), { message: t })), AI(t.code) && (t = OI(t.code)), t);
}
class ex {
}
class tx extends ex {
  constructor() {
    super();
  }
}
class rx extends tx {
  constructor(e) {
    super();
  }
}
const ix = "^https?:", sx = "^wss?:";
function nx(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function ip(t, e) {
  const r = nx(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function Eu(t) {
  return ip(t, ix);
}
function _u(t) {
  return ip(t, sx);
}
function ox(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function sp(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function cc(t) {
  return sp(t) && "method" in t;
}
function Ln(t) {
  return sp(t) && (Ct(t) || ct(t));
}
function Ct(t) {
  return "result" in t;
}
function ct(t) {
  return "error" in t;
}
let pt = class extends rx {
  constructor(e) {
    super(e), this.events = new st.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async request(e, r) {
    return this.requestStrict(fr(e.method, e.params || [], e.id || Cr().toString()), r);
  }
  async requestStrict(e, r) {
    return new Promise(async (i, s) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (n) {
        s(n);
      }
      this.events.on(`${e.id}`, (n) => {
        ct(n) ? s(n.error) : i(n.result);
      });
      try {
        await this.connection.send(e, r);
      } catch (n) {
        s(n);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Ln(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
};
const ax = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), cx = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Iu = (t) => t.split("?")[0], xu = 10, hx = ax();
let ux = class {
  constructor(e) {
    if (this.url = e, this.events = new st.EventEmitter(), this.registering = !1, !_u(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (i) => {
        this.onClose(i), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Wt(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!_u(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((i, s) => {
        this.events.once("register_error", (n) => {
          this.resetMaxListeners(), s(n);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return s(new Error("WebSocket connection is missing or invalid"));
          i(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((r, i) => {
      const s = tp.isReactNative() ? void 0 : { rejectUnauthorized: !ox(e) }, n = new hx(e, [], s);
      cx() ? n.onerror = (o) => {
        const a = o;
        i(this.emitError(a.error));
      } : n.on("error", (o) => {
        i(this.emitError(o));
      }), n.onopen = () => {
        this.onOpen(n), r(n);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (r) => this.onPayload(r), e.onclose = (r) => this.onClose(r), this.socket = e, this.registering = !1, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const r = typeof e.data == "string" ? Br(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const i = this.parseError(r), s = i.message || i.toString(), n = kn(e, s);
    this.events.emit("payload", n);
  }
  parseError(e, r = this.url) {
    return ep(e, Iu(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > xu && this.events.setMaxListeners(xu);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Iu(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
};
const np = "wc", op = 2, ha = "core", Nt = `${np}@2:${ha}:`, lx = { logger: "error" }, fx = { database: ":memory:" }, dx = "crypto", $u = "client_ed25519_seed", px = L.ONE_DAY, gx = "keychain", yx = "0.3", wx = "messages", mx = "0.3", Su = L.SIX_HOURS, bx = "publisher", ap = "irn", vx = "error", cp = "wss://relay.walletconnect.org", Ex = "relayer", _e = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, _x = "_subscription", nt = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Ix = 0.1, ua = "2.21.3", ue = { link_mode: "link_mode", relay: "relay" }, rn = { inbound: "inbound", outbound: "outbound" }, xx = "0.3", $x = "WALLETCONNECT_CLIENT_ID", Du = "WALLETCONNECT_LINK_MODE_APPS", et = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Sx = "subscription", Dx = "0.3", Ax = "pairing", Ox = "0.3", Li = { wc_pairingDelete: { req: { ttl: L.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: L.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: L.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: L.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: L.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: L.ONE_DAY, prompt: !1, tag: 0 } } }, $r = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, wt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Px = "history", Cx = "0.3", Tx = "expirer", at = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Rx = "0.3", Bx = "verify-api", Fx = "https://verify.walletconnect.com", hp = "https://verify.walletconnect.org", rs = hp, Nx = `${rs}/v3`, Ux = [Fx, hp], kx = "echo", Lx = "https://echo.walletconnect.com", Ot = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, Ht = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, mt = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" }, vr = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" }, Er = { authenticated_session_approve_started: "authenticated_session_approve_started", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve" }, ji = { no_internet_connection: "no_internet_connection", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, jx = 0.1, Mx = "event-client", qx = 86400, zx = "https://pulse.walletconnect.org/batch";
function Hx(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), o = n.charCodeAt(0);
    if (r[o] !== 255) throw new TypeError(n + " is ambiguous");
    r[o] = s;
  }
  var a = t.length, c = t.charAt(0), h = Math.log(a) / Math.log(256), u = Math.log(256) / Math.log(a);
  function l(d) {
    if (d instanceof Uint8Array || (ArrayBuffer.isView(d) ? d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength) : Array.isArray(d) && (d = Uint8Array.from(d))), !(d instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (d.length === 0) return "";
    for (var g = 0, m = 0, _ = 0, I = d.length; _ !== I && d[_] === 0; ) _++, g++;
    for (var E = (I - _) * u + 1 >>> 0, P = new Uint8Array(E); _ !== I; ) {
      for (var A = d[_], k = 0, U = E - 1; (A !== 0 || k < m) && U !== -1; U--, k++) A += 256 * P[U] >>> 0, P[U] = A % a >>> 0, A = A / a >>> 0;
      if (A !== 0) throw new Error("Non-zero carry");
      m = k, _++;
    }
    for (var R = E - m; R !== E && P[R] === 0; ) R++;
    for (var b = c.repeat(g); R < E; ++R) b += t.charAt(P[R]);
    return b;
  }
  function f(d) {
    if (typeof d != "string") throw new TypeError("Expected String");
    if (d.length === 0) return new Uint8Array();
    var g = 0;
    if (d[g] !== " ") {
      for (var m = 0, _ = 0; d[g] === c; ) m++, g++;
      for (var I = (d.length - g) * h + 1 >>> 0, E = new Uint8Array(I); d[g]; ) {
        var P = r[d.charCodeAt(g)];
        if (P === 255) return;
        for (var A = 0, k = I - 1; (P !== 0 || A < _) && k !== -1; k--, A++) P += a * E[k] >>> 0, E[k] = P % 256 >>> 0, P = P / 256 >>> 0;
        if (P !== 0) throw new Error("Non-zero carry");
        _ = A, g++;
      }
      if (d[g] !== " ") {
        for (var U = I - _; U !== I && E[U] === 0; ) U++;
        for (var R = new Uint8Array(m + (I - U)), b = m; U !== I; ) R[b++] = E[U++];
        return R;
      }
    }
  }
  function p(d) {
    var g = f(d);
    if (g) return g;
    throw new Error(`Non-${e} character`);
  }
  return { encode: l, decodeUnsafe: f, decode: p };
}
var Vx = Hx, Kx = Vx;
const up = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Wx = (t) => new TextEncoder().encode(t), Gx = (t) => new TextDecoder().decode(t);
class Yx {
  constructor(e, r, i) {
    this.name = e, this.prefix = r, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Jx {
  constructor(e, r, i) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return lp(this, e);
  }
}
class Zx {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return lp(this, e);
  }
  decode(e) {
    const r = e[0], i = this.decoders[r];
    if (i) return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const lp = (t, e) => new Zx({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Qx {
  constructor(e, r, i, s) {
    this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = s, this.encoder = new Yx(e, r, i), this.decoder = new Jx(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const jn = ({ name: t, prefix: e, encode: r, decode: i }) => new Qx(t, e, r, i), xs = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: i, decode: s } = Kx(r, e);
  return jn({ prefix: t, name: e, encode: i, decode: (n) => up(s(n)) });
}, Xx = (t, e, r, i) => {
  const s = {};
  for (let u = 0; u < e.length; ++u) s[e[u]] = u;
  let n = t.length;
  for (; t[n - 1] === "="; ) --n;
  const o = new Uint8Array(n * r / 8 | 0);
  let a = 0, c = 0, h = 0;
  for (let u = 0; u < n; ++u) {
    const l = s[t[u]];
    if (l === void 0) throw new SyntaxError(`Non-${i} character`);
    c = c << r | l, a += r, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
  }
  if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
  return o;
}, e8 = (t, e, r) => {
  const i = e[e.length - 1] === "=", s = (1 << r) - 1;
  let n = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > r; ) o -= r, n += e[s & a >> o];
  if (o && (n += e[s & a << r - o]), i) for (; n.length * r & 7; ) n += "=";
  return n;
}, Te = ({ name: t, prefix: e, bitsPerChar: r, alphabet: i }) => jn({ prefix: e, name: t, encode(s) {
  return e8(s, i, r);
}, decode(s) {
  return Xx(s, i, r, t);
} }), t8 = jn({ prefix: "\0", name: "identity", encode: (t) => Gx(t), decode: (t) => Wx(t) });
var r8 = Object.freeze({ __proto__: null, identity: t8 });
const i8 = Te({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var s8 = Object.freeze({ __proto__: null, base2: i8 });
const n8 = Te({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var o8 = Object.freeze({ __proto__: null, base8: n8 });
const a8 = xs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var c8 = Object.freeze({ __proto__: null, base10: a8 });
const h8 = Te({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), u8 = Te({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var l8 = Object.freeze({ __proto__: null, base16: h8, base16upper: u8 });
const f8 = Te({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), d8 = Te({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), p8 = Te({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), g8 = Te({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), y8 = Te({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), w8 = Te({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), m8 = Te({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), b8 = Te({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), v8 = Te({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var E8 = Object.freeze({ __proto__: null, base32: f8, base32upper: d8, base32pad: p8, base32padupper: g8, base32hex: y8, base32hexupper: w8, base32hexpad: m8, base32hexpadupper: b8, base32z: v8 });
const _8 = xs({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), I8 = xs({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var x8 = Object.freeze({ __proto__: null, base36: _8, base36upper: I8 });
const $8 = xs({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), S8 = xs({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var D8 = Object.freeze({ __proto__: null, base58btc: $8, base58flickr: S8 });
const A8 = Te({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), O8 = Te({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), P8 = Te({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), C8 = Te({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var T8 = Object.freeze({ __proto__: null, base64: A8, base64pad: O8, base64url: P8, base64urlpad: C8 });
const fp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), R8 = fp.reduce((t, e, r) => (t[r] = e, t), []), B8 = fp.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function F8(t) {
  return t.reduce((e, r) => (e += R8[r], e), "");
}
function N8(t) {
  const e = [];
  for (const r of t) {
    const i = B8[r.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const U8 = jn({ prefix: "🚀", name: "base256emoji", encode: F8, decode: N8 });
var k8 = Object.freeze({ __proto__: null, base256emoji: U8 }), L8 = dp, Au = 128, j8 = -128, M8 = Math.pow(2, 31);
function dp(t, e, r) {
  e = e || [], r = r || 0;
  for (var i = r; t >= M8; ) e[r++] = t & 255 | Au, t /= 128;
  for (; t & j8; ) e[r++] = t & 255 | Au, t >>>= 7;
  return e[r] = t | 0, dp.bytes = r - i + 1, e;
}
var q8 = la, z8 = 128, Ou = 127;
function la(t, i) {
  var r = 0, i = i || 0, s = 0, n = i, o, a = t.length;
  do {
    if (n >= a) throw la.bytes = 0, new RangeError("Could not decode varint");
    o = t[n++], r += s < 28 ? (o & Ou) << s : (o & Ou) * Math.pow(2, s), s += 7;
  } while (o >= z8);
  return la.bytes = n - i, r;
}
var H8 = Math.pow(2, 7), V8 = Math.pow(2, 14), K8 = Math.pow(2, 21), W8 = Math.pow(2, 28), G8 = Math.pow(2, 35), Y8 = Math.pow(2, 42), J8 = Math.pow(2, 49), Z8 = Math.pow(2, 56), Q8 = Math.pow(2, 63), X8 = function(t) {
  return t < H8 ? 1 : t < V8 ? 2 : t < K8 ? 3 : t < W8 ? 4 : t < G8 ? 5 : t < Y8 ? 6 : t < J8 ? 7 : t < Z8 ? 8 : t < Q8 ? 9 : 10;
}, e$ = { encode: L8, decode: q8, encodingLength: X8 }, pp = e$;
const Pu = (t, e, r = 0) => (pp.encode(t, e, r), e), Cu = (t) => pp.encodingLength(t), fa = (t, e) => {
  const r = e.byteLength, i = Cu(t), s = i + Cu(r), n = new Uint8Array(s + r);
  return Pu(t, n, 0), Pu(r, n, i), n.set(e, s), new t$(t, r, e, n);
};
class t$ {
  constructor(e, r, i, s) {
    this.code = e, this.size = r, this.digest = i, this.bytes = s;
  }
}
const gp = ({ name: t, code: e, encode: r }) => new r$(t, e, r);
class r$ {
  constructor(e, r, i) {
    this.name = e, this.code = r, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? fa(this.code, r) : r.then((i) => fa(this.code, i));
    } else throw Error("Unknown type, must be binary type");
  }
}
const yp = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), i$ = gp({ name: "sha2-256", code: 18, encode: yp("SHA-256") }), s$ = gp({ name: "sha2-512", code: 19, encode: yp("SHA-512") });
var n$ = Object.freeze({ __proto__: null, sha256: i$, sha512: s$ });
const wp = 0, o$ = "identity", mp = up, a$ = (t) => fa(wp, mp(t)), c$ = { code: wp, name: o$, encode: mp, digest: a$ };
var h$ = Object.freeze({ __proto__: null, identity: c$ });
new TextEncoder(), new TextDecoder();
const Tu = { ...r8, ...s8, ...o8, ...c8, ...l8, ...E8, ...x8, ...D8, ...T8, ...k8 };
({ ...n$, ...h$ });
function bp(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function u$(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? bp(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function vp(t, e, r, i) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: i } };
}
const Ru = vp("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), vo = vp("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = u$(t.length);
  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
  return e;
}), l$ = { utf8: Ru, "utf-8": Ru, hex: Tu.base16, latin1: vo, ascii: vo, binary: vo, ...Tu };
function f$(t, e = "utf8") {
  const r = l$[e];
  if (!r) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? bp(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
var d$ = Object.defineProperty, p$ = (t, e, r) => e in t ? d$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Dt = (t, e, r) => p$(t, typeof e != "symbol" ? e + "" : e, r);
class g$ {
  constructor(e, r) {
    this.core = e, this.logger = r, Dt(this, "keychain", /* @__PURE__ */ new Map()), Dt(this, "name", gx), Dt(this, "version", yx), Dt(this, "initialized", !1), Dt(this, "storagePrefix", Nt), Dt(this, "init", async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }), Dt(this, "has", (i) => (this.isInitialized(), this.keychain.has(i))), Dt(this, "set", async (i, s) => {
      this.isInitialized(), this.keychain.set(i, s), await this.persist();
    }), Dt(this, "get", (i) => {
      this.isInitialized();
      const s = this.keychain.get(i);
      if (typeof s > "u") {
        const { message: n } = j("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(n);
      }
      return s;
    }), Dt(this, "del", async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }), this.core = e, this.logger = Me(r, this.name);
  }
  get context() {
    return Ze(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Vo(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Ko(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var y$ = Object.defineProperty, w$ = (t, e, r) => e in t ? y$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, De = (t, e, r) => w$(t, typeof e != "symbol" ? e + "" : e, r);
class m$ {
  constructor(e, r, i) {
    this.core = e, this.logger = r, De(this, "name", dx), De(this, "keychain"), De(this, "randomSessionIdentifier", ra()), De(this, "initialized", !1), De(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }), De(this, "hasKeys", (s) => (this.isInitialized(), this.keychain.has(s))), De(this, "getClientId", async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), n = ch(s);
      return Cf(n.publicKey);
    }), De(this, "generateKeyPair", () => {
      this.isInitialized();
      const s = NE();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }), De(this, "signJWT", async (s) => {
      this.isInitialized();
      const n = await this.getClientSeed(), o = ch(n), a = this.randomSessionIdentifier;
      return await xb(a, s, px, o);
    }), De(this, "generateSharedKey", (s, n, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(s), c = UE(a, n);
      return this.setSymKey(c, o);
    }), De(this, "setSymKey", async (s, n) => {
      this.isInitialized();
      const o = n || Xs(s);
      return await this.keychain.set(o, s), o;
    }), De(this, "deleteKeyPair", async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }), De(this, "deleteSymKey", async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }), De(this, "encode", async (s, n, o) => {
      this.isInitialized();
      const a = Hd(o), c = Wt(n);
      if (Yh(a)) return jE(c, o == null ? void 0 : o.encoding);
      if (Gh(a)) {
        const f = a.senderPublicKey, p = a.receiverPublicKey;
        s = await this.generateSharedKey(f, p);
      }
      const h = this.getSymKey(s), { type: u, senderPublicKey: l } = a;
      return kE({ type: u, symKey: h, message: c, senderPublicKey: l, encoding: o == null ? void 0 : o.encoding });
    }), De(this, "decode", async (s, n, o) => {
      this.isInitialized();
      const a = qE(n, o);
      if (Yh(a)) {
        const c = ME(n, o == null ? void 0 : o.encoding);
        return Br(c);
      }
      if (Gh(a)) {
        const c = a.receiverPublicKey, h = a.senderPublicKey;
        s = await this.generateSharedKey(c, h);
      }
      try {
        const c = this.getSymKey(s), h = LE({ symKey: c, encoded: n, encoding: o == null ? void 0 : o.encoding });
        return Br(h);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }), De(this, "getPayloadType", (s, n = _t) => {
      const o = us({ encoded: s, encoding: n });
      return Nr(o.type);
    }), De(this, "getPayloadSenderPublicKey", (s, n = _t) => {
      const o = us({ encoded: s, encoding: n });
      return o.senderPublicKey ? Je(o.senderPublicKey, je) : void 0;
    }), this.core = e, this.logger = Me(r, this.name), this.keychain = i || new g$(this.core, this.logger);
  }
  get context() {
    return Ze(this.logger);
  }
  async setPrivateKey(e, r) {
    return await this.keychain.set(e, r), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get($u);
    } catch {
      e = ra(), await this.keychain.set($u, e);
    }
    return f$(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var b$ = Object.defineProperty, v$ = Object.defineProperties, E$ = Object.getOwnPropertyDescriptors, Bu = Object.getOwnPropertySymbols, _$ = Object.prototype.hasOwnProperty, I$ = Object.prototype.propertyIsEnumerable, da = (t, e, r) => e in t ? b$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, x$ = (t, e) => {
  for (var r in e || (e = {})) _$.call(e, r) && da(t, r, e[r]);
  if (Bu) for (var r of Bu(e)) I$.call(e, r) && da(t, r, e[r]);
  return t;
}, $$ = (t, e) => v$(t, E$(e)), Qe = (t, e, r) => da(t, typeof e != "symbol" ? e + "" : e, r);
class S$ extends uI {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, Qe(this, "messages", /* @__PURE__ */ new Map()), Qe(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), Qe(this, "name", wx), Qe(this, "version", mx), Qe(this, "initialized", !1), Qe(this, "storagePrefix", Nt), Qe(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i);
          const s = await this.getRelayerMessagesWithoutClientAck();
          typeof s < "u" && (this.messagesWithoutClientAck = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }), Qe(this, "set", async (i, s, n) => {
      this.isInitialized();
      const o = Rt(s);
      let a = this.messages.get(i);
      if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
      if (a[o] = s, this.messages.set(i, a), n === rn.inbound) {
        const c = this.messagesWithoutClientAck.get(i) || {};
        this.messagesWithoutClientAck.set(i, $$(x$({}, c), { [o]: s }));
      }
      return await this.persist(), o;
    }), Qe(this, "get", (i) => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }), Qe(this, "getWithoutAck", (i) => {
      this.isInitialized();
      const s = {};
      for (const n of i) {
        const o = this.messagesWithoutClientAck.get(n) || {};
        s[n] = Object.values(o);
      }
      return s;
    }), Qe(this, "has", (i, s) => {
      this.isInitialized();
      const n = this.get(i), o = Rt(s);
      return typeof n[o] < "u";
    }), Qe(this, "ack", async (i, s) => {
      this.isInitialized();
      const n = this.messagesWithoutClientAck.get(i);
      if (typeof n > "u") return;
      const o = Rt(s);
      delete n[o], Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(i) : this.messagesWithoutClientAck.set(i, n), await this.persist();
    }), Qe(this, "del", async (i) => {
      this.isInitialized(), this.messages.delete(i), this.messagesWithoutClientAck.delete(i), await this.persist();
    }), this.logger = Me(e, this.name), this.core = r;
  }
  get context() {
    return Ze(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Vo(e));
  }
  async setRelayerMessagesWithoutClientAck(e) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, Vo(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Ko(e) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e < "u" ? Ko(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var D$ = Object.defineProperty, A$ = Object.defineProperties, O$ = Object.getOwnPropertyDescriptors, Fu = Object.getOwnPropertySymbols, P$ = Object.prototype.hasOwnProperty, C$ = Object.prototype.propertyIsEnumerable, pa = (t, e, r) => e in t ? D$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, zs = (t, e) => {
  for (var r in e || (e = {})) P$.call(e, r) && pa(t, r, e[r]);
  if (Fu) for (var r of Fu(e)) C$.call(e, r) && pa(t, r, e[r]);
  return t;
}, Eo = (t, e) => A$(t, O$(e)), bt = (t, e, r) => pa(t, typeof e != "symbol" ? e + "" : e, r);
class T$ extends lI {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, bt(this, "events", new st.EventEmitter()), bt(this, "name", bx), bt(this, "queue", /* @__PURE__ */ new Map()), bt(this, "publishTimeout", L.toMiliseconds(L.ONE_MINUTE)), bt(this, "initialPublishTimeout", L.toMiliseconds(L.ONE_SECOND * 15)), bt(this, "needsTransportRestart", !1), bt(this, "publish", async (i, s, n) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n } });
      const a = (n == null ? void 0 : n.ttl) || Su, c = yn(n), h = (n == null ? void 0 : n.prompt) || !1, u = (n == null ? void 0 : n.tag) || 0, l = (n == null ? void 0 : n.id) || Cr().toString(), f = { topic: i, message: s, opts: { ttl: a, relay: c, prompt: h, tag: u, id: l, attestation: n == null ? void 0 : n.attestation, tvf: n == null ? void 0 : n.tvf } }, p = `Failed to publish payload, please try again. id:${l} tag:${u}`;
      try {
        const d = new Promise(async (g) => {
          const m = ({ id: I }) => {
            f.opts.id === I && (this.removeRequestFromQueue(I), this.relayer.events.removeListener(_e.publish, m), g(f));
          };
          this.relayer.events.on(_e.publish, m);
          const _ = lr(new Promise((I, E) => {
            this.rpcPublish({ topic: i, message: s, ttl: a, prompt: h, tag: u, id: l, attestation: n == null ? void 0 : n.attestation, tvf: n == null ? void 0 : n.tvf }).then(I).catch((P) => {
              this.logger.warn(P, P == null ? void 0 : P.message), E(P);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${l} tag:${u}`);
          try {
            await _, this.events.removeListener(_e.publish, m);
          } catch (I) {
            this.queue.set(l, Eo(zs({}, f), { attempt: 1 })), this.logger.warn(I, I == null ? void 0 : I.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: l, topic: i, message: s, opts: n } }), await lr(d, this.publishTimeout, p);
      } catch (d) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(d), (o = n == null ? void 0 : n.internal) != null && o.throwOnFailedPublish) throw d;
      } finally {
        this.queue.delete(l);
      }
    }), bt(this, "on", (i, s) => {
      this.events.on(i, s);
    }), bt(this, "once", (i, s) => {
      this.events.once(i, s);
    }), bt(this, "off", (i, s) => {
      this.events.off(i, s);
    }), bt(this, "removeListener", (i, s) => {
      this.events.removeListener(i, s);
    }), this.relayer = e, this.logger = Me(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Ze(this.logger);
  }
  async rpcPublish(e) {
    var r, i, s, n;
    const { topic: o, message: a, ttl: c = Su, prompt: h, tag: u, id: l, attestation: f, tvf: p } = e, d = { method: Wi(yn().protocol).publish, params: zs({ topic: o, message: a, ttl: c, prompt: h, tag: u, attestation: f }, p), id: l };
    Oe((r = d.params) == null ? void 0 : r.prompt) && ((i = d.params) == null || delete i.prompt), Oe((s = d.params) == null ? void 0 : s.tag) && ((n = d.params) == null || delete n.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: d });
    const g = await this.relayer.request(d);
    return this.relayer.events.emit(_e.publish, e), this.logger.debug("Successfully Published Payload"), g;
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e, r) => {
      const i = e.attempt + 1;
      this.queue.set(r, Eo(zs({}, e), { attempt: i }));
      const { topic: s, message: n, opts: o, attestation: a } = e;
      this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`), await this.rpcPublish(Eo(zs({}, e), { topic: s, message: n, ttl: o.ttl, prompt: o.prompt, tag: o.tag, id: o.id, attestation: a, tvf: o.tvf })), this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Lr.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(_e.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(_e.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
var R$ = Object.defineProperty, B$ = (t, e, r) => e in t ? R$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Zr = (t, e, r) => B$(t, typeof e != "symbol" ? e + "" : e, r);
class F$ {
  constructor() {
    Zr(this, "map", /* @__PURE__ */ new Map()), Zr(this, "set", (e, r) => {
      const i = this.get(e);
      this.exists(e, r) || this.map.set(e, [...i, r]);
    }), Zr(this, "get", (e) => this.map.get(e) || []), Zr(this, "exists", (e, r) => this.get(e).includes(r)), Zr(this, "delete", (e, r) => {
      if (typeof r > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const i = this.get(e);
      if (!this.exists(e, r)) return;
      const s = i.filter((n) => n !== r);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }), Zr(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var N$ = Object.defineProperty, U$ = Object.defineProperties, k$ = Object.getOwnPropertyDescriptors, Nu = Object.getOwnPropertySymbols, L$ = Object.prototype.hasOwnProperty, j$ = Object.prototype.propertyIsEnumerable, ga = (t, e, r) => e in t ? N$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Mi = (t, e) => {
  for (var r in e || (e = {})) L$.call(e, r) && ga(t, r, e[r]);
  if (Nu) for (var r of Nu(e)) j$.call(e, r) && ga(t, r, e[r]);
  return t;
}, _o = (t, e) => U$(t, k$(e)), oe = (t, e, r) => ga(t, typeof e != "symbol" ? e + "" : e, r);
class M$ extends pI {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, oe(this, "subscriptions", /* @__PURE__ */ new Map()), oe(this, "topicMap", new F$()), oe(this, "events", new st.EventEmitter()), oe(this, "name", Sx), oe(this, "version", Dx), oe(this, "pending", /* @__PURE__ */ new Map()), oe(this, "cached", []), oe(this, "initialized", !1), oe(this, "storagePrefix", Nt), oe(this, "subscribeTimeout", L.toMiliseconds(L.ONE_MINUTE)), oe(this, "initialSubscribeTimeout", L.toMiliseconds(L.ONE_SECOND * 15)), oe(this, "clientId"), oe(this, "batchSubscribeTopicsLimit", 500), oe(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = !0;
    }), oe(this, "subscribe", async (i, s) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } });
      try {
        const n = yn(s), o = { topic: i, relay: n, transportType: s == null ? void 0 : s.transportType };
        this.pending.set(i, o);
        const a = await this.rpcSubscribe(i, n, s);
        return typeof a == "string" && (this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } })), a;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }), oe(this, "unsubscribe", async (i, s) => {
      this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }), oe(this, "isSubscribed", (i) => new Promise((s) => {
      s(this.topicMap.topics.includes(i));
    })), oe(this, "isKnownTopic", (i) => new Promise((s) => {
      s(this.topicMap.topics.includes(i) || this.pending.has(i) || this.cached.some((n) => n.topic === i));
    })), oe(this, "on", (i, s) => {
      this.events.on(i, s);
    }), oe(this, "once", (i, s) => {
      this.events.once(i, s);
    }), oe(this, "off", (i, s) => {
      this.events.off(i, s);
    }), oe(this, "removeListener", (i, s) => {
      this.events.removeListener(i, s);
    }), oe(this, "start", async () => {
      await this.onConnect();
    }), oe(this, "stop", async () => {
      await this.onDisconnect();
    }), oe(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), oe(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const i = [];
      this.pending.forEach((s) => {
        i.push(s);
      }), await this.batchSubscribe(i);
    }), oe(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(Lr.pulse, async () => {
        await this.checkPending();
      }), this.events.on(et.created, async (i) => {
        const s = et.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: i }), await this.persist();
      }), this.events.on(et.deleted, async (i) => {
        const s = et.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: i }), await this.persist();
      });
    }), this.relayer = e, this.logger = Me(r, this.name), this.clientId = "";
  }
  get context() {
    return Ze(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e, r) {
    let i = !1;
    try {
      i = this.getSubscription(e).topic === r;
    } catch {
    }
    return i;
  }
  reset() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, r) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, r)));
  }
  async unsubscribeById(e, r, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    try {
      const s = yn(i);
      await this.restartToComplete({ topic: e, id: r, relay: s }), await this.rpcUnsubscribe(e, r, s);
      const n = le("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: i } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r, i) {
    var s;
    (!i || (i == null ? void 0 : i.transportType) === ue.relay) && await this.restartToComplete({ topic: e, id: e, relay: r });
    const n = { method: Wi(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    const o = (s = i == null ? void 0 : i.internal) == null ? void 0 : s.throwOnFailedPublish;
    try {
      const a = await this.getSubscriptionId(e);
      if ((i == null ? void 0 : i.transportType) === ue.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n).catch((u) => this.logger.warn(u));
      }, L.toMiliseconds(L.ONE_SECOND)), a;
      const c = new Promise(async (u) => {
        const l = (f) => {
          f.topic === e && (this.events.removeListener(et.created, l), u(f.id));
        };
        this.events.on(et.created, l);
        try {
          const f = await lr(new Promise((p, d) => {
            this.relayer.request(n).catch((g) => {
              this.logger.warn(g, g == null ? void 0 : g.message), d(g);
            }).then(p);
          }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
          this.events.removeListener(et.created, l), u(f);
        } catch {
        }
      }), h = await lr(c, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
      if (!h && o) throw new Error(`Subscribing to ${e} failed, please try again`);
      return h ? a : null;
    } catch (a) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(_e.connection_stalled), o) throw a;
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const r = e[0].relay, i = { method: Wi(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await lr(new Promise((s) => {
        this.relayer.request(i).catch((n) => this.logger.warn(n)).then(s);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(_e.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const r = e[0].relay, i = { method: Wi(r.protocol).batchFetchMessages, params: { topics: e.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    let s;
    try {
      s = await await lr(new Promise((n, o) => {
        this.relayer.request(i).catch((a) => {
          this.logger.warn(a), o(a);
        }).then(n);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(_e.connection_stalled);
    }
    return s;
  }
  rpcUnsubscribe(e, r, i) {
    const s = { method: Wi(i.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, _o(Mi({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Mi({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(e, r, i) {
    this.events.removeAllListeners(r), this.hasSubscription(r, e) && this.deleteSubscription(r, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, r) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: r }), this.addSubscription(e, r);
  }
  addSubscription(e, r) {
    this.subscriptions.set(e, Mi({}, r)), this.topicMap.set(r.topic, e), this.events.emit(et.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: i } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(et.deleted, _o(Mi({}, i), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(et.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e = [...this.cached], r = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let i = 0; i < r; i++) {
        const s = e.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(et.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: r } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (r) => _o(Mi({}, r), { id: await this.getSubscriptionId(r.topic) })))));
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const r = await this.rpcBatchFetchMessages(e);
    r && r.messages && (await nv(L.toMiliseconds(L.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(r.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete(e) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e) {
    return Rt(e + await this.getClientId());
  }
}
var q$ = Object.defineProperty, Uu = Object.getOwnPropertySymbols, z$ = Object.prototype.hasOwnProperty, H$ = Object.prototype.propertyIsEnumerable, ya = (t, e, r) => e in t ? q$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ku = (t, e) => {
  for (var r in e || (e = {})) z$.call(e, r) && ya(t, r, e[r]);
  if (Uu) for (var r of Uu(e)) H$.call(e, r) && ya(t, r, e[r]);
  return t;
}, X = (t, e, r) => ya(t, typeof e != "symbol" ? e + "" : e, r);
class V$ extends fI {
  constructor(e) {
    super(e), X(this, "protocol", "wc"), X(this, "version", 2), X(this, "core"), X(this, "logger"), X(this, "events", new st.EventEmitter()), X(this, "provider"), X(this, "messages"), X(this, "subscriber"), X(this, "publisher"), X(this, "name", Ex), X(this, "transportExplicitlyClosed", !1), X(this, "initialized", !1), X(this, "connectionAttemptInProgress", !1), X(this, "relayUrl"), X(this, "projectId"), X(this, "packageName"), X(this, "bundleId"), X(this, "hasExperiencedNetworkDisruption", !1), X(this, "pingTimeout"), X(this, "heartBeatTimeout", L.toMiliseconds(L.THIRTY_SECONDS + L.FIVE_SECONDS)), X(this, "reconnectTimeout"), X(this, "connectPromise"), X(this, "reconnectInProgress", !1), X(this, "requestsInFlight", []), X(this, "connectTimeout", L.toMiliseconds(L.ONE_SECOND * 15)), X(this, "request", async (r) => {
      var i, s;
      this.logger.debug("Publishing Request Payload");
      const n = r.id || Cr().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: n, method: r.method, topic: (i = r.params) == null ? void 0 : i.topic }, "relayer.request - publishing...");
        const o = `${n}:${((s = r.params) == null ? void 0 : s.tag) || ""}`;
        this.requestsInFlight.push(o);
        const a = await this.provider.request(r);
        return this.requestsInFlight = this.requestsInFlight.filter((c) => c !== o), a;
      } catch (o) {
        throw this.logger.debug(`Failed to Publish Request: ${n}`), o;
      }
    }), X(this, "resetPingTimeout", () => {
      fn() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var r, i, s, n;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n = (s = (i = (r = this.provider) == null ? void 0 : r.connection) == null ? void 0 : i.socket) == null ? void 0 : s.terminate) == null || n.call(s);
        } catch (o) {
          this.logger.warn(o, o == null ? void 0 : o.message);
        }
      }, this.heartBeatTimeout));
    }), X(this, "onPayloadHandler", (r) => {
      this.onProviderPayload(r), this.resetPingTimeout();
    }), X(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(_e.connect);
    }), X(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), X(this, "onProviderErrorHandler", (r) => {
      this.logger.fatal(`Fatal socket error: ${r.message}`), this.events.emit(_e.error, r), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), X(this, "registerProviderListeners", () => {
      this.provider.on(nt.payload, this.onPayloadHandler), this.provider.on(nt.connect, this.onConnectHandler), this.provider.on(nt.disconnect, this.onDisconnectHandler), this.provider.on(nt.error, this.onProviderErrorHandler);
    }), this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Me(e.logger, this.name) : _s(Nn({ level: e.logger || vx })), this.messages = new S$(this.logger, e.core), this.subscriber = new M$(this, this.logger), this.publisher = new T$(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || cp, this.projectId = e.projectId, z1() ? this.packageName = yh() : H1() && (this.bundleId = yh()), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.transportOpen().catch((e) => this.logger.warn(e, e == null ? void 0 : e.message));
  }
  get context() {
    return Ze(this.logger);
  }
  get connected() {
    var e, r, i;
    return ((i = (r = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : r.socket) == null ? void 0 : i.readyState) === 1 || !1;
  }
  get connecting() {
    var e, r, i;
    return ((i = (r = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : r.socket) == null ? void 0 : i.readyState) === 0 || this.connectPromise !== void 0 || !1;
  }
  async publish(e, r, i) {
    this.isInitialized(), await this.publisher.publish(e, r, i), await this.recordMessageEvent({ topic: e, message: r, publishedAt: Date.now(), transportType: ue.relay }, rn.outbound);
  }
  async subscribe(e, r) {
    var i, s, n;
    this.isInitialized(), (!(r != null && r.transportType) || (r == null ? void 0 : r.transportType) === "relay") && await this.toEstablishConnection();
    const o = typeof ((i = r == null ? void 0 : r.internal) == null ? void 0 : i.throwOnFailedPublish) > "u" ? !0 : (s = r == null ? void 0 : r.internal) == null ? void 0 : s.throwOnFailedPublish;
    let a = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "", c;
    const h = (u) => {
      u.topic === e && (this.subscriber.off(et.created, h), c());
    };
    return await Promise.all([new Promise((u) => {
      c = u, this.subscriber.on(et.created, h);
    }), new Promise(async (u, l) => {
      a = await this.subscriber.subscribe(e, ku({ internal: { throwOnFailedPublish: o } }, r)).catch((f) => {
        o && l(f);
      }) || a, u();
    })]), a;
  }
  async unsubscribe(e, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, r);
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await lr(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, await this.transportDisconnect();
  }
  async transportOpen(e) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (r, i) => {
      await this.connect(e).then(r).catch(i).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await ou()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const r = e.sort((i, s) => i.publishedAt - s.publishedAt);
    this.logger.debug(`Batch of ${r.length} message events sorted`);
    for (const i of r) try {
      await this.onMessageEvent(i);
    } catch (s) {
      this.logger.warn(s, "Error while processing batch message event: " + (s == null ? void 0 : s.message));
    }
    this.logger.trace(`Batch of ${r.length} message events processed`);
  }
  async onLinkMessageEvent(e, r) {
    const { topic: i } = e;
    if (!r.sessionExists) {
      const s = we(L.FIVE_MINUTES), n = { topic: i, expiry: s, relay: { protocol: "irn" }, active: !1 };
      await this.core.pairing.pairings.set(i, n);
    }
    this.events.emit(_e.message, e), await this.recordMessageEvent(e, rn.inbound);
  }
  async connect(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
    let r = 1;
    for (; r < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${r}...`), await this.createProvider(), await new Promise(async (i, s) => {
          const n = () => {
            s(new Error("Connection interrupted while trying to connect"));
          };
          this.provider.once(nt.disconnect, n), await lr(new Promise((o, a) => {
            this.provider.connect().then(o).catch(a);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
            s(o);
          }).finally(() => {
            this.provider.off(nt.disconnect, n), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o, a) => {
            const c = () => {
              s(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(nt.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
              this.provider.off(nt.disconnect, c);
            });
          }), this.hasExperiencedNetworkDisruption = !1, i();
        });
      } catch (i) {
        await this.subscriber.stop();
        const s = i;
        this.logger.warn({}, s.message), this.hasExperiencedNetworkDisruption = !0;
      } finally {
        this.connectionAttemptInProgress = !1;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${r}`);
        break;
      }
      await new Promise((i) => setTimeout(i, L.toMiliseconds(r * 1))), r++;
    }
  }
  startPingTimeout() {
    var e, r, i, s, n;
    if (fn()) try {
      (r = (e = this.provider) == null ? void 0 : e.connection) != null && r.socket && ((n = (s = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : s.socket) == null || n.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o) {
      this.logger.warn(o, o == null ? void 0 : o.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new pt(new ux(Y1({ sdkVersion: ua, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e, r) {
    const { topic: i, message: s } = e;
    await this.messages.set(i, s, r);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: r, message: i } = e;
    if (!i || i.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i}`), !0;
    if (!await this.subscriber.isKnownTopic(r)) return this.logger.warn(`Ignoring message for unknown topic ${r}`), !0;
    const s = this.messages.has(r, i);
    return s && this.logger.warn(`Ignoring duplicate message: ${i}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), cc(e)) {
      if (!e.method.endsWith(_x)) return;
      const r = e.params, { topic: i, message: s, publishedAt: n, attestation: o } = r.data, a = { topic: i, message: s, publishedAt: n, transportType: ue.relay, attestation: o };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(ku({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else Ln(e) && this.events.emit(_e.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, rn.inbound), this.events.emit(_e.message, e));
  }
  async acknowledgePayload(e) {
    const r = Un(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(nt.payload, this.onPayloadHandler), this.provider.off(nt.connect, this.onConnectHandler), this.provider.off(nt.disconnect, this.onDisconnectHandler), this.provider.off(nt.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await ou();
    F3(async (r) => {
      e !== r && (e = r, r ? await this.transportOpen().catch((i) => this.logger.error(i, i == null ? void 0 : i.message)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
    }), this.core.heartbeat.on(Lr.pulse, async () => {
      if (!this.transportExplicitlyClosed && !this.connected && k3()) try {
        await this.confirmOnlineStateOrThrow(), await this.transportOpen();
      } catch (r) {
        this.logger.warn(r, r == null ? void 0 : r.message);
      }
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(_e.disconnect), this.connectionAttemptInProgress = !1, !this.reconnectInProgress && (this.reconnectInProgress = !0, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = !1;
    }, L.toMiliseconds(Ix)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectPromise) {
        await this.connectPromise;
        return;
      }
      await this.connect();
    }
  }
}
function K$(t, e) {
  return t === e || Number.isNaN(t) && Number.isNaN(e);
}
function Lu(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function ju(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const W$ = "[object RegExp]", G$ = "[object String]", Y$ = "[object Number]", J$ = "[object Boolean]", Mu = "[object Arguments]", Z$ = "[object Symbol]", Q$ = "[object Date]", X$ = "[object Map]", eS = "[object Set]", tS = "[object Array]", rS = "[object Function]", iS = "[object ArrayBuffer]", Io = "[object Object]", sS = "[object Error]", nS = "[object DataView]", oS = "[object Uint8Array]", aS = "[object Uint8ClampedArray]", cS = "[object Uint16Array]", hS = "[object Uint32Array]", uS = "[object BigUint64Array]", lS = "[object Int8Array]", fS = "[object Int16Array]", dS = "[object Int32Array]", pS = "[object BigInt64Array]", gS = "[object Float32Array]", yS = "[object Float64Array]";
function wS() {
}
function qu(t) {
  if (!t || typeof t != "object") return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : !1;
}
function mS(t, e, r) {
  return Gi(t, e, void 0, void 0, void 0, void 0, r);
}
function Gi(t, e, r, i, s, n, o) {
  const a = o(t, e, r, i, s, n);
  if (a !== void 0) return a;
  if (typeof t == typeof e) switch (typeof t) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return t === e;
    case "number":
      return t === e || Object.is(t, e);
    case "function":
      return t === e;
    case "object":
      return is(t, e, n, o);
  }
  return is(t, e, n, o);
}
function is(t, e, r, i) {
  if (Object.is(t, e)) return !0;
  let s = ju(t), n = ju(e);
  if (s === Mu && (s = Io), n === Mu && (n = Io), s !== n) return !1;
  switch (s) {
    case G$:
      return t.toString() === e.toString();
    case Y$: {
      const c = t.valueOf(), h = e.valueOf();
      return K$(c, h);
    }
    case J$:
    case Q$:
    case Z$:
      return Object.is(t.valueOf(), e.valueOf());
    case W$:
      return t.source === e.source && t.flags === e.flags;
    case rS:
      return t === e;
  }
  r = r ?? /* @__PURE__ */ new Map();
  const o = r.get(t), a = r.get(e);
  if (o != null && a != null) return o === e;
  r.set(t, e), r.set(e, t);
  try {
    switch (s) {
      case X$: {
        if (t.size !== e.size) return !1;
        for (const [c, h] of t.entries()) if (!e.has(c) || !Gi(h, e.get(c), c, t, e, r, i)) return !1;
        return !0;
      }
      case eS: {
        if (t.size !== e.size) return !1;
        const c = Array.from(t.values()), h = Array.from(e.values());
        for (let u = 0; u < c.length; u++) {
          const l = c[u], f = h.findIndex((p) => Gi(l, p, void 0, t, e, r, i));
          if (f === -1) return !1;
          h.splice(f, 1);
        }
        return !0;
      }
      case tS:
      case oS:
      case aS:
      case cS:
      case hS:
      case uS:
      case lS:
      case fS:
      case dS:
      case pS:
      case gS:
      case yS: {
        if (typeof Buffer < "u" && Buffer.isBuffer(t) !== Buffer.isBuffer(e) || t.length !== e.length) return !1;
        for (let c = 0; c < t.length; c++) if (!Gi(t[c], e[c], c, t, e, r, i)) return !1;
        return !0;
      }
      case iS:
        return t.byteLength !== e.byteLength ? !1 : is(new Uint8Array(t), new Uint8Array(e), r, i);
      case nS:
        return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? !1 : is(new Uint8Array(t), new Uint8Array(e), r, i);
      case sS:
        return t.name === e.name && t.message === e.message;
      case Io: {
        if (!(is(t.constructor, e.constructor, r, i) || qu(t) && qu(e))) return !1;
        const c = [...Object.keys(t), ...Lu(t)], h = [...Object.keys(e), ...Lu(e)];
        if (c.length !== h.length) return !1;
        for (let u = 0; u < c.length; u++) {
          const l = c[u], f = t[l];
          if (!Object.hasOwn(e, l)) return !1;
          const p = e[l];
          if (!Gi(f, p, l, t, e, r, i)) return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    r.delete(t), r.delete(e);
  }
}
function bS(t, e) {
  return mS(t, e, wS);
}
var vS = Object.defineProperty, zu = Object.getOwnPropertySymbols, ES = Object.prototype.hasOwnProperty, _S = Object.prototype.propertyIsEnumerable, wa = (t, e, r) => e in t ? vS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Hu = (t, e) => {
  for (var r in e || (e = {})) ES.call(e, r) && wa(t, r, e[r]);
  if (zu) for (var r of zu(e)) _S.call(e, r) && wa(t, r, e[r]);
  return t;
}, ze = (t, e, r) => wa(t, typeof e != "symbol" ? e + "" : e, r);
class Mr extends dI {
  constructor(e, r, i, s = Nt, n = void 0) {
    super(e, r, i, s), this.core = e, this.logger = r, this.name = i, ze(this, "map", /* @__PURE__ */ new Map()), ze(this, "version", xx), ze(this, "cached", []), ze(this, "initialized", !1), ze(this, "getKey"), ze(this, "storagePrefix", Nt), ze(this, "recentlyDeleted", []), ze(this, "recentlyDeletedLimit", 200), ze(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !Oe(o) ? this.map.set(this.getKey(o), o) : f3(o) ? this.map.set(o.id, o) : d3(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }), ze(this, "set", async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }), ze(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o))), ze(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => bS(a[c], o[c]))) : this.values)), ze(this, "update", async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const c = Hu(Hu({}, this.getData(o)), a);
      this.map.set(o, c), await this.persist();
    }), ze(this, "delete", async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
    }), this.logger = Me(r, this.name), this.storagePrefix = s, this.getKey = n;
  }
  get context() {
    return Ze(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const r = this.map.get(e);
    if (!r) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: s } = j("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(s), new Error(s);
      }
      const { message: i } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: r } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var IS = Object.defineProperty, xS = (t, e, r) => e in t ? IS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, J = (t, e, r) => xS(t, typeof e != "symbol" ? e + "" : e, r);
class $S {
  constructor(e, r) {
    this.core = e, this.logger = r, J(this, "name", Ax), J(this, "version", Ox), J(this, "events", new Pa()), J(this, "pairings"), J(this, "initialized", !1), J(this, "storagePrefix", Nt), J(this, "ignoredPayloadTypes", [Kt]), J(this, "registeredMethods", []), J(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }), J(this, "register", ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }), J(this, "create", async (i) => {
      this.isInitialized();
      const s = ra(), n = await this.core.crypto.setSymKey(s), o = we(L.FIVE_MINUTES), a = { protocol: ap }, c = { topic: n, expiry: o, relay: a, active: !1, methods: i == null ? void 0 : i.methods }, h = Zh({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: s, relay: a, expiryTimestamp: o, methods: i == null ? void 0 : i.methods });
      return this.events.emit($r.create, c), this.core.expirer.set(n, o), await this.pairings.set(n, c), await this.core.relayer.subscribe(n, { transportType: i == null ? void 0 : i.transportType }), { topic: n, uri: h };
    }), J(this, "pair", async (i) => {
      this.isInitialized();
      const s = this.core.eventClient.createEvent({ properties: { topic: i == null ? void 0 : i.uri, trace: [Ot.pairing_started] } });
      this.isValidPair(i, s);
      const { topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: h } = Jh(i.uri);
      s.props.properties.topic = n, s.addTrace(Ot.pairing_uri_validation_success), s.addTrace(Ot.pairing_uri_not_expired);
      let u;
      if (this.pairings.keys.includes(n)) {
        if (u = this.pairings.get(n), s.addTrace(Ot.existing_pairing), u.active) throw s.setError(Ht.active_pairing_already_exists), new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
        s.addTrace(Ot.pairing_not_expired);
      }
      const l = c || we(L.FIVE_MINUTES), f = { topic: n, relay: a, expiry: l, active: !1, methods: h };
      this.core.expirer.set(n, l), await this.pairings.set(n, f), s.addTrace(Ot.store_new_pairing), i.activatePairing && await this.activate({ topic: n }), this.events.emit($r.create, f), s.addTrace(Ot.emit_inactive_pairing), this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(o, n), s.addTrace(Ot.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        s.setError(Ht.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n, { relay: a });
      } catch (p) {
        throw s.setError(Ht.subscribe_pairing_topic_failure), p;
      }
      return s.addTrace(Ot.subscribe_pairing_topic_success), f;
    }), J(this, "activate", async ({ topic: i }) => {
      this.isInitialized();
      const s = we(L.FIVE_MINUTES);
      this.core.expirer.set(i, s), await this.pairings.update(i, { active: !0, expiry: s });
    }), J(this, "ping", async (i) => {
      this.isInitialized(), await this.isValidPing(i), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: s } = i;
      if (this.pairings.keys.includes(s)) {
        const n = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = _r();
        this.events.once(se("pairing_ping", n), ({ error: h }) => {
          h ? c(h) : a();
        }), await o();
      }
    }), J(this, "updateExpiry", async ({ topic: i, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: s });
    }), J(this, "updateMetadata", async ({ topic: i, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
    }), J(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), J(this, "disconnect", async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: s } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", le("USER_DISCONNECTED")), await this.deletePairing(s));
    }), J(this, "formatUriFromPairing", (i) => {
      this.isInitialized();
      const { topic: s, relay: n, expiry: o, methods: a } = i, c = this.core.crypto.keychain.get(s);
      return Zh({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: c, relay: n, expiryTimestamp: o, methods: a });
    }), J(this, "sendRequest", async (i, s, n) => {
      const o = fr(s, n), a = await this.core.crypto.encode(i, o), c = Li[s].req;
      return this.core.history.set(i, o), this.core.relayer.publish(i, a, c), o.id;
    }), J(this, "sendResult", async (i, s, n) => {
      const o = Un(i, n), a = await this.core.crypto.encode(s, o), c = (await this.core.history.get(s, i)).request.method, h = Li[c].res;
      await this.core.relayer.publish(s, a, h), await this.core.history.resolve(o);
    }), J(this, "sendError", async (i, s, n) => {
      const o = kn(i, n), a = await this.core.crypto.encode(s, o), c = (await this.core.history.get(s, i)).request.method, h = Li[c] ? Li[c].res : Li.unregistered_method.res;
      await this.core.relayer.publish(s, a, h), await this.core.history.resolve(o);
    }), J(this, "deletePairing", async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, le("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }), J(this, "cleanup", async () => {
      const i = this.pairings.getAll().filter((s) => or(s.expiry));
      await Promise.all(i.map((s) => this.deletePairing(s.topic)));
    }), J(this, "onRelayEventRequest", async (i) => {
      const { topic: s, payload: n } = i;
      switch (n.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(s, n);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(s, n);
        default:
          return await this.onUnknownRpcMethodRequest(s, n);
      }
    }), J(this, "onRelayEventResponse", async (i) => {
      const { topic: s, payload: n } = i, o = (await this.core.history.get(s, n.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, n);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }), J(this, "onPairingPingRequest", async (i, s) => {
      const { id: n } = s;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(n, i, !0), this.events.emit($r.ping, { id: n, topic: i });
      } catch (o) {
        await this.sendError(n, i, o), this.logger.error(o);
      }
    }), J(this, "onPairingPingResponse", (i, s) => {
      const { id: n } = s;
      setTimeout(() => {
        Ct(s) ? this.events.emit(se("pairing_ping", n), {}) : ct(s) && this.events.emit(se("pairing_ping", n), { error: s.error });
      }, 500);
    }), J(this, "onPairingDeleteRequest", async (i, s) => {
      const { id: n } = s;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit($r.delete, { id: n, topic: i });
      } catch (o) {
        await this.sendError(n, i, o), this.logger.error(o);
      }
    }), J(this, "onUnknownRpcMethodRequest", async (i, s) => {
      const { id: n, method: o } = s;
      try {
        if (this.registeredMethods.includes(o)) return;
        const a = le("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(n, i, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(n, i, a), this.logger.error(a);
      }
    }), J(this, "onUnknownRpcMethodResponse", (i) => {
      this.registeredMethods.includes(i) || this.logger.error(le("WC_METHOD_UNSUPPORTED", i));
    }), J(this, "isValidPair", (i, s) => {
      var n;
      if (!Ke(i)) {
        const { message: a } = j("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw s.setError(Ht.malformed_pairing_uri), new Error(a);
      }
      if (!l3(i.uri)) {
        const { message: a } = j("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw s.setError(Ht.malformed_pairing_uri), new Error(a);
      }
      const o = Jh(i == null ? void 0 : i.uri);
      if (!((n = o == null ? void 0 : o.relay) != null && n.protocol)) {
        const { message: a } = j("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw s.setError(Ht.malformed_pairing_uri), new Error(a);
      }
      if (!(o != null && o.symKey)) {
        const { message: a } = j("MISSING_OR_INVALID", "pair() uri#symKey");
        throw s.setError(Ht.malformed_pairing_uri), new Error(a);
      }
      if (o != null && o.expiryTimestamp && L.toMiliseconds(o == null ? void 0 : o.expiryTimestamp) < Date.now()) {
        s.setError(Ht.pairing_expired);
        const { message: a } = j("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
      }
    }), J(this, "isValidPing", async (i) => {
      if (!Ke(i)) {
        const { message: n } = j("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(n);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }), J(this, "isValidDisconnect", async (i) => {
      if (!Ke(i)) {
        const { message: n } = j("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(n);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }), J(this, "isValidPairingTopic", async (i) => {
      if (!ge(i, !1)) {
        const { message: s } = j("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: s } = j("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if (or(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: s } = j("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }), this.core = e, this.logger = Me(r, this.name), this.pairings = new Mr(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ze(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(_e.message, async (e) => {
      const { topic: r, message: i, transportType: s } = e;
      if (this.pairings.keys.includes(r) && s !== ue.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) try {
        const n = await this.core.crypto.decode(r, i);
        cc(n) ? (this.core.history.set(r, n), await this.onRelayEventRequest({ topic: r, payload: n })) : Ln(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.core.history.delete(r, n.id)), await this.core.relayer.messages.ack(r, i);
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(at.expired, async (e) => {
      const { topic: r } = ed(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit($r.expire, { topic: r }));
    });
  }
}
var SS = Object.defineProperty, DS = (t, e, r) => e in t ? SS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ae = (t, e, r) => DS(t, typeof e != "symbol" ? e + "" : e, r);
class AS extends hI {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, Ae(this, "records", /* @__PURE__ */ new Map()), Ae(this, "events", new st.EventEmitter()), Ae(this, "name", Px), Ae(this, "version", Cx), Ae(this, "cached", []), Ae(this, "initialized", !1), Ae(this, "storagePrefix", Nt), Ae(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }), Ae(this, "set", (i, s, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: s, chainId: n }), this.records.has(s.id)) return;
      const o = { id: s.id, topic: i, request: { method: s.method, params: s.params || null }, chainId: n, expiry: we(L.THIRTY_DAYS) };
      this.records.set(o.id, o), this.persist(), this.events.emit(wt.created, o);
    }), Ae(this, "resolve", async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id)) return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = ct(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.persist(), this.events.emit(wt.updated, s));
    }), Ae(this, "get", async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: s }), await this.getRecord(s))), Ae(this, "delete", (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((n) => {
        if (n.topic === i) {
          if (typeof s < "u" && n.id !== s) return;
          this.records.delete(n.id), this.events.emit(wt.deleted, n);
        }
      }), this.persist();
    }), Ae(this, "exists", async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1)), Ae(this, "on", (i, s) => {
      this.events.on(i, s);
    }), Ae(this, "once", (i, s) => {
      this.events.once(i, s);
    }), Ae(this, "off", (i, s) => {
      this.events.off(i, s);
    }), Ae(this, "removeListener", (i, s) => {
      this.events.removeListener(i, s);
    }), this.logger = Me(r, this.name);
  }
  get context() {
    return Ze(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u") return;
      const i = { topic: r.topic, request: fr(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const r = this.records.get(e);
    if (!r) {
      const { message: i } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(wt.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: r } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(wt.created, (e) => {
      const r = wt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e });
    }), this.events.on(wt.updated, (e) => {
      const r = wt.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e });
    }), this.events.on(wt.deleted, (e) => {
      const r = wt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e });
    }), this.core.heartbeat.on(Lr.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = !1;
      this.records.forEach((r) => {
        L.toMiliseconds(r.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${r.id}`), this.records.delete(r.id), this.events.emit(wt.deleted, r, !1), e = !0);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var OS = Object.defineProperty, PS = (t, e, r) => e in t ? OS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ke = (t, e, r) => PS(t, typeof e != "symbol" ? e + "" : e, r);
class CS extends gI {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, ke(this, "expirations", /* @__PURE__ */ new Map()), ke(this, "events", new st.EventEmitter()), ke(this, "name", Tx), ke(this, "version", Rx), ke(this, "cached", []), ke(this, "initialized", !1), ke(this, "storagePrefix", Nt), ke(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }), ke(this, "has", (i) => {
      try {
        const s = this.formatTarget(i);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return !1;
      }
    }), ke(this, "set", (i, s) => {
      this.isInitialized();
      const n = this.formatTarget(i), o = { target: n, expiry: s };
      this.expirations.set(n, o), this.checkExpiry(n, o), this.events.emit(at.created, { target: n, expiration: o });
    }), ke(this, "get", (i) => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }), ke(this, "del", (i) => {
      if (this.isInitialized(), this.has(i)) {
        const s = this.formatTarget(i), n = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(at.deleted, { target: s, expiration: n });
      }
    }), ke(this, "on", (i, s) => {
      this.events.on(i, s);
    }), ke(this, "once", (i, s) => {
      this.events.once(i, s);
    }), ke(this, "off", (i, s) => {
      this.events.off(i, s);
    }), ke(this, "removeListener", (i, s) => {
      this.events.removeListener(i, s);
    }), this.logger = Me(r, this.name);
  }
  get context() {
    return Ze(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return J1(e);
    if (typeof e == "number") return Z1(e);
    const { message: r } = j("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(at.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: r } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const r = this.expirations.get(e);
    if (!r) {
      const { message: i } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(i), new Error(i);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: i } = r;
    L.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(at.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Lr.pulse, () => this.checkExpirations()), this.events.on(at.created, (e) => {
      const r = at.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(at.expired, (e) => {
      const r = at.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(at.deleted, (e) => {
      const r = at.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var TS = Object.defineProperty, RS = (t, e, r) => e in t ? TS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, pe = (t, e, r) => RS(t, typeof e != "symbol" ? e + "" : e, r);
class BS extends yI {
  constructor(e, r, i) {
    super(e, r, i), this.core = e, this.logger = r, this.store = i, pe(this, "name", Bx), pe(this, "abortController"), pe(this, "isDevEnv"), pe(this, "verifyUrlV3", Nx), pe(this, "storagePrefix", Nt), pe(this, "version", op), pe(this, "publicKey"), pe(this, "fetchPromise"), pe(this, "init", async () => {
      var s;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && L.toMiliseconds((s = this.publicKey) == null ? void 0 : s.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), pe(this, "register", async (s) => {
      if (!_i() || this.isDevEnv) return;
      const n = window.location.origin, { id: o, decryptedId: a } = s, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
      try {
        const h = Tr(), u = this.startAbortTimer(L.ONE_SECOND * 5), l = await new Promise((f, p) => {
          const d = () => {
            window.removeEventListener("message", m), h.body.removeChild(g), p("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", d);
          const g = h.createElement("iframe");
          g.src = c, g.style.display = "none", g.addEventListener("error", d, { signal: this.abortController.signal });
          const m = (_) => {
            if (_.data && typeof _.data == "string") try {
              const I = JSON.parse(_.data);
              if (I.type === "verify_attestation") {
                if (Ho(I.attestation).payload.id !== o) return;
                clearInterval(u), h.body.removeChild(g), this.abortController.signal.removeEventListener("abort", d), window.removeEventListener("message", m), f(I.attestation === null ? "" : I.attestation);
              }
            } catch (I) {
              this.logger.warn(I);
            }
          };
          h.body.appendChild(g), window.addEventListener("message", m, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", l), l;
      } catch (h) {
        this.logger.warn(h);
      }
      return "";
    }), pe(this, "resolve", async (s) => {
      if (this.isDevEnv) return "";
      const { attestationId: n, hash: o, encryptedId: a } = s;
      if (n === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n) {
        if (Ho(n).payload.id !== a) return;
        const h = await this.isValidJwtAttestation(n);
        if (h) {
          if (!h.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h;
        }
      }
      if (!o) return;
      const c = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      return this.fetchAttestation(o, c);
    }), pe(this, "fetchAttestation", async (s, n) => {
      this.logger.debug(`resolving attestation: ${s} from url: ${n}`);
      const o = this.startAbortTimer(L.ONE_SECOND * 5), a = await fetch(`${n}/attestation/${s}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
    }), pe(this, "getVerifyUrl", (s) => {
      let n = s || rs;
      return Ux.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${rs}`), n = rs), n;
    }), pe(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const s = this.startAbortTimer(L.FIVE_SECONDS), n = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(s), await n.json();
      } catch (s) {
        this.logger.warn(s);
      }
    }), pe(this, "persistPublicKey", async (s) => {
      this.logger.debug("persisting public key to local storage", s), await this.store.setItem(this.storeKey, s), this.publicKey = s;
    }), pe(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), pe(this, "isValidJwtAttestation", async (s) => {
      const n = await this.getPublicKey();
      try {
        if (n) return this.validateAttestation(s, n);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
      const o = await this.fetchAndPersistPublicKey();
      try {
        if (o) return this.validateAttestation(s, o);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
    }), pe(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), pe(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n) => {
        const o = await this.fetchPublicKey();
        o && (await this.persistPublicKey(o), n(o));
      });
      const s = await this.fetchPromise;
      return this.fetchPromise = void 0, s;
    }), pe(this, "validateAttestation", (s, n) => {
      const o = HE(s, n.publicKey), a = { hasExpired: L.toMiliseconds(o.exp) < Date.now(), payload: o };
      if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a.payload.origin, isScam: a.payload.isScam, isVerified: a.payload.isVerified };
    }), this.logger = Me(r, this.name), this.abortController = new AbortController(), this.isDevEnv = Ka(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return Ze(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), L.toMiliseconds(e));
  }
}
var FS = Object.defineProperty, NS = (t, e, r) => e in t ? FS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Vu = (t, e, r) => NS(t, typeof e != "symbol" ? e + "" : e, r);
class US extends wI {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, Vu(this, "context", kx), Vu(this, "registerDeviceToken", async (i) => {
      const { clientId: s, token: n, notificationType: o, enableEncrypted: a = !1 } = i, c = `${Lx}/${this.projectId}/clients`;
      await fetch(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: o, token: n, always_raw: a }) });
    }), this.logger = Me(r, this.context);
  }
}
var kS = Object.defineProperty, Ku = Object.getOwnPropertySymbols, LS = Object.prototype.hasOwnProperty, jS = Object.prototype.propertyIsEnumerable, ma = (t, e, r) => e in t ? kS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, qi = (t, e) => {
  for (var r in e || (e = {})) LS.call(e, r) && ma(t, r, e[r]);
  if (Ku) for (var r of Ku(e)) jS.call(e, r) && ma(t, r, e[r]);
  return t;
}, be = (t, e, r) => ma(t, typeof e != "symbol" ? e + "" : e, r);
class MS extends mI {
  constructor(e, r, i = !0) {
    super(e, r, i), this.core = e, this.logger = r, be(this, "context", Mx), be(this, "storagePrefix", Nt), be(this, "storageVersion", jx), be(this, "events", /* @__PURE__ */ new Map()), be(this, "shouldPersist", !1), be(this, "init", async () => {
      if (!Ka()) try {
        const s = { eventId: mh(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: Qf(this.core.relayer.protocol, this.core.relayer.version, ua) } } };
        await this.sendEvent([s]);
      } catch (s) {
        this.logger.warn(s);
      }
    }), be(this, "createEvent", (s) => {
      const { event: n = "ERROR", type: o = "", properties: { topic: a, trace: c } } = s, h = mh(), u = this.core.projectId || "", l = Date.now(), f = qi({ eventId: h, timestamp: l, props: { event: n, type: o, properties: { topic: a, trace: c } }, bundleId: u, domain: this.getAppDomain() }, this.setMethods(h));
      return this.telemetryEnabled && (this.events.set(h, f), this.shouldPersist = !0), f;
    }), be(this, "getEvent", (s) => {
      const { eventId: n, topic: o } = s;
      if (n) return this.events.get(n);
      const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
      if (a) return qi(qi({}, a), this.setMethods(a.eventId));
    }), be(this, "deleteEvent", (s) => {
      const { eventId: n } = s;
      this.events.delete(n), this.shouldPersist = !0;
    }), be(this, "setEventListeners", () => {
      this.core.heartbeat.on(Lr.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((s) => {
          L.fromMiliseconds(Date.now()) - L.fromMiliseconds(s.timestamp) > qx && (this.events.delete(s.eventId), this.shouldPersist = !0);
        });
      });
    }), be(this, "setMethods", (s) => ({ addTrace: (n) => this.addTrace(s, n), setError: (n) => this.setError(s, n) })), be(this, "addTrace", (s, n) => {
      const o = this.events.get(s);
      o && (o.props.properties.trace.push(n), this.events.set(s, o), this.shouldPersist = !0);
    }), be(this, "setError", (s, n) => {
      const o = this.events.get(s);
      o && (o.props.type = n, o.timestamp = Date.now(), this.events.set(s, o), this.shouldPersist = !0);
    }), be(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
    }), be(this, "restore", async () => {
      try {
        const s = await this.core.storage.getItem(this.storageKey) || [];
        if (!s.length) return;
        s.forEach((n) => {
          this.events.set(n.eventId, qi(qi({}, n), this.setMethods(n.eventId)));
        });
      } catch (s) {
        this.logger.warn(s);
      }
    }), be(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const s = [];
      for (const [n, o] of this.events) o.props.type && s.push(o);
      if (s.length !== 0) try {
        if ((await this.sendEvent(s)).ok) for (const n of s) this.events.delete(n.eventId), this.shouldPersist = !0;
      } catch (n) {
        this.logger.warn(n);
      }
    }), be(this, "sendEvent", async (s) => {
      const n = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${zx}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${ua}${n}`, { method: "POST", body: JSON.stringify(s) });
    }), be(this, "getAppDomain", () => Zf().url), this.logger = Me(r, this.context), this.telemetryEnabled = i, i ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
}
var qS = Object.defineProperty, Wu = Object.getOwnPropertySymbols, zS = Object.prototype.hasOwnProperty, HS = Object.prototype.propertyIsEnumerable, ba = (t, e, r) => e in t ? qS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gu = (t, e) => {
  for (var r in e || (e = {})) zS.call(e, r) && ba(t, r, e[r]);
  if (Wu) for (var r of Wu(e)) HS.call(e, r) && ba(t, r, e[r]);
  return t;
}, ae = (t, e, r) => ba(t, typeof e != "symbol" ? e + "" : e, r);
let VS = class Ep extends nI {
  constructor(e) {
    var r;
    super(e), ae(this, "protocol", np), ae(this, "version", op), ae(this, "name", ha), ae(this, "relayUrl"), ae(this, "projectId"), ae(this, "customStoragePrefix"), ae(this, "events", new st.EventEmitter()), ae(this, "logger"), ae(this, "heartbeat"), ae(this, "relayer"), ae(this, "crypto"), ae(this, "storage"), ae(this, "history"), ae(this, "expirer"), ae(this, "pairing"), ae(this, "verify"), ae(this, "echoClient"), ae(this, "linkModeSupportedApps"), ae(this, "eventClient"), ae(this, "initialized", !1), ae(this, "logChunkController"), ae(this, "on", (a, c) => this.events.on(a, c)), ae(this, "once", (a, c) => this.events.once(a, c)), ae(this, "off", (a, c) => this.events.off(a, c)), ae(this, "removeListener", (a, c) => this.events.removeListener(a, c)), ae(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: h }) => {
      if (!a || !c) return;
      const u = { topic: a, message: c, publishedAt: Date.now(), transportType: ue.link_mode };
      this.relayer.onLinkMessageEvent(u, { sessionExists: h });
    });
    const i = this.getGlobalCore(e == null ? void 0 : e.customStoragePrefix);
    if (i) try {
      return this.customStoragePrefix = i.customStoragePrefix, this.logger = i.logger, this.heartbeat = i.heartbeat, this.crypto = i.crypto, this.history = i.history, this.expirer = i.expirer, this.storage = i.storage, this.relayer = i.relayer, this.pairing = i.pairing, this.verify = i.verify, this.echoClient = i.echoClient, this.linkModeSupportedApps = i.linkModeSupportedApps, this.eventClient = i.eventClient, this.initialized = i.initialized, this.logChunkController = i.logChunkController, i;
    } catch (a) {
      console.warn("Failed to copy global core", a);
    }
    this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || cp, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const s = Nn({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : lx.logger, name: ha }), { logger: n, chunkLoggerController: o } = rI({ opts: s, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = o, (r = this.logChunkController) != null && r.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a, c;
      (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = Me(n, this.name), this.heartbeat = new G3(), this.crypto = new m$(this, this.logger, e == null ? void 0 : e.keychain), this.history = new AS(this, this.logger), this.expirer = new CS(this, this.logger), this.storage = e != null && e.storage ? e.storage : new A_(Gu(Gu({}, fx), e == null ? void 0 : e.storageOptions)), this.relayer = new V$({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new $S(this, this.logger), this.verify = new BS(this, this.logger, this.storage), this.echoClient = new US(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new MS(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e) {
    const r = new Ep(e);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem($x, i), r;
  }
  get context() {
    return Ze(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(Du, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Du) || [], this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
  getGlobalCore(e = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const r = `_walletConnectCore_${e}`, i = `${r}_count`;
      return globalThis[i] = (globalThis[i] || 0) + 1, globalThis[i] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`), globalThis[r];
    } catch (r) {
      console.warn("Failed to get global WalletConnect core", r);
      return;
    }
  }
  setGlobalCore(e) {
    var r;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const i = `_walletConnectCore_${((r = e.opts) == null ? void 0 : r.customStoragePrefix) || ""}`;
      globalThis[i] = e;
    } catch (i) {
      console.warn("Failed to set global WalletConnect core", i);
    }
  }
  isGlobalCoreDisabled() {
    try {
      return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true";
    } catch {
      return !0;
    }
  }
};
const KS = VS, _p = "wc", Ip = 2, xp = "client", hc = `${_p}@${Ip}:${xp}:`, xo = { name: xp, logger: "error" }, Yu = "WALLETCONNECT_DEEPLINK_CHOICE", WS = "proposal", Ju = "Proposal expired", GS = "session", Qr = L.SEVEN_DAYS, YS = "engine", ve = { wc_sessionPropose: { req: { ttl: L.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1101 }, reject: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1120 }, autoReject: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1121 } }, wc_sessionSettle: { req: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: L.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: L.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: L.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: L.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: L.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: L.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: L.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: L.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: L.ONE_DAY, prompt: !1, tag: 1114 }, res: { ttl: L.ONE_DAY, prompt: !1, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: L.ONE_HOUR, prompt: !0, tag: 1116 }, res: { ttl: L.ONE_HOUR, prompt: !1, tag: 1117 }, reject: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1118 }, autoReject: { ttl: L.FIVE_MINUTES, prompt: !1, tag: 1119 } } }, $o = { min: L.FIVE_MINUTES, max: L.SEVEN_DAYS }, At = { idle: "IDLE", active: "ACTIVE" }, JS = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" }, sui_signAndExecuteTransaction: { key: "digest" }, sui_signTransaction: { key: "" }, hedera_signAndExecuteTransaction: { key: "transactionId" }, hedera_executeTransaction: { key: "transactionId" }, near_signTransaction: { key: "" }, near_signTransactions: { key: "" }, tron_signTransaction: { key: "txID" }, xrpl_signTransaction: { key: "" }, xrpl_signTransactionFor: { key: "" }, algo_signTxn: { key: "" }, sendTransfer: { key: "txid" }, stacks_stxTransfer: { key: "txId" }, polkadot_signTransaction: { key: "" }, cosmos_signDirect: { key: "" } }, ZS = "request", QS = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], XS = "wc", eD = "auth", tD = "authKeys", rD = "pairingTopics", iD = "requests", Mn = `${XS}@${1.5}:${eD}:`, sn = `${Mn}:PUB_KEY`;
var sD = Object.defineProperty, nD = Object.defineProperties, oD = Object.getOwnPropertyDescriptors, Zu = Object.getOwnPropertySymbols, aD = Object.prototype.hasOwnProperty, cD = Object.prototype.propertyIsEnumerable, va = (t, e, r) => e in t ? sD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, he = (t, e) => {
  for (var r in e || (e = {})) aD.call(e, r) && va(t, r, e[r]);
  if (Zu) for (var r of Zu(e)) cD.call(e, r) && va(t, r, e[r]);
  return t;
}, He = (t, e) => nD(t, oD(e)), F = (t, e, r) => va(t, typeof e != "symbol" ? e + "" : e, r);
class hD extends _I {
  constructor(e) {
    super(e), F(this, "name", YS), F(this, "events", new Pa()), F(this, "initialized", !1), F(this, "requestQueue", { state: At.idle, queue: [] }), F(this, "sessionRequestQueue", { state: At.idle, queue: [] }), F(this, "requestQueueDelay", L.ONE_SECOND), F(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), F(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), F(this, "recentlyDeletedLimit", 200), F(this, "relayMessageCache", []), F(this, "pendingSessions", /* @__PURE__ */ new Map()), F(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(ve) }), this.initialized = !0, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, L.toMiliseconds(this.requestQueueDelay)));
    }), F(this, "connect", async (r) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const i = He(he({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i), i.optionalNamespaces = o3(i.requiredNamespaces, i.optionalNamespaces), i.requiredNamespaces = {};
      const { pairingTopic: s, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: a, scopedProperties: c, relays: h } = i;
      let u = s, l, f = !1;
      try {
        if (u) {
          const k = this.client.core.pairing.pairings.get(u);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), f = k.active;
        }
      } catch (k) {
        throw this.client.logger.error(`connect() -> pairing.get(${u}) failed`), k;
      }
      if (!u || !f) {
        const { topic: k, uri: U } = await this.client.core.pairing.create();
        u = k, l = U;
      }
      if (!u) {
        const { message: k } = j("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
        throw new Error(k);
      }
      const p = await this.client.core.crypto.generateKeyPair(), d = ve.wc_sessionPropose.req.ttl || L.FIVE_MINUTES, g = we(d), m = He(he(he({ requiredNamespaces: n, optionalNamespaces: o, relays: h ?? [{ protocol: ap }], proposer: { publicKey: p, metadata: this.client.metadata }, expiryTimestamp: g, pairingTopic: u }, a && { sessionProperties: a }), c && { scopedProperties: c }), { id: Pt() }), _ = se("session_connect", m.id), { reject: I, resolve: E, done: P } = _r(d, Ju), A = ({ id: k }) => {
        k === m.id && (this.client.events.off("proposal_expire", A), this.pendingSessions.delete(m.id), this.events.emit(_, { error: { message: Ju, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", A), this.events.once(_, ({ error: k, session: U }) => {
        this.client.events.off("proposal_expire", A), k ? I(k) : U && E(U);
      }), await this.sendRequest({ topic: u, method: "wc_sessionPropose", params: m, throwOnFailedPublish: !0, clientRpcId: m.id }), await this.setProposal(m.id, m), { uri: l, approval: P };
    }), F(this, "pair", async (r) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(r);
      } catch (i) {
        throw this.client.logger.error("pair() failed"), i;
      }
    }), F(this, "approve", async (r) => {
      var i, s, n;
      const o = this.client.core.eventClient.createEvent({ properties: { topic: (i = r == null ? void 0 : r.id) == null ? void 0 : i.toString(), trace: [mt.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (b) {
        throw o.setError(vr.no_internet_connection), b;
      }
      try {
        await this.isValidProposalId(r == null ? void 0 : r.id);
      } catch (b) {
        throw this.client.logger.error(`approve() -> proposal.get(${r == null ? void 0 : r.id}) failed`), o.setError(vr.proposal_not_found), b;
      }
      try {
        await this.isValidApprove(r);
      } catch (b) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), o.setError(vr.session_approve_namespace_validation_failure), b;
      }
      const { id: a, relayProtocol: c, namespaces: h, sessionProperties: u, scopedProperties: l, sessionConfig: f } = r, p = this.client.proposal.get(a);
      this.client.core.eventClient.deleteEvent({ eventId: o.eventId });
      const { pairingTopic: d, proposer: g, requiredNamespaces: m, optionalNamespaces: _ } = p;
      let I = (s = this.client.core.eventClient) == null ? void 0 : s.getEvent({ topic: d });
      I || (I = (n = this.client.core.eventClient) == null ? void 0 : n.createEvent({ type: mt.session_approve_started, properties: { topic: d, trace: [mt.session_approve_started, mt.session_namespaces_validation_success] } }));
      const E = await this.client.core.crypto.generateKeyPair(), P = g.publicKey, A = await this.client.core.crypto.generateSharedKey(E, P), k = he(he(he({ relay: { protocol: c ?? "irn" }, namespaces: h, controller: { publicKey: E, metadata: this.client.metadata }, expiry: we(Qr) }, u && { sessionProperties: u }), l && { scopedProperties: l }), f && { sessionConfig: f }), U = ue.relay;
      I.addTrace(mt.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(A, { transportType: U });
      } catch (b) {
        throw I.setError(vr.subscribe_session_topic_failure), b;
      }
      I.addTrace(mt.subscribe_session_topic_success);
      const R = He(he({}, k), { topic: A, requiredNamespaces: m, optionalNamespaces: _, pairingTopic: d, acknowledged: !1, self: k.controller, peer: { publicKey: g.publicKey, metadata: g.metadata }, controller: E, transportType: ue.relay });
      await this.client.session.set(A, R), I.addTrace(mt.store_session);
      try {
        I.addTrace(mt.publishing_session_settle), await this.sendRequest({ topic: A, method: "wc_sessionSettle", params: k, throwOnFailedPublish: !0 }).catch((b) => {
          throw I == null || I.setError(vr.session_settle_publish_failure), b;
        }), I.addTrace(mt.session_settle_publish_success), I.addTrace(mt.publishing_session_approve), await this.sendResult({ id: a, topic: d, result: { relay: { protocol: c ?? "irn" }, responderPublicKey: E }, throwOnFailedPublish: !0 }).catch((b) => {
          throw I == null || I.setError(vr.session_approve_publish_failure), b;
        }), I.addTrace(mt.session_approve_publish_success);
      } catch (b) {
        throw this.client.logger.error(b), this.client.session.delete(A, le("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(A), b;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: I.eventId }), await this.client.core.pairing.updateMetadata({ topic: d, metadata: g.metadata }), await this.deleteProposal(a), await this.client.core.pairing.activate({ topic: d }), await this.setExpiry(A, we(Qr)), { topic: A, acknowledged: () => Promise.resolve(this.client.session.get(A)) };
    }), F(this, "reject", async (r) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(r);
      } catch (o) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), o;
      }
      const { id: i, reason: s } = r;
      let n;
      try {
        n = this.client.proposal.get(i).pairingTopic;
      } catch (o) {
        throw this.client.logger.error(`reject() -> proposal.get(${i}) failed`), o;
      }
      n && await this.sendError({ id: i, topic: n, error: s, rpcOpts: ve.wc_sessionPropose.reject }), await this.deleteProposal(i);
    }), F(this, "update", async (r) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(r);
      } catch (l) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), l;
      }
      const { topic: i, namespaces: s } = r, { done: n, resolve: o, reject: a } = _r(), c = Pt(), h = Cr().toString(), u = this.client.session.get(i).namespaces;
      return this.events.once(se("session_update", c), ({ error: l }) => {
        l ? a(l) : o();
      }), await this.client.session.update(i, { namespaces: s }), await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: s }, throwOnFailedPublish: !0, clientRpcId: c, relayRpcId: h }).catch((l) => {
        this.client.logger.error(l), this.client.session.update(i, { namespaces: u }), a(l);
      }), { acknowledged: n };
    }), F(this, "extend", async (r) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(r);
      } catch (c) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), c;
      }
      const { topic: i } = r, s = Pt(), { done: n, resolve: o, reject: a } = _r();
      return this.events.once(se("session_extend", s), ({ error: c }) => {
        c ? a(c) : o();
      }), await this.setExpiry(i, we(Qr)), this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {}, clientRpcId: s, throwOnFailedPublish: !0 }).catch((c) => {
        a(c);
      }), { acknowledged: n };
    }), F(this, "request", async (r) => {
      this.isInitialized();
      try {
        await this.isValidRequest(r);
      } catch (m) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), m;
      }
      const { chainId: i, request: s, topic: n, expiry: o = ve.wc_sessionRequest.req.ttl } = r, a = this.client.session.get(n);
      (a == null ? void 0 : a.transportType) === ue.relay && await this.confirmOnlineStateOrThrow();
      const c = Pt(), h = Cr().toString(), { done: u, resolve: l, reject: f } = _r(o, "Request expired. Please try again.");
      this.events.once(se("session_request", c), ({ error: m, result: _ }) => {
        m ? f(m) : l(_);
      });
      const p = "wc_sessionRequest", d = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
      if (d) return await this.sendRequest({ clientRpcId: c, relayRpcId: h, topic: n, method: p, params: { request: He(he({}, s), { expiryTimestamp: we(o) }), chainId: i }, expiry: o, throwOnFailedPublish: !0, appLink: d }).catch((m) => f(m)), this.client.events.emit("session_request_sent", { topic: n, request: s, chainId: i, id: c }), await u();
      const g = { request: He(he({}, s), { expiryTimestamp: we(o) }), chainId: i };
      return await Promise.all([new Promise(async (m) => {
        await this.sendRequest({ clientRpcId: c, relayRpcId: h, topic: n, method: p, params: g, expiry: o, throwOnFailedPublish: !0, tvf: this.getTVFParams(c, g) }).catch((_) => f(_)), this.client.events.emit("session_request_sent", { topic: n, request: s, chainId: i, id: c }), m();
      }), new Promise(async (m) => {
        var _;
        if (!((_ = a.sessionConfig) != null && _.disableDeepLink)) {
          const I = await tv(this.client.core.storage, Yu);
          await Q1({ id: c, topic: n, wcDeepLink: I });
        }
        m();
      }), u()]).then((m) => m[2]);
    }), F(this, "respond", async (r) => {
      this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: s } = r, { id: n } = s, o = this.client.session.get(i);
      o.transportType === ue.relay && await this.confirmOnlineStateOrThrow();
      const a = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
      Ct(s) ? await this.sendResult({ id: n, topic: i, result: s.result, throwOnFailedPublish: !0, appLink: a }) : ct(s) && await this.sendError({ id: n, topic: i, error: s.error, appLink: a }), this.cleanupAfterResponse(r);
    }), F(this, "ping", async (r) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(r);
      } catch (s) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s;
      }
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const s = Pt(), n = Cr().toString(), { done: o, resolve: a, reject: c } = _r();
        this.events.once(se("session_ping", s), ({ error: h }) => {
          h ? c(h) : a();
        }), await Promise.all([this.sendRequest({ topic: i, method: "wc_sessionPing", params: {}, throwOnFailedPublish: !0, clientRpcId: s, relayRpcId: n }), o()]);
      } else this.client.core.pairing.pairings.keys.includes(i) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: i }));
    }), F(this, "emit", async (r) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(r);
      const { topic: i, event: s, chainId: n } = r, o = Cr().toString(), a = Pt();
      await this.sendRequest({ topic: i, method: "wc_sessionEvent", params: { event: s, chainId: n }, throwOnFailedPublish: !0, relayRpcId: o, clientRpcId: a });
    }), F(this, "disconnect", async (r) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: le("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: i, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(i)) await this.client.core.pairing.disconnect({ topic: i });
      else {
        const { message: s } = j("MISMATCHED_TOPIC", `Session or pairing topic not found: ${i}`);
        throw new Error(s);
      }
    }), F(this, "find", (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => h3(i, r)))), F(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), F(this, "authenticate", async (r, i) => {
      var s;
      this.isInitialized(), this.isValidAuthenticate(r);
      const n = i && this.client.core.linkModeSupportedApps.includes(i) && ((s = this.client.metadata.redirect) == null ? void 0 : s.linkMode), o = n ? ue.link_mode : ue.relay;
      o === ue.relay && await this.confirmOnlineStateOrThrow();
      const { chains: a, statement: c = "", uri: h, domain: u, nonce: l, type: f, exp: p, nbf: d, methods: g = [], expiry: m } = r, _ = [...r.resources || []], { topic: I, uri: E } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: o });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: I, uri: E } });
      const P = await this.client.core.crypto.generateKeyPair(), A = Xs(P);
      if (await Promise.all([this.client.auth.authKeys.set(sn, { responseTopic: A, publicKey: P }), this.client.auth.pairingTopics.set(A, { topic: A, pairingTopic: I })]), await this.client.core.relayer.subscribe(A, { transportType: o }), this.client.logger.info(`sending request to new pairing topic: ${I}`), g.length > 0) {
        const { namespace: x } = gi(a[0]);
        let O = y2(x, "request", g);
        Qs(_) && (O = m2(O, _.pop())), _.push(O);
      }
      const k = m && m > ve.wc_sessionAuthenticate.req.ttl ? m : ve.wc_sessionAuthenticate.req.ttl, U = { authPayload: { type: f ?? "caip122", chains: a, statement: c, aud: h, domain: u, version: "1", nonce: l, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: p, nbf: d, resources: _ }, requester: { publicKey: P, metadata: this.client.metadata }, expiryTimestamp: we(k) }, R = { eip155: { chains: a, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...g])], events: ["chainChanged", "accountsChanged"] } }, b = { requiredNamespaces: {}, optionalNamespaces: R, relays: [{ protocol: "irn" }], pairingTopic: I, proposer: { publicKey: P, metadata: this.client.metadata }, expiryTimestamp: we(ve.wc_sessionPropose.req.ttl), id: Pt() }, { done: C, resolve: S, reject: D } = _r(k, "Request expired"), T = Pt(), N = se("session_connect", b.id), y = se("session_request", T), w = async ({ error: x, session: O }) => {
        this.events.off(y, v), x ? D(x) : O && S({ session: O });
      }, v = async (x) => {
        var O, B, q;
        if (await this.deletePendingAuthRequest(T, { message: "fulfilled", code: 0 }), x.error) {
          const Y = le("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return x.error.code === Y.code ? void 0 : (this.events.off(N, w), D(x.error.message));
        }
        await this.deleteProposal(b.id), this.events.off(N, w);
        const { cacaos: H, responder: M } = x.result, V = [], K = [];
        for (const Y of H) {
          await Oh({ cacao: Y, projectId: this.client.core.projectId }) || (this.client.logger.error(Y, "Signature verification failed"), D(le("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: fe } = Y, xe = Qs(fe.resources), wr = [Wo(fe.iss)], $s = dn(fe.iss);
          if (xe) {
            const zr = Ph(xe), qn = Ch(xe);
            V.push(...zr), wr.push(...qn);
          }
          for (const zr of wr) K.push(`${zr}:${$s}`);
        }
        const ie = await this.client.core.crypto.generateSharedKey(P, M.publicKey);
        let re;
        V.length > 0 && (re = { topic: ie, acknowledged: !0, self: { publicKey: P, metadata: this.client.metadata }, peer: M, controller: M.publicKey, expiry: we(Qr), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: I, namespaces: tu([...new Set(V)], [...new Set(K)]), transportType: o }, await this.client.core.relayer.subscribe(ie, { transportType: o }), await this.client.session.set(ie, re), I && await this.client.core.pairing.updateMetadata({ topic: I, metadata: M.metadata }), re = this.client.session.get(ie)), (O = this.client.metadata.redirect) != null && O.linkMode && (B = M.metadata.redirect) != null && B.linkMode && (q = M.metadata.redirect) != null && q.universal && i && (this.client.core.addLinkModeSupportedApp(M.metadata.redirect.universal), this.client.session.update(ie, { transportType: ue.link_mode })), S({ auths: H, session: re });
      };
      this.events.once(N, w), this.events.once(y, v);
      let $;
      try {
        if (n) {
          const x = fr("wc_sessionAuthenticate", U, T);
          this.client.core.history.set(I, x);
          const O = await this.client.core.crypto.encode("", x, { type: vs, encoding: ur });
          $ = Ls(i, I, O);
        } else await Promise.all([this.sendRequest({ topic: I, method: "wc_sessionAuthenticate", params: U, expiry: r.expiry, throwOnFailedPublish: !0, clientRpcId: T }), this.sendRequest({ topic: I, method: "wc_sessionPropose", params: b, expiry: ve.wc_sessionPropose.req.ttl, throwOnFailedPublish: !0, clientRpcId: b.id })]);
      } catch (x) {
        throw this.events.off(N, w), this.events.off(y, v), x;
      }
      return await this.setProposal(b.id, b), await this.setAuthRequest(T, { request: He(he({}, U), { verifyContext: {} }), pairingTopic: I, transportType: o }), { uri: $ ?? E, response: C };
    }), F(this, "approveSessionAuthenticate", async (r) => {
      const { id: i, auths: s } = r, n = this.client.core.eventClient.createEvent({ properties: { topic: i.toString(), trace: [Er.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (m) {
        throw n.setError(ji.no_internet_connection), m;
      }
      const o = this.getPendingAuthRequest(i);
      if (!o) throw n.setError(ji.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${i}`);
      const a = o.transportType || ue.relay;
      a === ue.relay && await this.confirmOnlineStateOrThrow();
      const c = o.requester.publicKey, h = await this.client.core.crypto.generateKeyPair(), u = Xs(c), l = { type: Kt, receiverPublicKey: c, senderPublicKey: h }, f = [], p = [];
      for (const m of s) {
        if (!await Oh({ cacao: m, projectId: this.client.core.projectId })) {
          n.setError(ji.invalid_cacao);
          const A = le("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: i, topic: u, error: A, encodeOpts: l }), new Error(A.message);
        }
        n.addTrace(Er.cacaos_verified);
        const { p: _ } = m, I = Qs(_.resources), E = [Wo(_.iss)], P = dn(_.iss);
        if (I) {
          const A = Ph(I), k = Ch(I);
          f.push(...A), E.push(...k);
        }
        for (const A of E) p.push(`${A}:${P}`);
      }
      const d = await this.client.core.crypto.generateSharedKey(h, c);
      n.addTrace(Er.create_authenticated_session_topic);
      let g;
      if ((f == null ? void 0 : f.length) > 0) {
        g = { topic: d, acknowledged: !0, self: { publicKey: h, metadata: this.client.metadata }, peer: { publicKey: c, metadata: o.requester.metadata }, controller: c, expiry: we(Qr), authentication: s, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: o.pairingTopic, namespaces: tu([...new Set(f)], [...new Set(p)]), transportType: a }, n.addTrace(Er.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(d, { transportType: a });
        } catch (m) {
          throw n.setError(ji.subscribe_authenticated_session_topic_failure), m;
        }
        n.addTrace(Er.subscribe_authenticated_session_topic_success), await this.client.session.set(d, g), n.addTrace(Er.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: o.pairingTopic, metadata: o.requester.metadata });
      }
      n.addTrace(Er.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: u, id: i, result: { cacaos: s, responder: { publicKey: h, metadata: this.client.metadata } }, encodeOpts: l, throwOnFailedPublish: !0, appLink: this.getAppLinkIfEnabled(o.requester.metadata, a) });
      } catch (m) {
        throw n.setError(ji.authenticated_session_approve_publish_failure), m;
      }
      return await this.client.auth.requests.delete(i, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: o.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: n.eventId }), { session: g };
    }), F(this, "rejectSessionAuthenticate", async (r) => {
      this.isInitialized();
      const { id: i, reason: s } = r, n = this.getPendingAuthRequest(i);
      if (!n) throw new Error(`Could not find pending auth request with id ${i}`);
      n.transportType === ue.relay && await this.confirmOnlineStateOrThrow();
      const o = n.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = Xs(o), h = { type: Kt, receiverPublicKey: o, senderPublicKey: a };
      await this.sendError({ id: i, topic: c, error: s, encodeOpts: h, rpcOpts: ve.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(n.requester.metadata, n.transportType) }), await this.client.auth.requests.delete(i, { message: "rejected", code: 0 }), await this.deleteProposal(i);
    }), F(this, "formatAuthMessage", (r) => {
      this.isInitialized();
      const { request: i, iss: s } = r;
      return gd(i, s);
    }), F(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const r = this.relayMessageCache.shift();
          r && await this.onRelayMessage(r);
        } catch (r) {
          this.client.logger.error(r);
        }
      }, 50);
    }), F(this, "cleanupDuplicatePairings", async (r) => {
      if (r.pairingTopic) try {
        const i = this.client.core.pairing.pairings.get(r.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((n) => {
          var o, a;
          return ((o = n.peerMetadata) == null ? void 0 : o.url) && ((a = n.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && n.topic && n.topic !== i.topic;
        });
        if (s.length === 0) return;
        this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (i) {
        this.client.logger.error(i);
      }
    }), F(this, "deleteSession", async (r) => {
      var i;
      const { topic: s, expirerHasDeleted: n = !1, emitEvent: o = !0, id: a = 0 } = r, { self: c } = this.client.session.get(s);
      await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, le("USER_DISCONNECTED")), this.addToRecentlyDeleted(s, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), n || this.client.core.expirer.del(s), this.client.core.storage.removeItem(Yu).catch((h) => this.client.logger.warn(h)), this.getPendingSessionRequests().forEach((h) => {
        h.topic === s && this.deletePendingSessionRequest(h.id, le("USER_DISCONNECTED"));
      }), s === ((i = this.sessionRequestQueue.queue[0]) == null ? void 0 : i.topic) && (this.sessionRequestQueue.state = At.idle), o && this.client.events.emit("session_delete", { id: a, topic: s });
    }), F(this, "deleteProposal", async (r, i) => {
      if (i) try {
        const s = this.client.proposal.get(r), n = this.client.core.eventClient.getEvent({ topic: s.pairingTopic });
        n == null || n.setError(vr.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(r, le("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.addToRecentlyDeleted(r, "proposal");
    }), F(this, "deletePendingSessionRequest", async (r, i, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.addToRecentlyDeleted(r, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((n) => n.id !== r), s && (this.sessionRequestQueue.state = At.idle, this.client.events.emit("session_request_expire", { id: r }));
    }), F(this, "deletePendingAuthRequest", async (r, i, s = !1) => {
      await Promise.all([this.client.auth.requests.delete(r, i), s ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }), F(this, "setExpiry", async (r, i) => {
      this.client.session.keys.includes(r) && (this.client.core.expirer.set(r, i), await this.client.session.update(r, { expiry: i }));
    }), F(this, "setProposal", async (r, i) => {
      this.client.core.expirer.set(r, we(ve.wc_sessionPropose.req.ttl)), await this.client.proposal.set(r, i);
    }), F(this, "setAuthRequest", async (r, i) => {
      const { request: s, pairingTopic: n, transportType: o = ue.relay } = i;
      this.client.core.expirer.set(r, s.expiryTimestamp), await this.client.auth.requests.set(r, { authPayload: s.authPayload, requester: s.requester, expiryTimestamp: s.expiryTimestamp, id: r, pairingTopic: n, verifyContext: s.verifyContext, transportType: o });
    }), F(this, "setPendingSessionRequest", async (r) => {
      const { id: i, topic: s, params: n, verifyContext: o } = r, a = n.request.expiryTimestamp || we(ve.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(i, a), await this.client.pendingRequest.set(i, { id: i, topic: s, params: n, verifyContext: o });
    }), F(this, "sendRequest", async (r) => {
      const { topic: i, method: s, params: n, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: h, appLink: u, tvf: l } = r, f = fr(s, n, c);
      let p;
      const d = !!u;
      try {
        const _ = d ? ur : _t;
        p = await this.client.core.crypto.encode(i, f, { encoding: _ });
      } catch (_) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${i} failed`), _;
      }
      let g;
      if (QS.includes(s)) {
        const _ = Rt(JSON.stringify(f)), I = Rt(p);
        g = await this.client.core.verify.register({ id: I, decryptedId: _ });
      }
      const m = ve[s].req;
      if (m.attestation = g, o && (m.ttl = o), a && (m.id = a), this.client.core.history.set(i, f), d) {
        const _ = Ls(u, i, p);
        await global.Linking.openURL(_, this.client.name);
      } else {
        const _ = ve[s].req;
        o && (_.ttl = o), a && (_.id = a), _.tvf = He(he({}, l), { correlationId: f.id }), h ? (_.internal = He(he({}, _.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, p, _)) : this.client.core.relayer.publish(i, p, _).catch((I) => this.client.logger.error(I));
      }
      return f.id;
    }), F(this, "sendResult", async (r) => {
      const { id: i, topic: s, result: n, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = r, h = Un(i, n);
      let u;
      const l = c && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const d = l ? ur : _t;
        u = await this.client.core.crypto.encode(s, h, He(he({}, a || {}), { encoding: d }));
      } catch (d) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), d;
      }
      let f, p;
      try {
        f = await this.client.core.history.get(s, i);
        const d = f.request;
        try {
          p = this.getTVFParams(i, d.params, n);
        } catch (g) {
          this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${g == null ? void 0 : g.message}`);
        }
      } catch (d) {
        throw this.client.logger.error(`sendResult() -> history.get(${s}, ${i}) failed`), d;
      }
      if (l) {
        const d = Ls(c, s, u);
        await global.Linking.openURL(d, this.client.name);
      } else {
        const d = f.request.method, g = ve[d].res;
        g.tvf = He(he({}, p), { correlationId: i }), o ? (g.internal = He(he({}, g.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, u, g)) : this.client.core.relayer.publish(s, u, g).catch((m) => this.client.logger.error(m));
      }
      await this.client.core.history.resolve(h);
    }), F(this, "sendError", async (r) => {
      const { id: i, topic: s, error: n, encodeOpts: o, rpcOpts: a, appLink: c } = r, h = kn(i, n);
      let u;
      const l = c && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const p = l ? ur : _t;
        u = await this.client.core.crypto.encode(s, h, He(he({}, o || {}), { encoding: p }));
      } catch (p) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), p;
      }
      let f;
      try {
        f = await this.client.core.history.get(s, i);
      } catch (p) {
        throw this.client.logger.error(`sendError() -> history.get(${s}, ${i}) failed`), p;
      }
      if (l) {
        const p = Ls(c, s, u);
        await global.Linking.openURL(p, this.client.name);
      } else {
        const p = f.request.method, d = a || ve[p].res;
        this.client.core.relayer.publish(s, u, d);
      }
      await this.client.core.history.resolve(h);
    }), F(this, "cleanup", async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((s) => {
        let n = !1;
        or(s.expiry) && (n = !0), this.client.core.crypto.keychain.has(s.topic) || (n = !0), n && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        or(s.expiryTimestamp) && i.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession({ topic: s })), ...i.map((s) => this.deleteProposal(s))]);
    }), F(this, "onProviderMessageEvent", async (r) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(r) : await this.onRelayMessage(r);
    }), F(this, "onRelayEventRequest", async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }), F(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === At.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = At.active;
        const r = this.requestQueue.queue.shift();
        if (r) try {
          await this.processRequest(r);
        } catch (i) {
          this.client.logger.warn(i);
        }
      }
      this.requestQueue.state = At.idle;
    }), F(this, "processRequest", async (r) => {
      const { topic: i, payload: s, attestation: n, transportType: o, encryptedId: a } = r, c = s.method;
      if (!this.shouldIgnorePairingRequest({ topic: i, requestMethod: c })) switch (c) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: i, payload: s, attestation: n, encryptedId: a });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(i, s);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(i, s);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(i, s);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(i, s);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(i, s);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: i, payload: s, attestation: n, encryptedId: a, transportType: o });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(i, s);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: i, payload: s, attestation: n, encryptedId: a, transportType: o });
        default:
          return this.client.logger.info(`Unsupported request method ${c}`);
      }
    }), F(this, "onRelayEventResponse", async (r) => {
      const { topic: i, payload: s, transportType: n } = r, o = (await this.client.core.history.get(i, s.id)).request.method;
      switch (o) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, s, n);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, s);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(i, s);
        default:
          return this.client.logger.info(`Unsupported response method ${o}`);
      }
    }), F(this, "onRelayEventUnknownPayload", (r) => {
      const { topic: i } = r, { message: s } = j("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }), F(this, "shouldIgnorePairingRequest", (r) => {
      const { topic: i, requestMethod: s } = r, n = this.expectedPairingMethodMap.get(i);
      return !n || n.includes(s) ? !1 : !!(n.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), F(this, "onSessionProposeRequest", async (r) => {
      const { topic: i, payload: s, attestation: n, encryptedId: o } = r, { params: a, id: c } = s;
      try {
        const h = this.client.core.eventClient.getEvent({ topic: i });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), h == null || h.setError(Ht.proposal_listener_not_found)), this.isValidConnect(he({}, s.params));
        const u = a.expiryTimestamp || we(ve.wc_sessionPropose.req.ttl), l = he({ id: c, pairingTopic: i, expiryTimestamp: u, attestation: n, encryptedId: o }, a);
        await this.setProposal(c, l);
        const f = await this.getVerifyContext({ attestationId: n, hash: Rt(JSON.stringify(s)), encryptedId: o, metadata: l.proposer.metadata });
        h == null || h.addTrace(Ot.emit_session_proposal), this.client.events.emit("session_proposal", { id: c, params: l, verifyContext: f });
      } catch (h) {
        await this.sendError({ id: c, topic: i, error: h, rpcOpts: ve.wc_sessionPropose.autoReject }), this.client.logger.error(h);
      }
    }), F(this, "onSessionProposeResponse", async (r, i, s) => {
      const { id: n } = i;
      if (Ct(i)) {
        const { result: o } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: o });
        const a = this.client.proposal.get(n);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const c = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const h = o.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: h });
        const u = await this.client.core.crypto.generateSharedKey(c, h);
        this.pendingSessions.set(n, { sessionTopic: u, pairingTopic: r, proposalId: n, publicKey: c });
        const l = await this.client.core.relayer.subscribe(u, { transportType: s });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: l }), await this.client.core.pairing.activate({ topic: r });
      } else if (ct(i)) {
        await this.deleteProposal(n);
        const o = se("session_connect", n);
        if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
        this.events.emit(o, { error: i.error });
      }
    }), F(this, "onSessionSettleRequest", async (r, i) => {
      const { id: s, params: n } = i;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: o, controller: a, expiry: c, namespaces: h, sessionProperties: u, scopedProperties: l, sessionConfig: f } = i.params, p = [...this.pendingSessions.values()].find((m) => m.sessionTopic === r);
        if (!p) return this.client.logger.error(`Pending session not found for topic ${r}`);
        const d = this.client.proposal.get(p.proposalId), g = He(he(he(he({ topic: r, relay: o, expiry: c, namespaces: h, acknowledged: !0, pairingTopic: p.pairingTopic, requiredNamespaces: d.requiredNamespaces, optionalNamespaces: d.optionalNamespaces, controller: a.publicKey, self: { publicKey: p.publicKey, metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, u && { sessionProperties: u }), l && { scopedProperties: l }), f && { sessionConfig: f }), { transportType: ue.relay });
        await this.client.session.set(g.topic, g), await this.setExpiry(g.topic, g.expiry), await this.client.core.pairing.updateMetadata({ topic: p.pairingTopic, metadata: g.peer.metadata }), this.client.events.emit("session_connect", { session: g }), this.events.emit(se("session_connect", p.proposalId), { session: g }), this.pendingSessions.delete(p.proposalId), this.deleteProposal(p.proposalId, !1), this.cleanupDuplicatePairings(g), await this.sendResult({ id: i.id, topic: r, result: !0 });
      } catch (o) {
        await this.sendError({ id: s, topic: r, error: o }), this.client.logger.error(o);
      }
    }), F(this, "onSessionSettleResponse", async (r, i) => {
      const { id: s } = i;
      Ct(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(se("session_approve", s), {})) : ct(i) && (await this.client.session.delete(r, le("USER_DISCONNECTED")), this.events.emit(se("session_approve", s), { error: i.error }));
    }), F(this, "onSessionUpdateRequest", async (r, i) => {
      const { params: s, id: n } = i;
      try {
        const o = `${r}_session_update`, a = ki.get(o);
        if (a && this.isRequestOutOfSync(a, n)) {
          this.client.logger.warn(`Discarding out of sync request - ${n}`), this.sendError({ id: n, topic: r, error: le("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(he({ topic: r }, s));
        try {
          ki.set(o, n), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: n, topic: r, result: !0 });
        } catch (c) {
          throw ki.delete(o), c;
        }
        this.client.events.emit("session_update", { id: n, topic: r, params: s });
      } catch (o) {
        await this.sendError({ id: n, topic: r, error: o }), this.client.logger.error(o);
      }
    }), F(this, "isRequestOutOfSync", (r, i) => i.toString().slice(0, -3) < r.toString().slice(0, -3)), F(this, "onSessionUpdateResponse", (r, i) => {
      const { id: s } = i, n = se("session_update", s);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      Ct(i) ? this.events.emit(se("session_update", s), {}) : ct(i) && this.events.emit(se("session_update", s), { error: i.error });
    }), F(this, "onSessionExtendRequest", async (r, i) => {
      const { id: s } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, we(Qr)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (n) {
        await this.sendError({ id: s, topic: r, error: n }), this.client.logger.error(n);
      }
    }), F(this, "onSessionExtendResponse", (r, i) => {
      const { id: s } = i, n = se("session_extend", s);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      Ct(i) ? this.events.emit(se("session_extend", s), {}) : ct(i) && this.events.emit(se("session_extend", s), { error: i.error });
    }), F(this, "onSessionPingRequest", async (r, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: s, topic: r, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_ping", { id: s, topic: r });
      } catch (n) {
        await this.sendError({ id: s, topic: r, error: n }), this.client.logger.error(n);
      }
    }), F(this, "onSessionPingResponse", (r, i) => {
      const { id: s } = i, n = se("session_ping", s);
      setTimeout(() => {
        if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners 2176`);
        Ct(i) ? this.events.emit(se("session_ping", s), {}) : ct(i) && this.events.emit(se("session_ping", s), { error: i.error });
      }, 500);
    }), F(this, "onSessionDeleteRequest", async (r, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), Promise.all([new Promise((n) => {
          this.client.core.relayer.once(_e.publish, async () => {
            n(await this.deleteSession({ topic: r, id: s }));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: r, error: le("USER_DISCONNECTED") })]).catch((n) => this.client.logger.error(n));
      } catch (n) {
        this.client.logger.error(n);
      }
    }), F(this, "onSessionRequest", async (r) => {
      var i, s, n;
      const { topic: o, payload: a, attestation: c, encryptedId: h, transportType: u } = r, { id: l, params: f } = a;
      try {
        await this.isValidRequest(he({ topic: o }, f));
        const p = this.client.session.get(o), d = await this.getVerifyContext({ attestationId: c, hash: Rt(JSON.stringify(fr("wc_sessionRequest", f, l))), encryptedId: h, metadata: p.peer.metadata, transportType: u }), g = { id: l, topic: o, params: f, verifyContext: d };
        await this.setPendingSessionRequest(g), u === ue.link_mode && (i = p.peer.metadata.redirect) != null && i.universal && this.client.core.addLinkModeSupportedApp((s = p.peer.metadata.redirect) == null ? void 0 : s.universal), (n = this.client.signConfig) != null && n.disableRequestQueue ? this.emitSessionRequest(g) : (this.addSessionRequestToSessionRequestQueue(g), this.processSessionRequestQueue());
      } catch (p) {
        await this.sendError({ id: l, topic: o, error: p }), this.client.logger.error(p);
      }
    }), F(this, "onSessionRequestResponse", (r, i) => {
      const { id: s } = i, n = se("session_request", s);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      Ct(i) ? this.events.emit(se("session_request", s), { result: i.result }) : ct(i) && this.events.emit(se("session_request", s), { error: i.error });
    }), F(this, "onSessionEventRequest", async (r, i) => {
      const { id: s, params: n } = i;
      try {
        const o = `${r}_session_event_${n.event.name}`, a = ki.get(o);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(he({ topic: r }, n)), this.client.events.emit("session_event", { id: s, topic: r, params: n }), ki.set(o, s);
      } catch (o) {
        await this.sendError({ id: s, topic: r, error: o }), this.client.logger.error(o);
      }
    }), F(this, "onSessionAuthenticateResponse", (r, i) => {
      const { id: s } = i;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: r, payload: i }), Ct(i) ? this.events.emit(se("session_request", s), { result: i.result }) : ct(i) && this.events.emit(se("session_request", s), { error: i.error });
    }), F(this, "onSessionAuthenticateRequest", async (r) => {
      var i;
      const { topic: s, payload: n, attestation: o, encryptedId: a, transportType: c } = r;
      try {
        const { requester: h, authPayload: u, expiryTimestamp: l } = n.params, f = await this.getVerifyContext({ attestationId: o, hash: Rt(JSON.stringify(n)), encryptedId: a, metadata: h.metadata, transportType: c }), p = { requester: h, pairingTopic: s, id: n.id, authPayload: u, verifyContext: f, expiryTimestamp: l };
        await this.setAuthRequest(n.id, { request: p, pairingTopic: s, transportType: c }), c === ue.link_mode && (i = h.metadata.redirect) != null && i.universal && this.client.core.addLinkModeSupportedApp(h.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s, params: n.params, id: n.id, verifyContext: f });
      } catch (h) {
        this.client.logger.error(h);
        const u = n.params.requester.publicKey, l = await this.client.core.crypto.generateKeyPair(), f = this.getAppLinkIfEnabled(n.params.requester.metadata, c), p = { type: Kt, receiverPublicKey: u, senderPublicKey: l };
        await this.sendError({ id: n.id, topic: s, error: h, encodeOpts: p, rpcOpts: ve.wc_sessionAuthenticate.autoReject, appLink: f });
      }
    }), F(this, "addSessionRequestToSessionRequestQueue", (r) => {
      this.sessionRequestQueue.queue.push(r);
    }), F(this, "cleanupAfterResponse", (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = At.idle, this.processSessionRequestQueue();
      }, L.toMiliseconds(this.requestQueueDelay));
    }), F(this, "cleanupPendingSentRequestsForTopic", ({ topic: r, error: i }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((n) => n.topic === r && n.request.method === "wc_sessionRequest").forEach((n) => {
        const o = n.request.id, a = se("session_request", o);
        if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
        this.events.emit(se("session_request", n.request.id), { error: i });
      });
    }), F(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === At.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = At.active, this.emitSessionRequest(r);
      } catch (i) {
        this.client.logger.error(i);
      }
    }), F(this, "emitSessionRequest", (r) => {
      this.client.events.emit("session_request", r);
    }), F(this, "onPairingCreated", (r) => {
      if (r.methods && this.expectedPairingMethodMap.set(r.topic, r.methods), r.active) return;
      const i = this.client.proposal.getAll().find((s) => s.pairingTopic === r.topic);
      i && this.onSessionProposeRequest({ topic: r.topic, payload: fr("wc_sessionPropose", He(he({}, i), { requiredNamespaces: i.requiredNamespaces, optionalNamespaces: i.optionalNamespaces, relays: i.relays, proposer: i.proposer, sessionProperties: i.sessionProperties, scopedProperties: i.scopedProperties }), i.id), attestation: i.attestation, encryptedId: i.encryptedId });
    }), F(this, "isValidConnect", async (r) => {
      if (!Ke(r)) {
        const { message: h } = j("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(h);
      }
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: n, sessionProperties: o, scopedProperties: a, relays: c } = r;
      if (Oe(i) || await this.isValidPairingTopic(i), !E3(c)) {
        const { message: h } = j("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(h);
      }
      if (!Oe(s) && pr(s) !== 0) {
        const h = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
        ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(h) : this.client.logger.warn(h), this.validateNamespaces(s, "requiredNamespaces");
      }
      if (!Oe(n) && pr(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), Oe(o) || this.validateSessionProps(o, "sessionProperties"), !Oe(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const h = Object.keys(s || {}).concat(Object.keys(n || {}));
        if (!Object.keys(a).every((u) => h.includes(u))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(h)}`);
      }
    }), F(this, "validateNamespaces", (r, i) => {
      const s = v3(r, "connect()", i);
      if (s) throw new Error(s.message);
    }), F(this, "isValidApprove", async (r) => {
      if (!Ke(r)) throw new Error(j("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: s, relayProtocol: n, sessionProperties: o, scopedProperties: a } = r;
      this.checkRecentlyDeleted(i), await this.isValidProposalId(i);
      const c = this.client.proposal.get(i), h = go(s, "approve()");
      if (h) throw new Error(h.message);
      const u = su(c.requiredNamespaces, s, "approve()");
      if (u) throw new Error(u.message);
      if (!ge(n, !0)) {
        const { message: l } = j("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(l);
      }
      if (Oe(o) || this.validateSessionProps(o, "sessionProperties"), !Oe(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const l = new Set(Object.keys(s));
        if (!Object.keys(a).every((f) => l.has(f))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(l).join(", ")}`);
      }
    }), F(this, "isValidReject", async (r) => {
      if (!Ke(r)) {
        const { message: n } = j("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(n);
      }
      const { id: i, reason: s } = r;
      if (this.checkRecentlyDeleted(i), await this.isValidProposalId(i), !I3(s)) {
        const { message: n } = j("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(n);
      }
    }), F(this, "isValidSessionSettleRequest", (r) => {
      if (!Ke(r)) {
        const { message: h } = j("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: i, controller: s, namespaces: n, expiry: o } = r;
      if (!Kd(i)) {
        const { message: h } = j("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const a = p3(s, "onSessionSettleRequest()");
      if (a) throw new Error(a.message);
      const c = go(n, "onSessionSettleRequest()");
      if (c) throw new Error(c.message);
      if (or(o)) {
        const { message: h } = j("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }), F(this, "isValidUpdate", async (r) => {
      if (!Ke(r)) {
        const { message: c } = j("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(c);
      }
      const { topic: i, namespaces: s } = r;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      const n = this.client.session.get(i), o = go(s, "update()");
      if (o) throw new Error(o.message);
      const a = su(n.requiredNamespaces, s, "update()");
      if (a) throw new Error(a.message);
    }), F(this, "isValidExtend", async (r) => {
      if (!Ke(r)) {
        const { message: s } = j("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i } = r;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
    }), F(this, "isValidRequest", async (r) => {
      if (!Ke(r)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(c);
      }
      const { topic: i, request: s, chainId: n, expiry: o } = r;
      this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      const { namespaces: a } = this.client.session.get(i);
      if (!iu(a, n)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(c);
      }
      if (!x3(s)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(c);
      }
      if (!D3(a, n, s.method)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(c);
      }
      if (o && !C3(o, $o)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${$o.min} and ${$o.max}`);
        throw new Error(c);
      }
    }), F(this, "isValidRespond", async (r) => {
      var i;
      if (!Ke(r)) {
        const { message: o } = j("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(o);
      }
      const { topic: s, response: n } = r;
      try {
        await this.isValidSessionTopic(s);
      } catch (o) {
        throw (i = r == null ? void 0 : r.response) != null && i.id && this.cleanupAfterResponse(r), o;
      }
      if (!$3(n)) {
        const { message: o } = j("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(o);
      }
    }), F(this, "isValidPing", async (r) => {
      if (!Ke(r)) {
        const { message: s } = j("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }), F(this, "isValidEmit", async (r) => {
      if (!Ke(r)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: i, event: s, chainId: n } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: o } = this.client.session.get(i);
      if (!iu(o, n)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(a);
      }
      if (!S3(s)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
      if (!A3(o, n, s.name)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
    }), F(this, "isValidDisconnect", async (r) => {
      if (!Ke(r)) {
        const { message: s } = j("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }), F(this, "isValidAuthenticate", (r) => {
      const { chains: i, uri: s, domain: n, nonce: o } = r;
      if (!Array.isArray(i) || i.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!ge(s, !1)) throw new Error("uri is required parameter");
      if (!ge(n, !1)) throw new Error("domain is required parameter");
      if (!ge(o, !1)) throw new Error("nonce is required parameter");
      if ([...new Set(i.map((c) => gi(c).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: a } = gi(i[0]);
      if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), F(this, "getVerifyContext", async (r) => {
      const { attestationId: i, hash: s, encryptedId: n, metadata: o, transportType: a } = r, c = { verified: { verifyUrl: o.verifyUrl || rs, validation: "UNKNOWN", origin: o.url || "" } };
      try {
        if (a === ue.link_mode) {
          const u = this.getAppLinkIfEnabled(o, a);
          return c.verified.validation = u && new URL(u).origin === new URL(o.url).origin ? "VALID" : "INVALID", c;
        }
        const h = await this.client.core.verify.resolve({ attestationId: i, hash: s, encryptedId: n, verifyUrl: o.verifyUrl });
        h && (c.verified.origin = h.origin, c.verified.isScam = h.isScam, c.verified.validation = h.origin === new URL(o.url).origin ? "VALID" : "INVALID");
      } catch (h) {
        this.client.logger.warn(h);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`), c;
    }), F(this, "validateSessionProps", (r, i) => {
      Object.values(r).forEach((s, n) => {
        if (s == null) {
          const { message: o } = j("MISSING_OR_INVALID", `${i} must contain an existing value for each key. Received: ${s} for key ${Object.keys(r)[n]}`);
          throw new Error(o);
        }
      });
    }), F(this, "getPendingAuthRequest", (r) => {
      const i = this.client.auth.requests.get(r);
      return typeof i == "object" ? i : void 0;
    }), F(this, "addToRecentlyDeleted", (r, i) => {
      if (this.recentlyDeletedMap.set(r, i), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s = 0;
        const n = this.recentlyDeletedLimit / 2;
        for (const o of this.recentlyDeletedMap.keys()) {
          if (s++ >= n) break;
          this.recentlyDeletedMap.delete(o);
        }
      }
    }), F(this, "checkRecentlyDeleted", (r) => {
      const i = this.recentlyDeletedMap.get(r);
      if (i) {
        const { message: s } = j("MISSING_OR_INVALID", `Record was recently deleted - ${i}: ${r}`);
        throw new Error(s);
      }
    }), F(this, "isLinkModeEnabled", (r, i) => {
      var s, n, o, a, c, h, u, l, f;
      return !r || i !== ue.link_mode ? !1 : ((n = (s = this.client.metadata) == null ? void 0 : s.redirect) == null ? void 0 : n.linkMode) === !0 && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((h = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : h.universal) !== "" && ((u = r == null ? void 0 : r.redirect) == null ? void 0 : u.universal) !== void 0 && ((l = r == null ? void 0 : r.redirect) == null ? void 0 : l.universal) !== "" && ((f = r == null ? void 0 : r.redirect) == null ? void 0 : f.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(r.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), F(this, "getAppLinkIfEnabled", (r, i) => {
      var s;
      return this.isLinkModeEnabled(r, i) ? (s = r == null ? void 0 : r.redirect) == null ? void 0 : s.universal : void 0;
    }), F(this, "handleLinkModeMessage", ({ url: r }) => {
      if (!r || !r.includes("wc_ev") || !r.includes("topic")) return;
      const i = wh(r, "topic") || "", s = decodeURIComponent(wh(r, "wc_ev") || ""), n = this.client.session.keys.includes(i);
      n && this.client.session.update(i, { transportType: ue.link_mode }), this.client.core.dispatchEnvelope({ topic: i, message: s, sessionExists: n });
    }), F(this, "registerLinkModeListeners", async () => {
      var r;
      if (Ka() || yr() && (r = this.client.metadata.redirect) != null && r.linkMode) {
        const i = global == null ? void 0 : global.Linking;
        if (typeof i < "u") {
          i.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s = await i.getInitialURL();
          s && setTimeout(() => {
            this.handleLinkModeMessage({ url: s });
          }, 50);
        }
      }
    }), F(this, "getTVFParams", (r, i, s) => {
      var n, o, a;
      if (!((n = i.request) != null && n.method)) return {};
      const c = { correlationId: r, rpcMethods: [i.request.method], chainId: i.chainId };
      try {
        const h = this.extractTxHashesFromResult(i.request, s);
        c.txHashes = h, c.contractAddresses = this.isValidContractData(i.request.params) ? [(a = (o = i.request.params) == null ? void 0 : o[0]) == null ? void 0 : a.to] : [];
      } catch (h) {
        this.client.logger.warn("Error getting TVF params", h);
      }
      return c;
    }), F(this, "isValidContractData", (r) => {
      var i;
      if (!r) return !1;
      try {
        const s = (r == null ? void 0 : r.data) || ((i = r == null ? void 0 : r[0]) == null ? void 0 : i.data);
        if (!s.startsWith("0x")) return !1;
        const n = s.slice(2);
        return /^[0-9a-fA-F]*$/.test(n) ? n.length % 2 === 0 : !1;
      } catch {
      }
      return !1;
    }), F(this, "extractTxHashesFromResult", (r, i) => {
      var s;
      try {
        if (!i) return [];
        const n = r.method, o = JS[n];
        if (n === "sui_signTransaction") return [e2(i.transactionBytes)];
        if (n === "near_signTransaction") return [$h(i)];
        if (n === "near_signTransactions") return i.map((c) => $h(c));
        if (n === "xrpl_signTransactionFor" || n === "xrpl_signTransaction") return [(s = i.tx_json) == null ? void 0 : s.hash];
        if (n === "polkadot_signTransaction") return [K3({ transaction: r.params.transactionPayload, signature: i.signature })];
        if (n === "algo_signTxn") return lt(i) ? i.map((c) => Sh(c)) : [Sh(i)];
        if (n === "cosmos_signDirect") return [r2(i)];
        if (typeof i == "string") return [i];
        const a = i[o.key];
        if (lt(a)) return n === "solana_signAllTransactions" ? a.map((c) => Xv(c)) : a;
        if (typeof a == "string") return [a];
      } catch (n) {
        this.client.logger.warn("Error extracting tx hashes from result", n);
      }
      return [];
    });
  }
  async processPendingMessageEvents() {
    try {
      const e = this.client.session.keys, r = this.client.core.relayer.messages.getWithoutAck(e);
      for (const [i, s] of Object.entries(r)) for (const n of s) try {
        await this.onProviderMessageEvent({ topic: i, message: n, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${i}, message: ${n}`);
      }
    } catch (e) {
      this.client.logger.warn("processPendingMessageEvents failed", e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(_e.message, (e) => {
      this.onProviderMessageEvent(e);
    });
  }
  async onRelayMessage(e) {
    const { topic: r, message: i, attestation: s, transportType: n } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(sn) ? this.client.auth.authKeys.get(sn) : { publicKey: void 0 };
    try {
      const a = await this.client.core.crypto.decode(r, i, { receiverPublicKey: o, encoding: n === ue.link_mode ? ur : _t });
      cc(a) ? (this.client.core.history.set(r, a), await this.onRelayEventRequest({ topic: r, payload: a, attestation: s, transportType: n, encryptedId: Rt(i) })) : Ln(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({ topic: r, payload: a, transportType: n }), this.client.core.history.delete(r, a.id)) : await this.onRelayEventUnknownPayload({ topic: r, payload: a, transportType: n }), await this.client.core.relayer.messages.ack(r, i);
    } catch (a) {
      this.client.logger.error(a);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(at.expired, async (e) => {
      const { topic: r, id: i } = ed(e.target);
      if (i && this.client.pendingRequest.keys.includes(i)) return await this.deletePendingSessionRequest(i, j("EXPIRED"), !0);
      if (i && this.client.auth.requests.keys.includes(i)) return await this.deletePendingAuthRequest(i, j("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on($r.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on($r.delete, (e) => {
      this.addToRecentlyDeleted(e.topic, "pairing");
    });
  }
  isValidPairingTopic(e) {
    if (!ge(e, !1)) {
      const { message: r } = j("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = j("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (or(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = j("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!ge(e, !1)) {
      const { message: r } = j("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
      const { message: r } = j("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (or(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: r } = j("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: r } = j("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
    else if (ge(e, !1)) {
      const { message: r } = j("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = j("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!_3(e)) {
      const { message: r } = j("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = j("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (or(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = j("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class uD extends Mr {
  constructor(e, r) {
    super(e, r, WS, hc), this.core = e, this.logger = r;
  }
}
let lD = class extends Mr {
  constructor(e, r) {
    super(e, r, GS, hc), this.core = e, this.logger = r;
  }
};
class fD extends Mr {
  constructor(e, r) {
    super(e, r, ZS, hc, (i) => i.id), this.core = e, this.logger = r;
  }
}
class dD extends Mr {
  constructor(e, r) {
    super(e, r, tD, Mn, () => sn), this.core = e, this.logger = r;
  }
}
class pD extends Mr {
  constructor(e, r) {
    super(e, r, rD, Mn), this.core = e, this.logger = r;
  }
}
class gD extends Mr {
  constructor(e, r) {
    super(e, r, iD, Mn, (i) => i.id), this.core = e, this.logger = r;
  }
}
var yD = Object.defineProperty, wD = (t, e, r) => e in t ? yD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, So = (t, e, r) => wD(t, typeof e != "symbol" ? e + "" : e, r);
class mD {
  constructor(e, r) {
    this.core = e, this.logger = r, So(this, "authKeys"), So(this, "pairingTopics"), So(this, "requests"), this.authKeys = new dD(this.core, this.logger), this.pairingTopics = new pD(this.core, this.logger), this.requests = new gD(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
var bD = Object.defineProperty, vD = (t, e, r) => e in t ? bD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Z = (t, e, r) => vD(t, typeof e != "symbol" ? e + "" : e, r);
let ED = class $p extends EI {
  constructor(e) {
    super(e), Z(this, "protocol", _p), Z(this, "version", Ip), Z(this, "name", xo.name), Z(this, "metadata"), Z(this, "core"), Z(this, "logger"), Z(this, "events", new st.EventEmitter()), Z(this, "engine"), Z(this, "session"), Z(this, "proposal"), Z(this, "pendingRequest"), Z(this, "auth"), Z(this, "signConfig"), Z(this, "on", (i, s) => this.events.on(i, s)), Z(this, "once", (i, s) => this.events.once(i, s)), Z(this, "off", (i, s) => this.events.off(i, s)), Z(this, "removeListener", (i, s) => this.events.removeListener(i, s)), Z(this, "removeAllListeners", (i) => this.events.removeAllListeners(i)), Z(this, "connect", async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "pair", async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "approve", async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "reject", async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "update", async (i) => {
      try {
        return await this.engine.update(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "extend", async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "request", async (i) => {
      try {
        return await this.engine.request(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "respond", async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "ping", async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "emit", async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "disconnect", async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "find", (i) => {
      try {
        return this.engine.find(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), Z(this, "authenticate", async (i, s) => {
      try {
        return await this.engine.authenticate(i, s);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }), Z(this, "formatAuthMessage", (i) => {
      try {
        return this.engine.formatAuthMessage(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "approveSessionAuthenticate", async (i) => {
      try {
        return await this.engine.approveSessionAuthenticate(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), Z(this, "rejectSessionAuthenticate", async (i) => {
      try {
        return await this.engine.rejectSessionAuthenticate(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), this.name = (e == null ? void 0 : e.name) || xo.name, this.metadata = K1(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : _s(Nn({ level: (e == null ? void 0 : e.logger) || xo.logger }));
    this.core = (e == null ? void 0 : e.core) || new KS(e), this.logger = Me(r, this.name), this.session = new lD(this.core, this.logger), this.proposal = new uD(this.core, this.logger), this.pendingRequest = new fD(this.core, this.logger), this.engine = new hD(this), this.auth = new mD(this.core, this.logger);
  }
  static async init(e) {
    const r = new $p(e);
    return await r.initialize(), r;
  }
  get context() {
    return Ze(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), setTimeout(() => {
        this.engine.processRelayMessageCache();
      }, L.toMiliseconds(L.ONE_SECOND));
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
};
var Ea = { exports: {} };
(function(t, e) {
  var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof Tt < "u" && Tt, i = function() {
    function n() {
      this.fetch = !1, this.DOMException = r.DOMException;
    }
    return n.prototype = r, new n();
  }();
  (function(n) {
    (function(o) {
      var a = typeof n < "u" && n || typeof self < "u" && self || // eslint-disable-next-line no-undef
      typeof Tt < "u" && Tt || {}, c = {
        searchParams: "URLSearchParams" in a,
        iterable: "Symbol" in a && "iterator" in Symbol,
        blob: "FileReader" in a && "Blob" in a && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in a,
        arrayBuffer: "ArrayBuffer" in a
      };
      function h(y) {
        return y && DataView.prototype.isPrototypeOf(y);
      }
      if (c.arrayBuffer)
        var u = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], l = ArrayBuffer.isView || function(y) {
          return y && u.indexOf(Object.prototype.toString.call(y)) > -1;
        };
      function f(y) {
        if (typeof y != "string" && (y = String(y)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(y) || y === "")
          throw new TypeError('Invalid character in header field name: "' + y + '"');
        return y.toLowerCase();
      }
      function p(y) {
        return typeof y != "string" && (y = String(y)), y;
      }
      function d(y) {
        var w = {
          next: function() {
            var v = y.shift();
            return { done: v === void 0, value: v };
          }
        };
        return c.iterable && (w[Symbol.iterator] = function() {
          return w;
        }), w;
      }
      function g(y) {
        this.map = {}, y instanceof g ? y.forEach(function(w, v) {
          this.append(v, w);
        }, this) : Array.isArray(y) ? y.forEach(function(w) {
          if (w.length != 2)
            throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + w.length);
          this.append(w[0], w[1]);
        }, this) : y && Object.getOwnPropertyNames(y).forEach(function(w) {
          this.append(w, y[w]);
        }, this);
      }
      g.prototype.append = function(y, w) {
        y = f(y), w = p(w);
        var v = this.map[y];
        this.map[y] = v ? v + ", " + w : w;
      }, g.prototype.delete = function(y) {
        delete this.map[f(y)];
      }, g.prototype.get = function(y) {
        return y = f(y), this.has(y) ? this.map[y] : null;
      }, g.prototype.has = function(y) {
        return this.map.hasOwnProperty(f(y));
      }, g.prototype.set = function(y, w) {
        this.map[f(y)] = p(w);
      }, g.prototype.forEach = function(y, w) {
        for (var v in this.map)
          this.map.hasOwnProperty(v) && y.call(w, this.map[v], v, this);
      }, g.prototype.keys = function() {
        var y = [];
        return this.forEach(function(w, v) {
          y.push(v);
        }), d(y);
      }, g.prototype.values = function() {
        var y = [];
        return this.forEach(function(w) {
          y.push(w);
        }), d(y);
      }, g.prototype.entries = function() {
        var y = [];
        return this.forEach(function(w, v) {
          y.push([v, w]);
        }), d(y);
      }, c.iterable && (g.prototype[Symbol.iterator] = g.prototype.entries);
      function m(y) {
        if (!y._noBody) {
          if (y.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          y.bodyUsed = !0;
        }
      }
      function _(y) {
        return new Promise(function(w, v) {
          y.onload = function() {
            w(y.result);
          }, y.onerror = function() {
            v(y.error);
          };
        });
      }
      function I(y) {
        var w = new FileReader(), v = _(w);
        return w.readAsArrayBuffer(y), v;
      }
      function E(y) {
        var w = new FileReader(), v = _(w), $ = /charset=([A-Za-z0-9_-]+)/.exec(y.type), x = $ ? $[1] : "utf-8";
        return w.readAsText(y, x), v;
      }
      function P(y) {
        for (var w = new Uint8Array(y), v = new Array(w.length), $ = 0; $ < w.length; $++)
          v[$] = String.fromCharCode(w[$]);
        return v.join("");
      }
      function A(y) {
        if (y.slice)
          return y.slice(0);
        var w = new Uint8Array(y.byteLength);
        return w.set(new Uint8Array(y)), w.buffer;
      }
      function k() {
        return this.bodyUsed = !1, this._initBody = function(y) {
          this.bodyUsed = this.bodyUsed, this._bodyInit = y, y ? typeof y == "string" ? this._bodyText = y : c.blob && Blob.prototype.isPrototypeOf(y) ? this._bodyBlob = y : c.formData && FormData.prototype.isPrototypeOf(y) ? this._bodyFormData = y : c.searchParams && URLSearchParams.prototype.isPrototypeOf(y) ? this._bodyText = y.toString() : c.arrayBuffer && c.blob && h(y) ? (this._bodyArrayBuffer = A(y.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(y) || l(y)) ? this._bodyArrayBuffer = A(y) : this._bodyText = y = Object.prototype.toString.call(y) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof y == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : c.searchParams && URLSearchParams.prototype.isPrototypeOf(y) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, c.blob && (this.blob = function() {
          var y = m(this);
          if (y)
            return y;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }), this.arrayBuffer = function() {
          if (this._bodyArrayBuffer) {
            var y = m(this);
            return y || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
              this._bodyArrayBuffer.buffer.slice(
                this._bodyArrayBuffer.byteOffset,
                this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
              )
            ) : Promise.resolve(this._bodyArrayBuffer));
          } else {
            if (c.blob)
              return this.blob().then(I);
            throw new Error("could not read as ArrayBuffer");
          }
        }, this.text = function() {
          var y = m(this);
          if (y)
            return y;
          if (this._bodyBlob)
            return E(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(P(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, c.formData && (this.formData = function() {
          return this.text().then(C);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var U = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
      function R(y) {
        var w = y.toUpperCase();
        return U.indexOf(w) > -1 ? w : y;
      }
      function b(y, w) {
        if (!(this instanceof b))
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        w = w || {};
        var v = w.body;
        if (y instanceof b) {
          if (y.bodyUsed)
            throw new TypeError("Already read");
          this.url = y.url, this.credentials = y.credentials, w.headers || (this.headers = new g(y.headers)), this.method = y.method, this.mode = y.mode, this.signal = y.signal, !v && y._bodyInit != null && (v = y._bodyInit, y.bodyUsed = !0);
        } else
          this.url = String(y);
        if (this.credentials = w.credentials || this.credentials || "same-origin", (w.headers || !this.headers) && (this.headers = new g(w.headers)), this.method = R(w.method || this.method || "GET"), this.mode = w.mode || this.mode || null, this.signal = w.signal || this.signal || function() {
          if ("AbortController" in a) {
            var O = new AbortController();
            return O.signal;
          }
        }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && v)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(v), (this.method === "GET" || this.method === "HEAD") && (w.cache === "no-store" || w.cache === "no-cache")) {
          var $ = /([?&])_=[^&]*/;
          if ($.test(this.url))
            this.url = this.url.replace($, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
          else {
            var x = /\?/;
            this.url += (x.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
          }
        }
      }
      b.prototype.clone = function() {
        return new b(this, { body: this._bodyInit });
      };
      function C(y) {
        var w = new FormData();
        return y.trim().split("&").forEach(function(v) {
          if (v) {
            var $ = v.split("="), x = $.shift().replace(/\+/g, " "), O = $.join("=").replace(/\+/g, " ");
            w.append(decodeURIComponent(x), decodeURIComponent(O));
          }
        }), w;
      }
      function S(y) {
        var w = new g(), v = y.replace(/\r?\n[\t ]+/g, " ");
        return v.split("\r").map(function($) {
          return $.indexOf(`
`) === 0 ? $.substr(1, $.length) : $;
        }).forEach(function($) {
          var x = $.split(":"), O = x.shift().trim();
          if (O) {
            var B = x.join(":").trim();
            try {
              w.append(O, B);
            } catch (q) {
              console.warn("Response " + q.message);
            }
          }
        }), w;
      }
      k.call(b.prototype);
      function D(y, w) {
        if (!(this instanceof D))
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        if (w || (w = {}), this.type = "default", this.status = w.status === void 0 ? 200 : w.status, this.status < 200 || this.status > 599)
          throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        this.ok = this.status >= 200 && this.status < 300, this.statusText = w.statusText === void 0 ? "" : "" + w.statusText, this.headers = new g(w.headers), this.url = w.url || "", this._initBody(y);
      }
      k.call(D.prototype), D.prototype.clone = function() {
        return new D(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new g(this.headers),
          url: this.url
        });
      }, D.error = function() {
        var y = new D(null, { status: 200, statusText: "" });
        return y.ok = !1, y.status = 0, y.type = "error", y;
      };
      var T = [301, 302, 303, 307, 308];
      D.redirect = function(y, w) {
        if (T.indexOf(w) === -1)
          throw new RangeError("Invalid status code");
        return new D(null, { status: w, headers: { location: y } });
      }, o.DOMException = a.DOMException;
      try {
        new o.DOMException();
      } catch {
        o.DOMException = function(w, v) {
          this.message = w, this.name = v;
          var $ = Error(w);
          this.stack = $.stack;
        }, o.DOMException.prototype = Object.create(Error.prototype), o.DOMException.prototype.constructor = o.DOMException;
      }
      function N(y, w) {
        return new Promise(function(v, $) {
          var x = new b(y, w);
          if (x.signal && x.signal.aborted)
            return $(new o.DOMException("Aborted", "AbortError"));
          var O = new XMLHttpRequest();
          function B() {
            O.abort();
          }
          O.onload = function() {
            var M = {
              statusText: O.statusText,
              headers: S(O.getAllResponseHeaders() || "")
            };
            x.url.indexOf("file://") === 0 && (O.status < 200 || O.status > 599) ? M.status = 200 : M.status = O.status, M.url = "responseURL" in O ? O.responseURL : M.headers.get("X-Request-URL");
            var V = "response" in O ? O.response : O.responseText;
            setTimeout(function() {
              v(new D(V, M));
            }, 0);
          }, O.onerror = function() {
            setTimeout(function() {
              $(new TypeError("Network request failed"));
            }, 0);
          }, O.ontimeout = function() {
            setTimeout(function() {
              $(new TypeError("Network request timed out"));
            }, 0);
          }, O.onabort = function() {
            setTimeout(function() {
              $(new o.DOMException("Aborted", "AbortError"));
            }, 0);
          };
          function q(M) {
            try {
              return M === "" && a.location.href ? a.location.href : M;
            } catch {
              return M;
            }
          }
          if (O.open(x.method, q(x.url), !0), x.credentials === "include" ? O.withCredentials = !0 : x.credentials === "omit" && (O.withCredentials = !1), "responseType" in O && (c.blob ? O.responseType = "blob" : c.arrayBuffer && (O.responseType = "arraybuffer")), w && typeof w.headers == "object" && !(w.headers instanceof g || a.Headers && w.headers instanceof a.Headers)) {
            var H = [];
            Object.getOwnPropertyNames(w.headers).forEach(function(M) {
              H.push(f(M)), O.setRequestHeader(M, p(w.headers[M]));
            }), x.headers.forEach(function(M, V) {
              H.indexOf(V) === -1 && O.setRequestHeader(V, M);
            });
          } else
            x.headers.forEach(function(M, V) {
              O.setRequestHeader(V, M);
            });
          x.signal && (x.signal.addEventListener("abort", B), O.onreadystatechange = function() {
            O.readyState === 4 && x.signal.removeEventListener("abort", B);
          }), O.send(typeof x._bodyInit > "u" ? null : x._bodyInit);
        });
      }
      return N.polyfill = !0, a.fetch || (a.fetch = N, a.Headers = g, a.Request = b, a.Response = D), o.Headers = g, o.Request = b, o.Response = D, o.fetch = N, Object.defineProperty(o, "__esModule", { value: !0 }), o;
    })({});
  })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
  var s = r.fetch ? r : i;
  e = s.fetch, e.default = s.fetch, e.fetch = s.fetch, e.Headers = s.Headers, e.Request = s.Request, e.Response = s.Response, t.exports = e;
})(Ea, Ea.exports);
var _D = Ea.exports;
const Qu = /* @__PURE__ */ Aa(_D);
var ID = Object.defineProperty, xD = Object.defineProperties, $D = Object.getOwnPropertyDescriptors, Xu = Object.getOwnPropertySymbols, SD = Object.prototype.hasOwnProperty, DD = Object.prototype.propertyIsEnumerable, el = (t, e, r) => e in t ? ID(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, tl = (t, e) => {
  for (var r in e || (e = {})) SD.call(e, r) && el(t, r, e[r]);
  if (Xu) for (var r of Xu(e)) DD.call(e, r) && el(t, r, e[r]);
  return t;
}, rl = (t, e) => xD(t, $D(e));
const AD = { Accept: "application/json", "Content-Type": "application/json" }, OD = "POST", il = { headers: AD, method: OD }, sl = 10;
let xt = class {
  constructor(e, r = !1) {
    if (this.url = e, this.disableProviderPing = r, this.events = new st.EventEmitter(), this.isAvailable = !1, this.registering = !1, !Eu(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    this.url = e, this.disableProviderPing = r;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e) {
    this.isAvailable || await this.register();
    try {
      const r = Wt(e), i = await (await Qu(this.url, rl(tl({}, il), { body: r }))).json();
      this.onPayload({ data: i });
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  async register(e = this.url) {
    if (!Eu(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((i, s) => {
        this.events.once("register_error", (n) => {
          this.resetMaxListeners(), s(n);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return s(new Error("HTTP connection is missing or invalid"));
          i();
        });
      });
    }
    this.url = e, this.registering = !0;
    try {
      if (!this.disableProviderPing) {
        const r = Wt({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await Qu(e, rl(tl({}, il), { body: r }));
      }
      this.onOpen();
    } catch (r) {
      const i = this.parseError(r);
      throw this.events.emit("register_error", i), this.onClose(), i;
    }
  }
  onOpen() {
    this.isAvailable = !0, this.registering = !1, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = !1, this.registering = !1, this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const r = typeof e.data == "string" ? Br(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const i = this.parseError(r), s = i.message || i.toString(), n = kn(e, s);
    this.events.emit("payload", n);
  }
  parseError(e, r = this.url) {
    return ep(e, r, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > sl && this.events.setMaxListeners(sl);
  }
};
const nl = "error", PD = "wss://relay.walletconnect.org", CD = "wc", TD = "universal_provider", Hs = `${CD}@2:${TD}:`, Sp = "https://rpc.walletconnect.org/v1/", li = "generic", RD = `${Sp}bundler`, gt = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
function uc(t) {
  return t == null || typeof t != "object" && typeof t != "function";
}
function Dp(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function Ap(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const BD = "[object RegExp]", Op = "[object String]", Pp = "[object Number]", Cp = "[object Boolean]", Tp = "[object Arguments]", FD = "[object Symbol]", ND = "[object Date]", UD = "[object Map]", kD = "[object Set]", LD = "[object Array]", jD = "[object ArrayBuffer]", MD = "[object Object]", qD = "[object DataView]", zD = "[object Uint8Array]", HD = "[object Uint8ClampedArray]", VD = "[object Uint16Array]", KD = "[object Uint32Array]", WD = "[object Int8Array]", GD = "[object Int16Array]", YD = "[object Int32Array]", JD = "[object Float32Array]", ZD = "[object Float64Array]";
function lc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function QD(t, e) {
  return di(t, void 0, t, /* @__PURE__ */ new Map(), e);
}
function di(t, e, r, i = /* @__PURE__ */ new Map(), s = void 0) {
  const n = s == null ? void 0 : s(t, e, r, i);
  if (n != null) return n;
  if (uc(t)) return t;
  if (i.has(t)) return i.get(t);
  if (Array.isArray(t)) {
    const o = new Array(t.length);
    i.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = di(t[a], a, r, i, s);
    return Object.hasOwn(t, "index") && (o.index = t.index), Object.hasOwn(t, "input") && (o.input = t.input), o;
  }
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) {
    const o = new RegExp(t.source, t.flags);
    return o.lastIndex = t.lastIndex, o;
  }
  if (t instanceof Map) {
    const o = /* @__PURE__ */ new Map();
    i.set(t, o);
    for (const [a, c] of t) o.set(a, di(c, a, r, i, s));
    return o;
  }
  if (t instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    i.set(t, o);
    for (const a of t) o.add(di(a, void 0, r, i, s));
    return o;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
  if (lc(t)) {
    const o = new (Object.getPrototypeOf(t)).constructor(t.length);
    i.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = di(t[a], a, r, i, s);
    return o;
  }
  if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  if (t instanceof DataView) {
    const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
    return i.set(t, o), Sr(o, t, r, i, s), o;
  }
  if (typeof File < "u" && t instanceof File) {
    const o = new File([t], t.name, { type: t.type });
    return i.set(t, o), Sr(o, t, r, i, s), o;
  }
  if (t instanceof Blob) {
    const o = new Blob([t], { type: t.type });
    return i.set(t, o), Sr(o, t, r, i, s), o;
  }
  if (t instanceof Error) {
    const o = new t.constructor();
    return i.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, Sr(o, t, r, i, s), o;
  }
  if (typeof t == "object" && XD(t)) {
    const o = Object.create(Object.getPrototypeOf(t));
    return i.set(t, o), Sr(o, t, r, i, s), o;
  }
  return t;
}
function Sr(t, e, r = t, i, s) {
  const n = [...Object.keys(e), ...Dp(e)];
  for (let o = 0; o < n.length; o++) {
    const a = n[o], c = Object.getOwnPropertyDescriptor(t, a);
    (c == null || c.writable) && (t[a] = di(e[a], a, r, i, s));
  }
}
function XD(t) {
  switch (Ap(t)) {
    case Tp:
    case LD:
    case jD:
    case qD:
    case Cp:
    case ND:
    case JD:
    case ZD:
    case WD:
    case GD:
    case YD:
    case UD:
    case Pp:
    case MD:
    case BD:
    case kD:
    case Op:
    case FD:
    case zD:
    case HD:
    case VD:
    case KD:
      return !0;
    default:
      return !1;
  }
}
function eA(t, e) {
  return QD(t, (r, i, s, n) => {
    if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
      case Pp:
      case Op:
      case Cp: {
        const o = new t.constructor(t == null ? void 0 : t.valueOf());
        return Sr(o, t), o;
      }
      case Tp: {
        const o = {};
        return Sr(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
      }
      default:
        return;
    }
  });
}
function ol(t) {
  return eA(t);
}
function al(t) {
  return t !== null && typeof t == "object" && Ap(t) === "[object Arguments]";
}
function cl(t) {
  return typeof t == "object" && t !== null;
}
function tA() {
}
function rA(t) {
  return lc(t);
}
function iA(t) {
  var r;
  if (typeof t != "object" || t == null) return !1;
  if (Object.getPrototypeOf(t) === null) return !0;
  if (Object.prototype.toString.call(t) !== "[object Object]") {
    const i = t[Symbol.toStringTag];
    return i == null || !((r = Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)) != null && r.writable) ? !1 : t.toString() === `[object ${i}]`;
  }
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function sA(t) {
  if (uc(t)) return t;
  if (Array.isArray(t) || lc(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  const e = Object.getPrototypeOf(t), r = e.constructor;
  if (t instanceof Date || t instanceof Map || t instanceof Set) return new r(t);
  if (t instanceof RegExp) {
    const i = new r(t);
    return i.lastIndex = t.lastIndex, i;
  }
  if (t instanceof DataView) return new r(t.buffer.slice(0));
  if (t instanceof Error) {
    const i = new r(t.message);
    return i.stack = t.stack, i.name = t.name, i.cause = t.cause, i;
  }
  if (typeof File < "u" && t instanceof File) return new r([t], t.name, { type: t.type, lastModified: t.lastModified });
  if (typeof t == "object") {
    const i = Object.create(e);
    return Object.assign(i, t);
  }
  return t;
}
function nA(t, ...e) {
  const r = e.slice(0, -1), i = e[e.length - 1];
  let s = t;
  for (let n = 0; n < r.length; n++) {
    const o = r[n];
    s = _a(s, o, i, /* @__PURE__ */ new Map());
  }
  return s;
}
function _a(t, e, r, i) {
  if (uc(t) && (t = Object(t)), e == null || typeof e != "object") return t;
  if (i.has(e)) return sA(i.get(e));
  if (i.set(e, t), Array.isArray(e)) {
    e = e.slice();
    for (let n = 0; n < e.length; n++) e[n] = e[n] ?? void 0;
  }
  const s = [...Object.keys(e), ...Dp(e)];
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    let a = e[o], c = t[o];
    if (al(a) && (a = { ...a }), al(c) && (c = { ...c }), typeof Buffer < "u" && Buffer.isBuffer(a) && (a = ol(a)), Array.isArray(a)) if (typeof c == "object" && c != null) {
      const u = [], l = Reflect.ownKeys(c);
      for (let f = 0; f < l.length; f++) {
        const p = l[f];
        u[p] = c[p];
      }
      c = u;
    } else c = [];
    const h = r(c, a, o, t, e, i);
    h != null ? t[o] = h : Array.isArray(a) || cl(c) && cl(a) ? t[o] = _a(c, a, r, i) : c == null && iA(a) ? t[o] = _a({}, a, r, i) : c == null && rA(a) ? t[o] = ol(a) : (c === void 0 || a !== void 0) && (t[o] = a);
  }
  return t;
}
function oA(t, ...e) {
  return nA(t, ...e, tA);
}
var aA = Object.defineProperty, cA = Object.defineProperties, hA = Object.getOwnPropertyDescriptors, hl = Object.getOwnPropertySymbols, uA = Object.prototype.hasOwnProperty, lA = Object.prototype.propertyIsEnumerable, ul = (t, e, r) => e in t ? aA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Vs = (t, e) => {
  for (var r in e || (e = {})) uA.call(e, r) && ul(t, r, e[r]);
  if (hl) for (var r of hl(e)) lA.call(e, r) && ul(t, r, e[r]);
  return t;
}, fA = (t, e) => cA(t, hA(e));
function it(t, e, r) {
  var i;
  const s = gi(t);
  return ((i = e.rpcMap) == null ? void 0 : i[s.reference]) || `${Sp}?chainId=${s.namespace}:${s.reference}&projectId=${r}`;
}
function qr(t) {
  return t.includes(":") ? t.split(":")[1] : t;
}
function Rp(t) {
  return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function dA(t, e) {
  const r = Object.keys(e.namespaces).filter((s) => s.includes(t));
  if (!r.length) return [];
  const i = [];
  return r.forEach((s) => {
    const n = e.namespaces[s].accounts;
    i.push(...n);
  }), i;
}
function Ks(t = {}, e = {}) {
  const r = ll(t), i = ll(e);
  return oA(r, i);
}
function ll(t) {
  var e, r, i, s, n;
  const o = {};
  if (!pr(t)) return o;
  for (const [a, c] of Object.entries(t)) {
    const h = Bn(a) ? [a] : c.chains, u = c.methods || [], l = c.events || [], f = c.rpcMap || {}, p = fi(a);
    o[p] = fA(Vs(Vs({}, o[p]), c), { chains: Bt(h, (e = o[p]) == null ? void 0 : e.chains), methods: Bt(u, (r = o[p]) == null ? void 0 : r.methods), events: Bt(l, (i = o[p]) == null ? void 0 : i.events) }), (pr(f) || pr(((s = o[p]) == null ? void 0 : s.rpcMap) || {})) && (o[p].rpcMap = Vs(Vs({}, f), (n = o[p]) == null ? void 0 : n.rpcMap));
  }
  return o;
}
function fl(t) {
  return t.includes(":") ? t.split(":")[2] : t;
}
function dl(t) {
  const e = {};
  for (const [r, i] of Object.entries(t)) {
    const s = i.methods || [], n = i.events || [], o = i.accounts || [], a = Bn(r) ? [r] : i.chains ? i.chains : Rp(i.accounts);
    e[r] = { chains: a, methods: s, events: n, accounts: o };
  }
  return e;
}
function Do(t) {
  return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
}
const Bp = {}, te = (t) => Bp[t], Ao = (t, e) => {
  Bp[t] = e;
};
var pA = Object.defineProperty, gA = (t, e, r) => e in t ? pA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Xr = (t, e, r) => gA(t, typeof e != "symbol" ? e + "" : e, r);
class yA {
  constructor(e) {
    Xr(this, "name", "polkadot"), Xr(this, "client"), Xr(this, "httpProviders"), Xr(this, "events"), Xr(this, "namespace"), Xr(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, r) {
    this.httpProviders[e] || this.setHttpProvider(e, r), this.chainId = e, this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      var i;
      const s = qr(r);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[r]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || it(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new pt(new xt(i, te("disableProviderPing")));
  }
}
var wA = Object.defineProperty, mA = Object.defineProperties, bA = Object.getOwnPropertyDescriptors, pl = Object.getOwnPropertySymbols, vA = Object.prototype.hasOwnProperty, EA = Object.prototype.propertyIsEnumerable, Ia = (t, e, r) => e in t ? wA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, gl = (t, e) => {
  for (var r in e || (e = {})) vA.call(e, r) && Ia(t, r, e[r]);
  if (pl) for (var r of pl(e)) EA.call(e, r) && Ia(t, r, e[r]);
  return t;
}, yl = (t, e) => mA(t, bA(e)), ei = (t, e, r) => Ia(t, typeof e != "symbol" ? e + "" : e, r);
class _A {
  constructor(e) {
    ei(this, "name", "eip155"), ei(this, "client"), ei(this, "chainId"), ei(this, "namespace"), ei(this, "httpProviders"), ei(this, "events"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(e);
    }
    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, r) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), r), this.chainId = parseInt(e), this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, r) {
    const i = r || it(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new pt(new xt(i, te("disableProviderPing")));
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      var i;
      const s = parseInt(qr(r));
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[r]);
    }), e;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const e = this.chainId, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  async handleSwitchChain(e) {
    var r, i;
    let s = e.request.params ? (r = e.request.params[0]) == null ? void 0 : r.chainId : "0x0";
    s = s.startsWith("0x") ? s : `0x${s}`;
    const n = parseInt(s, 16);
    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e.topic, request: { method: e.request.method, params: [{ chainId: s }] }, chainId: (i = this.namespace.chains) == null ? void 0 : i[0] }), this.setDefaultChain(`${n}`);
    else throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
  async getCapabilities(e) {
    var r, i, s, n, o;
    const a = (i = (r = e.request) == null ? void 0 : r.params) == null ? void 0 : i[0], c = ((n = (s = e.request) == null ? void 0 : s.params) == null ? void 0 : n[1]) || [], h = `${a}${c.join(",")}`;
    if (!a) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const u = this.client.session.get(e.topic), l = ((o = u == null ? void 0 : u.sessionProperties) == null ? void 0 : o.capabilities) || {};
    if (l != null && l[h]) return l == null ? void 0 : l[h];
    const f = await this.client.request(e);
    try {
      await this.client.session.update(e.topic, { sessionProperties: yl(gl({}, u.sessionProperties || {}), { capabilities: yl(gl({}, l || {}), { [h]: f }) }) });
    } catch (p) {
      console.warn("Failed to update session with capabilities", p);
    }
    return f;
  }
  async getCallStatus(e) {
    var r, i;
    const s = this.client.session.get(e.topic), n = (r = s.sessionProperties) == null ? void 0 : r.bundler_name;
    if (n) {
      const a = this.getBundlerUrl(e.chainId, n);
      try {
        return await this.getUserOperationReceipt(a, e);
      } catch (c) {
        console.warn("Failed to fetch call status from bundler", c, a);
      }
    }
    const o = (i = s.sessionProperties) == null ? void 0 : i.bundler_url;
    if (o) try {
      return await this.getUserOperationReceipt(o, e);
    } catch (a) {
      console.warn("Failed to fetch call status from custom bundler", a, o);
    }
    if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e, r) {
    var i;
    const s = new URL(e), n = await fetch(s, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(fr("eth_getUserOperationReceipt", [(i = r.request.params) == null ? void 0 : i[0]])) });
    if (!n.ok) throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
    return await n.json();
  }
  getBundlerUrl(e, r) {
    return `${RD}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${r}`;
  }
}
var IA = Object.defineProperty, xA = (t, e, r) => e in t ? IA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ti = (t, e, r) => xA(t, typeof e != "symbol" ? e + "" : e, r);
class $A {
  constructor(e) {
    ti(this, "name", "solana"), ti(this, "client"), ti(this, "httpProviders"), ti(this, "events"), ti(this, "namespace"), ti(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, r) {
    this.httpProviders[e] || this.setHttpProvider(e, r), this.chainId = e, this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      var i;
      const s = qr(r);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[r]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || it(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new pt(new xt(i, te("disableProviderPing")));
  }
}
var SA = Object.defineProperty, DA = (t, e, r) => e in t ? SA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ri = (t, e, r) => DA(t, typeof e != "symbol" ? e + "" : e, r);
class AA {
  constructor(e) {
    ri(this, "name", "cosmos"), ri(this, "client"), ri(this, "httpProviders"), ri(this, "events"), ri(this, "namespace"), ri(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, r) {
    this.httpProviders[e] || this.setHttpProvider(e, r), this.chainId = e, this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      var i;
      const s = qr(r);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[r]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || it(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new pt(new xt(i, te("disableProviderPing")));
  }
}
var OA = Object.defineProperty, PA = (t, e, r) => e in t ? OA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ii = (t, e, r) => PA(t, typeof e != "symbol" ? e + "" : e, r);
class CA {
  constructor(e) {
    ii(this, "name", "algorand"), ii(this, "client"), ii(this, "httpProviders"), ii(this, "events"), ii(this, "namespace"), ii(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, r) {
    if (!this.httpProviders[e]) {
      const i = r || it(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.chainId = e, this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      var i;
      e[r] = this.createHttpProvider(r, (i = this.namespace.rpcMap) == null ? void 0 : i[r]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || it(e, this.namespace, this.client.core.projectId);
    return typeof i > "u" ? void 0 : new pt(new xt(i, te("disableProviderPing")));
  }
}
var TA = Object.defineProperty, RA = (t, e, r) => e in t ? TA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, si = (t, e, r) => RA(t, typeof e != "symbol" ? e + "" : e, r);
class BA {
  constructor(e) {
    si(this, "name", "cip34"), si(this, "client"), si(this, "httpProviders"), si(this, "events"), si(this, "namespace"), si(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, r) {
    this.httpProviders[e] || this.setHttpProvider(e, r), this.chainId = e, this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      const i = this.getCardanoRPCUrl(r), s = qr(r);
      e[s] = this.createHttpProvider(s, i);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  getCardanoRPCUrl(e) {
    const r = this.namespace.rpcMap;
    if (r) return r[e];
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || this.getCardanoRPCUrl(e);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new pt(new xt(i, te("disableProviderPing")));
  }
}
var FA = Object.defineProperty, NA = (t, e, r) => e in t ? FA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ni = (t, e, r) => NA(t, typeof e != "symbol" ? e + "" : e, r);
class UA {
  constructor(e) {
    ni(this, "name", "elrond"), ni(this, "client"), ni(this, "httpProviders"), ni(this, "events"), ni(this, "namespace"), ni(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, r) {
    this.httpProviders[e] || this.setHttpProvider(e, r), this.chainId = e, this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      var i;
      const s = qr(r);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[r]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || it(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new pt(new xt(i, te("disableProviderPing")));
  }
}
var kA = Object.defineProperty, LA = (t, e, r) => e in t ? kA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, oi = (t, e, r) => LA(t, typeof e != "symbol" ? e + "" : e, r);
class jA {
  constructor(e) {
    oi(this, "name", "multiversx"), oi(this, "client"), oi(this, "httpProviders"), oi(this, "events"), oi(this, "namespace"), oi(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, r) {
    this.httpProviders[e] || this.setHttpProvider(e, r), this.chainId = e, this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      var i;
      const s = qr(r);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[r]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || it(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new pt(new xt(i, te("disableProviderPing")));
  }
}
var MA = Object.defineProperty, qA = (t, e, r) => e in t ? MA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ai = (t, e, r) => qA(t, typeof e != "symbol" ? e + "" : e, r);
class zA {
  constructor(e) {
    ai(this, "name", "near"), ai(this, "client"), ai(this, "httpProviders"), ai(this, "events"), ai(this, "namespace"), ai(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, r) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const i = r || it(`${this.name}:${e}`, this.namespace);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      var i;
      e[r] = this.createHttpProvider(r, (i = this.namespace.rpcMap) == null ? void 0 : i[r]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || it(e, this.namespace);
    return typeof i > "u" ? void 0 : new pt(new xt(i, te("disableProviderPing")));
  }
}
var HA = Object.defineProperty, VA = (t, e, r) => e in t ? HA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ci = (t, e, r) => VA(t, typeof e != "symbol" ? e + "" : e, r);
class KA {
  constructor(e) {
    ci(this, "name", "tezos"), ci(this, "client"), ci(this, "httpProviders"), ci(this, "events"), ci(this, "namespace"), ci(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, r) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const i = r || it(`${this.name}:${e}`, this.namespace);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((r) => {
      e[r] = this.createHttpProvider(r);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || it(e, this.namespace);
    return typeof i > "u" ? void 0 : new pt(new xt(i));
  }
}
var WA = Object.defineProperty, GA = (t, e, r) => e in t ? WA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, hi = (t, e, r) => GA(t, typeof e != "symbol" ? e + "" : e, r);
class YA {
  constructor(e) {
    hi(this, "name", li), hi(this, "client"), hi(this, "httpProviders"), hi(this, "events"), hi(this, "namespace"), hi(this, "chainId"), this.namespace = e.namespace, this.events = te("events"), this.client = te("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request);
  }
  setDefaultChain(e, r) {
    this.httpProviders[e] || this.setHttpProvider(e, r), this.chainId = e, this.events.emit(gt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var e, r;
    const i = {};
    return (r = (e = this.namespace) == null ? void 0 : e.accounts) == null || r.forEach((s) => {
      const n = gi(s);
      i[`${n.namespace}:${n.reference}`] = this.createHttpProvider(s);
    }), i;
  }
  getHttpProvider(e) {
    const r = this.httpProviders[e];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return r;
  }
  setHttpProvider(e, r) {
    const i = this.createHttpProvider(e, r);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, r) {
    const i = r || it(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new pt(new xt(i, te("disableProviderPing")));
  }
}
var JA = Object.defineProperty, ZA = Object.defineProperties, QA = Object.getOwnPropertyDescriptors, wl = Object.getOwnPropertySymbols, XA = Object.prototype.hasOwnProperty, eO = Object.prototype.propertyIsEnumerable, xa = (t, e, r) => e in t ? JA(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ws = (t, e) => {
  for (var r in e || (e = {})) XA.call(e, r) && xa(t, r, e[r]);
  if (wl) for (var r of wl(e)) eO.call(e, r) && xa(t, r, e[r]);
  return t;
}, Oo = (t, e) => ZA(t, QA(e)), ot = (t, e, r) => xa(t, typeof e != "symbol" ? e + "" : e, r);
let tO = class Fp {
  constructor(e) {
    ot(this, "client"), ot(this, "namespaces"), ot(this, "optionalNamespaces"), ot(this, "sessionProperties"), ot(this, "scopedProperties"), ot(this, "events", new Pa()), ot(this, "rpcProviders", {}), ot(this, "session"), ot(this, "providerOpts"), ot(this, "logger"), ot(this, "uri"), ot(this, "disableProviderPing", !1), this.providerOpts = e, this.logger = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : _s(Nn({ level: (e == null ? void 0 : e.logger) || nl })), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1;
  }
  static async init(e) {
    const r = new Fp(e);
    return await r.initialize(), r;
  }
  async request(e, r, i) {
    const [s, n] = this.validateChain(r);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({ request: Ws({}, e), chainId: `${s}:${n}`, topic: this.session.topic, expiry: i });
  }
  sendAsync(e, r, i, s) {
    const n = (/* @__PURE__ */ new Date()).getTime();
    this.request(e, i, s).then((o) => r(null, Un(n, o))).catch((o) => r(o, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e = this.session) == null ? void 0 : e.topic, reason: le("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
  }
  async authenticate(e, r) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e), await this.cleanupPendingPairings();
    const { uri: i, response: s } = await this.client.authenticate(e, r);
    i && (this.uri = i, this.events.emit("display_uri", i));
    const n = await s();
    if (this.session = n.session, this.session) {
      const o = dl(this.session.namespaces);
      this.namespaces = Ks(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return n;
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    const { uri: r, approval: i } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties });
    r && (this.uri = r, this.events.emit("display_uri", r));
    const s = await i();
    this.session = s;
    const n = dl(s.namespaces);
    return this.namespaces = Ks(this.namespaces, n), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(e, r) {
    try {
      if (!this.session) return;
      const [i, s] = this.validateChain(e), n = this.getProvider(i);
      n.name === li ? n.setDefaultChain(`${i}:${s}`, r) : n.setDefaultChain(s, r);
    } catch (i) {
      if (!/Please call connect/.test(i.message)) throw i;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const r = this.client.pairing.getAll();
    if (lt(r)) {
      for (const i of r) e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    var e, r;
    if (this.client = this.providerOpts.client || await ED.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || nl, relayUrl: this.providerOpts.relayUrl || PD, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (i) {
      throw this.logger.error("Failed to get session", i), new Error(`The provided session: ${(r = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : r.topic} doesn't exist in the Sign client`);
    }
    else {
      const i = this.client.session.getAll();
      this.session = i[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e = [...new Set(Object.keys(this.session.namespaces).map((r) => fi(r)))];
    Ao("client", this.client), Ao("events", this.events), Ao("disableProviderPing", this.disableProviderPing), e.forEach((r) => {
      if (!this.session) return;
      const i = dA(r, this.session), s = Rp(i), n = Ks(this.namespaces, this.optionalNamespaces), o = Oo(Ws({}, n[r]), { accounts: i, chains: s });
      switch (r) {
        case "eip155":
          this.rpcProviders[r] = new _A({ namespace: o });
          break;
        case "algorand":
          this.rpcProviders[r] = new CA({ namespace: o });
          break;
        case "solana":
          this.rpcProviders[r] = new $A({ namespace: o });
          break;
        case "cosmos":
          this.rpcProviders[r] = new AA({ namespace: o });
          break;
        case "polkadot":
          this.rpcProviders[r] = new yA({ namespace: o });
          break;
        case "cip34":
          this.rpcProviders[r] = new BA({ namespace: o });
          break;
        case "elrond":
          this.rpcProviders[r] = new UA({ namespace: o });
          break;
        case "multiversx":
          this.rpcProviders[r] = new jA({ namespace: o });
          break;
        case "near":
          this.rpcProviders[r] = new zA({ namespace: o });
          break;
        case "tezos":
          this.rpcProviders[r] = new KA({ namespace: o });
          break;
        default:
          this.rpcProviders[li] ? this.rpcProviders[li].updateNamespace(o) : this.rpcProviders[li] = new YA({ namespace: o });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      var r;
      const { topic: i } = e;
      i === ((r = this.session) == null ? void 0 : r.topic) && this.events.emit("session_ping", e);
    }), this.client.on("session_event", (e) => {
      var r;
      const { params: i, topic: s } = e;
      if (s !== ((r = this.session) == null ? void 0 : r.topic)) return;
      const { event: n } = i;
      if (n.name === "accountsChanged") {
        const o = n.data;
        o && lt(o) && this.events.emit("accountsChanged", o.map(fl));
      } else if (n.name === "chainChanged") {
        const o = i.chainId, a = i.event.data, c = fi(o), h = Do(o) !== Do(a) ? `${c}:${Do(a)}` : o;
        this.onChainChanged(h);
      } else this.events.emit(n.name, n.data);
      this.events.emit("session_event", e);
    }), this.client.on("session_update", ({ topic: e, params: r }) => {
      var i, s;
      if (e !== ((i = this.session) == null ? void 0 : i.topic)) return;
      const { namespaces: n } = r, o = (s = this.client) == null ? void 0 : s.session.get(e);
      this.session = Oo(Ws({}, o), { namespaces: n }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e, params: r });
    }), this.client.on("session_delete", async (e) => {
      var r;
      e.topic === ((r = this.session) == null ? void 0 : r.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", Oo(Ws({}, le("USER_DISCONNECTED")), { data: e.topic })));
    }), this.on(gt.DEFAULT_CHAIN_CHANGED, (e) => {
      this.onChainChanged(e, !0);
    });
  }
  getProvider(e) {
    return this.rpcProviders[e] || this.rpcProviders[li];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var r;
      this.getProvider(e).updateNamespace((r = this.session) == null ? void 0 : r.namespaces[e]);
    });
  }
  setNamespaces(e) {
    const { namespaces: r = {}, optionalNamespaces: i = {}, sessionProperties: s, scopedProperties: n } = e;
    this.optionalNamespaces = Ks(r, i), this.sessionProperties = s, this.scopedProperties = n;
  }
  validateChain(e) {
    const [r, i] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, i];
    if (r && !Object.keys(this.namespaces || {}).map((o) => fi(o)).includes(r)) throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);
    if (r && i) return [r, i];
    const s = fi(Object.keys(this.namespaces)[0]), n = this.rpcProviders[s].getDefaultChain();
    return [s, n];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  async onChainChanged(e, r = !1) {
    if (!this.namespaces) return;
    const [i, s] = this.validateChain(e);
    if (!s) return;
    this.updateNamespaceChain(i, s), this.events.emit("chainChanged", s);
    const n = this.getProvider(i).getDefaultChain();
    r || this.getProvider(i).setDefaultChain(s), this.emitAccountsChangedOnChainChange({ namespace: i, previousChainId: n, newChainId: e }), await this.persist("namespaces", this.namespaces);
  }
  emitAccountsChangedOnChainChange({ namespace: e, previousChainId: r, newChainId: i }) {
    var s, n;
    try {
      if (r === i) return;
      const o = (n = (s = this.session) == null ? void 0 : s.namespaces[e]) == null ? void 0 : n.accounts;
      if (!o) return;
      const a = o.filter((c) => c.includes(`${i}:`)).map(fl);
      if (!lt(a)) return;
      this.events.emit("accountsChanged", a);
    } catch (o) {
      this.logger.warn("Failed to emit accountsChanged on chain change", o);
    }
  }
  updateNamespaceChain(e, r) {
    if (!this.namespaces) return;
    const i = this.namespaces[e] ? e : `${e}:${r}`, s = { chains: [], methods: [], events: [], defaultChain: r };
    this.namespaces[i] ? this.namespaces[i] && (this.namespaces[i].defaultChain = r) : this.namespaces[i] = s;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, await this.cleanupPendingPairings({ deletePairings: !0 }), await this.cleanupStorage();
  }
  async persist(e, r) {
    var i;
    const s = ((i = this.session) == null ? void 0 : i.topic) || "";
    await this.client.core.storage.setItem(`${Hs}/${e}${s}`, r);
  }
  async getFromStore(e) {
    var r;
    const i = ((r = this.session) == null ? void 0 : r.topic) || "";
    return await this.client.core.storage.getItem(`${Hs}/${e}${i}`);
  }
  async deleteFromStore(e) {
    var r;
    const i = ((r = this.session) == null ? void 0 : r.topic) || "";
    await this.client.core.storage.removeItem(`${Hs}/${e}${i}`);
  }
  async cleanupStorage() {
    var e;
    try {
      if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
      const r = await this.client.core.storage.getKeys();
      for (const i of r) i.startsWith(Hs) && await this.client.core.storage.removeItem(i);
    } catch (r) {
      this.logger.warn("Failed to cleanup storage", r);
    }
  }
};
const rO = tO, iO = "wc", sO = "ethereum_provider", nO = `${iO}@2:${sO}:`, oO = "https://rpc.walletconnect.org/v1/", $a = ["eth_sendTransaction", "personal_sign"], aO = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"], Sa = ["chainChanged", "accountsChanged"], cO = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"], hO = async () => {
  const { createAppKit: t } = await import("./core-DT8g9mFm.js").then((e) => e.X);
  return t;
};
var uO = Object.defineProperty, lO = Object.defineProperties, fO = Object.getOwnPropertyDescriptors, ml = Object.getOwnPropertySymbols, dO = Object.prototype.hasOwnProperty, pO = Object.prototype.propertyIsEnumerable, Da = (t, e, r) => e in t ? uO(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ir = (t, e) => {
  for (var r in e || (e = {})) dO.call(e, r) && Da(t, r, e[r]);
  if (ml) for (var r of ml(e)) pO.call(e, r) && Da(t, r, e[r]);
  return t;
}, zi = (t, e) => lO(t, fO(e)), Xe = (t, e, r) => Da(t, typeof e != "symbol" ? e + "" : e, r);
function vn(t) {
  return Number(t[0].split(":")[1]);
}
function Gs(t) {
  return `0x${t.toString(16)}`;
}
function gO(t) {
  const { chains: e, optionalChains: r, methods: i, optionalMethods: s, events: n, optionalEvents: o, rpcMap: a } = t;
  if (!lt(e)) throw new Error("Invalid chains");
  const c = { chains: e, methods: i || $a, events: n || Sa, rpcMap: Ir({}, e.length ? { [vn(e)]: a[vn(e)] } : {}) }, h = n == null ? void 0 : n.filter((p) => !Sa.includes(p)), u = i == null ? void 0 : i.filter((p) => !$a.includes(p));
  if (!r && !o && !s && !(h != null && h.length) && !(u != null && u.length)) return { required: e.length ? c : void 0 };
  const l = (h == null ? void 0 : h.length) && (u == null ? void 0 : u.length) || !r, f = { chains: [...new Set(l ? c.chains.concat(r || []) : r)], methods: [...new Set(c.methods.concat(s != null && s.length ? s : aO))], events: [...new Set(c.events.concat(o != null && o.length ? o : cO))], rpcMap: a };
  return { required: e.length ? c : void 0, optional: r.length ? f : void 0 };
}
class fc {
  constructor() {
    Xe(this, "events", new st.EventEmitter()), Xe(this, "namespace", "eip155"), Xe(this, "accounts", []), Xe(this, "signer"), Xe(this, "chainId", 1), Xe(this, "modal"), Xe(this, "rpc"), Xe(this, "STORAGE_KEY", nO), Xe(this, "on", (e, r) => (this.events.on(e, r), this)), Xe(this, "once", (e, r) => (this.events.once(e, r), this)), Xe(this, "removeListener", (e, r) => (this.events.removeListener(e, r), this)), Xe(this, "off", (e, r) => (this.events.off(e, r), this)), Xe(this, "parseAccount", (e) => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e), this.signer = {}, this.rpc = {};
  }
  static async init(e) {
    const r = new fc();
    return await r.initialize(e), r;
  }
  async request(e, r) {
    return await this.signer.request(e, this.formatChainId(this.chainId), r);
  }
  sendAsync(e, r, i) {
    this.signer.sendAsync(e, r, this.formatChainId(this.chainId), i);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(e) {
    var r;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: i, optional: s } = gO(this.rpc);
    try {
      const n = await new Promise(async (a, c) => {
        var h, u;
        this.rpc.showQrModal && ((h = this.modal) == null || h.open(), (u = this.modal) == null || u.subscribeState((f) => {
          !f.open && !this.signer.session && (this.signer.abortPairingAttempt(), c(new Error("Connection request reset. Please try again.")));
        }));
        const l = e != null && e.scopedProperties ? { [this.namespace]: e.scopedProperties } : void 0;
        await this.signer.connect(zi(Ir({ namespaces: Ir({}, i && { [this.namespace]: i }) }, s && { optionalNamespaces: { [this.namespace]: s } }), { pairingTopic: e == null ? void 0 : e.pairingTopic, scopedProperties: l })).then((f) => {
          a(f);
        }).catch((f) => {
          var p;
          (p = this.modal) == null || p.showErrorMessage("Unable to connect"), c(new Error(f.message));
        });
      });
      if (!n) return;
      const o = fh(n.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o), this.setAccounts(o), this.events.emit("connect", { chainId: Gs(this.chainId) });
    } catch (n) {
      throw this.signer.logger.error(n), n;
    } finally {
      (r = this.modal) == null || r.close();
    }
  }
  async authenticate(e, r) {
    var i;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: e == null ? void 0 : e.chains });
    try {
      const s = await new Promise(async (o, a) => {
        var c, h;
        this.rpc.showQrModal && ((c = this.modal) == null || c.open(), (h = this.modal) == null || h.subscribeState((u) => {
          !u.open && !this.signer.session && (this.signer.abortPairingAttempt(), a(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(zi(Ir({}, e), { chains: this.rpc.chains }), r).then((u) => {
          o(u);
        }).catch((u) => {
          var l;
          (l = this.modal) == null || l.showErrorMessage("Unable to connect"), a(new Error(u.message));
        });
      }), n = s.session;
      if (n) {
        const o = fh(n.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o), this.setAccounts(o), this.events.emit("connect", { chainId: Gs(this.chainId) });
      }
      return s;
    } catch (s) {
      throw this.signer.logger.error(s), s;
    } finally {
      (i = this.modal) == null || i.close();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: r } = e, { event: i } = r;
      i.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i.data), this.events.emit("accountsChanged", this.accounts)) : i.name === "chainChanged" ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data), this.events.emit("session_event", e);
    }), this.signer.on("accountsChanged", (e) => {
      this.accounts = this.parseAccounts(e), this.events.emit("accountsChanged", this.accounts);
    }), this.signer.on("chainChanged", (e) => {
      const r = parseInt(e);
      this.chainId = r, this.events.emit("chainChanged", Gs(this.chainId)), this.persist();
    }), this.signer.on("session_update", (e) => {
      this.events.emit("session_update", e);
    }), this.signer.on("session_delete", (e) => {
      this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", zi(Ir({}, le("USER_DISCONNECTED")), { data: e.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (e) => {
      this.events.emit("display_uri", e);
    });
  }
  switchEthereumChain(e) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: e.toString(16) }] });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const r = e.filter((i) => this.isCompatibleChainId(i)).map((i) => this.parseChainId(i));
    r.length && (this.chainId = r[0], this.events.emit("chainChanged", Gs(this.chainId)), this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const r = this.parseChainId(e);
      this.chainId = r, this.switchEthereumChain(r);
    }
  }
  parseAccountId(e) {
    const [r, i, s] = e.split(":");
    return { chainId: `${r}:${i}`, address: s };
  }
  setAccounts(e) {
    this.accounts = e.filter((r) => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map((r) => this.parseAccountId(r).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var r, i;
    const s = (r = e == null ? void 0 : e.chains) != null ? r : [], n = (i = e == null ? void 0 : e.optionalChains) != null ? i : [], o = s.concat(n);
    if (!o.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const a = s.length ? (e == null ? void 0 : e.methods) || $a : [], c = s.length ? (e == null ? void 0 : e.events) || Sa : [], h = (e == null ? void 0 : e.optionalMethods) || [], u = (e == null ? void 0 : e.optionalEvents) || [], l = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(o, e.projectId), f = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return { chains: s == null ? void 0 : s.map((p) => this.formatChainId(p)), optionalChains: n.map((p) => this.formatChainId(p)), methods: a, events: c, optionalMethods: h, optionalEvents: u, rpcMap: l, showQrModal: !!(e != null && e.showQrModal), qrModalOptions: f, projectId: e.projectId, metadata: e.metadata };
  }
  buildRpcMap(e, r) {
    const i = {};
    return e.forEach((s) => {
      i[s] = this.getRpcUrl(s, r);
    }), i;
  }
  async initialize(e) {
    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? vn(this.rpc.chains) : vn(this.rpc.optionalChains), this.signer = await rO.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: e.disableProviderPing, relayUrl: e.relayUrl, storage: e.storage, storageOptions: e.storageOptions, customStoragePrefix: e.customStoragePrefix, telemetryEnabled: e.telemetryEnabled, logger: e.logger }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let r;
      try {
        const i = await hO(), { convertWCMToAppKitOptions: s } = await Promise.resolve().then(function() {
          return SO;
        }), n = s(zi(Ir({}, this.rpc.qrModalOptions), { chains: [.../* @__PURE__ */ new Set([...this.rpc.chains, ...this.rpc.optionalChains])], metadata: this.rpc.metadata, projectId: this.rpc.projectId }));
        if (!n.networks.length) throw new Error("No networks found for WalletConnect·");
        r = i(zi(Ir({}, n), { universalProvider: this.signer, manualWCControl: !0 }));
      } catch (i) {
        throw console.warn(i), new Error("To use QR modal, please install @reown/appkit package");
      }
      if (r) try {
        this.modal = r;
      } catch (i) {
        throw this.signer.logger.error(i), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: r, optionalChains: i, rpcMap: s } = e;
    r && lt(r) && (this.rpc.chains = r.map((n) => this.formatChainId(n)), r.forEach((n) => {
      this.rpc.rpcMap[n] = (s == null ? void 0 : s[n]) || this.getRpcUrl(n);
    })), i && lt(i) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i == null ? void 0 : i.map((n) => this.formatChainId(n)), i.forEach((n) => {
      this.rpc.rpcMap[n] = (s == null ? void 0 : s[n]) || this.getRpcUrl(n);
    }));
  }
  getRpcUrl(e, r) {
    var i;
    return ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) || `${oO}?chainId=eip155:${e}&projectId=${r || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), r = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
      this.setChainIds(e ? [this.formatChainId(e)] : r == null ? void 0 : r.accounts), this.setAccounts(r == null ? void 0 : r.accounts);
    } catch (e) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(e), await this.disconnect().catch((r) => this.signer.logger.warn(r));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map((r) => this.parseAccount(r));
  }
}
const yO = fc;
var wO = Object.defineProperty, mO = Object.defineProperties, bO = Object.getOwnPropertyDescriptors, bl = Object.getOwnPropertySymbols, vO = Object.prototype.hasOwnProperty, EO = Object.prototype.propertyIsEnumerable, vl = (t, e, r) => e in t ? wO(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Np = (t, e) => {
  for (var r in e || (e = {})) vO.call(e, r) && vl(t, r, e[r]);
  if (bl) for (var r of bl(e)) EO.call(e, r) && vl(t, r, e[r]);
  return t;
}, _O = (t, e) => mO(t, bO(e));
function IO(t) {
  if (t) return { "--w3m-font-family": t["--wcm-font-family"], "--w3m-accent": t["--wcm-accent-color"], "--w3m-color-mix": t["--wcm-background-color"], "--w3m-z-index": t["--wcm-z-index"] ? Number(t["--wcm-z-index"]) : void 0, "--w3m-qr-color": t["--wcm-accent-color"], "--w3m-font-size-master": t["--wcm-text-medium-regular-size"], "--w3m-border-radius-master": t["--wcm-container-border-radius"], "--w3m-color-mix-strength": 0 };
}
const xO = (t) => {
  const [e, r] = t.split(":");
  return Up({ id: r, caipNetworkId: t, chainNamespace: e, name: "", nativeCurrency: { name: "", symbol: "", decimals: 8 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } } });
};
function $O(t) {
  var e, r, i, s, n, o, a;
  const c = (e = t.chains) == null ? void 0 : e.map(xO).filter(Boolean);
  if (c.length === 0) throw new Error("At least one chain must be specified");
  const h = c.find((l) => {
    var f;
    return l.id === ((f = t.defaultChain) == null ? void 0 : f.id);
  }), u = { projectId: t.projectId, networks: c, themeMode: t.themeMode, themeVariables: IO(t.themeVariables), chainImages: t.chainImages, connectorImages: t.walletImages, defaultNetwork: h, metadata: _O(Np({}, t.metadata), { name: ((r = t.metadata) == null ? void 0 : r.name) || "WalletConnect", description: ((i = t.metadata) == null ? void 0 : i.description) || "Connect to WalletConnect-compatible wallets", url: ((s = t.metadata) == null ? void 0 : s.url) || "https://walletconnect.org", icons: ((n = t.metadata) == null ? void 0 : n.icons) || ["https://walletconnect.org/walletconnect-logo.png"] }), showWallets: !0, featuredWalletIds: t.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(t.explorerRecommendedWalletIds) ? t.explorerRecommendedWalletIds : [], excludeWalletIds: t.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(t.explorerExcludedWalletIds) ? t.explorerExcludedWalletIds : [], enableEIP6963: !1, enableInjected: !1, enableCoinbase: !0, enableWalletConnect: !0, features: { email: !1, socials: !1 } };
  if ((o = t.mobileWallets) != null && o.length || (a = t.desktopWallets) != null && a.length) {
    const l = [...(t.mobileWallets || []).map((d) => ({ id: d.id, name: d.name, links: d.links })), ...(t.desktopWallets || []).map((d) => ({ id: d.id, name: d.name, links: { native: d.links.native, universal: d.links.universal } }))], f = [...u.featuredWalletIds || [], ...u.excludeWalletIds || []], p = l.filter((d) => !f.includes(d.id));
    p.length && (u.customWallets = p);
  }
  return u;
}
function Up(t) {
  return Np({ formatters: void 0, fees: void 0, serializers: void 0 }, t);
}
var SO = Object.freeze({ __proto__: null, convertWCMToAppKitOptions: $O, defineChain: Up });
class DO {
  constructor(e) {
    Si(this, "_eventHandlers", {});
    Si(this, "provider", null);
    Si(this, "walletConnectInitialized", !1);
    Si(this, "requestId", 0);
    this.config = e, (async () => {
      await this.initializeProvider(), await this.connectWallet();
    })();
  }
  on(e, r) {
    this._eventHandlers[e] || (this._eventHandlers[e] = []), this._eventHandlers[e].push(r);
  }
  _emit(e, r) {
    this._eventHandlers[e] && this._eventHandlers[e].forEach((i) => i(r));
  }
  _showOverlay(e) {
    window.parent.postMessage({
      type: "arena-overlay",
      visible: e
    }, "*");
  }
  async initializeProvider() {
    this.walletConnectInitialized || (this.provider = await yO.init({
      projectId: this.config.projectId,
      metadata: this.config.metadata,
      showQrModal: !1,
      chains: [43114],
      methods: ["eth_sendTransaction", "eth_signTransaction", "eth_sign"],
      events: ["chainChanged", "accountsChanged"]
    }), this.walletConnectInitialized || (this.provider.on("display_uri", async (e) => {
      this._showOverlay(!0), await this.sendRequest("requestWalletConnection", { uri: e });
    }), this.provider.on("connect", (e) => {
      var i;
      const r = (i = this.provider) == null ? void 0 : i.accounts[0];
      this._emit("walletChanged", { address: r }), this._showOverlay(!1);
    }), this.provider.on("disconnect", (e) => {
      console.log("Wallet disconnected:", e.message), this._emit("walletChanged", { address: null }), this._showOverlay(!1);
    }), this.walletConnectInitialized = !0));
  }
  async connectWallet() {
    try {
      if (!this.provider)
        throw new Error("Provider not initialized");
      await this.provider.connect();
    } catch (e) {
      console.error("Connection error:", e), this._showOverlay(!1);
    }
  }
  async sendRequest(e, r = {}) {
    return new Promise((i, s) => {
      const n = ++this.requestId, o = (a) => {
        a.data.id === n && (window.removeEventListener("message", o), a.data.error ? s(a.data.error) : i(a.data.result));
      };
      window.addEventListener("message", o), window.parent.postMessage(
        {
          type: "arena-request",
          id: n,
          method: e,
          params: r
        },
        "*"
      );
    });
  }
}
window.ArenaAppStoreSdk = DO;
export {
  my as $,
  rI as A,
  Rr as B,
  E1 as C,
  ux as D,
  Me as E,
  cc as F,
  Ln as G,
  Un as H,
  kr as I,
  xb as J,
  Cr as K,
  Ny as L,
  kn as M,
  Pa as N,
  _s as O,
  ch as P,
  Cf as Q,
  Ct as R,
  ct as S,
  Pt as T,
  xt as U,
  Fo as V,
  xy as W,
  PO as X,
  Uc as Y,
  ql as Z,
  os as _,
  Br as a,
  Ml as a0,
  $y as a1,
  CO as a2,
  OO as a3,
  nn as a4,
  RO as a5,
  TO as a6,
  DO as a7,
  Wt as b,
  Gd as c,
  js as d,
  g_ as e,
  p_ as f,
  d_ as g,
  uu as h,
  hh as i,
  Rl as j,
  w_ as k,
  L as l,
  Tr as m,
  Ca as n,
  ag as o,
  Tl as p,
  Ho as q,
  ps as r,
  oy as s,
  st as t,
  Nn as u,
  G3 as v,
  fr as w,
  Lr as x,
  Ze as y,
  pt as z
};
