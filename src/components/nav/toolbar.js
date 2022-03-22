import Toolbar from "@mui/material/Toolbar"
import Stack from "@mui/material/Stack"
import { Link as RouterLink } from "react-router-dom"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

export default function Inner() {
	return (
		<Toolbar sx={{ justifyContent: "space-between" }}>
			<RouterLink to="/">
				<Typography color="white" variant="h5">
					atchox
				</Typography>
			</RouterLink>
			<NavBox />
		</Toolbar>
	)
}

const NavBox = () => {
	const routes = [
		{ name: "About", link: "/about" },
		{ name: "CV", link: "/cv" },
		{ name: "Blog", link: "/blog" }
	]
	return (
		<Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
			{routes.map((route) => (
				<Link component={RouterLink} to={route.link}>
					{route.name}
				</Link>
			))}
		</Stack>
	)
}
