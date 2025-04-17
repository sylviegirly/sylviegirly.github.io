// Check if the user has previously selected a color mode
const font = localStorage.getItem("font");

// If a font size was retrieved from Local Storage
if (font) {
    // Apply the font to the page
    document.body.style.fontFamily = font;
}

// Function to toggle color mode
const toggleTheme = () => {
    let font = localStorage.getItem("font");

    if (document.body.style.fontFamily === "Arial") {
        console.log("Swap to Times New Roman Font");
        document.body.style.fontFamily = "Times New Roman";
        localStorage.setItem("font", "Times New Roman");
        // document.documentElement.classList.add('accessible-font');
    } else {
        console.log("Swap to Arial");
        document.body.style.fontFamily = "Arial";
        localStorage.setItem("font", "Arial");
        // document.documentElement.classList.remove('accessible-font');
    }
};

// Attach the toggle function to the button
document.getElementById("toggle-theme").addEventListener("click", toggleTheme);
