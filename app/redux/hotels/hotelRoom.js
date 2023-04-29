import { apiSlice } from "../api/apiSlice";

export const hotelRoomSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createHotelBooking: builder.mutation({
			query: (credentials) => ({
				url: "/hotel",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useCreateHotelBookingMutation } = hotelRoomSlice;
