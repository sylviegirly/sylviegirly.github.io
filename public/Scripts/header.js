document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new NavHeader();

    // Add any custom JavaScript code here...
});

const content = `
<header>
    <div class="title">aid's tiny corner</div>
    <div class="subtext">a personal site</div>
</header>
<nav>
    <ul>
        <li><a href="/index.html">home</a></li>
        <li><a href="/about.html">about me</a></li>
        <li class="disabled">ocs / shrines</li>
        <li>
            fun things
            <ul>
                <li><a href="/minecraft.html">minecraft world</a></li>
                <li class="disabled">recipes</li>
            </ul>
        </li>
        <li><a href="/blogging.html">blog</a></li>
        <li><a href="https://asuraid.atabook.org/" target="_blank">guestbook</a></li>
        <li>
            other links
            <ul>
                <li><a href="/manifesto.html">site manifesto</a></li>
                <li><a href="/links.html">links</a></li>
                <li><a href="/credits.html">credits</a></li>
                <li><a href="/sitemap.html">sitemap</a></li>
            </ul>
        </li>
    </ul>
</nav>
`;

class NavHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = content;
    }
}
customElements.define("nav-header", NavHeader);
