import { Genre } from "@/utils";

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

export interface Cinema {
    id: string;
    name: string;
    movieIds: Array<Movie["id"]>;
}
