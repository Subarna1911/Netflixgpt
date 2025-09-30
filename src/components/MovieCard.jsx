import { HoverCard } from "radix-ui";
import { ImgCdnUrl } from "../utils/constant";
import useHoverTrailer from "../hooks/useHoverTrailer";
import MoviePopup from "../components/MoviePopup";
import { useMemo } from "react";
import { Link } from "react-router-dom";

function useHasHover() {
  return useMemo(
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    []
  );
}

const MovieCard = ({ movie }) => {
  const hasHover = useHasHover();
  if (!movie?.poster_path) return null;

  const trailer = useHoverTrailer(movie.id);

  if (hasHover)
    return (
      <HoverCard.Root openDelay={120} closeDelay={80}>
        <HoverCard.Trigger asChild>
          <Link to={`/movie/${movie.id}`} className="block relative">
            <div className="relative w-full h-42 m-2 cursor-pointer transition-transform scale-95 duration-300 hover:scale-100 overflow-hidden rounded-lg">
              <img
                className="w-full h-45 object-cover rounded-lg"
                src={ImgCdnUrl + movie.poster_path}
                alt={movie.title}
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 rounded-lg pointer-events-none"></div>

              <div className="absolute bottom-2 text-md font-bold text-white px-3">
                <h2>{movie.title}</h2>
                <p className="text-[14px] font-light">{movie.release_date}</p>
              </div>
            </div>
          </Link>
        </HoverCard.Trigger>

        <HoverCard.Portal>
          <HoverCard.Content
            side="top"
            align="center"
            sideOffset={-230} // negative pulls it over the card
            alignOffset={10}
            avoidCollisions={false} // allow exact overlap even near edges
            className="
      z-[9999] w-[18rem] rounded-xl border border-white/10
      bg-zinc-900 text-white shadow-2xl
      data-[state=open]:animate-in data-[state=closed]:animate-out
      data-[side=top]:slide-in-from-bottom-2
      outline-none
    "
          >
            <MoviePopup movie={movie} trailer={trailer} />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    );

  return (
    <Link to={`/movie/${movie.id}`} className="block relative">
      <div className="relative w-full h-42 m-2 cursor-pointer transition-transform scale-95 duration-300 hover:scale-100 overflow-hidden">
        <img
          className="w-full h-45 object-cover rounded-lg"
          src={ImgCdnUrl + movie.poster_path}
          alt={movie.title}
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 rounded-lg pointer-events-none"></div>

        <div className="absolute bottom-2 text-md font-bold text-white px-3">
          <h2>{movie.title}</h2>
          <p className="text-[14px] font-light">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
