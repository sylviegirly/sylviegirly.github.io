var websitePrefix = '<img src="';
var colorsPrefix = '<img src="https://colors-tcg.eu/cards/';
var imageTagSuffix = '.gif" alt="';

var colorsWebsite = "https://colors-tcg.eu/cards/";
var colorsDeckWebsite = "https://colors-tcg.eu/viewcards.php?deck=";

var enteredCardNameArray;
var colorsImages;

function processNewCardsNameList() {
    document.getElementById("cardimages").innerHTML = "";
    document.getElementById("processedcardlist").innerHTML = "";

    var siteInput = document.getElementById("siteinput").value;

    if (siteInput == "") {
        siteInput = "https://colors-tcg.eu/cards/";
    } else if (siteInput.charAt(siteInput.length - 1) != "/") {
        siteInput += "/";
    }

    enteredCardNameArray = document.getElementById("newcardnamelist").value.replaceAll(" ", "").split(",");
    if (document.getElementById("alphabetizeinput").checked == true) {
        enteredCardNameArray.sort();
    }

    var lazyLoadAttribute = document.getElementById("lazyloadinginput").checked ? ' loading="lazy"' : "";

    var imageTagsText = enteredCardNameArray
        .map((card) => websitePrefix + siteInput + card + imageTagSuffix + card + '"' + lazyLoadAttribute + '/>')
        .toString();
    colorsImages = enteredCardNameArray.map((card) => colorsPrefix + card + imageTagSuffix + card + '"' + lazyLoadAttribute + '/>');

    // make elements
    var newlinesdiv = document.createElement("div");
    var onelinediv = document.createElement("div");
    var newlinesp = document.createElement("p");
    var onelinep = document.createElement("p");
    var imagetagoutputnewlines = document.createElement("textarea");
    var imagetagoutputoneline = document.createElement("textarea");

    newlinesp.innerHTML = "on new lines";
    onelinep.innerHTML = "on one line";
    imagetagoutputnewlines.setAttribute("id", "imagetagoutputnewlines");
    imagetagoutputoneline.setAttribute("id", "imagetagoutputoneline");

    imagetagoutputnewlines.value = imageTagsText.replaceAll(",", "\r\n");
    imagetagoutputoneline.value = imageTagsText.replaceAll(",", "");

    //display
    newlinesdiv.appendChild(newlinesp);
    newlinesdiv.appendChild(imagetagoutputnewlines);
    onelinediv.appendChild(onelinep);
    onelinediv.appendChild(imagetagoutputoneline);

    document.getElementById("processedcardlist").appendChild(newlinesdiv);
    document.getElementById("processedcardlist").appendChild(onelinediv);

    console.log(colorsImages);

    var cardimagesDiv = document.getElementById("cardimages");
    colorsImages.forEach((imgString) => {
        var parser = new DOMParser();
        var imgElement = parser.parseFromString(imgString, "text/html").body.firstChild;
        cardimagesDiv.appendChild(imgElement);
    });
}

function resetimgen() {
    document.getElementById("newcardnamelist").value = "";
    document.getElementById("imagetagoutputnewlines").value = "";
    document.getElementById("imagetagoutputoneline").value = "";

    document.getElementById("processedcardlist").innerHTML = "";
    document.getElementById("cardimages").innerHTML = "";

    colorsImages = null;
    enteredCardNameArray = null;
}

function sortAll() {
    if (colorsImages != null) {
        var cardimagesDiv = document.getElementById("cardimages");
        cardimagesDiv.innerHTML = "";
        colorsImages.forEach((imgString) => {
            var parser = new DOMParser();
            var imgElement = parser.parseFromString(imgString, "text/html").body.firstChild;
            cardimagesDiv.appendChild(imgElement);
        });
    }
}

function sortDeck() {
    // https://colors-tcg.eu/viewcards.php?deck=
    // check if not empty
    if (enteredCardNameArray != null) {
        var key = "";
        var value = [];
        var decks = {};

        // sort cards by decks into dictionary
        for (let index = 0; index < enteredCardNameArray.length; index++) {
            // get card and decknames
            var currentCard = enteredCardNameArray[index];
            var currentDeck = currentCard.substring(0, currentCard.length - 2);

            // check if we have moved onto a different deck and reset
            if (key != "" && currentDeck != key) {
                decks[key] = value;
                value = [];
            }

            // log current card in current deck
            key = currentDeck;
            value.push(currentCard + ".gif");

            console.log(decks);
        }
        // push last value
        decks[key] = value;

        document.getElementById("cardimages").innerHTML = "";

        // display cards by decks
        var deckNames = Object.keys(decks);
        deckNames.forEach((deckName) => {
            var section = document.createElement("div");
            var iframediv = document.createElement("div");
            var iframe = document.createElement("iframe");
            var deckImages = document.createElement("div");
            var deckLink = document.createElement("a");
            var deckLinkText = document.createTextNode(deckName);

            // create link
            deckLink.appendChild(deckLinkText);
            deckLink.setAttribute("href", colorsDeckWebsite + deckName);
            deckLink.setAttribute("target", "_blank");
            deckLink.setAttribute("class", "decknamelink");

            // create iframe
            // <div style="overflow: hidden; max-width: 600px;">
            //    <iframe scrolling="no" src="https://colors-tcg.eu/viewcards.php?deck=4thbatter"
            //    style="margin-left: -160px; height: 350px; margin-top: -270px; width: 1000px;">
            //    </iframe>
            // </div>
            //iframe.setAttribute("scrolling", "no");
            iframe.setAttribute("src", colorsDeckWebsite + deckName);
            iframe.setAttribute(
                "style",
                "margin-left: -160px; height: 1000px; margin-top: -270px; margin-bottom: -640px; width: 1000px;"
            );
            iframediv.setAttribute("style", "overflow: hidden; max-width: 600px;");
            iframediv.appendChild(iframe);

            // get deck images
            deckCards = decks[deckName];
            deckCards.forEach((deckCard) => {
                var image = document.createElement("img");
                image.setAttribute("src", colorsWebsite + deckCard);
                deckImages.appendChild(image);
            });

            //style
            deckImages.setAttribute("style", "display: flex; justify-content: center; flex-wrap: wrap; width: 600px;");
            section.setAttribute("style", "display: flex: flex-direction: column; width: 600px; margin: 20px;");

            // display section
            section.setAttribute("class", "deckitem");
            section.appendChild(deckLink);
            section.appendChild(iframediv);
            section.appendChild(deckImages);

            document.getElementById("cardimages").appendChild(section);
        });
    }
}

function removeCards() {
    document.getElementById("resultsoutput").innerHTML = "";
    document.getElementById("statsoutput").innerHTML = "";

    var cardpile = document.getElementById("cardpile").value.replaceAll(" ", "").split(",");
    var removecards = document.getElementById("removethesecards").value.replaceAll(" ", "").split(",");
    var totalpilecards = 0;
    var totalremovecards = 0;
    var cardsremoved = [];
    var totalcardsbefore = cardpile.length;
    var totalcardswanttoremove = removecards.length;

    cardpile = cardpile.filter(function (card) {
        if (removecards.includes(card)) {
            cardsremoved.push(card);
            removecards.splice(removecards.indexOf(card), 1);
            return false;
        }
        return true;
    });

    // make elements
    var newlinesdiv = document.createElement("div");
    var onelinediv = document.createElement("div");
    var statsdiv = document.createElement("div");
    var newlinesp = document.createElement("p");
    var onelinep = document.createElement("p");
    var statsp = document.createElement("p");
    var statstext = document.createElement("textarea");
    var imagetagoutputnewlines = document.createElement("textarea");
    var imagetagoutputoneline = document.createElement("textarea");

    newlinesp.innerHTML = "trade pile with cards removed";
    onelinep.innerHTML = "could not find in trade pile";
    statsp.innerHTML = "removal stats";
    imagetagoutputnewlines.setAttribute("id", "imagetagoutputnewlines");
    imagetagoutputoneline.setAttribute("id", "imagetagoutputoneline");

    statstext.setAttribute("style", "white-space: pre-wrap; height: 130px; width: 300px;");
    statstext.value =
        "total cards in pile before: " +
        totalcardsbefore +
        "\ntotal cards in pile after: " +
        cardpile.length +
        "\nnumber of cards to remove: " +
        totalcardswanttoremove +
        "\nnumber of cards actually removed: " +
        cardsremoved.length +
        "\nnumber of cards not found in pile: " +
        removecards.length;

    imagetagoutputnewlines.value = cardpile.join(", ");
    imagetagoutputoneline.value = removecards.join(", ");

    //display
    newlinesdiv.appendChild(newlinesp);
    newlinesdiv.appendChild(imagetagoutputnewlines);
    onelinediv.appendChild(onelinep);
    onelinediv.appendChild(imagetagoutputoneline);

    statsdiv.appendChild(statsp);
    statsdiv.appendChild(statstext);

    document.getElementById("resultsoutput").appendChild(newlinesdiv);
    document.getElementById("resultsoutput").appendChild(onelinediv);

    document.getElementById("statsoutput").appendChild(statsdiv);
}

function reset() {
    document.getElementById("resultsoutput").innerHTML = "";
    document.getElementById("statsoutput").innerHTML = "";
    document.getElementById("cardpile").value = "";
    document.getElementById("removethesecards").value = "";
}
