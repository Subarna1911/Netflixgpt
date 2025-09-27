import React from 'react'
import MovieCard from '../components/MovieCard';
import { useSelector} from 'react-redux'


const Mylist = () => {

    const myList = useSelector((store)=>store.watchlist.movieList);

  return (
   <div className="h-screen w-full mt-24 max-w-screen px-8">
  {myList.length === 0 ? (
    <div className="flex items-center justify-center h-full mt-10">
      <p className="text-white text-lg font-semibold">
        No movie is added in the list yet
      </p>
    </div>
  ) : (
    <div className="sm:px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
      {myList.map((movie) => (
        <div key={movie.id} className="relative mt-24">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  )}
</div>

  )
}

export default Mylist
