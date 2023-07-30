"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [299], {
        27137: function(e, r, t) {
            t.d(r, {
                J: function() {
                    return E
                }
            });
            var o = t(67294),
                n = t(3857),
                s = t(23311),
                i = t(37447),
                a = t(58067),
                l = Object.defineProperty,
                c = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                f = (e, r, t) => r in e ? l(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t,
                m = (e, r) => {
                    for (var t in r || (r = {})) u.call(r, t) && f(e, t, r[t]);
                    if (c)
                        for (var t of c(r)) d.call(r, t) && f(e, t, r[t]);
                    return e
                };
            const p = (e, r) => 100 / (r / e) + "%",
                g = (e, r) => e ? 100 / (r / e) + "%" : void 0;

            function b({
                sizes: e,
                offsets: r,
                theme: t,
                columns: o,
                grow: n
            }) {
                return i.j1.reduce(((s, i) => ("number" === typeof e[i] && (s[`@media (min-width: ${t.breakpoints[i]+1}px)`] = {
                    flexBasis: p(e[i], o),
                    flexShrink: 0,
                    maxWidth: n ? "unset" : p(e[i], o),
                    marginLeft: g(r[i], o)
                }), s)), {})
            }
            var y = (0, a.k)(((e, {
                    gutter: r,
                    grow: t,
                    offset: o,
                    offsetXs: n,
                    offsetSm: s,
                    offsetMd: i,
                    offsetLg: a,
                    offsetXl: l,
                    columns: c,
                    span: u,
                    xs: d,
                    sm: f,
                    md: y,
                    lg: x,
                    xl: v
                }) => ({
                    root: m({
                        boxSizing: "border-box",
                        flexGrow: t ? 1 : 0,
                        padding: e.fn.size({
                            size: r,
                            sizes: e.spacing
                        }) / 2,
                        marginLeft: g(o, c),
                        flexBasis: p(u, c),
                        flexShrink: 0,
                        maxWidth: t ? "unset" : p(u, c)
                    }, b({
                        sizes: {
                            xs: d,
                            sm: f,
                            md: y,
                            lg: x,
                            xl: v
                        },
                        offsets: {
                            xs: n,
                            sm: s,
                            md: i,
                            lg: a,
                            xl: l
                        },
                        theme: e,
                        columns: c,
                        grow: t
                    }))
                }))),
                x = t(10745),
                v = Object.defineProperty,
                h = Object.getOwnPropertySymbols,
                w = Object.prototype.hasOwnProperty,
                k = Object.prototype.propertyIsEnumerable,
                N = (e, r, t) => r in e ? v(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t;
            const z = {
                offset: 0,
                offsetXs: 0,
                offsetSm: 0,
                offsetMd: 0,
                offsetLg: 0,
                offsetXl: 0
            };
            const E = (0, o.forwardRef)(((e, r) => {
                const t = (0, n.Z3)("Col", z, e),
                    {
                        children: i,
                        span: a,
                        offset: l,
                        offsetXs: c,
                        offsetSm: u,
                        offsetMd: d,
                        offsetLg: f,
                        offsetXl: m,
                        xs: p,
                        sm: g,
                        md: b,
                        lg: v,
                        xl: E,
                        className: O,
                        classNames: S,
                        styles: C,
                        id: j
                    } = t,
                    M = ((e, r) => {
                        var t = {};
                        for (var o in e) w.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
                        if (null != e && h)
                            for (var o of h(e)) r.indexOf(o) < 0 && k.call(e, o) && (t[o] = e[o]);
                        return t
                    })(t, ["children", "span", "offset", "offsetXs", "offsetSm", "offsetMd", "offsetLg", "offsetXl", "xs", "sm", "md", "lg", "xl", "className", "classNames", "styles", "id"]),
                    {
                        columns: L,
                        gutter: P,
                        grow: F
                    } = (0, s.n)("Grid.Col"),
                    I = a || L,
                    {
                        classes: R,
                        cx: W
                    } = y({
                        gutter: P,
                        offset: l,
                        offsetXs: c,
                        offsetSm: u,
                        offsetMd: d,
                        offsetLg: f,
                        offsetXl: m,
                        xs: p,
                        sm: g,
                        md: b,
                        lg: v,
                        xl: E,
                        grow: F,
                        columns: L,
                        span: I
                    }, {
                        classNames: S,
                        styles: C,
                        name: "Col"
                    });
                return ! function(e) {
                    return "number" === typeof e && e > 0 && e % 1 === 0
                }(I) || I > L ? null : o.createElement(x.x, ((e, r) => {
                    for (var t in r || (r = {})) w.call(r, t) && N(e, t, r[t]);
                    if (h)
                        for (var t of h(r)) k.call(r, t) && N(e, t, r[t]);
                    return e
                })({
                    className: W(R.root, O),
                    ref: r
                }, M), i)
            }));
            E.displayName = "@mantine/core/Col"
        },
        23311: function(e, r, t) {
            t.d(r, {
                k: function() {
                    return n
                },
                n: function() {
                    return s
                }
            });
            var o = t(55785);
            const [n, s] = (0, o.i)(null)
        },
        79794: function(e, r, t) {
            t.d(r, {
                r: function() {
                    return g
                }
            });
            var o = t(67294),
                n = t(3857),
                s = t(27137),
                i = t(23311),
                a = (0, t(58067).k)(((e, {
                    justify: r,
                    align: t,
                    gutter: o
                }) => ({
                    root: {
                        margin: -e.fn.size({
                            size: o,
                            sizes: e.spacing
                        }) / 2,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: r,
                        alignItems: t
                    }
                }))),
                l = t(10745),
                c = Object.defineProperty,
                u = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable,
                m = (e, r, t) => r in e ? c(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t;
            const p = {
                    gutter: "md",
                    justify: "flex-start",
                    align: "stretch",
                    columns: 12
                },
                g = (0, o.forwardRef)(((e, r) => {
                    const t = (0, n.Z3)("Grid", p, e),
                        {
                            gutter: s,
                            children: c,
                            grow: g,
                            justify: b,
                            align: y,
                            columns: x,
                            className: v,
                            classNames: h,
                            styles: w,
                            id: k
                        } = t,
                        N = ((e, r) => {
                            var t = {};
                            for (var o in e) d.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
                            if (null != e && u)
                                for (var o of u(e)) r.indexOf(o) < 0 && f.call(e, o) && (t[o] = e[o]);
                            return t
                        })(t, ["gutter", "children", "grow", "justify", "align", "columns", "className", "classNames", "styles", "id"]),
                        {
                            classes: z,
                            cx: E
                        } = a({
                            gutter: s,
                            justify: b,
                            align: y
                        }, {
                            classNames: h,
                            styles: w,
                            name: "Grid"
                        });
                    return o.createElement(i.k, {
                        value: {
                            gutter: s,
                            grow: g,
                            columns: x
                        }
                    }, o.createElement(l.x, ((e, r) => {
                        for (var t in r || (r = {})) d.call(r, t) && m(e, t, r[t]);
                        if (u)
                            for (var t of u(r)) f.call(r, t) && m(e, t, r[t]);
                        return e
                    })({
                        className: E(z.root, v),
                        ref: r
                    }, N), c))
                }));
            g.Col = s.J, g.displayName = "@mantine/core/Grid"
        },
        30484: function(e, r, t) {
            t.d(r, {
                Y: function() {
                    return k
                }
            });
            var o = t(67294),
                n = t(9276),
                s = t(83979),
                i = t(80665),
                a = t(50064),
                l = t(3857),
                c = t(98233),
                u = t(58067);
            const d = {
                xs: 20,
                sm: 24,
                md: 30,
                lg: 34,
                xl: 36
            };
            var f = (0, u.k)(((e, {
                radius: r,
                size: t
            }) => ({
                rightSection: {
                    display: "flex",
                    flexDirection: "column",
                    height: "calc(100% - 2px)",
                    margin: 1,
                    marginRight: 1
                },
                control: {
                    margin: 0,
                    position: "relative",
                    flex: "0 0 50%",
                    boxSizing: "border-box",
                    width: e.fn.size({
                        size: t,
                        sizes: d
                    }),
                    padding: 0,
                    WebkitTapHighlightColor: "transparent",
                    borderBottom: `1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,
                    borderLeft: `1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,
                    borderTop: 0,
                    borderRight: 0,
                    backgroundColor: "transparent",
                    marginRight: 1,
                    "&:not(:disabled):hover": {
                        backgroundColor: "dark" === e.colorScheme ? e.colors.dark[6] : e.colors.gray[0]
                    },
                    "&::after": {
                        position: "absolute",
                        top: "calc(50% - 2.5px)",
                        left: "calc(50% - 4.5px)",
                        content: '""',
                        display: "block",
                        width: 0,
                        height: 0,
                        borderStyle: "solid"
                    }
                },
                controlUp: {
                    borderTopRightRadius: e.fn.size({
                        size: r,
                        sizes: e.radius
                    }) - 1,
                    "&::after": {
                        borderWidth: "0 5px 5px 5px",
                        borderColor: `transparent transparent ${"dark"===e.colorScheme?e.colors.dark[0]:e.black} transparent`
                    },
                    "&:disabled::after": {
                        borderBottomColor: "dark" === e.colorScheme ? e.colors.dark[2] : e.colors.gray[5]
                    }
                },
                controlDown: {
                    borderBottomRightRadius: e.fn.size({
                        size: r,
                        sizes: e.radius
                    }) - 1,
                    borderBottom: 0,
                    "&::after": {
                        borderWidth: "5px 5px 0 5px",
                        borderColor: `${"dark"===e.colorScheme?e.colors.dark[0]:e.black} transparent transparent transparent`
                    },
                    "&:disabled::after": {
                        borderTopColor: "dark" === e.colorScheme ? e.colors.dark[2] : e.colors.gray[5]
                    }
                }
            })));
            const m = (e, r, t) => Number.isInteger(e) && e >= 0 && 0 === r ? "numeric" : !Number.isInteger(e) && e >= 0 && 0 !== r ? "decimal" : Number.isInteger(e) && e < 0 && 0 === r || !Number.isInteger(e) && e < 0 && 0 !== r ? "ios" === t ? "text" : "decimal" : "numeric";
            var p = Object.defineProperty,
                g = Object.defineProperties,
                b = Object.getOwnPropertyDescriptors,
                y = Object.getOwnPropertySymbols,
                x = Object.prototype.hasOwnProperty,
                v = Object.prototype.propertyIsEnumerable,
                h = (e, r, t) => r in e ? p(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t;
            const w = {
                    step: 1,
                    hideControls: !1,
                    size: "sm",
                    precision: 0,
                    noClampOnBlur: !1,
                    formatter: e => e || "",
                    parser: e => {
                        if ("-" === e) return e;
                        let r = e;
                        "." === r[0] && (r = `0${e}`);
                        const t = parseFloat(r);
                        return Number.isNaN(t) ? void 0 : e
                    }
                },
                k = (0, o.forwardRef)(((e, r) => {
                    const t = (0, l.Z3)("NumberInput", w, e),
                        {
                            disabled: u,
                            value: p,
                            onChange: k,
                            decimalSeparator: N,
                            min: z,
                            max: E,
                            step: O,
                            stepHoldInterval: S,
                            stepHoldDelay: C,
                            onBlur: j,
                            onFocus: M,
                            hideControls: L,
                            radius: P,
                            variant: F,
                            precision: I,
                            defaultValue: R,
                            noClampOnBlur: W,
                            handlersRef: B,
                            classNames: D,
                            styles: X,
                            size: H,
                            rightSection: $,
                            rightSectionWidth: A,
                            formatter: U,
                            parser: K
                        } = t,
                        T = ((e, r) => {
                            var t = {};
                            for (var o in e) x.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
                            if (null != e && y)
                                for (var o of y(e)) r.indexOf(o) < 0 && v.call(e, o) && (t[o] = e[o]);
                            return t
                        })(t, ["disabled", "value", "onChange", "decimalSeparator", "min", "max", "step", "stepHoldInterval", "stepHoldDelay", "onBlur", "onFocus", "hideControls", "radius", "variant", "precision", "defaultValue", "noClampOnBlur", "handlersRef", "classNames", "styles", "size", "rightSection", "rightSectionWidth", "formatter", "parser"]),
                        {
                            classes: Z,
                            cx: Y,
                            theme: _
                        } = f({
                            radius: P,
                            size: H
                        }, {
                            classNames: D,
                            styles: X,
                            name: "NumberInput"
                        }),
                        [G, J] = (0, o.useState)(!1),
                        [V, q] = (0, o.useState)("number" === typeof p ? p : "number" === typeof R ? R : void 0),
                        Q = "number" === typeof p ? p : V,
                        [ee, re] = (0, o.useState)("number" === typeof Q ? Q.toFixed(I) : ""),
                        te = (0, o.useRef)(),
                        oe = e => {
                            "function" === typeof k && k(e), q(e)
                        },
                        ne = e => {
                            let r = e;
                            return N && (r = r.replace(new RegExp(`\\${N}`, "g"), ".")), K(r)
                        },
                        se = "number" === typeof z ? z : -1 / 0,
                        ie = "number" === typeof E ? E : 1 / 0,
                        ae = (0, o.useRef)();
                    ae.current = () => {
                        var e;
                        if (void 0 === V) oe(null != z ? z : 0), re(null != (e = null == z ? void 0 : z.toFixed(I)) ? e : "0");
                        else {
                            const e = (0, n.u)({
                                value: V + O,
                                min: se,
                                max: ie
                            }).toFixed(I);
                            oe(parseFloat(e)), re(e)
                        }
                    };
                    const le = (0, o.useRef)();
                    le.current = () => {
                        var e;
                        if (void 0 === V) oe(null != z ? z : 0), re(null != (e = null == z ? void 0 : z.toFixed(I)) ? e : "0");
                        else {
                            const e = (0, n.u)({
                                value: V - O,
                                min: se,
                                max: ie
                            }).toFixed(I);
                            oe(parseFloat(e)), re(e)
                        }
                    }, (0, s.k)(B, {
                        increment: ae.current,
                        decrement: le.current
                    }), (0, o.useEffect)((() => {
                        "number" !== typeof p || G || (q(p), re(p.toFixed(I))), void 0 !== R || void 0 !== p || G || (q(p), re(""))
                    }), [p]);
                    const ce = void 0 !== C && void 0 !== S,
                        ue = (0, o.useRef)(null),
                        de = (0, o.useRef)(0),
                        fe = () => {
                            ue.current && window.clearTimeout(ue.current), ue.current = null, de.current = 0
                        },
                        me = e => {
                            e ? ae.current() : le.current(), de.current += 1
                        },
                        pe = e => {
                            if (me(e), ce) {
                                const r = "number" === typeof S ? S : S(de.current);
                                ue.current = window.setTimeout((() => pe(e)), r)
                            }
                        },
                        ge = (e, r) => {
                            e.preventDefault(), te.current.focus(), me(r), ce && (ue.current = window.setTimeout((() => pe(r)), C))
                        };
                    (0, o.useEffect)((() => (fe(), fe)), []);
                    const be = o.createElement("div", {
                        className: Z.rightSection
                    }, o.createElement("button", {
                        type: "button",
                        tabIndex: -1,
                        "aria-hidden": !0,
                        disabled: Q >= E,
                        className: Y(Z.control, Z.controlUp),
                        onMouseDown: e => {
                            ge(e, !0)
                        },
                        onMouseUp: fe,
                        onMouseLeave: fe
                    }), o.createElement("button", {
                        type: "button",
                        tabIndex: -1,
                        "aria-hidden": !0,
                        disabled: Q <= z,
                        className: Y(Z.control, Z.controlDown),
                        onMouseDown: e => {
                            ge(e, !1)
                        },
                        onMouseUp: fe,
                        onMouseLeave: fe
                    }));
                    return o.createElement(c.o, (ye = ((e, r) => {
                        for (var t in r || (r = {})) x.call(r, t) && h(e, t, r[t]);
                        if (y)
                            for (var t of y(r)) v.call(r, t) && h(e, t, r[t]);
                        return e
                    })({}, T), xe = {
                        variant: F,
                        value: ((e = "") => {
                            let r = "number" === typeof e ? String(e) : e;
                            return N && (r = r.replace(/\./g, N)), U(r)
                        })(ee),
                        disabled: u,
                        ref: (0, i.Y)(te, r),
                        type: "text",
                        onChange: e => {
                            const r = e.target.value,
                                t = ne(r);
                            re(t), "" === r || "-" === r ? oe(void 0) : "" !== r.trim() && !Number.isNaN(t) && oe(parseFloat(t))
                        },
                        onBlur: e => {
                            var r;
                            if ("" === e.target.value) re(""), oe(void 0);
                            else {
                                let t = e.target.value;
                                t[0] !== `${N}` && "." !== t[0] || (t = `0${t}`);
                                const o = ne(t),
                                    s = (0, n.u)({
                                        value: parseFloat(o),
                                        min: se,
                                        max: ie
                                    });
                                Number.isNaN(s) ? re(null != (r = null == Q ? void 0 : Q.toFixed(I)) ? r : "") : W || (re(s.toFixed(I)), oe(parseFloat(s.toFixed(I))))
                            }
                            J(!1), "function" === typeof j && j(e)
                        },
                        onFocus: e => {
                            J(!0), "function" === typeof M && M(e)
                        },
                        onKeyDown: e => {
                            !e.repeat || !ce || "ArrowUp" !== e.key && "ArrowDown" !== e.key ? "ArrowUp" === e.key ? ge(e, !0) : "ArrowDown" === e.key && ge(e, !1) : e.preventDefault()
                        },
                        onKeyUp: e => {
                            "ArrowUp" !== e.key && "ArrowDown" !== e.key || fe()
                        },
                        rightSection: $ || (u || L || "unstyled" === F ? null : be),
                        rightSectionWidth: A || _.fn.size({
                            size: H,
                            sizes: d
                        }) + 1,
                        radius: P,
                        max: E,
                        min: z,
                        step: O,
                        size: H,
                        styles: X,
                        classNames: D,
                        inputMode: m(O, I, (0, a.i)()),
                        __staticSelector: "NumberInput"
                    }, g(ye, b(xe))));
                    var ye, xe
                }));
            k.displayName = "@mantine/core/NumberInput"
        },
        50064: function(e, r, t) {
            function o() {
                return "undefined" !== typeof window ? function() {
                    const {
                        userAgent: e
                    } = window.navigator;
                    return /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i.test(e) ? "macos" : /(iPhone)|(iPad)|(iPod)/i.test(e) ? "ios" : /(Win32)|(Win64)|(Windows)|(WinCE)/i.test(e) ? "windows" : /Android/i.test(e) ? "android" : /Linux/i.test(e) ? "linux" : "undetermined"
                }() : "undetermined"
            }
            t.d(r, {
                i: function() {
                    return o
                }
            })
        },
        89743: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return i
                }
            });
            var o = t(22581),
                n = t(67294),
                s = ["size", "color"];

            function i(e) {
                var r = e.size,
                    t = void 0 === r ? 24 : r,
                    i = e.color,
                    a = void 0 === i ? "currentColor" : i,
                    l = (0, o.Kd)(e, s);
                return n.createElement("svg", (0, o.gY)({
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "icon icon-tabler icon-tabler-arrow-down",
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    stroke: a,
                    strokeWidth: "2",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, l), n.createElement("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }), n.createElement("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }), n.createElement("line", {
                    x1: "18",
                    y1: "13",
                    x2: "12",
                    y2: "19"
                }), n.createElement("line", {
                    x1: "6",
                    y1: "13",
                    x2: "12",
                    y2: "19"
                }))
            }
        },
        52507: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return i
                }
            });
            var o = t(22581),
                n = t(67294),
                s = ["size", "color"];

            function i(e) {
                var r = e.size,
                    t = void 0 === r ? 24 : r,
                    i = e.color,
                    a = void 0 === i ? "currentColor" : i,
                    l = (0, o.Kd)(e, s);
                return n.createElement("svg", (0, o.gY)({
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "icon icon-tabler icon-tabler-arrow-up-circle",
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    stroke: a,
                    strokeWidth: "2",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, l), n.createElement("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }), n.createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9"
                }), n.createElement("line", {
                    x1: "12",
                    y1: "8",
                    x2: "8",
                    y2: "12"
                }), n.createElement("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12",
                    y2: "16"
                }), n.createElement("line", {
                    x1: "16",
                    y1: "12",
                    x2: "12",
                    y2: "8"
                }))
            }
        },
        66589: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return i
                }
            });
            var o = t(22581),
                n = t(67294),
                s = ["size", "color"];

            function i(e) {
                var r = e.size,
                    t = void 0 === r ? 24 : r,
                    i = e.color,
                    a = void 0 === i ? "currentColor" : i,
                    l = (0, o.Kd)(e, s);
                return n.createElement("svg", (0, o.gY)({
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "icon icon-tabler icon-tabler-arrow-up",
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    stroke: a,
                    strokeWidth: "2",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, l), n.createElement("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }), n.createElement("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }), n.createElement("line", {
                    x1: "18",
                    y1: "11",
                    x2: "12",
                    y2: "5"
                }), n.createElement("line", {
                    x1: "6",
                    y1: "11",
                    x2: "12",
                    y2: "5"
                }))
            }
        },
        18820: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return i
                }
            });
            var o = t(22581),
                n = t(67294),
                s = ["size", "color"];

            function i(e) {
                var r = e.size,
                    t = void 0 === r ? 24 : r,
                    i = e.color,
                    a = void 0 === i ? "currentColor" : i,
                    l = (0, o.Kd)(e, s);
                return n.createElement("svg", (0, o.gY)({
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "icon icon-tabler icon-tabler-minus",
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    stroke: a,
                    strokeWidth: "2",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, l), n.createElement("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }), n.createElement("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }))
            }
        }
    }
]);