function openGalleryTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="galleryTab" and hide them
    tabcontent = document.getElementsByClassName("gallery");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="gallerylinks" and remove the class "active"
    tablinks = document.getElementsByClassName("gallerylinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultGallery" and click on it
if (document.getElementById("defaultGallery") != null) {
    document.getElementById("defaultGallery").click();
}
