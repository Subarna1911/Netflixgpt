import React from "react";
import { ImgCdnUrl } from "../utils/constant";
import { addMovie, removeMovie } from "../utils/watchlistSlice";
import { useDispatch, useSelector } from "react-redux";
import {Plus,  Check} from 'lucide-react';

const MovieCard = ({ movie }) => {
  if (!movie?.poster_path) return null;

  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.movieList);


  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  const handleToggle = (e) => {
    e.stopPropagation();
    if (isInWatchlist) {
      dispatch(removeMovie(movie.id));
      console.log(`${movie.title} removed from My List!`);
    } else {
      dispatch(addMovie(movie));
      console.log(`${movie.title} added to My List!`);
    }
  };

  return (
    <div className="w-full md:min-w-2xs min-h-1/3 h-42 relative group cursor-pointer transition scale-95 duration-300 hover:scale-100">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={movie.poster_path ? ImgCdnUrl + movie.poster_path : fallback}
        alt={movie.title}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 rounded-lg pointer-events-none"></div>
      <div className="absolute bottom-2 text-md font-bold text-white text-wrap px-3">
        <h2>{movie.title}</h2>
        <p className="text-[14px] font-light">{movie.release_date}</p>
      </div>
<button
  onClick={handleToggle}
  className="absolute top-4 right-4 group bg-gray-400 text-white text-xs font-semibold p-2 rounded-full hover:bg-white hover:text-black transition duration-300 hover:cursor-pointer"
>
  {isInWatchlist ? <Check /> : <Plus />}

</button>



      
    </div>
  );
};

export default MovieCard;
