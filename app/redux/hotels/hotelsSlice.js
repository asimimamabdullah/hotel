import { createSlice } from "@reduxjs/toolkit";
import { Mariott,
	Aloft,
	Embassy,
	FourSeasons,
	HolidayInn,
	HotelInn,
} from "../../../assets/images";

const hotels = [
	{
		name: "Four Seasons",
		roomsAvailable: 11,
		price: 29,
		image: FourSeasons,
	},

	{
		name: "Hotel Inn",
		roomsAvailable: 30,
		price: 96,
		image: HotelInn,
	},
	{
		name: "Holiday Inn Express",
		roomsAvailable: 2,
		price: 43,
		image: HolidayInn,
	},
	{
		name: "Aloft Hotels",
		roomsAvailable: 17,
		price: 80,
		image: Aloft,
	},
	{
		name: "Embassy Suites",
		roomsAvailable: 19,
		price: 110,
		image: Embassy,
	},
	{
		name: "Mariott International",
		roomsAvailable: 9,
		price: 120,
		image: Mariott,
	},
];
const hotelsSlice = createSlice({
	name: "hotel",
	initialState: { hotels: hotels },
	reducers: {},
});

export default hotelsSlice.reducer;

export const selectHotels = (state) => state.hotel.hotels;
