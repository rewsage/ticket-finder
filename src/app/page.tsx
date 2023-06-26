"use client";

import styles from "./_styles/page.module.scss";
import { Sidebar } from "./_components/sidebar";
import { useGetCinemaMoviesQuery } from "@/redux/services/movies-api";
import { useState } from "react";
import { MovieList } from "@/components/movie-list";
import { Cinema, Genre } from "@/types";
import { filterMovies } from "./_utils";

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
    const [filterParams, setFilterParams] =
        useState<FilterParams>(initialParams);
    const { data: cinemaMovies } = useGetCinemaMoviesQuery(filterParams.cinema);

    const filteredMovies = filterMovies(cinemaMovies ?? [], filterParams);

    return (
        <div className={styles.container}>
            <Sidebar updateFilterParams={setFilterParams} />
            <MovieList movies={filteredMovies} />
        </div>
    );
}
