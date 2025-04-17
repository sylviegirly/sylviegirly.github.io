var loader = document.getElementById("preloader");

window.onload = fadeOut;

function fadeOut() {
    var opacity = 1;
    var intervalID = setInterval(function () {
        if (opacity > 0) {
            opacity = opacity - 0.1;
            loader.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);

    /*var linkItems = document.getElementsByClassName("sitelink");

    for (var i = 0; i < linkItems.length; i++) {
        linkItems[i].addEventListener("click", function () {
            var number = this.getAttribute("href");
            console.log(number);
            setTimeout(() => window.location.assign(number), 9000); // navigate to a new website after 3s (3000ms)
        });
    }*/
}

function fadeIn() {
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.1;
            loader.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);
}
