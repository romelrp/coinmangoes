"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [730], {
        77698: function(e, r, o) {
            o.d(r, {
                Z: function() {
                    return g
                }
            });
            var n = o(47568),
                t = o(14924),
                a = o(29815),
                c = o(34051),
                i = o.n(c),
                s = o(85893),
                l = o(58067),
                d = o(51223),
                m = o(67294),
                u = o(8100),
                h = o(97274),
                p = o(29355),
                x = (0, l.k)((function(e) {
                    return {
                        bannerContainer: (0, t.Z)({
                            margin: "0px auto",
                            width: "50%"
                        }, "@media (max-width: ".concat(h.vj, "px)"), {
                            margin: 0,
                            width: "100%"
                        }),
                        bannersContainer: {}
                    }
                }));

            function g() {
                var e = (0, p.n)(),
                    r = (e.height, e.width),
                    o = (0, m.useState)([]),
                    t = o[0],
                    c = o[1],
                    l = (0, m.useState)([!0, !0]),
                    g = (l[0], l[1], x().classes),
                    f = (0, u.ZP)("".concat(h.fw, "/api/banner/get-banners?type=").concat(r >= h.t7 ? "desktop" : "mobile"), (function() {
                        for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                        return fetch.apply(void 0, (0, a.Z)(r)).then((function(e) {
                            return e.json()
                        }))
                    }), {
                        refreshInterval: 18e5
                    }),
                    b = f.data,
                    k = f.error;
                return (0, m.useEffect)((function() {
                    if (b && !k) {
                        c(b.banners)
                    }
                }), [b, r]), (0, s.jsx)(d.M, {
                    cols: t.length > 1 ? 2 : 1,
                    breakpoints: [{
                        maxWidth: h.vj,
                        cols: 1
                    }],
                    className: t.length > 1 ? g.bannersContainer : g.bannerContainer,
                    children: null === t || void 0 === t ? void 0 : t.map((function(e, r) {
                        return (0, s.jsx)("div", {
                            children: (0, s.jsx)("a", {
                                onClick: (0, n.Z)(i().mark((function r() {
                                    var o;
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return o = {
                                                    bannerId: e._id
                                                }, r.next = 3, fetch("/api/banner/click", {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify(o)
                                                });
                                            case 3:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                }))),
                                href: e.url,
                                target: "_balnk",
                                style: {
                                    width: "100%",
                                    height: "auto"
                                },
                                children: (0, s.jsx)("img", {
                                    src: e.image,
                                    style: {
                                        width: "100%",
                                        height: "auto"
                                    }
                                })
                            })
                        }, "banners_".concat(r))
                    }))
                })
            }
        },
        30206: function(e, r, o) {
            o.d(r, {
                Z: function() {
                    return M
                }
            });
            var n = o(47568),
                t = o(26042),
                a = o(69396),
                c = o(34051),
                i = o.n(c),
                s = o(85893),
                l = o(58067),
                d = o(49086),
                m = o(50112),
                u = o(13131),
                h = o(11996),
                p = o(10745),
                x = o(79794),
                g = o(30484),
                f = o(87123),
                b = o(88852),
                k = o(75844),
                y = o(10892),
                v = o(69899),
                j = o(67294),
                S = o(66589),
                I = o(89743),
                w = o(20791),
                C = o(44588),
                N = o(17703),
                Z = o(18820),
                q = o(81252),
                z = o(91511),
                R = o(83616),
                F = o(1604),
                P = o(97274),
                T = o(63110),
                L = o(14204),
                E = o(64366),
                A = (0, l.k)((function(e) {
                    return {
                        mark: {
                            color: "dark" === e.colorScheme ? e.white : e.black,
                            backgroundColor: "transparent",
                            fontWeight: 600
                        },
                        markSm: {
                            color: "dark" === e.colorScheme ? e.white : e.black,
                            backgroundColor: "transparent",
                            fontWeight: 600,
                            fontSize: 14
                        },
                        textGreen: {
                            color: "dark" === e.colorScheme ? e.colors.green[6] : e.colors.green[7],
                            fontSize: "14px",
                            fontWeight: 500
                        },
                        textRed: {
                            color: "dark" === e.colorScheme ? e.colors.red[6] : e.colors.red[7],
                            fontSize: "14px",
                            fontWeight: 500
                        },
                        warningRed: {
                            color: "dark" === e.colorScheme ? e.colors.red[6] : e.colors.red[7],
                            fontSize: "14px",
                            fontWeight: 400
                        },
                        warningOrange: {
                            color: "dark" === e.colorScheme ? e.colors.orange[6] : e.colors.orange[7],
                            fontSize: "14px",
                            fontWeight: 400
                        },
                        profit: {
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[8] : e.colors.gray[0],
                            borderRadius: 4,
                            padding: "2px 8px 2px 5px"
                        },
                        formLink: {
                            fontSize: e.fontSizes.sm,
                            fontWeight: 400,
                            textDecoration: "none",
                            color: "dark" === e.colorScheme ? e.colors.gray[0] : e.colors.dark[9],
                            "&:hover": {
                                color: "dark" === e.colorScheme ? e.colors[e.primaryColor][6] : e.colors[e.primaryColor][8]
                            }
                        },
                        mutedSm: {
                            whiteSpace: "nowrap",
                            color: "dark" === e.colorScheme ? e.colors.dark[3] : e.colors.gray[6]
                        }
                    }
                }));

            function O(e) {
                return (0, s.jsx)(d.m, (0, t.Z)({
                    variant: "unstyled",
                    styles: function(e) {
                        return {
                            tabControl: {
                                backgroundColor: "dark" === e.colorScheme ? e.colors.dark[6] : e.colors.gray[0],
                                color: "dark" === e.colorScheme ? e.colors.dark[0] : e.colors.gray[9],
                                fontSize: 14,
                                fontWeight: 500,
                                padding: "0px 14px",
                                borderRadius: e.radius.sm,
                                height: 36,
                                "&:hover": {
                                    backgroundColor: "dark" === e.colorScheme ? e.colors.dark[7] : e.colors.gray[2]
                                },
                                "&:disabled": {
                                    backgroundColor: "dark" === e.colorScheme ? e.colors.dark[6] : e.colors.gray[0] + " !important",
                                    color: "dark" === e.colorScheme ? e.colors.dark[3] : e.colors.gray[4] + " !important"
                                },
                                margin: 2
                            },
                            tabActive: {
                                backgroundColor: e.colors[e.primaryColor][7],
                                borderColor: e.colors[e.primaryColor][7],
                                color: e.white,
                                cursor: "auto",
                                "&:hover": {
                                    backgroundColor: e.colors[e.primaryColor][7]
                                }
                            },
                            tabsList: {
                                borderRadius: e.radius.sm,
                                display: "inline-flex",
                                backgroundColor: "dark" === e.colorScheme ? e.colors.dark[6] : e.colors.gray[0],
                                padding: 2
                            }
                        }
                    }
                }, e))
            }

            function M(e) {
                var r = e.modalState,
                    o = r.opened,
                    c = r.coinId,
                    l = r.coinName,
                    M = r.coinSymbol,
                    U = r.coinPrice,
                    V = (r.coinlogoTransparency, r.data),
                    B = (0, v.z)(),
                    D = (0, j.useState)(!1),
                    $ = D[0],
                    Q = D[1],
                    W = A().classes,
                    _ = (0, j.useState)(0),
                    G = _[0],
                    H = _[1];
                (0, j.useEffect)((function() {
                    Y.setFieldValue("price", U), Y.setFieldValue("quantity", 0), X.setFieldValue("price", U), X.setFieldValue("quantity", 0), re.setFieldValue("price", U), re.setFieldValue("quantity", V ? V.coin.quantity : 0), H(V ? V.coin.quantity : 0)
                }), [o]);
                var K = F.z.object({
                        quantity: F.z.number().gt(0, {
                            message: "Invalid quantity"
                        }).lte(1e24, {
                            message: "Number too long"
                        }),
                        price: F.z.number().gt(0, {
                            message: "Invalid price"
                        }).lte(1e24, {
                            message: "Number too long"
                        })
                    }),
                    Y = (0, k.c)({
                        schema: (0, y.F)(K),
                        initialValues: {
                            type: "buy",
                            quantity: 0,
                            price: U
                        }
                    }),
                    J = F.z.object({
                        quantity: F.z.number().gt(0, {
                            message: "Invalid quantity"
                        }).lte(G, {
                            message: "Max limit is your coin quantity"
                        }),
                        price: F.z.number().gt(0, {
                            message: "Invalid price"
                        }).lte(1e24, {
                            message: "Number too long"
                        })
                    }),
                    X = (0, k.c)({
                        schema: (0, y.F)(J),
                        initialValues: {
                            type: "sell",
                            quantity: 0,
                            price: U
                        }
                    }),
                    ee = F.z.object({
                        quantity: F.z.number().gt(0, {
                            message: "Invalid quantity"
                        }).lte(1e24, {
                            message: "Number too long"
                        }),
                        price: F.z.number().gt(0, {
                            message: "Invalid price"
                        }).lte(1e24, {
                            message: "Number too long"
                        })
                    }),
                    re = (0, k.c)({
                        schema: (0, y.F)(ee),
                        initialValues: {
                            type: "edit",
                            quantity: 0,
                            price: U
                        }
                    });
                return o && (0, s.jsx)(h.u, {
                    centered: !0,
                    opened: o,
                    onClose: function() {
                        Y.reset(), e.setModalState({
                            opened: !1,
                            coinId: "",
                            coinName: "",
                            coinSymbol: M,
                            coinPrice: 0,
                            coinlogoTransparency: !1,
                            data: !1
                        })
                    },
                    title: (0, s.jsx)(m.x, {
                        weight: 500,
                        children: "Portfolio / ".concat(l)
                    }),
                    zIndex: 1300,
                    children: (0, s.jsxs)(p.x, {
                        mx: "auto",
                        children: [c && (0, s.jsxs)(u.Z, {
                            position: "apart",
                            mb: "xl",
                            children: [(0, s.jsxs)(u.Z, {
                                position: "left",
                                children: [(0, s.jsx)(E.Z, {
                                    width: 32,
                                    height: 32,
                                    src: "https://".concat(P.vZ, ".s3.").concat(P.iA, ".amazonaws.com/coins/").concat(c, ".png"),
                                    fallbackSrc: "/images/coins/logo-fallback-200.png",
                                    alt: l
                                }), (0, s.jsx)(m.x, {
                                    className: W.mark,
                                    children: M
                                })]
                            }), (0, s.jsx)("span", {
                                children: V && V.found && function(e, r, o, n) {
                                    var t = e * r + n - o,
                                        a = t / o * 100;
                                    return t >= 0 ? (0, s.jsxs)("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: [(0, s.jsx)(m.x, {
                                            size: "xs",
                                            style: {
                                                position: "absolute",
                                                right: 10,
                                                bottom: -18
                                            },
                                            className: W.mutedSm,
                                            children: "Total Profit / Loss"
                                        }), (0, s.jsxs)(u.Z, {
                                            position: "left",
                                            spacing: 5,
                                            className: W.profit,
                                            children: [(0, s.jsx)(S.Z, {
                                                size: 14,
                                                className: W.textGreen
                                            }), (0, s.jsxs)(m.x, {
                                                className: W.textGreen,
                                                children: [a.toLocaleString(void 0, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                }), "%"]
                                            }), (0, s.jsxs)(u.Z, {
                                                spacing: 1,
                                                children: [(0, s.jsxs)(m.x, {
                                                    className: W.markSm,
                                                    children: ["+", (0, T.uQ)(t, !1)]
                                                }), (0, s.jsx)(m.x, {
                                                    size: "sm",
                                                    children: "$"
                                                })]
                                            })]
                                        })]
                                    }) : (0, s.jsxs)("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: [(0, s.jsx)(m.x, {
                                            size: "xs",
                                            style: {
                                                position: "absolute",
                                                right: 10,
                                                bottom: -18
                                            },
                                            className: W.mutedSm,
                                            children: "Total Profit / Loss"
                                        }), (0, s.jsxs)(u.Z, {
                                            position: "left",
                                            spacing: 5,
                                            className: W.profit,
                                            children: [(0, s.jsx)(I.Z, {
                                                size: 14,
                                                className: W.textRed
                                            }), (0, s.jsxs)(m.x, {
                                                className: W.textRed,
                                                children: [Math.abs(a).toLocaleString(void 0, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                }), "%"]
                                            }), (0, s.jsxs)(u.Z, {
                                                spacing: 1,
                                                children: [(0, s.jsx)(m.x, {
                                                    className: W.markSm,
                                                    children: (0, T.uQ)(t, !1)
                                                }), (0, s.jsx)(m.x, {
                                                    size: "sm",
                                                    children: "$"
                                                })]
                                            })]
                                        })]
                                    })
                                }(V.coin.quantity, U, V.coin.totalSpent, V.coin.totalReceived)
                            })]
                        }), V && V.found && (0, s.jsx)(p.x, {
                            style: {
                                fontSize: 14
                            },
                            mb: "md",
                            children: (0, s.jsxs)(x.r, {
                                children: [(0, s.jsxs)(x.r.Col, {
                                    span: 4,
                                    children: [(0, s.jsx)("div", {
                                        children: "Balance"
                                    }), (0, s.jsx)("div", {
                                        children: "Avg. Buy Price"
                                    }), (0, s.jsx)("div", {
                                        children: "Total Spent"
                                    }), (0, s.jsx)("div", {
                                        children: "Total Received"
                                    })]
                                }), (0, s.jsxs)(x.r.Col, {
                                    span: 8,
                                    children: [(0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("span", {
                                            className: W.mark,
                                            children: (0, T.uQ)(V.coin.quantity, !1)
                                        }), " ", M]
                                    }), (0, s.jsxs)("div", {
                                        children: ["$", (0, s.jsx)("span", {
                                            className: W.mark,
                                            children: (0, T.uQ)(V.coin.averagePrice)
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        children: ["$", (0, s.jsx)("span", {
                                            className: W.mark,
                                            children: (0, T.uQ)(V.coin.totalSpent, !1)
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        children: ["$", (0, s.jsx)("span", {
                                            className: W.mark,
                                            children: (0, T.uQ)(V.coin.totalReceived, !1)
                                        })]
                                    })]
                                })]
                            })
                        }), (0, s.jsxs)(O, {
                            children: [(0, s.jsx)(d.m.Tab, {
                                label: "Buy",
                                icon: (0, s.jsx)(w.Z, {
                                    size: 14
                                }),
                                children: (0, s.jsxs)("form", {
                                    onSubmit: Y.onSubmit(function() {
                                        var r = (0, n.Z)(i().mark((function r(o) {
                                            var n, d;
                                            return i().wrap((function(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                    case 0:
                                                        return Q(!0), r.next = 3, fetch("/api/portfolio/transaction", {
                                                            method: "POST",
                                                            body: JSON.stringify((0, a.Z)((0, t.Z)({}, o), {
                                                                coinId: c
                                                            })),
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            }
                                                        });
                                                    case 3:
                                                        if (!(n = r.sent).ok) {
                                                            r.next = 8;
                                                            break
                                                        }
                                                        e.setModalState({
                                                            opened: !1,
                                                            type: "",
                                                            title: "",
                                                            redirect: ""
                                                        }), Y.reset(), B.showNotification({
                                                            autoClose: 5e3,
                                                            title: "Success",
                                                            message: "Portfolio / Buy / ".concat(l, " successfully updated!"),
                                                            color: "green",
                                                            icon: (0, s.jsx)(C.Z, {
                                                                size: 16
                                                            }),
                                                            styles: function(e) {
                                                                return {
                                                                    root: {
                                                                        backgroundColor: "dark" === e.colorScheme ? e.black : e.white,
                                                                        borderColor: "dark" === e.colorScheme ? e.black : e.colors.gray[2]
                                                                    }
                                                                }
                                                            }
                                                        }), r.next = 13;
                                                        break;
                                                    case 8:
                                                        return r.next = 10, n.json();
                                                    case 10:
                                                        d = r.sent, Y.setErrors({
                                                            email: d.error
                                                        }), B.showNotification({
                                                            autoClose: 5e3,
                                                            title: "Error",
                                                            message: d.error,
                                                            color: "red",
                                                            icon: (0, s.jsx)(N.Z, {
                                                                size: 16
                                                            }),
                                                            styles: function(e) {
                                                                return {
                                                                    root: {
                                                                        backgroundColor: "dark" === e.colorScheme ? e.black : e.white,
                                                                        borderColor: "dark" === e.colorScheme ? e.black : e.colors.gray[2]
                                                                    }
                                                                }
                                                            }
                                                        });
                                                    case 13:
                                                        Q(!1);
                                                    case 14:
                                                    case "end":
                                                        return r.stop()
                                                }
                                            }), r)
                                        })));
                                        return function(e) {
                                            return r.apply(this, arguments)
                                        }
                                    }()),
                                    children: [(0, s.jsx)(g.Y, (0, a.Z)((0, t.Z)({
                                        mt: "md",
                                        autoComplete: "off",
                                        label: (0, s.jsx)(L.Z, {
                                            children: "Quantity"
                                        }),
                                        placeholder: "0.00",
                                        min: 0,
                                        max: 1e24,
                                        precision: (0, T.cR)(Y.values.quantity)
                                    }, Y.getInputProps("quantity")), {
                                        onFocus: function() {
                                            Y.clearFieldError("quantity")
                                        }
                                    })), (0, s.jsx)(g.Y, (0, a.Z)((0, t.Z)({
                                        mt: "md",
                                        autoComplete: "off",
                                        label: (0, s.jsx)(L.Z, {
                                            children: "Price"
                                        }),
                                        placeholder: "0.00",
                                        min: 0,
                                        max: 1e24,
                                        precision: (0, T.cR)(Y.values.price)
                                    }, Y.getInputProps("price")), {
                                        onFocus: function() {
                                            Y.clearFieldError("price")
                                        }
                                    })), (0, s.jsxs)(m.x, {
                                        size: "md",
                                        mt: "md",
                                        children: ["Total Spent: $", (0, s.jsx)(f.v, {
                                            className: W.mark,
                                            children: Y.values.price && Y.values.quantity ? Y.values.quantity * Y.values.price : 0
                                        })]
                                    }), (0, s.jsx)(u.Z, {
                                        position: "right",
                                        mt: "md",
                                        children: (0, s.jsx)(b.z, {
                                            loading: $,
                                            type: "submit",
                                            children: "Buy"
                                        })
                                    })]
                                })
                            }), (0, s.jsx)(d.m.Tab, {
                                disabled: !(V && V.found && V.coin.quantity),
                                label: "Sell",
                                icon: (0, s.jsx)(Z.Z, {
                                    size: 14
                                }),
                                children: (0, s.jsxs)("form", {
                                    onSubmit: X.onSubmit(function() {
                                        var r = (0, n.Z)(i().mark((function r(o) {
                                            var n, d;
                                            return i().wrap((function(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                    case 0:
                                                        return Q(!0), r.next = 3, fetch("/api/portfolio/transaction", {
                                                            method: "POST",
                                                            body: JSON.stringify((0, a.Z)((0, t.Z)({}, o), {
                                                                coinId: c
                                                            })),
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            }
                                                        });
                                                    case 3:
                                                        if (!(n = r.sent).ok) {
                                                            r.next = 8;
                                                            break
                                                        }
                                                        e.setModalState({
                                                            opened: !1,
                                                            type: "",
                                                            title: "",
                                                            redirect: ""
                                                        }), X.reset(), B.showNotification({
                                                            autoClose: 5e3,
                                                            title: "Success",
                                                            message: "Portfolio / Sell / ".concat(l, " successfully updated!"),
                                                            color: "green",
                                                            icon: (0, s.jsx)(C.Z, {
                                                                size: 16
                                                            }),
                                                            styles: function(e) {
                                                                return {
                                                                    root: {
                                                                        backgroundColor: "dark" === e.colorScheme ? e.black : e.white,
                                                                        borderColor: "dark" === e.colorScheme ? e.black : e.colors.gray[2]
                                                                    }
                                                                }
                                                            }
                                                        }), r.next = 13;
                                                        break;
                                                    case 8:
                                                        return r.next = 10, n.json();
                                                    case 10:
                                                        d = r.sent, X.setErrors({
                                                            email: d.error
                                                        }), B.showNotification({
                                                            autoClose: 5e3,
                                                            title: "Error",
                                                            message: d.error,
                                                            color: "red",
                                                            icon: (0, s.jsx)(N.Z, {
                                                                size: 16
                                                            }),
                                                            styles: function(e) {
                                                                return {
                                                                    root: {
                                                                        backgroundColor: "dark" === e.colorScheme ? e.black : e.white,
                                                                        borderColor: "dark" === e.colorScheme ? e.black : e.colors.gray[2]
                                                                    }
                                                                }
                                                            }
                                                        });
                                                    case 13:
                                                        Q(!1);
                                                    case 14:
                                                    case "end":
                                                        return r.stop()
                                                }
                                            }), r)
                                        })));
                                        return function(e) {
                                            return r.apply(this, arguments)
                                        }
                                    }()),
                                    children: [(0, s.jsx)(g.Y, (0, a.Z)((0, t.Z)({
                                        mt: "md",
                                        autoComplete: "off",
                                        label: (0, s.jsxs)(u.Z, {
                                            position: "apart",
                                            children: [(0, s.jsx)("span", {
                                                children: (0, s.jsx)(L.Z, {
                                                    children: "Quantity"
                                                })
                                            }), (0, s.jsx)("span", {
                                                children: (0, s.jsx)("a", {
                                                    className: W.formLink,
                                                    href: "#",
                                                    onClick: function(e) {
                                                        e.preventDefault(), X.setFieldValue("quantity", G)
                                                    },
                                                    children: "Max"
                                                })
                                            })]
                                        }),
                                        placeholder: "0.00",
                                        min: 0,
                                        max: G || 0,
                                        precision: (0, T.cR)(X.values.quantity)
                                    }, X.getInputProps("quantity")), {
                                        onFocus: function() {
                                            X.clearFieldError("quantity")
                                        },
                                        styles: {
                                            label: {
                                                width: "100%"
                                            }
                                        }
                                    })), (0, s.jsx)(g.Y, (0, a.Z)((0, t.Z)({
                                        mt: "md",
                                        autoComplete: "off",
                                        label: (0, s.jsx)(L.Z, {
                                            children: "Price"
                                        }),
                                        placeholder: "0.00",
                                        min: 0,
                                        max: 1e24,
                                        precision: (0, T.cR)(X.values.price)
                                    }, X.getInputProps("price")), {
                                        onFocus: function() {
                                            X.clearFieldError("price")
                                        }
                                    })), (0, s.jsxs)(m.x, {
                                        size: "md",
                                        mt: "md",
                                        children: ["Total Received: $", (0, s.jsx)(f.v, {
                                            className: W.mark,
                                            children: X.values.price && X.values.quantity ? X.values.quantity * X.values.price : 0
                                        })]
                                    }), (0, s.jsx)(u.Z, {
                                        position: "right",
                                        mt: "md",
                                        children: (0, s.jsx)(b.z, {
                                            loading: $,
                                            type: "submit",
                                            children: "Sell"
                                        })
                                    })]
                                })
                            }), (0, s.jsx)(d.m.Tab, {
                                disabled: !(V && V.found),
                                label: "Edit",
                                icon: (0, s.jsx)(q.Z, {
                                    size: 14
                                }),
                                children: (0, s.jsxs)("form", {
                                    onSubmit: re.onSubmit(function() {
                                        var r = (0, n.Z)(i().mark((function r(o) {
                                            var n, d;
                                            return i().wrap((function(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                    case 0:
                                                        return Q(!0), r.next = 3, fetch("/api/portfolio/transaction", {
                                                            method: "POST",
                                                            body: JSON.stringify((0, a.Z)((0, t.Z)({}, o), {
                                                                coinId: c
                                                            })),
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            }
                                                        });
                                                    case 3:
                                                        if (!(n = r.sent).ok) {
                                                            r.next = 8;
                                                            break
                                                        }
                                                        e.setModalState({
                                                            opened: !1,
                                                            type: "",
                                                            title: "",
                                                            redirect: ""
                                                        }), re.reset(), B.showNotification({
                                                            autoClose: 5e3,
                                                            title: "Success",
                                                            message: "Portfolio / Edit / ".concat(l, " successfully updated!"),
                                                            color: "green",
                                                            icon: (0, s.jsx)(C.Z, {
                                                                size: 16
                                                            }),
                                                            styles: function(e) {
                                                                return {
                                                                    root: {
                                                                        backgroundColor: "dark" === e.colorScheme ? e.black : e.white,
                                                                        borderColor: "dark" === e.colorScheme ? e.black : e.colors.gray[2]
                                                                    }
                                                                }
                                                            }
                                                        }), r.next = 13;
                                                        break;
                                                    case 8:
                                                        return r.next = 10, n.json();
                                                    case 10:
                                                        d = r.sent, re.setErrors({
                                                            email: d.error
                                                        }), B.showNotification({
                                                            autoClose: 5e3,
                                                            title: "Error",
                                                            message: d.error,
                                                            color: "red",
                                                            icon: (0, s.jsx)(N.Z, {
                                                                size: 16
                                                            }),
                                                            styles: function(e) {
                                                                return {
                                                                    root: {
                                                                        backgroundColor: "dark" === e.colorScheme ? e.black : e.white,
                                                                        borderColor: "dark" === e.colorScheme ? e.black : e.colors.gray[2]
                                                                    }
                                                                }
                                                            }
                                                        });
                                                    case 13:
                                                        Q(!1);
                                                    case 14:
                                                    case "end":
                                                        return r.stop()
                                                }
                                            }), r)
                                        })));
                                        return function(e) {
                                            return r.apply(this, arguments)
                                        }
                                    }()),
                                    children: [(0, s.jsx)(u.Z, {
                                        position: "left",
                                        spacing: 5,
                                        mt: "md",
                                        children: (0, s.jsxs)(m.x, {
                                            className: W.warningOrange,
                                            children: [(0, s.jsx)(z.Z, {
                                                size: 14,
                                                className: W.warningOrange,
                                                style: {
                                                    marginBottom: -2
                                                }
                                            }), " ", "Any previous profit / loss stats will be lost."]
                                        })
                                    }), (0, s.jsx)(g.Y, (0, a.Z)((0, t.Z)({
                                        mt: "md",
                                        autoComplete: "off",
                                        label: (0, s.jsx)(L.Z, {
                                            children: "Quantity"
                                        }),
                                        placeholder: "0.00",
                                        min: 0,
                                        max: 1e24,
                                        precision: (0, T.cR)(re.values.quantity)
                                    }, re.getInputProps("quantity")), {
                                        onFocus: function() {
                                            re.clearFieldError("quantity")
                                        }
                                    })), (0, s.jsx)(g.Y, (0, a.Z)((0, t.Z)({
                                        mt: "md",
                                        autoComplete: "off",
                                        label: (0, s.jsx)(L.Z, {
                                            children: "Average price"
                                        }),
                                        placeholder: "0.00",
                                        min: 0,
                                        max: 1e24,
                                        precision: (0, T.cR)(re.values.price)
                                    }, re.getInputProps("price")), {
                                        onFocus: function() {
                                            re.clearFieldError("price")
                                        }
                                    })), (0, s.jsxs)(m.x, {
                                        size: "md",
                                        mt: "md",
                                        children: ["Total: $", (0, s.jsx)(f.v, {
                                            className: W.mark,
                                            children: re.values.price && re.values.quantity ? re.values.quantity * re.values.price : 0
                                        })]
                                    }), (0, s.jsx)(u.Z, {
                                        position: "right",
                                        mt: "md",
                                        children: (0, s.jsx)(b.z, {
                                            loading: $,
                                            type: "submit",
                                            children: "Save"
                                        })
                                    })]
                                })
                            }), (0, s.jsxs)(d.m.Tab, {
                                disabled: !(V && V.found),
                                icon: (0, s.jsx)(R.Z, {
                                    size: 14
                                }),
                                children: [(0, s.jsxs)(m.x, {
                                    size: "md",
                                    mt: "md",
                                    children: ["Remove ", (0, s.jsx)(f.v, {
                                        className: W.mark,
                                        children: l
                                    })]
                                }), (0, s.jsx)(m.x, {
                                    size: "sm",
                                    mt: "md",
                                    children: "Are you sure you want to remove\n                 ".concat(l, " from your portfolio?")
                                }), (0, s.jsx)(u.Z, {
                                    position: "left",
                                    spacing: 5,
                                    mt: "md",
                                    children: (0, s.jsxs)(m.x, {
                                        className: W.warningRed,
                                        children: [(0, s.jsx)(z.Z, {
                                            size: 14,
                                            className: W.warningRed,
                                            style: {
                                                marginBottom: -2
                                            }
                                        }), " ", "Any profit / loss stats associated with this coin will also be removed."]
                                    })
                                }), (0, s.jsx)(u.Z, {
                                    position: "right",
                                    mt: "md",
                                    children: (0, s.jsx)(b.z, {
                                        color: "red",
                                        loading: $,
                                        onClick: (0, n.Z)(i().mark((function r() {
                                            var o, n;
                                            return i().wrap((function(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                    case 0:
                                                        return Q(!0), r.next = 3, fetch("/api/portfolio/transaction", {
                                                            method: "POST",
                                                            body: JSON.stringify({
                                                                type: "remove",
                                                                quantity: 0,
                                                                price: U,
                                                                coinId: c
                                                            }),
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            }
                                                        });
                                                    case 3:
                                                        if (!(o = r.sent).ok) {
                                                            r.next = 8;
                                                            break
                                                        }
                                                        e.setModalState({
                                                            opened: !1,
                                                            type: "",
                                                            title: "",
                                                            redirect: ""
                                                        }), re.reset(), B.showNotification({
                                                            autoClose: 5e3,
                                                            title: "Success",
                                                            message: "".concat(l, " successfully removed from your portfolio!"),
                                                            color: "green",
                                                            icon: (0, s.jsx)(C.Z, {
                                                                size: 16
                                                            }),
                                                            styles: function(e) {
                                                                return {
                                                                    root: {
                                                                        backgroundColor: "dark" === e.colorScheme ? e.black : e.white,
                                                                        borderColor: "dark" === e.colorScheme ? e.black : e.colors.gray[2]
                                                                    }
                                                                }
                                                            }
                                                        }), r.next = 13;
                                                        break;
                                                    case 8:
                                                        return r.next = 10, o.json();
                                                    case 10:
                                                        n = r.sent, re.setErrors({
                                                            email: n.error
                                                        }), B.showNotification({
                                                            autoClose: 5e3,
                                                            title: "Error",
                                                            message: n.error,
                                                            color: "red",
                                                            icon: (0, s.jsx)(N.Z, {
                                                                size: 16
                                                            }),
                                                            styles: function(e) {
                                                                return {
                                                                    root: {
                                                                        backgroundColor: "dark" === e.colorScheme ? e.black : e.white,
                                                                        borderColor: "dark" === e.colorScheme ? e.black : e.colors.gray[2]
                                                                    }
                                                                }
                                                            }
                                                        });
                                                    case 13:
                                                        Q(!1);
                                                    case 14:
                                                    case "end":
                                                        return r.stop()
                                                }
                                            }), r)
                                        }))),
                                        children: "Remove"
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        34841: function(e, r, o) {
            o.d(r, {
                S: function() {
                    return n
                }
            });
            var n = {
                ETH: [{
                    chain: "ARBITRUM",
                    name: "Arbitrum",
                    shortName: "Arbitrum",
                    cmcId: "Arbitrum",
                    cgId: "arbitrum",
                    bq: {
                        network: "ethereum",
                        id: ""
                    },
                    chainId: 42161,
                    explorer: "https://arbiscan.io",
                    rpcURL: "https://arb1.arbitrum.io/rpc",
                    charts: {
                        dextools: "arbitrum",
                        dexscreener: "arbitrum"
                    }
                }, {
                    chain: "AURORA",
                    name: "Aurora",
                    shortName: "Aurora",
                    cmcId: "Aurora",
                    cgId: "aurora",
                    bq: {
                        network: "ethereum",
                        id: ""
                    },
                    chainId: 1313161554,
                    explorer: "https://aurorascan.dev",
                    rpcURL: "https://mainnet.aurora.dev",
                    charts: {
                        dextools: "aurora",
                        dexscreener: "aurora"
                    }
                }, {
                    chain: "AVAX",
                    name: "Avalanche C-Chain",
                    shortName: "Avalanche",
                    cmcId: "Avalanche C-Chain",
                    cgId: "avalanche",
                    bq: {
                        network: "ethereum",
                        id: "avalanche"
                    },
                    chainId: 43114,
                    explorer: "https://snowtrace.io",
                    rpcURL: "https://api.avax.network/ext/bc/C/rpc",
                    charts: {
                        dextools: "avalanche",
                        dexscreener: "avalanche"
                    }
                }, {
                    chain: "BSC",
                    name: "Binance Smart Chain",
                    shortName: "BSC",
                    cmcId: "BNB Smart Chain (BEP20)",
                    cgId: "binance-smart-chain",
                    bq: {
                        network: "ethereum",
                        id: "bsc"
                    },
                    chainId: 56,
                    explorer: "https://bscscan.com",
                    rpcURL: "https://bsc-dataseed1.binance.org:443",
                    charts: {
                        dextools: "bnb",
                        dexscreener: "bsc"
                    }
                }, {
                    chain: "CRO",
                    name: "Cronos",
                    shortName: "Cronos",
                    cmcId: "Cronos",
                    cgId: "cronos",
                    bq: {
                        network: "ethereum",
                        id: ""
                    },
                    chainId: 25,
                    explorer: "https://cronoscan.com",
                    rpcURL: "https://cronosrpc-1.xstaking.sg",
                    charts: {
                        dextools: "cronos",
                        dexscreener: "cronos"
                    }
                }, {
                    chain: "ETH",
                    name: "Ethereum",
                    shortName: "Ethereum",
                    cmcId: "Ethereum",
                    cgId: "ethereum",
                    bq: {
                        network: "ethereum",
                        id: "ethereum"
                    },
                    chainId: 1,
                    explorer: "https://etherscan.io",
                    rpcURL: "https://rpc.ankr.com/eth",
                    charts: {
                        dextools: "ether",
                        dexscreener: "ethereum"
                    }
                }, {
                    chain: "FTM",
                    name: "Fantom",
                    shortName: "Fantom",
                    cmcId: "Fantom",
                    cgId: "fantom",
                    bq: {
                        network: "ethereum",
                        id: "fantom"
                    },
                    chainId: 250,
                    explorer: "https://ftmscan.com",
                    rpcURL: "https://rpc.fantom.network",
                    charts: {
                        dextools: "fantom",
                        dexscreener: "fantom"
                    }
                }, {
                    chain: "ONE",
                    name: "Harmony",
                    shortName: "Harmony",
                    cmcId: "Harmony",
                    cgId: "harmony-shard-0",
                    bq: {
                        network: "ethereum",
                        id: ""
                    },
                    chainId: 16666e5,
                    explorer: "https://explorer.harmony.one",
                    rpcURL: "https://api.harmony.one",
                    charts: {
                        dextools: "harmony",
                        dexscreener: "harmony"
                    }
                }, {
                    chain: "PULSECHAIN",
                    name: "PulseChain",
                    shortName: "PulseChain",
                    cmcId: "Pulsechain",
                    cgId: "pulsechain",
                    bq: {
                        network: "ethereum",
                        id: ""
                    },
                    chainId: 369,
                    explorer: "https://scan.pulsechain.com",
                    rpcURL: "https://rpc.pulsechain.com",
                    charts: {
                        dextools: "pulse",
                        dexscreener: "pulsechain"
                    }
                }, {
                    chain: "KCC",
                    name: "Kucoin Chain",
                    shortName: "Kucoin",
                    cmcId: "KCC",
                    cgId: "kucoin-community-chain",
                    bq: {
                        network: "ethereum",
                        id: ""
                    },
                    chainId: 321,
                    explorer: "https://explorer.kcc.io",
                    rpcURL: "https://rpc-mainnet.kcc.network",
                    charts: {
                        dextools: "kucoin",
                        dexscreener: "kcc"
                    }
                }, {
                    chain: "GLMR",
                    name: "Moonbeam",
                    shortName: "Moonbeam",
                    cmcId: "Moonbeam",
                    cgId: "moonbeam",
                    bq: {
                        network: "ethereum",
                        id: ""
                    },
                    chainId: 1284,
                    explorer: "https://moonscan.io",
                    rpcURL: "https://rpc.api.moonbeam.network",
                    charts: {
                        dextools: "moonbeam",
                        dexscreener: "moonbeam"
                    }
                }, {
                    chain: "MOVR",
                    name: "Moonriver",
                    shortName: "Moonriver",
                    cmcId: "Moonriver",
                    cgId: "moonriver",
                    bq: {
                        network: "ethereum",
                        id: ""
                    },
                    chainId: 1285,
                    explorer: "https://moonriver.moonscan.io",
                    rpcURL: "https://rpc.api.moonriver.moonbeam.network",
                    charts: {
                        dextools: "moonriver",
                        dexscreener: "moonriver"
                    }
                }, {
                    chain: "MATIC",
                    name: "Polygon",
                    shortName: "Polygon",
                    cmcId: "Polygon",
                    cgId: "polygon-pos",
                    bq: {
                        network: "ethereum",
                        id: "matic"
                    },
                    chainId: 137,
                    explorer: "https://polygonscan.com",
                    rpcURL: "https://polygon-rpc.com",
                    charts: {
                        dextools: "polygon",
                        dexscreener: "polygon"
                    }
                }, {
                    chain: "VLX",
                    name: "Velas",
                    shortName: "Velas",
                    cmcId: "Velas",
                    cgId: "velas",
                    bq: {
                        network: "ethereum",
                        id: "velas"
                    },
                    chainId: 106,
                    explorer: "https://explorer.velas.com",
                    rpcURL: "https://evmexplorer.velas.com/rpc",
                    charts: {
                        dextools: "velas",
                        dexscreener: "velas"
                    }
                }, {
                    chain: "DOGE",
                    name: "Dogechain",
                    shortName: "DogeChain",
                    cmcId: "Dogechain",
                    cgId: "dogechain",
                    bq: {
                        network: "ethereum",
                        id: ""
                    },
                    chainId: 2e3,
                    explorer: "https://explorer.dogechain.dog",
                    rpcURL: "https://rpc.dogechain.dog",
                    charts: {
                        dextools: "dogechain",
                        dexscreener: "dogechain"
                    }
                }],
                SOL: [{
                    chain: "SOL",
                    name: "Solana",
                    shortName: "Solana",
                    cmcId: "Solana",
                    cgId: "solana",
                    explorer: "https://explorer.solana.com",
                    bq: {
                        network: "solana",
                        id: ""
                    },
                    charts: {
                        dextools: "",
                        dexscreener: ""
                    }
                }],
                TRX: [{
                    chain: "TRX",
                    name: "Tron",
                    shortName: "Tron",
                    cmcId: "Tron20",
                    cgId: "tron",
                    explorer: "https://tronscan.org",
                    bq: {
                        network: "tron",
                        id: "tron"
                    },
                    charts: {
                        dextools: "",
                        dexscreener: ""
                    }
                }]
            }
        },
        33410: function(e, r, o) {
            function n(e, r) {
                var o = {
                    network: "",
                    chain: "",
                    name: "",
                    cmcId: "",
                    cgId: "",
                    bq: {
                        network: "",
                        id: ""
                    },
                    shortName: "",
                    rpcURL: "",
                    explorer: "",
                    charts: {
                        dextools: "",
                        dexscreener: ""
                    }
                };
                return Object.keys(e).map((function(n, t) {
                    o.network || e[n].find((function(e) {
                        if (e.cmcId === r || e.cgId === r || e.chain === r || e.name === r || e.bq.id === r) return o.network = n, o.chain = e.chain, o.name = e.name, o.cmcId = e.cmcId, o.cgId = e.cgId, o.bq = e.bq, o.shortName = e.shortName, o.rpcURL = e.rpcURL ? e.rpcURL : "", o.explorer = e.explorer ? e.explorer : "", o.charts = e.charts, !0
                    }))
                })), o
            }

            function t(e, r) {
                var o = {
                    network: "",
                    chain: "",
                    name: "",
                    cmcId: "",
                    cgId: "",
                    bq: {
                        network: "",
                        id: ""
                    }
                };
                return Object.keys(e).map((function(n, t) {
                    o.network || e[n].find((function(e) {
                        if (void 0 !== e.chainId && e.chainId === parseInt(r, 16)) return o.network = n, o.chain = e.chain, o.name = e.name, o.cmcId = e.cmcId, o.cgId = e.cgId, o.bq = e.bq, !0
                    }))
                })), o
            }

            function a(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    t = "";
                r && (t = n(e, r).network);
                var a = [];
                return Object.keys(e).map((function(r, n) {
                    t && t !== r || e[r].map((function(e) {
                        a.push({
                            image: "/images/chains/".concat(e.chain, ".svg"),
                            label: o ? e.shortName : e.name,
                            value: e.chain,
                            description: e.chain
                        })
                    }))
                })), a
            }
            o.d(r, {
                zK: function() {
                    return n
                },
                xz: function() {
                    return t
                },
                P2: function() {
                    return a
                }
            })
        },
        63110: function(e, r, o) {
            function n(e) {
                var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return e >= 1e12 && o ? e.toExponential(3) : parseFloat(e + "") >= 1 || parseFloat(e + "") <= -1 ? e.toLocaleString(void 0, {
                    minimumFractionDigits: r ? 2 : 0,
                    maximumFractionDigits: r ? 2 : 0
                }) : e.toLocaleString(void 0, {
                    minimumSignificantDigits: 2,
                    maximumSignificantDigits: 5
                })
            }

            function t(e, r) {
                var o = [{
                    value: 1,
                    symbol: ""
                }, {
                    value: 1e3,
                    symbol: "K"
                }, {
                    value: 1e6,
                    symbol: "M"
                }, {
                    value: 1e9,
                    symbol: "G"
                }, {
                    value: 1e12,
                    symbol: "T"
                }, {
                    value: 1e15,
                    symbol: "P"
                }, {
                    value: 1e18,
                    symbol: "E"
                }].slice().reverse().find((function(r) {
                    return e >= r.value
                }));
                return o ? (e / o.value).toFixed(r).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + o.symbol : "0"
            }

            function a(e) {
                var r = String(e).split(/[eE]/);
                if (1 == r.length) return r[0];
                var o = "",
                    n = e < 0 ? "-" : "",
                    t = r[0].replace(".", ""),
                    a = Number(r[1]) + 1;
                if (a < 0) {
                    for (o = n + "0."; a++;) o += "0";
                    return o + t.replace(/^\-/, "")
                }
                for (a -= t.length; a--;) o += "0";
                return t + o
            }
            o.d(r, {
                cR: function() {
                    return c
                },
                pF: function() {
                    return t
                },
                uQ: function() {
                    return n
                }
            });

            function c(e) {
                var r;
                return Math.floor(e) === e ? 0 : (null === (r = a(e).split(".")[1]) || void 0 === r ? void 0 : r.length) || 0
            }
        }
    }
]);