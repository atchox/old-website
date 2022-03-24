import data from "./data.json"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import styled from "@mui/material/styles/styled"

export default function CV() {
	const headers = Object.keys(data)

	return (
		<Container maxWidth={false} sx={{ bgcolor: "common.black", color: "grey.300" }}>
			<Container sx={{ py: 4 }}>
				{headers.map((header, index) => (
					<Table header={header} key={index} />
				))}
			</Container>
		</Container>
	)
}

const Table = styled(({ header, ...others }) => {
	const rows = data[header]

	return (
		<table {...others}>
			<thead>
				<tr>
					<th className="indicator">
						<span></span>
					</th>
					<Typography component="th" variant="h6" sx={{ fontWeight: 700 }}>
						{header}
					</Typography>
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<tr key={index}>
						<Typography component="td" variant="body1" sx={{ fontWeight: 600 }}>
							{row[0]}
						</Typography>
						<Typography component="td" variant="body2">
							{row[1]}
						</Typography>
					</tr>
				))}
			</tbody>
		</table>
	)
})(({ theme }) => ({
	width: "100%",
	marginBottom: theme.spacing(5),
	tableLayout: "fixed",
	"&:last-of-type": {
		marginBottom: 0
	},
	"& td,th": {
		padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
		verticalAlign: "top",
		wordWrap: "break-word"
	},
	"& thead": {
		"& tr th:last-of-type": {
			textAlign: "left"
		},
		"& .indicator": {
			width: "30%",
			verticalAlign: "middle",
			[theme.breakpoints.up("sm")]: {
				width: "18%"
			},
			[theme.breakpoints.up("md")]: {
				width: "13%"
			},
			"& span": {
				content: "''",
				display: "block",
				height: theme.spacing(0.5),
				width: "100%",
				backgroundColor: theme.palette.primary.dark
			}
		}
	},
	"& tbody tr td:first-of-type": {
		textAlign: "right"
	}
}))
