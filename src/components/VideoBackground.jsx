import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  useMoviesTrailer(movieId); //hook is being used

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
  className="w-screen h-screen object-cover"
  src={
    "https://www.youtube.com/embed/" +
    trailerVideo?.key +
    "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo?.key
  }
  title="YouTube video player"
  allow="autoplay; encrypted-media; fullscreen"
 
></iframe>
    </div>
  );
};

export default VideoBackground;
