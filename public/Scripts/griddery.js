/*-----------------------------------------

    griddery by @glenthemes [tumblr]
    https://dub.sh/griddery

-----------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
	/*----- 🐱 CATS GRID 🐱 -----*/
	// for the column count, I used css variables, :root
	gridderyV3({
		items: "img[cat]",
		columns: "var(--Cat-Columns)"
	});

	/*----- 🐶 DOGS GRID 🐶 -----*/
	// for the column count, I directly assigned a number.
	// both work!
	gridderyV3({
		items: "img[dog]",
		columns: 2
	});

	// for demo use only
	// to showcase their names
	// to reflect that the left-to-right order is kept.
	// safely ignore this part 👍
	setTimeout(() => {
		document.querySelectorAll("[griddery-item] img[name]")?.forEach(img => {
			let name = img.getAttribute("name");
			if(name.trim() !== ""){
				let label = document.createElement("div");
				label.classList.add("label");
				label.textContent = name;
				img.after(label);
			}
		});
	},0);
});
