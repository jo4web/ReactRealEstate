import axios from 'axios'

const api = axios.create({
  baseURL: "https://bayut.p.rapidapi.com",
  headers: {
		"x-rapidapi-host": "bayut.p.rapidapi.com",
		"x-rapidapi-key": "xxxxx"
	}
})

export default api;