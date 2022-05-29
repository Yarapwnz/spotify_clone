import React from "react";
import { ScrollView, styled, View } from "dripsy";
import { Gradient } from "@dripsy/gradient";

import Header from "../../components/Header";
import ForUser from "../../components/ForUser";
import Mixes from "../../components/Mixes";
import ListenAgain from "../../components/ListenAgain";

const MainScreen = styled(View)({
	height: "100%",
	justifyContent: "center",
	alignItems: "center",
});

const Home = () => {
	return (
		<>
			<MainScreen>
				<Gradient sx={{ height: "100%", width: "100%" }} gradient="main">
					<ScrollView showsVerticalScrollIndicator={false}>
						<Header />
						<ForUser />
						<Mixes />
						<ListenAgain />
					</ScrollView>
				</Gradient>
			</MainScreen>
		</>
	);
};

export default Home;
