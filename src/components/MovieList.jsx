import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  console.log(movies);

  if(!movies || movies.length === 0) return null;
   
  return (
     <div>
      <h1 className="text-2xl font-bold mb-8 text-white">{title}</h1>
      <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
