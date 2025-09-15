import React from 'react'
import MovieCard from './MovieCard'
import { Swiper, SwiperSlide } from "swiper/react"
import { MoveLeft, MoveRight } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from "swiper/modules"

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null

  return (
    <div className="relative my-8">
     
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <div className="flex space-x-2">
          <div className="swiper-button-prev-custom p-3 bg-black/50 rounded-full cursor-pointer">
            <MoveLeft className="text-red-400 md:w-6 md:h-6 w-3 h-3" />
          </div>
          <div className="swiper-button-next-custom p-3 bg-black/50 rounded-full cursor-pointer">
            <MoveRight className="text-red-400 md:w-6 md:h-6 w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Swiper carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={2}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard posterPath={movie.poster_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList
