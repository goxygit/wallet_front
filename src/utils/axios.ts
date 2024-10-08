import axios from 'axios'

export const apiUrl = 'http://localhost:3001/api/'

const instance :any = axios.create({
    baseURL: apiUrl,
})
export default instance