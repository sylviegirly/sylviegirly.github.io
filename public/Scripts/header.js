document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new NavHeader();

    // Add any custom JavaScript code here...
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
<header>
    <div class="title">aid's small corner</div>
    <div class="subtext">a little personal site</div>
</header>
<nav>
    <button id="toggle-0" aria-label="Toggle main menu">☰</button>
    <ul id="menu-0">
        <li id="item-1-0-0"><a id="link-1-0-0" href="/index.html">Home</a></li>
        <li id="item-2-0-0"><a id="link-2-0-0" href="/about.html">About Me</a></li>
        <li id="item-3-0-0" class="dropdown">
            <a id="link-3-0-0" href="#">Personal</a>
            <ul id="menu-3">
                <li id="item-3-1-0"><a id="link-3-1-0" href="/blogging.html">Blog</a></li>
                <li id="item-3-2-0"><a id="link-3-2-0" href="/manifesto.html">Manifesto</a></li>
                <li id="item-3-3-0"><a id="link-3-3-0" href="/to-do.html">To-Do List</a></li>
            </ul>
        </li>
        <li id="item-4-0-0" class="dropdown">
            <a id="link-4-0-0" href="#">OCs / Shrines</a>
            <ul id="menu-4">
                <li id="item-4-1-0"><a id="link-4-1-0" href="/OCs/sylvie.html">Sylvie</a></li>
                <li id="item-4-2-0"><a id="link-4-2-0" href="/OCs/yadyra.html">Yadyra</a></li>
                <li id="item-4-3-0"><a id="link-4-3-0" href="/OCs/nameless.html">Nameless</a></li>
                <li id="item-4-4-0" class="dropdown">
                    <a id="link-4-4-0" href="#">Shrines</a>
                    <ul id="menu-4-4">
                        <li id="item-4-4-1"><a id="link-4-4-1" href="#" class="disabled">Zhongli</a></li>
                        <li id="item-4-4-2"><a id="link-4-4-2" href="#" class="disabled">Zhongvie (🌿🔶)</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="item-5-0-0" class="dropdown">
            <a id="link-5-0-0" href="#">Fun Things</a>
            <ul id="menu-5">
                <li id="item-5-1-0"><a id="link-5-1-0" href="/minecraft.html">Minecraft Forever World</a></li>
                <li id="item-5-2-0"><a id="link-5-2-0" href="/links.html">Neighbours / Webrings</a></li>
                <li id="item-5-3-0"><a id="link-5-3-0" href="#" class="disabled">Recipes</a></li>
            </ul>
        </li>
        <li id="item-6-0-0" class="dropdown">
            <a id="link-6-0-0" href="#">Others</a>
            <ul id="menu-6">
                <li id="item-6-1-0"><a id="link-6-1-0" href="https://asuraid.atabook.org/">Guestbook</a></li>
                <li id="item-6-2-0"><a id="link-6-2-0" href="/bookmarks.html" class="disabled">Bookmarks</a></li>
                <li id="item-6-3-0"><a id="link-6-3-0" href="/sitemap.html">Sitemap</a></li>
                <li id="item-6-4-0"><a id="link-6-4-0" href="/credits.html">Credits</a></li>
            </ul>
        </li>
    </ul>
</nav>

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
