import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const RahimaGraph = (props) => {
	// console.log('props.data', props.data);

	const RahimaProjects = props.data.filter((obj) => {
		return obj.name === 'Rahima';
	});
	// console.log(RahimaProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Rahima</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={RahimaProjects} x="project" y="dificulty" />
					<VictoryBar data={RahimaProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default RahimaGraph;
