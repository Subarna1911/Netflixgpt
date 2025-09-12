import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ApiOptions } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

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
};

export default useNowPlayingMovies;
