document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for cars (replace it with your actual data)
    const cars = [
        { model: 'Baleno', price: 'Rs. 1400/day', image: 'images/BalenoNewModel.png' },
        { model: 'Brezza 2', price: 'Rs. 2000/day', image: 'images/Brezza.png' },
        { model: 'Creta', price: 'Rs. 2200/day', image: 'images/CretaManual.png' },
        { model: 'Ertiga', price: 'Rs. 2500/day', image: 'images/ErtigaManual.png' },
        { model: 'I20', price: 'Rs. 1500/day', image: 'images/I20NewModel.png' },
        { model: 'Swift', price: 'Rs. 1500/day', image: 'images/SwiftManual.png' },
        { model: 'Thar', price: 'Rs. 4500/day', image: 'images/TharConvertible.png' },
        // Add more cars as needed
    ];

    // Get the car list container
    const carListContainer = document.getElementById('car-list');

    // Render car cards
    cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('car-card');
        card.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h3>${car.model}</h3>
            <p>${car.price}</p>
            <button onclick="openWhatsApp()">WhatsApp</button>
            <button onclick="callPhone()">Phone</button>
        `;
        carListContainer.appendChild(card);
    });

    function updateSectionContent(sectionId, content) {
        const sectionContent = document.getElementById(`${sectionId}-content`);
        if (sectionContent) {
            const contentText = content.content;
            sectionContent.innerHTML = contentText;
        } else {
            console.error(`Section content not found for ID: ${sectionId}`);
        }
    }
    
    async function fetchAndDisplayContent(sectionId, contentUrl) {
        try {
            const response = await fetch(contentUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch content. Status: ${response.status}`);
            }
    
            const content = await response.json(); // Assuming content is stored as JSON
            updateSectionContent(sectionId, content);
        } catch (error) {
            console.error('Error fetching or displaying content:', error);
        }
    }
    
    // Event listeners for navigation links
    document.getElementById('services-link').addEventListener('click', function () {
        fetchAndDisplayContent('services', 'content/services.json');
    });
    
    document.getElementById('contact-link').addEventListener('click', function () {
        fetchAndDisplayContent('contact', 'content/contact.json');
    });
    
    document.getElementById('about-link').addEventListener('click', function () {
        fetchAndDisplayContent('about', 'content/about.json');
    });
    
});

function openWhatsApp() {
    // Replace '1234567890' with the actual WhatsApp number of the owner
    const ownerWhatsAppNumber = '8806470744';

    // Replace 'Hello! I'm interested in renting a car.' with your predefined message
    const message = encodeURIComponent("Hello! I'm interested in renting a car.");

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${ownerWhatsAppNumber}?text=${message}`;

    // Open the WhatsApp URL in a new tab or window
    window.open(whatsappURL, '_blank');
}


function callPhone() {
    // Replace '1234567890' with the actual phone number of the owner
    const ownerPhoneNumber = '8806470744';

    // Construct the phone call URL
    const phoneCallURL = `tel:${ownerPhoneNumber}`;

    // Open the phone call URL
    window.open(phoneCallURL);
}

