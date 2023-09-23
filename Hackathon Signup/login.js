import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", (e) => {

    e.preventDefault();
    
    const email = document.getElementById("emailLogin").value.trim();
    const password = document.getElementById("passLogin").value.trim();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert(user.email+" Logged In");
            document.getElementById("loginForm").reset();
            

            window.location.href = "..//Places/index.html";



            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });

});