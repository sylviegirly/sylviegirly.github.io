// On page load set the theme.
(function () {
    let onpageLoad = localStorage.getItem("font");
    const font = localStorage.getItem("font");
    let element = document.body;
    element.style.fontFamily = localStorage.getItem("font") || "freepixel";
})();

// Function to toggle font mode
const toggleFont = () => {
    let font = localStorage.getItem("font");
    console.log("The current body font is " + document.body.style.fontFamily);
    if (document.body.style.fontFamily === "freepixel") {
        console.log("Swap to Arial");
        document.body.style.fontFamily = "atkinson";
        localStorage.setItem("font", "atkinson");
        // document.documentElement.classList.add('accessible-font');
    } else {
        console.log("Swap to freepixel");
        document.body.style.fontFamily = "freepixel";
        localStorage.setItem("font", "freepixel");
        // document.documentElement.classList.remove('accessible-font');
    }
};

// Attach the toggle function to the button
document.getElementById("toggle-font").addEventListener("click", toggleFont);
