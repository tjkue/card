// Get the parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get individual parameters or use default values
const name = urlParams.get('name') || 'Your Name';
const email = urlParams.get('email') || 'your.email@example.com';
const whatsapp = urlParams.get('whatsapp') || '+123456789';
const phone = urlParams.get('phone') || '+987654321';
const location = urlParams.get('location') || 'Your City, Country';

// Update the business card details
document.getElementById('name').innerText = name;
document.getElementById('email').innerText = `Email: ${email}`;
document.getElementById('whatsapp').innerText = `WhatsApp: ${whatsapp}`;
document.getElementById('phone').innerText = `Phone: ${phone}`;
document.getElementById('location').innerText = `Location: ${location}`;
