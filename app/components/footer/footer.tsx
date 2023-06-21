import { BasketIcon } from "@/assets/icons/";
import styles from "./footer.module.scss";

function Footer() {
    return (
        <footer className={styles.header}>
            <p className={styles.link}>Вопросы-ответы</p>
            <p className={styles.link}>О нас</p>
        </footer>
    );
}

export { Footer };
