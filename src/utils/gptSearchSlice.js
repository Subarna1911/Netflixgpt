import { createSlice } from "@reduxjs/toolkit";
const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies:[],
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addgptMoviesResult:(state, action) =>{
      state.gptMovies = action.payload;
    }
  },
});

export const { toggleGptSearchView , addgptMoviesResult } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
