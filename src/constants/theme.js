import { makeTheme } from "dripsy";
export const theme = makeTheme({
	colors: {
		black: "#000000",
		black20: "rgba(0, 0, 0, 0.2)",
		black40: "rgba(0, 0, 0, 0.4)",
		black50: "rgba(0, 0, 0, 0.5)",
		black70: "rgba(0, 0, 0, 0.7)",
		white: "#ffffff",
		blackBlur: "#161616",

		blackBg: "#121212",
		transparent: "transparent",
		brandPrimary: "#57b660",
		grey: "#282828",
		greyInactive: "#b3b3b3",
		greyLight: "#bebebe",
		greySwitchBorder: "#404040",
		greyOff: "#3e3e3e",
		grey3: "#333",
	},
	fontSizes: {
		$0: 12,
		$1: 14,
		$2: 16,
		$3: 18,
		$4: 24,
		$5: 28,
		$6: 32,
	},
	linearGradients: {
		main: ["red", "black", "black", "black"],
	},
});
