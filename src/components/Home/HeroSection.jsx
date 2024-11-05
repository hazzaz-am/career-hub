import userImg from "../../assets/images/user.png";
import Button from "../../shared/Button";

export default function HeroSection() {
	return (
		<section className="bg-heroBG">
			<div className="max-w-container flex items-center justify-between mx-auto pt-32">
				<div className="w-1/2">
					<h1 className="text-dark1 font-extrabold text-heading">
						One Step Closer To Your <span className="primary-color">Dream Job</span>
					</h1>
					<p className="mt-10 mb-10 text-dark3 font-medium text-lg">
						Explore thousands of job opportunities with all the information you
						need. Its your future. Come find it. Manage all your job application
						from start to finish.
					</p>
					<Button>Get Started</Button>
				</div>
				<div className="">
					<img src={userImg} alt="userImg" />
				</div>
			</div>
		</section>
	);
}
