function renderGoatProfile(goat) {
    return `
        <h2 class="page-title">${goat.name}'s Profile</h2>

        <div class="infobox">
            <div class="left-side">
                <img src="${goat.image}" loading="lazy" alt="" />
                <p><b>${goat.name}</b></p>
            </div>

            <div class="right-side">
                <p>
                    <b>${goat.name}'s Profile</b><br />
                    <b>Guardian:</b> <a href="#" class="user-icon user-color">Aid</a><br /><br />
                    <b>Gender:</b> ${goat.gender}<br />
                    <b>Appearance Doll:</b> ${goat.appearance}<br />
                    <b>Born:</b> ${goat.born}<br />
                    <b>Feeling:</b> ${goat.feeling}
                </p>

                <p>
                    <b>ID:</b> #${goat.id}<br/>
                    <b>Level:</b> ${goat.level}<br />
                    <b>EXP:</b> ${goat.exp.current}/${goat.exp.max}<br />
                    <b>HP:</b> ${goat.hp.current}/${goat.hp.max}<br />
                    <b>Strength:</b> ${goat.stats.str}<br />
                    <b>Defense:</b> ${goat.stats.def}<br />
                    <b>Intelligence:</b> ${goat.stats.int}<br />
                    <b>Speed:</b> ${goat.stats.spd}<br /><br />
                    <b>Previous Guardians</b>: <a href="#">Click here</a>
                </p>
            </div>
        </div>

        <div class="profilecode">
            <p><b>About ${goat.name}:</b></p>
            <div class="about-section">
                ${goat.about}
            </div>

            <p style='margin-top: 5px;'><b>${goat.name}'s Treasure:</b></p>
            <div class="flexbox-lazy goatlingstreasure">
                ${goat.treasure
                    .map(
                        (treasure) => `
                    <div>
                        <img src="${treasure.image}" alt="${treasure.name}" loading="lazy" />
                        <p>${treasure.name}</p>
                    </div>
                `
                    )
                    .join("")}
            </div>
        </div>
    `;
}
// disgusting code combo but it works!!!!!! variables u r my beloved and .map is fucking wizardry
// that i dont wanna understand further aside from substack pages!!!!!!!
// https://stackoverflow.com/questions/58859642/how-to-iterate-through-array-of-objects-in-template-literals-and-use-function-fo
// https://coreui.io/blog/javascript-template-literals/

const introjection = {
    name: "Introjection",
    image: "https://i.imgur.com/wLX61o0.png",
    id: 319946,
    gender: "Male",
    appearance: "Ribbon Romantic AD",
    born: "2nd Jan 2023 08:35",
    feeling: "Healthy, Hungry, and Sad",

    level: 1,
    exp: { current: 0, max: 50 },
    hp: { current: 10, max: 10 },

    stats: {
        str: 1,
        def: 1,
        int: 1,
        spd: 1
    },

    about: `<div class='center-item'>
    <img src='https://i.imgur.com/wLX61o0.png'>
    <p>welcome home stinky. not ever selling.</p>
    </div>`,

    treasure: [
        {
            image: "/img/goatlings/items/ForgottenStone.gif",
            name: "Forgotten Stone"
        },
        {
            image: "/img/goatlings/items/RibbonRomanticPlush.gif",
            name: "Ribbon Romantic Plush"
        },
        {
            image: "/img/goatlings/items/GraveyardBouquet.gif",
            name: "Graveyard Bouquet"
        },
        {
            image: "/img/goatlings/items/CrystalDirt.gif",
            name: "Crystal Dirt"
        },
        {
            image: "/img/goatlings/items/ForgottenCup.gif",
            name: "Forgotten Cup"
        },
        {
            image: "/img/goatlings/items/LavenderRADBracelet.gif",
            name: "Lavender RAD Bracelet"
        },
        {
            image: "/img/goatlings/items/MidnightPotion.gif",
            name: "Midnight Potion"
        },
        {
            image: "/img/goatlings/items/PurpleBlanket.gif",
            name: "Purple Blanket"
        },
        {
            image: "/img/goatlings/items/SugarBones.gif",
            name: "Sugar Bones"
        }
    ]
};

const sylvie = {
    name: "Sylvie",
    image: "https://i.imgur.com/cKtK6LB.png",
    id: 139031,
    gender: "Other",
    appearance: "Gaia AD",
    born: "3rd Jun 2017 03:28",
    feeling: "Healthy, Full, and Happy",

    level: 28,
    exp: { current: 185191, max: 454721 },
    hp: { current: 80, max: 146 },

    stats: {
        str: 28,
        def: 28,
        int: 12,
        spd: 2
    },

    about: "Write whatever the fuck you want here tho, but I'm gonna test out <u>HTML</u> things inside.",

    treasure: [
        {
            image: "../img/goatlings/items/Lavender%20Sprig.gif",
            name: "Lavender Sprig"
        },
        {
            image: "../img/goatlings/items/JarOfGreenHearts.gif",
            name: "Jar Of Green Hearts"
        },
        {
            image: "../img/goatlings/items/LeafCup.gif",
            name: "Leaf Cup"
        },
        {
            image: "../img/goatlings/items/FrogTea.gif",
            name: "Frog Tea"
        },
        {
            image: "../img/goatlings/items/GreenGinkgoLeaves.gif",
            name: "Green Ginkgo Leaves"
        },
        {
            image: "../img/goatlings/items/PothosJar.gif",
            name: "Pothos Jar"
        },
        {
            image: "../img/goatlings/items/PlantSpecimen.gif",
            name: "Plant Specimen"
        },
        {
            image: "../img/goatlings/items/RosemarySprig.gif",
            name: "Rosemary Sprig"
        }
    ]
};

const cerni = {
    name: "Cerni",
    image: "/img/goatlings/goats/Betta.gif",
    id: 162202,
    gender: "Hidden",
    appearance: "Betta AD",
    born: "19th Mar 2018 06:25 ",
    feeling: "Healthy, Full, and Happy",

    level: 9,
    exp: { current: 1048, max: 1281 },
    hp: { current: 50, max: 50 },

    stats: {
        str: 9,
        def: 9,
        int: 1,
        spd: 1
    },

    about: "",

    treasure: [
        {
            image: "/img/goatlings/items/Flower%20Fish.gif",
            name: "Flower Fish"
        },
        {
            image: "/img/goatlings/items/Cow%20Plush.gif",
            name: "Cow Plush"
        },
        {
            image: "/img/goatlings/items/FloralPerfume.gif",
            name: "Floral Perfume"
        },
        {
            image: "/img/goatlings/items/Florals.gif",
            name: "Florals"
        },
        {
            image: "/img/goatlings/items/BottleOfLove.gif",
            name: "Bottle of Love"
        },
        {
            image: "/img/goatlings/items/PopUpCard.gif",
            name: "Pop Up Card"
        },
        {
            image: "/img/goatlings/items/PondKoi.gif",
            name: "Pond Koi"
        },
        {
            image: "../img/goatlings/items/RosyMothkitBP.gif",
            name: "Rosy Mothkit BP"
        },
        {
            image: "../img/goatlings/items/CutiePie.gif",
            name: "Cutie Pie"
        },
        {
            image: "../img/goatlings/items/Angelfish.gif",
            name: "Angelfish"
        },
        {
            image: "../img/goatlings/items/RadioactiveCowPlush.gif",
            name: "Radioactive Cow Plush"
        }
    ]
};

document.getElementById("goatinformation").innerHTML = renderGoatProfile(sylvie);

// UPDATE THIS LATER W/NEW GOATS!!!!!!!!!!
const goats = [cerni, introjection, sylvie];

document.getElementById("goat").addEventListener("change", (e) => {
    document.getElementById("goatinformation").innerHTML = renderGoatProfile(goats[e.target.value]);
});
