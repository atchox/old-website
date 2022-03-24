import { useEffect } from "react"
import Container from "@mui/material/Container"

export default function Blog() {
	useEffect(() => {
		document.title = "Blog - atchox"
	})

	return <Container>Blog is empty(for now)</Container>
}
