"use client";

import styles from "./ticket-counter.module.scss";
import { Button } from "@/components/button";
import {
    decrement,
    increment,
    selectTicketsAmount,
} from "@/redux/features/basket";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Movie } from "@/types";

interface TicketCounterProps {
    movieId: Movie["id"];
}

function TicketCounter({ movieId }: TicketCounterProps) {
    const dispatch = useAppDispatch();
    const tickets = useAppSelector((state) =>
        selectTicketsAmount(state, movieId)
    );

    return (
        <div className={styles.container}>
            <Button
                size="small"
                status={tickets === 0 ? "disabled" : "active"}
                onClick={() => dispatch(decrement(movieId))}
            >
                -
            </Button>
            <p className={styles.counter}>{tickets}</p>
            <Button
                size="small"
                status={tickets === 30 ? "disabled" : "active"}
                onClick={() => dispatch(increment(movieId))}
            >
                +
            </Button>
        </div>
    );
}

export { TicketCounter };
