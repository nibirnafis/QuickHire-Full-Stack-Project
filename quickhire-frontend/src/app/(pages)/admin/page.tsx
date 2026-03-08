import AddJob from "@/src/components/admin/addJob";
import FindJob from "@/src/components/admin/findJob";
import SectionTitle from "@/src/components/sectionTitle";

export default function Admin() {
  return (
    
    <>
    
    <section className='container'>
        <div className='flex flex-col justify-center items-center max-w-298 m-auto responsive'> 

            <SectionTitle t1='Admin ' t2='Pannel'></SectionTitle>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between w-full">
                <AddJob></AddJob>
                <FindJob></FindJob>
            </div>
        </div>
    </section>

    </>
  );
}
