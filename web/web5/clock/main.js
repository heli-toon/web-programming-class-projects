function updateClock() {
    const now = new Date();

    // Extract hours, minutes, and seconds and ensure two digits (e.g., 01 instead of 1)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Create the time string using a template literal
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Get the clock element and update its text content
    const clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;
}

// Run the function immediately and then every 1000 milliseconds (1 second)
updateClock(); 
setInterval(updateClock, 1000);