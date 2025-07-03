document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new LeftSidebar();
});

const sidebar = `
<!-- =============================================== -->
<!-- LEFT SIDEBAR CONTENT -->
<!-- =============================================== -->
<div class="intro">
    <section>
        <div class="img-floatinganim">
            <img class="dendro" src="../img/dendro_symbol.png" aria-hidden="true" alt="" />
        </div>
        <div class="subtitle">
            <img src="../img/decos/plant_bopping.gif" aria-hidden="true" alt="" />
            Welcome!!
            <img src="../img/decos/plant_bopping.gif" aria-hidden="true" alt="" />
        </div>
        <div>
            <p>
                Although I call it a blog, this is a hodgepodge of more of my own personal thoughts put into
                larger text chunks. The most recent blog post will be first and foremost, but you can check out
                previous blog posts below! I also cross-post some blogs on my
                <a href="https://spacehey.com/asuraid">SpaceHey</a>.
            </p>
            <div class="home">▶ <a href="../blogging.html">Go Home</a></div>
            <details style="max-height: 530px; overflow: auto;">
                <summary>2025</summary>
                <ul style="margin-top: 0; margin-bottom: 0; line-height: 120%; list-style-type: square; margin-left: -15px;">
                    <li>
                        <a href="060425.html">
                            Journaling and the Struggles
                        </a>
                        — June 4, 2025
                    </li>
                    <li>
                        <a href="052825.html">
                            Blurb about my OCs and Me
                        </a>
                        — May 28, 2025
                    </li>
                    <li>
                        <a href="052325.html">
                            My Own Feelings on My Identity
                        </a>
                        — May 23, 2025
                    </li>
                    <li>
                        <a href="051525.html">
                            Non-Sharing Yumes + Thoughts
                        </a>
                        — May 15, 2025
                    </li>
                    <li>
                        <a href="043025.html">
                            Nostalgia for MMO
                        </a>
                        — April 30, 2025
                    </li>
                    <li>
                        <a href="041225.html">
                            On ADHD and Myself + Tools
                        </a>
                        — April 12, 2025
                    </li>
                    <li>
                        <a href="041025.html">
                            Let's Start! I Suppose ...
                        </a>
                        — April 10, 2025
                    </li>
                </ul>
            </details>
        </div>
    </section>
</div>
`;

class LeftSidebar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = sidebar;
    }
}
customElements.define("blog-sidebar", LeftSidebar);
