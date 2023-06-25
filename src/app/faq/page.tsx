import { ArrowIcon } from "@/assets/icons";
import styles from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ",
};

export default function FaqPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Вопросы-ответы</h1>

            <div className={styles.dropdown}>
                <div className={styles.question}>
                    <h2>Что такое билетопоиск?</h2>
                    <ArrowIcon />
                </div>
            </div>
        </div>
    );
}
