
import React from 'react'
import { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    
    const [tag, setTag] = useState("car");
    const {gif, loading ,fetchData} = useGif(tag);

    

  return (
    <div className=' flex flex-col w-1/2  bg-blue-400   py-2 items-center aspect-auto border-2 border-gray-500 rounded-2xl'>
        <h1 className=' underline uppercase font-bold mt-4 text-xl md:text-2xl text-center'>Random <span>{tag}</span> Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} className=" max-w-[30rem] px-4 py-4 object-contain" />)
        }

        <input className=' w-4/5 bg-white font-semibold text-center my-2 rounded-lg py-2 mb-2'
        onChange={(event) => setTag(event.target.value)} value={tag} />

        <button onClick={() => fetchData(tag)}
        className=" uppercase py-2 w-4/5 rounded-lg bg-white/70 my-2 mb-[20px] hover:bg-white transition-all font-semibold text-center" >Generate</button>
    </div>
  )
}

export default Tag