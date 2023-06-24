import styles from "./page.module.scss";
import { MovieCard } from "@/components/movie-card";
import { Movie } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Корзина",
};

export default async function BasketPage() {
    const movies = await getMovies();
    const movieCards = (movies?.slice(2, 5) ?? []).map((movie) => {
        return <MovieCard key={movie.id} {...movie} isRemovable={true} />;
    });

    return (
        <div className={styles.container}>
            <div className={styles.card}>{movieCards}</div>
            <div className={styles.total}>
                <h2>Итого билетов:</h2>
                <h2>7</h2>
            </div>
        </div>
    );
}

async function getMovies() {
    let result = null;

    try {
        const res = await fetch(`http://localhost:3001/api/movies`);
        result = (await res.json()) as Movie[];
    } catch (err) {
        console.log(err);
    }

    return result;
}
