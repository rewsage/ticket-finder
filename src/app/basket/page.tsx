"use client";

import { selectBasket, selectTicketsTotal } from "@/redux/features/basket";
import styles from "./page.module.scss";
import { MovieCard } from "@/components/movie-card";
import { useAppSelector } from "@/redux/hooks";
import { useGetMoviesQuery } from "@/redux/services/moviesApi";
import { createPortal } from "react-dom";
import { Modal } from "../../components/modal";
import { useState } from "react";

export default function BasketPage() {
    const { data } = useGetMoviesQuery();
    const basket = useAppSelector((state) => selectBasket(state));
    const total = useAppSelector((state) => selectTicketsTotal(state));

    const basketMoviesId = Object.keys(basket);
    const basketMovies = (data ?? []).filter((movie) =>
        basketMoviesId.includes(movie.id)
    );

    const movieCards = basketMovies.map((movie) => {
        return <MovieCard key={movie.id} {...movie} isRemovable />;
    });

    return (
        <div className={styles.container}>
            <div className={styles.card}>{movieCards}</div>
            <div className={styles.total}>
                <h2>Итого билетов:</h2>
                <h2>{total}</h2>
            </div>
        </div>
    );
}
