import translation from "@/assets/translations/ru.json";

export type Genre = keyof typeof translation.genres;

export interface Movie {
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: Genre;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
}

export interface Review {
    id: string;
    name: string;
    text: string;
    rating: number;
}

// export type Cinema = "Синема сад" | "4 с половиной звезды" | "Дружба";

export interface Cinema {
    id: string;
    name: string;
    movieIds: Array<Movie["id"]>;
}
