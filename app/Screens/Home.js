import React from "react";
import { ScrollView } from "react-native";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { search_32 } from "../../assets/icons";
import HomeCard from "../Components/HomeCard";
import { selectHotels } from "../redux/hotels/hotelsSlice";

const Home = ({ navigation }) => {
	const hotels = useSelector(selectHotels);
	return (
		<ScrollView
			contentContainerStyle={{
				flex: 1,
				backgroundColor: "rgb(248,248,248)",
			}}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					paddingHorizontal: 20,
					borderBottomColor: "#dddddd",
					borderBottomWidth: 1,
				}}>
				<Image
					source={search_32}
					style={{ width: 20, height: 20, tintColor: "#666" }}
				/>
				<TextInput
					placeholder="Search"
					placeholderTextColor={"#999999"}
					style={{ flex: 1, padding: 12 }}
				/>
			</View>

			{/* cards  */}
			<View
				style={{
					padding: 20,
					flexDirection: "row",
					flexWrap: "wrap",
					gap: 20,
					justifyContent: "space-between",
				}}>
				{hotels?.map((item, index) => (
					<HomeCard navigation={navigation} item={item} key={index} />
				))}
			</View>
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({});
