'use client'

import { useRouter } from "next/navigation";



const FindJob = () => {

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const id = form.get('id') as string    

        router.push(`/admin/jobs/${id}`)
    }


    return (
        <>
        <div>
            <div>
                <p className="font-clashDisplay text-center text-2xl">Find Job</p>
                <form onSubmit={handleSubmit} className='flex flex-col bg-white p-4 gap-4'>
                    <input type="text" name='id' placeholder='Type Job Id'/>                    
                    <button type='submit' className={`bg-primary-1 text-white py-3 px-6`}>
                        Find Job
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default FindJob;