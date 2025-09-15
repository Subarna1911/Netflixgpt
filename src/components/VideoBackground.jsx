import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  useMoviesTrailer(movieId); //hook is being used

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
   <div className="relative w-screen aspect-video h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover"
    src={
      "https://www.youtube.com/embed/" +
      trailerVideo?.key +
      "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
      trailerVideo?.key
    }
    title="YouTube video player"
    allow="autoplay; encrypted-media; fullscreen"
    allowFullScreens
    
  ></iframe>
</div>

  );
};

export default VideoBackground;
