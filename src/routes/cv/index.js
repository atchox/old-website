import { useEffect } from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import FullHeight from "../../components/fullHeight"
import data from "./data"

export default function CV() {
	const headers = Object.keys(data)

	useEffect(() => {
		document.title = "CV - atchox"
	})

	return (
		<FullHeight minMode sx={{ bgcolor: "common.black", color: "text.primary" }}>
			<Container sx={{ pt: 6 }}>
				{headers.map((header, index) => (
					<Table header={header} key={index} />
				))}
			</Container>
		</FullHeight>
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
					<Typography component="th" variant="h4" sx={{ fontWeight: 700 }}>
						{header}
					</Typography>
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<tr key={index}>
						<Typography component="td" variant="body1">
							{row[0]}
						</Typography>
						<Typography component="td" variant="body1">
							{row[1]}
						</Typography>
					</tr>
				))}
			</tbody>
		</table>
	)
})(({ theme }) => ({
	width: "100%",
	tableLayout: "fixed",
	whiteSpace: "pre-line",
	marginBottom: theme.spacing(10),
	"&:last-of-type": {
		marginBottom: 0
	},
	"& td,th": {
		padding: `${theme.spacing(0.8)} ${theme.spacing(1)}`,
		verticalAlign: "top",
		wordWrap: "break-word"
	},
	"& thead": {
		color: theme.palette.text.secondary,
		"& tr th:last-of-type": {
			textAlign: "left"
		},
		"& .indicator": {
			width: "30%",
			verticalAlign: "middle",
			paddingLeft: 0,
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
		fontWeight: 600,
		color: theme.palette.grey[600],
		textAlign: "right"
	}
}))
