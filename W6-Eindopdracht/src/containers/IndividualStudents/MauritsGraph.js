import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';

const MauritsGraph = (props) => {
	console.log('props.data', props.data);

	const MauritsProjects = props.data.filter((obj) => {
		return obj.name === 'Maurits';
	});
	console.log(MauritsProjects);

	return (
		<div>
			<h3 style={{ textAlign: 'center', color: 'darkred' }}>Maurits</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={20} width={5000}>
				<VictoryGroup offset={15}>
					<VictoryBar data={MauritsProjects} x="project" y="dificulty" />
					<VictoryBar data={MauritsProjects} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default MauritsGraph;
