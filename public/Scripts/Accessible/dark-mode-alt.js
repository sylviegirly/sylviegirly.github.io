// this checks whether system dark mode is set
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
// this checks for session storage telling to override
// the system preferences
let theme = sessionStorage.getItem("site-theme");

if (systemInitiatedDark.matches) {
    document.getElementById("theme-toggle").innerHTML = "☀️";
} else {
    document.getElementById("theme-toggle").innerHTML = "🌙";
}

function prefersColorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById("theme-toggle").innerHTML = "☀️";
        // this clears the session storage
        sessionStorage.setItem("site-theme", "");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById("theme-toggle").innerHTML = "🌙";
        sessionStorage.setItem("site-theme", "");
    }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
    // it’s important to check for overrides again
    let theme = sessionStorage.getItem("site-theme");
    // checks if reader selected dark mode
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        sessionStorage.setItem("site-theme", "light");
        document.getElementById("theme-toggle").innerHTML = "🌙";
        // checks if reader selected light mode
    } else if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        sessionStorage.setItem("site-theme", "dark");
        document.getElementById("theme-toggle").innerHTML = "☀️";
        // checks if system set dark mode
    } else if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute("data-theme", "light");
        sessionStorage.setItem("site-theme", "light");
        document.getElementById("theme-toggle").innerHTML = "🌙";
        // the only option left is system set light mode
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        sessionStorage.setItem("site-theme", "dark");
        document.getElementById("theme-toggle").innerHTML = "☀️";
    }
}

if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("site-theme", "dark");
    document.getElementById("theme-toggle").innerHTML = "☀️";
} else if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("site-theme", "light");
    document.getElementById("theme-toggle").innerHTML = "🌙";
}
