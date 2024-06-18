import React, { useState } from 'react'
import './Register.css'
import { useGlobalAuthContext } from '../../Components/Context/AuthContext'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {register} = useGlobalAuthContext();
    const navigate = useNavigate();

    const handleRegister = (e) =>{
        e.preventDefault();
        register(email, password)
        navigate('/login')
    }

  return (
    <div className='register_page'>
      <form action="" onSubmit={handleRegister}>
        <h2>Register</h2>
        <div className="email">
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="password">
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button">
        <button type='submit'>Create Account</button>
        </div>
      </form>
    </div>
  )
}

export default Register
