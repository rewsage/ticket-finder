"use client";

import { Movie, Review } from "@/types";
import Image from "next/image";
import styles from "./page.module.scss";
import { capitalize, getDictionary } from "@/utils";
import { Topic } from "./_components/topic";
import { Comment } from "./_components/comment";
import { TicketCounter } from "@/components/ticket-counter";
import {
    useGetMovieQuery,
    useGetMovieReviewsQuery,
} from "@/redux/services/movies-api";
import { useState } from "react";
import { Modal } from "@/components/modal";
import { remove } from "@/redux/features/basket";
import { useAppDispatch } from "@/redux/hooks";

function MoviePage({ params }: { params: { id: string } }) {
    const { data: movie } = useGetMovieQuery(params.id);
    const { data: reviews } = useGetMovieReviewsQuery(movie?.id ?? "", {
        skip: !movie?.id,
    });
    const [isModalActive, setIsModalActive] = useState(false);
    const dispatch = useAppDispatch();

    if (!movie) {
        return null;
    }

    const dict = getDictionary("ru");
    const genre = dict.genres[movie.genre];

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
                        <TicketCounter
                            movieId={movie.id}
                            triggerModal={() => setIsModalActive(true)}
                        />
                    </div>

                    <Topic
                        title="Жанр"
                        text={capitalize(genre)}
                    />
                    <Topic title="Год выпуска" text={movie.releaseYear + ""} />
                    <Topic title="Рейтинг" text={movie.rating + ""} />
                    <Topic title="Режисер" text={movie.director} />

                    <div className={styles.description}>
                        <h2 className={styles.subtitle}>Описание</h2>
                        <p className={styles.text}>{movie.description}</p>
                    </div>
                </div>
            </main>

            {comments}

            {isModalActive && (
                <Modal
                    title="Удаление билета"
                    message="Вы уверены, что хотите удалить билет?"
                    onAccept={() => {
                        setIsModalActive(false);
                        dispatch(remove(movie.id));
                    }}
                    onDeny={() => setIsModalActive(false)}
                />
            )}
        </div>
    );
}

export default MoviePage;
