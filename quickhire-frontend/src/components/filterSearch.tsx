/* import Button from "./ui/button";

const FilterSearch = () => {


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
            <form className='flex flex-col md:flex-row bg-white p-4 gap-6'>
                <input type="text" placeholder='Job title or keyword'/>
                <input type="text" placeholder='Florence, Italy'/>
                <Button title='Search my job' bg='bg-primary-1' text='text-white'></Button>
            </form>
        </div>
    );
};

export default FilterSearch; */