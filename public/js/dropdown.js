var menuItems = document.querySelectorAll("topnav");
Array.prototype.forEach.call(menuItems, function (el, i) {
    el.querySelector("button").addEventListener("click", function (event) {
        if (this.parentNode.className == "dropbtn") {
            this.parentNode.className = "has-submenu open";
            this.setAttribute("aria-expanded", "true");
        } else {
            this.parentNode.className = "has-submenu";
            this.setAttribute("aria-expanded", "false");
        }
        event.preventDefault();
        return false;
    });
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};
