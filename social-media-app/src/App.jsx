import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Account from './Pages/Account'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/account' element={<Account />} />
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
