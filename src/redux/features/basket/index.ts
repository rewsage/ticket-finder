import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "@/types";
import { RootState } from "@/redux/store";

type BasketState = Record<Movie["id"], number>;

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
            const tickets = state[movieId];

            if (tickets && tickets < 30) {
                state[movieId]++;
            } else if (!tickets) {
                state[movieId] = 1;
            }
        },
        decrement: (state, action: PayloadAction<Movie["id"]>) => {
            const movieId = action.payload;
            const tickets = state[movieId];

            if (tickets) {
                tickets === 1 ? delete state[movieId] : state[movieId]--;
            }
        },
    },
});

export const { increment, decrement, remove } = basket.actions;
export const basketReducer = basket.reducer;

export const selectBasket = (state: RootState): BasketState => state.basket;
export const selectTicketsAmount = (state: RootState, id: Movie["id"]) => {
    const tickets = state.basket[id];
    return tickets ?? 0;
};
export const selectTicketsTotal = (state: RootState) => {
    const basket = selectBasket(state);

    return Object.values(basket).reduce((sum, tickets) => {
        return sum + tickets;
    }, 0);
};
