import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/nav"
import PreLoader from "./components/preloader"
const Home = lazy(() => import("./routes/home"))
const About = lazy(() => import("./routes/about"))
const CV = lazy(() => import("./routes/cv"))
const Blog = lazy(() => import("./routes/blog"))
const Gallery = lazy(() => import("./routes/gallery"))
const Contact = lazy(() => import("./routes/contact"))

export default function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route
					path="about"
					element={
						<Suspense fallback={<PreLoader />}>
							<About />
						</Suspense>
					}
				/>
				<Route
					path="cv"
					element={
						<Suspense fallback={<PreLoader />}>
							<CV />
						</Suspense>
					}
				/>
				<Route
					path="blog"
					element={
						<Suspense fallback={<PreLoader />}>
							<Blog />
						</Suspense>
					}
				/>
				<Route
					path="gallery"
					element={
						<Suspense fallback={<PreLoader />}>
							<Gallery />
						</Suspense>
					}
				/>
				<Route
					path="contact"
					element={
						<Suspense fallback={<PreLoader />}>
							<Contact />
						</Suspense>
					}
				/>
				<Route
					index
					element={
						<Suspense fallback={<PreLoader />}>
							<Home />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
