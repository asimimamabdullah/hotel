import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./user/authSlice.js";
import favoriteReducer from "./favorites/favoriteSlice.js";
import hotelReducer from "./hotels/hotelsSlice.js";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
		favorite: favoriteReducer,
		hotel: hotelReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			apiSlice.middleware,
		),
	devTools: true,
});
