# Mini Calendar

## Project Overview
This project is a simple mini calendar web application that displays the current date, including the month name, day name, day number, and year. It uses HTML, CSS, and JavaScript to render the calendar.

## Features
- Displays the current month name, day name, day number, and year.
- Styled using CSS for a clean and modern look.
- Utilizes JavaScript to dynamically update the date information.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/PrabathIshanka/mini-calendar.git
    ```

2. Navigate to the project directory:
    ```sh
    cd mini-calendar
    ```

## Usage
Open the `index.html` file in your web browser to view the mini calendar.

### File Structure

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mini Calendar</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="calendar-container">
      <p class="month-name" id="month-name"></p>
      <p class="day-name" id="day-name"></p>
      <p class="day-number" id="day-number"></p>
      <p class="year" id="year"></p>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```
### app.js
```js
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

```
### style.css
```css
/* Set the background color of the entire body, height to full viewport height, 
   center content vertically and horizontally, remove default margin, and set font */
body {
  background-color: navajowhite;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0;
  align-items: center;
  font-family: cursive;
}

/* Style the calendar container with background color, dimensions, border radius,
   center text, box shadow for depth effect, and hide overflow */
.calender-container {
  background-color: white;
  height: 300px;
  width: 300px;
  border-radius: 30px;
  text-align: center;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/* Style the month name with background color, text color, font size, weight, 
   and padding for spacing */
.month-name {
  margin: 0;
  background-color: chocolate;
  color: bisque;
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
}

/* Style the day name with text color and font size */
.day-name {
  color: darkgray;
  font-size: 20px;
}

/* Style the day number with text color, font size, margin, and weight */
.day-number {
  color: darkgray;
  font-size: 80px;
  margin: 0;
  font-weight: bold;
}

/* Style the year with text color, font size, margin for spacing, and font weight */
.year {
  color: darkgray;
  font-size: 20px;
  margin: 20px 0;
  font-weight: 500;
}


```
