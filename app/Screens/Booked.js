import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Booked = ({ navigation }) => {
	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				gap: 100,
				flex: 1,
			}}>
			<Text style={{ fontSize: 18 }}>Booked your room</Text>

			<View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Home")}
					style={{
						backgroundColor: "rgb(60,113,143)",
						padding: 15,
						flex: 1,
					}}>
					<Text style={{ color: "white", textAlign: "center" }}>Done</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Booked;

const styles = StyleSheet.create({});
