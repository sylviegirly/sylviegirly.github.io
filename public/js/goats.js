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
            image: "https://www.goatlings.com/images/items/ForgottenStone.gif",
            name: "Forgotten Stone"
        },
        {
            image: "https://www.goatlings.com/images/items/RibbonRomanticPlush.gif",
            name: "Ribbon Romantic Plush"
        },
        {
            image: "https://www.goatlings.com/images/items/GraveyardBouquet.gif",
            name: "Graveyard Bouquet"
        },
        {
            image: "https://www.goatlings.com/images/items/CrystalDirt.gif",
            name: "Crystal Dirt"
        },
        {
            image: "https://www.goatlings.com/images/items/ForgottenCup.gif",
            name: "Forgotten Cup"
        },
        {
            image: "https://www.goatlings.com/images/items/LavenderRADBracelet.gif",
            name: "Lavender RAD Bracelet"
        },
        {
            image: "https://www.goatlings.com/images/items/MidnightPotion.gif",
            name: "Midnight Potion"
        },
        {
            image: "https://www.goatlings.com/images/items/PurpleBlanket.gif",
            name: "Purple Blanket"
        },
        {
            image: "https://www.goatlings.com/images/items/SugarBones.gif",
            name: "Sugar Bones"
        }
    ]
};

const sylvie = {
    name: "Sylvie",
    image: "https://i.imgur.com/cKtK6LB.png",
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
            image: "../img/goatlings/items/Rosemary%20Sprig.gif",
            name: "Rosemary Sprig"
        }
    ]
};

document.getElementById("goatinformation").innerHTML = renderGoatProfile(sylvie);

// UPDATE THIS LATER W/NEW GOATS!!!!!!!!!!
const goats = [introjection, sylvie];

document.getElementById("goat").addEventListener("change", (e) => {
    document.getElementById("goatinformation").innerHTML = renderGoatProfile(goats[e.target.value]);
});
