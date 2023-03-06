import React, { Component } from 'react';
import Balance from './Balance';

class Home extends Component {
	render() {
		return (
			<div>
				<Balance/>
				<div style={{ textAlign: "center" }}>
					<br></br>
					<a href="/add" class="btn btn-primary"> Add an Expense </a>
				</div>
			</div>
		)
	}
}

export default Home;