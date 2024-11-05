/* eslint-disable react/prop-types */
import SingleJob from "./SingleJob";

export default function AllJobs({ appliedJobs }) {
	return (
		<div className="max-w-container mx-auto">
			<div className="flex items-center justify-end mt-[130px] mb-8">
				<select className="bg-dark5 p-5 rounded-lg" name="" id="">
					<option value="title">Filter By</option>
				</select>
			</div>
			{appliedJobs.map((job) => (
				<SingleJob key={job.id} job={job} />
			))}
		</div>
	);
}
