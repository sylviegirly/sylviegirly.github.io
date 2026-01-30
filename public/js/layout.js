document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.

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
    /* IF YOU USE QUERY SELECTOR ALL, you need to loop through everything to swap the set propery, querySelector only
     * gives the first, query selector ALL gives a list, so you need to loop through the dang list!!!!!!
     * this is stupid i wish i saved the stackoverflow thread abt it. tl;dr you can target properties directly
     * to change them if you have them as variable roots in your CSS, and change them directly there.
     */
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

// DO IMAGE REROLL THINGS
const images = [
    {
        imagesrc: "/img/sidebar/sylvie_chibi_12.png",
        alt: "Chibi Sylvie pushing a door wide open with a grin",
        url: "",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/splash.png",
        alt: "Sylvie standing in a dynamic pose with their weapon, and their half-feral form behind them as a bust, framing them",
        url: "",
        freezeframe: false
    },
    {
        imagesrc: "/img/sidebar/sylvie_chibi_11.png",
        alt: "A chibi of Sylvie in a green cow onesie",
        url: "https://vgen.co/lavendergalactic",
        freezeframe: false
    },
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
var finalImage = "<img src='" + selectedImage.imagesrc + "' alt='" + selectedImage.alt + "'";

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
