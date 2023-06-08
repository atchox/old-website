import { Button, CircularProgress } from "@mui/material"

export default function LoaderButton(props) {
	return props.buttonLoad ? (
		<Button color={props.color} size={props.size} disabled variant="outlined">
			<CircularProgress sx={{ mr: 1 }} size={16} color="inherit" />
			{props.children}
		</Button>
	) : (
		<Button color={props.color} size={props.size} disabled={props.disabled} variant="outlined" type="submit">
			{props.children}
		</Button>
	)
}
