import { BasketIcon } from "@/assets/icons/";
import styles from "./header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Билетопоиск</h1>
            <BasketIcon fill="white" />
        </header>
    );
}

export { Header };
