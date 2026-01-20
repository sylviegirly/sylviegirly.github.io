/*
    logs
    logs are used to track your sketchpads and crayon numbers, so please make sure inputs are correct!
    each log item must be on its own seperate line with one of the following formats.
    NOTES:
        - inputs in brackets can be formatted however you want, as long as it comes after the proper command and before the colon (:)
        - CRAYONS MUST BE WRITTEN OUT WITH A NUMBERED AMOUNT! ex: 1 blue crayon or 2 blue crayons NOT blue crayon, 1 crayon rainbow, etc.

    TRADING WITH A PLAYER
    traded to [playername]: yourcard01, yourcard02 for theircard04, theircard05
    ex: traded to gloomlee: anklets01, anklets03 for obnoxious01, obnoxious02

    GIFTING TO A PLAYER
    gifted to [playername]: card01, card02
    ex: gifted to gloomlee: obnoxious01, obnoxious02

    RECEIVING GIFTS FROM A PLAYER
    gifted by [playername]: card01, card02
    ex: gifted by gloomlee: anklets01, anklets03

    RECEIVING CARDS FROM GAMES/ SERVICES/ ETC.
    received from [game name/ service name]: card01, card02, 1 blue crayon
    ex: received from silly blanks 126: obnoxious01, obnoxious02, 2 blue crayona, 1 orange crayon

    USING CARDS/CRAYONS/SKETCHPADS AT GAMES/SERVICES
    lost to [game name/ service name]: card02, 1 blue crayon, 1 sketchpad etc.
    ex: lost to silly blanks 126: evil02, menace06
    ex: lost to art shop: 3 sketchpads, 1 blue crayon

    everything else doesnt matter; you can change the beginning of each line and reformat the dates if you want!
    ex: `
             ---traded to player: card01, 1 blue crayon for card03
        nov 2nd, 2022
            --received from game: card01, card02, 1 blue crayon
            --started playing
        nov 1st, 2022
        `
    ex: `
        traded to player: card01, 1 blue crayon for card03
        nov-2-2022
        received from game: card01, card02, 1 blue crayon
        started playing
        nov-1-2022
        `
    ex: `
         - traded to player: card01, 1 blue crayon for card03
        11/2/2022
         - received from game: card01, card02, 1 blue crayon
         - started playing
        11/1/2022
        `
*/
/*
  unformatted logs
  if you already have logs when beginning to use this tool, or would like to archive your logs, insert the logs in the unformattedlogs variable.
  Then set what your number of crayons, current sketchpad, and completed number of sketchpads were based on those logs in UPDATEplayerinfo at the ADDING CRAYONS, CURRENT SKETCHPAD TRADES, COMPLETED SKETCHPADS section.

  Once you've done that, begin putting your new correctly formatted logs in the logs variable.
*/
var logs = `
<time>01/19/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4451106.html?thread=220109346#cmt220109346">Most Wanted 205</a>: vanarana13, watches09, obedience20, wineglass20, jello18</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4450933.html?thread=220122997#cmt220122997">Pokeradar 460</a>: elixir01, well-being03, flamenblack03, galemaker18, suihakkei13, pay08, remind16, surnames01, novels08, fluorspar13, chartreux16, batting09, prize15, hachiko13, lyfjaberg03, loleus05, seeker12, themoles16, spiritwave03, deathscythe18, dauntless11, dive13, huntdown13, captivate12, obbligato18</li>
</ul>
<time>01/19/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/2957585.html?thread=220301329#cmt220301329">leveling to yellow</a>: cervanivea09, kyouken12, lubu07, 1 purple crayon</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4447001.html?thread=219900185#cmt219900185">Puzzle Chains 399</a>: shangrila20, criticrista12, swimmer15, totalassault19, creator08, gloucester06, logical02, lyngheidr02, hylia15, florence07, man14, magiamagenta19, citro05, convey03, no02, dashing06, tenpa-kun15, rabidhound18, hatter09, erebonia07, well07, illiterate13, vjonly07, paranormal14, neoarcadia12, xuandu19, stockmarket17, watchman10, kokushin08, temsik08, 1 yellow crayon</li>
</ul>
<time>01/18/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4456550.html?thread=220275558#cmt220275558">Little Spell Academia 398</a>: jadedeer02, lapisdei12, illness03, jadedeer03, objection02, warmonk03, lapisdei13, suzumushi01, lapisdei14, townhall01, lapisdei15, objection03, cervanivea08</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4437445.html?thread=219807941#cmt219807941">Coloring Book 371</a>: dominion09, shuffleunit14, ssnightmare04, caramelsyrup03, locoroco19</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4445063.html?thread=219806087#cmt219806087">Lady Luck Slots 244</a>: tradeplaces18, rescuepup09, katana01, eyes09, viatrix12, home05, mtooe11, contacts19, carcosa08, pah-chin14, hardhat20, bum15, 1 yellow crayon</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4448329.html?thread=219944777#cmt219944777">Colors Concentration 149</a>: birds10, thewary10, sentinels08, artisan04, phagocyte02, resistant06, jobs14, radio14, testedone03, vampirearmy07, sezan03, crownsguard01, oldersister09, powerful18, rulerstruth03, minalinsky07, strategies10, alderaan16, shuanghua17, unemotional10, music18, itsame20, cyborg00216, onihime07, 098810, dreamyard08, yellow09, lalalulu20, speak14, sweetvoice08, 1 purple crayon</li>
</ul>
<time>01/17/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4453781.html?thread=220198293#cmt220198293">Twenty Questions 078</a>: chuunibyou04, keeneye08, psypher06</li>
    <li>gifted from camilovesyou: lapisdei02, illness05, illness11, illness12, illness17</li>
</ul>
<time>01/16/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4447586.html?thread=219913570#cmt219913570">Colorseum 73-2</a>: 2 gray crayons, 1 green crayon, 1 brown crayon</li>
</ul>
<time>01/15/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4446364.html?thread=219857820#cmt219857820">Silly Blanks 301</a>: ko-gal04, 12years08, teni17, kyun-kyun12, chisha16, convey06, summermode11, savage03, organization14</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/4446364.html?thread=219857820#cmt219857820">Silly Blanks 301</a>: lawless19, speedrunner06</li>
    <li>traded to <a href="https://asuraid.dreamwidth.org/4183.html?thread=32343#cmt32343">corafish</a>: sig_aid for sig_cora</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/3969255.html?thread=220153319#cmt220153319">art shop</a>: sig_aid, sig_aid</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/3969255.html?thread=220153319#cmt220153319">art shop</a>: 2 green crayons</li>
</ul>
<time>01/13/2026</time>
<ul>
    <li>traded to <a href="https://corafish.dreamwidth.org/372.html?thread=17780#cmt17780">corafish</a>: zhenjun15 for marchosius20</li>
</ul>
<time>01/12/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4444126.html?thread=219744478#cmt219744478">Most Wanted 204</a>: pinkelf08, zhenjun15, expectations18, enraptured08, oysters18</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4443658.html?thread=219744778#cmt219744778">Pokeradar 459</a>: puresavior17, wolfbeil12, easilylost13, daemons17, coexistence10, quietingclaw15, worst05, senses02, unicorn03, electabuzz13</li>
    <li>traded to <a href="https://asuraid.dreamwidth.org/4183.html?thread=26455#cmt26455">sonetto</a>: sig_aid for sig_lanne</li>
    <li>traded to travastila: explosion05, firstlie01 for umbra13, e-ming13</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/2957585.html?thread=220096785#cmt220096785">leveling to orange</a>: lapisdei19, messenger09, hence09, 1 blue crayon</li>
</ul>
<time>01/11/2026</time>
<ul>
    <li>traded to <a href="https://asuraid.dreamwidth.org/4183.html?thread=23895#cmt23895">tempoet</a>: chaperone13, knowledge16, shielder20 for trigger06, suzumushi03, knowing19</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4448680.html?thread=219944616#cmt219944616">Crazy Colors 377</a>: amanojaku20, chaperone13, knowledge16, elemia10, plainasia04, laevatain17, kazus02, shielder20</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/4448680.html?thread=219944616#cmt219944616">Crazy Colors 377</a>: disinfect18</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4443566.html?thread=219726766#cmt219726766">Scramble! 240</a>: wildhuter01, foul08, ricky01, vaneltia02, toddler17, driving03, tactics15, incarnation11, oceanic07, mipo05, 1 yellow crayon</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4450179.html?thread=219951235#cmt219951235">Little Spell Academia 397</a>: cervanivea02, lapisdei08, cervanivea03, cervanivea04, burgers03, warmonk02, lapisdei09, cuarta01, lapisdei11, cervanivea05, cervanivea06, cervanivea07, omniscient01</li>
</ul>
<time>01/10/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4440681.html?thread=219724649#cmt219724649">Colorseum 73-1</a>: 1 brown crayon, 2 gray crayon, 1 yellow crayon</li>
</ul>
<time>01/09/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4446956.html?thread=219883756#cmt219883756">Twenty Questions 077</a>: satisfaction13, disinfect18, cabaret08</li>
    <li>gifted by <a href="https://asuraid.dreamwidth.org/4183.html?thread=16983#cmt16983">admiral</a>: lapisdei17, illness20, jadedeer17, burgers10, psychology12, 2 red crayons, 2 orange crayons, 2 yellow crayons, 2 green crayons, 2 blue crayons, 2 purple crayons, 2 brown crayons, 2 gray crayons</li>
</ul>
<time>01/07/2026</time>
<ul>
    <li>traded to <a href="https://asuraid.dreamwidth.org/4183.html?thread=13655#cmt13655">tempoet</a>: sig_aid for sig_emmy</li>
    <li>received from signature: sig_aid, sig_aid, sig_aid</li>
</ul>
<time>01/07/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4437445.html?thread=219807941#cmt219807941">Coloring Book 371</a>: northambria05, motovlogging20, motovlogging05, lumiosecity01, cervanivea17, disgrace06, venusknights20, speedrunner12, mimicslime19, speedrunner06, motovlogging08, mimicslime09, mimicslime12, disgrace18, mimicslime04, disgrace04</li>
</ul>
<time>01/06/2026</time>
<ul>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/4437445.html?thread=219807941#cmt219807941">Coloring Book 371</a>: 1 green crayon</li>
    <li>traded to <a href="https://asuraid.dreamwidth.org/4183.html?thread=9303#cmt9303">netbug009</a>: crusader19, orderly19 for cervanivea15, warmonk12</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/3969255.html?thread=219731175#cmt219731175">art shop</a>: lapisdei03, lapisdei04, lapisdei05, lapisdei06</li>
</ul>
<time>01/05/2026</time>
<ul>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/3969255.html?thread=219731175#cmt219731175">art shop</a>: 4 brown crayons</li>
    <li>gifted by <a href="https://asuraid.dreamwidth.org/4183.html?thread=7511#cmt7511">sonetto</a>: illness06, jadedeer04, vasavi07, objection17, 3 brown crayons</li>
    <li>traded to <a href="https://asuraid.dreamwidth.org/4183.html?thread=6999#cmt6999">tempoet</a>: ioka01 for warmonk06
    <li>received from <a href="https://colors-tcg.dreamwidth.org/669.html?thread=219722397#cmt219722397">finalizing application</a>: wildlife14, explosion05</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4443286.html?thread=219726998#cmt219726998">Little Spell Academia 396</a>: jadedeer01, illness02, objection01, psychology03, psychology02, vasavi13, logic01, burgers02, lapisdei20</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4432790.html?thread=219723670#cmt219723670">December Deck Release</a>: qucusaurus01, dagobah01, truepassion11, laprimera01, triplecone01, rust01, scepter01, abundance12, cortondo02, firstlie01, vanarana15, vasavi12, nirvasyl01, burgers01, illness01, psychology01, lapisdei01, cervanivea01, warmonk01</li>
    <li>gifted by <a href="https://asuraid.dreamwidth.org/4183.html?thread=6487#cmt6487">corafish</a>: jadedeer06, objection15, 1 red crayon, 1 orange crayon, 1 yellow crayon, 1 green crayon, 1 blue crayon, 1 purple crayon, 1 brown crayon, 1 gray crayon</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/669.html?thread=219718301#cmt219718301">starting</a>: lapisdei07, lapisdei10, lawless19, crusader19, orderly19, ioka01, gentian12, valkyria14</li>
    <li>started playing</li>
</ul>
`;

var unformattedlogs = `
`;
