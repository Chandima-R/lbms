// @ts-ignore
import {getApp, initializeApp} from "@firebase/app";
// @ts-ignore
import {getAuth, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBxKdXTFWLB43jR8yDc1ex1OxNlcGqqWvI",
    authDomain: "lbms-e4175.firebaseapp.com",
    projectId: "lbms-e4175",
    storageBucket: "lbms-e4175.appspot.com",
    messagingSenderId: "574336396832",
    appId: "1:574336396832:web:cf04e1b4af68fbcca25645"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(getApp())
