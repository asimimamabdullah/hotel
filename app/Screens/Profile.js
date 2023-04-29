import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectToken, selectUser } from "../redux/user/authSlice";

const Profile = ({ navigation }) => {
	const token = useSelector(selectToken);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!token) navigation.navigate("Login");
	}, [token]);
	return (
		<View style={{ padding: 20, justifyContent: "space-between", flex: 1 }}>
			<View>
				<Text
					style={{
						color: "#929292",
						borderBottomColor: 1,
						borderBottomWidth: 1,
					}}>
					PROFILE
				</Text>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingVertical: 15,
						borderBottomColor: "#ddd",
						borderBottomWidth: 0.5,
					}}>
					<Text style={{ fontSize: 16 }}>Full Name</Text>
					<Text style={{ color: "#999", fontSize: 14 }}>{user?.name}</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingVertical: 15,
						borderBottomColor: "#ddd",
						borderBottomWidth: 0.5,
					}}>
					<Text style={{ fontSize: 16 }}>Email</Text>
					<Text style={{ color: "#999", fontSize: 14 }}>
						{user?.email}
					</Text>
				</View>
			</View>

			<View style={{ flexDirection: "row", bottom: 30 }}>
				<TouchableOpacity
					onPress={() => dispatch(logOut())}
					style={{
						backgroundColor: "rgb(60,113,143)",
						padding: 20,
						flex: 1,
					}}>
					<Text style={{ color: "#fff", textAlign: "center" }}>
						Signout
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({});
