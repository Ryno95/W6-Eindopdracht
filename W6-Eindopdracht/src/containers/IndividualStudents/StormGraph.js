import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const StormGraph = (props) => {
	// console.log('props.data', props.data);

	const StormProjects = props.data.filter((obj) => {
		return obj.name === 'Storm';
	});
	// console.log(StormProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Storm</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={StormProjects} x="project" y="dificulty" />
					<VictoryBar data={StormProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default StormGraph;
