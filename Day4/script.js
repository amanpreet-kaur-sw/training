// JSON data representing Myntra information
const myntraData = {
    "companyDescription": "An Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India.",
    "aboutMyntra": "Myntra specializes in fashion and lifestyle products, offering a wide range of clothing, footwear, and accessories.",
    "images": [
        { "src": "myntra_logo.png", "alt": "Myntra Logo" },
        { "src": "myntra_store.jpg", "alt": "Myntra Storefront" }
    ]
};

// Function to populate content from JSON data
function populateContent() {
    // Company description in header
    document.getElementById('company-description').textContent = myntraData.companyDescription;
    
    // About Myntra section
    document.getElementById('about-myntra').textContent = myntraData.aboutMyntra;
    
    // Image gallery section
    const imageGallery = document.getElementById('image-gallery');
    myntraData.images.forEach(image => {
        const figureElement = document.createElement('figure');
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.classList.add('gallery-image');
        
        const figcaptionElement = document.createElement('figcaption');
        figcaptionElement.textContent = image.alt; // Caption text
        
        figureElement.appendChild(imgElement);
        figureElement.appendChild(figcaptionElement);
        
        imageGallery.appendChild(figureElement);
    });
}

// Call the function to populate content on page load
window.onload = populateContent;
