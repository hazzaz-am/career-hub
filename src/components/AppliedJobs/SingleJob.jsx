/* eslint-disable react/prop-types */

import Button from "../../shared/Button";
import JobTag from "../Home/JobTag";
import LocationCurrency from "../Home/LocationCurrency";

import locationImg from "../../assets/icons/Location.png"
import currencyImg from "../../assets/icons/currency.png";
import { Link } from "react-router-dom";

export default function SingleJob({ job }) {
	return (
		<div className="border border-dark5 rounded-lg p-10 flex items-center justify-between mb-6">
			<div className="flex items-center justify-between gap-8">
				<div className="bg-[#F4F4F4] w-[240px] h-[240px] rounded-lg">
					<img className="py-[105px] px-6 mx-auto" src={job.logo} alt="" />
				</div>
				<div>
					<h4 className="text-dark2 text-[24px] font-extrabold mt-8 mb-4">
						{job.job_title}
					</h4>
					<p className="text-[20px] font-semibold text-dark3 mb-4">
						{job.company_name}
					</p>

					<div className="flex items-center gap-2 mb-4">
						<JobTag>{job.remote_or_onsite}</JobTag>
						<JobTag>{job.job_type}</JobTag>
					</div>

					<div className="flex items-center gap-6 mb-6">
						<LocationCurrency icon={locationImg} title={job.location} />
						<LocationCurrency icon={currencyImg} title={job.salary} />
					</div>
				</div>
			</div>
			<Link to={`/job-details/${job.id}`}>
				<Button>View Details</Button>
			</Link>
		</div>
	);
}
