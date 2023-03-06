import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {auth} from "../firebase"
import {signOut} from "firebase/auth"
import { useState } from "react";
import Cookies from "universal-cookie"
import "./NavBar.css"
const cookies = new Cookies();
class NavBar extends Component {


	render() {

		return (
			<div>
				<Navbar bg="blue" variant="dark" >
				<Navbar.Brand href="/home">Expense Tracker</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/home">Home</Nav.Link>
					<Nav.Link href="/expenses">Expenses</Nav.Link>
					<Nav.Link href="/add">Add</Nav.Link>
					<Nav.Link href="/statistic">Statistic</Nav.Link>

				</Nav>


				</Navbar>
			</div>
		)
	}
}

export default NavBar;