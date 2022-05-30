import Typography from "@mui/material/Typography"

export default function Header({ children }) {
	return (
		<Typography variant="h3" sx={{ mb: 2, color: "text.secondary" }}>
			{children}
		</Typography>
	)
}
