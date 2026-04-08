import axios, { AxiosError, AxiosResponse } from "axios"
import { getSession } from "next-auth/react"
import { APP_CONFIG } from "@/config/app"

export const apiClient = axios.create({
  baseURL: APP_CONFIG.api.baseUrl,
  timeout: APP_CONFIG.api.timeout,
  headers: { "Content-Type": "application/json" },
})

apiClient.interceptors.request.use(async (config) => {
  const session = await getSession()
  if (session?.accessToken) config.headers.Authorization = `Bearer ${session.accessToken}`
  return config
})

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: AxiosError) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
)

export const api = {
  get:    <T>(url: string, params?: object) => apiClient.get<T, T>(url, { params }),
  post:   <T>(url: string, data?: object)   => apiClient.post<T, T>(url, data),
  put:    <T>(url: string, data?: object)   => apiClient.put<T, T>(url, data),
  patch:  <T>(url: string, data?: object)   => apiClient.patch<T, T>(url, data),
  delete: <T>(url: string)                  => apiClient.delete<T, T>(url),
}
