document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new GeneralFooter();

    // Add any custom JavaScript code here...
});

const footer = `
<footer>
    <p>
        2025 — forevermore <i>/</i> lovingly coded by <a href="https://zhongvie.neocities.org">aid</a> <i>/</i> <a href="https://zhongvie.neocities.org/credits">credits</a> <i>/</i> <a href="https://asuraid.atabook.org/">guestbook</a>
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
