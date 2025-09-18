import React from "react";
import { useGptSearch } from "../hooks/useGptSearch";

const GptMovieSuggestions = () => {
  const { gptMovies } = useGptSearch();

  return (
    <div>
      {gptMovies && gptMovies.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-6 p-4 mx-auto bg-gray-800 text-white rounded-lg">
          {gptMovies.map((movie) => (
            <div key={movie.id} className="mb-4 border-b border-gray-600 pb-2">
              <h3 className="text-lg font-semibold">
                {movie.title || movie.name}
              </h3>
              <p className="text-sm text-gray-400">
                {movie.release_date
                  ? new Date(movie.release_date).getFullYear()
                  : movie.first_air_date
                  ? new Date(movie.first_air_date).getFullYear()
                  : "Release date not available"}
              </p>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="mt-2 rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestions;
