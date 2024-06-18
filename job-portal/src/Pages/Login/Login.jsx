import React, { useState } from 'react'
import './Login.css'
import { useGlobalAuthContext } from '../../Components/Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useGlobalAuthContext();
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault();
        login(email, password)
        navigate('/')
    }
  return (
    <div className='login_page'>
      <form action="" onSubmit={handleLogin}>
        <h2>LOGIN </h2>
        <div className="email">
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="password">
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button">
        <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
