import AppBar from "@mui/material/AppBar"
import styled from "@mui/material/styles/styled"

export default styled(({ className, children }) => (
	<AppBar position="fixed" elevation={0} className={className}>
		{children}
	</AppBar>
))(({ theme, expanded }) => ({
	backgroundColor: expanded ? theme.palette.background.default : theme.palette.common.black,
	transition: theme.transitions.create("background-color", {
		duration: expanded ? theme.transitions.duration.navIn : theme.transitions.duration.navOut,
		easing: theme.transitions.easing.nav
	})
}))
