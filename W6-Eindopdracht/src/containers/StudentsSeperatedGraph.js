import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';
import Data from '../components/Data/Data.js';
import { render } from 'react-dom';

class StudentsSeperatedGraph extends React.Component {
	constructor() {
		super();
		this.state = {
			dataList: Data
		};
	}
	render() {
		const studentNames = Data.map((item) => item.name); //to only get the names of the projects
		// console.log('studentNames', studentNames);

		const uniquestudentNames = studentNames.filter((name, index, names) => {
			// Om dubbele namen er uit te filteren
			return names.indexOf(name) === index;
		});
		console.log('uniquestudentNames', uniquestudentNames);

		return <div />;
	}
}

export default StudentsSeperatedGraph;

// const StudentsSeperatedGraph = (props) => {
// 	// console.log('props.data', props.data);

// 	const studentNames = props.data.map((item) => item.name); //to only get the names of the students
// 	// console.log('studentNames', studentNames);

// 	const uniqueStudentNames = studentNames.filter((name, index, names) => {
// 		// Om dubbele namen er uit te filteren
// 		return names.indexOf(name) === index;
// 	});
// 	console.log('uniqueStudentNames', uniqueStudentNames);

// 	const StudentProjects = props.data.filter((obj) => {
// 		return obj.name === uniqueStudentNames;
// 	});
// 	console.log(StudentProjects);

// 	const Values = function() {
// 		const projectValuesFiltered = props.data.filter((item) => item.name === name);
// 		return {
// 			project: projectValuesFiltered.name,
// 			dificulty: projectValuesFiltered.dificulty,
// 			enjoyability: projectValuesFiltered.enjoyability
// 		};
// 	};

// 	const graphForEachStudent = uniqueStudentNames.map((student) => {
// 		return (
// 			<div>
// 				<h3 style={{ textAlign: 'center', color: 'raisinblack' }}>{student}</h3>
// 				<VictoryChart domainPadding={20} width={5000}>
// 					<VictoryGroup offset={15}>
// 						<VictoryBar data={Values} x="project" y="dificulty" />
// 						<VictoryBar data={Values} x="project" y="enjoyability" />
// 					</VictoryGroup>
// 				</VictoryChart>
// 			</div>
// 		);
// 	});

// 	return <div>{graphForEachStudent}</div>;
// };
