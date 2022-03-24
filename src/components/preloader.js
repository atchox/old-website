import FullHeight from "./fullHeight.js"
import Atom from "./atom"

export default function PreLoader() {
	return (
		<FullHeight
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "common.black"
			}}
		>
			<Atom size={7} />
		</FullHeight>
	)
}
