import { useEffect } from "react"
import Container from "@mui/material/Container"

export default function Home() {
	useEffect(() => {
		document.title = "Gallery - atchox"
	})

	return <Container>Gallery...</Container>
}
