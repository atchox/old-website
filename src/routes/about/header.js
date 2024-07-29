import Typography from "@mui/material/Typography"

export default function Header({ children, sx, ...props }) {
	return (
		<Typography variant="h3" sx={{ mb: 2, color: "text.secondary", ...sx }} {...props}>
			{children}
		</Typography>
	)
}
