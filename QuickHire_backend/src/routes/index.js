import { Router } from "express";
import { jobsRoutes } from "../modules/jobs/job.routes.js";
import { applicationsRoutes } from "../modules/applications/application.routes.js";

export const routes = Router()

const availableRoutes = [
    {
        path: '/api/jobs',
        method: jobsRoutes
    },
    {
        path: '/api/applications',
        method: applicationsRoutes
    },
]


availableRoutes.forEach(route=>{
    routes.use(route.path, route.method)
})