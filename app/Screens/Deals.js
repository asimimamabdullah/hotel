import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import DealsCard from "../Components/DealsCard";
import { useSelector } from "react-redux";
import { selectHotels } from "../redux/hotels/hotelsSlice";

const Deals = ({ navigation }) => {
	const hotels = useSelector(selectHotels);
	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 20,
				gap: 10,
				paddingVertical: 20,
			}}>
			<Text style={{ color: "#bbb" }}>Available deals</Text>

			{hotels?.map((hotel, index) => (
				<DealsCard
					key={index}
					item={hotel}
					index={index}
					navigation={navigation}
				/>
			))}
		</ScrollView>
	);
};

export default Deals;

const styles = StyleSheet.create({});
