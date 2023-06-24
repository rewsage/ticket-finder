import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "@/types";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], null>({
            query: () => `movies`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery } = moviesApi;
