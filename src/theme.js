import createTheme from "@mui/material/styles/createTheme"

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			// dark: "#a51c30",
			dark: "#6A0000",
			main: "#d02441",
			// main: "#f7444e"
			// light: "#ff8196"
			light: "#FF9097"
		},
		secondary: {
			main: "#c3621d"
		}
	},
	typography: {
		fontFamily: ["Raleway", "sans-serif"].join(", "),
		fontWeightLight: 200,
		fontWeightMedium: 600
	},
	transitions: {
		duration: {
			navIn: 1100,
			navOut: 500
		}
	}
})

export default theme
