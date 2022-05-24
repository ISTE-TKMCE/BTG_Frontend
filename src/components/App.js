import React, { Component , useState} from "react";
import { render } from "react-dom";
import Homepage from "./HomePage";
import Instructions from "./instructions";
import About from "./About";
import Navbar from "./common/navbar";
import Leaderboard from "./leaderboard";
import Login from "./Login";
import givePoints from "./giveplayerCredits";
import Chooseplayer from "./playerchoose";

import {
  ABOUT,
  LEADERBOARD,
  SELECT_TEAM,
  HOME,
  CONTACT,
} from "../constants/routes";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Contacts from "./Contacts";
import "./App.css";
import useToken from '../hooks/useToken';





function App()  {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
      }

    
    return (
      <div className=" z-0">
        <BrowserRouter>
          <Switch>
            <Route exact path={HOME} component={Homepage} />
            <Route exact path="/instructions" component={Instructions} />
            {/* <Route exact path="/login" component={Login} /> */}

            <Route exact path={LEADERBOARD} component={Leaderboard} />
            <Route exact path={ABOUT} component={About} />
            <Route exact path={SELECT_TEAM} component={Chooseplayer} />
            <Route exact path="/givepoints" component={givePoints} />
            <Route exact path={CONTACT} component={Contacts} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  
}
export default App;

