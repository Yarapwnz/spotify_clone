import React, { useContext, useState } from "react";
import { View, Text, styled, Pressable } from "dripsy";
import { TextInput } from "react-native";
import { AuthContext } from "../../context/authContext";
import { CheckBox, Icon } from "react-native-elements";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const MainScreen = styled(View)({
	bg: "white",
	height: "100%",
	alignItems: "center",
});

const SpotifyLogo = styled(View)({
	height: [60, 60, 60],
	marginTop: 25,
	marginBottom: 20,
	justifyContent: "space-between",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
});

const GrayLine = styled(View)({
	borderBottomColor: "gray",
	borderBottomWidth: 1,
	mb: 20,
	width: "100%",
});

const AuthForm = styled(View)({});

const FormLabel = styled(Text)({
	fontWeight: "bold",
	fontSize: "$1",
});

const FormInput = styled(TextInput)({
	borderRadius: 5,
	borderWidth: 1,
	margin: 12,
	height: 40,
	padding: 10,
	width: [345, 55, 350],
});

const ResetPassword = styled(Pressable)({
	fontSize: "$1",
	mt: 10,
});

const ButtonsView = styled(View)({
	mt: 20,
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
});

const LogIn = styled(Pressable)({
	padding: 10,
	bg: "brandPrimary",
	fontWeight: "bold",
	borderRadius: 20,
	textTransform: "uppercase",
});

const RegisterLabel = styled(Text)({
	fontSize: "$3",
	fontWeight: "bold",
	justifyContent: "center",
	alignItems: "center",
});

const RegisterBtn = styled(Pressable)({
	padding: 20,
	mt: 20,
	color: "gray",
	borderWidth: 1,
	borderColor: "gray",
	width: [345, 55, 350],
	alignItems: "center",
	borderRadius: 20,
	textTransform: "uppercase",
});
const AuthScreen = () => {
	const [checked, setChecked] = useState(false);
	const { toggleAuth } = useContext(AuthContext);
	return (
		<MainScreen>
			<SpotifyLogo>
				<SimpleLineIcons name={"social-spotify"} size={30} />
				<Text sx={{ fontSize: "$6" }}>Spotify</Text>
			</SpotifyLogo>
			<GrayLine />
			<AuthForm>
				<FormLabel>Email address or username</FormLabel>
				<FormInput placeholder="Email address or username"></FormInput>
				<FormLabel>Password</FormLabel>
				<FormInput placeholder="Password" secureTextEntry={true} />
				<ResetPassword sx={{ fontWeight: "none" }}>
					<Text>Forgot password?</Text>
				</ResetPassword>
				<ButtonsView>
					<CheckBox
						title="Remember me?"
						checked={checked}
						onPress={() => setChecked(!checked)}
						containerStyle={{
							backgroundColor: "white",
						}}
					/>
					<LogIn onPress={() => toggleAuth()}>
						<Text>Log In</Text>
					</LogIn>
				</ButtonsView>
			</AuthForm>

			<GrayLine sx={{ mt: 50, width: [345, 55, 350] }} />
			<RegisterLabel>Don't have an account?</RegisterLabel>
			<RegisterBtn>
				<Text>Sign Up For Spotify</Text>
			</RegisterBtn>
		</MainScreen>
	);
};

export default AuthScreen;
