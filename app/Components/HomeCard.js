import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const HomeCard = ({ navigation, item }) => {
	return (
		<TouchableOpacity
			style={{ maxWidth: 180, minWidth: 160 }}
			onPress={() => navigation.navigate("Details", { item: item })}>
			<View
				style={{
					flexDirection: "row",
					padding: 8,
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<Text>{item?.name}</Text>
				<View style={{ padding: 5, backgroundColor: "dodgerblue" }}>
					<Text style={{ color: "#fff" }}>{item?.roomsAvailable}</Text>
				</View>
			</View>
			{/* <View style={{ backgroundColor: "#bbb", height: 140 }} /> */}
			<Image
				source={item?.image}
				style={{ height: 140, maxWidth: 170, borderRadius: 8 }}
			/>
		</TouchableOpacity>
	);
};

export default HomeCard;

const styles = StyleSheet.create({});
