import React, { useState } from 'react'
import Post from './Post'

const Feed = () => {
  const [feedData, setFeedData] = useState([
    {
      text:'This is my first post #first post',
      image:'https://w0.peakpx.com/wallpaper/863/651/HD-wallpaper-red-cake-pastries-desserts-cakes-strawberry-cake-berry-cake-thumbnail.jpg',
      time:'20 Mar 2020'
    },
    {
      text:'Good Morning Guys 🤩😍🖋️',
      image: null,
      time: '2 min ago'
    },
    {
      text:'This is my first post #first post',
      image:'https://w0.peakpx.com/wallpaper/863/651/HD-wallpaper-red-cake-pastries-desserts-cakes-strawberry-cake-berry-cake-thumbnail.jpg',
      time:'20 Mar 2020'
    },
    {
      text:'Good Morning Guys 🤩😍🖋️',
      image: null,
      time: '2 min ago'
    },
    {
      text:'This is my first post #first post',
      image:'https://w0.peakpx.com/wallpaper/863/651/HD-wallpaper-red-cake-pastries-desserts-cakes-strawberry-cake-berry-cake-thumbnail.jpg',
      time:'20 Mar 2020'
    },
    {
      text:'Good Morning Guys 🤩😍🖋️',
      image: null,
      time: '2 min ago'
    },
  ])

  return (
    <div className='feed'>
      {
        feedData.map((data, index) => {
          return <Post key={index} name={'sophia jackson'} time={data.time} text={data.text} image={data.image}/>
        })
      }
    </div>
  )
}

export default Feed
