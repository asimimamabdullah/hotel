import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../redux/user/register";
import { setCredentials } from "../redux/user/authSlice";

const Register = ({ navigation }) => {
	const [registerDetails, setRegisterDetails] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [register, { loading }] = useRegisterMutation();
	const dispatch = useDispatch();

	const onRegister = async () => {
		try {
			const user = await register({ ...registerDetails }).unwrap();
			await AsyncStorage.setItem("token", user.accessToken);
			dispatch(setCredentials({ ...user }));
			navigation.navigate("Home");
		} catch (error) {
			setError(error?.data?.message);
		}
	};

	return (
		<View
			style={{
				backgroundColor: "rgb(210,210,210)",
				justifyContent: "space-around",
				flex: 1,
				padding: 10,
			}}>
			{/* welcome  */}
			<View style={{ gap: 15, alignItems: "center" }}>
				<View
					style={{
						backgroundColor: "rgb(190,190,190)",
						width: 100,
						height: 100,
						borderRadius: 60,
					}}
				/>
				<Text>Welcome</Text>
			</View>

			<View
				style={{
					backgroundColor: "#fff",
					padding: 10,
					gap: 15,
					minHeight: 350,
					justifyContent: "flex-end",
					borderRadius: 5,
				}}>
				<TextInput
					placeholderTextColor={"#bbb"}
					placeholder="name"
					value={registerDetails.name}
					onChangeText={(t) =>
						setRegisterDetails((val) => ({ ...val, name: t }))
					}
					style={{
						padding: 13,
						backgroundColor: "rgb(235,235,235)",
						borderRadius: 5,
					}}
				/>
				<TextInput
					placeholderTextColor={"#aaa"}
					placeholder="email"
					value={registerDetails.email}
					onChangeText={(t) =>
						setRegisterDetails((val) => ({ ...val, email: t }))
					}
					style={{
						padding: 13,
						backgroundColor: "rgb(235,235,235)",
						borderRadius: 5,
					}}
				/>
				<TextInput
					placeholderTextColor={"#bbb"}
					placeholder="password"
					value={registerDetails.password}
					secureTextEntry={true}
					onChangeText={(t) =>
						setRegisterDetails((val) => ({ ...val, password: t }))
					}
					style={{
						padding: 13,
						backgroundColor: "rgb(235,235,235)",
						borderRadius: 5,
					}}
				/>

				<TouchableOpacity
					disabled={loading}
					onPress={onRegister}
					style={{
						backgroundColor: "rgb(60,113,143)",
						padding: 15,
						borderRadius: 5,
					}}>
					<Text style={{ color: "#fff", textAlign: "center" }}>
						Create an account
					</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity onPress={() => navigation.navigate("Login")}>
				<Text style={{ textAlign: "center" }}>
					Already have an account? Sign in
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({});
