import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "@/types";
import { RootState } from "@/redux/store";

type BasketState = Record<Movie["id"], { tickets: number }>;

const initialState: BasketState = {};

export const basket = createSlice({
    name: "basket",
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<Movie["id"]>) => {
            const movieId = action.payload;
            delete state[movieId];
        },
        increment: (state, action: PayloadAction<Movie["id"]>) => {
            const movieId = action.payload;
            const movie = state[movieId];

            if (movie && movie.tickets < 30) {
                movie.tickets++;
            } else if (!movie) {
                state[movieId] = { tickets: 1 };
            }
        },
        decrement: (state, action: PayloadAction<Movie["id"]>) => {
            const movieId = action.payload;
            const movie = state[movieId];

            if (movie) {
                movie.tickets === 1 ? delete state[movieId] : movie.tickets--;
            }
        },
    },
});

export const { increment, decrement, remove } = basket.actions;
export const basketReducer = basket.reducer;

export const selectBasket = (state: RootState): BasketState => state.basket;
export const selectTicketsAmount = (state: RootState, id: Movie["id"]) => {
    const movie = state.basket[id];
    return movie?.tickets ?? 0;
};
export const selectTicketsTotal = (state: RootState) => {
    const basket = selectBasket(state);
    const movies = Object.values(basket);

    return movies.reduce((sum, movie) => {
        return sum + movie.tickets;
    }, 0);
};
