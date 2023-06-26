"use client";

import { MinusIcon, PlusIcon } from "@/assets/icons";
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
    triggerModal: () => void;
}

function TicketCounter({ movieId, triggerModal }: TicketCounterProps) {
    const dispatch = useAppDispatch();
    const tickets = useAppSelector((state) =>
        selectTicketsAmount(state, movieId)
    );

    const handleMinusClick = () => {
        if (tickets === 1) {
            triggerModal();
        } else {
            dispatch(decrement(movieId));
        }
    };

    return (
        <div className={styles.container}>
            <Button
                size="small"
                status={tickets === 0 ? "disabled" : "active"}
                onClick={handleMinusClick}
            >
                <MinusIcon className={styles.icon} />
            </Button>
            <p className={styles.counter}>{tickets}</p>
            <Button
                size="small"
                status={tickets === 30 ? "disabled" : "active"}
                onClick={() => dispatch(increment(movieId))}
            >
                <PlusIcon className={styles.icon} />
            </Button>
        </div>
    );
}

export { TicketCounter };
