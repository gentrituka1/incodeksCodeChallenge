import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CityState {
  searchedCities: string[];
}

const initialState: CityState = {
  searchedCities: [],
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      !state.searchedCities.includes(action.payload) &&
        state.searchedCities.push(action.payload);
    },
  },
});

export const { addCity } = citySlice.actions;

export default citySlice.reducer;
