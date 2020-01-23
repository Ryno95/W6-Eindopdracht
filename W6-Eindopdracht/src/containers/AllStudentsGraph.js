import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLine, VictoryGroup } from 'victory';
import { render } from 'react-dom';
import data from '../components/Data/Data';

class AllStudentsGraph extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<VictoryChart domainPadding={20} width={5000}>
				<VictoryGroup offset={20}>
					<VictoryBar data={data} x="project" y="dificulty" />
					<VictoryBar data={data} x="project" y="enjoyability" />
				</VictoryGroup>
			</VictoryChart>
		);
	}
}

export default AllStudentsGraph;
