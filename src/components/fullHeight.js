import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"

function FullHeight({ reduceBy, minMode, children, sx, ...others }) {
	const theme = useTheme()

	const base = theme.breakpoints.up("sm")
	const baseMedia = useMediaQuery(base)
	const next1 = theme.breakpoints.up("xs")
	const next2 = "(orientation: landscape)"
	const nextMedia = useMediaQuery(`${next1} and ${next2}`)
	let height

	if (baseMedia) {
		height = theme.mixins.toolbar[base].minHeight
	} else if (nextMedia) {
		height = theme.mixins.toolbar[next1][`@media ${next2}`].minHeight
	} else {
		height = theme.mixins.toolbar.minHeight
	}
	height += reduceBy

	return (
		<Box sx={{ ...sx, [minMode ? "minHeight" : "height"]: `calc(100vh - ${height}px)` }} {...others}>
			{children}
		</Box>
	)
}

FullHeight.defaultProps = {
	reduceBy: 0,
	minMode: false
}

export default FullHeight
