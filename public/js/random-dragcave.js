const dragon = [
    "fD5ym",
    "4s620",
    "hEbkg",
    "A2kK6",
    "i9Weh",
    "Bz2pr",
    "l5pyE",
    "Kv5Bl",
    "Tqex2",
    "GLine",
    "5ym4S",
    "HjVbQ"
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
