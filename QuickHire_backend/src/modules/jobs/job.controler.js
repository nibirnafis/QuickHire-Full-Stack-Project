import { Job } from "./job.schema.js";



export const getAllJobs = async(req, res) => {
    
    try {
        const result = await Job.find({})

        res.status(201).json({
            success: true,
            message: "All Jobs retrived successfully!",
            res: result
        });
    } catch (error) {
        console.log(error)
    }
}




export const getCategorizedJobs = async(req, res) => {
    
    const category = req.params.category
    console.log(category)

    try {
        const result = await Job.find({category: category})

        res.status(201).json({
            success: true,
            message: "All Jobs retrived successfully!",
            res: result
        });
    } catch (error) {
        console.log(error)
    }
}




export const getSingleJob = async(req, res) => {

    try {
        const id = req.params.id
    
        const result = await Job.findById(id)

        res.status(201).json({
            success: true,
            message: "Job retrived successfully!",
            res: result
        });
    } catch (error) {
        console.log(error)
    }
}





export const searchJob = async(req, res) => {

    const title = req.params.title
    const location = req.params.location

    
    const result = await Job.aggregate([
            {
                $match: {
                    title: title,
                    location: location
                }
            }
        ])
    
    res.status(201).json({
        success: true,
        message: "Job Retrived successfully!",
        res: result
    });
}





export const createJob = async(req, res) => {
    
    const result = await Job.create(req.body)

    res.status(201).json({
        success: true,
        message: "Job Created successfully!",
        res: result
    });
}





export const deleteJob = async(req, res) => {
    
    const id = req.params.id
    
    const result = await Job.deleteOne({_id: id})

    res.status(201).json({
        success: true,
        message: "Job deleted successfully!",
        res: result
    });
}