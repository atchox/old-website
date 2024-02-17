import { lazy, Suspense } from "react"
import { createBrowserRouter, ScrollRestoration, RouterProvider, Routes, Route } from "react-router-dom"
import Footer from "./components/footer"
import Nav from "./components/nav"
import PreLoader from "./components/preloader"
import Teaching from "./routes/teaching"
const Home = lazy(() => import("./routes/home"))
const About = lazy(() => import("./routes/about"))
const CV = lazy(() => import("./routes/cv"))
const Blog = lazy(() => import("./routes/blog"))
const Gallery = lazy(() => import("./routes/gallery"))
const Contact = lazy(() => import("./routes/contact"))
const Music = lazy(() => import("./routes/music"))
const NoMatch = lazy(() => import("./routes/noMatch"))

const router = createBrowserRouter([{ path: "*", Component: Root }])

export default function App() {
	return <RouterProvider router={router} />
}

function Root() {
	return (
		<>
			<Nav />
			<ScrollRestoration />
			<Routes>
				<Route element={<Footer />}>
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
					<Route path="teaching/*" element={<Teaching />} />
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
						path="music"
						element={
							<Suspense fallback={<PreLoader />}>
								<Music />
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
					<Route
						path="*"
						element={
							<Suspense fallback={<PreLoader />}>
								<NoMatch />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</>
	)
}
