import React, { useContext, useState, createContext, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DripsyProvider } from "dripsy";
import { theme } from "./src/constants/theme";
import AuthScreen from "./src/screens/Login/AuthScreen";
import Home from "./src/screens/Home/Home";
import AuthContextProvider, { AuthContext } from "./src/context/authContext";

const Stack = createNativeStackNavigator();

const App = () => {
	const { isAuthenticated } = useContext(AuthContext);
	console.log(isAuthenticated);
	return (
		<DripsyProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator>
					{isAuthenticated ? (
						<Stack.Screen
							name="Home"
							component={Home}
							options={{ headerShown: false }}
						/>
					) : (
						<Stack.Screen
							name="Login"
							component={AuthScreen}
							options={{ headerShown: false }}
						/>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</DripsyProvider>
	);
};

const AppWithProdiver = () => {
	return (
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	);
};

export default AppWithProdiver;
