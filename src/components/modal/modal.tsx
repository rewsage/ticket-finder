import { CrossIcon } from "@/assets/icons";
import styles from "./modal.module.scss";
import { Button } from "@/components/button";
import { MouseEventHandler, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    title: string;
    message: string;
    onAccept?: MouseEventHandler;
    onDeny?: MouseEventHandler;
}

function Modal({ title, message, onAccept, onDeny }: ModalProps) {
    const modalContent = useRef<HTMLDivElement>(null);

    const handleOutsideClick: MouseEventHandler = (e) => {
        const container = e.target;

        if (container instanceof Element) {
            modalContent.current &&
                !modalContent.current.contains(container) &&
                onDeny &&
                onDeny(e);
        }
    };

    return createPortal(
        <div className={styles.container} onClick={handleOutsideClick}>
            <div className={styles.content} ref={modalContent}>
                <div className={styles.headline}>
                    <h2>{title}</h2>
                    <CrossIcon className={styles.close} onClick={onDeny} />
                </div>
                <p className={styles.message}>{message}</p>
                <div className={styles.answer}>
                    <Button onClick={onAccept}>Да</Button>
                    <Button variant="outlined" onClick={onDeny}>
                        Нет
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export { Modal };
