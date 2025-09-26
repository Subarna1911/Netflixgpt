import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

import { ThemeProvider } from "../ContextApi/ThemeContext";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies(); // custom hook

  return (

    <ThemeProvider>

     <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <Header />
        {showGptSearch ? (
          <GptSearchPage />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
        {!showGptSearch && <Footer />}
      </div>

      </ThemeProvider>

  );
};

export default Browse;
