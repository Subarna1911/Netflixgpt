import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from "./movieSlice";
import gptReducer from "./gptSearchSlice";
import configReducer from "./configSlice";
import watchlistReducer from './watchlistSlice';

const appStore = configureStore(
    {
        reducer: {
             user: userReducer,
             movies: movieReducer,
             gpt: gptReducer,
             config: configReducer,
             watchlist:watchlistReducer,
        },
    }
)


export default appStore;

