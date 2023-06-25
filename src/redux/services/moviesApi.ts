import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "@/types";

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], void>({
            query: () => "movies",
        }),
        getMovie: builder.query<Movie, Movie["id"]>({
            query: (id) => `movie?movieId=${id}`,
        }),
    }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = moviesApi;
