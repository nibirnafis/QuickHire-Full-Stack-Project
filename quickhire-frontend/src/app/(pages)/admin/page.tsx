import AddJob from "@/src/components/admin/addJob";
import FindJob from "@/src/components/admin/findJob";
// import FilterSearch from "@/src/components/filterSearch";
import SectionTitle from "@/src/components/sectionTitle";

export default function Admin() {
  return (
    
    <>
    
    <section className='container'>
        <div className='flex flex-col justify-center items-center max-w-298 m-auto responsive'> 

            <SectionTitle t1='Admin ' t2='Pannel'></SectionTitle>
            {/* <FilterSearch></FilterSearch> */}
            <div className="flex flex-col md:flex-row md:justify-around w-full border-primary-1 border">
                <AddJob></AddJob>
                <FindJob></FindJob>
            </div>
        </div>
    </section>

    </>
  );
}
