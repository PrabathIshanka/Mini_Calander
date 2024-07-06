const month = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");

const currentDate = new Date();

month.innerHTML = currentDate.toLocaleString("en", {
  month: "long",
});

dayName.innerHTML = currentDate.toLocaleString("en", {
  weekday: "long",
});

dayNumber.innerHTML = currentDate.getDate();

year.innerHTML = currentDate.getFullYear();
