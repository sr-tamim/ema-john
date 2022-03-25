// Import the functions you need from the SDKs you need
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import firebaseConfig from "../firebase/firebase.config";
import signInGoogle from "../firebase/sign-in-google";
import signUp from "../firebase/sign-up";

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const [error, setError] = useState(null);

    onAuthStateChanged(auth, newUser => {
        newUser ? setUser(newUser) : user && setUser(null);
        user && setError(null);
        userLoading && setUserLoading(false);
    })

    const logout = () => signOut(auth).catch(err => setError(err));
    const signup = (name, email, password) => signUp(auth, name, email, password).catch(err => setError(err));
    const emailLogin = (email, password) => signInWithEmailAndPassword(auth, email, password).catch(err => setError(err));
    const googleLogin = () => signInGoogle(auth).catch(err => setError(err));

    return {
        user, setUser, error, setError, userLoading,
        googleLogin,
        logout, signup, emailLogin
    }
};

export default useFirebase;
