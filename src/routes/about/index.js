import { useEffect } from "react"
import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router-dom"
import Skipper from "./skipper"
import FAQ from "./faq"
import Header from "./header"
import LetsTalk from "./letsTalk"

export default function About() {
	useEffect(() => {
		document.title = "About - atchox"
	})

	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "grey.300" }}>
			<Container>
				<Skipper />
				<Header>The Dough</Header>
				<Typography variant="body1" sx={{ mb: 4 }}>
					I was born on a Sunday afternoon in 2002 in a small town in Birbhum, West Bengal known as Bolpur. I grew up in
					a very middle class household. My dad works in the IT industry which is probably the most boring description
					his job that I can come up with. My mom stays at home, runs the family and does her best to keep me straying
					away from the straight and narrow.
					<br />
					We have lived in Kolkata for most of our lives but have been around a fair bit. We spent a few years in USA
					when I was very young and have been living in Singapore for a few months now. I feel like it's appropriate to
					talk a bit more about my parents at this point as any conversation about me can usually be traced back to
					them.
					<br />
					My parents grew up in a village near Bolpur known as Bahiri. They grew up with very little and worked very
					hard to earn whatever they have. My dad, Chandu, is a workaholic. He is that guy who is always on time, who
					always has a plan C. He is the guy who decided my first name. Funny story here - when I asked him years later
					why he chose that name, he said, "I guessed that if your name started with A, you would usually be around the
					top of name lists." My mom, Pampa, is the glue of the family. When I say family, I mean our whole extended
					family. She's an expert of interpersonal relationships and one of the smartest and kindest person I know. My
					dad believes in opulence and my mom believes in staying as grounded as possible. So they balance each other
					out pretty well.
				</Typography>
				<Typography variant="body1" sx={{ mb: 4 }}>
					I did most of my schooling in Kolkata. I studied at Garden High School till 10<sup>th</sup> standard. If
					someone would have told me around 4<sup>th</sup> standard that I would end up studying mathematics, I would
					probably have laughed at them. Uptil 7<sup>th</sup> standard, I was more interested in art, music and sports
					class with no academic inclination whatsoever. It was only in 8<sup>th</sup> standard that I developed a
					liking towards mathematics which would grow and shrink in the years to come.
					<br />I did my 11<sup>th</sup> and 12<sup>th</sup> standard from Delhi Public School, Ruby Park.
				</Typography>
				<Typography variant="body1" sx={{ mb: 6 }}>
					Currently, I am a third year undergraduate student of mathematics at Indian Statistical Institute, Bangalore
					with an interest in probability, statistics and applied mathematics in general. I wish to apply what I learn
					in class to solve real world problems. You can find out more about my academic work on my{" "}
					<Link component={RouterLink} underline="hover" to="/cv">
						CV page.
					</Link>
					<br />I am also interested in designing and building websites. I work on projects to build web applications
					that are easy to use and simple. I like working on projects in small teams.
					<br />I also enjoy playing sports like badminton, swimming and football.
				</Typography>
				<FAQ sx={{ mb: 8 }} />
				<LetsTalk />
			</Container>
		</FullHeight>
	)
}
