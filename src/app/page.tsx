"use client";

import styles from "./styles/page.module.scss";
import { MovieCard } from "@/components/movie-card";
import { Sidebar } from "./components/sidebar";
import { useGetMoviesQuery } from "@/redux/services/moviesApi";
import { Movie } from "@/types";
import { useState } from "react";

export default function Home() {
    const { data = [] } = useGetMoviesQuery();
    const [query, setQuery] = useState(data);

    // const filterByName = (name: string) => {
    //     const filteredMovies = data.filter((movie) =>
    //         movie.title.toLowerCase().startsWith(name.toLowerCase())
    //     );
    //     setMovies(filteredMovies);
    // };

    const movieCards = data.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
    });

    return (
        <div className={styles.container}>
            {/* <Sidebar filterByName={filterByName} /> */}
            <div className={styles.cards}>{movieCards}</div>
        </div>
    );
}
