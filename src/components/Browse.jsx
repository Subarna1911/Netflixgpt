import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import useNowPlayingMovies from  '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies(); //custom hook is being used

  return (
    <>
      <div className="bg-primary">
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
        <Footer />
      </div>
    </>
  );
};

export default Browse;
