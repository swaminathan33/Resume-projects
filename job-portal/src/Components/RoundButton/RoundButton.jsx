import React from 'react'
import './RoundButton.css'

const RoundButton = ({job, blue}) => {
  return (
    <div className={`roundbutton`}>
        <button className={`${blue ? 'blue' : ''}`}>{job}</button>
    </div>
  )
}

export default RoundButton
