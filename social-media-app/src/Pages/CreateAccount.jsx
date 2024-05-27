import React, {useState} from 'react'
import './Css/CreateAccount.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Components/contexts/AuthContext'

const CreateAccount = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signIn, loading, setLoading} = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      signIn(email, password)
    }, 1500)
    setLoading(false)
    navigate('/')
  }

  return (
    <div className='createaccount'>
      {
        loading ? <div>loading...</div>
        : 
        <>
          <div className="content">
          <div className="title">Social Demo</div>
          <p>Connect With friends and the world around you on social Social Demo.</p>
      </div>
      <div className="form" onSubmit={handleSubmit}>
        <form action="">
          <div className="username"><input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} /></div>
          <div className="email"><input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="password"><input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /></div>
          <div className="password"><input type="passwordagain" placeholder='Password again' /></div>
          <div className="signup">
            <button type='submit'>Signup</button>
          </div>
          <div className="login">
            <button><Link to={'/login'}>Login</Link></button>
          </div>

        </form>
      </div>
        </>
      }
    </div>
  )
}

export default CreateAccount
