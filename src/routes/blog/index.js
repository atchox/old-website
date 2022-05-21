import { useEffect } from "react"
import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import Typography from "@mui/material/Typography"

export default function Blog() {
	useEffect(() => {
		document.title = "Blog - atchox"
	})

	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "grey.300" }}>
			<Container sx={{ pt: 6 }}>
				<Typography variant="body1">
					Blog is empty
					<br />
					for now...
				</Typography>
			</Container>
		</FullHeight>
	)
}
