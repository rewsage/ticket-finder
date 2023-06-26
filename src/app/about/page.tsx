import styles from "./page.module.scss";
import { aboutData } from "./_assets";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "О нас",
};

export default async function AboutPage() {
    return (
        <div className={styles.container}>
            <h1>{aboutData.title}</h1>
            {aboutData.text.map((paragraph, index) => {
                return (
                    <p className={styles.text} key={index}>
                        {paragraph}
                    </p>
                );
            })}
        </div>
    );
}
