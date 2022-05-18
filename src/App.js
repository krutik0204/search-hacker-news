import "./App.css";
import Home from "./Home";
import PostDetails from "./post";
import NoMatch from "./NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/:id" children={<PostDetails />} />
				<Route path="*">
					<NoMatch />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
