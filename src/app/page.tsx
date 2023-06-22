import styles from "@/app/styles/page.module.scss";
import { MovieCard } from "./components/movie-card";
import { Genre } from "./types";

type Movie = {
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: Genre;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
};

export default async function Home() {
    const movies: Movie[] = await getMovies();

    const movieCards = movies.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
    });

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>Smth about us</div>
            <div className={styles.cards}>{movieCards}</div>
        </div>
    );
}

async function getMovies() {
    const res = await fetch(`http://localhost:3001/api/movies`);
    return res.json();
}
