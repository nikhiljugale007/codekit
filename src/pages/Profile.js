import React from "react";
import "./Profile.css";
import { useState, useEffect } from "react";
const axios = require("axios");
const Profile = () => {
	const [user, setUser] = useState([]);

	useEffect(() => {
		axios
			.get("https://codekit-auth.herokuapp.com/api/profile")
			.then((response) => {
				console.log(response.data);
				let temp = document.getElementById("username").textContent;
				alert(temp);
			});
	}, []);

	return (
		<div>
			<div style={{ width: "100%" }} className="padding">
				<div className="row container d-flex justify-content-center">
					<div className="col-xl-6 col-md-12">
						<div className="card user-card-full">
							<div className="row m-l-0 m-r-0">
								<div className="col-sm-4 bg-c-lite-green user-profile">
									<div class="card-block text-center text-white">
										<div class="m-b-25">
											{" "}
											<img
												src="https://img.icons8.com/bubbles/100/000000/user.png"
												class="img-radius"
												alt="User-Profile-Image"
											/>
										</div>
										<h6 class="f-w-600">Hembo Tingor</h6>
										<p>Web Designer</p>{" "}
										<i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
									</div>
								</div>

								<div class="col-sm-8">
									<div class="card-block">
										<h6 class="m-b-20 p-b-5 b-b-default f-w-600"></h6>
										<div class="row">
											<div class="col-sm-6">
												<p class="m-b-10 f-w-600">Name</p>
												<h6 class="text-muted f-w-400">Nikhil Jugale</h6>
											</div>
										</div>
										<h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
										<div class="row">
											<div class="col-sm-6">
												<p class="m-b-10 f-w-600">Email</p>
												<h6 class="text-muted f-w-400">user@gmail.com</h6>
											</div>
										</div>
										<h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
										<div class="row">
											<div class="col-sm-6">
												<p class="m-b-10 f-w-600">Problems Solved</p>
												<h6 class="text-muted f-w-400">user@gmail.com</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
