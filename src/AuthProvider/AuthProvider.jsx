import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const CreateProvider = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // registration with email and password
    const registrationEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // registration with email and password
    const logInEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //  google registration
    const provider = new GoogleAuthProvider();

    const googleRegister = () => {
        return signInWithPopup(auth, provider)
    }


    // mannage user 

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, [])

    const info = {
        registrationEmailPass,
        logInEmailPass,
        googleRegister,
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