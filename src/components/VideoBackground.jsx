import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  
  useMoviesTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
 <div className="relative w-screen h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
  {trailerVideo?.key ? (
    <>
      <iframe
        className="absolute -top-20 -left-20 w-[calc(100%+10rem)] h-[calc(100%+10rem)] border-0 scale-105"
        style={{
          border: "none",
          outline: "none",
          pointerEvents: "none",
        }}
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />

      {/* Netflix-style gradient blends */}
      {/* Bottom fade for smooth transition to next container */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Side fade for better focus on center content */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black/60 to-transparent" />

      {/* Top fade so navbar/header blends with video */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/70 to-transparent" />
    </>
  ) : (
    <div className="flex items-center justify-center h-full bg-slate-900/95">
      <div className="text-center space-y-3">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-white text-lg font-medium">Loading trailer...</p>
      </div>
    </div>
  )}
</div>

  );
};

export default VideoBackground;