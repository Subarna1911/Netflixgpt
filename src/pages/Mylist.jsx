import React from 'react';
import MovieCard from '../components/MovieCard';
import { useSelector } from 'react-redux';

const Mylist = () => {
  const myList = useSelector((store) => store.watchlist.movieList);

  return (
    <div className="relative w-full min-h-screen max-w-screen-xl px-4 md:px-8 mx-auto pt-50">
      {myList.length === 0 ? (
        <div className="flex items-center justify-center h-[70vh]">
          <p className="text-white text-lg font-semibold">
            No movie is added in the list yet
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Mylist;
