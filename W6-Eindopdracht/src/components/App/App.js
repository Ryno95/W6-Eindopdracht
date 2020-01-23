import React from 'react';
// import AllStudent from "./container/AllStudent.js"
import AllStudentsGraph from '../../containers/AllStudentsGraph.js';
// import ChartExample from "../ChartExample/ChartExample";

function App() {
	return (
		<div className="App">
			<h1 style={{ textAlign: 'center', color: 'lightblue' }}>Student Dashboard</h1>
			<div>
				<h3 style={{ textAlign: 'center', color: 'tomato' }}>All Students Average</h3>
				<AllStudentsGraph />
			</div>
		</div>
	);
}

export default App;
