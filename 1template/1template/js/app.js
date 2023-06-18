/*! For license information please see app.js.LICENSE.txt */
(() => {
	var e = {
			755: function(e, t) {
				var n;
				! function(t, n) {
					"use strict";
					"object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
						if (!e.document) throw new Error("jQuery requires a window with a document");
						return n(e)
					} : n(t)
				}("undefined" != typeof window ? window : this, (function(i, o) {
					"use strict";
					var r = [],
						s = Object.getPrototypeOf,
						a = r.slice,
						l = r.flat ? function(e) {
							return r.flat.call(e)
						} : function(e) {
							return r.concat.apply([], e)
						},
						c = r.push,
						u = r.indexOf,
						d = {},
						p = d.toString,
						f = d.hasOwnProperty,
						h = f.toString,
						g = h.call(Object),
						m = {},
						v = function(e) {
							return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
						},
						y = function(e) {
							return null != e && e === e.window
						},
						b = i.document,
						x = {
							type: !0,
							src: !0,
							nonce: !0,
							noModule: !0
						};

					function w(e, t, n) {
						var i, o, r = (n = n || b).createElement("script");
						if (r.text = e, t)
							for (i in x)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
						n.head.appendChild(r).parentNode.removeChild(r)
					}

					function T(e) {
						return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
					}
					var C = "3.6.0",
						$ = function(e, t) {
							return new $.fn.init(e, t)
						};

					function k(e) {
						var t = !!e && "length" in e && e.length,
							n = T(e);
						return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
					}
					$.fn = $.prototype = {
						jquery: C,
						constructor: $,
						length: 0,
						toArray: function() {
							return a.call(this)
						},
						get: function(e) {
							return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
						},
						pushStack: function(e) {
							var t = $.merge(this.constructor(), e);
							return t.prevObject = this, t
						},
						each: function(e) {
							return $.each(this, e)
						},
						map: function(e) {
							return this.pushStack($.map(this, (function(t, n) {
								return e.call(t, n, t)
							})))
						},
						slice: function() {
							return this.pushStack(a.apply(this, arguments))
						},
						first: function() {
							return this.eq(0)
						},
						last: function() {
							return this.eq(-1)
						},
						even: function() {
							return this.pushStack($.grep(this, (function(e, t) {
								return (t + 1) % 2
							})))
						},
						odd: function() {
							return this.pushStack($.grep(this, (function(e, t) {
								return t % 2
							})))
						},
						eq: function(e) {
							var t = this.length,
								n = +e + (e < 0 ? t : 0);
							return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
						},
						end: function() {
							return this.prevObject || this.constructor()
						},
						push: c,
						sort: r.sort,
						splice: r.splice
					}, $.extend = $.fn.extend = function() {
						var e, t, n, i, o, r, s = arguments[0] || {},
							a = 1,
							l = arguments.length,
							c = !1;
						for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
							if (null != (e = arguments[a]))
								for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && ($.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || $.isPlainObject(n) ? n : {}, o = !1, s[t] = $.extend(c, r, i)) : void 0 !== i && (s[t] = i));
						return s
					}, $.extend({
						expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
						isReady: !0,
						error: function(e) {
							throw new Error(e)
						},
						noop: function() {},
						isPlainObject: function(e) {
							var t, n;
							return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof(n = f.call(t, "constructor") && t.constructor) || h.call(n) !== g))
						},
						isEmptyObject: function(e) {
							var t;
							for (t in e) return !1;
							return !0
						},
						globalEval: function(e, t, n) {
							w(e, {
								nonce: t && t.nonce
							}, n)
						},
						each: function(e, t) {
							var n, i = 0;
							if (k(e))
								for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
							else
								for (i in e)
									if (!1 === t.call(e[i], i, e[i])) break;
							return e
						},
						makeArray: function(e, t) {
							var n = t || [];
							return null != e && (k(Object(e)) ? $.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
						},
						inArray: function(e, t, n) {
							return null == t ? -1 : u.call(t, e, n)
						},
						merge: function(e, t) {
							for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
							return e.length = o, e
						},
						grep: function(e, t, n) {
							for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
							return i
						},
						map: function(e, t, n) {
							var i, o, r = 0,
								s = [];
							if (k(e))
								for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
							else
								for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
							return l(s)
						},
						guid: 1,
						support: m
					}), "function" == typeof Symbol && ($.fn[Symbol.iterator] = r[Symbol.iterator]), $.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
						d["[object " + t + "]"] = t.toLowerCase()
					}));
					var E = function(e) {
						var t, n, i, o, r, s, a, l, c, u, d, p, f, h, g, m, v, y, b, x = "sizzle" + 1 * new Date,
							w = e.document,
							T = 0,
							C = 0,
							$ = le(),
							k = le(),
							E = le(),
							A = le(),
							S = function(e, t) {
								return e === t && (d = !0), 0
							},
							N = {}.hasOwnProperty,
							j = [],
							D = j.pop,
							L = j.push,
							O = j.push,
							q = j.slice,
							_ = function(e, t) {
								for (var n = 0, i = e.length; n < i; n++)
									if (e[n] === t) return n;
								return -1
							},
							I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
							P = "[\\x20\\t\\r\\n\\f]",
							H = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
							R = "\\[" + P + "*(" + H + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + P + "*\\]",
							M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
							W = new RegExp(P + "+", "g"),
							F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
							B = new RegExp("^" + P + "*," + P + "*"),
							z = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
							U = new RegExp(P + "|>"),
							X = new RegExp(M),
							V = new RegExp("^" + H + "$"),
							G = {
								ID: new RegExp("^#(" + H + ")"),
								CLASS: new RegExp("^\\.(" + H + ")"),
								TAG: new RegExp("^(" + H + "|[*])"),
								ATTR: new RegExp("^" + R),
								PSEUDO: new RegExp("^" + M),
								CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
								bool: new RegExp("^(?:" + I + ")$", "i"),
								needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
							},
							Q = /HTML$/i,
							Y = /^(?:input|select|textarea|button)$/i,
							J = /^h\d$/i,
							K = /^[^{]+\{\s*\[native \w/,
							Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
							ee = /[+~]/,
							te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
							ne = function(e, t) {
								var n = "0x" + e.slice(1) - 65536;
								return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
							},
							ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
							oe = function(e, t) {
								return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
							},
							re = function() {
								p()
							},
							se = xe((function(e) {
								return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
							}), {
								dir: "parentNode",
								next: "legend"
							});
						try {
							O.apply(j = q.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
						} catch (e) {
							O = {
								apply: j.length ? function(e, t) {
									L.apply(e, q.call(t))
								} : function(e, t) {
									for (var n = e.length, i = 0; e[n++] = t[i++];);
									e.length = n - 1
								}
							}
						}

						function ae(e, t, i, o) {
							var r, a, c, u, d, h, v, y = t && t.ownerDocument,
								w = t ? t.nodeType : 9;
							if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
							if (!o && (p(t), t = t || f, g)) {
								if (11 !== w && (d = Z.exec(e)))
									if (r = d[1]) {
										if (9 === w) {
											if (!(c = t.getElementById(r))) return i;
											if (c.id === r) return i.push(c), i
										} else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
									} else {
										if (d[2]) return O.apply(i, t.getElementsByTagName(e)), i;
										if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(r)), i
									} if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
									if (v = e, y = t, 1 === w && (U.test(e) || z.test(e))) {
										for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, oe) : t.setAttribute("id", u = x)), a = (h = s(e)).length; a--;) h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
										v = h.join(",")
									}
									try {
										return O.apply(i, y.querySelectorAll(v)), i
									} catch (t) {
										A(e, !0)
									} finally {
										u === x && t.removeAttribute("id")
									}
								}
							}
							return l(e.replace(F, "$1"), t, i, o)
						}

						function le() {
							var e = [];
							return function t(n, o) {
								return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
							}
						}

						function ce(e) {
							return e[x] = !0, e
						}

						function ue(e) {
							var t = f.createElement("fieldset");
							try {
								return !!e(t)
							} catch (e) {
								return !1
							} finally {
								t.parentNode && t.parentNode.removeChild(t), t = null
							}
						}

						function de(e, t) {
							for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
						}

						function pe(e, t) {
							var n = t && e,
								i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
							if (i) return i;
							if (n)
								for (; n = n.nextSibling;)
									if (n === t) return -1;
							return e ? 1 : -1
						}

						function fe(e) {
							return function(t) {
								return "input" === t.nodeName.toLowerCase() && t.type === e
							}
						}

						function he(e) {
							return function(t) {
								var n = t.nodeName.toLowerCase();
								return ("input" === n || "button" === n) && t.type === e
							}
						}

						function ge(e) {
							return function(t) {
								return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
							}
						}

						function me(e) {
							return ce((function(t) {
								return t = +t, ce((function(n, i) {
									for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
								}))
							}))
						}

						function ve(e) {
							return e && void 0 !== e.getElementsByTagName && e
						}
						for (t in n = ae.support = {}, r = ae.isXML = function(e) {
								var t = e && e.namespaceURI,
									n = e && (e.ownerDocument || e).documentElement;
								return !Q.test(t || n && n.nodeName || "HTML")
							}, p = ae.setDocument = function(e) {
								var t, o, s = e ? e.ownerDocument || e : w;
								return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, g = !r(f), w != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.scope = ue((function(e) {
									return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
								})), n.attributes = ue((function(e) {
									return e.className = "i", !e.getAttribute("className")
								})), n.getElementsByTagName = ue((function(e) {
									return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
								})), n.getElementsByClassName = K.test(f.getElementsByClassName), n.getById = ue((function(e) {
									return h.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length
								})), n.getById ? (i.filter.ID = function(e) {
									var t = e.replace(te, ne);
									return function(e) {
										return e.getAttribute("id") === t
									}
								}, i.find.ID = function(e, t) {
									if (void 0 !== t.getElementById && g) {
										var n = t.getElementById(e);
										return n ? [n] : []
									}
								}) : (i.filter.ID = function(e) {
									var t = e.replace(te, ne);
									return function(e) {
										var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
										return n && n.value === t
									}
								}, i.find.ID = function(e, t) {
									if (void 0 !== t.getElementById && g) {
										var n, i, o, r = t.getElementById(e);
										if (r) {
											if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
											for (o = t.getElementsByName(e), i = 0; r = o[i++];)
												if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
										}
										return []
									}
								}), i.find.TAG = n.getElementsByTagName ? function(e, t) {
									return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
								} : function(e, t) {
									var n, i = [],
										o = 0,
										r = t.getElementsByTagName(e);
									if ("*" === e) {
										for (; n = r[o++];) 1 === n.nodeType && i.push(n);
										return i
									}
									return r
								}, i.find.CLASS = n.getElementsByClassName && function(e, t) {
									if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
								}, v = [], m = [], (n.qsa = K.test(f.querySelectorAll)) && (ue((function(e) {
									var t;
									h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
								})), ue((function(e) {
									e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
									var t = f.createElement("input");
									t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
								}))), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
									n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
								})), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
									var n = 9 === e.nodeType ? e.documentElement : e,
										i = t && t.parentNode;
									return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
								} : function(e, t) {
									if (t)
										for (; t = t.parentNode;)
											if (t === e) return !0;
									return !1
								}, S = t ? function(e, t) {
									if (e === t) return d = !0, 0;
									var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
									return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == w && b(w, e) ? -1 : t == f || t.ownerDocument == w && b(w, t) ? 1 : u ? _(u, e) - _(u, t) : 0 : 4 & i ? -1 : 1)
								} : function(e, t) {
									if (e === t) return d = !0, 0;
									var n, i = 0,
										o = e.parentNode,
										r = t.parentNode,
										s = [e],
										a = [t];
									if (!o || !r) return e == f ? -1 : t == f ? 1 : o ? -1 : r ? 1 : u ? _(u, e) - _(u, t) : 0;
									if (o === r) return pe(e, t);
									for (n = e; n = n.parentNode;) s.unshift(n);
									for (n = t; n = n.parentNode;) a.unshift(n);
									for (; s[i] === a[i];) i++;
									return i ? pe(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
								}, f) : f
							}, ae.matches = function(e, t) {
								return ae(e, null, null, t)
							}, ae.matchesSelector = function(e, t) {
								if (p(e), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
									var i = y.call(e, t);
									if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
								} catch (e) {
									A(t, !0)
								}
								return ae(t, f, null, [e]).length > 0
							}, ae.contains = function(e, t) {
								return (e.ownerDocument || e) != f && p(e), b(e, t)
							}, ae.attr = function(e, t) {
								(e.ownerDocument || e) != f && p(e);
								var o = i.attrHandle[t.toLowerCase()],
									r = o && N.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
								return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
							}, ae.escape = function(e) {
								return (e + "").replace(ie, oe)
							}, ae.error = function(e) {
								throw new Error("Syntax error, unrecognized expression: " + e)
							}, ae.uniqueSort = function(e) {
								var t, i = [],
									o = 0,
									r = 0;
								if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), d) {
									for (; t = e[r++];) t === e[r] && (o = i.push(r));
									for (; o--;) e.splice(i[o], 1)
								}
								return u = null, e
							}, o = ae.getText = function(e) {
								var t, n = "",
									i = 0,
									r = e.nodeType;
								if (r) {
									if (1 === r || 9 === r || 11 === r) {
										if ("string" == typeof e.textContent) return e.textContent;
										for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
									} else if (3 === r || 4 === r) return e.nodeValue
								} else
									for (; t = e[i++];) n += o(t);
								return n
							}, i = ae.selectors = {
								cacheLength: 50,
								createPseudo: ce,
								match: G,
								attrHandle: {},
								find: {},
								relative: {
									">": {
										dir: "parentNode",
										first: !0
									},
									" ": {
										dir: "parentNode"
									},
									"+": {
										dir: "previousSibling",
										first: !0
									},
									"~": {
										dir: "previousSibling"
									}
								},
								preFilter: {
									ATTR: function(e) {
										return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
									},
									CHILD: function(e) {
										return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
									},
									PSEUDO: function(e) {
										var t, n = !e[6] && e[2];
										return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
									}
								},
								filter: {
									TAG: function(e) {
										var t = e.replace(te, ne).toLowerCase();
										return "*" === e ? function() {
											return !0
										} : function(e) {
											return e.nodeName && e.nodeName.toLowerCase() === t
										}
									},
									CLASS: function(e) {
										var t = $[e + " "];
										return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && $(e, (function(e) {
											return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
										}))
									},
									ATTR: function(e, t, n) {
										return function(i) {
											var o = ae.attr(i, e);
											return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
										}
									},
									CHILD: function(e, t, n, i, o) {
										var r = "nth" !== e.slice(0, 3),
											s = "last" !== e.slice(-4),
											a = "of-type" === t;
										return 1 === i && 0 === o ? function(e) {
											return !!e.parentNode
										} : function(t, n, l) {
											var c, u, d, p, f, h, g = r !== s ? "nextSibling" : "previousSibling",
												m = t.parentNode,
												v = a && t.nodeName.toLowerCase(),
												y = !l && !a,
												b = !1;
											if (m) {
												if (r) {
													for (; g;) {
														for (p = t; p = p[g];)
															if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
														h = g = "only" === e && !h && "nextSibling"
													}
													return !0
												}
												if (h = [s ? m.firstChild : m.lastChild], s && y) {
													for (b = (f = (c = (u = (d = (p = m)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
														if (1 === p.nodeType && ++b && p === t) {
															u[e] = [T, f, b];
															break
														}
												} else if (y && (b = f = (c = (u = (d = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b)
													for (;
														(p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [T, b]), p !== t)););
												return (b -= o) === i || b % i == 0 && b / i >= 0
											}
										}
									},
									PSEUDO: function(e, t) {
										var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
										return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
											for (var i, r = o(e, t), s = r.length; s--;) e[i = _(e, r[s])] = !(n[i] = r[s])
										})) : function(e) {
											return o(e, 0, n)
										}) : o
									}
								},
								pseudos: {
									not: ce((function(e) {
										var t = [],
											n = [],
											i = a(e.replace(F, "$1"));
										return i[x] ? ce((function(e, t, n, o) {
											for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
										})) : function(e, o, r) {
											return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
										}
									})),
									has: ce((function(e) {
										return function(t) {
											return ae(e, t).length > 0
										}
									})),
									contains: ce((function(e) {
										return e = e.replace(te, ne),
											function(t) {
												return (t.textContent || o(t)).indexOf(e) > -1
											}
									})),
									lang: ce((function(e) {
										return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
											function(t) {
												var n;
												do {
													if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
												} while ((t = t.parentNode) && 1 === t.nodeType);
												return !1
											}
									})),
									target: function(t) {
										var n = e.location && e.location.hash;
										return n && n.slice(1) === t.id
									},
									root: function(e) {
										return e === h
									},
									focus: function(e) {
										return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
									},
									enabled: ge(!1),
									disabled: ge(!0),
									checked: function(e) {
										var t = e.nodeName.toLowerCase();
										return "input" === t && !!e.checked || "option" === t && !!e.selected
									},
									selected: function(e) {
										return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
									},
									empty: function(e) {
										for (e = e.firstChild; e; e = e.nextSibling)
											if (e.nodeType < 6) return !1;
										return !0
									},
									parent: function(e) {
										return !i.pseudos.empty(e)
									},
									header: function(e) {
										return J.test(e.nodeName)
									},
									input: function(e) {
										return Y.test(e.nodeName)
									},
									button: function(e) {
										var t = e.nodeName.toLowerCase();
										return "input" === t && "button" === e.type || "button" === t
									},
									text: function(e) {
										var t;
										return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
									},
									first: me((function() {
										return [0]
									})),
									last: me((function(e, t) {
										return [t - 1]
									})),
									eq: me((function(e, t, n) {
										return [n < 0 ? n + t : n]
									})),
									even: me((function(e, t) {
										for (var n = 0; n < t; n += 2) e.push(n);
										return e
									})),
									odd: me((function(e, t) {
										for (var n = 1; n < t; n += 2) e.push(n);
										return e
									})),
									lt: me((function(e, t, n) {
										for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
										return e
									})),
									gt: me((function(e, t, n) {
										for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
										return e
									}))
								}
							}, i.pseudos.nth = i.pseudos.eq, {
								radio: !0,
								checkbox: !0,
								file: !0,
								password: !0,
								image: !0
							}) i.pseudos[t] = fe(t);
						for (t in {
								submit: !0,
								reset: !0
							}) i.pseudos[t] = he(t);

						function ye() {}

						function be(e) {
							for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
							return i
						}

						function xe(e, t, n) {
							var i = t.dir,
								o = t.next,
								r = o || i,
								s = n && "parentNode" === r,
								a = C++;
							return t.first ? function(t, n, o) {
								for (; t = t[i];)
									if (1 === t.nodeType || s) return e(t, n, o);
								return !1
							} : function(t, n, l) {
								var c, u, d, p = [T, a];
								if (l) {
									for (; t = t[i];)
										if ((1 === t.nodeType || s) && e(t, n, l)) return !0
								} else
									for (; t = t[i];)
										if (1 === t.nodeType || s)
											if (u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
											else {
												if ((c = u[r]) && c[0] === T && c[1] === a) return p[2] = c[2];
												if (u[r] = p, p[2] = e(t, n, l)) return !0
											} return !1
							}
						}

						function we(e) {
							return e.length > 1 ? function(t, n, i) {
								for (var o = e.length; o--;)
									if (!e[o](t, n, i)) return !1;
								return !0
							} : e[0]
						}

						function Te(e, t, n, i, o) {
							for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
							return s
						}

						function Ce(e, t, n, i, o, r) {
							return i && !i[x] && (i = Ce(i)), o && !o[x] && (o = Ce(o, r)), ce((function(r, s, a, l) {
								var c, u, d, p = [],
									f = [],
									h = s.length,
									g = r || function(e, t, n) {
										for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
										return n
									}(t || "*", a.nodeType ? [a] : a, []),
									m = !e || !r && t ? g : Te(g, p, e, a, l),
									v = n ? o || (r ? e : h || i) ? [] : s : m;
								if (n && n(m, v, a, l), i)
									for (c = Te(v, f), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
								if (r) {
									if (o || e) {
										if (o) {
											for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
											o(null, v = [], c, l)
										}
										for (u = v.length; u--;)(d = v[u]) && (c = o ? _(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d))
									}
								} else v = Te(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : O.apply(s, v)
							}))
						}

						function $e(e) {
							for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = xe((function(e) {
									return e === t
								}), a, !0), d = xe((function(e) {
									return _(t, e) > -1
								}), a, !0), p = [function(e, n, i) {
									var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
									return t = null, o
								}]; l < r; l++)
								if (n = i.relative[e[l].type]) p = [xe(we(p), n)];
								else {
									if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
										for (o = ++l; o < r && !i.relative[e[o].type]; o++);
										return Ce(l > 1 && we(p), l > 1 && be(e.slice(0, l - 1).concat({
											value: " " === e[l - 2].type ? "*" : ""
										})).replace(F, "$1"), n, l < o && $e(e.slice(l, o)), o < r && $e(e = e.slice(o)), o < r && be(e))
									}
									p.push(n)
								} return we(p)
						}
						return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) {
							var n, o, r, s, a, l, c, u = k[e + " "];
							if (u) return t ? 0 : u.slice(0);
							for (a = e, l = [], c = i.preFilter; a;) {
								for (s in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = z.exec(a)) && (n = o.shift(), r.push({
										value: n,
										type: o[0].replace(F, " ")
									}), a = a.slice(n.length)), i.filter) !(o = G[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
									value: n,
									type: s,
									matches: o
								}), a = a.slice(n.length));
								if (!n) break
							}
							return t ? a.length : a ? ae.error(e) : k(e, l).slice(0)
						}, a = ae.compile = function(e, t) {
							var n, o = [],
								r = [],
								a = E[e + " "];
							if (!a) {
								for (t || (t = s(e)), n = t.length; n--;)(a = $e(t[n]))[x] ? o.push(a) : r.push(a);
								a = E(e, function(e, t) {
									var n = t.length > 0,
										o = e.length > 0,
										r = function(r, s, a, l, u) {
											var d, h, m, v = 0,
												y = "0",
												b = r && [],
												x = [],
												w = c,
												C = r || o && i.find.TAG("*", u),
												$ = T += null == w ? 1 : Math.random() || .1,
												k = C.length;
											for (u && (c = s == f || s || u); y !== k && null != (d = C[y]); y++) {
												if (o && d) {
													for (h = 0, s || d.ownerDocument == f || (p(d), a = !g); m = e[h++];)
														if (m(d, s || f, a)) {
															l.push(d);
															break
														} u && (T = $)
												}
												n && ((d = !m && d) && v--, r && b.push(d))
											}
											if (v += y, n && y !== v) {
												for (h = 0; m = t[h++];) m(b, x, s, a);
												if (r) {
													if (v > 0)
														for (; y--;) b[y] || x[y] || (x[y] = D.call(l));
													x = Te(x)
												}
												O.apply(l, x), u && !r && x.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
											}
											return u && (T = $, c = w), b
										};
									return n ? ce(r) : r
								}(r, o)), a.selector = e
							}
							return a
						}, l = ae.select = function(e, t, n, o) {
							var r, l, c, u, d, p = "function" == typeof e && e,
								f = !o && s(e = p.selector || e);
							if (n = n || [], 1 === f.length) {
								if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
									if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
									p && (t = t.parentNode), e = e.slice(l.shift().value.length)
								}
								for (r = G.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
									if ((d = i.find[u]) && (o = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
										if (l.splice(r, 1), !(e = o.length && be(l))) return O.apply(n, o), n;
										break
									}
							}
							return (p || a(e, f))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
						}, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!d, p(), n.sortDetached = ue((function(e) {
							return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
						})), ue((function(e) {
							return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
						})) || de("type|href|height|width", (function(e, t, n) {
							if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
						})), n.attributes && ue((function(e) {
							return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
						})) || de("value", (function(e, t, n) {
							if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
						})), ue((function(e) {
							return null == e.getAttribute("disabled")
						})) || de(I, (function(e, t, n) {
							var i;
							if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
						})), ae
					}(i);
					$.find = E, $.expr = E.selectors, $.expr[":"] = $.expr.pseudos, $.uniqueSort = $.unique = E.uniqueSort, $.text = E.getText, $.isXMLDoc = E.isXML, $.contains = E.contains, $.escapeSelector = E.escape;
					var A = function(e, t, n) {
							for (var i = [], o = void 0 !== n;
								(e = e[t]) && 9 !== e.nodeType;)
								if (1 === e.nodeType) {
									if (o && $(e).is(n)) break;
									i.push(e)
								} return i
						},
						S = function(e, t) {
							for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
							return n
						},
						N = $.expr.match.needsContext;

					function j(e, t) {
						return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
					}
					var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

					function L(e, t, n) {
						return v(t) ? $.grep(e, (function(e, i) {
							return !!t.call(e, i, e) !== n
						})) : t.nodeType ? $.grep(e, (function(e) {
							return e === t !== n
						})) : "string" != typeof t ? $.grep(e, (function(e) {
							return u.call(t, e) > -1 !== n
						})) : $.filter(t, e, n)
					}
					$.filter = function(e, t, n) {
						var i = t[0];
						return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? $.find.matchesSelector(i, e) ? [i] : [] : $.find.matches(e, $.grep(t, (function(e) {
							return 1 === e.nodeType
						})))
					}, $.fn.extend({
						find: function(e) {
							var t, n, i = this.length,
								o = this;
							if ("string" != typeof e) return this.pushStack($(e).filter((function() {
								for (t = 0; t < i; t++)
									if ($.contains(o[t], this)) return !0
							})));
							for (n = this.pushStack([]), t = 0; t < i; t++) $.find(e, o[t], n);
							return i > 1 ? $.uniqueSort(n) : n
						},
						filter: function(e) {
							return this.pushStack(L(this, e || [], !1))
						},
						not: function(e) {
							return this.pushStack(L(this, e || [], !0))
						},
						is: function(e) {
							return !!L(this, "string" == typeof e && N.test(e) ? $(e) : e || [], !1).length
						}
					});
					var O, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
					($.fn.init = function(e, t, n) {
						var i, o;
						if (!e) return this;
						if (n = n || O, "string" == typeof e) {
							if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
							if (i[1]) {
								if (t = t instanceof $ ? t[0] : t, $.merge(this, $.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), D.test(i[1]) && $.isPlainObject(t))
									for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
								return this
							}
							return (o = b.getElementById(i[2])) && (this[0] = o, this.length = 1), this
						}
						return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e($) : $.makeArray(e, this)
					}).prototype = $.fn, O = $(b);
					var _ = /^(?:parents|prev(?:Until|All))/,
						I = {
							children: !0,
							contents: !0,
							next: !0,
							prev: !0
						};

					function P(e, t) {
						for (;
							(e = e[t]) && 1 !== e.nodeType;);
						return e
					}
					$.fn.extend({
						has: function(e) {
							var t = $(e, this),
								n = t.length;
							return this.filter((function() {
								for (var e = 0; e < n; e++)
									if ($.contains(this, t[e])) return !0
							}))
						},
						closest: function(e, t) {
							var n, i = 0,
								o = this.length,
								r = [],
								s = "string" != typeof e && $(e);
							if (!N.test(e))
								for (; i < o; i++)
									for (n = this[i]; n && n !== t; n = n.parentNode)
										if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && $.find.matchesSelector(n, e))) {
											r.push(n);
											break
										} return this.pushStack(r.length > 1 ? $.uniqueSort(r) : r)
						},
						index: function(e) {
							return e ? "string" == typeof e ? u.call($(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
						},
						add: function(e, t) {
							return this.pushStack($.uniqueSort($.merge(this.get(), $(e, t))))
						},
						addBack: function(e) {
							return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
						}
					}), $.each({
						parent: function(e) {
							var t = e.parentNode;
							return t && 11 !== t.nodeType ? t : null
						},
						parents: function(e) {
							return A(e, "parentNode")
						},
						parentsUntil: function(e, t, n) {
							return A(e, "parentNode", n)
						},
						next: function(e) {
							return P(e, "nextSibling")
						},
						prev: function(e) {
							return P(e, "previousSibling")
						},
						nextAll: function(e) {
							return A(e, "nextSibling")
						},
						prevAll: function(e) {
							return A(e, "previousSibling")
						},
						nextUntil: function(e, t, n) {
							return A(e, "nextSibling", n)
						},
						prevUntil: function(e, t, n) {
							return A(e, "previousSibling", n)
						},
						siblings: function(e) {
							return S((e.parentNode || {}).firstChild, e)
						},
						children: function(e) {
							return S(e.firstChild)
						},
						contents: function(e) {
							return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (j(e, "template") && (e = e.content || e), $.merge([], e.childNodes))
						}
					}, (function(e, t) {
						$.fn[e] = function(n, i) {
							var o = $.map(this, t, n);
							return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = $.filter(i, o)), this.length > 1 && (I[e] || $.uniqueSort(o), _.test(e) && o.reverse()), this.pushStack(o)
						}
					}));
					var H = /[^\x20\t\r\n\f]+/g;

					function R(e) {
						return e
					}

					function M(e) {
						throw e
					}

					function W(e, t, n, i) {
						var o;
						try {
							e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
						} catch (e) {
							n.apply(void 0, [e])
						}
					}
					$.Callbacks = function(e) {
						e = "string" == typeof e ? function(e) {
							var t = {};
							return $.each(e.match(H) || [], (function(e, n) {
								t[n] = !0
							})), t
						}(e) : $.extend({}, e);
						var t, n, i, o, r = [],
							s = [],
							a = -1,
							l = function() {
								for (o = o || e.once, i = t = !0; s.length; a = -1)
									for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
								e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
							},
							c = {
								add: function() {
									return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
										$.each(n, (function(n, i) {
											v(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== T(i) && t(i)
										}))
									}(arguments), n && !t && l()), this
								},
								remove: function() {
									return $.each(arguments, (function(e, t) {
										for (var n;
											(n = $.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--
									})), this
								},
								has: function(e) {
									return e ? $.inArray(e, r) > -1 : r.length > 0
								},
								empty: function() {
									return r && (r = []), this
								},
								disable: function() {
									return o = s = [], r = n = "", this
								},
								disabled: function() {
									return !r
								},
								lock: function() {
									return o = s = [], n || t || (r = n = ""), this
								},
								locked: function() {
									return !!o
								},
								fireWith: function(e, n) {
									return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
								},
								fire: function() {
									return c.fireWith(this, arguments), this
								},
								fired: function() {
									return !!i
								}
							};
						return c
					}, $.extend({
						Deferred: function(e) {
							var t = [
									["notify", "progress", $.Callbacks("memory"), $.Callbacks("memory"), 2],
									["resolve", "done", $.Callbacks("once memory"), $.Callbacks("once memory"), 0, "resolved"],
									["reject", "fail", $.Callbacks("once memory"), $.Callbacks("once memory"), 1, "rejected"]
								],
								n = "pending",
								o = {
									state: function() {
										return n
									},
									always: function() {
										return r.done(arguments).fail(arguments), this
									},
									catch: function(e) {
										return o.then(null, e)
									},
									pipe: function() {
										var e = arguments;
										return $.Deferred((function(n) {
											$.each(t, (function(t, i) {
												var o = v(e[i[4]]) && e[i[4]];
												r[i[1]]((function() {
													var e = o && o.apply(this, arguments);
													e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
												}))
											})), e = null
										})).promise()
									},
									then: function(e, n, o) {
										var r = 0;

										function s(e, t, n, o) {
											return function() {
												var a = this,
													l = arguments,
													c = function() {
														var i, c;
														if (!(e < r)) {
															if ((i = n.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
															c = i && ("object" == typeof i || "function" == typeof i) && i.then, v(c) ? o ? c.call(i, s(r, t, R, o), s(r, t, M, o)) : (r++, c.call(i, s(r, t, R, o), s(r, t, M, o), s(r, t, R, t.notifyWith))) : (n !== R && (a = void 0, l = [i]), (o || t.resolveWith)(a, l))
														}
													},
													u = o ? c : function() {
														try {
															c()
														} catch (i) {
															$.Deferred.exceptionHook && $.Deferred.exceptionHook(i, u.stackTrace), e + 1 >= r && (n !== M && (a = void 0, l = [i]), t.rejectWith(a, l))
														}
													};
												e ? u() : ($.Deferred.getStackHook && (u.stackTrace = $.Deferred.getStackHook()), i.setTimeout(u))
											}
										}
										return $.Deferred((function(i) {
											t[0][3].add(s(0, i, v(o) ? o : R, i.notifyWith)), t[1][3].add(s(0, i, v(e) ? e : R)), t[2][3].add(s(0, i, v(n) ? n : M))
										})).promise()
									},
									promise: function(e) {
										return null != e ? $.extend(e, o) : o
									}
								},
								r = {};
							return $.each(t, (function(e, i) {
								var s = i[2],
									a = i[5];
								o[i[1]] = s.add, a && s.add((function() {
									n = a
								}), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(i[3].fire), r[i[0]] = function() {
									return r[i[0] + "With"](this === r ? void 0 : this, arguments), this
								}, r[i[0] + "With"] = s.fireWith
							})), o.promise(r), e && e.call(r, r), r
						},
						when: function(e) {
							var t = arguments.length,
								n = t,
								i = Array(n),
								o = a.call(arguments),
								r = $.Deferred(),
								s = function(e) {
									return function(n) {
										i[e] = this, o[e] = arguments.length > 1 ? a.call(arguments) : n, --t || r.resolveWith(i, o)
									}
								};
							if (t <= 1 && (W(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || v(o[n] && o[n].then))) return r.then();
							for (; n--;) W(o[n], s(n), r.reject);
							return r.promise()
						}
					});
					var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
					$.Deferred.exceptionHook = function(e, t) {
						i.console && i.console.warn && e && F.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
					}, $.readyException = function(e) {
						i.setTimeout((function() {
							throw e
						}))
					};
					var B = $.Deferred();

					function z() {
						b.removeEventListener("DOMContentLoaded", z), i.removeEventListener("load", z), $.ready()
					}
					$.fn.ready = function(e) {
						return B.then(e).catch((function(e) {
							$.readyException(e)
						})), this
					}, $.extend({
						isReady: !1,
						readyWait: 1,
						ready: function(e) {
							(!0 === e ? --$.readyWait : $.isReady) || ($.isReady = !0, !0 !== e && --$.readyWait > 0 || B.resolveWith(b, [$]))
						}
					}), $.ready.then = B.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout($.ready) : (b.addEventListener("DOMContentLoaded", z), i.addEventListener("load", z));
					var U = function(e, t, n, i, o, r, s) {
							var a = 0,
								l = e.length,
								c = null == n;
							if ("object" === T(n))
								for (a in o = !0, n) U(e, t, a, n[a], !0, r, s);
							else if (void 0 !== i && (o = !0, v(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
									return c.call($(e), n)
								})), t))
								for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
							return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
						},
						X = /^-ms-/,
						V = /-([a-z])/g;

					function G(e, t) {
						return t.toUpperCase()
					}

					function Q(e) {
						return e.replace(X, "ms-").replace(V, G)
					}
					var Y = function(e) {
						return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
					};

					function J() {
						this.expando = $.expando + J.uid++
					}
					J.uid = 1, J.prototype = {
						cache: function(e) {
							var t = e[this.expando];
							return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
								value: t,
								configurable: !0
							}))), t
						},
						set: function(e, t, n) {
							var i, o = this.cache(e);
							if ("string" == typeof t) o[Q(t)] = n;
							else
								for (i in t) o[Q(i)] = t[i];
							return o
						},
						get: function(e, t) {
							return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
						},
						access: function(e, t, n) {
							return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
						},
						remove: function(e, t) {
							var n, i = e[this.expando];
							if (void 0 !== i) {
								if (void 0 !== t) {
									n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(H) || []).length;
									for (; n--;) delete i[t[n]]
								}(void 0 === t || $.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
							}
						},
						hasData: function(e) {
							var t = e[this.expando];
							return void 0 !== t && !$.isEmptyObject(t)
						}
					};
					var K = new J,
						Z = new J,
						ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
						te = /[A-Z]/g;

					function ne(e, t, n) {
						var i;
						if (void 0 === n && 1 === e.nodeType)
							if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
								try {
									n = function(e) {
										return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
									}(n)
								} catch (e) {}
								Z.set(e, t, n)
							} else n = void 0;
						return n
					}
					$.extend({
						hasData: function(e) {
							return Z.hasData(e) || K.hasData(e)
						},
						data: function(e, t, n) {
							return Z.access(e, t, n)
						},
						removeData: function(e, t) {
							Z.remove(e, t)
						},
						_data: function(e, t, n) {
							return K.access(e, t, n)
						},
						_removeData: function(e, t) {
							K.remove(e, t)
						}
					}), $.fn.extend({
						data: function(e, t) {
							var n, i, o, r = this[0],
								s = r && r.attributes;
							if (void 0 === e) {
								if (this.length && (o = Z.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
									for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Q(i.slice(5)), ne(r, i, o[i]));
									K.set(r, "hasDataAttrs", !0)
								}
								return o
							}
							return "object" == typeof e ? this.each((function() {
								Z.set(this, e)
							})) : U(this, (function(t) {
								var n;
								if (r && void 0 === t) return void 0 !== (n = Z.get(r, e)) || void 0 !== (n = ne(r, e)) ? n : void 0;
								this.each((function() {
									Z.set(this, e, t)
								}))
							}), null, t, arguments.length > 1, null, !0)
						},
						removeData: function(e) {
							return this.each((function() {
								Z.remove(this, e)
							}))
						}
					}), $.extend({
						queue: function(e, t, n) {
							var i;
							if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, $.makeArray(n)) : i.push(n)), i || []
						},
						dequeue: function(e, t) {
							t = t || "fx";
							var n = $.queue(e, t),
								i = n.length,
								o = n.shift(),
								r = $._queueHooks(e, t);
							"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function() {
								$.dequeue(e, t)
							}), r)), !i && r && r.empty.fire()
						},
						_queueHooks: function(e, t) {
							var n = t + "queueHooks";
							return K.get(e, n) || K.access(e, n, {
								empty: $.Callbacks("once memory").add((function() {
									K.remove(e, [t + "queue", n])
								}))
							})
						}
					}), $.fn.extend({
						queue: function(e, t) {
							var n = 2;
							return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? $.queue(this[0], e) : void 0 === t ? this : this.each((function() {
								var n = $.queue(this, e, t);
								$._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && $.dequeue(this, e)
							}))
						},
						dequeue: function(e) {
							return this.each((function() {
								$.dequeue(this, e)
							}))
						},
						clearQueue: function(e) {
							return this.queue(e || "fx", [])
						},
						promise: function(e, t) {
							var n, i = 1,
								o = $.Deferred(),
								r = this,
								s = this.length,
								a = function() {
									--i || o.resolveWith(r, [r])
								};
							for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = K.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
							return a(), o.promise(t)
						}
					});
					var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
						oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
						re = ["Top", "Right", "Bottom", "Left"],
						se = b.documentElement,
						ae = function(e) {
							return $.contains(e.ownerDocument, e)
						},
						le = {
							composed: !0
						};
					se.getRootNode && (ae = function(e) {
						return $.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
					});
					var ce = function(e, t) {
						return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === $.css(e, "display")
					};

					function ue(e, t, n, i) {
						var o, r, s = 20,
							a = i ? function() {
								return i.cur()
							} : function() {
								return $.css(e, t, "")
							},
							l = a(),
							c = n && n[3] || ($.cssNumber[t] ? "" : "px"),
							u = e.nodeType && ($.cssNumber[t] || "px" !== c && +l) && oe.exec($.css(e, t));
						if (u && u[3] !== c) {
							for (l /= 2, c = c || u[3], u = +l || 1; s--;) $.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
							u *= 2, $.style(e, t, u + c), n = n || []
						}
						return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
					}
					var de = {};

					function pe(e) {
						var t, n = e.ownerDocument,
							i = e.nodeName,
							o = de[i];
						return o || (t = n.body.appendChild(n.createElement(i)), o = $.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), de[i] = o, o)
					}

					function fe(e, t) {
						for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = K.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ce(i) && (o[r] = pe(i))) : "none" !== n && (o[r] = "none", K.set(i, "display", n)));
						for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
						return e
					}
					$.fn.extend({
						show: function() {
							return fe(this, !0)
						},
						hide: function() {
							return fe(this)
						},
						toggle: function(e) {
							return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
								ce(this) ? $(this).show() : $(this).hide()
							}))
						}
					});
					var he, ge, me = /^(?:checkbox|radio)$/i,
						ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
						ye = /^$|^module$|\/(?:java|ecma)script/i;
					he = b.createDocumentFragment().appendChild(b.createElement("div")), (ge = b.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", m.option = !!he.lastChild;
					var be = {
						thead: [1, "<table>", "</table>"],
						col: [2, "<table><colgroup>", "</colgroup></table>"],
						tr: [2, "<table><tbody>", "</tbody></table>"],
						td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
						_default: [0, "", ""]
					};

					function xe(e, t) {
						var n;
						return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? $.merge([e], n) : n
					}

					function we(e, t) {
						for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
					}
					be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, m.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
					var Te = /<|&#?\w+;/;

					function Ce(e, t, n, i, o) {
						for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
							if ((r = e[f]) || 0 === r)
								if ("object" === T(r)) $.merge(p, r.nodeType ? [r] : r);
								else if (Te.test(r)) {
							for (s = s || d.appendChild(t.createElement("div")), a = (ve.exec(r) || ["", ""])[1].toLowerCase(), l = be[a] || be._default, s.innerHTML = l[1] + $.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
							$.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
						} else p.push(t.createTextNode(r));
						for (d.textContent = "", f = 0; r = p[f++];)
							if (i && $.inArray(r, i) > -1) o && o.push(r);
							else if (c = ae(r), s = xe(d.appendChild(r), "script"), c && we(s), n)
							for (u = 0; r = s[u++];) ye.test(r.type || "") && n.push(r);
						return d
					}
					var $e = /^([^.]*)(?:\.(.+)|)/;

					function ke() {
						return !0
					}

					function Ee() {
						return !1
					}

					function Ae(e, t) {
						return e === function() {
							try {
								return b.activeElement
							} catch (e) {}
						}() == ("focus" === t)
					}

					function Se(e, t, n, i, o, r) {
						var s, a;
						if ("object" == typeof t) {
							for (a in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, a, n, i, t[a], r);
							return e
						}
						if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ee;
						else if (!o) return e;
						return 1 === r && (s = o, o = function(e) {
							return $().off(e), s.apply(this, arguments)
						}, o.guid = s.guid || (s.guid = $.guid++)), e.each((function() {
							$.event.add(this, t, o, i, n)
						}))
					}

					function Ne(e, t, n) {
						n ? (K.set(e, t, !1), $.event.add(e, t, {
							namespace: !1,
							handler: function(e) {
								var i, o, r = K.get(this, t);
								if (1 & e.isTrigger && this[t]) {
									if (r.length)($.event.special[t] || {}).delegateType && e.stopPropagation();
									else if (r = a.call(arguments), K.set(this, t, r), i = n(this, t), this[t](), r !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
								} else r.length && (K.set(this, t, {
									value: $.event.trigger($.extend(r[0], $.Event.prototype), r.slice(1), this)
								}), e.stopImmediatePropagation())
							}
						})) : void 0 === K.get(e, t) && $.event.add(e, t, ke)
					}
					$.event = {
						global: {},
						add: function(e, t, n, i, o) {
							var r, s, a, l, c, u, d, p, f, h, g, m = K.get(e);
							if (Y(e))
								for (n.handler && (n = (r = n).handler, o = r.selector), o && $.find.matchesSelector(se, o), n.guid || (n.guid = $.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(t) {
										return void 0 !== $ && $.event.triggered !== t.type ? $.event.dispatch.apply(e, arguments) : void 0
									}), c = (t = (t || "").match(H) || [""]).length; c--;) f = g = (a = $e.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = $.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = $.event.special[f] || {}, u = $.extend({
									type: f,
									origType: g,
									data: i,
									handler: n,
									guid: n.guid,
									selector: o,
									needsContext: o && $.expr.match.needsContext.test(o),
									namespace: h.join(".")
								}, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), $.event.global[f] = !0)
						},
						remove: function(e, t, n, i, o) {
							var r, s, a, l, c, u, d, p, f, h, g, m = K.hasData(e) && K.get(e);
							if (m && (l = m.events)) {
								for (c = (t = (t || "").match(H) || [""]).length; c--;)
									if (f = g = (a = $e.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
										for (d = $.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
										s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || $.removeEvent(e, f, m.handle), delete l[f])
									} else
										for (f in l) $.event.remove(e, f + t[c], n, i, !0);
								$.isEmptyObject(l) && K.remove(e, "handle events")
							}
						},
						dispatch: function(e) {
							var t, n, i, o, r, s, a = new Array(arguments.length),
								l = $.event.fix(e),
								c = (K.get(this, "events") || Object.create(null))[l.type] || [],
								u = $.event.special[l.type] || {};
							for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
							if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
								for (s = $.event.handlers.call(this, l, c), t = 0;
									(o = s[t++]) && !l.isPropagationStopped();)
									for (l.currentTarget = o.elem, n = 0;
										(r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = (($.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
								return u.postDispatch && u.postDispatch.call(this, l), l.result
							}
						},
						handlers: function(e, t) {
							var n, i, o, r, s, a = [],
								l = t.delegateCount,
								c = e.target;
							if (l && c.nodeType && !("click" === e.type && e.button >= 1))
								for (; c !== this; c = c.parentNode || this)
									if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
										for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? $(o, this).index(c) > -1 : $.find(o, this, null, [c]).length), s[o] && r.push(i);
										r.length && a.push({
											elem: c,
											handlers: r
										})
									} return c = this, l < t.length && a.push({
								elem: c,
								handlers: t.slice(l)
							}), a
						},
						addProp: function(e, t) {
							Object.defineProperty($.Event.prototype, e, {
								enumerable: !0,
								configurable: !0,
								get: v(t) ? function() {
									if (this.originalEvent) return t(this.originalEvent)
								} : function() {
									if (this.originalEvent) return this.originalEvent[e]
								},
								set: function(t) {
									Object.defineProperty(this, e, {
										enumerable: !0,
										configurable: !0,
										writable: !0,
										value: t
									})
								}
							})
						},
						fix: function(e) {
							return e[$.expando] ? e : new $.Event(e)
						},
						special: {
							load: {
								noBubble: !0
							},
							click: {
								setup: function(e) {
									var t = this || e;
									return me.test(t.type) && t.click && j(t, "input") && Ne(t, "click", ke), !1
								},
								trigger: function(e) {
									var t = this || e;
									return me.test(t.type) && t.click && j(t, "input") && Ne(t, "click"), !0
								},
								_default: function(e) {
									var t = e.target;
									return me.test(t.type) && t.click && j(t, "input") && K.get(t, "click") || j(t, "a")
								}
							},
							beforeunload: {
								postDispatch: function(e) {
									void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
								}
							}
						}
					}, $.removeEvent = function(e, t, n) {
						e.removeEventListener && e.removeEventListener(t, n)
					}, $.Event = function(e, t) {
						if (!(this instanceof $.Event)) return new $.Event(e, t);
						e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && $.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[$.expando] = !0
					}, $.Event.prototype = {
						constructor: $.Event,
						isDefaultPrevented: Ee,
						isPropagationStopped: Ee,
						isImmediatePropagationStopped: Ee,
						isSimulated: !1,
						preventDefault: function() {
							var e = this.originalEvent;
							this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
						},
						stopPropagation: function() {
							var e = this.originalEvent;
							this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
						},
						stopImmediatePropagation: function() {
							var e = this.originalEvent;
							this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
						}
					}, $.each({
						altKey: !0,
						bubbles: !0,
						cancelable: !0,
						changedTouches: !0,
						ctrlKey: !0,
						detail: !0,
						eventPhase: !0,
						metaKey: !0,
						pageX: !0,
						pageY: !0,
						shiftKey: !0,
						view: !0,
						char: !0,
						code: !0,
						charCode: !0,
						key: !0,
						keyCode: !0,
						button: !0,
						buttons: !0,
						clientX: !0,
						clientY: !0,
						offsetX: !0,
						offsetY: !0,
						pointerId: !0,
						pointerType: !0,
						screenX: !0,
						screenY: !0,
						targetTouches: !0,
						toElement: !0,
						touches: !0,
						which: !0
					}, $.event.addProp), $.each({
						focus: "focusin",
						blur: "focusout"
					}, (function(e, t) {
						$.event.special[e] = {
							setup: function() {
								return Ne(this, e, Ae), !1
							},
							trigger: function() {
								return Ne(this, e), !0
							},
							_default: function() {
								return !0
							},
							delegateType: t
						}
					})), $.each({
						mouseenter: "mouseover",
						mouseleave: "mouseout",
						pointerenter: "pointerover",
						pointerleave: "pointerout"
					}, (function(e, t) {
						$.event.special[e] = {
							delegateType: t,
							bindType: t,
							handle: function(e) {
								var n, i = e.relatedTarget,
									o = e.handleObj;
								return i && (i === this || $.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
							}
						}
					})), $.fn.extend({
						on: function(e, t, n, i) {
							return Se(this, e, t, n, i)
						},
						one: function(e, t, n, i) {
							return Se(this, e, t, n, i, 1)
						},
						off: function(e, t, n) {
							var i, o;
							if (e && e.preventDefault && e.handleObj) return i = e.handleObj, $(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
							if ("object" == typeof e) {
								for (o in e) this.off(o, t, e[o]);
								return this
							}
							return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each((function() {
								$.event.remove(this, e, n, t)
							}))
						}
					});
					var je = /<script|<style|<link/i,
						De = /checked\s*(?:[^=]|=\s*.checked.)/i,
						Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

					function Oe(e, t) {
						return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && $(e).children("tbody")[0] || e
					}

					function qe(e) {
						return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
					}

					function _e(e) {
						return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
					}

					function Ie(e, t) {
						var n, i, o, r, s, a;
						if (1 === t.nodeType) {
							if (K.hasData(e) && (a = K.get(e).events))
								for (o in K.remove(t, "handle events"), a)
									for (n = 0, i = a[o].length; n < i; n++) $.event.add(t, o, a[o][n]);
							Z.hasData(e) && (r = Z.access(e), s = $.extend({}, r), Z.set(t, s))
						}
					}

					function Pe(e, t) {
						var n = t.nodeName.toLowerCase();
						"input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
					}

					function He(e, t, n, i) {
						t = l(t);
						var o, r, s, a, c, u, d = 0,
							p = e.length,
							f = p - 1,
							h = t[0],
							g = v(h);
						if (g || p > 1 && "string" == typeof h && !m.checkClone && De.test(h)) return e.each((function(o) {
							var r = e.eq(o);
							g && (t[0] = h.call(this, o, r.html())), He(r, t, n, i)
						}));
						if (p && (r = (o = Ce(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
							for (a = (s = $.map(xe(o, "script"), qe)).length; d < p; d++) c = o, d !== f && (c = $.clone(c, !0, !0), a && $.merge(s, xe(c, "script"))), n.call(e[d], c, d);
							if (a)
								for (u = s[s.length - 1].ownerDocument, $.map(s, _e), d = 0; d < a; d++) c = s[d], ye.test(c.type || "") && !K.access(c, "globalEval") && $.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? $._evalUrl && !c.noModule && $._evalUrl(c.src, {
									nonce: c.nonce || c.getAttribute("nonce")
								}, u) : w(c.textContent.replace(Le, ""), c, u))
						}
						return e
					}

					function Re(e, t, n) {
						for (var i, o = t ? $.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || $.cleanData(xe(i)), i.parentNode && (n && ae(i) && we(xe(i, "script")), i.parentNode.removeChild(i));
						return e
					}
					$.extend({
						htmlPrefilter: function(e) {
							return e
						},
						clone: function(e, t, n) {
							var i, o, r, s, a = e.cloneNode(!0),
								l = ae(e);
							if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || $.isXMLDoc(e)))
								for (s = xe(a), i = 0, o = (r = xe(e)).length; i < o; i++) Pe(r[i], s[i]);
							if (t)
								if (n)
									for (r = r || xe(e), s = s || xe(a), i = 0, o = r.length; i < o; i++) Ie(r[i], s[i]);
								else Ie(e, a);
							return (s = xe(a, "script")).length > 0 && we(s, !l && xe(e, "script")), a
						},
						cleanData: function(e) {
							for (var t, n, i, o = $.event.special, r = 0; void 0 !== (n = e[r]); r++)
								if (Y(n)) {
									if (t = n[K.expando]) {
										if (t.events)
											for (i in t.events) o[i] ? $.event.remove(n, i) : $.removeEvent(n, i, t.handle);
										n[K.expando] = void 0
									}
									n[Z.expando] && (n[Z.expando] = void 0)
								}
						}
					}), $.fn.extend({
						detach: function(e) {
							return Re(this, e, !0)
						},
						remove: function(e) {
							return Re(this, e)
						},
						text: function(e) {
							return U(this, (function(e) {
								return void 0 === e ? $.text(this) : this.empty().each((function() {
									1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
								}))
							}), null, e, arguments.length)
						},
						append: function() {
							return He(this, arguments, (function(e) {
								1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
							}))
						},
						prepend: function() {
							return He(this, arguments, (function(e) {
								if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
									var t = Oe(this, e);
									t.insertBefore(e, t.firstChild)
								}
							}))
						},
						before: function() {
							return He(this, arguments, (function(e) {
								this.parentNode && this.parentNode.insertBefore(e, this)
							}))
						},
						after: function() {
							return He(this, arguments, (function(e) {
								this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
							}))
						},
						empty: function() {
							for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && ($.cleanData(xe(e, !1)), e.textContent = "");
							return this
						},
						clone: function(e, t) {
							return e = null != e && e, t = null == t ? e : t, this.map((function() {
								return $.clone(this, e, t)
							}))
						},
						html: function(e) {
							return U(this, (function(e) {
								var t = this[0] || {},
									n = 0,
									i = this.length;
								if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
								if ("string" == typeof e && !je.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
									e = $.htmlPrefilter(e);
									try {
										for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && ($.cleanData(xe(t, !1)), t.innerHTML = e);
										t = 0
									} catch (e) {}
								}
								t && this.empty().append(e)
							}), null, e, arguments.length)
						},
						replaceWith: function() {
							var e = [];
							return He(this, arguments, (function(t) {
								var n = this.parentNode;
								$.inArray(this, e) < 0 && ($.cleanData(xe(this)), n && n.replaceChild(t, this))
							}), e)
						}
					}), $.each({
						appendTo: "append",
						prependTo: "prepend",
						insertBefore: "before",
						insertAfter: "after",
						replaceAll: "replaceWith"
					}, (function(e, t) {
						$.fn[e] = function(e) {
							for (var n, i = [], o = $(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), $(o[s])[t](n), c.apply(i, n.get());
							return this.pushStack(i)
						}
					}));
					var Me = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
						We = function(e) {
							var t = e.ownerDocument.defaultView;
							return t && t.opener || (t = i), t.getComputedStyle(e)
						},
						Fe = function(e, t, n) {
							var i, o, r = {};
							for (o in t) r[o] = e.style[o], e.style[o] = t[o];
							for (o in i = n.call(e), t) e.style[o] = r[o];
							return i
						},
						Be = new RegExp(re.join("|"), "i");

					function ze(e, t, n) {
						var i, o, r, s, a = e.style;
						return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = $.style(e, t)), !m.pixelBoxStyles() && Me.test(s) && Be.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
					}

					function Ue(e, t) {
						return {
							get: function() {
								if (!e()) return (this.get = t).apply(this, arguments);
								delete this.get
							}
						}
					}! function() {
						function e() {
							if (u) {
								c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c).appendChild(u);
								var e = i.getComputedStyle(u);
								n = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), u.style.position = "absolute", r = 12 === t(u.offsetWidth / 3), se.removeChild(c), u = null
							}
						}

						function t(e) {
							return Math.round(parseFloat(e))
						}
						var n, o, r, s, a, l, c = b.createElement("div"),
							u = b.createElement("div");
						u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, $.extend(m, {
							boxSizingReliable: function() {
								return e(), o
							},
							pixelBoxStyles: function() {
								return e(), s
							},
							pixelPosition: function() {
								return e(), n
							},
							reliableMarginLeft: function() {
								return e(), l
							},
							scrollboxSize: function() {
								return e(), r
							},
							reliableTrDimensions: function() {
								var e, t, n, o;
								return null == a && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", se.appendChild(e).appendChild(t).appendChild(n), o = i.getComputedStyle(t), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight, se.removeChild(e)), a
							}
						}))
					}();
					var Xe = ["Webkit", "Moz", "ms"],
						Ve = b.createElement("div").style,
						Ge = {};

					function Qe(e) {
						return $.cssProps[e] || Ge[e] || (e in Ve ? e : Ge[e] = function(e) {
							for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
								if ((e = Xe[n] + t) in Ve) return e
						}(e) || e)
					}
					var Ye = /^(none|table(?!-c[ea]).+)/,
						Je = /^--/,
						Ke = {
							position: "absolute",
							visibility: "hidden",
							display: "block"
						},
						Ze = {
							letterSpacing: "0",
							fontWeight: "400"
						};

					function et(e, t, n) {
						var i = oe.exec(t);
						return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
					}

					function tt(e, t, n, i, o, r) {
						var s = "width" === t ? 1 : 0,
							a = 0,
							l = 0;
						if (n === (i ? "border" : "content")) return 0;
						for (; s < 4; s += 2) "margin" === n && (l += $.css(e, n + re[s], !0, o)), i ? ("content" === n && (l -= $.css(e, "padding" + re[s], !0, o)), "margin" !== n && (l -= $.css(e, "border" + re[s] + "Width", !0, o))) : (l += $.css(e, "padding" + re[s], !0, o), "padding" !== n ? l += $.css(e, "border" + re[s] + "Width", !0, o) : a += $.css(e, "border" + re[s] + "Width", !0, o));
						return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
					}

					function nt(e, t, n) {
						var i = We(e),
							o = (!m.boxSizingReliable() || n) && "border-box" === $.css(e, "boxSizing", !1, i),
							r = o,
							s = ze(e, t, i),
							a = "offset" + t[0].toUpperCase() + t.slice(1);
						if (Me.test(s)) {
							if (!n) return s;
							s = "auto"
						}
						return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && j(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === $.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === $.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + tt(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
					}

					function it(e, t, n, i, o) {
						return new it.prototype.init(e, t, n, i, o)
					}
					$.extend({
						cssHooks: {
							opacity: {
								get: function(e, t) {
									if (t) {
										var n = ze(e, "opacity");
										return "" === n ? "1" : n
									}
								}
							}
						},
						cssNumber: {
							animationIterationCount: !0,
							columnCount: !0,
							fillOpacity: !0,
							flexGrow: !0,
							flexShrink: !0,
							fontWeight: !0,
							gridArea: !0,
							gridColumn: !0,
							gridColumnEnd: !0,
							gridColumnStart: !0,
							gridRow: !0,
							gridRowEnd: !0,
							gridRowStart: !0,
							lineHeight: !0,
							opacity: !0,
							order: !0,
							orphans: !0,
							widows: !0,
							zIndex: !0,
							zoom: !0
						},
						cssProps: {},
						style: function(e, t, n, i) {
							if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
								var o, r, s, a = Q(t),
									l = Je.test(t),
									c = e.style;
								if (l || (t = Qe(a)), s = $.cssHooks[t] || $.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
								"string" == (r = typeof n) && (o = oe.exec(n)) && o[1] && (n = ue(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || ($.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
							}
						},
						css: function(e, t, n, i) {
							var o, r, s, a = Q(t);
							return Je.test(t) || (t = Qe(a)), (s = $.cssHooks[t] || $.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = ze(e, t, i)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
						}
					}), $.each(["height", "width"], (function(e, t) {
						$.cssHooks[t] = {
							get: function(e, n, i) {
								if (n) return !Ye.test($.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, i) : Fe(e, Ke, (function() {
									return nt(e, t, i)
								}))
							},
							set: function(e, n, i) {
								var o, r = We(e),
									s = !m.scrollboxSize() && "absolute" === r.position,
									a = (s || i) && "border-box" === $.css(e, "boxSizing", !1, r),
									l = i ? tt(e, t, i, a, r) : 0;
								return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - tt(e, t, "border", !1, r) - .5)), l && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = $.css(e, t)), et(0, n, l)
							}
						}
					})), $.cssHooks.marginLeft = Ue(m.reliableMarginLeft, (function(e, t) {
						if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
							marginLeft: 0
						}, (function() {
							return e.getBoundingClientRect().left
						}))) + "px"
					})), $.each({
						margin: "",
						padding: "",
						border: "Width"
					}, (function(e, t) {
						$.cssHooks[e + t] = {
							expand: function(n) {
								for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + re[i] + t] = r[i] || r[i - 2] || r[0];
								return o
							}
						}, "margin" !== e && ($.cssHooks[e + t].set = et)
					})), $.fn.extend({
						css: function(e, t) {
							return U(this, (function(e, t, n) {
								var i, o, r = {},
									s = 0;
								if (Array.isArray(t)) {
									for (i = We(e), o = t.length; s < o; s++) r[t[s]] = $.css(e, t[s], !1, i);
									return r
								}
								return void 0 !== n ? $.style(e, t, n) : $.css(e, t)
							}), e, t, arguments.length > 1)
						}
					}), $.Tween = it, it.prototype = {
						constructor: it,
						init: function(e, t, n, i, o, r) {
							this.elem = e, this.prop = n, this.easing = o || $.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || ($.cssNumber[n] ? "" : "px")
						},
						cur: function() {
							var e = it.propHooks[this.prop];
							return e && e.get ? e.get(this) : it.propHooks._default.get(this)
						},
						run: function(e) {
							var t, n = it.propHooks[this.prop];
							return this.options.duration ? this.pos = t = $.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : it.propHooks._default.set(this), this
						}
					}, it.prototype.init.prototype = it.prototype, it.propHooks = {
						_default: {
							get: function(e) {
								var t;
								return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = $.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
							},
							set: function(e) {
								$.fx.step[e.prop] ? $.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !$.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : $.style(e.elem, e.prop, e.now + e.unit)
							}
						}
					}, it.propHooks.scrollTop = it.propHooks.scrollLeft = {
						set: function(e) {
							e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
						}
					}, $.easing = {
						linear: function(e) {
							return e
						},
						swing: function(e) {
							return .5 - Math.cos(e * Math.PI) / 2
						},
						_default: "swing"
					}, $.fx = it.prototype.init, $.fx.step = {};
					var ot, rt, st = /^(?:toggle|show|hide)$/,
						at = /queueHooks$/;

					function lt() {
						rt && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(lt) : i.setTimeout(lt, $.fx.interval), $.fx.tick())
					}

					function ct() {
						return i.setTimeout((function() {
							ot = void 0
						})), ot = Date.now()
					}

					function ut(e, t) {
						var n, i = 0,
							o = {
								height: e
							};
						for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = re[i])] = o["padding" + n] = e;
						return t && (o.opacity = o.width = e), o
					}

					function dt(e, t, n) {
						for (var i, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
							if (i = o[r].call(n, t, e)) return i
					}

					function pt(e, t, n) {
						var i, o, r = 0,
							s = pt.prefilters.length,
							a = $.Deferred().always((function() {
								delete l.elem
							})),
							l = function() {
								if (o) return !1;
								for (var t = ot || ct(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
								return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
							},
							c = a.promise({
								elem: e,
								props: $.extend({}, t),
								opts: $.extend(!0, {
									specialEasing: {},
									easing: $.easing._default
								}, n),
								originalProperties: t,
								originalOptions: n,
								startTime: ot || ct(),
								duration: n.duration,
								tweens: [],
								createTween: function(t, n) {
									var i = $.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
									return c.tweens.push(i), i
								},
								stop: function(t) {
									var n = 0,
										i = t ? c.tweens.length : 0;
									if (o) return this;
									for (o = !0; n < i; n++) c.tweens[n].run(1);
									return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
								}
							}),
							u = c.props;
						for (function(e, t) {
								var n, i, o, r, s;
								for (n in e)
									if (o = t[i = Q(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = $.cssHooks[i]) && "expand" in s)
										for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
									else t[i] = o
							}(u, c.opts.specialEasing); r < s; r++)
							if (i = pt.prefilters[r].call(c, e, u, c.opts)) return v(i.stop) && ($._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
						return $.map(u, dt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), $.fx.timer($.extend(l, {
							elem: e,
							anim: c,
							queue: c.opts.queue
						})), c
					}
					$.Animation = $.extend(pt, {
							tweeners: {
								"*": [function(e, t) {
									var n = this.createTween(e, t);
									return ue(n.elem, e, oe.exec(t), n), n
								}]
							},
							tweener: function(e, t) {
								v(e) ? (t = e, e = ["*"]) : e = e.match(H);
								for (var n, i = 0, o = e.length; i < o; i++) n = e[i], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
							},
							prefilters: [function(e, t, n) {
								var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
									p = this,
									f = {},
									h = e.style,
									g = e.nodeType && ce(e),
									m = K.get(e, "fxshow");
								for (i in n.queue || (null == (s = $._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
										s.unqueued || a()
									}), s.unqueued++, p.always((function() {
										p.always((function() {
											s.unqueued--, $.queue(e, "fx").length || s.empty.fire()
										}))
									}))), t)
									if (o = t[i], st.test(o)) {
										if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
											if ("show" !== o || !m || void 0 === m[i]) continue;
											g = !0
										}
										f[i] = m && m[i] || $.style(e, i)
									} if ((l = !$.isEmptyObject(t)) || !$.isEmptyObject(f))
									for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = K.get(e, "display")), "none" === (u = $.css(e, "display")) && (c ? u = c : (fe([e], !0), c = e.style.display || c, u = $.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === $.css(e, "float") && (l || (p.done((function() {
											h.display = c
										})), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
											h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
										}))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
										display: c
									}), r && (m.hidden = !g), g && fe([e], !0), p.done((function() {
										for (i in g || fe([e]), K.remove(e, "fxshow"), f) $.style(e, i, f[i])
									}))), l = dt(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
							}],
							prefilter: function(e, t) {
								t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
							}
						}), $.speed = function(e, t, n) {
							var i = e && "object" == typeof e ? $.extend({}, e) : {
								complete: n || !n && t || v(e) && e,
								duration: e,
								easing: n && t || t && !v(t) && t
							};
							return $.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in $.fx.speeds ? i.duration = $.fx.speeds[i.duration] : i.duration = $.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
								v(i.old) && i.old.call(this), i.queue && $.dequeue(this, i.queue)
							}, i
						}, $.fn.extend({
							fadeTo: function(e, t, n, i) {
								return this.filter(ce).css("opacity", 0).show().end().animate({
									opacity: t
								}, e, n, i)
							},
							animate: function(e, t, n, i) {
								var o = $.isEmptyObject(e),
									r = $.speed(t, n, i),
									s = function() {
										var t = pt(this, $.extend({}, e), r);
										(o || K.get(this, "finish")) && t.stop(!0)
									};
								return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
							},
							stop: function(e, t, n) {
								var i = function(e) {
									var t = e.stop;
									delete e.stop, t(n)
								};
								return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
									var t = !0,
										o = null != e && e + "queueHooks",
										r = $.timers,
										s = K.get(this);
									if (o) s[o] && s[o].stop && i(s[o]);
									else
										for (o in s) s[o] && s[o].stop && at.test(o) && i(s[o]);
									for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
									!t && n || $.dequeue(this, e)
								}))
							},
							finish: function(e) {
								return !1 !== e && (e = e || "fx"), this.each((function() {
									var t, n = K.get(this),
										i = n[e + "queue"],
										o = n[e + "queueHooks"],
										r = $.timers,
										s = i ? i.length : 0;
									for (n.finish = !0, $.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
									for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
									delete n.finish
								}))
							}
						}), $.each(["toggle", "show", "hide"], (function(e, t) {
							var n = $.fn[t];
							$.fn[t] = function(e, i, o) {
								return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, o)
							}
						})), $.each({
							slideDown: ut("show"),
							slideUp: ut("hide"),
							slideToggle: ut("toggle"),
							fadeIn: {
								opacity: "show"
							},
							fadeOut: {
								opacity: "hide"
							},
							fadeToggle: {
								opacity: "toggle"
							}
						}, (function(e, t) {
							$.fn[e] = function(e, n, i) {
								return this.animate(t, e, n, i)
							}
						})), $.timers = [], $.fx.tick = function() {
							var e, t = 0,
								n = $.timers;
							for (ot = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
							n.length || $.fx.stop(), ot = void 0
						}, $.fx.timer = function(e) {
							$.timers.push(e), $.fx.start()
						}, $.fx.interval = 13, $.fx.start = function() {
							rt || (rt = !0, lt())
						}, $.fx.stop = function() {
							rt = null
						}, $.fx.speeds = {
							slow: 600,
							fast: 200,
							_default: 400
						}, $.fn.delay = function(e, t) {
							return e = $.fx && $.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
								var o = i.setTimeout(t, e);
								n.stop = function() {
									i.clearTimeout(o)
								}
							}))
						},
						function() {
							var e = b.createElement("input"),
								t = b.createElement("select").appendChild(b.createElement("option"));
							e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
						}();
					var ft, ht = $.expr.attrHandle;
					$.fn.extend({
						attr: function(e, t) {
							return U(this, $.attr, e, t, arguments.length > 1)
						},
						removeAttr: function(e) {
							return this.each((function() {
								$.removeAttr(this, e)
							}))
						}
					}), $.extend({
						attr: function(e, t, n) {
							var i, o, r = e.nodeType;
							if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? $.prop(e, t, n) : (1 === r && $.isXMLDoc(e) || (o = $.attrHooks[t.toLowerCase()] || ($.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void $.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = $.find.attr(e, t)) ? void 0 : i)
						},
						attrHooks: {
							type: {
								set: function(e, t) {
									if (!m.radioValue && "radio" === t && j(e, "input")) {
										var n = e.value;
										return e.setAttribute("type", t), n && (e.value = n), t
									}
								}
							}
						},
						removeAttr: function(e, t) {
							var n, i = 0,
								o = t && t.match(H);
							if (o && 1 === e.nodeType)
								for (; n = o[i++];) e.removeAttribute(n)
						}
					}), ft = {
						set: function(e, t, n) {
							return !1 === t ? $.removeAttr(e, n) : e.setAttribute(n, n), n
						}
					}, $.each($.expr.match.bool.source.match(/\w+/g), (function(e, t) {
						var n = ht[t] || $.find.attr;
						ht[t] = function(e, t, i) {
							var o, r, s = t.toLowerCase();
							return i || (r = ht[s], ht[s] = o, o = null != n(e, t, i) ? s : null, ht[s] = r), o
						}
					}));
					var gt = /^(?:input|select|textarea|button)$/i,
						mt = /^(?:a|area)$/i;

					function vt(e) {
						return (e.match(H) || []).join(" ")
					}

					function yt(e) {
						return e.getAttribute && e.getAttribute("class") || ""
					}

					function bt(e) {
						return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
					}
					$.fn.extend({
						prop: function(e, t) {
							return U(this, $.prop, e, t, arguments.length > 1)
						},
						removeProp: function(e) {
							return this.each((function() {
								delete this[$.propFix[e] || e]
							}))
						}
					}), $.extend({
						prop: function(e, t, n) {
							var i, o, r = e.nodeType;
							if (3 !== r && 8 !== r && 2 !== r) return 1 === r && $.isXMLDoc(e) || (t = $.propFix[t] || t, o = $.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
						},
						propHooks: {
							tabIndex: {
								get: function(e) {
									var t = $.find.attr(e, "tabindex");
									return t ? parseInt(t, 10) : gt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
								}
							}
						},
						propFix: {
							for: "htmlFor",
							class: "className"
						}
					}), m.optSelected || ($.propHooks.selected = {
						get: function(e) {
							var t = e.parentNode;
							return t && t.parentNode && t.parentNode.selectedIndex, null
						},
						set: function(e) {
							var t = e.parentNode;
							t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
						}
					}), $.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
						$.propFix[this.toLowerCase()] = this
					})), $.fn.extend({
						addClass: function(e) {
							var t, n, i, o, r, s, a, l = 0;
							if (v(e)) return this.each((function(t) {
								$(this).addClass(e.call(this, t, yt(this)))
							}));
							if ((t = bt(e)).length)
								for (; n = this[l++];)
									if (o = yt(n), i = 1 === n.nodeType && " " + vt(o) + " ") {
										for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
										o !== (a = vt(i)) && n.setAttribute("class", a)
									} return this
						},
						removeClass: function(e) {
							var t, n, i, o, r, s, a, l = 0;
							if (v(e)) return this.each((function(t) {
								$(this).removeClass(e.call(this, t, yt(this)))
							}));
							if (!arguments.length) return this.attr("class", "");
							if ((t = bt(e)).length)
								for (; n = this[l++];)
									if (o = yt(n), i = 1 === n.nodeType && " " + vt(o) + " ") {
										for (s = 0; r = t[s++];)
											for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
										o !== (a = vt(i)) && n.setAttribute("class", a)
									} return this
						},
						toggleClass: function(e, t) {
							var n = typeof e,
								i = "string" === n || Array.isArray(e);
							return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
								$(this).toggleClass(e.call(this, n, yt(this), t), t)
							})) : this.each((function() {
								var t, o, r, s;
								if (i)
									for (o = 0, r = $(this), s = bt(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
								else void 0 !== e && "boolean" !== n || ((t = yt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
							}))
						},
						hasClass: function(e) {
							var t, n, i = 0;
							for (t = " " + e + " "; n = this[i++];)
								if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
							return !1
						}
					});
					var xt = /\r/g;
					$.fn.extend({
						val: function(e) {
							var t, n, i, o = this[0];
							return arguments.length ? (i = v(e), this.each((function(n) {
								var o;
								1 === this.nodeType && (null == (o = i ? e.call(this, n, $(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = $.map(o, (function(e) {
									return null == e ? "" : e + ""
								}))), (t = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
							}))) : o ? (t = $.valHooks[o.type] || $.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
						}
					}), $.extend({
						valHooks: {
							option: {
								get: function(e) {
									var t = $.find.attr(e, "value");
									return null != t ? t : vt($.text(e))
								}
							},
							select: {
								get: function(e) {
									var t, n, i, o = e.options,
										r = e.selectedIndex,
										s = "select-one" === e.type,
										a = s ? null : [],
										l = s ? r + 1 : o.length;
									for (i = r < 0 ? l : s ? r : 0; i < l; i++)
										if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
											if (t = $(n).val(), s) return t;
											a.push(t)
										} return a
								},
								set: function(e, t) {
									for (var n, i, o = e.options, r = $.makeArray(t), s = o.length; s--;)((i = o[s]).selected = $.inArray($.valHooks.option.get(i), r) > -1) && (n = !0);
									return n || (e.selectedIndex = -1), r
								}
							}
						}
					}), $.each(["radio", "checkbox"], (function() {
						$.valHooks[this] = {
							set: function(e, t) {
								if (Array.isArray(t)) return e.checked = $.inArray($(e).val(), t) > -1
							}
						}, m.checkOn || ($.valHooks[this].get = function(e) {
							return null === e.getAttribute("value") ? "on" : e.value
						})
					})), m.focusin = "onfocusin" in i;
					var wt = /^(?:focusinfocus|focusoutblur)$/,
						Tt = function(e) {
							e.stopPropagation()
						};
					$.extend($.event, {
						trigger: function(e, t, n, o) {
							var r, s, a, l, c, u, d, p, h = [n || b],
								g = f.call(e, "type") ? e.type : e,
								m = f.call(e, "namespace") ? e.namespace.split(".") : [];
							if (s = p = a = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !wt.test(g + $.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[$.expando] ? e : new $.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : $.makeArray(t, [e]), d = $.event.special[g] || {}, o || !d.trigger || !1 !== d.trigger.apply(n, t))) {
								if (!o && !d.noBubble && !y(n)) {
									for (l = d.delegateType || g, wt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
									a === (n.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || i)
								}
								for (r = 0;
									(s = h[r++]) && !e.isPropagationStopped();) p = s, e.type = r > 1 ? l : d.bindType || g, (u = (K.get(s, "events") || Object.create(null))[e.type] && K.get(s, "handle")) && u.apply(s, t), (u = c && s[c]) && u.apply && Y(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
								return e.type = g, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !Y(n) || c && v(n[g]) && !y(n) && ((a = n[c]) && (n[c] = null), $.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, Tt), n[g](), e.isPropagationStopped() && p.removeEventListener(g, Tt), $.event.triggered = void 0, a && (n[c] = a)), e.result
							}
						},
						simulate: function(e, t, n) {
							var i = $.extend(new $.Event, n, {
								type: e,
								isSimulated: !0
							});
							$.event.trigger(i, null, t)
						}
					}), $.fn.extend({
						trigger: function(e, t) {
							return this.each((function() {
								$.event.trigger(e, t, this)
							}))
						},
						triggerHandler: function(e, t) {
							var n = this[0];
							if (n) return $.event.trigger(e, t, n, !0)
						}
					}), m.focusin || $.each({
						focus: "focusin",
						blur: "focusout"
					}, (function(e, t) {
						var n = function(e) {
							$.event.simulate(t, e.target, $.event.fix(e))
						};
						$.event.special[t] = {
							setup: function() {
								var i = this.ownerDocument || this.document || this,
									o = K.access(i, t);
								o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1)
							},
							teardown: function() {
								var i = this.ownerDocument || this.document || this,
									o = K.access(i, t) - 1;
								o ? K.access(i, t, o) : (i.removeEventListener(e, n, !0), K.remove(i, t))
							}
						}
					}));
					var Ct = i.location,
						$t = {
							guid: Date.now()
						},
						kt = /\?/;
					$.parseXML = function(e) {
						var t, n;
						if (!e || "string" != typeof e) return null;
						try {
							t = (new i.DOMParser).parseFromString(e, "text/xml")
						} catch (e) {}
						return n = t && t.getElementsByTagName("parsererror")[0], t && !n || $.error("Invalid XML: " + (n ? $.map(n.childNodes, (function(e) {
							return e.textContent
						})).join("\n") : e)), t
					};
					var Et = /\[\]$/,
						At = /\r?\n/g,
						St = /^(?:submit|button|image|reset|file)$/i,
						Nt = /^(?:input|select|textarea|keygen)/i;

					function jt(e, t, n, i) {
						var o;
						if (Array.isArray(t)) $.each(t, (function(t, o) {
							n || Et.test(e) ? i(e, o) : jt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
						}));
						else if (n || "object" !== T(t)) i(e, t);
						else
							for (o in t) jt(e + "[" + o + "]", t[o], n, i)
					}
					$.param = function(e, t) {
						var n, i = [],
							o = function(e, t) {
								var n = v(t) ? t() : t;
								i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
							};
						if (null == e) return "";
						if (Array.isArray(e) || e.jquery && !$.isPlainObject(e)) $.each(e, (function() {
							o(this.name, this.value)
						}));
						else
							for (n in e) jt(n, e[n], t, o);
						return i.join("&")
					}, $.fn.extend({
						serialize: function() {
							return $.param(this.serializeArray())
						},
						serializeArray: function() {
							return this.map((function() {
								var e = $.prop(this, "elements");
								return e ? $.makeArray(e) : this
							})).filter((function() {
								var e = this.type;
								return this.name && !$(this).is(":disabled") && Nt.test(this.nodeName) && !St.test(e) && (this.checked || !me.test(e))
							})).map((function(e, t) {
								var n = $(this).val();
								return null == n ? null : Array.isArray(n) ? $.map(n, (function(e) {
									return {
										name: t.name,
										value: e.replace(At, "\r\n")
									}
								})) : {
									name: t.name,
									value: n.replace(At, "\r\n")
								}
							})).get()
						}
					});
					var Dt = /%20/g,
						Lt = /#.*$/,
						Ot = /([?&])_=[^&]*/,
						qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
						_t = /^(?:GET|HEAD)$/,
						It = /^\/\//,
						Pt = {},
						Ht = {},
						Rt = "*/".concat("*"),
						Mt = b.createElement("a");

					function Wt(e) {
						return function(t, n) {
							"string" != typeof t && (n = t, t = "*");
							var i, o = 0,
								r = t.toLowerCase().match(H) || [];
							if (v(n))
								for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
						}
					}

					function Ft(e, t, n, i) {
						var o = {},
							r = e === Ht;

						function s(a) {
							var l;
							return o[a] = !0, $.each(e[a] || [], (function(e, a) {
								var c = a(t, n, i);
								return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
							})), l
						}
						return s(t.dataTypes[0]) || !o["*"] && s("*")
					}

					function Bt(e, t) {
						var n, i, o = $.ajaxSettings.flatOptions || {};
						for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
						return i && $.extend(!0, e, i), e
					}
					Mt.href = Ct.href, $.extend({
						active: 0,
						lastModified: {},
						etag: {},
						ajaxSettings: {
							url: Ct.href,
							type: "GET",
							isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
							global: !0,
							processData: !0,
							async: !0,
							contentType: "application/x-www-form-urlencoded; charset=UTF-8",
							accepts: {
								"*": Rt,
								text: "text/plain",
								html: "text/html",
								xml: "application/xml, text/xml",
								json: "application/json, text/javascript"
							},
							contents: {
								xml: /\bxml\b/,
								html: /\bhtml/,
								json: /\bjson\b/
							},
							responseFields: {
								xml: "responseXML",
								text: "responseText",
								json: "responseJSON"
							},
							converters: {
								"* text": String,
								"text html": !0,
								"text json": JSON.parse,
								"text xml": $.parseXML
							},
							flatOptions: {
								url: !0,
								context: !0
							}
						},
						ajaxSetup: function(e, t) {
							return t ? Bt(Bt(e, $.ajaxSettings), t) : Bt($.ajaxSettings, e)
						},
						ajaxPrefilter: Wt(Pt),
						ajaxTransport: Wt(Ht),
						ajax: function(e, t) {
							"object" == typeof e && (t = e, e = void 0), t = t || {};
							var n, o, r, s, a, l, c, u, d, p, f = $.ajaxSetup({}, t),
								h = f.context || f,
								g = f.context && (h.nodeType || h.jquery) ? $(h) : $.event,
								m = $.Deferred(),
								v = $.Callbacks("once memory"),
								y = f.statusCode || {},
								x = {},
								w = {},
								T = "canceled",
								C = {
									readyState: 0,
									getResponseHeader: function(e) {
										var t;
										if (c) {
											if (!s)
												for (s = {}; t = qt.exec(r);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
											t = s[e.toLowerCase() + " "]
										}
										return null == t ? null : t.join(", ")
									},
									getAllResponseHeaders: function() {
										return c ? r : null
									},
									setRequestHeader: function(e, t) {
										return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
									},
									overrideMimeType: function(e) {
										return null == c && (f.mimeType = e), this
									},
									statusCode: function(e) {
										var t;
										if (e)
											if (c) C.always(e[C.status]);
											else
												for (t in e) y[t] = [y[t], e[t]];
										return this
									},
									abort: function(e) {
										var t = e || T;
										return n && n.abort(t), k(0, t), this
									}
								};
							if (m.promise(C), f.url = ((e || f.url || Ct.href) + "").replace(It, Ct.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain) {
								l = b.createElement("a");
								try {
									l.href = f.url, l.href = l.href, f.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host
								} catch (e) {
									f.crossDomain = !0
								}
							}
							if (f.data && f.processData && "string" != typeof f.data && (f.data = $.param(f.data, f.traditional)), Ft(Pt, f, t, C), c) return C;
							for (d in (u = $.event && f.global) && 0 == $.active++ && $.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !_t.test(f.type), o = f.url.replace(Lt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Dt, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (kt.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Ot, "$1"), p = (kt.test(o) ? "&" : "?") + "_=" + $t.guid++ + p), f.url = o + p), f.ifModified && ($.lastModified[o] && C.setRequestHeader("If-Modified-Since", $.lastModified[o]), $.etag[o] && C.setRequestHeader("If-None-Match", $.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(d, f.headers[d]);
							if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || c)) return C.abort();
							if (T = "abort", v.add(f.complete), C.done(f.success), C.fail(f.error), n = Ft(Ht, f, t, C)) {
								if (C.readyState = 1, u && g.trigger("ajaxSend", [C, f]), c) return C;
								f.async && f.timeout > 0 && (a = i.setTimeout((function() {
									C.abort("timeout")
								}), f.timeout));
								try {
									c = !1, n.send(x, k)
								} catch (e) {
									if (c) throw e;
									k(-1, e)
								}
							} else k(-1, "No Transport");

							function k(e, t, s, l) {
								var d, p, b, x, w, T = t;
								c || (c = !0, a && i.clearTimeout(a), n = void 0, r = l || "", C.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, s && (x = function(e, t, n) {
									for (var i, o, r, s, a = e.contents, l = e.dataTypes;
										"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
									if (i)
										for (o in a)
											if (a[o] && a[o].test(i)) {
												l.unshift(o);
												break
											} if (l[0] in n) r = l[0];
									else {
										for (o in n) {
											if (!l[0] || e.converters[o + " " + l[0]]) {
												r = o;
												break
											}
											s || (s = o)
										}
										r = r || s
									}
									if (r) return r !== l[0] && l.unshift(r), n[r]
								}(f, C, s)), !d && $.inArray("script", f.dataTypes) > -1 && $.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), x = function(e, t, n, i) {
									var o, r, s, a, l, c = {},
										u = e.dataTypes.slice();
									if (u[1])
										for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
									for (r = u.shift(); r;)
										if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
											if ("*" === r) r = l;
											else if ("*" !== l && l !== r) {
										if (!(s = c[l + " " + r] || c["* " + r]))
											for (o in c)
												if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
													!0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
													break
												} if (!0 !== s)
											if (s && e.throws) t = s(t);
											else try {
												t = s(t)
											} catch (e) {
												return {
													state: "parsererror",
													error: s ? e : "No conversion from " + l + " to " + r
												}
											}
									}
									return {
										state: "success",
										data: t
									}
								}(f, x, C, d), d ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && ($.lastModified[o] = w), (w = C.getResponseHeader("etag")) && ($.etag[o] = w)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, p = x.data, d = !(b = x.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", d ? m.resolveWith(h, [p, T, C]) : m.rejectWith(h, [C, T, b]), C.statusCode(y), y = void 0, u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [C, f, d ? p : b]), v.fireWith(h, [C, T]), u && (g.trigger("ajaxComplete", [C, f]), --$.active || $.event.trigger("ajaxStop")))
							}
							return C
						},
						getJSON: function(e, t, n) {
							return $.get(e, t, n, "json")
						},
						getScript: function(e, t) {
							return $.get(e, void 0, t, "script")
						}
					}), $.each(["get", "post"], (function(e, t) {
						$[t] = function(e, n, i, o) {
							return v(n) && (o = o || i, i = n, n = void 0), $.ajax($.extend({
								url: e,
								type: t,
								dataType: o,
								data: n,
								success: i
							}, $.isPlainObject(e) && e))
						}
					})), $.ajaxPrefilter((function(e) {
						var t;
						for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
					})), $._evalUrl = function(e, t, n) {
						return $.ajax({
							url: e,
							type: "GET",
							dataType: "script",
							cache: !0,
							async: !1,
							global: !1,
							converters: {
								"text script": function() {}
							},
							dataFilter: function(e) {
								$.globalEval(e, t, n)
							}
						})
					}, $.fn.extend({
						wrapAll: function(e) {
							var t;
							return this[0] && (v(e) && (e = e.call(this[0])), t = $(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
								for (var e = this; e.firstElementChild;) e = e.firstElementChild;
								return e
							})).append(this)), this
						},
						wrapInner: function(e) {
							return v(e) ? this.each((function(t) {
								$(this).wrapInner(e.call(this, t))
							})) : this.each((function() {
								var t = $(this),
									n = t.contents();
								n.length ? n.wrapAll(e) : t.append(e)
							}))
						},
						wrap: function(e) {
							var t = v(e);
							return this.each((function(n) {
								$(this).wrapAll(t ? e.call(this, n) : e)
							}))
						},
						unwrap: function(e) {
							return this.parent(e).not("body").each((function() {
								$(this).replaceWith(this.childNodes)
							})), this
						}
					}), $.expr.pseudos.hidden = function(e) {
						return !$.expr.pseudos.visible(e)
					}, $.expr.pseudos.visible = function(e) {
						return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
					}, $.ajaxSettings.xhr = function() {
						try {
							return new i.XMLHttpRequest
						} catch (e) {}
					};
					var zt = {
							0: 200,
							1223: 204
						},
						Ut = $.ajaxSettings.xhr();
					m.cors = !!Ut && "withCredentials" in Ut, m.ajax = Ut = !!Ut, $.ajaxTransport((function(e) {
						var t, n;
						if (m.cors || Ut && !e.crossDomain) return {
							send: function(o, r) {
								var s, a = e.xhr();
								if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
									for (s in e.xhrFields) a[s] = e.xhrFields[s];
								for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
								t = function(e) {
									return function() {
										t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
											binary: a.response
										} : {
											text: a.responseText
										}, a.getAllResponseHeaders()))
									}
								}, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
									4 === a.readyState && i.setTimeout((function() {
										t && n()
									}))
								}, t = t("abort");
								try {
									a.send(e.hasContent && e.data || null)
								} catch (e) {
									if (t) throw e
								}
							},
							abort: function() {
								t && t()
							}
						}
					})), $.ajaxPrefilter((function(e) {
						e.crossDomain && (e.contents.script = !1)
					})), $.ajaxSetup({
						accepts: {
							script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
						},
						contents: {
							script: /\b(?:java|ecma)script\b/
						},
						converters: {
							"text script": function(e) {
								return $.globalEval(e), e
							}
						}
					}), $.ajaxPrefilter("script", (function(e) {
						void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
					})), $.ajaxTransport("script", (function(e) {
						var t, n;
						if (e.crossDomain || e.scriptAttrs) return {
							send: function(i, o) {
								t = $("<script>").attr(e.scriptAttrs || {}).prop({
									charset: e.scriptCharset,
									src: e.url
								}).on("load error", n = function(e) {
									t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
								}), b.head.appendChild(t[0])
							},
							abort: function() {
								n && n()
							}
						}
					}));
					var Xt, Vt = [],
						Gt = /(=)\?(?=&|$)|\?\?/;
					$.ajaxSetup({
						jsonp: "callback",
						jsonpCallback: function() {
							var e = Vt.pop() || $.expando + "_" + $t.guid++;
							return this[e] = !0, e
						}
					}), $.ajaxPrefilter("json jsonp", (function(e, t, n) {
						var o, r, s, a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
						if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Gt, "$1" + o) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
							return s || $.error(o + " was not called"), s[0]
						}, e.dataTypes[0] = "json", r = i[o], i[o] = function() {
							s = arguments
						}, n.always((function() {
							void 0 === r ? $(i).removeProp(o) : i[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Vt.push(o)), s && v(r) && r(s[0]), s = r = void 0
						})), "script"
					})), m.createHTMLDocument = ((Xt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), $.parseHTML = function(e, t, n) {
						return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), r = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = Ce([e], t, r), r && r.length && $(r).remove(), $.merge([], o.childNodes)));
						var i, o, r
					}, $.fn.load = function(e, t, n) {
						var i, o, r, s = this,
							a = e.indexOf(" ");
						return a > -1 && (i = vt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && $.ajax({
							url: e,
							type: o || "GET",
							dataType: "html",
							data: t
						}).done((function(e) {
							r = arguments, s.html(i ? $("<div>").append($.parseHTML(e)).find(i) : e)
						})).always(n && function(e, t) {
							s.each((function() {
								n.apply(this, r || [e.responseText, t, e])
							}))
						}), this
					}, $.expr.pseudos.animated = function(e) {
						return $.grep($.timers, (function(t) {
							return e === t.elem
						})).length
					}, $.offset = {
						setOffset: function(e, t, n) {
							var i, o, r, s, a, l, c = $.css(e, "position"),
								u = $(e),
								d = {};
							"static" === c && (e.style.position = "relative"), a = u.offset(), r = $.css(e, "top"), l = $.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), v(t) && (t = t.call(e, n, $.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
						}
					}, $.fn.extend({
						offset: function(e) {
							if (arguments.length) return void 0 === e ? this : this.each((function(t) {
								$.offset.setOffset(this, e, t)
							}));
							var t, n, i = this[0];
							return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
								top: t.top + n.pageYOffset,
								left: t.left + n.pageXOffset
							}) : {
								top: 0,
								left: 0
							} : void 0
						},
						position: function() {
							if (this[0]) {
								var e, t, n, i = this[0],
									o = {
										top: 0,
										left: 0
									};
								if ("fixed" === $.css(i, "position")) t = i.getBoundingClientRect();
								else {
									for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === $.css(e, "position");) e = e.parentNode;
									e && e !== i && 1 === e.nodeType && ((o = $(e).offset()).top += $.css(e, "borderTopWidth", !0), o.left += $.css(e, "borderLeftWidth", !0))
								}
								return {
									top: t.top - o.top - $.css(i, "marginTop", !0),
									left: t.left - o.left - $.css(i, "marginLeft", !0)
								}
							}
						},
						offsetParent: function() {
							return this.map((function() {
								for (var e = this.offsetParent; e && "static" === $.css(e, "position");) e = e.offsetParent;
								return e || se
							}))
						}
					}), $.each({
						scrollLeft: "pageXOffset",
						scrollTop: "pageYOffset"
					}, (function(e, t) {
						var n = "pageYOffset" === t;
						$.fn[e] = function(i) {
							return U(this, (function(e, i, o) {
								var r;
								if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
								r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
							}), e, i, arguments.length)
						}
					})), $.each(["top", "left"], (function(e, t) {
						$.cssHooks[t] = Ue(m.pixelPosition, (function(e, n) {
							if (n) return n = ze(e, t), Me.test(n) ? $(e).position()[t] + "px" : n
						}))
					})), $.each({
						Height: "height",
						Width: "width"
					}, (function(e, t) {
						$.each({
							padding: "inner" + e,
							content: t,
							"": "outer" + e
						}, (function(n, i) {
							$.fn[i] = function(o, r) {
								var s = arguments.length && (n || "boolean" != typeof o),
									a = n || (!0 === o || !0 === r ? "margin" : "border");
								return U(this, (function(t, n, o) {
									var r;
									return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? $.css(t, n, a) : $.style(t, n, o, a)
								}), t, s ? o : void 0, s)
							}
						}))
					})), $.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
						$.fn[t] = function(e) {
							return this.on(t, e)
						}
					})), $.fn.extend({
						bind: function(e, t, n) {
							return this.on(e, null, t, n)
						},
						unbind: function(e, t) {
							return this.off(e, null, t)
						},
						delegate: function(e, t, n, i) {
							return this.on(t, e, n, i)
						},
						undelegate: function(e, t, n) {
							return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
						},
						hover: function(e, t) {
							return this.mouseenter(e).mouseleave(t || e)
						}
					}), $.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
						$.fn[t] = function(e, n) {
							return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
						}
					}));
					var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
					$.proxy = function(e, t) {
						var n, i, o;
						if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = a.call(arguments, 2), o = function() {
							return e.apply(t || this, i.concat(a.call(arguments)))
						}, o.guid = e.guid = e.guid || $.guid++, o
					}, $.holdReady = function(e) {
						e ? $.readyWait++ : $.ready(!0)
					}, $.isArray = Array.isArray, $.parseJSON = JSON.parse, $.nodeName = j, $.isFunction = v, $.isWindow = y, $.camelCase = Q, $.type = T, $.now = Date.now, $.isNumeric = function(e) {
						var t = $.type(e);
						return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
					}, $.trim = function(e) {
						return null == e ? "" : (e + "").replace(Qt, "")
					}, void 0 === (n = function() {
						return $
					}.apply(t, [])) || (e.exports = n);
					var Yt = i.jQuery,
						Jt = i.$;
					return $.noConflict = function(e) {
						return i.$ === $ && (i.$ = Jt), e && i.jQuery === $ && (i.jQuery = Yt), $
					}, void 0 === o && (i.jQuery = i.$ = $), $
				}))
			}
		},
		t = {};

	function n(i) {
		var o = t[i];
		if (void 0 !== o) return o.exports;
		var r = t[i] = {
			exports: {}
		};
		return e[i].call(r.exports, r, r.exports, n), r.exports
	}
	n.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), (() => {
		"use strict";
		var e = n(755);
		window.$ = window.jQuery = e;
		var t = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

		function i(e, t) {
			return e(t = {
				exports: {}
			}, t.exports), t.exports
		}
		var o = i((function(e, t) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t) {
					return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
				}, e.exports = t.default
			})),
			r = i((function(e, t) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t) {
					e.classList ? e.classList.add(t) : (0, i.default)(e) || (e.className = e.className + " " + t)
				};
				var n, i = (n = o) && n.__esModule ? n : {
					default: n
				};
				e.exports = t.default
			})),
			s = function(e, t) {
				e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
			},
			a = i((function(e, t) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.hasClass = t.removeClass = t.addClass = void 0;
				var n = l(r),
					i = l(s),
					a = l(o);

				function l(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				t.addClass = n.default, t.removeClass = i.default, t.hasClass = a.default, t.default = {
					addClass: n.default,
					removeClass: i.default,
					hasClass: a.default
				}
			})),
			l = a.removeClass,
			c = a.addClass,
			u = function(e) {
				var t = typeof e;
				return null != e && ("object" == t || "function" == t)
			},
			d = "object" == typeof t && t && t.Object === Object && t,
			p = "object" == typeof self && self && self.Object === Object && self,
			f = d || p || Function("return this")(),
			h = function() {
				return f.Date.now()
			},
			g = f.Symbol,
			m = Object.prototype,
			v = m.hasOwnProperty,
			y = m.toString,
			b = g ? g.toStringTag : void 0,
			x = Object.prototype.toString,
			w = g ? g.toStringTag : void 0,
			T = function(e) {
				return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : w && w in Object(e) ? function(e) {
					var t = v.call(e, b),
						n = e[b];
					try {
						e[b] = void 0;
						var i = !0
					} catch (e) {}
					var o = y.call(e);
					return i && (t ? e[b] = n : delete e[b]), o
				}(e) : function(e) {
					return x.call(e)
				}(e)
			},
			C = /^\s+|\s+$/g,
			k = /^[-+]0x[0-9a-f]+$/i,
			E = /^0b[01]+$/i,
			A = /^0o[0-7]+$/i,
			S = parseInt,
			N = function(e) {
				if ("number" == typeof e) return e;
				if (function(e) {
						return "symbol" == typeof e || function(e) {
							return null != e && "object" == typeof e
						}(e) && "[object Symbol]" == T(e)
					}(e)) return NaN;
				if (u(e)) {
					var t = "function" == typeof e.valueOf ? e.valueOf() : e;
					e = u(t) ? t + "" : t
				}
				if ("string" != typeof e) return 0 === e ? e : +e;
				e = e.replace(C, "");
				var n = E.test(e);
				return n || A.test(e) ? S(e.slice(2), n ? 2 : 8) : k.test(e) ? NaN : +e
			},
			j = Math.max,
			D = Math.min,
			L = function(e, t, n) {
				var i = !0,
					o = !0;
				if ("function" != typeof e) throw new TypeError("Expected a function");
				return u(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o),
					function(e, t, n) {
						var i, o, r, s, a, l, c = 0,
							d = !1,
							p = !1,
							f = !0;
						if ("function" != typeof e) throw new TypeError("Expected a function");

						function g(t) {
							var n = i,
								r = o;
							return i = o = void 0, c = t, s = e.apply(r, n)
						}

						function m(e) {
							var n = e - l;
							return void 0 === l || n >= t || n < 0 || p && e - c >= r
						}

						function v() {
							var e = h();
							if (m(e)) return y(e);
							a = setTimeout(v, function(e) {
								var n = t - (e - l);
								return p ? D(n, r - (e - c)) : n
							}(e))
						}

						function y(e) {
							return a = void 0, f && i ? g(e) : (i = o = void 0, s)
						}

						function b() {
							var e = h(),
								n = m(e);
							if (i = arguments, o = this, l = e, n) {
								if (void 0 === a) return function(e) {
									return c = e, a = setTimeout(v, t), d ? g(e) : s
								}(l);
								if (p) return a = setTimeout(v, t), g(l)
							}
							return void 0 === a && (a = setTimeout(v, t)), s
						}
						return t = N(t) || 0, u(n) && (d = !!n.leading, r = (p = "maxWait" in n) ? j(N(n.maxWait) || 0, t) : r, f = "trailing" in n ? !!n.trailing : f), b.cancel = function() {
							void 0 !== a && clearTimeout(a), c = 0, i = l = o = a = void 0
						}, b.flush = function() {
							return void 0 === a ? s : y(h())
						}, b
					}(e, t, {
						leading: i,
						maxWait: t,
						trailing: o
					})
			},
			O = null,
			q = [],
			_ = function() {
				O && (clearTimeout(O), O = null)
			},
			I = function(e) {
				if (e && q.push(e), "undefined" == typeof document) _(), setTimeout((function() {
					I()
				}), 100);
				else {
					_();
					for (var t = 0, n = q.length; t < n; t++) q[t](document);
					q.length = 0
				}
			},
			P = function(e) {
				return RegExp("msie" + (isNaN(e) ? "" : "\\s" + e), "i").test(navigator.userAgent)
			},
			H = null,
			R = function(e) {
				var t = this;
				void 0 === e && (e = null), this.state = {
					addedClasses: !1
				}, this.matchCache = {}, this.featureCache = {}, this.classes = "", this.setUserAgent(e), this.callback = null, "undefined" != typeof document || this.userAgent || I((function() {
					t.setUserAgent()
				}))
			},
			M = {
				features: {},
				deviceorientation: {},
				ie9: {},
				touchDevice: {},
				touch: {},
				ios: {},
				iphone: {},
				ipod: {},
				ipad: {},
				android: {},
				androidPhone: {},
				androidTablet: {},
				blackberry: {},
				blackberryPhone: {},
				blackberryTablet: {},
				windows: {},
				ie10: {},
				windowsPhone: {},
				windowsTablet: {},
				fxos: {},
				fxosPhone: {},
				fxosTablet: {},
				meego: {},
				cordova: {},
				nodeWebkit: {},
				mobile: {},
				tablet: {},
				desktop: {},
				television: {},
				portrait: {},
				landscape: {}
			},
			W = {
				device: {}
			};
		W.device.get = function() {
			return H || (H = new R), H
		}, R.prototype.match = function(e) {
			return this.matchCache[e] || (this.matchCache[e] = this.userAgent.indexOf(e) > -1), this.matchCache[e]
		}, R.prototype.feature = function(e) {
			return this.featureCache[e]
		}, R.prototype.addFeature = function(e, t) {
			return this.featureCache[e] || (this.featureCache[e] = t), t
		}, R.prototype.setUserAgent = function(e) {
			void 0 === e && (e = null), this.userAgent = e || this.userAgent || ("undefined" != typeof document ? window.navigator.userAgent : ""), this.userAgent && (_(), this.matchCache = {}, this.userAgent = this.userAgent.toLowerCase())
		}, R.prototype.onOrientationChange = function(e) {}, R.prototype.getClasses = function() {
			return this.classes || (this.userAgent || this.setUserAgent(), this.landscape ? this.classes += "landscape " : this.classes += "portrait ", this.touch && (this.classes += "touch "), this.ios ? this.ipad ? this.classes += "ios ipad tablet " : this.iphone ? this.classes += "ios iphone mobile " : this.ipod && (this.classes += "ios ipod mobile ") : this.android ? this.androidTablet ? this.classes += "android tablet " : this.classes += "android mobile " : this.blackberry ? this.blackberryTablet ? this.classes += "blackberry tablet " : this.classes += "blackberry mobile " : this.windows ? this.windowsTablet ? this.classes += "windows tablet " : this.windowsPhone ? this.classes += "windows mobile " : this.classes += "windows desktop " : this.fxos ? this.fxosTablet ? this.classes += "fxos tablet " : this.classes += "fxos mobile " : this.meego ? this.classes += "meego mobile " : this.nodeWebkit ? this.classes += "node-webkit " : this.television ? this.classes += "television " : this.desktop && (this.classes += "desktop "), this.cordova && (this.classes += "cordova "), !this.desktop && this.deviceorientation && (this.classes += "deviceorientation "), this.classes = this.classes.slice(0, -1)), this.classes
		}, R.prototype.addClasses = function(e) {
			if (!this.targetNode) {
				if (this.targetNode = e, e || "undefined" == typeof document || (this.targetNode = document.documentElement), !this.targetNode) return;
				this.userAgent || this.setUserAgent(), this.commitClasses(), this.addListener()
			}
		}, R.prototype.addListener = function() {
			var e = this;
			if (!this.hasListener) {
				this.hasListener = !0, this.handleOrientation = this.handleOrientation.bind(this), this.onResize = L(this.handleOrientation, 200);
				var t = function() {
					setTimeout((function() {
						e.handleOrientation()
					}), 10)
				};
				"onorientationchange" in window ? window.addEventListener("orientationchange", t, !1) : window.addEventListener("resize", this.onResize, !1), t()
			}
		}, R.prototype.handleOrientation = function() {
			this.onOrientationChange(this.landscape), this.targetNode && (this.landscape ? (l(this.targetNode, "portrait"), c(this.targetNode, "landscape")) : (l(this.targetNode, "landscape"), c(this.targetNode, "portrait")))
		}, R.prototype.commitClasses = function() {
			!this.state.addedClasses && this.targetNode && (this.state.addedClasses = !0, this.targetNode.className += this.getClasses())
		}, M.features.get = function() {
			return {
				wheelEvent: this.feature("wheelEvent") || this.addFeature("wheelEvent", "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll")
			}
		}, M.deviceorientation.get = function() {
			return this.canOrientate || (this.canOrientate = "ondeviceorientation" in window || "deviceorientation" in window), !this.desktop && this.canOrientate
		}, M.ie9.get = function() {
			return this.matchCache.ie9 || "undefined" != typeof document && (this.matchCache.ie9 = this.windows && P(10)), this.matchCache.ie9 || !1
		}, M.touchDevice.get = function() {
			return this.matchCache.touchDevice || "undefined" != typeof document && (this.matchCache.touchDevice = !(!navigator || !navigator.userAgent) && navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/)), this.matchCache.touchDevice || !1
		}, M.touch.get = function() {
			return this.matchCache.touch || "undefined" != typeof document && (this.matchCache.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || navigator && navigator.msMaxTouchPoints > 0 || navigator && navigator.maxTouchPoints), this.matchCache.touch || !1
		}, M.ios.get = function() {
			return this.iphone || this.ipod || this.ipad
		}, M.iphone.get = function() {
			return !this.windows && this.match("iphone")
		}, M.ipod.get = function() {
			return this.match("ipod")
		}, M.ipad.get = function() {
			return this.match("ipad")
		}, M.android.get = function() {
			return !this.windows && this.match("android")
		}, M.androidPhone.get = function() {
			return this.android && this.match("mobile")
		}, M.androidTablet.get = function() {
			return this.android && !this.match("mobile")
		}, M.blackberry.get = function() {
			return this.match("blackberry") || this.match("bb10") || this.match("rim")
		}, M.blackberryPhone.get = function() {
			return this.blackberry && !this.match("tablet")
		}, M.blackberryTablet.get = function() {
			return this.blackberry && this.match("tablet")
		}, M.windows.get = function() {
			return this.match("windows")
		}, M.ie10.get = function() {
			return this.matchCache.ie10 || "undefined" != typeof document && (this.matchCache.ie10 = this.windows && P(10)), this.matchCache.ie10 || !1
		}, M.windowsPhone.get = function() {
			return this.windows && this.match("phone")
		}, M.windowsTablet.get = function() {
			return this.windows && this.match("touch") && !this.windowsPhone
		}, M.fxos.get = function() {
			return (this.match("(mobile;") || this.match("(tablet;")) && this.match("; rv:")
		}, M.fxosPhone.get = function() {
			return this.fxos && this.match("mobile")
		}, M.fxosTablet.get = function() {
			return this.fxos && this.match("tablet")
		}, M.meego.get = function() {
			return this.match("meego")
		}, M.cordova.get = function() {
			return window.cordova && "file:" === location.protocol
		}, M.nodeWebkit.get = function() {
			return "object" == typeof window.process
		}, M.mobile.get = function() {
			return this.androidPhone || this.iphone || this.ipod || this.windowsPhone || this.blackberryPhone || this.fxosPhone || this.meego
		}, M.tablet.get = function() {
			return this.ipad || this.androidTablet || this.blackberryTablet || this.windowsTablet || this.fxosTablet
		}, M.desktop.get = function() {
			return !this.tablet && !this.mobile
		}, M.television.get = function() {
			var e, t = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];
			for (e = 0; e++ < t.length;)
				if (this.match(t[e])) return !0;
			return !1
		}, M.portrait.get = function() {
			return "orientation" in window ? 0 === window.orientation : "undefined" != typeof window && window.innerHeight / window.innerWidth > 1
		}, M.landscape.get = function() {
			return "undefined" != typeof window && ("orientation" in window ? 0 !== window.orientation : window.innerHeight / window.innerWidth < 1)
		}, Object.defineProperties(R.prototype, M), Object.defineProperties(R, W);
		var F = new R;
		const B = {
				vh() {
					$("body").append('<div class="vh-fix" style="position:fixed;width:1px;left:-9999px;top:0;bottom:0;pointer-events:none;opacity:0;visibility:hidden;" />');
					let e = .01 * $(".vh-fix").height();
					$("html").css("--vh", e + "px"), $(".vh-fix").remove()
				},
				contW() {
					let e = $(".container").not(".container--off").first().width();
					$("html").css("--cont-w-a", e + "px"), $(".container--off").each((function() {
						let e = $(this).width();
						$(this).css("--cont-w-a", e + "px")
					}))
				},
				contOff() {
					let e = ($(window).width() - $(".container").not(".container--off").first().width()) / 2;
					$("html").css("--cont-off", e + "px"), $(".container--off").each((function() {
						let e = ($(window).width() - $(this).width()) / 2;
						$(this).css("--cont-off", e + "px")
					}))
				},
				sb() {
					let e = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
					$("body").append(e);
					let t = $("div", e).innerWidth();
					e.css("overflow-y", "scroll");
					let n = $("div", e).innerWidth();
					$(e).remove(), parseInt($(".app").height()) > app.settings.winHeight ? app.settings.sbWidth = t - n : app.settings.sbWidth = 0, $("html").css("--sbW", app.settings.sbWidth + "px")
				},
				all() {
					this.vh(), this.mobile()
				},
				mobile() {
					this.contW(), this.contOff(), this.sb()
				}
			},
			z = {
				define(e) {
					new window.IntersectionObserver((([t]) => {
						t.isIntersecting && (e.data("loaded") || (this.show(e), e.data("loaded", !0).addClass("loaded")))
					}), {
						root: null,
						threshold: .1
					}).observe(e.get(0))
				},
				show(e) {
					if (e.is("img") && (e.attr("src", e.attr("data-src")), e.on("load", (function() {
							e.removeAttr("data-src")
						}))), e.is("picture")) {
						let t = e.find("img"),
							n = e.find("source");
						t.attr("src", t.attr("data-src")), n.each((function() {
							$(this).attr("srcset", $(this).attr("data-srcset"))
						}))
					}
				},
				init() {
					let e = this;
					$(".lazyLoad").each((function(t, n) {
						e.define($(n))
					}))
				}
			},
			U = {
				init(e) {
					let t = ".ui-tabs",
						n = t + "__item",
						i = e.find(n),
						o = e.attr("data-tabs"),
						r = "";
					(!e.find(n + ".active").length || e.find(n + ".active").length > 1) && (i.removeClass("active"), i.first().addClass("active")), i.on("click", (function() {
						let e = $(this),
							n = e.attr("data-tab");
						i.removeClass("active"), $(`${t}-trigger[data-tabs="${o}"], ${t}-content[data-tabs="${o}"]`).removeClass("active"), e.addClass("active"), $(`${t}-trigger[data-tabs="${o}"][data-tab="${n}"], ${t}-content[data-tabs="${o}"][data-tab="${n}"]`).addClass("active"), r = n
					})), e.find(n + ".active").trigger("click"), e.data("tabsInit", !0)
				},
				bind() {
					$(document).on("click", ".ui-tabs-trigger", (function() {
						$(`.ui-tabs[data-tabs="${$(this).attr("data-tabs")}"]`).find(`.ui-tabs__item[data-tab="${$(this).attr("data-tab")}"`).trigger("click")
					}))
				}
			},
			X = {
				loaded: [],
				overlay: $(".popups-overlay"),
				bind() {
					let e = this;
					$(document).on("click", "[data-popup]", (function() {
						let t = $(this).attr("data-popup");
						$(this).attr("data-popup-video") ? e.video(t, {
							video: $(this).attr("data-popup-video")
						}) : e.open(t, {
							form: $(this).attr("data-popup-form") || "",
							ttl: $(this).attr("data-popup-header") || "",
							text: $(this).attr("data-popup-text") || "",
							btn: $(this).attr("data-popup-btn") || ""
						})
					})), $(document).on("click", ".popup__close, [data-popup-close]", (function() {
						e.close()
					})), $(document).on("click", ".popup", (function(t) {
						$(t.target).closest(".popup__content").length || (e.close(), t.stopPropagation())
					})), $(document).on("keyup", (function(t) {
						"Escape" === t.key && app.settings.popupOpened && e.close()
					}))
				},
				open(e, t) {
					let n = this;
					if ($("#" + e).length) {
						$(".app").addClass("app--popup"), app.scrollLock(), $(".popup").removeClass("active");
						let i = $(".popup#" + e);
						if (i.attr("data-overlay") && n.overlay.css("--overlay-color", i.attr("data-overlay")), "request" == e) {
							let e = t?.ttl ? t.ttl : "Оставить заявку",
								n = t?.text ? t.text : "Оставьте заявку, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время",
								o = t?.btn ? t.btn : "Отправить";
							i.find(".popup-head__title").html(e), i.find(".popup-head__subtitle").html(n), i.find(".ui-btn__text").html(o)
						}
						i.scrollTop(0).addClass("active"), app.settings.popupOpened = !0
					}
				},
				video(e, t) {
					this.open(e), $("#" + e).length && t?.video && $(".popup#" + e).find(".popup__video").html(`<iframe src="${t.video}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`)
				},
				load(e, t) {
					let n = this;
					n.loaded.includes(t) || ($("#" + e).find(".popup__load").load(t, (function(t, n, i) {
						"error" == n && $("#" + e).find(".popup__load").html(`Ошибка: ${i.status} ${i.xhr}`)
					})), n.loaded.push(t)), n.open(e)
				},
				close() {
					let e = this;
					$(".popup").removeClass("active"), $(".app").removeClass("app--popup"), setTimeout((function() {
						app.scrollLock("unlock"), e.overlay.css("--overlay-color", "")
					}), app.settings.animDuration), $(".popup__video").html(""), $(".popup .ui-form").each((function() {
						app.forms.clear($(this))
					})), app.settings.popupOpened = !1
				},
				thx(e) {
					e || (e = "thx"), this.open(e), $(".popup .ui-form").each((function() {
						app.forms.clear($(this))
					}))
				},
				init(e) {
					let t = e.attr("data-close") ? e.attr("data-close") : "";
					e.find(".popup__close-container").prepend(`<div class="ui-crossbtn popup__close ${t} noselect" />`), e.data("popupsInit", !0)
				}
			},
			V = {
				sel: {
					field: "ui-form__field",
					fieldReq: "--required",
					fieldEr: "--error",
					errors: "ui-errors",
					errorsItem: "__item",
					errorsType: "--type",
					errorsReq: "--required"
				},
				types: {
					email: {
						reg: /^([a-z0-9_\.-])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i,
						text: "Некорректный e-mail"
					},
					phone: {
						reg: /^(\+)?(\d{1,2})?[( .-]*(\d{1,3})[) .-]*(\d{1,4})[ .-]?(\d{1,4})$/,
						text: "Некорректный номер телефона"
					}
				},
				init(e) {
					let t = this;
					e.find("." + t.sel.field + t.sel.fieldReq).each((function() {
						$(this).append(`<div class="${t.sel.errors}">\n\t\t\t\t<p class="${t.sel.errors+t.sel.errorsItem} ${t.sel.errors+t.sel.errorsItem+t.sel.errorsReq}">\n\t\t\t\t\tОбязательное поле\n\t\t\t\t</p>\n\t\t\t</div>`)
					})), e.find("." + t.sel.field + t.sel.fieldReq).each((function() {
						$(this).find(".ui-input__placeholder").length ? $(this).find(".ui-input__placeholder").append(" *") : $(this).find("input, textarea").each((function() {
							$(this).attr("placeholder", $(this).attr("placeholder") + " *")
						}))
					}));
					let n = e.attr("action"),
						i = e.attr("data-form-type"),
						o = e.attr("data-form-thxpopup") || "thx";
					e.removeAttr("action").removeAttr("data-form-type").removeAttr("data-form-thxpopup"), e.on("submit", (function(r) {
						if (r.preventDefault(), t.validate(e)) {
							let r = new FormData(e.get(0));
							r.append("formType", i), $.ajax({
								type: "POST",
								url: n,
								dataType: "json",
								processData: !1,
								contentType: !1,
								data: r,
								success: function(n) {
									app.popups.thx(o), t.clear(e)
								},
								error: function(e) {
									console.log(e)
								}
							})
						} else e.find("." + t.sel.field + t.sel.fieldEr).first().find("input, textarea").focus()
					})), e.data("formInit", !0)
				},
				clear(e) {
					let t = this;
					e.find("." + t.sel.field).removeClass(t.sel.field + t.sel.fieldEr).find("input, textarea").val("").trigger("change")
				},
				validate(e) {
					let t = this,
						n = e.find("." + t.sel.field + t.sel.fieldReq),
						i = !0;
					return n.length && n.each((function() {
						let e, n = $(this),
							o = n.attr("data-field-type");
						e = n.find("input").length ? n.find("input").val() : n.find("textarea").val(), n.find(t.sel.errors + t.sel.errorsItem + t.sel.errorsType).remove(), e ? (n.removeClass(t.sel.field + t.sel.fieldEr), n.find("." + t.sel.errors + t.sel.errorsItem + t.sel.errorsReq).hide(), o in t.types && (t.types[o].reg.test(e) ? n.removeClass(t.sel.field + t.sel.fieldEr).find("." + t.sel.errors + t.sel.errorsItem + t.sel.errorsType).remove() : (n.addClass(t.sel.field + t.sel.fieldEr).find("." + t.sel.errors).append(`<p class="${t.sel.errors+t.sel.errorsItem+t.sel.errorsType}">${t.types[o].text}</p>`), i = !1))) : (n.addClass(t.sel.field + t.sel.fieldEr), n.find("." + t.sel.errors + t.sel.errorsItem + t.sel.errorsType).remove(), n.find("." + t.sel.errors + t.sel.errorsItem + t.sel.errorsReq).show(), i = !1)
					})), i
				}
			},
			G = {
				bind() {
					let e = this;
					$(document).on("click", ".menu-toggle", (function() {
						app.settings.menuOpened ? e.close() : e.open()
					}))
				},
				open() {
					$(".app").addClass("app--menu"), app.scrollLock(), app.settings.menuOpened = !0
				},
				close() {
					$(".app").removeClass("app--menu"), app.scrollLock("unlock"), app.settings.menuOpened = !1
				}
			},
			Q = {
				loaded: [],
				js(e) {
					let t = this;
					if (e = $.extend({
							src: "",
							target: "body",
							pos: "end",
							cb: function() {}
						}, e), t.loaded.includes(e.src)) t.callback(e.cb);
					else {
						let n = document.createElement("script"),
							i = document.body;
						n.setAttribute("src", e.src), "body" !== e.target && (i = document.getElementsByTagName("head")[0]), "end" == e.pos ? i.append(n) : i.prepend(n), n.onload = () => {
							t.loaded.push(e.src), t.callback(e.cb)
						}
					}
				},
				css(e) {
					let t = this;
					if (e = $.extend({
							src: "",
							target: "head",
							pos: "end",
							cb: function() {}
						}, e), !t.loaded.includes(e.src)) {
						let n = document.createElement("link"),
							i = document.getElementsByTagName("head")[0];
						n.setAttribute("rel", "stylesheet"), n.setAttribute("href", e.src), "head" !== e.target && (i = document.body), "end" == e.pos ? i.append(n) : i.prepend(n), t.loaded.push(e.src)
					}
					t.callback(e.cb)
				},
				callback(e) {
					e && "function" == typeof e && e.call()
				}
			},
			Y = {
				lenis: {},
				inited: !1,
				init() {
					let e = this;
					e.lenis = new Lenis({
						lerp: .02
					}), e.lenis.on("scroll", (e => {
						window.ScrollTrigger && "function" == typeof window.ScrollTrigger && ScrollTrigger.update()
					})), requestAnimationFrame((function t(n) {
						e.lenis.raf(n), requestAnimationFrame(t)
					})), window.gsap && "object" == typeof window.gsap && gsap.ticker.add((t => {
						e.lenis.raf(1e3 * t)
					})), e.inited = !0
				}
			};
		window.app = {
			settings: {
				winWidth: 0,
				winHeight: 0,
				sbWidth: 0,
				scrollOffset: function() {
					return $(".header").outerHeight()
				},
				scrollPos: 0,
				popupOpened: !1,
				scrollLockPos: 0,
				animDuration: 400,
				appLoaded: !1,
				menuOpened: !1
			},
			deviceIs: F,
			matches: e => window.matchMedia(`(${e})`).matches,
			toHash() {
				window.location.hash && (app.scrollTo(window.location.hash, {
					offset: app.settings.scrollOffset()
				}), window.location.hash = "")
			},
			units: B,
			scrollTo: (e, t) => {
				if ($(e).length)
					if (t = $.extend({
							offset: 0,
							speed: 1e3
						}, t), window.Lenis && "function" == typeof window.Lenis && app.scroll.inited) app.scroll.lenis.scrollTo(e, {
						offset: t.offset,
						duration: t.speed,
						lock: !0
					});
					else {
						let n = $(e).offset().top - t.offset;
						$("html, body").animate({
							scrollTop: n
						}, t.speed)
					}
			},
			scrollLock: e => {
				"unlock" == e ? (app.deviceIs.ios && $(window).scrollTop(app.settings.scrollLockPos), $(".app").removeClass("app--fixed"), window.Lenis && "function" == typeof window.Lenis && app.scroll.inited && app.scroll.lenis.start()) : (app.settings.scrollLockPos = $(window).scrollTop(), $(".app").addClass("app--fixed"), window.Lenis && "function" == typeof window.Lenis && app.scroll.inited && app.scroll.lenis.stop())
			},
			lazyLoad: z,
			tabs: U,
			accordions: (e, t) => {
				t = $.extend({
					initialized: !1,
					collapsable: !0,
					collapsed: !1,
					connected: !1,
					scrollToItem: !1,
					scrollToItemWidth: 767,
					slideSpeed: app.settings.animDuration
				}, t);
				let n, i = ".ui-accordion",
					o = i + "__item",
					r = i + "__trigger",
					s = i + "__panel",
					a = e.find(o),
					l = e.find(r),
					c = e.find(s);
				var u;
				"false" == e.attr("data-collapsable") && (t.collapsable = !1), "true" == e.attr("data-collapsed") && (t.collapsed = !0), "false" == e.attr("data-scrollToItem") && (t.scrollToItem = !1), e.attr("data-scrollToItemWidth") && "number" == typeof(u = +e.attr("data-scrollToItemWidth")) && isFinite(u) && (t.scrollToItemWidth = +e.attr("data-scrollToItemWidth")), e.attr("data-acc") && (t.connected = !0);
				const d = () => {
						c.hide(0), a.each((function() {
							$(this).data("itemPos", $(this).offset().top - app.settings.scrollOffset - 30)
						})), e.find(o + ".active").first().find(s).show(0)
					},
					p = (e, n) => {
						let i = t.slideSpeed;
						i = t.initialized ? t.slideSpeed : 0, "open" == n ? (t.initialized && t.scrollToItem && window.matchMedia("(max-width:" + t.scrollToItemWidth + "px)").matches && $("html, body").animate({
							scrollTop: e.data("itemPos")
						}, i), a.removeClass("active"), e.addClass("active"), c.slideUp(i), e.find(s).slideDown(i)) : (e.removeClass("active"), c.slideUp(i)), t.initialized || (t.initialized = !0)
					};
				t.collapsed ? t.initialized = !0 : (!e.find(o + ".active").length || e.find(o + ".active").length > 1 ? (a.removeClass("active"), n = a.first()) : n = e.find(o + ".active"), p(n, "open")), $(window).on("resize", (function() {
					t.scrollToItem && d()
				})), l.on("click", (function() {
					let e = $(this).closest(o);
					e.hasClass("active") ? t.collapsable && p(e, "close") : p(e, "open")
				})), $(window).trigger("resize"), e.data("accordionInit", !0)
			},
			expand: e => {
				let t = "ui-expand",
					n = e.find("." + t + "__hidden"),
					i = e.find("." + t + "__trigger"),
					o = i.find("." + t + "__trigger-text"),
					r = i.attr("data-closed-text"),
					s = i.attr("data-opened-text");
				o.text(r), i.on("click", (function() {
					e.hasClass("active") ? (e.removeClass("active"), n.slideUp(400), o.text(r)) : (e.addClass("active"), n.slideDown(400), o.text(s))
				})), e.data("expandInit", !0)
			},
			popups: X,
			inputs: e => {
				let t = e.find("input, textarea"),
					n = e.closest(".ui-form__field");
				t.on("focus", (function() {
					e.addClass("active focused")
				})).on("focusout blur change keyup input", (function() {
					"" === $(this).val() ? t.is(":focus") || e.removeClass("active") : (e.addClass("active"), n.removeClass("ui-form__field--error"))
				})).on("focusout", (function() {
					e.removeClass("focused")
				})), t.trigger("change"), e.data("inputInit", !0)
			},
			Selects: class {
				constructor(e, t) {
					let n = e.find("select");
					this.isOpened = !1, n.addClass("ui-select__sel"), this.el = e, this.sel = this.el.find("select"), t = $.extend({
						type: n.attr("multiple") ? 2 : 1,
						prefix: "ui-select",
						placeholder: e.attr("data-placeholder") ? e.attr("data-placeholder") : null,
						defaultPlaceholder: "Выбрать",
						classes: {
							head: "ui-select__head",
							text: "ui-select__text",
							arr: "ui-select__arr",
							pop: "ui-select__pop",
							list: "ui-select__list",
							option: "ui-select__option",
							optionText: "ui-select__option-text",
							optionIcon: "ui-select__option-icon"
						},
						tags: {
							list: "ul",
							option: "li"
						},
						search: !1,
						onInit: function() {}
					}, e.attr("data-select") ? JSON.parse(e.attr("data-select")) : {}), this.options = t, this.isChanged = !1, this.isInitialized = !1;
					let i = this.options.classes;
					e.on("click", `.${i.option}`, (e => {
						this.select($(e.target).closest(`.${t.classes.option}`).attr("data-option"))
					})), e.on("click", `.${i.head}`, (e => {
						this.isOpened ? this.hide() : this.show()
					})), e.on("select", ((e, t) => {
						this.select(t)
					})), e.on("select.index", ((e, t) => {
						let n = this.sel.find("option").eq(t).attr("data-option");
						this.select(n)
					})), n.on("change", (() => this.highlight())), $(document).on("click", (t => {
						$(t.target).closest(e).length || this.hide()
					})), this.build(), this.update(), e.data("selectInit", !0)
				}
				cl() {
					console.log(this)
				}
				build() {
					let e = this.options.classes,
						t = this.options.tags,
						n = $(`<div class="${e.head}" />`),
						i = $(`<div class="${e.text}" />`),
						o = $(`<div class="${e.arr}" />`),
						r = $(`<div class="${e.pop}" />`),
						s = $(`<${t.list} class="${e.list}" />`);
					r.append(s), n.append(i, o), this.el.append(n, r), app.deviceIs.mobile && n.css("pointer-events", "none"), this.head = n, this.pop = r, this.list = s
				}
				buildList() {
					let e = this.options.classes,
						t = this.options.tags,
						n = this.sel.find("option"),
						i = this.list,
						o = this.el.find(`.${e.text}`),
						r = {};
					this.opts = n, this.list.html(""), 1 == this.options.type && null !== this.options.placeholder && (r = n.first()), n.not(r).each((function(n) {
						let o = $(this),
							r = $(`<${t.option} class="${e.option}"><span class="${e.optionIcon}"></span><span class="${e.optionText}">${o.text()}</span></${t.option}>`);
						o.attr("data-option", n + 1), [...o.get(0).attributes].forEach((e => {
							r.get(0).setAttribute("id" === e.nodeName ? "data-id" : e.nodeName, e.nodeValue)
						})), i.append(r)
					})), 1 == this.options.type ? o.text(null == this.options.placeholder ? this.sel.find("option:selected").text() : this.options.placeholder) : o.text(null == this.options.placeholder ? this.options.defaultPlaceholder : this.options.placeholder)
				}
				select(e) {
					let t = this.el.find(`.${this.options.prefix}__head-text`),
						n = this.sel.find("option"),
						i = this.sel.find(`option[data-option="${e}"]`);
					1 == this.options.type ? 0 == i.prop("selected") && (n.prop("selected", !1), i.prop("selected", !0)) : 1 == i.prop("selected") ? i.prop("selected", !1) : i.prop("selected", !0), this.highlight(), t.removeClass("clear")
				}
				highlight(e) {
					let t = this,
						n = this.opts,
						i = this.options.classes,
						o = this.el.find(`.${i.option}`),
						r = this.el.find(`.${i.text}`);
					o.removeClass("selected"), n.each((function() {
						1 == $(this).prop("selected") && t.el.find(`.${i.option}[data-option="${$(this).attr("data-option")}"]`).addClass("selected")
					})), this.isInitialized ? 1 == this.options.type && r.text(this.sel.find("option:selected").text()) : this.isInitialized = !0
				}
				update() {
					this.isInitialized = !1, this.buildList(), this.highlight()
				}
				show() {
					this.el.addClass("opened"), this.isOpened = !0
				}
				hide() {
					this.el.removeClass("opened"), this.isOpened = !1
				}
			},
			forms: V,
			menu: G,
			loadFile: Q,
			waypoint: e => {
				let t = 0;
				e = $.extend({
					position: 0,
					onDown: function() {},
					onUp: function() {}
				}, e), $(window).on("resize", (function() {
					t = "function" == typeof e.position ? e.position.call() : e.position
				})).on("scroll", (function() {
					$(window).scrollTop() > t ? "function" == typeof e.onDown && e.onDown.call() : "function" == typeof e.onUp && e.onUp.call()
				})).trigger("resize").trigger("scroll")
			},
			scroll: Y,
			init() {
				app.units.all(), app.lazyLoad.init(), $(".ui-tabs").not(".custom").each((function() {
					$(this).data("tabsInit") || app.tabs.init($(this))
				})), app.tabs.bind(), $(".ui-tabs").not(".custom").each((function() {
					$(this).data("tabsInit") || app.tabs.init($(this))
				})), app.tabs.bind(), $(".ui-accordion").not(".custom").each((function() {
					$(this).data("accordionInit") || app.accordions($(this))
				})), $(".ui-expand").not(".custom").each((function() {
					$(this).data("expandInit") || app.expand($(this))
				})), $(".popup").each((function() {
					$(this).data("popupsInit") || app.popups.init($(this))
				})), app.popups.bind(), $(".ui-input").not(".custom").each((function() {
					$(this).data("inputInit") || app.inputs($(this))
				})), $(".ui-select").not(".custom").each((function() {
					$(this).data("selectInit") || new app.Selects($(this))
				})), $(".ui-form").not(".custom").each((function() {
					$(this).data("formInit") || app.forms.init($(this))
				}))
			}
		}, app.deviceIs.addClasses(document.documentElement), jQuery, app.deviceIs.touch ? $("html").addClass("touch") : $("html").addClass("no-touch"), app.settings.winWidth = $(window).width(), app.settings.winHeight = $(window).height(), app.settings.scrollPos = $(window).scrollTop(), app.init(), app.menu.bind(), app.deviceIs.desktop && $(window).on("resize", (function() {
			app.units.all()
		})), (app.deviceIs.mobile || app.deviceIs.tablet) && $(window).on("orientationchange", (function() {
			app.units.vh()
		})).on("resize", (function() {
			app.units.mobile()
		})), $(window).on("resize", (function() {
			app.settings.winWidth = $(window).width(), app.settings.winHeight = $(window).height(), app.settings.scrollPos = $(window).scrollTop(), app.settings.menuOpened && app.menu.close()
		})).on("scroll", (function() {
			app.settings.scrollPos = $(window).scrollTop()
		})).trigger("resize").trigger("scroll"), $(document).on("click", 'a[href^="#"], [data-scrollto]', (function(e) {
			e.preventDefault();
			let t = $(this).attr("href") || $(this).attr("data-scrollto");
			app.scrollTo(t, {
				offset: app.settings.scrollOffset()
			})
		})), $(window).on("load", (function() {
			setTimeout((function() {
				$(".preloader").fadeOut(1e3, (function() {
					$(this).remove()
				})), $(".app").addClass("app--loaded"), app.settings.appLoaded = !0, $(window).trigger("app.loaded").trigger("scroll").trigger("resize")
			}), 300), window.Lenis && "function" == typeof window.Lenis && !app.scroll.inited && app.scroll.init(), app.toHash()
		}))
	})()
})();