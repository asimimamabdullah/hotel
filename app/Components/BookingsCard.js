import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

const BookingsCard = ({ item }) => {
	return (
		<TouchableOpacity style={{ flexDirection: "row" }}>
			<View style={{ width: 100, backgroundColor: "#cccc" }} />
			{/* Text  */}
			<View
				style={{
					gap: 15,
					flex: 1,
					paddingHorizontal: 10,
					paddingVertical: 5,
				}}>
				<View>
					<Text style={{ fontSize: 12, color: "#999" }}>{item?.name}</Text>
					<Text style={{ fontWeight: 500 }}>
						Booking {item?.people} people
					</Text>
					<Text style={{ fontSize: 12, color: "#999" }}>Dark Brown</Text>
					<Text style={{ fontSize: 12, color: "#999" }}>
						Non-Returnable
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Text style={{ color: "#999", fontSize: 12 }}>
						People: {item?.people}
					</Text>
					<Text>£ {item?.price}</Text>
				</View>
			</View>
			{/* </View> */}
		</TouchableOpacity>
	);
};

export default BookingsCard;
