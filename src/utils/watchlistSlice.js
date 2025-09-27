import { createSlice } from "@reduxjs/toolkit";

const storedMovies = JSON.parse(localStorage.getItem("watchlist")) || [];

const watchlistSlice = createSlice({

    name:"watchlist",
    initialState:{
        movieList:storedMovies,
    }
    ,

    reducers:{
        addMovie: (state, action)=> {
            const exists = state.movieList.find((m) => m.id === action.payload.id);
            if (!exists) {
                state.movieList.push(action.payload);
                localStorage.setItem("watchlist", JSON.stringify(state.movieList));
            }
        },

         removeMovie: (state, action) =>{
            state.movieList = state.movieList.filter((m)=>m.id !== action.payload);
             localStorage.setItem("watchlist", JSON.stringify(state.movieList));
         },
         
          clearWatchlist: (state) => {
      state.movieList = [];
      localStorage.setItem("watchlist", JSON.stringify([]));
    },

    }
});


export  const {addMovie, removeMovie, clearWatchlist} = watchlistSlice.actions;
export default watchlistSlice.reducer;

