"use client";

import styles from "./styles/page.module.scss";
import { Sidebar } from "./components/sidebar";
import {
    useGetCinemaMoviesQuery,
    useGetMoviesQuery,
} from "@/redux/services/movies-api";
import { useEffect, useState } from "react";
import { MovieList } from "./components/movie-list";
import { Cinema, Genre, Movie } from "@/types";

export type FilterParams = {
    title: string;
    genre: Genre | null;
    cinema: Cinema["id"] | null;
};

const initialParams = {
    title: "",
    genre: null,
    cinema: null,
};

export default function Home() {
    const { data: allMovies } = useGetMoviesQuery();
    const [filterParams, setFilterParams] =
        useState<FilterParams>(initialParams);

    const cinemaId = filterParams.cinema ?? "";
    const { data: cinemaMovies } = useGetCinemaMoviesQuery(cinemaId, {
        skip: !filterParams.cinema,
    });

    const filterMovies = (data: Movie[]) => {
        let movieList = data;
        if (!filterParams.cinema) movieList;

        const filteredMovies = data.filter((movie) => {
            if (
                filterParams.title !== "" &&
                !movie.title.toLowerCase().startsWith(filterParams.title)
            ) {
                console.log(movie.title, filterParams.title);
                return false;
            }

            if (
                filterParams.genre !== null &&
                filterParams.genre !== movie.genre
            ) {
                return false;
            }

            return true;
        });

        return filteredMovies;
    };

    let moviesForFiltering = filterParams.cinema ? cinemaMovies : allMovies;

    const movies = moviesForFiltering ? filterMovies(moviesForFiltering) : [];

    return (
        <div className={styles.container}>
            <Sidebar updateFilterParams={setFilterParams} />
            <MovieList movies={movies} />
        </div>
    );
}
