import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchMovieRecommendations from "../utils/openRouterApi";
import { addgptMoviesResult } from "../utils/gptSearchSlice";
import { ApiOptions } from "../utils/constant";

export const useGptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  const gptMovies = useSelector((state) => state.gpt.gptMovies);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const searchTxt = useRef(null);

  const fetchMoviesFromTMDB = async (movies) => {
    const results = await Promise.all(
      movies.map(async (movie) => {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            movie
          )}&include_adult=false&language=en-US&page=1`,
          ApiOptions
        );
        const data = await res.json();
        return data.results[0];
      })
    );
    return results.filter(Boolean);
  };

  const handleGptSearch = async () => {
    const query = searchTxt.current.value.trim();
    if (!query) return;

    setLoading(true);

    try {
      const recommendations = await fetchMovieRecommendations(query);
      const movieArray = recommendations
        .split("\n")
        .map((line) =>
          line
            .replace(/^\d+\.\s*/, "")
            .split("(")[0]
            .trim()
        )
        .filter(Boolean);

      const tmdbMovies = await fetchMoviesFromTMDB(movieArray);

      dispatch(addgptMoviesResult(tmdbMovies));
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  return { langKey, gptMovies, loading, searchTxt, handleGptSearch };
};
