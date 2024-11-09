/* eslint-disable react/prop-types */

export default function Button({ children, width, onFire }) {

	return (
		<button
			onClick={onFire}
			className={`bg-primary py-[19px] px-7 text-[#ffffff] rounded-lg text-xl font-extrabold ${
				width ? "w-full" : ""
			}`}
		>
			{children}
		</button>
	);
}
