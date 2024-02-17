import Container from "@mui/material/Container"
import FullHeight from "../../components/fullHeight"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Link from "@mui/material/Link"
import styled from "@mui/material/styles/styled"
import { Link as RouterLink } from "react-router-dom"

export default function Courses() {
	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "text.primary" }}>
			<Container sx={{ pt: 6 }}>
				<Typography variant="h3" sx={{ color: "grey.500", mb: 2 }}>
					ETHZ FS24
				</Typography>
				<List>
					<ListItem>
						<QuickLink to="LAII">Linear Algebra II</QuickLink>
					</ListItem>
				</List>
			</Container>
		</FullHeight>
	)
}

const QuickLink = styled(props => <Link underline="none" component={RouterLink} variant="h5" {...props} />)(
	({ theme }) => ({
		color: theme.palette.grey[50],
		transition: theme.transitions.create("color", {
			duration: theme.transitions.duration.shorter,
			easing: theme.transitions.easing.sharp
		}),
		"&:hover": {
			color: theme.palette.grey[400]
		}
	})
)
