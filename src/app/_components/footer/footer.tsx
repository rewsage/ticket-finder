import styles from "./footer.module.scss";
import Link from "next/link";

function Footer() {
    return (
        <footer className={styles.header}>
            <Link href="/faq" className={styles.link}>
                Вопросы-ответы
            </Link>
            <Link href="/about" className={styles.link}>
                О нас
            </Link>
        </footer>
    );
}

export { Footer };
