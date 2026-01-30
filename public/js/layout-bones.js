/*
 * constructor usually is for ShadowDOM stuff so post loading, connectedcallback apparently is for before????
 * more u fuckin know i guess LMFAO
 * https://stackoverflow.com/questions/43931180/when-should-i-apply-template-in-constructor-or-connectedcallback
 * https://nolanlawson.com/2024/01/13/web-component-gotcha-constructor-vs-connectedcallback/
 */

/* BEGIN HEADER */
const headerContent = `
<!-- HEADER -->
<header>
    <div class="title">aid's small corner</div>
    <div class="subtext">a little personal site</div>
</header>
<!-- FONT TOGGLE -->
<div class="font-wrapper">
    <label for="fontFamily" class="title">Font</label>
    <select name="fontFamily" id="fontFamily">
        <option value="Nunito">Nunito</option>
        <option value="Open Dyslexic">Open Dyslexic</option>
        <option value="Intel One">Intel One</option>
        <option value="Atkinson">Atkinson Hyperlegible</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Verdana">Verdana</option>
        <option value="Arial">Arial</option>
    </select>
    <button id="toggle-btn" onclick="toggle()">Disable GIFs</button>
</div>
<!-- NAVIGATION -->
<nav>
    <button id="toggle-0" aria-label="Toggle main menu">☰</button>
    <ul id="menu-0">
        <li id="item-1-0-0"><a id="link-1-0-0" href="/index.html">Home</a></li>
        <li id="item-2-0-0"><a id="link-2-0-0" href="/about.html">About</a></li>
        <li id="item-3-0-0"><a id="link-3-0-0" href="/gallery.html">Art</a></li>
        <li id="item-4-0-0" class="dropdown">
            <a id="link-4-0-0" href="#">Personal</a>
            <ul id="menu-4">
                <li id="item-4-1-0"><a id="link-4-1-0" href="https://zhongvie.bearblog.dev/">Blog</a></li>
                <li id="item-4-2-0"><a id="link-4-2-0" href="/diary/index.html">Diary</a></li>
                <li id="item-4-3-0"><a id="link-4-3-0" href="/manifesto.html">Manifesto</a></li>
                <li id="item-4-4-0"><a id="link-4-4-0" href="/microblog.html">Microblog</a></li>
                <li id="item-4-5-0"><a id="link-4-5-0" href="/now.html">Now</a></li>
            </ul>
        </li>
        <li id="item-5-0-0" class="dropdown">
            <a id="link-5-0-0" href="#">OCs / Shrines</a>
            <ul id="menu-5">
                <li id="item-5-1-0"><a id="link-5-1-0" href="/oc/sylvie/index.html">Sylvie</a></li>
                <li id="item-5-2-0"><a id="link-5-2-0" href="/oc/yadyra/index.html">Yadyra</a></li>
                <li id="item-5-3-0"><a id="link-5-3-0" href="/oc/nameless/index.html">Nameless</a></li>
                <li id="item-5-4-0"><a id="link-5-4-0" href="/oc/index.html">All OCs</a></li>
                <li id="item-5-5-0"><a id="link-5-5-0" href="/shrines/index.html">All Shrines</a></li>
            </ul>
        </li>
        <li id="item-6-0-0" class="dropdown">
            <a id="link-6-0-0" href="#">Fun Things</a>
            <ul id="menu-6">
                <li id="item-6-1-0"><a id="link-6-1-0" href="/articles/index.html">Articles</a></li>
                <li id="item-6-2-0"><a id="link-6-2-0" href="/bookmarks.html">Bookmarks</a></li>
                <li id="item-6-3-0"><a id="link-6-3-0" href="/cards/index.html">Colors TCG</a></li>
                <li id="item-6-4-0"><a id="link-6-4-0" href="/drawbox.html">Drawbox</a></li>
                <li id="item-6-5-0"><a id="link-6-5-0" href="/media-log.html">Media Log</a></li>
                <li id="item-6-6-0"><a id="link-6-6-0" href="/recipes/index.html">Recipes</a></li>
                <li id="item-6-7-0"><a id="link-6-7-0" href="/templates/index.html">Templates</a></li>
            </ul>
        </li>
        <li id="item-7-0-0" class="dropdown">
            <a id="link-7-0-0" href="#">Others</a>
            <ul id="menu-7">
                <li id="item-7-1-0"><a id="link-7-1-0" href="/changelog.html">Changelog</a></li>
                <li id="item-7-2-0"><a id="link-7-2-0" href="/credits.html">Credits</a></li>
                <li id="item-7-3-0"><a id="link-7-3-0" href="https://asuraid.atabook.org/">Guestbook</a></li>
                <li id="item-7-4-0"><a id="link-7-4-0" href="/links.html">Neighbours</a></li>
                <li id="item-7-5-0"><a id="link-7-5-0" href="/sitemap.html">Sitemap</a></li>
                <li id="item-7-6-0"><a id="link-7-6-0" href="/to-do.html">To-Do List</a></li>
            </ul>
        </li>
    </ul>
</nav>
`;

class NavHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = headerContent;
    }
}
customElements.define("nav-header", NavHeader);

/* BEGIN LEFT SIDEBAR */
const leftSidebarContent = `
<div id="left-sidebar">
    <section id="intro" style="padding: 15px; line-height: 0">
        <div class="img-floatinganim">
            <img class="dendro" src="/img/decos/dendro_symbol.png" aria-hidden="true" alt="" />
        </div>
        <div id="sidedeco"></div>
    </section>
    <section>
        <div class="description">
        <div class="title">Welcome!</div>
            <p style="text-align: center">
                <b>aid</b>
                <img
                    style="padding-left: 5px; padding-right: 5px"
                    src="/img/decos/flower_bullet.png"
                    aria-hidden="true"
                    alt="" />
                <b>25+</b>
                <img
                    style="padding-left: 5px; padding-right: 5px"
                    src="/img/decos/flower_bullet.png"
                    aria-hidden="true"
                    alt="" />
                <b>she/her</b>
            </p>
            <hr />
            <p>Welcome to my silly lil corner, hope you enjoy your stay!!</p>
        </div>
    </section>
    <section>
        <div class="title">
            Site Button
        </div>
        <div class="site-button">
            <div class="flexbox-lazy">
                <div>
                    <a href="https://zhongvie.neocities.org/" target="_blank" class="block"
                        ><img src="/img/zhongvie_button_1.gif" alt="zhongvie button" style="min-width: 88px;" class="freeze"
                    /></a>
                </div>
                <div>
                    <textarea id="site-button" name="site-button" style="width: 100px">
&lt;a href="https://zhongvie.neocities.org/"&gt;&lt;img src="https://file.garden/Zq0xOX6Iv3i3b1te/Neocities/sylvieButton.gif" alt="zhongvie button" loading="lazy"&gt;&lt;/a&gt;</textarea
                    >
                </div>
            </div>
            <label for="site-button" class="subtle" style="text-align: center; line-height: 0.5em;"
                >Please do not hotlink. <a href="./links.html">Alt buttons</a>.</label
            >
        </div>
    </section>
    <section>
        <div class="flexbox-lazy freeze" style="padding: 0">
            <a
                href="https://www.tumblr.com/lavendergalactic" style="text-decoration: none"
                title="gifs by lavendergalactic as a commission for me. please don't use.">
            <img src="/img/shiny/bites%20you%20shiny%20button.gif" alt="shiny button that says bites you"/>
            <img src="/img/shiny/silly%20shiny%20button.gif" alt="shiny button that says silly"/>
            <img src="/img/shiny/zhongvie%20shiny%20button.gif" alt="shiny button that says zhongvie"/></a>
        </div>
    </section>
    <section>
        <div class="flexbox-lazy hover-grow" style="padding: 0; padding-top: 5px; gap: 15px;">
        <a href="https://tamanotchi.world/22103c">
        <img src="https://tamanotchi.world/i/22103" alt="green tamanotchi pixel">
        </a>
        <a href="https://tamanotchi.world/22050c">
        <img src="https://tamanotchi.world/i/22050" alt="yellow tamanotchi pixel">
        </a>
        <a href="https://tamanotchi.world/22258c">
        <img src="https://tamanotchi.world/i/22258" alt="purple tamanotchi pixel">
        </a>
        <a href="https://tamanotchi.world/13609c">
        <img src="https://tamanotchi.world/i/13609" alt="pink star tamanotchi pixel">
        </a>
        </div>
    </section>
    <!-- FC2 Clap tag starts here -->
    <div class="flexbox-lazy hover-grow" style="flex-direction: column; padding: 0">
        <a href="https://grrrl.valentinely.cc/">
            <img
                class="image"
                loading="lazy"
                style="margin-left: auto; margin-right: auto; padding-top: 5px"
                src="/img/decos/madebya-green4.png"
                alt="pixel banner that says 'made by a girl'" /></a
        >
        <a
            href="//clap.fc2.com/post/asuraid/?url=https%3A%2F%2Fzhongvie.neocities.org%2F&title=Home+Page"
            title="Web Clap by FC2"
            ><img
                class="image"
                loading="lazy"
                src="//clap.fc2.com/images/button/green/asuraid?url=https%3A%2F%2Fzhongvie.neocities.org%2F&amp;lang=en"
                alt="Web Clap by FC2"
                style="border: none"
        /></a>
    </div>
    <!-- FC2 Clap tag ends here -->
</div>
    `;

class LeftSidebar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = leftSidebarContent;
    }
}

customElements.define("left-sidebar", LeftSidebar);

/* BEGIN FOOTER */
const footer = `
<div class="snow-container"></div>
<footer>
    <p>
        2025 &copy; lovingly coded by <a href="https://justinjackson.ca/webmaster/">aid</a> &bull; <a href="/changelog.html">changelog</a> &bull; <a href="/credits.html">credits</a> &bull; <a href="/feed.xml">rss</a> &bull; <a href="https://asuraid.atabook.org/">guestbook</a> &bull; <a href="https://revospring.net/@asuraid">askbox</a> &bull; <a href="mailto:sylviegly@pm.me">contact me</a>
    </p>
</footer>
`;

class GeneralFooter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = footer;
    }
}

customElements.define("general-footer", GeneralFooter);
