document.addEventListener("DOMContentLoaded", function () {
    (function () {
        // Get the toggle element by its ID
        var e = document.getElementById("tglScheme");

        // If the toggle element is not found, log an error and exit the function
        if (!e) {
            console.error('No element with ID "tglScheme" found. Unable to handle color scheme toggle.');
            return;
        }

        // Check if the user's device/browser prefers a dark color scheme
        var t = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // Get the stored color scheme from the browser's local storage
        var n = window.localStorage.getItem("scheme");

        // Function to apply the color scheme based on the given scheme value
        var i = function (r) {
            var s = document.getElementById("scheme");
            s && s.remove();
            document.head.insertAdjacentHTML("beforeend", '<style id="scheme">:root{color-scheme:' + r + "}</style>");
            document.body.classList.remove("light", "dark");
            document.body.classList.add(r);
            e.checked = "dark" === r;
            console.log("Color scheme applied:", r);
        };

        // Determine the initial color scheme based on user preference or stored value
        var a = n || (t ? "dark" : "light");
        i(a);

        // Attach a click event listener to the toggle element
        e.addEventListener("click", function () {
            // Check if the toggle is checked or not
            var r = e.checked;

            // Apply the new color scheme based on the toggle state
            var o = r ? "dark" : "light";
            i(o);

            // Update the stored color scheme in the browser's local storage
            r
                ? (localStorage.setItem("scheme", "dark"), console.log("User preference saved: dark"))
                : (localStorage.setItem("scheme", "light"), console.log("User preference saved: light"));
        });

        // Update the color scheme when the user's preference changes, without reloading the page
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
            // Update the stored color scheme from the browser's local storage
            n = window.localStorage.getItem("scheme");

            // If there's no stored color scheme, apply the system preference
            if (!n) {
                t = window.matchMedia("(prefers-color-scheme: dark)").matches;
                var r = t ? "dark" : "light";
                i(r);
                console.log("System color scheme preference changed:", r);
            }
        });
    })();
});
