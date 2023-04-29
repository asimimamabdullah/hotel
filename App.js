import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import IsAuth from "./app/Components/IsAuth";
import { store } from "./app/redux/store";
import Navigator from "./Components/navigation/Navigator";

export default function App() {
	return (
		<Provider store={store}>
			<IsAuth>
				<View style={styles.container}>
					<Navigator />
					<StatusBar style="light" />
				</View>
			</IsAuth>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
