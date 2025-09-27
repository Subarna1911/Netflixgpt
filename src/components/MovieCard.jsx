import React from "react";
import { ImgCdnUrl } from "../utils/constant";
import MoviePopup from "../components/MoviePopup";
import useHoverTrailer from "../hooks/useHoverTrailer";
import { useState } from "react";
    

const MovieCard = ({ movie }) => {

  const [hovered, setHovered] = useState(false);

  const trailer = useHoverTrailer(movie.id);

  if (!movie?.poster_path) return null;

  return (
    <div>
    <div className="w-full md:min-w-2xs min-h-1/3 h-42 relative group cursor-pointer transition scale-95 duration-300 hover:scale-100 "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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

      <div>
        {hovered && <MoviePopup movie = {movie} trailer={trailer}/>}
      </div>

      </div>
    </div>
  );
};

export default MovieCard;
