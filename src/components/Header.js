import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";

export default class Header extends Component {
	state = {
		isOpen: false,
		isLogged: false,
	};
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	handleLogin = () => {
		this.setState({ isLogged: !this.state.isLogged });
	};
	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<div className="nav-links">
							<Link to="/">🚀codeKIT🚀"</Link>
						</div>

						<button
							type="button"
							className="nav-btn"
							onClick={this.handleToggle}
						>
							<FaAlignRight className="nav-icon" />
						</button>
					</div>
					<ul
						className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
					>
						<li>
							<Link to="/problems">Problems</Link>
						</li>
						<li>
							<Link to="/contest">Contest</Link>
						</li>
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>
					</ul>

					<div className="nav-links">
						<Link to="/">{this.state.isLogged ? "Login" : "username"}</Link>
						<button className="nav-btn-login" onClick={this.handleLogin}>
							login
						</button>
					</div>
				</div>
			</nav>
		);
	}
}
