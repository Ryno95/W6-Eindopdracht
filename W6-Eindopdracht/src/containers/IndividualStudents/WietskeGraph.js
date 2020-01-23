import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const WietskeGraph = (props) => {
	console.log('props.data', props.data);

	const WietskeProjects = props.data.filter((obj) => {
		return obj.name === 'Wietske';
	});
	console.log(WietskeProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Wietske</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={WietskeProjects} x="project" y="dificulty" />
					<VictoryBar data={WietskeProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default WietskeGraph;
