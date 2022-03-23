import data from "./data.json"
import Container from "@mui/material/Container"
import styled from "@mui/material/styles/styled"

export default function CV() {
	const headers = Object.keys(data)

	return (
		<Container sx={{ pt: 4 }}>
			{headers.map((header, index) => (
				<Table header={header} key={index} />
			))}
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
					<th>{header}</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<tr key={index}>
						<td>{row[0]}</td>
						<td>{row[1]}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
})(({ theme }) => ({
	width: "100%",
	marginBottom: theme.spacing(5),
	tableLayout: "fixed",
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
				margin: "0 auto",
				backgroundColor: theme.palette.secondary.main
			}
		}
	},
	"& tbody tr td:first-of-type": {
		textAlign: "right",
		fontWeight: 600
	}
}))
