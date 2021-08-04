import axios from 'axios'

const baseURL = 'http://spa_template.test'

const base = axios.create({
    baseURL,
    withCredentials: true,
})

export default base