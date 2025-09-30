document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new GeneralFooter();

    // Add any custom JavaScript code here...
});

const footer = `
<footer>
    <p>
        2025 &copy; lovingly coded by <a href="https://justinjackson.ca/webmaster/">aid</a> &bull; <a href="/changelog.html">changelog</a> &bull; <a href="/credits.html">credits</a> &bull; <a href="/feed.xml">rss</a> &bull; <a href="https://asuraid.atabook.org/">guestbook</a> &bull; <a href="mailto:sylviegirly@pm.me">contact me</a>
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
