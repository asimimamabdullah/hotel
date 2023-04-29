import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../user/authSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://10.0.2.2:3000/api",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

export const apiSlice = createApi({
	baseQuery: baseQuery,
	endpoints: (builder) => ({}),
});
