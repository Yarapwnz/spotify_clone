import React, { useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		AsyncStorage.getItem("isAuthenticated")
	);

	const toggleAuth = () => {
		setIsAuthenticated((prev) => {
			AsyncStorage.setItem("isAuthenticated", JSON.stringify(!prev));
			return !prev;
		});
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
