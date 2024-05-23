import React from 'react'
import Signin from '../Comp/auth/Signin'
import Signup from '../Comp/auth/Signup'
import Authdetails from '../Comp/Authdetails'

const Account = () => {
  return (
    <div>
      <Signin />
      <Signup />
      <Authdetails />
    </div>
  )
}

export default Account
