import axios from 'axios'

const baseURL = `${process.env.VUE_APP_BASE_URL}/api`

const api = axios.create({
    baseURL,
    withCredentials: true,
})

export default api