// Get the HTML elements
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const toggleBtn = document.getElementById("toggle-btn");

// Start with 12-hour format
let is24Hour = false;

// Function to update time and date
function updateTime() {

  // Get current date and time
  const now = new Date();

  // Get hours, minutes and seconds
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  // Variable to store the final time
  let displayTime;

  // If 24-hour format is selected
  if (is24Hour) {

    // Example: 15:05:08
    displayTime =
      `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;

  } else {

    // Decide AM or PM
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour time
    hours = hours % 12 || 12;

    // Example: 3:05:08 PM
    displayTime =
      `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  // Show time on the webpage
  timeElement.textContent = displayTime;

  // Get day, month and year
  let day = String(now.getDate()).padStart(2, "0");
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let year = now.getFullYear();

  // Show date on the webpage
  dateElement.textContent = `${day}/${month}/${year}`;
}

// Run this code when button is clicked
toggleBtn.addEventListener("click", () => {

  // Change format
  // false → true
  // true → false
  is24Hour = !is24Hour;

  // Change button text
  toggleBtn.textContent = is24Hour
    ? "Switch to 12-hour format"
    : "Switch to 24-hour format";

  // Refresh time immediately
  updateTime();
});

// Show time when page loads
updateTime();

// Update time every 1 second
setInterval(updateTime, 1000);
