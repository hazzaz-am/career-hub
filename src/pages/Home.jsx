import FeaturedJobs from "../components/Home/FeaturedJobs";
import HeroSection from "../components/Home/HeroSection";
import JobCategory from "../components/Home/JobCategory";

export default function Home() {
	return (
		<>
			<HeroSection />
			<JobCategory/>
			<FeaturedJobs/>
		</>
	);
}
