document.addEventListener("DOMContentLoaded", function () {
    // define your images here
    const images = [
        "<img class='full-width-image' src='Images/Side Decorations/sylvie_sunflower.jpg' aria-hidden='true' alt='' title='art by me'/>",
        "<img class='full-width-image' src='Images/Side Decorations/sylvie_chibi_2.png' aria-hidden='true' alt='' title='art by me'/>",
        "<img class='full-width-image' src='https://f2.toyhou.se/file/f2-toyhou-se/images/85730612_3J07ioqrEo7BBgg.gif' aria-hidden='true' alt='' title='art by me'/>",
        "<a href='https://x.com/_camberry'><img class='full-width-image' src='Images/Side Decorations/sylvie_icon.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://www1.flightrising.com/clan-profile/257170'><img class='full-width-image' src='Images/Side Decorations/sylvie_chibi_7.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://www1.flightrising.com/clan-profile/674713'><img class='full-width-image' src='Images/Side Decorations/sylvie_chibi_6.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/EFR4INZ'><img class='full-width-image' src='Images/Side Decorations/sylvie_emote.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://leeleesart.tumblr.com/'><img class='full-width-image' src='Images/Side Decorations/sylvie_chibi_5.png' aria-hidden='true' alt='' title='thank you lily for the bday gift :)'/></a>",
        "<a href='https://x.com/mawbyte'><img class='full-width-image' src='Images/Side Decorations/sylvie_plant.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://x.com/potato_bananaz'><img class='full-width-image' src='Images/Side Decorations/sylvie_chibi_1.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/DonutHead21'><img class='full-width-image' src='Images/Side Decorations/sylvie_fishing.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/Julieta__Sophia'><img class='full-width-image' src='Images/Side Decorations/sylvie_demi.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://twitter.com/magaridilatte'><img class='full-width-image' src='Images/Side Decorations/sylvie_chibi_4.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/SakiKagami_'><img class='full-width-image' src='Images/Side Decorations/sylvie_in_a_box.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/42NEDIA'><img class='full-width-image' src='Images/Side Decorations/sylvie_christmas.png' aria-hidden='true' alt='' title='gift from ghost :)'/></a>",
        "<img class='full-width-image' src='Images/Side Decorations/sylvie_chibi_3.png' aria-hidden='true' alt='' title='art by me'/>"
    ];

    // this chooses a random number from all available image indices
    const randomImage = images[Math.floor(Math.random() * images.length)];
    console.log(randomImage);
    // append to the div
    document.getElementById("img-load").innerHTML = randomImage;

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
            <img class="dendro"
                src="Images/dendro_symbol.png" aria-hidden='true' alt='' />
        </div>
        <div id="img-load"></div>
        <div class="subtitle">
            <img src="https://files.catbox.moe/5cvuev.gif" aria-hidden='true' alt='' />
            Welcome!!
            <img src="https://files.catbox.moe/5cvuev.gif" aria-hidden='true' alt='' />
        </div>
        <div>
            <p style="text-align: center">
                <b>aid</b>
                <img
                    style="padding-left: 5px; padding-right: 5px"
                    src="https://files.catbox.moe/46vbi9.gif"
                    aria-hidden="true"
                    alt="" />
                <b>25+</b>
                <img
                    style="padding-left: 5px; padding-right: 5px"
                    src="https://files.catbox.moe/46vbi9.gif"
                    aria-hidden="true"
                    alt="" />
                <b>she/her</b>
            </p>
            <hr />
            <p>
                A little personal corner, where I <mark>OC blab</mark> and store all the things
                <u>I like</u> and <u>enjoy</u>.
            </p>
            <hr />
            <div class="cool-buttons">
                <a href="https://www.tumblr.com/lavendergalactic"
                title="gifs by lavendergalactic as a commission for me. please don't use.">
                <img
                    src="https://file.garden/Zq0xOX6Iv3i3b1te/Neocities/Shiny%20Buttons/bites%20you%20shiny%20button.gif"
                    aria-hidden="true"
                    alt="">
                <img
                    src="https://file.garden/Zq0xOX6Iv3i3b1te/Neocities/Shiny%20Buttons/silly%20shiny%20button.gif"
                    aria-hidden="true"
                    alt="">
                <img
                    src="https://file.garden/Zq0xOX6Iv3i3b1te/Neocities/Shiny%20Buttons/zhongvie%20shiny%20button.gif"
                    aria-hidden="true"
                    alt="">
                </a>
            </div>
        </div>
    </section>
    <section>
        <div class="site-button">
            <div class="images-row">
                <a href="https://pixel-world.tumblr.com/post/46858429546/roses" target="_blank">
                    <img
                        aria-hidden="true"
                        alt=""
                        src="https://64.media.tumblr.com/8a14bb7db6ba9bc223ca88d807a4023d/e43dfe7d33d4ece3-fd/s75x75_c1/3f15828df46052d966c5a7887da0b391697c9c4b.gif" />
                </a>
                <a href="https://zhongvie.neocities.org/" target="_blank"
                    ><img src="https://i.imgur.com/kAwdvi1.png" alt="zhongvie button"
                /></a>
                <a href="https://pixel-world.tumblr.com/post/46858429546/roses" target="_blank">
                    <img
                        aria-hidden="true"
                        alt=""
                        src="https://64.media.tumblr.com/8a14bb7db6ba9bc223ca88d807a4023d/e43dfe7d33d4ece3-fd/s75x75_c1/3f15828df46052d966c5a7887da0b391697c9c4b.gif" />
                </a>
            </div>
            <hr style="width: 100%" />
            <textarea id="site-button" name="site-button">
&lt;a href=&quot;https://zhongvie.neocities.org/&quot; target=&quot;_blank&quot;&gt;&lt;img src=&quot;https://i.imgur.com/kAwdvi1.png&quot; alt=&quot;zhongvie button&quot;&gt;&lt;/a&gt;</textarea
            >
            <label for="site-button" style="font-size: 11px; text-align: center; line-height: 1em;"
                >Site button to copy and paste. Hotlinking is fine; image is on imgur.</label
            >
        </div>
    </section>
    <div class="images" style="margin-top: 20px;">
    <a href="https://tamanotchi.world/22103c">
    <img src="https://tamanotchi.world/i/22103" alt="It's tamaNOTchi! Click to feed!">
    </a>
    <a href="https://tamanotchi.world/22050c">
    <img src="https://tamanotchi.world/i/22050" alt="It's tamaNOTchi! Click to feed!">
    </a>
    <a href="https://tamanotchi.world/22258c">
    <img src="https://tamanotchi.world/i/22258" alt="It's tamaNOTchi! Click to feed!">
    </a>
    </div>
</div>
`;

class LeftSidebar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = sidebar;
    }
}
customElements.define("left-sidebar", LeftSidebar);
