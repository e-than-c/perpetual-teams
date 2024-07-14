// script.js

document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('homepage-input');
    // Example: Add event listener for input event
    inputBox.addEventListener('input', function(event) {
        console.log('Input value:', inputBox.value);
        // Example: Limit input to 10 characters
        if (inputBox.value.length > 8) {
            inputBox.value = "";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('spreadsheet-input');
    // Example: Add event listener for input event
    inputBox.addEventListener('input', function(event) {
        console.log('Input value:', inputBox.value);
        // Example: Limit input to 10 characters
        if (inputBox.value.length > 8) {
            inputBox.value = "";
        }
    });
});