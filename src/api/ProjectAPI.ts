import { isAxiosError } from "axios";
import { dashboardProjectSchema, editProjectSchema, projectSchema, type Project, type ProjectFormData } from "../types";
import api from "@/lib/axios";

export async function createProject(formData: ProjectFormData) {
    try {
        const { data } = await api.post("/projects", formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getProjects() {
    const { data } = await api.get("/projects")
    return dashboardProjectSchema.parse(data)  
}

export async function getProjectById(id: Project["_id"]) {
    const { data } = await api.get(`/projects/${id}`)
    const response = editProjectSchema.safeParse(data)
    if(response.success) {
        return response.data
    }
}

export async function getFullProjectDetails(id: Project["_id"]) {
    const { data } = await api.get(`/projects/${id}`)
    const response = projectSchema.safeParse(data)
    if(response.success) {
        return response.data
    }
}

type ProjectAPIType = {
    formData: ProjectFormData,
    projectId: Project["_id"]
}

export async function updateProject({projectId, formData} : ProjectAPIType) {
    const { data } = await api.put<string>(`/projects/${projectId}`, formData)
    return data
}

export async function deleteProject(id: Project["_id"]) {
    const { data } = await api.delete<string>(`/projects/${id}`)
    return data
}