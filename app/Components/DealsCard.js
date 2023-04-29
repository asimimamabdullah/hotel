import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import {} from "react-native";

const DealsCard = ({ index, item, navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Details", { item: item })}
			style={{ gap: 5, borderRadius: 5 }}>
			{/* <View
				style={{
					backgroundColor: "rgb(104,112,138)",
					height: 170,
					borderRadius: 5,
				}}
			/> */}
			<Image
				source={item?.image}
				style={{ height: 170, width: "100%", borderRadius: 5 }}
			/>
			<View style={{ flexDirection: "row" }}>
				<View
					style={{
						paddingHorizontal: 20,
						justifyContent: "space-between",
						borderRightColor: "#ddd",
						borderRightWidth: 0.6,
					}}>
					<Text style={{ fontSize: 18, fontWeight: 500 }}>
						{new Date(Date.now()).toDateString().substring(8, 11)}
					</Text>
					<Text style={{ color: "#999", fontSize: 13 }}>
						{new Date(Date.now()).toDateString().substring(0, 4)}
					</Text>
				</View>
				<View
					style={{
						paddingHorizontal: 20,
						justifyContent: "space-between",
					}}>
					<Text>Deal {index + 1}</Text>
					<Text style={{ color: "#999", fontSize: 13 }}>{item?.name}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default DealsCard;

const styles = StyleSheet.create({});
