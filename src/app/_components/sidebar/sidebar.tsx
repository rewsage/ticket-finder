"use client";

import { sfProText } from "@/assets/fonts";
import styles from "./sidebar.module.scss";
import classNames from "classnames";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { FilterParams } from "@/app/page";
import { Dropdown } from "@/app/_components/dropdown";
import { Cinema, Genre } from "@/types";
import { useGetCinemasQuery } from "@/redux/services/movies-api";

interface SidebarProps {
    updateFilterParams: Dispatch<SetStateAction<FilterParams>>;
}

type CinemaOptions = {
    [id: Cinema["id"]]: string;
    reset: string;
};

const cinemaOptions: CinemaOptions = {
    reset: "Не выбран",
};

const genreOptions: Record<Genre | "reset", string> = {
    reset: "Не выбран",
    action: "Боевик",
    comedy: "Комедия",
    fantasy: "Фэнтези",
    horror: "Ужасы",
};

function Sidebar({ updateFilterParams }: SidebarProps) {
    const { data } = useGetCinemasQuery();

    const handleTitleFiltration: ChangeEventHandler<HTMLInputElement> = (e) => {
        updateFilterParams((prev) => ({
            ...prev,
            title: e.target.value.toLowerCase(),
        }));
    };

    const handleGenreFiltration = (option: Genre | "reset") => {
        updateFilterParams((prev) => ({
            ...prev,
            genre: option === "reset" ? null : option,
        }));
    };

    const handleCinemaFiltration = (option: Cinema["id"] | "reset") => {
        updateFilterParams((prev) => ({
            ...prev,
            cinema: option === "reset" ? null : option,
        }));
    };

    for (let cinema of data ?? []) {
        const { id, name } = cinema;
        cinemaOptions[id] = name;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Фильтры поиска</h2>
            <div className={classNames(styles.filters, sfProText.className)}>
                <p className={styles.label}>Название</p>
                <input
                    className={styles.textfield}
                    placeholder="Введите название"
                    onChange={handleTitleFiltration}
                ></input>

                <p className={styles.label}>Жанр</p>
                <Dropdown
                    title="Выберете жанр"
                    options={genreOptions}
                    onSelect={handleGenreFiltration as (option: string) => void}
                />

                <p className={styles.label}>Кинотеатр</p>
                <Dropdown
                    title="Выберете кинотеатр"
                    options={cinemaOptions}
                    onSelect={handleCinemaFiltration}
                />
            </div>
        </div>
    );
}

export { Sidebar };
