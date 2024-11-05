/* eslint-disable react/prop-types */

export default function SectionHeader({ title, desc }) {
	return (
		<div className="text-center mb-8">
			<h2 className="text-dark1 font-extrabold text-[48px] mb-5">{title}</h2>
			<p className="text-base font-medium text-dark3">{desc}</p>
		</div>
	);
}
