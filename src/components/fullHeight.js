import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import useMediaQuery from "@mui/material/useMediaQuery"

function FullHeight({ reduceBy, minMode, children, sx, ...others }) {
	const theme = useTheme()

	const base = theme.breakpoints.up("sm")
	const baseMedia = useMediaQuery(base)
	const next = `${theme.breakpoints.up("xs")} and (orientation: landscape)`
	const nextMedia = useMediaQuery(next)
	let height

	if (baseMedia) {
		height = theme.mixins.toolbar[base].minHeight
	} else if (nextMedia) {
		height = theme.mixins.toolbar[next].minHeight
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
