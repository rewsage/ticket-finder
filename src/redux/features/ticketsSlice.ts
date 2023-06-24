import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TicketsState = {
    amount: number;
};

const initialState = {
    amount: 1,
} as TicketsState;

export const tickets = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state) => {
            state.amount += 1;
        },
        decrement: (state) => {
            state.amount -= 1;
        },
    },
});

export const { increment, decrement, reset } = tickets.actions;
export const ticketsReducer = tickets.reducer;
