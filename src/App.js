import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/nav"
const Home = lazy(() => import("./routes/home"))
const About = lazy(() => import("./routes/about"))
const CV = lazy(() => import("./routes/cv"))
const Blog = lazy(() => import("./routes/blog"))

export default function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route
					path="about"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<About />
						</Suspense>
					}
				/>
				<Route
					path="cv"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<CV />
						</Suspense>
					}
				/>
				<Route
					path="blog"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Blog />
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
