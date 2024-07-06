// Get references to the elements in the HTML by their IDs
const month = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");

// Create a new Date object representing the current date and time
const currentDate = new Date();

// Set the innerHTML of the month element to the current month name in long format (e.g., "January")
month.innerHTML = currentDate.toLocaleString("en", {
  month: "long",
});

// Set the innerHTML of the dayName element to the current weekday name in long format (e.g., "Monday")
dayName.innerHTML = currentDate.toLocaleString("en", {
  weekday: "long",
});

// Set the innerHTML of the dayNumber element to the current day of the month (e.g., 1, 2, 3)
dayNumber.innerHTML = currentDate.getDate();

// Set the innerHTML of the year element to the current year (e.g., 2024)
year.innerHTML = currentDate.getFullYear();
