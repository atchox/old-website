import IconButton from "@mui/material/IconButton"
import Writing from "../../components/writing"
import DownArrow from "@mui/icons-material/ArrowDownwardRounded"
import Stack from "@mui/material/Stack"
import { scroller } from "react-scroll"
import styled from "@mui/system/styled"

export default function Skipper() {
	return (
		<Stack spacing="1" sx={{ mb: 6 }} alignItems="center">
			<Writing align="center">skip the boring stuff</Writing>
			<ArrowButton />
		</Stack>
	)
}

const ArrowButton = styled((props) => (
	<IconButton
		{...props}
		onClick={() => scroller.scrollTo("faq", { smooth: true })}
		to="faq"
		align="center"
		disableRipple
	>
		<DownArrow sx={{ fontSize: 30 }} />
	</IconButton>
))(() => ({
	animation: "3s linear 0s infinite breathe",
	"@keyframes breathe": {
		"0%": {
			transform: "scale(1)"
		},
		"30%": {
			transform: "scale(1.4)"
		},
		"70%": {
			transform: "scale(1)"
		},
		"100%": {
			transform: "scale(1)"
		}
	}
}))
