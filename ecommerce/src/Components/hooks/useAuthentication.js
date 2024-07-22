import React from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signOut, signInWithPopup,  } from 'firebase/auth'
import {auth} from '../../../firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Slices/reducers/authDetails';

export default function useAuthentication(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async (email, password) =>{
        const {user} = await signInWithEmailAndPassword(auth, email, password)
        if(user){
            const authUser = {
                email: user.email,
                uid: user.uid,
                name: user.displayName
            }
            dispatch(addUser(authUser))
            localStorage.setItem('auth',JSON.stringify(authUser))
            navigate('/')
        }
    }
    const signup = async (email, password) =>{
        const {user} = await createUserWithEmailAndPassword(auth, email, password)
        if(user){
            const authUser = {
                email: user.email,
                uid: user.uid,
                name: user.displayName
            }
            dispatch(addUser(authUser))
            localStorage.setItem('auth',JSON.stringify(authUser))
            navigate('/')
        }
    }

    const logout = async () =>{
        localStorage.removeItem('auth')
        await signOut(auth)
        console.log('logged out', auth)
        dispatch(removeUser())
        navigate('/login')
    }

    const googleAuth = async () =>{
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider)
        if(user){
            const authUser = {
                email: user.email,
                uid: user.uid,
                name: user.displayName
            }
            dispatch(addUser(authUser))
            localStorage.setItem('auth',JSON.stringify(authUser))
            navigate('/')
        }
    }

    return {login, signup, googleAuth, logout}
}
