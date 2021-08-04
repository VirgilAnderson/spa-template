import axios from 'axios'

const baseURL = process.env.VUE_APP_BASE_URL

const base = axios.create({
    baseURL,
    withCredentials: true,
})

export default base