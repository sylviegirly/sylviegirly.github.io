/*function timeSincePost(postDate) {
    const currentDate = new Date();
    const timeDiff = Math.floor((currentDate - postDate) / 60000);

    if (timeDiff < 1) {
        return "Published Just now";
    } else if (timeDiff < 60) {
        return `Published ${timeDiff} minutes ago`;
    } else if (timeDiff < 1440) {
        const hoursAgo = Math.floor(timeDiff / 60);
        return `Publlished ${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else if (timeDiff < 2880) {
        return "Published Yesterday";
    } else {
        // Show the actual published date
        const options = { year: "numeric", month: "long", day: "numeric" };
        return `Published on ${postDate.toLocaleDateString(undefined, options)}`;
    }
}

const dateElements = document.querySelectorAll(".date");
dateElements.forEach((dateElement) => {
    const postDate = new Date(dateElement.textContent);
    const timeAgo = timeSincePost(postDate);
    dateElement.textContent = timeAgo;
});*/

// Get all elements with the class 'published'
const publishedElements = document.querySelectorAll(".published");

// Function to format the date as Month Day, Year
function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options); // Formats the date as "Month Day, Year"
}

// Function to calculate time passed
function timeElapsed(publishedDate) {
    const now = new Date();
    const diffInMilliseconds = now - publishedDate;

    // Check if the date is valid (not NaN)
    if (isNaN(diffInMilliseconds)) {
        return "Invalid date";
    }

    // Calculate time differences
    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.4375); // Average days in a month
    const years = Math.floor(months / 12);

    // Calculate the remaining months after extracting years
    const remainingMonths = months % 12;

    // Return a string based on the largest unit, with year and month included
    if (years > 0 && remainingMonths > 0) {
        return `${years} year${years > 1 ? "s" : ""} and ${remainingMonths} month${remainingMonths > 1 ? "s" : ""} ago`;
    } else if (years > 0) {
        return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (remainingMonths > 0) {
        return `${remainingMonths} month${remainingMonths > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
        return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
}

// Loop through all elements with the 'published' class and update them
publishedElements.forEach((element) => {
    const dateString = element.getAttribute("fic-published");

    // Ensure the date string is in a proper format (e.g., "2023-09-01T12:00:00Z")
    const publishedDate = new Date(dateString.endsWith("Z") ? dateString : dateString + "Z");

    // Format the full published date for the tooltip
    const formattedDate = formatDate(publishedDate);

    // Set the tooltip content
    element.setAttribute("data-tippy-content", `${formattedDate}`);

    // Update the element with the time passed
    element.innerHTML = `${timeElapsed(publishedDate)}`;
});
