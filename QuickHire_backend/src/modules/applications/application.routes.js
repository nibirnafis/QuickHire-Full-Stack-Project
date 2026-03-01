import { Router } from "express";
import { submitApplication } from "./application.controler.js";


export const applicationsRoutes = Router()



applicationsRoutes.post('/', submitApplication);
