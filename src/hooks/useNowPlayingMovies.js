import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiOptions } from "../utils/constant";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies(); //memoization is done to prevent from re-renders
    !popularMovies && getPopularMovies();
    !topRatedMovies && getTopRatedMovies();
    !upcomingMovies && getUpcomingMovies();
  }, []);

  // fetchmovies
  const fetchMovies = async (url, action) => {
    try {
      const res = await fetch(url, ApiOptions);

      if (!res.ok) {
        throw new Error(`Network issue or API blocked. Status: ${res.status}`);
      }

      const json = await res.json();

      if (json.results) {
        action(json.results);
      } else {
        console.warn("No movies found in response:", json);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const getNowPlayingMovies = () => {
    fetchMovies(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      (results) => dispatch(addNowPlayingMovies(results))
    );
  };

  const getPopularMovies = () => {
    fetchMovies(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      (results) => dispatch(addPopularMovies(results))
    );
  };

  const getTopRatedMovies = () => {
    fetchMovies(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      (results) => dispatch(addTopRatedMovies(results))
    );
  };

  const getUpcomingMovies = () => {
    fetchMovies(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      (results) => dispatch(addUpcomingMovies(results))
    );
  };
};

export default useNowPlayingMovies;
