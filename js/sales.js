import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnR7U8nnWWOjMalysup_IMknnr0pG9KQI",
  authDomain: "voxaabykaif.firebaseapp.com",
  databaseURL: "https://voxaabykaif-default-rtdb.firebaseio.com",
  projectId: "voxaabykaif",
  storageBucket: "voxaabykaif.appspot.com",
  messagingSenderId: "1038648133788",
  appId: "1:1038648133788:web:a320cbed283c7e4d664559",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// DOM Element
const itemsContainer = document.getElementById("items-container");

// Fetch Items from Firebase
function fetchAndRenderItems() {
  const itemsRef = ref(database, "items");

  onValue(itemsRef, (snapshot) => {
    const data = snapshot.val();
    const items = data ? Object.values(data) : [];
    renderItems(items);
  });
}

// Render Items
function renderItems(items) {
  itemsContainer.innerHTML = ""; // Clear previous content

  if (items.length === 0) {
    itemsContainer.innerHTML = "<p>No items available for sale.</p>";
    return;
  }

  items.forEach((item) => {
    const starRatingHTML = getStarRatingHTML(item.stars);

    const itemCard = `
      <div class="item-card">
        <img src="${item.imageURL}" alt="${item.title}" class="item-image" />
        <div class="item-details">
          <h3>${item.title}</h3>
          <p class="price">₹${item.price}</p>
          <div class="stars">${starRatingHTML}</div>
          <p class="description">${item.description}</p>
        </div>
      </div>
    `;
    itemsContainer.innerHTML += itemCard;
  });
}

// Generate Star Rating HTML
function getStarRatingHTML(stars) {
  const filledStars = Math.round(stars); // Number of filled stars
  const unfilledStars = 5 - filledStars; // Number of unfilled stars

  let starsHTML = "";

  for (let i = 0; i < filledStars; i++) {
    starsHTML += '<span>&#9733;</span>'; // Filled star (★)
  }

  for (let i = 0; i < unfilledStars; i++) {
    starsHTML += '<span class="unfilled">&#9733;</span>'; // Unfilled star (★, gray)
  }

  return starsHTML;
}

// Initialize Fetch
fetchAndRenderItems();
