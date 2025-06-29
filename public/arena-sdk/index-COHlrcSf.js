import { B as N, D as V, i as b, r as $, a as S, x as m, n as q, F as B, o as W, e as Y } from "./core-DT8g9mFm.js";
const w = {
  getSpacingStyles(e, t) {
    if (Array.isArray(e))
      return e[t] ? `var(--wui-spacing-${e[t]})` : void 0;
    if (typeof e == "string")
      return `var(--wui-spacing-${e})`;
  },
  getFormattedDate(e) {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(e);
  },
  getHostName(e) {
    try {
      return new URL(e).hostname;
    } catch {
      return "";
    }
  },
  getTruncateString({ string: e, charsStart: t, charsEnd: i, truncate: r }) {
    return e.length <= t + i ? e : r === "end" ? `${e.substring(0, t)}...` : r === "start" ? `...${e.substring(e.length - i)}` : `${e.substring(0, Math.floor(t))}...${e.substring(e.length - Math.floor(i))}`;
  },
  generateAvatarColors(e) {
    const i = e.toLowerCase().replace(/^0x/iu, "").replace(/[^a-f0-9]/gu, "").substring(0, 6).padEnd(6, "0"), r = this.hexToRgb(i), a = getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"), n = 100 - 3 * Number(a == null ? void 0 : a.replace("px", "")), s = `${n}% ${n}% at 65% 40%`, l = [];
    for (let d = 0; d < 5; d += 1) {
      const g = this.tintColor(r, 0.15 * d);
      l.push(`rgb(${g[0]}, ${g[1]}, ${g[2]})`);
    }
    return `
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${s}
   `;
  },
  hexToRgb(e) {
    const t = parseInt(e, 16), i = t >> 16 & 255, r = t >> 8 & 255, a = t & 255;
    return [i, r, a];
  },
  tintColor(e, t) {
    const [i, r, a] = e, o = Math.round(i + (255 - i) * t), n = Math.round(r + (255 - r) * t), s = Math.round(a + (255 - a) * t);
    return [o, n, s];
  },
  isNumber(e) {
    return {
      number: /^[0-9]+$/u
    }.number.test(e);
  },
  getColorTheme(e) {
    var t;
    return e || (typeof window < "u" && window.matchMedia ? (t = window.matchMedia("(prefers-color-scheme: dark)")) != null && t.matches ? "dark" : "light" : "dark");
  },
  splitBalance(e) {
    const t = e.split(".");
    return t.length === 2 ? [t[0], t[1]] : ["0", "00"];
  },
  roundNumber(e, t, i) {
    return e.toString().length >= t ? Number(e).toFixed(i) : e;
  },
  formatNumberToLocalString(e, t = 2) {
    return e === void 0 ? "0.00" : typeof e == "number" ? e.toLocaleString("en-US", {
      maximumFractionDigits: t,
      minimumFractionDigits: t
    }) : parseFloat(e).toLocaleString("en-US", {
      maximumFractionDigits: t,
      minimumFractionDigits: t
    });
  }
};
function X(e, t) {
  const { kind: i, elements: r } = t;
  return {
    kind: i,
    elements: r,
    finisher(a) {
      customElements.get(e) || customElements.define(e, a);
    }
  };
}
function K(e, t) {
  return customElements.get(e) || customElements.define(e, t), t;
}
function x(e) {
  return function(i) {
    return typeof i == "function" ? K(e, i) : X(e, i);
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = { attribute: !0, type: String, converter: V, reflect: !1, hasChanged: N }, Q = (e = Z, t, i) => {
  const { kind: r, metadata: a } = i;
  let o = globalThis.litPropertyMetadata.get(a);
  if (o === void 0 && globalThis.litPropertyMetadata.set(a, o = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), o.set(i.name, e), r === "accessor") {
    const { name: n } = i;
    return { set(s) {
      const l = t.get.call(this);
      t.set.call(this, s), this.requestUpdate(n, l, e);
    }, init(s) {
      return s !== void 0 && this.C(n, void 0, e, s), s;
    } };
  }
  if (r === "setter") {
    const { name: n } = i;
    return function(s) {
      const l = this[n];
      t.call(this, s), this.requestUpdate(n, l, e);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function c(e) {
  return (t, i) => typeof i == "object" ? Q(e, t, i) : ((r, a, o) => {
    const n = a.hasOwnProperty(o);
    return a.constructor.createProperty(o, r), n ? Object.getOwnPropertyDescriptor(a, o) : void 0;
  })(e, t, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function bt(e) {
  return c({ ...e, state: !0, attribute: !1 });
}
const J = b`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;
var h = function(e, t, i, r) {
  var a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, i, r);
  else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
  return a > 3 && o && Object.defineProperty(t, i, o), o;
};
let u = class extends S {
  render() {
    return this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && w.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && w.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && w.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && w.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && w.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && w.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && w.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && w.getSpacingStyles(this.margin, 3)};
    `, m`<slot></slot>`;
  }
};
u.styles = [$, J];
h([
  c()
], u.prototype, "flexDirection", void 0);
h([
  c()
], u.prototype, "flexWrap", void 0);
h([
  c()
], u.prototype, "flexBasis", void 0);
h([
  c()
], u.prototype, "flexGrow", void 0);
h([
  c()
], u.prototype, "flexShrink", void 0);
h([
  c()
], u.prototype, "alignItems", void 0);
h([
  c()
], u.prototype, "justifyContent", void 0);
h([
  c()
], u.prototype, "columnGap", void 0);
h([
  c()
], u.prototype, "rowGap", void 0);
h([
  c()
], u.prototype, "gap", void 0);
h([
  c()
], u.prototype, "padding", void 0);
h([
  c()
], u.prototype, "margin", void 0);
u = h([
  x("wui-flex")
], u);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const St = (e) => e ?? q;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = (e) => e === null || typeof e != "object" && typeof e != "function", et = (e) => e.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E = { ATTRIBUTE: 1, CHILD: 2 }, H = (e) => (...t) => ({ _$litDirective$: e, values: t });
let F = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, i, r) {
    this._$Ct = t, this._$AM = i, this._$Ci = r;
  }
  _$AS(t, i) {
    return this.update(t, i);
  }
  update(t, i) {
    return this.render(...i);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _ = (e, t) => {
  var r;
  const i = e._$AN;
  if (i === void 0) return !1;
  for (const a of i) (r = a._$AO) == null || r.call(a, t, !1), _(a, t);
  return !0;
}, T = (e) => {
  let t, i;
  do {
    if ((t = e._$AM) === void 0) break;
    i = t._$AN, i.delete(e), e = t;
  } while ((i == null ? void 0 : i.size) === 0);
}, G = (e) => {
  for (let t; t = e._$AM; e = t) {
    let i = t._$AN;
    if (i === void 0) t._$AN = i = /* @__PURE__ */ new Set();
    else if (i.has(e)) break;
    i.add(e), rt(t);
  }
};
function it(e) {
  this._$AN !== void 0 ? (T(this), this._$AM = e, G(this)) : this._$AM = e;
}
function ot(e, t = !1, i = 0) {
  const r = this._$AH, a = this._$AN;
  if (a !== void 0 && a.size !== 0) if (t) if (Array.isArray(r)) for (let o = i; o < r.length; o++) _(r[o], !1), T(r[o]);
  else r != null && (_(r, !1), T(r));
  else _(this, e);
}
const rt = (e) => {
  e.type == E.CHILD && (e._$AP ?? (e._$AP = ot), e._$AQ ?? (e._$AQ = it));
};
class at extends F {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, i, r) {
    super._$AT(t, i, r), G(this), this.isConnected = t._$AU;
  }
  _$AO(t, i = !0) {
    var r, a;
    t !== this.isConnected && (this.isConnected = t, t ? (r = this.reconnected) == null || r.call(this) : (a = this.disconnected) == null || a.call(this)), i && (_(this, t), T(this));
  }
  setValue(t) {
    if (et(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const i = [...this._$Ct._$AH];
      i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt {
  constructor(t) {
    this.G = t;
  }
  disconnect() {
    this.G = void 0;
  }
  reconnect(t) {
    this.G = t;
  }
  deref() {
    return this.G;
  }
}
class st {
  constructor() {
    this.Y = void 0, this.Z = void 0;
  }
  get() {
    return this.Y;
  }
  pause() {
    this.Y ?? (this.Y = new Promise((t) => this.Z = t));
  }
  resume() {
    var t;
    (t = this.Z) == null || t.call(this), this.Y = this.Z = void 0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = (e) => !tt(e) && typeof e.then == "function", L = 1073741823;
class ct extends at {
  constructor() {
    super(...arguments), this._$Cwt = L, this._$Cbt = [], this._$CK = new nt(this), this._$CX = new st();
  }
  render(...t) {
    return t.find((i) => !D(i)) ?? B;
  }
  update(t, i) {
    const r = this._$Cbt;
    let a = r.length;
    this._$Cbt = i;
    const o = this._$CK, n = this._$CX;
    this.isConnected || this.disconnected();
    for (let s = 0; s < i.length && !(s > this._$Cwt); s++) {
      const l = i[s];
      if (!D(l)) return this._$Cwt = s, l;
      s < a && l === r[s] || (this._$Cwt = L, a = 0, Promise.resolve(l).then(async (d) => {
        for (; n.get(); ) await n.get();
        const g = o.deref();
        if (g !== void 0) {
          const P = g._$Cbt.indexOf(l);
          P > -1 && P < g._$Cwt && (g._$Cwt = P, g.setValue(d));
        }
      }));
    }
    return B;
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause();
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume();
  }
}
const lt = H(ct);
class ut {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  set(t, i) {
    this.cache.set(t, i);
  }
  get(t) {
    return this.cache.get(t);
  }
  has(t) {
    return this.cache.has(t);
  }
  delete(t) {
    this.cache.delete(t);
  }
  clear() {
    this.cache.clear();
  }
}
const O = new ut(), ht = b`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;
var j = function(e, t, i, r) {
  var a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, i, r);
  else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
  return a > 3 && o && Object.defineProperty(t, i, o), o;
};
const U = {
  add: async () => (await import("./add-CaGj1Avh.js")).addSvg,
  allWallets: async () => (await import("./all-wallets-CuHPigW6.js")).allWalletsSvg,
  arrowBottomCircle: async () => (await import("./arrow-bottom-circle-CYY8uLvQ.js")).arrowBottomCircleSvg,
  appStore: async () => (await import("./app-store-DUxNW7lI.js")).appStoreSvg,
  apple: async () => (await import("./apple-CINi0cqP.js")).appleSvg,
  arrowBottom: async () => (await import("./arrow-bottom-dHaJQncA.js")).arrowBottomSvg,
  arrowLeft: async () => (await import("./arrow-left-DiMGVWlz.js")).arrowLeftSvg,
  arrowRight: async () => (await import("./arrow-right-DBISky9Z.js")).arrowRightSvg,
  arrowTop: async () => (await import("./arrow-top-B-Tvq4WQ.js")).arrowTopSvg,
  bank: async () => (await import("./bank-iWmwNGaE.js")).bankSvg,
  browser: async () => (await import("./browser-BOTrnQ0L.js")).browserSvg,
  card: async () => (await import("./card-CfZMN3Y8.js")).cardSvg,
  checkmark: async () => (await import("./checkmark-DB8C7Ds8.js")).checkmarkSvg,
  checkmarkBold: async () => (await import("./checkmark-bold-CRAUp3DQ.js")).checkmarkBoldSvg,
  chevronBottom: async () => (await import("./chevron-bottom-CucFU2me.js")).chevronBottomSvg,
  chevronLeft: async () => (await import("./chevron-left-DVxH3cWd.js")).chevronLeftSvg,
  chevronRight: async () => (await import("./chevron-right-DbHcSXWv.js")).chevronRightSvg,
  chevronTop: async () => (await import("./chevron-top-QzcpSyQR.js")).chevronTopSvg,
  chromeStore: async () => (await import("./chrome-store-DkbZSigc.js")).chromeStoreSvg,
  clock: async () => (await import("./clock-Igad78ae.js")).clockSvg,
  close: async () => (await import("./close-BMUvrXfi.js")).closeSvg,
  compass: async () => (await import("./compass-C-IuQZhE.js")).compassSvg,
  coinPlaceholder: async () => (await import("./coinPlaceholder-CZvvVE15.js")).coinPlaceholderSvg,
  copy: async () => (await import("./copy-mcoqmSgz.js")).copySvg,
  cursor: async () => (await import("./cursor-C_Wbsod3.js")).cursorSvg,
  cursorTransparent: async () => (await import("./cursor-transparent-BIW1XI_n.js")).cursorTransparentSvg,
  desktop: async () => (await import("./desktop-DraveGi6.js")).desktopSvg,
  disconnect: async () => (await import("./disconnect-DTzBpFgW.js")).disconnectSvg,
  discord: async () => (await import("./discord-Bg7Jz2BT.js")).discordSvg,
  etherscan: async () => (await import("./etherscan-DLFt0i72.js")).etherscanSvg,
  extension: async () => (await import("./extension-i75LXaIu.js")).extensionSvg,
  externalLink: async () => (await import("./external-link-BEl40fnM.js")).externalLinkSvg,
  facebook: async () => (await import("./facebook-BvG7NUxx.js")).facebookSvg,
  farcaster: async () => (await import("./farcaster-C4MQRz9l.js")).farcasterSvg,
  filters: async () => (await import("./filters-Bk9_JF9W.js")).filtersSvg,
  github: async () => (await import("./github-WEn1R4a5.js")).githubSvg,
  google: async () => (await import("./google-KesXJBpA.js")).googleSvg,
  helpCircle: async () => (await import("./help-circle-Cd76os_Z.js")).helpCircleSvg,
  image: async () => (await import("./image-COR7JVH1.js")).imageSvg,
  id: async () => (await import("./id-DSZbkLQ_.js")).idSvg,
  infoCircle: async () => (await import("./info-circle-CVzqyShK.js")).infoCircleSvg,
  lightbulb: async () => (await import("./lightbulb-CtH1FH_0.js")).lightbulbSvg,
  mail: async () => (await import("./mail-BPAnLdGG.js")).mailSvg,
  mobile: async () => (await import("./mobile-CfCUshdA.js")).mobileSvg,
  more: async () => (await import("./more-CDVHVyF4.js")).moreSvg,
  networkPlaceholder: async () => (await import("./network-placeholder-LwSaNTv6.js")).networkPlaceholderSvg,
  nftPlaceholder: async () => (await import("./nftPlaceholder-Bi0FWn9b.js")).nftPlaceholderSvg,
  off: async () => (await import("./off-Bhx2zlO8.js")).offSvg,
  playStore: async () => (await import("./play-store-BVj6Q_u1.js")).playStoreSvg,
  plus: async () => (await import("./plus-BIkeS2Sc.js")).plusSvg,
  qrCode: async () => (await import("./qr-code-WN32VaEB.js")).qrCodeIcon,
  recycleHorizontal: async () => (await import("./recycle-horizontal-BJAhJ4Cq.js")).recycleHorizontalSvg,
  refresh: async () => (await import("./refresh-1plIvE5-.js")).refreshSvg,
  search: async () => (await import("./search-CIeuN_Yn.js")).searchSvg,
  send: async () => (await import("./send-BLUrKkuS.js")).sendSvg,
  swapHorizontal: async () => (await import("./swapHorizontal-DUkiMgZh.js")).swapHorizontalSvg,
  swapHorizontalMedium: async () => (await import("./swapHorizontalMedium-CixUKq6d.js")).swapHorizontalMediumSvg,
  swapHorizontalBold: async () => (await import("./swapHorizontalBold-4YH5E2SP.js")).swapHorizontalBoldSvg,
  swapHorizontalRoundedBold: async () => (await import("./swapHorizontalRoundedBold-DhRzd1B0.js")).swapHorizontalRoundedBoldSvg,
  swapVertical: async () => (await import("./swapVertical-DM9haKK_.js")).swapVerticalSvg,
  telegram: async () => (await import("./telegram-DNXWEDv1.js")).telegramSvg,
  threeDots: async () => (await import("./three-dots-ISBP0YTM.js")).threeDotsSvg,
  twitch: async () => (await import("./twitch-NbuckBBr.js")).twitchSvg,
  twitter: async () => (await import("./x-DZCRo3OL.js")).xSvg,
  twitterIcon: async () => (await import("./twitterIcon-sC_tDwJD.js")).twitterIconSvg,
  verify: async () => (await import("./verify-CNVnt4Ql.js")).verifySvg,
  verifyFilled: async () => (await import("./verify-filled-Cc1gquGa.js")).verifyFilledSvg,
  wallet: async () => (await import("./wallet-ByuNiC1g.js")).walletSvg,
  walletConnect: async () => (await import("./walletconnect-25mm2C_2.js")).walletConnectSvg,
  walletConnectLightBrown: async () => (await import("./walletconnect-25mm2C_2.js")).walletConnectLightBrownSvg,
  walletConnectBrown: async () => (await import("./walletconnect-25mm2C_2.js")).walletConnectBrownSvg,
  walletPlaceholder: async () => (await import("./wallet-placeholder-BT1piwN1.js")).walletPlaceholderSvg,
  warningCircle: async () => (await import("./warning-circle-B02Ol9D6.js")).warningCircleSvg,
  x: async () => (await import("./x-DZCRo3OL.js")).xSvg,
  info: async () => (await import("./info-RTHItMt-.js")).infoSvg,
  exclamationTriangle: async () => (await import("./exclamation-triangle-BnHqA-hG.js")).exclamationTriangleSvg,
  reown: async () => (await import("./reown-logo-ZY_GtD2i.js")).reownSvg
};
async function pt(e) {
  if (O.has(e))
    return O.get(e);
  const i = (U[e] ?? U.copy)();
  return O.set(e, i), i;
}
let v = class extends S {
  constructor() {
    super(...arguments), this.size = "md", this.name = "copy", this.color = "fg-300", this.aspectRatio = "1 / 1";
  }
  render() {
    return this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `, m`${lt(pt(this.name), m`<div class="fallback"></div>`)}`;
  }
};
v.styles = [$, W, ht];
j([
  c()
], v.prototype, "size", void 0);
j([
  c()
], v.prototype, "name", void 0);
j([
  c()
], v.prototype, "color", void 0);
j([
  c()
], v.prototype, "aspectRatio", void 0);
v = j([
  x("wui-icon")
], v);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt = H(class extends F {
  constructor(e) {
    var t;
    if (super(e), e.type !== E.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var r, a;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((o) => o !== "")));
      for (const o in t) t[o] && !((r = this.nt) != null && r.has(o)) && this.st.add(o);
      return this.render(t);
    }
    const i = e.element.classList;
    for (const o of this.st) o in t || (i.remove(o), this.st.delete(o));
    for (const o in t) {
      const n = !!t[o];
      n === this.st.has(o) || (a = this.nt) != null && a.has(o) || (n ? (i.add(o), this.st.add(o)) : (i.remove(o), this.st.delete(o)));
    }
    return B;
  }
}), gt = b`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;
var R = function(e, t, i, r) {
  var a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, i, r);
  else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
  return a > 3 && o && Object.defineProperty(t, i, o), o;
};
let y = class extends S {
  constructor() {
    super(...arguments), this.variant = "paragraph-500", this.color = "fg-300", this.align = "left", this.lineClamp = void 0;
  }
  render() {
    const t = {
      [`wui-font-${this.variant}`]: !0,
      [`wui-color-${this.color}`]: !0,
      [`wui-line-clamp-${this.lineClamp}`]: !!this.lineClamp
    };
    return this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `, m`<slot class=${dt(t)}></slot>`;
  }
};
y.styles = [$, gt];
R([
  c()
], y.prototype, "variant", void 0);
R([
  c()
], y.prototype, "color", void 0);
R([
  c()
], y.prototype, "align", void 0);
R([
  c()
], y.prototype, "lineClamp", void 0);
y = R([
  x("wui-text")
], y);
const ft = b`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;
var f = function(e, t, i, r) {
  var a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, i, r);
  else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
  return a > 3 && o && Object.defineProperty(t, i, o), o;
};
let p = class extends S {
  constructor() {
    super(...arguments), this.size = "md", this.backgroundColor = "accent-100", this.iconColor = "accent-100", this.background = "transparent", this.border = !1, this.borderColor = "wui-color-bg-125", this.icon = "copy";
  }
  render() {
    const t = this.iconSize || this.size, i = this.size === "lg", r = this.size === "xl", a = i ? "12%" : "16%", o = i ? "xxs" : r ? "s" : "3xl", n = this.background === "gray", s = this.background === "opaque", l = this.backgroundColor === "accent-100" && s || this.backgroundColor === "success-100" && s || this.backgroundColor === "error-100" && s || this.backgroundColor === "inverse-100" && s;
    let d = `var(--wui-color-${this.backgroundColor})`;
    return l ? d = `var(--wui-icon-box-bg-${this.backgroundColor})` : n && (d = `var(--wui-color-gray-${this.backgroundColor})`), this.style.cssText = `
       --local-bg-value: ${d};
       --local-bg-mix: ${l || n ? "100%" : a};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === "wui-color-bg-125" ? "2px" : "1px"} solid ${this.border ? `var(--${this.borderColor})` : "transparent"}
   `, m` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `;
  }
};
p.styles = [$, Y, ft];
f([
  c()
], p.prototype, "size", void 0);
f([
  c()
], p.prototype, "backgroundColor", void 0);
f([
  c()
], p.prototype, "iconColor", void 0);
f([
  c()
], p.prototype, "iconSize", void 0);
f([
  c()
], p.prototype, "background", void 0);
f([
  c({ type: Boolean })
], p.prototype, "border", void 0);
f([
  c()
], p.prototype, "borderColor", void 0);
f([
  c()
], p.prototype, "icon", void 0);
p = f([
  x("wui-icon-box")
], p);
const wt = b`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;
var A = function(e, t, i, r) {
  var a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, i, r);
  else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
  return a > 3 && o && Object.defineProperty(t, i, o), o;
};
let C = class extends S {
  constructor() {
    super(...arguments), this.src = "./path/to/image.jpg", this.alt = "Image", this.size = void 0;
  }
  render() {
    return this.style.cssText = `
      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      `, m`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`;
  }
  handleImageError() {
    this.dispatchEvent(new CustomEvent("onLoadError", { bubbles: !0, composed: !0 }));
  }
};
C.styles = [$, W, wt];
A([
  c()
], C.prototype, "src", void 0);
A([
  c()
], C.prototype, "alt", void 0);
A([
  c()
], C.prototype, "size", void 0);
C = A([
  x("wui-image")
], C);
const mt = b`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;
var I = function(e, t, i, r) {
  var a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, i, r);
  else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
  return a > 3 && o && Object.defineProperty(t, i, o), o;
};
let z = class extends S {
  constructor() {
    super(...arguments), this.variant = "main", this.size = "lg";
  }
  render() {
    this.dataset.variant = this.variant, this.dataset.size = this.size;
    const t = this.size === "md" ? "mini-700" : "micro-700";
    return m`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `;
  }
};
z.styles = [$, mt];
I([
  c()
], z.prototype, "variant", void 0);
I([
  c()
], z.prototype, "size", void 0);
z = I([
  x("wui-tag")
], z);
const vt = b`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;
var M = function(e, t, i, r) {
  var a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, i, r);
  else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
  return a > 3 && o && Object.defineProperty(t, i, o), o;
};
let k = class extends S {
  constructor() {
    super(...arguments), this.color = "accent-100", this.size = "lg";
  }
  render() {
    return this.style.cssText = `--local-color: ${this.color === "inherit" ? "inherit" : `var(--wui-color-${this.color})`}`, this.dataset.size = this.size, m`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`;
  }
};
k.styles = [$, vt];
M([
  c()
], k.prototype, "color", void 0);
M([
  c()
], k.prototype, "size", void 0);
k = M([
  x("wui-loading-spinner")
], k);
export {
  w as U,
  dt as a,
  x as c,
  H as e,
  at as f,
  c as n,
  St as o,
  bt as r
};
