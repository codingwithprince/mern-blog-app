import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import EditPost from '../EditPost/EditPost'
import SkeletonPost from './SkeletonPost'
import SpinLoader from '../SpinLoader/SpinLoader'

const Posts = () => {
  const [posts, setPosts] = useState()

  useEffect(()=>{
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])

  return (
    <div className='py-10'>
        {
          posts == null ? <SpinLoader /> : posts.map(item => <PostCard key={item.id} data={item} />)
        }
    </div>
  )
}

export default Posts