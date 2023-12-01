
import React from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = (tag) => {
  
    const {gif, loading,fetchData} = useGif(tag);

    
  return (
    <div className=' flex flex-col w-1/2  bg-green-400  gap-4 items-center aspect-auto border-2 border-gray-500 rounded-2xl'>
        <h1 className=' underline uppercase font-bold mt-4 text-xl md:text-2xl text-center'>A Random Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif}  alt=" gif" className=" max-w-[30rem] px-4 object-contain" />)
        }

        <button onClick={() =>fetchData()}
        className=" uppercase py-2 w-4/5 rounded-lg bg-white/70 my-2 mb-[20px] hover:bg-white transition-all font-semibold text-center" >Generate</button>
    </div>
  )
}

export default Random