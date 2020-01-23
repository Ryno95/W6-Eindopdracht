import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';
import ArankaGraph from './IndividualStudents/ArankaGraph.js';
import EvelynGraph from './IndividualStudents/EvelynGraph.js';
import FlorisGraph from './IndividualStudents/FlorisGraph.js';
import HectorGraph from './IndividualStudents/HectorGraph.js';
import MartinaGraph from './IndividualStudents/MartinaGraph.js';
import MauritsGraph from './IndividualStudents/MauritsGraph.js';
import RahimaGraph from './IndividualStudents/RahimaGraph.js';
import SandraGraph from './IndividualStudents/SandraGraph.js';
import StormGraph from './IndividualStudents/StormGraph.js';
// import WietskeGraph from './IndividualStudents/WietkseGraph.js';
import Data from '../components/Data/Data';
class SeperatedStudentsGraphs extends React.Component {
	constructor() {
		super();
		this.state = {
			dataList: Data
		};
	}

	render() {
		return (
			<div>
				<h2>Aranka</h2>
				<ArankaGraph data={this.state.dataList} />
				<h2>Evelyn</h2>
				<EvelynGraph data={this.state.dataList} />
				<h2>Floris</h2>
				<FlorisGraph data={this.state.dataList} />
				<h2>Hector</h2>
				<HectorGraph data={this.state.dataList} />
				<h2>Martina</h2>
				<MartinaGraph data={this.state.dataList} />
				<h2>Maurits</h2>
				<MauritsGraph data={this.state.dataList} />
				<h2>Rahima</h2>
				<RahimaGraph data={this.state.dataList} />
				<h2>Sandra</h2>
				<SandraGraph data={this.state.dataList} />
				<h2>Storm</h2>
				<StormGraph data={this.state.dataList} />
			</div>
		);
	}
}

export default SeperatedStudentsGraphs;

// {/* <h2>Wietkse</h2>
// <WietskeGraph /> */}
