// Get the parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data') || '';

// Decode the parameter and split it into individual values
const decodedData = decodeURIComponent(encodedData);
const values = decodedData.split('&');

// Get individual values or use default values
const name = values[0] || 'Your Name';
const email = values[1] || 'your.email@example.com';
const whatsapp = values[2] || '+123456789';
const phone = values[3] || '+987654321';
const location = values[4] || 'Your City, Country';

// Update the business card details
document.getElementById('name').innerText = name;
document.getElementById('email').innerText = `Email: ${email}`;
document.getElementById('whatsapp').innerText = `WhatsApp: ${whatsapp}`;
document.getElementById('phone').innerText = `Phone: ${phone}`;
document.getElementById('location').innerText = `Location: ${location}`;
