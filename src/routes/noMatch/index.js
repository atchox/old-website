import { useEffect } from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router-dom"
import FullHeight from "../../components/fullHeight"

export default function NoMatch() {
	useEffect(() => {
		document.title = "Page not Found - atchox"
	})

	return (
		<FullHeight sx={{ bgcolor: "common.black", color: "text.primary" }}>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					pt: 6,
					height: "100%"
				}}
			>
				<Typography sx={{ mb: 4 }} align="center" variant="h4">
					What you want, I can't give you {":/"}
				</Typography>
				<Link underline="hover" variant="h6" to="" component={RouterLink}>
					back to home
				</Link>
			</Container>
		</FullHeight>
	)
}
