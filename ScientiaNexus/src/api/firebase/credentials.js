import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD5PAhfZZcD9P90CgOcaRCNwkiQSHL70OY",
    authDomain: "scientianexus.firebaseapp.com",
    projectId: "scientianexus",
    storageBucket: "scientianexus.appspot.com",
    messagingSenderId: "79250363381",
    appId: "1:79250363381:web:0913c3a105513b5653c6bc",
    measurementId: "G-S17JT44KT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
