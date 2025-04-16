import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const Atom = styled(props => {
	let content = []

	for (let i = 1; i <= 8; i++) {
		content.push(<li key={i} className={`item item-${i}`} />)
	}

	return (
		<Box component="ul" {...props}>
			<Box component="li" className="center" />
			{content}
		</Box>
	)
})(({ theme, speed = 0.16, size = 5 }) => {
	let css = {
		position: "relative",
		width: theme.spacing(size),
		height: theme.spacing(size),
		padding: 0,
		margin: 0,
		listStyle: "none",
		"& li": {
			margin: 0
		},
		"& .center": {
			width: theme.spacing(size),
			height: theme.spacing(size),
			backgroundColor: theme.palette.primary.main,
			borderRadius: "50%",
			animation: "center 3.2s ease-in-out infinite"
		},
		"@keyframes center": {
			"0%, 10%, 90%, 100%": {
				transform: "scale(0.7)"
			},
			"45%, 55%": {
				transform: "scale(1)"
			}
		},
		"& .item": {
			position: "absolute",
			width: theme.spacing(size / 4),
			height: theme.spacing(size / 4),
			top: theme.spacing((size * 3) / 8),
			left: 0,
			right: 0,
			margin: "auto",
			backgroundColor: theme.palette.primary.main,
			borderRadius: "50%"
		}
	}

	for (let i = 1; i <= 8; i++) {
		css[`& .item-${i}`] = {
			animation: `anim-${i} ${16 * speed}s ease-in-out infinite ${speed * i}s`,
			animationFillMode: "backwards"
		}
		css[`@keyframes anim-${i}`] = {
			"0%, 60%, 100%": {
				transform: `rotate(${45 * i}deg) translateX(${theme.spacing(size)}) scale(1)`
			},
			"10%, 50%": {
				transform: `rotate(${45 * i}deg) translateX(0) scale(1.5)`
			}
		}
	}

	return css
})

export default Atom
