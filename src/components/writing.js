import Typography from "@mui/material/Typography"

export default function Writing({ sx, ...others }) {
	return (
		<Typography
			sx={{ ...sx, fontFamily: ["Indie Flower", "cursive"].join(", ") }}
			variant="h5"
			component="p"
			{...others}
		/>
	)
}
