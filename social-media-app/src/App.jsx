import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import CreateAccount from './Pages/CreateAccount'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
