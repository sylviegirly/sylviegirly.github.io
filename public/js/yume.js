document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("YumeRing").innerHTML = `


<div class="yumering">
<div id="img"></div>

<div id="inbox">
this webmaster is a <b>nonsharing</b> <b>Zhongli</b> <b>yume</b><br>
<a href="https://moekkis.neocities.org/yumeclique.html">join the yumeclique !</a>
</div>
</div>


<style></style>

<style>

.yumering {
    display:flex;
    box-sizing:border-box;
    gap:10px;
    justify-content:center;
    align-items:center;
    padding: 10px;
    height: 110px; width: 300px; /*edit this if necessary, but it might change/alter the way the div looks unless you edit the rest of the elements accordingly*/
    /*feel free to edit the stuff after this*/
    border-radius: 5px;
    border: 1px solid black;
    font-smooth:never;
    -webkit-font-smoothing:none;
    background: linear-gradient(to bottom, transparent, white), url('https://files.catbox.moe/dbv9b2.gif');
    background-size: 100px;
}

.yumering #img {
    width: 90px; height: 90px;
    background-image: url('https://files.catbox.moe/0shu1e.jpeg'); /*IMPORTANT!! REPLACE THIS WITH YOUR FAV!*/
    border:1px solid black;
    border-radius: 2px;
    background-size:cover;
    background-position:center;
}

.yumering #inbox {
    width: 190px;
    font-size:15px;
}

</style>

`;
});
