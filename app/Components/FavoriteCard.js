import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { heart } from "../../assets/icons";

const FavoriteCard = () => {
	return (
		<TouchableOpacity style={{ flex: 1, minWidth: 170 }}>
			<View
				style={{ backgroundColor: "#ddd", height: 160, minWidth: 170 }}
			/>
			<View>
				<View
					style={{
						flexDirection: "row",
						top: -19,
						justifyContent: "center",
					}}>
					<View
						style={{
							padding: 5,
							borderRadius: 40,
							backgroundColor: "rgb(60,113,143)",
						}}>
						<Image
							source={heart}
							style={{ width: 28, height: 28, tintColor: "#fff" }}
						/>
					</View>
				</View>
				<Text style={{ textAlign: "center" }}>Favorite 1</Text>
				<Text
					style={{ fontSize: 14, textAlign: "center", color: "#909090" }}>
					Hotel 1
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default FavoriteCard;

const styles = StyleSheet.create({});
