import React, { useContext, useState, useEffect, useMemo } from "react";
import {
	styled,
	Text,
	Image,
	Pressable,
	FlatList,
	ScrollView,
	SafeAreaView,
	View,
} from "dripsy";

import { AuthContext } from "../context/authContext";
import DATA from "../constants/data";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Main = styled(SafeAreaView)({});

const Greeting = styled(Text)({
	mt: [50, 30, 30],
	fontSize: "$5",
	fontWeight: "bold",
	padding: 20,
	color: "white",
});

const LikedContainer = styled(Pressable)({
	bg: "gray",
	height: [80],
	width: [210, 210, 300],
	borderRadius: 10,
	flexDirection: "row",
	alignItems: "center",
	margin: 10,
});

const LikedSong = styled(Text)({
	color: "white",
	padding: 15,
	fontSize: "$3",
});

const LikedImage = styled(Image)({
	height: 80,
	width: [70, 70, 100],
	borderTopLeftRadius: 10,
	borderBottomLeftRadius: 10,
});

const FlexSong = styled(View)({
	display: "flex",
	alignItems: "center",
});

const Logout = styled(Pressable)({
	color: "white",
	fontSize: "$5",
	right: 20,
});

const Item = ({ title, img }) => {
	return (
		<FlexSong>
			<LikedContainer>
				<LikedImage
					source={{
						uri: `${img}`,
					}}
				/>
				<Text sx={{ color: "white", fontSize: "$2" }}>{title}</Text>
			</LikedContainer>
		</FlexSong>
	);
};

const Header = () => {
	const { toggleAuth } = useContext(AuthContext);
	const [dimensions, setDimensions] = useState({ window, screen });
	const renderItem = ({ item }) => {
		return <Item title={item.title} img={item.img} />;
	};
	useEffect(() => {
		const subscription = Dimensions.addEventListener(
			"change",
			({ window, screen }) => {
				setDimensions({ window, screen });
			}
		);
		return () => subscription.remove();
	});

	const data = useMemo(() => {
		return dimensions.window.width > 800 ? DATA.slice(0, 6) : DATA.slice(0, 6);
	}, [dimensions.window.width]);
	return (
		<Main>
			<View
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Greeting>Good evening</Greeting>
				<Logout onPress={() => toggleAuth()}>
					<Text
						sx={{ color: "white", fontSize: "$3", fontWeight: "bold", mt: 50 }}
					>
						Logout
					</Text>
				</Logout>
			</View>
			<View sx={{ alignItems: "center" }}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{dimensions.window.width > 800 ? (
						<FlatList
							data={data}
							renderItem={renderItem}
							numColumns={Math.ceil(data.length / 2)}
							keyExtractor={(item, index) => index}
							key={"desktop"}
						/>
					) : (
						<FlatList
							data={data}
							renderItem={renderItem}
							numColumns={Math.ceil(data.length / 3)}
							keyExtractor={(item, index) => index}
							key={"mobile"}
						/>
					)}
				</ScrollView>
			</View>
		</Main>
	);
};

export default Header;
