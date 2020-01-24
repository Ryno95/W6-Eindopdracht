import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const ArankaGraph = (props) => {
	// console.log('props.data', props.data);

	const ArankaProjects = props.data.filter((obj) => {
		return obj.name === 'Aranka';
	});
	// console.log(ArankaProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Aranka</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={ArankaProjects} x="project" y="dificulty" />
					<VictoryBar data={ArankaProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default ArankaGraph;
