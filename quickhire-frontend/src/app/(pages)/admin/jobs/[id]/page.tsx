'use client'

import SectionTitle from "@/src/components/sectionTitle"
import Button from "@/src/components/ui/button";
import { IJob } from "@/src/types/types";
import { categoryColor, deleteJob } from "@/src/utilities/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const JobDetail = () => {


    const [ job, setJob ] = useState<null | IJob>(null)
    const [ warning, setWarning ] = useState(false)


    const { id } = useParams()
    

    useEffect(()=>{

        const loadJobs = async () => {
            const res =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/${id}`)
            const data =  await res.json()


            setJob(data.res)
        }

        loadJobs()

    }, [id])

    

    const handleDelete = () => {
        setWarning(!warning)
    }


    const closeWarning = () => {
        setWarning(!warning)
    }


    const confirmDelete = async() => {
        const result = await deleteJob(id)
    }



    return (

    <section className='container relative'>

        {
            warning &&
            <div className="flex flex-col justify-center items-center gap-4 bg-primary-1 text-white w-full h-full absolute">
                <p>Do you want to Delete the job?</p>
                <div className="flex justify-between gap-4">
                    <button onClick={closeWarning}>
                        <Button title='No' bg= 'bg-green-600' text='text-white'></Button>
                    </button>
                    <button onClick={confirmDelete}>
                        <Button title='Yes' bg= 'bg-red-600' text='text-white'></Button>
                    </button>
                </div>
            </div>
        }


        <div className='flex flex-col justify-center items-center max-w-298 m-auto responsive'> 

            <SectionTitle t1='Job ' t2='Detail'></SectionTitle>

            {
                job ?
                <div className='flex flex-col gap-2 p-6 border-[#D6DDEB] border-[.5px]'>

                    <div>
                        <p className='font-semibold text-[18px] text-txt-1'>{job.title}</p>
                        <p className='font-normal text-[1rem] text-txt-1'>{job.company} <span>{job.location}</span></p>
                        <p className='font-light text-sm text-txt-2'>Job ID: {job._id}</p>
                    </div>
                    
                    <p className='font-normal'>{job.description}</p>
                    <p className='font-normal'>{job.createdAt}</p>
                    <div className='flex justify-between items-center'>
                        <p className={`${categoryColor(job.category)} py-2 px-4 rounded-full font-semibold`}>{job.category}</p>

                        <button onClick={handleDelete}>
                            <Button title='Delete' bg= 'bg-red-700' text='text-white'></Button>
                        </button>
                    </div>
                </div>
                :
                <p>Job Not Found</p>
            }

        </div>

    </section>
    );
};

export default JobDetail;