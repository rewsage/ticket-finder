import { MovieCard } from "@/components/movie-card";
import { Movie } from "@/types";
import styles from "./movie-list.module.scss";

function MovieList({ movies }: { movies: Movie[] }) {
    const movieCards = movies.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
    });

    return <div className={styles.container}>{movieCards}</div>;
}

export { MovieList };
