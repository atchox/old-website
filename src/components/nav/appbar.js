import AppBar from "@mui/material/AppBar"

export default function Outer({ children }) {
	return (
		<AppBar position="fixed" elevation={0} sx={{ bgcolor: "common.black" }}>
			{children}
		</AppBar>
	)
}
