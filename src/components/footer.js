import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export default function Footer() {
	return (
		<Box sx={{ bgcolor: "common.black", color: "grey.500" }}>
			<Container sx={{ py: 2 }}>
				<Typography align="center" variant="subtitle2" sx={{ fontSize: { xs: "0.5em", sm: "0.7em", md: "0.9em" } }}>
					&copy; 2022{" "}
					<Box component="span" sx={{ color: "primary.main", font: "inherit" }}>
						Atreya Choudhury
					</Box>{" "}
					All Rights Reserved
				</Typography>
			</Container>
		</Box>
	)
}
