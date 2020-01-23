import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const EvelynGraph = (props) => {
	console.log('props.data', props.data);

	const EvelynProjects = props.data.filter((obj) => {
		return obj.name === 'Evelyn';
	});
	console.log(EvelynProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Evelyn</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={EvelynProjects} x="project" y="dificulty" />
					<VictoryBar data={EvelynProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default EvelynGraph;
