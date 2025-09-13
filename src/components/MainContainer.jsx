import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "../components/VideoBackground";
import VideoTitle from "../components/VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
  <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
  <VideoBackground movieId={id} /> 
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
  <div className="absolute inset-0 flex items-center">
    <div className="max-w-screen-xl px-8 mx-auto">
      <VideoTitle title={original_title} overview={overview} />
    </div>
  </div>
</div>
  );
};

export default MainContainer;
