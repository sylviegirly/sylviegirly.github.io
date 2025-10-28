const dragon = [
    "qotnj",
    "Xi5A8",
    "MWhjg",
    "xfW0W",
    "VhnUo",
    "2ZFhl",
    "3OLWA",
    "JUYNs",
    "SR1Q5",
    "cMsrK",
    "CQlAo",
    "7tb58",
    "f1phg",
    "uUIso",
    "ji8rt"
];

// this chooses a random number from all available text indices
var randomDragon = dragon[Math.floor(Math.random() * dragon.length)];

// make the URL into a proper image tag
const dragonImage =
    "<a href='https://dragcave.net/view/" +
    randomDragon +
    "'><img src='https://dragcave.net/image/" +
    randomDragon +
    ".gif' class='image' style='margin-left: auto; margin-right: auto; padding: 10px; margin-bottom: 0' alt='a pixel dragon from dragon cave' loading='lazy'/></a>";

// append to the div
document.getElementById("dragon-cave").innerHTML = dragonImage;
