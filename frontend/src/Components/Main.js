import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import Expenses from "./Expenses"
import AddExpense from './AddExpense'
import Chart from './Chart'
//import "./App.css";
import Auth from "./Auth";
import { useRef } from "react";
//import "./App.css";
//import Homes from "./Componenets/Home";
import Cookies from "universal-cookie";
import { useState } from "react";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";
const cookies = new Cookies();

const Main=()=>{
    const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
      const [room, setRoom] = useState("");
      const roomInputRef = useRef(null);

      const signUserOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
        setRoom(null);
      };

      if (!isAuth) {
        return <Auth setIsAuth={setIsAuth} />;

      }

        return(
            <div>
				<NavBar/>
				{/*Render Different Component based on Route*/}
	            <Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/home' component={Home} />
					<Route path='/expenses' component={Expenses} />
					<Route path='/add' component={AddExpense} />
					<Route path='/statistic' component={Chart} />
				</Switch>
			</div>
        )

}

export default Main;