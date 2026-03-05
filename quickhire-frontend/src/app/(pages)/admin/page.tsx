import AddJob from "@/src/components/admin/addJob";
import SectionTitle from "@/src/components/sectionTitle";

export default function Admin() {
  return (
    <>
    
    <section className='container'>
        <div className='flex flex-col justify-center items-center max-w-298 m-auto responsive'> 

            <SectionTitle t1='Admin ' t2='Pannel'></SectionTitle>

            <div>
              <div className="">
                  <p>Add New Job</p>
                  <AddJob></AddJob>
              </div>
            </div>
        </div>
    </section>

    </>
  );
}
