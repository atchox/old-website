import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import theme from "./theme"

const root = createRoot(document.getElementById("root"))
root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>
)
