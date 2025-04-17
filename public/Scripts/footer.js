document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new GeneralFooter();

    // Add any custom JavaScript code here...
});

const footer = `
<footer>
    <p>
        2025 - 2025. Lovingly coded by <a href="https://zhongvie.neocities.org">aid</a>, with layout help from
        <a href="https://sadgrl.online">sadgrl.online</a> and
        <a href="https://petrapixel.neocities.org">petrapixel</a>. Layout inspired by <a href="https://toyhou.se/9447250.sideblock-bundle-12">Pinkie</a>.
    </p>
</footer>
`;

class GeneralFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = footer;
    }
}

customElements.define("general-footer", GeneralFooter);
