// Get the parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const nameValue = urlParams.get('name') || 'default name';
const emailValue = urlParams.get('email') || 'default email';
const phoneValue = urlParams.get('phone') || 'default phone';
const locationValue = urlParams.get('location') || 'default location';

// Split the 'location' parameter into 'street', 'town', and 'country'
const [street, town, country] = locationValue.split(',');

// Update the business card details
document.getElementById('name').innerText = nameValue;
document.getElementById('email').innerText = `E-Mail: ${emailValue}`;
document.getElementById('phone').innerText = `Telefon: ${phoneValue}`;
document.getElementById('street').innerText = street.trim();
document.getElementById('town').innerText = town.trim();
document.getElementById('country').innerText = country.trim();
