"use client";

import styles from "./styles/page.module.scss";
import { MovieCard } from "@/components/movie-card";
import { Sidebar } from "./components/sidebar";
import { useGetMoviesQuery } from "@/redux/services/moviesApi";

export default function Home() {
    const { data } = useGetMoviesQuery();

    const movieCards = (data ?? []).map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
    });

    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.cards}>{movieCards}</div>
        </div>
    );
}
