import React from 'react'
import { Play } from 'lucide-react';

const VideoTitle = ({title, overview}) => {
  return (
    <div>
      <div className='spacing'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='w-1/4 text-lg text-wrap md:text-balance my-6'>{overview}</p>
        <div className='flex gap-4 items-center'>
          <button className='bg-slate-200 font-bold rounded-lg w-25 cursor-pointer p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-400'><span className='flex items-center gap-2 justify-center'> <Play size={20} />Play</span></button>
          <button className='bg-gray-400 rounded-lg font-bold text-white p-2 cursor-pointer w-25 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500'>More info</button>
        </div>

      </div>
      
      
      
    </div>
  )
}

export default VideoTitle
