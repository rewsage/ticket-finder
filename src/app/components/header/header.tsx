import { BasketIcon } from "@/assets/icons";
import styles from "./header.module.scss";
import Link from "next/link";

function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.title}>
                Билетопоиск
            </Link>
            <BasketIcon fill="white" />
        </header>
    );
}

export { Header };
