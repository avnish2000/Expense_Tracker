import React, { Component } from 'react';
import "./AddExpense.css"
//make API calls to backend
import axios from 'axios';

class AddExpense extends Component {
	constructor(props) {
        super(props);
        this.state = {
			date: "",
            description: "",
			cost: ""
        }
    }

	changeDescriptionHandler = event => {
		this.setState({description: event.target.value});
	}
	
	changeCostHandler = event => {
		this.setState({cost: event.target.value});
	}
	
	changeDateHandler = event => {
		this.setState({date: event.target.value});
	}

	addExpense = () => {
		console.log(this.state.date)
		if (this.state.date && this.state.description && this.state.cost) {
			const expense = {
			date : this.state.date,
			description: this.state.description,
			cost: this.state.cost
			};
		
			axios.post('http://localhost:3000/add', expense)
		
			alert("Expense Successfully Added")
		}
	}

	cancel() {
        this.props.history.push('/home');
    }

	render() {
		return (
			<div>
				<div className="container">
					<br></br>
					<h1 style={{ textAlign: "center" }}>Add an Expense</h1>
					<br></br>
					<div className="form-container">
						<form autoComplete="off">
		                    <div className="form-group">
		                        <label htmlFor="description"> Description </label>
		                        <input id="description" placeholder="Enter description" className="form-control" onChange={this.changeDescriptionHandler} required/>
		                    </div>
		                    <div className="form-group">
		                        <label htmlFor="cost"> Cost </label>
								<div className="form-inline">
		                        	$&nbsp;<input type="number" id="cost" placeholder="Enter cost" className="form-control" step="0.01" onChange={this.changeCostHandler} required/>
								</div>
							</div>
		                    <div className="form-group">
		                        <label htmlFor="date"> Date </label>
								<input type="date" id="date" className="form-control" onChange={this.changeDateHandler} required/>
							</div>
							<button type="submit" className="btn btn-success" onClick={this.addExpense}> Add </button>
							&nbsp;&nbsp;
	                   		<button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
		                </form>
					</div>
				</div>
			</div>
		)
	}
}

export default AddExpense;