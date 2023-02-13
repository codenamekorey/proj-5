import { createSlice } from "@reduxjs/toolkit";
import initalCountry from "../../assets/initialCountry";

export const displayCountrSlice = createSlice({
	name: "displayCountry",
	initialState: {
		value: initalCountry,
	},
	reducers: {
		setDisplayCountry: (state, action) => {
			state.value = action.payload;
		},

		deleteDisplayCountry: (state) => {
			state.value = null;
		},
	},
});

export const { setDisplayCountry, deleteDisplayCountry } =
	displayCountrSlice.actions;

export const selectDisplay = (state) => state.displayedCountry.value;

export default displayCountrSlice.reducer;
