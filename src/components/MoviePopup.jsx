import React from "react";
import { addMovie, removeMovie } from "../utils/watchlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Check } from 'lucide-react';

const MoviePopup = ({ movie, trailer }) => {
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
    <div className=" height-full absolute -top-20 left-1/2 transform -translate-x-1/2 w-[350px] bg-zinc-900 rounded-lg shadow-2xl z-100 border border-zinc-700 animate-in fade-in-0 zoom-in-95 duration-200">
      {/* Media Section */}
      <div className="relative">
        {trailer ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
            title="Trailer"
            className="w-full h-48 rounded-t-lg"
            allowFullScreen
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent rounded-t-lg"></div>
        
        {/* Watchlist Button */}
        <button
          onClick={handleToggle}
          className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 border border-zinc-600 hover:border-white"
        >
          {isInWatchlist ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h2 className="text-white font-bold text-lg leading-tight">{movie.title}</h2>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>{movie.release_date?.split('-')[0] || 'N/A'}</span>
            <span className="text-green-400 font-medium">★ {movie.vote_average?.toFixed(1) || 'N/A'}</span>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
          {movie.overview || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default MoviePopup;