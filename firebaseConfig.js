import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore'
import { getReactNativePersistence, initializeAuth, getAuth } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyBJD9Qu61yVW-O9h_cifiI6_75Z2Qu--Bg",
    authDomain: "ecommerce-react-native-d66b8.firebaseapp.com",
    projectId: "ecommerce-react-native-d66b8",
    storageBucket: "ecommerce-react-native-d66b8.appspot.com",
    messagingSenderId: "55999679982",
    appId: "1:55999679982:web:197e57911a1c91f036d2ff",
    measurementId: "G-SG75MH6ZT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})
// export const auth = getAuth();

export const db = getFirestore(app);

export const userRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');