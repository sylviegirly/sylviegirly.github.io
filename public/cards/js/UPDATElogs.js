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
<time>02/17/2026</time>
<ul>
    <li>traded to <a href='https://asuraid.dreamwidth.org/4183.html?thread=76119#cmt76119'>sonetto</a>: pink11, powerpuff12, trickmaster03 for blacksalt08, decepticons07, destron11</li>
    <li>traded to <a href='https://asuraid.dreamwidth.org/4183.html?thread=76119#cmt76119'>tempoet</a>: proposal04 for syruptanker03</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4059899.html?thread=221438715#cmt221438715'>mastering burgers</a>: objection13, string407, japanese20, 1 red crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=221398759#cmt221398759'>Art Shop</a>: burgers14, burgers15, burgers16, burgers17, burgers18, burgers19</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=221398759#cmt221398759'>Art Shop</a>: 6 purple crayons</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4478491.html?thread=221144347#cmt221144347'>Most Wanted 209</a>: lasciate20, eternaleye01, blacksalt15, proposal04, whiteraven15</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4478339.html?thread=221144707#cmt221144707'>Pokeradar 464</a>: grapejuice06, powerpuff12, kingkazma20, nightfury08, wish01, bararaq18, curbstomp09, ribbonchan19, virage14, worstdriver16</li>
</ul>
<time>02/15/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/2957585.html?thread=221383185#cmt221383185'>leveling to tangerine</a>: burgers13, firstlove14, snakes18, blackwidow04, 1 blue crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4472831.html?thread=220886527#cmt220886527'>Lady Luck Slots 248</a>: twintails06, restoration09, mockingbirds14, knighted16, laguz04, paranoia02, maleidols12, riders09, horror02, onod13, reis08, cutlass05, 1 brown crayon, 1 gray crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4465655.html?thread=220576503#cmt220576503'>Coloring Book 373</a>: 1 orange crayon, 1 yellow crayon, 1 blue crayon, 1 purple crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4484087.html?thread=221382391#cmt221382391'>Little Spell Academia 402</a>: pal02, psychology05, vasavi06, objection10, cuarta02, vasavi09, burgers09, fragment02, vasavi10, burgers11, objection11, burgers12, objection12, vasavi11</li>
</ul>
<time>02/14/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4473846.html?thread=220971510#cmt220971510'>Silly Blanks 305</a>: frozen16, yanzhuo01, posh15, shadowflash18, ember15, legendary16, cheer02, tidalelegy01, curefinale07</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4473846.html?thread=220971510#cmt220971510'>Silly Blanks 305</a>: onion13, pose04</li>
</ul>
<time>02/13/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4474862.html?thread=221001198#cmt221001198'>Colorseum 74-1</a>: 1 gray crayon, 1 yellow crayon, 1 purple crayon, 1 orange crayon</li>
</ul>
<time>02/11/2026</time>
<ul>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2072702.html?thread=44444030#cmt44444030'>wachamachas</a>: lasciate04 for paradisaea03</li>
    <li>traded to <a href='https://asuraid.dreamwidth.org/4183.html?thread=69207#cmt69207'>tempoet</a>: sakestore20, four-leaf20, dietmember14, four19, mangaka10, yanderes15 for appointed01, yo-kai01, redknights02, empathizes05, brawn19, planetfarer16</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4466464.html?thread=220589856#cmt220589856'>Pick A Color 307</a>: glamsight18, neatfreak12, nacchan19, nstackle19, morii17, champions09, elvensniper06, boyslove13, majesty06, lycanthe07, erudite11, fantan20, chakra04, apfel13, ducttape03, snapshot18, hades18, solinvictus17, masquerades06, churchgrim19, demonlord06, shinen12, clawmyheart01, akasha03, renegade10</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2072400.html?thread=44424272#cmt44424272'>citoyenne</a>: 098810, 098812, deathscythe18, md-0032g11, unicorn03, phagocyte02, pomeranian20, rakugoka09, witchcraft07 for hyposelenia12, brynhilde09, benishidare18, phones10, sohcahtoa03, deltoro07, hisagomaru01, sweetscheme01, jamsword15</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4479349.html?thread=221145717#cmt221145717'>Switch It Up 286</a>: cuarta03, sapientia18, fragment19, picket01, prinzessin06, primera19, conqueror06, flowery03</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4479349.html?thread=221145717#cmt221145717'>Switch It Up 286</a>: half-vampire18, astraea14, savage03, videogame16, biovolt03, resistant06, bonfire20, classrep02</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2068664.html?thread=44338616#cmt44338616'>camilovesyou</a>: coldflames03, aidraptors12, swimmer15, sig_aid for lostlight07, jadedeer20, illness14, sig_cami3</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4466769.html?thread=220634193#cmt220634193'>january release</a>: coldflames03</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4479180.html?thread=221145292#cmt221145292'>Coloring Book 374</a>: staunch12, lilies05, portmafia15, greatwar07, pomeranian18, sosick19, grudge07, mangaka10, ragingstorm07, thatdarncat14, sith08, sakestore20, kazahana12, profiler18, pear04, zero-type15</li>
</ul>
<time>02/10/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4445938.html?thread=219818482#cmt219818482'>Mika's Quilting 204</a>: president08, search10, catastrophe11, pikarigaoka07, thermopylae12, mistress13, seaeagle03, eleventh11, clarines16, betrothed16, deadoralive17, firetruck02</li>
    <li>traded to <a href='https://asuraid.dreamwidth.org/4183.html?thread=67159#cmt67159'>overmore</a>: chains16 for awoo07</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/4479180.html?thread=221145292#cmt221145292">Coloring Book 374</a>: 1 gray crayon</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2070628.html?thread=44378724#cmt44378724'>moes</a>: expectations18, glimmerlab04, kyun-kyun12, morikubos02, secretaries20, usurped12, ariatrading12, babalon08, beast07, birds10 for decepticons04, e-ming12, fleshlings11, omniscient03, omniscient06, omniscient16, ruoye09, squeak18, vasavi03, vector07</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4471713.html?thread=220869537#cmt220869537'>Most Wanted 208</a>: allsimples14, chains16, yanderes15, four-leaf20, carmendei19</li>
    <li>received from <a href='https://colors-tcg.eu/recycledart.php?view=log'>recycled art</a>: vector01, vector14, tachikaze06, earthmother20, elucidator16, nohr16, nohr18, noriyuki09, ogata14, zanpakuto12 </li>
</ul>
<time>02/09/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4477563.html?thread=221103995#cmt221103995'>Little Spell Academia 401</a>: coffee02, burgers06, objection04, dragonscale02, burgers07, vasavi02, objection05, psychology04, objection06, objection08, burgers08</li>
    <li>traded to <a href='https://asuraid.dreamwidth.org/4183.html?thread=16727#cmt16727'>netbug009</a>: sig_aid for sig_netbug</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4468831.html?thread=220783199#cmt220783199'>Colors Concentration 152</a>: cureace20, flamenpink16, solotriangle04, skyloft20, explomb16, letus20, amikke03, capable20, xenon16, md-0032g11, moongold10, ex-fiance06, mayfly13, truce14, skydress01, seed06, monks09, yao-er02, sweeten10, erasergun13, mariposa20, macanluin18, everyday03, occultism19, horse17, results02, tellme04, sorceress03, four19, kyokyo04, 1 purple crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4466146.html?thread=220576738#cmt220576738'>Lady Luck Slots 247</a>: astraea14, aresweis16, nqm11, devious07, targetpanic01, samadhi10, nevassa09, thewitch07, movie13, flamboyant01, happyengage18, dnn04, flamengreen10, foolsgold14, zebul12, tightrope06, sheep01, kabaneri01, greatchief05, relicsong05, half-vampire18, delusions13, sage06, flamboyant12, 2 green crayons</li>
</ul>
<time>02/08/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4475194.html?thread=221005114#cmt221005114'>Swap Station 264</a>: warmonk14, 1 blue crayon</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2067752.html?thread=44402472#cmt44402472'>scblakdrgon</a>: sweetvoice08, acey13, mountaindash08, burnt02, dazzle06, enchante06, enraptured08, hongyuan20, orangegrove20, oysters18, sig_aid for dragonscale01, squeak16, e-ming12, eternaleye18, spectrum17, squeak07, vector01, vector11, decepticons16, fleshlings06, sig_adelicya</li>
</ul>
<time>02/07/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4059899.html?thread=221020667#cmt221020667'>mastering warmonk</a>: vasavi01, saiyan11, shirikodama16, 1 gray crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=221001447#cmt221001447'>art shop</a>: warmonk05, warmonk07, warmonk08, warmonk09, warmonk10, warmonk11, warmonk14, warmonk16, warmonk17, warmonk18, warmonk20</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2070828.html?thread=44384044#cmt44384044'>errorysm</a>: umitsuki02, jelee02, croceamors15, value19, jello18, sig_aid for fleshlings04, fleshlings19, ruoye04, hyposelenia10, blacksalt06, sig_rys</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4466769.html?thread=220634193#cmt220634193'>january release</a>: umitsuki02, jelee02</li>
</ul>
<time>02/06/2026</time>
<ul>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4475194.html?thread=221005114#cmt221005114'>Swap Station 264</a>: warmonk01, 1 red crayon</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/3969255.html?thread=221001447#cmt221001447">art shop</a>: 11 yellow crayons</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2071175.html?thread=44385927#cmt44385927'>pcrtiallystcrs</a>: pinkpearl03, bigleague03, blossom20, butlerpower09, cure18, curetwinkle03, sig_aid for vector05, factor13, tachikaze05, wingman07, wingman19, wiseking12, sig_amity</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4468022.html?thread=220681014#cmt220681014'>Colorseum 73-5</a>: 1 brown crayon, 1 red crayon, 1 yellow crayon, 1 grey crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4474430.html?thread=220970302#cmt220970302'>Twenty Questions 081</a>: realian19, housefire16, megaevolve10</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4467436.html?thread=220663276#cmt220663276'>Silly Blanks 304</a>: shenzhou16, strictcoach14, shopping16, deadend20, icecar06, mountaindash08, chevalier08, ratatouille17, rowdy10, darkflame08</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4467436.html?thread=220663276#cmt220663276'>Silly Blanks 304</a>: mothers09, severe10</li>
</ul>
<time>02/05/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4059899.html?thread=220944635#cmt220944635'>mastering illness</a>: hyposelenia09, publicmorals13, weasel15, 1 purple crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=220922855#cmt220922855'>Art Shop</a>: illness08, illness09, illness13, illness14, illness18, illness19</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/2957585.html?thread=220942609#cmt220942609'>leveling to strawberry</a>: hyposelenia08, psyqualia09, nova14, 1 gray crayon</li>
</ul>
<time>02/04/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4459486.html?thread=220363742#cmt220363742'>Booster Bundle 222</a>: tealeaves11, galearc15, vegitamura10, girle02, gone05, videogame16, somnians03, resonance14</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4459147.html?thread=220363915#cmt220363915'>Kotori's Costume Party 453</a>: value19, x24s20, vfsuit15, sanzenri13, tachikaze13, aerokinesis03, alternate01, raised11, a-set05, imanity15</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2069666.html?thread=44365986#cmt44365986'>friednice</a>: tenbillion07, 1stchild15, eyes09, germanium02, seele10, talwar05 for fragum20, nyctereutes02, ochotona13, adrestia11, earthmother18, memokeeper10</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/3969255.html?thread=220922855#cmt220922855">art shop</a>: 6 gray crayons</li>
    <li>gifted by <a href='https://colors-trade.dreamwidth.org/2069666.html?thread=44365986#cmt44365986'>admiral</a>: hyposelenia15, illness07</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2069666.html?thread=44365986#cmt44365986'>admiral</a>: oldersister09, peacemaker09, shangrila20, troubleshoot13, homo15, charles12, ofuda16, sanctifex15, sig_aid for warmonk01, warmonk13, warmonk15, warmonk19, pal01, objection09, vasavi04, vasavi05, sig_lex</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2070067.html?thread=44367923#cmt44367923'>corafish</a>: sensible07, usagimimi09 for yaoi02, animula04</li>
</ul>
<time>02/03/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4465655.html?thread=220890871#cmt220890871'>Coloring Book 373</a>: grow10, dietmember14, shaft20, tanpopo12, deathhalo18, insides20, notquite03, sith19</li>
    <li>traded to <a href='https://asuraid.dreamwidth.org/4183.html?thread=56663#cmt56663'>overmore</a>: sig_aid for sig_blue3</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4471113.html?thread=220888393#cmt220888393'>Pot of Gold 140</a>: chroma12, barkeep03, assertive06, forwards14, patchwork10, amadeus19, cannibal13, restoration08, youthful08, fearless03</li>
</ul>
<time>02/02/2026</time>
<ul>
    <li>traded to <a href='https://asuraid.dreamwidth.org/4183.html?thread=54359#cmt54359'>tempoet</a>: captivate12, colleague13, kurikaramaru17, allnight03, emotion06 for misericordia16, shackle17, crowknights12, mediocrity05, smol10</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4464914.html?thread=220568082#cmt220568082'>Most Wanted 207</a>: squeak14, pink11, devotee17, secretaries20, otahen08</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4464666.html?thread=220568346#cmt220568346'>Pokeradar 462</a>: elucidator05, rhythm02, hakunon07, loyalty19, phonestrap14, astra17, bladerang17, mechanizing18, biovolt03, sigmund15</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=220846311#cmt220846311'>art shop</a>: sig_aid, sig_aid, sig_aid</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=220846311#cmt220846311'>art shop</a>: 3 green crayons</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2069097.html?thread=44356201#cmt44356201'>travastila</a>: denmark04, fiancee12, illiterate13, sheeh08 for ampulla14, spectrum20, coffee03, tablesalt11</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2069259.html?thread=44354827#cmt44354827'>misheard</a>: gatlingmax09, ironskin20 for hyposelenia07, illness16</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2067752.html?thread=44355368#cmt44355368'>jelliebean</a>: bombings19, envy05, greenword05, margrace11, sig_aid for vasavi18, psychology08, pal06, pal09, sig_jellie</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4059899.html?thread=220842491#cmt220842491'>mastering lostlight</a>: blacksalt05, roving05, mischievous06, 1 yellow crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/2418272.html?thread=220831328#cmt220831328'>art studio</a>: lostlight07, lostlight16, lostlight17, lostlight18, lostlight19, lostlight20</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/2418272.html?thread=220831328#cmt220831328'>art studio</a>: marionetta09, oolong14, caelin07, nirvana14, myprince03, chousin19, profit19, rock10, fran05, diva14, punishment05, revenge08, b-701, extractteam03, mooncell12, wildchild08, evilking17, debug17</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4462150.html?thread=220481862#cmt220481862'>Colors Concentration 151</a>: chroma12, fearless03, barkeep03, assertive06, moves13, forwards14, walks04, patchwork10, amadeus19, owl18, commanding12, charles12, shopkeep04, yomihime10, paruru02, lemuria03, yumekawa18, variabeauties11, violetwolf17, bespa05, striker04, straydog10, sensible07, cannibal13, lend04, frivolous13, youthful08, urameshiya17, hotel18, flowersong14, 1 green crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4458854.html?thread=220357734#cmt220357734'>Lady Luck Slots 246</a>: fevrith17, sexytype05, homo15, morikubos02, seele10, endings09, champions02, kanaiward14, cure18, restoration08, fullbloom08, natsus09, 2 green crayons</li>
</ul>
<time>02/01/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4451667.html?thread=220357971#cmt220357971'>Coloring Book 372</a>: glimmerlab04, enchante06, ofuda16, hongyuan20, triplecone13</li>
    <li>received from <a href='https://colors-tcg.eu/recycledart.php?view=log'>recycled art</a>: educate04, el01, eun10, eun11, knowing03, knowing18, kazeshini01, kazeshini09, shuanghua08, suzumushi18, kyous08, zanpakuto02, zanpakuto07, zanpakuto12, zanpakuto14, zanpakuto16, wabisuke19, hakudan14, hakudan15, flowery13, factor10, factor20, faerghus13, tercera17, three01, xcution17, xcution20, plagiarist02</li>
    <li>traded to <a href='https://overmore.dreamwidth.org/27332.html?thread=27588#cmt27588'>overmore</a>: dreary05 for goldweaver15</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/2957585.html?thread=220798481#cmt220798481'>leveling to grey</a>: lostlight15, couturier18, gohyaku15, 1 green crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4059899.html?thread=220798203#cmt220798203'>mastering cervanivea</a>: lostlight14, beanville11, marionetta09, 1 orange crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4059899.html?thread=220798203#cmt220798203'>mastering jadedeer</a>: cervanivea20, oolong14, caelin07, 1 yellow crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4470177.html?thread=220794785#cmt220794785'>Little Spell Academia 400</a>: lostlight08, jadedeer16, jadedeer18, cervanivea14, lostlight09, coffee01, lostlight10, jadedeer19, fragment01, jadedeer20, lostlight13, cervanivea16, lostlight11, cervanivea18, cervanivea19, lostlight12</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4469018.html?thread=220782362#cmt220782362'>Crazy Colors 380</a>: nirvana14, myprince03, chousin19, profit19, rock10, fran05, diva14, punishment05, revenge08, b-701, extractteam03, mooncell12, wildchild08, usagimimi09, torule11, 1stchild15</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4469018.html?thread=220782362#cmt220782362'>Crazy Colors 380</a>: moonwalker10</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=220753895#cmt220753895'>art shop</a>: ironskin20, 100cats06, genz07</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=220753895#cmt220753895'>art shop</a>: 3 sketchpads</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/2957585.html?thread=220781329#cmt220781329'>leveling to brown</a>: jadedeer15, denied13, goouhanten16, 1 gray crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4460279.html?thread=220411383#cmt220411383'>Puzzle Chains 401</a>: evilking17, mugendai07, fairytale02, alwayshungry10, pragmatist09, kazu-kun04, margrace11, catbingu02, immigrant06, iscandar20, pomeranian20, rabbithero16, backstroke18, voyager20, 5thrank13, websearch18, scrambled10, kurikaramaru17, bedofroses17, lucifer10, dreary05, martuba10, perceptive11, debug17, secondroom01, straysheep07, pointguard18, mugenjou08, sheeh08, talwar05, gluttony15, elevator03, clown20, monk16, juumonji05, shiro04, defensive09, hardhat01, puppy18, rakugoka09, germanium02, lorddeath19, robber16, yamazaki03, dharma09, firststar13, emergency19, flower02, goldenspark17, norlangarth03, chimera10, karamucho06, bigleague03, zelua09, trickmaster03, bonfire20, number2309, usu06, greenword05, sunlight17, 1 brown crayon, 1 gray crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4460279.html?thread=220411383#cmt220411383'>Silly Blanks 303</a>: laconic01, avalken14, nutjob10, jewelthief20, artista03, ball13, phecda02, kosmos15, wetsuit17</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4460279.html?thread=220411383#cmt220411383'>Silly Blanks 303</a>: greatest15, pay08</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4459815.html?thread=220410919#cmt220410919'>Go Fish! 500</a>: thirdseat03, emotion06, gatlingmax09, reverses18, smelt03</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4452416.html?thread=220143936#cmt220143936'>Memory Lane 016</a>: started18, sanctifex15, patchwork09, bombings19, ukaku16, rustboro01, troubleshoot13, witchheart03, warrant10, 098812, babalon08, korenaru10, mikazuki20, gunman15, snakewoman06, 1 red crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4452626.html?thread=220143634#cmt220143634'>Pick A Color 306</a>: blackfox06, synchronize06, commodore06, harvest10, attracts10, negative-kun18, vex16, rati11, socialmedia20, thracia10, zaftig12, scavenger19, experiments20, killerwolf20, doctors08, kingofnohr01, canvas14, hardland05, pediatrician08, ragnarok03, outlandish06, possessive20, reckless12, vice10, peacemaker09</li>
</ul>
<time>01/31/2026</time>
<ul>
    <li>gifted by <a href='https://colors-trade.dreamwidth.org/2068950.html?thread=44343766#cmt44343766'>camilovesyou</a>: ruoye10, ruoye15, decepticons01, decepticons09, decepticons19, fleshlings17, husbandos02, vanarana02, burgers20, coffee09</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/3355031.html?thread=220355479#cmt220355479'>donating lostlight</a>: hensheng15, chibikko19, yang04, 1 gray crayon</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2067752.html?thread=44344360#cmt44344360'>aroseofmay</a>: catcafe16, chuunibyou04, dashing06, romancenovel16, secondseat04, shuffleunit14, somersaults04, thepsychic14, winter04 for objection07, dragonscale03, burnish12, decepticons12, e-ming10, fleshlings16, omniscient12, ruoye10, ruoye19</li>
</ul>
<time>01/30/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4460873.html?thread=220439625#cmt220439625'>Colorseum 73-4</a>: 2 orange crayons, 2 brown crayons</li>
    <li>gifted by <a href='https://colors-trade.dreamwidth.org/2068396.html?thread=44332204#cmt44332204'>breadfully</a>: onion13, pureheart05, swimming07</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2068396.html?thread=44332204#cmt44332204'>breadfully</a>: spiritevo02, sig_aid for lostlight06, hyposelenia06, sig_bread</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4466769.html?thread=220634193#cmt220634193'>Release 189</a>: spiritevo02</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2067752.html?thread=44333608#cmt44333608'>sonetto</a>: shyly12 for illness15</li>
</ul>
<time>01/29/2026</time>
<ul>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2068173.html?thread=44330189#cmt44330189'>tiddly_widdly</a>: flodeboller11, magichat06 for vasavi08, vasavi17</li>
    <li>traded to <a href="https://corafish.dreamwidth.org/372.html?thread=20596#cmt20596">corafish</a>: spiritwave03 for dragonscale15</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2068173.html?thread=44330189#cmt44330189'>mezucore</a>: incarnation11, minalinsky07, onihime07, onihime08, ouji07, ouji20, stars09, sig_aid for lostlight04, hyposelenia04, blacksalt04, eternaleye03, autobots17, imperatrix16, crowknights13, sig_mezu</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2067752.html?thread=44329512#cmt44329512'>mezzin</a>: demonbelle01, glassblade01, crownsguard01, live18, shampoodle09, sig_aid for lostlight05, hyposelenia05, convoy01, destron09, dragonscale09, sig_mez</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4466769.html?thread=220634193#cmt220634193'>Release 189</a>: demonbelle01, glassblade01</li>
    <li>traded to <a href="https://colors-trade.dreamwidth.org/2067752.html?thread=44327720#cmt44327720">travastila</a>: fatherhood02, postwar02, onesided02, incog02 for lostlight03, hyposelenia03, blacksalt02, eternaleye02</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4466769.html?thread=220634193#cmt220634193'>Release 189</a>: fatherhood02, postwar02, onesided02, incog02</li>
    <li>traded to <a href="https://colors-trade.dreamwidth.org/2067752.html?thread=44327208#cmt44327208">corafish</a>: allsimples02, gems02 for lostlight02, hyposelenia02</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4466769.html?thread=220634193#cmt220634193'>Release 189</a>: allsimples02, gems02</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2067752.html?thread=44326696#cmt44326696'>overmore</a>: litterateurs19, suna-suna06 for hyposelenia11, blacksalt03</li>
    <li>traded to <a href='https://colors-trade.dreamwidth.org/2067752.html?thread=44326184#cmt44326184'>misheard</a>: undyingflame18 for illness10</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4466769.html?thread=220634193#cmt220634193'>Release 189</a>: hyposelenia01, eternaleye01, werehound01, blacksalt01, omnitrix01, syruptanker01, insides01, grief01, lostlight01, howto01, awoo01, sig_aid, sig_aid</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/2957585.html?thread=220629521#cmt220629521'>leveling to purple</a>: jadedeer13, virgins20, fairytales01, 1 green crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4456371.html?thread=220275123#cmt220275123'>No Context Theater 453</a>: usurped12, colleague13, secondseat20, envy05, locoroco19</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4450309.html?thread=219952389#cmt219952389'>No Context Theater 452</a>: kraftwork17, litterateurs19, dominion07, burnt02, secondseat04</li>
</ul>
<time>01/28/2026</time>
<ul>
    <li>traded to <a href='https://asuraid.dreamwidth.org/4183.html?thread=49751#cmt49751'>overmore</a>: containment10 for vanarana01</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4465829.html?thread=220576165#cmt220576165'>Switch It Up 285</a>: noctua05, selfless04, swim19, legendary15, nasod17, neongem19, pavo11, mona07, aliens12, enduring02, easilylost10, jamsword10, easilylost18</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4465829.html?thread=220576165#cmt220576165'>Switch It Up 285</a>: aggressive07, huntdown13, loleus05, appmon12, bored20, alarmclock03, attache14, batting09, kyouken12, no02, nidothing07, caramelsyrup03, flamenco03</li>
</ul>
<time>01/26/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4465655.html?thread=220576503#cmt220576503'>Coloring Book 373</a>: narshe03, vexed08, stalking16, mercenaries15, somersaults04, 4thrank13, appear20, ouji20, romancenovel16, darkshrine01, magichat06, shyly12, incomplete11, esthar11, upperfive16, butlerpower09</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4465655.html?thread=220576503#cmt220576503'>Coloring Book 373</a>: 1 gray crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=220551399#cmt220551399'>art shop</a>: sig_aid, sig_aid</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/3969255.html?thread=220551399#cmt220551399'>art shop</a>: 2 green crayons</li>
</ul>
<time>01/26/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/2802693.html?thread=220525573#cmt220525573'>January Activity</a>: dracula17, thepsychic14, verdantfaith17, pooka07, visualnovel01, fuuga13, unbound20, potato12, coordinator02, marchhare03, machina13, lawnmower12, moonwalker10, flamenco03, lohenwolf19, avalken15, tenbillion07, witchcraft07, kraftwork01, bored20, blogger12, neomonachus13, honest03, spoiled05, hensheng02, warpstar14, lasciate04, ramble01, psychologist16, teacher01, unseeable06, orangegrove20, einstein08, severe10, laughing09, eco18, 1 green crayon, 1 purple crayon, 1 gray crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4457744.html?thread=220335888#cmt220335888'>Most Wanted 206</a>: squeak18, undyingflame18, songbird06, beli06, leominor19</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4457625.html?thread=220336281#cmt220336281'>Pokeradar 461</a>: romancekiss17, refined12, denmark04, executioner01, custard05, fleshcan03, gray14, containment10, dullstown06, technician12</li>
    <li>gifted to <a href="https://overmore.dreamwidth.org/27332.html?thread=24516#cmt24516">overmore</a>: 1 red crayon, 1 orange crayon, 1 yellow crayon, 1 green crayon, 1 blue crayon, 1 purple crayon, 1 brown crayon, 1 gray crayon</li>
    <li>traded to <a href='https://asuraid.dreamwidth.org/4183.html?thread=47959#cmt47959'>16thpi</a>: secondlast13, obedience20, a-set11, sentinels08, paired12, boughs19, sig_aid for destron07, husbandos06, sakanade20, zangetsu11, bell11, wingman17, sig_sen2</li>
</ul>
<time>01/25/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4464097.html?thread=220530145#cmt220530145'>Little Spell Academia 399</a>: burgers04, cervanivea10, jadedeer08, jadedeer09, jadedeer10, illness04, townhall02, jadedeer11, cervanivea11, jadedeer12, cervanivea12, cervanivea13, burgers05</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/2957585.html?thread=220525073#cmt220525073'>leveling to blue</a>: warmonk04, flodeboller11, soulspark08, 1 green crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4454739.html?thread=220264787#cmt220264787'>Colors Concentration 150</a>: immovable01, loyalblade07, boughs19, croceamors15, quick11, acey13, oripathy04, cigarette19, deity13, kindness11, stars09, spear20, deadoralive10, detailed09, attache14, husbando10, mustaches09, alarmclock03, silverstar10, diagnostics09, tengawara16, native13, godsplit12, directorial20, bilkis04, noblewoman20, ladykiller20, razing04, argent20, nurturing19, 1 red crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4462534.html?thread=220481734#cmt220481734'>Crazy Colors 379</a>: swimsuits16, choromi10, tanabata02, secondlast13, pinkpearl03, sexytype13, repair19, onihime08, pomefiore14, catcafe16</li>
    <li>lost to <a href='https://colors-tcg.dreamwidth.org/4462534.html?thread=220481734#cmt220481734'>Crazy Colors 379</a>: obbligato18</li>
</ul>
<time>01/23/2026</time>
<ul>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4454333.html?thread=220213949#cmt220213949'>Puzzle Chains 400</a>: snowboard05, goldenrod17, porn11, aka13, ultimarain20, nekko01, pitiful08, gouki10, suna-suna06, paired12, gastanets02, college01, kicking14, fiancee12, cafemascot07, bluecrow11, curetwinkle03, 1stguardian20, vermouth13, winter04, pinkelf05, beast07, live18, manderville17, organization09, potter16, ouji07, optometry02, youshow19, libertine17, 1 yellow crayon</li>
    <li>received from <a href='https://colors-tcg.dreamwidth.org/4453953.html?thread=220207681#cmt220207681'>Colorseum 73-3</a>: 1 green crayon, 1 purple crayon, 1 blue crayon, 1 orange crayon</li>
</ul>
<time>01/22/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4453147.html?thread=220192283#cmt220192283">Silly Blanks 302</a>: eatanything12, policelady01, righthand10, aggressive07, ninir12, modo-modo13, fushigi06, jaikaurava05, libido09</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/4453147.html?thread=220192283#cmt220192283">Silly Blanks 302</a>: driving03, worst05</li>
    <li>received from <a href="https://colors-tcg.eu/recycledart.php?view=log">recycled art</a>: convoy04, cuarta05, cuarta11, ruoye02, autobots01, autobots07, autobots13, autobots16, autobots19, fleshlings03, fleshlings08, husbandos04</li>
</ul>
<time>01/21/2026</time>
<ul>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4445190.html?thread=219804678#cmt219804678">Kotori's Costume Party 452</a>: classrep02, surprises09, crt04, lovelin20, spellcaster02, ariatrading12, 21sacraments04, photographs04, marbirthday06, bloodwhip19</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4445465.html?thread=219804441#cmt219804441">Booster Bundle 221</a>: roaring03, appmon12, greatest15, stapler13, nidothing07, pose04, heavyblade05, allnight03</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/2957585.html?thread=220368145#cmt220368145">leveling to green</a>: jadedeer07, bloodelf01, karamucho05, 1 yellow crayon</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4452035.html?thread=220358339#cmt220358339">Switch It Up 284</a>: lacking04, jadedeer14</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/4452035.html?thread=220358339#cmt220358339">Switch It Up 284</a>: disgrace04, disgrace06</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4455027.html?thread=220353651#cmt220353651">Crazy Colors 378</a>: sickly11, supra-force18, sequencer05, appraiser10, golddragon20, levanguard15, banchou13, blossom20, koyaku01, 3b07</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/4455027.html?thread=220353651#cmt220353651">Crazy Colors 378</a>: sezan03</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4451667.html?thread=220357971#cmt220357971">Coloring Book 372</a>: gemini20, mothers09, urn04, southern17, almyra20, maverick12, al-unknown14, raidraptors12, dagobah19, dazzle06, kimie01, kimie13, strawberry19, shampoodle09, stride03, elegies13</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/4451667.html?thread=220357971#cmt220357971">Coloring Book 372</a>: 1 green crayon</li>
</ul>
<time>01/20/2026</time>
<ul>
    <li>traded to <a href="https://asuraid.dreamwidth.org/4183.html?thread=37207#cmt37207">sonetto</a>: rulerstruth03, locoroco19, music18, novels08 for fragment14, dragonscale07, dragonscale11, autobots02</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4059899.html?thread=220354043#cmt220354043">mastering lapisdei</a>: jadedeer05, olympia09, afraid02, 1 gray crayon</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4455027.html?thread=220264563#cmt220264563">Crazy Colors 378</a>: betreida10, educate16, whatapain07, a-set11, raise18, roaromin15, specimen20, avalken17, tharsis13, gun09</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/4455027.html?thread=220264563#cmt220264563">Crazy Colors 378</a>: gentian12</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/3969255.html?thread=220279015#cmt220279015">art shop</a>: lapisdei16, lapisdei18</li>
    <li>lost to <a href="https://colors-tcg.dreamwidth.org/3969255.html?thread=220279015#cmt220279015">art shop</a>: 2 brown crayons</li>
    <li>gifted to <a href="https://corafish.dreamwidth.org/372.html?thread=20084#cmt20084">corafish</a>: zhenjun20</li>
    <li>traded to <a href="https://travastila.dreamwidth.org/3965.html?thread=10877#cmt10877">travastila</a>: cyborg00216 for zhenjun20</li>
</ul>
<time>01/19/2026</time>
<ul>
    <li>traded to <a href="https://tempoet.dreamwidth.org/1972.html?thread=326324#cmt326324">tempoet</a>: alderaan16, watches09 for knowing12, vanarana12</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4451106.html?thread=220109346#cmt220109346">Most Wanted 205</a>: vanarana13, watches09, obedience20, wineglass20, jello18</li>
    <li>received from <a href="https://colors-tcg.dreamwidth.org/4450933.html?thread=220122997#cmt220122997">Pokeradar 460</a>: elixir01, well-being03, flamenblack03, galemaker18, suihakkei13, pay08, remind16, surnames01, novels08, fluorspar13, chartreux16, batting09, prize15, hachiko13, lyfjaberg03, loleus05, seeker12, themoles16, spiritwave03, deathscythe18, dauntless11, dive13, huntdown13, captivate12, obbligato18</li>
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
