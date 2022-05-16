import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Element } from "react-scroll"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"

export default function FAQ(props) {
	return (
		<Box component={Element} name="faq" sx={{ pb: 4 }}>
			<Typography variant="h3" sx={{ mb: 2 }}>
				FAQ
			</Typography>
			<Accordion>
				<Summary>What's it like being that tall?</Summary>
				<Details>Great! Except when you go shopping for pants.</Details>
			</Accordion>
			<Accordion>
				<Summary>What do plan to do when you grow up?</Summary>
				<Details>
					<strong>*stares blankly without expression*</strong>
				</Details>
			</Accordion>
			<Accordion>
				<Summary>What's your favourite TV show?</Summary>
				<Details>
					<strong>Sherlock.</strong>
				</Details>
			</Accordion>
		</Box>
	)
}

const Summary = ({ children }) => (
	<AccordionSummary>
		<Typography variant="body1">{children}</Typography>
	</AccordionSummary>
)
const Details = ({ children }) => (
	<AccordionDetails>
		<Typography variant="body2">{children}</Typography>
	</AccordionDetails>
)
