import React, { useState } from 'react'
import './Css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Components/contexts/AuthContext'
const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [msg, setMessage] = useState('Reset Password')
  const {resetPassword, loading, setLoading} = useAuthContext();
  const navigate = useNavigate();

    const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        setMessage('Check Your Mail box')
        await resetPassword(email)
    }catch(err){
        console.log(err)
    }
    setTimeout(() => {
        navigate('/login')
    }, 5000)
}

  return (
    <div className='login'>
          <div className="content">
          <div className="title">Social Demo</div>
          <p>Connect With friends and the world around you on social Social Demo.</p>
      </div>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <div className="email"><input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="signup">
            <button type='submit'><b>{msg}</b></button>
          </div>
          <div className="login">
            <button><Link to={'/register'}>Create Account</Link></button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ResetPassword
