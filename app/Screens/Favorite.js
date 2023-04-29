import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FavoriteCard from "../Components/FavoriteCard";

const Favorite = () => {
	return (
		<View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
			<FavoriteCard />
			<FavoriteCard />
			<FavoriteCard />
			<FavoriteCard />
		</View>
	);
};

export default Favorite;

const styles = StyleSheet.create({});
