"use client";

import { ArrowIcon } from "@/assets/icons";
import styles from "./question.module.scss";
import { useState } from "react";
import classNames from "classnames";

interface QuestionProps {
    question: string;
    answer: string;
}

function Question({ question, answer }: QuestionProps) {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className={styles.container}>
            <div
                className={styles.question}
                onClick={() => setIsOpened((prev) => !prev)}
            >
                <h2>{question}</h2>
                <ArrowIcon
                    className={classNames(
                        styles.arrowIcon,
                        isOpened && styles.opened
                    )}
                />
            </div>
            {isOpened && <p className={styles.answer}>{answer}</p>}
        </div>
    );
}

export { Question };
