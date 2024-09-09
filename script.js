// Function to update the hash in the URL
function updateHash(id) {
    window.location.hash = id;
}

// Function to check the hash on page load and set the corresponding radio button
function checkHashOnLoad() {
    const hash = window.location.hash.substring(1); // Remove the '#' from the hash
    if (hash) {
        const radioButton = document.getElementById(hash);
        if (radioButton) {
            radioButton.checked = true;
        }
    }
}

// Initialization function to set up event listeners and check the hash
function init() {
    // Add event listeners to all radio buttons to update the hash when clicked
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            updateHash(radio.id);
        });
    });

    // Check the hash on page load
    checkHashOnLoad();
    console.log('Script loaded');
}

// Call the init function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);