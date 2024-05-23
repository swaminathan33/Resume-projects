import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sign_In = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((user) => console.log(user))
        .catch((err) => console.log(err))
    }
  return (
    <div>
      <form action="" onSubmit={sign_In}>
        <h2>Log in</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default Signin
