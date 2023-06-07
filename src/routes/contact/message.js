import { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Button from "@mui/material/Button"
import OutlinedInput from "@mui/material/OutlinedInput"
import axios from "../../axiosSetup"

export default function Message() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const submit = async event => {
		try {
			event.preventDefault()
			let data = await axios.post("/reach", {
				name: name,
				email: email.toLowerCase().trim(),
				message: message,
				contacted_at: new Date()
			})
			if (data.status === 200) {
				setName("")
				setEmail("")
				setMessage("")
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Typography variant="h5" sx={{ color: "text.secondary" }}>
				Send a message and I will reach back
			</Typography>
			<Box component="form" onSubmit={submit} sx={{ mt: 3 }}>
				<FormControl sx={{ mb: 2 }} variant="outlined" fullWidth>
					<InputLabel htmlFor="name">Name</InputLabel>
					<OutlinedInput
						value={name}
						onChange={event => setName(event.target.value)}
						id="name"
						type="text"
						aria-describedby="name-text"
						label="Name"
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }} variant="outlined" fullWidth>
					<InputLabel htmlFor="email">Email ID</InputLabel>
					<OutlinedInput
						value={email}
						onChange={event => setEmail(event.target.value)}
						id="email"
						type="email"
						aria-describedby="email-text"
						label="Email ID"
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }} variant="outlined" fullWidth>
					<InputLabel htmlFor="name">Message</InputLabel>
					<OutlinedInput
						value={message}
						onChange={event => setMessage(event.target.value)}
						id="message"
						type="text"
						aria-describedby="message-text"
						label="Message"
						multiline
						minRows={4}
					/>
				</FormControl>
				<Button disabled={!name || !email || !message} variant="outlined" type="submit">
					Send
				</Button>
			</Box>
		</>
	)
}
