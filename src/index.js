import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
	<BrowserRouter>
		<Auth0Provider
			domain="nikhiljugale007.us.auth0.com"
			clientId="89lGazO6BkSnG2FB0NCk5HP0iaTH5LCS"
			redirectUri={window.location.origin}
		>
			<App />
		</Auth0Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
// mongodb+srv://nikhiljugale007:PIIoZYdKF9k5PaPY@cluster0.jytgl.mongodb.net/question?retryWrites=true&w=majority
