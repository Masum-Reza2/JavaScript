// const date = new Date();
// console.log(date.getFullYear());  // Get the year (e.g., 2023)
// console.log(date.getMonth());     // Get the month (0-11, where 0 is January)
// console.log(date.getDate());      // Get the day of the month (1-31)
// console.log(date.getHours());     // Get the hour (0-23)
// console.log(date.getMinutes());   // Get the minute (0-59)
// console.log(date.getSeconds());   // Get the second (0-59)
// const currentDate = new Date();
// console.log(currentDate);
// const specificDate = new Date(2023, 5, 1); // Year, Month (zero-based), Day
// console.log(specificDate);

// Formatting Dates:
// const date = new Date();
// console.log(date.toDateString());     // Get a human-readable date string (e.g., "Wed Jun 01 2023")
// console.log(date.toLocaleDateString()); // Get a localized date string (e.g., "6/1/2023" based on your locale)
// console.log(date.toLocaleTimeString()); // Get a localized time string (e.g., "10:30:15 AM" based on your locale)
// console.log(date.toLocaleString());    // Get a localized date and time string (e.g., "6/1/2023, 10:30:15 AM" based on your locale)







let clock = document.getElementById('clock');
let watch = () => {
    clock.innerHTML = new Date().toLocaleTimeString();
}

let timer = setInterval(watch,1000)