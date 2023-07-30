"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [154], {
        56698: function(e, o, r) {
            r.d(o, {
                Z: function() {
                    return k
                }
            });
            var t = r(26042),
                n = r(69396),
                i = r(99534),
                a = r(85893),
                c = r(67294),
                s = r(13131),
                l = r(42678),
                d = r(50112),
                h = r(79794),
                m = r(83840),
                p = r(6177),
                x = r(33410),
                g = r(34841),
                u = [{
                    image: "/images/platforms/cmc.svg",
                    label: "CoinMarketCap",
                    value: "cmc",
                    description: "CMC"
                }, {
                    image: "/images/platforms/cg.svg",
                    label: "CoinGecko",
                    value: "cg",
                    description: "CG"
                }, {
                    image: "/images/platforms/cmc-cg.svg",
                    label: "CMC & CG",
                    value: "cmc-cg",
                    description: "CMC & CG"
                }],
                f = (0, c.forwardRef)((function(e, o) {
                    var r = e.image,
                        c = e.label,
                        h = e.description,
                        m = (0, i.Z)(e, ["image", "label", "description"]);
                    return (0, a.jsx)("div", (0, n.Z)((0, t.Z)({
                        ref: o
                    }, m), {
                        children: (0, a.jsxs)(s.Z, {
                            noWrap: !0,
                            children: [(0, a.jsx)(l.q, {
                                size: "sm",
                                src: r
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsx)(d.x, {
                                    size: "sm",
                                    children: c
                                }), (0, a.jsx)(d.x, {
                                    size: "xs",
                                    color: "dimmed",
                                    children: h
                                })]
                            })]
                        })
                    }))
                }));

            function k(e) {
                var o = (0, c.useState)(""),
                    r = o[0],
                    t = o[1],
                    n = (0, c.useState)(""),
                    i = n[0],
                    s = n[1];
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(h.r, {
                        children: [(0, a.jsx)(h.r.Col, {
                            span: 6,
                            mb: 8,
                            children: (0, a.jsx)(m.Ph, {
                                clearable: !0,
                                allowDeselect: !1,
                                label: (0, a.jsx)("div", {
                                    children: (0, a.jsx)(d.x, {
                                        size: "xs",
                                        align: "right",
                                        mr: 2,
                                        children: "Network / Chain"
                                    })
                                }),
                                placeholder: "All / Pick one",
                                itemComponent: f,
                                data: (0, x.P2)(g.S, "", !0),
                                maxDropdownHeight: 400,
                                styles: {
                                    root: {
                                        position: "relative"
                                    },
                                    dropdown: {
                                        position: "relative",
                                        left: 0,
                                        right: 0
                                    },
                                    input: {
                                        borderRadius: 4
                                    }
                                },
                                sx: function(e) {
                                    return {
                                        input: {
                                            border: "none",
                                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[6] : e.colors.gray[1]
                                        }
                                    }
                                },
                                filter: function(e, o) {
                                    var r;
                                    return (null === (r = o.label) || void 0 === r ? void 0 : r.toLowerCase().includes(e.toLowerCase().trim())) || o.description.toLowerCase().includes(e.toLowerCase().trim())
                                },
                                onChange: function(o) {
                                    e.handleChainChange(o || ""), t(o || "")
                                },
                                icon: r ? (0, a.jsx)(l.q, {
                                    size: 18,
                                    src: "images/chains/".concat(r, ".svg")
                                }) : (0, a.jsx)(p.Z, {
                                    size: 16
                                })
                            })
                        }), (0, a.jsx)(h.r.Col, {
                            span: 6,
                            children: (0, a.jsx)(m.Ph, {
                                clearable: !0,
                                allowDeselect: !1,
                                label: (0, a.jsx)("div", {
                                    children: (0, a.jsx)(d.x, {
                                        size: "xs",
                                        align: "right",
                                        mr: 2,
                                        children: "Platform"
                                    })
                                }),
                                placeholder: "Platform",
                                itemComponent: f,
                                data: u,
                                maxDropdownHeight: 400,
                                styles: {
                                    root: {
                                        marginBottom: 8
                                    },
                                    input: {
                                        borderRadius: 4
                                    }
                                },
                                sx: function(e) {
                                    return {
                                        input: {
                                            border: "none",
                                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[6] : e.colors.gray[1]
                                        }
                                    }
                                },
                                filter: function(e, o) {
                                    var r;
                                    return (null === (r = o.label) || void 0 === r ? void 0 : r.toLowerCase().includes(e.toLowerCase().trim())) || o.description.toLowerCase().includes(e.toLowerCase().trim())
                                },
                                onChange: function(o) {
                                    e.handlePlatformChange(o || ""), s(o || "")
                                },
                                icon: i ? (0, a.jsx)(l.q, {
                                    size: 18,
                                    src: "images/platforms/".concat(i, ".svg")
                                }) : (0, a.jsx)(p.Z, {
                                    size: 16
                                })
                            })
                        })]
                    })
                })
            }
        },
        50502: function(e, o, r) {
            r.d(o, {
                Z: function() {
                    return se
                }
            });
            var t = r(47568),
                n = r(14924),
                i = r(29815),
                a = r(34051),
                c = r.n(a),
                s = r(85893),
                l = r(67294),
                d = r(8100),
                h = r(30381),
                m = r.n(h),
                p = r(58067),
                x = r(99755),
                g = r(13131),
                u = r(50112),
                f = r(98260),
                k = r(3857),
                j = r(64880),
                b = r(91142),
                v = r(87123),
                w = r(10745),
                S = r(26242),
                y = r(15281),
                C = r(42665),
                N = r(68940),
                z = r(49497),
                R = r(68129),
                Z = r(14341),
                T = r(24869),
                L = r(447),
                _ = r(88766),
                M = r(31694),
                A = r(66589),
                I = r(89743),
                O = r(44588),
                B = r(17703),
                P = r(23147),
                W = r(87655),
                F = r(49246),
                H = r(20791),
                D = r(52507),
                E = r(81252),
                G = r(83616),
                Q = r(50064),
                V = r(18060),
                $ = r(63110),
                q = r(73883),
                J = r(33299),
                U = r(94155),
                Y = r(69899),
                K = r(41664),
                X = r.n(K),
                ee = r(11163),
                oe = r(21643),
                re = r(30206),
                te = r(97274),
                ne = r(64366),
                ie = (0, p.k)((function(e, o, r) {
                    var t;
                    return {
                        th: {
                            padding: "5px 0 !important",
                            height: 42,
                            border: "none !important",
                            backgroundColor: "transparent",
                            "&:first-of-type": {
                                zIndex: 1,
                                boxShadow: "-6px 0 0 ".concat("dark" === e.colorScheme ? e.colors.dark[7] : e.white),
                                backgroundColor: "dark" === e.colorScheme ? "#202126" : e.colors.gray[1],
                                paddingLeft: "72px !important",
                                borderTopLeftRadius: "6px !important",
                                borderBottomLeftRadius: "6px !important",
                                position: "sticky",
                                left: 0,
                                "@media (max-width: 990px)": {
                                    "&:after": {
                                        content: '""',
                                        position: "absolute",
                                        right: -10,
                                        height: "100%",
                                        width: "10px",
                                        bottom: 0,
                                        zIndex: -1,
                                        background: "dark" === e.colorScheme ? "linear-gradient(90deg, rgba(0,0,0,0.125) 0%, rgba(0,0,0,0) 100%)" : "linear-gradient(90deg, rgba(0,0,0,0.035) 0%, rgba(0,0,0,0) 100%)"
                                    }
                                },
                                "@media (max-width: 880px)": {
                                    paddingLeft: "62px !important",
                                    width: "170px !important"
                                }
                            },
                            "&:last-of-type": {
                                zIndex: 1,
                                boxShadow: "6px 0 0 ".concat("dark" === e.colorScheme ? e.colors.dark[7] : e.white),
                                backgroundColor: "dark" === e.colorScheme ? "#202126" : e.colors.gray[1],
                                borderTopRightRadius: "6px !important",
                                borderBottomRightRadius: "6px !important",
                                position: "sticky",
                                right: 0,
                                "@media (max-width: 990px)": {
                                    "&:after": {
                                        content: '""',
                                        position: "absolute",
                                        left: -10,
                                        height: "100%",
                                        width: "10px",
                                        bottom: 0,
                                        zIndex: -1,
                                        background: "dark" === e.colorScheme ? "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.125) 100%)" : "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.035) 100%)"
                                    }
                                }
                            }
                        },
                        thChain: {
                            padding: "5px 0 !important",
                            height: 42,
                            border: "none !important",
                            backgroundColor: "transparent",
                            "@media (max-width: 1080px)": {
                                "& *": {
                                    display: "none"
                                },
                                width: "30px !important"
                            }
                        },
                        thChange: {
                            padding: "5px 0 !important",
                            height: 42,
                            border: "none !important",
                            backgroundColor: "transparent",
                            "@media (max-width: 1240px)": {
                                display: "none"
                            }
                        },
                        tdChangeLg: {
                            textAlign: "right",
                            "@media (max-width: 1240px)": {
                                display: "none"
                            },
                            borderColor: "".concat("dark" === e.colorScheme ? e.colors.dark[5] : e.colors.gray[2], " !important")
                        },
                        thead: {
                            backgroundColor: "dark" === e.colorScheme ? "#202126" : e.colors.gray[1],
                            borderTopLeftRadius: "6px !important",
                            borderBottomLeftRadius: "6px !important",
                            borderTopRightRadius: "6px !important",
                            borderBottomRightRadius: "6px !important"
                        },
                        tr: (t = {
                            height: 66,
                            "&:hover": {
                                backgroundColor: "dark" === e.colorScheme ? "#1d1e22" : "#f8f9fa"
                            }
                        }, (0, n.Z)(t, "&:hover .".concat(r("fix")), {
                            backgroundColor: "dark" === e.colorScheme ? "#1d1e22" : "#f8f9fa"
                        }), (0, n.Z)(t, "&:hover .".concat(r("tdLeft")), {
                            backgroundColor: "dark" === e.colorScheme ? "#1d1e22" : "#f8f9fa"
                        }), (0, n.Z)(t, "&:hover .".concat(r("tdRight")), {
                            backgroundColor: "dark" === e.colorScheme ? "#1d1e22" : "#f8f9fa"
                        }), (0, n.Z)(t, "boxShadow", "inset 1px 0 0px  #000000;"), t),
                        fix: {
                            ref: r("fix"),
                            zIndex: 1,
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
                            position: "sticky",
                            borderColor: "".concat("dark" === e.colorScheme ? e.colors.dark[5] : e.colors.gray[2], " !important"),
                            "&:hover": {
                                backgroundColor: "dark" === e.colorScheme ? "#1d1e22" : "#f8f9fa"
                            },
                            "&:first-of-type": {
                                left: 0,
                                "@media (max-width: 990px)": {
                                    "&:after": {
                                        content: '""',
                                        position: "absolute",
                                        right: -10,
                                        height: "100%",
                                        width: "10px",
                                        bottom: 0,
                                        zIndex: -1,
                                        background: "dark" === e.colorScheme ? "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)" : "linear-gradient(90deg, rgba(0,0,0,0.025) 0%, rgba(0,0,0,0) 100%)"
                                    }
                                }
                            },
                            "&:last-of-type": {
                                textAlign: "right",
                                right: 0,
                                "@media (max-width: 990px)": {
                                    "&:after": {
                                        content: '""',
                                        position: "absolute",
                                        left: -10,
                                        height: "100%",
                                        width: "10px",
                                        bottom: 0,
                                        zIndex: -1,
                                        background: "dark" === e.colorScheme ? "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)" : "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.025) 100%)"
                                    }
                                }
                            }
                        },
                        mainScroll: {
                            "@media (max-width: 990px)": {
                                width: "calc(100vw - 32px) !important"
                            }
                        },
                        tdLeft: {
                            ref: r("tdLeft"),
                            textAlign: "left",
                            position: "sticky",
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
                            borderColor: "".concat("dark" === e.colorScheme ? e.colors.dark[5] : e.colors.gray[2], " !important")
                        },
                        tdLeftResponsive: {
                            ref: r("tdLeft"),
                            textAlign: "left",
                            position: "sticky",
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
                            "@media (max-width: 1080px)": {
                                padding: "10px 10px 10px 0 !important"
                            },
                            borderColor: "".concat("dark" === e.colorScheme ? e.colors.dark[5] : e.colors.gray[2], " !important")
                        },
                        tdRight: {
                            ref: r("tdRight"),
                            textAlign: "right",
                            position: "sticky",
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
                            borderColor: "".concat("dark" === e.colorScheme ? e.colors.dark[5] : e.colors.gray[2], " !important")
                        },
                        link: {
                            margin: "0 !important",
                            padding: "0 !important",
                            lineHeight: 0,
                            textDecoration: "none"
                        },
                        chain: {
                            color: "dark" === e.colorScheme ? e.colors.gray[0] : e.colors.dark[9],
                            fontSize: "14px",
                            "@media (max-width: 1080px)": {
                                display: "none"
                            }
                        },
                        controlLeft: {
                            alignItems: "end",
                            padding: "5px 3px 5px 10px",
                            "&:hover": {
                                borderRadius: 4,
                                backgroundColor: "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
                            }
                        },
                        controlRight: {
                            alignItems: "end",
                            padding: "5px 10px 5px 3px",
                            "&:hover": {
                                borderRadius: 4,
                                backgroundColor: "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
                            }
                        },
                        controlLeftActiveSelected: {
                            alignItems: "end",
                            padding: "5px 3px 5px 10px",
                            borderRadius: 4,
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
                        },
                        controlRightSelected: {
                            alignItems: "end",
                            padding: "5px 10px 5px 3px",
                            borderRadius: 4,
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
                        },
                        icon: {
                            width: 21,
                            height: 21,
                            borderRadius: 21
                        },
                        logo: {
                            width: 42,
                            height: 42,
                            position: "relative",
                            "@media (max-width: 880px)": {
                                width: 32,
                                height: 32
                            }
                        },
                        coinDetails: {
                            width: 130,
                            "@media (max-width: 880px)": {
                                width: 90
                            }
                        },
                        vote: {
                            fontSize: 14,
                            fontWeight: 500,
                            color: "white",
                            width: 50,
                            textAlign: "center",
                            backgroundColor: "dark" === e.colorScheme ? e.colors.teal[8] : e.colors.teal[6],
                            padding: "9px 8px 11px 8px",
                            borderTopRightRadius: 4,
                            borderBottomRightRadius: 4,
                            "&:hover": {
                                cursor: "pointer",
                                backgroundColor: "dark" === e.colorScheme ? e.colors.teal[6] : e.colors.teal[8]
                            }
                        },
                        voteBox: {
                            borderTopLeftRadius: 4,
                            borderBottomLeftRadius: 4,
                            width: 50,
                            border: "1px solid ".concat("dark" === e.colorScheme ? e.colors.dark[5] : e.colors.gray[2]),
                            padding: "1px 8px 3px 8px"
                        },
                        voteText: {
                            color: "dark" === e.colorScheme ? e.colors.gray[0] : e.colors.dark[6],
                            lineHeight: 1.2,
                            fontWeight: 500
                        },
                        voteTextSmall: {
                            lineHeight: 1.2
                        },
                        textHighlight: {
                            fontWeight: 500,
                            color: "dark" === e.colorScheme ? e.colors.gray[0] : e.colors.dark[6],
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            lineHeight: "18px"
                        },
                        textHighlightMuted: {
                            color: "dark" === e.colorScheme ? e.colors.gray[6] : e.colors.dark[2],
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            lineHeight: "18px",
                            backgroundColor: "transparent"
                        },
                        price: {
                            color: "dark" === e.colorScheme ? e.colors.gray[0] : e.colors.dark[9],
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontWeight: 500,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            backgroundColor: "transparent",
                            lineHeight: "18px"
                        },
                        priceGreen: {
                            color: "dark" === e.colorScheme ? e.colors.green[6] : e.colors.green[7],
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontWeight: 500,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            backgroundColor: "transparent",
                            lineHeight: "18px"
                        },
                        priceRed: {
                            color: "dark" === e.colorScheme ? e.colors.red[6] : e.colors.red[7],
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontWeight: 500,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            backgroundColor: "transparent",
                            lineHeight: "18px"
                        },
                        priceMuted: {
                            color: "dark" === e.colorScheme ? e.colors.gray[6] : e.colors.dark[2],
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            backgroundColor: "transparent",
                            lineHeight: "18px"
                        },
                        priceTT: {
                            color: "dark" === e.colorScheme ? e.colors.gray[0] : e.colors.dark[9],
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontWeight: 500,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            backgroundColor: "transparent",
                            lineHeight: "18px",
                            "&:hover": {
                                cursor: "pointer"
                            }
                        },
                        priceTTGreen: {
                            color: "dark" === e.colorScheme ? e.colors.green[6] : e.colors.green[7],
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontWeight: 500,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            backgroundColor: "transparent",
                            lineHeight: "18px",
                            "&:hover": {
                                cursor: "pointer"
                            }
                        },
                        priceTTRed: {
                            color: "dark" === e.colorScheme ? e.colors.red[6] : e.colors.red[7],
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontWeight: 500,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            backgroundColor: "transparent",
                            lineHeight: "18px",
                            "&:hover": {
                                cursor: "pointer"
                            }
                        },
                        launched: {
                            color: "dark" === e.colorScheme ? e.colors.gray[0] : e.colors.dark[9],
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontWeight: 500,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            backgroundColor: "transparent"
                        },
                        notLaunched: {
                            color: "dark" === e.colorScheme ? e.colors.orange[6] : e.colors.orange[7],
                            whiteSpace: "nowrap",
                            fontSize: "14px",
                            fontWeight: 500,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            backgroundColor: "transparent"
                        },
                        contentCenter: {
                            display: "flex",
                            alignContent: "center"
                        },
                        index: {
                            fontSize: "10px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            direction: "rtl",
                            textAlign: "left",
                            color: "dark" === e.colorScheme ? e.colors.gray[6] : e.colors.dark[0]
                        },
                        indexMy: {
                            fontSize: "10px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            direction: "rtl",
                            textAlign: "left",
                            color: "dark" === e.colorScheme ? e.colors[e.primaryColor][6] : e.colors[e.primaryColor][7]
                        },
                        star: {
                            color: "dark" === e.colorScheme ? e.colors.gray[6] : e.colors.dark[2],
                            "&:hover": {
                                color: "dark" === e.colorScheme ? e.colors.yellow[5] : e.colors.yellow[7],
                                cursor: "pointer"
                            }
                        },
                        starFilled: {
                            fill: "dark" === e.colorScheme ? e.colors.yellow[5] : e.colors.yellow[7],
                            color: "dark" === e.colorScheme ? e.colors.yellow[5] : e.colors.yellow[7],
                            cursor: "pointer"
                        },
                        countZero: {
                            background: "transparent",
                            color: "inherit",
                            fontSize: "12px"
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
                        presale: {
                            color: "dark" === e.colorScheme ? e.colors.orange[6] : e.colors.orange[7],
                            fontWeight: 500
                        },
                        dotsButton: {
                            paddingTop: 1,
                            height: 23,
                            width: 14,
                            borderRadius: "7px",
                            "&:hover": {
                                backgroundColor: "dark" === e.colorScheme ? e.colors.dark[9] : e.colors.gray[2]
                            }
                        },
                        dotsButtonActive: {
                            paddingTop: 1,
                            height: 23,
                            width: 14,
                            borderRadius: "7px",
                            backgroundColor: "dark" === e.colorScheme ? e.colors.dark[9] : e.colors.gray[2]
                        },
                        dotsButtonMy: {
                            paddingTop: 1,
                            height: 23,
                            width: 14,
                            borderRadius: "7px",
                            "&:hover": {
                                backgroundColor: "rgb(18, 184, 134, 0.5)"
                            }
                        },
                        dotsButtonActiveMy: {
                            paddingTop: 1,
                            height: 23,
                            width: 14,
                            borderRadius: "7px",
                            backgroundColor: "rgb(18, 184, 134, 0.5)"
                        },
                        skeletonCircle: {
                            "&:after": {
                                borderRadius: "50%"
                            },
                            "&:before": {
                                borderRadius: "50%"
                            }
                        },
                        skeleton: {
                            "&:after": {
                                borderRadius: 4
                            },
                            "&:before": {
                                borderRadius: 4
                            }
                        }
                    }
                }));

            function ae(e) {
                var o = e.children,
                    r = e.reversed,
                    t = e.sorted,
                    n = e.onSort,
                    i = e.position,
                    a = e.width,
                    c = e.classNameTh,
                    l = ie().classes,
                    d = t ? r ? T.Z : L.Z : _.Z;
                return (0, s.jsx)("th", {
                    className: c,
                    style: {
                        textAlign: "left" === i ? "start" : "end",
                        width: a
                    },
                    children: o && (0, s.jsx)(x.k, {
                        onClick: n,
                        className: "left" === i ? t ? l.controlLeftActiveSelected : l.controlLeft : t ? l.controlRightSelected : l.controlRight,
                        children: "left" === i ? (0, s.jsxs)(g.Z, {
                            position: "left",
                            spacing: 2,
                            noWrap: !0,
                            children: [(0, s.jsx)(u.x, {
                                weight: 700,
                                size: "sm",
                                children: o
                            }), (0, s.jsx)(f.M, {
                                className: l.icon,
                                children: (0, s.jsx)(d, {
                                    size: 14
                                })
                            })]
                        }) : (0, s.jsxs)(g.Z, {
                            position: "right",
                            spacing: 2,
                            noWrap: !0,
                            children: [(0, s.jsx)(f.M, {
                                className: l.icon,
                                children: (0, s.jsx)(d, {
                                    size: 14
                                })
                            }), (0, s.jsx)(u.x, {
                                weight: 700,
                                size: "sm",
                                children: o
                            })]
                        })
                    })
                })
            }

            function ce(e, o) {
                var r = o.sortBy;
                return (0, i.Z)(e).sort((function(e, t) {
                    return o.reversed ? "string" === typeof e[r] ? t[r].localeCompare(e[r]) || t.added - e.added : t[r] - e[r] || t.added - e.added : "string" === typeof e[r] ? e[r].localeCompare(t[r]) || e.added - t.added : e[r] - t[r] || e.added - t.added
                }))
            }

            function se(e) {
                var o = e.chain,
                    r = e.platform,
                    n = e.promoted,
                    a = void 0 !== n && n,
                    h = e.wl,
                    p = void 0 !== h && h,
                    T = e.section,
                    L = void 0 === T ? "" : T,
                    _ = e.category,
                    K = void 0 === _ ? "" : _,
                    se = e.reversed,
                    le = void 0 === se || se,
                    de = e.field,
                    he = void 0 === de ? "votes" : de,
                    me = e.init,
                    pe = void 0 === me ? {
                        coins: [],
                        total: 1,
                        chain: "",
                        platform: "",
                        watchlist: []
                    } : me,
                    xe = (0, k.rZ)(),
                    ge = ie().classes,
                    ue = (0, Q.i)(),
                    fe = (0, l.useState)(pe.coins),
                    ke = fe[0],
                    je = fe[1],
                    be = (0, l.useState)(he),
                    ve = be[0],
                    we = be[1],
                    Se = (0, l.useState)(le),
                    ye = Se[0],
                    Ce = Se[1],
                    Ne = (0, l.useState)(-1),
                    ze = Ne[0],
                    Re = Ne[1],
                    Ze = (0, l.useState)([""]),
                    Te = Ze[0],
                    Le = Ze[1],
                    _e = (0, l.useState)([""]),
                    Me = _e[0],
                    Ae = _e[1],
                    Ie = (0, U.e)(),
                    Oe = Ie.watchlist,
                    Be = Ie.setWatchlist,
                    Pe = (0, l.useState)(1),
                    We = Pe[0],
                    Fe = Pe[1],
                    He = (0, l.useState)(1),
                    De = He[0],
                    Ee = He[1],
                    Ge = (0, l.useState)(pe.total),
                    Qe = Ge[0],
                    Ve = Ge[1],
                    $e = (0, q.a)(),
                    qe = ($e.action, $e.setAction),
                    Je = (0, J.useSession)(),
                    Ue = Je.data,
                    Ye = Je.status,
                    Ke = (0, l.useState)(!(pe.coins.length > 0)),
                    Xe = Ke[0],
                    eo = Ke[1],
                    oo = (0, l.useState)(0),
                    ro = oo[0],
                    to = oo[1],
                    no = (0, l.useRef)(!0),
                    io = (0, Y.z)(),
                    ao = (0, l.useState)(""),
                    co = ao[0],
                    so = ao[1],
                    lo = (0, l.useState)({
                        opened: !1,
                        coinId: "",
                        coinName: ""
                    }),
                    ho = lo[0],
                    mo = lo[1],
                    po = (0, l.useState)({
                        opened: !1,
                        coinId: "",
                        coinName: "",
                        coinSymbol: "",
                        coinPrice: 0,
                        coinLogoTransparency: !1,
                        data: !1
                    }),
                    xo = po[0],
                    go = po[1],
                    uo = (0, ee.useRouter)(),
                    fo = (0, d.ZP)("/api/coins".concat(function(e, o, r) {
                        var t = "",
                            n = !1;
                        return e && (n ? t = t + "&chain=" + e : (n = !0, t = t + "?chain=" + e)), o && (n ? t = t + "&platform=" + o : (n = !0, t = t + "?platform=" + o)), r && (n ? t = t + "&page=" + r : (n = !0, t = t + "?page=" + r)), p && (n ? t = t + "&watchlist=" + p : (n = !0, t = t + "?watchlist=" + p)), L && (n ? t = t + "&section=" + L : (n = !0, t = t + "?section=" + L), "categories" === L && K && (t = t + "&category=" + K)), a && (n = !0, t = "?promoted=" + !0), "loading" !== Ye && (n ? t = "authenticated" === Ye ? t + "&auth=" + !0 : t + "&auth=" + !1 : (n = !0, t = "authenticated" === Ye ? t + "?auth=" + !0 : t + "?auth=" + !1)), ro && (n ? t = t + "&refresh=" + ro : (n = !0, t = t + "?refresh=" + ro)), t
                    }(o, r, We)), (function() {
                        for (var e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
                        return fetch.apply(void 0, (0, i.Z)(o)).then((function(e) {
                            return e.json()
                        }))
                    }), {
                        refreshInterval: 1e4
                    }),
                    ko = fo.data,
                    jo = fo.error,
                    bo = function(e) {
                        var o = e === ve && !ye;
                        Ce(o), we(e), je(ce(ke || [], {
                            sortBy: e,
                            reversed: o
                        }))
                    };
                (0, l.useEffect)((function() {
                    Ee(We), Fe(1)
                }), [o, r]), (0, l.useEffect)((function() {
                    no.current ? no.current = !1 : (void 0 !== ko && ko && 0 === ko.coins.length && We > 1 && Fe(We - 1), eo(!(ko && !jo)), null === ke || void 0 === ke || ke.map((function(e) {
                        var o;
                        null === ko || void 0 === ko || null === (o = ko.coins) || void 0 === o || o.find((function(o, r) {
                            return e._id === o._id && (ko.coins[r].priceChange = 0, e.price && o.price && (0, $.uQ)(e.price) !== (0, $.uQ)(o.price) && (e.price < o.price ? ko.coins[r].priceChange = 1 : ko.coins[r].priceChange = -1), !0)
                        }))
                    })), Ve(ko ? ko.total : Qe || 1), Be(ko ? ko.watchlist : Oe), je(ce(ko ? ko.coins : ke || [], {
                        sortBy: ve,
                        reversed: ye
                    })))
                }), [ko]);
                var vo = (0, V.V)({
                        timeout: 500
                    }),
                    wo = (0, l.useState)(""),
                    So = wo[0],
                    yo = wo[1],
                    Co = function(e, o) {
                        return (0, s.jsx)(j.u, {
                            disabled: "ios" === ue || "android" === ue,
                            opened: e === ze,
                            label: Oe.includes(o._id) && "authenticated" === Ye ? "Remove from watchlist" : "Add to watchlist",
                            placement: "center",
                            gutter: 0,
                            withArrow: !0,
                            transition: "pop",
                            transitionDuration: 150,
                            transitionTimingFunction: "ease",
                            tooltipId: "tootlip-".concat(e),
                            styles: {
                                body: {
                                    color: (xe.colorScheme, xe.colors.gray[0]),
                                    backgroundColor: "dark" === xe.colorScheme ? xe.colors.dark[5] : xe.colors.gray[8]
                                },
                                arrow: {
                                    backgroundColor: "dark" === xe.colorScheme ? xe.colors.dark[5] : xe.colors.gray[8]
                                }
                            },
                            children: Te.includes(o._id) ? (0, s.jsx)(b.a, {
                                color: "gray",
                                size: 14
                            }) : (0, s.jsx)(M.Z, {
                                style: {
                                    marginTop: 4
                                },
                                size: 14,
                                className: (Oe.includes(o._id) || o.watchlist) && "authenticated" === Ye ? ge.starFilled : ge.star,
                                "aria-describedby": "tootlip-".concat(e),
                                onFocus: function() {
                                    return Re(e)
                                },
                                onMouseOver: function() {
                                    return Re(e)
                                },
                                onBlur: function() {
                                    return Re(-1)
                                },
                                onMouseLeave: function() {
                                    return Re(-1)
                                },
                                onClick: function() {
                                    "authenticated" !== Ye && "loading" !== Ye ? qe({
                                        type: "add-to-watchlist",
                                        id: "",
                                        redirect: ""
                                    }) : "authenticated" === Ye && (Le((function(e) {
                                        return e.concat(o._id)
                                    })), Re(-1), fetch("/api/actions/watchlist", {
                                        method: "POST",
                                        body: JSON.stringify({
                                            id: o._id
                                        }),
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    }).then((function(e) {
                                        if (e.ok) return e.json()
                                    })).then((function(e) {
                                        void 0 !== e && ("added" === e.action ? Be(Oe.concat(o._id)) : ((Oe.length - 1) / te.oA.mainBlock.itemsPerPage === Qe - 1 && p && (Ve((function(e) {
                                            return e - 1
                                        })), to(Math.random())), Be(Oe.filter((function(e) {
                                            return e !== o._id
                                        }))))), Le((function(e) {
                                            return e.filter((function(e) {
                                                return e !== o._id
                                            }))
                                        }))
                                    })))
                                }
                            })
                        })
                    },
                    No = function(e, o, r) {
                        var t = function(e) {
                            return "string" === typeof e && (e = parseFloat(e)), 0 !== e && null !== e ? -Math.floor(Math.log10(e) + 1) : 0
                        }(e);
                        return e && void 0 !== e ? parseFloat(e + "") >= 1 ? (0, s.jsxs)(u.x, {
                            className: ge.price,
                            children: ["$", (0, $.uQ)(e)]
                        }) : t < 5 ? (0, s.jsxs)(u.x, {
                            className: void 0 === o || 0 === o ? ge.price : 1 === o ? ge.priceGreen : ge.priceRed,
                            children: ["$", (0, $.uQ)(e)]
                        }) : (0, s.jsx)("div", {
                            style: {
                                marginBottom: -5
                            },
                            children: (0, s.jsx)(j.u, {
                                disabled: "ios" === ue || "android" === ue,
                                opened: So === r,
                                label: vo.copied ? "Copied" : "$" + (0, $.uQ)(e),
                                placement: "center",
                                position: (vo.copied, "top"),
                                gutter: vo.copied ? 0 : .01,
                                withArrow: !0,
                                transition: "pop",
                                transitionDuration: 150,
                                transitionTimingFunction: "ease",
                                tooltipId: "tootlip-change",
                                styles: {
                                    body: {
                                        color: (xe.colorScheme, xe.colors.gray[0]),
                                        backgroundColor: "dark" === xe.colorScheme ? xe.colors.dark[5] : xe.colors.gray[8]
                                    },
                                    arrow: {
                                        backgroundColor: "dark" === xe.colorScheme ? xe.colors.dark[5] : xe.colors.gray[8]
                                    }
                                },
                                children: (0, s.jsx)(u.x, {
                                    className: void 0 === o || 0 === o ? ge.priceTT : 1 === o ? ge.priceTTGreen : ge.priceTTRed,
                                    "aria-describedby": "tootlip-change",
                                    onFocus: function() {
                                        return yo(r)
                                    },
                                    onMouseEnter: function() {
                                        return yo(r)
                                    },
                                    onBlur: function() {
                                        return yo("")
                                    },
                                    onMouseLeave: function() {
                                        return yo("")
                                    },
                                    onClick: function() {
                                        return vo.copy((0, $.uQ)(e))
                                    },
                                    children: (0, s.jsxs)(s.Fragment, {
                                        children: ["$0.", (0, s.jsxs)(v.v, {
                                            className: ge.countZero,
                                            children: ["0x", t]
                                        }), (0, $.uQ)(e).replace(".", "").substring(t + 1)]
                                    })
                                })
                            })
                        }) : (0, s.jsx)(u.x, {
                            className: ge.priceMuted,
                            children: "N/A"
                        })
                    },
                    zo = function(e, o) {
                        return e || o ? (0, s.jsxs)(s.Fragment, {
                            children: [e && (0, s.jsx)("a", {
                                href: "https://coinmarketcap.com/currencies/".concat(e),
                                target: "_blank",
                                style: {
                                    display: "flex"
                                },
                                children: (0, s.jsx)("img", {
                                    src: "/images/platforms/cmc.svg",
                                    width: 18,
                                    height: 18
                                })
                            }), o && (0, s.jsx)("a", {
                                href: "https://www.coingecko.com/en/coins/".concat(o),
                                target: "_blank",
                                style: {
                                    display: "flex"
                                },
                                children: (0, s.jsx)("img", {
                                    src: "/images/platforms/cg.svg",
                                    width: 18,
                                    height: 18
                                })
                            })]
                        }) : (0, s.jsx)(s.Fragment, {
                            children: "\xa0"
                        })
                    },
                    Ro = function(e) {
                        return e ? (0, s.jsxs)(u.x, {
                            className: ge.price,
                            children: ["$", Math.trunc(e).toLocaleString()]
                        }) : (0, s.jsx)(u.x, {
                            className: ge.priceMuted,
                            children: "N/A"
                        })
                    },
                    Zo = function(e) {
                        return e ? (0, s.jsxs)(u.x, {
                            className: ge.price,
                            children: ["$", Math.trunc(e).toLocaleString()]
                        }) : (0, s.jsx)(u.x, {
                            className: ge.priceMuted,
                            children: "N/A"
                        })
                    },
                    To = function(e, o) {
                        return !o || null === e || void 0 === e || 0 === e && 0 === o ? (0, s.jsx)(u.x, {
                            className: ge.priceMuted,
                            children: "N/A"
                        }) : e >= 0 ? (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsxs)(g.Z, {
                                position: "right",
                                spacing: 2,
                                children: [(0, s.jsx)(A.Z, {
                                    size: 12,
                                    className: ge.textGreen
                                }), (0, s.jsxs)(u.x, {
                                    className: ge.textGreen,
                                    children: [e.toLocaleString(void 0, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }), "%"]
                                })]
                            })
                        }) : (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsxs)(g.Z, {
                                position: "right",
                                spacing: 2,
                                children: [(0, s.jsx)(I.Z, {
                                    size: 12,
                                    className: ge.textRed
                                }), (0, s.jsxs)(u.x, {
                                    className: ge.textRed,
                                    children: [Math.abs(e).toLocaleString(void 0, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }), "%"]
                                })]
                            })
                        })
                    },
                    Lo = function(e) {
                        if (!e) return (0, s.jsx)(u.x, {
                            className: ge.priceMuted,
                            mr: 19,
                            children: "N/A"
                        });
                        var o = m()(e).isBefore(),
                            r = m()(e).fromNow();
                        return (0, s.jsx)(g.Z, {
                            position: "right",
                            spacing: 3,
                            children: (0, s.jsx)(u.x, {
                                className: o ? ge.launched : ge.notLaunched,
                                children: r
                            })
                        })
                    },
                    _o = function(e) {
                        if (!e) return (0, s.jsx)(u.x, {
                            className: ge.priceMuted,
                            mr: 19,
                            children: "N/A"
                        });
                        var o = m()(e).fromNow();
                        return (0, s.jsx)(u.x, {
                            className: ge.launched,
                            children: o
                        })
                    },
                    Mo = function(e, o, r) {
                        return (0, s.jsxs)(g.Z, {
                            position: "right",
                            spacing: 0,
                            noWrap: !0,
                            children: [(0, s.jsxs)(w.x, {
                                className: ge.voteBox,
                                children: [(0, s.jsx)(u.x, {
                                    size: "sm",
                                    className: ge.voteText,
                                    children: e ? (0, $.pF)(e, 1) : 0
                                }), (0, s.jsx)(u.x, {
                                    size: "xs",
                                    className: ge.voteTextSmall,
                                    children: o ? (0, $.pF)(o, 1) : 0
                                })]
                            }), (0, s.jsx)(x.k, {
                                className: ge.vote,
                                onClick: function() {
                                    "authenticated" !== Ye && "loading" !== Ye ? qe({
                                        type: "vote",
                                        id: "",
                                        redirect: ""
                                    }) : "authenticated" === Ye && (Ae((function(e) {
                                        return e.concat(r)
                                    })), fetch("/api/actions/votes", {
                                        method: "POST",
                                        body: JSON.stringify({
                                            id: r
                                        }),
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    }).then((function(e) {
                                        if (e.ok) return e.json()
                                    })).then((function(e) {
                                        void 0 !== e && ("voted" === e.action ? (ke.map((function(e, o) {
                                            e._id === r && (ke[o].votes++, ke[o].votes24++, je(ke))
                                        })), io.showNotification({
                                            autoClose: 5e3,
                                            title: "Success",
                                            message: "Successfully voted!",
                                            color: "green",
                                            icon: (0, s.jsx)(O.Z, {
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
                                        })) : io.showNotification({
                                            autoClose: 5e3,
                                            title: "Error",
                                            message: "You've already voted this coin in the last 24 hours!",
                                            color: "red",
                                            icon: (0, s.jsx)(B.Z, {
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
                                        })), Ae((function(e) {
                                            return e.filter((function(e) {
                                                return e !== r
                                            }))
                                        }))
                                    })))
                                },
                                children: Me.includes(r) ? (0, s.jsx)(b.a, {
                                    color: "white",
                                    size: 14,
                                    mt: 2,
                                    mb: -2
                                }) : "Vote"
                            })]
                        })
                    },
                    Ao = function(e) {
                        return (0, s.jsxs)(g.Z, {
                            align: "center",
                            spacing: 2,
                            children: [(0, s.jsx)("img", {
                                src: "/images/chains/".concat(e, ".svg"),
                                width: "20px",
                                height: "auto"
                            }), (0, s.jsx)(u.x, {
                                className: ge.chain,
                                children: "ARBITRUM" === e ? "ARB" : "PULSECHAIN" === e ? "PLS" : e
                            })]
                        })
                    },
                    Io = (0, s.jsx)(S.f, {
                        visible: !0,
                        loaderProps: {
                            size: "md",
                            color: "dark" === xe.colorScheme ? xe.colors.gray[0] : xe.colors.dark[6],
                            variant: "bars"
                        },
                        overlayOpacity: .02,
                        overlayColor: "dark" === xe.colorScheme ? xe.colors.dark[2] : xe.colors.dark[4],
                        mt: 42,
                        style: {
                            opacity: .5
                        }
                    }),
                    Oo = (0, s.jsx)(s.Fragment, {
                        children: null === ke || void 0 === ke ? void 0 : ke.map((function(e, o) {
                            return !0 === p && Oe.includes(e._id) || !1 === p ? (0, s.jsxs)("tr", {
                                className: ge.tr,
                                style: {
                                    opacity: .6
                                },
                                children: [(0, s.jsx)("td", {
                                    className: ge.fix,
                                    children: (0, s.jsxs)(g.Z, {
                                        position: "left",
                                        spacing: 8,
                                        noWrap: !0,
                                        children: [Co(o, e), (0, s.jsx)(w.x, {
                                            className: ge.contentCenter,
                                            children: (0, s.jsx)(X(), {
                                                href: "/coins/".concat(e._name),
                                                children: (0, s.jsx)("a", {
                                                    className: ge.link,
                                                    children: (0, s.jsx)("div", {
                                                        className: ge.logo,
                                                        children: (0, s.jsx)(ne.Z, {
                                                            layout: "fill",
                                                            src: "https://".concat(te.vZ, ".s3.").concat(te.iA, ".amazonaws.com/coins/").concat(e._id, ".png"),
                                                            fallbackSrc: "/images/coins/logo-fallback-200.png",
                                                            alt: e.name
                                                        })
                                                    })
                                                })
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: ge.coinDetails,
                                            children: (0, s.jsx)(X(), {
                                                href: "/coins/".concat(e._name),
                                                children: (0, s.jsxs)("a", {
                                                    className: ge.link,
                                                    children: [(0, s.jsxs)(g.Z, {
                                                        position: "apart",
                                                        spacing: 1,
                                                        noWrap: !0,
                                                        children: [(0, s.jsx)(w.x, {
                                                            className: ge.textHighlight,
                                                            children: e.symbol
                                                        }), (0, s.jsxs)(u.x, {
                                                            className: e.my ? ge.indexMy : ge.index,
                                                            children: ["#", e.rank]
                                                        })]
                                                    }), (0, s.jsx)(w.x, {
                                                        className: ge.textHighlightMuted,
                                                        children: e.name
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                }), (0, s.jsx)("td", {
                                    className: ge.tdLeft,
                                    children: zo(e.cmc, e.cg)
                                }), (0, s.jsx)("td", {
                                    className: ge.tdLeftResponsive,
                                    children: Ao(e.chain)
                                }), (0, s.jsx)("td", {
                                    className: ge.tdRight,
                                    children: e.presale ? (0, s.jsxs)(g.Z, {
                                        noWrap: !0,
                                        spacing: 4,
                                        position: "right",
                                        children: [(0, s.jsx)(u.x, {
                                            size: "xs",
                                            weight: 500,
                                            className: ge.presale,
                                            children: "PRESALE"
                                        }), (0, s.jsx)(P.Z, {
                                            size: 12,
                                            className: ge.presale
                                        })]
                                    }) : (0, s.jsxs)(s.Fragment, {
                                        children: [No(e.price, e.priceChange, e._id), (0, s.jsx)(w.x, {
                                            sx: {
                                                "@media (min-width: 1241px)": {
                                                    display: "none"
                                                }
                                            },
                                            children: To(e.change, e.price)
                                        })]
                                    })
                                }), (0, s.jsx)("td", {
                                    className: ge.tdChangeLg,
                                    children: To(e.change, e.price)
                                }), (0, s.jsx)("td", {
                                    className: ge.tdRight,
                                    children: Ro(e.mc)
                                }), (0, s.jsx)("td", {
                                    className: ge.tdRight,
                                    children: Zo(e.volume)
                                }), (0, s.jsx)("td", {
                                    className: ge.tdRight,
                                    children: "new" !== L ? Lo(e.launch) : _o(e.added)
                                }), (0, s.jsx)("td", {
                                    className: ge.tdRight,
                                    children: Mo(e.votes, e.votes24, e._id)
                                }), (0, s.jsx)("td", {
                                    className: ge.fix,
                                    children: (0, s.jsxs)(y.v, {
                                        delay: 0,
                                        transitionDuration: 0,
                                        control: (0, s.jsx)(x.k, {
                                            className: co === e._id ? e.my ? ge.dotsButtonActiveMy : ge.dotsButtonActive : e.my ? ge.dotsButtonMy : ge.dotsButton,
                                            children: (0, s.jsx)(W.Z, {
                                                size: 14,
                                                color: e.my ? "dark" === xe.colorScheme ? xe.colors.teal[6] : xe.colors.teal[8] : "gray"
                                            })
                                        }),
                                        placement: "end",
                                        onOpen: function() {
                                            so(e._id)
                                        },
                                        onClose: function() {
                                            so("")
                                        },
                                        children: [(0, s.jsx)(y.v.Item, {
                                            icon: (0, s.jsx)(F.Z, {
                                                size: 14
                                            }),
                                            onClick: function() {
                                                uo.push("/coins/".concat(e._name))
                                            },
                                            children: "View Chart"
                                        }), (0, s.jsx)(y.v.Item, {
                                            onClick: (0, t.Z)(c().mark((function o() {
                                                var r, t;
                                                return c().wrap((function(o) {
                                                    for (;;) switch (o.prev = o.next) {
                                                        case 0:
                                                            if ("authenticated" === Ye || "loading" === Ye) {
                                                                o.next = 4;
                                                                break
                                                            }
                                                            qe({
                                                                type: "add-to-portfolio",
                                                                id: "",
                                                                redirect: ""
                                                            }), o.next = 16;
                                                            break;
                                                        case 4:
                                                            if (!Ue || !Ue.id) {
                                                                o.next = 16;
                                                                break
                                                            }
                                                            return o.next = 7, fetch("/api/portfolio/get/".concat(Ue.id, "/").concat(e._id));
                                                        case 7:
                                                            if (!(r = o.sent).ok) {
                                                                o.next = 15;
                                                                break
                                                            }
                                                            return o.next = 11, r.json();
                                                        case 11:
                                                            t = o.sent, go({
                                                                opened: !0,
                                                                coinId: e._id,
                                                                coinName: e.name,
                                                                coinSymbol: e.symbol,
                                                                coinPrice: e.price,
                                                                coinLogoTransparency: !!e.logoTransparency,
                                                                data: t
                                                            }), o.next = 16;
                                                            break;
                                                        case 15:
                                                            go({
                                                                opened: !0,
                                                                coinId: e._id,
                                                                coinName: e.name,
                                                                coinSymbol: e.symbol,
                                                                coinPrice: e.price,
                                                                coinLogoTransparency: !!e.logoTransparency,
                                                                data: !1
                                                            });
                                                        case 16:
                                                        case "end":
                                                            return o.stop()
                                                    }
                                                }), o)
                                            }))),
                                            icon: (0, s.jsx)(H.Z, {
                                                size: 14
                                            }),
                                            children: "Add to Portfolio"
                                        }), e.my && (0, s.jsxs)(s.Fragment, {
                                            children: [(0, s.jsx)(C.i, {}), (0, s.jsx)(y.v.Label, {
                                                children: "Actions"
                                            }), (0, s.jsx)(y.v.Item, {
                                                onClick: function() {
                                                    uo.push("/promote/".concat(e._name))
                                                },
                                                icon: (0, s.jsx)(D.Z, {
                                                    size: 14
                                                }),
                                                children: "Promote"
                                            }), (0, s.jsx)(y.v.Item, {
                                                icon: (0, s.jsx)(E.Z, {
                                                    size: 14
                                                }),
                                                onClick: function() {
                                                    uo.push("/edit/".concat(e._name))
                                                },
                                                children: "Edit"
                                            }), (0, s.jsxs)(y.v.Item, {
                                                color: "red",
                                                icon: (0, s.jsx)(G.Z, {
                                                    size: 14
                                                }),
                                                onClick: function() {
                                                    mo({
                                                        opened: !0,
                                                        coinId: e._id,
                                                        coinName: e.name
                                                    })
                                                },
                                                children: ["Delete ", e.symbol]
                                            })]
                                        })]
                                    })
                                })]
                            }, e._id) : null
                        }))
                    }),
                    Bo = (0, s.jsxs)("tr", {
                        className: ge.tr,
                        children: [(0, s.jsx)("td", {
                            className: ge.fix,
                            children: (0, s.jsxs)(g.Z, {
                                position: "left",
                                spacing: 8,
                                noWrap: !0,
                                children: [(0, s.jsx)(N.O, {
                                    height: 14,
                                    circle: !0,
                                    className: ge.skeleton
                                }), (0, s.jsx)(w.x, {
                                    className: ge.contentCenter,
                                    children: (0, s.jsx)(N.O, {
                                        height: 50,
                                        circle: !0,
                                        className: ge.skeletonCircle
                                    })
                                }), (0, s.jsx)("div", {
                                    className: ge.coinDetails,
                                    children: (0, s.jsxs)("a", {
                                        className: ge.link,
                                        children: [(0, s.jsx)(g.Z, {
                                            position: "apart",
                                            spacing: 1,
                                            noWrap: !0,
                                            children: (0, s.jsx)(N.O, {
                                                height: 12,
                                                mt: 4,
                                                mb: 4,
                                                className: ge.skeleton
                                            })
                                        }), (0, s.jsx)(N.O, {
                                            height: 12,
                                            mt: 4,
                                            mb: 4,
                                            className: ge.skeleton
                                        })]
                                    })
                                })]
                            })
                        }), (0, s.jsx)("td", {
                            className: ge.tdLeft,
                            children: (0, s.jsx)(N.O, {
                                height: 12,
                                mt: 4,
                                mb: 4,
                                className: ge.skeleton
                            })
                        }), (0, s.jsx)("td", {
                            className: ge.tdLeftResponsive,
                            children: (0, s.jsx)(N.O, {
                                height: 12,
                                mt: 4,
                                mb: 4,
                                className: ge.skeleton
                            })
                        }), (0, s.jsxs)("td", {
                            className: ge.tdRight,
                            children: [(0, s.jsx)(N.O, {
                                height: 12,
                                mt: 4,
                                mb: 4,
                                className: ge.skeleton
                            }), (0, s.jsx)(w.x, {
                                sx: {
                                    "@media (min-width: 1241px)": {
                                        display: "none"
                                    }
                                },
                                children: (0, s.jsx)(N.O, {
                                    height: 12,
                                    mt: 4,
                                    mb: 4,
                                    className: ge.skeleton
                                })
                            })]
                        }), (0, s.jsx)("td", {
                            className: ge.tdChangeLg,
                            children: (0, s.jsx)(N.O, {
                                height: 12,
                                mt: 4,
                                mb: 4,
                                className: ge.skeleton
                            })
                        }), (0, s.jsx)("td", {
                            className: ge.tdRight,
                            children: (0, s.jsx)(N.O, {
                                height: 12,
                                mt: 4,
                                mb: 4,
                                className: ge.skeleton
                            })
                        }), (0, s.jsx)("td", {
                            className: ge.tdRight,
                            children: (0, s.jsx)(N.O, {
                                height: 12,
                                mt: 4,
                                mb: 4,
                                className: ge.skeleton
                            })
                        }), (0, s.jsx)("td", {
                            className: ge.tdRight,
                            children: (0, s.jsx)(N.O, {
                                height: 12,
                                mt: 4,
                                mb: 4,
                                className: ge.skeleton
                            })
                        }), (0, s.jsx)("td", {
                            className: ge.tdRight,
                            children: (0, s.jsx)(N.O, {
                                height: 37,
                                mt: 4,
                                mb: 4,
                                className: ge.skeleton
                            })
                        }), (0, s.jsx)("td", {
                            className: ge.fix,
                            children: (0, s.jsx)(N.O, {
                                height: 14,
                                mt: 4,
                                mb: 4,
                                className: ge.skeleton
                            })
                        })]
                    }),
                    Po = (0, s.jsxs)(s.Fragment, {
                        children: [Bo, Bo, Bo, Bo, Bo]
                    }),
                    Wo = null === ke || void 0 === ke ? void 0 : ke.map((function(e, o) {
                        return !0 === p && Oe.includes(e._id) || !1 === p ? (0, s.jsxs)("tr", {
                            className: ge.tr,
                            children: [(0, s.jsx)("td", {
                                className: ge.fix,
                                children: (0, s.jsxs)(g.Z, {
                                    position: "left",
                                    spacing: 8,
                                    noWrap: !0,
                                    children: [Co(o, e), (0, s.jsx)(w.x, {
                                        className: ge.contentCenter,
                                        children: (0, s.jsx)(X(), {
                                            href: "/coins/".concat(e._name),
                                            children: (0, s.jsx)("a", {
                                                className: ge.link,
                                                children: (0, s.jsx)("div", {
                                                    className: ge.logo,
                                                    children: (0, s.jsx)(ne.Z, {
                                                        layout: "fill",
                                                        src: "https://".concat(te.vZ, ".s3.").concat(te.iA, ".amazonaws.com/coins/").concat(e._id, ".png"),
                                                        fallbackSrc: "/images/coins/logo-fallback-200.png",
                                                        alt: e.name
                                                    })
                                                })
                                            })
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: ge.coinDetails,
                                        children: (0, s.jsx)(X(), {
                                            href: "/coins/".concat(e._name),
                                            children: (0, s.jsxs)("a", {
                                                className: ge.link,
                                                children: [(0, s.jsxs)(g.Z, {
                                                    position: "apart",
                                                    spacing: 1,
                                                    noWrap: !0,
                                                    children: [(0, s.jsx)(w.x, {
                                                        className: ge.textHighlight,
                                                        children: e.symbol
                                                    }), (0, s.jsxs)(u.x, {
                                                        className: e.my ? ge.indexMy : ge.index,
                                                        children: ["#", e.rank]
                                                    })]
                                                }), (0, s.jsx)(w.x, {
                                                    className: ge.textHighlightMuted,
                                                    children: e.name
                                                })]
                                            })
                                        })
                                    })]
                                })
                            }), (0, s.jsx)("td", {
                                className: ge.tdLeft,
                                children: zo(e.cmc, e.cg)
                            }), (0, s.jsx)("td", {
                                className: ge.tdLeftResponsive,
                                children: Ao(e.chain)
                            }), (0, s.jsx)("td", {
                                className: ge.tdRight,
                                children: e.presale ? (0, s.jsxs)(g.Z, {
                                    noWrap: !0,
                                    spacing: 4,
                                    position: "right",
                                    children: [(0, s.jsx)(u.x, {
                                        size: "xs",
                                        weight: 500,
                                        className: ge.presale,
                                        children: "PRESALE"
                                    }), (0, s.jsx)(P.Z, {
                                        size: 12,
                                        className: ge.presale
                                    })]
                                }) : (0, s.jsxs)(s.Fragment, {
                                    children: [No(e.price, e.priceChange, e._id), (0, s.jsx)(w.x, {
                                        sx: {
                                            "@media (min-width: 1241px)": {
                                                display: "none"
                                            }
                                        },
                                        children: To(e.change, e.price)
                                    })]
                                })
                            }), (0, s.jsx)("td", {
                                className: ge.tdChangeLg,
                                children: To(e.change, e.price)
                            }), (0, s.jsx)("td", {
                                className: ge.tdRight,
                                children: Ro(e.mc)
                            }), (0, s.jsx)("td", {
                                className: ge.tdRight,
                                children: Zo(e.volume)
                            }), (0, s.jsx)("td", {
                                className: ge.tdRight,
                                children: "new" !== L ? Lo(e.launch) : _o(e.added)
                            }), (0, s.jsx)("td", {
                                className: ge.tdRight,
                                children: Mo(e.votes, e.votes24, e._id)
                            }), (0, s.jsx)("td", {
                                className: ge.fix,
                                children: (0, s.jsxs)(y.v, {
                                    delay: 0,
                                    transitionDuration: 0,
                                    control: (0, s.jsx)(x.k, {
                                        className: co === e._id ? e.my ? ge.dotsButtonActiveMy : ge.dotsButtonActive : e.my ? ge.dotsButtonMy : ge.dotsButton,
                                        children: (0, s.jsx)(W.Z, {
                                            size: 14,
                                            color: e.my ? "dark" === xe.colorScheme ? xe.colors.teal[6] : xe.colors.teal[8] : "gray"
                                        })
                                    }),
                                    placement: "end",
                                    onOpen: function() {
                                        so(e._id)
                                    },
                                    onClose: function() {
                                        so("")
                                    },
                                    children: [(0, s.jsx)(y.v.Item, {
                                        icon: (0, s.jsx)(F.Z, {
                                            size: 14
                                        }),
                                        onClick: function() {
                                            uo.push("/coins/".concat(e._name))
                                        },
                                        children: "View Chart"
                                    }), (0, s.jsx)(y.v.Item, {
                                        onClick: (0, t.Z)(c().mark((function o() {
                                            var r, t;
                                            return c().wrap((function(o) {
                                                for (;;) switch (o.prev = o.next) {
                                                    case 0:
                                                        if ("authenticated" === Ye || "loading" === Ye) {
                                                            o.next = 4;
                                                            break
                                                        }
                                                        qe({
                                                            type: "add-to-portfolio",
                                                            id: "",
                                                            redirect: ""
                                                        }), o.next = 16;
                                                        break;
                                                    case 4:
                                                        if (!Ue || !Ue.id) {
                                                            o.next = 16;
                                                            break
                                                        }
                                                        return o.next = 7, fetch("/api/portfolio/get/".concat(Ue.id, "/").concat(e._id));
                                                    case 7:
                                                        if (!(r = o.sent).ok) {
                                                            o.next = 15;
                                                            break
                                                        }
                                                        return o.next = 11, r.json();
                                                    case 11:
                                                        t = o.sent, go({
                                                            opened: !0,
                                                            coinId: e._id,
                                                            coinName: e.name,
                                                            coinSymbol: e.symbol,
                                                            coinPrice: e.price,
                                                            coinLogoTransparency: !!e.logoTransparency,
                                                            data: t
                                                        }), o.next = 16;
                                                        break;
                                                    case 15:
                                                        go({
                                                            opened: !0,
                                                            coinId: e._id,
                                                            coinName: e.name,
                                                            coinSymbol: e.symbol,
                                                            coinPrice: e.price,
                                                            coinLogoTransparency: !!e.logoTransparency,
                                                            data: !1
                                                        });
                                                    case 16:
                                                    case "end":
                                                        return o.stop()
                                                }
                                            }), o)
                                        }))),
                                        icon: (0, s.jsx)(H.Z, {
                                            size: 14
                                        }),
                                        children: "Add to Portfolio"
                                    }), e.my && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)(C.i, {}), (0, s.jsx)(y.v.Label, {
                                            children: "Actions"
                                        }), (0, s.jsx)(y.v.Item, {
                                            onClick: function() {
                                                uo.push("/promote/".concat(e._name))
                                            },
                                            icon: (0, s.jsx)(D.Z, {
                                                size: 14
                                            }),
                                            children: "Promote"
                                        }), (0, s.jsx)(y.v.Item, {
                                            icon: (0, s.jsx)(E.Z, {
                                                size: 14
                                            }),
                                            onClick: function() {
                                                uo.push("/edit/".concat(e._name))
                                            },
                                            children: "Edit"
                                        }), (0, s.jsxs)(y.v.Item, {
                                            color: "red",
                                            icon: (0, s.jsx)(G.Z, {
                                                size: 14
                                            }),
                                            onClick: function() {
                                                mo({
                                                    opened: !0,
                                                    coinId: e._id,
                                                    coinName: e.name
                                                })
                                            },
                                            children: ["Delete ", e.symbol]
                                        })]
                                    })]
                                })
                            })]
                        }, e._id) : null
                    }));
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(z.x, {
                        className: ge.mainScroll,
                        scrollbarSize: 5,
                        styles: {
                            scrollbar: {
                                zIndex: 1e3,
                                background: "transparent",
                                "&:hover": {
                                    backgroundColor: "transparent"
                                },
                                padding: 0
                            }
                        },
                        children: [Xe && Io, (0, s.jsxs)(R.i, {
                            horizontalSpacing: "xs",
                            verticalSpacing: "xs",
                            sx: {
                                tableLayout: "fixed",
                                maxWidth: "100%"
                            },
                            children: [(0, s.jsx)("thead", {
                                className: ge.thead,
                                children: (0, s.jsxs)("tr", {
                                    children: [(0, s.jsx)(ae, {
                                        sorted: "symbol" === ve,
                                        reversed: ye,
                                        onSort: function() {
                                            return bo("symbol")
                                        },
                                        position: "left",
                                        width: 220,
                                        classNameTh: ge.th,
                                        children: "Coin"
                                    }), (0, s.jsx)(ae, {
                                        sorted: !1,
                                        reversed: !1,
                                        onSort: function() {
                                            return !1
                                        },
                                        position: "right",
                                        width: 40,
                                        classNameTh: ge.th,
                                        children: !1
                                    }), (0, s.jsx)(ae, {
                                        sorted: "chain" === ve,
                                        reversed: ye,
                                        onSort: function() {
                                            return bo("chain")
                                        },
                                        position: "left",
                                        width: 82,
                                        classNameTh: ge.thChain,
                                        children: "Chain"
                                    }), (0, s.jsxs)(ae, {
                                        sorted: "price" === ve,
                                        reversed: ye,
                                        onSort: function() {
                                            return bo("price")
                                        },
                                        position: "right",
                                        width: 120,
                                        classNameTh: ge.th,
                                        children: ["Price", (0, s.jsx)(u.x, {
                                            size: "sm",
                                            sx: {
                                                display: "inline-block",
                                                "@media (min-width: 1241px)": {
                                                    display: "none"
                                                }
                                            },
                                            children: "\xa0%24h"
                                        })]
                                    }), (0, s.jsx)(ae, {
                                        sorted: "change" === ve,
                                        reversed: ye,
                                        onSort: function() {
                                            return bo("change")
                                        },
                                        position: "right",
                                        width: 114,
                                        classNameTh: ge.thChange,
                                        children: "Change 24h"
                                    }), (0, s.jsx)(ae, {
                                        sorted: "mc" === ve,
                                        reversed: ye,
                                        onSort: function() {
                                            return bo("mc")
                                        },
                                        position: "right",
                                        width: 130,
                                        classNameTh: ge.th,
                                        children: "Market Cap"
                                    }), (0, s.jsx)(ae, {
                                        sorted: "volume" === ve,
                                        reversed: ye,
                                        onSort: function() {
                                            return bo("volume")
                                        },
                                        position: "right",
                                        width: 130,
                                        classNameTh: ge.th,
                                        children: "Volume 24h"
                                    }), (0, s.jsx)(ae, {
                                        sorted: ve === ("new" !== L ? "launch" : "added"),
                                        reversed: ye,
                                        onSort: function() {
                                            return bo("new" !== L ? "launch" : "added")
                                        },
                                        position: "right",
                                        width: 130,
                                        classNameTh: ge.th,
                                        children: "new" !== L ? "Launch" : "Added"
                                    }), (0, s.jsx)(ae, {
                                        sorted: ve === (L ? "votes" : "votes24"),
                                        reversed: ye,
                                        onSort: function() {
                                            return bo(L ? "votes" : "votes24")
                                        },
                                        position: "right",
                                        width: 120,
                                        classNameTh: ge.th,
                                        children: "Votes/V24h"
                                    }), (0, s.jsx)(ae, {
                                        sorted: !1,
                                        reversed: !1,
                                        onSort: function() {
                                            return !1
                                        },
                                        position: "right",
                                        width: 34,
                                        classNameTh: ge.th,
                                        children: !1
                                    })]
                                })
                            }), (0, s.jsx)("tbody", {
                                children: Wo.length > 0 ? Xe ? !1 === p ? Oo : Oe.length / te.oA.mainBlock.itemsPerPage === Qe && We > Qe ? Po : Oo : Wo : Xe ? Po : (0, s.jsx)("tr", {
                                    children: (0, s.jsx)("td", {
                                        colSpan: 9
                                    })
                                })
                            })]
                        })]
                    }), !Wo.length && !Xe && (0, s.jsx)(f.M, {
                        children: (0, s.jsx)(u.x, {
                            weight: 500,
                            align: "center",
                            mt: "xs",
                            mb: "xs",
                            children: "Nothing found"
                        })
                    }), Qe > 1 && (0, s.jsx)(f.M, {
                        mt: "md",
                        children: (0, s.jsx)(Z.t, {
                            page: Xe ? De : We,
                            onChange: function(e) {
                                Ee(We), eo(!0), to(Math.random()), Fe(e)
                            },
                            total: Qe
                        })
                    }), (0, s.jsx)(re.Z, {
                        modalState: xo,
                        setModalState: go
                    }), (0, s.jsx)(oe.Z, {
                        modalState: ho,
                        setModalState: mo
                    })]
                })
            }
        },
        21643: function(e, o, r) {
            r.d(o, {
                Z: function() {
                    return f
                }
            });
            var t = r(85893),
                n = r(58067),
                i = r(11996),
                a = r(50112),
                c = r(10745),
                s = r(87123),
                l = r(13131),
                d = r(88852),
                h = r(69899),
                m = r(67294),
                p = r(91511),
                x = r(44588),
                g = r(17703),
                u = (0, n.k)((function(e) {
                    return {
                        mark: {
                            color: "dark" === e.colorScheme ? e.colors.gray[0] : e.colors.dark[9],
                            backgroundColor: "transparent",
                            fontWeight: 600
                        }
                    }
                }));

            function f(e) {
                var o = e.modalState,
                    r = o.opened,
                    n = o.coinId,
                    f = o.coinName,
                    k = (0, h.z)(),
                    j = (0, m.useState)(!1),
                    b = j[0],
                    v = j[1],
                    w = u().classes;
                return (0, t.jsx)(i.u, {
                    centered: !0,
                    opened: r,
                    onClose: function() {
                        return e.setModalState({
                            opened: !1,
                            coinId: "",
                            coinName: ""
                        })
                    },
                    title: (0, t.jsx)(a.x, {
                        weight: 500,
                        children: "Permanently delete"
                    }),
                    zIndex: 1300,
                    children: (0, t.jsxs)(c.x, {
                        mx: "auto",
                        children: [(0, t.jsxs)(a.x, {
                            children: ["Are you sure you want to delete ", (0, t.jsx)(s.v, {
                                className: w.mark,
                                children: f
                            }), "?"]
                        }), (0, t.jsx)(a.x, {
                            size: "sm",
                            color: "dimmed",
                            children: "This action cannot be undone!"
                        }), (0, t.jsxs)(l.Z, {
                            position: "right",
                            mt: "md",
                            children: [(0, t.jsx)(d.z, {
                                variant: "default",
                                onClick: function() {
                                    return e.setModalState({
                                        opened: !1,
                                        coinId: "",
                                        coinName: ""
                                    })
                                },
                                children: "Cancel"
                            }), (0, t.jsx)(d.z, {
                                color: "red",
                                rightIcon: (0, t.jsx)(p.Z, {
                                    size: 18
                                }),
                                loading: b,
                                onClick: function() {
                                    v(!0), fetch("/api/actions/delete", {
                                        method: "POST",
                                        body: JSON.stringify({
                                            id: n
                                        }),
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    }).then((function(e) {
                                        if (e.ok) return e.json()
                                    })).then((function(o) {
                                        void 0 !== o && ("deleted" === o.action ? k.showNotification({
                                            autoClose: 5e3,
                                            title: "Success",
                                            message: "Successfully deleted ".concat(o.coin.name, "!"),
                                            color: "green",
                                            icon: (0, t.jsx)(x.Z, {
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
                                        }) : k.showNotification({
                                            autoClose: 5e3,
                                            title: "Error",
                                            message: "This action cannot be performed!",
                                            color: "red",
                                            icon: (0, t.jsx)(g.Z, {
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
                                        })), v(!1), e.setModalState({
                                            opened: !1,
                                            coinId: "",
                                            coinName: ""
                                        })
                                    }))
                                },
                                children: "Delete"
                            })]
                        })]
                    })
                })
            }
        }
    }
]);