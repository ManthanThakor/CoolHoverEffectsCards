const data = [
  {
    title: "Rem",
    image: "https://wallpapercave.com/wp/wp9006584.jpg",
    description: "A loyal and kind-hearted demon maid.",
  },
  {
    title: "Zero Two",
    image: "https://wallpapercave.com/wp/wp10524580.jpg",
    description: "A mysterious and fearless pilot.",
  },
  {
    title: "Nezuko",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUM13vgchEO3wO7SERt--ReNcdGVUlCTfNAQsfMiuefoufsZMRsXN_w8SzvGXz5v-VaU&usqp=CAU",
    description: "A gentle demon with a strong will.",
  },
  {
    title: "Asuna",
    image: "https://wallpapercave.com/wp/wp9655915.jpg",
    description: "A skilled swordswoman and loving partner.",
  },
  {
    title: "Mikasa",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg",
    description: "A fierce protector with unmatched strength.",
  },
  {
    title: "Hinata",
    image: "https://wallpapercave.com/wp/wp9655915.jpg",
    description: "A shy yet determined ninja.",
  },
  {
    title: "Rukia",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg",
    description: "A noble soul reaper with a strong sense of justice.",
  },
  {
    title: "Erza",
    image: "https://wallpapercave.com/wp/wp9655915.jpg",
    description: "A powerful and fearless mage.",
  },
  {
    title: "Saber",
    image: "https://wallpapercave.com/wp/wp9655915.jpg",
    description: "A noble and valiant knight.",
  },
  {
    title: "Yoruichi",
    image: "https://wallpapercave.com/wp/wp9006584.jpg",
    description: "A swift and cunning warrior.",
  },
  {
    title: "Kallen",
    image: "https://wallpapercave.com/wp/wp10524580.jpg",
    description: "A skilled pilot and freedom fighter.",
  },
  {
    title: "Mai",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUM13vgchEO3wO7SERt--ReNcdGVUlCTfNAQsfMiuefoufsZMRsXN_w8SzvGXz5v-VaU&usqp=CAU",
    description: "A calm and collected shrine maiden.",
  },
  {
    title: "Raphtalia",
    image: "https://wallpapercave.com/wp/wp9655915.jpg",
    description: "A loyal and brave demi-human.",
  },
  {
    title: "Tohru",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg",
    description: "A kind-hearted dragon in human form.",
  },
  {
    title: "Yotsuba",
    image: "https://wallpapercave.com/wp/wp9655915.jpg",
    description: "A cheerful and energetic girl.",
  },
  {
    title: "Yotsuba",
    image: "https://wallpapercave.com/wp/wp9655915.jpg",
    description: "A cheerful and energetic girl.",
  },
];

const galleryContainer = document.getElementById("gallery-container");

// Function to create a gallery row with 8 cards
function createGalleryRow(items) {
  const galleryRow = document.createElement("div");
  galleryRow.className = "gallery-sec-anime";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "anime-card";

    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="anime-card-title">${item.title}</div>
        <div class="anime-card-overlay">${item.description}</div>
      `;

    galleryRow.appendChild(card);
  });

  galleryContainer.appendChild(galleryRow);
}

// Split data into chunks of 8 and create rows
const chunkSize = 6;
for (let i = 0; i < data.length; i += chunkSize) {
  const chunk = data.slice(i, i + chunkSize);
  createGalleryRow(chunk);
}

// Tab functionality for code examples
function openTab(tabId) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show the selected tab content and mark the button as active
  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}

// Function to copy code
function copyCode(tabId) {
  const codeElement = document.querySelector(`#${tabId} code`);
  const textToCopy = codeElement.textContent;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      const copyBtn = document.querySelector(`#${tabId} .copy-btn`);
      const originalText = copyBtn.textContent;

      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      alert("Failed to copy code to clipboard");
    });
}
