import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth} from "../../../firebase.js"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Slices/AuthDetails.js';
import { useNavigate } from 'react-router-dom';

export default function useAuthentication(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (email, password) =>{
        const {user} = await signInWithEmailAndPassword(auth, email, password)
        if(user){
            const authUser = {
                email: user.email,
                uid: user.uid,
                name: user.displayName
            }
            // console.log('auth',authUser)
            dispatch(addUser(authUser))
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
            navigate('/')
        }
    }
    
    const logout = async () =>{
        await signOut(auth)
        console.log('logged out', auth)
        dispatch(removeUser())
        navigate('/login')

    }

    const googleAuth = async () =>{
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth,provider)
        if(user){
            const authUser = {
                email: user.email,
                uid: user.uid,
                name: user.displayName
            }
            dispatch(addUser(authUser))
            navigate('/')
        }
    }

    return {login, signup, logout, googleAuth}
}
