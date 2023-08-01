import dictionary from "@/assets/translations/ru.json";
import { Movie } from "@/types";

export function capitalize(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}

const dictionaries = {
    ru: dictionary,
};

type Locale = keyof typeof dictionaries;
export const getDictionary = (locale: Locale) => dictionaries[locale];

export type Genre = keyof ReturnType<typeof getDictionary>["genres"];

export const filterByTitle = (movies: Movie[], value: string) => {
    return movies.filter((movie) => {
        return movie.title.toLocaleLowerCase().startsWith(value);
    });
};

export const filterByGenre = (movies: Movie[], genre: string) => {
    return movies.filter((movie) => {
        return movie.genre === genre;
    });
};
