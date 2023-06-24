"use client";

import styles from "./ticket-counter.module.scss";
import { Button } from "@/components/button";

function TicketCounter() {
    return (
        <div className={styles.container}>
            <Button size="small" status="disabled">
                -
            </Button>
            <p className={styles.counter}>0</p>
            <Button size="small">+</Button>
        </div>
    );
}

export { TicketCounter };
