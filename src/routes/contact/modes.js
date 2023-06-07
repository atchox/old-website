import { useState } from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Message from "./message"

export default function Modes({ sx }) {
	const [tab, setTab] = useState(0)

	const tabChange = (event, value) => setTab(value)

	return (
		<Paper sx={{ boxSizing: "border-box", bgcolor: "common.black", ...sx }} variant="outlined">
			<Tabs value={tab} onChange={tabChange}>
				<Tab label="Message" />
				<Tab label="Social" />
			</Tabs>
			<Box sx={{ pt: 4 }}>
				<Viewer tab={tab} />
			</Box>
		</Paper>
	)
}

const Viewer = ({ tab }) => {
	if (tab === 0) {
		return <Message />
	} else if (tab === 1) {
		return (
			<List>
				<ListItem>
					<ListItemText primary="atchox#2032" secondary="Discord" />
				</ListItem>
				<ListItem>
					<ListItemText primary="atchox" secondary="GitHub" />
				</ListItem>
				<ListItem>
					<ListItemText primary="_atchox_" secondary="Instagram" />
				</ListItem>
			</List>
		)
	}
}
