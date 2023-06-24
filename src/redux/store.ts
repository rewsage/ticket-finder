"use clinet";

import { moviesApi } from "@/redux/services/moviesApi";
import { configureStore } from "@reduxjs/toolkit";
import { ticketsReducer } from "./features/ticketsSlice";

export const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        // Add the generated reducer as a specific top-level slice
        // [moviesApi.reducerPath]: moviesApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
