import { useEffect } from "react"
import Container from "@mui/material/Container"

export default function About() {
	useEffect(() => {
		document.title = "About - atchox"
	})

	return <Container>Bro, just call me...</Container>
}
