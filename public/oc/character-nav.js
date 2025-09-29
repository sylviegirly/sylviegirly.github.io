document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new NavHeader();

    // Add any custom JavaScript code here...
    var bodyElem = document.querySelector("body");
    var fontForm = document.getElementById("fontFamily");

    if (!localStorage.getItem("fontFamily")) {
        populateStorage();
    } else {
        setStyles();
    }

    function populateStorage() {
        localStorage.setItem("fontFamily", document.getElementById("fontFamily").value);
        setStyles();
    }

    function setStyles() {
        var currentFont = localStorage.getItem("fontFamily");
        document.getElementById("fontFamily").value = currentFont;

        bodyElem.style.fontFamily = currentFont;
    }

    fontForm.onchange = populateStorage;
});

function getNestingString() {
    // This function prepares the "nesting" variable for your header and footer (see below).
    // Only change this function if you know what you're doing.
    const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
    const numberOfSlahes = currentUrl.split("/").length - 1;
    if (numberOfSlahes == 1) return ".";
    if (numberOfSlahes == 2) return "..";
    return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

const content = `
<!-- =============================================== -->
<!-- FONT TOGGLER -->
<!-- =============================================== -->

<div class="button-wrapper">
    <label for="fontFamily">Font:</label>
        <select name="fontFamily" id="fontFamily">
            <option value="freepixel">Free Pixel</option>
            <option value="atkinson">Atkinson Hyperlegible</option>
            <option value="intel one">Intel One Mono</option>
            <option value="open dyslexic">Open Dyslexic</option>
            <option value="Nunito">Nunito</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Verdana">Verdana</option>
            <option value="Arial">Arial</option>
    </select>
</div>

<nav>
    <button id="toggle-0" aria-label="Toggle main menu">☰</button>
    <ul id="menu-0">
        <li id="item-1-0-0"><a id="link-1-0-0" href="/index.html">Home</a></li>
        <li id="item-2-0-0"><a id="link-2-0-0" href="/about.html">About</a></li>
        <li id="item-3-0-0"><a id="link-2-0-0" href="/gallery.html">Art</a></li>
        <li id="item-4-0-0" class="dropdown">
            <a id="link-4-0-0" href="#">Personal</a>
            <ul id="menu-3">
                <li id="item-4-1-0"><a id="link-3-2-0" href="/blog.html">Blog</a></li>
                <li id="item-4-2-0"><a id="link-3-2-0" href="/diary/index.html">Diary</a></li>
                <li id="item-4-3-0"><a id="link-3-4-0" href="/manifesto.html">Manifesto</a></li>
                <li id="item-4-4-0"><a id="link-3-5-0" href="/now.html">Now</a></li>
            </ul>
        </li>
        <li id="item-5-0-0" class="dropdown">
            <a id="link-5-0-0" href="#">OCs / Shrines</a>
            <ul id="menu-4">
                <li id="item-5-1-0"><a id="link-4-1-0" href="/oc/sylvie/index.html">Sylvie</a></li>
                <li id="item-5-2-0"><a id="link-4-2-0" href="/oc/yadyra/index.html">Yadyra</a></li>
                <li id="item-5-3-0"><a id="link-4-3-0" href="/oc/nameless/index.html">Nameless</a></li>
                <li id="item-5-4-0"><a id="link-4-4-0" href="/oc.html">Other OCs</a></li>
                <li id="item-5-5-0" class="dropdown">
                    <a id="link-5-5-0" href="#">Shrines</a>
                    <ul id="menu-5-5">
                        <li id="item-5-5-1"><a id="link-4-5-1" href="/shrines/zhongli.html">Zhongli</a></li>
                        <li id="item-5-5-2"><a id="link-4-5-2" href="/shrines/zhongvie.html">Zhongvie (🌿🔶)</a></li>
                        <li id="item-5-5-3"><a id="link-4-5-3" href="/shrines/ukitake.html">Jushiro Ukitake</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="item-6-0-0" class="dropdown">
            <a id="link-6-0-0" href="#">Fun Things</a>
            <ul id="menu-6">
                <li id="item-6-1-0"><a id="link-5-1-0" href="/bookmarks.html">Bookmarks</a></li>
                <li id="item-6-2-0"><a id="link-5-1-0" href="/media-log.html">Media Log</a></li>
                <li id="item-6-3-0"><a id="link-5-2-0" href="/recipes.html">Recipes</a></li>
                <li id="item-6-4-0"><a id="link-5-3-0" href="/sims-3-legacy.html">Sims 3 Legacy</a></li>
                <li id="item-6-5-0"><a id="link-5-4-0" href="/toybox.html">Toybox</a></li>
            </ul>
        </li>
        <li id="item-7-0-0" class="dropdown">
            <a id="link-7-0-0" href="#">Others</a>
            <ul id="menu-7">
                <li id="item-7-1-0"><a id="link-6-5-0" href="/credits.html">Credits</a></li>
                <li id="item-7-2-0"><a id="link-6-1-0" href="https://asuraid.atabook.org/">Guestbook</a></li>
                <li id="item-7-3-0"><a id="link-6-3-0" href="/links.html">Neighbours</a></li>
                <li id="item-7-4-0"><a id="link-6-4-0" href="/sitemap.html">Sitemap</a></li>
                <li id="item-7-5-0"><a id="link-3-6-0" href="/to-do.html">To-Do List</a></li>
            </ul>
        </li>
    </ul>
</nav>
<header></header>
`;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/* FOR MOBILE DO NOT TOUCH OTHERWISE */
function openDropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

class NavHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = content;
    }
}
customElements.define("nav-header", NavHeader);
