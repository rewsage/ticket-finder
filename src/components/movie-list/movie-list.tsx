import { MovieCard } from "@/components/movie-card";
import { Movie } from "@/types";
import styles from "./movie-list.module.scss";

function MovieList({
    movies,
    isRemovable,
}: {
    movies: Movie[];
    isRemovable?: boolean;
}) {
    const movieCards = movies.map((movie) => {
        return (
            <MovieCard key={movie.id} {...movie} isRemovable={isRemovable} />
        );
    });

    return <div className={styles.container}>{movieCards}</div>;
}

export { MovieList };
