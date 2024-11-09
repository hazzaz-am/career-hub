import { useState } from "react";
import SectionHeader from "../../shared/SectionHeader";
import { useEffect } from "react";
import SingleFeaturedJob from "./SingleFeaturedJob";
import Button from "../../shared/Button";

export default function FeaturedJobs() {
	const [featuredJobs, setFeaturedJobs] = useState([]);
	const [totalJobs, setTotalJobs] = useState(4);

	useEffect(() => {
		fetch("/data/jobs.json")
			.then((response) => response.json())
			.then((jobsData) => setFeaturedJobs(jobsData));
	}, []);

	const handleJobsLength = (len) => {
		setTotalJobs(len);
	};

	return (
		<section className="section-gap max-w-container mx-auto">
			<SectionHeader
				title="Featured Jobs"
				desc="Explore thousands of job opportunities with all the information you need. Its your future"
			/>

			<div className="grid grid-cols-2 gap-6">
				{featuredJobs.slice(0, totalJobs).map((job) => (
					<SingleFeaturedJob key={job.id} job={job} />
				))}
			</div>

			<div
				className={`text-center mt-10 ${
					totalJobs === featuredJobs.length ? "hidden" : ""
				}`}
			>
				<Button onFire={() => handleJobsLength(featuredJobs.length)}>
					See all jobs
				</Button>
			</div>
		</section>
	);
}
