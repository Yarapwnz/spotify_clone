import React, { useEffect, useState, useMemo } from "react";
import {
	styled,
	View,
	Text,
	Pressable,
	SafeAreaView,
	ScrollView,
	FlatList,
	Image,
} from "dripsy";
import { Dimensions } from "react-native";
import DATA from "../constants/data";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Main = styled(SafeAreaView)({});

const HeadBlock = styled(View)({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
});

const Greeting = styled(Text)({
	fontSize: "$5",
	color: "white",
	ml: 20,
	mt: 10,
});

const SeeAll = styled(Pressable)({
	textTransform: "uppercase",
	color: "greyInactive",
	right: 20,
});

const SongBlock = styled(View)({
	padding: 20,
});

const ShadowBlock = styled(Pressable)({
	bg: "blackBg",
	width: [220, 220, 220],
	left: 20,
	mt: 20,
	borderRadius: 20,
	alignItems: "center",
});

const BlockImage = styled(Image)({
	width: 150,
	height: 165,
	borderRadius: 15,
});

const BlockTitle = styled(Text)({
	color: "white",
	fontSize: "$3",
});

const BlockDescription = styled(Text)({
	margin: 2,
	color: "greyInactive",
	fontSize: "$2",
});

const Item = ({ title, img, description }) => {
	return (
		<SongBlock>
			<ShadowBlock>
				<BlockImage source={{ uri: `${img}` }} />
				<BlockTitle>{title}</BlockTitle>
				<BlockDescription>{description}</BlockDescription>
			</ShadowBlock>
		</SongBlock>
	);
};

const ForUser = () => {
	const renderItem = ({ item }) => {
		return (
			<Item title={item.title} img={item.img} description={item.description} />
		);
	};
	const [dimensions, setDimensions] = useState({ window, screen });

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
		return dimensions.window.width > 1024 ? DATA.slice(0, 7) : DATA;
	}, [dimensions.window.width]);
	console.log(data);
	console.log(dimensions.window.width);
	return (
		<Main>
			<HeadBlock>
				<Greeting>Made For User</Greeting>
				<SeeAll>
					<Text sx={{ color: "white" }}>See all</Text>
				</SeeAll>
			</HeadBlock>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{dimensions.window.width > 1024 ? (
					<FlatList
						data={data}
						renderItem={renderItem}
						numColumns={data.length}
						keyExtractor={(item, index) => index}
						key={"desktop"}
					/>
				) : (
					<FlatList
						data={data}
						renderItem={renderItem}
						numColumns={data.length}
						keyExtractor={(item, index) => index}
						key={"mobile"}
					/>
				)}
			</ScrollView>
		</Main>
	);
};

export default ForUser;
