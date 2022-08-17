import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "firebase/auth";




    const firebaseConfig = {
      apiKey: "AIzaSyCg1noco1ytivgRUmYLJGpyObL1JdO2wQo",
      authDomain: "blogs-bec9a.firebaseapp.com",
      projectId: "blogs-bec9a",
      storageBucket: "blogs-bec9a.appspot.com",
      messagingSenderId: "862989417666",
      appId: "1:862989417666:web:7e25922bd38050ef8a0f5b"
    };
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export  const db = getFirestore(app)
  export const storage = getStorage(app)
  export const auth = getAuth(app);