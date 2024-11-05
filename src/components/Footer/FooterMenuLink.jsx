/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export default function FooterMenuLink({title, links}) {
  const menuLinks = links.map((link) => <Link className="text-[#fff] font-normal text-[16px] opacity-70" key={link}>{link}</Link>);
  return (
		<div className="flex flex-col gap-6">
			<h5 className="text-[20px] text-[#fff] font-semibold">{title}</h5>
			{menuLinks}
		</div>
	);
}
