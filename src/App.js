import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/nav"
const Home = lazy(() => import("./routes/home"))

export default function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route
					index
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Home />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
