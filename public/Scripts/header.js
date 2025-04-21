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
            <div class="dropdown-content" id="myDropdown">
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
            <div class="dropdown-content" id="myDropdown">
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
            <div class="dropdown-content" id="myDropdown">
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
            <div class="dropdown-content" id="myDropdown">
                <a href="https://asuraid.atabook.org/">Guestbook</a>
                <a href="#" class="disabled">Resources</a>
                <a href="/sitemap.html">Sitemap</a>
                <a href="/credits.html">Credits</a>
            </div>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="openDropdown()">&#9776;</a>
    </div>
</div>

`;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    }
};

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
