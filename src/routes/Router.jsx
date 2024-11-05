import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Statistics from "../pages/Statistics";
import AppliedJobs from "../pages/AppliedJobs";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/statistics",
				element: <Statistics />,
			},
			{
				path: "/applied-jobs",
				element: <AppliedJobs />,
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
		],
	},
]);
