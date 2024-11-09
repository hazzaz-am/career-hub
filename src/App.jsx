import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
			<Toaster />
		</>
	);
}
