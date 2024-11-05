import { NavLink } from "react-router-dom";
import Logo from "../shared/Logo";
import Button from "../shared/Button";

export default function Navbar() {
	const links = [
		{
			path: "/statistics",
			pathName: "Statistics",
		},
		{
			path: "/applied-jobs",
			pathName: "Applied Jobs",
		},
		{
			path: "/blogs",
			pathName: "Blogs",
		},
	];

	const navLinks = links.map((link) => (
		<NavLink
			to={link.path}
			key={link.pathName}
			className="text-dark3 font-medium text-base hover:primary-color"
		>
			{link.pathName}
		</NavLink>
	));

	return (
		<nav className="absolute top-0 left-0 w-full">
			<div className="flex items-center justify-between max-w-container mx-auto py-12 ">
				{/* navlogo */}
				<Logo place="header" />

				{/* links */}
				<ul className="space-x-12">{navLinks}</ul>

				{/* button */}
				<Button>{"Start Applying"}</Button>
			</div>
		</nav>
	);
}
