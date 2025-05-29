import { Link as RouterLink } from "react-router"
import Link from "@mui/material/Link"
import Writing from "../../components/writing"

export default function LetsTalk() {
	return (
		<Writing align="center">
			would you like to hear some more?
			<br />
			<Link underline="hover" component={RouterLink} to="/contact">
				reach out to me here
			</Link>
		</Writing>
	)
}
