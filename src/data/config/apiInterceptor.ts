import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { parseEnv } from 'schemas/env'
const { OMDB_API_KEY } = parseEnv()

const baseApi: AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

baseApi.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        config.params = config.params ?? {}
        config.params.apikey = OMDB_API_KEY
        return config
    }
)

baseApi.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        console.error('Error', error.config?.url, error.message)
        const msg = error.response?.data?.Error ?? error.message
        return Promise.reject(new Error(msg))
    }
)

export default baseApi;