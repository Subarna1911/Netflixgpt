import React from "react";
import { ImgCdnUrl } from "../utils/constant";

const MovieCard = ({ posterPath, title, releaseDate }) => {
  if (!posterPath) return null;

  return (
    <>
      <div>
        <div className="w-full md:min-w-2xs min-h-1/3 h-42 relative group cursor-pointer   transition scale-95 duration-300  hover:scale-100">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={posterPath ? ImgCdnUrl + posterPath : fallback}
            alt="movie poster"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 rounded-lg pointer-events-none"></div>
          <div className="absolute bottom-2 text-md font-bold text-white text-wrap px-3">
            <h2>{title}</h2>
            <p className="text-[14px] font-light">{releaseDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
