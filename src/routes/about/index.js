import { useEffect } from "react"
import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router-dom"
import FAQ from "./faq"
import Header from "./header"
import LetsTalk from "./letsTalk"

export default function About() {
	useEffect(() => {
		document.title = "About - atchox"
	})

	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "text.primary" }}>
			<Container>
				<Header sx={{ pt: 5 }}>The Basics</Header>
				<Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
					अयं निजः परो वेति गणना लघुचेतसाम्।
					<br />
					उदारचरितानां तु वसुधैव कुटुम्बकम्॥
				</Typography>
				<Typography sx={{ color: "grey.500" }} variant="caption">
					<i>- Upanishad</i>
				</Typography>
				<Typography variant="body1" sx={{ my: 4 }}>
					I was born on a Sunday afternoon in a small town in Birbhum, West Bengal known as Bolpur. I grew up in a
					Bengali household, with sufficient exposure to classical music, Durga pujas and rice. My mom stays at home,
					runs the family and likes to read and listen to music. My dad works in Tech Consulting and is the most
					methodical person I have ever met.
					<br />I have lived in Kolkata for most of my life but have had the chance to travel quite a bit on account on
					my dads job. We spent a few years in USA when I was very young and a few in Singapore in recent years.
					Currently, I am in Zürich, doing my masters :)
				</Typography>
				<Typography variant="body1" sx={{ mb: 4 }}>
					I did most of my schooling in Kolkata. I was at Garden High School for middle school and at Delhi Public
					School, Ruby Park for high school. Up until until grade 7, I was interested in painting, music and badminton
					with no academic inclination whatsoever. In grade 8, I developed a liking towards mathematics which grew in
					the next few years.
				</Typography>
				<Typography variant="body1" sx={{ mb: 6 }}>
					I did my undergraduate in mathematics from the Indian Statistical Institute, Bangalore Centre. I am interested
					in probability, statistics and applied mathematics in general. I wish to apply what I learn in class to solve
					real world problems. You can find out more about my academic work on my{" "}
					<Link component={RouterLink} underline="hover" to="/cv">
						CV page
					</Link>
					.
					<br />
					Currently, I am a first year graduate student at ETH Zürich doing my masters in Statistics.
					<br />I am also interested in designing and building websites. I work on projects to build web applications
					that are easy to use and simple. I like interacting and working in small teams.
					<br />I play badminton and football whenever I get a chance. I love to swim and am currently trying to take up
					hiking.
				</Typography>
				<FAQ sx={{ my: 8 }} />
				<LetsTalk />
			</Container>
		</FullHeight>
	)
}
