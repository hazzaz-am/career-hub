/* eslint-disable react/prop-types */
export default function SingleCategory({ category }) {
	return (
		<div className="bg-heroBG p-10 rounded-lg">
			<img className="bg-[#eeedff] p-[18px] rounded-lg mb-8" src={category.logo} alt="" />
			<div>
				<h4 className="text-[20px] text-dark2 font-extrabold mb-2">{category.category_name}</h4>
				<span className="text-dark4 text-[16px] font-medium">{category.availability}</span>
			</div>
		</div>
	);
}
