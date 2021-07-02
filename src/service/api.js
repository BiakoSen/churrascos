import Axios from "axios"

export const http = Axios.create({
    baseURL: 'http://192.168.0.10:4500/api',
})
