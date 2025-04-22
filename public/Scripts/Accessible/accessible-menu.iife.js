var AccessibleMenu = (function () {
 "use strict";
 var Y = Object.defineProperty;
 var ee = (_, y, M) => (y in _ ? Y(_, y, { enumerable: !0, configurable: !0, writable: !0, value: M }) : (_[y] = M));
 var u = (_, y, M) => ee(_, typeof y != "symbol" ? y + "" : y, M);
 function _(r, e) {
  r === "" || r.length === 0 || (typeof r == "string" ? e.classList.add(r) : e.classList.add(...r));
 }
 function y(r, e) {
  r === "" || r.length === 0 || (typeof r == "string" ? e.classList.remove(r) : e.classList.remove(...r));
 }
 function M(r, e) {
  try {
   if (typeof e != "object") {
    const t = typeof e;
    throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${t}" given.`);
   }
   for (const t in e)
    if (!(e[t] instanceof r)) {
     const s = typeof e[t];
     throw new TypeError(`${t} must be an instance of ${r.name}. "${s}" given.`);
    }
   return { status: !0, error: null };
  } catch (t) {
   return { status: !1, error: t };
  }
 }
 function c(r, e) {
  try {
   if (typeof e != "object") {
    const t = typeof e;
    throw new TypeError(`Values given to isValidType() must be inside of an object. "${t}" given.`);
   }
   for (const t in e) {
    const s = typeof e[t];
    if (s !== r) throw new TypeError(`${t} must be a ${r}. "${s}" given.`);
   }
   return { status: !0, error: null };
  } catch (t) {
   return { status: !1, error: t };
  }
 }
 function x(r) {
  try {
   if (typeof r != "object") {
    const e = typeof r;
    throw new TypeError(`Values given to isQuerySelector() must be inside of an object. "${e}" given.`);
   }
   for (const e in r)
    try {
     if (r[e] === null) throw new Error();
     document.querySelector(r[e]);
    } catch {
     throw new TypeError(`${e} must be a valid query selector. "${r[e]}" given.`);
    }
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function A(r) {
  try {
   if (typeof r != "object" || Array.isArray(r)) {
    const e = typeof r;
    throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${e}" given.`);
   }
   for (const e in r) {
    const t = typeof r[e];
    if (t !== "string")
     if (Array.isArray(r[e]))
      r[e].forEach((s) => {
       if (typeof s != "string")
        throw new TypeError(`${e} must be a string or an array of strings. An array containing non-strings given.`);
      });
     else throw new TypeError(`${e} must be a string or an array of strings. "${t}" given.`);
    else {
     const s = {};
     (s[e] = r[e]), x(s);
    }
   }
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function V(r) {
  try {
   if (typeof r != "object") {
    const t = typeof r;
    throw new TypeError(`Values given to isValidState() must be inside of an object. "${t}" given.`);
   }
   const e = ["none", "self", "child"];
   for (const t in r)
    if (!e.includes(r[t]))
     throw new TypeError(`${t} must be one of the following values: ${e.join(", ")}. "${r[t]}" given.`);
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function P(r) {
  try {
   if (typeof r != "object") {
    const t = typeof r;
    throw new TypeError(`Values given to isValidEvent() must be inside of an object. "${t}" given.`);
   }
   const e = ["none", "mouse", "keyboard", "character"];
   for (const t in r)
    if (!e.includes(r[t]))
     throw new TypeError(`${t} must be one of the following values: ${e.join(", ")}. "${r[t]}" given.`);
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function N(r) {
  try {
   if (typeof r != "object") {
    const t = typeof r;
    throw new TypeError(`Values given to isValidHoverType() must be inside of an object. "${t}" given.`);
   }
   const e = ["off", "on", "dynamic"];
   for (const t in r)
    if (!e.includes(r[t]))
     throw new TypeError(`${t} must be one of the following values: ${e.join(", ")}. "${r[t]}" given.`);
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function K(r, e) {
  if (c("string", { tagName: r }).status && M(HTMLElement, e).status) {
   const t = r.toLowerCase();
   let s = !0;
   for (const n in e) e[n].tagName.toLowerCase() !== t && (s = !1);
   return s;
  } else return !1;
 }
 class L {
  constructor({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: n = null }) {
   u(this, "_dom", { toggle: null, parent: null });
   u(this, "_elements", { controlledMenu: null, parentMenu: null });
   u(this, "_open", !1);
   u(this, "_expandEvent", new CustomEvent("accessibleMenuExpand", { bubbles: !0, detail: { toggle: this } }));
   u(this, "_collapseEvent", new CustomEvent("accessibleMenuCollapse", { bubbles: !0, detail: { toggle: this } }));
   (this._dom.toggle = e), (this._dom.parent = t), (this._elements.controlledMenu = s), (this._elements.parentMenu = n);
  }
  initialize() {
   this._setIds(), this._setAriaAttributes(), this._collapse(!1);
  }
  get dom() {
   return this._dom;
  }
  get elements() {
   return this._elements;
  }
  get isOpen() {
   return this._open;
  }
  set isOpen(e) {
   c("boolean", { value: e }), (this._open = e);
  }
  _setIds() {
   var e;
   if (this.dom.toggle.id === "" || this.elements.controlledMenu.dom.menu.id === "") {
    const t = Math.random()
     .toString(36)
     .replace(/[^a-z]+/g, "")
     .substring(0, 10);
    let s = ((e = this.dom.toggle.innerText) == null ? void 0 : e.replace(/[^a-zA-Z0-9\s]/g, "")) || "",
     n = t;
    !s.replace(/\s/g, "").length &&
     this.dom.toggle.getAttribute("aria-label") &&
     (s = this.dom.toggle.getAttribute("aria-label").replace(/[^a-zA-Z0-9\s]/g, "")),
     s.replace(/\s/g, "").length > 0 &&
      ((s = s.toLowerCase().replace(/\s+/g, "-")),
      s.startsWith("-") && (s = s.substring(1)),
      s.endsWith("-") && (s = s.slice(0, -1)),
      (n = `${s}-${n}`)),
     (this.dom.toggle.id = this.dom.toggle.id || `menu-button-${n}`),
     (this.elements.controlledMenu.dom.menu.id = this.elements.controlledMenu.dom.menu.id || `menu-${n}`);
   }
  }
  _setAriaAttributes() {
   this.dom.toggle.setAttribute("aria-expanded", "false"),
    this.elements.controlledMenu.dom.menu.setAttribute("aria-labelledby", this.dom.toggle.id);
  }
  _expand(e = !0) {
   const { closeClass: t, openClass: s, transitionClass: n, openDuration: i } = this.elements.controlledMenu;
   this.dom.toggle.setAttribute("aria-expanded", "true"),
    (this.elements.controlledMenu.elements.rootMenu.hasOpened = !0),
    n !== ""
     ? (_(n, this.elements.controlledMenu.dom.menu),
       requestAnimationFrame(() => {
        y(t, this.elements.controlledMenu.dom.menu),
         requestAnimationFrame(() => {
          _(s, this.elements.controlledMenu.dom.menu),
           requestAnimationFrame(() => {
            setTimeout(() => {
             y(n, this.elements.controlledMenu.dom.menu);
            }, i);
           });
         });
       }))
     : (_(s, this.elements.controlledMenu.dom.menu), y(t, this.elements.controlledMenu.dom.menu)),
    e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  _collapse(e = !0) {
   const { closeClass: t, openClass: s, transitionClass: n, closeDuration: i } = this.elements.controlledMenu;
   this.dom.toggle.setAttribute("aria-expanded", "false"),
    n !== ""
     ? (_(n, this.elements.controlledMenu.dom.menu),
       requestAnimationFrame(() => {
        y(s, this.elements.controlledMenu.dom.menu),
         requestAnimationFrame(() => {
          _(t, this.elements.controlledMenu.dom.menu),
           requestAnimationFrame(() => {
            setTimeout(() => {
             y(n, this.elements.controlledMenu.dom.menu);
            }, i);
           });
         });
       }))
     : (_(t, this.elements.controlledMenu.dom.menu), y(s, this.elements.controlledMenu.dom.menu)),
    e && this.dom.toggle.dispatchEvent(this._collapseEvent);
  }
  open() {
   (this.elements.controlledMenu.focusState = "self"), this.isOpen || (this._expand(), (this.isOpen = !0));
  }
  preview() {
   this.elements.parentMenu && (this.elements.parentMenu.focusState = "self"),
    this.isOpen || (this._expand(), (this.isOpen = !0));
  }
  close() {
   this.isOpen &&
    (this.elements.controlledMenu.blur(),
    this.elements.parentMenu && (this.elements.parentMenu.focusState = "self"),
    this._collapse(),
    (this.isOpen = !1));
  }
  toggle() {
   this.isOpen ? this.close() : this.open();
  }
  closeSiblings() {
   this.elements.parentMenu &&
    this.elements.parentMenu.elements.submenuToggles.forEach((e) => {
     e !== this && e.close();
    });
  }
  closeChildren() {
   this.elements.controlledMenu.elements.submenuToggles.forEach((e) => e.close());
  }
 }
 class O {
  constructor({
   menuItemElement: e,
   menuLinkElement: t,
   parentMenu: s,
   isSubmenuItem: n = !1,
   childMenu: i = null,
   toggle: l = null
  }) {
   u(this, "_dom", { item: null, link: null });
   u(this, "_elements", { parentMenu: null, childMenu: null, toggle: null });
   u(this, "_submenu", !1);
   (this._dom.item = e),
    (this._dom.link = t),
    (this._elements.parentMenu = s),
    (this._elements.childMenu = i),
    (this._elements.toggle = l),
    (this._submenu = n);
  }
  initialize() {}
  get dom() {
   return this._dom;
  }
  get elements() {
   return this._elements;
  }
  get isSubmenuItem() {
   return this._submenu;
  }
  focus() {
   this.elements.parentMenu.shouldFocus &&
    requestAnimationFrame(() => {
     this.dom.link.focus();
    });
  }
  blur() {
   this.elements.parentMenu.shouldFocus &&
    requestAnimationFrame(() => {
     this.dom.link.blur();
    });
  }
 }
 function b(r) {
  try {
   const e = r.key || r.keyCode,
    t = {
     Enter: e === "Enter" || e === 13,
     Space: e === " " || e === "Spacebar" || e === 32,
     Escape: e === "Escape" || e === "Esc" || e === 27,
     ArrowUp: e === "ArrowUp" || e === "Up" || e === 38,
     ArrowRight: e === "ArrowRight" || e === "Right" || e === 39,
     ArrowDown: e === "ArrowDown" || e === "Down" || e === 40,
     ArrowLeft: e === "ArrowLeft" || e === "Left" || e === 37,
     Home: e === "Home" || e === 36,
     End: e === "End" || e === 35,
     Character: isNaN(e) && !!e.match(/^[a-zA-Z]{1}$/),
     Tab: e === "Tab" || e === 9,
     Asterisk: e === "*" || e === 56
    };
   return Object.keys(t).find((s) => t[s] === !0) || "";
  } catch {
   return "";
  }
 }
 function o(r) {
  r.preventDefault(), r.stopPropagation();
 }
 class k {
  constructor({
   menuElement: e,
   menuItemSelector: t = "li",
   menuLinkSelector: s = "a",
   submenuItemSelector: n = "li:has(ul)",
   submenuToggleSelector: i = "a",
   submenuSelector: l = "ul",
   controllerElement: h = null,
   containerElement: m = null,
   openClass: a = "show",
   closeClass: p = "hide",
   transitionClass: f = "transitioning",
   transitionDuration: g = 250,
   openDuration: d = -1,
   closeDuration: T = -1,
   isTopLevel: C = !0,
   parentMenu: E = null,
   hoverType: v = "off",
   hoverDelay: I = 250,
   enterDelay: w = -1,
   leaveDelay: S = -1,
   prefix: D = "am-"
  }) {
   u(this, "_MenuType", k);
   u(this, "_MenuItemType", O);
   u(this, "_MenuToggleType", L);
   u(this, "_dom", {
    menu: null,
    menuItems: [],
    submenuItems: [],
    submenuToggles: [],
    submenus: [],
    controller: null,
    container: null
   });
   u(this, "_selectors", { menuItems: "", menuLinks: "", submenuItems: "", submenuToggles: "", submenus: "" });
   u(this, "_elements", { menuItems: [], submenuToggles: [], controller: null, parentMenu: null, rootMenu: null });
   u(this, "_openClass", "show");
   u(this, "_closeClass", "hide");
   u(this, "_transitionClass", "transitioning");
   u(this, "_transitionDuration", 250);
   u(this, "_openDuration", -1);
   u(this, "_closeDuration", -1);
   u(this, "_root", !0);
   u(this, "_currentChild", 0);
   u(this, "_focusState", "none");
   u(this, "_currentEvent", "none");
   u(this, "_hoverType", "off");
   u(this, "_hoverDelay", 250);
   u(this, "_enterDelay", -1);
   u(this, "_leaveDelay", -1);
   u(this, "_prefix", "am-");
   u(this, "_hoverTimeout", null);
   u(this, "_hasOpened", !1);
   u(this, "_errors", []);
   (this._dom.menu = e),
    (this._dom.controller = h),
    (this._dom.container = m),
    (this._selectors.menuItems = t),
    (this._selectors.menuLinks = s),
    (this._selectors.submenuItems = n),
    (this._selectors.submenuToggles = i),
    (this._selectors.submenus = l),
    (this._elements.menuItems = []),
    (this._elements.submenuToggles = []),
    (this._elements.controller = null),
    (this._elements.parentMenu = E),
    (this._elements.rootMenu = C ? this : null),
    (this._openClass = a || ""),
    (this._closeClass = p || ""),
    (this._transitionClass = f || ""),
    (this._transitionDuration = g),
    (this._openDuration = d),
    (this._closeDuration = T),
    (this._prefix = D || ""),
    (this._root = C),
    (this._hoverType = v),
    (this._hoverDelay = I),
    (this._enterDelay = w),
    (this._leaveDelay = S);
  }
  initialize() {
   if (!this._validate())
    throw new Error(`AccessibleMenu: cannot initialize menu. The following errors have been found:
 - ${this.errors.join(`
 - `)}`);
   if (
    (this.elements.rootMenu === null && this._findRootMenu(this),
    this._setDOMElements(),
    this.isTopLevel && this.dom.controller && this.dom.container)
   ) {
    const e = new this._MenuToggleType({
     menuToggleElement: this.dom.controller,
     parentElement: this.dom.container,
     controlledMenu: this
    });
    K("button", { toggle: e.dom.toggle }) || e.dom.toggle.setAttribute("role", "button"),
     e.dom.toggle.setAttribute("aria-controls", this.dom.menu.id),
     (this._elements.controller = e);
   }
   this._createChildElements(),
    this._setTransitionDurations(),
    this.isTopLevel &&
     ((window.AccessibleMenu = window.AccessibleMenu || { menus: {} }),
     (window.AccessibleMenu.menus[this.dom.menu.id] = this));
  }
  get dom() {
   return this._dom;
  }
  get selectors() {
   return this._selectors;
  }
  get elements() {
   return this._elements;
  }
  get isTopLevel() {
   return this._root;
  }
  get openClass() {
   return this.isTopLevel ? this._openClass : this.elements.rootMenu.openClass;
  }
  get closeClass() {
   return this.isTopLevel ? this._closeClass : this.elements.rootMenu.closeClass;
  }
  get transitionClass() {
   return this.isTopLevel ? this._transitionClass : this.elements.rootMenu.transitionClass;
  }
  get transitionDuration() {
   return this.isTopLevel ? this._transitionDuration : this.elements.rootMenu.transitionDuration;
  }
  get openDuration() {
   return this._openDuration === -1
    ? this.transitionDuration
    : this.isTopLevel
      ? this._openDuration
      : this.elements.rootMenu.openDuration;
  }
  get closeDuration() {
   return this._closeDuration === -1
    ? this.transitionDuration
    : this.isTopLevel
      ? this._closeDuration
      : this.elements.rootMenu.closeDuration;
  }
  get currentChild() {
   return this._currentChild;
  }
  get focusState() {
   return this._focusState;
  }
  get currentEvent() {
   return this._currentEvent;
  }
  get currentMenuItem() {
   return this.elements.menuItems[this.currentChild];
  }
  get hoverType() {
   return this._root ? this._hoverType : this.elements.rootMenu.hoverType;
  }
  get hoverDelay() {
   return this._root ? this._hoverDelay : this.elements.rootMenu.hoverDelay;
  }
  get enterDelay() {
   return this._enterDelay === -1 ? this.hoverDelay : this._root ? this._enterDelay : this.elements.rootMenu.enterDelay;
  }
  get leaveDelay() {
   return this._leaveDelay === -1 ? this.hoverDelay : this._root ? this._leaveDelay : this.elements.rootMenu.leaveDelay;
  }
  get prefix() {
   return this._root ? this._prefix : this.elements.rootMenu.prefix;
  }
  get shouldFocus() {
   let e = !1;
   return (
    (this.currentEvent === "keyboard" || this.currentEvent === "character") && (e = !0),
    this.currentEvent === "mouse" && this.hoverType === "dynamic" && (e = !0),
    e
   );
  }
  get hasOpened() {
   return this._root ? this._hasOpened : this.elements.rootMenu.hasOpened;
  }
  get errors() {
   return this._errors;
  }
  set openClass(e) {
   A({ openClass: e }), this._openClass !== e && (this._openClass = e);
  }
  set closeClass(e) {
   A({ closeClass: e }), this._closeClass !== e && (this._closeClass = e);
  }
  set transitionClass(e) {
   A({ transitionClass: e }), this._transitionClass !== e && (this._transitionClass = e);
  }
  set transitionDuration(e) {
   c("number", { value: e }),
    this._transitionDuration !== e && ((this._transitionDuration = e), this._setTransitionDurations());
  }
  set openDuration(e) {
   c("number", { value: e }), this._openDuration !== e && ((this._openDuration = e), this._setTransitionDurations());
  }
  set closeDuration(e) {
   c("number", { value: e }), this._closeDuration !== e && ((this._closeDuration = e), this._setTransitionDurations());
  }
  set currentChild(e) {
   c("number", { value: e });
   function t(s) {
    if (["mouse", "character"].includes(s.currentEvent) && s.elements.parentMenu) {
     let i = 0,
      l = !1;
     for (; !l && i < s.elements.parentMenu.elements.menuItems.length; ) {
      const h = s.elements.parentMenu.elements.menuItems[i];
      h.isSubmenuItem &&
       h.elements.toggle.elements.controlledMenu === s &&
       ((l = !0), (s.elements.parentMenu.currentEvent = s.currentEvent), (s.elements.parentMenu.currentChild = i)),
       i++;
     }
    }
   }
   e < -1
    ? ((this._currentChild = -1), t(this))
    : e >= this.elements.menuItems.length
      ? ((this._currentChild = this.elements.menuItems.length - 1), t(this))
      : this.focusChild !== e && ((this._currentChild = e), t(this));
  }
  set focusState(e) {
   V({ value: e }),
    this._focusState !== e && (this._focusState = e),
    this.elements.submenuToggles.length > 0 &&
     (e === "self" || e === "none") &&
     this.elements.submenuToggles.forEach((t) => {
      t.elements.controlledMenu.focusState = "none";
     }),
    this.elements.parentMenu && (e === "self" || e === "child") && (this.elements.parentMenu.focusState = "child");
  }
  set currentEvent(e) {
   P({ value: e }),
    this._currentEvent !== e &&
     ((this._currentEvent = e),
     this.elements.submenuToggles.length > 0 &&
      this.elements.submenuToggles.forEach((t) => {
       t.elements.controlledMenu.currentEvent = e;
      }));
  }
  set hoverType(e) {
   N({ value: e }), this._hoverType !== e && (this._hoverType = e);
  }
  set hoverDelay(e) {
   c("number", { value: e }), this._hoverDelay !== e && (this._hoverDelay = e);
  }
  set enterDelay(e) {
   c("number", { value: e }), this._enterDelay !== e && (this._enterDelay = e);
  }
  set leaveDelay(e) {
   c("number", { value: e }), this._leaveDelay !== e && (this._leaveDelay = e);
  }
  set prefix(e) {
   c("string", { value: e }), this._prefix !== e && (this._prefix = e);
  }
  set hasOpened(e) {
   c("boolean", { value: e }), this._hasOpened !== e && (this._hasOpened = e);
  }
  _validate() {
   let e = !0,
    t;
   this._dom.container !== null || this._dom.controller !== null
    ? (t = M(HTMLElement, {
       menuElement: this._dom.menu,
       controllerElement: this._dom.controller,
       containerElement: this._dom.container
      }))
    : (t = M(HTMLElement, { menuElement: this._dom.menu })),
    t.status || (this._errors.push(t.error.message), (e = !1));
   let s;
   if (
    (this._selectors.submenuItems !== ""
     ? (s = x({
        menuItemSelector: this._selectors.menuItems,
        menuLinkSelector: this._selectors.menuLinks,
        submenuItemSelector: this._selectors.submenuItems,
        submenuToggleSelector: this._selectors.submenuToggles,
        submenuSelector: this._selectors.submenus
       }))
     : (s = x({ menuItemSelector: this._selectors.menuItems, menuLinkSelector: this._selectors.menuLinks })),
    s.status || (this._errors.push(s.error.message), (e = !1)),
    this._openClass !== "")
   ) {
    const d = A({ openClass: this._openClass });
    d.status || (this._errors.push(d.error.message), (e = !1));
   }
   if (this._closeClass !== "") {
    const d = A({ closeClass: this._closeClass });
    d.status || (this._errors.push(d.error.message), (e = !1));
   }
   if (this._transitionClass !== "") {
    const d = A({ transitionClass: this._transitionClass });
    d.status || (this._errors.push(d.error.message), (e = !1));
   }
   const n = c("number", { transitionDuration: this._transitionDuration });
   n.status || (this._errors.push(n.error.message), (e = !1));
   const i = c("number", { openDuration: this._openDuration });
   i.status || (this._errors.push(i.error.message), (e = !1));
   const l = c("number", { closeDuration: this._closeDuration });
   l.status || (this._errors.push(l.error.message), (e = !1));
   const h = c("boolean", { isTopLevel: this._root });
   if ((h.status || (this._errors.push(h.error.message), (e = !1)), this._elements.parentMenu !== null)) {
    const d = M(k, { parentMenu: this._elements.parentMenu });
    d.status || (this._errors.push(d.error.message), (e = !1));
   }
   const m = N({ hoverType: this._hoverType });
   m.status || (this._errors.push(m.error.message), (e = !1));
   const a = c("number", { hoverDelay: this._hoverDelay });
   a.status || (this._errors.push(a.error.message), (e = !1));
   const p = c("number", { enterDelay: this._enterDelay });
   p.status || (this._errors.push(p.error.message), (e = !1));
   const f = c("number", { leaveDelay: this._leaveDelay });
   f.status || (this._errors.push(f.error.message), (e = !1));
   const g = c("string", { prefix: this._prefix });
   return g.status || (this._errors.push(g.error.message), (e = !1)), e;
  }
  _setDOMElementType(e, t = this.dom.menu, s = !0) {
   if (typeof this.selectors[e] == "string") {
    if (!Array.isArray(this.dom[e]))
     throw new Error(`AccessibleMenu: The "${e}" element cannot be set through _setDOMElementType.`);
    t !== this.dom.menu && M(HTMLElement, { base: t });
    const i = Array.from(t.querySelectorAll(this.selectors[e])).filter((l) => l.parentElement === t);
    s ? (this._dom[e] = i) : (this._dom[e] = [...this._dom[e], ...i]);
   } else throw new Error(`AccessibleMenu: "${e}" is not a valid element type within the menu.`);
  }
  _resetDOMElementType(e) {
   if (typeof this.dom[e] < "u") {
    if (!Array.isArray(this.dom[e]))
     throw new Error(`AccessibleMenu: The "${e}" element cannot be reset through _resetDOMElementType.`);
    this._dom[e] = [];
   } else throw new Error(`AccessibleMenu: "${e}" is not a valid element type within the menu.`);
  }
  _setDOMElements() {
   this._setDOMElementType("menuItems"),
    this.selectors.submenuItems !== "" &&
     (this._setDOMElementType("submenuItems"),
     this._resetDOMElementType("submenuToggles"),
     this._resetDOMElementType("submenus"),
     this.dom.submenuItems.forEach((e) => {
      this._setDOMElementType("submenuToggles", e, !1), this._setDOMElementType("submenus", e, !1);
     }));
  }
  _findRootMenu(e) {
   if (e.isTopLevel) this._elements.rootMenu = e;
   else if (e.elements.parentMenu !== null) this._findRootMenu(e.elements.parentMenu);
   else throw new Error("Cannot find root menu.");
  }
  _createChildElements() {
   this.dom.menuItems.forEach((e) => {
    let t;
    if (this.dom.submenuItems.includes(e)) {
     const s = e.querySelector(this.selectors.submenuToggles),
      n = e.querySelector(this.selectors.submenus),
      i = new this._MenuType({
       menuElement: n,
       menuItemSelector: this.selectors.menuItems,
       menuLinkSelector: this.selectors.menuLinks,
       submenuItemSelector: this.selectors.submenuItems,
       submenuToggleSelector: this.selectors.submenuToggles,
       submenuSelector: this.selectors.submenus,
       openClass: this.openClass,
       closeClass: this.closeClass,
       transitionClass: this.transitionClass,
       transitionDuration: this.transitionDuration,
       openDuration: this.openDuration,
       closeDuration: this.closeDuration,
       isTopLevel: !1,
       parentMenu: this,
       hoverType: this.hoverType,
       hoverDelay: this.hoverDelay,
       enterDelay: this.enterDelay,
       leaveDelay: this.leaveDelay
      }),
      l = new this._MenuToggleType({ menuToggleElement: s, parentElement: e, controlledMenu: i, parentMenu: this });
     this._elements.submenuToggles.push(l),
      (t = new this._MenuItemType({
       menuItemElement: e,
       menuLinkElement: s,
       parentMenu: this,
       isSubmenuItem: !0,
       childMenu: i,
       toggle: l
      }));
    } else {
     const s = e.querySelector(this.selectors.menuLinks);
     t = new this._MenuItemType({ menuItemElement: e, menuLinkElement: s, parentMenu: this });
    }
    this._elements.menuItems.push(t);
   });
  }
  _clearTimeout() {
   clearTimeout(this._hoverTimeout);
  }
  _setTimeout(e, t) {
   c("function", { callback: e }), c("number", { delay: t }), (this._hoverTimeout = setTimeout(e, t));
  }
  _handleFocus() {
   this.elements.menuItems.forEach((e, t) => {
    e.dom.link.addEventListener("focus", () => {
     (this.focusState = "self"), (this.currentChild = t);
    });
   }),
    this.dom.menu.addEventListener("focusout", (e) => {
     this.currentEvent !== "keyboard" ||
      e.relatedTarget === null ||
      this.dom.menu.contains(e.relatedTarget) ||
      ((this.focusState = "none"), this.closeChildren());
    });
  }
  _handleClick() {
   function e(t, s, n) {
    o(n),
     n.button === 0 &&
      (s.toggle(), s.isOpen && ((t.focusState = "self"), (s.elements.controlledMenu.focusState = "none")));
   }
   this.elements.menuItems.forEach((t, s) => {
    t.dom.link.addEventListener(
     "pointerdown",
     () => {
      (this.currentEvent = "mouse"), this.elements.rootMenu.blurChildren(), this._clearTimeout(), this.focusChild(s);
     },
     { passive: !0 }
    ),
     t.isSubmenuItem &&
      t.elements.toggle.dom.toggle.addEventListener("pointerup", (n) => {
       (this.currentEvent = "mouse"), e(this, t.elements.toggle, n);
      });
   }),
    this.isTopLevel &&
     this.elements.controller &&
     this.elements.controller.dom.toggle.addEventListener("pointerup", (t) => {
      (this.currentEvent = "mouse"), e(this, this.elements.controller, t);
     }),
    document.addEventListener("pointerup", (t) => {
     this.focusState !== "none" &&
      ((this.currentEvent = "mouse"),
      !this.dom.menu.contains(t.target) &&
       !this.dom.menu !== t.target &&
       (this.elements.rootMenu.hasOpened = this.elements.submenuToggles.some((s) => s.isOpen)));
    });
  }
  _handleHover() {
   this.elements.menuItems.forEach((e, t) => {
    e.dom.link.addEventListener("pointerenter", (s) => {
     s.pointerType === "pen" ||
      s.pointerType === "touch" ||
      (this.hoverType === "on"
       ? ((this.currentEvent = "mouse"),
         this.elements.rootMenu.blurChildren(),
         this.focusChild(t),
         e.isSubmenuItem &&
          (this.enterDelay > 0
           ? (this._clearTimeout(),
             this._setTimeout(() => {
              e.elements.toggle.preview();
             }, this.enterDelay))
           : e.elements.toggle.preview()))
       : this.hoverType === "dynamic" &&
         ((this.currentChild = t),
         (!this.isTopLevel || this.focusState !== "none") &&
          ((this.currentEvent = "mouse"), this.elements.rootMenu.blurChildren(), this.focusCurrentChild()),
         (!this.isTopLevel || this.hasOpened) &&
          ((this.currentEvent = "mouse"),
          this.elements.rootMenu.blurChildren(),
          this.focusCurrentChild(),
          e.isSubmenuItem
           ? this.enterDelay > 0
             ? (this._clearTimeout(),
               this._setTimeout(() => {
                e.elements.toggle.preview();
               }, this.enterDelay))
             : e.elements.toggle.preview()
           : this.enterDelay > 0
             ? (this._clearTimeout(),
               this._setTimeout(() => {
                this.closeChildren();
               }, this.enterDelay))
             : this.closeChildren())));
    }),
     e.isSubmenuItem &&
      (e.dom.item.addEventListener("pointerleave", (s) => {
       s.pointerType === "pen" ||
        s.pointerType === "touch" ||
        (this.hoverType === "on"
         ? this.leaveDelay > 0
           ? (this._clearTimeout(),
             this._setTimeout(() => {
              (this.currentEvent = "mouse"), e.elements.toggle.close();
             }, this.leaveDelay))
           : ((this.currentEvent = "mouse"), e.elements.toggle.close())
         : this.hoverType === "dynamic" &&
           (this.leaveDelay > 0
            ? (this._clearTimeout(),
              this._setTimeout(() => {
               this.currentEvent = "mouse";
              }, this.leaveDelay))
            : (this.currentEvent = "mouse")));
      }),
      e.dom.item.addEventListener("pointerenter", (s) => {
       s.pointerType === "pen" ||
        s.pointerType === "touch" ||
        (e.isSubmenuItem &&
         (this.hoverType === "on" || this.hoverType === "dynamic") &&
         this.leaveDelay > 0 &&
         this._clearTimeout());
      }));
   });
  }
  _handleKeydown() {
   this.isTopLevel &&
    this.elements.controller &&
    this.elements.controller.dom.toggle.addEventListener("keydown", (e) => {
     this.currentEvent = "keyboard";
     const t = b(e);
     (t === "Space" || t === "Enter") && o(e);
    });
  }
  _handleKeyup() {
   this.isTopLevel &&
    this.elements.controller &&
    this.elements.controller.dom.toggle.addEventListener("keyup", (e) => {
     this.currentEvent = "keyboard";
     const t = b(e);
     (t === "Space" || t === "Enter") &&
      (o(e), this.elements.controller.toggle(), this.elements.controller.isOpen && this.focusFirstChild());
    });
  }
  _setTransitionDurations() {
   this.dom.menu.style.setProperty(`--${this.prefix}transition-duration`, `${this.transitionDuration}ms`),
    this.dom.menu.style.setProperty(`--${this.prefix}open-transition-duration`, `${this.openDuration}ms`),
    this.dom.menu.style.setProperty(`--${this.prefix}close-transition-duration`, `${this.closeDuration}ms`);
  }
  focus() {
   (this.focusState = "self"), this.shouldFocus && this.dom.menu.focus();
  }
  blur() {
   (this.focusState = "none"), this.shouldFocus && this.dom.menu.blur();
  }
  focusCurrentChild() {
   (this.focusState = "self"), this.currentChild !== -1 && this.currentMenuItem.focus();
  }
  focusChild(e) {
   this.blurCurrentChild(), (this.currentChild = e), this.focusCurrentChild();
  }
  focusFirstChild() {
   this.focusChild(0);
  }
  focusLastChild() {
   this.focusChild(this.elements.menuItems.length - 1);
  }
  focusNextChild() {
   this.currentChild < this.elements.menuItems.length - 1
    ? this.focusChild(this.currentChild + 1)
    : this.focusCurrentChild();
  }
  focusPreviousChild() {
   this.currentChild > 0 ? this.focusChild(this.currentChild - 1) : this.focusCurrentChild();
  }
  blurCurrentChild() {
   (this.focusState = "none"), this.currentChild !== -1 && this.currentMenuItem.blur();
  }
  focusController() {
   this.dom.controller && (this.shouldFocus && this.dom.controller.focus(), (this.focusState = "none"));
  }
  focusContainer() {
   this.dom.container && (this.shouldFocus && this.dom.container.focus(), (this.focusState = "none"));
  }
  closeChildren() {
   this.elements.submenuToggles.forEach((e) => e.close());
  }
  blurChildren() {
   this.elements.menuItems.forEach((e) => {
    e.blur(), e.isSubmenuItem && e.elements.childMenu.blurChildren();
   });
  }
 }
 class R extends O {
  constructor({
   menuItemElement: e,
   menuLinkElement: t,
   parentMenu: s,
   isSubmenuItem: n = !1,
   childMenu: i = null,
   toggle: l = null,
   initialize: h = !0
  }) {
   super({ menuItemElement: e, menuLinkElement: t, parentMenu: s, isSubmenuItem: n, childMenu: i, toggle: l }),
    h && this.initialize();
  }
 }
 class U extends L {
  constructor({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: n = null, initialize: i = !0 }) {
   super({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: n }), i && this.initialize();
  }
  _setAriaAttributes() {
   super._setAriaAttributes(),
    K("button", { toggle: this.dom.toggle }) || this.dom.toggle.setAttribute("role", "button"),
    this.dom.toggle.setAttribute("aria-controls", this.elements.controlledMenu.dom.menu.id);
  }
  open() {
   this.closeSiblings(), super.open();
  }
  preview() {
   this.closeSiblings(), super.preview();
  }
  close() {
   this.isOpen && this.closeChildren(), super.close();
  }
 }
 class $ extends k {
  constructor({
   menuElement: t,
   menuItemSelector: s = "li",
   menuLinkSelector: n = "a",
   submenuItemSelector: i = "li:has(ul)",
   submenuToggleSelector: l = "button",
   submenuSelector: h = "ul",
   controllerElement: m = null,
   containerElement: a = null,
   openClass: p = "show",
   closeClass: f = "hide",
   transitionClass: g = "transitioning",
   transitionDuration: d = 250,
   openDuration: T = -1,
   closeDuration: C = -1,
   isTopLevel: E = !0,
   parentMenu: v = null,
   hoverType: I = "off",
   hoverDelay: w = 250,
   enterDelay: S = -1,
   leaveDelay: D = -1,
   optionalKeySupport: q = !1,
   prefix: j = "am-",
   initialize: X = !0
  }) {
   super({
    menuElement: t,
    menuItemSelector: s,
    menuLinkSelector: n,
    submenuItemSelector: i,
    submenuToggleSelector: l,
    submenuSelector: h,
    controllerElement: m,
    containerElement: a,
    openClass: p,
    closeClass: f,
    transitionClass: g,
    transitionDuration: d,
    openDuration: T,
    closeDuration: C,
    isTopLevel: E,
    parentMenu: v,
    hoverType: I,
    hoverDelay: w,
    enterDelay: S,
    leaveDelay: D,
    prefix: j
   });
   u(this, "_MenuType", $);
   u(this, "_MenuItemType", R);
   u(this, "_MenuToggleType", U);
   u(this, "_currentChild", -1);
   u(this, "_optionalSupport", !1);
   (this._optionalSupport = q), X && this.initialize();
  }
  initialize() {
   try {
    super.initialize(),
     this._handleFocus(),
     this._handleClick(),
     this._handleHover(),
     this._handleKeydown(),
     this._handleKeyup();
   } catch (t) {
    console.error(t);
   }
  }
  get optionalKeySupport() {
   return this.isTopLevel ? this._optionalSupport : this.elements.rootMenu.optionalKeySupport;
  }
  set optionalKeySupport(t) {
   c("boolean", { optionalKeySupport: t }), (this._optionalSupport = t);
  }
  _validate() {
   let t = super._validate();
   const s = c("boolean", { optionalKeySupport: this._optionalSupport });
   return s.status || (this._errors.push(s.error.message), (t = !1)), t;
  }
  _handleClick() {
   super._handleClick(),
    document.addEventListener("pointerup", (t) => {
     this.focusState !== "none" &&
      ((this.currentEvent = "mouse"),
      !this.dom.menu.contains(t.target) &&
       !this.dom.menu !== t.target &&
       (this.closeChildren(),
       this.blur(),
       this.elements.controller && this.elements.controller.close(),
       (this.elements.rootMenu.hasOpened = !1)));
    });
  }
  _handleKeydown() {
   super._handleKeydown(),
    this.dom.menu.addEventListener("keydown", (t) => {
     this.currentEvent = "keyboard";
     const s = b(t);
     if (this.focusState === "self") {
      const n = ["Space", "Enter"],
       i = ["Escape"],
       l = ["Escape"],
       h = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Home", "End"];
      (n.includes(s) ||
       (this.optionalKeySupport && h.includes(s)) ||
       (this.elements.controller && i.includes(s)) ||
       (this.elements.parentMenu && l.includes(s))) &&
       o(t);
     }
    });
  }
  _handleKeyup() {
   super._handleKeyup(),
    this.dom.menu.addEventListener("keyup", (t) => {
     this.currentEvent = "keyboard";
     const s = b(t);
     this.focusState === "self" &&
      (s === "Space" || s === "Enter"
       ? this.currentMenuItem.isSubmenuItem
         ? (o(t),
           this.currentMenuItem.elements.toggle.isOpen
            ? this.currentMenuItem.elements.toggle.close()
            : this.currentMenuItem.elements.toggle.preview())
         : this.currentMenuItem.dom.link.click()
       : s === "Escape"
         ? this.elements.submenuToggles.some((i) => i.isOpen)
           ? (o(t), this.closeChildren())
           : this.elements.parentMenu
             ? (o(t),
               (this.elements.parentMenu.currentEvent = this.currentEvent),
               this.elements.parentMenu.closeChildren(),
               this.elements.parentMenu.focusCurrentChild())
             : this.isTopLevel &&
               this.elements.controller &&
               this.elements.controller.isOpen &&
               (this.elements.controller.close(), this.focusController())
         : this.optionalKeySupport &&
           (s === "ArrowDown" || s === "ArrowRight"
            ? (o(t),
              this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen
               ? ((this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
                 this.currentMenuItem.elements.childMenu.focusFirstChild())
               : this.focusNextChild())
            : s === "ArrowUp" || s === "ArrowLeft"
              ? (o(t), this.focusPreviousChild())
              : s === "Home"
                ? (o(t), this.focusFirstChild())
                : s === "End" && (o(t), this.focusLastChild())));
    });
  }
 }
 class W extends O {
  constructor({
   menuItemElement: e,
   menuLinkElement: t,
   parentMenu: s,
   isSubmenuItem: n = !1,
   childMenu: i = null,
   toggle: l = null,
   initialize: h = !0
  }) {
   super({ menuItemElement: e, menuLinkElement: t, parentMenu: s, isSubmenuItem: n, childMenu: i, toggle: l }),
    h && this.initialize();
  }
  initialize() {
   super.initialize(),
    this.dom.item.setAttribute("role", "none"),
    this.dom.link.setAttribute("role", "menuitem"),
    (this.dom.link.tabIndex = -1);
  }
  focus() {
   super.focus(), this.elements.parentMenu.isTopLevel && (this.dom.link.tabIndex = 0);
  }
  blur() {
   super.blur(), this.elements.parentMenu.isTopLevel && (this.dom.link.tabIndex = -1);
  }
 }
 class Z extends L {
  constructor({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: n = null, initialize: i = !0 }) {
   super({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: n }), i && this.initialize();
  }
  _setAriaAttributes() {
   super._setAriaAttributes(), this.dom.toggle.setAttribute("aria-haspopup", "true");
  }
  open() {
   this.closeSiblings(), super.open();
  }
  preview() {
   this.closeSiblings(), super.preview();
  }
  close() {
   this.isOpen && (this.closeChildren(), this.elements.parentMenu && this.elements.parentMenu.focusCurrentChild()),
    super.close();
  }
 }
 class F extends k {
  constructor({
   menuElement: t,
   menuItemSelector: s = "li",
   menuLinkSelector: n = "a",
   submenuItemSelector: i = "li:has(ul)",
   submenuToggleSelector: l = "a",
   submenuSelector: h = "ul",
   controllerElement: m = null,
   containerElement: a = null,
   openClass: p = "show",
   closeClass: f = "hide",
   transitionClass: g = "transitioning",
   transitionDuration: d = 250,
   isTopLevel: T = !0,
   parentMenu: C = null,
   hoverType: E = "off",
   hoverDelay: v = 250,
   enterDelay: I = -1,
   leaveDelay: w = -1,
   prefix: S = "am-",
   initialize: D = !0
  }) {
   super({
    menuElement: t,
    menuItemSelector: s,
    menuLinkSelector: n,
    submenuItemSelector: i,
    submenuToggleSelector: l,
    submenuSelector: h,
    controllerElement: m,
    containerElement: a,
    openClass: p,
    closeClass: f,
    transitionClass: g,
    transitionDuration: d,
    isTopLevel: T,
    parentMenu: C,
    hoverType: E,
    hoverDelay: v,
    enterDelay: I,
    leaveDelay: w,
    prefix: S
   });
   u(this, "_MenuType", F);
   u(this, "_MenuItemType", W);
   u(this, "_MenuToggleType", Z);
   D && this.initialize();
  }
  initialize() {
   try {
    super.initialize(),
     this.isTopLevel ? this.dom.menu.setAttribute("role", "menubar") : this.dom.menu.setAttribute("role", "menu"),
     this._handleFocus(),
     this._handleClick(),
     this._handleHover(),
     this._handleKeydown(),
     this._handleKeyup(),
     this.isTopLevel &&
      ((this.elements.menuItems[0].dom.link.tabIndex = 0),
      this.elements.controller && this.elements.controller.dom.toggle.removeAttribute("aria-haspopup"));
   } catch (t) {
    console.error(t);
   }
  }
  _handleClick() {
   super._handleClick(),
    document.addEventListener("pointerup", (t) => {
     this.focusState !== "none" &&
      ((this.currentEvent = "mouse"),
      !this.dom.menu.contains(t.target) &&
       !this.dom.menu !== t.target &&
       (this.closeChildren(),
       this.blur(),
       this.elements.controller && this.elements.controller.close(),
       (this.elements.rootMenu.hasOpened = !1)));
    });
  }
  _handleKeydown() {
   super._handleKeydown(),
    this.dom.menu.addEventListener("keydown", (t) => {
     this.currentEvent = "keyboard";
     const s = b(t);
     if (
      (s === "Tab" &&
       (this.elements.rootMenu.focusState !== "none"
        ? (this.elements.rootMenu.blur(), this.elements.rootMenu.closeChildren())
        : this.elements.rootMenu.focus()),
      s === "Character")
     )
      o(t);
     else if (this.isTopLevel) {
      if (this.focusState === "self") {
       const n = ["Space", "Enter", "ArrowRight", "ArrowLeft", "Home", "End"],
        i = ["ArrowDown", "ArrowUp"],
        l = ["Escape"];
       (n.includes(s) ||
        (this.currentMenuItem.isSubmenuItem && i.includes(s)) ||
        (this.elements.controller && l.includes(s))) &&
        o(t);
      }
     } else
      ["Space", "Enter", "Escape", "ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(s) &&
       o(t);
    });
  }
  _handleKeyup() {
   super._handleKeyup(),
    this.dom.menu.addEventListener("keyup", (t) => {
     this.currentEvent = "keyboard";
     const s = b(t),
      { altKey: n, crtlKey: i, metaKey: l } = t;
     if (s === "Character" && !(n || i || l))
      o(t), (this.elements.rootMenu.currentEvent = "character"), this.focusNextChildWithCharacter(t.key);
     else if (this.isTopLevel) {
      if (this.focusState === "self")
       if (s === "Space" || s === "Enter")
        this.currentMenuItem.isSubmenuItem
         ? (o(t),
           (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
           this.currentMenuItem.elements.toggle.open(),
           requestAnimationFrame(() => {
            this.currentMenuItem.elements.childMenu.focusFirstChild();
           }))
         : this.currentMenuItem.dom.link.click();
       else if (s === "ArrowRight") {
        o(t);
        const m = this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen;
        this.focusNextChild(),
         m &&
          (this.currentMenuItem.isSubmenuItem
           ? ((this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
             this.currentMenuItem.elements.toggle.preview())
           : this.closeChildren());
       } else if (s === "ArrowLeft") {
        o(t);
        const m = this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen;
        this.focusPreviousChild(),
         m &&
          (this.currentMenuItem.isSubmenuItem
           ? ((this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
             this.currentMenuItem.elements.toggle.preview())
           : this.closeChildren());
       } else
        s === "ArrowDown"
         ? this.currentMenuItem.isSubmenuItem &&
           (o(t),
           (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
           this.currentMenuItem.elements.toggle.open(),
           requestAnimationFrame(() => {
            this.currentMenuItem.elements.childMenu.focusFirstChild();
           }))
         : s === "ArrowUp"
           ? this.currentMenuItem.isSubmenuItem &&
             (o(t),
             (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
             this.currentMenuItem.elements.toggle.open(),
             requestAnimationFrame(() => {
              this.currentMenuItem.elements.childMenu.focusLastChild();
             }))
           : s === "Home"
             ? (o(t), this.focusFirstChild())
             : s === "End"
               ? (o(t), this.focusLastChild())
               : s === "Escape" &&
                 (this.elements.submenuToggles.some((a) => a.isOpen)
                  ? (o(t), this.closeChildren())
                  : this.isTopLevel &&
                    this.elements.controller &&
                    this.elements.controller.isOpen &&
                    (o(t), this.elements.controller.close(), this.focusController()));
     } else
      s === "Space" || s === "Enter"
       ? this.currentMenuItem.isSubmenuItem
         ? (o(t),
           (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
           this.currentMenuItem.elements.toggle.open(),
           requestAnimationFrame(() => {
            this.currentMenuItem.elements.childMenu.focusFirstChild();
           }))
         : this.currentMenuItem.dom.link.click()
       : s === "Escape"
         ? (o(t), this.elements.rootMenu.closeChildren(), this.elements.rootMenu.focusCurrentChild())
         : s === "ArrowRight"
           ? this.currentMenuItem.isSubmenuItem
             ? (o(t),
               (this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
               this.currentMenuItem.elements.toggle.open(),
               requestAnimationFrame(() => {
                this.currentMenuItem.elements.childMenu.focusFirstChild();
               }))
             : (o(t),
               this.elements.rootMenu.closeChildren(),
               this.elements.rootMenu.focusNextChild(),
               this.elements.rootMenu.currentMenuItem.isSubmenuItem &&
                this.elements.rootMenu.currentMenuItem.elements.toggle.preview())
           : s === "ArrowLeft"
             ? this.elements.parentMenu.currentMenuItem.isSubmenuItem &&
               (o(t),
               this.elements.parentMenu.currentMenuItem.elements.toggle.close(),
               this.elements.parentMenu.focusCurrentChild(),
               this.elements.parentMenu === this.elements.rootMenu &&
                (this.elements.rootMenu.closeChildren(),
                this.elements.rootMenu.focusPreviousChild(),
                this.elements.rootMenu.currentMenuItem.isSubmenuItem &&
                 ((this.elements.rootMenu.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
                 this.elements.rootMenu.currentMenuItem.elements.toggle.preview())))
             : s === "ArrowDown"
               ? (o(t), this.focusNextChild())
               : s === "ArrowUp"
                 ? (o(t), this.focusPreviousChild())
                 : s === "Home"
                   ? (o(t), this.focusFirstChild())
                   : s === "End" && (o(t), this.focusLastChild());
    });
  }
  focusNextChild() {
   this.currentChild === this.elements.menuItems.length - 1
    ? this.focusFirstChild()
    : this.focusChild(this.currentChild + 1);
  }
  focusPreviousChild() {
   this.currentChild === 0 ? this.focusLastChild() : this.focusChild(this.currentChild - 1);
  }
  focusNextChildWithCharacter(t) {
   const s = t.toLowerCase();
   let n = this.currentChild + 1,
    i = !1;
   for (; !i && n < this.elements.menuItems.length; ) {
    let l = "";
    this.elements.menuItems[n].dom.item.innerText
     ? (l = this.elements.menuItems[n].dom.item.innerText)
     : (l = this.elements.menuItems[n].dom.item.textContent),
     (l = l.replace(/[\s]/g, "").toLowerCase().charAt(0)),
     l === s && ((i = !0), this.focusChild(n)),
     n++;
   }
  }
 }
 class Q extends O {
  constructor({
   menuItemElement: t,
   menuLinkElement: s,
   parentMenu: n,
   isSubmenuItem: i = !1,
   childMenu: l = null,
   toggle: h = null,
   initialize: m = !0,
   submenuSibling: a = null
  }) {
   super({ menuItemElement: t, menuLinkElement: s, parentMenu: n, isSubmenuItem: i, childMenu: l, toggle: h });
   u(this, "_elements", { parentMenu: null, childMenu: null, toggle: null, sibling: null });
   (this._elements.parentMenu = n),
    (this._elements.childMenu = l),
    (this._elements.toggle = h),
    (this._elements.sibling = a),
    m && this.initialize();
  }
 }
 class B extends L {
  constructor({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: n = null, initialize: i = !0 }) {
   super({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: n }), i && this.initialize();
  }
  _setAriaAttributes() {
   super._setAriaAttributes(),
    K("button", { toggle: this.dom.toggle }) || this.dom.toggle.setAttribute("role", "button"),
    this.dom.toggle.setAttribute("aria-controls", this.elements.controlledMenu.dom.menu.id);
  }
  open() {
   this.closeSiblings(), super.open();
  }
  preview() {
   this.closeSiblings(), super.preview();
  }
  close() {
   this.isOpen && this.closeChildren(), super.close();
  }
 }
 class z extends k {
  constructor({
   menuElement: t,
   menuItemSelector: s = "li",
   menuLinkSelector: n = "a",
   submenuItemSelector: i = "li:has(ul)",
   submenuToggleSelector: l = "button",
   submenuSelector: h = "ul",
   submenuSubtoggleSelector: m = "a",
   controllerElement: a = null,
   containerElement: p = null,
   openClass: f = "show",
   closeClass: g = "hide",
   transitionClass: d = "transitioning",
   transitionDuration: T = 250,
   isTopLevel: C = !0,
   parentMenu: E = null,
   hoverType: v = "off",
   hoverDelay: I = 250,
   enterDelay: w = -1,
   leaveDelay: S = -1,
   optionalKeySupport: D = !1,
   prefix: q = "am-",
   initialize: j = !0
  }) {
   super({
    menuElement: t,
    menuItemSelector: s,
    menuLinkSelector: n,
    submenuItemSelector: i,
    submenuSelector: h,
    submenuToggleSelector: l,
    controllerElement: a,
    containerElement: p,
    openClass: f,
    closeClass: g,
    transitionClass: d,
    transitionDuration: T,
    isTopLevel: C,
    parentMenu: E,
    hoverType: v,
    hoverDelay: I,
    enterDelay: w,
    leaveDelay: S,
    prefix: q
   });
   u(this, "_MenuType", z);
   u(this, "_MenuItemType", Q);
   u(this, "_MenuToggleType", B);
   u(this, "_currentChild", -1);
   u(this, "_selectors", {
    menuItems: "",
    menuLinks: "",
    submenuItems: "",
    submenuToggles: "",
    submenus: "",
    submenuSubtoggles: ""
   });
   u(this, "_optionalSupport", !1);
   (this._optionalSupport = D),
    (this._selectors.menuItems = s),
    (this._selectors.submenuItems = i),
    (this._selectors.submenuToggles = l),
    (this._selectors.submenus = h),
    (this._selectors.submenuSubtoggles = m),
    (this._selectors.menuLinks = [...new Set([n, l])].join(",")),
    j && this.initialize();
  }
  initialize() {
   try {
    super.initialize(),
     this._handleFocus(),
     this._handleClick(),
     this._handleHover(),
     this._handleKeydown(),
     this._handleKeyup();
   } catch (t) {
    console.error(t);
   }
  }
  get optionalKeySupport() {
   return this.isTopLevel ? this._optionalSupport : this.elements.rootMenu.optionalKeySupport;
  }
  set optionalKeySupport(t) {
   c("boolean", { optionalKeySupport: t }), (this._optionalSupport = t);
  }
  _createChildElements() {
   this.dom.menuItems.forEach((t) => {
    let s, n;
    const i = t.querySelector(this.selectors.menuLinks);
    if (this.dom.submenuItems.includes(t)) {
     const l = t.querySelector(this.selectors.submenuToggles),
      h = t.querySelector(this.selectors.submenus),
      m = new this._MenuType({
       menuElement: h,
       menuItemSelector: this.selectors.menuItems,
       menuLinkSelector: this.selectors.menuLinks,
       submenuItemSelector: this.selectors.submenuItems,
       submenuToggleSelector: this.selectors.submenuSubtoggles,
       submenuSelector: this.selectors.submenus,
       submenuSubtoggleSelector: this.selectors.submenuSubtoggles,
       openClass: this.openClass,
       closeClass: this.closeClass,
       transitionClass: this.transitionClass,
       isTopLevel: !1,
       parentMenu: this,
       hoverType: this.hoverType,
       hoverDelay: this.hoverDelay,
       enterDelay: this.enterDelay,
       leaveDelay: this.leaveDelay
      }),
      a = new this._MenuToggleType({ menuToggleElement: l, parentElement: t, controlledMenu: m, parentMenu: this });
     this._elements.submenuToggles.push(a),
      l !== i
       ? ((n = new this._MenuItemType({
          menuItemElement: t,
          menuLinkElement: l,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: m,
          toggle: a
         })),
         (s = new this._MenuItemType({ menuItemElement: t, menuLinkElement: i, parentMenu: this, submenuSibling: n })))
       : (s = new this._MenuItemType({
          menuItemElement: t,
          menuLinkElement: i,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: m,
          toggle: a
         }));
    } else s = new this._MenuItemType({ menuItemElement: t, menuLinkElement: i, parentMenu: this });
    this._elements.menuItems.push(s), typeof n < "u" && this._elements.menuItems.push(n);
   });
  }
  _validate() {
   let t = super._validate();
   const s = x({ submenuSubtoggleSelector: this._selectors.submenuSubtoggles });
   s.status || (this._errors.push(s.error.message), (t = !1));
   const n = c("boolean", { optionalKeySupport: this._optionalSupport });
   return n.status || (this._errors.push(n.error.message), (t = !1)), t;
  }
  _handleClick() {
   super._handleClick(),
    document.addEventListener("pointerup", (t) => {
     this.focusState !== "none" &&
      ((this.currentEvent = "mouse"),
      !this.dom.menu.contains(t.target) &&
       !this.dom.menu !== t.target &&
       (this.closeChildren(),
       this.blur(),
       this.elements.controller && this.elements.controller.close(),
       (this.elements.rootMenu.hasOpened = !1)));
    });
  }
  _handleHover() {
   this.elements.menuItems.forEach((t, s) => {
    t.dom.link.addEventListener("pointerenter", (n) => {
     if (!(n.pointerType === "pen" || n.pointerType === "touch")) {
      if (this.hoverType === "on") {
       (this.currentEvent = "mouse"), this.elements.rootMenu.blurChildren(), this.focusChild(s);
       let i = t.isSubmenuItem ? t.elements.toggle : null;
       if ((t.elements.sibling !== null && (i = t.elements.sibling.elements.toggle), i === null)) return;
       this.enterDelay > 0
        ? (this._clearTimeout(),
          this._setTimeout(() => {
           i.preview();
          }, this.enterDelay))
        : i.preview();
      } else if (
       this.hoverType === "dynamic" &&
       ((this.currentChild = s),
       (!this.isTopLevel || this.focusState !== "none") &&
        ((this.currentEvent = "mouse"), this.elements.rootMenu.blurChildren(), this.focusCurrentChild()),
       !this.isTopLevel || this.hasOpened)
      ) {
       (this.currentEvent = "mouse"), this.elements.rootMenu.blurChildren(), this.focusCurrentChild();
       let i = t.isSubmenuItem ? t.elements.toggle : null;
       t.elements.sibling !== null && (i = t.elements.sibling.elements.toggle),
        i !== null
         ? this.enterDelay > 0
           ? (this._clearTimeout(),
             this._setTimeout(() => {
              i.preview();
             }, this.enterDelay))
           : i.preview()
         : this.enterDelay > 0
           ? (this._clearTimeout(),
             this._setTimeout(() => {
              this.closeChildren();
             }, this.enterDelay))
           : this.closeChildren();
      }
     }
    }),
     t.isSubmenuItem &&
      (t.dom.item.addEventListener("pointerleave", (n) => {
       n.pointerType === "pen" ||
        n.pointerType === "touch" ||
        (this.hoverType === "on"
         ? this.leaveDelay > 0
           ? (this._clearTimeout(),
             this._setTimeout(() => {
              (this.currentEvent = "mouse"), t.elements.toggle.close();
             }, this.leaveDelay))
           : ((this.currentEvent = "mouse"), t.elements.toggle.close())
         : this.hoverType === "dynamic" &&
           (this.leaveDelay > 0
            ? (this._clearTimeout(),
              this._setTimeout(() => {
               this.currentEvent = "mouse";
              }, this.leaveDelay))
            : (this.currentEvent = "mouse")));
      }),
      t.dom.item.addEventListener("pointerenter", (n) => {
       n.pointerType === "pen" ||
        n.pointerType === "touch" ||
        (t.isSubmenuItem &&
         (this.hoverType === "on" || this.hoverType === "dynamic") &&
         this.leaveDelay > 0 &&
         this._clearTimeout());
      }));
   });
  }
  _handleKeydown() {
   super._handleKeydown(),
    this.dom.menu.addEventListener("keydown", (t) => {
     this.currentEvent = "keyboard";
     const s = b(t);
     if (this.focusState === "self") {
      const n = ["Space", "Enter"],
       i = ["Escape"],
       l = ["Escape"],
       h = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Home", "End"];
      (n.includes(s) ||
       (this.optionalKeySupport && h.includes(s)) ||
       (this.elements.controller && i.includes(s)) ||
       (this.elements.parentMenu && l.includes(s))) &&
       o(t);
     }
    });
  }
  _handleKeyup() {
   super._handleKeyup(),
    this.dom.menu.addEventListener("keyup", (t) => {
     this.currentEvent = "keyboard";
     const s = b(t);
     this.focusState === "self" &&
      (s === "Space" || s === "Enter"
       ? this.currentMenuItem.isSubmenuItem
         ? (o(t),
           this.currentMenuItem.elements.toggle.isOpen
            ? this.currentMenuItem.elements.toggle.close()
            : this.currentMenuItem.elements.toggle.preview())
         : this.currentMenuItem.dom.link.click()
       : s === "Escape"
         ? this.elements.submenuToggles.some((i) => i.isOpen)
           ? (o(t), this.closeChildren())
           : this.elements.parentMenu
             ? (o(t),
               (this.elements.parentMenu.currentEvent = this.currentEvent),
               this.elements.parentMenu.closeChildren(),
               this.elements.parentMenu.focusCurrentChild())
             : this.isTopLevel &&
               this.elements.controller &&
               this.elements.controller.isOpen &&
               (this.elements.controller.close(), this.focusController())
         : this.optionalKeySupport &&
           (s === "ArrowDown" || s === "ArrowRight"
            ? (o(t),
              this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen
               ? ((this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
                 this.currentMenuItem.elements.childMenu.focusFirstChild())
               : this.focusNextChild())
            : s === "ArrowUp" || s === "ArrowLeft"
              ? (o(t), this.focusPreviousChild())
              : s === "Home"
                ? (o(t), this.focusFirstChild())
                : s === "End" && (o(t), this.focusLastChild())));
    });
  }
 }
 class G extends O {
  constructor({
   menuItemElement: e,
   menuLinkElement: t,
   parentMenu: s,
   isSubmenuItem: n = !1,
   childMenu: i = null,
   toggle: l = null,
   initialize: h = !0
  }) {
   super({ menuItemElement: e, menuLinkElement: t, parentMenu: s, isSubmenuItem: n, childMenu: i, toggle: l }),
    h && this.initialize();
  }
  initialize() {
   super.initialize(),
    this.dom.item.setAttribute("role", "none"),
    this.dom.link.setAttribute("role", "treeitem"),
    (this.dom.link.tabIndex = -1);
  }
  focus() {
   super.focus(), (this.dom.link.tabIndex = 0);
  }
  blur() {
   super.blur(), (this.dom.link.tabIndex = -1);
  }
 }
 class J extends L {
  constructor({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: n = null, initialize: i = !0 }) {
   super({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: n }), i && this.initialize();
  }
  initialize() {
   this._setIds(),
    this._setAriaAttributes(),
    this.dom.toggle.getAttribute("aria-expanded") === "true" ? this.open() : this._collapse(!1);
  }
  _setAriaAttributes() {
   this.dom.toggle.getAttribute("aria-expanded") !== "true" && this.dom.toggle.setAttribute("aria-expanded", "false"),
    this.elements.controlledMenu.dom.menu.setAttribute("aria-labelledby", this.dom.toggle.id),
    this.dom.toggle.setAttribute("aria-owns", this.elements.controlledMenu.dom.menu.id);
  }
 }
 class H extends k {
  constructor({
   menuElement: t,
   menuItemSelector: s = "li",
   menuLinkSelector: n = "a",
   submenuItemSelector: i = "li:has(ul)",
   submenuToggleSelector: l = "a",
   submenuSelector: h = "ul",
   controllerElement: m = null,
   containerElement: a = null,
   openClass: p = "show",
   closeClass: f = "hide",
   transitionClass: g = "transitioning",
   transitionDuration: d = 250,
   isTopLevel: T = !0,
   parentMenu: C = null,
   hoverType: E = "off",
   hoverDelay: v = 250,
   enterDelay: I = -1,
   leaveDelay: w = -1,
   prefix: S = "am-",
   initialize: D = !0
  }) {
   super({
    menuElement: t,
    menuItemSelector: s,
    menuLinkSelector: n,
    submenuItemSelector: i,
    submenuToggleSelector: l,
    submenuSelector: h,
    controllerElement: m,
    containerElement: a,
    openClass: p,
    closeClass: f,
    transitionClass: g,
    transitionDuration: d,
    isTopLevel: T,
    parentMenu: C,
    hoverType: E,
    hoverDelay: v,
    enterDelay: I,
    leaveDelay: w,
    prefix: S
   });
   u(this, "_MenuType", H);
   u(this, "_MenuItemType", G);
   u(this, "_MenuToggleType", J);
   D && this.initialize();
  }
  initialize() {
   try {
    super.initialize(),
     this.isTopLevel
      ? (this.dom.menu.setAttribute("role", "tree"), (this.elements.menuItems[0].dom.link.tabIndex = 0))
      : this.dom.menu.setAttribute("role", "group"),
     this._handleFocus(),
     this._handleClick(),
     this._handleHover(),
     this._handleKeydown(),
     this._handleKeyup(),
     this.isTopLevel && this.elements.controller && this.elements.controller.dom.toggle.removeAttribute("aria-owns");
   } catch (t) {
    console.error(t);
   }
  }
  _handleHover() {
   this.elements.menuItems.forEach((t, s) => {
    t.dom.link.addEventListener("pointerenter", (n) => {
     n.pointerType === "pen" ||
      n.pointerType === "touch" ||
      (this.hoverType === "on"
       ? ((this.currentEvent = "mouse"),
         this.elements.rootMenu.blurChildren(),
         this.focusChild(s),
         t.isSubmenuItem &&
          (this.enterDelay > 0
           ? (this._clearTimeout(),
             this._setTimeout(() => {
              t.elements.toggle.preview();
             }, this.enterDelay))
           : t.elements.toggle.preview()))
       : this.hoverType === "dynamic" &&
         ((this.currentChild = s),
         (!this.isTopLevel || this.focusState !== "none") &&
          ((this.currentEvent = "mouse"), this.elements.rootMenu.blurChildren(), this.focusCurrentChild()),
         (!this.isTopLevel || this.hasOpened) &&
          ((this.currentEvent = "mouse"),
          this.elements.rootMenu.blurChildren(),
          this.focusCurrentChild(),
          t.isSubmenuItem
           ? this.enterDelay > 0
             ? (this._clearTimeout(),
               this._setTimeout(() => {
                t.elements.toggle.preview();
               }, this.enterDelay))
             : t.elements.toggle.preview()
           : this.enterDelay > 0 && this._clearTimeout())));
    }),
     t.isSubmenuItem &&
      (t.dom.item.addEventListener("pointerleave", (n) => {
       n.pointerType === "pen" ||
        n.pointerType === "touch" ||
        (this.hoverType === "on"
         ? this.leaveDelay > 0 && this._clearTimeout()
         : this.hoverType === "dynamic" &&
           (this.leaveDelay > 0
            ? (this._clearTimeout(),
              this._setTimeout(() => {
               this.currentEvent = "mouse";
              }, this.leaveDelay))
            : (this.currentEvent = "mouse")));
      }),
      t.dom.item.addEventListener("pointerenter", (n) => {
       n.pointerType === "pen" ||
        n.pointerType === "touch" ||
        (t.isSubmenuItem &&
         (this.hoverType === "on" || this.hoverType === "dynamic") &&
         this.leaveDelay > 0 &&
         this._clearTimeout());
      })),
     this.isTopLevel &&
      this.dom.menu.addEventListener("pointerleave", (n) => {
       n.pointerType === "pen" ||
        n.pointerType === "touch" ||
        (this.hoverType === "on" &&
         (this.leaveDelay > 0
          ? (this._clearTimeout(),
            this._setTimeout(() => {
             this.closeChildren(), this.blur();
            }, this.leaveDelay))
          : (this.closeChildren(), this.blur())));
      });
   });
  }
  _handleKeydown() {
   super._handleKeydown(),
    this.dom.menu.addEventListener("keydown", (t) => {
     this.currentEvent = "keyboard";
     const s = b(t);
     if (
      (s === "Tab" &&
       (this.elements.rootMenu.focusState !== "none" ? this.elements.rootMenu.blur() : this.elements.rootMenu.focus()),
      this.focusState === "self")
     ) {
      const n = ["Space", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "Asterisk", "Home", "End"],
       i = ["ArrowRight"],
       l = ["Escape"];
      (n.includes(s) ||
       (this.currentMenuItem.isSubmenuItem && i.includes(s)) ||
       (this.elements.controller && l.includes(s))) &&
       o(t);
     }
    });
  }
  _handleKeyup() {
   super._handleKeyup(),
    this.dom.menu.addEventListener("keyup", (t) => {
     this.currentEvent = "keyboard";
     const s = b(t),
      { altKey: n, crtlKey: i, metaKey: l } = t;
     if (s === "Character" && !(n || i || l))
      o(t), (this.elements.rootMenu.currentEvent = "character"), this.focusNextNodeWithCharacter(t.key);
     else if (this.focusState === "self")
      if (s === "Enter" || s === "Space")
       o(t),
        this.currentMenuItem.isSubmenuItem
         ? this.currentMenuItem.elements.toggle.isOpen
           ? this.currentMenuItem.elements.toggle.close()
           : this.currentMenuItem.elements.toggle.preview()
         : this.currentMenuItem.dom.link.click();
      else if (s === "Escape")
       this.isTopLevel &&
        this.elements.controller &&
        this.elements.controller.isOpen &&
        (this.elements.controller.close(), this.focusController());
      else if (s === "ArrowDown")
       o(t),
        this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen
         ? (this.blurCurrentChild(),
           (this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent),
           this.currentMenuItem.elements.childMenu.focusFirstChild())
         : !this.isTopLevel && this.currentChild === this.elements.menuItems.length - 1
           ? this.focusParentsNextChild()
           : this.focusNextChild();
      else if (s === "ArrowUp") {
       o(t);
       const m = this.elements.menuItems[this.currentChild - 1];
       m && m.isSubmenuItem && m.elements.toggle.isOpen
        ? (this.blurCurrentChild(),
          (this.currentChild = this.currentChild - 1),
          (this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent),
          this.focusChildsLastNode())
        : !this.isTopLevel && this.currentChild === 0
          ? (this.blurCurrentChild(),
            (this.elements.parentMenu.currentEvent = this.currentEvent),
            this.elements.parentMenu.focusCurrentChild())
          : this.focusPreviousChild();
      } else
       s === "ArrowRight"
        ? this.currentMenuItem.isSubmenuItem &&
          (o(t),
          this.currentMenuItem.elements.toggle.isOpen
           ? (this.blurCurrentChild(),
             (this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent),
             this.currentMenuItem.elements.childMenu.focusFirstChild())
           : this.currentMenuItem.elements.toggle.preview())
        : s === "ArrowLeft"
          ? (o(t),
            this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen
             ? (this.currentMenuItem.elements.childMenu.blurCurrentChild(),
               this.currentMenuItem.elements.toggle.close())
             : this.isTopLevel ||
               (this.blurCurrentChild(),
               (this.elements.parentMenu.currentEvent = this.currentEvent),
               this.elements.parentMenu.focusCurrentChild()))
          : s === "Home"
            ? (o(t), this.blurCurrentChild(), this.elements.rootMenu.focusFirstChild())
            : s === "End"
              ? (o(t), this.blurCurrentChild(), this.elements.rootMenu.focusLastNode())
              : s === "Asterisk" && (o(t), this.openChildren());
    });
  }
  focusLastNode() {
   const t = this.elements.menuItems.length - 1,
    s = this.elements.menuItems[t];
   s.isSubmenuItem && s.elements.toggle.isOpen
    ? ((this.currentChild = t),
      (s.elements.childMenu.currentEvent = this.currentEvent),
      s.elements.childMenu.focusLastNode())
    : this.focusLastChild();
  }
  openChildren() {
   this.elements.submenuToggles.forEach((t) => t.preview());
  }
  focusNextNodeWithCharacter(t) {
   function s(p) {
    let f = [];
    return (
     p.elements.menuItems.forEach((g) => {
      f.push(g),
       g.isSubmenuItem && g.elements.toggle.isOpen && (f = [...f, ...s(g.elements.toggle.elements.controlledMenu)]);
     }),
     f
    );
   }
   const n = t.toLowerCase(),
    i = s(this.elements.rootMenu),
    l = i.indexOf(this.currentMenuItem) + 1,
    h = [...i.slice(l), ...i.slice(0, l)];
   let m = 0,
    a = !1;
   for (; !a && m < h.length; ) {
    let p = "";
    if (
     (h[m].dom.item.innerText ? (p = h[m].dom.item.innerText) : (p = h[m].dom.item.textContent),
     (p = p.replace(/[\s]/g, "").toLowerCase().charAt(0)),
     p === n)
    ) {
     a = !0;
     const f = h[m].elements.parentMenu,
      g = f.elements.menuItems.indexOf(h[m]);
     this.elements.rootMenu.blurChildren(), f.focusChild(g);
    }
    m++;
   }
  }
  focusParentsNextChild() {
   this.elements.parentMenu &&
    ((this.elements.parentMenu.currentEvent = this.currentEvent),
    this.elements.parentMenu.currentChild === this.elements.parentMenu.elements.menuItems.length - 1
     ? (this.elements.parentMenu.blurCurrentChild(), this.elements.parentMenu.focusParentsNextChild())
     : (this.blurChildren(), this.elements.parentMenu.focusNextChild()));
  }
  focusChildsLastNode() {
   (this.currentMenuItem.elements.childMenu.currentEvent = this.currentEvent),
    this.currentMenuItem.elements.childMenu.focusLastChild(),
    this.currentMenuItem.elements.childMenu.currentMenuItem.isSubmenuItem &&
     this.currentMenuItem.elements.childMenu.currentMenuItem.elements.toggle.isOpen &&
     (this.currentMenuItem.elements.childMenu.blurCurrentChild(),
     this.currentMenuItem.elements.childMenu.focusChildsLastNode());
  }
 }
 return { DisclosureMenu: $, Menubar: F, TopLinkDisclosureMenu: z, Treeview: H };
})();
