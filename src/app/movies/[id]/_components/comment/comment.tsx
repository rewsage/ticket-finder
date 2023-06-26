import styles from "./comment.module.scss";
import { Review } from "@/types";
import { Avatar } from "../avatar";

function Comment({ name, text, rating }: Review) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Avatar />
            </div>

            <div className={styles.comment}>
                <div className={styles.headline}>
                    <h2 className={styles.username}>{name}</h2>
                    <p className={styles.rating}>
                        Оценка: <b>{rating}</b>
                    </p>
                </div>

                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
}

export { Comment };
