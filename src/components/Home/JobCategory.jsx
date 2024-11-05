import SectionHeader from "../../shared/SectionHeader";
import JobList from "./JobList";

export default function JobCategory() {
	return (
		<section className="section-gap max-w-container mx-auto">
			<SectionHeader
				title="Job Category List"
				desc="Explore thousands of job opportunities with all the information you need. Its your future"
			/>
			<JobList />
		</section>
	);
}
