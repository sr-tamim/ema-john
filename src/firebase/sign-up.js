import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";


const signUp = (auth, name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(() => updateProfile(auth.currentUser, {
            displayName: name
        }))
};

export default signUp;