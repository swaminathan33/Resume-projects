import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import CreateAccount from './Pages/CreateAccount'
import PrivateRoute from './Components/PrivateRoute'
import { useAuthContext } from './Components/contexts/AuthContext'
import ResetPassword from './Pages/ResetPassword'
const App = () => {
  const {loading} = useAuthContext();

  return (
    <div>
      {
        loading ? <div>loading...</div> : 
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
          </Route>
          {/* <PrivateRoute exact path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<CreateAccount />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
      }
    </div>
  )
}

export default App
