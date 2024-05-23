import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'

const Authdetails = () => {
    const [authUser, setAuthUser] = useState(null)
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })
        return(() => {
            listen()
        })
    }, [])
  return (
    <div>
      {
        authUser ? <div>
            fsad
        </div> : 'Logged out'
      }
    </div>
  )
}

export default Authdetails
