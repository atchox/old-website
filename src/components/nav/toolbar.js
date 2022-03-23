import { useState } from "react"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Stack from "@mui/material/Stack"
import Link from "@mui/material/Link"
import styled from "@mui/material/styles/styled"
import { Link as RouterLink } from "react-router-dom"
import { Squeeze } from "hamburger-react"

export default function Inner() {
	const [expanded, setExpanded] = useState(false)

	return (
		<Container>
			<Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
				<Link
					underline="none"
					component={RouterLink}
					color="white"
					variant="h5"
					onClick={() => setExpanded(false)}
					to="/"
				>
					atchox
				</Link>
				<NavBox expanded={expanded} setExpanded={setExpanded} />
			</Toolbar>
		</Container>
	)
}

const Hamburger = styled(({ expanded, setExpanded, ...others }) => (
	<span {...others}>
		<Squeeze size={23} toggled={expanded} toggle={setExpanded} />
	</span>
))(({ theme }) => ({
	display: "initial",
	[theme.breakpoints.up("sm")]: {
		display: "none"
	}
}))

const NavBox = styled(({ expanded, setExpanded, className }) => {
	const routes = [
		{ name: "About", link: "/about" },
		{ name: "CV", link: "/cv" },
		{ name: "Blog", link: "/blog" }
	]
	return (
		<>
			<Hamburger expanded={expanded} setExpanded={setExpanded} />
			<Stack
				spacing={{ xs: 7, sm: 3 }}
				direction={{ xs: "column", sm: "row" }}
				alignItems="stretch"
				className={expanded ? `${className} expanded` : className}
			>
				{routes.map((route, index) => (
					<Link
						onClick={() => setExpanded(false)}
						align="center"
						underline="none"
						component={RouterLink}
						to={route.link}
						key={index}
					>
						{route.name}
					</Link>
				))}
			</Stack>
		</>
	)
})(({ theme }) => ({
	position: "fixed",
	top: theme.mixins.toolbar.minHeight,
	left: 0,
	height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
	width: "100%",
	backgroundColor: theme.palette.background.paper,
	clipPath: "inset(0 0 100% 0)",
	transition: theme.transitions.create("clip-path", {
		duration: theme.transitions.duration.complex
	}),
	paddingTop: theme.spacing(6),
	"&.expanded": {
		clipPath: "inset(0)"
	},
	[theme.breakpoints.up("sm")]: {
		position: "static",
		height: "initial",
		width: "initial",
		clipPath: "initial",
		paddingTop: 0
	}
}))
