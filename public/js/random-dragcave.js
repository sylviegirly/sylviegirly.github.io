const dragon = ["1F2mP", "9VQBX", "S1VsY", "XXrBA", "3XEgh", "6YnAm", "meQ7x", "lwuKM", "b2kCi", "rE148"];

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
