import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const HectorGraph = (props) => {
	console.log('props.data', props.data);

	const HectorProjects = props.data.filter((obj) => {
		return obj.name === 'Hector';
	});
	console.log(HectorProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Hector</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={HectorProjects} x="project" y="dificulty" />
					<VictoryBar data={HectorProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default HectorGraph;
