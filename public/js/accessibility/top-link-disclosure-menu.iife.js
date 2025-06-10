var TopLinkDisclosureMenu = (function () {
 "use strict";
 var R = Object.defineProperty;
 var U = (p, m, g) => (m in p ? R(p, m, { enumerable: !0, configurable: !0, writable: !0, value: g }) : (p[m] = g));
 var o = (p, m, g) => U(p, typeof m != "symbol" ? m + "" : m, g);
 function p(n, e) {
  n === "" || n.length === 0 || (typeof n == "string" ? e.classList.add(n) : e.classList.add(...n));
 }
 function m(n, e) {
  n === "" || n.length === 0 || (typeof n == "string" ? e.classList.remove(n) : e.classList.remove(...n));
 }
 function g(n, e) {
  try {
   if (typeof e != "object") {
    const t = typeof e;
    throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${t}" given.`);
   }
   for (const t in e)
    if (!(e[t] instanceof n)) {
     const s = typeof e[t];
     throw new TypeError(`${t} must be an instance of ${n.name}. "${s}" given.`);
    }
   return { status: !0, error: null };
  } catch (t) {
   return { status: !1, error: t };
  }
 }
 function u(n, e) {
  try {
   if (typeof e != "object") {
    const t = typeof e;
    throw new TypeError(`Values given to isValidType() must be inside of an object. "${t}" given.`);
   }
   for (const t in e) {
    const s = typeof e[t];
    if (s !== n) throw new TypeError(`${t} must be a ${n}. "${s}" given.`);
   }
   return { status: !0, error: null };
  } catch (t) {
   return { status: !1, error: t };
  }
 }
 function C(n) {
  try {
   if (typeof n != "object") {
    const e = typeof n;
    throw new TypeError(`Values given to isQuerySelector() must be inside of an object. "${e}" given.`);
   }
   for (const e in n)
    try {
     if (n[e] === null) throw new Error();
     document.querySelector(n[e]);
    } catch {
     throw new TypeError(`${e} must be a valid query selector. "${n[e]}" given.`);
    }
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function _(n) {
  try {
   if (typeof n != "object" || Array.isArray(n)) {
    const e = typeof n;
    throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${e}" given.`);
   }
   for (const e in n) {
    const t = typeof n[e];
    if (t !== "string")
     if (Array.isArray(n[e]))
      n[e].forEach((s) => {
       if (typeof s != "string")
        throw new TypeError(`${e} must be a string or an array of strings. An array containing non-strings given.`);
      });
     else throw new TypeError(`${e} must be a string or an array of strings. "${t}" given.`);
    else {
     const s = {};
     (s[e] = n[e]), C(s);
    }
   }
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function q(n) {
  try {
   if (typeof n != "object") {
    const t = typeof n;
    throw new TypeError(`Values given to isValidState() must be inside of an object. "${t}" given.`);
   }
   const e = ["none", "self", "child"];
   for (const t in n)
    if (!e.includes(n[t]))
     throw new TypeError(`${t} must be one of the following values: ${e.join(", ")}. "${n[t]}" given.`);
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function K(n) {
  try {
   if (typeof n != "object") {
    const t = typeof n;
    throw new TypeError(`Values given to isValidEvent() must be inside of an object. "${t}" given.`);
   }
   const e = ["none", "mouse", "keyboard", "character"];
   for (const t in n)
    if (!e.includes(n[t]))
     throw new TypeError(`${t} must be one of the following values: ${e.join(", ")}. "${n[t]}" given.`);
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function $(n) {
  try {
   if (typeof n != "object") {
    const t = typeof n;
    throw new TypeError(`Values given to isValidHoverType() must be inside of an object. "${t}" given.`);
   }
   const e = ["off", "on", "dynamic"];
   for (const t in n)
    if (!e.includes(n[t]))
     throw new TypeError(`${t} must be one of the following values: ${e.join(", ")}. "${n[t]}" given.`);
   return { status: !0, error: null };
  } catch (e) {
   return { status: !1, error: e };
  }
 }
 function x(n, e) {
  if (u("string", { tagName: n }).status && g(HTMLElement, e).status) {
   const t = n.toLowerCase();
   let s = !0;
   for (const i in e) e[i].tagName.toLowerCase() !== t && (s = !1);
   return s;
  } else return !1;
 }
 class j {
  constructor({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: i = null }) {
   o(this, "_dom", { toggle: null, parent: null });
   o(this, "_elements", { controlledMenu: null, parentMenu: null });
   o(this, "_open", !1);
   o(this, "_expandEvent", new CustomEvent("accessibleMenuExpand", { bubbles: !0, detail: { toggle: this } }));
   o(this, "_collapseEvent", new CustomEvent("accessibleMenuCollapse", { bubbles: !0, detail: { toggle: this } }));
   (this._dom.toggle = e), (this._dom.parent = t), (this._elements.controlledMenu = s), (this._elements.parentMenu = i);
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
   u("boolean", { value: e }), (this._open = e);
  }
  _setIds() {
   var e;
   if (this.dom.toggle.id === "" || this.elements.controlledMenu.dom.menu.id === "") {
    const t = Math.random()
     .toString(36)
     .replace(/[^a-z]+/g, "")
     .substring(0, 10);
    let s = ((e = this.dom.toggle.innerText) == null ? void 0 : e.replace(/[^a-zA-Z0-9\s]/g, "")) || "",
     i = t;
    !s.replace(/\s/g, "").length &&
     this.dom.toggle.getAttribute("aria-label") &&
     (s = this.dom.toggle.getAttribute("aria-label").replace(/[^a-zA-Z0-9\s]/g, "")),
     s.replace(/\s/g, "").length > 0 &&
      ((s = s.toLowerCase().replace(/\s+/g, "-")),
      s.startsWith("-") && (s = s.substring(1)),
      s.endsWith("-") && (s = s.slice(0, -1)),
      (i = `${s}-${i}`)),
     (this.dom.toggle.id = this.dom.toggle.id || `menu-button-${i}`),
     (this.elements.controlledMenu.dom.menu.id = this.elements.controlledMenu.dom.menu.id || `menu-${i}`);
   }
  }
  _setAriaAttributes() {
   this.dom.toggle.setAttribute("aria-expanded", "false"),
    this.elements.controlledMenu.dom.menu.setAttribute("aria-labelledby", this.dom.toggle.id);
  }
  _expand(e = !0) {
   const { closeClass: t, openClass: s, transitionClass: i, openDuration: r } = this.elements.controlledMenu;
   this.dom.toggle.setAttribute("aria-expanded", "true"),
    (this.elements.controlledMenu.elements.rootMenu.hasOpened = !0),
    i !== ""
     ? (p(i, this.elements.controlledMenu.dom.menu),
       requestAnimationFrame(() => {
        m(t, this.elements.controlledMenu.dom.menu),
         requestAnimationFrame(() => {
          p(s, this.elements.controlledMenu.dom.menu),
           requestAnimationFrame(() => {
            setTimeout(() => {
             m(i, this.elements.controlledMenu.dom.menu);
            }, r);
           });
         });
       }))
     : (p(s, this.elements.controlledMenu.dom.menu), m(t, this.elements.controlledMenu.dom.menu)),
    e && this.dom.toggle.dispatchEvent(this._expandEvent);
  }
  _collapse(e = !0) {
   const { closeClass: t, openClass: s, transitionClass: i, closeDuration: r } = this.elements.controlledMenu;
   this.dom.toggle.setAttribute("aria-expanded", "false"),
    i !== ""
     ? (p(i, this.elements.controlledMenu.dom.menu),
       requestAnimationFrame(() => {
        m(s, this.elements.controlledMenu.dom.menu),
         requestAnimationFrame(() => {
          p(t, this.elements.controlledMenu.dom.menu),
           requestAnimationFrame(() => {
            setTimeout(() => {
             m(i, this.elements.controlledMenu.dom.menu);
            }, r);
           });
         });
       }))
     : (p(t, this.elements.controlledMenu.dom.menu), m(s, this.elements.controlledMenu.dom.menu)),
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
 class F {
  constructor({
   menuItemElement: e,
   menuLinkElement: t,
   parentMenu: s,
   isSubmenuItem: i = !1,
   childMenu: r = null,
   toggle: l = null
  }) {
   o(this, "_dom", { item: null, link: null });
   o(this, "_elements", { parentMenu: null, childMenu: null, toggle: null });
   o(this, "_submenu", !1);
   (this._dom.item = e),
    (this._dom.link = t),
    (this._elements.parentMenu = s),
    (this._elements.childMenu = r),
    (this._elements.toggle = l),
    (this._submenu = i);
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
 function E(n) {
  try {
   const e = n.key || n.keyCode,
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
 function c(n) {
  n.preventDefault(), n.stopPropagation();
 }
 class M {
  constructor({
   menuElement: e,
   menuItemSelector: t = "li",
   menuLinkSelector: s = "a",
   submenuItemSelector: i = "li:has(ul)",
   submenuToggleSelector: r = "a",
   submenuSelector: l = "ul",
   controllerElement: h = null,
   containerElement: f = null,
   openClass: d = "show",
   closeClass: y = "hide",
   transitionClass: b = "transitioning",
   transitionDuration: T = 250,
   openDuration: a = -1,
   closeDuration: w = -1,
   isTopLevel: D = !0,
   parentMenu: S = null,
   hoverType: k = "off",
   hoverDelay: L = 250,
   enterDelay: I = -1,
   leaveDelay: A = -1,
   prefix: O = "am-"
  }) {
   o(this, "_MenuType", M);
   o(this, "_MenuItemType", F);
   o(this, "_MenuToggleType", j);
   o(this, "_dom", {
    menu: null,
    menuItems: [],
    submenuItems: [],
    submenuToggles: [],
    submenus: [],
    controller: null,
    container: null
   });
   o(this, "_selectors", { menuItems: "", menuLinks: "", submenuItems: "", submenuToggles: "", submenus: "" });
   o(this, "_elements", { menuItems: [], submenuToggles: [], controller: null, parentMenu: null, rootMenu: null });
   o(this, "_openClass", "show");
   o(this, "_closeClass", "hide");
   o(this, "_transitionClass", "transitioning");
   o(this, "_transitionDuration", 250);
   o(this, "_openDuration", -1);
   o(this, "_closeDuration", -1);
   o(this, "_root", !0);
   o(this, "_currentChild", 0);
   o(this, "_focusState", "none");
   o(this, "_currentEvent", "none");
   o(this, "_hoverType", "off");
   o(this, "_hoverDelay", 250);
   o(this, "_enterDelay", -1);
   o(this, "_leaveDelay", -1);
   o(this, "_prefix", "am-");
   o(this, "_hoverTimeout", null);
   o(this, "_hasOpened", !1);
   o(this, "_errors", []);
   (this._dom.menu = e),
    (this._dom.controller = h),
    (this._dom.container = f),
    (this._selectors.menuItems = t),
    (this._selectors.menuLinks = s),
    (this._selectors.submenuItems = i),
    (this._selectors.submenuToggles = r),
    (this._selectors.submenus = l),
    (this._elements.menuItems = []),
    (this._elements.submenuToggles = []),
    (this._elements.controller = null),
    (this._elements.parentMenu = S),
    (this._elements.rootMenu = D ? this : null),
    (this._openClass = d || ""),
    (this._closeClass = y || ""),
    (this._transitionClass = b || ""),
    (this._transitionDuration = T),
    (this._openDuration = a),
    (this._closeDuration = w),
    (this._prefix = O || ""),
    (this._root = D),
    (this._hoverType = k),
    (this._hoverDelay = L),
    (this._enterDelay = I),
    (this._leaveDelay = A);
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
    x("button", { toggle: e.dom.toggle }) || e.dom.toggle.setAttribute("role", "button"),
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
   _({ openClass: e }), this._openClass !== e && (this._openClass = e);
  }
  set closeClass(e) {
   _({ closeClass: e }), this._closeClass !== e && (this._closeClass = e);
  }
  set transitionClass(e) {
   _({ transitionClass: e }), this._transitionClass !== e && (this._transitionClass = e);
  }
  set transitionDuration(e) {
   u("number", { value: e }),
    this._transitionDuration !== e && ((this._transitionDuration = e), this._setTransitionDurations());
  }
  set openDuration(e) {
   u("number", { value: e }), this._openDuration !== e && ((this._openDuration = e), this._setTransitionDurations());
  }
  set closeDuration(e) {
   u("number", { value: e }), this._closeDuration !== e && ((this._closeDuration = e), this._setTransitionDurations());
  }
  set currentChild(e) {
   u("number", { value: e });
   function t(s) {
    if (["mouse", "character"].includes(s.currentEvent) && s.elements.parentMenu) {
     let r = 0,
      l = !1;
     for (; !l && r < s.elements.parentMenu.elements.menuItems.length; ) {
      const h = s.elements.parentMenu.elements.menuItems[r];
      h.isSubmenuItem &&
       h.elements.toggle.elements.controlledMenu === s &&
       ((l = !0), (s.elements.parentMenu.currentEvent = s.currentEvent), (s.elements.parentMenu.currentChild = r)),
       r++;
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
   q({ value: e }),
    this._focusState !== e && (this._focusState = e),
    this.elements.submenuToggles.length > 0 &&
     (e === "self" || e === "none") &&
     this.elements.submenuToggles.forEach((t) => {
      t.elements.controlledMenu.focusState = "none";
     }),
    this.elements.parentMenu && (e === "self" || e === "child") && (this.elements.parentMenu.focusState = "child");
  }
  set currentEvent(e) {
   K({ value: e }),
    this._currentEvent !== e &&
     ((this._currentEvent = e),
     this.elements.submenuToggles.length > 0 &&
      this.elements.submenuToggles.forEach((t) => {
       t.elements.controlledMenu.currentEvent = e;
      }));
  }
  set hoverType(e) {
   $({ value: e }), this._hoverType !== e && (this._hoverType = e);
  }
  set hoverDelay(e) {
   u("number", { value: e }), this._hoverDelay !== e && (this._hoverDelay = e);
  }
  set enterDelay(e) {
   u("number", { value: e }), this._enterDelay !== e && (this._enterDelay = e);
  }
  set leaveDelay(e) {
   u("number", { value: e }), this._leaveDelay !== e && (this._leaveDelay = e);
  }
  set prefix(e) {
   u("string", { value: e }), this._prefix !== e && (this._prefix = e);
  }
  set hasOpened(e) {
   u("boolean", { value: e }), this._hasOpened !== e && (this._hasOpened = e);
  }
  _validate() {
   let e = !0,
    t;
   this._dom.container !== null || this._dom.controller !== null
    ? (t = g(HTMLElement, {
       menuElement: this._dom.menu,
       controllerElement: this._dom.controller,
       containerElement: this._dom.container
      }))
    : (t = g(HTMLElement, { menuElement: this._dom.menu })),
    t.status || (this._errors.push(t.error.message), (e = !1));
   let s;
   if (
    (this._selectors.submenuItems !== ""
     ? (s = C({
        menuItemSelector: this._selectors.menuItems,
        menuLinkSelector: this._selectors.menuLinks,
        submenuItemSelector: this._selectors.submenuItems,
        submenuToggleSelector: this._selectors.submenuToggles,
        submenuSelector: this._selectors.submenus
       }))
     : (s = C({ menuItemSelector: this._selectors.menuItems, menuLinkSelector: this._selectors.menuLinks })),
    s.status || (this._errors.push(s.error.message), (e = !1)),
    this._openClass !== "")
   ) {
    const a = _({ openClass: this._openClass });
    a.status || (this._errors.push(a.error.message), (e = !1));
   }
   if (this._closeClass !== "") {
    const a = _({ closeClass: this._closeClass });
    a.status || (this._errors.push(a.error.message), (e = !1));
   }
   if (this._transitionClass !== "") {
    const a = _({ transitionClass: this._transitionClass });
    a.status || (this._errors.push(a.error.message), (e = !1));
   }
   const i = u("number", { transitionDuration: this._transitionDuration });
   i.status || (this._errors.push(i.error.message), (e = !1));
   const r = u("number", { openDuration: this._openDuration });
   r.status || (this._errors.push(r.error.message), (e = !1));
   const l = u("number", { closeDuration: this._closeDuration });
   l.status || (this._errors.push(l.error.message), (e = !1));
   const h = u("boolean", { isTopLevel: this._root });
   if ((h.status || (this._errors.push(h.error.message), (e = !1)), this._elements.parentMenu !== null)) {
    const a = g(M, { parentMenu: this._elements.parentMenu });
    a.status || (this._errors.push(a.error.message), (e = !1));
   }
   const f = $({ hoverType: this._hoverType });
   f.status || (this._errors.push(f.error.message), (e = !1));
   const d = u("number", { hoverDelay: this._hoverDelay });
   d.status || (this._errors.push(d.error.message), (e = !1));
   const y = u("number", { enterDelay: this._enterDelay });
   y.status || (this._errors.push(y.error.message), (e = !1));
   const b = u("number", { leaveDelay: this._leaveDelay });
   b.status || (this._errors.push(b.error.message), (e = !1));
   const T = u("string", { prefix: this._prefix });
   return T.status || (this._errors.push(T.error.message), (e = !1)), e;
  }
  _setDOMElementType(e, t = this.dom.menu, s = !0) {
   if (typeof this.selectors[e] == "string") {
    if (!Array.isArray(this.dom[e]))
     throw new Error(`AccessibleMenu: The "${e}" element cannot be set through _setDOMElementType.`);
    t !== this.dom.menu && g(HTMLElement, { base: t });
    const r = Array.from(t.querySelectorAll(this.selectors[e])).filter((l) => l.parentElement === t);
    s ? (this._dom[e] = r) : (this._dom[e] = [...this._dom[e], ...r]);
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
      i = e.querySelector(this.selectors.submenus),
      r = new this._MenuType({
       menuElement: i,
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
      l = new this._MenuToggleType({ menuToggleElement: s, parentElement: e, controlledMenu: r, parentMenu: this });
     this._elements.submenuToggles.push(l),
      (t = new this._MenuItemType({
       menuItemElement: e,
       menuLinkElement: s,
       parentMenu: this,
       isSubmenuItem: !0,
       childMenu: r,
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
   u("function", { callback: e }), u("number", { delay: t }), (this._hoverTimeout = setTimeout(e, t));
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
   function e(t, s, i) {
    c(i),
     i.button === 0 &&
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
      t.elements.toggle.dom.toggle.addEventListener("pointerup", (i) => {
       (this.currentEvent = "mouse"), e(this, t.elements.toggle, i);
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
     const t = E(e);
     (t === "Space" || t === "Enter") && c(e);
    });
  }
  _handleKeyup() {
   this.isTopLevel &&
    this.elements.controller &&
    this.elements.controller.dom.toggle.addEventListener("keyup", (e) => {
     this.currentEvent = "keyboard";
     const t = E(e);
     (t === "Space" || t === "Enter") &&
      (c(e), this.elements.controller.toggle(), this.elements.controller.isOpen && this.focusFirstChild());
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
 class V extends F {
  constructor({
   menuItemElement: t,
   menuLinkElement: s,
   parentMenu: i,
   isSubmenuItem: r = !1,
   childMenu: l = null,
   toggle: h = null,
   initialize: f = !0,
   submenuSibling: d = null
  }) {
   super({ menuItemElement: t, menuLinkElement: s, parentMenu: i, isSubmenuItem: r, childMenu: l, toggle: h });
   o(this, "_elements", { parentMenu: null, childMenu: null, toggle: null, sibling: null });
   (this._elements.parentMenu = i),
    (this._elements.childMenu = l),
    (this._elements.toggle = h),
    (this._elements.sibling = d),
    f && this.initialize();
  }
 }
 class z extends j {
  constructor({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: i = null, initialize: r = !0 }) {
   super({ menuToggleElement: e, parentElement: t, controlledMenu: s, parentMenu: i }), r && this.initialize();
  }
  _setAriaAttributes() {
   super._setAriaAttributes(),
    x("button", { toggle: this.dom.toggle }) || this.dom.toggle.setAttribute("role", "button"),
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
 class v extends M {
  constructor({
   menuElement: t,
   menuItemSelector: s = "li",
   menuLinkSelector: i = "a",
   submenuItemSelector: r = "li:has(ul)",
   submenuToggleSelector: l = "button",
   submenuSelector: h = "ul",
   submenuSubtoggleSelector: f = "a",
   controllerElement: d = null,
   containerElement: y = null,
   openClass: b = "show",
   closeClass: T = "hide",
   transitionClass: a = "transitioning",
   transitionDuration: w = 250,
   isTopLevel: D = !0,
   parentMenu: S = null,
   hoverType: k = "off",
   hoverDelay: L = 250,
   enterDelay: I = -1,
   leaveDelay: A = -1,
   optionalKeySupport: O = !1,
   prefix: H = "am-",
   initialize: P = !0
  }) {
   super({
    menuElement: t,
    menuItemSelector: s,
    menuLinkSelector: i,
    submenuItemSelector: r,
    submenuSelector: h,
    submenuToggleSelector: l,
    controllerElement: d,
    containerElement: y,
    openClass: b,
    closeClass: T,
    transitionClass: a,
    transitionDuration: w,
    isTopLevel: D,
    parentMenu: S,
    hoverType: k,
    hoverDelay: L,
    enterDelay: I,
    leaveDelay: A,
    prefix: H
   });
   o(this, "_MenuType", v);
   o(this, "_MenuItemType", V);
   o(this, "_MenuToggleType", z);
   o(this, "_currentChild", -1);
   o(this, "_selectors", {
    menuItems: "",
    menuLinks: "",
    submenuItems: "",
    submenuToggles: "",
    submenus: "",
    submenuSubtoggles: ""
   });
   o(this, "_optionalSupport", !1);
   (this._optionalSupport = O),
    (this._selectors.menuItems = s),
    (this._selectors.submenuItems = r),
    (this._selectors.submenuToggles = l),
    (this._selectors.submenus = h),
    (this._selectors.submenuSubtoggles = f),
    (this._selectors.menuLinks = [...new Set([i, l])].join(",")),
    P && this.initialize();
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
   u("boolean", { optionalKeySupport: t }), (this._optionalSupport = t);
  }
  _createChildElements() {
   this.dom.menuItems.forEach((t) => {
    let s, i;
    const r = t.querySelector(this.selectors.menuLinks);
    if (this.dom.submenuItems.includes(t)) {
     const l = t.querySelector(this.selectors.submenuToggles),
      h = t.querySelector(this.selectors.submenus),
      f = new this._MenuType({
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
      d = new this._MenuToggleType({ menuToggleElement: l, parentElement: t, controlledMenu: f, parentMenu: this });
     this._elements.submenuToggles.push(d),
      l !== r
       ? ((i = new this._MenuItemType({
          menuItemElement: t,
          menuLinkElement: l,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: f,
          toggle: d
         })),
         (s = new this._MenuItemType({ menuItemElement: t, menuLinkElement: r, parentMenu: this, submenuSibling: i })))
       : (s = new this._MenuItemType({
          menuItemElement: t,
          menuLinkElement: r,
          parentMenu: this,
          isSubmenuItem: !0,
          childMenu: f,
          toggle: d
         }));
    } else s = new this._MenuItemType({ menuItemElement: t, menuLinkElement: r, parentMenu: this });
    this._elements.menuItems.push(s), typeof i < "u" && this._elements.menuItems.push(i);
   });
  }
  _validate() {
   let t = super._validate();
   const s = C({ submenuSubtoggleSelector: this._selectors.submenuSubtoggles });
   s.status || (this._errors.push(s.error.message), (t = !1));
   const i = u("boolean", { optionalKeySupport: this._optionalSupport });
   return i.status || (this._errors.push(i.error.message), (t = !1)), t;
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
    t.dom.link.addEventListener("pointerenter", (i) => {
     if (!(i.pointerType === "pen" || i.pointerType === "touch")) {
      if (this.hoverType === "on") {
       (this.currentEvent = "mouse"), this.elements.rootMenu.blurChildren(), this.focusChild(s);
       let r = t.isSubmenuItem ? t.elements.toggle : null;
       if ((t.elements.sibling !== null && (r = t.elements.sibling.elements.toggle), r === null)) return;
       this.enterDelay > 0
        ? (this._clearTimeout(),
          this._setTimeout(() => {
           r.preview();
          }, this.enterDelay))
        : r.preview();
      } else if (
       this.hoverType === "dynamic" &&
       ((this.currentChild = s),
       (!this.isTopLevel || this.focusState !== "none") &&
        ((this.currentEvent = "mouse"), this.elements.rootMenu.blurChildren(), this.focusCurrentChild()),
       !this.isTopLevel || this.hasOpened)
      ) {
       (this.currentEvent = "mouse"), this.elements.rootMenu.blurChildren(), this.focusCurrentChild();
       let r = t.isSubmenuItem ? t.elements.toggle : null;
       t.elements.sibling !== null && (r = t.elements.sibling.elements.toggle),
        r !== null
         ? this.enterDelay > 0
           ? (this._clearTimeout(),
             this._setTimeout(() => {
              r.preview();
             }, this.enterDelay))
           : r.preview()
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
      (t.dom.item.addEventListener("pointerleave", (i) => {
       i.pointerType === "pen" ||
        i.pointerType === "touch" ||
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
      t.dom.item.addEventListener("pointerenter", (i) => {
       i.pointerType === "pen" ||
        i.pointerType === "touch" ||
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
     const s = E(t);
     if (this.focusState === "self") {
      const i = ["Space", "Enter"],
       r = ["Escape"],
       l = ["Escape"],
       h = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Home", "End"];
      (i.includes(s) ||
       (this.optionalKeySupport && h.includes(s)) ||
       (this.elements.controller && r.includes(s)) ||
       (this.elements.parentMenu && l.includes(s))) &&
       c(t);
     }
    });
  }
  _handleKeyup() {
   super._handleKeyup(),
    this.dom.menu.addEventListener("keyup", (t) => {
     this.currentEvent = "keyboard";
     const s = E(t);
     this.focusState === "self" &&
      (s === "Space" || s === "Enter"
       ? this.currentMenuItem.isSubmenuItem
         ? (c(t),
           this.currentMenuItem.elements.toggle.isOpen
            ? this.currentMenuItem.elements.toggle.close()
            : this.currentMenuItem.elements.toggle.preview())
         : this.currentMenuItem.dom.link.click()
       : s === "Escape"
         ? this.elements.submenuToggles.some((r) => r.isOpen)
           ? (c(t), this.closeChildren())
           : this.elements.parentMenu
             ? (c(t),
               (this.elements.parentMenu.currentEvent = this.currentEvent),
               this.elements.parentMenu.closeChildren(),
               this.elements.parentMenu.focusCurrentChild())
             : this.isTopLevel &&
               this.elements.controller &&
               this.elements.controller.isOpen &&
               (this.elements.controller.close(), this.focusController())
         : this.optionalKeySupport &&
           (s === "ArrowDown" || s === "ArrowRight"
            ? (c(t),
              this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen
               ? ((this.currentMenuItem.elements.childMenu.currentEvent = "keyboard"),
                 this.currentMenuItem.elements.childMenu.focusFirstChild())
               : this.focusNextChild())
            : s === "ArrowUp" || s === "ArrowLeft"
              ? (c(t), this.focusPreviousChild())
              : s === "Home"
                ? (c(t), this.focusFirstChild())
                : s === "End" && (c(t), this.focusLastChild())));
    });
  }
 }
 return v;
})();
