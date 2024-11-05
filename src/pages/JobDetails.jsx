import JobFiled from "../components/JobDetails/JobFiled";
import CommonBanner from "../shared/CommonBanner";

import currency from "../assets/icons/money.png";
import calendar from "../assets/icons/calendar.png";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/email.png";
import location from "../assets/icons/location2.png";
import Button from "../shared/Button";

export default function JobDetails() {
	return (
		<>
			<CommonBanner>Job Details</CommonBanner>
			<div className="mt-[130px] flex items-start justify-between gap-4 max-w-container mx-auto">
				<div className="w-5/6 space-y-6">
					<p className="text-[16px] text-dark3 font-medium">
						<span className="text-dark1 font-extrabold">Job Description:</span>A
						UI/UX (User Interface/User Experience) designer is responsible for
						designing and creating engaging and effective interfaces for
						software and web applications. This includes designing the layout,
						visual design, and interactivity of the user interface.
					</p>
					<p className="text-[16px] text-dark3 font-medium">
						<span className="text-dark1 font-extrabold ">
							Job Responsibility:
						</span>{" "}
						Collaborating with cross-functional teams: UI/UX designers often
						work closely with other teams, including product management,
						engineering, and marketing, to ensure that the user interface is
						aligned with business and technical requirements. You will need to
						be able to effectively communicate your design ideas and gather
						feedback from other team members.
					</p>
					<p className="text-[16px] font-extrabold text-dark1">
						Educational Requirements:
					</p>
					<p className="text-[16px] font-semibold text-dark3">
						Bachelor degree to complete any reputational university.
					</p>
					<p className="text-[16px] font-extrabold text-dark1">Experiences:</p>
					<p className="text-[16px] font-semibold text-dark3">
						2-3 Years in this field.
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
							filedValue="100K - 150K (Per Month)"
						/>
						<JobFiled
							filedName="Job Title"
							icon={calendar}
							filedValue="Product Designer"
						/>
						<h4 className="border-b text-[20px] font-extrabold text-dark1 py-6 border-[#cac2f7]">
							Contact Information
						</h4>
						<JobFiled
							filedName="Phone"
							icon={phone}
							filedValue="01750-00 00 00"
						/>
						<JobFiled
							filedName="Email"
							icon={email}
							filedValue="info@gmail.com"
						/>
						<JobFiled
							filedName="Address"
							icon={location}
							filedValue="Dhanmondi 32, Sukrabad Dhaka, Bangladesh"
						/>
					</div>

					<Button width="width">Apply Now</Button>
				</div>
			</div>
		</>
	);
}
