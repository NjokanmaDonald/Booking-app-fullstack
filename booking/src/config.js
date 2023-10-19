import axios from "axios"

export const axiosInstance = axios.create({
	baseURL : "https://bookingapi-lh3u.onrender.com/api/"
})