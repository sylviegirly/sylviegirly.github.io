const quotes = [
    {
        quote: "I would like to Enter your bloodstream and Eat away at you slowly from the inside out If thats okay Or if it isnt",
        author: "spoiledwhorevideoplayset",
        url: "https://sylviegirly.tumblr.com/post/791546613490483200"
    },
    {
        quote: "suicide note that says 'don't let them think the haters won I just had other shit going on",
        author: "ntrider",
        url: "https://ntrider.tumblr.com/post/783323147251449856"
    },
    {
        quote: "yup, pretty funny. (reaches down and picks up a random inconspicuous rock off the ground and turns the base of it to face you and you see that etched into the bottom is the joke you just made with an inscribed date from 5 years ago and my signature)",
        author: "ycoil",
        url: "https://sylviegirly.tumblr.com/post/791901507839836160"
    }
];

// alternative
var randomIndex = Math.floor(Math.random() * quotes.length);
const finalQuote =
    "<p>" +
    quotes[randomIndex].quote +
    "<br/><span class='subtitle'>~ <a href='" +
    quotes[randomIndex].url +
    "'>" +
    quotes[randomIndex].author +
    "</a></span></p>";
document.getElementById("quote-spit").innerHTML = finalQuote;

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    const finalQuote =
        "<p>" +
        quotes[randomIndex].quote +
        "<br/><span class='subtitle'>~ <a href='" +
        quotes[randomIndex].url +
        "'>" +
        quotes[randomIndex].author +
        "</a></span></p>";
    document.getElementById("quote-spit").innerHTML = finalQuote;
}
