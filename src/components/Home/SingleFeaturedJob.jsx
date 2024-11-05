/* eslint-disable react/prop-types */
import locationImg from "../../assets/icons/Location.png";
import currencyImg from "../../assets/icons/currency.png";
import Button from "../../shared/Button";
import JobTag from "./JobTag";
import LocationCurrency from "./LocationCurrency";

export default function SingleFeaturedJob({ job }) {
	return (
		<div className="border border-dark5 rounded-lg p-10">
			<img src={job.logo} alt="" />
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
			<Button>View Details</Button>
		</div>
	);
}
