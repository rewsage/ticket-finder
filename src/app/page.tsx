import styles from "./styles/page.module.scss";
import { MovieCard } from "@/components/movie-card";
import { Movie } from "@/types";
import { Sidebar } from "./components/sidebar";

export default async function Home() {
    const movies = await getMovies();
    const movieCards = (movies ?? []).map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
    });

    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.cards}>{movieCards}</div>
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
