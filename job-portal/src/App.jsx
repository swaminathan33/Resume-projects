import React from 'react'
import './App.css'
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import JobDescription from './Pages/JobDescription/JobDescription'
import Home from './Pages/Home/Home'
import Jobs from './Pages/Jobs/Jobs'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobinfo/:id' element={<JobDescription />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
