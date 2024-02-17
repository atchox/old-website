import { useEffect, lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import PreLoader from "../../components/preloader"
const Courses = lazy(() => import("./courses"))
const LAII = lazy(() => import("./LAII"))

export default function Teaching() {
	useEffect(() => {
		document.title = "Teaching - atchox"
	})

	return (
		<Routes>
			<Route
				path=""
				element={
					<Suspense fallback={<PreLoader />}>
						<Courses />
					</Suspense>
				}
			/>
			<Route
				path="LAII"
				element={
					<Suspense fallback={<PreLoader />}>
						<LAII />
					</Suspense>
				}
			/>
		</Routes>
	)
}
