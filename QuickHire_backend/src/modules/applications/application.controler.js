import { Application } from "./application.schema.js";





export const submitApplication = async(req, res) => {

    const jobId = req.body.job_id
    
    const ifApplied = await Application.find({job_id: jobId})

    
    if(ifApplied.length > 0){
        throw new Error ("Allready Applied")
    }
    
    const result = await Application.create(req.body)

    res.status(201).json({
        success: true,
        message: "Application submitted successfully!",
        res: result
    });
}