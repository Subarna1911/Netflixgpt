import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  
  useMoviesTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="relative w-screen h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden bg-black mask-b-from-20% mask-b-to-90%">
      {trailerVideo?.key ? (
        <>
          <iframe
            className="absolute -top-20 -left-20 w-[calc(100%+10rem)] h-[calc(100%+10rem)] border-0 scale-105"
            style={{ 
              border: 'none',
              outline: 'none',
              pointerEvents: 'none'
            }}
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
          />
          
       
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
          
      
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none" />
          
      
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />
        </>
      ) : (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-900 to-black">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white text-lg font-medium">Loading trailer...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;