import React from 'react'
import Image from 'next/image'
import {IoPersonCircleSharp, IoShareSocialSharp} from 'react-icons/io5'


const PostCard = ( {data} ) => {

  return (
    <div className='post-card md:px-[20%] shadow-md m-5 py-5 my-5 bg-white'>
        <div className="post-header">
            <h3 className='text-2xl text-center font-semibold text-red-800 pb-5'>
                {data.title}
            </h3>
            
            <div className="post-img">
                {
                    data.image ? <Image className='' src='' alt='' /> : null
                }
                
            </div>
          
        </div>
        <div className="post-body text-center py-2">
            <p className='whitespace-pre-wrap text-gray-700' >
                {data && data.poem.replace(/\\n/g, "\n")}
            </p>
        </div>
        <div className="post-footer flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
                <div className="writer-img py-5">
                    <IoPersonCircleSharp color='gold' size={50} />
                </div>
                <div className="writer-info">
                    <h3 className="writer-name font-semibold text-gray-500">{data.writer}</h3>
                    <p className='writer-name text-gray-500'>28/08/2022</p>
                </div>
            </div>
            <button className='text-gray-500'>
                <IoShareSocialSharp size={30} />
            </button>
          
        </div>
    </div>
  )
}

export default PostCard