import JobFiled from "../components/JobDetails/JobFiled";
import CommonBanner from "../shared/CommonBanner";

import currency from "../assets/icons/money.png";
import calendar from "../assets/icons/calendar.png";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/email.png";
import location from "../assets/icons/location2.png";
import Button from "../shared/Button";
import { useLoaderData, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { savedAppliedJobs } from "../local-storage/localStorage";

export default function JobDetails() {
	const [applied, setApplied] = useState(false);

	const alljobs = useLoaderData();

	const { id } = useParams();
	const jobId = parseInt(id);

	const job = alljobs.find((job) => job.id === jobId);

	const handleAppliedConfirm = () => {
		if (applied) {
			return;
		}

		savedAppliedJobs(jobId)
		setApplied(true);
		toast.success("Successfully applied!");
	};

	return (
		<>
			<CommonBanner>Job Details</CommonBanner>
			<div className="mt-[130px] flex items-start justify-between gap-4 max-w-container mx-auto">
				<div className="w-5/6 space-y-6">
					<p className="text-[16px] text-dark3 font-medium">
						<span className="text-dark1 font-extrabold">Job Description:</span>
						{job.job_description}
					</p>
					<p className="text-[16px] text-dark3 font-medium">
						<span className="text-dark1 font-extrabold ">
							Job Responsibility:
						</span>{" "}
						{job.job_responsibility}
					</p>
					<p className="text-[16px] font-extrabold text-dark1">
						Educational Requirements:
					</p>
					<p className="text-[16px] font-semibold text-dark3">
						{job.educational_requirements}
					</p>
					<p className="text-[16px] font-extrabold text-dark1">Experiences:</p>
					<p className="text-[16px] font-semibold text-dark3">
						{job.experiences}
					</p>
				</div>

				<div className="">
					<div className="bg-[#f4f2ff] p-8 rounded-lg mb-6">
						<h4 className="border-b text-[20px] font-extrabold text-dark1 py-6 border-[#cac2f7]">
							Job Details
						</h4>
						<JobFiled
							filedName="Salary"
							icon={currency}
							filedValue={job.salary}
						/>
						<JobFiled
							filedName="Job Title"
							icon={calendar}
							filedValue={job.job_title}
						/>
						<h4 className="border-b text-[20px] font-extrabold text-dark1 py-6 border-[#cac2f7]">
							Contact Information
						</h4>
						<JobFiled
							filedName="Phone"
							icon={phone}
							filedValue={job.contact_information.phone}
						/>
						<JobFiled
							filedName="Email"
							icon={email}
							filedValue={job.contact_information.email}
						/>
						<JobFiled
							filedName="Address"
							icon={location}
							filedValue={job.contact_information.address}
						/>
					</div>

					<Button onFire={handleAppliedConfirm} width="width">
						Apply Now
					</Button>
				</div>
			</div>
		</>
	);
}
