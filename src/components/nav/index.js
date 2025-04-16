import { useState } from "react"
import { styled } from "@mui/material/styles"
import Outer from "./appbar"
import Inner from "./toolbar"

const Separator = styled("div")(({ theme }) => theme.mixins.toolbar)

export default function Nav() {
	const [expanded, setExpanded] = useState(false)

	return (
		<>
			<Outer expanded={expanded}>
				<Inner expanded={expanded} setExpanded={setExpanded} />
			</Outer>
			<Separator />
		</>
	)
}
