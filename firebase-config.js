import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8Km2yM4VC6O6yPYHjIfhAWPEo8F2UF8c",
    authDomain: "rpgsnz-efd94.firebaseapp.com",
    projectId: "rpgsnz-efd94",
    storageBucket: "rpgsnz-efd94.firebasestorage.app",
    messagingSenderId: "561917149839",
    appId: "1:561917149839:web:c799a00fb91ad2da7ea6fa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const EMAIL_ADMIN_SUPREMO = "teu.email.admin@gmail.com";