import { useState } from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Message from "./message"
import ExternalLink from "../../components/externalLink"

export default function Modes({ sx }) {
	const [tab, setTab] = useState(0)
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const tabChange = (event, value) => setTab(value)

	return (
		<Paper sx={{ boxSizing: "border-box", bgcolor: "common.black", ...sx }} variant="outlined">
			<Tabs value={tab} onChange={tabChange}>
				<Tab label="Message" />
				<Tab label="Social" />
			</Tabs>
			<Box sx={{ pt: 4 }}>
				<Viewer n={name} sN={setName} e={email} sE={setEmail} m={message} sM={setMessage} tab={tab} />
			</Box>
		</Paper>
	)
}

const Viewer = ({ n, sN, e, sE, m, sM, tab }) => {
	if (tab === 0) {
		return <Message name={n} setName={sN} email={e} setEmail={sE} message={m} setMessage={sM} />
	} else if (tab === 1) {
		return (
			<List>
				<ListItem>
					<ListItemText primary="atchox" secondary="Discord" />
				</ListItem>
				<ListItem>
					<ListItemText
						primary={<ExternalLink href="https://www.github.com/atchox">atchox</ExternalLink>}
						secondary="GitHub"
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={<ExternalLink href="https://www.linkedin.com/in/atreyachoudhury">atreyachoudhury</ExternalLink>}
						secondary="LinkedIn"
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={<ExternalLink href="https://www.instagram.com/_atchox_">_atchox_</ExternalLink>}
						secondary="Instagram"
					/>
				</ListItem>
			</List>
		)
	}
}
