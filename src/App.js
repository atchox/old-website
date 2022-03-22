import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/nav"
const Home = lazy(() => import("./routes/home"))
const CV = lazy(() => import("./routes/cv"))
const About = lazy(() => import("./routes/about"))

export default function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route
					path="cv"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<CV />
						</Suspense>
					}
				/>
				<Route
					path="about"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<About />
						</Suspense>
					}
				/>
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
