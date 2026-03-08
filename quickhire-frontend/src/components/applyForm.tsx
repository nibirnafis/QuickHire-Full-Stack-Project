'use client'

import { applyJob } from '@/src/utilities/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { applyJobErrors, applyJobSchema } from '../lib/schema';


const ApplyForm = ({id}:{id: string}) => {

    const router = useRouter()
    const [errors, setErrors] = useState<applyJobErrors>({});

    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setErrors({})
    
            const form = new FormData(e.currentTarget)
            const name = form.get('name') as string
            const email = form.get('email') as string
            const resume_link = form.get('resume_link') as string
            const cover_note = form.get('cover_note') as string
    
            const applyJobData =  {job_id: id, name: name, email: email, resume_link: resume_link, cover_note: cover_note}
            
            const validation = applyJobSchema.safeParse(applyJobData)

            if(validation.error){
                const formattedErrors = validation.error.flatten().fieldErrors;
                setErrors(formattedErrors)
                return
            }
    

            const result =  await applyJob(applyJobData)

            if(result.res){
                toast.success('Job Successfully Added', { position: 'top-right' });
                router.push('/jobs')
            }

        }
    
    
        return (
            <div className='p-4'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <input type="text" name='name' placeholder='Type Your Name'/>
                    <input type="text" name='email' placeholder='Type Your Email'/>
                    {errors?.email && <p className="text-[.8rem] text-red-600">{errors.email}</p>}
                    <input type="text" name='resume_link' placeholder='Resume Link'/>
                    {errors?.resume_link && <p className="text-[.8rem] text-red-600">{errors.resume_link}</p>}
                    <input type="text" name='cover_note' placeholder='Cover Note'/>
                    
                    <button type='submit' className={`bg-primary-1 text-white py-3 px-6`}>
                        Apply
                    </button>
                </form>
            </div>
        );
};

export default ApplyForm;


