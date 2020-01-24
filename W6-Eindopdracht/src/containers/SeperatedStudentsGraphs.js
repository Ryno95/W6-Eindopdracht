import React from 'react';
import ArankaGraph from './IndividualStudents/ArankaGraph.js';
import EvelynGraph from './IndividualStudents/EvelynGraph.js';
import FlorisGraph from './IndividualStudents/FlorisGraph.js';
import HectorGraph from './IndividualStudents/HectorGraph.js';
import MartinaGraph from './IndividualStudents/MartinaGraph.js';
import MauritsGraph from './IndividualStudents/MauritsGraph.js';
import RahimaGraph from './IndividualStudents/RahimaGraph.js';
import SandraGraph from './IndividualStudents/SandraGraph.js';
import StormGraph from './IndividualStudents/StormGraph.js';
import WietskeGraph from './IndividualStudents/WietskeGraph.js';
import Data from '../components/Data/Data';

class SeperatedStudentsGraphs extends React.Component {
	constructor() {
		super();
		this.state = {
			dataList: Data
		};
		//array aan state +, waardes van welke graphs getoond moeten worden,
		// in handleCheckBoxChange pas de state aan door die juiste name in de state te maken
		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
	}

	handleCheckBoxChange = (e) => {
		console.log('checkbox Change', e.target);
		return e;
	};

	render() {
		const StudentNames = this.state.dataList.map((item) => item.name); //to only get the names of the students
		// console.log('StudentNames', StudentNames);

		const uniqueStudentNames = StudentNames.filter((name, index, names) => {
			// Om dubbele namen er uit te filteren
			return names.indexOf(name) === index;
		});
		// console.log(uniqueStudentNames);

		const checkBoxes = uniqueStudentNames.map((student) => {
			return (
				<label>
					<input type="checkbox" name={student} onChange={this.handleCheckBoxChange.bind(this)} />
					{student}
				</label>
			);
		});

		return (
			<div>
				<div style={{ textAlign: 'center' }}>
					Choose Student to view:
					{checkBoxes}
				</div>
				<ArankaGraph data={this.state.dataList} />
				<EvelynGraph data={this.state.dataList} />
				<FlorisGraph data={this.state.dataList} />
				<HectorGraph data={this.state.dataList} />
				<MartinaGraph data={this.state.dataList} />
				<MauritsGraph data={this.state.dataList} />
				<RahimaGraph data={this.state.dataList} />
				<SandraGraph data={this.state.dataList} />
				<StormGraph data={this.state.dataList} />
				<WietskeGraph data={this.state.dataList} />
			</div>
		);
	}
}

export default SeperatedStudentsGraphs;
