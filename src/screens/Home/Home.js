import React from "react";
import { styled, View } from "dripsy";
import { Gradient } from "@dripsy/gradient";

import Header from "../../components/Header";
import ForUser from "../../components/ForUser";

const MainScreen = styled(View)({
	height: "100%",
	justifyContent: "center",
	alignItems: "center",
	// margin: "0 auto",
});

const Home = () => {
	return (
		<>
			<MainScreen>
				<Gradient sx={{ minHeight: "100%", width: "100%" }} gradient="main">
					<Header />
					<ForUser />
				</Gradient>
			</MainScreen>
		</>
	);
};

export default Home;
