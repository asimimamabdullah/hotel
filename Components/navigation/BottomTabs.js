import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Image } from "react-native";
import Bookings from "../../app/Screens/Bookings";
import Deals from "../../app/Screens/Deals";
import Favorite from "../../app/Screens/Favorite";
import Home from "../../app/Screens/Home";
import Profile from "../../app/Screens/Profile";
import { deals, heart, search_32, star, user } from "../../assets/icons";

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShown: true,
				headerStyle: { backgroundColor: "rgb(60,113,143)" },
				headerTitleAlign: "center",
				headerTintColor: "#fff",
				tabBarItemStyle: {
					paddingVertical: 6,
				},
				tabBarStyle: {
					backgroundColor: "rgb(60,113,143)",
				},
			}}>
			<BottomTab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={search_32}
							style={{
								width: 18,
								height: 18,
								tintColor: focused ? "dodgerblue" : "#eee",
							}}
						/>
					),
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontSize: 10,
								color: focused ? "dodgerblue" : "#eee",
								letterSpacing: 0.1,
							}}>
							Explore
						</Text>
					),
				}}
			/>
			<BottomTab.Screen
				name="Deals"
				component={Deals}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={deals}
							style={{
								width: 18,
								height: 18,
								tintColor: focused ? "dodgerblue" : "#eee",
							}}
						/>
					),
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontSize: 10,
								color: focused ? "dodgerblue" : "#eee",
								letterSpacing: 0.1,
							}}>
							Deals
						</Text>
					),
				}}
			/>
			<BottomTab.Screen
				name="Bookings"
				component={Bookings}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={star}
							style={{
								width: 18,
								height: 18,
								tintColor: focused ? "dodgerblue" : "#eee",
							}}
						/>
					),
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontSize: 10,
								color: focused ? "dodgerblue" : "#eee",
								letterSpacing: 0.1,
							}}>
							Bookings
						</Text>
					),
				}}
			/>
			<BottomTab.Screen
				name="Favorite"
				component={Favorite}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={heart}
							style={{
								width: 18,
								height: 18,
								tintColor: focused ? "dodgerblue" : "#eee",
							}}
						/>
					),
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontSize: 10,
								color: focused ? "dodgerblue" : "#eee",
								letterSpacing: 0.1,
							}}>
							Favourite
						</Text>
					),
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={user}
							style={{
								width: 18,
								height: 18,
								tintColor: focused ? "dodgerblue" : "#eee",
							}}
						/>
					),
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								fontSize: 10,
								color: focused ? "dodgerblue" : "#eee",
								letterSpacing: 0.1,
							}}>
							Profile
						</Text>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default BottomTabs;
