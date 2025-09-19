import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchMovieRecommendations from "../utils/openRouterApi";
import { setLoading, addgptMoviesResult } from "../utils/gptSearchSlice";
import { ApiOptions } from "../utils/constant";

export const useGptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  const gptMovies = useSelector((state) => state.gpt.gptMovies);
  const loading = useSelector((state) => state.gpt.loading);
  const dispatch = useDispatch();
  const searchTxt = useRef(null);

  // Fetch movies from TMDB
  const fetchMoviesFromTMDB = async (movies) =>
    Promise.all(
      movies.map(async (movie) => {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            movie
          )}&include_adult=false&language=en-US&page=1`,
          ApiOptions
        );
        const data = await res.json();
        return { name: movie, results: data.results || [] };
      })
    );

  const handleGptSearch = async () => {
    const query = searchTxt.current.value.trim();
    if (!query) return;

    dispatch(setLoading(true));
    try {
      const recommendations = await fetchMovieRecommendations(query);

      // Clean movie names
      let movieArray = recommendations
        .split("\n")
        .map((line) =>
          line
            .replace(/^\d+\.\s*/, "") 
            .split("(")[0] 
            .replace(/\*/g, "") 
            .trim()
        )
        .filter(Boolean);

      movieArray = [...new Set(movieArray)];

      const tmdbMovies = await fetchMoviesFromTMDB(movieArray);

      dispatch(
        addgptMoviesResult({
          movieNames: movieArray,
          movieResults: tmdbMovies,
        })
      );
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { langKey, gptMovies, loading, searchTxt, handleGptSearch };
};
