import { useEffect } from "react"
import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import { Typography } from "@mui/material"

export default function Home() {
	useEffect(() => {
		document.title = "atchox"
	})

	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "grey.100" }}>
			<Container>
				<Typography variant="h2">Atreya Choudhury</Typography>
			</Container>
		</FullHeight>
	)
}
