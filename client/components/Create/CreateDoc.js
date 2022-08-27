import React, { useEffect } from 'react'

const CreateDoc = () => {
    
    const postUpload = async() =>{
        try {
           const result = await fetch('/upload', {
                method: 'POST',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({
                        title: "TITLE",
                        writer: "WERIER",
                        poem: "POEM"
                }) 
            })
         
            console.log(result);
            console.log('heee');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='mt-5 mb-10 md:px-[30%]'>
        <h3 className='text-center text-2xl text-gray-700'>Create a Post</h3>
        <div className="form">
            <form method="post">
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' for='title'>Title</label>
                    <input className='shadow-md py-3 px-2 rounded-md border-2 border-slate-100 focus:outline-sky-500' type="text" name="title" id="title"  required/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' for='writer'>Writer</label>
                    <input className='shadow-md py-3 px-2 rounded-md border-2 border-slate-100 focus:outline-sky-500' type="text" name="writer" id="writer"  required/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' for='poem'>Poem</label>
                    <textarea rows={5} className='shadow-md py-3 px-2 rounded-md border-2 border-slate-100 focus:outline-sky-500' type="text" name="poem" id="poem"  required/>
                </div>
                <div className="flex flex-col pt-3">
                    <button onClick={()=> postUpload()} className='py-2 px-3 rounded-md bg-blue-500 text-white'>Upload</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateDoc