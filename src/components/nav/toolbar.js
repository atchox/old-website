import { useState, useEffect } from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Stack from "@mui/material/Stack"
import Link from "@mui/material/Link"
import styled from "@mui/material/styles/styled"
import useMediaQuery from "@mui/material/useMediaQuery"
import useTheme from "@mui/system/useTheme"
import { NavLink as RouterLink } from "react-router-dom"
import { Squeeze } from "hamburger-react"
import disableScroll from "disable-scroll"

export default function Inner() {
	const [expanded, setExpanded] = useState(false)
	const theme = useTheme()
	const up = useMediaQuery(theme.breakpoints.up("sm"))

	useEffect(() => {
		if (expanded) {
			disableScroll.on()
		} else {
			disableScroll.off()
		}
	}, [expanded])

	useEffect(() => {
		if (up & expanded) {
			setExpanded(false)
		}
	}, [up])

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

const Hamburger = ({ expanded, setExpanded }) => (
	<Box component="span" sx={{ display: { xs: "initial", sm: "none" } }}>
		<Squeeze size={23} toggled={expanded} toggle={setExpanded} />
	</Box>
)

const NavLink = ({ route, setExpanded }) => (
	<Link
		sx={{ color: "grey.200", "&:hover": { color: "primary.light" }, "&.active": { color: "primary.main" } }}
		onClick={() => setExpanded(false)}
		align="center"
		variant="body1"
		underline="none"
		component={RouterLink}
		to={route.link}
	>
		{route.name}
	</Link>
)

const NavBox = styled(({ expanded, setExpanded, className }) => {
	const routes = [
		{ name: "About", link: "/about" },
		{ name: "CV", link: "/cv" },
		{ name: "Blog", link: "/blog" },
		{ name: "Gallery", link: "/gallery" },
		{ name: "Contact", link: "/contact" }
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
					<NavLink setExpanded={setExpanded} route={route} key={index} />
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
	backgroundColor: theme.palette.common.black,
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
