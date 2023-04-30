import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingsCard from "../Components/BookingsCard";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../redux/user/authSlice";

const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	const user = useSelector(selectUser);
	const token = useSelector(selectToken);

	const getTickets = async () => {
		try {
			const auth = {
				headers: { Authorization: `Bearer ${token}` },
			};

			const res = await axios.get(
				`https://hotel-backend-production-2b14.up.railway.app/api/hotel/${user._id}`,
				auth,
			);
			setBookings(res.data.hotels);
		} catch (error) {
			setErrorMsg(error?.error.error || error);
		}
	};
	useEffect(() => {
		if (token) {
			getTickets();
		}
	}, [token]);

	return (
		<View style={{ flex: 1, padding: 20, gap: 15 }}>
			{bookings?.length > 0
				? bookings?.map((booking, index) => (
						<BookingsCard item={booking} key={index} />
				  ))
				: null}
		</View>
	);
};

export default Bookings;
