document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new NavHeader();
    new LeftSidebar();
    new GeneralFooter();

    // Add any custom JavaScript code here...
    var bodyElem = document.querySelector("body");
    var fontForm = document.getElementById("fontFamily");
    let prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Figure out font using local storage
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

    // Check for reduced motion preference and freeze GIFs if true
    if (prefersReducedMotion) {
        freezegifs();
        updateButtonState(); // Update the button text immediately when reduced motion is detected
    } else {
        // If reduced motion is not active, load user preference from local storage
        loadUserPreference();
    }

    /* SNOWFLAKES, DISABLE OUTSIDE OF DECEMBER */
    /*const snowContainer = document.querySelector(".snow-container");

    const particlesPerThousandPixels = 0.1;
    const fallSpeed = 0.35;
    const pauseWhenNotActive = true;
    const maxSnowflakes = 100;
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;

    function resetSnowflake(snowflake) {
        const size = Math.random() * 5 + 1;
        const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
        const viewportHeight = window.innerHeight;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
        snowflake.style.top = `-${size}px`;

        const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationTimingFunction = "linear";
        snowflake.style.animationName = Math.random() < 0.5 ? "fall" : "diagonal-fall";

        setTimeout(() => {
            if (parseInt(snowflake.style.top, 10) < viewportHeight) {
                resetSnowflake(snowflake);
            } else {
                snowflake.remove(); // Remove when it goes off the bottom edge
            }
        }, animationDuration * 1000);
    }

    function createSnowflake() {
        if (snowflakes.length < maxSnowflakes) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflakes.push(snowflake);
            snowContainer.appendChild(snowflake);
            resetSnowflake(snowflake);
        }
    }

    function generateSnowflakes() {
        const numberOfParticles =
            Math.ceil((window.innerWidth * window.innerHeight) / 1000) * particlesPerThousandPixels;
        const interval = 5000 / numberOfParticles;

        clearInterval(snowflakeInterval);
        snowflakeInterval = setInterval(() => {
            if (isTabActive && snowflakes.length < maxSnowflakes) {
                requestAnimationFrame(createSnowflake);
            }
        }, interval);
    }

    function handleVisibilityChange() {
        if (!pauseWhenNotActive) return;

        isTabActive = !document.hidden;
        if (isTabActive) {
            generateSnowflakes();
        } else {
            clearInterval(snowflakeInterval);
        }
    }

    generateSnowflakes();

    window.addEventListener("resize", () => {
        clearInterval(snowflakeInterval);
        setTimeout(generateSnowflakes, 1000);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);*/
});

/* FREEZE GIFS */
// Load user preference from localStorage (on page load or after toggle)
function loadUserPreference() {
    const animationsEnabled = localStorage.getItem("animationsEnabled") === "true"; // Get stored state
    if (animationsEnabled) {
        // Enable animations if true
        resumegifs();
    } else {
        // Freeze GIFs if false
        freezegifs();
        updateButtonState(); // Update button text to reflect that animations are disabled
    }
}

function freezegifs() {
    var x = document.querySelectorAll(".freeze img, img.freeze");
    const h1 = document.querySelectorAll("h1");
    const titles = document.querySelectorAll(".title");
    //var titles = document.querySelectorAll("section.title");
    for (var i = 0; i < x.length; i++) {
        x[i].src = x[i].src.slice(0, -3) + "png";
    }
    // IF YOU USE QUERY SELECTOR ALL, you need to loop through everything to swap the set propery, querySelector only
    // gives the first, query selector all gives a list, so you need to loop through the dang list!!!!!!
    for (var o = 0; o < h1.length; o++) {
        h1[o].style.setProperty("--h1-pixel-deco", "url(/img/decos/Leaf.png)");
    }
    for (var p = 0; p < titles.length; p++) {
        titles[p].style.setProperty("--h4-pixel-deco", "url(/img/decos/plant_bopping.png)");
    }
}

function resumegifs() {
    var x = document.querySelectorAll(".freeze img, img.freeze");
    const h1 = document.querySelectorAll("h1");
    const titles = document.querySelectorAll(".title");
    for (var i = 0; i < x.length; i++) {
        x[i].src = x[i].src.slice(0, -3) + "gif";
    }
    for (var o = 0; o < h1.length; o++) {
        h1[o].style.setProperty("--h1-pixel-deco", "url(/img/decos/Leaf.gif)");
    }
    for (var p = 0; p < titles.length; p++) {
        titles[p].style.setProperty("--h4-pixel-deco", "url(/img/decos/plant_bopping.gif)");
    }
}

function toggle() {
    const animationsEnabled = localStorage.getItem("animationsEnabled") === "true";
    var x = document.querySelectorAll(".freeze img, img.freeze");
    const h1 = document.querySelectorAll("h1");
    const titles = document.querySelectorAll(".title");
    if (animationsEnabled) {
        for (var i = 0; i < x.length; i++) {
            x[i].src = x[i].src.slice(0, -3) + "png";
        }
        for (var o = 0; o < h1.length; o++) {
            h1[o].style.setProperty("--h1-pixel-deco", "url(/img/decos/Leaf.png)");
        }
        for (var p = 0; p < titles.length; p++) {
            titles[p].style.setProperty("--h4-pixel-deco", "url(/img/decos/plant_bopping.png)");
        }
        localStorage.setItem("animationsEnabled", "false");
    } else {
        for (var m = 0; m < x.length; m++) {
            x[m].src = x[m].src.slice(0, -3) + "gif";
        }
        for (var n = 0; n < h1.length; n++) {
            h1[n].style.setProperty("--h1-pixel-deco", "url(/img/decos/Leaf.gif)");
        }
        for (var b = 0; b < titles.length; b++) {
            titles[b].style.setProperty("--h4-pixel-deco", "url(/img/decos/plant_bopping.gif)");
        }
        localStorage.setItem("animationsEnabled", "true");
    }
    updateButtonState();
}

// Update the button text based on the freeze state
function updateButtonState() {
    const btn = document.getElementById("toggle-btn");
    const animationsEnabled = localStorage.getItem("animationsEnabled") === "true"; // Get the stored preference
    if (animationsEnabled) {
        btn.textContent = "Disable GIFs"; // If animations are enabled, show "Disable animations"
    } else {
        btn.textContent = "Enable GIFs"; // If animations are disabled, show "Enable animations"
    }
}

/* TAB TITLE INTEGRATION */
const tabTitle = document.title;
if (tabTitle !== "aid's little corner") {
    document.title = tabTitle + " • aid's little corner";
}

/* BEGIN HEADER */
const content = `
<!-- HEADER -->
<div class="christmas"></div>
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
                <li id="item-5-4-0"><a id="link-5-4-0" href="/oc/index.html">Other OCs</a></li>
                <li id="item-5-5-0" class="dropdown">
                    <a id="link-5-5-0" href="#">Shrines</a>
                    <ul id="menu-5-5">
                        <li id="item-5-5-1"><a id="link-5-5-1" href="/shrines/zhongli.html">Zhongli</a></li>
                        <li id="item-5-5-2">
                            <a id="link-5-5-2" href="/shrines/zhongvie.html">Zhongvie (🌿🔶)</a>
                        </li>
                        <li id="item-5-5-3">
                            <a id="link-5-5-3" href="/shrines/ukitake.html">Jushiro Ukitake</a>
                        </li>
                        <li id="item-5-5-3">
                            <a id="link-5-5-4" href="/shrines/goatlings.html">Goatlings</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="item-6-0-0" class="dropdown">
            <a id="link-6-0-0" href="#">Fun Things</a>
            <ul id="menu-6">
                <li id="item-6-1-0"><a id="link-6-1-0" href="/articles/index.html">Articles</a></li>
                <li id="item-6-2-0"><a id="link-6-2-0" href="/bookmarks.html">Bookmarks</a></li>
                <li id="item-6-3-0"><a id="link-6-3-0" href="/media-log.html">Media Log</a></li>
                <li id="item-6-4-0"><a id="link-6-4-0" href="/recipes/index.html">Recipes</a></li>
                <li id="item-6-5-0"><a id="link-6-5-0" href="/templates/index.html">Templates</a></li>
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
        this.innerHTML = content;
    }
}
customElements.define("nav-header", NavHeader);

/* BEGIN LEFT SIDEBAR */
class LeftSidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
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
    }
}

customElements.define("left-sidebar", LeftSidebar);

// DO IMAGE REROLL THINGS
const images = [
    {
        imagesrc: "/img/sidebar/Ceriae_479261_diona.gif",
        alt: "A chibi pixel of Diona, an original character",
        url: "https://www1.flightrising.com/clan-profile/479621",
        freezeframe: true
    },
    {
        imagesrc: "/img/sidebar/Ceriae_479261.gif",
        alt: "A chibi pixel of Sylvie, an original character",
        url: "https://www1.flightrising.com/clan-profile/479621",
        freezeframe: true
    },
    {
        imagesrc: "/img/sidebar/Ceriae_479261_ZL.gif",
        alt: "A chibi pixel of Zhongli, from Genshin Impact",
        url: "https://www1.flightrising.com/clan-profile/479621",
        freezeframe: true
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_10.png",
        alt: "A chibi Sylvie inside of a flip phone, with flower charms hanging off, and various stickers decorating it. Made by leeleesart.",
        url: "https://leeleesart.tumblr.com/",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_hot.jpg",
        alt: "Sylvie looking towards the viewer, drawn in a sexy style.",
        url: "https://vgen.co/KatheUvu",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/zhongvie_2.jpg",
        alt: "Sylvie holding Zhongli's jaw and winking to the viewer, while Zhongli is covered in kiss marks from them and is blushing.",
        url: "https://vgen.co/KatheUvu",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_pokemon.png",
        alt: "A chibi Sylvie riding a hybrid Wyrdeer pokemon, and holding out a friendship ball to a deerling. Made by tsurudraws.",
        url: "https://vgen.co/tsurudraws",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_borb.png",
        alt: "A chibi Sylvie with sparkles around them. Made by riechily.",
        url: "https://vgen.co/riechily",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_borb.png",
        alt: "Sylvie as one of the paper origami birds from Honkai Star Rail. Made by PhoenixBlessed.",
        url: "https://vgen.co/PhoenixBlessed",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_8.png",
        alt: "A chibi Sylvie with their hands on their hips. Made by Tirtouga678.",
        url: "https://www1.flightrising.com/clan-profile/265695",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_3.png",
        alt: "",
        url: "",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_christmas.jpg",
        alt: "Sylvie is standing with a red haired character who is tucking a toy into her jacket. Sylvie is wearing a red dress, and clear Christmas themes are present like santa hats. Made by 42NEDIA.",
        url: "https://vgen.co/42NEDIA",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_demi.jpg",
        alt: "Sylvie making a heart shape with their hands. Behind them are the demisexual and agender flags. Made by Julieta__Sophia.",
        url: "https://vgen.co/Julieta__Sophia",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_fishing.jpg",
        alt: "A chibi Sylvie fishing and looking frustrated at the fish. Made by DonutHead21.",
        url: "https://vgen.co/DonutHead21",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_plant.png",
        alt: "A chibi Sylvie holding a potted plant with a happy expression. Made by mawbyte.",
        url: "https://x.com/mawbyte",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_5.jpg",
        alt: "A chibi Sylvie sitting with an Aranara version of Zhongli in their lap. Made by leeleesart.",
        url: "https://leeleesart.tumblr.com/",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_deer_2.png",
        alt: "Sylvie's deer form. Made by husbandry.",
        url: "https://vgen.co/EFR4INZ",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_emote.png",
        alt: "A chibi of Sylvie holding out a yellow flower to the viewer. Made by EFR4INZ.",
        url: "https://vgen.co/EFR4INZ",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_6.png",
        alt: "A chibi of Sylvie's half feral deer-cat form. Made by crabstronaut.",
        url: "https://www1.flightrising.com/clan-profile/674713",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_7.png",
        alt: "A chibi of Sylvie's half feral deer-cat form. Made by wanderlustfaun.",
        url: "https://www1.flightrising.com/clan-profile/257170",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/tinyvie.png",
        alt: "A chibi of Zhongli carrying Sylvie, who looks embarrassed. Made by scarameownya.",
        url: "https://www.tumblr.com/scarameownya/",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_icon.png",
        alt: "A chibi icon of Sylvie's face. Made by camberry.",
        url: "https://x.com/_camberry",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_2.png",
        alt: "",
        url: "",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_sunflower.jpg",
        alt: "",
        url: "",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_dance.gif",
        alt: "",
        url: "",
        freezeframe: true
    },
    {
        imagesrc: "/img/sidebar/zhongvieStands.png",
        alt: "Clay figurines of Zhongli and Sylvie. Made by The Littlest Gifts.",
        url: "https://vgen.co/tlg",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_in_a_box.png",
        alt: "A chibi of Sylvie inside a box, looking like an anime figurine box. Made by Opossun.",
        url: "https://vgen.co/SakiKagami_",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_deer_1.png",
        alt: "Sylvie's deer form. Made by Opossun.",
        url: "https://toyhou.se/Opossun",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/zhongvie.png",
        alt: "Sylvie kissing Zhongli's cheek as they're pulling on his tie, and he is grinning. Made by thepeelucof87.",
        url: "https://x.com/thepeelucof87",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/yippe.gif",
        alt: "A small dancing yippee creature of Sylvie. Made by cakepawzz.",
        url: "https://vgen.co/cakepawzz",
        freezeframe: true
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_1.jpg",
        alt: "A small chibi of Sylvie sitting and looking at a flower in their hand. Made by potato_bananaz.",
        url: "https://x.com/potato_bananaz",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_4.jpg",
        alt: "A small chibi of Sylvie waving at the viewer. Made by magaridilatte.",
        url: "https://twitter.com/magaridilatte",
        freezeframe: false
    }
];

var randomIndex = Math.floor(Math.random() * images.length);

// Get the selected image object
const selectedImage = images[randomIndex];

// Create the final image string
let finalImage = "<img src='" + selectedImage.imagesrc + "' alt='" + selectedImage.alt + "' loading='lazy'";

// Add 'freezeframe' class if the image has freezeframe set to true
if (selectedImage.freezeframe) {
    finalImage += " class='freeze'";
}

// Close the <img> tag properly regardless if it has the freeze or not
finalImage += " />";

// If there's an actual URL and not just "", wrap the finalImage in an <a> tag
if (selectedImage.url && selectedImage.url.trim() !== "") {
    finalImage = "<a href='" + selectedImage.url + "' class='block'>" + finalImage + "</a>";
}

// Insert the final image (with or without a link) into the DOM
document.getElementById("sidedeco").innerHTML = finalImage;

// console.log(finalImage);

/* BEGIN FOOTER */
const footer = `
<div class="snow-container"></div>
<footer>
    <p>
        2025 &copy; lovingly coded by <a href="https://justinjackson.ca/webmaster/">aid</a> &bull; <a href="/changelog.html">changelog</a> &bull; <a href="/credits.html">credits</a> &bull; <a href="/feed.xml">rss</a> &bull; <a href="https://asuraid.atabook.org/">guestbook</a> &bull; <a href="https://revospring.net/@asuraid">askbox</a> &bull; <a href="mailto:sylviegirly@pm.me">contact me</a>
    </p>
</footer>
`;

class GeneralFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = footer;
    }
}

customElements.define("general-footer", GeneralFooter);
