import { useEffect } from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Stack from "@mui/material/Stack"
import Link from "@mui/material/Link"
import { styled } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import { NavLink as RouterLink } from "react-router"
import { Squeeze } from "hamburger-react"
import disableScroll from "disable-scroll"
import LogoLink from "./logoLink"

export default function Inner({ expanded, setExpanded }) {
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
	}, [up, expanded, setExpanded])

	return (
		<Container>
			<Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
				<LogoLink setExpanded={setExpanded} />
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
		sx={{
			py: { xs: 3, sm: 1 },
			color: "grey.200",
			"&:hover": { color: "grey.500" },
			"&.active": { color: "primary.main" }
		}}
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
		{ name: "Teaching", link: "/teaching" },
		{ name: "Blog", link: "/blog" },
		{ name: "Gallery", link: "/gallery" },
		{ name: "Contact", link: "/contact" }
	]

	return (
		<>
			<Hamburger expanded={expanded} setExpanded={setExpanded} />
			<Stack
				spacing={{ xs: 1, sm: 4 }}
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
	transition: theme.transitions.create(["clip-path", "background-color"], {
		duration: theme.transitions.duration.navOut,
		easing: theme.transitions.easing.nav
	}),
	paddingTop: theme.spacing(6),
	"&.expanded": {
		backgroundColor: theme.palette.background.default,
		clipPath: "inset(0)",
		transition: theme.transitions.create(["clip-path", "background-color"], {
			duration: theme.transitions.duration.navIn,
			easing: theme.transitions.easing.nav
		})
	},
	[theme.breakpoints.up("sm")]: {
		position: "static",
		height: "initial",
		width: "initial",
		backgroundColor: "transparent",
		clipPath: "initial",
		paddingTop: 0
	}
}))
