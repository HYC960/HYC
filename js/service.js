document.addEventListener("DOMContentLoaded", () => {
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
    import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
  
    const firebaseConfig = {
      apiKey: "AIzaSyDnR7U8nnWWOjMalysup_IMknnr0pG9KQI",
      authDomain: "voxaabykaif.firebaseapp.com",
      databaseURL: "https://voxaabykaif-default-rtdb.firebaseio.com",
      projectId: "voxaabykaif",
      storageBucket: "voxaabykaif.appspot.com",
      messagingSenderId: "1038648133788",
      appId: "1:1038648133788:web:a320cbed283c7e4d664559",
    };
  
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const servicesRef = ref(db, "services");
    const serviceContainer = document.getElementById("serviceContainer");
  
    // Fetch and display services
    onValue(servicesRef, (snapshot) => {
      serviceContainer.innerHTML = "";
      const services = snapshot.val();
      if (services) {
        Object.values(services).forEach((service) => {
          const li = document.createElement("li");
          li.innerHTML = `
            ${service.name} - ₹${service.price} <br>
            <img src="${service.imageUrl}" alt="${service.name}" width="100"><br>
            <p>${service.description}</p>
          `;
          serviceContainer.appendChild(li);
        });
      }
    });
  });
  