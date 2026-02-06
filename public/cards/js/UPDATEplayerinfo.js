/*
    PENDING TRADES/ CARDS ON HOLD:
    when you send trades, you'll want to take the cards you've offered out of your trade pile and save them seperately
    the cards listed here will not show under your for trade pile, but once you complete the trade, you must go remove those cards in UPDATEtradingcards!

    ex: ["PLAYERNAME1: card01, card02", "PLAYERNAME2: card03, card04"]
*/
var pendingtrades = [
   "netbug009: sig_aid",
   "camilovesyou: raidraptors12, swimmer15, sig_aid",
   "SillyBlanks305: onion13, pose04",
   "moes: expectations18, glimmerlab04, kyun-kyun12, morikubos02, secretaries20, usurped12, ariatrading12, babalon08, beast07, birds10",
   "errorysm: croceamors15, value19, jello18, sig_aid"
];

/*
   HIGH PRIORITY DECKS:
   provide a list of decks that you are most seeking
   a placeholder card will be used if you do not have the deck's card00
   put the deck name, not card numbers (ie sakura, not sakura01)

   all ISO DECKS:
   all decks that you would like to be collecting INCzzzzzzLUDING high priority decks.
   these will be displayed by just a link to the deck page.
   put the deck name, not card numbers (ie sakura, not sakura01)

   SPECIFIC CARDS:
   if you want specific cards and not the entire deck
   put the card name, not the deck name (ie sakura01, not sakura)

   there is no limit to how many decks or cards you would like to put in each

   ex: "deckone, decktwo, deckthree" or "card01, card02, card03"
*/
var highprioritydecks =
   "hyposelenia, blacksalt, illness, vasavi, vanarana, burgers, psychology, warmonk, objection, pal, coffee, cuarta, townhall, roost, fragment, dragonscale"; // "deckone, decktwo, deckthree..."
var allisodecks =
   "goldweaver, emergency, zangetsu, squeak, songbird, selfless, animula, fleshlings, husbandos, autobots, decepticons, pal, coffee, townhall, roost, fragment, dragonscale, e-ming, ruoye, logic, objection, illness, nirvasyl, omniscient, vasavi, warmonk, psychology, burgers, vanarana, cuarta, destron, convoy, vector, warmaiden, pillowfort, sapientia, holypriest, spectrum, matoi, burnish, mysterious, hyposelenia, eternaleye, blacksalt, ashcat, easilylost, awoo, nasod"; // "deckone, decktwo, deckthree..."
var singlecards = "yaoi02"; // "card01, card02, card03..."

/*
    COUPONS:
    list the path to the coupon image, total uses it has, and how many uses it has left

    ex: ["coupons/coupons.gif, 5, 4"]
*/
var coupons = [];

/*
   PORTFOLIO DATA:
   change the portfolio paths to be your current portfolio, or else it will put the default one
   change the porfolio deck strings to match what decks are on the respective portfolio

   ex: "reddeck, orangdeck, yellowdeck, greendeck, bluedeck, purpledeck, browndeck, graydeck"
*/
var paletteportfoliopath = "portfolios/portfolio_01.png"; // change if named different
var paletteportfoliourl = "https://colors-tcg.dreamwidth.org/2732409.html?thread=219724153#cmt219724153"; // change if named different
var monochromeportfoliopath = "portfolios/mono_portfolio_01.png"; // change if named different
var monochromeportfoliourl = "https://colors-tcg.dreamwidth.org/2732409.html?thread=219840121#cmt219840121"; // change if named different

var paletteportfoliodecks = "vasavi, psychology, warmonk, jadedeer, objection, burgers, lapisdei, illness"; //
var monochromeportfoliodecks = "jadedeer, cervanivea, pal, coffee, townhall, roost, fragment, dragonscale";

/*
   SKETCHPAD DATA:
   sketchpads will automatically track based on your log.
   you can set a new sketchpad path here, or else it will put the default one
   you will need 21 images, numbered SKETCHPADNAME0.gif to SKETCHPAD20.gif
   images must be in the sketchpads folder

   ex: "sketchpad" if your images are sketchpad0.gif, sketchpad1.gif etc.
*/
var sketchpadname = "sylvie";

/*
   ADDING CRAYONS, CURRENT SKETCHPAD TRADES, COMPLETED SKETCHPADS:
   if you ever want to archive/ delete part of your log, or are starting the log format while already having a different format log, set these variables.
   the below variables will be ADDED to the num crayons/ sketchpad count/ completed sketchpads computed from log
*/
var additionalCrayons = {
   red: 0,
   orange: 0,
   yellow: 0,
   green: 0,
   blue: 0,
   purple: 0,
   brown: 0,
   gray: 0
};
var additionalCurrentSketchpadPoints = 0;
var additionalCompletedSketchpads = 0;

/*
    below should be one and done or infrequent changes
*/
var avatar = "https://v2.dreamwidth.org/18243822/4280806"; // path to avatar picture, should be 80x80px
var playername = "asuraid"; // colors tcg name
var datejoined = "january 5, 2026"; // join date
var headername = "Aid"; // in case you want it to be different from player name
var tradepost = "https://asuraid.dreamwidth.org/4183.html"; // dream width trade post link (where people can comment to trade with you)
var tradetag = "https://colors-trade.dreamwidth.org/tag/player:+asuraid"; // dreamwidth player tag (in colors-tcg, given to you when you join)
