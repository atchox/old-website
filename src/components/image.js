import Box from "@mui/material/Box"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"

export default function Image({ title, date, ...others }) {
	return (
		<Tooltip
			arrow
			title={
				<>
					<Typography variant="body2">{title}</Typography>
					<Typography sx={{ color: "text.secondary" }} variant="caption">
						{date}
					</Typography>
				</>
			}
		>
			<Box component="img" {...others} />
		</Tooltip>
	)
}
