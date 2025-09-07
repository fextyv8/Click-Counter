// Declare counter (if is stored a number, it saves it)
let count = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

// Obtain elements
const CLICK = document.getElementById('clickButton');
const COUNTER = document.getElementById('clickCounter');
const RESET = document.getElementById('resetButton');

// Show the charged counter
COUNTER.textContent = count;

// Add element to button
CLICK.addEventListener('click', function() {
    count++;
    COUNTER.textContent = count;
    localStorage.setItem('clickCount', count); // Save counter on memory
});

RESET.addEventListener('click', function() {
    count = 0;
    COUNTER.textContent = count;
    localStorage.setItem('clickCounter', count); // Reset counter on memory
});
