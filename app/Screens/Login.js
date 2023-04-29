import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { useLoginMutation } from "../redux/user/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/user/authSlice";

const Login = ({ navigation }) => {
	const [loginCredentials, setLocationCredentials] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const [login, { loading }] = useLoginMutation();

	const onLogin = async () => {
		try {
			const user = await login({
				...loginCredentials,
			}).unwrap();

			await AsyncStorage.setItem("token", user?.accessToken);

			dispatch(
				setCredentials({
					...user,
				}),
			);
			navigation.navigate("Home");
		} catch (err) {
			setError(err?.data?.error);
		}
	};

	return (
		<View
			style={{
				backgroundColor: "rgb(210,210,210)",
				flex: 1,
				justifyContent: "center",
				paddingHorizontal: 10,
				gap: 20,
			}}>
			<View
				style={{
					backgroundColor: "#fff",
					padding: 10,
					gap: 15,
					justifyContent: "flex-end",
					minHeight: 300,
					borderRadius: 5,
				}}>
				<View
					style={{
						position: "absolute",
						top: -60,
						left: 0,
						right: 0,
						alignItems: "center",
					}}>
					<View
						style={{
							width: 120,
							height: 120,
							borderRadius: 60,
							backgroundColor: "rgb(180,180,180)",
						}}
					/>
				</View>
				<TextInput
					style={{
						padding: 12,
						backgroundColor: "rgb(235,235,235)",
						borderRadius: 5,
					}}
					placeholder="email"
					placeholderTextColor={"#bbb"}
					value={loginCredentials.email}
					onChangeText={(e) =>
						setLocationCredentials((val) => ({ ...val, email: e }))
					}
				/>
				<TextInput
					style={{
						padding: 12,
						backgroundColor: "rgb(235,235,235)",
						borderRadius: 5,
					}}
					placeholder="password"
					placeholderTextColor={"#bbb"}
					value={loginCredentials.password}
					onChangeText={(e) =>
						setLocationCredentials((val) => ({ ...val, password: e }))
					}
					secureTextEntry={true}
				/>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 10,
						bottom: 10,
					}}>
					<Text style={{ fontSize: 12 }}>Remember me</Text>
					<Text style={{ fontSize: 12 }}>Forgot password</Text>
				</View>
			</View>

			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "rgb(60,113,143)",
						padding: 15,
						borderRadius: 5,
					}}>
					<Text
						style={{ color: "#fff", textAlign: "center", fontSize: 14 }}>
						Connect with Facebook
					</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity onPress={() => navigation.navigate("Register")}>
				<Text style={{ textAlign: "center" }}>Create an account</Text>
			</TouchableOpacity>

			<View
				style={{
					position: "absolute",
					left: 10,
					bottom: 10,
					right: 10,
					flexDirection: "row",
				}}>
				<TouchableOpacity
					onPress={onLogin}
					style={{
						backgroundColor: "#fff",
						padding: 15,
						flex: 1,
						borderRadius: 5,
					}}>
					<Text
						style={{
							textAlign: "center",
							fontWeight: 500,
							letterSpacing: 0.1,
						}}>
						Sign In
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({});
