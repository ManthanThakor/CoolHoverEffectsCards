// Array of image URLs
const images = [
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  "./backgrounds/CarHomePage.jpg",
  // Add more image URLs here
];

// Reference to the card container
const cardContainer = document.getElementById("card-container");

// Function to render cards
function renderCards() {
  images.forEach((image) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${image}" alt="Anime Image">`;
    cardContainer.appendChild(card);
  });
}

// Call the function to render cards
renderCards();
