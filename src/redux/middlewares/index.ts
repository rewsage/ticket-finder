import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { decrement, increment, remove } from "@/redux/features/basket";
import { RootState } from "@/redux/store";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
    matcher: isAnyOf(increment, decrement, remove),
    effect: (action, listenerApi) =>
        sessionStorage.setItem(
            "basket",
            JSON.stringify((listenerApi.getState() as RootState).basket)
        ),
});
