import Outer from "./appbar"
import Inner from "./toolbar"
import styled from "@mui/material/styles/styled"

const Separator = styled("div")(({ theme }) => theme.mixins.toolbar)

export default function Nav() {
	return (
		<>
			<Outer>
				<Inner />
			</Outer>
			<Separator />
		</>
	)
}
