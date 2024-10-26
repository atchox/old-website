import axios from "axios"
import { createDirectus, rest } from "@directus/sdk"

const directus = createDirectus(process.env.REACT_APP_API_ROUTE).with(rest())

export { directus }

export default axios.create({
	baseURL: process.env.REACT_APP_API_ROUTE
})
