import { forwardRef } from "react"
import Link from "@mui/material/Link"
import Icon from "@mui/icons-material/OpenInNewRounded"

export default forwardRef(({ children, ...others }, ref) => (
	<Link target="_blank" underline="hover" ref={ref} {...others}>
		{children}{" "}
		<sup>
			<Icon sx={{ fontSize: 12 }} />
		</sup>
	</Link>
))
