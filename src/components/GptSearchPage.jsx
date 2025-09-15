import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {bannerBg} from '../utils/constant'

const GptSearchPage = () => {
  return (

   <div
    className="w-full h-screen bg-cover bg-center flex flex-col overflow-hidden"
    style={{ backgroundImage: `url(${bannerBg})` }}
  >
    
    <div className='max-w-screen-xl flex justify-center items-center flex-col pt-20 px-6"'>
         <GptSearchBar />
         <GptMovieSuggestions />
    </div>

</div>

  )
}

export default GptSearchPage

