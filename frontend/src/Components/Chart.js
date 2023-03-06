import React, { Component } from 'react';

//make API calls to backend
import axios from 'axios';

import { AgChartsReact } from 'ag-charts-react';

export default class Chart extends Component {
	dataPoints = [];
	
	constructor(props) {
        super(props);

        this.state = {
            options: {
				type: 'line',
				autoSize: true,
				title: {
				    text: 'Expenses',
				},
				legend: {
				    enabled: false
				},
                data: this.dataPoints,
                series: [{
                    xKey: 'date',
                    yKey: 'spending',
                }],
            },
        };
    }
	
	componentDidMount(){
		axios.get('http://localhost:3000/expenses')
		.then((response) => {
			var i;
			var temp = 0;
			/* calculation for the days with multiple expenses entered */
			for (i = 0; i < response.data.length; i++) {
				if (i !== (response.data.length - 1) && !response.data[i + 1].date.localeCompare(response.data[i].date)) {
					temp += response.data[i].cost;
				} else {
					temp += response.data[i].cost;
					var day = response.data[i].date.substring(8, 10);
					this.dataPoints.push({
						date: String(day),
						spending: Number(temp),
					});
					temp = 0;
				}
			}

			this.setState({
				options: {
			    	...this.state.options,
			    	data: this.dataPoints,
				},
			});
		});
	}
	
    render() {
        return <AgChartsReact options={this.state.options} />;
    }
}