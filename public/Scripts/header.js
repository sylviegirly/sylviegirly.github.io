document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new NavHeader();

    // Add any custom JavaScript code here...
});

const content = `
<header>
    <div class="title">aid's small corner</div>
    <div class="subtext">a little personal site</div>
</header>
<div class="topnavbg">
    <div class="topnav" id="myTopnav">
        <a href="/index.html" class="active">Home</a>
        <a href="/about.html">About Me</a>
        <div class="dropdown">
            <button class="dropbtn">
                Personal
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="/blogging.html">Blog</a>
                <a href="/manifesto.html">Manifesto</a>
                <a href="/to-do.html">To-do List</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">
                OCs / Shrines
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#" class="disabled">Sylvie</a>
                <a href="#" class="disabled">Zhongvie (💖)</a>
                <a href="#" class="disabled">Yadyra</a>
                <a href="#" class="disabled">Nameless</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">
                Fun Things
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="/minecraft.html">Minecraft Forever World</a>
                <a href="/links.html">Neighbours / Webrings
                <a href="#" class="disabled">Recipes</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">
                Other
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="https://asuraid.atabook.org/">Guestbook</a>
                <a href="#" class="disabled">Resources</a>
                <a href="/sitemap.html">Sitemap</a>
                <a href="/credits.html">Credits</a>
            </div>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
    </div>
</div>

`;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
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
