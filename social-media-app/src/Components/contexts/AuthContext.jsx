import React, { useContext, useEffect, useState } from "react";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail} from 'firebase/auth'
import { auth } from "../../firebase";

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return auth.signOut()
    }
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        logIn,
        signIn,
        currentUser,
        loading,
        setLoading,
        logOut,
        resetPassword
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}