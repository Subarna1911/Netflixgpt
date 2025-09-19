import React from "react";
import { useGptSearch } from "../hooks/useGptSearch";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestions = () => {
  const { gptMovies, loading } = useGptSearch();
  const { movieResults } = gptMovies || {};
  if(loading){
    return(
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <Shimmer />
      </div>
    );
  }

  if (!movieResults?.length) return null;

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10 space-y-8">

      {movieResults
        .filter(group => group.results?.length)
        .map(group => (
          <div key={group.name}>
            <h2 className="text-2xl font-semibold text-white pb-2">
              {group.name}
            </h2>
            <MovieList movies={group.results} />
          </div>
        ))}
    </div>
  );
};

export default GptMovieSuggestions;
