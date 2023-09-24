import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

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
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



let text = document.getElementById('text');
let image = document.getElementById('image');

const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;
const explore = document.getElementById('em');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let maxMargin = bodyHeight - 350; // Define your maximum margin value
    let minMargin = 0;   // Define your minimum margin value

    // Calculate the new margin value
    let newMargin = value * 2.5;

    // Check if the new margin is within the desired range
    if (newMargin >= minMargin && newMargin <= maxMargin) {
        text.style.marginTop = newMargin + 'px';
    }

});

explore.addEventListener('click', () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.email);
            window.location.href = "..//Places/index.html";
          // ...
        } else {
            window.location.href = "..//Hackathon%20Signup/Login.html";

          // User is signed out
          // ...
            
            console.log("no user");
        }
      });
});

let images = ['mall.png','qutub.jpg','lotus.jpg','indiagate.jpg','red.jpg','res.png','1.jpg','g.png','a.jpg','j.jpg']

setInterval(() => {
    let random = Math.floor(Math.random() * images.length);
    image.src= images[random];
},1500);

