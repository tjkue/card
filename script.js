// Get the parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const nameValue = urlParams.get('name') || 'name';
const emailValue = urlParams.get('email') || 'email';
const phoneValue = urlParams.get('phone') || 'phone';
const locationValue = urlParams.get('location') || 'location';

// Split the 'location' parameter into 'street', 'town', and 'country'
const [street, town, country] = locationValue.split(',');

// Update the business card details
document.getElementById('front-name').innerText = nameValue;
document.getElementById('back-name').innerText = nameValue;
document.getElementById('email').innerHTML = `E-Mail: <a href="mailto:${emailValue}">${emailValue}</a>`;
document.getElementById('phone').innerHTML = `Tel: <a href="tel:${phoneValue.replace(/\s/g, '')}">${phoneValue}</a>`;
document.getElementById('street').innerText = street.trim();
document.getElementById('town').innerText = town.trim();
document.getElementById('country').innerText = country.trim();
