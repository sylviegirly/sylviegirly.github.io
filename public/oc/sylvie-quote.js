const quotes = [
    {
        quote: "sorry i was passionate & intense & insane. it will happen again",
        author: "drops-of-universe",
        url: "https://drops-of-universe.tumblr.com/post/756474012450848769"
    },
    {
        quote: "dearest followers i regret to inform you that thinking with my cunt has once again led me perilously and irretrievably deep into a vast system of underground tunnels",
        author: "sapphling",
        url: "https://www.tumblr.com/sapphling/731626398672896000"
    },
    {
        quote: "the forest is a lung. it is a brain. it is a great organism made up of moving parts. when you walk through the forest, you are not in a place. you are in a BEING, traveling through its arteries while it breathes and thinks around you. the forest feels your presence. it knows that you are there.",
        author: "jupiter-suggestion",
        url: "https://jupiter-suggestion.tumblr.com/post/671665097724329984"
    },
    {
        quote: "abnormally large trees please lend me some of your centuries worth of wisdom",
        author: "chaoticaesthetician",
        url: "https://www.tumblr.com/chaoticaesthetician/759437233677828096"
    },
    {
        quote: "i really love the phrase “with all due respect” because it doesn’t specify how much respect is due. could be none. bitch.",
        author: "viva-1a-resistance",
        url: "https://viva-1a-resistance.tumblr.com/post/668715744061767680"
    },
    {
        quote: "[DRENCHED IN BLOOD] we really should all do this again next week, yes",
        author: "greelin",
        url: "https://greelin.tumblr.com/post/776786477998882816"
    },
    {
        quote: "you have a wound that will never heal? me too! actually it's gradually widening and expanding, consuming more of me with each passing day [props my chin in my hands and smiles at you] at what point do you think i'll become the wound itself and not simply the bearer?",
        author: "valtsv",
        url: "https://valtsv.tumblr.com/post/737152166679232512"
    },
    {
        quote: "i do think id look good as fuck after receiving an obviously lethal blow. like i feel id do a great job looking down at my body to see a gaping hole in it, making eye contact with you, saying “oh” very quietly before i keel over… stuff like that",
        author: "wordfather",
        url: "https://wordfather.tumblr.com/post/746154509360906240"
    },
    {
        quote: "*covered in blood* I'm literally fine guys. im still funny. Would you like to hear a joke Im going to tell you a joke",
        author: "wordfather",
        url: "https://wordfather.tumblr.com/post/746154509360906240"
    },
    {
        quote: "(bleeding from my wound) notice anythiung differebt about me ;)",
        author: "dreadwedge",
        url: "https://dreadwedge.tumblr.com/post/780236071437025280"
    },
    {
        quote: "No your honor i would never kill out of anger. I killed that guy for sport",
        author: "electronicmail",
        url: "https://electronicmail.tumblr.com/post/782138226870747136"
    },
    {
        quote: "trees are very 🥺 because sometimes i’ll stand under the shade of a tree and look up at it and it’ll sway its branches about in the wind and i’m like oh my God i’m alive and YOU’RE alive. we are alive together and made up of the same starry stuff and standing right next to each other in this moment on this earth. do u feel it when i reach out and press my hand to your trunk? can you hear me? i think you’re so neat. and then the sunlight filters through its leaves just so and that lovely green color leaves me dazzled. it’s just very nice to be an alive thing next to a different sort of alive thing",
        author: "girlweepinginstairwell",
        url: "https://sylviegirly.tumblr.com/post/788006891532025856"
    },
    {
        quote: "how could it have gone wrong, my approach was data-driven and trauma-informed",
        author: "papayajuan2019",
        url: "https://papayajuan2019.tumblr.com/post/781462135151771648"
    },
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
    var lastValue = document.getElementById("quote-spit").innerHTML;
    do {
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
    } while (lastValue == document.getElementById("quote-spit").innerHTML);
}
