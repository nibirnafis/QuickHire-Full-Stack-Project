'use client'

import { applyJob } from '@/src/utilities/utils';
import { useParams } from 'next/navigation';


const ApplyForm = () => {

    const { id, title } = useParams()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
    
            const form = new FormData(e.currentTarget)
            const name = form.get('name') as string
            const email = form.get('email') as string
            const resume_link = form.get('resume_link') as string
            const cover_note = form.get('cover_note') as string
    
            const newJob =  {job_id: id, name: name, email: email, resume_link: resume_link, cover_note: cover_note}
    
            const result =  applyJob(newJob)
        }
    
    
        return (
            <div className='bg-white/60'>
                <form onSubmit={handleSubmit} className='flex flex-col bg-white p-4 gap-6'>
                    <p>{title}</p>
                    <input type="text" name='name' placeholder='name'/>
                    <input type="text" name='email' placeholder='email'/>
                    <input type="text" name='resume_link' placeholder='resume_link'/>
                    <input type="text" name='cover_note' placeholder='cover note'/>
                    
                    <button type='submit' className={`bg-primary-1 text-white py-3 px-6`}>
                        Apply
                    </button>
                </form>
            </div>
        );
};

export default ApplyForm;


