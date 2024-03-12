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
						<Typography variant="body1">
							<b>Wednesdays and Fridays</b> from <b>10:15 to 12:00</b> in <b>HG F 5 and HG F 7</b>
						</Typography>
					</Box>
				</Stack>
				<Typography variant="h3" sx={{ color: "grey.400", mt: 4 }}>
					Exercise Hour
				</Typography>
				<Typography variant="body1" sx={{ mt: 1 }}>
					This page contains all the material I use for the exercise hour I conduct.
				</Typography>
				<Typography variant="h6" sx={{ mt: 2 }}>
					Timing
				</Typography>
				<Typography variant="body1">
					Mondays from <b>14:15 to 16:00</b> in <b>HG G 26.3</b>
				</Typography>
				<Stack direction="column" spacing={4} sx={{ mt: 6 }}>
					<Box>
						<Header>23/02</Header>
						<Typography variant="body1">We review duals, quotients and determinants.</Typography>
						<FileList>
							<Link
								href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/0/problems.pdf`}
								type="application/pdf"
								variant="body1"
								underline="none"
							>
								problems
							</Link>
							<Link
								href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/0/solutions.pdf`}
								type="application/pdf"
								variant="body1"
								underline="none"
							>
								solutions
							</Link>
						</FileList>
						<Divider>0</Divider>
					</Box>
					<Box>
						<Header>26/02</Header>
						<Typography variant="body1">
							We discuss the questions from the homework. We talk about a general template we usually follow for solving
							these recurrence/induction based determinant computation exercises. We also talk briefly about the
							properties of determinant functions.
						</Typography>
						<FileList>
							<Link
								href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/1/notes.pdf`}
								type="application/pdf"
								variant="body1"
								underline="none"
							>
								notes
							</Link>
							<Link
								href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/1/exercises.pdf`}
								type="application/pdf"
								variant="body1"
								underline="none"
							>
								some exercises
							</Link>
						</FileList>
						<Divider>1</Divider>
					</Box>
					<Box>
						<Header>04/03</Header>
						<Typography variant="body1">We discuss the questions from the homework.</Typography>
						<FileList>
							<Link
								href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/2/notes.pdf`}
								type="application/pdf"
								variant="body1"
								underline="none"
							>
								notes
							</Link>
							<Link
								href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/2/exercises.pdf`}
								type="application/pdf"
								variant="body1"
								underline="none"
							>
								some exercises
							</Link>
						</FileList>
						<Divider>2</Divider>
					</Box>
					<Box>
						<Header>11/03</Header>
						<Typography variant="body1">
							We discuss the questions from the homework and talk about direct sums.
						</Typography>
						<FileList>
							<Link
								href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/3/notes.pdf`}
								type="application/pdf"
								variant="body1"
								underline="none"
							>
								notes
							</Link>
							<Link
								href={`${process.env.PUBLIC_URL}/pdf/FS24-LAII/3/exercises.pdf`}
								type="application/pdf"
								variant="body1"
								underline="none"
							>
								some exercises
							</Link>
						</FileList>
						<Divider>3</Divider>
					</Box>
					<Box>
						<Header>18/03</Header>
						<Divider>4</Divider>
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

const FileList = props => (
	<Stack
		direction="row"
		spacing={2}
		sx={{ mt: 1 }}
		divider={
			<DefDivider
				flexItem
				orientation="vertical"
				sx={{
					borderColor: "grey.800"
				}}
			/>
		}
		{...props}
	/>
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
