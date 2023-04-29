import { apiSlice } from "../api/apiSlice";

export const registerAPISlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (credentials) => ({
				url: "/register",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useRegisterMutation } = registerAPISlice;
