import styles from "./page.module.scss";
import { Question } from "./_components/question";
import { FAQ } from "./_assets";

export default function FaqPage() {
    const questions = FAQ.map(({ question, answer }, index) => {
        return <Question question={question} answer={answer} key={index} />;
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Вопросы-ответы</h1>
            {questions}
        </div>
    );
}
