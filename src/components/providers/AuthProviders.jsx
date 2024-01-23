import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);

    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        gitHubSignIn


    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false)

        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;