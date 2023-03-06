import React, { Component } from 'react';

//make API calls to backend
import axios from 'axios';

//CSS Framework for developing responsive websites
import { Table } from "react-bootstrap";

class Expenses extends Component  {
	constructor(props) {
        super(props);
        this.state = {
            result: [],
            error: ""
        }
    }
	
	componentDidMount() {
        axios.get('http://localhost:3000/expenses')
            .then((response) => {
                //update the state with the response data
				console.log(response);
                this.setState({
                    result: response.data
                });
            })
            .catch(err => {
                this.setState({
                    error: <div className="alert alert-warning" style={{ marginTop: '5%' }}>Error</div>
                })
            });

    }

    render(){
		let error = this.state.error;

        let details = this.state.result.map(expenses => {
            return (
                <tr>
                    <td>{expenses.date}</td>
                    <td>{expenses.description}</td>
					<td>${expenses.cost}</td>
                </tr>
            )
        })
        return(
			<div>
                <div className="container" style={{ textAlign: "center" }}>
                    <br></br>
                    <h1>Expenses</h1>
                    <br></br>
                    <div>
                        <Table>
							<colgroup>
								<col span="1" style={{width: '20%'}}/>
								<col span="1" style={{width: '60%'}}/>
								<col span="1" style={{width: '20%'}}/>
							</colgroup>
							
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Date</th>
									<th scope="col">Description</th>
									<th scope="col">Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*Display the Tbale row based on data recieved*/}
                                {details}
                            </tbody>
                        </Table>
                        {error}
                    </div>
                </div>
            </div>
        )
    }
}

export default Expenses;