/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Logo({ place }) {
	return (
		<Link
			to="/"
			className={`text-logo ${
				place === "header" ? "text-white" : "text-black1"
			} font-extrabold`}
		>
			CareerHub
		</Link>
	);
}
