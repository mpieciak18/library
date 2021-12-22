import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD27BaorWNp_7HTAcFpfcQJEU2k6O75HpU",
    authDomain: "library-92910.firebaseapp.com",
    projectId: "library-92910",
    storageBucket: "library-92910.appspot.com",
    messagingSenderId: "778596230620",
    appId: "1:778596230620:web:031ba101402eb1b8185b19"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  export { firebaseApp };