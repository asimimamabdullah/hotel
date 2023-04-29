import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { DatePickerModal } from "react-native-paper-dates";
import { useSelector } from "react-redux";
import { useCreateHotelBookingMutation } from "../redux/hotels/hotelRoom";
import { selectToken, selectUser } from "../redux/user/authSlice";

const HotelDetails = ({ navigation, route }) => {
	const { item } = route.params;
	const [location, setLocation] = useState(null);
	const [error, setError] = useState(null);
	const user = useSelector(selectUser);

	const [range, setRange] = useState({
		startDate: undefined,
		endDate: undefined,
	});
	const [open, setOpen] = useState(false);
	const token = useSelector(selectToken);

	const onDismiss = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	const onConfirm = useCallback(
		({ startDate, endDate }) => {
			setOpen(false);
			setRange({ startDate, endDate });
		},
		[setOpen, setRange],
	);

	useEffect(() => {
		if (!location) {
			(async () => {
				let { status } = await Location.requestForegroundPermissionsAsync();
				if (status !== "granted") {
					setError("location permission was denied");
					return;
				}

				let location = await Location.getCurrentPositionAsync({});
				let regionName = await Location.reverseGeocodeAsync({
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
				});

				setLocation({ location: location.coords, regionName });
			})();
		}
	}, []);

	const [bookRoom, { loading }] = useCreateHotelBookingMutation();

	const onBook = async () => {
		if (token) {
			try {
				await bookRoom({
					item: {
						name: item.name,
						price: item.price,
						people: 2,
						dates: range,
						user_id: user._id,
					},
				}).unwrap();
				navigation.navigate("Booked");
			} catch (error) {
				setError(error?.data?.error);
			}
		} else setError("Please Login");
	};

	return (
		<View>
			{error && (
				<View
					style={{
						position: "absolute",
						top: 40,
						left: 0,
						right: 0,
						flexDirection: "row",
					}}>
					<TouchableOpacity
						style={{ backgroundColor: "red", padding: 10, flex: 1 }}>
						<Text style={{ color: "white", textAlign: "center" }}>
							{error}
						</Text>
					</TouchableOpacity>
				</View>
			)}
			{location?.location && (
				<MapView
					provider={PROVIDER_GOOGLE}
					style={{ height: 200, width: "100%" }}
					initialRegion={{
						latitude: location?.location?.latitude,
						longitude: location?.location?.longitude,
						latitudeDelta: 0.104,
						longitudeDelta: 0,
					}}
				/>
			)}
			<View style={{ backgroundColor: "#fff" }}>
				<TouchableOpacity
					onPress={() => setOpen(!open)}
					style={{
						paddingHorizontal: 20,
						paddingVertical: 20,
						borderBottomColor: "#ddd",
						borderBottomWidth: 0.5,
					}}>
					<Text>Booking Date</Text>
					{range?.startDate ? (
						<Text style={{ color: "#999" }}>
							{new Date(range?.startDate).toDateString()} {"->"}{" "}
							{new Date(range?.endDate).toDateString()}
						</Text>
					) : null}
					<DatePickerModal
						locale="en"
						mode="range"
						visible={open}
						onDismiss={onDismiss}
						startDate={range.startDate}
						endDate={range.endDate}
						onConfirm={onConfirm}
					/>
				</TouchableOpacity>

				<View
					style={{
						paddingHorizontal: 20,
						paddingVertical: 20,
						borderBottomColor: "#ddd",
						borderBottomWidth: 0.5,
					}}>
					<Text>Location</Text>
					<Text style={{ fontSize: 13, color: "#999" }}>
						Address line 1, City center, 78451
					</Text>
				</View>

				<View
					style={{
						paddingHorizontal: 20,
						paddingVertical: 20,
						borderBottomColor: "#ddd",
						borderBottomWidth: 0.7,
					}}>
					<Text>Adults</Text>
					<Text style={{ fontSize: 13, color: "#999" }}>2</Text>
				</View>

				{/* <View
					style={{
						paddingHorizontal: 20,
						paddingVertical: 20,
						borderBottomColor: "#ddd",
						borderBottomWidth: 0.7,
					}}>
					<Text>Child</Text>
					<Text style={{ fontSize: 13, color: "#999" }}>1</Text>
				</View> */}
			</View>

			<View
				style={{
					marginVertical: 20,
					paddingVertical: 20,
					paddingHorizontal: 20,
					gap: 10,
					justifyContent: "center",
				}}>
				<TouchableOpacity
					onPress={onBook}
					style={{ padding: 12, backgroundColor: "rgb(60,113,143)" }}>
					<Text style={{ color: "#fff", textAlign: "center" }}>Book</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ padding: 12, backgroundColor: "rgb(60,113,143)" }}>
					<Text style={{ color: "#fff", textAlign: "center" }}>
						Favorite
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HotelDetails;

const styles = StyleSheet.create({});
