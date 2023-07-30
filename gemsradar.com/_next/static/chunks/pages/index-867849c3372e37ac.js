(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        48312: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(5075)
            }])
        },
        8600: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return u
                }
            });
            var o = n(85893),
                a = n(58067),
                i = n(60886),
                s = n(49086),
                r = n(11163),
                c = n(61633),
                l = n(73409),
                m = n(1918),
                p = n(23147),
                d = n(10516),
                h = (0, a.k)((function(t) {
                    return {
                        tabActive: {
                            color: "dark" === t.colorScheme ? "#fff!important" : "#000!important",
                            borderBottomColor: "#289776!important"
                        },
                        tab: {
                            fontSize: 16,
                            fontWeight: 500,
                            "&:hover": {
                                color: "dark" === t.colorScheme ? "#fff!important" : "#000!important"
                            }
                        },
                        tabsRoot: {
                            marginBottom: 15
                        }
                    }
                }));

            function u(t) {
                var e = h().classes,
                    n = (0, r.useRouter)();
                return (0, o.jsx)(i.z, {
                    smallerThan: "md",
                    styles: {
                        display: "none"
                    },
                    children: (0, o.jsxs)(s.m, {
                        position: "apart",
                        classNames: {
                            root: e.tabsRoot,
                            tabActive: e.tabActive
                        },
                        onTabChange: function(t, e) {
                            n.push("/".concat(e))
                        },
                        active: t.active ? t.active : 0,
                        children: [(0, o.jsx)(s.m.Tab, {
                            tabKey: "",
                            label: "Top Coins Today",
                            icon: (0, o.jsx)(c.Z, {
                                size: 18
                            }),
                            className: e.tab
                        }), (0, o.jsx)(s.m.Tab, {
                            tabKey: "top",
                            label: "Top Coins All Time",
                            icon: (0, o.jsx)(l.Z, {
                                size: 18
                            }),
                            className: e.tab
                        }), (0, o.jsx)(s.m.Tab, {
                            tabKey: "new",
                            label: "New Listings",
                            icon: (0, o.jsx)(m.Z, {
                                size: 18
                            }),
                            className: e.tab
                        }), (0, o.jsx)(s.m.Tab, {
                            tabKey: "presales",
                            label: "Presales",
                            icon: (0, o.jsx)(p.Z, {
                                size: 18
                            }),
                            className: e.tab
                        }), (0, o.jsx)(s.m.Tab, {
                            tabKey: "marketcap",
                            label: "By Marketcap",
                            icon: (0, o.jsx)(d.Z, {
                                size: 18
                            }),
                            className: e.tab
                        })]
                    })
                })
            }
        },
        95812: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return f
                }
            });
            var o = n(14924),
                a = n(85893),
                i = n(58067),
                s = n(60886),
                r = n(15281),
                c = n(13131),
                l = n(11163),
                m = n(447),
                p = n(61633),
                d = n(73409),
                h = n(1918),
                u = n(23147),
                x = n(10516),
                j = (0, i.k)((function(t) {
                    var e;
                    return {
                        link: {
                            marginTop: 7,
                            display: "block",
                            lineHeight: 1,
                            textDecoration: "none",
                            color: "dark" === t.colorScheme ? t.white : t.black,
                            fontWeight: 500
                        },
                        menuBody: (e = {}, (0, o.Z)(e, t.fn.largerThan("md"), {
                            display: "none"
                        }), (0, o.Z)(e, "width", 220), e),
                        menuItem: {
                            height: 46,
                            fontSize: 16,
                            fontWeight: 500
                        },
                        activeItem: {
                            color: "dark" === t.colorScheme ? "#fff!important" : "#000!important",
                            backgroundColor: "dark" === t.colorScheme ? "#5c5f6659" : "#f8f9fa"
                        },
                        inactiveItem: {},
                        title: {
                            marginBottom: t.spacing.md,
                            color: "dark" === t.colorScheme ? t.white : t.black
                        }
                    }
                }));

            function f(t) {
                var e = j().classes,
                    n = (0, l.useRouter)();
                return (0, a.jsx)(s.z, {
                    largerThan: "md",
                    styles: {
                        display: "none"
                    },
                    children: (0, a.jsxs)(r.v, {
                        trigger: "hover",
                        delay: 0,
                        transitionDuration: 0,
                        placement: "start",
                        gutter: 0,
                        control: (0, a.jsx)("a", {
                            href: "/",
                            className: e.link,
                            onClick: function(t) {
                                return t.preventDefault()
                            },
                            children: (0, a.jsxs)(c.Z, {
                                spacing: 6,
                                children: [(0, a.jsx)("h2", {
                                    className: e.title,
                                    children: t.title
                                }), (0, a.jsx)(m.Z, {
                                    size: 20,
                                    strokeWidth: 3,
                                    style: {
                                        marginTop: 6
                                    }
                                })]
                            })
                        }),
                        classNames: {
                            body: e.menuBody,
                            item: e.menuItem
                        },
                        children: [(0, a.jsx)(r.v.Item, {
                            icon: (0, a.jsx)(p.Z, {
                                size: 16,
                                strokeWidth: 2
                            }),
                            onClick: function() {
                                n.push("/")
                            },
                            className: 0 === t.active ? e.activeItem : e.inactiveItem,
                            children: "Top Coins Today"
                        }), (0, a.jsx)(r.v.Item, {
                            icon: (0, a.jsx)(d.Z, {
                                size: 16,
                                strokeWidth: 2
                            }),
                            onClick: function() {
                                n.push("/top")
                            },
                            className: 1 === t.active ? e.activeItem : e.inactiveItem,
                            children: "Top Coins All Time"
                        }), (0, a.jsx)(r.v.Item, {
                            icon: (0, a.jsx)(h.Z, {
                                size: 16,
                                strokeWidth: 2
                            }),
                            onClick: function() {
                                n.push("/new")
                            },
                            className: 2 === t.active ? e.activeItem : e.inactiveItem,
                            children: "New Listings"
                        }), (0, a.jsx)(r.v.Item, {
                            icon: (0, a.jsx)(u.Z, {
                                size: 16,
                                strokeWidth: 2
                            }),
                            onClick: function() {
                                n.push("/presales")
                            },
                            className: 3 === t.active ? e.activeItem : e.inactiveItem,
                            children: "Presales"
                        }), (0, a.jsx)(r.v.Item, {
                            icon: (0, a.jsx)(x.Z, {
                                size: 16,
                                strokeWidth: 2
                            }),
                            onClick: function() {
                                n.push("/marketcap")
                            },
                            className: 4 === t.active ? e.activeItem : e.inactiveItem,
                            children: "By Market Cap"
                        })]
                    })
                })
            }
        },
        5075: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                __N_SSP: function() {
                    return k
                },
                default: function() {
                    return b
                }
            });
            var o = n(85893),
                a = n(58067),
                i = n(76867),
                s = n(13131),
                r = n(60886),
                c = n(9008),
                l = n.n(c),
                m = n(11163),
                p = n(67294),
                d = n(41664),
                h = n.n(d),
                u = n(77698),
                x = n(56698),
                j = n(50502),
                f = n(8600),
                g = n(95812),
                v = n(97274),
                y = (0, a.k)((function(t) {
                    return {
                        title: {
                            marginBottom: t.spacing.md,
                            color: "dark" === t.colorScheme ? t.white : t.black
                        },
                        link: {
                            padding: "5px 0px 2px 0px",
                            fontSize: 16,
                            fontWeight: 500,
                            color: "dark" === t.colorScheme ? t.colors[t.primaryColor][6] : t.colors[t.primaryColor][7],
                            textDecoration: "none",
                            "&:hover": {
                                textDecoration: "underline"
                            }
                        }
                    }
                })),
                k = !0;

            function b(t) {
                var e = y().classes,
                    n = (0, p.useState)(""),
                    a = n[0],
                    c = n[1],
                    d = (0, p.useState)(""),
                    k = d[0],
                    b = d[1],
                    C = (0, m.useRouter)(),
                    T = "Cryptocurrency Prices, Charts and Portfolio | ".concat(v.WX),
                    w = "Live cryptocurrency prices, crypto charts, market capitalizations, trading volume and portfolio tracker. Discover today\u2019s new coins, top crypto gainers and losers.",
                    N = "".concat(v.fw, "/images/logo/logo.png");
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(l(), {
                        children: [(0, o.jsx)("title", {
                            children: T
                        }), (0, o.jsx)("meta", {
                            name: "description",
                            content: w
                        }), (0, o.jsx)("meta", {
                            property: "og:title",
                            content: T
                        }), (0, o.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, o.jsx)("meta", {
                            property: "og:description",
                            content: w
                        }), (0, o.jsx)("meta", {
                            property: "og:image",
                            content: N
                        }), (0, o.jsx)("meta", {
                            property: "og:image:type",
                            content: "image/png"
                        }), (0, o.jsx)("meta", {
                            property: "og:image:width",
                            content: "400"
                        }), (0, o.jsx)("meta", {
                            property: "og:image:height",
                            content: "400"
                        }), (0, o.jsx)("meta", {
                            property: "og:image:alt",
                            content: "".concat(v.WX, " Logo")
                        }), (0, o.jsx)("meta", {
                            property: "og:url",
                            content: "".concat(v.fw).concat(C.asPath)
                        }), (0, o.jsx)("meta", {
                            property: "og:site_name",
                            content: v.WX
                        }), (0, o.jsx)("meta", {
                            property: "fb:app_id",
                            content: v.Gb
                        }), (0, o.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary"
                        }), (0, o.jsx)("meta", {
                            name: "twitter:site",
                            content: v.v7
                        }), (0, o.jsx)("meta", {
                            name: "twitter:creator",
                            content: v.v7
                        }), (0, o.jsx)("meta", {
                            name: "twitter:title",
                            content: T
                        }), (0, o.jsx)("meta", {
                            name: "twitter:description",
                            content: w
                        }), (0, o.jsx)("meta", {
                            name: "twitter:image",
                            content: N
                        })]
                    }), (0, o.jsxs)(i.W, {
                        size: 1400,
                        children: [(0, o.jsx)(u.Z, {}), (0, o.jsxs)(s.Z, {
                            position: "apart",
                            spacing: 3,
                            children: [(0, o.jsx)("h2", {
                                className: e.title,
                                children: "Promoted"
                            }), (0, o.jsx)(h(), {
                                href: "/advertise",
                                children: (0, o.jsx)("a", {
                                    className: e.link,
                                    children: "Your coin here? Contact us!"
                                })
                            })]
                        }), (0, o.jsx)(j.Z, {
                            promoted: !0,
                            init: t.dataPromoted
                        }), (0, o.jsx)(r.z, {
                            smallerThan: "md",
                            styles: {
                                display: "none"
                            },
                            children: (0, o.jsx)("h2", {
                                className: e.title,
                                children: "Top Coins Today"
                            })
                        }), (0, o.jsx)(g.Z, {
                            active: 0,
                            title: "Top Coins Today"
                        }), (0, o.jsx)(f.Z, {
                            active: 0
                        }), (0, o.jsx)(s.Z, {
                            position: "apart",
                            spacing: 0,
                            children: (0, o.jsx)("div", {
                                children: (0, o.jsx)(x.Z, {
                                    handleChainChange: function(t) {
                                        c(t)
                                    },
                                    handlePlatformChange: function(t) {
                                        b(t)
                                    }
                                })
                            })
                        }), (0, o.jsx)(j.Z, {
                            chain: a,
                            platform: k,
                            init: t.dataMain,
                            field: "votes24"
                        })]
                    })]
                })
            }
        }
    },
    function(t) {
        t.O(0, [183, 299, 608, 730, 154, 774, 888, 179], (function() {
            return e = 48312, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);