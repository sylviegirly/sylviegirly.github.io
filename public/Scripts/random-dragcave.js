const dragon = [
    "5X9OE",
    "Z8Mkt",
    "8lh1L",
    "B0OZb",
    "HHX4z",
    "ay3g0"
];

// this chooses a random number from all available text indices
var randomDragon = dragon[Math.floor(Math.random() * dragon.length)];
console.log(randomDragon);
// make the URL into a proper image tag
const image =
    "<a href='https://dragcave.net/view/" +
    randomDragon +
    "'><img src='https://dragcave.net/image/" +
    randomDragon +
    ".gif' class='image' style='margin-left: auto; margin-right: auto; padding: 10px; margin-bottom: 0' alt='' aria-hidden='true'/></a>";
console.log(image);
// append to the div
document.getElementById("dragon-cave").innerHTML = image;
