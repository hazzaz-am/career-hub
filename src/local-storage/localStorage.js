const getAppliedJobs = () => {
	const appliedJobs = localStorage.getItem("applied-jobs");

	if (appliedJobs) {
		return JSON.parse(appliedJobs);
	}

	return [];
};

const savedAppliedJobs = (id) => {
	const appliedJobs = getAppliedJobs();

	const existingJob = appliedJobs.find((job) => job.id === id);

	if (!existingJob) {
		appliedJobs.push(id);
    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
	}
};

export {getAppliedJobs, savedAppliedJobs}