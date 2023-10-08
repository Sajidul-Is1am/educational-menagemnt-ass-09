import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';

export const CreateProvider = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // registration with email and password
    const registrationEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // registration with email and password
    const logInEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //  google registration
    const provider = new GoogleAuthProvider();

    const googleRegister = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // mannage user 

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    // update profile
    const profileUpdate = (userName,profilePicture) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: profilePicture
        })
    }



    //  main provider obejct start here =============================

    const info = {
        registrationEmailPass,
        logInEmailPass,
        googleRegister,
        profileUpdate,
        loading,
        user
    }




    return (
        <CreateProvider.Provider value={info}>
            {children}
        </CreateProvider.Provider>
    )


};



AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthProvider;