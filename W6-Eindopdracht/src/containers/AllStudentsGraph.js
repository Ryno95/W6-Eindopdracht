import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const AllStudentsGraph = (props) => {
	// console.log('props.data', props.data);

	const projectNames = props.data.map((item) => item.project); //to only get the names of the projects
	// console.log('projectNames', projectNames);

	const uniqueprojectNames = projectNames.filter((name, index, names) => {
		// Om dubbele namen er uit te filteren
		return names.indexOf(name) === index;
	});
	// console.log('uniqueprojectNames', uniqueprojectNames);

	const projectAverages = uniqueprojectNames.map((name) => {
		const projectValues = props.data.filter((item) => item.project === name);
		const dificultyAverage = projectValues.reduce((prev, curr) => prev + curr.dificulty, 0) / projectValues.length; //To calculate average of dificulty
		const enjoyabilityAverage =
			projectValues.reduce((prev, curr) => prev + curr.enjoyability, 0) / projectValues.length; //To calculate the average of enjoyability
		return {
			project: name,
			dificultyAverage: dificultyAverage,
			enjoyabilityAverage: enjoyabilityAverage
		};
	});
	// Waarde om mee te geven aan de VictoryBar:
	// console.log(projectAverages); //checking to see if the right info is being returned

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'raisinblack' }}>All Students Average</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={projectAverages} x="project" y="dificultyAverage" />
					<VictoryBar data={projectAverages} x="project" y="enjoyabilityAverage" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default AllStudentsGraph;
