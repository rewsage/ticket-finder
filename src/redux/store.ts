import { moviesApi } from "@/redux/services/movies-api";
import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./features/basket";
import { filtersReducer } from "./features/filters";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
