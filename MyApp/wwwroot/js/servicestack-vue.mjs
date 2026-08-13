import { computed as f, inject as Ne, defineComponent as pe, openBlock as o, createElementBlock as u, mergeProps as Se, withModifiers as Re, renderSlot as Q, ref as O, shallowRef as Cn, nextTick as Ot, isRef as Ys, unref as ne, provide as Qt, watchEffect as rl, normalizeClass as h, createElementVNode as s, createCommentVNode as w, toDisplayString as S, h as Nt, resolveComponent as E, createBlock as Z, withCtx as we, useAttrs as So, createVNode as he, createTextVNode as ye, normalizeStyle as qn, createStaticVNode as tn, Fragment as ge, renderList as be, withDirectives as Ft, vModelCheckbox as zn, withKeys as Un, vModelSelect as Lo, markRaw as Vo, useSlots as fl, getCurrentInstance as je, onMounted as Qe, createSlots as Kn, normalizeProps as Zl, guardReactiveProps as Gl, vModelDynamic as Mo, onUnmounted as Jt, watch as ot, vModelText as _s, resolveDynamicComponent as ea, resolveDirective as To, reactive as Ao, Teleport as ta } from "vue";
import { lastRightPart as Ut, leftPart as ln, toDate as kt, map as qe, mapGet as ue, toCamelCase as Oo, toDateTime as Fo, chop as jo, isDate as nn, dateFmt as Io, fromXsdDuration as la, timeFmt12 as Po, omit as bt, appendQueryString as il, indexOfAny as Bo, apiValue as Eo, enc as Sn, createBus as Do, toKebabCase as Os, lastLeftPart as na, setQueryString as No, toTime as Ro, ApiResult as tt, nameOf as Ho, ResponseStatus as hn, ResponseError as Fs, sanitize as qo, errorResponseExcept as zo, humanize as Oe, delaySet as sa, rightPart as zl, queryString as Ln, combinePaths as Uo, toPascalCase as pt, errorResponse as xt, trimEnd as Ko, $1 as Wl, HttpMethods as Qn, omitEmpty as Qo, uniqueKeys as Xl, humanify as Cl, each as Jo, JsonServiceClient as Zo } from "@servicestack/client";
const aa = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), oa = {
  img: "png,jpg,jpeg,gif,svg,webp,png,jpg,jpeg,gif,bmp,tif,tiff,webp,ai,psd,ps".split(","),
  vid: "avi,m4v,mov,mp4,mpg,mpeg,wmv,webm".split(","),
  aud: "mp3,mpa,ogg,wav,wma,mid,webm".split(","),
  ppt: "key,odp,pps,ppt,pptx".split(","),
  xls: "xls,xlsm,xlsx,ods,csv,tsv".split(","),
  doc: "doc,docx,pdf,rtf,tex,txt,md,rst,xls,xlsm,xlsx,ods,key,odp,pps,ppt,pptx".split(","),
  zip: "zip,tar,gz,7z,rar,gzip,deflate,br,iso,dmg,z,lz,lz4,lzh,s7z,apl,arg,jar,war".split(","),
  exe: "exe,bat,sh,cmd,com,app,msi,run,vb,vbs,js,ws,wsh".split(","),
  att: "bin,oct,dat".split(",")
  //attachment
}, js = Object.keys(oa), wt = (e, t) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`, Ul = {
  img: wt("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: wt("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: wt("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: wt("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: wt("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: wt("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: wt("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: wt("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: wt("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, Go = /[\r\n%#()<>?[\\\]^`{|}]/g, Is = 1024, Wo = ["Bytes", "KB", "MB", "GB", "TB"], Xo = (() => {
  const e = "application/", t = e + "vnd.openxmlformats-officedocument.", l = "image/", n = "text/", a = "audio/", d = "video/", i = {
    jpg: l + "jpeg",
    tif: l + "tiff",
    svg: l + "svg+xml",
    ico: l + "x-icon",
    ts: n + "typescript",
    py: n + "x-python",
    sh: n + "x-sh",
    mp3: a + "mpeg3",
    mpg: d + "mpeg",
    ogv: d + "ogg",
    xlsx: t + "spreadsheetml.sheet",
    xltx: t + "spreadsheetml.template",
    docx: t + "wordprocessingml.document",
    dotx: t + "wordprocessingml.template",
    pptx: t + "presentationml.presentation",
    potx: t + "presentationml.template",
    ppsx: t + "presentationml.slideshow",
    mdb: e + "vnd.ms-access"
  };
  function r(v, m) {
    v.split(",").forEach(($) => i[$] = m);
  }
  function c(v, m) {
    v.split(",").forEach(($) => i[$] = m($));
  }
  return c("jpeg,gif,png,tiff,bmp,webp", (v) => l + v), c("jsx,csv,css", (v) => n + v), c("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (v) => a + v), c("3gpp,avi,dv,divx,ogg,mp4,webm", (v) => d + v), c("rtf,pdf", (v) => e + v), r("htm,html,shtm", n + "html"), r("js,mjs,cjs", n + "javascript"), r("yml,yaml", e + "yaml"), r("bat,cmd", e + "bat"), r("xml,csproj,fsproj,vbproj", n + "xml"), r("txt,ps1", n + "plain"), r("qt,mov", d + "quicktime"), r("doc,dot", e + "msword"), r("xls,xlt,xla", e + "excel"), r("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), r("cer,crt,der", e + "x-x509-ca-cert"), r("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), r("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), i;
})();
let Vn = [];
function ra(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(Go, encodeURIComponent);
}
function Jn(e) {
  return "data:image/svg+xml;utf8," + ra(e);
}
function ia(e) {
  let t = URL.createObjectURL(e);
  return Vn.push(t), t;
}
function ua() {
  Vn.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (t) {
      console.error("URL.revokeObjectURL", t);
    }
  }), Vn = [];
}
function Zn(e) {
  if (!e) return null;
  let t = ln(e, "?");
  return Ut(t, "/");
}
function Fl(e) {
  let t = Zn(e);
  return t == null || t.indexOf(".") === -1 ? null : Ut(t, ".").toLowerCase();
}
function Gn(e) {
  let t = Fl(e.name);
  return t && aa.indexOf(t) >= 0 ? ia(e) : Rt(e.name);
}
function Wn(e) {
  if (!e) return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let t = Fl(e);
  return t && aa.indexOf(t) >= 0 || !1;
}
function Rt(e) {
  if (!e) return null;
  let t = Fl(e);
  return t == null || Wn(e) ? e : wl(t) || Jn(Ul.doc);
}
function wl(e) {
  let t = da(e);
  return t && Jn(t) || null;
}
function da(e) {
  if (Ul[e])
    return Ul[e];
  for (let t = 0; t < js.length; t++) {
    let l = js[t];
    if (oa[l].indexOf(e) >= 0)
      return Ul[l];
  }
  return null;
}
function Xn(e, t = 2) {
  if (e === 0) return "0 Bytes";
  const l = t < 0 ? 0 : t, n = Math.floor(Math.log(e) / Math.log(Is));
  return parseFloat((e / Math.pow(Is, n)).toFixed(l)) + " " + Wo[n];
}
function Yo(e) {
  return e.files && Array.from(e.files).map((t) => ({ fileName: t.name, contentLength: t.size, filePath: Gn(t) }));
}
function sn(e, t) {
  e.onerror = null, e.src = Yn(e.src, t) || "";
}
function Yn(e, t) {
  return wl(Ut(e, ".").toLowerCase()) || (t ? wl(t) || t : null) || wl("doc");
}
function Mn(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const t = Ut(e, ".").toLowerCase();
  return Xo[t] || "application/" + t;
}
function _o() {
  return {
    extSvg: da,
    extSrc: wl,
    getExt: Fl,
    encodeSvg: ra,
    canPreview: Wn,
    getFileName: Zn,
    getMimeType: Mn,
    formatBytes: Xn,
    filePathUri: Rt,
    svgToDataUri: Jn,
    fileImageUri: Gn,
    objectUrl: ia,
    flush: ua,
    inputFiles: Yo,
    iconOnError: sn,
    iconFallbackSrc: Yn
  };
}
class er {
  view;
  includeTypes;
  constructor(t) {
    Object.assign(this, t);
  }
  getTypeName() {
    return "MetadataApp";
  }
  getMethod() {
    return "GET";
  }
  createResponse() {
    return {};
  }
}
const ul = "/metadata/app.json", tr = {
  Boolean: "checkbox",
  DateTime: "date",
  DateOnly: "date",
  DateTimeOffset: "date",
  TimeSpan: "time",
  TimeOnly: "time",
  Byte: "number",
  Short: "number",
  Int64: "number",
  Int32: "number",
  UInt16: "number",
  UInt32: "number",
  UInt64: "number",
  Single: "number",
  Double: "number",
  Decimal: "number",
  String: "text",
  Guid: "text",
  Uri: "text"
}, lr = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, Tn = {
  Byte: "byte",
  Int16: "short",
  Int32: "int",
  Int64: "long",
  UInt16: "ushort",
  Unt32: "uint",
  UInt64: "ulong",
  Single: "float",
  Double: "double",
  Decimal: "decimal"
};
[...Object.keys(Tn), ...Object.values(Tn)];
const nr = {
  String: "string",
  Boolean: "bool",
  ...Tn
};
function Dl(e) {
  return nr[e] || e;
}
function ca(e, t) {
  return e ? (t || (t = []), e === "Nullable`1" ? Dl(t[0]) + "?" : e.endsWith("[]") ? `List<${Dl(e.substring(0, e.length - 2))}>` : t.length === 0 ? Dl(e) : ln(Dl(e), "`") + "<" + t.join(",") + ">") : "";
}
function sr(e) {
  return e && ca(e.name, e.genericArgs);
}
class Tt {
  Query;
  QueryInto;
  Create;
  Update;
  Patch;
  Delete;
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  get dataModel() {
    return this.AnyQuery?.dataModel;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((l) => !!l).map((l) => l);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(t) {
    He.isQueryInto(t) && !this.QueryInto ? this.QueryInto = t : He.isQuery(t) && !this.Query ? this.Query = t : He.isCreate(t) && !this.Create ? this.Create = t : He.isUpdate(t) && !this.Update ? this.Update = t : He.isPatch(t) && !this.Patch ? this.Patch = t : He.isDelete(t) && !this.Delete && (this.Delete = t);
  }
  static from(t) {
    const l = new Tt();
    return t.forEach((n) => {
      l.add(n);
    }), l;
  }
  static forType(t, l) {
    let n = new Tt();
    if (_.config.apisResolver && t) {
      const a = _.config.apisResolver(t, l);
      a && (n.Query = a.Query, n.QueryInto = a.QueryInto, n.Create = a.Create, n.Update = a.Update, n.Patch = a.Patch, n.Delete = a.Delete);
    }
    return t && (l ??= _.metadata.value?.api, l?.operations.forEach((a) => {
      a.dataModel?.name == t && n.add(a);
    })), n;
  }
  /** Build a type context bundle for AQ components */
  static createContext(t) {
    const l = t.id || "AutoQueryGrid";
    let n = t.type;
    const a = sl(t.apis);
    !n && t.apis && a.length > 0 && (n = zt(a[0])?.dataModel?.name);
    const d = t.metadataApi ?? _.metadata.value?.api, i = t.filterDefinitions ?? (_.metadata.value?.plugins?.autoQuery?.viewerConventions || $a), r = Zt(n);
    console.log("createContext", l, n, t.apis, r, a);
    const c = a.length > 0 ? Tt.from(a.map((C) => zt(C)).filter((C) => C != null).map((C) => C)) : Tt.forType(r, d), v = r || c.AnyQuery?.dataModel?.name, m = v ?? "", $ = lt(v), g = at($), y = lt(v), p = at(y), k = ml(y), x = a.map((C) => zt(C) == null ? C : null).filter((C) => C != null);
    return {
      typeName: r,
      dataModel: y,
      dataModelName: v,
      viewModel: $,
      viewModelProps: g,
      dataModelProps: p,
      dataModelPrimaryKey: k,
      apis: c,
      opNames: a,
      invalidApis: x,
      metadataApi: d,
      filterDefinitions: i,
      prefsCacheKey: () => `${l}/ApiPrefs/${m}`,
      columnCacheKey: (C) => `Column/${l}:${m}.${C}`
    };
  }
}
const He = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => qe(e.request.inherits, (t) => He.AnyRead.indexOf(t.name) >= 0),
  isQuery: (e) => qe(e.request.inherits, (t) => t.name === "QueryDb`1"),
  isQueryInto: (e) => qe(e.request.inherits, (t) => t.name === "QueryDb`2"),
  isCrud: (e) => e.request.implements?.some((t) => He.AnyWrite.indexOf(t.name) >= 0),
  isCreate: (e) => Nl(e, He.Create),
  isUpdate: (e) => Nl(e, He.Update),
  isPatch: (e) => Nl(e, He.Patch),
  isDelete: (e) => Nl(e, He.Delete),
  model: (e) => e ? qe(e.inherits, (t) => He.AnyRead.indexOf(t.name) >= 0) ? e.inherits?.genericArgs[0] : e.implements?.find((t) => He.AnyWrite.indexOf(t.name) >= 0)?.genericArgs[0] : null
};
function ar(e) {
  return e.input?.type || an(_n(e));
}
function fa(e) {
  return e.endsWith("?") ? jo(e, 1) : e;
}
function an(e) {
  return tr[fa(e)];
}
function or(e) {
  return e && lr[e] || "String";
}
function _n(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function An(e) {
  return e && an(e) == "number" || !1;
}
function ma(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function rr(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function va(e) {
  if (!e?.type) return !1;
  const t = _n(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum ? !1 : an(e.type) == null;
}
function pa(e) {
  if (!e?.type) return !1;
  const t = _n(e);
  if (e.isValueType && t.indexOf("`") == -1 || e.isEnum) return !0;
  const l = e.input?.type;
  return l && (l == "hidden" || l == "file" || l == "tag" || l == "combobox" || _.components?.[l]) ? !0 : an(e.type) != null;
}
function Sl(e, t) {
  let l = typeof e == "string" ? zt(e) : e;
  l || (console.warn(`Metadata not found for: ${e}`), l = { request: { name: e } });
  let n = (
    /** @class */
    /* @__PURE__ */ (function() {
      return function(d) {
        Object.assign(this, d);
      };
    })()
  ), a = (
    /** @class */
    (function() {
      function d(i) {
        Object.assign(this, i);
      }
      return d.prototype.createResponse = function() {
        return l.returnsVoid ? void 0 : new n();
      }, d.prototype.getTypeName = function() {
        return l.request.name;
      }, d.prototype.getMethod = function() {
        return l.method || "POST";
      }, d;
    })()
  );
  return new a(t);
}
function ir(e, t, l = {}) {
  let n = (
    /** @class */
    /* @__PURE__ */ (function() {
      return function(d) {
        Object.assign(this, d);
      };
    })()
  ), a = (
    /** @class */
    (function() {
      function d(i) {
        Object.assign(this, i);
      }
      return d.prototype.createResponse = function() {
        return typeof l.createResponse == "function" ? l.createResponse() : new n();
      }, d.prototype.getTypeName = function() {
        return e;
      }, d.prototype.getMethod = function() {
        return l.method || "POST";
      }, d;
    })()
  );
  return new a(t);
}
function kl(e, t) {
  return e ? (Object.keys(e).forEach((l) => {
    let n = e[l];
    typeof n == "string" ? n.startsWith("/Date") && (e[l] = un(kt(n))) : n != null && typeof n == "object" && (Array.isArray(n) ? e[l] = Array.from(n) : e[l] = Object.assign({}, n));
  }), e) : {};
}
function ur(e, t) {
  let l = {};
  return Array.from(e.elements).forEach((n) => {
    let a = n;
    if (!a.id || a.value == null || a.value === "") return;
    const d = a.id.toLowerCase(), i = t && t.find((m) => m.name.toLowerCase() == d);
    let r = i?.type, c = i?.genericArgs?.[0], v = a.type === "checkbox" ? a.checked : a.value;
    An(r) ? v = Number(v) : r === "List`1" && typeof v == "string" && (v = v.split(",").map((m) => An(c) ? Number(m) : m)), l[a.id] = v;
  }), l;
}
function es(e) {
  return e?.api?.operations && e.api.operations.length > 0;
}
function dr(e) {
  if (!ts() && e?.assert && !_.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return _.metadata.value;
}
function Ll(e) {
  return e && es(e) ? (e.date = Fo(/* @__PURE__ */ new Date()), _.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(ul, JSON.stringify(e)), !0) : !1;
}
function cr() {
  _.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(ul);
}
function ts() {
  if (_.metadata.value != null) return !0;
  let e = globalThis.Server;
  if (es(e))
    Ll(e);
  else {
    const t = typeof localStorage < "u" ? localStorage.getItem(ul) : null;
    if (t)
      try {
        Ll(JSON.parse(t));
      } catch {
        console.error(`Could not JSON.parse ${ul} from localStorage`);
      }
  }
  return _.metadata.value != null;
}
async function Ps(e, t) {
  let l = t ? await t() : await fetch(e);
  if (l.ok) {
    let n = await l.text();
    Ll(JSON.parse(n));
  } else
    console.error(`Could not download ${t ? "AppMetadata" : e}: ${l.statusText}`);
  es(_.metadata.value) || console.warn("AppMetadata is not available");
}
async function fr(e) {
  const { olderThan: t, resolvePath: l, resolve: n } = e || {};
  let a = ts() && t !== 0;
  if (a && t) {
    let d = kt(_.metadata.value?.date);
    (!d || (/* @__PURE__ */ new Date()).getTime() - d.getTime() > t) && (a = !1);
  }
  if (!a) {
    const d = e.client ?? Ne("client");
    await mr({ client: d, resolvePath: l, resolve: n });
  }
  return _.metadata.value;
}
async function mr(e) {
  const { client: t, resolvePath: l, resolve: n } = e;
  if (!((l || n) && (await Ps(l || ul, n), _.metadata.value != null))) {
    if (t != null) {
      const a = await t.api(new er());
      a.succeeded && Ll(a.response);
    }
    if (_.metadata.value == null)
      return await Ps(ul), _.metadata.value;
  }
}
function lt(e, t) {
  if (_.config.typeResolver) {
    let i = _.config.typeResolver(e, t);
    if (i) return i;
  }
  let l = _.metadata.value?.api;
  if (!l || !e) return null;
  let n = l.types.find((i) => i.name.toLowerCase() === e.toLowerCase() && (!t || i.namespace == t));
  if (n) return n;
  let a = zt(e);
  if (a) return a.request;
  let d = l.operations.find((i) => i.response && i.response.name.toLowerCase() === e.toLowerCase() && (!t || i.response.namespace == t));
  return d ? d.response : null;
}
function zt(e) {
  if (_.config.apiResolver) {
    const n = _.config.apiResolver(e);
    if (n) return n;
  }
  let t = _.metadata.value?.api;
  return t ? t.operations.find((n) => n.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function vr({ dataModel: e }) {
  const t = _.metadata.value?.api;
  if (!t) return [];
  let l = t.operations;
  if (e) {
    const n = typeof e == "string" ? lt(e) : e;
    l = l.filter((a) => ga(a.dataModel, n));
  }
  return l;
}
function ls(e) {
  return e ? lt(e.name, e.namespace) : null;
}
function ga(e, t) {
  return e && t && e.name === t.name && (!e.namespace || !t.namespace || e.namespace === t.namespace);
}
function pr(e, t) {
  let l = lt(e);
  return l && l.properties && l.properties.find((a) => a.name.toLowerCase() === t.toLowerCase());
}
function ya(e) {
  return ha(lt(e));
}
function ha(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let t = {};
    for (let l = 0; l < e.enumNames.length; l++) {
      const n = (e.enumDescriptions ? e.enumDescriptions[l] : null) || e.enumNames[l], a = (e.enumValues != null ? e.enumValues[l] : null) || e.enumNames[l];
      t[a] = n;
    }
    return t;
  }
  return null;
}
function ba(e) {
  if (!e) return null;
  let t = {}, l = e.input && e.input.allowableEntries;
  if (l) {
    for (let a = 0; a < l.length; a++) {
      let d = l[a];
      t[d.key] = d.value;
    }
    return t;
  }
  let n = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (n) {
    for (let a = 0; a < n.length; a++) {
      let d = n[a];
      t[d] = d;
    }
    return t;
  }
  if (e.isEnum) {
    const a = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, d = lt(a);
    if (d)
      return ha(d);
  }
  return null;
}
function ns(e) {
  if (!e) return;
  const t = [];
  return Object.keys(e).forEach((l) => t.push({ key: l, value: e[l] })), t;
}
function gr(e, t) {
  const n = ((a, d) => Object.assign({
    id: a,
    name: a,
    type: d
  }, t))(e.name, t?.type || ar(e) || "text");
  return e.isEnum && (n.type = "select", n.allowableEntries = ns(ba(e))), n;
}
function yr(e) {
  let t = [];
  if (e) {
    const l = at(e), n = zt(e.name), a = ls(n?.dataModel);
    l.forEach((d) => {
      if (!pa(d)) return;
      const i = gr(d, d.input);
      if (i.id = Oo(i.id), i.type == "file" && d.uploadTo && !i.accept) {
        const r = _.metadata.value?.plugins.filesUpload?.locations.find((c) => c.name == d.uploadTo);
        r && !i.accept && r.allowExtensions && (i.accept = r.allowExtensions.map((c) => c.startsWith(".") ? c : `.${c}`).join(","));
      }
      if (a) {
        const r = a.properties?.find((c) => c.name == d.name);
        d.ref || (d.ref = r?.ref);
      }
      if (i.options)
        try {
          const r = {
            input: i,
            $typeFields: l.map((v) => v.name),
            $dataModelFields: a ? at(a).map((v) => v.name) : [],
            ..._.config.scopeWhitelist
          }, c = cn(i.options, r);
          Object.keys(c).forEach((v) => {
            i[v] = c[v];
          });
        } catch {
          console.error(`failed to evaluate '${i.options}'`);
        }
      t.push(i);
    });
  }
  return t;
}
function ss(e, t) {
  if (!t.type)
    return console.error("enumDescriptions missing {type:'EnumType'} options"), [`${e}`];
  const l = lt(t.type);
  if (!l?.enumValues)
    return console.error(`Could not find metadata for ${t.type}`), [`${e}`];
  const n = [];
  for (let a = 0; a < l.enumValues.length; a++) {
    const d = parseInt(l.enumValues[a]);
    d > 0 && (d & e) === d && n.push(l.enumDescriptions?.[a] || l.enumNames?.[a] || `${e}`);
  }
  return n;
}
function wa(e) {
  return (t) => typeof t == "number" ? ss(t, { type: e }) : t;
}
function at(e) {
  if (!e) return [];
  let t = [], l = {};
  function n(a) {
    a.forEach((d) => {
      l[d.name] || (l[d.name] = 1, t.push(d));
    });
  }
  for (; e; )
    e.properties && n(e.properties), e = e.inherits ? ls(e.inherits) : null;
  return t.map((a) => a.type.endsWith("[]") ? { ...a, type: "List`1", genericArgs: [a.type.substring(0, a.type.length - 2)] } : a);
}
function Nl(e, t) {
  return e.request.implements?.some((l) => l.name === t) || !1;
}
function ml(e) {
  return e ? ka(e, at(e)) : null;
}
function ka(e, t) {
  let l = t.find((d) => d.name.toLowerCase() === "id");
  if (l && l.isPrimaryKey) return l;
  let a = t.find((d) => d.isPrimaryKey) || l;
  if (!a) {
    let d = He.model(e);
    if (d)
      return qe(lt(d), (i) => ml(i));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return a || null;
}
function hr(e, t) {
  return qe(ml(e), (l) => ue(t, l.name));
}
function xa(e, t, l) {
  return e && e.valueType === "none" ? "" : l.key === "%In" || l.key === "%Between" ? `(${l.value})` : br(t, l.value);
}
function br(e, t) {
  return e ? (e = fa(e), An(e) || e === "Boolean" ? t : rr(e) ? `[${t}]` : `'${t}'`) : t;
}
function Lt(e, t) {
  return { name: e, value: t };
}
const $a = [
  Lt("=", "%"),
  Lt("!=", "%!"),
  Lt(">=", ">%"),
  Lt(">", "%>"),
  Lt("<=", "%<"),
  Lt("<", "<%"),
  Lt("In", "%In"),
  Lt("Between", "%Between"),
  { name: "Starts With", value: "%StartsWith", types: "string" },
  { name: "Contains", value: "%Contains", types: "string" },
  { name: "Ends With", value: "%EndsWith", types: "string" },
  { name: "Exists", value: "%IsNotNull", valueType: "none" },
  { name: "Not Exists", value: "%IsNull", valueType: "none" }
];
function gt() {
  const e = f(() => _.metadata.value?.app || null), t = f(() => _.metadata.value?.api || null), l = f(() => _.metadata.value?.plugins?.autoQuery?.viewerConventions || $a);
  return ts(), {
    loadMetadata: fr,
    getMetadata: dr,
    setMetadata: Ll,
    clearMetadata: cr,
    metadataApp: e,
    metadataApi: t,
    filterDefinitions: l,
    typeOf: lt,
    typeOfRef: ls,
    typeEquals: ga,
    apiOf: zt,
    findApis: vr,
    typeName: sr,
    typeName2: ca,
    property: pr,
    enumOptions: ya,
    propertyOptions: ba,
    createFormLayout: yr,
    typeProperties: at,
    supportsProp: pa,
    Crud: He,
    Apis: Tt,
    getPrimaryKey: ml,
    getPrimaryKeyByProps: ka,
    getId: hr,
    createDto: Sl,
    makeDto: ir,
    toFormValues: kl,
    formValues: ur,
    isComplexProp: va,
    asKvps: ns,
    expandEnumFlags: ss,
    enumFlagsConverter: wa
  };
}
class _e {
  static Lookup = {};
  static async getOrFetchValue(t, l, n, a, d, i, r) {
    const c = _e.getValue(n, r, d);
    return c ?? (await _e.fetchLookupIds(t, l, n, a, d, i, [r]), _e.getValue(n, r, d));
  }
  static getValue(t, l, n) {
    const a = _e.Lookup[t];
    if (a) {
      const d = a[l];
      if (d)
        return n = n.toLowerCase(), d[n];
    }
  }
  static setValue(t, l, n, a) {
    const d = _e.Lookup[t] ?? (_e.Lookup[t] = {}), i = d[l] ?? (d[l] = {});
    n = n.toLowerCase(), i[n] = a;
  }
  static setRefValue(t, l) {
    const n = ue(l, t.refId);
    if (n == null || t.refLabel == null)
      return null;
    const a = ue(l, t.refLabel);
    return _e.setValue(t.model, n, t.refLabel, a), a;
  }
  static async fetchLookupIds(t, l, n, a, d, i, r) {
    const c = l.operations.find((v) => He.isAnyQuery(v) && v.dataModel?.name == n);
    if (c) {
      const v = _e.Lookup[n] ?? (_e.Lookup[n] = {}), m = [];
      Object.keys(v).forEach((x) => {
        const C = v[x];
        ue(C, d) && m.push(x);
      });
      const $ = r.filter((x) => !m.includes(x));
      if ($.length == 0)
        return;
      const g = i ? null : `${a},${d}`, y = {
        [a + "In"]: $.join(",")
      };
      g && (y.fields = g);
      const p = Sl(c, y), k = await t.api(p, { jsconfig: "edv,eccn" });
      if (k.succeeded)
        (ue(k.response, "results") || []).forEach((C) => {
          if (!ue(C, a)) {
            console.error(`result[${a}] == null`, C);
            return;
          }
          const q = `${ue(C, a)}`, H = ue(C, d);
          d = d.toLowerCase();
          const P = v[q] ?? (v[q] = {});
          P[d] = `${H}`;
        });
      else {
        console.error(`Failed to call ${c.request.name}`);
        return;
      }
    }
  }
}
let On = () => (/* @__PURE__ */ new Date()).getTime(), wr = ["/", "T", ":", "-"], yt = {
  //locale: null,
  assumeUtc: !0,
  //number: null,
  date: {
    method: "Intl.DateTimeFormat",
    options: "{dateStyle:'medium'}"
  },
  maxFieldLength: 150,
  maxNestedFields: 2,
  maxNestedFieldLength: 30
}, kr = new Intl.RelativeTimeFormat(yt.locale, {}), Bs = 1440 * 60 * 1e3 * 365, bn = {
  year: Bs,
  month: Bs / 12,
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, Ht = {
  currency: Sa,
  bytes: La,
  link: Va,
  linkTel: Ma,
  linkMailTo: Ta,
  icon: Aa,
  iconRounded: Oa,
  attachment: Fa,
  hidden: ja,
  time: Ia,
  relativeTime: os,
  relativeTimeFromMs: on,
  enumFlags: Ba,
  formatDate: vl,
  formatNumber: as
};
"iconOnError" in globalThis || (globalThis.iconOnError = sn);
let xr = class {
  static currency = { method: "currency" };
  static bytes = { method: "bytes" };
  static link = { method: "link" };
  static linkTel = { method: "linkTel" };
  static linkMailTo = { method: "linkMailTo" };
  static icon = { method: "icon" };
  static iconRounded = { method: "iconRounded" };
  static attachment = { method: "attachment" };
  static time = { method: "time" };
  static relativeTime = { method: "relativeTime" };
  static relativeTimeFromMs = { method: "relativeTimeFromMs" };
  static date = { method: "formatDate" };
  static number = { method: "formatNumber" };
  static hidden = { method: "hidden" };
  static enumFlags = { method: "enumFlags" };
};
function $r(e) {
  yt = Object.assign({}, yt, e);
}
function Cr(e) {
  Object.keys(e || {}).forEach((t) => {
    typeof e[t] == "function" && (Ht[t] = e[t]);
  });
}
function Ca() {
  return Ht;
}
function jl(e, t) {
  return t ? ht("span", e, t) : e;
}
function Sa(e, t) {
  const l = bt(t, ["currency"]);
  return jl(new Intl.NumberFormat(void 0, { style: "currency", currency: t?.currency || "USD" }).format(e), l);
}
function La(e, t) {
  return jl(Xn(e), t);
}
function Va(e, t) {
  return ht("a", e, dn({ ...t, href: e }));
}
function Ma(e, t) {
  return ht("a", e, dn({ ...t, href: `tel:${e}` }));
}
function Ta(e, t) {
  t || (t = {});
  let { subject: l, body: n } = t, a = bt(t, ["subject", "body"]), d = {};
  return l && (d.subject = l), n && (d.body = n), ht("a", e, dn({ ...a, href: `mailto:${il(e, d)}` }));
}
function Aa(e, t) {
  return ht("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: nl(e), onerror: "iconOnError(this)" }, t));
}
function Oa(e, t) {
  return ht("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: nl(e), onerror: "iconOnError(this)" }, t));
}
function Fa(e, t) {
  let l = Zn(e), a = Fl(l) == null || Wn(e) ? nl(e) : Yn(e);
  const d = nl(a);
  let i = t && (t["icon-class"] || t.iconClass), r = ht("img", void 0, Object.assign({ class: "w-6 h-6", src: d, onerror: "iconOnError(this,'att')" }, i ? { class: i } : null)), c = `<span class="pl-1">${l}</span>`;
  return ht("a", r + c, Object.assign({ class: "flex", href: nl(e), title: e }, t ? bt(t, ["icon-class", "iconClass"]) : null));
}
function ja(e) {
  return "";
}
function Ia(e, t) {
  let l = typeof e == "string" ? new Date(la(e) * 1e3) : nn(e) ? kt(e) : null;
  return jl(l ? Po(l) : e, t);
}
function vl(e, t) {
  if (e == null) return "";
  let l = typeof e == "number" ? new Date(e) : typeof e == "string" ? kt(e) : e;
  if (!nn(l))
    return console.warn(`${l} is not a Date value`), e == null ? "" : `${e}`;
  let n = yt.date ? rn(yt.date) : null;
  return jl(typeof n == "function" ? n(l) : Io(l), t);
}
function as(e, t) {
  if (typeof e != "number") return e;
  let l = yt.number ? rn(yt.number) : null, n = typeof l == "function" ? l(e) : `${e}`;
  return n === "" && (console.warn(`formatNumber(${e}) => ${n}`, l), n = `${e}`), jl(n, t);
}
function Kl(e) {
  const t = Math.floor(e / 1e3), l = Math.floor(t / 60), n = Math.floor(l / 60), a = Math.floor(n / 24);
  return a > 0 ? `${a}d ${Kl(e - a * 24 * 60 * 6e4)}` : n > 0 ? `${n}h ${Kl(e - n * 60 * 6e4)}` : l > 0 ? `${l}m ${Kl(e - l * 6e4)}` : t > 0 ? `${t}s` : `${e}ms`;
}
function Sr(e) {
  return e >= 1e9 ? (e / 1e9).toFixed(1) + "b" : e >= 1e6 ? (e / 1e6).toFixed(1) + "m" : e >= 1e3 ? (e / 1e3).toFixed(1) + "k" : e.toLocaleString();
}
function Pa(e, t, l) {
  let n = Eo(e), a = t ? rn(t) : null;
  if (typeof a == "function") {
    let i = l;
    if (t?.options)
      try {
        i = cn(t.options, l);
      } catch (r) {
        console.error(`Could not evaluate '${t.options}'`, r, ", with scope:", l);
      }
    return a(e, i);
  }
  let d = n != null ? nn(n) ? vl(n, l) : typeof n == "number" ? as(n, l) : n : null;
  return d ?? "";
}
function Vl(e, t, l) {
  return Kt(e) ? Pa(e, t, l) : Ar(e, t, l);
}
function Lr(e) {
  if (e == null) return NaN;
  if (typeof e == "number")
    return e;
  if (nn(e))
    return e.getTime() - On();
  if (typeof e == "string") {
    let t = Number(e);
    if (!isNaN(t))
      return t;
    if (e[0] === "P" || e.startsWith("-P"))
      return la(e) * 1e3 * -1;
    if (Bo(e, wr) >= 0)
      return kt(e).getTime() - On();
  }
  return NaN;
}
function on(e, t) {
  for (let l in bn)
    if (Math.abs(e) > bn[l] || l === "second")
      return (t || kr).format(Math.round(e / bn[l]), l);
}
function os(e, t) {
  let l = Lr(e);
  return isNaN(l) ? "" : on(l, t);
}
function Vr(e, t) {
  return on(e.getTime() - (t ? t.getTime() : On()));
}
function Ba(e, t) {
  return ss(e, t).join(", ");
}
function rn(e) {
  if (!e) return null;
  let { method: t, options: l } = e, n = `${t}(${l})`, a = Ht[n] || Ht[t];
  if (typeof a == "function") return a;
  let d = e.locale || yt.locale;
  if (t.startsWith("Intl.")) {
    let i = d ? `'${d}'` : "undefined", r = `return new ${t}(${i},${l || "undefined"})`;
    try {
      let c = Function(r)();
      return a = t === "Intl.DateTimeFormat" ? (v) => c.format(kt(v)) : t === "Intl.NumberFormat" ? (v) => c.format(Number(v)) : t === "Intl.RelativeTimeFormat" ? (v) => os(v, c) : (v) => c.format(v), Ht[n] = a;
    } catch (c) {
      console.error(`Invalid format: ${r}`, c);
    }
  } else {
    let i = globalThis[t];
    if (typeof i == "function") {
      let r = l != null ? Function("return " + l)() : void 0;
      return a = (c) => i(c, r, d), Ht[n] = a;
    }
    console.error(`No '${t}' function exists`, Object.keys(Ht));
  }
  return null;
}
function Ea(e, t) {
  return e ? e.length > t ? e.substring(0, t) + "..." : e : "";
}
function Da(e) {
  return e.substring(0, 6) === "/Date(" ? vl(kt(e)) : e;
}
function Mr(e) {
  return rs(dl(e)).replace(/"/g, "");
}
function Na(e) {
  if (e == null || e === "") return "";
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      console.warn("couldn't parse as JSON", e);
    }
  return e;
}
function rs(e, t = 4) {
  return e = Na(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, t);
}
function Tr(e) {
  return e = Na(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = dl(e), rs(e));
}
function dl(e) {
  if (e == null) return null;
  if (typeof e == "string") return Da(e);
  if (Kt(e)) return e;
  if (e instanceof Date) return vl(e);
  if (Array.isArray(e)) return e.map(dl);
  if (typeof e == "object") {
    let t = {};
    return Object.keys(e).forEach((l) => {
      l != "__type" && (t[l] = dl(e[l]));
    }), t;
  }
  return e;
}
function Ar(e, t, l) {
  let n = e;
  if (Array.isArray(e)) {
    if (Kt(e[0]))
      return n.join(",");
    e[0] != null && (n = e[0]);
  }
  if (n == null) return "";
  if (n instanceof Date) return vl(n, l);
  let a = Object.keys(n), d = [];
  for (let i = 0; i < Math.min(yt.maxNestedFields, a.length); i++) {
    let r = a[i], c = `${dl(n[r])}`;
    d.push(`<b class="font-medium">${r}</b>: ${Sn(Ea(Da(c), yt.maxNestedFieldLength))}`);
  }
  return a.length > 2 && d.push("..."), ht("span", "{ " + d.join(", ") + " }", Object.assign({ title: Sn(Mr(e)) }, l));
}
function Ra() {
  return {
    Formats: xr,
    setDefaultFormats: $r,
    getFormatters: Ca,
    setFormatters: Cr,
    formatValue: Vl,
    formatter: rn,
    dateInputFormat: un,
    currency: Sa,
    bytes: La,
    link: Va,
    linkTel: Ma,
    linkMailTo: Ta,
    icon: Aa,
    iconRounded: Oa,
    attachment: Fa,
    hidden: ja,
    time: Ia,
    relativeTime: os,
    relativeTimeFromDate: Vr,
    relativeTimeFromMs: on,
    enumFlags: Ba,
    formatDate: vl,
    formatNumber: as,
    humanifyMs: Kl,
    humanifyNumber: Sr,
    indentJson: rs,
    prettyJson: Tr,
    scrub: dl,
    truncate: Ea,
    apiValueFmt: Pa,
    iconOnError: sn
  };
}
const Or = ["title"], Fr = /* @__PURE__ */ pe({
  __name: "RouterLink",
  props: {
    to: {}
  },
  setup(e) {
    const t = e, { config: l } = $t(), n = () => l.value.navigate(t.to ?? "/");
    return (a, d) => (o(), u("a", Se({
      onClick: Re(n, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, a.$attrs), [
      Q(a.$slots, "default")
    ], 16, Or));
  }
});
class jr {
  callbacks = {};
  register(t, l) {
    this.callbacks[t] = l;
  }
  has(t) {
    return !!this.callbacks[t];
  }
  invoke(t, l) {
    const n = this.callbacks[t];
    typeof n == "function" && n(t, l);
  }
}
class Ir {
  get length() {
    return typeof localStorage > "u" ? 0 : localStorage.length;
  }
  getItem(t) {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  }
  setItem(t, l) {
    typeof localStorage > "u" || localStorage.setItem(t, l);
  }
  removeItem(t) {
    typeof localStorage > "u" || localStorage.removeItem(t);
  }
  clear() {
    typeof localStorage > "u" || localStorage.clear();
  }
  key(t) {
    return typeof localStorage > "u" ? null : localStorage.key(t);
  }
}
class _ {
  static config = {
    redirectSignIn: "/signin",
    redirectSignOut: "/auth/logout",
    navigate: (t) => location.href = t,
    assetsPathResolver: (t) => t,
    fallbackPathResolver: (t) => t,
    storage: new Ir(),
    tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" },
    scopeWhitelist: {
      enumFlagsConverter: wa,
      ...Ca()
    }
  };
  static autoQueryGridDefaults = {
    deny: [],
    hide: [],
    toolbarButtonClass: void 0,
    tableStyle: "stripedRows",
    take: 25,
    maxFieldLength: 150
  };
  static events = Do();
  static user = O(null);
  static metadata = Cn(null);
  static components = {
    RouterLink: Fr
  };
  static component(t) {
    const l = _.components[t];
    if (l) return l;
    const n = Os(t), a = Object.keys(_.components).find((d) => Os(d) === n);
    return a && _.components[a] || null;
  }
  static interceptors = new jr();
}
function Pr(e) {
  _.config = Object.assign(_.config, e);
}
function Br(e) {
  _.autoQueryGridDefaults = Object.assign(_.autoQueryGridDefaults, e);
}
function is(e) {
  return e && _.config.assetsPathResolver ? _.config.assetsPathResolver(e) : e;
}
function Er(e) {
  return e && _.config.fallbackPathResolver ? _.config.fallbackPathResolver(e) : e;
}
function Dr(e, t) {
  _.interceptors.register(e, t);
}
function $t() {
  const e = f(() => _.config), t = f(() => _.autoQueryGridDefaults), l = _.events;
  return {
    Sole: _,
    config: e,
    setConfig: Pr,
    events: l,
    autoQueryGridDefaults: t,
    setAutoQueryGridDefaults: Br,
    assetsPathResolver: is,
    fallbackPathResolver: Er,
    registerInterceptor: Dr
  };
}
function un(e) {
  if (e == null || typeof e == "object") return "";
  const t = kt(e);
  return t == null || t.toString() == "Invalid Date" ? "" : t.toISOString().substring(0, 10) ?? "";
}
function Ha(e) {
  if (e == null || typeof e == "object") return "";
  const t = kt(e);
  return t == null || t.toString() == "Invalid Date" ? "" : t.toISOString().substring(0, 19) ?? "";
}
function qa(e) {
  return e == null ? "" : Ro(e);
}
function Fn(e, t) {
  return _.config.inputValue ? _.config.inputValue(e, t) : e === "date" ? un(t) : e === "datetime-local" ? Ha(t) : e === "time" ? qa(t) : e === "number" || e === "range" ? t == null ? "" : Number(t) : t;
}
function za(e, t) {
  e.value = null, Ot(() => e.value = t);
}
function el(e) {
  return Object.keys(e).forEach((t) => {
    const l = e[t];
    e[t] = Ys(l) ? ne(l) : l;
  }), e;
}
function jt(e, t, l) {
  l ? (t.value = e.entering.cls + " " + e.entering.from, setTimeout(() => t.value = e.entering.cls + " " + e.entering.to, 0)) : (t.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => t.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function Ql(e) {
  if (typeof document > "u") return;
  let t = e?.after || document.activeElement, l = t && t.form;
  if (l) {
    let n = ':not([disabled]):not([tabindex="-1"])', a = l.querySelectorAll(`a:not([disabled]), button${n}, input[type=text]${n}, [tabindex]${n}`), d = Array.prototype.filter.call(
      a,
      (r) => r.offsetWidth > 0 || r.offsetHeight > 0 || r === t
    ), i = d.indexOf(t);
    i > -1 && (d[i + 1] || d[0]).focus();
  }
}
function Zt(e) {
  if (!e) return null;
  if (typeof e == "string")
    return e;
  const t = typeof e == "function" ? new e() : typeof e == "object" ? e : null;
  if (!t)
    throw new Error(`Invalid DTO Type '${typeof e}'`);
  if (typeof t.getTypeName != "function")
    throw new Error(`${JSON.stringify(t)} is not a Request DTO`);
  const l = t.getTypeName();
  if (!l)
    throw new Error("DTO Required");
  return l;
}
function ht(e, t, l) {
  l || (l = {});
  let n = l.cls || l.className || l.class;
  return n && (l = bt(l, ["cls", "class", "className"]), l.class = n), t == null ? `<${e}` + jn(l) + "/>" : `<${e}` + jn(l) + `>${t || ""}</${e}>`;
}
function jn(e) {
  return Object.keys(e).reduce((t, l) => `${t} ${l}="${Sn(e[l])}"`, "");
}
function dn(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function nl(e) {
  return is(e);
}
let Nr = ["string", "number", "boolean", "null", "undefined"];
function Kt(e) {
  return Nr.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Ml(e) {
  return !Kt(e);
}
function Yl(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function us(e, t) {
  if (typeof history < "u") {
    const l = t ? il(na(location.href, "?"), e) : No(location.href, e);
    history.pushState({}, "", l);
  }
}
function cn(e, t) {
  if (["function", "Function", "eval", "=>", ";"].some((a) => e.includes(a)))
    throw new Error(`Unsafe script: '${e}'`);
  const n = Object.assign(
    Object.keys(globalThis).reduce((a, d) => (a[d] = void 0, a), {}),
    t
  );
  return new Function("with(this) { return (" + e + ") }").call(n);
}
function In(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function ds(e) {
  const t = _.config.storage.getItem(e);
  return t ? JSON.parse(t) : null;
}
function fn(e, t) {
  return il(`swr.${Ho(e)}`, t ? Object.assign({}, e, t) : e);
}
function Rr(e) {
  if (e.request) {
    const t = fn(e.request, e.args);
    _.config.storage.removeItem(t);
  }
}
async function Ua(e, t, l, n, a) {
  const d = fn(t, n);
  l(new tt({ response: ds(d) }));
  const i = await e.api(t, n, a);
  if (i.succeeded && i.response) {
    i.response._date = (/* @__PURE__ */ new Date()).valueOf();
    const r = JSON.stringify(i.response);
    _.config.storage.setItem(d, r), l(i);
  }
  return i;
}
function Ka(e, t) {
  let l = null;
  return (...n) => {
    l && clearTimeout(l), l = setTimeout(() => {
      e(...n);
    }, t || 100);
  };
}
function sl(e) {
  return typeof e == "string" ? e.split(",") : e || [];
}
function qt(e, t) {
  const l = sl(t);
  return e.reduce((n, a) => (n[a] = !l.includes(a), n), {});
}
function Hr(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Qa(e) {
  const t = [], l = [];
  for (const n of e) {
    const a = n.toLowerCase();
    l.includes(a) || (t.push(n), l.push(a));
  }
  return t;
}
function Ja() {
  return {
    dateInputFormat: un,
    dateTimeInputFormat: Ha,
    timeInputFormat: qa,
    textInputValue: Fn,
    setRef: za,
    unRefs: el,
    transition: jt,
    focusNextElement: Ql,
    getTypeName: Zt,
    htmlTag: ht,
    htmlAttrs: jn,
    linkAttrs: dn,
    toAppUrl: nl,
    isPrimitive: Kt,
    isComplexType: Ml,
    pushState: us,
    scopedExpr: cn,
    copyText: In,
    fromCache: ds,
    swrCacheKey: fn,
    swrClear: Rr,
    swrApi: Ua,
    asStrings: sl,
    asOptions: qt,
    createDebounce: Ka,
    delay: Hr,
    uniqueIgnoreCase: Qa
  };
}
function Il(e) {
  const t = O(!1), l = O(), n = O(), a = e ?? Ne("client");
  function d({ message: p, errorCode: k, fieldName: x, errors: C }) {
    return k || (k = "Exception"), C || (C = []), l.value = x ? new hn({
      errorCode: k,
      message: p,
      errors: [new Fs({ fieldName: x, errorCode: k, message: p })]
    }) : new hn({ errorCode: k, message: p, errors: C });
  }
  function i({ fieldName: p, message: k, errorCode: x }) {
    if (x || (x = "Exception"), !l.value)
      d({ fieldName: p, message: k, errorCode: x });
    else {
      let C = new hn(l.value);
      C.errors = [
        ...(C.errors || []).filter((q) => q.fieldName?.toLowerCase() !== p?.toLowerCase()),
        new Fs({ fieldName: p, message: k, errorCode: x })
      ], l.value = C;
    }
  }
  async function r(p, k, x) {
    t.value = !0;
    let C = await a.api(el(p), k, x);
    return t.value = !1, n.value = C.response, l.value = C.error, C;
  }
  async function c(p, k, x) {
    t.value = !0;
    let C = await a.apiVoid(el(p), k, x);
    return t.value = !1, n.value = C.response, l.value = C.error, C;
  }
  async function v(p, k, x, C) {
    t.value = !0;
    let q = await a.apiForm(el(p), k, x, C);
    return t.value = !1, n.value = q.response, l.value = q.error, q;
  }
  async function m(p, k, x, C) {
    t.value = !0;
    let q = await a.apiFormVoid(el(p), k, x, C);
    return t.value = !1, n.value = q.response, l.value = q.error, q;
  }
  async function $(p, k, x, C) {
    return Ua(a, p, k, x, C);
  }
  function g(p, k) {
    const x = O(new tt()), C = Ka(async (q) => {
      x.value = await a.api(q);
    }, k?.delayMs);
    return rl(async () => {
      const q = p(), H = ds(fn(q));
      H && (x.value = new tt({ response: H })), k?.delayMs === 0 ? x.value = await a.api(q) : C(q);
    }), (async () => x.value = await a.api(p(), k?.args, k?.method))(), x;
  }
  let y = { setError: d, addFieldError: i, loading: t, error: l, api: r, apiVoid: c, apiForm: v, apiFormVoid: m, swr: $, swrEffect: g, unRefs: el, setRef: za };
  return Qt("ApiState", y), y;
}
function Za(e) {
  return e && e.SessionId ? qo(e) : e;
}
function qr(e) {
  _.user.value = Za(e), _.events.publish("signIn", e);
}
function zr() {
  _.user.value = null, _.events.publish("signOut", null);
}
const cs = (e) => e?.roles || [], fs = (e) => e?.permissions || [];
function Ga(e) {
  return cs(_.user.value).indexOf(e) >= 0;
}
function Ur(e) {
  return fs(_.user.value).indexOf(e) >= 0;
}
function ms() {
  return Ga("Admin");
}
function xl(e) {
  if (!e) return !1;
  if (!e.requiresAuth)
    return !0;
  const t = _.user.value;
  if (!t)
    return !1;
  if (ms())
    return !0;
  let [l, n] = [cs(t), fs(t)], [a, d, i, r] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!a.every((c) => l.indexOf(c) >= 0) || i.length > 0 && !i.some((c) => l.indexOf(c) >= 0) || !d.every((c) => n.indexOf(c) >= 0) || r.length > 0 && !r.every((c) => n.indexOf(c) >= 0));
}
function Kr(e) {
  if (!e || !e.requiresAuth) return null;
  const t = _.user.value;
  if (!t)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (ms())
    return null;
  let [l, n] = [cs(t), fs(t)], [a, d, i, r] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], c = a.filter((m) => l.indexOf(m) < 0);
  if (c.length > 0)
    return `Requires ${c.map((m) => "<b>" + m + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "");
  let v = d.filter((m) => n.indexOf(m) < 0);
  return v.length > 0 ? `Requires ${v.map((m) => "<b>" + m + "</b>").join(", ")} Permission` + (v.length > 1 ? "s" : "") : i.length > 0 && !i.some((m) => l.indexOf(m) >= 0) ? `Requires any ${i.filter((m) => l.indexOf(m) < 0).map((m) => "<b>" + m + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "") : r.length > 0 && !r.every((m) => n.indexOf(m) >= 0) ? `Requires any ${r.filter((m) => n.indexOf(m) < 0).map((m) => "<b>" + m + "</b>").join(", ")} Permission` + (v.length > 1 ? "s" : "") : null;
}
function Tl() {
  const e = f(() => _.user.value || null), t = f(() => _.user.value != null);
  return { signIn: qr, signOut: zr, user: e, toAuth: Za, isAuthenticated: t, hasRole: Ga, hasPermission: Ur, isAdmin: ms, canAccess: xl, invalidAccessMessage: Kr };
}
function Ye(e, t) {
  return Array.isArray(e) ? e.indexOf(t) >= 0 : e == t || e.includes(t);
}
const _l = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, vt = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-500 disabled:border-slate-200 dark:disabled:border-slate-700 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, hl = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, tl = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Pn = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, De = {
  panelClass(e = "slideOver") {
    return e == "card" ? hl.panelClass : tl.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? hl.formClass : tl.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? hl.headingClass : tl.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? hl.subHeadingClass : tl.subHeadingClass;
  },
  buttonsClass: "px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, ke = {
  getGridClass(e = "stripedRows") {
    return ke.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return Ye(e, "fullWidth") ? "overflow-x-auto" : ke.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return Ye(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : ke.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return Ye(e, "whiteBackground") ? "" : Ye(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black/5" : ke.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return Ye(e, "fullWidth") || Ye(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : ke.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return Ye(e, "whiteBackground") ? "" : ke.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return ke.theadRowClass + (Ye(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return ke.theadCellClass + (Ye(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (Ye(e, "whiteBackground") || Ye(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : ke.tableClass) + (Ye(e, "verticalLines") ? " bg-white" : "");
  },
  getTableRowClass(e = "stripedRows", t, l, n) {
    return (n ? "cursor-pointer " : "") + (l ? "bg-indigo-100 dark:bg-blue-800" : (n ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (Ye(e, "stripedRows") ? t % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (Ye(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  gridClass: "flex flex-col",
  //original -margins + padding forces scroll bars when parent is w-full for no clear benefits?
  //original: -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8
  grid2Class: "",
  //original: inline-block min-w-full py-2 align-middle md:px-6 lg:px-8
  grid3Class: "inline-block min-w-full py-2 align-middle",
  grid4Class: "overflow-hidden shadow ring-1 ring-black/5 md:rounded-lg",
  tableClass: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
  theadClass: "bg-gray-50 dark:bg-gray-900",
  tableCellClass: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
  theadRowClass: "select-none",
  theadCellClass: "px-6 py-4 text-left text-sm font-medium tracking-wider whitespace-nowrap",
  toolbarButtonClass: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Qr = {
  colspans: "col-span-3 sm:col-span-3"
};
function It(e, t, l) {
  const n = e.filter((a) => a).join(" ");
  return l ??= _.config.filterInputClass == null ? void 0 : (a) => _.config.filterInputClass(a, t), l ? l(n) : n;
}
const eb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: _l,
  card: hl,
  dummy: Qr,
  filterClass: It,
  form: De,
  grid: ke,
  input: vt,
  modal: Pn,
  slideOver: tl
}, Symbol.toStringTag, { value: "Module" })), Jr = { class: "flex items-center" }, Zr = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, Gr = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Wr = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Xr = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Yr = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, _r = /* @__PURE__ */ pe({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const t = e, l = f(() => t.type == "info" ? "bg-blue-50 dark:bg-blue-200" : t.type == "error" ? "bg-red-50 dark:bg-red-200" : t.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), n = f(() => t.type == "info" ? "border-blue-400" : t.type == "error" ? "border-red-400" : t.type == "success" ? "border-green-400" : "border-yellow-400"), a = f(() => t.type == "info" ? "text-blue-700" : t.type == "error" ? "text-red-700" : t.type == "success" ? "text-green-700" : "text-yellow-700");
    return (d, i) => (o(), u("div", {
      class: h([l.value, n.value, "border-l-4 p-4"])
    }, [
      s("div", Jr, [
        e.hideIcon ? w("", !0) : (o(), u("div", Zr, [
          e.type == "warn" ? (o(), u("svg", Gr, [...i[0] || (i[0] = [
            s("path", {
              "fill-rule": "evenodd",
              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.type == "error" ? (o(), u("svg", Wr, [...i[1] || (i[1] = [
            s("path", {
              "fill-rule": "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.type == "info" ? (o(), u("svg", Xr, [...i[2] || (i[2] = [
            s("path", {
              "fill-rule": "evenodd",
              d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.type == "success" ? (o(), u("svg", Yr, [...i[3] || (i[3] = [
            s("path", {
              "fill-rule": "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : w("", !0)
        ])),
        s("div", null, [
          s("p", {
            class: h([a.value, "text-sm"])
          }, [
            Q(d.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), ei = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, ti = { class: "flex" }, li = { class: "ml-3" }, ni = { class: "text-sm font-medium text-green-800" }, si = { key: 0 }, ai = { class: "ml-auto pl-3" }, oi = { class: "-mx-1.5 -my-1.5" }, ri = /* @__PURE__ */ pe({
  __name: "AlertSuccess",
  props: {
    message: {}
  },
  setup(e) {
    const t = O(!1);
    return (l, n) => t.value ? w("", !0) : (o(), u("div", ei, [
      s("div", ti, [
        n[2] || (n[2] = s("div", { class: "flex-shrink-0" }, [
          s("svg", {
            class: "h-5 w-5 text-green-400 dark:text-green-500",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            s("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M5 13l4 4L19 7"
            })
          ])
        ], -1)),
        s("div", li, [
          s("h3", ni, [
            e.message ? (o(), u("span", si, S(e.message), 1)) : Q(l.$slots, "default", {}, void 0, void 0, 1)
          ])
        ]),
        s("div", ai, [
          s("div", oi, [
            s("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-900",
              onClick: n[0] || (n[0] = (a) => t.value = !0)
            }, [...n[1] || (n[1] = [
              s("span", { class: "sr-only" }, "Dismiss", -1),
              s("svg", {
                class: "h-5 w-5",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
              ], -1)
            ])])
          ])
        ])
      ])
    ]));
  }
}), ii = { class: "flex" }, ui = { class: "ml-3" }, di = { class: "text-sm text-red-700 dark:text-red-200" }, ci = /* @__PURE__ */ pe({
  __name: "ErrorSummary",
  props: {
    status: {},
    except: {},
    class: {}
  },
  setup(e) {
    const t = e;
    let l = Ne("ApiState", void 0);
    const n = f(() => t.status || l?.error.value ? zo.call({ responseStatus: t.status ?? l?.error.value }, t.except ?? []) : null);
    return (a, d) => n.value ? (o(), u("div", {
      key: 0,
      class: h(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${a.$props.class}`)
    }, [
      s("div", ii, [
        d[0] || (d[0] = s("div", { class: "flex-shrink-0" }, [
          s("svg", {
            class: "h-5 w-5 text-red-400",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              fill: "currentColor",
              d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
            })
          ])
        ], -1)),
        s("div", ui, [
          s("p", di, S(n.value), 1)
        ])
      ])
    ], 2)) : w("", !0);
  }
}), fi = ["id", "aria-describedby"], mi = /* @__PURE__ */ pe({
  __name: "InputDescription",
  props: {
    id: {},
    description: {}
  },
  setup(e) {
    return (t, l) => e.description ? (o(), u("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${e.id}-description`,
      "aria-describedby": `${e.id}-description`
    }, [
      s("div", null, S(e.description), 1)
    ], 8, fi)) : w("", !0);
  }
}), Wa = pe({
  inheritAttrs: !1,
  props: {
    image: Object,
    svg: String,
    src: String,
    alt: String,
    type: String
  },
  setup(e, { attrs: t }) {
    return () => {
      let l = e.image;
      if (e.type) {
        const { typeOf: d } = gt(), i = d(e.type);
        i || console.warn(`Type ${e.type} does not exist`), i?.icon ? l = i?.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let n = e.svg || l?.svg || "";
      if (n.startsWith("<svg ")) {
        let i = ln(n, ">").indexOf("class="), r = `${l?.cls || ""} ${t.class || ""}`;
        if (i == -1)
          n = `<svg class="${r}" ${n.substring(4)}`;
        else {
          const c = i + 6 + 1;
          n = `${n.substring(0, c) + r} ${n.substring(c)}`;
        }
        return Nt("span", { innerHTML: n });
      } else
        return Nt("img", {
          class: [l?.cls, t.class],
          src: is(e.src || l?.uri),
          onError: (d) => sn(d.target)
        });
    };
  }
}), vi = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, pi = { class: "flex" }, gi = /* @__PURE__ */ pe({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (t, l) => (o(), u("div", vi, [
      s("div", pi, [
        (o(), u("svg", {
          class: h(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [...l[0] || (l[0] = [
          s("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }, null, -1),
          s("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          }, null, -1)
        ])], 2)),
        s("span", null, [
          Q(t.$slots, "default")
        ])
      ])
    ]));
  }
}), yi = ["href", "onClick"], hi = ["type"], Es = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black", bi = /* @__PURE__ */ pe({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: {}
  },
  setup(e) {
    return (t, l) => {
      const n = E("router-link");
      return e.href ? (o(), Z(n, {
        key: 0,
        to: e.href
      }, {
        default: we(({ navigate: a }) => [
          s("button", {
            class: h(Es),
            href: e.href,
            onClick: a
          }, [
            Q(t.$slots, "default")
          ], 8, yi)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Se({
        key: 1,
        type: e.type,
        class: Es
      }, t.$attrs), [
        Q(t.$slots, "default")
      ], 16, hi));
    };
  }
}), wi = ["href", "onClick"], ki = ["type"], xi = /* @__PURE__ */ pe({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: {},
    color: { default: "indigo" }
  },
  setup(e) {
    const t = e, l = {
      blue: "focus:ring-blue-500 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "focus:ring-purple-500 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800",
      red: "focus:ring-red-500 bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-500 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-500 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-500 bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
    }, n = f(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black text-white " + (l[t.color] || l.indigo));
    return (a, d) => {
      const i = E("router-link");
      return e.href ? (o(), Z(i, {
        key: 0,
        to: e.href
      }, {
        default: we(({ navigate: r }) => [
          s("button", {
            class: h(n.value),
            href: e.href,
            onClick: r
          }, [
            Q(a.$slots, "default")
          ], 10, wi)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Se({
        key: 1,
        type: e.type,
        class: n.value
      }, a.$attrs), [
        Q(a.$slots, "default")
      ], 16, ki));
    };
  }
}), $i = ["type", "href", "onClick"], Ci = ["type"], Ds = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black", Si = /* @__PURE__ */ pe({
  __name: "SecondaryButton",
  props: {
    type: {},
    href: {}
  },
  setup(e) {
    return (t, l) => {
      const n = E("router-link");
      return e.href ? (o(), Z(n, {
        key: 0,
        to: e.href
      }, {
        default: we(({ navigate: a }) => [
          s("button", {
            type: e.type ?? "button",
            class: h(Ds),
            href: e.href,
            onClick: a
          }, [
            Q(t.$slots, "default")
          ], 8, $i)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Se({
        key: 1,
        type: e.type ?? "button",
        class: Ds
      }, t.$attrs), [
        Q(t.$slots, "default")
      ], 16, Ci));
    };
  }
}), Li = /* @__PURE__ */ pe({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const t = So(), l = e, n = f(() => (_l[l.color] || _l.blue) + (t.href ? "" : " cursor-pointer"));
    return (a, d) => (o(), u("a", {
      class: h(n.value)
    }, [
      Q(a.$slots, "default")
    ], 2));
  }
}), Vi = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, Mi = {
  role: "list",
  class: "flex items-center space-x-4"
}, Ti = ["href", "title"], Ai = { class: "sr-only" }, Oi = /* @__PURE__ */ pe({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (t, l) => (o(), u("nav", Vi, [
      s("ol", Mi, [
        s("li", null, [
          s("div", null, [
            s("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              l[0] || (l[0] = s("svg", {
                class: "h-6 w-6 flex-shrink-0",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", {
                  "fill-rule": "evenodd",
                  d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              s("span", Ai, S(e.homeLabel), 1)
            ], 8, Ti)
          ])
        ]),
        Q(t.$slots, "default")
      ])
    ]));
  }
}), Fi = { class: "flex items-center" }, ji = ["href", "title"], Ii = ["title"], Pi = /* @__PURE__ */ pe({
  __name: "Breadcrumb",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, l) => (o(), u("li", null, [
      s("div", Fi, [
        l[0] || (l[0] = s("svg", {
          class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true"
        }, [
          s("path", {
            "fill-rule": "evenodd",
            d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
            "clip-rule": "evenodd"
          })
        ], -1)),
        e.href ? (o(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          Q(t.$slots, "default")
        ], 8, ji)) : (o(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          Q(t.$slots, "default")
        ], 8, Ii))
      ])
    ]));
  }
}), Bi = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, Ei = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, Di = /* @__PURE__ */ pe({
  __name: "NavList",
  props: {
    title: {}
  },
  setup(e) {
    return (t, l) => (o(), u("div", null, [
      e.title ? (o(), u("h2", Bi, S(e.title), 1)) : w("", !0),
      s("ul", Ei, [
        Q(t.$slots, "default")
      ])
    ]));
  }
}), Ni = { class: "relative flex items-start space-x-4 py-6" }, Ri = { class: "flex-shrink-0" }, Hi = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, qi = { class: "min-w-0 flex-1" }, zi = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, Ui = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, Ki = ["href"], Qi = { class: "text-base text-gray-500" }, Ji = /* @__PURE__ */ pe({
  __name: "NavListItem",
  props: {
    title: {},
    href: {},
    icon: {},
    iconSvg: {},
    iconSrc: {},
    iconAlt: {}
  },
  setup(e) {
    return (t, l) => {
      const n = E("Icon");
      return o(), u("li", Ni, [
        s("div", Ri, [
          s("span", Hi, [
            he(n, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        s("div", qi, [
          s("h3", zi, [
            s("span", Ui, [
              s("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                l[0] || (l[0] = s("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                }, null, -1)),
                ye(" " + S(e.title), 1)
              ], 8, Ki)
            ])
          ]),
          s("p", Qi, [
            Q(t.$slots, "default")
          ])
        ]),
        l[1] || (l[1] = s("div", { class: "flex-shrink-0 self-center" }, [
          s("svg", {
            class: "h-5 w-5 text-gray-400",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
              "clip-rule": "evenodd"
            })
          ])
        ], -1))
      ]);
    };
  }
}), Zi = { key: 0 }, Gi = { class: "md:p-4" }, Xa = /* @__PURE__ */ pe({
  __name: "EnsureAccess",
  props: {
    invalidAccess: {},
    alertClass: {}
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: t } = Tl(), { config: l } = $t(), n = () => {
      let d = location.href.substring(location.origin.length) || "/";
      const i = il(l.value.redirectSignIn, { redirect: d });
      l.value.navigate(i);
    }, a = () => {
      let d = location.href.substring(location.origin.length) || "/";
      const i = il(l.value.redirectSignOut, { ReturnUrl: d });
      l.value.navigate(i);
    };
    return (d, i) => {
      const r = E("Alert"), c = E("SecondaryButton");
      return e.invalidAccess ? (o(), u("div", Zi, [
        he(r, {
          class: h(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        s("div", Gi, [
          ne(t) ? (o(), Z(c, {
            key: 1,
            onClick: a
          }, {
            default: we(() => [...i[1] || (i[1] = [
              ye("Sign Out", -1)
            ])]),
            _: 1
          })) : (o(), Z(c, {
            key: 0,
            onClick: n
          }, {
            default: we(() => [...i[0] || (i[0] = [
              ye("Sign In", -1)
            ])]),
            _: 1
          }))
        ])
      ])) : w("", !0);
    };
  }
}), Wi = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, Xi = { class: "p-4" }, Yi = { class: "flex w-full justify-center" }, _i = { key: 0 }, eu = ["id", "value"], tu = ["for"], lu = { key: 1 }, nu = { class: "mb-2" }, su = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, au = ["onClick"], ou = { class: "flex" }, ru = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, vs = /* @__PURE__ */ pe({
  __name: "FilterColumn",
  props: {
    definitions: {},
    column: {},
    topLeft: {}
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = O(), d = O(""), i = O(""), r = O([]), c = f(() => l.column.meta.isEnum == !0), v = f(() => lt(l.column.meta.type === "Nullable`1" ? l.column.meta.genericArgs[0] : l.column.meta.type)), m = f(() => l.column.meta.isEnum == !0 ? ns(ya(v.value.name)) : []), $ = f(() => p(l.column.type)?.map((F) => ({ key: F.value, value: F.name })) || []), g = O({ filters: [] }), y = f(() => g.value.filters);
    rl(() => g.value = Object.assign({}, l.column.settings, {
      filters: Array.from(l.column.settings.filters)
    })), rl(() => {
      let F = l.column.settings.filters?.[0]?.value?.split(",") || [];
      if (F.length > 0 && v.value?.isEnumInt) {
        const T = F[0] && parseInt(F[0]) || 0;
        F = v.value.enumValues?.filter((oe) => (T & parseInt(oe)) > 0) || [];
      }
      r.value = F;
    });
    function p(F) {
      let T = l.definitions;
      return ma(F) || (T = T.filter((oe) => oe.types !== "string")), T;
    }
    function k(F, T) {
      return p(F).find((oe) => oe.value === T);
    }
    function x() {
      if (!d.value) return;
      let F = k(l.column.type, d.value)?.name;
      F && (g.value.filters.push({ key: d.value, name: F, value: i.value }), d.value = i.value = "");
    }
    function C(F) {
      g.value.filters.splice(F, 1);
    }
    function q(F) {
      return xa(k(l.column.type, F.key), l.column.type, F);
    }
    function H() {
      n("done");
    }
    function P() {
      d.value = "%", a.value?.focus();
    }
    function X() {
      if (i.value && x(), c.value) {
        let F = Object.values(r.value).filter((T) => T);
        g.value.filters = F.length > 0 ? v.value?.isEnumInt ? [{ key: "%HasAny", name: "HasAny", value: F.map((T) => parseInt(T)).reduce((T, oe) => T + oe, 0).toString() }] : [{ key: "%In", name: "In", value: F.join(",") }] : [];
      }
      n("save", g.value), n("done");
    }
    function J(F) {
      g.value.sort = F === g.value.sort ? void 0 : F, Ot(X);
    }
    return (F, T) => {
      const oe = E("SelectInput"), re = E("TextInput"), z = E("PrimaryButton"), G = E("SecondaryButton");
      return o(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: H,
        onVnodeMounted: P
      }, [
        s("div", {
          class: "absolute",
          style: qn(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: T[5] || (T[5] = Re(() => {
          }, ["stop"]))
        }, [
          s("div", Wi, [
            s("div", Xi, [
              T[10] || (T[10] = s("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1)),
              s("div", Yi, [
                s("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: T[0] || (T[0] = (ee) => J("ASC")),
                  class: h(`${g.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, [...T[6] || (T[6] = [
                  s("svg", {
                    class: "w-6 h-6",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16"
                  }, [
                    s("g", { fill: "currentColor" }, [
                      s("path", {
                        "fill-rule": "evenodd",
                        d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
                      }),
                      s("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
                    ])
                  ], -1),
                  s("span", null, "ASC", -1)
                ])], 2),
                s("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: T[1] || (T[1] = (ee) => J("DESC")),
                  class: h(`${g.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, [...T[7] || (T[7] = [
                  tn('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2)
                ])], 2)
              ]),
              T[11] || (T[11] = s("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1)),
              c.value ? (o(), u("div", _i, [
                (o(!0), u(ge, null, be(m.value, (ee) => (o(), u("div", {
                  key: ee.key,
                  class: "flex items-center"
                }, [
                  Ft(s("input", {
                    type: "checkbox",
                    id: ee.key,
                    value: ee.key,
                    "onUpdate:modelValue": T[2] || (T[2] = (j) => r.value = j),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, eu), [
                    [zn, r.value]
                  ]),
                  s("label", {
                    for: ee.key,
                    class: "ml-3"
                  }, S(ee.value), 9, tu)
                ]))), 128))
              ])) : (o(), u("div", lu, [
                (o(!0), u(ge, null, be(y.value, (ee, j) => (o(), u("div", nu, [
                  s("span", su, [
                    ye(S(e.column.name) + " " + S(ee.name) + " " + S(q(ee)) + " ", 1),
                    s("button", {
                      type: "button",
                      onClick: (U) => C(j),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, [...T[8] || (T[8] = [
                      s("svg", {
                        class: "h-2 w-2",
                        stroke: "currentColor",
                        fill: "none",
                        viewBox: "0 0 8 8"
                      }, [
                        s("path", {
                          "stroke-linecap": "round",
                          "stroke-width": "1.5",
                          d: "M1 1l6 6m0-6L1 7"
                        })
                      ], -1)
                    ])], 8, au)
                  ])
                ]))), 256)),
                s("div", ou, [
                  he(oe, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: d.value,
                    "onUpdate:modelValue": T[3] || (T[3] = (ee) => d.value = ee),
                    entries: $.value,
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  k(e.column.type, d.value)?.valueType !== "none" ? (o(), Z(re, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: a,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: i.value,
                    "onUpdate:modelValue": T[4] || (T[4] = (ee) => i.value = ee),
                    onKeyup: Un(x, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue"])) : w("", !0),
                  s("div", { class: "pt-1" }, [
                    s("button", {
                      type: "button",
                      onClick: x,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, [...T[9] || (T[9] = [
                      s("svg", {
                        class: "h-6 w-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      }, [
                        s("path", {
                          "fill-rule": "evenodd",
                          d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ])])
                  ])
                ])
              ]))
            ]),
            s("div", ru, [
              he(z, {
                onClick: X,
                color: "red",
                class: "ml-2"
              }, {
                default: we(() => [...T[12] || (T[12] = [
                  ye(" Save ", -1)
                ])]),
                _: 1
              }),
              he(G, { onClick: H }, {
                default: we(() => [...T[13] || (T[13] = [
                  ye(" Cancel ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), iu = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, uu = { class: "flex flex-wrap" }, du = { class: "group pr-4 sm:pr-6 lg:pr-8" }, cu = { class: "flex justify-between w-full font-medium" }, fu = { class: "w-6 flex justify-end" }, mu = { class: "hidden group-hover:inline" }, vu = ["onClick", "title"], pu = {
  key: 0,
  class: "pt-2"
}, gu = { class: "ml-2" }, yu = { key: 1 }, hu = { class: "pt-2" }, bu = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, wu = ["onClick"], ps = /* @__PURE__ */ pe({
  __name: "FilterViews",
  props: {
    definitions: {},
    columns: {}
  },
  emits: ["done", "change"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = f(() => l.columns.filter((g) => g.settings.filters.length > 0));
    function d(g) {
      return g?.[0]?.value?.split(",");
    }
    function i(g) {
      let y = l.definitions;
      return ma(g) || (y = y.filter((p) => p.types !== "string")), y;
    }
    function r(g, y) {
      return i(g).find((p) => p.value === y);
    }
    function c(g, y) {
      return xa(r(g.type, y.value), g.type, y);
    }
    function v(g) {
      g.settings.filters = [], n("change", g);
    }
    function m(g, y) {
      g.settings.filters.splice(y, 1), n("change", g);
    }
    function $() {
      l.columns.forEach((g) => {
        g.settings.filters = [], n("change", g);
      }), n("done");
    }
    return (g, y) => (o(), u("div", iu, [
      s("div", uu, [
        (o(!0), u(ge, null, be(a.value, (p) => (o(), u("fieldset", du, [
          s("legend", cu, [
            s("span", null, S(ne(Oe)(p.name)), 1),
            s("span", fu, [
              s("span", mu, [
                s("button", {
                  onClick: (k) => v(p),
                  title: `Clear all ${ne(Oe)(p.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, [...y[0] || (y[0] = [
                  s("svg", {
                    class: "h-2 w-2",
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 8 8"
                  }, [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-width": "1.5",
                      d: "M1 1l6 6m0-6L1 7"
                    })
                  ], -1)
                ])], 8, vu)
              ])
            ])
          ]),
          p.meta.isEnum ? (o(), u("div", pu, [
            (o(!0), u(ge, null, be(d(p.settings.filters), (k) => (o(), u("div", {
              key: k,
              class: "flex items-center"
            }, [
              s("label", gu, S(k), 1)
            ]))), 128))
          ])) : (o(), u("div", yu, [
            (o(!0), u(ge, null, be(p.settings.filters, (k, x) => (o(), u("div", hu, [
              s("span", bu, [
                ye(S(p.name) + " " + S(k.name) + " " + S(c(p, k)) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (C) => m(p, x),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, [...y[1] || (y[1] = [
                  s("svg", {
                    class: "h-2 w-2",
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 8 8"
                  }, [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-width": "1.5",
                      d: "M1 1l6 6m0-6L1 7"
                    })
                  ], -1)
                ])], 8, wu)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      s("div", { class: "flex justify-center pt-4" }, [
        s("button", {
          type: "button",
          onClick: $,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, [...y[2] || (y[2] = [
          s("span", null, "Clear All", -1)
        ])])
      ])
    ]));
  }
}), ku = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, xu = { class: "" }, $u = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, Cu = { class: "mt-4" }, Su = ["for"], Lu = ["id"], Vu = ["value", "selected"], Mu = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, Tu = ["id", "checked"], Au = ["for"], Ou = { class: "mt-4" }, Fu = { class: "pb-2 px-4" }, ju = { class: "" }, Iu = ["id", "value"], Pu = ["for"], Bu = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, gs = /* @__PURE__ */ pe({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: {},
    prefs: {},
    maxLimit: {}
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const { autoQueryGridDefaults: l } = $t(), n = e, a = t, d = O({});
    rl(() => d.value = Object.assign({
      take: l.value.take,
      selectedColumns: []
    }, n.prefs));
    const i = [10, 25, 50, 100, 250, 500, 1e3];
    function r() {
      a("done");
    }
    function c() {
      a("save", d.value);
    }
    return (v, m) => {
      const $ = E("PrimaryButton"), g = E("SecondaryButton"), y = E("ModalDialog");
      return o(), Z(y, {
        id: e.id,
        onDone: r,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: we(() => [
          s("div", ku, [
            s("div", xu, [
              s("div", $u, [
                m[3] || (m[3] = s("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1)),
                s("div", Cu, [
                  s("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Su),
                  Ft(s("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": m[0] || (m[0] = (p) => d.value.take = p),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (o(!0), u(ge, null, be(i.filter((p) => n.maxLimit == null || p <= n.maxLimit), (p) => (o(), u("option", {
                      value: p,
                      selected: p === d.value.take
                    }, S(p), 9, Vu))), 256))
                  ], 8, Lu), [
                    [Lo, d.value.take]
                  ])
                ]),
                s("div", Mu, [
                  s("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: m[1] || (m[1] = (p) => d.value.selectedColumns = []),
                    checked: d.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, Tu),
                  s("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, Au)
                ]),
                s("div", Ou, [
                  s("div", Fu, [
                    s("div", ju, [
                      (o(!0), u(ge, null, be(e.columns, (p) => (o(), u("div", {
                        key: p.name,
                        class: "flex items-center"
                      }, [
                        Ft(s("input", {
                          type: "checkbox",
                          id: p.name,
                          value: p.name,
                          "onUpdate:modelValue": m[2] || (m[2] = (k) => d.value.selectedColumns = k),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, Iu), [
                          [zn, d.value.selectedColumns]
                        ]),
                        s("label", {
                          for: p.name,
                          class: "ml-3"
                        }, S(p.name), 9, Pu)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          s("div", Bu, [
            he($, {
              onClick: c,
              color: "red",
              class: "ml-2"
            }, {
              default: we(() => [...m[4] || (m[4] = [
                ye(" Save ", -1)
              ])]),
              _: 1
            }),
            he(g, { onClick: r }, {
              default: we(() => [...m[5] || (m[5] = [
                ye(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), Eu = { key: 0 }, Du = { key: 1 }, Nu = {
  key: 2,
  class: "pt-1"
}, Ru = { key: 0 }, Hu = { key: 1 }, qu = { key: 2 }, zu = { key: 4 }, Uu = { class: "pl-1 pt-1 flex flex-wrap" }, Ku = { class: "flex mt-1" }, Qu = ["title"], Ju = ["disabled"], Zu = ["disabled"], Gu = ["disabled"], Wu = ["disabled"], Xu = {
  key: 0,
  class: "flex mt-1"
}, Yu = { class: "px-4 text-lg text-black dark:text-white" }, _u = { key: 0 }, ed = { key: 1 }, td = { key: 2 }, ld = { class: "flex flex-wrap" }, nd = {
  key: 0,
  class: "pl-2 mt-1"
}, sd = {
  key: 1,
  class: "pl-2 mt-1"
}, ad = {
  key: 2,
  class: "pl-2 mt-1"
}, od = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, rd = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, id = {
  key: 3,
  class: "pl-2 mt-1"
}, ud = {
  key: 4,
  class: "pl-2 mt-1"
}, dd = { class: "mr-1" }, cd = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, fd = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, md = {
  key: 5,
  class: "pl-2 mt-1"
}, vd = ["title"], pd = { class: "whitespace-nowrap" }, gd = { key: 8 }, yd = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, hd = { class: "mr-1 select-none" }, bd = {
  key: 1,
  class: "flex justify-between items-center"
}, wd = { class: "mr-1 select-none" }, Rl = 25, kd = /* @__PURE__ */ pe({
  __name: "AutoQueryGrid",
  props: {
    filterDefinitions: {},
    id: { default: "AutoQueryGrid" },
    ctx: {},
    apis: {},
    type: {},
    prefs: {},
    deny: {},
    hide: {},
    selectedColumns: {},
    toolbarButtonClass: {},
    tableStyle: {},
    gridClass: {},
    grid2Class: {},
    grid3Class: {},
    grid4Class: {},
    tableClass: {},
    theadClass: {},
    tbodyClass: {},
    theadRowClass: {},
    theadCellClass: {},
    headerTitle: {},
    headerTitles: {},
    visibleFrom: {},
    rowClass: {},
    rowStyle: {},
    modelTitle: {},
    newButtonLabel: {},
    apiPrefs: {},
    canFilter: {},
    disableKeyBindings: {},
    configureField: {},
    skip: { default: 0 },
    create: { type: Boolean },
    edit: {},
    filters: {}
  },
  emits: ["headerSelected", "rowSelected", "nav"],
  setup(e, { expose: t, emit: l }) {
    const { config: n, autoQueryGridDefaults: a } = $t(), d = a, i = n.value.storage, r = e, c = l, v = Ne("client"), m = f(() => Vo(r.ctx ?? Tt.createContext({
      id: r.id,
      type: r.type,
      apis: r.apis
    }))), $ = "filtering,queryString,queryFilters".split(","), g = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar,forms".split(","), y = f(() => r.deny ? qt($, r.deny) : qt($, d.value.deny)), p = f(() => r.hide ? qt(g, r.hide) : qt(g, d.value.hide));
    function k(B) {
      return y.value[B];
    }
    function x(B) {
      return p.value[B];
    }
    const C = f(() => r.tableStyle ?? d.value.tableStyle), q = f(() => r.gridClass ?? ke.getGridClass(C.value)), H = f(() => r.grid2Class ?? ke.getGrid2Class(C.value)), P = f(() => r.grid3Class ?? ke.getGrid3Class(C.value)), X = f(() => r.grid4Class ?? ke.getGrid4Class(C.value)), J = f(() => r.tableClass ?? ke.getTableClass(C.value)), F = f(() => r.theadClass ?? ke.getTheadClass(C.value)), T = f(() => r.theadRowClass ?? ke.getTheadRowClass(C.value)), oe = f(() => r.theadCellClass ?? ke.getTheadCellClass(C.value)), re = f(() => r.toolbarButtonClass ?? ke.toolbarButtonClass);
    function z(B, D) {
      if (r.rowClass) return r.rowClass(B, D);
      const xe = !!Ve.value.AnyUpdate, Te = (Ee.value?.name ? ue(B, Ee.value.name) : null) == te.value;
      return ke.getTableRowClass(r.tableStyle, D, Te, xe);
    }
    const G = fl(), j = Object.keys(G).map((B) => B.toLowerCase()), U = f(() => m.value.viewModelProps.filter((B) => j.includes(B.name.toLowerCase()) || j.includes(B.name.toLowerCase() + "-header")).map((B) => B.name));
    function A() {
      let B = sl(r.selectedColumns);
      return B.length > 0 ? B : U.value.length > 0 ? U.value : [];
    }
    const L = f(() => {
      let D = A().map((ve) => ve.toLowerCase());
      const xe = m.value.viewModelProps;
      return D.length > 0 ? D.map((ve) => xe.find((Te) => Te.name.toLowerCase() === ve)).filter((ve) => ve != null) : xe;
    }), M = f(() => {
      const B = m.value.viewModelProps;
      let xe = A().map((Ce) => Ce.toLowerCase()), ve = xe.length > 0 ? xe.map((Ce) => B.find((We) => We.name.toLowerCase() === Ce)).filter((Ce) => Ce != null).map((Ce) => Ce.name) : B.map((Ce) => Ce.name), Te = sl(K.value.selectedColumns).map((Ce) => Ce.toLowerCase());
      return Te.length > 0 ? ve.filter((Ce) => Te.includes(Ce.toLowerCase())) : ve;
    }), fe = O([]), V = Cn(new tt()), b = Cn(new tt()), N = O(), me = O(!1), te = O(), Y = O(), R = O(!1), de = O(), ce = O(r.skip), I = O(!1), K = O({ take: Rl }), se = O(!1), ae = f(() => fe.value.some((B) => B.settings.filters.length > 0 || !!B.settings.sort) || K.value.selectedColumns), ie = f(() => fe.value.map((B) => B.settings.filters.length).reduce((B, D) => B + D, 0)), Ae = f(() => m.value.dataModelProps), Ee = f(() => m.value.dataModelPrimaryKey), $e = f(() => K.value.take ?? Rl), Le = f(() => (V.value.response ? ue(V.value.response, "results") : null) ?? []), Me = f(() => (V.value.response?.total || Le.value.length) ?? 0), Je = f(() => ce.value > 0), ut = f(() => ce.value > 0), Pt = f(() => Le.value.length >= $e.value), Bt = f(() => Le.value.length >= $e.value), Ze = O(), rt = O(), dt = {
      NoQuery: "No Query API was found"
    };
    t({
      update: it,
      search: xs,
      createRequestArgs: mn,
      reset: Ts,
      createDone: gl,
      createSave: yn,
      editDone: Et,
      editSave: Yt,
      forceUpdate: St,
      setEdit: Be,
      edit: Y,
      createForm: Ze,
      editForm: rt,
      apiPrefs: K,
      results: Le,
      skip: ce,
      take: $e,
      total: Me
    }), _.interceptors.has("AutoQueryGrid.new") && _.interceptors.invoke("AutoQueryGrid.new", { props: r });
    function ze(B) {
      if (B) {
        if (r.canFilter)
          return r.canFilter(B);
        const D = Ae.value.find((xe) => xe.name.toLowerCase() == B.toLowerCase());
        if (D)
          return !va(D);
      }
      return !1;
    }
    function nt(B) {
      c("nav", B), k("queryString") && us(B);
    }
    async function ct(B) {
      ce.value += B, ce.value < 0 && (ce.value = 0);
      const D = Math.floor(Me.value / $e.value) * $e.value;
      ce.value > D && (ce.value = D), nt({ skip: ce.value || void 0 }), await it();
    }
    async function le(B, D) {
      if (Y.value = null, te.value = D, !B || !D) return;
      let xe = Sl(Ve.value.AnyQuery, { [B]: D });
      const ve = await v.api(xe);
      if (ve.succeeded) {
        let Te = ue(ve.response, "results")?.[0];
        Te || console.warn(`API ${Ve.value.AnyQuery?.request.name}(${B}:${D}) returned no results`), Y.value = Te;
      }
    }
    async function W(B, D) {
      c("rowSelected", B, D);
      const xe = Ee.value?.name, ve = xe ? ue(B, xe) : null;
      !xe || !ve || (nt({ edit: ve }), le(xe, ve));
    }
    function Fe(B, D) {
      if (!k("filtering")) return;
      let xe = D.target;
      if (ze(B) && xe?.tagName !== "TD") {
        let ve = xe?.closest("TABLE")?.getBoundingClientRect(), Te = fe.value.find((Ce) => Ce.name.toLowerCase() == B.toLowerCase());
        if (Te && ve) {
          let Ce = 318, We = ve.x + Ce + 10;
          de.value = {
            column: Te,
            topLeft: {
              x: Math.max(Math.floor(D.clientX + Ce / 2), We),
              y: ve.y + 45
            }
          };
        }
      }
      c("headerSelected", B, D);
    }
    function Ie() {
      de.value = null;
    }
    async function Ge(B) {
      let D = de.value?.column;
      D && (D.settings = B, i.setItem(Pl(D.name), JSON.stringify(D.settings)), await it()), de.value = null;
    }
    async function ft(B) {
      i.setItem(Pl(B.name), JSON.stringify(B.settings)), await it();
    }
    async function Gt(B) {
      R.value = !1, K.value = B, i.setItem(vn(), JSON.stringify(B)), await it();
    }
    function Wt(B) {
      Ze.value && (Object.assign(Ze.value?.model, B), St());
    }
    function Be(B) {
      Object.assign(Y.value, B), St();
    }
    function St() {
      Ze.value?.forceUpdate(), rt.value?.forceUpdate(), je()?.proxy?.$forceUpdate();
    }
    async function it() {
      await xs(mn());
    }
    async function po() {
      await it();
    }
    const go = /iPad|iPhone|iPod/.test(navigator.userAgent);
    async function xs(B) {
      const D = Ve.value.AnyQuery;
      if (!D) {
        console.error(dt.NoQuery);
        return;
      }
      let xe = Sl(D, B), ve = await v.api(xe);
      sa((We) => {
        se.value = We, go ? Ot(() => V.value = ve) : V.value = ve;
      })();
      let Ce = ue(ve.response, "results") || [];
      !ve.succeeded || Ce.label == 0;
    }
    function mn() {
      let B = {
        include: "total",
        take: $e.value
      }, D = sl(K.value.selectedColumns || r.selectedColumns);
      if (D.length > 0) {
        let ve = Ee.value;
        ve && !D.includes(ve.name) && (D = [ve.name, ...D]);
        const Te = Ae.value, Ce = [];
        D.forEach((We) => {
          const _t = Te.find((Dt) => Dt.name.toLowerCase() == We.toLowerCase());
          _t?.ref?.selfId && Ce.push(_t.ref.selfId), ue(G, We) && Ce.push(...Te.filter((Dt) => Dt.ref?.selfId?.toLowerCase() == We.toLowerCase()).map((Dt) => Dt.name));
        }), Ce.forEach((We) => {
          D.includes(We) || D.push(We);
        }), B.fields = Qa(D).join(",");
      }
      let xe = [];
      if (fe.value.forEach((ve) => {
        ve.settings.sort && xe.push((ve.settings.sort === "DESC" ? "-" : "") + ve.name), ve.settings.filters.forEach((Te) => {
          let Ce = Te.key.replace("%", ve.name);
          B[Ce] = Te.value;
        });
      }), r.filters && Object.keys(r.filters).forEach((ve) => {
        B[ve] = r.filters[ve];
      }), k("queryString") && k("queryFilters")) {
        const ve = location.search ? location.search : location.hash.includes("?") ? "?" + zl(location.hash, "?") : "";
        let Te = Ln(ve);
        if (Object.keys(Te).forEach((Ce) => {
          L.value.find((_t) => _t.name.toLowerCase() === Ce.toLowerCase()) && (B[Ce] = Te[Ce]);
        }), typeof Te.skip < "u") {
          const Ce = parseInt(Te.skip);
          isNaN(Ce) || (B.skip = Ce);
        }
      }
      return typeof B.skip > "u" && ce.value > 0 && (B.skip = ce.value), xe.length > 0 && (B.orderBy = xe.join(",")), B;
    }
    function yo() {
      const B = $s("csv");
      In(B), typeof window < "u" && window.open(B);
    }
    function ho() {
      const B = $s("json");
      In(B), I.value = !0, setTimeout(() => I.value = !1, 3e3);
    }
    function $s(B = "json") {
      const D = mn(), xe = `/api/${Ve.value.AnyQuery?.request.name}`, ve = Uo(v.baseUrl, il(xe, { ...D, jsconfig: "edv" }));
      return ve.indexOf("?") >= 0 ? ln(ve, "?") + "." + B + "?" + zl(ve, "?") : ve + ".json";
    }
    async function bo() {
      fe.value.forEach((B) => {
        B.settings = { filters: [] }, i.removeItem(Pl(B.name));
      }), K.value = { take: Rl }, i.removeItem(vn()), await it();
    }
    function wo() {
      me.value = !0, nt({ create: null });
    }
    const Xt = f(() => m.value.dataModelName), pl = f(() => r.modelTitle || Xt.value), ko = f(() => r.newButtonLabel || `New ${pl.value}`), vn = () => m.value.prefsCacheKey(), Pl = (B) => m.value.columnCacheKey(B), { invalidAccessMessage: pn } = Tl(), Cs = f(() => r.filterDefinitions || m.value.filterDefinitions), Ve = f(() => m.value.apis), Bl = (B) => `<span class="text-yellow-700">${B}</span>`, Ss = f(() => {
      if (!m.value.metadataApi)
        return Bl(`AppMetadata not loaded, see <a class="${_l.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let B = m.value.invalidApis;
      if (B.length > 0)
        return Bl(`Unknown API${B.length > 1 ? "s" : ""}: ${B.join(", ")}`);
      let D = Ve.value;
      return D.empty ? Bl("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : D.AnyQuery ? null : Bl(dt.NoQuery);
    }), Ls = f(() => Ve.value.AnyQuery && pn(Ve.value.AnyQuery)), Vs = f(() => Ve.value.Create && pn(Ve.value.Create)), Ms = f(() => Ve.value.AnyUpdate && pn(Ve.value.AnyUpdate)), xo = f(() => xl(Ve.value.Create));
    f(() => xl(Ve.value.AnyUpdate));
    const gn = f(() => xl(Ve.value.Delete));
    function Et() {
      Y.value = null, te.value = null, nt({ edit: void 0 });
    }
    function gl() {
      me.value = !1, nt({ create: void 0 });
    }
    async function Yt() {
      await it(), Et();
    }
    async function yn() {
      await it(), gl();
    }
    function Ts() {
      V.value = new tt(), b.value = new tt(), me.value = !1, te.value = null, Y.value = null, R.value = !1, de.value = null, ce.value = r.skip, I.value = !1, K.value = { take: Rl }, se.value = !1;
      const B = r.prefs || Yl(i.getItem(vn()));
      B && (K.value = B), fe.value = L.value.map((xe) => ({
        name: xe.name,
        type: xe.type,
        meta: xe,
        settings: Object.assign(
          {
            filters: []
          },
          Yl(i.getItem(Pl(xe.name)))
        )
      })), isNaN(r.skip) || (ce.value = r.skip);
      let D = Ee.value?.name;
      if (k("queryString")) {
        const xe = location.search ? location.search : location.hash.includes("?") ? "?" + zl(location.hash, "?") : "";
        let ve = Ln(xe);
        typeof ve.create < "u" ? me.value = typeof ve.create < "u" : D && (typeof ve.edit == "string" || typeof ve.edit == "number") && le(D, ve.edit);
      }
      r.create === !0 && (me.value = !0), D && r.edit != null && le(D, r.edit);
    }
    return Qe(async () => {
      Ts(), await Ot(), await it();
    }), (B, D) => {
      const xe = E("Alert"), ve = E("EnsureAccessDialog"), Te = E("AutoCreateForm"), Ce = E("AutoEditForm"), We = E("AutoViewForm"), _t = E("ErrorSummary"), As = E("Loading"), Dt = E("SettingsIcons"), $o = E("DataGrid");
      return Ss.value ? (o(), u("div", Eu, [
        he(xe, { innerHTML: Ss.value }, null, 8, ["innerHTML"])
      ])) : Ls.value ? (o(), u("div", Du, [
        he(Xa, { "invalid-access": Ls.value }, null, 8, ["invalid-access"])
      ])) : (o(), u("div", Nu, [
        x("forms") && me.value && Ve.value.Create ? (o(), u("div", Ru, [
          Vs.value ? (o(), Z(ve, {
            key: 0,
            title: `Create ${pl.value}`,
            "invalid-access": Vs.value,
            "alert-class": "text-yellow-700",
            onDone: gl
          }, null, 8, ["title", "invalid-access"])) : ne(G).createform ? Q(B.$slots, "createform", {
            type: Ve.value.Create.request.name,
            configure: e.configureField,
            done: gl,
            save: yn
          }, void 0, void 0, 1) : (o(), Z(Te, {
            key: 2,
            ref_key: "createForm",
            ref: Ze,
            type: Ve.value.Create.request.name,
            configure: e.configureField,
            onDone: gl,
            onSave: yn
          }, {
            header: we(() => [
              Q(B.$slots, "formheader", {
                form: "create",
                formInstance: Ze.value,
                apis: Ve.value,
                type: Xt.value,
                updateModel: Wt
              })
            ]),
            footer: we(() => [
              Q(B.$slots, "formfooter", {
                form: "create",
                formInstance: Ze.value,
                apis: Ve.value,
                type: Xt.value,
                updateModel: Wt
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : x("forms") && Y.value && Ve.value.AnyUpdate ? (o(), u("div", Hu, [
          Ms.value ? (o(), Z(ve, {
            key: 0,
            title: `Update ${pl.value}`,
            "invalid-access": Ms.value,
            "alert-class": "text-yellow-700",
            onDone: Et
          }, null, 8, ["title", "invalid-access"])) : ne(G).editform ? Q(B.$slots, "editform", {
            model: Y.value,
            type: Ve.value.AnyUpdate.request.name,
            deleteType: gn.value ? Ve.value.Delete.request.name : null,
            configure: e.configureField,
            done: Et,
            save: Yt
          }, void 0, void 0, 1) : (o(), Z(Ce, {
            key: 2,
            ref_key: "editForm",
            ref: rt,
            modelValue: Y.value,
            "onUpdate:modelValue": D[0] || (D[0] = (Ue) => Y.value = Ue),
            type: Ve.value.AnyUpdate.request.name,
            deleteType: gn.value ? Ve.value.Delete.request.name : null,
            configure: e.configureField,
            onDone: Et,
            onSave: Yt,
            onDelete: Yt
          }, {
            header: we(() => [
              Q(B.$slots, "formheader", {
                form: "edit",
                formInstance: rt.value,
                apis: Ve.value,
                type: Xt.value,
                model: Y.value,
                id: te.value,
                updateModel: Be
              })
            ]),
            footer: we(() => [
              Q(B.$slots, "formfooter", {
                form: "edit",
                formInstance: rt.value,
                apis: Ve.value,
                type: Xt.value,
                model: Y.value,
                id: te.value,
                updateModel: Be
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : x("forms") && Y.value ? (o(), u("div", qu, [
          ne(G).viewform ? Q(B.$slots, "viewform", {
            model: Y.value,
            apis: Ve.value,
            done: Et
          }, void 0, void 0, 0) : (o(), Z(We, {
            key: 1,
            model: Y.value,
            apis: Ve.value,
            deleteType: gn.value ? Ve.value.Delete.request.name : null,
            done: Et,
            onSave: Yt,
            onDelete: Yt
          }, null, 8, ["model", "apis", "deleteType"]))
        ])) : w("", !0),
        ne(G).toolbar ? Q(B.$slots, "toolbar", {}, void 0, void 0, 3) : x("toolbar") ? (o(), u("div", zu, [
          R.value ? (o(), Z(gs, {
            key: 0,
            columns: L.value,
            prefs: K.value,
            onDone: D[1] || (D[1] = (Ue) => R.value = !1),
            onSave: Gt
          }, null, 8, ["columns", "prefs"])) : w("", !0),
          s("div", Uu, [
            s("div", Ku, [
              x("preferences") ? (o(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${pl.value} Preferences`,
                onClick: D[2] || (D[2] = (Ue) => R.value = !R.value)
              }, [...D[9] || (D[9] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("g", {
                    "stroke-width": "1.5",
                    fill: "none"
                  }, [
                    s("path", {
                      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
                      stroke: "currentColor"
                    })
                  ])
                ], -1)
              ])], 8, Qu)) : w("", !0),
              x("pagingNav") ? (o(), u("button", {
                key: 1,
                type: "button",
                class: h(["pl-2", Je.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !Je.value,
                onClick: D[3] || (D[3] = (Ue) => ct(-Me.value))
              }, [...D[10] || (D[10] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("path", {
                    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 10, Ju)) : w("", !0),
              x("pagingNav") ? (o(), u("button", {
                key: 2,
                type: "button",
                class: h(["pl-2", ut.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !ut.value,
                onClick: D[4] || (D[4] = (Ue) => ct(-$e.value))
              }, [...D[11] || (D[11] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("path", {
                    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 10, Zu)) : w("", !0),
              x("pagingNav") ? (o(), u("button", {
                key: 3,
                type: "button",
                class: h(["pl-2", Pt.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !Pt.value,
                onClick: D[5] || (D[5] = (Ue) => ct($e.value))
              }, [...D[12] || (D[12] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("path", {
                    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 10, Gu)) : w("", !0),
              x("pagingNav") ? (o(), u("button", {
                key: 4,
                type: "button",
                class: h(["pl-2", Bt.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !Bt.value,
                onClick: D[6] || (D[6] = (Ue) => ct(Me.value))
              }, [...D[13] || (D[13] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("path", {
                    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 10, Wu)) : w("", !0)
            ]),
            x("pagingInfo") ? (o(), u("div", Xu, [
              s("div", Yu, [
                se.value ? (o(), u("span", _u, "Querying...")) : w("", !0),
                Le.value.length ? (o(), u("span", ed, [
                  D[14] || (D[14] = s("span", { class: "hidden xl:inline" }, " Showing Results ", -1)),
                  ye(" " + S(ce.value + 1) + " - " + S(Math.min(ce.value + Le.value.length, Me.value)) + " ", 1),
                  s("span", null, " of " + S(Me.value), 1)
                ])) : V.value.completed ? (o(), u("span", td, "No Results")) : w("", !0)
              ])
            ])) : w("", !0),
            s("div", ld, [
              x("refresh") ? (o(), u("div", nd, [
                s("button", {
                  type: "button",
                  onClick: po,
                  title: "Refresh",
                  class: h(re.value)
                }, [...D[15] || (D[15] = [
                  s("svg", {
                    class: "w-5 h-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }, [
                    s("path", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"
                    })
                  ], -1)
                ])], 2)
              ])) : w("", !0),
              x("downloadCsv") ? (o(), u("div", sd, [
                s("button", {
                  type: "button",
                  onClick: yo,
                  title: "Download CSV",
                  class: h(re.value)
                }, [...D[16] || (D[16] = [
                  tn('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2)
                ])], 2)
              ])) : w("", !0),
              x("copyApiUrl") ? (o(), u("div", ad, [
                s("button", {
                  type: "button",
                  onClick: ho,
                  title: "Copy API URL",
                  class: h(re.value)
                }, [
                  I.value ? (o(), u("svg", od, [...D[17] || (D[17] = [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M5 13l4 4L19 7"
                    }, null, -1)
                  ])])) : (o(), u("svg", rd, [...D[18] || (D[18] = [
                    s("g", { fill: "none" }, [
                      s("path", {
                        d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      s("path", {
                        d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ], -1)
                  ])])),
                  D[19] || (D[19] = s("span", { class: "whitespace-nowrap" }, "Copy URL", -1))
                ], 2)
              ])) : w("", !0),
              ae.value && x("resetPreferences") ? (o(), u("div", id, [
                s("button", {
                  type: "button",
                  onClick: bo,
                  title: "Reset Preferences & Filters",
                  class: h(re.value)
                }, [...D[20] || (D[20] = [
                  s("svg", {
                    class: "w-5 h-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    viewBox: "0 0 24 24"
                  }, [
                    s("path", {
                      fill: "currentColor",
                      d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
                    })
                  ], -1)
                ])], 2)
              ])) : w("", !0),
              x("filtersView") && ie.value > 0 ? (o(), u("div", ud, [
                s("button", {
                  type: "button",
                  onClick: D[7] || (D[7] = (Ue) => N.value = N.value == "filters" ? null : "filters"),
                  class: h(re.value),
                  "aria-expanded": "false"
                }, [
                  D[23] || (D[23] = s("svg", {
                    class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    s("path", {
                      "fill-rule": "evenodd",
                      d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                      "clip-rule": "evenodd"
                    })
                  ], -1)),
                  s("span", dd, S(ie.value) + " " + S(ie.value == 1 ? "Filter" : "Filters"), 1),
                  N.value != "filters" ? (o(), u("svg", cd, [...D[21] || (D[21] = [
                    s("path", {
                      "fill-rule": "evenodd",
                      d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                      "clip-rule": "evenodd"
                    }, null, -1)
                  ])])) : (o(), u("svg", fd, [...D[22] || (D[22] = [
                    s("path", {
                      "fill-rule": "evenodd",
                      d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
                      "clip-rule": "evenodd"
                    }, null, -1)
                  ])]))
                ], 2)
              ])) : w("", !0),
              x("newItem") && Ve.value.Create && xo.value ? (o(), u("div", md, [
                s("button", {
                  type: "button",
                  onClick: wo,
                  title: pl.value,
                  class: h(re.value)
                }, [
                  D[24] || (D[24] = s("svg", {
                    class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }, [
                    s("path", {
                      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                      fill: "currentColor"
                    })
                  ], -1)),
                  s("span", pd, S(ko.value), 1)
                ], 10, vd)
              ])) : w("", !0),
              ne(G).toolbarbuttons ? Q(B.$slots, "toolbarbuttons", { toolbarButtonClass: re.value }, void 0, void 0, 6) : w("", !0)
            ])
          ])
        ])) : w("", !0),
        N.value == "filters" ? (o(), Z(ps, {
          key: 5,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: Cs.value,
          columns: fe.value,
          onDone: D[8] || (D[8] = (Ue) => N.value = null),
          onChange: ft
        }, null, 8, ["definitions", "columns"])) : w("", !0),
        b.value.error ?? V.value.error ? (o(), Z(_t, {
          key: 6,
          status: b.value.error ?? V.value.error
        }, null, 8, ["status"])) : se.value ? (o(), Z(As, {
          key: 7,
          class: "p-2"
        })) : w("", !0),
        de.value ? (o(), u("div", gd, [
          he(vs, {
            definitions: Cs.value,
            column: de.value.column,
            "top-left": de.value.topLeft,
            onDone: Ie,
            onSave: Ge
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : w("", !0),
        m.value ? (o(), Z($o, {
          key: 9,
          id: e.id,
          items: Le.value,
          type: Xt.value,
          ctx: m.value,
          "selected-columns": M.value,
          class: "mt-1",
          tableStyle: C.value,
          gridClass: q.value,
          grid2Class: H.value,
          grid3Class: P.value,
          grid4Class: X.value,
          tableClass: J.value,
          theadClass: F.value,
          theadRowClass: T.value,
          theadCellClass: oe.value,
          tbodyClass: e.tbodyClass,
          rowClass: z,
          onRowSelected: W,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: Fe
        }, Kn({
          header: we(({ column: Ue, label: El }) => [
            k("filtering") && ze(Ue) ? (o(), u("div", yd, [
              s("span", hd, S(El), 1),
              he(Dt, {
                column: fe.value.find((Co) => Co.name.toLowerCase() === Ue.toLowerCase()),
                "is-open": de.value?.column.name === Ue
              }, null, 8, ["column", "is-open"])
            ])) : (o(), u("div", bd, [
              s("span", wd, S(El), 1)
            ]))
          ]),
          _: 2
        }, [
          be(Object.keys(ne(G)), (Ue) => ({
            name: Ue,
            fn: we((El) => [
              Q(B.$slots, Ue, Zl(Gl(El)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "ctx", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : w("", !0)
      ]));
    };
  }
}), xd = { class: "flex" }, $d = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Cd = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Sd = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Ld = /* @__PURE__ */ pe({
  __name: "SettingsIcons",
  props: {
    column: {},
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (t, l) => (o(), u("div", xd, [
      e.column?.settings?.filters?.length ? (o(), u("svg", $d, [...l[0] || (l[0] = [
        s("g", { fill: "none" }, [
          s("path", {
            d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1)
      ])])) : (o(), u("svg", {
        key: 1,
        class: h(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [...l[1] || (l[1] = [
        s("path", {
          d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
          fill: "currentColor"
        }, null, -1),
        s("path", {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
          fill: "currentColor"
        }, null, -1)
      ])], 2)),
      e.column?.settings?.sort === "ASC" ? (o(), u("svg", Cd, [...l[2] || (l[2] = [
        s("g", { fill: "none" }, [
          s("path", {
            d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
            fill: "currentColor"
          })
        ], -1)
      ])])) : e.column?.settings?.sort === "DESC" ? (o(), u("svg", Sd, [...l[3] || (l[3] = [
        s("g", { fill: "none" }, [
          s("path", {
            d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
            fill: "currentColor"
          })
        ], -1)
      ])])) : w("", !0)
    ]));
  }
}), Vd = /* @__PURE__ */ pe({
  __name: "EnsureAccessDialog",
  props: {
    title: {},
    subtitle: {},
    invalidAccess: {},
    alertClass: {}
  },
  emits: ["done"],
  setup(e) {
    return (t, l) => {
      const n = E("EnsureAccess"), a = E("SlideOver");
      return e.invalidAccess ? (o(), Z(a, {
        key: 0,
        title: e.title,
        onDone: l[0] || (l[0] = (d) => t.$emit("done")),
        "content-class": "relative flex-1"
      }, Kn({
        default: we(() => [
          he(n, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: we(() => [
            ye(S(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : w("", !0);
    };
  }
}), Md = ["for"], Td = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], Ad = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Od = ["id"], Fd = ["id"], jd = {
  inheritAttrs: !1
}, Id = /* @__PURE__ */ pe({
  ...jd,
  __name: "TextInput",
  props: {
    status: {},
    id: {},
    type: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {}
  },
  setup(e, { expose: t }) {
    const l = (y) => Fn(i.value, y.value), n = e;
    t({
      focus: d
    });
    const a = O();
    function d() {
      a.value?.focus();
    }
    const i = f(() => n.type || "text"), r = f(() => n.label ?? Oe(pt(n.id))), c = f(() => n.placeholder ?? r.value);
    function v(y) {
      return n.type === "range" ? y.replace("shadow-sm ", "") : y;
    }
    let m = Ne("ApiState", void 0);
    const $ = f(() => xt.call({ responseStatus: n.status ?? m?.error.value }, n.id)), g = f(() => It([
      vt.base,
      $.value ? vt.invalid : v(vt.valid),
      n.inputClass
    ], "TextInput", n.filterClass));
    return (y, p) => (o(), u("div", {
      class: h([y.$attrs.class])
    }, [
      Q(y.$slots, "header", Se({
        inputElement: a.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, y.$attrs)),
      r.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: h(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(r.value), 11, Md)) : w("", !0),
      s("div", {
        class: h(v("mt-1 relative"))
      }, [
        s("input", Se({
          ref_key: "inputElement",
          ref: a,
          type: i.value,
          name: e.id,
          id: e.id,
          class: g.value,
          placeholder: c.value,
          value: ne(Fn)(i.value, e.modelValue),
          onInput: p[0] || (p[0] = (k) => y.$emit("update:modelValue", l(k.target))),
          "aria-invalid": $.value != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, ne(bt)(y.$attrs, ["class", "value"])), null, 16, Td),
        $.value ? (o(), u("div", Ad, [...p[1] || (p[1] = [
          s("svg", {
            class: "h-5 w-5 text-red-500",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
              "clip-rule": "evenodd"
            })
          ], -1)
        ])])) : w("", !0)
      ], 2),
      $.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S($.value), 9, Od)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, Fd)) : w("", !0),
      Q(y.$slots, "footer", Se({
        inputElement: a.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, y.$attrs))
    ], 2));
  }
}), Pd = ["for"], Bd = { class: "mt-1 relative" }, Ed = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], Dd = ["id"], Nd = ["id"], Rd = {
  inheritAttrs: !1
}, Hd = /* @__PURE__ */ pe({
  ...Rd,
  __name: "TextareaInput",
  props: {
    status: {},
    id: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {}
  },
  setup(e) {
    const t = (c) => c.value, l = e, n = f(() => l.label ?? Oe(pt(l.id))), a = f(() => l.placeholder ?? n.value);
    let d = Ne("ApiState", void 0);
    const i = f(() => xt.call({ responseStatus: l.status ?? d?.error.value }, l.id)), r = f(() => It([
      "shadow-sm " + vt.base,
      i.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + vt.valid,
      l.inputClass
    ], "TextareaInput", l.filterClass));
    return (c, v) => (o(), u("div", {
      class: h([c.$attrs.class])
    }, [
      n.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: h(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(n.value), 11, Pd)) : w("", !0),
      s("div", Bd, [
        s("textarea", Se({
          name: e.id,
          id: e.id,
          class: r.value,
          placeholder: a.value,
          onInput: v[0] || (v[0] = (m) => c.$emit("update:modelValue", t(m.target))),
          "aria-invalid": i.value != null,
          "aria-describedby": `${e.id}-error`
        }, ne(bt)(c.$attrs, ["class"])), S(e.modelValue), 17, Ed)
      ]),
      i.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(i.value), 9, Dd)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, Nd)) : w("", !0)
    ], 2));
  }
}), qd = ["for"], zd = ["id", "name", "value", "aria-invalid", "aria-describedby"], Ud = ["value"], Kd = ["id"], Qd = {
  inheritAttrs: !1
}, Jd = /* @__PURE__ */ pe({
  ...Qd,
  __name: "SelectInput",
  props: {
    status: {},
    id: {},
    modelValue: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    options: {},
    values: {},
    entries: {}
  },
  setup(e) {
    const t = (c) => c.value, l = e, n = f(() => l.label ?? Oe(pt(l.id)));
    let a = Ne("ApiState", void 0);
    const d = f(() => xt.call({ responseStatus: l.status ?? a?.error.value }, l.id)), i = f(() => l.entries || (l.values ? l.values.map((c) => ({ key: c, value: c })) : l.options ? Object.keys(l.options).map((c) => ({ key: c, value: l.options[c] })) : [])), r = f(() => It([
      "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600 disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-500 disabled:border-slate-200 dark:disabled:border-slate-700 disabled:shadow-none",
      d.value ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "shadow-sm border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
      l.inputClass
    ], "SelectInput", l.filterClass));
    return (c, v) => (o(), u("div", {
      class: h([c.$attrs.class])
    }, [
      n.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: h(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(n.value), 11, qd)) : w("", !0),
      s("select", Se({
        id: e.id,
        name: e.id,
        class: r.value,
        value: e.modelValue,
        onInput: v[0] || (v[0] = (m) => c.$emit("update:modelValue", t(m.target))),
        "aria-invalid": d.value != null,
        "aria-describedby": `${e.id}-error`
      }, ne(bt)(c.$attrs, ["class"])), [
        (o(!0), u(ge, null, be(i.value, (m) => (o(), u("option", {
          value: m.key
        }, S(m.value), 9, Ud))), 256))
      ], 16, zd),
      d.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(d.value), 9, Kd)) : w("", !0)
    ], 2));
  }
}), Zd = { class: "flex items-center h-5" }, Gd = ["id", "name", "checked"], Wd = { class: "ml-3 text-sm" }, Xd = ["for"], Yd = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, _d = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, ec = {
  inheritAttrs: !1
}, tc = /* @__PURE__ */ pe({
  ...ec,
  __name: "CheckboxInput",
  props: {
    modelValue: { type: Boolean },
    status: {},
    id: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    help: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.label ?? Oe(pt(l.id)));
    let a = Ne("ApiState", void 0);
    const d = f(() => xt.call({ responseStatus: l.status ?? a?.error.value }, l.id)), i = f(() => It(["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", l.inputClass], "CheckboxInput", l.filterClass));
    return (r, c) => (o(), u("div", {
      class: h(["relative flex items-start", r.$attrs.class])
    }, [
      s("div", Zd, [
        s("input", Se({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: c[0] || (c[0] = (v) => r.$emit("update:modelValue", v.target.checked)),
          class: i.value
        }, ne(bt)(r.$attrs, ["class"])), null, 16, Gd)
      ]),
      s("div", Wd, [
        s("label", {
          for: e.id,
          class: h(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, S(n.value), 11, Xd),
        d.value ? (o(), u("p", Yd, S(d.value), 1)) : e.help ? (o(), u("p", _d, S(e.help), 1)) : w("", !0)
      ])
    ], 2));
  }
}), lc = ["id"], nc = ["for"], sc = { class: "mt-1 relative" }, ac = ["id", "name", "value"], oc = { class: "flex flex-wrap pb-1.5" }, rc = { class: "pt-1.5 pl-1" }, ic = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, uc = ["onClick"], dc = { class: "pt-1.5 pl-1 shrink" }, cc = ["type", "name", "id", "aria-invalid", "aria-describedby"], fc = ["id"], mc = ["onMouseover", "onClick"], vc = { class: "block truncate" }, pc = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, gc = ["id"], yc = ["id"], hc = {
  inheritAttrs: !1
}, bc = /* @__PURE__ */ pe({
  ...hc,
  __name: "TagInput",
  props: {
    status: {},
    id: {},
    type: {},
    inputClass: {},
    filterClass: {},
    label: {},
    labelClass: {},
    help: {},
    modelValue: { default: () => [] },
    delimiters: { default: () => [","] },
    allowableValues: {},
    string: { type: Boolean },
    maxVisibleItems: { default: 300 },
    converter: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = t;
    function a(L) {
      return l.converter ? l.converter(L) : L;
    }
    const d = f(() => qe(a(l.modelValue), (L) => typeof L == "string" ? L.trim().length == 0 ? [] : L.split(",") : L) || []), i = O(), r = O(!1), c = f(() => {
      const L = $.value.toLowerCase();
      return !l.allowableValues || l.allowableValues.length == 0 ? [] : l.allowableValues.length < 1e3 ? l.allowableValues.filter((M) => !d.value.includes(M) && M.toLowerCase().includes(L)) : l.allowableValues.filter((M) => !d.value.includes(M) && M.startsWith(L));
    });
    function v(L) {
      i.value = L;
    }
    const m = O(null), $ = O(""), g = f(() => l.type || "text"), y = f(() => l.label ?? Oe(pt(l.id)));
    let p = Ne("ApiState", void 0);
    const k = f(() => xt.call({ responseStatus: l.status ?? p?.error.value }, l.id)), x = f(() => It([
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      k.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      l.inputClass
    ], "TagInput", l.filterClass)), C = (L) => F(d.value.filter((M) => M != L));
    function q(L) {
      document.activeElement === L.target && m.value?.focus();
    }
    const H = O();
    function P() {
      r.value = !0, H.value = !0;
    }
    function X() {
      P();
    }
    function J() {
      j(oe()), H.value = !1, setTimeout(() => {
        H.value || (r.value = !1);
      }, 200);
    }
    function F(L) {
      const M = l.string ? L.join(",") : L;
      n("update:modelValue", M);
    }
    function T(L) {
      if (L.key == "Backspace" && $.value.length == 0 && d.value.length > 0 && C(d.value[d.value.length - 1]), !(!l.allowableValues || l.allowableValues.length == 0))
        if (L.code == "Escape" || L.code == "Tab")
          r.value = !1;
        else if (L.code == "Home")
          i.value = c.value[0], G();
        else if (L.code == "End")
          i.value = c.value[c.value.length - 1], G();
        else if (L.code == "ArrowDown") {
          if (r.value = !0, !i.value)
            i.value = c.value[0];
          else {
            const M = c.value.indexOf(i.value);
            i.value = M + 1 < c.value.length ? c.value[M + 1] : c.value[0];
          }
          ee();
        } else if (L.code == "ArrowUp") {
          if (!i.value)
            i.value = c.value[c.value.length - 1];
          else {
            const M = c.value.indexOf(i.value);
            i.value = M - 1 >= 0 ? c.value[M - 1] : c.value[c.value.length - 1];
          }
          ee();
        } else L.code == "Enter" ? i.value && r.value ? (j(i.value), L.preventDefault()) : r.value = !1 : r.value = c.value.length > 0;
    }
    function oe() {
      if ($.value.length == 0) return "";
      let L = Ko($.value.trim(), ",");
      return L[0] == "," && (L = L.substring(1)), L = L.trim(), L.length == 0 && r.value && c.value.length > 0 ? i.value : L;
    }
    function re(L) {
      const M = oe();
      if (M.length > 0) {
        const fe = l.delimiters.some((b) => b == L.key);
        if (fe && L.preventDefault(), L.key == "Enter" || L.key == "NumpadEnter" || L.key.length == 1 && fe) {
          j(M);
          return;
        }
      }
    }
    const z = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function G() {
      setTimeout(() => {
        let L = Wl(`#${l.id}-tag li.active`);
        L && L.scrollIntoView(z);
      }, 0);
    }
    function ee() {
      setTimeout(() => {
        let L = Wl(`#${l.id}-tag li.active`);
        L && ("scrollIntoViewIfNeeded" in L ? L.scrollIntoViewIfNeeded(z) : L.scrollIntoView(z));
      }, 0);
    }
    function j(L) {
      if (L.length === 0) return;
      const M = Array.from(d.value);
      M.indexOf(L) == -1 && M.push(L), F(M), $.value = "", r.value = !1;
    }
    function U(L) {
      const M = L.clipboardData?.getData("Text");
      A(M);
    }
    function A(L) {
      if (!L) return;
      const M = new RegExp(`\\n|\\t|${l.delimiters.join("|")}`), fe = Array.from(d.value);
      L.split(M).map((b) => b.trim()).forEach((b) => {
        fe.indexOf(b) == -1 && fe.push(b);
      }), F(fe), $.value = "";
    }
    return (L, M) => (o(), u("div", {
      class: h([L.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      y.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: h(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(y.value), 11, nc)) : w("", !0),
      s("div", sc, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: d.value.join(",")
        }, null, 8, ac),
        s("button", {
          class: h(x.value),
          onClick: Re(q, ["prevent"]),
          onFocus: M[2] || (M[2] = (fe) => r.value = !0),
          tabindex: "-1"
        }, [
          s("div", oc, [
            (o(!0), u(ge, null, be(d.value, (fe) => (o(), u("div", rc, [
              s("span", ic, [
                ye(S(fe) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (V) => C(fe),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, [...M[3] || (M[3] = [
                  s("svg", {
                    class: "h-2 w-2",
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 8 8"
                  }, [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-width": "1.5",
                      d: "M1 1l6 6m0-6L1 7"
                    })
                  ], -1)
                ])], 8, uc)
              ])
            ]))), 256)),
            s("div", dc, [
              Ft(s("input", Se({
                ref_key: "txtInput",
                ref: m,
                type: g.value,
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: `${e.id}-txt`,
                id: `${e.id}-txt`,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${$.value.length + 1}ch`,
                "onUpdate:modelValue": M[0] || (M[0] = (fe) => $.value = fe),
                "aria-invalid": k.value != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: T,
                onKeypress: re,
                onPaste: Re(U, ["prevent", "stop"]),
                onFocus: X,
                onBlur: J,
                onClick: M[1] || (M[1] = (fe) => r.value = !0)
              }, ne(bt)(L.$attrs, ["class", "required"])), null, 16, cc), [
                [Mo, $.value]
              ])
            ])
          ])
        ], 34),
        r.value && c.value.length ? (o(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
          onKeydown: T,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(ge, null, be(c.value.slice(0, e.maxVisibleItems), (fe) => (o(), u("li", {
            class: h([fe === i.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (V) => v(fe),
            onClick: (V) => j(fe),
            role: "option",
            tabindex: "-1"
          }, [
            s("span", vc, S(fe), 1)
          ], 42, mc))), 256))
        ], 40, fc)) : w("", !0),
        k.value ? (o(), u("div", pc, [...M[4] || (M[4] = [
          s("svg", {
            class: "h-5 w-5 text-red-500",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
              "clip-rule": "evenodd"
            })
          ], -1)
        ])])) : w("", !0)
      ]),
      k.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(k.value), 9, gc)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, yc)) : w("", !0)
    ], 10, lc));
  }
}), wc = { class: "relative flex-grow mr-2 sm:mr-4" }, kc = ["for"], xc = { class: "block mt-2" }, $c = { class: "sr-only" }, Cc = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], Sc = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Lc = ["id"], Vc = ["id"], Mc = { key: 0 }, Tc = ["title"], Ac = ["alt", "src"], Oc = {
  key: 1,
  class: "mt-3"
}, Fc = { class: "w-full" }, jc = { class: "pr-6 align-bottom pb-2" }, Ic = ["title"], Pc = ["src", "onError"], Bc = ["href"], Ec = {
  key: 1,
  class: "overflow-hidden"
}, Dc = { class: "align-top pb-2 whitespace-nowrap" }, Nc = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, Rc = /* @__PURE__ */ pe({
  __name: "FileInput",
  props: {
    multiple: { type: Boolean },
    status: {},
    id: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {},
    values: {},
    files: {}
  },
  setup(e) {
    const t = e, l = O(null), { assetsPathResolver: n, fallbackPathResolver: a } = $t(), d = {}, i = O(), r = O(t.files?.map(c) || []);
    function c(P) {
      return P.filePath = n(P.filePath), P;
    }
    t.values && t.values.length > 0 && (r.value = t.values.map((P) => {
      let X = P.replace(/\\/g, "/");
      return { fileName: na(Ut(X, "/"), "."), filePath: X, contentType: Mn(X) };
    }).map(c));
    const v = f(() => t.label ?? Oe(pt(t.id))), m = f(() => t.placeholder ?? v.value);
    let $ = Ne("ApiState", void 0);
    const g = f(() => xt.call({ responseStatus: t.status ?? $?.error.value }, t.id)), y = f(() => It([
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      g.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      t.inputClass
    ], "FileInput", t.filterClass)), p = (P) => {
      let X = P.target;
      i.value = "", r.value = Array.from(X.files || []).map((J) => ({
        fileName: J.name,
        filePath: Gn(J),
        contentLength: J.size,
        contentType: J.type || Mn(J.name)
      }));
    }, k = () => l.value?.click(), x = (P) => P == null ? !1 : P.startsWith("data:") || P.startsWith("blob:"), C = f(() => {
      if (r.value.length > 0)
        return r.value[0].filePath;
      let P = typeof t.modelValue == "string" ? t.modelValue : t.values && t.values[0];
      return P && Rt(n(P)) || null;
    }), q = (P) => !P || P.startsWith("data:") || P.endsWith(".svg") ? "" : "rounded-full object-cover";
    function H(P) {
      i.value = a(C.value);
    }
    return Jt(ua), (P, X) => (o(), u("div", {
      class: h(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      s("div", wc, [
        v.value ? (o(), u("label", {
          key: 0,
          for: e.id,
          class: h(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, S(v.value), 11, kc)) : w("", !0),
        s("div", xc, [
          s("span", $c, S(e.help ?? v.value), 1),
          s("input", Se({
            ref_key: "input",
            ref: l,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: y.value,
            placeholder: m.value,
            "aria-invalid": g.value != null,
            "aria-describedby": `${e.id}-error`
          }, P.$attrs, { onChange: p }), null, 16, Cc),
          g.value ? (o(), u("div", Sc, [...X[0] || (X[0] = [
            s("svg", {
              class: "h-5 w-5 text-red-500",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true"
            }, [
              s("path", {
                "fill-rule": "evenodd",
                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])])) : w("", !0)
        ]),
        g.value ? (o(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, S(g.value), 9, Lc)) : e.help ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, S(e.help), 9, Vc)) : w("", !0)
      ]),
      e.multiple ? (o(), u("div", Oc, [
        s("table", Fc, [
          (o(!0), u(ge, null, be(r.value, (J) => (o(), u("tr", null, [
            s("td", jc, [
              s("div", {
                class: "flex w-full",
                title: x(J.filePath) ? "" : J.filePath
              }, [
                s("img", {
                  src: d[ne(Rt)(J.filePath)] || ne(n)(ne(Rt)(J.filePath)),
                  class: h(["mr-2 h-8 w-8", q(J.filePath)]),
                  onError: (F) => d[ne(Rt)(J.filePath)] = ne(a)(ne(Rt)(J.filePath))
                }, null, 42, Pc),
                x(J.filePath) ? (o(), u("span", Ec, S(J.fileName), 1)) : (o(), u("a", {
                  key: 0,
                  href: ne(n)(J.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, S(J.fileName), 9, Bc))
              ], 8, Ic)
            ]),
            s("td", Dc, [
              J.contentLength && J.contentLength > 0 ? (o(), u("span", Nc, S(ne(Xn)(J.contentLength)), 1)) : w("", !0)
            ])
          ]))), 256))
        ])
      ])) : (o(), u("div", Mc, [
        C.value ? (o(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: x(C.value) ? "" : C.value
        }, [
          s("img", {
            onClick: k,
            class: h(["h-16 w-16", q(C.value)]),
            alt: `Current ${v.value ?? ""}`,
            src: i.value || ne(n)(C.value),
            onError: H
          }, null, 42, Ac)
        ], 8, Tc)) : w("", !0)
      ]))
    ], 2));
  }
}), Hc = ["id"], qc = ["for"], zc = { class: "relative mt-1" }, Uc = ["id", "placeholder", "readonly"], Kc = ["id"], Qc = ["onMouseover", "onClick"], Jc = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, Zc = ["id"], Gc = ["id"], Wc = /* @__PURE__ */ pe({
  __name: "Autocomplete",
  props: {
    status: {},
    id: {},
    type: {},
    label: {},
    help: {},
    placeholder: {},
    multiple: { type: Boolean, default: !1 },
    required: { type: Boolean },
    options: { default: () => [] },
    modelValue: {},
    match: {},
    viewCount: { default: 100 },
    pageSize: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = O(!1), a = e, d = l;
    t({ toggle: z });
    function i(A) {
      return Array.isArray(a.modelValue) && a.modelValue.indexOf(A) >= 0;
    }
    const r = f(() => a.label ?? Oe(pt(a.id)));
    let c = Ne("ApiState", void 0);
    const v = f(() => xt.call({ responseStatus: a.status ?? c?.error.value }, a.id)), m = f(() => [vt.base, v.value ? vt.invalid : vt.valid]), $ = O(null), g = O(""), y = O(null), p = O(a.viewCount), k = O([]), x = f(() => g.value ? a.options.filter((L) => a.match(L, g.value)).slice(0, p.value) : a.options), C = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function q(A) {
      y.value = A, k.value.indexOf(A) > Math.floor(p.value * 0.9) && (p.value += a.viewCount, U());
    }
    const H = [",", `
`, "	"];
    function P(A) {
      const L = A.clipboardData?.getData("Text");
      X(L);
    }
    function X(A) {
      if (!A) return;
      const L = H.some((M) => A.includes(M));
      if (!a.multiple || !L) {
        const M = a.options.filter((fe) => a.match(fe, A));
        M.length == 1 && (j(M[0]), n.value = !1, Ql());
      } else if (L) {
        const M = new RegExp("\\r|\\n|\\t|,"), V = A.split(M).filter((b) => b.trim()).map((b) => a.options.find((N) => a.match(N, b))).filter((b) => !!b);
        if (V.length > 0) {
          g.value = "", n.value = !1, y.value = null;
          let b = Array.from(a.modelValue || []);
          V.forEach((N) => {
            i(N) ? b = b.filter((me) => me != N) : b.push(N);
          }), d("update:modelValue", b), Ql();
        }
      }
    }
    function J(A) {
      C.indexOf(A.code) || ee();
    }
    function F(A) {
      if (!(A.shiftKey || A.ctrlKey || A.altKey)) {
        if (!n.value) {
          A.code == "ArrowDown" && (n.value = !0, y.value = k.value[0]);
          return;
        }
        if (A.code == "Escape")
          n.value && (A.stopPropagation(), n.value = !1);
        else if (A.code == "Tab")
          n.value = !1;
        else if (A.code == "Home")
          y.value = k.value[0], oe();
        else if (A.code == "End")
          y.value = k.value[k.value.length - 1], oe();
        else if (A.code == "ArrowDown") {
          if (!y.value)
            y.value = k.value[0];
          else {
            const L = k.value.indexOf(y.value);
            y.value = L + 1 < k.value.length ? k.value[L + 1] : k.value[0];
          }
          re();
        } else if (A.code == "ArrowUp") {
          if (!y.value)
            y.value = k.value[k.value.length - 1];
          else {
            const L = k.value.indexOf(y.value);
            y.value = L - 1 >= 0 ? k.value[L - 1] : k.value[k.value.length - 1];
          }
          re();
        } else A.code == "Enter" && (y.value ? (j(y.value), a.multiple || (A.preventDefault(), Ql())) : n.value = !1);
      }
    }
    const T = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function oe() {
      setTimeout(() => {
        let A = Wl(`#${a.id}-autocomplete li.active`);
        A && A.scrollIntoView(T);
      }, 0);
    }
    function re() {
      setTimeout(() => {
        let A = Wl(`#${a.id}-autocomplete li.active`);
        A && ("scrollIntoViewIfNeeded" in A ? A.scrollIntoViewIfNeeded(T) : A.scrollIntoView(T));
      }, 0);
    }
    function z(A) {
      n.value = A, A && (U(), $.value?.focus());
    }
    function G() {
      !a.multiple && a.modelValue ? (n.value = !n.value, n.value && U()) : ee();
    }
    function ee() {
      n.value = !0, U();
    }
    function j(A) {
      if (g.value = "", n.value = !1, a.multiple) {
        let L = Array.from(a.modelValue || []);
        i(A) ? L = L.filter((M) => M != A) : L.push(A), y.value = null, d("update:modelValue", L);
      } else
        d("update:modelValue", A);
    }
    function U() {
      k.value = x.value;
    }
    return ot(g, U), (A, L) => (o(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      r.value ? (o(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, S(r.value), 9, qc)) : w("", !0),
      s("div", zc, [
        Ft(s("input", Se({
          ref_key: "txtInput",
          ref: $,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": L[0] || (L[0] = (M) => g.value = M),
          class: m.value,
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          readonly: !e.multiple && !!e.modelValue && !n.value,
          onKeydown: F,
          onKeyup: J,
          onClick: G,
          onPaste: P,
          required: !1
        }, A.$attrs), null, 16, Uc), [
          [_s, g.value]
        ]),
        s("button", {
          type: "button",
          onClick: L[1] || (L[1] = (M) => z(!n.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, [...L[2] || (L[2] = [
          s("svg", {
            class: "h-5 w-5 text-gray-400 dark:text-gray-500",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
              "clip-rule": "evenodd"
            })
          ], -1)
        ])]),
        n.value ? (o(), u("ul", {
          key: 0,
          class: "absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
          onKeydown: F,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(ge, null, be(k.value, (M) => (o(), u("li", {
            class: h([M === y.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (fe) => q(M),
            onClick: (fe) => j(M),
            role: "option",
            tabindex: "-1"
          }, [
            typeof M == "string" ? Q(A.$slots, "item", Se({ ref_for: !0 }, { key: M, value: M }), void 0, void 0, 0) : Q(A.$slots, "item", Se({ ref_for: !0 }, M), void 0, void 0, 1),
            i(M) ? (o(), u("span", {
              key: 2,
              class: h(["absolute inset-y-0 right-0 flex items-center pr-4", M === y.value ? "text-white" : "text-indigo-600"])
            }, [...L[3] || (L[3] = [
              s("svg", {
                class: "h-5 w-5",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", {
                  "fill-rule": "evenodd",
                  d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ])], 2)) : w("", !0)
          ], 42, Qc))), 256))
        ], 40, Kc)) : !e.multiple && e.modelValue ? (o(), u("div", {
          key: 1,
          onKeydown: F,
          class: "h-8 -mt-8 ml-3 pt-0.5 pointer-events-none"
        }, [
          typeof e.modelValue == "string" ? Q(A.$slots, "item", Zl(Gl({ key: e.modelValue, value: e.modelValue })), void 0, void 0, 0) : Q(A.$slots, "item", Zl(Gl(e.modelValue)), void 0, void 0, 1)
        ], 32)) : w("", !0),
        v.value ? (o(), u("div", Jc, [...L[4] || (L[4] = [
          s("svg", {
            class: "h-5 w-5 text-red-500",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
              "clip-rule": "evenodd"
            })
          ], -1)
        ])])) : w("", !0)
      ]),
      v.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(v.value), 9, Zc)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, Gc)) : w("", !0)
    ], 8, Hc));
  }
}), Xc = ["id", "name", "value"], Yc = { class: "block truncate" }, _c = /* @__PURE__ */ pe({
  __name: "Combobox",
  props: {
    id: {},
    modelValue: {},
    multiple: { type: Boolean },
    options: {},
    values: {},
    entries: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e;
    t({
      toggle(y) {
        r.value?.toggle(y);
      }
    });
    const a = l;
    function d(y) {
      a("update:modelValue", y);
    }
    const i = f(() => n.multiple != null ? n.multiple : Array.isArray(n.modelValue)), r = O();
    function c(y, p) {
      return !p || y.value.toLowerCase().includes(p.toLowerCase());
    }
    const v = f(() => n.entries || (n.values ? n.values.map((y) => ({ key: y, value: y })) : n.options ? Object.keys(n.options).map((y) => ({ key: y, value: n.options[y] })) : [])), m = O(i.value ? [] : null);
    function $() {
      let y = n.modelValue && typeof n.modelValue == "object" && !Array.isArray(n.modelValue) ? n.modelValue.key : n.modelValue;
      y == null || y === "" ? m.value = i.value ? [] : null : typeof y == "string" ? m.value = v.value.find((p) => p.key === y) || null : Array.isArray(y) && (m.value = v.value.filter((p) => y.includes(p.key)));
    }
    Qe($);
    const g = f(() => m.value == null ? "" : Array.isArray(m.value) ? m.value.map((y) => encodeURIComponent(y.key)).join(",") : m.value.key);
    return (y, p) => {
      const k = E("Autocomplete");
      return o(), u(ge, null, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: g.value
        }, null, 8, Xc),
        he(k, Se({
          ref_key: "input",
          ref: r,
          id: e.id,
          options: v.value,
          match: c,
          multiple: i.value
        }, y.$attrs, {
          modelValue: m.value,
          "onUpdate:modelValue": [
            p[0] || (p[0] = (x) => m.value = x),
            d
          ]
        }), {
          item: we(({ key: x, value: C }) => [
            s("span", Yc, S(C), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), e0 = /* @__PURE__ */ pe({
  __name: "DynamicInput",
  props: {
    input: {},
    modelValue: {},
    api: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = f(() => l.input.type || "text"), d = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), i = f(() => bt(l.input, d)), r = O(a.value === "file" ? null : l.modelValue[l.input.id]);
    ot(r, () => {
      l.modelValue[l.input.id] = r.value, n("update:modelValue", l.modelValue);
    });
    const c = f(() => {
      const v = l.modelValue[l.input.id];
      if (l.input.type !== "file" || !v) return [];
      if (typeof v == "string") return [{ filePath: v, fileName: Ut(v, "/") }];
      if (!Array.isArray(v) && typeof v == "object") return v;
      if (Array.isArray(v)) {
        const m = [];
        return v.forEach(($) => {
          typeof $ == "string" ? m.push({ filePath: $, fileName: Ut($, "/") }) : typeof $ == "object" && m.push($);
        }), m;
      }
    });
    return (v, m) => {
      const $ = E("SelectInput"), g = E("CheckboxInput"), y = E("TagInput"), p = E("Combobox"), k = E("FileInput"), x = E("TextareaInput"), C = E("MarkdownInput"), q = E("TextInput");
      return ne(_).component(a.value) ? (o(), Z(ea(ne(_).component(a.value)), Se({
        key: 0,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[0] || (m[0] = (H) => r.value = H),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "select" ? (o(), Z($, Se({
        key: 1,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[1] || (m[1] = (H) => r.value = H),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : a.value == "checkbox" ? (o(), Z(g, Se({
        key: 2,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[2] || (m[2] = (H) => r.value = H),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "tag" ? (o(), Z(y, Se({
        key: 3,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[3] || (m[3] = (H) => r.value = H),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label,
        allowableValues: e.input.allowableValues,
        string: e.input.prop?.type == "String"
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : a.value == "combobox" ? (o(), Z(p, Se({
        key: 4,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[4] || (m[4] = (H) => r.value = H),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : a.value == "file" ? (o(), Z(k, Se({
        key: 5,
        id: e.input.id,
        status: e.api?.error,
        modelValue: r.value,
        "onUpdate:modelValue": m[5] || (m[5] = (H) => r.value = H),
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label,
        files: c.value
      }, i.value), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : a.value == "textarea" ? (o(), Z(x, Se({
        key: 6,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[6] || (m[6] = (H) => r.value = H),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "MarkdownInput" ? (o(), Z(C, Se({
        key: 7,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[7] || (m[7] = (H) => r.value = H),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (o(), Z(q, Se({
        key: 8,
        type: a.value,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[8] || (m[8] = (H) => r.value = H),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), t0 = { class: "lookup-field" }, l0 = ["name", "value"], n0 = {
  key: 0,
  class: "flex justify-between"
}, s0 = ["for"], a0 = {
  key: 0,
  class: "flex items-center"
}, o0 = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, r0 = {
  key: 1,
  class: "mt-1 relative"
}, i0 = { class: "w-full inline-flex truncate" }, u0 = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, d0 = ["id"], c0 = ["id"], f0 = /* @__PURE__ */ pe({
  __name: "LookupInput",
  props: {
    id: {},
    status: {},
    input: {},
    metadataType: {},
    modelValue: {},
    label: {},
    labelClass: {},
    help: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { config: l } = $t(), { metadataApi: n } = gt(), a = e, d = t, i = f(() => a.id || a.input.id), r = f(() => a.label ?? Oe(pt(i.value)));
    let c = Ne("ApiState", void 0);
    const v = Ne("client"), m = f(() => xt.call({ responseStatus: a.status ?? c?.error.value }, i.value)), $ = O(""), g = O(""), y = f(() => ue(a.modelValue, i.value)), p = f(() => at(a.metadataType).find((X) => X.name.toLowerCase() == i.value.toLowerCase())), k = f(() => lt(p.value?.ref?.model)?.icon || l.value.tableIcon);
    function x(X) {
      return X ? a.input.options ? Object.assign({}, X, cn(a.input.options, {
        input: a.input,
        $typeFields: at(a.metadataType).map((J) => J.name),
        ..._.config.scopeWhitelist
      })) : X : null;
    }
    const C = f(() => x(p.value?.ref ?? (a.input.type == "lookup" ? {
      model: a.metadataType.name,
      refId: ml(a.metadataType)?.name ?? "id",
      refLabel: a.metadataType.properties?.find((X) => X.type == "String" && !X.isPrimaryKey)?.name
    } : null)));
    let q;
    function H(X) {
      if (X) {
        if (q == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        q.openModal({ name: "ModalLookup", ref: X }, (J) => {
          if (console.debug("openModal", $.value, " -> ", J, _e.setRefValue(X, J), X), J) {
            const F = ue(J, X.refId);
            $.value = _e.setRefValue(X, J) || F;
            const T = ne(a.modelValue);
            T[i.value] = F, d("update:modelValue", T);
          }
        });
      }
    }
    function P() {
      a.modelValue[i.value] = null, $.value = "";
    }
    return Qe(async () => {
      q = Ne("ModalProvider", void 0);
      const X = a.modelValue;
      a.modelValue[i.value] || (a.modelValue[i.value] = null);
      const J = p.value, F = C.value;
      if (!J || !F) {
        console.warn(`No RefInfo for property '${i.value}'`);
        return;
      }
      $.value = "";
      let T = F.selfId == null ? ue(X, J.name) : ue(X, F.selfId);
      if (Ml(T) && (T = ue(X, F.refId)), T == null)
        return;
      const re = n.value?.operations.find((z) => z.dataModel?.name == F.model);
      if (console.debug("LookupInput queryOp", re), re != null) {
        const z = ue(X, J.name);
        if (Ml(z)) return;
        if ($.value = `${z}`, g.value = J.name, F.refLabel != null) {
          const G = at(a.metadataType).filter((U) => U.type == F.model);
          G.length || console.warn(`Could not find ${F.model} Property on ${a.metadataType.name}`);
          const ee = G.map((U) => ue(X, U.name)).filter((U) => !!U), j = ee.length <= 1 ? ee[0] : ee.find((U) => U[F.refId ?? "id"] == T);
          if (j != null) {
            let U = ue(j, F.refLabel);
            U && ($.value = `${U}`, _e.setValue(F.model, T, F.refLabel, U));
          } else {
            const U = J.attributes?.some((L) => L.name == "Computed") == !0;
            let A = await _e.getOrFetchValue(v, n.value, F.model, F.refId, F.refLabel, U, T);
            $.value = A || `${F.model}: ${$.value}`;
          }
        }
      }
    }), (X, J) => {
      const F = E("Icon");
      return o(), u("div", t0, [
        s("input", {
          type: "hidden",
          name: i.value,
          value: y.value
        }, null, 8, l0),
        r.value ? (o(), u("div", n0, [
          s("label", {
            for: i.value,
            class: h(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, S(r.value), 11, s0),
          y.value ? (o(), u("div", a0, [
            s("span", o0, S(y.value), 1),
            s("button", {
              onClick: P,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, [...J[1] || (J[1] = [
              s("span", { class: "sr-only" }, "Clear", -1),
              s("svg", {
                class: "h-4 w-4",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ])])
          ])) : w("", !0)
        ])) : w("", !0),
        C.value ? (o(), u("div", r0, [
          s("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: J[0] || (J[0] = (T) => H(C.value)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            s("span", i0, [
              s("span", u0, [
                he(F, {
                  class: "mr-1 w-5 h-5",
                  image: k.value
                }, null, 8, ["image"]),
                s("span", null, S($.value), 1)
              ])
            ]),
            J[2] || (J[2] = s("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
              s("svg", {
                class: "h-5 w-5 text-gray-400 dark:text-gray-500",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", {
                  "fill-rule": "evenodd",
                  d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                  "clip-rule": "evenodd"
                })
              ])
            ], -1))
          ])
        ])) : w("", !0),
        m.value ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${i.value}-error`
        }, S(m.value), 9, d0)) : e.help ? (o(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${i.value}-description`
        }, S(e.help), 9, c0)) : w("", !0)
      ]);
    };
  }
}), m0 = /* @__PURE__ */ pe({
  __name: "AutoFormFields",
  props: {
    modelValue: {},
    type: {},
    metaType: {},
    api: {},
    formLayout: {},
    configureField: {},
    configureFormLayout: {},
    hideSummary: { type: Boolean },
    flexClass: { default: "flex flex-1 flex-col justify-between" },
    divideClass: { default: "divide-y divide-gray-200 px-4 sm:px-6" },
    spaceClass: { default: "space-y-6 pt-6 pb-5" },
    fieldsetClass: { default: "grid grid-cols-12 gap-6" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l;
    t({ forceUpdate: d, props: n, updateValue: r });
    function d() {
      je()?.proxy?.$forceUpdate();
    }
    function i(H, P) {
      r(H.id, ue(P, H.id));
    }
    function r(H, P) {
      n.modelValue[H] = P, a("update:modelValue", n.modelValue), d();
    }
    const { metadataApi: c, apiOf: v, typeOf: m, typeOfRef: $, createFormLayout: g, Crud: y } = gt(), p = f(() => n.type || Zt(n.modelValue)), k = f(() => n.metaType ?? m(p.value)), x = f(() => $(c.value?.operations.find((H) => H.request.name == p.value)?.dataModel) || k.value);
    function C() {
      const H = k.value;
      if (!H) {
        if (n.formLayout) {
          const oe = n.formLayout.map((re) => {
            const z = { name: re.id, type: or(re.type) }, G = Object.assign({ prop: z }, re);
            return n.configureField && n.configureField(G), G;
          });
          return n.configureFormLayout && n.configureFormLayout(oe), oe;
        }
        throw new Error(`MetadataType for ${p.value} not found`);
      }
      const P = at(H), X = x.value, J = n.formLayout ? Array.from(n.formLayout) : g(H), F = [], T = v(H.name);
      return J.forEach((oe) => {
        const re = P.find((ee) => ee.name == oe.name);
        if (oe.ignore) return;
        const z = X?.properties?.find((ee) => ee.name.toLowerCase() == oe.name?.toLowerCase()) ?? re, G = Object.assign({ prop: z, op: T }, oe);
        n.configureField && n.configureField(G), F.push(G);
      }), n.configureFormLayout && n.configureFormLayout(F), F;
    }
    const q = () => C().filter((H) => H.type != "hidden").map((H) => H.id);
    return (H, P) => {
      const X = E("ErrorSummary"), J = E("LookupInput"), F = E("DynamicInput");
      return o(), u(ge, null, [
        e.hideSummary ? w("", !0) : (o(), Z(X, {
          key: 0,
          status: e.api?.error,
          except: q()
        }, null, 8, ["status", "except"])),
        s("div", {
          class: h(e.flexClass)
        }, [
          s("div", {
            class: h(e.divideClass)
          }, [
            s("div", {
              class: h(e.spaceClass)
            }, [
              s("fieldset", {
                class: h(e.fieldsetClass)
              }, [
                (o(!0), u(ge, null, be(C(), (T) => (o(), u("div", {
                  key: T.id,
                  class: h([
                    "w-full",
                    T.css?.field ?? (T.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (T.type == "checkbox" ? " flex items-center" : "")),
                    T.type == "hidden" ? "hidden" : ""
                  ])
                }, [
                  T.type === "lookup" || T.prop?.ref != null && T.type != "file" && !T.prop.isPrimaryKey ? (o(), Z(J, {
                    key: 0,
                    metadataType: x.value,
                    input: T,
                    modelValue: e.modelValue,
                    "onUpdate:modelValue": (oe) => i(T, oe),
                    status: e.api?.error
                  }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (o(), Z(F, {
                    key: 1,
                    input: T,
                    modelValue: e.modelValue,
                    "onUpdate:modelValue": P[0] || (P[0] = (oe) => H.$emit("update:modelValue", oe)),
                    api: e.api
                  }, null, 8, ["input", "modelValue", "api"]))
                ], 2))), 128))
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 64);
    };
  }
}), v0 = { key: 0 }, p0 = { class: "text-red-700" }, g0 = { key: 0 }, y0 = { key: 2 }, h0 = ["innerHTML"], b0 = { class: "flex justify-end" }, w0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, k0 = { class: "fixed inset-0 overflow-hidden" }, x0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, $0 = { class: "flex-1" }, C0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, S0 = { class: "flex items-start justify-between space-x-3" }, L0 = { class: "space-y-1" }, V0 = { key: 0 }, M0 = { key: 2 }, T0 = ["innerHTML"], A0 = { class: "flex h-7 items-center" }, O0 = { class: "flex justify-end" }, F0 = /* @__PURE__ */ pe({
  __name: "AutoForm",
  props: {
    type: {},
    modelValue: {},
    heading: {},
    subHeading: {},
    showLoading: { type: Boolean, default: !0 },
    jsconfig: { default: "eccn,edv" },
    formStyle: { default: "card" },
    metaType: {},
    configureField: {},
    configureFormLayout: {},
    panelClass: {},
    bodyClass: {},
    formClass: {},
    innerFormClass: {},
    headerClass: { default: "p-6" },
    buttonsClass: {},
    headingClass: {},
    subHeadingClass: {},
    submitLabel: { default: "Submit" },
    allowSubmit: {}
  },
  emits: ["success", "error", "done", "update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l, d = O(), i = O(1), r = O();
    function c() {
      i.value++, ee.value = G(), je()?.proxy?.$forceUpdate();
    }
    async function v(R) {
      Object.assign(ee.value, R), c(), await Ot(() => null);
    }
    Qt("ModalProvider", {
      openModal: y
    });
    const $ = O(), g = O();
    function y(R, de) {
      $.value = R, g.value = de;
    }
    async function p(R) {
      g.value && g.value(R), $.value = void 0, g.value = void 0;
    }
    const k = Il(), { getTypeName: x } = Ja(), { typeOf: C, Crud: q, createDto: H } = gt(), P = O(new tt()), X = f(() => n.panelClass || De.panelClass(n.formStyle)), J = f(() => n.formClass || n.formStyle == "card" ? "shadow sm:rounded-md" : tl.formClass), F = f(() => n.headingClass || De.headingClass(n.formStyle)), T = f(() => n.subHeadingClass || De.subHeadingClass(n.formStyle)), oe = f(() => typeof n.buttonsClass == "string" ? n.buttonsClass : De.buttonsClass), re = f(() => n.type ? x(n.type) : n.modelValue?.getTypeName ? n.modelValue.getTypeName() : null), z = f(() => n.metaType ?? C(re.value)), G = () => n.modelValue || A(), ee = O(G()), j = f(() => k.loading.value), U = f(() => n.heading != null ? n.heading : z.value?.description || Oe(re.value));
    t({ forceUpdate: c, props: n, setModel: v, formFields: d, submit: M, close: te, model: ee });
    function A() {
      return typeof n.type == "string" ? H(n.type) : n.type ? new n.type() : n.modelValue;
    }
    async function L(R) {
      if (!R || R.tagName != "FORM") {
        console.error("Not a valid form", R);
        return;
      }
      const de = A();
      let ce = qe(de?.getMethod, (se) => typeof se == "function" ? se() : null) || "POST", I = qe(de?.createResponse, (se) => typeof se == "function" ? se() : null) == null;
      const K = n.jsconfig;
      if (Qn.hasRequestBody(ce)) {
        let se = new de.constructor(), ae = new FormData(R);
        I ? P.value = await k.apiFormVoid(se, ae, { jsconfig: K }) : P.value = await k.apiForm(se, ae, { jsconfig: K });
      } else {
        let se = new de.constructor(Qo(ee.value));
        console.debug("AutoForm.submit", se), I ? P.value = await k.apiVoid(se, { jsconfig: K }) : P.value = await k.api(se, { jsconfig: K });
      }
      P.value.succeeded ? (a("success", P.value.response), te()) : a("error", P.value.error);
    }
    async function M() {
      L(r.value);
    }
    function fe(R) {
      a("update:modelValue", R);
    }
    function V() {
      a("done");
    }
    const b = O(!1), N = O(""), me = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    ot(b, () => {
      jt(me, N, b.value), b.value || setTimeout(V, 700);
    }), b.value = !0;
    function te() {
      n.formStyle == "slideOver" ? b.value = !1 : V();
    }
    const Y = (R) => {
      R.key === "Escape" && te();
    };
    return Qe(() => window.addEventListener("keydown", Y)), Jt(() => window.removeEventListener("keydown", Y)), (R, de) => {
      const ce = E("AutoFormFields"), I = E("FormLoading"), K = E("PrimaryButton"), se = E("CloseButton"), ae = E("SecondaryButton"), ie = E("ModalLookup");
      return o(), u("div", null, [
        z.value ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: h(X.value)
        }, [
          s("form", {
            ref_key: "elForm",
            ref: r,
            onSubmit: de[0] || (de[0] = Re((Ae) => L(Ae.target), ["prevent"])),
            autocomplete: "off",
            class: h(e.innerFormClass)
          }, [
            s("div", {
              class: h(e.bodyClass)
            }, [
              s("div", {
                class: h(e.headerClass)
              }, [
                R.$slots.heading ? (o(), u("div", g0, [
                  Q(R.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: h(F.value)
                }, S(U.value), 3)),
                R.$slots.subheading ? (o(), u("div", y0, [
                  Q(R.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: h(T.value)
                }, S(e.subHeading), 3)) : z.value?.notes ? (o(), u("p", {
                  key: 4,
                  class: h(["notes", T.value]),
                  innerHTML: z.value?.notes
                }, null, 10, h0)) : w("", !0)
              ], 2),
              Q(R.$slots, "header", {
                instance: je()?.exposed,
                model: ee.value
              }),
              de[5] || (de[5] = s("input", {
                type: "submit",
                class: "hidden"
              }, null, -1)),
              (o(), Z(ce, {
                ref_key: "formFields",
                ref: d,
                key: i.value,
                type: e.type,
                modelValue: ee.value,
                "onUpdate:modelValue": fe,
                api: P.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
              Q(R.$slots, "footer", {
                instance: je()?.exposed,
                model: ee.value
              })
            ], 2),
            Q(R.$slots, "buttons", {}, () => [
              s("div", {
                class: h(oe.value)
              }, [
                s("div", null, [
                  Q(R.$slots, "leftbuttons", {
                    instance: je()?.exposed,
                    model: ee.value
                  })
                ]),
                s("div", null, [
                  e.showLoading && j.value ? (o(), Z(I, { key: 0 })) : w("", !0)
                ]),
                s("div", b0, [
                  de[6] || (de[6] = s("div", null, null, -1)),
                  he(K, {
                    disabled: j.value || (e.allowSubmit ? !e.allowSubmit(ee.value) : !1)
                  }, {
                    default: we(() => [
                      ye(S(e.submitLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  Q(R.$slots, "rightbuttons", {
                    instance: je()?.exposed,
                    model: ee.value
                  })
                ])
              ], 2)
            ])
          ], 34)
        ], 2)) : (o(), u("div", w0, [
          de[8] || (de[8] = s("div", { class: "fixed inset-0" }, null, -1)),
          s("div", k0, [
            s("div", {
              onMousedown: te,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: de[2] || (de[2] = Re(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: h(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", N.value])
                }, [
                  s("form", {
                    ref_key: "elForm",
                    ref: r,
                    class: h(J.value),
                    onSubmit: de[1] || (de[1] = Re((Ae) => L(Ae.target), ["prevent"]))
                  }, [
                    s("div", x0, [
                      s("div", $0, [
                        s("div", C0, [
                          s("div", S0, [
                            s("div", L0, [
                              R.$slots.heading ? (o(), u("div", V0, [
                                Q(R.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: h(F.value)
                              }, S(U.value), 3)),
                              R.$slots.subheading ? (o(), u("div", M0, [
                                Q(R.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: h(T.value)
                              }, S(e.subHeading), 3)) : z.value?.notes ? (o(), u("p", {
                                key: 4,
                                class: h(["notes", T.value]),
                                innerHTML: z.value?.notes
                              }, null, 10, T0)) : w("", !0)
                            ]),
                            s("div", A0, [
                              he(se, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: te
                              })
                            ])
                          ])
                        ]),
                        Q(R.$slots, "header", {
                          instance: je()?.exposed,
                          model: ee.value
                        }),
                        (o(), Z(ce, {
                          ref_key: "formFields",
                          ref: d,
                          key: i.value,
                          type: e.type,
                          modelValue: ee.value,
                          "onUpdate:modelValue": fe,
                          api: P.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
                        Q(R.$slots, "footer", {
                          instance: je()?.exposed,
                          model: ee.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: h(oe.value)
                    }, [
                      s("div", null, [
                        Q(R.$slots, "leftbuttons", {
                          instance: je()?.exposed,
                          model: ee.value
                        })
                      ]),
                      s("div", null, [
                        e.showLoading && j.value ? (o(), Z(I, { key: 0 })) : w("", !0)
                      ]),
                      s("div", O0, [
                        he(ae, {
                          onClick: te,
                          disabled: j.value
                        }, {
                          default: we(() => [...de[7] || (de[7] = [
                            ye("Cancel", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"]),
                        he(K, {
                          class: "ml-4",
                          disabled: j.value || (e.allowSubmit ? !e.allowSubmit(ee.value) : !1)
                        }, {
                          default: we(() => [
                            ye(S(e.submitLabel), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        Q(R.$slots, "rightbuttons", {
                          instance: je()?.exposed,
                          model: ee.value
                        })
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", v0, [
          s("p", p0, [
            de[3] || (de[3] = ye("Could not create form for unknown ", -1)),
            de[4] || (de[4] = s("b", null, "type", -1)),
            ye(" " + S(re.value), 1)
          ])
        ])),
        $.value?.name == "ModalLookup" && $.value.ref ? (o(), Z(ie, {
          key: 3,
          "ref-info": $.value.ref,
          onDone: p,
          configureField: e.configureField
        }, null, 8, ["ref-info", "configureField"])) : w("", !0)
      ]);
    };
  }
}), j0 = { key: 0 }, I0 = { class: "text-red-700" }, P0 = { key: 0 }, B0 = { key: 2 }, E0 = ["innerHTML"], D0 = { class: "flex justify-end" }, N0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, R0 = { class: "fixed inset-0 overflow-hidden" }, H0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, q0 = { class: "flex-1" }, z0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, U0 = { class: "flex items-start justify-between space-x-3" }, K0 = { class: "space-y-1" }, Q0 = { key: 0 }, J0 = { key: 2 }, Z0 = ["innerHTML"], G0 = { class: "flex h-7 items-center" }, W0 = { class: "flex justify-end" }, X0 = /* @__PURE__ */ pe({
  __name: "AutoCreateForm",
  props: {
    type: {},
    formStyle: { default: "slideOver" },
    panelClass: {},
    formClass: {},
    headingClass: {},
    subHeadingClass: {},
    buttonsClass: {},
    heading: {},
    subHeading: {},
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    showCancel: { type: Boolean, default: !0 },
    configureField: {},
    configureFormLayout: {}
  },
  emits: ["done", "save", "error"],
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l, d = O(), i = O(1);
    function r() {
      i.value++, d.value?.forceUpdate(), je()?.proxy?.$forceUpdate();
    }
    function c(Y) {
      Object.assign(F.value, Y), r();
    }
    function v(Y) {
    }
    Qt("ModalProvider", {
      openModal: y
    });
    const $ = O(), g = O();
    function y(Y, R) {
      $.value = Y, g.value = R;
    }
    async function p(Y) {
      g.value && g.value(Y), $.value = void 0, g.value = void 0;
    }
    const { typeOf: k, typeProperties: x, Crud: C, createDto: q, formValues: H } = gt(), P = f(() => Zt(n.type)), X = f(() => k(P.value)), F = O(typeof n.type == "string" ? q(n.type) : n.type ? new n.type() : null);
    t({ forceUpdate: r, props: n, setModel: c, formFields: d, model: F });
    const T = f(() => n.panelClass || De.panelClass(n.formStyle)), oe = f(() => n.formClass || De.formClass(n.formStyle)), re = f(() => n.headingClass || De.headingClass(n.formStyle)), z = f(() => n.subHeadingClass || De.subHeadingClass(n.formStyle)), G = f(() => n.buttonsClass || De.buttonsClass), ee = f(() => C.model(X.value)), j = f(() => n.heading || k(P.value)?.description || (ee.value ? `New ${Oe(ee.value)}` : Oe(P.value))), U = O(new tt());
    let A = Il(), L = f(() => A.loading.value);
    _.interceptors.has("AutoCreateForm.new") && _.interceptors.invoke("AutoCreateForm.new", { props: n, model: F });
    async function M(Y) {
      let R = Y.target;
      if (!n.autosave) {
        a("save", new F.value.constructor(H(R, x(X.value))));
        return;
      }
      let de = qe(F.value?.getMethod, (I) => typeof I == "function" ? I() : null) || "POST", ce = qe(F.value?.createResponse, (I) => typeof I == "function" ? I() : null) == null;
      if (Qn.hasRequestBody(de)) {
        let I = new F.value.constructor(), K = new FormData(R);
        ce ? U.value = await A.apiFormVoid(I, K, { jsconfig: "eccn" }) : U.value = await A.apiForm(I, K, { jsconfig: "eccn" });
      } else {
        let I = H(R, x(X.value)), K = new F.value.constructor(I);
        ce ? U.value = await A.apiVoid(K, { jsconfig: "eccn" }) : U.value = await A.api(K, { jsconfig: "eccn" });
      }
      U.value.succeeded ? (R.reset(), a("save", U.value.response)) : a("error", U.value.error);
    }
    function fe() {
      a("done");
    }
    const V = O(!1), b = O(""), N = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    ot(V, () => {
      jt(N, b, V.value), V.value || setTimeout(fe, 700);
    }), V.value = !0;
    function me() {
      n.formStyle == "slideOver" ? V.value = !1 : fe();
    }
    const te = (Y) => {
      Y.key === "Escape" && me();
    };
    return Qe(() => window.addEventListener("keydown", te)), Jt(() => window.removeEventListener("keydown", te)), (Y, R) => {
      const de = E("AutoFormFields"), ce = E("FormLoading"), I = E("SecondaryButton"), K = E("PrimaryButton"), se = E("CloseButton"), ae = E("ModalLookup");
      return o(), u("div", null, [
        X.value ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: h(T.value)
        }, [
          s("form", {
            onSubmit: Re(M, ["prevent"])
          }, [
            s("div", {
              class: h(oe.value)
            }, [
              s("div", null, [
                Y.$slots.heading ? (o(), u("div", P0, [
                  Q(Y.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: h(re.value)
                }, S(j.value), 3)),
                Y.$slots.subheading ? (o(), u("div", B0, [
                  Q(Y.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: h(z.value)
                }, S(e.subHeading), 3)) : X.value?.notes ? (o(), u("p", {
                  key: 4,
                  class: h(["notes", z.value]),
                  innerHTML: X.value?.notes
                }, null, 10, E0)) : w("", !0)
              ]),
              Q(Y.$slots, "header", {
                formInstance: je()?.exposed,
                model: F.value
              }),
              (o(), Z(de, {
                ref_key: "formFields",
                ref: d,
                key: i.value,
                modelValue: F.value,
                "onUpdate:modelValue": v,
                api: U.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              Q(Y.$slots, "footer", {
                formInstance: je()?.exposed,
                model: F.value
              })
            ], 2),
            s("div", {
              class: h(G.value)
            }, [
              s("div", null, [
                e.showLoading && ne(L) ? (o(), Z(ce, { key: 0 })) : w("", !0)
              ]),
              s("div", D0, [
                e.showCancel ? (o(), Z(I, {
                  key: 0,
                  onClick: me,
                  disabled: ne(L)
                }, {
                  default: we(() => [...R[3] || (R[3] = [
                    ye("Cancel", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : w("", !0),
                he(K, {
                  type: "submit",
                  class: "ml-4",
                  disabled: ne(L)
                }, {
                  default: we(() => [...R[4] || (R[4] = [
                    ye("Save", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 32)
        ], 2)) : (o(), u("div", N0, [
          R[7] || (R[7] = s("div", { class: "fixed inset-0" }, null, -1)),
          s("div", R0, [
            s("div", {
              onMousedown: me,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: R[0] || (R[0] = Re(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: h(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", b.value])
                }, [
                  s("form", {
                    class: h(oe.value),
                    onSubmit: Re(M, ["prevent"])
                  }, [
                    s("div", H0, [
                      s("div", q0, [
                        s("div", z0, [
                          s("div", U0, [
                            s("div", K0, [
                              Y.$slots.heading ? (o(), u("div", Q0, [
                                Q(Y.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: h(re.value)
                              }, S(j.value), 3)),
                              Y.$slots.subheading ? (o(), u("div", J0, [
                                Q(Y.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: h(z.value)
                              }, S(e.subHeading), 3)) : X.value?.notes ? (o(), u("p", {
                                key: 4,
                                class: h(["notes", z.value]),
                                innerHTML: X.value?.notes
                              }, null, 10, Z0)) : w("", !0)
                            ]),
                            s("div", G0, [
                              he(se, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: me
                              })
                            ])
                          ])
                        ]),
                        Q(Y.$slots, "header", {
                          formInstance: je()?.exposed,
                          model: F.value
                        }),
                        (o(), Z(de, {
                          ref_key: "formFields",
                          ref: d,
                          key: i.value,
                          modelValue: F.value,
                          "onUpdate:modelValue": v,
                          api: U.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
                        Q(Y.$slots, "footer", {
                          formInstance: je()?.exposed,
                          model: F.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: h(G.value)
                    }, [
                      s("div", null, [
                        e.showLoading && ne(L) ? (o(), Z(ce, { key: 0 })) : w("", !0)
                      ]),
                      s("div", W0, [
                        e.showCancel ? (o(), Z(I, {
                          key: 0,
                          onClick: me,
                          disabled: ne(L)
                        }, {
                          default: we(() => [...R[5] || (R[5] = [
                            ye("Cancel", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])) : w("", !0),
                        he(K, {
                          type: "submit",
                          class: "ml-4",
                          disabled: ne(L)
                        }, {
                          default: we(() => [...R[6] || (R[6] = [
                            ye("Save", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", j0, [
          s("p", I0, [
            R[1] || (R[1] = ye("Could not create form for unknown ", -1)),
            R[2] || (R[2] = s("b", null, "type", -1)),
            ye(" " + S(P.value), 1)
          ])
        ])),
        $.value?.name == "ModalLookup" && $.value.ref ? (o(), Z(ae, {
          key: 3,
          "ref-info": $.value.ref,
          onDone: p,
          configureField: e.configureField
        }, null, 8, ["ref-info", "configureField"])) : w("", !0)
      ]);
    };
  }
}), Y0 = { key: 0 }, _0 = { class: "text-red-700" }, ef = { key: 0 }, tf = { key: 2 }, lf = ["innerHTML"], nf = { class: "flex justify-end" }, sf = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, af = { class: "fixed inset-0 overflow-hidden" }, of = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, rf = { class: "flex-1" }, uf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, df = { class: "flex items-start justify-between space-x-3" }, cf = { class: "space-y-1" }, ff = { key: 0 }, mf = { key: 2 }, vf = ["innerHTML"], pf = { class: "flex h-7 items-center" }, gf = { class: "flex justify-end" }, yf = /* @__PURE__ */ pe({
  __name: "AutoEditForm",
  props: {
    modelValue: {},
    deleteType: {},
    type: {},
    formStyle: { default: "slideOver" },
    panelClass: {},
    formClass: {},
    headingClass: {},
    subHeadingClass: {},
    buttonsClass: {},
    heading: {},
    subHeading: {},
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    showCancel: { type: Boolean },
    configureField: {},
    configureFormLayout: {}
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l, d = O(), i = O(1);
    function r() {
      i.value++, re.value = oe(), je()?.proxy?.$forceUpdate();
    }
    function c(ae) {
      Object.assign(re.value, ae);
    }
    function v(ae) {
    }
    Qt("ModalProvider", {
      openModal: y
    });
    const $ = O(), g = O();
    function y(ae, ie) {
      $.value = ae, g.value = ie;
    }
    async function p(ae) {
      g.value && g.value(ae), $.value = void 0, g.value = void 0;
    }
    const { typeOf: k, apiOf: x, typeProperties: C, createFormLayout: q, getPrimaryKey: H, Crud: P, createDto: X, formValues: J } = gt(), F = f(() => Zt(n.type)), T = f(() => k(F.value)), oe = () => typeof n.type == "string" ? X(n.type, kl(n.modelValue)) : n.type ? new n.type(kl(n.modelValue)) : null, re = O(oe());
    t({ forceUpdate: r, props: n, setModel: c, formFields: d, model: re });
    const z = f(() => n.panelClass || De.panelClass(n.formStyle)), G = f(() => n.formClass || De.formClass(n.formStyle)), ee = f(() => n.headingClass || De.headingClass(n.formStyle)), j = f(() => n.subHeadingClass || De.subHeadingClass(n.formStyle)), U = f(() => n.buttonsClass || De.buttonsClass), A = f(() => P.model(T.value)), L = f(() => n.heading || k(F.value)?.description || (A.value ? `Update ${Oe(A.value)}` : Oe(F.value))), M = O(new tt());
    let fe = Object.assign({}, kl(n.modelValue));
    _.interceptors.has("AutoEditForm.new") && _.interceptors.invoke("AutoEditForm.new", { props: n, model: re, origModel: fe });
    let V = Il(), b = f(() => V.loading.value);
    const N = () => qe(k(P.model(T.value)), (ae) => H(ae));
    function me(ae) {
      const { op: ie, prop: Ae } = ae;
      ie && (P.isPatch(ie) || P.isUpdate(ie)) && (ae.disabled = Ae?.isPrimaryKey), n.configureField && n.configureField(ae);
    }
    async function te(ae) {
      let ie = ae.target;
      if (!n.autosave) {
        a("save", new re.value.constructor(J(ie, C(T.value))));
        return;
      }
      let Ae = qe(re.value?.getMethod, (Le) => typeof Le == "function" ? Le() : null) || "POST", Ee = qe(re.value?.createResponse, (Le) => typeof Le == "function" ? Le() : null) == null, $e = N();
      if (Qn.hasRequestBody(Ae)) {
        let Le = new re.value.constructor(), Me = ue(n.modelValue, $e.name), Je = new FormData(ie);
        $e && !Array.from(Je.keys()).some((Ze) => Ze.toLowerCase() == $e.name.toLowerCase()) && Je.append($e.name, Me);
        let ut = [];
        const Pt = F.value && x(F.value);
        if (Pt && P.isPatch(Pt)) {
          let Ze = q(T.value), rt = {};
          if ($e && (rt[$e.name] = Me), Ze.forEach((ze) => {
            let nt = ze.id, ct = ue(fe, nt);
            if ($e && $e.name.toLowerCase() === nt.toLowerCase())
              return;
            let le = Je.get(nt);
            _.interceptors.has("AutoEditForm.save.formLayout") && _.interceptors.invoke("AutoEditForm.save.formLayout", { origValue: ct, formLayout: Ze, input: ze, newValue: le });
            let W = le != null, Fe = ze.type === "checkbox" ? W !== !!ct : ze.type === "file" ? W : le != ct;
            !le && !ct && (Fe = !1), Fe && (le ? rt[nt] = le : ze.type !== "file" && ut.push(nt));
          }), _.interceptors.has("AutoEditForm.save") && _.interceptors.invoke("AutoEditForm.save", { origModel: fe, formLayout: Ze, dirtyValues: rt }), Array.from(Je.keys()).filter((ze) => !rt[ze]).forEach((ze) => Je.delete(ze)), Array.from(Je.keys()).filter((ze) => ze.toLowerCase() != $e.name.toLowerCase()).length == 0 && ut.length == 0) {
            K();
            return;
          }
        }
        const Bt = ut.length > 0 ? { jsconfig: "eccn", reset: ut } : { jsconfig: "eccn" };
        Ee ? M.value = await V.apiFormVoid(Le, Je, Bt) : M.value = await V.apiForm(Le, Je, Bt);
      } else {
        let Le = J(ie, C(T.value));
        $e && !ue(Le, $e.name) && (Le[$e.name] = ue(n.modelValue, $e.name));
        let Me = new re.value.constructor(Le);
        Ee ? M.value = await V.apiVoid(Me, { jsconfig: "eccn" }) : M.value = await V.api(Me, { jsconfig: "eccn" });
      }
      M.value.succeeded ? (ie.reset(), a("save", M.value.response)) : a("error", M.value.error);
    }
    async function Y(ae) {
      let ie = N();
      const Ae = ie ? ue(n.modelValue, ie.name) : null;
      if (!Ae) {
        console.error(`Could not find Primary Key for Type ${F.value} (${A.value})`);
        return;
      }
      const Ee = { [ie.name]: Ae }, $e = typeof n.deleteType == "string" ? X(n.deleteType, Ee) : n.deleteType ? new n.deleteType(Ee) : null;
      qe($e.createResponse, (Me) => typeof Me == "function" ? Me() : null) == null ? M.value = await V.apiVoid($e) : M.value = await V.api($e), M.value.succeeded ? a("delete", M.value.response) : a("error", M.value.error);
    }
    function R() {
      a("done");
    }
    const de = O(!1), ce = O(""), I = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    ot(de, () => {
      jt(I, ce, de.value), de.value || setTimeout(R, 700);
    }), de.value = !0;
    function K() {
      n.formStyle == "slideOver" ? de.value = !1 : R();
    }
    const se = (ae) => {
      ae.key === "Escape" && K();
    };
    return Qe(() => window.addEventListener("keydown", se)), Jt(() => window.removeEventListener("keydown", se)), (ae, ie) => {
      const Ae = E("AutoFormFields"), Ee = E("ConfirmDelete"), $e = E("FormLoading"), Le = E("SecondaryButton"), Me = E("PrimaryButton"), Je = E("CloseButton"), ut = E("ModalLookup");
      return o(), u("div", null, [
        T.value ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: h(z.value)
        }, [
          s("form", {
            onSubmit: Re(te, ["prevent"])
          }, [
            s("div", {
              class: h(G.value)
            }, [
              s("div", null, [
                ae.$slots.heading ? (o(), u("div", ef, [
                  Q(ae.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: h(ee.value)
                }, S(L.value), 3)),
                ae.$slots.subheading ? (o(), u("div", tf, [
                  Q(ae.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: h(j.value)
                }, S(e.subHeading), 3)) : T.value?.notes ? (o(), u("p", {
                  key: 4,
                  class: h(["notes", j.value]),
                  innerHTML: T.value?.notes
                }, null, 10, lf)) : w("", !0)
              ]),
              Q(ae.$slots, "header", {
                formInstance: je()?.exposed,
                model: re.value
              }),
              (o(), Z(Ae, {
                ref_key: "formFields",
                ref: d,
                key: i.value,
                modelValue: re.value,
                "onUpdate:modelValue": v,
                api: M.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              Q(ae.$slots, "footer", {
                formInstance: je()?.exposed,
                model: re.value
              })
            ], 2),
            s("div", {
              class: h(U.value)
            }, [
              s("div", null, [
                e.deleteType ? (o(), Z(Ee, {
                  key: 0,
                  onDelete: Y
                })) : w("", !0)
              ]),
              s("div", null, [
                e.showLoading && ne(b) ? (o(), Z($e, { key: 0 })) : w("", !0)
              ]),
              s("div", nf, [
                e.showCancel ? (o(), Z(Le, {
                  key: 0,
                  onClick: K,
                  disabled: ne(b)
                }, {
                  default: we(() => [...ie[3] || (ie[3] = [
                    ye("Cancel", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : w("", !0),
                he(Me, {
                  type: "submit",
                  class: "ml-4",
                  disabled: ne(b)
                }, {
                  default: we(() => [...ie[4] || (ie[4] = [
                    ye("Save", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 32)
        ], 2)) : (o(), u("div", sf, [
          ie[7] || (ie[7] = s("div", { class: "fixed inset-0" }, null, -1)),
          s("div", af, [
            s("div", {
              onMousedown: K,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: ie[0] || (ie[0] = Re(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: h(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", ce.value])
                }, [
                  s("form", {
                    class: h(G.value),
                    onSubmit: Re(te, ["prevent"])
                  }, [
                    s("div", of, [
                      s("div", rf, [
                        s("div", uf, [
                          s("div", df, [
                            s("div", cf, [
                              ae.$slots.heading ? (o(), u("div", ff, [
                                Q(ae.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: h(ee.value)
                              }, S(L.value), 3)),
                              ae.$slots.subheading ? (o(), u("div", mf, [
                                Q(ae.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: h(j.value)
                              }, S(e.subHeading), 3)) : T.value?.notes ? (o(), u("p", {
                                key: 4,
                                class: h(["notes", j.value]),
                                innerHTML: T.value?.notes
                              }, null, 10, vf)) : w("", !0)
                            ]),
                            s("div", pf, [
                              he(Je, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: K
                              })
                            ])
                          ])
                        ]),
                        Q(ae.$slots, "header", {
                          formInstance: je()?.exposed,
                          model: re.value
                        }),
                        (o(), Z(Ae, {
                          ref_key: "formFields",
                          ref: d,
                          key: i.value,
                          modelValue: re.value,
                          "onUpdate:modelValue": v,
                          api: M.value,
                          configureField: me,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureFormLayout"])),
                        Q(ae.$slots, "footer", {
                          formInstance: je()?.exposed,
                          model: re.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: h(U.value)
                    }, [
                      s("div", null, [
                        e.deleteType ? (o(), Z(Ee, {
                          key: 0,
                          onDelete: Y
                        })) : w("", !0)
                      ]),
                      s("div", null, [
                        e.showLoading && ne(b) ? (o(), Z($e, { key: 0 })) : w("", !0)
                      ]),
                      s("div", gf, [
                        e.showCancel ? (o(), Z(Le, {
                          key: 0,
                          onClick: K,
                          disabled: ne(b)
                        }, {
                          default: we(() => [...ie[5] || (ie[5] = [
                            ye("Cancel", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])) : w("", !0),
                        he(Me, {
                          type: "submit",
                          class: "ml-4",
                          disabled: ne(b)
                        }, {
                          default: we(() => [...ie[6] || (ie[6] = [
                            ye("Save", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", Y0, [
          s("p", _0, [
            ie[1] || (ie[1] = ye("Could not create form for unknown ", -1)),
            ie[2] || (ie[2] = s("b", null, "type", -1)),
            ye(" " + S(F.value), 1)
          ])
        ])),
        $.value?.name == "ModalLookup" && $.value.ref ? (o(), Z(ut, {
          key: 3,
          "ref-info": $.value.ref,
          onDone: p,
          configureField: e.configureField
        }, null, 8, ["ref-info", "configureField"])) : w("", !0)
      ]);
    };
  }
}), hf = { key: 0 }, bf = { class: "text-red-700" }, wf = { key: 0 }, kf = { key: 2 }, xf = ["innerHTML"], $f = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, Cf = { class: "fixed inset-0 overflow-hidden" }, Sf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Lf = { class: "flex-1" }, Vf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Mf = { class: "flex items-start justify-between space-x-3" }, Tf = { class: "space-y-1" }, Af = { key: 0 }, Of = { key: 2 }, Ff = ["innerHTML"], jf = { class: "flex h-7 items-center" }, If = /* @__PURE__ */ pe({
  __name: "AutoViewForm",
  props: {
    model: {},
    apis: {},
    typeName: {},
    done: {},
    formStyle: { default: "slideOver" },
    panelClass: {},
    formClass: {},
    headingClass: {},
    subHeadingClass: {},
    heading: {},
    subHeading: {},
    showLoading: { type: Boolean },
    deleteType: {}
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { emit: t }) {
    const l = e, n = t, { typeOf: a, getPrimaryKey: d, Crud: i, createDto: r } = gt(), c = f(() => l.typeName ?? l.apis.dataModel.name), v = f(() => a(c.value)), m = f(() => l.panelClass || De.panelClass(l.formStyle)), $ = f(() => l.formClass || De.formClass(l.formStyle)), g = f(() => l.headingClass || De.headingClass(l.formStyle)), y = f(() => l.subHeadingClass || De.subHeadingClass(l.formStyle)), p = f(() => l.heading || a(c.value)?.description || (l.model?.id ? `${Oe(c.value)} ${l.model.id}` : "View " + Oe(c.value))), k = O(new tt());
    Object.assign({}, kl(l.model)), _.interceptors.has("AutoViewForm.new") && _.interceptors.invoke("AutoViewForm.new", { props: l });
    let x = Il(), C = f(() => x.loading.value);
    const q = () => qe(v.value, (z) => d(z)), H = f(() => v.value);
    async function P(z) {
      let G = q();
      const ee = G ? ue(l.model, G.name) : null;
      if (!ee) {
        console.error(`Could not find Primary Key for Type ${c.value} (${H.value})`);
        return;
      }
      const j = { [G.name]: ee }, U = typeof l.deleteType == "string" ? r(l.deleteType, j) : l.deleteType ? new l.deleteType(j) : null;
      qe(U.createResponse, (L) => typeof L == "function" ? L() : null) == null ? k.value = await x.apiVoid(U) : k.value = await x.api(U), k.value.succeeded ? n("delete", k.value.response) : n("error", k.value.error);
    }
    function X() {
      l.done && l.done();
    }
    const J = O(!1), F = O(""), T = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    ot(J, () => {
      jt(T, F, J.value), J.value || setTimeout(X, 700);
    }), J.value = !0;
    function oe() {
      l.formStyle == "slideOver" ? J.value = !1 : X();
    }
    const re = (z) => {
      z.key === "Escape" && oe();
    };
    return Qe(() => window.addEventListener("keydown", re)), Jt(() => window.removeEventListener("keydown", re)), (z, G) => {
      const ee = E("MarkupModel"), j = E("CloseButton"), U = E("ConfirmDelete"), A = E("FormLoading");
      return o(), u("div", null, [
        c.value ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: h(m.value)
        }, [
          s("div", {
            class: h($.value)
          }, [
            s("div", null, [
              z.$slots.heading ? (o(), u("div", wf, [
                Q(z.$slots, "heading")
              ])) : (o(), u("h3", {
                key: 1,
                class: h(g.value)
              }, S(p.value), 3)),
              z.$slots.subheading ? (o(), u("div", kf, [
                Q(z.$slots, "subheading")
              ])) : e.subHeading ? (o(), u("p", {
                key: 3,
                class: h(y.value)
              }, S(e.subHeading), 3)) : v.value?.notes ? (o(), u("p", {
                key: 4,
                class: h(["notes", y.value]),
                innerHTML: v.value?.notes
              }, null, 10, xf)) : w("", !0)
            ]),
            he(ee, { value: e.model }, null, 8, ["value"])
          ], 2)
        ], 2)) : (o(), u("div", $f, [
          G[4] || (G[4] = s("div", { class: "fixed inset-0" }, null, -1)),
          s("div", Cf, [
            s("div", {
              onMousedown: oe,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: G[0] || (G[0] = Re(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: h(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", F.value])
                }, [
                  s("div", {
                    class: h($.value)
                  }, [
                    s("div", Sf, [
                      s("div", Lf, [
                        s("div", Vf, [
                          s("div", Mf, [
                            s("div", Tf, [
                              z.$slots.heading ? (o(), u("div", Af, [
                                Q(z.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: h(g.value)
                              }, S(p.value), 3)),
                              z.$slots.subheading ? (o(), u("div", Of, [
                                Q(z.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: h(y.value)
                              }, S(e.subHeading), 3)) : v.value?.notes ? (o(), u("p", {
                                key: 4,
                                class: h(["notes", y.value]),
                                innerHTML: v.value?.notes
                              }, null, 10, Ff)) : w("", !0)
                            ]),
                            s("div", jf, [
                              he(j, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: oe
                              })
                            ])
                          ])
                        ]),
                        s("div", null, [
                          he(ee, {
                            value: e.model,
                            tableClass: "w-full border-separate border-spacing-y-1",
                            basicTrClass: "group",
                            basicThClass: "py-1 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300",
                            basicTdClass: "py-1 px-4 text-sm text-gray-900",
                            complexTitleTrClass: "group",
                            complexTitleTdClass: "py-1 px-4 font-semibold bg-indigo-600 dark:bg-indigo-700 text-white",
                            complexBodyTrClass: "group",
                            complexBodyTdClass: "py-1 px-4 bg-white dark:bg-gray-900"
                          }, null, 8, ["value"])
                        ])
                      ])
                    ]),
                    s("div", {
                      class: h(ne(De).buttonsClass)
                    }, [
                      s("div", null, [
                        e.deleteType ? (o(), Z(U, {
                          key: 0,
                          onDelete: P
                        })) : w("", !0)
                      ]),
                      s("div", null, [
                        e.showLoading && ne(C) ? (o(), Z(A, { key: 0 })) : w("", !0)
                      ]),
                      G[3] || (G[3] = s("div", { class: "flex justify-end" }, null, -1))
                    ], 2)
                  ], 2)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", hf, [
          s("p", bf, [
            G[1] || (G[1] = ye("Could not create view for unknown ", -1)),
            G[2] || (G[2] = s("b", null, "type", -1)),
            ye(" " + S(c.value), 1)
          ])
        ]))
      ]);
    };
  }
}), Pf = /* @__PURE__ */ pe({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: t }) {
    let l = O(!1);
    const n = t, a = () => {
      l.value && n("delete");
    }, d = f(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      l.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (i, r) => (o(), u(ge, null, [
      Ft(s("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": r[0] || (r[0] = (c) => Ys(l) ? l.value = c : l = c)
      }, null, 512), [
        [zn, ne(l)]
      ]),
      r[2] || (r[2] = s("label", {
        for: "confirmDelete",
        class: "ml-2 mr-2 select-none"
      }, "confirm", -1)),
      s("span", Se({
        onClick: Re(a, ["prevent"]),
        class: d.value
      }, i.$attrs), [
        Q(i.$slots, "default", {}, () => [
          r[1] || (r[1] = ye("Delete", -1))
        ])
      ], 16)
    ], 64));
  }
}), Bf = {
  class: "flex",
  title: "loading..."
}, Ef = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, Df = { class: "ml-2 mt-1 text-gray-400" }, Nf = /* @__PURE__ */ pe({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return Ne("ApiState", void 0), (t, l) => (o(), u("div", Bf, [
      e.icon ? (o(), u("svg", Ef, [...l[0] || (l[0] = [
        tn('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3)
      ])])) : w("", !0),
      s("span", Df, S(e.text), 1)
    ]));
  }
}), Rf = ["onClick"], Hf = {
  key: 3,
  class: "flex justify-between items-center"
}, qf = { class: "mr-1 select-none" }, zf = ["onClick"], Uf = /* @__PURE__ */ pe({
  inheritAttrs: !1,
  __name: "DataGrid",
  props: {
    items: { default: () => [] },
    id: { default: "DataGrid" },
    ctx: {},
    type: {},
    tableStyle: { default: "stripedRows" },
    selectedColumns: {},
    gridClass: {},
    grid2Class: {},
    grid3Class: {},
    grid4Class: {},
    tableClass: {},
    theadClass: {},
    tbodyClass: {},
    theadRowClass: {},
    theadCellClass: {},
    isSelected: {},
    headerTitle: {},
    headerTitles: {},
    visibleFrom: {},
    rowClass: {},
    rowStyle: {}
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = O(), d = O(null), i = (V) => d.value === V, r = fl(), c = Object.keys(r), v = c.map((V) => V.toLowerCase()), m = (V) => v.includes(V.toLowerCase()), $ = (V) => c.find((b) => b.toLowerCase() == V.toLowerCase() + "-header"), g = (V) => c.find((b) => b.toLowerCase() == V.toLowerCase()), y = f(() => Xl(l.items).filter((V) => m(V) || m(V + "-header"))), p = f(() => l.ctx?.dataModelName || Zt(l.type)), k = f(() => l.ctx?.dataModel || lt(p.value)), x = f(() => l.ctx?.dataModelProps || at(k.value));
    function C(V) {
      const b = l.headerTitles && ue(l.headerTitles, V) || V;
      return l.headerTitle ? l.headerTitle(b) : Cl(b);
    }
    function q(V) {
      const b = V.toLowerCase();
      return x.value.find((N) => N.name.toLowerCase() == b);
    }
    function H(V) {
      const b = q(V);
      return b?.format ? b.format : b?.type == "TimeSpan" || b?.type == "TimeOnly" ? { method: "time" } : null;
    }
    const P = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function X(V) {
      const b = l.visibleFrom && ue(l.visibleFrom, V);
      return b && qe(P[b], (N) => `hidden ${N}`);
    }
    const J = f(() => l.gridClass ?? ke.getGridClass(l.tableStyle)), F = f(() => l.grid2Class ?? ke.getGrid2Class(l.tableStyle)), T = f(() => l.grid3Class ?? ke.getGrid3Class(l.tableStyle)), oe = f(() => l.grid4Class ?? ke.getGrid4Class(l.tableStyle)), re = f(() => l.tableClass ?? ke.getTableClass(l.tableStyle)), z = f(() => l.tbodyClass ?? ke.getTbodyClass(l.tbodyClass)), G = f(() => l.theadClass ?? ke.getTheadClass(l.tableStyle)), ee = f(() => l.theadRowClass ?? ke.getTheadRowClass(l.tableStyle)), j = f(() => l.theadCellClass ?? ke.getTheadCellClass(l.tableStyle));
    function U(V, b) {
      return l.rowClass ? l.rowClass(V, b) : ke.getTableRowClass(l.tableStyle, b, !!(l.isSelected && l.isSelected(V)), l.isSelected != null);
    }
    function A(V, b) {
      return l.rowStyle ? l.rowStyle(V, b) : void 0;
    }
    const L = f(() => {
      const V = (typeof l.selectedColumns == "string" ? l.selectedColumns.split(",") : l.selectedColumns) || (y.value.length > 0 ? y.value : Xl(l.items)), b = x.value.reduce((N, me) => (N[me.name.toLowerCase()] = me.format, N), {});
      return V.filter((N) => b[N.toLowerCase()]?.method != "hidden");
    });
    function M(V, b) {
      n("headerSelected", b, V);
    }
    function fe(V, b, N) {
      n("rowSelected", N, V);
    }
    return (V, b) => {
      const N = E("CellFormat"), me = E("PreviewFormat");
      return e.items.length ? (o(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: a,
        class: h(J.value)
      }, [
        s("div", {
          class: h(F.value)
        }, [
          s("div", {
            class: h(T.value)
          }, [
            s("div", {
              class: h(oe.value)
            }, [
              s("table", {
                class: h(re.value)
              }, [
                s("thead", {
                  class: h(G.value)
                }, [
                  s("tr", {
                    class: h(ee.value)
                  }, [
                    (o(!0), u(ge, null, be(L.value, (te) => (o(), u("td", {
                      class: h([X(te), j.value, i(te) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      s("div", {
                        onClick: (Y) => M(Y, te)
                      }, [
                        ne(r)[te + "-header"] ? Q(V.$slots, te + "-header", { column: te }, void 0, void 0, 0) : $(te) ? Q(V.$slots, $(te), { column: te }, void 0, void 0, 1) : ne(r).header ? Q(V.$slots, "header", {
                          column: te,
                          label: C(te)
                        }, void 0, void 0, 2) : (o(), u("div", Hf, [
                          s("span", qf, S(C(te)), 1)
                        ]))
                      ], 8, Rf)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                s("tbody", {
                  class: h(z.value)
                }, [
                  (o(!0), u(ge, null, be(e.items, (te, Y) => (o(), u("tr", {
                    class: h(U(te, Y)),
                    style: qn(A(te, Y)),
                    onClick: (R) => fe(R, Y, te)
                  }, [
                    (o(!0), u(ge, null, be(L.value, (R) => (o(), u("td", {
                      class: h([X(R), ne(ke).tableCellClass])
                    }, [
                      ne(r)[R] ? Q(V.$slots, R, Se({ ref_for: !0 }, te), void 0, void 0, 0) : g(R) ? Q(V.$slots, g(R), Se({ ref_for: !0 }, te), void 0, void 0, 1) : q(R) ? (o(), Z(N, {
                        key: 2,
                        type: k.value,
                        propType: q(R),
                        modelValue: te
                      }, null, 8, ["type", "propType", "modelValue"])) : (o(), Z(me, {
                        key: 3,
                        value: ne(ue)(te, R),
                        format: H(R),
                        modelValue: te
                      }, null, 8, ["value", "format", "modelValue"]))
                    ], 2))), 256))
                  ], 14, zf))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : w("", !0);
    };
  }
}), Kf = pe({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: t }) {
    const { typeOf: l } = gt();
    function n(a) {
      return a?.format ? a.format : a?.type == "TimeSpan" || a?.type == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      const a = n(e.propType), d = ue(e.modelValue, e.propType.name), i = Object.assign({}, e, t), r = Nt("span", { innerHTML: Vl(d, a, i) }), c = Ml(d) && Array.isArray(d) ? Nt("span", {}, [
        Nt("span", { class: "mr-2" }, `${d.length}`),
        r
      ]) : r, v = e.propType?.ref;
      if (!v)
        return c;
      const $ = at(e.type).find((C) => C.type === v.model);
      if (!$)
        return c;
      const g = ue(e.modelValue, $.name), y = g && v.refLabel && ue(g, v.refLabel);
      if (!y)
        return c;
      const k = l(v.model)?.icon, x = k ? Nt(Wa, { image: k, class: "w-5 h-5 mr-1" }) : null;
      return Nt("span", { class: "flex", title: `${v.model} ${d}` }, [
        x,
        y
      ]);
    };
  }
}), Qf = { key: 0 }, Jf = {
  key: 0,
  class: "mr-2"
}, Zf = ["innerHTML"], Gf = ["innerHTML"], Wf = {
  inheritAttrs: !1
}, Xf = /* @__PURE__ */ pe({
  ...Wf,
  __name: "PreviewFormat",
  props: {
    value: {},
    format: {},
    includeIcon: { type: Boolean, default: !0 },
    includeCount: { type: Boolean, default: !0 },
    maxFieldLength: { default: 150 },
    maxNestedFields: { default: 2 },
    maxNestedFieldLength: { default: 30 }
  },
  setup(e) {
    const t = e, l = f(() => Array.isArray(t.value));
    return (n, a) => ne(Ml)(e.value) ? (o(), u("span", Qf, [
      e.includeCount && l.value ? (o(), u("span", Jf, S(e.value.length), 1)) : w("", !0),
      s("span", {
        innerHTML: ne(Vl)(e.value, e.format, n.$attrs)
      }, null, 8, Zf)
    ])) : (o(), u("span", {
      key: 1,
      innerHTML: ne(Vl)(e.value, e.format, n.$attrs)
    }, null, 8, Gf));
  }
}), Yf = ["innerHTML"], _f = { key: 0 }, em = { key: 2 }, tm = /* @__PURE__ */ pe({
  __name: "HtmlFormat",
  props: {
    value: {},
    depth: { default: 0 },
    fieldAttrs: {},
    classes: { type: Function, default: (e, t, l, n, a) => n },
    formatText: {}
  },
  setup(e) {
    const t = e;
    function l(v) {
      return typeof v == "string" && typeof t.formatText == "function" ? t.formatText(v) : v;
    }
    const n = f(() => Kt(t.value)), a = f(() => Array.isArray(t.value)), d = (v) => Cl(v), i = (v) => t.fieldAttrs ? t.fieldAttrs(v) : null, r = f(() => Xl(t.value)), c = (v) => v ? Object.keys(v).map((m) => ({ key: d(m), val: v[m] })) : [];
    return (v, m) => {
      const $ = E("HtmlFormat", !0);
      return o(), u("div", {
        class: h(e.depth == 0 ? "prose html-format" : "")
      }, [
        n.value ? (o(), u("div", {
          key: 0,
          innerHTML: l(ne(Vl)(e.value))
        }, null, 8, Yf)) : a.value ? (o(), u("div", {
          key: 1,
          class: h(e.classes("array", "div", e.depth, ne(ke).gridClass))
        }, [
          ne(Kt)(e.value[0]) ? (o(), u("div", _f, "[ " + S(l(e.value.join(", "))) + " ]", 1)) : (o(), u("div", {
            key: 1,
            class: h(e.classes("array", "div", e.depth, ne(ke).grid2Class))
          }, [
            s("div", {
              class: h(e.classes("array", "div", e.depth, ne(ke).grid3Class))
            }, [
              s("div", {
                class: h(e.classes("array", "div", e.depth, ne(ke).grid4Class))
              }, [
                s("table", {
                  class: h(e.classes("object", "table", e.depth, ne(ke).tableClass))
                }, [
                  s("thead", {
                    class: h(e.classes("array", "thead", e.depth, ne(ke).theadClass))
                  }, [
                    s("tr", null, [
                      (o(!0), u(ge, null, be(r.value, (g) => (o(), u("th", {
                        class: h(e.classes("array", "th", e.depth, ne(ke).theadCellClass + " whitespace-nowrap"))
                      }, [
                        m[0] || (m[0] = s("b", null, null, -1)),
                        ye(S(l(d(g))), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  s("tbody", null, [
                    (o(!0), u(ge, null, be(e.value, (g, y) => (o(), u("tr", {
                      class: h(e.classes("array", "tr", e.depth, Number(y) % 2 === 0 ? "bg-white" : "bg-gray-50", Number(y)))
                    }, [
                      (o(!0), u(ge, null, be(r.value, (p) => (o(), u("td", {
                        class: h(e.classes("array", "td", e.depth, ne(ke).tableCellClass))
                      }, [
                        he($, Se({
                          value: g[p],
                          "field-attrs": e.fieldAttrs,
                          depth: e.depth + 1,
                          classes: e.classes,
                          formatText: e.formatText
                        }, { ref_for: !0 }, i(p)), null, 16, ["value", "field-attrs", "depth", "classes", "formatText"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (o(), u("div", em, [
          s("table", {
            class: h(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (o(!0), u(ge, null, be(c(e.value), (g) => (o(), u("tr", {
              class: h(e.classes("object", "tr", e.depth, ""))
            }, [
              s("th", {
                class: h(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, S(l(g.key)), 3),
              s("td", {
                class: h(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                he($, Se({
                  value: g.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes,
                  formatText: e.formatText
                }, { ref_for: !0 }, i(g.key)), null, 16, ["value", "field-attrs", "depth", "classes", "formatText"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), lm = ["href"], nm = ["href", "title"], sm = /* @__PURE__ */ pe({
  __name: "MarkupFormat",
  props: {
    value: {},
    imageClass: { default: "w-8 h-8" }
  },
  setup(e) {
    const t = e, { getMimeType: l } = _o(), n = t.value;
    let a = typeof t.value;
    const d = a === "string" && n.length ? l(n) : null;
    if (a === "string" && n.length) {
      const i = n.startsWith("https://") || n.startsWith("http://");
      (i || n[0] === "/") && d?.startsWith("image/") ? a = "image" : i && (a = "link");
    }
    return (i, r) => {
      const c = E("Icon"), v = E("HtmlFormat");
      return ne(a) == "link" ? (o(), u("a", {
        key: 0,
        href: e.value,
        class: "text-indigo-600"
      }, S(e.value), 9, lm)) : ne(a) == "image" ? (o(), u("a", {
        key: 1,
        href: e.value,
        title: e.value,
        class: "inline-block"
      }, [
        he(c, {
          src: e.value,
          class: h(e.imageClass)
        }, null, 8, ["src", "class"])
      ], 8, nm)) : (o(), Z(v, {
        key: 2,
        value: e.value
      }, null, 8, ["value"]));
    };
  }
}), am = /* @__PURE__ */ pe({
  __name: "MarkupModel",
  props: {
    value: {},
    imageClass: {},
    tableClass: {},
    basicTrClass: {},
    basicThClass: {},
    basicTdClass: {},
    complexTitleTrClass: {},
    complexTitleTdClass: {},
    complexBodyTrClass: {},
    complexBodyTdClass: {}
  },
  setup(e) {
    const t = e, l = Object.keys(t.value), n = {}, a = {};
    return l.forEach((d) => {
      const i = t.value[d], r = typeof i;
      i == null || r === "function" || r === "symbol" ? n[d] = `(${i == null ? "null" : "t"})` : r === "object" ? a[d] = i : n[d] = i;
    }), (d, i) => {
      const r = E("MarkupFormat");
      return o(), u("table", {
        class: h(t.tableClass ?? "my-2 w-full")
      }, [
        s("tbody", null, [
          (o(), u(ge, null, be(n, (c, v) => s("tr", {
            class: h(t.basicTrClass ?? "leading-7")
          }, [
            s("th", {
              class: h(t.basicThClass ?? "px-2 text-left align-top")
            }, S(ne(Oe)(v)), 3),
            s("td", {
              class: h(t.basicTdClass ?? "align-top")
            }, [
              he(r, { value: c }, null, 8, ["value"])
            ], 2)
          ], 2)), 64)),
          (o(), u(ge, null, be(a, (c, v) => (o(), u(ge, null, [
            s("tr", {
              class: h(t.complexTitleTrClass ?? "my-2 leading-7")
            }, [
              s("th", {
                colspan: "2",
                class: h(t.complexTitleTdClass ?? "px-2 bg-indigo-700 text-white")
              }, S(ne(Oe)(v)), 3)
            ], 2),
            s("tr", {
              class: h(t.complexBodyTrClass ?? "leading-7")
            }, [
              s("td", {
                colspan: "2",
                class: h(t.complexBodyTdClass ?? "px-2 align-top")
              }, [
                he(r, { value: c }, null, 8, ["value"])
              ], 2)
            ], 2)
          ], 64))), 64))
        ])
      ], 2);
    };
  }
}), om = { class: "absolute top-0 right-0 pt-4 pr-4" }, rm = ["title"], im = /* @__PURE__ */ pe({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" },
    title: { default: "Close" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    return (l, n) => (o(), u("div", om, [
      s("button", {
        type: "button",
        onClick: n[0] || (n[0] = (a) => l.$emit("close")),
        title: e.title,
        class: h([e.buttonClass, "cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, [...n[1] || (n[1] = [
        s("span", { class: "sr-only" }, "Close", -1),
        s("svg", {
          class: "h-6 w-6",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          "aria-hidden": "true"
        }, [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M6 18L18 6M6 6l12 12"
          })
        ], -1)
      ])], 10, rm)
    ]));
  }
}), um = ["id", "aria-labelledby"], dm = { class: "fixed inset-0 overflow-hidden" }, cm = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, fm = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, mm = { class: "flex-1" }, vm = { class: "relative bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, pm = { class: "flex items-start justify-between space-x-3" }, gm = { class: "space-y-1" }, ym = { key: 0 }, hm = ["id"], bm = {
  key: 2,
  class: "text-sm text-gray-500"
}, wm = { class: "flex h-7 items-center" }, km = {
  key: 0,
  class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"
}, xm = /* @__PURE__ */ pe({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: {},
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = t, n = O(!1), a = O(""), d = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    ot(n, () => {
      jt(d, a, n.value), n.value || setTimeout(() => l("done"), 700);
    }), n.value = !0;
    const i = () => n.value = !1, r = (c) => {
      c.key === "Escape" && i();
    };
    return Qe(() => window.addEventListener("keydown", r)), Jt(() => window.removeEventListener("keydown", r)), (c, v) => {
      const m = E("CloseButton");
      return o(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        v[1] || (v[1] = s("div", { class: "fixed inset-0" }, null, -1)),
        s("div", dm, [
          s("div", {
            onMousedown: i,
            class: "absolute inset-0 overflow-hidden"
          }, [
            s("div", {
              onMousedown: v[0] || (v[0] = Re(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              s("div", {
                class: h(["panel pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", a.value])
              }, [
                s("div", cm, [
                  s("div", fm, [
                    s("div", mm, [
                      s("div", vm, [
                        s("div", pm, [
                          s("div", gm, [
                            c.$slots.title ? (o(), u("div", ym, [
                              Q(c.$slots, "title")
                            ])) : w("", !0),
                            e.title ? (o(), u("h2", {
                              key: 1,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, S(e.title), 9, hm)) : w("", !0),
                            c.$slots.subtitle ? (o(), u("p", bm, [
                              Q(c.$slots, "subtitle")
                            ])) : w("", !0)
                          ]),
                          s("div", wm, [
                            he(m, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: i
                            })
                          ])
                        ])
                      ]),
                      s("div", {
                        class: h(e.contentClass)
                      }, [
                        Q(c.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  c.$slots.footer ? (o(), u("div", km, [
                    Q(c.$slots, "footer")
                  ])) : w("", !0)
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, um);
    };
  }
}), $m = ["id", "data-transition-for", "aria-labelledby"], Cm = { class: "fixed inset-0 z-10 overflow-y-auto" }, Sm = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Lm = {
  key: 1,
  class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10"
}, Vm = /* @__PURE__ */ pe({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: Pn.modalClass },
    sizeClass: { default: Pn.sizeClass },
    closeButtonClass: { default: "bg-white dark:bg-black cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black" },
    configureField: {}
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = fl(), n = t, a = O(!1), d = O(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = O(""), c = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    ot(a, () => {
      jt(i, d, a.value), jt(c, r, a.value), a.value || setTimeout(() => n("done"), 200);
    }), a.value = !0;
    const v = () => a.value = !1;
    Qt("ModalProvider", {
      openModal: y
    });
    const $ = O(), g = O();
    function y(x, C) {
      $.value = x, g.value = C;
    }
    async function p(x) {
      g.value && g.value(x), $.value = void 0, g.value = void 0;
    }
    const k = (x) => {
      x.key === "Escape" && v();
    };
    return Qe(() => window.addEventListener("keydown", k)), Jt(() => window.removeEventListener("keydown", k)), (x, C) => {
      const q = E("ModalLookup");
      return o(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: v,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        s("div", {
          class: h(["fixed inset-0 bg-gray-500/75 transition-opacity", d.value])
        }, null, 2),
        s("div", Cm, [
          s("div", Sm, [
            s("div", {
              class: h([e.modalClass, e.sizeClass, r.value]),
              onMousedown: C[0] || (C[0] = Re(() => {
              }, ["stop"]))
            }, [
              s("div", null, [
                ne(l).closebutton ? Q(x.$slots, "createform", {}, void 0, void 0, 0) : (o(), u("div", Lm, [
                  s("button", {
                    type: "button",
                    onClick: v,
                    class: h(e.closeButtonClass),
                    title: "Close"
                  }, [...C[1] || (C[1] = [
                    s("span", { class: "sr-only" }, "Close", -1),
                    s("svg", {
                      class: "h-6 w-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "aria-hidden": "true"
                    }, [
                      s("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M6 18L18 6M6 6l12 12"
                      })
                    ], -1)
                  ])], 2)
                ])),
                Q(x.$slots, "default")
              ])
            ], 34),
            Q(x.$slots, "bottom")
          ])
        ]),
        $.value?.name == "ModalLookup" && $.value.ref ? (o(), Z(q, {
          key: 0,
          "ref-info": $.value.ref,
          onDone: p,
          configureField: e.configureField
        }, null, 8, ["ref-info", "configureField"])) : w("", !0)
      ], 40, $m);
    };
  }
}), Mm = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, Tm = { class: "mt-3 pl-5 flex flex-wrap items-center" }, Am = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, Om = { class: "hidden md:inline" }, Fm = { class: "flex pb-1 sm:pb-0" }, jm = ["title"], Im = ["disabled"], Pm = ["disabled"], Bm = ["disabled"], Em = ["disabled"], Dm = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, Nm = { class: "px-4 text-lg text-black dark:text-white" }, Rm = { key: 0 }, Hm = { key: 1 }, qm = { key: 2 }, zm = {
  key: 1,
  class: "pl-2 mt-1"
}, Um = { class: "whitespace-nowrap" }, Km = {
  key: 2,
  class: "pl-2"
}, Qm = { class: "flex pb-1 sm:pb-0" }, Jm = {
  key: 0,
  class: "pl-2"
}, Zm = { class: "mr-1" }, Gm = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Wm = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Xm = { key: 1 }, Ym = { key: 4 }, _m = { key: 0 }, ev = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, tv = { class: "mr-1 select-none" }, lv = {
  key: 1,
  class: "flex justify-between items-center"
}, nv = { class: "mr-1 select-none" }, Ns = 25, sv = /* @__PURE__ */ pe({
  __name: "ModalLookup",
  props: {
    id: { default: "ModalLookup" },
    refInfo: {},
    skip: { default: 0 },
    prefs: {},
    selectedColumns: {},
    allowFiltering: { type: [Boolean, null], default: !0 },
    showPreferences: { type: [Boolean, null], default: !0 },
    showPagingNav: { type: [Boolean, null], default: !0 },
    showPagingInfo: { type: [Boolean, null], default: !0 },
    showResetPreferences: { type: [Boolean, null], default: !0 },
    showFiltersView: { type: [Boolean, null], default: !0 },
    toolbarButtonClass: {},
    canFilter: {},
    type: {},
    modelTitle: {},
    newButtonLabel: {},
    configureField: {}
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = fl(), { config: d } = $t(), { metadataApi: i, filterDefinitions: r } = gt(), c = Ne("client"), v = d.value.storage, m = f(() => l.toolbarButtonClass ?? ke.toolbarButtonClass), $ = f(() => r.value), g = O({ take: Ns }), y = O(new tt()), p = O(l.skip), k = O(!1), x = O(), C = (le) => typeof le == "string" ? le.split(",") : le || [];
    function q(le, W) {
      return ke.getTableRowClass("fullWidth", W, !1, !0);
    }
    function H() {
      let le = C(l.selectedColumns);
      return le.length > 0 ? le : [];
    }
    const P = f(() => lt(l.refInfo.model)), X = f(() => {
      let W = H().map((Ie) => Ie.toLowerCase());
      const Fe = at(P.value);
      return W.length > 0 ? W.map((Ie) => Fe.find((Ge) => Ge.name.toLowerCase() === Ie)).filter((Ie) => Ie != null) : Fe;
    }), J = f(() => {
      let le = X.value.map((Fe) => Fe.name), W = C(g.value.selectedColumns).map((Fe) => Fe.toLowerCase());
      return W.length > 0 ? le.filter((Fe) => W.includes(Fe.toLowerCase())) : le;
    }), F = f(() => g.value.take ?? Ns), T = f(() => (y.value.response ? ue(y.value.response, "results") : null) ?? []), oe = f(() => y.value.response?.total ?? T.value.length ?? 0), re = f(() => p.value > 0), z = f(() => p.value > 0), G = f(() => T.value.length >= F.value), ee = f(() => T.value.length >= F.value), j = O([]), U = f(() => j.value.some((le) => le.settings.filters.length > 0 || !!le.settings.sort)), A = f(() => j.value.map((le) => le.settings.filters.length).reduce((le, W) => le + W, 0)), L = f(() => ml(P.value)), M = f(() => i.value?.operations.find((le) => le.dataModel?.name == l.refInfo.model && He.isAnyQuery(le))), fe = O(), V = O(!1), b = O(), N = f(() => Zt(l.refInfo.model)), me = f(() => Tt.forType(N.value, i.value)), te = f(() => N.value || M.value?.dataModel.name), Y = f(() => l.modelTitle || te.value), R = f(() => l.newButtonLabel || `New ${Y.value}`), de = f(() => xl(me.value.Create)), ce = O(), I = O(!1);
    function K() {
      I.value = !0;
    }
    function se() {
      I.value = !1;
    }
    async function ae(le) {
      se(), n("done", le);
    }
    function ie(le) {
      ce.value && (Object.assign(ce.value?.model, le), console.log("setCreate", JSON.stringify(le, null, 2)), Ae());
    }
    function Ae() {
      ce.value?.forceUpdate(), je()?.proxy?.$forceUpdate();
    }
    const Ee = () => `${l.id}/ApiPrefs/${l.refInfo.model}`, $e = (le) => `Column/${l.id}:${l.refInfo.model}.${le}`;
    async function Le(le) {
      p.value += le, p.value < 0 && (p.value = 0);
      var W = Math.floor(oe.value / F.value) * F.value;
      p.value > W && (p.value = W), await dt();
    }
    async function Me(le, W) {
      n("done", le);
    }
    function Je() {
      n("done", null);
    }
    function ut(le, W) {
      let Fe = W.target;
      if (Fe?.tagName !== "TD") {
        let Ie = Fe?.closest("TABLE")?.getBoundingClientRect(), Ge = j.value.find((ft) => ft.name.toLowerCase() == le.toLowerCase());
        if (Ge && Ie) {
          let ft = 318, Wt = (W.target?.tagName === "DIV" ? W.target : W.target?.closest("DIV")).getBoundingClientRect(), Be = ft + 25;
          b.value = {
            column: Ge,
            topLeft: {
              x: Math.max(Math.floor(Wt.x + 25), Be),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function Pt() {
      b.value = null;
    }
    async function Bt(le) {
      let W = b.value?.column;
      W && (W.settings = le, v.setItem($e(W.name), JSON.stringify(W.settings)), await dt()), b.value = null;
    }
    async function Ze(le) {
      v.setItem($e(le.name), JSON.stringify(le.settings)), await dt();
    }
    async function rt(le) {
      V.value = !1, g.value = le, v.setItem(Ee(), JSON.stringify(le)), await dt();
    }
    async function dt() {
      await ze(nt());
    }
    async function ze(le) {
      const W = M.value;
      if (!W) {
        console.error(`No Query API was found for ${l.refInfo.model}`);
        return;
      }
      let Fe = Sl(W, le), Ie = sa((Gt) => {
        y.value.response = y.value.error = void 0, k.value = Gt;
      }), Ge = await c.api(Fe);
      Ie(), Ot(() => y.value = Ge);
      let ft = ue(Ge.response, "results") || [];
      !Ge.succeeded || ft.label == 0;
    }
    function nt() {
      let le = {
        include: "total",
        take: F.value
      }, W = C(g.value.selectedColumns || l.selectedColumns);
      if (W.length > 0) {
        let Ie = L.value;
        Ie && W.includes(Ie.name) && (W = [Ie.name, ...W]), le.fields = W.join(",");
      }
      let Fe = [];
      return j.value.forEach((Ie) => {
        Ie.settings.sort && Fe.push((Ie.settings.sort === "DESC" ? "-" : "") + Ie.name), Ie.settings.filters.forEach((Ge) => {
          let ft = Ge.key.replace("%", Ie.name);
          le[ft] = Ge.value;
        });
      }), typeof le.skip > "u" && p.value > 0 && (le.skip = p.value), Fe.length > 0 && (le.orderBy = Fe.join(",")), le;
    }
    async function ct() {
      j.value.forEach((le) => {
        le.settings = { filters: [] }, v.removeItem($e(le.name));
      }), await dt();
    }
    return Qe(async () => {
      const le = l.prefs || Yl(v.getItem(Ee()));
      le && (g.value = le), j.value = X.value.map((W) => ({
        name: W.name,
        type: W.type,
        meta: W,
        settings: Object.assign(
          {
            filters: []
          },
          Yl(v.getItem($e(W.name)))
        )
      })), isNaN(l.skip) || (p.value = l.skip), await dt();
    }), (le, W) => {
      const Fe = E("AutoCreateForm"), Ie = E("ErrorSummary"), Ge = E("Loading"), ft = E("SettingsIcons"), Gt = E("DataGrid"), Wt = E("ModalDialog");
      return o(), u(ge, null, [
        e.refInfo ? (o(), Z(Wt, {
          key: 0,
          ref_key: "modalDialog",
          ref: fe,
          id: e.id,
          onDone: Je
        }, {
          default: we(() => [
            s("div", Mm, [
              s("div", Tm, [
                s("h3", Am, [
                  W[9] || (W[9] = ye(" Select ", -1)),
                  s("span", Om, S(ne(Oe)(e.refInfo.model)), 1)
                ]),
                s("div", Fm, [
                  e.showPreferences ? (o(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: W[0] || (W[0] = (Be) => V.value = !V.value)
                  }, [...W[10] || (W[10] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("g", {
                        "stroke-width": "1.5",
                        fill: "none"
                      }, [
                        s("path", {
                          d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
                          stroke: "currentColor"
                        })
                      ])
                    ], -1)
                  ])], 8, jm)) : w("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 1,
                    type: "button",
                    class: h(["pl-2", re.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !re.value,
                    onClick: W[1] || (W[1] = (Be) => Le(-oe.value))
                  }, [...W[11] || (W[11] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])], 10, Im)) : w("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 2,
                    type: "button",
                    class: h(["pl-2", z.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !z.value,
                    onClick: W[2] || (W[2] = (Be) => Le(-F.value))
                  }, [...W[12] || (W[12] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])], 10, Pm)) : w("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 3,
                    type: "button",
                    class: h(["pl-2", G.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !G.value,
                    onClick: W[3] || (W[3] = (Be) => Le(F.value))
                  }, [...W[13] || (W[13] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])], 10, Bm)) : w("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 4,
                    type: "button",
                    class: h(["pl-2", ee.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !ee.value,
                    onClick: W[4] || (W[4] = (Be) => Le(oe.value))
                  }, [...W[14] || (W[14] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])], 10, Em)) : w("", !0)
                ]),
                e.showPagingInfo ? (o(), u("div", Dm, [
                  s("div", Nm, [
                    k.value ? (o(), u("span", Rm, "Querying...")) : w("", !0),
                    T.value.length ? (o(), u("span", Hm, [
                      W[15] || (W[15] = s("span", { class: "hidden xl:inline" }, " Showing Results ", -1)),
                      ye(" " + S(p.value + 1) + " - " + S(Math.min(p.value + T.value.length, oe.value)) + " ", 1),
                      s("span", null, " of " + S(oe.value), 1)
                    ])) : y.value.completed ? (o(), u("span", qm, "No Results")) : w("", !0)
                  ])
                ])) : w("", !0),
                me.value.Create && de.value ? (o(), u("div", zm, [
                  s("button", {
                    type: "button",
                    onClick: W[5] || (W[5] = (Be) => K()),
                    title: "modelTitle",
                    class: h(ne(ke).toolbarButtonClass)
                  }, [
                    W[16] || (W[16] = s("svg", {
                      class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                        fill: "currentColor"
                      })
                    ], -1)),
                    s("span", Um, S(R.value), 1)
                  ], 2),
                  I.value ? (o(), Z(Fe, {
                    key: 0,
                    ref_key: "createForm",
                    ref: ce,
                    type: me.value.Create.request.name,
                    configure: e.configureField,
                    onDone: se,
                    onSave: ae
                  }, {
                    header: we(() => [
                      Q(le.$slots, "formheader", {
                        form: "create",
                        formInstance: ce.value,
                        apis: me.value,
                        type: te.value,
                        updateModel: ie
                      })
                    ]),
                    footer: we(() => [
                      Q(le.$slots, "formfooter", {
                        form: "create",
                        formInstance: ce.value,
                        apis: me.value,
                        type: te.value,
                        updateModel: ie
                      })
                    ]),
                    _: 3
                  }, 8, ["type", "configure"])) : w("", !0)
                ])) : w("", !0),
                U.value && e.showResetPreferences ? (o(), u("div", Km, [
                  s("button", {
                    type: "button",
                    onClick: ct,
                    title: "Reset Preferences & Filters",
                    class: h(m.value)
                  }, [...W[17] || (W[17] = [
                    s("svg", {
                      class: "w-5 h-5",
                      xmlns: "http://www.w3.org/2000/svg",
                      "aria-hidden": "true",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        fill: "currentColor",
                        d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
                      })
                    ], -1)
                  ])], 2)
                ])) : w("", !0),
                s("div", Qm, [
                  e.showFiltersView && A.value > 0 ? (o(), u("div", Jm, [
                    s("button", {
                      type: "button",
                      onClick: W[6] || (W[6] = (Be) => x.value = x.value == "filters" ? null : "filters"),
                      class: h(m.value),
                      "aria-expanded": "false"
                    }, [
                      W[20] || (W[20] = s("svg", {
                        class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        s("path", {
                          "fill-rule": "evenodd",
                          d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)),
                      s("span", Zm, S(A.value) + " " + S(A.value == 1 ? "Filter" : "Filters"), 1),
                      x.value != "filters" ? (o(), u("svg", Gm, [...W[18] || (W[18] = [
                        s("path", {
                          "fill-rule": "evenodd",
                          d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                          "clip-rule": "evenodd"
                        }, null, -1)
                      ])])) : (o(), u("svg", Wm, [...W[19] || (W[19] = [
                        s("path", {
                          "fill-rule": "evenodd",
                          d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
                          "clip-rule": "evenodd"
                        }, null, -1)
                      ])]))
                    ], 2)
                  ])) : w("", !0)
                ])
              ]),
              x.value == "filters" ? (o(), Z(ps, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: $.value,
                columns: j.value,
                onDone: W[7] || (W[7] = (Be) => x.value = null),
                onChange: Ze
              }, null, 8, ["definitions", "columns"])) : w("", !0),
              b.value ? (o(), u("div", Xm, [
                he(vs, {
                  definitions: $.value,
                  column: b.value.column,
                  "top-left": b.value.topLeft,
                  onDone: Pt,
                  onSave: Bt
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : w("", !0),
              y.value.error ? (o(), Z(Ie, {
                key: 2,
                status: y.value.error
              }, null, 8, ["status"])) : k.value ? (o(), Z(Ge, { key: 3 })) : (o(), u("div", Ym, [
                T.value.length ? (o(), u("div", _m, [
                  he(Gt, {
                    id: e.id,
                    items: T.value,
                    type: e.refInfo.model,
                    "selected-columns": J.value,
                    onFiltersChanged: dt,
                    tableStyle: "fullWidth",
                    rowClass: q,
                    onRowSelected: Me,
                    onHeaderSelected: ut
                  }, Kn({
                    header: we(({ column: Be, label: St }) => [
                      e.allowFiltering && (!l.canFilter || l.canFilter(Be)) ? (o(), u("div", ev, [
                        s("span", tv, S(St), 1),
                        he(ft, {
                          column: j.value.find((it) => it.name.toLowerCase() === Be.toLowerCase()),
                          "is-open": b.value?.column.name === Be
                        }, null, 8, ["column", "is-open"])
                      ])) : (o(), u("div", lv, [
                        s("span", nv, S(St), 1)
                      ]))
                    ]),
                    _: 2
                  }, [
                    be(Object.keys(ne(a)), (Be) => ({
                      name: Be,
                      fn: we((St) => [
                        Q(le.$slots, Be, Zl(Gl(St)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : w("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : w("", !0),
        V.value ? (o(), Z(gs, {
          key: 1,
          columns: X.value,
          prefs: g.value,
          onDone: W[8] || (W[8] = (Be) => V.value = !1),
          onSave: rt
        }, null, 8, ["columns", "prefs"])) : w("", !0)
      ], 64);
    };
  }
}), av = { class: "sm:hidden" }, ov = ["for"], rv = ["id", "name"], iv = ["value"], uv = { class: "hidden sm:block" }, dv = { class: "border-b border-gray-200" }, cv = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, fv = ["onClick"], mv = /* @__PURE__ */ pe({
  __name: "Tabs",
  props: {
    tabs: {},
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Oe(e) },
    selected: {},
    tabClass: {},
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 },
    clearQuery: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, l = f(() => Object.keys(t.tabs)), n = (m) => t.label ? t.label(m) : Oe(m), a = f(() => t.id || "tabs"), d = f(() => t.param || "tab"), i = O();
    function r(m) {
      if (i.value = m, t.url) {
        const $ = l.value[0];
        us({ tab: m === $ ? void 0 : m }, t.clearQuery);
      }
    }
    function c(m) {
      return i.value === m;
    }
    const v = f(() => `${100 / Object.keys(t.tabs).length}%`);
    return Qe(() => {
      if (i.value = t.selected || Object.keys(t.tabs)[0], t.url) {
        const m = location.search ? location.search : location.hash.includes("?") ? "?" + zl(location.hash, "?") : "", g = Ln(m)[d.value];
        g && (i.value = g);
      }
    }), (m, $) => (o(), u("div", null, [
      s("div", av, [
        s("label", {
          for: a.value,
          class: "sr-only"
        }, "Select a tab", 8, ov),
        s("select", {
          id: a.value,
          name: a.value,
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: $[0] || ($[0] = (g) => r(g.target?.value))
        }, [
          (o(!0), u(ge, null, be(l.value, (g) => (o(), u("option", {
            key: g,
            value: g
          }, S(n(g)), 9, iv))), 128))
        ], 40, rv)
      ]),
      s("div", uv, [
        s("div", dv, [
          s("nav", cv, [
            (o(!0), u(ge, null, be(l.value, (g) => (o(), u("a", {
              href: "#",
              onClick: Re((y) => r(g), ["prevent"]),
              style: qn({ width: v.value }),
              class: h([c(g) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, S(n(g)), 15, fv))), 256))
          ])
        ])
      ]),
      s("div", {
        class: h(e.bodyClass)
      }, [
        (o(), Z(ea(e.tabs[i.value])))
      ], 2)
    ]));
  }
}), vv = /* @__PURE__ */ pe({
  __name: "DarkModeToggle",
  setup(e) {
    const t = typeof document < "u" ? document.documentElement : null, l = () => !!t?.classList.contains("dark"), n = O(localStorage.getItem("color-scheme") == "dark");
    function a() {
      l() ? t?.classList.remove("dark") : t?.classList.add("dark"), n.value = l(), t?.style.setProperty("color-scheme", n.value ? "dark" : null), localStorage.setItem("color-scheme", n.value ? "dark" : "light");
    }
    return (d, i) => (o(), u("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: i[0] || (i[0] = (r) => a())
    }, [
      s("span", {
        class: h(`${n.value ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        s("span", {
          class: h(`${n.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, [...i[1] || (i[1] = [
          s("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4 text-gray-400",
            preserveAspectRatio: "xMidYMid meet",
            viewBox: "0 0 32 32"
          }, [
            s("path", {
              fill: "currentColor",
              d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
            })
          ], -1)
        ])], 2),
        s("span", {
          class: h(`${n.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, [...i[2] || (i[2] = [
          s("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4 text-indigo-600",
            preserveAspectRatio: "xMidYMid meet",
            viewBox: "0 0 32 32"
          }, [
            s("path", {
              fill: "currentColor",
              d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
            })
          ], -1)
        ])], 2)
      ], 2)
    ]));
  }
}), pv = { key: 0 }, gv = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, yv = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, hv = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-50" }, bv = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600 dark:text-gray-300"
}, wv = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, kv = ["onClick"], xv = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, $v = { class: "bg-white dark:bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10" }, Cv = { class: "mt-8" }, Sv = {
  key: 1,
  class: "mt-6"
}, Lv = { class: "mt-6 grid grid-cols-3 gap-3" }, Vv = ["href", "title"], Mv = {
  key: 1,
  class: "h-5 w-5 text-gray-700 dark:text-gray-200",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, Tv = /* @__PURE__ */ pe({
  __name: "SignIn",
  props: {
    provider: {},
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const l = e, n = t, { getMetadata: a, createDto: d } = gt(), i = Il(), r = Ne("client"), { signIn: c } = Tl(), v = a({ assert: !0 }), m = v.plugins.auth, $ = document.baseURI, g = v.app.baseUrl, y = O(d("Authenticate")), p = O(new tt()), k = O(l.provider);
    Qe(() => {
      m?.authProviders.map((z) => z.formLayout).filter((z) => z).forEach((z) => z.forEach(
        (G) => y.value[G.id] = G.type === "checkbox" ? !1 : ""
      ));
    });
    const x = f(() => m?.authProviders.filter((z) => z.formLayout) || []), C = f(() => x.value[0] || {}), q = f(() => x.value[Math.max(x.value.length - 1, 0)] || {}), H = f(() => (k.value ? m?.authProviders.find((z) => z.name === k.value) : null) ?? C.value), P = (z) => z === !1 || z === "false";
    function X(z) {
      return z.label || z.navItem && z.navItem.label;
    }
    const J = f(() => (H.value?.formLayout || []).map((z) => Object.assign({}, z, {
      type: z.type?.toLowerCase(),
      autocomplete: z.autocomplete || (z.type?.toLowerCase() === "password" ? "current-password" : void 0) || (z.id.toLowerCase() === "username" ? "username" : void 0),
      css: Object.assign({ field: "col-span-12" }, z.css)
    }))), F = f(() => P(l.oauth) ? [] : m?.authProviders.filter((z) => z.type === "oauth") || []), T = f(() => {
      let z = Jo(
        m?.authProviders.filter((ee) => ee.formLayout && ee.formLayout.length > 0),
        (ee, j) => {
          let U = X(j) || pt(j.name);
          ee[U] = j.name === C.value.name ? "" : j.name;
        }
      );
      const G = H.value;
      return G && P(l.tabs) && (z = { [X(G) || pt(G.name)]: G }), z;
    }), oe = f(() => {
      let z = J.value.map((G) => G.id).filter((G) => G);
      return p.value.summaryMessage(z);
    });
    async function re() {
      if (y.value.provider = H.value.name, H.value.name === "authsecret" ? (r.headers.set("authsecret", y.value.authsecret), y.value = d("Authenticate")) : H.value.name === "basic" ? (r.setCredentials(y.value.UserName, y.value.Password), y.value = d("Authenticate"), y.value.UserName = null, y.value.Password = null) : (H.value.type === "Bearer" || H.value.name === "jwt") && (r.bearerToken = y.value.BearerToken, y.value = d("Authenticate")), p.value = await i.api(y.value), p.value.succeeded) {
        const z = p.value.response;
        c(z), n("login", z), p.value = new tt(), y.value = d("Authenticate");
      }
    }
    return (z, G) => {
      const ee = E("ErrorSummary"), j = E("AutoFormFields"), U = E("PrimaryButton"), A = E("Icon"), L = To("href");
      return ne(m) ? (o(), u("div", gv, [
        s("div", yv, [
          s("h2", hv, S(e.title), 1),
          Object.keys(T.value).length > 1 ? (o(), u("p", bv, [
            s("span", wv, [
              (o(!0), u(ge, null, be(T.value, (M, fe) => Ft((o(), u("a", {
                onClick: (V) => k.value = M,
                class: h([
                  M === "" || M === q.value.name ? "rounded-l-md" : M === q.value.name ? "rounded-r-md -ml-px" : "-ml-px",
                  k.value === M ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
                ])
              }, [
                ye(S(fe), 1)
              ], 10, kv)), [
                [L, { provider: M }]
              ])), 256))
            ])
          ])) : w("", !0)
        ]),
        s("div", xv, [
          oe.value ? (o(), Z(ee, {
            key: 0,
            class: "mb-3",
            errorSummary: oe.value
          }, null, 8, ["errorSummary"])) : w("", !0),
          s("div", $v, [
            J.value.length ? (o(), u("form", {
              key: 0,
              onSubmit: Re(re, ["prevent"])
            }, [
              he(j, {
                modelValue: y.value,
                formLayout: J.value,
                api: p.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              s("div", Cv, [
                he(U, { class: "w-full" }, {
                  default: we(() => [...G[0] || (G[0] = [
                    ye("Sign In", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 32)) : w("", !0),
            F.value.length ? (o(), u("div", Sv, [
              G[2] || (G[2] = tn('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300 dark:border-gray-600"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500 dark:text-gray-400"> Or continue with </span></div></div>', 1)),
              s("div", Lv, [
                (o(!0), u(ge, null, be(F.value, (M) => (o(), u("div", null, [
                  s("a", {
                    href: ne(g) + M.navItem.href + "?continue=" + ne($),
                    title: X(M),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-black text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                  }, [
                    M.icon ? (o(), Z(A, {
                      key: 0,
                      image: M.icon,
                      class: "h-5 w-5 text-gray-700 dark:text-gray-200"
                    }, null, 8, ["image"])) : (o(), u("svg", Mv, [...G[1] || (G[1] = [
                      s("path", {
                        d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
                        fill: "currentColor"
                      }, null, -1),
                      s("path", {
                        d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
                        fill: "currentColor"
                      }, null, -1)
                    ])]))
                  ], 8, Vv)
                ]))), 256))
              ])
            ])) : w("", !0)
          ])
        ])
      ])) : (o(), u("div", pv, "No Auth Plugin"));
    };
  }
}), Av = ["for"], Ov = {
  key: 1,
  class: "border border-gray-200 flex justify-between shadow-sm"
}, Fv = { class: "p-2 flex flex-wrap gap-x-4" }, jv = {
  key: 0,
  class: "p-2 flex flex-wrap gap-x-4"
}, Iv = ["href"], Pv = { class: "" }, Bv = ["name", "id", "label", "value", "rows", "disabled"], Ev = ["id"], Dv = ["id"], st = "w-5 h-5 cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400", Nv = /* @__PURE__ */ pe({
  __name: "MarkdownInput",
  props: {
    status: {},
    id: {},
    inputClass: {},
    filterClass: {},
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {},
    counter: { type: Boolean },
    rows: {},
    errorMessages: {},
    lang: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    helpUrl: { default: "https://guides.github.com/features/mastering-markdown/" },
    hide: {}
  },
  emits: ["update:modelValue", "close"],
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l;
    let d = [], i = [], r = Ne("ApiState", void 0);
    const c = f(() => xt.call({ responseStatus: n.status ?? r?.error.value }, n.id)), v = f(() => n.label ?? Oe(pt(n.id))), m = "bold,italics,link,image,blockquote,code,heading,orderedList,unorderedList,strikethrough,undo,redo,help".split(","), $ = f(() => n.hide ? qt(m, n.hide) : qt(m, []));
    function g(V) {
      return $.value[V];
    }
    const y = f(() => It([
      "shadow-sm font-mono" + vt.base.replace("rounded-md", ""),
      c.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + vt.valid,
      n.inputClass
    ], "MarkdownInput", n.filterClass)), p = O();
    t({ props: n, textarea: p, updateModelValue: k, selection: C, hasSelection: x, selectionInfo: q, insert: P, replace: H });
    function k(V) {
      a("update:modelValue", V);
    }
    function x() {
      return p.value.selectionStart !== p.value.selectionEnd;
    }
    function C() {
      const V = p.value;
      return V.value.substring(V.selectionStart, V.selectionEnd) || "";
    }
    function q() {
      const V = p.value, b = V.value, N = V.selectionStart, me = b.substring(N, V.selectionEnd) || "", te = b.substring(0, N), Y = te.lastIndexOf(`
`);
      return {
        value: b,
        sel: me,
        selPos: N,
        beforeSel: te,
        afterSel: b.substring(N),
        prevCRPos: Y,
        beforeCR: Y >= 0 ? te.substring(0, Y + 1) : "",
        afterCR: Y >= 0 ? te.substring(Y + 1) : ""
      };
    }
    function H({ value: V, selectionStart: b, selectionEnd: N }) {
      N == null && (N = b), k(V), Ot(() => {
        p.value.focus(), p.value.setSelectionRange(b, N);
      });
    }
    function P(V, b, N = "", { selectionAtEnd: me, offsetStart: te, offsetEnd: Y, filterValue: R, filterSelection: de } = {}) {
      const ce = p.value;
      let I = ce.value, K = ce.selectionEnd;
      d.push({ value: I, selectionStart: ce.selectionStart, selectionEnd: ce.selectionEnd }), i = [];
      const se = ce.selectionStart, ae = ce.selectionEnd;
      let ie = I.substring(0, se), Ae = I.substring(ae);
      const Ee = V && ie.endsWith(V) && Ae.startsWith(b);
      if (se == ae) {
        if (Ee ? (I = ie.substring(0, ie.length - V.length) + Ae.substring(b.length), K += -b.length) : (I = ie + V + N + b + Ae, K += V.length, te = 0, Y = N?.length || 0, me && (K += Y, Y = 0)), R) {
          var Le = { pos: K };
          I = R(I, Le), K = Le.pos;
        }
      } else {
        var Me = I.substring(se, ae);
        de && (Me = de(Me)), Ee ? (I = ie.substring(0, ie.length - V.length) + Me + Ae.substring(b.length), te = -Me.length - V.length, Y = Me.length) : (I = ie + V + Me + b + Ae, te ? K += (V + b).length : (K = se, te = V.length, Y = Me.length));
      }
      k(I), Ot(() => {
        ce.focus(), te = K + (te || 0), Y = (te || 0) + (Y || 0), ce.setSelectionRange(te, Y);
      });
    }
    const X = () => P("**", "**", "bold"), J = () => P("_", "_", "italics"), F = () => P("~~", "~~", "strikethrough"), T = () => P("[", "](https://)", "", { offsetStart: -9, offsetEnd: 8 }), oe = () => P(`
> `, `
`, "Blockquote", {}), re = () => P("![](", ")");
    function z(V) {
      const b = C();
      if (b && !V.shiftKey)
        P("`", "`", "code");
      else {
        const N = n.lang || "js";
        b.indexOf(`
`) === -1 ? P("\n```" + N + `
`, "\n```\n", "// code") : P("```" + N + `
`, "```\n", "");
      }
    }
    function G() {
      if (x()) {
        let { sel: V, selPos: b, beforeSel: N, afterSel: me, prevCRPos: te, beforeCR: Y, afterCR: R } = q();
        if (V.indexOf(`
`) === -1)
          P(`
 1. `, `
`);
        else if (!V.startsWith(" 1. ")) {
          let I = 1;
          P("", "", " - ", {
            selectionAtEnd: !0,
            filterSelection: (K) => " 1. " + K.replace(/\n$/, "").replace(/\n/g, (se) => `
 ${++I}. `) + `
`
          });
        } else
          P("", "", "", {
            filterValue: (I, K) => {
              if (te >= 0) {
                let se = R.replace(/^ - /, "");
                N = Y + se, K.pos -= R.length - se.length;
              }
              return N + me;
            },
            filterSelection: (I) => I.replace(/^ 1. /g, "").replace(/\n \d+. /g, `
`)
          });
      } else
        P(`
 1. `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function ee() {
      if (x()) {
        let { sel: V, selPos: b, beforeSel: N, afterSel: me, prevCRPos: te, beforeCR: Y, afterCR: R } = q();
        V.indexOf(`
`) === -1 ? P(`
 - `, `
`) : !V.startsWith(" - ") ? P("", "", " - ", {
          selectionAtEnd: !0,
          filterSelection: (I) => " - " + I.replace(/\n$/, "").replace(/\n/g, `
 - `) + `
`
        }) : P("", "", "", {
          filterValue: (I, K) => {
            if (te >= 0) {
              let se = R.replace(/^ - /, "");
              N = Y + se, K.pos -= R.length - se.length;
            }
            return N + me;
          },
          filterSelection: (I) => I.replace(/^ - /g, "").replace(/\n - /g, `
`)
        });
      } else
        P(`
 - `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function j() {
      const V = C(), b = V.indexOf(`
`) === -1;
      V ? b ? P(`
## `, `
`, "") : P("## ", "", "") : P(`
## `, `
`, "Heading", { offsetStart: -8, offsetEnd: 7 });
    }
    function U() {
      let { sel: V, selPos: b, beforeSel: N, afterSel: me, prevCRPos: te, beforeCR: Y, afterCR: R } = q();
      !V.startsWith("//") && !R.startsWith("//") ? V ? P("", "", "//", {
        selectionAtEnd: !0,
        filterSelection: (ce) => "//" + ce.replace(/\n$/, "").replace(/\n/g, `
//`) + `
`
      }) : H({
        value: Y + "//" + R + me,
        selectionStart: b + 2
      }) : P("", "", "", {
        filterValue: (ce, I) => {
          if (te >= 0) {
            let K = R.replace(/^\/\//, "");
            N = Y + K, I.pos -= R.length - K.length;
          }
          return N + me;
        },
        filterSelection: (ce) => ce.replace(/^\/\//g, "").replace(/\n\/\//g, `
`)
      });
    }
    const A = () => P(`/*
`, `*/
`, "");
    function L() {
      if (d.length === 0) return !1;
      const V = p.value, b = d.pop();
      return i.push({ value: V.value, selectionStart: V.selectionStart, selectionEnd: V.selectionEnd }), H(b), !0;
    }
    function M() {
      if (i.length === 0) return !1;
      const V = p.value, b = i.pop();
      return d.push({ value: V.value, selectionStart: V.selectionStart, selectionEnd: V.selectionEnd }), H(b), !0;
    }
    const fe = () => null;
    return Qe(() => {
      d = [], i = [];
      const V = p.value;
      V.onkeydown = (b) => {
        if (b.key === "Escape" || b.keyCode === 27) {
          a("close");
          return;
        }
        const N = String.fromCharCode(b.keyCode).toLowerCase();
        N === "	" ? (!b.shiftKey ? P("", "", "    ", {
          selectionAtEnd: !0,
          filterSelection: (te) => "    " + te.replace(/\n$/, "").replace(/\n/g, `
    `) + `
`
        }) : P("", "", "", {
          filterValue: (te, Y) => {
            let { selPos: R, beforeSel: de, afterSel: ce, prevCRPos: I, beforeCR: K, afterCR: se } = q();
            if (I >= 0) {
              let ae = se.replace(/\t/g, "    ").replace(/^ ? ? ? ?/, "");
              de = K + ae, Y.pos -= se.length - ae.length;
            }
            return de + ce;
          },
          filterSelection: (te) => te.replace(/\t/g, "    ").replace(/^ ? ? ? ?/g, "").replace(/\n    /g, `
`)
        }), b.preventDefault()) : b.ctrlKey ? N === "z" ? b.shiftKey ? M() && b.preventDefault() : L() && b.preventDefault() : N === "b" && !b.shiftKey ? (X(), b.preventDefault()) : N === "h" && !b.shiftKey ? (j(), b.preventDefault()) : N === "i" && !b.shiftKey ? (J(), b.preventDefault()) : N === "q" && !b.shiftKey ? (oe(), b.preventDefault()) : N === "k" ? b.shiftKey ? (re(), b.preventDefault()) : (T(), b.preventDefault()) : N === "," || b.key === "<" || b.key === ">" || b.keyCode === 188 ? (z(b), b.preventDefault()) : N === "/" || b.key === "/" ? (U(), b.preventDefault()) : (N === "?" || b.key === "?") && b.shiftKey && (A(), b.preventDefault()) : b.altKey && (b.key === "1" || b.key === "0" ? (G(), b.preventDefault()) : b.key === "-" ? (ee(), b.preventDefault()) : b.key === "s" && (F(), b.preventDefault()));
      };
    }), (V, b) => (o(), u("div", null, [
      Q(V.$slots, "header", Se({
        inputElement: p.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, V.$attrs)),
      v.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: h(`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(v.value), 11, Av)) : w("", !0),
      e.disabled ? w("", !0) : (o(), u("div", Ov, [
        s("div", Fv, [
          g("bold") ? (o(), u("svg", {
            key: 0,
            class: h(st),
            onClick: X,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[1] || (b[1] = [
            s("title", null, "Bold text (CTRL+B)", -1),
            s("path", {
              fill: "currentColor",
              d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
            }, null, -1)
          ])])) : w("", !0),
          g("italics") ? (o(), u("svg", {
            key: 1,
            class: h(st),
            onClick: J,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[2] || (b[2] = [
            s("title", null, "Italics (CTRL+I)", -1),
            s("path", {
              fill: "currentColor",
              d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
            }, null, -1)
          ])])) : w("", !0),
          g("link") ? (o(), u("svg", {
            key: 2,
            class: h(st),
            onClick: T,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[3] || (b[3] = [
            s("title", null, "Insert Link (CTRL+K)", -1),
            s("path", {
              fill: "currentColor",
              d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
            }, null, -1)
          ])])) : w("", !0),
          g("blockquote") ? (o(), u("svg", {
            key: 3,
            class: h(st),
            onClick: oe,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[4] || (b[4] = [
            s("title", null, "Blockquote (CTRL+Q)", -1),
            s("path", {
              fill: "currentColor",
              d: "m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
            }, null, -1)
          ])])) : w("", !0),
          g("image") ? (o(), u("svg", {
            key: 4,
            class: h(st),
            onClick: re,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[5] || (b[5] = [
            s("title", null, "Insert Image (CTRL+SHIFT+L)", -1),
            s("path", {
              fill: "currentColor",
              d: "M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992ZM20 15V5H4v14L14 9l6 6Zm0 2.828l-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
            }, null, -1)
          ])])) : w("", !0),
          g("code") ? (o(), u("svg", {
            key: 5,
            class: h(st),
            onClick: z,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[6] || (b[6] = [
            s("title", null, "Insert Code (CTRL+<)", -1),
            s("path", {
              fill: "currentColor",
              d: "m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"
            }, null, -1)
          ])])) : w("", !0),
          g("heading") ? (o(), u("svg", {
            key: 6,
            class: h(st),
            onClick: j,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[7] || (b[7] = [
            s("title", null, "H2 Heading (CTRL+H)", -1),
            s("path", {
              fill: "currentColor",
              d: "M7 20V7H2V4h13v3h-5v13H7Zm9 0v-8h-3V9h9v3h-3v8h-3Z"
            }, null, -1)
          ])])) : w("", !0),
          g("orderedList") ? (o(), u("svg", {
            key: 7,
            class: h(st),
            icon: "",
            onClick: G,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[8] || (b[8] = [
            s("title", null, "Numbered List (ALT+1)", -1),
            s("path", {
              fill: "currentColor",
              d: "M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"
            }, null, -1)
          ])])) : w("", !0),
          g("unorderedList") ? (o(), u("svg", {
            key: 8,
            class: h(st),
            onClick: ee,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[9] || (b[9] = [
            s("title", null, "Bulleted List (ALT+-)", -1),
            s("path", {
              fill: "currentColor",
              d: "M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"
            }, null, -1)
          ])])) : w("", !0),
          g("strikethrough") ? (o(), u("svg", {
            key: 9,
            class: h(st),
            onClick: F,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[10] || (b[10] = [
            s("title", null, "Strike Through (ALT+S)", -1),
            s("path", {
              fill: "currentColor",
              d: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"
            }, null, -1)
          ])])) : w("", !0),
          g("undo") ? (o(), u("svg", {
            key: 10,
            class: h(st),
            onClick: L,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[11] || (b[11] = [
            s("title", null, "Undo (CTRL+Z)", -1),
            s("path", {
              fill: "currentColor",
              d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
            }, null, -1)
          ])])) : w("", !0),
          g("redo") ? (o(), u("svg", {
            key: 11,
            class: h(st),
            onClick: M,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...b[12] || (b[12] = [
            s("title", null, "Redo (CTRL+SHIFT+Z)", -1),
            s("path", {
              fill: "currentColor",
              d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
            }, null, -1)
          ])])) : w("", !0),
          Q(V.$slots, "toolbarbuttons", {
            instance: je()?.exposed
          })
        ]),
        g("help") && e.helpUrl ? (o(), u("div", jv, [
          s("a", {
            title: "formatting help",
            target: "_blank",
            href: e.helpUrl,
            tabindex: "-1"
          }, [
            (o(), u("svg", {
              class: h(st),
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, [...b[13] || (b[13] = [
              s("path", {
                fill: "currentColor",
                d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"
              }, null, -1)
            ])]))
          ], 8, Iv)
        ])) : w("", !0)
      ])),
      s("div", Pv, [
        s("textarea", {
          ref_key: "txt",
          ref: p,
          name: e.id,
          id: e.id,
          class: h(y.value),
          label: e.label,
          value: e.modelValue,
          rows: e.rows || 6,
          disabled: e.disabled,
          onInput: b[0] || (b[0] = (N) => k(N.target?.value || "")),
          onKeydown: Un(fe, ["tab"])
        }, null, 42, Bv)
      ]),
      c.value ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(c.value), 9, Ev)) : e.help ? (o(), u("p", {
        key: 3,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, Dv)) : w("", !0),
      Q(V.$slots, "footer", Se({
        inputElement: p.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, V.$attrs))
    ]));
  }
}), Rv = {
  key: 0,
  class: "relative z-10 lg:hidden",
  role: "dialog",
  "aria-modal": "true"
}, Hv = { class: "fixed inset-0 flex" }, qv = { class: "flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-black px-6 pb-2" }, zv = { class: "hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col" }, Uv = { class: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-6" }, Kv = {
  class: /* @__PURE__ */ h(["sticky top-0 flex items-center gap-x-6 bg-white dark:bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden"])
}, Qv = /* @__PURE__ */ pe({
  __name: "SidebarLayout",
  setup(e, { expose: t }) {
    const { transition: l } = Ja(), n = O(!0), a = O(""), d = {
      entering: { cls: "transition-opacity ease-linear duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "transition-opacity ease-linear duration-300", from: "opacity-100", to: "opacity-0" }
    }, i = O(""), r = {
      entering: { cls: "transition ease-in-out duration-300 transform", from: "-translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transition ease-in-out duration-300 transform", from: "translate-x-0", to: "-translate-x-full" }
    }, c = O(""), v = {
      entering: { cls: "ease-in-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in-out duration-300", from: "opacity-100", to: "opacity-0" }
    };
    function m(y) {
      l(d, a, y), l(r, i, y), l(v, c, y), setTimeout(() => n.value = y, 300);
    }
    function $() {
      m(!0);
    }
    function g() {
      m(!1);
    }
    return t({ show: $, hide: g, toggle: m }), (y, p) => (o(), u("div", null, [
      n.value ? (o(), u("div", Rv, [
        s("div", {
          class: h(["fixed inset-0 bg-gray-900/80", a.value])
        }, null, 2),
        s("div", Hv, [
          s("div", {
            class: h(["relative mr-16 flex w-full max-w-xs flex-1", i.value])
          }, [
            s("div", {
              class: h(["absolute left-full top-0 flex w-16 justify-center pt-5", c.value])
            }, [
              s("button", {
                type: "button",
                onClick: g,
                class: "-m-2.5 p-2.5"
              }, [...p[0] || (p[0] = [
                s("span", { class: "sr-only" }, "Close sidebar", -1),
                s("svg", {
                  class: "h-6 w-6 text-white dark:text-black",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  "aria-hidden": "true"
                }, [
                  s("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])])
            ], 2),
            s("div", qv, [
              Q(y.$slots, "default")
            ])
          ], 2)
        ])
      ])) : w("", !0),
      s("div", zv, [
        s("div", Uv, [
          Q(y.$slots, "default")
        ])
      ]),
      s("div", Kv, [
        s("button", {
          type: "button",
          onClick: $,
          class: "-m-2.5 p-2.5 text-gray-700 dark:text-gray-200 lg:hidden"
        }, [...p[1] || (p[1] = [
          s("span", { class: "sr-only" }, "Open sidebar", -1),
          s("svg", {
            class: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            })
          ], -1)
        ])]),
        Q(y.$slots, "mobiletitlebar")
      ])
    ]));
  }
}), ys = (e) => e?.viewModel ?? e?.model ?? null, Vt = Ao({ models: {}, apis: {} }), Hl = /* @__PURE__ */ new Map();
function ql(e, t, l) {
  return t ? t in e ? Promise.resolve(e[t]) : (Hl.has(l) || Hl.set(l, fetch(l, { headers: { Accept: "application/json" } }).then((n) => n.ok ? n.json() : null).catch(() => null).then((n) => (e[t] = n, Hl.delete(l), n))), Hl.get(l)) : Promise.resolve(null);
}
function Ya() {
  return {
    /** the Model's schema, or undefined while it loads - starts the fetch on first ask */
    model(e) {
      return e && !(e in Vt.models) && ql(Vt.models, e, `/auto/${e}.json`), e ? Vt.models[e] : null;
    },
    /** the API's schema, or undefined while it loads */
    api(e) {
      return e && !(e in Vt.apis) && ql(Vt.apis, e, `/schema/${e}.json`), e ? Vt.apis[e] : null;
    },
    loadModel: (e) => ql(Vt.models, e, `/auto/${e}.json`),
    loadApi: (e) => ql(Vt.apis, e, `/schema/${e}.json`)
  };
}
const { formatValue: Jv, Formats: Zv } = Ra(), Gv = {
  name: "SchemaGrid",
  props: {
    items: { type: Array, default: () => [] },
    /** the Model schema whose `properties` describe the columns */
    schema: { type: Object, default: null },
    selectedColumns: { type: Array, default: null },
    headerTitles: { type: Object, default: null },
    /** present (even returning false) to make rows selectable, as DataGrid does */
    isSelected: { type: Function, default: null }
  },
  emits: ["rowSelected", "headerSelected"],
  setup(e) {
    const t = Ya(), { config: l } = $t(), n = f(() => e.schema?.properties ?? {}), a = (p) => n.value[p], d = f(() => (e.selectedColumns ?? Object.keys(n.value)).filter((p) => a(p)?.ui?.format?.method !== "hidden"));
    function i(p) {
      const k = a(p), x = k?.ui?.ref;
      if (!x) return null;
      if (k.type === "object") return { name: p, ref: x };
      const [C] = Object.entries(n.value).find(([, q]) => q.type === "object" && q.ui?.ref?.model === x.model) ?? [];
      return C ? { name: C, ref: x } : null;
    }
    function r(p) {
      if (p.refLabel) return p.refLabel;
      const k = ys(t.model(p.model))?.properties ?? {}, [x] = Object.entries(k).find(([C, q]) => q.type === "string" && C !== p.refId) ?? [];
      return x ?? null;
    }
    function c(p) {
      return p?.ui?.format ? p.ui.format : p?.format === "date-time" || p?.format === "date" ? Zv.date : null;
    }
    function v(p) {
      const k = a(p)?.ui?.ref;
      return k ? k.icon ?? l.value.tableIcon : null;
    }
    function m(p, k) {
      const x = i(k);
      if (!x) return null;
      const C = ue(p, x.name);
      if (!C || typeof C != "object") return null;
      const q = r(x.ref);
      return q ? ue(C, q) ?? null : null;
    }
    function $(p, k) {
      return Array.isArray(k) && (p?.items?.type === "object" || k.some((x) => x && typeof x == "object"));
    }
    const g = (p) => p == null ? null : typeof p == "object" ? JSON.stringify(p, null, 2) : String(p);
    function y(p, k) {
      const x = a(k), C = ue(p, k), q = m(p, k);
      if (q != null) return { text: q, icon: v(k), title: String(q) };
      if ($(x, C))
        return {
          text: `${C.length} item${C.length === 1 ? "" : "s"}`,
          title: g(C)
        };
      try {
        return { html: Jv(C, c(x), { modelValue: p }), title: g(C) };
      } catch {
        return { html: "", title: null };
      }
    }
    return {
      visibleColumns: d,
      labelOf: (p) => e.headerTitles?.[p] ?? a(p)?.title ?? p,
      // built per row so each cell is resolved once, not once per binding that reads it
      cells: f(() => e.items.map((p) => d.value.map((k) => y(p, k)))),
      rowClass: (p) => (e.isSelected ? "cursor-pointer hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (p % 2 === 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800")
    };
  }
}, Ct = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [n, a] of t)
    l[n] = a;
  return l;
}, Wv = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700" }, Xv = { class: "overflow-x-auto" }, Yv = { class: "w-full text-sm" }, _v = { class: "bg-gray-50 dark:bg-gray-800" }, ep = ["onClick"], tp = { class: "select-none" }, lp = { class: "divide-y divide-gray-200 dark:divide-gray-700" }, np = ["onClick"], sp = ["title"], ap = {
  key: 1,
  class: "min-w-0 truncate"
}, op = ["innerHTML"];
function rp(e, t, l, n, a, d) {
  const i = E("Icon");
  return o(), u("div", Wv, [
    s("div", Xv, [
      s("table", Yv, [
        s("thead", _v, [
          s("tr", null, [
            (o(!0), u(ge, null, be(e.visibleColumns, (r) => (o(), u("td", {
              key: r,
              class: "px-3 py-2 text-left font-semibold whitespace-nowrap text-gray-500 dark:text-gray-400",
              onClick: (c) => e.$emit("headerSelected", r, c)
            }, [
              Q(e.$slots, "header", {
                column: r,
                label: e.labelOf(r)
              }, () => [
                s("span", tp, S(e.labelOf(r)), 1)
              ])
            ], 8, ep))), 128))
          ])
        ]),
        s("tbody", lp, [
          (o(!0), u(ge, null, be(e.items, (r, c) => (o(), u("tr", {
            key: c,
            class: h(e.rowClass(c)),
            onClick: (v) => e.$emit("rowSelected", r, v)
          }, [
            (o(!0), u(ge, null, be(e.cells[c], (v, m) => (o(), u("td", {
              key: m,
              class: "px-3 py-3 text-sm text-gray-500 dark:text-gray-400"
            }, [
              s("div", {
                class: "max-w-[500px] flex items-center",
                title: v.title
              }, [
                v.icon ? (o(), Z(i, {
                  key: 0,
                  class: "w-5 h-5 mr-1 shrink-0",
                  image: v.icon
                }, null, 8, ["image"])) : w("", !0),
                v.text != null ? (o(), u("span", ap, S(v.text), 1)) : (o(), u("span", {
                  key: 2,
                  class: "min-w-0 truncate",
                  innerHTML: v.html
                }, null, 8, op))
              ], 8, sp)
            ]))), 128))
          ], 10, np))), 128))
        ])
      ])
    ]),
    Q(e.$slots, "empty")
  ]);
}
const _a = /* @__PURE__ */ Ct(Gv, [["render", rp]]), hs = (e, t) => e.replace(/\{(\w+)\}/g, (l, n) => encodeURIComponent(ue(t, n) ?? "")), ip = { filters: {}, orderBy: "", skip: 0 }, up = {
  name: "SchemaResults",
  components: { SchemaGrid: _a },
  props: {
    /** an /auto/{Model}.json envelope - `name`, `model` and `query` are read */
    schema: { type: Object, required: !0 },
    /** `{ filters, orderBy, skip }`. Omit to keep the query state component-local */
    query: { type: Object, default: null },
    /** rows per page, until the user picks their own in Query Preferences */
    take: { type: Number, default: 25 },
    /** where preferences persist. Two views of one Model can keep their own columns */
    prefsKey: { type: String, default: null },
    /** the columns to offer, in order. Defaults to the Model's own property order */
    columnOrder: { type: Array, default: null },
    /** makes rows clickable, as DataGrid's isSelected does */
    selectable: { type: Boolean, default: !1 }
  },
  emits: ["update:query", "rowSelected", "loaded"],
  setup(e, { emit: t, expose: l }) {
    const { filterDefinitions: n } = gt(), a = O([]), d = O(0), i = O(null), r = O(null), c = O(!1), v = O({ ...ip }), m = f(() => e.query ?? v.value), $ = f(() => m.value.filters ?? {}), g = f(() => String(m.value.orderBy ?? "")), y = f(() => Math.max(0, parseInt(m.value.skip) || 0));
    function p(I) {
      const K = { filters: {}, orderBy: "", skip: 0, ...I };
      v.value = K, t("update:query", K);
    }
    const k = f(() => ys(e.schema)), x = f(() => k.value?.properties || {}), C = (I) => {
      const K = x.value[I];
      return K ? { name: I, type: K.type, isEnum: !1 } : null;
    }, q = n;
    function H(I) {
      for (const K of Object.keys(x.value)) {
        const se = q.value.find((ae) => ae.value.replace("%", K) === I);
        if (se) return { column: K, op: se.name };
      }
      return { column: I, op: "=" };
    }
    const P = f(() => Object.entries($.value).map(([I, K]) => {
      const { column: se, op: ae } = H(I);
      return { key: I, value: K, op: ae, label: x.value[se]?.title || se };
    })), X = (I) => Object.keys($.value).filter((K) => H(K).column === I).length, J = (I) => {
      const K = g.value.split(",").find((se) => se.replace(/^-/, "") === I);
      return K ? K.startsWith("-") ? "DESC" : "ASC" : null;
    }, F = (I) => !!C(I) && x.value[I]?.type !== "object" && x.value[I]?.type !== "array", T = (I) => Object.fromEntries(
      Object.entries($.value).filter(([K]) => K !== I)
    ), oe = (I) => p({ filters: T(I), orderBy: g.value }), re = () => p({ orderBy: g.value });
    function z(I) {
      const K = [];
      for (const [se, ae] of Object.entries($.value)) {
        const ie = q.value.find((Ae) => Ae.value.replace("%", I) === se);
        ie && K.push({ key: ie.value, name: ie.name, value: String(ae) });
      }
      return { filters: K, sort: J(I) ?? void 0 };
    }
    function G(I, K) {
      if (!F(I)) return;
      const se = C(I), ae = K.target?.closest("TABLE")?.getBoundingClientRect();
      if (!se || !ae) return;
      const ie = 318;
      r.value = {
        column: { name: se.name, type: se.type, meta: se, settings: z(se.name) },
        topLeft: {
          x: Math.max(Math.floor(K.clientX + ie / 2), ae.x + ie + 10),
          y: ae.y + 45
        }
      };
    }
    function ee(I) {
      const K = r.value?.column?.name;
      if (r.value = null, !K) return;
      const se = { ...$.value };
      for (const ie of q.value) delete se[ie.value.replace("%", K)];
      for (const ie of I.filters) se[ie.key.replace("%", K)] = ie.value;
      const ae = g.value.split(",").filter((ie) => ie && ie.replace(/^-/, "") !== K);
      I.sort && ae.push((I.sort === "DESC" ? "-" : "") + K), p({ filters: se, orderBy: ae.join(",") });
    }
    const j = f(() => e.prefsKey || `auto:prefs:${e.schema?.name}`), U = f(() => e.columnOrder ?? Object.keys(x.value)), A = f(() => U.value.map((I) => ({ name: I }))), L = O(M());
    function M() {
      try {
        return JSON.parse(localStorage.getItem(j.value)) || {};
      } catch {
        return {};
      }
    }
    function fe(I) {
      L.value = I, localStorage.setItem(j.value, JSON.stringify(I)), c.value = !1, ce();
    }
    const V = f(() => L.value.take || e.take), b = f(() => {
      const I = L.value.selectedColumns;
      return I?.length ? U.value.filter((K) => I.includes(K)) : U.value;
    }), N = f(() => Object.fromEntries(
      Object.entries(x.value).map(([I, K]) => [I, K.title || I])
    )), me = f(() => y.value > 0), te = f(() => y.value + V.value < d.value), Y = f(() => Math.max(0, Math.floor((d.value - 1) / V.value) * V.value)), R = (I) => p({ filters: $.value, orderBy: g.value, skip: Math.max(0, I) }), de = (I) => ["px-0.5", I ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500 cursor-not-allowed"];
    async function ce() {
      if (e.schema?.query) {
        i.value = null;
        try {
          const I = new URLSearchParams($.value);
          g.value && I.set("orderBy", g.value), I.set("skip", y.value), I.set("take", V.value), I.has("include") || I.set("include", "total");
          const K = hs(e.schema.query.$id, $.value) + "?" + I, se = await fetch(K, { headers: { Accept: "application/json" } }), ae = se.status !== 204 ? await se.json() : {};
          if (!se.ok) throw ue(ae, "responseStatus") || { message: `${se.status} ${se.statusText}` };
          a.value = ue(ae, "results") || [], d.value = ue(ae, "total") ?? y.value + a.value.length;
        } catch (I) {
          i.value = I, a.value = [], d.value = 0;
        }
        t("loaded", { results: a.value, total: d.value });
      }
    }
    return ot(() => JSON.stringify([$.value, g.value, y.value]), ce), ot(j, () => {
      L.value = M();
    }), Qe(ce), l({ reload: ce }), {
      rowSchema: k,
      rows: a,
      total: d,
      skip: y,
      take: V,
      listError: i,
      showFilters: r,
      showPrefs: c,
      prefs: L,
      columns: b,
      allColumns: A,
      headerTitles: N,
      conventions: q,
      activeFilters: P,
      canFilter: F,
      filterCount: X,
      sortOf: J,
      from: f(() => d.value ? y.value + 1 : 0),
      to: f(() => Math.min(y.value + a.value.length, d.value)),
      isSelected: () => !1,
      onHeaderSelected: G,
      onFilterSave: ee,
      onPrefsSave: fe,
      clearFilter: oe,
      clearFilters: re,
      canPrev: me,
      canNext: te,
      lastPageSkip: Y,
      skipTo: R,
      pagingClass: de
    };
  }
}, dp = { class: "flex items-center gap-3 mb-3 min-h-9" }, cp = {
  key: 0,
  class: "flex items-center"
}, fp = ["disabled"], mp = ["disabled"], vp = ["disabled"], pp = ["disabled"], gp = {
  key: 1,
  class: "px-2 text-gray-500 dark:text-gray-400 whitespace-nowrap"
}, yp = { key: 0 }, hp = { key: 1 }, bp = {
  key: 2,
  class: "flex flex-wrap items-center gap-2"
}, wp = ["onClick", "title"], kp = { class: "mr-1 select-none" }, xp = {
  key: 0,
  class: "size-3.5 text-indigo-600 dark:text-indigo-400",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, $p = {
  key: 1,
  class: "size-3.5 text-indigo-600 dark:text-indigo-400",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Cp = {
  key: 2,
  class: "size-3.5 text-indigo-600 dark:text-indigo-400",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Sp = {
  key: 3,
  class: "size-3.5 text-gray-400 dark:text-gray-500",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  "aria-hidden": "true"
}, Lp = {
  key: 1,
  class: "py-8 text-center text-xs text-gray-500 dark:text-gray-400"
};
function Vp(e, t, l, n, a, d) {
  const i = E("ErrorSummary"), r = E("SchemaGrid"), c = E("FilterColumn"), v = E("QueryPrefs");
  return o(), u("div", null, [
    s("div", dp, [
      s("button", {
        type: "button",
        onClick: t[0] || (t[0] = (m) => e.showPrefs = !0),
        title: "Query Preferences",
        class: "rounded-md p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      }, [...t[9] || (t[9] = [
        s("span", { class: "sr-only" }, "Query Preferences", -1),
        s("svg", {
          class: "w-7 h-7",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          "stroke-width": "1.5"
        }, [
          s("path", {
            d: `M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1
                    .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18`,
            stroke: "currentColor"
          })
        ], -1)
      ])]),
      e.schema.query ? (o(), u("div", cp, [
        s("button", {
          type: "button",
          title: "First page",
          disabled: !e.canPrev,
          onClick: t[1] || (t[1] = (m) => e.skipTo(0)),
          class: h(e.pagingClass(e.canPrev))
        }, [...t[10] || (t[10] = [
          s("span", { class: "sr-only" }, "First page", -1),
          s("svg", {
            class: "w-7 h-7",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, fp),
        s("button", {
          type: "button",
          title: "Previous page",
          disabled: !e.canPrev,
          onClick: t[2] || (t[2] = (m) => e.skipTo(e.skip - e.take)),
          class: h(e.pagingClass(e.canPrev))
        }, [...t[11] || (t[11] = [
          s("span", { class: "sr-only" }, "Previous page", -1),
          s("svg", {
            class: "w-7 h-7",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, mp),
        s("button", {
          type: "button",
          title: "Next page",
          disabled: !e.canNext,
          onClick: t[3] || (t[3] = (m) => e.skipTo(e.skip + e.take)),
          class: h(e.pagingClass(e.canNext))
        }, [...t[12] || (t[12] = [
          s("span", { class: "sr-only" }, "Next page", -1),
          s("svg", {
            class: "w-7 h-7",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, vp),
        s("button", {
          type: "button",
          title: "Last page",
          disabled: !e.canNext,
          onClick: t[4] || (t[4] = (m) => e.skipTo(e.lastPageSkip)),
          class: h(e.pagingClass(e.canNext))
        }, [...t[13] || (t[13] = [
          s("span", { class: "sr-only" }, "Last page", -1),
          s("svg", {
            class: "w-7 h-7",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, pp)
      ])) : w("", !0),
      e.schema.query ? (o(), u("div", gp, [
        e.total ? (o(), u("span", yp, [
          t[14] || (t[14] = s("span", { class: "hidden xl:inline" }, "Showing Results ", -1)),
          ye(S(e.from) + " - " + S(e.to) + " of " + S(e.total), 1)
        ])) : e.listError ? w("", !0) : (o(), u("span", hp, "No Results"))
      ])) : w("", !0),
      e.activeFilters.length ? (o(), u("div", bp, [
        (o(!0), u(ge, null, be(e.activeFilters, (m) => (o(), u("span", {
          key: m.key,
          class: "inline-flex items-center gap-1 rounded-full pl-2.5 pr-1 py-0.5 text-xs bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
        }, [
          ye(S(m.label) + " " + S(m.op) + " " + S(m.value) + " ", 1),
          s("button", {
            type: "button",
            onClick: ($) => e.clearFilter(m.key),
            title: "Remove " + m.label + " filter",
            class: "rounded-full p-0.5 hover:bg-indigo-200 dark:hover:bg-indigo-800"
          }, [...t[15] || (t[15] = [
            s("span", { class: "sr-only" }, "Remove", -1),
            s("svg", {
              class: "w-3 h-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              viewBox: "0 0 24 24"
            }, [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M6 18 18 6M6 6l12 12"
              })
            ], -1)
          ])], 8, wp)
        ]))), 128)),
        s("button", {
          type: "button",
          onClick: t[5] || (t[5] = (...m) => e.clearFilters && e.clearFilters(...m)),
          class: "text-xs text-gray-500 dark:text-gray-400 hover:underline"
        }, "Clear all")
      ])) : w("", !0),
      t[16] || (t[16] = s("span", { class: "flex-1" }, null, -1)),
      Q(e.$slots, "toolbar")
    ]),
    e.listError ? (o(), Z(i, {
      key: 0,
      status: e.listError,
      class: "mb-4"
    }, null, 8, ["status"])) : w("", !0),
    he(r, {
      items: e.rows,
      schema: e.rowSchema,
      "selected-columns": e.columns,
      "header-titles": e.headerTitles,
      "is-selected": e.selectable ? e.isSelected : void 0,
      onRowSelected: t[6] || (t[6] = (m) => e.$emit("rowSelected", m)),
      onHeaderSelected: e.onHeaderSelected
    }, {
      header: we(({ column: m, label: $ }) => [
        s("div", {
          class: h(["flex items-center justify-between gap-1", e.canFilter(m) ? "cursor-pointer hover:text-gray-900 dark:hover:text-gray-50" : ""])
        }, [
          s("span", kp, S($), 1),
          e.filterCount(m) ? (o(), u("svg", xp, [...t[17] || (t[17] = [
            s("path", {
              d: `M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0
                        0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z`,
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, -1)
          ])])) : e.sortOf(m) === "ASC" ? (o(), u("svg", $p, [...t[18] || (t[18] = [
            s("path", { d: `M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5
                        0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z` }, null, -1)
          ])])) : e.sortOf(m) === "DESC" ? (o(), u("svg", Cp, [...t[19] || (t[19] = [
            s("path", { d: `M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5
                        0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z` }, null, -1)
          ])])) : e.canFilter(m) ? (o(), u("svg", Sp, [...t[20] || (t[20] = [
            s("path", { d: `M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9
                        4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z` }, null, -1)
          ])])) : w("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["items", "schema", "selected-columns", "header-titles", "is-selected", "onHeaderSelected"]),
    !e.rows.length && !e.listError ? (o(), u("div", Lp, " No results ")) : w("", !0),
    (o(), Z(ta, { to: "body" }, [
      e.showFilters ? (o(), Z(c, {
        key: 0,
        definitions: e.conventions,
        column: e.showFilters.column,
        "top-left": e.showFilters.topLeft,
        onDone: t[7] || (t[7] = (m) => e.showFilters = null),
        onSave: e.onFilterSave
      }, null, 8, ["definitions", "column", "top-left", "onSave"])) : w("", !0),
      e.showPrefs ? (o(), Z(v, {
        key: 1,
        columns: e.allColumns,
        prefs: e.prefs,
        onDone: t[8] || (t[8] = (m) => e.showPrefs = !1),
        onSave: e.onPrefsSave
      }, null, 8, ["columns", "prefs", "onSave"])) : w("", !0)
    ]))
  ]);
}
const bs = /* @__PURE__ */ Ct(up, [["render", Vp]]), eo = /* @__PURE__ */ Symbol("JsonSchemaForm"), mt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Mp = (e) => e.replace(/^#\//, "").split("/").map((t) => decodeURIComponent(t.replace(/~1/g, "/").replace(/~0/g, "~")));
function to(e, t, l) {
  if (!e?.$ref) return e;
  if (l.has(e.$ref)) return { ...e, $recursive: !0, $ref: void 0 };
  l.add(e.$ref);
  let n = t;
  for (const i of Mp(e.$ref)) n = n?.[i];
  if (!n) return e;
  const { $ref: a, ...d } = e;
  return to({ ...n, ...d }, t, l);
}
function Tp(e, t) {
  if (!e?.allOf?.length) return e;
  const { allOf: l, ...n } = e;
  return l.reduce((a, d) => {
    const i = Ke(d, t);
    return {
      ...a,
      ...i,
      properties: { ...a.properties ?? {}, ...i.properties ?? {} },
      required: [.../* @__PURE__ */ new Set([...a.required ?? [], ...i.required ?? []])]
    };
  }, n);
}
const Rs = /* @__PURE__ */ new WeakMap();
function Ke(e, t) {
  if (!e || typeof e != "object") return {};
  const l = t ?? e;
  let n = Rs.get(l);
  if (n || Rs.set(l, n = /* @__PURE__ */ new WeakMap()), n.has(e)) return n.get(e);
  let a = Tp(to(e, l, /* @__PURE__ */ new Set()), l);
  return a.nullable && !Array.isArray(a.type) && a.type && (a = { ...a, type: [a.type, "null"] }), n.set(e, a), a;
}
function At(e, t) {
  const l = Array.isArray(e?.type) ? e.type.find((n) => n !== "null") : e?.type;
  return l || (e?.properties || e?.additionalProperties ? "object" : e?.items || e?.prefixItems ? "array" : e?.const !== void 0 ? typeof e.const == "number" ? "number" : typeof e.const : Array.isArray(t) ? "array" : mt(t) ? "object" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "string");
}
const Ap = (e) => !!e?.nullable || Array.isArray(e?.type) && e.type.includes("null");
function Al(e) {
  if (e?.enum) {
    const l = e["x-enumNames"] ?? e.enumNames;
    return e.enum.map((n, a) => ({ value: n, label: l?.[a] ?? String(n) }));
  }
  if (e?.const !== void 0) return [{ value: e.const, label: String(e.const) }];
  const t = e?.oneOf ?? e?.anyOf;
  return t?.length && t.every((l) => l.const !== void 0) ? t.map((l) => ({ value: l.const, label: l.title ?? String(l.const) })) : null;
}
function lo(e) {
  const t = e?.oneOf ?? e?.anyOf;
  return !t?.length || t.every((l) => l.const !== void 0) ? null : t;
}
function Op(e, t, l) {
  let n = 0, a = -1;
  return e.forEach((d, i) => {
    const r = Ke(d, l);
    let c = 0;
    if (mt(t)) {
      for (const [v, m] of Object.entries(r.properties ?? {}))
        t[v] !== void 0 && (c += 1), m.const !== void 0 && t[v] === m.const && (c += 10);
      for (const v of r.required ?? []) t[v] !== void 0 && (c += 2);
    } else t !== void 0 && At(r) === At({}, t) && (c += 1);
    c > a && (a = c, n = i);
  }), n;
}
function Mt(e, t, l = /* @__PURE__ */ new Set()) {
  const n = Ke(e, t);
  if (n.default !== void 0) return structuredClone(n.default);
  if (n.const !== void 0) return n.const;
  const a = Al(n);
  if (a) return a[0].value;
  const d = lo(n);
  if (d) return Mt(d[0], t, l);
  const i = At(n);
  if (i === "object" || i === "array") {
    if (l.has(n)) return null;
    l.add(n);
  }
  switch (i) {
    case "object": {
      const r = {};
      for (const [c, v] of Object.entries(n.properties ?? {})) r[c] = Mt(v, t, l);
      return r;
    }
    case "array":
      return (n.prefixItems ?? []).map((r) => Mt(r, t, l));
    case "integer":
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return "";
  }
}
const no = {
  date: "date",
  "date-time": "datetime-local",
  time: "time",
  month: "month",
  week: "week",
  email: "email",
  uri: "url",
  url: "url",
  password: "password",
  color: "color",
  tel: "tel",
  search: "search",
  uuid: "text"
};
function Fp(e, t) {
  const l = e?.["x-widget"];
  if (l === "hidden") return "hidden";
  if (l) return l;
  if (Al(e)) return "select";
  const n = At(e, t);
  return n === "object" ? "object" : n === "array" ? "array" : n === "boolean" ? "checkbox" : n === "integer" || n === "number" ? "number" : e?.format === "textarea" ? "textarea" : no[e?.format] ? "input" : typeof t == "string" && (t.length > 80 || t.includes(`
`)) ? "textarea" : "input";
}
const Bn = (e) => String(e ?? "").replace(/\[(\d+)\]/g, ".$1").toLowerCase();
function jp(e, t, l) {
  const n = e?.errors ?? e?.Errors;
  if (!n?.length || !t) return null;
  const a = Bn(t), d = a.split(".").pop(), i = n.find((r) => {
    const c = Bn(r.fieldName ?? r.FieldName);
    return c === a ? !0 : !c.includes(".") && c === d && (l?.get(d) ?? 2) === 1;
  });
  return i ? i.message ?? i.Message ?? i.errorCode ?? i.ErrorCode : null;
}
function Jl(e, t, l = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map()) {
  const a = Ke(e, t ?? e);
  if (!a.properties && !a.items && !a.prefixItems && !a.oneOf && !a.anyOf || l.has(a)) return n;
  l.add(a);
  for (const [d, i] of Object.entries(a.properties ?? {})) {
    const r = d.toLowerCase();
    n.set(r, (n.get(r) ?? 0) + 1), Jl(i, t ?? e, l, n);
  }
  for (const d of a.oneOf ?? a.anyOf ?? []) Jl(d, t ?? e, l, n);
  for (const d of [a.items, ...a.prefixItems ?? []])
    d && Jl(d, t ?? e, l, n);
  return n;
}
const Xe = (e, t, l) => ({ fieldName: e, errorCode: t, message: l }), Hs = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0;
function En(e, t, l, n = "", a = "", d = []) {
  const i = Ke(e, l), r = a || (n ? n.split(".").pop() : "value"), c = At(i, t);
  i.const !== void 0 && t !== i.const && d.push(Xe(n, "Const", `${r} must be ${i.const}`));
  const v = Al(i);
  if (v && !Hs(t) && !v.some((m) => m.value === t) && d.push(Xe(n, "Enum", `${r} must be one of ${v.map((m) => m.label).join(", ")}`)), c === "object" && mt(t)) {
    for (const m of i.required ?? []) {
      const $ = Ke(i.properties?.[m], l);
      Hs(t[m]) && d.push(Xe(n ? `${n}.${m}` : m, "NotEmpty", `${$.title || Oe(m)} is required`));
    }
    for (const [m, $] of Object.entries(i.properties ?? {}))
      t[m] !== void 0 && En($, t[m], l, n ? `${n}.${m}` : m, Ke($, l).title || Oe(m), d);
  } else c === "array" && Array.isArray(t) ? (i.minItems != null && t.length < i.minItems && d.push(Xe(n, "MinItems", `${r} needs at least ${i.minItems}`)), i.maxItems != null && t.length > i.maxItems && d.push(Xe(n, "MaxItems", `${r} allows at most ${i.maxItems}`)), i.uniqueItems && new Set(t.map((m) => JSON.stringify(m))).size !== t.length && d.push(Xe(n, "UniqueItems", `${r} must not contain duplicates`)), t.forEach((m, $) => {
    const g = i.prefixItems?.[$] ?? i.items;
    g && En(g, m, l, `${n}[${$}]`, `${r} ${$ + 1}`, d);
  })) : c === "string" && typeof t == "string" && t !== "" ? (i.minLength != null && t.length < i.minLength && d.push(Xe(n, "MinLength", `${r} must be at least ${i.minLength} characters`)), i.maxLength != null && t.length > i.maxLength && d.push(Xe(n, "MaxLength", `${r} must be at most ${i.maxLength} characters`)), i.pattern && !new RegExp(i.pattern).test(t) && d.push(Xe(n, "Pattern", `${r} is not in the expected format`))) : (c === "number" || c === "integer") && typeof t == "number" && (c === "integer" && !Number.isInteger(t) && d.push(Xe(n, "Integer", `${r} must be a whole number`)), i.minimum != null && t < i.minimum && d.push(Xe(n, "Minimum", `${r} must be ${i.minimum} or more`)), i.maximum != null && t > i.maximum && d.push(Xe(n, "Maximum", `${r} must be ${i.maximum} or less`)), i.exclusiveMinimum != null && t <= i.exclusiveMinimum && d.push(Xe(n, "ExclusiveMinimum", `${r} must be greater than ${i.exclusiveMinimum}`)), i.exclusiveMaximum != null && t >= i.exclusiveMaximum && d.push(Xe(n, "ExclusiveMaximum", `${r} must be less than ${i.exclusiveMaximum}`)), i.multipleOf && Math.abs(t / i.multipleOf - Math.round(t / i.multipleOf)) > 1e-9 && d.push(Xe(n, "MultipleOf", `${r} must be a multiple of ${i.multipleOf}`)));
  return d;
}
const Ip = "block w-full sm:text-sm rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:text-white dark:bg-gray-900 focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-500", Pp = "block w-full sm:text-sm rounded-md shadow-sm border-red-500 text-red-900 dark:text-red-200 dark:bg-gray-900 focus:border-red-500 focus:ring-red-500", Bp = "rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden", Ep = "flex items-center gap-2 px-2 py-1.5 bg-gray-50 dark:bg-gray-800/50", Dp = "border-b border-gray-200 dark:border-gray-700", Np = "px-2 py-0.5 text-xs rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40", Rp = "p-1 rounded text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-40", Hp = {
  name: "JsonSchemaNode",
  props: {
    schema: { type: Object, default: () => ({}) },
    model: { type: [Object, Array], required: !0 },
    field: { type: [String, Number], required: !0 },
    path: { type: String, default: "" },
    label: { type: String, default: "" },
    required: { type: Boolean, default: !1 },
    /** render the object's fields without the surrounding panel, header and collapse toggle */
    bare: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = Ne(eo), l = t.root, n = O(""), a = f(() => e.model[e.field]), d = f(() => Ke(e.schema, l.value)), i = f(() => lo(d.value)), r = O(0), c = f(() => {
      if (!i.value) return d.value;
      const { oneOf: j, anyOf: U, ...A } = d.value;
      return { ...A, ...Ke(i.value[r.value], l.value) };
    });
    rl(() => {
      i.value && (r.value = Op(i.value, a.value, l.value));
    });
    const v = f(() => {
      const j = Fp(c.value, a.value);
      return j === "array" && $.value && c.value["x-widget"] !== "list" ? "checklist" : j;
    }), m = f(() => Al(c.value)), $ = f(
      () => At(c.value) === "array" && c.value.items ? Al(Ke(c.value.items, l.value)) : null
    ), g = f(() => e.label || c.value.title || ""), y = f(() => t.readOnly.value || !!c.value.readOnly), p = f(() => jp(t.status.value, e.path, t.leafCounts.value)), k = f(() => "f-" + (Bn(e.path).replace(/\./g, "-") || "root")), x = f(() => a.value === void 0 || a.value === null), C = O(!x.value && !c.value["x-collapsed"]);
    rl(() => {
      if (!C.value && !e.bare) return;
      const j = e.model[e.field];
      (v.value === "array" && !Array.isArray(j) || v.value === "object" && !mt(j)) && (e.model[e.field] = Mt(c.value, l.value));
    });
    const q = f(() => Array.isArray(a.value) ? a.value : []), H = f(() => mt(a.value) ? a.value : {}), P = f(() => c.value.prefixItems ?? (Array.isArray(c.value.items) ? c.value.items : null)), X = f(() => P.value ?? []), J = f(() => X.value.length), F = f(
      () => q.value.map((j, U) => U).filter((j) => j >= J.value)
    ), T = f(() => c.value.maxItems != null && q.value.length >= c.value.maxItems), oe = f(() => c.value.minItems != null && q.value.length <= c.value.minItems), re = f(() => {
      const j = c.value.additionalProperties;
      return j === void 0 ? !c.value.properties : j !== !1;
    }), z = f(() => {
      if (v.value !== "object") return [];
      const j = Object.entries(c.value.properties ?? {}), U = Object.keys(H.value).filter((A) => !c.value.properties?.[A]).map((A) => [A, mt(c.value.additionalProperties) ? c.value.additionalProperties : {}]);
      return [...j, ...U].map(([A, L]) => {
        const M = Ke(L, l.value), fe = At(M, H.value[A]), V = !!c.value.properties?.[A];
        return {
          key: A,
          schema: L,
          order: M["x-order"] ?? 0,
          // additionalProperties keys are data, not identifiers - show them verbatim
          label: M.title || (V ? Oe(A) : A),
          wide: fe === "object" || fe === "array" || M.format === "textarea" || M["x-widget"] === "textarea",
          removable: !c.value.properties?.[A],
          hidden: M["x-widget"] === "hidden"
        };
      }).filter((A) => !A.hidden).sort((A, L) => A.order - L.order);
    });
    function G(j) {
      e.model[e.field] = j, t.onChange();
    }
    function ee() {
      return Array.isArray(e.model[e.field]) || (e.model[e.field] = []), e.model[e.field];
    }
    return {
      newKey: n,
      value: a,
      schema: c,
      widget: v,
      choices: m,
      itemChoices: $,
      heading: g,
      readOnly: y,
      error: p,
      id: k,
      expanded: C,
      items: q,
      container: H,
      properties: z,
      allowsNewKeys: re,
      tuple: P,
      tupleEntries: X,
      extraIndexes: F,
      firstExtra: J,
      atMax: T,
      atMin: oe,
      variants: i,
      variant: r,
      variantLabels: f(
        () => (i.value ?? []).map((j, U) => Ke(j, l.value).title ?? `Option ${U + 1}`)
      ),
      nullable: f(() => Ap(c.value)),
      fixed: f(() => c.value.const !== void 0),
      step: f(() => At(c.value) === "integer" ? 1 : c.value.multipleOf ?? "any"),
      inputType: f(() => no[c.value.format] ?? "text"),
      describedBy: f(() => p.value ? `${k.value}-err` : c.value.description ? `${k.value}-help` : void 0),
      panelClass: Bp,
      headerClass: Ep,
      headerBorderClass: Dp,
      smallBtnClass: Np,
      iconBtnClass: Rp,
      inputClass: Ip,
      errorClass: Pp,
      isRequired: (j) => (c.value.required ?? []).includes(j),
      childPath: (j) => e.path ? `${e.path}.${j}` : j,
      toggle: () => C.value = !C.value,
      itemLabel(j) {
        const U = P.value?.[j];
        if (U) return Ke(U, l.value).title ?? `#${j + 1}`;
        const A = Ke(c.value.items, l.value), L = A["x-titleKey"], M = q.value[j];
        return L && mt(M) && M[L] ? `${j + 1}. ${M[L]}` : A.title ? `${A.title} ${j + 1}` : mt(M) ? `${e.label || "Item"} ${j + 1}` : "";
      },
      setVariant(j) {
        r.value = j;
        const U = Ke(i.value[j], l.value), A = mt(a.value) ? a.value : {}, L = Mt(U, l.value);
        if (mt(L))
          for (const M of Object.keys(L))
            !(Ke(U.properties?.[M], l.value).const !== void 0) && A[M] !== void 0 && (L[M] = A[M]);
        G(L);
      },
      coerce(j) {
        if (j === String(null)) return null;
        const U = m.value?.find((A) => String(A.value) === j);
        return U ? U.value : j;
      },
      setValue: G,
      toggleChoice(j, U) {
        const A = ee(), L = A.indexOf(j);
        U && L === -1 ? A.push(j) : !U && L !== -1 && A.splice(L, 1), t.onChange();
      },
      addItem() {
        ee().push(Mt(c.value.items, l.value)), C.value = !0, t.onChange();
      },
      removeItem(j) {
        e.model[e.field].splice(j, 1), t.onChange();
      },
      move(j, U) {
        const A = e.model[e.field], L = j + U;
        L < J.value || L >= A.length || (A.splice(L, 0, A.splice(j, 1)[0]), t.onChange());
      },
      addKey() {
        const j = n.value.trim();
        if (!j) return;
        const U = c.value.additionalProperties;
        H.value[j] = mt(U) ? Mt(U, l.value) : "", n.value = "", t.onChange();
      },
      removeKey(j) {
        delete H.value[j], t.onChange();
      }
    };
  }
}, qp = { key: 0 }, zp = ["aria-labelledby"], Up = ["id", "aria-expanded"], Kp = {
  key: 0,
  class: "text-red-500"
}, Qp = { class: "text-xs text-gray-500" }, Jp = {
  key: 0,
  class: "text-xs italic text-gray-400"
}, Zp = ["disabled", "title"], Gp = {
  key: 0,
  class: "p-2 space-y-2"
}, Wp = { class: "flex-1 min-w-0" }, Xp = {
  key: 0,
  class: "flex flex-col opacity-0 group-hover:opacity-100"
}, Yp = ["onClick", "disabled"], _p = ["onClick", "disabled"], e1 = ["onClick", "disabled"], t1 = {
  key: 0,
  class: "px-1 py-2 text-xs italic text-gray-500"
}, l1 = {
  key: 1,
  class: "text-xs text-red-600 dark:text-red-400"
}, n1 = { key: 2 }, s1 = { class: "mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300" }, a1 = {
  key: 0,
  class: "text-red-500"
}, o1 = { class: "flex flex-wrap gap-x-4 gap-y-1" }, r1 = ["checked", "disabled", "onChange"], i1 = {
  key: 0,
  class: "mt-1 text-xs text-red-600 dark:text-red-400"
}, u1 = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, d1 = ["role", "aria-labelledby"], c1 = {
  key: 0,
  class: "mb-2 flex justify-end"
}, f1 = ["value", "disabled"], m1 = ["value"], v1 = ["id", "aria-expanded"], p1 = {
  key: 0,
  class: "text-red-500"
}, g1 = {
  key: 0,
  class: "text-xs italic text-gray-400"
}, y1 = ["value", "disabled"], h1 = ["value"], b1 = { class: "flex items-start gap-1" }, w1 = { class: "flex-1 min-w-0" }, k1 = ["onClick", "title"], x1 = {
  key: 0,
  class: "md:col-span-2 px-1 py-2 text-xs italic text-gray-500"
}, $1 = {
  key: 1,
  class: "md:col-span-2 flex items-center gap-2"
}, C1 = ["disabled"], S1 = {
  key: 2,
  class: "md:col-span-2 text-xs text-red-600 dark:text-red-400"
}, L1 = { key: 4 }, V1 = { class: "inline-flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300" }, M1 = ["checked", "disabled", "aria-invalid", "aria-describedby"], T1 = {
  key: 0,
  class: "text-red-500"
}, A1 = ["id"], O1 = ["id"], F1 = { key: 5 }, j1 = { class: "mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300" }, I1 = {
  key: 0,
  class: "text-red-500"
}, P1 = { class: "flex flex-wrap gap-x-4 gap-y-1" }, B1 = ["name", "value", "checked", "disabled", "onChange"], E1 = {
  key: 0,
  class: "mt-1 text-xs text-red-600 dark:text-red-400"
}, D1 = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, N1 = { key: 6 }, R1 = ["for"], H1 = {
  key: 0,
  class: "text-red-500"
}, q1 = ["id", "value", "disabled", "aria-invalid", "aria-describedby"], z1 = ["value"], U1 = ["value"], K1 = ["id", "step", "min", "max", "value", "disabled", "aria-invalid", "aria-describedby"], Q1 = ["id", "value", "disabled", "maxlength", "aria-invalid", "aria-describedby"], J1 = ["id", "type", "value", "disabled", "placeholder", "minlength", "maxlength", "pattern", "aria-invalid", "aria-describedby"], Z1 = ["id"], G1 = ["id"];
function W1(e, t, l, n, a, d) {
  const i = E("JsonSchemaNode", !0);
  return e.widget === "hidden" ? (o(), u("div", qp)) : e.widget === "array" ? (o(), u("div", {
    key: 1,
    class: h(e.panelClass),
    role: "group",
    "aria-labelledby": e.id + "-label"
  }, [
    s("div", {
      class: h([e.headerClass, e.expanded ? e.headerBorderClass : ""])
    }, [
      s("button", {
        type: "button",
        onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r)),
        class: "flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300",
        id: e.id + "-label",
        "aria-expanded": e.expanded
      }, [
        (o(), u("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: h(["size-3 transition-transform flex-shrink-0", { "-rotate-90": !e.expanded }]),
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor"
        }, [...t[13] || (t[13] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 9l-7 7-7-7"
          }, null, -1)
        ])], 2)),
        ye(" " + S(e.heading), 1),
        e.required ? (o(), u("span", Kp, "*")) : w("", !0)
      ], 8, Up),
      s("span", Qp, S(e.items.length), 1),
      e.schema.deprecated ? (o(), u("span", Jp, "deprecated")) : w("", !0),
      t[14] || (t[14] = s("div", { class: "flex-1" }, null, -1)),
      !e.readOnly && !e.tuple ? (o(), u("button", {
        key: 1,
        type: "button",
        onClick: t[1] || (t[1] = (...r) => e.addItem && e.addItem(...r)),
        disabled: e.atMax,
        class: h(e.smallBtnClass),
        title: e.atMax ? "At most " + e.schema.maxItems : "Add"
      }, "+ Add", 10, Zp)) : w("", !0)
    ], 2),
    e.expanded ? (o(), u("div", Gp, [
      (o(!0), u(ge, null, be(e.tupleEntries, (r, c) => (o(), u("div", {
        key: "t" + c
      }, [
        he(i, {
          schema: r,
          model: e.items,
          field: c,
          path: e.path + "[" + c + "]",
          label: e.itemLabel(c)
        }, null, 8, ["schema", "model", "field", "path", "label"])
      ]))), 128)),
      (o(!0), u(ge, null, be(e.extraIndexes, (r) => (o(), u("div", {
        key: "i" + r,
        class: "group flex items-start gap-2"
      }, [
        s("div", Wp, [
          he(i, {
            schema: e.schema.items,
            model: e.items,
            field: r,
            path: e.path + "[" + r + "]",
            label: e.itemLabel(r)
          }, null, 8, ["schema", "model", "field", "path", "label"])
        ]),
        e.readOnly ? w("", !0) : (o(), u("div", Xp, [
          s("button", {
            type: "button",
            onClick: (c) => e.move(r, -1),
            disabled: r === e.firstExtra,
            title: "Move up",
            class: h(e.iconBtnClass)
          }, [...t[15] || (t[15] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "size-3",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M5 15l7-7 7 7"
              })
            ], -1)
          ])], 10, Yp),
          s("button", {
            type: "button",
            onClick: (c) => e.move(r, 1),
            disabled: r === e.items.length - 1,
            title: "Move down",
            class: h(e.iconBtnClass)
          }, [...t[16] || (t[16] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "size-3",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ], -1)
          ])], 10, _p),
          s("button", {
            type: "button",
            onClick: (c) => e.removeItem(r),
            disabled: e.atMin,
            title: "Remove",
            class: "p-1 rounded text-gray-400 hover:text-red-600 dark:hover:text-red-400 disabled:opacity-40"
          }, [...t[17] || (t[17] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "size-3",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              s("path", {
                "fill-rule": "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])], 8, e1)
        ]))
      ]))), 128)),
      e.items.length ? w("", !0) : (o(), u("div", t1, "No entries yet")),
      e.error ? (o(), u("p", l1, S(e.error), 1)) : w("", !0)
    ])) : w("", !0)
  ], 10, zp)) : e.widget === "checklist" ? (o(), u("div", n1, [
    s("span", s1, [
      ye(S(e.heading), 1),
      e.required ? (o(), u("span", a1, "*")) : w("", !0)
    ]),
    s("div", o1, [
      (o(!0), u(ge, null, be(e.itemChoices, (r) => (o(), u("label", {
        key: String(r.value),
        class: "inline-flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300"
      }, [
        s("input", {
          type: "checkbox",
          checked: e.items.includes(r.value),
          disabled: e.readOnly,
          onChange: (c) => e.toggleChoice(r.value, c.target.checked),
          class: "rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
        }, null, 40, r1),
        ye(" " + S(r.label), 1)
      ]))), 128))
    ]),
    e.error ? (o(), u("p", i1, S(e.error), 1)) : e.schema.description ? (o(), u("p", u1, S(e.schema.description), 1)) : w("", !0)
  ])) : e.widget === "object" ? (o(), u("div", {
    key: 3,
    class: h(e.bare ? "" : e.panelClass),
    role: e.bare ? null : "group",
    "aria-labelledby": e.bare ? null : e.id + "-label"
  }, [
    e.bare && e.variants ? (o(), u("div", c1, [
      s("select", {
        value: e.variant,
        onChange: t[2] || (t[2] = (r) => e.setVariant(Number(r.target.value))),
        disabled: e.readOnly,
        class: "text-xs rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white py-0.5"
      }, [
        (o(!0), u(ge, null, be(e.variantLabels, (r, c) => (o(), u("option", {
          key: c,
          value: c
        }, S(r), 9, m1))), 128))
      ], 40, f1)
    ])) : w("", !0),
    e.heading && !e.bare ? (o(), u("div", {
      key: 1,
      class: h([e.headerClass, e.expanded ? e.headerBorderClass : ""])
    }, [
      s("button", {
        type: "button",
        onClick: t[3] || (t[3] = (...r) => e.toggle && e.toggle(...r)),
        class: "flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300",
        id: e.id + "-label",
        "aria-expanded": e.expanded
      }, [
        (o(), u("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: h(["size-3 transition-transform flex-shrink-0", { "-rotate-90": !e.expanded }]),
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor"
        }, [...t[18] || (t[18] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 9l-7 7-7-7"
          }, null, -1)
        ])], 2)),
        ye(" " + S(e.heading), 1),
        e.required ? (o(), u("span", p1, "*")) : w("", !0)
      ], 8, v1),
      e.schema.deprecated ? (o(), u("span", g1, "deprecated")) : w("", !0),
      t[19] || (t[19] = s("div", { class: "flex-1" }, null, -1)),
      e.variants ? (o(), u("select", {
        key: 1,
        value: e.variant,
        onChange: t[4] || (t[4] = (r) => e.setVariant(Number(r.target.value))),
        disabled: e.readOnly,
        class: "text-xs rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white py-0.5"
      }, [
        (o(!0), u(ge, null, be(e.variantLabels, (r, c) => (o(), u("option", {
          key: c,
          value: c
        }, S(r), 9, h1))), 128))
      ], 40, y1)) : w("", !0)
    ], 2)) : w("", !0),
    e.expanded || e.bare ? (o(), u("div", {
      key: 2,
      class: h(["grid grid-cols-1 md:grid-cols-2 gap-2", e.bare ? "" : "p-2"])
    }, [
      (o(!0), u(ge, null, be(e.properties, (r) => (o(), u("div", {
        key: r.key,
        class: h({ "md:col-span-2": r.wide })
      }, [
        s("div", b1, [
          s("div", w1, [
            he(i, {
              schema: r.schema,
              model: e.container,
              field: r.key,
              path: e.childPath(r.key),
              label: r.label,
              required: e.isRequired(r.key)
            }, null, 8, ["schema", "model", "field", "path", "label", "required"])
          ]),
          r.removable && !e.readOnly ? (o(), u("button", {
            key: 0,
            type: "button",
            onClick: (c) => e.removeKey(r.key),
            title: "Remove " + r.key,
            class: "mt-4 p-1 rounded text-gray-400 hover:text-red-600 dark:hover:text-red-400"
          }, [...t[20] || (t[20] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "size-3.5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              s("path", {
                "fill-rule": "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])], 8, k1)) : w("", !0)
        ])
      ], 2))), 128)),
      !e.properties.length && !e.allowsNewKeys ? (o(), u("div", x1, "No fields")) : w("", !0),
      e.allowsNewKeys && !e.readOnly ? (o(), u("div", $1, [
        Ft(s("input", {
          "onUpdate:modelValue": t[5] || (t[5] = (r) => e.newKey = r),
          type: "text",
          placeholder: "New property",
          onKeyup: t[6] || (t[6] = Un((...r) => e.addKey && e.addKey(...r), ["enter"])),
          class: "px-2 py-1 text-xs rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:text-white dark:bg-gray-900"
        }, null, 544), [
          [_s, e.newKey]
        ]),
        s("button", {
          type: "button",
          onClick: t[7] || (t[7] = (...r) => e.addKey && e.addKey(...r)),
          disabled: !e.newKey.trim(),
          class: h(e.smallBtnClass)
        }, "Add", 10, C1)
      ])) : w("", !0),
      e.error ? (o(), u("p", S1, S(e.error), 1)) : w("", !0)
    ], 2)) : w("", !0)
  ], 10, d1)) : e.widget === "checkbox" ? (o(), u("div", L1, [
    s("label", V1, [
      s("input", {
        type: "checkbox",
        checked: !!e.value,
        disabled: e.readOnly,
        onChange: t[8] || (t[8] = (r) => e.setValue(r.target.checked)),
        "aria-invalid": !!e.error,
        "aria-describedby": e.describedBy,
        class: "rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
      }, null, 40, M1),
      ye(" " + S(e.heading), 1),
      e.required ? (o(), u("span", T1, "*")) : w("", !0)
    ]),
    e.error ? (o(), u("p", {
      key: 0,
      id: e.id + "-err",
      class: "mt-1 text-xs text-red-600 dark:text-red-400"
    }, S(e.error), 9, A1)) : e.schema.description ? (o(), u("p", {
      key: 1,
      id: e.id + "-help",
      class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
    }, S(e.schema.description), 9, O1)) : w("", !0)
  ])) : e.widget === "radio" ? (o(), u("div", F1, [
    s("span", j1, [
      ye(S(e.heading), 1),
      e.required ? (o(), u("span", I1, "*")) : w("", !0)
    ]),
    s("div", P1, [
      (o(!0), u(ge, null, be(e.choices, (r) => (o(), u("label", {
        key: String(r.value),
        class: "inline-flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300"
      }, [
        s("input", {
          type: "radio",
          name: e.id,
          value: String(r.value),
          checked: e.value === r.value,
          disabled: e.readOnly,
          onChange: (c) => e.setValue(r.value),
          class: "border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
        }, null, 40, B1),
        ye(" " + S(r.label), 1)
      ]))), 128))
    ]),
    e.error ? (o(), u("p", E1, S(e.error), 1)) : e.schema.description ? (o(), u("p", D1, S(e.schema.description), 1)) : w("", !0)
  ])) : (o(), u("div", N1, [
    e.heading ? (o(), u("label", {
      key: 0,
      for: e.id,
      class: h(["mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300", { "italic opacity-70": e.schema.deprecated }])
    }, [
      ye(S(e.heading), 1),
      e.required ? (o(), u("span", H1, "*")) : w("", !0)
    ], 10, R1)) : w("", !0),
    e.widget === "select" ? (o(), u("select", {
      key: 1,
      id: e.id,
      value: String(e.value),
      disabled: e.readOnly || e.fixed,
      onChange: t[9] || (t[9] = (r) => e.setValue(e.coerce(r.target.value))),
      "aria-invalid": !!e.error,
      "aria-describedby": e.describedBy,
      class: h(e.error ? e.errorClass : e.inputClass)
    }, [
      e.nullable ? (o(), u("option", {
        key: 0,
        value: String(null)
      }, "(none)", 8, z1)) : w("", !0),
      (o(!0), u(ge, null, be(e.choices, (r) => (o(), u("option", {
        key: String(r.value),
        value: String(r.value)
      }, S(r.label), 9, U1))), 128))
    ], 42, q1)) : e.widget === "number" ? (o(), u("input", {
      key: 2,
      id: e.id,
      type: "number",
      step: e.step,
      min: e.schema.minimum ?? e.schema.exclusiveMinimum,
      max: e.schema.maximum ?? e.schema.exclusiveMaximum,
      value: e.value,
      disabled: e.readOnly,
      onInput: t[10] || (t[10] = (r) => e.setValue(r.target.value === "" ? null : Number(r.target.value))),
      "aria-invalid": !!e.error,
      "aria-describedby": e.describedBy,
      class: h(e.error ? e.errorClass : e.inputClass)
    }, null, 42, K1)) : e.widget === "textarea" ? (o(), u("textarea", {
      key: 3,
      id: e.id,
      value: e.value ?? "",
      disabled: e.readOnly,
      rows: "3",
      spellcheck: "false",
      maxlength: e.schema.maxLength,
      onInput: t[11] || (t[11] = (r) => e.setValue(r.target.value)),
      "aria-invalid": !!e.error,
      "aria-describedby": e.describedBy,
      class: h([e.error ? e.errorClass : e.inputClass, "resize-y"])
    }, null, 42, Q1)) : (o(), u("input", {
      key: 4,
      id: e.id,
      type: e.inputType,
      value: e.value ?? "",
      disabled: e.readOnly,
      placeholder: e.schema.examples?.[0] ?? e.schema.placeholder ?? "",
      minlength: e.schema.minLength,
      maxlength: e.schema.maxLength,
      pattern: e.schema.pattern,
      onInput: t[12] || (t[12] = (r) => e.setValue(r.target.value)),
      "aria-invalid": !!e.error,
      "aria-describedby": e.describedBy,
      class: h(e.error ? e.errorClass : e.inputClass)
    }, null, 42, J1)),
    e.error ? (o(), u("p", {
      key: 5,
      id: e.id + "-err",
      class: "mt-1 text-xs text-red-600 dark:text-red-400"
    }, S(e.error), 9, Z1)) : e.schema.description ? (o(), u("p", {
      key: 6,
      id: e.id + "-help",
      class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
    }, S(e.schema.description), 9, G1)) : w("", !0)
  ]));
}
const X1 = /* @__PURE__ */ Ct(Hp, [["render", W1]]), Y1 = {
  name: "JsonSchemaForm",
  components: { JsonSchemaNode: X1 },
  props: {
    schema: { type: Object, default: null },
    modelValue: { default: void 0 },
    /** alias for modelValue, for `:data` style usage */
    data: { default: void 0 },
    status: { type: Object, default: null },
    readOnly: { type: Boolean, default: !1 },
    showTitle: { type: Boolean, default: !0 },
    /** wrap the whole form in the same collapsible panel nested objects get (off by default) */
    wrapper: { type: Boolean, default: !1 },
    validateOn: { type: String, default: "submit" }
    // 'submit' | 'change'
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t, expose: l }) {
    const n = fl(), a = O(""), d = O(null), i = f(() => {
      if (e.schema)
        return a.value = "", e.schema;
      const g = _1(n);
      if (!g)
        return a.value = "No schema: pass :schema or put one in the component body", {};
      try {
        return a.value = "", JSON.parse(g);
      } catch (y) {
        return a.value = `Schema isn't valid JSON: ${y.message}`, {};
      }
    }), r = f(() => e.modelValue ?? e.data ?? {}), c = f(() => e.status ?? d.value), v = f(() => Jl(i.value));
    function m() {
      (e.validateOn === "change" || d.value) && (d.value = $()), t("update:modelValue", r.value), t("change", r.value);
    }
    function $() {
      const g = En(i.value, r.value, i.value);
      return g.length ? {
        errorCode: "ValidationException",
        message: g.length === 1 ? g[0].message : `${g.length} fields need attention`,
        errors: g
      } : null;
    }
    return Qt(eo, {
      root: i,
      status: c,
      leafCounts: v,
      readOnly: f(() => e.readOnly),
      onChange: m
    }), l({
      validate: () => d.value = $(),
      reset: () => d.value = null
    }), {
      resolvedSchema: i,
      schemaError: a,
      rootModel: f(() => ({ root: r.value })),
      /** the status message, or any field error naming something this schema doesn't render */
      summary: f(() => {
        const g = c.value;
        if (!g) return null;
        const y = g.errors ?? g.Errors ?? [];
        if (!y.length) return g.message ?? g.errorCode ?? null;
        const p = v.value, k = y.find((x) => {
          const C = String(x.fieldName ?? x.FieldName ?? "").split(/[.[]/).pop().replace("]", "");
          return C && !p.has(C.toLowerCase());
        });
        return k ? k.message ?? k.errorCode : null;
      })
    };
  }
};
function _1(e) {
  const t = [], l = (n) => {
    for (const a of n ?? [])
      typeof a.children == "string" ? t.push(a.children) : Array.isArray(a.children) && l(a.children);
  };
  try {
    l(e.default?.());
  } catch {
    return "";
  }
  return t.join("").trim();
}
const eg = {
  key: 0,
  class: "px-2 py-1.5 text-xs rounded-md border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200"
}, tg = {
  key: 0,
  class: "mb-1 text-sm font-semibold text-gray-900 dark:text-gray-100"
}, lg = {
  key: 1,
  class: "mb-3 text-xs text-gray-500 dark:text-gray-400"
}, ng = {
  key: 2,
  class: "mb-3 px-2 py-1.5 text-xs rounded-md border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200"
};
function sg(e, t, l, n, a, d) {
  const i = E("JsonSchemaNode");
  return o(), u("div", null, [
    e.schemaError ? (o(), u("p", eg, S(e.schemaError), 1)) : (o(), u(ge, { key: 1 }, [
      e.resolvedSchema.title && e.showTitle && !e.wrapper ? (o(), u("h3", tg, S(e.resolvedSchema.title), 1)) : w("", !0),
      e.resolvedSchema.description && e.showTitle ? (o(), u("p", lg, S(e.resolvedSchema.description), 1)) : w("", !0),
      e.summary ? (o(), u("p", ng, S(e.summary), 1)) : w("", !0),
      he(i, {
        schema: e.resolvedSchema,
        model: e.rootModel,
        field: "root",
        path: "",
        label: "",
        bare: !e.wrapper
      }, null, 8, ["schema", "model", "bare"])
    ], 64))
  ]);
}
const so = /* @__PURE__ */ Ct(Y1, [["render", sg]]), ag = {
  name: "SchemaLookup",
  components: { SchemaResults: bs },
  props: {
    id: { type: String, required: !0 },
    /** the schema property, whose ui.ref names the referenced Model */
    prop: { type: Object, required: !0 },
    /** the object being edited - mutated in place, as LookupInput does */
    model: { type: Object, required: !0 },
    status: { type: Object, default: null },
    label: { type: String, default: null },
    help: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = Ya(), { config: n } = $t(), a = O(!1), d = O(""), i = f(() => e.prop?.ui?.ref ?? null), r = f(() => i.value ? i.value.icon ?? n.value.tableIcon : null), c = f(() => i.value ? l.model(i.value.model) : null), v = f(() => ue(e.model, e.id)), m = f(() => d.value || (v.value ?? "") || `Select ${i.value?.model ?? ""}`), $ = f(() => {
      const C = (e.status?.errors ?? []).find((q) => String(q.fieldName ?? "").toLowerCase() === e.id.toLowerCase());
      return C ? C.message : null;
    }), g = f(() => {
      const x = Object.keys(ys(c.value)?.properties ?? {}), C = [i.value?.refId, i.value?.refLabel].filter((q) => q && x.includes(q));
      return [...C, ...x.filter((q) => !C.includes(q))];
    });
    async function y() {
      const x = i.value;
      if (!x?.refLabel || v.value == null || v.value === "") {
        d.value = "";
        return;
      }
      const C = Object.values(e.model).find((H) => H && typeof H == "object" && !Array.isArray(H) && ue(H, x.refId) == v.value);
      if (C && ue(C, x.refLabel)) {
        d.value = String(ue(C, x.refLabel));
        return;
      }
      await l.loadModel(x.model);
      const q = c.value?.query;
      if (q)
        try {
          const H = await fetch(
            `${q.$id}?${new URLSearchParams({ [x.refId]: v.value, take: 1 })}`,
            { headers: { Accept: "application/json" } }
          ), P = H.ok ? (ue(await H.json(), "results") ?? [])[0] : null;
          P && (d.value = String(ue(P, x.refLabel) ?? v.value));
        } catch {
        }
    }
    function p(x) {
      const C = i.value;
      e.model[e.id] = ue(x, C.refId), d.value = String(ue(x, C.refLabel) ?? ""), a.value = !1, t("update:modelValue", e.model);
    }
    function k() {
      e.model[e.id] = null, d.value = "", t("update:modelValue", e.model);
    }
    return ot(a, (x) => {
      x && l.loadModel(i.value?.model);
    }), Qe(y), {
      open: a,
      refInfo: i,
      refIcon: r,
      refSchema: c,
      value: v,
      display: m,
      error: $,
      pickerColumns: g,
      // a picker is a different view of the Model to the page's grid, so it keeps its
      // own visible columns rather than overwriting the ones chosen there
      prefsKey: f(() => `auto:prefs:${i.value?.model}:lookup`),
      pick: p,
      clear: k
    };
  }
}, og = { class: "lookup-field" }, rg = { class: "flex justify-between" }, ig = ["for"], ug = {
  key: 0,
  class: "flex items-center"
}, dg = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, cg = { class: "mt-1 relative" }, fg = { class: "w-full inline-flex truncate" }, mg = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, vg = {
  key: 0,
  class: "mt-2 text-sm text-red-500"
}, pg = {
  key: 1,
  class: "mt-2 text-sm text-gray-500"
}, gg = { class: "px-6 py-4 border-b border-gray-200 dark:border-gray-700" }, yg = { class: "text-base font-semibold" }, hg = { class: "px-6 py-4 max-h-[70vh] overflow-y-auto" }, bg = {
  key: 1,
  class: "py-8 text-center text-xs text-gray-500 dark:text-gray-400"
};
function wg(e, t, l, n, a, d) {
  const i = E("Icon"), r = E("SchemaResults"), c = E("ModalDialog");
  return o(), u("div", og, [
    s("div", rg, [
      s("label", {
        for: e.id,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, S(e.label), 9, ig),
      e.value != null && e.value !== "" ? (o(), u("div", ug, [
        s("span", dg, S(e.value), 1),
        s("button", {
          type: "button",
          onClick: t[0] || (t[0] = (...v) => e.clear && e.clear(...v)),
          title: "clear",
          class: "mr-1 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-400"
        }, [...t[3] || (t[3] = [
          s("span", { class: "sr-only" }, "Clear", -1),
          s("svg", {
            class: "h-4 w-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M6 18L18 6M6 6l12 12"
            })
          ], -1)
        ])])
      ])) : w("", !0)
    ]),
    s("div", cg, [
      s("button", {
        type: "button",
        onClick: t[1] || (t[1] = (v) => e.open = !0),
        class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      }, [
        s("span", fg, [
          s("span", mg, [
            e.refIcon ? (o(), Z(i, {
              key: 0,
              class: "mr-1 w-5 h-5",
              image: e.refIcon
            }, null, 8, ["image"])) : w("", !0),
            s("span", null, S(e.display), 1)
          ])
        ]),
        t[4] || (t[4] = s("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
          s("svg", {
            class: "h-5 w-5 text-gray-400",
            viewBox: "0 0 20 20",
            fill: "currentColor"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: `M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414
                            7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414
                            0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z`,
              "clip-rule": "evenodd"
            })
          ])
        ], -1))
      ])
    ]),
    e.error ? (o(), u("p", vg, S(e.error), 1)) : e.help ? (o(), u("p", pg, S(e.help), 1)) : w("", !0),
    (o(), Z(ta, { to: "body" }, [
      e.open ? (o(), Z(c, {
        key: 0,
        id: e.id + "-lookup",
        "size-class": "sm:max-w-6xl sm:w-full",
        onDone: t[2] || (t[2] = (v) => e.open = !1)
      }, {
        default: we(() => [
          s("div", gg, [
            s("h3", yg, "Select " + S(e.refInfo?.model), 1)
          ]),
          s("div", hg, [
            e.refSchema ? (o(), Z(r, {
              key: 0,
              schema: e.refSchema,
              "prefs-key": e.prefsKey,
              "column-order": e.pickerColumns,
              selectable: "",
              onRowSelected: e.pick
            }, null, 8, ["schema", "prefs-key", "column-order", "onRowSelected"])) : (o(), u("p", bg, "Loading…"))
          ])
        ]),
        _: 1
      }, 8, ["id"])) : w("", !0)
    ]))
  ]);
}
const ao = /* @__PURE__ */ Ct(ag, [["render", wg]]);
function Dn(e, t) {
  if (Array.isArray(e)) return e.map((a) => Dn(a, t?.items));
  if (!e || typeof e != "object" || !t?.properties) return e;
  const l = Object.keys(t.properties), n = {};
  for (const [a, d] of Object.entries(e)) {
    const i = l.find((r) => r.toLowerCase() === a.toLowerCase()) ?? a;
    n[i] = Dn(d, t.properties[i]);
  }
  return n;
}
const kg = {
  components: { JsonSchemaForm: so, SchemaLookup: ao },
  props: {
    name: String,
    prop: Object,
    schema: Object,
    status: { type: Object, default: null },
    spanClass: { type: String, default: null },
    model: { type: Object, default: null },
    // whole form model, for LookupInput
    modelValue: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = f(() => e.prop.ui || {}), l = f(() => (e.schema?.required || []).includes(e.name)), n = f(() => t.value.widget === "textarea" || e.prop.type === "object"), a = f(() => !!e.model && !!t.value.ref), d = f(() => t.value.widget === "file"), i = f(() => {
      const g = e.prop;
      return g.type === "object" && g.properties ? !0 : g.type === "array" && g.items?.type === "object" && !!g.items.properties;
    });
    let r = null, c;
    const v = f(() => {
      const g = e.modelValue;
      return g !== c && g !== r && (c = g, r = g != null ? Dn(g, e.prop) : e.prop.type === "array" ? [] : {}), r;
    }), m = f(() => {
      const g = e.name.toLowerCase(), y = (e.status?.errors ?? []).filter((p) => String(p.fieldName ?? "").toLowerCase().startsWith(g)).map((p) => ({ ...p, fieldName: p.fieldName.slice(e.name.length) }));
      return y.length ? { errors: y } : null;
    }), $ = f(() => e.prop.type === "array");
    return {
      isTextarea: n,
      lookup: a,
      isFile: d,
      isMultiple: $,
      isComplex: i,
      complexValue: v,
      scopedStatus: m,
      accept: f(() => t.value.accept),
      // already the { fileName, filePath, contentType, contentLength } shape FileInput wants
      uploadedFiles: f(() => Array.isArray(e.modelValue) ? e.modelValue : []),
      // LookupInput mutates the model in place and emits it, so pull our value back out
      modelOf: (g) => ue(g, e.name),
      label: f(() => (e.prop.title || e.name) + (l.value ? " *" : "")),
      help: f(() => t.value.help),
      placeholder: f(() => t.value.placeholder),
      span: f(() => e.spanClass ?? (i.value || n.value || t.value.fieldCss?.includes("col-span-12") ? "col-span-12" : "col-span-12 sm:col-span-6 2xl:col-span-4")),
      // SelectInput has no empty option of its own, so optional enums need one to be unset
      entries: f(() => (l.value ? [] : [{ key: "", value: "" }]).concat(
        (e.prop.enum || []).map((g) => ({ key: g, value: t.value.enumDescriptions?.[g] || g }))
      )),
      type: f(() => e.prop.type === "integer" || e.prop.type === "number" ? "number" : e.prop.format === "date-time" ? "datetime-local" : e.prop.format === "email" ? "email" : e.prop.format === "uri" ? "url" : t.value.widget === "password" ? "password" : "text"),
      attrs: f(() => {
        const g = {};
        return e.prop.minimum != null && (g.min = e.prop.minimum), e.prop.maximum != null && (g.max = e.prop.maximum), t.value.step != null && (g.step = t.value.step), e.prop.maxLength != null && (g.maxlength = e.prop.maxLength), e.prop.pattern && (g.pattern = e.prop.pattern), g;
      }),
      textValue: f(() => {
        const g = e.modelValue;
        return g == null ? "" : e.prop.type === "object" ? JSON.stringify(g, null, 2) : e.prop.format === "date-time" ? String(g).slice(0, 16) : g;
      })
    };
  }
}, xg = {
  key: 0,
  class: "mt-2 text-sm text-gray-500"
}, $g = {
  key: 0,
  class: "mt-2 text-sm text-gray-500"
};
function Cg(e, t, l, n, a, d) {
  const i = E("SchemaLookup"), r = E("FileInput"), c = E("JsonSchemaForm"), v = E("SelectInput"), m = E("CheckboxInput"), $ = E("TextareaInput"), g = E("TagInput"), y = E("TextInput");
  return e.lookup ? (o(), Z(i, {
    key: 0,
    id: e.name,
    class: h(e.span),
    label: e.label,
    help: e.help,
    status: e.status,
    prop: e.prop,
    model: e.model,
    "onUpdate:modelValue": t[0] || (t[0] = (p) => e.$emit("update:modelValue", e.modelOf(p)))
  }, null, 8, ["id", "class", "label", "help", "status", "prop", "model"])) : e.isFile ? (o(), Z(r, {
    key: 1,
    id: e.name,
    class: h(e.span),
    label: e.label,
    help: e.help,
    status: e.status,
    multiple: e.isMultiple,
    files: e.isMultiple ? e.uploadedFiles : void 0,
    "model-value": e.isMultiple ? void 0 : typeof e.modelValue == "string" ? e.modelValue : "",
    accept: e.accept
  }, null, 8, ["id", "class", "label", "help", "status", "multiple", "files", "model-value", "accept"])) : e.isComplex ? (o(), u("div", {
    key: 2,
    class: h(e.span)
  }, [
    he(c, {
      schema: e.prop,
      "model-value": e.complexValue,
      status: e.scopedStatus,
      "show-title": e.prop.type !== "array",
      onChange: t[1] || (t[1] = (p) => e.$emit("update:modelValue", p))
    }, null, 8, ["schema", "model-value", "status", "show-title"]),
    e.help ? (o(), u("p", xg, S(e.help), 1)) : w("", !0)
  ], 2)) : e.prop.enum ? (o(), u("div", {
    key: 3,
    class: h(e.span)
  }, [
    he(v, {
      id: e.name,
      label: e.label,
      status: e.status,
      entries: e.entries,
      "model-value": e.modelValue,
      "onUpdate:modelValue": t[2] || (t[2] = (p) => e.$emit("update:modelValue", p))
    }, null, 8, ["id", "label", "status", "entries", "model-value"]),
    e.help ? (o(), u("p", $g, S(e.help), 1)) : w("", !0)
  ], 2)) : e.prop.type === "boolean" ? (o(), Z(m, {
    key: 4,
    id: e.name,
    class: h(e.span),
    label: e.label,
    help: e.help,
    status: e.status,
    "model-value": !!e.modelValue,
    "onUpdate:modelValue": t[3] || (t[3] = (p) => e.$emit("update:modelValue", p))
  }, null, 8, ["id", "class", "label", "help", "status", "model-value"])) : e.isTextarea ? (o(), Z($, {
    key: 5,
    id: e.name,
    class: h(e.span),
    label: e.label,
    help: e.help,
    status: e.status,
    placeholder: e.placeholder,
    "model-value": e.textValue,
    "onUpdate:modelValue": t[4] || (t[4] = (p) => e.$emit("update:modelValue", p))
  }, null, 8, ["id", "class", "label", "help", "status", "placeholder", "model-value"])) : e.prop.type === "array" ? (o(), Z(g, {
    key: 6,
    id: e.name,
    class: h(e.span),
    label: e.label,
    help: e.help,
    status: e.status,
    "model-value": e.modelValue ?? [],
    "onUpdate:modelValue": t[5] || (t[5] = (p) => e.$emit("update:modelValue", p))
  }, null, 8, ["id", "class", "label", "help", "status", "model-value"])) : (o(), Z(y, Se({
    key: 7,
    id: e.name,
    class: e.span,
    type: e.type,
    label: e.label,
    help: e.help,
    status: e.status,
    placeholder: e.placeholder
  }, e.attrs, {
    "model-value": e.textValue,
    "onUpdate:modelValue": t[6] || (t[6] = (p) => e.$emit("update:modelValue", p))
  }), null, 16, ["id", "class", "type", "label", "help", "status", "placeholder", "model-value"]));
}
const oo = /* @__PURE__ */ Ct(kg, [["render", Cg]]), Sg = ["skip", "edit", "new", "orderBy"], Lg = (e) => Array.from(e.matchAll(/\{(\w+)\}/g)).map((t) => t[1]), Vg = (e) => Object.entries(e?.properties || {}).map(([t, l]) => ({ name: t, prop: l })), Mg = (e) => e?.description !== e?.title ? e?.description : null, wn = (e) => e ? { request: { name: e.title }, ...e.auth || {} } : null, qs = (e, t = null) => {
  if (e == null || e === "" || Array.isArray(e) && e.length === 0) return !0;
  if (t?.type === "integer" || t?.type === "number" || typeof e == "number") {
    const n = Number(e);
    if (Number.isFinite(n) && n === 0) return !0;
  }
  return !1;
};
function Tg(e, t, l) {
  return e === t ? !1 : e == null || t == null || typeof e == "object" || typeof t == "object" ? !0 : l?.format === "date-time" ? String(e).slice(0, 16) !== String(t).slice(0, 16) : String(e) !== String(t);
}
function Ag(e, t, l, { original: n = null, primaryKey: a = null } = {}) {
  const d = e.method || "POST", i = Lg(e.$id);
  let r = hs(e.$id, t);
  const c = e.operation === "Patch" && n != null, v = [], m = {};
  for (const p of Object.keys(e.properties || {})) {
    if (i.includes(p)) continue;
    const k = ue(t, p), x = c ? ue(n, p) : void 0, C = e.properties[p];
    qs(k, C) ? c && !qs(x, C) && v.push(p) : (!c || p === a || Tg(k, x, C)) && (m[p] = k);
  }
  v.length && (r += (r.includes("?") ? "&" : "?") + new URLSearchParams({ reset: v.join(",") }));
  const $ = { Accept: "application/json" }, g = l && d !== "GET" && d !== "DELETE" ? [...l.querySelectorAll("input[type=file]")].filter((p) => p.files?.length) : [];
  let y = null;
  if (d === "GET" || d === "DELETE") {
    const p = new URLSearchParams();
    for (const [k, x] of Object.entries(m)) p.append(k, Array.isArray(x) ? x.join(",") : x);
    [...p].length && (r += (r.includes("?") ? "&" : "?") + p);
  } else if (g.length) {
    const p = new FormData(), k = g.map((x) => x.name);
    for (const [x, C] of Object.entries(m))
      k.includes(x) || p.append(x, Array.isArray(C) ? C.join(",") : C);
    for (const x of g)
      for (const C of x.files) p.append(x.name, C);
    y = p;
  } else
    $["Content-Type"] = "application/json", y = JSON.stringify(m);
  return { method: d, url: r, headers: $, body: m, payload: y, uploads: g.map((p) => p.name) };
}
async function zs(e, t, l, n = {}) {
  const { method: a, url: d, headers: i, payload: r } = Ag(e, t, l, n), c = await fetch(d, { method: a, headers: i, body: r ?? void 0 }), v = await c.text(), m = v ? JSON.parse(v) : null;
  if (!c.ok)
    throw ue(m || {}, "responseStatus") || { message: `${c.status} ${c.statusText}`, errors: [] };
  return m;
}
const tb = { query: "View", create: "Create", update: "Edit", delete: "Delete", save: "Save" };
function lb(e) {
  const t = [];
  return e.requiredRoles && t.push(yl(e.requiredRoles, "role")), e.requiresAnyRole && t.push("any " + yl(e.requiresAnyRole, "role")), e.requiredPermissions && t.push(yl(e.requiredPermissions, "permission")), e.requiresAnyPermission && t.push("any " + yl(e.requiresAnyPermission, "permission")), e.requiredScopes && t.push(yl(e.requiredScopes, "scope")), e.requiresApiKey && t.push("an API Key"), !t.length && e.requiresAuth && t.push("you to be signed in"), t.join(" and ");
}
const yl = (e, t) => e.join(", ") + " " + t + (e.length > 1 ? "s" : "");
function Og(e) {
  const t = [], l = (n) => {
    for (const a of n ?? [])
      typeof a.children == "string" ? t.push(a.children) : Array.isArray(a.children) && l(a.children);
  };
  try {
    l(e.default?.());
  } catch {
    return "";
  }
  return t.join("").trim();
}
const Fg = {
  name: "AutoQuerySchema",
  components: { SchemaInput: oo, SchemaResults: bs },
  props: {
    /** the AutoQuery Schema to render. Optional - falls back to parsing the component's body */
    schema: { type: Object, default: null },
    /** the current session, as an AuthenticateResponse. null when signed out */
    auth: { type: Object, default: null },
    /** an optional JsonServiceClient; one is created and provided if omitted */
    client: { type: Object, default: null },
    /** rows per page, until the user picks their own in Query Preferences */
    take: { type: Number, default: 25 }
  },
  setup(e) {
    const t = fl(), l = e.schema ?? JSON.parse(Og(t) || "{}"), n = e.take, a = e.client ?? new Zo();
    Qt("client", a), e.auth && Tl().signIn(e.auth);
    const { canAccess: d } = Tl(), i = je()?.appContext.config.globalProperties, r = i?.$router;
    if (!i?.$route || !r) throw new Error("AutoQuerySchema requires app.use(router)");
    const c = f(() => i.$route), v = l.primaryKey || "Id", m = O(null), $ = O([]), g = O(!1), y = O(null), p = f(() => d(wn(l.create))), k = f(() => d(wn(l.update))), x = f(() => d(wn(l.delete))), C = f(() => !!l.update), q = f(() => y.value?.key === "create" ? p.value : k.value), H = f(() => Vg(y.value?.schema)), P = f(() => {
      const b = Object.keys(y.value?.schema?.properties ?? {});
      return (y.value?.error?.errors ?? []).map((N) => N.fieldName).filter((N) => b.some((me) => String(N ?? "").toLowerCase().startsWith(me.toLowerCase())));
    }), X = f(() => Object.fromEntries(Object.entries(c.value.query).filter(([b, N]) => !Sg.includes(b) && N != null && N !== ""))), J = f(() => String(c.value.query.orderBy || "")), F = f(() => Math.max(0, parseInt(c.value.query.skip) || 0)), T = f(() => c.value.query.edit), oe = f(() => c.value.query.new != null), re = f(() => ({ filters: X.value, orderBy: J.value, skip: F.value }));
    function z(b) {
      const N = Object.fromEntries(Object.keys(X.value).map((me) => [me, void 0]));
      Object.assign(N, b.filters), N.orderBy = b.orderBy || void 0, N.skip = b.skip || void 0, G(N);
    }
    function G(b) {
      const N = { ...c.value.query, ...b };
      for (const me of Object.keys(N))
        (N[me] == null || N[me] === "") && delete N[me];
      r.push({ query: N });
    }
    const ee = () => G({ new: 1, edit: void 0 }), j = (b) => G({ edit: ue(b, v), new: void 0 }), U = () => {
      T.value == null && !oe.value || G({ edit: void 0, new: void 0 });
    };
    async function A(b) {
      try {
        const N = new URLSearchParams({ [v]: b, take: 1 }), me = hs(l.query.$id, {}) + "?" + N, te = await fetch(me, { headers: { Accept: "application/json" } });
        return te.ok ? (ue(await te.json(), "results") || [])[0] : null;
      } catch {
        return null;
      }
    }
    function L(b, N) {
      const me = l[b];
      if (!me) return !1;
      const te = {};
      if (N) for (const Y of Object.keys(me.properties || {})) {
        const R = ue(N, Y);
        R != null && (te[Y] = R);
      }
      return y.value = { key: b, schema: me, row: N, data: te, error: null }, !0;
    }
    async function M() {
      if (oe.value) {
        L("create") || U();
        return;
      }
      if (T.value == null) {
        y.value = null;
        return;
      }
      if (!l.update) {
        U();
        return;
      }
      const b = $.value.find((N) => String(ue(N, v)) === String(T.value)) ?? await A(T.value);
      b ? L("update", b) : U();
    }
    async function fe(b) {
      g.value = !0;
      try {
        await zs(
          y.value.schema,
          y.value.data,
          b?.target,
          { original: y.value.row, primaryKey: v }
        ), U(), await m.value?.reload();
      } catch (N) {
        y.value.error = N;
      } finally {
        g.value = !1;
      }
    }
    async function V() {
      g.value = !0;
      try {
        await zs(l.delete, { ...y.value.row, ...y.value.data }), U(), await m.value?.reload();
      } catch (b) {
        y.value.error = b;
      } finally {
        g.value = !1;
      }
    }
    return ot(() => [T.value, oe.value].join("|"), M), ot($, M), Qe(M), {
      Auto: l,
      results: m,
      rows: $,
      loading: g,
      form: y,
      boundFields: P,
      formProps: H,
      query: re,
      onQuery: z,
      take: n,
      canCreate: p,
      canUpdate: k,
      canDelete: x,
      canOpenRow: C,
      canSubmit: q,
      formSubtitle: f(() => Mg(y.value?.schema)),
      openCreate: ee,
      rowSelected: j,
      closeForm: U,
      submitForm: fe,
      deleteRow: V
    };
  }
}, jg = { class: "px-6 py-4 border-b border-gray-200 dark:border-gray-700" }, Ig = { class: "text-base font-semibold" }, Pg = ["innerHTML"], Bg = { class: "px-6 py-5 max-h-[60vh] overflow-y-auto" }, Eg = { class: "grid grid-cols-12 gap-4" }, Dg = { class: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2" }, Ng = {
  key: 0,
  class: "flex items-center"
};
function Rg(e, t, l, n, a, d) {
  const i = E("PrimaryButton"), r = E("SchemaResults"), c = E("ErrorSummary"), v = E("SchemaInput"), m = E("ConfirmDelete"), $ = E("SecondaryButton"), g = E("ModalDialog");
  return o(), u("div", null, [
    he(r, {
      ref: "results",
      schema: e.Auto,
      query: e.query,
      "onUpdate:query": e.onQuery,
      take: e.take,
      selectable: e.canOpenRow,
      onRowSelected: e.rowSelected,
      onLoaded: t[0] || (t[0] = (y) => e.rows = y.results)
    }, {
      toolbar: we(() => [
        e.canCreate ? (o(), Z(i, {
          key: 0,
          onClick: e.openCreate
        }, {
          default: we(() => [
            ye(S(e.Auto.create.ui?.submitLabel || "New"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : w("", !0)
      ]),
      _: 1
    }, 8, ["schema", "query", "onUpdate:query", "take", "selectable", "onRowSelected"]),
    e.form ? (o(), Z(g, {
      key: 0,
      id: "autoForm",
      "size-class": "sm:max-w-3xl 2xl:max-w-6xl sm:w-full",
      onDone: e.closeForm
    }, {
      default: we(() => [
        s("form", {
          onSubmit: t[1] || (t[1] = Re((y) => e.submitForm(y), ["prevent"]))
        }, [
          s("div", jg, [
            s("h3", Ig, S(e.form.schema.title), 1),
            e.formSubtitle ? (o(), u("p", {
              key: 0,
              class: "text-gray-500 dark:text-gray-400 mt-0.5",
              innerHTML: e.formSubtitle
            }, null, 8, Pg)) : w("", !0)
          ]),
          s("div", Bg, [
            e.form.error ? (o(), Z(c, {
              key: 0,
              status: e.form.error,
              except: e.boundFields,
              class: "mb-4"
            }, null, 8, ["status", "except"])) : w("", !0),
            s("div", Eg, [
              (o(!0), u(ge, null, be(e.formProps, (y) => (o(), Z(v, {
                key: y.name,
                name: y.name,
                prop: y.prop,
                schema: e.form.schema,
                status: e.form.error,
                model: e.form.data,
                modelValue: e.form.data[y.name],
                "onUpdate:modelValue": (p) => e.form.data[y.name] = p
              }, null, 8, ["name", "prop", "schema", "status", "model", "modelValue", "onUpdate:modelValue"]))), 128))
            ])
          ]),
          s("div", Dg, [
            e.form.key === "update" && e.canDelete ? (o(), u("div", Ng, [
              he(m, { onDelete: e.deleteRow }, {
                default: we(() => [
                  ye(S(e.Auto.delete.ui?.submitLabel || "Delete"), 1)
                ]),
                _: 1
              }, 8, ["onDelete"])
            ])) : w("", !0),
            t[3] || (t[3] = s("span", { class: "flex-1" }, null, -1)),
            he($, {
              type: "button",
              onClick: e.closeForm
            }, {
              default: we(() => [...t[2] || (t[2] = [
                ye("Cancel", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            e.canSubmit ? (o(), Z(i, {
              key: 1,
              type: "submit",
              disabled: e.loading
            }, {
              default: we(() => [
                ye(S(e.form.schema.ui?.submitLabel || "Submit"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : w("", !0)
          ])
        ], 32)
      ]),
      _: 1
    }, 8, ["onDone"])) : w("", !0)
  ]);
}
const Hg = /* @__PURE__ */ Ct(Fg, [["render", Rg]]), { formatValue: Us, Formats: qg } = Ra(), kn = (e) => e == null || typeof e != "object", zg = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), Ks = (e) => /^https?:\/\/\S+$/i.test(e) || /^\/[^\s"']*$/.test(e), Qs = (e) => /\.(png|jpe?g|gif|svg|webp|avif)(\?|$)/i.test(e), Js = (e) => /^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}|$)/.test(e), Ug = 3, Kg = {
  name: "JsonView",
  props: {
    value: { default: null },
    depth: { type: Number, default: 0 }
  },
  setup(e) {
    const t = f(() => typeof e.value == "string" ? e.value : null), l = f(() => Array.isArray(e.value) ? e.value : null), n = f(() => Object.entries(e.value ?? {}).map(([a, d]) => ({ key: a, label: Cl(a), value: d })));
    return {
      entries: n,
      label: Cl,
      scalarValue: f(() => kn(e.value)),
      date: f(() => t.value != null && Js(t.value)),
      image: f(() => t.value != null && Ks(t.value) && Qs(t.value)),
      link: f(() => t.value == null ? null : zg(t.value) ? `mailto:${t.value}` : Ks(t.value) && !Qs(t.value) ? t.value : null),
      // dates and numbers read the same here as they do in a data grid. formatValue()
      // leaves an ISO string alone unless told it's a date, and a timestamp that carries
      // a real time of day shouldn't lose it to a date-only format
      scalar: f(() => {
        if (!(t.value != null && Js(t.value))) return Us(e.value);
        const a = Us(t.value, qg.date);
        if (!/[T ]\d{2}:\d{2}/.test(t.value) || /[T ]00:00(:00(\.0+)?)?Z?$/.test(t.value))
          return a;
        const d = new Date(t.value).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
        return `${a}, ${d}`;
      }),
      isEmptyList: f(() => l.value?.length === 0),
      scalarList: f(() => l.value?.length > 0 && l.value.every(kn)),
      // the union of every row's keys, so a row missing one still lines up
      columns: f(() => l.value ? Xl(l.value) : []),
      isEmptyObject: f(() => !kn(e.value) && !l.value && n.value.length === 0),
      folded: f(() => e.depth >= Ug && n.value.length > 0)
    };
  }
};
function nb(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return { data: e, key: null };
  const t = Object.keys(e), l = t.find((n) => n.toLowerCase() === "results") ?? t.find((n) => n.toLowerCase() === "result");
  return l == null || e[l] == null ? { data: e, key: null } : { data: e[l], key: l, envelope: e };
}
const Qg = {
  key: 0,
  class: "text-gray-400 dark:text-gray-600 italic"
}, Jg = {
  class: "w-3 h-3",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  viewBox: "0 0 24 24"
}, Zg = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m4.5 12.75 6 6 9-13.5"
}, Gg = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18 18 6M6 6l12 12"
}, Wg = {
  key: 2,
  class: "tabular-nums"
}, Xg = ["datetime", "title"], Yg = ["src", "alt"], _g = ["href", "target"], ey = {
  key: 6,
  class: "whitespace-pre-wrap break-normal min-w-max"
}, ty = {
  key: 7,
  class: "text-gray-400 dark:text-gray-600 italic"
}, ly = {
  key: 8,
  class: "flex flex-wrap gap-1"
}, ny = {
  key: 9,
  class: "overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800"
}, sy = { class: "overflow-x-auto" }, ay = { class: "w-max min-w-full text-left" }, oy = { class: "caption-top px-3 py-1.5 text-left text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800" }, ry = { class: "bg-gray-50 dark:bg-gray-900" }, iy = { class: "divide-y divide-gray-200 dark:divide-gray-800" }, uy = {
  key: 10,
  class: "text-gray-400 dark:text-gray-600 italic"
}, dy = {
  key: 11,
  class: "group"
}, cy = { class: "cursor-pointer text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 select-none" }, fy = { class: "mt-1 grid grid-cols-[auto_auto] gap-x-3 gap-y-1 border-l-2 border-gray-200 dark:border-gray-800 pl-3 min-w-max" }, my = { class: "text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap pt-0.5" }, vy = { class: "min-w-max" }, py = { class: "min-w-max" };
function gy(e, t, l, n, a, d) {
  const i = E("JsonView", !0);
  return e.value == null ? (o(), u("span", Qg, "null")) : typeof e.value == "boolean" ? (o(), u("span", {
    key: 1,
    class: h([
      "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium",
      e.value ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
    ])
  }, [
    (o(), u("svg", Jg, [
      e.value ? (o(), u("path", Zg)) : (o(), u("path", Gg))
    ])),
    ye(" " + S(e.value), 1)
  ], 2)) : typeof e.value == "number" ? (o(), u("span", Wg, S(e.scalar), 1)) : e.date ? (o(), u("time", {
    key: 3,
    datetime: e.value,
    title: e.value
  }, S(e.scalar), 9, Xg)) : e.image ? (o(), u("img", {
    key: 4,
    src: e.value,
    alt: e.value,
    loading: "lazy",
    class: "max-h-16 rounded border border-gray-200 dark:border-gray-800"
  }, null, 8, Yg)) : e.link ? (o(), u("a", {
    key: 5,
    href: e.link,
    target: e.link.startsWith("mailto:") ? null : "_blank",
    rel: "noopener",
    class: "text-indigo-600 dark:text-indigo-400 hover:underline break-all"
  }, S(e.value), 9, _g)) : e.scalarValue ? (o(), u("span", ey, S(e.scalar), 1)) : e.isEmptyList ? (o(), u("span", ty, "no items")) : e.scalarList ? (o(), u("ol", ly, [
    (o(!0), u(ge, null, be(e.value, (r, c) => (o(), u("li", {
      key: c,
      class: "rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-xs"
    }, [
      he(i, {
        value: r,
        depth: e.depth + 1
      }, null, 8, ["value", "depth"])
    ]))), 128))
  ])) : Array.isArray(e.value) ? (o(), u("div", ny, [
    s("div", sy, [
      s("table", ay, [
        s("caption", oy, S(e.value.length) + " " + S(e.value.length === 1 ? "row" : "rows"), 1),
        s("thead", ry, [
          s("tr", null, [
            (o(!0), u(ge, null, be(e.columns, (r) => (o(), u("th", {
              key: r,
              scope: "col",
              class: "px-3 py-2 font-semibold whitespace-nowrap text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            }, S(e.label(r)), 1))), 128))
          ])
        ]),
        s("tbody", iy, [
          (o(!0), u(ge, null, be(e.value, (r, c) => (o(), u("tr", {
            key: c,
            class: h(c % 2 ? "bg-gray-50/60 dark:bg-gray-900/40" : "")
          }, [
            (o(!0), u(ge, null, be(e.columns, (v) => (o(), u("td", {
              key: v,
              class: "px-3 py-2 align-top"
            }, [
              he(i, {
                value: r?.[v],
                depth: e.depth + 1
              }, null, 8, ["value", "depth"])
            ]))), 128))
          ], 2))), 128))
        ])
      ])
    ])
  ])) : e.isEmptyObject ? (o(), u("span", uy, "no fields")) : e.folded ? (o(), u("details", dy, [
    s("summary", cy, S(e.entries.length) + " " + S(e.entries.length === 1 ? "field" : "fields"), 1),
    s("dl", fy, [
      (o(!0), u(ge, null, be(e.entries, (r) => (o(), u(ge, {
        key: r.key
      }, [
        s("dt", my, S(r.label), 1),
        s("dd", vy, [
          he(i, {
            value: r.value,
            depth: e.depth + 1
          }, null, 8, ["value", "depth"])
        ])
      ], 64))), 128))
    ])
  ])) : (o(), u("dl", {
    key: 12,
    class: h([
      "grid grid-cols-[auto_auto] gap-x-3 min-w-max",
      e.depth === 0 ? "gap-y-2" : "gap-y-1",
      e.depth > 0 ? "border-l-2 border-gray-200 dark:border-gray-800 pl-3" : ""
    ])
  }, [
    (o(!0), u(ge, null, be(e.entries, (r) => (o(), u(ge, {
      key: r.key
    }, [
      s("dt", {
        class: h([
          "whitespace-nowrap text-gray-500 dark:text-gray-400",
          e.depth === 0 ? "font-medium pt-0.5" : "text-xs pt-0.5"
        ])
      }, S(r.label), 3),
      s("dd", py, [
        he(i, {
          value: r.value,
          depth: e.depth + 1
        }, null, 8, ["value", "depth"])
      ])
    ], 64))), 128))
  ], 2));
}
const yy = /* @__PURE__ */ Ct(Kg, [["render", gy]]), hy = {
  props: {
    name: String,
    alias: String
  },
  setup(e) {
    const t = Ne("routes"), l = `-${e.name}`;
    function n() {
      const a = t.sort === e.name ? l : t.sort === l ? "" : e.name;
      t.to({ sort: a });
    }
    return { routes: t, toggle: n, humanify: Cl };
  }
}, by = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, wy = {
  key: 1,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
function ky(e, t, l, n, a, d) {
  return o(), u("div", {
    class: "cursor-pointer flex items-center",
    onClick: t[0] || (t[0] = (i) => e.toggle())
  }, [
    s("span", null, S(e.alias ?? e.humanify(e.name)), 1),
    e.routes.sort === e.name ? (o(), u("svg", by, [...t[1] || (t[1] = [
      s("g", { fill: "none" }, [
        s("path", {
          d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
          fill: "currentColor"
        })
      ], -1)
    ])])) : e.routes.sort === "-" + e.name ? (o(), u("svg", wy, [...t[2] || (t[2] = [
      s("g", { fill: "none" }, [
        s("path", {
          d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
          fill: "currentColor"
        })
      ], -1)
    ])])) : w("", !0)
  ]);
}
const xy = /* @__PURE__ */ Ct(hy, [["render", ky]]), $y = _r, Cy = ri, Sy = ci, Ly = mi, Vy = Wa, My = gi, Ty = bi, Ay = xi, Oy = Si, Fy = Li, jy = Oi, Iy = Pi, Py = Di, By = Ji, Ey = kd, Dy = Ld, Ny = ps, Ry = vs, Hy = gs, qy = Xa, zy = Vd, Uy = Id, Ky = Hd, Qy = Jd, Jy = tc, Zy = bc, Gy = Rc, Wy = Wc, Xy = _c, Yy = e0, _y = f0, eh = m0, th = F0, lh = X0, nh = yf, sh = If, ah = Pf, oh = Nf, rh = Uf, ih = Kf, uh = Xf, dh = tm, ch = sm, fh = am, mh = im, vh = xm, ph = Vm, gh = sv, yh = mv, hh = vv, bh = Tv, wh = Nv, kh = Qv, xh = Hg, $h = so, Ch = yy, Sh = _a, Lh = ao, Vh = bs, Mh = xy, Th = oo, Ah = {
  Alert: $y,
  AlertSuccess: Cy,
  ErrorSummary: Sy,
  InputDescription: Ly,
  Icon: Vy,
  Loading: My,
  OutlineButton: Ty,
  PrimaryButton: Ay,
  SecondaryButton: Oy,
  TextLink: Fy,
  Breadcrumbs: jy,
  Breadcrumb: Iy,
  NavList: Py,
  NavListItem: By,
  AutoQueryGrid: Ey,
  SettingsIcons: Dy,
  FilterViews: Ny,
  FilterColumn: Ry,
  QueryPrefs: Hy,
  EnsureAccess: qy,
  EnsureAccessDialog: zy,
  TextInput: Uy,
  TextareaInput: Ky,
  SelectInput: Qy,
  CheckboxInput: Jy,
  TagInput: Zy,
  FileInput: Gy,
  Autocomplete: Wy,
  Combobox: Xy,
  DynamicInput: Yy,
  LookupInput: _y,
  AutoFormFields: eh,
  AutoForm: th,
  AutoCreateForm: lh,
  AutoEditForm: nh,
  AutoViewForm: sh,
  ConfirmDelete: ah,
  FormLoading: oh,
  DataGrid: rh,
  CellFormat: ih,
  PreviewFormat: uh,
  HtmlFormat: dh,
  MarkupFormat: ch,
  MarkupModel: fh,
  CloseButton: mh,
  SlideOver: vh,
  ModalDialog: ph,
  ModalLookup: gh,
  Tabs: yh,
  DarkModeToggle: hh,
  SignIn: bh,
  MarkdownInput: wh,
  SidebarLayout: kh,
  AutoQuerySchema: xh,
  JsonSchemaForm: $h,
  JsonView: Ch,
  SchemaGrid: Sh,
  SchemaLookup: Lh,
  SchemaResults: Vh,
  SortableColumn: Mh,
  SchemaInput: Th
}, Oh = [
  { id: "csharp", label: "C#", ext: ".cs" },
  { id: "python", label: "Python", ext: ".py" },
  { id: "typescript", label: "TS", ext: ".ts" },
  { id: "javascript", label: "JS", ext: ".js" }
], Nn = {
  csharp: new Set("abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void volatile while".split(" ")),
  python: new Set("False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield".split(" ")),
  typescript: new Set("break case catch class const continue debugger default delete do else enum export extends false finally for function if import in instanceof new null return super switch this throw true try typeof var void while with".split(" "))
};
Nn.javascript = Nn.typescript;
const ro = (e) => String(e).replace(new RegExp("(\\p{Ll}|\\p{N})(\\p{Lu})", "gu"), "$1 $2").split(/[^\p{L}\p{N}]+/u).filter(Boolean), et = (e) => io(ro(e).map((t) => t[0].toUpperCase() + t.slice(1)).join("")) || "Value", sb = (e) => {
  const t = et(e);
  return t[0].toLowerCase() + t.slice(1);
}, Zs = (e) => io(ro(e).map((t) => t.toLowerCase()).join("_")) || "value";
function ll(e) {
  return /ies$/i.test(e) && e.length > 4 ? e.slice(0, -3) + "y" : /(ss|us|is)$/i.test(e) ? e : /(ches|shes|xes|zes|ses)$/i.test(e) ? e.slice(0, -2) : /s$/i.test(e) && e.length > 2 ? e.slice(0, -1) : e;
}
const ws = (e) => /^[\p{L}_$][\p{L}\p{N}_$]*$/u.test(e), io = (e) => new RegExp("^\\p{N}", "u").test(e) ? "_" + e : e, uo = /^\d{4}-\d{2}-\d{2}$/, Rn = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?$/, co = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, Pe = (e, t = {}) => ({ kind: e, ...t }), cl = Pe("any");
class Fh {
  constructor() {
    this.types = [], this.byShape = /* @__PURE__ */ new Map(), this.byRef = /* @__PURE__ */ new Map(), this.names = /* @__PURE__ */ new Set();
  }
  /** claim a name before its fields are built, so a recursive $ref can point back at it */
  reserve(t, l = !1) {
    const n = this.uniqueName(t, "", l);
    return this.names.add(n), n;
  }
  pushObject(t, l) {
    return this.types.push({ kind: "object", name: t, fields: l }), Pe("ref", { name: t });
  }
  uniqueName(t, l, n = !1) {
    let a = et(t) || "Type";
    if (!n && a === this.rootName && (a += "Info"), !this.names.has(a)) return a;
    for (let d = 2; d < 100; d++) {
      const i = `${a}${d}`;
      if (!this.names.has(i)) return i;
    }
    return `${a}_${l.length}`;
  }
  addObject(t, l, n = !1) {
    const a = JSON.stringify(t.map((r) => [r.key, Ol(r.type), r.optional])), d = this.byShape.get(a);
    if (d) return Pe("ref", { name: d });
    const i = this.uniqueName(l, a, n);
    return this.names.add(i), this.byShape.set(a, i), this.types.push({ kind: "object", name: i, fields: t }), Pe("ref", { name: i });
  }
  addEnum(t, l, n) {
    const a = "enum:" + JSON.stringify(t), d = this.byShape.get(a);
    if (d) return Pe("ref", { name: d });
    const i = this.uniqueName(l, a);
    return this.names.add(i), this.byShape.set(a, i), this.types.push({ kind: "enum", name: i, values: t, description: n }), Pe("ref", { name: i });
  }
}
const Ol = (e) => e.kind === "array" ? `[${Ol(e.of)}]` : e.kind === "map" ? `{${Ol(e.of)}}` : e.kind === "ref" ? e.name : e.kind, fo = (e) => {
  const t = Array.isArray(e.type) ? e.type.find((l) => l !== "null") : e.type;
  return t || (e.properties || e.additionalProperties ? "object" : e.items || e.prefixItems ? "array" : e.enum ? typeof e.enum[0] == "number" ? "number" : typeof e.enum[0] : e.const !== void 0 ? typeof e.const : "string");
}, jh = (e) => !!e.nullable || Array.isArray(e.type) && e.type.includes("null");
function mo(e, t, l = /* @__PURE__ */ new Set()) {
  if (!e?.$ref || l.has(e.$ref)) return e;
  l.add(e.$ref);
  let n = t;
  for (const i of e.$ref.replace(/^#\//, "").split("/"))
    n = n?.[decodeURIComponent(i.replace(/~1/g, "/").replace(/~0/g, "~"))];
  if (!n) return e;
  const { $ref: a, ...d } = e;
  return mo({ ...n, ...d }, t, l);
}
function Ih(e, t) {
  if (!e?.allOf?.length) return e;
  const { allOf: l, ...n } = e;
  return l.reduce((a, d) => {
    const i = Hn(d, t);
    return {
      ...a,
      ...i,
      properties: { ...a.properties ?? {}, ...i.properties ?? {} },
      required: [.../* @__PURE__ */ new Set([...a.required ?? [], ...i.required ?? []])]
    };
  }, n);
}
const Hn = (e, t) => Ih(mo(e ?? {}, t), t), Ph = (e) => e.length > 0 && e.every((t) => typeof t == "string" && /^[A-Za-z][A-Za-z0-9 _-]*$/.test(t));
function bl(e, t, l, n, a = /* @__PURE__ */ new Set(), d = !1, i = void 0) {
  const r = Hn(e, t), c = jh(r), v = r.title ? et(r.title) : et(n);
  if (r.enum && Ph(r.enum))
    return { ...l.addEnum(r.enum, v, r.description), nullable: c };
  if (r.enum || r.const !== void 0)
    return { ...Gs(r), nullable: c };
  switch (fo(r)) {
    case "object": {
      if (r.properties) {
        const g = e?.$ref;
        if (g && l.byRef.has(g)) return { kind: "ref", name: l.byRef.get(g), nullable: c };
        const y = g ? l.reserve(r.title ?? g.split("/").pop(), d) : null;
        g && l.byRef.set(g, y);
        const p = new Set(r.required ?? []), k = Object.entries(r.properties).map(([x, C]) => {
          const q = Hn(C, t);
          return {
            key: x,
            description: q.description,
            optional: !p.has(x),
            deprecated: !!q.deprecated,
            type: bl(C, t, l, ll(et(x)), a, !1, xn(i, x))
          };
        });
        return y ? { ...l.pushObject(y, k), nullable: c } : { ...l.addObject(k, v, d), nullable: c };
      }
      const m = r.additionalProperties;
      return { kind: "map", of: m && typeof m == "object" ? bl(m, t, l, `${v}Value`, a, !1, Object.values(i ?? {})[0]) : cl, nullable: c };
    }
    case "array":
      return r.prefixItems?.length ? {
        kind: "tuple",
        of: r.prefixItems.map(($, g) => bl($, t, l, `${v}${g + 1}`, a, !1, xn(i, g))),
        nullable: c
      } : { kind: "array", of: r.items ? bl(r.items, t, l, ll(v), a, !1, xn(i, 0)) : cl, nullable: c };
    default:
      return { ...Gs(r, i), nullable: c };
  }
}
const xn = (e, t) => e?.[t], Bh = (e, t) => typeof t != "string" ? !0 : e === "date" ? uo.test(t) || Rn.test(t) : e === "date-time" ? Rn.test(t) : e === "uuid" ? co.test(t) : !0;
function Gs(e, t) {
  const l = fo(e);
  if (l === "boolean") return Pe("boolean");
  if (l === "integer")
    return Pe(e.maximum > 2147483647 || e.minimum < -2147483648 ? "long" : "integer");
  if (l === "number") {
    const n = e.multipleOf != null && e.multipleOf < 1;
    return Pe(n ? "decimal" : "double");
  }
  if (l === "null") return Pe("any");
  switch (Bh(e.format, t) ? e.format : void 0) {
    case "date":
      return Pe("date");
    case "date-time":
      return Pe("datetime");
    case "uuid":
      return Pe("uuid");
    default:
      return Pe("string");
  }
}
function Eh(e) {
  const t = /* @__PURE__ */ new Map();
  for (const l of e)
    for (const [n, a] of Object.entries(l)) {
      t.has(n) || t.set(n, { values: [], count: 0 });
      const d = t.get(n);
      d.values.push(a), d.count++;
    }
  return { keys: t, total: e.length };
}
function ks(e, t, l, n = 0, a = !1) {
  if (e == null) return { ...cl, nullable: !0 };
  if (Array.isArray(e)) {
    if (!e.length) return { kind: "array", of: cl };
    const d = e.filter((i) => i && typeof i == "object" && !Array.isArray(i));
    if (d.length === e.length) {
      const { keys: i, total: r } = Eh(d), c = [...i.entries()].map(([v, m]) => ({
        key: v,
        optional: m.count < r || m.values.some(($) => $ === null),
        type: Ws(m.values, t, ll(et(v)), n + 1)
      }));
      return { kind: "array", of: t.addObject(c, ll(et(l))) };
    }
    return { kind: "array", of: Ws(e, t, ll(et(l)), n + 1) };
  }
  if (typeof e == "object") {
    const d = Object.entries(e).map(([i, r]) => ({
      key: i,
      optional: r === null,
      type: ks(r, t, ll(et(i)), n + 1)
    }));
    return t.addObject(d, et(l), a);
  }
  if (typeof e == "boolean") return Pe("boolean");
  if (typeof e == "number")
    return Number.isInteger(e) ? Pe(e > 2147483647 || e < -2147483648 ? "long" : "integer") : Pe("double");
  if (typeof e == "string") {
    if (co.test(e)) return Pe("uuid");
    if (Rn.test(e)) return Pe("datetime");
    if (uo.test(e)) return Pe("date");
  }
  return Pe("string");
}
function Ws(e, t, l, n) {
  const a = e.filter((c) => c != null);
  if (!a.length) return { ...cl, nullable: !0 };
  const d = a.map((c) => ks(c, t, l, n)), i = d[0];
  return d.every((c) => Ol(c) === Ol(i)) ? { ...i, nullable: a.length < e.length } : d.every((c) => c.kind === "integer" || c.kind === "double") ? Pe("double") : { ...cl, nullable: !0 };
}
const Dh = (e) => !!e && typeof e == "object" && !Array.isArray(e) && (e.$schema !== void 0 || e.properties !== void 0 || e.type !== void 0 && typeof e.type == "string");
function Nh({ name: e = "data.json", json: t, schema: l } = {}) {
  const n = new Fh(), a = et(String(e).replace(/\.ui\.json$/, "").replace(/\.[^.]+$/, "") || "Root");
  n.rootName = a;
  let d;
  return l && Dh(l) ? d = bl(l, l, n, l.title ? et(l.title) : a, /* @__PURE__ */ new Set(), !0, t) : d = ks(t, n, a, 0, !0), d.kind !== "ref" && n.types.push({ kind: "alias", name: n.uniqueName(a, "alias"), type: d }), { types: n.types, root: d };
}
function vo(e) {
  const t = /* @__PURE__ */ new Set(), l = (n) => {
    n && (t.add(n.kind), n.of && (Array.isArray(n.of) ? n.of : [n.of]).forEach(l));
  };
  for (const n of e)
    n.kind === "object" ? n.fields.forEach((a) => l(a.type)) : n.kind === "alias" ? l(n.type) : t.add(n.kind);
  return t;
}
const en = (e, t, l) => {
  let n = e;
  return ws(n) || (n = l), Nn[t]?.has(n) && (n = t === "csharp" ? "@" + n : n + "_"), n || l;
}, Xs = (e, t, l) => e ? e.split(`
`).map((n) => `${t}${l} ${n}`).join(`
`) + `
` : "", Rh = {
  string: "string",
  integer: "int",
  long: "long",
  double: "double",
  decimal: "decimal",
  boolean: "bool",
  date: "DateTime",
  datetime: "DateTime",
  uuid: "Guid",
  any: "object"
};
function $l(e) {
  return e.kind === "array" ? `List<${$l(e.of)}>` : e.kind === "map" ? `Dictionary<string, ${$l(e.of)}>` : e.kind === "tuple" ? `(${e.of.map($l).join(", ")})` : e.kind === "ref" ? e.name : Rh[e.kind] ?? "object";
}
const Hh = ["integer", "long", "double", "decimal", "boolean", "date", "datetime", "uuid"], qh = (e, t) => Hh.includes(e.kind) || e.kind === "tuple" || e.kind === "ref" && t?.types.some((l) => l.name === e.name && l.kind === "enum");
function zh(e) {
  const t = [], l = vo(e.types), n = (...a) => a.some((d) => l.has(d));
  n("date", "datetime", "uuid") && t.push("using System;"), n("array", "map") && t.push("using System.Collections.Generic;"), t.push("using System.Text.Json.Serialization;", "");
  for (const a of e.types) {
    if (a.kind === "enum") {
      t.push(Xs(a.description, "", "///").trimEnd()), t.push(`public enum ${a.name}`, "{"), t.push(a.values.map((d) => `    ${en(et(d), "csharp", "Value")},`).join(`
`)), t.push("}", "");
      continue;
    }
    if (a.kind === "alias") {
      t.push(`// root: ${$l(a.type)}`, "");
      continue;
    }
    t.push(`public class ${a.name}`, "{"), a.fields.forEach((d, i) => {
      i && t.push(""), t.push(Xs(d.description, "    ", "///").trimEnd() || null), d.deprecated && t.push("    [System.Obsolete]"), t.push(`    [JsonPropertyName("${d.key}")]`);
      let r = en(et(d.key), "csharp", "Value");
      r === a.name && (r += "Value");
      const c = d.optional || d.type.nullable, v = $l(d.type), m = c ? `${v}?` : v, $ = c || qh(d.type, e) ? "" : d.type.kind === "array" || d.type.kind === "map" ? " = new();" : " = null!;";
      t.push(`    public ${m} ${r} { get; set; }${$}`);
    }), t.push("}", "");
  }
  return t.filter((a) => a !== null).join(`
`).replace(/\n{3,}/g, `

`).trim() + `
`;
}
const Uh = {
  string: "str",
  integer: "int",
  long: "int",
  double: "float",
  decimal: "Decimal",
  boolean: "bool",
  date: "date",
  datetime: "datetime",
  uuid: "UUID",
  any: "Any"
};
function al(e) {
  return e.kind === "array" ? `List[${al(e.of)}]` : e.kind === "map" ? `Dict[str, ${al(e.of)}]` : e.kind === "tuple" ? `Tuple[${e.of.map(al).join(", ")}]` : e.kind === "ref" ? e.name : Uh[e.kind] ?? "Any";
}
function Kh(e) {
  const t = [], l = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), a = vo(e.types);
  a.has("array") && l.add("List"), a.has("map") && l.add("Dict"), a.has("tuple") && l.add("Tuple"), a.has("any") && l.add("Any"), a.has("decimal") && n.add("from decimal import Decimal"), a.has("datetime") && n.add("from datetime import datetime"), a.has("date") && n.add("from datetime import date"), a.has("uuid") && n.add("from uuid import UUID");
  let d = !1, i = !1;
  for (const c of e.types) {
    if (c.kind === "alias") {
      t.push(`# root: ${al(c.type)}`, "");
      continue;
    }
    if (c.kind === "enum") {
      d = !0, t.push(`class ${c.name}(str, Enum):`), c.description && t.push(`    """${c.description}"""`), c.values.forEach((m) => t.push(`    ${en(Zs(m).toUpperCase(), "python", "VALUE")} = ${JSON.stringify(m)}`)), t.push("", "");
      continue;
    }
    t.push("@dataclass_json", "@dataclass", `class ${c.name}:`);
    const v = [...c.fields].sort((m, $) => Number(m.optional) - Number($.optional));
    v.length || t.push("    pass"), v.forEach((m) => {
      const $ = en(Zs(m.key), "python", "value"), g = m.optional || m.type.nullable;
      g && l.add("Optional");
      const y = g ? `Optional[${al(m.type)}]` : al(m.type), p = $ !== m.key ? `metadata=config(field_name=${JSON.stringify(m.key)})` : null;
      let k = "";
      p && g ? (i = !0, k = ` = field(default=None, ${p})`) : p ? (i = !0, k = ` = field(${p})`) : g && (k = " = None"), m.description && t.push(`    # ${m.description}`), t.push(`    ${$}: ${y}${k}`);
    }), t.push("", "");
  }
  const r = ["from __future__ import annotations", ""];
  return r.push(`from dataclasses import dataclass${i ? ", field" : ""}`), r.push(`from dataclasses_json import dataclass_json${i ? ", config" : ""}`), d && r.push("from enum import Enum"), l.size && r.push(`from typing import ${[...l].sort().join(", ")}`), r.push(...[...n].sort()), r.join(`
`) + `


` + t.join(`
`).replace(/\n{4,}/g, `


`).trim() + `
`;
}
const Qh = {
  string: "string",
  integer: "number",
  long: "number",
  double: "number",
  decimal: "number",
  boolean: "boolean",
  date: "string",
  datetime: "string",
  uuid: "string",
  any: "any"
};
function ol(e) {
  return e.kind === "array" ? `${ol(e.of)}[]` : e.kind === "map" ? `Record<string, ${ol(e.of)}>` : e.kind === "tuple" ? `[${e.of.map(ol).join(", ")}]` : e.kind === "ref" ? e.name : Qh[e.kind] ?? "any";
}
const Jh = (e) => ws(e) ? e : JSON.stringify(e);
function Zh(e) {
  const t = [];
  for (const l of e.types) {
    if (l.kind === "alias") {
      t.push(`export type ${l.name} = ${ol(l.type)}`, "");
      continue;
    }
    if (l.kind === "enum") {
      l.description && t.push(`/** ${l.description} */`), t.push(`export type ${l.name} = ${l.values.map((n) => JSON.stringify(n)).join(" | ")}`, "");
      continue;
    }
    t.push(`export class ${l.name} {`), l.fields.forEach((n) => {
      n.description && t.push(`    /** ${n.description} */`);
      const a = n.optional || n.type.nullable;
      t.push(`    ${Jh(n.key)}${a ? "?" : "!"}: ${ol(n.type)}`);
    }), t.push("", `    constructor(init?: Partial<${l.name}>) { Object.assign(this, init) }`, "}", "");
  }
  return t.join(`
`).trim() + `
`;
}
function Gh(e) {
  const t = [];
  for (const l of e.types)
    l.kind === "alias" || l.kind === "enum" || (t.push(`export class ${l.name} {`), l.fields.forEach((n) => {
      const a = n.optional || n.type.nullable;
      t.push(`    /** @type {${ol(n.type)}${a ? "|undefined" : ""}}${n.description ? ` ${n.description}` : ""} */`), t.push(`    ${ws(n.key) ? n.key : `[${JSON.stringify(n.key)}]`}`);
    }), t.push("", "    constructor(init = {}) { Object.assign(this, init) }", "}", ""));
  return t.join(`
`).trim() + `
`;
}
const Wh = { csharp: zh, python: Kh, typescript: Zh, javascript: Gh };
function ab({ name: e = "data.json", json: t, schema: l, language: n } = {}) {
  const a = Oh.find((v) => v.id === n);
  if (!a) throw new Error(`Unsupported language '${n}'`);
  const d = typeof t == "string" ? JSON.parse(t) : t, i = typeof l == "string" ? JSON.parse(l) : l, r = Nh({ name: e, json: d, schema: i });
  return {
    path: (String(e).replace(/\.ui\.json$/, "").replace(/\.[^.]+$/, "") || "data") + a.ext,
    content: Wh[n](r),
    language: n
  };
}
const $n = Ah || {}, ob = {
  install(e) {
    Object.keys($n).forEach((l) => {
      e.component(l, $n[l]);
    });
    function t(l) {
      const a = Object.keys(l).filter((d) => l[d]).map((d) => `${encodeURIComponent(d)}=${encodeURIComponent(l[d])}`).join("&");
      return a ? "?" + a : "./";
    }
    e.directive("href", function(l, n) {
      l.href = t(n.value), l.onclick = (a) => {
        a.preventDefault(), history.pushState(n.value, "", t(n.value));
      };
    });
  },
  component(e, t) {
    return e ? t ? _.components[e] = t : _.components[e] || $n[e] || null : null;
  }
};
export {
  tb as ACTIONS,
  $y as Alert,
  Cy as AlertSuccess,
  lh as AutoCreateForm,
  nh as AutoEditForm,
  th as AutoForm,
  eh as AutoFormFields,
  Ey as AutoQueryGrid,
  xh as AutoQuerySchema,
  sh as AutoViewForm,
  Wy as Autocomplete,
  Iy as Breadcrumb,
  jy as Breadcrumbs,
  eo as CONTEXT,
  ih as CellFormat,
  Jy as CheckboxInput,
  mh as CloseButton,
  Xy as Combobox,
  Ah as Components,
  ah as ConfirmDelete,
  hh as DarkModeToggle,
  rh as DataGrid,
  Yy as DynamicInput,
  qy as EnsureAccess,
  zy as EnsureAccessDialog,
  Sy as ErrorSummary,
  Gy as FileInput,
  Ry as FilterColumn,
  Ny as FilterViews,
  oh as FormLoading,
  dh as HtmlFormat,
  no as INPUT_TYPES,
  Vy as Icon,
  Ly as InputDescription,
  $h as JsonSchemaForm,
  X1 as JsonSchemaNode,
  Ch as JsonView,
  My as Loading,
  _y as LookupInput,
  wh as MarkdownInput,
  ch as MarkupFormat,
  fh as MarkupModel,
  er as MetadataApp,
  ph as ModalDialog,
  gh as ModalLookup,
  Py as NavList,
  By as NavListItem,
  Ty as OutlineButton,
  uh as PreviewFormat,
  Ay as PrimaryButton,
  Hy as QueryPrefs,
  Sh as SchemaGrid,
  Th as SchemaInput,
  Lh as SchemaLookup,
  Vh as SchemaResults,
  Oy as SecondaryButton,
  Qy as SelectInput,
  Dy as SettingsIcons,
  kh as SidebarLayout,
  bh as SignIn,
  vh as SlideOver,
  Mh as SortableColumn,
  Oh as TYPE_LANGUAGES,
  yh as Tabs,
  Zy as TagInput,
  Uy as TextInput,
  Fy as TextLink,
  Ky as TextareaInput,
  Op as bestVariant,
  Mt as blankFor,
  Nh as buildModel,
  Ag as buildRequest,
  sb as camel,
  Al as choicesOf,
  eb as css,
  ob as default,
  jp as fieldError,
  ab as generateTypes,
  mr as initMetadata,
  Ap as isNullable,
  mt as isPlainObject,
  Jl as leafNameCounts,
  Bn as normalizePath,
  et as pascal,
  Vg as propsOf,
  lb as requirementText,
  hs as resolvePath,
  Ke as resolveSchema,
  ys as rowSchema,
  zs as send,
  ll as singular,
  Zs as snake,
  Mg as subtitle,
  wn as toOp,
  At as typeOf,
  nb as unwrapResponse,
  Tl as useAuth,
  Il as useClient,
  $t as useConfig,
  _o as useFiles,
  Ra as useFormatters,
  gt as useMetadata,
  Ya as useSchemas,
  Ja as useUtils,
  En as validateValue,
  lo as variantsOf,
  Fp as widgetOf
};
