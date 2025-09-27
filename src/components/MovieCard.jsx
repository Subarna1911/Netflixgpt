import React, { useState, useRef } from "react";
import { ImgCdnUrl } from "../utils/constant";
import MoviePopup from "../components/MoviePopup";
import useHoverTrailer from "../hooks/useHoverTrailer";
import PopupPortal from "../components/PopUpPortal";


const MovieCard = ({ movie }) => {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });
  const cardRef = useRef(null);

  const trailer = useHoverTrailer(movie.id);

  if (!movie?.poster_path) return null;

  const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setPos({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
    setHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full h-42 m-2 cursor-pointer transition-transform scale-95 duration-300 hover:scale-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Movie Poster */}
      <img
        className="w-full h-45 object-cover rounded-lg"
        src={movie.poster_path ? ImgCdnUrl + movie.poster_path : fallback}
        alt={movie.title}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 rounded-lg pointer-events-none"></div>

      {/* Title & Release Date */}
      <div className="absolute bottom-2 text-md font-bold text-white px-3">
        <h2>{movie.title}</h2>
        <p className="text-[14px] font-light">{movie.release_date}</p>
      </div>

      {/* Popup via Portal */}
      {hovered && (
        <PopupPortal>
          <div
            className="absolute z-[200]"
            style={{
              top: pos.top - 100, // lift popup above the card
              left: pos.left,
              width: pos.width,
              position: "absolute",
              cursor:"pointer",
            }}
          >
            <MoviePopup movie={movie} trailer={trailer} />
          </div>
        </PopupPortal>
      )}
    </div>
  );
};

export default MovieCard;
