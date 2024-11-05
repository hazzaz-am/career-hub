import { useState } from "react";
import SectionHeader from "../../shared/SectionHeader";
import { useEffect } from "react";
import SingleFeaturedJob from "./SingleFeaturedJob";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";

export default function FeaturedJobs() {
	const [featuredJobs, setFeaturedJobs] = useState([]);

	useEffect(() => {
		fetch("/data/jobs.json")
			.then((response) => response.json())
			.then((jobsData) => setFeaturedJobs(jobsData));
	}, []);

	return (
		<section className="section-gap max-w-container mx-auto">
			<SectionHeader
				title="Featured Jobs"
				desc="Explore thousands of job opportunities with all the information you need. Its your future"
			/>

			<div className="grid grid-cols-2 gap-6">
				{featuredJobs.slice(0, 4).map((job) => (
					<SingleFeaturedJob key={job.id} job={job} />
				))}
			</div>

      <Link className="mt-10 text-center block" to="/applied-jobs">
        <Button>See all jobs</Button>
      </Link>
		</section>
	);
}
