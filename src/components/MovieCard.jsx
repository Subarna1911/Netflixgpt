import React from 'react'
import { ImgCdnUrl } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  
  if(!posterPath) return null;

  return (
      <div>
      <img
        className="w-full h-auto rounded-lg shadow-md object-cover"
        src={posterPath ? ImgCdnUrl + posterPath : fallback}
        alt="movie poster"
      />
    </div>
  )
}

export default MovieCard
