document.addEventListener("DOMContentLoaded", function (event) {
    const e = new Freezeframe(".freezeframe", {
        trigger: false,
        responsive: false,
        overlay: false
    });

    let prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.getElementById("play-gif").addEventListener("click", function () {
        e.start();
    });
    document.getElementById("stop-gif").addEventListener("click", function () {
        e.stop();
    });

    // Check for reduced motion preference and freeze GIFs if true
    if (prefersReducedMotion) {
        console.log("Reduced motion is on, disable");
        document.getElementById("stop-gif").click();
        e.stop();
    } else {
        const animationsEnabled = localStorage.getItem("animationsEnabled") === "true"; // Get stored state
        if (animationsEnabled) {
            // Enable animations if true
            window.onload = function () {
                document.getElementById("play-gif").click();
                console.log("Play gifs");
            };
        } else {
            // Freeze GIFs if false
            window.onload = function () {
                document.getElementById("stop-gif").click();
                onsole.log("Pause gifs");
            };
        }
    }
});
