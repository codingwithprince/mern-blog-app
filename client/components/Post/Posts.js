import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

const Posts = () => {
  const [posts, setPosts] = useState([{
    id:1,
    title: 'ANy thing',
    poem: 'lorem4 fasdf'
  }])

  useEffect(()=>{
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])

  return (
    <div className='py-10'>
        {/* <h2 className='text-2xl font-semibold text-gray-600'>Posts</h2> */}
        {
          posts && posts.map(item => <PostCard key={item.id} data={item} />)
        }
    </div>
  )
}

export default Posts