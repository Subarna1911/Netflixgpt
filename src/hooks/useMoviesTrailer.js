import { useEffect } from "react";
import { ApiOptions } from "../utils/constant";
import { useDispatch} from "react-redux";
import { addMoviesTrailer } from "../utils/movieSlice";

  const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
     getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
        ApiOptions
      );

      const json = await data.json();
  
      const MovieTrailer = json.results.filter(
        (video) => video.type === "Trailer"
      );

      const filterTrailer = MovieTrailer.length
        ? MovieTrailer[0]
        : json.results[0];


      dispatch(addMoviesTrailer(filterTrailer));
    } catch (error) {
      console.log("error fetching movie videos", error);
    }
  };
};

export default useMoviesTrailer;
