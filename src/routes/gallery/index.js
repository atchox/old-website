import { useEffect } from "react"
import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import Typography from "@mui/material/Typography"

export default function Home() {
	useEffect(() => {
		document.title = "Gallery - atchox"
	})

	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "grey.300" }}>
			<Container sx={{ pt: 6 }}>
				<Typography variant="body1">Will take me a while to organise the mess that is my gallery lol {":)"}</Typography>
			</Container>
		</FullHeight>
	)
}
