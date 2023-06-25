import { sfProText } from "@/assets/fonts";
import styles from "./sidebar.module.scss";
import classNames from "classnames";
import { Movie } from "@/types";
import { ChangeEventHandler } from "react";

interface SidebarProps {
    filterByName: (name: string) => void;
}

function Sidebar({ filterByName }: SidebarProps) {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        filterByName(value);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Фильтры поиска</h2>
            <div className={classNames(styles.filters, sfProText.className)}>
                <p className={styles.label}>Название</p>
                <input
                    className={styles.textfield}
                    placeholder="Введите название"
                    onChange={(e) => handleChange}
                ></input>

                {/* <select className={styles.select} placeholder="Выберете жанр">
                    <option selected>smth</option>
                    <option>smth2</option>
                    <option>smth3</option>
                </select> */}
            </div>
        </div>
    );
}

export { Sidebar };
