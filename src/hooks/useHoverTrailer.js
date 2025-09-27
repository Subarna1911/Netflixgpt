
import { ApiOptions } from "../utils/constant";
import { useState, useEffect } from "react";

const useHoverTrailer = (moviePopId)=>{

    const[trailer, setTrailer] = useState(null);

     useEffect(() => {
    if (!moviePopId) return;

    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${moviePopId}/videos`,
          ApiOptions
        );
        const data = await res.json();

        const trailers = data.results.filter(
          video => video.type === "Trailer" && video.site === "YouTube"
        );

        setTrailer(trailers.length ? trailers[0] : data.results[0] || null);
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setTrailer(null);
      }
    };

    fetchTrailer();
  }, [moviePopId]);

  return trailer;
};

export default useHoverTrailer;