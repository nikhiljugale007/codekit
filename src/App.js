import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contest from "./pages/Contest";
import Blogs from "./pages/Blogs";
import Practise from "./pages/Practise";
import SingleQuestion from "./pages/SingleQuestion";
import Error from "./components/Error";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/problems" component={Practise}></Route>
				<Route exact path="/contest" component={Contest}></Route>
				<Route exact path="/blogs" component={Blogs}></Route>
				<Route exact path="/user" component={Home}></Route>
				<Route exact path="/problems/:slug" component={SingleQuestion}></Route>
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
