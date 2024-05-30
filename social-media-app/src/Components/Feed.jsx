import React, { useEffect, useState } from 'react'
import Post from './Post'
import { useContentContext } from './contexts/contentContext'

const Feed = () => {
  const {post} = useContentContext();

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

  useEffect(() => {
    
    setFeedData((f) => {
      if(post == ''){
        return f
      }
      else{
        return [...f, {
          text: post,
          image: null,
          time: '1 min ago'
        }]
      }
    })
  }, [post])
  return (
    <div className='feed'>
      {
        feedData.map((data, index) => {
          return <Post key={index} name={'sophia jackson'} time={data.time} text={data.text} image={data.image}/>
        }).reverse()
      }
    </div>
  )
}

export default Feed
