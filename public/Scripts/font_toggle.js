// the system preferences
let onpageLoad = sessionStorage.getItem("blogFont");
let element = document.body;
element.style.fontFamily = sessionStorage.getItem("font") || "freepixel";

// On page load set the theme.
(function () {
    let onpageLoad = sessionStorage.getItem("blogFont");
    const font = sessionStorage.getItem("blogFont");
    let element = document.body;
    element.style.fontFamily = sessionStorage.getItem("blogFont") || "freepixel";
})();

function toggleFont() {
    // it’s important to check for overrides again
    let font = sessionStorage.getItem("blogFont");
    // checks if reader selected freepixel mode
    if (font === "atkinson") {
        sessionStorage.setItem("blogFont", "freepixel");
        document.body.style.fontFamily = "freepixel";
        // checks if reader selected atkinson
    } else {
        sessionStorage.setItem("blogFont", "atkinson");
        document.body.style.fontFamily = "atkinson";
        // checks if system set dark mode
    }
}

if (onpageLoad === "freepixel") {
    sessionStorage.setItem("blogFont", "freepixel");
    document.body.style.fontFamily = "freepixel";
} else if (onpageLoad === "atkinson") {
    sessionStorage.setItem("blogFont", "atkinson");
    document.body.style.fontFamily = "atkinson";
}

// Function to toggle font mode
const toggleFontOld = () => {
    let font = localStorage.getItem("font");
    console.log("The current body font is " + document.body.style.fontFamily);
    if (document.body.style.fontFamily === "freepixel") {
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
//document.getElementById("toggle-font").addEventListener("click", toggleFont);
