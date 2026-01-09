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
<time>01/08/2026</time>
<ul>
    <li>lost to Silly Blanks 301: lawless19, speedrunner06</li>
</ul>
<time>01/07/2026</time>
<ul>
    <li>traded to tempoet: sig_aid for sig_emmy</li>
    <li>received from signature: sig_aid, sig_aid, sig_aid</li>
</ul>
<time>01/07/2026</time>
<ul>
    <li>received from Colouring Book 371: northambria05, motovlogging20, motovlogging05, lumiosecity01, cervanivea17, disgrace06, venusknights20, speedrunner12, mimicslime19, speedrunner06, motovlogging08, mimicslime09, mimicslime12, disgrace18, mimicslime04, disgrace04</li>
</ul>
<time>01/06/2026</time>
<ul>
    <li>lost to Colouring Book 371: 1 green crayon</li>
    <li>traded to netbug009: crusader19, orderly19 for cervanivea15, warmonk12</li>
    <li>received from art shop: lapisdei03, lapisdei04, lapisdei05, lapisdei06</li>
</ul>
<time>01/05/2026</time>
<ul>
    <li>lost to art shop: 4 brown crayon</li>
    <li>gifted by sonetto: illness06, jadedeer04, vasavi07, objection17, 3 brown crayon</li>
    <li>traded to tempoet: ioka01 for warmonk06
    <li>received from finalizing application: wildlife14, explosion05</li>
    <li>received from Little Spell Academia 396: jadedeer01, illness02, objection01, psychology03, psychology02, vasavi13, logic01, burgers02, lapisdei20</li>
    <li>received from December Deck Release: qucusaurus01, dagobah01, truepassion11, laprimera01, triplecone01, rust01, scepter01, abundance12, cortondo02, firstlie01, vanarana15, vasavi12, nirvasyl01, burgers01, illness01, psychology01, lapisdei01, cervanivea01, warmonk01</li>
    <li>gifted by corafish: jadedeer06, objection15, 1 red crayon, 1 orange crayon, 1 yellow crayon, 1 green crayon, 1 blue crayon, 1 purple crayon, 1 brown crayon, 1 gray crayon</li>
    <li>received from starting: lapisdei07, lapisdei10, lawless19, crusader19, orderly19, ioka01, gentian12, valkyria14</li>
    <li>started playing</li>
</ul>
`;

var unformattedlogs = `
`;
