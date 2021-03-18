import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const axios = require("axios");

const initialValue = {
	username: "",
	firstname: "",
	lastname: "",
	password: "",
	password2: "",
	problemsolved: [],
};

const SignUp = () => {
	const [values, setValues] = useState(initialValue);
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	function handleChange(event) {
		const { name, value } = event.target;
		setValues({
			...values,
			[name]: value,
		});
	}

	function registerUser(e) {
		setLoading(true);
		e.preventDefault();

		const userdata = {
			firstname: values.firstname,
			lastname: values.lastname,
			username: values.username,
			password: values.password,
			password2: values.password2,
			problemsolved: [],
		};

		console.log(values);
		axios
			.post("https://codekit-auth.herokuapp.com/api/register", values)
			.then((response) => {
				setLoading(false);
				console.log("RESPONSE" + response);
			})
			.catch((err) => console.log("ERROR = " + err));
	}

	return (
		<div style={{ width: "50%", marginLeft: "25%" }}>
			<form onSubmit={registerUser}>
				<h3>Sign Up</h3>

				<div className="form-group">
					<label>First name</label>
					<input
						type="text"
						className="form-control"
						placeholder="First name"
						name="firstname"
						onChange={handleChange}
						value={values.firstname}
					/>
				</div>

				<div className="form-group">
					<label>Last name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Last name"
						name="lastname"
						onChange={handleChange}
						value={values.lastname}
					/>
				</div>

				<div className="form-group">
					<label>Username</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter username"
						name="username"
						onChange={handleChange}
						value={values.username}
					/>
				</div>

				<div className="form-group">
					<label>Confirm password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						name="password"
						onChange={handleChange}
						value={values.password}
					/>
				</div>

				<div className="form-group">
					<label>Confirm password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						name="password2"
						onChange={handleChange}
						value={values.password2}
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary btn-block"
					onClick={registerUser}
				>
					Sign Up
				</button>
				<p className="forgot-password text-right">
					Already registered <Link to="/login">Sign In</Link>
				</p>
			</form>
		</div>
	);
};

export default SignUp;

// {
// 	"firstname":"Nikhil1",
// 	"lastname":"Jugale1",
// 	"username" : "nikhiljugale001",
// 	"password": "Nikhil#1",
// 	"password2":"Nikhil#1",
// 	"problemssolved":[]

// }
