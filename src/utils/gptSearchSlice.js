import { createSlice } from "@reduxjs/toolkit";
const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies:[],
    loading:false,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addgptMoviesResult:(state, action) =>{
      state.gptMovies = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleGptSearchView , addgptMoviesResult, setLoading } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
