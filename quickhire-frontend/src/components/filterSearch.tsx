'use Client'
import { useRouter } from "next/navigation";
import Button from "./ui/button";

const FilterSearch = () => {

    const router = useRouter()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const category = form.get('category') as string


        if(category==="All"){
            router.push(`/jobs`)
        }else{
            router.push(`/jobs/category/${category}`)
        }

        
    }


    return (
        <div className="max-w-298 m-auto responsive">
            <form onSubmit={handleSubmit} className='flex justify-between items-center w-full  gap-6'>
                <select name="category">
                    <option value="All">All</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    <option value="Business">Business</option>
                    <option value="Technology">Technology</option>
                </select>
                <button type="submit">
                    <Button title='Filter jobs' bg='bg-primary-1' text='text-white'></Button>
                </button>
            </form>
        </div>
    );
};

export default FilterSearch;