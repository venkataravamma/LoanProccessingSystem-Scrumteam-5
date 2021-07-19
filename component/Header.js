import React from "react";
import {NavLink} from "react-router-dom";
// 3.Route Navigation
export default function Header() {
	return (
		<nav className="navbar bg-dark justify-content-center">
			<li className="nav-link">
				<a href="/" className="nav-link">
					Home
				</a>
			</li>
			<li className="nav-link">
				<NavLink to="/dashboard" className="nav-link" activeClassName="btn btn-primary">
					Dashboard
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/admin" className="nav-link" activeClassName="btn btn-primary">
					Admin
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/loanManager" className="nav-link" activeClassName="btn btn-primary">
					Manager
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="customer" className="nav-link" activeClassName="btn btn-primary">
					Customer
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/about" className="nav-link" activeClassName="btn btn-primary">
					About
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/news" className="nav-link" activeClassName="btn btn-primary">
						News
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/contact" className="nav-link" activeClassName="btn btn-primary">
					Contact Us
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/login" className="nav-link" activeClassName="btn btn-primary">
					Login
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink
					to="/logout"
					onClick={() => localStorage.clear()}
					className="nav-link"
					activeClassName="btn btn-primary">
					Logout
				</NavLink>
			</li>
		</nav>
	);
}
