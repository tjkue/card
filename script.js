// Get the parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name') || 'default name';
const email = urlParams.get('email') || 'default email';
const phone = urlParams.get('phone') || 'default phome';
const location = urlParams.get('location') || 'default location';

// Update the business card details
document.getElementById('name').innerText = name;
document.getElementById('email').innerText = `Email: ${email}`;
document.getElementById('phone').innerText = `Phone: ${phone}`;
document.getElementById('location').innerText = `Location: ${location}`;
