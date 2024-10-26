import { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import FullHeight from "../../components/fullHeight"
import { directus } from "../../axiosSetup"
import { readItems } from "@directus/sdk"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

export default function Home() {
	const [tracks, setTracks] = useState(null)

	useEffect(() => {
		document.title = "Music - atchox"
	})

	useEffect(() => {
		directus
			.request(readItems("music"))
			.then(res => setTracks(res))
			.catch(error => console.error(error))
	}, [])

	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "text.primary" }}>
			<Container sx={{ pt: 6 }}>
				<Typography sx={{ mb: 2 }} variant="body1">
					A full list of the music for this website
				</Typography>
				<List>
					{tracks &&
						tracks.map((track, index) => (
							<ListItem key={index}>
								<Box
									component="iframe"
									sx={{ borderRadius: 3, width: { xs: "80%", sm: "40%" }, height: "80px", mb: 2 }}
									src={`https://open.spotify.com/embed/track/${track.tid}?utm_source=generator`}
									frameBorder="0"
									allowFullScreen=""
									allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								/>
							</ListItem>
						))}
				</List>
			</Container>
		</FullHeight>
	)
}
