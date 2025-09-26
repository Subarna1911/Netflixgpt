import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { MoveLeft, MoveRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MovieList = ({ title, movies }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!movies || movies.length === 0) return null;


  return (
    <div className="relative my-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex space-x-2">
          <div ref={prevRef} className="p-3 bg-black/50 rounded-full cursor-pointer">
            <MoveLeft className="text-red-400 md:w-6 md:h-6 w-3 h-3" />
          </div>
          <div ref={nextRef} className="p-3 bg-black/50 rounded-full cursor-pointer">
            <MoveRight className="text-red-400 md:w-6 md:h-6 w-3 h-3" />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={2}

        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 4},
        }}

        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {movies
          .filter(movie => movie && movie.poster_path)
          .map((movie, index) => (
            <SwiperSlide key={`${movie.id}-${index}`}>
               <MovieCard posterPath={movie.poster_path}  title={movie.title} releaseDate = {movie.release_date}/>
            </SwiperSlide>
          ))}
      </Swiper>
      
    </div>
  );
};

export default MovieList;
