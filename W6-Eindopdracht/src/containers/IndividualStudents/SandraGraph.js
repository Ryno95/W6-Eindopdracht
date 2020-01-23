import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const SandraGraph = (props) => {
	console.log('props.data', props.data);

	const SandraProjects = props.data.filter((obj) => {
		return obj.name === 'Sandra';
	});
	console.log(SandraProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Sandra</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={SandraProjects} x="project" y="dificulty" />
					<VictoryBar data={SandraProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default SandraGraph;
