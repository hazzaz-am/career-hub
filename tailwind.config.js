/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			dark1: "#1A1919",
			dark2: "#474747",
			dark3: "#757575",
			dark4: "#A3A3A3",
			dark5: "#F4F4F4",
		},
		fontSize: {
			heading: "80px",
			logo: "32px",
		},
		backgroundImage: {
			primary: "linear-gradient(102deg, #7E90FE, #9873FF)",
		},
		maxWidth: {
			container: "1320px",
		},
		extend: {},
	},
	plugins: [],
};
