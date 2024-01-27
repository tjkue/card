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

function toggleCard() {
    document.querySelector('.business-card').classList.toggle('show-back');
}

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Function to add "Pressen" text to the front card after 5 seconds
    function addPressenText() {
        setTimeout(function () {
            var frontCard = document.querySelector(".front");
            var pressenText = document.createElement("p");
            pressenText.textContent = "Pressen";
            pressenText.style.fontSize = "24px";
            frontCard.appendChild(pressenText);
        }, 5000);
    }

    // Add click event listener to the card
    document.querySelector(".business-card").addEventListener("click", toggleCard);

    // Call the function to add "Pressen" text after 5 seconds
    addPressenText();
});
