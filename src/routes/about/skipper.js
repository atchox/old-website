import IconButton from "@mui/material/IconButton"
import Writing from "../../components/writing"
import DownArrow from "@mui/icons-material/ArrowDownwardRounded"
import Stack from "@mui/material/Stack"
import { scroller } from "react-scroll"
import breathe from "../../components/breatheKeyframes"

export default function Skipper() {
	return (
		<Stack spacing="1" sx={{ mb: 6 }} alignItems="center">
			<Writing align="center">skip the boring stuff</Writing>
			<ArrowButton />
		</Stack>
	)
}

const ArrowButton = props => (
	<IconButton
		sx={{ animation: `3s linear 0s infinite ${breathe}` }}
		{...props}
		onClick={() => scroller.scrollTo("faq", { smooth: true })}
		to="faq"
		align="center"
		disableRipple
	>
		<DownArrow sx={{ fontSize: 30 }} />
	</IconButton>
)
