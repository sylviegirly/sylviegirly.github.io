const dragon = [
    "7IQ8T",
    "t8Wt8",
    "2mvhj",
    "09l3w",
    "FyyeW",
    "AmhaR",
    "05EZM",
    "44Zxl",
    "FkH4a",
    "9PfmO",
    "3f2zY",
    "BkVfq"
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
