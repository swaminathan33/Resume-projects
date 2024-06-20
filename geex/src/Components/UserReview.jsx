import React from 'react'

const UserReview = () => {
  return (
    <div className='bg-white rounded-2xl w-72'>
      <div className="top">
            John Doe <br />
            4 days ago
      </div>
      <div className="para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime libero, impedit officiis nobis perspiciatis nulla mollitia excepturi laboriosam omnis, fuga dolorem! Delectus aliquid enim consequuntur pariatur, labore dolores repellat quaerat.
      </div>
      <div className="buttons">
            <button>Archive</button>
            <button>Accept</button>
      </div>
    </div>
  )
}

export default UserReview
