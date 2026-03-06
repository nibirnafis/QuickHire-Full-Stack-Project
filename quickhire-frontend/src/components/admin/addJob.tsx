'use client'

import { addNewJob } from "@/src/utilities/utils";

const AddJob = () => {


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const title = form.get('title') as string
        const company = form.get('company') as string
        const location = form.get('location') as string
        const category = form.get('category') as string
        const description = form.get('description') as string

        const newJob =  {title: title, company: company, location: location, category: category, description: description}

        const result =  addNewJob(newJob)
    }


    return (
        <div>
            <p className="font-clashDisplay text-center text-2xl">Create Job</p>
            <form onSubmit={handleSubmit} className='flex flex-col bg-white p-4 gap-4'>
                <input type="text" name='title' placeholder='Add Job Title'/>
                <input type="text" name='company' placeholder='Add Company'/>
                <input type="text" name='location' placeholder='Location'/>
                <input type="text" name='category' placeholder='Category'/>
                <input type="text" name='description' placeholder='Description'/>
                
                <button type='submit' className={`bg-primary-1 text-white py-3 px-6`}>
                    Add Job
                </button>
            </form>
        </div>
    );
};

export default AddJob;