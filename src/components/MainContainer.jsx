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
    <div className="absolute top-0">
    <div className="relative w-full h-screen overflow-hidden ">
  
    <VideoBackground movieId={id}/>

  <div className="container absolute top-0 left-8 w-full h-full flex items-center text-white">
    <VideoTitle title={original_title} overview={overview} />
  </div>
</div>
</div>
  );
};

export default MainContainer;
