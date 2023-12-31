import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const page = 1;

export const TMDBAPI = createApi({
  reducerPath: "TMDBAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    //Get Genre
    getMovieByGenre: builder.query({
      query: () => `genre/movie/list?api_key=f2796085129059e6a5f825a6fbf5b452`,
    }),
    //Get movies by type
    getMovies: builder.query({
      query: ({ genreName, page, searchQuery }) => {
        //Get movies by searching

        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=f2796085129059e6a5f825a6fbf5b452`;
        }

        // Get movies by Genre
        if (genreName && typeof genreName === "number") {
          return `discover/movie?with_genres=${genreName}&page=${page}&api_key=f2796085129059e6a5f825a6fbf5b452`;
        }
        // Get Popular Movies
        return `movie/popular?page=${page}&api_key=f2796085129059e6a5f825a6fbf5b452`;
      },
    }),

    //get movie by id
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_responsive=videos,credit&api_key=f2796085129059e6a5f825a6fbf5b452`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetMovieByGenreQuery } =
  TMDBAPI;
