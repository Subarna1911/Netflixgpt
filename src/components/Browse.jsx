import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "../components/GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies(); //custom hook is being used

  return (
    <>
      <div className="bg-primary">
        <Header />
        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}

        {!showGptSearch && <Footer />}
      </div>
    </>
  );
};

export default Browse;
