import { Movie, Review } from "@/types";
import Image from "next/image";
import styles from "./page.module.scss";
import { capitalize, getDictionary } from "@/utils";
import { Topic } from "./components/topic";
import { Comment } from "./components/comment";
import { TicketCounter } from "@/components/ticket-counter";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const id = params.id;
    const data = await getMovie(id);

    return {
        title: data?.title ? data.title : "TicketFinder",
    };
}

async function MoviePage({ params }: { params: { id: string } }) {
    const movie = await getMovie(params.id);
    const dict = await getDictionary("ru");

    if (!movie) return <p>No data</p>;

    const reviews = await getMovieReviews(movie.id);
    const comments = (reviews ?? []).map((review) => {
        return <Comment key={review.id} {...review} />;
    });

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Image
                    width={400}
                    height={500}
                    src={movie.posterUrl}
                    className={styles.poster}
                    alt=""
                />

                <div className={styles.info}>
                    <div className={styles.headline}>
                        <h1>{movie.title}</h1>
                        <TicketCounter movieId={movie.id} />
                    </div>

                    <Topic
                        title="Жанр"
                        text={capitalize(dict.genres[movie.genre])}
                    />
                    <Topic title="Год выпуска" text={movie.releaseYear + ""} />
                    <Topic title="Рейтнг" text={movie.rating + ""} />
                    <Topic title="Режисер" text={movie.director} />

                    <div className={styles.description}>
                        <h2 className={styles.subtitle}>Описание</h2>
                        <p className={styles.text}>{movie.description}</p>
                    </div>
                </div>
            </main>

            {comments}
        </div>
    );
}

async function getMovie(id: string) {
    let result = null;
    try {
        const res = await fetch(
            `http://localhost:3001/api/movie?movieId=${id}`
        );
        result = (await res.json()) as Movie;
    } catch (err) {
        console.log(err);
    }
    return result;
}

async function getMovieReviews(id: string) {
    let result = null;
    try {
        const res = await fetch(
            `http://localhost:3001/api/reviews?movieId=${id}`
        );
        result = (await res.json()) as Review[];
    } catch (err) {
        console.log(err);
    }
    return result;
}

export default MoviePage;
