import { Router } from "express";
import { createJob, deleteJob, getAllJobs, getSingleJob, searchJob } from "./job.controler.js"


export const jobsRoutes = Router()

jobsRoutes.get('/', getAllJobs);
jobsRoutes.get('/:id', getSingleJob);
jobsRoutes.post('/', createJob);
jobsRoutes.post('/search', searchJob);
jobsRoutes.delete('/:id', deleteJob);
