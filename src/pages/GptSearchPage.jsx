import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import {bannerBg} from '../utils/constant'

const GptSearchPage = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-fixed overflow-hidden" 
         style={{ backgroundImage: `url(${bannerBg})` }}>
      
      <div className="bg-black/50 min-h-screen">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center pt-12 sm:pt-20 px-4 sm:px-6">
          
          <div className="text-center my-12 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">
              AI Movie Search
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
              Discover movies with AI recommendations
            </p>
          </div>
          
          <div className="w-full mb-8">
            <GptSearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GptSearchPage