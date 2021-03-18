import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

const axios = require("axios");

const initialValue = {
	username: "",
	password: "",
};

const Login = () => {
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
		e.preventDefault();
		setLoading(true);
		console.log(values);
		alert(values.username);

		axios
			.post("https://codekit-auth.herokuapp.com/api/login", values)
			.then((response) => {
				console.log(response);
				setLoading(false);
				if (response.data.isAuth) {
					alert("Login Success");
					document.getElementById("username").textContent =
						response.data.username;
					history.replace("/");
				} else {
					alert(response.data.message);
				}
			})
			.catch((err) => console.log(err));

		// const requestOptions = {
		// 	method: "POST",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: JSON.stringify({
		// 		username: values.username,
		// 		password: values.password,
		// 	}),
		// };

		// fetch("https://codekit-auth.herokuapp.com/api/login", requestOptions)
		// 	.then((response) => response.json())
		// 	.then((data) => console.log(data));
	}

	return (
		<div style={{ width: "50%", marginLeft: "25%" }}>
			<form onSubmit={registerUser}>
				<h3>Login In</h3>

				{loading ? (
					<div className="question-container">
						<div style={{ marginLeft: "48%" }}>
							<ReactLoading type={"bars"} color={"blue"} />
						</div>
					</div>
				) : (
					<div>
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

						<button
							type="submit"
							className="btn btn-primary btn-block"
							onClick={registerUser}
						>
							Sign In
						</button>

						<p className="forgot-password text-right">
							Dont have account <Link to="/signup">Register Here</Link>
						</p>
					</div>
				)}
			</form>
		</div>
	);
};

export default Login;
