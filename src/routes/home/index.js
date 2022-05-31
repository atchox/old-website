import { useEffect } from "react"
import Intro from "./intro"

export default function Home() {
	useEffect(() => {
		document.title = "atchox"
	})

	return <Intro />
}
