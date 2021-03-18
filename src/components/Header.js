import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { GoogleLogin } from "react-google-login";
import { useState, useEffect } from "react";
import logo from "../images/logo.svg";

export default class Header extends Component {
	state = {
		isOpen: false,
		isLogged: false,
		userPofileLink: "/profile",
		userName: "usename",
	};
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
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
						<Link to="/profile" className=" btn-secondary">
							<h4 id="username">{this.state.userName}</h4>
						</Link>
						<Link to="/login">
							<button>Login</button>
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}
