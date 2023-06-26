import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, Cinema, Review } from "@/types";

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
        getMovieReviews: builder.query<Review[], Movie["id"]>({
            query: (id) => `reviews?movieId=${id}`,
        }),
        getCinemaMovies: builder.query<Movie[], Cinema["id"]>({
            query: (id) => `movies?cinemaId=${id}`,
        }),
        getCinemas: builder.query<Cinema[], void>({
            query: () => `cinemas`,
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetCinemasQuery,
    useGetCinemaMoviesQuery,
    useGetMovieReviewsQuery,
} = moviesApi;
