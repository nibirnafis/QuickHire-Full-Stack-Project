import Categories from "@/src/components/categories";
import CTA from "@/src/components/CTA";
import FeaturedJobs from "@/src/components/featuredJobs";
import HeroSection from "@/src/components/heroSection";
import LatestJobs from "@/src/components/latestJobs";
import Companies from "@/src/components/companies";

export default function Home() {
  return (
    <>
    <div className='flex flex-col gap-18'>

        <HeroSection></HeroSection>

        <Companies></Companies>

        <Categories></Categories>

        <CTA></CTA>

        <FeaturedJobs></FeaturedJobs>

        <LatestJobs></LatestJobs>

    </div>

    </>
  );
}
