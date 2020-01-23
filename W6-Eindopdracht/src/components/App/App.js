import React from 'react';
import AllStudentsGraph from '../../containers/AllStudentsGraph.js';
import SeperatedStudentsGraphs from '../../containers/SeperatedStudentsGraphs.js';
import { render } from 'react-dom';
import Data from '../Data/Data';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import ChartExample from "../ChartExample/ChartExample";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			dataList: Data
		};
	}

	render() {
		return (
			<Router>
				<div>
					<ul style={{ textAlign: 'center', display: 'inline', listStyle: 'none' }}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/SeperatedStudentsGraphs">Students</Link>
						</li>
					</ul>

					<hr />

					<Switch>
						<Route exact path="/">
							<AllStudentsGraph data={this.state.dataList} />
						</Route>
						<Route path="/SeperatedStudentsGraphs">
							<SeperatedStudentsGraphs data={this.state.dataList} />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

// 	{/* /* <div className="App" style={{ width: '100%' }}>
// 		<h1 style={{ textAlign: 'center', color: '#221D23', backgroundColor: 'lightblue' }}>
// 			Student Dashboard
// 		</h1>
// 		<div>
// 			<AllStudentsGraph data={this.state.dataList} />
// 		</div>
// 		<div>
// 			<EvelynGraph data={this.state.dataList} />
// 		</div>
// 	</div>
// </div> */ */}
