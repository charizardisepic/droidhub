import { B as ir, L as Lh, s as Mh, d as Sn, a as so, b as Ha, c as Bh, e as Fh, k as jh, f as qh, g as Wh, h as fc, I as Qr, i as gc, j as zh, l as D, m as Br, C as Hh, n as Du, o as Kh, p as Vh, q as aa, r as Lu, t as nr, u as fn, A as Mu, E as rt, v as Gh, y as Ct, w as zs, x as ei, O as Ka, z as kt, D as Jh, F as Va, G as Ga, H as po, N as Ja, P as mc, Q as Yh, J as Xh, K as kr, M as Bu, R as os, S as Vt, T as hs, U as jt, V as wc } from "./index-D26b8tYY.js";
const Gs = (t, e, s) => JSON.stringify(t, (r, i) => typeof i == "bigint" ? i.toString() : i, s);
function Zh(t, e) {
  let s = t.toString();
  const r = s.startsWith("-");
  r && (s = s.slice(1)), s = s.padStart(e, "0");
  let [i, n] = [
    s.slice(0, s.length - e),
    s.slice(s.length - e)
  ];
  return n = n.replace(/(0+)$/, ""), `${r ? "-" : ""}${i || "0"}${n ? `.${n}` : ""}`;
}
const Ya = (t) => t;
class Ni extends ir {
  constructor({ body: e, cause: s, details: r, headers: i, status: n, url: o }) {
    super("HTTP request failed.", {
      cause: s,
      details: r,
      metaMessages: [
        n && `Status: ${n}`,
        `URL: ${Ya(o)}`,
        e && `Request body: ${Gs(e)}`
      ].filter(Boolean),
      name: "HttpRequestError"
    }), Object.defineProperty(this, "body", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "headers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "status", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.body = e, this.headers = i, this.status = n, this.url = o;
  }
}
class Fu extends ir {
  constructor({ body: e, error: s, url: r }) {
    super("RPC Request failed.", {
      cause: s,
      details: s.message,
      metaMessages: [`URL: ${Ya(r)}`, `Request body: ${Gs(e)}`],
      name: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = s.code, this.data = s.data;
  }
}
class yc extends ir {
  constructor({ body: e, url: s }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${Ya(s)}`, `Request body: ${Gs(e)}`],
      name: "TimeoutError"
    });
  }
}
const Qh = -1;
class pt extends ir {
  constructor(e, { code: s, docsPath: r, metaMessages: i, name: n, shortMessage: o }) {
    super(o, {
      cause: e,
      docsPath: r,
      metaMessages: i || (e == null ? void 0 : e.metaMessages),
      name: n || "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = n || e.name, this.code = e instanceof Fu ? e.code : s ?? Qh;
  }
}
class It extends pt {
  constructor(e, s) {
    super(e, s), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = s.data;
  }
}
class Li extends pt {
  constructor(e) {
    super(e, {
      code: Li.code,
      name: "ParseRpcError",
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    });
  }
}
Object.defineProperty(Li, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class Mi extends pt {
  constructor(e) {
    super(e, {
      code: Mi.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object."
    });
  }
}
Object.defineProperty(Mi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class Bi extends pt {
  constructor(e, { method: s } = {}) {
    super(e, {
      code: Bi.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${s ? ` "${s}"` : ""} does not exist / is not available.`
    });
  }
}
Object.defineProperty(Bi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class Fi extends pt {
  constructor(e) {
    super(e, {
      code: Fi.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(Fi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class Fr extends pt {
  constructor(e) {
    super(e, {
      code: Fr.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received."
    });
  }
}
Object.defineProperty(Fr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class ji extends pt {
  constructor(e) {
    super(e, {
      code: ji.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(ji, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class qi extends pt {
  constructor(e) {
    super(e, {
      code: qi.code,
      name: "ResourceNotFoundRpcError",
      shortMessage: "Requested resource not found."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceNotFoundRpcError"
    });
  }
}
Object.defineProperty(qi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class Wi extends pt {
  constructor(e) {
    super(e, {
      code: Wi.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available."
    });
  }
}
Object.defineProperty(Wi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class jr extends pt {
  constructor(e) {
    super(e, {
      code: jr.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed."
    });
  }
}
Object.defineProperty(jr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class Hs extends pt {
  constructor(e, { method: s } = {}) {
    super(e, {
      code: Hs.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${s ? ` "${s}"` : ""} is not supported.`
    });
  }
}
Object.defineProperty(Hs, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class qr extends pt {
  constructor(e) {
    super(e, {
      code: qr.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit."
    });
  }
}
Object.defineProperty(qr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class zi extends pt {
  constructor(e) {
    super(e, {
      code: zi.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported."
    });
  }
}
Object.defineProperty(zi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class Js extends It {
  constructor(e) {
    super(e, {
      code: Js.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request."
    });
  }
}
Object.defineProperty(Js, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class Hi extends It {
  constructor(e) {
    super(e, {
      code: Hi.code,
      name: "UnauthorizedProviderError",
      shortMessage: "The requested method and/or account has not been authorized by the user."
    });
  }
}
Object.defineProperty(Hi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class Ki extends It {
  constructor(e, { method: s } = {}) {
    super(e, {
      code: Ki.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${s ? ` " ${s}"` : ""}.`
    });
  }
}
Object.defineProperty(Ki, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class Vi extends It {
  constructor(e) {
    super(e, {
      code: Vi.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains."
    });
  }
}
Object.defineProperty(Vi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class Gi extends It {
  constructor(e) {
    super(e, {
      code: Gi.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain."
    });
  }
}
Object.defineProperty(Gi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
class Ji extends It {
  constructor(e) {
    super(e, {
      code: Ji.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain."
    });
  }
}
Object.defineProperty(Ji, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class Yi extends It {
  constructor(e) {
    super(e, {
      code: Yi.code,
      name: "UnsupportedNonOptionalCapabilityError",
      shortMessage: "This Wallet does not support a capability that was not marked as optional."
    });
  }
}
Object.defineProperty(Yi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5700
});
class Xi extends It {
  constructor(e) {
    super(e, {
      code: Xi.code,
      name: "UnsupportedChainIdError",
      shortMessage: "This Wallet does not support the requested chain ID."
    });
  }
}
Object.defineProperty(Xi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5710
});
class Zi extends It {
  constructor(e) {
    super(e, {
      code: Zi.code,
      name: "DuplicateIdError",
      shortMessage: "There is already a bundle submitted with this ID."
    });
  }
}
Object.defineProperty(Zi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5720
});
class Qi extends It {
  constructor(e) {
    super(e, {
      code: Qi.code,
      name: "UnknownBundleIdError",
      shortMessage: "This bundle id is unknown / has not been submitted"
    });
  }
}
Object.defineProperty(Qi, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5730
});
class en extends It {
  constructor(e) {
    super(e, {
      code: en.code,
      name: "BundleTooLargeError",
      shortMessage: "The call bundle is too large for the Wallet to process."
    });
  }
}
Object.defineProperty(en, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5740
});
class tn extends It {
  constructor(e) {
    super(e, {
      code: tn.code,
      name: "AtomicReadyWalletRejectedUpgradeError",
      shortMessage: "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."
    });
  }
}
Object.defineProperty(tn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5750
});
class sn extends It {
  constructor(e) {
    super(e, {
      code: sn.code,
      name: "AtomicityNotSupportedError",
      shortMessage: "The wallet does not support atomic execution but the request requires it."
    });
  }
}
Object.defineProperty(sn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 5760
});
class ep extends pt {
  constructor(e) {
    super(e, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred."
    });
  }
}
class Xa extends ir {
  constructor({ cause: e, message: s } = {}) {
    var i;
    const r = (i = s == null ? void 0 : s.replace("execution reverted: ", "")) == null ? void 0 : i.replace("execution reverted", "");
    super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
      cause: e,
      name: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(Xa, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(Xa, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
function tp() {
  let t = () => {
  }, e = () => {
  };
  return { promise: new Promise((r, i) => {
    t = r, e = i;
  }), resolve: t, reject: e };
}
const No = /* @__PURE__ */ new Map();
function sp({ fn: t, id: e, shouldSplitBatch: s, wait: r = 0, sort: i }) {
  const n = async () => {
    const u = c();
    o();
    const d = u.map(({ args: h }) => h);
    d.length !== 0 && t(d).then((h) => {
      i && Array.isArray(h) && h.sort(i);
      for (let p = 0; p < u.length; p++) {
        const { resolve: g } = u[p];
        g == null || g([h[p], h]);
      }
    }).catch((h) => {
      for (let p = 0; p < u.length; p++) {
        const { reject: g } = u[p];
        g == null || g(h);
      }
    });
  }, o = () => No.delete(e), a = () => c().map(({ args: u }) => u), c = () => No.get(e) || [], l = (u) => No.set(e, [...c(), u]);
  return {
    flush: o,
    async schedule(u) {
      const { promise: d, resolve: h, reject: p } = tp();
      return (s == null ? void 0 : s([...a(), u])) && n(), c().length > 0 ? (l({ args: u, resolve: h, reject: p }), d) : (l({ args: u, resolve: h, reject: p }), setTimeout(n, r), d);
    }
  };
}
async function ju(t) {
  return new Promise((e) => setTimeout(e, t));
}
const ca = 256;
let Pn = ca, On;
function rp(t = 11) {
  if (!On || Pn + t > ca * 2) {
    On = "", Pn = 0;
    for (let e = 0; e < ca; e++)
      On += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return On.substring(Pn, Pn++ + t);
}
const Tn = /* @__PURE__ */ new Lh(8192);
function ip(t, { enabled: e = !0, id: s }) {
  if (!e || !s)
    return t();
  if (Tn.get(s))
    return Tn.get(s);
  const r = t().finally(() => Tn.delete(s));
  return Tn.set(s, r), r;
}
function np(t, { delay: e = 100, retryCount: s = 2, shouldRetry: r = () => !0 } = {}) {
  return new Promise((i, n) => {
    const o = async ({ count: a = 0 } = {}) => {
      const c = async ({ error: l }) => {
        const u = typeof e == "function" ? e({ count: a, error: l }) : e;
        u && await ju(u), o({ count: a + 1 });
      };
      try {
        const l = await t();
        i(l);
      } catch (l) {
        if (a < s && await r({ count: a, error: l }))
          return c({ error: l });
        n(l);
      }
    };
    o();
  });
}
function op(t, e = {}) {
  return async (s, r = {}) => {
    var d;
    const { dedupe: i = !1, methods: n, retryDelay: o = 150, retryCount: a = 3, uid: c } = {
      ...e,
      ...r
    }, { method: l } = s;
    if ((d = n == null ? void 0 : n.exclude) != null && d.includes(l))
      throw new Hs(new Error("method not supported"), {
        method: l
      });
    if (n != null && n.include && !n.include.includes(l))
      throw new Hs(new Error("method not supported"), {
        method: l
      });
    const u = i ? Mh(`${c}.${Gs(s)}`) : void 0;
    return ip(() => np(async () => {
      try {
        return await t(s);
      } catch (h) {
        const p = h;
        switch (p.code) {
          case Li.code:
            throw new Li(p);
          case Mi.code:
            throw new Mi(p);
          case Bi.code:
            throw new Bi(p, { method: s.method });
          case Fi.code:
            throw new Fi(p);
          case Fr.code:
            throw new Fr(p);
          case ji.code:
            throw new ji(p);
          case qi.code:
            throw new qi(p);
          case Wi.code:
            throw new Wi(p);
          case jr.code:
            throw new jr(p);
          case Hs.code:
            throw new Hs(p, {
              method: s.method
            });
          case qr.code:
            throw new qr(p);
          case zi.code:
            throw new zi(p);
          case Js.code:
            throw new Js(p);
          case Hi.code:
            throw new Hi(p);
          case Ki.code:
            throw new Ki(p);
          case Vi.code:
            throw new Vi(p);
          case Gi.code:
            throw new Gi(p);
          case Ji.code:
            throw new Ji(p);
          case Yi.code:
            throw new Yi(p);
          case Xi.code:
            throw new Xi(p);
          case Zi.code:
            throw new Zi(p);
          case Qi.code:
            throw new Qi(p);
          case en.code:
            throw new en(p);
          case tn.code:
            throw new tn(p);
          case sn.code:
            throw new sn(p);
          case 5e3:
            throw new Js(p);
          default:
            throw h instanceof ir ? h : new ep(p);
        }
      }
    }, {
      delay: ({ count: h, error: p }) => {
        var g;
        if (p && p instanceof Ni) {
          const f = (g = p == null ? void 0 : p.headers) == null ? void 0 : g.get("Retry-After");
          if (f != null && f.match(/\d/))
            return Number.parseInt(f) * 1e3;
        }
        return ~~(1 << h) * o;
      },
      retryCount: a,
      shouldRetry: ({ error: h }) => ap(h)
    }), { enabled: i, id: u });
  };
}
function ap(t) {
  return "code" in t && typeof t.code == "number" ? t.code === -1 || t.code === qr.code || t.code === Fr.code : t instanceof Ni && t.status ? t.status === 403 || t.status === 408 || t.status === 413 || t.status === 429 || t.status === 500 || t.status === 502 || t.status === 503 || t.status === 504 : !0;
}
function qu({ key: t, methods: e, name: s, request: r, retryCount: i = 3, retryDelay: n = 150, timeout: o, type: a }, c) {
  const l = rp();
  return {
    config: {
      key: t,
      methods: e,
      name: s,
      request: r,
      retryCount: i,
      retryDelay: n,
      timeout: o,
      type: a
    },
    request: op(r, { methods: e, retryCount: i, retryDelay: n, uid: l }),
    value: c
  };
}
function bc(t, e = {}) {
  const { key: s = "fallback", name: r = "Fallback", rank: i = !1, shouldThrow: n = cp, retryCount: o, retryDelay: a } = e;
  return ({ chain: c, pollingInterval: l = 4e3, timeout: u, ...d }) => {
    let h = t, p = () => {
    };
    const g = qu({
      key: s,
      name: r,
      async request({ method: f, params: w }) {
        let y;
        const b = async (v = 0) => {
          const C = h[v]({
            ...d,
            chain: c,
            retryCount: 0,
            timeout: u
          });
          try {
            const S = await C.request({
              method: f,
              params: w
            });
            return p({
              method: f,
              params: w,
              response: S,
              transport: C,
              status: "success"
            }), S;
          } catch (S) {
            if (p({
              error: S,
              method: f,
              params: w,
              transport: C,
              status: "error"
            }), n(S) || v === h.length - 1 || (y ?? (y = h.slice(v + 1).some((A) => {
              const { include: N, exclude: R } = A({ chain: c }).config.methods || {};
              return N ? N.includes(f) : R ? !R.includes(f) : !0;
            })), !y))
              throw S;
            return b(v + 1);
          }
        };
        return b();
      },
      retryCount: o,
      retryDelay: a,
      type: "fallback"
    }, {
      onResponse: (f) => p = f,
      transports: h.map((f) => f({ chain: c, retryCount: 0 }))
    });
    if (i) {
      const f = typeof i == "object" ? i : {};
      lp({
        chain: c,
        interval: f.interval ?? l,
        onTransports: (w) => h = w,
        ping: f.ping,
        sampleCount: f.sampleCount,
        timeout: f.timeout,
        transports: h,
        weights: f.weights
      });
    }
    return g;
  };
}
function cp(t) {
  return !!("code" in t && typeof t.code == "number" && (t.code === jr.code || t.code === Js.code || Xa.nodeMessage.test(t.message) || t.code === 5e3));
}
function lp({ chain: t, interval: e = 4e3, onTransports: s, ping: r, sampleCount: i = 10, timeout: n = 1e3, transports: o, weights: a = {} }) {
  const { stability: c = 0.7, latency: l = 0.3 } = a, u = [], d = async () => {
    const h = await Promise.all(o.map(async (f) => {
      const w = f({ chain: t, retryCount: 0, timeout: n }), y = Date.now();
      let b, v;
      try {
        await (r ? r({ transport: w }) : w.request({ method: "net_listening" })), v = 1;
      } catch {
        v = 0;
      } finally {
        b = Date.now();
      }
      return { latency: b - y, success: v };
    }));
    u.push(h), u.length > i && u.shift();
    const p = Math.max(...u.map((f) => Math.max(...f.map(({ latency: w }) => w)))), g = o.map((f, w) => {
      const y = u.map((A) => A[w].latency), v = 1 - y.reduce((A, N) => A + N, 0) / y.length / p, C = u.map((A) => A[w].success), S = C.reduce((A, N) => A + N, 0) / C.length;
      return S === 0 ? [0, w] : [
        l * v + c * S,
        w
      ];
    }).sort((f, w) => w[0] - f[0]);
    s(g.map(([, f]) => o[f])), await ju(e), d();
  };
  d();
}
class up extends ir {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro",
      name: "UrlRequiredError"
    });
  }
}
function dp(t, { errorInstance: e = new Error("timed out"), timeout: s, signal: r }) {
  return new Promise((i, n) => {
    (async () => {
      let o;
      try {
        const a = new AbortController();
        s > 0 && (o = setTimeout(() => {
          r && a.abort();
        }, s)), i(await t({ signal: (a == null ? void 0 : a.signal) || null }));
      } catch (a) {
        (a == null ? void 0 : a.name) === "AbortError" && n(e), n(a);
      } finally {
        clearTimeout(o);
      }
    })();
  });
}
function hp() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
const vc = /* @__PURE__ */ hp();
function pp(t, e = {}) {
  return {
    async request(s) {
      var d;
      const { body: r, onRequest: i = e.onRequest, onResponse: n = e.onResponse, timeout: o = e.timeout ?? 1e4 } = s, a = {
        ...e.fetchOptions ?? {},
        ...s.fetchOptions ?? {}
      }, { headers: c, method: l, signal: u } = a;
      try {
        const h = await dp(async ({ signal: g }) => {
          const f = {
            ...a,
            body: Array.isArray(r) ? Gs(r.map((v) => ({
              jsonrpc: "2.0",
              id: v.id ?? vc.take(),
              ...v
            }))) : Gs({
              jsonrpc: "2.0",
              id: r.id ?? vc.take(),
              ...r
            }),
            headers: {
              "Content-Type": "application/json",
              ...c
            },
            method: l || "POST",
            signal: u || (o > 0 ? g : null)
          }, w = new Request(t, f), y = await (i == null ? void 0 : i(w, f)) ?? { ...f, url: t };
          return await fetch(y.url ?? t, y);
        }, {
          errorInstance: new yc({ body: r, url: t }),
          timeout: o,
          signal: !0
        });
        n && await n(h);
        let p;
        if ((d = h.headers.get("Content-Type")) != null && d.startsWith("application/json"))
          p = await h.json();
        else {
          p = await h.text();
          try {
            p = JSON.parse(p || "{}");
          } catch (g) {
            if (h.ok)
              throw g;
            p = { error: p };
          }
        }
        if (!h.ok)
          throw new Ni({
            body: r,
            details: Gs(p.error) || h.statusText,
            headers: h.headers,
            status: h.status,
            url: t
          });
        return p;
      } catch (h) {
        throw h instanceof Ni || h instanceof yc ? h : new Ni({
          body: r,
          cause: h,
          url: t
        });
      }
    }
  };
}
function xn(t, e = {}) {
  const { batch: s, fetchOptions: r, key: i = "http", methods: n, name: o = "HTTP JSON-RPC", onFetchRequest: a, onFetchResponse: c, retryDelay: l, raw: u } = e;
  return ({ chain: d, retryCount: h, timeout: p }) => {
    const { batchSize: g = 1e3, wait: f = 0 } = typeof s == "object" ? s : {}, w = e.retryCount ?? h, y = p ?? e.timeout ?? 1e4, b = t || (d == null ? void 0 : d.rpcUrls.default.http[0]);
    if (!b)
      throw new up();
    const v = pp(b, {
      fetchOptions: r,
      onRequest: a,
      onResponse: c,
      timeout: y
    });
    return qu({
      key: i,
      methods: n,
      name: o,
      async request({ method: C, params: S }) {
        const A = { method: C, params: S }, { schedule: N } = sp({
          id: b,
          wait: f,
          shouldSplitBatch(I) {
            return I.length > g;
          },
          fn: (I) => v.request({
            body: I
          }),
          sort: (I, L) => I.id - L.id
        }), R = async (I) => s ? N(I) : [
          await v.request({
            body: I
          })
        ], [{ error: E, result: $ }] = await R(A);
        if (u)
          return { error: E, result: $ };
        if (E)
          throw new Fu({
            body: A,
            error: E,
            url: b
          });
        return $;
      },
      retryCount: w,
      retryDelay: l,
      timeout: y,
      type: "http"
    }, {
      fetchOptions: r,
      url: b
    });
  };
}
const z = {
  WC_NAME_SUFFIX: ".reown.id",
  WC_NAME_SUFFIX_LEGACY: ".wcn.id",
  BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
  PULSE_API_URL: "https://pulse.walletconnect.org",
  W3M_API_URL: "https://api.web3modal.org",
  CONNECTOR_ID: {
    WALLET_CONNECT: "walletConnect",
    INJECTED: "injected",
    WALLET_STANDARD: "announced",
    COINBASE: "coinbaseWallet",
    COINBASE_SDK: "coinbaseWalletSDK",
    SAFE: "safe",
    LEDGER: "ledger",
    OKX: "okx",
    EIP6963: "eip6963",
    AUTH: "ID_AUTH"
  },
  CONNECTOR_NAMES: {
    AUTH: "Auth"
  },
  AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
  LIMITS: {
    PENDING_TRANSACTIONS: 99
  },
  CHAIN: {
    EVM: "eip155",
    SOLANA: "solana",
    POLKADOT: "polkadot",
    BITCOIN: "bip122"
  },
  CHAIN_NAME_MAP: {
    eip155: "EVM Networks",
    solana: "Solana",
    polkadot: "Polkadot",
    bip122: "Bitcoin",
    cosmos: "Cosmos"
  },
  ADAPTER_TYPES: {
    BITCOIN: "bitcoin",
    SOLANA: "solana",
    WAGMI: "wagmi",
    ETHERS: "ethers",
    ETHERS5: "ethers5"
  },
  USDT_CONTRACT_ADDRESSES: [
    "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
    "0x919C1c267BC06a7039e03fcc2eF738525769109c",
    "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
    "0x55d398326f99059fF775485246999027B3197955",
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"
  ],
  HTTP_STATUS_CODES: {
    SERVICE_UNAVAILABLE: 503,
    FORBIDDEN: 403
  },
  UNSUPPORTED_NETWORK_NAME: "Unknown Network",
  SECURE_SITE_SDK_ORIGIN: (typeof process < "u" && typeof process.env < "u" ? process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org"
}, Wu = {
  caipNetworkIdToNumber(t) {
    return t ? Number(t.split(":")[1]) : void 0;
  },
  parseEvmChainId(t) {
    return typeof t == "string" ? this.caipNetworkIdToNumber(t) : t;
  },
  getNetworksByNamespace(t, e) {
    return (t == null ? void 0 : t.filter((s) => s.chainNamespace === e)) || [];
  },
  getFirstNetworkByNamespace(t, e) {
    return this.getNetworksByNamespace(t, e)[0];
  },
  getNetworkNameByCaipNetworkId(t, e) {
    var i;
    if (!e)
      return;
    const s = t.find((n) => n.caipNetworkId === e);
    if (s)
      return s.name;
    const [r] = e.split(":");
    return ((i = z.CHAIN_NAME_MAP) == null ? void 0 : i[r]) || void 0;
  }
};
var fp = 20, gp = 1, ti = 1e6, mp = 1e6, wp = -7, yp = 21, bp = !1, gn = "[big.js] ", or = gn + "Invalid ", fo = or + "decimal places", vp = or + "rounding mode", zu = gn + "Division by zero", ge = {}, Yt = void 0, Ep = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function Hu() {
  function t(e) {
    var s = this;
    if (!(s instanceof t)) return e === Yt ? Hu() : new t(e);
    if (e instanceof t)
      s.s = e.s, s.e = e.e, s.c = e.c.slice();
    else {
      if (typeof e != "string") {
        if (t.strict === !0 && typeof e != "bigint")
          throw TypeError(or + "value");
        e = e === 0 && 1 / e < 0 ? "-0" : String(e);
      }
      Cp(s, e);
    }
    s.constructor = t;
  }
  return t.prototype = ge, t.DP = fp, t.RM = gp, t.NE = wp, t.PE = yp, t.strict = bp, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t;
}
function Cp(t, e) {
  var s, r, i;
  if (!Ep.test(e))
    throw Error(or + "number");
  for (t.s = e.charAt(0) == "-" ? (e = e.slice(1), -1) : 1, (s = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (s < 0 && (s = r), s += +e.slice(r + 1), e = e.substring(0, r)) : s < 0 && (s = e.length), i = e.length, r = 0; r < i && e.charAt(r) == "0"; ) ++r;
  if (r == i)
    t.c = [t.e = 0];
  else {
    for (; i > 0 && e.charAt(--i) == "0"; ) ;
    for (t.e = s - r - 1, t.c = [], s = 0; r <= i; ) t.c[s++] = +e.charAt(r++);
  }
  return t;
}
function ar(t, e, s, r) {
  var i = t.c;
  if (s === Yt && (s = t.constructor.RM), s !== 0 && s !== 1 && s !== 2 && s !== 3)
    throw Error(vp);
  if (e < 1)
    r = s === 3 && (r || !!i[0]) || e === 0 && (s === 1 && i[0] >= 5 || s === 2 && (i[0] > 5 || i[0] === 5 && (r || i[1] !== Yt))), i.length = 1, r ? (t.e = t.e - e + 1, i[0] = 1) : i[0] = t.e = 0;
  else if (e < i.length) {
    if (r = s === 1 && i[e] >= 5 || s === 2 && (i[e] > 5 || i[e] === 5 && (r || i[e + 1] !== Yt || i[e - 1] & 1)) || s === 3 && (r || !!i[0]), i.length = e, r) {
      for (; ++i[--e] > 9; )
        if (i[e] = 0, e === 0) {
          ++t.e, i.unshift(1);
          break;
        }
    }
    for (e = i.length; !i[--e]; ) i.pop();
  }
  return t;
}
function cr(t, e, s) {
  var r = t.e, i = t.c.join(""), n = i.length;
  if (e)
    i = i.charAt(0) + (n > 1 ? "." + i.slice(1) : "") + (r < 0 ? "e" : "e+") + r;
  else if (r < 0) {
    for (; ++r; ) i = "0" + i;
    i = "0." + i;
  } else if (r > 0)
    if (++r > n)
      for (r -= n; r--; ) i += "0";
    else r < n && (i = i.slice(0, r) + "." + i.slice(r));
  else n > 1 && (i = i.charAt(0) + "." + i.slice(1));
  return t.s < 0 && s ? "-" + i : i;
}
ge.abs = function() {
  var t = new this.constructor(this);
  return t.s = 1, t;
};
ge.cmp = function(t) {
  var e, s = this, r = s.c, i = (t = new s.constructor(t)).c, n = s.s, o = t.s, a = s.e, c = t.e;
  if (!r[0] || !i[0]) return r[0] ? n : i[0] ? -o : 0;
  if (n != o) return n;
  if (e = n < 0, a != c) return a > c ^ e ? 1 : -1;
  for (o = (a = r.length) < (c = i.length) ? a : c, n = -1; ++n < o; )
    if (r[n] != i[n]) return r[n] > i[n] ^ e ? 1 : -1;
  return a == c ? 0 : a > c ^ e ? 1 : -1;
};
ge.div = function(t) {
  var e = this, s = e.constructor, r = e.c, i = (t = new s(t)).c, n = e.s == t.s ? 1 : -1, o = s.DP;
  if (o !== ~~o || o < 0 || o > ti)
    throw Error(fo);
  if (!i[0])
    throw Error(zu);
  if (!r[0])
    return t.s = n, t.c = [t.e = 0], t;
  var a, c, l, u, d, h = i.slice(), p = a = i.length, g = r.length, f = r.slice(0, a), w = f.length, y = t, b = y.c = [], v = 0, C = o + (y.e = e.e - t.e) + 1;
  for (y.s = n, n = C < 0 ? 0 : C, h.unshift(0); w++ < a; ) f.push(0);
  do {
    for (l = 0; l < 10; l++) {
      if (a != (w = f.length))
        u = a > w ? 1 : -1;
      else
        for (d = -1, u = 0; ++d < a; )
          if (i[d] != f[d]) {
            u = i[d] > f[d] ? 1 : -1;
            break;
          }
      if (u < 0) {
        for (c = w == a ? i : h; w; ) {
          if (f[--w] < c[w]) {
            for (d = w; d && !f[--d]; ) f[d] = 9;
            --f[d], f[w] += 10;
          }
          f[w] -= c[w];
        }
        for (; !f[0]; ) f.shift();
      } else
        break;
    }
    b[v++] = u ? l : ++l, f[0] && u ? f[w] = r[p] || 0 : f = [r[p]];
  } while ((p++ < g || f[0] !== Yt) && n--);
  return !b[0] && v != 1 && (b.shift(), y.e--, C--), v > C && ar(y, C, s.RM, f[0] !== Yt), y;
};
ge.eq = function(t) {
  return this.cmp(t) === 0;
};
ge.gt = function(t) {
  return this.cmp(t) > 0;
};
ge.gte = function(t) {
  return this.cmp(t) > -1;
};
ge.lt = function(t) {
  return this.cmp(t) < 0;
};
ge.lte = function(t) {
  return this.cmp(t) < 1;
};
ge.minus = ge.sub = function(t) {
  var e, s, r, i, n = this, o = n.constructor, a = n.s, c = (t = new o(t)).s;
  if (a != c)
    return t.s = -c, n.plus(t);
  var l = n.c.slice(), u = n.e, d = t.c, h = t.e;
  if (!l[0] || !d[0])
    return d[0] ? t.s = -c : l[0] ? t = new o(n) : t.s = 1, t;
  if (a = u - h) {
    for ((i = a < 0) ? (a = -a, r = l) : (h = u, r = d), r.reverse(), c = a; c--; ) r.push(0);
    r.reverse();
  } else
    for (s = ((i = l.length < d.length) ? l : d).length, a = c = 0; c < s; c++)
      if (l[c] != d[c]) {
        i = l[c] < d[c];
        break;
      }
  if (i && (r = l, l = d, d = r, t.s = -t.s), (c = (s = d.length) - (e = l.length)) > 0) for (; c--; ) l[e++] = 0;
  for (c = e; s > a; ) {
    if (l[--s] < d[s]) {
      for (e = s; e && !l[--e]; ) l[e] = 9;
      --l[e], l[s] += 10;
    }
    l[s] -= d[s];
  }
  for (; l[--c] === 0; ) l.pop();
  for (; l[0] === 0; )
    l.shift(), --h;
  return l[0] || (t.s = 1, l = [h = 0]), t.c = l, t.e = h, t;
};
ge.mod = function(t) {
  var e, s = this, r = s.constructor, i = s.s, n = (t = new r(t)).s;
  if (!t.c[0])
    throw Error(zu);
  return s.s = t.s = 1, e = t.cmp(s) == 1, s.s = i, t.s = n, e ? new r(s) : (i = r.DP, n = r.RM, r.DP = r.RM = 0, s = s.div(t), r.DP = i, r.RM = n, this.minus(s.times(t)));
};
ge.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s, t;
};
ge.plus = ge.add = function(t) {
  var e, s, r, i = this, n = i.constructor;
  if (t = new n(t), i.s != t.s)
    return t.s = -t.s, i.minus(t);
  var o = i.e, a = i.c, c = t.e, l = t.c;
  if (!a[0] || !l[0])
    return l[0] || (a[0] ? t = new n(i) : t.s = i.s), t;
  if (a = a.slice(), e = o - c) {
    for (e > 0 ? (c = o, r = l) : (e = -e, r = a), r.reverse(); e--; ) r.push(0);
    r.reverse();
  }
  for (a.length - l.length < 0 && (r = l, l = a, a = r), e = l.length, s = 0; e; a[e] %= 10) s = (a[--e] = a[e] + l[e] + s) / 10 | 0;
  for (s && (a.unshift(s), ++c), e = a.length; a[--e] === 0; ) a.pop();
  return t.c = a, t.e = c, t;
};
ge.pow = function(t) {
  var e = this, s = new e.constructor("1"), r = s, i = t < 0;
  if (t !== ~~t || t < -1e6 || t > mp)
    throw Error(or + "exponent");
  for (i && (t = -t); t & 1 && (r = r.times(e)), t >>= 1, !!t; )
    e = e.times(e);
  return i ? s.div(r) : r;
};
ge.prec = function(t, e) {
  if (t !== ~~t || t < 1 || t > ti)
    throw Error(or + "precision");
  return ar(new this.constructor(this), t, e);
};
ge.round = function(t, e) {
  if (t === Yt) t = 0;
  else if (t !== ~~t || t < -1e6 || t > ti)
    throw Error(fo);
  return ar(new this.constructor(this), t + this.e + 1, e);
};
ge.sqrt = function() {
  var t, e, s, r = this, i = r.constructor, n = r.s, o = r.e, a = new i("0.5");
  if (!r.c[0]) return new i(r);
  if (n < 0)
    throw Error(gn + "No square root");
  n = Math.sqrt(+cr(r, !0, !0)), n === 0 || n === 1 / 0 ? (e = r.c.join(""), e.length + o & 1 || (e += "0"), n = Math.sqrt(e), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), t = new i((n == 1 / 0 ? "5e" : (n = n.toExponential()).slice(0, n.indexOf("e") + 1)) + o)) : t = new i(n + ""), o = t.e + (i.DP += 4);
  do
    s = t, t = a.times(s.plus(r.div(s)));
  while (s.c.slice(0, o).join("") !== t.c.slice(0, o).join(""));
  return ar(t, (i.DP -= 4) + t.e + 1, i.RM);
};
ge.times = ge.mul = function(t) {
  var e, s = this, r = s.constructor, i = s.c, n = (t = new r(t)).c, o = i.length, a = n.length, c = s.e, l = t.e;
  if (t.s = s.s == t.s ? 1 : -1, !i[0] || !n[0])
    return t.c = [t.e = 0], t;
  for (t.e = c + l, o < a && (e = i, i = n, n = e, l = o, o = a, a = l), e = new Array(l = o + a); l--; ) e[l] = 0;
  for (c = a; c--; ) {
    for (a = 0, l = o + c; l > c; )
      a = e[l] + n[c] * i[l - c - 1] + a, e[l--] = a % 10, a = a / 10 | 0;
    e[l] = a;
  }
  for (a ? ++t.e : e.shift(), c = e.length; !e[--c]; ) e.pop();
  return t.c = e, t;
};
ge.toExponential = function(t, e) {
  var s = this, r = s.c[0];
  if (t !== Yt) {
    if (t !== ~~t || t < 0 || t > ti)
      throw Error(fo);
    for (s = ar(new s.constructor(s), ++t, e); s.c.length < t; ) s.c.push(0);
  }
  return cr(s, !0, !!r);
};
ge.toFixed = function(t, e) {
  var s = this, r = s.c[0];
  if (t !== Yt) {
    if (t !== ~~t || t < 0 || t > ti)
      throw Error(fo);
    for (s = ar(new s.constructor(s), t + s.e + 1, e), t = t + s.e + 1; s.c.length < t; ) s.c.push(0);
  }
  return cr(s, !1, !!r);
};
ge[Symbol.for("nodejs.util.inspect.custom")] = ge.toJSON = ge.toString = function() {
  var t = this, e = t.constructor;
  return cr(t, t.e <= e.NE || t.e >= e.PE, !!t.c[0]);
};
ge.toNumber = function() {
  var t = +cr(this, !0, !0);
  if (this.constructor.strict === !0 && !this.eq(t.toString()))
    throw Error(gn + "Imprecise conversion");
  return t;
};
ge.toPrecision = function(t, e) {
  var s = this, r = s.constructor, i = s.c[0];
  if (t !== Yt) {
    if (t !== ~~t || t < 1 || t > ti)
      throw Error(or + "precision");
    for (s = ar(new r(s), t, e); s.c.length < t; ) s.c.push(0);
  }
  return cr(s, t <= s.e || s.e <= r.NE || s.e >= r.PE, !!i);
};
ge.valueOf = function() {
  var t = this, e = t.constructor;
  if (e.strict === !0)
    throw Error(gn + "valueOf disallowed");
  return cr(t, t.e <= e.NE || t.e >= e.PE, !0);
};
var ci = Hu();
const Ip = {
  bigNumber(t) {
    return t ? new ci(t) : new ci(0);
  },
  multiply(t, e) {
    if (t === void 0 || e === void 0)
      return new ci(0);
    const s = new ci(t), r = new ci(e);
    return s.times(r);
  },
  formatNumberToLocalString(t, e = 2) {
    return t === void 0 ? "0.00" : typeof t == "number" ? t.toLocaleString("en-US", {
      maximumFractionDigits: e,
      minimumFractionDigits: e
    }) : parseFloat(t).toLocaleString("en-US", {
      maximumFractionDigits: e,
      minimumFractionDigits: e
    });
  },
  parseLocalStringToNumber(t) {
    return t === void 0 ? 0 : parseFloat(t.replace(/,/gu, ""));
  }
}, Ap = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
], Np = [
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: [{ type: "bool" }]
  }
], _p = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
], Sp = {
  getERC20Abi: (t) => z.USDT_CONTRACT_ADDRESSES.includes(t) ? _p : Ap,
  getSwapAbi: () => Np
}, ps = {
  validateCaipAddress(t) {
    var e;
    if (((e = t.split(":")) == null ? void 0 : e.length) !== 3)
      throw new Error("Invalid CAIP Address");
    return t;
  },
  parseCaipAddress(t) {
    const e = t.split(":");
    if (e.length !== 3)
      throw new Error(`Invalid CAIP-10 address: ${t}`);
    const [s, r, i] = e;
    if (!s || !r || !i)
      throw new Error(`Invalid CAIP-10 address: ${t}`);
    return {
      chainNamespace: s,
      chainId: r,
      address: i
    };
  },
  parseCaipNetworkId(t) {
    const e = t.split(":");
    if (e.length !== 2)
      throw new Error(`Invalid CAIP-2 network id: ${t}`);
    const [s, r] = e;
    if (!s || !r)
      throw new Error(`Invalid CAIP-2 network id: ${t}`);
    return {
      chainNamespace: s,
      chainId: r
    };
  }
}, ee = {
  WALLET_ID: "@appkit/wallet_id",
  WALLET_NAME: "@appkit/wallet_name",
  SOLANA_WALLET: "@appkit/solana_wallet",
  SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
  ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
  CONNECTED_SOCIAL: "@appkit/connected_social",
  CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
  RECENT_WALLETS: "@appkit/recent_wallets",
  DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  ACTIVE_NAMESPACE: "@appkit/active_namespace",
  CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
  CONNECTION_STATUS: "@appkit/connection_status",
  SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
  SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
  TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
  NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
  PORTFOLIO_CACHE: "@appkit/portfolio_cache",
  ENS_CACHE: "@appkit/ens_cache",
  IDENTITY_CACHE: "@appkit/identity_cache",
  PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
  CONNECTIONS: "@appkit/connections"
};
function _o(t) {
  if (!t)
    throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
  return `@appkit/${t}:connected_connector_id`;
}
const Z = {
  setItem(t, e) {
    bi() && e !== void 0 && localStorage.setItem(t, e);
  },
  getItem(t) {
    if (bi())
      return localStorage.getItem(t) || void 0;
  },
  removeItem(t) {
    bi() && localStorage.removeItem(t);
  },
  clear() {
    bi() && localStorage.clear();
  }
};
function bi() {
  return typeof window < "u" && typeof localStorage < "u";
}
function Is(t, e) {
  return e === "light" ? {
    "--w3m-accent": (t == null ? void 0 : t["--w3m-accent"]) || "hsla(231, 100%, 70%, 1)",
    "--w3m-background": "#fff"
  } : {
    "--w3m-accent": (t == null ? void 0 : t["--w3m-accent"]) || "hsla(230, 100%, 67%, 1)",
    "--w3m-background": "#121313"
  };
}
const Pp = Symbol(), Ec = Object.getPrototypeOf, la = /* @__PURE__ */ new WeakMap(), Op = (t) => t && (la.has(t) ? la.get(t) : Ec(t) === Object.prototype || Ec(t) === Array.prototype), Tp = (t) => Op(t) && t[Pp] || null, Cc = (t, e = !0) => {
  la.set(t, e);
}, ro = {}, So = (t) => typeof t == "object" && t !== null, bs = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakSet(), xp = (t = Object.is, e = (l, u) => new Proxy(l, u), s = (l) => So(l) && !vi.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), r = (l) => {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      throw l;
  }
}, i = /* @__PURE__ */ new WeakMap(), n = (l, u, d = r) => {
  const h = i.get(l);
  if ((h == null ? void 0 : h[0]) === u)
    return h[1];
  const p = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return Cc(p, !0), i.set(l, [u, p]), Reflect.ownKeys(l).forEach((g) => {
    if (Object.getOwnPropertyDescriptor(p, g))
      return;
    const f = Reflect.get(l, g), { enumerable: w } = Reflect.getOwnPropertyDescriptor(
      l,
      g
    ), y = {
      value: f,
      enumerable: w,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (vi.has(f))
      Cc(f, !1);
    else if (f instanceof Promise)
      delete y.value, y.get = () => d(f);
    else if (bs.has(f)) {
      const [b, v] = bs.get(
        f
      );
      y.value = n(
        b,
        v(),
        d
      );
    }
    Object.defineProperty(p, g, y);
  }), Object.preventExtensions(p);
}, o = /* @__PURE__ */ new WeakMap(), a = [1, 1], c = (l) => {
  if (!So(l))
    throw new Error("object required");
  const u = o.get(l);
  if (u)
    return u;
  let d = a[0];
  const h = /* @__PURE__ */ new Set(), p = (E, $ = ++a[0]) => {
    d !== $ && (d = $, h.forEach((I) => I(E, $)));
  };
  let g = a[1];
  const f = (E = ++a[1]) => (g !== E && !h.size && (g = E, y.forEach(([$]) => {
    const I = $[1](E);
    I > d && (d = I);
  })), d), w = (E) => ($, I) => {
    const L = [...$];
    L[1] = [E, ...L[1]], p(L, I);
  }, y = /* @__PURE__ */ new Map(), b = (E, $) => {
    if ((ro ? "production" : void 0) !== "production" && y.has(E))
      throw new Error("prop listener already exists");
    if (h.size) {
      const I = $[3](w(E));
      y.set(E, [$, I]);
    } else
      y.set(E, [$]);
  }, v = (E) => {
    var $;
    const I = y.get(E);
    I && (y.delete(E), ($ = I[1]) == null || $.call(I));
  }, C = (E) => (h.add(E), h.size === 1 && y.forEach(([I, L], H) => {
    if ((ro ? "production" : void 0) !== "production" && L)
      throw new Error("remove already exists");
    const _ = I[3](w(H));
    y.set(H, [I, _]);
  }), () => {
    h.delete(E), h.size === 0 && y.forEach(([I, L], H) => {
      L && (L(), y.set(H, [I]));
    });
  }), S = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), N = e(S, {
    deleteProperty(E, $) {
      const I = Reflect.get(E, $);
      v($);
      const L = Reflect.deleteProperty(E, $);
      return L && p(["delete", [$], I]), L;
    },
    set(E, $, I, L) {
      const H = Reflect.has(E, $), _ = Reflect.get(E, $, L);
      if (H && (t(_, I) || o.has(I) && t(_, o.get(I))))
        return !0;
      v($), So(I) && (I = Tp(I) || I);
      let x = I;
      if (I instanceof Promise)
        I.then((O) => {
          I.status = "fulfilled", I.value = O, p(["resolve", [$], O]);
        }).catch((O) => {
          I.status = "rejected", I.reason = O, p(["reject", [$], O]);
        });
      else {
        !bs.has(I) && s(I) && (x = c(I));
        const O = !vi.has(x) && bs.get(x);
        O && b($, O);
      }
      return Reflect.set(E, $, x, L), p(["set", [$], I, _]), !0;
    }
  });
  o.set(l, N);
  const R = [
    S,
    f,
    n,
    C
  ];
  return bs.set(N, R), Reflect.ownKeys(l).forEach((E) => {
    const $ = Object.getOwnPropertyDescriptor(
      l,
      E
    );
    "value" in $ && (N[E] = l[E], delete $.value, delete $.writable), Object.defineProperty(S, E, $);
  }), N;
}) => [
  // public functions
  c,
  // shared state
  bs,
  vi,
  // internal things
  t,
  e,
  s,
  r,
  i,
  n,
  o,
  a
], [kp] = xp();
function _e(t = {}) {
  return kp(t);
}
function Qe(t, e, s) {
  const r = bs.get(t);
  (ro ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  let i;
  const n = [], o = r[3];
  let a = !1;
  const l = o((u) => {
    n.push(u), i || (i = Promise.resolve().then(() => {
      i = void 0, a && e(n.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, l();
  };
}
function rn(t, e) {
  const s = bs.get(t);
  (ro ? "production" : void 0) !== "production" && !s && console.warn("Please use proxy object");
  const [r, i, n] = s;
  return n(r, i(), e);
}
function Zs(t) {
  return vi.add(t), t;
}
function et(t, e, s, r) {
  let i = t[e];
  return Qe(
    t,
    () => {
      const n = t[e];
      Object.is(i, n) || s(i = n);
    }
  );
}
function $p(t) {
  const e = _e({
    data: Array.from([]),
    has(s) {
      return this.data.some((r) => r[0] === s);
    },
    set(s, r) {
      const i = this.data.find((n) => n[0] === s);
      return i ? i[1] = r : this.data.push([s, r]), this;
    },
    get(s) {
      var r;
      return (r = this.data.find((i) => i[0] === s)) == null ? void 0 : r[1];
    },
    delete(s) {
      const r = this.data.findIndex((i) => i[0] === s);
      return r === -1 ? !1 : (this.data.splice(r, 1), !0);
    },
    clear() {
      this.data.splice(0);
    },
    get size() {
      return this.data.length;
    },
    toJSON() {
      return new Map(this.data);
    },
    forEach(s) {
      this.data.forEach((r) => {
        s(r[1], r[0], this);
      });
    },
    keys() {
      return this.data.map((s) => s[0]).values();
    },
    values() {
      return this.data.map((s) => s[1]).values();
    },
    entries() {
      return new Map(this.data).entries();
    },
    get [Symbol.toStringTag]() {
      return "Map";
    },
    [Symbol.iterator]() {
      return this.entries();
    }
  });
  return Object.defineProperties(e, {
    data: {
      enumerable: !1
    },
    size: {
      enumerable: !1
    },
    toJSON: {
      enumerable: !1
    }
  }), Object.seal(e), e;
}
typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN;
const Ku = [
  {
    label: "Coinbase",
    name: "coinbase",
    feeRange: "1-2%",
    url: "",
    supportedChains: ["eip155"]
  },
  {
    label: "Meld.io",
    name: "meld",
    feeRange: "1-2%",
    url: "https://meldcrypto.com",
    supportedChains: ["eip155", "solana"]
  }
], Rp = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU", Ee = {
  FOUR_MINUTES_MS: 24e4,
  TEN_SEC_MS: 1e4,
  ONE_SEC_MS: 1e3,
  BALANCE_SUPPORTED_CHAINS: ["eip155", "solana"],
  NAMES_SUPPORTED_CHAIN_NAMESPACES: ["eip155"],
  NATIVE_TOKEN_ADDRESS: {
    eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    solana: "So11111111111111111111111111111111111111111",
    polkadot: "0x",
    bip122: "0x",
    cosmos: "0x"
  },
  CONVERT_SLIPPAGE_TOLERANCE: 1,
  CONNECT_LABELS: {
    MOBILE: "Open and continue in the wallet app"
  },
  SEND_SUPPORTED_NAMESPACES: ["eip155", "solana"],
  DEFAULT_REMOTE_FEATURES: {
    swaps: ["1inch"],
    onramp: ["coinbase", "meld"],
    email: !0,
    socials: [
      "google",
      "x",
      "discord",
      "farcaster",
      "github",
      "apple",
      "facebook"
    ],
    activity: !0,
    reownBranding: !0
  },
  DEFAULT_REMOTE_FEATURES_DISABLED: {
    email: !1,
    socials: !1,
    swaps: !1,
    onramp: !1,
    activity: !1,
    reownBranding: !1
  },
  DEFAULT_FEATURES: {
    receive: !0,
    send: !0,
    emailShowWallets: !0,
    connectorTypeOrder: [
      "walletConnect",
      "recent",
      "injected",
      "featured",
      "custom",
      "external",
      "recommended"
    ],
    analytics: !0,
    allWallets: !0,
    legalCheckbox: !1,
    smartSessions: !1,
    collapseWallets: !1,
    walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
    connectMethodsOrder: void 0,
    pay: !1
  },
  DEFAULT_ACCOUNT_TYPES: {
    bip122: "payment",
    eip155: "smartAccount",
    polkadot: "eoa",
    solana: "eoa"
  },
  ADAPTER_TYPES: {
    UNIVERSAL: "universal"
  }
}, q = {
  // Cache expiry in milliseconds
  cacheExpiry: {
    portfolio: 3e4,
    nativeBalance: 3e4,
    ens: 3e5,
    identity: 3e5
  },
  isCacheExpired(t, e) {
    return Date.now() - t > e;
  },
  getActiveNetworkProps() {
    const t = q.getActiveNamespace(), e = q.getActiveCaipNetworkId(), s = e ? e.split(":")[1] : void 0, r = s ? isNaN(Number(s)) ? s : Number(s) : void 0;
    return {
      namespace: t,
      caipNetworkId: e,
      chainId: r
    };
  },
  setWalletConnectDeepLink({ name: t, href: e }) {
    try {
      Z.setItem(ee.DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  getWalletConnectDeepLink() {
    try {
      const t = Z.getItem(ee.DEEPLINK_CHOICE);
      if (t)
        return JSON.parse(t);
    } catch {
      console.info("Unable to get WalletConnect deep link");
    }
  },
  deleteWalletConnectDeepLink() {
    try {
      Z.removeItem(ee.DEEPLINK_CHOICE);
    } catch {
      console.info("Unable to delete WalletConnect deep link");
    }
  },
  setActiveNamespace(t) {
    try {
      Z.setItem(ee.ACTIVE_NAMESPACE, t);
    } catch {
      console.info("Unable to set active namespace");
    }
  },
  setActiveCaipNetworkId(t) {
    try {
      Z.setItem(ee.ACTIVE_CAIP_NETWORK_ID, t), q.setActiveNamespace(t.split(":")[0]);
    } catch {
      console.info("Unable to set active caip network id");
    }
  },
  getActiveCaipNetworkId() {
    try {
      return Z.getItem(ee.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to get active caip network id");
      return;
    }
  },
  deleteActiveCaipNetworkId() {
    try {
      Z.removeItem(ee.ACTIVE_CAIP_NETWORK_ID);
    } catch {
      console.info("Unable to delete active caip network id");
    }
  },
  deleteConnectedConnectorId(t) {
    try {
      const e = _o(t);
      Z.removeItem(e);
    } catch {
      console.info("Unable to delete connected connector id");
    }
  },
  setAppKitRecent(t) {
    try {
      const e = q.getRecentWallets();
      e.find((r) => r.id === t.id) || (e.unshift(t), e.length > 2 && e.pop(), Z.setItem(ee.RECENT_WALLETS, JSON.stringify(e)));
    } catch {
      console.info("Unable to set AppKit recent");
    }
  },
  getRecentWallets() {
    try {
      const t = Z.getItem(ee.RECENT_WALLETS);
      return t ? JSON.parse(t) : [];
    } catch {
      console.info("Unable to get AppKit recent");
    }
    return [];
  },
  setConnectedConnectorId(t, e) {
    try {
      const s = _o(t);
      Z.setItem(s, e);
    } catch {
      console.info("Unable to set Connected Connector Id");
    }
  },
  getActiveNamespace() {
    try {
      return Z.getItem(ee.ACTIVE_NAMESPACE);
    } catch {
      console.info("Unable to get active namespace");
    }
  },
  getConnectedConnectorId(t) {
    if (t)
      try {
        const e = _o(t);
        return Z.getItem(e);
      } catch {
        console.info("Unable to get connected connector id in namespace ", t);
      }
  },
  setConnectedSocialProvider(t) {
    try {
      Z.setItem(ee.CONNECTED_SOCIAL, t);
    } catch {
      console.info("Unable to set connected social provider");
    }
  },
  getConnectedSocialProvider() {
    try {
      return Z.getItem(ee.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to get connected social provider");
    }
  },
  deleteConnectedSocialProvider() {
    try {
      Z.removeItem(ee.CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to delete connected social provider");
    }
  },
  getConnectedSocialUsername() {
    try {
      return Z.getItem(ee.CONNECTED_SOCIAL_USERNAME);
    } catch {
      console.info("Unable to get connected social username");
    }
  },
  getStoredActiveCaipNetworkId() {
    var s;
    const t = Z.getItem(ee.ACTIVE_CAIP_NETWORK_ID);
    return (s = t == null ? void 0 : t.split(":")) == null ? void 0 : s[1];
  },
  setConnectionStatus(t) {
    try {
      Z.setItem(ee.CONNECTION_STATUS, t);
    } catch {
      console.info("Unable to set connection status");
    }
  },
  getConnectionStatus() {
    try {
      return Z.getItem(ee.CONNECTION_STATUS);
    } catch {
      return;
    }
  },
  getConnectedNamespaces() {
    try {
      const t = Z.getItem(ee.CONNECTED_NAMESPACES);
      return t != null && t.length ? t.split(",") : [];
    } catch {
      return [];
    }
  },
  setConnectedNamespaces(t) {
    try {
      const e = Array.from(new Set(t));
      Z.setItem(ee.CONNECTED_NAMESPACES, e.join(","));
    } catch {
      console.info("Unable to set namespaces in storage");
    }
  },
  addConnectedNamespace(t) {
    try {
      const e = q.getConnectedNamespaces();
      e.includes(t) || (e.push(t), q.setConnectedNamespaces(e));
    } catch {
      console.info("Unable to add connected namespace");
    }
  },
  removeConnectedNamespace(t) {
    try {
      const e = q.getConnectedNamespaces(), s = e.indexOf(t);
      s > -1 && (e.splice(s, 1), q.setConnectedNamespaces(e));
    } catch {
      console.info("Unable to remove connected namespace");
    }
  },
  getTelegramSocialProvider() {
    try {
      return Z.getItem(ee.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      return console.info("Unable to get telegram social provider"), null;
    }
  },
  setTelegramSocialProvider(t) {
    try {
      Z.setItem(ee.TELEGRAM_SOCIAL_PROVIDER, t);
    } catch {
      console.info("Unable to set telegram social provider");
    }
  },
  removeTelegramSocialProvider() {
    try {
      Z.removeItem(ee.TELEGRAM_SOCIAL_PROVIDER);
    } catch {
      console.info("Unable to remove telegram social provider");
    }
  },
  getBalanceCache() {
    let t = {};
    try {
      const e = Z.getItem(ee.PORTFOLIO_CACHE);
      t = e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return t;
  },
  removeAddressFromBalanceCache(t) {
    try {
      const e = q.getBalanceCache();
      Z.setItem(ee.PORTFOLIO_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", t);
    }
  },
  getBalanceCacheForCaipAddress(t) {
    try {
      const s = q.getBalanceCache()[t];
      if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.portfolio))
        return s.balance;
      q.removeAddressFromBalanceCache(t);
    } catch {
      console.info("Unable to get balance cache for address", t);
    }
  },
  updateBalanceCache(t) {
    try {
      const e = q.getBalanceCache();
      e[t.caipAddress] = t, Z.setItem(ee.PORTFOLIO_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update balance cache", t);
    }
  },
  getNativeBalanceCache() {
    let t = {};
    try {
      const e = Z.getItem(ee.NATIVE_BALANCE_CACHE);
      t = e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get balance cache");
    }
    return t;
  },
  removeAddressFromNativeBalanceCache(t) {
    try {
      const e = q.getBalanceCache();
      Z.setItem(ee.NATIVE_BALANCE_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
    } catch {
      console.info("Unable to remove address from balance cache", t);
    }
  },
  getNativeBalanceCacheForCaipAddress(t) {
    try {
      const s = q.getNativeBalanceCache()[t];
      if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.nativeBalance))
        return s;
      console.info("Discarding cache for address", t), q.removeAddressFromBalanceCache(t);
    } catch {
      console.info("Unable to get balance cache for address", t);
    }
  },
  updateNativeBalanceCache(t) {
    try {
      const e = q.getNativeBalanceCache();
      e[t.caipAddress] = t, Z.setItem(ee.NATIVE_BALANCE_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update balance cache", t);
    }
  },
  getEnsCache() {
    let t = {};
    try {
      const e = Z.getItem(ee.ENS_CACHE);
      t = e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get ens name cache");
    }
    return t;
  },
  getEnsFromCacheForAddress(t) {
    try {
      const s = q.getEnsCache()[t];
      if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.ens))
        return s.ens;
      q.removeEnsFromCache(t);
    } catch {
      console.info("Unable to get ens name from cache", t);
    }
  },
  updateEnsCache(t) {
    try {
      const e = q.getEnsCache();
      e[t.address] = t, Z.setItem(ee.ENS_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update ens name cache", t);
    }
  },
  removeEnsFromCache(t) {
    try {
      const e = q.getEnsCache();
      Z.setItem(ee.ENS_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
    } catch {
      console.info("Unable to remove ens name from cache", t);
    }
  },
  getIdentityCache() {
    let t = {};
    try {
      const e = Z.getItem(ee.IDENTITY_CACHE);
      t = e ? JSON.parse(e) : {};
    } catch {
      console.info("Unable to get identity cache");
    }
    return t;
  },
  getIdentityFromCacheForAddress(t) {
    try {
      const s = q.getIdentityCache()[t];
      if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.identity))
        return s.identity;
      q.removeIdentityFromCache(t);
    } catch {
      console.info("Unable to get identity from cache", t);
    }
  },
  updateIdentityCache(t) {
    try {
      const e = q.getIdentityCache();
      e[t.address] = {
        identity: t.identity,
        timestamp: t.timestamp
      }, Z.setItem(ee.IDENTITY_CACHE, JSON.stringify(e));
    } catch {
      console.info("Unable to update identity cache", t);
    }
  },
  removeIdentityFromCache(t) {
    try {
      const e = q.getIdentityCache();
      Z.setItem(ee.IDENTITY_CACHE, JSON.stringify({ ...e, [t]: void 0 }));
    } catch {
      console.info("Unable to remove identity from cache", t);
    }
  },
  clearAddressCache() {
    try {
      Z.removeItem(ee.PORTFOLIO_CACHE), Z.removeItem(ee.NATIVE_BALANCE_CACHE), Z.removeItem(ee.ENS_CACHE), Z.removeItem(ee.IDENTITY_CACHE);
    } catch {
      console.info("Unable to clear address cache");
    }
  },
  setPreferredAccountTypes(t) {
    try {
      Z.setItem(ee.PREFERRED_ACCOUNT_TYPES, JSON.stringify(t));
    } catch {
      console.info("Unable to set preferred account types", t);
    }
  },
  getPreferredAccountTypes() {
    try {
      const t = Z.getItem(ee.PREFERRED_ACCOUNT_TYPES);
      return t ? JSON.parse(t) : {};
    } catch {
      console.info("Unable to get preferred account types");
    }
    return {};
  },
  setConnections(t, e) {
    try {
      const s = {
        ...q.getConnections(),
        [e]: t
      };
      Z.setItem(ee.CONNECTIONS, JSON.stringify(s));
    } catch (s) {
      console.error("Unable to sync connections to storage", s);
    }
  },
  getConnections() {
    try {
      const t = Z.getItem(ee.CONNECTIONS);
      return t ? JSON.parse(t) : {};
    } catch (t) {
      return console.error("Unable to get connections from storage", t), {};
    }
  }
}, X = {
  isMobile() {
    var t;
    return this.isClient() ? !!(typeof (window == null ? void 0 : window.matchMedia) == "function" && ((t = window == null ? void 0 : window.matchMedia("(pointer:coarse)")) != null && t.matches) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
  },
  checkCaipNetwork(t, e = "") {
    return t == null ? void 0 : t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase());
  },
  isAndroid() {
    if (!this.isMobile())
      return !1;
    const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return X.isMobile() && t.includes("android");
  },
  isIos() {
    if (!this.isMobile())
      return !1;
    const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return t.includes("iphone") || t.includes("ipad");
  },
  isSafari() {
    return this.isClient() ? (window == null ? void 0 : window.navigator.userAgent.toLowerCase()).includes("safari") : !1;
  },
  isClient() {
    return typeof window < "u";
  },
  isPairingExpired(t) {
    return t ? t - Date.now() <= Ee.TEN_SEC_MS : !0;
  },
  isAllowedRetry(t, e = Ee.ONE_SEC_MS) {
    return Date.now() - t >= e;
  },
  copyToClopboard(t) {
    navigator.clipboard.writeText(t);
  },
  isIframe() {
    try {
      return (window == null ? void 0 : window.self) !== (window == null ? void 0 : window.top);
    } catch {
      return !1;
    }
  },
  isSafeApp() {
    var t, e;
    if (X.isClient() && window.self !== window.top)
      try {
        const s = (e = (t = window == null ? void 0 : window.location) == null ? void 0 : t.ancestorOrigins) == null ? void 0 : e[0], r = "https://app.safe.global";
        if (s) {
          const i = new URL(s), n = new URL(r);
          return i.hostname === n.hostname;
        }
      } catch {
        return !1;
      }
    return !1;
  },
  getPairingExpiry() {
    return Date.now() + Ee.FOUR_MINUTES_MS;
  },
  getNetworkId(t) {
    return t == null ? void 0 : t.split(":")[1];
  },
  getPlainAddress(t) {
    return t == null ? void 0 : t.split(":")[2];
  },
  async wait(t) {
    return new Promise((e) => {
      setTimeout(e, t);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debounce(t, e = 500) {
    let s;
    return (...r) => {
      function i() {
        t(...r);
      }
      s && clearTimeout(s), s = setTimeout(i, e);
    };
  },
  isHttpUrl(t) {
    return t.startsWith("http://") || t.startsWith("https://");
  },
  formatNativeUrl(t, e, s = null) {
    if (X.isHttpUrl(t))
      return this.formatUniversalUrl(t, e);
    let r = t, i = s;
    r.includes("://") || (r = t.replaceAll("/", "").replaceAll(":", ""), r = `${r}://`), r.endsWith("/") || (r = `${r}/`), i && !(i != null && i.endsWith("/")) && (i = `${i}/`), this.isTelegram() && this.isAndroid() && (e = encodeURIComponent(e));
    const n = encodeURIComponent(e);
    return {
      redirect: `${r}wc?uri=${n}`,
      redirectUniversalLink: i ? `${i}wc?uri=${n}` : void 0,
      href: r
    };
  },
  formatUniversalUrl(t, e) {
    if (!X.isHttpUrl(t))
      return this.formatNativeUrl(t, e);
    let s = t;
    s.endsWith("/") || (s = `${s}/`);
    const r = encodeURIComponent(e);
    return {
      redirect: `${s}wc?uri=${r}`,
      href: s
    };
  },
  getOpenTargetForPlatform(t) {
    return t === "popupWindow" ? t : this.isTelegram() ? q.getTelegramSocialProvider() ? "_top" : "_blank" : t;
  },
  openHref(t, e, s) {
    window == null || window.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener");
  },
  returnOpenHref(t, e, s) {
    return window == null ? void 0 : window.open(t, this.getOpenTargetForPlatform(e), s || "noreferrer noopener");
  },
  isTelegram() {
    return typeof window < "u" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (!!window.TelegramWebviewProxy || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!window.Telegram || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!window.TelegramWebviewProxyProto);
  },
  isPWA() {
    var s, r, i;
    if (typeof window > "u")
      return !1;
    const t = (r = (s = window.matchMedia) == null ? void 0 : s.call(window, "(display-mode: standalone)")) == null ? void 0 : r.matches, e = (i = window == null ? void 0 : window.navigator) == null ? void 0 : i.standalone;
    return !!(t || e);
  },
  async preloadImage(t) {
    const e = new Promise((s, r) => {
      const i = new Image();
      i.onload = s, i.onerror = r, i.crossOrigin = "anonymous", i.src = t;
    });
    return Promise.race([e, X.wait(2e3)]);
  },
  formatBalance(t, e) {
    let s = "0.000";
    if (typeof t == "string") {
      const r = Number(t);
      if (r) {
        const i = Math.floor(r * 1e3) / 1e3;
        i && (s = i.toString());
      }
    }
    return `${s}${e ? ` ${e}` : ""}`;
  },
  formatBalance2(t, e) {
    var r;
    let s;
    if (t === "0")
      s = "0";
    else if (typeof t == "string") {
      const i = Number(t);
      i && (s = (r = i.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null ? void 0 : r[0]);
    }
    return {
      value: s ?? "0",
      rest: s === "0" ? "000" : "",
      symbol: e
    };
  },
  getApiUrl() {
    return z.W3M_API_URL;
  },
  getBlockchainApiUrl() {
    return z.BLOCKCHAIN_API_RPC_URL;
  },
  getAnalyticsUrl() {
    return z.PULSE_API_URL;
  },
  getUUID() {
    return crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
      const e = Math.random() * 16 | 0;
      return (t === "x" ? e : e & 3 | 8).toString(16);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseError(t) {
    var e, s;
    return typeof t == "string" ? t : typeof ((s = (e = t == null ? void 0 : t.issues) == null ? void 0 : e[0]) == null ? void 0 : s.message) == "string" ? t.issues[0].message : t instanceof Error ? t.message : "Unknown error";
  },
  sortRequestedNetworks(t, e = []) {
    const s = {};
    return e && t && (t.forEach((r, i) => {
      s[r] = i;
    }), e.sort((r, i) => {
      const n = s[r.id], o = s[i.id];
      return n !== void 0 && o !== void 0 ? n - o : n !== void 0 ? -1 : o !== void 0 ? 1 : 0;
    })), e;
  },
  calculateBalance(t) {
    let e = 0;
    for (const s of t)
      e += s.value ?? 0;
    return e;
  },
  formatTokenBalance(t) {
    const e = t.toFixed(2), [s, r] = e.split(".");
    return { dollars: s, pennies: r };
  },
  isAddress(t, e = "eip155") {
    switch (e) {
      case "eip155":
        if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t)) {
          if (/^(?:0x)?[0-9a-f]{40}$/iu.test(t) || /^(?:0x)?[0-9A-F]{40}$/iu.test(t))
            return !0;
        } else return !1;
        return !1;
      case "solana":
        return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);
      default:
        return !1;
    }
  },
  uniqueBy(t, e) {
    const s = /* @__PURE__ */ new Set();
    return t.filter((r) => {
      const i = r[e];
      return s.has(i) ? !1 : (s.add(i), !0);
    });
  },
  generateSdkVersion(t, e, s) {
    const i = t.length === 0 ? Ee.ADAPTER_TYPES.UNIVERSAL : t.map((n) => n.adapterType).join(",");
    return `${e}-${i}-${s}`;
  },
  // eslint-disable-next-line max-params
  createAccount(t, e, s, r, i) {
    return {
      namespace: t,
      address: e,
      type: s,
      publicKey: r,
      path: i
    };
  },
  isCaipAddress(t) {
    if (typeof t != "string")
      return !1;
    const e = t.split(":"), s = e[0];
    return e.filter(Boolean).length === 3 && s in z.CHAIN_NAME_MAP;
  },
  isMac() {
    const t = window == null ? void 0 : window.navigator.userAgent.toLowerCase();
    return t.includes("macintosh") && !t.includes("safari");
  },
  formatTelegramSocialLoginUrl(t) {
    const e = `--${encodeURIComponent(window == null ? void 0 : window.location.href)}`, s = "state=";
    if (new URL(t).host === "auth.magic.link") {
      const i = "provider_authorization_url=", n = t.substring(t.indexOf(i) + i.length), o = this.injectIntoUrl(decodeURIComponent(n), s, e);
      return t.replace(n, encodeURIComponent(o));
    }
    return this.injectIntoUrl(t, s, e);
  },
  injectIntoUrl(t, e, s) {
    const r = t.indexOf(e);
    if (r === -1)
      throw new Error(`${e} parameter not found in the URL: ${t}`);
    const i = t.indexOf("&", r), n = e.length, o = i !== -1 ? i : t.length, a = t.substring(0, r + n), c = t.substring(r + n, o), l = t.substring(i), u = c + s;
    return a + u + l;
  }
};
async function li(...t) {
  const e = await fetch(...t);
  if (!e.ok)
    throw new Error(`HTTP status code: ${e.status}`, {
      cause: e
    });
  return e;
}
class mn {
  constructor({ baseUrl: e, clientId: s }) {
    this.baseUrl = e, this.clientId = s;
  }
  async get({ headers: e, signal: s, cache: r, ...i }) {
    const n = this.createUrl(i);
    return (await li(n, { method: "GET", headers: e, signal: s, cache: r })).json();
  }
  async getBlob({ headers: e, signal: s, ...r }) {
    const i = this.createUrl(r);
    return (await li(i, { method: "GET", headers: e, signal: s })).blob();
  }
  async post({ body: e, headers: s, signal: r, ...i }) {
    const n = this.createUrl(i);
    return (await li(n, {
      method: "POST",
      headers: s,
      body: e ? JSON.stringify(e) : void 0,
      signal: r
    })).json();
  }
  async put({ body: e, headers: s, signal: r, ...i }) {
    const n = this.createUrl(i);
    return (await li(n, {
      method: "PUT",
      headers: s,
      body: e ? JSON.stringify(e) : void 0,
      signal: r
    })).json();
  }
  async delete({ body: e, headers: s, signal: r, ...i }) {
    const n = this.createUrl(i);
    return (await li(n, {
      method: "DELETE",
      headers: s,
      body: e ? JSON.stringify(e) : void 0,
      signal: r
    })).json();
  }
  createUrl({ path: e, params: s }) {
    const r = new URL(e, this.baseUrl);
    return s && Object.entries(s).forEach(([i, n]) => {
      n && r.searchParams.append(i, n);
    }), this.clientId && r.searchParams.append("clientId", this.clientId), r;
  }
}
const Up = {
  getFeatureValue(t, e) {
    const s = e == null ? void 0 : e[t];
    return s === void 0 ? Ee.DEFAULT_FEATURES[t] : s;
  },
  filterSocialsByPlatform(t) {
    if (!t || !t.length)
      return t;
    if (X.isTelegram()) {
      if (X.isIos())
        return t.filter((e) => e !== "google");
      if (X.isMac())
        return t.filter((e) => e !== "x");
      if (X.isAndroid())
        return t.filter((e) => !["facebook", "x"].includes(e));
    }
    return t;
  }
}, V = _e({
  features: Ee.DEFAULT_FEATURES,
  projectId: "",
  sdkType: "appkit",
  sdkVersion: "html-wagmi-undefined",
  defaultAccountTypes: Ee.DEFAULT_ACCOUNT_TYPES,
  enableNetworkSwitch: !0,
  experimental_preferUniversalLinks: !1,
  remoteFeatures: {}
}), T = {
  state: V,
  subscribeKey(t, e) {
    return et(V, t, e);
  },
  setOptions(t) {
    Object.assign(V, t);
  },
  setRemoteFeatures(t) {
    var s;
    if (!t)
      return;
    const e = { ...V.remoteFeatures, ...t };
    V.remoteFeatures = e, (s = V.remoteFeatures) != null && s.socials && (V.remoteFeatures.socials = Up.filterSocialsByPlatform(V.remoteFeatures.socials));
  },
  setFeatures(t) {
    if (!t)
      return;
    V.features || (V.features = Ee.DEFAULT_FEATURES);
    const e = { ...V.features, ...t };
    V.features = e;
  },
  setProjectId(t) {
    V.projectId = t;
  },
  setCustomRpcUrls(t) {
    V.customRpcUrls = t;
  },
  setAllWallets(t) {
    V.allWallets = t;
  },
  setIncludeWalletIds(t) {
    V.includeWalletIds = t;
  },
  setExcludeWalletIds(t) {
    V.excludeWalletIds = t;
  },
  setFeaturedWalletIds(t) {
    V.featuredWalletIds = t;
  },
  setTokens(t) {
    V.tokens = t;
  },
  setTermsConditionsUrl(t) {
    V.termsConditionsUrl = t;
  },
  setPrivacyPolicyUrl(t) {
    V.privacyPolicyUrl = t;
  },
  setCustomWallets(t) {
    V.customWallets = t;
  },
  setIsSiweEnabled(t) {
    V.isSiweEnabled = t;
  },
  setIsUniversalProvider(t) {
    V.isUniversalProvider = t;
  },
  setSdkVersion(t) {
    V.sdkVersion = t;
  },
  setMetadata(t) {
    V.metadata = t;
  },
  setDisableAppend(t) {
    V.disableAppend = t;
  },
  setEIP6963Enabled(t) {
    V.enableEIP6963 = t;
  },
  setDebug(t) {
    V.debug = t;
  },
  setEnableWalletConnect(t) {
    V.enableWalletConnect = t;
  },
  setEnableWalletGuide(t) {
    V.enableWalletGuide = t;
  },
  setEnableAuthLogger(t) {
    V.enableAuthLogger = t;
  },
  setEnableWallets(t) {
    V.enableWallets = t;
  },
  setPreferUniversalLinks(t) {
    V.experimental_preferUniversalLinks = t;
  },
  setHasMultipleAddresses(t) {
    V.hasMultipleAddresses = t;
  },
  setSIWX(t) {
    V.siwx = t;
  },
  setConnectMethodsOrder(t) {
    V.features = {
      ...V.features,
      connectMethodsOrder: t
    };
  },
  setWalletFeaturesOrder(t) {
    V.features = {
      ...V.features,
      walletFeaturesOrder: t
    };
  },
  setSocialsOrder(t) {
    V.remoteFeatures = {
      ...V.remoteFeatures,
      socials: t
    };
  },
  setCollapseWallets(t) {
    V.features = {
      ...V.features,
      collapseWallets: t
    };
  },
  setEnableEmbedded(t) {
    V.enableEmbedded = t;
  },
  setAllowUnsupportedChain(t) {
    V.allowUnsupportedChain = t;
  },
  setManualWCControl(t) {
    V.manualWCControl = t;
  },
  setEnableNetworkSwitch(t) {
    V.enableNetworkSwitch = t;
  },
  setDefaultAccountTypes(t = {}) {
    Object.entries(t).forEach(([e, s]) => {
      s && (V.defaultAccountTypes[e] = s);
    });
  },
  setUniversalProviderConfigOverride(t) {
    V.universalProviderConfigOverride = t;
  },
  getUniversalProviderConfigOverride() {
    return V.universalProviderConfigOverride;
  },
  getSnapshot() {
    return rn(V);
  }
}, Dp = Object.freeze({
  enabled: !0,
  events: []
}), Lp = new mn({ baseUrl: X.getAnalyticsUrl(), clientId: null }), Mp = 5, Bp = 60 * 1e3, fs = _e({
  ...Dp
}), Fp = {
  state: fs,
  subscribeKey(t, e) {
    return et(fs, t, e);
  },
  async sendError(t, e) {
    if (!fs.enabled)
      return;
    const s = Date.now();
    if (fs.events.filter((n) => {
      const o = new Date(n.properties.timestamp || "").getTime();
      return s - o < Bp;
    }).length >= Mp)
      return;
    const i = {
      type: "error",
      event: e,
      properties: {
        errorType: t.name,
        errorMessage: t.message,
        stackTrace: t.stack,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    fs.events.push(i);
    try {
      if (typeof window > "u")
        return;
      const { projectId: n, sdkType: o, sdkVersion: a } = T.state;
      await Lp.post({
        path: "/e",
        params: {
          projectId: n,
          st: o,
          sv: a || "html-wagmi-4.2.2"
        },
        body: {
          eventId: X.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          props: {
            type: "error",
            event: e,
            errorType: t.name,
            errorMessage: t.message,
            stackTrace: t.stack
          }
        }
      });
    } catch {
    }
  },
  enable() {
    fs.enabled = !0;
  },
  disable() {
    fs.enabled = !1;
  },
  clearEvents() {
    fs.events = [];
  }
};
class Wr extends Error {
  constructor(e, s, r) {
    super(e), this.name = "AppKitError", this.category = s, this.originalError = r, Object.setPrototypeOf(this, Wr.prototype);
    let i = !1;
    if (r instanceof Error && typeof r.stack == "string" && r.stack) {
      const n = r.stack, o = n.indexOf(`
`);
      if (o > -1) {
        const a = n.substring(o + 1);
        this.stack = `${this.name}: ${this.message}
${a}`, i = !0;
      }
    }
    i || (Error.captureStackTrace ? Error.captureStackTrace(this, Wr) : this.stack || (this.stack = `${this.name}: ${this.message}`));
  }
}
function Ic(t, e) {
  const s = t instanceof Wr ? t : new Wr(t instanceof Error ? t.message : String(t), e, t);
  throw Fp.sendError(s, s.category), s;
}
function At(t, e = "INTERNAL_SDK_ERROR") {
  const s = {};
  return Object.keys(t).forEach((r) => {
    const i = t[r];
    if (typeof i == "function") {
      let n = i;
      i.constructor.name === "AsyncFunction" ? n = async (...o) => {
        try {
          return await i(...o);
        } catch (a) {
          return Ic(a, e);
        }
      } : n = (...o) => {
        try {
          return i(...o);
        } catch (a) {
          return Ic(a, e);
        }
      }, s[r] = n;
    } else
      s[r] = i;
  }), s;
}
const Gt = {
  PHANTOM: {
    id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
    url: "https://phantom.app"
  },
  SOLFLARE: {
    id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
    url: "https://solflare.com"
  },
  COINBASE: {
    id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    url: "https://go.cb-w.com"
  }
}, jp = {
  /**
   * Handles mobile wallet redirection for wallets that have Universal Links and doesn't support WalletConnect Deep Links.
   *
   * @param {string} id - The id of the wallet.
   * @param {ChainNamespace} namespace - The namespace of the chain.
   */
  handleMobileDeeplinkRedirect(t, e) {
    const s = window.location.href, r = encodeURIComponent(s);
    if (t === Gt.PHANTOM.id && !("phantom" in window)) {
      const i = s.startsWith("https") ? "https" : "http", n = s.split("/")[2], o = encodeURIComponent(`${i}://${n}`);
      window.location.href = `${Gt.PHANTOM.url}/ul/browse/${r}?ref=${o}`;
    }
    t === Gt.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${Gt.SOLFLARE.url}/ul/v1/browse/${r}?ref=${r}`), e === z.CHAIN.SOLANA && t === Gt.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${Gt.COINBASE.url}/dapp?cb_url=${r}`);
  }
}, ft = _e({
  walletImages: {},
  networkImages: {},
  chainImages: {},
  connectorImages: {},
  tokenImages: {},
  currencyImages: {}
}), qp = {
  state: ft,
  subscribeNetworkImages(t) {
    return Qe(ft.networkImages, () => t(ft.networkImages));
  },
  subscribeKey(t, e) {
    return et(ft, t, e);
  },
  subscribe(t) {
    return Qe(ft, () => t(ft));
  },
  setWalletImage(t, e) {
    ft.walletImages[t] = e;
  },
  setNetworkImage(t, e) {
    ft.networkImages[t] = e;
  },
  setChainImage(t, e) {
    ft.chainImages[t] = e;
  },
  setConnectorImage(t, e) {
    ft.connectorImages = { ...ft.connectorImages, [t]: e };
  },
  setTokenImage(t, e) {
    ft.tokenImages[t] = e;
  },
  setCurrencyImage(t, e) {
    ft.currencyImages[t] = e;
  }
}, Mt = At(qp), Wp = {
  // Ethereum
  eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
  // Solana
  solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
  // Polkadot
  polkadot: "",
  // Bitcoin
  bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
  // Cosmos
  cosmos: ""
}, Po = _e({
  networkImagePromises: {}
}), Vu = {
  async fetchWalletImage(t) {
    if (t)
      return await K._fetchWalletImage(t), this.getWalletImageById(t);
  },
  async fetchNetworkImage(t) {
    if (!t)
      return;
    const e = this.getNetworkImageById(t);
    return e || (Po.networkImagePromises[t] || (Po.networkImagePromises[t] = K._fetchNetworkImage(t)), await Po.networkImagePromises[t], this.getNetworkImageById(t));
  },
  getWalletImageById(t) {
    if (t)
      return Mt.state.walletImages[t];
  },
  getWalletImage(t) {
    if (t != null && t.image_url)
      return t == null ? void 0 : t.image_url;
    if (t != null && t.image_id)
      return Mt.state.walletImages[t.image_id];
  },
  getNetworkImage(t) {
    var e, s, r;
    if ((e = t == null ? void 0 : t.assets) != null && e.imageUrl)
      return (s = t == null ? void 0 : t.assets) == null ? void 0 : s.imageUrl;
    if ((r = t == null ? void 0 : t.assets) != null && r.imageId)
      return Mt.state.networkImages[t.assets.imageId];
  },
  getNetworkImageById(t) {
    if (t)
      return Mt.state.networkImages[t];
  },
  getConnectorImage(t) {
    if (t != null && t.imageUrl)
      return t.imageUrl;
    if (t != null && t.imageId)
      return Mt.state.connectorImages[t.imageId];
  },
  getChainImage(t) {
    return Mt.state.networkImages[Wp[t]];
  }
}, gs = _e({
  message: "",
  variant: "info",
  open: !1
}), zp = {
  state: gs,
  subscribeKey(t, e) {
    return et(gs, t, e);
  },
  open(t, e) {
    const { debug: s } = T.state, { shortMessage: r, longMessage: i } = t;
    s && (gs.message = r, gs.variant = e, gs.open = !0), i && console.error(typeof i == "function" ? i() : i);
  },
  close() {
    gs.open = !1, gs.message = "", gs.variant = "info";
  }
}, Fs = At(zp), Hp = X.getAnalyticsUrl(), Kp = new mn({ baseUrl: Hp, clientId: null }), Vp = ["MODAL_CREATED"], ss = _e({
  timestamp: Date.now(),
  reportedErrors: {},
  data: {
    type: "track",
    event: "MODAL_CREATED"
  }
}), Pe = {
  state: ss,
  subscribe(t) {
    return Qe(ss, () => t(ss));
  },
  getSdkProperties() {
    const { projectId: t, sdkType: e, sdkVersion: s } = T.state;
    return {
      projectId: t,
      st: e,
      sv: s || "html-wagmi-4.2.2"
    };
  },
  async _sendAnalyticsEvent(t) {
    try {
      const e = W.state.address;
      if (Vp.includes(t.data.event) || typeof window > "u")
        return;
      await Kp.post({
        path: "/e",
        params: Pe.getSdkProperties(),
        body: {
          eventId: X.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: t.timestamp,
          props: { ...t.data, address: e }
        }
      }), ss.reportedErrors.FORBIDDEN = !1;
    } catch (e) {
      e instanceof Error && e.cause instanceof Response && e.cause.status === z.HTTP_STATUS_CODES.FORBIDDEN && !ss.reportedErrors.FORBIDDEN && (Fs.open({
        shortMessage: "Invalid App Configuration",
        longMessage: `Origin ${bi() ? window.origin : "uknown"} not found on Allowlist - update configuration on cloud.reown.com`
      }, "error"), ss.reportedErrors.FORBIDDEN = !0);
    }
  },
  sendEvent(t) {
    var e;
    ss.timestamp = Date.now(), ss.data = t, (e = T.state.features) != null && e.analytics && Pe._sendAnalyticsEvent(ss);
  }
}, Gp = X.getApiUrl(), it = new mn({
  baseUrl: Gp,
  clientId: null
}), Jp = 40, Ac = 4, Yp = 20, te = _e({
  promises: {},
  page: 1,
  count: 0,
  featured: [],
  allFeatured: [],
  recommended: [],
  allRecommended: [],
  wallets: [],
  filteredWallets: [],
  search: [],
  isAnalyticsEnabled: !1,
  excludedWallets: [],
  isFetchingRecommendedWallets: !1
}), K = {
  state: te,
  subscribeKey(t, e) {
    return et(te, t, e);
  },
  _getSdkProperties() {
    const { projectId: t, sdkType: e, sdkVersion: s } = T.state;
    return {
      projectId: t,
      st: e || "appkit",
      sv: s || "html-wagmi-4.2.2"
    };
  },
  _filterOutExtensions(t) {
    return T.state.isUniversalProvider ? t.filter((e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : t;
  },
  async _fetchWalletImage(t) {
    const e = `${it.baseUrl}/getWalletImage/${t}`, s = await it.getBlob({ path: e, params: K._getSdkProperties() });
    Mt.setWalletImage(t, URL.createObjectURL(s));
  },
  async _fetchNetworkImage(t) {
    const e = `${it.baseUrl}/public/getAssetImage/${t}`, s = await it.getBlob({ path: e, params: K._getSdkProperties() });
    Mt.setNetworkImage(t, URL.createObjectURL(s));
  },
  async _fetchConnectorImage(t) {
    const e = `${it.baseUrl}/public/getAssetImage/${t}`, s = await it.getBlob({ path: e, params: K._getSdkProperties() });
    Mt.setConnectorImage(t, URL.createObjectURL(s));
  },
  async _fetchCurrencyImage(t) {
    const e = `${it.baseUrl}/public/getCurrencyImage/${t}`, s = await it.getBlob({ path: e, params: K._getSdkProperties() });
    Mt.setCurrencyImage(t, URL.createObjectURL(s));
  },
  async _fetchTokenImage(t) {
    const e = `${it.baseUrl}/public/getTokenImage/${t}`, s = await it.getBlob({ path: e, params: K._getSdkProperties() });
    Mt.setTokenImage(t, URL.createObjectURL(s));
  },
  _filterWalletsByPlatform(t) {
    return X.isMobile() ? t == null ? void 0 : t.filter((s) => s.mobile_link || s.id === Gt.COINBASE.id ? !0 : m.state.activeChain === "solana" && (s.id === Gt.SOLFLARE.id || s.id === Gt.PHANTOM.id)) : t;
  },
  async fetchProjectConfig() {
    return (await it.get({
      path: "/appkit/v1/config",
      params: K._getSdkProperties()
    })).features;
  },
  async fetchAllowedOrigins() {
    try {
      const { allowedOrigins: t } = await it.get({
        path: "/projects/v1/origins",
        params: K._getSdkProperties()
      });
      return t;
    } catch {
      return [];
    }
  },
  async fetchNetworkImages() {
    const t = m.getAllRequestedCaipNetworks(), e = t == null ? void 0 : t.map(({ assets: s }) => s == null ? void 0 : s.imageId).filter(Boolean).filter((s) => !Vu.getNetworkImageById(s));
    e && await Promise.allSettled(e.map((s) => K._fetchNetworkImage(s)));
  },
  async fetchConnectorImages() {
    const { connectors: t } = F.state, e = t.map(({ imageId: s }) => s).filter(Boolean);
    await Promise.allSettled(e.map((s) => K._fetchConnectorImage(s)));
  },
  async fetchCurrencyImages(t = []) {
    await Promise.allSettled(t.map((e) => K._fetchCurrencyImage(e)));
  },
  async fetchTokenImages(t = []) {
    await Promise.allSettled(t.map((e) => K._fetchTokenImage(e)));
  },
  async fetchWallets(t) {
    var n;
    const e = t.exclude ?? [];
    K._getSdkProperties().sv.startsWith("html-core-") && e.push(...Object.values(Gt).map((o) => o.id));
    const r = await it.get({
      path: "/getWallets",
      params: {
        ...K._getSdkProperties(),
        ...t,
        page: String(t.page),
        entries: String(t.entries),
        include: (n = t.include) == null ? void 0 : n.join(","),
        exclude: e.join(",")
      }
    });
    return {
      data: K._filterWalletsByPlatform(r == null ? void 0 : r.data) || [],
      // Keep original count for display on main page
      count: r == null ? void 0 : r.count
    };
  },
  async fetchFeaturedWallets() {
    const { featuredWalletIds: t } = T.state;
    if (t != null && t.length) {
      const e = {
        ...K._getSdkProperties(),
        page: 1,
        entries: (t == null ? void 0 : t.length) ?? Ac,
        include: t
      }, { data: s } = await K.fetchWallets(e), r = [...s].sort((n, o) => t.indexOf(n.id) - t.indexOf(o.id)), i = r.map((n) => n.image_id).filter(Boolean);
      await Promise.allSettled(i.map((n) => K._fetchWalletImage(n))), te.featured = r, te.allFeatured = r;
    }
  },
  async fetchRecommendedWallets() {
    try {
      te.isFetchingRecommendedWallets = !0;
      const { includeWalletIds: t, excludeWalletIds: e, featuredWalletIds: s } = T.state, r = [...e ?? [], ...s ?? []].filter(Boolean), i = m.getRequestedCaipNetworkIds().join(","), n = {
        page: 1,
        entries: Ac,
        include: t,
        exclude: r,
        chains: i
      }, { data: o, count: a } = await K.fetchWallets(n), c = q.getRecentWallets(), l = o.map((d) => d.image_id).filter(Boolean), u = c.map((d) => d.image_id).filter(Boolean);
      await Promise.allSettled([...l, ...u].map((d) => K._fetchWalletImage(d))), te.recommended = o, te.allRecommended = o, te.count = a ?? 0;
    } catch {
    } finally {
      te.isFetchingRecommendedWallets = !1;
    }
  },
  async fetchWalletsByPage({ page: t }) {
    const { includeWalletIds: e, excludeWalletIds: s, featuredWalletIds: r } = T.state, i = m.getRequestedCaipNetworkIds().join(","), n = [
      ...te.recommended.map(({ id: u }) => u),
      ...s ?? [],
      ...r ?? []
    ].filter(Boolean), o = {
      page: t,
      entries: Jp,
      include: e,
      exclude: n,
      chains: i
    }, { data: a, count: c } = await K.fetchWallets(o), l = a.slice(0, Yp).map((u) => u.image_id).filter(Boolean);
    await Promise.allSettled(l.map((u) => K._fetchWalletImage(u))), te.wallets = X.uniqueBy([...te.wallets, ...K._filterOutExtensions(a)], "id").filter((u) => {
      var d;
      return (d = u.chains) == null ? void 0 : d.some((h) => i.includes(h));
    }), te.count = c > te.count ? c : te.count, te.page = t;
  },
  async initializeExcludedWallets({ ids: t }) {
    const e = {
      page: 1,
      entries: t.length,
      include: t
    }, { data: s } = await K.fetchWallets(e);
    s && s.forEach((r) => {
      te.excludedWallets.push({ rdns: r.rdns, name: r.name });
    });
  },
  async searchWallet({ search: t, badge: e }) {
    const { includeWalletIds: s, excludeWalletIds: r } = T.state, i = m.getRequestedCaipNetworkIds().join(",");
    te.search = [];
    const n = {
      page: 1,
      entries: 100,
      search: t == null ? void 0 : t.trim(),
      badge_type: e,
      include: s,
      exclude: r,
      chains: i
    }, { data: o } = await K.fetchWallets(n);
    Pe.sendEvent({
      type: "track",
      event: "SEARCH_WALLET",
      properties: { badge: e ?? "", search: t ?? "" }
    });
    const a = o.map((c) => c.image_id).filter(Boolean);
    await Promise.allSettled([
      ...a.map((c) => K._fetchWalletImage(c)),
      X.wait(300)
    ]), te.search = K._filterOutExtensions(o);
  },
  initPromise(t, e) {
    const s = te.promises[t];
    return s || (te.promises[t] = e());
  },
  prefetch({ fetchConnectorImages: t = !0, fetchFeaturedWallets: e = !0, fetchRecommendedWallets: s = !0, fetchNetworkImages: r = !0 } = {}) {
    const i = [
      t && K.initPromise("connectorImages", K.fetchConnectorImages),
      e && K.initPromise("featuredWallets", K.fetchFeaturedWallets),
      s && K.initPromise("recommendedWallets", K.fetchRecommendedWallets),
      r && K.initPromise("networkImages", K.fetchNetworkImages)
    ].filter(Boolean);
    return Promise.allSettled(i);
  },
  prefetchAnalyticsConfig() {
    var t;
    (t = T.state.features) != null && t.analytics && K.fetchAnalyticsConfig();
  },
  async fetchAnalyticsConfig() {
    try {
      const { isAnalyticsEnabled: t } = await it.get({
        path: "/getAnalyticsConfig",
        params: K._getSdkProperties()
      });
      T.setFeatures({ analytics: t });
    } catch {
      T.setFeatures({ analytics: !1 });
    }
  },
  filterByNamespaces(t) {
    if (!(t != null && t.length)) {
      te.featured = te.allFeatured, te.recommended = te.allRecommended;
      return;
    }
    const e = m.getRequestedCaipNetworkIds().join(",");
    te.featured = te.allFeatured.filter((s) => {
      var r;
      return (r = s.chains) == null ? void 0 : r.some((i) => e.includes(i));
    }), te.recommended = te.allRecommended.filter((s) => {
      var r;
      return (r = s.chains) == null ? void 0 : r.some((i) => e.includes(i));
    }), te.filteredWallets = te.wallets.filter((s) => {
      var r;
      return (r = s.chains) == null ? void 0 : r.some((i) => e.includes(i));
    });
  },
  clearFilterByNamespaces() {
    te.filteredWallets = [];
  },
  setFilterByNamespace(t) {
    if (!t) {
      te.featured = te.allFeatured, te.recommended = te.allRecommended;
      return;
    }
    const e = m.getRequestedCaipNetworkIds().join(",");
    te.featured = te.allFeatured.filter((s) => {
      var r;
      return (r = s.chains) == null ? void 0 : r.some((i) => e.includes(i));
    }), te.recommended = te.allRecommended.filter((s) => {
      var r;
      return (r = s.chains) == null ? void 0 : r.some((i) => e.includes(i));
    }), te.filteredWallets = te.wallets.filter((s) => {
      var r;
      return (r = s.chains) == null ? void 0 : r.some((i) => e.includes(i));
    });
  }
}, me = _e({
  view: "Connect",
  history: ["Connect"],
  transactionStack: []
}), Xp = {
  state: me,
  subscribeKey(t, e) {
    return et(me, t, e);
  },
  pushTransactionStack(t) {
    me.transactionStack.push(t);
  },
  popTransactionStack(t) {
    const e = me.transactionStack.pop();
    if (!e)
      return;
    const { onSuccess: s, onError: r, onCancel: i } = e;
    switch (t) {
      case "success":
        s == null || s();
        break;
      case "error":
        r == null || r(), re.goBack();
        break;
      case "cancel":
        i == null || i(), re.goBack();
        break;
    }
  },
  push(t, e) {
    t !== me.view && (me.view = t, me.history.push(t), me.data = e);
  },
  reset(t, e) {
    me.view = t, me.history = [t], me.data = e;
  },
  replace(t, e) {
    me.history.at(-1) === t || (me.view = t, me.history[me.history.length - 1] = t, me.data = e);
  },
  goBack() {
    var r;
    const t = m.state.activeCaipAddress, e = re.state.view === "ConnectingFarcaster", s = !t && e;
    if (me.history.length > 1) {
      me.history.pop();
      const [i] = me.history.slice(-1);
      i && (t && i === "Connect" ? me.view = "Account" : me.view = i);
    } else
      ze.close();
    (r = me.data) != null && r.wallet && (me.data.wallet = void 0), setTimeout(() => {
      var i, n, o;
      if (s) {
        W.setFarcasterUrl(void 0, m.state.activeChain);
        const a = F.getAuthConnector();
        (i = a == null ? void 0 : a.provider) == null || i.reload();
        const c = rn(T.state);
        (o = (n = a == null ? void 0 : a.provider) == null ? void 0 : n.syncDappData) == null || o.call(n, {
          metadata: c.metadata,
          sdkVersion: c.sdkVersion,
          projectId: c.projectId,
          sdkType: c.sdkType
        });
      }
    }, 100);
  },
  goBackToIndex(t) {
    if (me.history.length > 1) {
      me.history = me.history.slice(0, t + 1);
      const [e] = me.history.slice(-1);
      e && (me.view = e);
    }
  },
  goBackOrCloseModal() {
    re.state.history.length > 1 ? re.goBack() : ze.close();
  }
}, re = At(Xp), rs = _e({
  themeMode: "dark",
  themeVariables: {},
  w3mThemeVariables: void 0
}), ua = {
  state: rs,
  subscribe(t) {
    return Qe(rs, () => t(rs));
  },
  setThemeMode(t) {
    rs.themeMode = t;
    try {
      const e = F.getAuthConnector();
      if (e) {
        const s = ua.getSnapshot().themeVariables;
        e.provider.syncTheme({
          themeMode: t,
          themeVariables: s,
          w3mThemeVariables: Is(s, t)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  setThemeVariables(t) {
    rs.themeVariables = { ...rs.themeVariables, ...t };
    try {
      const e = F.getAuthConnector();
      if (e) {
        const s = ua.getSnapshot().themeVariables;
        e.provider.syncTheme({
          themeVariables: s,
          w3mThemeVariables: Is(rs.themeVariables, rs.themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  getSnapshot() {
    return rn(rs);
  }
}, wt = At(ua), Gu = {
  eip155: void 0,
  solana: void 0,
  polkadot: void 0,
  bip122: void 0,
  cosmos: void 0
}, ae = _e({
  allConnectors: [],
  connectors: [],
  activeConnector: void 0,
  filterByNamespace: void 0,
  activeConnectorIds: { ...Gu },
  filterByNamespaceMap: {
    eip155: !0,
    solana: !0,
    polkadot: !0,
    bip122: !0,
    cosmos: !0
  }
}), Zp = {
  state: ae,
  subscribe(t) {
    return Qe(ae, () => {
      t(ae);
    });
  },
  subscribeKey(t, e) {
    return et(ae, t, e);
  },
  initialize(t) {
    t.forEach((e) => {
      const s = q.getConnectedConnectorId(e);
      s && F.setConnectorId(s, e);
    });
  },
  setActiveConnector(t) {
    t && (ae.activeConnector = Zs(t));
  },
  setConnectors(t) {
    t.filter((i) => !ae.allConnectors.some((n) => n.id === i.id && F.getConnectorName(n.name) === F.getConnectorName(i.name) && n.chain === i.chain)).forEach((i) => {
      i.type !== "MULTI_CHAIN" && ae.allConnectors.push(Zs(i));
    });
    const s = F.getEnabledNamespaces(), r = F.getEnabledConnectors(s);
    ae.connectors = F.mergeMultiChainConnectors(r);
  },
  filterByNamespaces(t) {
    Object.keys(ae.filterByNamespaceMap).forEach((e) => {
      ae.filterByNamespaceMap[e] = !1;
    }), t.forEach((e) => {
      ae.filterByNamespaceMap[e] = !0;
    }), F.updateConnectorsForEnabledNamespaces();
  },
  filterByNamespace(t, e) {
    ae.filterByNamespaceMap[t] = e, F.updateConnectorsForEnabledNamespaces();
  },
  updateConnectorsForEnabledNamespaces() {
    const t = F.getEnabledNamespaces(), e = F.getEnabledConnectors(t), s = F.areAllNamespacesEnabled();
    ae.connectors = F.mergeMultiChainConnectors(e), s ? K.clearFilterByNamespaces() : K.filterByNamespaces(t);
  },
  getEnabledNamespaces() {
    return Object.entries(ae.filterByNamespaceMap).filter(([t, e]) => e).map(([t]) => t);
  },
  getEnabledConnectors(t) {
    return ae.allConnectors.filter((e) => t.includes(e.chain));
  },
  areAllNamespacesEnabled() {
    return Object.values(ae.filterByNamespaceMap).every((t) => t);
  },
  mergeMultiChainConnectors(t) {
    const e = F.generateConnectorMapByName(t), s = [];
    return e.forEach((r) => {
      const i = r[0], n = (i == null ? void 0 : i.id) === z.CONNECTOR_ID.AUTH;
      r.length > 1 && i ? s.push({
        name: i.name,
        imageUrl: i.imageUrl,
        imageId: i.imageId,
        connectors: [...r],
        type: n ? "AUTH" : "MULTI_CHAIN",
        // These values are just placeholders, we don't use them in multi-chain connector select screen
        chain: "eip155",
        id: (i == null ? void 0 : i.id) || ""
      }) : i && s.push(i);
    }), s;
  },
  generateConnectorMapByName(t) {
    const e = /* @__PURE__ */ new Map();
    return t.forEach((s) => {
      const { name: r } = s, i = F.getConnectorName(r);
      if (!i)
        return;
      const n = e.get(i) || [];
      n.find((a) => a.chain === s.chain) || n.push(s), e.set(i, n);
    }), e;
  },
  getConnectorName(t) {
    return t && ({
      "Trust Wallet": "Trust"
    }[t] || t);
  },
  getUniqueConnectorsByName(t) {
    const e = [];
    return t.forEach((s) => {
      e.find((r) => r.chain === s.chain) || e.push(s);
    }), e;
  },
  addConnector(t) {
    var e, s, r;
    if (t.id === z.CONNECTOR_ID.AUTH) {
      const i = t, n = rn(T.state), o = wt.getSnapshot().themeMode, a = wt.getSnapshot().themeVariables;
      (s = (e = i == null ? void 0 : i.provider) == null ? void 0 : e.syncDappData) == null || s.call(e, {
        metadata: n.metadata,
        sdkVersion: n.sdkVersion,
        projectId: n.projectId,
        sdkType: n.sdkType
      }), (r = i == null ? void 0 : i.provider) == null || r.syncTheme({
        themeMode: o,
        themeVariables: a,
        w3mThemeVariables: Is(a, o)
      }), F.setConnectors([t]);
    } else
      F.setConnectors([t]);
  },
  getAuthConnector(t) {
    var r;
    const e = t || m.state.activeChain, s = ae.connectors.find((i) => i.id === z.CONNECTOR_ID.AUTH);
    if (s)
      return (r = s == null ? void 0 : s.connectors) != null && r.length ? s.connectors.find((n) => n.chain === e) : s;
  },
  getAnnouncedConnectorRdns() {
    return ae.connectors.filter((t) => t.type === "ANNOUNCED").map((t) => {
      var e;
      return (e = t.info) == null ? void 0 : e.rdns;
    });
  },
  getConnectorById(t) {
    return ae.allConnectors.find((e) => e.id === t);
  },
  getConnector(t, e) {
    return ae.allConnectors.filter((r) => r.chain === m.state.activeChain).find((r) => {
      var i;
      return r.explorerId === t || ((i = r.info) == null ? void 0 : i.rdns) === e;
    });
  },
  syncIfAuthConnector(t) {
    var n, o;
    if (t.id !== "ID_AUTH")
      return;
    const e = t, s = rn(T.state), r = wt.getSnapshot().themeMode, i = wt.getSnapshot().themeVariables;
    (o = (n = e == null ? void 0 : e.provider) == null ? void 0 : n.syncDappData) == null || o.call(n, {
      metadata: s.metadata,
      sdkVersion: s.sdkVersion,
      sdkType: s.sdkType,
      projectId: s.projectId
    }), e.provider.syncTheme({
      themeMode: r,
      themeVariables: i,
      w3mThemeVariables: Is(i, r)
    });
  },
  /**
   * Returns the connectors filtered by namespace.
   * @param namespace - The namespace to filter the connectors by.
   * @returns ConnectorWithProviders[].
   */
  getConnectorsByNamespace(t) {
    const e = ae.allConnectors.filter((s) => s.chain === t);
    return F.mergeMultiChainConnectors(e);
  },
  selectWalletConnector(t) {
    const e = F.getConnector(t.id, t.rdns), s = m.state.activeChain;
    jp.handleMobileDeeplinkRedirect((e == null ? void 0 : e.explorerId) || t.id, s), e ? re.push("ConnectingExternal", { connector: e }) : re.push("ConnectingWalletConnect", { wallet: t });
  },
  /**
   * Returns the connectors. If a namespace is provided, the connectors are filtered by namespace.
   * @param namespace - The namespace to filter the connectors by. If not provided, all connectors are returned.
   * @returns ConnectorWithProviders[].
   */
  getConnectors(t) {
    return t ? F.getConnectorsByNamespace(t) : F.mergeMultiChainConnectors(ae.allConnectors);
  },
  /**
   * Sets the filter by namespace and updates the connectors.
   * @param namespace - The namespace to filter the connectors by.
   */
  setFilterByNamespace(t) {
    ae.filterByNamespace = t, ae.connectors = F.getConnectors(t), K.setFilterByNamespace(t);
  },
  setConnectorId(t, e) {
    t && (ae.activeConnectorIds = {
      ...ae.activeConnectorIds,
      [e]: t
    }, q.setConnectedConnectorId(e, t));
  },
  removeConnectorId(t) {
    ae.activeConnectorIds = {
      ...ae.activeConnectorIds,
      [t]: void 0
    }, q.deleteConnectedConnectorId(t);
  },
  getConnectorId(t) {
    if (t)
      return ae.activeConnectorIds[t];
  },
  isConnected(t) {
    return t ? !!ae.activeConnectorIds[t] : Object.values(ae.activeConnectorIds).some((e) => !!e);
  },
  resetConnectorIds() {
    ae.activeConnectorIds = { ...Gu };
  }
}, F = At(Zp), Qp = "https://secure.walletconnect.org/sdk";
typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL;
typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL;
typeof process < "u" && typeof process.env < "u" && process.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION;
const _i = {
  ACCOUNT_TYPES: {
    SMART_ACCOUNT: "smartAccount"
  }
}, Ms = Object.freeze({
  message: "",
  variant: "success",
  svg: void 0,
  open: !1,
  autoClose: !0
}), Ue = _e({
  ...Ms
}), ef = {
  state: Ue,
  subscribeKey(t, e) {
    return et(Ue, t, e);
  },
  showLoading(t, e = {}) {
    this._showMessage({ message: t, variant: "loading", ...e });
  },
  showSuccess(t) {
    this._showMessage({ message: t, variant: "success" });
  },
  showSvg(t, e) {
    this._showMessage({ message: t, svg: e });
  },
  showError(t) {
    const e = X.parseError(t);
    this._showMessage({ message: e, variant: "error" });
  },
  hide() {
    Ue.message = Ms.message, Ue.variant = Ms.variant, Ue.svg = Ms.svg, Ue.open = Ms.open, Ue.autoClose = Ms.autoClose;
  },
  _showMessage({ message: t, svg: e, variant: s = "success", autoClose: r = Ms.autoClose }) {
    Ue.open ? (Ue.open = !1, setTimeout(() => {
      Ue.message = t, Ue.variant = s, Ue.svg = e, Ue.open = !0, Ue.autoClose = r;
    }, 150)) : (Ue.message = t, Ue.variant = s, Ue.svg = e, Ue.open = !0, Ue.autoClose = r);
  }
}, Bt = ef, Ie = _e({
  transactions: [],
  coinbaseTransactions: {},
  transactionsByYear: {},
  lastNetworkInView: void 0,
  loading: !1,
  empty: !1,
  next: void 0
}), tf = {
  state: Ie,
  subscribe(t) {
    return Qe(Ie, () => t(Ie));
  },
  setLastNetworkInView(t) {
    Ie.lastNetworkInView = t;
  },
  async fetchTransactions(t, e) {
    var s, r;
    if (!t)
      throw new Error("Transactions can't be fetched without an accountAddress");
    Ie.loading = !0;
    try {
      const i = await J.fetchTransactions({
        account: t,
        cursor: Ie.next,
        onramp: e,
        // Coinbase transaction history state updates require the latest data
        cache: e === "coinbase" ? "no-cache" : void 0,
        chainId: (s = m.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId
      }), n = Ei.filterSpamTransactions(i.data), o = Ei.filterByConnectedChain(n), a = [...Ie.transactions, ...o];
      Ie.loading = !1, e === "coinbase" ? Ie.coinbaseTransactions = Ei.groupTransactionsByYearAndMonth(Ie.coinbaseTransactions, i.data) : (Ie.transactions = a, Ie.transactionsByYear = Ei.groupTransactionsByYearAndMonth(Ie.transactionsByYear, o)), Ie.empty = a.length === 0, Ie.next = i.next ? i.next : void 0;
    } catch {
      const n = m.state.activeChain;
      Pe.sendEvent({
        type: "track",
        event: "ERROR_FETCH_TRANSACTIONS",
        properties: {
          address: t,
          projectId: T.state.projectId,
          cursor: Ie.next,
          isSmartAccount: ((r = W.state.preferredAccountTypes) == null ? void 0 : r[n]) === _i.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      }), Bt.showError("Failed to fetch transactions"), Ie.loading = !1, Ie.empty = !0, Ie.next = void 0;
    }
  },
  groupTransactionsByYearAndMonth(t = {}, e = []) {
    const s = t;
    return e.forEach((r) => {
      const i = new Date(r.metadata.minedAt).getFullYear(), n = new Date(r.metadata.minedAt).getMonth(), o = s[i] ?? {}, c = (o[n] ?? []).filter((l) => l.id !== r.id);
      s[i] = {
        ...o,
        [n]: [...c, r].sort((l, u) => new Date(u.metadata.minedAt).getTime() - new Date(l.metadata.minedAt).getTime())
      };
    }), s;
  },
  filterSpamTransactions(t) {
    return t.filter((e) => !e.transfers.every((r) => {
      var i;
      return ((i = r.nft_info) == null ? void 0 : i.flags.is_spam) === !0;
    }));
  },
  filterByConnectedChain(t) {
    var r;
    const e = (r = m.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId;
    return t.filter((i) => i.metadata.chain === e);
  },
  clearCursor() {
    Ie.next = void 0;
  },
  resetTransactions() {
    Ie.transactions = [], Ie.transactionsByYear = {}, Ie.lastNetworkInView = void 0, Ie.loading = !1, Ie.empty = !1, Ie.next = void 0;
  }
}, Ei = At(tf, "API_ERROR"), ye = _e({
  connections: /* @__PURE__ */ new Map(),
  wcError: !1,
  buffering: !1,
  status: "disconnected"
});
let Rs;
const sf = {
  state: ye,
  subscribeKey(t, e) {
    return et(ye, t, e);
  },
  _getClient() {
    return ye._client;
  },
  setClient(t) {
    ye._client = Zs(t);
  },
  async connectWalletConnect() {
    var t, e, s, r;
    if (X.isTelegram() || X.isSafari() && X.isIos()) {
      if (Rs) {
        await Rs, Rs = void 0;
        return;
      }
      if (!X.isPairingExpired(ye == null ? void 0 : ye.wcPairingExpiry)) {
        const i = ye.wcUri;
        ye.wcUri = i;
        return;
      }
      Rs = (e = (t = Y._getClient()) == null ? void 0 : t.connectWalletConnect) == null ? void 0 : e.call(t).catch(() => {
      }), Y.state.status = "connecting", await Rs, Rs = void 0, ye.wcPairingExpiry = void 0, Y.state.status = "connected";
    } else
      await ((r = (s = Y._getClient()) == null ? void 0 : s.connectWalletConnect) == null ? void 0 : r.call(s));
  },
  async connectExternal(t, e, s = !0) {
    var r, i;
    await ((i = (r = Y._getClient()) == null ? void 0 : r.connectExternal) == null ? void 0 : i.call(r, t)), s && m.setActiveNamespace(e);
  },
  async reconnectExternal(t) {
    var s, r;
    await ((r = (s = Y._getClient()) == null ? void 0 : s.reconnectExternal) == null ? void 0 : r.call(s, t));
    const e = t.chain || m.state.activeChain;
    e && F.setConnectorId(t.id, e);
  },
  async setPreferredAccountType(t, e) {
    var r;
    ze.setLoading(!0, m.state.activeChain);
    const s = F.getAuthConnector();
    s && (W.setPreferredAccountType(t, e), await s.provider.setPreferredAccount(t), q.setPreferredAccountTypes(W.state.preferredAccountTypes ?? { [e]: t }), await Y.reconnectExternal(s), ze.setLoading(!1, m.state.activeChain), Pe.sendEvent({
      type: "track",
      event: "SET_PREFERRED_ACCOUNT_TYPE",
      properties: {
        accountType: t,
        network: ((r = m.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId) || ""
      }
    }));
  },
  async signMessage(t) {
    var e;
    return (e = Y._getClient()) == null ? void 0 : e.signMessage(t);
  },
  parseUnits(t, e) {
    var s;
    return (s = Y._getClient()) == null ? void 0 : s.parseUnits(t, e);
  },
  formatUnits(t, e) {
    var s;
    return (s = Y._getClient()) == null ? void 0 : s.formatUnits(t, e);
  },
  async sendTransaction(t) {
    var e;
    return (e = Y._getClient()) == null ? void 0 : e.sendTransaction(t);
  },
  async getCapabilities(t) {
    var e;
    return (e = Y._getClient()) == null ? void 0 : e.getCapabilities(t);
  },
  async grantPermissions(t) {
    var e;
    return (e = Y._getClient()) == null ? void 0 : e.grantPermissions(t);
  },
  async walletGetAssets(t) {
    var e;
    return ((e = Y._getClient()) == null ? void 0 : e.walletGetAssets(t)) ?? {};
  },
  async estimateGas(t) {
    var e;
    return (e = Y._getClient()) == null ? void 0 : e.estimateGas(t);
  },
  async writeContract(t) {
    var e;
    return (e = Y._getClient()) == null ? void 0 : e.writeContract(t);
  },
  async getEnsAddress(t) {
    var e;
    return (e = Y._getClient()) == null ? void 0 : e.getEnsAddress(t);
  },
  async getEnsAvatar(t) {
    var e;
    return (e = Y._getClient()) == null ? void 0 : e.getEnsAvatar(t);
  },
  checkInstalled(t) {
    var e, s;
    return ((s = (e = Y._getClient()) == null ? void 0 : e.checkInstalled) == null ? void 0 : s.call(e, t)) || !1;
  },
  resetWcConnection() {
    ye.wcUri = void 0, ye.wcPairingExpiry = void 0, ye.wcLinking = void 0, ye.recentWallet = void 0, ye.status = "disconnected", Ei.resetTransactions(), q.deleteWalletConnectDeepLink();
  },
  resetUri() {
    ye.wcUri = void 0, ye.wcPairingExpiry = void 0, Rs = void 0;
  },
  finalizeWcConnection() {
    var s, r;
    const { wcLinking: t, recentWallet: e } = Y.state;
    t && q.setWalletConnectDeepLink(t), e && q.setAppKitRecent(e), Pe.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      properties: {
        method: t ? "mobile" : "qrcode",
        name: ((r = (s = re.state.data) == null ? void 0 : s.wallet) == null ? void 0 : r.name) || "Unknown"
      }
    });
  },
  setWcBasic(t) {
    ye.wcBasic = t;
  },
  setUri(t) {
    ye.wcUri = t, ye.wcPairingExpiry = X.getPairingExpiry();
  },
  setWcLinking(t) {
    ye.wcLinking = t;
  },
  setWcError(t) {
    ye.wcError = t, ye.buffering = !1;
  },
  setRecentWallet(t) {
    ye.recentWallet = t;
  },
  setBuffering(t) {
    ye.buffering = t;
  },
  setStatus(t) {
    ye.status = t;
  },
  async disconnect(t) {
    var e;
    try {
      await ((e = Y._getClient()) == null ? void 0 : e.disconnect(t));
    } catch (s) {
      throw new Wr("Failed to disconnect", "INTERNAL_SDK_ERROR", s);
    }
  },
  setConnections(t, e) {
    ye.connections.set(e, t);
  },
  switchAccount({ connection: t, address: e, namespace: s }) {
    if (F.state.activeConnectorIds[s] === t.connectorId) {
      const n = m.state.activeCaipNetwork;
      if (n) {
        const o = `${s}:${n.id}:${e}`;
        W.setCaipAddress(o, s);
      } else
        console.warn(`No current network found for namespace "${s}"`);
    } else {
      const n = F.getConnector(t.connectorId);
      n ? Y.connectExternal(n, s) : console.warn(`No connector found for namespace "${s}"`);
    }
  }
}, Y = At(sf), dr = _e({
  loading: !1,
  open: !1,
  selectedNetworkId: void 0,
  activeChain: void 0,
  initialized: !1
}), Ns = {
  state: dr,
  subscribe(t) {
    return Qe(dr, () => t(dr));
  },
  subscribeOpen(t) {
    return et(dr, "open", t);
  },
  set(t) {
    Object.assign(dr, { ...dr, ...t });
  }
}, Oo = {
  /**
   * Creates a Balance object from an ERC7811 Asset object
   * @param asset - Asset object to convert
   * @param chainId - Chain ID in CAIP-2 format
   * @returns Balance object
   */
  createBalance(t, e) {
    const s = {
      name: t.metadata.name || "",
      symbol: t.metadata.symbol || "",
      decimals: t.metadata.decimals || 0,
      value: t.metadata.value || 0,
      price: t.metadata.price || 0,
      iconUrl: t.metadata.iconUrl || ""
    };
    return {
      name: s.name,
      symbol: s.symbol,
      chainId: e,
      address: t.address === "native" ? void 0 : this.convertAddressToCAIP10Address(t.address, e),
      value: s.value,
      price: s.price,
      quantity: {
        decimals: s.decimals.toString(),
        numeric: this.convertHexToBalance({
          hex: t.balance,
          decimals: s.decimals
        })
      },
      iconUrl: s.iconUrl
    };
  },
  /**
   * Converts a hex string to a Balance object
   * @param hex - Hex string to convert
   * @param decimals - Number of decimals to use
   * @returns Balance object
   */
  convertHexToBalance({ hex: t, decimals: e }) {
    return Zh(BigInt(t), e);
  },
  /**
   * Converts an address to a CAIP-10 address
   * @param address - Address to convert
   * @param chainId - Chain ID in CAIP-2 format
   * @returns CAIP-10 address
   */
  convertAddressToCAIP10Address(t, e) {
    return `${e}:${t}`;
  },
  /**
   *  Creates a CAIP-2 Chain ID from a chain ID and namespace
   * @param chainId  - Chain ID in hex format
   * @param namespace  - Chain namespace
   * @returns
   */
  createCAIP2ChainId(t, e) {
    return `${e}:${parseInt(t, 16)}`;
  },
  /**
   * Gets the chain ID in hex format from a CAIP-2 Chain ID
   * @param caip2ChainId - CAIP-2 Chain ID
   * @returns Chain ID in hex format
   */
  getChainIdHexFromCAIP2ChainId(t) {
    const e = t.split(":");
    if (e.length < 2 || !e[1])
      return "0x0";
    const s = e[1], r = parseInt(s, 10);
    return isNaN(r) ? "0x0" : `0x${r.toString(16)}`;
  },
  /**
   * Checks if a response is a valid WalletGetAssetsResponse
   * @param response - The response to check
   * @returns True if the response is a valid WalletGetAssetsResponse, false otherwise
   */
  isWalletGetAssetsResponse(t) {
    return typeof t != "object" || t === null ? !1 : Object.values(t).every((e) => Array.isArray(e) && e.every((s) => this.isValidAsset(s)));
  },
  /**
   * Checks if an asset object is valid.
   * @param asset - The asset object to check.
   * @returns True if the asset is valid, false otherwise.
   */
  isValidAsset(t) {
    return typeof t == "object" && t !== null && typeof t.address == "string" && typeof t.balance == "string" && (t.type === "ERC20" || t.type === "NATIVE") && typeof t.metadata == "object" && t.metadata !== null && typeof t.metadata.name == "string" && typeof t.metadata.symbol == "string" && typeof t.metadata.decimals == "number" && typeof t.metadata.price == "number" && typeof t.metadata.iconUrl == "string";
  }
}, Nc = {
  async getMyTokensWithBalance(t) {
    const e = W.state.address, s = m.state.activeCaipNetwork;
    if (!e || !s)
      return [];
    if (s.chainNamespace === "eip155") {
      const i = await this.getEIP155Balances(e, s);
      if (i)
        return this.filterLowQualityTokens(i);
    }
    const r = await J.getBalance(e, s.caipNetworkId, t);
    return this.filterLowQualityTokens(r.balances);
  },
  async getEIP155Balances(t, e) {
    var s, r;
    try {
      const i = Oo.getChainIdHexFromCAIP2ChainId(e.caipNetworkId), n = await Y.getCapabilities(t);
      if (!((r = (s = n == null ? void 0 : n[i]) == null ? void 0 : s.assetDiscovery) != null && r.supported))
        return null;
      const o = await Y.walletGetAssets({
        account: t,
        chainFilter: [i]
      });
      return Oo.isWalletGetAssetsResponse(o) ? (o[i] || []).map((c) => Oo.createBalance(c, e.caipNetworkId)) : null;
    } catch {
      return null;
    }
  },
  /**
   * The 1Inch API includes many low-quality tokens in the balance response,
   * which appear inconsistently. This filter prevents them from being displayed.
   */
  filterLowQualityTokens(t) {
    return t.filter((e) => e.quantity.decimals !== "0");
  },
  mapBalancesToSwapTokens(t) {
    return (t == null ? void 0 : t.map((e) => ({
      ...e,
      address: e != null && e.address ? e.address : m.getActiveNetworkTokenAddress(),
      decimals: parseInt(e.quantity.decimals, 10),
      logoUri: e.iconUrl,
      eip2612: !1
    }))) || [];
  }
}, fe = _e({
  tokenBalances: [],
  loading: !1
}), rf = {
  state: fe,
  subscribe(t) {
    return Qe(fe, () => t(fe));
  },
  subscribeKey(t, e) {
    return et(fe, t, e);
  },
  setToken(t) {
    t && (fe.token = Zs(t));
  },
  setTokenAmount(t) {
    fe.sendTokenAmount = t;
  },
  setReceiverAddress(t) {
    fe.receiverAddress = t;
  },
  setReceiverProfileImageUrl(t) {
    fe.receiverProfileImageUrl = t;
  },
  setReceiverProfileName(t) {
    fe.receiverProfileName = t;
  },
  setNetworkBalanceInUsd(t) {
    fe.networkBalanceInUSD = t;
  },
  setLoading(t) {
    fe.loading = t;
  },
  async sendToken() {
    var t;
    try {
      switch (de.setLoading(!0), (t = m.state.activeCaipNetwork) == null ? void 0 : t.chainNamespace) {
        case "eip155":
          await de.sendEvmToken();
          return;
        case "solana":
          await de.sendSolanaToken();
          return;
        default:
          throw new Error("Unsupported chain");
      }
    } finally {
      de.setLoading(!1);
    }
  },
  async sendEvmToken() {
    var s, r, i, n;
    const t = m.state.activeChain, e = (s = W.state.preferredAccountTypes) == null ? void 0 : s[t];
    if (!de.state.sendTokenAmount || !de.state.receiverAddress)
      throw new Error("An amount and receiver address are required");
    if (!de.state.token)
      throw new Error("A token is required");
    (r = de.state.token) != null && r.address ? (Pe.sendEvent({
      type: "track",
      event: "SEND_INITIATED",
      properties: {
        isSmartAccount: e === _i.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: de.state.token.address,
        amount: de.state.sendTokenAmount,
        network: ((i = m.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId) || ""
      }
    }), await de.sendERC20Token({
      receiverAddress: de.state.receiverAddress,
      tokenAddress: de.state.token.address,
      sendTokenAmount: de.state.sendTokenAmount,
      decimals: de.state.token.quantity.decimals
    })) : (Pe.sendEvent({
      type: "track",
      event: "SEND_INITIATED",
      properties: {
        isSmartAccount: e === _i.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: de.state.token.symbol || "",
        amount: de.state.sendTokenAmount,
        network: ((n = m.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) || ""
      }
    }), await de.sendNativeToken({
      receiverAddress: de.state.receiverAddress,
      sendTokenAmount: de.state.sendTokenAmount,
      decimals: de.state.token.quantity.decimals
    }));
  },
  async fetchTokenBalance(t) {
    var n, o;
    fe.loading = !0;
    const e = (n = m.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId, s = (o = m.state.activeCaipNetwork) == null ? void 0 : o.chainNamespace, r = m.state.activeCaipAddress, i = r ? X.getPlainAddress(r) : void 0;
    if (fe.lastRetry && !X.isAllowedRetry(fe.lastRetry, 30 * Ee.ONE_SEC_MS))
      return fe.loading = !1, [];
    try {
      if (i && e && s) {
        const a = await Nc.getMyTokensWithBalance();
        return fe.tokenBalances = a, fe.lastRetry = void 0, a;
      }
    } catch (a) {
      fe.lastRetry = Date.now(), t == null || t(a), Bt.showError("Token Balance Unavailable");
    } finally {
      fe.loading = !1;
    }
    return [];
  },
  fetchNetworkBalance() {
    if (fe.tokenBalances.length === 0)
      return;
    const t = Nc.mapBalancesToSwapTokens(fe.tokenBalances);
    if (!t)
      return;
    const e = t.find((s) => s.address === m.getActiveNetworkTokenAddress());
    e && (fe.networkBalanceInUSD = e ? Ip.multiply(e.quantity.numeric, e.price).toString() : "0");
  },
  async sendNativeToken(t) {
    var n, o, a, c;
    re.pushTransactionStack({});
    const e = t.receiverAddress, s = W.state.address, r = Y.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals));
    await Y.sendTransaction({
      chainNamespace: "eip155",
      to: e,
      address: s,
      data: "0x",
      value: r ?? BigInt(0)
    }), Pe.sendEvent({
      type: "track",
      event: "SEND_SUCCESS",
      properties: {
        isSmartAccount: ((n = W.state.preferredAccountTypes) == null ? void 0 : n.eip155) === _i.ACCOUNT_TYPES.SMART_ACCOUNT,
        token: ((o = de.state.token) == null ? void 0 : o.symbol) || "",
        amount: t.sendTokenAmount,
        network: ((a = m.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId) || ""
      }
    }), (c = Y._getClient()) == null || c.updateBalance("eip155"), de.resetSend();
  },
  async sendERC20Token(t) {
    re.pushTransactionStack({
      onSuccess() {
        re.replace("Account");
      }
    });
    const e = Y.parseUnits(t.sendTokenAmount.toString(), Number(t.decimals));
    if (W.state.address && t.sendTokenAmount && t.receiverAddress && t.tokenAddress) {
      const s = X.getPlainAddress(t.tokenAddress);
      await Y.writeContract({
        fromAddress: W.state.address,
        tokenAddress: s,
        args: [t.receiverAddress, e ?? BigInt(0)],
        method: "transfer",
        abi: Sp.getERC20Abi(s),
        chainNamespace: "eip155"
      }), de.resetSend();
    }
  },
  async sendSolanaToken() {
    var t;
    if (!de.state.sendTokenAmount || !de.state.receiverAddress)
      throw new Error("An amount and receiver address are required");
    re.pushTransactionStack({
      onSuccess() {
        re.replace("Account");
      }
    }), await Y.sendTransaction({
      chainNamespace: "solana",
      to: de.state.receiverAddress,
      value: de.state.sendTokenAmount
    }), (t = Y._getClient()) == null || t.updateBalance("solana"), de.resetSend();
  },
  resetSend() {
    fe.token = void 0, fe.sendTokenAmount = void 0, fe.receiverAddress = void 0, fe.receiverProfileImageUrl = void 0, fe.receiverProfileName = void 0, fe.loading = !1, fe.tokenBalances = [];
  }
}, de = At(rf), To = {
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: !1,
  addressLabels: /* @__PURE__ */ new Map(),
  allAccounts: [],
  user: void 0
}, kn = {
  caipNetwork: void 0,
  supportsAllNetworks: !0,
  smartAccountEnabledNetworks: []
}, M = _e({
  chains: $p(),
  activeCaipAddress: void 0,
  activeChain: void 0,
  activeCaipNetwork: void 0,
  noAdapters: !1,
  universalAdapter: {
    networkControllerClient: void 0,
    connectionControllerClient: void 0
  },
  isSwitchingNamespace: !1
}), nf = {
  state: M,
  subscribe(t) {
    return Qe(M, () => {
      t(M);
    });
  },
  subscribeKey(t, e) {
    return et(M, t, e);
  },
  subscribeChainProp(t, e, s) {
    let r;
    return Qe(M.chains, () => {
      var n;
      const i = s || M.activeChain;
      if (i) {
        const o = (n = M.chains.get(i)) == null ? void 0 : n[t];
        r !== o && (r = o, e(o));
      }
    });
  },
  initialize(t, e, s) {
    const { chainId: r, namespace: i } = q.getActiveNetworkProps(), n = e == null ? void 0 : e.find((u) => u.id.toString() === (r == null ? void 0 : r.toString())), a = t.find((u) => (u == null ? void 0 : u.namespace) === i) || (t == null ? void 0 : t[0]), c = t.map((u) => u.namespace).filter((u) => u !== void 0), l = T.state.enableEmbedded ? /* @__PURE__ */ new Set([...c]) : /* @__PURE__ */ new Set([...(e == null ? void 0 : e.map((u) => u.chainNamespace)) ?? []]);
    ((t == null ? void 0 : t.length) === 0 || !a) && (M.noAdapters = !0), M.noAdapters || (M.activeChain = a == null ? void 0 : a.namespace, M.activeCaipNetwork = n, m.setChainNetworkData(a == null ? void 0 : a.namespace, {
      caipNetwork: n
    }), M.activeChain && Ns.set({ activeChain: a == null ? void 0 : a.namespace })), l.forEach((u) => {
      const d = e == null ? void 0 : e.filter((h) => h.chainNamespace === u);
      m.state.chains.set(u, {
        namespace: u,
        networkState: _e({
          ...kn,
          caipNetwork: d == null ? void 0 : d[0]
        }),
        accountState: _e(To),
        caipNetworks: d ?? [],
        ...s
      }), m.setRequestedCaipNetworks(d ?? [], u);
    });
  },
  removeAdapter(t) {
    var e, s;
    if (M.activeChain === t) {
      const r = Array.from(M.chains.entries()).find(([i]) => i !== t);
      if (r) {
        const i = (s = (e = r[1]) == null ? void 0 : e.caipNetworks) == null ? void 0 : s[0];
        i && m.setActiveCaipNetwork(i);
      }
    }
    M.chains.delete(t);
  },
  addAdapter(t, { networkControllerClient: e, connectionControllerClient: s }, r) {
    M.chains.set(t.namespace, {
      namespace: t.namespace,
      networkState: {
        ...kn,
        caipNetwork: r[0]
      },
      accountState: To,
      caipNetworks: r,
      connectionControllerClient: s,
      networkControllerClient: e
    }), m.setRequestedCaipNetworks((r == null ? void 0 : r.filter((i) => i.chainNamespace === t.namespace)) ?? [], t.namespace);
  },
  addNetwork(t) {
    var s;
    const e = M.chains.get(t.chainNamespace);
    if (e) {
      const r = [...e.caipNetworks || []];
      (s = e.caipNetworks) != null && s.find((i) => i.id === t.id) || r.push(t), M.chains.set(t.chainNamespace, { ...e, caipNetworks: r }), m.setRequestedCaipNetworks(r, t.chainNamespace), F.filterByNamespace(t.chainNamespace, !0);
    }
  },
  removeNetwork(t, e) {
    var r, i, n;
    const s = M.chains.get(t);
    if (s) {
      const o = ((r = M.activeCaipNetwork) == null ? void 0 : r.id) === e, a = [
        ...((i = s.caipNetworks) == null ? void 0 : i.filter((c) => c.id !== e)) || []
      ];
      o && ((n = s == null ? void 0 : s.caipNetworks) != null && n[0]) && m.setActiveCaipNetwork(s.caipNetworks[0]), M.chains.set(t, { ...s, caipNetworks: a }), m.setRequestedCaipNetworks(a || [], t), a.length === 0 && F.filterByNamespace(t, !1);
    }
  },
  setAdapterNetworkState(t, e) {
    const s = M.chains.get(t);
    s && (s.networkState = {
      ...s.networkState || kn,
      ...e
    }, M.chains.set(t, s));
  },
  setChainAccountData(t, e, s = !0) {
    if (!t)
      throw new Error("Chain is required to update chain account data");
    const r = M.chains.get(t);
    if (r) {
      const i = { ...r.accountState || To, ...e };
      M.chains.set(t, { ...r, accountState: i }), (M.chains.size === 1 || M.activeChain === t) && (e.caipAddress && (M.activeCaipAddress = e.caipAddress), W.replaceState(i));
    }
  },
  setChainNetworkData(t, e) {
    if (!t)
      return;
    const s = M.chains.get(t);
    if (s) {
      const r = { ...s.networkState || kn, ...e };
      M.chains.set(t, { ...s, networkState: r });
    }
  },
  // eslint-disable-next-line max-params
  setAccountProp(t, e, s, r = !0) {
    m.setChainAccountData(s, { [t]: e }, r), t === "status" && e === "disconnected" && s && F.removeConnectorId(s);
  },
  setActiveNamespace(t) {
    var r, i;
    M.activeChain = t;
    const e = t ? M.chains.get(t) : void 0, s = (r = e == null ? void 0 : e.networkState) == null ? void 0 : r.caipNetwork;
    s != null && s.id && t && (M.activeCaipAddress = (i = e == null ? void 0 : e.accountState) == null ? void 0 : i.caipAddress, M.activeCaipNetwork = s, m.setChainNetworkData(t, { caipNetwork: s }), q.setActiveCaipNetworkId(s == null ? void 0 : s.caipNetworkId), Ns.set({
      activeChain: t,
      selectedNetworkId: s == null ? void 0 : s.caipNetworkId
    }));
  },
  setActiveCaipNetwork(t) {
    var r, i, n;
    if (!t)
      return;
    M.activeChain !== t.chainNamespace && m.setIsSwitchingNamespace(!0);
    const e = M.chains.get(t.chainNamespace);
    M.activeChain = t.chainNamespace, M.activeCaipNetwork = t, m.setChainNetworkData(t.chainNamespace, { caipNetwork: t }), (r = e == null ? void 0 : e.accountState) != null && r.address ? M.activeCaipAddress = `${t.chainNamespace}:${t.id}:${(i = e == null ? void 0 : e.accountState) == null ? void 0 : i.address}` : M.activeCaipAddress = void 0, m.setAccountProp("caipAddress", M.activeCaipAddress, t.chainNamespace), e && W.replaceState(e.accountState), de.resetSend(), Ns.set({
      activeChain: M.activeChain,
      selectedNetworkId: (n = M.activeCaipNetwork) == null ? void 0 : n.caipNetworkId
    }), q.setActiveCaipNetworkId(t.caipNetworkId), !m.checkIfSupportedNetwork(t.chainNamespace) && T.state.enableNetworkSwitch && !T.state.allowUnsupportedChain && !Y.state.wcBasic && m.showUnsupportedChainUI();
  },
  addCaipNetwork(t) {
    var s;
    if (!t)
      return;
    const e = M.chains.get(t.chainNamespace);
    e && ((s = e == null ? void 0 : e.caipNetworks) == null || s.push(t));
  },
  async switchActiveNamespace(t) {
    var i;
    if (!t)
      return;
    const e = t !== m.state.activeChain, s = (i = m.getNetworkData(t)) == null ? void 0 : i.caipNetwork, r = m.getCaipNetworkByNamespace(t, s == null ? void 0 : s.id);
    e && r && await m.switchActiveNetwork(r);
  },
  async switchActiveNetwork(t) {
    var i;
    const e = m.state.chains.get(m.state.activeChain), s = !((i = e == null ? void 0 : e.caipNetworks) != null && i.some((n) => {
      var o;
      return n.id === ((o = M.activeCaipNetwork) == null ? void 0 : o.id);
    })), r = m.getNetworkControllerClient(t.chainNamespace);
    if (r) {
      try {
        await r.switchCaipNetwork(t), s && ze.close();
      } catch {
        re.goBack();
      }
      Pe.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: { network: t.caipNetworkId }
      });
    }
  },
  getNetworkControllerClient(t) {
    const e = t || M.activeChain, s = M.chains.get(e);
    if (!s)
      throw new Error("Chain adapter not found");
    if (!s.networkControllerClient)
      throw new Error("NetworkController client not set");
    return s.networkControllerClient;
  },
  getConnectionControllerClient(t) {
    const e = t || M.activeChain;
    if (!e)
      throw new Error("Chain is required to get connection controller client");
    const s = M.chains.get(e);
    if (!(s != null && s.connectionControllerClient))
      throw new Error("ConnectionController client not set");
    return s.connectionControllerClient;
  },
  getAccountProp(t, e) {
    var i;
    let s = M.activeChain;
    if (e && (s = e), !s)
      return;
    const r = (i = M.chains.get(s)) == null ? void 0 : i.accountState;
    if (r)
      return r[t];
  },
  getNetworkProp(t, e) {
    var r;
    const s = (r = M.chains.get(e)) == null ? void 0 : r.networkState;
    if (s)
      return s[t];
  },
  getRequestedCaipNetworks(t) {
    const e = M.chains.get(t), { approvedCaipNetworkIds: s = [], requestedCaipNetworks: r = [] } = (e == null ? void 0 : e.networkState) || {};
    return X.sortRequestedNetworks(s, r);
  },
  getAllRequestedCaipNetworks() {
    const t = [];
    return M.chains.forEach((e) => {
      const s = m.getRequestedCaipNetworks(e.namespace);
      t.push(...s);
    }), t;
  },
  setRequestedCaipNetworks(t, e) {
    m.setAdapterNetworkState(e, { requestedCaipNetworks: t });
    const r = m.getAllRequestedCaipNetworks().map((n) => n.chainNamespace), i = Array.from(new Set(r));
    F.filterByNamespaces(i);
  },
  getAllApprovedCaipNetworkIds() {
    const t = [];
    return M.chains.forEach((e) => {
      const s = m.getApprovedCaipNetworkIds(e.namespace);
      t.push(...s);
    }), t;
  },
  getActiveCaipNetwork() {
    return M.activeCaipNetwork;
  },
  getActiveCaipAddress() {
    return M.activeCaipAddress;
  },
  getApprovedCaipNetworkIds(t) {
    var r;
    const e = M.chains.get(t);
    return ((r = e == null ? void 0 : e.networkState) == null ? void 0 : r.approvedCaipNetworkIds) || [];
  },
  async setApprovedCaipNetworksData(t) {
    const e = m.getNetworkControllerClient(), s = await (e == null ? void 0 : e.getApprovedCaipNetworksData());
    m.setAdapterNetworkState(t, {
      approvedCaipNetworkIds: s == null ? void 0 : s.approvedCaipNetworkIds,
      supportsAllNetworks: s == null ? void 0 : s.supportsAllNetworks
    });
  },
  checkIfSupportedNetwork(t, e) {
    const s = e || M.activeCaipNetwork, r = m.getRequestedCaipNetworks(t);
    return r.length ? r == null ? void 0 : r.some((i) => i.id === (s == null ? void 0 : s.id)) : !0;
  },
  checkIfSupportedChainId(t) {
    if (!M.activeChain)
      return !0;
    const e = m.getRequestedCaipNetworks(M.activeChain);
    return e == null ? void 0 : e.some((s) => s.id === t);
  },
  // Smart Account Network Handlers
  setSmartAccountEnabledNetworks(t, e) {
    m.setAdapterNetworkState(e, { smartAccountEnabledNetworks: t });
  },
  checkIfSmartAccountEnabled() {
    var r;
    const t = Wu.caipNetworkIdToNumber((r = M.activeCaipNetwork) == null ? void 0 : r.caipNetworkId), e = M.activeChain;
    if (!e || !t)
      return !1;
    const s = m.getNetworkProp("smartAccountEnabledNetworks", e);
    return !!(s != null && s.includes(Number(t)));
  },
  getActiveNetworkTokenAddress() {
    var r, i;
    const t = ((r = M.activeCaipNetwork) == null ? void 0 : r.chainNamespace) || "eip155", e = ((i = M.activeCaipNetwork) == null ? void 0 : i.id) || 1, s = Ee.NATIVE_TOKEN_ADDRESS[t];
    return `${t}:${e}:${s}`;
  },
  showUnsupportedChainUI() {
    ze.open({ view: "UnsupportedChain" });
  },
  checkIfNamesSupported() {
    const t = M.activeCaipNetwork;
    return !!(t != null && t.chainNamespace && Ee.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace));
  },
  resetNetwork(t) {
    m.setAdapterNetworkState(t, {
      approvedCaipNetworkIds: void 0,
      supportsAllNetworks: !0,
      smartAccountEnabledNetworks: []
    });
  },
  resetAccount(t) {
    const e = t;
    if (!e)
      throw new Error("Chain is required to set account prop");
    M.activeCaipAddress = void 0, m.setChainAccountData(e, {
      smartAccountDeployed: !1,
      currentTab: 0,
      caipAddress: void 0,
      address: void 0,
      balance: void 0,
      balanceSymbol: void 0,
      profileName: void 0,
      profileImage: void 0,
      addressExplorerUrl: void 0,
      tokenBalance: [],
      connectedWalletInfo: void 0,
      preferredAccountTypes: void 0,
      socialProvider: void 0,
      socialWindow: void 0,
      farcasterUrl: void 0,
      allAccounts: [],
      user: void 0,
      status: "disconnected"
    }), F.removeConnectorId(e);
  },
  setIsSwitchingNamespace(t) {
    M.isSwitchingNamespace = t;
  },
  getFirstCaipNetworkSupportsAuthConnector() {
    var s, r;
    const t = [];
    let e;
    if (M.chains.forEach((i) => {
      z.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((n) => n === i.namespace) && i.namespace && t.push(i.namespace);
    }), t.length > 0) {
      const i = t[0];
      return e = i ? (r = (s = M.chains.get(i)) == null ? void 0 : s.caipNetworks) == null ? void 0 : r[0] : void 0, e;
    }
  },
  getAccountData(t) {
    var e;
    return t ? (e = m.state.chains.get(t)) == null ? void 0 : e.accountState : W.state;
  },
  getNetworkData(t) {
    var s;
    const e = t || M.activeChain;
    if (e)
      return (s = m.state.chains.get(e)) == null ? void 0 : s.networkState;
  },
  getCaipNetworkByNamespace(t, e) {
    var i, n, o;
    if (!t)
      return;
    const s = m.state.chains.get(t), r = (i = s == null ? void 0 : s.caipNetworks) == null ? void 0 : i.find((a) => a.id === e);
    return r || ((n = s == null ? void 0 : s.networkState) == null ? void 0 : n.caipNetwork) || ((o = s == null ? void 0 : s.caipNetworks) == null ? void 0 : o[0]);
  },
  /**
   * Get the requested CaipNetwork IDs for a given namespace. If namespace is not provided, all requested CaipNetwork IDs will be returned
   * @param namespace - The namespace to get the requested CaipNetwork IDs for
   * @returns The requested CaipNetwork IDs
   */
  getRequestedCaipNetworkIds() {
    const t = F.state.filterByNamespace;
    return (t ? [M.chains.get(t)] : Array.from(M.chains.values())).flatMap((s) => (s == null ? void 0 : s.caipNetworks) || []).map((s) => s.caipNetworkId);
  },
  getCaipNetworks(t) {
    return t ? m.getRequestedCaipNetworks(t) : m.getAllRequestedCaipNetworks();
  }
}, m = At(nf), of = {
  purchaseCurrencies: [
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "USD Coin",
      symbol: "USDC",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    },
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "Ether",
      symbol: "ETH",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    }
  ],
  paymentCurrencies: [
    {
      id: "USD",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    },
    {
      id: "EUR",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    }
  ]
}, Ju = X.getBlockchainApiUrl(), nt = _e({
  clientId: null,
  api: new mn({ baseUrl: Ju, clientId: null }),
  supportedChains: { http: [], ws: [] }
}), J = {
  state: nt,
  async get(t) {
    const { st: e, sv: s } = J.getSdkProperties(), r = T.state.projectId, i = {
      ...t.params || {},
      st: e,
      sv: s,
      projectId: r
    };
    return nt.api.get({
      ...t,
      params: i
    });
  },
  getSdkProperties() {
    const { sdkType: t, sdkVersion: e } = T.state;
    return {
      st: t || "unknown",
      sv: e || "unknown"
    };
  },
  async isNetworkSupported(t) {
    if (!t)
      return !1;
    try {
      nt.supportedChains.http.length || await J.getSupportedNetworks();
    } catch {
      return !1;
    }
    return nt.supportedChains.http.includes(t);
  },
  async getSupportedNetworks() {
    try {
      const t = await J.get({
        path: "v1/supported-chains"
      });
      return nt.supportedChains = t, t;
    } catch {
      return nt.supportedChains;
    }
  },
  async fetchIdentity({ address: t, caipNetworkId: e }) {
    if (!await J.isNetworkSupported(e))
      return { avatar: "", name: "" };
    const r = q.getIdentityFromCacheForAddress(t);
    if (r)
      return r;
    const i = await J.get({
      path: `/v1/identity/${t}`,
      params: {
        sender: m.state.activeCaipAddress ? X.getPlainAddress(m.state.activeCaipAddress) : void 0
      }
    });
    return q.updateIdentityCache({
      address: t,
      identity: i,
      timestamp: Date.now()
    }), i;
  },
  async fetchTransactions({ account: t, cursor: e, onramp: s, signal: r, cache: i, chainId: n }) {
    var a;
    return await J.isNetworkSupported((a = m.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId) ? J.get({
      path: `/v1/account/${t}/history`,
      params: {
        cursor: e,
        onramp: s,
        chainId: n
      },
      signal: r,
      cache: i
    }) : { data: [], next: void 0 };
  },
  async fetchSwapQuote({ amount: t, userAddress: e, from: s, to: r, gasPrice: i }) {
    var o;
    return await J.isNetworkSupported((o = m.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId) ? J.get({
      path: "/v1/convert/quotes",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        amount: t,
        userAddress: e,
        from: s,
        to: r,
        gasPrice: i
      }
    }) : { quotes: [] };
  },
  async fetchSwapTokens({ chainId: t }) {
    var s;
    return await J.isNetworkSupported((s = m.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? J.get({
      path: "/v1/convert/tokens",
      params: { chainId: t }
    }) : { tokens: [] };
  },
  async fetchTokenPrice({ addresses: t }) {
    var s;
    return await J.isNetworkSupported((s = m.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? nt.api.post({
      path: "/v1/fungible/price",
      body: {
        currency: "usd",
        addresses: t,
        projectId: T.state.projectId
      },
      headers: {
        "Content-Type": "application/json"
      }
    }) : { fungibles: [] };
  },
  async fetchSwapAllowance({ tokenAddress: t, userAddress: e }) {
    var r;
    return await J.isNetworkSupported((r = m.state.activeCaipNetwork) == null ? void 0 : r.caipNetworkId) ? J.get({
      path: "/v1/convert/allowance",
      params: {
        tokenAddress: t,
        userAddress: e
      },
      headers: {
        "Content-Type": "application/json"
      }
    }) : { allowance: "0" };
  },
  async fetchGasPrice({ chainId: t }) {
    var i;
    const { st: e, sv: s } = J.getSdkProperties();
    if (!await J.isNetworkSupported((i = m.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId))
      throw new Error("Network not supported for Gas Price");
    return J.get({
      path: "/v1/convert/gas-price",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        chainId: t,
        st: e,
        sv: s
      }
    });
  },
  async generateSwapCalldata({ amount: t, from: e, to: s, userAddress: r, disableEstimate: i }) {
    var o;
    if (!await J.isNetworkSupported((o = m.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId))
      throw new Error("Network not supported for Swaps");
    return nt.api.post({
      path: "/v1/convert/build-transaction",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        amount: t,
        eip155: {
          slippage: Ee.CONVERT_SLIPPAGE_TOLERANCE
        },
        projectId: T.state.projectId,
        from: e,
        to: s,
        userAddress: r,
        disableEstimate: i
      }
    });
  },
  async generateApproveCalldata({ from: t, to: e, userAddress: s }) {
    var o;
    const { st: r, sv: i } = J.getSdkProperties();
    if (!await J.isNetworkSupported((o = m.state.activeCaipNetwork) == null ? void 0 : o.caipNetworkId))
      throw new Error("Network not supported for Swaps");
    return J.get({
      path: "/v1/convert/build-approve",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        userAddress: s,
        from: t,
        to: e,
        st: r,
        sv: i
      }
    });
  },
  async getBalance(t, e, s) {
    var l;
    const { st: r, sv: i } = J.getSdkProperties();
    if (!await J.isNetworkSupported((l = m.state.activeCaipNetwork) == null ? void 0 : l.caipNetworkId))
      return Bt.showError("Token Balance Unavailable"), { balances: [] };
    const o = `${e}:${t}`, a = q.getBalanceCacheForCaipAddress(o);
    if (a)
      return a;
    const c = await J.get({
      path: `/v1/account/${t}/balance`,
      params: {
        currency: "usd",
        chainId: e,
        forceUpdate: s,
        st: r,
        sv: i
      }
    });
    return q.updateBalanceCache({
      caipAddress: o,
      balance: c,
      timestamp: Date.now()
    }), c;
  },
  async lookupEnsName(t) {
    var s;
    return await J.isNetworkSupported((s = m.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? J.get({
      path: `/v1/profile/account/${t}`,
      params: { apiVersion: "2" }
    }) : { addresses: {}, attributes: [] };
  },
  async reverseLookupEnsName({ address: t }) {
    var s;
    return await J.isNetworkSupported((s = m.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? J.get({
      path: `/v1/profile/reverse/${t}`,
      params: {
        sender: W.state.address,
        apiVersion: "2"
      }
    }) : [];
  },
  async getEnsNameSuggestions(t) {
    var s;
    return await J.isNetworkSupported((s = m.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? J.get({
      path: `/v1/profile/suggestions/${t}`,
      params: { zone: "reown.id" }
    }) : { suggestions: [] };
  },
  async registerEnsName({ coinType: t, address: e, message: s, signature: r }) {
    var n;
    return await J.isNetworkSupported((n = m.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId) ? nt.api.post({
      path: "/v1/profile/account",
      body: { coin_type: t, address: e, message: s, signature: r },
      headers: {
        "Content-Type": "application/json"
      }
    }) : { success: !1 };
  },
  async generateOnRampURL({ destinationWallets: t, partnerUserId: e, defaultNetwork: s, purchaseAmount: r, paymentAmount: i }) {
    var a;
    return await J.isNetworkSupported((a = m.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId) ? (await nt.api.post({
      path: "/v1/generators/onrampurl",
      params: {
        projectId: T.state.projectId
      },
      body: {
        destinationWallets: t,
        defaultNetwork: s,
        partnerUserId: e,
        defaultExperience: "buy",
        presetCryptoAmount: r,
        presetFiatAmount: i
      }
    })).url : "";
  },
  async getOnrampOptions() {
    var e;
    if (!await J.isNetworkSupported((e = m.state.activeCaipNetwork) == null ? void 0 : e.caipNetworkId))
      return { paymentCurrencies: [], purchaseCurrencies: [] };
    try {
      return await J.get({
        path: "/v1/onramp/options"
      });
    } catch {
      return of;
    }
  },
  async getOnrampQuote({ purchaseCurrency: t, paymentCurrency: e, amount: s, network: r }) {
    var i;
    try {
      return await J.isNetworkSupported((i = m.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId) ? await nt.api.post({
        path: "/v1/onramp/quote",
        params: {
          projectId: T.state.projectId
        },
        body: {
          purchaseCurrency: t,
          paymentCurrency: e,
          amount: s,
          network: r
        }
      }) : null;
    } catch {
      return {
        coinbaseFee: { amount: s, currency: e.id },
        networkFee: { amount: s, currency: e.id },
        paymentSubtotal: { amount: s, currency: e.id },
        paymentTotal: { amount: s, currency: e.id },
        purchaseAmount: { amount: s, currency: e.id },
        quoteId: "mocked-quote-id"
      };
    }
  },
  async getSmartSessions(t) {
    var s;
    return await J.isNetworkSupported((s = m.state.activeCaipNetwork) == null ? void 0 : s.caipNetworkId) ? J.get({
      path: `/v1/sessions/${t}`
    }) : [];
  },
  async revokeSmartSession(t, e, s) {
    var i;
    return await J.isNetworkSupported((i = m.state.activeCaipNetwork) == null ? void 0 : i.caipNetworkId) ? nt.api.post({
      path: `/v1/sessions/${t}/revoke`,
      params: {
        projectId: T.state.projectId
      },
      body: {
        pci: e,
        signature: s
      }
    }) : { success: !1 };
  },
  setClientId(t) {
    nt.clientId = t, nt.api = new mn({ baseUrl: Ju, clientId: t });
  }
}, Nt = _e({
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: !1,
  addressLabels: /* @__PURE__ */ new Map(),
  allAccounts: []
}), af = {
  state: Nt,
  replaceState(t) {
    t && Object.assign(Nt, Zs(t));
  },
  subscribe(t) {
    return m.subscribeChainProp("accountState", (e) => {
      if (e)
        return t(e);
    });
  },
  subscribeKey(t, e, s) {
    let r;
    return m.subscribeChainProp("accountState", (i) => {
      if (i) {
        const n = i[t];
        r !== n && (r = n, e(n));
      }
    }, s);
  },
  setStatus(t, e) {
    m.setAccountProp("status", t, e);
  },
  getCaipAddress(t) {
    return m.getAccountProp("caipAddress", t);
  },
  setCaipAddress(t, e) {
    const s = t ? X.getPlainAddress(t) : void 0;
    e === m.state.activeChain && (m.state.activeCaipAddress = t), m.setAccountProp("caipAddress", t, e), m.setAccountProp("address", s, e);
  },
  setBalance(t, e, s) {
    m.setAccountProp("balance", t, s), m.setAccountProp("balanceSymbol", e, s);
  },
  setProfileName(t, e) {
    m.setAccountProp("profileName", t, e);
  },
  setProfileImage(t, e) {
    m.setAccountProp("profileImage", t, e);
  },
  setUser(t, e) {
    m.setAccountProp("user", t, e);
  },
  setAddressExplorerUrl(t, e) {
    m.setAccountProp("addressExplorerUrl", t, e);
  },
  setSmartAccountDeployed(t, e) {
    m.setAccountProp("smartAccountDeployed", t, e);
  },
  setCurrentTab(t) {
    m.setAccountProp("currentTab", t, m.state.activeChain);
  },
  setTokenBalance(t, e) {
    t && m.setAccountProp("tokenBalance", t, e);
  },
  setShouldUpdateToAddress(t, e) {
    m.setAccountProp("shouldUpdateToAddress", t, e);
  },
  setAllAccounts(t, e) {
    m.setAccountProp("allAccounts", t, e);
  },
  addAddressLabel(t, e, s) {
    const r = m.getAccountProp("addressLabels", s) || /* @__PURE__ */ new Map();
    r.set(t, e), m.setAccountProp("addressLabels", r, s);
  },
  removeAddressLabel(t, e) {
    const s = m.getAccountProp("addressLabels", e) || /* @__PURE__ */ new Map();
    s.delete(t), m.setAccountProp("addressLabels", s, e);
  },
  setConnectedWalletInfo(t, e) {
    m.setAccountProp("connectedWalletInfo", t, e, !1);
  },
  setPreferredAccountType(t, e) {
    m.setAccountProp("preferredAccountTypes", {
      ...Nt.preferredAccountTypes,
      [e]: t
    }, e);
  },
  setPreferredAccountTypes(t) {
    Nt.preferredAccountTypes = t;
  },
  setSocialProvider(t, e) {
    t && m.setAccountProp("socialProvider", t, e);
  },
  setSocialWindow(t, e) {
    m.setAccountProp("socialWindow", t ? Zs(t) : void 0, e);
  },
  setFarcasterUrl(t, e) {
    m.setAccountProp("farcasterUrl", t, e);
  },
  async fetchTokenBalance(t) {
    var n, o;
    Nt.balanceLoading = !0;
    const e = (n = m.state.activeCaipNetwork) == null ? void 0 : n.caipNetworkId, s = (o = m.state.activeCaipNetwork) == null ? void 0 : o.chainNamespace, r = m.state.activeCaipAddress, i = r ? X.getPlainAddress(r) : void 0;
    if (Nt.lastRetry && !X.isAllowedRetry(Nt.lastRetry, 30 * Ee.ONE_SEC_MS))
      return Nt.balanceLoading = !1, [];
    try {
      if (i && e && s) {
        const c = (await J.getBalance(i, e)).balances.filter((l) => l.quantity.decimals !== "0");
        return W.setTokenBalance(c, s), Nt.lastRetry = void 0, Nt.balanceLoading = !1, c;
      }
    } catch (a) {
      Nt.lastRetry = Date.now(), t == null || t(a), Bt.showError("Token Balance Unavailable");
    } finally {
      Nt.balanceLoading = !1;
    }
    return [];
  },
  resetAccount(t) {
    m.resetAccount(t);
  }
}, W = At(af), cf = {
  /**
   * Function to handle the network switch.
   * This function has variety of conditions to handle the network switch depending on the connectors or namespace's connection states.
   * @param args.network - The network to switch to.
   * @param args.shouldConfirmSwitch - Whether to confirm the switch. If true, the user will be asked to confirm the switch if necessary.
   * @returns void
   */
  onSwitchNetwork({ network: t, ignoreSwitchConfirmation: e = !1 }) {
    const s = m.state.activeCaipNetwork, r = re.state.data;
    if (t.id === (s == null ? void 0 : s.id))
      return;
    const n = W.getCaipAddress(m.state.activeChain), o = t.chainNamespace !== m.state.activeChain, a = W.getCaipAddress(t.chainNamespace), l = F.getConnectorId(m.state.activeChain) === z.CONNECTOR_ID.AUTH, u = z.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((d) => d === t.chainNamespace);
    e || l && u ? re.push("SwitchNetwork", { ...r, network: t }) : /** * If user switching to a different namespace and next namespace is not connected, we need to show switch active chain view for confirmation first. */ n && o && !a ? re.push("SwitchActiveChain", {
      switchToChain: t.chainNamespace,
      navigateTo: "Connect",
      navigateWithReplace: !0,
      network: t
    }) : re.push("SwitchNetwork", { ...r, network: t });
  }
}, ot = _e({
  loading: !1,
  loadingNamespaceMap: /* @__PURE__ */ new Map(),
  open: !1,
  shake: !1,
  namespace: void 0
}), lf = {
  state: ot,
  subscribe(t) {
    return Qe(ot, () => t(ot));
  },
  subscribeKey(t, e) {
    return et(ot, t, e);
  },
  async open(t) {
    var o, a;
    const e = W.state.status === "connected", s = t == null ? void 0 : t.namespace, r = m.state.activeChain, i = s && s !== r, n = (o = m.getAccountData(t == null ? void 0 : t.namespace)) == null ? void 0 : o.caipAddress;
    if (Y.state.wcBasic ? K.prefetch({ fetchNetworkImages: !1, fetchConnectorImages: !1 }) : await K.prefetch({
      fetchConnectorImages: !e,
      fetchFeaturedWallets: !e,
      fetchRecommendedWallets: !e
    }), F.setFilterByNamespace(t == null ? void 0 : t.namespace), ze.setLoading(!0, s), s && i) {
      const c = ((a = m.getNetworkData(s)) == null ? void 0 : a.caipNetwork) || m.getRequestedCaipNetworks(s)[0];
      c && cf.onSwitchNetwork({ network: c, ignoreSwitchConfirmation: !0 });
    } else {
      const c = m.state.noAdapters;
      T.state.manualWCControl || c && !n ? X.isMobile() ? re.reset("AllWallets") : re.reset("ConnectingWalletConnectBasic") : t != null && t.view ? re.reset(t.view, t.data) : n ? re.reset("Account") : re.reset("Connect");
    }
    ot.open = !0, Ns.set({ open: !0 }), Pe.sendEvent({
      type: "track",
      event: "MODAL_OPEN",
      properties: { connected: !!n }
    });
  },
  close() {
    const t = T.state.enableEmbedded, e = !!m.state.activeCaipAddress;
    ot.open && Pe.sendEvent({
      type: "track",
      event: "MODAL_CLOSE",
      properties: { connected: e }
    }), ot.open = !1, re.reset("Connect"), ze.clearLoading(), t ? e ? re.replace("Account") : re.push("Connect") : Ns.set({ open: !1 }), Y.resetUri();
  },
  setLoading(t, e) {
    e && ot.loadingNamespaceMap.set(e, t), ot.loading = t, Ns.set({ loading: t });
  },
  clearLoading() {
    ot.loadingNamespaceMap.clear(), ot.loading = !1;
  },
  shake() {
    ot.shake || (ot.shake = !0, setTimeout(() => {
      ot.shake = !1;
    }, 500));
  }
}, ze = At(lf), Si = {
  id: "2b92315d-eab7-5bef-84fa-089a131333f5",
  name: "USD Coin",
  symbol: "USDC",
  networks: [
    {
      name: "ethereum-mainnet",
      display_name: "Ethereum",
      chain_id: "1",
      contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    {
      name: "polygon-mainnet",
      display_name: "Polygon",
      chain_id: "137",
      contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    }
  ]
}, da = {
  id: "USD",
  payment_method_limits: [
    {
      id: "card",
      min: "10.00",
      max: "7500.00"
    },
    {
      id: "ach_bank_account",
      min: "10.00",
      max: "25000.00"
    }
  ]
}, uf = {
  providers: Ku,
  selectedProvider: null,
  error: null,
  purchaseCurrency: Si,
  paymentCurrency: da,
  purchaseCurrencies: [Si],
  paymentCurrencies: [],
  quotesLoading: !1
}, oe = _e(uf), df = {
  state: oe,
  subscribe(t) {
    return Qe(oe, () => t(oe));
  },
  subscribeKey(t, e) {
    return et(oe, t, e);
  },
  setSelectedProvider(t) {
    if (t && t.name === "meld") {
      const e = m.state.activeChain === z.CHAIN.SOLANA ? "SOL" : "USDC", s = W.state.address ?? "", r = new URL(t.url);
      r.searchParams.append("publicKey", Rp), r.searchParams.append("destinationCurrencyCode", e), r.searchParams.append("walletAddress", s), r.searchParams.append("externalCustomerId", T.state.projectId), oe.selectedProvider = { ...t, url: r.toString() };
    } else
      oe.selectedProvider = t;
  },
  setOnrampProviders(t) {
    if (Array.isArray(t) && t.every((e) => typeof e == "string")) {
      const e = t, s = Ku.filter((r) => e.includes(r.name));
      oe.providers = s;
    } else
      oe.providers = [];
  },
  setPurchaseCurrency(t) {
    oe.purchaseCurrency = t;
  },
  setPaymentCurrency(t) {
    oe.paymentCurrency = t;
  },
  setPurchaseAmount(t) {
    ha.state.purchaseAmount = t;
  },
  setPaymentAmount(t) {
    ha.state.paymentAmount = t;
  },
  async getAvailableCurrencies() {
    const t = await J.getOnrampOptions();
    oe.purchaseCurrencies = t.purchaseCurrencies, oe.paymentCurrencies = t.paymentCurrencies, oe.paymentCurrency = t.paymentCurrencies[0] || da, oe.purchaseCurrency = t.purchaseCurrencies[0] || Si, await K.fetchCurrencyImages(t.paymentCurrencies.map((e) => e.id)), await K.fetchTokenImages(t.purchaseCurrencies.map((e) => e.symbol));
  },
  async getQuote() {
    var t, e;
    oe.quotesLoading = !0;
    try {
      const s = await J.getOnrampQuote({
        purchaseCurrency: oe.purchaseCurrency,
        paymentCurrency: oe.paymentCurrency,
        amount: ((t = oe.paymentAmount) == null ? void 0 : t.toString()) || "0",
        network: (e = oe.purchaseCurrency) == null ? void 0 : e.symbol
      });
      return oe.quotesLoading = !1, oe.purchaseAmount = Number(s == null ? void 0 : s.purchaseAmount.amount), s;
    } catch (s) {
      return oe.error = s.message, oe.quotesLoading = !1, null;
    } finally {
      oe.quotesLoading = !1;
    }
  },
  resetState() {
    oe.selectedProvider = null, oe.error = null, oe.purchaseCurrency = Si, oe.paymentCurrency = da, oe.purchaseCurrencies = [Si], oe.paymentCurrencies = [], oe.paymentAmount = void 0, oe.purchaseAmount = void 0, oe.quotesLoading = !1;
  }
}, ha = At(df), _c = 2147483648, hf = {
  convertEVMChainIdToCoinType(t) {
    if (t >= _c)
      throw new Error("Invalid chainId");
    return (_c | t) >>> 0;
  }
}, _t = _e({
  suggestions: [],
  loading: !1
}), pf = {
  state: _t,
  subscribe(t) {
    return Qe(_t, () => t(_t));
  },
  subscribeKey(t, e) {
    return et(_t, t, e);
  },
  async resolveName(t) {
    var e, s;
    try {
      return await J.lookupEnsName(t);
    } catch (r) {
      const i = r;
      throw new Error(((s = (e = i == null ? void 0 : i.reasons) == null ? void 0 : e[0]) == null ? void 0 : s.description) || "Error resolving name");
    }
  },
  async isNameRegistered(t) {
    try {
      return await J.lookupEnsName(t), !0;
    } catch {
      return !1;
    }
  },
  async getSuggestions(t) {
    try {
      _t.loading = !0, _t.suggestions = [];
      const e = await J.getEnsNameSuggestions(t);
      return _t.suggestions = e.suggestions.map((s) => ({
        ...s,
        name: s.name
      })) || [], _t.suggestions;
    } catch (e) {
      const s = Pi.parseEnsApiError(e, "Error fetching name suggestions");
      throw new Error(s);
    } finally {
      _t.loading = !1;
    }
  },
  async getNamesForAddress(t) {
    try {
      if (!m.state.activeCaipNetwork)
        return [];
      const s = q.getEnsFromCacheForAddress(t);
      if (s)
        return s;
      const r = await J.reverseLookupEnsName({ address: t });
      return q.updateEnsCache({
        address: t,
        ens: r,
        timestamp: Date.now()
      }), r;
    } catch (e) {
      const s = Pi.parseEnsApiError(e, "Error fetching names for address");
      throw new Error(s);
    }
  },
  async registerName(t) {
    const e = m.state.activeCaipNetwork;
    if (!e)
      throw new Error("Network not found");
    const s = W.state.address, r = F.getAuthConnector();
    if (!s || !r)
      throw new Error("Address or auth connector not found");
    _t.loading = !0;
    try {
      const i = JSON.stringify({
        name: t,
        attributes: {},
        // Unix timestamp
        timestamp: Math.floor(Date.now() / 1e3)
      });
      re.pushTransactionStack({
        onCancel() {
          re.replace("RegisterAccountName");
        }
      });
      const n = await Y.signMessage(i);
      _t.loading = !1;
      const o = e.id;
      if (!o)
        throw new Error("Network not found");
      const a = hf.convertEVMChainIdToCoinType(Number(o));
      await J.registerEnsName({
        coinType: a,
        address: s,
        signature: n,
        message: i
      }), W.setProfileName(t, e.chainNamespace), re.replace("RegisterAccountNameSuccess");
    } catch (i) {
      const n = Pi.parseEnsApiError(i, `Error registering name ${t}`);
      throw re.replace("RegisterAccountName"), new Error(n);
    } finally {
      _t.loading = !1;
    }
  },
  validateName(t) {
    return /^[a-zA-Z0-9-]{4,}$/u.test(t);
  },
  parseEnsApiError(t, e) {
    var r, i;
    const s = t;
    return ((i = (r = s == null ? void 0 : s.reasons) == null ? void 0 : r[0]) == null ? void 0 : i.description) || e;
  }
}, Pi = At(pf), Oi = {
  getSIWX() {
    return T.state.siwx;
  },
  async initializeIfEnabled() {
    var n;
    const t = T.state.siwx, e = m.getActiveCaipAddress();
    if (!(t && e))
      return;
    const [s, r, i] = e.split(":");
    if (m.checkIfSupportedNetwork(s))
      try {
        if ((await t.getSessions(`${s}:${r}`, i)).length)
          return;
        await ze.open({
          view: "SIWXSignMessage"
        });
      } catch (o) {
        console.error("SIWXUtil:initializeIfEnabled", o), Pe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: this.getSIWXEventProperties()
        }), await ((n = Y._getClient()) == null ? void 0 : n.disconnect().catch(console.error)), re.reset("Connect"), Bt.showError("A problem occurred while trying initialize authentication");
      }
  },
  async requestSignMessage() {
    const t = T.state.siwx, e = X.getPlainAddress(m.getActiveCaipAddress()), s = m.getActiveCaipNetwork(), r = Y._getClient();
    if (!t)
      throw new Error("SIWX is not enabled");
    if (!e)
      throw new Error("No ActiveCaipAddress found");
    if (!s)
      throw new Error("No ActiveCaipNetwork or client found");
    if (!r)
      throw new Error("No ConnectionController client found");
    try {
      const i = await t.createMessage({
        chainId: s.caipNetworkId,
        accountAddress: e
      }), n = i.toString();
      F.getConnectorId(s.chainNamespace) === z.CONNECTOR_ID.AUTH && re.pushTransactionStack({});
      const a = await r.signMessage(n);
      await t.addSession({
        data: i,
        message: n,
        signature: a
      }), ze.close(), Pe.sendEvent({
        type: "track",
        event: "SIWX_AUTH_SUCCESS",
        properties: this.getSIWXEventProperties()
      });
    } catch (i) {
      const n = this.getSIWXEventProperties();
      (!ze.state.open || re.state.view === "ApproveTransaction") && await ze.open({
        view: "SIWXSignMessage"
      }), n.isSmartAccount ? Bt.showError("This application might not support Smart Accounts") : Bt.showError("Signature declined"), Pe.sendEvent({
        type: "track",
        event: "SIWX_AUTH_ERROR",
        properties: n
      }), console.error("SWIXUtil:requestSignMessage", i);
    }
  },
  async cancelSignMessage() {
    var t;
    try {
      const e = this.getSIWX();
      ((t = e == null ? void 0 : e.getRequired) == null ? void 0 : t.call(e)) ? await Y.disconnect() : ze.close(), re.reset("Connect"), Pe.sendEvent({
        event: "CLICK_CANCEL_SIWX",
        type: "track",
        properties: this.getSIWXEventProperties()
      });
    } catch (e) {
      console.error("SIWXUtil:cancelSignMessage", e);
    }
  },
  async getSessions() {
    const t = T.state.siwx, e = X.getPlainAddress(m.getActiveCaipAddress()), s = m.getActiveCaipNetwork();
    return t && e && s ? t.getSessions(s.caipNetworkId, e) : [];
  },
  async isSIWXCloseDisabled() {
    var e;
    const t = this.getSIWX();
    if (t) {
      const s = re.state.view === "ApproveTransaction", r = re.state.view === "SIWXSignMessage";
      if (s || r)
        return ((e = t.getRequired) == null ? void 0 : e.call(t)) && (await this.getSessions()).length === 0;
    }
    return !1;
  },
  async universalProviderAuthenticate({ universalProvider: t, chains: e, methods: s }) {
    var a, c, l;
    const r = Oi.getSIWX(), i = new Set(e.map((u) => u.split(":")[0]));
    if (!r || i.size !== 1 || !i.has("eip155"))
      return !1;
    const n = await r.createMessage({
      chainId: ((a = m.getActiveCaipNetwork()) == null ? void 0 : a.caipNetworkId) || "",
      accountAddress: ""
    }), o = await t.authenticate({
      nonce: n.nonce,
      domain: n.domain,
      uri: n.uri,
      exp: n.expirationTime,
      iat: n.issuedAt,
      nbf: n.notBefore,
      requestId: n.requestId,
      version: n.version,
      resources: n.resources,
      statement: n.statement,
      chainId: n.chainId,
      methods: s,
      // The first chainId is what is used for universal provider to build the message
      chains: [n.chainId, ...e.filter((u) => u !== n.chainId)]
    });
    if (Bt.showLoading("Authenticating...", { autoClose: !1 }), W.setConnectedWalletInfo({
      ...o.session.peer.metadata,
      name: o.session.peer.metadata.name,
      icon: (c = o.session.peer.metadata.icons) == null ? void 0 : c[0],
      type: "WALLET_CONNECT"
    }, Array.from(i)[0]), (l = o == null ? void 0 : o.auths) != null && l.length) {
      const u = o.auths.map((d) => {
        const h = t.client.formatAuthMessage({
          request: d.p,
          iss: d.p.iss
        });
        return {
          data: {
            ...d.p,
            accountAddress: d.p.iss.split(":").slice(-1).join(""),
            chainId: d.p.iss.split(":").slice(2, 4).join(":"),
            uri: d.p.aud,
            version: d.p.version || n.version,
            expirationTime: d.p.exp,
            issuedAt: d.p.iat,
            notBefore: d.p.nbf
          },
          message: h,
          signature: d.s.s,
          cacao: d
        };
      });
      try {
        await r.setSessions(u), Pe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_SUCCESS",
          properties: Oi.getSIWXEventProperties()
        });
      } catch (d) {
        throw console.error("SIWX:universalProviderAuth - failed to set sessions", d), Pe.sendEvent({
          type: "track",
          event: "SIWX_AUTH_ERROR",
          properties: Oi.getSIWXEventProperties()
        }), await t.disconnect().catch(console.error), d;
      } finally {
        Bt.hide();
      }
    }
    return !0;
  },
  getSIWXEventProperties() {
    var e, s;
    const t = m.state.activeChain;
    return {
      network: ((e = m.state.activeCaipNetwork) == null ? void 0 : e.caipNetworkId) || "",
      isSmartAccount: ((s = W.state.preferredAccountTypes) == null ? void 0 : s[t]) === _i.ACCOUNT_TYPES.SMART_ACCOUNT
    };
  },
  async clearSessions() {
    const t = this.getSIWX();
    t && await t.setSessions([]);
  }
};
function ff(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function Fe(t, ...e) {
  try {
    return ff(t(...e));
  } catch (s) {
    return Promise.reject(s);
  }
}
function gf(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function mf(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function Kn(t) {
  if (gf(t))
    return String(t);
  if (mf(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return Kn(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
const pa = "base64:";
function wf(t) {
  return typeof t == "string" ? t : pa + vf(t);
}
function yf(t) {
  return typeof t != "string" || !t.startsWith(pa) ? t : bf(t.slice(pa.length));
}
function bf(t) {
  return globalThis.Buffer ? Buffer.from(t, "base64") : Uint8Array.from(
    globalThis.atob(t),
    (e) => e.codePointAt(0)
  );
}
function vf(t) {
  return globalThis.Buffer ? Buffer.from(t).toString("base64") : globalThis.btoa(String.fromCodePoint(...t));
}
function lt(t) {
  var e;
  return t && ((e = t.split("?")[0]) == null ? void 0 : e.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
}
function Ef(...t) {
  return lt(t.join(":"));
}
function $n(t) {
  return t = lt(t), t ? t + ":" : "";
}
function Cf(t, e) {
  if (e === void 0)
    return !0;
  let s = 0, r = t.indexOf(":");
  for (; r > -1; )
    s++, r = t.indexOf(":", r + 1);
  return s <= e;
}
function If(t, e) {
  return e ? t.startsWith(e) && t[t.length - 1] !== "$" : t[t.length - 1] !== "$";
}
const Af = "memory", Nf = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: Af,
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
    setItem(e, s) {
      t.set(e, s);
    },
    setItemRaw(e, s) {
      t.set(e, s);
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
function _f(t = {}) {
  const e = {
    mounts: { "": t.driver || Nf() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, s = (l) => {
    for (const u of e.mountpoints)
      if (l.startsWith(u))
        return {
          base: u,
          relativeKey: l.slice(u.length),
          driver: e.mounts[u]
        };
    return {
      base: "",
      relativeKey: l,
      driver: e.mounts[""]
    };
  }, r = (l, u) => e.mountpoints.filter(
    (d) => d.startsWith(l) || u && l.startsWith(d)
  ).map((d) => ({
    relativeBase: l.length > d.length ? l.slice(d.length) : void 0,
    mountpoint: d,
    driver: e.mounts[d]
  })), i = (l, u) => {
    if (e.watching) {
      u = lt(u);
      for (const d of e.watchListeners)
        d(l, u);
    }
  }, n = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const l in e.mounts)
        e.unwatch[l] = await Sc(
          e.mounts[l],
          i,
          l
        );
    }
  }, o = async () => {
    if (e.watching) {
      for (const l in e.unwatch)
        await e.unwatch[l]();
      e.unwatch = {}, e.watching = !1;
    }
  }, a = (l, u, d) => {
    const h = /* @__PURE__ */ new Map(), p = (g) => {
      let f = h.get(g.base);
      return f || (f = {
        driver: g.driver,
        base: g.base,
        items: []
      }, h.set(g.base, f)), f;
    };
    for (const g of l) {
      const f = typeof g == "string", w = lt(f ? g : g.key), y = f ? void 0 : g.value, b = f || !g.options ? u : { ...u, ...g.options }, v = s(w);
      p(v).items.push({
        key: w,
        value: y,
        relativeKey: v.relativeKey,
        options: b
      });
    }
    return Promise.all([...h.values()].map((g) => d(g))).then(
      (g) => g.flat()
    );
  }, c = {
    // Item
    hasItem(l, u = {}) {
      l = lt(l);
      const { relativeKey: d, driver: h } = s(l);
      return Fe(h.hasItem, d, u);
    },
    getItem(l, u = {}) {
      l = lt(l);
      const { relativeKey: d, driver: h } = s(l);
      return Fe(h.getItem, d, u).then(
        (p) => Sn(p)
      );
    },
    getItems(l, u = {}) {
      return a(l, u, (d) => d.driver.getItems ? Fe(
        d.driver.getItems,
        d.items.map((h) => ({
          key: h.relativeKey,
          options: h.options
        })),
        u
      ).then(
        (h) => h.map((p) => ({
          key: Ef(d.base, p.key),
          value: Sn(p.value)
        }))
      ) : Promise.all(
        d.items.map((h) => Fe(
          d.driver.getItem,
          h.relativeKey,
          h.options
        ).then((p) => ({
          key: h.key,
          value: Sn(p)
        })))
      ));
    },
    getItemRaw(l, u = {}) {
      l = lt(l);
      const { relativeKey: d, driver: h } = s(l);
      return h.getItemRaw ? Fe(h.getItemRaw, d, u) : Fe(h.getItem, d, u).then(
        (p) => yf(p)
      );
    },
    async setItem(l, u, d = {}) {
      if (u === void 0)
        return c.removeItem(l);
      l = lt(l);
      const { relativeKey: h, driver: p } = s(l);
      p.setItem && (await Fe(p.setItem, h, Kn(u), d), p.watch || i("update", l));
    },
    async setItems(l, u) {
      await a(l, u, async (d) => {
        if (d.driver.setItems)
          return Fe(
            d.driver.setItems,
            d.items.map((h) => ({
              key: h.relativeKey,
              value: Kn(h.value),
              options: h.options
            })),
            u
          );
        d.driver.setItem && await Promise.all(
          d.items.map((h) => Fe(
            d.driver.setItem,
            h.relativeKey,
            Kn(h.value),
            h.options
          ))
        );
      });
    },
    async setItemRaw(l, u, d = {}) {
      if (u === void 0)
        return c.removeItem(l, d);
      l = lt(l);
      const { relativeKey: h, driver: p } = s(l);
      if (p.setItemRaw)
        await Fe(p.setItemRaw, h, u, d);
      else if (p.setItem)
        await Fe(p.setItem, h, wf(u), d);
      else
        return;
      p.watch || i("update", l);
    },
    async removeItem(l, u = {}) {
      typeof u == "boolean" && (u = { removeMeta: u }), l = lt(l);
      const { relativeKey: d, driver: h } = s(l);
      h.removeItem && (await Fe(h.removeItem, d, u), (u.removeMeta || u.removeMata) && await Fe(h.removeItem, d + "$", u), h.watch || i("remove", l));
    },
    // Meta
    async getMeta(l, u = {}) {
      typeof u == "boolean" && (u = { nativeOnly: u }), l = lt(l);
      const { relativeKey: d, driver: h } = s(l), p = /* @__PURE__ */ Object.create(null);
      if (h.getMeta && Object.assign(p, await Fe(h.getMeta, d, u)), !u.nativeOnly) {
        const g = await Fe(
          h.getItem,
          d + "$",
          u
        ).then((f) => Sn(f));
        g && typeof g == "object" && (typeof g.atime == "string" && (g.atime = new Date(g.atime)), typeof g.mtime == "string" && (g.mtime = new Date(g.mtime)), Object.assign(p, g));
      }
      return p;
    },
    setMeta(l, u, d = {}) {
      return this.setItem(l + "$", u, d);
    },
    removeMeta(l, u = {}) {
      return this.removeItem(l + "$", u);
    },
    // Keys
    async getKeys(l, u = {}) {
      var w;
      l = $n(l);
      const d = r(l, !0);
      let h = [];
      const p = [];
      let g = !0;
      for (const y of d) {
        (w = y.driver.flags) != null && w.maxDepth || (g = !1);
        const b = await Fe(
          y.driver.getKeys,
          y.relativeBase,
          u
        );
        for (const v of b) {
          const C = y.mountpoint + lt(v);
          h.some((S) => C.startsWith(S)) || p.push(C);
        }
        h = [
          y.mountpoint,
          ...h.filter((v) => !v.startsWith(y.mountpoint))
        ];
      }
      const f = u.maxDepth !== void 0 && !g;
      return p.filter(
        (y) => (!f || Cf(y, u.maxDepth)) && If(y, l)
      );
    },
    // Utils
    async clear(l, u = {}) {
      l = $n(l), await Promise.all(
        r(l, !1).map(async (d) => {
          if (d.driver.clear)
            return Fe(d.driver.clear, d.relativeBase, u);
          if (d.driver.removeItem) {
            const h = await d.driver.getKeys(d.relativeBase || "", u);
            return Promise.all(
              h.map((p) => d.driver.removeItem(p, u))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((l) => Pc(l))
      );
    },
    async watch(l) {
      return await n(), e.watchListeners.push(l), async () => {
        e.watchListeners = e.watchListeners.filter(
          (u) => u !== l
        ), e.watchListeners.length === 0 && await o();
      };
    },
    async unwatch() {
      e.watchListeners = [], await o();
    },
    // Mount
    mount(l, u) {
      if (l = $n(l), l && e.mounts[l])
        throw new Error(`already mounted at ${l}`);
      return l && (e.mountpoints.push(l), e.mountpoints.sort((d, h) => h.length - d.length)), e.mounts[l] = u, e.watching && Promise.resolve(Sc(u, i, l)).then((d) => {
        e.unwatch[l] = d;
      }).catch(console.error), c;
    },
    async unmount(l, u = !0) {
      var d, h;
      l = $n(l), !(!l || !e.mounts[l]) && (e.watching && l in e.unwatch && ((h = (d = e.unwatch)[l]) == null || h.call(d), delete e.unwatch[l]), u && await Pc(e.mounts[l]), e.mountpoints = e.mountpoints.filter((p) => p !== l), delete e.mounts[l]);
    },
    getMount(l = "") {
      l = lt(l) + ":";
      const u = s(l);
      return {
        driver: u.driver,
        base: u.base
      };
    },
    getMounts(l = "", u = {}) {
      return l = lt(l), r(l, u.parents).map((h) => ({
        driver: h.driver,
        base: h.mountpoint
      }));
    },
    // Aliases
    keys: (l, u = {}) => c.getKeys(l, u),
    get: (l, u = {}) => c.getItem(l, u),
    set: (l, u, d = {}) => c.setItem(l, u, d),
    has: (l, u = {}) => c.hasItem(l, u),
    del: (l, u = {}) => c.removeItem(l, u),
    remove: (l, u = {}) => c.removeItem(l, u)
  };
  return c;
}
function Sc(t, e, s) {
  return t.watch ? t.watch((r, i) => e(r, s + i)) : () => {
  };
}
async function Pc(t) {
  typeof t.dispose == "function" && await Fe(t.dispose);
}
const Sf = "idb-keyval";
var Pf = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", s = (i) => e + i;
  let r;
  return t.dbName && t.storeName && (r = Bh(t.dbName, t.storeName)), { name: Sf, options: t, async hasItem(i) {
    return !(typeof await fc(s(i), r) > "u");
  }, async getItem(i) {
    return await fc(s(i), r) ?? null;
  }, setItem(i, n) {
    return Wh(s(i), n, r);
  }, removeItem(i) {
    return qh(s(i), r);
  }, getKeys() {
    return jh(r);
  }, clear() {
    return Fh(r);
  } };
};
const Of = "WALLET_CONNECT_V2_INDEXED_DB", Tf = "keyvaluestorage";
let xf = class {
  constructor() {
    this.indexedDb = _f({ driver: Pf({ dbName: Of, storeName: Tf }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const s = await this.indexedDb.getItem(e);
    if (s !== null) return s;
  }
  async setItem(e, s) {
    await this.indexedDb.setItem(e, Ha(s));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var xo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vn = { exports: {} };
(function() {
  let t;
  function e() {
  }
  t = e, t.prototype.getItem = function(s) {
    return this.hasOwnProperty(s) ? String(this[s]) : null;
  }, t.prototype.setItem = function(s, r) {
    this[s] = String(r);
  }, t.prototype.removeItem = function(s) {
    delete this[s];
  }, t.prototype.clear = function() {
    const s = this;
    Object.keys(s).forEach(function(r) {
      s[r] = void 0, delete s[r];
    });
  }, t.prototype.key = function(s) {
    return s = s || 0, Object.keys(this)[s];
  }, t.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof xo < "u" && xo.localStorage ? Vn.exports = xo.localStorage : typeof window < "u" && window.localStorage ? Vn.exports = window.localStorage : Vn.exports = new e();
})();
function kf(t) {
  var e;
  return [t[0], so((e = t[1]) != null ? e : "")];
}
let $f = class {
  constructor() {
    this.localStorage = Vn.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(kf);
  }
  async getItem(e) {
    const s = this.localStorage.getItem(e);
    if (s !== null) return so(s);
  }
  async setItem(e, s) {
    this.localStorage.setItem(e, Ha(s));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
};
const Rf = "wc_storage_version", Oc = 1, Uf = async (t, e, s) => {
  const r = Rf, i = await e.getItem(r);
  if (i && i >= Oc) {
    s(e);
    return;
  }
  const n = await t.getKeys();
  if (!n.length) {
    s(e);
    return;
  }
  const o = [];
  for (; n.length; ) {
    const a = n.shift();
    if (!a) continue;
    const c = a.toLowerCase();
    if (c.includes("wc@") || c.includes("walletconnect") || c.includes("wc_") || c.includes("wallet_connect")) {
      const l = await t.getItem(a);
      await e.setItem(a, l), o.push(a);
    }
  }
  await e.setItem(r, Oc), s(e), Df(t, o);
}, Df = async (t, e) => {
  e.length && e.forEach(async (s) => {
    await t.removeItem(s);
  });
};
let Lf = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (s) => {
      this.storage = s, this.initialized = !0;
    };
    const e = new $f();
    this.storage = e;
    try {
      const s = new xf();
      Uf(e, s, this.setInitialized);
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
  async setItem(e, s) {
    return await this.initialize(), this.storage.setItem(e, s);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const s = setInterval(() => {
        this.initialized && (clearInterval(s), e());
      }, 20);
    });
  }
};
var Mf = Object.defineProperty, Bf = (t, e, s) => e in t ? Mf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Tc = (t, e, s) => Bf(t, typeof e != "symbol" ? e + "" : e, s);
let Ff = class extends Qr {
  constructor(e) {
    super(), this.opts = e, Tc(this, "protocol", "wc"), Tc(this, "version", 2);
  }
};
var jf = Object.defineProperty, qf = (t, e, s) => e in t ? jf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Wf = (t, e, s) => qf(t, e + "", s);
let zf = class extends Qr {
  constructor(e, s) {
    super(), this.core = e, this.logger = s, Wf(this, "records", /* @__PURE__ */ new Map());
  }
}, Hf = class {
  constructor(e, s) {
    this.logger = e, this.core = s;
  }
}, Kf = class extends Qr {
  constructor(e, s) {
    super(), this.relayer = e, this.logger = s;
  }
}, Vf = class extends Qr {
  constructor(e) {
    super();
  }
}, Gf = class {
  constructor(e, s, r, i) {
    this.core = e, this.logger = s, this.name = r;
  }
}, Jf = class extends Qr {
  constructor(e, s) {
    super(), this.relayer = e, this.logger = s;
  }
}, Yf = class extends Qr {
  constructor(e, s) {
    super(), this.core = e, this.logger = s;
  }
}, Xf = class {
  constructor(e, s, r) {
    this.core = e, this.logger = s, this.store = r;
  }
}, Zf = class {
  constructor(e, s) {
    this.projectId = e, this.logger = s;
  }
}, Qf = class {
  constructor(e, s, r) {
    this.core = e, this.logger = s, this.telemetryEnabled = r;
  }
};
var eg = Object.defineProperty, tg = (t, e, s) => e in t ? eg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, xc = (t, e, s) => tg(t, typeof e != "symbol" ? e + "" : e, s);
let sg = class {
  constructor(e) {
    this.opts = e, xc(this, "protocol", "wc"), xc(this, "version", 2);
  }
}, rg = class {
  constructor(e) {
    this.client = e;
  }
};
function nn(t, { strict: e = !0 } = {}) {
  return !t || typeof t != "string" ? !1 : e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
}
function kc(t) {
  return nn(t, { strict: !1 }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
const Yu = "2.23.2";
let ui = {
  getDocsUrl: ({ docsBaseUrl: t, docsPath: e = "", docsSlug: s }) => e ? `${t ?? "https://viem.sh"}${e}${s ? `#${s}` : ""}` : void 0,
  version: `viem@${Yu}`
};
class Qs extends Error {
  constructor(e, s = {}) {
    var a;
    const r = (() => {
      var c;
      return s.cause instanceof Qs ? s.cause.details : (c = s.cause) != null && c.message ? s.cause.message : s.details;
    })(), i = s.cause instanceof Qs && s.cause.docsPath || s.docsPath, n = (a = ui.getDocsUrl) == null ? void 0 : a.call(ui, { ...s, docsPath: i }), o = [
      e || "An error occurred.",
      "",
      ...s.metaMessages ? [...s.metaMessages, ""] : [],
      ...n ? [`Docs: ${n}`] : [],
      ...r ? [`Details: ${r}`] : [],
      ...ui.version ? [`Version: ${ui.version}`] : []
    ].join(`
`);
    super(o, s.cause ? { cause: s.cause } : void 0), Object.defineProperty(this, "details", {
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
    }), this.details = r, this.docsPath = i, this.metaMessages = s.metaMessages, this.name = s.name ?? this.name, this.shortMessage = e, this.version = Yu;
  }
  walk(e) {
    return Xu(this, e);
  }
}
function Xu(t, e) {
  return e != null && e(t) ? t : t && typeof t == "object" && "cause" in t && t.cause !== void 0 ? Xu(t.cause, e) : e ? null : t;
}
class Zu extends Qs {
  constructor({ size: e, targetSize: s, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${s}).`, { name: "SizeExceedsPaddingSizeError" });
  }
}
function si(t, { dir: e, size: s = 32 } = {}) {
  return typeof t == "string" ? ig(t, { dir: e, size: s }) : ng(t, { dir: e, size: s });
}
function ig(t, { dir: e, size: s = 32 } = {}) {
  if (s === null)
    return t;
  const r = t.replace("0x", "");
  if (r.length > s * 2)
    throw new Zu({
      size: Math.ceil(r.length / 2),
      targetSize: s,
      type: "hex"
    });
  return `0x${r[e === "right" ? "padEnd" : "padStart"](s * 2, "0")}`;
}
function ng(t, { dir: e, size: s = 32 } = {}) {
  if (s === null)
    return t;
  if (t.length > s)
    throw new Zu({
      size: t.length,
      targetSize: s,
      type: "bytes"
    });
  const r = new Uint8Array(s);
  for (let i = 0; i < s; i++) {
    const n = e === "right";
    r[n ? i : s - i - 1] = t[n ? i : t.length - i - 1];
  }
  return r;
}
class og extends Qs {
  constructor({ max: e, min: s, signed: r, size: i, value: n }) {
    super(`Number "${n}" is not in safe ${i ? `${i * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${s} to ${e})` : `(above ${s})`}`, { name: "IntegerOutOfRangeError" });
  }
}
class ag extends Qs {
  constructor({ givenSize: e, maxSize: s }) {
    super(`Size cannot exceed ${s} bytes. Given size: ${e} bytes.`, { name: "SizeOverflowError" });
  }
}
function ri(t, { size: e }) {
  if (kc(t) > e)
    throw new ag({
      givenSize: kc(t),
      maxSize: e
    });
}
function fa(t, e = {}) {
  const { signed: s } = e;
  e.size && ri(t, { size: e.size });
  const r = BigInt(t);
  if (!s)
    return r;
  const i = (t.length - 2) / 2, n = (1n << BigInt(i) * 8n - 1n) - 1n;
  return r <= n ? r : r - BigInt(`0x${"f".padStart(i * 2, "f")}`) - 1n;
}
function cg(t, e = {}) {
  return Number(fa(t, e));
}
const lg = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function ga(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? ed(t, e) : typeof t == "string" ? hg(t, e) : typeof t == "boolean" ? ug(t, e) : Qu(t, e);
}
function ug(t, e = {}) {
  const s = `0x${Number(t)}`;
  return typeof e.size == "number" ? (ri(s, { size: e.size }), si(s, { size: e.size })) : s;
}
function Qu(t, e = {}) {
  let s = "";
  for (let i = 0; i < t.length; i++)
    s += lg[t[i]];
  const r = `0x${s}`;
  return typeof e.size == "number" ? (ri(r, { size: e.size }), si(r, { dir: "right", size: e.size })) : r;
}
function ed(t, e = {}) {
  const { signed: s, size: r } = e, i = BigInt(t);
  let n;
  r ? s ? n = (1n << BigInt(r) * 8n - 1n) - 1n : n = 2n ** (BigInt(r) * 8n) - 1n : typeof t == "number" && (n = BigInt(Number.MAX_SAFE_INTEGER));
  const o = typeof n == "bigint" && s ? -n - 1n : 0;
  if (n && i > n || i < o) {
    const c = typeof t == "bigint" ? "n" : "";
    throw new og({
      max: n ? `${n}${c}` : void 0,
      min: `${o}${c}`,
      signed: s,
      size: r,
      value: `${t}${c}`
    });
  }
  const a = `0x${(s && i < 0 ? (1n << BigInt(r * 8)) + BigInt(i) : i).toString(16)}`;
  return r ? si(a, { size: r }) : a;
}
const dg = /* @__PURE__ */ new TextEncoder();
function hg(t, e = {}) {
  const s = dg.encode(t);
  return Qu(s, e);
}
const pg = /* @__PURE__ */ new TextEncoder();
function fg(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? mg(t, e) : typeof t == "boolean" ? gg(t, e) : nn(t) ? td(t, e) : sd(t, e);
}
function gg(t, e = {}) {
  const s = new Uint8Array(1);
  return s[0] = Number(t), typeof e.size == "number" ? (ri(s, { size: e.size }), si(s, { size: e.size })) : s;
}
const is = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function $c(t) {
  if (t >= is.zero && t <= is.nine)
    return t - is.zero;
  if (t >= is.A && t <= is.F)
    return t - (is.A - 10);
  if (t >= is.a && t <= is.f)
    return t - (is.a - 10);
}
function td(t, e = {}) {
  let s = t;
  e.size && (ri(s, { size: e.size }), s = si(s, { dir: "right", size: e.size }));
  let r = s.slice(2);
  r.length % 2 && (r = `0${r}`);
  const i = r.length / 2, n = new Uint8Array(i);
  for (let o = 0, a = 0; o < i; o++) {
    const c = $c(r.charCodeAt(a++)), l = $c(r.charCodeAt(a++));
    if (c === void 0 || l === void 0)
      throw new Qs(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
    n[o] = c * 16 + l;
  }
  return n;
}
function mg(t, e) {
  const s = ed(t, e);
  return td(s);
}
function sd(t, e = {}) {
  const s = pg.encode(t);
  return typeof e.size == "number" ? (ri(s, { size: e.size }), si(s, { dir: "right", size: e.size })) : s;
}
function io(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error("positive integer expected, got " + t);
}
function wg(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function go(t, ...e) {
  if (!wg(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function lA(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  io(t.outputLen), io(t.blockLen);
}
function Rc(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function yg(t, e) {
  go(t);
  const s = e.outputLen;
  if (t.length < s)
    throw new Error("digestInto() expects output buffer of length at least " + s);
}
const Rn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Uc = /* @__PURE__ */ BigInt(32);
function bg(t, e = !1) {
  return e ? { h: Number(t & Rn), l: Number(t >> Uc & Rn) } : { h: Number(t >> Uc & Rn) | 0, l: Number(t & Rn) | 0 };
}
function vg(t, e = !1) {
  let s = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: n, l: o } = bg(t[i], e);
    [s[i], r[i]] = [n, o];
  }
  return [s, r];
}
const Eg = (t, e, s) => t << s | e >>> 32 - s, Cg = (t, e, s) => e << s | t >>> 32 - s, Ig = (t, e, s) => e << s - 32 | t >>> 64 - s, Ag = (t, e, s) => t << s - 32 | e >>> 64 - s, hr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ng(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function uA(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function dA(t, e) {
  return t << 32 - e | t >>> e;
}
const Dc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function _g(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
function Lc(t) {
  for (let e = 0; e < t.length; e++)
    t[e] = _g(t[e]);
}
function Sg(t) {
  if (typeof t != "string")
    throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function rd(t) {
  return typeof t == "string" && (t = Sg(t)), go(t), t;
}
function hA(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    go(i), e += i.length;
  }
  const s = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const n = t[r];
    s.set(n, i), i += n.length;
  }
  return s;
}
class Pg {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Og(t) {
  const e = (r) => t().update(rd(r)).digest(), s = t();
  return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
}
function pA(t = 32) {
  if (hr && typeof hr.getRandomValues == "function")
    return hr.getRandomValues(new Uint8Array(t));
  if (hr && typeof hr.randomBytes == "function")
    return hr.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
const id = [], nd = [], od = [], Tg = /* @__PURE__ */ BigInt(0), di = /* @__PURE__ */ BigInt(1), xg = /* @__PURE__ */ BigInt(2), kg = /* @__PURE__ */ BigInt(7), $g = /* @__PURE__ */ BigInt(256), Rg = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = di, s = 1, r = 0; t < 24; t++) {
  [s, r] = [r, (2 * s + 3 * r) % 5], id.push(2 * (5 * r + s)), nd.push((t + 1) * (t + 2) / 2 % 64);
  let i = Tg;
  for (let n = 0; n < 7; n++)
    e = (e << di ^ (e >> kg) * Rg) % $g, e & xg && (i ^= di << (di << /* @__PURE__ */ BigInt(n)) - di);
  od.push(i);
}
const [Ug, Dg] = /* @__PURE__ */ vg(od, !0), Mc = (t, e, s) => s > 32 ? Ig(t, e, s) : Eg(t, e, s), Bc = (t, e, s) => s > 32 ? Ag(t, e, s) : Cg(t, e, s);
function Lg(t, e = 24) {
  const s = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], u = s[c + 1], d = Mc(l, u, 1) ^ s[a], h = Bc(l, u, 1) ^ s[a + 1];
      for (let p = 0; p < 50; p += 10)
        t[o + p] ^= d, t[o + p + 1] ^= h;
    }
    let i = t[2], n = t[3];
    for (let o = 0; o < 24; o++) {
      const a = nd[o], c = Mc(i, n, a), l = Bc(i, n, a), u = id[o];
      i = t[u], n = t[u + 1], t[u] = c, t[u + 1] = l;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        s[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
    }
    t[0] ^= Ug[r], t[1] ^= Dg[r];
  }
  s.fill(0);
}
class Za extends Pg {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, s, r, i = !1, n = 24) {
    if (super(), this.blockLen = e, this.suffix = s, this.outputLen = r, this.enableXOF = i, this.rounds = n, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, io(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Ng(this.state);
  }
  keccak() {
    Dc || Lc(this.state32), Lg(this.state32, this.rounds), Dc || Lc(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Rc(this);
    const { blockLen: s, state: r } = this;
    e = rd(e);
    const i = e.length;
    for (let n = 0; n < i; ) {
      const o = Math.min(s - this.pos, i - n);
      for (let a = 0; a < o; a++)
        r[this.pos++] ^= e[n++];
      this.pos === s && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: s, pos: r, blockLen: i } = this;
    e[r] ^= s, s & 128 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Rc(this, !1), go(e), this.finish();
    const s = this.state, { blockLen: r } = this;
    for (let i = 0, n = e.length; i < n; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, n - i);
      e.set(s.subarray(this.posOut, this.posOut + o), i), this.posOut += o, i += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return io(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (yg(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: s, suffix: r, outputLen: i, rounds: n, enableXOF: o } = this;
    return e || (e = new Za(s, r, i, o, n)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = n, e.suffix = r, e.outputLen = i, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
const Mg = (t, e, s) => Og(() => new Za(e, t, s)), Bg = /* @__PURE__ */ Mg(1, 136, 256 / 8);
function ad(t, e) {
  const s = e || "hex", r = Bg(nn(t, { strict: !1 }) ? fg(t) : t);
  return s === "bytes" ? r : ga(r);
}
class Fg extends Map {
  constructor(e) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = e;
  }
  get(e) {
    const s = super.get(e);
    return super.has(e) && s !== void 0 && (this.delete(e), super.set(e, s)), s;
  }
  set(e, s) {
    if (super.set(e, s), this.maxSize && this.size > this.maxSize) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
}
const ko = /* @__PURE__ */ new Fg(8192);
function jg(t, e) {
  if (ko.has(`${t}.${e}`))
    return ko.get(`${t}.${e}`);
  const s = t.substring(2).toLowerCase(), r = ad(sd(s), "bytes"), i = s.split("");
  for (let o = 0; o < 40; o += 2)
    r[o >> 1] >> 4 >= 8 && i[o] && (i[o] = i[o].toUpperCase()), (r[o >> 1] & 15) >= 8 && i[o + 1] && (i[o + 1] = i[o + 1].toUpperCase());
  const n = `0x${i.join("")}`;
  return ko.set(`${t}.${e}`, n), n;
}
function qg(t) {
  const e = ad(`0x${t.substring(4)}`).substring(26);
  return jg(`0x${e}`);
}
async function Wg({ hash: t, signature: e }) {
  const s = nn(t) ? t : ga(t), { secp256k1: r } = await import("./secp256k1-Dv_CZw7K.js");
  return `0x${(() => {
    if (typeof e == "object" && "r" in e && "s" in e) {
      const { r: l, s: u, v: d, yParity: h } = e, p = Number(h ?? d), g = Fc(p);
      return new r.Signature(fa(l), fa(u)).addRecoveryBit(g);
    }
    const o = nn(e) ? e : ga(e), a = cg(`0x${o.slice(130)}`), c = Fc(a);
    return r.Signature.fromCompact(o.substring(2, 130)).addRecoveryBit(c);
  })().recoverPublicKey(s.substring(2)).toHex(!1)}`;
}
function Fc(t) {
  if (t === 0 || t === 1)
    return t;
  if (t === 27)
    return 0;
  if (t === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function zg({ hash: t, signature: e }) {
  return qg(await Wg({ hash: t, signature: e }));
}
function cd(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(t) : new Uint8Array(t);
}
function Ti(t, e) {
  e || (e = t.reduce((i, n) => i + n.length, 0));
  const s = cd(e);
  let r = 0;
  for (const i of t)
    s.set(i, r), r += i.length;
  return s;
}
function ld(t, e, s, r) {
  return {
    name: t,
    prefix: e,
    encoder: {
      name: t,
      prefix: e,
      encode: s
    },
    decoder: { decode: r }
  };
}
const jc = ld("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), $o = ld("ascii", "a", (t) => {
  let e = "a";
  for (let s = 0; s < t.length; s++)
    e += String.fromCharCode(t[s]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = cd(t.length);
  for (let s = 0; s < t.length; s++)
    e[s] = t.charCodeAt(s);
  return e;
}), ud = {
  utf8: jc,
  "utf-8": jc,
  hex: gc.base16,
  latin1: $o,
  ascii: $o,
  binary: $o,
  ...gc
};
function xt(t, e = "utf8") {
  const s = ud[e];
  if (!s)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t, "utf8") : s.decoder.decode(`${s.prefix}${t}`);
}
function ht(t, e = "utf8") {
  const s = ud[e];
  if (!s)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : s.encoder.encode(t).substring(1);
}
const Hg = ":";
function Dr(t) {
  const [e, s] = t.split(Hg);
  return { namespace: e, reference: s };
}
function dd(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
var Kg = Object.defineProperty, Vg = Object.defineProperties, Gg = Object.getOwnPropertyDescriptors, qc = Object.getOwnPropertySymbols, Jg = Object.prototype.hasOwnProperty, Yg = Object.prototype.propertyIsEnumerable, Wc = (t, e, s) => e in t ? Kg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, zc = (t, e) => {
  for (var s in e || (e = {})) Jg.call(e, s) && Wc(t, s, e[s]);
  if (qc) for (var s of qc(e)) Yg.call(e, s) && Wc(t, s, e[s]);
  return t;
}, Xg = (t, e) => Vg(t, Gg(e));
const Zg = "ReactNative", vt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Qg = "js";
function no() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function ks() {
  return !Br() && !!Du() && navigator.product === Zg;
}
function em() {
  return ks() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function tm() {
  return ks() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function ii() {
  return !no() && !!Du() && !!Br();
}
function wn() {
  return ks() ? vt.reactNative : no() ? vt.node : ii() ? vt.browser : vt.unknown;
}
function Hc() {
  var t;
  try {
    return ks() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function sm(t, e) {
  const s = new URLSearchParams(t);
  for (const r of Object.keys(e).sort()) if (e.hasOwnProperty(r)) {
    const i = e[r];
    i !== void 0 && s.set(r, i);
  }
  return s.toString();
}
function rm(t) {
  var e, s;
  const r = hd();
  try {
    return t != null && t.url && r.url && new URL(t.url).host !== new URL(r.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`), t.url = r.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((i) => i !== "")), Xg(zc(zc({}, r), t), { url: (t == null ? void 0 : t.url) || r.url, name: (t == null ? void 0 : t.name) || r.name, description: (t == null ? void 0 : t.description) || r.description, icons: (s = t == null ? void 0 : t.icons) != null && s.length && t.icons.length > 0 ? t.icons : r.icons });
  } catch (i) {
    return console.warn("Error populating app metadata", i), t || r;
  }
}
function hd() {
  return zh() || { name: "", description: "", url: "", icons: [""] };
}
function im() {
  if (wn() === vt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: s, Version: r } = global.Platform;
    return [s, r].join("-");
  }
  const t = Kh();
  if (t === null) return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function nm() {
  var t;
  const e = wn();
  return e === vt.browser ? [e, ((t = Vh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function pd(t, e, s) {
  const r = im(), i = nm();
  return [[t, e].join("-"), [Qg, s].join("-"), r, i].join("/");
}
function om({ protocol: t, version: e, relayUrl: s, sdkVersion: r, auth: i, projectId: n, useOnCloseEvent: o, bundleId: a, packageName: c }) {
  const l = s.split("?"), u = pd(t, e, r), d = { auth: i, ua: u, projectId: n, useOnCloseEvent: o, packageName: c || void 0, bundleId: a || void 0 }, h = sm(l[1] || "", d);
  return l[0] + "?" + h;
}
function Ks(t, e) {
  return t.filter((s) => e.includes(s)).length === t.length;
}
function ma(t) {
  return Object.fromEntries(t.entries());
}
function wa(t) {
  return new Map(Object.entries(t));
}
function Bs(t = D.FIVE_MINUTES, e) {
  const s = D.toMiliseconds(t || D.FIVE_MINUTES);
  let r, i, n, o;
  return { resolve: (a) => {
    n && r && (clearTimeout(n), r(a), o = Promise.resolve(a));
  }, reject: (a) => {
    n && i && (clearTimeout(n), i(a));
  }, done: () => new Promise((a, c) => {
    if (o) return a(o);
    n = setTimeout(() => {
      const l = new Error(e);
      o = Promise.reject(l), c(l);
    }, s), r = a, i = c;
  }) };
}
function As(t, e, s) {
  return new Promise(async (r, i) => {
    const n = setTimeout(() => i(new Error(s)), e);
    try {
      const o = await t;
      r(o);
    } catch (o) {
      i(o);
    }
    clearTimeout(n);
  });
}
function fd(t, e) {
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
function am(t) {
  return fd("topic", t);
}
function cm(t) {
  return fd("id", t);
}
function gd(t) {
  const [e, s] = t.split(":"), r = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof s == "string") r.topic = s;
  else if (e === "id" && Number.isInteger(Number(s))) r.id = Number(s);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${s}`);
  return r;
}
function De(t, e) {
  return D.fromMiliseconds(Date.now() + D.toMiliseconds(t));
}
function vs(t) {
  return Date.now() >= D.toMiliseconds(t);
}
function pe(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
function Xt(t = [], e = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e])];
}
async function lm({ id: t, topic: e, wcDeepLink: s }) {
  var r;
  try {
    if (!s) return;
    const i = typeof s == "string" ? JSON.parse(s) : s, n = i == null ? void 0 : i.href;
    if (typeof n != "string") return;
    const o = um(n, t, e), a = wn();
    if (a === vt.browser) {
      if (!((r = Br()) != null && r.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      dm(o);
    } else a === vt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(o);
  } catch (i) {
    console.error(i);
  }
}
function um(t, e, s) {
  const r = `requestId=${e}&sessionTopic=${s}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let i = `${t}`;
  if (t.startsWith("https://t.me")) {
    const n = t.includes("?") ? "&startapp=" : "?startapp=";
    i = `${i}${n}${gm(r, !0)}`;
  } else i = `${i}/wc?${r}`;
  return i;
}
function dm(t) {
  let e = "_self";
  fm() ? e = "_top" : (pm() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
}
async function hm(t, e) {
  let s = "";
  try {
    if (ii() && (s = localStorage.getItem(e), s)) return s;
    s = await t.getItem(e);
  } catch (r) {
    console.error(r);
  }
  return s;
}
function Kc(t, e) {
  if (!t.includes(e)) return null;
  const s = t.split(/([&,?,=])/), r = s.indexOf(e);
  return s[r + 2];
}
function Vc() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Qa() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function pm() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function fm() {
  try {
    return window.self !== window.top;
  } catch {
    return !1;
  }
}
function gm(t, e = !1) {
  const s = Buffer.from(t).toString("base64");
  return e ? s.replace(/[=]/g, "") : s;
}
function md(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function mm(t) {
  return new Promise((e) => setTimeout(e, t));
}
function on(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function wm(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function yn(t, ...e) {
  if (!wm(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function ec(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
  on(t.outputLen), on(t.blockLen);
}
function zr(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function wd(t, e) {
  yn(t);
  const s = e.outputLen;
  if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
}
const Un = BigInt(2 ** 32 - 1), Gc = BigInt(32);
function ym(t, e = !1) {
  return e ? { h: Number(t & Un), l: Number(t >> Gc & Un) } : { h: Number(t >> Gc & Un) | 0, l: Number(t & Un) | 0 };
}
function bm(t, e = !1) {
  let s = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: n, l: o } = ym(t[i], e);
    [s[i], r[i]] = [n, o];
  }
  return [s, r];
}
const vm = (t, e, s) => t << s | e >>> 32 - s, Em = (t, e, s) => e << s | t >>> 32 - s, Cm = (t, e, s) => e << s - 32 | t >>> 64 - s, Im = (t, e, s) => t << s - 32 | e >>> 64 - s, pr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function Am(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Ro(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function Wt(t, e) {
  return t << 32 - e | t >>> e;
}
const Jc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Nm(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
function Yc(t) {
  for (let e = 0; e < t.length; e++) t[e] = Nm(t[e]);
}
function _m(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Hr(t) {
  return typeof t == "string" && (t = _m(t)), yn(t), t;
}
function Sm(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    yn(i), e += i.length;
  }
  const s = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const n = t[r];
    s.set(n, i), i += n.length;
  }
  return s;
}
let tc = class {
  clone() {
    return this._cloneInto();
  }
};
function yd(t) {
  const e = (r) => t().update(Hr(r)).digest(), s = t();
  return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e;
}
function ni(t = 32) {
  if (pr && typeof pr.getRandomValues == "function") return pr.getRandomValues(new Uint8Array(t));
  if (pr && typeof pr.randomBytes == "function") return pr.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
const bd = [], vd = [], Ed = [], Pm = BigInt(0), hi = BigInt(1), Om = BigInt(2), Tm = BigInt(7), xm = BigInt(256), km = BigInt(113);
for (let t = 0, e = hi, s = 1, r = 0; t < 24; t++) {
  [s, r] = [r, (2 * s + 3 * r) % 5], bd.push(2 * (5 * r + s)), vd.push((t + 1) * (t + 2) / 2 % 64);
  let i = Pm;
  for (let n = 0; n < 7; n++) e = (e << hi ^ (e >> Tm) * km) % xm, e & Om && (i ^= hi << (hi << BigInt(n)) - hi);
  Ed.push(i);
}
const [$m, Rm] = bm(Ed, !0), Xc = (t, e, s) => s > 32 ? Cm(t, e, s) : vm(t, e, s), Zc = (t, e, s) => s > 32 ? Im(t, e, s) : Em(t, e, s);
function Um(t, e = 24) {
  const s = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let o = 0; o < 10; o++) s[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, l = s[c], u = s[c + 1], d = Xc(l, u, 1) ^ s[a], h = Zc(l, u, 1) ^ s[a + 1];
      for (let p = 0; p < 50; p += 10) t[o + p] ^= d, t[o + p + 1] ^= h;
    }
    let i = t[2], n = t[3];
    for (let o = 0; o < 24; o++) {
      const a = vd[o], c = Xc(i, n, a), l = Zc(i, n, a), u = bd[o];
      i = t[u], n = t[u + 1], t[u] = c, t[u + 1] = l;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) s[a] = t[o + a];
      for (let a = 0; a < 10; a++) t[o + a] ^= ~s[(a + 2) % 10] & s[(a + 4) % 10];
    }
    t[0] ^= $m[r], t[1] ^= Rm[r];
  }
  s.fill(0);
}
let Dm = class Cd extends tc {
  constructor(e, s, r, i = !1, n = 24) {
    if (super(), this.blockLen = e, this.suffix = s, this.outputLen = r, this.enableXOF = i, this.rounds = n, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, on(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Am(this.state);
  }
  keccak() {
    Jc || Yc(this.state32), Um(this.state32, this.rounds), Jc || Yc(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    zr(this);
    const { blockLen: s, state: r } = this;
    e = Hr(e);
    const i = e.length;
    for (let n = 0; n < i; ) {
      const o = Math.min(s - this.pos, i - n);
      for (let a = 0; a < o; a++) r[this.pos++] ^= e[n++];
      this.pos === s && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: e, suffix: s, pos: r, blockLen: i } = this;
    e[r] ^= s, s & 128 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    zr(this, !1), yn(e), this.finish();
    const s = this.state, { blockLen: r } = this;
    for (let i = 0, n = e.length; i < n; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, n - i);
      e.set(s.subarray(this.posOut, this.posOut + o), i), this.posOut += o, i += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return on(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (wd(e, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: s, suffix: r, outputLen: i, rounds: n, enableXOF: o } = this;
    return e || (e = new Cd(s, r, i, o, n)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = n, e.suffix = r, e.outputLen = i, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
};
const Lm = (t, e, s) => yd(() => new Dm(e, t, s)), Mm = Lm(1, 136, 256 / 8), Bm = "https://rpc.walletconnect.org/v1";
function Id(t) {
  const e = `Ethereum Signed Message:
${t.length}`, s = new TextEncoder().encode(e + t);
  return "0x" + Buffer.from(Mm(s)).toString("hex");
}
async function Fm(t, e, s, r, i, n) {
  switch (s.t) {
    case "eip191":
      return await jm(t, e, s.s);
    case "eip1271":
      return await qm(t, e, s.s, r, i, n);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${s.t}`);
  }
}
async function jm(t, e, s) {
  return (await zg({ hash: Id(e), signature: s })).toLowerCase() === t.toLowerCase();
}
async function qm(t, e, s, r, i, n) {
  const o = Dr(r);
  if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`);
  try {
    const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", l = "0000000000000000000000000000000000000000000000000000000000000041", u = s.substring(2), d = Id(e).substring(2), h = a + d + c + l + u, p = await fetch(`${n || Bm}/?chainId=${r}&projectId=${i}`, { method: "POST", body: JSON.stringify({ id: Wm(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: h }, "latest"] }) }), { result: g } = await p.json();
    return g ? g.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1;
  } catch (a) {
    return console.error("isValidEip1271Signature: ", a), !1;
  }
}
function Wm() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function zm(t) {
  const e = atob(t), s = new Uint8Array(e.length);
  for (let o = 0; o < e.length; o++) s[o] = e.charCodeAt(o);
  const r = s[0];
  if (r === 0) throw new Error("No signatures found");
  const i = 1 + r * 64;
  if (s.length < i) throw new Error("Transaction data too short for claimed signature count");
  if (s.length < 100) throw new Error("Transaction too short");
  const n = Buffer.from(t, "base64").slice(1, 65);
  return Lu.encode(n);
}
var Hm = Object.defineProperty, Km = Object.defineProperties, Vm = Object.getOwnPropertyDescriptors, Qc = Object.getOwnPropertySymbols, Gm = Object.prototype.hasOwnProperty, Jm = Object.prototype.propertyIsEnumerable, el = (t, e, s) => e in t ? Hm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ym = (t, e) => {
  for (var s in e || (e = {})) Gm.call(e, s) && el(t, s, e[s]);
  if (Qc) for (var s of Qc(e)) Jm.call(e, s) && el(t, s, e[s]);
  return t;
}, Xm = (t, e) => Km(t, Vm(e));
const Zm = "did:pkh:", sc = (t) => t == null ? void 0 : t.split(":"), Qm = (t) => {
  const e = t && sc(t);
  if (e) return t.includes(Zm) ? e[3] : e[1];
}, ya = (t) => {
  const e = t && sc(t);
  if (e) return e[2] + ":" + e[3];
}, oo = (t) => {
  const e = t && sc(t);
  if (e) return e.pop();
};
async function tl(t) {
  const { cacao: e, projectId: s } = t, { s: r, p: i } = e, n = Ad(i, i.iss), o = oo(i.iss);
  return await Fm(o, n, r, ya(i.iss), s);
}
const Ad = (t, e) => {
  const s = `${t.domain} wants you to sign in with your Ethereum account:`, r = oo(e);
  if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let i = t.statement || void 0;
  const n = `URI: ${t.aud || t.uri}`, o = `Version: ${t.version}`, a = `Chain ID: ${Qm(e)}`, c = `Nonce: ${t.nonce}`, l = `Issued At: ${t.iat}`, u = t.exp ? `Expiration Time: ${t.exp}` : void 0, d = t.nbf ? `Not Before: ${t.nbf}` : void 0, h = t.requestId ? `Request ID: ${t.requestId}` : void 0, p = t.resources ? `Resources:${t.resources.map((f) => `
- ${f}`).join("")}` : void 0, g = Gn(t.resources);
  if (g) {
    const f = an(g);
    i = cw(i, f);
  }
  return [s, r, "", i, "", n, o, a, c, l, u, d, h, p].filter((f) => f != null).join(`
`);
};
function ew(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function tw(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function er(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  const e = Object.keys(t.att);
  if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
  e.forEach((s) => {
    const r = t.att[s];
    if (Array.isArray(r)) throw new Error(`Resource must be an object: ${s}`);
    if (typeof r != "object") throw new Error(`Resource must be an object: ${s}`);
    if (!Object.keys(r).length) throw new Error(`Resource object is empty: ${s}`);
    Object.keys(r).forEach((i) => {
      const n = r[i];
      if (!Array.isArray(n)) throw new Error(`Ability limits ${i} must be an array of objects, found: ${n}`);
      if (!n.length) throw new Error(`Value of ${i} is empty array, must be an array with objects`);
      n.forEach((o) => {
        if (typeof o != "object") throw new Error(`Ability limits (${i}) must be an array of objects, found: ${o}`);
      });
    });
  });
}
function sw(t, e, s, r = {}) {
  return s == null || s.sort((i, n) => i.localeCompare(n)), { att: { [t]: rw(e, s, r) } };
}
function rw(t, e, s = {}) {
  e = e == null ? void 0 : e.sort((i, n) => i.localeCompare(n));
  const r = e.map((i) => ({ [`${t}/${i}`]: [s] }));
  return Object.assign({}, ...r);
}
function Nd(t) {
  return er(t), `urn:recap:${ew(t).replace(/=/g, "")}`;
}
function an(t) {
  const e = tw(t.replace("urn:recap:", ""));
  return er(e), e;
}
function iw(t, e, s) {
  const r = sw(t, e, s);
  return Nd(r);
}
function nw(t) {
  return t && t.includes("urn:recap:");
}
function ow(t, e) {
  const s = an(t), r = an(e), i = aw(s, r);
  return Nd(i);
}
function aw(t, e) {
  er(t), er(e);
  const s = Object.keys(t.att).concat(Object.keys(e.att)).sort((i, n) => i.localeCompare(n)), r = { att: {} };
  return s.forEach((i) => {
    var n, o;
    Object.keys(((n = t.att) == null ? void 0 : n[i]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[i]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
      var c, l;
      r.att[i] = Xm(Ym({}, r.att[i]), { [a]: ((c = t.att[i]) == null ? void 0 : c[a]) || ((l = e.att[i]) == null ? void 0 : l[a]) });
    });
  }), r;
}
function cw(t = "", e) {
  er(e);
  const s = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(s)) return t;
  const r = [];
  let i = 0;
  Object.keys(e.att).forEach((a) => {
    const c = Object.keys(e.att[a]).map((d) => ({ ability: d.split("/")[0], action: d.split("/")[1] }));
    c.sort((d, h) => d.action.localeCompare(h.action));
    const l = {};
    c.forEach((d) => {
      l[d.ability] || (l[d.ability] = []), l[d.ability].push(d.action);
    });
    const u = Object.keys(l).map((d) => (i++, `(${i}) '${d}': '${l[d].join("', '")}' for '${a}'.`));
    r.push(u.join(", ").replace(".,", "."));
  });
  const n = r.join(" "), o = `${s}${n}`;
  return `${t ? t + " " : ""}${o}`;
}
function sl(t) {
  var e;
  const s = an(t);
  er(s);
  const r = (e = s.att) == null ? void 0 : e.eip155;
  return r ? Object.keys(r).map((i) => i.split("/")[1]) : [];
}
function rl(t) {
  const e = an(t);
  er(e);
  const s = [];
  return Object.values(e.att).forEach((r) => {
    Object.values(r).forEach((i) => {
      var n;
      (n = i == null ? void 0 : i[0]) != null && n.chains && s.push(i[0].chains);
    });
  }), [...new Set(s.flat())];
}
function Gn(t) {
  if (!t) return;
  const e = t == null ? void 0 : t[t.length - 1];
  return nw(e) ? e : void 0;
}
function Uo(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function _d(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function bt(t, ...e) {
  if (!_d(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function il(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function lw(t, e) {
  bt(t);
  const s = e.outputLen;
  if (t.length < s) throw new Error("digestInto() expects output buffer of length at least " + s);
}
function nl(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
const _s = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), uw = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), dw = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!dw) throw new Error("Non little-endian hardware is not supported");
function hw(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function ba(t) {
  if (typeof t == "string") t = hw(t);
  else if (_d(t)) t = va(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function pw(t, e) {
  if (e == null || typeof e != "object") throw new Error("options must be defined");
  return Object.assign(t, e);
}
function fw(t, e) {
  if (t.length !== e.length) return !1;
  let s = 0;
  for (let r = 0; r < t.length; r++) s |= t[r] ^ e[r];
  return s === 0;
}
const gw = (t, e) => {
  function s(r, ...i) {
    if (bt(r), t.nonceLength !== void 0) {
      const l = i[0];
      if (!l) throw new Error("nonce / iv required");
      t.varSizeNonce ? bt(l) : bt(l, t.nonceLength);
    }
    const n = t.tagLength;
    n && i[1] !== void 0 && bt(i[1]);
    const o = e(r, ...i), a = (l, u) => {
      if (u !== void 0) {
        if (l !== 2) throw new Error("cipher output not supported");
        bt(u);
      }
    };
    let c = !1;
    return { encrypt(l, u) {
      if (c) throw new Error("cannot encrypt() twice with same key + nonce");
      return c = !0, bt(l), a(o.encrypt.length, u), o.encrypt(l, u);
    }, decrypt(l, u) {
      if (bt(l), n && l.length < n) throw new Error("invalid ciphertext length: smaller than tagLength=" + n);
      return a(o.decrypt.length, u), o.decrypt(l, u);
    } };
  }
  return Object.assign(s, t), s;
};
function ol(t, e, s = !0) {
  if (e === void 0) return new Uint8Array(t);
  if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
  if (s && !mw(e)) throw new Error("invalid output, must be aligned");
  return e;
}
function al(t, e, s, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, r);
  const i = BigInt(32), n = BigInt(4294967295), o = Number(s >> i & n), a = Number(s & n);
  t.setUint32(e + 4, o, r), t.setUint32(e + 0, a, r);
}
function mw(t) {
  return t.byteOffset % 4 === 0;
}
function va(t) {
  return Uint8Array.from(t);
}
function Kr(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
const Sd = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), ww = Sd("expand 16-byte k"), yw = Sd("expand 32-byte k"), bw = _s(ww), vw = _s(yw);
function ce(t, e) {
  return t << e | t >>> 32 - e;
}
function Ea(t) {
  return t.byteOffset % 4 === 0;
}
const Dn = 64, Ew = 16, Pd = 2 ** 32 - 1, cl = new Uint32Array();
function Cw(t, e, s, r, i, n, o, a) {
  const c = i.length, l = new Uint8Array(Dn), u = _s(l), d = Ea(i) && Ea(n), h = d ? _s(i) : cl, p = d ? _s(n) : cl;
  for (let g = 0; g < c; o++) {
    if (t(e, s, r, u, o, a), o >= Pd) throw new Error("arx: counter overflow");
    const f = Math.min(Dn, c - g);
    if (d && f === Dn) {
      const w = g / 4;
      if (g % 4 !== 0) throw new Error("arx: invalid block position");
      for (let y = 0, b; y < Ew; y++) b = w + y, p[b] = h[b] ^ u[y];
      g += Dn;
      continue;
    }
    for (let w = 0, y; w < f; w++) y = g + w, n[y] = i[y] ^ l[w];
    g += f;
  }
}
function Iw(t, e) {
  const { allowShortKeys: s, extendNonceFn: r, counterLength: i, counterRight: n, rounds: o } = pw({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, e);
  if (typeof t != "function") throw new Error("core must be a function");
  return Uo(i), Uo(o), nl(n), nl(s), (a, c, l, u, d = 0) => {
    bt(a), bt(c), bt(l);
    const h = l.length;
    if (u === void 0 && (u = new Uint8Array(h)), bt(u), Uo(d), d < 0 || d >= Pd) throw new Error("arx: counter overflow");
    if (u.length < h) throw new Error(`arx: output (${u.length}) is shorter than data (${h})`);
    const p = [];
    let g = a.length, f, w;
    if (g === 32) p.push(f = va(a)), w = vw;
    else if (g === 16 && s) f = new Uint8Array(32), f.set(a), f.set(a, 16), w = bw, p.push(f);
    else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
    Ea(c) || p.push(c = va(c));
    const y = _s(f);
    if (r) {
      if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r(w, y, _s(c.subarray(0, 16)), y), c = c.subarray(16);
    }
    const b = 16 - i;
    if (b !== c.length) throw new Error(`arx: nonce must be ${b} or 16 bytes`);
    if (b !== 12) {
      const C = new Uint8Array(12);
      C.set(c, n ? 0 : 12 - c.length), c = C, p.push(c);
    }
    const v = _s(c);
    return Cw(t, w, y, v, l, u, d, o), Kr(...p), u;
  };
}
const Ke = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
class Aw {
  constructor(e) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, e = ba(e), bt(e, 32);
    const s = Ke(e, 0), r = Ke(e, 2), i = Ke(e, 4), n = Ke(e, 6), o = Ke(e, 8), a = Ke(e, 10), c = Ke(e, 12), l = Ke(e, 14);
    this.r[0] = s & 8191, this.r[1] = (s >>> 13 | r << 3) & 8191, this.r[2] = (r >>> 10 | i << 6) & 7939, this.r[3] = (i >>> 7 | n << 9) & 8191, this.r[4] = (n >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | l << 8) & 8191, this.r[9] = l >>> 5 & 127;
    for (let u = 0; u < 8; u++) this.pad[u] = Ke(e, 16 + 2 * u);
  }
  process(e, s, r = !1) {
    const i = r ? 0 : 2048, { h: n, r: o } = this, a = o[0], c = o[1], l = o[2], u = o[3], d = o[4], h = o[5], p = o[6], g = o[7], f = o[8], w = o[9], y = Ke(e, s + 0), b = Ke(e, s + 2), v = Ke(e, s + 4), C = Ke(e, s + 6), S = Ke(e, s + 8), A = Ke(e, s + 10), N = Ke(e, s + 12), R = Ke(e, s + 14);
    let E = n[0] + (y & 8191), $ = n[1] + ((y >>> 13 | b << 3) & 8191), I = n[2] + ((b >>> 10 | v << 6) & 8191), L = n[3] + ((v >>> 7 | C << 9) & 8191), H = n[4] + ((C >>> 4 | S << 12) & 8191), _ = n[5] + (S >>> 1 & 8191), x = n[6] + ((S >>> 14 | A << 2) & 8191), O = n[7] + ((A >>> 11 | N << 5) & 8191), B = n[8] + ((N >>> 8 | R << 8) & 8191), j = n[9] + (R >>> 5 | i), k = 0, G = k + E * a + $ * (5 * w) + I * (5 * f) + L * (5 * g) + H * (5 * p);
    k = G >>> 13, G &= 8191, G += _ * (5 * h) + x * (5 * d) + O * (5 * u) + B * (5 * l) + j * (5 * c), k += G >>> 13, G &= 8191;
    let Q = k + E * c + $ * a + I * (5 * w) + L * (5 * f) + H * (5 * g);
    k = Q >>> 13, Q &= 8191, Q += _ * (5 * p) + x * (5 * h) + O * (5 * d) + B * (5 * u) + j * (5 * l), k += Q >>> 13, Q &= 8191;
    let se = k + E * l + $ * c + I * a + L * (5 * w) + H * (5 * f);
    k = se >>> 13, se &= 8191, se += _ * (5 * g) + x * (5 * p) + O * (5 * h) + B * (5 * d) + j * (5 * u), k += se >>> 13, se &= 8191;
    let Ce = k + E * u + $ * l + I * c + L * a + H * (5 * w);
    k = Ce >>> 13, Ce &= 8191, Ce += _ * (5 * f) + x * (5 * g) + O * (5 * p) + B * (5 * h) + j * (5 * d), k += Ce >>> 13, Ce &= 8191;
    let he = k + E * d + $ * u + I * l + L * c + H * a;
    k = he >>> 13, he &= 8191, he += _ * (5 * w) + x * (5 * f) + O * (5 * g) + B * (5 * p) + j * (5 * h), k += he >>> 13, he &= 8191;
    let Te = k + E * h + $ * d + I * u + L * l + H * c;
    k = Te >>> 13, Te &= 8191, Te += _ * a + x * (5 * w) + O * (5 * f) + B * (5 * g) + j * (5 * p), k += Te >>> 13, Te &= 8191;
    let Le = k + E * p + $ * h + I * d + L * u + H * l;
    k = Le >>> 13, Le &= 8191, Le += _ * c + x * a + O * (5 * w) + B * (5 * f) + j * (5 * g), k += Le >>> 13, Le &= 8191;
    let Xe = k + E * g + $ * p + I * h + L * d + H * u;
    k = Xe >>> 13, Xe &= 8191, Xe += _ * l + x * c + O * a + B * (5 * w) + j * (5 * f), k += Xe >>> 13, Xe &= 8191;
    let $e = k + E * f + $ * g + I * p + L * h + H * d;
    k = $e >>> 13, $e &= 8191, $e += _ * u + x * l + O * c + B * a + j * (5 * w), k += $e >>> 13, $e &= 8191;
    let Re = k + E * w + $ * f + I * g + L * p + H * h;
    k = Re >>> 13, Re &= 8191, Re += _ * d + x * u + O * l + B * c + j * a, k += Re >>> 13, Re &= 8191, k = (k << 2) + k | 0, k = k + G | 0, G = k & 8191, k = k >>> 13, Q += k, n[0] = G, n[1] = Q, n[2] = se, n[3] = Ce, n[4] = he, n[5] = Te, n[6] = Le, n[7] = Xe, n[8] = $e, n[9] = Re;
  }
  finalize() {
    const { h: e, pad: s } = this, r = new Uint16Array(10);
    let i = e[1] >>> 13;
    e[1] &= 8191;
    for (let a = 2; a < 10; a++) e[a] += i, i = e[a] >>> 13, e[a] &= 8191;
    e[0] += i * 5, i = e[0] >>> 13, e[0] &= 8191, e[1] += i, i = e[1] >>> 13, e[1] &= 8191, e[2] += i, r[0] = e[0] + 5, i = r[0] >>> 13, r[0] &= 8191;
    for (let a = 1; a < 10; a++) r[a] = e[a] + i, i = r[a] >>> 13, r[a] &= 8191;
    r[9] -= 8192;
    let n = (i ^ 1) - 1;
    for (let a = 0; a < 10; a++) r[a] &= n;
    n = ~n;
    for (let a = 0; a < 10; a++) e[a] = e[a] & n | r[a];
    e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
    let o = e[0] + s[0];
    e[0] = o & 65535;
    for (let a = 1; a < 8; a++) o = (e[a] + s[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
    Kr(r);
  }
  update(e) {
    il(this);
    const { buffer: s, blockLen: r } = this;
    e = ba(e);
    const i = e.length;
    for (let n = 0; n < i; ) {
      const o = Math.min(r - this.pos, i - n);
      if (o === r) {
        for (; r <= i - n; n += r) this.process(e, n);
        continue;
      }
      s.set(e.subarray(n, n + o), this.pos), this.pos += o, n += o, this.pos === r && (this.process(s, 0, !1), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Kr(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e) {
    il(this), lw(e, this), this.finished = !0;
    const { buffer: s, h: r } = this;
    let { pos: i } = this;
    if (i) {
      for (s[i++] = 1; i < 16; i++) s[i] = 0;
      this.process(s, 0, !0);
    }
    this.finalize();
    let n = 0;
    for (let o = 0; o < 8; o++) e[n++] = r[o] >>> 0, e[n++] = r[o] >>> 8;
    return e;
  }
  digest() {
    const { buffer: e, outputLen: s } = this;
    this.digestInto(e);
    const r = e.slice(0, s);
    return this.destroy(), r;
  }
}
function Nw(t) {
  const e = (r, i) => t(i).update(ba(r)).digest(), s = t(new Uint8Array(32));
  return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = (r) => t(r), e;
}
const _w = Nw((t) => new Aw(t));
function Sw(t, e, s, r, i, n = 20) {
  let o = t[0], a = t[1], c = t[2], l = t[3], u = e[0], d = e[1], h = e[2], p = e[3], g = e[4], f = e[5], w = e[6], y = e[7], b = i, v = s[0], C = s[1], S = s[2], A = o, N = a, R = c, E = l, $ = u, I = d, L = h, H = p, _ = g, x = f, O = w, B = y, j = b, k = v, G = C, Q = S;
  for (let Ce = 0; Ce < n; Ce += 2) A = A + $ | 0, j = ce(j ^ A, 16), _ = _ + j | 0, $ = ce($ ^ _, 12), A = A + $ | 0, j = ce(j ^ A, 8), _ = _ + j | 0, $ = ce($ ^ _, 7), N = N + I | 0, k = ce(k ^ N, 16), x = x + k | 0, I = ce(I ^ x, 12), N = N + I | 0, k = ce(k ^ N, 8), x = x + k | 0, I = ce(I ^ x, 7), R = R + L | 0, G = ce(G ^ R, 16), O = O + G | 0, L = ce(L ^ O, 12), R = R + L | 0, G = ce(G ^ R, 8), O = O + G | 0, L = ce(L ^ O, 7), E = E + H | 0, Q = ce(Q ^ E, 16), B = B + Q | 0, H = ce(H ^ B, 12), E = E + H | 0, Q = ce(Q ^ E, 8), B = B + Q | 0, H = ce(H ^ B, 7), A = A + I | 0, Q = ce(Q ^ A, 16), O = O + Q | 0, I = ce(I ^ O, 12), A = A + I | 0, Q = ce(Q ^ A, 8), O = O + Q | 0, I = ce(I ^ O, 7), N = N + L | 0, j = ce(j ^ N, 16), B = B + j | 0, L = ce(L ^ B, 12), N = N + L | 0, j = ce(j ^ N, 8), B = B + j | 0, L = ce(L ^ B, 7), R = R + H | 0, k = ce(k ^ R, 16), _ = _ + k | 0, H = ce(H ^ _, 12), R = R + H | 0, k = ce(k ^ R, 8), _ = _ + k | 0, H = ce(H ^ _, 7), E = E + $ | 0, G = ce(G ^ E, 16), x = x + G | 0, $ = ce($ ^ x, 12), E = E + $ | 0, G = ce(G ^ E, 8), x = x + G | 0, $ = ce($ ^ x, 7);
  let se = 0;
  r[se++] = o + A | 0, r[se++] = a + N | 0, r[se++] = c + R | 0, r[se++] = l + E | 0, r[se++] = u + $ | 0, r[se++] = d + I | 0, r[se++] = h + L | 0, r[se++] = p + H | 0, r[se++] = g + _ | 0, r[se++] = f + x | 0, r[se++] = w + O | 0, r[se++] = y + B | 0, r[se++] = b + j | 0, r[se++] = v + k | 0, r[se++] = C + G | 0, r[se++] = S + Q | 0;
}
const Pw = Iw(Sw, { counterRight: !1, counterLength: 4, allowShortKeys: !1 }), Ow = new Uint8Array(16), ll = (t, e) => {
  t.update(e);
  const s = e.length % 16;
  s && t.update(Ow.subarray(s));
}, Tw = new Uint8Array(32);
function ul(t, e, s, r, i) {
  const n = t(e, s, Tw), o = _w.create(n);
  i && ll(o, i), ll(o, r);
  const a = new Uint8Array(16), c = uw(a);
  al(c, 0, BigInt(i ? i.length : 0), !0), al(c, 8, BigInt(r.length), !0), o.update(a);
  const l = o.digest();
  return Kr(n, a), l;
}
const xw = (t) => (e, s, r) => ({ encrypt(i, n) {
  const o = i.length;
  n = ol(o + 16, n, !1), n.set(i);
  const a = n.subarray(0, -16);
  t(e, s, a, a, 1);
  const c = ul(t, e, s, a, r);
  return n.set(c, o), Kr(c), n;
}, decrypt(i, n) {
  n = ol(i.length - 16, n, !1);
  const o = i.subarray(0, -16), a = i.subarray(-16), c = ul(t, e, s, o, r);
  if (!fw(a, c)) throw new Error("invalid tag");
  return n.set(i.subarray(0, -16)), t(e, s, n, n, 1), Kr(c), n;
} }), Od = gw({ blockSize: 64, nonceLength: 12, tagLength: 16 }, xw(Pw));
let Td = class extends tc {
  constructor(e, s) {
    super(), this.finished = !1, this.destroyed = !1, ec(e);
    const r = Hr(s);
    if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const i = this.blockLen, n = new Uint8Array(i);
    n.set(r.length > i ? e.create().update(r).digest() : r);
    for (let o = 0; o < n.length; o++) n[o] ^= 54;
    this.iHash.update(n), this.oHash = e.create();
    for (let o = 0; o < n.length; o++) n[o] ^= 106;
    this.oHash.update(n), n.fill(0);
  }
  update(e) {
    return zr(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    zr(this), yn(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: s, iHash: r, finished: i, destroyed: n, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = i, e.destroyed = n, e.blockLen = o, e.outputLen = a, e.oHash = s._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
};
const mo = (t, e, s) => new Td(t, e).update(s).digest();
mo.create = (t, e) => new Td(t, e);
function kw(t, e, s) {
  return ec(t), s === void 0 && (s = new Uint8Array(t.outputLen)), mo(t, Hr(s), Hr(e));
}
const Do = new Uint8Array([0]), dl = new Uint8Array();
function $w(t, e, s, r = 32) {
  if (ec(t), on(r), r > 255 * t.outputLen) throw new Error("Length should be <= 255*HashLen");
  const i = Math.ceil(r / t.outputLen);
  s === void 0 && (s = dl);
  const n = new Uint8Array(i * t.outputLen), o = mo.create(t, e), a = o._cloneInto(), c = new Uint8Array(o.outputLen);
  for (let l = 0; l < i; l++) Do[0] = l + 1, a.update(l === 0 ? dl : c).update(s).update(Do).digestInto(c), n.set(c, t.outputLen * l), o._cloneInto(a);
  return o.destroy(), a.destroy(), c.fill(0), Do.fill(0), n.slice(0, r);
}
const Rw = (t, e, s, r, i) => $w(t, kw(t, e, s), r, i);
function Uw(t, e, s, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, s, r);
  const i = BigInt(32), n = BigInt(4294967295), o = Number(s >> i & n), a = Number(s & n), c = r ? 4 : 0, l = r ? 0 : 4;
  t.setUint32(e + c, o, r), t.setUint32(e + l, a, r);
}
function Dw(t, e, s) {
  return t & e ^ ~t & s;
}
function Lw(t, e, s) {
  return t & e ^ t & s ^ e & s;
}
let Mw = class extends tc {
  constructor(e, s, r, i) {
    super(), this.blockLen = e, this.outputLen = s, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Ro(this.buffer);
  }
  update(e) {
    zr(this);
    const { view: s, buffer: r, blockLen: i } = this;
    e = Hr(e);
    const n = e.length;
    for (let o = 0; o < n; ) {
      const a = Math.min(i - this.pos, n - o);
      if (a === i) {
        const c = Ro(e);
        for (; i <= n - o; o += i) this.process(c, o);
        continue;
      }
      r.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === i && (this.process(s, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    zr(this), wd(e, this), this.finished = !0;
    const { buffer: s, view: r, blockLen: i, isLE: n } = this;
    let { pos: o } = this;
    s[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(r, 0), o = 0);
    for (let d = o; d < i; d++) s[d] = 0;
    Uw(r, i - 8, BigInt(this.length * 8), n), this.process(r, 0);
    const a = Ro(e), c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = c / 4, u = this.get();
    if (l > u.length) throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < l; d++) a.setUint32(4 * d, u[d], n);
  }
  digest() {
    const { buffer: e, outputLen: s } = this;
    this.digestInto(e);
    const r = e.slice(0, s);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: s, buffer: r, length: i, finished: n, destroyed: o, pos: a } = this;
    return e.length = i, e.pos = a, e.finished = n, e.destroyed = o, i % s && e.buffer.set(r), e;
  }
};
const Bw = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), ms = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), ws = new Uint32Array(64);
class Fw extends Mw {
  constructor() {
    super(64, 32, 8, !1), this.A = ms[0] | 0, this.B = ms[1] | 0, this.C = ms[2] | 0, this.D = ms[3] | 0, this.E = ms[4] | 0, this.F = ms[5] | 0, this.G = ms[6] | 0, this.H = ms[7] | 0;
  }
  get() {
    const { A: e, B: s, C: r, D: i, E: n, F: o, G: a, H: c } = this;
    return [e, s, r, i, n, o, a, c];
  }
  set(e, s, r, i, n, o, a, c) {
    this.A = e | 0, this.B = s | 0, this.C = r | 0, this.D = i | 0, this.E = n | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, s) {
    for (let d = 0; d < 16; d++, s += 4) ws[d] = e.getUint32(s, !1);
    for (let d = 16; d < 64; d++) {
      const h = ws[d - 15], p = ws[d - 2], g = Wt(h, 7) ^ Wt(h, 18) ^ h >>> 3, f = Wt(p, 17) ^ Wt(p, 19) ^ p >>> 10;
      ws[d] = f + ws[d - 7] + g + ws[d - 16] | 0;
    }
    let { A: r, B: i, C: n, D: o, E: a, F: c, G: l, H: u } = this;
    for (let d = 0; d < 64; d++) {
      const h = Wt(a, 6) ^ Wt(a, 11) ^ Wt(a, 25), p = u + h + Dw(a, c, l) + Bw[d] + ws[d] | 0, g = (Wt(r, 2) ^ Wt(r, 13) ^ Wt(r, 22)) + Lw(r, i, n) | 0;
      u = l, l = c, c = a, a = o + p | 0, o = n, n = i, i = r, r = p + g | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, n = n + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, u = u + this.H | 0, this.set(r, i, n, o, a, c, l, u);
  }
  roundClean() {
    ws.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const bn = yd(() => new Fw());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const wo = BigInt(0), yo = BigInt(1), jw = BigInt(2);
function tr(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function vn(t) {
  if (!tr(t)) throw new Error("Uint8Array expected");
}
function Vr(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
const qw = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Gr(t) {
  vn(t);
  let e = "";
  for (let s = 0; s < t.length; s++) e += qw[t[s]];
  return e;
}
function $r(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function rc(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? wo : BigInt("0x" + t);
}
const ns = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function hl(t) {
  if (t >= ns._0 && t <= ns._9) return t - ns._0;
  if (t >= ns.A && t <= ns.F) return t - (ns.A - 10);
  if (t >= ns.a && t <= ns.f) return t - (ns.a - 10);
}
function Jr(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e = t.length, s = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(s);
  for (let i = 0, n = 0; i < s; i++, n += 2) {
    const o = hl(t.charCodeAt(n)), a = hl(t.charCodeAt(n + 1));
    if (o === void 0 || a === void 0) {
      const c = t[n] + t[n + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n);
    }
    r[i] = o * 16 + a;
  }
  return r;
}
function Ys(t) {
  return rc(Gr(t));
}
function cn(t) {
  return vn(t), rc(Gr(Uint8Array.from(t).reverse()));
}
function Yr(t, e) {
  return Jr(t.toString(16).padStart(e * 2, "0"));
}
function bo(t, e) {
  return Yr(t, e).reverse();
}
function Ww(t) {
  return Jr($r(t));
}
function yt(t, e, s) {
  let r;
  if (typeof e == "string") try {
    r = Jr(e);
  } catch (n) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + n);
  }
  else if (tr(e)) r = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const i = r.length;
  if (typeof s == "number" && i !== s) throw new Error(t + " of length " + s + " expected, got " + i);
  return r;
}
function ln(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    vn(i), e += i.length;
  }
  const s = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const n = t[r];
    s.set(n, i), i += n.length;
  }
  return s;
}
function zw(t, e) {
  if (t.length !== e.length) return !1;
  let s = 0;
  for (let r = 0; r < t.length; r++) s |= t[r] ^ e[r];
  return s === 0;
}
function Hw(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
const Lo = (t) => typeof t == "bigint" && wo <= t;
function vo(t, e, s) {
  return Lo(t) && Lo(e) && Lo(s) && e <= t && t < s;
}
function us(t, e, s, r) {
  if (!vo(e, s, r)) throw new Error("expected valid " + t + ": " + s + " <= n < " + r + ", got " + e);
}
function xd(t) {
  let e;
  for (e = 0; t > wo; t >>= yo, e += 1) ;
  return e;
}
function Kw(t, e) {
  return t >> BigInt(e) & yo;
}
function Vw(t, e, s) {
  return t | (s ? yo : wo) << BigInt(e);
}
const ic = (t) => (jw << BigInt(t - 1)) - yo, Mo = (t) => new Uint8Array(t), pl = (t) => Uint8Array.from(t);
function kd(t, e, s) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
  if (typeof s != "function") throw new Error("hmacFn must be a function");
  let r = Mo(t), i = Mo(t), n = 0;
  const o = () => {
    r.fill(1), i.fill(0), n = 0;
  }, a = (...u) => s(i, r, ...u), c = (u = Mo()) => {
    i = a(pl([0]), u), r = a(), u.length !== 0 && (i = a(pl([1]), u), r = a());
  }, l = () => {
    if (n++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let u = 0;
    const d = [];
    for (; u < e; ) {
      r = a();
      const h = r.slice();
      d.push(h), u += r.length;
    }
    return ln(...d);
  };
  return (u, d) => {
    o(), c(u);
    let h;
    for (; !(h = d(l())); ) c();
    return o(), h;
  };
}
const Gw = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || tr(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e) => e.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function oi(t, e, s = {}) {
  const r = (i, n, o) => {
    const a = Gw[n];
    if (typeof a != "function") throw new Error("invalid validator function");
    const c = t[i];
    if (!(o && c === void 0) && !a(c, t)) throw new Error("param " + String(i) + " is invalid. Expected " + n + ", got " + c);
  };
  for (const [i, n] of Object.entries(e)) r(i, n, !1);
  for (const [i, n] of Object.entries(s)) r(i, n, !0);
  return t;
}
const Jw = () => {
  throw new Error("not implemented");
};
function Ca(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (s, ...r) => {
    const i = e.get(s);
    if (i !== void 0) return i;
    const n = t(s, ...r);
    return e.set(s, n), n;
  };
}
var Yw = Object.freeze({ __proto__: null, isBytes: tr, abytes: vn, abool: Vr, bytesToHex: Gr, numberToHexUnpadded: $r, hexToNumber: rc, hexToBytes: Jr, bytesToNumberBE: Ys, bytesToNumberLE: cn, numberToBytesBE: Yr, numberToBytesLE: bo, numberToVarBytesBE: Ww, ensureBytes: yt, concatBytes: ln, equalBytes: zw, utf8ToBytes: Hw, inRange: vo, aInRange: us, bitLen: xd, bitGet: Kw, bitSet: Vw, bitMask: ic, createHmacDrbg: kd, validateObject: oi, notImplemented: Jw, memoized: Ca });
const He = BigInt(0), Oe = BigInt(1), js = BigInt(2), Xw = BigInt(3), Ia = BigInt(4), fl = BigInt(5), gl = BigInt(8);
function dt(t, e) {
  const s = t % e;
  return s >= He ? s : e + s;
}
function $d(t, e, s) {
  if (e < He) throw new Error("invalid exponent, negatives unsupported");
  if (s <= He) throw new Error("invalid modulus");
  if (s === Oe) return He;
  let r = Oe;
  for (; e > He; ) e & Oe && (r = r * t % s), t = t * t % s, e >>= Oe;
  return r;
}
function Lt(t, e, s) {
  let r = t;
  for (; e-- > He; ) r *= r, r %= s;
  return r;
}
function Aa(t, e) {
  if (t === He) throw new Error("invert: expected non-zero number");
  if (e <= He) throw new Error("invert: expected positive modulus, got " + e);
  let s = dt(t, e), r = e, i = He, n = Oe;
  for (; s !== He; ) {
    const o = r / s, a = r % s, c = i - n * o;
    r = s, s = a, i = n, n = c;
  }
  if (r !== Oe) throw new Error("invert: does not exist");
  return dt(i, e);
}
function Zw(t) {
  const e = (t - Oe) / js;
  let s, r, i;
  for (s = t - Oe, r = 0; s % js === He; s /= js, r++) ;
  for (i = js; i < t && $d(i, e, t) !== t - Oe; i++) if (i > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r === 1) {
    const o = (t + Oe) / Ia;
    return function(a, c) {
      const l = a.pow(c, o);
      if (!a.eql(a.sqr(l), c)) throw new Error("Cannot find square root");
      return l;
    };
  }
  const n = (s + Oe) / js;
  return function(o, a) {
    if (o.pow(a, e) === o.neg(o.ONE)) throw new Error("Cannot find square root");
    let c = r, l = o.pow(o.mul(o.ONE, i), s), u = o.pow(a, n), d = o.pow(a, s);
    for (; !o.eql(d, o.ONE); ) {
      if (o.eql(d, o.ZERO)) return o.ZERO;
      let h = 1;
      for (let g = o.sqr(d); h < c && !o.eql(g, o.ONE); h++) g = o.sqr(g);
      const p = o.pow(l, Oe << BigInt(c - h - 1));
      l = o.sqr(p), u = o.mul(u, p), d = o.mul(d, l), c = h;
    }
    return u;
  };
}
function Qw(t) {
  if (t % Ia === Xw) {
    const e = (t + Oe) / Ia;
    return function(s, r) {
      const i = s.pow(r, e);
      if (!s.eql(s.sqr(i), r)) throw new Error("Cannot find square root");
      return i;
    };
  }
  if (t % gl === fl) {
    const e = (t - fl) / gl;
    return function(s, r) {
      const i = s.mul(r, js), n = s.pow(i, e), o = s.mul(r, n), a = s.mul(s.mul(o, js), n), c = s.mul(o, s.sub(a, s.ONE));
      if (!s.eql(s.sqr(c), r)) throw new Error("Cannot find square root");
      return c;
    };
  }
  return Zw(t);
}
const ey = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function ty(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, s = ey.reduce((r, i) => (r[i] = "function", r), e);
  return oi(t, s);
}
function sy(t, e, s) {
  if (s < He) throw new Error("invalid exponent, negatives unsupported");
  if (s === He) return t.ONE;
  if (s === Oe) return e;
  let r = t.ONE, i = e;
  for (; s > He; ) s & Oe && (r = t.mul(r, i)), i = t.sqr(i), s >>= Oe;
  return r;
}
function ry(t, e) {
  const s = new Array(e.length), r = e.reduce((n, o, a) => t.is0(o) ? n : (s[a] = n, t.mul(n, o)), t.ONE), i = t.inv(r);
  return e.reduceRight((n, o, a) => t.is0(o) ? n : (s[a] = t.mul(n, s[a]), t.mul(n, o)), i), s;
}
function Rd(t, e) {
  const s = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(s / 8);
  return { nBitLength: s, nByteLength: r };
}
function Ud(t, e, s = !1, r = {}) {
  if (t <= He) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: i, nByteLength: n } = Rd(t, e);
  if (n > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let o;
  const a = Object.freeze({ ORDER: t, isLE: s, BITS: i, BYTES: n, MASK: ic(i), ZERO: He, ONE: Oe, create: (c) => dt(c, t), isValid: (c) => {
    if (typeof c != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c);
    return He <= c && c < t;
  }, is0: (c) => c === He, isOdd: (c) => (c & Oe) === Oe, neg: (c) => dt(-c, t), eql: (c, l) => c === l, sqr: (c) => dt(c * c, t), add: (c, l) => dt(c + l, t), sub: (c, l) => dt(c - l, t), mul: (c, l) => dt(c * l, t), pow: (c, l) => sy(a, c, l), div: (c, l) => dt(c * Aa(l, t), t), sqrN: (c) => c * c, addN: (c, l) => c + l, subN: (c, l) => c - l, mulN: (c, l) => c * l, inv: (c) => Aa(c, t), sqrt: r.sqrt || ((c) => (o || (o = Qw(t)), o(a, c))), invertBatch: (c) => ry(a, c), cmov: (c, l, u) => u ? l : c, toBytes: (c) => s ? bo(c, n) : Yr(c, n), fromBytes: (c) => {
    if (c.length !== n) throw new Error("Field.fromBytes: expected " + n + " bytes, got " + c.length);
    return s ? cn(c) : Ys(c);
  } });
  return Object.freeze(a);
}
function Dd(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Ld(t) {
  const e = Dd(t);
  return e + Math.ceil(e / 2);
}
function iy(t, e, s = !1) {
  const r = t.length, i = Dd(e), n = Ld(e);
  if (r < 16 || r < n || r > 1024) throw new Error("expected " + n + "-1024 bytes of input, got " + r);
  const o = s ? cn(t) : Ys(t), a = dt(o, e - Oe) + Oe;
  return s ? bo(a, i) : Yr(a, i);
}
const ml = BigInt(0), Ln = BigInt(1);
function Bo(t, e) {
  const s = e.negate();
  return t ? s : e;
}
function Md(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function Fo(t, e) {
  Md(t, e);
  const s = Math.ceil(e / t) + 1, r = 2 ** (t - 1);
  return { windows: s, windowSize: r };
}
function ny(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((s, r) => {
    if (!(s instanceof e)) throw new Error("invalid point at index " + r);
  });
}
function oy(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((s, r) => {
    if (!e.isValid(s)) throw new Error("invalid scalar at index " + r);
  });
}
const jo = /* @__PURE__ */ new WeakMap(), Bd = /* @__PURE__ */ new WeakMap();
function qo(t) {
  return Bd.get(t) || 1;
}
function ay(t, e) {
  return { constTimeNegate: Bo, hasPrecomputes(s) {
    return qo(s) !== 1;
  }, unsafeLadder(s, r, i = t.ZERO) {
    let n = s;
    for (; r > ml; ) r & Ln && (i = i.add(n)), n = n.double(), r >>= Ln;
    return i;
  }, precomputeWindow(s, r) {
    const { windows: i, windowSize: n } = Fo(r, e), o = [];
    let a = s, c = a;
    for (let l = 0; l < i; l++) {
      c = a, o.push(c);
      for (let u = 1; u < n; u++) c = c.add(a), o.push(c);
      a = c.double();
    }
    return o;
  }, wNAF(s, r, i) {
    const { windows: n, windowSize: o } = Fo(s, e);
    let a = t.ZERO, c = t.BASE;
    const l = BigInt(2 ** s - 1), u = 2 ** s, d = BigInt(s);
    for (let h = 0; h < n; h++) {
      const p = h * o;
      let g = Number(i & l);
      i >>= d, g > o && (g -= u, i += Ln);
      const f = p, w = p + Math.abs(g) - 1, y = h % 2 !== 0, b = g < 0;
      g === 0 ? c = c.add(Bo(y, r[f])) : a = a.add(Bo(b, r[w]));
    }
    return { p: a, f: c };
  }, wNAFUnsafe(s, r, i, n = t.ZERO) {
    const { windows: o, windowSize: a } = Fo(s, e), c = BigInt(2 ** s - 1), l = 2 ** s, u = BigInt(s);
    for (let d = 0; d < o; d++) {
      const h = d * a;
      if (i === ml) break;
      let p = Number(i & c);
      if (i >>= u, p > a && (p -= l, i += Ln), p === 0) continue;
      let g = r[h + Math.abs(p) - 1];
      p < 0 && (g = g.negate()), n = n.add(g);
    }
    return n;
  }, getPrecomputes(s, r, i) {
    let n = jo.get(r);
    return n || (n = this.precomputeWindow(r, s), s !== 1 && jo.set(r, i(n))), n;
  }, wNAFCached(s, r, i) {
    const n = qo(s);
    return this.wNAF(n, this.getPrecomputes(n, s, i), r);
  }, wNAFCachedUnsafe(s, r, i, n) {
    const o = qo(s);
    return o === 1 ? this.unsafeLadder(s, r, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, s, i), r, n);
  }, setWindowSize(s, r) {
    Md(r, e), Bd.set(s, r), jo.delete(s);
  } };
}
function cy(t, e, s, r) {
  if (ny(s, t), oy(r, e), s.length !== r.length) throw new Error("arrays of points and scalars must have equal length");
  const i = t.ZERO, n = xd(BigInt(s.length)), o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1, a = (1 << o) - 1, c = new Array(a + 1).fill(i), l = Math.floor((e.BITS - 1) / o) * o;
  let u = i;
  for (let d = l; d >= 0; d -= o) {
    c.fill(i);
    for (let p = 0; p < r.length; p++) {
      const g = r[p], f = Number(g >> BigInt(d) & BigInt(a));
      c[f] = c[f].add(s[p]);
    }
    let h = i;
    for (let p = c.length - 1, g = i; p > 0; p--) g = g.add(c[p]), h = h.add(g);
    if (u = u.add(h), d !== 0) for (let p = 0; p < o; p++) u = u.double();
  }
  return u;
}
function Fd(t) {
  return ty(t.Fp), oi(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...Rd(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8);
const fr = BigInt(0), Wo = BigInt(1);
function ly(t) {
  return oi(t, { a: "bigint" }, { montgomeryBits: "isSafeInteger", nByteLength: "isSafeInteger", adjustScalarBytes: "function", domain: "function", powPminus2: "function", Gu: "bigint" }), Object.freeze({ ...t });
}
function uy(t) {
  const e = ly(t), { P: s } = e, r = (b) => dt(b, s), i = e.montgomeryBits, n = Math.ceil(i / 8), o = e.nByteLength, a = e.adjustScalarBytes || ((b) => b), c = e.powPminus2 || ((b) => $d(b, s - BigInt(2), s));
  function l(b, v, C) {
    const S = r(b * (v - C));
    return v = r(v - S), C = r(C + S), [v, C];
  }
  const u = (e.a - BigInt(2)) / BigInt(4);
  function d(b, v) {
    us("u", b, fr, s), us("scalar", v, fr, s);
    const C = v, S = b;
    let A = Wo, N = fr, R = b, E = Wo, $ = fr, I;
    for (let H = BigInt(i - 1); H >= fr; H--) {
      const _ = C >> H & Wo;
      $ ^= _, I = l($, A, R), A = I[0], R = I[1], I = l($, N, E), N = I[0], E = I[1], $ = _;
      const x = A + N, O = r(x * x), B = A - N, j = r(B * B), k = O - j, G = R + E, Q = R - E, se = r(Q * x), Ce = r(G * B), he = se + Ce, Te = se - Ce;
      R = r(he * he), E = r(S * r(Te * Te)), A = r(O * j), N = r(k * (O + r(u * k)));
    }
    I = l($, A, R), A = I[0], R = I[1], I = l($, N, E), N = I[0], E = I[1];
    const L = c(N);
    return r(A * L);
  }
  function h(b) {
    return bo(r(b), n);
  }
  function p(b) {
    const v = yt("u coordinate", b, n);
    return o === 32 && (v[31] &= 127), cn(v);
  }
  function g(b) {
    const v = yt("scalar", b), C = v.length;
    if (C !== n && C !== o) {
      let S = "" + n + " or " + o;
      throw new Error("invalid scalar, expected " + S + " bytes, got " + C);
    }
    return cn(a(v));
  }
  function f(b, v) {
    const C = p(v), S = g(b), A = d(C, S);
    if (A === fr) throw new Error("invalid private or public key received");
    return h(A);
  }
  const w = h(e.Gu);
  function y(b) {
    return f(b, w);
  }
  return { scalarMult: f, scalarMultBase: y, getSharedSecret: (b, v) => f(b, v), getPublicKey: (b) => y(b), utils: { randomPrivateKey: () => e.randomBytes(e.nByteLength) }, GuBytes: w };
}
const Na = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
const dy = BigInt(1), wl = BigInt(2), hy = BigInt(3), py = BigInt(5);
BigInt(8);
function fy(t) {
  const e = BigInt(10), s = BigInt(20), r = BigInt(40), i = BigInt(80), n = Na, o = t * t % n * t % n, a = Lt(o, wl, n) * o % n, c = Lt(a, dy, n) * t % n, l = Lt(c, py, n) * c % n, u = Lt(l, e, n) * l % n, d = Lt(u, s, n) * u % n, h = Lt(d, r, n) * d % n, p = Lt(h, i, n) * h % n, g = Lt(p, i, n) * h % n, f = Lt(g, e, n) * l % n;
  return { pow_p_5_8: Lt(f, wl, n) * t % n, b2: o };
}
function gy(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
const _a = uy({ P: Na, a: BigInt(486662), montgomeryBits: 255, nByteLength: 32, Gu: BigInt(9), powPminus2: (t) => {
  const e = Na, { pow_p_5_8: s, b2: r } = fy(t);
  return dt(Lt(s, hy, e) * r, e);
}, adjustScalarBytes: gy, randomBytes: ni });
function yl(t) {
  t.lowS !== void 0 && Vr("lowS", t.lowS), t.prehash !== void 0 && Vr("prehash", t.prehash);
}
function my(t) {
  const e = Fd(t);
  oi(e, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
  const { endo: s, Fp: r, a: i } = e;
  if (s) {
    if (!r.eql(i, r.ZERO)) throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
    if (typeof s != "object" || typeof s.beta != "bigint" || typeof s.splitScalar != "function") throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: wy, hexToBytes: yy } = Yw;
class by extends Error {
  constructor(e = "") {
    super(e);
  }
}
const cs = { Err: by, _tlv: { encode: (t, e) => {
  const { Err: s } = cs;
  if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
  if (e.length & 1) throw new s("tlv.encode: unpadded data");
  const r = e.length / 2, i = $r(r);
  if (i.length / 2 & 128) throw new s("tlv.encode: long form length too big");
  const n = r > 127 ? $r(i.length / 2 | 128) : "";
  return $r(t) + n + i + e;
}, decode(t, e) {
  const { Err: s } = cs;
  let r = 0;
  if (t < 0 || t > 256) throw new s("tlv.encode: wrong tag");
  if (e.length < 2 || e[r++] !== t) throw new s("tlv.decode: wrong tlv");
  const i = e[r++], n = !!(i & 128);
  let o = 0;
  if (!n) o = i;
  else {
    const c = i & 127;
    if (!c) throw new s("tlv.decode(long): indefinite length not supported");
    if (c > 4) throw new s("tlv.decode(long): byte length is too big");
    const l = e.subarray(r, r + c);
    if (l.length !== c) throw new s("tlv.decode: length bytes not complete");
    if (l[0] === 0) throw new s("tlv.decode(long): zero leftmost byte");
    for (const u of l) o = o << 8 | u;
    if (r += c, o < 128) throw new s("tlv.decode(long): not minimal encoding");
  }
  const a = e.subarray(r, r + o);
  if (a.length !== o) throw new s("tlv.decode: wrong value length");
  return { v: a, l: e.subarray(r + o) };
} }, _int: { encode(t) {
  const { Err: e } = cs;
  if (t < ls) throw new e("integer: negative integers are not allowed");
  let s = $r(t);
  if (Number.parseInt(s[0], 16) & 8 && (s = "00" + s), s.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
  return s;
}, decode(t) {
  const { Err: e } = cs;
  if (t[0] & 128) throw new e("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
  return wy(t);
} }, toSig(t) {
  const { Err: e, _int: s, _tlv: r } = cs, i = typeof t == "string" ? yy(t) : t;
  vn(i);
  const { v: n, l: o } = r.decode(48, i);
  if (o.length) throw new e("invalid signature: left bytes after parsing");
  const { v: a, l: c } = r.decode(2, n), { v: l, l: u } = r.decode(2, c);
  if (u.length) throw new e("invalid signature: left bytes after parsing");
  return { r: s.decode(a), s: s.decode(l) };
}, hexFromSig(t) {
  const { _tlv: e, _int: s } = cs, r = e.encode(2, s.encode(t.r)), i = e.encode(2, s.encode(t.s)), n = r + i;
  return e.encode(48, n);
} }, ls = BigInt(0), je = BigInt(1);
BigInt(2);
const bl = BigInt(3);
BigInt(4);
function vy(t) {
  const e = my(t), { Fp: s } = e, r = Ud(e.n, e.nBitLength), i = e.toBytes || ((f, w, y) => {
    const b = w.toAffine();
    return ln(Uint8Array.from([4]), s.toBytes(b.x), s.toBytes(b.y));
  }), n = e.fromBytes || ((f) => {
    const w = f.subarray(1), y = s.fromBytes(w.subarray(0, s.BYTES)), b = s.fromBytes(w.subarray(s.BYTES, 2 * s.BYTES));
    return { x: y, y: b };
  });
  function o(f) {
    const { a: w, b: y } = e, b = s.sqr(f), v = s.mul(b, f);
    return s.add(s.add(v, s.mul(f, w)), y);
  }
  if (!s.eql(s.sqr(e.Gy), o(e.Gx))) throw new Error("bad generator point: equation left != right");
  function a(f) {
    return vo(f, je, e.n);
  }
  function c(f) {
    const { allowedPrivateKeyLengths: w, nByteLength: y, wrapPrivateKey: b, n: v } = e;
    if (w && typeof f != "bigint") {
      if (tr(f) && (f = Gr(f)), typeof f != "string" || !w.includes(f.length)) throw new Error("invalid private key");
      f = f.padStart(y * 2, "0");
    }
    let C;
    try {
      C = typeof f == "bigint" ? f : Ys(yt("private key", f, y));
    } catch {
      throw new Error("invalid private key, expected hex or " + y + " bytes, got " + typeof f);
    }
    return b && (C = dt(C, v)), us("private key", C, je, v), C;
  }
  function l(f) {
    if (!(f instanceof h)) throw new Error("ProjectivePoint expected");
  }
  const u = Ca((f, w) => {
    const { px: y, py: b, pz: v } = f;
    if (s.eql(v, s.ONE)) return { x: y, y: b };
    const C = f.is0();
    w == null && (w = C ? s.ONE : s.inv(v));
    const S = s.mul(y, w), A = s.mul(b, w), N = s.mul(v, w);
    if (C) return { x: s.ZERO, y: s.ZERO };
    if (!s.eql(N, s.ONE)) throw new Error("invZ was invalid");
    return { x: S, y: A };
  }), d = Ca((f) => {
    if (f.is0()) {
      if (e.allowInfinityPoint && !s.is0(f.py)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: w, y } = f.toAffine();
    if (!s.isValid(w) || !s.isValid(y)) throw new Error("bad point: x or y not FE");
    const b = s.sqr(y), v = o(w);
    if (!s.eql(b, v)) throw new Error("bad point: equation left != right");
    if (!f.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class h {
    constructor(w, y, b) {
      if (this.px = w, this.py = y, this.pz = b, w == null || !s.isValid(w)) throw new Error("x required");
      if (y == null || !s.isValid(y)) throw new Error("y required");
      if (b == null || !s.isValid(b)) throw new Error("z required");
      Object.freeze(this);
    }
    static fromAffine(w) {
      const { x: y, y: b } = w || {};
      if (!w || !s.isValid(y) || !s.isValid(b)) throw new Error("invalid affine point");
      if (w instanceof h) throw new Error("projective point not allowed");
      const v = (C) => s.eql(C, s.ZERO);
      return v(y) && v(b) ? h.ZERO : new h(y, b, s.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(w) {
      const y = s.invertBatch(w.map((b) => b.pz));
      return w.map((b, v) => b.toAffine(y[v])).map(h.fromAffine);
    }
    static fromHex(w) {
      const y = h.fromAffine(n(yt("pointHex", w)));
      return y.assertValidity(), y;
    }
    static fromPrivateKey(w) {
      return h.BASE.multiply(c(w));
    }
    static msm(w, y) {
      return cy(h, r, w, y);
    }
    _setWindowSize(w) {
      g.setWindowSize(this, w);
    }
    assertValidity() {
      d(this);
    }
    hasEvenY() {
      const { y: w } = this.toAffine();
      if (s.isOdd) return !s.isOdd(w);
      throw new Error("Field doesn't support isOdd");
    }
    equals(w) {
      l(w);
      const { px: y, py: b, pz: v } = this, { px: C, py: S, pz: A } = w, N = s.eql(s.mul(y, A), s.mul(C, v)), R = s.eql(s.mul(b, A), s.mul(S, v));
      return N && R;
    }
    negate() {
      return new h(this.px, s.neg(this.py), this.pz);
    }
    double() {
      const { a: w, b: y } = e, b = s.mul(y, bl), { px: v, py: C, pz: S } = this;
      let A = s.ZERO, N = s.ZERO, R = s.ZERO, E = s.mul(v, v), $ = s.mul(C, C), I = s.mul(S, S), L = s.mul(v, C);
      return L = s.add(L, L), R = s.mul(v, S), R = s.add(R, R), A = s.mul(w, R), N = s.mul(b, I), N = s.add(A, N), A = s.sub($, N), N = s.add($, N), N = s.mul(A, N), A = s.mul(L, A), R = s.mul(b, R), I = s.mul(w, I), L = s.sub(E, I), L = s.mul(w, L), L = s.add(L, R), R = s.add(E, E), E = s.add(R, E), E = s.add(E, I), E = s.mul(E, L), N = s.add(N, E), I = s.mul(C, S), I = s.add(I, I), E = s.mul(I, L), A = s.sub(A, E), R = s.mul(I, $), R = s.add(R, R), R = s.add(R, R), new h(A, N, R);
    }
    add(w) {
      l(w);
      const { px: y, py: b, pz: v } = this, { px: C, py: S, pz: A } = w;
      let N = s.ZERO, R = s.ZERO, E = s.ZERO;
      const $ = e.a, I = s.mul(e.b, bl);
      let L = s.mul(y, C), H = s.mul(b, S), _ = s.mul(v, A), x = s.add(y, b), O = s.add(C, S);
      x = s.mul(x, O), O = s.add(L, H), x = s.sub(x, O), O = s.add(y, v);
      let B = s.add(C, A);
      return O = s.mul(O, B), B = s.add(L, _), O = s.sub(O, B), B = s.add(b, v), N = s.add(S, A), B = s.mul(B, N), N = s.add(H, _), B = s.sub(B, N), E = s.mul($, O), N = s.mul(I, _), E = s.add(N, E), N = s.sub(H, E), E = s.add(H, E), R = s.mul(N, E), H = s.add(L, L), H = s.add(H, L), _ = s.mul($, _), O = s.mul(I, O), H = s.add(H, _), _ = s.sub(L, _), _ = s.mul($, _), O = s.add(O, _), L = s.mul(H, O), R = s.add(R, L), L = s.mul(B, O), N = s.mul(x, N), N = s.sub(N, L), L = s.mul(x, H), E = s.mul(B, E), E = s.add(E, L), new h(N, R, E);
    }
    subtract(w) {
      return this.add(w.negate());
    }
    is0() {
      return this.equals(h.ZERO);
    }
    wNAF(w) {
      return g.wNAFCached(this, w, h.normalizeZ);
    }
    multiplyUnsafe(w) {
      const { endo: y, n: b } = e;
      us("scalar", w, ls, b);
      const v = h.ZERO;
      if (w === ls) return v;
      if (this.is0() || w === je) return this;
      if (!y || g.hasPrecomputes(this)) return g.wNAFCachedUnsafe(this, w, h.normalizeZ);
      let { k1neg: C, k1: S, k2neg: A, k2: N } = y.splitScalar(w), R = v, E = v, $ = this;
      for (; S > ls || N > ls; ) S & je && (R = R.add($)), N & je && (E = E.add($)), $ = $.double(), S >>= je, N >>= je;
      return C && (R = R.negate()), A && (E = E.negate()), E = new h(s.mul(E.px, y.beta), E.py, E.pz), R.add(E);
    }
    multiply(w) {
      const { endo: y, n: b } = e;
      us("scalar", w, je, b);
      let v, C;
      if (y) {
        const { k1neg: S, k1: A, k2neg: N, k2: R } = y.splitScalar(w);
        let { p: E, f: $ } = this.wNAF(A), { p: I, f: L } = this.wNAF(R);
        E = g.constTimeNegate(S, E), I = g.constTimeNegate(N, I), I = new h(s.mul(I.px, y.beta), I.py, I.pz), v = E.add(I), C = $.add(L);
      } else {
        const { p: S, f: A } = this.wNAF(w);
        v = S, C = A;
      }
      return h.normalizeZ([v, C])[0];
    }
    multiplyAndAddUnsafe(w, y, b) {
      const v = h.BASE, C = (A, N) => N === ls || N === je || !A.equals(v) ? A.multiplyUnsafe(N) : A.multiply(N), S = C(this, y).add(C(w, b));
      return S.is0() ? void 0 : S;
    }
    toAffine(w) {
      return u(this, w);
    }
    isTorsionFree() {
      const { h: w, isTorsionFree: y } = e;
      if (w === je) return !0;
      if (y) return y(h, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: w, clearCofactor: y } = e;
      return w === je ? this : y ? y(h, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(w = !0) {
      return Vr("isCompressed", w), this.assertValidity(), i(h, this, w);
    }
    toHex(w = !0) {
      return Vr("isCompressed", w), Gr(this.toRawBytes(w));
    }
  }
  h.BASE = new h(e.Gx, e.Gy, s.ONE), h.ZERO = new h(s.ZERO, s.ONE, s.ZERO);
  const p = e.nBitLength, g = ay(h, e.endo ? Math.ceil(p / 2) : p);
  return { CURVE: e, ProjectivePoint: h, normPrivateKeyToScalar: c, weierstrassEquation: o, isWithinCurveOrder: a };
}
function Ey(t) {
  const e = Fd(t);
  return oi(e, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: !0, ...e });
}
function Cy(t) {
  const e = Ey(t), { Fp: s, n: r } = e, i = s.BYTES + 1, n = 2 * s.BYTES + 1;
  function o(_) {
    return dt(_, r);
  }
  function a(_) {
    return Aa(_, r);
  }
  const { ProjectivePoint: c, normPrivateKeyToScalar: l, weierstrassEquation: u, isWithinCurveOrder: d } = vy({ ...e, toBytes(_, x, O) {
    const B = x.toAffine(), j = s.toBytes(B.x), k = ln;
    return Vr("isCompressed", O), O ? k(Uint8Array.from([x.hasEvenY() ? 2 : 3]), j) : k(Uint8Array.from([4]), j, s.toBytes(B.y));
  }, fromBytes(_) {
    const x = _.length, O = _[0], B = _.subarray(1);
    if (x === i && (O === 2 || O === 3)) {
      const j = Ys(B);
      if (!vo(j, je, s.ORDER)) throw new Error("Point is not on curve");
      const k = u(j);
      let G;
      try {
        G = s.sqrt(k);
      } catch (se) {
        const Ce = se instanceof Error ? ": " + se.message : "";
        throw new Error("Point is not on curve" + Ce);
      }
      const Q = (G & je) === je;
      return (O & 1) === 1 !== Q && (G = s.neg(G)), { x: j, y: G };
    } else if (x === n && O === 4) {
      const j = s.fromBytes(B.subarray(0, s.BYTES)), k = s.fromBytes(B.subarray(s.BYTES, 2 * s.BYTES));
      return { x: j, y: k };
    } else {
      const j = i, k = n;
      throw new Error("invalid Point, expected length of " + j + ", or uncompressed " + k + ", got " + x);
    }
  } }), h = (_) => Gr(Yr(_, e.nByteLength));
  function p(_) {
    const x = r >> je;
    return _ > x;
  }
  function g(_) {
    return p(_) ? o(-_) : _;
  }
  const f = (_, x, O) => Ys(_.slice(x, O));
  class w {
    constructor(x, O, B) {
      this.r = x, this.s = O, this.recovery = B, this.assertValidity();
    }
    static fromCompact(x) {
      const O = e.nByteLength;
      return x = yt("compactSignature", x, O * 2), new w(f(x, 0, O), f(x, O, 2 * O));
    }
    static fromDER(x) {
      const { r: O, s: B } = cs.toSig(yt("DER", x));
      return new w(O, B);
    }
    assertValidity() {
      us("r", this.r, je, r), us("s", this.s, je, r);
    }
    addRecoveryBit(x) {
      return new w(this.r, this.s, x);
    }
    recoverPublicKey(x) {
      const { r: O, s: B, recovery: j } = this, k = A(yt("msgHash", x));
      if (j == null || ![0, 1, 2, 3].includes(j)) throw new Error("recovery id invalid");
      const G = j === 2 || j === 3 ? O + e.n : O;
      if (G >= s.ORDER) throw new Error("recovery id 2 or 3 invalid");
      const Q = j & 1 ? "03" : "02", se = c.fromHex(Q + h(G)), Ce = a(G), he = o(-k * Ce), Te = o(B * Ce), Le = c.BASE.multiplyAndAddUnsafe(se, he, Te);
      if (!Le) throw new Error("point at infinify");
      return Le.assertValidity(), Le;
    }
    hasHighS() {
      return p(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new w(this.r, o(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return Jr(this.toDERHex());
    }
    toDERHex() {
      return cs.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return Jr(this.toCompactHex());
    }
    toCompactHex() {
      return h(this.r) + h(this.s);
    }
  }
  const y = { isValidPrivateKey(_) {
    try {
      return l(_), !0;
    } catch {
      return !1;
    }
  }, normPrivateKeyToScalar: l, randomPrivateKey: () => {
    const _ = Ld(e.n);
    return iy(e.randomBytes(_), e.n);
  }, precompute(_ = 8, x = c.BASE) {
    return x._setWindowSize(_), x.multiply(BigInt(3)), x;
  } };
  function b(_, x = !0) {
    return c.fromPrivateKey(_).toRawBytes(x);
  }
  function v(_) {
    const x = tr(_), O = typeof _ == "string", B = (x || O) && _.length;
    return x ? B === i || B === n : O ? B === 2 * i || B === 2 * n : _ instanceof c;
  }
  function C(_, x, O = !0) {
    if (v(_)) throw new Error("first arg must be private key");
    if (!v(x)) throw new Error("second arg must be public key");
    return c.fromHex(x).multiply(l(_)).toRawBytes(O);
  }
  const S = e.bits2int || function(_) {
    if (_.length > 8192) throw new Error("input is too large");
    const x = Ys(_), O = _.length * 8 - e.nBitLength;
    return O > 0 ? x >> BigInt(O) : x;
  }, A = e.bits2int_modN || function(_) {
    return o(S(_));
  }, N = ic(e.nBitLength);
  function R(_) {
    return us("num < 2^" + e.nBitLength, _, ls, N), Yr(_, e.nByteLength);
  }
  function E(_, x, O = $) {
    if (["recovered", "canonical"].some(($e) => $e in O)) throw new Error("sign() legacy options not supported");
    const { hash: B, randomBytes: j } = e;
    let { lowS: k, prehash: G, extraEntropy: Q } = O;
    k == null && (k = !0), _ = yt("msgHash", _), yl(O), G && (_ = yt("prehashed msgHash", B(_)));
    const se = A(_), Ce = l(x), he = [R(Ce), R(se)];
    if (Q != null && Q !== !1) {
      const $e = Q === !0 ? j(s.BYTES) : Q;
      he.push(yt("extraEntropy", $e));
    }
    const Te = ln(...he), Le = se;
    function Xe($e) {
      const Re = S($e);
      if (!d(Re)) return;
      const $s = a(Re), Qt = c.BASE.multiply(Re).toAffine(), qt = o(Qt.x);
      if (qt === ls) return;
      const es = o($s * o(Le + qt * Ce));
      if (es === ls) return;
      let ts = (Qt.x === qt ? 0 : 2) | Number(Qt.y & je), _n = es;
      return k && p(es) && (_n = g(es), ts ^= 1), new w(qt, _n, ts);
    }
    return { seed: Te, k2sig: Xe };
  }
  const $ = { lowS: e.lowS, prehash: !1 }, I = { lowS: e.lowS, prehash: !1 };
  function L(_, x, O = $) {
    const { seed: B, k2sig: j } = E(_, x, O), k = e;
    return kd(k.hash.outputLen, k.nByteLength, k.hmac)(B, j);
  }
  c.BASE._setWindowSize(8);
  function H(_, x, O, B = I) {
    var es;
    const j = _;
    x = yt("msgHash", x), O = yt("publicKey", O);
    const { lowS: k, prehash: G, format: Q } = B;
    if (yl(B), "strict" in B) throw new Error("options.strict was renamed to lowS");
    if (Q !== void 0 && Q !== "compact" && Q !== "der") throw new Error("format must be compact or der");
    const se = typeof j == "string" || tr(j), Ce = !se && !Q && typeof j == "object" && j !== null && typeof j.r == "bigint" && typeof j.s == "bigint";
    if (!se && !Ce) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let he, Te;
    try {
      if (Ce && (he = new w(j.r, j.s)), se) {
        try {
          Q !== "compact" && (he = w.fromDER(j));
        } catch (ts) {
          if (!(ts instanceof cs.Err)) throw ts;
        }
        !he && Q !== "der" && (he = w.fromCompact(j));
      }
      Te = c.fromHex(O);
    } catch {
      return !1;
    }
    if (!he || k && he.hasHighS()) return !1;
    G && (x = e.hash(x));
    const { r: Le, s: Xe } = he, $e = A(x), Re = a(Xe), $s = o($e * Re), Qt = o(Le * Re), qt = (es = c.BASE.multiplyAndAddUnsafe(Te, $s, Qt)) == null ? void 0 : es.toAffine();
    return qt ? o(qt.x) === Le : !1;
  }
  return { CURVE: e, getPublicKey: b, getSharedSecret: C, sign: L, verify: H, ProjectivePoint: c, Signature: w, utils: y };
}
function Iy(t) {
  return { hash: t, hmac: (e, ...s) => mo(t, e, Sm(...s)), randomBytes: ni };
}
function Ay(t, e) {
  const s = (r) => Cy({ ...t, ...Iy(r) });
  return { ...s(e), create: s };
}
const jd = Ud(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff")), Ny = jd.create(BigInt("-3")), _y = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), Sy = Ay({ a: Ny, b: _y, Fp: jd, n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"), h: BigInt(1), lowS: !1 }, bn), qd = "base10", st = "base16", Ft = "base64pad", Es = "base64url", En = "utf8", Wd = 0, ds = 1, Cn = 2, Py = 0, vl = 1, xi = 12, nc = 32;
function Oy() {
  const t = _a.utils.randomPrivateKey(), e = _a.getPublicKey(t);
  return { privateKey: ht(t, st), publicKey: ht(e, st) };
}
function Sa() {
  const t = ni(nc);
  return ht(t, st);
}
function Ty(t, e) {
  const s = _a.getSharedSecret(xt(t, st), xt(e, st)), r = Rw(bn, s, void 0, void 0, nc);
  return ht(r, st);
}
function Jn(t) {
  const e = bn(xt(t, st));
  return ht(e, st);
}
function Jt(t) {
  const e = bn(xt(t, En));
  return ht(e, st);
}
function zd(t) {
  return xt(`${t}`, qd);
}
function sr(t) {
  return Number(ht(t, qd));
}
function Hd(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Kd(t) {
  const e = t.replace(/-/g, "+").replace(/_/g, "/"), s = (4 - e.length % 4) % 4;
  return e + "=".repeat(s);
}
function xy(t) {
  const e = zd(typeof t.type < "u" ? t.type : Wd);
  if (sr(e) === ds && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const s = typeof t.senderPublicKey < "u" ? xt(t.senderPublicKey, st) : void 0, r = typeof t.iv < "u" ? xt(t.iv, st) : ni(xi), i = xt(t.symKey, st), n = Od(i, r).encrypt(xt(t.message, En)), o = Vd({ type: e, sealed: n, iv: r, senderPublicKey: s });
  return t.encoding === Es ? Hd(o) : o;
}
function ky(t) {
  const e = xt(t.symKey, st), { sealed: s, iv: r } = un({ encoded: t.encoded, encoding: t.encoding }), i = Od(e, r).decrypt(s);
  if (i === null) throw new Error("Failed to decrypt");
  return ht(i, En);
}
function $y(t, e) {
  const s = zd(Cn), r = ni(xi), i = xt(t, En), n = Vd({ type: s, sealed: i, iv: r });
  return e === Es ? Hd(n) : n;
}
function Ry(t, e) {
  const { sealed: s } = un({ encoded: t, encoding: e });
  return ht(s, En);
}
function Vd(t) {
  if (sr(t.type) === Cn) return ht(Ti([t.type, t.sealed]), Ft);
  if (sr(t.type) === ds) {
    if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return ht(Ti([t.type, t.senderPublicKey, t.iv, t.sealed]), Ft);
  }
  return ht(Ti([t.type, t.iv, t.sealed]), Ft);
}
function un(t) {
  const e = (t.encoding || Ft) === Es ? Kd(t.encoded) : t.encoded, s = xt(e, Ft), r = s.slice(Py, vl), i = vl;
  if (sr(r) === ds) {
    const c = i + nc, l = c + xi, u = s.slice(i, c), d = s.slice(c, l), h = s.slice(l);
    return { type: r, sealed: h, iv: d, senderPublicKey: u };
  }
  if (sr(r) === Cn) {
    const c = s.slice(i), l = ni(xi);
    return { type: r, sealed: c, iv: l };
  }
  const n = i + xi, o = s.slice(i, n), a = s.slice(n);
  return { type: r, sealed: a, iv: o };
}
function Uy(t, e) {
  const s = un({ encoded: t, encoding: e == null ? void 0 : e.encoding });
  return Gd({ type: sr(s.type), senderPublicKey: typeof s.senderPublicKey < "u" ? ht(s.senderPublicKey, st) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Gd(t) {
  const e = (t == null ? void 0 : t.type) || Wd;
  if (e === ds) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function El(t) {
  return t.type === ds && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function Cl(t) {
  return t.type === Cn;
}
function Dy(t) {
  const e = Buffer.from(t.x, "base64"), s = Buffer.from(t.y, "base64");
  return Ti([new Uint8Array([4]), e, s]);
}
function Ly(t, e) {
  const [s, r, i] = t.split("."), n = Buffer.from(Kd(i), "base64");
  if (n.length !== 64) throw new Error("Invalid signature length");
  const o = n.slice(0, 32), a = n.slice(32, 64), c = `${s}.${r}`, l = bn(c), u = Dy(e);
  if (!Sy.verify(Ti([o, a]), l, u)) throw new Error("Invalid signature");
  return aa(t).payload;
}
const My = "irn";
function ao(t) {
  return (t == null ? void 0 : t.relay) || { protocol: My };
}
function Ci(t) {
  const e = Hh[t];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
function By(t, e = "-") {
  const s = {}, r = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(r)) {
      const n = i.replace(r, ""), o = t[i];
      s[n] = o;
    }
  }), s;
}
function Il(t) {
  if (!t.includes("wc:")) {
    const l = md(t);
    l != null && l.includes("wc:") && (t = l);
  }
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), s = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r = t.substring(0, e), i = t.substring(e + 1, s).split("@"), n = typeof s < "u" ? t.substring(s) : "", o = new URLSearchParams(n), a = {};
  o.forEach((l, u) => {
    a[u] = l;
  });
  const c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
  return { protocol: r, topic: Fy(i[0]), version: parseInt(i[1], 10), symKey: a.symKey, relay: By(a), methods: c, expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function Fy(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function jy(t, e = "-") {
  const s = "relay", r = {};
  return Object.keys(t).forEach((i) => {
    const n = i, o = s + e + n;
    t[n] && (r[o] = t[n]);
  }), r;
}
function Al(t) {
  const e = new URLSearchParams(), s = jy(t.relay);
  Object.keys(s).sort().forEach((i) => {
    e.set(i, s[i]);
  }), e.set("symKey", t.symKey), t.expiryTimestamp && e.set("expiryTimestamp", t.expiryTimestamp.toString()), t.methods && e.set("methods", t.methods.join(","));
  const r = e.toString();
  return `${t.protocol}:${t.topic}@${t.version}?${r}`;
}
function Mn(t, e, s) {
  return `${t}?wc_ev=${s}&topic=${e}`;
}
var qy = Object.defineProperty, Wy = Object.defineProperties, zy = Object.getOwnPropertyDescriptors, Nl = Object.getOwnPropertySymbols, Hy = Object.prototype.hasOwnProperty, Ky = Object.prototype.propertyIsEnumerable, _l = (t, e, s) => e in t ? qy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Vy = (t, e) => {
  for (var s in e || (e = {})) Hy.call(e, s) && _l(t, s, e[s]);
  if (Nl) for (var s of Nl(e)) Ky.call(e, s) && _l(t, s, e[s]);
  return t;
}, Gy = (t, e) => Wy(t, zy(e));
function ai(t) {
  const e = [];
  return t.forEach((s) => {
    const [r, i] = s.split(":");
    e.push(`${r}:${i}`);
  }), e;
}
function Jy(t) {
  const e = [];
  return Object.values(t).forEach((s) => {
    e.push(...ai(s.accounts));
  }), e;
}
function Yy(t, e) {
  const s = [];
  return Object.values(t).forEach((r) => {
    ai(r.accounts).includes(e) && s.push(...r.methods);
  }), s;
}
function Xy(t, e) {
  const s = [];
  return Object.values(t).forEach((r) => {
    ai(r.accounts).includes(e) && s.push(...r.events);
  }), s;
}
function Eo(t) {
  return t.includes(":");
}
function Rr(t) {
  return Eo(t) ? t.split(":")[0] : t;
}
function Sl(t) {
  var e, s, r;
  const i = {};
  if (!Ps(t)) return i;
  for (const [n, o] of Object.entries(t)) {
    const a = Eo(n) ? [n] : o.chains, c = o.methods || [], l = o.events || [], u = Rr(n);
    i[u] = Gy(Vy({}, i[u]), { chains: Xt(a, (e = i[u]) == null ? void 0 : e.chains), methods: Xt(c, (s = i[u]) == null ? void 0 : s.methods), events: Xt(l, (r = i[u]) == null ? void 0 : r.events) });
  }
  return i;
}
function Zy(t) {
  const e = {};
  return t == null || t.forEach((s) => {
    var r;
    const [i, n] = s.split(":");
    e[i] || (e[i] = { accounts: [], chains: [], events: [], methods: [] }), e[i].accounts.push(s), (r = e[i].chains) == null || r.push(`${i}:${n}`);
  }), e;
}
function Pl(t, e) {
  e = e.map((r) => r.replace("did:pkh:", ""));
  const s = Zy(e);
  for (const [r, i] of Object.entries(s)) i.methods ? i.methods = Xt(i.methods, t) : i.methods = t, i.events = ["chainChanged", "accountsChanged"];
  return s;
}
function Qy(t, e) {
  var s, r, i, n, o, a;
  const c = Sl(t), l = Sl(e), u = {}, d = Object.keys(c).concat(Object.keys(l));
  for (const h of d) u[h] = { chains: Xt((s = c[h]) == null ? void 0 : s.chains, (r = l[h]) == null ? void 0 : r.chains), methods: Xt((i = c[h]) == null ? void 0 : i.methods, (n = l[h]) == null ? void 0 : n.methods), events: Xt((o = c[h]) == null ? void 0 : o.events, (a = l[h]) == null ? void 0 : a.events) };
  return u;
}
const eb = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, tb = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function U(t, e) {
  const { message: s, code: r } = tb[t];
  return { message: e ? `${s} ${e}` : s, code: r };
}
function we(t, e) {
  const { message: s, code: r } = eb[t];
  return { message: e ? `${s} ${e}` : s, code: r };
}
function Ss(t, e) {
  return !!Array.isArray(t);
}
function Ps(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Je(t) {
  return typeof t > "u";
}
function ke(t, e) {
  return e && Je(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function oc(t, e) {
  return e && Je(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function sb(t, e) {
  const { requiredNamespaces: s } = e, r = Object.keys(t.namespaces), i = Object.keys(s);
  let n = !0;
  return Ks(i, r) ? (r.forEach((o) => {
    const { accounts: a, methods: c, events: l } = t.namespaces[o], u = ai(a), d = s[o];
    (!Ks(dd(o, d), u) || !Ks(d.methods, c) || !Ks(d.events, l)) && (n = !1);
  }), n) : !1;
}
function co(t) {
  return ke(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function rb(t) {
  if (ke(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const s = e[0] + ":" + e[1];
      return !!e[2] && co(s);
    }
  }
  return !1;
}
function ib(t) {
  function e(s) {
    try {
      return typeof new URL(s) < "u";
    } catch {
      return !1;
    }
  }
  try {
    if (ke(t, !1)) {
      if (e(t)) return !0;
      const s = md(t);
      return e(s);
    }
  } catch {
  }
  return !1;
}
function nb(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function ob(t) {
  return t == null ? void 0 : t.topic;
}
function ab(t, e) {
  let s = null;
  return ke(t == null ? void 0 : t.publicKey, !1) || (s = U("MISSING_OR_INVALID", `${e} controller public key should be a string`)), s;
}
function Ol(t) {
  let e = !0;
  return Ss(t) ? t.length && (e = t.every((s) => ke(s, !1))) : e = !1, e;
}
function cb(t, e, s) {
  let r = null;
  return Ss(e) && e.length ? e.forEach((i) => {
    r || co(i) || (r = we("UNSUPPORTED_CHAINS", `${s}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : co(t) || (r = we("UNSUPPORTED_CHAINS", `${s}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r;
}
function lb(t, e, s) {
  let r = null;
  return Object.entries(t).forEach(([i, n]) => {
    if (r) return;
    const o = cb(i, dd(i, n), `${e} ${s}`);
    o && (r = o);
  }), r;
}
function ub(t, e) {
  let s = null;
  return Ss(t) ? t.forEach((r) => {
    s || rb(r) || (s = we("UNSUPPORTED_ACCOUNTS", `${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
  }) : s = we("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s;
}
function db(t, e) {
  let s = null;
  return Object.values(t).forEach((r) => {
    if (s) return;
    const i = ub(r == null ? void 0 : r.accounts, `${e} namespace`);
    i && (s = i);
  }), s;
}
function hb(t, e) {
  let s = null;
  return Ol(t == null ? void 0 : t.methods) ? Ol(t == null ? void 0 : t.events) || (s = we("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : s = we("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), s;
}
function Jd(t, e) {
  let s = null;
  return Object.values(t).forEach((r) => {
    if (s) return;
    const i = hb(r, `${e}, namespace`);
    i && (s = i);
  }), s;
}
function pb(t, e, s) {
  let r = null;
  if (t && Ps(t)) {
    const i = Jd(t, e);
    i && (r = i);
    const n = lb(t, e, s);
    n && (r = n);
  } else r = U("MISSING_OR_INVALID", `${e}, ${s} should be an object with data`);
  return r;
}
function zo(t, e) {
  let s = null;
  if (t && Ps(t)) {
    const r = Jd(t, e);
    r && (s = r);
    const i = db(t, e);
    i && (s = i);
  } else s = U("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return s;
}
function Yd(t) {
  return ke(t.protocol, !0);
}
function fb(t, e) {
  let s = !1;
  return t ? t && Ss(t) && t.length && t.forEach((r) => {
    s = Yd(r);
  }) : s = !0, s;
}
function gb(t) {
  return typeof t == "number";
}
function ut(t) {
  return typeof t < "u" && typeof t !== null;
}
function mb(t) {
  return !(!t || typeof t != "object" || !t.code || !oc(t.code, !1) || !t.message || !ke(t.message, !1));
}
function wb(t) {
  return !(Je(t) || !ke(t.method, !1));
}
function yb(t) {
  return !(Je(t) || Je(t.result) && Je(t.error) || !oc(t.id, !1) || !ke(t.jsonrpc, !1));
}
function bb(t) {
  return !(Je(t) || !ke(t.name, !1));
}
function Tl(t, e) {
  return !(!co(e) || !Jy(t).includes(e));
}
function vb(t, e, s) {
  return ke(s, !1) ? Yy(t, e).includes(s) : !1;
}
function Eb(t, e, s) {
  return ke(s, !1) ? Xy(t, e).includes(s) : !1;
}
function xl(t, e, s) {
  let r = null;
  const i = Cb(t), n = Ib(e), o = Object.keys(i), a = Object.keys(n), c = kl(Object.keys(t)), l = kl(Object.keys(e)), u = c.filter((d) => !l.includes(d));
  return u.length && (r = U("NON_CONFORMING_NAMESPACES", `${s} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`)), Ks(o, a) || (r = U("NON_CONFORMING_NAMESPACES", `${s} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || r) return;
    const h = ai(e[d].accounts);
    h.includes(d) || (r = U("NON_CONFORMING_NAMESPACES", `${s} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${h.toString()}`));
  }), o.forEach((d) => {
    r || (Ks(i[d].methods, n[d].methods) ? Ks(i[d].events, n[d].events) || (r = U("NON_CONFORMING_NAMESPACES", `${s} namespaces events don't satisfy namespace events for ${d}`)) : r = U("NON_CONFORMING_NAMESPACES", `${s} namespaces methods don't satisfy namespace methods for ${d}`));
  }), r;
}
function Cb(t) {
  const e = {};
  return Object.keys(t).forEach((s) => {
    var r;
    s.includes(":") ? e[s] = t[s] : (r = t[s].chains) == null || r.forEach((i) => {
      e[i] = { methods: t[s].methods, events: t[s].events };
    });
  }), e;
}
function kl(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Ib(t) {
  const e = {};
  return Object.keys(t).forEach((s) => {
    if (s.includes(":")) e[s] = t[s];
    else {
      const r = ai(t[s].accounts);
      r == null || r.forEach((i) => {
        e[i] = { accounts: t[s].accounts.filter((n) => n.includes(`${i}:`)), methods: t[s].methods, events: t[s].events };
      });
    }
  }), e;
}
function Ab(t, e) {
  return oc(t, !1) && t <= e.max && t >= e.min;
}
function $l() {
  const t = wn();
  return new Promise((e) => {
    switch (t) {
      case vt.browser:
        e(Nb());
        break;
      case vt.reactNative:
        e(_b());
        break;
      case vt.node:
        e(Sb());
        break;
      default:
        e(!0);
    }
  });
}
function Nb() {
  return ii() && (navigator == null ? void 0 : navigator.onLine);
}
async function _b() {
  if (ks() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Sb() {
  return !0;
}
function Pb(t) {
  switch (wn()) {
    case vt.browser:
      Ob(t);
      break;
    case vt.reactNative:
      Tb(t);
      break;
  }
}
function Ob(t) {
  !ks() && ii() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Tb(t) {
  ks() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
function xb() {
  var t;
  return ii() && Br() ? ((t = Br()) == null ? void 0 : t.visibilityState) === "visible" : !0;
}
const Ho = {};
class pi {
  static get(e) {
    return Ho[e];
  }
  static set(e, s) {
    Ho[e] = s;
  }
  static delete(e) {
    delete Ho[e];
  }
}
const Xd = "wc", Zd = 2, Pa = "core", Zt = `${Xd}@2:${Pa}:`, kb = { logger: "error" }, $b = { database: ":memory:" }, Rb = "crypto", Rl = "client_ed25519_seed", Ub = D.ONE_DAY, Db = "keychain", Lb = "0.3", Mb = "messages", Bb = "0.3", Ul = D.SIX_HOURS, Fb = "publisher", Qd = "irn", jb = "error", eh = "wss://relay.walletconnect.org", qb = "relayer", qe = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Wb = "_subscription", St = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, zb = 0.1, Oa = "2.21.0", Ne = { link_mode: "link_mode", relay: "relay" }, Yn = { inbound: "inbound", outbound: "outbound" }, Hb = "0.3", Kb = "WALLETCONNECT_CLIENT_ID", Dl = "WALLETCONNECT_LINK_MODE_APPS", mt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Vb = "subscription", Gb = "0.3", Jb = "pairing", Yb = "0.3", fi = { wc_pairingDelete: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: D.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: D.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 0 } } }, qs = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Rt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Xb = "history", Zb = "0.3", Qb = "expirer", Tt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, ev = "0.3", tv = "verify-api", sv = "https://verify.walletconnect.com", th = "https://verify.walletconnect.org", ki = th, rv = `${ki}/v3`, iv = [sv, th], nv = "echo", ov = "https://echo.walletconnect.com", Kt = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, as = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, Ut = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" }, Us = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" }, Ds = { authenticated_session_approve_started: "authenticated_session_approve_started", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve" }, gi = { no_internet_connection: "no_internet_connection", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, av = 0.1, cv = "event-client", lv = 86400, uv = "https://pulse.walletconnect.org/batch";
function dv(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var s = new Uint8Array(256), r = 0; r < s.length; r++) s[r] = 255;
  for (var i = 0; i < t.length; i++) {
    var n = t.charAt(i), o = n.charCodeAt(0);
    if (s[o] !== 255) throw new TypeError(n + " is ambiguous");
    s[o] = i;
  }
  var a = t.length, c = t.charAt(0), l = Math.log(a) / Math.log(256), u = Math.log(256) / Math.log(a);
  function d(g) {
    if (g instanceof Uint8Array || (ArrayBuffer.isView(g) ? g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength) : Array.isArray(g) && (g = Uint8Array.from(g))), !(g instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (g.length === 0) return "";
    for (var f = 0, w = 0, y = 0, b = g.length; y !== b && g[y] === 0; ) y++, f++;
    for (var v = (b - y) * u + 1 >>> 0, C = new Uint8Array(v); y !== b; ) {
      for (var S = g[y], A = 0, N = v - 1; (S !== 0 || A < w) && N !== -1; N--, A++) S += 256 * C[N] >>> 0, C[N] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0) throw new Error("Non-zero carry");
      w = A, y++;
    }
    for (var R = v - w; R !== v && C[R] === 0; ) R++;
    for (var E = c.repeat(f); R < v; ++R) E += t.charAt(C[R]);
    return E;
  }
  function h(g) {
    if (typeof g != "string") throw new TypeError("Expected String");
    if (g.length === 0) return new Uint8Array();
    var f = 0;
    if (g[f] !== " ") {
      for (var w = 0, y = 0; g[f] === c; ) w++, f++;
      for (var b = (g.length - f) * l + 1 >>> 0, v = new Uint8Array(b); g[f]; ) {
        var C = s[g.charCodeAt(f)];
        if (C === 255) return;
        for (var S = 0, A = b - 1; (C !== 0 || S < y) && A !== -1; A--, S++) C += a * v[A] >>> 0, v[A] = C % 256 >>> 0, C = C / 256 >>> 0;
        if (C !== 0) throw new Error("Non-zero carry");
        y = S, f++;
      }
      if (g[f] !== " ") {
        for (var N = b - y; N !== b && v[N] === 0; ) N++;
        for (var R = new Uint8Array(w + (b - N)), E = w; N !== b; ) R[E++] = v[N++];
        return R;
      }
    }
  }
  function p(g) {
    var f = h(g);
    if (f) return f;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d, decodeUnsafe: h, decode: p };
}
var hv = dv, pv = hv;
const sh = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, fv = (t) => new TextEncoder().encode(t), gv = (t) => new TextDecoder().decode(t);
class mv {
  constructor(e, s, r) {
    this.name = e, this.prefix = s, this.baseEncode = r;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class wv {
  constructor(e, s, r) {
    if (this.name = e, this.prefix = s, s.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = s.codePointAt(0), this.baseDecode = r;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return rh(this, e);
  }
}
class yv {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return rh(this, e);
  }
  decode(e) {
    const s = e[0], r = this.decoders[s];
    if (r) return r.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const rh = (t, e) => new yv({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class bv {
  constructor(e, s, r, i) {
    this.name = e, this.prefix = s, this.baseEncode = r, this.baseDecode = i, this.encoder = new mv(e, s, r), this.decoder = new wv(e, s, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Co = ({ name: t, prefix: e, encode: s, decode: r }) => new bv(t, e, s, r), In = ({ prefix: t, name: e, alphabet: s }) => {
  const { encode: r, decode: i } = pv(s, e);
  return Co({ prefix: t, name: e, encode: r, decode: (n) => sh(i(n)) });
}, vv = (t, e, s, r) => {
  const i = {};
  for (let u = 0; u < e.length; ++u) i[e[u]] = u;
  let n = t.length;
  for (; t[n - 1] === "="; ) --n;
  const o = new Uint8Array(n * s / 8 | 0);
  let a = 0, c = 0, l = 0;
  for (let u = 0; u < n; ++u) {
    const d = i[t[u]];
    if (d === void 0) throw new SyntaxError(`Non-${r} character`);
    c = c << s | d, a += s, a >= 8 && (a -= 8, o[l++] = 255 & c >> a);
  }
  if (a >= s || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
  return o;
}, Ev = (t, e, s) => {
  const r = e[e.length - 1] === "=", i = (1 << s) - 1;
  let n = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > s; ) o -= s, n += e[i & a >> o];
  if (o && (n += e[i & a << s - o]), r) for (; n.length * s & 7; ) n += "=";
  return n;
}, Ye = ({ name: t, prefix: e, bitsPerChar: s, alphabet: r }) => Co({ prefix: e, name: t, encode(i) {
  return Ev(i, r, s);
}, decode(i) {
  return vv(i, r, s, t);
} }), Cv = Co({ prefix: "\0", name: "identity", encode: (t) => gv(t), decode: (t) => fv(t) });
var Iv = Object.freeze({ __proto__: null, identity: Cv });
const Av = Ye({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Nv = Object.freeze({ __proto__: null, base2: Av });
const _v = Ye({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Sv = Object.freeze({ __proto__: null, base8: _v });
const Pv = In({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Ov = Object.freeze({ __proto__: null, base10: Pv });
const Tv = Ye({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), xv = Ye({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var kv = Object.freeze({ __proto__: null, base16: Tv, base16upper: xv });
const $v = Ye({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Rv = Ye({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Uv = Ye({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Dv = Ye({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Lv = Ye({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Mv = Ye({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Bv = Ye({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Fv = Ye({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), jv = Ye({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var qv = Object.freeze({ __proto__: null, base32: $v, base32upper: Rv, base32pad: Uv, base32padupper: Dv, base32hex: Lv, base32hexupper: Mv, base32hexpad: Bv, base32hexpadupper: Fv, base32z: jv });
const Wv = In({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), zv = In({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Hv = Object.freeze({ __proto__: null, base36: Wv, base36upper: zv });
const Kv = In({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Vv = In({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Gv = Object.freeze({ __proto__: null, base58btc: Kv, base58flickr: Vv });
const Jv = Ye({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Yv = Ye({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Xv = Ye({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Zv = Ye({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Qv = Object.freeze({ __proto__: null, base64: Jv, base64pad: Yv, base64url: Xv, base64urlpad: Zv });
const ih = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), e0 = ih.reduce((t, e, s) => (t[s] = e, t), []), t0 = ih.reduce((t, e, s) => (t[e.codePointAt(0)] = s, t), []);
function s0(t) {
  return t.reduce((e, s) => (e += e0[s], e), "");
}
function r0(t) {
  const e = [];
  for (const s of t) {
    const r = t0[s.codePointAt(0)];
    if (r === void 0) throw new Error(`Non-base256emoji character: ${s}`);
    e.push(r);
  }
  return new Uint8Array(e);
}
const i0 = Co({ prefix: "🚀", name: "base256emoji", encode: s0, decode: r0 });
var n0 = Object.freeze({ __proto__: null, base256emoji: i0 }), o0 = nh, Ll = 128, a0 = -128, c0 = Math.pow(2, 31);
function nh(t, e, s) {
  e = e || [], s = s || 0;
  for (var r = s; t >= c0; ) e[s++] = t & 255 | Ll, t /= 128;
  for (; t & a0; ) e[s++] = t & 255 | Ll, t >>>= 7;
  return e[s] = t | 0, nh.bytes = s - r + 1, e;
}
var l0 = Ta, u0 = 128, Ml = 127;
function Ta(t, r) {
  var s = 0, r = r || 0, i = 0, n = r, o, a = t.length;
  do {
    if (n >= a) throw Ta.bytes = 0, new RangeError("Could not decode varint");
    o = t[n++], s += i < 28 ? (o & Ml) << i : (o & Ml) * Math.pow(2, i), i += 7;
  } while (o >= u0);
  return Ta.bytes = n - r, s;
}
var d0 = Math.pow(2, 7), h0 = Math.pow(2, 14), p0 = Math.pow(2, 21), f0 = Math.pow(2, 28), g0 = Math.pow(2, 35), m0 = Math.pow(2, 42), w0 = Math.pow(2, 49), y0 = Math.pow(2, 56), b0 = Math.pow(2, 63), v0 = function(t) {
  return t < d0 ? 1 : t < h0 ? 2 : t < p0 ? 3 : t < f0 ? 4 : t < g0 ? 5 : t < m0 ? 6 : t < w0 ? 7 : t < y0 ? 8 : t < b0 ? 9 : 10;
}, E0 = { encode: o0, decode: l0, encodingLength: v0 }, oh = E0;
const Bl = (t, e, s = 0) => (oh.encode(t, e, s), e), Fl = (t) => oh.encodingLength(t), xa = (t, e) => {
  const s = e.byteLength, r = Fl(t), i = r + Fl(s), n = new Uint8Array(i + s);
  return Bl(t, n, 0), Bl(s, n, r), n.set(e, i), new C0(t, s, e, n);
};
class C0 {
  constructor(e, s, r, i) {
    this.code = e, this.size = s, this.digest = r, this.bytes = i;
  }
}
const ah = ({ name: t, code: e, encode: s }) => new I0(t, e, s);
class I0 {
  constructor(e, s, r) {
    this.name = e, this.code = s, this.encode = r;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const s = this.encode(e);
      return s instanceof Uint8Array ? xa(this.code, s) : s.then((r) => xa(this.code, r));
    } else throw Error("Unknown type, must be binary type");
  }
}
const ch = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), A0 = ah({ name: "sha2-256", code: 18, encode: ch("SHA-256") }), N0 = ah({ name: "sha2-512", code: 19, encode: ch("SHA-512") });
var _0 = Object.freeze({ __proto__: null, sha256: A0, sha512: N0 });
const lh = 0, S0 = "identity", uh = sh, P0 = (t) => xa(lh, uh(t)), O0 = { code: lh, name: S0, encode: uh, digest: P0 };
var T0 = Object.freeze({ __proto__: null, identity: O0 });
new TextEncoder(), new TextDecoder();
const jl = { ...Iv, ...Nv, ...Sv, ...Ov, ...kv, ...qv, ...Hv, ...Gv, ...Qv, ...n0 };
({ ..._0, ...T0 });
function x0(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(t) : new Uint8Array(t);
}
function dh(t, e, s, r) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: s }, decoder: { decode: r } };
}
const ql = dh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Ko = dh("ascii", "a", (t) => {
  let e = "a";
  for (let s = 0; s < t.length; s++) e += String.fromCharCode(t[s]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = x0(t.length);
  for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
  return e;
}), k0 = { utf8: ql, "utf-8": ql, hex: jl.base16, latin1: Ko, ascii: Ko, binary: Ko, ...jl };
function $0(t, e = "utf8") {
  const s = k0[e];
  if (!s) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t, "utf8") : s.decoder.decode(`${s.prefix}${t}`);
}
var R0 = Object.defineProperty, U0 = (t, e, s) => e in t ? R0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, zt = (t, e, s) => U0(t, typeof e != "symbol" ? e + "" : e, s);
class D0 {
  constructor(e, s) {
    this.core = e, this.logger = s, zt(this, "keychain", /* @__PURE__ */ new Map()), zt(this, "name", Db), zt(this, "version", Lb), zt(this, "initialized", !1), zt(this, "storagePrefix", Zt), zt(this, "init", async () => {
      if (!this.initialized) {
        const r = await this.getKeyChain();
        typeof r < "u" && (this.keychain = r), this.initialized = !0;
      }
    }), zt(this, "has", (r) => (this.isInitialized(), this.keychain.has(r))), zt(this, "set", async (r, i) => {
      this.isInitialized(), this.keychain.set(r, i), await this.persist();
    }), zt(this, "get", (r) => {
      this.isInitialized();
      const i = this.keychain.get(r);
      if (typeof i > "u") {
        const { message: n } = U("NO_MATCHING_KEY", `${this.name}: ${r}`);
        throw new Error(n);
      }
      return i;
    }), zt(this, "del", async (r) => {
      this.isInitialized(), this.keychain.delete(r), await this.persist();
    }), this.core = e, this.logger = rt(s, this.name);
  }
  get context() {
    return Ct(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, ma(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? wa(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var L0 = Object.defineProperty, M0 = (t, e, s) => e in t ? L0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ve = (t, e, s) => M0(t, typeof e != "symbol" ? e + "" : e, s);
class B0 {
  constructor(e, s, r) {
    this.core = e, this.logger = s, Ve(this, "name", Rb), Ve(this, "keychain"), Ve(this, "randomSessionIdentifier", Sa()), Ve(this, "initialized", !1), Ve(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }), Ve(this, "hasKeys", (i) => (this.isInitialized(), this.keychain.has(i))), Ve(this, "getClientId", async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), n = mc(i);
      return Yh(n.publicKey);
    }), Ve(this, "generateKeyPair", () => {
      this.isInitialized();
      const i = Oy();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }), Ve(this, "signJWT", async (i) => {
      this.isInitialized();
      const n = await this.getClientSeed(), o = mc(n), a = this.randomSessionIdentifier;
      return await Xh(a, i, Ub, o);
    }), Ve(this, "generateSharedKey", (i, n, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(i), c = Ty(a, n);
      return this.setSymKey(c, o);
    }), Ve(this, "setSymKey", async (i, n) => {
      this.isInitialized();
      const o = n || Jn(i);
      return await this.keychain.set(o, i), o;
    }), Ve(this, "deleteKeyPair", async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }), Ve(this, "deleteSymKey", async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }), Ve(this, "encode", async (i, n, o) => {
      this.isInitialized();
      const a = Gd(o), c = Ha(n);
      if (Cl(a)) return $y(c, o == null ? void 0 : o.encoding);
      if (El(a)) {
        const h = a.senderPublicKey, p = a.receiverPublicKey;
        i = await this.generateSharedKey(h, p);
      }
      const l = this.getSymKey(i), { type: u, senderPublicKey: d } = a;
      return xy({ type: u, symKey: l, message: c, senderPublicKey: d, encoding: o == null ? void 0 : o.encoding });
    }), Ve(this, "decode", async (i, n, o) => {
      this.isInitialized();
      const a = Uy(n, o);
      if (Cl(a)) {
        const c = Ry(n, o == null ? void 0 : o.encoding);
        return so(c);
      }
      if (El(a)) {
        const c = a.receiverPublicKey, l = a.senderPublicKey;
        i = await this.generateSharedKey(c, l);
      }
      try {
        const c = this.getSymKey(i), l = ky({ symKey: c, encoded: n, encoding: o == null ? void 0 : o.encoding });
        return so(l);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }), Ve(this, "getPayloadType", (i, n = Ft) => {
      const o = un({ encoded: i, encoding: n });
      return sr(o.type);
    }), Ve(this, "getPayloadSenderPublicKey", (i, n = Ft) => {
      const o = un({ encoded: i, encoding: n });
      return o.senderPublicKey ? ht(o.senderPublicKey, st) : void 0;
    }), this.core = e, this.logger = rt(s, this.name), this.keychain = r || new D0(this.core, this.logger);
  }
  get context() {
    return Ct(this.logger);
  }
  async setPrivateKey(e, s) {
    return await this.keychain.set(e, s), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Rl);
    } catch {
      e = Sa(), await this.keychain.set(Rl, e);
    }
    return $0(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var F0 = Object.defineProperty, j0 = Object.defineProperties, q0 = Object.getOwnPropertyDescriptors, Wl = Object.getOwnPropertySymbols, W0 = Object.prototype.hasOwnProperty, z0 = Object.prototype.propertyIsEnumerable, ka = (t, e, s) => e in t ? F0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, H0 = (t, e) => {
  for (var s in e || (e = {})) W0.call(e, s) && ka(t, s, e[s]);
  if (Wl) for (var s of Wl(e)) z0.call(e, s) && ka(t, s, e[s]);
  return t;
}, K0 = (t, e) => j0(t, q0(e)), gt = (t, e, s) => ka(t, typeof e != "symbol" ? e + "" : e, s);
class V0 extends Hf {
  constructor(e, s) {
    super(e, s), this.logger = e, this.core = s, gt(this, "messages", /* @__PURE__ */ new Map()), gt(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), gt(this, "name", Mb), gt(this, "version", Bb), gt(this, "initialized", !1), gt(this, "storagePrefix", Zt), gt(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const r = await this.getRelayerMessages();
          typeof r < "u" && (this.messages = r);
          const i = await this.getRelayerMessagesWithoutClientAck();
          typeof i < "u" && (this.messagesWithoutClientAck = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (r) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(r);
        } finally {
          this.initialized = !0;
        }
      }
    }), gt(this, "set", async (r, i, n) => {
      this.isInitialized();
      const o = Jt(i);
      let a = this.messages.get(r);
      if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
      if (a[o] = i, this.messages.set(r, a), n === Yn.inbound) {
        const c = this.messagesWithoutClientAck.get(r) || {};
        this.messagesWithoutClientAck.set(r, K0(H0({}, c), { [o]: i }));
      }
      return await this.persist(), o;
    }), gt(this, "get", (r) => {
      this.isInitialized();
      let i = this.messages.get(r);
      return typeof i > "u" && (i = {}), i;
    }), gt(this, "getWithoutAck", (r) => {
      this.isInitialized();
      const i = {};
      for (const n of r) {
        const o = this.messagesWithoutClientAck.get(n) || {};
        i[n] = Object.values(o);
      }
      return i;
    }), gt(this, "has", (r, i) => {
      this.isInitialized();
      const n = this.get(r), o = Jt(i);
      return typeof n[o] < "u";
    }), gt(this, "ack", async (r, i) => {
      this.isInitialized();
      const n = this.messagesWithoutClientAck.get(r);
      if (typeof n > "u") return;
      const o = Jt(i);
      delete n[o], Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(r) : this.messagesWithoutClientAck.set(r, n), await this.persist();
    }), gt(this, "del", async (r) => {
      this.isInitialized(), this.messages.delete(r), this.messagesWithoutClientAck.delete(r), await this.persist();
    }), this.logger = rt(e, this.name), this.core = s;
  }
  get context() {
    return Ct(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, ma(e));
  }
  async setRelayerMessagesWithoutClientAck(e) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, ma(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? wa(e) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e < "u" ? wa(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var G0 = Object.defineProperty, J0 = Object.defineProperties, Y0 = Object.getOwnPropertyDescriptors, zl = Object.getOwnPropertySymbols, X0 = Object.prototype.hasOwnProperty, Z0 = Object.prototype.propertyIsEnumerable, $a = (t, e, s) => e in t ? G0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Bn = (t, e) => {
  for (var s in e || (e = {})) X0.call(e, s) && $a(t, s, e[s]);
  if (zl) for (var s of zl(e)) Z0.call(e, s) && $a(t, s, e[s]);
  return t;
}, Vo = (t, e) => J0(t, Y0(e)), Dt = (t, e, s) => $a(t, typeof e != "symbol" ? e + "" : e, s);
class Q0 extends Kf {
  constructor(e, s) {
    super(e, s), this.relayer = e, this.logger = s, Dt(this, "events", new nr.EventEmitter()), Dt(this, "name", Fb), Dt(this, "queue", /* @__PURE__ */ new Map()), Dt(this, "publishTimeout", D.toMiliseconds(D.ONE_MINUTE)), Dt(this, "initialPublishTimeout", D.toMiliseconds(D.ONE_SECOND * 15)), Dt(this, "needsTransportRestart", !1), Dt(this, "publish", async (r, i, n) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: r, message: i, opts: n } });
      const a = (n == null ? void 0 : n.ttl) || Ul, c = ao(n), l = (n == null ? void 0 : n.prompt) || !1, u = (n == null ? void 0 : n.tag) || 0, d = (n == null ? void 0 : n.id) || kr().toString(), h = { topic: r, message: i, opts: { ttl: a, relay: c, prompt: l, tag: u, id: d, attestation: n == null ? void 0 : n.attestation, tvf: n == null ? void 0 : n.tvf } }, p = `Failed to publish payload, please try again. id:${d} tag:${u}`;
      try {
        const g = new Promise(async (f) => {
          const w = ({ id: b }) => {
            h.opts.id === b && (this.removeRequestFromQueue(b), this.relayer.events.removeListener(qe.publish, w), f(h));
          };
          this.relayer.events.on(qe.publish, w);
          const y = As(new Promise((b, v) => {
            this.rpcPublish({ topic: r, message: i, ttl: a, prompt: l, tag: u, id: d, attestation: n == null ? void 0 : n.attestation, tvf: n == null ? void 0 : n.tvf }).then(b).catch((C) => {
              this.logger.warn(C, C == null ? void 0 : C.message), v(C);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${d} tag:${u}`);
          try {
            await y, this.events.removeListener(qe.publish, w);
          } catch (b) {
            this.queue.set(d, Vo(Bn({}, h), { attempt: 1 })), this.logger.warn(b, b == null ? void 0 : b.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: d, topic: r, message: i, opts: n } }), await As(g, this.publishTimeout, p);
      } catch (g) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(g), (o = n == null ? void 0 : n.internal) != null && o.throwOnFailedPublish) throw g;
      } finally {
        this.queue.delete(d);
      }
    }), Dt(this, "on", (r, i) => {
      this.events.on(r, i);
    }), Dt(this, "once", (r, i) => {
      this.events.once(r, i);
    }), Dt(this, "off", (r, i) => {
      this.events.off(r, i);
    }), Dt(this, "removeListener", (r, i) => {
      this.events.removeListener(r, i);
    }), this.relayer = e, this.logger = rt(s, this.name), this.registerEventListeners();
  }
  get context() {
    return Ct(this.logger);
  }
  async rpcPublish(e) {
    var s, r, i, n;
    const { topic: o, message: a, ttl: c = Ul, prompt: l, tag: u, id: d, attestation: h, tvf: p } = e, g = { method: Ci(ao().protocol).publish, params: Bn({ topic: o, message: a, ttl: c, prompt: l, tag: u, attestation: h }, p), id: d };
    Je((s = g.params) == null ? void 0 : s.prompt) && ((r = g.params) == null || delete r.prompt), Je((i = g.params) == null ? void 0 : i.tag) && ((n = g.params) == null || delete n.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: g });
    const f = await this.relayer.request(g);
    return this.relayer.events.emit(qe.publish, e), this.logger.debug("Successfully Published Payload"), f;
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e, s) => {
      const r = e.attempt + 1;
      this.queue.set(s, Vo(Bn({}, e), { attempt: r }));
      const { topic: i, message: n, opts: o, attestation: a } = e;
      this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`), await this.rpcPublish(Vo(Bn({}, e), { topic: i, message: n, ttl: o.ttl, prompt: o.prompt, tag: o.tag, id: o.id, attestation: a, tvf: o.tvf })), this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(ei.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(qe.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(qe.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
var eE = Object.defineProperty, tE = (t, e, s) => e in t ? eE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, gr = (t, e, s) => tE(t, typeof e != "symbol" ? e + "" : e, s);
class sE {
  constructor() {
    gr(this, "map", /* @__PURE__ */ new Map()), gr(this, "set", (e, s) => {
      const r = this.get(e);
      this.exists(e, s) || this.map.set(e, [...r, s]);
    }), gr(this, "get", (e) => this.map.get(e) || []), gr(this, "exists", (e, s) => this.get(e).includes(s)), gr(this, "delete", (e, s) => {
      if (typeof s > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const r = this.get(e);
      if (!this.exists(e, s)) return;
      const i = r.filter((n) => n !== s);
      if (!i.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, i);
    }), gr(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var rE = Object.defineProperty, iE = Object.defineProperties, nE = Object.getOwnPropertyDescriptors, Hl = Object.getOwnPropertySymbols, oE = Object.prototype.hasOwnProperty, aE = Object.prototype.propertyIsEnumerable, Ra = (t, e, s) => e in t ? rE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, mi = (t, e) => {
  for (var s in e || (e = {})) oE.call(e, s) && Ra(t, s, e[s]);
  if (Hl) for (var s of Hl(e)) aE.call(e, s) && Ra(t, s, e[s]);
  return t;
}, Go = (t, e) => iE(t, nE(e)), be = (t, e, s) => Ra(t, typeof e != "symbol" ? e + "" : e, s);
class cE extends Jf {
  constructor(e, s) {
    super(e, s), this.relayer = e, this.logger = s, be(this, "subscriptions", /* @__PURE__ */ new Map()), be(this, "topicMap", new sE()), be(this, "events", new nr.EventEmitter()), be(this, "name", Vb), be(this, "version", Gb), be(this, "pending", /* @__PURE__ */ new Map()), be(this, "cached", []), be(this, "initialized", !1), be(this, "storagePrefix", Zt), be(this, "subscribeTimeout", D.toMiliseconds(D.ONE_MINUTE)), be(this, "initialSubscribeTimeout", D.toMiliseconds(D.ONE_SECOND * 15)), be(this, "clientId"), be(this, "batchSubscribeTopicsLimit", 500), be(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = !0;
    }), be(this, "subscribe", async (r, i) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: r, opts: i } });
      try {
        const n = ao(i), o = { topic: r, relay: n, transportType: i == null ? void 0 : i.transportType };
        this.pending.set(r, o);
        const a = await this.rpcSubscribe(r, n, i);
        return typeof a == "string" && (this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: r, opts: i } })), a;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }), be(this, "unsubscribe", async (r, i) => {
      this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(r, i.id, i) : await this.unsubscribeByTopic(r, i);
    }), be(this, "isSubscribed", (r) => new Promise((i) => {
      i(this.topicMap.topics.includes(r));
    })), be(this, "isKnownTopic", (r) => new Promise((i) => {
      i(this.topicMap.topics.includes(r) || this.pending.has(r) || this.cached.some((n) => n.topic === r));
    })), be(this, "on", (r, i) => {
      this.events.on(r, i);
    }), be(this, "once", (r, i) => {
      this.events.once(r, i);
    }), be(this, "off", (r, i) => {
      this.events.off(r, i);
    }), be(this, "removeListener", (r, i) => {
      this.events.removeListener(r, i);
    }), be(this, "start", async () => {
      await this.onConnect();
    }), be(this, "stop", async () => {
      await this.onDisconnect();
    }), be(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), be(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const r = [];
      this.pending.forEach((i) => {
        r.push(i);
      }), await this.batchSubscribe(r);
    }), be(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(ei.pulse, async () => {
        await this.checkPending();
      }), this.events.on(mt.created, async (r) => {
        const i = mt.created;
        this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, data: r }), await this.persist();
      }), this.events.on(mt.deleted, async (r) => {
        const i = mt.deleted;
        this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, data: r }), await this.persist();
      });
    }), this.relayer = e, this.logger = rt(s, this.name), this.clientId = "";
  }
  get context() {
    return Ct(this.logger);
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
  hasSubscription(e, s) {
    let r = !1;
    try {
      r = this.getSubscription(e).topic === s;
    } catch {
    }
    return r;
  }
  reset() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, s) {
    const r = this.topicMap.get(e);
    await Promise.all(r.map(async (i) => await this.unsubscribeById(e, i, s)));
  }
  async unsubscribeById(e, s, r) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: s, opts: r } });
    try {
      const i = ao(r);
      await this.restartToComplete({ topic: e, id: s, relay: i }), await this.rpcUnsubscribe(e, s, i);
      const n = we("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, s, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: s, opts: r } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, s, r) {
    var i;
    (!r || (r == null ? void 0 : r.transportType) === Ne.relay) && await this.restartToComplete({ topic: e, id: e, relay: s });
    const n = { method: Ci(s.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    const o = (i = r == null ? void 0 : r.internal) == null ? void 0 : i.throwOnFailedPublish;
    try {
      const a = await this.getSubscriptionId(e);
      if ((r == null ? void 0 : r.transportType) === Ne.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n).catch((u) => this.logger.warn(u));
      }, D.toMiliseconds(D.ONE_SECOND)), a;
      const c = new Promise(async (u) => {
        const d = (h) => {
          h.topic === e && (this.events.removeListener(mt.created, d), u(h.id));
        };
        this.events.on(mt.created, d);
        try {
          const h = await As(new Promise((p, g) => {
            this.relayer.request(n).catch((f) => {
              this.logger.warn(f, f == null ? void 0 : f.message), g(f);
            }).then(p);
          }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
          this.events.removeListener(mt.created, d), u(h);
        } catch {
        }
      }), l = await As(c, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
      if (!l && o) throw new Error(`Subscribing to ${e} failed, please try again`);
      return l ? a : null;
    } catch (a) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(qe.connection_stalled), o) throw a;
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const s = e[0].relay, r = { method: Ci(s.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: r });
    try {
      await await As(new Promise((i) => {
        this.relayer.request(r).catch((n) => this.logger.warn(n)).then(i);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(qe.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const s = e[0].relay, r = { method: Ci(s.protocol).batchFetchMessages, params: { topics: e.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: r });
    let i;
    try {
      i = await await As(new Promise((n, o) => {
        this.relayer.request(r).catch((a) => {
          this.logger.warn(a), o(a);
        }).then(n);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(qe.connection_stalled);
    }
    return i;
  }
  rpcUnsubscribe(e, s, r) {
    const i = { method: Ci(r.protocol).unsubscribe, params: { topic: e, id: s } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, s) {
    this.setSubscription(e, Go(mi({}, s), { id: e })), this.pending.delete(s.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((s) => {
      this.setSubscription(s.id, mi({}, s)), this.pending.delete(s.topic);
    });
  }
  async onUnsubscribe(e, s, r) {
    this.events.removeAllListeners(s), this.hasSubscription(s, e) && this.deleteSubscription(s, r), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, s) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: s }), this.addSubscription(e, s);
  }
  addSubscription(e, s) {
    this.subscriptions.set(e, mi({}, s)), this.topicMap.set(s.topic, e), this.events.emit(mt.created, s);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const s = this.subscriptions.get(e);
    if (!s) {
      const { message: r } = U("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(r);
    }
    return s;
  }
  deleteSubscription(e, s) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: s });
    const r = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(mt.deleted, Go(mi({}, r), { reason: s }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(mt.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e = [...this.cached], s = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < s; r++) {
        const i = e.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(mt.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: s } = U("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (s) => Go(mi({}, s), { id: await this.getSubscriptionId(s.topic) })))));
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const s = await this.rpcBatchFetchMessages(e);
    s && s.messages && (await mm(D.toMiliseconds(D.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(s.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
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
    return Jt(e + await this.getClientId());
  }
}
var lE = Object.defineProperty, Kl = Object.getOwnPropertySymbols, uE = Object.prototype.hasOwnProperty, dE = Object.prototype.propertyIsEnumerable, Ua = (t, e, s) => e in t ? lE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Vl = (t, e) => {
  for (var s in e || (e = {})) uE.call(e, s) && Ua(t, s, e[s]);
  if (Kl) for (var s of Kl(e)) dE.call(e, s) && Ua(t, s, e[s]);
  return t;
}, le = (t, e, s) => Ua(t, typeof e != "symbol" ? e + "" : e, s);
class hE extends Vf {
  constructor(e) {
    super(e), le(this, "protocol", "wc"), le(this, "version", 2), le(this, "core"), le(this, "logger"), le(this, "events", new nr.EventEmitter()), le(this, "provider"), le(this, "messages"), le(this, "subscriber"), le(this, "publisher"), le(this, "name", qb), le(this, "transportExplicitlyClosed", !1), le(this, "initialized", !1), le(this, "connectionAttemptInProgress", !1), le(this, "relayUrl"), le(this, "projectId"), le(this, "packageName"), le(this, "bundleId"), le(this, "hasExperiencedNetworkDisruption", !1), le(this, "pingTimeout"), le(this, "heartBeatTimeout", D.toMiliseconds(D.THIRTY_SECONDS + D.FIVE_SECONDS)), le(this, "reconnectTimeout"), le(this, "connectPromise"), le(this, "reconnectInProgress", !1), le(this, "requestsInFlight", []), le(this, "connectTimeout", D.toMiliseconds(D.ONE_SECOND * 15)), le(this, "request", async (s) => {
      var r, i;
      this.logger.debug("Publishing Request Payload");
      const n = s.id || kr().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: n, method: s.method, topic: (r = s.params) == null ? void 0 : r.topic }, "relayer.request - publishing...");
        const o = `${n}:${((i = s.params) == null ? void 0 : i.tag) || ""}`;
        this.requestsInFlight.push(o);
        const a = await this.provider.request(s);
        return this.requestsInFlight = this.requestsInFlight.filter((c) => c !== o), a;
      } catch (o) {
        throw this.logger.debug(`Failed to Publish Request: ${n}`), o;
      }
    }), le(this, "resetPingTimeout", () => {
      no() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var s, r, i, n;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n = (i = (r = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : r.socket) == null ? void 0 : i.terminate) == null || n.call(i);
        } catch (o) {
          this.logger.warn(o, o == null ? void 0 : o.message);
        }
      }, this.heartBeatTimeout));
    }), le(this, "onPayloadHandler", (s) => {
      this.onProviderPayload(s), this.resetPingTimeout();
    }), le(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(qe.connect);
    }), le(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), le(this, "onProviderErrorHandler", (s) => {
      this.logger.fatal(`Fatal socket error: ${s.message}`), this.events.emit(qe.error, s), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), le(this, "registerProviderListeners", () => {
      this.provider.on(St.payload, this.onPayloadHandler), this.provider.on(St.connect, this.onConnectHandler), this.provider.on(St.disconnect, this.onDisconnectHandler), this.provider.on(St.error, this.onProviderErrorHandler);
    }), this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? rt(e.logger, this.name) : Ka(fn({ level: e.logger || jb })), this.messages = new V0(this.logger, e.core), this.subscriber = new cE(this, this.logger), this.publisher = new Q0(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || eh, this.projectId = e.projectId, em() ? this.packageName = Hc() : tm() && (this.bundleId = Hc()), this.provider = {};
  }
  async init() {
    if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.subscriber.hasAnyTopics) try {
      await this.transportOpen();
    } catch (e) {
      this.logger.warn(e, e == null ? void 0 : e.message);
    }
  }
  get context() {
    return Ct(this.logger);
  }
  get connected() {
    var e, s, r;
    return ((r = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : r.readyState) === 1 || !1;
  }
  get connecting() {
    var e, s, r;
    return ((r = (s = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : s.socket) == null ? void 0 : r.readyState) === 0 || this.connectPromise !== void 0 || !1;
  }
  async publish(e, s, r) {
    this.isInitialized(), await this.publisher.publish(e, s, r), await this.recordMessageEvent({ topic: e, message: s, publishedAt: Date.now(), transportType: Ne.relay }, Yn.outbound);
  }
  async subscribe(e, s) {
    var r, i, n;
    this.isInitialized(), (!(s != null && s.transportType) || (s == null ? void 0 : s.transportType) === "relay") && await this.toEstablishConnection();
    const o = typeof ((r = s == null ? void 0 : s.internal) == null ? void 0 : r.throwOnFailedPublish) > "u" ? !0 : (i = s == null ? void 0 : s.internal) == null ? void 0 : i.throwOnFailedPublish;
    let a = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "", c;
    const l = (u) => {
      u.topic === e && (this.subscriber.off(mt.created, l), c());
    };
    return await Promise.all([new Promise((u) => {
      c = u, this.subscriber.on(mt.created, l);
    }), new Promise(async (u, d) => {
      a = await this.subscriber.subscribe(e, Vl({ internal: { throwOnFailedPublish: o } }, s)).catch((h) => {
        o && d(h);
      }) || a, u();
    })]), a;
  }
  async unsubscribe(e, s) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, s);
  }
  on(e, s) {
    this.events.on(e, s);
  }
  once(e, s) {
    this.events.once(e, s);
  }
  off(e, s) {
    this.events.off(e, s);
  }
  removeListener(e, s) {
    this.events.removeListener(e, s);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await As(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, await this.transportDisconnect();
  }
  async transportOpen(e) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (s, r) => {
      await this.connect(e).then(s).catch(r).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await $l()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const s = e.sort((r, i) => r.publishedAt - i.publishedAt);
    this.logger.debug(`Batch of ${s.length} message events sorted`);
    for (const r of s) try {
      await this.onMessageEvent(r);
    } catch (i) {
      this.logger.warn(i, "Error while processing batch message event: " + (i == null ? void 0 : i.message));
    }
    this.logger.trace(`Batch of ${s.length} message events processed`);
  }
  async onLinkMessageEvent(e, s) {
    const { topic: r } = e;
    if (!s.sessionExists) {
      const i = De(D.FIVE_MINUTES), n = { topic: r, expiry: i, relay: { protocol: "irn" }, active: !1 };
      await this.core.pairing.pairings.set(r, n);
    }
    this.events.emit(qe.message, e), await this.recordMessageEvent(e, Yn.inbound);
  }
  async connect(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
    let s = 1;
    for (; s < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${s}...`), await this.createProvider(), await new Promise(async (r, i) => {
          const n = () => {
            i(new Error("Connection interrupted while trying to subscribe"));
          };
          this.provider.once(St.disconnect, n), await As(new Promise((o, a) => {
            this.provider.connect().then(o).catch(a);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
            i(o);
          }).finally(() => {
            this.provider.off(St.disconnect, n), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o, a) => {
            const c = () => {
              a(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(St.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
              this.provider.off(St.disconnect, c);
            });
          }), this.hasExperiencedNetworkDisruption = !1, r();
        });
      } catch (r) {
        await this.subscriber.stop();
        const i = r;
        this.logger.warn({}, i.message), this.hasExperiencedNetworkDisruption = !0;
      } finally {
        this.connectionAttemptInProgress = !1;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${s}`);
        break;
      }
      await new Promise((r) => setTimeout(r, D.toMiliseconds(s * 1))), s++;
    }
  }
  startPingTimeout() {
    var e, s, r, i, n;
    if (no()) try {
      (s = (e = this.provider) == null ? void 0 : e.connection) != null && s.socket && ((n = (i = (r = this.provider) == null ? void 0 : r.connection) == null ? void 0 : i.socket) == null || n.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o) {
      this.logger.warn(o, o == null ? void 0 : o.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new kt(new Jh(om({ sdkVersion: Oa, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e, s) {
    const { topic: r, message: i } = e;
    await this.messages.set(r, i, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: s, message: r } = e;
    if (!r || r.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
    if (!await this.subscriber.isKnownTopic(s)) return this.logger.warn(`Ignoring message for unknown topic ${s}`), !0;
    const i = this.messages.has(s, r);
    return i && this.logger.warn(`Ignoring duplicate message: ${r}`), i;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Va(e)) {
      if (!e.method.endsWith(Wb)) return;
      const s = e.params, { topic: r, message: i, publishedAt: n, attestation: o } = s.data, a = { topic: r, message: i, publishedAt: n, transportType: Ne.relay, attestation: o };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Vl({ type: "event", event: s.id }, a)), this.events.emit(s.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else Ga(e) && this.events.emit(qe.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, Yn.inbound), this.events.emit(qe.message, e));
  }
  async acknowledgePayload(e) {
    const s = po(e.id, !0);
    await this.provider.connection.send(s);
  }
  unregisterProviderListeners() {
    this.provider.off(St.payload, this.onPayloadHandler), this.provider.off(St.connect, this.onConnectHandler), this.provider.off(St.disconnect, this.onDisconnectHandler), this.provider.off(St.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await $l();
    Pb(async (s) => {
      e !== s && (e = s, s ? await this.transportOpen().catch((r) => this.logger.error(r, r == null ? void 0 : r.message)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
    }), this.core.heartbeat.on(ei.pulse, async () => {
      if (!this.transportExplicitlyClosed && !this.connected && xb()) try {
        await this.confirmOnlineStateOrThrow(), await this.transportOpen();
      } catch (s) {
        this.logger.warn(s, s == null ? void 0 : s.message);
      }
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(qe.disconnect), this.connectionAttemptInProgress = !1, !this.reconnectInProgress && (this.reconnectInProgress = !0, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = !1;
    }, D.toMiliseconds(zb)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
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
function pE() {
}
function Gl(t) {
  if (!t || typeof t != "object") return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : !1;
}
function Jl(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function Yl(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const fE = "[object RegExp]", gE = "[object String]", mE = "[object Number]", wE = "[object Boolean]", Xl = "[object Arguments]", yE = "[object Symbol]", bE = "[object Date]", vE = "[object Map]", EE = "[object Set]", CE = "[object Array]", IE = "[object Function]", AE = "[object ArrayBuffer]", Jo = "[object Object]", NE = "[object Error]", _E = "[object DataView]", SE = "[object Uint8Array]", PE = "[object Uint8ClampedArray]", OE = "[object Uint16Array]", TE = "[object Uint32Array]", xE = "[object BigUint64Array]", kE = "[object Int8Array]", $E = "[object Int16Array]", RE = "[object Int32Array]", UE = "[object BigInt64Array]", DE = "[object Float32Array]", LE = "[object Float64Array]";
function ME(t, e) {
  return t === e || Number.isNaN(t) && Number.isNaN(e);
}
function BE(t, e, s) {
  return Ii(t, e, void 0, void 0, void 0, void 0, s);
}
function Ii(t, e, s, r, i, n, o) {
  const a = o(t, e, s, r, i, n);
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
      return $i(t, e, n, o);
  }
  return $i(t, e, n, o);
}
function $i(t, e, s, r) {
  if (Object.is(t, e)) return !0;
  let i = Yl(t), n = Yl(e);
  if (i === Xl && (i = Jo), n === Xl && (n = Jo), i !== n) return !1;
  switch (i) {
    case gE:
      return t.toString() === e.toString();
    case mE: {
      const c = t.valueOf(), l = e.valueOf();
      return ME(c, l);
    }
    case wE:
    case bE:
    case yE:
      return Object.is(t.valueOf(), e.valueOf());
    case fE:
      return t.source === e.source && t.flags === e.flags;
    case IE:
      return t === e;
  }
  s = s ?? /* @__PURE__ */ new Map();
  const o = s.get(t), a = s.get(e);
  if (o != null && a != null) return o === e;
  s.set(t, e), s.set(e, t);
  try {
    switch (i) {
      case vE: {
        if (t.size !== e.size) return !1;
        for (const [c, l] of t.entries()) if (!e.has(c) || !Ii(l, e.get(c), c, t, e, s, r)) return !1;
        return !0;
      }
      case EE: {
        if (t.size !== e.size) return !1;
        const c = Array.from(t.values()), l = Array.from(e.values());
        for (let u = 0; u < c.length; u++) {
          const d = c[u], h = l.findIndex((p) => Ii(d, p, void 0, t, e, s, r));
          if (h === -1) return !1;
          l.splice(h, 1);
        }
        return !0;
      }
      case CE:
      case SE:
      case PE:
      case OE:
      case TE:
      case xE:
      case kE:
      case $E:
      case RE:
      case UE:
      case DE:
      case LE: {
        if (typeof Buffer < "u" && Buffer.isBuffer(t) !== Buffer.isBuffer(e) || t.length !== e.length) return !1;
        for (let c = 0; c < t.length; c++) if (!Ii(t[c], e[c], c, t, e, s, r)) return !1;
        return !0;
      }
      case AE:
        return t.byteLength !== e.byteLength ? !1 : $i(new Uint8Array(t), new Uint8Array(e), s, r);
      case _E:
        return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? !1 : $i(new Uint8Array(t), new Uint8Array(e), s, r);
      case NE:
        return t.name === e.name && t.message === e.message;
      case Jo: {
        if (!($i(t.constructor, e.constructor, s, r) || Gl(t) && Gl(e))) return !1;
        const c = [...Object.keys(t), ...Jl(t)], l = [...Object.keys(e), ...Jl(e)];
        if (c.length !== l.length) return !1;
        for (let u = 0; u < c.length; u++) {
          const d = c[u], h = t[d];
          if (!Object.hasOwn(e, d)) return !1;
          const p = e[d];
          if (!Ii(h, p, d, t, e, s, r)) return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    s.delete(t), s.delete(e);
  }
}
function FE(t, e) {
  return BE(t, e, pE);
}
var jE = Object.defineProperty, Zl = Object.getOwnPropertySymbols, qE = Object.prototype.hasOwnProperty, WE = Object.prototype.propertyIsEnumerable, Da = (t, e, s) => e in t ? jE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ql = (t, e) => {
  for (var s in e || (e = {})) qE.call(e, s) && Da(t, s, e[s]);
  if (Zl) for (var s of Zl(e)) WE.call(e, s) && Da(t, s, e[s]);
  return t;
}, at = (t, e, s) => Da(t, typeof e != "symbol" ? e + "" : e, s);
class lr extends Gf {
  constructor(e, s, r, i = Zt, n = void 0) {
    super(e, s, r, i), this.core = e, this.logger = s, this.name = r, at(this, "map", /* @__PURE__ */ new Map()), at(this, "version", Hb), at(this, "cached", []), at(this, "initialized", !1), at(this, "getKey"), at(this, "storagePrefix", Zt), at(this, "recentlyDeleted", []), at(this, "recentlyDeletedLimit", 200), at(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !Je(o) ? this.map.set(this.getKey(o), o) : nb(o) ? this.map.set(o.id, o) : ob(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }), at(this, "set", async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }), at(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o))), at(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => FE(a[c], o[c]))) : this.values)), at(this, "update", async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const c = Ql(Ql({}, this.getData(o)), a);
      this.map.set(o, c), await this.persist();
    }), at(this, "delete", async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
    }), this.logger = rt(s, this.name), this.storagePrefix = i, this.getKey = n;
  }
  get context() {
    return Ct(this.logger);
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
    const s = this.map.get(e);
    if (!s) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: i } = U("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(i), new Error(i);
      }
      const { message: r } = U("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(r), new Error(r);
    }
    return s;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: s } = U("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var zE = Object.defineProperty, HE = (t, e, s) => e in t ? zE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, ie = (t, e, s) => HE(t, typeof e != "symbol" ? e + "" : e, s);
class KE {
  constructor(e, s) {
    this.core = e, this.logger = s, ie(this, "name", Jb), ie(this, "version", Yb), ie(this, "events", new Ja()), ie(this, "pairings"), ie(this, "initialized", !1), ie(this, "storagePrefix", Zt), ie(this, "ignoredPayloadTypes", [ds]), ie(this, "registeredMethods", []), ie(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }), ie(this, "register", ({ methods: r }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...r])];
    }), ie(this, "create", async (r) => {
      this.isInitialized();
      const i = Sa(), n = await this.core.crypto.setSymKey(i), o = De(D.FIVE_MINUTES), a = { protocol: Qd }, c = { topic: n, expiry: o, relay: a, active: !1, methods: r == null ? void 0 : r.methods }, l = Al({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: i, relay: a, expiryTimestamp: o, methods: r == null ? void 0 : r.methods });
      return this.events.emit(qs.create, c), this.core.expirer.set(n, o), await this.pairings.set(n, c), await this.core.relayer.subscribe(n, { transportType: r == null ? void 0 : r.transportType }), { topic: n, uri: l };
    }), ie(this, "pair", async (r) => {
      this.isInitialized();
      const i = this.core.eventClient.createEvent({ properties: { topic: r == null ? void 0 : r.uri, trace: [Kt.pairing_started] } });
      this.isValidPair(r, i);
      const { topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: l } = Il(r.uri);
      i.props.properties.topic = n, i.addTrace(Kt.pairing_uri_validation_success), i.addTrace(Kt.pairing_uri_not_expired);
      let u;
      if (this.pairings.keys.includes(n)) {
        if (u = this.pairings.get(n), i.addTrace(Kt.existing_pairing), u.active) throw i.setError(as.active_pairing_already_exists), new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
        i.addTrace(Kt.pairing_not_expired);
      }
      const d = c || De(D.FIVE_MINUTES), h = { topic: n, relay: a, expiry: d, active: !1, methods: l };
      this.core.expirer.set(n, d), await this.pairings.set(n, h), i.addTrace(Kt.store_new_pairing), r.activatePairing && await this.activate({ topic: n }), this.events.emit(qs.create, h), i.addTrace(Kt.emit_inactive_pairing), this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(o, n), i.addTrace(Kt.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        i.setError(as.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n, { relay: a });
      } catch (p) {
        throw i.setError(as.subscribe_pairing_topic_failure), p;
      }
      return i.addTrace(Kt.subscribe_pairing_topic_success), h;
    }), ie(this, "activate", async ({ topic: r }) => {
      this.isInitialized();
      const i = De(D.FIVE_MINUTES);
      this.core.expirer.set(r, i), await this.pairings.update(r, { active: !0, expiry: i });
    }), ie(this, "ping", async (r) => {
      this.isInitialized(), await this.isValidPing(r), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: i } = r;
      if (this.pairings.keys.includes(i)) {
        const n = await this.sendRequest(i, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = Bs();
        this.events.once(pe("pairing_ping", n), ({ error: l }) => {
          l ? c(l) : a();
        }), await o();
      }
    }), ie(this, "updateExpiry", async ({ topic: r, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(r, { expiry: i });
    }), ie(this, "updateMetadata", async ({ topic: r, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(r, { peerMetadata: i });
    }), ie(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), ie(this, "disconnect", async (r) => {
      this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: i } = r;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", we("USER_DISCONNECTED")), await this.deletePairing(i));
    }), ie(this, "formatUriFromPairing", (r) => {
      this.isInitialized();
      const { topic: i, relay: n, expiry: o, methods: a } = r, c = this.core.crypto.keychain.get(i);
      return Al({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: c, relay: n, expiryTimestamp: o, methods: a });
    }), ie(this, "sendRequest", async (r, i, n) => {
      const o = zs(i, n), a = await this.core.crypto.encode(r, o), c = fi[i].req;
      return this.core.history.set(r, o), this.core.relayer.publish(r, a, c), o.id;
    }), ie(this, "sendResult", async (r, i, n) => {
      const o = po(r, n), a = await this.core.crypto.encode(i, o), c = (await this.core.history.get(i, r)).request.method, l = fi[c].res;
      await this.core.relayer.publish(i, a, l), await this.core.history.resolve(o);
    }), ie(this, "sendError", async (r, i, n) => {
      const o = Bu(r, n), a = await this.core.crypto.encode(i, o), c = (await this.core.history.get(i, r)).request.method, l = fi[c] ? fi[c].res : fi.unregistered_method.res;
      await this.core.relayer.publish(i, a, l), await this.core.history.resolve(o);
    }), ie(this, "deletePairing", async (r, i) => {
      await this.core.relayer.unsubscribe(r), await Promise.all([this.pairings.delete(r, we("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(r), i ? Promise.resolve() : this.core.expirer.del(r)]);
    }), ie(this, "cleanup", async () => {
      const r = this.pairings.getAll().filter((i) => vs(i.expiry));
      await Promise.all(r.map((i) => this.deletePairing(i.topic)));
    }), ie(this, "onRelayEventRequest", async (r) => {
      const { topic: i, payload: n } = r;
      switch (n.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(i, n);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(i, n);
        default:
          return await this.onUnknownRpcMethodRequest(i, n);
      }
    }), ie(this, "onRelayEventResponse", async (r) => {
      const { topic: i, payload: n } = r, o = (await this.core.history.get(i, n.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, n);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }), ie(this, "onPairingPingRequest", async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidPing({ topic: r }), await this.sendResult(n, r, !0), this.events.emit(qs.ping, { id: n, topic: r });
      } catch (o) {
        await this.sendError(n, r, o), this.logger.error(o);
      }
    }), ie(this, "onPairingPingResponse", (r, i) => {
      const { id: n } = i;
      setTimeout(() => {
        os(i) ? this.events.emit(pe("pairing_ping", n), {}) : Vt(i) && this.events.emit(pe("pairing_ping", n), { error: i.error });
      }, 500);
    }), ie(this, "onPairingDeleteRequest", async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: r }), await this.deletePairing(r), this.events.emit(qs.delete, { id: n, topic: r });
      } catch (o) {
        await this.sendError(n, r, o), this.logger.error(o);
      }
    }), ie(this, "onUnknownRpcMethodRequest", async (r, i) => {
      const { id: n, method: o } = i;
      try {
        if (this.registeredMethods.includes(o)) return;
        const a = we("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(n, r, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(n, r, a), this.logger.error(a);
      }
    }), ie(this, "onUnknownRpcMethodResponse", (r) => {
      this.registeredMethods.includes(r) || this.logger.error(we("WC_METHOD_UNSUPPORTED", r));
    }), ie(this, "isValidPair", (r, i) => {
      var n;
      if (!ut(r)) {
        const { message: a } = U("MISSING_OR_INVALID", `pair() params: ${r}`);
        throw i.setError(as.malformed_pairing_uri), new Error(a);
      }
      if (!ib(r.uri)) {
        const { message: a } = U("MISSING_OR_INVALID", `pair() uri: ${r.uri}`);
        throw i.setError(as.malformed_pairing_uri), new Error(a);
      }
      const o = Il(r == null ? void 0 : r.uri);
      if (!((n = o == null ? void 0 : o.relay) != null && n.protocol)) {
        const { message: a } = U("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw i.setError(as.malformed_pairing_uri), new Error(a);
      }
      if (!(o != null && o.symKey)) {
        const { message: a } = U("MISSING_OR_INVALID", "pair() uri#symKey");
        throw i.setError(as.malformed_pairing_uri), new Error(a);
      }
      if (o != null && o.expiryTimestamp && D.toMiliseconds(o == null ? void 0 : o.expiryTimestamp) < Date.now()) {
        i.setError(as.pairing_expired);
        const { message: a } = U("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
      }
    }), ie(this, "isValidPing", async (r) => {
      if (!ut(r)) {
        const { message: n } = U("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidPairingTopic(i);
    }), ie(this, "isValidDisconnect", async (r) => {
      if (!ut(r)) {
        const { message: n } = U("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidPairingTopic(i);
    }), ie(this, "isValidPairingTopic", async (r) => {
      if (!ke(r, !1)) {
        const { message: i } = U("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(r)) {
        const { message: i } = U("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
        throw new Error(i);
      }
      if (vs(this.pairings.get(r).expiry)) {
        await this.deletePairing(r);
        const { message: i } = U("EXPIRED", `pairing topic: ${r}`);
        throw new Error(i);
      }
    }), this.core = e, this.logger = rt(s, this.name), this.pairings = new lr(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ct(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(qe.message, async (e) => {
      const { topic: s, message: r, transportType: i } = e;
      if (this.pairings.keys.includes(s) && i !== Ne.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) try {
        const n = await this.core.crypto.decode(s, r);
        Va(n) ? (this.core.history.set(s, n), await this.onRelayEventRequest({ topic: s, payload: n })) : Ga(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: s, payload: n }), this.core.history.delete(s, n.id)), await this.core.relayer.messages.ack(s, r);
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Tt.expired, async (e) => {
      const { topic: s } = gd(e.target);
      s && this.pairings.keys.includes(s) && (await this.deletePairing(s, !0), this.events.emit(qs.expire, { topic: s }));
    });
  }
}
var VE = Object.defineProperty, GE = (t, e, s) => e in t ? VE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ge = (t, e, s) => GE(t, typeof e != "symbol" ? e + "" : e, s);
class JE extends zf {
  constructor(e, s) {
    super(e, s), this.core = e, this.logger = s, Ge(this, "records", /* @__PURE__ */ new Map()), Ge(this, "events", new nr.EventEmitter()), Ge(this, "name", Xb), Ge(this, "version", Zb), Ge(this, "cached", []), Ge(this, "initialized", !1), Ge(this, "storagePrefix", Zt), Ge(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((r) => this.records.set(r.id, r)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }), Ge(this, "set", (r, i, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: r, request: i, chainId: n }), this.records.has(i.id)) return;
      const o = { id: i.id, topic: r, request: { method: i.method, params: i.params || null }, chainId: n, expiry: De(D.THIRTY_DAYS) };
      this.records.set(o.id, o), this.persist(), this.events.emit(Rt.created, o);
    }), Ge(this, "resolve", async (r) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: r }), !this.records.has(r.id)) return;
      const i = await this.getRecord(r.id);
      typeof i.response > "u" && (i.response = Vt(r) ? { error: r.error } : { result: r.result }, this.records.set(i.id, i), this.persist(), this.events.emit(Rt.updated, i));
    }), Ge(this, "get", async (r, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: r, id: i }), await this.getRecord(i))), Ge(this, "delete", (r, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((n) => {
        if (n.topic === r) {
          if (typeof i < "u" && n.id !== i) return;
          this.records.delete(n.id), this.events.emit(Rt.deleted, n);
        }
      }), this.persist();
    }), Ge(this, "exists", async (r, i) => (this.isInitialized(), this.records.has(i) ? (await this.getRecord(i)).topic === r : !1)), Ge(this, "on", (r, i) => {
      this.events.on(r, i);
    }), Ge(this, "once", (r, i) => {
      this.events.once(r, i);
    }), Ge(this, "off", (r, i) => {
      this.events.off(r, i);
    }), Ge(this, "removeListener", (r, i) => {
      this.events.removeListener(r, i);
    }), this.logger = rt(s, this.name);
  }
  get context() {
    return Ct(this.logger);
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
    return this.values.forEach((s) => {
      if (typeof s.response < "u") return;
      const r = { topic: s.topic, request: zs(s.request.method, s.request.params, s.id), chainId: s.chainId };
      return e.push(r);
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
    const s = this.records.get(e);
    if (!s) {
      const { message: r } = U("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(r);
    }
    return s;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Rt.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: s } = U("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Rt.created, (e) => {
      const s = Rt.created;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, record: e });
    }), this.events.on(Rt.updated, (e) => {
      const s = Rt.updated;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, record: e });
    }), this.events.on(Rt.deleted, (e) => {
      const s = Rt.deleted;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, record: e });
    }), this.core.heartbeat.on(ei.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = !1;
      this.records.forEach((s) => {
        D.toMiliseconds(s.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${s.id}`), this.records.delete(s.id), this.events.emit(Rt.deleted, s, !1), e = !0);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var YE = Object.defineProperty, XE = (t, e, s) => e in t ? YE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ze = (t, e, s) => XE(t, typeof e != "symbol" ? e + "" : e, s);
class ZE extends Yf {
  constructor(e, s) {
    super(e, s), this.core = e, this.logger = s, Ze(this, "expirations", /* @__PURE__ */ new Map()), Ze(this, "events", new nr.EventEmitter()), Ze(this, "name", Qb), Ze(this, "version", ev), Ze(this, "cached", []), Ze(this, "initialized", !1), Ze(this, "storagePrefix", Zt), Ze(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((r) => this.expirations.set(r.target, r)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }), Ze(this, "has", (r) => {
      try {
        const i = this.formatTarget(r);
        return typeof this.getExpiration(i) < "u";
      } catch {
        return !1;
      }
    }), Ze(this, "set", (r, i) => {
      this.isInitialized();
      const n = this.formatTarget(r), o = { target: n, expiry: i };
      this.expirations.set(n, o), this.checkExpiry(n, o), this.events.emit(Tt.created, { target: n, expiration: o });
    }), Ze(this, "get", (r) => {
      this.isInitialized();
      const i = this.formatTarget(r);
      return this.getExpiration(i);
    }), Ze(this, "del", (r) => {
      if (this.isInitialized(), this.has(r)) {
        const i = this.formatTarget(r), n = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(Tt.deleted, { target: i, expiration: n });
      }
    }), Ze(this, "on", (r, i) => {
      this.events.on(r, i);
    }), Ze(this, "once", (r, i) => {
      this.events.once(r, i);
    }), Ze(this, "off", (r, i) => {
      this.events.off(r, i);
    }), Ze(this, "removeListener", (r, i) => {
      this.events.removeListener(r, i);
    }), this.logger = rt(s, this.name);
  }
  get context() {
    return Ct(this.logger);
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
    if (typeof e == "string") return am(e);
    if (typeof e == "number") return cm(e);
    const { message: s } = U("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(s);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Tt.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: s } = U("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(s), new Error(s);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const s = this.expirations.get(e);
    if (!s) {
      const { message: r } = U("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(r), new Error(r);
    }
    return s;
  }
  checkExpiry(e, s) {
    const { expiry: r } = s;
    D.toMiliseconds(r) - Date.now() <= 0 && this.expire(e, s);
  }
  expire(e, s) {
    this.expirations.delete(e), this.events.emit(Tt.expired, { target: e, expiration: s });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, s) => this.checkExpiry(s, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(ei.pulse, () => this.checkExpirations()), this.events.on(Tt.created, (e) => {
      const s = Tt.created;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: e }), this.persist();
    }), this.events.on(Tt.expired, (e) => {
      const s = Tt.expired;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: e }), this.persist();
    }), this.events.on(Tt.deleted, (e) => {
      const s = Tt.deleted;
      this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var QE = Object.defineProperty, e1 = (t, e, s) => e in t ? QE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, xe = (t, e, s) => e1(t, typeof e != "symbol" ? e + "" : e, s);
class t1 extends Xf {
  constructor(e, s, r) {
    super(e, s, r), this.core = e, this.logger = s, this.store = r, xe(this, "name", tv), xe(this, "abortController"), xe(this, "isDevEnv"), xe(this, "verifyUrlV3", rv), xe(this, "storagePrefix", Zt), xe(this, "version", Zd), xe(this, "publicKey"), xe(this, "fetchPromise"), xe(this, "init", async () => {
      var i;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && D.toMiliseconds((i = this.publicKey) == null ? void 0 : i.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), xe(this, "register", async (i) => {
      if (!ii() || this.isDevEnv) return;
      const n = window.location.origin, { id: o, decryptedId: a } = i, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
      try {
        const l = Br(), u = this.startAbortTimer(D.ONE_SECOND * 5), d = await new Promise((h, p) => {
          const g = () => {
            window.removeEventListener("message", w), l.body.removeChild(f), p("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", g);
          const f = l.createElement("iframe");
          f.src = c, f.style.display = "none", f.addEventListener("error", g, { signal: this.abortController.signal });
          const w = (y) => {
            if (y.data && typeof y.data == "string") try {
              const b = JSON.parse(y.data);
              if (b.type === "verify_attestation") {
                if (aa(b.attestation).payload.id !== o) return;
                clearInterval(u), l.body.removeChild(f), this.abortController.signal.removeEventListener("abort", g), window.removeEventListener("message", w), h(b.attestation === null ? "" : b.attestation);
              }
            } catch (b) {
              this.logger.warn(b);
            }
          };
          l.body.appendChild(f), window.addEventListener("message", w, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", d), d;
      } catch (l) {
        this.logger.warn(l);
      }
      return "";
    }), xe(this, "resolve", async (i) => {
      if (this.isDevEnv) return "";
      const { attestationId: n, hash: o, encryptedId: a } = i;
      if (n === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n) {
        if (aa(n).payload.id !== a) return;
        const l = await this.isValidJwtAttestation(n);
        if (l) {
          if (!l.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return l;
        }
      }
      if (!o) return;
      const c = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
      return this.fetchAttestation(o, c);
    }), xe(this, "fetchAttestation", async (i, n) => {
      this.logger.debug(`resolving attestation: ${i} from url: ${n}`);
      const o = this.startAbortTimer(D.ONE_SECOND * 5), a = await fetch(`${n}/attestation/${i}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
    }), xe(this, "getVerifyUrl", (i) => {
      let n = i || ki;
      return iv.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${ki}`), n = ki), n;
    }), xe(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const i = this.startAbortTimer(D.FIVE_SECONDS), n = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(i), await n.json();
      } catch (i) {
        this.logger.warn(i);
      }
    }), xe(this, "persistPublicKey", async (i) => {
      this.logger.debug("persisting public key to local storage", i), await this.store.setItem(this.storeKey, i), this.publicKey = i;
    }), xe(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), xe(this, "isValidJwtAttestation", async (i) => {
      const n = await this.getPublicKey();
      try {
        if (n) return this.validateAttestation(i, n);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
      const o = await this.fetchAndPersistPublicKey();
      try {
        if (o) return this.validateAttestation(i, o);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
    }), xe(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), xe(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n) => {
        const o = await this.fetchPublicKey();
        o && (await this.persistPublicKey(o), n(o));
      });
      const i = await this.fetchPromise;
      return this.fetchPromise = void 0, i;
    }), xe(this, "validateAttestation", (i, n) => {
      const o = Ly(i, n.publicKey), a = { hasExpired: D.toMiliseconds(o.exp) < Date.now(), payload: o };
      if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a.payload.origin, isScam: a.payload.isScam, isVerified: a.payload.isVerified };
    }), this.logger = rt(s, this.name), this.abortController = new AbortController(), this.isDevEnv = Qa(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return Ct(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), D.toMiliseconds(e));
  }
}
var s1 = Object.defineProperty, r1 = (t, e, s) => e in t ? s1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, eu = (t, e, s) => r1(t, typeof e != "symbol" ? e + "" : e, s);
class i1 extends Zf {
  constructor(e, s) {
    super(e, s), this.projectId = e, this.logger = s, eu(this, "context", nv), eu(this, "registerDeviceToken", async (r) => {
      const { clientId: i, token: n, notificationType: o, enableEncrypted: a = !1 } = r, c = `${ov}/${this.projectId}/clients`;
      await fetch(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: i, type: o, token: n, always_raw: a }) });
    }), this.logger = rt(s, this.context);
  }
}
var n1 = Object.defineProperty, tu = Object.getOwnPropertySymbols, o1 = Object.prototype.hasOwnProperty, a1 = Object.prototype.propertyIsEnumerable, La = (t, e, s) => e in t ? n1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, wi = (t, e) => {
  for (var s in e || (e = {})) o1.call(e, s) && La(t, s, e[s]);
  if (tu) for (var s of tu(e)) a1.call(e, s) && La(t, s, e[s]);
  return t;
}, Me = (t, e, s) => La(t, typeof e != "symbol" ? e + "" : e, s);
class c1 extends Qf {
  constructor(e, s, r = !0) {
    super(e, s, r), this.core = e, this.logger = s, Me(this, "context", cv), Me(this, "storagePrefix", Zt), Me(this, "storageVersion", av), Me(this, "events", /* @__PURE__ */ new Map()), Me(this, "shouldPersist", !1), Me(this, "init", async () => {
      if (!Qa()) try {
        const i = { eventId: Vc(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: pd(this.core.relayer.protocol, this.core.relayer.version, Oa) } } };
        await this.sendEvent([i]);
      } catch (i) {
        this.logger.warn(i);
      }
    }), Me(this, "createEvent", (i) => {
      const { event: n = "ERROR", type: o = "", properties: { topic: a, trace: c } } = i, l = Vc(), u = this.core.projectId || "", d = Date.now(), h = wi({ eventId: l, timestamp: d, props: { event: n, type: o, properties: { topic: a, trace: c } }, bundleId: u, domain: this.getAppDomain() }, this.setMethods(l));
      return this.telemetryEnabled && (this.events.set(l, h), this.shouldPersist = !0), h;
    }), Me(this, "getEvent", (i) => {
      const { eventId: n, topic: o } = i;
      if (n) return this.events.get(n);
      const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
      if (a) return wi(wi({}, a), this.setMethods(a.eventId));
    }), Me(this, "deleteEvent", (i) => {
      const { eventId: n } = i;
      this.events.delete(n), this.shouldPersist = !0;
    }), Me(this, "setEventListeners", () => {
      this.core.heartbeat.on(ei.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((i) => {
          D.fromMiliseconds(Date.now()) - D.fromMiliseconds(i.timestamp) > lv && (this.events.delete(i.eventId), this.shouldPersist = !0);
        });
      });
    }), Me(this, "setMethods", (i) => ({ addTrace: (n) => this.addTrace(i, n), setError: (n) => this.setError(i, n) })), Me(this, "addTrace", (i, n) => {
      const o = this.events.get(i);
      o && (o.props.properties.trace.push(n), this.events.set(i, o), this.shouldPersist = !0);
    }), Me(this, "setError", (i, n) => {
      const o = this.events.get(i);
      o && (o.props.type = n, o.timestamp = Date.now(), this.events.set(i, o), this.shouldPersist = !0);
    }), Me(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
    }), Me(this, "restore", async () => {
      try {
        const i = await this.core.storage.getItem(this.storageKey) || [];
        if (!i.length) return;
        i.forEach((n) => {
          this.events.set(n.eventId, wi(wi({}, n), this.setMethods(n.eventId)));
        });
      } catch (i) {
        this.logger.warn(i);
      }
    }), Me(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const i = [];
      for (const [n, o] of this.events) o.props.type && i.push(o);
      if (i.length !== 0) try {
        if ((await this.sendEvent(i)).ok) for (const n of i) this.events.delete(n.eventId), this.shouldPersist = !0;
      } catch (n) {
        this.logger.warn(n);
      }
    }), Me(this, "sendEvent", async (i) => {
      const n = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${uv}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Oa}${n}`, { method: "POST", body: JSON.stringify(i) });
    }), Me(this, "getAppDomain", () => hd().url), this.logger = rt(s, this.context), this.telemetryEnabled = r, r ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
}
var l1 = Object.defineProperty, su = Object.getOwnPropertySymbols, u1 = Object.prototype.hasOwnProperty, d1 = Object.prototype.propertyIsEnumerable, Ma = (t, e, s) => e in t ? l1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, ru = (t, e) => {
  for (var s in e || (e = {})) u1.call(e, s) && Ma(t, s, e[s]);
  if (su) for (var s of su(e)) d1.call(e, s) && Ma(t, s, e[s]);
  return t;
}, Ae = (t, e, s) => Ma(t, typeof e != "symbol" ? e + "" : e, s);
let h1 = class hh extends Ff {
  constructor(e) {
    var s;
    super(e), Ae(this, "protocol", Xd), Ae(this, "version", Zd), Ae(this, "name", Pa), Ae(this, "relayUrl"), Ae(this, "projectId"), Ae(this, "customStoragePrefix"), Ae(this, "events", new nr.EventEmitter()), Ae(this, "logger"), Ae(this, "heartbeat"), Ae(this, "relayer"), Ae(this, "crypto"), Ae(this, "storage"), Ae(this, "history"), Ae(this, "expirer"), Ae(this, "pairing"), Ae(this, "verify"), Ae(this, "echoClient"), Ae(this, "linkModeSupportedApps"), Ae(this, "eventClient"), Ae(this, "initialized", !1), Ae(this, "logChunkController"), Ae(this, "on", (a, c) => this.events.on(a, c)), Ae(this, "once", (a, c) => this.events.once(a, c)), Ae(this, "off", (a, c) => this.events.off(a, c)), Ae(this, "removeListener", (a, c) => this.events.removeListener(a, c)), Ae(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: l }) => {
      if (!a || !c) return;
      const u = { topic: a, message: c, publishedAt: Date.now(), transportType: Ne.link_mode };
      this.relayer.onLinkMessageEvent(u, { sessionExists: l });
    });
    const r = this.getGlobalCore(e == null ? void 0 : e.customStoragePrefix);
    if (r) try {
      return this.customStoragePrefix = r.customStoragePrefix, this.logger = r.logger, this.heartbeat = r.heartbeat, this.crypto = r.crypto, this.history = r.history, this.expirer = r.expirer, this.storage = r.storage, this.relayer = r.relayer, this.pairing = r.pairing, this.verify = r.verify, this.echoClient = r.echoClient, this.linkModeSupportedApps = r.linkModeSupportedApps, this.eventClient = r.eventClient, this.initialized = r.initialized, this.logChunkController = r.logChunkController, r;
    } catch (a) {
      console.warn("Failed to copy global core", a);
    }
    this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || eh, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const i = fn({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : kb.logger, name: Pa }), { logger: n, chunkLoggerController: o } = Mu({ opts: i, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = o, (s = this.logChunkController) != null && s.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a, c;
      (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = rt(n, this.name), this.heartbeat = new Gh(), this.crypto = new B0(this, this.logger, e == null ? void 0 : e.keychain), this.history = new JE(this, this.logger), this.expirer = new ZE(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Lf(ru(ru({}, $b), e == null ? void 0 : e.storageOptions)), this.relayer = new hE({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new KE(this, this.logger), this.verify = new t1(this, this.logger, this.storage), this.echoClient = new i1(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new c1(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e) {
    const s = new hh(e);
    await s.initialize();
    const r = await s.crypto.getClientId();
    return await s.storage.setItem(Kb, r), s;
  }
  get context() {
    return Ct(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(Dl, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Dl) || [], this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
  getGlobalCore(e = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const s = `_walletConnectCore_${e}`, r = `${s}_count`;
      return globalThis[r] = (globalThis[r] || 0) + 1, globalThis[r] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[r]} times.`), globalThis[s];
    } catch (s) {
      console.warn("Failed to get global WalletConnect core", s);
      return;
    }
  }
  setGlobalCore(e) {
    var s;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const r = `_walletConnectCore_${((s = e.opts) == null ? void 0 : s.customStoragePrefix) || ""}`;
      globalThis[r] = e;
    } catch (r) {
      console.warn("Failed to set global WalletConnect core", r);
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
const p1 = h1, ph = "wc", fh = 2, gh = "client", ac = `${ph}@${fh}:${gh}:`, Yo = { name: gh, logger: "error" }, iu = "WALLETCONNECT_DEEPLINK_CHOICE", f1 = "proposal", nu = "Proposal expired", g1 = "session", mr = D.SEVEN_DAYS, m1 = "engine", Be = { wc_sessionPropose: { req: { ttl: D.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1101 }, reject: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1120 }, autoReject: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1121 } }, wc_sessionSettle: { req: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: D.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: D.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: D.ONE_DAY, prompt: !1, tag: 1114 }, res: { ttl: D.ONE_DAY, prompt: !1, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: D.ONE_HOUR, prompt: !0, tag: 1116 }, res: { ttl: D.ONE_HOUR, prompt: !1, tag: 1117 }, reject: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1118 }, autoReject: { ttl: D.FIVE_MINUTES, prompt: !1, tag: 1119 } } }, Xo = { min: D.FIVE_MINUTES, max: D.SEVEN_DAYS }, Ht = { idle: "IDLE", active: "ACTIVE" }, ou = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" } }, w1 = "request", y1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], b1 = "wc", v1 = "auth", E1 = "authKeys", C1 = "pairingTopics", I1 = "requests", Io = `${b1}@${1.5}:${v1}:`, Xn = `${Io}:PUB_KEY`;
var A1 = Object.defineProperty, N1 = Object.defineProperties, _1 = Object.getOwnPropertyDescriptors, au = Object.getOwnPropertySymbols, S1 = Object.prototype.hasOwnProperty, P1 = Object.prototype.propertyIsEnumerable, Ba = (t, e, s) => e in t ? A1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, ve = (t, e) => {
  for (var s in e || (e = {})) S1.call(e, s) && Ba(t, s, e[s]);
  if (au) for (var s of au(e)) P1.call(e, s) && Ba(t, s, e[s]);
  return t;
}, tt = (t, e) => N1(t, _1(e)), P = (t, e, s) => Ba(t, typeof e != "symbol" ? e + "" : e, s);
class O1 extends rg {
  constructor(e) {
    super(e), P(this, "name", m1), P(this, "events", new Ja()), P(this, "initialized", !1), P(this, "requestQueue", { state: Ht.idle, queue: [] }), P(this, "sessionRequestQueue", { state: Ht.idle, queue: [] }), P(this, "requestQueueDelay", D.ONE_SECOND), P(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), P(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), P(this, "recentlyDeletedLimit", 200), P(this, "relayMessageCache", []), P(this, "pendingSessions", /* @__PURE__ */ new Map()), P(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(Be) }), this.initialized = !0, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, D.toMiliseconds(this.requestQueueDelay)));
    }), P(this, "connect", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const r = tt(ve({}, s), { requiredNamespaces: s.requiredNamespaces || {}, optionalNamespaces: s.optionalNamespaces || {} });
      await this.isValidConnect(r), r.optionalNamespaces = Qy(r.requiredNamespaces, r.optionalNamespaces), r.requiredNamespaces = {};
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: a, scopedProperties: c, relays: l } = r;
      let u = i, d, h = !1;
      try {
        if (u) {
          const A = this.client.core.pairing.pairings.get(u);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), h = A.active;
        }
      } catch (A) {
        throw this.client.logger.error(`connect() -> pairing.get(${u}) failed`), A;
      }
      if (!u || !h) {
        const { topic: A, uri: N } = await this.client.core.pairing.create();
        u = A, d = N;
      }
      if (!u) {
        const { message: A } = U("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
        throw new Error(A);
      }
      const p = await this.client.core.crypto.generateKeyPair(), g = Be.wc_sessionPropose.req.ttl || D.FIVE_MINUTES, f = De(g), w = tt(ve(ve({ requiredNamespaces: n, optionalNamespaces: o, relays: l ?? [{ protocol: Qd }], proposer: { publicKey: p, metadata: this.client.metadata }, expiryTimestamp: f, pairingTopic: u }, a && { sessionProperties: a }), c && { scopedProperties: c }), { id: hs() }), y = pe("session_connect", w.id), { reject: b, resolve: v, done: C } = Bs(g, nu), S = ({ id: A }) => {
        A === w.id && (this.client.events.off("proposal_expire", S), this.pendingSessions.delete(w.id), this.events.emit(y, { error: { message: nu, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", S), this.events.once(y, ({ error: A, session: N }) => {
        this.client.events.off("proposal_expire", S), A ? b(A) : N && v(N);
      }), await this.sendRequest({ topic: u, method: "wc_sessionPropose", params: w, throwOnFailedPublish: !0, clientRpcId: w.id }), await this.setProposal(w.id, w), { uri: d, approval: C };
    }), P(this, "pair", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(s);
      } catch (r) {
        throw this.client.logger.error("pair() failed"), r;
      }
    }), P(this, "approve", async (s) => {
      var r, i, n;
      const o = this.client.core.eventClient.createEvent({ properties: { topic: (r = s == null ? void 0 : s.id) == null ? void 0 : r.toString(), trace: [Ut.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (E) {
        throw o.setError(Us.no_internet_connection), E;
      }
      try {
        await this.isValidProposalId(s == null ? void 0 : s.id);
      } catch (E) {
        throw this.client.logger.error(`approve() -> proposal.get(${s == null ? void 0 : s.id}) failed`), o.setError(Us.proposal_not_found), E;
      }
      try {
        await this.isValidApprove(s);
      } catch (E) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), o.setError(Us.session_approve_namespace_validation_failure), E;
      }
      const { id: a, relayProtocol: c, namespaces: l, sessionProperties: u, scopedProperties: d, sessionConfig: h } = s, p = this.client.proposal.get(a);
      this.client.core.eventClient.deleteEvent({ eventId: o.eventId });
      const { pairingTopic: g, proposer: f, requiredNamespaces: w, optionalNamespaces: y } = p;
      let b = (i = this.client.core.eventClient) == null ? void 0 : i.getEvent({ topic: g });
      b || (b = (n = this.client.core.eventClient) == null ? void 0 : n.createEvent({ type: Ut.session_approve_started, properties: { topic: g, trace: [Ut.session_approve_started, Ut.session_namespaces_validation_success] } }));
      const v = await this.client.core.crypto.generateKeyPair(), C = f.publicKey, S = await this.client.core.crypto.generateSharedKey(v, C), A = ve(ve(ve({ relay: { protocol: c ?? "irn" }, namespaces: l, controller: { publicKey: v, metadata: this.client.metadata }, expiry: De(mr) }, u && { sessionProperties: u }), d && { scopedProperties: d }), h && { sessionConfig: h }), N = Ne.relay;
      b.addTrace(Ut.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(S, { transportType: N });
      } catch (E) {
        throw b.setError(Us.subscribe_session_topic_failure), E;
      }
      b.addTrace(Ut.subscribe_session_topic_success);
      const R = tt(ve({}, A), { topic: S, requiredNamespaces: w, optionalNamespaces: y, pairingTopic: g, acknowledged: !1, self: A.controller, peer: { publicKey: f.publicKey, metadata: f.metadata }, controller: v, transportType: Ne.relay });
      await this.client.session.set(S, R), b.addTrace(Ut.store_session);
      try {
        b.addTrace(Ut.publishing_session_settle), await this.sendRequest({ topic: S, method: "wc_sessionSettle", params: A, throwOnFailedPublish: !0 }).catch((E) => {
          throw b == null || b.setError(Us.session_settle_publish_failure), E;
        }), b.addTrace(Ut.session_settle_publish_success), b.addTrace(Ut.publishing_session_approve), await this.sendResult({ id: a, topic: g, result: { relay: { protocol: c ?? "irn" }, responderPublicKey: v }, throwOnFailedPublish: !0 }).catch((E) => {
          throw b == null || b.setError(Us.session_approve_publish_failure), E;
        }), b.addTrace(Ut.session_approve_publish_success);
      } catch (E) {
        throw this.client.logger.error(E), this.client.session.delete(S, we("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(S), E;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: b.eventId }), await this.client.core.pairing.updateMetadata({ topic: g, metadata: f.metadata }), await this.client.proposal.delete(a, we("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: g }), await this.setExpiry(S, De(mr)), { topic: S, acknowledged: () => Promise.resolve(this.client.session.get(S)) };
    }), P(this, "reject", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(s);
      } catch (o) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), o;
      }
      const { id: r, reason: i } = s;
      let n;
      try {
        n = this.client.proposal.get(r).pairingTopic;
      } catch (o) {
        throw this.client.logger.error(`reject() -> proposal.get(${r}) failed`), o;
      }
      n && (await this.sendError({ id: r, topic: n, error: i, rpcOpts: Be.wc_sessionPropose.reject }), await this.client.proposal.delete(r, we("USER_DISCONNECTED")));
    }), P(this, "update", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(s);
      } catch (d) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), d;
      }
      const { topic: r, namespaces: i } = s, { done: n, resolve: o, reject: a } = Bs(), c = hs(), l = kr().toString(), u = this.client.session.get(r).namespaces;
      return this.events.once(pe("session_update", c), ({ error: d }) => {
        d ? a(d) : o();
      }), await this.client.session.update(r, { namespaces: i }), await this.sendRequest({ topic: r, method: "wc_sessionUpdate", params: { namespaces: i }, throwOnFailedPublish: !0, clientRpcId: c, relayRpcId: l }).catch((d) => {
        this.client.logger.error(d), this.client.session.update(r, { namespaces: u }), a(d);
      }), { acknowledged: n };
    }), P(this, "extend", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(s);
      } catch (c) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), c;
      }
      const { topic: r } = s, i = hs(), { done: n, resolve: o, reject: a } = Bs();
      return this.events.once(pe("session_extend", i), ({ error: c }) => {
        c ? a(c) : o();
      }), await this.setExpiry(r, De(mr)), this.sendRequest({ topic: r, method: "wc_sessionExtend", params: {}, clientRpcId: i, throwOnFailedPublish: !0 }).catch((c) => {
        a(c);
      }), { acknowledged: n };
    }), P(this, "request", async (s) => {
      this.isInitialized();
      try {
        await this.isValidRequest(s);
      } catch (y) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), y;
      }
      const { chainId: r, request: i, topic: n, expiry: o = Be.wc_sessionRequest.req.ttl } = s, a = this.client.session.get(n);
      (a == null ? void 0 : a.transportType) === Ne.relay && await this.confirmOnlineStateOrThrow();
      const c = hs(), l = kr().toString(), { done: u, resolve: d, reject: h } = Bs(o, "Request expired. Please try again.");
      this.events.once(pe("session_request", c), ({ error: y, result: b }) => {
        y ? h(y) : d(b);
      });
      const p = "wc_sessionRequest", g = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
      if (g) return await this.sendRequest({ clientRpcId: c, relayRpcId: l, topic: n, method: p, params: { request: tt(ve({}, i), { expiryTimestamp: De(o) }), chainId: r }, expiry: o, throwOnFailedPublish: !0, appLink: g }).catch((y) => h(y)), this.client.events.emit("session_request_sent", { topic: n, request: i, chainId: r, id: c }), await u();
      const f = { request: tt(ve({}, i), { expiryTimestamp: De(o) }), chainId: r }, w = this.shouldSetTVF(p, f);
      return await Promise.all([new Promise(async (y) => {
        await this.sendRequest(ve({ clientRpcId: c, relayRpcId: l, topic: n, method: p, params: f, expiry: o, throwOnFailedPublish: !0 }, w && { tvf: this.getTVFParams(c, f) })).catch((b) => h(b)), this.client.events.emit("session_request_sent", { topic: n, request: i, chainId: r, id: c }), y();
      }), new Promise(async (y) => {
        var b;
        if (!((b = a.sessionConfig) != null && b.disableDeepLink)) {
          const v = await hm(this.client.core.storage, iu);
          await lm({ id: c, topic: n, wcDeepLink: v });
        }
        y();
      }), u()]).then((y) => y[2]);
    }), P(this, "respond", async (s) => {
      this.isInitialized(), await this.isValidRespond(s);
      const { topic: r, response: i } = s, { id: n } = i, o = this.client.session.get(r);
      o.transportType === Ne.relay && await this.confirmOnlineStateOrThrow();
      const a = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
      os(i) ? await this.sendResult({ id: n, topic: r, result: i.result, throwOnFailedPublish: !0, appLink: a }) : Vt(i) && await this.sendError({ id: n, topic: r, error: i.error, appLink: a }), this.cleanupAfterResponse(s);
    }), P(this, "ping", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(s);
      } catch (i) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), i;
      }
      const { topic: r } = s;
      if (this.client.session.keys.includes(r)) {
        const i = hs(), n = kr().toString(), { done: o, resolve: a, reject: c } = Bs();
        this.events.once(pe("session_ping", i), ({ error: l }) => {
          l ? c(l) : a();
        }), await Promise.all([this.sendRequest({ topic: r, method: "wc_sessionPing", params: {}, throwOnFailedPublish: !0, clientRpcId: i, relayRpcId: n }), o()]);
      } else this.client.core.pairing.pairings.keys.includes(r) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: r }));
    }), P(this, "emit", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(s);
      const { topic: r, event: i, chainId: n } = s, o = kr().toString(), a = hs();
      await this.sendRequest({ topic: r, method: "wc_sessionEvent", params: { event: i, chainId: n }, throwOnFailedPublish: !0, relayRpcId: o, clientRpcId: a });
    }), P(this, "disconnect", async (s) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(s);
      const { topic: r } = s;
      if (this.client.session.keys.includes(r)) await this.sendRequest({ topic: r, method: "wc_sessionDelete", params: we("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: r, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(r)) await this.client.core.pairing.disconnect({ topic: r });
      else {
        const { message: i } = U("MISMATCHED_TOPIC", `Session or pairing topic not found: ${r}`);
        throw new Error(i);
      }
    }), P(this, "find", (s) => (this.isInitialized(), this.client.session.getAll().filter((r) => sb(r, s)))), P(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), P(this, "authenticate", async (s, r) => {
      var i;
      this.isInitialized(), this.isValidAuthenticate(s);
      const n = r && this.client.core.linkModeSupportedApps.includes(r) && ((i = this.client.metadata.redirect) == null ? void 0 : i.linkMode), o = n ? Ne.link_mode : Ne.relay;
      o === Ne.relay && await this.confirmOnlineStateOrThrow();
      const { chains: a, statement: c = "", uri: l, domain: u, nonce: d, type: h, exp: p, nbf: g, methods: f = [], expiry: w } = s, y = [...s.resources || []], { topic: b, uri: v } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: o });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: b, uri: v } });
      const C = await this.client.core.crypto.generateKeyPair(), S = Jn(C);
      if (await Promise.all([this.client.auth.authKeys.set(Xn, { responseTopic: S, publicKey: C }), this.client.auth.pairingTopics.set(S, { topic: S, pairingTopic: b })]), await this.client.core.relayer.subscribe(S, { transportType: o }), this.client.logger.info(`sending request to new pairing topic: ${b}`), f.length > 0) {
        const { namespace: k } = Dr(a[0]);
        let G = iw(k, "request", f);
        Gn(y) && (G = ow(G, y.pop())), y.push(G);
      }
      const A = w && w > Be.wc_sessionAuthenticate.req.ttl ? w : Be.wc_sessionAuthenticate.req.ttl, N = { authPayload: { type: h ?? "caip122", chains: a, statement: c, aud: l, domain: u, version: "1", nonce: d, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: p, nbf: g, resources: y }, requester: { publicKey: C, metadata: this.client.metadata }, expiryTimestamp: De(A) }, R = { eip155: { chains: a, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...f])], events: ["chainChanged", "accountsChanged"] } }, E = { requiredNamespaces: {}, optionalNamespaces: R, relays: [{ protocol: "irn" }], pairingTopic: b, proposer: { publicKey: C, metadata: this.client.metadata }, expiryTimestamp: De(Be.wc_sessionPropose.req.ttl), id: hs() }, { done: $, resolve: I, reject: L } = Bs(A, "Request expired"), H = hs(), _ = pe("session_connect", E.id), x = pe("session_request", H), O = async ({ error: k, session: G }) => {
        this.events.off(x, B), k ? L(k) : G && I({ session: G });
      }, B = async (k) => {
        var G, Q, se;
        if (await this.deletePendingAuthRequest(H, { message: "fulfilled", code: 0 }), k.error) {
          const Re = we("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return k.error.code === Re.code ? void 0 : (this.events.off(_, O), L(k.error.message));
        }
        await this.deleteProposal(E.id), this.events.off(_, O);
        const { cacaos: Ce, responder: he } = k.result, Te = [], Le = [];
        for (const Re of Ce) {
          await tl({ cacao: Re, projectId: this.client.core.projectId }) || (this.client.logger.error(Re, "Signature verification failed"), L(we("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: $s } = Re, Qt = Gn($s.resources), qt = [ya($s.iss)], es = oo($s.iss);
          if (Qt) {
            const ts = sl(Qt), _n = rl(Qt);
            Te.push(...ts), qt.push(..._n);
          }
          for (const ts of qt) Le.push(`${ts}:${es}`);
        }
        const Xe = await this.client.core.crypto.generateSharedKey(C, he.publicKey);
        let $e;
        Te.length > 0 && ($e = { topic: Xe, acknowledged: !0, self: { publicKey: C, metadata: this.client.metadata }, peer: he, controller: he.publicKey, expiry: De(mr), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: b, namespaces: Pl([...new Set(Te)], [...new Set(Le)]), transportType: o }, await this.client.core.relayer.subscribe(Xe, { transportType: o }), await this.client.session.set(Xe, $e), b && await this.client.core.pairing.updateMetadata({ topic: b, metadata: he.metadata }), $e = this.client.session.get(Xe)), (G = this.client.metadata.redirect) != null && G.linkMode && (Q = he.metadata.redirect) != null && Q.linkMode && (se = he.metadata.redirect) != null && se.universal && r && (this.client.core.addLinkModeSupportedApp(he.metadata.redirect.universal), this.client.session.update(Xe, { transportType: Ne.link_mode })), I({ auths: Ce, session: $e });
      };
      this.events.once(_, O), this.events.once(x, B);
      let j;
      try {
        if (n) {
          const k = zs("wc_sessionAuthenticate", N, H);
          this.client.core.history.set(b, k);
          const G = await this.client.core.crypto.encode("", k, { type: Cn, encoding: Es });
          j = Mn(r, b, G);
        } else await Promise.all([this.sendRequest({ topic: b, method: "wc_sessionAuthenticate", params: N, expiry: s.expiry, throwOnFailedPublish: !0, clientRpcId: H }), this.sendRequest({ topic: b, method: "wc_sessionPropose", params: E, expiry: Be.wc_sessionPropose.req.ttl, throwOnFailedPublish: !0, clientRpcId: E.id })]);
      } catch (k) {
        throw this.events.off(_, O), this.events.off(x, B), k;
      }
      return await this.setProposal(E.id, E), await this.setAuthRequest(H, { request: tt(ve({}, N), { verifyContext: {} }), pairingTopic: b, transportType: o }), { uri: j ?? v, response: $ };
    }), P(this, "approveSessionAuthenticate", async (s) => {
      const { id: r, auths: i } = s, n = this.client.core.eventClient.createEvent({ properties: { topic: r.toString(), trace: [Ds.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (w) {
        throw n.setError(gi.no_internet_connection), w;
      }
      const o = this.getPendingAuthRequest(r);
      if (!o) throw n.setError(gi.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${r}`);
      const a = o.transportType || Ne.relay;
      a === Ne.relay && await this.confirmOnlineStateOrThrow();
      const c = o.requester.publicKey, l = await this.client.core.crypto.generateKeyPair(), u = Jn(c), d = { type: ds, receiverPublicKey: c, senderPublicKey: l }, h = [], p = [];
      for (const w of i) {
        if (!await tl({ cacao: w, projectId: this.client.core.projectId })) {
          n.setError(gi.invalid_cacao);
          const S = we("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: r, topic: u, error: S, encodeOpts: d }), new Error(S.message);
        }
        n.addTrace(Ds.cacaos_verified);
        const { p: y } = w, b = Gn(y.resources), v = [ya(y.iss)], C = oo(y.iss);
        if (b) {
          const S = sl(b), A = rl(b);
          h.push(...S), v.push(...A);
        }
        for (const S of v) p.push(`${S}:${C}`);
      }
      const g = await this.client.core.crypto.generateSharedKey(l, c);
      n.addTrace(Ds.create_authenticated_session_topic);
      let f;
      if ((h == null ? void 0 : h.length) > 0) {
        f = { topic: g, acknowledged: !0, self: { publicKey: l, metadata: this.client.metadata }, peer: { publicKey: c, metadata: o.requester.metadata }, controller: c, expiry: De(mr), authentication: i, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: o.pairingTopic, namespaces: Pl([...new Set(h)], [...new Set(p)]), transportType: a }, n.addTrace(Ds.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(g, { transportType: a });
        } catch (w) {
          throw n.setError(gi.subscribe_authenticated_session_topic_failure), w;
        }
        n.addTrace(Ds.subscribe_authenticated_session_topic_success), await this.client.session.set(g, f), n.addTrace(Ds.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: o.pairingTopic, metadata: o.requester.metadata });
      }
      n.addTrace(Ds.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: u, id: r, result: { cacaos: i, responder: { publicKey: l, metadata: this.client.metadata } }, encodeOpts: d, throwOnFailedPublish: !0, appLink: this.getAppLinkIfEnabled(o.requester.metadata, a) });
      } catch (w) {
        throw n.setError(gi.authenticated_session_approve_publish_failure), w;
      }
      return await this.client.auth.requests.delete(r, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: o.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: n.eventId }), { session: f };
    }), P(this, "rejectSessionAuthenticate", async (s) => {
      this.isInitialized();
      const { id: r, reason: i } = s, n = this.getPendingAuthRequest(r);
      if (!n) throw new Error(`Could not find pending auth request with id ${r}`);
      n.transportType === Ne.relay && await this.confirmOnlineStateOrThrow();
      const o = n.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = Jn(o), l = { type: ds, receiverPublicKey: o, senderPublicKey: a };
      await this.sendError({ id: r, topic: c, error: i, encodeOpts: l, rpcOpts: Be.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(n.requester.metadata, n.transportType) }), await this.client.auth.requests.delete(r, { message: "rejected", code: 0 }), await this.client.proposal.delete(r, we("USER_DISCONNECTED"));
    }), P(this, "formatAuthMessage", (s) => {
      this.isInitialized();
      const { request: r, iss: i } = s;
      return Ad(r, i);
    }), P(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const s = this.relayMessageCache.shift();
          s && await this.onRelayMessage(s);
        } catch (s) {
          this.client.logger.error(s);
        }
      }, 50);
    }), P(this, "cleanupDuplicatePairings", async (s) => {
      if (s.pairingTopic) try {
        const r = this.client.core.pairing.pairings.get(s.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((n) => {
          var o, a;
          return ((o = n.peerMetadata) == null ? void 0 : o.url) && ((a = n.peerMetadata) == null ? void 0 : a.url) === s.peer.metadata.url && n.topic && n.topic !== r.topic;
        });
        if (i.length === 0) return;
        this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (r) {
        this.client.logger.error(r);
      }
    }), P(this, "deleteSession", async (s) => {
      var r;
      const { topic: i, expirerHasDeleted: n = !1, emitEvent: o = !0, id: a = 0 } = s, { self: c } = this.client.session.get(i);
      await this.client.core.relayer.unsubscribe(i), await this.client.session.delete(i, we("USER_DISCONNECTED")), this.addToRecentlyDeleted(i, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(i) && await this.client.core.crypto.deleteSymKey(i), n || this.client.core.expirer.del(i), this.client.core.storage.removeItem(iu).catch((l) => this.client.logger.warn(l)), this.getPendingSessionRequests().forEach((l) => {
        l.topic === i && this.deletePendingSessionRequest(l.id, we("USER_DISCONNECTED"));
      }), i === ((r = this.sessionRequestQueue.queue[0]) == null ? void 0 : r.topic) && (this.sessionRequestQueue.state = Ht.idle), o && this.client.events.emit("session_delete", { id: a, topic: i });
    }), P(this, "deleteProposal", async (s, r) => {
      if (r) try {
        const i = this.client.proposal.get(s), n = this.client.core.eventClient.getEvent({ topic: i.pairingTopic });
        n == null || n.setError(Us.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(s, we("USER_DISCONNECTED")), r ? Promise.resolve() : this.client.core.expirer.del(s)]), this.addToRecentlyDeleted(s, "proposal");
    }), P(this, "deletePendingSessionRequest", async (s, r, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(s, r), i ? Promise.resolve() : this.client.core.expirer.del(s)]), this.addToRecentlyDeleted(s, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((n) => n.id !== s), i && (this.sessionRequestQueue.state = Ht.idle, this.client.events.emit("session_request_expire", { id: s }));
    }), P(this, "deletePendingAuthRequest", async (s, r, i = !1) => {
      await Promise.all([this.client.auth.requests.delete(s, r), i ? Promise.resolve() : this.client.core.expirer.del(s)]);
    }), P(this, "setExpiry", async (s, r) => {
      this.client.session.keys.includes(s) && (this.client.core.expirer.set(s, r), await this.client.session.update(s, { expiry: r }));
    }), P(this, "setProposal", async (s, r) => {
      this.client.core.expirer.set(s, De(Be.wc_sessionPropose.req.ttl)), await this.client.proposal.set(s, r);
    }), P(this, "setAuthRequest", async (s, r) => {
      const { request: i, pairingTopic: n, transportType: o = Ne.relay } = r;
      this.client.core.expirer.set(s, i.expiryTimestamp), await this.client.auth.requests.set(s, { authPayload: i.authPayload, requester: i.requester, expiryTimestamp: i.expiryTimestamp, id: s, pairingTopic: n, verifyContext: i.verifyContext, transportType: o });
    }), P(this, "setPendingSessionRequest", async (s) => {
      const { id: r, topic: i, params: n, verifyContext: o } = s, a = n.request.expiryTimestamp || De(Be.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(r, a), await this.client.pendingRequest.set(r, { id: r, topic: i, params: n, verifyContext: o });
    }), P(this, "sendRequest", async (s) => {
      const { topic: r, method: i, params: n, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l, appLink: u, tvf: d } = s, h = zs(i, n, c);
      let p;
      const g = !!u;
      try {
        const y = g ? Es : Ft;
        p = await this.client.core.crypto.encode(r, h, { encoding: y });
      } catch (y) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${r} failed`), y;
      }
      let f;
      if (y1.includes(i)) {
        const y = Jt(JSON.stringify(h)), b = Jt(p);
        f = await this.client.core.verify.register({ id: b, decryptedId: y });
      }
      const w = Be[i].req;
      if (w.attestation = f, o && (w.ttl = o), a && (w.id = a), this.client.core.history.set(r, h), g) {
        const y = Mn(u, r, p);
        await global.Linking.openURL(y, this.client.name);
      } else {
        const y = Be[i].req;
        o && (y.ttl = o), a && (y.id = a), y.tvf = tt(ve({}, d), { correlationId: h.id }), l ? (y.internal = tt(ve({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(r, p, y)) : this.client.core.relayer.publish(r, p, y).catch((b) => this.client.logger.error(b));
      }
      return h.id;
    }), P(this, "sendResult", async (s) => {
      const { id: r, topic: i, result: n, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = s, l = po(r, n);
      let u;
      const d = c && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const g = d ? Es : Ft;
        u = await this.client.core.crypto.encode(i, l, tt(ve({}, a || {}), { encoding: g }));
      } catch (g) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${i} failed`), g;
      }
      let h, p;
      try {
        h = await this.client.core.history.get(i, r);
        const g = h.request;
        try {
          this.shouldSetTVF(g.method, g.params) && (p = this.getTVFParams(r, g.params, n));
        } catch (f) {
          this.client.logger.warn("sendResult() -> getTVFParams() failed", f);
        }
      } catch (g) {
        throw this.client.logger.error(`sendResult() -> history.get(${i}, ${r}) failed`), g;
      }
      if (d) {
        const g = Mn(c, i, u);
        await global.Linking.openURL(g, this.client.name);
      } else {
        const g = h.request.method, f = Be[g].res;
        f.tvf = tt(ve({}, p), { correlationId: r }), o ? (f.internal = tt(ve({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, u, f)) : this.client.core.relayer.publish(i, u, f).catch((w) => this.client.logger.error(w));
      }
      await this.client.core.history.resolve(l);
    }), P(this, "sendError", async (s) => {
      const { id: r, topic: i, error: n, encodeOpts: o, rpcOpts: a, appLink: c } = s, l = Bu(r, n);
      let u;
      const d = c && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const p = d ? Es : Ft;
        u = await this.client.core.crypto.encode(i, l, tt(ve({}, o || {}), { encoding: p }));
      } catch (p) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${i} failed`), p;
      }
      let h;
      try {
        h = await this.client.core.history.get(i, r);
      } catch (p) {
        throw this.client.logger.error(`sendError() -> history.get(${i}, ${r}) failed`), p;
      }
      if (d) {
        const p = Mn(c, i, u);
        await global.Linking.openURL(p, this.client.name);
      } else {
        const p = h.request.method, g = a || Be[p].res;
        this.client.core.relayer.publish(i, u, g);
      }
      await this.client.core.history.resolve(l);
    }), P(this, "cleanup", async () => {
      const s = [], r = [];
      this.client.session.getAll().forEach((i) => {
        let n = !1;
        vs(i.expiry) && (n = !0), this.client.core.crypto.keychain.has(i.topic) || (n = !0), n && s.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        vs(i.expiryTimestamp) && r.push(i.id);
      }), await Promise.all([...s.map((i) => this.deleteSession({ topic: i })), ...r.map((i) => this.deleteProposal(i))]);
    }), P(this, "onProviderMessageEvent", async (s) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(s) : await this.onRelayMessage(s);
    }), P(this, "onRelayEventRequest", async (s) => {
      this.requestQueue.queue.push(s), await this.processRequestsQueue();
    }), P(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === Ht.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Ht.active;
        const s = this.requestQueue.queue.shift();
        if (s) try {
          await this.processRequest(s);
        } catch (r) {
          this.client.logger.warn(r);
        }
      }
      this.requestQueue.state = Ht.idle;
    }), P(this, "processRequest", async (s) => {
      const { topic: r, payload: i, attestation: n, transportType: o, encryptedId: a } = s, c = i.method;
      if (!this.shouldIgnorePairingRequest({ topic: r, requestMethod: c })) switch (c) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: r, payload: i, attestation: n, encryptedId: a });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(r, i);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(r, i);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(r, i);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(r, i);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(r, i);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: r, payload: i, attestation: n, encryptedId: a, transportType: o });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(r, i);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: r, payload: i, attestation: n, encryptedId: a, transportType: o });
        default:
          return this.client.logger.info(`Unsupported request method ${c}`);
      }
    }), P(this, "onRelayEventResponse", async (s) => {
      const { topic: r, payload: i, transportType: n } = s, o = (await this.client.core.history.get(r, i.id)).request.method;
      switch (o) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(r, i, n);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(r, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(r, i);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(r, i);
        case "wc_sessionPing":
          return this.onSessionPingResponse(r, i);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(r, i);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(r, i);
        default:
          return this.client.logger.info(`Unsupported response method ${o}`);
      }
    }), P(this, "onRelayEventUnknownPayload", (s) => {
      const { topic: r } = s, { message: i } = U("MISSING_OR_INVALID", `Decoded payload on topic ${r} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }), P(this, "shouldIgnorePairingRequest", (s) => {
      const { topic: r, requestMethod: i } = s, n = this.expectedPairingMethodMap.get(r);
      return !n || n.includes(i) ? !1 : !!(n.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), P(this, "onSessionProposeRequest", async (s) => {
      const { topic: r, payload: i, attestation: n, encryptedId: o } = s, { params: a, id: c } = i;
      try {
        const l = this.client.core.eventClient.getEvent({ topic: r });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l == null || l.setError(as.proposal_listener_not_found)), this.isValidConnect(ve({}, i.params));
        const u = a.expiryTimestamp || De(Be.wc_sessionPropose.req.ttl), d = ve({ id: c, pairingTopic: r, expiryTimestamp: u }, a);
        await this.setProposal(c, d);
        const h = await this.getVerifyContext({ attestationId: n, hash: Jt(JSON.stringify(i)), encryptedId: o, metadata: d.proposer.metadata });
        l == null || l.addTrace(Kt.emit_session_proposal), this.client.events.emit("session_proposal", { id: c, params: d, verifyContext: h });
      } catch (l) {
        await this.sendError({ id: c, topic: r, error: l, rpcOpts: Be.wc_sessionPropose.autoReject }), this.client.logger.error(l);
      }
    }), P(this, "onSessionProposeResponse", async (s, r, i) => {
      const { id: n } = r;
      if (os(r)) {
        const { result: o } = r;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: o });
        const a = this.client.proposal.get(n);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const c = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const l = o.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const u = await this.client.core.crypto.generateSharedKey(c, l);
        this.pendingSessions.set(n, { sessionTopic: u, pairingTopic: s, proposalId: n, publicKey: c });
        const d = await this.client.core.relayer.subscribe(u, { transportType: i });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d }), await this.client.core.pairing.activate({ topic: s });
      } else if (Vt(r)) {
        await this.client.proposal.delete(n, we("USER_DISCONNECTED"));
        const o = pe("session_connect", n);
        if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
        this.events.emit(o, { error: r.error });
      }
    }), P(this, "onSessionSettleRequest", async (s, r) => {
      const { id: i, params: n } = r;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: u, scopedProperties: d, sessionConfig: h } = r.params, p = [...this.pendingSessions.values()].find((w) => w.sessionTopic === s);
        if (!p) return this.client.logger.error(`Pending session not found for topic ${s}`);
        const g = this.client.proposal.get(p.proposalId), f = tt(ve(ve(ve({ topic: s, relay: o, expiry: c, namespaces: l, acknowledged: !0, pairingTopic: p.pairingTopic, requiredNamespaces: g.requiredNamespaces, optionalNamespaces: g.optionalNamespaces, controller: a.publicKey, self: { publicKey: p.publicKey, metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, u && { sessionProperties: u }), d && { scopedProperties: d }), h && { sessionConfig: h }), { transportType: Ne.relay });
        await this.client.session.set(f.topic, f), await this.setExpiry(f.topic, f.expiry), await this.client.core.pairing.updateMetadata({ topic: p.pairingTopic, metadata: f.peer.metadata }), this.client.events.emit("session_connect", { session: f }), this.events.emit(pe("session_connect", p.proposalId), { session: f }), this.pendingSessions.delete(p.proposalId), this.deleteProposal(p.proposalId, !1), this.cleanupDuplicatePairings(f), await this.sendResult({ id: r.id, topic: s, result: !0, throwOnFailedPublish: !0 });
      } catch (o) {
        await this.sendError({ id: i, topic: s, error: o }), this.client.logger.error(o);
      }
    }), P(this, "onSessionSettleResponse", async (s, r) => {
      const { id: i } = r;
      os(r) ? (await this.client.session.update(s, { acknowledged: !0 }), this.events.emit(pe("session_approve", i), {})) : Vt(r) && (await this.client.session.delete(s, we("USER_DISCONNECTED")), this.events.emit(pe("session_approve", i), { error: r.error }));
    }), P(this, "onSessionUpdateRequest", async (s, r) => {
      const { params: i, id: n } = r;
      try {
        const o = `${s}_session_update`, a = pi.get(o);
        if (a && this.isRequestOutOfSync(a, n)) {
          this.client.logger.warn(`Discarding out of sync request - ${n}`), this.sendError({ id: n, topic: s, error: we("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(ve({ topic: s }, i));
        try {
          pi.set(o, n), await this.client.session.update(s, { namespaces: i.namespaces }), await this.sendResult({ id: n, topic: s, result: !0, throwOnFailedPublish: !0 });
        } catch (c) {
          throw pi.delete(o), c;
        }
        this.client.events.emit("session_update", { id: n, topic: s, params: i });
      } catch (o) {
        await this.sendError({ id: n, topic: s, error: o }), this.client.logger.error(o);
      }
    }), P(this, "isRequestOutOfSync", (s, r) => r.toString().slice(0, -3) < s.toString().slice(0, -3)), P(this, "onSessionUpdateResponse", (s, r) => {
      const { id: i } = r, n = pe("session_update", i);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      os(r) ? this.events.emit(pe("session_update", i), {}) : Vt(r) && this.events.emit(pe("session_update", i), { error: r.error });
    }), P(this, "onSessionExtendRequest", async (s, r) => {
      const { id: i } = r;
      try {
        this.isValidExtend({ topic: s }), await this.setExpiry(s, De(mr)), await this.sendResult({ id: i, topic: s, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_extend", { id: i, topic: s });
      } catch (n) {
        await this.sendError({ id: i, topic: s, error: n }), this.client.logger.error(n);
      }
    }), P(this, "onSessionExtendResponse", (s, r) => {
      const { id: i } = r, n = pe("session_extend", i);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      os(r) ? this.events.emit(pe("session_extend", i), {}) : Vt(r) && this.events.emit(pe("session_extend", i), { error: r.error });
    }), P(this, "onSessionPingRequest", async (s, r) => {
      const { id: i } = r;
      try {
        this.isValidPing({ topic: s }), await this.sendResult({ id: i, topic: s, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_ping", { id: i, topic: s });
      } catch (n) {
        await this.sendError({ id: i, topic: s, error: n }), this.client.logger.error(n);
      }
    }), P(this, "onSessionPingResponse", (s, r) => {
      const { id: i } = r, n = pe("session_ping", i);
      setTimeout(() => {
        if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners 2176`);
        os(r) ? this.events.emit(pe("session_ping", i), {}) : Vt(r) && this.events.emit(pe("session_ping", i), { error: r.error });
      }, 500);
    }), P(this, "onSessionDeleteRequest", async (s, r) => {
      const { id: i } = r;
      try {
        this.isValidDisconnect({ topic: s, reason: r.params }), Promise.all([new Promise((n) => {
          this.client.core.relayer.once(qe.publish, async () => {
            n(await this.deleteSession({ topic: s, id: i }));
          });
        }), this.sendResult({ id: i, topic: s, result: !0, throwOnFailedPublish: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: s, error: we("USER_DISCONNECTED") })]).catch((n) => this.client.logger.error(n));
      } catch (n) {
        this.client.logger.error(n);
      }
    }), P(this, "onSessionRequest", async (s) => {
      var r, i, n;
      const { topic: o, payload: a, attestation: c, encryptedId: l, transportType: u } = s, { id: d, params: h } = a;
      try {
        await this.isValidRequest(ve({ topic: o }, h));
        const p = this.client.session.get(o), g = await this.getVerifyContext({ attestationId: c, hash: Jt(JSON.stringify(zs("wc_sessionRequest", h, d))), encryptedId: l, metadata: p.peer.metadata, transportType: u }), f = { id: d, topic: o, params: h, verifyContext: g };
        await this.setPendingSessionRequest(f), u === Ne.link_mode && (r = p.peer.metadata.redirect) != null && r.universal && this.client.core.addLinkModeSupportedApp((i = p.peer.metadata.redirect) == null ? void 0 : i.universal), (n = this.client.signConfig) != null && n.disableRequestQueue ? this.emitSessionRequest(f) : (this.addSessionRequestToSessionRequestQueue(f), this.processSessionRequestQueue());
      } catch (p) {
        await this.sendError({ id: d, topic: o, error: p }), this.client.logger.error(p);
      }
    }), P(this, "onSessionRequestResponse", (s, r) => {
      const { id: i } = r, n = pe("session_request", i);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      os(r) ? this.events.emit(pe("session_request", i), { result: r.result }) : Vt(r) && this.events.emit(pe("session_request", i), { error: r.error });
    }), P(this, "onSessionEventRequest", async (s, r) => {
      const { id: i, params: n } = r;
      try {
        const o = `${s}_session_event_${n.event.name}`, a = pi.get(o);
        if (a && this.isRequestOutOfSync(a, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(ve({ topic: s }, n)), this.client.events.emit("session_event", { id: i, topic: s, params: n }), pi.set(o, i);
      } catch (o) {
        await this.sendError({ id: i, topic: s, error: o }), this.client.logger.error(o);
      }
    }), P(this, "onSessionAuthenticateResponse", (s, r) => {
      const { id: i } = r;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: s, payload: r }), os(r) ? this.events.emit(pe("session_request", i), { result: r.result }) : Vt(r) && this.events.emit(pe("session_request", i), { error: r.error });
    }), P(this, "onSessionAuthenticateRequest", async (s) => {
      var r;
      const { topic: i, payload: n, attestation: o, encryptedId: a, transportType: c } = s;
      try {
        const { requester: l, authPayload: u, expiryTimestamp: d } = n.params, h = await this.getVerifyContext({ attestationId: o, hash: Jt(JSON.stringify(n)), encryptedId: a, metadata: l.metadata, transportType: c }), p = { requester: l, pairingTopic: i, id: n.id, authPayload: u, verifyContext: h, expiryTimestamp: d };
        await this.setAuthRequest(n.id, { request: p, pairingTopic: i, transportType: c }), c === Ne.link_mode && (r = l.metadata.redirect) != null && r.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: i, params: n.params, id: n.id, verifyContext: h });
      } catch (l) {
        this.client.logger.error(l);
        const u = n.params.requester.publicKey, d = await this.client.core.crypto.generateKeyPair(), h = this.getAppLinkIfEnabled(n.params.requester.metadata, c), p = { type: ds, receiverPublicKey: u, senderPublicKey: d };
        await this.sendError({ id: n.id, topic: i, error: l, encodeOpts: p, rpcOpts: Be.wc_sessionAuthenticate.autoReject, appLink: h });
      }
    }), P(this, "addSessionRequestToSessionRequestQueue", (s) => {
      this.sessionRequestQueue.queue.push(s);
    }), P(this, "cleanupAfterResponse", (s) => {
      this.deletePendingSessionRequest(s.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Ht.idle, this.processSessionRequestQueue();
      }, D.toMiliseconds(this.requestQueueDelay));
    }), P(this, "cleanupPendingSentRequestsForTopic", ({ topic: s, error: r }) => {
      const i = this.client.core.history.pending;
      i.length > 0 && i.filter((n) => n.topic === s && n.request.method === "wc_sessionRequest").forEach((n) => {
        const o = n.request.id, a = pe("session_request", o);
        if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
        this.events.emit(pe("session_request", n.request.id), { error: r });
      });
    }), P(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === Ht.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const s = this.sessionRequestQueue.queue[0];
      if (!s) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = Ht.active, this.emitSessionRequest(s);
      } catch (r) {
        this.client.logger.error(r);
      }
    }), P(this, "emitSessionRequest", (s) => {
      this.client.events.emit("session_request", s);
    }), P(this, "onPairingCreated", (s) => {
      if (s.methods && this.expectedPairingMethodMap.set(s.topic, s.methods), s.active) return;
      const r = this.client.proposal.getAll().find((i) => i.pairingTopic === s.topic);
      r && this.onSessionProposeRequest({ topic: s.topic, payload: zs("wc_sessionPropose", tt(ve({}, r), { requiredNamespaces: r.requiredNamespaces, optionalNamespaces: r.optionalNamespaces, relays: r.relays, proposer: r.proposer, sessionProperties: r.sessionProperties, scopedProperties: r.scopedProperties }), r.id) });
    }), P(this, "isValidConnect", async (s) => {
      if (!ut(s)) {
        const { message: l } = U("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(s)}`);
        throw new Error(l);
      }
      const { pairingTopic: r, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: o, scopedProperties: a, relays: c } = s;
      if (Je(r) || await this.isValidPairingTopic(r), !fb(c)) {
        const { message: l } = U("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(l);
      }
      if (!Je(i) && Ps(i) !== 0) {
        const l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
        ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l), this.validateNamespaces(i, "requiredNamespaces");
      }
      if (!Je(n) && Ps(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), Je(o) || this.validateSessionProps(o, "sessionProperties"), !Je(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const l = Object.keys(i || {}).concat(Object.keys(n || {}));
        if (!Object.keys(a).every((u) => l.includes(u))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`);
      }
    }), P(this, "validateNamespaces", (s, r) => {
      const i = pb(s, "connect()", r);
      if (i) throw new Error(i.message);
    }), P(this, "isValidApprove", async (s) => {
      if (!ut(s)) throw new Error(U("MISSING_OR_INVALID", `approve() params: ${s}`).message);
      const { id: r, namespaces: i, relayProtocol: n, sessionProperties: o, scopedProperties: a } = s;
      this.checkRecentlyDeleted(r), await this.isValidProposalId(r);
      const c = this.client.proposal.get(r), l = zo(i, "approve()");
      if (l) throw new Error(l.message);
      const u = xl(c.requiredNamespaces, i, "approve()");
      if (u) throw new Error(u.message);
      if (!ke(n, !0)) {
        const { message: d } = U("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(d);
      }
      if (Je(o) || this.validateSessionProps(o, "sessionProperties"), !Je(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const d = new Set(Object.keys(i));
        if (!Object.keys(a).every((h) => d.has(h))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(d).join(", ")}`);
      }
    }), P(this, "isValidReject", async (s) => {
      if (!ut(s)) {
        const { message: n } = U("MISSING_OR_INVALID", `reject() params: ${s}`);
        throw new Error(n);
      }
      const { id: r, reason: i } = s;
      if (this.checkRecentlyDeleted(r), await this.isValidProposalId(r), !mb(i)) {
        const { message: n } = U("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(n);
      }
    }), P(this, "isValidSessionSettleRequest", (s) => {
      if (!ut(s)) {
        const { message: l } = U("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${s}`);
        throw new Error(l);
      }
      const { relay: r, controller: i, namespaces: n, expiry: o } = s;
      if (!Yd(r)) {
        const { message: l } = U("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const a = ab(i, "onSessionSettleRequest()");
      if (a) throw new Error(a.message);
      const c = zo(n, "onSessionSettleRequest()");
      if (c) throw new Error(c.message);
      if (vs(o)) {
        const { message: l } = U("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }), P(this, "isValidUpdate", async (s) => {
      if (!ut(s)) {
        const { message: c } = U("MISSING_OR_INVALID", `update() params: ${s}`);
        throw new Error(c);
      }
      const { topic: r, namespaces: i } = s;
      this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
      const n = this.client.session.get(r), o = zo(i, "update()");
      if (o) throw new Error(o.message);
      const a = xl(n.requiredNamespaces, i, "update()");
      if (a) throw new Error(a.message);
    }), P(this, "isValidExtend", async (s) => {
      if (!ut(s)) {
        const { message: i } = U("MISSING_OR_INVALID", `extend() params: ${s}`);
        throw new Error(i);
      }
      const { topic: r } = s;
      this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
    }), P(this, "isValidRequest", async (s) => {
      if (!ut(s)) {
        const { message: c } = U("MISSING_OR_INVALID", `request() params: ${s}`);
        throw new Error(c);
      }
      const { topic: r, request: i, chainId: n, expiry: o } = s;
      this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
      const { namespaces: a } = this.client.session.get(r);
      if (!Tl(a, n)) {
        const { message: c } = U("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(c);
      }
      if (!wb(i)) {
        const { message: c } = U("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(c);
      }
      if (!vb(a, n, i.method)) {
        const { message: c } = U("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(c);
      }
      if (o && !Ab(o, Xo)) {
        const { message: c } = U("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${Xo.min} and ${Xo.max}`);
        throw new Error(c);
      }
    }), P(this, "isValidRespond", async (s) => {
      var r;
      if (!ut(s)) {
        const { message: o } = U("MISSING_OR_INVALID", `respond() params: ${s}`);
        throw new Error(o);
      }
      const { topic: i, response: n } = s;
      try {
        await this.isValidSessionTopic(i);
      } catch (o) {
        throw (r = s == null ? void 0 : s.response) != null && r.id && this.cleanupAfterResponse(s), o;
      }
      if (!yb(n)) {
        const { message: o } = U("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(o);
      }
    }), P(this, "isValidPing", async (s) => {
      if (!ut(s)) {
        const { message: i } = U("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(i);
      }
      const { topic: r } = s;
      await this.isValidSessionOrPairingTopic(r);
    }), P(this, "isValidEmit", async (s) => {
      if (!ut(s)) {
        const { message: a } = U("MISSING_OR_INVALID", `emit() params: ${s}`);
        throw new Error(a);
      }
      const { topic: r, event: i, chainId: n } = s;
      await this.isValidSessionTopic(r);
      const { namespaces: o } = this.client.session.get(r);
      if (!Tl(o, n)) {
        const { message: a } = U("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(a);
      }
      if (!bb(i)) {
        const { message: a } = U("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
      if (!Eb(o, n, i.name)) {
        const { message: a } = U("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }), P(this, "isValidDisconnect", async (s) => {
      if (!ut(s)) {
        const { message: i } = U("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(i);
      }
      const { topic: r } = s;
      await this.isValidSessionOrPairingTopic(r);
    }), P(this, "isValidAuthenticate", (s) => {
      const { chains: r, uri: i, domain: n, nonce: o } = s;
      if (!Array.isArray(r) || r.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!ke(i, !1)) throw new Error("uri is required parameter");
      if (!ke(n, !1)) throw new Error("domain is required parameter");
      if (!ke(o, !1)) throw new Error("nonce is required parameter");
      if ([...new Set(r.map((c) => Dr(c).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: a } = Dr(r[0]);
      if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), P(this, "getVerifyContext", async (s) => {
      const { attestationId: r, hash: i, encryptedId: n, metadata: o, transportType: a } = s, c = { verified: { verifyUrl: o.verifyUrl || ki, validation: "UNKNOWN", origin: o.url || "" } };
      try {
        if (a === Ne.link_mode) {
          const u = this.getAppLinkIfEnabled(o, a);
          return c.verified.validation = u && new URL(u).origin === new URL(o.url).origin ? "VALID" : "INVALID", c;
        }
        const l = await this.client.core.verify.resolve({ attestationId: r, hash: i, encryptedId: n, verifyUrl: o.verifyUrl });
        l && (c.verified.origin = l.origin, c.verified.isScam = l.isScam, c.verified.validation = l.origin === new URL(o.url).origin ? "VALID" : "INVALID");
      } catch (l) {
        this.client.logger.warn(l);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`), c;
    }), P(this, "validateSessionProps", (s, r) => {
      Object.values(s).forEach((i, n) => {
        if (i == null) {
          const { message: o } = U("MISSING_OR_INVALID", `${r} must contain an existing value for each key. Received: ${i} for key ${Object.keys(s)[n]}`);
          throw new Error(o);
        }
      });
    }), P(this, "getPendingAuthRequest", (s) => {
      const r = this.client.auth.requests.get(s);
      return typeof r == "object" ? r : void 0;
    }), P(this, "addToRecentlyDeleted", (s, r) => {
      if (this.recentlyDeletedMap.set(s, r), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let i = 0;
        const n = this.recentlyDeletedLimit / 2;
        for (const o of this.recentlyDeletedMap.keys()) {
          if (i++ >= n) break;
          this.recentlyDeletedMap.delete(o);
        }
      }
    }), P(this, "checkRecentlyDeleted", (s) => {
      const r = this.recentlyDeletedMap.get(s);
      if (r) {
        const { message: i } = U("MISSING_OR_INVALID", `Record was recently deleted - ${r}: ${s}`);
        throw new Error(i);
      }
    }), P(this, "isLinkModeEnabled", (s, r) => {
      var i, n, o, a, c, l, u, d, h;
      return !s || r !== Ne.link_mode ? !1 : ((n = (i = this.client.metadata) == null ? void 0 : i.redirect) == null ? void 0 : n.linkMode) === !0 && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((l = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : l.universal) !== "" && ((u = s == null ? void 0 : s.redirect) == null ? void 0 : u.universal) !== void 0 && ((d = s == null ? void 0 : s.redirect) == null ? void 0 : d.universal) !== "" && ((h = s == null ? void 0 : s.redirect) == null ? void 0 : h.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(s.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), P(this, "getAppLinkIfEnabled", (s, r) => {
      var i;
      return this.isLinkModeEnabled(s, r) ? (i = s == null ? void 0 : s.redirect) == null ? void 0 : i.universal : void 0;
    }), P(this, "handleLinkModeMessage", ({ url: s }) => {
      if (!s || !s.includes("wc_ev") || !s.includes("topic")) return;
      const r = Kc(s, "topic") || "", i = decodeURIComponent(Kc(s, "wc_ev") || ""), n = this.client.session.keys.includes(r);
      n && this.client.session.update(r, { transportType: Ne.link_mode }), this.client.core.dispatchEnvelope({ topic: r, message: i, sessionExists: n });
    }), P(this, "registerLinkModeListeners", async () => {
      var s;
      if (Qa() || ks() && (s = this.client.metadata.redirect) != null && s.linkMode) {
        const r = global == null ? void 0 : global.Linking;
        if (typeof r < "u") {
          r.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const i = await r.getInitialURL();
          i && setTimeout(() => {
            this.handleLinkModeMessage({ url: i });
          }, 50);
        }
      }
    }), P(this, "shouldSetTVF", (s, r) => {
      if (!r || s !== "wc_sessionRequest") return !1;
      const { request: i } = r;
      return Object.keys(ou).includes(i.method);
    }), P(this, "getTVFParams", (s, r, i) => {
      var n, o;
      try {
        const a = r.request.method, c = this.extractTxHashesFromResult(a, i);
        return tt(ve({ correlationId: s, rpcMethods: [a], chainId: r.chainId }, this.isValidContractData(r.request.params) && { contractAddresses: [(o = (n = r.request.params) == null ? void 0 : n[0]) == null ? void 0 : o.to] }), { txHashes: c });
      } catch (a) {
        this.client.logger.warn("Error getting TVF params", a);
      }
      return {};
    }), P(this, "isValidContractData", (s) => {
      var r;
      if (!s) return !1;
      try {
        const i = (s == null ? void 0 : s.data) || ((r = s == null ? void 0 : s[0]) == null ? void 0 : r.data);
        if (!i.startsWith("0x")) return !1;
        const n = i.slice(2);
        return /^[0-9a-fA-F]*$/.test(n) ? n.length % 2 === 0 : !1;
      } catch {
      }
      return !1;
    }), P(this, "extractTxHashesFromResult", (s, r) => {
      try {
        const i = ou[s];
        if (typeof r == "string") return [r];
        const n = r[i.key];
        if (Ss(n)) return s === "solana_signAllTransactions" ? n.map((o) => zm(o)) : n;
        if (typeof n == "string") return [n];
      } catch (i) {
        this.client.logger.warn("Error extracting tx hashes from result", i);
      }
      return [];
    });
  }
  async processPendingMessageEvents() {
    try {
      const e = this.client.session.keys, s = this.client.core.relayer.messages.getWithoutAck(e);
      for (const [r, i] of Object.entries(s)) for (const n of i) try {
        await this.onProviderMessageEvent({ topic: r, message: n, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${r}, message: ${n}`);
      }
    } catch (e) {
      this.client.logger.warn("processPendingMessageEvents failed", e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = U("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(qe.message, (e) => {
      this.onProviderMessageEvent(e);
    });
  }
  async onRelayMessage(e) {
    const { topic: s, message: r, attestation: i, transportType: n } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(Xn) ? this.client.auth.authKeys.get(Xn) : { publicKey: void 0 };
    try {
      const a = await this.client.core.crypto.decode(s, r, { receiverPublicKey: o, encoding: n === Ne.link_mode ? Es : Ft });
      Va(a) ? (this.client.core.history.set(s, a), await this.onRelayEventRequest({ topic: s, payload: a, attestation: i, transportType: n, encryptedId: Jt(r) })) : Ga(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({ topic: s, payload: a, transportType: n }), this.client.core.history.delete(s, a.id)) : await this.onRelayEventUnknownPayload({ topic: s, payload: a, transportType: n }), await this.client.core.relayer.messages.ack(s, r);
    } catch (a) {
      this.client.logger.error(a);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Tt.expired, async (e) => {
      const { topic: s, id: r } = gd(e.target);
      if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, U("EXPIRED"), !0);
      if (r && this.client.auth.requests.keys.includes(r)) return await this.deletePendingAuthRequest(r, U("EXPIRED"), !0);
      s ? this.client.session.keys.includes(s) && (await this.deleteSession({ topic: s, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: s })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", { id: r }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(qs.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(qs.delete, (e) => {
      this.addToRecentlyDeleted(e.topic, "pairing");
    });
  }
  isValidPairingTopic(e) {
    if (!ke(e, !1)) {
      const { message: s } = U("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(s);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: s } = U("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(s);
    }
    if (vs(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: s } = U("EXPIRED", `pairing topic: ${e}`);
      throw new Error(s);
    }
  }
  async isValidSessionTopic(e) {
    if (!ke(e, !1)) {
      const { message: s } = U("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(s);
    }
    if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
      const { message: s } = U("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(s);
    }
    if (vs(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: s } = U("EXPIRED", `session topic: ${e}`);
      throw new Error(s);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: s } = U("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(s);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
    else if (ke(e, !1)) {
      const { message: s } = U("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(s);
    } else {
      const { message: s } = U("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(s);
    }
  }
  async isValidProposalId(e) {
    if (!gb(e)) {
      const { message: s } = U("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(s);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: s } = U("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(s);
    }
    if (vs(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: s } = U("EXPIRED", `proposal id: ${e}`);
      throw new Error(s);
    }
  }
}
class T1 extends lr {
  constructor(e, s) {
    super(e, s, f1, ac), this.core = e, this.logger = s;
  }
}
let x1 = class extends lr {
  constructor(e, s) {
    super(e, s, g1, ac), this.core = e, this.logger = s;
  }
};
class k1 extends lr {
  constructor(e, s) {
    super(e, s, w1, ac, (r) => r.id), this.core = e, this.logger = s;
  }
}
class $1 extends lr {
  constructor(e, s) {
    super(e, s, E1, Io, () => Xn), this.core = e, this.logger = s;
  }
}
class R1 extends lr {
  constructor(e, s) {
    super(e, s, C1, Io), this.core = e, this.logger = s;
  }
}
class U1 extends lr {
  constructor(e, s) {
    super(e, s, I1, Io, (r) => r.id), this.core = e, this.logger = s;
  }
}
var D1 = Object.defineProperty, L1 = (t, e, s) => e in t ? D1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Zo = (t, e, s) => L1(t, typeof e != "symbol" ? e + "" : e, s);
class M1 {
  constructor(e, s) {
    this.core = e, this.logger = s, Zo(this, "authKeys"), Zo(this, "pairingTopics"), Zo(this, "requests"), this.authKeys = new $1(this.core, this.logger), this.pairingTopics = new R1(this.core, this.logger), this.requests = new U1(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
var B1 = Object.defineProperty, F1 = (t, e, s) => e in t ? B1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, ne = (t, e, s) => F1(t, typeof e != "symbol" ? e + "" : e, s);
let j1 = class mh extends sg {
  constructor(e) {
    super(e), ne(this, "protocol", ph), ne(this, "version", fh), ne(this, "name", Yo.name), ne(this, "metadata"), ne(this, "core"), ne(this, "logger"), ne(this, "events", new nr.EventEmitter()), ne(this, "engine"), ne(this, "session"), ne(this, "proposal"), ne(this, "pendingRequest"), ne(this, "auth"), ne(this, "signConfig"), ne(this, "on", (r, i) => this.events.on(r, i)), ne(this, "once", (r, i) => this.events.once(r, i)), ne(this, "off", (r, i) => this.events.off(r, i)), ne(this, "removeListener", (r, i) => this.events.removeListener(r, i)), ne(this, "removeAllListeners", (r) => this.events.removeAllListeners(r)), ne(this, "connect", async (r) => {
      try {
        return await this.engine.connect(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "pair", async (r) => {
      try {
        return await this.engine.pair(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "approve", async (r) => {
      try {
        return await this.engine.approve(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "reject", async (r) => {
      try {
        return await this.engine.reject(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "update", async (r) => {
      try {
        return await this.engine.update(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "extend", async (r) => {
      try {
        return await this.engine.extend(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "request", async (r) => {
      try {
        return await this.engine.request(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "respond", async (r) => {
      try {
        return await this.engine.respond(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "ping", async (r) => {
      try {
        return await this.engine.ping(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "emit", async (r) => {
      try {
        return await this.engine.emit(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "disconnect", async (r) => {
      try {
        return await this.engine.disconnect(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "find", (r) => {
      try {
        return this.engine.find(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }), ne(this, "authenticate", async (r, i) => {
      try {
        return await this.engine.authenticate(r, i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }), ne(this, "formatAuthMessage", (r) => {
      try {
        return this.engine.formatAuthMessage(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "approveSessionAuthenticate", async (r) => {
      try {
        return await this.engine.approveSessionAuthenticate(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), ne(this, "rejectSessionAuthenticate", async (r) => {
      try {
        return await this.engine.rejectSessionAuthenticate(r);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }), this.name = (e == null ? void 0 : e.name) || Yo.name, this.metadata = rm(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
    const s = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ka(fn({ level: (e == null ? void 0 : e.logger) || Yo.logger }));
    this.core = (e == null ? void 0 : e.core) || new p1(e), this.logger = rt(s, this.name), this.session = new x1(this.core, this.logger), this.proposal = new T1(this.core, this.logger), this.pendingRequest = new k1(this.core, this.logger), this.engine = new O1(this), this.auth = new M1(this.core, this.logger);
  }
  static async init(e) {
    const s = new mh(e);
    return await s.initialize(), s;
  }
  get context() {
    return Ct(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), setTimeout(() => {
        this.engine.processRelayMessageCache();
      }, D.toMiliseconds(D.ONE_SECOND));
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
};
const cu = "error", q1 = "wss://relay.walletconnect.org", W1 = "wc", z1 = "universal_provider", Fn = `${W1}@2:${z1}:`, wh = "https://rpc.walletconnect.org/v1/", Or = "generic", H1 = `${wh}bundler`, $t = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
function K1() {
}
function cc(t) {
  return t == null || typeof t != "object" && typeof t != "function";
}
function lc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function V1(t) {
  if (cc(t)) return t;
  if (Array.isArray(t) || lc(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  const e = Object.getPrototypeOf(t), s = e.constructor;
  if (t instanceof Date || t instanceof Map || t instanceof Set) return new s(t);
  if (t instanceof RegExp) {
    const r = new s(t);
    return r.lastIndex = t.lastIndex, r;
  }
  if (t instanceof DataView) return new s(t.buffer.slice(0));
  if (t instanceof Error) {
    const r = new s(t.message);
    return r.stack = t.stack, r.name = t.name, r.cause = t.cause, r;
  }
  if (typeof File < "u" && t instanceof File) return new s([t], t.name, { type: t.type, lastModified: t.lastModified });
  if (typeof t == "object") {
    const r = Object.create(e);
    return Object.assign(r, t);
  }
  return t;
}
function lu(t) {
  return typeof t == "object" && t !== null;
}
function yh(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function bh(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const G1 = "[object RegExp]", vh = "[object String]", Eh = "[object Number]", Ch = "[object Boolean]", Ih = "[object Arguments]", J1 = "[object Symbol]", Y1 = "[object Date]", X1 = "[object Map]", Z1 = "[object Set]", Q1 = "[object Array]", eC = "[object ArrayBuffer]", tC = "[object Object]", sC = "[object DataView]", rC = "[object Uint8Array]", iC = "[object Uint8ClampedArray]", nC = "[object Uint16Array]", oC = "[object Uint32Array]", aC = "[object Int8Array]", cC = "[object Int16Array]", lC = "[object Int32Array]", uC = "[object Float32Array]", dC = "[object Float64Array]";
function hC(t, e) {
  return Ur(t, void 0, t, /* @__PURE__ */ new Map(), e);
}
function Ur(t, e, s, r = /* @__PURE__ */ new Map(), i = void 0) {
  const n = i == null ? void 0 : i(t, e, s, r);
  if (n != null) return n;
  if (cc(t)) return t;
  if (r.has(t)) return r.get(t);
  if (Array.isArray(t)) {
    const o = new Array(t.length);
    r.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = Ur(t[a], a, s, r, i);
    return Object.hasOwn(t, "index") && (o.index = t.index), Object.hasOwn(t, "input") && (o.input = t.input), o;
  }
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) {
    const o = new RegExp(t.source, t.flags);
    return o.lastIndex = t.lastIndex, o;
  }
  if (t instanceof Map) {
    const o = /* @__PURE__ */ new Map();
    r.set(t, o);
    for (const [a, c] of t) o.set(a, Ur(c, a, s, r, i));
    return o;
  }
  if (t instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    r.set(t, o);
    for (const a of t) o.add(Ur(a, void 0, s, r, i));
    return o;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
  if (lc(t)) {
    const o = new (Object.getPrototypeOf(t)).constructor(t.length);
    r.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = Ur(t[a], a, s, r, i);
    return o;
  }
  if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  if (t instanceof DataView) {
    const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
    return r.set(t, o), Ws(o, t, s, r, i), o;
  }
  if (typeof File < "u" && t instanceof File) {
    const o = new File([t], t.name, { type: t.type });
    return r.set(t, o), Ws(o, t, s, r, i), o;
  }
  if (t instanceof Blob) {
    const o = new Blob([t], { type: t.type });
    return r.set(t, o), Ws(o, t, s, r, i), o;
  }
  if (t instanceof Error) {
    const o = new t.constructor();
    return r.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, Ws(o, t, s, r, i), o;
  }
  if (typeof t == "object" && pC(t)) {
    const o = Object.create(Object.getPrototypeOf(t));
    return r.set(t, o), Ws(o, t, s, r, i), o;
  }
  return t;
}
function Ws(t, e, s = t, r, i) {
  const n = [...Object.keys(e), ...yh(e)];
  for (let o = 0; o < n.length; o++) {
    const a = n[o], c = Object.getOwnPropertyDescriptor(t, a);
    (c == null || c.writable) && (t[a] = Ur(e[a], a, s, r, i));
  }
}
function pC(t) {
  switch (bh(t)) {
    case Ih:
    case Q1:
    case eC:
    case sC:
    case Ch:
    case Y1:
    case uC:
    case dC:
    case aC:
    case cC:
    case lC:
    case X1:
    case Eh:
    case tC:
    case G1:
    case Z1:
    case vh:
    case J1:
    case rC:
    case iC:
    case nC:
    case oC:
      return !0;
    default:
      return !1;
  }
}
function fC(t, e) {
  return hC(t, (s, r, i, n) => {
    if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
      case Eh:
      case vh:
      case Ch: {
        const o = new t.constructor(t == null ? void 0 : t.valueOf());
        return Ws(o, t), o;
      }
      case Ih: {
        const o = {};
        return Ws(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
      }
      default:
        return;
    }
  });
}
function uu(t) {
  return fC(t);
}
function du(t) {
  return t !== null && typeof t == "object" && bh(t) === "[object Arguments]";
}
function gC(t) {
  return lc(t);
}
function mC(t) {
  var s;
  if (typeof t != "object" || t == null) return !1;
  if (Object.getPrototypeOf(t) === null) return !0;
  if (Object.prototype.toString.call(t) !== "[object Object]") {
    const r = t[Symbol.toStringTag];
    return r == null || !((s = Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)) != null && s.writable) ? !1 : t.toString() === `[object ${r}]`;
  }
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function wC(t, ...e) {
  const s = e.slice(0, -1), r = e[e.length - 1];
  let i = t;
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    i = Fa(i, o, r, /* @__PURE__ */ new Map());
  }
  return i;
}
function Fa(t, e, s, r) {
  if (cc(t) && (t = Object(t)), e == null || typeof e != "object") return t;
  if (r.has(e)) return V1(r.get(e));
  if (r.set(e, t), Array.isArray(e)) {
    e = e.slice();
    for (let n = 0; n < e.length; n++) e[n] = e[n] ?? void 0;
  }
  const i = [...Object.keys(e), ...yh(e)];
  for (let n = 0; n < i.length; n++) {
    const o = i[n];
    let a = e[o], c = t[o];
    if (du(a) && (a = { ...a }), du(c) && (c = { ...c }), typeof Buffer < "u" && Buffer.isBuffer(a) && (a = uu(a)), Array.isArray(a)) if (typeof c == "object" && c != null) {
      const u = [], d = Reflect.ownKeys(c);
      for (let h = 0; h < d.length; h++) {
        const p = d[h];
        u[p] = c[p];
      }
      c = u;
    } else c = [];
    const l = s(c, a, o, t, e, r);
    l != null ? t[o] = l : Array.isArray(a) || lu(c) && lu(a) ? t[o] = Fa(c, a, s, r) : c == null && mC(a) ? t[o] = Fa({}, a, s, r) : c == null && gC(a) ? t[o] = uu(a) : (c === void 0 || a !== void 0) && (t[o] = a);
  }
  return t;
}
function yC(t, ...e) {
  return wC(t, ...e, K1);
}
var bC = Object.defineProperty, vC = Object.defineProperties, EC = Object.getOwnPropertyDescriptors, hu = Object.getOwnPropertySymbols, CC = Object.prototype.hasOwnProperty, IC = Object.prototype.propertyIsEnumerable, pu = (t, e, s) => e in t ? bC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, jn = (t, e) => {
  for (var s in e || (e = {})) CC.call(e, s) && pu(t, s, e[s]);
  if (hu) for (var s of hu(e)) IC.call(e, s) && pu(t, s, e[s]);
  return t;
}, AC = (t, e) => vC(t, EC(e));
function Et(t, e, s) {
  var r;
  const i = Dr(t);
  return ((r = e.rpcMap) == null ? void 0 : r[i.reference]) || `${wh}?chainId=${i.namespace}:${i.reference}&projectId=${s}`;
}
function ur(t) {
  return t.includes(":") ? t.split(":")[1] : t;
}
function Ah(t) {
  return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function NC(t, e) {
  const s = Object.keys(e.namespaces).filter((i) => i.includes(t));
  if (!s.length) return [];
  const r = [];
  return s.forEach((i) => {
    const n = e.namespaces[i].accounts;
    r.push(...n);
  }), r;
}
function qn(t = {}, e = {}) {
  const s = fu(t), r = fu(e);
  return yC(s, r);
}
function fu(t) {
  var e, s, r, i, n;
  const o = {};
  if (!Ps(t)) return o;
  for (const [a, c] of Object.entries(t)) {
    const l = Eo(a) ? [a] : c.chains, u = c.methods || [], d = c.events || [], h = c.rpcMap || {}, p = Rr(a);
    o[p] = AC(jn(jn({}, o[p]), c), { chains: Xt(l, (e = o[p]) == null ? void 0 : e.chains), methods: Xt(u, (s = o[p]) == null ? void 0 : s.methods), events: Xt(d, (r = o[p]) == null ? void 0 : r.events) }), (Ps(h) || Ps(((i = o[p]) == null ? void 0 : i.rpcMap) || {})) && (o[p].rpcMap = jn(jn({}, h), (n = o[p]) == null ? void 0 : n.rpcMap));
  }
  return o;
}
function gu(t) {
  return t.includes(":") ? t.split(":")[2] : t;
}
function mu(t) {
  const e = {};
  for (const [s, r] of Object.entries(t)) {
    const i = r.methods || [], n = r.events || [], o = r.accounts || [], a = Eo(s) ? [s] : r.chains ? r.chains : Ah(r.accounts);
    e[s] = { chains: a, methods: i, events: n, accounts: o };
  }
  return e;
}
function Qo(t) {
  return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
}
const Nh = {}, ue = (t) => Nh[t], ea = (t, e) => {
  Nh[t] = e;
};
var _C = Object.defineProperty, SC = (t, e, s) => e in t ? _C(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, wr = (t, e, s) => SC(t, typeof e != "symbol" ? e + "" : e, s);
class PC {
  constructor(e) {
    wr(this, "name", "polkadot"), wr(this, "client"), wr(this, "httpProviders"), wr(this, "events"), wr(this, "namespace"), wr(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(e, s), this.chainId = e, this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var r;
      const i = ur(s);
      e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || Et(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kt(new jt(r, ue("disableProviderPing")));
  }
}
var OC = Object.defineProperty, TC = Object.defineProperties, xC = Object.getOwnPropertyDescriptors, wu = Object.getOwnPropertySymbols, kC = Object.prototype.hasOwnProperty, $C = Object.prototype.propertyIsEnumerable, ja = (t, e, s) => e in t ? OC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, yu = (t, e) => {
  for (var s in e || (e = {})) kC.call(e, s) && ja(t, s, e[s]);
  if (wu) for (var s of wu(e)) $C.call(e, s) && ja(t, s, e[s]);
  return t;
}, bu = (t, e) => TC(t, xC(e)), yr = (t, e, s) => ja(t, typeof e != "symbol" ? e + "" : e, s);
class RC {
  constructor(e) {
    yr(this, "name", "eip155"), yr(this, "client"), yr(this, "chainId"), yr(this, "namespace"), yr(this, "httpProviders"), yr(this, "events"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
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
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), s), this.chainId = parseInt(e), this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
  createHttpProvider(e, s) {
    const r = s || Et(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kt(new jt(r, ue("disableProviderPing")));
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var r;
      const i = parseInt(ur(s));
      e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s]);
    }), e;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const e = this.chainId, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  async handleSwitchChain(e) {
    var s, r;
    let i = e.request.params ? (s = e.request.params[0]) == null ? void 0 : s.chainId : "0x0";
    i = i.startsWith("0x") ? i : `0x${i}`;
    const n = parseInt(i, 16);
    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e.topic, request: { method: e.request.method, params: [{ chainId: i }] }, chainId: (r = this.namespace.chains) == null ? void 0 : r[0] }), this.setDefaultChain(`${n}`);
    else throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
  async getCapabilities(e) {
    var s, r, i, n, o;
    const a = (r = (s = e.request) == null ? void 0 : s.params) == null ? void 0 : r[0], c = ((n = (i = e.request) == null ? void 0 : i.params) == null ? void 0 : n[1]) || [], l = `${a}${c.join(",")}`;
    if (!a) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const u = this.client.session.get(e.topic), d = ((o = u == null ? void 0 : u.sessionProperties) == null ? void 0 : o.capabilities) || {};
    if (d != null && d[l]) return d == null ? void 0 : d[l];
    const h = await this.client.request(e);
    try {
      await this.client.session.update(e.topic, { sessionProperties: bu(yu({}, u.sessionProperties || {}), { capabilities: bu(yu({}, d || {}), { [l]: h }) }) });
    } catch (p) {
      console.warn("Failed to update session with capabilities", p);
    }
    return h;
  }
  async getCallStatus(e) {
    var s, r;
    const i = this.client.session.get(e.topic), n = (s = i.sessionProperties) == null ? void 0 : s.bundler_name;
    if (n) {
      const a = this.getBundlerUrl(e.chainId, n);
      try {
        return await this.getUserOperationReceipt(a, e);
      } catch (c) {
        console.warn("Failed to fetch call status from bundler", c, a);
      }
    }
    const o = (r = i.sessionProperties) == null ? void 0 : r.bundler_url;
    if (o) try {
      return await this.getUserOperationReceipt(o, e);
    } catch (a) {
      console.warn("Failed to fetch call status from custom bundler", a, o);
    }
    if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e, s) {
    var r;
    const i = new URL(e), n = await fetch(i, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(zs("eth_getUserOperationReceipt", [(r = s.request.params) == null ? void 0 : r[0]])) });
    if (!n.ok) throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
    return await n.json();
  }
  getBundlerUrl(e, s) {
    return `${H1}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
  }
}
var UC = Object.defineProperty, DC = (t, e, s) => e in t ? UC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, br = (t, e, s) => DC(t, typeof e != "symbol" ? e + "" : e, s);
class LC {
  constructor(e) {
    br(this, "name", "solana"), br(this, "client"), br(this, "httpProviders"), br(this, "events"), br(this, "namespace"), br(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(e, s), this.chainId = e, this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var r;
      const i = ur(s);
      e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || Et(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kt(new jt(r, ue("disableProviderPing")));
  }
}
var MC = Object.defineProperty, BC = (t, e, s) => e in t ? MC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, vr = (t, e, s) => BC(t, typeof e != "symbol" ? e + "" : e, s);
class FC {
  constructor(e) {
    vr(this, "name", "cosmos"), vr(this, "client"), vr(this, "httpProviders"), vr(this, "events"), vr(this, "namespace"), vr(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(e, s), this.chainId = e, this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var r;
      const i = ur(s);
      e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || Et(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kt(new jt(r, ue("disableProviderPing")));
  }
}
var jC = Object.defineProperty, qC = (t, e, s) => e in t ? jC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Er = (t, e, s) => qC(t, typeof e != "symbol" ? e + "" : e, s);
class WC {
  constructor(e) {
    Er(this, "name", "algorand"), Er(this, "client"), Er(this, "httpProviders"), Er(this, "events"), Er(this, "namespace"), Er(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    if (!this.httpProviders[e]) {
      const r = s || Et(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, r);
    }
    this.chainId = e, this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
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
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var r;
      e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[s]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || Et(e, this.namespace, this.client.core.projectId);
    return typeof r > "u" ? void 0 : new kt(new jt(r, ue("disableProviderPing")));
  }
}
var zC = Object.defineProperty, HC = (t, e, s) => e in t ? zC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Cr = (t, e, s) => HC(t, typeof e != "symbol" ? e + "" : e, s);
class KC {
  constructor(e) {
    Cr(this, "name", "cip34"), Cr(this, "client"), Cr(this, "httpProviders"), Cr(this, "events"), Cr(this, "namespace"), Cr(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(e, s), this.chainId = e, this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      const r = this.getCardanoRPCUrl(s), i = ur(s);
      e[i] = this.createHttpProvider(i, r);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  getCardanoRPCUrl(e) {
    const s = this.namespace.rpcMap;
    if (s) return s[e];
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || this.getCardanoRPCUrl(e);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kt(new jt(r, ue("disableProviderPing")));
  }
}
var VC = Object.defineProperty, GC = (t, e, s) => e in t ? VC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ir = (t, e, s) => GC(t, typeof e != "symbol" ? e + "" : e, s);
class JC {
  constructor(e) {
    Ir(this, "name", "elrond"), Ir(this, "client"), Ir(this, "httpProviders"), Ir(this, "events"), Ir(this, "namespace"), Ir(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(e, s), this.chainId = e, this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var r;
      const i = ur(s);
      e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || Et(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kt(new jt(r, ue("disableProviderPing")));
  }
}
var YC = Object.defineProperty, XC = (t, e, s) => e in t ? YC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Ar = (t, e, s) => XC(t, typeof e != "symbol" ? e + "" : e, s);
class ZC {
  constructor(e) {
    Ar(this, "name", "multiversx"), Ar(this, "client"), Ar(this, "httpProviders"), Ar(this, "events"), Ar(this, "namespace"), Ar(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(e, s), this.chainId = e, this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var r;
      const i = ur(s);
      e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[s]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || Et(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kt(new jt(r, ue("disableProviderPing")));
  }
}
var QC = Object.defineProperty, eI = (t, e, s) => e in t ? QC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Nr = (t, e, s) => eI(t, typeof e != "symbol" ? e + "" : e, s);
class tI {
  constructor(e) {
    Nr(this, "name", "near"), Nr(this, "client"), Nr(this, "httpProviders"), Nr(this, "events"), Nr(this, "namespace"), Nr(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const r = s || Et(`${this.name}:${e}`, this.namespace);
      if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, r);
    }
    this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      var r;
      e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[s]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || Et(e, this.namespace);
    return typeof r > "u" ? void 0 : new kt(new jt(r, ue("disableProviderPing")));
  }
}
var sI = Object.defineProperty, rI = (t, e, s) => e in t ? sI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, _r = (t, e, s) => rI(t, typeof e != "symbol" ? e + "" : e, s);
class iI {
  constructor(e) {
    _r(this, "name", "tezos"), _r(this, "client"), _r(this, "httpProviders"), _r(this, "events"), _r(this, "namespace"), _r(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const r = s || Et(`${this.name}:${e}`, this.namespace);
      if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, r);
    }
    this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((s) => {
      e[s] = this.createHttpProvider(s);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || Et(e, this.namespace);
    return typeof r > "u" ? void 0 : new kt(new jt(r));
  }
}
var nI = Object.defineProperty, oI = (t, e, s) => e in t ? nI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Sr = (t, e, s) => oI(t, typeof e != "symbol" ? e + "" : e, s);
class aI {
  constructor(e) {
    Sr(this, "name", Or), Sr(this, "client"), Sr(this, "httpProviders"), Sr(this, "events"), Sr(this, "namespace"), Sr(this, "chainId"), this.namespace = e.namespace, this.events = ue("events"), this.client = ue("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
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
  setDefaultChain(e, s) {
    this.httpProviders[e] || this.setHttpProvider(e, s), this.chainId = e, this.events.emit($t.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
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
    return e ? [...new Set(e.filter((s) => s.split(":")[1] === this.chainId.toString()).map((s) => s.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var e, s;
    const r = {};
    return (s = (e = this.namespace) == null ? void 0 : e.accounts) == null || s.forEach((i) => {
      const n = Dr(i);
      r[`${n.namespace}:${n.reference}`] = this.createHttpProvider(i);
    }), r;
  }
  getHttpProvider(e) {
    const s = this.httpProviders[e];
    if (typeof s > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return s;
  }
  setHttpProvider(e, s) {
    const r = this.createHttpProvider(e, s);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, s) {
    const r = s || Et(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new kt(new jt(r, ue("disableProviderPing")));
  }
}
var cI = Object.defineProperty, lI = Object.defineProperties, uI = Object.getOwnPropertyDescriptors, vu = Object.getOwnPropertySymbols, dI = Object.prototype.hasOwnProperty, hI = Object.prototype.propertyIsEnumerable, qa = (t, e, s) => e in t ? cI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Wn = (t, e) => {
  for (var s in e || (e = {})) dI.call(e, s) && qa(t, s, e[s]);
  if (vu) for (var s of vu(e)) hI.call(e, s) && qa(t, s, e[s]);
  return t;
}, ta = (t, e) => lI(t, uI(e)), Pt = (t, e, s) => qa(t, typeof e != "symbol" ? e + "" : e, s);
let pI = class _h {
  constructor(e) {
    Pt(this, "client"), Pt(this, "namespaces"), Pt(this, "optionalNamespaces"), Pt(this, "sessionProperties"), Pt(this, "scopedProperties"), Pt(this, "events", new Ja()), Pt(this, "rpcProviders", {}), Pt(this, "session"), Pt(this, "providerOpts"), Pt(this, "logger"), Pt(this, "uri"), Pt(this, "disableProviderPing", !1), this.providerOpts = e, this.logger = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ka(fn({ level: (e == null ? void 0 : e.logger) || cu })), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1;
  }
  static async init(e) {
    const s = new _h(e);
    return await s.initialize(), s;
  }
  async request(e, s, r) {
    const [i, n] = this.validateChain(s);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(i).request({ request: Wn({}, e), chainId: `${i}:${n}`, topic: this.session.topic, expiry: r });
  }
  sendAsync(e, s, r, i) {
    const n = (/* @__PURE__ */ new Date()).getTime();
    this.request(e, r, i).then((o) => s(null, po(n, o))).catch((o) => s(o, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e = this.session) == null ? void 0 : e.topic, reason: we("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
  }
  async authenticate(e, s) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e), await this.cleanupPendingPairings();
    const { uri: r, response: i } = await this.client.authenticate(e, s);
    r && (this.uri = r, this.events.emit("display_uri", r));
    const n = await i();
    if (this.session = n.session, this.session) {
      const o = mu(this.session.namespaces);
      this.namespaces = qn(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return n;
  }
  on(e, s) {
    this.events.on(e, s);
  }
  once(e, s) {
    this.events.once(e, s);
  }
  removeListener(e, s) {
    this.events.removeListener(e, s);
  }
  off(e, s) {
    this.events.off(e, s);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    const { uri: s, approval: r } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties });
    s && (this.uri = s, this.events.emit("display_uri", s));
    const i = await r();
    this.session = i;
    const n = mu(i.namespaces);
    return this.namespaces = qn(this.namespaces, n), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(e, s) {
    try {
      if (!this.session) return;
      const [r, i] = this.validateChain(e), n = this.getProvider(r);
      n.name === Or ? n.setDefaultChain(`${r}:${i}`, s) : n.setDefaultChain(i, s);
    } catch (r) {
      if (!/Please call connect/.test(r.message)) throw r;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const s = this.client.pairing.getAll();
    if (Ss(s)) {
      for (const r of s) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
      this.logger.info(`Inactive pairings cleared: ${s.length}`);
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
    var e, s;
    if (this.client = this.providerOpts.client || await j1.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || cu, relayUrl: this.providerOpts.relayUrl || q1, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (r) {
      throw this.logger.error("Failed to get session", r), new Error(`The provided session: ${(s = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : s.topic} doesn't exist in the Sign client`);
    }
    else {
      const r = this.client.session.getAll();
      this.session = r[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e = [...new Set(Object.keys(this.session.namespaces).map((s) => Rr(s)))];
    ea("client", this.client), ea("events", this.events), ea("disableProviderPing", this.disableProviderPing), e.forEach((s) => {
      if (!this.session) return;
      const r = NC(s, this.session), i = Ah(r), n = qn(this.namespaces, this.optionalNamespaces), o = ta(Wn({}, n[s]), { accounts: r, chains: i });
      switch (s) {
        case "eip155":
          this.rpcProviders[s] = new RC({ namespace: o });
          break;
        case "algorand":
          this.rpcProviders[s] = new WC({ namespace: o });
          break;
        case "solana":
          this.rpcProviders[s] = new LC({ namespace: o });
          break;
        case "cosmos":
          this.rpcProviders[s] = new FC({ namespace: o });
          break;
        case "polkadot":
          this.rpcProviders[s] = new PC({ namespace: o });
          break;
        case "cip34":
          this.rpcProviders[s] = new KC({ namespace: o });
          break;
        case "elrond":
          this.rpcProviders[s] = new JC({ namespace: o });
          break;
        case "multiversx":
          this.rpcProviders[s] = new ZC({ namespace: o });
          break;
        case "near":
          this.rpcProviders[s] = new tI({ namespace: o });
          break;
        case "tezos":
          this.rpcProviders[s] = new iI({ namespace: o });
          break;
        default:
          this.rpcProviders[Or] ? this.rpcProviders[Or].updateNamespace(o) : this.rpcProviders[Or] = new aI({ namespace: o });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      var s;
      const { topic: r } = e;
      r === ((s = this.session) == null ? void 0 : s.topic) && this.events.emit("session_ping", e);
    }), this.client.on("session_event", (e) => {
      var s;
      const { params: r, topic: i } = e;
      if (i !== ((s = this.session) == null ? void 0 : s.topic)) return;
      const { event: n } = r;
      if (n.name === "accountsChanged") {
        const o = n.data;
        o && Ss(o) && this.events.emit("accountsChanged", o.map(gu));
      } else if (n.name === "chainChanged") {
        const o = r.chainId, a = r.event.data, c = Rr(o), l = Qo(o) !== Qo(a) ? `${c}:${Qo(a)}` : o;
        this.onChainChanged(l);
      } else this.events.emit(n.name, n.data);
      this.events.emit("session_event", e);
    }), this.client.on("session_update", ({ topic: e, params: s }) => {
      var r, i;
      if (e !== ((r = this.session) == null ? void 0 : r.topic)) return;
      const { namespaces: n } = s, o = (i = this.client) == null ? void 0 : i.session.get(e);
      this.session = ta(Wn({}, o), { namespaces: n }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e, params: s });
    }), this.client.on("session_delete", async (e) => {
      var s;
      e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", ta(Wn({}, we("USER_DISCONNECTED")), { data: e.topic })));
    }), this.on($t.DEFAULT_CHAIN_CHANGED, (e) => {
      this.onChainChanged(e, !0);
    });
  }
  getProvider(e) {
    return this.rpcProviders[e] || this.rpcProviders[Or];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var s;
      this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e]);
    });
  }
  setNamespaces(e) {
    const { namespaces: s = {}, optionalNamespaces: r = {}, sessionProperties: i, scopedProperties: n } = e;
    this.optionalNamespaces = qn(s, r), this.sessionProperties = i, this.scopedProperties = n;
  }
  validateChain(e) {
    const [s, r] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [s, r];
    if (s && !Object.keys(this.namespaces || {}).map((o) => Rr(o)).includes(s)) throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
    if (s && r) return [s, r];
    const i = Rr(Object.keys(this.namespaces)[0]), n = this.rpcProviders[i].getDefaultChain();
    return [i, n];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  async onChainChanged(e, s = !1) {
    if (!this.namespaces) return;
    const [r, i] = this.validateChain(e);
    if (!i) return;
    this.updateNamespaceChain(r, i), this.events.emit("chainChanged", i);
    const n = this.getProvider(r).getDefaultChain();
    s || this.getProvider(r).setDefaultChain(i), this.emitAccountsChangedOnChainChange({ namespace: r, previousChainId: n, newChainId: e }), await this.persist("namespaces", this.namespaces);
  }
  emitAccountsChangedOnChainChange({ namespace: e, previousChainId: s, newChainId: r }) {
    var i, n;
    try {
      if (s === r) return;
      const o = (n = (i = this.session) == null ? void 0 : i.namespaces[e]) == null ? void 0 : n.accounts;
      if (!o) return;
      const a = o.filter((c) => c.includes(`${r}:`)).map(gu);
      if (!Ss(a)) return;
      this.events.emit("accountsChanged", a);
    } catch (o) {
      this.logger.warn("Failed to emit accountsChanged on chain change", o);
    }
  }
  updateNamespaceChain(e, s) {
    if (!this.namespaces) return;
    const r = this.namespaces[e] ? e : `${e}:${s}`, i = { chains: [], methods: [], events: [], defaultChain: s };
    this.namespaces[r] ? this.namespaces[r] && (this.namespaces[r].defaultChain = s) : this.namespaces[r] = i;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, await this.cleanupPendingPairings({ deletePairings: !0 }), await this.cleanupStorage();
  }
  async persist(e, s) {
    var r;
    const i = ((r = this.session) == null ? void 0 : r.topic) || "";
    await this.client.core.storage.setItem(`${Fn}/${e}${i}`, s);
  }
  async getFromStore(e) {
    var s;
    const r = ((s = this.session) == null ? void 0 : s.topic) || "";
    return await this.client.core.storage.getItem(`${Fn}/${e}${r}`);
  }
  async deleteFromStore(e) {
    var s;
    const r = ((s = this.session) == null ? void 0 : s.topic) || "";
    await this.client.core.storage.removeItem(`${Fn}/${e}${r}`);
  }
  async cleanupStorage() {
    var e;
    try {
      if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
      const s = await this.client.core.storage.getKeys();
      for (const r of s) r.startsWith(Fn) && await this.client.core.storage.removeItem(r);
    } catch (s) {
      this.logger.warn("Failed to cleanup storage", s);
    }
  }
};
function zn(t, e) {
  return F.getConnectorId(t) === e;
}
function fI(t) {
  const e = Array.from(m.state.chains.keys());
  let s = [];
  return t ? (s.push([t, m.state.chains.get(t)]), zn(t, z.CONNECTOR_ID.WALLET_CONNECT) ? e.forEach((r) => {
    r !== t && zn(r, z.CONNECTOR_ID.WALLET_CONNECT) && s.push([r, m.state.chains.get(r)]);
  }) : zn(t, z.CONNECTOR_ID.AUTH) && e.forEach((r) => {
    r !== t && zn(r, z.CONNECTOR_ID.AUTH) && s.push([r, m.state.chains.get(r)]);
  })) : s = Array.from(m.state.chains.entries()), s;
}
const ys = {
  EIP155: "eip155",
  CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
  CONNECTOR_TYPE_INJECTED: "INJECTED",
  CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED"
}, lo = {
  NetworkImageIds: {
    1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
    295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
    11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
    84532: "a18a7ecd-e307-4360-4746-283182228e00",
    1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
    130: "2257980a-3463-48c6-cbac-a42d2a956e00",
    10143: "0a728e83-bacb-46db-7844-948f05434900",
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
    7777777: "845c60df-d429-4991-e687-91ae45791600",
    42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
    8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
    1313161554: "3ff73439-a619-4894-9262-4470c773a100",
    2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
    2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
    "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
    "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200"
  },
  ConnectorImageIds: {
    [z.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [z.CONNECTOR_ID.COINBASE_SDK]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [z.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
    [z.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
    [z.CONNECTOR_ID.WALLET_CONNECT]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
    [z.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
  },
  ConnectorNamesMap: {
    [z.CONNECTOR_ID.INJECTED]: "Browser Wallet",
    [z.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
    [z.CONNECTOR_ID.COINBASE]: "Coinbase",
    [z.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
    [z.CONNECTOR_ID.LEDGER]: "Ledger",
    [z.CONNECTOR_ID.SAFE]: "Safe"
  }
}, uc = {
  getCaipTokens(t) {
    if (!t)
      return;
    const e = {};
    return Object.entries(t).forEach(([s, r]) => {
      e[`${ys.EIP155}:${s}`] = r;
    }), e;
  },
  isLowerCaseMatch(t, e) {
    return (t == null ? void 0 : t.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
  }
};
new AbortController();
const Pr = {
  UniversalProviderErrors: {
    UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
      message: "Unauthorized: origin not allowed",
      alertErrorKey: "INVALID_APP_CONFIGURATION"
    },
    JWT_VALIDATION_ERROR: {
      message: "JWT validation error: JWT Token is not yet valid",
      alertErrorKey: "JWT_TOKEN_NOT_VALID"
    },
    INVALID_KEY: {
      message: "Unauthorized: invalid key",
      alertErrorKey: "INVALID_PROJECT_ID"
    }
  },
  ALERT_ERRORS: {
    SWITCH_NETWORK_NOT_FOUND: {
      shortMessage: "Network Not Found",
      longMessage: "Network not found - please make sure it is included in 'networks' array in createAppKit function"
    },
    INVALID_APP_CONFIGURATION: {
      shortMessage: "Invalid App Configuration",
      longMessage: () => `Origin ${gI() ? window.origin : "unknown"} not found on Allowlist - update configuration on cloud.reown.com`
    },
    IFRAME_LOAD_FAILED: {
      shortMessage: "Network Error - Could not load embedded wallet",
      longMessage: () => "There was an issue loading the embedded wallet. Please try again later."
    },
    IFRAME_REQUEST_TIMEOUT: {
      shortMessage: "Embedded Wallet Request Timed Out",
      longMessage: () => "There was an issue doing the request to the embedded wallet. Please try again later."
    },
    UNVERIFIED_DOMAIN: {
      shortMessage: "Invalid App Configuration",
      longMessage: () => "There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"
    },
    JWT_TOKEN_NOT_VALID: {
      shortMessage: "Session Expired",
      longMessage: "Invalid session found on UniversalProvider - please check your time settings and connect again"
    },
    INVALID_PROJECT_ID: {
      shortMessage: "Invalid App Configuration",
      longMessage: "Invalid Project ID - update configuration"
    },
    PROJECT_ID_NOT_CONFIGURED: {
      shortMessage: "Project ID Not Configured",
      longMessage: "Project ID Not Configured - update configuration on cloud.reown.com"
    }
  }
};
function gI() {
  return typeof window < "u";
}
const mI = {
  createLogger(t, e = "error") {
    const s = fn({
      level: e
    }), { logger: r } = Mu({
      opts: s
    });
    return r.error = (...i) => {
      for (const n of i)
        if (n instanceof Error) {
          t(n, ...i);
          return;
        }
      t(void 0, ...i);
    }, r;
  }
}, wI = "rpc.walletconnect.org";
function Eu(t, e) {
  const s = new URL("https://rpc.walletconnect.org/v1/");
  return s.searchParams.set("chainId", t), s.searchParams.set("projectId", e), s.toString();
}
const sa = [
  "near:mainnet",
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  "eip155:1101",
  "eip155:56",
  "eip155:42161",
  "eip155:7777777",
  "eip155:59144",
  "eip155:324",
  "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
  "eip155:5000",
  "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
  "eip155:80084",
  "eip155:5003",
  "eip155:100",
  "eip155:8453",
  "eip155:42220",
  "eip155:1313161555",
  "eip155:17000",
  "eip155:1",
  "eip155:300",
  "eip155:1313161554",
  "eip155:1329",
  "eip155:84532",
  "eip155:421614",
  "eip155:11155111",
  "eip155:8217",
  "eip155:43114",
  "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
  "eip155:999999999",
  "eip155:11155420",
  "eip155:80002",
  "eip155:97",
  "eip155:43113",
  "eip155:137",
  "eip155:10",
  "eip155:1301",
  "bip122:000000000019d6689c085ae165831e93",
  "bip122:000000000933ea01ad0ee984209779ba"
], Tr = {
  extendRpcUrlWithProjectId(t, e) {
    let s = !1;
    try {
      s = new URL(t).host === wI;
    } catch {
      s = !1;
    }
    if (s) {
      const r = new URL(t);
      return r.searchParams.has("projectId") || r.searchParams.set("projectId", e), r.toString();
    }
    return t;
  },
  isCaipNetwork(t) {
    return "chainNamespace" in t && "caipNetworkId" in t;
  },
  getChainNamespace(t) {
    return this.isCaipNetwork(t) ? t.chainNamespace : z.CHAIN.EVM;
  },
  getCaipNetworkId(t) {
    return this.isCaipNetwork(t) ? t.caipNetworkId : `${z.CHAIN.EVM}:${t.id}`;
  },
  getDefaultRpcUrl(t, e, s) {
    var i, n, o;
    const r = (o = (n = (i = t.rpcUrls) == null ? void 0 : i.default) == null ? void 0 : n.http) == null ? void 0 : o[0];
    return sa.includes(e) ? Eu(e, s) : r || "";
  },
  extendCaipNetwork(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: r }) {
    var h, p, g, f, w;
    const i = this.getChainNamespace(t), n = this.getCaipNetworkId(t), o = (h = t.rpcUrls.default.http) == null ? void 0 : h[0], a = this.getDefaultRpcUrl(t, n, s), c = ((f = (g = (p = t == null ? void 0 : t.rpcUrls) == null ? void 0 : p.chainDefault) == null ? void 0 : g.http) == null ? void 0 : f[0]) || o, l = ((w = r == null ? void 0 : r[n]) == null ? void 0 : w.map((y) => y.url)) || [], u = [...l, a], d = [...l];
    return c && !d.includes(c) && d.push(c), {
      ...t,
      chainNamespace: i,
      caipNetworkId: n,
      assets: {
        imageId: lo.NetworkImageIds[t.id],
        imageUrl: e == null ? void 0 : e[t.id]
      },
      rpcUrls: {
        ...t.rpcUrls,
        default: {
          http: u
        },
        chainDefault: {
          http: d
        }
      }
    };
  },
  extendCaipNetworks(t, { customNetworkImageUrls: e, projectId: s, customRpcUrls: r }) {
    return t.map((i) => Tr.extendCaipNetwork(i, {
      customNetworkImageUrls: e,
      customRpcUrls: r,
      projectId: s
    }));
  },
  getViemTransport(t, e, s) {
    var i, n, o;
    const r = [];
    return s == null || s.forEach((a) => {
      r.push(xn(a.url, a.config));
    }), sa.includes(t.caipNetworkId) && r.push(xn(Eu(t.caipNetworkId, e), {
      fetchOptions: {
        headers: {
          "Content-Type": "text/plain"
        }
      }
    })), (o = (n = (i = t == null ? void 0 : t.rpcUrls) == null ? void 0 : i.default) == null ? void 0 : n.http) == null || o.forEach((a) => {
      r.push(xn(a));
    }), bc(r);
  },
  extendWagmiTransports(t, e, s) {
    if (sa.includes(t.caipNetworkId)) {
      const r = this.getDefaultRpcUrl(t, t.caipNetworkId, e);
      return bc([s, xn(r)]);
    }
    return s;
  },
  getUnsupportedNetwork(t) {
    return {
      id: t.split(":")[1],
      caipNetworkId: t,
      name: z.UNSUPPORTED_NETWORK_NAME,
      chainNamespace: t.split(":")[0],
      nativeCurrency: {
        name: "",
        decimals: 0,
        symbol: ""
      },
      rpcUrls: {
        default: {
          http: []
        }
      }
    };
  },
  getCaipNetworkFromStorage(t) {
    var c;
    const e = q.getActiveCaipNetworkId(), s = m.getAllRequestedCaipNetworks(), r = Array.from(((c = m.state.chains) == null ? void 0 : c.keys()) || []), i = e == null ? void 0 : e.split(":")[0], n = i ? r.includes(i) : !1, o = s == null ? void 0 : s.find((l) => l.caipNetworkId === e);
    return n && !o && e ? this.getUnsupportedNetwork(e) : o || t || (s == null ? void 0 : s[0]);
  }
}, uo = {
  eip155: void 0,
  solana: void 0,
  polkadot: void 0,
  bip122: void 0,
  cosmos: void 0
}, ct = _e({
  providers: { ...uo },
  providerIds: { ...uo }
}), Se = {
  state: ct,
  subscribeKey(t, e) {
    return et(ct, t, e);
  },
  subscribe(t) {
    return Qe(ct, () => {
      t(ct);
    });
  },
  subscribeProviders(t) {
    return Qe(ct.providers, () => t(ct.providers));
  },
  setProvider(t, e) {
    e && (ct.providers[t] = Zs(e));
  },
  getProvider(t) {
    return ct.providers[t];
  },
  setProviderId(t, e) {
    e && (ct.providerIds[t] = e);
  },
  getProviderId(t) {
    if (t)
      return ct.providerIds[t];
  },
  reset() {
    ct.providers = { ...uo }, ct.providerIds = { ...uo };
  },
  resetChain(t) {
    ct.providers[t] = void 0, ct.providerIds[t] = void 0;
  }
}, yI = {
  SECURE_SITE_ORIGIN: (typeof process < "u" && typeof process.env < "u" ? process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
  VIEW_DIRECTION: {
    Next: "next",
    Prev: "prev"
  },
  DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
  ANIMATION_DURATIONS: {
    HeaderText: 120,
    ModalHeight: 150,
    ViewTransition: 150
  }
}, Wa = {
  filterOutDuplicatesByRDNS(t) {
    const e = T.state.enableEIP6963 ? F.state.connectors : [], s = q.getRecentWallets(), r = e.map((a) => {
      var c;
      return (c = a.info) == null ? void 0 : c.rdns;
    }).filter(Boolean), i = s.map((a) => a.rdns).filter(Boolean), n = r.concat(i);
    if (n.includes("io.metamask.mobile") && X.isMobile()) {
      const a = n.indexOf("io.metamask.mobile");
      n[a] = "io.metamask";
    }
    return t.filter((a) => !n.includes(String(a == null ? void 0 : a.rdns)));
  },
  filterOutDuplicatesByIds(t) {
    const e = F.state.connectors.filter((a) => a.type === "ANNOUNCED" || a.type === "INJECTED"), s = q.getRecentWallets(), r = e.map((a) => a.explorerId), i = s.map((a) => a.id), n = r.concat(i);
    return t.filter((a) => !n.includes(a == null ? void 0 : a.id));
  },
  filterOutDuplicateWallets(t) {
    const e = this.filterOutDuplicatesByRDNS(t);
    return this.filterOutDuplicatesByIds(e);
  },
  markWalletsAsInstalled(t) {
    const { connectors: e } = F.state, { featuredWalletIds: s } = T.state, r = e.filter((o) => o.type === "ANNOUNCED").reduce((o, a) => {
      var c;
      return (c = a.info) != null && c.rdns && (o[a.info.rdns] = !0), o;
    }, {});
    return t.map((o) => ({
      ...o,
      installed: !!o.rdns && !!r[o.rdns ?? ""]
    })).sort((o, a) => {
      const c = Number(a.installed) - Number(o.installed);
      if (c !== 0)
        return c;
      if (s != null && s.length) {
        const l = s.indexOf(o.id), u = s.indexOf(a.id);
        if (l !== -1 && u !== -1)
          return l - u;
        if (l !== -1)
          return -1;
        if (u !== -1)
          return 1;
      }
      return 0;
    });
  },
  getConnectOrderMethod(t, e) {
    var c;
    const s = (t == null ? void 0 : t.connectMethodsOrder) || ((c = T.state.features) == null ? void 0 : c.connectMethodsOrder), r = e || F.state.connectors;
    if (s)
      return s;
    const { injected: i, announced: n } = Zn.getConnectorsByType(r, K.state.recommended, K.state.featured), o = i.filter(Zn.showConnector), a = n.filter(Zn.showConnector);
    return o.length || a.length ? ["wallet", "email", "social"] : yI.DEFAULT_CONNECT_METHOD_ORDER;
  },
  isExcluded(t) {
    const e = !!t.rdns && K.state.excludedWallets.some((r) => r.rdns === t.rdns), s = !!t.name && K.state.excludedWallets.some((r) => uc.isLowerCaseMatch(r.name, t.name));
    return e || s;
  }
}, Zn = {
  getConnectorsByType(t, e, s) {
    const { customWallets: r } = T.state, i = q.getRecentWallets(), n = Wa.filterOutDuplicateWallets(e), o = Wa.filterOutDuplicateWallets(s), a = t.filter((d) => d.type === "MULTI_CHAIN"), c = t.filter((d) => d.type === "ANNOUNCED"), l = t.filter((d) => d.type === "INJECTED"), u = t.filter((d) => d.type === "EXTERNAL");
    return {
      custom: r,
      recent: i,
      external: u,
      multiChain: a,
      announced: c,
      injected: l,
      recommended: n,
      featured: o
    };
  },
  showConnector(t) {
    var i;
    const e = (i = t.info) == null ? void 0 : i.rdns, s = !!e && K.state.excludedWallets.some((n) => !!n.rdns && n.rdns === e), r = !!t.name && K.state.excludedWallets.some((n) => uc.isLowerCaseMatch(n.name, t.name));
    return !(t.type === "INJECTED" && (t.name === "Browser Wallet" && (!X.isMobile() || X.isMobile() && !e && !Y.checkInstalled()) || s || r) || (t.type === "ANNOUNCED" || t.type === "EXTERNAL") && (s || r));
  },
  getIsConnectedWithWC() {
    return Array.from(m.state.chains.values()).some((s) => F.getConnectorId(s.namespace) === z.CONNECTOR_ID.WALLET_CONNECT);
  },
  getConnectorTypeOrder({ recommended: t, featured: e, custom: s, recent: r, announced: i, injected: n, multiChain: o, external: a, overriddenConnectors: c = ((l) => (l = T.state.features) == null ? void 0 : l.connectorTypeOrder)() ?? [] }) {
    const u = Zn.getIsConnectedWithWC(), p = [
      { type: "walletConnect", isEnabled: T.state.enableWalletConnect && !u },
      { type: "recent", isEnabled: r.length > 0 },
      { type: "injected", isEnabled: [...n, ...i, ...o].length > 0 },
      { type: "featured", isEnabled: e.length > 0 },
      { type: "custom", isEnabled: s && s.length > 0 },
      { type: "external", isEnabled: a.length > 0 },
      { type: "recommended", isEnabled: t.length > 0 }
    ].filter((y) => y.isEnabled), g = new Set(p.map((y) => y.type)), f = c.filter((y) => g.has(y)).map((y) => ({ type: y, isEnabled: !0 })), w = p.filter(({ type: y }) => !f.some(({ type: v }) => v === y));
    return Array.from(new Set([...f, ...w].map(({ type: y }) => y)));
  }
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qn = globalThis, dc = Qn.ShadowRoot && (Qn.ShadyCSS === void 0 || Qn.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, hc = Symbol(), Cu = /* @__PURE__ */ new WeakMap();
let Sh = class {
  constructor(e, s, r) {
    if (this._$cssResult$ = !0, r !== hc) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = s;
  }
  get styleSheet() {
    let e = this.o;
    const s = this.t;
    if (dc && e === void 0) {
      const r = s !== void 0 && s.length === 1;
      r && (e = Cu.get(s)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Cu.set(s, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ot = (t) => new Sh(typeof t == "string" ? t : t + "", void 0, hc), Lr = (t, ...e) => {
  const s = t.length === 1 ? t[0] : e.reduce((r, i, n) => r + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[n + 1], t[0]);
  return new Sh(s, t, hc);
}, bI = (t, e) => {
  if (dc) t.adoptedStyleSheets = e.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  else for (const s of e) {
    const r = document.createElement("style"), i = Qn.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = s.cssText, t.appendChild(r);
  }
}, Iu = dc ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let s = "";
  for (const r of e.cssRules) s += r.cssText;
  return Ot(s);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: vI, defineProperty: EI, getOwnPropertyDescriptor: CI, getOwnPropertyNames: II, getOwnPropertySymbols: AI, getPrototypeOf: NI } = Object, Os = globalThis, Au = Os.trustedTypes, _I = Au ? Au.emptyScript : "", ra = Os.reactiveElementPolyfillSupport, Ri = (t, e) => t, za = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? _I : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let s = t;
  switch (e) {
    case Boolean:
      s = t !== null;
      break;
    case Number:
      s = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        s = JSON.parse(t);
      } catch {
        s = null;
      }
  }
  return s;
} }, Ph = (t, e) => !vI(t, e), Nu = { attribute: !0, type: String, converter: za, reflect: !1, useDefault: !1, hasChanged: Ph };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Os.litPropertyMetadata ?? (Os.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let xr = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, s = Nu) {
    if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(e, s), !s.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(e, r, s);
      i !== void 0 && EI(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, s, r) {
    const { get: i, set: n } = CI(this.prototype, e) ?? { get() {
      return this[s];
    }, set(o) {
      this[s] = o;
    } };
    return { get: i, set(o) {
      const a = i == null ? void 0 : i.call(this);
      n == null || n.call(this, o), this.requestUpdate(e, a, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Nu;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ri("elementProperties"))) return;
    const e = NI(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ri("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ri("properties"))) {
      const s = this.properties, r = [...II(s), ...AI(s)];
      for (const i of r) this.createProperty(i, s[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const s = litPropertyMetadata.get(e);
      if (s !== void 0) for (const [r, i] of s) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [s, r] of this.elementProperties) {
      const i = this._$Eu(s, r);
      i !== void 0 && this._$Eh.set(i, s);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const s = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const i of r) s.unshift(Iu(i));
    } else e !== void 0 && s.push(Iu(e));
    return s;
  }
  static _$Eu(e, s) {
    const r = s.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((s) => this.enableUpdating = s), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((s) => s(this));
  }
  addController(e) {
    var s;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((s = e.hostConnected) == null || s.call(e));
  }
  removeController(e) {
    var s;
    (s = this._$EO) == null || s.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
    for (const r of s.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return bI(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((s) => {
      var r;
      return (r = s.hostConnected) == null ? void 0 : r.call(s);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var r;
      return (r = s.hostDisconnected) == null ? void 0 : r.call(s);
    });
  }
  attributeChangedCallback(e, s, r) {
    this._$AK(e, r);
  }
  _$ET(e, s) {
    var n;
    const r = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, r);
    if (i !== void 0 && r.reflect === !0) {
      const o = (((n = r.converter) == null ? void 0 : n.toAttribute) !== void 0 ? r.converter : za).toAttribute(s, r.type);
      this._$Em = e, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(e, s) {
    var n, o;
    const r = this.constructor, i = r._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const a = r.getPropertyOptions(i), c = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((n = a.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? a.converter : za;
      this._$Em = i, this[i] = c.fromAttribute(s, a.type) ?? ((o = this._$Ej) == null ? void 0 : o.get(i)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(e, s, r) {
    var i;
    if (e !== void 0) {
      const n = this.constructor, o = this[e];
      if (r ?? (r = n.getPropertyOptions(e)), !((r.hasChanged ?? Ph)(o, s) || r.useDefault && r.reflect && o === ((i = this._$Ej) == null ? void 0 : i.get(e)) && !this.hasAttribute(n._$Eu(e, r)))) return;
      this.C(e, s, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, s, { useDefault: r, reflect: i, wrapped: n }, o) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, o ?? s ?? this[e]), n !== !0 || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (s = void 0), this._$AL.set(e, s)), i === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (s) {
      Promise.reject(s);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, o] of this._$Ep) this[n] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, o] of i) {
        const { wrapped: a } = o, c = this[n];
        a !== !0 || this._$AL.has(n) || c === void 0 || this.C(n, void 0, o, c);
      }
    }
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), (r = this._$EO) == null || r.forEach((i) => {
        var n;
        return (n = i.hostUpdate) == null ? void 0 : n.call(i);
      }), this.update(s)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(s);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var s;
    (s = this._$EO) == null || s.forEach((r) => {
      var i;
      return (i = r.hostUpdated) == null ? void 0 : i.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((s) => this._$ET(s, this[s]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
xr.elementStyles = [], xr.shadowRootOptions = { mode: "open" }, xr[Ri("elementProperties")] = /* @__PURE__ */ new Map(), xr[Ri("finalized")] = /* @__PURE__ */ new Map(), ra == null || ra({ ReactiveElement: xr }), (Os.reactiveElementVersions ?? (Os.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ui = globalThis, ho = Ui.trustedTypes, _u = ho ? ho.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Oh = "$lit$", Cs = `lit$${Math.random().toFixed(9).slice(2)}$`, Th = "?" + Cs, SI = `<${Th}>`, rr = document, dn = () => rr.createComment(""), hn = (t) => t === null || typeof t != "object" && typeof t != "function", pc = Array.isArray, PI = (t) => pc(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", ia = `[ 	
\f\r]`, yi = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Su = /-->/g, Pu = />/g, Ls = RegExp(`>|${ia}(?:([^\\s"'>=/]+)(${ia}*=${ia}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ou = /'/g, Tu = /"/g, xh = /^(?:script|style|textarea|title)$/i, kh = (t) => (e, ...s) => ({ _$litType$: t, strings: e, values: s }), vA = kh(1), EA = kh(2), Xr = Symbol.for("lit-noChange"), We = Symbol.for("lit-nothing"), xu = /* @__PURE__ */ new WeakMap(), Vs = rr.createTreeWalker(rr, 129);
function $h(t, e) {
  if (!pc(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return _u !== void 0 ? _u.createHTML(e) : e;
}
const OI = (t, e) => {
  const s = t.length - 1, r = [];
  let i, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = yi;
  for (let a = 0; a < s; a++) {
    const c = t[a];
    let l, u, d = -1, h = 0;
    for (; h < c.length && (o.lastIndex = h, u = o.exec(c), u !== null); ) h = o.lastIndex, o === yi ? u[1] === "!--" ? o = Su : u[1] !== void 0 ? o = Pu : u[2] !== void 0 ? (xh.test(u[2]) && (i = RegExp("</" + u[2], "g")), o = Ls) : u[3] !== void 0 && (o = Ls) : o === Ls ? u[0] === ">" ? (o = i ?? yi, d = -1) : u[1] === void 0 ? d = -2 : (d = o.lastIndex - u[2].length, l = u[1], o = u[3] === void 0 ? Ls : u[3] === '"' ? Tu : Ou) : o === Tu || o === Ou ? o = Ls : o === Su || o === Pu ? o = yi : (o = Ls, i = void 0);
    const p = o === Ls && t[a + 1].startsWith("/>") ? " " : "";
    n += o === yi ? c + SI : d >= 0 ? (r.push(l), c.slice(0, d) + Oh + c.slice(d) + Cs + p) : c + Cs + (d === -2 ? a : p);
  }
  return [$h(t, n + (t[s] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class pn {
  constructor({ strings: e, _$litType$: s }, r) {
    let i;
    this.parts = [];
    let n = 0, o = 0;
    const a = e.length - 1, c = this.parts, [l, u] = OI(e, s);
    if (this.el = pn.createElement(l, r), Vs.currentNode = this.el.content, s === 2 || s === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (i = Vs.nextNode()) !== null && c.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const d of i.getAttributeNames()) if (d.endsWith(Oh)) {
          const h = u[o++], p = i.getAttribute(d).split(Cs), g = /([.?@])?(.*)/.exec(h);
          c.push({ type: 1, index: n, name: g[2], strings: p, ctor: g[1] === "." ? xI : g[1] === "?" ? kI : g[1] === "@" ? $I : Ao }), i.removeAttribute(d);
        } else d.startsWith(Cs) && (c.push({ type: 6, index: n }), i.removeAttribute(d));
        if (xh.test(i.tagName)) {
          const d = i.textContent.split(Cs), h = d.length - 1;
          if (h > 0) {
            i.textContent = ho ? ho.emptyScript : "";
            for (let p = 0; p < h; p++) i.append(d[p], dn()), Vs.nextNode(), c.push({ type: 2, index: ++n });
            i.append(d[h], dn());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Th) c.push({ type: 2, index: n });
      else {
        let d = -1;
        for (; (d = i.data.indexOf(Cs, d + 1)) !== -1; ) c.push({ type: 7, index: n }), d += Cs.length - 1;
      }
      n++;
    }
  }
  static createElement(e, s) {
    const r = rr.createElement("template");
    return r.innerHTML = e, r;
  }
}
function Zr(t, e, s = t, r) {
  var o, a;
  if (e === Xr) return e;
  let i = r !== void 0 ? (o = s._$Co) == null ? void 0 : o[r] : s._$Cl;
  const n = hn(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), n === void 0 ? i = void 0 : (i = new n(t), i._$AT(t, s, r)), r !== void 0 ? (s._$Co ?? (s._$Co = []))[r] = i : s._$Cl = i), i !== void 0 && (e = Zr(t, i._$AS(t, e.values), i, r)), e;
}
class TI {
  constructor(e, s) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = s;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: s }, parts: r } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? rr).importNode(s, !0);
    Vs.currentNode = i;
    let n = Vs.nextNode(), o = 0, a = 0, c = r[0];
    for (; c !== void 0; ) {
      if (o === c.index) {
        let l;
        c.type === 2 ? l = new An(n, n.nextSibling, this, e) : c.type === 1 ? l = new c.ctor(n, c.name, c.strings, this, e) : c.type === 6 && (l = new RI(n, this, e)), this._$AV.push(l), c = r[++a];
      }
      o !== (c == null ? void 0 : c.index) && (n = Vs.nextNode(), o++);
    }
    return Vs.currentNode = rr, i;
  }
  p(e) {
    let s = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, s), s += r.strings.length - 2) : r._$AI(e[s])), s++;
  }
}
class An {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, s, r, i) {
    this.type = 2, this._$AH = We, this._$AN = void 0, this._$AA = e, this._$AB = s, this._$AM = r, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const s = this._$AM;
    return s !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = s.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, s = this) {
    e = Zr(this, e, s), hn(e) ? e === We || e == null || e === "" ? (this._$AH !== We && this._$AR(), this._$AH = We) : e !== this._$AH && e !== Xr && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : PI(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== We && hn(this._$AH) ? this._$AA.nextSibling.data = e : this.T(rr.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var n;
    const { values: s, _$litType$: r } = e, i = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = pn.createElement($h(r.h, r.h[0]), this.options)), r);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(s);
    else {
      const o = new TI(i, this), a = o.u(this.options);
      o.p(s), this.T(a), this._$AH = o;
    }
  }
  _$AC(e) {
    let s = xu.get(e.strings);
    return s === void 0 && xu.set(e.strings, s = new pn(e)), s;
  }
  k(e) {
    pc(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let r, i = 0;
    for (const n of e) i === s.length ? s.push(r = new An(this.O(dn()), this.O(dn()), this, this.options)) : r = s[i], r._$AI(n), i++;
    i < s.length && (this._$AR(r && r._$AB.nextSibling, i), s.length = i);
  }
  _$AR(e = this._$AA.nextSibling, s) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, s); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var s;
    this._$AM === void 0 && (this._$Cv = e, (s = this._$AP) == null || s.call(this, e));
  }
}
class Ao {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, s, r, i, n) {
    this.type = 1, this._$AH = We, this._$AN = void 0, this.element = e, this.name = s, this._$AM = i, this.options = n, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = We;
  }
  _$AI(e, s = this, r, i) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) e = Zr(this, e, s, 0), o = !hn(e) || e !== this._$AH && e !== Xr, o && (this._$AH = e);
    else {
      const a = e;
      let c, l;
      for (e = n[0], c = 0; c < n.length - 1; c++) l = Zr(this, a[r + c], s, c), l === Xr && (l = this._$AH[c]), o || (o = !hn(l) || l !== this._$AH[c]), l === We ? e = We : e !== We && (e += (l ?? "") + n[c + 1]), this._$AH[c] = l;
    }
    o && !i && this.j(e);
  }
  j(e) {
    e === We ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class xI extends Ao {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === We ? void 0 : e;
  }
}
class kI extends Ao {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== We);
  }
}
class $I extends Ao {
  constructor(e, s, r, i, n) {
    super(e, s, r, i, n), this.type = 5;
  }
  _$AI(e, s = this) {
    if ((e = Zr(this, e, s, 0) ?? We) === Xr) return;
    const r = this._$AH, i = e === We && r !== We || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, n = e !== We && (r === We || i);
    i && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var s;
    typeof this._$AH == "function" ? this._$AH.call(((s = this.options) == null ? void 0 : s.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class RI {
  constructor(e, s, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Zr(this, e);
  }
}
const na = Ui.litHtmlPolyfillSupport;
na == null || na(pn, An), (Ui.litHtmlVersions ?? (Ui.litHtmlVersions = [])).push("3.3.0");
const UI = (t, e, s) => {
  const r = (s == null ? void 0 : s.renderBefore) ?? e;
  let i = r._$litPart$;
  if (i === void 0) {
    const n = (s == null ? void 0 : s.renderBefore) ?? null;
    r._$litPart$ = i = new An(e.insertBefore(dn(), n), n, void 0, s ?? {});
  }
  return i._$AI(t), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xs = globalThis;
class eo extends xr {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var s;
    const e = super.createRenderRoot();
    return (s = this.renderOptions).renderBefore ?? (s.renderBefore = e.firstChild), e;
  }
  update(e) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = UI(s, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return Xr;
  }
}
var Uu;
eo._$litElement$ = !0, eo.finalized = !0, (Uu = Xs.litElementHydrateSupport) == null || Uu.call(Xs, { LitElement: eo });
const oa = Xs.litElementPolyfillSupport;
oa == null || oa({ LitElement: eo });
(Xs.litElementVersions ?? (Xs.litElementVersions = [])).push("4.2.0");
let Di, Ts, xs;
function CA(t, e) {
  Di = document.createElement("style"), Ts = document.createElement("style"), xs = document.createElement("style"), Di.textContent = Mr(t).core.cssText, Ts.textContent = Mr(t).dark.cssText, xs.textContent = Mr(t).light.cssText, document.head.appendChild(Di), document.head.appendChild(Ts), document.head.appendChild(xs), Rh(e);
}
function Rh(t) {
  Ts && xs && (t === "light" ? (Ts.removeAttribute("media"), xs.media = "enabled") : (xs.removeAttribute("media"), Ts.media = "enabled"));
}
function DI(t) {
  Di && Ts && xs && (Di.textContent = Mr(t).core.cssText, Ts.textContent = Mr(t).dark.cssText, xs.textContent = Mr(t).light.cssText);
}
function Mr(t) {
  return {
    core: Lr`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${Ot(t != null && t["--w3m-color-mix-strength"] ? `${t["--w3m-color-mix-strength"]}%` : "0%")};
        --w3m-font-family: ${Ot((t == null ? void 0 : t["--w3m-font-family"]) || "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Ot((t == null ? void 0 : t["--w3m-font-size-master"]) || "10px")};
        --w3m-border-radius-master: ${Ot((t == null ? void 0 : t["--w3m-border-radius-master"]) || "4px")};
        --w3m-z-index: ${Ot((t == null ? void 0 : t["--w3m-z-index"]) || 999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
    light: Lr`
      :root {
        --w3m-color-mix: ${Ot((t == null ? void 0 : t["--w3m-color-mix"]) || "#fff")};
        --w3m-accent: ${Ot(Is(t, "dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${Ot(Is(t, "dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
    dark: Lr`
      :root {
        --w3m-color-mix: ${Ot((t == null ? void 0 : t["--w3m-color-mix"]) || "#000")};
        --w3m-accent: ${Ot(Is(t, "light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${Ot(Is(t, "light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `
  };
}
const IA = Lr`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`, AA = Lr`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`, NA = Lr`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`, Ai = {
  ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
  ERROR_CODE_DEFAULT: 5e3,
  ERROR_INVALID_CHAIN_ID: 32603,
  DEFAULT_ALLOWED_ANCESTORS: [
    "http://localhost:*",
    "https://*.pages.dev",
    "https://*.vercel.app",
    "https://*.ngrok-free.app",
    "https://secure-mobile.walletconnect.com",
    "https://secure-mobile.walletconnect.org"
  ]
};
function Nn(t) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...t
  };
}
const ku = Nn({
  id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  name: "Solana",
  network: "solana-mainnet",
  nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  },
  blockExplorers: { default: { name: "Solscan", url: "https://solscan.io" } },
  testnet: !1,
  chainNamespace: "solana",
  caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"
}), $u = Nn({
  id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
  name: "Solana Devnet",
  network: "solana-devnet",
  nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  },
  blockExplorers: { default: { name: "Solscan", url: "https://solscan.io" } },
  testnet: !0,
  chainNamespace: "solana",
  caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
  deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"
});
Nn({
  id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
  name: "Solana Testnet",
  network: "solana-testnet",
  nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  },
  blockExplorers: { default: { name: "Solscan", url: "https://solscan.io" } },
  testnet: !0,
  chainNamespace: "solana",
  caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"
});
Nn({
  id: "000000000019d6689c085ae165831e93",
  caipNetworkId: "bip122:000000000019d6689c085ae165831e93",
  chainNamespace: "bip122",
  name: "Bitcoin",
  nativeCurrency: {
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 8
  },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  }
});
Nn({
  id: "000000000933ea01ad0ee984209779ba",
  caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba",
  chainNamespace: "bip122",
  name: "Bitcoin Testnet",
  nativeCurrency: {
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 8
  },
  rpcUrls: {
    default: { http: ["https://rpc.walletconnect.org/v1"] }
  },
  testnet: !0
});
const LI = {
  solana: [
    "solana_signMessage",
    "solana_signTransaction",
    "solana_requestAccounts",
    "solana_getAccounts",
    "solana_signAllTransactions",
    "solana_signAndSendTransaction"
  ],
  eip155: [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    // EIP-5792
    "wallet_getCallsStatus",
    "wallet_showCallsStatus",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    // EIP-7715
    "wallet_grantPermissions",
    "wallet_revokePermissions",
    //EIP-7811
    "wallet_getAssets"
  ],
  bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"]
}, to = {
  getMethodsByChainNamespace(t) {
    return LI[t] || [];
  },
  createDefaultNamespace(t) {
    return {
      methods: this.getMethodsByChainNamespace(t),
      events: ["accountsChanged", "chainChanged"],
      chains: [],
      rpcMap: {}
    };
  },
  applyNamespaceOverrides(t, e) {
    if (!e)
      return { ...t };
    const s = { ...t }, r = /* @__PURE__ */ new Set();
    if (e.methods && Object.keys(e.methods).forEach((i) => r.add(i)), e.chains && Object.keys(e.chains).forEach((i) => r.add(i)), e.events && Object.keys(e.events).forEach((i) => r.add(i)), e.rpcMap && Object.keys(e.rpcMap).forEach((i) => {
      const [n] = i.split(":");
      n && r.add(n);
    }), r.forEach((i) => {
      s[i] || (s[i] = this.createDefaultNamespace(i));
    }), e.methods && Object.entries(e.methods).forEach(([i, n]) => {
      s[i] && (s[i].methods = n);
    }), e.chains && Object.entries(e.chains).forEach(([i, n]) => {
      s[i] && (s[i].chains = n);
    }), e.events && Object.entries(e.events).forEach(([i, n]) => {
      s[i] && (s[i].events = n);
    }), e.rpcMap) {
      const i = /* @__PURE__ */ new Set();
      Object.entries(e.rpcMap).forEach(([n, o]) => {
        const [a, c] = n.split(":");
        !a || !c || !s[a] || (s[a].rpcMap || (s[a].rpcMap = {}), i.has(a) || (s[a].rpcMap = {}, i.add(a)), s[a].rpcMap[c] = o);
      });
    }
    return s;
  },
  createNamespaces(t, e) {
    const s = t.reduce((r, i) => {
      const { id: n, chainNamespace: o, rpcUrls: a } = i, c = a.default.http[0];
      r[o] || (r[o] = this.createDefaultNamespace(o));
      const l = `${o}:${n}`, u = r[o];
      switch (u.chains.push(l), l) {
        case ku.caipNetworkId:
          u.chains.push(ku.deprecatedCaipNetworkId);
          break;
        case $u.caipNetworkId:
          u.chains.push($u.deprecatedCaipNetworkId);
          break;
      }
      return u != null && u.rpcMap && c && (u.rpcMap[n] = c), r;
    }, {});
    return this.applyNamespaceOverrides(s, e);
  },
  resolveReownName: async (t) => {
    var r;
    const e = await Pi.resolveName(t);
    return ((r = (Object.values(e == null ? void 0 : e.addresses) || [])[0]) == null ? void 0 : r.address) || !1;
  },
  getChainsFromNamespaces(t = {}) {
    return Object.values(t).flatMap((e) => {
      const s = e.chains || [], r = e.accounts.map((i) => {
        const [n, o] = i.split(":");
        return `${n}:${o}`;
      });
      return Array.from(/* @__PURE__ */ new Set([...s, ...r]));
    });
  },
  isSessionEventData(t) {
    return typeof t == "object" && t !== null && "id" in t && "topic" in t && "params" in t && typeof t.params == "object" && t.params !== null && "chainId" in t.params && "event" in t.params && typeof t.params.event == "object" && t.params.event !== null;
  },
  isOriginAllowed(t, e, s) {
    for (const r of [...e, ...s])
      if (r.includes("*")) {
        const n = `^${r.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&").replace(/\\\*/gu, ".*")}$`;
        if (new RegExp(n, "u").test(t))
          return !0;
      } else
        try {
          if (new URL(r).origin === t)
            return !0;
        } catch {
          if (r === t)
            return !0;
        }
    return !1;
  }
};
class Uh {
  constructor({ provider: e, namespace: s }) {
    this.id = z.CONNECTOR_ID.WALLET_CONNECT, this.name = lo.ConnectorNamesMap[z.CONNECTOR_ID.WALLET_CONNECT], this.type = "WALLET_CONNECT", this.imageId = lo.ConnectorImageIds[z.CONNECTOR_ID.WALLET_CONNECT], this.getCaipNetworks = m.getCaipNetworks.bind(m), this.caipNetworks = this.getCaipNetworks(), this.provider = e, this.chain = s;
  }
  get chains() {
    return this.getCaipNetworks();
  }
  async connectWalletConnect() {
    if (!await this.authenticate()) {
      const s = this.getCaipNetworks(), r = T.state.universalProviderConfigOverride, i = to.createNamespaces(s, r);
      await this.provider.connect({ optionalNamespaces: i });
    }
    return {
      clientId: await this.provider.client.core.crypto.getClientId(),
      session: this.provider.session
    };
  }
  async disconnect() {
    await this.provider.disconnect();
  }
  async authenticate() {
    const e = this.chains.map((s) => s.caipNetworkId);
    return Oi.universalProviderAuthenticate({
      universalProvider: this.provider,
      chains: e,
      methods: MI
    });
  }
}
const MI = [
  "eth_accounts",
  "eth_requestAccounts",
  "eth_sendRawTransaction",
  "eth_sign",
  "eth_signTransaction",
  "eth_signTypedData",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "eth_sendTransaction",
  "personal_sign",
  "wallet_switchEthereumChain",
  "wallet_addEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode",
  // EIP-5792
  "wallet_getCallsStatus",
  "wallet_sendCalls",
  "wallet_getCapabilities",
  // EIP-7715
  "wallet_grantPermissions",
  "wallet_revokePermissions",
  //EIP-7811
  "wallet_getAssets"
];
class BI {
  /**
   * Creates an instance of AdapterBlueprint.
   * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
   */
  constructor(e) {
    this.availableConnectors = [], this.eventListeners = /* @__PURE__ */ new Map(), this.getCaipNetworks = (s) => m.getCaipNetworks(s), e && this.construct(e);
  }
  /**
   * Initializes the adapter with the given parameters.
   * @param {AdapterBlueprint.Params} params - The parameters for initializing the adapter
   */
  construct(e) {
    this.projectId = e.projectId, this.namespace = e.namespace, this.adapterType = e.adapterType;
  }
  /**
   * Gets the available connectors.
   * @returns {Connector[]} An array of available connectors
   */
  get connectors() {
    return this.availableConnectors;
  }
  /**
   * Gets the supported networks.
   * @returns {CaipNetwork[]} An array of supported networks
   */
  get networks() {
    return this.getCaipNetworks(this.namespace);
  }
  /**
   * Sets the auth provider.
   * @param {W3mFrameProvider} authProvider - The auth provider instance
   */
  setAuthProvider(e) {
    this.addConnector({
      id: z.CONNECTOR_ID.AUTH,
      type: "AUTH",
      name: z.CONNECTOR_NAMES.AUTH,
      provider: e,
      imageId: lo.ConnectorImageIds[z.CONNECTOR_ID.AUTH],
      chain: this.namespace,
      chains: []
    });
  }
  /**
   * Adds one or more connectors to the available connectors list.
   * @param {...Connector} connectors - The connectors to add
   */
  addConnector(...e) {
    const s = /* @__PURE__ */ new Set();
    this.availableConnectors = [...e, ...this.availableConnectors].filter((r) => s.has(r.id) ? !1 : (s.add(r.id), !0)), this.emit("connectors", this.availableConnectors);
  }
  setStatus(e, s) {
    W.setStatus(e, s);
  }
  /**
   * Adds an event listener for a specific event.
   * @template T
   * @param {T} eventName - The name of the event
   * @param {EventCallback<T>} callback - The callback function to be called when the event is emitted
   */
  on(e, s) {
    var r;
    this.eventListeners.has(e) || this.eventListeners.set(e, /* @__PURE__ */ new Set()), (r = this.eventListeners.get(e)) == null || r.add(s);
  }
  /**
   * Removes an event listener for a specific event.
   * @template T
   * @param {T} eventName - The name of the event
   * @param {EventCallback<T>} callback - The callback function to be removed
   */
  off(e, s) {
    const r = this.eventListeners.get(e);
    r && r.delete(s);
  }
  /**
   * Removes all event listeners.
   */
  removeAllEventListeners() {
    this.eventListeners.forEach((e) => {
      e.clear();
    });
  }
  /**
   * Emits an event with the given name and optional data.
   * @template T
   * @param {T} eventName - The name of the event to emit
   * @param {EventData[T]} [data] - The optional data to be passed to the event listeners
   */
  emit(e, s) {
    const r = this.eventListeners.get(e);
    r && r.forEach((i) => i(s));
  }
  /**
   * Connects to WalletConnect.
   * @param {number | string} [_chainId] - Optional chain ID to connect to
   */
  async connectWalletConnect(e) {
    return { clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId };
  }
  /**
   * Switches the network.
   * @param {AdapterBlueprint.SwitchNetworkParams} params - Network switching parameters
   */
  async switchNetwork(e) {
    var n;
    const { caipNetwork: s, providerType: r } = e;
    if (!e.provider)
      return;
    const i = "provider" in e.provider ? e.provider.provider : e.provider;
    if (r === "WALLET_CONNECT") {
      i.setDefaultChain(s.caipNetworkId);
      return;
    }
    if (i && r === "AUTH") {
      const o = i, a = (n = W.state.preferredAccountTypes) == null ? void 0 : n[s.chainNamespace];
      await o.switchNetwork(s.caipNetworkId);
      const c = await o.getUser({
        chainId: s.caipNetworkId,
        preferredAccountType: a
      });
      this.emit("switchNetwork", c);
    }
  }
  getWalletConnectConnector() {
    const e = this.connectors.find((s) => s instanceof Uh);
    if (!e)
      throw new Error("WalletConnectConnector not found");
    return e;
  }
}
class FI extends BI {
  setUniversalProvider(e) {
    this.addConnector(new Uh({
      provider: e,
      caipNetworks: this.getCaipNetworks(),
      namespace: this.namespace
    }));
  }
  async connect(e) {
    return Promise.resolve({
      id: "WALLET_CONNECT",
      type: "WALLET_CONNECT",
      chainId: Number(e.chainId),
      provider: this.provider,
      address: ""
    });
  }
  async disconnect() {
    try {
      await this.getWalletConnectConnector().disconnect();
    } catch (e) {
      console.warn("UniversalAdapter:disconnect - error", e);
    }
  }
  async getAccounts({ namespace: e }) {
    var i, n, o, a;
    const s = this.provider, r = ((a = (o = (n = (i = s == null ? void 0 : s.session) == null ? void 0 : i.namespaces) == null ? void 0 : n[e]) == null ? void 0 : o.accounts) == null ? void 0 : a.map((c) => {
      const [, , l] = c.split(":");
      return l;
    }).filter((c, l, u) => u.indexOf(c) === l)) || [];
    return Promise.resolve({
      accounts: r.map((c) => X.createAccount(e, c, e === "bip122" ? "payment" : "eoa"))
    });
  }
  async syncConnectors() {
    return Promise.resolve();
  }
  async getBalance(e) {
    var n, o, a, c, l;
    if (!(e.caipNetwork && Ee.BALANCE_SUPPORTED_CHAINS.includes((n = e.caipNetwork) == null ? void 0 : n.chainNamespace)) || (o = e.caipNetwork) != null && o.testnet)
      return {
        balance: "0.00",
        symbol: ((a = e.caipNetwork) == null ? void 0 : a.nativeCurrency.symbol) || ""
      };
    if (W.state.balanceLoading && e.chainId === ((c = m.state.activeCaipNetwork) == null ? void 0 : c.id))
      return {
        balance: W.state.balance || "0.00",
        symbol: W.state.balanceSymbol || ""
      };
    const i = (await W.fetchTokenBalance()).find((u) => {
      var d, h;
      return u.chainId === `${(d = e.caipNetwork) == null ? void 0 : d.chainNamespace}:${e.chainId}` && u.symbol === ((h = e.caipNetwork) == null ? void 0 : h.nativeCurrency.symbol);
    });
    return {
      balance: (i == null ? void 0 : i.quantity.numeric) || "0.00",
      symbol: (i == null ? void 0 : i.symbol) || ((l = e.caipNetwork) == null ? void 0 : l.nativeCurrency.symbol) || ""
    };
  }
  async signMessage(e) {
    var o, a, c;
    const { provider: s, message: r, address: i } = e;
    if (!s)
      throw new Error("UniversalAdapter:signMessage - provider is undefined");
    let n = "";
    return ((o = m.state.activeCaipNetwork) == null ? void 0 : o.chainNamespace) === z.CHAIN.SOLANA ? n = (await s.request({
      method: "solana_signMessage",
      params: {
        message: Lu.encode(new TextEncoder().encode(r)),
        pubkey: i
      }
    }, (a = m.state.activeCaipNetwork) == null ? void 0 : a.caipNetworkId)).signature : n = await s.request({
      method: "personal_sign",
      params: [r, i]
    }, (c = m.state.activeCaipNetwork) == null ? void 0 : c.caipNetworkId), { signature: n };
  }
  // -- Transaction methods ---------------------------------------------------
  /**
   *
   * These methods are supported only on `wagmi` and `ethers` since the Solana SDK does not support them in the same way.
   * These function definition is to have a type parity between the clients. Currently not in use.
   */
  async estimateGas() {
    return Promise.resolve({
      gas: BigInt(0)
    });
  }
  async sendTransaction() {
    return Promise.resolve({
      hash: ""
    });
  }
  walletGetAssets(e) {
    return Promise.resolve({});
  }
  async writeContract() {
    return Promise.resolve({
      hash: ""
    });
  }
  parseUnits() {
    return 0n;
  }
  formatUnits() {
    return "0";
  }
  async getCapabilities() {
    return Promise.resolve({});
  }
  async grantPermissions() {
    return Promise.resolve({});
  }
  async revokePermissions() {
    return Promise.resolve("0x");
  }
  async syncConnection() {
    return Promise.resolve({
      id: "WALLET_CONNECT",
      type: "WALLET_CONNECT",
      chainId: 1,
      provider: this.provider,
      address: ""
    });
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async switchNetwork(e) {
    var i, n, o, a, c, l;
    const { caipNetwork: s } = e, r = this.getWalletConnectConnector();
    if (s.chainNamespace === z.CHAIN.EVM)
      try {
        await ((i = r.provider) == null ? void 0 : i.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: wc(s.id) }]
        }));
      } catch (u) {
        if (u.code === Ai.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || u.code === Ai.ERROR_INVALID_CHAIN_ID || u.code === Ai.ERROR_CODE_DEFAULT || ((o = (n = u == null ? void 0 : u.data) == null ? void 0 : n.originalError) == null ? void 0 : o.code) === Ai.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)
          try {
            await ((l = r.provider) == null ? void 0 : l.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: wc(s.id),
                  rpcUrls: [(a = s == null ? void 0 : s.rpcUrls.chainDefault) == null ? void 0 : a.http],
                  chainName: s.name,
                  nativeCurrency: s.nativeCurrency,
                  blockExplorerUrls: [(c = s.blockExplorers) == null ? void 0 : c.default.url]
                }
              ]
            }));
          } catch {
            throw new Error("Chain is not supported");
          }
      }
    r.provider.setDefaultChain(s.caipNetworkId);
  }
  getWalletConnectProvider() {
    const e = this.connectors.find((r) => r.type === "WALLET_CONNECT");
    return e == null ? void 0 : e.provider;
  }
}
const jI = [
  "email",
  "socials",
  "swaps",
  "onramp",
  "activity",
  "reownBranding"
], Hn = {
  email: {
    apiFeatureName: "social_login",
    localFeatureName: "email",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => {
      if (!(t != null && t.config))
        return !1;
      const e = t.config;
      return !!t.isEnabled && e.includes("email");
    },
    processFallback: (t) => t === void 0 ? Ee.DEFAULT_REMOTE_FEATURES.email : !!t
  },
  socials: {
    apiFeatureName: "social_login",
    localFeatureName: "socials",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => {
      if (!(t != null && t.config))
        return !1;
      const e = t.config;
      return t.isEnabled && e.length > 0 ? e.filter((s) => s !== "email") : !1;
    },
    processFallback: (t) => t === void 0 ? Ee.DEFAULT_REMOTE_FEATURES.socials : typeof t == "boolean" ? t ? Ee.DEFAULT_REMOTE_FEATURES.socials : !1 : t
  },
  swaps: {
    apiFeatureName: "swap",
    localFeatureName: "swaps",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => {
      if (!(t != null && t.config))
        return !1;
      const e = t.config;
      return t.isEnabled && e.length > 0 ? e : !1;
    },
    processFallback: (t) => t === void 0 ? Ee.DEFAULT_REMOTE_FEATURES.swaps : typeof t == "boolean" ? t ? Ee.DEFAULT_REMOTE_FEATURES.swaps : !1 : t
  },
  onramp: {
    apiFeatureName: "onramp",
    localFeatureName: "onramp",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => {
      if (!(t != null && t.config))
        return !1;
      const e = t.config;
      return t.isEnabled && e.length > 0 ? e : !1;
    },
    processFallback: (t) => t === void 0 ? Ee.DEFAULT_REMOTE_FEATURES.onramp : typeof t == "boolean" ? t ? Ee.DEFAULT_REMOTE_FEATURES.onramp : !1 : t
  },
  activity: {
    apiFeatureName: "activity",
    localFeatureName: "history",
    returnType: !1,
    isLegacy: !0,
    isAvailableOnBasic: !1,
    processApi: (t) => !!t.isEnabled,
    processFallback: (t) => t === void 0 ? Ee.DEFAULT_REMOTE_FEATURES.activity : !!t
  },
  reownBranding: {
    apiFeatureName: "reown_branding",
    localFeatureName: "reownBranding",
    returnType: !1,
    isLegacy: !1,
    isAvailableOnBasic: !1,
    processApi: (t) => !!t.isEnabled,
    processFallback: (t) => t === void 0 ? Ee.DEFAULT_REMOTE_FEATURES.reownBranding : !!t
  }
}, qI = {
  localSettingsOverridden: /* @__PURE__ */ new Set(),
  getApiConfig(t, e) {
    return e == null ? void 0 : e.find((s) => s.id === t);
  },
  addWarning(t, e) {
    if (t !== void 0) {
      const s = Hn[e], r = s.isLegacy ? `"features.${s.localFeatureName}" (now "${e}")` : `"features.${e}"`;
      this.localSettingsOverridden.add(r);
    }
  },
  processFeature(t, e, s, r, i) {
    const n = Hn[t], o = e[n.localFeatureName];
    if (i && !n.isAvailableOnBasic)
      return !1;
    if (r) {
      const a = this.getApiConfig(n.apiFeatureName, s);
      return (a == null ? void 0 : a.config) === null ? this.processFallbackFeature(t, o) : a != null && a.config ? (o !== void 0 && this.addWarning(o, t), this.processApiFeature(t, a)) : !1;
    }
    return this.processFallbackFeature(t, o);
  },
  processApiFeature(t, e) {
    return Hn[t].processApi(e);
  },
  processFallbackFeature(t, e) {
    return Hn[t].processFallback(e);
  },
  async fetchRemoteFeatures(t) {
    const e = t.basic ?? !1, s = t.features || {};
    this.localSettingsOverridden.clear();
    let r = null, i = !1;
    try {
      r = await K.fetchProjectConfig(), i = r != null;
    } catch (o) {
      console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o);
    }
    const n = i && !e ? Ee.DEFAULT_REMOTE_FEATURES : Ee.DEFAULT_REMOTE_FEATURES_DISABLED;
    try {
      for (const o of jI) {
        const a = this.processFeature(o, s, r, i, e);
        Object.assign(n, { [o]: a });
      }
    } catch (o) {
      return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), Ee.DEFAULT_REMOTE_FEATURES;
    }
    if (i && this.localSettingsOverridden.size > 0) {
      const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
      Fs.open({
        shortMessage: "Local configuration ignored",
        longMessage: `[Reown Config Notice] ${o}`
      }, "warning");
    }
    return n;
  }
};
class WI {
  constructor(e) {
    this.chainNamespaces = [], this.remoteFeatures = {}, this.reportedAlertErrors = {}, this.getCaipNetwork = (s, r) => {
      var i, n, o, a;
      if (s) {
        const c = (n = (i = m.getNetworkData(s)) == null ? void 0 : i.requestedCaipNetworks) == null ? void 0 : n.find((d) => d.id === r);
        if (c)
          return c;
        const l = (o = m.getNetworkData(s)) == null ? void 0 : o.caipNetwork;
        return l || ((a = m.getRequestedCaipNetworks(s).filter((d) => d.chainNamespace === s)) == null ? void 0 : a[0]);
      }
      return m.state.activeCaipNetwork || this.defaultCaipNetwork;
    }, this.getCaipNetworkId = () => {
      const s = this.getCaipNetwork();
      if (s)
        return s.id;
    }, this.getCaipNetworks = (s) => m.getCaipNetworks(s), this.getActiveChainNamespace = () => m.state.activeChain, this.setRequestedCaipNetworks = (s, r) => {
      m.setRequestedCaipNetworks(s, r);
    }, this.getApprovedCaipNetworkIds = () => m.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (s) => m.state.activeChain === s || !s ? m.state.activeCaipAddress : m.getAccountProp("caipAddress", s), this.setClientId = (s) => {
      J.setClientId(s);
    }, this.getProvider = (s) => Se.getProvider(s), this.getProviderType = (s) => Se.getProviderId(s), this.getPreferredAccountType = (s) => {
      var r;
      return (r = W.state.preferredAccountTypes) == null ? void 0 : r[s];
    }, this.setCaipAddress = (s, r) => {
      W.setCaipAddress(s, r), s && T.state.enableEmbedded && this.close();
    }, this.setBalance = (s, r, i) => {
      W.setBalance(s, r, i);
    }, this.setProfileName = (s, r) => {
      W.setProfileName(s, r);
    }, this.setProfileImage = (s, r) => {
      W.setProfileImage(s, r);
    }, this.setUser = (s, r) => {
      W.setUser(s, r);
    }, this.resetAccount = (s) => {
      W.resetAccount(s);
    }, this.setCaipNetwork = (s) => {
      m.setActiveCaipNetwork(s);
    }, this.setCaipNetworkOfNamespace = (s, r) => {
      m.setChainNetworkData(r, { caipNetwork: s });
    }, this.setAllAccounts = (s, r) => {
      W.setAllAccounts(s, r), T.setHasMultipleAddresses((s == null ? void 0 : s.length) > 1);
    }, this.setStatus = (s, r) => {
      W.setStatus(s, r), F.isConnected() ? q.setConnectionStatus("connected") : q.setConnectionStatus("disconnected");
    }, this.getAddressByChainNamespace = (s) => m.getAccountProp("address", s), this.setConnectors = (s) => {
      const r = [...F.state.allConnectors, ...s];
      F.setConnectors(r);
    }, this.setConnections = (s, r) => {
      Y.setConnections(s, r);
    }, this.fetchIdentity = (s) => J.fetchIdentity(s), this.getReownName = (s) => Pi.getNamesForAddress(s), this.getConnectors = () => F.getConnectors(), this.getConnectorImage = (s) => Vu.getConnectorImage(s), this.setConnectedWalletInfo = (s, r) => {
      const i = Se.getProviderId(r), n = s ? { ...s, type: i } : void 0;
      W.setConnectedWalletInfo(n, r);
    }, this.getIsConnectedState = () => !!m.state.activeCaipAddress, this.addAddressLabel = (s, r, i) => {
      W.addAddressLabel(s, r, i);
    }, this.removeAddressLabel = (s, r) => {
      W.removeAddressLabel(s, r);
    }, this.getAddress = (s) => m.state.activeChain === s || !s ? W.state.address : m.getAccountProp("address", s), this.setApprovedCaipNetworksData = (s) => m.setApprovedCaipNetworksData(s), this.resetNetwork = (s) => {
      m.resetNetwork(s);
    }, this.addConnector = (s) => {
      F.addConnector(s);
    }, this.resetWcConnection = () => {
      Y.resetWcConnection();
    }, this.setAddressExplorerUrl = (s, r) => {
      W.setAddressExplorerUrl(s, r);
    }, this.setSmartAccountDeployed = (s, r) => {
      W.setSmartAccountDeployed(s, r);
    }, this.setSmartAccountEnabledNetworks = (s, r) => {
      m.setSmartAccountEnabledNetworks(s, r);
    }, this.setPreferredAccountType = (s, r) => {
      W.setPreferredAccountType(s, r);
    }, this.setEIP6963Enabled = (s) => {
      T.setEIP6963Enabled(s);
    }, this.handleUnsafeRPCRequest = () => {
      if (this.isOpen()) {
        if (this.isTransactionStackEmpty())
          return;
        this.redirect("ApproveTransaction");
      } else
        this.open({ view: "ApproveTransaction" });
    }, this.options = e, this.version = e.sdkVersion, this.caipNetworks = this.extendCaipNetworks(e), this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e), this.chainAdapters = this.createAdapters(e.adapters), this.readyPromise = this.initialize(e);
  }
  getChainNamespacesSet(e, s) {
    const r = e == null ? void 0 : e.map((n) => n.namespace).filter((n) => !!n);
    if (r != null && r.length)
      return [...new Set(r)];
    const i = s == null ? void 0 : s.map((n) => n.chainNamespace);
    return [...new Set(i)];
  }
  async initialize(e) {
    var s, r, i;
    this.initializeProjectSettings(e), this.initControllers(e), await this.initChainAdapters(), this.sendInitializeEvent(e), await this.syncExistingConnection(), this.remoteFeatures = await qI.fetchRemoteFeatures(e), T.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && ha.setOnrampProviders(this.remoteFeatures.onramp), ((s = T.state.remoteFeatures) != null && s.email || Array.isArray((r = T.state.remoteFeatures) == null ? void 0 : r.socials) && ((i = T.state.remoteFeatures) == null ? void 0 : i.socials.length) > 0) && await this.checkAllowedOrigins();
  }
  async checkAllowedOrigins() {
    const e = await K.fetchAllowedOrigins();
    if (e && X.isClient()) {
      const s = window.location.origin;
      to.isOriginAllowed(s, e, Ai.DEFAULT_ALLOWED_ANCESTORS) || Fs.open(Pr.ALERT_ERRORS.INVALID_APP_CONFIGURATION, "error");
    } else
      Fs.open(Pr.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
  }
  sendInitializeEvent(e) {
    var r;
    const { ...s } = e;
    delete s.adapters, delete s.universalProvider, Pe.sendEvent({
      type: "track",
      event: "INITIALIZE",
      properties: {
        ...s,
        networks: e.networks.map((i) => i.id),
        siweConfig: {
          options: ((r = e.siweConfig) == null ? void 0 : r.options) || {}
        }
      }
    });
  }
  // -- Controllers initialization ---------------------------------------------------
  initControllers(e) {
    this.initializeOptionsController(e), this.initializeChainController(e), this.initializeThemeController(e), this.initializeConnectionController(e), this.initializeConnectorController();
  }
  initializeThemeController(e) {
    e.themeMode && wt.setThemeMode(e.themeMode), e.themeVariables && wt.setThemeVariables(e.themeVariables);
  }
  initializeChainController(e) {
    if (!this.connectionControllerClient || !this.networkControllerClient)
      throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");
    m.initialize(e.adapters ?? [], this.caipNetworks, {
      connectionControllerClient: this.connectionControllerClient,
      networkControllerClient: this.networkControllerClient
    });
    const s = this.getDefaultNetwork();
    s && m.setActiveCaipNetwork(s);
  }
  initializeConnectionController(e) {
    Y.setWcBasic(e.basic ?? !1);
  }
  initializeConnectorController() {
    F.initialize(this.chainNamespaces);
  }
  initializeProjectSettings(e) {
    T.setProjectId(e.projectId), T.setSdkVersion(e.sdkVersion);
  }
  initializeOptionsController(e) {
    var o;
    T.setDebug(e.debug !== !1), T.setEnableWalletConnect(e.enableWalletConnect !== !1), T.setEnableWalletGuide(e.enableWalletGuide !== !1), T.setEnableWallets(e.enableWallets !== !1), T.setEIP6963Enabled(e.enableEIP6963 !== !1), T.setEnableNetworkSwitch(e.enableNetworkSwitch !== !1), T.setEnableAuthLogger(e.enableAuthLogger !== !1), T.setCustomRpcUrls(e.customRpcUrls), T.setEnableEmbedded(e.enableEmbedded), T.setAllWallets(e.allWallets), T.setIncludeWalletIds(e.includeWalletIds), T.setExcludeWalletIds(e.excludeWalletIds), T.setFeaturedWalletIds(e.featuredWalletIds), T.setTokens(e.tokens), T.setTermsConditionsUrl(e.termsConditionsUrl), T.setPrivacyPolicyUrl(e.privacyPolicyUrl), T.setCustomWallets(e.customWallets), T.setFeatures(e.features), T.setAllowUnsupportedChain(e.allowUnsupportedChain), T.setUniversalProviderConfigOverride(e.universalProviderConfigOverride), T.setPreferUniversalLinks(e.experimental_preferUniversalLinks), T.setDefaultAccountTypes(e.defaultAccountTypes);
    const s = q.getPreferredAccountTypes() || {}, r = { ...T.state.defaultAccountTypes, ...s };
    W.setPreferredAccountTypes(r);
    const i = this.getDefaultMetaData();
    if (!e.metadata && i && (e.metadata = i), T.setMetadata(e.metadata), T.setDisableAppend(e.disableAppend), T.setEnableEmbedded(e.enableEmbedded), T.setSIWX(e.siwx), !e.projectId) {
      Fs.open(Pr.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
      return;
    }
    if (((o = e.adapters) == null ? void 0 : o.find((a) => a.namespace === z.CHAIN.EVM)) && e.siweConfig) {
      if (e.siwx)
        throw new Error("Cannot set both `siweConfig` and `siwx` options");
      T.setSIWX(e.siweConfig.mapToSIWX());
    }
  }
  getDefaultMetaData() {
    var e, s, r, i;
    return X.isClient() ? {
      name: ((s = (e = document.getElementsByTagName("title")) == null ? void 0 : e[0]) == null ? void 0 : s.textContent) || "",
      description: ((r = document.querySelector('meta[property="og:description"]')) == null ? void 0 : r.content) || "",
      url: window.location.origin,
      icons: [((i = document.querySelector('link[rel~="icon"]')) == null ? void 0 : i.href) || ""]
    } : null;
  }
  // -- Network Initialization ---------------------------------------------------
  setUnsupportedNetwork(e) {
    const s = this.getActiveChainNamespace();
    if (s) {
      const r = Tr.getUnsupportedNetwork(`${s}:${e}`);
      m.setActiveCaipNetwork(r);
    }
  }
  getDefaultNetwork() {
    return Tr.getCaipNetworkFromStorage(this.defaultCaipNetwork);
  }
  extendCaipNetwork(e, s) {
    return Tr.extendCaipNetwork(e, {
      customNetworkImageUrls: s.chainImages,
      projectId: s.projectId
    });
  }
  extendCaipNetworks(e) {
    return Tr.extendCaipNetworks(e.networks, {
      customNetworkImageUrls: e.chainImages,
      customRpcUrls: e.customRpcUrls,
      projectId: e.projectId
    });
  }
  extendDefaultCaipNetwork(e) {
    const s = e.networks.find((i) => {
      var n;
      return i.id === ((n = e.defaultNetwork) == null ? void 0 : n.id);
    });
    return s ? Tr.extendCaipNetwork(s, {
      customNetworkImageUrls: e.chainImages,
      customRpcUrls: e.customRpcUrls,
      projectId: e.projectId
    }) : void 0;
  }
  async disconnectNamespace(e) {
    try {
      const s = this.getAdapter(e), r = Se.getProvider(e), i = Se.getProviderId(e), { caipAddress: n } = m.getAccountData(e) || {};
      this.setLoading(!0, e), n && (s != null && s.disconnect) && await s.disconnect({ provider: r, providerType: i }), q.removeConnectedNamespace(e), Se.resetChain(e), this.setUser(void 0, e), this.setStatus("disconnected", e), this.setConnectedWalletInfo(void 0, e), F.removeConnectorId(e), m.resetAccount(e), m.resetNetwork(e), this.setLoading(!1, e);
    } catch (s) {
      throw this.setLoading(!1, e), new Error(`Failed to disconnect chain ${e}: ${s.message}`);
    }
  }
  // -- Client Initialization ---------------------------------------------------
  createClients() {
    this.connectionControllerClient = {
      connectWalletConnect: async () => {
        var n;
        const e = m.state.activeChain, s = this.getAdapter(e), r = (n = this.getCaipNetwork(e)) == null ? void 0 : n.id;
        if (!s)
          throw new Error("Adapter not found");
        const i = await s.connectWalletConnect(r);
        this.close(), this.setClientId((i == null ? void 0 : i.clientId) || null), q.setConnectedNamespaces([...m.state.chains.keys()]), this.chainNamespaces.forEach((o) => {
          F.setConnectorId(ys.CONNECTOR_TYPE_WALLET_CONNECT, o);
        }), await this.syncWalletConnectAccount();
      },
      connectExternal: async ({ id: e, info: s, type: r, provider: i, chain: n, caipNetwork: o, socialUri: a }) => {
        var f, w, y, b, v, C;
        const c = m.state.activeChain, l = n || c, u = this.getAdapter(l);
        if (n && n !== c && !o) {
          const S = this.getCaipNetworks().find((A) => A.chainNamespace === n);
          S && this.setCaipNetwork(S);
        }
        if (!u)
          throw new Error("Adapter not found");
        const d = this.getCaipNetwork(l), h = await u.connect({
          id: e,
          info: s,
          type: r,
          provider: i,
          socialUri: a,
          chainId: (o == null ? void 0 : o.id) || (d == null ? void 0 : d.id),
          rpcUrl: ((y = (w = (f = o == null ? void 0 : o.rpcUrls) == null ? void 0 : f.default) == null ? void 0 : w.http) == null ? void 0 : y[0]) || ((C = (v = (b = d == null ? void 0 : d.rpcUrls) == null ? void 0 : b.default) == null ? void 0 : v.http) == null ? void 0 : C[0])
        });
        if (!h)
          return;
        q.addConnectedNamespace(l), this.syncProvider({ ...h, chainNamespace: l });
        const p = W.state.allAccounts, { accounts: g } = (p == null ? void 0 : p.length) > 0 ? (
          // eslint-disable-next-line line-comment-position
          // Using new array else the accounts will have the same reference and react will not re-render
          { accounts: [...p] }
        ) : await u.getAccounts({ namespace: l, id: e });
        this.setAllAccounts(g, l), this.setStatus("connected", l), this.syncConnectedWalletInfo(l);
      },
      reconnectExternal: async ({ id: e, info: s, type: r, provider: i }) => {
        var a;
        const n = m.state.activeChain, o = this.getAdapter(n);
        o != null && o.reconnect && (await (o == null ? void 0 : o.reconnect({ id: e, info: s, type: r, provider: i, chainId: (a = this.getCaipNetwork()) == null ? void 0 : a.id })), q.addConnectedNamespace(n), this.syncConnectedWalletInfo(n));
      },
      disconnect: async (e) => {
        const s = fI(e);
        try {
          const r = await Promise.allSettled(s.map(async ([n]) => this.disconnectNamespace(n)));
          de.resetSend(), Y.resetWcConnection(), await Oi.clearSessions(), F.setFilterByNamespace(void 0);
          const i = r.filter((n) => n.status === "rejected");
          if (i.length > 0)
            throw new Error(i.map((n) => n.reason.message).join(", "));
          q.deleteConnectedSocialProvider(), Pe.sendEvent({
            type: "track",
            event: "DISCONNECT_SUCCESS",
            properties: {
              namespace: e || "all"
            }
          });
        } catch (r) {
          throw new Error(`Failed to disconnect chains: ${r.message}`);
        }
      },
      checkInstalled: (e) => e ? e.some((s) => {
        var r;
        return !!((r = window.ethereum) != null && r[String(s)]);
      }) : !!window.ethereum,
      signMessage: async (e) => {
        const s = this.getAdapter(m.state.activeChain), r = await (s == null ? void 0 : s.signMessage({
          message: e,
          address: W.state.address,
          provider: Se.getProvider(m.state.activeChain)
        }));
        return (r == null ? void 0 : r.signature) || "";
      },
      sendTransaction: async (e) => {
        const s = e.chainNamespace;
        if (Ee.SEND_SUPPORTED_NAMESPACES.includes(s)) {
          const r = this.getAdapter(m.state.activeChain), i = Se.getProvider(s), n = await (r == null ? void 0 : r.sendTransaction({
            ...e,
            caipNetwork: this.getCaipNetwork(),
            provider: i
          }));
          return (n == null ? void 0 : n.hash) || "";
        }
        return "";
      },
      estimateGas: async (e) => {
        if (e.chainNamespace === z.CHAIN.EVM) {
          const s = this.getAdapter(m.state.activeChain), r = Se.getProvider(m.state.activeChain), i = this.getCaipNetwork();
          if (!i)
            throw new Error("CaipNetwork is undefined");
          const n = await (s == null ? void 0 : s.estimateGas({
            ...e,
            provider: r,
            caipNetwork: i
          }));
          return (n == null ? void 0 : n.gas) || 0n;
        }
        return 0n;
      },
      getEnsAvatar: async () => {
        var e;
        return await this.syncIdentity({
          address: W.state.address,
          chainId: Number((e = this.getCaipNetwork()) == null ? void 0 : e.id),
          chainNamespace: m.state.activeChain
        }), W.state.profileImage || !1;
      },
      getEnsAddress: async (e) => await to.resolveReownName(e),
      writeContract: async (e) => {
        const s = this.getAdapter(m.state.activeChain), r = this.getCaipNetwork(), i = this.getCaipAddress(), n = Se.getProvider(m.state.activeChain);
        if (!r || !i)
          throw new Error("CaipNetwork or CaipAddress is undefined");
        const o = await (s == null ? void 0 : s.writeContract({ ...e, caipNetwork: r, provider: n, caipAddress: i }));
        return o == null ? void 0 : o.hash;
      },
      parseUnits: (e, s) => {
        const r = this.getAdapter(m.state.activeChain);
        return (r == null ? void 0 : r.parseUnits({ value: e, decimals: s })) ?? 0n;
      },
      formatUnits: (e, s) => {
        const r = this.getAdapter(m.state.activeChain);
        return (r == null ? void 0 : r.formatUnits({ value: e, decimals: s })) ?? "0";
      },
      getCapabilities: async (e) => {
        const s = this.getAdapter(m.state.activeChain);
        return await (s == null ? void 0 : s.getCapabilities(e));
      },
      grantPermissions: async (e) => {
        const s = this.getAdapter(m.state.activeChain);
        return await (s == null ? void 0 : s.grantPermissions(e));
      },
      revokePermissions: async (e) => {
        const s = this.getAdapter(m.state.activeChain);
        return s != null && s.revokePermissions ? await s.revokePermissions(e) : "0x";
      },
      walletGetAssets: async (e) => {
        const s = this.getAdapter(m.state.activeChain);
        return await (s == null ? void 0 : s.walletGetAssets(e)) ?? {};
      },
      updateBalance: (e) => {
        const s = this.getCaipNetwork(e);
        !s || !W.state.address || this.updateNativeBalance(W.state.address, s == null ? void 0 : s.id, e);
      }
    }, this.networkControllerClient = {
      switchCaipNetwork: async (e) => await this.switchCaipNetwork(e),
      // eslint-disable-next-line @typescript-eslint/require-await
      getApprovedCaipNetworksData: async () => this.getApprovedCaipNetworksData()
    }, Y.setClient(this.connectionControllerClient);
  }
  getApprovedCaipNetworksData() {
    var s, r, i, n, o;
    if (Se.getProviderId(m.state.activeChain) === ys.CONNECTOR_TYPE_WALLET_CONNECT) {
      const a = (r = (s = this.universalProvider) == null ? void 0 : s.session) == null ? void 0 : r.namespaces;
      return {
        /*
         * MetaMask Wallet only returns 1 namespace in the session object. This makes it imposible
         * to switch to other networks. Setting supportsAllNetworks to true for MetaMask Wallet
         * will make it possible to switch to other networks.
         */
        supportsAllNetworks: ((o = (n = (i = this.universalProvider) == null ? void 0 : i.session) == null ? void 0 : n.peer) == null ? void 0 : o.metadata.name) === "MetaMask Wallet",
        approvedCaipNetworkIds: this.getChainsFromNamespaces(a)
      };
    }
    return { supportsAllNetworks: !0, approvedCaipNetworkIds: [] };
  }
  async switchCaipNetwork(e) {
    if (!e)
      return;
    const s = e.chainNamespace;
    if (this.getAddressByChainNamespace(e.chainNamespace)) {
      const i = Se.getProvider(s), n = Se.getProviderId(s);
      if (e.chainNamespace === m.state.activeChain) {
        const o = this.getAdapter(s);
        await (o == null ? void 0 : o.switchNetwork({ caipNetwork: e, provider: i, providerType: n }));
      } else if (this.setCaipNetwork(e), n === ys.CONNECTOR_TYPE_WALLET_CONNECT)
        this.syncWalletConnectAccount();
      else {
        const o = this.getAddressByChainNamespace(s);
        o && this.syncAccount({
          address: o,
          chainId: e.id,
          chainNamespace: s
        });
      }
    } else
      this.setCaipNetwork(e);
  }
  getChainsFromNamespaces(e = {}) {
    return Object.values(e).flatMap((s) => {
      const r = s.chains || [], i = s.accounts.map((n) => {
        const { chainId: o, chainNamespace: a } = ps.parseCaipAddress(n);
        return `${a}:${o}`;
      });
      return Array.from(/* @__PURE__ */ new Set([...r, ...i]));
    });
  }
  // -- Adapter Initialization ---------------------------------------------------
  createAdapters(e) {
    return this.createClients(), this.chainNamespaces.reduce((s, r) => {
      var n;
      const i = e == null ? void 0 : e.find((o) => o.namespace === r);
      return i ? (i.construct({
        namespace: r,
        projectId: (n = this.options) == null ? void 0 : n.projectId,
        networks: this.getCaipNetworks()
      }), s[r] = i) : s[r] = new FI({
        namespace: r,
        networks: this.getCaipNetworks()
      }), s;
    }, {});
  }
  async initChainAdapter(e) {
    var s;
    this.onConnectors(e), this.listenAdapter(e), await ((s = this.chainAdapters) == null ? void 0 : s[e].syncConnectors(this.options, this)), await this.createUniversalProviderForAdapter(e);
  }
  async initChainAdapters() {
    await Promise.all(this.chainNamespaces.map(async (e) => {
      await this.initChainAdapter(e);
    }));
  }
  onConnectors(e) {
    const s = this.getAdapter(e);
    s == null || s.on("connectors", this.setConnectors.bind(this));
  }
  listenAdapter(e) {
    const s = this.getAdapter(e);
    if (!s)
      return;
    const r = q.getConnectionStatus();
    r === "connected" ? this.setStatus("connecting", e) : r === "disconnected" ? (q.clearAddressCache(), this.setStatus(r, e)) : this.setStatus(r, e), s.on("switchNetwork", ({ address: i, chainId: n }) => {
      const o = this.getCaipNetworks().find((l) => l.id === n || l.caipNetworkId === n), a = m.state.activeChain === e, c = m.getAccountProp("address", e);
      if (o) {
        const l = a && i ? i : c;
        l && this.syncAccount({ address: l, chainId: o.id, chainNamespace: e });
      } else
        this.setUnsupportedNetwork(n);
    }), s.on("disconnect", this.disconnect.bind(this, e)), s.on("connections", (i) => {
      this.setConnections(i, e);
    }), s.on("pendingTransactions", () => {
      const i = W.state.address, n = m.state.activeCaipNetwork;
      !i || !(n != null && n.id) || this.updateNativeBalance(i, n.id, n.chainNamespace);
    }), s.on("accountChanged", ({ address: i, chainId: n }) => {
      var a, c;
      const o = m.state.activeChain === e;
      o && n ? this.syncAccount({
        address: i,
        chainId: n,
        chainNamespace: e
      }) : o && ((a = m.state.activeCaipNetwork) != null && a.id) ? this.syncAccount({
        address: i,
        chainId: (c = m.state.activeCaipNetwork) == null ? void 0 : c.id,
        chainNamespace: e
      }) : this.syncAccountInfo(i, n, e), this.syncAllAccounts(e);
    });
  }
  async createUniversalProviderForAdapter(e) {
    var s, r, i;
    await this.getUniversalProvider(), this.universalProvider && ((i = (r = (s = this.chainAdapters) == null ? void 0 : s[e]) == null ? void 0 : r.setUniversalProvider) == null || i.call(r, this.universalProvider));
  }
  // -- Connection Sync ---------------------------------------------------
  async syncExistingConnection() {
    await Promise.allSettled(this.chainNamespaces.map((e) => this.syncNamespaceConnection(e)));
  }
  async syncNamespaceConnection(e) {
    try {
      e === z.CHAIN.EVM && X.isSafeApp() && F.setConnectorId(z.CONNECTOR_ID.SAFE, e);
      const s = F.getConnectorId(e);
      switch (this.setStatus("connecting", e), s) {
        case z.CONNECTOR_ID.WALLET_CONNECT:
          await this.syncWalletConnectAccount();
          break;
        case z.CONNECTOR_ID.AUTH:
          break;
        default:
          await this.syncAdapterConnection(e);
      }
    } catch (s) {
      console.warn("AppKit couldn't sync existing connection", s), this.setStatus("disconnected", e);
    }
  }
  async syncAdapterConnection(e) {
    var a, c, l;
    const s = this.getAdapter(e), r = F.getConnectorId(e), i = this.getCaipNetwork(e), o = F.getConnectors(e).find((u) => u.id === r);
    try {
      if (!s || !o)
        throw new Error(`Adapter or connector not found for namespace ${e}`);
      if (!(i != null && i.id))
        throw new Error("CaipNetwork not found");
      const u = await (s == null ? void 0 : s.syncConnection({
        namespace: e,
        id: o.id,
        chainId: i.id,
        rpcUrl: (l = (c = (a = i == null ? void 0 : i.rpcUrls) == null ? void 0 : a.default) == null ? void 0 : c.http) == null ? void 0 : l[0]
      }));
      if (u) {
        const d = await (s == null ? void 0 : s.getAccounts({
          namespace: e,
          id: o.id
        }));
        d && d.accounts.length > 0 ? this.setAllAccounts(d.accounts, e) : this.setAllAccounts([X.createAccount(e, u.address, "eoa")], e), this.syncProvider({ ...u, chainNamespace: e }), await this.syncAccount({ ...u, chainNamespace: e }), this.setStatus("connected", e);
      } else
        this.setStatus("disconnected", e);
    } catch {
      this.setStatus("disconnected", e);
    }
  }
  async syncWalletConnectAccount() {
    const e = this.chainNamespaces.map(async (s) => {
      var a, c, l, u, d;
      const r = this.getAdapter(s), i = ((u = (l = (c = (a = this.universalProvider) == null ? void 0 : a.session) == null ? void 0 : c.namespaces) == null ? void 0 : l[s]) == null ? void 0 : u.accounts) || [], n = (d = m.state.activeCaipNetwork) == null ? void 0 : d.id, o = i.find((h) => {
        const { chainId: p } = ps.parseCaipAddress(h);
        return p === (n == null ? void 0 : n.toString());
      }) || i[0];
      if (o) {
        const h = ps.validateCaipAddress(o), { chainId: p, address: g } = ps.parseCaipAddress(h);
        if (Se.setProviderId(s, ys.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && m.state.activeCaipNetwork && (r == null ? void 0 : r.namespace) !== z.CHAIN.EVM) {
          const f = r == null ? void 0 : r.getWalletConnectProvider({
            caipNetworks: this.getCaipNetworks(),
            provider: this.universalProvider,
            activeCaipNetwork: m.state.activeCaipNetwork
          });
          Se.setProvider(s, f);
        } else
          Se.setProvider(s, this.universalProvider);
        F.setConnectorId(z.CONNECTOR_ID.WALLET_CONNECT, s), q.addConnectedNamespace(s), this.syncWalletConnectAccounts(s), await this.syncAccount({
          address: g,
          chainId: p,
          chainNamespace: s
        });
      } else
        this.setStatus("disconnected", s);
      this.syncConnectedWalletInfo(s), await m.setApprovedCaipNetworksData(s);
    });
    await Promise.all(e);
  }
  syncWalletConnectAccounts(e) {
    var r, i, n, o, a;
    const s = (a = (o = (n = (i = (r = this.universalProvider) == null ? void 0 : r.session) == null ? void 0 : i.namespaces) == null ? void 0 : n[e]) == null ? void 0 : o.accounts) == null ? void 0 : a.map((c) => {
      const { address: l } = ps.parseCaipAddress(c);
      return l;
    }).filter((c, l, u) => u.indexOf(c) === l);
    s && this.setAllAccounts(s.map((c) => X.createAccount(e, c, e === "bip122" ? "payment" : "eoa")), e);
  }
  syncProvider({ type: e, provider: s, id: r, chainNamespace: i }) {
    Se.setProviderId(i, e), Se.setProvider(i, s), F.setConnectorId(r, i);
  }
  async syncAllAccounts(e) {
    const s = F.getConnectorId(e);
    if (!s)
      return;
    const r = this.getAdapter(e), i = await (r == null ? void 0 : r.getAccounts({ namespace: e, id: s }));
    i && i.accounts.length > 0 && this.setAllAccounts(i.accounts, e);
  }
  async syncAccount(e) {
    var d, h;
    const s = e.chainNamespace === m.state.activeChain, r = m.getCaipNetworkByNamespace(e.chainNamespace, e.chainId), { address: i, chainId: n, chainNamespace: o } = e, { chainId: a } = q.getActiveNetworkProps(), c = n || a, l = ((d = m.state.activeCaipNetwork) == null ? void 0 : d.name) === z.UNSUPPORTED_NETWORK_NAME, u = m.getNetworkProp("supportsAllNetworks", o);
    if (this.setStatus("connected", o), !(l && !u) && c) {
      let p = this.getCaipNetworks().find((w) => w.id.toString() === c.toString()), g = this.getCaipNetworks().find((w) => w.chainNamespace === o);
      if (!u && !p && !g) {
        const w = this.getApprovedCaipNetworkIds() || [], y = w.find((v) => {
          var C;
          return ((C = ps.parseCaipNetworkId(v)) == null ? void 0 : C.chainId) === c.toString();
        }), b = w.find((v) => {
          var C;
          return ((C = ps.parseCaipNetworkId(v)) == null ? void 0 : C.chainNamespace) === o;
        });
        p = this.getCaipNetworks().find((v) => v.caipNetworkId === y), g = this.getCaipNetworks().find((v) => v.caipNetworkId === b || // This is a workaround used in Solana network to support deprecated caipNetworkId
        "deprecatedCaipNetworkId" in v && v.deprecatedCaipNetworkId === b);
      }
      const f = p || g;
      (f == null ? void 0 : f.chainNamespace) === m.state.activeChain ? T.state.enableNetworkSwitch && !T.state.allowUnsupportedChain && ((h = m.state.activeCaipNetwork) == null ? void 0 : h.name) === z.UNSUPPORTED_NETWORK_NAME ? m.showUnsupportedChainUI() : this.setCaipNetwork(f) : s || r && this.setCaipNetworkOfNamespace(r, o), this.syncConnectedWalletInfo(o), uc.isLowerCaseMatch(i, W.state.address) || this.syncAccountInfo(i, f == null ? void 0 : f.id, o), s ? await this.syncBalance({ address: i, chainId: f == null ? void 0 : f.id, chainNamespace: o }) : await this.syncBalance({ address: i, chainId: r == null ? void 0 : r.id, chainNamespace: o });
    }
  }
  async syncAccountInfo(e, s, r) {
    const i = this.getCaipAddress(r), n = s || (i == null ? void 0 : i.split(":")[1]);
    if (!n)
      return;
    const o = `${r}:${n}:${e}`;
    this.setCaipAddress(o, r), await this.syncIdentity({
      address: e,
      chainId: n,
      chainNamespace: r
    });
  }
  async syncReownName(e, s) {
    try {
      const r = await this.getReownName(e);
      if (r[0]) {
        const i = r[0];
        this.setProfileName(i.name, s);
      } else
        this.setProfileName(null, s);
    } catch {
      this.setProfileName(null, s);
    }
  }
  syncConnectedWalletInfo(e) {
    var i;
    const s = F.getConnectorId(e), r = Se.getProviderId(e);
    if (r === ys.CONNECTOR_TYPE_ANNOUNCED || r === ys.CONNECTOR_TYPE_INJECTED) {
      if (s) {
        const n = this.getConnectors().find((o) => o.id === s);
        if (n) {
          const { info: o, name: a, imageUrl: c } = n, l = c || this.getConnectorImage(n);
          this.setConnectedWalletInfo({ name: a, icon: l, ...o }, e);
        }
      }
    } else if (r === ys.CONNECTOR_TYPE_WALLET_CONNECT) {
      const n = Se.getProvider(e);
      n != null && n.session && this.setConnectedWalletInfo({
        ...n.session.peer.metadata,
        name: n.session.peer.metadata.name,
        icon: (i = n.session.peer.metadata.icons) == null ? void 0 : i[0]
      }, e);
    } else if (s && s === z.CONNECTOR_ID.COINBASE) {
      const n = this.getConnectors().find((o) => o.id === z.CONNECTOR_ID.COINBASE);
      this.setConnectedWalletInfo({ name: "Coinbase Wallet", icon: this.getConnectorImage(n) }, e);
    }
  }
  async syncBalance(e) {
    !Wu.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find((r) => {
      var i;
      return r.id.toString() === ((i = e.chainId) == null ? void 0 : i.toString());
    }) || !e.chainId || await this.updateNativeBalance(e.address, e.chainId, e.chainNamespace);
  }
  async ready() {
    await this.readyPromise;
  }
  async updateNativeBalance(e, s, r) {
    const i = this.getAdapter(r), n = m.getCaipNetworkByNamespace(r, s);
    if (i) {
      const o = await i.getBalance({
        address: e,
        chainId: s,
        caipNetwork: n,
        tokens: this.options.tokens
      });
      return this.setBalance(o.balance, o.symbol, r), o;
    }
  }
  // -- Universal Provider ---------------------------------------------------
  async initializeUniversalAdapter() {
    var r, i, n, o, a, c, l, u, d, h;
    const e = mI.createLogger((p, ...g) => {
      p && this.handleAlertError(p), console.error(...g);
    }), s = {
      projectId: (r = this.options) == null ? void 0 : r.projectId,
      metadata: {
        name: (i = this.options) != null && i.metadata ? (n = this.options) == null ? void 0 : n.metadata.name : "",
        description: (o = this.options) != null && o.metadata ? (a = this.options) == null ? void 0 : a.metadata.description : "",
        url: (c = this.options) != null && c.metadata ? (l = this.options) == null ? void 0 : l.metadata.url : "",
        icons: (u = this.options) != null && u.metadata ? (d = this.options) == null ? void 0 : d.metadata.icons : [""]
      },
      logger: e
    };
    T.setManualWCControl(!!((h = this.options) != null && h.manualWCControl)), this.universalProvider = this.options.universalProvider ?? await pI.init(s), this.listenWalletConnect();
  }
  listenWalletConnect() {
    this.universalProvider && (this.universalProvider.on("display_uri", (e) => {
      Y.setUri(e);
    }), this.universalProvider.on("connect", Y.finalizeWcConnection), this.universalProvider.on("disconnect", () => {
      this.chainNamespaces.forEach((e) => {
        this.resetAccount(e);
      }), Y.resetWcConnection();
    }), this.universalProvider.on("chainChanged", (e) => {
      const s = this.getCaipNetworks().find((i) => i.id == e), r = this.getCaipNetwork();
      if (!s) {
        this.setUnsupportedNetwork(e);
        return;
      }
      (r == null ? void 0 : r.id) !== (s == null ? void 0 : s.id) && this.setCaipNetwork(s);
    }), this.universalProvider.on("session_event", (e) => {
      if (to.isSessionEventData(e)) {
        const { name: s, data: r } = e.params.event;
        s === "accountsChanged" && Array.isArray(r) && X.isCaipAddress(r[0]) && this.syncAccount(ps.parseCaipAddress(r[0]));
      }
    }));
  }
  createUniversalProvider() {
    var e;
    return !this.universalProviderInitPromise && X.isClient() && ((e = this.options) != null && e.projectId) && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
  }
  async getUniversalProvider() {
    if (!this.universalProvider)
      try {
        await this.createUniversalProvider();
      } catch (e) {
        Pe.sendEvent({
          type: "error",
          event: "INTERNAL_SDK_ERROR",
          properties: {
            errorType: "UniversalProviderInitError",
            errorMessage: e instanceof Error ? e.message : "Unknown",
            uncaught: !1
          }
        }), console.error("AppKit:getUniversalProvider - Cannot create provider", e);
      }
    return this.universalProvider;
  }
  // - Utils -------------------------------------------------------------------
  handleAlertError(e) {
    const s = Object.entries(Pr.UniversalProviderErrors).find(([, { message: a }]) => e.message.includes(a)), [r, i] = s ?? [], { message: n, alertErrorKey: o } = i ?? {};
    if (r && n && !this.reportedAlertErrors[r]) {
      const a = Pr.ALERT_ERRORS[o];
      a && (Fs.open(a, "error"), this.reportedAlertErrors[r] = !0);
    }
  }
  getAdapter(e) {
    var s;
    if (e)
      return (s = this.chainAdapters) == null ? void 0 : s[e];
  }
  createAdapter(e) {
    var i;
    if (!e)
      return;
    const s = e.namespace;
    if (!s)
      return;
    this.createClients();
    const r = e;
    r.namespace = s, r.construct({
      namespace: s,
      projectId: (i = this.options) == null ? void 0 : i.projectId,
      networks: this.getCaipNetworks()
    }), this.chainNamespaces.includes(s) || this.chainNamespaces.push(s), this.chainAdapters && (this.chainAdapters[s] = r);
  }
  // -- Public -------------------------------------------------------------------
  async open(e) {
    if (await this.injectModalUi(), e != null && e.uri && Y.setUri(e.uri), e != null && e.arguments)
      switch (e == null ? void 0 : e.view) {
        case "Swap":
          return ze.open({ ...e, data: { swap: e.arguments } });
      }
    return ze.open(e);
  }
  async close() {
    await this.injectModalUi(), ze.close();
  }
  setLoading(e, s) {
    ze.setLoading(e, s);
  }
  async disconnect(e) {
    await Y.disconnect(e);
  }
  getSIWX() {
    return T.state.siwx;
  }
  // -- review these -------------------------------------------------------------------
  getError() {
    return "";
  }
  getChainId() {
    var e;
    return (e = m.state.activeCaipNetwork) == null ? void 0 : e.id;
  }
  async switchNetwork(e) {
    const s = this.getCaipNetworks().find((r) => r.id === e.id);
    if (!s) {
      Fs.open(Pr.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
      return;
    }
    await m.switchActiveNetwork(s);
  }
  getWalletProvider() {
    return m.state.activeChain ? Se.state.providers[m.state.activeChain] : null;
  }
  getWalletProviderType() {
    return Se.getProviderId(m.state.activeChain);
  }
  subscribeProviders(e) {
    return Se.subscribeProviders(e);
  }
  getThemeMode() {
    return wt.state.themeMode;
  }
  getThemeVariables() {
    return wt.state.themeVariables;
  }
  setThemeMode(e) {
    wt.setThemeMode(e), Rh(wt.state.themeMode);
  }
  setTermsConditionsUrl(e) {
    T.setTermsConditionsUrl(e);
  }
  setPrivacyPolicyUrl(e) {
    T.setPrivacyPolicyUrl(e);
  }
  setThemeVariables(e) {
    wt.setThemeVariables(e), DI(wt.state.themeVariables);
  }
  subscribeTheme(e) {
    return wt.subscribe(e);
  }
  getWalletInfo() {
    return W.state.connectedWalletInfo;
  }
  getAccount(e) {
    var o;
    const s = F.getAuthConnector(e), r = m.getAccountData(e), i = m.state.activeChain, n = q.getConnectedConnectorId(e || i);
    if (r)
      return {
        allAccounts: r.allAccounts,
        caipAddress: r.caipAddress,
        address: X.getPlainAddress(r.caipAddress),
        isConnected: !!r.caipAddress,
        status: r.status,
        embeddedWalletInfo: s && n === z.CONNECTOR_ID.AUTH ? {
          user: r.user ? {
            ...r.user,
            /*
             * Getting the username from the chain controller works well for social logins,
             * but Farcaster uses a different connection flow and doesn't emit the username via events.
             * Since the username is stored in local storage before the chain controller updates,
             * it's safe to use the local storage value here.
             */
            username: q.getConnectedSocialUsername()
          } : void 0,
          authProvider: r.socialProvider || "email",
          accountType: (o = r.preferredAccountTypes) == null ? void 0 : o[e || i],
          isSmartAccountDeployed: !!r.smartAccountDeployed
        } : void 0
      };
  }
  subscribeAccount(e, s) {
    const r = () => {
      const i = this.getAccount(s);
      i && e(i);
    };
    s ? m.subscribeChainProp("accountState", r, s) : m.subscribe(r), F.subscribe(r);
  }
  subscribeNetwork(e) {
    return m.subscribe(({ activeCaipNetwork: s }) => {
      e({
        caipNetwork: s,
        chainId: s == null ? void 0 : s.id,
        caipNetworkId: s == null ? void 0 : s.caipNetworkId
      });
    });
  }
  subscribeWalletInfo(e) {
    return W.subscribeKey("connectedWalletInfo", e);
  }
  subscribeShouldUpdateToAddress(e) {
    W.subscribeKey("shouldUpdateToAddress", e);
  }
  subscribeCaipNetworkChange(e) {
    m.subscribeKey("activeCaipNetwork", e);
  }
  getState() {
    return Ns.state;
  }
  subscribeState(e) {
    return Ns.subscribe(e);
  }
  showErrorMessage(e) {
    Bt.showError(e);
  }
  showSuccessMessage(e) {
    Bt.showSuccess(e);
  }
  getEvent() {
    return { ...Pe.state };
  }
  subscribeEvents(e) {
    return Pe.subscribe(e);
  }
  replace(e) {
    re.replace(e);
  }
  redirect(e) {
    re.push(e);
  }
  popTransactionStack(e) {
    re.popTransactionStack(e);
  }
  isOpen() {
    return ze.state.open;
  }
  isTransactionStackEmpty() {
    return re.state.transactionStack.length === 0;
  }
  static getInstance() {
    return this.instance;
  }
  updateFeatures(e) {
    T.setFeatures(e);
  }
  updateRemoteFeatures(e) {
    T.setRemoteFeatures(e);
  }
  updateOptions(e) {
    const r = { ...T.state || {}, ...e };
    T.setOptions(r);
  }
  setConnectMethodsOrder(e) {
    T.setConnectMethodsOrder(e);
  }
  setWalletFeaturesOrder(e) {
    T.setWalletFeaturesOrder(e);
  }
  setCollapseWallets(e) {
    T.setCollapseWallets(e);
  }
  setSocialsOrder(e) {
    T.setSocialsOrder(e);
  }
  getConnectMethodsOrder() {
    return Wa.getConnectOrderMethod(T.state.features, F.getConnectors());
  }
  /**
   * Adds a network to an existing adapter in AppKit.
   * @param namespace - The chain namespace to add the network to (e.g. 'eip155', 'solana')
   * @param network - The network configuration to add
   * @throws Error if adapter for namespace doesn't exist
   */
  addNetwork(e, s) {
    if (this.chainAdapters && !this.chainAdapters[e])
      throw new Error(`Adapter for namespace ${e} doesn't exist`);
    const r = this.extendCaipNetwork(s, this.options);
    this.getCaipNetworks().find((i) => i.id === r.id) || m.addNetwork(r);
  }
  /**
   * Removes a network from an existing adapter in AppKit.
   * @param namespace - The chain namespace the network belongs to
   * @param networkId - The network ID to remove
   * @throws Error if adapter for namespace doesn't exist or if removing last network
   */
  removeNetwork(e, s) {
    if (this.chainAdapters && !this.chainAdapters[e])
      throw new Error(`Adapter for namespace ${e} doesn't exist`);
    this.getCaipNetworks().find((i) => i.id === s) && m.removeNetwork(e, s);
  }
}
let Ru = !1;
class Dh extends WI {
  // -- Overrides --------------------------------------------------------------
  async open(e) {
    F.isConnected() || await super.open(e);
  }
  async close() {
    await super.close(), this.options.manualWCControl && Y.finalizeWcConnection();
  }
  async syncIdentity(e) {
    return Promise.resolve();
  }
  async syncBalance(e) {
    return Promise.resolve();
  }
  async injectModalUi() {
    if (!Ru && X.isClient()) {
      if (await import("./basic-Oo-dKhpA.js"), await import("./w3m-modal-zgSRIMCD.js"), !document.querySelector("w3m-modal")) {
        const s = document.createElement("w3m-modal");
        !T.state.disableAppend && !T.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", s);
      }
      Ru = !0;
    }
  }
}
const zI = "1.7.8";
function HI(t) {
  return new Dh({
    ...t,
    basic: !0,
    sdkVersion: `html-core-${zI}`
  });
}
const _A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AppKit: Dh,
  createAppKit: HI
}, Symbol.toStringTag, { value: "Module" }));
export {
  K as A,
  Ph as B,
  F as C,
  za as D,
  Pe as E,
  Xr as F,
  uA as G,
  Pg as H,
  Rc as I,
  rd as J,
  yg as K,
  Og as L,
  ze as M,
  dA as N,
  T as O,
  lA as P,
  go as Q,
  re as R,
  q as S,
  wt as T,
  pA as U,
  hA as V,
  Wa as W,
  _A as X,
  eo as a,
  X as b,
  Zn as c,
  Vu as d,
  AA as e,
  Y as f,
  z as g,
  m as h,
  Lr as i,
  Mt as j,
  Bt as k,
  Ee as l,
  EA as m,
  We as n,
  NA as o,
  _e as p,
  Qe as q,
  IA as r,
  et as s,
  Oi as t,
  Fs as u,
  yI as v,
  At as w,
  vA as x,
  W as y,
  CA as z
};
