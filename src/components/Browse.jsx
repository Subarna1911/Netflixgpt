import React from "react";
import Header from "../components/Header";
import useNowPlayingMovies from  '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies(); //custom hook is being used

  return (
    <>
      <div className="h-screen">
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
      </div>
    </>
  );
};

export default Browse;
