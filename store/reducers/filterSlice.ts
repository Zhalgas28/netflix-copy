import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    year: "1965-2023",
    genre: "",
    rating: "1-10"
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
    resetFilters: (state) => {
      state.filters = initialState.filters
    }
  }
})

export const { setGenre, setRating, setYear, resetFilters } = filterSlice.actions

export default filterSlice.reducer