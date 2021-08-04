import axios from 'axios'

const baseURL = 'http://spa_template.test/api'

const api = axios.create({
    baseURL,
    withCredentials: true,
})

export default api