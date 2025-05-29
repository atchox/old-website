import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import atreya from "./img/atreya_BW.jpg"
import Image from "../../components/image"
import Link from "@mui/material/Link"
import { NavLink as RouterLink } from "react-router"

export default function MiniAbout() {
	const birth = new Date("2002-11-03T00:00:00.000+05:30")
	const now = new Date()
	const age = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

	return (
		<Box
			sx={{
				boxSizing: "content-box",
				position: "relative",
				zIndex: 1,
				bgcolor: "common.black",
				color: "text.primary"
			}}
		>
			<Container sx={{ pt: 8 }}>
				<Image
					src={atreya}
					alt="Portrait of Atreya at Stoos"
					title="Me at Stoos"
					date="October 2023"
					width={{ xs: "80%", sm: "50%", md: "40%" }}
					sx={{ position: "relative", zIndex: 2 }}
				/>
				<Typography
					align="right"
					sx={{
						position: "relative",
						top: { xs: 0, sm: -48, md: -40 },
						zIndex: 2,
						width: { xs: "80%", sm: "45%", md: "50%" },
						ml: "auto",
						pb: 4,
						pt: { xs: 4, sm: 0 }
					}}
					variant="h6"
				>
					Hey, I'm Atreya, a {age} year old from Kolkata passionate about math, music and all things art.
					<br />
					<KeepReading />
				</Typography>
			</Container>
			<Box
				sx={{
					position: "absolute",
					boxSizing: "content-box",
					top: { xs: "40%", sm: "45%", md: "60%" },
					height: { xs: "60%", sm: "55%", md: "40%" },
					width: "100%",
					bgcolor: "primary.dark"
				}}
			></Box>
		</Box>
	)
}

const KeepReading = ({ theme, ...props }) => (
	<Link
		sx={{
			color: "text.secondary",
			position: "relative",
			"&::after": {
				content: "''",
				position: "absolute",
				width: "100%",
				height: "1px",
				background: "currentColor",
				top: "115%",
				left: 0,
				pointerEvents: "none",
				transformOrigin: "100% 50%",
				transform: "scale3d(0, 1, 1)",
				transition: "transform 0.3s"
			},
			"&:hover::after": {
				transformOrigin: "0% 50%",
				transform: "scale3d(1, 1, 1)"
			}
		}}
		underline="none"
		component={RouterLink}
		to="/about"
		{...props}
	>
		Keep Reading
	</Link>
)
