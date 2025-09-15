import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ApiOptions } from "../utils/constant";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);

  // get npow playing movies
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        ApiOptions
      );
      const json = await data.json();

      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.log("error fetching movie data ", error);
    }
  };

  // get popular movies

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        ApiOptions
      );
      const json = await data.json();

      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log("error fetching movie data ", error);
    }
  };

  // get Top rated movies

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        ApiOptions
      );
      const json = await data.json();

      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.log("error fetching movie data ", error);
    }
  };

  // get an upcoming movies

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        ApiOptions
      );
      const json = await data.json();

      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.log("error fetching movie data ", error);
    }
  };
};

export default useNowPlayingMovies;
