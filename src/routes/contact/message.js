import { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import Alert from "@mui/material/Alert"
import axios from "../../axiosSetup"
import LoaderButton from "../../components/loaderButton"

export default function Message({ name, setName, email, setEmail, message, setMessage }) {
	const [loading, setLoading] = useState(false)
	const [alerts, setAlerts] = useState([])

	useEffect(() => {
		if (alerts.length === 0) return
		setTimeout(() => {
			setAlerts(alerts => {
				const arr = [...alerts]
				arr.pop()
				return arr
			})
		}, 5000)
	}, [alerts, setAlerts])

	const submit = async event => {
		try {
			setLoading(true)
			event.preventDefault()
			let data = await axios.post("/reach", {
				name: name,
				email: email.toLowerCase().trim(),
				message: message,
				contacted_at: new Date()
			})
			setLoading(false)
			if (data.status === 200) {
				setName("")
				setEmail("")
				setMessage("")
				setAlerts(alerts => [{ message: "Your message has been sent", type: "success" }, ...alerts])
			}
		} catch (error) {
			setLoading(false)
			if (error.response.status === 502) {
				setAlerts(alerts => [
					{ message: "Uh Oh! My pigeon friend seems unavailable right now. Please try again later?", type: "error" },
					...alerts
				])
			} else if (error.response.status === 504) {
				setAlerts(alerts => [
					{ message: "Beep Bop! I feel a little slow right now. Please try again later?", type: "error" },
					...alerts
				])
			}
			console.log(error)
		}
	}

	return (
		<>
			<Typography variant="h5" sx={{ color: "text.secondary" }}>
				Send a message and I will reach back
			</Typography>
			<Box component="form" onSubmit={submit} sx={{ mt: 3 }}>
				<Stack spacing={2} sx={{ mb: 2 }} direction={{ xs: "column", sm: "row" }}>
					<FormControl variant="outlined" fullWidth>
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
					<FormControl variant="outlined" fullWidth>
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
				</Stack>
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
				<LoaderButton buttonLoad={loading} disabled={!name || !email || !message}>
					Send
				</LoaderButton>
			</Box>
			{alerts[0] && (
				<Stack sx={{ mt: 2 }} spacing={2} direction="column">
					{alerts.map((alert, key) => (
						<Alert severity={alert.type} key={key}>
							{alert.message}
						</Alert>
					))}
				</Stack>
			)}
		</>
	)
}
