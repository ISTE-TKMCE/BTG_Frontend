import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./HomePage";
import Instructions from "./instructions"
import About from "./About"
import Navbar from "./common/Navbar";
import Leaderboard from "./leaderboard"
import Login from "./Login"
import Register from "./Register"
import Chooseplayer from "./playerchoose"
import Stats from "./stats"
import { ABOUT, LEADERBOARD, SELECT_TEAM,HOME, CONTACT } from "../constants/routes";
import { BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
import Contacts from "./Contacts";
import "./App.css";
export default class App extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return(
        <div className="bg-gray-900 z-0">
<BrowserRouter>
            <div className="z-40 w-full">
                
                <Navbar />
            </div>
            <Switch>
            <Route exact path={HOME} component={Homepage} />
                <Route exact path="/instructions" component={Instructions} />
                <Route exact  path="/login" component={Login} />
                <Route exact  path="/register" component={Register} />
                <Route exact  path={LEADERBOARD} component={Leaderboard} />
                <Route exact  path={ABOUT} component={About} />
                <Route exact path={SELECT_TEAM} component={Chooseplayer} />
                <Route exact path="/stats" component={Stats} />
                <Route exact path={CONTACT} component={Contacts} />
                </Switch>
        </BrowserRouter>
        </div>
        );
    }
}

