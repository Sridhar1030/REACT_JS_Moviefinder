import { configureStore } from "@reduxjs/toolkit";
import { TMDBAPI } from "../services/Api";
import genreReducer from "../Feature/currentGenre"

export default configureStore({
  reducer: {
    [TMDBAPI.reducerPath]: TMDBAPI.reducer,
    currentGenre:genreReducer
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(TMDBAPI.middleware),
})
