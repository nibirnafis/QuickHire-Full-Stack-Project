'use client'

import { applyJob } from '@/src/utilities/utils';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


const ApplyForm = ({id}:{id: string}) => {

    const router = useRouter()

    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
    
            const form = new FormData(e.currentTarget)
            const name = form.get('name') as string
            const email = form.get('email') as string
            const resume_link = form.get('resume_link') as string
            const cover_note = form.get('cover_note') as string
    
            const newJob =  {job_id: id, name: name, email: email, resume_link: resume_link, cover_note: cover_note}
    
            const result =  await applyJob(newJob)

            console.log(result)

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
                    <input type="text" name='resume_link' placeholder='Resume Link'/>
                    <input type="text" name='cover_note' placeholder='Cover Note'/>
                    
                    <button type='submit' className={`bg-primary-1 text-white py-3 px-6`}>
                        Apply
                    </button>
                </form>
            </div>
        );
};

export default ApplyForm;


