const container = document.querySelector("#toc");
if (!container) return;
const allHeadings = document.querySelectorAll(".subtitle");
if (allHeadings.length < 2) return;
let output = "<b>Blogs:</b><ol>";
[...allHeadings].forEach((headingEl) => {
	const title = headingEl.innerHTML;
	const link =
	      headingEl.getAttribute("id") ||
	      encodeURI(
	        title
	          .replaceAll(" ", "-")
	          .replaceAll("#", "")
          	  .replaceAll("&", "")
	          .replaceAll(/<[^>]*>?/gm, "")
          	  .replaceAll("--", "-")
	      ).toLowerCase();
	headingEl.setAttribute("id", link);
	output += `<li><a href="#${link}">${title}</a></li>`;
});
container.innerHTML = output + "</ol>";
