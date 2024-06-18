import React, { createContext, useContext, useEffect, useState } from "react";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from "../../firebase";
const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState()

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        auth.signOut();
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    return (
        <AuthContext.Provider value={{login, register, currentUser, setCurrentUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useGlobalAuthContext = () =>{
    return  useContext(AuthContext)
}

export {AuthContext, AuthProvider};