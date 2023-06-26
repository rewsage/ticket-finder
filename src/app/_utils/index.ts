import { Movie } from "@/types";
import { FilterParams } from "@/app/page";

export const filterMovies = (data: Movie[], filterParams: FilterParams) => {
    let movieList = data;
    if (!filterParams.cinema) movieList;

    const filteredMovies = data.filter((movie) => {
        if (
            filterParams.title !== "" &&
            !movie.title.toLowerCase().startsWith(filterParams.title)
        ) {
            console.log(movie.title, filterParams.title);
            return false;
        }

        if (filterParams.genre !== null && filterParams.genre !== movie.genre) {
            return false;
        }

        return true;
    });

    return filteredMovies;
};
