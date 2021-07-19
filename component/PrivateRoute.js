import React, { useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

export default function PrivateRoute({ path, component, ...rest }) {
	const [ isLoggedin ] = useState(localStorage.getItem("loggedin"));
	return (
		<div>
			<Switch>
				<Route path={path} component={component} {...rest} />
			</Switch>
			{isLoggedin === null && <Redirect to="/login" />}
		</div>
	);
}
