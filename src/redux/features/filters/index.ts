import { filterByGenre, filterByTitle } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    titleFilter: {
        value: "",
        filterFn: filterByTitle,
    },
    genreFilter: {
        value: "",
        filterFn: filterByGenre,
    },
};

export const filters = createSlice({
    name: "filters",
    initialState,
    reducers: {
        updateTitleFilter: (state, action: PayloadAction<string>) => {
            state.titleFilter.value = action.payload;
        },
        updateGenreFilter: (state, action: PayloadAction<string>) => {
            state.titleFilter.value = action.payload;
        },
    },
});

export const { updateTitleFilter } = filters.actions;
export const filtersReducer = filters.reducer;
