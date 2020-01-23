import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const FlorisGraph = (props) => {
	console.log('props.data', props.data);

	const FlorisProjects = props.data.filter((obj) => {
		return obj.name === 'Floris';
	});
	console.log(FlorisProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Floris</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={FlorisProjects} x="project" y="dificulty" />
					<VictoryBar data={FlorisProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default FlorisGraph;
