import React, { Component } from 'react';

//make API calls to backend
import axios from 'axios';

class Balance extends Component {
	constructor(props) {
        super(props);
        this.state = {
            total: "",
			error: ""
        }
    }
	
	componentDidMount() {
        axios.get('http://localhost:3000/balance')
            .then((response) => {
                //update the state with the response data
				console.log(response);
                this.setState({
                    total: response.data
                });
            })
            .catch(err => {
                this.setState({
                    error: <div className="alert alert-warning" style={{ marginTop: '5%' }}>Error here</div>
                })
            });

    }
	
	render() {
		return (
			<div>
				<div className="container" style={{ textAlign: "center" }}>
					<br></br>
					<h1>Balance</h1>
					<h2>${this.state.total}</h2>
					{this.state.error}
				</div>
			</div>
		)
	}
}

export default Balance;