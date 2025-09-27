import React from 'react'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from '../components/MainContainer';
import SecondaryContainer from "../components/SecondaryContainer";
import GptSearchPage from '../components/GptSearchPage';
import { useSelector } from "react-redux";
import Footer from '../components/Footer';

const Homepage = () => {

const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

useNowPlayingMovies(); // custom hook
  return (
    <div>
        {showGptSearch ? (
          <GptSearchPage />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
        
      
    </div>
  )
}

export default Homepage
