const quotes = [
    {
        quote: "i love you green. i love you forests. i love you smell of damp earth. i love you feeling before the storm breaks. i love you moss. i love you rivers. i love you streams. i love you thunderstorms. i love you sunlight shining through leaves.",
        author: "winedark-maverick",
        url: "https://winedark-maverick.tumblr.com/post/688182803825917952"
    },
    {
        quote: "*smirking* you couldn't waterboard that out of me, but even if torture was an effective method of information extraction and not a futile display of state-sanctioned sadism, the high percentage of false confessions it produces would mean that even if you could waterboard it out of me, could you even trust the veracity of my statement?",
        author: "abyssaldyke",
        url: "https://abyssaldyke.tumblr.com/post/789995119516467200"
    },
    {
        quote: "died and came back wrong and no one could tell the difference",
        author: "digitalbeachrave",
        url: "https://www.tumblr.com/digitalbeachrave/748914822907887616"
    },
    {
        quote: "tip: everything you pretend to becomes a part of what you are and even the facade you wear for the sake of deception reveals a crucial truth.",
        author: "dateamonster",
        url: "https://dateamonster.tumblr.com/post/713087425678917632"
    },
    {
        quote: "ok whatever idc *bites you so hard and dont let go*",
        author: "sailorbrazil",
        url: "https://www.tumblr.com/sailorbrazil/762102592090357760"
    },
    {
        quote: "I was bleeding out in the snow and it was all cool and stuff until like a bunch of teenager showed up and then It got really cringe so I put all the blood back and went to go bleed out somewhere else but all the good bleed out places were taken so I decided just to die like a natural peaceful death like look overlooking the Cliffside but lo and behold somebody’s already fucking dying there against a tree and it looks way sicker than what I had planned I guess I’ll just fucking live",
        author: "bewbin",
        url: "https://bewbin.tumblr.com/post/769324896296878080"
    },
    {
        quote: "i think if i focused really really hard i could grow a leaf",
        author: "m3djed",
        url: "https://m3djed.tumblr.com/post/737378098356617216"
    },
    {
        quote: "hey you forgot to profess your love for me btw. don't be embarrassed there's still time.",
        author: "deadnow",
        url: "https://sylviegirly.tumblr.com/post/774767126791815168"
    },
    {
        quote: "the curse is lifted! you are no a beast no more! congratulations! but you'll never forget the way they looked at you, will you.",
        author: "strawberry-crocodile",
        url: "https://strawberry-crocodile.tumblr.com/post/770438982932824064"
    },
    {
        quote: "disembowling a clowngirl and I'm trying to yank out her intestines but they just keep coming. its been 30 minutes and there's no end in sight. she's laughing at me",
        author: "maidthings",
        url: "https://www.tumblr.com/maidthings/772262943555534848"
    },
    {
        quote: "sigh im lonely anyone wanna come kiss me silly",
        author: "pansyfemme",
        url: "https://www.tumblr.com/pansyfemme/771248011199332352"
    },
    {
        quote: "girl you are killing it! girl i think it's dead! girl you can stop STABBING",
        author: "mythology-void",
        url: "https://www.tumblr.com/mythology-void/765908991748571136"
    },
    {
        quote: "of course your heart is safe here, my palms have been cleaned from the flow of spring water and my arms have been stretches by the trunks of trees so wide and my soul has been sprinkled with the detritus of the ground - come be at peace in my body of moss and spirit of green ",
        author: "oflambandmoss",
        url: "https://www.tumblr.com/oflambandmoss/773945092351361024"
    },
    {
        quote: "my autopsy results came back negative There was nothing in there",
        author: "taxidermychrist",
        url: "https://sylviegirly.tumblr.com/post/777056215517872128"
    },
    {
        quote: "dude i love how chill and selfless you are 😄 by any chance is your wildest fantasy to be Useful?",
        author: "goldensunset",
        url: "https://goldensunset.tumblr.com/post/789615376421044225"
    },
    {
        quote: "ugh. forget everything i’ve ever said. unless you thought it was smart or funny in which case remember it forever",
        author: "justsomeguycore",
        url: "https://justsomeguycore.tumblr.com/post/779498010694533120"
    },
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
