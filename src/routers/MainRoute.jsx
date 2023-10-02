import {} from "react"
import HomeRoutes from "./homeRoute"
import { Navigate } from "react-router-dom"

const baseUrl={
    path:'/',
    element:<Navigate to="/page/1"/>
}

const routes = [
    baseUrl,
    HomeRoutes
]

export default routes