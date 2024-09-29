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
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "text.primary" }}>
			<Container sx={{ pt: 6 }}>
				<Stack spacing={{ xs: 6, sm: 2 }} direction={{ xs: "column", md: "row" }}>
					<Box sx={{ p: { xs: 0, sm: 2 } }}>
						<Writing sx={{ pb: 2 }}>I would love to hear from you {":)"}</Writing>
						<Typography sx={{ mb: 2, color: "text.secondary" }} variant="h3">
							Contact Me
						</Typography>
						<Typography variant="body1">
							I am always excited to talk about new topics especially if they are unknown to me. However, I do get a
							little busy with my academic program sometimes so I apologize in advance if it takes me a little longer
							than usual to reach back.
						</Typography>
					</Box>
					<Modes sx={{ minWidth: { xs: "100%", md: "55%", lg: "60%" }, p: 2 }} />
				</Stack>
			</Container>
		</FullHeight>
	)
}
