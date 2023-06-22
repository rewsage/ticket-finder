import { capitalize, getDictionary } from "@/utils";
import styles from "./movie-cards.module.scss";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Genre } from "@/app/types";

interface MovieCardProps {
    title: string;
    posterUrl: string;
    genre: Genre;
}

async function MovieCard({ title, posterUrl, genre }: MovieCardProps) {
    const dict = await getDictionary("ru");

    return (
        <div className={styles.container}>
            <Image
                src={posterUrl}
                width={100}
                height={150}
                alt=""
                className={styles.poster}
            />
            <div className={styles.text}>
                <p className={styles.title}>{title}</p>
                <p className={styles.genre}>{capitalize(dict.genres[genre])}</p>
            </div>
            <div className={styles.tickets}>
                <Button size="small" status="disabled">
                    -
                </Button>
                <p className={styles.counter}>0</p>
                <Button size="small">+</Button>
            </div>
        </div>
    );
}

export { MovieCard };
