import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    genre: "",
    rating: "1-10",
    year: "1960-2030",
    sort: ""
  }
}

const filterSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setYear: (state, action: PayloadAction<string>) => {
      state.filters.year = action.payload
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.filters.genre = action.payload
    },
    setRating: (state, action: PayloadAction<string>) => {
      state.filters.rating = action.payload
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.filters.sort = action.payload
    },
    resetFilters: (state) => {
      state.filters = initialState.filters
    }
  }
})

export const { setGenre, setRating, setYear, setSort, resetFilters } = filterSlice.actions

export default filterSlice.reducer