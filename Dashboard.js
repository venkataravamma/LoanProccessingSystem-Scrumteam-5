import React from "react";
import {  useHistory, useLocation,  useRouteMatch } from "react-router-dom";

export default function Dashboard() {
	const history = useHistory();
	// const location = useLocation();
	// const { id } = useParams();
	const query = new URLSearchParams(useLocation().search);
	console.log(query.get("location"));
	console.log(query.get("name"));
	function Blog() {
		let match = useRouteMatch("/dashboard/blog");
		if (match) {
			return <div>this is blog</div>;
		} else {
			return null;
		}
	}
	return (
		<div>
			<h1>Welcome to Dashboard</h1>
			<Blog />
			{/* {location.pathname}
			{id} */}
			<button onClick={() => history.push("/about")}>Click for About</button>
			{/* <Redirect to="/login" /> */}
		</div>
	);
}
