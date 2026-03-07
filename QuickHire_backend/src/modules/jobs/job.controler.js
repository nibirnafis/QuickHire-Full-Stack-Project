import { Job } from "./job.schema.js";



export const getAllJobs = async(req, res) => {
    
    const result = await Job.find({})

    res.status(201).json({
        message: "All Jobs retrived successfully!",
        res: result
    });
}




export const getSingleJob = async(req, res) => {

    const id = req.params.id
    
    const result = await Job.findById(id)

    res.status(201).json({
        message: "Job retrived successfully!",
        res: result
    });
}





export const searchJob = async(req, res) => {

    const job = req.body
    
    const result = await Job.aggregate([
            {
                $match: {
                    title: job.title,
                    location: job.location
                }
            }
        ])
    
    res.status(201).json({
        message: "Searched Job received successfully!",
        res: result
    });
}





export const createJob = async(req, res) => {
    
    const result = await Job.create(req.body)

    res.status(201).json({
        message: "Job received successfully!",
        res: result
    });
}





export const deleteJob = async(req, res) => {
    
    const id = req.params.id
    
    const result = await Job.deleteOne({_id: id})

    res.status(201).json({
        message: "Job deleted successfully!",
        res: result
    });
}