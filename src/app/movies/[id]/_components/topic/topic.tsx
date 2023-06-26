import styles from "./topic.module.scss";

interface TopicProps {
    title: string;
    text: string;
}

function Topic({ title, text, ...props }: TopicProps) {
    return (
        <div className={styles.container} {...props}>
            <h2 className={styles.title}>{title + ":"}&nbsp;</h2>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export { Topic };
