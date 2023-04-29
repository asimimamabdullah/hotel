import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Booked from "../../app/Screens/Booked";
import HotelDetails from "../../app/Screens/HotelDetails";
import Login from "../../app/Screens/Login";
import Register from "../../app/Screens/Register";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="BottomTabs"
				screenOptions={{
					headerShown: false,
					headerTitleAlign: "center",
				}}>
				<Stack.Screen name="BottomTabs" component={BottomTabs} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Booked" component={Booked} />
				<Stack.Screen
					name="Details"
					component={HotelDetails}
					options={{
						headerBackButtonMenuEnabled: true,
						headerShown: true,
						headerTitle: "Hotel Details",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
