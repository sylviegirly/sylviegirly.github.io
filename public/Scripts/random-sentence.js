const sentence = [
        "just wanna find the softest grass i can find and lay down in it and look at the sky for a very very very long time<br/><i>— <a href='https://www.tumblr.com/art-notart-blog/145110445718' style='font-size: 0.8em' target='_blank'>art-notart-blog</a></i>",
        "it’s just me and the 5 people on here who know my oc by name against the world<br/><i>— <a href='https://everchased.tumblr.com/post/773625369494536192' style='font-size: 0.8em' target='_blank'>everchased</a></i>",
        "huge cheeseburger and $5000 dollars could fix me<br/><i>— <a href='https://sylviegirly.tumblr.com/post/779849877674917888' style='font-size: 0.8em' target='_blank'>superbellsubways</a></i>",
        "having long distance friends is so fucked. do you wanna come over to my house and play (it will cost us 1 william dollars)<br/><i>— <a href='https://molabuddy.tumblr.com/post/775189590322593792' style='font-size: 0.8em' target='_blank'>molabuddy</a></i>",
        "gooodbyee 200 dollars helloo piece of pleastic<br/><i>— <a href='https://www.tumblr.com/emetiq/754135509162409984' style='font-size: 0.8em' target='_blank'>emetiq</a></i>",
        "think about your blorbos ON THE CLOCK<br/><i>— <a href='https://www.tumblr.com/blorbobrain/775964211427803136' style='font-size: 0.8em' target='_blank'>blorbobrain</a></i>",
        "clocking in for another day at the i dont wanna factory<br/><i>— <a href='https://cbc-bb.tumblr.com/post/744838020593827840' style='font-size: 0.8em' target='_blank'>cbc-bb</a></i>",
        "Get up girls we have another day of obsessing over fictional characters to cope with reality ahead of us <br/><i>— <a href='https://sylviegirly.tumblr.com/post/775491641278595072' style='font-size: 0.8em' target='_blank'>euphoricfez</a></i>",
        "[about my own oc, who i created] in theory its possible she would say that, but we just dont know for sure<br/><i>— <a href='https://earthmoveryuri.tumblr.com/post/775330353635262464' style='font-size: 0.8em' target='_blank'>earthmoveryuri</a></i>",
        "fucking whatever man. [my plumbob changes from green to red instantly]<br/><i>— <a href='https://rabbitscreams.tumblr.com/post/773796722000478208' style='font-size: 0.8em' target='_blank'>rabbitscreams</a></i>",
        "No no you don't understand! I <i>want</i> to watch this show/movie, read this book, listen to this podcast, etc.! But I <i>must</i> be in the right mindset and the exact head space to begin, or I just <i>can't</i>!<br/><i>— <a href='https://crazycatsiren.tumblr.com/post/702924648274444288' style='font-size: 0.8em' target='_blank'>crazycatsiren</a></i>",
        "wow! that was a fun accidental 2 hour session of video's game. now to go to the kitchen to check on my pet Pot Of Boiling Water...<br/><i>— <a href='https://st4rm41d.tumblr.com/post/759360073079373824' style='font-size: 0.8em' target='_blank'>st4rm41d</a></i>",
        "god I would be UNSTOPPABLE if I was capable of consistently initiating tasks. just you wait. you'll be waiting a while but just you wait<br/><i>— <a href='https://www.tumblr.com/bookwyrminspiration/741545331079233536' style='font-size: 0.8em' target='_blank'>bookwyrminspiration</a></i>",
        "my OCs are sooo cool you guys don't know what you're missing. if you could see the show i'm watching in my head rn you'd go so crazy i'm telling u<br/><i>— <a href='https://www.tumblr.com/dogboygirl/774879317337554944' style='font-size: 0.8em' target='_blank'>dogboygirl</a></i>",
        "I only have 5 hp please be gentle with me<br/><i>— <a href='https://sexygaywizard.tumblr.com/post/770969616628547584' style='font-size: 0.8em' target='_blank'>sexygaywizard</a></i>",
        "hyperfixation please stay with me long enough to complete the project. hyperfixation do not fade. hyperfixation finish what you started for the love of god<br/><i>— <a href='https://sourdough-seal.tumblr.com/post/770167035926872064' style='font-size: 0.8em' target='_blank'>sourdough-seal</a></i>",
        "I swear to god I am going to (remembers nothing) (stares directly at the fucking<br/><i>— <a href='https://footlongdingledong.tumblr.com/post/759469279462703104' style='font-size: 0.8em' target='_blank'>footlongdingledong</a></i>",
        "if you have ocs it is so so so important that you have Barbie Time™ (drawing them over and over wearing all sorts of different outfits)<br/><i>— <a href='https://sabertoothwalrus.tumblr.com/post/778247723113644032' style='font-size: 0.8em' target='_blank'>sabertoothwalrus</a></i>",
        "the fact that i have to be in the “right headspace” to do even the simplest tasks. absolutely humiliating <br/><i>— <a href='https://www.tumblr.com/dumbsuicidalteen/687722284317884416' style='font-size: 0.8em' target='_blank'>dumbsuicidalteen</a></i>",
        "i wish we could have subtitles in real life bc i really can’t hear anything anyone is saying to me<br/><i>— <a href='https://lylylylylylylylyly.tumblr.com/post/627989621255634944' style='font-size: 0.8em' target='_blank'>lylylylylylylylyly</a></i>",
        "Oh that two year gap on my resume was when I was the architect of my own hell<br/><i>— <a href='https://nerdjpg.com/post/749751284544995328' style='font-size: 0.8em' target='_blank'>nerdjpg</a></i>",
        "stop talking to me I just woke up seven (7) hours ago<br/><i>— <a href='https://www.tumblr.com/andreweatspussy111/771865146875379712' style='font-size: 0.8em' target='_blank'>[nsfw username sowwy]</a></i>",
        "people might think creating OC lore involves a lot of thinking & planning, but in my personal experience, OC development is more like a divine vision from a god slamming you over the head with a mallet while ur doing the fuckin dishes or folding laundry<br/><i>— <a href='https://retquits.tumblr.com/post/780394196519518208' style='font-size: 0.8em' target='_blank'>retquits</a></i>",
        "everything was better in the early 2000s esp. my extreme ignorance of the world and roller coaster tycoon 2<br/><i>— <a href='https://sylviegirly.tumblr.com/post/780472611839885312' style='font-size: 0.8em' target='_blank'>nosdrinker</a></i>"
];

// this chooses a random number from all available text indices
var randomQuote = sentence[Math.floor(Math.random() * sentence.length)];
console.log(randomQuote);
// append to the div
document.getElementById("quote-spit").innerHTML = randomQuote;
