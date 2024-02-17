import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import Typography from "@mui/material/Typography"
import ExternalLink from "../../components/externalLink"
import Stack from "@mui/material/Stack"
import DefDivider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router-dom"

export default function LAII() {
	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "text.primary" }}>
			<Container sx={{ pt: 6 }}>
				<Typography variant="h1">Linear Algebra II</Typography>
				<Typography variant="h5" sx={{ color: "grey.400" }}>
					by Prof. Sarah Zerbes
				</Typography>
				<Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 8 }} sx={{ mt: 3 }}>
					<Box>
						<Typography variant="h6">Course Website</Typography>
						<ExternalLink href="https://metaphor.ethz.ch/x/2023/hs/401-1151-00L/" variant="body1">
							linked here on metaphor
						</ExternalLink>
					</Box>
					<Box>
						<Typography variant="h6">Lecture Hours</Typography>
						<Typography variant="body1">Wednesdays and Fridays from 10:15 to 12:00 in HG F5 and HG F7</Typography>
					</Box>
				</Stack>
				<Typography variant="h3" sx={{ color: "grey.400", mt: 4 }}>
					Exercise Hour
				</Typography>
				<Typography variant="body1" sx={{ mt: 1 }}>
					This page contains all the material I use for the exercise hour I conduct
				</Typography>
				<Typography variant="h6" sx={{ mt: 2 }}>
					Timing
				</Typography>
				<Typography variant="body1">Wednesdays and Fridays from 10:15 to 12:00 in HG F5 and HG F7</Typography>
				<Stack direction="column" spacing={4} sx={{ mt: 6 }}>
					<Box>
						<Header>19/02</Header>
						<Typography variant="body1">We review duals, quotients and determinants</Typography>
						<Link
							href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/1/problems.pdf`}
							type="application/pdf"
							variant="body1"
							underline="none"
							target="__blank__"
						>
							problems
						</Link>
						<Divider>1</Divider>
					</Box>
					<Box>
						<Header>26/02</Header>
						<Divider>2</Divider>
					</Box>
					<Box>
						<Header>04/03</Header>
						<Divider>3</Divider>
					</Box>
				</Stack>
				<Typography variant="h6" sx={{ mt: 6 }}>
					Resources
				</Typography>
				<Stack direction="column" spacing={2} sx={{ mt: 1 }}>
					<ExternalLink href="https://studycenter.ethz.ch" variant="body1">
						StudyCenter
					</ExternalLink>
					<ExternalLink href="https://exams.vmp.ethz.ch" variant="body1">
						VMP Exam Collection
					</ExternalLink>
					<Typography variant="body1">
						If you have any questions regarding course material/assignments/corrections, you can reach me anytime by
						leaving me a message{" "}
						<Link component={RouterLink} to="/contact">
							here
						</Link>{" "}
						(this works faster than email ;)). You are always encouraged to leave feedback/suggestions for me{" "}
						<ExternalLink href="https://forms.gle/kqYUog7mn8tGwMKC8" variant="body1">
							here on this Google Form.
						</ExternalLink>
					</Typography>
				</Stack>
			</Container>
		</FullHeight>
	)
}

const Header = ({ children, ...props }) => (
	<Typography variant="h6" sx={{ color: "grey.500", mb: 1 }} {...props}>
		{children}/2024
	</Typography>
)

const Divider = ({ children, ...props }) => (
	<DefDivider
		sx={{
			mt: 1,
			mr: 4,
			"&::before, &::after": {
				borderColor: "grey.600"
			}
		}}
		variant="caption"
		aria-hidden="true"
		textAlign="left"
		flexItem
		orientation="horizontal"
		{...props}
	>
		<Typography variant="body1">
			Week{"  "}
			{children}
		</Typography>
	</DefDivider>
)
