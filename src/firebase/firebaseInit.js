import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAfk3fn0KxPSvCu2uaY4GAZYZ2WHQT2eUg",
    authDomain: "fireblogs-a5f5a.firebaseapp.com",
    projectId: "fireblogs-a5f5a",
    storageBucket: "fireblogs-a5f5a.appspot.com",
    messagingSenderId: "162591894380",
    appId: "1:162591894380:web:98e4d22b5e159ac7cb2149"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { timestamp };
export default firebaseApp.firestore();