! function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Tangram = e()
    }
}(function () {
        var define, module, exports;
        return function e(t, r, n) {
            function i(a, s) {
                if (!r[a]) {
                    if (!t[a]) {
                        var l = "function" == typeof require && require;
                        if (!s && l) return l(a, !0);
                        if (o) return o(a, !0);
                        var u = new Error("Cannot find module '" + a + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = r[a] = {
                        exports: {}
                    };
                    t[a][0].call(c.exports, function (e) {
                        var r = t[a][1][e];
                        return i(r ? r : e)
                    }, c, c.exports, e, t, r, n)
                }
                return r[a].exports
            }
            for (var o = "function" == typeof require && require, a = 0; a < n.length; a++) i(n[a]);
            return i
        }({
            1: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/array/from"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/array/from": 40
            }],
            2: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/get-iterator"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/get-iterator": 41
            }],
            3: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/is-iterable"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/is-iterable": 42
            }],
            4: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/map"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/map": 43
            }],
            5: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/math/log2"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/math/log2": 44
            }],
            6: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/object/assign"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/object/assign": 45
            }],
            7: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/object/create"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/object/create": 46
            }],
            8: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/object/define-properties"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/object/define-properties": 47
            }],
            9: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/object/define-property"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/object/define-property": 48
            }],
            10: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/object/freeze"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/object/freeze": 49
            }],
            11: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/object/get-own-property-descriptor"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/object/get-own-property-descriptor": 50
            }],
            12: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/object/keys"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/object/keys": 51
            }],
            13: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/object/set-prototype-of"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/object/set-prototype-of": 52
            }],
            14: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/promise"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/promise": 53
            }],
            15: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/set"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/set": 54
            }],
            16: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/symbol"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/symbol": 55
            }],
            17: [function (e, t) {
                t.exports = {
                    "default": e("core-js/library/fn/symbol/iterator"),
                    __esModule: !0
                }
            }, {
                "core-js/library/fn/symbol/iterator": 56
            }],
            18: [function (e, t, r) {
                "use strict";
                r["default"] = function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }, r.__esModule = !0
            }, {}],
            19: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/define-property")["default"];
                r["default"] = function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), n(e, i.key, i)
                        }
                    }
                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(), r.__esModule = !0
            }, {
                "babel-runtime/core-js/object/define-property": 9
            }],
            20: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/define-property")["default"];
                r["default"] = function (e, t, r) {
                    return t in e ? n(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }, r.__esModule = !0
            }, {
                "babel-runtime/core-js/object/define-property": 9
            }],
            21: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/get-own-property-descriptor")["default"];
                r["default"] = function (e, t, r) {
                    for (var i = !0; i;) {
                        var o = e,
                            a = t,
                            s = r;
                        i = !1, null === o && (o = Function.prototype);
                        var l = n(o, a);
                        if (void 0 !== l) {
                            if ("value" in l) return l.value;
                            var u = l.get;
                            return void 0 === u ? void 0 : u.call(s)
                        }
                        var c = Object.getPrototypeOf(o);
                        if (null === c) return void 0;
                        e = c, t = a, r = s, i = !0, l = c = void 0
                    }
                }, r.__esModule = !0
            }, {
                "babel-runtime/core-js/object/get-own-property-descriptor": 11
            }],
            22: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/create")["default"],
                    i = e("babel-runtime/core-js/object/set-prototype-of")["default"];
                r["default"] = function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = n(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (i ? i(e, t) : e.__proto__ = t)
                }, r.__esModule = !0
            }, {
                "babel-runtime/core-js/object/create": 7,
                "babel-runtime/core-js/object/set-prototype-of": 13
            }],
            23: [function (e, t, r) {
                "use strict";
                r["default"] = function (e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }, r.__esModule = !0
            }, {}],
            24: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/get-iterator")["default"],
                    i = e("babel-runtime/core-js/is-iterable")["default"];
                r["default"] = function () {
                    function e(e, t) {
                        var r = [],
                            i = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var s, l = n(e); !(i = (s = l.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0);
                        } catch (u) {
                            o = !0, a = u
                        } finally {
                            try {
                                !i && l["return"] && l["return"]()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return r
                    }
                    return function (t, r) {
                        if (Array.isArray(t)) return t;
                        if (i(Object(t))) return e(t, r);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(), r.__esModule = !0
            }, {
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/is-iterable": 3
            }],
            25: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/array/from")["default"];
                r["default"] = function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                    return n(e)
                }, r.__esModule = !0
            }, {
                "babel-runtime/core-js/array/from": 1
            }],
            26: [function (e, t) {
                (function (r) {
                    var n = "object" == typeof r ? r : "object" == typeof window ? window : "object" == typeof self ? self : this,
                        i = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
                        o = i && n.regeneratorRuntime;
                    if (n.regeneratorRuntime = void 0, t.exports = e("./runtime"), i) n.regeneratorRuntime = o;
                    else try {
                        delete n.regeneratorRuntime
                    } catch (a) {
                        n.regeneratorRuntime = void 0
                    }
                    t.exports = {
                        "default": t.exports,
                        __esModule: !0
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./runtime": 27
            }],
            27: [function (e, t) {
                (function (r, n) {
                    "use strict";
                    var i = e("babel-runtime/core-js/symbol")["default"],
                        o = e("babel-runtime/core-js/symbol/iterator")["default"],
                        a = e("babel-runtime/core-js/object/create")["default"],
                        s = e("babel-runtime/core-js/promise")["default"];
                    ! function (e) {
                        function n(e, t, r, n) {
                            var i = a((t || u).prototype);
                            return i._invoke = m(e, r || null, new _(n || [])), i
                        }

                        function l(e, t, r) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, r)
                                }
                            } catch (n) {
                                return {
                                    type: "throw",
                                    arg: n
                                }
                            }
                        }

                        function u() {}

                        function c() {}

                        function f() {}

                        function h(e) {
                            ["next", "throw", "return"].forEach(function (t) {
                                e[t] = function (e) {
                                    return this._invoke(t, e)
                                }
                            })
                        }

                        function d(e) {
                            this.arg = e
                        }

                        function p(e) {
                            function t(t, r) {
                                var n = e[t](r),
                                    i = n.value;
                                return i instanceof d ? s.resolve(i.arg).then(o, a) : s.resolve(i).then(function (e) {
                                    return n.value = e, n
                                })
                            }

                            function n(e, r) {
                                var n = i ? i.then(function () {
                                    return t(e, r)
                                }) : new s(function (n) {
                                    n(t(e, r))
                                });
                                return i = n["catch"](function () {}), n
                            }
                            "object" == typeof r && r.domain && (t = r.domain.bind(t)); {
                                var i, o = t.bind(e, "next"),
                                    a = t.bind(e, "throw");
                                t.bind(e, "return")
                            }
                            this._invoke = n
                        }

                        function m(e, t, r) {
                            var n = E;
                            return function (i, o) {
                                if (n === S) throw new Error("Generator is already running");
                                if (n === M) {
                                    if ("throw" === i) throw o;
                                    return b()
                                }
                                for (;;) {
                                    var a = r.delegate;
                                    if (a) {
                                        if ("return" === i || "throw" === i && a.iterator[i] === x) {
                                            r.delegate = null;
                                            var s = a.iterator["return"];
                                            if (s) {
                                                var u = l(s, a.iterator, o);
                                                if ("throw" === u.type) {
                                                    i = "throw", o = u.arg;
                                                    continue
                                                }
                                            }
                                            if ("return" === i) continue
                                        }
                                        var u = l(a.iterator[i], a.iterator, o);
                                        if ("throw" === u.type) {
                                            r.delegate = null, i = "throw", o = u.arg;
                                            continue
                                        }
                                        i = "next", o = x;
                                        var c = u.arg;
                                        if (!c.done) return n = R, c;
                                        r[a.resultName] = c.value, r.next = a.nextLoc, r.delegate = null
                                    }
                                    if ("next" === i) r.sent = n === R ? o : x;
                                    else if ("throw" === i) {
                                        if (n === E) throw n = M, o;
                                        r.dispatchException(o) && (i = "next", o = x)
                                    } else "return" === i && r.abrupt("return", o);
                                    n = S;
                                    var u = l(e, t, r);
                                    if ("normal" === u.type) {
                                        n = r.done ? M : R;
                                        var c = {
                                            value: u.arg,
                                            done: r.done
                                        };
                                        if (u.arg !== j) return c;
                                        r.delegate && "next" === i && (o = x)
                                    } else "throw" === u.type && (n = M, i = "throw", o = u.arg)
                                }
                            }
                        }

                        function g(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function v(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function _(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(g, this), this.reset(!0)
                        }

                        function y(e) {
                            if (e) {
                                var t = e[A];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        n = function i() {
                                            for (; ++r < e.length;)
                                                if (w.call(e, r)) return i.value = e[r], i.done = !1, i;
                                            return i.value = x, i.done = !0, i
                                        };
                                    return n.next = n
                                }
                            }
                            return {
                                next: b
                            }
                        }

                        function b() {
                            return {
                                value: x,
                                done: !0
                            }
                        }
                        var x, w = Object.prototype.hasOwnProperty,
                            A = "function" == typeof i && o || "@@iterator",
                            T = "object" == typeof t,
                            k = e.regeneratorRuntime;
                        if (k) return void(T && (t.exports = k));
                        k = e.regeneratorRuntime = T ? t.exports : {}, k.wrap = n;
                        var E = "suspendedStart",
                            R = "suspendedYield",
                            S = "executing",
                            M = "completed",
                            j = {},
                            P = f.prototype = u.prototype;
                        c.prototype = P.constructor = f, f.constructor = c, c.displayName = "GeneratorFunction", k.isGeneratorFunction = function (e) {
                            var t = "function" == typeof e && e.constructor;
                            return t ? t === c || "GeneratorFunction" === (t.displayName || t.name) : !1
                        }, k.mark = function (e) {
                            return e.__proto__ = f, e.prototype = a(P), e
                        }, k.awrap = function (e) {
                            return new d(e)
                        }, h(p.prototype), k.async = function (e, t, r, i) {
                            var o = new p(n(e, t, r, i));
                            return k.isGeneratorFunction(t) ? o : o.next().then(function (e) {
                                return e.done ? e.value : o.next()
                            })
                        }, h(P), P[A] = function () {
                            return this
                        }, P.toString = function () {
                            return "[object Generator]"
                        }, k.keys = function (e) {
                            var t = [];
                            for (var r in e) t.push(r);
                            return t.reverse(),
                                function n() {
                                    for (; t.length;) {
                                        var r = t.pop();
                                        if (r in e) return n.value = r, n.done = !1, n
                                    }
                                    return n.done = !0, n
                                }
                        }, k.values = y, _.prototype = {
                            constructor: _,
                            reset: function (e) {
                                if (this.prev = 0, this.next = 0, this.sent = x, this.done = !1, this.delegate = null, this.tryEntries.forEach(v), !e)
                                    for (var t in this) "t" === t.charAt(0) && w.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = x)
                            },
                            stop: function () {
                                this.done = !0;
                                var e = this.tryEntries[0],
                                    t = e.completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval
                            },
                            dispatchException: function (e) {
                                function t(t, n) {
                                    return o.type = "throw", o.arg = e, r.next = t, !!n
                                }
                                if (this.done) throw e;
                                for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var i = this.tryEntries[n],
                                        o = i.completion;
                                    if ("root" === i.tryLoc) return t("end");
                                    if (i.tryLoc <= this.prev) {
                                        var a = w.call(i, "catchLoc"),
                                            s = w.call(i, "finallyLoc");
                                        if (a && s) {
                                            if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                            if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                                        } else if (a) {
                                            if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                                        } else {
                                            if (!s) throw new Error("try statement without catch or finally");
                                            if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function (e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && w.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var i = n;
                                        break
                                    }
                                }
                                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                                var o = i ? i.completion : {};
                                return o.type = e, o.arg = t, i ? this.next = i.finallyLoc : this.complete(o), j
                            },
                            complete: function (e, t) {
                                if ("throw" === e.type) throw e.arg;
                                "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = e.arg, this.next = "end") : "normal" === e.type && t && (this.next = t)
                            },
                            finish: function (e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), v(r), j
                                }
                            },
                            "catch": function (e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.tryLoc === e) {
                                        var n = r.completion;
                                        if ("throw" === n.type) {
                                            var i = n.arg;
                                            v(r)
                                        }
                                        return i
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function (e, t, r) {
                                return this.delegate = {
                                    iterator: y(e),
                                    resultName: t,
                                    nextLoc: r
                                }, j
                            }
                        }
                    }("object" == typeof n ? n : "object" == typeof window ? window : "object" == typeof self ? self : void 0)
                }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                _process: 188,
                "babel-runtime/core-js/object/create": 7,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/core-js/symbol": 16,
                "babel-runtime/core-js/symbol/iterator": 17
            }],
            28: [function (e, t, r) {
                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                ! function (e) {
                    "use strict";

                    function t(e) {
                        var t = e.charCodeAt(0);
                        return t === a || t === f ? 62 : t === s || t === h ? 63 : l > t ? -1 : l + 10 > t ? t - l + 26 + 26 : c + 26 > t ? t - c : u + 26 > t ? t - u + 26 : void 0
                    }

                    function r(e) {
                        function r(e) {
                            u[f++] = e
                        }
                        var n, i, a, s, l, u;
                        if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                        var c = e.length;
                        l = "=" === e.charAt(c - 2) ? 2 : "=" === e.charAt(c - 1) ? 1 : 0, u = new o(3 * e.length / 4 - l), a = l > 0 ? e.length - 4 : e.length;
                        var f = 0;
                        for (n = 0, i = 0; a > n; n += 4, i += 3) s = t(e.charAt(n)) << 18 | t(e.charAt(n + 1)) << 12 | t(e.charAt(n + 2)) << 6 | t(e.charAt(n + 3)), r((16711680 & s) >> 16), r((65280 & s) >> 8), r(255 & s);
                        return 2 === l ? (s = t(e.charAt(n)) << 2 | t(e.charAt(n + 1)) >> 4, r(255 & s)) : 1 === l && (s = t(e.charAt(n)) << 10 | t(e.charAt(n + 1)) << 4 | t(e.charAt(n + 2)) >> 2, r(s >> 8 & 255), r(255 & s)), u
                    }

                    function i(e) {
                        function t(e) {
                            return n.charAt(e)
                        }

                        function r(e) {
                            return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e)
                        }
                        var i, o, a, s = e.length % 3,
                            l = "";
                        for (i = 0, a = e.length - s; a > i; i += 3) o = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], l += r(o);
                        switch (s) {
                        case 1:
                            o = e[e.length - 1], l += t(o >> 2), l += t(o << 4 & 63), l += "==";
                            break;
                        case 2:
                            o = (e[e.length - 2] << 8) + e[e.length - 1], l += t(o >> 10), l += t(o >> 4 & 63), l += t(o << 2 & 63), l += "="
                        }
                        return l
                    }
                    var o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                        a = "+".charCodeAt(0),
                        s = "/".charCodeAt(0),
                        l = "0".charCodeAt(0),
                        u = "a".charCodeAt(0),
                        c = "A".charCodeAt(0),
                        f = "-".charCodeAt(0),
                        h = "_".charCodeAt(0);
                    e.toByteArray = r, e.fromByteArray = i
                }("undefined" == typeof r ? this.base64js = {} : r)
            }, {}],
            29: [function (e, t, r) {
                "use strict";
                "use restrict";

                function n(e) {
                    var t = 32;
                    return e &= -e, e && t--, 65535 & e && (t -= 16), 16711935 & e && (t -= 8), 252645135 & e && (t -= 4), 858993459 & e && (t -= 2), 1431655765 & e && (t -= 1), t
                }
                var i = 32;
                r.INT_BITS = i, r.INT_MAX = 2147483647, r.INT_MIN = -1 << i - 1, r.sign = function (e) {
                    return (e > 0) - (0 > e)
                }, r.abs = function (e) {
                    var t = e >> i - 1;
                    return (e ^ t) - t
                }, r.min = function (e, t) {
                    return t ^ (e ^ t) & -(t > e)
                }, r.max = function (e, t) {
                    return e ^ (e ^ t) & -(t > e)
                }, r.isPow2 = function (e) {
                    return !(e & e - 1 || !e)
                }, r.log2 = function (e) {
                    var t, r;
                    return t = (e > 65535) << 4, e >>>= t, r = (e > 255) << 3, e >>>= r, t |= r, r = (e > 15) << 2, e >>>= r, t |= r, r = (e > 3) << 1, e >>>= r, t |= r, t | e >> 1
                }, r.log10 = function (e) {
                    return e >= 1e9 ? 9 : e >= 1e8 ? 8 : e >= 1e7 ? 7 : e >= 1e6 ? 6 : e >= 1e5 ? 5 : e >= 1e4 ? 4 : e >= 1e3 ? 3 : e >= 100 ? 2 : e >= 10 ? 1 : 0
                }, r.popCount = function (e) {
                    return e -= e >>> 1 & 1431655765, e = (858993459 & e) + (e >>> 2 & 858993459), 16843009 * (e + (e >>> 4) & 252645135) >>> 24
                }, r.countTrailingZeros = n, r.nextPow2 = function (e) {
                    return e += 0 === e, --e, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e + 1
                }, r.prevPow2 = function (e) {
                    return e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e - (e >>> 1)
                }, r.parity = function (e) {
                    return e ^= e >>> 16, e ^= e >>> 8, e ^= e >>> 4, e &= 15, 27030 >>> e & 1
                };
                var o = new Array(256);
                ! function (e) {
                    for (var t = 0; 256 > t; ++t) {
                        var r = t,
                            n = t,
                            i = 7;
                        for (r >>>= 1; r; r >>>= 1) n <<= 1, n |= 1 & r, --i;
                        e[t] = n << i & 255
                    }
                }(o), r.reverse = function (e) {
                    return o[255 & e] << 24 | o[e >>> 8 & 255] << 16 | o[e >>> 16 & 255] << 8 | o[e >>> 24 & 255]
                }, r.interleave2 = function (e, t) {
                    return e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e | t << 1
                }, r.deinterleave2 = function (e, t) {
                    return e = e >>> t & 1431655765, e = 858993459 & (e | e >>> 1), e = 252645135 & (e | e >>> 2), e = 16711935 & (e | e >>> 4), e = 65535 & (e | e >>> 16), e << 16 >> 16
                }, r.interleave3 = function (e, t, r) {
                    return e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e |= t << 1, r &= 1023, r = 4278190335 & (r | r << 16), r = 251719695 & (r | r << 8), r = 3272356035 & (r | r << 4), r = 1227133513 & (r | r << 2), e | r << 2
                }, r.deinterleave3 = function (e, t) {
                    return e = e >>> t & 1227133513, e = 3272356035 & (e | e >>> 2), e = 251719695 & (e | e >>> 4), e = 4278190335 & (e | e >>> 8), e = 1023 & (e | e >>> 16), e << 22 >> 22
                }, r.nextCombination = function (e) {
                    var t = e | e - 1;
                    return t + 1 | (~t & -~t) - 1 >>> n(e) + 1
                }
            }, {}],
            30: [function (e, t) {
                "use strict";

                function r(e, t) {
                    for (var r = 0; e > r; ++r)
                        if (!(t[r] <= t[r + e])) return !0;
                    return !1
                }

                function n(e, t, n, i) {
                    for (var o = 0, a = 0, s = 0, l = e.length; l > s; ++s) {
                        var u = e[s];
                        if (!r(t, u)) {
                            for (var c = 0; 2 * t > c; ++c) n[o++] = u[c];
                            i[a++] = s
                        }
                    }
                    return a
                }

                function i(e, t, r, i) {
                    var o = e.length,
                        u = t.length;
                    if (!(0 >= o || 0 >= u)) {
                        var c = e[0].length >>> 1;
                        if (!(0 >= c)) {
                            var f, h = a.mallocDouble(2 * c * o),
                                d = a.mallocInt32(o);
                            if (o = n(e, c, h, d), o > 0) {
                                if (1 === c && i) s.init(o), f = s.sweepComplete(c, r, 0, o, h, d, 0, o, h, d);
                                else {
                                    var p = a.mallocDouble(2 * c * u),
                                        m = a.mallocInt32(u);
                                    u = n(t, c, p, m), u > 0 && (s.init(o + u), f = 1 === c ? s.sweepBipartite(c, r, 0, o, h, d, 0, u, p, m) : l(c, r, i, o, h, d, u, p, m), a.free(p), a.free(m))
                                }
                                a.free(h), a.free(d)
                            }
                            return f
                        }
                    }
                }

                function o(e, t, r) {
                    var n;
                    switch (arguments.length) {
                    case 1:
                        return n = [], i(e, e, function (e, t) {
                            n.push([e, t])
                        }, !0), n;
                    case 2:
                        if ("function" == typeof t) {
                            var o = t;
                            return i(e, e, o, !0)
                        }
                        return n = [], i(e, t, function (e, t) {
                            n.push([e, t])
                        }, !1), n;
                    case 3:
                        return i(e, t, r, !1);
                    default:
                        throw new Error("box-intersect: Invalid arguments")
                    }
                }
                t.exports = o;
                var a = e("typedarray-pool"),
                    s = e("./lib/sweep"),
                    l = e("./lib/intersect")
            }, {
                "./lib/intersect": 32,
                "./lib/sweep": 36,
                "typedarray-pool": 191
            }],
            31: [function (e, t, r) {
                "use strict";

                function n(e, t, r) {
                    var n = "bruteForce" + (e ? "Red" : "Blue") + (t ? "Flip" : "") + (r ? "Full" : ""),
                        i = ["function ", n, "(", w.join(), "){", "var ", u, "=2*", o, ";"],
                        l = "for(var i=" + c + "," + p + "=" + u + "*" + c + ";i<" + f + ";++i," + p + "+=" + u + "){var x0=" + h + "[" + a + "+" + p + "],x1=" + h + "[" + a + "+" + p + "+" + o + "],xi=" + d + "[i];",
                        A = "for(var j=" + m + "," + y + "=" + u + "*" + m + ";j<" + g + ";++j," + y + "+=" + u + "){var y0=" + v + "[" + a + "+" + y + "]," + (r ? "y1=" + v + "[" + a + "+" + y + "+" + o + "]," : "") + "yi=" + _ + "[j];";
                    return e ? i.push(l, x, ":", A) : i.push(A, x, ":", l), i.push(r ? "if(y1<x0||x1<y0)continue;" : t ? "if(y0<=x0||x1<y0)continue;" : "if(y0<x0||x1<y0)continue;"), i.push("for(var k=" + a + "+1;k<" + o + ";++k){var r0=" + h + "[k+" + p + "],r1=" + h + "[k+" + o + "+" + p + "],b0=" + v + "[k+" + y + "],b1=" + v + "[k+" + o + "+" + y + "];if(r1<b0||b1<r0)continue " + x + ";}var " + b + "=" + s + "("), i.push(t ? "yi,xi" : "xi,yi"), i.push(");if(" + b + "!==void 0)return " + b + ";}}}"), {
                        name: n,
                        code: i.join("")
                    }
                }

                function i(e) {
                    function t(t, r) {
                        var o = n(t, r, e);
                        i.push(o.code), a.push("return " + o.name + "(" + w.join() + ");")
                    }
                    var r = "bruteForce" + (e ? "Full" : "Partial"),
                        i = [],
                        o = w.slice();
                    e || o.splice(3, 0, l);
                    var a = ["function " + r + "(" + o.join() + "){"];
                    a.push("if(" + f + "-" + c + ">" + g + "-" + m + "){"), e ? (t(!0, !1), a.push("}else{"), t(!1, !1)) : (a.push("if(" + l + "){"), t(!0, !0), a.push("}else{"), t(!0, !1), a.push("}}else{if(" + l + "){"), t(!1, !0), a.push("}else{"), t(!1, !1), a.push("}")), a.push("}}return " + r);
                    var s = i.join("") + a.join(""),
                        u = new Function(s);
                    return u()
                }
                var o = "d",
                    a = "ax",
                    s = "vv",
                    l = "fp",
                    u = "es",
                    c = "rs",
                    f = "re",
                    h = "rb",
                    d = "ri",
                    p = "rp",
                    m = "bs",
                    g = "be",
                    v = "bb",
                    _ = "bi",
                    y = "bp",
                    b = "rv",
                    x = "Q",
                    w = [o, a, s, c, f, h, d, m, g, v, _];
                r.partial = i(!1), r.full = i(!0)
            }, {}],
            32: [function (e, t) {
                "use strict";

                function r(e, t) {
                    var r = 8 * l.log2(t + 1) * (e + 1) | 0,
                        n = l.nextPow2(T * r);
                    R.length < n && (s.free(R), R = s.mallocInt32(n));
                    var i = l.nextPow2(k * r);
                    i > S && (s.free(S), S = s.mallocDouble(i))
                }

                function n(e, t, r, n, i, o, a, s, l) {
                    var u = T * e;
                    R[u] = t, R[u + 1] = r, R[u + 2] = n, R[u + 3] = i, R[u + 4] = o, R[u + 5] = a;
                    var c = k * e;
                    S[c] = s, S[c + 1] = l
                }

                function i(e, t, r, n, i, o, a, s, l, u, c) {
                    var f = 2 * e,
                        h = l * f,
                        d = u[h + t];
                    e: for (var p = i, m = i * f; o > p; ++p, m += f) {
                        var g = a[m + t],
                            v = a[m + t + e];
                        if (!(g > d || d > v || n && d === g)) {
                            for (var _ = s[p], y = t + 1; e > y; ++y) {
                                var g = a[m + y],
                                    v = a[m + y + e],
                                    b = u[h + y],
                                    x = u[h + y + e];
                                if (b > v || g > x) continue e
                            }
                            var w;
                            if (w = n ? r(c, _) : r(_, c), void 0 !== w) return w
                        }
                    }
                }

                function o(e, t, r, n, i, o, a, s, l, u) {
                    var c = 2 * e,
                        f = s * c,
                        h = l[f + t];
                    e: for (var d = n, p = n * c; i > d; ++d, p += c) {
                        var m = a[d];
                        if (m !== u) {
                            var g = o[p + t],
                                v = o[p + t + e];
                            if (!(g > h || h > v)) {
                                for (var _ = t + 1; e > _; ++_) {
                                    var g = o[p + _],
                                        v = o[p + _ + e],
                                        y = l[f + _],
                                        b = l[f + _ + e];
                                    if (y > v || g > b) continue e
                                }
                                var x = r(m, u);
                                if (void 0 !== x) return x
                            }
                        }
                    }
                }

                function a(e, t, a, s, l, u, p, E, M) {
                    r(e, s + p);
                    var j, P = 0,
                        N = 2 * e;
                    for (n(P++, 0, 0, s, 0, p, a ? 16 : 0, -1 / 0, 1 / 0), a || n(P++, 0, 0, p, 0, s, 1, -1 / 0, 1 / 0); P > 0;) {
                        P -= 1;
                        var z = P * T,
                            L = R[z],
                            O = R[z + 1],
                            I = R[z + 2],
                            U = R[z + 3],
                            F = R[z + 4],
                            D = R[z + 5],
                            C = P * k,
                            $ = S[C],
                            G = S[C + 1],
                            B = 1 & D,
                            q = !!(16 & D),
                            V = l,
                            W = u,
                            X = E,
                            H = M;
                        if (B && (V = E, W = M, X = l, H = u), !(2 & D && (I = b(e, L, O, I, V, W, G), O >= I) || 4 & D && (O = x(e, L, O, I, V, W, $), O >= I))) {
                            var Y = I - O,
                                Z = F - U;
                            if (q) {
                                if (v > e * Y * (Y + Z)) {
                                    if (j = h.scanComplete(e, L, t, O, I, V, W, U, F, X, H), void 0 !== j) return j;
                                    continue
                                }
                            } else {
                                if (e * Math.min(Y, Z) < m) {
                                    if (j = c(e, L, t, B, O, I, V, W, U, F, X, H), void 0 !== j) return j;
                                    continue
                                }
                                if (g > e * Y * Z) {
                                    if (j = h.scanBipartite(e, L, t, B, O, I, V, W, U, F, X, H), void 0 !== j) return j;
                                    continue
                                }
                            }
                            var J = _(e, L, O, I, V, W, $, G);
                            if (J > O)
                                if (m > e * (J - O)) {
                                    if (j = f(e, L + 1, t, O, J, V, W, U, F, X, H), void 0 !== j) return j
                                } else if (L === e - 2) {
                                if (j = B ? h.sweepBipartite(e, t, U, F, X, H, O, J, V, W) : h.sweepBipartite(e, t, O, J, V, W, U, F, X, H), void 0 !== j) return j
                            } else n(P++, L + 1, O, J, U, F, B, -1 / 0, 1 / 0), n(P++, L + 1, U, F, O, J, 1 ^ B, -1 / 0, 1 / 0);
                            if (I > J) {
                                var K = d(e, L, U, F, X, H),
                                    Q = X[N * K + L],
                                    et = y(e, L, K, F, X, H, Q);
                                if (F > et && n(P++, L, J, I, et, F, (4 | B) + (q ? 16 : 0), Q, G), K > U && n(P++, L, J, I, U, K, (2 | B) + (q ? 16 : 0), $, Q), K + 1 === et) {
                                    if (j = q ? o(e, L, t, J, I, V, W, K, X, H[K]) : i(e, L, t, B, J, I, V, W, K, X, H[K]), void 0 !== j) return j
                                } else if (et > K) {
                                    var tt;
                                    if (q) {
                                        if (tt = w(e, L, J, I, V, W, Q), tt > J) {
                                            var rt = y(e, L, J, tt, V, W, Q);
                                            if (L === e - 2) {
                                                if (rt > J && (j = h.sweepComplete(e, t, J, rt, V, W, K, et, X, H), void 0 !== j)) return j;
                                                if (tt > rt && (j = h.sweepBipartite(e, t, rt, tt, V, W, K, et, X, H), void 0 !== j)) return j
                                            } else rt > J && n(P++, L + 1, J, rt, K, et, 16, -1 / 0, 1 / 0), tt > rt && (n(P++, L + 1, rt, tt, K, et, 0, -1 / 0, 1 / 0), n(P++, L + 1, K, et, rt, tt, 1, -1 / 0, 1 / 0))
                                        }
                                    } else tt = B ? A(e, L, J, I, V, W, Q) : w(e, L, J, I, V, W, Q), tt > J && (L === e - 2 ? j = B ? h.sweepBipartite(e, t, K, et, X, H, J, tt, V, W) : h.sweepBipartite(e, t, J, tt, V, W, K, et, X, H) : (n(P++, L + 1, J, tt, K, et, B, -1 / 0, 1 / 0), n(P++, L + 1, K, et, J, tt, 1 ^ B, -1 / 0, 1 / 0)))
                                }
                            }
                        }
                    }
                }
                t.exports = a;
                var s = e("typedarray-pool"),
                    l = e("bit-twiddle"),
                    u = e("./brute"),
                    c = u.partial,
                    f = u.full,
                    h = e("./sweep"),
                    d = e("./median"),
                    p = e("./partition"),
                    m = 128,
                    g = 1 << 22,
                    v = 1 << 22,
                    _ = p("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
                    y = p("lo===p0", ["p0"]),
                    b = p("lo<p0", ["p0"]),
                    x = p("hi<=p0", ["p0"]),
                    w = p("lo<=p0&&p0<=hi", ["p0"]),
                    A = p("lo<p0&&p0<=hi", ["p0"]),
                    T = 6,
                    k = 2,
                    E = 1024,
                    R = s.mallocInt32(E),
                    S = s.mallocDouble(E)
            }, {
                "./brute": 31,
                "./median": 33,
                "./partition": 34,
                "./sweep": 36,
                "bit-twiddle": 29,
                "typedarray-pool": 191
            }],
            33: [function (e, t) {
                "use strict";

                function r(e, t, r, n, i, o) {
                    for (var a = 2 * e, s = a * (r + 1) + t, l = r + 1; n > l; ++l, s += a)
                        for (var u = i[s], c = l, f = a * (l - 1); c > r && i[f + t] > u; --c, f -= a) {
                            for (var h = f, d = f + a, p = 0; a > p; ++p, ++h, ++d) {
                                var m = i[h];
                                i[h] = i[d], i[d] = m
                            }
                            var g = o[c];
                            o[c] = o[c - 1], o[c - 1] = g
                        }
                }

                function n(e, t, n, i, s, l) {
                    if (n + 1 >= i) return n;
                    for (var u = n, c = i, f = i + n >>> 1, h = 2 * e, d = f, p = s[h * f + t]; c > u;) {
                        if (a > c - u) {
                            r(e, t, u, c, s, l), p = s[h * f + t];
                            break
                        }
                        var m = c - u,
                            g = Math.random() * m + u | 0,
                            v = s[h * g + t],
                            _ = Math.random() * m + u | 0,
                            y = s[h * _ + t],
                            b = Math.random() * m + u | 0,
                            x = s[h * b + t];
                        y >= v ? x >= y ? (d = _, p = y) : v >= x ? (d = g, p = v) : (d = b, p = x) : y >= x ? (d = _, p = y) : x >= v ? (d = g, p = v) : (d = b, p = x);
                        for (var w = h * (c - 1), A = h * d, T = 0; h > T; ++T, ++w, ++A) {
                            var k = s[w];
                            s[w] = s[A], s[A] = k
                        }
                        var E = l[c - 1];
                        l[c - 1] = l[d], l[d] = E, d = o(e, t, u, c - 1, s, l, p);
                        for (var w = h * (c - 1), A = h * d, T = 0; h > T; ++T, ++w, ++A) {
                            var k = s[w];
                            s[w] = s[A], s[A] = k
                        }
                        var E = l[c - 1];
                        if (l[c - 1] = l[d], l[d] = E, d > f) {
                            for (c = d - 1; c > u && s[h * (c - 1) + t] === p;) c -= 1;
                            c += 1
                        } else {
                            if (!(f > d)) break;
                            for (u = d + 1; c > u && s[h * u + t] === p;) u += 1
                        }
                    }
                    return o(e, t, n, f, s, l, s[h * f + t])
                }
                t.exports = n;
                var i = e("./partition"),
                    o = i("lo<p0", ["p0"]),
                    a = 8
            }, {
                "./partition": 34
            }],
            34: [function (e, t) {
                "use strict";

                function r(e, t) {
                    var r = "abcdef".split("").concat(t),
                        i = [];
                    return e.indexOf("lo") >= 0 && i.push("lo=e[k+n]"), e.indexOf("hi") >= 0 && i.push("hi=e[k+o]"), r.push(n.replace("_", i.join()).replace("$", e)), Function.apply(void 0, r)
                }
                t.exports = r;
                var n = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
            }, {}],
            35: [function (e, t) {
                "use strict";

                function r(e, t) {
                    4 * f >= t ? n(0, t - 1, e) : c(0, t - 1, e)
                }

                function n(e, t, r) {
                    for (var n = 2 * (e + 1), i = e + 1; t >= i; ++i) {
                        for (var o = r[n++], a = r[n++], s = i, l = n - 2; s-- > e;) {
                            var u = r[l - 2],
                                c = r[l - 1];
                            if (o > u) break;
                            if (u === o && a > c) break;
                            r[l] = u, r[l + 1] = c, l -= 2
                        }
                        r[l] = o, r[l + 1] = a
                    }
                }

                function i(e, t, r) {
                    e *= 2, t *= 2;
                    var n = r[e],
                        i = r[e + 1];
                    r[e] = r[t], r[e + 1] = r[t + 1], r[t] = n, r[t + 1] = i
                }

                function o(e, t, r) {
                    e *= 2, t *= 2, r[e] = r[t], r[e + 1] = r[t + 1]
                }

                function a(e, t, r, n) {
                    e *= 2, t *= 2, r *= 2;
                    var i = n[e],
                        o = n[e + 1];
                    n[e] = n[t], n[e + 1] = n[t + 1], n[t] = n[r], n[t + 1] = n[r + 1], n[r] = i, n[r + 1] = o
                }

                function s(e, t, r, n, i) {
                    e *= 2, t *= 2, i[e] = i[t], i[t] = r, i[e + 1] = i[t + 1], i[t + 1] = n
                }

                function l(e, t, r) {
                    e *= 2, t *= 2;
                    var n = r[e],
                        i = r[t];
                    return i > n ? !1 : n === i ? r[e + 1] > r[t + 1] : !0
                }

                function u(e, t, r, n) {
                    e *= 2;
                    var i = n[e];
                    return t > i ? !0 : i === t ? n[e + 1] < r : !1
                }

                function c(e, t, r) {
                    var h = (t - e + 1) / 6 | 0,
                        d = e + h,
                        p = t - h,
                        m = e + t >> 1,
                        g = m - h,
                        v = m + h,
                        _ = d,
                        y = g,
                        b = m,
                        x = v,
                        w = p,
                        A = e + 1,
                        T = t - 1,
                        k = 0;
                    l(_, y, r) && (k = _, _ = y, y = k), l(x, w, r) && (k = x, x = w, w = k), l(_, b, r) && (k = _, _ = b, b = k), l(y, b, r) && (k = y, y = b, b = k), l(_, x, r) && (k = _, _ = x, x = k), l(b, x, r) && (k = b, b = x, x = k), l(y, w, r) && (k = y, y = w, w = k), l(y, b, r) && (k = y, y = b, b = k), l(x, w, r) && (k = x, x = w, w = k);
                    for (var E = r[2 * y], R = r[2 * y + 1], S = r[2 * x], M = r[2 * x + 1], j = 2 * _, P = 2 * b, N = 2 * w, z = 2 * d, L = 2 * m, O = 2 * p, I = 0; 2 > I; ++I) {
                        var U = r[j + I],
                            F = r[P + I],
                            D = r[N + I];
                        r[z + I] = U, r[L + I] = F, r[O + I] = D
                    }
                    o(g, e, r), o(v, t, r);
                    for (var C = A; T >= C; ++C)
                        if (u(C, E, R, r)) C !== A && i(C, A, r), ++A;
                        else if (!u(C, S, M, r))
                        for (;;) {
                            if (u(T, S, M, r)) {
                                u(T, E, R, r) ? (a(C, A, T, r), ++A, --T) : (i(C, T, r), --T);
                                break
                            }
                            if (--T < C) break
                        }
                    s(e, A - 1, E, R, r), s(t, T + 1, S, M, r), f >= A - 2 - e ? n(e, A - 2, r) : c(e, A - 2, r), f >= t - (T + 2) ? n(T + 2, t, r) : c(T + 2, t, r), f >= T - A ? n(A, T, r) : c(A, T, r)
                }
                t.exports = r;
                var f = 32
            }, {}],
            36: [function (e, t) {
                "use strict";

                function r(e) {
                    var t = c.nextPow2(e);
                    p.length < t && (u.free(p), p = u.mallocInt32(t)), m.length < t && (u.free(m), m = u.mallocInt32(t)), g.length < t && (u.free(g), g = u.mallocInt32(t)), v.length < t && (u.free(v), v = u.mallocInt32(t)), _.length < t && (u.free(_), _ = u.mallocInt32(t)), y.length < t && (u.free(y), y = u.mallocInt32(t));
                    var r = 8 * t;
                    b.length < r && (u.free(b), b = u.mallocDouble(r))
                }

                function n(e, t, r, n) {
                    var i = t[n],
                        o = e[r - 1];
                    e[i] = o, t[o] = i
                }

                function i(e, t, r, n) {
                    e[r] = n, t[n] = r
                }

                function o(e, t, r, o, a, s, l, u, c, d) {
                    for (var _ = 0, y = 2 * e, x = e - 1, w = y - 1, A = r; o > A; ++A) {
                        var T = s[A],
                            k = y * A;
                        b[_++] = a[k + x], b[_++] = -(T + 1), b[_++] = a[k + w], b[_++] = T
                    }
                    for (var A = l; u > A; ++A) {
                        var T = d[A] + h,
                            E = y * A;
                        b[_++] = c[E + x], b[_++] = -T, b[_++] = c[E + w], b[_++] = T
                    }
                    var R = _ >>> 1;
                    f(b, R);
                    for (var S = 0, M = 0, A = 0; R > A; ++A) {
                        var j = 0 | b[2 * A + 1];
                        if (j >= h) j = j - h | 0, n(g, v, M--, j);
                        else if (j >= 0) n(p, m, S--, j);
                        else if (-h >= j) {
                            j = -j - h | 0;
                            for (var P = 0; S > P; ++P) {
                                var N = t(p[P], j);
                                if (void 0 !== N) return N
                            }
                            i(g, v, M++, j)
                        } else {
                            j = -j - 1 | 0;
                            for (var P = 0; M > P; ++P) {
                                var N = t(j, g[P]);
                                if (void 0 !== N) return N
                            }
                            i(p, m, S++, j)
                        }
                    }
                }

                function a(e, t, r, o, a, s, l, u, c, h) {
                    for (var d = 0, x = 2 * e, w = e - 1, A = x - 1, T = r; o > T; ++T) {
                        var k = s[T] + 1 << 1,
                            E = x * T;
                        b[d++] = a[E + w], b[d++] = -k, b[d++] = a[E + A], b[d++] = k
                    }
                    for (var T = l; u > T; ++T) {
                        var k = h[T] + 1 << 1,
                            R = x * T;
                        b[d++] = c[R + w], b[d++] = 1 | -k, b[d++] = c[R + A], b[d++] = 1 | k
                    }
                    var S = d >>> 1;
                    f(b, S);
                    for (var M = 0, j = 0, P = 0, T = 0; S > T; ++T) {
                        var N = 0 | b[2 * T + 1],
                            z = 1 & N;
                        if (S - 1 > T && N >> 1 === b[2 * T + 3] >> 1 && (z = 2, T += 1), 0 > N) {
                            for (var L = -(N >> 1) - 1, O = 0; P > O; ++O) {
                                var I = t(_[O], L);
                                if (void 0 !== I) return I
                            }
                            if (0 !== z)
                                for (var O = 0; M > O; ++O) {
                                    var I = t(p[O], L);
                                    if (void 0 !== I) return I
                                }
                            if (1 !== z)
                                for (var O = 0; j > O; ++O) {
                                    var I = t(g[O], L);
                                    if (void 0 !== I) return I
                                }
                            0 === z ? i(p, m, M++, L) : 1 === z ? i(g, v, j++, L) : 2 === z && i(_, y, P++, L)
                        } else {
                            var L = (N >> 1) - 1;
                            0 === z ? n(p, m, M--, L) : 1 === z ? n(g, v, j--, L) : 2 === z && n(_, y, P--, L)
                        }
                    }
                }

                function s(e, t, r, o, a, s, l, u, c, d, g, v) {
                    var _ = 0,
                        y = 2 * e,
                        x = t,
                        w = t + e,
                        A = 1,
                        T = 1;
                    o ? T = h : A = h;
                    for (var k = a; s > k; ++k) {
                        var E = k + A,
                            R = y * k;
                        b[_++] = l[R + x], b[_++] = -E, b[_++] = l[R + w], b[_++] = E
                    }
                    for (var k = c; d > k; ++k) {
                        var E = k + T,
                            S = y * k;
                        b[_++] = g[S + x], b[_++] = -E
                    }
                    var M = _ >>> 1;
                    f(b, M);
                    for (var j = 0, k = 0; M > k; ++k) {
                        var P = 0 | b[2 * k + 1];
                        if (0 > P) {
                            var E = -P,
                                N = !1;
                            if (E >= h ? (N = !o, E -= h) : (N = !!o, E -= 1), N) i(p, m, j++, E);
                            else {
                                var z = v[E],
                                    L = y * E,
                                    O = g[L + t + 1],
                                    I = g[L + t + 1 + e];
                                e: for (var U = 0; j > U; ++U) {
                                    var F = p[U],
                                        D = y * F;
                                    if (!(I < l[D + t + 1] || l[D + t + 1 + e] < O)) {
                                        for (var C = t + 2; e > C; ++C)
                                            if (g[L + C + e] < l[D + C] || l[D + C + e] < g[L + C]) continue e;
                                        var $, G = u[F];
                                        if ($ = o ? r(z, G) : r(G, z), void 0 !== $) return $
                                    }
                                }
                            }
                        } else n(p, m, j--, P - A)
                    }
                }

                function l(e, t, r, n, i, o, a, s, l, u, c) {
                    for (var d = 0, m = 2 * e, g = t, v = t + e, _ = n; i > _; ++_) {
                        var y = _ + h,
                            x = m * _;
                        b[d++] = o[x + g], b[d++] = -y, b[d++] = o[x + v], b[d++] = y
                    }
                    for (var _ = s; l > _; ++_) {
                        var y = _ + 1,
                            w = m * _;
                        b[d++] = u[w + g], b[d++] = -y
                    }
                    var A = d >>> 1;
                    f(b, A);
                    for (var T = 0, _ = 0; A > _; ++_) {
                        var k = 0 | b[2 * _ + 1];
                        if (0 > k) {
                            var y = -k;
                            if (y >= h) p[T++] = y - h;
                            else {
                                y -= 1;
                                var E = c[y],
                                    R = m * y,
                                    S = u[R + t + 1],
                                    M = u[R + t + 1 + e];
                                e: for (var j = 0; T > j; ++j) {
                                    var P = p[j],
                                        N = a[P];
                                    if (N === E) break;
                                    var z = m * P;
                                    if (!(M < o[z + t + 1] || o[z + t + 1 + e] < S)) {
                                        for (var L = t + 2; e > L; ++L)
                                            if (u[R + L + e] < o[z + L] || o[z + L + e] < u[R + L]) continue e;
                                        var O = r(N, E);
                                        if (void 0 !== O) return O
                                    }
                                }
                            }
                        } else {
                            for (var y = k - h, j = T - 1; j >= 0; --j)
                                if (p[j] === y) {
                                    for (var L = j + 1; T > L; ++L) p[L - 1] = p[L];
                                    break
                                }--T
                        }
                    }
                }
                t.exports = {
                    init: r,
                    sweepBipartite: o,
                    sweepComplete: a,
                    scanBipartite: s,
                    scanComplete: l
                };
                var u = e("typedarray-pool"),
                    c = e("bit-twiddle"),
                    f = e("./sort"),
                    h = 1 << 28,
                    d = 1024,
                    p = u.mallocInt32(d),
                    m = u.mallocInt32(d),
                    g = u.mallocInt32(d),
                    v = u.mallocInt32(d),
                    _ = u.mallocInt32(d),
                    y = u.mallocInt32(d),
                    b = u.mallocDouble(8 * d)
            }, {
                "./sort": 35,
                "bit-twiddle": 29,
                "typedarray-pool": 191
            }],
            37: [function () {}, {}],
            38: [function (e, t, r) {
                (function (t) {
                    "use strict";

                    function n() {
                        function e() {}
                        try {
                            var t = new Uint8Array(1);
                            return t.foo = function () {
                                return 42
                            }, t.constructor = e, 42 === t.foo() && t.constructor === e && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                        } catch (r) {
                            return !1
                        }
                    }

                    function i() {
                        return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                    }

                    function o(e) {
                        return this instanceof o ? (o.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof e ? a(this, e) : "string" == typeof e ? s(this, e, arguments.length > 1 ? arguments[1] : "utf8") : l(this, e)) : arguments.length > 1 ? new o(e, arguments[1]) : new o(e)
                    }

                    function a(e, t) {
                        if (e = m(e, 0 > t ? 0 : 0 | g(t)), !o.TYPED_ARRAY_SUPPORT)
                            for (var r = 0; t > r; r++) e[r] = 0;
                        return e
                    }

                    function s(e, t, r) {
                        ("string" != typeof r || "" === r) && (r = "utf8");
                        var n = 0 | _(t, r);
                        return e = m(e, n), e.write(t, r), e
                    }

                    function l(e, t) {
                        if (o.isBuffer(t)) return u(e, t);
                        if (Z(t)) return c(e, t);
                        if (null == t) throw new TypeError("must start with number, buffer, array or string");
                        if ("undefined" != typeof ArrayBuffer) {
                            if (t.buffer instanceof ArrayBuffer) return f(e, t);
                            if (t instanceof ArrayBuffer) return h(e, t)
                        }
                        return t.length ? d(e, t) : p(e, t)
                    }

                    function u(e, t) {
                        var r = 0 | g(t.length);
                        return e = m(e, r), t.copy(e, 0, 0, r), e
                    }

                    function c(e, t) {
                        var r = 0 | g(t.length);
                        e = m(e, r);
                        for (var n = 0; r > n; n += 1) e[n] = 255 & t[n];
                        return e
                    }

                    function f(e, t) {
                        var r = 0 | g(t.length);
                        e = m(e, r);
                        for (var n = 0; r > n; n += 1) e[n] = 255 & t[n];
                        return e
                    }

                    function h(e, t) {
                        return o.TYPED_ARRAY_SUPPORT ? (t.byteLength, e = o._augment(new Uint8Array(t))) : e = f(e, new Uint8Array(t)), e
                    }

                    function d(e, t) {
                        var r = 0 | g(t.length);
                        e = m(e, r);
                        for (var n = 0; r > n; n += 1) e[n] = 255 & t[n];
                        return e
                    }

                    function p(e, t) {
                        var r, n = 0;
                        "Buffer" === t.type && Z(t.data) && (r = t.data, n = 0 | g(r.length)), e = m(e, n);
                        for (var i = 0; n > i; i += 1) e[i] = 255 & r[i];
                        return e
                    }

                    function m(e, t) {
                        o.TYPED_ARRAY_SUPPORT ? (e = o._augment(new Uint8Array(t)), e.__proto__ = o.prototype) : (e.length = t, e._isBuffer = !0);
                        var r = 0 !== t && t <= o.poolSize >>> 1;
                        return r && (e.parent = J), e
                    }

                    function g(e) {
                        if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                        return 0 | e
                    }

                    function v(e, t) {
                        if (!(this instanceof v)) return new v(e, t);
                        var r = new o(e, t);
                        return delete r.parent, r
                    }

                    function _(e, t) {
                        "string" != typeof e && (e = "" + e);
                        var r = e.length;
                        if (0 === r) return 0;
                        for (var n = !1;;) switch (t) {
                        case "ascii":
                        case "binary":
                        case "raw":
                        case "raws":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return B(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return W(e).length;
                        default:
                            if (n) return B(e).length;
                            t = ("" + t).toLowerCase(), n = !0
                        }
                    }

                    function y(e, t, r) {
                        var n = !1;
                        if (t = 0 | t, r = void 0 === r || 1 / 0 === r ? this.length : 0 | r, e || (e = "utf8"), 0 > t && (t = 0), r > this.length && (r = this.length), t >= r) return "";
                        for (;;) switch (e) {
                        case "hex":
                            return P(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return R(this, t, r);
                        case "ascii":
                            return M(this, t, r);
                        case "binary":
                            return j(this, t, r);
                        case "base64":
                            return E(this, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return N(this, t, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), n = !0
                        }
                    }

                    function b(e, t, r, n) {
                        r = Number(r) || 0;
                        var i = e.length - r;
                        n ? (n = Number(n), n > i && (n = i)) : n = i;
                        var o = t.length;
                        if (o % 2 !== 0) throw new Error("Invalid hex string");
                        n > o / 2 && (n = o / 2);
                        for (var a = 0; n > a; a++) {
                            var s = parseInt(t.substr(2 * a, 2), 16);
                            if (isNaN(s)) throw new Error("Invalid hex string");
                            e[r + a] = s
                        }
                        return a
                    }

                    function x(e, t, r, n) {
                        return X(B(t, e.length - r), e, r, n)
                    }

                    function w(e, t, r, n) {
                        return X(q(t), e, r, n)
                    }

                    function A(e, t, r, n) {
                        return w(e, t, r, n)
                    }

                    function T(e, t, r, n) {
                        return X(W(t), e, r, n)
                    }

                    function k(e, t, r, n) {
                        return X(V(t, e.length - r), e, r, n)
                    }

                    function E(e, t, r) {
                        return H.fromByteArray(0 === t && r === e.length ? e : e.slice(t, r))
                    }

                    function R(e, t, r) {
                        r = Math.min(e.length, r);
                        for (var n = [], i = t; r > i;) {
                            var o = e[i],
                                a = null,
                                s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                            if (r >= i + s) {
                                var l, u, c, f;
                                switch (s) {
                                case 1:
                                    128 > o && (a = o);
                                    break;
                                case 2:
                                    l = e[i + 1], 128 === (192 & l) && (f = (31 & o) << 6 | 63 & l, f > 127 && (a = f));
                                    break;
                                case 3:
                                    l = e[i + 1], u = e[i + 2], 128 === (192 & l) && 128 === (192 & u) && (f = (15 & o) << 12 | (63 & l) << 6 | 63 & u, f > 2047 && (55296 > f || f > 57343) && (a = f));
                                    break;
                                case 4:
                                    l = e[i + 1], u = e[i + 2], c = e[i + 3], 128 === (192 & l) && 128 === (192 & u) && 128 === (192 & c) && (f = (15 & o) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & c, f > 65535 && 1114112 > f && (a = f))
                                }
                            }
                            null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += s
                        }
                        return S(n)
                    }

                    function S(e) {
                        var t = e.length;
                        if (K >= t) return String.fromCharCode.apply(String, e);
                        for (var r = "", n = 0; t > n;) r += String.fromCharCode.apply(String, e.slice(n, n += K));
                        return r
                    }

                    function M(e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var i = t; r > i; i++) n += String.fromCharCode(127 & e[i]);
                        return n
                    }

                    function j(e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var i = t; r > i; i++) n += String.fromCharCode(e[i]);
                        return n
                    }

                    function P(e, t, r) {
                        var n = e.length;
                        (!t || 0 > t) && (t = 0), (!r || 0 > r || r > n) && (r = n);
                        for (var i = "", o = t; r > o; o++) i += G(e[o]);
                        return i
                    }

                    function N(e, t, r) {
                        for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                        return i
                    }

                    function z(e, t, r) {
                        if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
                        if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
                    }

                    function L(e, t, r, n, i, a) {
                        if (!o.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance");
                        if (t > i || a > t) throw new RangeError("value is out of bounds");
                        if (r + n > e.length) throw new RangeError("index out of range")
                    }

                    function O(e, t, r, n) {
                        0 > t && (t = 65535 + t + 1);
                        for (var i = 0, o = Math.min(e.length - r, 2); o > i; i++) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
                    }

                    function I(e, t, r, n) {
                        0 > t && (t = 4294967295 + t + 1);
                        for (var i = 0, o = Math.min(e.length - r, 4); o > i; i++) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
                    }

                    function U(e, t, r, n, i, o) {
                        if (t > i || o > t) throw new RangeError("value is out of bounds");
                        if (r + n > e.length) throw new RangeError("index out of range");
                        if (0 > r) throw new RangeError("index out of range")
                    }

                    function F(e, t, r, n, i) {
                        return i || U(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), Y.write(e, t, r, n, 23, 4), r + 4
                    }

                    function D(e, t, r, n, i) {
                        return i || U(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), Y.write(e, t, r, n, 52, 8), r + 8
                    }

                    function C(e) {
                        if (e = $(e).replace(et, ""), e.length < 2) return "";
                        for (; e.length % 4 !== 0;) e += "=";
                        return e
                    }

                    function $(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }

                    function G(e) {
                        return 16 > e ? "0" + e.toString(16) : e.toString(16)
                    }

                    function B(e, t) {
                        t = t || 1 / 0;
                        for (var r, n = e.length, i = null, o = [], a = 0; n > a; a++) {
                            if (r = e.charCodeAt(a), r > 55295 && 57344 > r) {
                                if (!i) {
                                    if (r > 56319) {
                                        (t -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    if (a + 1 === n) {
                                        (t -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    i = r;
                                    continue
                                }
                                if (56320 > r) {
                                    (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                                    continue
                                }
                                r = (i - 55296 << 10 | r - 56320) + 65536
                            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                            if (i = null, 128 > r) {
                                if ((t -= 1) < 0) break;
                                o.push(r)
                            } else if (2048 > r) {
                                if ((t -= 2) < 0) break;
                                o.push(r >> 6 | 192, 63 & r | 128)
                            } else if (65536 > r) {
                                if ((t -= 3) < 0) break;
                                o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                            } else {
                                if (!(1114112 > r)) throw new Error("Invalid code point");
                                if ((t -= 4) < 0) break;
                                o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                            }
                        }
                        return o
                    }

                    function q(e) {
                        for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
                        return t
                    }

                    function V(e, t) {
                        for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); a++) r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                        return o
                    }

                    function W(e) {
                        return H.toByteArray(C(e))
                    }

                    function X(e, t, r, n) {
                        for (var i = 0; n > i && !(i + r >= t.length || i >= e.length); i++) t[i + r] = e[i];
                        return i
                    }
                    var H = e("base64-js"),
                        Y = e("ieee754"),
                        Z = e("isarray");
                    r.Buffer = o, r.SlowBuffer = v, r.INSPECT_MAX_BYTES = 50, o.poolSize = 8192;
                    var J = {};
                    o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : n(), o.TYPED_ARRAY_SUPPORT ? (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array) : (o.prototype.length = void 0, o.prototype.parent = void 0), o.isBuffer = function (e) {
                        return !(null == e || !e._isBuffer)
                    }, o.compare = function (e, t) {
                        if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                        if (e === t) return 0;
                        for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); a > i && e[i] === t[i];) ++i;
                        return i !== a && (r = e[i], n = t[i]), n > r ? -1 : r > n ? 1 : 0
                    }, o.isEncoding = function (e) {
                        switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "raw":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                        }
                    }, o.concat = function (e, t) {
                        if (!Z(e)) throw new TypeError("list argument must be an Array of Buffers.");
                        if (0 === e.length) return new o(0);
                        var r;
                        if (void 0 === t)
                            for (t = 0, r = 0; r < e.length; r++) t += e[r].length;
                        var n = new o(t),
                            i = 0;
                        for (r = 0; r < e.length; r++) {
                            var a = e[r];
                            a.copy(n, i), i += a.length
                        }
                        return n
                    }, o.byteLength = _, o.prototype.toString = function () {
                        var e = 0 | this.length;
                        return 0 === e ? "" : 0 === arguments.length ? R(this, 0, e) : y.apply(this, arguments)
                    }, o.prototype.equals = function (e) {
                        if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                        return this === e ? !0 : 0 === o.compare(this, e)
                    }, o.prototype.inspect = function () {
                        var e = "",
                            t = r.INSPECT_MAX_BYTES;
                        return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
                    }, o.prototype.compare = function (e) {
                        if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                        return this === e ? 0 : o.compare(this, e)
                    }, o.prototype.indexOf = function (e, t) {
                        function r(e, t, r) {
                            for (var n = -1, i = 0; r + i < e.length; i++)
                                if (e[r + i] === t[-1 === n ? 0 : i - n]) {
                                    if (-1 === n && (n = i), i - n + 1 === t.length) return r + n
                                } else n = -1;
                            return -1
                        }
                        if (t > 2147483647 ? t = 2147483647 : -2147483648 > t && (t = -2147483648), t >>= 0, 0 === this.length) return -1;
                        if (t >= this.length) return -1;
                        if (0 > t && (t = Math.max(this.length + t, 0)), "string" == typeof e) return 0 === e.length ? -1 : String.prototype.indexOf.call(this, e, t);
                        if (o.isBuffer(e)) return r(this, e, t);
                        if ("number" == typeof e) return o.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, e, t) : r(this, [e], t);
                        throw new TypeError("val must be string, number or Buffer")
                    }, o.prototype.get = function (e) {
                        return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
                    }, o.prototype.set = function (e, t) {
                        return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
                    }, o.prototype.write = function (e, t, r, n) {
                        if (void 0 === t) n = "utf8", r = this.length, t = 0;
                        else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                        else if (isFinite(t)) t = 0 | t, isFinite(r) ? (r = 0 | r, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                        else {
                            var i = n;
                            n = t, t = 0 | r, r = i
                        }
                        var o = this.length - t;
                        if ((void 0 === r || r > o) && (r = o), e.length > 0 && (0 > r || 0 > t) || t > this.length) throw new RangeError("attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var a = !1;;) switch (n) {
                        case "hex":
                            return b(this, e, t, r);
                        case "utf8":
                        case "utf-8":
                            return x(this, e, t, r);
                        case "ascii":
                            return w(this, e, t, r);
                        case "binary":
                            return A(this, e, t, r);
                        case "base64":
                            return T(this, e, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return k(this, e, t, r);
                        default:
                            if (a) throw new TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), a = !0
                        }
                    }, o.prototype.toJSON = function () {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    };
                    var K = 4096;
                    o.prototype.slice = function (e, t) {
                        var r = this.length;
                        e = ~~e, t = void 0 === t ? r : ~~t, 0 > e ? (e += r, 0 > e && (e = 0)) : e > r && (e = r), 0 > t ? (t += r, 0 > t && (t = 0)) : t > r && (t = r), e > t && (t = e);
                        var n;
                        if (o.TYPED_ARRAY_SUPPORT) n = o._augment(this.subarray(e, t));
                        else {
                            var i = t - e;
                            n = new o(i, void 0);
                            for (var a = 0; i > a; a++) n[a] = this[a + e]
                        }
                        return n.length && (n.parent = this.parent || this), n
                    }, o.prototype.readUIntLE = function (e, t, r) {
                        e = 0 | e, t = 0 | t, r || z(e, t, this.length);
                        for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                        return n
                    }, o.prototype.readUIntBE = function (e, t, r) {
                        e = 0 | e, t = 0 | t, r || z(e, t, this.length);
                        for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                        return n
                    }, o.prototype.readUInt8 = function (e, t) {
                        return t || z(e, 1, this.length), this[e]
                    }, o.prototype.readUInt16LE = function (e, t) {
                        return t || z(e, 2, this.length), this[e] | this[e + 1] << 8
                    }, o.prototype.readUInt16BE = function (e, t) {
                        return t || z(e, 2, this.length), this[e] << 8 | this[e + 1]
                    }, o.prototype.readUInt32LE = function (e, t) {
                        return t || z(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }, o.prototype.readUInt32BE = function (e, t) {
                        return t || z(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }, o.prototype.readIntLE = function (e, t, r) {
                        e = 0 | e, t = 0 | t, r || z(e, t, this.length);
                        for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                        return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n
                    }, o.prototype.readIntBE = function (e, t, r) {
                        e = 0 | e, t = 0 | t, r || z(e, t, this.length);
                        for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                        return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o
                    }, o.prototype.readInt8 = function (e, t) {
                        return t || z(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    }, o.prototype.readInt16LE = function (e, t) {
                        t || z(e, 2, this.length);
                        var r = this[e] | this[e + 1] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, o.prototype.readInt16BE = function (e, t) {
                        t || z(e, 2, this.length);
                        var r = this[e + 1] | this[e] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, o.prototype.readInt32LE = function (e, t) {
                        return t || z(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }, o.prototype.readInt32BE = function (e, t) {
                        return t || z(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }, o.prototype.readFloatLE = function (e, t) {
                        return t || z(e, 4, this.length), Y.read(this, e, !0, 23, 4)
                    }, o.prototype.readFloatBE = function (e, t) {
                        return t || z(e, 4, this.length), Y.read(this, e, !1, 23, 4)
                    }, o.prototype.readDoubleLE = function (e, t) {
                        return t || z(e, 8, this.length), Y.read(this, e, !0, 52, 8)
                    }, o.prototype.readDoubleBE = function (e, t) {
                        return t || z(e, 8, this.length), Y.read(this, e, !1, 52, 8)
                    }, o.prototype.writeUIntLE = function (e, t, r, n) {
                        e = +e, t = 0 | t, r = 0 | r, n || L(this, e, t, r, Math.pow(2, 8 * r), 0);
                        var i = 1,
                            o = 0;
                        for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
                        return t + r
                    }, o.prototype.writeUIntBE = function (e, t, r, n) {
                        e = +e, t = 0 | t, r = 0 | r, n || L(this, e, t, r, Math.pow(2, 8 * r), 0);
                        var i = r - 1,
                            o = 1;
                        for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                        return t + r
                    }, o.prototype.writeUInt8 = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                    }, o.prototype.writeUInt16LE = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2
                    }, o.prototype.writeUInt16BE = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2
                    }, o.prototype.writeUInt32LE = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : I(this, e, t, !0), t + 4
                    }, o.prototype.writeUInt32BE = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : I(this, e, t, !1), t + 4
                    }, o.prototype.writeIntLE = function (e, t, r, n) {
                        if (e = +e, t = 0 | t, !n) {
                            var i = Math.pow(2, 8 * r - 1);
                            L(this, e, t, r, i - 1, -i)
                        }
                        var o = 0,
                            a = 1,
                            s = 0 > e ? 1 : 0;
                        for (this[t] = 255 & e; ++o < r && (a *= 256);) this[t + o] = (e / a >> 0) - s & 255;
                        return t + r
                    }, o.prototype.writeIntBE = function (e, t, r, n) {
                        if (e = +e, t = 0 | t, !n) {
                            var i = Math.pow(2, 8 * r - 1);
                            L(this, e, t, r, i - 1, -i)
                        }
                        var o = r - 1,
                            a = 1,
                            s = 0 > e ? 1 : 0;
                        for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) this[t + o] = (e / a >> 0) - s & 255;
                        return t + r
                    }, o.prototype.writeInt8 = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                    }, o.prototype.writeInt16LE = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2
                    }, o.prototype.writeInt16BE = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2
                    }, o.prototype.writeInt32LE = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : I(this, e, t, !0), t + 4
                    }, o.prototype.writeInt32BE = function (e, t, r) {
                        return e = +e, t = 0 | t, r || L(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : I(this, e, t, !1), t + 4
                    }, o.prototype.writeFloatLE = function (e, t, r) {
                        return F(this, e, t, !0, r)
                    }, o.prototype.writeFloatBE = function (e, t, r) {
                        return F(this, e, t, !1, r)
                    }, o.prototype.writeDoubleLE = function (e, t, r) {
                        return D(this, e, t, !0, r)
                    }, o.prototype.writeDoubleBE = function (e, t, r) {
                        return D(this, e, t, !1, r)
                    }, o.prototype.copy = function (e, t, r, n) {
                        if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && r > n && (n = r), n === r) return 0;
                        if (0 === e.length || 0 === this.length) return 0;
                        if (0 > t) throw new RangeError("targetStart out of bounds");
                        if (0 > r || r >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (0 > n) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                        var i, a = n - r;
                        if (this === e && t > r && n > t)
                            for (i = a - 1; i >= 0; i--) e[i + t] = this[i + r];
                        else if (1e3 > a || !o.TYPED_ARRAY_SUPPORT)
                            for (i = 0; a > i; i++) e[i + t] = this[i + r];
                        else e._set(this.subarray(r, r + a), t);
                        return a
                    }, o.prototype.fill = function (e, t, r) {
                        if (e || (e = 0), t || (t = 0), r || (r = this.length), t > r) throw new RangeError("end < start");
                        if (r !== t && 0 !== this.length) {
                            if (0 > t || t >= this.length) throw new RangeError("start out of bounds");
                            if (0 > r || r > this.length) throw new RangeError("end out of bounds");
                            var n;
                            if ("number" == typeof e)
                                for (n = t; r > n; n++) this[n] = e;
                            else {
                                var i = B(e.toString()),
                                    o = i.length;
                                for (n = t; r > n; n++) this[n] = i[n % o]
                            }
                            return this
                        }
                    }, o.prototype.toArrayBuffer = function () {
                        if ("undefined" != typeof Uint8Array) {
                            if (o.TYPED_ARRAY_SUPPORT) return new o(this).buffer;
                            for (var e = new Uint8Array(this.length), t = 0, r = e.length; r > t; t += 1) e[t] = this[t];
                            return e.buffer
                        }
                        throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
                    };
                    var Q = o.prototype;
                    o._augment = function (e) {
                        return e.constructor = o, e._isBuffer = !0, e._set = e.set, e.get = Q.get, e.set = Q.set, e.write = Q.write, e.toString = Q.toString, e.toLocaleString = Q.toString, e.toJSON = Q.toJSON, e.equals = Q.equals, e.compare = Q.compare, e.indexOf = Q.indexOf, e.copy = Q.copy, e.slice = Q.slice, e.readUIntLE = Q.readUIntLE, e.readUIntBE = Q.readUIntBE, e.readUInt8 = Q.readUInt8, e.readUInt16LE = Q.readUInt16LE, e.readUInt16BE = Q.readUInt16BE, e.readUInt32LE = Q.readUInt32LE, e.readUInt32BE = Q.readUInt32BE, e.readIntLE = Q.readIntLE, e.readIntBE = Q.readIntBE, e.readInt8 = Q.readInt8, e.readInt16LE = Q.readInt16LE, e.readInt16BE = Q.readInt16BE, e.readInt32LE = Q.readInt32LE, e.readInt32BE = Q.readInt32BE, e.readFloatLE = Q.readFloatLE, e.readFloatBE = Q.readFloatBE, e.readDoubleLE = Q.readDoubleLE, e.readDoubleBE = Q.readDoubleBE, e.writeUInt8 = Q.writeUInt8, e.writeUIntLE = Q.writeUIntLE, e.writeUIntBE = Q.writeUIntBE, e.writeUInt16LE = Q.writeUInt16LE, e.writeUInt16BE = Q.writeUInt16BE, e.writeUInt32LE = Q.writeUInt32LE, e.writeUInt32BE = Q.writeUInt32BE, e.writeIntLE = Q.writeIntLE, e.writeIntBE = Q.writeIntBE, e.writeInt8 = Q.writeInt8, e.writeInt16LE = Q.writeInt16LE, e.writeInt16BE = Q.writeInt16BE, e.writeInt32LE = Q.writeInt32LE, e.writeInt32BE = Q.writeInt32BE, e.writeFloatLE = Q.writeFloatLE, e.writeFloatBE = Q.writeFloatBE, e.writeDoubleLE = Q.writeDoubleLE, e.writeDoubleBE = Q.writeDoubleBE, e.fill = Q.fill, e.inspect = Q.inspect, e.toArrayBuffer = Q.toArrayBuffer, e
                    };
                    var et = /[^+\/0-9A-Za-z-_]/g
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "base64-js": 28,
                ieee754: 154,
                isarray: 39
            }],
            39: [function (e, t) {
                var r = {}.toString;
                t.exports = Array.isArray || function (e) {
                    return "[object Array]" == r.call(e)
                }
            }, {}],
            40: [function (e, t) {
                e("../../modules/es6.string.iterator"), e("../../modules/es6.array.from"), t.exports = e("../../modules/$.core").Array.from
            }, {
                "../../modules/$.core": 65,
                "../../modules/es6.array.from": 117,
                "../../modules/es6.string.iterator": 129
            }],
            41: [function (e, t) {
                e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.get-iterator")
            }, {
                "../modules/core.get-iterator": 115,
                "../modules/es6.string.iterator": 129,
                "../modules/web.dom.iterable": 133
            }],
            42: [function (e, t) {
                e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.is-iterable")
            }, {
                "../modules/core.is-iterable": 116,
                "../modules/es6.string.iterator": 129,
                "../modules/web.dom.iterable": 133
            }],
            43: [function (e, t) {
                e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), e("../modules/es6.map"), e("../modules/es7.map.to-json"), t.exports = e("../modules/$.core").Map
            }, {
                "../modules/$.core": 65,
                "../modules/es6.map": 119,
                "../modules/es6.object.to-string": 126,
                "../modules/es6.string.iterator": 129,
                "../modules/es7.map.to-json": 131,
                "../modules/web.dom.iterable": 133
            }],
            44: [function (e, t) {
                e("../../modules/es6.math.log2"), t.exports = e("../../modules/$.core").Math.log2
            }, {
                "../../modules/$.core": 65,
                "../../modules/es6.math.log2": 120
            }],
            45: [function (e, t) {
                e("../../modules/es6.object.assign"), t.exports = e("../../modules/$.core").Object.assign
            }, {
                "../../modules/$.core": 65,
                "../../modules/es6.object.assign": 121
            }],
            46: [function (e, t) {
                var r = e("../../modules/$");
                t.exports = function (e, t) {
                    return r.create(e, t)
                }
            }, {
                "../../modules/$": 90
            }],
            47: [function (e, t) {
                var r = e("../../modules/$");
                t.exports = function (e, t) {
                    return r.setDescs(e, t)
                }
            }, {
                "../../modules/$": 90
            }],
            48: [function (e, t) {
                var r = e("../../modules/$");
                t.exports = function (e, t, n) {
                    return r.setDesc(e, t, n)
                }
            }, {
                "../../modules/$": 90
            }],
            49: [function (e, t) {
                e("../../modules/es6.object.freeze"), t.exports = e("../../modules/$.core").Object.freeze
            }, {
                "../../modules/$.core": 65,
                "../../modules/es6.object.freeze": 122
            }],
            50: [function (e, t) {
                var r = e("../../modules/$");
                e("../../modules/es6.object.get-own-property-descriptor"), t.exports = function (e, t) {
                    return r.getDesc(e, t)
                }
            }, {
                "../../modules/$": 90,
                "../../modules/es6.object.get-own-property-descriptor": 123
            }],
            51: [function (e, t) {
                e("../../modules/es6.object.keys"), t.exports = e("../../modules/$.core").Object.keys
            }, {
                "../../modules/$.core": 65,
                "../../modules/es6.object.keys": 124
            }],
            52: [function (e, t) {
                e("../../modules/es6.object.set-prototype-of"), t.exports = e("../../modules/$.core").Object.setPrototypeOf
            }, {
                "../../modules/$.core": 65,
                "../../modules/es6.object.set-prototype-of": 125
            }],
            53: [function (e, t) {
                e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), e("../modules/es6.promise"), t.exports = e("../modules/$.core").Promise
            }, {
                "../modules/$.core": 65,
                "../modules/es6.object.to-string": 126,
                "../modules/es6.promise": 127,
                "../modules/es6.string.iterator": 129,
                "../modules/web.dom.iterable": 133
            }],
            54: [function (e, t) {
                e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), e("../modules/es6.set"), e("../modules/es7.set.to-json"), t.exports = e("../modules/$.core").Set
            }, {
                "../modules/$.core": 65,
                "../modules/es6.object.to-string": 126,
                "../modules/es6.set": 128,
                "../modules/es6.string.iterator": 129,
                "../modules/es7.set.to-json": 132,
                "../modules/web.dom.iterable": 133
            }],
            55: [function (e, t) {
                e("../../modules/es6.symbol"), e("../../modules/es6.object.to-string"), t.exports = e("../../modules/$.core").Symbol
            }, {
                "../../modules/$.core": 65,
                "../../modules/es6.object.to-string": 126,
                "../../modules/es6.symbol": 130
            }],
            56: [function (e, t) {
                e("../../modules/es6.string.iterator"), e("../../modules/web.dom.iterable"), t.exports = e("../../modules/$.wks")("iterator")
            }, {
                "../../modules/$.wks": 113,
                "../../modules/es6.string.iterator": 129,
                "../../modules/web.dom.iterable": 133
            }],
            57: [function (e, t) {
                t.exports = function (e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function!");
                    return e
                }
            }, {}],
            58: [function (e, t) {
                t.exports = function () {}
            }, {}],
            59: [function (e, t) {
                var r = e("./$.is-object");
                t.exports = function (e) {
                    if (!r(e)) throw TypeError(e + " is not an object!");
                    return e
                }
            }, {
                "./$.is-object": 83
            }],
            60: [function (e, t) {
                var r = e("./$.cof"),
                    n = e("./$.wks")("toStringTag"),
                    i = "Arguments" == r(function () {
                        return arguments
                    }());
                t.exports = function (e) {
                    var t, o, a;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (o = (t = Object(e))[n]) ? o : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
                }
            }, {
                "./$.cof": 61,
                "./$.wks": 113
            }],
            61: [function (e, t) {
                var r = {}.toString;
                t.exports = function (e) {
                    return r.call(e).slice(8, -1)
                }
            }, {}],
            62: [function (e, t) {
                "use strict";
                var r = e("./$"),
                    n = e("./$.hide"),
                    i = e("./$.redefine-all"),
                    o = e("./$.ctx"),
                    a = e("./$.strict-new"),
                    s = e("./$.defined"),
                    l = e("./$.for-of"),
                    u = e("./$.iter-define"),
                    c = e("./$.iter-step"),
                    f = e("./$.uid")("id"),
                    h = e("./$.has"),
                    d = e("./$.is-object"),
                    p = e("./$.set-species"),
                    m = e("./$.descriptors"),
                    g = Object.isExtensible || d,
                    v = m ? "_s" : "size",
                    _ = 0,
                    y = function (e, t) {
                        if (!d(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!h(e, f)) {
                            if (!g(e)) return "F";
                            if (!t) return "E";
                            n(e, f, ++_)
                        }
                        return "O" + e[f]
                    },
                    b = function (e, t) {
                        var r, n = y(t);
                        if ("F" !== n) return e._i[n];
                        for (r = e._f; r; r = r.n)
                            if (r.k == t) return r
                    };
                t.exports = {
                    getConstructor: function (e, t, n, u) {
                        var c = e(function (e, i) {
                            a(e, c, t), e._i = r.create(null), e._f = void 0, e._l = void 0, e[v] = 0, void 0 != i && l(i, n, e[u], e)
                        });
                        return i(c.prototype, {
                            clear: function () {
                                for (var e = this, t = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete t[r.i];
                                e._f = e._l = void 0, e[v] = 0
                            },
                            "delete": function (e) {
                                var t = this,
                                    r = b(t, e);
                                if (r) {
                                    var n = r.n,
                                        i = r.p;
                                    delete t._i[r.i], r.r = !0, i && (i.n = n), n && (n.p = i), t._f == r && (t._f = n), t._l == r && (t._l = i), t[v]--
                                }
                                return !!r
                            },
                            forEach: function (e) {
                                for (var t, r = o(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                                    for (r(t.v, t.k, this); t && t.r;) t = t.p
                            },
                            has: function (e) {
                                return !!b(this, e)
                            }
                        }), m && r.setDesc(c.prototype, "size", {
                            get: function () {
                                return s(this[v])
                            }
                        }), c
                    },
                    def: function (e, t, r) {
                        var n, i, o = b(e, t);
                        return o ? o.v = r : (e._l = o = {
                            i: i = y(t, !0),
                            k: t,
                            v: r,
                            p: n = e._l,
                            n: void 0,
                            r: !1
                        }, e._f || (e._f = o), n && (n.n = o), e[v]++, "F" !== i && (e._i[i] = o)), e
                    },
                    getEntry: b,
                    setStrong: function (e, t, r) {
                        u(e, t, function (e, t) {
                            this._t = e, this._k = t, this._l = void 0
                        }, function () {
                            for (var e = this, t = e._k, r = e._l; r && r.r;) r = r.p;
                            return e._t && (e._l = r = r ? r.n : e._t._f) ? "keys" == t ? c(0, r.k) : "values" == t ? c(0, r.v) : c(0, [r.k, r.v]) : (e._t = void 0, c(1))
                        }, r ? "entries" : "values", !r, !0), p(t)
                    }
                }
            }, {
                "./$": 90,
                "./$.ctx": 66,
                "./$.defined": 67,
                "./$.descriptors": 68,
                "./$.for-of": 73,
                "./$.has": 76,
                "./$.hide": 77,
                "./$.is-object": 83,
                "./$.iter-define": 86,
                "./$.iter-step": 88,
                "./$.redefine-all": 97,
                "./$.set-species": 101,
                "./$.strict-new": 105,
                "./$.uid": 112
            }],
            63: [function (e, t) {
                var r = e("./$.for-of"),
                    n = e("./$.classof");
                t.exports = function (e) {
                    return function () {
                        if (n(this) != e) throw TypeError(e + "#toJSON isn't generic");
                        var t = [];
                        return r(this, !1, t.push, t), t
                    }
                }
            }, {
                "./$.classof": 60,
                "./$.for-of": 73
            }],
            64: [function (e, t) {
                "use strict";
                var r = e("./$"),
                    n = e("./$.global"),
                    i = e("./$.export"),
                    o = e("./$.fails"),
                    a = e("./$.hide"),
                    s = e("./$.redefine-all"),
                    l = e("./$.for-of"),
                    u = e("./$.strict-new"),
                    c = e("./$.is-object"),
                    f = e("./$.set-to-string-tag"),
                    h = e("./$.descriptors");
                t.exports = function (e, t, d, p, m, g) {
                    var v = n[e],
                        _ = v,
                        y = m ? "set" : "add",
                        b = _ && _.prototype,
                        x = {};
                    return h && "function" == typeof _ && (g || b.forEach && !o(function () {
                        (new _).entries().next()
                    })) ? (_ = t(function (t, r) {
                        u(t, _, e), t._c = new v, void 0 != r && l(r, m, t[y], t)
                    }), r.each.call("add,clear,delete,forEach,get,has,set,keys,values,entries".split(","), function (e) {
                        var t = "add" == e || "set" == e;
                        e in b && (!g || "clear" != e) && a(_.prototype, e, function (r, n) {
                            if (!t && g && !c(r)) return "get" == e ? void 0 : !1;
                            var i = this._c[e](0 === r ? 0 : r, n);
                            return t ? this : i
                        })
                    }), "size" in b && r.setDesc(_.prototype, "size", {
                        get: function () {
                            return this._c.size
                        }
                    })) : (_ = p.getConstructor(t, e, m, y), s(_.prototype, d)), f(_, e), x[e] = _, i(i.G + i.W + i.F, x), g || p.setStrong(_, e, m), _
                }
            }, {
                "./$": 90,
                "./$.descriptors": 68,
                "./$.export": 71,
                "./$.fails": 72,
                "./$.for-of": 73,
                "./$.global": 75,
                "./$.hide": 77,
                "./$.is-object": 83,
                "./$.redefine-all": 97,
                "./$.set-to-string-tag": 102,
                "./$.strict-new": 105
            }],
            65: [function (e, t) {
                var r = t.exports = {
                    version: "1.2.6"
                };
                "number" == typeof __e && (__e = r)
            }, {}],
            66: [function (e, t) {
                var r = e("./$.a-function");
                t.exports = function (e, t, n) {
                    if (r(e), void 0 === t) return e;
                    switch (n) {
                    case 1:
                        return function (r) {
                            return e.call(t, r)
                        };
                    case 2:
                        return function (r, n) {
                            return e.call(t, r, n)
                        };
                    case 3:
                        return function (r, n, i) {
                            return e.call(t, r, n, i)
                        }
                    }
                    return function () {
                        return e.apply(t, arguments)
                    }
                }
            }, {
                "./$.a-function": 57
            }],
            67: [function (e, t) {
                t.exports = function (e) {
                    if (void 0 == e) throw TypeError("Can't call method on  " + e);
                    return e
                }
            }, {}],
            68: [function (e, t) {
                t.exports = !e("./$.fails")(function () {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function () {
                            return 7
                        }
                    }).a
                })
            }, {
                "./$.fails": 72
            }],
            69: [function (e, t) {
                var r = e("./$.is-object"),
                    n = e("./$.global").document,
                    i = r(n) && r(n.createElement);
                t.exports = function (e) {
                    return i ? n.createElement(e) : {}
                }
            }, {
                "./$.global": 75,
                "./$.is-object": 83
            }],
            70: [function (e, t) {
                var r = e("./$");
                t.exports = function (e) {
                    var t = r.getKeys(e),
                        n = r.getSymbols;
                    if (n)
                        for (var i, o = n(e), a = r.isEnum, s = 0; o.length > s;) a.call(e, i = o[s++]) && t.push(i);
                    return t
                }
            }, {
                "./$": 90
            }],
            71: [function (e, t) {
                var r = e("./$.global"),
                    n = e("./$.core"),
                    i = e("./$.ctx"),
                    o = "prototype",
                    a = function (e, t, s) {
                        var l, u, c, f = e & a.F,
                            h = e & a.G,
                            d = e & a.S,
                            p = e & a.P,
                            m = e & a.B,
                            g = e & a.W,
                            v = h ? n : n[t] || (n[t] = {}),
                            _ = h ? r : d ? r[t] : (r[t] || {})[o];
                        h && (s = t);
                        for (l in s) u = !f && _ && l in _, u && l in v || (c = u ? _[l] : s[l], v[l] = h && "function" != typeof _[l] ? s[l] : m && u ? i(c, r) : g && _[l] == c ? function (e) {
                            var t = function (t) {
                                return this instanceof e ? new e(t) : e(t)
                            };
                            return t[o] = e[o], t
                        }(c) : p && "function" == typeof c ? i(Function.call, c) : c, p && ((v[o] || (v[o] = {}))[l] = c))
                    };
                a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a
            }, {
                "./$.core": 65,
                "./$.ctx": 66,
                "./$.global": 75
            }],
            72: [function (e, t) {
                t.exports = function (e) {
                    try {
                        return !!e()
                    } catch (t) {
                        return !0
                    }
                }
            }, {}],
            73: [function (e, t) {
                var r = e("./$.ctx"),
                    n = e("./$.iter-call"),
                    i = e("./$.is-array-iter"),
                    o = e("./$.an-object"),
                    a = e("./$.to-length"),
                    s = e("./core.get-iterator-method");
                t.exports = function (e, t, l, u) {
                    var c, f, h, d = s(e),
                        p = r(l, u, t ? 2 : 1),
                        m = 0;
                    if ("function" != typeof d) throw TypeError(e + " is not iterable!");
                    if (i(d))
                        for (c = a(e.length); c > m; m++) t ? p(o(f = e[m])[0], f[1]) : p(e[m]);
                    else
                        for (h = d.call(e); !(f = h.next()).done;) n(h, p, f.value, t)
                }
            }, {
                "./$.an-object": 59,
                "./$.ctx": 66,
                "./$.is-array-iter": 81,
                "./$.iter-call": 84,
                "./$.to-length": 110,
                "./core.get-iterator-method": 114
            }],
            74: [function (e, t) {
                var r = e("./$.to-iobject"),
                    n = e("./$").getNames,
                    i = {}.toString,
                    o = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                    a = function (e) {
                        try {
                            return n(e)
                        } catch (t) {
                            return o.slice()
                        }
                    };
                t.exports.get = function (e) {
                    return o && "[object Window]" == i.call(e) ? a(e) : n(r(e))
                }
            }, {
                "./$": 90,
                "./$.to-iobject": 109
            }],
            75: [function (e, t) {
                var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = r)
            }, {}],
            76: [function (e, t) {
                var r = {}.hasOwnProperty;
                t.exports = function (e, t) {
                    return r.call(e, t)
                }
            }, {}],
            77: [function (e, t) {
                var r = e("./$"),
                    n = e("./$.property-desc");
                t.exports = e("./$.descriptors") ? function (e, t, i) {
                    return r.setDesc(e, t, n(1, i))
                } : function (e, t, r) {
                    return e[t] = r, e
                }
            }, {
                "./$": 90,
                "./$.descriptors": 68,
                "./$.property-desc": 96
            }],
            78: [function (e, t) {
                t.exports = e("./$.global").document && document.documentElement
            }, {
                "./$.global": 75
            }],
            79: [function (e, t) {
                t.exports = function (e, t, r) {
                    var n = void 0 === r;
                    switch (t.length) {
                    case 0:
                        return n ? e() : e.call(r);
                    case 1:
                        return n ? e(t[0]) : e.call(r, t[0]);
                    case 2:
                        return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
                    case 3:
                        return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
                    case 4:
                        return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3])
                    }
                    return e.apply(r, t)
                }
            }, {}],
            80: [function (e, t) {
                var r = e("./$.cof");
                t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
                    return "String" == r(e) ? e.split("") : Object(e)
                }
            }, {
                "./$.cof": 61
            }],
            81: [function (e, t) {
                var r = e("./$.iterators"),
                    n = e("./$.wks")("iterator"),
                    i = Array.prototype;
                t.exports = function (e) {
                    return void 0 !== e && (r.Array === e || i[n] === e)
                }
            }, {
                "./$.iterators": 89,
                "./$.wks": 113
            }],
            82: [function (e, t) {
                var r = e("./$.cof");
                t.exports = Array.isArray || function (e) {
                    return "Array" == r(e)
                }
            }, {
                "./$.cof": 61
            }],
            83: [function (e, t) {
                t.exports = function (e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }
            }, {}],
            84: [function (e, t) {
                var r = e("./$.an-object");
                t.exports = function (e, t, n, i) {
                    try {
                        return i ? t(r(n)[0], n[1]) : t(n)
                    } catch (o) {
                        var a = e["return"];
                        throw void 0 !== a && r(a.call(e)), o
                    }
                }
            }, {
                "./$.an-object": 59
            }],
            85: [function (e, t) {
                "use strict";
                var r = e("./$"),
                    n = e("./$.property-desc"),
                    i = e("./$.set-to-string-tag"),
                    o = {};
                e("./$.hide")(o, e("./$.wks")("iterator"), function () {
                    return this
                }), t.exports = function (e, t, a) {
                    e.prototype = r.create(o, {
                        next: n(1, a)
                    }), i(e, t + " Iterator")
                }
            }, {
                "./$": 90,
                "./$.hide": 77,
                "./$.property-desc": 96,
                "./$.set-to-string-tag": 102,
                "./$.wks": 113
            }],
            86: [function (e, t) {
                "use strict";
                var r = e("./$.library"),
                    n = e("./$.export"),
                    i = e("./$.redefine"),
                    o = e("./$.hide"),
                    a = e("./$.has"),
                    s = e("./$.iterators"),
                    l = e("./$.iter-create"),
                    u = e("./$.set-to-string-tag"),
                    c = e("./$").getProto,
                    f = e("./$.wks")("iterator"),
                    h = !([].keys && "next" in [].keys()),
                    d = "@@iterator",
                    p = "keys",
                    m = "values",
                    g = function () {
                        return this
                    };
                t.exports = function (e, t, v, _, y, b, x) {
                    l(v, t, _);
                    var w, A, T = function (e) {
                            if (!h && e in S) return S[e];
                            switch (e) {
                            case p:
                                return function () {
                                    return new v(this, e)
                                };
                            case m:
                                return function () {
                                    return new v(this, e)
                                }
                            }
                            return function () {
                                return new v(this, e)
                            }
                        },
                        k = t + " Iterator",
                        E = y == m,
                        R = !1,
                        S = e.prototype,
                        M = S[f] || S[d] || y && S[y],
                        j = M || T(y);
                    if (M) {
                        var P = c(j.call(new e));
                        u(P, k, !0), !r && a(S, d) && o(P, f, g), E && M.name !== m && (R = !0, j = function () {
                            return M.call(this)
                        })
                    }
                    if (r && !x || !h && !R && S[f] || o(S, f, j), s[t] = j, s[k] = g, y)
                        if (w = {
                                values: E ? j : T(m),
                                keys: b ? j : T(p),
                                entries: E ? T("entries") : j
                            }, x)
                            for (A in w) A in S || i(S, A, w[A]);
                        else n(n.P + n.F * (h || R), t, w);
                    return w
                }
            }, {
                "./$": 90,
                "./$.export": 71,
                "./$.has": 76,
                "./$.hide": 77,
                "./$.iter-create": 85,
                "./$.iterators": 89,
                "./$.library": 92,
                "./$.redefine": 98,
                "./$.set-to-string-tag": 102,
                "./$.wks": 113
            }],
            87: [function (e, t) {
                var r = e("./$.wks")("iterator"),
                    n = !1;
                try {
                    var i = [7][r]();
                    i["return"] = function () {
                        n = !0
                    }, Array.from(i, function () {
                        throw 2
                    })
                } catch (o) {}
                t.exports = function (e, t) {
                    if (!t && !n) return !1;
                    var i = !1;
                    try {
                        var o = [7],
                            a = o[r]();
                        a.next = function () {
                            i = !0
                        }, o[r] = function () {
                            return a
                        }, e(o)
                    } catch (s) {}
                    return i
                }
            }, {
                "./$.wks": 113
            }],
            88: [function (e, t) {
                t.exports = function (e, t) {
                    return {
                        value: t,
                        done: !!e
                    }
                }
            }, {}],
            89: [function (e, t) {
                t.exports = {}
            }, {}],
            90: [function (e, t) {
                var r = Object;
                t.exports = {
                    create: r.create,
                    getProto: r.getPrototypeOf,
                    isEnum: {}.propertyIsEnumerable,
                    getDesc: r.getOwnPropertyDescriptor,
                    setDesc: r.defineProperty,
                    setDescs: r.defineProperties,
                    getKeys: r.keys,
                    getNames: r.getOwnPropertyNames,
                    getSymbols: r.getOwnPropertySymbols,
                    each: [].forEach
                }
            }, {}],
            91: [function (e, t) {
                var r = e("./$"),
                    n = e("./$.to-iobject");
                t.exports = function (e, t) {
                    for (var i, o = n(e), a = r.getKeys(o), s = a.length, l = 0; s > l;)
                        if (o[i = a[l++]] === t) return i
                }
            }, {
                "./$": 90,
                "./$.to-iobject": 109
            }],
            92: [function (e, t) {
                t.exports = !0
            }, {}],
            93: [function (e, t) {
                var r, n, i, o = e("./$.global"),
                    a = e("./$.task").set,
                    s = o.MutationObserver || o.WebKitMutationObserver,
                    l = o.process,
                    u = o.Promise,
                    c = "process" == e("./$.cof")(l),
                    f = function () {
                        var e, t, i;
                        for (c && (e = l.domain) && (l.domain = null, e.exit()); r;) t = r.domain, i = r.fn, t && t.enter(), i(), t && t.exit(), r = r.next;
                        n = void 0, e && e.enter()
                    };
                if (c) i = function () {
                    l.nextTick(f)
                };
                else if (s) {
                    var h = 1,
                        d = document.createTextNode("");
                    new s(f).observe(d, {
                        characterData: !0
                    }), i = function () {
                        d.data = h = -h
                    }
                } else i = u && u.resolve ? function () {
                    u.resolve().then(f)
                } : function () {
                    a.call(o, f)
                };
                t.exports = function (e) {
                    var t = {
                        fn: e,
                        next: void 0,
                        domain: c && l.domain
                    };
                    n && (n.next = t), r || (r = t, i()), n = t
                }
            }, {
                "./$.cof": 61,
                "./$.global": 75,
                "./$.task": 107
            }],
            94: [function (e, t) {
                var r = e("./$"),
                    n = e("./$.to-object"),
                    i = e("./$.iobject");
                t.exports = e("./$.fails")(function () {
                    var e = Object.assign,
                        t = {},
                        r = {},
                        n = Symbol(),
                        i = "abcdefghijklmnopqrst";
                    return t[n] = 7, i.split("").forEach(function (e) {
                        r[e] = e
                    }), 7 != e({}, t)[n] || Object.keys(e({}, r)).join("") != i
                }) ? function (e) {
                    for (var t = n(e), o = arguments, a = o.length, s = 1, l = r.getKeys, u = r.getSymbols, c = r.isEnum; a > s;)
                        for (var f, h = i(o[s++]), d = u ? l(h).concat(u(h)) : l(h), p = d.length, m = 0; p > m;) c.call(h, f = d[m++]) && (t[f] = h[f]);
                    return t
                } : Object.assign
            }, {
                "./$": 90,
                "./$.fails": 72,
                "./$.iobject": 80,
                "./$.to-object": 111
            }],
            95: [function (e, t) {
                var r = e("./$.export"),
                    n = e("./$.core"),
                    i = e("./$.fails");
                t.exports = function (e, t) {
                    var o = (n.Object || {})[e] || Object[e],
                        a = {};
                    a[e] = t(o), r(r.S + r.F * i(function () {
                        o(1)
                    }), "Object", a)
                }
            }, {
                "./$.core": 65,
                "./$.export": 71,
                "./$.fails": 72
            }],
            96: [function (e, t) {
                t.exports = function (e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            }, {}],
            97: [function (e, t) {
                var r = e("./$.redefine");
                t.exports = function (e, t) {
                    for (var n in t) r(e, n, t[n]);
                    return e
                }
            }, {
                "./$.redefine": 98
            }],
            98: [function (e, t) {
                t.exports = e("./$.hide")
            }, {
                "./$.hide": 77
            }],
            99: [function (e, t) {
                t.exports = Object.is || function (e, t) {
                    return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
                }
            }, {}],
            100: [function (e, t) {
                var r = e("./$").getDesc,
                    n = e("./$.is-object"),
                    i = e("./$.an-object"),
                    o = function (e, t) {
                        if (i(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
                    };
                t.exports = {
                    set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, n, i) {
                        try {
                            i = e("./$.ctx")(Function.call, r(Object.prototype, "__proto__").set, 2), i(t, []), n = !(t instanceof Array)
                        } catch (a) {
                            n = !0
                        }
                        return function (e, t) {
                            return o(e, t), n ? e.__proto__ = t : i(e, t), e
                        }
                    }({}, !1) : void 0),
                    check: o
                }
            }, {
                "./$": 90,
                "./$.an-object": 59,
                "./$.ctx": 66,
                "./$.is-object": 83
            }],
            101: [function (e, t) {
                "use strict";
                var r = e("./$.core"),
                    n = e("./$"),
                    i = e("./$.descriptors"),
                    o = e("./$.wks")("species");
                t.exports = function (e) {
                    var t = r[e];
                    i && t && !t[o] && n.setDesc(t, o, {
                        configurable: !0,
                        get: function () {
                            return this
                        }
                    })
                }
            }, {
                "./$": 90,
                "./$.core": 65,
                "./$.descriptors": 68,
                "./$.wks": 113
            }],
            102: [function (e, t) {
                var r = e("./$").setDesc,
                    n = e("./$.has"),
                    i = e("./$.wks")("toStringTag");
                t.exports = function (e, t, o) {
                    e && !n(e = o ? e : e.prototype, i) && r(e, i, {
                        configurable: !0,
                        value: t
                    })
                }
            }, {
                "./$": 90,
                "./$.has": 76,
                "./$.wks": 113
            }],
            103: [function (e, t) {
                var r = e("./$.global"),
                    n = "__core-js_shared__",
                    i = r[n] || (r[n] = {});
                t.exports = function (e) {
                    return i[e] || (i[e] = {})
                }
            }, {
                "./$.global": 75
            }],
            104: [function (e, t) {
                var r = e("./$.an-object"),
                    n = e("./$.a-function"),
                    i = e("./$.wks")("species");
                t.exports = function (e, t) {
                    var o, a = r(e).constructor;
                    return void 0 === a || void 0 == (o = r(a)[i]) ? t : n(o)
                }
            }, {
                "./$.a-function": 57,
                "./$.an-object": 59,
                "./$.wks": 113
            }],
            105: [function (e, t) {
                t.exports = function (e, t, r) {
                    if (!(e instanceof t)) throw TypeError(r + ": use the 'new' operator!");
                    return e
                }
            }, {}],
            106: [function (e, t) {
                var r = e("./$.to-integer"),
                    n = e("./$.defined");
                t.exports = function (e) {
                    return function (t, i) {
                        var o, a, s = String(n(t)),
                            l = r(i),
                            u = s.length;
                        return 0 > l || l >= u ? e ? "" : void 0 : (o = s.charCodeAt(l), 55296 > o || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
                    }
                }
            }, {
                "./$.defined": 67,
                "./$.to-integer": 108
            }],
            107: [function (e, t) {
                var r, n, i, o = e("./$.ctx"),
                    a = e("./$.invoke"),
                    s = e("./$.html"),
                    l = e("./$.dom-create"),
                    u = e("./$.global"),
                    c = u.process,
                    f = u.setImmediate,
                    h = u.clearImmediate,
                    d = u.MessageChannel,
                    p = 0,
                    m = {},
                    g = "onreadystatechange",
                    v = function () {
                        var e = +this;
                        if (m.hasOwnProperty(e)) {
                            var t = m[e];
                            delete m[e], t()
                        }
                    },
                    _ = function (e) {
                        v.call(e.data)
                    };
                f && h || (f = function (e) {
                    for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
                    return m[++p] = function () {
                        a("function" == typeof e ? e : Function(e), t)
                    }, r(p), p
                }, h = function (e) {
                    delete m[e]
                }, "process" == e("./$.cof")(c) ? r = function (e) {
                    c.nextTick(o(v, e, 1))
                } : d ? (n = new d, i = n.port2, n.port1.onmessage = _, r = o(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r = function (e) {
                    u.postMessage(e + "", "*")
                }, u.addEventListener("message", _, !1)) : r = g in l("script") ? function (e) {
                    s.appendChild(l("script"))[g] = function () {
                        s.removeChild(this), v.call(e)
                    }
                } : function (e) {
                    setTimeout(o(v, e, 1), 0)
                }), t.exports = {
                    set: f,
                    clear: h
                }
            }, {
                "./$.cof": 61,
                "./$.ctx": 66,
                "./$.dom-create": 69,
                "./$.global": 75,
                "./$.html": 78,
                "./$.invoke": 79
            }],
            108: [function (e, t) {
                var r = Math.ceil,
                    n = Math.floor;
                t.exports = function (e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e)
                }
            }, {}],
            109: [function (e, t) {
                var r = e("./$.iobject"),
                    n = e("./$.defined");
                t.exports = function (e) {
                    return r(n(e))
                }
            }, {
                "./$.defined": 67,
                "./$.iobject": 80
            }],
            110: [function (e, t) {
                var r = e("./$.to-integer"),
                    n = Math.min;
                t.exports = function (e) {
                    return e > 0 ? n(r(e), 9007199254740991) : 0
                }
            }, {
                "./$.to-integer": 108
            }],
            111: [function (e, t) {
                var r = e("./$.defined");
                t.exports = function (e) {
                    return Object(r(e))
                }
            }, {
                "./$.defined": 67
            }],
            112: [function (e, t) {
                var r = 0,
                    n = Math.random();
                t.exports = function (e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36))
                }
            }, {}],
            113: [function (e, t) {
                var r = e("./$.shared")("wks"),
                    n = e("./$.uid"),
                    i = e("./$.global").Symbol;
                t.exports = function (e) {
                    return r[e] || (r[e] = i && i[e] || (i || n)("Symbol." + e))
                }
            }, {
                "./$.global": 75,
                "./$.shared": 103,
                "./$.uid": 112
            }],
            114: [function (e, t) {
                var r = e("./$.classof"),
                    n = e("./$.wks")("iterator"),
                    i = e("./$.iterators");
                t.exports = e("./$.core").getIteratorMethod = function (e) {
                    return void 0 != e ? e[n] || e["@@iterator"] || i[r(e)] : void 0
                }
            }, {
                "./$.classof": 60,
                "./$.core": 65,
                "./$.iterators": 89,
                "./$.wks": 113
            }],
            115: [function (e, t) {
                var r = e("./$.an-object"),
                    n = e("./core.get-iterator-method");
                t.exports = e("./$.core").getIterator = function (e) {
                    var t = n(e);
                    if ("function" != typeof t) throw TypeError(e + " is not iterable!");
                    return r(t.call(e))
                }
            }, {
                "./$.an-object": 59,
                "./$.core": 65,
                "./core.get-iterator-method": 114
            }],
            116: [function (e, t) {
                var r = e("./$.classof"),
                    n = e("./$.wks")("iterator"),
                    i = e("./$.iterators");
                t.exports = e("./$.core").isIterable = function (e) {
                    var t = Object(e);
                    return void 0 !== t[n] || "@@iterator" in t || i.hasOwnProperty(r(t))
                }
            }, {
                "./$.classof": 60,
                "./$.core": 65,
                "./$.iterators": 89,
                "./$.wks": 113
            }],
            117: [function (e) {
                "use strict";
                var t = e("./$.ctx"),
                    r = e("./$.export"),
                    n = e("./$.to-object"),
                    i = e("./$.iter-call"),
                    o = e("./$.is-array-iter"),
                    a = e("./$.to-length"),
                    s = e("./core.get-iterator-method");
                r(r.S + r.F * !e("./$.iter-detect")(function (e) {
                    Array.from(e)
                }), "Array", {
                    from: function (e) {
                        var r, l, u, c, f = n(e),
                            h = "function" == typeof this ? this : Array,
                            d = arguments,
                            p = d.length,
                            m = p > 1 ? d[1] : void 0,
                            g = void 0 !== m,
                            v = 0,
                            _ = s(f);
                        if (g && (m = t(m, p > 2 ? d[2] : void 0, 2)), void 0 == _ || h == Array && o(_))
                            for (r = a(f.length), l = new h(r); r > v; v++) l[v] = g ? m(f[v], v) : f[v];
                        else
                            for (c = _.call(f), l = new h; !(u = c.next()).done; v++) l[v] = g ? i(c, m, [u.value, v], !0) : u.value;
                        return l.length = v, l
                    }
                })
            }, {
                "./$.ctx": 66,
                "./$.export": 71,
                "./$.is-array-iter": 81,
                "./$.iter-call": 84,
                "./$.iter-detect": 87,
                "./$.to-length": 110,
                "./$.to-object": 111,
                "./core.get-iterator-method": 114
            }],
            118: [function (e, t) {
                "use strict";
                var r = e("./$.add-to-unscopables"),
                    n = e("./$.iter-step"),
                    i = e("./$.iterators"),
                    o = e("./$.to-iobject");
                t.exports = e("./$.iter-define")(Array, "Array", function (e, t) {
                    this._t = o(e), this._i = 0, this._k = t
                }, function () {
                    var e = this._t,
                        t = this._k,
                        r = this._i++;
                    return !e || r >= e.length ? (this._t = void 0, n(1)) : "keys" == t ? n(0, r) : "values" == t ? n(0, e[r]) : n(0, [r, e[r]])
                }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
            }, {
                "./$.add-to-unscopables": 58,
                "./$.iter-define": 86,
                "./$.iter-step": 88,
                "./$.iterators": 89,
                "./$.to-iobject": 109
            }],
            119: [function (e) {
                "use strict";
                var t = e("./$.collection-strong");
                e("./$.collection")("Map", function (e) {
                    return function () {
                        return e(this, arguments.length > 0 ? arguments[0] : void 0)
                    }
                }, {
                    get: function (e) {
                        var r = t.getEntry(this, e);
                        return r && r.v
                    },
                    set: function (e, r) {
                        return t.def(this, 0 === e ? 0 : e, r)
                    }
                }, t, !0)
            }, {
                "./$.collection": 64,
                "./$.collection-strong": 62
            }],
            120: [function (e) {
                var t = e("./$.export");
                t(t.S, "Math", {
                    log2: function (e) {
                        return Math.log(e) / Math.LN2
                    }
                })
            }, {
                "./$.export": 71
            }],
            121: [function (e) {
                var t = e("./$.export");
                t(t.S + t.F, "Object", {
                    assign: e("./$.object-assign")
                })
            }, {
                "./$.export": 71,
                "./$.object-assign": 94
            }],
            122: [function (e) {
                var t = e("./$.is-object");
                e("./$.object-sap")("freeze", function (e) {
                    return function (r) {
                        return e && t(r) ? e(r) : r
                    }
                })
            }, {
                "./$.is-object": 83,
                "./$.object-sap": 95
            }],
            123: [function (e) {
                var t = e("./$.to-iobject");
                e("./$.object-sap")("getOwnPropertyDescriptor", function (e) {
                    return function (r, n) {
                        return e(t(r), n)
                    }
                })
            }, {
                "./$.object-sap": 95,
                "./$.to-iobject": 109
            }],
            124: [function (e) {
                var t = e("./$.to-object");
                e("./$.object-sap")("keys", function (e) {
                    return function (r) {
                        return e(t(r))
                    }
                })
            }, {
                "./$.object-sap": 95,
                "./$.to-object": 111
            }],
            125: [function (e) {
                var t = e("./$.export");
                t(t.S, "Object", {
                    setPrototypeOf: e("./$.set-proto").set
                })
            }, {
                "./$.export": 71,
                "./$.set-proto": 100
            }],
            126: [function (e, t, r) {
                arguments[4][37][0].apply(r, arguments)
            }, {
                dup: 37
            }],
            127: [function (e) {
                "use strict";
                var t, r = e("./$"),
                    n = e("./$.library"),
                    i = e("./$.global"),
                    o = e("./$.ctx"),
                    a = e("./$.classof"),
                    s = e("./$.export"),
                    l = e("./$.is-object"),
                    u = e("./$.an-object"),
                    c = e("./$.a-function"),
                    f = e("./$.strict-new"),
                    h = e("./$.for-of"),
                    d = e("./$.set-proto").set,
                    p = e("./$.same-value"),
                    m = e("./$.wks")("species"),
                    g = e("./$.species-constructor"),
                    v = e("./$.microtask"),
                    _ = "Promise",
                    y = i.process,
                    b = "process" == a(y),
                    x = i[_],
                    w = function (e) {
                        var t = new x(function () {});
                        return e && (t.constructor = Object), x.resolve(t) === t
                    },
                    A = function () {
                        function t(e) {
                            var r = new x(e);
                            return d(r, t.prototype), r
                        }
                        var n = !1;
                        try {
                            if (n = x && x.resolve && w(), d(t, x), t.prototype = r.create(x.prototype, {
                                    constructor: {
                                        value: t
                                    }
                                }), t.resolve(5).then(function () {}) instanceof t || (n = !1), n && e("./$.descriptors")) {
                                var i = !1;
                                x.resolve(r.setDesc({}, "then", {
                                    get: function () {
                                        i = !0
                                    }
                                })), n = i
                            }
                        } catch (o) {
                            n = !1
                        }
                        return n
                    }(),
                    T = function (e, r) {
                        return n && e === x && r === t ? !0 : p(e, r)
                    },
                    k = function (e) {
                        var t = u(e)[m];
                        return void 0 != t ? t : e
                    },
                    E = function (e) {
                        var t;
                        return l(e) && "function" == typeof (t = e.then) ? t : !1
                    },
                    R = function (e) {
                        var t, r;
                        this.promise = new e(function (e, n) {
                            if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
                            t = e, r = n
                        }), this.resolve = c(t), this.reject = c(r)
                    },
                    S = function (e) {
                        try {
                            e()
                        } catch (t) {
                            return {
                                error: t
                            }
                        }
                    },
                    M = function (e, t) {
                        if (!e.n) {
                            e.n = !0;
                            var r = e.c;
                            v(function () {
                                for (var n = e.v, o = 1 == e.s, a = 0, s = function (t) {
                                        var r, i, a = o ? t.ok : t.fail,
                                            s = t.resolve,
                                            l = t.reject;
                                        try {
                                            a ? (o || (e.h = !0), r = a === !0 ? n : a(n), r === t.promise ? l(TypeError("Promise-chain cycle")) : (i = E(r)) ? i.call(r, s, l) : s(r)) : l(n)
                                        } catch (u) {
                                            l(u)
                                        }
                                    }; r.length > a;) s(r[a++]);
                                r.length = 0, e.n = !1, t && setTimeout(function () {
                                    var t, r, o = e.p;
                                    j(o) && (b ? y.emit("unhandledRejection", n, o) : (t = i.onunhandledrejection) ? t({
                                        promise: o,
                                        reason: n
                                    }) : (r = i.console) && r.error && r.error("Unhandled promise rejection", n)), e.a = void 0
                                }, 1)
                            })
                        }
                    },
                    j = function (e) {
                        var t, r = e._d,
                            n = r.a || r.c,
                            i = 0;
                        if (r.h) return !1;
                        for (; n.length > i;)
                            if (t = n[i++], t.fail || !j(t.promise)) return !1;
                        return !0
                    },
                    P = function (e) {
                        var t = this;
                        t.d || (t.d = !0, t = t.r || t, t.v = e, t.s = 2, t.a = t.c.slice(), M(t, !0))
                    },
                    N = function (e) {
                        var t, r = this;
                        if (!r.d) {
                            r.d = !0, r = r.r || r;
                            try {
                                if (r.p === e) throw TypeError("Promise can't be resolved itself");
                                (t = E(e)) ? v(function () {
                                    var n = {
                                        r: r,
                                        d: !1
                                    };
                                    try {
                                        t.call(e, o(N, n, 1), o(P, n, 1))
                                    } catch (i) {
                                        P.call(n, i)
                                    }
                                }): (r.v = e, r.s = 1, M(r, !1))
                            } catch (n) {
                                P.call({
                                    r: r,
                                    d: !1
                                }, n)
                            }
                        }
                    };
                A || (x = function (e) {
                    c(e);
                    var t = this._d = {
                        p: f(this, x, _),
                        c: [],
                        a: void 0,
                        s: 0,
                        d: !1,
                        v: void 0,
                        h: !1,
                        n: !1
                    };
                    try {
                        e(o(N, t, 1), o(P, t, 1))
                    } catch (r) {
                        P.call(t, r)
                    }
                }, e("./$.redefine-all")(x.prototype, {
                    then: function (e, t) {
                        var r = new R(g(this, x)),
                            n = r.promise,
                            i = this._d;
                        return r.ok = "function" == typeof e ? e : !0, r.fail = "function" == typeof t && t, i.c.push(r), i.a && i.a.push(r), i.s && M(i, !1), n
                    },
                    "catch": function (e) {
                        return this.then(void 0, e)
                    }
                })), s(s.G + s.W + s.F * !A, {
                    Promise: x
                }), e("./$.set-to-string-tag")(x, _), e("./$.set-species")(_), t = e("./$.core")[_], s(s.S + s.F * !A, _, {
                    reject: function (e) {
                        var t = new R(this),
                            r = t.reject;
                        return r(e), t.promise
                    }
                }), s(s.S + s.F * (!A || w(!0)), _, {
                    resolve: function (e) {
                        if (e instanceof x && T(e.constructor, this)) return e;
                        var t = new R(this),
                            r = t.resolve;
                        return r(e), t.promise
                    }
                }), s(s.S + s.F * !(A && e("./$.iter-detect")(function (e) {
                    x.all(e)["catch"](function () {})
                })), _, {
                    all: function (e) {
                        var t = k(this),
                            n = new R(t),
                            i = n.resolve,
                            o = n.reject,
                            a = [],
                            s = S(function () {
                                h(e, !1, a.push, a);
                                var n = a.length,
                                    s = Array(n);
                                n ? r.each.call(a, function (e, r) {
                                    var a = !1;
                                    t.resolve(e).then(function (e) {
                                        a || (a = !0, s[r] = e, --n || i(s))
                                    }, o)
                                }) : i(s)
                            });
                        return s && o(s.error), n.promise
                    },
                    race: function (e) {
                        var t = k(this),
                            r = new R(t),
                            n = r.reject,
                            i = S(function () {
                                h(e, !1, function (e) {
                                    t.resolve(e).then(r.resolve, n)
                                })
                            });
                        return i && n(i.error), r.promise
                    }
                })
            }, {
                "./$": 90,
                "./$.a-function": 57,
                "./$.an-object": 59,
                "./$.classof": 60,
                "./$.core": 65,
                "./$.ctx": 66,
                "./$.descriptors": 68,
                "./$.export": 71,
                "./$.for-of": 73,
                "./$.global": 75,
                "./$.is-object": 83,
                "./$.iter-detect": 87,
                "./$.library": 92,
                "./$.microtask": 93,
                "./$.redefine-all": 97,
                "./$.same-value": 99,
                "./$.set-proto": 100,
                "./$.set-species": 101,
                "./$.set-to-string-tag": 102,
                "./$.species-constructor": 104,
                "./$.strict-new": 105,
                "./$.wks": 113
            }],
            128: [function (e) {
                "use strict";
                var t = e("./$.collection-strong");
                e("./$.collection")("Set", function (e) {
                    return function () {
                        return e(this, arguments.length > 0 ? arguments[0] : void 0)
                    }
                }, {
                    add: function (e) {
                        return t.def(this, e = 0 === e ? 0 : e, e)
                    }
                }, t)
            }, {
                "./$.collection": 64,
                "./$.collection-strong": 62
            }],
            129: [function (e) {
                "use strict";
                var t = e("./$.string-at")(!0);
                e("./$.iter-define")(String, "String", function (e) {
                    this._t = String(e), this._i = 0
                }, function () {
                    var e, r = this._t,
                        n = this._i;
                    return n >= r.length ? {
                        value: void 0,
                        done: !0
                    } : (e = t(r, n), this._i += e.length, {
                        value: e,
                        done: !1
                    })
                })
            }, {
                "./$.iter-define": 86,
                "./$.string-at": 106
            }],
            130: [function (e) {
                "use strict";
                var t = e("./$"),
                    r = e("./$.global"),
                    n = e("./$.has"),
                    i = e("./$.descriptors"),
                    o = e("./$.export"),
                    a = e("./$.redefine"),
                    s = e("./$.fails"),
                    l = e("./$.shared"),
                    u = e("./$.set-to-string-tag"),
                    c = e("./$.uid"),
                    f = e("./$.wks"),
                    h = e("./$.keyof"),
                    d = e("./$.get-names"),
                    p = e("./$.enum-keys"),
                    m = e("./$.is-array"),
                    g = e("./$.an-object"),
                    v = e("./$.to-iobject"),
                    _ = e("./$.property-desc"),
                    y = t.getDesc,
                    b = t.setDesc,
                    x = t.create,
                    w = d.get,
                    A = r.Symbol,
                    T = r.JSON,
                    k = T && T.stringify,
                    E = !1,
                    R = f("_hidden"),
                    S = t.isEnum,
                    M = l("symbol-registry"),
                    j = l("symbols"),
                    P = "function" == typeof A,
                    N = Object.prototype,
                    z = i && s(function () {
                        return 7 != x(b({}, "a", {
                            get: function () {
                                return b(this, "a", {
                                    value: 7
                                }).a
                            }
                        })).a
                    }) ? function (e, t, r) {
                        var n = y(N, t);
                        n && delete N[t], b(e, t, r), n && e !== N && b(N, t, n)
                    } : b,
                    L = function (e) {
                        var t = j[e] = x(A.prototype);
                        return t._k = e, i && E && z(N, e, {
                            configurable: !0,
                            set: function (t) {
                                n(this, R) && n(this[R], e) && (this[R][e] = !1), z(this, e, _(1, t))
                            }
                        }), t
                    },
                    O = function (e) {
                        return "symbol" == typeof e
                    },
                    I = function (e, t, r) {
                        return r && n(j, t) ? (r.enumerable ? (n(e, R) && e[R][t] && (e[R][t] = !1), r = x(r, {
                            enumerable: _(0, !1)
                        })) : (n(e, R) || b(e, R, _(1, {})), e[R][t] = !0), z(e, t, r)) : b(e, t, r)
                    },
                    U = function (e, t) {
                        g(e);
                        for (var r, n = p(t = v(t)), i = 0, o = n.length; o > i;) I(e, r = n[i++], t[r]);
                        return e
                    },
                    F = function (e, t) {
                        return void 0 === t ? x(e) : U(x(e), t)
                    },
                    D = function (e) {
                        var t = S.call(this, e);
                        return t || !n(this, e) || !n(j, e) || n(this, R) && this[R][e] ? t : !0
                    },
                    C = function (e, t) {
                        var r = y(e = v(e), t);
                        return !r || !n(j, t) || n(e, R) && e[R][t] || (r.enumerable = !0), r
                    },
                    $ = function (e) {
                        for (var t, r = w(v(e)), i = [], o = 0; r.length > o;) n(j, t = r[o++]) || t == R || i.push(t);
                        return i
                    },
                    G = function (e) {
                        for (var t, r = w(v(e)), i = [], o = 0; r.length > o;) n(j, t = r[o++]) && i.push(j[t]);
                        return i
                    },
                    B = function (e) {
                        if (void 0 !== e && !O(e)) {
                            for (var t, r, n = [e], i = 1, o = arguments; o.length > i;) n.push(o[i++]);
                            return t = n[1], "function" == typeof t && (r = t), (r || !m(t)) && (t = function (e, t) {
                                return r && (t = r.call(this, e, t)), O(t) ? void 0 : t
                            }), n[1] = t, k.apply(T, n)
                        }
                    },
                    q = s(function () {
                        var e = A();
                        return "[null]" != k([e]) || "{}" != k({
                            a: e
                        }) || "{}" != k(Object(e))
                    });
                P || (A = function () {
                    if (O(this)) throw TypeError("Symbol is not a constructor");
                    return L(c(arguments.length > 0 ? arguments[0] : void 0))
                }, a(A.prototype, "toString", function () {
                    return this._k
                }), O = function (e) {
                    return e instanceof A
                }, t.create = F, t.isEnum = D, t.getDesc = C, t.setDesc = I, t.setDescs = U, t.getNames = d.get = $, t.getSymbols = G, i && !e("./$.library") && a(N, "propertyIsEnumerable", D, !0));
                var V = {
                    "for": function (e) {
                        return n(M, e += "") ? M[e] : M[e] = A(e)
                    },
                    keyFor: function (e) {
                        return h(M, e)
                    },
                    useSetter: function () {
                        E = !0
                    },
                    useSimple: function () {
                        E = !1
                    }
                };
                t.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function (e) {
                    var t = f(e);
                    V[e] = P ? t : L(t)
                }), E = !0, o(o.G + o.W, {
                    Symbol: A
                }), o(o.S, "Symbol", V), o(o.S + o.F * !P, "Object", {
                    create: F,
                    defineProperty: I,
                    defineProperties: U,
                    getOwnPropertyDescriptor: C,
                    getOwnPropertyNames: $,
                    getOwnPropertySymbols: G
                }), T && o(o.S + o.F * (!P || q), "JSON", {
                    stringify: B
                }), u(A, "Symbol"), u(Math, "Math", !0), u(r.JSON, "JSON", !0)
            }, {
                "./$": 90,
                "./$.an-object": 59,
                "./$.descriptors": 68,
                "./$.enum-keys": 70,
                "./$.export": 71,
                "./$.fails": 72,
                "./$.get-names": 74,
                "./$.global": 75,
                "./$.has": 76,
                "./$.is-array": 82,
                "./$.keyof": 91,
                "./$.library": 92,
                "./$.property-desc": 96,
                "./$.redefine": 98,
                "./$.set-to-string-tag": 102,
                "./$.shared": 103,
                "./$.to-iobject": 109,
                "./$.uid": 112,
                "./$.wks": 113
            }],
            131: [function (e) {
                var t = e("./$.export");
                t(t.P, "Map", {
                    toJSON: e("./$.collection-to-json")("Map")
                })
            }, {
                "./$.collection-to-json": 63,
                "./$.export": 71
            }],
            132: [function (e) {
                var t = e("./$.export");
                t(t.P, "Set", {
                    toJSON: e("./$.collection-to-json")("Set")
                })
            }, {
                "./$.collection-to-json": 63,
                "./$.export": 71
            }],
            133: [function (e) {
                e("./es6.array.iterator");
                var t = e("./$.iterators");
                t.NodeList = t.HTMLCollection = t.Array
            }, {
                "./$.iterators": 89,
                "./es6.array.iterator": 118
            }],
            134: [function (e, t, r) {
                function n(e) {
                    return e = Math.round(e), 0 > e ? 0 : e > 255 ? 255 : e
                }

                function i(e) {
                    return 0 > e ? 0 : e > 1 ? 1 : e
                }

                function o(e) {
                    return n("%" === e[e.length - 1] ? parseFloat(e) / 100 * 255 : parseInt(e))
                }

                function a(e) {
                    return i("%" === e[e.length - 1] ? parseFloat(e) / 100 : parseFloat(e))
                }

                function s(e, t, r) {
                    return 0 > r ? r += 1 : r > 1 && (r -= 1), 1 > 6 * r ? e + (t - e) * r * 6 : 1 > 2 * r ? t : 2 > 3 * r ? e + (t - e) * (2 / 3 - r) * 6 : e
                }

                function l(e) {
                    var t = e.replace(/ /g, "").toLowerCase();
                    if (t in u) return u[t].slice();
                    if ("#" === t[0]) {
                        if (4 === t.length) {
                            var r = parseInt(t.substr(1), 16);
                            return r >= 0 && 4095 >= r ? [(3840 & r) >> 4 | (3840 & r) >> 8, 240 & r | (240 & r) >> 4, 15 & r | (15 & r) << 4, 1] : null
                        }
                        if (7 === t.length) {
                            var r = parseInt(t.substr(1), 16);
                            return r >= 0 && 16777215 >= r ? [(16711680 & r) >> 16, (65280 & r) >> 8, 255 & r, 1] : null
                        }
                        return null
                    }
                    var i = t.indexOf("("),
                        l = t.indexOf(")");
                    if (-1 !== i && l + 1 === t.length) {
                        var c = t.substr(0, i),
                            f = t.substr(i + 1, l - (i + 1)).split(","),
                            h = 1;
                        switch (c) {
                        case "rgba":
                            if (4 !== f.length) return null;
                            h = a(f.pop());
                        case "rgb":
                            return 3 !== f.length ? null : [o(f[0]), o(f[1]), o(f[2]), h];
                        case "hsla":
                            if (4 !== f.length) return null;
                            h = a(f.pop());
                        case "hsl":
                            if (3 !== f.length) return null;
                            var d = (parseFloat(f[0]) % 360 + 360) % 360 / 360,
                                p = a(f[1]),
                                m = a(f[2]),
                                g = .5 >= m ? m * (p + 1) : m + p - m * p,
                                v = 2 * m - g;
                            return [n(255 * s(v, g, d + 1 / 3)), n(255 * s(v, g, d)), n(255 * s(v, g, d - 1 / 3)), h];
                        default:
                            return null
                        }
                    }
                    return null
                }
                var u = {
                    transparent: [0, 0, 0, 0],
                    aliceblue: [240, 248, 255, 1],
                    antiquewhite: [250, 235, 215, 1],
                    aqua: [0, 255, 255, 1],
                    aquamarine: [127, 255, 212, 1],
                    azure: [240, 255, 255, 1],
                    beige: [245, 245, 220, 1],
                    bisque: [255, 228, 196, 1],
                    black: [0, 0, 0, 1],
                    blanchedalmond: [255, 235, 205, 1],
                    blue: [0, 0, 255, 1],
                    blueviolet: [138, 43, 226, 1],
                    brown: [165, 42, 42, 1],
                    burlywood: [222, 184, 135, 1],
                    cadetblue: [95, 158, 160, 1],
                    chartreuse: [127, 255, 0, 1],
                    chocolate: [210, 105, 30, 1],
                    coral: [255, 127, 80, 1],
                    cornflowerblue: [100, 149, 237, 1],
                    cornsilk: [255, 248, 220, 1],
                    crimson: [220, 20, 60, 1],
                    cyan: [0, 255, 255, 1],
                    darkblue: [0, 0, 139, 1],
                    darkcyan: [0, 139, 139, 1],
                    darkgoldenrod: [184, 134, 11, 1],
                    darkgray: [169, 169, 169, 1],
                    darkgreen: [0, 100, 0, 1],
                    darkgrey: [169, 169, 169, 1],
                    darkkhaki: [189, 183, 107, 1],
                    darkmagenta: [139, 0, 139, 1],
                    darkolivegreen: [85, 107, 47, 1],
                    darkorange: [255, 140, 0, 1],
                    darkorchid: [153, 50, 204, 1],
                    darkred: [139, 0, 0, 1],
                    darksalmon: [233, 150, 122, 1],
                    darkseagreen: [143, 188, 143, 1],
                    darkslateblue: [72, 61, 139, 1],
                    darkslategray: [47, 79, 79, 1],
                    darkslategrey: [47, 79, 79, 1],
                    darkturquoise: [0, 206, 209, 1],
                    darkviolet: [148, 0, 211, 1],
                    deeppink: [255, 20, 147, 1],
                    deepskyblue: [0, 191, 255, 1],
                    dimgray: [105, 105, 105, 1],
                    dimgrey: [105, 105, 105, 1],
                    dodgerblue: [30, 144, 255, 1],
                    firebrick: [178, 34, 34, 1],
                    floralwhite: [255, 250, 240, 1],
                    forestgreen: [34, 139, 34, 1],
                    fuchsia: [255, 0, 255, 1],
                    gainsboro: [220, 220, 220, 1],
                    ghostwhite: [248, 248, 255, 1],
                    gold: [255, 215, 0, 1],
                    goldenrod: [218, 165, 32, 1],
                    gray: [128, 128, 128, 1],
                    green: [0, 128, 0, 1],
                    greenyellow: [173, 255, 47, 1],
                    grey: [128, 128, 128, 1],
                    honeydew: [240, 255, 240, 1],
                    hotpink: [255, 105, 180, 1],
                    indianred: [205, 92, 92, 1],
                    indigo: [75, 0, 130, 1],
                    ivory: [255, 255, 240, 1],
                    khaki: [240, 230, 140, 1],
                    lavender: [230, 230, 250, 1],
                    lavenderblush: [255, 240, 245, 1],
                    lawngreen: [124, 252, 0, 1],
                    lemonchiffon: [255, 250, 205, 1],
                    lightblue: [173, 216, 230, 1],
                    lightcoral: [240, 128, 128, 1],
                    lightcyan: [224, 255, 255, 1],
                    lightgoldenrodyellow: [250, 250, 210, 1],
                    lightgray: [211, 211, 211, 1],
                    lightgreen: [144, 238, 144, 1],
                    lightgrey: [211, 211, 211, 1],
                    lightpink: [255, 182, 193, 1],
                    lightsalmon: [255, 160, 122, 1],
                    lightseagreen: [32, 178, 170, 1],
                    lightskyblue: [135, 206, 250, 1],
                    lightslategray: [119, 136, 153, 1],
                    lightslategrey: [119, 136, 153, 1],
                    lightsteelblue: [176, 196, 222, 1],
                    lightyellow: [255, 255, 224, 1],
                    lime: [0, 255, 0, 1],
                    limegreen: [50, 205, 50, 1],
                    linen: [250, 240, 230, 1],
                    magenta: [255, 0, 255, 1],
                    maroon: [128, 0, 0, 1],
                    mediumaquamarine: [102, 205, 170, 1],
                    mediumblue: [0, 0, 205, 1],
                    mediumorchid: [186, 85, 211, 1],
                    mediumpurple: [147, 112, 219, 1],
                    mediumseagreen: [60, 179, 113, 1],
                    mediumslateblue: [123, 104, 238, 1],
                    mediumspringgreen: [0, 250, 154, 1],
                    mediumturquoise: [72, 209, 204, 1],
                    mediumvioletred: [199, 21, 133, 1],
                    midnightblue: [25, 25, 112, 1],
                    mintcream: [245, 255, 250, 1],
                    mistyrose: [255, 228, 225, 1],
                    moccasin: [255, 228, 181, 1],
                    navajowhite: [255, 222, 173, 1],
                    navy: [0, 0, 128, 1],
                    oldlace: [253, 245, 230, 1],
                    olive: [128, 128, 0, 1],
                    olivedrab: [107, 142, 35, 1],
                    orange: [255, 165, 0, 1],
                    orangered: [255, 69, 0, 1],
                    orchid: [218, 112, 214, 1],
                    palegoldenrod: [238, 232, 170, 1],
                    palegreen: [152, 251, 152, 1],
                    paleturquoise: [175, 238, 238, 1],
                    palevioletred: [219, 112, 147, 1],
                    papayawhip: [255, 239, 213, 1],
                    peachpuff: [255, 218, 185, 1],
                    peru: [205, 133, 63, 1],
                    pink: [255, 192, 203, 1],
                    plum: [221, 160, 221, 1],
                    powderblue: [176, 224, 230, 1],
                    purple: [128, 0, 128, 1],
                    red: [255, 0, 0, 1],
                    rosybrown: [188, 143, 143, 1],
                    royalblue: [65, 105, 225, 1],
                    saddlebrown: [139, 69, 19, 1],
                    salmon: [250, 128, 114, 1],
                    sandybrown: [244, 164, 96, 1],
                    seagreen: [46, 139, 87, 1],
                    seashell: [255, 245, 238, 1],
                    sienna: [160, 82, 45, 1],
                    silver: [192, 192, 192, 1],
                    skyblue: [135, 206, 235, 1],
                    slateblue: [106, 90, 205, 1],
                    slategray: [112, 128, 144, 1],
                    slategrey: [112, 128, 144, 1],
                    snow: [255, 250, 250, 1],
                    springgreen: [0, 255, 127, 1],
                    steelblue: [70, 130, 180, 1],
                    tan: [210, 180, 140, 1],
                    teal: [0, 128, 128, 1],
                    thistle: [216, 191, 216, 1],
                    tomato: [255, 99, 71, 1],
                    turquoise: [64, 224, 208, 1],
                    violet: [238, 130, 238, 1],
                    wheat: [245, 222, 179, 1],
                    white: [255, 255, 255, 1],
                    whitesmoke: [245, 245, 245, 1],
                    yellow: [255, 255, 0, 1],
                    yellowgreen: [154, 205, 50, 1]
                };
                try {
                    r.parseCSSColor = l
                } catch (c) {}
            }, {}],
            135: [function (e, t) {
                "use strict";

                function r(e, t, n) {
                    var i = 0 | e[n];
                    if (0 >= i) return [];
                    var o, a = new Array(i);
                    if (n === e.length - 1)
                        for (o = 0; i > o; ++o) a[o] = t;
                    else
                        for (o = 0; i > o; ++o) a[o] = r(e, t, n + 1);
                    return a
                }

                function n(e, t) {
                    var r, n;
                    for (r = new Array(e), n = 0; e > n; ++n) r[n] = t;
                    return r
                }

                function i(e, t) {
                    switch ("undefined" == typeof t && (t = 0), typeof e) {
                    case "number":
                        if (e > 0) return n(0 | e, t);
                        break;
                    case "object":
                        if ("number" == typeof e.length) return r(e, t, 0)
                    }
                    return []
                }
                t.exports = i
            }, {}],
            136: [function (e, t) {
                "use strict";

                function r(e, t, r) {
                    r = r || 2;
                    var i = t && t.length,
                        a = i ? t[0] * r : e.length,
                        s = n(e, 0, a, r, !0),
                        l = [];
                    if (!s) return l;
                    var u, f, h, d, p, m, g;
                    if (i && (s = c(e, t, s, r)), e.length > 80 * r) {
                        u = h = e[0], f = d = e[1];
                        for (var v = r; a > v; v += r) p = e[v], m = e[v + 1], u > p && (u = p), f > m && (f = m), p > h && (h = p), m > d && (d = m);
                        g = Math.max(h - u, d - f)
                    }
                    return o(s, l, r, u, f, g), l
                }

                function n(e, t, r, n, i) {
                    var o, a;
                    if (i === j(e, t, r, n) > 0)
                        for (o = t; r > o; o += n) a = R(o, e[o], e[o + 1], a);
                    else
                        for (o = r - n; o >= t; o -= n) a = R(o, e[o], e[o + 1], a);
                    return a && x(a, a.next) && (S(a), a = a.next), a
                }

                function i(e, t) {
                    if (!e) return e;
                    t || (t = e);
                    var r, n = e;
                    do
                        if (r = !1, n.steiner || !x(n, n.next) && 0 !== b(n.prev, n, n.next)) n = n.next;
                        else {
                            if (S(n), n = t = n.prev, n === n.next) return null;
                            r = !0
                        }
                    while (r || n !== t);
                    return t
                }

                function o(e, t, r, n, c, f, h) {
                    if (e) {
                        !h && f && p(e, n, c, f);
                        for (var d, m, g = e; e.prev !== e.next;)
                            if (d = e.prev, m = e.next, f ? s(e, n, c, f) : a(e)) t.push(d.i / r), t.push(e.i / r), t.push(m.i / r), S(e), e = m.next, g = m.next;
                            else if (e = m, e === g) {
                            h ? 1 === h ? (e = l(e, t, r), o(e, t, r, n, c, f, 2)) : 2 === h && u(e, t, r, n, c, f) : o(i(e), t, r, n, c, f, 1);
                            break
                        }
                    }
                }

                function a(e) {
                    var t = e.prev,
                        r = e,
                        n = e.next;
                    if (b(t, r, n) >= 0) return !1;
                    for (var i = e.next.next; i !== e.prev;) {
                        if (_(t.x, t.y, r.x, r.y, n.x, n.y, i.x, i.y) && b(i.prev, i, i.next) >= 0) return !1;
                        i = i.next
                    }
                    return !0
                }

                function s(e, t, r, n) {
                    var i = e.prev,
                        o = e,
                        a = e.next;
                    if (b(i, o, a) >= 0) return !1;
                    for (var s = i.x < o.x ? i.x < a.x ? i.x : a.x : o.x < a.x ? o.x : a.x, l = i.y < o.y ? i.y < a.y ? i.y : a.y : o.y < a.y ? o.y : a.y, u = i.x > o.x ? i.x > a.x ? i.x : a.x : o.x > a.x ? o.x : a.x, c = i.y > o.y ? i.y > a.y ? i.y : a.y : o.y > a.y ? o.y : a.y, f = g(s, l, t, r, n), h = g(u, c, t, r, n), d = e.nextZ; d && d.z <= h;) {
                        if (d !== e.prev && d !== e.next && _(i.x, i.y, o.x, o.y, a.x, a.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
                        d = d.nextZ
                    }
                    for (d = e.prevZ; d && d.z >= f;) {
                        if (d !== e.prev && d !== e.next && _(i.x, i.y, o.x, o.y, a.x, a.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
                        d = d.prevZ
                    }
                    return !0
                }

                function l(e, t, r) {
                    var n = e;
                    do {
                        var i = n.prev,
                            o = n.next.next;
                        !x(i, o) && w(i, n, n.next, o) && T(i, o) && T(o, i) && (t.push(i.i / r), t.push(n.i / r), t.push(o.i / r), S(n), S(n.next), n = e = o), n = n.next
                    } while (n !== e);
                    return n
                }

                function u(e, t, r, n, a, s) {
                    var l = e;
                    do {
                        for (var u = l.next.next; u !== l.prev;) {
                            if (l.i !== u.i && y(l, u)) {
                                var c = E(l, u);
                                return l = i(l, l.next), c = i(c, c.next), o(l, t, r, n, a, s), void o(c, t, r, n, a, s)
                            }
                            u = u.next
                        }
                        l = l.next
                    } while (l !== e)
                }

                function c(e, t, r, o) {
                    var a, s, l, u, c, d = [];
                    for (a = 0, s = t.length; s > a; a++) l = t[a] * o, u = s - 1 > a ? t[a + 1] * o : e.length, c = n(e, l, u, o, !1), c === c.next && (c.steiner = !0), d.push(v(c));
                    for (d.sort(f), a = 0; a < d.length; a++) h(d[a], r), r = i(r, r.next);
                    return r
                }

                function f(e, t) {
                    return e.x - t.x
                }

                function h(e, t) {
                    if (t = d(e, t)) {
                        var r = E(t, e);
                        i(r, r.next)
                    }
                }

                function d(e, t) {
                    var r, n = t,
                        i = e.x,
                        o = e.y,
                        a = -1 / 0;
                    do {
                        if (o <= n.y && o >= n.next.y) {
                            var s = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                            if (i >= s && s > a) {
                                if (a = s, s === i) {
                                    if (o === n.y) return n;
                                    if (o === n.next.y) return n.next
                                }
                                r = n.x < n.next.x ? n : n.next
                            }
                        }
                        n = n.next
                    } while (n !== t);
                    if (!r) return null;
                    if (i === a) return r.prev;
                    var l, u = r,
                        c = r.x,
                        f = r.y,
                        h = 1 / 0;
                    for (n = r.next; n !== u;) i >= n.x && n.x >= c && _(f > o ? i : a, o, c, f, f > o ? a : i, o, n.x, n.y) && (l = Math.abs(o - n.y) / (i - n.x), (h > l || l === h && n.x > r.x) && T(n, e) && (r = n, h = l)), n = n.next;
                    return r
                }

                function p(e, t, r, n) {
                    var i = e;
                    do null === i.z && (i.z = g(i.x, i.y, t, r, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== e);
                    i.prevZ.nextZ = null, i.prevZ = null, m(i)
                }

                function m(e) {
                    var t, r, n, i, o, a, s, l, u = 1;
                    do {
                        for (r = e, e = null, o = null, a = 0; r;) {
                            for (a++, n = r, s = 0, t = 0; u > t && (s++, n = n.nextZ, n); t++);
                            for (l = u; s > 0 || l > 0 && n;) 0 === s ? (i = n, n = n.nextZ, l--) : 0 !== l && n ? r.z <= n.z ? (i = r, r = r.nextZ, s--) : (i = n, n = n.nextZ, l--) : (i = r, r = r.nextZ, s--), o ? o.nextZ = i : e = i, i.prevZ = o, o = i;
                            r = n
                        }
                        o.nextZ = null, u *= 2
                    } while (a > 1);
                    return e
                }

                function g(e, t, r, n, i) {
                    return e = 32767 * (e - r) / i, t = 32767 * (t - n) / i, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e | t << 1
                }

                function v(e) {
                    var t = e,
                        r = e;
                    do t.x < r.x && (r = t), t = t.next; while (t !== e);
                    return r
                }

                function _(e, t, r, n, i, o, a, s) {
                    return (i - a) * (t - s) - (e - a) * (o - s) >= 0 && (e - a) * (n - s) - (r - a) * (t - s) >= 0 && (r - a) * (o - s) - (i - a) * (n - s) >= 0
                }

                function y(e, t) {
                    return e.next.i !== t.i && e.prev.i !== t.i && !A(e, t) && T(e, t) && T(t, e) && k(e, t)
                }

                function b(e, t, r) {
                    return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y)
                }

                function x(e, t) {
                    return e.x === t.x && e.y === t.y
                }

                function w(e, t, r, n) {
                    return x(e, t) && x(r, n) || x(e, n) && x(r, t) ? !0 : b(e, t, r) > 0 != b(e, t, n) > 0 && b(r, n, e) > 0 != b(r, n, t) > 0
                }

                function A(e, t) {
                    var r = e;
                    do {
                        if (r.i !== e.i && r.next.i !== e.i && r.i !== t.i && r.next.i !== t.i && w(r, r.next, e, t)) return !0;
                        r = r.next
                    } while (r !== e);
                    return !1
                }

                function T(e, t) {
                    return b(e.prev, e, e.next) < 0 ? b(e, t, e.next) >= 0 && b(e, e.prev, t) >= 0 : b(e, t, e.prev) < 0 || b(e, e.next, t) < 0
                }

                function k(e, t) {
                    var r = e,
                        n = !1,
                        i = (e.x + t.x) / 2,
                        o = (e.y + t.y) / 2;
                    do r.y > o != r.next.y > o && i < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (n = !n), r = r.next; while (r !== e);
                    return n
                }

                function E(e, t) {
                    var r = new M(e.i, e.x, e.y),
                        n = new M(t.i, t.x, t.y),
                        i = e.next,
                        o = t.prev;
                    return e.next = t, t.prev = e, r.next = i, i.prev = r, n.next = r, r.prev = n, o.next = n, n.prev = o, n
                }

                function R(e, t, r, n) {
                    var i = new M(e, t, r);
                    return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i
                }

                function S(e) {
                    e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
                }

                function M(e, t, r) {
                    this.i = e, this.x = t, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
                }

                function j(e, t, r, n) {
                    for (var i = 0, o = t, a = r - n; r > o; o += n) i += (e[a] - e[o]) * (e[o + 1] + e[a + 1]), a = o;
                    return i
                }
                t.exports = r, r.deviation = function (e, t, r, n) {
                    var i = t && t.length,
                        o = i ? t[0] * r : e.length,
                        a = Math.abs(j(e, 0, o, r));
                    if (i)
                        for (var s = 0, l = t.length; l > s; s++) {
                            var u = t[s] * r,
                                c = l - 1 > s ? t[s + 1] * r : e.length;
                            a -= Math.abs(j(e, u, c, r))
                        }
                    var f = 0;
                    for (s = 0; s < n.length; s += 3) {
                        var h = n[s] * r,
                            d = n[s + 1] * r,
                            p = n[s + 2] * r;
                        f += Math.abs((e[h] - e[p]) * (e[d + 1] - e[h + 1]) - (e[h] - e[d]) * (e[p + 1] - e[h + 1]))
                    }
                    return 0 === a && 0 === f ? 0 : Math.abs((f - a) / a)
                }, r.flatten = function (e) {
                    for (var t = e[0][0].length, r = {
                            vertices: [],
                            holes: [],
                            dimensions: t
                        }, n = 0, i = 0; i < e.length; i++) {
                        for (var o = 0; o < e[i].length; o++)
                            for (var a = 0; t > a; a++) r.vertices.push(e[i][o][a]);
                        i > 0 && (n += e[i - 1].length, r.holes.push(n))
                    }
                    return r
                }
            }, {}],
            137: [function (e, t) {
                ! function () {
                    function e(e, t) {
                        c ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t)
                    }

                    function r(e) {
                        document.body ? e() : c ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function () {
                            "interactive" != document.readyState && "complete" != document.readyState || e()
                        })
                    }

                    function n(e) {
                        this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(e)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
                    }

                    function i(e, t) {
                        e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + t + ";"
                    }

                    function o(e) {
                        var t = e.a.offsetWidth,
                            r = t + 100;
                        return e.f.style.width = r + "px", e.c.scrollLeft = r, e.b.scrollLeft = e.b.scrollWidth + 100, e.g !== t ? (e.g = t, !0) : !1
                    }

                    function a(t, r) {
                        function n() {
                            var e = i;
                            o(e) && null !== e.a.parentNode && r(e.g)
                        }
                        var i = t;
                        e(t.b, n), e(t.c, n), o(t)
                    }

                    function s(e, t) {
                        var r = t || {};
                        this.family = e, this.style = r.style || "normal", this.weight = r.weight || "normal", this.stretch = r.stretch || "normal"
                    }

                    function l() {
                        if (null === h) {
                            var e = document.createElement("div");
                            try {
                                e.style.font = "condensed 100px sans-serif"
                            } catch (t) {}
                            h = "" !== e.style.font
                        }
                        return h
                    }

                    function u(e, t) {
                        return [e.style, e.weight, l() ? e.stretch : "", "100px", t].join(" ")
                    }
                    var c = !!document.addEventListener,
                        f = null,
                        h = null,
                        d = !!window.FontFace;
                    s.prototype.load = function (e, t) {
                        var o = this,
                            s = e || "BESbswy",
                            l = t || 3e3,
                            c = (new Date).getTime();
                        return new Promise(function (e, t) {
                            if (d) {
                                var h = new Promise(function (e, t) {
                                        function r() {
                                            (new Date).getTime() - c >= l ? t() : document.fonts.load(u(o, o.family), s).then(function (t) {
                                                1 <= t.length ? e() : setTimeout(r, 25)
                                            }, function () {
                                                t()
                                            })
                                        }
                                        r()
                                    }),
                                    p = new Promise(function (e, t) {
                                        setTimeout(t, l)
                                    });
                                Promise.race([p, h]).then(function () {
                                    e(o)
                                }, function () {
                                    t(o)
                                })
                            } else r(function () {
                                function r() {
                                    var t;
                                    (t = -1 != g && -1 != v || -1 != g && -1 != _ || -1 != v && -1 != _) && ((t = g != v && g != _ && v != _) || (null === f && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), f = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))), t = f && (g == y && v == y && _ == y || g == b && v == b && _ == b || g == x && v == x && _ == x)), t = !t), t && (null !== w.parentNode && w.parentNode.removeChild(w), clearTimeout(A), e(o))
                                }

                                function h() {
                                    if ((new Date).getTime() - c >= l) null !== w.parentNode && w.parentNode.removeChild(w), t(o);
                                    else {
                                        var e = document.hidden;
                                        (!0 === e || void 0 === e) && (g = d.a.offsetWidth, v = p.a.offsetWidth, _ = m.a.offsetWidth, r()), A = setTimeout(h, 50)
                                    }
                                }
                                var d = new n(s),
                                    p = new n(s),
                                    m = new n(s),
                                    g = -1,
                                    v = -1,
                                    _ = -1,
                                    y = -1,
                                    b = -1,
                                    x = -1,
                                    w = document.createElement("div"),
                                    A = 0;
                                w.dir = "ltr", i(d, u(o, "sans-serif")), i(p, u(o, "serif")), i(m, u(o, "monospace")), w.appendChild(d.a), w.appendChild(p.a), w.appendChild(m.a), document.body.appendChild(w), y = d.a.offsetWidth, b = p.a.offsetWidth, x = m.a.offsetWidth, h(), a(d, function (e) {
                                    g = e, r()
                                }), i(d, u(o, '"' + o.family + '",sans-serif')), a(p, function (e) {
                                    v = e, r()
                                }), i(p, u(o, '"' + o.family + '",serif')), a(m, function (e) {
                                    _ = e, r()
                                }), i(m, u(o, '"' + o.family + '",monospace'))
                            })
                        })
                    }, window.FontFaceObserver = s, window.FontFaceObserver.prototype.check = window.FontFaceObserver.prototype.load = s.prototype.load, "undefined" != typeof t && (t.exports = window.FontFaceObserver)
                }()
            }, {}],
            138: [function (e, t) {
                "use strict";

                function r(e, t, r, o, a, s, l, u) {
                    if (r /= t, o /= t, l >= r && o >= u) return e;
                    if (l > o || r > u) return null;
                    for (var c = [], f = 0; f < e.length; f++) {
                        var h, d, p = e[f],
                            m = p.geometry,
                            g = p.type;
                        if (h = p.min[a], d = p.max[a], h >= r && o >= d) c.push(p);
                        else if (!(h > o || r > d)) {
                            var v = 1 === g ? n(m, r, o, a) : i(m, r, o, a, s, 3 === g);
                            v.length && c.push({
                                geometry: v,
                                type: g,
                                tags: e[f].tags || null,
                                min: p.min,
                                max: p.max
                            })
                        }
                    }
                    return c.length ? c : null
                }

                function n(e, t, r, n) {
                    for (var i = [], o = 0; o < e.length; o++) {
                        var a = e[o],
                            s = a[n];
                        s >= t && r >= s && i.push(a)
                    }
                    return i
                }

                function i(e, t, r, n, i, a) {
                    for (var s = [], l = 0; l < e.length; l++) {
                        var u, c, f, h = 0,
                            d = 0,
                            p = null,
                            m = e[l],
                            g = m.area,
                            v = m.dist,
                            _ = m.length,
                            y = [];
                        for (c = 0; _ - 1 > c; c++) u = p || m[c], p = m[c + 1], h = d || u[n], d = p[n], t > h ? d > r ? (y.push(i(u, p, t), i(u, p, r)), a || (y = o(s, y, g, v))) : d >= t && y.push(i(u, p, t)) : h > r ? t > d ? (y.push(i(u, p, r), i(u, p, t)), a || (y = o(s, y, g, v))) : r >= d && y.push(i(u, p, r)) : (y.push(u), t > d ? (y.push(i(u, p, t)), a || (y = o(s, y, g, v))) : d > r && (y.push(i(u, p, r)), a || (y = o(s, y, g, v))));
                        u = m[_ - 1], h = u[n], h >= t && r >= h && y.push(u), f = y[y.length - 1], a && f && (y[0][0] !== f[0] || y[0][1] !== f[1]) && y.push(y[0]), o(s, y, g, v)
                    }
                    return s
                }

                function o(e, t, r, n) {
                    return t.length && (t.area = r, t.dist = n, e.push(t)), []
                }
                t.exports = r
            }, {}],
            139: [function (e, t) {
                "use strict";

                function r(e, t) {
                    var r = [];
                    if ("FeatureCollection" === e.type)
                        for (var i = 0; i < e.features.length; i++) n(r, e.features[i], t);
                    else "Feature" === e.type ? n(r, e, t) : n(r, {
                        geometry: e
                    }, t);
                    return r
                }

                function n(e, t, r) {
                    var s, l, u, c = t.geometry,
                        f = c.type,
                        h = c.coordinates,
                        d = t.properties;
                    if ("Point" === f) e.push(i(d, 1, [a(h)]));
                    else if ("MultiPoint" === f) e.push(i(d, 1, o(h)));
                    else if ("LineString" === f) e.push(i(d, 2, [o(h, r)]));
                    else if ("MultiLineString" === f || "Polygon" === f) {
                        for (u = [], s = 0; s < h.length; s++) u.push(o(h[s], r));
                        e.push(i(d, "Polygon" === f ? 3 : 2, u))
                    } else if ("MultiPolygon" === f) {
                        for (u = [], s = 0; s < h.length; s++)
                            for (l = 0; l < h[s].length; l++) u.push(o(h[s][l], r));
                        e.push(i(d, 3, u))
                    } else {
                        if ("GeometryCollection" !== f) throw new Error("Input data is not a valid GeoJSON object.");
                        for (s = 0; s < c.geometries.length; s++) n(e, {
                            geometry: c.geometries[s],
                            properties: d
                        }, r)
                    }
                }

                function i(e, t, r) {
                    var n = {
                        geometry: r,
                        type: t,
                        tags: e || null,
                        min: [2, 1],
                        max: [-1, 0]
                    };
                    return l(n), n
                }

                function o(e, t) {
                    for (var r = [], n = 0; n < e.length; n++) r.push(a(e[n]));
                    return t && (c(r, t), s(r)), r
                }

                function a(e) {
                    var t = Math.sin(e[1] * Math.PI / 180),
                        r = e[0] / 360 + .5,
                        n = .5 - .25 * Math.log((1 + t) / (1 - t)) / Math.PI;
                    return n = -1 > n ? -1 : n > 1 ? 1 : n, [r, n, 0]
                }

                function s(e) {
                    for (var t, r, n = 0, i = 0, o = 0; o < e.length - 1; o++) t = r || e[o], r = e[o + 1], n += t[0] * r[1] - r[0] * t[1], i += Math.abs(r[0] - t[0]) + Math.abs(r[1] - t[1]);
                    e.area = Math.abs(n / 2), e.dist = i
                }

                function l(e) {
                    var t = e.geometry,
                        r = e.min,
                        n = e.max;
                    if (1 === e.type) u(r, n, t);
                    else
                        for (var i = 0; i < t.length; i++) u(r, n, t[i]);
                    return e
                }

                function u(e, t, r) {
                    for (var n, i = 0; i < r.length; i++) n = r[i], e[0] = Math.min(n[0], e[0]), t[0] = Math.max(n[0], t[0]), e[1] = Math.min(n[1], e[1]), t[1] = Math.max(n[1], t[1])
                }
                t.exports = r;
                var c = e("./simplify")
            }, {
                "./simplify": 141
            }],
            140: [function (e, t) {
                "use strict";

                function r(e, t) {
                    return new n(e, t)
                }

                function n(e, t) {
                    t = this.options = u(Object.create(this.options), t);
                    var r = t.debug;
                    r && console.time("preprocess data");
                    var n = 1 << t.maxZoom,
                        i = f(e, t.tolerance / (n * t.extent));
                    this.tiles = {}, this.tileCoords = [], r && (console.timeEnd("preprocess data"), console.log("index: maxZoom: %d, maxPoints: %d", t.indexMaxZoom, t.indexMaxPoints), console.time("generate tiles"), this.stats = {}, this.total = 0), i = d(i, t.buffer / t.extent, s), i.length && this.splitTile(i, 0, 0, 0), r && (i.length && console.log("features: %d, points: %d", this.tiles[0].numFeatures, this.tiles[0].numPoints), console.timeEnd("generate tiles"), console.log("tiles generated:", this.total, JSON.stringify(this.stats)))
                }

                function i(e, t) {
                    if (e.transformed) return e;
                    var r, n, i, a = e.z2,
                        s = e.x,
                        l = e.y;
                    for (r = 0; r < e.features.length; r++) {
                        var u = e.features[r],
                            c = u.geometry,
                            f = u.type;
                        if (1 === f)
                            for (n = 0; n < c.length; n++) c[n] = o(c[n], t, a, s, l);
                        else
                            for (n = 0; n < c.length; n++) {
                                var h = c[n];
                                for (i = 0; i < h.length; i++) h[i] = o(h[i], t, a, s, l)
                            }
                    }
                    return e.transformed = !0, e
                }

                function o(e, t, r, n, i) {
                    var o = Math.round(t * (e[0] * r - n)),
                        a = Math.round(t * (e[1] * r - i));
                    return [o, a]
                }

                function a(e, t, r) {
                    return 32 * ((1 << e) * r + t) + e
                }

                function s(e, t, r) {
                    return [r, (r - e[0]) * (t[1] - e[1]) / (t[0] - e[0]) + e[1], 1]
                }

                function l(e, t, r) {
                    return [(r - e[1]) * (t[0] - e[0]) / (t[1] - e[1]) + e[0], r, 1]
                }

                function u(e, t) {
                    for (var r in t) e[r] = t[r];
                    return e
                }

                function c(e, t, r) {
                    var n = e.source;
                    if (1 !== n.length) return !1;
                    var i = n[0];
                    if (3 !== i.type || i.geometry.length > 1) return !1;
                    var a = i.geometry[0].length;
                    if (5 !== a) return !1;
                    for (var s = 0; a > s; s++) {
                        var l = o(i.geometry[0][s], t, e.z2, e.x, e.y);
                        if (l[0] !== -r && l[0] !== t + r || l[1] !== -r && l[1] !== t + r) return !1
                    }
                    return !0
                }
                t.exports = r;
                var f = e("./convert"),
                    h = e("./clip"),
                    d = e("./wrap"),
                    p = e("./tile");
                n.prototype.options = {
                    maxZoom: 14,
                    indexMaxZoom: 5,
                    indexMaxPoints: 1e5,
                    solidChildren: !1,
                    tolerance: 3,
                    extent: 4096,
                    buffer: 64,
                    debug: 0
                }, n.prototype.splitTile = function (e, t, r, n, i, o, u) {
                    for (var f = [e, t, r, n], d = this.options, m = d.debug; f.length;) {
                        n = f.pop(), r = f.pop(), t = f.pop(), e = f.pop();
                        var g = 1 << t,
                            v = a(t, r, n),
                            _ = this.tiles[v],
                            y = t === d.maxZoom ? 0 : d.tolerance / (g * d.extent);
                        if (!_ && (m > 1 && console.time("creation"), _ = this.tiles[v] = p(e, g, r, n, y, t === d.maxZoom), this.tileCoords.push({
                                z: t,
                                x: r,
                                y: n
                            }), m)) {
                            m > 1 && (console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)", t, r, n, _.numFeatures, _.numPoints, _.numSimplified), console.timeEnd("creation"));
                            var b = "z" + t;
                            this.stats[b] = (this.stats[b] || 0) + 1, this.total++
                        }
                        if (_.source = e, d.solidChildren || !c(_, d.extent, d.buffer)) {
                            if (i) {
                                if (t === d.maxZoom || t === i) continue;
                                var x = 1 << i - t;
                                if (r !== Math.floor(o / x) || n !== Math.floor(u / x)) continue
                            } else if (t === d.indexMaxZoom || _.numPoints <= d.indexMaxPoints) continue;
                            _.source = null, m > 1 && console.time("clipping");
                            var w, A, T, k, E, R, S = .5 * d.buffer / d.extent,
                                M = .5 - S,
                                j = .5 + S,
                                P = 1 + S;
                            w = A = T = k = null, E = h(e, g, r - S, r + j, 0, s, _.min[0], _.max[0]), R = h(e, g, r + M, r + P, 0, s, _.min[0], _.max[0]), E && (w = h(E, g, n - S, n + j, 1, l, _.min[1], _.max[1]), A = h(E, g, n + M, n + P, 1, l, _.min[1], _.max[1])), R && (T = h(R, g, n - S, n + j, 1, l, _.min[1], _.max[1]), k = h(R, g, n + M, n + P, 1, l, _.min[1], _.max[1])), m > 1 && console.timeEnd("clipping"), w && f.push(w, t + 1, 2 * r, 2 * n), A && f.push(A, t + 1, 2 * r, 2 * n + 1), T && f.push(T, t + 1, 2 * r + 1, 2 * n), k && f.push(k, t + 1, 2 * r + 1, 2 * n + 1)
                        }
                    }
                }, n.prototype.getTile = function (e, t, r) {
                    var n = this.options,
                        o = n.extent,
                        s = n.debug,
                        l = 1 << e;
                    t = (t % l + l) % l;
                    var u = a(e, t, r);
                    if (this.tiles[u]) return i(this.tiles[u], o);
                    s > 1 && console.log("drilling down to z%d-%d-%d", e, t, r);
                    for (var f, h = e, d = t, p = r; !f && h > 0;) h--, d = Math.floor(d / 2), p = Math.floor(p / 2), f = this.tiles[a(h, d, p)];
                    if (!f) return null;
                    if (s > 1 && console.log("found parent tile z%d-%d-%d", h, d, p), f.source) {
                        if (c(f, o, n.buffer)) return i(f, o);
                        s > 1 && console.time("drilling down"), this.splitTile(f.source, h, d, p, e, t, r), s > 1 && console.timeEnd("drilling down")
                    }
                    return this.tiles[u] ? i(this.tiles[u], o) : null
                }
            }, {
                "./clip": 138,
                "./convert": 139,
                "./tile": 142,
                "./wrap": 143
            }],
            141: [function (e, t) {
                "use strict";

                function r(e, t) {
                    var r, i, o, a, s = t * t,
                        l = e.length,
                        u = 0,
                        c = l - 1,
                        f = [];
                    for (e[u][2] = 1, e[c][2] = 1; c;) {
                        for (i = 0, r = u + 1; c > r; r++) o = n(e[r], e[u], e[c]), o > i && (a = r, i = o);
                        i > s ? (e[a][2] = i, f.push(u), f.push(a), u = a) : (c = f.pop(), u = f.pop())
                    }
                }

                function n(e, t, r) {
                    var n = t[0],
                        i = t[1],
                        o = r[0],
                        a = r[1],
                        s = e[0],
                        l = e[1],
                        u = o - n,
                        c = a - i;
                    if (0 !== u || 0 !== c) {
                        var f = ((s - n) * u + (l - i) * c) / (u * u + c * c);
                        f > 1 ? (n = o, i = a) : f > 0 && (n += u * f, i += c * f)
                    }
                    return u = s - n, c = l - i, u * u + c * c
                }
                t.exports = r
            }, {}],
            142: [function (e, t) {
                "use strict";

                function r(e, t, r, i, o, a) {
                    for (var s = {
                            features: [],
                            numPoints: 0,
                            numSimplified: 0,
                            numFeatures: 0,
                            source: null,
                            x: r,
                            y: i,
                            z2: t,
                            transformed: !1,
                            min: [2, 1],
                            max: [-1, 0]
                        }, l = 0; l < e.length; l++) {
                        s.numFeatures++, n(s, e[l], o, a);
                        var u = e[l].min,
                            c = e[l].max;
                        u[0] < s.min[0] && (s.min[0] = u[0]), u[1] < s.min[1] && (s.min[1] = u[1]), c[0] > s.max[0] && (s.max[0] = c[0]), c[1] > s.max[1] && (s.max[1] = c[1])
                    }
                    return s
                }

                function n(e, t, r, n) {
                    var i, o, a, s, l = t.geometry,
                        u = t.type,
                        c = [],
                        f = r * r;
                    if (1 === u)
                        for (i = 0; i < l.length; i++) c.push(l[i]), e.numPoints++, e.numSimplified++;
                    else
                        for (i = 0; i < l.length; i++)
                            if (a = l[i], n || !(2 === u && a.dist < r || 3 === u && a.area < f)) {
                                var h = [];
                                for (o = 0; o < a.length; o++) s = a[o], (n || s[2] > f) && (h.push(s), e.numSimplified++), e.numPoints++;
                                c.push(h)
                            } else e.numPoints += a.length;
                    c.length && e.features.push({
                        geometry: c,
                        type: u,
                        tags: t.tags || null
                    })
                }
                t.exports = r
            }, {}],
            143: [function (e, t) {
                "use strict";

                function r(e, t, r) {
                    var i = e,
                        a = o(e, 1, -1 - t, t, 0, r, -1, 2),
                        s = o(e, 1, 1 - t, 2 + t, 0, r, -1, 2);
                    return (a || s) && (i = o(e, 1, -t, 1 + t, 0, r, -1, 2), a && (i = n(a, 1).concat(i)), s && (i = i.concat(n(s, -1)))), i
                }

                function n(e, t) {
                    for (var r = [], n = 0; n < e.length; n++) {
                        var o, a = e[n],
                            s = a.type;
                        if (1 === s) o = i(a.geometry, t);
                        else {
                            o = [];
                            for (var l = 0; l < a.geometry.length; l++) o.push(i(a.geometry[l], t))
                        }
                        r.push({
                            geometry: o,
                            type: s,
                            tags: a.tags,
                            min: [a.min[0] + t, a.min[1]],
                            max: [a.max[0] + t, a.max[1]]
                        })
                    }
                    return r
                }

                function i(e, t) {
                    var r = [];
                    r.area = e.area, r.dist = e.dist;
                    for (var n = 0; n < e.length; n++) r.push([e[n][0] + t, e[n][1], e[n][2]]);
                    return r
                }
                var o = e("./clip");
                t.exports = r
            }, {
                "./clip": 138
            }],
            144: [function (e, t) {
                function r(e, t) {
                    var r = t[0],
                        n = t[1],
                        i = t[2],
                        o = t[3],
                        a = t[4],
                        s = t[5],
                        l = t[6],
                        u = t[7],
                        c = t[8],
                        f = c * a - s * u,
                        h = -c * o + s * l,
                        d = u * o - a * l,
                        p = r * f + n * h + i * d;
                    return p ? (p = 1 / p, e[0] = f * p, e[1] = (-c * n + i * u) * p, e[2] = (s * n - i * a) * p, e[3] = h * p, e[4] = (c * r - i * l) * p, e[5] = (-s * r + i * o) * p, e[6] = d * p, e[7] = (-u * r + n * l) * p, e[8] = (a * r - n * o) * p, e) : null
                }
                t.exports = r
            }, {}],
            145: [function (e, t) {
                function r(e, t) {
                    var r = t[0],
                        n = t[1],
                        i = t[2],
                        o = t[3],
                        a = t[4],
                        s = t[5],
                        l = t[6],
                        u = t[7],
                        c = t[8],
                        f = t[9],
                        h = t[10],
                        d = t[11],
                        p = t[12],
                        m = t[13],
                        g = t[14],
                        v = t[15],
                        _ = r * s - n * a,
                        y = r * l - i * a,
                        b = r * u - o * a,
                        x = n * l - i * s,
                        w = n * u - o * s,
                        A = i * u - o * l,
                        T = c * m - f * p,
                        k = c * g - h * p,
                        E = c * v - d * p,
                        R = f * g - h * m,
                        S = f * v - d * m,
                        M = h * v - d * g,
                        j = _ * M - y * S + b * R + x * E - w * k + A * T;
                    return j ? (j = 1 / j, e[0] = (s * M - l * S + u * R) * j, e[1] = (l * E - a * M - u * k) * j, e[2] = (a * S - s * E + u * T) * j, e[3] = (i * S - n * M - o * R) * j, e[4] = (r * M - i * E + o * k) * j, e[5] = (n * E - r * S - o * T) * j, e[6] = (m * A - g * w + v * x) * j, e[7] = (g * b - p * A - v * y) * j, e[8] = (p * w - m * b + v * _) * j, e) : null
                }
                t.exports = r
            }, {}],
            146: [function (e, t) {
                function r(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                }
                t.exports = r
            }, {}],
            147: [function (e, t) {
                function r(e) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                }
                t.exports = r
            }, {}],
            148: [function (e, t) {
                function r(e, t, r, i) {
                    var o, a, s, l, u, c, f, h, d, p, m = t[0],
                        g = t[1],
                        v = t[2],
                        _ = i[0],
                        y = i[1],
                        b = i[2],
                        x = r[0],
                        w = r[1],
                        A = r[2];
                    return Math.abs(m - x) < 1e-6 && Math.abs(g - w) < 1e-6 && Math.abs(v - A) < 1e-6 ? n(e) : (f = m - x, h = g - w, d = v - A, p = 1 / Math.sqrt(f * f + h * h + d * d), f *= p, h *= p, d *= p, o = y * d - b * h, a = b * f - _ * d, s = _ * h - y * f, p = Math.sqrt(o * o + a * a + s * s), p ? (p = 1 / p, o *= p, a *= p, s *= p) : (o = 0, a = 0, s = 0), l = h * s - d * a, u = d * o - f * s, c = f * a - h * o, p = Math.sqrt(l * l + u * u + c * c), p ? (p = 1 / p, l *= p, u *= p, c *= p) : (l = 0, u = 0, c = 0), e[0] = o, e[1] = l, e[2] = f, e[3] = 0, e[4] = a, e[5] = u, e[6] = h, e[7] = 0, e[8] = s, e[9] = c, e[10] = d, e[11] = 0, e[12] = -(o * m + a * g + s * v), e[13] = -(l * m + u * g + c * v), e[14] = -(f * m + h * g + d * v), e[15] = 1, e)
                }
                var n = e("./identity");
                t.exports = r
            }, {
                "./identity": 147
            }],
            149: [function (e, t) {
                function r(e, t, r) {
                    var n = t[0],
                        i = t[1],
                        o = t[2],
                        a = t[3],
                        s = t[4],
                        l = t[5],
                        u = t[6],
                        c = t[7],
                        f = t[8],
                        h = t[9],
                        d = t[10],
                        p = t[11],
                        m = t[12],
                        g = t[13],
                        v = t[14],
                        _ = t[15],
                        y = r[0],
                        b = r[1],
                        x = r[2],
                        w = r[3];
                    return e[0] = y * n + b * s + x * f + w * m, e[1] = y * i + b * l + x * h + w * g, e[2] = y * o + b * u + x * d + w * v, e[3] = y * a + b * c + x * p + w * _, y = r[4], b = r[5], x = r[6], w = r[7], e[4] = y * n + b * s + x * f + w * m, e[5] = y * i + b * l + x * h + w * g, e[6] = y * o + b * u + x * d + w * v, e[7] = y * a + b * c + x * p + w * _, y = r[8], b = r[9], x = r[10], w = r[11], e[8] = y * n + b * s + x * f + w * m, e[9] = y * i + b * l + x * h + w * g, e[10] = y * o + b * u + x * d + w * v, e[11] = y * a + b * c + x * p + w * _, y = r[12], b = r[13], x = r[14], w = r[15], e[12] = y * n + b * s + x * f + w * m, e[13] = y * i + b * l + x * h + w * g, e[14] = y * o + b * u + x * d + w * v, e[15] = y * a + b * c + x * p + w * _, e
                }
                t.exports = r
            }, {}],
            150: [function (e, t) {
                function r(e, t, r, n, i) {
                    var o = 1 / Math.tan(t / 2),
                        a = 1 / (n - i);
                    return e[0] = o / r, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = o, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (i + n) * a, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * i * n * a, e[15] = 0, e
                }
                t.exports = r
            }, {}],
            151: [function (e, t) {
                function r(e, t, r) {
                    var n = r[0],
                        i = r[1],
                        o = r[2];
                    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * o, e[9] = t[9] * o, e[10] = t[10] * o, e[11] = t[11] * o, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                }
                t.exports = r
            }, {}],
            152: [function (e, t) {
                function r(e, t, r) {
                    var n, i, o, a, s, l, u, c, f, h, d, p, m = r[0],
                        g = r[1],
                        v = r[2];
                    return t === e ? (e[12] = t[0] * m + t[4] * g + t[8] * v + t[12], e[13] = t[1] * m + t[5] * g + t[9] * v + t[13], e[14] = t[2] * m + t[6] * g + t[10] * v + t[14], e[15] = t[3] * m + t[7] * g + t[11] * v + t[15]) : (n = t[0], i = t[1], o = t[2], a = t[3], s = t[4], l = t[5], u = t[6], c = t[7], f = t[8], h = t[9], d = t[10], p = t[11], e[0] = n, e[1] = i, e[2] = o, e[3] = a, e[4] = s, e[5] = l, e[6] = u, e[7] = c, e[8] = f, e[9] = h, e[10] = d, e[11] = p, e[12] = n * m + s * g + f * v + t[12], e[13] = i * m + l * g + h * v + t[13], e[14] = o * m + u * g + d * v + t[14], e[15] = a * m + c * g + p * v + t[15]), e
                }
                t.exports = r
            }, {}],
            153: [function (e, t) {
                function r(e) {
                    e = String(e);
                    for (var t, r = []; t = e.match(/ERROR\:([^\n]+)/);) {
                        e = e.slice(t.index + 1);
                        var n = t[1].trim(),
                            i = n.split(":"),
                            o = i.slice(2).join(":").trim(),
                            a = parseInt(i[0], 10),
                            n = parseInt(i[1], 10);
                        r.push({
                            message: o,
                            file: a,
                            line: n
                        })
                    }
                    return r
                }
                t.exports = r
            }, {}],
            154: [function (e, t, r) {
                r.read = function (e, t, r, n, i) {
                    var o, a, s = 8 * i - n - 1,
                        l = (1 << s) - 1,
                        u = l >> 1,
                        c = -7,
                        f = r ? i - 1 : 0,
                        h = r ? -1 : 1,
                        d = e[t + f];
                    for (f += h, o = d & (1 << -c) - 1, d >>= -c, c += s; c > 0; o = 256 * o + e[t + f], f += h, c -= 8);
                    for (a = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; a = 256 * a + e[t + f], f += h, c -= 8);
                    if (0 === o) o = 1 - u;
                    else {
                        if (o === l) return a ? 0 / 0 : 1 / 0 * (d ? -1 : 1);
                        a += Math.pow(2, n), o -= u
                    }
                    return (d ? -1 : 1) * a * Math.pow(2, o - n)
                }, r.write = function (e, t, r, n, i, o) {
                    var a, s, l, u = 8 * o - i - 1,
                        c = (1 << u) - 1,
                        f = c >> 1,
                        h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        d = n ? 0 : o - 1,
                        p = n ? 1 : -1,
                        m = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || 1 / 0 === t ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), t += a + f >= 1 ? h / l : h * Math.pow(2, 1 - f), t * l >= 2 && (a++, l /= 2), a + f >= c ? (s = 0, a = c) : a + f >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + d] = 255 & s, d += p, s /= 256, i -= 8);
                    for (a = a << i | s, u += i; u > 0; e[r + d] = 255 & a, d += p, a /= 256, u -= 8);
                    e[r + d - p] |= 128 * m
                }
            }, {}],
            155: [function (e, t) {
                "use strict";
                var r = e("./lib/js-yaml.js");
                t.exports = r
            }, {
                "./lib/js-yaml.js": 156
            }],
            156: [function (e, t) {
                "use strict";

                function r(e) {
                    return function () {
                        throw new Error("Function " + e + " is deprecated and cannot be used.")
                    }
                }
                var n = e("./js-yaml/loader");
                t.exports.Type = e("./js-yaml/type"), t.exports.Schema = e("./js-yaml/schema"), t.exports.FAILSAFE_SCHEMA = e("./js-yaml/schema/failsafe"), t.exports.JSON_SCHEMA = e("./js-yaml/schema/json"), t.exports.CORE_SCHEMA = e("./js-yaml/schema/core"), t.exports.DEFAULT_SAFE_SCHEMA = e("./js-yaml/schema/default_safe"), t.exports.DEFAULT_FULL_SCHEMA = e("./js-yaml/schema/default_full"), t.exports.load = n.load, t.exports.loadAll = n.loadAll, t.exports.safeLoad = n.safeLoad, t.exports.safeLoadAll = n.safeLoadAll, t.exports.YAMLException = e("./js-yaml/exception"), t.exports.MINIMAL_SCHEMA = e("./js-yaml/schema/failsafe"), t.exports.SAFE_SCHEMA = e("./js-yaml/schema/default_safe"), t.exports.DEFAULT_SCHEMA = e("./js-yaml/schema/default_full"), t.exports.scan = r("scan"), t.exports.parse = r("parse"), t.exports.compose = r("compose"), t.exports.addConstructor = r("addConstructor")
            }, {
                "./js-yaml/exception": 158,
                "./js-yaml/loader": 159,
                "./js-yaml/schema": 161,
                "./js-yaml/schema/core": 162,
                "./js-yaml/schema/default_full": 163,
                "./js-yaml/schema/default_safe": 164,
                "./js-yaml/schema/failsafe": 165,
                "./js-yaml/schema/json": 166,
                "./js-yaml/type": 167
            }],
            157: [function (e, t) {
                "use strict";

                function r(e) {
                    return "undefined" == typeof e || null === e
                }

                function n(e) {
                    return "object" == typeof e && null !== e
                }

                function i(e) {
                    return Array.isArray(e) ? e : r(e) ? [] : [e]
                }

                function o(e, t) {
                    var r, n, i, o;
                    if (t)
                        for (o = Object.keys(t), r = 0, n = o.length; n > r; r += 1) i = o[r], e[i] = t[i];
                    return e
                }

                function a(e, t) {
                    var r, n = "";
                    for (r = 0; t > r; r += 1) n += e;
                    return n
                }

                function s(e) {
                    return 0 === e && Number.NEGATIVE_INFINITY === 1 / e
                }
                t.exports.isNothing = r, t.exports.isObject = n, t.exports.toArray = i, t.exports.repeat = a, t.exports.isNegativeZero = s, t.exports.extend = o
            }, {}],
            158: [function (e, t) {
                "use strict";

                function r(e, t) {
                    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || "", this.name = "YAMLException", this.reason = e, this.mark = t, this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "")
                }
                r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r.prototype.toString = function (e) {
                    var t = this.name + ": ";
                    return t += this.reason || "(unknown reason)", !e && this.mark && (t += " " + this.mark.toString()), t
                }, t.exports = r
            }, {}],
            159: [function (e, t) {
                "use strict";

                function r(e) {
                    return 10 === e || 13 === e
                }

                function n(e) {
                    return 9 === e || 32 === e
                }

                function i(e) {
                    return 9 === e || 32 === e || 10 === e || 13 === e
                }

                function o(e) {
                    return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e
                }

                function a(e) {
                    var t;
                    return e >= 48 && 57 >= e ? e - 48 : (t = 32 | e, t >= 97 && 102 >= t ? t - 97 + 10 : -1)
                }

                function s(e) {
                    return 120 === e ? 2 : 117 === e ? 4 : 85 === e ? 8 : 0
                }

                function l(e) {
                    return e >= 48 && 57 >= e ? e - 48 : -1
                }

                function u(e) {
                    return 48 === e ? "\x00" : 97 === e ? " " : 98 === e ? "\b" : 116 === e ? "	" : 9 === e ? "	" : 110 === e ? "\n" : 118 === e ? "
" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "?" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : ""
                }

                function c(e) {
                    return 65535 >= e ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320)
                }

                function f(e, t) {
                    this.input = e, this.filename = t.filename || null, this.schema = t.schema || B, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = []
                }

                function h(e, t) {
                    return new C(t, new $(e.filename, e.input, e.position, e.line, e.position - e.lineStart))
                }

                function d(e, t) {
                    throw h(e, t)
                }

                function p(e, t) {
                    e.onWarning && e.onWarning.call(null, h(e, t))
                }

                function m(e, t, r, n) {
                    var i, o, a, s;
                    if (r > t) {
                        if (s = e.input.slice(t, r), n)
                            for (i = 0, o = s.length; o > i; i += 1) a = s.charCodeAt(i), 9 === a || a >= 32 && 1114111 >= a || d(e, "expected valid JSON character");
                        else K.test(s) && d(e, "the stream contains non-printable characters");
                        e.result += s
                    }
                }

                function g(e, t, r, n) {
                    var i, o, a, s;
                    for (D.isObject(r) || d(e, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(r), a = 0, s = i.length; s > a; a += 1) o = i[a], q.call(t, o) || (t[o] = r[o], n[o] = !0)
                }

                function v(e, t, r, n, i, o) {
                    var a, s;
                    if (i = String(i), null === t && (t = {}), "tag:yaml.org,2002:merge" === n)
                        if (Array.isArray(o))
                            for (a = 0, s = o.length; s > a; a += 1) g(e, t, o[a], r);
                        else g(e, t, o, r);
                    else e.json || q.call(r, i) || !q.call(t, i) || d(e, "duplicated mapping key"), t[i] = o, delete r[i];
                    return t
                }

                function _(e) {
                    var t;
                    t = e.input.charCodeAt(e.position), 10 === t ? e.position++ : 13 === t ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++) : d(e, "a line break is expected"), e.line += 1, e.lineStart = e.position
                }

                function y(e, t, i) {
                    for (var o = 0, a = e.input.charCodeAt(e.position); 0 !== a;) {
                        for (; n(a);) a = e.input.charCodeAt(++e.position);
                        if (t && 35 === a)
                            do a = e.input.charCodeAt(++e.position); while (10 !== a && 13 !== a && 0 !== a);
                        if (!r(a)) break;
                        for (_(e), a = e.input.charCodeAt(e.position), o++, e.lineIndent = 0; 32 === a;) e.lineIndent++, a = e.input.charCodeAt(++e.position)
                    }
                    return -1 !== i && 0 !== o && e.lineIndent < i && p(e, "deficient indentation"), o
                }

                function b(e) {
                    var t, r = e.position;
                    return t = e.input.charCodeAt(r), 45 !== t && 46 !== t || t !== e.input.charCodeAt(r + 1) || t !== e.input.charCodeAt(r + 2) || (r += 3, t = e.input.charCodeAt(r), 0 !== t && !i(t)) ? !1 : !0
                }

                function x(e, t) {
                    1 === t ? e.result += " " : t > 1 && (e.result += D.repeat("\n", t - 1))
                }

                function w(e, t, a) {
                    var s, l, u, c, f, h, d, p, g, v = e.kind,
                        _ = e.result;
                    if (g = e.input.charCodeAt(e.position), i(g) || o(g) || 35 === g || 38 === g || 42 === g || 33 === g || 124 === g || 62 === g || 39 === g || 34 === g || 37 === g || 64 === g || 96 === g) return !1;
                    if ((63 === g || 45 === g) && (l = e.input.charCodeAt(e.position + 1), i(l) || a && o(l))) return !1;
                    for (e.kind = "scalar", e.result = "", u = c = e.position, f = !1; 0 !== g;) {
                        if (58 === g) {
                            if (l = e.input.charCodeAt(e.position + 1), i(l) || a && o(l)) break
                        } else if (35 === g) {
                            if (s = e.input.charCodeAt(e.position - 1), i(s)) break
                        } else {
                            if (e.position === e.lineStart && b(e) || a && o(g)) break;
                            if (r(g)) {
                                if (h = e.line, d = e.lineStart, p = e.lineIndent, y(e, !1, -1), e.lineIndent >= t) {
                                    f = !0, g = e.input.charCodeAt(e.position);
                                    continue
                                }
                                e.position = c, e.line = h, e.lineStart = d, e.lineIndent = p;
                                break
                            }
                        }
                        f && (m(e, u, c, !1), x(e, e.line - h), u = c = e.position, f = !1), n(g) || (c = e.position + 1), g = e.input.charCodeAt(++e.position)
                    }
                    return m(e, u, c, !1), e.result ? !0 : (e.kind = v, e.result = _, !1)
                }

                function A(e, t) {
                    var n, i, o;
                    if (n = e.input.charCodeAt(e.position), 39 !== n) return !1;
                    for (e.kind = "scalar", e.result = "", e.position++, i = o = e.position; 0 !== (n = e.input.charCodeAt(e.position));)
                        if (39 === n) {
                            if (m(e, i, e.position, !0), n = e.input.charCodeAt(++e.position), 39 !== n) return !0;
                            i = o = e.position, e.position++
                        } else r(n) ? (m(e, i, o, !0), x(e, y(e, !1, t)), i = o = e.position) : e.position === e.lineStart && b(e) ? d(e, "unexpected end of the document within a single quoted scalar") : (e.position++, o = e.position);
                    d(e, "unexpected end of the stream within a single quoted scalar")
                }

                function T(e, t) {
                    var n, i, o, l, u, f;
                    if (f = e.input.charCodeAt(e.position), 34 !== f) return !1;
                    for (e.kind = "scalar", e.result = "", e.position++, n = i = e.position; 0 !== (f = e.input.charCodeAt(e.position));) {
                        if (34 === f) return m(e, n, e.position, !0), e.position++, !0;
                        if (92 === f) {
                            if (m(e, n, e.position, !0), f = e.input.charCodeAt(++e.position), r(f)) y(e, !1, t);
                            else if (256 > f && nt[f]) e.result += it[f], e.position++;
                            else if ((u = s(f)) > 0) {
                                for (o = u, l = 0; o > 0; o--) f = e.input.charCodeAt(++e.position), (u = a(f)) >= 0 ? l = (l << 4) + u : d(e, "expected hexadecimal character");
                                e.result += c(l), e.position++
                            } else d(e, "unknown escape sequence");
                            n = i = e.position
                        } else r(f) ? (m(e, n, i, !0), x(e, y(e, !1, t)), n = i = e.position) : e.position === e.lineStart && b(e) ? d(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position)
                    }
                    d(e, "unexpected end of the stream within a double quoted scalar")
                }

                function k(e, t) {
                    var r, n, o, a, s, l, u, c, f, h, p, m = !0,
                        g = e.tag,
                        _ = e.anchor,
                        b = {};
                    if (p = e.input.charCodeAt(e.position), 91 === p) a = 93, u = !1, n = [];
                    else {
                        if (123 !== p) return !1;
                        a = 125, u = !0, n = {}
                    }
                    for (null !== e.anchor && (e.anchorMap[e.anchor] = n), p = e.input.charCodeAt(++e.position); 0 !== p;) {
                        if (y(e, !0, t), p = e.input.charCodeAt(e.position), p === a) return e.position++, e.tag = g, e.anchor = _, e.kind = u ? "mapping" : "sequence", e.result = n, !0;
                        m || d(e, "missed comma between flow collection entries"), f = c = h = null, s = l = !1, 63 === p && (o = e.input.charCodeAt(e.position + 1), i(o) && (s = l = !0, e.position++, y(e, !0, t))), r = e.line, N(e, t, V, !1, !0), f = e.tag, c = e.result, y(e, !0, t), p = e.input.charCodeAt(e.position), !l && e.line !== r || 58 !== p || (s = !0, p = e.input.charCodeAt(++e.position), y(e, !0, t), N(e, t, V, !1, !0), h = e.result), u ? v(e, n, b, f, c, h) : n.push(s ? v(e, null, b, f, c, h) : c), y(e, !0, t), p = e.input.charCodeAt(e.position), 44 === p ? (m = !0, p = e.input.charCodeAt(++e.position)) : m = !1
                    }
                    d(e, "unexpected end of the stream within a flow collection")
                }

                function E(e, t) {
                    var i, o, a, s, u = Y,
                        c = !1,
                        f = t,
                        h = 0,
                        p = !1;
                    if (s = e.input.charCodeAt(e.position), 124 === s) o = !1;
                    else {
                        if (62 !== s) return !1;
                        o = !0
                    }
                    for (e.kind = "scalar", e.result = ""; 0 !== s;)
                        if (s = e.input.charCodeAt(++e.position), 43 === s || 45 === s) Y === u ? u = 43 === s ? J : Z : d(e, "repeat of a chomping mode identifier");
                        else {
                            if (!((a = l(s)) >= 0)) break;
                            0 === a ? d(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : c ? d(e, "repeat of an indentation width identifier") : (f = t + a - 1, c = !0)
                        }
                    if (n(s)) {
                        do s = e.input.charCodeAt(++e.position); while (n(s));
                        if (35 === s)
                            do s = e.input.charCodeAt(++e.position); while (!r(s) && 0 !== s)
                    }
                    for (; 0 !== s;) {
                        for (_(e), e.lineIndent = 0, s = e.input.charCodeAt(e.position);
                            (!c || e.lineIndent < f) && 32 === s;) e.lineIndent++, s = e.input.charCodeAt(++e.position);
                        if (!c && e.lineIndent > f && (f = e.lineIndent), r(s)) h++;
                        else {
                            if (e.lineIndent < f) {
                                u === J ? e.result += D.repeat("\n", h) : u === Y && c && (e.result += "\n");
                                break
                            }
                            for (o ? n(s) ? (p = !0, e.result += D.repeat("\n", h + 1)) : p ? (p = !1, e.result += D.repeat("\n", h + 1)) : 0 === h ? c && (e.result += " ") : e.result += D.repeat("\n", h) : e.result += c ? D.repeat("\n", h + 1) : D.repeat("\n", h), c = !0, h = 0, i = e.position; !r(s) && 0 !== s;) s = e.input.charCodeAt(++e.position);
                            m(e, i, e.position, !1)
                        }
                    }
                    return !0
                }

                function R(e, t) {
                    var r, n, o, a = e.tag,
                        s = e.anchor,
                        l = [],
                        u = !1;
                    for (null !== e.anchor && (e.anchorMap[e.anchor] = l), o = e.input.charCodeAt(e.position); 0 !== o && 45 === o && (n = e.input.charCodeAt(e.position + 1), i(n));)
                        if (u = !0, e.position++, y(e, !0, -1) && e.lineIndent <= t) l.push(null), o = e.input.charCodeAt(e.position);
                        else if (r = e.line, N(e, t, X, !1, !0), l.push(e.result), y(e, !0, -1), o = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && 0 !== o) d(e, "bad indentation of a sequence entry");
                    else if (e.lineIndent < t) break;
                    return u ? (e.tag = a, e.anchor = s, e.kind = "sequence", e.result = l, !0) : !1
                }

                function S(e, t, r) {
                    var o, a, s, l, u = e.tag,
                        c = e.anchor,
                        f = {},
                        h = {},
                        p = null,
                        m = null,
                        g = null,
                        _ = !1,
                        b = !1;
                    for (null !== e.anchor && (e.anchorMap[e.anchor] = f), l = e.input.charCodeAt(e.position); 0 !== l;) {
                        if (o = e.input.charCodeAt(e.position + 1), s = e.line, 63 !== l && 58 !== l || !i(o)) {
                            if (!N(e, r, W, !1, !0)) break;
                            if (e.line === s) {
                                for (l = e.input.charCodeAt(e.position); n(l);) l = e.input.charCodeAt(++e.position);
                                if (58 === l) l = e.input.charCodeAt(++e.position), i(l) || d(e, "a whitespace character is expected after the key-value separator within a block mapping"), _ && (v(e, f, h, p, m, null), p = m = g = null), b = !0, _ = !1, a = !1, p = e.tag, m = e.result;
                                else {
                                    if (!b) return e.tag = u, e.anchor = c, !0;
                                    d(e, "can not read an implicit mapping pair; a colon is missed")
                                }
                            } else {
                                if (!b) return e.tag = u, e.anchor = c, !0;
                                d(e, "can not read a block mapping entry; a multiline key may not be an implicit key")
                            }
                        } else 63 === l ? (_ && (v(e, f, h, p, m, null), p = m = g = null), b = !0, _ = !0, a = !0) : _ ? (_ = !1, a = !0) : d(e, "incomplete explicit mapping pair; a key node is missed"), e.position += 1, l = o;
                        if ((e.line === s || e.lineIndent > t) && (N(e, t, H, !0, a) && (_ ? m = e.result : g = e.result), _ || (v(e, f, h, p, m, g), p = m = g = null), y(e, !0, -1), l = e.input.charCodeAt(e.position)), e.lineIndent > t && 0 !== l) d(e, "bad indentation of a mapping entry");
                        else if (e.lineIndent < t) break
                    }
                    return _ && v(e, f, h, p, m, null), b && (e.tag = u, e.anchor = c, e.kind = "mapping", e.result = f), b
                }

                function M(e) {
                    var t, r, n, o, a = !1,
                        s = !1;
                    if (o = e.input.charCodeAt(e.position), 33 !== o) return !1;
                    if (null !== e.tag && d(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), 60 === o ? (a = !0, o = e.input.charCodeAt(++e.position)) : 33 === o ? (s = !0, r = "!!", o = e.input.charCodeAt(++e.position)) : r = "!", t = e.position, a) {
                        do o = e.input.charCodeAt(++e.position); while (0 !== o && 62 !== o);
                        e.position < e.length ? (n = e.input.slice(t, e.position), o = e.input.charCodeAt(++e.position)) : d(e, "unexpected end of the stream within a verbatim tag")
                    } else {
                        for (; 0 !== o && !i(o);) 33 === o && (s ? d(e, "tag suffix cannot contain exclamation marks") : (r = e.input.slice(t - 1, e.position + 1), tt.test(r) || d(e, "named tag handle cannot contain such characters"), s = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
                        n = e.input.slice(t, e.position), et.test(n) && d(e, "tag suffix cannot contain flow indicator characters")
                    }
                    return n && !rt.test(n) && d(e, "tag name cannot contain such characters: " + n), a ? e.tag = n : q.call(e.tagMap, r) ? e.tag = e.tagMap[r] + n : "!" === r ? e.tag = "!" + n : "!!" === r ? e.tag = "tag:yaml.org,2002:" + n : d(e, 'undeclared tag handle "' + r + '"'), !0
                }

                function j(e) {
                    var t, r;
                    if (r = e.input.charCodeAt(e.position), 38 !== r) return !1;
                    for (null !== e.anchor && d(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; 0 !== r && !i(r) && !o(r);) r = e.input.charCodeAt(++e.position);
                    return e.position === t && d(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0
                }

                function P(e) {
                    var t, r, n;
                    if (n = e.input.charCodeAt(e.position), 42 !== n) return !1;
                    for (n = e.input.charCodeAt(++e.position), t = e.position; 0 !== n && !i(n) && !o(n);) n = e.input.charCodeAt(++e.position);
                    return e.position === t && d(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), e.anchorMap.hasOwnProperty(r) || d(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], y(e, !0, -1), !0
                }

                function N(e, t, r, n, i) {
                    var o, a, s, l, u, c, f, h, p = 1,
                        m = !1,
                        g = !1;
                    if (null !== e.listener && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, o = a = s = H === r || X === r, n && y(e, !0, -1) && (m = !0, e.lineIndent > t ? p = 1 : e.lineIndent === t ? p = 0 : e.lineIndent < t && (p = -1)), 1 === p)
                        for (; M(e) || j(e);) y(e, !0, -1) ? (m = !0, s = o, e.lineIndent > t ? p = 1 : e.lineIndent === t ? p = 0 : e.lineIndent < t && (p = -1)) : s = !1;
                    if (s && (s = m || i), (1 === p || H === r) && (f = V === r || W === r ? t : t + 1, h = e.position - e.lineStart, 1 === p ? s && (R(e, h) || S(e, h, f)) || k(e, f) ? g = !0 : (a && E(e, f) || A(e, f) || T(e, f) ? g = !0 : P(e) ? (g = !0, (null !== e.tag || null !== e.anchor) && d(e, "alias node should not have any properties")) : w(e, f, V === r) && (g = !0, null === e.tag && (e.tag = "?")), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === p && (g = s && R(e, h))), null !== e.tag && "!" !== e.tag)
                        if ("?" === e.tag) {
                            for (l = 0, u = e.implicitTypes.length; u > l; l += 1)
                                if (c = e.implicitTypes[l], c.resolve(e.result)) {
                                    e.result = c.construct(e.result), e.tag = c.tag, null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
                                    break
                                }
                        } else q.call(e.typeMap, e.tag) ? (c = e.typeMap[e.tag], null !== e.result && c.kind !== e.kind && d(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + c.kind + '", not "' + e.kind + '"'), c.resolve(e.result) ? (e.result = c.construct(e.result), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : d(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : d(e, "unknown tag !<" + e.tag + ">");
                    return null !== e.listener && e.listener("close", e), null !== e.tag || null !== e.anchor || g
                }

                function z(e) {
                    var t, o, a, s, l = e.position,
                        u = !1;
                    for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; 0 !== (s = e.input.charCodeAt(e.position)) && (y(e, !0, -1), s = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || 37 !== s));) {
                        for (u = !0, s = e.input.charCodeAt(++e.position), t = e.position; 0 !== s && !i(s);) s = e.input.charCodeAt(++e.position);
                        for (o = e.input.slice(t, e.position), a = [], o.length < 1 && d(e, "directive name must not be less than one character in length"); 0 !== s;) {
                            for (; n(s);) s = e.input.charCodeAt(++e.position);
                            if (35 === s) {
                                do s = e.input.charCodeAt(++e.position); while (0 !== s && !r(s));
                                break
                            }
                            if (r(s)) break;
                            for (t = e.position; 0 !== s && !i(s);) s = e.input.charCodeAt(++e.position);
                            a.push(e.input.slice(t, e.position))
                        }
                        0 !== s && _(e), q.call(at, o) ? at[o](e, o, a) : p(e, 'unknown document directive "' + o + '"')
                    }
                    return y(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, y(e, !0, -1)) : u && d(e, "directives end mark is expected"), N(e, e.lineIndent - 1, H, !1, !0), y(e, !0, -1), e.checkLineBreaks && Q.test(e.input.slice(l, e.position)) && p(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && b(e) ? void(46 === e.input.charCodeAt(e.position) && (e.position += 3, y(e, !0, -1))) : void(e.position < e.length - 1 && d(e, "end of the stream or a document separator is expected"))
                }

                function L(e, t) {
                    e = String(e), t = t || {}, 0 !== e.length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"), 65279 === e.charCodeAt(0) && (e = e.slice(1)));
                    var r = new f(e, t);
                    for (r.input += "\x00"; 32 === r.input.charCodeAt(r.position);) r.lineIndent += 1, r.position += 1;
                    for (; r.position < r.length - 1;) z(r);
                    return r.documents
                }

                function O(e, t, r) {
                    var n, i, o = L(e, r);
                    for (n = 0, i = o.length; i > n; n += 1) t(o[n])
                }

                function I(e, t) {
                    var r = L(e, t);
                    if (0 === r.length) return void 0;
                    if (1 === r.length) return r[0];
                    throw new C("expected a single document in the stream, but found more")
                }

                function U(e, t, r) {
                    O(e, t, D.extend({
                        schema: G
                    }, r))
                }

                function F(e, t) {
                    return I(e, D.extend({
                        schema: G
                    }, t))
                }
                for (var D = e("./common"), C = e("./exception"), $ = e("./mark"), G = e("./schema/default_safe"), B = e("./schema/default_full"), q = Object.prototype.hasOwnProperty, V = 1, W = 2, X = 3, H = 4, Y = 1, Z = 2, J = 3, K = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Q = /[\x85\u2028\u2029]/, et = /[,\[\]\{\}]/, tt = /^(?:!|!!|![a-z\-]+!)$/i, rt = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i, nt = new Array(256), it = new Array(256), ot = 0; 256 > ot; ot++) nt[ot] = u(ot) ? 1 : 0, it[ot] = u(ot);
                var at = {
                    YAML: function (e, t, r) {
                        var n, i, o;
                        null !== e.version && d(e, "duplication of %YAML directive"), 1 !== r.length && d(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), null === n && d(e, "ill-formed argument of the YAML directive"), i = parseInt(n[1], 10), o = parseInt(n[2], 10), 1 !== i && d(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = 2 > o, 1 !== o && 2 !== o && p(e, "unsupported YAML version of the document")
                    },
                    TAG: function (e, t, r) {
                        var n, i;
                        2 !== r.length && d(e, "TAG directive accepts exactly two arguments"), n = r[0], i = r[1], tt.test(n) || d(e, "ill-formed tag handle (first argument) of the TAG directive"), q.call(e.tagMap, n) && d(e, 'there is a previously declared suffix for "' + n + '" tag handle'), rt.test(i) || d(e, "ill-formed tag prefix (second argument) of the TAG directive"), e.tagMap[n] = i
                    }
                };
                t.exports.loadAll = O, t.exports.load = I, t.exports.safeLoadAll = U, t.exports.safeLoad = F
            }, {
                "./common": 157,
                "./exception": 158,
                "./mark": 160,
                "./schema/default_full": 163,
                "./schema/default_safe": 164
            }],
            160: [function (e, t) {
                "use strict";

                function r(e, t, r, n, i) {
                    this.name = e, this.buffer = t, this.position = r, this.line = n, this.column = i
                }
                var n = e("./common");
                r.prototype.getSnippet = function (e, t) {
                    var r, i, o, a, s;
                    if (!this.buffer) return null;
                    for (e = e || 4, t = t || 75, r = "", i = this.position; i > 0 && -1 === "\x00\r\n?\u2028\u2029".indexOf(this.buffer.charAt(i - 1));)
                        if (i -= 1, this.position - i > t / 2 - 1) {
                            r = " ... ", i += 5;
                            break
                        }
                    for (o = "", a = this.position; a < this.buffer.length && -1 === "\x00\r\n?\u2028\u2029".indexOf(this.buffer.charAt(a));)
                        if (a += 1, a - this.position > t / 2 - 1) {
                            o = " ... ", a -= 5;
                            break
                        }
                    return s = this.buffer.slice(i, a), n.repeat(" ", e) + r + s + o + "\n" + n.repeat(" ", e + this.position - i + r.length) + "^"
                }, r.prototype.toString = function (e) {
                    var t, r = "";
                    return this.name && (r += 'in "' + this.name + '" '), r += "at line " + (this.line + 1) + ", column " + (this.column + 1), e || (t = this.getSnippet(), t && (r += ":\n" + t)), r
                }, t.exports = r
            }, {
                "./common": 157
            }],
            161: [function (e, t) {
                "use strict";

                function r(e, t, n) {
                    var i = [];
                    return e.include.forEach(function (e) {
                        n = r(e, t, n)
                    }), e[t].forEach(function (e) {
                        n.forEach(function (t, r) {
                            t.tag === e.tag && i.push(r)
                        }), n.push(e)
                    }), n.filter(function (e, t) {
                        return -1 === i.indexOf(t)
                    })
                }

                function n() {
                    function e(e) {
                        n[e.tag] = e
                    }
                    var t, r, n = {};
                    for (t = 0, r = arguments.length; r > t; t += 1) arguments[t].forEach(e);
                    return n
                }

                function i(e) {
                    this.include = e.include || [], this.implicit = e.implicit || [], this.explicit = e.explicit || [], this.implicit.forEach(function (e) {
                        if (e.loadKind && "scalar" !== e.loadKind) throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")
                    }), this.compiledImplicit = r(this, "implicit", []), this.compiledExplicit = r(this, "explicit", []), this.compiledTypeMap = n(this.compiledImplicit, this.compiledExplicit)
                }
                var o = e("./common"),
                    a = e("./exception"),
                    s = e("./type");
                i.DEFAULT = null, i.create = function () {
                    var e, t;
                    switch (arguments.length) {
                    case 1:
                        e = i.DEFAULT, t = arguments[0];
                        break;
                    case 2:
                        e = arguments[0], t = arguments[1];
                        break;
                    default:
                        throw new a("Wrong number of arguments for Schema.create function")
                    }
                    if (e = o.toArray(e), t = o.toArray(t), !e.every(function (e) {
                            return e instanceof i
                        })) throw new a("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
                    if (!t.every(function (e) {
                            return e instanceof s
                        })) throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");
                    return new i({
                        include: e,
                        explicit: t
                    })
                }, t.exports = i
            }, {
                "./common": 157,
                "./exception": 158,
                "./type": 167
            }],
            162: [function (e, t) {
                "use strict";
                var r = e("../schema");
                t.exports = new r({
                    include: [e("./json")]
                })
            }, {
                "../schema": 161,
                "./json": 166
            }],
            163: [function (e, t) {
                "use strict";
                var r = e("../schema");
                t.exports = r.DEFAULT = new r({
                    include: [e("./default_safe")],
                    explicit: [e("../type/js/undefined"), e("../type/js/regexp"), e("../type/js/function")]
                })
            }, {
                "../schema": 161,
                "../type/js/function": 172,
                "../type/js/regexp": 173,
                "../type/js/undefined": 174,
                "./default_safe": 164
            }],
            164: [function (e, t) {
                "use strict";
                var r = e("../schema");
                t.exports = new r({
                    include: [e("./core")],
                    implicit: [e("../type/timestamp"), e("../type/merge")],
                    explicit: [e("../type/binary"), e("../type/omap"), e("../type/pairs"), e("../type/set")]
                })
            }, {
                "../schema": 161,
                "../type/binary": 168,
                "../type/merge": 176,
                "../type/omap": 178,
                "../type/pairs": 179,
                "../type/set": 181,
                "../type/timestamp": 183,
                "./core": 162
            }],
            165: [function (e, t) {
                "use strict";
                var r = e("../schema");
                t.exports = new r({
                    explicit: [e("../type/str"), e("../type/seq"), e("../type/map")]
                })
            }, {
                "../schema": 161,
                "../type/map": 175,
                "../type/seq": 180,
                "../type/str": 182
            }],
            166: [function (e, t) {
                "use strict";
                var r = e("../schema");
                t.exports = new r({
                    include: [e("./failsafe")],
                    implicit: [e("../type/null"), e("../type/bool"), e("../type/int"), e("../type/float")]
                })
            }, {
                "../schema": 161,
                "../type/bool": 169,
                "../type/float": 170,
                "../type/int": 171,
                "../type/null": 177,
                "./failsafe": 165
            }],
            167: [function (e, t) {
                "use strict";

                function r(e) {
                    var t = {};
                    return null !== e && Object.keys(e).forEach(function (r) {
                        e[r].forEach(function (e) {
                            t[String(e)] = r
                        })
                    }), t
                }

                function n(e, t) {
                    if (t = t || {}, Object.keys(t).forEach(function (t) {
                            if (-1 === o.indexOf(t)) throw new i('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.')
                        }), this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function () {
                            return !0
                        }, this.construct = t.construct || function (e) {
                            return e
                        }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.defaultStyle = t.defaultStyle || null, this.styleAliases = r(t.styleAliases || null), -1 === a.indexOf(this.kind)) throw new i('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.')
                }
                var i = e("./exception"),
                    o = ["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"],
                    a = ["scalar", "sequence", "mapping"];
                t.exports = n
            }, {
                "./exception": 158
            }],
            168: [function (e, t) {
                "use strict";

                function r(e) {
                    if (null === e) return !1;
                    var t, r, n = 0,
                        i = e.length,
                        o = l;
                    for (r = 0; i > r; r++)
                        if (t = o.indexOf(e.charAt(r)), !(t > 64)) {
                            if (0 > t) return !1;
                            n += 6
                        }
                    return n % 8 === 0
                }

                function n(e) {
                    var t, r, n = e.replace(/[\r\n=]/g, ""),
                        i = n.length,
                        o = l,
                        s = 0,
                        u = [];
                    for (t = 0; i > t; t++) t % 4 === 0 && t && (u.push(s >> 16 & 255), u.push(s >> 8 & 255), u.push(255 & s)), s = s << 6 | o.indexOf(n.charAt(t));
                    return r = i % 4 * 6, 0 === r ? (u.push(s >> 16 & 255), u.push(s >> 8 & 255), u.push(255 & s)) : 18 === r ? (u.push(s >> 10 & 255), u.push(s >> 2 & 255)) : 12 === r && u.push(s >> 4 & 255), a ? new a(u) : u
                }

                function i(e) {
                    var t, r, n = "",
                        i = 0,
                        o = e.length,
                        a = l;
                    for (t = 0; o > t; t++) t % 3 === 0 && t && (n += a[i >> 18 & 63], n += a[i >> 12 & 63], n += a[i >> 6 & 63], n += a[63 & i]), i = (i << 8) + e[t];
                    return r = o % 3, 0 === r ? (n += a[i >> 18 & 63], n += a[i >> 12 & 63], n += a[i >> 6 & 63], n += a[63 & i]) : 2 === r ? (n += a[i >> 10 & 63], n += a[i >> 4 & 63], n += a[i << 2 & 63], n += a[64]) : 1 === r && (n += a[i >> 2 & 63], n += a[i << 4 & 63], n += a[64], n += a[64]), n
                }

                function o(e) {
                    return a && a.isBuffer(e)
                }
                var a = e("buffer").Buffer,
                    s = e("../type"),
                    l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
                t.exports = new s("tag:yaml.org,2002:binary", {
                    kind: "scalar",
                    resolve: r,
                    construct: n,
                    predicate: o,
                    represent: i
                })
            }, {
                "../type": 167,
                buffer: 37
            }],
            169: [function (e, t) {
                "use strict";

                function r(e) {
                    if (null === e) return !1;
                    var t = e.length;
                    return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e)
                }

                function n(e) {
                    return "true" === e || "True" === e || "TRUE" === e
                }

                function i(e) {
                    return "[object Boolean]" === Object.prototype.toString.call(e)
                }
                var o = e("../type");
                t.exports = new o("tag:yaml.org,2002:bool", {
                    kind: "scalar",
                    resolve: r,
                    construct: n,
                    predicate: i,
                    represent: {
                        lowercase: function (e) {
                            return e ? "true" : "false"
                        },
                        uppercase: function (e) {
                            return e ? "TRUE" : "FALSE"
                        },
                        camelcase: function (e) {
                            return e ? "True" : "False"
                        }
                    },
                    defaultStyle: "lowercase"
                })
            }, {
                "../type": 167
            }],
            170: [function (e, t) {
                "use strict";

                function r(e) {
                    return null === e ? !1 : l.test(e) ? !0 : !1
                }

                function n(e) {
                    var t, r, n, i;
                    return t = e.replace(/_/g, "").toLowerCase(), r = "-" === t[0] ? -1 : 1, i = [], "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), ".inf" === t ? 1 === r ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t ? 0 / 0 : t.indexOf(":") >= 0 ? (t.split(":").forEach(function (e) {
                        i.unshift(parseFloat(e, 10))
                    }), t = 0, n = 1, i.forEach(function (e) {
                        t += e * n, n *= 60
                    }), r * t) : r * parseFloat(t, 10)
                }

                function i(e, t) {
                    var r;
                    if (isNaN(e)) switch (t) {
                    case "lowercase":
                        return ".nan";
                    case "uppercase":
                        return ".NAN";
                    case "camelcase":
                        return ".NaN"
                    } else if (Number.POSITIVE_INFINITY === e) switch (t) {
                    case "lowercase":
                        return ".inf";
                    case "uppercase":
                        return ".INF";
                    case "camelcase":
                        return ".Inf"
                    } else if (Number.NEGATIVE_INFINITY === e) switch (t) {
                    case "lowercase":
                        return "-.inf";
                    case "uppercase":
                        return "-.INF";
                    case "camelcase":
                        return "-.Inf"
                    } else if (a.isNegativeZero(e)) return "-0.0";
                    return r = e.toString(10), u.test(r) ? r.replace("e", ".e") : r
                }

                function o(e) {
                    return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 !== 0 || a.isNegativeZero(e))
                }
                var a = e("../common"),
                    s = e("../type"),
                    l = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?|\\.[0-9_]+(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),
                    u = /^[-+]?[0-9]+e/;
                t.exports = new s("tag:yaml.org,2002:float", {
                    kind: "scalar",
                    resolve: r,
                    construct: n,
                    predicate: o,
                    represent: i,
                    defaultStyle: "lowercase"
                })
            }, {
                "../common": 157,
                "../type": 167
            }],
            171: [function (e, t) {
                "use strict";

                function r(e) {
                    return e >= 48 && 57 >= e || e >= 65 && 70 >= e || e >= 97 && 102 >= e
                }

                function n(e) {
                    return e >= 48 && 55 >= e
                }

                function i(e) {
                    return e >= 48 && 57 >= e
                }

                function o(e) {
                    if (null === e) return !1;
                    var t, o = e.length,
                        a = 0,
                        s = !1;
                    if (!o) return !1;
                    if (t = e[a], ("-" === t || "+" === t) && (t = e[++a]), "0" === t) {
                        if (a + 1 === o) return !0;
                        if (t = e[++a], "b" === t) {
                            for (a++; o > a; a++)
                                if (t = e[a], "_" !== t) {
                                    if ("0" !== t && "1" !== t) return !1;
                                    s = !0
                                }
                            return s
                        }
                        if ("x" === t) {
                            for (a++; o > a; a++)
                                if (t = e[a], "_" !== t) {
                                    if (!r(e.charCodeAt(a))) return !1;
                                    s = !0
                                }
                            return s
                        }
                        for (; o > a; a++)
                            if (t = e[a], "_" !== t) {
                                if (!n(e.charCodeAt(a))) return !1;
                                s = !0
                            }
                        return s
                    }
                    for (; o > a; a++)
                        if (t = e[a], "_" !== t) {
                            if (":" === t) break;
                            if (!i(e.charCodeAt(a))) return !1;
                            s = !0
                        }
                    return s ? ":" !== t ? !0 : /^(:[0-5]?[0-9])+$/.test(e.slice(a)) : !1
                }

                function a(e) {
                    var t, r, n = e,
                        i = 1,
                        o = [];
                    return -1 !== n.indexOf("_") && (n = n.replace(/_/g, "")), t = n[0], ("-" === t || "+" === t) && ("-" === t && (i = -1), n = n.slice(1), t = n[0]), "0" === n ? 0 : "0" === t ? "b" === n[1] ? i * parseInt(n.slice(2), 2) : "x" === n[1] ? i * parseInt(n, 16) : i * parseInt(n, 8) : -1 !== n.indexOf(":") ? (n.split(":").forEach(function (e) {
                        o.unshift(parseInt(e, 10))
                    }), n = 0, r = 1, o.forEach(function (e) {
                        n += e * r, r *= 60
                    }), i * n) : i * parseInt(n, 10)
                }

                function s(e) {
                    return "[object Number]" === Object.prototype.toString.call(e) && e % 1 === 0 && !l.isNegativeZero(e)
                }
                var l = e("../common"),
                    u = e("../type");
                t.exports = new u("tag:yaml.org,2002:int", {
                    kind: "scalar",
                    resolve: o,
                    construct: a,
                    predicate: s,
                    represent: {
                        binary: function (e) {
                            return "0b" + e.toString(2)
                        },
                        octal: function (e) {
                            return "0" + e.toString(8)
                        },
                        decimal: function (e) {
                            return e.toString(10)
                        },
                        hexadecimal: function (e) {
                            return "0x" + e.toString(16).toUpperCase()
                        }
                    },
                    defaultStyle: "decimal",
                    styleAliases: {
                        binary: [2, "bin"],
                        octal: [8, "oct"],
                        decimal: [10, "dec"],
                        hexadecimal: [16, "hex"]
                    }
                })
            }, {
                "../common": 157,
                "../type": 167
            }],
            172: [function (e, t) {
                "use strict";

                function r(e) {
                    if (null === e) return !1;
                    try {
                        var t = "(" + e + ")",
                            r = a.parse(t, {
                                range: !0
                            });
                        return "Program" !== r.type || 1 !== r.body.length || "ExpressionStatement" !== r.body[0].type || "FunctionExpression" !== r.body[0].expression.type ? !1 : !0
                    } catch (n) {
                        return !1
                    }
                }

                function n(e) {
                    var t, r = "(" + e + ")",
                        n = a.parse(r, {
                            range: !0
                        }),
                        i = [];
                    if ("Program" !== n.type || 1 !== n.body.length || "ExpressionStatement" !== n.body[0].type || "FunctionExpression" !== n.body[0].expression.type) throw new Error("Failed to resolve function");
                    return n.body[0].expression.params.forEach(function (e) {
                        i.push(e.name)
                    }), t = n.body[0].expression.body.range, new Function(i, r.slice(t[0] + 1, t[1] - 1))
                }

                function i(e) {
                    return e.toString()
                }

                function o(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
                var a;
                try {
                    var s = e;
                    a = s("esprima")
                } catch (l) {
                    "undefined" != typeof window && (a = window.esprima)
                }
                var u = e("../../type");
                t.exports = new u("tag:yaml.org,2002:js/function", {
                    kind: "scalar",
                    resolve: r,
                    construct: n,
                    predicate: o,
                    represent: i
                })
            }, {
                "../../type": 167
            }],
            173: [function (e, t) {
                "use strict";

                function r(e) {
                    if (null === e) return !1;
                    if (0 === e.length) return !1;
                    var t = e,
                        r = /\/([gim]*)$/.exec(e),
                        n = "";
                    if ("/" === t[0]) {
                        if (r && (n = r[1]), n.length > 3) return !1;
                        if ("/" !== t[t.length - n.length - 1]) return !1
                    }
                    return !0
                }

                function n(e) {
                    var t = e,
                        r = /\/([gim]*)$/.exec(e),
                        n = "";
                    return "/" === t[0] && (r && (n = r[1]), t = t.slice(1, t.length - n.length - 1)), new RegExp(t, n)
                }

                function i(e) {
                    var t = "/" + e.source + "/";
                    return e.global && (t += "g"), e.multiline && (t += "m"), e.ignoreCase && (t += "i"), t
                }

                function o(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                }
                var a = e("../../type");
                t.exports = new a("tag:yaml.org,2002:js/regexp", {
                    kind: "scalar",
                    resolve: r,
                    construct: n,
                    predicate: o,
                    represent: i
                })
            }, {
                "../../type": 167
            }],
            174: [function (e, t) {
                "use strict";

                function r() {
                    return !0
                }

                function n() {
                    return void 0
                }

                function i() {
                    return ""
                }

                function o(e) {
                    return "undefined" == typeof e
                }
                var a = e("../../type");
                t.exports = new a("tag:yaml.org,2002:js/undefined", {
                    kind: "scalar",
                    resolve: r,
                    construct: n,
                    predicate: o,
                    represent: i
                })
            }, {
                "../../type": 167
            }],
            175: [function (e, t) {
                "use strict";
                var r = e("../type");
                t.exports = new r("tag:yaml.org,2002:map", {
                    kind: "mapping",
                    construct: function (e) {
                        return null !== e ? e : {}
                    }
                })
            }, {
                "../type": 167
            }],
            176: [function (e, t) {
                "use strict";

                function r(e) {
                    return "<<" === e || null === e
                }
                var n = e("../type");
                t.exports = new n("tag:yaml.org,2002:merge", {
                    kind: "scalar",
                    resolve: r
                })
            }, {
                "../type": 167
            }],
            177: [function (e, t) {
                "use strict";

                function r(e) {
                    if (null === e) return !0;
                    var t = e.length;
                    return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e)
                }

                function n() {
                    return null
                }

                function i(e) {
                    return null === e
                }
                var o = e("../type");
                t.exports = new o("tag:yaml.org,2002:null", {
                    kind: "scalar",
                    resolve: r,
                    construct: n,
                    predicate: i,
                    represent: {
                        canonical: function () {
                            return "~"
                        },
                        lowercase: function () {
                            return "null"
                        },
                        uppercase: function () {
                            return "NULL"
                        },
                        camelcase: function () {
                            return "Null"
                        }
                    },
                    defaultStyle: "lowercase"
                })
            }, {
                "../type": 167
            }],
            178: [function (e, t) {
                "use strict";

                function r(e) {
                    if (null === e) return !0;
                    var t, r, n, i, s, l = [],
                        u = e;
                    for (t = 0, r = u.length; r > t; t += 1) {
                        if (n = u[t], s = !1, "[object Object]" !== a.call(n)) return !1;
                        for (i in n)
                            if (o.call(n, i)) {
                                if (s) return !1;
                                s = !0
                            }
                        if (!s) return !1;
                        if (-1 !== l.indexOf(i)) return !1;
                        l.push(i)
                    }
                    return !0
                }

                function n(e) {
                    return null !== e ? e : []
                }
                var i = e("../type"),
                    o = Object.prototype.hasOwnProperty,
                    a = Object.prototype.toString;
                t.exports = new i("tag:yaml.org,2002:omap", {
                    kind: "sequence",
                    resolve: r,
                    construct: n
                })
            }, {
                "../type": 167
            }],
            179: [function (e, t) {
                "use strict";

                function r(e) {
                    if (null === e) return !0;
                    var t, r, n, i, a, s = e;
                    for (a = new Array(s.length), t = 0, r = s.length; r > t; t += 1) {
                        if (n = s[t], "[object Object]" !== o.call(n)) return !1;
                        if (i = Object.keys(n), 1 !== i.length) return !1;
                        a[t] = [i[0], n[i[0]]]
                    }
                    return !0
                }

                function n(e) {
                    if (null === e) return [];
                    var t, r, n, i, o, a = e;
                    for (o = new Array(a.length), t = 0, r = a.length; r > t; t += 1) n = a[t], i = Object.keys(n), o[t] = [i[0], n[i[0]]];
                    return o
                }
                var i = e("../type"),
                    o = Object.prototype.toString;
                t.exports = new i("tag:yaml.org,2002:pairs", {
                    kind: "sequence",
                    resolve: r,
                    construct: n
                })
            }, {
                "../type": 167
            }],
            180: [function (e, t) {
                "use strict";
                var r = e("../type");
                t.exports = new r("tag:yaml.org,2002:seq", {
                    kind: "sequence",
                    construct: function (e) {
                        return null !== e ? e : []
                    }
                })
            }, {
                "../type": 167
            }],
            181: [function (e, t) {
                "use strict";

                function r(e) {
                    if (null === e) return !0;
                    var t, r = e;
                    for (t in r)
                        if (o.call(r, t) && null !== r[t]) return !1;
                    return !0
                }

                function n(e) {
                    return null !== e ? e : {}
                }
                var i = e("../type"),
                    o = Object.prototype.hasOwnProperty;
                t.exports = new i("tag:yaml.org,2002:set", {
                    kind: "mapping",
                    resolve: r,
                    construct: n
                })
            }, {
                "../type": 167
            }],
            182: [function (e, t) {
                "use strict";
                var r = e("../type");
                t.exports = new r("tag:yaml.org,2002:str", {
                    kind: "scalar",
                    construct: function (e) {
                        return null !== e ? e : ""
                    }
                })
            }, {
                "../type": 167
            }],
            183: [function (e, t) {
                "use strict";

                function r(e) {
                    return null === e ? !1 : null === a.exec(e) ? !1 : !0
                }

                function n(e) {
                    var t, r, n, i, o, s, l, u, c, f, h = 0,
                        d = null;
                    if (t = a.exec(e), null === t) throw new Error("Date resolve error");
                    if (r = +t[1], n = +t[2] - 1, i = +t[3], !t[4]) return new Date(Date.UTC(r, n, i));
                    if (o = +t[4], s = +t[5], l = +t[6], t[7]) {
                        for (h = t[7].slice(0, 3); h.length < 3;) h += "0";
                        h = +h
                    }
                    return t[9] && (u = +t[10], c = +(t[11] || 0), d = 6e4 * (60 * u + c), "-" === t[9] && (d = -d)), f = new Date(Date.UTC(r, n, i, o, s, l, h)), d && f.setTime(f.getTime() - d), f
                }

                function i(e) {
                    return e.toISOString()
                }
                var o = e("../type"),
                    a = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$");
                t.exports = new o("tag:yaml.org,2002:timestamp", {
                    kind: "scalar",
                    resolve: r,
                    construct: n,
                    instanceOf: Date,
                    represent: i
                })
            }, {
                "../type": 167
            }],
            184: [function (e, t) {
                "use strict";

                function r(e) {
                    return null != e
                }

                function n(e) {
                    return "(" + e + ")"
                }

                function i(e) {
                    return "string" == typeof e ? '"' + e + '"' : e
                }

                function o(e) {
                    return "$" === e[0] ? "context." + e.substring(1) : "context.feature.properties." + e
                }

                function a() {
                    return " true "
                }

                function s(e, t) {
                    return n(i(t) + " === " + o(e))
                }

                function l(e, t) {
                    return n(t.map(function (t) {
                        return s(e, t)
                    }).join(" || "))
                }

                function u(e, t) {
                    return n(e.filter(r).map(function (e) {
                        return n(e.join(" && "))
                    }).join(" " + t + " "))
                }

                function c(e, t) {
                    return t && t.length > 0 ? u(t.map(g), "||") : "true"
                }

                function f(e, t) {
                    return t && t.length > 0 ? u(t.map(g), "&&") : "true"
                }

                function h(e, t) {
                    return "!" + n(g(t).join(" && "))
                }

                function d(e, t) {
                    return "!" + n(c(null, t))
                }

                function p(e, t) {
                    return n(o(e) + (t ? " != " : " == ") + "null")
                }

                function m(e, t) {
                    var r = [];
                    return t.max && r.push("" + o(e) + " < " + t.max), t.min && r.push("" + o(e) + " >= " + t.min), n(r.join(" && "))
                }

                function g(e) {
                    var t = [];
                    if ("function" == typeof e) return [n(e.toString() + "(context)")];
                    if (Array.isArray(e)) return [c(null, e)];
                    if (null == e) return ["true"];
                    for (var r = Object.keys(e), i = 0; i < r.length; i++) {
                        var o = r[i],
                            u = e[o],
                            g = typeof u;
                        if ("string" === g || "number" === g) t.push(s(o, u));
                        else if ("boolean" === g) t.push(p(o, u));
                        else if ("not" === o) t.push(h(o, u));
                        else if ("any" === o) t.push(c(o, u));
                        else if ("all" === o) t.push(f(o, u));
                        else if ("none" === o) t.push(d(o, u));
                        else if (Array.isArray(u)) t.push(l(o, u));
                        else if ("object" === g && null != u)(u.max || u.min) && t.push(m(o, u));
                        else {
                            if (null != u) throw new Error("Unknown Query sytnax: " + u);
                            t.push(a(o, u))
                        }
                    }
                    return 0 === r.length ? ["true"] : t
                }

                function v(e) {
                    return n(e.join(" && "))
                }

                function _(e) {
                    return null == e ? function () {
                        return !0
                    } : new Function("context", "return " + v(g(e)) + ";")
                }
                t.exports = {
                    match: _,
                    filterToString: v,
                    parseFilter: g
                }
            }, {}],
            185: [function (e, t) {
                "use strict";

                function r(e) {
                    var t;
                    e && e.length && (t = e, e = t.length);
                    var r = new Uint8Array(e || 0);
                    return t && r.set(t), r.readUInt32LE = i.readUInt32LE, r.writeUInt32LE = i.writeUInt32LE, r.readInt32LE = i.readInt32LE, r.writeInt32LE = i.writeInt32LE, r.readFloatLE = i.readFloatLE, r.writeFloatLE = i.writeFloatLE, r.readDoubleLE = i.readDoubleLE, r.writeDoubleLE = i.writeDoubleLE, r.toString = i.toString, r.write = i.write, r.slice = i.slice, r.copy = i.copy, r._isBuffer = !0, r
                }

                function n(e) {
                    for (var t, r, n = e.length, i = [], o = 0; n > o; o++) {
                        if (t = e.charCodeAt(o), t > 55295 && 57344 > t) {
                            if (!r) {
                                t > 56319 || o + 1 === n ? i.push(239, 191, 189) : r = t;
                                continue
                            }
                            if (56320 > t) {
                                i.push(239, 191, 189), r = t;
                                continue
                            }
                            t = r - 55296 << 10 | t - 56320 | 65536, r = null
                        } else r && (i.push(239, 191, 189), r = null);
                        128 > t ? i.push(t) : 2048 > t ? i.push(t >> 6 | 192, 63 & t | 128) : 65536 > t ? i.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128) : i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
                    }
                    return i
                }
                t.exports = r;
                var i, o, a, s = e("ieee754");
                i = {
                    readUInt32LE: function (e) {
                        return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    },
                    writeUInt32LE: function (e, t) {
                        this[t] = e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24
                    },
                    readInt32LE: function (e) {
                        return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + (this[e + 3] << 24)
                    },
                    readFloatLE: function (e) {
                        return s.read(this, e, !0, 23, 4)
                    },
                    readDoubleLE: function (e) {
                        return s.read(this, e, !0, 52, 8)
                    },
                    writeFloatLE: function (e, t) {
                        return s.write(this, e, t, !0, 23, 4)
                    },
                    writeDoubleLE: function (e, t) {
                        return s.write(this, e, t, !0, 52, 8)
                    },
                    toString: function (e, t, r) {
                        var n = "",
                            i = "";
                        t = t || 0, r = Math.min(this.length, r || this.length);
                        for (var o = t; r > o; o++) {
                            var a = this[o];
                            127 >= a ? (n += decodeURIComponent(i) + String.fromCharCode(a), i = "") : i += "%" + a.toString(16)
                        }
                        return n += decodeURIComponent(i)
                    },
                    write: function (e, t) {
                        for (var r = e === o ? a : n(e), i = 0; i < r.length; i++) this[t + i] = r[i]
                    },
                    slice: function (e, t) {
                        return this.subarray(e, t)
                    },
                    copy: function (e, t) {
                        t = t || 0;
                        for (var r = 0; r < this.length; r++) e[t + r] = this[r]
                    }
                }, i.writeInt32LE = i.writeUInt32LE, r.byteLength = function (e) {
                    return o = e, a = n(e), a.length
                }, r.isBuffer = function (e) {
                    return !(!e || !e._isBuffer)
                }
            }, {
                ieee754: 154
            }],
            186: [function (e, t) {
                (function (r) {
                    "use strict";

                    function n(e) {
                        this.buf = d.isBuffer(e) ? e : new d(e || 0), this.pos = 0, this.length = this.buf.length
                    }

                    function i(e, t) {
                        for (var r = 0; r < e.length; r++) t.writeVarint(e[r])
                    }

                    function o(e, t) {
                        for (var r = 0; r < e.length; r++) t.writeSVarint(e[r])
                    }

                    function a(e, t) {
                        for (var r = 0; r < e.length; r++) t.writeFloat(e[r])
                    }

                    function s(e, t) {
                        for (var r = 0; r < e.length; r++) t.writeDouble(e[r])
                    }

                    function l(e, t) {
                        for (var r = 0; r < e.length; r++) t.writeBoolean(e[r])
                    }

                    function u(e, t) {
                        for (var r = 0; r < e.length; r++) t.writeFixed32(e[r])
                    }

                    function c(e, t) {
                        for (var r = 0; r < e.length; r++) t.writeSFixed32(e[r])
                    }

                    function f(e, t) {
                        for (var r = 0; r < e.length; r++) t.writeFixed64(e[r])
                    }

                    function h(e, t) {
                        for (var r = 0; r < e.length; r++) t.writeSFixed64(e[r])
                    }
                    t.exports = n;
                    var d = r.Buffer || e("./buffer");
                    n.Varint = 0, n.Fixed64 = 1, n.Bytes = 2, n.Fixed32 = 5;
                    var p = 4294967296,
                        m = 1 / p,
                        g = Math.pow(2, 63);
                    n.prototype = {
                        destroy: function () {
                            this.buf = null
                        },
                        readFields: function (e, t, r) {
                            for (r = r || this.length; this.pos < r;) {
                                var n = this.readVarint(),
                                    i = n >> 3,
                                    o = this.pos;
                                e(i, t, this), this.pos === o && this.skip(n)
                            }
                            return t
                        },
                        readMessage: function (e, t) {
                            return this.readFields(e, t, this.readVarint() + this.pos)
                        },
                        readFixed32: function () {
                            var e = this.buf.readUInt32LE(this.pos);
                            return this.pos += 4, e
                        },
                        readSFixed32: function () {
                            var e = this.buf.readInt32LE(this.pos);
                            return this.pos += 4, e
                        },
                        readFixed64: function () {
                            var e = this.buf.readUInt32LE(this.pos) + this.buf.readUInt32LE(this.pos + 4) * p;
                            return this.pos += 8, e
                        },
                        readSFixed64: function () {
                            var e = this.buf.readUInt32LE(this.pos) + this.buf.readInt32LE(this.pos + 4) * p;
                            return this.pos += 8, e
                        },
                        readFloat: function () {
                            var e = this.buf.readFloatLE(this.pos);
                            return this.pos += 4, e
                        },
                        readDouble: function () {
                            var e = this.buf.readDoubleLE(this.pos);
                            return this.pos += 8, e
                        },
                        readVarint: function () {
                            var e, t, r, n, i, o, a = this.buf;
                            if (r = a[this.pos++], 128 > r) return r;
                            if (r = 127 & r, n = a[this.pos++], 128 > n) return r | n << 7;
                            if (n = (127 & n) << 7, i = a[this.pos++], 128 > i) return r | n | i << 14;
                            if (i = (127 & i) << 14, o = a[this.pos++], 128 > o) return r | n | i | o << 21;
                            if (e = r | n | i | (127 & o) << 21, t = a[this.pos++], e += 268435456 * (127 & t), 128 > t) return e;
                            if (t = a[this.pos++], e += 34359738368 * (127 & t), 128 > t) return e;
                            if (t = a[this.pos++], e += 4398046511104 * (127 & t), 128 > t) return e;
                            if (t = a[this.pos++], e += 562949953421312 * (127 & t), 128 > t) return e;
                            if (t = a[this.pos++], e += 72057594037927940 * (127 & t), 128 > t) return e;
                            if (t = a[this.pos++], e += 0x8000000000000000 * (127 & t), 128 > t) return e;
                            throw new Error("Expected varint not more than 10 bytes")
                        },
                        readVarint64: function () {
                            var e = this.pos,
                                t = this.readVarint();
                            if (g > t) return t;
                            for (var r = this.pos - 2; 255 === this.buf[r];) r--;
                            e > r && (r = e), t = 0;
                            for (var n = 0; r - e + 1 > n; n++) {
                                var i = 127 & ~this.buf[e + n];
                                t += 4 > n ? i << 7 * n : i * Math.pow(2, 7 * n)
                            }
                            return -t - 1
                        },
                        readSVarint: function () {
                            var e = this.readVarint();
                            return e % 2 === 1 ? (e + 1) / -2 : e / 2
                        },
                        readBoolean: function () {
                            return Boolean(this.readVarint())
                        },
                        readString: function () {
                            var e = this.readVarint() + this.pos,
                                t = this.buf.toString("utf8", this.pos, e);
                            return this.pos = e, t
                        },
                        readBytes: function () {
                            var e = this.readVarint() + this.pos,
                                t = this.buf.slice(this.pos, e);
                            return this.pos = e, t
                        },
                        readPackedVarint: function () {
                            for (var e = this.readVarint() + this.pos, t = []; this.pos < e;) t.push(this.readVarint());
                            return t
                        },
                        readPackedSVarint: function () {
                            for (var e = this.readVarint() + this.pos, t = []; this.pos < e;) t.push(this.readSVarint());
                            return t
                        },
                        readPackedBoolean: function () {
                            for (var e = this.readVarint() + this.pos, t = []; this.pos < e;) t.push(this.readBoolean());
                            return t
                        },
                        readPackedFloat: function () {
                            for (var e = this.readVarint() + this.pos, t = []; this.pos < e;) t.push(this.readFloat());
                            return t
                        },
                        readPackedDouble: function () {
                            for (var e = this.readVarint() + this.pos, t = []; this.pos < e;) t.push(this.readDouble());
                            return t
                        },
                        readPackedFixed32: function () {
                            for (var e = this.readVarint() + this.pos, t = []; this.pos < e;) t.push(this.readFixed32());
                            return t
                        },
                        readPackedSFixed32: function () {
                            for (var e = this.readVarint() + this.pos, t = []; this.pos < e;) t.push(this.readSFixed32());
                            return t
                        },
                        readPackedFixed64: function () {
                            for (var e = this.readVarint() + this.pos, t = []; this.pos < e;) t.push(this.readFixed64());
                            return t
                        },
                        readPackedSFixed64: function () {
                            for (var e = this.readVarint() + this.pos, t = []; this.pos < e;) t.push(this.readSFixed64());
                            return t
                        },
                        skip: function (e) {
                            var t = 7 & e;
                            if (t === n.Varint)
                                for (; this.buf[this.pos++] > 127;);
                            else if (t === n.Bytes) this.pos = this.readVarint() + this.pos;
                            else if (t === n.Fixed32) this.pos += 4;
                            else {
                                if (t !== n.Fixed64) throw new Error("Unimplemented type: " + t);
                                this.pos += 8
                            }
                        },
                        writeTag: function (e, t) {
                            this.writeVarint(e << 3 | t)
                        },
                        realloc: function (e) {
                            for (var t = this.length || 16; t < this.pos + e;) t *= 2;
                            if (t !== this.length) {
                                var r = new d(t);
                                this.buf.copy(r), this.buf = r, this.length = t
                            }
                        },
                        finish: function () {
                            return this.length = this.pos, this.pos = 0, this.buf.slice(0, this.length)
                        },
                        writeFixed32: function (e) {
                            this.realloc(4), this.buf.writeUInt32LE(e, this.pos), this.pos += 4
                        },
                        writeSFixed32: function (e) {
                            this.realloc(4), this.buf.writeInt32LE(e, this.pos), this.pos += 4
                        },
                        writeFixed64: function (e) {
                            this.realloc(8), this.buf.writeInt32LE(-1 & e, this.pos), this.buf.writeUInt32LE(Math.floor(e * m), this.pos + 4), this.pos += 8
                        },
                        writeSFixed64: function (e) {
                            this.realloc(8), this.buf.writeInt32LE(-1 & e, this.pos), this.buf.writeInt32LE(Math.floor(e * m), this.pos + 4), this.pos += 8
                        },
                        writeVarint: function (e) {
                            if (e = +e, 127 >= e) this.realloc(1), this.buf[this.pos++] = e;
                            else if (16383 >= e) this.realloc(2), this.buf[this.pos++] = e >>> 0 & 127 | 128, this.buf[this.pos++] = e >>> 7 & 127;
                            else if (2097151 >= e) this.realloc(3), this.buf[this.pos++] = e >>> 0 & 127 | 128, this.buf[this.pos++] = e >>> 7 & 127 | 128, this.buf[this.pos++] = e >>> 14 & 127;
                            else if (268435455 >= e) this.realloc(4), this.buf[this.pos++] = e >>> 0 & 127 | 128, this.buf[this.pos++] = e >>> 7 & 127 | 128, this.buf[this.pos++] = e >>> 14 & 127 | 128, this.buf[this.pos++] = e >>> 21 & 127;
                            else {
                                for (var t = this.pos; e >= 128;) this.realloc(1), this.buf[this.pos++] = 255 & e | 128, e /= 128;
                                if (this.realloc(1), this.buf[this.pos++] = 0 | e, this.pos - t > 10) throw new Error("Given varint doesn't fit into 10 bytes")
                            }
                        },
                        writeSVarint: function (e) {
                            this.writeVarint(0 > e ? 2 * -e - 1 : 2 * e)
                        },
                        writeBoolean: function (e) {
                            this.writeVarint(Boolean(e))
                        },
                        writeString: function (e) {
                            e = String(e);
                            var t = d.byteLength(e);
                            this.writeVarint(t), this.realloc(t), this.buf.write(e, this.pos), this.pos += t
                        },
                        writeFloat: function (e) {
                            this.realloc(4), this.buf.writeFloatLE(e, this.pos), this.pos += 4
                        },
                        writeDouble: function (e) {
                            this.realloc(8), this.buf.writeDoubleLE(e, this.pos), this.pos += 8
                        },
                        writeBytes: function (e) {
                            var t = e.length;
                            this.writeVarint(t), this.realloc(t);
                            for (var r = 0; t > r; r++) this.buf[this.pos++] = e[r]
                        },
                        writeMessage: function (e, t, r) {
                            this.writeTag(e, n.Bytes), this.pos++;
                            var i = this.pos;
                            t(r, this);
                            var o = this.pos - i,
                                a = 127 >= o ? 1 : 16383 >= o ? 2 : 2097151 >= o ? 3 : 268435455 >= o ? 4 : Math.ceil(Math.log(o) / (7 * Math.LN2));
                            if (a > 1) {
                                this.realloc(a - 1);
                                for (var s = this.pos - 1; s >= i; s--) this.buf[s + a - 1] = this.buf[s]
                            }
                            this.pos = i - 1, this.writeVarint(o), this.pos += o
                        },
                        writePackedVarint: function (e, t) {
                            this.writeMessage(e, i, t)
                        },
                        writePackedSVarint: function (e, t) {
                            this.writeMessage(e, o, t)
                        },
                        writePackedBoolean: function (e, t) {
                            this.writeMessage(e, l, t)
                        },
                        writePackedFloat: function (e, t) {
                            this.writeMessage(e, a, t)
                        },
                        writePackedDouble: function (e, t) {
                            this.writeMessage(e, s, t)
                        },
                        writePackedFixed32: function (e, t) {
                            this.writeMessage(e, u, t)
                        },
                        writePackedSFixed32: function (e, t) {
                            this.writeMessage(e, c, t)
                        },
                        writePackedFixed64: function (e, t) {
                            this.writeMessage(e, f, t)
                        },
                        writePackedSFixed64: function (e, t) {
                            this.writeMessage(e, h, t)
                        },
                        writeBytesField: function (e, t) {
                            this.writeTag(e, n.Bytes), this.writeBytes(t)
                        },
                        writeFixed32Field: function (e, t) {
                            this.writeTag(e, n.Fixed32), this.writeFixed32(t)
                        },
                        writeSFixed32Field: function (e, t) {
                            this.writeTag(e, n.Fixed32), this.writeSFixed32(t)
                        },
                        writeFixed64Field: function (e, t) {
                            this.writeTag(e, n.Fixed64), this.writeFixed64(t)
                        },
                        writeSFixed64Field: function (e, t) {
                            this.writeTag(e, n.Fixed64), this.writeSFixed64(t)
                        },
                        writeVarintField: function (e, t) {
                            this.writeTag(e, n.Varint), this.writeVarint(t)
                        },
                        writeSVarintField: function (e, t) {
                            this.writeTag(e, n.Varint), this.writeSVarint(t)
                        },
                        writeStringField: function (e, t) {
                            this.writeTag(e, n.Bytes), this.writeString(t)
                        },
                        writeFloatField: function (e, t) {
                            this.writeTag(e, n.Fixed32), this.writeFloat(t)
                        },
                        writeDoubleField: function (e, t) {
                            this.writeTag(e, n.Fixed64), this.writeDouble(t)
                        },
                        writeBooleanField: function (e, t) {
                            this.writeVarintField(e, Boolean(t))
                        }
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./buffer": 185
            }],
            187: [function (e, t) {
                "use strict";

                function r(e, t) {
                    this.x = e, this.y = t
                }
                t.exports = r, r.prototype = {
                    clone: function () {
                        return new r(this.x, this.y)
                    },
                    add: function (e) {
                        return this.clone()._add(e)
                    },
                    sub: function (e) {
                        return this.clone()._sub(e)
                    },
                    mult: function (e) {
                        return this.clone()._mult(e)
                    },
                    div: function (e) {
                        return this.clone()._div(e)
                    },
                    rotate: function (e) {
                        return this.clone()._rotate(e)
                    },
                    matMult: function (e) {
                        return this.clone()._matMult(e)
                    },
                    unit: function () {
                        return this.clone()._unit()
                    },
                    perp: function () {
                        return this.clone()._perp()
                    },
                    round: function () {
                        return this.clone()._round()
                    },
                    mag: function () {
                        return Math.sqrt(this.x * this.x + this.y * this.y)
                    },
                    equals: function (e) {
                        return this.x === e.x && this.y === e.y
                    },
                    dist: function (e) {
                        return Math.sqrt(this.distSqr(e))
                    },
                    distSqr: function (e) {
                        var t = e.x - this.x,
                            r = e.y - this.y;
                        return t * t + r * r
                    },
                    angle: function () {
                        return Math.atan2(this.y, this.x)
                    },
                    angleTo: function (e) {
                        return Math.atan2(this.y - e.y, this.x - e.x)
                    },
                    angleWith: function (e) {
                        return this.angleWithSep(e.x, e.y)
                    },
                    angleWithSep: function (e, t) {
                        return Math.atan2(this.x * t - this.y * e, this.x * e + this.y * t)
                    },
                    _matMult: function (e) {
                        var t = e[0] * this.x + e[1] * this.y,
                            r = e[2] * this.x + e[3] * this.y;
                        return this.x = t, this.y = r, this
                    },
                    _add: function (e) {
                        return this.x += e.x, this.y += e.y, this
                    },
                    _sub: function (e) {
                        return this.x -= e.x, this.y -= e.y, this
                    },
                    _mult: function (e) {
                        return this.x *= e, this.y *= e, this
                    },
                    _div: function (e) {
                        return this.x /= e, this.y /= e, this
                    },
                    _unit: function () {
                        return this._div(this.mag()), this
                    },
                    _perp: function () {
                        var e = this.y;
                        return this.y = this.x, this.x = -e, this
                    },
                    _rotate: function (e) {
                        var t = Math.cos(e),
                            r = Math.sin(e),
                            n = t * this.x - r * this.y,
                            i = r * this.x + t * this.y;
                        return this.x = n, this.y = i, this
                    },
                    _round: function () {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                    }
                }, r.convert = function (e) {
                    return e instanceof r ? e : Array.isArray(e) ? new r(e[0], e[1]) : e
                }
            }, {}],
            188: [function (e, t) {
                function r() {
                    f && u && (f = !1, u.length ? c = u.concat(c) : h = -1, c.length && n())
                }

                function n() {
                    if (!f) {
                        var e = a(r);
                        f = !0;
                        for (var t = c.length; t;) {
                            for (u = c, c = []; ++h < t;) u && u[h].run();
                            h = -1, t = c.length
                        }
                        u = null, f = !1, s(e)
                    }
                }

                function i(e, t) {
                    this.fun = e, this.array = t
                }

                function o() {}
                var a, s, l = t.exports = {};
                ! function () {
                    try {
                        a = setTimeout
                    } catch (e) {
                        a = function () {
                            throw new Error("setTimeout is not defined")
                        }
                    }
                    try {
                        s = clearTimeout
                    } catch (e) {
                        s = function () {
                            throw new Error("clearTimeout is not defined")
                        }
                    }
                }();
                var u, c = [],
                    f = !1,
                    h = -1;
                l.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    c.push(new i(e, t)), 1 !== c.length || f || a(n, 0)
                }, i.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = o, l.addListener = o, l.once = o, l.off = o, l.removeListener = o, l.removeAllListeners = o, l.emit = o, l.binding = function () {
                    throw new Error("process.binding is not supported")
                }, l.cwd = function () {
                    return "/"
                }, l.chdir = function () {
                    throw new Error("process.chdir is not supported")
                }, l.umask = function () {
                    return 0
                }
            }, {}],
            189: [function (e, t) {
                "use stric";
                var r = "\\/\\*",
                    n = "\\/\\*(?!\\*?\\!)",
                    i = "(.|[\\r\\n]|\\n)*?\\*\\/\\n?\\n?",
                    o = /(^|[^\S\n])(?:\/\/)([\s\S]+?)$/gm,
                    a = /(^|[^\S\n])(?:\/\/[^!])([\s\S]+?)$/gm,
                    s = t.exports = function (e, t) {
                        return e ? s.block(s.line(e, t), t) : ""
                    };
                s.block = function (e, t) {
                    t = t || {};
                    var o = new RegExp(r + i, "gm");
                    return t.safe && (o = new RegExp(n + i, "gm")), e ? e.replace(o, "") : ""
                }, s.line = function (e, t) {
                    t = t || {};
                    var r = o;
                    return t.safe && (r = a), e ? e.replace(r, "") : ""
                }
            }, {}],
            190: [function (e, t) {
                ! function () {
                    function e(e, t) {
                        function r(t) {
                            var r, n = e.arcs[0 > t ? ~t : t],
                                i = n[0];
                            return e.transform ? (r = [0, 0], n.forEach(function (e) {
                                r[0] += e[0], r[1] += e[1]
                            })) : r = n[n.length - 1], 0 > t ? [r, i] : [i, r]
                        }

                        function n(e, t) {
                            for (var r in e) {
                                var n = e[r];
                                delete t[n.start], delete n.start, delete n.end, n.forEach(function (e) {
                                    i[0 > e ? ~e : e] = 1
                                }), s.push(n)
                            }
                        }
                        var i = {},
                            o = {},
                            a = {},
                            s = [],
                            l = -1;
                        return t.forEach(function (r, n) {
                            var i, o = e.arcs[0 > r ? ~r : r];
                            o.length < 3 && !o[1][0] && !o[1][1] && (i = t[++l], t[l] = r, t[n] = i)
                        }), t.forEach(function (e) {
                            var t, n, i = r(e),
                                s = i[0],
                                l = i[1];
                            if (t = a[s])
                                if (delete a[t.end], t.push(e), t.end = l, n = o[l]) {
                                    delete o[n.start];
                                    var u = n === t ? t : t.concat(n);
                                    o[u.start = t.start] = a[u.end = n.end] = u
                                } else o[t.start] = a[t.end] = t;
                            else if (t = o[l])
                                if (delete o[t.start], t.unshift(e), t.start = s, n = a[s]) {
                                    delete a[n.end];
                                    var c = n === t ? t : n.concat(t);
                                    o[c.start = n.start] = a[c.end = t.end] = c
                                } else o[t.start] = a[t.end] = t;
                            else t = [e], o[t.start = s] = a[t.end = l] = t
                        }), n(a, o), n(o, a), t.forEach(function (e) {
                            i[0 > e ? ~e : e] || s.push([e])
                        }), s
                    }

                    function r(t, r, n) {
                        function i(e) {
                            var t = 0 > e ? ~e : e;
                            (c[t] || (c[t] = [])).push({
                                i: e,
                                g: u
                            })
                        }

                        function o(e) {
                            e.forEach(i)
                        }

                        function a(e) {
                            e.forEach(o)
                        }

                        function s(e) {
                            "GeometryCollection" === e.type ? e.geometries.forEach(s) : e.type in f && (u = e, f[e.type](e.arcs))
                        }
                        var l = [];
                        if (arguments.length > 1) {
                            var u, c = [],
                                f = {
                                    LineString: o,
                                    MultiLineString: a,
                                    Polygon: a,
                                    MultiPolygon: function (e) {
                                        e.forEach(a)
                                    }
                                };
                            s(r), c.forEach(arguments.length < 3 ? function (e) {
                                l.push(e[0].i)
                            } : function (e) {
                                n(e[0].g, e[e.length - 1].g) && l.push(e[0].i)
                            })
                        } else
                            for (var h = 0, d = t.arcs.length; d > h; ++h) l.push(h);
                        return {
                            type: "MultiLineString",
                            arcs: e(t, l)
                        }
                    }

                    function i(t, r) {
                        function i(e) {
                            e.forEach(function (t) {
                                t.forEach(function (t) {
                                    (a[t = 0 > t ? ~t : t] || (a[t] = [])).push(e)
                                })
                            }), l.push(e)
                        }

                        function o(e) {
                            return h(s(t, {
                                type: "Polygon",
                                arcs: [e]
                            }).coordinates[0]) > 0
                        }
                        var a = {},
                            l = [],
                            u = [];
                        return r.forEach(function (e) {
                            "Polygon" === e.type ? i(e.arcs) : "MultiPolygon" === e.type && e.arcs.forEach(i)
                        }), l.forEach(function (e) {
                            if (!e._) {
                                var t = [],
                                    r = [e];
                                for (e._ = 1, u.push(t); e = r.pop();) t.push(e), e.forEach(function (e) {
                                    e.forEach(function (e) {
                                        a[0 > e ? ~e : e].forEach(function (e) {
                                            e._ || (e._ = 1, r.push(e))
                                        })
                                    })
                                })
                            }
                        }), l.forEach(function (e) {
                            delete e._
                        }), {
                            type: "MultiPolygon",
                            arcs: u.map(function (r) {
                                var i = [];
                                if (r.forEach(function (e) {
                                        e.forEach(function (e) {
                                            e.forEach(function (e) {
                                                a[0 > e ? ~e : e].length < 2 && i.push(e)
                                            })
                                        })
                                    }), i = e(t, i), (n = i.length) > 1)
                                    for (var s, l = o(r[0][0]), u = 0; n > u; ++u)
                                        if (l === o(i[u])) {
                                            s = i[0], i[0] = i[u], i[u] = s;
                                            break
                                        }
                                return i
                            })
                        }
                    }

                    function o(e, t) {
                        return "GeometryCollection" === t.type ? {
                            type: "FeatureCollection",
                            features: t.geometries.map(function (t) {
                                return a(e, t)
                            })
                        } : a(e, t)
                    }

                    function a(e, t) {
                        var r = {
                            type: "Feature",
                            id: t.id,
                            properties: t.properties || {},
                            geometry: s(e, t)
                        };
                        return null == t.id && delete r.id, r
                    }

                    function s(e, t) {
                        function r(e, t) {
                            t.length && t.pop();
                            for (var r, n = c[0 > e ? ~e : e], i = 0, o = n.length; o > i; ++i) t.push(r = n[i].slice()), u(r, i);
                            0 > e && l(t, o)
                        }

                        function n(e) {
                            return e = e.slice(), u(e, 0), e
                        }

                        function i(e) {
                            for (var t = [], n = 0, i = e.length; i > n; ++n) r(e[n], t);
                            return t.length < 2 && t.push(t[0].slice()), t
                        }

                        function o(e) {
                            for (var t = i(e); t.length < 4;) t.push(t[0].slice());
                            return t
                        }

                        function a(e) {
                            return e.map(o)
                        }

                        function s(e) {
                            var t = e.type;
                            return "GeometryCollection" === t ? {
                                type: t,
                                geometries: e.geometries.map(s)
                            } : t in f ? {
                                type: t,
                                coordinates: f[t](e)
                            } : null
                        }
                        var u = g(e.transform),
                            c = e.arcs,
                            f = {
                                Point: function (e) {
                                    return n(e.coordinates)
                                },
                                MultiPoint: function (e) {
                                    return e.coordinates.map(n)
                                },
                                LineString: function (e) {
                                    return i(e.arcs)
                                },
                                MultiLineString: function (e) {
                                    return e.arcs.map(i)
                                },
                                Polygon: function (e) {
                                    return a(e.arcs)
                                },
                                MultiPolygon: function (e) {
                                    return e.arcs.map(a)
                                }
                            };
                        return s(t)
                    }

                    function l(e, t) {
                        for (var r, n = e.length, i = n - t; i < --n;) r = e[i], e[i++] = e[n], e[n] = r
                    }

                    function u(e, t) {
                        for (var r = 0, n = e.length; n > r;) {
                            var i = r + n >>> 1;
                            e[i] < t ? r = i + 1 : n = i
                        }
                        return r
                    }

                    function c(e) {
                        function t(e, t) {
                            e.forEach(function (e) {
                                0 > e && (e = ~e);
                                var r = i[e];
                                r ? r.push(t) : i[e] = [t]
                            })
                        }

                        function r(e, r) {
                            e.forEach(function (e) {
                                t(e, r)
                            })
                        }

                        function n(e, t) {
                            "GeometryCollection" === e.type ? e.geometries.forEach(function (e) {
                                n(e, t)
                            }) : e.type in a && a[e.type](e.arcs, t)
                        }
                        var i = {},
                            o = e.map(function () {
                                return []
                            }),
                            a = {
                                LineString: t,
                                MultiLineString: r,
                                Polygon: r,
                                MultiPolygon: function (e, t) {
                                    e.forEach(function (e) {
                                        r(e, t)
                                    })
                                }
                            };
                        e.forEach(n);
                        for (var s in i)
                            for (var l = i[s], c = l.length, f = 0; c > f; ++f)
                                for (var h = f + 1; c > h; ++h) {
                                    var d, p = l[f],
                                        m = l[h];
                                    (d = o[p])[s = u(d, m)] !== m && d.splice(s, 0, m), (d = o[m])[s = u(d, p)] !== p && d.splice(s, 0, p)
                                }
                        return o
                    }

                    function f(e, t) {
                        function r(e) {
                            o.remove(e), e[1][2] = t(e), o.push(e)
                        }
                        var n = g(e.transform),
                            i = v(e.transform),
                            o = m();
                        return t || (t = d), e.arcs.forEach(function (e) {
                            for (var a, s, l = [], u = 0, c = 0, f = e.length; f > c; ++c) s = e[c], n(e[c] = [s[0], s[1], 1 / 0], c);
                            for (var c = 1, f = e.length - 1; f > c; ++c) a = e.slice(c - 1, c + 2), a[1][2] = t(a), l.push(a), o.push(a);
                            for (var c = 0, f = l.length; f > c; ++c) a = l[c], a.previous = l[c - 1], a.next = l[c + 1];
                            for (; a = o.pop();) {
                                var h = a.previous,
                                    d = a.next;
                                a[1][2] < u ? a[1][2] = u : u = a[1][2], h && (h.next = d, h[2] = a[2], r(h)), d && (d.previous = h, d[0] = a[0], r(d))
                            }
                            e.forEach(i)
                        }), e
                    }

                    function h(e) {
                        for (var t, r = -1, n = e.length, i = e[n - 1], o = 0; ++r < n;) t = i, i = e[r], o += t[0] * i[1] - t[1] * i[0];
                        return .5 * o
                    }

                    function d(e) {
                        var t = e[0],
                            r = e[1],
                            n = e[2];
                        return Math.abs((t[0] - n[0]) * (r[1] - t[1]) - (t[0] - r[0]) * (n[1] - t[1]))
                    }

                    function p(e, t) {
                        return e[1][2] - t[1][2]
                    }

                    function m() {
                        function e(e, t) {
                            for (; t > 0;) {
                                var r = (t + 1 >> 1) - 1,
                                    i = n[r];
                                if (p(e, i) >= 0) break;
                                n[i._ = t] = i, n[e._ = t = r] = e
                            }
                        }

                        function t(e, t) {
                            for (;;) {
                                var r = t + 1 << 1,
                                    o = r - 1,
                                    a = t,
                                    s = n[a];
                                if (i > o && p(n[o], s) < 0 && (s = n[a = o]), i > r && p(n[r], s) < 0 && (s = n[a = r]), a === t) break;
                                n[s._ = t] = s, n[e._ = t = a] = e
                            }
                        }
                        var r = {},
                            n = [],
                            i = 0;
                        return r.push = function (t) {
                            return e(n[t._ = i] = t, i++), i
                        }, r.pop = function () {
                            if (!(0 >= i)) {
                                var e, r = n[0];
                                return --i > 0 && (e = n[i], t(n[e._ = 0] = e, 0)), r
                            }
                        }, r.remove = function (r) {
                            var o, a = r._;
                            if (n[a] === r) return a !== --i && (o = n[i], (p(o, r) < 0 ? e : t)(n[o._ = a] = o, a)), a
                        }, r
                    }

                    function g(e) {
                        if (!e) return _;
                        var t, r, n = e.scale[0],
                            i = e.scale[1],
                            o = e.translate[0],
                            a = e.translate[1];
                        return function (e, s) {
                            s || (t = r = 0), e[0] = (t += e[0]) * n + o, e[1] = (r += e[1]) * i + a
                        }
                    }

                    function v(e) {
                        if (!e) return _;
                        var t, r, n = e.scale[0],
                            i = e.scale[1],
                            o = e.translate[0],
                            a = e.translate[1];
                        return function (e, s) {
                            s || (t = r = 0);
                            var l = (e[0] - o) / n | 0,
                                u = (e[1] - a) / i | 0;
                            e[0] = l - t, e[1] = u - r, t = l, r = u
                        }
                    }

                    function _() {}
                    var y = {
                        version: "1.6.19",
                        mesh: function (e) {
                            return s(e, r.apply(this, arguments))
                        },
                        meshArcs: r,
                        merge: function (e) {
                            return s(e, i.apply(this, arguments))
                        },
                        mergeArcs: i,
                        feature: o,
                        neighbors: c,
                        presimplify: f
                    };
                    "function" == typeof define && define.amd ? define(y) : "object" == typeof t && t.exports ? t.exports = y : this.topojson = y
                }()
            }, {}],
            191: [function (e, t, r) {
                (function (t, n) {
                    "use strict";

                    function i(e) {
                        if (e) {
                            var t = e.length || e.byteLength,
                                r = _.log2(t);
                            w[r].push(e)
                        }
                    }

                    function o(e) {
                        i(e.buffer)
                    }

                    function a(e) {
                        var e = _.nextPow2(e),
                            t = _.log2(e),
                            r = w[t];
                        return r.length > 0 ? r.pop() : new ArrayBuffer(e)
                    }

                    function s(e) {
                        return new Uint8Array(a(e), 0, e)
                    }

                    function l(e) {
                        return new Uint16Array(a(2 * e), 0, e)
                    }

                    function u(e) {
                        return new Uint32Array(a(4 * e), 0, e)
                    }

                    function c(e) {
                        return new Int8Array(a(e), 0, e)
                    }

                    function f(e) {
                        return new Int16Array(a(2 * e), 0, e)
                    }

                    function h(e) {
                        return new Int32Array(a(4 * e), 0, e)
                    }

                    function d(e) {
                        return new Float32Array(a(4 * e), 0, e)
                    }

                    function p(e) {
                        return new Float64Array(a(8 * e), 0, e)
                    }

                    function m(e) {
                        return b ? new Uint8ClampedArray(a(e), 0, e) : s(e)
                    }

                    function g(e) {
                        return new DataView(a(e), 0, e)
                    }

                    function v(e) {
                        e = _.nextPow2(e);
                        var t = _.log2(e),
                            r = A[t];
                        return r.length > 0 ? r.pop() : new n(e)
                    }
                    var _ = e("bit-twiddle"),
                        y = e("dup");
                    t.__TYPEDARRAY_POOL || (t.__TYPEDARRAY_POOL = {
                        UINT8: y([32, 0]),
                        UINT16: y([32, 0]),
                        UINT32: y([32, 0]),
                        INT8: y([32, 0]),
                        INT16: y([32, 0]),
                        INT32: y([32, 0]),
                        FLOAT: y([32, 0]),
                        DOUBLE: y([32, 0]),
                        DATA: y([32, 0]),
                        UINT8C: y([32, 0]),
                        BUFFER: y([32, 0])
                    });
                    var b = "undefined" != typeof Uint8ClampedArray,
                        x = t.__TYPEDARRAY_POOL;
                    x.UINT8C || (x.UINT8C = y([32, 0])), x.BUFFER || (x.BUFFER = y([32, 0]));
                    var w = x.DATA,
                        A = x.BUFFER;
                    r.free = function (e) {
                        if (n.isBuffer(e)) A[_.log2(e.length)].push(e);
                        else {
                            if ("[object ArrayBuffer]" !== Object.prototype.toString.call(e) && (e = e.buffer), !e) return;
                            var t = e.length || e.byteLength,
                                r = 0 | _.log2(t);
                            w[r].push(e)
                        }
                    }, r.freeUint8 = r.freeUint16 = r.freeUint32 = r.freeInt8 = r.freeInt16 = r.freeInt32 = r.freeFloat32 = r.freeFloat = r.freeFloat64 = r.freeDouble = r.freeUint8Clamped = r.freeDataView = o, r.freeArrayBuffer = i, r.freeBuffer = function (e) {
                        A[_.log2(e.length)].push(e)
                    }, r.malloc = function (e, t) {
                        if (void 0 === t || "arraybuffer" === t) return a(e);
                        switch (t) {
                        case "uint8":
                            return s(e);
                        case "uint16":
                            return l(e);
                        case "uint32":
                            return u(e);
                        case "int8":
                            return c(e);
                        case "int16":
                            return f(e);
                        case "int32":
                            return h(e);
                        case "float":
                        case "float32":
                            return d(e);
                        case "double":
                        case "float64":
                            return p(e);
                        case "uint8_clamped":
                            return m(e);
                        case "buffer":
                            return v(e);
                        case "data":
                        case "dataview":
                            return g(e);
                        default:
                            return null
                        }
                        return null
                    }, r.mallocArrayBuffer = a, r.mallocUint8 = s, r.mallocUint16 = l, r.mallocUint32 = u, r.mallocInt8 = c, r.mallocInt16 = f, r.mallocInt32 = h, r.mallocFloat32 = r.mallocFloat = d, r.mallocFloat64 = r.mallocDouble = p, r.mallocUint8Clamped = m, r.mallocDataView = g, r.mallocBuffer = v, r.clearCache = function () {
                        for (var e = 0; 32 > e; ++e) x.UINT8[e].length = 0, x.UINT16[e].length = 0, x.UINT32[e].length = 0, x.INT8[e].length = 0, x.INT16[e].length = 0, x.INT32[e].length = 0, x.FLOAT[e].length = 0, x.DOUBLE[e].length = 0, x.UINT8C[e].length = 0, w[e].length = 0, A[e].length = 0
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer)
            }, {
                "bit-twiddle": 29,
                buffer: 38,
                dup: 135
            }],
            192: [function (e, t) {
                t.exports.VectorTile = e("./lib/vectortile.js"), t.exports.VectorTileFeature = e("./lib/vectortilefeature.js"), t.exports.VectorTileLayer = e("./lib/vectortilelayer.js")
            }, {
                "./lib/vectortile.js": 193,
                "./lib/vectortilefeature.js": 194,
                "./lib/vectortilelayer.js": 195
            }],
            193: [function (e, t) {
                "use strict";

                function r(e, t) {
                    this.layers = e.readFields(n, {}, t)
                }

                function n(e, t, r) {
                    if (3 === e) {
                        var n = new i(r, r.readVarint() + r.pos);
                        n.length && (t[n.name] = n)
                    }
                }
                var i = e("./vectortilelayer");
                t.exports = r
            }, {
                "./vectortilelayer": 195
            }],
            194: [function (e, t) {
                "use strict";

                function r(e, t, r, i, o) {
                    this.properties = {}, this.extent = r, this.type = 0, this._pbf = e, this._geometry = -1, this._keys = i, this._values = o, e.readFields(n, this, t)
                }

                function n(e, t, r) {
                    1 == e ? t._id = r.readVarint() : 2 == e ? i(r, t) : 3 == e ? t.type = r.readVarint() : 4 == e && (t._geometry = r.pos)
                }

                function i(e, t) {
                    for (var r = e.readVarint() + e.pos; e.pos < r;) {
                        var n = t._keys[e.readVarint()],
                            i = t._values[e.readVarint()];
                        t.properties[n] = i
                    }
                }
                var o = e("point-geometry");
                t.exports = r, r.types = ["Unknown", "Point", "LineString", "Polygon"], r.prototype.loadGeometry = function () {
                    var e = this._pbf;
                    e.pos = this._geometry;
                    for (var t, r = e.readVarint() + e.pos, n = 1, i = 0, a = 0, s = 0, l = []; e.pos < r;) {
                        if (!i) {
                            var u = e.readVarint();
                            n = 7 & u, i = u >> 3
                        }
                        if (i--, 1 === n || 2 === n) a += e.readSVarint(), s += e.readSVarint(), 1 === n && (t && l.push(t), t = []), t.push(new o(a, s));
                        else {
                            if (7 !== n) throw new Error("unknown command " + n);
                            t.push(t[0].clone())
                        }
                    }
                    return t && l.push(t), l
                }, r.prototype.bbox = function () {
                    var e = this._pbf;
                    e.pos = this._geometry;
                    for (var t = e.readVarint() + e.pos, r = 1, n = 0, i = 0, o = 0, a = 1 / 0, s = -1 / 0, l = 1 / 0, u = -1 / 0; e.pos < t;) {
                        if (!n) {
                            var c = e.readVarint();
                            r = 7 & c, n = c >> 3
                        }
                        if (n--, 1 === r || 2 === r) i += e.readSVarint(), o += e.readSVarint(), a > i && (a = i), i > s && (s = i), l > o && (l = o), o > u && (u = o);
                        else if (7 !== r) throw new Error("unknown command " + r)
                    }
                    return [a, l, s, u]
                }, r.prototype.toGeoJSON = function (e, t, n) {
                    for (var i = this.extent * Math.pow(2, n), o = this.extent * e, a = this.extent * t, s = this.loadGeometry(), l = r.types[this.type], u = 0; u < s.length; u++)
                        for (var c = s[u], f = 0; f < c.length; f++) {
                            var h = c[f],
                                d = 180 - 360 * (h.y + a) / i;
                            c[f] = [360 * (h.x + o) / i - 180, 360 / Math.PI * Math.atan(Math.exp(d * Math.PI / 180)) - 90]
                        }
                    return "Point" === l && 1 === s.length ? s = s[0][0] : "Point" === l ? (s = s[0], l = "MultiPoint") : "LineString" === l && 1 === s.length ? s = s[0] : "LineString" === l && (l = "MultiLineString"), {
                        type: "Feature",
                        geometry: {
                            type: l,
                            coordinates: s
                        },
                        properties: this.properties
                    }
                }
            }, {
                "point-geometry": 187
            }],
            195: [function (e, t) {
                "use strict";

                function r(e, t) {
                    this.version = 1, this.name = null, this.extent = 4096, this.length = 0, this._pbf = e, this._keys = [], this._values = [], this._features = [], e.readFields(n, this, t), this.length = this._features.length
                }

                function n(e, t, r) {
                    15 === e ? t.version = r.readVarint() : 1 === e ? t.name = r.readString() : 5 === e ? t.extent = r.readVarint() : 2 === e ? t._features.push(r.pos) : 3 === e ? t._keys.push(r.readString()) : 4 === e && t._values.push(i(r))
                }

                function i(e) {
                    for (var t = null, r = e.readVarint() + e.pos; e.pos < r;) {
                        var n = e.readVarint() >> 3;
                        t = 1 === n ? e.readString() : 2 === n ? e.readFloat() : 3 === n ? e.readDouble() : 4 === n ? e.readVarint64() : 5 === n ? e.readVarint() : 6 === n ? e.readSVarint() : 7 === n ? e.readBoolean() : null
                    }
                    return t
                }
                var o = e("./vectortilefeature.js");
                t.exports = r, r.prototype.feature = function (e) {
                    if (0 > e || e >= this._features.length) throw new Error("feature index out of bounds");
                    this._pbf.pos = this._features[e];
                    var t = this._pbf.readVarint() + this._pbf.pos;
                    return new o(this._pbf, t, this.extent, this._keys, this._values)
                }
            }, {
                "./vectortilefeature.js": 194
            }],
            196: [function (e, t, r) {
                "use strict";

                function n(e, t, r) {
                    var n = l[0],
                        i = l[1];
                    return e[0] <= n.x + r && t[0] <= n.x + r || e[0] >= i.x - r && t[0] >= i.x - r || e[1] >= n.y - r && t[1] >= n.y - r || e[1] <= i.y + r && t[1] <= i.y + r ? !0 : !1
                }

                function i(e, t) {
                    t = t || 0;
                    var r = l[0],
                        n = l[1];
                    return e[0] <= r.x + t || e[0] >= n.x - t || e[1] >= r.y - t || e[1] <= n.y + t
                }
                var o = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.outsideTile = n, r.isCoordOutsideTile = i;
                var a = e("../geo"),
                    s = o(a),
                    l = [{
                        x: 0,
                        y: 0
                    }, {
                        x: s["default"].tile_scale,
                        y: -s["default"].tile_scale
                    }];
                r.tile_bounds = l;
                var u = [0, 0, 1, 1];
                r.default_uvs = u
            }, {
                "../geo": 201,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            197: [function (e, t, r) {
                "use strict";

                function n(e, t, r, n, a) {
                    var s = n.texcoord_index,
                        l = n.position_index,
                        u = n.shape_index,
                        c = n.offset_index,
                        f = a.quad,
                        h = a.quad_normalize,
                        d = a.offset,
                        p = a.angle,
                        m = a.shape_w,
                        g = a.texcoord_scale,
                        v = a.texcoord_normalize;
                    h = h || 1;
                    var _ = f[0] / 2 * h,
                        y = f[1] / 2 * h,
                        b = [
                            [-_, -y],
                            [_, -y],
                            [_, y],
                            [-_, y]
                        ],
                        x = t.vertex_elements,
                        w = t.vertex_count,
                        A = void 0;
                    if (s) {
                        v = v || 1;
                        var T = g || o.default_uvs,
                            k = i(T, 4),
                            E = k[0],
                            R = k[1],
                            S = k[2],
                            M = k[3];
                        A = [
                            [E, R],
                            [S, R],
                            [S, M],
                            [E, M]
                        ]
                    }
                    for (var j = e.length, P = 0; j > P; P++) {
                        for (var N = e[P], z = 0; 4 > z; z++) s && (r[s + 0] = A[z][0] * v, r[s + 1] = A[z][1] * v), r[l + 0] = N[0], r[l + 1] = N[1], r[u + 0] = b[z][0], r[u + 1] = b[z][1], r[u + 2] = p, r[u + 3] = m, r[c + 0] = d[0], r[c + 1] = d[1], t.addVertex(r);
                        x.push(w + 0), x.push(w + 1), x.push(w + 2), x.push(w + 2), x.push(w + 3), x.push(w + 0), w += 4
                    }
                }
                var i = e("babel-runtime/helpers/sliced-to-array")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.buildQuadsForPoints = n;
                var o = e("./common")
            }, {
                "./common": 196,
                "babel-runtime/helpers/sliced-to-array": 24
            }],
            198: [function (e, t, r) {
                "use strict";

                function n(e, t, r, n) {
                    var i = n.texcoord_index,
                        s = n.texcoord_scale,
                        l = n.texcoord_normalize,
                        c = t.vertex_elements;
                    if (i) {
                        l = l || 1;
                        var f = s || h.default_uvs,
                            d = a(f, 4),
                            m = d[0],
                            g = d[1],
                            v = d[2],
                            _ = d[3]
                    }
                    for (var y = e.length, b = 0; y > b; b++) {
                        var x = t.vertex_count,
                            w = e[b];
                        if (i) var A = u["default"].findBoundingBox(w),
                            T = a(A, 4),
                            k = T[0],
                            E = T[1],
                            R = T[2],
                            S = T[3],
                            M = R - k,
                            j = S - E,
                            P = (v - m) / M,
                            N = (_ - g) / j;
                        for (var z = 0; z < w.length; z++)
                            for (var L = w[z], O = 0; O < L.length; O++) {
                                var I = L[O];
                                r[0] = I[0], r[1] = I[1], i && (r[i + 0] = ((I[0] - k) * P + m) * l, r[i + 1] = ((I[1] - E) * N + g) * l), t.addVertex(r)
                            }
                        for (var U = o(p["default"].flatten(w)), O = 0; O < U.length; O++) c.push(x + U[O])
                    }
                }

                function i(e, t, r, i, o, s, l, u, c) {
                    var d = c.remove_tile_edges,
                        p = c.tile_edge_tolerance,
                        g = c.texcoord_index,
                        v = c.texcoord_scale,
                        _ = c.texcoord_normalize,
                        y = c.winding,
                        b = t + (i || 0),
                        x = t + r;
                    s[2] = x, n(e, o, s, {
                        texcoord_index: g,
                        texcoord_scale: v,
                        texcoord_normalize: _
                    });
                    var w = o.vertex_elements,
                        A = o.vertex_count;
                    if (g) {
                        _ = _ || 1;
                        var T = v || h.default_uvs,
                            k = a(T, 4),
                            E = k[0],
                            R = k[1],
                            S = k[2],
                            M = k[3],
                            j = [
                                [E, M],
                                [E, R],
                                [S, R],
                                [S, M]
                            ]
                    }
                    for (var P = e.length, N = 0; P > N; N++)
                        for (var z = e[N], L = 0; L < z.length; L++)
                            for (var O = z[L], I = 0; I < O.length - 1; I++)
                                if (!d || !h.outsideTile(O[I], O[I + 1], p)) {
                                    var U = void 0,
                                        F = void 0;
                                    "CCW" === y ? (U = I, F = I + 1) : (U = I + 1, F = I);
                                    var D = [
                                            [O[F][0], O[F][1], x],
                                            [O[F][0], O[F][1], b],
                                            [O[U][0], O[U][1], b],
                                            [O[U][0], O[U][1], x]
                                        ],
                                        C = f["default"].normalize([O[F][0] - O[U][0], O[F][1] - O[U][1], 0]),
                                        $ = f["default"].cross(m, C);
                                    s[l + 0] = $[0] * u, s[l + 1] = $[1] * u, s[l + 2] = $[2] * u;
                                    for (var G = 0; G < D.length; G++) s[0] = D[G][0], s[1] = D[G][1], s[2] = D[G][2], g && (s[g + 0] = j[G][0] * _, s[g + 1] = j[G][1] * _), o.addVertex(s);
                                    w.push(A + 0), w.push(A + 1), w.push(A + 2), w.push(A + 2), w.push(A + 3), w.push(A + 0), A += 4
                                }
                }

                function o(e) {
                    return p["default"](e.vertices, e.holes, e.dimensions)
                }
                var a = e("babel-runtime/helpers/sliced-to-array")["default"],
                    s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.buildPolygons = n, r.buildExtrudedPolygons = i, r.triangulatePolygon = o;
                var l = e("../geo"),
                    u = s(l),
                    c = e("../vector"),
                    f = s(c),
                    h = e("./common"),
                    d = e("earcut"),
                    p = s(d),
                    m = [0, 0, 1]
            }, {
                "../geo": 201,
                "../vector": 259,
                "./common": 196,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24,
                earcut: 136
            }],
            199: [function (e, t, r) {
                "use strict";

                function n(e, t, r, n, o) {
                    var a = o.closed_polygon,
                        s = o.remove_tile_edges,
                        l = o.tile_edge_tolerance,
                        u = o.texcoord_index,
                        c = (o.texcoord_scale, o.texcoord_width),
                        f = o.texcoord_ratio,
                        h = o.texcoord_normalize,
                        d = o.scaling_index,
                        p = o.scaling_normalize,
                        m = o.join,
                        g = o.cap,
                        v = o.miter_limit,
                        _ = g ? S[g] : S.butt,
                        y = m ? M[m] : M.miter;
                    if (y === M.miter) {
                        v = v || j.MITER_LIMIT;
                        var b = v * v
                    }
                    var x;
                    u && (h = h || j.TEXCOORD_NORMALIZE, f = f || j.TEXCOORD_RATIO, x = 1 / (c * f * P));
                    for (var w = {
                            closed_polygon: a,
                            remove_tile_edges: s,
                            tile_edge_tolerance: l,
                            miter_len_sq: b,
                            join_type: y,
                            cap_type: _,
                            vertex_data: r,
                            vertex_template: n,
                            half_width: t / 2,
                            scaling_index: d,
                            scaling_normalize: p,
                            v_scale: x,
                            texcoord_index: u,
                            texcoord_width: c,
                            texcoord_normalize: h
                        }, A = [], T = 0; T < e.length; T++) i(e[T], w, A);
                    for (var T = 0; T < A.length; T++) i(A[T], w, A)
                }

                function i(e, t, r) {
                    if (!(e.length < 2)) {
                        var n, i, u, p, m = t.join_type,
                            g = t.cap_type,
                            _ = t.closed_polygon,
                            b = t.remove_tile_edges,
                            x = t.tile_edge_tolerance,
                            w = t.v_scale,
                            T = t.miter_len_sq,
                            k = 0;
                        if (_ && m === M.miter) {
                            var R = o(e);
                            if (0 !== R) {
                                var j = y(e, R);
                                return void r.push(j)
                            }
                        }
                        if (n = e[0], i = e[1], A["default"].isEqual(n, i)) return void(e.length > 2 && r.push(e.slice(1)));
                        if (p = A["default"].normalize(A["default"].perp(n, i)), b && E.outsideTile(n, i, x)) {
                            var P = a(e, 0, x);
                            return void(P && r.push(P))
                        }
                        _ ? (u = A["default"].normalize(A["default"].perp(e[e.length - 2], n)), s(n, u, p, m, t)) : (E.isCoordOutsideTile(n) || (v(n, k, p, g, !0, t), g !== S.butt && (k += .5 * w * t.texcoord_width)), d(n, p, [1, k], t), d(n, A["default"].neg(p), [0, k], t)), k += w * A["default"].length(A["default"].sub(i, n));
                        for (var N = 1; N < e.length - 1; N++) {
                            var z = N,
                                L = N + 1;
                            if (n = e[z], i = e[L], !A["default"].isEqual(n, i)) {
                                if (b && E.outsideTile(n, i, x)) {
                                    d(n, p, [1, k], t), d(n, A["default"].neg(p), [0, k], t), h(1, t);
                                    var O = a(e, z + 1, x);
                                    return void(O && r.push(O))
                                }
                                u = p, p = A["default"].normalize(A["default"].perp(n, i)), m === M.miter ? c(k, n, u, p, T, !1, t) : f(m, k, n, u, p, !1, t), k += w * A["default"].length(A["default"].sub(i, n))
                            }
                        }
                        n = i, u = p, _ ? (p = A["default"].normalize(A["default"].perp(n, e[1])), l(n, u, p, m, k, t)) : (d(n, u, [1, k], t), d(n, A["default"].neg(u), [0, k], t), h(1, t), E.isCoordOutsideTile(n) || v(n, k, u, g, !1, t))
                    }
                }

                function o(e) {
                    if (E.isCoordOutsideTile(e[0])) return 0;
                    for (var t = 0; t < e.length; t++) {
                        var r = e[e.length - 1 - t];
                        if (E.isCoordOutsideTile(r)) return e.length - 1 - t
                    }
                    return 0
                }

                function a(e, t, r) {
                    for (var n = t; e[n + 1] && E.outsideTile(e[n], e[n + 1], r);) n++;
                    return e.length - n >= 2 ? e.slice(n) : !1
                }

                function s(e, t, r, n, i) {
                    if (void 0 === n || E.isCoordOutsideTile(e)) d(e, r, [1, 0], i), d(e, A["default"].neg(r), [0, 0], i);
                    else {
                        var o = 0;
                        n === M.miter ? c(o, e, t, r, i.miter_len_sq, !0, i) : f(n, o, e, t, r, !0, i)
                    }
                }

                function l(e, t, r, n, i, o) {
                    if (E.isCoordOutsideTile(e)) d(e, t, [1, i], o), d(e, A["default"].neg(t), [0, i], o), h(1, o);
                    else {
                        var a = u(t, r);
                        n === M.miter && A["default"].lengthSq(a) > o.miter_len_sq && (n = M.bevel), n === M.miter ? (d(e, a, [1, i], o), d(e, A["default"].neg(a), [0, i], o), h(1, o)) : (d(e, t, [1, i], o), d(e, A["default"].neg(t), [0, i], o), h(1, o))
                    }
                }

                function u(e, t) {
                    var r = A["default"].normalize(A["default"].add(e, t)),
                        n = 2 / (1 + Math.abs(A["default"].dot(e, r)));
                    return A["default"].mult(r, n * n)
                }

                function c(e, t, r, n, i, o, a) {
                    var s = u(r, n);
                    A["default"].lengthSq(s) > i ? f(M.miter, e, t, r, n, o, a) : (d(t, s, [1, e], a), d(t, A["default"].neg(s), [0, e], a), o || h(1, a))
                }

                function f(e, t, r, n, i, o, a) {
                    var s = u(n, i),
                        l = i[0] * n[1] - i[1] * n[0] > 0;
                    l ? (d(r, s, [1, t], a), d(r, A["default"].neg(n), [0, t], a), o || h(1, a), e === M.bevel ? g(r, A["default"].neg(n), s, A["default"].neg(i), [0, t], [1, t], [0, t], a) : e === M.round && m(r, A["default"].neg(n), s, A["default"].neg(i), [0, t], [1, t], [0, t], !1, a), d(r, s, [1, t], a), d(r, A["default"].neg(i), [0, t], a)) : (d(r, n, [1, t], a), d(r, A["default"].neg(s), [0, t], a), o || h(1, a), e === M.bevel ? g(r, n, A["default"].neg(s), i, [1, t], [0, t], [1, t], a) : e === M.round && m(r, n, A["default"].neg(s), i, [1, t], [0, t], [1, t], !1, a), d(r, i, [1, t], a), d(r, A["default"].neg(s), [0, t], a))
                }

                function h(e, t) {
                    for (var r = t.vertex_data.vertex_elements, n = t.vertex_data.vertex_count, i = n - 2 * e - 2, o = 0; e > o; o++) r.push(i + 2 * o + 2), r.push(i + 2 * o + 1), r.push(i + 2 * o + 0), r.push(i + 2 * o + 2), r.push(i + 2 * o + 3), r.push(i + 2 * o + 1)
                }

                function d(e, t, r, n) {
                    var i = n.vertex_template,
                        o = n.vertex_data;
                    p(i, e, r, t, n), o.addVertex(i)
                }

                function p(e, t, r, n, i) {
                    e[0] = t[0], e[1] = t[1], i.texcoord_index && r && (e[i.texcoord_index + 0] = r[0] * i.texcoord_normalize, e[i.texcoord_index + 1] = r[1] * i.texcoord_normalize), i.scaling_index && (e[i.scaling_index + 0] = n[0] * i.scaling_normalize, e[i.scaling_index + 1] = n[1] * i.scaling_normalize, e[i.scaling_index + 2] = i.half_width)
                }

                function m(e, t, r, n, i, o, a, s, l) {
                    for (var u = t[0] * n[1] - t[1] * n[0], c = A["default"].dot(t, n), f = Math.atan2(u, c); f >= Math.PI;) f -= 2 * Math.PI;
                    var h = _(f, l.half_width);
                    if (!(1 > h)) {
                        var p = l.vertex_data.vertex_count,
                            m = l.vertex_data.vertex_elements;
                        d(e, r, o, l), d(e, t, i, l);
                        var g = t;
                        if (void 0 !== l.texcoord_index) {
                            var v;
                            if (s) {
                                v = [];
                                var y = A["default"].sub(i, o)
                            } else {
                                v = A["default"].set(i);
                                var b = A["default"].div(A["default"].sub(a, i), h)
                            }
                        }
                        for (var x = f / h, w = 0; h > w; w++) g = A["default"].rot(g, x), void 0 !== l.texcoord_index && (s ? (y = A["default"].rot(y, x), v[0] = y[0] + o[0], v[1] = y[1] * l.texcoord_width * l.v_scale + o[1]) : v = A["default"].add(v, b)), d(e, g, v, l), m.push(p + w + (u > 0 ? 2 : 1)), m.push(p), m.push(p + w + (u > 0 ? 1 : 2))
                    }
                }

                function g(e, t, r, n, i, o, a, s) {
                    var l = s.vertex_data.vertex_count;
                    d(e, r, o, s), d(e, t, i, s), d(e, n, a, s);
                    var u = t[0] * n[1] - t[1] * n[0] > 0,
                        c = s.vertex_data.vertex_elements;
                    u ? (c.push(l + 2), c.push(l + 0), c.push(l + 1)) : (c.push(l + 1), c.push(l + 0), c.push(l + 2))
                }

                function v(e, t, r, n, i, o) {
                    var a = A["default"].neg(r);
                    switch (n) {
                    case S.square:
                        var s;
                        i ? (s = [r[1], -r[0]], d(e, A["default"].add(r, s), [1, t], o), d(e, A["default"].add(a, s), [0, t], o), t += .5 * o.texcoord_width * o.v_scale, d(e, r, [1, t], o), d(e, a, [0, t], o)) : (s = [-r[1], r[0]], d(e, r, [1, t], o), d(e, a, [0, t], o), t += .5 * o.texcoord_width * o.v_scale, d(e, A["default"].add(r, s), [1, t], o), d(e, A["default"].add(a, s), [0, t], o)), h(1, o);
                        break;
                    case S.round:
                        var l, u, c, f, p;
                        i ? (l = r, u = a, void 0 !== o.texcoord_index && (t += .5 * o.texcoord_width * o.v_scale, c = [1, t], f = [0, t], p = [.5, t])) : (l = a, u = r, void 0 !== o.texcoord_index && (c = [0, t], f = [1, t], p = [.5, t])), m(e, l, R, u, c, p, f, !0, o);
                        break;
                    case S.butt:
                        return
                    }
                }

                function _(e, t) {
                    0 > e && (e = -e);
                    var r = t > 2 * j.MIN_FAN_WIDTH ? b(t / j.MIN_FAN_WIDTH) : 1;
                    return Math.ceil(e / Math.PI * r)
                }

                function y(e, t) {
                    for (var r = [], n = 0; n < e.length; n++) {
                        var i = (n + t) % e.length;
                        0 !== i && r.push(e[i])
                    }
                    return r.push(r[0]), r
                }
                var b = e("babel-runtime/core-js/math/log2")["default"],
                    x = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.buildPolylines = n;
                var w = e("../vector"),
                    A = x(w),
                    T = e("../geo"),
                    k = x(T),
                    E = e("./common"),
                    R = [0, 0],
                    S = {
                        butt: 0,
                        square: 1,
                        round: 2
                    },
                    M = {
                        miter: 0,
                        bevel: 1,
                        round: 2
                    },
                    j = {
                        MITER_LIMIT: 3,
                        TEXCOORD_NORMALIZE: 1,
                        TEXCOORD_RATIO: 1,
                        MIN_FAN_WIDTH: 5
                    },
                    P = k["default"].tile_scale
            }, {
                "../geo": 201,
                "../vector": 259,
                "./common": 196,
                "babel-runtime/core-js/math/log2": 5,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            200: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/get")["default"],
                    a = e("babel-runtime/helpers/inherits")["default"],
                    s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var l = e("./utils/utils"),
                    u = s(l),
                    c = e("./gl/shader_program"),
                    f = s(c),
                    h = e("./utils/gl-matrix"),
                    d = function () {
                        function e(t, r) {
                            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            i(this, e), this.view = r, this.position = n.position, this.zoom = n.zoom
                        }
                        return n(e, [{
                            key: "update",
                            value: function () {}
                        }, {
                            key: "setupProgram",
                            value: function () {}
                        }, {
                            key: "updateView",
                            value: function () {
                                if (this.position || this.zoom) {
                                    var e = {};
                                    this.position && (e = {
                                        lng: this.position[0],
                                        lat: this.position[1],
                                        zoom: this.position[2]
                                    }), this.zoom && (e.zoom = this.zoom), this.view.setView(e)
                                }
                            }
                        }, {
                            key: "setupMatrices",
                            value: function (e, t) {
                                h.mat4.multiply(e.model_view32, this.view_matrix, e.model), t.uniform("Matrix4fv", "u_modelView", e.model_view32), h.mat3.normalFromMat4(e.normal32, e.model_view32), h.mat3.invert(e.inverse_normal32, e.normal32), t.uniform("Matrix3fv", "u_normalMatrix", e.normal32), t.uniform("Matrix3fv", "u_inverseNormalMatrix", e.inverse_normal32)
                            }
                        }], [{
                            key: "create",
                            value: function (e, t, r) {
                                switch (r.type) {
                                case "isometric":
                                    return new m(e, t, r);
                                case "flat":
                                    return new g(e, t, r);
                                case "perspective":
                                default:
                                    return new p(e, t, r)
                                }
                            }
                        }]), e
                    }();
                r["default"] = d;
                var p = function (e) {
                        function t(e, r) {
                            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            i(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, r, n), this.type = "perspective", this.focal_length = n.focal_length, this.fov = n.fov, this.focal_length || this.fov || (this.focal_length = [
                                [16, 2],
                                [17, 2.5],
                                [18, 3],
                                [19, 4],
                                [20, 6]
                            ]), this.vanishing_point = n.vanishing_point || [0, 0], this.vanishing_point = this.vanishing_point.map(parseFloat), this.vanishing_point_skew = [], this.position_meters = null, this.view_matrix = new Float64Array(16), this.projection_matrix = new Float32Array(16), f["default"].replaceBlock("camera", "\n            uniform mat4 u_projection;\n            uniform vec3 u_eye;\n            uniform vec2 u_vanishing_point;\n\n            void cameraProjection (inout vec4 position) {\n                position = u_projection * position;\n            }")
                        }
                        return a(t, e), n(t, [{
                            key: "constrainCamera",
                            value: function (e) {
                                var t = e.view_height,
                                    r = e.height,
                                    n = e.focal_length,
                                    i = e.fov;
                                return r ? (n = 2 * r / t, i = 2 * Math.atan(1 / n)) : (n ? i = 2 * Math.atan(1 / n) : i && (i = i * Math.PI / 180, n = 1 / Math.tan(i / 2)), r = t / 2 * n), {
                                    view_height: t,
                                    height: r,
                                    focal_length: n,
                                    fov: i
                                }
                            }
                        }, {
                            key: "updateMatrices",
                            value: function () {
                                var e = this.view.size.css.height * this.view.meters_per_pixel,
                                    t = this.constrainCamera({
                                        view_height: e,
                                        focal_length: u["default"].interpolate(this.view.zoom, this.focal_length),
                                        fov: u["default"].interpolate(this.view.zoom, this.fov)
                                    }),
                                    r = t.height,
                                    n = t.fov,
                                    i = [this.view.center.meters.x, this.view.center.meters.y, r];
                                this.position_meters = i, h.mat4.lookAt(this.view_matrix, h.vec3.fromValues(i[0], i[1], 0), h.vec3.fromValues(i[0], i[1], -1), h.vec3.fromValues(0, 1, 0)), h.mat4.perspective(this.projection_matrix, n, this.view.aspect, 1, 2 * r), this.vanishing_point_skew[0] = this.vanishing_point[0] / this.view.size.css.width, this.vanishing_point_skew[1] = this.vanishing_point[1] / this.view.size.css.height, this.projection_matrix[8] = -this.vanishing_point_skew[0], this.projection_matrix[9] = -this.vanishing_point_skew[1], h.mat4.translate(this.projection_matrix, this.projection_matrix, h.vec3.fromValues(e / 2 * this.view.aspect * -this.vanishing_point_skew[0], e / 2 * -this.vanishing_point_skew[1], 0)), h.mat4.translate(this.projection_matrix, this.projection_matrix, h.vec3.fromValues(0, 0, -r))
                            }
                        }, {
                            key: "update",
                            value: function () {
                                o(Object.getPrototypeOf(t.prototype), "update", this).call(this), this.updateMatrices()
                            }
                        }, {
                            key: "setupProgram",
                            value: function (e) {
                                e.uniform("Matrix4fv", "u_projection", this.projection_matrix), e.uniform("3f", "u_eye", [0, 0, this.position_meters[2]]), e.uniform("2fv", "u_vanishing_point", this.vanishing_point_skew)
                            }
                        }]), t
                    }(d),
                    m = function (e) {
                        function t(e, r) {
                            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            i(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, r, n), this.type = "isometric", this.axis = n.axis || {
                                x: 0,
                                y: 1
                            }, 2 === this.axis.length && (this.axis = {
                                x: this.axis[0],
                                y: this.axis[1]
                            }), this.position_meters = null, this.viewport_height = null, this.view_matrix = new Float64Array(16), this.projection_matrix = new Float32Array(16), f["default"].replaceBlock("camera", "\n            uniform mat4 u_projection;\n            uniform vec3 u_eye;\n            uniform vec2 u_vanishing_point;\n\n            void cameraProjection (inout vec4 position) {\n                position = u_projection * position;\n                // position.xy += position.z * u_isometric_axis;\n\n                // Reverse z for depth buffer so up is negative,\n                // and scale down values so objects higher than one screen height will not get clipped\n                // pull forward slightly to avoid going past far clipping plane\n                position.z = -position.z / 100. + 1. - 0.001;\n            }")
                        }
                        return a(t, e), n(t, [{
                            key: "update",
                            value: function () {
                                o(Object.getPrototypeOf(t.prototype), "update", this).call(this), this.viewport_height = this.view.size.css.height * this.view.meters_per_pixel;
                                var e = [this.view.center.meters.x, this.view.center.meters.y, this.viewport_height];
                                this.position_meters = e, h.mat4.identity(this.view_matrix), h.mat4.translate(this.view_matrix, this.view_matrix, h.vec3.fromValues(-e[0], -e[1], 0)), h.mat4.identity(this.projection_matrix), this.projection_matrix[8] = this.axis.x / this.view.aspect, this.projection_matrix[9] = this.axis.y, h.mat4.scale(this.projection_matrix, this.projection_matrix, h.vec3.fromValues(2 / this.view.size.meters.x, 2 / this.view.size.meters.y, 2 / this.view.size.meters.y))
                            }
                        }, {
                            key: "setupProgram",
                            value: function (e) {
                                e.uniform("Matrix4fv", "u_projection", this.projection_matrix), e.uniform("3fv", "u_eye", [0, 0, this.viewport_height]), e.uniform("2fv", "u_vanishing_point", [0, 0])
                            }
                        }]), t
                    }(d),
                    g = function (e) {
                        function t(e, r) {
                            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            i(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, r, n), this.type = "flat"
                        }
                        return a(t, e), n(t, [{
                            key: "update",
                            value: function () {
                                this.axis.x = 0, this.axis.y = 0, o(Object.getPrototypeOf(t.prototype), "update", this).call(this)
                            }
                        }]), t
                    }(m);
                t.exports = r["default"]
            }, {
                "./gl/shader_program": 207,
                "./utils/gl-matrix": 250,
                "./utils/utils": 256,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            201: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/sliced-to-array")["default"],
                    i = e("babel-runtime/core-js/get-iterator")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o;
                r["default"] = o = {}, o.default_source_max_zoom = 18, o.default_view_max_zoom = 20, o.tile_size = 256, o.half_circumference_meters = 20037508.342789244, o.circumference_meters = 2 * o.half_circumference_meters, o.min_zoom_meters_per_pixel = o.circumference_meters / o.tile_size;
                var a = [];
                o.metersPerPixel = function (e) {
                    return a[e] = a[e] || o.min_zoom_meters_per_pixel / Math.pow(2, e), a[e]
                };
                var s = [];
                o.metersPerTile = function (e) {
                    return s[e] = s[e] || o.circumference_meters / Math.pow(2, e), s[e]
                }, o.tile_scale = 4096, o.units_per_pixel = o.tile_scale / o.tile_size, o.height_scale = 16;
                var l = [];
                o.unitsPerMeter = function (e) {
                    return l[e] = l[e] || o.tile_scale / (o.tile_size * o.metersPerPixel(e)), l[e]
                }, o.metersForTile = function (e) {
                    return {
                        x: e.x * o.circumference_meters / Math.pow(2, e.z) - o.half_circumference_meters,
                        y: -(e.y * o.circumference_meters / Math.pow(2, e.z) - o.half_circumference_meters)
                    }
                }, o.tileForMeters = function (e, t) {
                    var r = n(e, 2),
                        i = r[0],
                        a = r[1];
                    return {
                        x: Math.floor((i + o.half_circumference_meters) / (o.circumference_meters / Math.pow(2, t))),
                        y: Math.floor((-a + o.half_circumference_meters) / (o.circumference_meters / Math.pow(2, t))),
                        z: t
                    }
                }, o.wrapTile = function (e) {
                    var t = e.x,
                        r = e.y,
                        n = e.z,
                        i = arguments.length <= 1 || void 0 === arguments[1] ? {
                            x: !0,
                            y: !1
                        } : arguments[1],
                        o = (1 << n) - 1;
                    return i.x && (t &= o), i.y && (r &= o), {
                        x: t,
                        y: r,
                        z: n
                    }
                }, o.metersToLatLng = function (e) {
                    var t = n(e, 2),
                        r = t[0],
                        i = t[1];
                    return r /= o.half_circumference_meters, i /= o.half_circumference_meters, i = (2 * Math.atan(Math.exp(i * Math.PI)) - Math.PI / 2) / Math.PI, r *= 180, i *= 180, [r, i]
                }, o.latLngToMeters = function (e) {
                    var t = n(e, 2),
                        r = t[0],
                        i = t[1];
                    return i = Math.log(Math.tan(i * Math.PI / 360 + Math.PI / 4)) / Math.PI, i *= o.half_circumference_meters, r *= o.half_circumference_meters / 180, [r, i]
                }, o.wrapLng = function (e) {
                    return (e > 180 || -180 > e) && (e = ((e + 180) % 360 + 360) % 360 - 180), e
                }, o.transformGeometry = function (e, t) {
                    null != e && ("Point" === e.type ? t(e.coordinates) : "LineString" === e.type || "MultiPoint" === e.type ? e.coordinates.forEach(t) : "Polygon" === e.type || "MultiLineString" === e.type ? e.coordinates.forEach(function (e) {
                        return e.forEach(t)
                    }) : "MultiPolygon" === e.type && e.coordinates.forEach(function (e) {
                        e.forEach(function (e) {
                            return e.forEach(t)
                        })
                    }))
                }, o.boxIntersect = function (e, t) {
                    return !(t.sw.x > e.ne.x || t.ne.x < e.sw.x || t.sw.y > e.ne.y || t.ne.y < e.sw.y)
                }, o.findBoundingBox = function (e) {
                    for (var t = 1 / 0, r = -1 / 0, n = 1 / 0, i = -1 / 0, o = e[0].length, a = 0; o > a; a++) {
                        var s = e[0][a];
                        s[0] < t && (t = s[0]), s[1] < n && (n = s[1]), s[0] > r && (r = s[0]), s[1] > i && (i = s[1])
                    }
                    return [t, n, r, i]
                }, o.geometryType = function (e) {
                    return "Polygon" === e || "MultiPolygon" === e ? "polygon" : "LineString" === e || "MultiLineString" === e ? "line" : "Point" === e || "MultiPoint" === e ? "point" : void 0
                }, o.centroid = function (e) {
                    for (var t = 0, r = 0, n = 0, i = e[0], o = i.length, a = 0, s = o - 1; o > a; s = a, a++) {
                        var l = i[a],
                            u = i[s],
                            c = l[1] * u[0] - u[1] * l[0];
                        t += (l[0] + u[0]) * c, r += (l[1] + u[1]) * c, n += 3 * c
                    }
                    return [t / n, r / n]
                }, o.multiCentroid = function (e) {
                    for (var t = e.length, r = [0, 0], n = 0; n < e.length; n++) {
                        var i = o.centroid(e[n]);
                        r[0] += i[0], r[1] += i[1]
                    }
                    return r[0] /= t, r[1] /= t, r
                }, o.signedPolygonRingAreaSum = function (e) {
                    for (var t = 0, r = e.length, n = 0; r - 1 > n; n++) {
                        var i = e[n],
                            o = e[n + 1];
                        t += i[0] * o[1] - o[0] * i[1]
                    }
                    return t += e[r - 1][0] * e[0][1] - e[0][0] * e[r - 1][1]
                }, o.polygonRingArea = function (e) {
                    return Math.abs(o.signedPolygonRingAreaSum(e)) / 2
                }, o.polygonArea = function (e) {
                    return o.polygonRingArea(e[0])
                }, o.multiPolygonArea = function (e) {
                    for (var t = 0, r = 0; r < e.length; r++) t += o.polygonArea(e[r]);
                    return t
                }, o.ringWinding = function (e) {
                    var t = o.signedPolygonRingAreaSum(e);
                    return t > 0 ? "CW" : 0 > t ? "CCW" : void 0
                }, o.enforceWinding = function (e, t) {
                    var r = void 0;
                    if ("Polygon" === e.type) r = [e.coordinates];
                    else {
                        if ("MultiPolygon" !== e.type) return e;
                        r = e.coordinates
                    }
                    for (var n = 0; n < r.length; n++) {
                        var a = r[n];
                        if (o.ringWinding(a[0]) !== t) {
                            var s = !0,
                                l = !1,
                                u = void 0;
                            try {
                                for (var c, f = i(a); !(s = (c = f.next()).done); s = !0) {
                                    var h = c.value;
                                    h.reverse()
                                }
                            } catch (d) {
                                l = !0, u = d
                            } finally {
                                try {
                                    !s && f["return"] && f["return"]()
                                } finally {
                                    if (l) throw u
                                }
                            }
                        }
                    }
                    return e
                }, t.exports = r["default"]
            }, {
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/helpers/sliced-to-array": 24
            }],
            202: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n;
                r["default"] = n = {}, n.BYTE = 5120, n.UNSIGNED_BYTE = 5121, n.SHORT = 5122, n.UNSIGNED_SHORT = 5123, n.INT = 5124, n.UNSIGNED_INT = 5125, n.FLOAT = 5126, t.exports = r["default"]
            }, {}],
            203: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n;
                r["default"] = n = {}, n.getContext = function (e, t) {
                    var r = !1;
                    null == e && (e = document.createElement("canvas"), e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.zIndex = -1, document.body.appendChild(e), r = !0);
                    var i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
                    if (!i) throw new Error("Couldn't create WebGL context.");
                    return r ? (n.resize(i, window.innerWidth, window.innerHeight, t.device_pixel_ratio), window.addEventListener("resize", function () {
                        n.resize(i, window.innerWidth, window.innerHeight, t.device_pixel_ratio)
                    })) : n.resize(i, parseFloat(e.style.width), parseFloat(e.style.height), t.device_pixel_ratio), i
                }, n.resize = function (e, t, r, n) {
                    n = n || window.devicePixelRatio || 1, e.canvas.style.width = t + "px", e.canvas.style.height = r + "px", e.canvas.width = Math.round(t * n), e.canvas.height = Math.round(r * n), e.bindFramebuffer(e.FRAMEBUFFER, null), e.viewport(0, 0, e.canvas.width, e.canvas.height)
                }, t.exports = r["default"]
            }, {}],
            204: [function (e, t, r) {
                "use strict";

                function n(e, t) {
                    var r = o.get(e);
                    return r || (o.set(e, new i), r = o.get(e)), r.get(t) || r.set(t, e.getExtension(t)), r.get(t)
                }
                var i = e("babel-runtime/core-js/map")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r["default"] = n;
                var o = new i;
                t.exports = r["default"]
            }, {
                "babel-runtime/core-js/map": 4
            }],
            205: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/to-consumable-array")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var i = {};
                r["default"] = i, i.parseUniforms = function (e) {
                    var t = [];
                    for (var r in e) {
                        var n, i = r,
                            o = e[r];
                        if ("number" == typeof o) t.push({
                            type: "float",
                            method: "1f",
                            name: r,
                            value: o,
                            key: i,
                            uniforms: e
                        });
                        else if (Array.isArray(o)) {
                            if ("number" == typeof o[0]) o.length >= 2 && o.length <= 4 ? t.push({
                                type: "vec" + o.length,
                                method: o.length + "fv",
                                name: r,
                                value: o,
                                key: i,
                                uniforms: e
                            }) : o.length > 4 && t.push({
                                type: "float[]",
                                method: "1fv",
                                name: r + "[0]",
                                value: o,
                                key: i,
                                uniforms: e
                            });
                            else if ("string" == typeof o[0])
                                for (n = 0; n < o.length; n++) t.push({
                                    type: "sampler2D",
                                    method: "1i",
                                    name: r + "[" + n + "]",
                                    value: o[n],
                                    key: n,
                                    uniforms: o
                                });
                            else if (Array.isArray(o[0]) && "number" == typeof o[0][0] && o[0].length >= 2 && o[0].length <= 4)
                                for (n = 0; n < o.length; n++) t.push({
                                    type: "vec" + o[0].length,
                                    method: o[n].length + "fv",
                                    name: r + "[" + n + "]",
                                    value: o[n],
                                    key: n,
                                    uniforms: o
                                })
                        } else "boolean" == typeof o ? t.push({
                            type: "bool",
                            method: "1i",
                            name: r,
                            value: o,
                            key: i,
                            uniforms: e
                        }) : "string" == typeof o && t.push({
                            type: "sampler2D",
                            method: "1i",
                            name: r,
                            value: o,
                            key: i,
                            uniforms: e
                        })
                    }
                    return t
                }, i.defineVariable = function (e, t) {
                    var r, n;
                    "number" == typeof t ? r = "float" : Array.isArray(t) ? "number" == typeof t[0] ? t.length >= 2 && t.length <= 4 ? r = "vec" + t.length : (r = "float", n = t.length) : "string" == typeof t[0] && (r = "sampler2D", n = t.length) : "boolean" == typeof t ? r = "bool" : "string" == typeof t && (r = "sampler2D");
                    var i = "";
                    return i += r + " " + e, n && (i += "[" + n + "]"), i += ";\n"
                }, i.defineUniform = function (e, t) {
                    return "uniform " + i.defineVariable(e, t)
                }, i.isUniformDefined = function (e, t) {
                    var r = new RegExp("uniform[^;]+(?:{[\\s\\S]*})?[^;]*\\b" + e + "\\b", "g");
                    return t.match(r) ? !0 : !1
                }, i.isSymbolReferenced = function (e, t) {
                    var r = new RegExp("\\b" + e + "\\b", "g");
                    return t.search(r) >= 0 ? !0 : !1
                }, i.expandVec3 = function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1],
                        r = void 0;
                    return r = Array.isArray(e) && 2 === e.length ? [].concat(n(e), [t]).map(parseFloat) : [e, e, e].map(parseFloat), r && r.every(function (e) {
                        return "number" == typeof e && !isNaN(e)
                    }) ? r : void 0
                }, i.expandVec4 = function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1],
                        r = void 0;
                    return r = Array.isArray(e) && 3 === e.length ? [].concat(n(e), [t]).map(parseFloat) : [e, e, e, t].map(parseFloat), r && r.every(function (e) {
                        return "number" == typeof e && !isNaN(e)
                    }) ? r : void 0
                }, t.exports = r["default"]
            }, {
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            206: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o = function () {
                    function e(t, r) {
                        i(this, e), r(t), this.value = t, this.setup = r
                    }
                    return n(e, [{
                        key: "set",
                        value: function (e) {
                            JSON.stringify(this.value) !== JSON.stringify(e) && (this.setup(e), this.value = e)
                        }
                    }]), e
                }();
                r.RenderState = o;
                var a = function s(e) {
                    i(this, s), this.defaults = {}, this.defaults.culling = !0, this.defaults.culling_face = e.BACK, this.defaults.blending = !1, this.defaults.blending_src = e.ONE_MINUS_SRC_ALPHA, this.defaults.blending_dst = e.ONE_MINUS_SRC_ALPHA, this.defaults.blending_src_alpha = e.ONE, this.defaults.blending_dst_alpha = e.ONE_MINUS_SRC_ALPHA, this.defaults.depth_write = !0, this.defaults.depth_test = !0, e.depthFunc(e.LESS), this.culling = new o({
                        cull: this.defaults.culling,
                        face: this.defaults.culling_face
                    }, function (t) {
                        t.cull ? (e.enable(e.CULL_FACE), e.cullFace(t.face)) : e.disable(e.CULL_FACE)
                    }), this.blending = new o({
                        blend: this.defaults.blending,
                        src: this.defaults.blending_src,
                        dst: this.defaults.blending_dst,
                        src_alpha: this.defaults.blending_src_alpha,
                        dst_alpha: this.defaults.blending_dst_alpha
                    }, function (t) {
                        t.blend ? (e.enable(e.BLEND), t.src_alpha && t.dst_alpha ? e.blendFuncSeparate(t.src, t.dst, t.src_alpha, t.dst_alpha) : e.blendFunc(t.src, t.dst)) : e.disable(e.BLEND)
                    }), this.depth_write = new o({
                        depth_write: this.defaults.depth_write
                    }, function (t) {
                        e.depthMask(t.depth_write)
                    }), this.depth_test = new o({
                        depth_test: this.defaults.depth_test
                    }, function (t) {
                        t.depth_test ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST)
                    })
                };
                r["default"] = a
            }, {
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19
            }],
            207: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/to-consumable-array")["default"],
                    a = e("babel-runtime/core-js/object/assign")["default"],
                    s = e("babel-runtime/core-js/get-iterator")["default"],
                    l = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var u = e("../utils/log"),
                    c = l(u),
                    f = e("./glsl"),
                    h = l(f),
                    d = e("./texture"),
                    p = l(d),
                    m = e("./extensions"),
                    g = l(m),
                    v = e("strip-comments"),
                    _ = l(v),
                    y = e("gl-shader-errors"),
                    b = l(y),
                    x = /^\s*#pragma.*$/gm,
                    w = /\\\s*\n/gm,
                    A = function () {
                        function e(t, r, n, o) {
                            i(this, e), o = o || {}, this.gl = t, this.program = null, this.compiled = !1, this.compiling = !1, this.error = null, this.defines = a({}, o.defines || {}), this.blocks = a({}, o.blocks || {}), this.block_scopes = a({}, o.block_scopes || {}), this.extensions = o.extensions || [], this.dependent_uniforms = o.uniforms, this.uniforms = {}, this.attribs = {}, this.vertex_source = r, this.fragment_source = n, this.id = e.id++, e.programs[this.id] = this, this.name = o.name
                        }
                        return n(e, [{
                            key: "destroy",
                            value: function () {
                                this.gl.useProgram(null), this.gl.deleteProgram(this.program), this.program = null, this.uniforms = {}, this.attribs = {}, delete e.programs[this.id], this.compiled = !1
                            }
                        }, {
                            key: "use",
                            value: function () {
                                this.compiled && (e.current !== this && this.gl.useProgram(this.program), e.current = this)
                            }
                        }, {
                            key: "compile",
                            value: function () {
                                if (this.compiling) throw new Error("ShaderProgram.compile(): skipping for " + this.id + " (" + this.name + ") because already compiling");
                                this.compiling = !0, this.compiled = !1, this.error = null, this.computed_vertex_source = this.vertex_source, this.computed_fragment_source = this.fragment_source;
                                var t, r = this.checkExtensions(),
                                    n = this.buildDefineList(),
                                    i = this.buildShaderBlockList();
                                for (var o in i) {
                                    var a = i[o];
                                    if (a && (!Array.isArray(a) || 0 !== a.length)) {
                                        t = new RegExp("^\\s*#pragma\\s+tangram:\\s+" + o + "\\s*$", "m");
                                        var l = this.computed_vertex_source.match(t),
                                            u = this.computed_fragment_source.match(t);
                                        if (null != l || null != u) {
                                            var c = "";
                                            a.forEach(function (e) {
                                                var t = e.scope + ", " + e.key + ", " + e.num;
                                                c += "\n// tangram-block-start: " + t + "\n", c += e.source, c += "\n// tangram-block-end: " + t + "\n"
                                            }), null != l && (this.computed_vertex_source = this.computed_vertex_source.replace(t, c)), null != u && (this.computed_fragment_source = this.computed_fragment_source.replace(t, c)), n["TANGRAM_BLOCK_" + o.replace(/[\s-]+/g, "_").toUpperCase()] = !0
                                        }
                                    }
                                }
                                this.computed_vertex_source = this.computed_vertex_source.replace(x, ""), this.computed_fragment_source = this.computed_fragment_source.replace(x, ""), this.ensureUniforms(this.dependent_uniforms);
                                var f = this.name ? this.name + " / id " + this.id : "id " + this.id,
                                    h = "// Program: " + f + "\n",
                                    d = "",
                                    p = this.gl.getShaderPrecisionFormat(this.gl.FRAGMENT_SHADER, this.gl.HIGH_FLOAT);
                                d = p && p.precision > 0 ? "precision highp float;\n" : "precision mediump float;\n", n.TANGRAM_VERTEX_SHADER = !0, n.TANGRAM_FRAGMENT_SHADER = !1, this.computed_vertex_source = h + d + e.buildDefineString(n) + this.computed_vertex_source, n.TANGRAM_VERTEX_SHADER = !1, n.TANGRAM_FRAGMENT_SHADER = !0, this.computed_fragment_source = e.buildExtensionString(r) + h + d + e.buildDefineString(n) + this.computed_fragment_source, this.computed_vertex_source = this.computed_vertex_source.replace(w, ""), this.computed_fragment_source = this.computed_fragment_source.replace(w, "");
                                try {
                                    this.program = e.updateProgram(this.gl, this.program, this.computed_vertex_source, this.computed_fragment_source), this.compiled = !0, this.compiling = !1
                                } catch (m) {
                                    if (this.program = null, this.compiled = !1, this.compiling = !1, this.error = m, "vertex" === m.type || "fragment" === m.type) {
                                        this.shader_errors = m.errors;
                                        var g = !0,
                                            v = !1,
                                            _ = void 0;
                                        try {
                                            for (var y, b = s(this.shader_errors); !(g = (y = b.next()).done); g = !0) {
                                                var A = y.value;
                                                A.type = m.type, A.block = this.block(m.type, A.line)
                                            }
                                        } catch (T) {
                                            v = !0, _ = T
                                        } finally {
                                            try {
                                                !g && b["return"] && b["return"]()
                                            } finally {
                                                if (v) throw _
                                            }
                                        }
                                    }
                                    throw new Error("ShaderProgram.compile(): program " + this.id + " (" + this.name + ") error:", m)
                                }
                                this.use(), this.refreshUniforms(), this.refreshAttributes()
                            }
                        }, {
                            key: "buildDefineList",
                            value: function () {
                                var t, r = {};
                                for (t in e.defines) r[t] = e.defines[t];
                                for (t in this.defines) r[t] = this.defines[t];
                                return r
                            }
                        }, {
                            key: "buildShaderBlockList",
                            value: function () {
                                var t = void 0,
                                    r = {};
                                for (t in e.blocks)
                                    if (r[t] = [], Array.isArray(e.blocks[t])) {
                                        var n;
                                        (n = r[t]).push.apply(n, o(e.blocks[t].map(function (e, r) {
                                            return {
                                                key: t,
                                                source: e,
                                                num: r,
                                                scope: "ShaderProgram"
                                            }
                                        })))
                                    } else r[t] = [{
                                        key: t,
                                        source: e.blocks[t],
                                        num: 0,
                                        scope: "ShaderProgram"
                                    }];
                                for (t in this.blocks)
                                    if (r[t] = r[t] || [], Array.isArray(this.blocks[t]))
                                        for (var i = this.block_scopes && this.block_scopes[t] || [], a = null, s = 0, l = 0; l < this.blocks[t].length; l++) i[l] !== a && (a = i[l], s = 0), r[t].push({
                                            key: t,
                                            source: this.blocks[t][l],
                                            num: s,
                                            scope: a || this.name
                                        }), s++;
                                    else r[t].push({
                                        key: t,
                                        source: this.blocks[t],
                                        num: 0,
                                        scope: this.name
                                    });
                                return r
                            }
                        }, {
                            key: "ensureUniforms",
                            value: function (e) {
                                if (e) {
                                    var t, r = _["default"](this.computed_vertex_source),
                                        n = _["default"](this.computed_fragment_source),
                                        i = [],
                                        o = [];
                                    for (var a in e) t = null, h["default"].isUniformDefined(a, r) || (t || (t = h["default"].defineUniform(a, e[a])), c["default"]("trace", "Program " + this.name + ": " + a + " not defined in vertex shader, injecting: '" + t + "'"), i.push(t)), h["default"].isUniformDefined(a, n) || (t || (t = h["default"].defineUniform(a, e[a])), c["default"]("trace", "Program " + this.name + ": " + a + " not defined in fragment shader, injecting: '" + t + "'"), o.push(t));
                                    i.length > 0 && (this.computed_vertex_source = i.join("\n") + this.computed_vertex_source), o.length > 0 && (this.computed_fragment_source = o.join("\n") + this.computed_fragment_source)
                                }
                            }
                        }, {
                            key: "setUniforms",
                            value: function (e) {
                                var t = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                                if (this.compiled) {
                                    t && (this.texture_unit = 0);
                                    for (var r = h["default"].parseUniforms(e), n = 0; n < r.length; n++) {
                                        var i = r[n];
                                        "sampler2D" === i.type ? this.setTextureUniform(i.name, i.value) : this.uniform(i.method, i.name, i.value)
                                    }
                                }
                            }
                        }, {
                            key: "saveUniforms",
                            value: function (e) {
                                var t = e || this.uniforms;
                                for (var r in t) {
                                    var n = this.uniforms[r];
                                    n && (n.saved_value = n.value)
                                }
                                this.saved_texture_unit = this.texture_unit || 0
                            }
                        }, {
                            key: "restoreUniforms",
                            value: function (e) {
                                var t = e || this.uniforms;
                                for (var r in t) {
                                    var n = this.uniforms[r];
                                    n && n.saved_value && (n.value = n.saved_value, this.updateUniform(n))
                                }
                                this.texture_unit = this.saved_texture_unit || 0
                            }
                        }, {
                            key: "setTextureUniform",
                            value: function (e, t) {
                                var r = p["default"].textures[t];
                                return null == r ? void c["default"]("warn", "Cannot find texture '" + t + "'") : (r.bind(this.texture_unit), this.uniform("1i", e, this.texture_unit), void this.texture_unit++)
                            }
                        }, {
                            key: "uniform",
                            value: function t(e, r, n) {
                                if (this.compiled) {
                                    this.uniforms[r] = this.uniforms[r] || {};
                                    var t = this.uniforms[r];
                                    t.name = r, void 0 === t.location && (t.location = this.gl.getUniformLocation(this.program, r)), t.method = e, t.value = n, this.updateUniform(t)
                                }
                            }
                        }, {
                            key: "updateUniform",
                            value: function (e) {
                                this.compiled && e && null != e.location && (this.use(), this.commitUniform(e))
                            }
                        }, {
                            key: "commitUniform",
                            value: function (e) {
                                var t = e.location,
                                    r = e.value;
                                switch (e.method) {
                                case "1i":
                                    this.gl.uniform1i(t, r);
                                    break;
                                case "1f":
                                    this.gl.uniform1f(t, r);
                                    break;
                                case "2f":
                                    this.gl.uniform2f(t, r[0], r[1]);
                                    break;
                                case "3f":
                                    this.gl.uniform3f(t, r[0], r[1], r[2]);
                                    break;
                                case "4f":
                                    this.gl.uniform4f(t, r[0], r[1], r[2], r[3]);
                                    break;
                                case "1iv":
                                    this.gl.uniform1iv(t, r);
                                    break;
                                case "3iv":
                                    this.gl.uniform3iv(t, r);
                                    break;
                                case "1fv":
                                    this.gl.uniform1fv(t, r);
                                    break;
                                case "2fv":
                                    this.gl.uniform2fv(t, r);
                                    break;
                                case "3fv":
                                    this.gl.uniform3fv(t, r);
                                    break;
                                case "4fv":
                                    this.gl.uniform4fv(t, r);
                                    break;
                                case "Matrix3fv":
                                    this.gl.uniformMatrix3fv(t, !1, r);
                                    break;
                                case "Matrix4fv":
                                    this.gl.uniformMatrix4fv(t, !1, r)
                                }
                            }
                        }, {
                            key: "refreshUniforms",
                            value: function () {
                                if (this.compiled)
                                    for (var e in this.uniforms) {
                                        var t = this.uniforms[e];
                                        t.location = this.gl.getUniformLocation(this.program, e), this.updateUniform(t)
                                    }
                            }
                        }, {
                            key: "refreshAttributes",
                            value: function () {
                                this.attribs = {}
                            }
                        }, {
                            key: "attribute",
                            value: function (e) {
                                if (this.compiled) {
                                    var t = this.attribs[e] = this.attribs[e] || {};
                                    return null != t.location ? t : (t.name = e, t.location = this.gl.getAttribLocation(this.program, e), t)
                                }
                            }
                        }, {
                            key: "source",
                            value: function (e) {
                                return "vertex" === e ? this.computed_vertex_source : "fragment" === e ? this.computed_fragment_source : void 0
                            }
                        }, {
                            key: "lines",
                            value: function (e) {
                                var t = this.source(e);
                                return t ? t.split("\n") : []
                            }
                        }, {
                            key: "line",
                            value: function (e, t) {
                                var r = this.lines(e);
                                return r ? r[t] : void 0
                            }
                        }, {
                            key: "block",
                            value: function r(e, t) {
                                for (var n = this.lines(e), r = void 0, i = 0; t > i && i < n.length; i++) {
                                    var o = n[i],
                                        a = o.match(/\/\/ tangram-block-start: ([A-Za-z0-9_-]+), ([A-Za-z0-9_-]+), (\d+)/);
                                    a && a.length > 1 ? r = {
                                        scope: a[1],
                                        name: a[2],
                                        num: a[3]
                                    } : (a = o.match(/\/\/ tangram-block-end: ([A-Za-z0-9_-]+), ([A-Za-z0-9_-]+), (\d+)/), a && a.length > 1 && (r = null)), r && (r.line = null == r.line ? -1 : r.line + 1, r.source = o)
                                }
                                return r
                            }
                        }, {
                            key: "checkExtensions",
                            value: function () {
                                var e = [],
                                    t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (var i, o = s(this.extensions); !(t = (i = o.next()).done); t = !0) {
                                        var a = i.value,
                                            l = g["default"](this.gl, a),
                                            u = "TANGRAM_EXTENSION_" + a;
                                        this.defines[u] = null != l, l ? e.push(a) : c["default"]("debug", "Could not enable extension '" + a + "'")
                                    }
                                } catch (f) {
                                    r = !0, n = f
                                } finally {
                                    try {
                                        !t && o["return"] && o["return"]()
                                    } finally {
                                        if (r) throw n
                                    }
                                }
                                return e
                            }
                        }]), e
                    }();
                r["default"] = A, A.id = 0, A.programs = {}, A.current = null, A.defines = {}, A.blocks = {}, A.buildDefineString = function (e) {
                    var t = "";
                    for (var r in e) null != e[r] && e[r] !== !1 && (t += "boolean" == typeof e[r] && e[r] === !0 ? "#define " + r + "\n" : "number" == typeof e[r] && Math.floor(e[r]) === e[r] ? "#define " + r + " " + e[r].toFixed(1) + "\n" : "#define " + r + " " + e[r] + "\n");
                    return t
                }, A.buildExtensionString = function (e) {
                    e = e || [];
                    var t = "",
                        r = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var o, a = s(e); !(r = (o = a.next()).done); r = !0) {
                            var l = o.value;
                            t += "#ifdef GL_" + l + "\n#extension GL_" + l + " : enable\n#endif\n"
                        }
                    } catch (u) {
                        n = !0, i = u
                    } finally {
                        try {
                            !r && a["return"] && a["return"]()
                        } finally {
                            if (n) throw i
                        }
                    }
                    return t
                }, A.addBlock = function (e) {
                    var t;
                    A.blocks[e] = A.blocks[e] || [];
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; r > i; i++) n[i - 1] = arguments[i];
                    (t = A.blocks[e]).push.apply(t, n)
                }, A.removeBlock = function (e) {
                    A.blocks[e] = []
                }, A.replaceBlock = function (e) {
                    A.removeBlock(e);
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; t > n; n++) r[n - 1] = arguments[n];
                    A.addBlock.apply(A, [e].concat(r))
                }, A.updateProgram = function (e, t, r, n) {
                    try {
                        var i = A.createShader(e, r, e.VERTEX_SHADER),
                            o = A.createShader(e, n, e.FRAGMENT_SHADER)
                    } catch (a) {
                        throw c["default"]("error", a.message), a
                    }
                    if (e.useProgram(null), null != t)
                        for (var s = e.getAttachedShaders(t), l = 0; l < s.length; l++) e.detachShader(t, s[l]);
                    else t = e.createProgram();
                    if (null == i || null == o) return t;
                    if (e.attachShader(t, i), e.attachShader(t, o), e.deleteShader(i), e.deleteShader(o), e.linkProgram(t), !e.getProgramParameter(t, e.LINK_STATUS)) {
                        var u = new Error("WebGL program error:\n            VALIDATE_STATUS: " + e.getProgramParameter(t, e.VALIDATE_STATUS) + "\n            ERROR: " + e.getError() + "\n            --- Vertex Shader ---\n            " + r + "\n            --- Fragment Shader ---\n            " + n),
                            f = {
                                type: "program",
                                message: u
                            };
                        throw c["default"]("error", f.message), f
                    }
                    return t
                }, A.createShader = function (e, t, r) {
                    var n = e.createShader(r);
                    if (e.shaderSource(n, t), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) {
                        var i = r === e.VERTEX_SHADER ? "vertex" : "fragment",
                            o = e.getShaderInfoLog(n),
                            a = b["default"](o);
                        throw {
                            type: i,
                            message: o,
                            errors: a
                        }
                    }
                    return n
                }, t.exports = r["default"]
            }, {
                "../utils/log": 251,
                "./extensions": 204,
                "./glsl": 205,
                "./texture": 208,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/to-consumable-array": 25,
                "gl-shader-errors": 153,
                "strip-comments": 189
            }],
            208: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/core-js/object/assign")["default"],
                    a = e("babel-runtime/core-js/promise")["default"],
                    s = e("babel-runtime/core-js/object/keys")["default"],
                    l = e("babel-runtime/core-js/get-iterator")["default"],
                    u = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var c = e("../utils/log"),
                    f = u(c),
                    h = e("../utils/utils"),
                    d = u(h),
                    p = e("../utils/subscribe"),
                    m = u(p),
                    g = e("../utils/worker_broker"),
                    v = u(g),
                    _ = function () {
                        function e(t, r) {
                            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            i(this, e), this.gl = t, this.texture = t.createTexture(), this.texture && (this.valid = !0), this.bind(), this.name = r, this.retain_count = 0, this.source = null, this.source_type = null, this.config_type = null, this.loading = null, this.loaded = !1, this.filtering = n.filtering, this.sprites = n.sprites, this.texcoords = {}, this.sizes = {}, this.setData(1, 1, new Uint8Array([0, 0, 0, 255]), {
                                filtering: "nearest"
                            }), e.textures[this.name] && (this.retain_count = e.textures[this.name].retain_count, e.textures[this.name].retain_count = 0, e.textures[this.name].destroy()), e.textures[this.name] = this, e.texture_configs[this.name] = o({
                                name: r
                            }, n), this.load(n), f["default"]("trace", "creating Texture " + this.name)
                        }
                        return n(e, [{
                            key: "destroy",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                    r = t.force;
                                return this.retain_count > 0 && !r ? void f["default"]("error", "Texture '" + this.name + "': destroying texture with retain count of '" + this.retain_count + "'") : void(this.valid && (this.gl.deleteTexture(this.texture), this.texture = null, delete this.data, this.data = null, delete e.textures[this.name], this.valid = !1, f["default"]("trace", "destroying Texture " + this.name)))
                            }
                        }, {
                            key: "retain",
                            value: function () {
                                this.retain_count++
                            }
                        }, {
                            key: "release",
                            value: function () {
                                this.retain_count <= 0 && f["default"]("error", "Texture '" + this.name + "': releasing texture with retain count of '" + this.retain_count + "'"), this.retain_count--, this.retain_count <= 0 && this.destroy()
                            }
                        }, {
                            key: "bind",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                                this.valid && (e.activeUnit !== t && (this.gl.activeTexture(this.gl.TEXTURE0 + t), e.activeUnit = t, e.boundTexture = null), e.boundTexture !== this.texture && (this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture), e.boundTexture = this.texture))
                            }
                        }, {
                            key: "load",
                            value: function (e) {
                                var t = this;
                                return e ? (this.loading = null, "string" == typeof e.url ? (this.config_type = "url", this.setUrl(e.url, e)) : e.element ? (this.config_type = "element", this.setElement(e.element, e)) : e.data && e.width && e.height && (this.config_type = "data", this.setData(e.width, e.height, e.data, e)), this.loading = this.loading && this.loading.then(function () {
                                    return t.calculateSprites(), t
                                }) || a.resolve(this), this.loading) : this.loading || a.resolve(this)
                            }
                        }, {
                            key: "setUrl",
                            value: function (t) {
                                var r = this,
                                    n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                return this.valid ? (e.base_url && (t = d["default"].addBaseURL(t, e.base_url)), this.url = t, this.source = this.url, this.source_type = "url", this.loading = new a(function (t) {
                                    var i = new Image;
                                    i.onload = function () {
                                        try {
                                            r.setElement(i, n)
                                        } catch (o) {
                                            r.loaded = !1, f["default"]("warn", "Texture '" + r.name + "': failed to load url: '" + r.source + "'", o, n), e.trigger("warning", {
                                                message: "Failed to load texture from " + r.source,
                                                error: o,
                                                texture: n
                                            })
                                        }
                                        r.loaded = !0, t(r)
                                    }, i.onerror = function (i) {
                                        r.loaded = !1, f["default"]("warn", "Texture '" + r.name + "': failed to load url: '" + r.source + "'", i, n), e.trigger("warning", {
                                            message: "Failed to load texture from " + r.source,
                                            error: i,
                                            texture: n
                                        }), t(r)
                                    }, d["default"].isSafari() && "data:" === r.source.slice(0, 5) || (i.crossOrigin = "anonymous"), i.src = r.source
                                }), this.loading) : void 0
                            }
                        }, {
                            key: "setData",
                            value: function (e, t, r) {
                                var n = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                                return this.width = e, this.height = t, this.source = r, this.source_type = "data", Array.isArray(this.source) && (this.source = new Uint8Array(this.source)), this.update(n), this.setFiltering(n), this.loaded = !0, this.loading = a.resolve(this), this.loading
                            }
                        }, {
                            key: "setElement",
                            value: function (t, r) {
                                var n = t;
                                if ("string" == typeof t && (t = document.querySelector(t)), t instanceof HTMLCanvasElement || t instanceof HTMLImageElement || t instanceof HTMLVideoElement) this.source = t, this.source_type = "element", this.update(r), this.setFiltering(r);
                                else {
                                    this.loaded = !1;
                                    var i = "the 'element' parameter (`element: " + JSON.stringify(n) + "`) must be a CSS ";
                                    i += "selector string, or a <canvas>, <image> or <video> object", f["default"]("warn", "Texture '" + this.name + "': " + i, r), e.trigger("warning", {
                                        message: "Failed to load texture because " + i,
                                        texture: r
                                    })
                                }
                                return this.loaded = !0, this.loading = a.resolve(this), this.loading
                            }
                        }, {
                            key: "update",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                this.valid && (this.bind(), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, t.UNPACK_FLIP_Y_WEBGL === !1 ? !1 : !0), this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.UNPACK_PREMULTIPLY_ALPHA_WEBGL || !1), this.source instanceof HTMLCanvasElement || this.source instanceof HTMLVideoElement || this.source instanceof HTMLImageElement && this.source.complete ? (this.width = this.source.width, this.height = this.source.height, this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source)) : "data" === this.source_type && this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source), e.trigger("update", this))
                            }
                        }, {
                            key: "setFiltering",
                            value: function () {
                                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                if (this.valid) {
                                    t.filtering = t.filtering || "linear";
                                    var r = this.gl;
                                    this.bind(), d["default"].isPowerOf2(this.width) && d["default"].isPowerOf2(this.height) ? (this.power_of_2 = !0, r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, t.TEXTURE_WRAP_S || t.repeat && r.REPEAT || r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, t.TEXTURE_WRAP_T || t.repeat && r.REPEAT || r.CLAMP_TO_EDGE), "mipmap" === t.filtering ? (this.filtering = "mipmap", r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.generateMipmap(r.TEXTURE_2D)) : "linear" === t.filtering ? (this.filtering = "linear", r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR)) : "nearest" === t.filtering && (this.filtering = "nearest", r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST))) : (this.power_of_2 = !1, r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), "nearest" === t.filtering ? (this.filtering = "nearest", r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST)) : (this.filtering = "linear", r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR))), e.trigger("update", this)
                                }
                            }
                        }, {
                            key: "calculateSprites",
                            value: function () {
                                if (this.sprites)
                                    for (var t in this.sprites) {
                                        var r = this.sprites[t];
                                        this.texcoords[t] = e.getTexcoordsForSprite([r[0], r[1]], [r[2], r[3]], [this.width, this.height]), this.sizes[t] = [r[2], r[3]]
                                    }
                            }
                        }]), e
                    }();
                r["default"] = _, _.create = function (e, t, r) {
                    return new _(e, t, r)
                }, _.retain = function (e) {
                    _.textures[e] && _.textures[e].retain()
                }, _.release = function (e) {
                    _.textures[e] && _.textures[e].release()
                }, _.destroy = function (e) {
                    var t = s(_.textures),
                        r = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var o, a = l(t); !(r = (o = a.next()).done); r = !0) {
                            var u = o.value,
                                c = _.textures[u];
                            c.gl === e && c.destroy({
                                force: !0
                            })
                        }
                    } catch (f) {
                        n = !0, i = f
                    } finally {
                        try {
                            !r && a["return"] && a["return"]()
                        } finally {
                            if (n) throw i
                        }
                    }
                }, _.getSpriteInfo = function (e, t) {
                    var r = _.textures[e];
                    return r && {
                        size: r.sizes[t],
                        texcoords: r.texcoords[t]
                    }
                }, _.getTexcoordsForSprite = function (e, t, r) {
                    var n = r[1] - e[1] - t[1];
                    return [e[0] / r[0], n / r[1], (t[0] + e[0]) / r[0], (t[1] + n) / r[1]]
                }, _.createFromObject = function (e, t) {
                    var r = [];
                    if (t)
                        for (var n in t) {
                            var i = t[n];
                            if (_.changed(n, i)) {
                                var o = _.create(e, n, i);
                                r.push(o.loading)
                            }
                        }
                    return a.all(r)
                }, _["default"] = "__default", _.createDefault = function (e) {
                    return _.create(e, _["default"])
                }, _.changed = function (e, t) {
                    var r = _.textures[e];
                    if (r) {
                        if ("element" === r.config_type || null != t.element) return !0;
                        if (JSON.stringify(_.texture_configs[e]) === JSON.stringify(o({
                                name: e
                            }, t))) return !1
                    }
                    return !0
                }, _.getInfo = function (e) {
                    if (e || (e = s(_.textures)), Array.isArray(e)) return a.all(e.map(function (e) {
                        return _.getInfo(e)
                    }));
                    var t = _.textures[e];
                    if (t) {
                        var r = t.loading || a.resolve(t);
                        return r.then(function () {
                            return {
                                name: t.name,
                                width: t.width,
                                height: t.height,
                                sprites: t.sprites,
                                texcoords: t.texcoords,
                                sizes: t.sizes,
                                filtering: t.filtering,
                                power_of_2: t.power_of_2,
                                valid: t.valid
                            }
                        })
                    }
                    return a.resolve(null)
                }, _.syncTexturesToWorker = function (e) {
                    return v["default"].postMessage("Texture.getInfo", e).then(function (e) {
                        var t = !0,
                            r = !1,
                            n = void 0;
                        try {
                            for (var i, o = l(e); !(t = (i = o.next()).done); t = !0) {
                                var a = i.value;
                                _.textures[a.name] = a
                            }
                        } catch (s) {
                            r = !0, n = s
                        } finally {
                            try {
                                !t && o["return"] && o["return"]()
                            } finally {
                                if (r) throw n
                            }
                        }
                        return _.textures
                    })
                }, _.getMaxTextureSize = function (e) {
                    return e.getParameter(e.MAX_TEXTURE_SIZE)
                }, _.textures = {}, _.texture_configs = {}, _.boundTexture = null, _.activeUnit = null, _.base_url = null, v["default"].addTarget("Texture", _), m["default"](_), t.exports = r["default"]
            }, {
                "../utils/log": 251,
                "../utils/subscribe": 254,
                "../utils/utils": 256,
                "../utils/worker_broker": 258,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            209: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/map")["default"],
                    i = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o, a = e("../utils/log"),
                    s = i(a);
                r["default"] = o = {}, o.disabled = !1, o.ext = new n, o.bound_vao = new n, o.init = function (e) {
                    o.disabled !== !0 && o.ext.set(e, e.getExtension("OES_vertex_array_object")), null != o.ext.get(e) ? s["default"]("info", "Vertex Array Object extension available") : o.disabled !== !0 ? s["default"]("warn", "Vertex Array Object extension NOT available") : s["default"]("warn", "Vertex Array Object extension force disabled")
                }, o.create = function (e, t, r) {
                    var n = {};
                    n.setup = t, n.teardown = r;
                    var i = o.ext.get(e);
                    return null != i && (n._vao = i.createVertexArrayOES(), i.bindVertexArrayOES(n._vao)), n.setup(!0), n
                }, o.bind = function (e, t) {
                    var r = o.ext.get(e);
                    if (null != t) null != r && null != t._vao ? (r.bindVertexArrayOES(t._vao), o.bound_vao.set(e, t)) : t.setup(!1);
                    else {
                        var n = o.bound_vao.get(e);
                        null != r ? r.bindVertexArrayOES(null) : null != n && "function" == typeof n.teardown && n.teardown(), o.bound_vao.set(e, null)
                    }
                }, o.destroy = function (e, t) {
                    var r = o.ext.get(e);
                    null != r && null != t && null != t._vao && (r.deleteVertexArrayOES(t._vao), t._vao = null)
                }, t.exports = r["default"]
            }, {
                "../utils/log": 251,
                "babel-runtime/core-js/map": 4,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            210: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/core-js/map")["default"],
                    a = e("babel-runtime/core-js/get-iterator")["default"],
                    s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var l = e("../utils/log"),
                    u = s(l),
                    c = e("./shader_program"),
                    f = s(c),
                    h = e("./vao"),
                    d = s(h),
                    p = function () {
                        function e(t, r, n, a, s) {
                            i(this, e), s = s || {}, this.gl = t, this.vertex_data = r, this.element_data = n, this.vertex_layout = a, this.vertex_buffer = this.gl.createBuffer(), this.draw_mode = s.draw_mode || this.gl.TRIANGLES, this.data_usage = s.data_usage || this.gl.STATIC_DRAW, this.vertices_per_geometry = 3, this.uniforms = s.uniforms, this.retain = s.retain || !1, this.vertex_count = this.vertex_data.byteLength / this.vertex_layout.stride, this.vaos = new o, this.toggle_element_array = !1, this.element_data ? (this.toggle_element_array = !0, this.element_count = this.element_data.length, this.geometry_count = this.element_count / this.vertices_per_geometry, this.element_type = this.element_data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT, this.element_buffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.element_buffer), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.element_data, this.data_usage)) : this.geometry_count = this.vertex_count / this.vertices_per_geometry, this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertex_buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.vertex_data, this.data_usage), this.retain || (delete this.vertex_data, delete this.element_data), this.valid = !0
                        }
                        return n(e, [{
                            key: "render",
                            value: function () {
                                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                if (!this.valid) return !1;
                                var t = e.program || f["default"].current;
                                return t.use(), this.uniforms && (t.saveUniforms(this.uniforms), t.setUniforms(this.uniforms, !1)), this.bind(t), this.toggle_element_array ? this.gl.drawElements(this.draw_mode, this.element_count, this.element_type, 0) : this.gl.drawArrays(this.draw_mode, 0, this.vertex_count), d["default"].bind(this.gl, null), this.uniforms && t.restoreUniforms(this.uniforms), !0
                            }
                        }, {
                            key: "bind",
                            value: function (e) {
                                var t = this,
                                    r = this.vaos.get(e);
                                r ? d["default"].bind(this.gl, r) : this.vaos.set(e, d["default"].create(this.gl, function (r) {
                                    t.gl.bindBuffer(t.gl.ARRAY_BUFFER, t.vertex_buffer), t.toggle_element_array && t.gl.bindBuffer(t.gl.ELEMENT_ARRAY_BUFFER, t.element_buffer), t.vertex_layout.enable(t.gl, e, r)
                                }))
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                if (!this.valid) return !1;
                                this.valid = !1;
                                var e = !0,
                                    t = !1,
                                    r = void 0;
                                try {
                                    for (var n, i = a(this.vaos.values()); !(e = (n = i.next()).done); e = !0) {
                                        var o = n.value;
                                        d["default"].destroy(this.gl, o)
                                    }
                                } catch (s) {
                                    t = !0, r = s
                                } finally {
                                    try {
                                        !e && i["return"] && i["return"]()
                                    } finally {
                                        if (t) throw r
                                    }
                                }
                                return u["default"]("trace", "VBOMesh.destroy: delete buffer" + (this.vertex_data ? " of size " + this.vertex_data.byteLength : "")), this.gl.deleteBuffer(this.vertex_buffer), this.vertex_buffer = null, this.element_buffer && (this.gl.deleteBuffer(this.element_buffer), this.element_buffer = null), delete this.vertex_data, delete this.element_data, !0
                            }
                        }]), e
                    }();
                r["default"] = p, t.exports = r["default"]
            }, {
                "../utils/log": 251,
                "./shader_program": 207,
                "./vao": 209,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/map": 4,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            211: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/define-property")["default"],
                    i = e("babel-runtime/helpers/create-class")["default"],
                    o = e("babel-runtime/helpers/class-call-check")["default"],
                    a = e("babel-runtime/helpers/to-consumable-array")["default"],
                    s = e("babel-runtime/core-js/get-iterator")["default"],
                    l = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var u, c = e("./constants"),
                    f = l(c),
                    h = e("../utils/log"),
                    d = l(h),
                    p = e("./vertex_elements"),
                    m = l(p),
                    g = (u = {}, n(u, f["default"].FLOAT, Float32Array), n(u, f["default"].BYTE, Int8Array), n(u, f["default"].UNSIGNED_BYTE, Uint8Array), n(u, f["default"].INT, Int32Array), n(u, f["default"].UNSIGNED_INT, Uint32Array), n(u, f["default"].SHORT, Int16Array), n(u, f["default"].UNSIGNED_SHORT, Uint16Array), u),
                    v = function () {
                        function e(t) {
                            var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                n = r.prealloc,
                                i = void 0 === n ? 500 : n;
                            o(this, e), this.vertex_layout = t, this.vertex_elements = new m["default"], e.array_pool.length > 0 ? (this.vertex_buffer = e.array_pool.pop(), this.byte_length = this.vertex_buffer.byteLength, this.size = Math.floor(this.byte_length / this.vertex_layout.stride), d["default"]("trace", "VertexData: reused buffer of bytes " + this.byte_length + ", " + this.size + " vertices")) : (this.size = i, this.byte_length = this.vertex_layout.stride * this.size, this.vertex_buffer = new Uint8Array(this.byte_length)), this.offset = 0, this.components = [];
                            var l = !0,
                                u = !1,
                                c = void 0;
                            try {
                                for (var f, h = s(this.vertex_layout.components); !(l = (f = h.next()).done); l = !0) {
                                    var p = f.value;
                                    this.components.push([].concat(a(p)))
                                }
                            } catch (g) {
                                u = !0, c = g
                            } finally {
                                try {
                                    !l && h["return"] && h["return"]()
                                } finally {
                                    if (u) throw c
                                }
                            }
                            this.vertex_count = 0, this.realloc_count = 0, this.setBufferViews()
                        }
                        return i(e, [{
                            key: "setBufferViews",
                            value: function () {
                                this.views = {}, this.views[f["default"].UNSIGNED_BYTE] = this.vertex_buffer;
                                var e = !0,
                                    t = !1,
                                    r = void 0;
                                try {
                                    for (var n, i = s(this.vertex_layout.attribs); !(e = (n = i.next()).done); e = !0) {
                                        var o = n.value;
                                        if (null == this.views[o.type]) {
                                            var a = g[o.type];
                                            this.views[o.type] = new a(this.vertex_buffer.buffer)
                                        }
                                    }
                                } catch (l) {
                                    t = !0, r = l
                                } finally {
                                    try {
                                        !e && i["return"] && i["return"]()
                                    } finally {
                                        if (t) throw r
                                    }
                                }
                                var u = !0,
                                    c = !1,
                                    h = void 0;
                                try {
                                    for (var d, p = s(this.components); !(u = (d = p.next()).done); u = !0) {
                                        var m = d.value;
                                        m[1] = this.views[m[0]]
                                    }
                                } catch (l) {
                                    c = !0, h = l
                                } finally {
                                    try {
                                        !u && p["return"] && p["return"]()
                                    } finally {
                                        if (c) throw h
                                    }
                                }
                            }
                        }, {
                            key: "checkBufferSize",
                            value: function () {
                                if (this.offset + this.vertex_layout.stride > this.byte_length) {
                                    this.size = Math.floor(1.5 * this.size), this.size -= this.size % 4, this.byte_length = this.vertex_layout.stride * this.size;
                                    var t = new Uint8Array(this.byte_length);
                                    t.set(this.vertex_buffer), e.array_pool.push(this.vertex_buffer), this.vertex_buffer = t, this.setBufferViews(), this.realloc_count++
                                }
                            }
                        }, {
                            key: "addVertex",
                            value: function (e) {
                                this.checkBufferSize();
                                for (var t = 0, r = this.components.length, n = 0; r > n; n++) {
                                    var i = this.components[n];
                                    i[1][(this.offset >> i[2]) + i[3]] = e[t++]
                                }
                                this.offset += this.vertex_layout.stride, this.vertex_count++
                            }
                        }, {
                            key: "end",
                            value: function () {
                                return this.vertex_buffer = this.vertex_buffer.subarray(0, this.offset), this.element_buffer = this.vertex_elements.end(), d["default"]("trace", "VertexData: " + this.size + " vertices total, realloc count " + this.realloc_count), this
                            }
                        }]), e
                    }();
                r["default"] = v, v.array_pool = [], t.exports = r["default"]
            }, {
                "../utils/log": 251,
                "./constants": 202,
                "./vertex_elements": 212,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/define-property": 20,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            212: [function (e, t, r) {
                "use strict";

                function n(e, t) {
                    var r = t && c ? Uint32Array : Uint16Array;
                    return new r(e)
                }
                var i = e("babel-runtime/helpers/create-class")["default"],
                    o = e("babel-runtime/helpers/class-call-check")["default"],
                    a = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var s = e("../utils/worker_broker"),
                    l = a(s),
                    u = Math.pow(2, 16) - 1,
                    c = !1,
                    f = function () {
                        function e() {
                            o(this, e), this.array = [], this.has_overflown = !1
                        }
                        return i(e, [{
                            key: "push",
                            value: function (e) {
                                (!this.has_overflown || c) && (e > u && (this.has_overflown = !0, !c) || this.array.push(e))
                            }
                        }, {
                            key: "end",
                            value: function () {
                                if (this.array.length) {
                                    var e = n(this.array, this.has_overflown);
                                    return this.array = [], this.has_overflown = !1, e
                                }
                                return !1
                            }
                        }]), e
                    }();
                r["default"] = f, f.setUint32Flag = function (e) {
                    c = e
                }, l["default"].addTarget("VertexElements", f), t.exports = r["default"]
            }, {
                "../utils/worker_broker": 258,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            213: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/core-js/get-iterator")["default"],
                    a = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var s = e("./constants"),
                    l = a(s),
                    u = e("./vertex_data"),
                    c = a(u),
                    f = function () {
                        function e(t) {
                            i(this, e), this.attribs = t, this.components = [], this.index = {}, this.stride = 0;
                            var r = 0,
                                n = !0,
                                a = !1,
                                s = void 0;
                            try {
                                for (var u, c = o(this.attribs); !(n = (u = c.next()).done); n = !0) {
                                    var f = u.value;
                                    f.offset = this.stride, f.byte_size = f.size;
                                    var h = 0;
                                    switch (f.type) {
                                    case l["default"].FLOAT:
                                    case l["default"].INT:
                                    case l["default"].UNSIGNED_INT:
                                        f.byte_size *= 4, h = 2;
                                        break;
                                    case l["default"].SHORT:
                                    case l["default"].UNSIGNED_SHORT:
                                        f.byte_size *= 2, h = 1
                                    }
                                    this.stride += f.byte_size, 3 & this.stride && (this.stride += 4 - (3 & this.stride));
                                    var d = f.offset >> h;
                                    if (f.size > 1)
                                        for (var p = 0; p < f.size; p++) this.components.push([f.type, null, h, d++]);
                                    else this.components.push([f.type, null, h, d]);
                                    this.index[f.name] = r, r += f.size
                                }
                            } catch (m) {
                                a = !0, s = m
                            } finally {
                                try {
                                    !n && c["return"] && c["return"]()
                                } finally {
                                    if (a) throw s
                                }
                            }
                        }
                        return n(e, [{
                            key: "enable",
                            value: function (t, r, n) {
                                for (var i, o, a = 0; a < this.attribs.length; a++) i = this.attribs[a], o = r.attribute(i.name).location, -1 !== o && ((!e.enabled_attribs[o] || n) && t.enableVertexAttribArray(o), t.vertexAttribPointer(o, i.size, i.type, i.normalized, this.stride, i.offset), e.enabled_attribs[o] = r);
                                for (o in e.enabled_attribs) this.disableUnusedAttribute(t, o, r)
                            }
                        }, {
                            key: "disableUnusedAttribute",
                            value: function (t, r, n) {
                                e.enabled_attribs[r] !== n && (t.disableVertexAttribArray(r), delete e.enabled_attribs[r])
                            }
                        }, {
                            key: "createVertexData",
                            value: function () {
                                return new c["default"](this)
                            }
                        }]), e
                    }();
                r["default"] = f, f.enabled_attribs = {}, t.exports = r["default"]
            }, {
                "./constants": 202,
                "./vertex_data": 211,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            214: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/set")["default"],
                    i = e("babel-runtime/core-js/promise")["default"],
                    o = e("babel-runtime/core-js/object/keys")["default"],
                    a = e("babel-runtime/core-js/get-iterator")["default"],
                    s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var l, u = e("./repeat_group"),
                    c = s(u),
                    f = e("../utils/log"),
                    h = s(f);
                r["default"] = l = {
                    tiles: {},
                    links: {},
                    link_id: 0,
                    nextLinkId: function () {
                        return this.link_id++
                    },
                    startTile: function (e) {
                        var t = this.tiles[e] = {
                            bboxes: {
                                aabb: [],
                                obb: []
                            },
                            objects: {},
                            keep: {},
                            styles: new n
                        };
                        t.complete = new i(function (e, r) {
                            t.resolve = e, t.reject = r
                        })
                    },
                    resetTile: function (e) {
                        delete this.tiles[e]
                    },
                    addStyle: function (e, t) {
                        this.tiles[t].styles.add(e)
                    },
                    collide: function (e, t, r) {
                        var n = this.tiles[r];
                        if (!n) return h["default"]("trace", "Collision.collide() called with null tile", r, this.tiles, t, e), i.reject(Error("Collision.collide() called with null tile", r, this.tiles, t, e));
                        for (var o = n.objects, a = 0; a < e.length; a++) {
                            var s = e[a],
                                l = s.layout.priority;
                            o[l] = o[l] || {}, o[l][t] = o[l][t] || [], o[l][t].push(s)
                        }
                        return n.styles["delete"](t), 0 === n.styles.size && this.endTile(r), n.complete.then(function () {
                            return n.keep[t] || []
                        })
                    },
                    endTile: function (e) {
                        var t = this.tiles[e],
                            r = t.bboxes,
                            n = t.keep;
                        c["default"].clear(e);
                        var i = o(t.objects).sort(function (e, t) {
                                return e - t
                            }),
                            s = !0,
                            l = !1,
                            u = void 0;
                        try {
                            for (var f, h = a(i); !(s = (f = h.next()).done); s = !0) {
                                var d = f.value,
                                    p = t.objects[d];
                                if (p)
                                    for (var m in p) {
                                        var g = p[m];
                                        n[m] = n[m] || [];
                                        for (var v = 0; v < g.length; v++) {
                                            var _ = g[v],
                                                y = _.label,
                                                b = _.layout,
                                                x = _.link;
                                            if (!x || this.links[x] !== !1)
                                                if (b.collide && y.discard(r)) b.collide && x && (this.links[x] = !1);
                                                else {
                                                    var w = c["default"].check(y, b, e);
                                                    if (w) continue;
                                                    c["default"].add(y, b, e), y.add(r), n[m].push(g[v]), x && (this.links[x] = !0)
                                                }
                                        }
                                    }
                            }
                        } catch (A) {
                            l = !0, u = A
                        } finally {
                            try {
                                !s && h["return"] && h["return"]()
                            } finally {
                                if (l) throw u
                            }
                        }
                        delete this.tiles[e], t.resolve()
                    }
                }, t.exports = r["default"]
            }, {
                "../utils/log": 251,
                "./repeat_group": 218,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/core-js/set": 15,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            215: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = e("box-intersect"),
                    s = o(a),
                    l = e("../utils/utils"),
                    u = o(l),
                    c = e("../utils/obb"),
                    f = o(c),
                    h = function () {
                        function e(t) {
                            var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            i(this, e), this.size = t, this.options = r, this.position = null, this.aabb = null, this.obb = null
                        }
                        return n(e, [{
                            key: "occluded",
                            value: function (e) {
                                var t = this,
                                    r = !1,
                                    n = e.aabb,
                                    i = e.obb;
                                return n.length > 0 && s["default"]([this.aabb], n, function (e, n) {
                                    return 0 === t.obb.angle && 0 === i[n].angle ? (r = !0, !0) : f["default"].intersect(t.obb, i[n]) ? (r = !0, !0) : void 0
                                }), r
                            }
                        }, {
                            key: "add",
                            value: function (e) {
                                e.aabb.push(this.aabb), e.obb.push(this.obb)
                            }
                        }, {
                            key: "inTileBounds",
                            value: function () {
                                var e = [this.aabb[0], this.aabb[1]],
                                    t = [this.aabb[2], this.aabb[3]];
                                return u["default"].pointInTile(e) && u["default"].pointInTile(t) ? !0 : !1
                            }
                        }, {
                            key: "discard",
                            value: function (e) {
                                if (this.options.cull_from_tile) {
                                    var t = this.inTileBounds();
                                    if (!t && this.options.move_into_tile) {
                                        if (!this.moveIntoTile()) return !0
                                    } else if (!t) return !0
                                }
                                return this.occluded(e)
                            }
                        }]), e
                    }();
                r["default"] = h, h.epsilon = .9999, t.exports = r["default"]
            }, {
                "../utils/obb": 253,
                "../utils/utils": 256,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23,
                "box-intersect": 30
            }],
            216: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/get")["default"],
                    i = e("babel-runtime/helpers/inherits")["default"],
                    o = e("babel-runtime/helpers/create-class")["default"],
                    a = e("babel-runtime/helpers/class-call-check")["default"],
                    s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var l = e("../vector"),
                    u = s(l),
                    c = e("./label"),
                    f = s(c),
                    h = e("../utils/obb"),
                    d = s(h),
                    p = function (e) {
                        function t(e, r, i) {
                            a(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, i), this.lines = r, this.offset = [this.options.offset[0], this.options.offset[1]], this.segment_index = i.segment_start || 0, this.segment_max = i.segment_end || this.lines.length, this.update()
                        }
                        return i(t, e), o(t, [{
                            key: "update",
                            value: function () {
                                var e = this.currentSegment();
                                this.angle = this.computeAngle(), this.position = [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2], this.updateBBoxes()
                            }
                        }, {
                            key: "moveNextSegment",
                            value: function () {
                                return this.segment_index + 1 >= this.segment_max - 1 ? !1 : (this.segment_index++, this.update(), !0)
                            }
                        }, {
                            key: "computeAngle",
                            value: function () {
                                var e = this.currentSegment(),
                                    t = u["default"].sub(e[0], e[1]);
                                t = u["default"].normalize(t);
                                var r = Math.PI / 2,
                                    n = Math.atan2(t[0], t[1]) + r;
                                return (n > r || -r > n) && (n += Math.PI), n %= 2 * Math.PI
                            }
                        }, {
                            key: "fitToSegment",
                            value: function () {
                                var e = this.currentSegment(),
                                    t = u["default"].sub(e[0], e[1]),
                                    r = u["default"].length(t),
                                    n = this.size[0] * this.options.units_per_pixel;
                                if (n > r) {
                                    var i = 100 * (1 - r / n);
                                    return i < this.options.line_exceed
                                }
                                return r >= n
                            }
                        }, {
                            key: "currentSegment",
                            value: function () {
                                var e = this.lines[this.segment_index],
                                    t = this.lines[this.segment_index + 1];
                                return [e, t]
                            }
                        }, {
                            key: "updateBBoxes",
                            value: function () {
                                var e = this.options.units_per_pixel,
                                    t = (this.size[0] + 2 * this.options.buffer[0]) * e * f["default"].epsilon,
                                    r = (this.size[1] + 2 * this.options.buffer[1]) * e * f["default"].epsilon,
                                    n = u["default"].rot(this.offset, this.angle),
                                    i = [this.position[0] + n[0] * e, this.position[1] - n[1] * e];
                                this.obb = new d["default"](i[0], i[1], -this.angle, t, r), this.aabb = this.obb.getExtent()
                            }
                        }, {
                            key: "moveIntoTile",
                            value: function () {
                                for (var e = !1, t = this.fitToSegment();
                                    (!e || !t) && this.moveNextSegment();) e = this.inTileBounds(), t = this.fitToSegment();
                                return e && t
                            }
                        }, {
                            key: "discard",
                            value: function (e) {
                                if (this.lines && !this.fitToSegment())
                                    for (; !this.fitToSegment();)
                                        if (!this.moveNextSegment()) return !0;
                                return n(Object.getPrototypeOf(t.prototype), "discard", this).call(this, e)
                            }
                        }]), t
                    }(f["default"]);
                r["default"] = p, t.exports = r["default"]
            }, {
                "../utils/obb": 253,
                "../vector": 259,
                "./label": 215,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            217: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/get")["default"],
                    i = e("babel-runtime/helpers/inherits")["default"],
                    o = e("babel-runtime/helpers/create-class")["default"],
                    a = e("babel-runtime/helpers/class-call-check")["default"],
                    s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var l = e("./label"),
                    u = s(l),
                    c = e("../geo"),
                    f = s(c),
                    h = e("../utils/obb"),
                    d = s(h),
                    p = e("../styles/points/point_anchor"),
                    m = s(p),
                    g = function (e) {
                        function t(e, r, i) {
                            a(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, r, i), this.position = [e[0], e[1]], this.offset = [this.options.offset[0], this.options.offset[1]], this.update()
                        }
                        return i(t, e), o(t, [{
                            key: "update",
                            value: function () {
                                this.offset = this.computeOffset(), this.updateBBoxes()
                            }
                        }, {
                            key: "computeOffset",
                            value: function () {
                                return m["default"].computeOffset(this.offset, this.size, this.options.anchor)
                            }
                        }, {
                            key: "updateBBoxes",
                            value: function () {
                                var e = (this.size[0] + 2 * this.options.buffer[0]) * this.options.units_per_pixel * u["default"].epsilon,
                                    t = (this.size[1] + 2 * this.options.buffer[1]) * this.options.units_per_pixel * u["default"].epsilon,
                                    r = [this.position[0] + this.offset[0] * this.options.units_per_pixel, this.position[1] - this.offset[1] * this.options.units_per_pixel];
                                this.obb = new d["default"](r[0], r[1], 0, e, t), this.aabb = this.obb.getExtent()
                            }
                        }, {
                            key: "moveIntoTile",
                            value: function () {
                                var e = !1;
                                return this.aabb[0] < 0 && (this.position[0] += -this.aabb[0], e = !0), this.aabb[2] >= f["default"].tile_scale && (this.position[0] -= this.aabb[2] - f["default"].tile_scale + 1, e = !0), this.aabb[3] > 0 && (this.position[1] -= this.aabb[3], e = !0), this.aabb[1] <= -f["default"].tile_scale && (this.position[1] -= this.aabb[1] + f["default"].tile_scale - 1, e = !0), e && this.updateBBoxes(), this.inTileBounds()
                            }
                        }]), t
                    }(u["default"]);
                r["default"] = g, t.exports = r["default"]
            }, {
                "../geo": 201,
                "../styles/points/point_anchor": 235,
                "../utils/obb": 253,
                "./label": 215,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            218: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = e("../geo"),
                    s = o(a),
                    l = function () {
                        function e(t, r, n) {
                            i(this, e), this.key = t, this.repeat_dist = r, this.repeat_dist_sq = this.repeat_dist * this.repeat_dist, this.max_repeat_dist_sq = n * n, this.one_per_group = this.repeat_dist_sq >= this.max_repeat_dist_sq ? !0 : !1, this.positions = []
                        }
                        return n(e, [{
                            key: "check",
                            value: function (e) {
                                if (this.one_per_group) {
                                    if (this.positions.length > 0) return {
                                        dist_sq: this.max_repeat_dist_sq,
                                        repeat_dist_sq: this.repeat_dist_sq,
                                        one_per_group: this.one_per_group
                                    }
                                } else
                                    for (var t = e.position, r = 0; r < this.positions.length; r++) {
                                        var n = this.positions[r],
                                            i = t[0] - n[0],
                                            o = t[1] - n[1],
                                            a = i * i + o * o;
                                        if (a < this.repeat_dist_sq) return {
                                            dist_sq: a,
                                            repeat_dist_sq: this.repeat_dist_sq
                                        }
                                    }
                            }
                        }, {
                            key: "add",
                            value: function (e) {
                                e && e.position && this.positions.push(e.position)
                            }
                        }], [{
                            key: "clear",
                            value: function (e) {
                                this.groups[e] = {}
                            }
                        }, {
                            key: "check",
                            value: function (e, t, r) {
                                return t.repeat_distance && this.groups[r][t.repeat_group] ? this.groups[r][t.repeat_group].check(e) : void 0
                            }
                        }, {
                            key: "add",
                            value: function (t, r, n) {
                                r.repeat_distance && (null == this.groups[n][r.repeat_group] && (this.groups[n][r.repeat_group] = new e(r.repeat_group, r.repeat_distance, e.max_repeat_dist)), this.groups[n][r.repeat_group].add(t))
                            }
                        }]), e
                    }();
                r["default"] = l, l.groups = {}, l.max_repeat_dist = s["default"].tile_scale, t.exports = r["default"]
            }, {
                "../geo": 201,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            219: [function (e, t, r) {
                "use strict";

                function n(e) {
                    return i(e)
                }

                function i(e) {
                    if ("undefined" != typeof s) return new s(e);
                    if (u["default"].is_main) {
                        var t = function () {
                            var t = e.leaflet || window.L,
                                n = t.GridLayer ? t.GridLayer : t.TileLayer,
                                i = n === t.GridLayer ? "1.x" : "0.7.x",
                                a = {};
                            return n === t.TileLayer && (a._addTile = function () {}, a._removeTile = function () {}, a._reset = function () {
                                n.prototype._reset.apply(this, arguments), this.scene && this.scene.container && this.scene.canvas && this.scene.container.appendChild(this.scene.canvas)
                            }), o(a, {
                                initialize: function (e) {
                                    var r = this;
                                    e.showDebug = e.showDebug ? !0 : !1, e.wheelDebounceTime = e.wheelDebounceTime || 40, t.setOptions(this, e), this.createScene(), this.hooks = {}, this._updating_tangram = !1, this._zoomAnimated = !1, this.debounceViewReset = f["default"].debounce(function () {
                                        r._map.fire("zoomend"), r._map.fire("moveend")
                                    }, this.options.wheelDebounceTime)
                                },
                                createScene: function () {
                                    this.scene = d["default"].create(this.options.scene, {
                                        numWorkers: this.options.numWorkers,
                                        preUpdate: this.options.preUpdate,
                                        postUpdate: this.options.postUpdate,
                                        continuousZoom: "1.x" === s.leafletVersion,
                                        highDensityDisplay: this.options.highDensityDisplay,
                                        logLevel: this.options.logLevel,
                                        introspection: this.options.introspection,
                                        disableRenderLoop: this.options.disableRenderLoop,
                                        allowCrossDomainWorkers: this.options.allowCrossDomainWorkers
                                    })
                                },
                                onAdd: function (e) {
                                    var t = this;
                                    this.scene || this.createScene(), n.prototype.onAdd.apply(this, arguments), this.hooks.resize = function () {
                                        t._updating_tangram = !0, t.updateSize(), t._updating_tangram = !1
                                    }, e.on("resize", this.hooks.resize), this.hooks.move = function () {
                                        if (!t._updating_tangram) {
                                            t._updating_tangram = !0;
                                            var r = e.getCenter();
                                            r.zoom = Math.min(e.getZoom(), e.getMaxZoom() || m["default"].default_view_max_zoom), t.scene.view.setView(r), t.scene.immediateRedraw(), t.reverseTransform(), t._updating_tangram = !1
                                        }
                                    }, e.on("move", this.hooks.move), this.hooks.zoomstart = function () {
                                        t._updating_tangram || (t._updating_tangram = !0, t.scene.view.startZoom(), t._updating_tangram = !1)
                                    }, e.on("zoomstart", this.hooks.zoomstart), this.hooks.dragstart = function () {
                                        t.scene.view.panning = !0
                                    }, e.on("dragstart", this.hooks.dragstart), this.hooks.dragend = function () {
                                        t.scene.view.panning = !1
                                    }, e.on("dragend", this.hooks.dragend), e._zoomAnimated = !1, this.modifyScrollWheelBehavior(e), this.setupSelectionEventHandlers(e), this.setSelectionEvents(this.options.events), this.scene.container = this.getContainer(), this.updateView(), this.scene.subscribe({
                                        move: this.onTangramViewUpdate.bind(this)
                                    }), this.scene.load().then(function () {
                                        t._updating_tangram = !0, t.updateSize(), t.updateView(), t.reverseTransform(), t._updating_tangram = !1, t.fire("init")
                                    })["catch"](function (e) {
                                        t.fire("error", e)
                                    })
                                },
                                onRemove: function (e) {
                                    n.prototype.onRemove.apply(this, arguments), e.off("resize", this.hooks.resize), e.off("move", this.hooks.move), e.off("zoomstart", this.hooks.zoomstart), e.off("dragstart", this.hooks.dragstart), e.off("dragend", this.hooks.dragend), e.off("click", this.hooks.click), e.off("mousemove", this.hooks.mousemove), e.off("mouseout", this.hooks.mouseout), this.hooks = {}, this.scene && (this.scene.destroy(), this.scene = null)
                                },
                                createTile: function (e) {
                                    var t = e.x + "/" + e.y + "/" + e.z,
                                        r = document.createElement("div");
                                    if (r.setAttribute("data-tile-key", t), r.style.width = "256px", r.style.height = "256px", this.options.showDebug) {
                                        var n = document.createElement("div");
                                        n.textContent = t, n.style.position = "absolute", n.style.left = 0, n.style.top = 0, n.style.color = "white", n.style.fontSize = "16px", n.style.textOutline = "1px #000000", n.style.padding = "8px", r.appendChild(n), r.style.borderStyle = "solid", r.style.borderColor = "white", r.style.borderWidth = "1px"
                                    }
                                    return r
                                },
                                modifyScrollWheelBehavior: function (e) {
                                    this.scene.view.continuous_zoom && e.scrollWheelZoom && this.options.modifyScrollWheel !== !1 && (e.options.zoomSnap = 0, e.options.wheelPxPerZoomLevel = 1e3, e.options.wheelDebounceTime = 10)
                                },
                                updateView: function () {
                                    var e = this._map.getCenter();
                                    e.zoom = Math.min(this._map.getZoom(), this._map.getMaxZoom() || m["default"].default_view_max_zoom), this.scene.view.setView(e)
                                },
                                updateSize: function () {
                                    var e = this._map.getSize();
                                    this.scene.resizeMap(e.x, e.y)
                                },
                                onTangramViewUpdate: function () {
                                    this._map && !this._updating_tangram && (this._updating_tangram = !0, this._map.setView([this.scene.view.center.lat, this.scene.view.center.lng], this.scene.view.zoom, {
                                        animate: !1
                                    }), this.reverseTransform(), this._updating_tangram = !1)
                                },
                                render: function () {
                                    this.scene && this.scene.update()
                                },
                                reverseTransform: function () {
                                    if (this._map && this.scene && this.scene.container) {
                                        var e = this._map.containerPointToLayerPoint([0, 0]);
                                        t.DomUtil.setPosition(this.scene.container, e)
                                    }
                                },
                                setupSelectionEventHandlers: function (e) {
                                    var t = this;
                                    this._selection_events = {}, this.hooks.click = function (e) {
                                        "function" == typeof t._selection_events.click && t.scene.getFeatureAt(e.containerPoint).then(function (r) {
                                            var n = o({}, r, {
                                                leaflet_event: e
                                            });
                                            t._selection_events.click(n)
                                        })
                                    }, e.on("click", this.hooks.click), this.hooks.mousemove = function (e) {
                                        "function" == typeof t._selection_events.hover && t.scene.getFeatureAt(e.containerPoint).then(function (r) {
                                            var n = o({}, r, {
                                                leaflet_event: e
                                            });
                                            t._selection_events.hover(n)
                                        })
                                    }, e.on("mousemove", this.hooks.mousemove), this.hooks.mouseout = function (e) {
                                        "function" == typeof t._selection_events.hover && t._selection_events.hover({
                                            changed: !0,
                                            leaflet_event: e
                                        })
                                    }, e.on("mouseout", this.hooks.mouseout)
                                },
                                setSelectionEvents: function (e) {
                                    this._selection_events = o(this._selection_events, e)
                                }
                            }), r.LeafletLayer = s = n.extend(a), "function" != typeof s.remove && (s.prototype.remove = function () {
                                this._map && this._map.removeLayer(this), this.fire("remove")
                            }), s.layerBaseClass = n, s.leafletVersion = i, {
                                v: new s(e)
                            }
                        }();
                        if ("object" == typeof t) return t.v
                    }
                }
                var o = e("babel-runtime/core-js/object/assign")["default"],
                    a = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.leafletLayer = n;
                var s, l = e("./utils/thread"),
                    u = a(l),
                    c = e("./utils/utils"),
                    f = a(c),
                    h = e("./scene"),
                    d = a(h),
                    p = e("./geo"),
                    m = a(p);
                r.LeafletLayer = s
            }, {
                "./geo": 201,
                "./scene": 223,
                "./utils/thread": 255,
                "./utils/utils": 256,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            220: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/get")["default"],
                    a = e("babel-runtime/helpers/inherits")["default"],
                    s = e("babel-runtime/helpers/sliced-to-array")["default"],
                    l = e("babel-runtime/core-js/object/keys")["default"],
                    u = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var c = e("./gl/shader_program"),
                    f = u(c),
                    h = e("./gl/glsl"),
                    d = u(h),
                    p = e("./geo"),
                    m = u(p),
                    g = e("./styles/style_parser"),
                    v = "/*\n\nExpected globals:\nlight_accumulator_*\n\n*/\n\nstruct AmbientLight {\n    vec4 ambient;\n};\n\nvoid calculateLight(in AmbientLight _light, in vec3 _eyeToPoint, in vec3 _normal) {\n    light_accumulator_ambient += _light.ambient;\n}\n",
                    _ = "/*\n\nExpected globals:\nmaterial\nlight_accumulator_*\n\n*/\n\nstruct DirectionalLight {\n    vec4 ambient;\n    vec4 diffuse;\n    vec4 specular;\n    vec3 direction;\n};\n\nvoid calculateLight(in DirectionalLight _light, in vec3 _eyeToPoint, in vec3 _normal) {\n\n    light_accumulator_ambient += _light.ambient;\n\n    float nDotVP = clamp(dot(_normal, -normalize(_light.direction)), 0.0, 1.0);\n\n    #ifdef TANGRAM_MATERIAL_DIFFUSE\n        light_accumulator_diffuse += _light.diffuse * nDotVP;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_SPECULAR\n        float pf = 0.0;\n        if (nDotVP > 0.0) {\n            vec3 reflectVector = reflect(normalize(_light.direction), _normal);\n            float eyeDotR = max(dot(normalize(_eyeToPoint), reflectVector), 0.0);\n            pf = pow(eyeDotR, material.shininess);\n        }\n        light_accumulator_specular += _light.specular * pf;\n    #endif\n}\n",
                    y = "/*\n\nExpected globals:\nmaterial\nlight_accumulator_*\n\n*/\n\nstruct PointLight {\n    vec4 ambient;\n    vec4 diffuse;\n    vec4 specular;\n    vec4 position;\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT\n    float attenuationExponent;\n#endif\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n    float innerRadius;\n#endif\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n    float outerRadius;\n#endif\n};\n\nvoid calculateLight(in PointLight _light, in vec3 _eyeToPoint, in vec3 _normal) {\n\n    float dist = length(_light.position.xyz - _eyeToPoint);\n\n    // Compute vector from surface to light position\n    vec3 VP = (_light.position.xyz - _eyeToPoint) / dist;\n\n    // Normalize the vector from surface to light position\n    float nDotVP = clamp(dot(VP, _normal), 0.0, 1.0);\n\n    // Attenuation defaults\n    float attenuation = 1.0;\n    #ifdef TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT\n        float Rin = 1.0;\n        float e = _light.attenuationExponent;\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n            Rin = _light.innerRadius;\n        #endif\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n            float Rdiff = _light.outerRadius-Rin;\n            float d = clamp(max(0.0,dist-Rin)/Rdiff, 0.0, 1.0);\n            attenuation = 1.0-(pow(d,e));\n        #else\n            // If no outer is provide behaves like:\n            // https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\n            float d = max(0.0,dist-Rin)/Rin+1.0;\n            attenuation = clamp(1.0/(pow(d,e)), 0.0, 1.0);\n        #endif\n    #else\n        float Rin = 0.0;\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n            Rin = _light.innerRadius;\n            #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n                float Rdiff = _light.outerRadius-Rin;\n                float d = clamp(max(0.0,dist-Rin)/Rdiff, 0.0, 1.0);\n                attenuation = 1.0-d*d;\n            #else\n                // If no outer is provide behaves like:\n                // https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\n                float d = max(0.0,dist-Rin)/Rin+1.0;\n                attenuation = clamp(1.0/d, 0.0, 1.0);\n            #endif\n        #else\n            #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n                float d = clamp(dist/_light.outerRadius, 0.0, 1.0);\n                attenuation = 1.0-d*d;\n            #else\n                attenuation = 1.0;\n            #endif\n        #endif\n    #endif\n\n    // Computer accumulators\n    light_accumulator_ambient += _light.ambient * attenuation;\n\n    #ifdef TANGRAM_MATERIAL_DIFFUSE\n        light_accumulator_diffuse += _light.diffuse * nDotVP * attenuation;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_SPECULAR\n        float pf = 0.0; // power factor for shiny speculars\n        if (nDotVP > 0.0) {\n            vec3 reflectVector = reflect(-VP, _normal);\n            float eyeDotR = max(0.0, dot(-normalize(_eyeToPoint), reflectVector));\n            pf = pow(eyeDotR, material.shininess);\n        }\n\n        light_accumulator_specular += _light.specular * pf * attenuation;\n    #endif\n}\n",
                    b = "/*\n\nExpected globals:\nmaterial\nlight_accumulator_*\n\n*/\n\nstruct SpotLight {\n    vec4 ambient;\n    vec4 diffuse;\n    vec4 specular;\n    vec4 position;\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT\n    float attenuationExponent;\n#endif\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n    float innerRadius;\n#endif\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n    float outerRadius;\n#endif\n\n    vec3 direction;\n    float spotCosCutoff;\n    float spotExponent;\n};\n\nvoid calculateLight(in SpotLight _light, in vec3 _eyeToPoint, in vec3 _normal) {\n\n    float dist = length(_light.position.xyz - _eyeToPoint);\n\n    // Compute vector from surface to light position\n    vec3 VP = (_light.position.xyz - _eyeToPoint) / dist;\n\n    // normal . light direction\n    float nDotVP = clamp(dot(_normal, VP), 0.0, 1.0);\n\n    // Attenuation defaults\n    float attenuation = 1.0;\n    #ifdef TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT\n        float Rin = 1.0;\n        float e = _light.attenuationExponent;\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n            Rin = _light.innerRadius;\n        #endif\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n            float Rdiff = _light.outerRadius-Rin;\n            float d = clamp(max(0.0,dist-Rin)/Rdiff, 0.0, 1.0);\n            attenuation = 1.0-(pow(d,e));\n        #else\n            // If no outer is provide behaves like:\n            // https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\n            float d = max(0.0,dist-Rin)/Rin+1.0;\n            attenuation = clamp(1.0/(pow(d,e)), 0.0, 1.0);\n        #endif\n    #else\n        float Rin = 0.0;\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n            Rin = _light.innerRadius;\n            #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n                float Rdiff = _light.outerRadius-Rin;\n                float d = clamp(max(0.0,dist-Rin)/Rdiff, 0.0, 1.0);\n                attenuation = 1.0-d*d;\n            #else\n                // If no outer is provide behaves like:\n                // https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\n                float d = max(0.0,dist-Rin)/Rin+1.0;\n                attenuation = clamp(1.0/d, 0.0, 1.0);\n            #endif\n        #else\n            #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n                float d = clamp(dist/_light.outerRadius, 0.0, 1.0);\n                attenuation = 1.0-d*d;\n            #else\n                attenuation = 1.0;\n            #endif\n        #endif\n    #endif\n\n    // spotlight attenuation factor\n    float spotAttenuation = 0.0;\n\n    // See if point on surface is inside cone of illumination\n    float spotDot = clamp(dot(-VP, normalize(_light.direction)), 0.0, 1.0);\n\n    if (spotDot >= _light.spotCosCutoff) {\n        spotAttenuation = pow(spotDot, _light.spotExponent);\n    }\n\n    light_accumulator_ambient += _light.ambient * attenuation * spotAttenuation;\n\n    #ifdef TANGRAM_MATERIAL_DIFFUSE\n        light_accumulator_diffuse += _light.diffuse * nDotVP * attenuation * spotAttenuation;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_SPECULAR\n        // Power factor for shiny speculars\n        float pf = 0.0;\n        if (nDotVP > 0.0) {\n            vec3 reflectVector = reflect(-VP, _normal);\n            float eyeDotR = max(dot(-normalize(_eyeToPoint), reflectVector), 0.0);\n            pf = pow(eyeDotR, material.shininess);\n        }\n        light_accumulator_specular += _light.specular * pf * attenuation * spotAttenuation;\n    #endif\n}\n",
                    x = function () {
                        function e(t, r) {
                            i(this, e), this.name = r.name, this.view = t, this.ambient = null == r.ambient || "number" == typeof r.ambient ? d["default"].expandVec4(r.ambient || 0) : g.StyleParser.parseColor(r.ambient), this.diffuse = null == r.diffuse || "number" == typeof r.diffuse ? d["default"].expandVec4(null != r.diffuse ? r.diffuse : 1) : g.StyleParser.parseColor(r.diffuse), this.specular = null == r.specular || "number" == typeof r.specular ? d["default"].expandVec4(r.specular || 0) : g.StyleParser.parseColor(r.specular)
                        }
                        return n(e, [{
                            key: "inject",
                            value: function () {
                                var t = "\n            uniform " + this.struct_name + " u_" + this.name + ";\n            " + this.struct_name + " " + this.name + ";\n            ",
                                    r = "\n            " + this.name + " = u_" + this.name + ";\n\n        ";
                                f["default"].addBlock(e.block, t), f["default"].addBlock("setup", r)
                            }
                        }, {
                            key: "update",
                            value: function () {}
                        }, {
                            key: "setupProgram",
                            value: function (e) {
                                e.uniform("4fv", "u_" + this.name + ".ambient", this.ambient), e.uniform("4fv", "u_" + this.name + ".diffuse", this.diffuse), e.uniform("4fv", "u_" + this.name + ".specular", this.specular)
                            }
                        }], [{
                            key: "create",
                            value: function (t, r) {
                                return e.types[r.type] ? new e.types[r.type](t, r) : void 0
                            }
                        }, {
                            key: "setMode",
                            value: function (t, r) {
                                t === !0 && (t = "fragment"), t = e.enabled && (null != t ? t : "fragment"), r.defines.TANGRAM_LIGHTING_FRAGMENT = "fragment" === t, r.defines.TANGRAM_LIGHTING_VERTEX = "vertex" === t
                            }
                        }, {
                            key: "inject",
                            value: function (t) {
                                if (f["default"].removeBlock(e.block), e.enabled) {
                                    var r = "";
                                    if (t && l(t).length > 0) {
                                        var n = {};
                                        for (var i in t) n[t[i].type] = !0;
                                        for (var o in n) e.types[o].inject();
                                        for (var i in t) t[i].inject(), r += "calculateLight(" + i + ", _eyeToPoint, _normal);\n"
                                    } else r = "\n                #ifdef TANGRAM_MATERIAL_DIFFUSE\n                    light_accumulator_diffuse = vec4(1.);\n                #endif\n            ";
                                    var a = "\n            vec4 calculateLighting(in vec3 _eyeToPoint, in vec3 _normal, in vec4 _color) {\n\n                // Do initial material calculations over normal, emission, ambient, diffuse and specular values\n                calculateMaterial(_eyeToPoint,_normal);\n\n                // Un roll the loop of individual ligths to calculate\n                " + r + "\n\n                //  Final light intensity calculation\n                vec4 color = vec4(0.0);\n\n                #ifdef TANGRAM_MATERIAL_EMISSION\n                    color = material.emission;\n                #endif\n\n                #ifdef TANGRAM_MATERIAL_AMBIENT\n                    color += light_accumulator_ambient * _color * material.ambient;\n                #else\n                    #ifdef TANGRAM_MATERIAL_DIFFUSE\n                        color += light_accumulator_ambient * _color * material.diffuse;\n                    #endif\n                #endif\n\n                #ifdef TANGRAM_MATERIAL_DIFFUSE\n                    color += light_accumulator_diffuse * _color * material.diffuse;\n                #endif\n\n                #ifdef TANGRAM_MATERIAL_SPECULAR\n                    color += light_accumulator_specular * material.specular;\n                #endif\n\n                // Clamp final color\n                color = clamp(color, 0.0, 1.0);\n\n                return color;\n            }";
                                    f["default"].addBlock(e.block, a)
                                }
                            }
                        }]), e
                    }();
                r["default"] = x, x.types = {}, x.block = "lighting", x.enabled = !0;
                var w = function (e) {
                    function t(e, r) {
                        i(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, r), this.type = "ambient", this.struct_name = "AmbientLight"
                    }
                    return a(t, e), n(t, [{
                        key: "setupProgram",
                        value: function (e) {
                            e.uniform("4fv", "u_" + this.name + ".ambient", this.ambient)
                        }
                    }], [{
                        key: "inject",
                        value: function () {
                            f["default"].addBlock(x.block, v)
                        }
                    }]), t
                }(x);
                x.types.ambient = w;
                var A = function (e) {
                    function t(e, r) {
                        i(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, r), this.type = "directional", this.struct_name = "DirectionalLight", this.direction = (r.direction || [.2, .7, -.5]).map(parseFloat)
                    }
                    return a(t, e), n(t, [{
                        key: "setupProgram",
                        value: function (e) {
                            o(Object.getPrototypeOf(t.prototype), "setupProgram", this).call(this, e), e.uniform("3fv", "u_" + this.name + ".direction", this.direction)
                        }
                    }], [{
                        key: "inject",
                        value: function () {
                            f["default"].addBlock(x.block, _)
                        }
                    }]), t
                }(x);
                x.types.directional = A;
                var T = function (e) {
                    function t(e, r) {
                        i(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, r), this.type = "point", this.struct_name = "PointLight", this.position = r.position || [0, 0, "100px"], this.position_eye = [], this.origin = r.origin || "ground", this.attenuation = isNaN(parseFloat(r.attenuation)) ? 0 : parseFloat(r.attenuation), this.radius = r.radius ? Array.isArray(r.radius) && 2 === r.radius.length ? r.radius : [null, r.radius] : null
                    }
                    return a(t, e), n(t, [{
                        key: "inject",
                        value: function () {
                            o(Object.getPrototypeOf(t.prototype), "inject", this).call(this), f["default"].defines.TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT = 0 !== this.attenuation, f["default"].defines.TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS = null != this.radius && null != this.radius[0], f["default"].defines.TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS = null != this.radius
                        }
                    }, {
                        key: "update",
                        value: function () {
                            this.updateEyePosition()
                        }
                    }, {
                        key: "updateEyePosition",
                        value: function () {
                            if ("world" === this.origin) {
                                var e = m["default"].latLngToMeters(this.position),
                                    t = s(e, 2),
                                    r = t[0],
                                    n = t[1];
                                this.position_eye[0] = r - this.view.camera.position_meters[0], this.position_eye[1] = n - this.view.camera.position_meters[1], this.position_eye[2] = g.StyleParser.convertUnits(this.position[2], {
                                    zoom: this.view.zoom,
                                    meters_per_pixel: m["default"].metersPerPixel(this.view.zoom)
                                }), this.position_eye[2] = this.position_eye[2] - this.view.camera.position_meters[2]
                            } else("ground" === this.origin || "camera" === this.origin) && (this.position_eye = g.StyleParser.convertUnits(this.position, {
                                zoom: this.view.zoom,
                                meters_per_pixel: m["default"].metersPerPixel(this.view.zoom)
                            }), "ground" === this.origin && (this.position_eye[2] = this.position_eye[2] - this.view.camera.position_meters[2]));
                            this.position_eye[3] = 1
                        }
                    }, {
                        key: "setupProgram",
                        value: function (e) {
                            o(Object.getPrototypeOf(t.prototype), "setupProgram", this).call(this, e), e.uniform("4fv", "u_" + this.name + ".position", this.position_eye), f["default"].defines.TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT && e.uniform("1f", "u_" + this.name + ".attenuationExponent", this.attenuation), f["default"].defines.TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS && e.uniform("1f", "u_" + this.name + ".innerRadius", g.StyleParser.convertUnits(this.radius[0], {
                                zoom: this.view.zoom,
                                meters_per_pixel: m["default"].metersPerPixel(this.view.zoom)
                            })), f["default"].defines.TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS && e.uniform("1f", "u_" + this.name + ".outerRadius", g.StyleParser.convertUnits(this.radius[1], {
                                zoom: this.view.zoom,
                                meters_per_pixel: m["default"].metersPerPixel(this.view.zoom)
                            }))
                        }
                    }], [{
                        key: "inject",
                        value: function () {
                            f["default"].addBlock(x.block, y)
                        }
                    }]), t
                }(x);
                x.types.point = T;
                var k = function (e) {
                    function t(e, r) {
                        i(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, r), this.type = "spotlight", this.struct_name = "SpotLight", this.direction = (r.direction || [0, 0, -1]).map(parseFloat), this.exponent = r.exponent ? parseFloat(r.exponent) : .2, this.angle = r.angle ? parseFloat(r.angle) : 20
                    }
                    return a(t, e), n(t, [{
                        key: "setupProgram",
                        value: function (e) {
                            o(Object.getPrototypeOf(t.prototype), "setupProgram", this).call(this, e), e.uniform("3fv", "u_" + this.name + ".direction", this.direction), e.uniform("1f", "u_" + this.name + ".spotCosCutoff", Math.cos(3.14159 * this.angle / 180)), e.uniform("1f", "u_" + this.name + ".spotExponent", this.exponent)
                        }
                    }], [{
                        key: "inject",
                        value: function () {
                            f["default"].addBlock(x.block, b)
                        }
                    }]), t
                }(T);
                x.types.spotlight = k, t.exports = r["default"]
            }, {
                "./geo": 201,
                "./gl/glsl": 205,
                "./gl/shader_program": 207,
                "./styles/style_parser": 241,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24
            }],
            221: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = e("./gl/glsl"),
                    s = o(a),
                    l = e("./styles/style_parser"),
                    u = "/*\n\nDefines globals:\nmaterial\nlight_accumulator_*\n\n*/\n\n\n// MATERIALS\n//\nstruct Material {\n    #ifdef TANGRAM_MATERIAL_EMISSION\n        vec4 emission;\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE\n            vec3 emissionScale;\n        #endif\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_AMBIENT\n        vec4 ambient;\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE\n            vec3 ambientScale;\n        #endif\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_DIFFUSE\n        vec4 diffuse;\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE\n            vec3 diffuseScale;\n        #endif\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_SPECULAR\n        vec4 specular;\n        float shininess;\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE\n            vec3 specularScale;\n        #endif\n    #endif\n\n\n    #ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE\n        vec3 normalScale;\n        float normalAmount;\n    #endif\n};\n\n// Note: uniform is copied to a global instance to allow modification\nuniform Material u_material;\nMaterial material;\n\n#ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE\nuniform sampler2D u_material_emission_texture;\n#endif\n\n#ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE\nuniform sampler2D u_material_ambient_texture;\n#endif\n\n#ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE\nuniform sampler2D u_material_diffuse_texture;\n#endif\n\n#ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE\nuniform sampler2D u_material_specular_texture;\n#endif\n\n#ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE\nuniform sampler2D u_material_normal_texture;\n#endif\n\n// Global light accumulators for each property\nvec4 light_accumulator_ambient = vec4(0.0);\nvec4 light_accumulator_diffuse = vec4(0.0);\n#ifdef TANGRAM_MATERIAL_SPECULAR\n    vec4 light_accumulator_specular = vec4(0.0);\n#endif\n\n\n#ifdef TANGRAM_MATERIAL_TEXTURE_SPHEREMAP\nvec4 getSphereMap (in sampler2D _tex, in vec3 _eyeToPoint, in vec3 _normal, in vec2 _skew) {\n    vec3 eye = normalize(_eyeToPoint);\n    eye.xy -= _skew;\n    eye = normalize(eye);\n\n    vec3 r = reflect(eye, _normal);\n    r.z += 1.0;\n    float m = 2. * length(r);\n    vec2 uv = r.xy / m + .5;\n    return texture2D(_tex, uv);\n}\n#endif\n\n\n#ifdef TANGRAM_MATERIAL_TEXTURE_TRIPLANAR\nvec3 getTriPlanarBlend (in vec3 _normal) {\n    vec3 blending = abs(_normal);\n    blending = normalize(max(blending, 0.00001));\n    float b = (blending.x + blending.y + blending.z);\n    return blending / b;\n}\n\nvec4 getTriPlanar (in sampler2D _tex, in vec3 _pos, in vec3 _normal, in vec3 _scale) {\n    vec3 blending = getTriPlanarBlend(_normal);\n    vec4 xaxis = texture2D(_tex, fract(_pos.yz * _scale.x));\n    vec4 yaxis = texture2D(_tex, fract(_pos.xz * _scale.y));\n    vec4 zaxis = texture2D(_tex, fract(_pos.xy * _scale.z));\n    return  xaxis * blending.x + yaxis * blending.y + zaxis * blending.z;\n}\n#endif\n\n\n#ifdef TANGRAM_MATERIAL_TEXTURE_PLANAR\nvec4 getPlanar (in sampler2D _tex, in vec3 _pos, in vec2 _scale) {\n    return texture2D( _tex, fract(_pos.xy * _scale.x) );\n}\n#endif\n\n\n#ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE\nvoid calculateNormal (inout vec3 _normal) {\n    // Get NORMALMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE_UV\n    _normal += texture2D(u_material_normal_texture, fract(v_texcoord*material.normalScale.xy)).rgb*2.0-1.0;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE_PLANAR\n    vec3 normalTex = getPlanar(u_material_normal_texture, v_world_position.xyz, material.normalScale.xy).rgb*2.0-1.0;\n    _normal += normalTex;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE_TRIPLANAR\n    vec3 normalTex = getTriPlanar(u_material_normal_texture, v_world_position.xyz, _normal, material.normalScale).rgb*2.0-1.0;\n    _normal += normalTex;\n    #endif\n\n    _normal = normalize(_normal);\n}\n#endif\n\nvoid calculateMaterial (in vec3 _eyeToPoint, inout vec3 _normal) {\n    // get EMISSION TEXTUREMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE_UV\n        material.emission *= texture2D(u_material_emission_texture,v_texcoord);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE_PLANAR\n        material.emission *= getPlanar(u_material_emission_texture, v_world_position.xyz, material.emissionScale.xy);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE_TRIPLANAR\n        material.emission *= getTriPlanar(u_material_emission_texture, v_world_position.xyz, _normal, material.emissionScale);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE_SPHEREMAP\n        material.emission *= getSphereMap(u_material_emission_texture, _eyeToPoint, _normal, u_vanishing_point);\n        #endif\n    #endif\n\n    // get AMBIENT TEXTUREMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE_UV\n        material.ambient *= texture2D(u_material_ambient_texture,v_texcoord);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE_PLANAR\n        material.ambient *= getPlanar(u_material_ambient_texture, v_world_position.xyz, material.ambientScale.xy);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE_TRIPLANAR\n        material.ambient *= getTriPlanar(u_material_ambient_texture, v_world_position.xyz, _normal, material.ambientScale);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE_SPHEREMAP\n        material.ambient *= getSphereMap(u_material_ambient_texture, _eyeToPoint, _normal, u_vanishing_point);\n        #endif\n    #endif\n\n    // get DIFFUSE TEXTUREMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE_UV\n        material.diffuse *= texture2D(u_material_diffuse_texture,v_texcoord);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE_PLANAR\n        material.diffuse *= getPlanar(u_material_diffuse_texture, v_world_position.xyz, material.diffuseScale.xy);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE_TRIPLANAR\n        material.diffuse *= getTriPlanar(u_material_diffuse_texture, v_world_position.xyz, _normal, material.diffuseScale);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE_SPHEREMAP\n        material.diffuse *= getSphereMap(u_material_diffuse_texture, _eyeToPoint, _normal, u_vanishing_point);\n        #endif\n    #endif\n\n    // get SPECULAR TEXTUREMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE_UV\n        material.specular *= texture2D(u_material_specular_texture,v_texcoord);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE_PLANAR\n        material.specular *= getPlanar(u_material_specular_texture, v_world_position.xyz, material.specularScale.xy);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE_TRIPLANAR\n        material.specular *= getTriPlanar(u_material_specular_texture, v_world_position.xyz, _normal, material.specularScale);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE_SPHEREMAP\n        material.specular *= getSphereMap(u_material_specular_texture, _eyeToPoint, _normal, u_vanishing_point);\n        #endif\n    #endif\n}\n",
                    c = function () {
                        function e(t) {
                            i(this, e), t = t || {};
                            for (var r = ["emission", "ambient", "diffuse", "specular"], n = 0; n < r.length; n++) {
                                var o = r[n],
                                    a = t[o];
                                null != a && (this[o] = a.texture ? {
                                    texture: a.texture,
                                    mapping: a.mapping || "spheremap",
                                    scale: s["default"].expandVec3(null != a.scale ? a.scale : 1),
                                    amount: s["default"].expandVec4(null != a.amount ? a.amount : 1)
                                } : "number" == typeof a || Array.isArray(a) ? {
                                    amount: s["default"].expandVec4(a)
                                } : "string" == typeof a ? {
                                    amount: l.StyleParser.parseColor(a)
                                } : a)
                            }
                            this.specular && (this.specular.shininess = t.shininess ? parseFloat(t.shininess) : .2), null != t.normal && (this.normal = {
                                texture: t.normal.texture,
                                mapping: t.normal.mapping || "triplanar",
                                scale: s["default"].expandVec3(null != t.normal.scale ? t.normal.scale : 1),
                                amount: null != t.normal.amount ? t.normal.amount : 1
                            })
                        }
                        return n(e, [{
                            key: "inject",
                            value: function (t) {
                                for (var r = ["emission", "ambient", "diffuse", "specular"], n = 0; n < r.length; n++) {
                                    var i = r[n],
                                        o = "TANGRAM_MATERIAL_" + i.toUpperCase(),
                                        a = o + "_TEXTURE";
                                    t.defines[o] = null != this[i], this[i] && this[i].texture && (t.defines[a] = !0, t.defines[a + "_" + this[i].mapping.toUpperCase()] = !0, t.defines["TANGRAM_MATERIAL_TEXTURE_" + this[i].mapping.toUpperCase()] = !0, t.texcoords = t.texcoords || "uv" === this[i].mapping)
                                }
                                this.normal && this.normal.texture && (t.defines.TANGRAM_MATERIAL_NORMAL_TEXTURE = !0, t.defines["TANGRAM_MATERIAL_NORMAL_TEXTURE_" + this.normal.mapping.toUpperCase()] = !0, t.defines["TANGRAM_MATERIAL_TEXTURE_" + this.normal.mapping.toUpperCase()] = !0, t.texcoords = t.texcoords || "uv" === this.normal.mapping), t.replaceShaderBlock(e.block, u, "Material"), t.addShaderBlock("setup", "\nmaterial = u_material;\n", "Material")
                            }
                        }, {
                            key: "setupProgram",
                            value: function (e) {
                                for (var t = ["emission", "ambient", "diffuse", "specular"], r = 0; r < t.length; r++) {
                                    var n = t[r];
                                    this[n] && (this[n].texture ? (e.setTextureUniform("u_material_" + n + "_texture", this[n].texture), e.uniform("3fv", "u_material." + n + "Scale", this[n].scale), e.uniform("4fv", "u_material." + n, this[n].amount)) : this[n].amount && e.uniform("4fv", "u_material." + n, this[n].amount))
                                }
                                this.specular && e.uniform("1f", "u_material.shininess", this.specular.shininess), this.normal && this.normal.texture && (e.setTextureUniform("u_material_normal_texture", this.normal.texture), e.uniform("3fv", "u_material.normalScale", this.normal.scale), e.uniform("1f", "u_material.normalAmount", this.normal.amount))
                            }
                        }], [{
                            key: "isValid",
                            value: function (e) {
                                return null == e ? !1 : null == e.emission && null == e.ambient && null == e.diffuse && null == e.specular ? !1 : !0
                            }
                        }]), e
                    }();
                r["default"] = c, c.block = "material", t.exports = r["default"]
            }, {
                "./gl/glsl": 205,
                "./styles/style_parser": 241,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            222: [function (e, t) {
                "use strict";
                var r = e("babel-runtime/core-js/promise")["default"],
                    n = e("babel-runtime/helpers/interop-require-default")["default"],
                    i = e("./leaflet_layer"),
                    o = e("./scene"),
                    a = n(o),
                    s = e("./scene_worker"),
                    l = e("./utils/version"),
                    u = n(l),
                    c = e("./utils/log"),
                    f = n(c),
                    h = e("./utils/thread"),
                    d = n(h),
                    p = e("./utils/utils"),
                    m = n(p),
                    g = e("./geo"),
                    v = n(g),
                    _ = e("./sources/data_source"),
                    y = n(_);
                e("./sources/geojson"), e("./sources/topojson"), e("./sources/mvt"), e("./sources/raster");
                var b = e("./gl/glsl"),
                    x = n(b),
                    w = e("./gl/shader_program"),
                    A = n(w),
                    T = e("./gl/vertex_data"),
                    k = n(T),
                    E = e("./gl/texture"),
                    R = n(E),
                    S = e("./material"),
                    M = n(S),
                    j = e("./light"),
                    P = n(j),
                    N = e("./utils/worker_broker"),
                    z = n(N),
                    L = e("./styles/layer"),
                    O = e("./styles/style_manager"),
                    I = e("./styles/style_parser"),
                    U = e("./labels/collision"),
                    F = n(U),
                    D = e("./selection"),
                    C = n(D),
                    $ = e("./styles/text/canvas_text"),
                    G = n($),
                    B = e("js-yaml"),
                    q = n(B),
                    V = {
                        log: f["default"],
                        yaml: q["default"],
                        Thread: d["default"],
                        Utils: m["default"],
                        Geo: v["default"],
                        DataSource: y["default"],
                        GLSL: x["default"],
                        ShaderProgram: A["default"],
                        VertexData: k["default"],
                        Texture: R["default"],
                        Material: M["default"],
                        Light: P["default"],
                        Scene: a["default"],
                        SceneWorker: s.SceneWorker,
                        WorkerBroker: z["default"],
                        layer_cache: L.layer_cache,
                        StyleManager: O.StyleManager,
                        StyleParser: I.StyleParser,
                        Collision: F["default"],
                        FeatureSelection: C["default"],
                        CanvasText: G["default"]
                    };
                d["default"].is_main && (m["default"].requestAnimationFramePolyfill(), void 0 === window.Promise && (window.Promise = r)), t.exports = {
                    leafletLayer: i.leafletLayer,
                    debug: V,
                    version: u["default"].string
                }
            }, {
                "./geo": 201,
                "./gl/glsl": 205,
                "./gl/shader_program": 207,
                "./gl/texture": 208,
                "./gl/vertex_data": 211,
                "./labels/collision": 214,
                "./leaflet_layer": 219,
                "./light": 220,
                "./material": 221,
                "./scene": 223,
                "./scene_worker": 225,
                "./selection": 226,
                "./sources/data_source": 227,
                "./sources/geojson": 228,
                "./sources/mvt": 229,
                "./sources/raster": 230,
                "./sources/topojson": 231,
                "./styles/layer": 232,
                "./styles/style_manager": 240,
                "./styles/style_parser": 241,
                "./styles/text/canvas_text": 242,
                "./utils/log": 251,
                "./utils/thread": 255,
                "./utils/utils": 256,
                "./utils/version": 257,
                "./utils/worker_broker": 258,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/interop-require-default": 23,
                "js-yaml": 155
            }],
            223: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/to-consumable-array")["default"],
                    a = e("babel-runtime/helpers/sliced-to-array")["default"],
                    s = e("babel-runtime/core-js/object/keys")["default"],
                    l = e("babel-runtime/core-js/promise")["default"],
                    u = e("babel-runtime/core-js/object/assign")["default"],
                    c = e("babel-runtime/core-js/get-iterator")["default"],
                    f = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var h = e("./utils/log"),
                    d = f(h),
                    p = e("./utils/utils"),
                    m = f(p),
                    g = e("./utils/worker_broker"),
                    v = f(g),
                    _ = e("./utils/subscribe"),
                    y = f(_),
                    b = e("./gl/context"),
                    x = f(b),
                    w = e("./gl/texture"),
                    A = f(w),
                    T = e("./gl/vao"),
                    k = f(T),
                    E = e("./styles/style"),
                    R = e("./styles/style_manager"),
                    S = e("./styles/style_parser"),
                    M = e("./scene_loader"),
                    j = f(M),
                    P = e("./view"),
                    N = f(P),
                    z = e("./light"),
                    L = f(z),
                    O = e("./tile_manager"),
                    I = f(O),
                    U = e("./sources/data_source"),
                    F = f(U),
                    D = e("./selection"),
                    C = f(D),
                    $ = e("./gl/render_state"),
                    G = f($),
                    B = e("./styles/text/canvas_text"),
                    q = f(B),
                    V = e("./styles/polygons/polygons"),
                    W = e("./styles/lines/lines"),
                    X = e("./styles/points/points"),
                    H = e("./styles/text/text"),
                    Y = e("./styles/raster/raster");
                R.StyleManager.register(V.Polygons), R.StyleManager.register(W.Lines), R.StyleManager.register(X.Points), R.StyleManager.register(H.TextStyle), R.StyleManager.register(Y.RasterStyle);
                var Z = function () {
                    function e(t, r) {
                        i(this, e), r = r || {}, y["default"](this), this.initialized = !1, this.initializing = null, this.sources = {}, this.view = new N["default"](this, r), this.tile_manager = new I["default"]({
                            scene: this,
                            view: this.view
                        }), this.num_workers = r.numWorkers || 2, this.worker_url = r.workerUrl, r.disableVertexArrayObjects === !0 && (k["default"].disabled = !0), m["default"].use_high_density_display = void 0 !== r.highDensityDisplay ? r.highDensityDisplay : !0, m["default"].updateDevicePixelRatio(), this.config = null, this.config_source = t, this.config_serialized = null, this.last_valid_config_source = null, this.styles = null, this.active_styles = {}, this.building = null, this.dirty = !0, this.animated = !1, this.preUpdate = r.preUpdate, this.postUpdate = r.postUpdate, this.render_loop = !r.disableRenderLoop, this.render_loop_active = !1, this.render_loop_stop = !1, this.render_count = 0, this.last_render_count = 0, this.render_count_changed = !1, this.frame = 0, this.queue_screenshot = null, this.selection = null, this.introspection = !1, this.resetTime(), this.container = r.container, this.lights = null, this.background = null, this.createListeners(), this.updating = 0, this.generation = 0, this.last_complete_generation = 0, this.setupDebug(), this.log_level = r.logLevel || "warn", d["default"].setLevel(this.log_level)
                    }
                    return n(e, [{
                        key: "load",
                        value: function () {
                            var e = this,
                                t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0],
                                r = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                            return this.initializing ? this.initializing : (this.updating++, this.initialized = !1, this.initializing = this.loadScene(t, r).then(function () {
                                return e.createWorkers()
                            }).then(function () {
                                return e.createCanvas(), e.resetFeatureSelection(), e.tile_manager.pruneToVisibleTiles(), e.updateConfig({
                                    serialize_funcs: "object" == typeof t
                                })
                            }).then(function () {
                                e.updating--, e.initializing = null, e.initialized = !0, e.last_valid_config_source = e.config_source, e.last_valid_config_path = e.config_path, e.render_loop !== !1 && e.setupRenderLoop(), e.requestRedraw()
                            })["catch"](function (t) {
                                e.initializing = null, e.updating = 0;
                                var r = void 0,
                                    n = void 0;
                                if ("YAMLException" === t.name ? (r = "yaml", n = "Error parsing scene YAML") : n = "Error initializing scene", e.trigger("error", {
                                        type: r,
                                        message: n,
                                        error: t,
                                        url: e.config_source
                                    }), n = "Scene.load() failed to load " + e.config_source + ": " + t.message, e.last_valid_config_source) return d["default"]("warn", n, t), d["default"]("info", "Scene.load() reverting to last valid configuration"), e.load(e.last_valid_config_source, e.last_valid_config_path);
                                throw d["default"]("error", n, t), t
                            }), this.initializing)
                        }
                    }, {
                        key: "reload",
                        value: function () {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0],
                                t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                            return this.load(e, t)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            if (this.initialized = !1, this.render_loop_stop = !0, this.destroyListeners(), this.canvas && this.canvas.parentNode && (this.canvas.parentNode.removeChild(this.canvas), this.canvas = null), this.container = null, this.selection && this.selection.destroy(), this.gl) {
                                A["default"].destroy(this.gl), R.StyleManager.destroy(this.gl), this.styles = {};
                                var e = this.gl.getExtension("WEBGL_lose_context");
                                e && e.loseContext(), this.gl = null
                            }
                            this.sources = {}, this.destroyWorkers(), this.tile_manager.destroy(), this.tile_manager = null
                        }
                    }, {
                        key: "createCanvas",
                        value: function () {
                            if (!this.canvas) {
                                this.container = this.container || document.body, this.canvas = document.createElement("canvas"), this.canvas.style.position = "absolute", this.canvas.style.top = 0, this.canvas.style.left = 0, this.container.style.backgroundColor = "transparent", this.container.appendChild(this.canvas);
                                try {
                                    this.gl = x["default"].getContext(this.canvas, {
                                        alpha: !0,
                                        premultipliedAlpha: !0,
                                        device_pixel_ratio: m["default"].device_pixel_ratio
                                    })
                                } catch (e) {
                                    throw new Error("Couldn't create WebGL context. Your browser may not support WebGL, or it's turned off? Visit http://webglreport.com/ for more info.")
                                }
                                this.resizeMap(this.container.clientWidth, this.container.clientHeight), k["default"].init(this.gl), this.render_states = new G["default"](this.gl);
                                var t = this.gl.getExtension("OES_element_index_uint") ? !0 : !1;
                                v["default"].postMessage(this.workers, "VertexElements.setUint32Flag", t)
                            }
                        }
                    }, {
                        key: "getWorkerUrl",
                        value: function () {
                            var e = this.worker_url || m["default"].findCurrentURL("tangram.debug.js", "tangram.min.js");
                            if (!e) throw new Error("Can't load worker because couldn't find base URL that library was loaded from");
                            var t = [].concat(o(this.data_source_scripts));
                            t.push(e);
                            var r = "importScripts(" + t.map(function (e) {
                                return "'" + e + "'"
                            }).join(",") + ");";
                            return m["default"].createObjectURL(new Blob([r], {
                                type: "application/javascript"
                            }))
                        }
                    }, {
                        key: "updateDataSourceScripts",
                        value: function () {
                            var e, t = this,
                                r = [].concat(o(this.data_source_scripts || [])),
                                n = s(this.config.sources).map(function (e) {
                                    return t.config.sources[e].scripts
                                }).filter(function (e) {
                                    return e
                                });
                            return n.length > 0 && d["default"]("debug", "loading custom data source scripts in worker:", n), this.data_source_scripts = (e = []).concat.apply(e, o(n)).sort(), !(this.data_source_scripts.length === r.length && this.data_source_scripts.every(function (e, t) {
                                return e === r[t]
                            }))
                        }
                    }, {
                        key: "createWorkers",
                        value: function () {
                            return this.updateDataSourceScripts() && this.destroyWorkers(), this.workers ? l.resolve() : this.makeWorkers(this.getWorkerUrl())
                        }
                    }, {
                        key: "makeWorkers",
                        value: function (e) {
                            var t = this,
                                r = [];
                            this.workers = [];
                            for (var n = function () {
                                    o = new Worker(e), t.workers[i] = o, v["default"].addWorker(o), d["default"]("debug", "Scene.makeWorkers: initializing worker " + i);
                                    var n = i;
                                    r.push(v["default"].postMessage(o, "self.init", i, t.num_workers, t.log_level, m["default"].device_pixel_ratio).then(function (e) {
                                        return d["default"]("debug", "Scene.makeWorkers: initialized worker " + e), e
                                    }, function (e) {
                                        return d["default"]("error", "Scene.makeWorkers: failed to initialize worker " + n + ":", e), l.reject(e)
                                    }))
                                }, i = 0; i < this.num_workers; i++) {
                                var o;
                                n()
                            }
                            return this.next_worker = 0, l.all(r).then(function () {
                                return d["default"].setWorkers(t.workers)
                            })
                        }
                    }, {
                        key: "destroyWorkers",
                        value: function () {
                            Array.isArray(this.workers) && (d["default"].setWorkers(null), this.workers.forEach(function (e) {
                                e.terminate(), v["default"].removeWorker(e)
                            }), this.workers = null)
                        }
                    }, {
                        key: "nextWorker",
                        value: function () {
                            var e = this.workers[this.next_worker];
                            return this.next_worker = (this.next_worker + 1) % this.workers.length, e
                        }
                    }, {
                        key: "ready",
                        value: function () {
                            return this.view.ready() && 0 !== s(this.sources).length ? !0 : !1
                        }
                    }, {
                        key: "updateDevicePixelRatio",
                        value: function () {
                            var e = this;
                            m["default"].updateDevicePixelRatio() && v["default"].postMessage(this.workers, "self.updateDevicePixelRatio", m["default"].device_pixel_ratio).then(function () {
                                return e.rebuild()
                            }).then(function () {
                                return e.resizeMap(e.view.size.css.width, e.view.size.css.height)
                            })
                        }
                    }, {
                        key: "resizeMap",
                        value: function (e, t) {
                            this.dirty = !0, this.view.setViewportSize(e, t), this.gl && x["default"].resize(this.gl, e, t, m["default"].device_pixel_ratio)
                        }
                    }, {
                        key: "requestRedraw",
                        value: function () {
                            this.dirty = !0
                        }
                    }, {
                        key: "immediateRedraw",
                        value: function () {
                            this.dirty = !0, this.update()
                        }
                    }, {
                        key: "renderLoop",
                        value: function () {
                            this.render_loop_active = !0, this.initialized && this.update(), this.render_loop_stop ? (this.render_loop_stop = !1, this.render_loop_active = !1) : window.requestAnimationFrame(this.renderLoop.bind(this))
                        }
                    }, {
                        key: "setupRenderLoop",
                        value: function () {
                            var e = this;
                            this.render_loop_active || setTimeout(function () {
                                e.renderLoop()
                            }, 0)
                        }
                    }, {
                        key: "update",
                        value: function () {
                            var e = !(this.dirty === !1 || this.initialized === !1 || this.updating > 0 || this.ready() === !1);
                            return "function" == typeof this.preUpdate && this.preUpdate(e), e ? (this.dirty = !1, this.updateDevicePixelRatio(), this.render(), this.updateViewComplete(), this.completeScreenshot(), "function" == typeof this.postUpdate && this.postUpdate(e), this.animated === !0 && (this.dirty = !0), this.frame++, d["default"]("trace", "Scene.render()"), !0) : !1
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.gl;
                            if (this.view.update(), s(this.active_styles).forEach(function (t) {
                                    return e.styles[t].update()
                                }), s(this.lights).forEach(function (t) {
                                    return e.lights[t].update()
                                }), this.renderable_tiles = this.tile_manager.getRenderableTiles(), this.renderable_tiles_count = this.renderable_tiles.length, this.render_count = this.renderPass(), this.selection.pendingRequests()) {
                                if (this.view.panning || this.view.zooming) return void this.selection.clearPendingRequests();
                                this.selection.bind(), this.renderPass("selection_program", {
                                    allow_blend: !1
                                }), this.selection.read(), t.bindFramebuffer(t.FRAMEBUFFER, null), t.viewport(0, 0, this.canvas.width, this.canvas.height)
                            }
                            return this.render_count_changed = !1, this.render_count !== this.last_render_count && (this.render_count_changed = !0, this.getFeatureSelectionMapSize().then(function (t) {
                                d["default"]("info", "Scene: rendered " + e.render_count + " primitives (" + t + " features in selection map)")
                            }, function () {})), this.last_render_count = this.render_count, !0
                        }
                    }, {
                        key: "renderPass",
                        value: function () {
                            var e = this,
                                t = arguments.length <= 0 || void 0 === arguments[0] ? "program" : arguments[0],
                                r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                n = r.allow_blend;
                            n = null == n ? !0 : n, this.clearFrame({
                                clear_color: !0,
                                clear_depth: !0
                            });
                            for (var i = s(this.active_styles).map(function (t) {
                                    return e.styles[t]
                                }).sort(E.Style.blendOrderSort), o = 0, a = void 0, l = 0; l < i.length; l++) {
                                var c = i[l];
                                if (c.blend !== a) {
                                    var f = u({}, E.Style.render_states[c.blend], {
                                        blend: n && c.blend
                                    });
                                    this.setRenderState(f)
                                }
                                o += this.renderStyle(c.name, t), a = c.blend
                            }
                            return o
                        }
                    }, {
                        key: "renderStyle",
                        value: function (e, t) {
                            var r = !0,
                                n = 0,
                                i = this.styles[e][t];
                            if (!i || !i.compiled) return 0;
                            for (var o in this.renderable_tiles) {
                                var a = this.renderable_tiles[o];
                                if (null != a.meshes[e]) {
                                    if (r === !0) {
                                        r = !1, i.use(), this.styles[e].setup(), i.uniform("1f", "u_time", this.animated ? (+new Date - this.start_time) / 1e3 : 0), this.view.setupProgram(i);
                                        for (var s in this.lights) this.lights[s].setupProgram(i)
                                    }
                                    this.view.setupTile(a, i), this.styles[e].render(a.meshes[e]), n += a.meshes[e].geometry_count
                                }
                            }
                            return n
                        }
                    }, {
                        key: "clearFrame",
                        value: function () {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                t = e.clear_color,
                                r = e.clear_depth;
                            if (this.initialized) {
                                t = t === !1 ? !1 : !0, r = r === !1 ? !1 : !0, this.render_states.depth_write.set({
                                    depth_write: r
                                });
                                var n = this.gl;
                                if (t || r) {
                                    var i = (t && n.COLOR_BUFFER_BIT) | (r && n.DEPTH_BUFFER_BIT);
                                    n.clear(i)
                                }
                            }
                        }
                    }, {
                        key: "setRenderState",
                        value: function () {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                t = e.depth_test,
                                r = e.depth_write,
                                n = e.cull_face,
                                i = e.blend;
                            if (this.initialized) {
                                var o = this.render_states;
                                t = t === !1 ? !1 : o.defaults.depth_test, r = r === !1 ? !1 : o.defaults.depth_write, n = n === !1 ? !1 : o.defaults.culling, i = null != i ? i : o.defaults.blending;
                                var a = this.gl;
                                o.depth_test.set({
                                    depth_test: t
                                }), o.depth_write.set({
                                    depth_write: r
                                }), o.culling.set({
                                    cull: n,
                                    face: o.defaults.culling_face
                                }), i ? "opaque" === i ? o.blending.set({
                                    blend: !0,
                                    src: a.SRC_ALPHA,
                                    dst: a.ZERO
                                }) : "overlay" === i || "inlay" === i ? o.blending.set({
                                    blend: !0,
                                    src: a.SRC_ALPHA,
                                    dst: a.ONE_MINUS_SRC_ALPHA,
                                    src_alpha: a.ONE,
                                    dst_alpha: a.ONE_MINUS_SRC_ALPHA
                                }) : "add" === i ? o.blending.set({
                                    blend: !0,
                                    src: a.ONE,
                                    dst: a.ONE,
                                    src_alpha: a.ONE,
                                    dst_alpha: a.ONE_MINUS_SRC_ALPHA
                                }) : "multiply" === i && o.blending.set({
                                    blend: !0,
                                    src: a.ZERO,
                                    dst: a.SRC_COLOR,
                                    src_alpha: a.ONE,
                                    dst_alpha: a.ONE_MINUS_SRC_ALPHA
                                }) : o.blending.set({
                                    blend: !1
                                })
                            }
                        }
                    }, {
                        key: "getFeatureAt",
                        value: function (e) {
                            if (!this.initialized) return d["default"]("debug", "Scene.getFeatureAt() called before scene was initialized"), l.resolve();
                            var t = {
                                x: e.x * m["default"].device_pixel_ratio / this.view.size.device.width,
                                y: e.y * m["default"].device_pixel_ratio / this.view.size.device.height
                            };
                            return this.dirty = !0, this.selection.getFeatureAt(t).then(function (t) {
                                return u(t, {
                                    pixel: e
                                })
                            })["catch"](function (e) {
                                return l.resolve({
                                    error: e
                                })
                            })
                        }
                    }, {
                        key: "rebuild",
                        value: function (e) {
                            return this.rebuildGeometry(e)
                        }
                    }, {
                        key: "rebuildGeometry",
                        value: function () {
                            var e = this,
                                t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                r = t.sync,
                                n = void 0 === r ? !0 : r,
                                i = t.sources,
                                o = void 0 === i ? null : i,
                                a = t.serialize_funcs;
                            return new l(function (t, r) {
                                return e.building ? (e.building.queued && e.building.queued.reject && (d["default"]("debug", "Scene.rebuildGeometry: request superceded by a newer call"), e.building.queued.resolve(!1)), e.building.queued = {
                                    resolve: t,
                                    reject: r
                                }, void d["default"]("trace", "Scene.rebuildGeometry(): queuing request")) : (e.building = {
                                    resolve: t,
                                    reject: r
                                }, e.debug.profile.geometry_build && e._profile("rebuildGeometry"), n && (e.syncConfigToWorker({
                                    serialize_funcs: a
                                }), R.StyleManager.compile(e.updateActiveStyles(), e)), e.resetFeatureSelection(), e.resetTime(), e.tile_manager.pruneToVisibleTiles(), e.tile_manager.forEachTile(function (t) {
                                    (!o || o.indexOf(t.source.name) > -1) && e.tile_manager.buildTile(t)
                                }), e.tile_manager.updateTilesForView(), void e.tile_manager.checkBuildQueue())
                            }).then(function () {
                                e.debug.profile.geometry_build && e._profileEnd("rebuildGeometry")
                            })
                        }
                    }, {
                        key: "tileManagerBuildDone",
                        value: function () {
                            if (this.building) {
                                d["default"]("info", "Scene: build geometry finished"), this.building.resolve && this.building.resolve(!0);
                                var e = this.building.queued;
                                this.building = null, e && (d["default"]("debug", "Scene: starting queued rebuildGeometry() request"), this.rebuildGeometry().then(e.resolve, e.reject))
                            }
                        }
                    }, {
                        key: "loadScene",
                        value: function () {
                            var e = this,
                                t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0],
                                r = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                            return this.config_source = t || this.config_source, this.config_path = m["default"].pathForURL("string" == typeof this.config_source ? r || this.config_source : r), j["default"].loadScene(this.config_source, this.config_path).then(function (t) {
                                return e.config = t, e.trigger("load", {
                                    config: e.config
                                }), e.config
                            })
                        }
                    }, {
                        key: "setDataSource",
                        value: function (e, t) {
                            if (!e || !t || !t.type || !t.url && !t.data) return void d["default"]("error", "No name provided or not a valid config:", e, t);
                            var r = null == this.config.sources[e],
                                n = this.config.sources[e] = u({}, t);
                            return n.data && "object" == typeof n.data && (n.url = m["default"].createObjectURL(new Blob([JSON.stringify(n.data)])), delete n.data), r ? this.updateConfig({
                                rebuild: {
                                    sources: [e]
                                }
                            }) : this.rebuild({
                                sources: [e]
                            })
                        }
                    }, {
                        key: "createDataSources",
                        value: function () {
                            var e = [],
                                t = s(this.sources);
                            for (var r in this.config.sources) {
                                var n = this.config.sources[r],
                                    i = this.sources[r];
                                try {
                                    if (this.sources[r] = F["default"].create(u({}, n, {
                                            name: r
                                        }), this.sources), !this.sources[r]) throw {}
                                } catch (o) {
                                    delete this.sources[r];
                                    var a = "Could not create data source: " + o.message;
                                    d["default"]("warn", "Scene: " + a, n), this.trigger("warning", {
                                        type: "sources",
                                        source: n,
                                        message: a
                                    })
                                }
                                F["default"].changed(this.sources[r], i) && e.push(r)
                            }
                            var l = !0,
                                f = !1,
                                h = void 0;
                            try {
                                for (var p, g = c(t); !(l = (p = g.next()).done); l = !0) {
                                    var v = p.value;
                                    this.config.sources[v] || (delete this.sources[v], e.push(v))
                                }
                            } catch (_) {
                                f = !0, h = _
                            } finally {
                                try {
                                    !l && g["return"] && g["return"]()
                                } finally {
                                    if (f) throw h
                                }
                            }
                            e.length > 0 && this.tile_manager.removeTiles(function (t) {
                                return e.indexOf(t.source.name) > -1
                            });
                            var y = !0,
                                b = !1,
                                x = void 0;
                            try {
                                for (var w, A = c(m["default"].values(this.config.layers)); !(y = (w = A.next()).done); y = !0) {
                                    var T = w.value;
                                    T.data && this.sources[T.data.source] && (this.sources[T.data.source].geometry_tiles = !0)
                                }
                            } catch (_) {
                                b = !0, x = _
                            } finally {
                                try {
                                    !y && A["return"] && A["return"]()
                                } finally {
                                    if (b) throw x
                                }
                            }
                        }
                    }, {
                        key: "loadTextures",
                        value: function () {
                            var e = this;
                            return A["default"].createFromObject(this.gl, this.config.textures).then(function () {
                                return A["default"].createDefault(e.gl)
                            })
                        }
                    }, {
                        key: "updateStyles",
                        value: function () {
                            if (!this.initialized && !this.initializing) throw new Error("Scene.updateStyles() called before scene was initialized");
                            this.styles = R.StyleManager.build(this.config.styles, this);
                            var e = !0,
                                t = !1,
                                r = void 0;
                            try {
                                for (var n, i = c(m["default"].values(this.styles)); !(e = (n = i.next()).done); e = !0) {
                                    var o = n.value;
                                    o.setGL(this.gl)
                                }
                            } catch (a) {
                                t = !0, r = a
                            } finally {
                                try {
                                    !e && i["return"] && i["return"]()
                                } finally {
                                    if (t) throw r
                                }
                            }
                            this.updateActiveStyles(), R.StyleManager.compile(s(this.active_styles), this), this.dirty = !0
                        }
                    }, {
                        key: "updateActiveStyles",
                        value: function () {
                            var e = this,
                                t = s(this.active_styles || {});
                            this.active_styles = {};
                            var r = !1,
                                n = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var l, u = c(m["default"].recurseValues(this.config.layers)); !(n = (l = u.next()).done); n = !0) {
                                    var f = l.value;
                                    if (f && f.draw) {
                                        var h = !0,
                                            d = !1,
                                            p = void 0;
                                        try {
                                            for (var g, v = c(m["default"].entries(f.draw)); !(h = (g = v.next()).done); h = !0) {
                                                var _ = a(g.value, 2),
                                                    y = _[0],
                                                    b = _[1];
                                                if (null != b && "object" == typeof b && b.visible !== !1) {
                                                    var x = b.style || y,
                                                        w = [x];
                                                    b.outline && b.outline.style && w.push(b.outline.style), w = w.filter(function (t) {
                                                        return e.styles[t]
                                                    }).forEach(function (t) {
                                                        var n = e.styles[t];
                                                        n && (e.active_styles[t] = !0, n.animated && (r = !0))
                                                    })
                                                }
                                            }
                                        } catch (A) {
                                            d = !0, p = A
                                        } finally {
                                            try {
                                                !h && v["return"] && v["return"]()
                                            } finally {
                                                if (d) throw p
                                            }
                                        }
                                    }
                                }
                            } catch (A) {
                                i = !0, o = A
                            } finally {
                                try {
                                    !n && u["return"] && u["return"]()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return this.animated = void 0 !== this.config.scene.animated ? this.config.scene.animated : r, s(this.active_styles).filter(function (e) {
                                return -1 === t.indexOf(e)
                            })
                        }
                    }, {
                        key: "getActiveCamera",
                        value: function () {
                            return this.view.getActiveCamera()
                        }
                    }, {
                        key: "setActiveCamera",
                        value: function (e) {
                            return this.view.setActiveCamera(e)
                        }
                    }, {
                        key: "createLights",
                        value: function () {
                            this.lights = {};
                            for (var e in this.config.lights)
                                if (this.config.lights[e] && "object" == typeof this.config.lights[e]) {
                                    var t = this.config.lights[e];
                                    t.name = e.replace("-", "_"), t.visible = t.visible === !1 ? !1 : !0, t.visible && (this.lights[t.name] = L["default"].create(this.view, t))
                                }
                            L["default"].inject(this.lights)
                        }
                    }, {
                        key: "setBackground",
                        value: function () {
                            var e, t = this.config.scene.background;
                            this.background = {}, t && t.color && (this.background.color = S.StyleParser.parseColor(t.color)), this.background.color || (this.background.color = [0, 0, 0, 0]), this.canvas.style.backgroundColor = 1 === this.background.color[3] ? "rgba(" + this.background.color.map(function (e) {
                                return Math.floor(255 * e)
                            }).join(", ") + ")" : "transparent", (e = this.gl).clearColor.apply(e, o(this.background.color))
                        }
                    }, {
                        key: "setIntrospection",
                        value: function (e) {
                            this.introspection = e || !1, this.updateConfig()
                        }
                    }, {
                        key: "updateConfig",
                        value: function () {
                            var e = this,
                                t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                r = t.rebuild,
                                n = void 0 === r ? !0 : r,
                                i = t.serialize_funcs;
                            this.generation++, this.updating++, this.config.scene = this.config.scene || {}, R.StyleManager.init(), this.view.reset(), this.createLights(), this.createDataSources(), this.loadTextures(), this.setBackground(), q["default"].loadFonts(this.config.fonts), this.updateStyles();
                            var o = n ? this.rebuildGeometry(u({
                                serialize_funcs: i
                            }, "object" == typeof n && n)) : this.syncConfigToWorker({
                                serialize_funcs: i
                            });
                            return o.then(function () {
                                e.updating--, e.view.updateBounds(), e.requestRedraw()
                            })
                        }
                    }, {
                        key: "syncConfigToWorker",
                        value: function () {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                t = e.serialize_funcs,
                                r = void 0 === t ? !0 : t;
                            return this.config_serialized = r ? m["default"].serializeWithFunctions(this.config) : JSON.stringify(this.config), v["default"].postMessage(this.workers, "self.updateConfig", {
                                config: this.config_serialized,
                                generation: this.generation,
                                introspection: this.introspection
                            })
                        }
                    }, {
                        key: "createListeners",
                        value: function () {
                            var e = this;
                            this.listeners = {}, this.listeners.view = {
                                move: function () {
                                    return e.trigger("move")
                                }
                            }, this.view.subscribe(this.listeners.view), this.listeners.texture = {
                                update: function () {
                                    return e.dirty = !0
                                },
                                warning: function (t) {
                                    return e.trigger("warning", u({
                                        type: "textures"
                                    }, t))
                                }
                            }, A["default"].subscribe(this.listeners.texture), this.listeners.scene_loader = {
                                error: function (t) {
                                    return e.trigger("error", u({
                                        type: "scene"
                                    }, t))
                                }
                            }, j["default"].subscribe(this.listeners.scene_loader)
                        }
                    }, {
                        key: "destroyListeners",
                        value: function () {
                            this.unsubscribeAll(), this.view.unsubscribe(this.listeners.view), A["default"].unsubscribe(this.listeners.texture), j["default"].unsubscribe(this.listeners.scene_loader), this.listeners = null
                        }
                    }, {
                        key: "resetFeatureSelection",
                        value: function () {
                            this.selection ? this.workers && v["default"].postMessage(this.workers, "self.resetFeatureSelection") : this.selection = new C["default"](this.gl, this.workers)
                        }
                    }, {
                        key: "getFeatureSelectionMapSize",
                        value: function () {
                            var e = this;
                            return this.fetching_selection_map ? l.reject() : (this.fetching_selection_map = !0, v["default"].postMessage(this.workers, "self.getFeatureSelectionMapSize").then(function (t) {
                                return e.fetching_selection_map = !1, t.reduce(function (e, t) {
                                    return e + t
                                })
                            }))
                        }
                    }, {
                        key: "resetTime",
                        value: function () {
                            this.start_time = +new Date
                        }
                    }, {
                        key: "updateViewComplete",
                        value: function () {
                            !this.render_count_changed && this.generation === this.last_complete_generation || this.tile_manager.isLoadingVisibleTiles() || (this.last_complete_generation = this.generation, this.trigger("view_complete"))
                        }
                    }, {
                        key: "resetViewComplete",
                        value: function () {
                            this.last_complete_generation = null
                        }
                    }, {
                        key: "screenshot",
                        value: function () {
                            var e = this;
                            return null != this.queue_screenshot ? this.queue_screenshot.promise : (this.requestRedraw(), this.queue_screenshot = {}, this.queue_screenshot.promise = new l(function (t, r) {
                                e.queue_screenshot.resolve = t, e.queue_screenshot.reject = r
                            }), this.queue_screenshot.promise)
                        }
                    }, {
                        key: "completeScreenshot",
                        value: function () {
                            if (null != this.queue_screenshot) {
                                for (var e = this.canvas.toDataURL("image/png"), t = atob(e.slice(22)), r = new Uint8Array(t.length), n = 0; n < t.length; ++n) r[n] = t.charCodeAt(n);
                                var i = new Blob([r], {
                                    type: "image/png"
                                });
                                this.queue_screenshot.resolve({
                                    url: e,
                                    blob: i
                                }), this.queue_screenshot = null
                            }
                        }
                    }, {
                        key: "_profile",
                        value: function (e) {
                            console.profile("main thread: " + e), v["default"].postMessage(this.workers, "self.profile", e)
                        }
                    }, {
                        key: "_profileEnd",
                        value: function (e) {
                            console.profileEnd("main thread: " + e), v["default"].postMessage(this.workers, "self.profileEnd", e)
                        }
                    }, {
                        key: "setupDebug",
                        value: function () {
                            var e = this;
                            this.debug = {
                                profile: {
                                    geometry_build: !1
                                },
                                timeRebuild: function () {
                                    var t = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0],
                                        r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                        n = [],
                                        i = function o() {
                                            var i = +new Date;
                                            e.rebuild(r).then(function () {
                                                if (n.push(+new Date - i), n.length < t) o();
                                                else {
                                                    var e = ~~(n.reduce(function (e, t) {
                                                        return e + t
                                                    }) / n.length);
                                                    d["default"]("info", "Profiled rebuild " + t + " times: " + e + " avg (" + Math.min.apply(Math, n) + " min, " + Math.max.apply(Math, n) + " max)")
                                                }
                                            })
                                        };
                                    i()
                                },
                                geometryCountByStyle: function () {
                                    var t = {},
                                        r = !0,
                                        n = !1,
                                        i = void 0;
                                    try {
                                        for (var o, a = c(e.tile_manager.getRenderableTiles()); !(r = (o = a.next()).done); r = !0) {
                                            var s = o.value;
                                            for (var l in s.meshes) t[l] = t[l] || 0, t[l] += s.meshes[l].geometry_count
                                        }
                                    } catch (u) {
                                        n = !0, i = u
                                    } finally {
                                        try {
                                            !r && a["return"] && a["return"]()
                                        } finally {
                                            if (n) throw i
                                        }
                                    }
                                    return t
                                },
                                geometryCountByBaseStyle: function () {
                                    var t = e.debug.geometryCountByStyle(),
                                        r = {};
                                    for (var n in t) {
                                        var i = e.styles[n].built_in ? n : e.styles[n].base;
                                        r[i] = r[i] || 0, r[i] += t[n]
                                    }
                                    return r
                                }
                            }
                        }
                    }], [{
                        key: "create",
                        value: function (t) {
                            var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            return new e(t, r)
                        }
                    }]), e
                }();
                r["default"] = Z, t.exports = r["default"]
            }, {
                "./gl/context": 203,
                "./gl/render_state": 206,
                "./gl/texture": 208,
                "./gl/vao": 209,
                "./light": 220,
                "./scene_loader": 224,
                "./selection": 226,
                "./sources/data_source": 227,
                "./styles/lines/lines": 234,
                "./styles/points/points": 236,
                "./styles/polygons/polygons": 237,
                "./styles/raster/raster": 238,
                "./styles/style": 239,
                "./styles/style_manager": 240,
                "./styles/style_parser": 241,
                "./styles/text/canvas_text": 242,
                "./styles/text/text": 243,
                "./tile_manager": 247,
                "./utils/log": 251,
                "./utils/subscribe": 254,
                "./utils/utils": 256,
                "./utils/worker_broker": 258,
                "./view": 260,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            224: [function (e, t, r) {
                "use strict";

                function n(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? ":" : arguments[1],
                        r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                        i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                    r = r ? r + t : "";
                    for (var o in e) {
                        var a = r + o,
                            s = e[o];
                        i[a] = s, "object" != typeof s || Array.isArray(s) || n(s, t, a, i)
                    }
                    return i
                }
                var i = e("babel-runtime/helpers/to-consumable-array")["default"],
                    o = e("babel-runtime/core-js/promise")["default"],
                    a = e("babel-runtime/core-js/get-iterator")["default"],
                    s = e("babel-runtime/core-js/object/keys")["default"],
                    l = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var u, c = e("./utils/log"),
                    f = l(c),
                    h = e("./utils/utils"),
                    d = l(h),
                    p = e("./gl/glsl"),
                    m = l(p),
                    g = e("./utils/merge"),
                    v = l(g),
                    _ = e("./utils/subscribe"),
                    y = l(_);
                r["default"] = u = {
                    loadScene: function (e) {
                        var t = this,
                            r = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1],
                            n = [];
                        return this.loadSceneRecursive(e, r, n).then(function (e) {
                            return t.finalize(e)
                        }).then(function (e) {
                            return e ? (n.length > 0 && n.forEach(function (e) {
                                var r = "Failed to import scene: " + e.url;
                                f["default"]("error", r, e), t.trigger("error", {
                                    type: "scene_import",
                                    message: r,
                                    error: e,
                                    url: e.url
                                })
                            }), e) : o.reject(n[0])
                        })
                    },
                    loadSceneRecursive: function (e) {
                        var t = this,
                            r = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1],
                            n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];
                        return e ? ("string" == typeof e && (r = r || d["default"].pathForURL(e)), d["default"].loadResource(e).then(function (e) {
                            if ("string" == typeof e["import"] && (e["import"] = [e["import"]]), !Array.isArray(e["import"])) return t.normalize(e, r), e;
                            var s = [],
                                l = !0,
                                u = !1,
                                c = void 0;
                            try {
                                for (var f, h = a(e["import"]); !(l = (f = h.next()).done); l = !0) {
                                    var p = f.value;
                                    s.push(d["default"].addBaseURL(p, r))
                                }
                            } catch (m) {
                                u = !0, c = m
                            } finally {
                                try {
                                    !l && h["return"] && h["return"]()
                                } finally {
                                    if (u) throw c
                                }
                            }
                            return delete e["import"], o.all(s.map(function (e) {
                                return t.loadSceneRecursive(e, null, n)
                            })).then(function (n) {
                                return e = v["default"].apply(void 0, [{}].concat(i(n), [e])), t.normalize(e, r), e
                            })
                        })["catch"](function (t) {
                            t.url = e, n.push(t)
                        })) : o.resolve({})
                    },
                    normalize: function (e, t) {
                        return this.normalizeDataSources(e, t), this.normalizeFonts(e, t), this.normalizeTextures(e, t), e
                    },
                    normalizeDataSources: function (e, t) {
                        e.sources = e.sources || {};
                        var r = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var o, s = a(d["default"].values(e.sources)); !(r = (o = s.next()).done); r = !0) {
                                var l = o.value;
                                l.url = d["default"].addBaseURL(l.url, t), Array.isArray(l.scripts) && (l.scripts = l.scripts.map(function (e) {
                                    return d["default"].addBaseURL(e, t)
                                }))
                            }
                        } catch (u) {
                            n = !0, i = u
                        } finally {
                            try {
                                !r && s["return"] && s["return"]()
                            } finally {
                                if (n) throw i
                            }
                        }
                        return e
                    },
                    normalizeFonts: function (e, t) {
                        e.fonts = e.fonts || {};
                        var r = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var o, s = a(d["default"].recurseValues(e.fonts)); !(r = (o = s.next()).done); r = !0) {
                                var l = o.value;
                                l.url && (l.url = d["default"].addBaseURL(l.url, t))
                            }
                        } catch (u) {
                            n = !0, i = u
                        } finally {
                            try {
                                !r && s["return"] && s["return"]()
                            } finally {
                                if (n) throw i
                            }
                        }
                        return e
                    },
                    normalizeTextures: function (e, t) {
                        if (e.textures = e.textures || {}, e.textures) {
                            var r = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var o, s = a(d["default"].values(e.textures)); !(r = (o = s.next()).done); r = !0) {
                                    var l = o.value;
                                    l.url && (l.url = d["default"].addBaseURL(l.url, t))
                                }
                            } catch (u) {
                                n = !0, i = u
                            } finally {
                                try {
                                    !r && s["return"] && s["return"]()
                                } finally {
                                    if (n) throw i
                                }
                            }
                        }
                        if (e.styles) {
                            var c = !0,
                                f = !1,
                                h = void 0;
                            try {
                                for (var p, g = a(d["default"].values(e.styles)); !(c = (p = g.next()).done); c = !0) {
                                    var v = p.value,
                                        _ = v.texture;
                                    if ("string" != typeof _ || e.textures[_] || (_ = d["default"].addBaseURL(_, t), e.textures[_] = {
                                            url: _
                                        }, v.texture = _), v.material)
                                        for (var y = ["emission", "ambient", "diffuse", "specular", "normal"], b = 0; b < y.length; b++) {
                                            var x = y[b],
                                                w = null != v.material[x] && v.material[x].texture;
                                            "string" != typeof w || e.textures[w] || (w = d["default"].addBaseURL(w, t), e.textures[w] = {
                                                url: w
                                            }, v.material[x].texture = w)
                                        }
                                    if (v.shaders && v.shaders.uniforms) {
                                        var A = !0,
                                            T = !1,
                                            k = void 0;
                                        try {
                                            for (var E, R = a(m["default"].parseUniforms(v.shaders.uniforms)); !(A = (E = R.next()).done); A = !0) {
                                                var S = E.value,
                                                    M = S.type,
                                                    j = S.value,
                                                    P = S.key,
                                                    N = S.uniforms;
                                                if ("sampler2D" === M && "string" == typeof j && !e.textures[j]) {
                                                    var z = d["default"].addBaseURL(j, t);
                                                    e.textures[z] = {
                                                        url: z
                                                    }, N[P] = z
                                                }
                                            }
                                        } catch (u) {
                                            T = !0, k = u
                                        } finally {
                                            try {
                                                !A && R["return"] && R["return"]()
                                            } finally {
                                                if (T) throw k
                                            }
                                        }
                                    }
                                }
                            } catch (u) {
                                f = !0, h = u
                            } finally {
                                try {
                                    !c && g["return"] && g["return"]()
                                } finally {
                                    if (f) throw h
                                }
                            }
                        }
                        return e
                    },
                    applyGlobalProperties: function (e) {
                        function t(e) {
                            if ("string" == typeof e) {
                                var n = "global." === e.slice(0, 7) && e.slice(7).replace(/\./g, r);
                                n && i[n] && (e = i[n])
                            } else if ("object" == typeof e)
                                for (var o in e) e[o] = t(e[o]);
                            return e
                        }
                        if (!e.global || 0 === s(e.global).length) return e;
                        var r = ":",
                            i = n(e.global, r);
                        return t(e)
                    },
                    finalize: function (e) {
                        if (e) {
                            e = this.applyGlobalProperties(e);
                            var t = 0;
                            for (var r in e.sources) e.sources[r].id = t++;
                            e.cameras = e.cameras || {}, e.camera && (e.cameras["default"] = e.camera), 0 === s(e.cameras).length && (e.cameras["default"] = {});
                            var n = !1,
                                i = !0,
                                o = !1,
                                l = void 0;
                            try {
                                for (var u, c = a(d["default"].values(e.cameras)); !(i = (u = c.next()).done); i = !0) {
                                    var f = u.value;
                                    if (f.active) {
                                        n = !0;
                                        break
                                    }
                                }
                            } catch (h) {
                                o = !0, l = h
                            } finally {
                                try {
                                    !i && c["return"] && c["return"]()
                                } finally {
                                    if (o) throw l
                                }
                            }
                            return n || (e.cameras[s(e.cameras)[0]].active = !0), e.lights = e.lights || {}, e.styles = e.styles || {}, e.layers = e.layers || {}, e
                        }
                    }
                }, y["default"](u), t.exports = r["default"]
            }, {
                "./gl/glsl": 205,
                "./utils/log": 251,
                "./utils/merge": 252,
                "./utils/subscribe": 254,
                "./utils/utils": 256,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            225: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/to-consumable-array")["default"],
                    i = e("babel-runtime/core-js/object/assign")["default"],
                    o = e("babel-runtime/core-js/object/keys")["default"],
                    a = e("babel-runtime/core-js/promise")["default"],
                    s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var l = e("./utils/thread"),
                    u = s(l),
                    c = e("./utils/utils"),
                    f = s(c),
                    h = e("./utils/log"),
                    d = s(h),
                    p = e("./utils/worker_broker"),
                    m = s(p),
                    g = e("./utils/merge"),
                    v = s(g),
                    _ = e("./tile"),
                    y = s(_),
                    b = e("./sources/data_source"),
                    x = s(b),
                    w = e("./selection"),
                    A = s(w),
                    T = e("./styles/style_parser"),
                    k = e("./styles/style_manager"),
                    E = e("./styles/layer"),
                    R = e("./gl/texture"),
                    S = s(R),
                    M = self;
                r.SceneWorker = M, u["default"].is_worker && (i(self, {
                    FeatureSelection: A["default"],
                    sources: {
                        tiles: {},
                        objects: {}
                    },
                    styles: {},
                    layers: {},
                    tiles: {},
                    objects: {},
                    config: {},
                    init: function (e, t, r, n) {
                        return self._worker_id = e, self.num_workers = t, d["default"].setLevel(r), f["default"].device_pixel_ratio = n, A["default"].setPrefix(self._worker_id), e
                    },
                    updateConfig: function (e) {
                        var t = e.config,
                            r = e.generation,
                            n = e.introspection;
                        t = JSON.parse(t), self.last_config = v["default"]({}, self.config), self.config = v["default"]({}, t), self.generation = r, self.introspection = n;
                        for (var a in t.layers) t.layers[a] && (t.layers[a].data = f["default"].stringsToFunctions(t.layers[a].data));
                        self.global = f["default"].stringsToFunctions(t.global), t.sources = f["default"].stringsToFunctions(t.sources), self.sources.tiles = {};
                        for (var s in t.sources) {
                            var l = void 0;
                            try {
                                l = x["default"].create(i({}, t.sources[s], {
                                    name: s
                                }), self.sources.tiles)
                            } catch (u) {
                                continue
                            }
                            l && (l.tiled ? self.sources.tiles[s] = l : l.id % self.num_workers === self._worker_id && (self.sources.objects[s] = l, self.objects[l.name] || (self.objects[l.name] = {}, l.load(self.objects[l.name]))))
                        }
                        self.config.sources && self.last_config.sources && !o(self.config.sources).some(function (e) {
                            return JSON.stringify(self.config.sources[e]) !== JSON.stringify(self.last_config.sources[e])
                        }) || (self.tiles = {}), t.styles = f["default"].stringsToFunctions(t.styles, T.StyleParser.wrapFunction), self.styles = k.StyleManager.build(t.styles, {
                            generation: self.generation,
                            sources: self.sources.tiles,
                            introspection: self.introspection
                        }), self.layers = E.parseLayers(t.layers), self.syncing_textures = self.syncTextures(t.textures), self.configuring = self.syncing_textures.then(function () {
                            d["default"]("debug", "updated config")
                        })
                    },
                    awaitConfiguration: function () {
                        return self.configuring
                    },
                    buildTile: function (e) {
                        var t = e.tile;
                        if (null == self.getTile(t.key) || self.getTile(t.key).loading !== !0) return t = self.tiles[t.key] = i(self.getTile(t.key) || {}, t), self.awaitConfiguration().then(function () {
                            return t.loaded !== !0 ? new a(function (e) {
                                t.loading = !0, t.loaded = !1, t.error = null, self.loadTileSourceData(t).then(function () {
                                    return self.getTile(t.key) ? (t.source_data.error && d["default"]("warn", "tile load error(s) for " + t.key + ": " + t.source_data.error), t.loading = !1, t.loaded = !0, void y["default"].buildGeometry(t, self).then(function (r) {
                                        e(m["default"].returnWithTransferables({
                                            tile: y["default"].slice(t, r)
                                        }))
                                    })) : void d["default"]("trace", "stop tile build after data source load because tile was removed: " + t.key)
                                })["catch"](function (r) {
                                    t.loading = !1, t.loaded = !1, t.error = r.toString(), d["default"]("error", "tile load error for " + t.key + ": " + t.error + " at: " + r.stack), e({
                                        tile: y["default"].slice(t)
                                    })
                                })
                            }) : (d["default"]("trace", "used worker cache for tile " + t.key), y["default"].buildGeometry(t, self).then(function (e) {
                                return m["default"].returnWithTransferables({
                                    tile: y["default"].slice(t, e)
                                })
                            }))
                        })
                    },
                    loadTileSourceData: function (e) {
                        return self.sources.tiles[e.source] ? self.sources.tiles[e.source].load(e) : (e.source_data = {
                            error: "Data source '" + e.source + "' not found"
                        }, a.resolve(e))
                    },
                    getTile: function (e) {
                        return self.tiles[e]
                    },
                    removeTile: function (e) {
                        var t = self.tiles[e];
                        null != t && (t.loading === !0 && (d["default"]("trace", "cancel tile load for " + e), t.loading = !1, y["default"].cancel(t)), A["default"].clearTile(e), delete self.tiles[e], d["default"]("trace", "remove tile from cache for " + e))
                    },
                    getFeatureSelection: function () {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            t = e.id,
                            r = e.key,
                            n = A["default"].map[r];
                        return {
                            id: t,
                            feature: n && n.feature
                        }
                    },
                    resetFeatureSelection: function () {
                        A["default"].reset()
                    },
                    getFeatureSelectionMapSize: function () {
                        return A["default"].getMapSize()
                    },
                    syncTextures: function (e) {
                        var t = [];
                        return e && t.push.apply(t, n(o(e))), d["default"]("trace", "sync textures to worker:", t), t.length > 0 ? S["default"].syncTexturesToWorker(t) : a.resolve()
                    },
                    updateDevicePixelRatio: function (e) {
                        f["default"].device_pixel_ratio = e
                    },
                    profile: function (e) {
                        console.profile("worker " + self._worker_id + ": " + e)
                    },
                    profileEnd: function (e) {
                        console.profileEnd("worker " + self._worker_id + ": " + e)
                    }
                }), m["default"].addTarget("self", self))
            }, {
                "./gl/texture": 208,
                "./selection": 226,
                "./sources/data_source": 227,
                "./styles/layer": 232,
                "./styles/style_manager": 240,
                "./styles/style_parser": 241,
                "./tile": 246,
                "./utils/log": 251,
                "./utils/merge": 252,
                "./utils/thread": 255,
                "./utils/utils": 256,
                "./utils/worker_broker": 258,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            226: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/core-js/promise")["default"],
                    a = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var s = e("./utils/log"),
                    l = a(s),
                    u = e("./gl/texture"),
                    c = a(u),
                    f = e("./utils/worker_broker"),
                    h = a(f),
                    d = function () {
                        function e(t, r) {
                            i(this, e), this.gl = t, this.workers = r, this.init()
                        }
                        return n(e, [{
                            key: "init",
                            value: function () {
                                this.requests = {}, this.feature = null, this.read_delay = 5, this.read_delay_timer = null, this.pixel = new Uint8Array(4), this.pixel32 = new Float32Array(this.pixel.buffer), this.fbo = this.gl.createFramebuffer(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo), this.fbo_size = {
                                    width: 256,
                                    height: 256
                                }, this.fbo_size.aspect = this.fbo_size.width / this.fbo_size.height;
                                var e = c["default"].create(this.gl, "selection_fbo", {
                                    filtering: "nearest"
                                });
                                e.setData(this.fbo_size.width, this.fbo_size.height, null, {
                                    filtering: "nearest"
                                }), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, e.texture, 0);
                                var t = this.gl.createRenderbuffer();
                                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, t), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.fbo_size.width, this.fbo_size.height), this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, t), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.gl && this.fbo && (this.gl.deleteFramebuffer(this.fbo), this.fbo = null, this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null))
                            }
                        }, {
                            key: "bind",
                            value: function () {
                                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo), this.gl.viewport(0, 0, this.fbo_size.width, this.fbo_size.height)
                            }
                        }, {
                            key: "getFeatureAt",
                            value: function (e) {
                                var t = this;
                                return new o(function (r, n) {
                                    t.selection_request_id = t.selection_request_id + 1 || 0, t.requests[t.selection_request_id] = {
                                        type: "point",
                                        id: t.selection_request_id,
                                        point: e,
                                        resolve: r,
                                        reject: n
                                    }
                                })
                            }
                        }, {
                            key: "pendingRequests",
                            value: function () {
                                return this.requests
                            }
                        }, {
                            key: "clearPendingRequests",
                            value: function () {
                                for (var e in this.requests) {
                                    var t = this.requests[e];
                                    t.sent || (t.reject({
                                        request: t
                                    }), delete this.requests[e])
                                }
                            }
                        }, {
                            key: "read",
                            value: function () {
                                var e = this;
                                null != this.read_delay_timer && clearTimeout(this.read_delay_timer), this.read_delay_timer = setTimeout(function () {
                                    var t = e.gl;
                                    t.bindFramebuffer(t.FRAMEBUFFER, e.fbo);
                                    for (var r in e.requests) {
                                        var n = e.requests[r];
                                        if (!n.sent && "point" === n.type) {
                                            t.readPixels(Math.floor(n.point.x * e.fbo_size.width), Math.floor((1 - n.point.y) * e.fbo_size.height), 1, 1, t.RGBA, t.UNSIGNED_BYTE, e.pixel);
                                            var i = e.pixel[0] + (e.pixel[1] << 8) + (e.pixel[2] << 16) + (e.pixel[3] << 24) >>> 0,
                                                o = e.pixel[3];
                                            255 !== o ? null != e.workers[o] && h["default"].postMessage(e.workers[o], "self.getFeatureSelection", {
                                                id: n.id,
                                                key: i
                                            }).then(function (t) {
                                                e.finishRead(t)
                                            }) : e.finishRead({
                                                id: n.id,
                                                feature: null
                                            }), n.sent = !0
                                        }
                                    }
                                    t.bindFramebuffer(t.FRAMEBUFFER, null)
                                }, this.read_delay)
                            }
                        }, {
                            key: "finishRead",
                            value: function (e) {
                                var t = this.requests[e.id];
                                if (!t) return void l["default"]("error", "FeatureSelection.finishRead(): could not find message", e);
                                var r = e.feature,
                                    n = !1;
                                (null != r && null == this.feature || null == r && null != this.feature || null != r && null != this.feature && JSON.stringify(r) !== JSON.stringify(this.feature)) && (n = !0), this.feature = r, t.resolve({
                                    feature: r,
                                    changed: n,
                                    request: t
                                }), delete this.requests[e.id]
                            }
                        }], [{
                            key: "makeEntry",
                            value: function (e) {
                                this.map_entry++;
                                var t = 255 & this.map_entry,
                                    r = this.map_entry >> 8 & 255,
                                    n = this.map_entry >> 16 & 255,
                                    i = this.map_prefix,
                                    o = t / 255,
                                    a = r / 255,
                                    s = n / 255,
                                    l = i / 255,
                                    u = t + (r << 8) + (n << 16) + (i << 24) >>> 0;
                                return this.map[u] = {
                                    color: [o, a, s, l]
                                }, this.map_size++, this.tiles[e.key] || (this.tiles[e.key] = {
                                    entries: [],
                                    tile: {
                                        key: e.key,
                                        coords: e.coords,
                                        style_zoom: e.style_zoom,
                                        source: e.source,
                                        generation: e.generation
                                    }
                                }), this.tiles[e.key].entries.push(u), this.map[u]
                            }
                        }, {
                            key: "makeColor",
                            value: function (e, t, r) {
                                var n = this.makeEntry(t);
                                return n.feature = {
                                    id: e.id,
                                    properties: e.properties,
                                    source_name: r.source,
                                    source_layer: r.layer,
                                    layers: r.layers,
                                    tile: this.tiles[t.key].tile
                                }, n.color
                            }
                        }, {
                            key: "reset",
                            value: function () {
                                this.tiles = {}, this.map = {}, this.map_size = 0, this.map_entry = 0
                            }
                        }, {
                            key: "clearTile",
                            value: function (e) {
                                var t = this;
                                this.tiles[e] && (this.tiles[e].entries.forEach(function (e) {
                                    return delete t.map[e]
                                }), this.map_size -= this.tiles[e].entries.length, delete this.tiles[e])
                            }
                        }, {
                            key: "getMapSize",
                            value: function () {
                                return this.map_size
                            }
                        }, {
                            key: "setPrefix",
                            value: function (e) {
                                this.map_prefix = e
                            }
                        }]), e
                    }();
                r["default"] = d, d.map = {}, d.tiles = {}, d.map_size = 0, d.map_entry = 0, d.map_prefix = 0, d.defaultColor = [0, 0, 0, 1], t.exports = r["default"]
            }, {
                "./gl/texture": 208,
                "./utils/log": 251,
                "./utils/worker_broker": 258,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            227: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/get")["default"],
                    a = e("babel-runtime/helpers/inherits")["default"],
                    s = e("babel-runtime/helpers/to-consumable-array")["default"],
                    l = e("babel-runtime/helpers/sliced-to-array")["default"],
                    u = e("babel-runtime/core-js/set")["default"],
                    c = e("babel-runtime/core-js/object/assign")["default"],
                    f = e("babel-runtime/core-js/promise")["default"],
                    h = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var d = e("../geo"),
                    p = h(d),
                    m = e("../utils/errors"),
                    g = e("../utils/utils"),
                    v = h(g),
                    _ = function () {
                        function e(t, r) {
                            i(this, e), this.config = t, this.sources = r, this.id = t.id, this.name = t.name, this.pad_scale = t.pad_scale || 1e-4, this.default_winding = null, this.rasters = Array.isArray(t.rasters) ? [].concat(s(new u(t.rasters))) : [], this.transform = t.transform, "function" == typeof this.transform && this.transform.bind(this), this.extra_data = t.extra_data, this.scripts = t.scripts, this.max_zoom = t.max_zoom || p["default"].default_source_max_zoom
                        }
                        return n(e, [{
                            key: "load",
                            value: function (e) {
                                var t = this;
                                return e.source_data = {}, e.source_data.layers = {}, e.pad_scale = this.pad_scale, e.rasters = [].concat(s(this.rasters)), this._load(e).then(function (e) {
                                    for (var r in e.source_data.layers) {
                                        var n = e.source_data.layers[r];
                                        n && n.features && n.features.forEach(function (e) {
                                            p["default"].transformGeometry(e.geometry, function (e) {
                                                e[1] = -e[1], t.pad_scale && (e[0] = Math.round(e[0] * (1 + t.pad_scale) - p["default"].tile_scale * t.pad_scale / 2), e[1] = Math.round(e[1] * (1 + t.pad_scale) - p["default"].tile_scale * t.pad_scale / 2))
                                            }), t.updateDefaultWinding(e.geometry)
                                        })
                                    }
                                    return e.default_winding = t.default_winding || "CCW", e
                                })
                            }
                        }, {
                            key: "_load",
                            value: function () {
                                throw new m.MethodNotImplemented("_load")
                            }
                        }, {
                            key: "updateDefaultWinding",
                            value: function (e) {
                                return null == this.default_winding && ("Polygon" === e.type ? this.default_winding = p["default"].ringWinding(e.coordinates[0]) : "MultiPolygon" === e.type && (this.default_winding = p["default"].ringWinding(e.coordinates[0][0]))), this.default_winding
                            }
                        }], [{
                            key: "create",
                            value: function (t, r) {
                                return e.types[t.type] ? new e.types[t.type](t, r) : void 0
                            }
                        }, {
                            key: "changed",
                            value: function (e, t) {
                                if (!e || !t) return !0;
                                var r = c({}, e.config, {
                                        id: null
                                    }),
                                    n = c({}, t.config, {
                                        id: null
                                    });
                                return JSON.stringify(r) !== JSON.stringify(n)
                            }
                        }, {
                            key: "projectData",
                            value: function (e) {
                                var t = +new Date;
                                for (var r in e.layers)
                                    for (var n = e.layers[r].features.length, i = 0; n > i; i++) {
                                        var o = e.layers[r].features[i];
                                        p["default"].transformGeometry(o.geometry, function (e) {
                                            var t = p["default"].latLngToMeters(e),
                                                r = l(t, 2),
                                                n = r[0],
                                                i = r[1];
                                            e[0] = n, e[1] = i
                                        })
                                    }
                                void 0 !== e.debug && (e.debug.projection = +new Date - t)
                            }
                        }, {
                            key: "scaleData",
                            value: function (e, t) {
                                var r = t.coords.z,
                                    n = t.min,
                                    i = (t.max, p["default"].unitsPerMeter(r));
                                for (var o in e.layers)
                                    for (var a = e.layers[o].features.length, s = 0; a > s; s++) {
                                        var l = e.layers[o].features[s];
                                        p["default"].transformGeometry(l.geometry, function (e) {
                                            e[0] = (e[0] - n.x) * i, e[1] = (e[1] - n.y) * i * -1
                                        })
                                    }
                            }
                        }, {
                            key: "register",
                            value: function (t, r) {
                                t && r && (e.types[r] = t)
                            }
                        }]), e
                    }();
                r["default"] = _, _.types = {};
                var y = function (e) {
                    function t(e) {
                        if (i(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.url = v["default"].addParamsToURL(e.url, e.url_params), this.response_type = "", null == this.url) throw Error("Network data source must provide a `url` property")
                    }
                    return a(t, e), n(t, [{
                        key: "_load",
                        value: function (e) {
                            var t = this,
                                r = this.formatUrl(this.url, e),
                                n = e.source_data;
                            return n.url = r, e.debug = e.debug || {}, e.debug.network = +new Date, new f(function (i) {
                                n.error = null;
                                var o = v["default"].io(r, 6e4, t.response_type);
                                n.request = o.request, o.then(function (r) {
                                    e.debug.response_size = r.length || r.byteLength, e.debug.network = +new Date - e.debug.network, e.debug.parsing = +new Date, t.parseSourceData(e, n, r), e.debug.parsing = +new Date - e.debug.parsing, i(e)
                                })["catch"](function (t) {
                                    n.error = t.toString(), i(e)
                                })
                            })
                        }
                    }, {
                        key: "formatUrl",
                        value: function () {
                            throw new m.MethodNotImplemented("formatUrl")
                        }
                    }, {
                        key: "parseSourceData",
                        value: function () {
                            throw new m.MethodNotImplemented("parseSourceData")
                        }
                    }]), t
                }(_);
                r.NetworkSource = y;
                var b = function (e) {
                    function t(e) {
                        i(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.tiled = !0, this.url_hosts = null;
                        var r = this.url.match(/{s:\[([^}+]+)\]}/);
                        null != r && r.length > 1 && (this.url_hosts = r[1].split(","), this.next_host = 0)
                    }
                    return a(t, e), n(t, [{
                        key: "formatUrl",
                        value: function (e, t) {
                            var r = p["default"].wrapTile(t.coords, {
                                    x: !0
                                }),
                                n = e.replace("{x}", r.x).replace("{y}", r.y).replace("{z}", r.z);
                            return null != this.url_hosts && (n = n.replace(/{s:\[([^}+]+)\]}/, this.url_hosts[this.next_host]), this.next_host = (this.next_host + 1) % this.url_hosts.length), n
                        }
                    }, {
                        key: "urlHasTilePattern",
                        value: function (e) {
                            return e && e.search("{x}") > -1 && e.search("{y}") > -1 && e.search("{z}") > -1
                        }
                    }]), t
                }(y);
                r.NetworkTileSource = b
            }, {
                "../geo": 201,
                "../utils/errors": 249,
                "../utils/utils": 256,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/core-js/set": 15,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            228: [function (e, t, r) {
                "use strict";

                function n(e, t, r) {
                    var n = m["default"].centroid(e),
                        i = {};
                    return u(i, t, r), {
                        type: "Feature",
                        properties: i,
                        geometry: {
                            type: "Point",
                            coordinates: n
                        }
                    }
                }
                var i = e("babel-runtime/helpers/get")["default"],
                    o = e("babel-runtime/helpers/inherits")["default"],
                    a = e("babel-runtime/helpers/create-class")["default"],
                    s = e("babel-runtime/helpers/class-call-check")["default"],
                    l = e("babel-runtime/core-js/get-iterator")["default"],
                    u = e("babel-runtime/core-js/object/assign")["default"],
                    c = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var f = e("./data_source"),
                    h = c(f),
                    d = e("./mvt"),
                    p = e("../geo"),
                    m = c(p),
                    g = e("geojson-vt"),
                    v = c(g),
                    _ = function (e) {
                        function t(e) {
                            s(this, t), i(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.tiled = !0, this.load_data = null, this.tile_indexes = {}, this.max_zoom = Math.max(this.max_zoom || 0, 15), this.pad_scale = 0
                        }
                        return o(t, e), a(t, [{
                            key: "_load",
                            value: function (e) {
                                var r = this;
                                return this.load_data || (this.load_data = i(Object.getPrototypeOf(t.prototype), "_load", this).call(this, {
                                    source_data: {
                                        layers: {}
                                    }
                                }).then(function (e) {
                                    var t = e.source_data.layers;
                                    for (var n in t) r.tile_indexes[n] = v["default"](t[n], {
                                        maxZoom: r.max_zoom,
                                        tolerance: 3,
                                        extent: m["default"].tile_scale,
                                        buffer: 1e-4
                                    });
                                    return r.loaded = !0, e
                                })), this.load_data.then(function () {
                                    for (var t in r.tile_indexes) e.source_data.layers[t] = r.getTileFeatures(e, t);
                                    return e
                                })
                            }
                        }, {
                            key: "getTileFeatures",
                            value: function (e, t) {
                                var r = m["default"].wrapTile(e.coords, {
                                        x: !0
                                    }),
                                    n = this.tile_indexes[t].getTile(r.z, r.x, r.y),
                                    i = void 0;
                                if (n && n.features) {
                                    i = {
                                        type: "FeatureCollection",
                                        features: []
                                    };
                                    var o = !0,
                                        a = !1,
                                        s = void 0;
                                    try {
                                        for (var u, c = l(n.features); !(o = (u = c.next()).done); o = !0) {
                                            var f = u.value,
                                                h = {
                                                    type: "Feature",
                                                    geometry: {},
                                                    properties: f.tags
                                                };
                                            if (1 === f.type) h.geometry.coordinates = f.geometry.map(function (e) {
                                                return [e[0], e[1]]
                                            }), h.geometry.type = "MultiPoint";
                                            else {
                                                if (2 !== f.type && 3 !== f.type) continue;
                                                if (h.geometry.coordinates = f.geometry.map(function (e) {
                                                        return e.map(function (e) {
                                                            return [e[0], e[1]]
                                                        })
                                                    }), 2 === f.type) h.geometry.type = "MultiLineString";
                                                else if (h.geometry = d.decodeMultiPolygon(h.geometry), null == h.geometry) continue
                                            }
                                            i.features.push(h)
                                        }
                                    } catch (p) {
                                        a = !0, s = p
                                    } finally {
                                        try {
                                            !o && c["return"] && c["return"]()
                                        } finally {
                                            if (a) throw s
                                        }
                                    }
                                }
                                return i
                            }
                        }, {
                            key: "formatUrl",
                            value: function () {
                                return this.url
                            }
                        }, {
                            key: "parseSourceData",
                            value: function (e, t, r) {
                                var n = JSON.parse(r),
                                    i = this.getLayers(n);
                                this.preprocessLayers(i), t.layers = i
                            }
                        }, {
                            key: "preprocessLayers",
                            value: function (e) {
                                for (var t in e) {
                                    var r = e[t];
                                    this.preprocessFeatures(r.features)
                                }
                            }
                        }, {
                            key: "preprocessFeatures",
                            value: function (e) {
                                return this.config.generate_label_centroids && ! function () {
                                    var t = [],
                                        r = {
                                            label_placement: "yes"
                                        };
                                    e.forEach(function (e) {
                                        var i = void 0,
                                            o = void 0;
                                        switch (e.geometry.type) {
                                        case "Polygon":
                                            i = e.geometry.coordinates, o = n(i, e.properties, r), t.push(o);
                                            break;
                                        case "MultiPolygon":
                                            i = e.geometry.coordinates;
                                            for (var a = -1 / 0, s = 0, l = 0; l < i.length; l++) {
                                                var u = m["default"].polygonArea(i[l]);
                                                u > a && (a = u, s = l)
                                            }
                                            o = n(i[s], e.properties, r), t.push(o)
                                        }
                                    }), Array.prototype.push.apply(e, t)
                                }(), e
                            }
                        }, {
                            key: "getLayers",
                            value: function (e) {
                                return "Feature" === e.type || "FeatureCollection" === e.type ? {
                                    _default: e
                                } : e
                            }
                        }]), t
                    }(f.NetworkSource);
                r.GeoJSONSource = _;
                var y = function (e) {
                    function t(e) {
                        return s(this, t), i(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.urlHasTilePattern(this.url) ? this : this instanceof t ? new _(e) : null
                    }
                    return o(t, e), a(t, [{
                        key: "parseSourceData",
                        value: function (e, t, r) {
                            var n = JSON.parse(r);
                            this.prepareGeoJSON(n, e, t)
                        }
                    }, {
                        key: "prepareGeoJSON",
                        value: function (e, t, r) {
                            "function" == typeof this.transform && (e = this.transform(e, this.extra_data)), r.layers = _.prototype.getLayers(e);
                            var n = {
                                coords: t.coords,
                                min: m["default"].metersForTile(m["default"].wrapTile(t.coords, {
                                    x: !0
                                }))
                            };
                            h["default"].projectData(r), h["default"].scaleData(r, n)
                        }
                    }]), t
                }(f.NetworkTileSource);
                r.GeoJSONTileSource = y, h["default"].register(y, "GeoJSON"), h["default"].register(y, "GeoJSONTiles")
            }, {
                "../geo": 201,
                "./data_source": 227,
                "./mvt": 229,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23,
                "geojson-vt": 140
            }],
            229: [function (e, t, r) {
                "use strict";

                function n(e) {
                    for (var t = [], r = [], n = void 0, i = 0; i < e.coordinates.length; i++) {
                        var o = e.coordinates[i],
                            a = h["default"].ringWinding(o);
                        null != a && (n = n || a, a === n && r.length > 0 && (t.push(r), r = []), r.push(o))
                    }
                    return r.length > 0 && t.push(r), 1 === t.length ? (e.type = "Polygon", e.coordinates = t[0]) : t.length > 1 ? (e.type = "MultiPolygon", e.coordinates = t) : e = null, e
                }
                var i = e("babel-runtime/helpers/get")["default"],
                    o = e("babel-runtime/helpers/inherits")["default"],
                    a = e("babel-runtime/helpers/create-class")["default"],
                    s = e("babel-runtime/helpers/class-call-check")["default"],
                    l = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.decodeMultiPolygon = n;
                var u = e("./data_source"),
                    c = l(u),
                    f = e("../geo"),
                    h = l(f),
                    d = e("pbf"),
                    p = l(d),
                    m = e("vector-tile"),
                    g = function (e) {
                        function t(e) {
                            s(this, t), i(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.response_type = "arraybuffer"
                        }
                        return o(t, e), a(t, [{
                            key: "parseSourceData",
                            value: function (e, t, r) {
                                var n = new Uint8Array(r),
                                    i = new p["default"](n);
                                t.data = new m.VectorTile(i), t.layers = this.toGeoJSON(t.data), delete t.data
                            }
                        }, {
                            key: "toGeoJSON",
                            value: function (e) {
                                var t = {};
                                for (var r in e.layers) {
                                    for (var i = e.layers[r], o = {
                                            type: "FeatureCollection",
                                            features: []
                                        }, a = 0; a < i.length; a++) {
                                        for (var s = i.feature(a), l = {
                                                type: "Feature",
                                                geometry: {},
                                                properties: s.properties
                                            }, u = l.geometry, c = s.loadGeometry(), f = 0; f < c.length; f++)
                                            for (var h = c[f], d = 0; d < h.length; d++) h[d] = [h[d].x, h[d].y];
                                        u.coordinates = c, "Point" === m.VectorTileFeature.types[s.type] ? (u.type = "Point", u.coordinates = u.coordinates[0][0]) : "LineString" === m.VectorTileFeature.types[s.type] ? 1 === c.length ? (u.type = "LineString", u.coordinates = u.coordinates[0]) : u.type = "MultiLineString" : "Polygon" === m.VectorTileFeature.types[s.type] && (u = n(u)), o.features.push(l)
                                    }
                                    t[r] = o
                                }
                                return t
                            }
                        }]), t
                    }(u.NetworkTileSource);
                r.MVTSource = g, c["default"].register(g, "MVT")
            }, {
                "../geo": 201,
                "./data_source": 227,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23,
                pbf: 186,
                "vector-tile": 192
            }],
            230: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/get")["default"],
                    i = e("babel-runtime/helpers/inherits")["default"],
                    o = e("babel-runtime/helpers/create-class")["default"],
                    a = e("babel-runtime/helpers/class-call-check")["default"],
                    s = e("babel-runtime/helpers/to-consumable-array")["default"],
                    l = e("babel-runtime/core-js/promise")["default"],
                    u = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var c = e("./data_source"),
                    f = u(c),
                    h = e("../tile"),
                    d = u(h),
                    p = e("../geo"),
                    m = u(p),
                    g = function (e) {
                        function t(e) {
                            a(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), -1 === this.rasters.indexOf(this.name) && this.rasters.unshift(this.name), this.filtering = e.filtering, this.textures = {}
                        }
                        return i(t, e), o(t, [{
                            key: "load",
                            value: function (e) {
                                e.source_data = {}, e.source_data.layers = {}, e.pad_scale = this.pad_scale, e.rasters = [].concat(s(this.rasters));
                                var t = m["default"].tile_scale;
                                return e.source_data.layers = {
                                    _default: {
                                        type: "FeatureCollection",
                                        features: [{
                                            geometry: {
                                                type: "Polygon",
                                                coordinates: [
                                                    [
                                                        [0, 0],
                                                        [t, 0],
                                                        [t, -t],
                                                        [0, -t],
                                                        [0, 0]
                                                    ]
                                                ]
                                            },
                                            properties: {}
                                        }]
                                    }
                                }, e.default_winding = "CW", l.resolve(e)
                            }
                        }, {
                            key: "tileTexture",
                            value: function (e) {
                                var t = e.coords.key;
                                if (!this.textures[t]) {
                                    var r = d["default"].coordinateWithMaxZoom(e.coords, this.max_zoom),
                                        n = this.formatUrl(this.url, {
                                            coords: r
                                        });
                                    this.textures[t] = {
                                        url: n,
                                        filtering: this.filtering,
                                        coords: r
                                    }
                                }
                                return this.textures[t]
                            }
                        }]), t
                    }(c.NetworkTileSource);
                r.RasterTileSource = g, f["default"].register(g, "Raster")
            }, {
                "../geo": 201,
                "../tile": 246,
                "./data_source": 227,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            231: [function (e, t, r) {
                "use strict";

                function n(e, t) {
                    var r = p["default"].feature(e, t);
                    return "Feature" === r.type && (r = {
                        type: "FeatureCollection",
                        features: [r]
                    }), r
                }
                var i = e("babel-runtime/helpers/get")["default"],
                    o = e("babel-runtime/helpers/inherits")["default"],
                    a = e("babel-runtime/helpers/create-class")["default"],
                    s = e("babel-runtime/helpers/class-call-check")["default"],
                    l = e("babel-runtime/core-js/object/keys")["default"],
                    u = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var c = e("./data_source"),
                    f = u(c),
                    h = e("./geojson"),
                    d = e("topojson"),
                    p = u(d),
                    m = function (e) {
                        function t() {
                            s(this, t), i(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
                        }
                        return o(t, e), a(t, [{
                            key: "parseSourceData",
                            value: function (e, r, n) {
                                var o = JSON.parse(n);
                                o = this.toGeoJSON(o);
                                var a = this.getLayers(o);
                                i(Object.getPrototypeOf(t.prototype), "preprocessLayers", this).call(this, a), r.layers = a
                            }
                        }, {
                            key: "toGeoJSON",
                            value: function (e) {
                                if (e.objects && 1 === l(e.objects).length) {
                                    var t = l(e.objects)[0];
                                    e = n(e, e.objects[t])
                                } else {
                                    var r = {};
                                    for (var i in e.objects) r[i] = n(e, e.objects[i]);
                                    e = r
                                }
                                return e
                            }
                        }]), t
                    }(h.GeoJSONSource);
                r.TopoJSONSource = m;
                var g = function (e) {
                    function t(e) {
                        s(this, t);
                        var r = i(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
                        return r !== this ? new m(e) : void 0
                    }
                    return o(t, e), a(t, [{
                        key: "parseSourceData",
                        value: function (e, t, r) {
                            var n = JSON.parse(r);
                            n = m.prototype.toGeoJSON(n), this.prepareGeoJSON(n, e, t)
                        }
                    }]), t
                }(h.GeoJSONTileSource);
                r.TopoJSONTileSource = g, f["default"].register(g, "TopoJSON"), f["default"].register(g, "TopoJSONTiles")
            }, {
                "./data_source": 227,
                "./geojson": 228,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23,
                topojson: 190
            }],
            232: [function (e, t, r) {
                "use strict";

                function n(e) {
                    if (e.length > 1) {
                        for (var t = e[0], r = 1; r < e.length; r++) t += "/" + e[r];
                        return t
                    }
                    return e[0]
                }

                function i(e, t) {
                    for (var r = void 0, n = 0, i = {
                            visible: !0
                        }, o = 0; o < e.length; o++) e[o].length > n && (n = e[o].length);
                    if (0 === n) return null;
                    for (var a = function (n) {
                            return r = e.map(function (e) {
                                return e[n] && e[n][t]
                            }), 0 === r.length ? "continue" : (r.sort(function (e, t) {
                                return (e && e.layer_name) > (t && t.layer_name) ? 1 : -1
                            }), M["default"].apply(void 0, [i].concat(v(r))), void delete i.layer_name)
                        }, s = 0; n > s; s++) {
                        {
                            a(s)
                        }
                    }
                    return i.visible === !1 ? null : i
                }

                function o(e) {
                    return P.indexOf(e) > -1
                }

                function a(e) {
                    return 0 === y(e).length
                }

                function s(e) {
                    var t = {},
                        r = {};
                    for (var n in e) o(n) ? t[n] = e[n] : r[n] = e[n];
                    return [t, r]
                }

                function l(e) {
                    var t = [];
                    if (e.parent) {
                        var r = e.parent.calculatedDraw || [];
                        t.push.apply(t, v(r))
                    }
                    return t.push(e.draw), t
                }

                function u(e, t, r) {
                    var n = {
                            name: e,
                            layer: t,
                            parent: r
                        },
                        i = s(t),
                        o = _(i, 2),
                        l = o[0],
                        c = o[1],
                        f = a(c),
                        h = void 0;
                    h = f && null != r ? O : I;
                    var d = new h(b(n, l));
                    if (r && r.addLayer(d), !f)
                        for (var p in c) {
                            var m = c[p];
                            if ("object" != typeof m || Array.isArray(m)) {
                                var g = "Layer value must be an object: cannot create layer '" + p + ": " + JSON.stringify(m) + "'";
                                g += ", under parent layer '" + d.full_name + "'.", w.Styles[d.name] && (g += " The parent '" + d.name + "' is also the name of a style, did you mean to create a 'draw' group", r && (g += " under '" + r.name + "'"), g += " instead?"), R["default"]("warn", g)
                            } else u(p, m, d)
                        }
                    return d
                }

                function c(e) {
                    var t = {};
                    for (var r in e) {
                        var n = e[r];
                        n && (t[r] = u(r, n))
                    }
                    return t
                }

                function f(e, t) {
                    return e.is_built || e.build(), (null == e.zooms || e.zooms[t.zoom]) && e.doPropMatches(t) ? null == e.filter || e.filter(t) : !1
                }

                function h(e, t, r, n) {
                    var i = !1,
                        o = !1;
                    if (0 !== t.length) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            s.is_leaf ? f(s, e) && (i = !0, r.push(s), n.push(s.id)) : s.is_tree && f(s, e) && (i = !0, o = h(e, s.layers, r, n), o || (r.push(s), n.push(s.id)))
                        }
                        return i
                    }
                }
                var d = e("babel-runtime/helpers/create-class")["default"],
                    p = e("babel-runtime/helpers/class-call-check")["default"],
                    m = e("babel-runtime/helpers/get")["default"],
                    g = e("babel-runtime/helpers/inherits")["default"],
                    v = e("babel-runtime/helpers/to-consumable-array")["default"],
                    _ = e("babel-runtime/helpers/sliced-to-array")["default"],
                    y = e("babel-runtime/core-js/object/keys")["default"],
                    b = e("babel-runtime/core-js/object/assign")["default"],
                    x = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.mergeTrees = i, r.groupProps = s, r.calculateDraw = l, r.parseLayerTree = u, r.parseLayers = c, r.matchFeature = h;
                var w = e("./style_manager"),
                    A = e("./style_parser"),
                    T = e("../utils/utils"),
                    k = x(T),
                    E = e("../utils/log"),
                    R = x(E),
                    S = e("../utils/merge"),
                    M = x(S),
                    j = e("match-feature"),
                    P = ["filter", "draw", "visible", "data"];
                r.whiteList = P;
                var N = {};
                r.layer_cache = N;
                var z = ["any", "all", "not", "none"],
                    L = function () {
                        function e(t) {
                            var r = t.layer,
                                n = t.name,
                                i = t.parent,
                                o = t.draw,
                                a = t.visible,
                                s = t.filter;
                            if (p(this, e), this.id = e.id++, this.config = r, this.parent = i, this.name = n, this.full_name = this.parent ? this.parent.full_name + ":" + this.name : this.name, this.draw = o, this.filter = s, this.is_built = !1, this.visible = void 0 !== a ? a : this.parent && this.parent.visible, this.draw)
                                for (var l in this.draw) this.draw[l] = this.draw[l] || {}, this.draw[l].layer_name = this.full_name
                        }
                        return d(e, [{
                            key: "build",
                            value: function () {
                                R["default"]("trace", "Building layer '" + this.full_name + "'"), this.buildFilter(), this.buildDraw(), this.is_built = !0
                            }
                        }, {
                            key: "buildDraw",
                            value: function () {
                                this.draw = k["default"].stringsToFunctions(this.draw, A.StyleParser.wrapFunction), this.calculatedDraw = l(this)
                            }
                        }, {
                            key: "buildFilter",
                            value: function () {
                                this.filter = k["default"].stringsToFunctions(this.filter, A.StyleParser.wrapFunction);
                                var e = typeof this.filter;
                                if (null != this.filter && "object" !== e && "function" !== e) {
                                    var t = "Filter for layer " + this.full_name + " is invalid, filter value must be an object or function, ";
                                    return t += "but was set to `filter: " + this.filter + "` instead", void R["default"]("warn", t)
                                }
                                try {
                                    this.buildZooms(), this.buildPropMatches(), this.filter = null != this.filter && ("function" == typeof this.filter || y(this.filter).length > 0) ? j.match(this.filter) : null
                                } catch (r) {
                                    var t = "Filter for layer " + this.full_name + " is invalid, `filter: " + JSON.stringify(this.filter) + "` ";
                                    t += "failed with error " + r.message + ", " + r.stack, R["default"]("warn", t)
                                }
                            }
                        }, {
                            key: "buildZooms",
                            value: function () {
                                var e = this.filter && this.filter.$zoom,
                                    t = typeof e;
                                if (null != e && "function" !== t) {
                                    if (this.zooms = {}, "number" === t) this.zooms[e] = !0;
                                    else if (Array.isArray(e))
                                        for (var r = 0; r < e.length; r++) this.zooms[e[r]] = !0;
                                    else if ("object" === t && (null != e.min || null != e.max))
                                        for (var n = e.min || 0, i = e.max || 25, r = n; i > r; r++) this.zooms[r] = !0;
                                    delete this.filter.$zoom
                                }
                            }
                        }, {
                            key: "buildPropMatches",
                            value: function () {
                                var e = this;
                                this.filter && !Array.isArray(this.filter) && "function" != typeof this.filter && y(this.filter).forEach(function (t) {
                                    if (-1 === z.indexOf(t)) {
                                        var r = e.filter[t],
                                            n = typeof r,
                                            i = Array.isArray(r);
                                        if (!i && "string" !== n && "number" !== n) return;
                                        "$" === t[0] ? (e.context_prop_matches = e.context_prop_matches || [], e.context_prop_matches.push([t.substring(1), i ? r : [r]])) : (e.feature_prop_matches = e.feature_prop_matches || [], e.feature_prop_matches.push([t, i ? r : [r]])), delete e.filter[t]
                                    }
                                })
                            }
                        }, {
                            key: "doPropMatches",
                            value: function (e) {
                                if (this.feature_prop_matches)
                                    for (var t = 0; t < this.feature_prop_matches.length; t++) {
                                        var r = this.feature_prop_matches[t],
                                            n = e.feature.properties[r[0]];
                                        if (!n || -1 === r[1].indexOf(n)) return !1
                                    }
                                if (this.context_prop_matches)
                                    for (var t = 0; t < this.context_prop_matches.length; t++) {
                                        var i = this.context_prop_matches[t],
                                            n = e[i[0]];
                                        if (!n || -1 === i[1].indexOf(n)) return !1
                                    }
                                return !0
                            }
                        }]), e
                    }();
                L.id = 0;
                var O = function (e) {
                    function t(e) {
                        p(this, t), m(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.is_leaf = !0
                    }
                    return g(t, e), t
                }(L);
                r.LayerLeaf = O;
                var I = function (e) {
                    function t(e) {
                        p(this, t), m(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.is_tree = !0, this.layers = e.layers || []
                    }
                    return g(t, e), d(t, [{
                        key: "addLayer",
                        value: function (e) {
                            this.layers.push(e)
                        }
                    }, {
                        key: "buildDrawGroups",
                        value: function (e) {
                            var t = [],
                                r = [];
                            if (h(e, [this], t, r), t.length > 0) {
                                var o = n(r);
                                if (void 0 === N[o]) {
                                    for (var a = t.map(function (e) {
                                            return e && e.visible !== !1 && e.calculatedDraw
                                        }), s = {}, l = 0; l < a.length; l++) {
                                        var u = a[l];
                                        if (u)
                                            for (var c = 0; c < u.length; c++) {
                                                var f = u[c];
                                                for (var d in f) s[d] = !0
                                            }
                                    }
                                    for (var p in s) N[o] = N[o] || {}, N[o][p] = i(a, p), N[o][p] ? (N[o][p].key = o + "/" + p, N[o][p].layers = t.map(function (e) {
                                        return e && e.full_name
                                    })) : delete N[o][p];
                                    N[o] && 0 === y(N[o]).length && (N[o] = null)
                                }
                                return N[o]
                            }
                        }
                    }]), t
                }(L);
                r.LayerTree = I
            }, {
                "../utils/log": 251,
                "../utils/merge": 252,
                "../utils/utils": 256,
                "./style_manager": 240,
                "./style_parser": 241,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24,
                "babel-runtime/helpers/to-consumable-array": 25,
                "match-feature": 184
            }],
            233: [function (e, t, r) {
                "use strict";

                function n(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = t.dash_color || i,
                        n = t.background_color || o,
                        a = e;
                    a.length % 2 === 1 && Array.prototype.push.apply(a, a);
                    for (var s = !0, l = [], u = 0; u < a.length; u++) {
                        for (var c = a[u], f = 0; c > f; f++) Array.prototype.push.apply(l, s ? r : n);
                        s = !s
                    }
                    l = new Uint8Array(l);
                    var h = l.length / 4;
                    return {
                        pixels: l,
                        length: h
                    }
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r["default"] = n;
                var i = [255, 255, 255, 255],
                    o = [0, 0, 0, 0];
                t.exports = r["default"]
            }, {}],
            234: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/create")["default"],
                    i = e("babel-runtime/core-js/object/assign")["default"],
                    o = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = e("../style"),
                    s = e("../style_parser"),
                    l = e("../style_manager"),
                    u = e("../../gl/constants"),
                    c = o(u),
                    f = e("../../gl/texture"),
                    h = o(f),
                    d = e("../../gl/vertex_layout"),
                    p = o(d),
                    m = e("../../builders/polylines"),
                    g = e("./dasharray"),
                    v = o(g),
                    _ = e("../../geo"),
                    y = o(_),
                    b = e("../polygons/polygons"),
                    x = n(a.Style);
                r.Lines = x, i(x, {
                    name: "lines",
                    built_in: !0,
                    vertex_shader_src: b.shaderSrc_polygonsVertex,
                    fragment_shader_src: b.shaderSrc_polygonsFragment,
                    selection: !0,
                    init: function () {
                        a.Style.init.apply(this, arguments);
                        var e = [{
                            name: "a_position",
                            size: 4,
                            type: c["default"].SHORT,
                            normalized: !1
                        }, {
                            name: "a_extrude",
                            size: 4,
                            type: c["default"].SHORT,
                            normalized: !1
                        }, {
                            name: "a_color",
                            size: 4,
                            type: c["default"].UNSIGNED_BYTE,
                            normalized: !0
                        }];
                        this.defines.TANGRAM_LAYER_ORDER = !0, this.defines.TANGRAM_EXTRUDE_LINES = !0, this.selection && e.push({
                            name: "a_selection_color",
                            size: 4,
                            type: c["default"].UNSIGNED_BYTE,
                            normalized: !0
                        }), (this.texture || this.dash) && (this.texcoords = !0), this.texcoords && (this.defines.TANGRAM_TEXTURE_COORDS = !0, this.defines.TANGRAM_V_SCALE_ADJUST = y["default"].tile_scale, e.push({
                            name: "a_texcoord",
                            size: 2,
                            type: c["default"].UNSIGNED_SHORT,
                            normalized: !0
                        })), this.vertex_layout = new p["default"](e), this.outline_feature_style = {}, this.inline_feature_style = this.feature_style
                    },
                    compile: function () {
                        return this.parseLineTexture(), a.Style.compile.apply(this, arguments)
                    },
                    parseLineTexture: function () {
                        var e = this;
                        if (this.dash) {
                            this.dash_background_color && (this.dash_background_color = s.StyleParser.parseColor(this.dash_background_color), this.defines.TANGRAM_LINE_BACKGROUND_COLOR = "vec3(" + this.dash_background_color.slice(0, 3).join(", ") + ")");
                            var t = v["default"](this.dash);
                            this.texture = "_" + this.name + "_dasharray", h["default"].create(this.gl, this.texture, {
                                data: t.pixels,
                                height: t.length,
                                width: 1,
                                filtering: "nearest"
                            })
                        }
                        this.texture && (this.defines.TANGRAM_LINE_TEXTURE = !0, this.defines.TANGRAM_ALPHA_TEST = .5, this.shaders.uniforms = this.shaders.uniforms || {}, this.shaders.uniforms.u_texture = this.texture, this.shaders.uniforms.u_texture_ratio = 1, h["default"].getInfo(this.texture).then(function (t) {
                            t && (e.shaders.uniforms.u_texture_ratio = t.height / t.width)
                        }))
                    },
                    calcWidth: function (e, t) {
                        return e && s.StyleParser.cacheDistance(e, t) || 0
                    },
                    calcWidthNextZoom: function (e, t) {
                        t.zoom++;
                        var r = this.calcWidth(e, t);
                        return t.zoom--, r
                    },
                    _parseFeature: function (e, t, r) {
                        var n = this.feature_style,
                            i = this.calcWidth(t.width, r);
                        if (!(0 > i)) {
                            var o = this.calcWidthNextZoom(t.next_width, r);
                            if (!(0 === i && 0 === o || 0 > o) && (n.width = i * r.units_per_meter_overzoom, n.next_width = 2 * o - i, n.next_width *= r.units_per_meter_overzoom, n.next_width /= 2, n.color = this.parseColor(t.color, r), n.color)) {
                                if (n.z = t.z && s.StyleParser.cacheDistance(t.z || 0, r) || s.StyleParser.defaults.z, n.height = e.properties.height || s.StyleParser.defaults.height, n.extrude = s.StyleParser.evalProp(t.extrude, r), n.extrude && ("number" == typeof n.extrude ? n.height = n.extrude : Array.isArray(n.extrude) && (n.height = n.extrude[1])), n.extrude && n.height && (n.z += n.height), n.z *= y["default"].height_scale, n.height *= y["default"].height_scale, n.cap = t.cap, n.join = t.join, n.miter_limit = t.miter_limit, n.tile_edges = t.tile_edges, n.outline = n.outline || {
                                        width: {},
                                        next_width: {},
                                        preprocessed: !0
                                    }, t.outline && t.outline.visible !== !1 && t.outline.color && t.outline.width) {
                                    var a = 2 * this.calcWidth(t.outline.width, r),
                                        l = 2 * this.calcWidthNextZoom(t.outline.next_width, r);
                                    0 === a && 0 === l || 0 > a || 0 > l ? (n.outline.width.value = null, n.outline.next_width.value = null, n.outline.color = null) : (n.outline.width.value = a + i, n.outline.next_width.value = l + o, n.outline.color = t.outline.color, n.outline.cap = t.outline.cap || t.cap, n.outline.join = t.outline.join || t.join, n.outline.miter_limit = t.outline.miter_limit || t.miter_limit, n.outline.style = t.outline.style || this.name, n.outline.order = t.outline.order ? this.parseOrder(t.outline.order, r) : n.order, n.outline.order > n.order && (n.outline.order = n.order), n.outline.order -= .5)
                                } else n.outline.width.value = null, n.outline.next_width.value = null, n.outline.color = null;
                                return n
                            }
                        }
                    },
                    _preprocess: function (e) {
                        return e.color = s.StyleParser.colorCacheObject(e.color), e.width = s.StyleParser.cacheObject(e.width, s.StyleParser.cacheUnits), e.next_width = s.StyleParser.cacheObject(e.width, s.StyleParser.cacheUnits), e.z = s.StyleParser.cacheObject(e.z, s.StyleParser.cacheUnits), e.outline && (e.outline.color = s.StyleParser.colorCacheObject(e.outline.color), e.outline.width = s.StyleParser.cacheObject(e.outline.width, s.StyleParser.cacheUnits), e.outline.next_width = s.StyleParser.cacheObject(e.outline.width, s.StyleParser.cacheUnits)), e
                    },
                    makeVertexTemplate: function (e) {
                        var t = 0;
                        return this.vertex_template[t++] = 0, this.vertex_template[t++] = 0, this.vertex_template[t++] = e.z || 0, this.vertex_template[t++] = this.scaleOrder(e.order), this.vertex_template[t++] = 0, this.vertex_template[t++] = 0, this.vertex_template[t++] = 0, this.vertex_template[t++] = e.next_width, this.vertex_template[t++] = 255 * e.color[0], this.vertex_template[t++] = 255 * e.color[1], this.vertex_template[t++] = 255 * e.color[2], this.vertex_template[t++] = 255 * e.color[3], this.selection && (this.vertex_template[t++] = 255 * e.selection_color[0], this.vertex_template[t++] = 255 * e.selection_color[1], this.vertex_template[t++] = 255 * e.selection_color[2], this.vertex_template[t++] = 255 * e.selection_color[3]), this.texcoords && (this.vertex_template[t++] = 0, this.vertex_template[t++] = 0), this.vertex_template
                    },
                    buildLines: function (e, t, r, n, i) {
                        if (this.feature_style = this.outline_feature_style, t.outline && null != t.outline.color && null != t.outline.width.value) {
                            var o = l.StyleManager.styles[t.outline.style];
                            o && o.addFeature(n.feature, t.outline, n)
                        }
                        this.feature_style = this.inline_feature_style;
                        var a = this.makeVertexTemplate(t);
                        m.buildPolylines(e, t.width, r, a, {
                            cap: t.cap,
                            join: t.join,
                            miter_limit: t.miter_limit,
                            scaling_index: this.vertex_layout.index.a_extrude,
                            scaling_normalize: 256,
                            texcoord_index: this.vertex_layout.index.a_texcoord,
                            texcoord_width: (t.width || t.next_width) / n.tile.overzoom2,
                            texcoord_normalize: 65535,
                            closed_polygon: i && i.closed_polygon,
                            remove_tile_edges: !t.tile_edges && i && i.remove_tile_edges,
                            tile_edge_tolerance: y["default"].tile_scale * n.tile.pad_scale * 4
                        })
                    },
                    buildPolygons: function (e, t, r, n) {
                        for (var i = 0; i < e.length; i++) this.buildLines(e[i], t, r, n, {
                            closed_polygon: !0,
                            remove_tile_edges: !0
                        })
                    }
                })
            }, {
                "../../builders/polylines": 199,
                "../../geo": 201,
                "../../gl/constants": 202,
                "../../gl/texture": 208,
                "../../gl/vertex_layout": 213,
                "../polygons/polygons": 237,
                "../style": 239,
                "../style_manager": 240,
                "../style_parser": 241,
                "./dasharray": 233,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/create": 7,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            235: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n, i = ["left", "top-left", "bottom-left"],
                    o = ["right", "top-right", "bottom-right"],
                    a = ["top", "top-left", "top-right"],
                    s = ["bottom", "bottom-left", "bottom-right"];
                r["default"] = n = {
                    computeOffset: function (e, t, r) {
                        if (!r || "center" === r) return e;
                        var n = [e[0], e[1]];
                        return this.isLeftAnchor(r) ? n[0] -= t[0] / 2 : this.isRightAnchor(r) && (n[0] += t[0] / 2), this.isTopAnchor(r) ? n[1] -= t[1] / 2 : this.isBottomAnchor(r) && (n[1] += t[1] / 2), n
                    },
                    isLeftAnchor: function (e) {
                        return i.indexOf(e) > -1
                    },
                    isRightAnchor: function (e) {
                        return o.indexOf(e) > -1
                    },
                    isTopAnchor: function (e) {
                        return a.indexOf(e) > -1
                    },
                    isBottomAnchor: function (e) {
                        return s.indexOf(e) > -1
                    }
                }, t.exports = r["default"]
            }, {}],
            236: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/sliced-to-array")["default"],
                    i = e("babel-runtime/core-js/object/create")["default"],
                    o = e("babel-runtime/core-js/object/assign")["default"],
                    a = e("babel-runtime/core-js/promise")["default"],
                    s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var l = e("../../utils/log"),
                    u = s(l),
                    c = e("../style"),
                    f = e("../style_parser"),
                    h = e("../../gl/constants"),
                    d = s(h),
                    p = e("../../gl/vertex_layout"),
                    m = s(p),
                    g = e("../../builders/points"),
                    v = e("../../gl/texture"),
                    _ = s(v),
                    y = e("../../geo"),
                    b = s(y),
                    x = e("../../vector"),
                    w = s(x),
                    A = e("../../labels/collision"),
                    T = s(A),
                    k = e("../../labels/label_point"),
                    E = s(k),
                    R = e("../text/text_labels"),
                    S = e("./point_anchor"),
                    M = s(S),
                    j = "uniform vec2 u_resolution;\nuniform float u_time;\nuniform vec3 u_map_position;\nuniform vec4 u_tile_origin;\nuniform float u_tile_proxy_depth;\nuniform float u_meters_per_pixel;\nuniform float u_device_pixel_ratio;\n\nuniform mat4 u_model;\nuniform mat4 u_modelView;\nuniform mat3 u_normalMatrix;\nuniform mat3 u_inverseNormalMatrix;\n\nattribute vec4 a_position;\nattribute vec4 a_shape;\nattribute vec4 a_color;\nattribute vec2 a_texcoord;\nattribute vec2 a_offset;\n\n#define TANGRAM_NORMAL vec3(0., 0., 1.)\n\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying vec4 v_world_position;\n\n#ifdef TANGRAM_MULTI_SAMPLER\nvarying float v_sampler;\n#endif\n\n#pragma tangram: camera\n#pragma tangram: material\n#pragma tangram: lighting\n#pragma tangram: raster\n#pragma tangram: global\n\nvec2 rotate2D(vec2 _st, float _angle) {\n    return mat2(cos(_angle),-sin(_angle),\n                sin(_angle),cos(_angle)) * _st;\n}\n\nvoid main() {\n    // Initialize globals\n    #pragma tangram: setup\n\n    v_color = a_color;\n    v_texcoord = a_texcoord;\n\n    // Position\n    vec4 position = u_modelView * vec4(a_position.xyz, 1.);\n\n    // Apply positioning and scaling in screen space\n    vec2 shape = a_shape.xy / 256.;                 // values have an 8-bit fraction\n    vec2 offset = vec2(a_offset.x, -a_offset.y);    // flip y to make it point down\n    float theta = a_shape.z / 4096.;                // values have a 12-bit fraction\n\n    #ifdef TANGRAM_MULTI_SAMPLER\n    v_sampler = a_shape.w; // texture sampler\n    #endif\n\n    shape = rotate2D(shape, theta);     // apply rotation to vertex\n    shape += rotate2D(offset, theta);   // apply offset on rotated axis (e.g. so line labels follow text axis)\n\n    // World coordinates for 3d procedural textures\n    v_world_position = u_model * position;\n    v_world_position.xy += shape * u_meters_per_pixel;\n    v_world_position = wrapWorldPosition(v_world_position);\n\n    // Modify position before camera projection\n    #pragma tangram: position\n\n    cameraProjection(position);\n\n    #ifdef TANGRAM_LAYER_ORDER\n        // +1 is to keep all layers including proxies > 0\n        applyLayerOrder(a_position.w + u_tile_proxy_depth + 1., position);\n    #endif\n\n    // Apply pixel offset in screen-space\n    // Multiply by 2 is because screen is 2 units wide Normalized Device Coords (and u_resolution device pixels wide)\n    // Device pixel ratio adjustment is because shape is in logical pixels\n    position.xy += shape * position.w * 2. * u_device_pixel_ratio / u_resolution;\n\n    gl_Position = position;\n}\n",
                    P = "uniform vec2 u_resolution;\nuniform float u_time;\nuniform vec3 u_map_position;\nuniform vec4 u_tile_origin;\nuniform float u_meters_per_pixel;\nuniform float u_device_pixel_ratio;\n\nuniform mat3 u_normalMatrix;\nuniform mat3 u_inverseNormalMatrix;\n\nuniform sampler2D u_texture;\n\n#ifdef TANGRAM_MULTI_SAMPLER\nuniform sampler2D u_label_texture;\nvarying float v_sampler;\n#endif\n\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying vec4 v_world_position;\n\n#define TANGRAM_NORMAL vec3(0., 0., 1.)\n\n// Alpha discard threshold (substitute for alpha blending)\n#ifndef TANGRAM_ALPHA_TEST\n#define TANGRAM_ALPHA_TEST 0.5\n#endif\n\n// Alpha fade range for edges of points\n#ifndef TANGRAM_FADE_RANGE\n#define TANGRAM_FADE_RANGE .15\n#endif\n#define TANGRAM_FADE_START (1. - TANGRAM_FADE_RANGE)\n\n#pragma tangram: camera\n#pragma tangram: material\n#pragma tangram: lighting\n#pragma tangram: raster\n#pragma tangram: global\n\nvoid main (void) {\n    // Initialize globals\n    #pragma tangram: setup\n\n    vec4 color = v_color;\n\n    #ifdef TANGRAM_MULTI_SAMPLER\n    if (v_sampler == 0.) { // sprite sampler\n    #endif\n        #ifdef TANGRAM_POINT_TEXTURE\n            // Draw sprite\n            color *= texture2D(u_texture, v_texcoord);\n        #else\n            // Draw a point\n            vec2 uv = v_texcoord * 2. - 1.; // fade alpha near circle edge\n            float point_dist = length(uv);\n            color.a = clamp(color.a - (smoothstep(0., TANGRAM_FADE_RANGE, (point_dist - TANGRAM_FADE_START)) / TANGRAM_FADE_RANGE), 0., color.a);\n        #endif\n    #ifdef TANGRAM_MULTI_SAMPLER\n    }\n    else { // label sampler\n        color = texture2D(u_label_texture, v_texcoord);\n        color.rgb /= max(color.a, 0.001); // un-multiply canvas texture\n    }\n    #endif\n\n    // Manually un-multiply alpha, for cases where texture has pre-multiplied alpha\n    #ifdef TANGRAM_UNMULTIPLY_ALPHA\n        color.rgb /= max(color.a, 0.001);\n    #endif\n\n    // If blending is off, use alpha discard as a lower-quality substitute\n    #if !defined(TANGRAM_BLEND_OVERLAY) && !defined(TANGRAM_BLEND_INLAY)\n        if (color.a < TANGRAM_ALPHA_TEST) {\n            discard;\n        }\n    #endif\n\n    #pragma tangram: color\n\n    // Fade out when tile is zooming out, e.g. acting as proxy tiles\n    // NB: this is mostly done to compensate for text label collision happening at the label's 1x zoom. As labels\n    // in proxy tiles are scaled down, they begin to overlap, and the fade is a simple way to ease the transition.\n    #ifdef TANGRAM_FADE_ON_ZOOM_OUT\n        color.a *= clamp(1. - TANGRAM_FADE_ON_ZOOM_OUT_RATE * (u_tile_origin.z - u_map_position.z), 0., 1.);\n    #endif\n\n    #pragma tangram: filter\n\n    gl_FragColor = color;\n}\n",
                    N = i(c.Style);
                r.Points = N, o(N, R.TextLabels), o(N, {
                    name: "points",
                    built_in: !0,
                    selection: !0,
                    blend: "overlay",
                    init: function () {
                        arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        c.Style.init.apply(this, arguments), this.vertex_shader_src = j, this.fragment_shader_src = P;
                        var e = [{
                            name: "a_position",
                            size: 4,
                            type: d["default"].SHORT,
                            normalized: !1
                        }, {
                            name: "a_shape",
                            size: 4,
                            type: d["default"].SHORT,
                            normalized: !1
                        }, {
                            name: "a_texcoord",
                            size: 2,
                            type: d["default"].UNSIGNED_SHORT,
                            normalized: !0
                        }, {
                            name: "a_offset",
                            size: 2,
                            type: d["default"].SHORT,
                            normalized: !1
                        }, {
                            name: "a_color",
                            size: 4,
                            type: d["default"].UNSIGNED_BYTE,
                            normalized: !0
                        }];
                        this.selection && e.push({
                            name: "a_selection_color",
                            size: 4,
                            type: d["default"].UNSIGNED_BYTE,
                            normalized: !0
                        }), this.vertex_layout = new m["default"](e), "overlay" !== this.blend && (this.defines.TANGRAM_LAYER_ORDER = !0), this.shaders.uniforms = this.shaders.uniforms || {}, this.shaders.uniforms.u_label_texture = _["default"]["default"], this.texture && (this.defines.TANGRAM_POINT_TEXTURE = !0, this.shaders.uniforms.u_texture = this.texture), this.defines.TANGRAM_MULTI_SAMPLER = !0, this.defines.TANGRAM_FADE_ON_ZOOM_OUT = !0, this.defines.TANGRAM_FADE_ON_ZOOM_OUT_RATE = 2, this.collision_group_points = this.name + "-points", this.collision_group_text = this.name + "-text", this.reset()
                    },
                    reset: function () {
                        this.queues = {}, this.resetText()
                    },
                    addFeature: function (e, t, r) {
                        var n = r.tile;
                        if (n.generation === this.generation && (t = this.preprocess(t))) {
                            var i = {};
                            if (i.color = this.parseColor(t.color, r), !i.color && !this.texture) return null;
                            var o = i.sprite = f.StyleParser.evalProp(t.sprite, r);
                            if (i.sprite_default = t.sprite_default, this.texture && _["default"].textures[this.texture] && _["default"].textures[this.texture].sprites) {
                                if (!o && !i.sprite_default) return;
                                if (!_["default"].textures[this.texture].sprites[o]) {
                                    if (!i.sprite_default) return void u["default"]("warn", "Style: in style '" + this.name + "', could not find sprite '" + o + "' for texture '" + this.texture + "'");
                                    if (o = i.sprite_default, !_["default"].textures[this.texture].sprites[o]) return void u["default"]("warn", "Style: in style '" + this.name + "', could not find default sprite '" + o + "' for texture '" + this.texture + "'")
                                }
                            } else o && (u["default"]("warn", "Style: in style '" + this.name + "', sprite '" + o + "' was specified, but texture '" + this.texture + "' has no sprites"), o = null);
                            var a = void 0;
                            this.texture && o ? (a = _["default"].getSpriteInfo(this.texture, o), i.texcoords = a.texcoords) : i.texcoords = null, i.z = t.z && f.StyleParser.cacheDistance(t.z, r) || f.StyleParser.defaults.z, i.size = t.size, i.size = i.size ? f.StyleParser.cacheProperty(i.size, r) : a ? a.size : [16, 16], i.size = [Math.min(i.size[0] || i.size, 256), Math.min(i.size[1] || i.size, 256)], i.angle = f.StyleParser.evalProp(t.angle, r) || 0, i.sampler = 0, this.computeLayout(i, e, t, r, n);
                            var s = t.text && t.text.visible !== !1 && this.parseTextFeature(e, t.text, r, n);
                            s && (s.layout.priority = t.text.priority ? Math.max(s.layout.priority, i.priority + .5) : i.priority + .5, s.layout.offset = M["default"].computeOffset(s.layout.offset, i.size, t.anchor), s.layout.offset = M["default"].computeOffset(s.layout.offset, i.size, t.text.anchor), i.offset !== f.StyleParser.zeroPair && (s.layout.offset === f.StyleParser.zeroPair ? s.layout.offset = i.offset : (s.layout.offset[0] += i.offset[0], s.layout.offset[1] += i.offset[1])), s.layout.move_into_tile = !1, T["default"].addStyle(this.collision_group_text, n.key)), this.tile_data[n.key] || this.startData(n), this.queues[n.key].push({
                                feature: e,
                                draw: t,
                                context: r,
                                style: i,
                                text_feature: s
                            }), T["default"].addStyle(this.collision_group_points, n.key)
                        }
                    },
                    createTextLabels: function (e, t) {
                        for (var r = [], n = 0; n < t.length; n++) {
                            var i = t[n],
                                o = this.texts[e][i.text_settings_key][i.text];
                            i.label = new E["default"](i.point_label.position, o.size.collision_size, i.layout), r.push(i), i.parent && (i.parent.child = i)
                        }
                        return r
                    },
                    startData: function (e) {
                        return this.queues[e.key] = [], c.Style.startData.call(this, e)
                    },
                    endData: function (e) {
                        var t = this;
                        if (e.canceled) return void u["default"]("trace", "Style " + this.name + ": stop tile build because tile was canceled: " + e.key);
                        var r = this.queues[e.key];
                        this.queues[e.key] = [];
                        var i = [],
                            o = [];
                        return r.forEach(function (e) {
                            for (var r = e.style, n = e.feature, a = n.geometry, s = t.buildLabels(r.size, a, r), l = 0; l < s.length; l++) {
                                var u = s[l],
                                    c = T["default"].nextLinkId();
                                o.push({
                                    feature: n,
                                    draw: e.draw,
                                    context: e.context,
                                    style: r,
                                    layout: r,
                                    label: u,
                                    link: c
                                }), e.text_feature && i.push({
                                    feature: n,
                                    draw: e.text_feature.draw,
                                    context: e.context,
                                    text: e.text_feature.text,
                                    text_settings_key: e.text_feature.text_settings_key,
                                    layout: e.text_feature.layout,
                                    point_label: u,
                                    link: c
                                })
                            }
                        }), a.all([T["default"].collide(o, this.collision_group_points, e.key).then(function (e) {
                            e.forEach(function (e) {
                                t.feature_style = e.style, t.feature_style.label = e.label, c.Style.addFeature.call(t, e.feature, e.draw, e.context)
                            })
                        }), this.renderTextLabels(e, this.collision_group_text, i)]).then(function (r) {
                            var i = n(r, 2),
                                o = i[1],
                                a = o.labels,
                                s = o.texts,
                                l = o.texture;
                            return a && s && a.forEach(function (e) {
                                var r = e.text_settings_key,
                                    n = s[r] && s[r][e.text],
                                    i = t.feature_style;
                                i.label = e.label, i.size = n.size.logical_size, i.angle = e.label.angle || 0, i.sampler = 1, i.texcoords = n.texcoords, c.Style.addFeature.call(t, e.feature, e.draw, e.context)
                            }), t.freeText(e), c.Style.endData.call(t, e).then(function (e) {
                                return l && e && (e.uniforms = e.uniforms || {}, e.textures = e.textures || [], e.uniforms.u_label_texture = l, e.textures.push(l)), e
                            })
                        })
                    },
                    _preprocess: function (e) {
                        return e.color = f.StyleParser.colorCacheObject(e.color), e.z = f.StyleParser.cacheObject(e.z, f.StyleParser.cacheUnits), e.size = f.StyleParser.cacheObject(e.size, function (e) {
                            return Array.isArray(e) ? e.map(parseFloat) : parseFloat(e)
                        }), e.offset = f.StyleParser.cacheObject(e.offset, function (e) {
                            return Array.isArray(e) && e.map(parseFloat) || 0
                        }), e.buffer = f.StyleParser.cacheObject(e.buffer, function (e) {
                            return (Array.isArray(e) ? e : [e, e]).map(parseFloat) || 0
                        }), e.text = this.preprocessText(e.text), e.text && (e.text.key = e.key, e.text.anchor = e.text.anchor || "bottom"), e
                    },
                    computeLayout: function (e, t, r, n, i) {
                        var o = e || {};
                        o.id = t, o.units_per_pixel = i.units_per_pixel || 1, o.collide = r.collide === !1 ? !1 : !0, o.cull_from_tile = null != r.cull_from_tile ? r.cull_from_tile : !1, o.move_into_tile = null != r.move_into_tile ? r.move_into_tile : !1, o.centroid = r.centroid, o.anchor = r.anchor, o.offset = f.StyleParser.cacheProperty(r.offset, n) || f.StyleParser.zeroPair, o.buffer = f.StyleParser.cacheProperty(r.buffer, n) || f.StyleParser.zeroPair;
                        var a = r.priority;
                        return null != a ? "function" == typeof a && (a = a(n)) : a = -1 >>> 0, o.priority = a, o
                    },
                    buildLabels: function (e, t, r) {
                        var n = [];
                        if ("Point" === t.type) n.push(new E["default"](t.coordinates, e, r));
                        else if ("MultiPoint" === t.type)
                            for (var i = t.coordinates, o = 0; o < i.length; ++o) {
                                var a = i[o];
                                n.push(new E["default"](a, e, r))
                            } else if ("LineString" === t.type)
                                for (var i = t.coordinates, o = 0; o < i.length; ++o) n.push(new E["default"](i[o], e, r));
                            else if ("MultiLineString" === t.type)
                            for (var s = t.coordinates, l = 0; l < s.length; l++)
                                for (var i = s[l], o = 0; o < i.length; ++o) n.push(new E["default"](i[o], e, r));
                        else if ("Polygon" === t.type)
                            if (r.centroid) {
                                var u = b["default"].centroid(t.coordinates);
                                n.push(new E["default"](u, e, r))
                            } else
                                for (var c = t.coordinates, l = 0; l < c.length; l++)
                                    for (var i = c[l], o = 0; o < i.length; ++o) n.push(new E["default"](i[o], e, r));
                        else if ("MultiPolygon" === t.type) {
                            var u = b["default"].multiCentroid(t.coordinates);
                            n.push(new E["default"](u, e, r))
                        }
                        return n
                    },
                    makeVertexTemplate: function (e) {
                        var t = e.color || f.StyleParser.defaults.color;
                        return this.fillVertexTemplate("a_position", 0, {
                            size: 2
                        }), this.fillVertexTemplate("a_position", e.z || 0, {
                            size: 1,
                            offset: 2
                        }), this.fillVertexTemplate("a_position", this.scaleOrder(e.order), {
                            size: 1,
                            offset: 3
                        }), this.fillVertexTemplate("a_shape", 0, {
                            size: 4
                        }), this.fillVertexTemplate("a_texcoord", 0, {
                            size: 2
                        }), this.fillVertexTemplate("a_offset", 0, {
                            size: 2
                        }), this.fillVertexTemplate("a_color", w["default"].mult(t, 255), {
                            size: 4
                        }), this.selection && this.fillVertexTemplate("a_selection_color", w["default"].mult(e.selection_color, 255), {
                            size: 4
                        }), this.vertex_template
                    },
                    buildQuad: function (e, t, r, n, i, o, a, s) {
                        g.buildQuadsForPoints(e, a, s, {
                            texcoord_index: this.vertex_layout.index.a_texcoord,
                            position_index: this.vertex_layout.index.a_position,
                            shape_index: this.vertex_layout.index.a_shape,
                            offset_index: this.vertex_layout.index.a_offset
                        }, {
                            quad: t,
                            quad_normalize: 256,
                            offset: i,
                            angle: 4096 * r,
                            shape_w: n,
                            texcoord_scale: o,
                            texcoord_normalize: 65535
                        })
                    },
                    build: function (e, t) {
                        var r = this.makeVertexTemplate(e),
                            n = e.label;
                        this.buildQuad([n.position], e.size, e.angle, e.sampler, n.offset, e.texcoords, t, r)
                    },
                    buildLines: function (e, t, r) {
                        this.build(t, r)
                    },
                    buildPoints: function (e, t, r) {
                        this.build(t, r)
                    },
                    buildPolygons: function (e, t, r) {
                        this.build(t, r)
                    }
                })
            }, {
                "../../builders/points": 197,
                "../../geo": 201,
                "../../gl/constants": 202,
                "../../gl/texture": 208,
                "../../gl/vertex_layout": 213,
                "../../labels/collision": 214,
                "../../labels/label_point": 217,
                "../../utils/log": 251,
                "../../vector": 259,
                "../style": 239,
                "../style_parser": 241,
                "../text/text_labels": 244,
                "./point_anchor": 235,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/create": 7,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24
            }],
            237: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/create")["default"],
                    i = e("babel-runtime/core-js/object/assign")["default"],
                    o = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = e("../style"),
                    s = e("../style_parser"),
                    l = e("../../gl/constants"),
                    u = o(l),
                    c = e("../../gl/vertex_layout"),
                    f = o(c),
                    h = e("../../builders/polygons"),
                    d = e("../../geo"),
                    p = o(d),
                    m = "uniform vec2 u_resolution;\nuniform float u_time;\nuniform vec3 u_map_position;\nuniform vec4 u_tile_origin;\nuniform float u_tile_proxy_depth;\nuniform float u_meters_per_pixel;\nuniform float u_device_pixel_ratio;\n\nuniform mat4 u_model;\nuniform mat4 u_modelView;\nuniform mat3 u_normalMatrix;\nuniform mat3 u_inverseNormalMatrix;\n\nattribute vec4 a_position;\nattribute vec4 a_color;\n\n// Optional normal attribute, otherwise default to up\n#ifdef TANGRAM_NORMAL_ATTRIBUTE\n    attribute vec3 a_normal;\n    #define TANGRAM_NORMAL a_normal\n#else\n    #define TANGRAM_NORMAL vec3(0., 0., 1.)\n#endif\n\n// Optional dynamic line extrusion\n#ifdef TANGRAM_EXTRUDE_LINES\n    // xy: extrusion direction in xy plane\n    // z:  half-width of line (amount to extrude)\n    // w:  scaling factor for interpolating width between zooms\n    attribute vec4 a_extrude;\n#endif\n\nvarying vec4 v_position;\nvarying vec3 v_normal;\nvarying vec4 v_color;\nvarying vec4 v_world_position;\n\n// Optional texture UVs\n#ifdef TANGRAM_TEXTURE_COORDS\n    attribute vec2 a_texcoord;\n    varying vec2 v_texcoord;\n#endif\n\n// Optional model position varying for tile coordinate zoom\n#ifdef TANGRAM_MODEL_POSITION_BASE_ZOOM_VARYING\n    varying vec4 v_modelpos_base_zoom;\n#endif\n\n#if defined(TANGRAM_LIGHTING_VERTEX)\n    varying vec4 v_lighting;\n#endif\n\n#pragma tangram: camera\n#pragma tangram: material\n#pragma tangram: lighting\n#pragma tangram: raster\n#pragma tangram: global\n\nvoid main() {\n    // Initialize globals\n    #pragma tangram: setup\n\n    // Texture UVs\n    #ifdef TANGRAM_TEXTURE_COORDS\n        v_texcoord = a_texcoord;\n        #ifdef TANGRAM_EXTRUDE_LINES\n            v_texcoord.y *= TANGRAM_V_SCALE_ADJUST;\n        #endif\n    #endif\n\n    // Pass model position to fragment shader\n    #ifdef TANGRAM_MODEL_POSITION_BASE_ZOOM_VARYING\n        v_modelpos_base_zoom = modelPositionBaseZoom();\n    #endif\n\n    // Position\n    vec4 position = vec4(a_position.xy, a_position.z / TANGRAM_HEIGHT_SCALE, 1.); // convert height back to meters\n\n    #ifdef TANGRAM_EXTRUDE_LINES\n        vec2 extrude = a_extrude.xy / 256.; // values have an 8-bit fraction\n        float width = a_extrude.z;\n        float dwdz = a_extrude.w;\n        float dz = clamp(u_map_position.z - u_tile_origin.z, 0., 1.);\n\n        // Interpolate between zoom levels\n        width += dwdz * dz;\n\n        // Scale pixel dimensions to be consistent in screen space\n        // Scale from style zoom units back to tile zoom\n        width *= exp2(-dz - (u_tile_origin.z - u_tile_origin.w));\n\n        // Modify line width before extrusion\n        #pragma tangram: width\n\n        position.xy += extrude * width;\n    #endif\n\n    // World coordinates for 3d procedural textures\n    v_world_position = wrapWorldPosition(u_model * position);\n\n    // Adjust for tile and view position\n    position = u_modelView * position;\n\n    // Modify position before camera projection\n    #pragma tangram: position\n\n    // Setup varyings\n    v_position = position;\n    v_normal = normalize(u_normalMatrix * TANGRAM_NORMAL);\n    v_color = a_color;\n\n    #if defined(TANGRAM_LIGHTING_VERTEX)\n        // Vertex lighting\n        vec3 normal = v_normal;\n\n        // Modify normal before lighting\n        #pragma tangram: normal\n\n        // Pass lighting intensity to fragment shader\n        v_lighting = calculateLighting(position.xyz - u_eye, normal, vec4(1.));\n    #endif\n\n    // Camera\n    cameraProjection(position);\n\n    // +1 is to keep all layers including proxies > 0\n    applyLayerOrder(a_position.w + u_tile_proxy_depth + 1., position);\n\n    gl_Position = position;\n}\n",
                    g = "uniform vec2 u_resolution;\nuniform float u_time;\nuniform vec3 u_map_position;\nuniform vec4 u_tile_origin;\nuniform float u_meters_per_pixel;\nuniform float u_device_pixel_ratio;\n\nuniform mat3 u_normalMatrix;\nuniform mat3 u_inverseNormalMatrix;\n\nvarying vec4 v_position;\nvarying vec3 v_normal;\nvarying vec4 v_color;\nvarying vec4 v_world_position;\n\n#define TANGRAM_NORMAL v_normal\n\n#ifdef TANGRAM_TEXTURE_COORDS\n    varying vec2 v_texcoord;\n#endif\n\n#ifdef TANGRAM_MODEL_POSITION_BASE_ZOOM_VARYING\n    varying vec4 v_modelpos_base_zoom;\n#endif\n\n#if defined(TANGRAM_LIGHTING_VERTEX)\n    varying vec4 v_lighting;\n#endif\n\n#pragma tangram: camera\n#pragma tangram: material\n#pragma tangram: lighting\n#pragma tangram: raster\n#pragma tangram: global\n\nvoid main (void) {\n    // Initialize globals\n    #pragma tangram: setup\n\n    vec4 color = v_color;\n    vec3 normal = TANGRAM_NORMAL;\n\n    // Apply raster to vertex color\n    #ifdef TANGRAM_RASTER_TEXTURE_COLOR\n        color *= sampleRaster(0); // multiplied to tint texture color\n    #endif\n\n    // Apply line texture\n    #ifdef TANGRAM_LINE_TEXTURE\n        vec2 _line_st = vec2(v_texcoord.x, fract(v_texcoord.y / u_texture_ratio));\n        vec4 _line_color = texture2D(u_texture, _line_st);\n\n        if (_line_color.a < TANGRAM_ALPHA_TEST) {\n            #ifdef TANGRAM_LINE_BACKGROUND_COLOR\n                color.rgb = TANGRAM_LINE_BACKGROUND_COLOR;\n            #elif !defined(TANGRAM_BLEND_OVERLAY) && !defined(TANGRAM_BLEND_INLAY)\n                discard; // use discard when alpha blending is unavailable\n            #else\n                color.a = 0.; // use alpha channel when blending is available\n            #endif\n        }\n        else {\n            color *= _line_color;\n        }\n    #endif\n\n    // First, get normal from raster tile (if applicable)\n    #ifdef TANGRAM_RASTER_TEXTURE_NORMAL\n        normal = normalize(sampleRaster(0).rgb * 2. - 1.);\n    #endif\n\n    // Second, alter normal with normal map texture (if applicable)\n    #if defined(TANGRAM_LIGHTING_FRAGMENT) && defined(TANGRAM_MATERIAL_NORMAL_TEXTURE)\n        calculateNormal(normal);\n    #endif\n\n    // Normal modification applied here for fragment lighting or no lighting,\n    // and in vertex shader for vertex lighting\n    #if !defined(TANGRAM_LIGHTING_VERTEX)\n        #pragma tangram: normal\n    #endif\n\n    // Color modification before lighting is applied\n    #pragma tangram: color\n\n    #if defined(TANGRAM_LIGHTING_FRAGMENT)\n        // Calculate per-fragment lighting\n        color = calculateLighting(v_position.xyz - u_eye, normal, color);\n    #elif defined(TANGRAM_LIGHTING_VERTEX)\n        // Apply lighting intensity interpolated from vertex shader\n        color *= v_lighting;\n    #endif\n\n    // Post-processing effects (modify color after lighting)\n    #pragma tangram: filter\n\n    gl_FragColor = color;\n}\n",
                    v = n(a.Style);
                r.Polygons = v, r.shaderSrc_polygonsVertex = m, r.shaderSrc_polygonsFragment = g, i(v, {
                    name: "polygons",
                    built_in: !0,
                    vertex_shader_src: m,
                    fragment_shader_src: g,
                    selection: !0,
                    init: function () {
                        a.Style.init.apply(this, arguments);
                        var e = [{
                            name: "a_position",
                            size: 4,
                            type: u["default"].SHORT,
                            normalized: !1
                        }, {
                            name: "a_normal",
                            size: 3,
                            type: u["default"].BYTE,
                            normalized: !0
                        }, {
                            name: "a_color",
                            size: 4,
                            type: u["default"].UNSIGNED_BYTE,
                            normalized: !0
                        }];
                        this.defines.TANGRAM_NORMAL_ATTRIBUTE = !0, this.defines.TANGRAM_LAYER_ORDER = !0, this.selection && e.push({
                            name: "a_selection_color",
                            size: 4,
                            type: u["default"].UNSIGNED_BYTE,
                            normalized: !0
                        }), this.texcoords && (this.defines.TANGRAM_TEXTURE_COORDS = !0, e.push({
                            name: "a_texcoord",
                            size: 2,
                            type: u["default"].UNSIGNED_SHORT,
                            normalized: !0
                        })), this.vertex_layout = new f["default"](e)
                    },
                    _parseFeature: function (e, t, r) {
                        var n = this.feature_style;
                        return n.color = this.parseColor(t.color, r), n.color ? (n.z = t.z && s.StyleParser.cacheDistance(t.z, r) || s.StyleParser.defaults.z, n.z *= p["default"].height_scale, n.extrude = s.StyleParser.evalProp(t.extrude, r), n.extrude && (n.extrude === !0 ? (n.height = e.properties.height || s.StyleParser.defaults.height, n.min_height = e.properties.min_height || s.StyleParser.defaults.min_height) : "number" == typeof n.extrude ? (n.height = n.extrude, n.min_height = 0) : Array.isArray(n.extrude) && (n.min_height = n.extrude[0], n.height = n.extrude[1]), n.height *= p["default"].height_scale, n.min_height *= p["default"].height_scale), n.tile_edges = t.tile_edges, n) : null
                    },
                    _preprocess: function (e) {
                        return e.color = s.StyleParser.colorCacheObject(e.color), e.z = s.StyleParser.cacheObject(e.z, s.StyleParser.cacheUnits), e
                    },
                    makeVertexTemplate: function (e) {
                        var t = 0;
                        return this.vertex_template[t++] = 0, this.vertex_template[t++] = 0, this.vertex_template[t++] = e.z || 0, this.vertex_template[t++] = this.scaleOrder(e.order), this.vertex_template[t++] = 0, this.vertex_template[t++] = 0, this.vertex_template[t++] = 127, this.vertex_template[t++] = 255 * e.color[0], this.vertex_template[t++] = 255 * e.color[1], this.vertex_template[t++] = 255 * e.color[2], this.vertex_template[t++] = 255 * e.color[3], this.selection && (this.vertex_template[t++] = 255 * e.selection_color[0], this.vertex_template[t++] = 255 * e.selection_color[1], this.vertex_template[t++] = 255 * e.selection_color[2], this.vertex_template[t++] = 255 * e.selection_color[3]), this.texcoords && (this.vertex_template[t++] = 0, this.vertex_template[t++] = 0), this.vertex_template
                    },
                    buildPolygons: function (e, t, r, n) {
                        var i = this.makeVertexTemplate(t),
                            o = {
                                texcoord_index: this.vertex_layout.index.a_texcoord,
                                texcoord_normalize: 65535,
                                remove_tile_edges: !t.tile_edges,
                                tile_edge_tolerance: p["default"].tile_scale * n.tile.pad_scale * 4,
                                winding: n.winding
                            };
                        t.extrude && t.height ? h.buildExtrudedPolygons(e, t.z, t.height, t.min_height, r, i, this.vertex_layout.index.a_normal, 127, o) : h.buildPolygons(e, r, i, o)
                    }
                })
            }, {
                "../../builders/polygons": 198,
                "../../geo": 201,
                "../../gl/constants": 202,
                "../../gl/vertex_layout": 213,
                "../style": 239,
                "../style_parser": 241,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/create": 7,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            238: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/create")["default"],
                    i = e("babel-runtime/core-js/object/assign")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o = e("../style_parser"),
                    a = e("../polygons/polygons"),
                    s = n(a.Polygons);
                r.RasterStyle = s, i(s, {
                    name: "raster",
                    "super": a.Polygons,
                    built_in: !0,
                    selection: !1,
                    init: function () {
                        this.raster = this.raster || "color", this["super"].init.apply(this, arguments)
                    },
                    _preprocess: function (e) {
                        return e.color = e.color || o.StyleParser.defaults.color, this["super"]._preprocess.apply(this, arguments)
                    }
                })
            }, {
                "../polygons/polygons": 237,
                "../style_parser": 241,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/create": 7
            }],
            239: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/sliced-to-array")["default"],
                    i = e("babel-runtime/core-js/promise")["default"],
                    o = e("babel-runtime/core-js/object/assign")["default"],
                    a = e("babel-runtime/core-js/object/keys")["default"],
                    s = e("babel-runtime/core-js/get-iterator")["default"],
                    l = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var u = e("./style_parser"),
                    c = e("../selection"),
                    f = l(c),
                    h = e("../gl/shader_program"),
                    d = l(h),
                    p = e("../gl/vbo_mesh"),
                    m = l(p),
                    g = e("../gl/texture"),
                    v = l(g),
                    _ = e("../material"),
                    y = l(_),
                    b = e("../light"),
                    x = l(b),
                    w = e("../sources/raster"),
                    A = e("../utils/log"),
                    T = l(A),
                    k = e("../utils/thread"),
                    E = l(k),
                    R = e("../utils/worker_broker"),
                    S = l(R),
                    M = "// Fragment shader for feature selection passes\n// Renders in silhouette according to selection (picking) color, or black if none defined\n\n#ifdef TANGRAM_FEATURE_SELECTION\n    varying vec4 v_selection_color;\n#endif\n\nvoid main (void) {\n    #ifdef TANGRAM_FEATURE_SELECTION\n        gl_FragColor = v_selection_color;\n    #else\n        gl_FragColor = vec4(0., 0., 0., 1.);\n    #endif\n}\n",
                    j = "// Uniforms defining raster textures and macros for accessing them\n\n#ifdef TANGRAM_FRAGMENT_SHADER\nuniform sampler2D u_rasters[TANGRAM_NUM_RASTER_SOURCES];    // raster tile texture samplers\nuniform vec2 u_raster_sizes[TANGRAM_NUM_RASTER_SOURCES];    // raster tile texture sizes (width/height in pixels)\nuniform vec3 u_raster_offsets[TANGRAM_NUM_RASTER_SOURCES];  // raster tile texture UV starting offset for tile\n\n// Note: the raster accessors below are #defines rather than functions to\n// avoid issues with constant integer expressions for array indices\n\n// Adjusts UVs in model space to account for raster tile texture overzooming\n// (applies scale and offset adjustments)\n#define adjustRasterUV(raster_index, uv) \\\n    ((uv) * u_raster_offsets[raster_index].z + u_raster_offsets[raster_index].xy)\n\n// Returns the UVs of the current model position for a raster sampler\n#define currentRasterUV(raster_index) \\\n    (adjustRasterUV(raster_index, v_modelpos_base_zoom.xy))\n\n// Returns pixel location in raster tile texture at current model position\n#define currentRasterPixel(raster_index) \\\n    (currentRasterUV(raster_index) * rasterPixelSize(raster_index))\n\n// Samples a raster tile texture for the current model position\n#define sampleRaster(raster_index) \\\n    (texture2D(u_rasters[raster_index], currentRasterUV(raster_index)))\n\n// Samples a raster tile texture for a given pixel\n#define sampleRasterAtPixel(raster_index, pixel) \\\n    (texture2D(u_rasters[raster_index], adjustRasterUV(raster_index, (pixel) / rasterPixelSize(raster_index))))\n\n// Returns size of raster sampler in pixels\n#define rasterPixelSize(raster_index) \\\n    (u_raster_sizes[raster_index])\n\n#endif\n",
                    P = {
                        init: function () {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                t = e.generation,
                                r = e.sources,
                                n = void 0 === r ? {} : r,
                                i = e.introspection;
                            this.isBuiltIn() || (this.built_in = !1), this.generation = t, this.sources = n, this.defines = this.hasOwnProperty("defines") && this.defines || {}, this.shaders = this.hasOwnProperty("shaders") && this.shaders || {}, this.introspection = i || !1, this.selection = this.selection || this.introspection || !1, this.compiling = !1, this.compiled = !1, this.program = null, this.selection_program = null, this.feature_style = {}, this.vertex_template = [], this.tile_data = {}, this.main_thread_target = "Style-" + this.name, E["default"].is_main && S["default"].addTarget(this.main_thread_target, this), this.defines.TANGRAM_WORLD_POSITION_WRAP = 1e5, this.blend = this.blend || "opaque", this.defines["TANGRAM_BLEND_" + this.blend.toUpperCase()] = !0, null == this.blend_order && (this.blend_order = -1), this.material instanceof y["default"] || (y["default"].isValid(this.material) || (this.material = u.StyleParser.defaults.material), this.material = new y["default"](this.material)), this.material.inject(this), x["default"].setMode(this.lighting, this), this.setupRasters(), this.initialized = !0
                        },
                        destroy: function () {
                            this.program && (this.program.destroy(), this.program = null), this.selection_program && (this.selection_program.destroy(), this.selection_program = null), this.gl = null, this.initialized = !1
                        },
                        reset: function () {},
                        isBuiltIn: function () {
                            return this.hasOwnProperty("built_in") && this.built_in
                        },
                        fillVertexTemplate: function (e, t, r) {
                            var n = r.size,
                                i = r.offset;
                            i = void 0 === i ? 0 : i;
                            var o = this.vertex_layout.index[e];
                            if (void 0 === o) return void T["default"]("warn", "Style: in style '" + this.name + "', no index found in vertex layout for attribute '" + e + "'");
                            for (var a = 0; n > a; ++a) {
                                var s = t.length > a ? t[a] : t;
                                this.vertex_template[o + a + i] = s
                            }
                        },
                        startData: function (e) {
                            return this.tile_data[e.key] = {
                                vertex_data: null,
                                uniforms: {},
                                textures: []
                            }, this.tile_data[e.key]
                        },
                        endData: function (e) {
                            var t = this.tile_data[e.key];
                            return this.tile_data[e.key] = null, t && t.vertex_data && t.vertex_data.vertex_count > 0 ? (t.vertex_data.end(), t.vertex_elements = t.vertex_data.element_buffer, t.vertex_data = t.vertex_data.vertex_buffer, this.buildRasterTextures(e, t).then(function () {
                                return t
                            })) : i.resolve(null)
                        },
                        hasDataForTile: function (e) {
                            return null != this.tile_data[e]
                        },
                        addFeature: function (e, t, r) {
                            var n = r.tile;
                            if (n.generation === this.generation) {
                                this.tile_data[n.key] || this.startData(n);
                                var i = this.parseFeature(e, t, r);
                                i && (this.tile_data[n.key].vertex_data || (this.tile_data[n.key].vertex_data = this.vertex_layout.createVertexData()), this.buildGeometry(e.geometry, i, this.tile_data[n.key].vertex_data, r))
                            }
                        },
                        buildGeometry: function (e, t, r, n) {
                            "Polygon" === e.type ? this.buildPolygons([e.coordinates], t, r, n) : "MultiPolygon" === e.type ? this.buildPolygons(e.coordinates, t, r, n) : "LineString" === e.type ? this.buildLines([e.coordinates], t, r, n) : "MultiLineString" === e.type ? this.buildLines(e.coordinates, t, r, n) : "Point" === e.type ? this.buildPoints([e.coordinates], t, r, n) : "MultiPoint" === e.type && this.buildPoints(e.coordinates, t, r, n)
                        },
                        parseFeature: function (e, t, r) {
                            try {
                                var n = this.feature_style;
                                if (t = this.preprocess(t), !t) return;
                                n.order = this.parseOrder(t.order, r);
                                var i = !1;
                                return n.interactive = this.introspection || t.interactive, this.selection && (i = u.StyleParser.evalProp(n.interactive, r)), n.selection_color = i ? f["default"].makeColor(e, r.tile, r) : f["default"].defaultColor, n = this._parseFeature(e, t, r)
                            } catch (o) {
                                T["default"]("error", "Style.parseFeature: style parsing error", e, n, o)
                            }
                        },
                        _parseFeature: function () {
                            return this.feature_style
                        },
                        preprocess: function (e) {
                            if (!e.preprocessed) {
                                if (e = this._preprocess(e), !e) return;
                                e.preprocessed = !0
                            }
                            return e
                        },
                        _preprocess: function (e) {
                            return e
                        },
                        parseOrder: function (e, t) {
                            return "number" != typeof e ? u.StyleParser.calculateOrder(e, t) : e
                        },
                        scaleOrder: function (e) {
                            return 2 * e
                        },
                        parseColor: function (e, t) {
                            return e ? u.StyleParser.cacheColor(e, t) : this.shaders.blocks.color || this.shaders.blocks.filter ? u.StyleParser.defaults.color : void 0
                        },
                        buildPolygons: function () {},
                        buildLines: function () {},
                        buildPoints: function () {},
                        setGL: function (e) {
                            this.gl = e, this.max_texture_size = v["default"].getMaxTextureSize(this.gl)
                        },
                        makeMesh: function (e, t) {
                            var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                                n = r.uniforms;
                            return new m["default"](this.gl, e, t, this.vertex_layout, {
                                uniforms: n
                            })
                        },
                        render: function (e) {
                            e.render()
                        },
                        compile: function () {
                            if (!this.gl) throw new Error("style.compile(): skipping for " + this.name + " because no GL context");
                            if (this.compiling) throw new Error("style.compile(): skipping for " + this.name + " because style is already compiling");
                            this.compiling = !0, this.compiled = !1;
                            var e = this.buildDefineList();
                            if (this.selection) {
                                var t = o({}, e);
                                t.TANGRAM_FEATURE_SELECTION = !0
                            }
                            var r = this.shaders && this.shaders.blocks,
                                n = this.shaders && this.shaders.block_scopes,
                                i = o({}, this.shaders && this.shaders.uniforms),
                                a = this.shaders && this.shaders.extensions;
                            "string" == typeof a && (a = [a]);
                            try {
                                this.program = new d["default"](this.gl, this.vertex_shader_src, this.fragment_shader_src, {
                                    name: this.name,
                                    defines: e,
                                    uniforms: i,
                                    blocks: r,
                                    block_scopes: n,
                                    extensions: a
                                }), this.program.compile(), this.selection ? (this.selection_program = new d["default"](this.gl, this.vertex_shader_src, M, {
                                    name: this.name + " (selection)",
                                    defines: t,
                                    uniforms: i,
                                    blocks: r,
                                    block_scopes: n,
                                    extensions: a
                                }), this.selection_program.compile()) : this.selection_program = null
                            } catch (s) {
                                throw this.compiling = !1, this.compiled = !1, new Error("style.compile(): style " + this.name + " error:", s)
                            }
                            this.compiling = !1, this.compiled = !0
                        },
                        addShaderBlock: function (e, t) {
                            var r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
                            this.shaders.blocks = this.shaders.blocks || {}, this.shaders.blocks[e] = this.shaders.blocks[e] || [], this.shaders.blocks[e].push(t), this.shaders.block_scopes = this.shaders.block_scopes || {}, this.shaders.block_scopes[e] = this.shaders.block_scopes[e] || [], this.shaders.block_scopes[e].push(r)
                        },
                        removeShaderBlock: function (e) {
                            this.shaders.blocks && (this.shaders.blocks[e] = null)
                        },
                        replaceShaderBlock: function (e, t) {
                            var r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
                            this.removeShaderBlock(e), this.addShaderBlock(e, t, r)
                        },
                        buildDefineList: function () {
                            var e = {};
                            if (null != this.defines)
                                for (var t in this.defines) e[t] = this.defines[t];
                            if (null != this.shaders && null != this.shaders.defines)
                                for (t in this.shaders.defines) e[t] = this.shaders.defines[t];
                            return e
                        },
                        hasRasters: function () {
                            return ["color", "normal", "custom"].indexOf(this.raster) > -1
                        },
                        setupRasters: function () {
                            var e = this;
                            if (this.hasRasters()) {
                                "color" === this.raster ? this.defines.TANGRAM_RASTER_TEXTURE_COLOR = !0 : "normal" === this.raster && (this.defines.TANGRAM_RASTER_TEXTURE_NORMAL = !0);
                                var t = a(this.sources).filter(function (t) {
                                    return e.sources[t] instanceof w.RasterTileSource
                                }).length;
                                this.defines.TANGRAM_NUM_RASTER_SOURCES = "int(" + t + ")", t > 0 && (this.defines.TANGRAM_MODEL_POSITION_BASE_ZOOM_VARYING = !0, this.replaceShaderBlock("raster", j, "Raster"))
                            }
                        },
                        buildRasterTextures: function (e, t) {
                            var r = this;
                            if (!this.hasRasters()) return i.resolve(t);
                            var o = {},
                                l = {};
                            return e.rasters.map(function (e) {
                                return r.sources[e]
                            }).filter(function (e) {
                                return e
                            }).forEach(function (t, r) {
                                if (t instanceof w.RasterTileSource) {
                                    var n = t.tileTexture(e);
                                    o[n.url] = n, l[n.url] = r
                                }
                            }), 0 === a(o).length ? i.resolve(t) : S["default"].postMessage(this.main_thread_target + ".loadTextures", o).then(function (r) {
                                if (!r || r.length < 1) return t;
                                t.uniforms = t.uniforms || {}, t.textures = t.textures || [];
                                var i = t.uniforms.u_rasters = [],
                                    a = t.uniforms.u_raster_sizes = [],
                                    u = t.uniforms.u_raster_offsets = [],
                                    c = !0,
                                    f = !1,
                                    h = void 0;
                                try {
                                    for (var d, p = s(r); !(c = (d = p.next()).done); c = !0) {
                                        var m = n(d.value, 3),
                                            g = m[0],
                                            v = m[1],
                                            _ = m[2],
                                            y = l[g],
                                            b = o[g].coords;
                                        if (i[y] = g, t.textures.push(g), a[y] = [v, _], e.coords.z > b.z) {
                                            var x = e.coords.z - b.z,
                                                w = Math.pow(2, x);
                                            u[y] = [e.coords.x % w / w, (w - 1 - e.coords.y % w) / w, 1 / w]
                                        } else u[y] = [0, 0, 1]
                                    }
                                } catch (A) {
                                    f = !0, h = A
                                } finally {
                                    try {
                                        !c && p["return"] && p["return"]()
                                    } finally {
                                        if (f) throw h
                                    }
                                }
                                return t
                            })
                        },
                        loadTextures: function (e) {
                            return v["default"].createFromObject(this.gl, e).then(function () {
                                return i.all(a(e).map(function (e) {
                                    return v["default"].textures[e] && v["default"].textures[e].load()
                                }).filter(function (e) {
                                    return e
                                }))
                            }).then(function (e) {
                                return e.forEach(function (e) {
                                    return e.retain()
                                }), e.map(function (e) {
                                    return [e.name, e.width, e.height]
                                })
                            })
                        },
                        setup: function () {
                            this.setUniforms(), this.material.setupProgram(d["default"].current)
                        },
                        setUniforms: function () {
                            var e = d["default"].current;
                            e && e.setUniforms(this.shaders && this.shaders.uniforms, !0)
                        },
                        render_states: {
                            opaque: {
                                depth_test: !0,
                                depth_write: !0
                            },
                            add: {
                                depth_test: !0,
                                depth_write: !1
                            },
                            multiply: {
                                depth_test: !0,
                                depth_write: !1
                            },
                            inlay: {
                                depth_test: !0,
                                depth_write: !1
                            },
                            overlay: {
                                depth_test: !1,
                                depth_write: !1
                            }
                        },
                        default_blend_orders: {
                            opaque: 0,
                            add: 1,
                            multiply: 2,
                            inlay: 3,
                            overlay: 4
                        },
                        blendOrderSort: function (e, t) {
                            return "opaque" === e.blend || "opaque" === t.blend ? "opaque" === e.blend && "opaque" === t.blend ? e.name < t.name ? -1 : 1 : "opaque" === e.blend ? -1 : 1 : e.blend_order < t.blend_order ? -1 : e.blend_order > t.blend_order ? 1 : P.default_blend_orders[e.blend] < P.default_blend_orders[t.blend] ? -1 : P.default_blend_orders[e.blend] > P.default_blend_orders[t.blend] ? 1 : e.name < t.name ? -1 : 1
                        },
                        update: function () {}
                    };
                r.Style = P
            }, {
                "../gl/shader_program": 207,
                "../gl/texture": 208,
                "../gl/vbo_mesh": 210,
                "../light": 220,
                "../material": 221,
                "../selection": 226,
                "../sources/raster": 230,
                "../utils/log": 251,
                "../utils/thread": 255,
                "../utils/worker_broker": 258,
                "./style_parser": 241,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24
            }],
            240: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/to-consumable-array")["default"],
                    i = e("babel-runtime/helpers/sliced-to-array")["default"],
                    o = e("babel-runtime/core-js/object/keys")["default"],
                    a = e("babel-runtime/core-js/get-iterator")["default"],
                    s = e("babel-runtime/core-js/object/assign")["default"],
                    l = e("babel-runtime/core-js/object/define-property")["default"],
                    u = e("babel-runtime/core-js/object/create")["default"],
                    c = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var f = e("../utils/utils"),
                    h = c(f),
                    d = e("../gl/shader_program"),
                    p = c(d),
                    m = e("./style"),
                    g = e("../utils/merge"),
                    v = c(g),
                    _ = e("../geo"),
                    y = c(_),
                    b = e("../utils/log"),
                    x = c(b),
                    w = "#ifdef TANGRAM_VERTEX_SHADER\n\n// Vertex position in model space: [0, 1] range over the local tile\n// Note positions can be outside that range due to unclipped geometry, geometry higher than a unit cube, etc.\nvec4 modelPosition() {\n    return\n        vec4(\n            a_position.xyz / TANGRAM_TILE_SCALE         // scale coords to ~0-1 range\n            * exp2(u_tile_origin.z - u_tile_origin.w),  // adjust for tile overzooming\n        1.)\n        + vec4(0., 1., 0., 0.);\n        // NB: additional offset to account for unusual Tangram JS y coords,\n        // should be refactored to remove\n}\n\n// Position in model space as above, but according to tile coordinate (as opposed to style) zoom\n// e.g. unadjusted for tile overzooming\nvec4 modelPositionBaseZoom() {\n    return\n        vec4(\n            a_position.xyz / TANGRAM_TILE_SCALE,    // scale coords to ~0-1 range\n        1.)\n        + vec4(0., 1., 0., 0.); // see note on offset above\n}\n\n#endif\n\n// Vertex position in world coordinates, useful for 3d procedural textures, etc.\nvec4 worldPosition() {\n    return v_world_position;\n}\n\n// Optionally wrap world coordinates (allows more precision at higher zooms)\n// e.g. at wrap 1000, the world space will wrap every 1000 meters\n#ifdef TANGRAM_VERTEX_SHADER\n\nvec4 wrapWorldPosition(vec4 world_position) {\n    #if defined(TANGRAM_WORLD_POSITION_WRAP)\n    vec2 anchor = u_tile_origin.xy - mod(u_tile_origin.xy, TANGRAM_WORLD_POSITION_WRAP);\n        world_position.xy -= anchor;\n    #endif\n    return world_position;\n}\n\n#endif\n\n// Normal in world space\n#if defined(TANGRAM_VERTEX_SHADER)\n\nvec3 worldNormal() {\n    return TANGRAM_NORMAL;\n}\n\n#elif defined(TANGRAM_FRAGMENT_SHADER)\n\nvec3 worldNormal() {\n    return u_inverseNormalMatrix * TANGRAM_NORMAL;\n}\n\n#endif\n",
                    A = "// Apply layer ordering to avoid z-fighting\nvoid applyLayerOrder (float layer, inout vec4 position) {\n    position.z -= layer * TANGRAM_LAYER_DELTA * position.w;\n}\n",
                    T = "// Vertex attribute + varying for feature selection\n#if defined(TANGRAM_FEATURE_SELECTION) && defined(TANGRAM_VERTEX_SHADER)\n    attribute vec4 a_selection_color;\n    varying vec4 v_selection_color;\n#endif\n",
                    k = "// Selection pass-specific rendering\n#if defined(TANGRAM_FEATURE_SELECTION) && defined(TANGRAM_VERTEX_SHADER)\n    if (a_selection_color.rgb == vec3(0.)) {\n        // Discard by forcing invalid triangle if we're in the feature\n        // selection pass but have no selection info\n        // TODO: in some cases we may actually want non-selectable features to occlude selectable ones?\n        gl_Position = vec4(0., 0., 0., 1.);\n        return;\n    }\n    v_selection_color = a_selection_color;\n#endif\n",
                    E = {};
                r.StyleManager = E;
                var R = {};
                r.Styles = R;
                var S = {};
                r.BaseStyles = S, E.styles = R, E.baseStyle = m.Style, E.init = function () {
                    p["default"].removeBlock("global"), p["default"].removeBlock("setup"), p["default"].addBlock("global", w), p["default"].addBlock("global", A), p["default"].addBlock("global", T), p["default"].replaceBlock("setup", k), p["default"].defines.TANGRAM_EPSILON = 1e-5, p["default"].defines.TANGRAM_LAYER_DELTA = 1 / 16384, p["default"].defines.TANGRAM_TILE_SCALE = "vec3(" + y["default"].tile_scale + "., " + y["default"].tile_scale + "., u_meters_per_pixel * " + y["default"].tile_size + ".)", p["default"].defines.TANGRAM_HEIGHT_SCALE = y["default"].height_scale
                }, E.destroy = function (e) {
                    o(R).forEach(function (t) {
                        var r = R[t];
                        r.gl === e && (x["default"]("trace", "StyleManager.destroy: destroying render style " + r.name), r.isBuiltIn() || E.remove(r.name), r.destroy())
                    })
                }, E.register = function (e) {
                    R[e.name] = e, S[e.name] = e
                }, E.remove = function (e) {
                    delete R[e]
                }, E.mix = function (e, t) {
                    if (e.mixed) return e;
                    e.mixed = {};
                    var r = [];
                    if (e.mix) {
                        if (Array.isArray(e.mix)) {
                            var i;
                            (i = r).push.apply(i, n(e.mix))
                        } else r.push(e.mix);
                        r = r.map(function (e) {
                            return t[e]
                        }).filter(function (t) {
                            return t && t !== e
                        });
                        var o = !0,
                            l = !1,
                            u = void 0;
                        try {
                            for (var c, f = a(r); !(o = (c = f.next()).done); o = !0) {
                                var h = c.value;
                                e.mixed[h.name] = !0
                            }
                        } catch (d) {
                            l = !0, u = d
                        } finally {
                            try {
                                !o && f["return"] && f["return"]()
                            } finally {
                                if (l) throw u
                            }
                        }
                    }
                    return r.push(e), e.animated = r.some(function (e) {
                        return e && e.animated
                    }), e.texcoords = r.some(function (e) {
                        return e && e.texcoords
                    }), e.base = r.map(function (e) {
                        return e.base
                    }).filter(function (e) {
                        return e
                    }).pop(), e.lighting = r.map(function (e) {
                        return e.lighting
                    }).filter(function (e) {
                        return null != e
                    }).pop(), e.texture = r.map(function (e) {
                        return e.texture
                    }).filter(function (e) {
                        return e
                    }).pop(), e.raster = r.map(function (e) {
                        return e.raster
                    }).filter(function (e) {
                        return null != e
                    }).pop(), e.dash = r.map(function (e) {
                        return e.dash
                    }).filter(function (e) {
                        return null != e
                    }).pop(), e.dash_background_color = r.map(function (e) {
                        return e.dash_background_color
                    }).filter(function (e) {
                        return null != e
                    }).pop(), r.some(function (e) {
                        return e.hasOwnProperty("blend") && e.blend
                    }) && (e.blend = r.map(function (e) {
                        return e.hasOwnProperty("blend") && e.blend
                    }).filter(function (e) {
                        return e
                    }).pop()), e.blend_order = r.map(function (e) {
                        return e.blend_order
                    }).filter(function (e) {
                        return null != e
                    }).pop(), e.defines = s.apply(Object, [{}].concat(n(r.map(function (e) {
                        return e.defines
                    }).filter(function (e) {
                        return e
                    })))), e.material = s.apply(Object, [{}].concat(n(r.map(function (e) {
                        return e.material
                    }).filter(function (e) {
                        return e
                    })))), E.mixShaders(e, t, r), e
                }, E.mixShaders = function (e, t, r) {
                    var u = {},
                        c = r.map(function (e) {
                            return e.shaders
                        }).filter(function (e) {
                            return e
                        });
                    if (u.defines = s.apply(Object, [{}].concat(n(c.map(function (e) {
                            return e.defines
                        }).filter(function (e) {
                            return e
                        })))), u.uniforms = {}, u._uniforms = e.shaders && e.shaders.uniforms || {}, u._uniform_scopes = {}, r.filter(function (e) {
                            return e.shaders && e.shaders.uniforms
                        }).forEach(function (e) {
                            var r = function (r) {
                                u._uniform_scopes[r] = e.name, l(u.uniforms, r, {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function () {
                                        return void 0 !== u._uniforms[r] ? u._uniforms[r] : t[u._uniform_scopes[r]].shaders.uniforms !== u.uniforms ? t[u._uniform_scopes[r]].shaders.uniforms[r] : void 0
                                    },
                                    set: function (e) {
                                        u._uniforms[r] = e
                                    }
                                })
                            };
                            for (var n in e.shaders.uniforms) r(n)
                        }), u.extensions = o(c.map(function (e) {
                            return e.extensions
                        }).filter(function (e) {
                            return e
                        }).reduce(function (e, t) {
                            return "string" == typeof t ? e[t] = !0 : t.forEach(function (t) {
                                return e[t] = !0
                            }), e
                        }, {}) || {}), e.shaders && e.shaders.blocks) {
                        e.shaders.block_scopes = e.shaders.block_scopes || {};
                        var f = !0,
                            d = !1,
                            p = void 0;
                        try {
                            for (var m, g = a(h["default"].entries(e.shaders.blocks)); !(f = (m = g.next()).done); f = !0) {
                                var v = i(m.value, 2),
                                    _ = v[0],
                                    y = v[1];
                                if (e.shaders.block_scopes[_] = e.shaders.block_scopes[_] || [], Array.isArray(y)) {
                                    var b;
                                    (b = e.shaders.block_scopes[_]).push.apply(b, n(y.map(function () {
                                        return e.name
                                    })))
                                } else e.shaders.block_scopes[_].push(e.name)
                            }
                        } catch (x) {
                            d = !0, p = x
                        } finally {
                            try {
                                !f && g["return"] && g["return"]()
                            } finally {
                                if (d) throw p
                            }
                        }
                    }
                    var w = {},
                        A = !0,
                        T = !1,
                        k = void 0;
                    try {
                        for (var E, R = a(c); !(A = (E = R.next()).done); A = !0) {
                            var S = E.value;
                            if (S.blocks) {
                                u.blocks = u.blocks || {}, u.block_scopes = u.block_scopes || {};
                                var M = {},
                                    j = !0,
                                    P = !1,
                                    N = void 0;
                                try {
                                    for (var z, L = a(h["default"].entries(S.blocks)); !(j = (z = L.next()).done); j = !0) {
                                        var O = i(z.value, 2),
                                            I = O[0],
                                            y = O[1],
                                            U = S.block_scopes[I];
                                        u.blocks[I] = u.blocks[I] || [], u.block_scopes[I] = u.block_scopes[I] || [], y = Array.isArray(y) ? y : [y], U = Array.isArray(U) ? U : [U];
                                        for (var F = 0; F < y.length; F++) w[U[F]] || (M[U[F]] = !0, u.blocks[I].push(y[F]), u.block_scopes[I].push(U[F]))
                                    }
                                } catch (x) {
                                    P = !0, N = x
                                } finally {
                                    try {
                                        !j && L["return"] && L["return"]()
                                    } finally {
                                        if (P) throw N
                                    }
                                }
                                s(w, M)
                            }
                        }
                    } catch (x) {
                        T = !0, k = x
                    } finally {
                        try {
                            !A && R["return"] && R["return"]()
                        } finally {
                            if (T) throw k
                        }
                    }
                    return s(e.mixed, w), e.shaders = u, e
                }, E.create = function (e, t) {
                    var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        n = v["default"]({}, t);
                    return n.name = e, n = E.mix(n, r), n.base && S[n.base] && (R[e] = n = s(u(S[n.base]), n)), n
                }, E.build = function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = o(e).sort(function (t, r) {
                            return E.inheritanceDepth(t, e) - E.inheritanceDepth(r, e)
                        });
                    for (var n in R) S[n] ? R[n].reset() : delete R[n];
                    var i = {},
                        s = !0,
                        l = !1,
                        u = void 0;
                    try {
                        for (var c, f = a(r); !(s = (c = f.next()).done); s = !0) {
                            var n = c.value;
                            i[n] = E.create(n, e[n], i)
                        }
                    } catch (h) {
                        l = !0, u = h
                    } finally {
                        try {
                            !s && f["return"] && f["return"]()
                        } finally {
                            if (l) throw u
                        }
                    }
                    return E.initStyles(t), R
                }, E.initStyles = function (e) {
                    for (var t in R) R[t].init(e)
                }, E.inheritanceDepth = function (e, t) {
                    for (var r = 0;;) {
                        var i = t[e];
                        if (!i) break;
                        if (!i.mix) break;
                        if (r++, Array.isArray(i.mix)) {
                            r += Math.max.apply(Math, n(i.mix.map(function (r) {
                                return e !== r ? E.inheritanceDepth(r, t) : void 0
                            })));
                            break
                        }
                        if (e === i.mix) break;
                        e = i.mix
                    }
                    return r
                }, E.compile = function (e, t) {
                    e = e || o(R);
                    var r = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var s, l = a(e); !(r = (s = l.next()).done); r = !0) {
                            var u = s.value,
                                c = R[u];
                            try {
                                c.compile(), x["default"]("trace", "StyleManager.compile(): compiled style " + u)
                            } catch (f) {
                                x["default"]("error", "StyleManager.compile(): error compiling style " + u + ":", f), t.trigger("warning", {
                                    type: "styles",
                                    message: "Error compiling style " + u,
                                    style: c,
                                    shader_errors: c.program && c.program.shader_errors
                                })
                            }
                        }
                    } catch (h) {
                        n = !0, i = h
                    } finally {
                        try {
                            !r && l["return"] && l["return"]()
                        } finally {
                            if (n) throw i
                        }
                    }
                    x["default"]("debug", "StyleManager.compile(): compiled all styles")
                }, E.stylesForTile = function (e) {
                    var t = [];
                    for (var r in R) R[r].hasDataForTile(e) && t.push(r);
                    return t
                }
            }, {
                "../geo": 201,
                "../gl/shader_program": 207,
                "../utils/log": 251,
                "../utils/merge": 252,
                "../utils/utils": 256,
                "./style": 239,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/create": 7,
                "babel-runtime/core-js/object/define-property": 9,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            241: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/freeze")["default"],
                    i = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o = e("../utils/utils"),
                    a = i(o),
                    s = e("../geo"),
                    l = i(s),
                    u = e("csscolorparser"),
                    c = i(u),
                    f = {};
                r.StyleParser = f, f.wrapFunction = function (e) {
                    var t = "function(context) {\n                var feature = context.feature.properties;\n                var global = context.global;\n                var $zoom = context.zoom;\n                var $layer = context.layer;\n                var $geometry = context.geometry;\n                var $meters_per_pixel = context.meters_per_pixel;\n\n                var val = (" + e + "());\n\n                if (typeof val === 'number' && isNaN(val)) {\n                    val = null; // convert NaNs to nulls\n                }\n\n                return val;\n            }";
                    return t
                }, f.zeroPair = n([0, 0]), f.defaults = {
                    color: [1, 1, 1, 1],
                    width: 1,
                    size: 1,
                    extrude: !1,
                    height: 20,
                    min_height: 0,
                    order: 0,
                    z: 0,
                    material: {
                        ambient: 1,
                        diffuse: 1
                    }
                }, f.macros = {
                    "Style.color.pseudoRandomColor": function () {
                        return [.7 * (parseInt(feature.id, 16) / 100 % 1), .7 * (parseInt(feature.id, 16) / 1e4 % 1), .7 * (parseInt(feature.id, 16) / 1e6 % 1), 1]
                    },
                    "Style.color.randomColor": function () {
                        return [.7 * Math.random(), .7 * Math.random(), .7 * Math.random(), 1]
                    }
                }, f.getFeatureParseContext = function (e, t, r) {
                    return {
                        feature: e,
                        tile: t,
                        global: r,
                        zoom: t.style_zoom,
                        geometry: l["default"].geometryType(e.geometry.type),
                        meters_per_pixel: t.meters_per_pixel,
                        units_per_meter_overzoom: t.units_per_meter_overzoom
                    }
                }, f.cacheObject = function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if (null != e) {
                        if (e.value) return {
                            value: e.value,
                            zoom: e.zoom ? {} : null
                        };
                        var r = {
                            value: e
                        };
                        return "function" == typeof t && (Array.isArray(r.value) && Array.isArray(r.value[0]) ? (r.value = r.value.map(function (e) {
                            return [e[0], t(e[1])]
                        }), r.zoom = {}) : "function" != typeof r.value && (r.value = t(r.value))), r
                    }
                }, f.colorCacheObject = function (e) {
                    return f.cacheObject(e, function (e) {
                        return "Style.color.pseudoRandomColor" === e ? a["default"].stringToFunction(f.wrapFunction(f.macros["Style.color.pseudoRandomColor"])) : "Style.color.randomColor" === e ? f.macros["Style.color.randomColor"] : e
                    })
                }, f.cacheProperty = function (e, t) {
                    if (null != e) {
                        if (e.dynamic) {
                            var r = e.dynamic(t);
                            return r
                        }
                        if (e["static"]) return e["static"];
                        if (e.zoom && e.zoom[t.zoom]) return e.zoom[t.zoom];
                        if ("function" == typeof e.value) {
                            e.dynamic = e.value;
                            var r = e.dynamic(t);
                            return r
                        }
                        return Array.isArray(e.value) && Array.isArray(e.value[0]) ? (e.zoom = e.zoom || {}, e.zoom = {}, e.zoom[t.zoom] = a["default"].interpolate(t.zoom, e.value), e.zoom[t.zoom]) : (e["static"] = e.value, e["static"])
                    }
                }, f.convertUnits = function (e, t) {
                    if (null != e.val) return "px" === e.units ? e.val * l["default"].metersPerPixel(t.zoom) : e.val;
                    if ("string" == typeof e) {
                        var r = e.match(/([0-9.-]+)([a-z]+)/);
                        r && 3 === r.length && (e = parseFloat(r[1]), r = r[2]), "px" === r && (e *= l["default"].metersPerPixel(t.zoom))
                    } else if (Array.isArray(e)) return e.map(Array.isArray(e[0]) ? function (e) {
                        return [e[0], f.convertUnits(e[1], t)]
                    } : function (e) {
                        return f.convertUnits(e, t)
                    });
                    return e
                }, f.cacheUnits = function (e) {
                    var t = {
                        val: parseFloat(e)
                    };
                    return 0 !== t.val && "string" == typeof e && "px" === e.trim().slice(-2) && (t.units = "px"), t
                }, f.cacheDistance = function (e, t) {
                    if (e.dynamic) {
                        var r = e.dynamic(t);
                        return r
                    }
                    if (e.zoom && e.zoom[t.zoom]) return e.zoom[t.zoom];
                    if ("function" == typeof e.value) {
                        e.dynamic = e.value;
                        var r = e.dynamic(t);
                        return r
                    }
                    return e.zoom ? (e.zoom[t.zoom] = a["default"].interpolate(t.zoom, e.value, function (e) {
                        return f.convertUnits(e, t)
                    }), e.zoom[t.zoom]) : f.convertUnits(e.value, t)
                }, f.string_colors = {}, f.colorForString = function (e) {
                    if (f.string_colors[e]) return f.string_colors[e];
                    var t = c["default"].parseCSSColor(e);
                    return t && 4 === t.length ? (t[0] /= 255, t[1] /= 255, t[2] /= 255) : t = f.defaults.color, f.string_colors[e] = t, t
                }, f.cacheColor = function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if (e.dynamic) {
                        var r = e.dynamic(t);
                        return "string" == typeof r && (r = f.colorForString(r)), r && null == r[3] && (r[3] = 1), r
                    }
                    if (e["static"]) return e["static"];
                    if (e.zoom && e.zoom[t.zoom]) return e.zoom[t.zoom];
                    if ("function" == typeof e.value) {
                        e.dynamic = e.value;
                        var r = e.dynamic(t);
                        return "string" == typeof r && (r = f.colorForString(r)), r && null == r[3] && (r[3] = 1), r
                    }
                    if ("string" == typeof e.value) return e["static"] = f.colorForString(e.value), e["static"];
                    if (e.zoom) {
                        if (!e.zoom_preprocessed) {
                            for (var n = 0; n < e.value.length; n++) {
                                var r = e.value[n];
                                r && "string" == typeof r[1] && (r[1] = f.colorForString(r[1]))
                            }
                            e.zoom_preprocessed = !0
                        }
                        return e.zoom[t.zoom] = a["default"].interpolate(t.zoom, e.value), e.zoom[t.zoom][3] = e.zoom[t.zoom][3] || 1, e.zoom[t.zoom]
                    }
                    return e["static"] = e.value, e["static"] && null == e["static"][3] && (e["static"][3] = 1), e["static"]
                }, f.parseColor = function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if ("function" == typeof e && (e = e(t)), "string" == typeof e) e = f.colorForString(e);
                    else if (Array.isArray(e) && Array.isArray(e[0])) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            "string" == typeof n[1] && (n[1] = f.colorForString(n[1]))
                        }
                        t.zoom && (e = a["default"].interpolate(t.zoom, e))
                    }
                    return e ? null == e[3] && (e[3] = 1) : e = [0, 0, 0, 1], e
                }, f.calculateOrder = function (e, t) {
                    return "function" == typeof e ? e = e(t) : "string" == typeof e && (e = t.feature.properties[e] ? t.feature.properties[e] : parseFloat(e)), e
                }, f.evalProp = function (e, t) {
                    return "function" == typeof e ? e(t) : e
                }
            }, {
                "../geo": 201,
                "../utils/utils": 256,
                "babel-runtime/core-js/object/freeze": 10,
                "babel-runtime/helpers/interop-require-default": 23,
                csscolorparser: 134
            }],
            242: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/sliced-to-array")["default"],
                    a = e("babel-runtime/core-js/object/assign")["default"],
                    s = e("babel-runtime/core-js/promise")["default"],
                    l = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var u = e("../../utils/log"),
                    c = l(u),
                    f = e("../../utils/utils"),
                    h = l(f),
                    d = e("../../gl/texture"),
                    p = l(d),
                    m = e("fontfaceobserver"),
                    g = l(m),
                    v = function () {
                        function e() {
                            i(this, e), this.canvas = document.createElement("canvas"), this.canvas.style.backgroundColor = "transparent", this.context = this.canvas.getContext("2d")
                        }
                        return n(e, [{
                            key: "resize",
                            value: function (e, t) {
                                this.canvas.width = e, this.canvas.height = t, this.context.clearRect(0, 0, e, t)
                            }
                        }, {
                            key: "setFont",
                            value: function (e) {
                                var t = e.font_css,
                                    r = e.fill,
                                    n = e.stroke,
                                    i = e.stroke_width,
                                    o = e.px_size;
                                this.px_size = o, this.text_buffer = 8;
                                var a = this.context;
                                a.font = t, n ? (a.strokeStyle = n, a.lineWidth = i) : (a.strokeStyle = null, a.lineWidth = 0), a.fillStyle = r, a.miterLimit = 2
                            }
                        }, {
                            key: "textSizes",
                            value: function (t) {
                                var r = this;
                                return e.fonts_loaded.then(function () {
                                    for (var n in t) {
                                        var i = t[n],
                                            o = !0;
                                        for (var a in i) {
                                            if (e.text_cache[n] && e.text_cache[n][a]) e.cache_stats.hits++;
                                            else {
                                                var s = i[a].text_settings;
                                                o && (r.setFont(s), o = !1), e.text_cache[n] = e.text_cache[n] || {}, e.text_cache[n][a] = r.textSize(a, s.transform, s.text_wrap), e.cache_stats.misses++
                                            }
                                            i[a].size = e.text_cache[n][a].size
                                        }
                                    }
                                    return t
                                })
                            }
                        }, {
                            key: "textSize",
                            value: function (e, t, r) {
                                function n(e) {
                                    d.text = d.text.trim(), d.text.length > 0 && (d.width = o.measureText(d.text).width, m = Math.max(m, Math.ceil(d.width)), p.push(d)), e && (d = a({}, f))
                                }
                                var i = this.applyTextTransform(e, t),
                                    o = this.context,
                                    s = this.text_buffer * h["default"].device_pixel_ratio,
                                    l = 2 * h["default"].device_pixel_ratio,
                                    u = this.px_size + l,
                                    c = void 0;
                                c = "number" == typeof r ? i.split(" ") : [i];
                                for (var f = {
                                        width: 0,
                                        chars: 0,
                                        text: ""
                                    }, d = a({}, f), p = [], m = 0, g = 0; g < c.length; g++)
                                    for (var v = c[g].split("\n"), _ = 0; _ < v.length; _++) {
                                        var y = v[_];
                                        d.chars + y.length > r && d.chars > 0 && n(!0), d.chars += y.length + 1, d.text += y + " ", v.length > 1 && _ < v.length - 1 && n(!0)
                                    }
                                n(!1);
                                var b = p.length * u,
                                    x = [m / h["default"].device_pixel_ratio, b / h["default"].device_pixel_ratio],
                                    w = [m + 2 * s, b + 2 * s],
                                    A = w.map(function (e) {
                                        return e / h["default"].device_pixel_ratio
                                    });
                                return {
                                    lines: p,
                                    size: {
                                        collision_size: x,
                                        texture_size: w,
                                        logical_size: A,
                                        line_height: u
                                    }
                                }
                            }
                        }, {
                            key: "drawText",
                            value: function (e, t, r, n) {
                                var i = o(t, 2),
                                    a = i[0],
                                    s = i[1],
                                    l = n.stroke,
                                    u = n.transform,
                                    c = n.align;
                                c = c || "center";
                                for (var f = 0; f < e.length; f++) {
                                    var d = e[f],
                                        p = this.applyTextTransform(d.text, u),
                                        m = this.text_buffer * h["default"].device_pixel_ratio,
                                        g = r.texture_size,
                                        v = r.line_height,
                                        _ = void 0;
                                    "left" === c ? _ = a + m : "center" === c ? _ = a + g[0] / 2 - d.width / 2 : "right" === c && (_ = a + g[0] - d.width - m);
                                    var y = s + .75 * m + (f + 1) * v;
                                    l && this.context.strokeText(p, _, y), this.context.fillText(p, _, y)
                                }
                            }
                        }, {
                            key: "rasterize",
                            value: function (t, r) {
                                for (var n in t) {
                                    var i = t[n],
                                        o = !0;
                                    for (var a in i) {
                                        var s = i[a],
                                            l = s.text_settings,
                                            u = e.text_cache[n][a].lines;
                                        o && (this.setFont(l), o = !1), this.drawText(u, s.position, s.size, {
                                            stroke: l.stroke,
                                            transform: l.transform,
                                            align: l.align
                                        }), s.texcoords = p["default"].getTexcoordsForSprite(s.position, s.size.texture_size, r)
                                    }
                                }
                            }
                        }, {
                            key: "setTextureTextPositions",
                            value: function (e, t) {
                                var r = 0;
                                for (var n in e) {
                                    var i = e[n];
                                    for (var o in i) {
                                        var a = i[o].size.texture_size;
                                        a[0] > r && (r = a[0])
                                    }
                                }
                                var s = 0,
                                    l = 0,
                                    u = 0;
                                for (var n in e) {
                                    var i = e[n];
                                    for (var o in i) {
                                        var c = i[o],
                                            a = c.size.texture_size;
                                        l + a[1] < t ? (c.position = [s, l], l += a[1], l > u && (u = l)) : (s += r, l = 0, c.position = [s, l])
                                    }
                                }
                                return [s + r, u]
                            }
                        }, {
                            key: "applyTextTransform",
                            value: function (e, t) {
                                return "capitalize" === t ? e.replace(/\w\S*/g, function (e) {
                                    return e.charAt(0).toUpperCase() + e.substr(1)
                                }) : "uppercase" === t ? e.toUpperCase() : "lowercase" === t ? e.toLowerCase() : e
                            }
                        }], [{
                            key: "fontPixelSize",
                            value: function (t) {
                                if (null != t) {
                                    t = "string" == typeof t ? t : String(t);
                                    var r = t.match(e.font_size_re) || [],
                                        n = o(r, 3),
                                        i = n[1],
                                        a = n[2];
                                    return a = a || "px", "em" === a ? i *= 16 : "pt" === a ? i /= .75 : "%" === a && (i /= 6.25), i = parseFloat(i), i *= h["default"].device_pixel_ratio
                                }
                            }
                        }, {
                            key: "loadFonts",
                            value: function (t) {
                                var r = this,
                                    n = [],
                                    i = function (e) {
                                        Array.isArray(t[e]) ? t[e].forEach(function (t) {
                                            return n.push(r.loadFontFace(e, t))
                                        }) : n.push(r.loadFontFace(e, t[e]))
                                    };
                                for (var o in t) i(o);
                                return e.fonts_loaded = s.all(n.filter(function (e) {
                                    return e
                                })), e.fonts_loaded
                            }
                        }, {
                            key: "loadFontFace",
                            value: function (e, t) {
                                if (null != t && ("object" == typeof t || "external" === t)) {
                                    var r = {
                                        family: e
                                    };
                                    return "object" == typeof t && (a(r, t), "string" == typeof t.url && this.injectFontFace(r)), new g["default"](e, r).load().then(function () {
                                        c["default"]("debug", "Font face '" + e + "' is available", r)
                                    }, function () {
                                        c["default"]("debug", "Font face '" + e + "' is NOT available", r)
                                    })
                                }
                            }
                        }, {
                            key: "injectFontFace",
                            value: function (e) {
                                var t = e.family,
                                    r = e.url,
                                    n = e.weight,
                                    i = e.style,
                                    o = "\n            @font-face {\n                font-family: '" + t + "';\n                font-weight: " + (n || "normal") + ";\n                font-style: " + (i || "normal") + ";\n                src: url(" + encodeURI(r) + ");\n            }\n        ",
                                    a = document.createElement("style");
                                a.appendChild(document.createTextNode("")), document.head.appendChild(a), a.sheet.insertRule(o, 0), c["default"]("trace", "Injecting CSS font face:", o)
                            }
                        }]), e
                    }();
                r["default"] = v, v.font_size_re = /((?:[0-9]*\.)?[0-9]+)\s*(px|pt|em|%)?/, v.text_cache = {}, v.cache_stats = {
                    hits: 0,
                    misses: 0
                }, v.fonts_loaded = s.resolve(), t.exports = r["default"]
            }, {
                "../../gl/texture": 208,
                "../../utils/log": 251,
                "../../utils/utils": 256,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24,
                fontfaceobserver: 137
            }],
            243: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/create")["default"],
                    i = e("babel-runtime/core-js/object/assign")["default"],
                    o = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = e("../../geo"),
                    s = o(a),
                    l = e("../style"),
                    u = e("../points/points"),
                    c = e("../../labels/collision"),
                    f = o(c),
                    h = e("../../labels/label_point"),
                    d = o(h),
                    p = e("../../labels/label_line"),
                    m = o(p),
                    g = n(u.Points);
                r.TextStyle = g, i(g, {
                    name: "text",
                    "super": u.Points,
                    built_in: !0,
                    selection: !1,
                    init: function () {
                        this["super"].init.apply(this, arguments), this.defines.TANGRAM_POINT_TEXTURE = !0, this.defines.TANGRAM_MULTI_SAMPLER = !1, this.defines.TANGRAM_UNMULTIPLY_ALPHA = !0, this.defines.TANGRAM_FADE_ON_ZOOM_OUT = !0, this.defines.TANGRAM_FADE_ON_ZOOM_OUT_RATE = 2, this.reset()
                    },
                    reset: function () {
                        this.queues = {}, this.resetText()
                    },
                    addFeature: function (e, t, r) {
                        var n = r.tile;
                        if (n.generation === this.generation && (t = this.preprocess(t))) {
                            var i = this.parseTextFeature(e, t, r, n);
                            i && (i.feature = e, i.context = r, i.layout.vertex = !1, this.tile_data[n.key] || this.startData(n), this.queues[n.key].push(i), f["default"].addStyle(this.name, n.key))
                        }
                    },
                    createTextLabels: function (e, t) {
                        for (var r = [], i = 0; i < t.length; i++)
                            for (var o = t[i], a = this.texts[e][o.text_settings_key][o.text], s = this.buildLabels(a.size.collision_size, o.feature.geometry, o.layout), l = 0; l < s.length; l++) {
                                var u = n(o);
                                u.label = s[l], r.push(u)
                            }
                        return r
                    },
                    startData: function (e) {
                        return this.queues[e.key] = [], l.Style.startData.call(this, e)
                    },
                    endData: function (e) {
                        var t = this;
                        return this.renderTextLabels(e, this.name, this.queues[e.key]).then(function (r) {
                            var n = r.labels,
                                i = r.texts,
                                o = r.texture;
                            return i && (t.texts[e.key] = i, n.forEach(function (r) {
                                var n = r.text_settings_key,
                                    i = t.texts[e.key] && t.texts[e.key][n] && t.texts[e.key][n][r.text],
                                    o = t.feature_style;
                                o.label = r.label, o.size = i.size.logical_size, o.angle = r.label.angle || 0, o.texcoords = i.texcoords, l.Style.addFeature.call(t, r.feature, r.draw, r.context)
                            })), t.freeText(e), l.Style.endData.call(t, e).then(function (e) {
                                return o && e ? (e.uniforms.u_texture = o, e.textures.push(o), e) : void 0
                            })
                        })
                    },
                    _preprocess: function (e) {
                        return this.preprocessText(e)
                    },
                    buildLabels: function (e, t, r) {
                        var n = [];
                        if ("LineString" === t.type) this.buildLineLabels(e, t.coordinates, r, n);
                        else if ("MultiLineString" === t.type)
                            for (var i = t.coordinates, o = 0; o < i.length; ++o) this.buildLineLabels(e, i[o], r, n);
                        else if ("Point" === t.type) n.push(new d["default"](t.coordinates, e, r));
                        else if ("MultiPoint" === t.type)
                            for (var a = t.coordinates, o = 0; o < a.length; ++o) n.push(new d["default"](a[o], e, r));
                        else if ("Polygon" === t.type) {
                            var l = s["default"].centroid(t.coordinates);
                            n.push(new d["default"](l, e, r))
                        } else if ("MultiPolygon" === t.type) {
                            var l = s["default"].multiCentroid(t.coordinates);
                            n.push(new d["default"](l, e, r))
                        }
                        return n
                    },
                    buildLineLabels: function (e, t, r, n) {
                        var i = Math.min(r.subdiv, t.length - 1);
                        if (i > 1) {
                            for (var o = (t.length - 1) / i, a = 0; i > a; a++) r.segment_start = Math.floor(a * o), r.segment_end = Math.floor((a + 1) * o), n.push(new m["default"](e, t, r));
                            r.segment_start = null, r.segment_end = null
                        } else n.push(new m["default"](e, t, r))
                    }
                }), g.texture_id = 0
            }, {
                "../../geo": 201,
                "../../labels/collision": 214,
                "../../labels/label_line": 216,
                "../../labels/label_point": 217,
                "../points/points": 236,
                "../style": 239,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/object/create": 7,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            244: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/to-consumable-array")["default"],
                    i = e("babel-runtime/core-js/object/keys")["default"],
                    o = e("babel-runtime/core-js/promise")["default"],
                    a = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var s = e("../style_parser"),
                    l = e("../../gl/texture"),
                    u = a(l),
                    c = e("../../geo"),
                    f = a(c),
                    h = e("../../utils/log"),
                    d = a(h),
                    p = e("../../utils/thread"),
                    m = a(p),
                    g = e("../../utils/worker_broker"),
                    v = a(g),
                    _ = e("../../labels/collision"),
                    y = a(_),
                    b = e("../text/text_settings"),
                    x = a(b),
                    w = e("../text/canvas_text"),
                    A = a(w),
                    T = 0,
                    k = {
                        resetText: function () {
                            m["default"].is_main ? this.canvas = new A["default"] : m["default"].is_worker && (this.texts = {})
                        },
                        freeText: function (e) {
                            delete this.texts[e.key]
                        },
                        parseTextFeature: function (e, t, r, n) {
                            var i = this.parseTextSource(e, t, r);
                            if (null != i) {
                                var o = this.computeTextLayout({}, e, t, r, n, i),
                                    a = x["default"].compute(e, t, r),
                                    s = x["default"].key(a);
                                return this.texts[n.key] = this.texts[n.key] || {}, this.texts[n.key][s] = this.texts[n.key][s] || {}, this.texts[n.key][s][i] || (this.texts[n.key][s][i] = {
                                    text_settings: a,
                                    ref: 0
                                }), {
                                    draw: t,
                                    text: i,
                                    text_settings_key: s,
                                    layout: o
                                }
                            }
                        },
                        parseTextSource: function (e, t, r) {
                            var n = void 0,
                                i = t.text_source || "name";
                            if (Array.isArray(i))
                                for (var o = 0; o < i.length && ("string" == typeof i[o] ? n = e.properties[i[o]] : "function" == typeof i[o] && (n = i[o](r)), !n); o++);
                            else "string" == typeof i ? n = e.properties[i] : "function" == typeof i && (n = i(r));
                            return n
                        },
                        renderTextLabels: function (e, t, r) {
                            var n = this;
                            return 0 === i(this.texts[e.key] || {}).length ? o.resolve({}) : v["default"].postMessage(this.main_thread_target + ".calcTextSizes", this.texts[e.key]).then(function (i) {
                                if (e.canceled) return d["default"]("trace", "Style " + n.name + ": stop tile build because tile was canceled: " + e.key + ", post-calcTextSizes()"), {};
                                if (!i) return y["default"].collide({}, t, e.key), {};
                                n.texts[e.key] = i;
                                var o = n.createTextLabels(e.key, r);
                                return y["default"].collide(o, t, e.key).then(function (t) {
                                    return e.canceled ? (d["default"]("trace", "stop tile build because tile was canceled: " + e.key + ", post-collide()"), {}) : 0 === t.length ? {} : (n.cullTextStyles(i, t), v["default"].postMessage(n.main_thread_target + ".rasterizeTexts", e.key, i).then(function (r) {
                                        var n = r.texts,
                                            i = r.texture;
                                        return e.canceled ? (d["default"]("trace", "stop tile build because tile was canceled: " + e.key + ", post-rasterizeTexts()"), {}) : {
                                            labels: t,
                                            texts: n,
                                            texture: i
                                        }
                                    }))
                                })
                            })
                        },
                        cullTextStyles: function (e, t) {
                            for (var r = 0; r < t.length; r++) e[t[r].text_settings_key][t[r].text].ref++;
                            for (var n in e)
                                for (var o in e[n]) e[n][o].ref < 1 && delete e[n][o];
                            for (var n in e) 0 === i(e[n]).length && delete e[n]
                        },
                        calcTextSizes: function (e) {
                            return this.canvas.textSizes(e)
                        },
                        rasterizeTexts: function (e, t) {
                            var r = new A["default"],
                                i = r.setTextureTextPositions(t, this.max_texture_size);
                            d["default"]("trace", "text summary for tile " + e + ": fits in " + i[0] + "x" + i[1] + "px"), i[0] < this.max_texture_size && i[1] < this.max_texture_size ? (r.resize.apply(r, n(i)), r.rasterize(t, i)) : d["default"]("error", ["Label atlas for tile " + e + " is " + i[0] + "x" + i[1] + "px, ", "but max GL texture size is " + this.max_texture_size + "x" + this.max_texture_size + "px"].join(""));
                            var o = "labels-" + e + "-" + T++;
                            return u["default"].create(this.gl, o, {
                                element: r.canvas,
                                filtering: "linear",
                                UNPACK_PREMULTIPLY_ALPHA_WEBGL: !0
                            }), u["default"].retain(o), {
                                texts: t,
                                texture: o
                            }
                        },
                        preprocessText: function (e) {
                            return e && e.font && "object" == typeof e.font ? (e.font.fill = s.StyleParser.cacheObject(e.font.fill), e.font.stroke && (e.font.stroke.color = s.StyleParser.cacheObject(e.font.stroke.color)), e.font.px_size = s.StyleParser.cacheObject(e.font.size, A["default"].fontPixelSize), e.font.stroke && null != e.font.stroke.width && (e.font.stroke.width = s.StyleParser.cacheObject(e.font.stroke.width, parseFloat)), e.offset = s.StyleParser.cacheObject(e.offset, function (e) {
                                return Array.isArray(e) && e.map(parseFloat) || 0
                            }), e.buffer = s.StyleParser.cacheObject(e.buffer, function (e) {
                                return (Array.isArray(e) ? e : [e, e]).map(parseFloat) || 0
                            }), e.repeat_distance = s.StyleParser.cacheObject(e.repeat_distance, parseFloat), e) : void 0
                        },
                        computeTextLayout: function (e, t, r, n, i, o) {
                            var a = e || {};
                            return a = this.computeLayout(a, t, r, n, i), a.cull_from_tile = null != r.cull_from_tile ? r.cull_from_tile : !0, a.move_into_tile = null != r.move_into_tile ? r.move_into_tile : !0, a.line_exceed = r.line_exceed && "%" === r.line_exceed.substr(-1) ? parseFloat(r.line_exceed.substr(0, r.line_exceed.length - 1)) : 80, a.repeat_distance = s.StyleParser.cacheProperty(r.repeat_distance, n), null == a.repeat_distance && (a.repeat_distance = f["default"].tile_size), a.repeat_distance *= a.units_per_pixel, a.repeat_group = "function" == typeof r.repeat_group ? r.repeat_group(n) : "string" == typeof r.repeat_group ? r.repeat_group : r.key, a.repeat_group += "/" + o, a.subdiv = i.overzoom2, a
                        }
                    };
                r.TextLabels = k
            }, {
                "../../geo": 201,
                "../../gl/texture": 208,
                "../../labels/collision": 214,
                "../../utils/log": 251,
                "../../utils/thread": 255,
                "../../utils/worker_broker": 258,
                "../style_parser": 241,
                "../text/canvas_text": 242,
                "../text/text_settings": 245,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            245: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var i, o = e("../../utils/utils"),
                    a = n(o),
                    s = e("../../geo"),
                    l = n(s),
                    u = e("../style_parser"),
                    c = e("../points/point_anchor"),
                    f = n(c);
                r["default"] = i = {
                    key: function (e) {
                        return [e.style, e.weight, e.family, e.px_size, e.fill, e.stroke, e.stroke_width, e.transform, e.text_wrap, e.align, a["default"].device_pixel_ratio].join("/")
                    },
                    defaults: {
                        style: "normal",
                        weight: null,
                        size: "12px",
                        px_size: 12,
                        family: "Helvetica",
                        fill: "white",
                        text_wrap: 15,
                        align: "center"
                    },
                    compute: function (e, t, r) {
                        var n = {};
                        t.font = t.font || this.defaults, n.fill = t.font.fill && a["default"].toCSSColor(u.StyleParser.cacheColor(t.font.fill, r)) || this.defaults.fill, n.style = t.font.style || this.defaults.style, n.weight = t.font.weight || this.defaults.weight, t.font.family ? (n.family = t.font.family, n.family !== this.defaults.family && (n.family += ", " + this.defaults.family)) : n.family = this.defaults.family, n.transform = t.font.transform, n.size = t.font.size || this.defaults.size, n.px_size = u.StyleParser.cacheProperty(t.font.px_size, r) || this.defaults.px_size, t.font.stroke && t.font.stroke.color && (n.stroke = a["default"].toCSSColor(u.StyleParser.cacheColor(t.font.stroke.color, r) || this.defaults.stroke), n.stroke_width = u.StyleParser.cacheProperty(t.font.stroke.width, r) || this.defaults.stroke_width, n.stroke_width *= a["default"].device_pixel_ratio), n.font_css = this.fontCSS(n);
                        var i = t.text_wrap;
                        return null == i && "line" !== l["default"].geometryType(e.geometry.type) && (i = !0), i === !0 && (i = this.defaults.text_wrap), n.text_wrap = i, !t.align && t.anchor && "center" !== t.anchor && (f["default"].isLeftAnchor(t.anchor) ? t.align = "right" : f["default"].isRightAnchor(t.anchor) && (t.align = "left")), n.align = t.align || this.defaults.align, n
                    },
                    fontCSS: function (e) {
                        var t = e.style,
                            r = e.weight,
                            n = e.px_size,
                            i = e.family;
                        return [t, r, n + "px", i].filter(function (e) {
                            return e
                        }).join(" ")
                    }
                }, t.exports = r["default"]
            }, {
                "../../geo": 201,
                "../../utils/utils": 256,
                "../points/point_anchor": 235,
                "../style_parser": 241,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            246: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/to-consumable-array")["default"],
                    a = e("babel-runtime/core-js/get-iterator")["default"],
                    s = e("babel-runtime/core-js/promise")["default"],
                    l = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var u = e("./utils/log"),
                    c = l(u),
                    f = e("./geo"),
                    h = l(f),
                    d = e("./styles/style_parser"),
                    p = e("./styles/style_manager"),
                    m = e("./labels/collision"),
                    g = l(m),
                    v = e("./utils/worker_broker"),
                    _ = l(v),
                    y = e("./gl/texture"),
                    b = l(y),
                    x = e("./utils/gl-matrix"),
                    w = function () {
                        function e(t) {
                            var r = t.coords,
                                n = t.style_zoom,
                                o = t.source,
                                a = t.worker,
                                s = t.view;
                            i(this, e), this.worker = a, this.view = s, this.source = o, this.generation = null, this.visible = !1, this.proxy = null, this.proxy_depth = 0, this.loading = !1, this.loaded = !1, this.error = null, this.debug = {}, this.coords = e.coordinateWithMaxZoom(r, this.source.max_zoom), this.style_zoom = n, this.overzoom = Math.max(this.style_zoom - this.coords.z, 0), this.overzoom2 = Math.pow(2, this.overzoom), this.key = e.key(this.coords, this.source, this.style_zoom), this.min = h["default"].metersForTile(this.coords), this.max = h["default"].metersForTile({
                                x: this.coords.x + 1,
                                y: this.coords.y + 1,
                                z: this.coords.z
                            }), this.span = {
                                x: this.max.x - this.min.x,
                                y: this.max.y - this.min.y
                            }, this.bounds = {
                                sw: {
                                    x: this.min.x,
                                    y: this.max.y
                                },
                                ne: {
                                    x: this.max.x,
                                    y: this.min.y
                                }
                            }, this.center_dist = 0, this.meters_per_pixel = h["default"].metersPerPixel(this.coords.z), this.units_per_pixel = h["default"].units_per_pixel / this.overzoom2, this.units_per_meter_overzoom = h["default"].unitsPerMeter(this.coords.z) * this.overzoom2, this.meshes = {}, this.textures = []
                        }
                        return n(e, [{
                            key: "freeResources",
                            value: function () {
                                if (this.meshes)
                                    for (var e in this.meshes) this.meshes[e].destroy();
                                if (this.textures) {
                                    var t = !0,
                                        r = !1,
                                        n = void 0;
                                    try {
                                        for (var i, o = a(this.textures); !(t = (i = o.next()).done); t = !0) {
                                            var s = i.value;
                                            b["default"].release(s)
                                        }
                                    } catch (l) {
                                        r = !0, n = l
                                    } finally {
                                        try {
                                            !t && o["return"] && o["return"]()
                                        } finally {
                                            if (r) throw n
                                        }
                                    }
                                }
                                this.meshes = {}, this.textures = []
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.workerMessage("self.removeTile", this.key), this.freeResources(), this.worker = null
                            }
                        }, {
                            key: "buildAsMessage",
                            value: function () {
                                return {
                                    key: this.key,
                                    source: this.source.name,
                                    coords: this.coords,
                                    min: this.min,
                                    max: this.max,
                                    units_per_pixel: this.units_per_pixel,
                                    meters_per_pixel: this.meters_per_pixel,
                                    units_per_meter_overzoom: this.units_per_meter_overzoom,
                                    style_zoom: this.style_zoom,
                                    overzoom: this.overzoom,
                                    overzoom2: this.overzoom2,
                                    generation: this.generation,
                                    debug: this.debug
                                }
                            }
                        }, {
                            key: "workerMessage",
                            value: function () {
                                for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                                return _["default"].postMessage.apply(_["default"], [this.worker].concat(t))
                            }
                        }, {
                            key: "build",
                            value: function (e) {
                                return this.generation = e, this.loaded || (this.loading = !0), this.workerMessage("self.buildTile", {
                                    tile: this.buildAsMessage()
                                })["catch"](function (e) {
                                    throw e
                                })
                            }
                        }, {
                            key: "buildMeshes",
                            value: function (e) {
                                if (!this.error) {
                                    this.debug.geometries = 0, this.debug.buffer_size = 0;
                                    var t = {},
                                        r = [],
                                        n = this.mesh_data;
                                    if (n)
                                        for (var i in n) {
                                            if (n[i].vertex_data) {
                                                if (this.debug.buffer_size += n[i].vertex_data.byteLength, n[i].vertex_elements && (this.debug.buffer_size += n[i].vertex_elements.byteLength), !e[i]) {
                                                    c["default"]("warn", "Could not create mesh because style '" + i + "' not found, for tile " + this.key + ", aborting tile");
                                                    break
                                                }
                                                t[i] = e[i].makeMesh(n[i].vertex_data, n[i].vertex_elements, n[i]), this.debug.geometries += t[i].geometry_count
                                            }
                                            n[i].textures && n[i].textures.forEach(function (e) {
                                                r.push(e)
                                            })
                                        }
                                    delete this.mesh_data, this.freeResources(), this.meshes = t, this.textures = r, this.debug.geom_ratio = (this.debug.geometries / this.debug.features).toFixed(1), this.printDebug()
                                }
                            }
                        }, {
                            key: "update",
                            value: function () {
                                var t = this.coords;
                                t.z !== this.view.center.tile.z && (t = e.coordinateAtZoom(t, this.view.center.tile.z)), this.center_dist = Math.abs(this.view.center.tile.x - t.x) + Math.abs(this.view.center.tile.y - t.y)
                            }
                        }, {
                            key: "setProxyFor",
                            value: function (e) {
                                this.proxy = e, e ? (this.visible = !0, this.proxy_depth = 1, this.update()) : this.proxy_depth = 0
                            }
                        }, {
                            key: "setupProgram",
                            value: function (e, t) {
                                var r = e.model,
                                    n = e.model32;
                                t.uniform("4fv", "u_tile_origin", [this.min.x, this.min.y, this.style_zoom, this.coords.z]), t.uniform("1f", "u_tile_proxy_depth", this.proxy_depth), x.mat4.identity(r), x.mat4.translate(r, r, x.vec3.fromValues(this.min.x, this.min.y, 0)), x.mat4.scale(r, r, x.vec3.fromValues(this.span.x / h["default"].tile_scale, -1 * this.span.y / h["default"].tile_scale, 1)), x.mat4.copy(n, r), t.uniform("Matrix4fv", "u_model", n)
                            }
                        }, {
                            key: "merge",
                            value: function (e) {
                                for (var t in e) "key" !== t && (this[t] = e[t]);
                                return this
                            }
                        }, {
                            key: "printDebug",
                            value: function () {
                                c["default"]("debug", "Tile: debug for " + this.key + ": [  " + JSON.stringify(this.debug) + " ]")
                            }
                        }], [{
                            key: "create",
                            value: function (t) {
                                return new e(t)
                            }
                        }, {
                            key: "coord",
                            value: function (t) {
                                return {
                                    x: t.x,
                                    y: t.y,
                                    z: t.z,
                                    key: e.coordKey(t)
                                }
                            }
                        }, {
                            key: "coordKey",
                            value: function (e) {
                                var t = e.x,
                                    r = e.y,
                                    n = e.z;
                                return t + "/" + r + "/" + n
                            }
                        }, {
                            key: "key",
                            value: function (t, r, n) {
                                return t = e.coordinateWithMaxZoom(t, r.max_zoom), t.y < 0 || t.y >= 1 << t.z || t.z < 0 ? void 0 : [r.name, n, t.x, t.y, t.z].join("/")
                            }
                        }, {
                            key: "coordinateAtZoom",
                            value: function (t, r) {
                                {
                                    var n = t.x,
                                        i = t.y,
                                        o = t.z;
                                    t.key
                                }
                                if (o !== r) {
                                    var a = Math.pow(2, o - r);
                                    n = Math.floor(n / a), i = Math.floor(i / a), o = r
                                }
                                return e.coord({
                                    x: n,
                                    y: i,
                                    z: o
                                })
                            }
                        }, {
                            key: "coordinateWithMaxZoom",
                            value: function (t, r) {
                                var n = t.x,
                                    i = t.y,
                                    o = t.z;
                                return void 0 !== r && o > r ? e.coordinateAtZoom({
                                    x: n,
                                    y: i,
                                    z: o
                                }, r) : e.coord({
                                    x: n,
                                    y: i,
                                    z: o
                                })
                            }
                        }, {
                            key: "childrenForCoordinate",
                            value: function (t) {
                                var r = t.x,
                                    n = t.y,
                                    i = t.z,
                                    o = t.key;
                                return e.coord_children[o] || (i++, r *= 2, n *= 2, e.coord_children[o] = [e.coord({
                                    x: r,
                                    y: n,
                                    z: i
                                }), e.coord({
                                    x: r + 1,
                                    y: n,
                                    z: i
                                }), e.coord({
                                    x: r,
                                    y: n + 1,
                                    z: i
                                }), e.coord({
                                    x: r + 1,
                                    y: n + 1,
                                    z: i
                                })]), e.coord_children[o]
                            }
                        }, {
                            key: "isDescendant",
                            value: function (t, r) {
                                if (r.z > t.z) {
                                    var n = e.coordinateAtZoom(r, t.z),
                                        i = n.x,
                                        o = n.y;
                                    return t.x === i && t.y === o
                                }
                                return !1
                            }
                        }, {
                            key: "sort",
                            value: function (e) {
                                return e.sort(function (e, t) {
                                    var r = e.center_dist,
                                        n = t.center_dist;
                                    return n > r ? -1 : n === r ? 0 : 1
                                })
                            }
                        }, {
                            key: "cancel",
                            value: function (t) {
                                t && (t.canceled = !0, t.source_data && t.source_data.request && t.source_data.request.abort(), e.abortBuild(t))
                            }
                        }, {
                            key: "buildGeometry",
                            value: function (t, r) {
                                var n = r.layers,
                                    i = r.styles,
                                    o = r.global;
                                t.debug.rendering = +new Date, t.debug.features = 0;
                                var a = t.source_data;
                                g["default"].startTile(t.key);
                                for (var l in n) {
                                    var u = n[l];
                                    if (u && u.config.data) {
                                        if (u.config.data.source === t.source)
                                            for (var f = e.getDataForSource(a, u.config.data, l), h = 0; h < f.length; h++) {
                                                var m = f[h],
                                                    v = m.geom;
                                                if (v)
                                                    for (var _ = 0; _ < v.features.length; _++) {
                                                        var y = v.features[_];
                                                        if (null != y.geometry) {
                                                            var b = d.StyleParser.getFeatureParseContext(y, t, o);
                                                            b.winding = t.default_winding, b.source = t.source, b.layer = m.layer;
                                                            var x = u.buildDrawGroups(b, !0);
                                                            if (x) {
                                                                for (var w in x) {
                                                                    var A = x[w];
                                                                    if (A.visible) {
                                                                        var T = A.style || w,
                                                                            k = i[T];
                                                                        k ? (b.layers = A.layers, k.addFeature(y, A, b)) : c["default"]("warn", "Style '" + T + "' not found, skipping layer '" + l + "':", A, y)
                                                                    }
                                                                }
                                                                t.debug.features++
                                                            }
                                                        }
                                                    }
                                            }
                                    } else c["default"]("warn", "Layer " + l + " was defined without a geometry data source and will not be rendered.")
                                }
                                t.debug.rendering = +new Date - t.debug.rendering;
                                var E = p.StyleManager.stylesForTile(t.key);
                                t.mesh_data = {};
                                for (var R = [], S = function (e) {
                                        var r = E[e],
                                            n = i[r];
                                        R.push(n.endData(t).then(function (e) {
                                            e && (t.mesh_data[r] = {
                                                vertex_data: e.vertex_data,
                                                vertex_elements: e.vertex_elements,
                                                uniforms: e.uniforms,
                                                textures: e.textures
                                            })
                                        }))
                                    }, h = 0; h < E.length; h++) S(h);
                                return s.all(R).then(function () {
                                    return g["default"].resetTile(t.key), ["mesh_data"]
                                })
                            }
                        }, {
                            key: "getDataForSource",
                            value: function (e, t) {
                                var r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                                    n = [];
                                return null != t && (!t.layer && e.layers._default ? n.push({
                                    geom: e.layers._default
                                }) : !t.layer && r ? n.push({
                                    layer: r,
                                    geom: e.layers[r]
                                }) : "string" == typeof t.layer ? n.push({
                                    layer: t.layer,
                                    geom: e.layers[t.layer]
                                }) : Array.isArray(t.layer) && t.layer.forEach(function (t) {
                                    e.layers[t] && e.layers[t].features && n.push({
                                        layer: t,
                                        geom: e.layers[t]
                                    })
                                })), n
                            }
                        }, {
                            key: "abortBuild",
                            value: function (e) {
                                if (e.mesh_data)
                                    for (var t in e.mesh_data) {
                                        var r = e.mesh_data[t].textures;
                                        if (r) {
                                            var n = !0,
                                                i = !1,
                                                o = void 0;
                                            try {
                                                for (var s, l = a(r); !(n = (s = l.next()).done); n = !0) {
                                                    var u = s.value,
                                                        f = b["default"].textures[u];
                                                    f && (c["default"]("trace", "releasing texture " + u + " for tile " + e.key), f.release())
                                                }
                                            } catch (h) {
                                                i = !0, o = h
                                            } finally {
                                                try {
                                                    !n && l["return"] && l["return"]()
                                                } finally {
                                                    if (i) throw o
                                                }
                                            }
                                        }
                                    }
                            }
                        }, {
                            key: "slice",
                            value: function (e, t) {
                                var r = ["key", "loading", "loaded", "generation", "error", "debug"];
                                Array.isArray(t) && r.push.apply(r, o(t));
                                var n = {},
                                    i = !0,
                                    s = !1,
                                    l = void 0;
                                try {
                                    for (var u, c = a(r); !(i = (u = c.next()).done); i = !0) {
                                        var f = u.value;
                                        n[f] = e[f]
                                    }
                                } catch (h) {
                                    s = !0, l = h
                                } finally {
                                    try {
                                        !i && c["return"] && c["return"]()
                                    } finally {
                                        if (s) throw l
                                    }
                                }
                                return n
                            }
                        }]), e
                    }();
                r["default"] = w, w.coord_children = {}, t.exports = r["default"]
            }, {
                "./geo": 201,
                "./gl/texture": 208,
                "./labels/collision": 214,
                "./styles/style_manager": 240,
                "./styles/style_parser": 241,
                "./utils/gl-matrix": 250,
                "./utils/log": 251,
                "./utils/worker_broker": 258,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            247: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/core-js/object/keys")["default"],
                    a = e("babel-runtime/core-js/get-iterator")["default"],
                    s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var l = e("./tile"),
                    u = s(l),
                    c = e("./tile_pyramid"),
                    f = s(c),
                    h = e("./utils/log"),
                    d = s(h),
                    p = function () {
                        function e(t) {
                            var r = t.scene,
                                n = t.view;
                            i(this, e), this.scene = r, this.view = n, this.tiles = {}, this.pyramid = new f["default"], this.visible_coords = {}, this.queued_coords = [], this.building_tiles = null
                        }
                        return n(e, [{
                            key: "destroy",
                            value: function () {
                                this.forEachTile(function (e) {
                                    return e.destroy()
                                }), this.tiles = {}, this.pyramid = null, this.visible_coords = {}, this.queued_coords = [], this.scene = null, this.view = null
                            }
                        }, {
                            key: "keepTile",
                            value: function (e) {
                                this.tiles[e.key] = e, this.pyramid.addTile(e)
                            }
                        }, {
                            key: "hasTile",
                            value: function (e) {
                                return void 0 !== this.tiles[e]
                            }
                        }, {
                            key: "forgetTile",
                            value: function (e) {
                                if (this.hasTile(e)) {
                                    var t = this.tiles[e];
                                    this.pyramid.removeTile(t)
                                }
                                delete this.tiles[e], this.tileBuildStop(e)
                            }
                        }, {
                            key: "removeTile",
                            value: function (e) {
                                d["default"]("trace", "tile unload for " + e);
                                var t = this.tiles[e];
                                null != t && t.destroy(), this.forgetTile(t.key), this.scene.requestRedraw()
                            }
                        }, {
                            key: "forEachTile",
                            value: function (e) {
                                for (var t in this.tiles) e(this.tiles[t])
                            }
                        }, {
                            key: "removeTiles",
                            value: function (e) {
                                var t = [];
                                for (var r in this.tiles) {
                                    var n = this.tiles[r];
                                    e(n) && t.push(r)
                                }
                                for (var i = 0; i < t.length; i++) {
                                    var o = t[i];
                                    this.removeTile(o)
                                }
                            }
                        }, {
                            key: "updateTilesForView",
                            value: function () {
                                var e = o(this.visible_coords);
                                this.visible_coords = {};
                                var t = this.view.findVisibleTileCoordinates(),
                                    r = !0,
                                    n = !1,
                                    i = void 0;
                                try {
                                    for (var s, l = a(t); !(r = (s = l.next()).done); r = !0) {
                                        var u = s.value;
                                        this.queueCoordinate(u), this.visible_coords[u.key] = u
                                    }
                                } catch (c) {
                                    n = !0, i = c
                                } finally {
                                    try {
                                        !r && l["return"] && l["return"]()
                                    } finally {
                                        if (n) throw i
                                    }
                                }
                                var f = o(this.visible_coords),
                                    h = !1;
                                e.length !== f.length ? h = !0 : (e.sort(), f.sort(), e.every(function (e, t) {
                                    return f[t] === e
                                }) || (h = !0)), this.updateTileStates()
                            }
                        }, {
                            key: "updateTileStates",
                            value: function () {
                                var e = this;
                                this.forEachTile(function (t) {
                                    e.updateVisibility(t), t.update()
                                }), this.loadQueuedCoordinates(), this.updateProxyTiles(), this.view.pruneTilesForView()
                            }
                        }, {
                            key: "updateProxyTiles",
                            value: function () {
                                var e = this;
                                if (0 !== this.view.zoom_direction) {
                                    this.forEachTile(function (e) {
                                        return e.setProxyFor(null)
                                    });
                                    var t = !1;
                                    this.forEachTile(function (r) {
                                        if (1 === e.view.zoom_direction) {
                                            if (r.visible && r.loading && r.coords.z > 0) {
                                                var n = e.pyramid.getAncestor(r);
                                                n && (n.setProxyFor(r), t = !0)
                                            }
                                        } else if (-1 === e.view.zoom_direction && r.visible && r.loading) {
                                            var i = e.pyramid.getDescendants(r),
                                                o = !0,
                                                s = !1,
                                                l = void 0;
                                            try {
                                                for (var u, c = a(i); !(o = (u = c.next()).done); o = !0) {
                                                    var f = u.value;
                                                    f.setProxyFor(r), t = !0
                                                }
                                            } catch (h) {
                                                s = !0, l = h
                                            } finally {
                                                try {
                                                    !o && c["return"] && c["return"]()
                                                } finally {
                                                    if (s) throw l
                                                }
                                            }
                                        }
                                    }), t || (this.view.zoom_direction = 0)
                                }
                            }
                        }, {
                            key: "updateVisibility",
                            value: function (e) {
                                if (e.visible = !1, e.style_zoom === this.view.tile_zoom)
                                    if (this.visible_coords[e.coords.key]) e.visible = !0;
                                    else
                                        for (var t in this.visible_coords)
                                            if (u["default"].isDescendant(e.coords, this.visible_coords[t])) {
                                                e.visible = !0;
                                                break
                                            }
                            }
                        }, {
                            key: "pruneToVisibleTiles",
                            value: function () {
                                this.removeTiles(function (e) {
                                    return !e.visible
                                })
                            }
                        }, {
                            key: "getRenderableTiles",
                            value: function () {
                                var e = [];
                                for (var t in this.tiles) {
                                    var r = this.tiles[t];
                                    r.visible && r.loaded && e.push(r)
                                }
                                return e
                            }
                        }, {
                            key: "isLoadingVisibleTiles",
                            value: function () {
                                var e = this;
                                return o(this.tiles).some(function (t) {
                                    return e.tiles[t].visible && e.tiles[t].loading
                                })
                            }
                        }, {
                            key: "queueCoordinate",
                            value: function (e) {
                                this.queued_coords[this.queued_coords.length] = e
                            }
                        }, {
                            key: "loadQueuedCoordinates",
                            value: function () {
                                var e = this;
                                0 !== this.queued_coords.length && (this.queued_coords.sort(function (t, r) {
                                    var n = Math.abs(e.view.center.tile.x - t.x) + Math.abs(e.view.center.tile.y - t.y),
                                        i = Math.abs(e.view.center.tile.x - r.x) + Math.abs(e.view.center.tile.y - r.y);
                                    return i > n ? -1 : i === n ? 0 : 1
                                }), this.queued_coords.forEach(function (t) {
                                    return e.loadCoordinate(t)
                                }), this.queued_coords = [])
                            }
                        }, {
                            key: "loadCoordinate",
                            value: function (e) {
                                if (e.z === this.view.center.tile.z)
                                    for (var t in this.scene.sources) {
                                        var r = this.scene.sources[t];
                                        if (r.tiled && r.geometry_tiles) {
                                            var n = u["default"].key(e, r, this.view.tile_zoom);
                                            if (n && !this.hasTile(n)) {
                                                var i = u["default"].create({
                                                    source: r,
                                                    coords: e,
                                                    worker: this.scene.nextWorker(),
                                                    style_zoom: this.view.styleZoom(e.z),
                                                    view: this.view
                                                });
                                                this.keepTile(i), this.buildTile(i)
                                            }
                                        }
                                    }
                            }
                        }, {
                            key: "buildTiles",
                            value: function (e) {
                                var t = this;
                                u["default"].sort(e).forEach(function (e) {
                                    return t.buildTile(e)
                                }), this.checkBuildQueue()
                            }
                        }, {
                            key: "buildTile",
                            value: function (e) {
                                var t = this;
                                this.tileBuildStart(e.key), this.updateVisibility(e), e.update(), e.build(this.scene.generation).then(function (e) {
                                    e && t.buildTileCompleted(e)
                                })["catch"](function (r) {
                                    d["default"]("error", "Error building tile " + e.key + ":", r), t.forgetTile(e.key), u["default"].abortBuild(e)
                                })
                            }
                        }, {
                            key: "buildTileCompleted",
                            value: function (e) {
                                var t = e.tile;
                                null == this.tiles[t.key] ? (d["default"]("trace", "discarded tile " + t.key + " in TileManager.buildTileCompleted because previously removed"), u["default"].abortBuild(t), this.updateTileStates()) : t.generation !== this.scene.generation ? (d["default"]("debug", "discarded tile " + t.key + " in TileManager.buildTileCompleted because built with " + ("scene config gen " + t.generation + ", current " + this.scene.generation)), this.forgetTile(t.key), u["default"].abortBuild(t), this.updateTileStates()) : (this.tiles[t.key] && (t = this.tiles[t.key].merge(t)), t.buildMeshes(this.scene.styles), this.updateTileStates(), this.scene.requestRedraw()), this.tileBuildStop(t.key)
                            }
                        }, {
                            key: "tileBuildStart",
                            value: function (e) {
                                this.building_tiles = this.building_tiles || {}, this.building_tiles[e] = !0, d["default"]("trace", "tileBuildStart for " + e + ": " + o(this.building_tiles).length)
                            }
                        }, {
                            key: "tileBuildStop",
                            value: function (e) {
                                this.building_tiles && (d["default"]("trace", "tileBuildStop for " + e + ": " + o(this.building_tiles).length), delete this.building_tiles[e], this.checkBuildQueue())
                            }
                        }, {
                            key: "checkBuildQueue",
                            value: function () {
                                this.building_tiles && 0 !== o(this.building_tiles).length || (this.building_tiles = null, this.scene.tileManagerBuildDone())
                            }
                        }, {
                            key: "getDebugSum",
                            value: function (e, t) {
                                var r = 0;
                                for (var n in this.tiles) null == this.tiles[n].debug[e] || "function" == typeof t && t(this.tiles[n]) !== !0 || (r += this.tiles[n].debug[e]);
                                return r
                            }
                        }, {
                            key: "getDebugAverage",
                            value: function (e, t) {
                                return this.getDebugSum(e, t) / o(this.tiles).length
                            }
                        }]), e
                    }();
                r["default"] = p, t.exports = r["default"]
            }, {
                "./tile": 246,
                "./tile_pyramid": 248,
                "./utils/log": 251,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            248: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/to-consumable-array")["default"],
                    a = e("babel-runtime/core-js/map")["default"],
                    s = e("babel-runtime/core-js/get-iterator")["default"],
                    l = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var u = e("./geo"),
                    c = l(u),
                    f = e("./tile"),
                    h = l(f),
                    d = function () {
                        function e() {
                            i(this, e), this.coords = {}, this.max_proxy_descendant_depth = 3
                        }
                        return n(e, [{
                            key: "sourceTiles",
                            value: function (e, t) {
                                return this.coords[e.key] && this.coords[e.key].sources && this.coords[e.key].sources.get(t.name)
                            }
                        }, {
                            key: "addTile",
                            value: function (e) {
                                var t = e.coords.key,
                                    r = this.coords[t];
                                r || (r = this.coords[t] = {
                                    descendants: 0
                                }), r.sources || (r.sources = new a), r.sources.get(e.source.name) || r.sources.set(e.source.name, new a), r.sources.get(e.source.name).set(e.style_zoom, e);
                                for (var n = e.coords.z - 1; n >= 0; n--) {
                                    var i = h["default"].coordinateAtZoom(e.coords, n);
                                    this.coords[i.key] || (this.coords[i.key] = {
                                        descendants: 0
                                    }), this.coords[i.key].descendants++
                                }
                            }
                        }, {
                            key: "removeTile",
                            value: function (e) {
                                var t = this.sourceTiles(e.coords, e.source),
                                    r = e.coords.key;
                                t && (t["delete"](e.style_zoom), 0 === t.size && (this.coords[r].sources["delete"](e.source.name), 0 === this.coords[r].sources.size && (delete this.coords[r].sources, 0 === this.coords[r].descendants && delete this.coords[r])));
                                for (var n = e.coords.z - 1; n >= 0; n--) {
                                    var i = h["default"].coordinateAtZoom(e.coords, n);
                                    this.coords[i.key] && this.coords[i.key].descendants > 0 && (this.coords[i.key].descendants--, 0 !== this.coords[i.key].descendants || this.coords[i.key].sources || delete this.coords[i.key])
                                }
                            }
                        }, {
                            key: "getAncestor",
                            value: function (e) {
                                var t = e.coords,
                                    r = e.style_zoom,
                                    n = e.source;
                                if (r > n.max_zoom) {
                                    var i = this.sourceTiles(t, n);
                                    if (i)
                                        for (var o = r - 1; o >= n.max_zoom; o--)
                                            if (i.has(o) && i.get(o).loaded) return i.get(o);
                                    r = n.max_zoom
                                }
                                r--;
                                var a = h["default"].coordinateAtZoom(t, t.z - 1),
                                    s = this.sourceTiles(a, n);
                                return s && s.has(r) && s.get(r).loaded ? s.get(r) : a.z > 0 ? this.getAncestor({
                                    coords: a,
                                    style_zoom: r,
                                    source: n
                                }) : void 0
                            }
                        }, {
                            key: "getDescendants",
                            value: function (e) {
                                var t = e.coords,
                                    r = e.style_zoom,
                                    n = e.source,
                                    i = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1],
                                    a = [];
                                if (r >= n.max_zoom) {
                                    var l = this.sourceTiles(t, n);
                                    if (l)
                                        for (var u = Math.max(c["default"].default_view_max_zoom, r + this.max_proxy_descendant_depth), f = r + 1; u >= f; f++)
                                            if (l.has(f) && l.get(f).loaded) return a.push(l.get(f)), a;
                                    return a
                                }
                                if (this.coords[t.key] && this.coords[t.key].descendants > 0) {
                                    r++;
                                    var d = !0,
                                        p = !1,
                                        m = void 0;
                                    try {
                                        for (var g, v = s(h["default"].childrenForCoordinate(t)); !(d = (g = v.next()).done); d = !0) {
                                            var _ = g.value,
                                                y = this.sourceTiles(_, n);
                                            y && y.has(r) && y.get(r).loaded ? a.push(y.get(r)) : i <= this.max_proxy_descendant_depth && _.z <= n.max_zoom && a.push.apply(a, o(this.getDescendants({
                                                coords: _,
                                                source: n,
                                                style_zoom: r
                                            }, i + 1)))
                                        }
                                    } catch (b) {
                                        p = !0, m = b
                                    } finally {
                                        try {
                                            !d && v["return"] && v["return"]()
                                        } finally {
                                            if (p) throw m
                                        }
                                    }
                                }
                                return a
                            }
                        }]), e
                    }();
                r["default"] = d, t.exports = r["default"]
            }, {
                "./geo": 201,
                "./tile": 246,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/map": 4,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            249: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/get")["default"],
                    i = e("babel-runtime/helpers/inherits")["default"],
                    o = e("babel-runtime/helpers/class-call-check")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = function (e) {
                    function t(e) {
                        o(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.name = "MethodNotImplemented", this.message = "Method " + e + " must be implemented in subclass"
                    }
                    return i(t, e), t
                }(Error);
                r.MethodNotImplemented = a
            }, {
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/get": 21,
                "babel-runtime/helpers/inherits": 22
            }],
            250: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var i = e("gl-mat3/normal-from-mat4"),
                    o = n(i),
                    a = e("gl-mat3/invert"),
                    s = n(a),
                    l = e("gl-mat4/multiply"),
                    u = n(l),
                    c = e("gl-mat4/translate"),
                    f = n(c),
                    h = e("gl-mat4/scale"),
                    d = n(h),
                    p = e("gl-mat4/perspective"),
                    m = n(p),
                    g = e("gl-mat4/lookAt"),
                    v = n(g),
                    _ = e("gl-mat4/identity"),
                    y = n(_),
                    b = e("gl-mat4/copy"),
                    x = n(b),
                    w = {
                        fromValues: function (e, t, r) {
                            var n = new Float64Array(3);
                            return n[0] = e, n[1] = t, n[2] = r, n
                        }
                    },
                    A = {
                        normalFromMat4: o["default"],
                        invert: s["default"]
                    },
                    T = {
                        multiply: u["default"],
                        translate: f["default"],
                        scale: d["default"],
                        perspective: m["default"],
                        lookAt: v["default"],
                        identity: y["default"],
                        copy: x["default"]
                    };
                r.vec3 = w, r.mat3 = A, r.mat4 = T
            }, {
                "babel-runtime/helpers/interop-require-default": 23,
                "gl-mat3/invert": 144,
                "gl-mat3/normal-from-mat4": 145,
                "gl-mat4/copy": 146,
                "gl-mat4/identity": 147,
                "gl-mat4/lookAt": 148,
                "gl-mat4/multiply": 149,
                "gl-mat4/perspective": 150,
                "gl-mat4/scale": 151,
                "gl-mat4/translate": 152
            }],
            251: [function (e, t, r) {
                "use strict";

                function n(e) {
                    return c["default"].is_main ? (p[e] = p[e] || (console[e] ? console[e] : console.log).bind(console), p[e]) : void 0
                }

                function i(e) {
                    if (d[e] <= d[i.level]) {
                        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; t > a; a++) r[a - 1] = arguments[a];
                        if (c["default"].is_worker) h["default"].postMessage.apply(h["default"], ["_logProxy", e].concat(r));
                        else {
                            var s = n(e);
                            r.length > 1 ? s.apply(void 0, ["Tangram " + l["default"].string + " [" + e + "]: " + r[0]].concat(o(r.slice(1)))) : s("Tangram " + l["default"].string + " [" + e + "]: " + r[0])
                        }
                    }
                }
                var o = e("babel-runtime/helpers/to-consumable-array")["default"],
                    a = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r["default"] = i;
                var s = e("./version"),
                    l = a(s),
                    u = e("./thread"),
                    c = a(u),
                    f = e("./worker_broker"),
                    h = a(f),
                    d = {
                        silent: -1,
                        error: 0,
                        warn: 1,
                        info: 2,
                        debug: 3,
                        trace: 4
                    },
                    p = {};
                i.level = "info", i.workers = null, i.setLevel = function (e) {
                    i.level = e, c["default"].is_main && Array.isArray(i.workers) && h["default"].postMessage(i.workers, "_logSetLevelProxy", e)
                }, c["default"].is_main && (i.setWorkers = function (e) {
                    i.workers = e
                }), h["default"].addTarget("_logProxy", i), h["default"].addTarget("_logSetLevelProxy", i.setLevel), t.exports = r["default"]
            }, {
                "./thread": 255,
                "./version": 257,
                "./worker_broker": 258,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/to-consumable-array": 25
            }],
            252: [function (e, t, r) {
                "use strict";

                function n(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) r[i - 1] = arguments[i];
                    for (var o = 0; o < r.length; o++) {
                        var a = r[o];
                        if (a)
                            for (var s in a) {
                                var l = a[s];
                                null === l || "object" != typeof l || Array.isArray(l) ? void 0 !== l && (e[s] = l) : e[s] = null === e[s] || "object" != typeof e[s] || Array.isArray(e[s]) ? n({}, l) : n(e[s], l)
                            }
                    }
                    return e
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r["default"] = n, t.exports = r["default"]
            }, {}],
            253: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = e("../vector"),
                    s = o(a),
                    l = function () {
                        function e(t, r, n, o, a) {
                            i(this, e), this.dimension = [o, a], this.angle = n, this.centroid = [t, r], this.quad = [], this.axes = [], this.update()
                        }
                        return n(e, [{
                            key: "move",
                            value: function (e, t) {
                                this.centroid = [e, t], this.update()
                            }
                        }, {
                            key: "getExtent",
                            value: function () {
                                for (var e = 1e6, t = [e, e, -e, -e], r = 0; 4 > r; ++r) t[0] = Math.min(this.quad[r][0], t[0]), t[1] = Math.min(this.quad[r][1], t[1]), t[2] = Math.max(this.quad[r][0], t[2]), t[3] = Math.max(this.quad[r][1], t[3]);
                                return t
                            }
                        }, {
                            key: "perpAxes",
                            value: function () {
                                this.axes[0] = s["default"].normalize(s["default"].sub(this.quad[2], this.quad[3])), this.axes[1] = s["default"].normalize(s["default"].sub(this.quad[2], this.quad[1]))
                            }
                        }, {
                            key: "update",
                            value: function () {
                                var e = [Math.cos(this.angle), Math.sin(this.angle)],
                                    t = [-Math.sin(this.angle), Math.cos(this.angle)];
                                e = s["default"].mult(e, this.dimension[0] / 2), t = s["default"].mult(t, this.dimension[1] / 2), this.quad[0] = s["default"].sub(s["default"].sub(this.centroid, e), t), this.quad[1] = s["default"].sub(s["default"].add(this.centroid, e), t), this.quad[2] = s["default"].add(s["default"].add(this.centroid, e), t), this.quad[3] = s["default"].add(s["default"].sub(this.centroid, e), t), this.perpAxes()
                            }
                        }], [{
                            key: "projectToAxis",
                            value: function (e, t) {
                                for (var r = 1e6, n = r, i = -r, o = e.quad, a = 0; 4 > a; ++a) {
                                    var l = s["default"].dot(o[a], t);
                                    n = Math.min(n, l), i = Math.max(i, l)
                                }
                                return [n, i]
                            }
                        }, {
                            key: "axisCollide",
                            value: function (t, r, n) {
                                for (var i = 0; 2 > i; ++i) {
                                    var o = e.projectToAxis(t, n[i]),
                                        a = e.projectToAxis(r, n[i]);
                                    if (a[0] > o[1] || a[1] < o[0]) return !1
                                }
                                return !0
                            }
                        }, {
                            key: "intersect",
                            value: function (t, r) {
                                return e.axisCollide(t, r, t.axes) && e.axisCollide(t, r, r.axes)
                            }
                        }]), e
                    }();
                r["default"] = l, t.exports = r["default"]
            }, {
                "../vector": 259,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23
            }],
            254: [function (e, t, r) {
                "use strict";

                function n(e) {
                    var t = new i;
                    return o(e, {
                        subscribe: function (e) {
                            t.add(e)
                        },
                        unsubscribe: function (e) {
                            t["delete"](e)
                        },
                        unsubscribeAll: function () {
                            t.clear()
                        },
                        trigger: function (e) {
                            var r = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), l = 1; o > l; l++) s[l - 1] = arguments[l];
                                for (var u, c = a(t); !(r = (u = c.next()).done); r = !0) {
                                    var f = u.value;
                                    "function" == typeof f[e] && f[e].apply(f, s)
                                }
                            } catch (h) {
                                n = !0, i = h
                            } finally {
                                try {
                                    !r && c["return"] && c["return"]()
                                } finally {
                                    if (n) throw i
                                }
                            }
                        }
                    })
                }
                var i = e("babel-runtime/core-js/set")["default"],
                    o = e("babel-runtime/core-js/object/assign")["default"],
                    a = e("babel-runtime/core-js/get-iterator")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r["default"] = n, t.exports = r["default"]
            }, {
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/object/assign": 6,
                "babel-runtime/core-js/set": 15
            }],
            255: [function (e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = {};
                r["default"] = n;
                try {
                    window.document !== HTMLDocument && (n.is_worker = !1, n.is_main = !0)
                } catch (i) {
                    void 0 !== self && (n.is_worker = !0, n.is_main = !1, self.window = {
                        document: {}
                    }, self.document = self.window.document)
                }
                t.exports = r["default"]
            }, {}],
            256: [function (_dereq_, module, exports) {
                "use strict";
                var _Object$keys = _dereq_("babel-runtime/core-js/object/keys")["default"],
                    _Promise = _dereq_("babel-runtime/core-js/promise")["default"],
                    _getIterator = _dereq_("babel-runtime/core-js/get-iterator")["default"],
                    _Math$log2 = _dereq_("babel-runtime/core-js/math/log2")["default"],
                    _regeneratorRuntime = _dereq_("babel-runtime/regenerator")["default"],
                    _interopRequireDefault = _dereq_("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
                var _thread = _dereq_("./thread"),
                    _thread2 = _interopRequireDefault(_thread),
                    _log = _dereq_("./log"),
                    _log2 = _interopRequireDefault(_log),
                    _geo = _dereq_("../geo"),
                    _geo2 = _interopRequireDefault(_geo),
                    _jsYaml = _dereq_("js-yaml"),
                    _jsYaml2 = _interopRequireDefault(_jsYaml),
                    Utils;
                exports["default"] = Utils = {}, Utils.addBaseURL = function (e, t) {
                    if (e) {
                        if ("//" === e.substr(0, 2)) e = window.location.protocol + e;
                        else if (e.search(/^(http|https|data|blob):/) < 0) {
                            var r, n = "/" !== e[0];
                            if (t ? (r = document.createElement("a"), r.href = t) : r = window.location, n) {
                                var i = r.href.match(/([^\#]+)/);
                                i = i && i.length > 1 ? i[0] : "", e = i + e
                            } else if (r.origin) e = r.origin + "/" + e;
                            else {
                                var o = e.match(/^((http|https|data|blob):\/\/[^\/]*\/)/);
                                o = o && o.length > 1 ? o[0] : "", e = o + e
                            }
                        }
                        return e
                    }
                }, Utils.pathForURL = function (e) {
                    return e && -1 === e.search(/^(data|blob):/) ? e.substr(0, e.lastIndexOf("/") + 1) || "./" : "./"
                }, Utils.addParamsToURL = function (e, t) {
                    if (!t || 0 === _Object$keys(t).length) return e;
                    var r = e.indexOf("?"),
                        n = e.indexOf("#"),
                        i = "";
                    n > -1 && (i = e.slice(n), e = e.slice(0, n)), -1 === r && (r = e.length, e += "?"), r++;
                    var o = "";
                    for (var a in t) o += a + "=" + t[a] + "&";
                    return e = e.slice(0, r) + o + e.slice(r) + i
                }, Utils.isSafari = function () {
                    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                }, Utils._createObjectURL = void 0, Utils.createObjectURL = function (e) {
                    return void 0 === Utils._createObjectURL && (Utils._createObjectURL = window.URL && window.URL.createObjectURL || window.webkitURL && window.webkitURL.createObjectURL, "function" != typeof Utils._createObjectURL && (Utils._createObjectURL = null, _log2["default"]("warn", "window.URL.createObjectURL (or vendor prefix) not found, unable to create local blob URLs"))), Utils._createObjectURL ? Utils._createObjectURL(e) : e
                }, Utils.io = function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? 6e4 : arguments[1],
                        r = arguments.length <= 2 || void 0 === arguments[2] ? "text" : arguments[2],
                        n = arguments.length <= 3 || void 0 === arguments[3] ? "GET" : arguments[3],
                        i = (arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4], new XMLHttpRequest),
                        o = new _Promise(function (o, a) {
                            i.open(n, e, !0), i.timeout = t, i.responseType = r, i.onload = function () {
                                200 === i.status ? o(["text", "json"].indexOf(i.responseType) > -1 ? i.responseText : i.response) : a(Error("Request error with a status of " + i.statusText))
                            }, i.onerror = function (e) {
                                a(Error("There was a network error" + e.toString()))
                            }, i.ontimeout = function (e) {
                                a(Error("timeout " + e.toString()))
                            }, i.send()
                        });
                    return Object.defineProperty(o, "request", {
                        value: i
                    }), o
                }, Utils.parseResource = function (e) {
                    var t;
                    try {
                        t = _jsYaml2["default"].safeLoad(e, {
                            json: !0
                        })
                    } catch (r) {
                        throw r
                    }
                    return t
                }, Utils.loadResource = function (e) {
                    return new _Promise(function (t, r) {
                        "string" == typeof e ? Utils.io(e).then(function (e) {
                            try {
                                var n = Utils.parseResource(e);
                                t(n)
                            } catch (i) {
                                r(i)
                            }
                        }, r) : t(e)
                    })
                }, Utils.requestAnimationFramePolyfill = function () {
                    "function" != typeof window.requestAnimationFrame && (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                        setTimeout(e, 1e3 / 60)
                    })
                }, Utils.serializeWithFunctions = function (e) {
                    var t = JSON.stringify(e, function (e, t) {
                        return "function" == typeof t ? t.toString() : t
                    });
                    return t
                }, Utils.deserializeWithFunctions = function (e, t) {
                    var r = JSON.parse(e);
                    return r = Utils.stringsToFunctions(r, t)
                }, Utils.stringsToFunctions = function (e, t) {
                    if ("string" == typeof e) e = Utils.stringToFunction(e, t);
                    else if (null != e && "object" == typeof e)
                        for (var r in e) e[r] = Utils.stringsToFunctions(e[r], t);
                    return e
                }, Utils.stringToFunction = function (val, wrap) {
                    if ("string" == typeof val && null != val.match(/^\s*function\s*\w*\s*\([\s\S]*\)\s*\{[\s\S]*\}/m)) {
                        var f;
                        try {
                            return eval("function" == typeof wrap ? "f = " + wrap(val) : "f = " + val), f
                        } catch (e) {
                            return val
                        }
                    }
                    return val
                }, Utils.use_high_density_display = !0, Utils.updateDevicePixelRatio = function () {
                    var e = Utils.device_pixel_ratio;
                    return Utils.device_pixel_ratio = Utils.use_high_density_display && window.devicePixelRatio || 1, Utils.device_pixel_ratio !== e
                }, _thread2["default"].is_main && Utils.updateDevicePixelRatio(), Utils.findCurrentURL = function () {
                    for (var e = document.currentScript, t = arguments.length, r = Array(t), n = 0; t > n; n++) r[n] = arguments[n];
                    if (e) return e.src;
                    if (Array.isArray(r))
                        for (var i = document.getElementsByTagName("script"), o = 0; o < i.length; o++) {
                            var a = !0,
                                s = !1,
                                l = void 0;
                            try {
                                for (var u, c = _getIterator(r); !(a = (u = c.next()).done); a = !0) {
                                    var f = u.value;
                                    if (i[o].src.indexOf(f) > -1) return i[o].src
                                }
                            } catch (h) {
                                s = !0, l = h
                            } finally {
                                try {
                                    !a && c["return"] && c["return"]()
                                } finally {
                                    if (s) throw l
                                }
                            }
                        }
                }, Utils.isPowerOf2 = function (e) {
                    return 0 === (e & e - 1)
                }, Utils.nextPowerOf2 = function (e) {
                    return Math.pow(2, Math.ceil(_Math$log2(e)))
                }, Utils.interpolate = function (e, t, r) {
                    if (!Array.isArray(t) || !Array.isArray(t[0])) return t;
                    if (t.length < 1) return t;
                    var n, i, o, a, s, l;
                    if (e <= t[0][0]) a = t[0][1], "function" == typeof r && (a = r(a));
                    else if (e >= t[t.length - 1][0]) a = t[t.length - 1][1], "function" == typeof r && (a = r(a));
                    else
                        for (var u = 0; u < t.length - 1; u++)
                            if (e >= t[u][0] && e < t[u + 1][0]) {
                                if (n = t[u][0], i = t[u + 1][0], Array.isArray(t[u][1])) {
                                    a = [];
                                    for (var c = 0; c < t[u][1].length; c++) "function" == typeof r ? (s = r(t[u][1][c]), l = r(t[u + 1][1][c]), o = l - s, a[c] = o * (e - n) / (i - n) + s) : (o = t[u + 1][1][c] - t[u][1][c], a[c] = o * (e - n) / (i - n) + t[u][1][c])
                                } else "function" == typeof r ? (s = r(t[u][1]), l = r(t[u + 1][1]), o = l - s, a = o * (e - n) / (i - n) + s) : (o = t[u + 1][1] - t[u][1], a = o * (e - n) / (i - n) + t[u][1]);
                                break
                            } return a
                }, Utils.entries = _regeneratorRuntime.mark(function e(t) {
                    var r, n, i, o, a, s;
                    return _regeneratorRuntime.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            r = !0, n = !1, i = void 0, e.prev = 3, o = _getIterator(_Object$keys(t));
                        case 5:
                            if (r = (a = o.next()).done) {
                                e.next = 12;
                                break
                            }
                            return s = a.value, e.next = 9, [s, t[s]];
                        case 9:
                            r = !0, e.next = 5;
                            break;
                        case 12:
                            e.next = 18;
                            break;
                        case 14:
                            e.prev = 14, e.t0 = e["catch"](3), n = !0, i = e.t0;
                        case 18:
                            e.prev = 18, e.prev = 19, !r && o["return"] && o["return"]();
                        case 21:
                            if (e.prev = 21, !n) {
                                e.next = 24;
                                break
                            }
                            throw i;
                        case 24:
                            return e.finish(21);
                        case 25:
                            return e.finish(18);
                        case 26:
                        case "end":
                            return e.stop()
                        }
                    }, e, this, [
                        [3, 14, 18, 26],
                        [19, , 21, 25]
                    ])
                }), Utils.values = _regeneratorRuntime.mark(function t(e) {
                    var r, n, i, o, a, s;
                    return _regeneratorRuntime.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                        case 0:
                            r = !0, n = !1, i = void 0, t.prev = 3, o = _getIterator(_Object$keys(e));
                        case 5:
                            if (r = (a = o.next()).done) {
                                t.next = 12;
                                break
                            }
                            return s = a.value, t.next = 9, e[s];
                        case 9:
                            r = !0, t.next = 5;
                            break;
                        case 12:
                            t.next = 18;
                            break;
                        case 14:
                            t.prev = 14, t.t0 = t["catch"](3), n = !0, i = t.t0;
                        case 18:
                            t.prev = 18, t.prev = 19, !r && o["return"] && o["return"]();
                        case 21:
                            if (t.prev = 21, !n) {
                                t.next = 24;
                                break
                            }
                            throw i;
                        case 24:
                            return t.finish(21);
                        case 25:
                            return t.finish(18);
                        case 26:
                        case "end":
                            return t.stop()
                        }
                    }, t, this, [
                        [3, 14, 18, 26],
                        [19, , 21, 25]
                    ])
                }), Utils.recurseEntries = _regeneratorRuntime.mark(function r(e) {
                    var t, n, i, o, a, s;
                    return _regeneratorRuntime.wrap(function (r) {
                        for (;;) switch (r.prev = r.next) {
                        case 0:
                            if (e) {
                                r.next = 2;
                                break
                            }
                            return r.abrupt("return");
                        case 2:
                            t = !0, n = !1, i = void 0, r.prev = 5, o = _getIterator(_Object$keys(e));
                        case 7:
                            if (t = (a = o.next()).done) {
                                r.next = 17;
                                break
                            }
                            if (s = a.value, !e[s]) {
                                r.next = 14;
                                break
                            }
                            return r.next = 12, [s, e[s], e];
                        case 12:
                            if ("object" != typeof e[s]) {
                                r.next = 14;
                                break
                            }
                            return r.delegateYield(Utils.recurseEntries(e[s]), "t0", 14);
                        case 14:
                            t = !0, r.next = 7;
                            break;
                        case 17:
                            r.next = 23;
                            break;
                        case 19:
                            r.prev = 19, r.t1 = r["catch"](5), n = !0, i = r.t1;
                        case 23:
                            r.prev = 23, r.prev = 24, !t && o["return"] && o["return"]();
                        case 26:
                            if (r.prev = 26, !n) {
                                r.next = 29;
                                break
                            }
                            throw i;
                        case 29:
                            return r.finish(26);
                        case 30:
                            return r.finish(23);
                        case 31:
                        case "end":
                            return r.stop()
                        }
                    }, r, this, [
                        [5, 19, 23, 31],
                        [24, , 26, 30]
                    ])
                }), Utils.recurseValues = _regeneratorRuntime.mark(function n(e) {
                    var t, r, i, o, a, s;
                    return _regeneratorRuntime.wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (e) {
                                n.next = 2;
                                break
                            }
                            return n.abrupt("return");
                        case 2:
                            t = !0, r = !1, i = void 0, n.prev = 5, o = _getIterator(_Object$keys(e));
                        case 7:
                            if (t = (a = o.next()).done) {
                                n.next = 17;
                                break
                            }
                            if (s = a.value, !e[s]) {
                                n.next = 14;
                                break
                            }
                            return n.next = 12, e[s];
                        case 12:
                            if ("object" != typeof e[s]) {
                                n.next = 14;
                                break
                            }
                            return n.delegateYield(Utils.recurseValues(e[s]), "t0", 14);
                        case 14:
                            t = !0, n.next = 7;
                            break;
                        case 17:
                            n.next = 23;
                            break;
                        case 19:
                            n.prev = 19, n.t1 = n["catch"](5), r = !0, i = n.t1;
                        case 23:
                            n.prev = 23, n.prev = 24, !t && o["return"] && o["return"]();
                        case 26:
                            if (n.prev = 26, !r) {
                                n.next = 29;
                                break
                            }
                            throw i;
                        case 29:
                            return n.finish(26);
                        case 30:
                            return n.finish(23);
                        case 31:
                        case "end":
                            return n.stop()
                        }
                    }, n, this, [
                        [5, 19, 23, 31],
                        [24, , 26, 30]
                    ])
                }), Utils.radToDeg = function (e) {
                    return 180 * e / Math.PI
                }, Utils.toCSSColor = function (e) {
                    return 1 === e[3] ? "rgb(" + e.slice(0, 3).map(function (e) {
                        return Math.round(255 * e)
                    }).join(", ") + ")" : "rgba(" + e.map(function (e, t) {
                        return 3 > t && Math.round(255 * e) || e
                    }).join(", ") + ")"
                }, Utils.pointInTile = function (e) {
                    return e[0] >= 0 && e[1] > -_geo2["default"].tile_scale && e[0] < _geo2["default"].tile_scale && e[1] <= 0
                }, Utils.hashString = function (e) {
                    if (0 === e.length) return 0;
                    for (var t = 0, r = 0, n = e.length; n > r; r++) {
                        var i = e.charCodeAt(r);
                        t = (t << 5) - t + i, t |= 0
                    }
                    return t
                }, Utils.debounce = function (e, t, r) {
                    var n = void 0;
                    return function () {
                        var i = this,
                            o = arguments,
                            a = function () {
                                n = null, r || e.apply(i, o)
                            },
                            s = r && !n;
                        clearTimeout(n), n = setTimeout(a, t), s && e.apply(i, o)
                    }
                }, module.exports = exports["default"]
            }, {
                "../geo": 201,
                "./log": 251,
                "./thread": 255,
                "babel-runtime/core-js/get-iterator": 2,
                "babel-runtime/core-js/math/log2": 5,
                "babel-runtime/core-js/object/keys": 12,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/regenerator": 26,
                "js-yaml": 155
            }],
            257: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/core-js/object/define-properties")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var i;
                r["default"] = i = n({
                    major: 0,
                    minor: 8,
                    patch: 2,
                    pre: !1
                }, {
                    string: {
                        get: function () {
                            return "v" + i.major + "." + i.minor + "." + i.patch
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }), t.exports = r["default"]
            }, {
                "babel-runtime/core-js/object/define-properties": 8
            }],
            258: [function (e, t, r) {
                "use strict";

                function n(e) {
                    var t = [];
                    "string" == typeof e && (t = e.split("."), e = t.pop());
                    for (var r = x, n = 0; n < t.length; n++) {
                        if (!r[t[n]]) return [];
                        r = r[t[n]]
                    }
                    return [e, r]
                }

                function i() {
                    var e = 0,
                        t = new f;
                    p.postMessage = function (e, t) {
                        for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; r > i; i++) n[i - 2] = arguments[i];
                        if (Array.isArray(e)) return h.all(e.map(function (e) {
                            var r;
                            return (r = p).postMessage.apply(r, [e, t].concat(n))
                        }));
                        var o = new h(function (e, r) {
                            b[y] = {
                                method: t,
                                message: n,
                                resolve: e,
                                reject: r
                            }
                        });
                        return e.postMessage(JSON.stringify({
                            type: "main_send",
                            message_id: y,
                            method: t,
                            message: n
                        })), y++, o
                    }, p.addWorker = function (r) {
                        if (!(r instanceof Worker)) throw Error("Worker broker could not add non-Worker object", r);
                        t.set(r, e++), r.addEventListener("message", function (e) {
                            var t = u(e.data),
                                i = t.message_id;
                            if ("worker_reply" === t.type) b[i] && (t.error ? b[i].reject(t.error) : b[i].resolve(t.message), delete b[i]);
                            else if ("worker_send" === t.type && null != i) {
                                var o, a, f, d, m;
                                ! function () {
                                    var e = n(t.method),
                                        u = c(e, 2);
                                    if (o = u[0], a = u[1], !a) throw Error("Worker broker could not dispatch message type " + t.method + " on target " + t.target + " because no object with that name is registered on main thread");
                                    if (f = "function" == typeof a[o] && a[o], !f) throw Error("Worker broker could not dispatch message type " + t.method + " on target " + t.target + " because object has no method with that name");
                                    try {
                                        d = f.apply(a, t.message)
                                    } catch (g) {
                                        m = g
                                    }
                                    var v = void 0,
                                        y = [];
                                    d instanceof h ? d.then(function (e) {
                                        e instanceof p.returnWithTransferables && (y = e.transferables, e = e.value), v = {
                                            type: "main_reply",
                                            message_id: i,
                                            message: e
                                        }, v = l(v, y), r.postMessage(v, y.map(function (e) {
                                            return e.object
                                        })), s(y), y.length > 0 && _["default"]("trace", "'" + o + "' transferred " + y.length + " objects to worker thread")
                                    }, function (e) {
                                        r.postMessage({
                                            type: "main_reply",
                                            message_id: i,
                                            error: e instanceof Error ? e.message + ": " + e.stack : e
                                        })
                                    }) : (d instanceof p.returnWithTransferables && (y = d.transferables, d = d.value), v = {
                                        type: "main_reply",
                                        message_id: i,
                                        message: d,
                                        error: m instanceof Error ? m.message + ": " + m.stack : m
                                    }, v = l(v, y), r.postMessage(v, y.map(function (e) {
                                        return e.object
                                    })), s(y), y.length > 0 && _["default"]("trace", "'" + o + "' transferred " + y.length + " objects to worker thread"))
                                }()
                            }
                        })
                    }, p.removeWorker = function (e) {
                        if (!t.has(e)) throw Error("Worker broker could not remove unregistered object", e);
                        t["delete"](e)
                    }, p.getMessages = function () {
                        return b
                    }, p.getMessageId = function () {
                        return y
                    }
                }

                function o() {
                    p.postMessage = function (e) {
                        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; t > n; n++) r[n - 1] = arguments[n];
                        var i = new h(function (t, n) {
                            b[y] = {
                                method: e,
                                message: r,
                                resolve: t,
                                reject: n
                            }
                        });
                        return self.postMessage({
                            type: "worker_send",
                            message_id: y,
                            method: e,
                            message: r
                        }), y++, i
                    }, self.addEventListener("message", function (e) {
                        var t = u(e.data),
                            r = t.message_id;
                        if ("main_reply" === t.type) b[r] && (t.error ? b[r].reject(t.error) : b[r].resolve(t.message), delete b[r]);
                        else if ("main_send" === t.type && null != r) {
                            var i, o, a, f, d;
                            ! function () {
                                var e = n(t.method),
                                    u = c(e, 2);
                                if (i = u[0], o = u[1], !o) throw Error("Worker broker could not dispatch message type " + t.method + " on target " + t.target + " because no object with that name is registered on main thread");
                                if (a = "function" == typeof o[i] && o[i], !a) throw Error("Worker broker could not dispatch message type " + t.method + " because worker has no method with that name");
                                try {
                                    f = a.apply(o, t.message)
                                } catch (m) {
                                    d = m
                                }
                                var g = void 0,
                                    v = [];
                                f instanceof h ? f.then(function (e) {
                                    e instanceof p.returnWithTransferables && (v = e.transferables, e = e.value), g = {
                                        type: "worker_reply",
                                        message_id: r,
                                        message: e
                                    }, g = l(g, v), self.postMessage(g, v.map(function (e) {
                                        return e.object
                                    })), s(v), v.length > 0 && _["default"]("trace", "'" + i + "' transferred " + v.length + " objects to main thread")
                                }, function (e) {
                                    self.postMessage({
                                        type: "worker_reply",
                                        message_id: r,
                                        error: e instanceof Error ? e.message + ": " + e.stack : e
                                    })
                                }) : (f instanceof p.returnWithTransferables && (v = f.transferables, f = f.value), g = {
                                    type: "worker_reply",
                                    message_id: r,
                                    message: f,
                                    error: d instanceof Error ? d.message + ": " + d.stack : d
                                }, g = l(g, v), self.postMessage(g, v.map(function (e) {
                                    return e.object
                                })), s(v), v.length > 0 && _["default"]("trace", "'" + i + "' transferred " + v.length + " objects to main thread"))
                            }()
                        }
                    })
                }

                function a(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1],
                        r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                        n = arguments.length <= 3 || void 0 === arguments[3] ? [] : arguments[3];
                    if (!e) return n;
                    if (Array.isArray(e)) e.forEach(function (t, r) {
                        return a(t, e, r, n)
                    });
                    else if ("object" == typeof e)
                        if (e instanceof ArrayBuffer) n.push({
                            object: e,
                            parent: t,
                            property: r
                        });
                        else if (e.buffer instanceof ArrayBuffer) n.push({
                        object: e.buffer,
                        parent: t,
                        property: r
                    });
                    else
                        for (var i in e) a(e[i], e, i, n);
                    return n
                }

                function s(e) {
                    Array.isArray(e) && e.filter(function (e) {
                        return e.parent && e.property
                    }).forEach(function (e) {
                        return delete e.parent[e.property]
                    })
                }

                function l(e, t) {
                    return 0 === t.length && (e = JSON.stringify(e)), e
                }

                function u(e) {
                    return "string" == typeof e ? JSON.parse(e) : e
                }
                var c = e("babel-runtime/helpers/sliced-to-array")["default"],
                    f = e("babel-runtime/core-js/map")["default"],
                    h = e("babel-runtime/core-js/promise")["default"],
                    d = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var p, m = e("./thread"),
                    g = d(m),
                    v = e("./log"),
                    _ = d(v);
                r["default"] = p = {};
                var y = 0,
                    b = {},
                    x = {};
                p.addTarget = function (e, t) {
                    x[e] = t
                }, p.returnWithTransferables = function (e) {
                    return this instanceof p.returnWithTransferables ? (this.value = e, void(this.transferables = a(this.value))) : new p.returnWithTransferables(e)
                }, g["default"].is_main && i(), g["default"].is_worker && o(), t.exports = r["default"]
            }, {
                "./log": 251,
                "./thread": 255,
                "babel-runtime/core-js/map": 4,
                "babel-runtime/core-js/promise": 14,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24
            }],
            259: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/sliced-to-array")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var i;
                r["default"] = i = {}, i.set = function (e) {
                    for (var t = [], r = e.length, n = 0; r > n; n++) t[n] = e[n];
                    return t
                }, i.neg = function (e) {
                    for (var t = [], r = e.length, n = 0; r > n; n++) t[n] = -1 * e[n];
                    return t
                }, i.add = function (e, t) {
                    for (var r = [], n = Math.min(e.length, t.length), i = 0; n > i; i++) r[i] = e[i] + t[i];
                    return r
                }, i.sub = function (e, t) {
                    for (var r = [], n = Math.min(e.length, t.length), i = 0; n > i; i++) r[i] = e[i] - t[i];
                    return r
                }, i.signed_area = function (e, t, r) {
                    return (t[0] - e[0]) * (r[1] - e[1]) - (r[0] - e[0]) * (t[1] - e[1])
                }, i.mult = function (e, t) {
                    var r, n = [],
                        i = e.length;
                    if ("number" == typeof t)
                        for (r = 0; i > r; r++) n[r] = e[r] * t;
                    else
                        for (i = Math.min(e.length, t.length), r = 0; i > r; r++) n[r] = e[r] * t[r];
                    return n
                }, i.div = function (e, t) {
                    var r, n = [];
                    if ("number" == typeof t)
                        for (r = 0; r < e.length; r++) n[r] = e[r] / t;
                    else {
                        var i = Math.min(e.length, t.length);
                        for (r = 0; i > r; r++) n[r] = e[r] / t[r]
                    }
                    return n
                }, i.perp = function (e, t) {
                    return [t[1] - e[1], e[0] - t[0]]
                }, i.rot = function (e, t) {
                    var r = Math.cos(t),
                        n = Math.sin(t);
                    return [e[0] * r - e[1] * n, e[0] * n + e[1] * r]
                }, i.angle = function (e) {
                    var t = n(e, 2),
                        r = t[0],
                        i = t[1];
                    return Math.atan2(i, r)
                }, i.angleBetween = function (e, t) {
                    var r = i.dot(e, t);
                    return -1 > r && (r = -1), Math.acos(r)
                }, i.isEqual = function (e, t) {
                    for (var r = e.length, n = 0; r > n; n++)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }, i.lengthSq = function (e) {
                    return 2 === e.length ? e[0] * e[0] + e[1] * e[1] : e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
                }, i.length = function (e) {
                    return Math.sqrt(i.lengthSq(e))
                }, i.normalize = function (e) {
                    var t;
                    return 2 === e.length ? (t = e[0] * e[0] + e[1] * e[1], t = Math.sqrt(t), 0 !== t ? [e[0] / t, e[1] / t] : [0, 0]) : (t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], t = Math.sqrt(t), 0 !== t ? [e[0] / t, e[1] / t, e[2] / t] : [0, 0, 0])
                }, i.cross = function (e, t) {
                    return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
                }, i.dot = function (e, t) {
                    for (var r = 0, n = Math.min(e.length, t.length), i = 0; n > i; i++) r += e[i] * t[i];
                    return r
                }, t.exports = r["default"]
            }, {
                "babel-runtime/helpers/sliced-to-array": 24
            }],
            260: [function (e, t, r) {
                "use strict";
                var n = e("babel-runtime/helpers/create-class")["default"],
                    i = e("babel-runtime/helpers/class-call-check")["default"],
                    o = e("babel-runtime/helpers/sliced-to-array")["default"],
                    a = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var s = e("./geo"),
                    l = a(s),
                    u = e("./tile"),
                    c = a(u),
                    f = e("./camera"),
                    h = a(f),
                    d = e("./utils/utils"),
                    p = a(d),
                    m = e("./utils/subscribe"),
                    g = a(m),
                    v = e("./utils/log"),
                    _ = a(v),
                    y = function () {
                        function e(t, r) {
                            i(this, e), g["default"](this), this.scene = t, this.createMatrices(), this.zoom = null, this.center = null, this.bounds = null, this.meters_per_pixel = null, this.panning = !1, this.zooming = !1, this.zoom_direction = 0, this.size = {
                                css: {},
                                device: {},
                                meters: {}
                            }, this.aspect = null, this.buffer = 0, this.continuous_zoom = "boolean" == typeof r.continuousZoom ? r.continuousZoom : !0, this.tile_simplification_level = 0, this.preserve_tiles_within_zoom = 1, this.reset()
                        }
                        return n(e, [{
                            key: "reset",
                            value: function () {
                                this.createCamera()
                            }
                        }, {
                            key: "createCamera",
                            value: function () {
                                var e = this.getActiveCamera();
                                e && (this.camera = h["default"].create(e, this, this.scene.config.cameras[e]), this.camera.updateView())
                            }
                        }, {
                            key: "getActiveCamera",
                            value: function () {
                                if (this.scene.config && this.scene.config.cameras)
                                    for (var e in this.scene.config.cameras)
                                        if (this.scene.config.cameras[e].active) return e
                            }
                        }, {
                            key: "setActiveCamera",
                            value: function (e) {
                                var t = this.getActiveCamera();
                                return this.scene.config.cameras[e] && (this.scene.config.cameras[e].active = !0, t && t !== e && this.scene.config.cameras[t] && delete this.scene.config.cameras[t].active), this.scene.updateConfig({
                                    rebuild: !1
                                }), this.getActiveCamera()
                            }
                        }, {
                            key: "update",
                            value: function () {
                                this.camera.update()
                            }
                        }, {
                            key: "setViewportSize",
                            value: function (e, t) {
                                this.size.css = {
                                    width: e,
                                    height: t
                                }, this.size.device = {
                                    width: Math.round(this.size.css.width * p["default"].device_pixel_ratio),
                                    height: Math.round(this.size.css.height * p["default"].device_pixel_ratio)
                                }, this.aspect = this.size.css.width / this.size.css.height, this.updateBounds()
                            }
                        }, {
                            key: "setView",
                            value: function () {
                                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                    t = e.lng,
                                    r = e.lat,
                                    n = e.zoom,
                                    i = !1;
                                return "number" == typeof t && "number" == typeof r && (this.center && t === this.center.lng && r === this.center.lat || (i = !0, this.center = {
                                    lng: l["default"].wrapLng(t),
                                    lat: r
                                })), "number" == typeof n && n !== this.zoom && (i = !0, this.setZoom(n)), i && this.updateBounds(), i
                            }
                        }, {
                            key: "setZoom",
                            value: function (e) {
                                this.zooming ? this.zooming = !1 : this.last_zoom = this.zoom;
                                var t = this.tile_zoom,
                                    r = this.tileZoom(e);
                                this.continuous_zoom || (e = r), r !== t && (this.zoom_direction = r > t ? 1 : -1), this.last_zoom = this.zoom, this.zoom = e, this.tile_zoom = r, this.updateBounds(), this.scene.requestRedraw()
                            }
                        }, {
                            key: "startZoom",
                            value: function () {
                                this.last_zoom = this.zoom, this.zooming = !0
                            }
                        }, {
                            key: "baseZoom",
                            value: function (e) {
                                return Math.floor(e)
                            }
                        }, {
                            key: "tileZoom",
                            value: function (e) {
                                return this.baseZoom(e) - this.tile_simplification_level
                            }
                        }, {
                            key: "styleZoom",
                            value: function (e) {
                                return this.baseZoom(e) + this.tile_simplification_level
                            }
                        }, {
                            key: "ready",
                            value: function () {
                                return null == this.size.css || null == this.center || null == this.zoom ? !1 : !0
                            }
                        }, {
                            key: "updateBounds",
                            value: function () {
                                if (this.ready()) {
                                    this.meters_per_pixel = l["default"].metersPerPixel(this.zoom), this.size.meters = {
                                        x: this.size.css.width * this.meters_per_pixel,
                                        y: this.size.css.height * this.meters_per_pixel
                                    };
                                    var e = l["default"].latLngToMeters([this.center.lng, this.center.lat]),
                                        t = o(e, 2),
                                        r = t[0],
                                        n = t[1];
                                    this.center.meters = {
                                        x: r,
                                        y: n
                                    }, this.center.tile = l["default"].tileForMeters([this.center.meters.x, this.center.meters.y], this.tile_zoom), this.bounds = {
                                        sw: {
                                            x: this.center.meters.x - this.size.meters.x / 2,
                                            y: this.center.meters.y - this.size.meters.y / 2
                                        },
                                        ne: {
                                            x: this.center.meters.x + this.size.meters.x / 2,
                                            y: this.center.meters.y + this.size.meters.y / 2
                                        }
                                    }, this.scene.tile_manager.updateTilesForView(), this.trigger("move"), this.scene.requestRedraw()
                                }
                            }
                        }, {
                            key: "findVisibleTileCoordinates",
                            value: function () {
                                if (!this.bounds) return [];
                                for (var e = this.tile_zoom, t = l["default"].tileForMeters([this.bounds.sw.x, this.bounds.sw.y], e), r = l["default"].tileForMeters([this.bounds.ne.x, this.bounds.ne.y], e), n = [], i = t.x - this.buffer; i <= r.x + this.buffer; i++)
                                    for (var o = r.y - this.buffer; o <= t.y + this.buffer; o++) n.push(c["default"].coord({
                                        x: i,
                                        y: o,
                                        z: e
                                    }));
                                return n
                            }
                        }, {
                            key: "pruneTilesForView",
                            value: function () {
                                var e = this;
                                if (this.ready()) {
                                    var t = [Math.ceil((Math.floor(this.size.css.width / l["default"].tile_size) + 2) / 2), Math.ceil((Math.floor(this.size.css.height / l["default"].tile_size) + 2) / 2)];
                                    this.scene.tile_manager.removeTiles(function (r) {
                                        if (r.visible || r.proxy) return !1;
                                        if (r.loading && r.style_zoom !== e.tile_zoom) return !0;
                                        var n = Math.abs(r.style_zoom - e.tile_zoom);
                                        if (n > e.preserve_tiles_within_zoom) return !0;
                                        var i = c["default"].coordinateAtZoom(r.coords, e.tile_zoom);
                                        return Math.abs(i.x - e.center.tile.x) - t[0] > e.buffer ? (_["default"]("trace", "View: remove tile " + r.key + " (as " + i.x + "/" + i.y + "/" + e.tile_zoom + ") for being too far out of visible area ***"), !0) : Math.abs(i.y - e.center.tile.y) - t[1] > e.buffer ? (_["default"]("trace", "View: remove tile " + r.key + " (as " + i.x + "/" + i.y + "/" + e.tile_zoom + ") for being too far out of visible area ***"), !0) : !1
                                    })
                                }
                            }
                        }, {
                            key: "createMatrices",
                            value: function () {
                                this.matrices = {}, this.matrices.model = new Float64Array(16), this.matrices.model32 = new Float32Array(16), this.matrices.model_view = new Float64Array(16), this.matrices.model_view32 = new Float32Array(16), this.matrices.normal = new Float64Array(9), this.matrices.normal32 = new Float32Array(9), this.matrices.inverse_normal32 = new Float32Array(9)
                            }
                        }, {
                            key: "setupTile",
                            value: function (e, t) {
                                e.setupProgram(this.matrices, t), this.camera.setupMatrices(this.matrices, t)
                            }
                        }, {
                            key: "setupProgram",
                            value: function (e) {
                                e.uniform("2fv", "u_resolution", [this.size.device.width, this.size.device.height]), e.uniform("3fv", "u_map_position", [this.center.meters.x, this.center.meters.y, this.zoom]), e.uniform("1f", "u_meters_per_pixel", this.meters_per_pixel), e.uniform("1f", "u_device_pixel_ratio", p["default"].device_pixel_ratio), this.camera.setupProgram(e)
                            }
                        }]), e
                    }();
                r["default"] = y, t.exports = r["default"]
            }, {
                "./camera": 200,
                "./geo": 201,
                "./tile": 246,
                "./utils/log": 251,
                "./utils/subscribe": 254,
                "./utils/utils": 256,
                "babel-runtime/helpers/class-call-check": 18,
                "babel-runtime/helpers/create-class": 19,
                "babel-runtime/helpers/interop-require-default": 23,
                "babel-runtime/helpers/sliced-to-array": 24
            }]
        }, {}, [222])(222)