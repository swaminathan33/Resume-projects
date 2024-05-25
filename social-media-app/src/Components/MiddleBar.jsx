import React from 'react'
import CreatePost from './CreatePost'
import Feed from './Feed'
const MiddleBar = () => {
  return (
    <div className='middlebar'>
      <CreatePost />
      <Feed />
    </div>
  )
}

export default MiddleBar
