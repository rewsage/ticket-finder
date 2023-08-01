import { moviesApi } from "@/redux/services/movies-api";
import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./features/basket";
import { listenerMiddleware } from "./middlewares";

const sessionBasketState = typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("basket") ?? "{}") : {};

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    preloadedState: { basket: sessionBasketState },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            moviesApi.middleware,
            listenerMiddleware.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
