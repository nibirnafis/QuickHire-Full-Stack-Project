import { Router } from "express";
import { createJob, deleteJob, getAllJobs, getSingleJob } from "./job.controler.js"


export const jobsRoutes = Router()

jobsRoutes.get('/', getAllJobs);
jobsRoutes.get('/:id', getSingleJob);
jobsRoutes.post('/', createJob);
jobsRoutes.delete('/:id', deleteJob);
