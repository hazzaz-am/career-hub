/* eslint-disable react/prop-types */

import SingleJob from "./SingleJob";

export default function AllJobs({ appliedJobs, handleChange, selectOption }) {



	return (
		<div className="max-w-container mx-auto">
			<div className="flex items-center justify-end mt-[130px] mb-8">
				<select
					onChange={handleChange}
					value={selectOption}
					className="bg-dark5 p-5 rounded-lg"
				>
					<option value="title">Filter By</option>
					<option value="all">All</option>
					<option value="on-site">On Site</option>
					<option value="remote">Remote</option>
				</select>
			</div>
			{appliedJobs.map((job) => (
				<SingleJob key={job.id} job={job} />
			))}
		</div>
	);
}
