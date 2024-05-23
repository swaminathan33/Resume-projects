import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sign_up = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((user) => console.log(user))
        .catch((err) => console.log(err))
    }

  return (
    <div>
      <form action="" onSubmit={sign_up}>
        <h2>Create Account</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
