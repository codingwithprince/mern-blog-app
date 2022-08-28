import React, { useEffect, useState } from 'react'
import PostCard from '../Post/PostCard'
import axios from 'axios'
import PostList from '../Post/PostList'
const CreateDoc = () => {
    const [list, setList] = useState([])
    const [post, setPost] = useState({})
    
    const postUpload = async() =>{
        try {
            const res = await axios.post('http://localhost:3001/upload', post)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const onBlurHandler = (e) => {
       setPost({
        ...post,
         [e.target.name] :  e.target.value
       })
    }

    useEffect(()=>{
        const fetchAllData = async () =>{
            try {
                const res = await axios.get('http://localhost:3001/')
                setList(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllData()
    }, [])

  return (
    <div className='mt-5 mb-10'>
        <h3 className='text-center text-2xl text-gray-700'>Create a Post</h3>
        <div className="form">
            <form method="post">
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' for='title'>Title</label>
                    <input onBlur={(e)=> onBlurHandler(e)} className='shadow-md py-3 px-2 rounded-md border-2 border-red-300 focus:outline-sky-500' type="text" name="title" id="title"  required/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' for='writer'>Writer</label>
                    <input  onBlur={(e)=> onBlurHandler(e)} className='shadow-md py-3 px-2 rounded-md border-2 border-red-300 focus:outline-sky-500' type="text" name="writer" id="writer"  required/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' for='poem'>Poem</label>
                    <textarea  onBlur={(e)=> onBlurHandler(e)} rows={5} className='shadow-md py-3 px-2 rounded-md border-2 border-red-300 focus:outline-sky-500' type="text" name="poem" id="poem"  required/>
                </div>
                <div className="flex flex-col pt-3">
                    <button onClick={()=> postUpload()} className='py-2 px-3 rounded-md bg-blue-500 text-white'>Upload</button>
                </div>
            </form>
        </div>
        <div className="mt-10">
            {
                list && <PostList data={list} />
            }
             
        </div>
    </div>
  )
}

export default CreateDoc