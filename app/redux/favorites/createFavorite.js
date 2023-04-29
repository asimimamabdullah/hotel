import { apiSlice } from "../api/apiSlice";

export const favoriteAPISlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createFavorite: builder.mutation({
			query: (credentials) => ({
				url: "/favorite",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useCreateFavoriteMutation } = favoriteAPISlice;
