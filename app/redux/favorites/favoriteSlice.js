import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: { favorites: null },
	reducers: {
		setFavorites: (state, action) => {
			state.favorites = action.payload.favorites;
		},
	},
});

export const { setFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;

export const selectFavorites = (state) => state.favorite.favorites;
