// Get the parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const nameValue = urlParams.get('name') || 'default name';
const emailValue = urlParams.get('email') || 'default email';
const phoneValue = urlParams.get('phone') || 'default phone';
const locationValue = urlParams.get('location') || 'default location';

// Update the business card details
document.getElementById('name').innerText = nameValue;
document.getElementById('email').innerText = `Email: ${emailValue}`;
document.getElementById('phone').innerText = `Phone: ${phoneValue}`;
document.getElementById('location').innerText = `Location: ${locationValue}`;
