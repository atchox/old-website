import { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import { Link as RouterLink, Outlet } from "react-router-dom"
import axios from "../axiosSetup"

export default function Footer() {
	const [track, setTrack] = useState("")

	useEffect(() => {
		axios.get("/music/random").then(data => {
			data = data.data
			setTrack(data.tid)
		})
	}, [])

	return (
		<>
			<Outlet />
			<Box sx={{ bgcolor: "common.black", color: "grey.500" }}>
				<Container sx={{ pt: 8, pb: 2 }}>
					<Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", mb: 8 }}>
						<Typography variant="h5" sx={{ mb: 2 }}>
							Music for the Soul
						</Typography>
						{track && (
							<Box
								component="iframe"
								sx={{ borderRadius: 3, width: { xs: "80%", sm: "40%" }, height: "80px", mb: 2 }}
								src={`https://open.spotify.com/embed/track/${track}?utm_source=generator`}
								frameBorder="0"
								allowfullscreen=""
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							/>
						)}
						<Link variant="body1" underline="hover" to="/music" component={RouterLink}>
							source list
						</Link>
					</Box>
					<Typography align="center" variant="subtitle2" sx={{ fontSize: { xs: "0.5em", sm: "0.7em", md: "0.9em" } }}>
						&copy; {`${new Date().getFullYear()} `}
						<Box component="span" sx={{ color: "primary.main", font: "inherit" }}>
							Atreya Choudhury
						</Box>{" "}
						All Rights Reserved
					</Typography>
				</Container>
			</Box>
		</>
	)
}
