/* eslint-disable react/prop-types */


export default function LocationCurrency({icon, title}) {
  return (
		<div className="flex items-center gap-2">
			<img src={icon} alt="" />
			<p className="text-[20px] text-dark3 font-semibold">{title}</p>
		</div>
	);
}
