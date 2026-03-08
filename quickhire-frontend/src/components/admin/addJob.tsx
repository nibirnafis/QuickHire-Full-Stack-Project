'use client'

import { addJobErrors, addJobSchema } from "@/src/lib/schema";
import { addNewJob } from "@/src/utilities/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const AddJob = () => {

    const router = useRouter()
    const [errors, setErrors] = useState<addJobErrors>({});


    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors({})

        const form = new FormData(e.currentTarget)


        const title = form.get('title') as string
        const company = form.get('company') as string
        const location = form.get('location') as string
        const category = form.get('category') as string
        const description = form.get('description') as string

        const newJob =  {title: title, company: company, location: location, category: category, description: description}
        
        const validation = addJobSchema.safeParse(newJob)
        // console.log(validation)

        if(validation.error){
            const formattedErrors = validation.error.flatten().fieldErrors;
            setErrors(formattedErrors)
            return
        }

        const result =  await addNewJob(newJob)

        if(result.success){
            toast.success('Job Created Successfully', { position: 'top-right' });
            router.refresh()
            router.push('/jobs')
        }
    }


    return (
        <div className="border-primary-1 border p-4 w-full">
            <p className="font-clashDisplay text-center text-2xl mb-4">Create Job</p>
            <form onSubmit={handleSubmit} className='flex flex-col bg-white gap-4'>
                <input type="text" name='title' placeholder='Add Job Title' required/>
                <input type="text" name='company' placeholder='Add Company' required/>
                <input type="text" name='location' placeholder='Location' required/>
                <input type="text" name='category' placeholder='Category' required/>
                {errors?.category && <p className="text-[.8rem] text-red-600">{errors.category}</p>}
                <input type="text" name='description' placeholder='Description' required/>
                
                <button type='submit' className={`bg-primary-1 text-white py-3 px-6`}>
                    Add Job
                </button>
            </form>
        </div>
    );
};

export default AddJob;