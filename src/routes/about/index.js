import { useEffect } from "react"
import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router"
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
				<Header sx={{ pt: 5 }}>About Me</Header>
				<Typography variant="body1" sx={{ my: 4 }}>
					I was born on a Sunday afternoon in a small town in Birbhum, West Bengal known as Bolpur. I have lived in
					Kolkata for most of my life but have had the chance to travel quite a bit on account on my parents. We spent a
					few years in USA when I was very young and a few in Singapore in recent years. Currently, I live in Zürich!
				</Typography>
				<Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
					अयं निजः परो वेति गणना लघुचेतसाम्।
					<br />
					उदारचरितानां तु वसुधैव कुटुम्बकम्॥
				</Typography>
				<Typography sx={{ color: "grey.500" }} variant="caption">
					<i>- Upanishad</i>
				</Typography>
				<Typography variant="body1" sx={{ my: 4 }}>
					I did most of my schooling in Kolkata. I was at Garden High School for middle school and at Delhi Public
					School, Ruby Park for high school. I grew up being very fond of football, music and badminton. Around this
					time, I met some of my best friends. We were all enthusiastic about how fun mathematics and problem solving
					could be and bonded over it.
				</Typography>
				<Typography variant="body1" sx={{ mb: 4 }}>
					I did my undergraduate in mathematics from the Indian Statistical Institute, Bangalore Centre. I enjoyed a
					variety of classes like Probability, Statistics, Graph Theory and Complex Analysis. I particularly enjoyed the
					idea that you could model the behaviour of real world problems using statistics and make inferences from them.
					I spent my free time designing and building websites. I volunteered on projects to build web applications that
					were simple and easy to use. I developed a liking for interacting and working in small teams.
				</Typography>
				<Typography variant="body1" sx={{ mb: 6 }}>
					Currently, I am a first year graduate student at ETH Zürich doing my masters in Statistics. I am interested in
					causality and nonparametric regression. I love to swim and am currently trying to take up hiking. You can find
					out more about my academic work on my{" "}
					<Link component={RouterLink} underline="hover" to="/cv">
						CV page
					</Link>
					.
				</Typography>
				<FAQ sx={{ my: 8 }} />
				<LetsTalk />
			</Container>
		</FullHeight>
	)
}
