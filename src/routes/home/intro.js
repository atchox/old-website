import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
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
			</Container>
		</FullHeight>
	)
}

const heyAnim = keyframes`
  0% {
    opacity: 0;
		transform: scale(0.95);
  }
  100% {
    opacity: 1;
		transform: scale(1);
  }
`

const Hey = props => (
	<Writing
		align="center"
		sx={{ animation: `1s ease-in 0.4s normal both running ${heyAnim}`, mb: 2 }}
		variant="h3"
		{...props}
	>
		hey, I'm Atreya {":)"}
	</Writing>
)

const greetAnim = keyframes`
	0% {
		opacity: 0;
		transform: scale(0.95) translate(0, 8px);
	}
	100% {
		opacity: 1;
		transform: scale(1) translate(0, 0);
	}
`

const Greet = props => (
	<Writing
		align="center"
		sx={{ animation: `1s ease-in 1.4s normal both running ${greetAnim}`, mb: 2 }}
		variant="h5"
		{...props}
	>
		pleasure to meet you
	</Writing>
)
