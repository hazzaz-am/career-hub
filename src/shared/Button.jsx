/* eslint-disable react/prop-types */

export default function Button({ children }) {
	return (
		<button className="bg-primary py-[19px] px-7 text-[#ffffff] rounded-lg text-xl font-extrabold">
			{children}
		</button>
	);
}
