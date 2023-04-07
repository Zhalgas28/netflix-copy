import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  page: 1
}

const filterSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  }
})

export const { setPage } = filterSlice.actions

export default filterSlice.reducer