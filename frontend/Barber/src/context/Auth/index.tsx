import { ReactNode, createContext, useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";


interface AuthProviderProps {
    children: ReactNode
}

interface LoginResponse {
    token: string
}

interface AuthContextValues {
    signIn: (data) => void
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
   
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("your-todolist:token")

        if (!token) {

            return
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`
    

    }, [])

    const signIn = async (data) => {

        try {

            const response = await api.post<LoginResponse>("/login", data)

            const { token } = response.data


            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("your-todolist:token", token)
            

            navigate("dashboard")
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}