import React, { useEffect, useState } from 'react'
import {loginUrl} from '../Components/config/spotify'
import {useNavigate} from 'react-router-dom'

const SignIn = () => {
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    console.log('inside useeffect')
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')
    if(!token && hash){
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]
      window.location.hash = ''
      window.localStorage.setItem('token',token)
      setToken(token)
      console.log(token)
      navigate('/')
    }
    console.log(token)
  }, [])

  const logout = () =>{
    setToken('')
    window.localStorage.removeItem('token')
    }

  return (
    <div>
      <button><a href={loginUrl}>Login In</a></button>
    </div>
  )
}

export default SignIn
