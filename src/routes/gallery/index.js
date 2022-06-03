import { useEffect } from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import FullHeight from "../../components/fullHeight"

export default function Home() {
	useEffect(() => {
		document.title = "Gallery - atchox"
	})

	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "text.primary" }}>
			<Container sx={{ pt: 6 }}>
				<Typography variant="body1">Will take me a while to organise the mess that is my gallery lol {":)"}</Typography>
			</Container>
		</FullHeight>
	)
}
