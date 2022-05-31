import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import DownArrow from "@mui/icons-material/ArrowDownwardRounded"
import { keyframes } from "@mui/system"
import Writing from "../../components/writing"

export default function Intro() {
	return (
		<FullHeight sx={{ bgcolor: "common.black", color: "text.primary" }}>
			<Container
				sx={{
					position: "relative",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<Hey />
				<Greet />
				<ScrollDown />
			</Container>
		</FullHeight>
	)
}

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Hey = props => (
	<Writing
		align="center"
		sx={{ animation: `1s ease-in 0.2s normal both running ${appear}`, mb: 2 }}
		variant="h3"
		{...props}
	>
		hey {":)"}
	</Writing>
)

const Greet = props => (
	<Writing
		align="center"
		sx={{ animation: `1s ease-in 1.2s normal both running ${appear}`, mb: 2 }}
		variant="h5"
		{...props}
	>
		nice to meet you
		<br />
		feel free to look around
	</Writing>
)

const ScrollDown = props => (
	<Writing
		align="center"
		sx={{ position: "absolute", bottom: 0, animation: `1s ease-in 5s normal both running ${appear}`, mb: 2 }}
		variant="h6"
		{...props}
	>
		keep scrolling
		<br />
		<DownArrow sx={{ fontSize: { xs: 20, sm: 30 } }} />
	</Writing>
)
