import axios, { type AxiosInstance } from 'axios'

// Create axios instance with default configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api.everestlc.uz/api/v1/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default apiClient
