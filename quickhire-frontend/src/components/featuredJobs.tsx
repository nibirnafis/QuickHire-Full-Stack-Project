import FeaturedJob from './featuredJob';
import SectionTitle from './sectionTitle';

const FeaturedJobs = async() => {
    
    const loadData = async () => {
      const res =  await fetch('http://localhost:3000/data/featuredJobs.json', {next: { revalidate: 3600 }})
      const data =  await res.json()

      return data
  }

  const jobs = await loadData()


    return (
        <>
        <section className=''>
            <div className='max-w-298 m-auto responsive'> 
                <div className="flex justify-between mb-12">
                    <SectionTitle t1='Featured ' t2='jobs'></SectionTitle>
                    <button className="hidden md:block">Show all jobs</button>
                </div>

                {
                    
                    jobs.length>0 ?
                    <div className="overflow-x-auto md:overflow-visible flex md:grid grid-cols-4 gap-8">
                        {
                            jobs.map((job, key: number)=> <FeaturedJob job={job} key={key}></FeaturedJob>)
                        }
                    </div>
                    :
                    <p>No Job Available</p>
                }
                <button className="block md:hidden">Show all jobs</button>
            </div>
        </section>
        </>
    );
};

export default FeaturedJobs;