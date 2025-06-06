const dragon = ["FluT1", "DRNLB", "ZiipF", "3w3du", "p5liC", "rhjMX", "JW0HL", "i1Vxv", "CZ6Co", "elt4c"];

// this chooses a random number from all available text indices
var randomDragon = dragon[Math.floor(Math.random() * dragon.length)];

// make the URL into a proper image tag
const image =
    "<a href='https://dragcave.net/view/" +
    randomDragon +
    "'><img src='https://dragcave.net/image/" +
    randomDragon +
    ".gif' class='image' style='margin-left: auto; margin-right: auto; padding: 10px; margin-bottom: 0' alt='' aria-hidden='true'/></a>";

// append to the div
document.getElementById("dragon-cave").innerHTML = image;
