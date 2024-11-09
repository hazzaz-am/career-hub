import { useEffect } from "react";
import { useState } from "react";
import SingleCategory from "./SingleCategory";

export default function JobList() {
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		fetch("/data/categories.json")
			.then((response) => response.json())
			.then((categoriesData) => setCategoryList(categoriesData));
	}, []);

	return (
		<div className="grid grid-cols-4 gap-6">
			{categoryList.map((category) => (
				<SingleCategory key={category.id} category={category} />
			))}
		</div>
	);
}
