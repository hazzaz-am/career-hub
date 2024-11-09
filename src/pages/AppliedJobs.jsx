import { useState } from "react";
import CommonBanner from "../shared/CommonBanner";
import { useEffect } from "react";
import AllJobs from "../components/AppliedJobs/AllJobs";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "../local-storage/localStorage";

export default function AppliedJobs() {
	const [appliedJobs, setAppliedJobs] = useState([]);
	const [displayJobs, setDisplayJobs] = useState([]);
	const [selectOption, setSelectOption] = useState("");

	const handleFilterJobs = (e) => {
		const filter = e.target.value;
		setSelectOption(filter);

		if (filter === "all") {
			setDisplayJobs(appliedJobs);
		} else if (filter === "remote") {
			const filteredJobs = appliedJobs.filter(
				(job) => job.remote_or_onsite === "Remote"
			);
			setDisplayJobs(filteredJobs);
		} else if (filter === "on-site") {
			const filteredJobs = appliedJobs.filter(
				(job) => job.remote_or_onsite === "Onsite"
			);
			setDisplayJobs(filteredJobs);
		}
	};

	const ALL_JOBS = useLoaderData();

	useEffect(() => {
		const stroedJobs = getAppliedJobs();

		if (ALL_JOBS.length > 0) {
			const appliedJobs = ALL_JOBS.filter((job) => stroedJobs.includes(job.id));
			setAppliedJobs(appliedJobs);
			setDisplayJobs(appliedJobs);
		}
	}, [ALL_JOBS]);

	return (
		<>
			<CommonBanner>Applied Jobs</CommonBanner>
			<AllJobs
				appliedJobs={displayJobs}
				selectOption={selectOption}
				handleChange={handleFilterJobs}
			/>
		</>
	);
}
