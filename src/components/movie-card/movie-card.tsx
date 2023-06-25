"use client";

import { capitalize, getDictionary } from "@/utils";
import styles from "./movie-card.module.scss";
import Image from "next/image";
import { Movie } from "@/types";
import Link from "next/link";
import { TicketCounter } from "@/components/ticket-counter";
import { CrossIcon } from "@/assets/icons";
import { useAppDispatch } from "@/redux/hooks";
import { remove } from "@/redux/features/basket";
import { useState } from "react";
import { Modal } from "@/components/modal";
import { createPortal } from "react-dom";

interface MovieCard extends Movie {
    isRemovable?: boolean;
}

function MovieCard({ title, posterUrl, genre, id, isRemovable }: MovieCard) {
    const dispatch = useAppDispatch();
    const [isModalActive, setIsModalActive] = useState(false);

    const dict = getDictionary("ru");

    return (
        <div className={styles.container}>
            <Image
                src={posterUrl}
                width={100}
                height={120}
                priority={true}
                alt=""
                className={styles.poster}
            />
            <div className={styles.text}>
                <div className={styles.headline}>
                    <Link href={`/movies/${id}`} className={styles.title}>
                        {title}
                    </Link>
                    <TicketCounter
                        movieId={id}
                        triggerModal={() => setIsModalActive(true)}
                    />
                    {isRemovable && (
                        <CrossIcon
                            className={styles.crossIcon}
                            onClick={() => setIsModalActive(true)}
                        />
                    )}
                </div>
                <p className={styles.genre}>{capitalize(dict.genres[genre])}</p>
            </div>
            {isModalActive && (
                <Modal
                    title="Удаление билета"
                    message="Вы уверены, что хотите удалить билет?"
                    onAccept={() => dispatch(remove(id))}
                    onDeny={() => setIsModalActive(false)}
                />
            )}
        </div>
    );
}

export { MovieCard };
