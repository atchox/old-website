import { useEffect } from "react"
import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Writing from "../../components/writing"
import Typography from "@mui/material/Typography"
import Modes from "./modes"

export default function Home() {
	useEffect(() => {
		document.title = "Contact - atchox"
	})

	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "grey.300" }}>
			<Container sx={{ pt: 6 }}>
				<Stack spacing={{ xs: 6, md: 2 }} direction={{ xs: "column", md: "row" }}>
					<Box sx={{ p: { xs: 0, md: 2 } }}>
						<Writing sx={{ pb: 2 }}>I would love to hear from you {":)"}</Writing>
						<Typography sx={{ mb: 2 }} variant="h3">
							Contact Me
						</Typography>
						<Typography variant="body1">
							Think you have an idea you wanna share with me? Think we have similar taste in movies? Let's start
							talking!
						</Typography>
					</Box>
					<Modes sx={{ minWidth: { xs: "100%", md: "50%" }, p: 2 }} />
				</Stack>
			</Container>
		</FullHeight>
	)
}
