document.addEventListener("DOMContentLoaded", function () {
    // define your images here
    const images = [
        "<img class='full-width-image' src='img/sidebar/sylvie_sunflower.jpg' aria-hidden='true' alt='' title='art by me'/>",
        "<img class='full-width-image' src='img/sidebar/sylvie_chibi_2.png' aria-hidden='true' alt='' title='art by me'/>",
        "<img class='full-width-image' src='img/sidebar/zhongvieStands.png' aria-hidden='true' alt='' title='zhongli nendo and sylvie clay figurine by littlest gifts'/>",
        "<img class='full-width-image' src='https://f2.toyhou.se/file/f2-toyhou-se/images/85730612_3J07ioqrEo7BBgg.gif' aria-hidden='true' alt='' title='art by me'/>",
        "<a href='https://x.com/_camberry'><img class='full-width-image' src='img/sidebar/sylvie_icon.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/cakepawzz'><img class='full-width-image' src='img/sidebar/yippe.gif' aria-hidden='true' alt=''/></a>",
        "<a href='https://www.tumblr.com/scarameownya/'><img class='full-width-image' src='img/sidebar/tinyvie.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://x.com/thepeelucof87'><img class='full-width-image' src='img/decos/zhongvie.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://www1.flightrising.com/clan-profile/257170'><img class='full-width-image' src='img/sidebar/sylvie_chibi_7.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://www1.flightrising.com/clan-profile/674713'><img class='full-width-image' src='img/sidebar/sylvie_chibi_6.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/EFR4INZ'><img class='full-width-image' src='img/sidebar/sylvie_emote.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://toyhou.se/Opossun'><img class='full-width-image' src='img/sidebar/sylvie_deer_1.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://www1.flightrising.com/clan-profile/394089'><img class='full-width-image' src='img/sidebar/sylvie_deer_2.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://leeleesart.tumblr.com/'><img class='full-width-image' src='img/sidebar/sylvie_chibi_5.jpg' aria-hidden='true' alt='' title='thank you lily for the bday gift :)'/></a>",
        "<a href='https://x.com/mawbyte'><img class='full-width-image' src='img/sidebar/sylvie_plant.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://www1.flightrising.com/clan-profile/348859'><img class='full-width-image' src='img/sidebar/sylvie_deer.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://x.com/potato_bananaz'><img class='full-width-image' src='img/sidebar/sylvie_chibi_1.jpg' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/DonutHead21'><img class='full-width-image' src='img/sidebar/sylvie_fishing.jpg' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/Julieta__Sophia'><img class='full-width-image' src='img/sidebar/sylvie_demi.jpg' aria-hidden='true' alt=''/></a>",
        "<a href='https://twitter.com/magaridilatte'><img class='full-width-image' src='img/sidebar/sylvie_chibi_4.jpg' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/SakiKagami_'><img class='full-width-image' src='img/sidebar/sylvie_in_a_box.png' aria-hidden='true' alt=''/></a>",
        "<a href='https://vgen.co/42NEDIA'><img class='full-width-image' src='img/sidebar/sylvie_christmas.jpg' aria-hidden='true' alt='' title='gift from ghost :)'/></a>",
        "<img class='full-width-image' src='img/sidebar/sylvie_chibi_3.png' aria-hidden='true' alt='' title='art by me'/>"
    ];

    // this chooses a random number from all available image indices
    const randomImage = images[Math.floor(Math.random() * images.length)];
    // append to the div
    document.getElementById("img-load").innerHTML = randomImage;

    // Page has finished loading. Now, do things.
    new LeftSidebar();
});

const sidebar = `
<!-- =============================================== -->
<!-- LEFT SIDEBAR CONTENT -->
<!-- =============================================== -->
<div class="intro hide-mobile">
    <section>
        <div class="img-floatinganim">
            <img class="dendro"
                src="/img/dendro_symbol.png" aria-hidden='true' alt='' />
        </div>
        <div id="img-load"></div>
        <h4>
            Welcome!!
        </h4>
        <div>
            <p style="text-align: center">
                <b>aid</b>
                <img
                    style="padding-left: 5px; padding-right: 5px"
                    src="img/decos/flower_bullet.png"
                    aria-hidden="true"
                    alt="" />
                <b>25+</b>
                <img
                    style="padding-left: 5px; padding-right: 5px"
                    src="img/decos/flower_bullet.png"
                    aria-hidden="true"
                    alt="" />
                <b>she/her</b>
            </p>
            <hr />
            <p>Welcome to my silly lil corner, hope you enjoy your stay!!
            <hr />
            <div class="cool-buttons">
                <a href="https://www.tumblr.com/lavendergalactic"
                title="gifs by lavendergalactic as a commission for me. please don't use.">
                <img
                    src="./img/shiny/bites%20you%20shiny%20button.gif"
                    alt="shiny button that says bites you">
                <img
                    src="./img/shiny/silly%20shiny%20button.gif"
                    alt="shiny button that says silly">
                <img
                    src="./img/shiny/zhongvie%20shiny%20button.gif"
                    alt="shiny button that says zhongvie">
                </a>
            </div>
        </div>
    </section>
    <section>
        <h4>
            Site Button
        </h4>
        <div class="site-button">
            <div class="two-columns">
                <div>
                    <a href="https://zhongvie.neocities.org/" target="_blank"
                        ><img src="../img/sylvieButton.gif" alt="zhongvie button"
                    /></a>
                </div>
                <div>
                    <textarea id="site-button" name="site-button">
&lt;a href="https://zhongvie.neocities.org/"&gt;&lt;img src="https://file.garden/Zq0xOX6Iv3i3b1te/Neocities/sylvieButton.gif" alt="zhongvie button" loading="lazy"&gt;&lt;/a&gt;</textarea
                    >
                </div>
            </div>
            <label for="site-button" class="subtle" style="text-align: center; margin-top: 3px"
                >Site button; URL is on filegarden, but it's recommended to save. Alt buttons can be found
                <a href="./links.html">here</a></label
            >
        </div>
    </section>
    <div class="lazy-flex-images hide-mobile" style="margin-top: 20px;">
    <a href="https://tamanotchi.world/22103c">
    <img src="https://tamanotchi.world/i/22103" class="tilt-hover" alt="green tamanotchi pixel">
    </a>
    <a href="https://tamanotchi.world/22050c">
    <img src="https://tamanotchi.world/i/22050" class="tilt-hover" alt="yellow tamanotchi pixel">
    </a>
    <a href="https://tamanotchi.world/22258c">
    <img src="https://tamanotchi.world/i/22258" class="tilt-hover" alt="purple tamanotchi pixel">
    </a>
    <a href="https://tamanotchi.world/13609c">
    <img src="https://tamanotchi.world/i/13609" class="tilt-hover" alt="yellow star tamanotchi pixel">
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
