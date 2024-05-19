import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
