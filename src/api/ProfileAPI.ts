import { isAxiosError } from "axios"
import type { UpdateCurrentUserPasswordForm, UserProfileForm } from "../types"
import api from "@/lib/axios"

export async function updateProfile(formData: UserProfileForm) {
    try {
        const { data } = await api.put<{ message: string }>("/auth/profile", formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
        throw new Error("Error inesperado")
    }
}

export async function changePassword(formData: UpdateCurrentUserPasswordForm) {
    try {
        const { data } = await api.post<{ message: string }>("/auth/update-password", formData)   
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
        throw new Error("Error inesperado")
    }
}