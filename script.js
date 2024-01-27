// Get the name from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

// Update the name on the business card
document.getElementById('name').innerText = name || 'Your Name';
