import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null ,
    trailerVideo:null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null,

  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

     addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

     addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

     addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addMoviesTrailer: (state,action)=>{
      state.trailerVideo = action.payload;
    }
  },
});

export const { addNowPlayingMovies, addMoviesTrailer, addPopularMovies,addTopRatedMovies,addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;
