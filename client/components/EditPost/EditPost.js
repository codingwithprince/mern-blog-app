import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditPost = () => {
  const router = useRouter()
  const [post, setPost] = useState({})
  const [updatePost, setUpdatePost] = useState({})

    useEffect(()=>{
      axios.get(`http://localhost:3001/update/${router.query.id}`)
      .then(res => setPost(res.data))
      .catch(error => console.log(error))
    },[])


    const handleUpdate = async() =>{
      try {
        
      } catch (error) {
        console.log(error);
      }
    }

    const onBlurHandler = (e) => {
      setUpdatePost({
       ...updatePost,
        [e.target.name] :  e.target.value
      })
   }


  return (
        <div className='mt-5 mb-10'>
        <h3 className='text-center text-2xl text-gray-700'>Edit a Post</h3>
        <div className="form">
            <form method="post">
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' for='title'>Title</label>
                    <input onBlur={(e)=> onBlurHandler(e)} value={post.title} className='shadow-md py-3 px-2 rounded-md border-2 border-red-300 focus:outline-sky-500' type="text" name="title" id="title"  required/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' for='writer'>Writer</label>
                    <input  onBlur={(e)=> onBlurHandler(e)} value={post.writer} className='shadow-md py-3 px-2 rounded-md border-2 border-red-300 focus:outline-sky-500' type="text" name="writer" id="writer"  required/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' for='poem'>Poem</label>
                    <textarea value={post.poem}  onBlur={(e)=> onBlurHandler(e)} rows={5} className='shadow-md py-3 px-2 rounded-md border-2 border-red-300 focus:outline-sky-500' type="text" name="poem" id="poem"  required/>
                </div>
                <div className="flex flex-col pt-3">
                    <button className='py-2 px-3 rounded-md bg-red-500 text-white'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditPost