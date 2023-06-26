"use client";

import { BasketIcon } from "@/assets/icons";
import styles from "./header.module.scss";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { selectTicketsTotal } from "@/redux/features/basket";

function Header() {
    const ticketsTotal = useAppSelector((state) => selectTicketsTotal(state));

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.title}>
                Билетопоиск
            </Link>
            <Link href="/basket" className={styles.basket}>
                {!!ticketsTotal && (
                    <div className={styles.tickets}>{ticketsTotal}</div>
                )}
                <BasketIcon fill="white" />
            </Link>
        </header>
    );
}

export { Header };
