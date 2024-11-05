/* eslint-disable react/prop-types */

export default function CommonBanner({ children }) {
	return (
		<div
			className={`bg-heroBG text-center text-dark1 text-[32px] font-extrabold py-52 bg-cover bg-left-bottom`}
		>
			{children}
		</div>
	);
}
