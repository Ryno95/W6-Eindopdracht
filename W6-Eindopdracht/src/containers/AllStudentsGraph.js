import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup } from 'victory';
import Data from '../components/Data/Data';

class AllStudentsGraph extends React.Component {
	constructor() {
		super();
		this.state = {
			dificulty: {
				data: { fill: 'red', visibility: 'visible' }
			},
			// naast de fill ook visibility gebruiken. visible or hidden.
			enjoyability: {
				data: { fill: 'green', visibility: 'visible' }
			}
		};
	}

	render() {
		const projectNames = Data.map((item) => item.project); //to only get the names of the projects
		// console.log('projectNames', projectNames);

		const uniqueprojectNames = projectNames.filter((name, index, names) => {
			// Om dubbele namen er uit te filteren
			return names.indexOf(name) === index;
		});
		// console.log('uniqueprojectNames', uniqueprojectNames);

		const projectAverages = uniqueprojectNames.map((name) => {
			const projectValues = Data.filter((item) => item.project === name);
			const dificultyAverage =
				projectValues.reduce((prev, curr) => prev + curr.dificulty, 0) / projectValues.length; //To calculate average of dificulty
			const enjoyabilityAverage =
				projectValues.reduce((prev, curr) => prev + curr.enjoyability, 0) / projectValues.length; //To calculate the average of enjoyability
			return {
				project: name,
				dificultyAverage: dificultyAverage,
				enjoyabilityAverage: enjoyabilityAverage
			};
		});
		// Waarde om mee te geven aan de VictoryBar:
		// console.log(projectAverages); //checking to see if the right info is being returned

		const dificultyChange = (e) => {
			if (e.target.checked) {
				// console.log('Checked');
				this.setState({
					enjoyability: {
						data: { fill: 'red', visibility: 'hidden' }
					}
				});
			} else {
				this.setState({
					enjoyability: {
						data: { fill: 'red', visibility: 'visible' }
					}
				});
			}
		};

		const enjoyabiltyChange = (e) => {
			if (e.target.checked) {
				// console.log('Checked');
				this.setState({
					dificulty: {
						data: { fill: 'green', visibility: 'hidden' }
					}
				});
			} else {
				this.setState({
					dificulty: {
						data: { fill: 'green', visibility: 'visible' }
					}
				});
			}
		};

		return (
			<div style={{ textAlign: 'center' }}>
				<label>
					<input type="checkbox" name="filter" value="dificulty" onChange={dificultyChange} />
					Difficulty
				</label>
				<label>
					<input type="checkbox" name="filter" value="enjoyability" onChange={enjoyabiltyChange} />
					Enjoyability
				</label>
				<h3 style={{ textAlign: 'center', color: 'raisinblack' }}>All Students Average</h3>
				<VictoryChart domainPadding={20} width={5000}>
					<VictoryGroup offset={15}>
						<VictoryBar
							style={this.state.dificulty}
							data={projectAverages}
							x="project"
							y="dificultyAverage"
						/>
						<VictoryBar
							style={this.state.enjoyability}
							data={projectAverages}
							x="project"
							y="enjoyabilityAverage"
						/>
					</VictoryGroup>
				</VictoryChart>
			</div>
		);
	}
}

export default AllStudentsGraph;
