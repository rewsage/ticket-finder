"use client";

import { selectBasket, selectTicketsTotal } from "@/redux/features/basket";
import styles from "./page.module.scss";
import { useAppSelector } from "@/redux/hooks";
import { useGetMoviesQuery } from "@/redux/services/movies-api";
import { MovieList } from "../../components/movie-list";

export default function BasketPage() {
    const { data } = useGetMoviesQuery();
    const basket = useAppSelector((state) => selectBasket(state));
    const total = useAppSelector((state) => selectTicketsTotal(state));

    const basketMoviesId = Object.keys(basket);
    const basketMovies = (data ?? []).filter((movie) =>
        basketMoviesId.includes(movie.id)
    );

    return (
        <div className={styles.container}>
            <MovieList movies={basketMovies} isRemovable />
            <div className={styles.total}>
                <h2>Итого билетов:</h2>
                <h2>{total}</h2>
            </div>
        </div>
    );
}
