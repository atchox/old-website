import { useEffect } from "react"
import Intro from "./intro"
import MiniAbout from "./miniAbout"

export default function Home() {
	useEffect(() => {
		document.title = "atchox"
	})

	return (
		<>
			<Intro />
			<MiniAbout />
		</>
	)
}
