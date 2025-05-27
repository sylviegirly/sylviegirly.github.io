const dragon = ["pOCEY", "z83YH", "xvSKL", "ETLFt", "7JPp3", "5jewR", "79wKK", "Nn3oP", "ZuBF9", "t33WX"];

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
