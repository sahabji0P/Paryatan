import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbw7x1Kt391Whp869oi6vPYWf-RhgnYrA",
  authDomain: "parytan-5b892.firebaseapp.com",
  projectId: "parytan-5b892",
  storageBucket: "parytan-5b892.appspot.com",
  messagingSenderId: "619482587917",
  appId: "1:619482587917:web:2dea734e953e0bcf3e8644",
  measurementId: "G-3TJQG69NL7"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("number").value;
  const date = document.getElementById("date").value;
  const nationality = document.getElementById("nationality").value;

  // Check if any of the fields are empty
  if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || date.trim() === "" || nationality.trim() === "") {
    alert("Please fill in all fields.");
    return; // Don't proceed with submission
  }

  // If all fields are filled, submit the data to Firebase
  set(ref(db, 'Bookings/' + phone), {
    name: name,
    email: email,
    phone: phone,
    date: date,
    nationality: nationality
  });

  alert("Your bookings are successful!");
  document.getElementById("form").reset();
});


