(function () {
  !(function () {
    "use strict";
    var t,
      e = {};
    (e.h = function () {
      return "8ede9d1c720e8b5edc5c";
    }),
      (function (t) {
        (t.XL = "xl"), (t.L = "l"), (t.M = "m"), (t.S = "s"), (t.XS = "xs");
      })(t || (t = {}));
    t.XL, t.L, t.M, t.S, t.XS;
    var r,
      n = {
        columns: 12,
        breakpointsOrder: [t.XL, t.L, t.M, t.S, t.XS],
        breakpointsOrderRev: [t.XS, t.S, t.M, t.L, t.XL],
        breakpoints: { xl: 1100, l: 750, m: 570, s: 390, xs: 0 },
      },
      o = function (t) {
        var e = new URL(t);
        return Object.fromEntries(e.searchParams);
      };
    !(function (t) {
      (t.QueryStart = "?"), (t.QueryCompound = "&");
    })(r || (r = {}));
    function c(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function a(t) {
      return (
        (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        a(t)
      );
    }
    var i = {
      accessToken: "2cfe842a7b3f4d6c9e0021e8c9cc0501",
      captureUncaught: !1,
      captureUnhandledRejections: !1,
      ignoredMessages: [
        "ResizeObserver loop limit exceeded",
        "Script error.",
        "ResizeObserver loop completed with undelivered notifications.",
        "Fetch is aborted",
        "The user aborted a request.",
      ],
      payload: {
        environment: "production",
        client: {
          javascript: { source_map_enabled: !0, guess_uncaught_frames: !0 },
        },
      },
      checkIgnore: function (t, e, r) {
        return (
          !!(function (t) {
            if (t.body.trace) {
              var e = t.body.trace.frames,
                r = /(common|init?)(\.[\w-]+)?\.js/gi;
              return !e.some(function (t) {
                return r.test(t.filename);
              });
            }
            return !1;
          })(r) ||
          "warning" === r.level ||
          !!t
        );
      },
    };
    function s(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function l(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? s(Object(r), !0).forEach(function (e) {
              c(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : s(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    var u = {
      rollbar: void 0,
      params: {},
      init: function (t) {
        return (
          (function (t) {
            var e = {};
            function r(n) {
              if (e[n]) return e[n].exports;
              var o = (e[n] = { i: n, l: !1, exports: {} });
              return (
                t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
              );
            }
            (r.m = t),
              (r.c = e),
              (r.d = function (t, e, n) {
                r.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: n });
              }),
              (r.r = function (t) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (r.t = function (t, e) {
                if ((1 & e && (t = r(t)), 8 & e)) return t;
                if (4 & e && "object" == a(t) && t && t.__esModule) return t;
                var n = Object.create(null);
                if (
                  (r.r(n),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var o in t)
                    r.d(
                      n,
                      o,
                      function (e) {
                        return t[e];
                      }.bind(null, o)
                    );
                return n;
              }),
              (r.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return r.d(e, "a", e), e;
              }),
              (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (r.p = ""),
              r((r.s = 0));
          })([
            function (t, e, r) {
              var n = r(1),
                o = r(4);
              ((i = i || {}).rollbarJsUrl =
                i.rollbarJsUrl ||
                "https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.14.4/rollbar.min.js"),
                (i.async = void 0 === i.async || i.async);
              var c = n.setupShim(window, i),
                a = o(i);
              (window.rollbar = n.Rollbar),
                c.loadFull(window, document, !i.async, i, a);
            },
            function (t, e, r) {
              var n = r(2);
              function o(t) {
                return function () {
                  try {
                    return t.apply(this, arguments);
                  } catch (t) {
                    try {
                      console.error("[Rollbar]: Internal error", t);
                    } catch (t) {}
                  }
                };
              }
              var c = 0;
              function i(t, e) {
                (this.options = t), (this._rollbarOldOnError = null);
                var r = c++;
                (this.shimId = function () {
                  return r;
                }),
                  "undefined" != typeof window &&
                    window._rollbarShims &&
                    (window._rollbarShims[r] = { handler: e, messages: [] });
              }
              var s = r(3),
                l = function (t, e) {
                  return new i(t, e);
                },
                u = function (t) {
                  return new s(l, t);
                };
              function d(t) {
                return o(function () {
                  var e = Array.prototype.slice.call(arguments, 0),
                    r = { shim: this, method: t, args: e, ts: new Date() };
                  window._rollbarShims[this.shimId()].messages.push(r);
                });
              }
              (i.prototype.loadFull = function (t, e, r, n, c) {
                var a = !1,
                  i = e.createElement("script"),
                  s = e.getElementsByTagName("script")[0],
                  l = s.parentNode;
                (i.crossOrigin = ""),
                  (i.src = n.rollbarJsUrl),
                  r || (i.async = !0),
                  (i.onload = i.onreadystatechange =
                    o(function () {
                      if (
                        !(
                          a ||
                          (this.readyState &&
                            "loaded" !== this.readyState &&
                            "complete" !== this.readyState)
                        )
                      ) {
                        i.onload = i.onreadystatechange = null;
                        try {
                          l.removeChild(i);
                        } catch (t) {}
                        (a = !0),
                          (function () {
                            var e;
                            if (void 0 === t._rollbarDidLoad) {
                              e = new Error("rollbar.js did not load");
                              for (
                                var r, n, o, a, i = 0;
                                (r = t._rollbarShims[i++]);

                              )
                                for (r = r.messages || []; (n = r.shift()); )
                                  for (
                                    o = n.args || [], i = 0;
                                    i < o.length;
                                    ++i
                                  )
                                    if ("function" == typeof (a = o[i])) {
                                      a(e);
                                      break;
                                    }
                            }
                            "function" == typeof c && c(e);
                          })();
                      }
                    })),
                  l.insertBefore(i, s);
              }),
                (i.prototype.wrap = function (t, e, r) {
                  try {
                    var n;
                    if (
                      ((n =
                        "function" == typeof e
                          ? e
                          : function () {
                              return e || {};
                            }),
                      "function" != typeof t)
                    )
                      return t;
                    if (t._isWrap) return t;
                    if (
                      !t._rollbar_wrapped &&
                      ((t._rollbar_wrapped = function () {
                        r && "function" == typeof r && r.apply(this, arguments);
                        try {
                          return t.apply(this, arguments);
                        } catch (r) {
                          var e = r;
                          throw (
                            (e &&
                              ("string" == typeof e && (e = new String(e)),
                              (e._rollbarContext = n() || {}),
                              (e._rollbarContext._wrappedSource = t.toString()),
                              (window._rollbarWrappedError = e)),
                            e)
                          );
                        }
                      }),
                      (t._rollbar_wrapped._isWrap = !0),
                      t.hasOwnProperty)
                    )
                      for (var o in t)
                        t.hasOwnProperty(o) && (t._rollbar_wrapped[o] = t[o]);
                    return t._rollbar_wrapped;
                  } catch (e) {
                    return t;
                  }
                });
              for (
                var p =
                    "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleAnonymousErrors,handleUnhandledRejection,captureEvent,captureDomContentLoaded,captureLoad".split(
                      ","
                    ),
                  f = 0;
                f < p.length;
                ++f
              )
                i.prototype[p[f]] = d(p[f]);
              t.exports = {
                setupShim: function (t, e) {
                  if (t) {
                    var r = e.globalAlias || "Rollbar";
                    if ("object" == a(t[r])) return t[r];
                    (t._rollbarShims = {}), (t._rollbarWrappedError = null);
                    var c = new u(e);
                    return o(function () {
                      e.captureUncaught &&
                        ((c._rollbarOldOnError = t.onerror),
                        n.captureUncaughtExceptions(t, c, !0),
                        e.wrapGlobalEventHandlers && n.wrapGlobals(t, c, !0)),
                        e.captureUnhandledRejections &&
                          n.captureUnhandledRejections(t, c, !0);
                      var o = e.autoInstrument;
                      return (
                        !1 !== e.enabled &&
                          (void 0 === o ||
                            !0 === o ||
                            ("object" == a(o) && o.network)) &&
                          t.addEventListener &&
                          (t.addEventListener("load", c.captureLoad.bind(c)),
                          t.addEventListener(
                            "DOMContentLoaded",
                            c.captureDomContentLoaded.bind(c)
                          )),
                        (t[r] = c),
                        c
                      );
                    })();
                  }
                },
                Rollbar: u,
              };
            },
            function (t, e) {
              function r(t, e, r) {
                if (e.hasOwnProperty && e.hasOwnProperty("addEventListener")) {
                  for (
                    var n = e.addEventListener;
                    n._rollbarOldAdd && n.belongsToShim;

                  )
                    n = n._rollbarOldAdd;
                  var o = function (e, r, o) {
                    n.call(this, e, t.wrap(r), o);
                  };
                  (o._rollbarOldAdd = n),
                    (o.belongsToShim = r),
                    (e.addEventListener = o);
                  for (
                    var c = e.removeEventListener;
                    c._rollbarOldRemove && c.belongsToShim;

                  )
                    c = c._rollbarOldRemove;
                  var a = function (t, e, r) {
                    c.call(this, t, (e && e._rollbar_wrapped) || e, r);
                  };
                  (a._rollbarOldRemove = c),
                    (a.belongsToShim = r),
                    (e.removeEventListener = a);
                }
              }
              t.exports = {
                captureUncaughtExceptions: function (t, e, r) {
                  if (t) {
                    var n;
                    if ("function" == typeof e._rollbarOldOnError)
                      n = e._rollbarOldOnError;
                    else if (t.onerror) {
                      for (n = t.onerror; n._rollbarOldOnError; )
                        n = n._rollbarOldOnError;
                      e._rollbarOldOnError = n;
                    }
                    e.handleAnonymousErrors();
                    var o = function () {
                      var r = Array.prototype.slice.call(arguments, 0);
                      !(function (t, e, r, n) {
                        t._rollbarWrappedError &&
                          (n[4] || (n[4] = t._rollbarWrappedError),
                          n[5] ||
                            (n[5] = t._rollbarWrappedError._rollbarContext),
                          (t._rollbarWrappedError = null));
                        var o = e.handleUncaughtException.apply(e, n);
                        r && r.apply(t, n),
                          "anonymous" === o && (e.anonymousErrorsPending += 1);
                      })(t, e, n, r);
                    };
                    r && (o._rollbarOldOnError = n), (t.onerror = o);
                  }
                },
                captureUnhandledRejections: function (t, e, r) {
                  if (t) {
                    "function" == typeof t._rollbarURH &&
                      t._rollbarURH.belongsToShim &&
                      t.removeEventListener(
                        "unhandledrejection",
                        t._rollbarURH
                      );
                    var n = function (t) {
                      var r, n, o;
                      try {
                        r = t.reason;
                      } catch (t) {
                        r = void 0;
                      }
                      try {
                        n = t.promise;
                      } catch (t) {
                        n =
                          "[unhandledrejection] error getting `promise` from event";
                      }
                      try {
                        (o = t.detail),
                          !r && o && ((r = o.reason), (n = o.promise));
                      } catch (t) {}
                      r ||
                        (r =
                          "[unhandledrejection] error getting `reason` from event"),
                        e &&
                          e.handleUnhandledRejection &&
                          e.handleUnhandledRejection(r, n);
                    };
                    (n.belongsToShim = r),
                      (t._rollbarURH = n),
                      t.addEventListener("unhandledrejection", n);
                  }
                },
                wrapGlobals: function (t, e, n) {
                  if (t) {
                    var o,
                      c,
                      a =
                        "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
                          ","
                        );
                    for (o = 0; o < a.length; ++o)
                      t[(c = a[o])] &&
                        t[c].prototype &&
                        r(e, t[c].prototype, n);
                  }
                },
              };
            },
            function (t, e) {
              function r(t, e) {
                (this.impl = t(e, this)),
                  (this.options = e),
                  (function (t) {
                    for (
                      var e = function (t) {
                          return function () {
                            var e = Array.prototype.slice.call(arguments, 0);
                            if (this.impl[t])
                              return this.impl[t].apply(this.impl, e);
                          };
                        },
                        r =
                          "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleAnonymousErrors,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureEvent,captureDomContentLoaded,captureLoad".split(
                            ","
                          ),
                        n = 0;
                      n < r.length;
                      n++
                    )
                      t[r[n]] = e(r[n]);
                  })(r.prototype);
              }
              (r.prototype._swapAndProcessMessages = function (t, e) {
                var r, n, o;
                for (this.impl = t(this.options); (r = e.shift()); )
                  (n = r.method),
                    (o = r.args),
                    this[n] &&
                      "function" == typeof this[n] &&
                      ("captureDomContentLoaded" === n || "captureLoad" === n
                        ? this[n].apply(this, [o[0], r.ts])
                        : this[n].apply(this, o));
                return this;
              }),
                (t.exports = r);
            },
            function (t, e) {
              t.exports = function (t) {
                return function (e) {
                  if (!e && !window._rollbarInitialized) {
                    for (
                      var r,
                        n,
                        o = (t = t || {}).globalAlias || "Rollbar",
                        c = window.rollbar,
                        a = function (t) {
                          return new c(t);
                        },
                        i = 0;
                      (r = window._rollbarShims[i++]);

                    )
                      n || (n = r.handler),
                        r.handler._swapAndProcessMessages(a, r.messages);
                    (window[o] = n), (window._rollbarInitialized = !0);
                  }
                };
              };
            },
          ]),
          (this.rollbar = window.Rollbar),
          this.setMetaData(t),
          this
        );
      },
      setMetaData: function (t) {
        (this.params = l(l({}, this.params), t)),
          this.rollbar.captureEvent({ widget: t }, "error"),
          this.rollbar.captureEvent({ widget: t }, "critical");
      },
      send: function (t, e, r) {
        var n = r ? "".concat(r, " ").concat(t) : t;
        "meta" in e &&
          this.rollbar.info(
            "Request details: ".concat(JSON.stringify(l({}, e.meta), null, 2))
          ),
          this.rollbar.error(n, e);
      },
    };
    function d(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function p(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function f(t, e, r) {
      return (
        e && p(t.prototype, e),
        r && p(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function b(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function h(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? b(Object(r), !0).forEach(function (e) {
              c(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : b(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    var y = "#000000",
      m = "#FFFFFF",
      g = { black: y, white: m, threshold: 179 },
      v = function (t) {
        var e = t;
        "#" === e.slice(0, 1) && (e = e.slice(1)),
          3 === e.length &&
            (e = e
              .split("")
              .map(function (t) {
                return t + t;
              })
              .join(""));
        var r = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
        return r
          ? {
              r: parseInt(r[1], 16),
              g: parseInt(r[2], 16),
              b: parseInt(r[3], 16),
              a: r[4] ? parseInt(r[4], 16) / 255 : 1,
            }
          : null;
      };
    function O(t, e) {
      var r = t ? v(t) : null;
      return (
        !!r &&
        "rgba("
          .concat(r.r, ",")
          .concat(r.g, ",")
          .concat(r.b, ",")
          .concat(e, ")")
      );
    }
    var w = function (t, e, r) {
      var n,
        o,
        c,
        a,
        i,
        s = Math.abs(t),
        l = Math.round,
        u = parseInt;
      if ("transparent" === e) return O(r, t);
      if (0 === e.indexOf("rgb")) {
        (n = e.split(",")),
          (o = (r || (t < 0 ? "rgb(0,0,0)" : "rgb(255,255,255)")).split(",")),
          (c = u(n[0].slice(4))),
          (a = u(n[1])),
          (i = u(n[2]));
        var d = l((u(o[0].slice(4)) - c) * s) + c,
          p = l((u(o[1]) - a) * s) + a,
          f = l((u(o[2]) - i) * s) + i;
        return "rgb(".concat(d, ",").concat(p, ",").concat(f, ")");
      }
      var b = 9 === e.length ? e.slice(1, 7) : e.slice(1),
        h = 9 === e.length ? e.slice(7) : "",
        g = u(b, 16),
        v = u((r || (t < 0 ? y : m)).slice(1), 16);
      (a = (g >> 8) & 255), (i = 255 & g);
      var w = 65536 * (l(((v >> 16) - (c = g >> 16)) * s) + c),
        j = 256 * (l((((v >> 8) & 255) - a) * s) + a),
        _ = l(((255 & v) - i) * s) + i;
      return "#"
        .concat((16777216 + w + j + _).toString(16).slice(1))
        .concat(h.toLowerCase());
    };
    var j = function (t, e, r, n) {
        for (var o = [], c = r; c < 100 * n; c += r) {
          var a = w(c / 1e3, t, e) || "";
          o.push(a);
        }
        return o;
      },
      _ = function (t, e) {
        return j(t, m, 100, e);
      },
      k = function (t, e) {
        return j(t, y, 100, e);
      },
      P = function (t) {
        return 0.299 * t.r + 0.587 * t.g + 0.114 * t.b;
      },
      E = function (t, e) {
        var r = v(t),
          n = h(h({}, g), e);
        return r ? (P(r) > n.threshold ? n.black : n.white) : n.black;
      },
      S = function (t) {
        return { black: E(t, { white: t }), white: E(t, { black: t }) };
      },
      D = function (t) {
        var e = (function (t) {
          var e,
            r =
              null ===
                (e = t.find(function (t) {
                  return t.dark;
                })) || void 0 === e
                ? void 0
                : e.dark;
          if (!r) return { black: y, white: m };
          var n = r.color;
          return S(n);
        })(t);
        return t.reduce(function (t, r) {
          var n = Object.keys(r)[0],
            o = r[n],
            c = Object.keys(o),
            a = E(o.color, e);
          return c.reduce(function (t, e) {
            var r = o[e],
              c = "";
            return (
              (c = Array.isArray(r)
                ? (function (t, e, r) {
                    return r.reduce(function (r, n, o) {
                      return ""
                        .concat(r, "\n--")
                        .concat(t, "-color-")
                        .concat(e, "-")
                        .concat(100 * (o + 1), ": ")
                        .concat(n, ";");
                    }, "");
                  })(n, e, r)
                : "\n--".concat(n, "-color: ").concat(r, ";") +
                  "\n--".concat(n, "-bg-text-color: ").concat(a, ";")),
              "".concat(t).concat(c)
            );
          }, t);
        }, "");
      },
      R = "app",
      C = (function () {
        function t(e) {
          var r = this;
          d(this, t),
            c(this, "styleId", void 0),
            c(this, "widget", void 0),
            c(this, "selector", void 0),
            c(this, "wrapper_selector", void 0),
            c(this, "params", void 0),
            (this.widget = e),
            (this.selector = ".cascoon.cascoon-"
              .concat(e.type, ".cascoon-")
              .concat(e.id)),
            (this.wrapper_selector = "."
              .concat(R, ".")
              .concat(R, "-")
              .concat(e.type, ".")
              .concat(R, "-")
              .concat(e.id)),
            (this.params = {}),
            (this.styleId = "style-id-".concat(e.id)),
            Object.keys(this.widget.params).forEach(function (t) {
              var e = r.widget.params[t];
              e &&
                "false" !== e &&
                (r.params[t] = e.toString().replace(/[<>;]/g, ""));
            });
        }
        return (
          f(t, [
            {
              key: "generate",
              value: function () {
                var t = this.getPrimaryColor(),
                  e = this.params.color_focused || this.params.primary,
                  r = this.params.color_input || this.params.light,
                  n = E(t, S(this.params.color_text || this.params.dark)),
                  o = this.widget.wrapper;
                this.appendStyles(
                  o,
                  "\n      "
                    .concat("", "\n      ")
                    .concat(this.getVariablesDefinition(), "\n      ")
                    .concat(this.selector, ",\n      ")
                    .concat(this.selector, " .like-wrapper {\n        ")
                    .concat(
                      this.getWrapperStyles(this.params),
                      "\n      }\n      "
                    )
                    .concat(
                      this.selector,
                      ".cascoon--error {\n        border-radius: 16px;\n        border: none;\n      }\n      "
                    )
                    .concat(
                      this.widget.params.width
                        ? ":host {\n          max-width: ".concat(
                            this.widget.params.width,
                            "px;\n        }"
                          )
                        : "",
                      "\n  \n      "
                    )
                    .concat(this.selector, ' input[type="submit"],\n      ')
                    .concat(this.selector, " button {\n        color: ")
                    .concat(n, ";\n        background-color: ")
                    .concat(t, ";\n      }\n\n      ")
                    .concat(
                      this.selector,
                      ' input[type="submit"]:hover,\n      '
                    )
                    .concat(
                      this.selector,
                      " button:hover {\n        background-color: "
                    )
                    .concat(
                      t ? w(0.1, t, "#FFFFFF") : "#FFFFFF",
                      ";\n      }\n\n      "
                    )
                    .concat(
                      this.selector,
                      ' input[type="submit"]:active,\n      '
                    )
                    .concat(
                      this.selector,
                      " button:active {\n        background-color: "
                    )
                    .concat(
                      t ? w(0.1, t, "#000000") : "#000000",
                      ";\n      }\n\n      "
                    )
                    .concat(this.selector, " .like-input:hover,\n      ")
                    .concat(
                      this.selector,
                      " .like-input:active {\n        background-color: "
                    )
                    .concat(this.params.color_input, ";\n      }\n\n      ")
                    .concat(this.selector, " input:focus,\n      ")
                    .concat(
                      this.selector,
                      " input:focus + .like-input,\n      "
                    )
                    .concat(this.selector, " select:focus,\n      ")
                    .concat(this.selector, " button:focus,\n      ")
                    .concat(this.selector, " textarea:focus,\n      ")
                    .concat(this.selector, " input:active,\n      ")
                    .concat(
                      this.selector,
                      " input:active + .like-input,\n      "
                    )
                    .concat(this.selector, " select:active,\n      ")
                    .concat(this.selector, " button:target,\n      ")
                    .concat(
                      this.selector,
                      " textarea:active {\n        outline: 0;\n        box-shadow: 0 0 0px 2px "
                    )
                    .concat(O(e, 0.5), ";\n        border-color: ")
                    .concat(e, ";\n      }\n\n      ")
                    .concat(
                      this.selector,
                      " .input-before-gradient {\n        background-color: "
                    )
                    .concat(r, ";\n      }\n      ")
                    .concat(
                      this.selector,
                      " .input-before-gradient:before {\n        background: linear-gradient(to left, "
                    )
                    .concat(r, ", ")
                    .concat(
                      O(r, 0),
                      ");\n      }\n      .root {\n        display: none;\n      }\n    "
                    )
                );
              },
            },
            {
              key: "getWrapperStyles",
              value: function (t) {
                var e = t.background,
                  r = t.color_background,
                  n = t.color_border,
                  o = t.special,
                  c = t.secondary,
                  a = t.border_radius,
                  i = t.color_text,
                  s = t.dark,
                  l = r || c,
                  u = a,
                  d = n || o,
                  p = E(l, S(i || s));
                return "\n      width:100%;\n      "
                  .concat(
                    u ? "border-radius: ".concat(u, "px;") : "",
                    "\n      "
                  )
                  .concat(
                    e
                      ? "background: ".concat(e)
                      : "background-color: ".concat(l),
                    ";\n      color: "
                  )
                  .concat(p, ";\n      ")
                  .concat(
                    d ? "border: 1px solid ".concat(d, ";") : "",
                    "\n    "
                  );
              },
            },
            {
              key: "getVariablesDefinition",
              value: function () {
                var t,
                  e,
                  r = this.params,
                  n = r.color_background,
                  o = r.color_border,
                  a = r.color_input_border,
                  i = r.color_input,
                  s = r.color_input_text,
                  l = r.contrast_color,
                  u = r.border_radius,
                  d = r.primary_override,
                  p = r.dark,
                  f = r.achieve,
                  b = r.attention,
                  h = r.special,
                  y = r.light,
                  m = r.secondary,
                  g = {
                    primary: this.getPrimaryColor(d),
                    secondary: n || m || "#AAAAAA",
                    achieve: f || "#45AD35",
                    attention: b || "#E04141",
                    dark: s || a || p || "#000000",
                    light: i || l || y || "#FFFFFF",
                    special: o || h || "#716CC8",
                  },
                  v =
                    ((t = g),
                    (e = 10),
                    Object.keys(t).map(function (r) {
                      var n = t[r];
                      return c({}, r, {
                        color: n,
                        lighter: _(n, e),
                        darker: k(n, e),
                      });
                    })),
                  O = D(v);
                return "\n      "
                  .concat(this.selector, " {\n        ")
                  .concat(O, "\n      }\n      ")
                  .concat(this.wrapper_selector, " {\n        ")
                  .concat(O, "\n        --border-radius: ")
                  .concat(u, "px;\n      }\n    ");
              },
            },
            {
              key: "getPrimaryColor",
              value: function (t) {
                var e = this.params,
                  r = e.color_icons,
                  n = e.color_button,
                  o = e.color,
                  c = e.primary;
                return t || n || o || r || c || "#FF8E01";
              },
            },
            {
              key: "appendStyles",
              value: function (t, e) {
                var r = document.getElementById(this.styleId);
                r && r.remove();
                var n = this.createStyleTag(e);
                null != t && t.parentNode
                  ? t.appendChild(n)
                  : (
                      document.head || document.getElementsByTagName("head")[0]
                    ).appendChild(n);
              },
            },
            {
              key: "createStyleTag",
              value: function (t) {
                var e = document.createElement("style");
                return (
                  (e.type = "text/css"),
                  (e.id = this.styleId),
                  e.styleSheet
                    ? (e.styleSheet.cssText = t)
                    : e.appendChild(document.createTextNode(t)),
                  e
                );
              },
            },
          ]),
          t
        );
      })();
    function x(t, e) {
      return (
        (x = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        x(t, e)
      );
    }
    function L(t, e) {
      if (e && ("object" === a(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      })(t);
    }
    function T(t) {
      return (
        (T = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        T(t)
      );
    }
    function I() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function F(t, e, r) {
      return (
        (F = I()
          ? Reflect.construct.bind()
          : function (t, e, r) {
              var n = [null];
              n.push.apply(n, e);
              var o = new (Function.bind.apply(t, n))();
              return r && x(o, r.prototype), o;
            }),
        F.apply(null, arguments)
      );
    }
    function A(t) {
      var e = "function" == typeof Map ? new Map() : void 0;
      return (
        (A = function (t) {
          if (
            null === t ||
            ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return t;
          var r;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n);
          }
          function n() {
            return F(t, arguments, T(this).constructor);
          }
          return (
            (n.prototype = Object.create(t.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            x(n, t)
          );
        }),
        A(t)
      );
    }
    function U(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var r,
          n = T(t);
        if (e) {
          var o = T(this).constructor;
          r = Reflect.construct(n, arguments, o);
        } else r = n.apply(this, arguments);
        return L(this, r);
      };
    }
    var M = function () {
        var t = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && x(t, e);
          })(r, t);
          var e = U(r);
          function r() {
            var t;
            return (
              d(this, r), (t = e.call(this)).attachShadow({ mode: "open" }), t
            );
          }
          return r;
        })(A(HTMLElement));
        return (
          customElements.define("tp-cascoon", t),
          document.createElement("tp-cascoon")
        );
      },
      B = e.h(),
      W = (function () {
        function t() {
          d(this, t),
            c(this, "widgetsCount", {}),
            c(this, "launchQueue", []),
            c(this, "commonJSInjected", !1),
            c(this, "emitter", null),
            c(this, "init", null);
        }
        return (
          f(t, [
            {
              key: "registerEmitter",
              value: function (t) {
                this.emitter || (this.emitter = t);
              },
            },
            {
              key: "registerLaunchFn",
              value: function (t) {
                (this.launch = t),
                  this.launchQueue.forEach(function (e) {
                    return t(e);
                  }),
                  (this.launchQueue = []);
              },
            },
            {
              key: "registerInitFn",
              value: function (t) {
                this.init || (this.init = t);
              },
            },
            {
              key: "launch",
              value: function (t) {
                this.launchQueue.push(t);
              },
            },
            {
              key: "injectCommonJS",
              value: function (t) {
                if (!this.commonJSInjected) {
                  var e = document.createElement("script");
                  (e.src = (function (t) {
                    var e = B ? ".".concat(B) : "";
                    return ""
                      .concat(t, "/")
                      .concat("cascoon", "/common")
                      .concat(e, ".js");
                  })(t)),
                    document.head.appendChild(e),
                    (this.commonJSInjected = !0);
                }
              },
            },
            {
              key: "createNextWidgetId",
              value: function (t) {
                var e = t in this.widgetsCount ? this.widgetsCount[t] + 1 : 0;
                return (this.widgetsCount[t] = e), "".concat(t, "_").concat(e);
              },
            },
          ]),
          t
        );
      })(),
      N = window.CASCOON_GLOBAL || new W();
    function $(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function z(t, e) {
      if (t) {
        if ("string" == typeof t) return $(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(t)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? $(t, e)
            : void 0
        );
      }
    }
    function q(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var r =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null != r) {
            var n,
              o,
              c = [],
              a = !0,
              i = !1;
            try {
              for (
                r = r.call(t);
                !(a = (n = r.next()).done) &&
                (c.push(n.value), !e || c.length !== e);
                a = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (i) throw o;
              }
            }
            return c;
          }
        })(t, e) ||
        z(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    window.CASCOON_GLOBAL = N;
    function H(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function J(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? H(Object(r), !0).forEach(function (e) {
              c(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : H(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    var X = function t(e, r) {
        return e.map(function (e) {
          return (function (t, e) {
            var r = new Set(),
              n = e;
            if (
              (t.forEach(function (t) {
                var e = t.id,
                  o = t.width;
                void 0 === o ? r.add(e) : (n -= o);
              }),
              0 !== r.size && n % r.size != 0)
            )
              throw new Error("BAD COLUMN WIDTHS ".concat(JSON.stringify(t)));
            return t.map(function (t) {
              return r.has(t.id) ? J(J({}, t), {}, { width: n / r.size }) : t;
            });
          })(
            e.map(function (e) {
              var n = e;
              return (
                "string" == typeof n && (n = { id: n }),
                n.nested && (n.nested = t(n.nested, r)),
                n
              );
            }),
            r
          );
        });
      },
      G = function (t, e) {
        var r,
          n,
          o,
          c,
          a = (function (t) {
            return Object.fromEntries(
              Object.entries(t).map(function (t) {
                var e = q(t, 2),
                  r = e[0],
                  n = e[1];
                return [r, X(n, 12)];
              })
            );
          })(
            ((r = t.layout),
            (n = e.breakpointsOrder),
            (o = Object.keys(r)[0]),
            (c = J({}, r)),
            n.forEach(function (t) {
              r[t] ? (o = t) : (c[t] = r[o]);
            }),
            c)
          );
        return J(J({}, t), {}, { layout: a, fields: t.fields });
      };
    function K(t, e) {
      if (null == t) return {};
      var r,
        n,
        o = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            o = {},
            c = Object.keys(t);
          for (n = 0; n < c.length; n++)
            (r = c[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
          return o;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(t);
        for (n = 0; n < c.length; n++)
          (r = c[n]),
            e.indexOf(r) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]));
      }
      return o;
    }
    function Q(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    var V = function (t) {
      var e = o(t),
        r = e.promo_id;
      return (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Q(Object(r), !0).forEach(function (e) {
                c(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Q(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      })(
        {
          shmarker: e.marker || "iddqd",
          promo_id: r || "4063",
          campaign_id: e.campaign_id || "101",
          target_host: e.host || "",
        },
        K(e, ["promo_id", "marker", "campaign_id", "host"])
      );
    };
    function Y(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Z(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Y(Object(r), !0).forEach(function (e) {
              c(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Y(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function tt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    var et = function (t) {
      var e = o(t);
      return (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tt(Object(r), !0).forEach(function (e) {
                c(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      })(
        { shmarker: e.marker || "iddqd", campaign_id: e.campaign_id || "101" },
        K(e, ["marker", "campaign_id"])
      );
    };
    function rt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function nt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? rt(Object(r), !0).forEach(function (e) {
              c(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : rt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function ot(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ct(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ot(Object(r), !0).forEach(function (e) {
              c(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : ot(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    var at = function (t) {
      return /(travelpayouts\.com\/chansey\/iframe\.js)|chansey\/iframe\.js/.test(
        t
      )
        ? V(t)
        : /(travelpayouts.com\/weedle\/widget\.js)|(weedle\/widget\.js)/.test(t)
        ? nt(
            nt(
              {},
              ((e = o(t)),
              (r = { marker: "shmarker" }),
              (n = {}),
              Object.keys(e).forEach(function (t) {
                n[r[t] || t] = e[t];
              }),
              void 0 === n.currency &&
                (n.currency = "ru" === n.locale ? "rub" : "usd"),
              "byr" === n.currency && (n.currency = "byn"),
              void 0 === n.shmarker && (n.shmarker = "iddqd"),
              n.host && (n.target_host = n.host),
              (n.currency = n.currency.toLowerCase()),
              n)
            ),
            {},
            { promo_id: "4044", campaign_id: "100" }
          )
        : /(travelpayouts.com\/calendar_widget\/iframe\.js)|(travelpayouts.com\/debug_calendar_widget\/iframe\.js)/.test(
            t
          )
        ? (function (t) {
            var e, r, n;
            return Z(
              Z(
                {},
                ((e = o(t)),
                (r = { marker: "shmarker" }),
                (n = {}),
                Object.keys(e).forEach(function (t) {
                  n[r[t] || t] = e[t];
                }),
                void 0 === n.currency &&
                  (n.currency = "ru" === n.locale ? "rub" : "usd"),
                "byr" === n.currency && (n.currency = "byn"),
                void 0 === n.shmarker && (n.shmarker = "iddqd"),
                (n.currency = n.currency.toLowerCase()),
                n)
              ),
              {},
              { promo_id: "4041", campaign_id: "100" }
            );
          })(t)
        : /(blissey\/scripts.*\.js)/.test(t)
        ? et(t)
        : /(c100.travelpayouts.com)|(travelpayouts.com\/subscription_widget\/widget.js)/.test(
            t
          )
        ? (function (t) {
            var e = o(t),
              r = e.host,
              n = e.marker,
              c = e.backgroundColor,
              a = e.origin_iata,
              i = e.origin_name,
              s = e.destination_iata,
              l = e.destination_name,
              u = K(e, [
                "host",
                "marker",
                "backgroundColor",
                "origin_iata",
                "origin_name",
                "destination_iata",
                "destination_name",
              ]),
              d = r ? { target_host: r } : null,
              p = a ? { originIata: a } : null,
              f = i ? { originName: i } : null,
              b = s ? { destinationIata: s } : null,
              h = l ? { destinationName: l } : null;
            return ct(
              ct(
                ct(
                  ct(
                    ct(
                      ct(
                        ct(
                          {
                            promo_id: "4053",
                            campaign_id: "100",
                            shmarker: null != n ? n : "iddqd",
                          },
                          c ? { secondary: c } : null
                        ),
                        d
                      ),
                      p
                    ),
                    f
                  ),
                  b
                ),
                h
              ),
              u
            );
          })(t)
        : o(t);
      var e, r, n;
    };
    function it(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return $(t);
        })(t) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        z(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var st = {
        left: {
          usd: "$",
          cad: "C$",
          eur: "â‚¬",
          amd: "Ô´",
          ars: "$",
          aud: "A$",
          azn: "â‚¼",
          bdt: "BDT",
          brl: "R$",
          chf: "CHF",
          clp: "C$",
          cny: "Â¥",
          cop: "COL$",
          egp: "EÂ£",
          gbp: "Â£",
          hkd: "HK$",
          huf: "Ft",
          idr: "Rp",
          ils: "â€â‚ª",
          inr: "â‚¹",
          jpy: "Â¥",
          krw: "â‚©",
          lkr: "Rs",
          mur: "Rs",
          mxn: "Mex$",
          myr: "RM",
          ngn: "â‚¦",
          npr: "à¤°à¥",
          nzd: "NZ$",
          pen: "S/.",
          php: "â‚±",
          pkr: "Rs",
          sgd: "S$",
          thb: "à¸¿",
          try: "â‚º",
          xof: "FCFA",
          zar: "R",
          zmw: "ZK",
          vef: "Bs.",
          mnt: "â‚®",
        },
        right: {
          aed: "Ø¯.Ø¥",
          afn: "Ø‹",
          all: "Lek",
          bam: "KM",
          bgn: "Ð»Ð².",
          bhd: ".Ø¯.Ø¨",
          bif: "FBu",
          bnd: "$",
          bob: "Bs",
          bwp: "P",
          byn: "Br",
          bzd: "$",
          cdf: "FrCD",
          crc: "â‚¡",
          cve: "CV$",
          czk: "KÄ",
          djf: "Fdj",
          dkk: "kr",
          dop: "RD$",
          dzd: "Ø¯.Ø¬.â€",
          eek: "kr",
          ern: "Nfk",
          etb: "Br",
          gel: "â‚¾",
          ghs: "GHâ‚µ",
          gnf: "FG",
          gtq: "Q",
          hnl: "L",
          hrk: "kn",
          iqd: "Ø¯.Ø¹.â€",
          isk: "kr.",
          jmd: "$",
          jod: "Ø¯.Ø§.â€",
          kes: "Ksh",
          khr: "áŸ›",
          kmf: "FC",
          kwd: "Ø¯.Ùƒ.â€",
          kzt: "â‚¸",
          kgs: "com",
          lbp: "Ù„.Ù„.â€",
          lvl: "Ls",
          lyd: "Ø¯.Ù„.â€",
          mad: "Ø¯.Ù….â€",
          mdl: "MDL",
          mga: "MGA",
          mkd: "MKD",
          tjs: "TJS",
          mmk: "K",
          mop: "MOP$",
          mzn: "MTn",
          nad: "N$",
          nio: "C$",
          nok: "kr",
          omr: "Ø±.Ø¹.â€",
          pab: "B/.",
          pln: "zÅ‚",
          pyg: "â‚²",
          qar: "Ø±.Ù‚.â€",
          ron: "lei",
          rsd: "din",
          rub: String.fromCharCode(8381),
          rwf: "FR",
          sar: "Ø±.Ø³.",
          sdg: "SDG",
          sek: "kr",
          sos: "Ssh",
          syp: "Ù„.Ø³.â€",
          tnd: "Ø¯.Øª.â€",
          top: "T$",
          ttd: "$",
          twd: "NT$",
          tzs: "TSh",
          uah: "â‚´",
          ugx: "USh",
          uyu: "$",
          uzs: "UZS",
          vnd: "â‚«",
          xaf: "FCFA",
          yer: "Ø±.ÙŠ.â€",
        },
      },
      lt = Object.keys(st).reduce(function (t, e) {
        var r = Object.keys(st[e]);
        return [].concat(it(t), it(r));
      }, []),
      ut = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "en",
          e = ["ar", "fa", "ku", "he"];
        return e.includes(t);
      };
    function dt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function pt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? dt(Object(r), !0).forEach(function (e) {
              c(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : dt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function ft(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function bt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ft(Object(r), !0).forEach(function (e) {
              c(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : ft(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    var ht = function (t, e, r) {
      var n = e.globals.cast_params ? e.globals.cast_params(t) : t,
        o = (function (t, e) {
          var r = pt({}, t);
          return (
            Object.keys(e).forEach(function (t) {
              var n = e[t];
              ("string" == typeof n && 0 === n.length && r[t]) ||
                (r = pt(pt({}, r), {}, c({}, t, n)));
            }),
            r
          );
        })(e.default_params, n),
        a = [],
        i =
          o.searchHost ||
          o.search_host ||
          o.custom_url ||
          o.target_host ||
          e.default_params.searchHost ||
          e.default_params.search_host ||
          e.default_params.custom_url ||
          e.default_params.target_host ||
          o.host;
      (void 0 !== o.currency &&
        (o.currency = lt.includes(o.currency) ? o.currency : "usd"),
      o.combine_promos) &&
        ((a = decodeURIComponent(o.combine_promos)
          .split(",")
          .reduce(function (t, e) {
            var r = q(e.split("_"), 2),
              n = r[0],
              o = r[1];
            return t.push({ campaignId: n, promoId: o }), t;
          }, [])),
        delete o.combine_promos);
      return bt(
        bt({}, o),
        {},
        {
          combinePromos: a,
          promo_id: e.id,
          computedHost: i,
          locale: e.locale || n.locale,
          direction: ut(n.locale) ? "rtl" : "ltr",
          widget_id: r,
        }
      );
    };
    var yt = {
      randomUUID:
        "undefined" != typeof crypto &&
        crypto.randomUUID &&
        crypto.randomUUID.bind(crypto),
    };
    let mt;
    const gt = new Uint8Array(16);
    function vt() {
      if (
        !mt &&
        ((mt =
          "undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)),
        !mt)
      )
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      return mt(gt);
    }
    const Ot = [];
    for (let t = 0; t < 256; ++t) Ot.push((t + 256).toString(16).slice(1));
    function wt(t, e = 0) {
      return (
        Ot[t[e + 0]] +
        Ot[t[e + 1]] +
        Ot[t[e + 2]] +
        Ot[t[e + 3]] +
        "-" +
        Ot[t[e + 4]] +
        Ot[t[e + 5]] +
        "-" +
        Ot[t[e + 6]] +
        Ot[t[e + 7]] +
        "-" +
        Ot[t[e + 8]] +
        Ot[t[e + 9]] +
        "-" +
        Ot[t[e + 10]] +
        Ot[t[e + 11]] +
        Ot[t[e + 12]] +
        Ot[t[e + 13]] +
        Ot[t[e + 14]] +
        Ot[t[e + 15]]
      ).toLowerCase();
    }
    var jt = function (t, e, r) {
      if (yt.randomUUID && !e && !t) return yt.randomUUID();
      const n = (t = t || {}).random || (t.rng || vt)();
      if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
        r = r || 0;
        for (let t = 0; t < 16; ++t) e[r + t] = n[t];
        return e;
      }
      return wt(n);
    };
    N.registerInitFn(function (t) {
      var e,
        r,
        o = t.config,
        c = t.abTest,
        a = t.categoriesIds,
        i = t.globalTranslations,
        s = t.userId,
        l = t.locale,
        d = t.hostname;
      N.injectCommonJS("https://".concat(d));
      var p,
        f,
        b,
        h,
        y =
          o.globals.hiddens.tag && "" !== o.globals.hiddens.tag
            ? o.globals.hiddens.tag
            : null,
        m = "tp-cascoon-component-".concat(jt()),
        g = !!y,
        v =
          ((f = (p = y) ? document.getElementById(p) : null),
          (b = null == f ? void 0 : f.shadowRoot),
          document.currentScript || b.querySelector("script")),
        O = (function (t) {
          var e,
            r,
            n = null !== (e = t.getAttribute("src")) && void 0 !== e ? e : "";
          try {
            r = new URL(window.location.origin);
          } catch (t) {
            console.error(t);
          }
          return new URL(n, r).href;
        })(v),
        w = at(O),
        j = (h = new URL(O)).origin + h.pathname,
        _ = (function (t) {
          var e = t.config,
            r = t.userId,
            n = t.categoriesIds,
            o = t.layoutConfig,
            c = t.abTest,
            a = t.globalTranslations,
            i = t.locale,
            s = J({}, e);
          if (
            (e.globals &&
              (s.globals = J(
                J({}, e.globals),
                {},
                {
                  meta: J(
                    J({}, e.globals.meta),
                    {},
                    { user_id: r, categories_ids: n }
                  ),
                  hiddens: J(
                    J({}, e.globals.hiddens),
                    {},
                    { promo_type: "tp_manual", promo_kind: "widget" }
                  ),
                  ab_test: c,
                }
              )),
            (s.id = (null == c ? void 0 : c.ab_origin_promo_id) || e.id),
            (s.locale = i),
            !e.translations)
          ) {
            var l = e.globals.translations_id,
              u = null == c ? void 0 : c.ab_origin_promo_id,
              d = a,
              p = l || u || e.id,
              f = d.widgets[p] || {};
            (f.dayjs = d.dayjs),
              (f.error_banner = d.error_banner),
              (f.common = d.common),
              (s.translations = f);
          }
          return (function (t) {
            return !0 !== t.globals.createdByConstructor;
          })(s)
            ? G(s, o)
            : s;
        })({
          config: o,
          locale: w.locale || l,
          abTest: c,
          categoriesIds: a,
          globalTranslations: i,
          userId: s,
          layoutConfig: n,
        }),
        k = _.id,
        P = N.createNextWidgetId(_.id),
        E = ht(w, _, P),
        S = (function (t, e, r) {
          var n = document.createElement("div"),
            o = r ? "".concat(R, "--tab") : R;
          return (
            n.classList.add(
              R,
              "".concat(R, "-").concat(t),
              "".concat(R, "-").concat(e),
              o
            ),
            n
          );
        })(k, P, g),
        D = customElements.get("tp-cascoon")
          ? document.createElement("tp-cascoon")
          : M(),
        x = function (t) {
          var e,
            r,
            n = document.querySelector("#cascoon-style-css");
          if (
            n &&
            ((n.disabled = !0),
            !(null === (e = D.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelector("#cascoon-style-css")))
          ) {
            var o = document.createElement("style");
            (o.id = "cascoon-style-css"),
              (o.textContent = n.innerHTML),
              null === (r = D.shadowRoot) || void 0 === r || r.appendChild(o),
              t.disconnect();
          }
        },
        L = new MutationObserver(function (t) {
          t.forEach(function (t) {
            t.addedNodes.forEach(function (t) {
              "cascoon-style-css" === t.id && x(L);
            });
          });
        });
      !(function () {
        var t = document.querySelector("#cascoon-style-css");
        if (t) (t.disabled = !0), x(L);
        else {
          var e = document.querySelector("head");
          L.observe(e, { childList: !0, subtree: !0 });
        }
      })(),
        null === (e = D.shadowRoot) || void 0 === e || e.appendChild(S),
        D.setAttribute("id", m),
        D.setAttribute("data-cascoon-id", P),
        v.setAttribute("cascoon-config-initialized", "true"),
        null === (r = v.parentNode) || void 0 === r || r.insertBefore(D, v);
      var T = { id: P, type: k, wrapper: S, params: E, scriptOrigin: j };
      new C(T).generate();
      var I = new MutationObserver(function (t) {
        t.forEach(function (t) {
          t.addedNodes.forEach(function () {
            !(function (t, e) {
              var r = t.params,
                n = t.id,
                o = r.promo_id,
                c = r.campaign_id,
                a = r.locale,
                i = r.shmarker,
                s = r.erid,
                l = r.powered_by,
                u = void 0 !== l && l,
                d = {
                  marker: i,
                  locale: a || "",
                  id: n,
                  erid: s,
                  node: e,
                  utm_medium: "network",
                  utm_keyword: "promo_".concat(o),
                  promo_id: o,
                  utm_campaign: c,
                  show: u,
                  wrapper_styles:
                    "position: absolute; bottom: -27px; right: 0;",
                  check_parent_color: !0,
                  origin_promo_id: n,
                  send_metrics: !0,
                };
              if (
                ((window.TP_POWERED_BY = window.TP_POWERED_BY || {
                  opts: [],
                  cb: !1,
                  loading: !1,
                }),
                window.TP_POWERED_BY.cb)
              )
                window.TP_POWERED_BY.cb(d);
              else if (
                (window.TP_POWERED_BY.opts.push(d),
                !window.TP_POWERED_BY.loading)
              ) {
                window.TP_POWERED_BY.loading = !0;
                var p = document.createElement("script");
                (p.src = "https://travelpayouts.com/powered_by/powered_by.js"),
                  document.head.appendChild(p);
              }
            })(T, S),
              I.disconnect();
          });
        });
      });
      I.observe(S, { childList: !0 }),
        N.launch({
          errorsHandler: u.init({ id: o.id }),
          config: _,
          widget: T,
          layoutConfig: n,
          wrapper: S,
          tagName: m,
          scriptUrl: O,
        });
    });
  })();

  var config = {
    id: "7879",
    globals: {
      createdByConstructor: true,
      url: "https://tp.media/r",
      method: "GET",
      target: "_blank",
      complicating_fields: ["LinkImage_1", "title"],
      hiddens: {
        currency: "currency",
        trace_id: "Zz19e8eae4808c4320b8ffa80-493744",
        locale: "locale",
        marker: "shmarker",
        p: "promo_id",
        trs: "trs",
        tag: "",
        type: "click",
        campaign_id: "campaign_id",
        u: "",
        target_host: "searchUrl",
      },
    },
    fields: {
      LinkImage_1: {
        type: "LinkImage",
        // params: {
        //   url: "https://hrmt.travelpayouts.com/travelpayouts/dHJhdmVscGF5b3V0cy9icmFuZHMvbG9nby8xMDA.svg",
        //   href: "https://www.aviasales.com",
        //   redirect: true,
        //   height: 30,
        //   width: 130,
        // },
      },
      title: {
        type: "Title",
        layout: { align: "right" },
        params: {
          title_size: "16",
          style: {
            xl: {
              height: "30px",
              display: "flex",
              "align-items": "center",
              "justify-content": "end",
            },
            l: {
              height: "30px",
              display: "flex",
              "align-items": "center",
              "justify-content": "end",
            },
            m: {
              height: "30px",
              display: "flex",
              "align-items": "center",
              "justify-content": "end",
            },
          },
        },
      },
      origin_and_destination: {
        type: "CombinedAutocomplete",
        params: {
          url: "https://suggest.travelpayouts.com/search?service=aviasales",
          fetch_default: true,
          fetch_on_focus: true,
          required: true,
          geoip_default: {
            origin: true,
          },
          hiddens: {
            origin: {
              slug: "origin_slug",
              subtitle: "origin_subtitle",
              title: "origin_title",
            },
            destination: {
              slug: "destination_slug",
              subtitle: "destination_subtitle",
              title: "destination_title",
            },
          },
        },
      },
      DateRange: {
        type: "DateRangePicker",
        params: {
          from_max_offset: 3,
          to_max_offset: 2,
          from_value: function (dayjs) {
            return new Date(dayjs().add(7, "day"));
          },
          to_value: function (dayjs) {
            return new Date(dayjs().add(14, "day"));
          },
          hiddens: {
            from_name: "DateRange_from_name",
            to_name: "DateRange_to_name",
            format: "YYYY-MM-DD",
          },
          disablable: true,
        },
      },
      passengers: {
        type: "CountersSelect",
        params: {
          hiddens: {
            adults: "passengers_adults",
            children: "passengers_children",
            lap_infants: "passengers_lap_infants",
          },
          radio: [
            {
              label: "economy",
              value: "0",
              name: "trip_class",
              defaultChecked: true,
            },
            { label: "business", value: "1", name: "trip_class" },
          ],
          fields: [
            {
              field_name: "adults",
              min_value: 0,
              max_value: 9,
              value: 1,
            },
            {
              field_name: "children",
              min_value: 0,
              max_value: 9,
              value: 0,
            },
            {
              field_name: "lap_infants",
              min_value: 0,
              max_value: 9,
              value: 0,
            },
          ],
        },
      },
      Submit_6: {
        type: "Submit",
        params: null,
      },
      Show_hotels: {
        type: "Booking",
        params: {
          checked: true,
          link_id: "booking",
          destination_name: "destination_slug",
          currency: "usd",
          filled: true,
          passengers: {
            adults: "passengers_adults",
            children: "passengers_children",
            lap_infants: "passengers_lap_infants",
          },
          depart_date: { field: "DateRange_from_name", format: "YYYY-MM-DD" },
          return_date: { field: "DateRange_to_name", format: "YYYY-MM-DD" },
        },
      },
    },
    layout: {
      xl: [
        [
          {
            id: "LinkImage_1",
            width: 6,
          },
          {
            id: "title",
            width: 6,
          },
        ],
        [
          {
            id: "origin_and_destination",
            width: 4,
          },
          {
            id: "DateRange",
            width: 4,
          },
          {
            id: "passengers",
            width: 2,
          },
          {
            id: "Submit_6",
            width: 2,
          },
        ],
        [
          {
            id: "Show_hotels",
            align: "right",
            width: 12,
          },
        ],
      ],
      l: [
        [
          {
            id: "LinkImage_1",
            width: 6,
          },
          {
            id: "title",
            width: 6,
          },
        ],
        [
          {
            id: "origin_and_destination",
            width: 12,
          },
        ],
        [
          {
            id: "DateRange",
            width: 6,
          },
        ],
        [
          {
            id: "passengers",
            width: 3,
          },
        ],
        [
          {
            id: "Submit_6",
            width: 3,
          },
        ],
        [
          {
            id: "Show_hotels",
            align: "right",
            width: 12,
          },
        ],
      ],
      m: [
        [
          {
            id: "LinkImage_1",
            width: 6,
          },
          {
            id: "title",
            width: 6,
          },
        ],
        [
          {
            id: "origin_and_destination",
            width: 12,
          },
        ],
        [
          {
            id: "DateRange",
            width: 6,
          },
        ],
        [
          {
            id: "passengers",
            width: 6,
          },
        ],
        [
          {
            id: "Submit_6",
            width: 12,
          },
        ],
        [
          {
            id: "Show_hotels",
            align: "right",
            width: 12,
          },
        ],
      ],
      s: [
        [
          {
            id: "LinkImage_1",
            width: 12,
          },
        ],
        [
          {
            id: "origin_and_destination",
            width: 12,
          },
        ],
        [
          {
            id: "DateRange",
            width: 6,
          },
        ],
        [
          {
            id: "passengers",
            width: 6,
          },
        ],
        [
          {
            id: "Submit_6",
            width: 12,
          },
        ],
        [
          {
            id: "Show_hotels",
            align: "right",
            width: 12,
          },
        ],
      ],
      xs: [
        [
          {
            id: "LinkImage_1",
            width: 12,
          },
        ],
        [
          {
            id: "origin_and_destination",
            width: 12,
          },
        ],
        [
          {
            id: "DateRange",
            width: 12,
          },
        ],
        [
          {
            id: "passengers",
            width: 12,
          },
        ],
        [
          {
            id: "Submit_6",
            width: 12,
          },
        ],
        [
          {
            id: "Show_hotels",
            align: "right",
            width: 12,
          },
        ],
      ],
    },
    default_params: {
      custom_url: "https://www.aviasales.com/search",
      primary: "#32a8dd",
      secondary: "#FFFFFF",
      dark: "#262626",
      light: "#FFFFFF",
      special: "#FFFFFF",
      no_labels: false,
      border_radius: "50",
    },
    events: {
      submit: function (e) {
        var searchUrl = "";

        if (this.elements.target_host.value.includes("aviasales")) {
          searchUrl = this.elements.target_host.value;
        } else {
          if (this.elements.locale.value === "ru") {
            searchUrl = "www.aviasales.ru/search";
          } else {
            searchUrl = "www.aviasales.com/search";
          }
        }
        var host = searchUrl;
        var target_host = this.elements.target_host.value;

        if (target_host.endsWith("hotels")) {
          host = target_host.replace(/hotels$/, "flights");
        }
        if (target_host.endsWith("flights")) {
          host = target_host;
        }

        // https://aviasales.atlassian.net/wiki/spaces/EX/pages/4131291137
        const stripDateToFormat = (dateString) => {
          const [y = "", m = "", d = ""] = dateString.split("-");
          return `${d}${m}`;
        };

        const departDate = stripDateToFormat(
          this.elements.DateRange_from_name?.value
        );

        const returnDate = this.elements.DateRange_to_name?.value
          ? stripDateToFormat(this.elements.DateRange_to_name?.value)
          : "";

        const origin = this.elements.origin_slug?.value;
        const destination = this.elements.destination_slug?.value;
        const currency = this.elements.currency?.value;
        const adults = this.elements.passengers_adults?.value || 1;
        const children = this.elements.passengers_children?.value || 0;
        const infants = this.elements.passengers_lap_infants?.value || 0;
        const tripClass =
          Number(this.elements.trip_class?.value) === 1 ? "c" : "";
        const language = this.elements.locale?.value;
        const locale = this.elements.locale?.value;

        const aviaSalesParamsString = `${origin}${departDate}${destination}${returnDate}${tripClass}${adults}${children}${infants}`;

        const additionalParamsString = `currency=${currency}&language=${language}&locale=${locale}&with_request=true`;

        this.elements.u.value = `https://${host}/${aviaSalesParamsString}?${additionalParamsString}`;
      },
    },
  };

  var translations = {
    common: { close: "Close" },
    dayjs: {
      all_months: "All months",
      firstDay: 1,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      name: "en",
      ordinal: "(function(n) { return n })",
      weekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    },
    error_banner: {
      accommodation: {
        button: "Go to site",
        subtitle:
          "Find a hotel, apartment, or house for your vacation on %{website}",
        title: "Find the best price on accommodation",
      },
      button: "Go to the website",
      car_and_bike_rentals: {
        button: "Go to site",
        subtitle:
          "Choose and rent the perfect mode of transportation on %{website}",
        title: "Get the best deals on transportation rentals",
      },
      common: {
        button: "Go to the website",
        subtitle:
          "But you can always see the offers on the advertiser's website",
        title: "Couldn't load",
      },
      cruises: {
        button: "Go to site",
        subtitle: "Choose and book a cruise on %{website}",
        title: "Get the best deal on your next cruise",
      },
      default: {
        button: "Go to site",
        subtitle: "Find the best offers for your vacation on %{website}",
        title: "Get the best deals on tour services",
      },
      flights: {
        button: "Go to site",
        subtitle: "Search for, compare, and buy airline tickets on %{website}",
        title: "Get the best deals on airline tickets",
      },
      insurances: {
        button: "Go to site",
        subtitle: "Choose a policy with the best benefits on %{website}",
        title: "Get the best deal on travel insurance",
      },
      nothing_found: {
        button: "Go to the website",
        subtitle:
          "But you can always see the offers on the advertiser's website",
        title: "Nothing found",
      },
      package_tours: {
        button: "Go to site",
        subtitle:
          "Pick a tour on %{website} and let the professionals organize your trip",
        title: "Buy a tour from a trusted agency",
      },
      subtitle: "But you can always see the offers on the advertiser's website",
      title: "Couldn't load",
      tours_and_activities: {
        button: "Go to site",
        subtitle:
          "Make your travel unforgettable by booking an excursion on %{website}",
        title: "Get the best deals on excursions",
      },
      trains_and_buses: {
        button: "Go to site",
        subtitle:
          "Search for, compare, and buy public transportation passes on %{website}",
        title: "Get the best deals on public transportation fares",
      },
    },
    title: "Couldn't load",
    widgets: {
      1789: {
        button_link: { text: "More rides on Blablacar.ru" },
        link: { text: "More" },
        logo: { alt: "Blablacar logo" },
        seats: {
          seats: {
            few: "%{count} available seats",
            many: "%{count} available seats",
            one: "%{count} available seat",
            other: "%{count} available seats",
          },
        },
        title: {
          subtitle: "Travel cheaper with reliable drivers",
          title: "Looking for directions?",
        },
      },
      2689: {
        drop_off_another_place: { label: "Drop car off at the same location" },
        drop_off_date: {
          date_format: "D MMM, dd",
          label: "Drop-off date",
          placeholder: "Drop-off date",
        },
        drop_off_location: {
          label: "Drop-off location",
          placeholder: "city, airport, station, region, districtâ€¦",
        },
        drop_off_time: { label: "Drop-off time" },
        label: "Drop car off at the same location",
        logo: { alt: "Logo" },
        pick_up_date: {
          date_format: "D MMM, dd",
          label: "Pick-up date",
          placeholder: "Pick-up date",
        },
        pick_up_location: {
          label: "Pick-up location",
          placeholder: "city, airport, station, region, districtâ€¦",
        },
        pick_up_time: { label: "Pick-up time" },
        return_another_place: { label: "Drop car off at the same location" },
        return_location: {
          label: "Drop-off location",
          placeholder: "city, airport, station, region, districtâ€¦",
        },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        title: { subtitle: "Lowest prices", title: "Car rental" },
      },
      2693: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check-in date",
          placeholder: "Check-in date",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check-out date",
          placeholder: "Check-out date",
        },
        direction: {
          label: "Destination name",
          placeholder: "e.g. city, region, district or specific hotel",
        },
        logo: { alt: "Search hotels" },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        title: {
          subtitle: "From cozy country homes to funky city apartments",
          title: "Search hotels",
        },
      },
      2694: {
        depart_date: { date_format: "D MMM, dd", placeholder: "Depart date" },
        destination: { placeholder: "To" },
        logo: { alt: "Train tickets" },
        origin: { placeholder: "From" },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Find tickets" },
        title: {
          subtitle: "Check timetable and buy online just in 4 minutes",
          title: "Russian train ticket",
        },
      },
      2717: {
        depart_date: {
          date_format: "D MMM, dd",
          label: "Departure not earlier",
          placeholder: "Depart",
        },
        direction: { label: "Direction", placeholder: "Direction" },
        logo: { alt: "Cruises at the best price" },
        return_date: {
          date_format: "D MMM, dd",
          label: "Return no later than",
          placeholder: "Return",
        },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Find cruise" },
        title: {
          subtitle: "Fascinating routes from different companies",
          title: "Cruises at the best price",
        },
      },
      2719: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check-in date",
          placeholder: "Check-in date",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check-out date",
          placeholder: "Check-out date",
        },
        destination: {
          label: "Destination name",
          placeholder: "e.g. city, region",
        },
        logo: { alt: "Logo" },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        title: {
          subtitle:
            "100,000 variants in Russia and abroad with a guarantee of settlement",
          title: "Daily rate apartments",
        },
      },
      2808: {
        depart_date: { date_format: "ddd D/M", placeholder: "Depart" },
        destination: { placeholder: "To?" },
        flight_class: {
          fields: {
            business: { title: "Business" },
            economy: { title: "Economy" },
            first: { title: "First" },
            premium: { title: "Premium Economy" },
          },
          placeholder: "Flight class",
        },
        logo: { alt: "Flights Search" },
        origin: { placeholder: "From?" },
        passengers: {
          fields: {
            adults: { title: "Adults" },
            children: { subtitle: "2-11", title: "Children" },
            lap_infants: { subtitle: "under 2", title: "Lap infants" },
            seat_infants: { subtitle: "under 2", title: "Seat infants" },
            youth: { subtitle: "12-17", title: "Youth" },
          },
          placeholder: "Passengers",
          plural: { one: "%{count} passenger", other: "%{count} passengers" },
        },
        return_date: {
          date_format: "ddd D/M",
          one_way: "No return ticket needed",
          placeholder: "Return",
        },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        title: {
          subtitle: "Search hundreds of travel sites at once",
          title: "Flights Search",
        },
      },
      2811: {
        col5: { select_dates: "Select dates" },
        direct: "direct",
        error: {
          link: "Proceed to",
          text: "Select a date and search for cheap flights by destination",
          title: "Flight schedule not found",
        },
        flights_type: {
          direct: "direct",
          stops: { one: "%{count} stop", other: "%{count} stops" },
        },
        show_hotels: { label: "Show hotels" },
        title: {
          days: { one: "%{count} day", other: "%{count} days" },
          flights: {
            one: "%{count} flight in a week,",
            other: "%{count} flights in a week,",
          },
          flights_every_day: {
            one: "More than %{count} flight every day, from",
            other: "More than %{count} flights every day, from",
          },
          hours: { one: "%{count}h", other: "%{count}h" },
          min: { one: "%{count}m", other: "%{count}m" },
        },
      },
      2937: {
        depart_date: { date_format: "dd D/M", placeholder: "Depart" },
        destination: { placeholder: "Where To?" },
        logo: { alt: "Best transportation options" },
        origin: { placeholder: "Where From?" },
        passengers: {
          fields: { adults: { title: "Adults" } },
          placeholder: "Passengers",
          plural: { one: "%{count} passenger", other: "%{count} passengers" },
        },
        return_date: {
          date_format: "dd D/M",
          one_way: "No return ticket needed",
          placeholder: "Return",
        },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Find Transport" },
        title: {
          subtitle:
            "Discover how to get anywhere by plane, train, bus, ferry \u0026 car",
          title: "Best transportation options",
        },
      },
      3408: {
        depart_date: {
          date_format: "D MMM, dd",
          label: "Date",
          placeholder: "Date of departure",
        },
        destination: {
          label: "Destination",
          placeholder: "To (e.g. Paris or CDG)",
        },
        disruption: {
          fields: {
            cancellation: { title: "Flight cancelled" },
            delay: { title: "Flight delayed" },
            denied_boarding: { title: "Denied boarding" },
            missed_connection: { title: "Missed connection" },
          },
          label: "What happened?",
        },
        logo: { alt: "Compensair" },
        origin: { label: "Origin", placeholder: "From (e.g. London or LHR)" },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Check flight" },
        title: {
          subtitle:
            "For delayed or cancelled flight, denied boarding or missed connection",
          title: "Claim up to â‚¬600 per passenger",
        },
      },
      3410: {
        depart_date: {
          date_format: "D MMM, dd",
          placeholder: "Departure Date",
        },
        destination: { placeholder: "Where To?" },
        logo: { alt: "FlixBus" },
        origin: { placeholder: "Where From?" },
        passengers: {
          fields: {
            adults: { subtitle: "from 15 years", title: "Adults" },
            bicycles: { title: "Bikes" },
            children: { subtitle: "0 to 14 years", title: "Children" },
          },
          placeholder: "Passengers",
          plural: { one: "%{count} passenger", other: "%{count} passengers" },
        },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        title: {
          subtitle: "Comfortable and cheap busses in Europe",
          title: "Low cost bus travel from 5 â‚¬",
        },
      },
      3414: {
        depart_date: { date_format: "ddd D/M", placeholder: "Departure" },
        destination: { placeholder: "To" },
        logo: { alt: "Flights Search" },
        origin: { placeholder: "From" },
        passengers: {
          fields: { adults: { title: "Passengers" } },
          placeholder: "Passengers",
          plural: { one: "%{count} passenger", other: "%{count} passengers" },
        },
        return_date: {
          date_format: "ddd D/M",
          one_way: "No return ticket needed",
          placeholder: "Return",
        },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        title: {
          subtitle: "Find cheap flights and discover new destinations",
          title: "Flights Search",
        },
      },
      3610: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check-in date",
          placeholder: "Check-in date",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check-out date",
          placeholder: "Check-out date",
        },
        direction: {
          label: "Destination name",
          placeholder: "e.g. city, region, district or specific hotel",
        },
        logo: { alt: "Search hotels" },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        title: {
          subtitle: "From cozy country homes to funky city apartments",
          title: "Search hotels",
        },
      },
      3996: {
        check_in_date: {
          date_format: "ddd D/M",
          label: "Check-in",
          placeholder: "Check-in",
        },
        check_out_date: {
          date_format: "ddd D/M",
          label: "Check-out",
          placeholder: "Check-out",
        },
        direction: {
          label: "City / Hotel",
          placeholder: "Enter the name of the city or district",
        },
        logo: { alt: "hotels.com" },
        submit: { text: "Search" },
        title: {
          subtitle: "Destinations and properties around the world",
          title: "Search for hotels",
        },
      },
      4026: {
        info: {
          check_hotel: "View hotel",
          k_from_center: "km from city center",
          price_per_night_from: "Price per night",
          rating: "Guest rating",
        },
        language: "en_GB",
        locale: "en",
        tabs: {
          center: "Hotels in the center",
          distance: "Close to city center",
          gay: "Gay friendly",
          highprice: "Expensive",
          lake_view: "Lake view",
          luxury: "Luxury",
          panoramic_view: "Panoramic view",
          pets: "Pet friendly",
          pool: "Pool",
          popularity: "Popular",
          price: "Cheap",
          rating: "Rating",
          restaurant: "Restaurant",
          river_view: "River view",
          russians: "Russian guests",
          sea_view: "Sea view",
          smoke: "Smoking friendly",
          stars0: "0 stars",
          stars1: "1 star",
          stars2: "2 stars",
          stars3: "3 stars",
          stars4: "4 stars",
          stars5: "5 stars",
          tophotels: "Top hotels",
        },
        trustyou: "Hotel rating provided by TrustYouâ„¢",
      },
      4041: {
        all_months: "all_months",
        best_price: "Best price",
        calendar: { best_price: "Best price", million: "M", thousand: "K" },
        calendar_info_details: {
          days: { one: "%{count} day", other: "%{count} days" },
          one: "%{count} day",
          one_way: "One way",
          round_trip: "Round trip",
        },
        calendar_tooltip_button: { ticket: "Find this ticket" },
        calendar_tooltip_from: {
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
          from: "From",
        },
        calendar_tooltip_mobile_button: { ticket: "Find this ticket" },
        calendar_tooltip_mobile_from: {
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
          from: "From",
        },
        calendar_tooltip_mobile_price: { from: "from" },
        calendar_tooltip_mobile_return: {
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
          return: "Return",
        },
        calendar_tooltip_price: { from: "from" },
        calendar_tooltip_return: {
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
          return: "Return",
        },
        calendar_travel_info: { one_way: "One way", round_trip: "Round trip" },
        days: { one: "%{count} day", other: "%{count} days" },
        destination: { label: "To", placeholder: "City" },
        direct_flights_only: { label: "Direct flights only" },
        flights_stop: { one: "%{count} stop", other: "%{count} stops" },
        from: "from",
        label: "One way",
        million: "M",
        one: "%{count} day",
        one_way: { label: "One way" },
        only_direct: { label: "Direct flights only" },
        origin: { label: "From", placeholder: "City" },
        other: "%{count} stops",
        placeholder: "City",
        range: {
          days: { one: "%{count} day", other: "%{count} days" },
          few: "%{count} days",
          from: "from",
          other: "%{count} days",
          to: "to",
        },
        range_title: { label: "Vacation\u0026nbsp;duration" },
        round_trip: { label: "Round trip" },
        ticket: "Find this ticket",
        to: "to",
      },
      4052: {
        button_link: { text: "Show more deals" },
        card_button: { text: "View flight" },
        card_duration: {
          days: {
            few: "%{count} days in the destination city",
            many: "%{count} days in the destination city",
            one: "%{count} day in the destination city",
            other: "%{count} days in the destination city",
          },
        },
        card_title: {
          direct_flight: "direct flight",
          flights_stop: {
            few: "%{count} stops",
            many: "%{count} stops",
            one: "%{count} stop",
            other: "%{count} stops",
          },
          many: "%{count} stops",
        },
        days: {
          few: "%{count} days in the destination city",
          many: "%{count} days in the destination city",
          one: "%{count} day in the destination city",
          other: "%{count} days in the destination city",
        },
        direct_flight: "direct flight",
        flights_stop: {
          few: "%{count} stops",
          many: "%{count} stops",
          one: "%{count} stop",
          other: "%{count} stops",
        },
        one: "%{count} stop",
        subtitle: { text: "return flights" },
        text: "return flights",
        title: { subtitle: "return flights", text: "Cheap flights from" },
      },
      4053: {
        subscription: {
          agreement: {
            link: "terms and conditions of personal data processing.",
            text: 'By clicking "Subscribe" you agree to the',
          },
          banner: {
            send_letter: "Send the email again.",
            send_letter_error:
              "There were issues while sending the follow-up email.",
            send_letter_success:
              "The follow-up email has been successfully sent.",
            text: "Activate your subscription by clicking on the link from the email sent to your address. Your subscription is saved and will be available after confirmation.",
          },
          description:
            "Simple! Keep track of prices for your favorite destinations.",
          description_compact: "To get notified about price drops",
          email: { placeholder: "Enter email" },
          form: {
            add_direction: "Add direction",
            cancel: "Cancel",
            city_of_departure: "Departure city",
            city_or_country_destination: "Destination city/country",
            depart: "Depart",
            exact_dates: "Exact dates",
            flexible_dates: "Flexible dates",
            from: "From",
            max_flight_duration: "Flight duration",
            max_flight_duration_any: "Any",
            max_price: "Price",
            max_price_any: "Any",
            max_stops: "Number of stops",
            max_stops_any: "Any",
            max_stops_no: "Non-stop",
            one_way: "One way",
            return: "Return",
            save: "Save",
            to: "To",
          },
          highlight_alert: {
            description:
              "The price will drop soon. Leave your email and wait to get notified.",
            title: "Couldn't find the right price?",
          },
          popup: {
            add_direction: "Add direction",
            flight_duration: {
              any: "Any",
              capped: {
                few: "less than %{count} hours",
                many: "less than %{count} hours",
                one: "less than %{count} hour",
                other: "less than %{count} hours",
              },
            },
            loader: "Loading...",
            news_subscription: "Subscribe to news",
            price: { any: "Any", capped: "less than %{price} %{currency}" },
            stops: {
              any: "Any",
              capped: "%{stops} or less",
              none: "Without stops",
            },
            subscription_card: {
              delete: "Delete",
              edit: "Edit",
              freeze: "Freeze",
              info: {
                dates: {
                  flexible: "Flexible months",
                  one_way: "Depart date",
                  round_trip: "Depart/Return",
                },
                direction: "Origin/Destination",
                flight_duration: "Flight duration",
                price: "Price",
                stops: "Number of stops",
                vacation_duration: "Vacation duration",
              },
              status: {
                disabled: "Non-activated subscription",
                frozen: "Frozen",
                outdated: "Outdated subscription",
              },
              unfreeze: "Unfreeze",
            },
            title: "Create subscription",
            vacation_duration: {
              few: "from %{min} to %{max} days",
              many: "from %{min} to %{max} days",
              one: "from %{min} to %{max} days",
              other: "from %{min} to %{max} days",
            },
          },
          price_alert: {
            description:
              "Air tickets prices frequently change. Subscribe now to stay updated.",
            title: "Stay informed about price changes!",
          },
          subscribe: { text: "Subscribe", text_compact: "Subscribe" },
          title: "Looking for cheap flights?",
          title_compact: "Subscribe",
        },
      },
      4054: {
        button_link: { text: "Find this ticket" },
        tooltip_date_return: { date_return: "Return" },
        tooltip_date_to: {
          date_to: "To",
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
        },
      },
      4063: {
        chansey: {
          hotel: {
            one: "%{count} review",
            review: "Based on",
            review_fallback: "no review",
            reviews_count: null,
            reviews_plural: {
              one: "%{count} review",
              other: "%{count} reviews",
            },
          },
          range_error: "Bookings can only be made for a maximum of 30 nights.",
          review_fallback: "no review",
          search: {
            booking_at: "on",
            button_text: "Book for",
            checkout: "Check-Out",
            date_format: "D MMM YYYY",
            datepicker_placeholder: {
              checkin: "Check-In",
              checkout: "Check-Out",
            },
            enter_dates: "Enter dates \u0026 see best prices",
            nights_plural: { one: "%{count} night", other: "%{count} nights" },
            nigths_price_for: "for",
            nigths_price_price: "Price",
            no_rooms:
              "Sorry, there are no available rooms on your selected dates.",
            other: "%{count} nights",
            price_error: "Enter other dates",
            show_prices: "Show prices",
          },
          validation: {
            empty_date_error: "Fill dates",
            range_error:
              "Bookings can only be made for a maximum of 30 nights.",
          },
        },
      },
      4072: {
        depart_date: { date_format: "D MMM, dd", placeholder: "Depart date" },
        destination: { placeholder: "To" },
        logo: { alt: "Train tickets" },
        origin: { placeholder: "From" },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Find tickets" },
        title: {
          subtitle: "Check timetable and buy online just in 4 minutes",
          title: "Russian train ticket",
        },
      },
      4084: {
        button_link: { text: "Show more deals" },
        card_button: { text: "View flight" },
        card_duration: {
          days: {
            few: "%{count} days in the destination city",
            many: "%{count} days in the destination city",
            one: "%{count} day in the destination city",
            other: "%{count} days in the destination city",
          },
        },
        card_title: {
          direct_flight: "direct flight",
          flights_stop: {
            few: "%{count} stops",
            many: "%{count} stops",
            one: "%{count} stop",
            other: "%{count} stops",
          },
          many: "%{count} stops",
        },
        days: {
          few: "%{count} days in the destination city",
          many: "%{count} days in the destination city",
          one: "%{count} day in the destination city",
          other: "%{count} days in the destination city",
        },
        direct_flight: "direct flight",
        flights_stop: {
          few: "%{count} stops",
          many: "%{count} stops",
          one: "%{count} stop",
          other: "%{count} stops",
        },
        one: "%{count} stop",
        subtitle: { text: "return flights" },
        text: "return flights",
        title: { subtitle: "return flights", text: "Cheap flights from" },
      },
      4085: {
        destination: { placeholder: "City or place" },
        logo: { alt: "www.musement.com" },
        submit: { text: "Search" },
        title: { title: "Book tickets and experiences all over the world" },
      },
      4097: {
        adults: { many: "for %{count} adults" },
        button_link: { from: "from", text: "Choose a tour" },
        card_button: { text: "View tour" },
        card_dates: {
          from: "from",
          nights: {
            few: "to %{count} nights",
            many: "to %{count} nights",
            one: "to %{count} night",
            other: "to %{count} nights",
          },
        },
        card_guest: {
          adults: {
            few: "for %{count} adults",
            many: "for %{count} adults",
            one: "for %{count} adult",
            other: "for %{count} adults",
          },
        },
        from: "from",
        many: "for %{count} adults",
        text: "View tour",
        title: { text: "Popular tours" },
      },
      4098: {
        adults: { one: "for %{count} adult" },
        button_link: { from: "from", text: "Choose a tour" },
        card_button: { text: "View tour" },
        card_dates: {
          from: "from",
          many: "to %{count} nights",
          nights: {
            few: "to %{count} nights",
            many: "to %{count} nights",
            one: "to %{count} night",
            other: "to %{count} nights",
          },
        },
        card_guest: {
          adults: {
            few: "for %{count} adults",
            many: "for %{count} adults",
            one: "for %{count} adult",
            other: "for %{count} adults",
          },
        },
        from: "from",
        nights: { other: "to %{count} nights" },
        one: "for %{count} adult",
        other: "to %{count} nights",
        text: "Choose a tour",
        title: { text: "Popular tours" },
      },
      4128: {
        depart_date: { date_format: "ddd D/M", placeholder: "Depart" },
        destination: { placeholder: "To?" },
        flight_class: {
          fields: {
            business: { title: "Business" },
            economy: { title: "Economy" },
            first: { title: "First" },
            premium: { title: "Premium Economy" },
          },
          placeholder: "Flight class",
        },
        logo: { alt: "Flights Search" },
        origin: { placeholder: "From?" },
        passengers: {
          fields: {
            adults: { title: "Adults" },
            children: { subtitle: "2-11", title: "Children" },
            lap_infants: { subtitle: "under 2", title: "Lap infants" },
            seat_infants: { subtitle: "under 2", title: "Seat infants" },
            youth: { subtitle: "12-17", title: "Youth" },
          },
          placeholder: "Passengers",
          plural: { one: "%{count} passenger", other: "%{count} passengers" },
        },
        return_date: {
          date_format: "ddd D/M",
          one_way: "No return ticket needed",
          placeholder: "Return",
        },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        title: {
          subtitle: "Search hundreds of travel sites at once",
          title: "Flights Search",
        },
      },
      4131: {
        alt: "Search hotels",
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check-in date",
          placeholder: "Check-in date",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check-out date",
          placeholder: "Check-out date",
        },
        date_format: "D MMM, dd",
        direction: {
          label: "Destination name",
          placeholder: "e.g. city, region, district or specific hotel",
        },
        label: "Show hotels",
        logo: { alt: "Search hotels" },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        text: "Search",
        title: { title: "Search hotels" },
      },
      4132: {
        depart_date: { date_format: "ddd D/M", placeholder: "Depart" },
        destination: { placeholder: "To?" },
        flight_class: {
          fields: {
            bf: { title: "Business/First" },
            business: { title: "Business" },
            economy: { title: "Economy/Premium Economy" },
            first: { title: "First" },
            premium: { title: "Premium Economy" },
          },
          placeholder: "Class",
        },
        logo: { alt: "Trip.com" },
        origin: { placeholder: "From?" },
        passengers: {
          fields: {
            adults: { title: "Adults" },
            children: { subtitle: "2-11 yrs", title: "Children" },
            seat_infants: { subtitle: "\u003c2 yrs", title: "Infants" },
          },
          placeholder: "Passengers",
          plural: {
            few: "%{count} passengers",
            many: "%{count} passengers",
            one: "%{count} passenger",
            other: "%{count} passengers",
          },
        },
        return_date: {
          date_format: "ddd D/M",
          one_way: "No return ticket needed",
          placeholder: "Return",
        },
        submit: { text: "Search" },
        title: {
          subtitle: "Find cheap flights and discover new destinations",
          title: "Flights Search",
        },
      },
      4211: {
        button_link: { text: "View all offers" },
        card_button: { text: "View cruise" },
        card_dates: {
          from: "from",
          nights: {
            few: "to %{count} nights",
            many: "to %{count} nights",
            one: "to %{count} night",
            other: "to %{count} nights",
          },
        },
        card_price: { from: "from" },
        title: { title: "Best Price Cruises" },
      },
      4228: {
        button_link: { text: "View all offers" },
        card_button: { text: "View cruise" },
        card_dates: {
          from: "from",
          nights: {
            few: "to %{count} nights",
            many: "to %{count} nights",
            one: "to %{count} night",
            other: "to %{count} nights",
          },
        },
        card_price: { from: "from" },
        title: { title: "Best Price Cruises" },
      },
      4285: {
        button_link: { text: "Ð¡heck prices" },
        from: "from",
        rating: "Guest rating",
        text: "Ð¡heck prices",
        tooltip_duration: { average_price: "Average price for 1 night" },
        tooltip_price: { duration: "per night", from: "from" },
        tooltip_rating: { rating: "Guest rating" },
      },
      4294: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check-in date",
          placeholder: "Check-in date",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check-out date",
          placeholder: "Check-out date",
        },
        direction: {
          label: "Destination name",
          placeholder: "e.g. city, region, district or specific hostel",
        },
        logo: { alt: "Search hostels" },
        submit: { text: "Search" },
        title: {
          subtitle:
            "36,000 properties, 178 countries. Over 13 million verified guest review",
          title: "Search hostels",
        },
      },
      4362: {
        drop_off_another_place: { label: "Drop car off at different location" },
        drop_off_date: {
          date_format: "D MMM YYYY",
          label: "Drop-off date",
          placeholder: "Drop-off date",
        },
        drop_off_location: {
          label: "Drop-off localtion",
          placeholder: "Enter drop-off location",
        },
        drop_off_time: { label: "Drop-off time" },
        logo: { alt: "Car Search" },
        pick_up_date: {
          date_format: "D MMM YYYY",
          label: "Pick-up date",
          placeholder: "Pick-up date",
        },
        pick_up_location: {
          label: "Pick-up localtion",
          placeholder: "Enter pick-up location",
        },
        pick_up_time: { label: "Pick-up time" },
        submit: { text: "Search" },
        title: {
          subtitle: "Best Worldwide Car Hire Deals",
          title: "Search for Car Hire",
        },
      },
      4421: {
        all_months: "all_months",
        calendar: { best_price: "Best price", million: "M", thousand: "K" },
        calendar_info_details: {
          days: { one: "%{count} day", other: "%{count} days" },
          one: "%{count} day",
          one_way: "One way",
          round_trip: "Round trip",
        },
        calendar_tooltip_button: { ticket: "Find this ticket" },
        calendar_tooltip_from: {
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
          from: "From",
        },
        calendar_tooltip_mobile_button: { ticket: "Find this ticket" },
        calendar_tooltip_mobile_from: {
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
          from: "From",
        },
        calendar_tooltip_mobile_price: { from: "from" },
        calendar_tooltip_mobile_return: {
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
          return: "Return",
        },
        calendar_tooltip_price: { from: "from" },
        calendar_tooltip_return: {
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
          return: "Return",
        },
        calendar_travel_info: { one_way: "One way", round_trip: "Round trip" },
        days: { one: "%{count} day", other: "%{count} days" },
        destination: { label: "To", placeholder: "City" },
        direct_flights_only: { label: "Direct flights only" },
        flights_stop: { one: "%{count} stop", other: "%{count} stops" },
        from: "from",
        label: "Direct flights only",
        million: "M",
        one: "%{count} day",
        one_way: { label: "One way" },
        only_direct: { label: "Direct flights only" },
        origin: { label: "From", placeholder: "City" },
        placeholder: "City",
        range: {
          days: { one: "%{count} day", other: "%{count} days" },
          few: "%{count} days",
          from: "from",
          to: "to",
        },
        range_title: { label: "Vacation\u0026nbsp;duration" },
        round_trip: { label: "Round trip" },
        ticket: "Find this ticket",
      },
      4440: {
        button_link: { text: "Show all" },
        col2: { text: "On the way" },
        col3: { from: "from" },
        submit: { text: "Select a date" },
        title: { title: "Train schedule" },
        titleCol1: { title: "Train number" },
        titleCol2: { title: "Departure / Arrival" },
        titleCol3: { text: "Estimated prices" },
      },
      4464: {
        drop_off_another_place: { label: "Drop car off at different location" },
        drop_off_date: {
          date_format: "D MMM YYYY",
          label: "Drop-off date",
          placeholder: "Drop-off date",
        },
        drop_off_location: {
          label: "Drop-off localtion",
          placeholder: "Enter drop-off location",
        },
        drop_off_time: { label: "Drop-off time" },
        logo: { alt: "Car Search" },
        pick_up_date: {
          date_format: "D MMM YYYY",
          label: "Pick-up date",
          placeholder: "Pick-up date",
        },
        pick_up_location: {
          label: "Pick-up localtion",
          placeholder: "Enter pick-up location",
        },
        pick_up_time: { label: "Pick-up time" },
        submit: { text: "Search" },
        title: {
          subtitle: "Best Worldwide Car Hire Deals",
          title: "Search for Car Hire",
        },
      },
      4479: {
        drop_off_another_place: { label: "Drop car off at different location" },
        drop_off_date: {
          date_format: "D MMM YYYY",
          label: "Drop-off date",
          placeholder: "Drop-off date",
        },
        drop_off_location: {
          label: "Drop-off localtion",
          placeholder: "Enter drop-off location",
        },
        drop_off_time: { label: "Drop-off time" },
        logo: { alt: "Car Search" },
        pick_up_date: {
          date_format: "D MMM YYYY",
          label: "Pick-up date",
          placeholder: "Pick-up date",
        },
        pick_up_location: {
          label: "Pick-up localtion",
          placeholder: "Enter pick-up location",
        },
        pick_up_time: { label: "Pick-up time" },
        submit: { text: "Search" },
        title: {
          subtitle: "Best Worldwide Car Hire Deals",
          title: "Search for Car Hire",
        },
      },
      4480: {
        drop_off_another_place: { label: "Drop car off at different location" },
        drop_off_date: {
          date_format: "D MMM YYYY",
          label: "Drop-off date",
          placeholder: "Drop-off date",
        },
        drop_off_location: {
          label: "Drop-off localtion",
          placeholder: "Enter drop-off location",
        },
        drop_off_time: { label: "Drop-off time" },
        logo: { alt: "Car Search" },
        pick_up_date: {
          date_format: "D MMM YYYY",
          label: "Pick-up date",
          placeholder: "Pick-up date",
        },
        pick_up_location: {
          label: "Pick-up localtion",
          placeholder: "Enter pick-up location",
        },
        pick_up_time: { label: "Pick-up time" },
        submit: { text: "Search" },
        title: {
          subtitle: "Best Worldwide Car Hire Deals",
          title: "Search for Car Hire",
        },
      },
      4576: {
        depart_date: { date_format: "D MMM, dd", placeholder: "Depart date" },
        destination: { placeholder: "To" },
        logo: { alt: "Bus tickets" },
        origin: { placeholder: "From" },
        submit: { text: "Find tickets" },
        title: {
          subtitle: "Over 20,000 destinations, secure payment, 24/7 support",
          title: "Bus tickets online",
        },
      },
      4578: {
        drop_off_another_place: { label: "Drop car off at different location" },
        drop_off_date: {
          date_format: "D MMM YYYY",
          label: "Drop-off date",
          placeholder: "Drop-off date",
        },
        drop_off_location: {
          label: "Drop-off localtion",
          placeholder: "Enter drop-off location",
        },
        drop_off_time: { label: "Drop-off time" },
        logo: { alt: "Car Search" },
        pick_up_date: {
          date_format: "D MMM YYYY",
          label: "Pick-up date",
          placeholder: "Pick-up date",
        },
        pick_up_location: {
          label: "Pick-up localtion",
          placeholder: "Enter pick-up location",
        },
        pick_up_time: { label: "Pick-up time" },
        submit: { text: "Search" },
        title: {
          subtitle: "Best Worldwide Car Hire Deals",
          title: "Search for Car Hire",
        },
      },
      4674: {
        arrival_date: {
          date_format: "D MMM YYYY",
          label: "Arrival date",
          placeholder: "Arrival date",
        },
        arrival_time: { label: "Arrival time" },
        departure_date: {
          date_format: "D MMM YYYY",
          label: "Ð”Ð°Ñ‚Ð° Ð¸ Ð²Ñ€ÐµÐ¼Ñ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‚Ð°",
          placeholder: "Departure date",
        },
        departure_time: { label: "Departure time" },
        destination: { placeholder: "Specify resort, city, hotel" },
        logo: { alt: "Transfer booking" },
        origin: { placeholder: "Specify airport, port, station" },
        passengers: {
          fields: {
            adults: { subtitle: "12+", title: "Adults" },
            children: { subtitle: "3-11", title: "Children" },
            infants: { subtitle: "0-2", title: "Infants" },
          },
          placeholder: "Passengers",
          plural: {
            few: "%{count} passengers",
            many: "%{count} passengers",
            one: "%{count} passenger",
            other: "%{count} passengers",
          },
        },
        return_checkbox: { label: "Return" },
        submit: { text: "Search" },
        title: {
          subtitle:
            "Airport transfers executed by local professional companies",
          title: "Transfer booking",
        },
      },
      4684: {
        depart_date: { date_format: "ddd D/M", placeholder: "Depart" },
        destination: { placeholder: "To?" },
        flight_class: {
          fields: {
            business: { title: "Business" },
            coach: { title: "Coach" },
            first: { title: "First" },
            premium_economy: { title: "Premium Economy" },
          },
          placeholder: "Flight class",
        },
        logo: { alt: "Flights Search" },
        origin: { placeholder: "From?" },
        passengers: {
          fields: {
            adults: { title: "Adults" },
            child: { subtitle: "2-11", title: "Children" },
            lap_infants: { subtitle: "under 2", title: "Lap infants" },
            seat_infants: { subtitle: "under 2", title: "Seat infants" },
            seniors: { subtitle: "65+", title: "Senior" },
            youth: { subtitle: "12-17", title: "Youth" },
          },
          placeholder: "Passengers",
          plural: {
            few: "%{count} passengers",
            many: "%{count} passengers",
            one: "%{count} passenger",
            other: "%{count} passengers",
          },
        },
        return_date: {
          date_format: "ddd D/M",
          one_way: "No return ticket needed",
          placeholder: "Return",
        },
        submit: { text: "Search" },
        title: {
          subtitle: "Compare and Book Cheap Flights on Over 600 Airlines",
          title: "Flights Search",
        },
      },
      4694: {
        departure_date: {
          date_format: "D MMM YYYY",
          label: "Departure date",
          placeholder: "Departure date",
        },
        destination: {
          label: "Country or resort",
          placeholder: "Country or resort",
        },
        logo: { alt: "Onlinetours logo" },
        nights: {
          fields: { nights: { title: "Nights" } },
          label: "Nights",
          placeholder: "Nights",
          plural: {
            few: "%{count} nights",
            many: "%{count} nights",
            one: "%{count} night",
            other: "%{count} nights",
          },
        },
        origin: { label: "Departure city" },
        submit: { text: "Search" },
        title: { title: "Tour search" },
        tourists: {
          fields: {
            adults: { subtitle: "14+", title: "Adults" },
            children: { subtitle: "1-14", title: "Children" },
          },
          label: "Number of tourists",
          placeholder: "Number of tourists",
          plural: {
            few: "%{count} persons",
            many: "%{count} persons",
            one: "%{count} person",
            other: "%{count} persons",
          },
        },
      },
      4734: {
        origin: { text: "Find now" },
        title_origin: { text: "Origin" },
        title_origin2: { text: "Origin" },
        title_origin3: { text: "Origin" },
        title_origin4: { text: "Origin" },
        title_price: { text: "Price from" },
        title_price2: { text: "Price from" },
        title_price3: { text: "Price from" },
        title_price4: { text: "Price from" },
      },
      4983: {
        button_link: { text: "Find this ticket" },
        tooltip_date_return: { date_return: "Return" },
        tooltip_date_to: {
          date_to: "To",
          direct_flight: "direct flight",
          flights_stop: { one: "%{count} stop", other: "%{count} stops" },
        },
      },
      5050: {
        check_in_date: {
          date_format: "D MMM YYYY",
          label: "Check-in date",
          placeholder: "Check-in date",
        },
        check_out_date: {
          date_format: "D MMM YYYY",
          label: "Check-out date",
          placeholder: "Check-out date",
        },
        destination: { label: "City", placeholder: "City" },
        logo: { alt: "Sanatory logo" },
        submit: { text: "Find" },
        title: {
          subtitle:
            "online booking of health resorts, spa hotels, vacation homes",
          title: "Search for sanatoriums",
        },
        travellers: {
          fields: {
            adults: { subtitle: "14+", title: "Adults" },
            children: { subtitle: "1-14", title: "Children" },
          },
          plural: {
            few: "%{count} persons",
            many: "%{count} persons",
            one: "%{count} person",
            other: "%{count} persons",
          },
        },
      },
      5075: {
        button_link: { text: "View more experiences" },
        card_button: { text: "Book" },
        card_host: { text: "Hosted by" },
        title: { online: "Online experiences", text: "Experiences in" },
      },
      5139: {
        depart_date: { date_format: "D MMM, dd", placeholder: "Date" },
        destination: { placeholder: "To" },
        logo: { alt: "BlaBlaCar logo" },
        origin: { placeholder: "From" },
        passengers: {
          fields: { seats: { title: "Seats" } },
          placeholder: "Passengers",
          plural: {
            few: "%{count} passengers",
            many: "%{count} passengers",
            one: "%{count} passenger",
            other: "%{count} passengers",
          },
        },
        submit: { text: "Search" },
        title: {
          subtitle: "A new way to travel cheap",
          title: "BlaBlaCar â€“ buses",
        },
      },
      5199: {
        departure_date: {
          date_format: "D MMM YYYY",
          label: "Departure date",
          placeholder: "Departure date",
        },
        destination: { label: "Country", placeholder: "Country" },
        logo: { alt: "Teztour logo" },
        nights: {
          fields: { nights: { title: "Nights" } },
          label: "Nights",
          placeholder: "Nights",
          plural: {
            few: "%{count} nights",
            many: "%{count} nights",
            one: "%{count} night",
            other: "%{count} nights",
          },
        },
        origin: { label: "Departure city" },
        submit: { text: "Find" },
        title: {
          subtitle: "More than 520,000 hotels worldwide",
          title: "Search tours",
        },
        tourists: {
          fields: {
            adults: { subtitle: "17+", title: "Adults" },
            children: { subtitle: "1-17", title: "Children" },
          },
          label: "Tourists",
          placeholder: "Tourists",
          plural: {
            few: "%{count} persons",
            many: "%{count} persons",
            one: "%{count} person",
            other: "%{count} persons",
          },
        },
      },
      5322: {
        departure_date: {
          date_format: "D MMM YYYY",
          label: "Arrival date",
          placeholder: "Arrival date",
        },
        logo: { alt: "Dolphin logo" },
        nights: {
          fields: { nights: { title: "Nights" } },
          label: "Nights",
          placeholder: "Nights",
          plural: {
            few: "%{count} nights",
            many: "%{count} nights",
            one: "%{count} night",
            other: "%{count} nights",
          },
        },
        origin: { label: "Where", placeholder: "Country, city, resort, hotel" },
        submit: { text: "Search" },
        title: {
          subtitle: "More than 25 years of specialization in domestic tourism",
          title: "Tour Search",
        },
        tourists: {
          fields: {
            adults: { subtitle: "17+", title: "Adults" },
            children: { subtitle: "1-17", title: "Children" },
          },
          label: "Tourists",
          placeholder: "Tourists",
          plural: {
            few: "%{count} persons",
            many: "%{count} persons",
            one: "%{count} person",
            other: "%{count} persons",
          },
        },
      },
      5369: {
        days: { label: "Days on the cruise" },
        departure_date: {
          date_format: "D MMM, dd",
          label: "Departure date",
          placeholder: "Departure date",
        },
        logo: { alt: "kruiz.online logo" },
        month: { label: "Departure month" },
        start_cities: {
          label: "Departure city",
          placeholder: "Departure city",
        },
        submit: { text: "Find" },
        title: {
          subtitle: "All cruises in Russia online without a surcharge",
          title: "Search cruises",
        },
        tourists: {
          fields: {
            adults: { subtitle: "14+", title: "Adults" },
            children: { subtitle: "1-14", title: "Children" },
          },
          label: "Number of tourists",
          plural: {
            few: "%{count} persons",
            many: "%{count} persons",
            one: "%{count} person",
            other: "%{count} persons",
          },
        },
        visit_cities: { label: "Visit city", placeholder: "Visit city" },
      },
      5431: {
        button_link: { text: "View more events" },
        card_button: { text: "Buy now" },
        title: { text: "events in" },
      },
      5469: {
        button_link: { text: "View more excursions" },
        card_button: { text: "View excursion" },
        title: { text: "Excursions" },
      },
      5470: {
        departure_date: {
          date_format: "D MMM YYYY",
          label: "Departure date",
          placeholder: "Departure date",
        },
        destination: {
          label: "Direction",
          placeholder: "Country, city or hotel",
        },
        logo: { alt: "Level.Travel logo" },
        nights: {
          fields: { nights: { title: "Nights" } },
          label: "Nights",
          placeholder: "Nights",
          plural: {
            few: "%{count} nights",
            many: "%{count} nights",
            one: "%{count} night",
            other: "%{count} nights",
          },
        },
        origin: { label: "Departure city" },
        submit: { text: "Search" },
        title: { subtitle: "The best price guarantee", title: "Tour search" },
        tourists: {
          fields: {
            adults: { subtitle: "16+", title: "Adults" },
            children: { subtitle: "1-16", title: "Children" },
          },
          label: "Tourists",
          placeholder: "Tourists",
          plural: {
            few: "%{count} persons",
            many: "%{count} persons",
            one: "%{count} person",
            other: "%{count} persons",
          },
        },
      },
      5472: {
        drop_off_another_place: { label: "Return to another location" },
        drop_off_date: {
          date_format: "D MMM YYYY",
          label: "Drop off date",
          placeholder: "Drop off date",
        },
        drop_off_location: { placeholder: "Enter drop off city" },
        drop_off_time: { label: "Drop off time" },
        logo: { alt: "bikesbooking logo" },
        pick_up_date: {
          date_format: "D MMM YYYY",
          label: "Pick up date",
          placeholder: "Pick up date",
        },
        pick_up_location: { placeholder: "Enter pick up city" },
        pick_up_time: { label: "Pick up time" },
        submit: { text: "Search" },
        title: {
          subtitle:
            "Rent a motorcycle, scooter or bicycle in any part of the world",
          title: "Search for a rental",
        },
      },
      5494: {
        date_from: {
          date_format: "D MMM YYYY",
          label: "Departure date",
          placeholder: "Departure date",
        },
        date_to: {
          date_format: "D MMM YYYY",
          label: "Arrival date",
          placeholder: "Arrival date",
        },
        days_max: {
          fields: { days_max: { title: "Up to days" } },
          label: "Up to days",
          plural: {
            few: "up to %{count} days",
            many: "up to %{count} days",
            one: "up to %{count} day",
            other: "up to %{count} days",
          },
        },
        days_min: {
          fields: { days_min: { title: "Days from" } },
          label: "Days from",
          plural: {
            few: "from %{count} days",
            many: "from %{count} days",
            one: "from %{count} day",
            other: "from %{count} days",
          },
        },
        destination: { label: "Region", placeholder: "Region" },
        logo: { alt: "Search tours" },
        rest_type: { label: "Travel style", placeholder: "Travel style" },
        submit: { text: "Choose your tour" },
        title: { subtitle: "Adventures in Russia", title: "Tours search" },
      },
      5850: {
        button_link: { text: "View more tours" },
        card_button: { text: "View tour" },
        logo: { alt: "Viator logo" },
        title: { text: "Popular tours" },
      },
      5919: {
        days: { label: "Days on the cruise" },
        departure_date: {
          date_format: "D MMM, dd",
          label: "Departure date",
          placeholder: "Departure date",
        },
        logo: { alt: "kruiz.online logo" },
        start_cities: {
          label: "Departure city",
          placeholder: "Departure city",
        },
        submit: { text: "Find" },
        title: {
          subtitle: "Sea cruises online without a surcharge",
          title: "Search cruises",
        },
        visit_cities: { label: "Visit city", placeholder: "Visit city" },
      },
      7257: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check-in",
          placeholder: "Check-in",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check-out",
          placeholder: "Check-out",
        },
        destination: { label: "Destination", placeholder: "City or airport" },
        guests: {
          fields: {
            adults: { title: "Adults" },
            child_age: { title: "Age" },
            children: { title: "Children to 17 years" },
            children_details: { title: "to 17 years" },
            children_text: { title: "Children" },
          },
          label: "Guests",
          placeholder: "Guests",
          plural: {
            few: "%{count} guests",
            many: "%{count} guests",
            one: "%{count} guest",
            other: "%{count} guests",
            zero: "%{count} guests",
          },
        },
        logo: { alt: "Logo" },
        submit: { text: "Search" },
        title: {
          subtitle: "over 1,700,000 properties around the world",
          title: "Find hotels, hostels, and apartments",
        },
      },
      7263: {
        destination: { text: "Find now" },
        title_destination: { text: "Destination" },
        title_destination2: { text: "Destination" },
        title_destination3: { text: "Destination" },
        title_destination4: { text: "Destination" },
        title_price: { text: "Price from" },
        title_price2: { text: "Price from" },
        title_price3: { text: "Price from" },
        title_price4: { text: "Price from" },
      },
      7281: {
        col5: { select_dates: "Select dates" },
        direct: "direct",
        error: {
          link: "Proceed to",
          text: "Select a date and search for cheap flights by destination",
          title: "Flight schedule not found",
        },
        flights_type: {
          direct: "direct",
          stops: { one: "%{count} stop", other: "%{count} stops" },
        },
        show_hotels: { label: "Show hotels" },
        title: {
          days: { one: "%{count} day", other: "%{count} days" },
          flights: {
            one: "%{count} flight in a week,",
            other: "%{count} flights in a week,",
          },
          flights_every_day: {
            one: "More than %{count} flight every day, from",
            other: "More than %{count} flights every day, from",
          },
          hours: { one: "%{count}h", other: "%{count}h" },
          min: { one: "%{count}m", other: "%{count}m" },
        },
      },
      7298: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check-in",
          placeholder: "Check-in",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check-out",
          placeholder: "Check-out",
        },
        destination: { label: "Destination", placeholder: "City or airport" },
        guests: {
          fields: { adults: { title: "Guests" } },
          label: "Guests",
          placeholder: "Guests",
          plural: {
            few: "%{count} guests",
            many: "%{count} guests",
            one: "%{count} guest",
            other: "%{count} guests",
          },
        },
        logo: { alt: "Logo" },
        submit: { text: "Search" },
        title: {
          subtitle: "over 1,700,000 properties around the world",
          title: "Find hotels, hostels, and apartments",
        },
      },
      7339: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check-in",
          placeholder: "Check-in",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check-out",
          placeholder: "Check-out",
        },
        destination: { label: "Destination", placeholder: "City or airport" },
        guests: {
          fields: { adults: { title: "Guests" } },
          label: "Guests",
          placeholder: "Guests",
          plural: {
            few: "%{count} guests",
            many: "%{count} guests",
            one: "%{count} guest",
            other: "%{count} guests",
          },
        },
        logo: { alt: "Logo" },
        submit: { text: "Search" },
        title: {
          subtitle:
            "More than 3,000,000 hotels, resorts, campgrounds, hostels and apart-hotels",
          title: "All types of accommodation",
        },
      },
      7453: {
        button_link: { text: "View all offers" },
        card_button: { text: "View an offer" },
        card_price: {
          text: "price per night from",
          text_2: "specify the price",
        },
        title: { title: "Hotels and Inns" },
      },
      7849: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check in",
          placeholder: "Check in",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check out",
          placeholder: "Check out",
        },
        destination: { label: "Destination", placeholder: "Enter destination" },
        guests: {
          fields: { adults: { title: "Guests" } },
          label: "Guests",
          placeholder: "Guests",
          plural: {
            few: "%{count} guests",
            many: "%{count} guests",
            one: "%{count} guest",
            other: "%{count} guests",
          },
        },
        logo: { alt: "Logo" },
        submit: { text: "Search" },
        title: {
          subtitle: "Deals from your favorite booking sites",
          title: "Search \u0026 compare hotel deals",
        },
      },
      7873: {
        alt: "Search and compare hotel prices",
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check-In",
          placeholder: "Check-In",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check-Out",
          placeholder: "Check-Out",
        },
        date_format: "D MMM, dd",
        destination: {
          label: "City or hotel name",
          placeholder: "City or hotel name",
        },
        guests: {
          fields: {
            adults: { title: "Adults" },
            child_age: { title: "Age" },
            children: { title: "Children to 17 years" },
            children_details: { title: "to 17 years" },
            children_text: { title: "Children" },
          },
          label: "Guests",
          placeholder: "Guests",
          plural: {
            few: "%{count} guests",
            many: "%{count} guests",
            one: "%{count} guest",
            other: "%{count} guests",
            zero: "%{count} guests",
          },
        },
        hotels: "hotels",
        label: "Show hotels",
        logo: { alt: "Search and compare hotel prices" },
        show_hotels: { label: "Show hotels" },
        submit: { text: "Search" },
        tabs: { avia: "FLIGHTS", hotels: "HOTELS" },
        text: "Search",
        title: { title: "Search and compare hotel prices" },
      },
      7879: {
        DateRange: {
          date_format: "D MMM, dd",
          from_label: "Depart date",
          from_placeholder: "Depart date",
          one_way: "Return ticket is not needed",
          to_label: "Return date",
          to_placeholder: "Return date",
        },
        // LinkImage_1: { alt: "Cheap flights and airline tickets" },
        Show_hotels: { label: "Show hotels" },
        Submit_6: { text: "Search" },
        alt: "Cheap flights and airline tickets",
        avia: "avia",
        label: "Origin",
        origin_and_destination: {
          destination: { label: "Destination", placeholder: "Destination" },
          origin: { label: "Origin", placeholder: "Origin_test  " },
        },
        passengers: {
          fields: {
            adults: { title: "Adults" },
            children: { subtitle: "under 12 years", title: "Children" },
            lap_infants: { subtitle: "under 2 years", title: "Infants" },
            title: "Infants",
          },
          label: "Passengers",
          other: "%{count} passengers",
          placeholder: "Passengers",
          plural: {
            few: "%{count} passengers",
            many: "%{count} passengers",
            one: "%{count} passenger",
            other: "%{count} passengers",
            zero: "%{count} passengers",
          },
          radio: { business: "Business", economy: "Economy" },
        },
        placeholder: "Destination",
        tabs: { avia: "FLIGHTS", hotels: "HOTELS" },
        text: "Search",
        // title: { title: "Cheap flights and airline tickets" },
        to_placeholder: "Return date",
        trip_class: { label: "Business Ñlass" },
      },
      7921: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check in",
          placeholder: "Check in",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check out",
          placeholder: "Check out",
        },
        destination: { label: "Destination", placeholder: "Enter destination" },
        guests: {
          fields: {
            child_age: { title: "Age" },
            children: { title: "Children (0-17 y.o.)" },
            children_details: { title: "under 17" },
            children_text: { title: "Children" },
            men: { title: "Men" },
          },
          label: "Guests",
          placeholder: "Guests",
          plural: {
            few: "%{count} guests",
            many: "%{count} guests",
            one: "%{count} guest",
            other: "%{count} guests",
          },
        },
        logo: { alt: "Logo" },
        submit: { text: "Search" },
        title: {
          title: "Look for hotels, apartments and houses at once on Tvil",
        },
      },
      8003: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check in",
          placeholder: "Check in",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check out",
          placeholder: "Check out",
        },
        destination: {
          label: "Destination",
          placeholder: "Country, city or hotel",
        },
        guests: {
          fields: { adults: { subtitle: "16+", title: "Adults" } },
          label: "Guests",
          placeholder: "Guests",
          plural: {
            few: "%{count} guests",
            many: "%{count} guests",
            one: "%{count} guest",
            other: "%{count} guests",
          },
        },
        logo: { alt: "Logo" },
        submit: { text: "Search" },
        title: { subtitle: "The best price guarantee", title: "Hotel search" },
      },
      8288: {
        button_link: { text: "View all offers" },
        card_button: { text: "View cruise" },
        card_dates: { from: "from" },
        card_price: { from: "from" },
        card_title: {
          stops: {
            few: "%{count} more stops",
            many: "%{count} more stops",
            one: "%{count} more stop",
            other: "%{count} more stops",
          },
        },
        title: { title: "Sea cruises" },
      },
      8303: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check In",
          placeholder: "Check In",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check Out",
          placeholder: "Check Out",
        },
        destination: {
          label: "Destination name",
          placeholder: "Enter a destination or property",
        },
        logo: { alt: "logo" },
        submit: { text: "Search" },
        title: {
          subtitle: "Get the best prices on 2,000,000+ properties, worldwide",
          title: "Hotels, resorts, hostels \u0026 more",
        },
      },
      8344: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check In",
          placeholder: "Check In",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check Out",
          placeholder: "Check Out",
        },
        destination: { label: "Destination", placeholder: "Country or resort" },
        guests: {
          fields: { adults: { subtitle: "16+", title: "Adults" } },
          label: "Tourists",
          placeholder: "Tourists",
          plural: {
            few: "%{count} tourists",
            many: "%{count} tourists",
            one: "%{count} tourist",
            other: "%{count} tourists",
          },
        },
        logo: { alt: "logo" },
        submit: { text: "Search" },
        title: {
          subtitle: "at tour operator prices or lower",
          title: "Tours online",
        },
      },
      8380: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check In",
          placeholder: "Check In",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check Out",
          placeholder: "Check Out",
        },
        destination: { label: "Destination", placeholder: "Country or resort" },
        guests: {
          fields: { adults: { subtitle: "16+", title: "Adults" } },
          label: "Tourists",
          placeholder: "Tourists",
          plural: {
            few: "%{count} tourists",
            many: "%{count} tourists",
            one: "%{count} tourist",
            other: "%{count} tourists",
          },
        },
        logo: { alt: "logo" },
        submit: { text: "Search" },
        title: { subtitle: "on the best terms", title: "Hotel search" },
      },
      8450: {
        date: { date_format: "D MMM YYYY", placeholder: "When" },
        destination: { placeholder: "To" },
        logo: { alt: "indriver logo" },
        origin: { placeholder: "From" },
        submit: { text: "Find a driver" },
        title: {
          subtitle: "Discover hundreds of intercity routes",
          title: "City to city rides at your fare",
        },
      },
      8566: {
        check_in_date: {
          date_format: "D MMM, dd",
          label: "Check in",
          placeholder: "Check in",
        },
        check_out_date: {
          date_format: "D MMM, dd",
          label: "Check out",
          placeholder: "Check out",
        },
        destination: { label: "City or hotel", placeholder: "City or hotel" },
        guests: {
          fields: {
            adults: { title: "Adults" },
            child_age: { title: "Age" },
            children: { title: "Children (0-17 y.o.)" },
            children_details: { title: "under 17" },
            children_text: { title: "Children" },
          },
          label: "Guests",
          placeholder: "Guests",
          plural: {
            few: "%{count} guests",
            many: "%{count} guests",
            one: "%{count} guest",
            other: "%{count} guests",
          },
        },
        logo: { alt: "Logo" },
        submit: { text: "Search" },
        title: { title: "Hotels for traveling in Russia" },
      },
      8588: {
        country: {
          label: "Destination name",
          placeholder: "Search data packs for 200+ countries and regions",
        },
        logo: { alt: "logo" },
        submit: { text: "Search" },
        title: {
          subtitle: "Stay connected, wherever you travel, at affordable rates",
          title: "Local, regional and global eSIMs for travellers",
        },
      },
      8601: { card_button: { text: "Book now" }, card_price: { from: "from" } },
      adults: { title: "Adults" },
      all_months: "all_months",
      average_price: "Average price for 1 night",
      button_link: { text: "Choose a tour" },
      calendar_tooltip_mobile_button: { ticket: "Find this ticket" },
      card_dates: { nights: { other: "to %{count} nights" } },
      chansey: { search: { show_prices: "Show prices" } },
      check_in_date: { placeholder: "Check-in date" },
      fields: { adults: { title: "Adults" } },
      nights: { other: "to %{count} nights" },
      other: "to %{count} nights",
      passengers: { fields: { adults: { title: "Adults" } } },
      placeholder: "Check-in date",
      search: { show_prices: "Show prices" },
      show_prices: "Show prices",
      text: "Choose a tour",
      ticket: "Find this ticket",
      title: "Adults",
      tooltip_duration: { average_price: "Average price for 1 night" },
    },
  };

  var initParams = {
    config: config,
    abTest: null,
    categoriesIds: [14],
    globalTranslations: translations,
    locale: "en",
    hostname: "tp.media",
  };

  window.CASCOON_GLOBAL.init(initParams);
})();
