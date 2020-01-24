import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const MartinaGraph = (props) => {
	// console.log('props.data', props.data);

	const MartinaProjects = props.data.filter((obj) => {
		return obj.name === 'Martina';
	});
	// console.log(MartinaProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Martina</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={MartinaProjects} x="project" y="dificulty" />
					<VictoryBar data={MartinaProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default MartinaGraph;
